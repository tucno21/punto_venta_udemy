/*
 * This combined file was created by the DataTables downloader builder:
 *   https://datatables.net/download
 *
 * To rebuild or modify this file with the latest versions of the included
 * software please visit:
 *   https://datatables.net/download/#bs5/jq-3.6.0/jszip-2.5.0/dt-1.12.1/b-2.2.3/b-colvis-2.2.3/b-html5-2.2.3/b-print-2.2.3/r-2.3.0
 *
 * Included libraries:
 *  jQuery 3.6.0, JSZip 2.5.0, DataTables 1.12.1, Buttons 2.2.3, Column visibility 2.2.3, HTML5 export 2.2.3, Print view 2.2.3, Responsive 2.3.0
 */

/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    E = C.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f = "3.6.0",
    S = function (e, t) {
      return new S.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (S.fn = S.prototype =
    {
      jquery: f,
      constructor: S,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = S.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return S.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          S.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (S.extend = S.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || S.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = S.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    S.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = v.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (p(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (p(Object(e))
              ? S.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: y,
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var d = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      S = "sizzle" + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      j = function (e, t) {
        return e === t && (l = !0), 0;
      },
      D = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        M +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      F =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      B = new RegExp(M + "+", "g"),
      $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      H.apply((t = O.call(p.childNodes)), p.childNodes),
        t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (T(e), (e = e || C), E)) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !N[t + " "] &&
          (!v || !v.test(t)) &&
          (1 !== p || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = s.replace(re, ie))
                : e.setAttribute("id", (s = S))),
              (o = (l = h(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",");
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace($, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[S] = !0), e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : p;
        return (
          r != C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            p != C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (d.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (d.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = S),
                !C.getElementsByName || !C.getElementsByName(S).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  S +
                  "'></a><select id='" +
                  S +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                  (t = C.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + S + "+*").length ||
                    v.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  v.push("[\\r\\n\\f]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", F);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (j = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == C || (e.ownerDocument == p && y(p, e))
                        ? -1
                        : t == C || (t.ownerDocument == p && y(p, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e == C
                      ? -1
                      : t == C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] == p
                    ? -1
                    : s[r] == p
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (T(e),
        d.matchesSelector &&
          E &&
          !N[t + " "] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          N(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(j),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = m[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                m(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [k, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [k, d]),
                          a === e)
                        )
                          break;
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace($, "$1"));
            return s[S]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [k, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = Ce(v)),
        y && !y[S] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v)) {
            (i = Te(p, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                y(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = y ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace($, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace($, " ") }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = A[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
            (a = A(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (x = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG("*", i)),
                  h = (k += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t == C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (k = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = y[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r);
                }
                return i && ((k = h), (w = p)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = S.split("").sort(j).join("") === S),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(C);
  (S.find = d),
    (S.expr = d.selectors),
    (S.expr[":"] = S.expr.pseudos),
    (S.uniqueSort = S.unique = d.uniqueSort),
    (S.text = d.getText),
    (S.isXMLDoc = d.isXML),
    (S.contains = d.contains),
    (S.escapeSelector = d.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, n, r) {
    return m(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? S.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? S.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : S.filter(n, e, r);
  }
  (S.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
        return 1 < r ? S.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1)
          .length;
      },
    });
  var D,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || D), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : q.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof S ? t[0] : t),
          S.merge(
            this,
            S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          N.test(r[1]) && S.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(S)
      : S.makeArray(e, this);
  }).prototype = S.fn),
    (D = S(E));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && S.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return h(e, "parentNode", n);
        },
        next: function (e) {
          return O(e, "nextSibling");
        },
        prev: function (e) {
          return O(e, "previousSibling");
        },
        nextAll: function (e) {
          return h(e, "nextSibling");
        },
        prevAll: function (e) {
          return h(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return h(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return h(e, "previousSibling", n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              S.merge([], e.childNodes));
        },
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length &&
              (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (S.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          S.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : S.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = S.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    S.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              S.Callbacks("memory"),
              S.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return S.Deferred(function (r) {
                S.each(o, function (e, t) {
                  var n = m(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && m(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, R, s),
                                  l(u, o, M, s),
                                  l(u, o, R, o.notifyWith)
                                ))
                            : (a !== R && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            S.Deferred.exceptionHook &&
                              S.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== M && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (S.Deferred.getStackHook &&
                        (t.stackTrace = S.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return S.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                  o[1][3].add(l(0, e, m(t) ? t : R)),
                  o[2][3].add(l(0, e, m(n) ? n : M));
              }).promise();
            },
            promise: function (e) {
              return null != e ? S.extend(e, a) : a;
            },
          },
          s = {};
        return (
          S.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (I(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) I(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      W.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (S.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = S.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B),
      C.removeEventListener("load", B),
      S.ready();
  }
  (S.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) ||
          ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
          F.resolveWith(E, [S]);
      },
    }),
    (S.ready.then = F.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(S.ready)
      : (E.addEventListener("DOMContentLoaded", B),
        C.addEventListener("load", B));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(S(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in r
              ? [t]
              : t.match(P) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || S.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : J.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = X(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              Q.set(this, n);
            })
          : $(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = Q.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  Q.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    S.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, S.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Y.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
    );
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return S.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (S.cssNumber[t] || ("px" !== l && +u)) &&
        te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        S.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), S.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Y.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = S.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ue[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? S(this).show() : S(this).hide();
          });
    },
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = "<textarea>x</textarea>"),
    (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = "<option></option>"),
    (y.option = !!ce.lastChild);
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ve(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    y.option ||
      (ge.optgroup = ge.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ie(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var be = /^([^.]*)(?:\.(.+)|)/;
  function we() {
    return !0;
  }
  function Te() {
    return !1;
  }
  function Ce(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Ee(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Ee(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Te;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return S().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, r, n);
      })
    );
  }
  function Se(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        S.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (S.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                );
            } else
              r.length &&
                (Y.set(this, i, {
                  value: S.event.trigger(
                    S.extend(r[0], S.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, we);
  }
  (S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.get(t);
      if (V(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && S.find.matchesSelector(re, i),
          n.guid || (n.guid = S.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof S && S.event.triggered !== e.type
                  ? S.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(P) || [""]).length);
        while (l--)
          (d = g = (s = be.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && S.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (S.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = be.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = S.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                S.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = S.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (S.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < S(i, this).index(l)
                  : S.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Y.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? we
              : Te),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Te,
      isPropagationStopped: Te,
      isImmediatePropagationStopped: Te,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = we),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = we),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = we),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    S.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      S.event.addProp
    ),
    S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      S.event.special[e] = {
        setup: function () {
          return Se(this, e, Ce), !1;
        },
        trigger: function () {
          return Se(this, e), !0;
        },
        _default: function () {
          return !0;
        },
        delegateType: t,
      };
    }),
    S.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        S.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    S.fn.extend({
      on: function (e, t, n, r) {
        return Ee(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Ee(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            S(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Te),
          this.each(function () {
            S.event.remove(this, e, n, t);
          })
        );
      },
    });
  var ke = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function je(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        S(e).children("tbody")[0]) ||
      e
    );
  }
  function De(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function qe(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Le(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
    }
  }
  function He(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Y.access(u, "globalEval") &&
              S.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? S._evalUrl &&
                  !u.noModule &&
                  S._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l
                  )
                : b(u.textContent.replace(Ne, ""), u, l));
    }
    return n;
  }
  function Oe(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || S.cleanData(ve(r)),
        r.parentNode &&
          (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          S.isXMLDoc(e)
        )
      )
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Le(o[r], a[r]);
        else Le(e, c);
      return (
        0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Oe(this, e, !0);
      },
      remove: function (e) {
        return Oe(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return He(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            je(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return He(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = je(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !ke.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (S.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return He(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 &&
              (S.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    S.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        S.fn[e] = function (e) {
          for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              S(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Re = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    Me = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Ie = new RegExp(ne.join("|"), "i");
  function We(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Re(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (a = S.style(e, t)),
        !y.pixelBoxStyles() &&
          Pe.test(a) &&
          Ie.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function Fe(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = E.createElement("div"),
      l = E.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (y.clearCloneStyle = "content-box" === l.style.backgroundClip),
      S.extend(y, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = E.createElement("table")),
              (t = E.createElement("tr")),
              (n = E.createElement("div")),
              (e.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (t.style.cssText = "border:1px solid"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              (n.style.display = "block"),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var Be = ["Webkit", "Moz", "ms"],
    $e = E.createElement("div").style,
    _e = {};
  function ze(e) {
    var t = S.cssProps[e] || _e[e];
    return (
      t ||
      (e in $e
        ? e
        : (_e[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Be.length;
              while (n--) if ((e = Be[n] + t) in $e) return e;
            })(e) || e))
    );
  }
  var Ue = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ve = { position: "absolute", visibility: "hidden", display: "block" },
    Ge = { letterSpacing: "0", fontWeight: "400" };
  function Ye(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Qe(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
        r
          ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n &&
              (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
          : ((u += S.css(e, "padding" + ne[a], !0, i)),
            "padding" !== n
              ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
              : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function Je(e, t, n) {
    var r = Re(e),
      i =
        (!y.boxSizingReliable() || n) &&
        "border-box" === S.css(e, "boxSizing", !1, r),
      o = i,
      a = We(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        (!y.reliableTrDimensions() && A(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Qe(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function Ke(e, t, n, r, i) {
    return new Ke.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = We(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Xe.test(t),
          l = e.style;
        if (
          (u || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
            y.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return (
        Xe.test(t) || (t = ze(s)),
        (a = S.cssHooks[t] || S.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = We(e, t, r)),
        "normal" === i && t in Ge && (i = Ge[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    S.each(["height", "width"], function (e, u) {
      S.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ue.test(S.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Je(e, u, n)
              : Me(e, Ve, function () {
                  return Je(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Re(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Qe(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Qe(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = te.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = S.css(e, u))),
            Ye(0, t, s)
          );
        },
      };
    }),
    (S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(We(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Me(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (S.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (S.cssHooks[i + o].set = Ye);
    }),
    S.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Re(e), i = t.length; a < i; a++)
                o[t[a]] = S.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((S.Tween = Ke).prototype = {
      constructor: Ke,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = Ke.propHooks[this.prop];
        return e && e.get ? e.get(this) : Ke.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = Ke.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                S.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Ke.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = Ke.prototype),
    ((Ke.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : S.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = Ke.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (S.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (S.fx = Ke.prototype.init),
    (S.fx.step = {});
  var Ze,
    et,
    tt,
    nt,
    rt = /^(?:toggle|show|hide)$/,
    it = /queueHooks$/;
  function ot() {
    et &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(ot)
        : C.setTimeout(ot, S.fx.interval),
      S.fx.tick());
  }
  function at() {
    return (
      C.setTimeout(function () {
        Ze = void 0;
      }),
      (Ze = Date.now())
    );
  }
  function st(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ut(e, t, n) {
    for (
      var r,
        i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function lt(o, e, t) {
    var n,
      a,
      r = 0,
      i = lt.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = Ze || at(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: Ze || at(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = S.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = lt.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      S.map(c, ut, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (S.Animation = S.extend(lt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (lt.tweeners[n] = lt.tweeners[n] || []),
          lt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = S._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), rt.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || S.style(e, r);
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Y.get(e, "display")),
            "none" === (c = S.css(e, "display")) &&
              (l
                ? (c = l)
                : (le([e], !0),
                  (l = e.style.display || l),
                  (c = S.css(e, "display")),
                  le([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === S.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = Y.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, "fxshow"), d))
                  S.style(e, r, d[r]);
              })),
              (u = ut(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
    },
  })),
    (S.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? S.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        S.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in S.fx.speeds
              ? (r.duration = S.fx.speeds[r.duration])
              : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }),
        r
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
            var e = lt(this, S.extend({}, t), o);
            (i || Y.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = S.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = S.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    S.each(["toggle", "show", "hide"], function (e, r) {
      var i = S.fn[r];
      S.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(st(r, !0), e, t, n);
      };
    }),
    S.each(
      {
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers;
      for (Ze = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), (Ze = void 0);
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      et || ((et = !0), ot());
    }),
    (S.fx.stop = function () {
      et = null;
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (tt = E.createElement("input")),
    (nt = E.createElement("select").appendChild(E.createElement("option"))),
    (tt.type = "checkbox"),
    (y.checkOn = "" !== tt.value),
    (y.optSelected = nt.selected),
    ((tt = E.createElement("input")).value = "t"),
    (tt.type = "radio"),
    (y.radioValue = "t" === tt.value);
  var ct,
    ft = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    },
  }),
    S.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) ||
                (i =
                  S.attrHooks[t.toLowerCase()] ||
                  (S.expr.match.bool.test(t) ? ct : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = S.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (ct = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = ft[t] || S.find.attr;
      ft[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = ft[o]),
            (ft[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (ft[o] = i)),
          r
        );
      };
    });
  var pt = /^(?:input|select|textarea|button)$/i,
    dt = /^(?:a|area)$/i;
  function ht(e) {
    return (e.match(P) || []).join(" ");
  }
  function gt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function vt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
  }
  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    },
  }),
    S.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) ||
              ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : pt.test(e.nodeName) || (dt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    y.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    S.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        S.propFix[this.toLowerCase()] = this;
      }
    ),
    S.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).addClass(t.call(this, e, gt(this)));
          });
        if ((e = vt(t)).length)
          while ((n = this[u++]))
            if (((i = gt(n)), (r = 1 === n.nodeType && " " + ht(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = ht(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).removeClass(t.call(this, e, gt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = vt(t)).length)
          while ((n = this[u++]))
            if (((i = gt(n)), (r = 1 === n.nodeType && " " + ht(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                while (-1 < r.indexOf(" " + o + " "))
                  r = r.replace(" " + o + " ", " ");
              i !== (s = ht(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = "string" === o || Array.isArray(i);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
          ? this.each(function (e) {
              S(this).toggleClass(i.call(this, e, gt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = S(this)), (r = vt(i));
                while ((e = r[t++]))
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && "boolean" !== o) || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var yt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = S.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(yt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, "value");
            return null != t ? t : ht(S.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = S(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    S.each(["radio", "checkbox"], function () {
      (S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < S.inArray(S(e).val(), t));
        },
      }),
        y.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (y.focusin = "onfocusin" in C);
  var mt = /^(?:focusinfocus|focusoutblur)$/,
    xt = function (e) {
      e.stopPropagation();
    };
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !mt.test(d + S.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[S.expando]
            ? e
            : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (Y.get(o, "events") || Object.create(null))[e.type] &&
              Y.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              V(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (S.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, xt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, xt),
              (S.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
      S.event.trigger(r, null, t);
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return S.event.trigger(e, t, n, !0);
      },
    }),
    y.focusin ||
      S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          S.event.simulate(r, e.target, S.event.fix(e));
        };
        S.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      });
  var bt = C.location,
    wt = { guid: Date.now() },
    Tt = /\?/;
  S.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName("parsererror")[0]),
      (t && !n) ||
        S.error(
          "Invalid XML: " +
            (n
              ? S.map(n.childNodes, function (e) {
                  return e.textContent;
                }).join("\n")
              : e)
        ),
      t
    );
  };
  var Ct = /\[\]$/,
    Et = /\r?\n/g,
    St = /^(?:submit|button|image|reset|file)$/i,
    kt = /^(?:input|select|textarea|keygen)/i;
  function At(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      S.each(e, function (e, t) {
        r || Ct.test(n)
          ? i(n, t)
          : At(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) At(n + "[" + t + "]", e[t], r, i);
  }
  (S.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) At(n, e[n], t, i);
    return r.join("&");
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, "elements");
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !S(this).is(":disabled") &&
              kt.test(this.nodeName) &&
              !St.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? S.map(n, function (e) {
                  return { name: t.name, value: e.replace(Et, "\r\n") };
                })
              : { name: t.name, value: n.replace(Et, "\r\n") };
          })
          .get();
      },
    });
  var Nt = /%20/g,
    jt = /#.*$/,
    Dt = /([?&])_=[^&]*/,
    qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Lt = /^(?:GET|HEAD)$/,
    Ht = /^\/\//,
    Ot = {},
    Pt = {},
    Rt = "*/".concat("*"),
    Mt = E.createElement("a");
  function It(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Wt(t, i, o, a) {
    var s = {},
      u = t === Pt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function Ft(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e;
  }
  (Mt.href = bt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: bt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            bt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Rt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": S.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e);
      },
      ajaxPrefilter: It(Ot),
      ajaxTransport: It(Pt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = qt.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || bt.href) + "").replace(
            Ht,
            bt.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""]),
          null == v.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = S.param(v.data, v.traditional)),
          Wt(Ot, v, t, T),
          h)
        )
          return T;
        for (i in ((g = S.event && v.global) &&
          0 == S.active++ &&
          S.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Lt.test(v.type)),
        (f = v.url.replace(jt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(Nt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (Tt.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Dt, "$1")),
              (o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (S.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
          S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Wt(Pt, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i &&
              -1 < S.inArray("script", v.dataTypes) &&
              S.inArray("json", v.dataTypes) < 0 &&
              (v.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (S.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --S.active || S.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, "script");
      },
    }),
    S.each(["get", "post"], function (e, i) {
      S[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          S.ajax(
            S.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              S.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    S.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          S.globalEval(e, t, n);
        },
      });
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var Bt = { 0: 200, 1223: 204 },
    $t = S.ajaxSettings.xhr();
  (y.cors = !!$t && "withCredentials" in $t),
    (y.ajax = $t = !!$t),
    S.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || ($t && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        Bt[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return S.globalEval(e), e;
        },
      },
    }),
    S.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    S.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = S("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var _t,
    zt = [],
    Ut = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = zt.pop() || S.expando + "_" + wt.guid++;
      return (this[e] = !0), e;
    },
  }),
    S.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Ut.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Ut.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Ut, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), zt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (y.createHTMLDocument =
      (((_t = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === _t.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = N.exec(e))
            ? [t.createElement(i[1])]
            : ((i = xe([e], t, o)),
              o && o.length && S(o).remove(),
              S.merge([], i.childNodes)));
      var r, i, o;
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = ht(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = S.css(e, "top")),
          (u = S.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === S.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)),
              (i.left += S.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - S.css(r, "marginTop", !0),
            left: t.left - i.left - S.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === S.css(e, "position")) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    S.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function (e) {
          return $(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    S.each(["top", "left"], function (e, n) {
      S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
        if (t)
          return (t = We(e, n)), Pe.test(t) ? S(e).position()[n] + "px" : t;
      });
    }),
    S.each({ Height: "height", Width: "width" }, function (a, s) {
      S.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          S.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return $(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? S.css(e, t, i)
                  : S.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    S.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        S.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    S.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    S.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (S.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid =
          e.guid || S.guid++),
        i
      );
  }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = A),
    (S.isFunction = m),
    (S.isWindow = x),
    (S.camelCase = X),
    (S.type = w),
    (S.now = Date.now),
    (S.isNumeric = function (e) {
      var t = S.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (S.trim = function (e) {
      return null == e ? "" : (e + "").replace(Xt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return S;
      });
  var Vt = C.jQuery,
    Gt = C.$;
  return (
    (S.noConflict = function (e) {
      return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S;
    }),
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
  );
});

/*!

JSZip - A Javascript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2014 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/master/LICENSE
*/
!(function (a) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = a();
  else if ("function" == typeof define && define.amd) define([], a);
  else {
    var b;
    "undefined" != typeof window
      ? (b = window)
      : "undefined" != typeof global
      ? (b = global)
      : "undefined" != typeof self && (b = self),
      (b.JSZip = a());
  }
})(function () {
  return (function a(b, c, d) {
    function e(g, h) {
      if (!c[g]) {
        if (!b[g]) {
          var i = "function" == typeof require && require;
          if (!h && i) return i(g, !0);
          if (f) return f(g, !0);
          throw new Error("Cannot find module '" + g + "'");
        }
        var j = (c[g] = { exports: {} });
        b[g][0].call(
          j.exports,
          function (a) {
            var c = b[g][1][a];
            return e(c ? c : a);
          },
          j,
          j.exports,
          a,
          b,
          c,
          d
        );
      }
      return c[g].exports;
    }
    for (
      var f = "function" == typeof require && require, g = 0;
      g < d.length;
      g++
    )
      e(d[g]);
    return e;
  })(
    {
      1: [
        function (a, b, c) {
          "use strict";
          var d =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          (c.encode = function (a) {
            for (var b, c, e, f, g, h, i, j = "", k = 0; k < a.length; )
              (b = a.charCodeAt(k++)),
                (c = a.charCodeAt(k++)),
                (e = a.charCodeAt(k++)),
                (f = b >> 2),
                (g = ((3 & b) << 4) | (c >> 4)),
                (h = ((15 & c) << 2) | (e >> 6)),
                (i = 63 & e),
                isNaN(c) ? (h = i = 64) : isNaN(e) && (i = 64),
                (j = j + d.charAt(f) + d.charAt(g) + d.charAt(h) + d.charAt(i));
            return j;
          }),
            (c.decode = function (a) {
              var b,
                c,
                e,
                f,
                g,
                h,
                i,
                j = "",
                k = 0;
              for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); k < a.length; )
                (f = d.indexOf(a.charAt(k++))),
                  (g = d.indexOf(a.charAt(k++))),
                  (h = d.indexOf(a.charAt(k++))),
                  (i = d.indexOf(a.charAt(k++))),
                  (b = (f << 2) | (g >> 4)),
                  (c = ((15 & g) << 4) | (h >> 2)),
                  (e = ((3 & h) << 6) | i),
                  (j += String.fromCharCode(b)),
                  64 != h && (j += String.fromCharCode(c)),
                  64 != i && (j += String.fromCharCode(e));
              return j;
            });
        },
        {},
      ],
      2: [
        function (a, b) {
          "use strict";
          function c() {
            (this.compressedSize = 0),
              (this.uncompressedSize = 0),
              (this.crc32 = 0),
              (this.compressionMethod = null),
              (this.compressedContent = null);
          }
          (c.prototype = {
            getContent: function () {
              return null;
            },
            getCompressedContent: function () {
              return null;
            },
          }),
            (b.exports = c);
        },
        {},
      ],
      3: [
        function (a, b, c) {
          "use strict";
          (c.STORE = {
            magic: "\x00\x00",
            compress: function (a) {
              return a;
            },
            uncompress: function (a) {
              return a;
            },
            compressInputType: null,
            uncompressInputType: null,
          }),
            (c.DEFLATE = a("./flate"));
        },
        { "./flate": 8 },
      ],
      4: [
        function (a, b) {
          "use strict";
          var c = a("./utils"),
            d = [
              0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615,
              3915621685, 2657392035, 249268274, 2044508324, 3772115230,
              2547177864, 162941995, 2125561021, 3887607047, 2428444049,
              498536548, 1789927666, 4089016648, 2227061214, 450548861,
              1843258603, 4107580753, 2211677639, 325883990, 1684777152,
              4251122042, 2321926636, 335633487, 1661365465, 4195302755,
              2366115317, 997073096, 1281953886, 3579855332, 2724688242,
              1006888145, 1258607687, 3524101629, 2768942443, 901097722,
              1119000684, 3686517206, 2898065728, 853044451, 1172266101,
              3705015759, 2882616665, 651767980, 1373503546, 3369554304,
              3218104598, 565507253, 1454621731, 3485111705, 3099436303,
              671266974, 1594198024, 3322730930, 2970347812, 795835527,
              1483230225, 3244367275, 3060149565, 1994146192, 31158534,
              2563907772, 4023717930, 1907459465, 112637215, 2680153253,
              3904427059, 2013776290, 251722036, 2517215374, 3775830040,
              2137656763, 141376813, 2439277719, 3865271297, 1802195444,
              476864866, 2238001368, 4066508878, 1812370925, 453092731,
              2181625025, 4111451223, 1706088902, 314042704, 2344532202,
              4240017532, 1658658271, 366619977, 2362670323, 4224994405,
              1303535960, 984961486, 2747007092, 3569037538, 1256170817,
              1037604311, 2765210733, 3554079995, 1131014506, 879679996,
              2909243462, 3663771856, 1141124467, 855842277, 2852801631,
              3708648649, 1342533948, 654459306, 3188396048, 3373015174,
              1466479909, 544179635, 3110523913, 3462522015, 1591671054,
              702138776, 2966460450, 3352799412, 1504918807, 783551873,
              3082640443, 3233442989, 3988292384, 2596254646, 62317068,
              1957810842, 3939845945, 2647816111, 81470997, 1943803523,
              3814918930, 2489596804, 225274430, 2053790376, 3826175755,
              2466906013, 167816743, 2097651377, 4027552580, 2265490386,
              503444072, 1762050814, 4150417245, 2154129355, 426522225,
              1852507879, 4275313526, 2312317920, 282753626, 1742555852,
              4189708143, 2394877945, 397917763, 1622183637, 3604390888,
              2714866558, 953729732, 1340076626, 3518719985, 2797360999,
              1068828381, 1219638859, 3624741850, 2936675148, 906185462,
              1090812512, 3747672003, 2825379669, 829329135, 1181335161,
              3412177804, 3160834842, 628085408, 1382605366, 3423369109,
              3138078467, 570562233, 1426400815, 3317316542, 2998733608,
              733239954, 1555261956, 3268935591, 3050360625, 752459403,
              1541320221, 2607071920, 3965973030, 1969922972, 40735498,
              2617837225, 3943577151, 1913087877, 83908371, 2512341634,
              3803740692, 2075208622, 213261112, 2463272603, 3855990285,
              2094854071, 198958881, 2262029012, 4057260610, 1759359992,
              534414190, 2176718541, 4139329115, 1873836001, 414664567,
              2282248934, 4279200368, 1711684554, 285281116, 2405801727,
              4167216745, 1634467795, 376229701, 2685067896, 3608007406,
              1308918612, 956543938, 2808555105, 3495958263, 1231636301,
              1047427035, 2932959818, 3654703836, 1088359270, 936918e3,
              2847714899, 3736837829, 1202900863, 817233897, 3183342108,
              3401237130, 1404277552, 615818150, 3134207493, 3453421203,
              1423857449, 601450431, 3009837614, 3294710456, 1567103746,
              711928724, 3020668471, 3272380065, 1510334235, 755167117,
            ];
          b.exports = function (a, b) {
            if ("undefined" == typeof a || !a.length) return 0;
            var e = "string" !== c.getTypeOf(a);
            "undefined" == typeof b && (b = 0);
            var f = 0,
              g = 0,
              h = 0;
            b = -1 ^ b;
            for (var i = 0, j = a.length; j > i; i++)
              (h = e ? a[i] : a.charCodeAt(i)),
                (g = 255 & (b ^ h)),
                (f = d[g]),
                (b = (b >>> 8) ^ f);
            return -1 ^ b;
          };
        },
        { "./utils": 21 },
      ],
      5: [
        function (a, b) {
          "use strict";
          function c() {
            (this.data = null), (this.length = 0), (this.index = 0);
          }
          var d = a("./utils");
          (c.prototype = {
            checkOffset: function (a) {
              this.checkIndex(this.index + a);
            },
            checkIndex: function (a) {
              if (this.length < a || 0 > a)
                throw new Error(
                  "End of data reached (data length = " +
                    this.length +
                    ", asked index = " +
                    a +
                    "). Corrupted zip ?"
                );
            },
            setIndex: function (a) {
              this.checkIndex(a), (this.index = a);
            },
            skip: function (a) {
              this.setIndex(this.index + a);
            },
            byteAt: function () {},
            readInt: function (a) {
              var b,
                c = 0;
              for (
                this.checkOffset(a), b = this.index + a - 1;
                b >= this.index;
                b--
              )
                c = (c << 8) + this.byteAt(b);
              return (this.index += a), c;
            },
            readString: function (a) {
              return d.transformTo("string", this.readData(a));
            },
            readData: function () {},
            lastIndexOfSignature: function () {},
            readDate: function () {
              var a = this.readInt(4);
              return new Date(
                ((a >> 25) & 127) + 1980,
                ((a >> 21) & 15) - 1,
                (a >> 16) & 31,
                (a >> 11) & 31,
                (a >> 5) & 63,
                (31 & a) << 1
              );
            },
          }),
            (b.exports = c);
        },
        { "./utils": 21 },
      ],
      6: [
        function (a, b, c) {
          "use strict";
          (c.base64 = !1),
            (c.binary = !1),
            (c.dir = !1),
            (c.createFolders = !1),
            (c.date = null),
            (c.compression = null),
            (c.compressionOptions = null),
            (c.comment = null),
            (c.unixPermissions = null),
            (c.dosPermissions = null);
        },
        {},
      ],
      7: [
        function (a, b, c) {
          "use strict";
          var d = a("./utils");
          (c.string2binary = function (a) {
            return d.string2binary(a);
          }),
            (c.string2Uint8Array = function (a) {
              return d.transformTo("uint8array", a);
            }),
            (c.uint8Array2String = function (a) {
              return d.transformTo("string", a);
            }),
            (c.string2Blob = function (a) {
              var b = d.transformTo("arraybuffer", a);
              return d.arrayBuffer2Blob(b);
            }),
            (c.arrayBuffer2Blob = function (a) {
              return d.arrayBuffer2Blob(a);
            }),
            (c.transformTo = function (a, b) {
              return d.transformTo(a, b);
            }),
            (c.getTypeOf = function (a) {
              return d.getTypeOf(a);
            }),
            (c.checkSupport = function (a) {
              return d.checkSupport(a);
            }),
            (c.MAX_VALUE_16BITS = d.MAX_VALUE_16BITS),
            (c.MAX_VALUE_32BITS = d.MAX_VALUE_32BITS),
            (c.pretty = function (a) {
              return d.pretty(a);
            }),
            (c.findCompression = function (a) {
              return d.findCompression(a);
            }),
            (c.isRegExp = function (a) {
              return d.isRegExp(a);
            });
        },
        { "./utils": 21 },
      ],
      8: [
        function (a, b, c) {
          "use strict";
          var d =
              "undefined" != typeof Uint8Array &&
              "undefined" != typeof Uint16Array &&
              "undefined" != typeof Uint32Array,
            e = a("pako");
          (c.uncompressInputType = d ? "uint8array" : "array"),
            (c.compressInputType = d ? "uint8array" : "array"),
            (c.magic = "\b\x00"),
            (c.compress = function (a, b) {
              return e.deflateRaw(a, { level: b.level || -1 });
            }),
            (c.uncompress = function (a) {
              return e.inflateRaw(a);
            });
        },
        { pako: 24 },
      ],
      9: [
        function (a, b) {
          "use strict";
          function c(a, b) {
            return this instanceof c
              ? ((this.files = {}),
                (this.comment = null),
                (this.root = ""),
                a && this.load(a, b),
                void (this.clone = function () {
                  var a = new c();
                  for (var b in this)
                    "function" != typeof this[b] && (a[b] = this[b]);
                  return a;
                }))
              : new c(a, b);
          }
          var d = a("./base64");
          (c.prototype = a("./object")),
            (c.prototype.load = a("./load")),
            (c.support = a("./support")),
            (c.defaults = a("./defaults")),
            (c.utils = a("./deprecatedPublicUtils")),
            (c.base64 = {
              encode: function (a) {
                return d.encode(a);
              },
              decode: function (a) {
                return d.decode(a);
              },
            }),
            (c.compressions = a("./compressions")),
            (b.exports = c);
        },
        {
          "./base64": 1,
          "./compressions": 3,
          "./defaults": 6,
          "./deprecatedPublicUtils": 7,
          "./load": 10,
          "./object": 13,
          "./support": 17,
        },
      ],
      10: [
        function (a, b) {
          "use strict";
          var c = a("./base64"),
            d = a("./zipEntries");
          b.exports = function (a, b) {
            var e, f, g, h;
            for (
              b = b || {},
                b.base64 && (a = c.decode(a)),
                f = new d(a, b),
                e = f.files,
                g = 0;
              g < e.length;
              g++
            )
              (h = e[g]),
                this.file(h.fileName, h.decompressed, {
                  binary: !0,
                  optimizedBinaryString: !0,
                  date: h.date,
                  dir: h.dir,
                  comment: h.fileComment.length ? h.fileComment : null,
                  unixPermissions: h.unixPermissions,
                  dosPermissions: h.dosPermissions,
                  createFolders: b.createFolders,
                });
            return f.zipComment.length && (this.comment = f.zipComment), this;
          };
        },
        { "./base64": 1, "./zipEntries": 22 },
      ],
      11: [
        function (a, b) {
          (function (a) {
            "use strict";
            (b.exports = function (b, c) {
              return new a(b, c);
            }),
              (b.exports.test = function (b) {
                return a.isBuffer(b);
              });
          }.call(this, "undefined" != typeof Buffer ? Buffer : void 0));
        },
        {},
      ],
      12: [
        function (a, b) {
          "use strict";
          function c(a) {
            (this.data = a), (this.length = this.data.length), (this.index = 0);
          }
          var d = a("./uint8ArrayReader");
          (c.prototype = new d()),
            (c.prototype.readData = function (a) {
              this.checkOffset(a);
              var b = this.data.slice(this.index, this.index + a);
              return (this.index += a), b;
            }),
            (b.exports = c);
        },
        { "./uint8ArrayReader": 18 },
      ],
      13: [
        function (a, b) {
          "use strict";
          var c = a("./support"),
            d = a("./utils"),
            e = a("./crc32"),
            f = a("./signature"),
            g = a("./defaults"),
            h = a("./base64"),
            i = a("./compressions"),
            j = a("./compressedObject"),
            k = a("./nodeBuffer"),
            l = a("./utf8"),
            m = a("./stringWriter"),
            n = a("./uint8ArrayWriter"),
            o = function (a) {
              if (
                a._data instanceof j &&
                ((a._data = a._data.getContent()),
                (a.options.binary = !0),
                (a.options.base64 = !1),
                "uint8array" === d.getTypeOf(a._data))
              ) {
                var b = a._data;
                (a._data = new Uint8Array(b.length)),
                  0 !== b.length && a._data.set(b, 0);
              }
              return a._data;
            },
            p = function (a) {
              var b = o(a),
                e = d.getTypeOf(b);
              return "string" === e
                ? !a.options.binary && c.nodebuffer
                  ? k(b, "utf-8")
                  : a.asBinary()
                : b;
            },
            q = function (a) {
              var b = o(this);
              return null === b || "undefined" == typeof b
                ? ""
                : (this.options.base64 && (b = h.decode(b)),
                  (b =
                    a && this.options.binary
                      ? D.utf8decode(b)
                      : d.transformTo("string", b)),
                  a ||
                    this.options.binary ||
                    (b = d.transformTo("string", D.utf8encode(b))),
                  b);
            },
            r = function (a, b, c) {
              (this.name = a),
                (this.dir = c.dir),
                (this.date = c.date),
                (this.comment = c.comment),
                (this.unixPermissions = c.unixPermissions),
                (this.dosPermissions = c.dosPermissions),
                (this._data = b),
                (this.options = c),
                (this._initialMetadata = { dir: c.dir, date: c.date });
            };
          r.prototype = {
            asText: function () {
              return q.call(this, !0);
            },
            asBinary: function () {
              return q.call(this, !1);
            },
            asNodeBuffer: function () {
              var a = p(this);
              return d.transformTo("nodebuffer", a);
            },
            asUint8Array: function () {
              var a = p(this);
              return d.transformTo("uint8array", a);
            },
            asArrayBuffer: function () {
              return this.asUint8Array().buffer;
            },
          };
          var s = function (a, b) {
              var c,
                d = "";
              for (c = 0; b > c; c++)
                (d += String.fromCharCode(255 & a)), (a >>>= 8);
              return d;
            },
            t = function () {
              var a,
                b,
                c = {};
              for (a = 0; a < arguments.length; a++)
                for (b in arguments[a])
                  arguments[a].hasOwnProperty(b) &&
                    "undefined" == typeof c[b] &&
                    (c[b] = arguments[a][b]);
              return c;
            },
            u = function (a) {
              return (
                (a = a || {}),
                a.base64 !== !0 ||
                  (null !== a.binary && void 0 !== a.binary) ||
                  (a.binary = !0),
                (a = t(a, g)),
                (a.date = a.date || new Date()),
                null !== a.compression &&
                  (a.compression = a.compression.toUpperCase()),
                a
              );
            },
            v = function (a, b, c) {
              var e,
                f = d.getTypeOf(b);
              if (
                ((c = u(c)),
                "string" == typeof c.unixPermissions &&
                  (c.unixPermissions = parseInt(c.unixPermissions, 8)),
                c.unixPermissions && 16384 & c.unixPermissions && (c.dir = !0),
                c.dosPermissions && 16 & c.dosPermissions && (c.dir = !0),
                c.dir && (a = x(a)),
                c.createFolders && (e = w(a)) && y.call(this, e, !0),
                c.dir || null === b || "undefined" == typeof b)
              )
                (c.base64 = !1), (c.binary = !1), (b = null), (f = null);
              else if ("string" === f)
                c.binary &&
                  !c.base64 &&
                  c.optimizedBinaryString !== !0 &&
                  (b = d.string2binary(b));
              else {
                if (((c.base64 = !1), (c.binary = !0), !(f || b instanceof j)))
                  throw new Error(
                    "The data of '" + a + "' is in an unsupported format !"
                  );
                "arraybuffer" === f && (b = d.transformTo("uint8array", b));
              }
              var g = new r(a, b, c);
              return (this.files[a] = g), g;
            },
            w = function (a) {
              "/" == a.slice(-1) && (a = a.substring(0, a.length - 1));
              var b = a.lastIndexOf("/");
              return b > 0 ? a.substring(0, b) : "";
            },
            x = function (a) {
              return "/" != a.slice(-1) && (a += "/"), a;
            },
            y = function (a, b) {
              return (
                (b = "undefined" != typeof b ? b : !1),
                (a = x(a)),
                this.files[a] ||
                  v.call(this, a, null, { dir: !0, createFolders: b }),
                this.files[a]
              );
            },
            z = function (a, b, c) {
              var f,
                g = new j();
              return (
                a._data instanceof j
                  ? ((g.uncompressedSize = a._data.uncompressedSize),
                    (g.crc32 = a._data.crc32),
                    0 === g.uncompressedSize || a.dir
                      ? ((b = i.STORE),
                        (g.compressedContent = ""),
                        (g.crc32 = 0))
                      : a._data.compressionMethod === b.magic
                      ? (g.compressedContent = a._data.getCompressedContent())
                      : ((f = a._data.getContent()),
                        (g.compressedContent = b.compress(
                          d.transformTo(b.compressInputType, f),
                          c
                        ))))
                  : ((f = p(a)),
                    (!f || 0 === f.length || a.dir) &&
                      ((b = i.STORE), (f = "")),
                    (g.uncompressedSize = f.length),
                    (g.crc32 = e(f)),
                    (g.compressedContent = b.compress(
                      d.transformTo(b.compressInputType, f),
                      c
                    ))),
                (g.compressedSize = g.compressedContent.length),
                (g.compressionMethod = b.magic),
                g
              );
            },
            A = function (a, b) {
              var c = a;
              return a || (c = b ? 16893 : 33204), (65535 & c) << 16;
            },
            B = function (a) {
              return 63 & (a || 0);
            },
            C = function (a, b, c, g, h) {
              var i,
                j,
                k,
                m,
                n =
                  (c.compressedContent,
                  d.transformTo("string", l.utf8encode(b.name))),
                o = b.comment || "",
                p = d.transformTo("string", l.utf8encode(o)),
                q = n.length !== b.name.length,
                r = p.length !== o.length,
                t = b.options,
                u = "",
                v = "",
                w = "";
              (k = b._initialMetadata.dir !== b.dir ? b.dir : t.dir),
                (m = b._initialMetadata.date !== b.date ? b.date : t.date);
              var x = 0,
                y = 0;
              k && (x |= 16),
                "UNIX" === h
                  ? ((y = 798), (x |= A(b.unixPermissions, k)))
                  : ((y = 20), (x |= B(b.dosPermissions, k))),
                (i = m.getHours()),
                (i <<= 6),
                (i |= m.getMinutes()),
                (i <<= 5),
                (i |= m.getSeconds() / 2),
                (j = m.getFullYear() - 1980),
                (j <<= 4),
                (j |= m.getMonth() + 1),
                (j <<= 5),
                (j |= m.getDate()),
                q &&
                  ((v = s(1, 1) + s(e(n), 4) + n),
                  (u += "up" + s(v.length, 2) + v)),
                r &&
                  ((w = s(1, 1) + s(this.crc32(p), 4) + p),
                  (u += "uc" + s(w.length, 2) + w));
              var z = "";
              (z += "\n\x00"),
                (z += q || r ? "\x00\b" : "\x00\x00"),
                (z += c.compressionMethod),
                (z += s(i, 2)),
                (z += s(j, 2)),
                (z += s(c.crc32, 4)),
                (z += s(c.compressedSize, 4)),
                (z += s(c.uncompressedSize, 4)),
                (z += s(n.length, 2)),
                (z += s(u.length, 2));
              var C = f.LOCAL_FILE_HEADER + z + n + u,
                D =
                  f.CENTRAL_FILE_HEADER +
                  s(y, 2) +
                  z +
                  s(p.length, 2) +
                  "\x00\x00\x00\x00" +
                  s(x, 4) +
                  s(g, 4) +
                  n +
                  u +
                  p;
              return { fileRecord: C, dirRecord: D, compressedObject: c };
            },
            D = {
              load: function () {
                throw new Error(
                  "Load method is not defined. Is the file jszip-load.js included ?"
                );
              },
              filter: function (a) {
                var b,
                  c,
                  d,
                  e,
                  f = [];
                for (b in this.files)
                  this.files.hasOwnProperty(b) &&
                    ((d = this.files[b]),
                    (e = new r(d.name, d._data, t(d.options))),
                    (c = b.slice(this.root.length, b.length)),
                    b.slice(0, this.root.length) === this.root &&
                      a(c, e) &&
                      f.push(e));
                return f;
              },
              file: function (a, b, c) {
                if (1 === arguments.length) {
                  if (d.isRegExp(a)) {
                    var e = a;
                    return this.filter(function (a, b) {
                      return !b.dir && e.test(a);
                    });
                  }
                  return (
                    this.filter(function (b, c) {
                      return !c.dir && b === a;
                    })[0] || null
                  );
                }
                return (a = this.root + a), v.call(this, a, b, c), this;
              },
              folder: function (a) {
                if (!a) return this;
                if (d.isRegExp(a))
                  return this.filter(function (b, c) {
                    return c.dir && a.test(b);
                  });
                var b = this.root + a,
                  c = y.call(this, b),
                  e = this.clone();
                return (e.root = c.name), e;
              },
              remove: function (a) {
                a = this.root + a;
                var b = this.files[a];
                if (
                  (b || ("/" != a.slice(-1) && (a += "/"), (b = this.files[a])),
                  b && !b.dir)
                )
                  delete this.files[a];
                else
                  for (
                    var c = this.filter(function (b, c) {
                        return c.name.slice(0, a.length) === a;
                      }),
                      d = 0;
                    d < c.length;
                    d++
                  )
                    delete this.files[c[d].name];
                return this;
              },
              generate: function (a) {
                (a = t(a || {}, {
                  base64: !0,
                  compression: "STORE",
                  compressionOptions: null,
                  type: "base64",
                  platform: "DOS",
                  comment: null,
                  mimeType: "application/zip",
                })),
                  d.checkSupport(a.type),
                  ("darwin" === a.platform ||
                    "freebsd" === a.platform ||
                    "linux" === a.platform ||
                    "sunos" === a.platform) &&
                    (a.platform = "UNIX"),
                  "win32" === a.platform && (a.platform = "DOS");
                var b,
                  c,
                  e = [],
                  g = 0,
                  j = 0,
                  k = d.transformTo(
                    "string",
                    this.utf8encode(a.comment || this.comment || "")
                  );
                for (var l in this.files)
                  if (this.files.hasOwnProperty(l)) {
                    var o = this.files[l],
                      p = o.options.compression || a.compression.toUpperCase(),
                      q = i[p];
                    if (!q)
                      throw new Error(
                        p + " is not a valid compression method !"
                      );
                    var r =
                        o.options.compressionOptions ||
                        a.compressionOptions ||
                        {},
                      u = z.call(this, o, q, r),
                      v = C.call(this, l, o, u, g, a.platform);
                    (g += v.fileRecord.length + u.compressedSize),
                      (j += v.dirRecord.length),
                      e.push(v);
                  }
                var w = "";
                w =
                  f.CENTRAL_DIRECTORY_END +
                  "\x00\x00\x00\x00" +
                  s(e.length, 2) +
                  s(e.length, 2) +
                  s(j, 4) +
                  s(g, 4) +
                  s(k.length, 2) +
                  k;
                var x = a.type.toLowerCase();
                for (
                  b =
                    "uint8array" === x ||
                    "arraybuffer" === x ||
                    "blob" === x ||
                    "nodebuffer" === x
                      ? new n(g + j + w.length)
                      : new m(g + j + w.length),
                    c = 0;
                  c < e.length;
                  c++
                )
                  b.append(e[c].fileRecord),
                    b.append(e[c].compressedObject.compressedContent);
                for (c = 0; c < e.length; c++) b.append(e[c].dirRecord);
                b.append(w);
                var y = b.finalize();
                switch (a.type.toLowerCase()) {
                  case "uint8array":
                  case "arraybuffer":
                  case "nodebuffer":
                    return d.transformTo(a.type.toLowerCase(), y);
                  case "blob":
                    return d.arrayBuffer2Blob(
                      d.transformTo("arraybuffer", y),
                      a.mimeType
                    );
                  case "base64":
                    return a.base64 ? h.encode(y) : y;
                  default:
                    return y;
                }
              },
              crc32: function (a, b) {
                return e(a, b);
              },
              utf8encode: function (a) {
                return d.transformTo("string", l.utf8encode(a));
              },
              utf8decode: function (a) {
                return l.utf8decode(a);
              },
            };
          b.exports = D;
        },
        {
          "./base64": 1,
          "./compressedObject": 2,
          "./compressions": 3,
          "./crc32": 4,
          "./defaults": 6,
          "./nodeBuffer": 11,
          "./signature": 14,
          "./stringWriter": 16,
          "./support": 17,
          "./uint8ArrayWriter": 19,
          "./utf8": 20,
          "./utils": 21,
        },
      ],
      14: [
        function (a, b, c) {
          "use strict";
          (c.LOCAL_FILE_HEADER = "PK"),
            (c.CENTRAL_FILE_HEADER = "PK"),
            (c.CENTRAL_DIRECTORY_END = "PK"),
            (c.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK"),
            (c.ZIP64_CENTRAL_DIRECTORY_END = "PK"),
            (c.DATA_DESCRIPTOR = "PK\b");
        },
        {},
      ],
      15: [
        function (a, b) {
          "use strict";
          function c(a, b) {
            (this.data = a),
              b || (this.data = e.string2binary(this.data)),
              (this.length = this.data.length),
              (this.index = 0);
          }
          var d = a("./dataReader"),
            e = a("./utils");
          (c.prototype = new d()),
            (c.prototype.byteAt = function (a) {
              return this.data.charCodeAt(a);
            }),
            (c.prototype.lastIndexOfSignature = function (a) {
              return this.data.lastIndexOf(a);
            }),
            (c.prototype.readData = function (a) {
              this.checkOffset(a);
              var b = this.data.slice(this.index, this.index + a);
              return (this.index += a), b;
            }),
            (b.exports = c);
        },
        { "./dataReader": 5, "./utils": 21 },
      ],
      16: [
        function (a, b) {
          "use strict";
          var c = a("./utils"),
            d = function () {
              this.data = [];
            };
          (d.prototype = {
            append: function (a) {
              (a = c.transformTo("string", a)), this.data.push(a);
            },
            finalize: function () {
              return this.data.join("");
            },
          }),
            (b.exports = d);
        },
        { "./utils": 21 },
      ],
      17: [
        function (a, b, c) {
          (function (a) {
            "use strict";
            if (
              ((c.base64 = !0),
              (c.array = !0),
              (c.string = !0),
              (c.arraybuffer =
                "undefined" != typeof ArrayBuffer &&
                "undefined" != typeof Uint8Array),
              (c.nodebuffer = "undefined" != typeof a),
              (c.uint8array = "undefined" != typeof Uint8Array),
              "undefined" == typeof ArrayBuffer)
            )
              c.blob = !1;
            else {
              var b = new ArrayBuffer(0);
              try {
                c.blob = 0 === new Blob([b], { type: "application/zip" }).size;
              } catch (d) {
                try {
                  var e =
                      window.BlobBuilder ||
                      window.WebKitBlobBuilder ||
                      window.MozBlobBuilder ||
                      window.MSBlobBuilder,
                    f = new e();
                  f.append(b),
                    (c.blob = 0 === f.getBlob("application/zip").size);
                } catch (d) {
                  c.blob = !1;
                }
              }
            }
          }.call(this, "undefined" != typeof Buffer ? Buffer : void 0));
        },
        {},
      ],
      18: [
        function (a, b) {
          "use strict";
          function c(a) {
            a &&
              ((this.data = a),
              (this.length = this.data.length),
              (this.index = 0));
          }
          var d = a("./dataReader");
          (c.prototype = new d()),
            (c.prototype.byteAt = function (a) {
              return this.data[a];
            }),
            (c.prototype.lastIndexOfSignature = function (a) {
              for (
                var b = a.charCodeAt(0),
                  c = a.charCodeAt(1),
                  d = a.charCodeAt(2),
                  e = a.charCodeAt(3),
                  f = this.length - 4;
                f >= 0;
                --f
              )
                if (
                  this.data[f] === b &&
                  this.data[f + 1] === c &&
                  this.data[f + 2] === d &&
                  this.data[f + 3] === e
                )
                  return f;
              return -1;
            }),
            (c.prototype.readData = function (a) {
              if ((this.checkOffset(a), 0 === a)) return new Uint8Array(0);
              var b = this.data.subarray(this.index, this.index + a);
              return (this.index += a), b;
            }),
            (b.exports = c);
        },
        { "./dataReader": 5 },
      ],
      19: [
        function (a, b) {
          "use strict";
          var c = a("./utils"),
            d = function (a) {
              (this.data = new Uint8Array(a)), (this.index = 0);
            };
          (d.prototype = {
            append: function (a) {
              0 !== a.length &&
                ((a = c.transformTo("uint8array", a)),
                this.data.set(a, this.index),
                (this.index += a.length));
            },
            finalize: function () {
              return this.data;
            },
          }),
            (b.exports = d);
        },
        { "./utils": 21 },
      ],
      20: [
        function (a, b, c) {
          "use strict";
          for (
            var d = a("./utils"),
              e = a("./support"),
              f = a("./nodeBuffer"),
              g = new Array(256),
              h = 0;
            256 > h;
            h++
          )
            g[h] =
              h >= 252
                ? 6
                : h >= 248
                ? 5
                : h >= 240
                ? 4
                : h >= 224
                ? 3
                : h >= 192
                ? 2
                : 1;
          g[254] = g[254] = 1;
          var i = function (a) {
              var b,
                c,
                d,
                f,
                g,
                h = a.length,
                i = 0;
              for (f = 0; h > f; f++)
                (c = a.charCodeAt(f)),
                  55296 === (64512 & c) &&
                    h > f + 1 &&
                    ((d = a.charCodeAt(f + 1)),
                    56320 === (64512 & d) &&
                      ((c = 65536 + ((c - 55296) << 10) + (d - 56320)), f++)),
                  (i += 128 > c ? 1 : 2048 > c ? 2 : 65536 > c ? 3 : 4);
              for (
                b = e.uint8array ? new Uint8Array(i) : new Array(i),
                  g = 0,
                  f = 0;
                i > g;
                f++
              )
                (c = a.charCodeAt(f)),
                  55296 === (64512 & c) &&
                    h > f + 1 &&
                    ((d = a.charCodeAt(f + 1)),
                    56320 === (64512 & d) &&
                      ((c = 65536 + ((c - 55296) << 10) + (d - 56320)), f++)),
                  128 > c
                    ? (b[g++] = c)
                    : 2048 > c
                    ? ((b[g++] = 192 | (c >>> 6)), (b[g++] = 128 | (63 & c)))
                    : 65536 > c
                    ? ((b[g++] = 224 | (c >>> 12)),
                      (b[g++] = 128 | ((c >>> 6) & 63)),
                      (b[g++] = 128 | (63 & c)))
                    : ((b[g++] = 240 | (c >>> 18)),
                      (b[g++] = 128 | ((c >>> 12) & 63)),
                      (b[g++] = 128 | ((c >>> 6) & 63)),
                      (b[g++] = 128 | (63 & c)));
              return b;
            },
            j = function (a, b) {
              var c;
              for (
                b = b || a.length, b > a.length && (b = a.length), c = b - 1;
                c >= 0 && 128 === (192 & a[c]);

              )
                c--;
              return 0 > c ? b : 0 === c ? b : c + g[a[c]] > b ? c : b;
            },
            k = function (a) {
              var b,
                c,
                e,
                f,
                h = a.length,
                i = new Array(2 * h);
              for (c = 0, b = 0; h > b; )
                if (((e = a[b++]), 128 > e)) i[c++] = e;
                else if (((f = g[e]), f > 4)) (i[c++] = 65533), (b += f - 1);
                else {
                  for (e &= 2 === f ? 31 : 3 === f ? 15 : 7; f > 1 && h > b; )
                    (e = (e << 6) | (63 & a[b++])), f--;
                  f > 1
                    ? (i[c++] = 65533)
                    : 65536 > e
                    ? (i[c++] = e)
                    : ((e -= 65536),
                      (i[c++] = 55296 | ((e >> 10) & 1023)),
                      (i[c++] = 56320 | (1023 & e)));
                }
              return (
                i.length !== c &&
                  (i.subarray ? (i = i.subarray(0, c)) : (i.length = c)),
                d.applyFromCharCode(i)
              );
            };
          (c.utf8encode = function (a) {
            return e.nodebuffer ? f(a, "utf-8") : i(a);
          }),
            (c.utf8decode = function (a) {
              if (e.nodebuffer)
                return d.transformTo("nodebuffer", a).toString("utf-8");
              a = d.transformTo(e.uint8array ? "uint8array" : "array", a);
              for (var b = [], c = 0, f = a.length, g = 65536; f > c; ) {
                var h = j(a, Math.min(c + g, f));
                b.push(e.uint8array ? k(a.subarray(c, h)) : k(a.slice(c, h))),
                  (c = h);
              }
              return b.join("");
            });
        },
        { "./nodeBuffer": 11, "./support": 17, "./utils": 21 },
      ],
      21: [
        function (a, b, c) {
          "use strict";
          function d(a) {
            return a;
          }
          function e(a, b) {
            for (var c = 0; c < a.length; ++c) b[c] = 255 & a.charCodeAt(c);
            return b;
          }
          function f(a) {
            var b = 65536,
              d = [],
              e = a.length,
              f = c.getTypeOf(a),
              g = 0,
              h = !0;
            try {
              switch (f) {
                case "uint8array":
                  String.fromCharCode.apply(null, new Uint8Array(0));
                  break;
                case "nodebuffer":
                  String.fromCharCode.apply(null, j(0));
              }
            } catch (i) {
              h = !1;
            }
            if (!h) {
              for (var k = "", l = 0; l < a.length; l++)
                k += String.fromCharCode(a[l]);
              return k;
            }
            for (; e > g && b > 1; )
              try {
                d.push(
                  "array" === f || "nodebuffer" === f
                    ? String.fromCharCode.apply(
                        null,
                        a.slice(g, Math.min(g + b, e))
                      )
                    : String.fromCharCode.apply(
                        null,
                        a.subarray(g, Math.min(g + b, e))
                      )
                ),
                  (g += b);
              } catch (i) {
                b = Math.floor(b / 2);
              }
            return d.join("");
          }
          function g(a, b) {
            for (var c = 0; c < a.length; c++) b[c] = a[c];
            return b;
          }
          var h = a("./support"),
            i = a("./compressions"),
            j = a("./nodeBuffer");
          (c.string2binary = function (a) {
            for (var b = "", c = 0; c < a.length; c++)
              b += String.fromCharCode(255 & a.charCodeAt(c));
            return b;
          }),
            (c.arrayBuffer2Blob = function (a, b) {
              c.checkSupport("blob"), (b = b || "application/zip");
              try {
                return new Blob([a], { type: b });
              } catch (d) {
                try {
                  var e =
                      window.BlobBuilder ||
                      window.WebKitBlobBuilder ||
                      window.MozBlobBuilder ||
                      window.MSBlobBuilder,
                    f = new e();
                  return f.append(a), f.getBlob(b);
                } catch (d) {
                  throw new Error("Bug : can't construct the Blob.");
                }
              }
            }),
            (c.applyFromCharCode = f);
          var k = {};
          (k.string = {
            string: d,
            array: function (a) {
              return e(a, new Array(a.length));
            },
            arraybuffer: function (a) {
              return k.string.uint8array(a).buffer;
            },
            uint8array: function (a) {
              return e(a, new Uint8Array(a.length));
            },
            nodebuffer: function (a) {
              return e(a, j(a.length));
            },
          }),
            (k.array = {
              string: f,
              array: d,
              arraybuffer: function (a) {
                return new Uint8Array(a).buffer;
              },
              uint8array: function (a) {
                return new Uint8Array(a);
              },
              nodebuffer: function (a) {
                return j(a);
              },
            }),
            (k.arraybuffer = {
              string: function (a) {
                return f(new Uint8Array(a));
              },
              array: function (a) {
                return g(new Uint8Array(a), new Array(a.byteLength));
              },
              arraybuffer: d,
              uint8array: function (a) {
                return new Uint8Array(a);
              },
              nodebuffer: function (a) {
                return j(new Uint8Array(a));
              },
            }),
            (k.uint8array = {
              string: f,
              array: function (a) {
                return g(a, new Array(a.length));
              },
              arraybuffer: function (a) {
                return a.buffer;
              },
              uint8array: d,
              nodebuffer: function (a) {
                return j(a);
              },
            }),
            (k.nodebuffer = {
              string: f,
              array: function (a) {
                return g(a, new Array(a.length));
              },
              arraybuffer: function (a) {
                return k.nodebuffer.uint8array(a).buffer;
              },
              uint8array: function (a) {
                return g(a, new Uint8Array(a.length));
              },
              nodebuffer: d,
            }),
            (c.transformTo = function (a, b) {
              if ((b || (b = ""), !a)) return b;
              c.checkSupport(a);
              var d = c.getTypeOf(b),
                e = k[d][a](b);
              return e;
            }),
            (c.getTypeOf = function (a) {
              return "string" == typeof a
                ? "string"
                : "[object Array]" === Object.prototype.toString.call(a)
                ? "array"
                : h.nodebuffer && j.test(a)
                ? "nodebuffer"
                : h.uint8array && a instanceof Uint8Array
                ? "uint8array"
                : h.arraybuffer && a instanceof ArrayBuffer
                ? "arraybuffer"
                : void 0;
            }),
            (c.checkSupport = function (a) {
              var b = h[a.toLowerCase()];
              if (!b) throw new Error(a + " is not supported by this browser");
            }),
            (c.MAX_VALUE_16BITS = 65535),
            (c.MAX_VALUE_32BITS = -1),
            (c.pretty = function (a) {
              var b,
                c,
                d = "";
              for (c = 0; c < (a || "").length; c++)
                (b = a.charCodeAt(c)),
                  (d +=
                    "\\x" + (16 > b ? "0" : "") + b.toString(16).toUpperCase());
              return d;
            }),
            (c.findCompression = function (a) {
              for (var b in i)
                if (i.hasOwnProperty(b) && i[b].magic === a) return i[b];
              return null;
            }),
            (c.isRegExp = function (a) {
              return "[object RegExp]" === Object.prototype.toString.call(a);
            });
        },
        { "./compressions": 3, "./nodeBuffer": 11, "./support": 17 },
      ],
      22: [
        function (a, b) {
          "use strict";
          function c(a, b) {
            (this.files = []), (this.loadOptions = b), a && this.load(a);
          }
          var d = a("./stringReader"),
            e = a("./nodeBufferReader"),
            f = a("./uint8ArrayReader"),
            g = a("./utils"),
            h = a("./signature"),
            i = a("./zipEntry"),
            j = a("./support"),
            k = a("./object");
          (c.prototype = {
            checkSignature: function (a) {
              var b = this.reader.readString(4);
              if (b !== a)
                throw new Error(
                  "Corrupted zip or bug : unexpected signature (" +
                    g.pretty(b) +
                    ", expected " +
                    g.pretty(a) +
                    ")"
                );
            },
            readBlockEndOfCentral: function () {
              (this.diskNumber = this.reader.readInt(2)),
                (this.diskWithCentralDirStart = this.reader.readInt(2)),
                (this.centralDirRecordsOnThisDisk = this.reader.readInt(2)),
                (this.centralDirRecords = this.reader.readInt(2)),
                (this.centralDirSize = this.reader.readInt(4)),
                (this.centralDirOffset = this.reader.readInt(4)),
                (this.zipCommentLength = this.reader.readInt(2)),
                (this.zipComment = this.reader.readString(
                  this.zipCommentLength
                )),
                (this.zipComment = k.utf8decode(this.zipComment));
            },
            readBlockZip64EndOfCentral: function () {
              (this.zip64EndOfCentralSize = this.reader.readInt(8)),
                (this.versionMadeBy = this.reader.readString(2)),
                (this.versionNeeded = this.reader.readInt(2)),
                (this.diskNumber = this.reader.readInt(4)),
                (this.diskWithCentralDirStart = this.reader.readInt(4)),
                (this.centralDirRecordsOnThisDisk = this.reader.readInt(8)),
                (this.centralDirRecords = this.reader.readInt(8)),
                (this.centralDirSize = this.reader.readInt(8)),
                (this.centralDirOffset = this.reader.readInt(8)),
                (this.zip64ExtensibleData = {});
              for (
                var a, b, c, d = this.zip64EndOfCentralSize - 44, e = 0;
                d > e;

              )
                (a = this.reader.readInt(2)),
                  (b = this.reader.readInt(4)),
                  (c = this.reader.readString(b)),
                  (this.zip64ExtensibleData[a] = {
                    id: a,
                    length: b,
                    value: c,
                  });
            },
            readBlockZip64EndOfCentralLocator: function () {
              if (
                ((this.diskWithZip64CentralDirStart = this.reader.readInt(4)),
                (this.relativeOffsetEndOfZip64CentralDir =
                  this.reader.readInt(8)),
                (this.disksCount = this.reader.readInt(4)),
                this.disksCount > 1)
              )
                throw new Error("Multi-volumes zip are not supported");
            },
            readLocalFiles: function () {
              var a, b;
              for (a = 0; a < this.files.length; a++)
                (b = this.files[a]),
                  this.reader.setIndex(b.localHeaderOffset),
                  this.checkSignature(h.LOCAL_FILE_HEADER),
                  b.readLocalPart(this.reader),
                  b.handleUTF8(),
                  b.processAttributes();
            },
            readCentralDir: function () {
              var a;
              for (
                this.reader.setIndex(this.centralDirOffset);
                this.reader.readString(4) === h.CENTRAL_FILE_HEADER;

              )
                (a = new i({ zip64: this.zip64 }, this.loadOptions)),
                  a.readCentralPart(this.reader),
                  this.files.push(a);
            },
            readEndOfCentral: function () {
              var a = this.reader.lastIndexOfSignature(h.CENTRAL_DIRECTORY_END);
              if (-1 === a) {
                var b = !0;
                try {
                  this.reader.setIndex(0),
                    this.checkSignature(h.LOCAL_FILE_HEADER),
                    (b = !1);
                } catch (c) {}
                throw new Error(
                  b
                    ? "Can't find end of central directory : is this a zip file ? If it is, see http://stuk.github.io/jszip/documentation/howto/read_zip.html"
                    : "Corrupted zip : can't find end of central directory"
                );
              }
              if (
                (this.reader.setIndex(a),
                this.checkSignature(h.CENTRAL_DIRECTORY_END),
                this.readBlockEndOfCentral(),
                this.diskNumber === g.MAX_VALUE_16BITS ||
                  this.diskWithCentralDirStart === g.MAX_VALUE_16BITS ||
                  this.centralDirRecordsOnThisDisk === g.MAX_VALUE_16BITS ||
                  this.centralDirRecords === g.MAX_VALUE_16BITS ||
                  this.centralDirSize === g.MAX_VALUE_32BITS ||
                  this.centralDirOffset === g.MAX_VALUE_32BITS)
              ) {
                if (
                  ((this.zip64 = !0),
                  (a = this.reader.lastIndexOfSignature(
                    h.ZIP64_CENTRAL_DIRECTORY_LOCATOR
                  )),
                  -1 === a)
                )
                  throw new Error(
                    "Corrupted zip : can't find the ZIP64 end of central directory locator"
                  );
                this.reader.setIndex(a),
                  this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR),
                  this.readBlockZip64EndOfCentralLocator(),
                  this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),
                  this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_END),
                  this.readBlockZip64EndOfCentral();
              }
            },
            prepareReader: function (a) {
              var b = g.getTypeOf(a);
              this.reader =
                "string" !== b || j.uint8array
                  ? "nodebuffer" === b
                    ? new e(a)
                    : new f(g.transformTo("uint8array", a))
                  : new d(a, this.loadOptions.optimizedBinaryString);
            },
            load: function (a) {
              this.prepareReader(a),
                this.readEndOfCentral(),
                this.readCentralDir(),
                this.readLocalFiles();
            },
          }),
            (b.exports = c);
        },
        {
          "./nodeBufferReader": 12,
          "./object": 13,
          "./signature": 14,
          "./stringReader": 15,
          "./support": 17,
          "./uint8ArrayReader": 18,
          "./utils": 21,
          "./zipEntry": 23,
        },
      ],
      23: [
        function (a, b) {
          "use strict";
          function c(a, b) {
            (this.options = a), (this.loadOptions = b);
          }
          var d = a("./stringReader"),
            e = a("./utils"),
            f = a("./compressedObject"),
            g = a("./object"),
            h = 0,
            i = 3;
          (c.prototype = {
            isEncrypted: function () {
              return 1 === (1 & this.bitFlag);
            },
            useUTF8: function () {
              return 2048 === (2048 & this.bitFlag);
            },
            prepareCompressedContent: function (a, b, c) {
              return function () {
                var d = a.index;
                a.setIndex(b);
                var e = a.readData(c);
                return a.setIndex(d), e;
              };
            },
            prepareContent: function (a, b, c, d, f) {
              return function () {
                var a = e.transformTo(
                    d.uncompressInputType,
                    this.getCompressedContent()
                  ),
                  b = d.uncompress(a);
                if (b.length !== f)
                  throw new Error("Bug : uncompressed data size mismatch");
                return b;
              };
            },
            readLocalPart: function (a) {
              var b, c;
              if (
                (a.skip(22),
                (this.fileNameLength = a.readInt(2)),
                (c = a.readInt(2)),
                (this.fileName = a.readString(this.fileNameLength)),
                a.skip(c),
                -1 == this.compressedSize || -1 == this.uncompressedSize)
              )
                throw new Error(
                  "Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)"
                );
              if (((b = e.findCompression(this.compressionMethod)), null === b))
                throw new Error(
                  "Corrupted zip : compression " +
                    e.pretty(this.compressionMethod) +
                    " unknown (inner file : " +
                    this.fileName +
                    ")"
                );
              if (
                ((this.decompressed = new f()),
                (this.decompressed.compressedSize = this.compressedSize),
                (this.decompressed.uncompressedSize = this.uncompressedSize),
                (this.decompressed.crc32 = this.crc32),
                (this.decompressed.compressionMethod = this.compressionMethod),
                (this.decompressed.getCompressedContent =
                  this.prepareCompressedContent(
                    a,
                    a.index,
                    this.compressedSize,
                    b
                  )),
                (this.decompressed.getContent = this.prepareContent(
                  a,
                  a.index,
                  this.compressedSize,
                  b,
                  this.uncompressedSize
                )),
                this.loadOptions.checkCRC32 &&
                  ((this.decompressed = e.transformTo(
                    "string",
                    this.decompressed.getContent()
                  )),
                  g.crc32(this.decompressed) !== this.crc32))
              )
                throw new Error("Corrupted zip : CRC32 mismatch");
            },
            readCentralPart: function (a) {
              if (
                ((this.versionMadeBy = a.readInt(2)),
                (this.versionNeeded = a.readInt(2)),
                (this.bitFlag = a.readInt(2)),
                (this.compressionMethod = a.readString(2)),
                (this.date = a.readDate()),
                (this.crc32 = a.readInt(4)),
                (this.compressedSize = a.readInt(4)),
                (this.uncompressedSize = a.readInt(4)),
                (this.fileNameLength = a.readInt(2)),
                (this.extraFieldsLength = a.readInt(2)),
                (this.fileCommentLength = a.readInt(2)),
                (this.diskNumberStart = a.readInt(2)),
                (this.internalFileAttributes = a.readInt(2)),
                (this.externalFileAttributes = a.readInt(4)),
                (this.localHeaderOffset = a.readInt(4)),
                this.isEncrypted())
              )
                throw new Error("Encrypted zip are not supported");
              (this.fileName = a.readString(this.fileNameLength)),
                this.readExtraFields(a),
                this.parseZIP64ExtraField(a),
                (this.fileComment = a.readString(this.fileCommentLength));
            },
            processAttributes: function () {
              (this.unixPermissions = null), (this.dosPermissions = null);
              var a = this.versionMadeBy >> 8;
              (this.dir = 16 & this.externalFileAttributes ? !0 : !1),
                a === h &&
                  (this.dosPermissions = 63 & this.externalFileAttributes),
                a === i &&
                  (this.unixPermissions =
                    (this.externalFileAttributes >> 16) & 65535),
                this.dir || "/" !== this.fileName.slice(-1) || (this.dir = !0);
            },
            parseZIP64ExtraField: function () {
              if (this.extraFields[1]) {
                var a = new d(this.extraFields[1].value);
                this.uncompressedSize === e.MAX_VALUE_32BITS &&
                  (this.uncompressedSize = a.readInt(8)),
                  this.compressedSize === e.MAX_VALUE_32BITS &&
                    (this.compressedSize = a.readInt(8)),
                  this.localHeaderOffset === e.MAX_VALUE_32BITS &&
                    (this.localHeaderOffset = a.readInt(8)),
                  this.diskNumberStart === e.MAX_VALUE_32BITS &&
                    (this.diskNumberStart = a.readInt(4));
              }
            },
            readExtraFields: function (a) {
              var b,
                c,
                d,
                e = a.index;
              for (
                this.extraFields = this.extraFields || {};
                a.index < e + this.extraFieldsLength;

              )
                (b = a.readInt(2)),
                  (c = a.readInt(2)),
                  (d = a.readString(c)),
                  (this.extraFields[b] = { id: b, length: c, value: d });
            },
            handleUTF8: function () {
              if (this.useUTF8())
                (this.fileName = g.utf8decode(this.fileName)),
                  (this.fileComment = g.utf8decode(this.fileComment));
              else {
                var a = this.findExtraFieldUnicodePath();
                null !== a && (this.fileName = a);
                var b = this.findExtraFieldUnicodeComment();
                null !== b && (this.fileComment = b);
              }
            },
            findExtraFieldUnicodePath: function () {
              var a = this.extraFields[28789];
              if (a) {
                var b = new d(a.value);
                return 1 !== b.readInt(1)
                  ? null
                  : g.crc32(this.fileName) !== b.readInt(4)
                  ? null
                  : g.utf8decode(b.readString(a.length - 5));
              }
              return null;
            },
            findExtraFieldUnicodeComment: function () {
              var a = this.extraFields[25461];
              if (a) {
                var b = new d(a.value);
                return 1 !== b.readInt(1)
                  ? null
                  : g.crc32(this.fileComment) !== b.readInt(4)
                  ? null
                  : g.utf8decode(b.readString(a.length - 5));
              }
              return null;
            },
          }),
            (b.exports = c);
        },
        {
          "./compressedObject": 2,
          "./object": 13,
          "./stringReader": 15,
          "./utils": 21,
        },
      ],
      24: [
        function (a, b) {
          "use strict";
          var c = a("./lib/utils/common").assign,
            d = a("./lib/deflate"),
            e = a("./lib/inflate"),
            f = a("./lib/zlib/constants"),
            g = {};
          c(g, d, e, f), (b.exports = g);
        },
        {
          "./lib/deflate": 25,
          "./lib/inflate": 26,
          "./lib/utils/common": 27,
          "./lib/zlib/constants": 30,
        },
      ],
      25: [
        function (a, b, c) {
          "use strict";
          function d(a, b) {
            var c = new s(b);
            if ((c.push(a, !0), c.err)) throw c.msg;
            return c.result;
          }
          function e(a, b) {
            return (b = b || {}), (b.raw = !0), d(a, b);
          }
          function f(a, b) {
            return (b = b || {}), (b.gzip = !0), d(a, b);
          }
          var g = a("./zlib/deflate.js"),
            h = a("./utils/common"),
            i = a("./utils/strings"),
            j = a("./zlib/messages"),
            k = a("./zlib/zstream"),
            l = 0,
            m = 4,
            n = 0,
            o = 1,
            p = -1,
            q = 0,
            r = 8,
            s = function (a) {
              this.options = h.assign(
                {
                  level: p,
                  method: r,
                  chunkSize: 16384,
                  windowBits: 15,
                  memLevel: 8,
                  strategy: q,
                  to: "",
                },
                a || {}
              );
              var b = this.options;
              b.raw && b.windowBits > 0
                ? (b.windowBits = -b.windowBits)
                : b.gzip &&
                  b.windowBits > 0 &&
                  b.windowBits < 16 &&
                  (b.windowBits += 16),
                (this.err = 0),
                (this.msg = ""),
                (this.ended = !1),
                (this.chunks = []),
                (this.strm = new k()),
                (this.strm.avail_out = 0);
              var c = g.deflateInit2(
                this.strm,
                b.level,
                b.method,
                b.windowBits,
                b.memLevel,
                b.strategy
              );
              if (c !== n) throw new Error(j[c]);
              b.header && g.deflateSetHeader(this.strm, b.header);
            };
          (s.prototype.push = function (a, b) {
            var c,
              d,
              e = this.strm,
              f = this.options.chunkSize;
            if (this.ended) return !1;
            (d = b === ~~b ? b : b === !0 ? m : l),
              (e.input = "string" == typeof a ? i.string2buf(a) : a),
              (e.next_in = 0),
              (e.avail_in = e.input.length);
            do {
              if (
                (0 === e.avail_out &&
                  ((e.output = new h.Buf8(f)),
                  (e.next_out = 0),
                  (e.avail_out = f)),
                (c = g.deflate(e, d)),
                c !== o && c !== n)
              )
                return this.onEnd(c), (this.ended = !0), !1;
              (0 === e.avail_out || (0 === e.avail_in && d === m)) &&
                this.onData(
                  "string" === this.options.to
                    ? i.buf2binstring(h.shrinkBuf(e.output, e.next_out))
                    : h.shrinkBuf(e.output, e.next_out)
                );
            } while ((e.avail_in > 0 || 0 === e.avail_out) && c !== o);
            return d === m
              ? ((c = g.deflateEnd(this.strm)),
                this.onEnd(c),
                (this.ended = !0),
                c === n)
              : !0;
          }),
            (s.prototype.onData = function (a) {
              this.chunks.push(a);
            }),
            (s.prototype.onEnd = function (a) {
              a === n &&
                (this.result =
                  "string" === this.options.to
                    ? this.chunks.join("")
                    : h.flattenChunks(this.chunks)),
                (this.chunks = []),
                (this.err = a),
                (this.msg = this.strm.msg);
            }),
            (c.Deflate = s),
            (c.deflate = d),
            (c.deflateRaw = e),
            (c.gzip = f);
        },
        {
          "./utils/common": 27,
          "./utils/strings": 28,
          "./zlib/deflate.js": 32,
          "./zlib/messages": 37,
          "./zlib/zstream": 39,
        },
      ],
      26: [
        function (a, b, c) {
          "use strict";
          function d(a, b) {
            var c = new m(b);
            if ((c.push(a, !0), c.err)) throw c.msg;
            return c.result;
          }
          function e(a, b) {
            return (b = b || {}), (b.raw = !0), d(a, b);
          }
          var f = a("./zlib/inflate.js"),
            g = a("./utils/common"),
            h = a("./utils/strings"),
            i = a("./zlib/constants"),
            j = a("./zlib/messages"),
            k = a("./zlib/zstream"),
            l = a("./zlib/gzheader"),
            m = function (a) {
              this.options = g.assign(
                { chunkSize: 16384, windowBits: 0, to: "" },
                a || {}
              );
              var b = this.options;
              b.raw &&
                b.windowBits >= 0 &&
                b.windowBits < 16 &&
                ((b.windowBits = -b.windowBits),
                0 === b.windowBits && (b.windowBits = -15)),
                !(b.windowBits >= 0 && b.windowBits < 16) ||
                  (a && a.windowBits) ||
                  (b.windowBits += 32),
                b.windowBits > 15 &&
                  b.windowBits < 48 &&
                  0 === (15 & b.windowBits) &&
                  (b.windowBits |= 15),
                (this.err = 0),
                (this.msg = ""),
                (this.ended = !1),
                (this.chunks = []),
                (this.strm = new k()),
                (this.strm.avail_out = 0);
              var c = f.inflateInit2(this.strm, b.windowBits);
              if (c !== i.Z_OK) throw new Error(j[c]);
              (this.header = new l()),
                f.inflateGetHeader(this.strm, this.header);
            };
          (m.prototype.push = function (a, b) {
            var c,
              d,
              e,
              j,
              k,
              l = this.strm,
              m = this.options.chunkSize;
            if (this.ended) return !1;
            (d = b === ~~b ? b : b === !0 ? i.Z_FINISH : i.Z_NO_FLUSH),
              (l.input = "string" == typeof a ? h.binstring2buf(a) : a),
              (l.next_in = 0),
              (l.avail_in = l.input.length);
            do {
              if (
                (0 === l.avail_out &&
                  ((l.output = new g.Buf8(m)),
                  (l.next_out = 0),
                  (l.avail_out = m)),
                (c = f.inflate(l, i.Z_NO_FLUSH)),
                c !== i.Z_STREAM_END && c !== i.Z_OK)
              )
                return this.onEnd(c), (this.ended = !0), !1;
              l.next_out &&
                (0 === l.avail_out ||
                  c === i.Z_STREAM_END ||
                  (0 === l.avail_in && d === i.Z_FINISH)) &&
                ("string" === this.options.to
                  ? ((e = h.utf8border(l.output, l.next_out)),
                    (j = l.next_out - e),
                    (k = h.buf2string(l.output, e)),
                    (l.next_out = j),
                    (l.avail_out = m - j),
                    j && g.arraySet(l.output, l.output, e, j, 0),
                    this.onData(k))
                  : this.onData(g.shrinkBuf(l.output, l.next_out)));
            } while (l.avail_in > 0 && c !== i.Z_STREAM_END);
            return (
              c === i.Z_STREAM_END && (d = i.Z_FINISH),
              d === i.Z_FINISH
                ? ((c = f.inflateEnd(this.strm)),
                  this.onEnd(c),
                  (this.ended = !0),
                  c === i.Z_OK)
                : !0
            );
          }),
            (m.prototype.onData = function (a) {
              this.chunks.push(a);
            }),
            (m.prototype.onEnd = function (a) {
              a === i.Z_OK &&
                (this.result =
                  "string" === this.options.to
                    ? this.chunks.join("")
                    : g.flattenChunks(this.chunks)),
                (this.chunks = []),
                (this.err = a),
                (this.msg = this.strm.msg);
            }),
            (c.Inflate = m),
            (c.inflate = d),
            (c.inflateRaw = e),
            (c.ungzip = d);
        },
        {
          "./utils/common": 27,
          "./utils/strings": 28,
          "./zlib/constants": 30,
          "./zlib/gzheader": 33,
          "./zlib/inflate.js": 35,
          "./zlib/messages": 37,
          "./zlib/zstream": 39,
        },
      ],
      27: [
        function (a, b, c) {
          "use strict";
          var d =
            "undefined" != typeof Uint8Array &&
            "undefined" != typeof Uint16Array &&
            "undefined" != typeof Int32Array;
          (c.assign = function (a) {
            for (var b = Array.prototype.slice.call(arguments, 1); b.length; ) {
              var c = b.shift();
              if (c) {
                if ("object" != typeof c)
                  throw new TypeError(c + "must be non-object");
                for (var d in c) c.hasOwnProperty(d) && (a[d] = c[d]);
              }
            }
            return a;
          }),
            (c.shrinkBuf = function (a, b) {
              return a.length === b
                ? a
                : a.subarray
                ? a.subarray(0, b)
                : ((a.length = b), a);
            });
          var e = {
              arraySet: function (a, b, c, d, e) {
                if (b.subarray && a.subarray)
                  return void a.set(b.subarray(c, c + d), e);
                for (var f = 0; d > f; f++) a[e + f] = b[c + f];
              },
              flattenChunks: function (a) {
                var b, c, d, e, f, g;
                for (d = 0, b = 0, c = a.length; c > b; b++) d += a[b].length;
                for (
                  g = new Uint8Array(d), e = 0, b = 0, c = a.length;
                  c > b;
                  b++
                )
                  (f = a[b]), g.set(f, e), (e += f.length);
                return g;
              },
            },
            f = {
              arraySet: function (a, b, c, d, e) {
                for (var f = 0; d > f; f++) a[e + f] = b[c + f];
              },
              flattenChunks: function (a) {
                return [].concat.apply([], a);
              },
            };
          (c.setTyped = function (a) {
            a
              ? ((c.Buf8 = Uint8Array),
                (c.Buf16 = Uint16Array),
                (c.Buf32 = Int32Array),
                c.assign(c, e))
              : ((c.Buf8 = Array),
                (c.Buf16 = Array),
                (c.Buf32 = Array),
                c.assign(c, f));
          }),
            c.setTyped(d);
        },
        {},
      ],
      28: [
        function (a, b, c) {
          "use strict";
          function d(a, b) {
            if (65537 > b && ((a.subarray && g) || (!a.subarray && f)))
              return String.fromCharCode.apply(null, e.shrinkBuf(a, b));
            for (var c = "", d = 0; b > d; d++) c += String.fromCharCode(a[d]);
            return c;
          }
          var e = a("./common"),
            f = !0,
            g = !0;
          try {
            String.fromCharCode.apply(null, [0]);
          } catch (h) {
            f = !1;
          }
          try {
            String.fromCharCode.apply(null, new Uint8Array(1));
          } catch (h) {
            g = !1;
          }
          for (var i = new e.Buf8(256), j = 0; 256 > j; j++)
            i[j] =
              j >= 252
                ? 6
                : j >= 248
                ? 5
                : j >= 240
                ? 4
                : j >= 224
                ? 3
                : j >= 192
                ? 2
                : 1;
          (i[254] = i[254] = 1),
            (c.string2buf = function (a) {
              var b,
                c,
                d,
                f,
                g,
                h = a.length,
                i = 0;
              for (f = 0; h > f; f++)
                (c = a.charCodeAt(f)),
                  55296 === (64512 & c) &&
                    h > f + 1 &&
                    ((d = a.charCodeAt(f + 1)),
                    56320 === (64512 & d) &&
                      ((c = 65536 + ((c - 55296) << 10) + (d - 56320)), f++)),
                  (i += 128 > c ? 1 : 2048 > c ? 2 : 65536 > c ? 3 : 4);
              for (b = new e.Buf8(i), g = 0, f = 0; i > g; f++)
                (c = a.charCodeAt(f)),
                  55296 === (64512 & c) &&
                    h > f + 1 &&
                    ((d = a.charCodeAt(f + 1)),
                    56320 === (64512 & d) &&
                      ((c = 65536 + ((c - 55296) << 10) + (d - 56320)), f++)),
                  128 > c
                    ? (b[g++] = c)
                    : 2048 > c
                    ? ((b[g++] = 192 | (c >>> 6)), (b[g++] = 128 | (63 & c)))
                    : 65536 > c
                    ? ((b[g++] = 224 | (c >>> 12)),
                      (b[g++] = 128 | ((c >>> 6) & 63)),
                      (b[g++] = 128 | (63 & c)))
                    : ((b[g++] = 240 | (c >>> 18)),
                      (b[g++] = 128 | ((c >>> 12) & 63)),
                      (b[g++] = 128 | ((c >>> 6) & 63)),
                      (b[g++] = 128 | (63 & c)));
              return b;
            }),
            (c.buf2binstring = function (a) {
              return d(a, a.length);
            }),
            (c.binstring2buf = function (a) {
              for (
                var b = new e.Buf8(a.length), c = 0, d = b.length;
                d > c;
                c++
              )
                b[c] = a.charCodeAt(c);
              return b;
            }),
            (c.buf2string = function (a, b) {
              var c,
                e,
                f,
                g,
                h = b || a.length,
                j = new Array(2 * h);
              for (e = 0, c = 0; h > c; )
                if (((f = a[c++]), 128 > f)) j[e++] = f;
                else if (((g = i[f]), g > 4)) (j[e++] = 65533), (c += g - 1);
                else {
                  for (f &= 2 === g ? 31 : 3 === g ? 15 : 7; g > 1 && h > c; )
                    (f = (f << 6) | (63 & a[c++])), g--;
                  g > 1
                    ? (j[e++] = 65533)
                    : 65536 > f
                    ? (j[e++] = f)
                    : ((f -= 65536),
                      (j[e++] = 55296 | ((f >> 10) & 1023)),
                      (j[e++] = 56320 | (1023 & f)));
                }
              return d(j, e);
            }),
            (c.utf8border = function (a, b) {
              var c;
              for (
                b = b || a.length, b > a.length && (b = a.length), c = b - 1;
                c >= 0 && 128 === (192 & a[c]);

              )
                c--;
              return 0 > c ? b : 0 === c ? b : c + i[a[c]] > b ? c : b;
            });
        },
        { "./common": 27 },
      ],
      29: [
        function (a, b) {
          "use strict";
          function c(a, b, c, d) {
            for (
              var e = (65535 & a) | 0, f = ((a >>> 16) & 65535) | 0, g = 0;
              0 !== c;

            ) {
              (g = c > 2e3 ? 2e3 : c), (c -= g);
              do (e = (e + b[d++]) | 0), (f = (f + e) | 0);
              while (--g);
              (e %= 65521), (f %= 65521);
            }
            return e | (f << 16) | 0;
          }
          b.exports = c;
        },
        {},
      ],
      30: [
        function (a, b) {
          b.exports = {
            Z_NO_FLUSH: 0,
            Z_PARTIAL_FLUSH: 1,
            Z_SYNC_FLUSH: 2,
            Z_FULL_FLUSH: 3,
            Z_FINISH: 4,
            Z_BLOCK: 5,
            Z_TREES: 6,
            Z_OK: 0,
            Z_STREAM_END: 1,
            Z_NEED_DICT: 2,
            Z_ERRNO: -1,
            Z_STREAM_ERROR: -2,
            Z_DATA_ERROR: -3,
            Z_BUF_ERROR: -5,
            Z_NO_COMPRESSION: 0,
            Z_BEST_SPEED: 1,
            Z_BEST_COMPRESSION: 9,
            Z_DEFAULT_COMPRESSION: -1,
            Z_FILTERED: 1,
            Z_HUFFMAN_ONLY: 2,
            Z_RLE: 3,
            Z_FIXED: 4,
            Z_DEFAULT_STRATEGY: 0,
            Z_BINARY: 0,
            Z_TEXT: 1,
            Z_UNKNOWN: 2,
            Z_DEFLATED: 8,
          };
        },
        {},
      ],
      31: [
        function (a, b) {
          "use strict";
          function c() {
            for (var a, b = [], c = 0; 256 > c; c++) {
              a = c;
              for (var d = 0; 8 > d; d++)
                a = 1 & a ? 3988292384 ^ (a >>> 1) : a >>> 1;
              b[c] = a;
            }
            return b;
          }
          function d(a, b, c, d) {
            var f = e,
              g = d + c;
            a = -1 ^ a;
            for (var h = d; g > h; h++) a = (a >>> 8) ^ f[255 & (a ^ b[h])];
            return -1 ^ a;
          }
          var e = c();
          b.exports = d;
        },
        {},
      ],
      32: [
        function (a, b, c) {
          "use strict";
          function d(a, b) {
            return (a.msg = G[b]), b;
          }
          function e(a) {
            return (a << 1) - (a > 4 ? 9 : 0);
          }
          function f(a) {
            for (var b = a.length; --b >= 0; ) a[b] = 0;
          }
          function g(a) {
            var b = a.state,
              c = b.pending;
            c > a.avail_out && (c = a.avail_out),
              0 !== c &&
                (C.arraySet(
                  a.output,
                  b.pending_buf,
                  b.pending_out,
                  c,
                  a.next_out
                ),
                (a.next_out += c),
                (b.pending_out += c),
                (a.total_out += c),
                (a.avail_out -= c),
                (b.pending -= c),
                0 === b.pending && (b.pending_out = 0));
          }
          function h(a, b) {
            D._tr_flush_block(
              a,
              a.block_start >= 0 ? a.block_start : -1,
              a.strstart - a.block_start,
              b
            ),
              (a.block_start = a.strstart),
              g(a.strm);
          }
          function i(a, b) {
            a.pending_buf[a.pending++] = b;
          }
          function j(a, b) {
            (a.pending_buf[a.pending++] = (b >>> 8) & 255),
              (a.pending_buf[a.pending++] = 255 & b);
          }
          function k(a, b, c, d) {
            var e = a.avail_in;
            return (
              e > d && (e = d),
              0 === e
                ? 0
                : ((a.avail_in -= e),
                  C.arraySet(b, a.input, a.next_in, e, c),
                  1 === a.state.wrap
                    ? (a.adler = E(a.adler, b, e, c))
                    : 2 === a.state.wrap && (a.adler = F(a.adler, b, e, c)),
                  (a.next_in += e),
                  (a.total_in += e),
                  e)
            );
          }
          function l(a, b) {
            var c,
              d,
              e = a.max_chain_length,
              f = a.strstart,
              g = a.prev_length,
              h = a.nice_match,
              i = a.strstart > a.w_size - jb ? a.strstart - (a.w_size - jb) : 0,
              j = a.window,
              k = a.w_mask,
              l = a.prev,
              m = a.strstart + ib,
              n = j[f + g - 1],
              o = j[f + g];
            a.prev_length >= a.good_match && (e >>= 2),
              h > a.lookahead && (h = a.lookahead);
            do
              if (
                ((c = b),
                j[c + g] === o &&
                  j[c + g - 1] === n &&
                  j[c] === j[f] &&
                  j[++c] === j[f + 1])
              ) {
                (f += 2), c++;
                do;
                while (
                  j[++f] === j[++c] &&
                  j[++f] === j[++c] &&
                  j[++f] === j[++c] &&
                  j[++f] === j[++c] &&
                  j[++f] === j[++c] &&
                  j[++f] === j[++c] &&
                  j[++f] === j[++c] &&
                  j[++f] === j[++c] &&
                  m > f
                );
                if (((d = ib - (m - f)), (f = m - ib), d > g)) {
                  if (((a.match_start = b), (g = d), d >= h)) break;
                  (n = j[f + g - 1]), (o = j[f + g]);
                }
              }
            while ((b = l[b & k]) > i && 0 !== --e);
            return g <= a.lookahead ? g : a.lookahead;
          }
          function m(a) {
            var b,
              c,
              d,
              e,
              f,
              g = a.w_size;
            do {
              if (
                ((e = a.window_size - a.lookahead - a.strstart),
                a.strstart >= g + (g - jb))
              ) {
                C.arraySet(a.window, a.window, g, g, 0),
                  (a.match_start -= g),
                  (a.strstart -= g),
                  (a.block_start -= g),
                  (c = a.hash_size),
                  (b = c);
                do (d = a.head[--b]), (a.head[b] = d >= g ? d - g : 0);
                while (--c);
                (c = g), (b = c);
                do (d = a.prev[--b]), (a.prev[b] = d >= g ? d - g : 0);
                while (--c);
                e += g;
              }
              if (0 === a.strm.avail_in) break;
              if (
                ((c = k(a.strm, a.window, a.strstart + a.lookahead, e)),
                (a.lookahead += c),
                a.lookahead + a.insert >= hb)
              )
                for (
                  f = a.strstart - a.insert,
                    a.ins_h = a.window[f],
                    a.ins_h =
                      ((a.ins_h << a.hash_shift) ^ a.window[f + 1]) &
                      a.hash_mask;
                  a.insert &&
                  ((a.ins_h =
                    ((a.ins_h << a.hash_shift) ^ a.window[f + hb - 1]) &
                    a.hash_mask),
                  (a.prev[f & a.w_mask] = a.head[a.ins_h]),
                  (a.head[a.ins_h] = f),
                  f++,
                  a.insert--,
                  !(a.lookahead + a.insert < hb));

                );
            } while (a.lookahead < jb && 0 !== a.strm.avail_in);
          }
          function n(a, b) {
            var c = 65535;
            for (
              c > a.pending_buf_size - 5 && (c = a.pending_buf_size - 5);
              ;

            ) {
              if (a.lookahead <= 1) {
                if ((m(a), 0 === a.lookahead && b === H)) return sb;
                if (0 === a.lookahead) break;
              }
              (a.strstart += a.lookahead), (a.lookahead = 0);
              var d = a.block_start + c;
              if (
                (0 === a.strstart || a.strstart >= d) &&
                ((a.lookahead = a.strstart - d),
                (a.strstart = d),
                h(a, !1),
                0 === a.strm.avail_out)
              )
                return sb;
              if (
                a.strstart - a.block_start >= a.w_size - jb &&
                (h(a, !1), 0 === a.strm.avail_out)
              )
                return sb;
            }
            return (
              (a.insert = 0),
              b === K
                ? (h(a, !0), 0 === a.strm.avail_out ? ub : vb)
                : a.strstart > a.block_start &&
                  (h(a, !1), 0 === a.strm.avail_out)
                ? sb
                : sb
            );
          }
          function o(a, b) {
            for (var c, d; ; ) {
              if (a.lookahead < jb) {
                if ((m(a), a.lookahead < jb && b === H)) return sb;
                if (0 === a.lookahead) break;
              }
              if (
                ((c = 0),
                a.lookahead >= hb &&
                  ((a.ins_h =
                    ((a.ins_h << a.hash_shift) ^
                      a.window[a.strstart + hb - 1]) &
                    a.hash_mask),
                  (c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h]),
                  (a.head[a.ins_h] = a.strstart)),
                0 !== c &&
                  a.strstart - c <= a.w_size - jb &&
                  (a.match_length = l(a, c)),
                a.match_length >= hb)
              )
                if (
                  ((d = D._tr_tally(
                    a,
                    a.strstart - a.match_start,
                    a.match_length - hb
                  )),
                  (a.lookahead -= a.match_length),
                  a.match_length <= a.max_lazy_match && a.lookahead >= hb)
                ) {
                  a.match_length--;
                  do
                    a.strstart++,
                      (a.ins_h =
                        ((a.ins_h << a.hash_shift) ^
                          a.window[a.strstart + hb - 1]) &
                        a.hash_mask),
                      (c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h]),
                      (a.head[a.ins_h] = a.strstart);
                  while (0 !== --a.match_length);
                  a.strstart++;
                } else
                  (a.strstart += a.match_length),
                    (a.match_length = 0),
                    (a.ins_h = a.window[a.strstart]),
                    (a.ins_h =
                      ((a.ins_h << a.hash_shift) ^ a.window[a.strstart + 1]) &
                      a.hash_mask);
              else
                (d = D._tr_tally(a, 0, a.window[a.strstart])),
                  a.lookahead--,
                  a.strstart++;
              if (d && (h(a, !1), 0 === a.strm.avail_out)) return sb;
            }
            return (
              (a.insert = a.strstart < hb - 1 ? a.strstart : hb - 1),
              b === K
                ? (h(a, !0), 0 === a.strm.avail_out ? ub : vb)
                : a.last_lit && (h(a, !1), 0 === a.strm.avail_out)
                ? sb
                : tb
            );
          }
          function p(a, b) {
            for (var c, d, e; ; ) {
              if (a.lookahead < jb) {
                if ((m(a), a.lookahead < jb && b === H)) return sb;
                if (0 === a.lookahead) break;
              }
              if (
                ((c = 0),
                a.lookahead >= hb &&
                  ((a.ins_h =
                    ((a.ins_h << a.hash_shift) ^
                      a.window[a.strstart + hb - 1]) &
                    a.hash_mask),
                  (c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h]),
                  (a.head[a.ins_h] = a.strstart)),
                (a.prev_length = a.match_length),
                (a.prev_match = a.match_start),
                (a.match_length = hb - 1),
                0 !== c &&
                  a.prev_length < a.max_lazy_match &&
                  a.strstart - c <= a.w_size - jb &&
                  ((a.match_length = l(a, c)),
                  a.match_length <= 5 &&
                    (a.strategy === S ||
                      (a.match_length === hb &&
                        a.strstart - a.match_start > 4096)) &&
                    (a.match_length = hb - 1)),
                a.prev_length >= hb && a.match_length <= a.prev_length)
              ) {
                (e = a.strstart + a.lookahead - hb),
                  (d = D._tr_tally(
                    a,
                    a.strstart - 1 - a.prev_match,
                    a.prev_length - hb
                  )),
                  (a.lookahead -= a.prev_length - 1),
                  (a.prev_length -= 2);
                do
                  ++a.strstart <= e &&
                    ((a.ins_h =
                      ((a.ins_h << a.hash_shift) ^
                        a.window[a.strstart + hb - 1]) &
                      a.hash_mask),
                    (c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h]),
                    (a.head[a.ins_h] = a.strstart));
                while (0 !== --a.prev_length);
                if (
                  ((a.match_available = 0),
                  (a.match_length = hb - 1),
                  a.strstart++,
                  d && (h(a, !1), 0 === a.strm.avail_out))
                )
                  return sb;
              } else if (a.match_available) {
                if (
                  ((d = D._tr_tally(a, 0, a.window[a.strstart - 1])),
                  d && h(a, !1),
                  a.strstart++,
                  a.lookahead--,
                  0 === a.strm.avail_out)
                )
                  return sb;
              } else (a.match_available = 1), a.strstart++, a.lookahead--;
            }
            return (
              a.match_available &&
                ((d = D._tr_tally(a, 0, a.window[a.strstart - 1])),
                (a.match_available = 0)),
              (a.insert = a.strstart < hb - 1 ? a.strstart : hb - 1),
              b === K
                ? (h(a, !0), 0 === a.strm.avail_out ? ub : vb)
                : a.last_lit && (h(a, !1), 0 === a.strm.avail_out)
                ? sb
                : tb
            );
          }
          function q(a, b) {
            for (var c, d, e, f, g = a.window; ; ) {
              if (a.lookahead <= ib) {
                if ((m(a), a.lookahead <= ib && b === H)) return sb;
                if (0 === a.lookahead) break;
              }
              if (
                ((a.match_length = 0),
                a.lookahead >= hb &&
                  a.strstart > 0 &&
                  ((e = a.strstart - 1),
                  (d = g[e]),
                  d === g[++e] && d === g[++e] && d === g[++e]))
              ) {
                f = a.strstart + ib;
                do;
                while (
                  d === g[++e] &&
                  d === g[++e] &&
                  d === g[++e] &&
                  d === g[++e] &&
                  d === g[++e] &&
                  d === g[++e] &&
                  d === g[++e] &&
                  d === g[++e] &&
                  f > e
                );
                (a.match_length = ib - (f - e)),
                  a.match_length > a.lookahead &&
                    (a.match_length = a.lookahead);
              }
              if (
                (a.match_length >= hb
                  ? ((c = D._tr_tally(a, 1, a.match_length - hb)),
                    (a.lookahead -= a.match_length),
                    (a.strstart += a.match_length),
                    (a.match_length = 0))
                  : ((c = D._tr_tally(a, 0, a.window[a.strstart])),
                    a.lookahead--,
                    a.strstart++),
                c && (h(a, !1), 0 === a.strm.avail_out))
              )
                return sb;
            }
            return (
              (a.insert = 0),
              b === K
                ? (h(a, !0), 0 === a.strm.avail_out ? ub : vb)
                : a.last_lit && (h(a, !1), 0 === a.strm.avail_out)
                ? sb
                : tb
            );
          }
          function r(a, b) {
            for (var c; ; ) {
              if (0 === a.lookahead && (m(a), 0 === a.lookahead)) {
                if (b === H) return sb;
                break;
              }
              if (
                ((a.match_length = 0),
                (c = D._tr_tally(a, 0, a.window[a.strstart])),
                a.lookahead--,
                a.strstart++,
                c && (h(a, !1), 0 === a.strm.avail_out))
              )
                return sb;
            }
            return (
              (a.insert = 0),
              b === K
                ? (h(a, !0), 0 === a.strm.avail_out ? ub : vb)
                : a.last_lit && (h(a, !1), 0 === a.strm.avail_out)
                ? sb
                : tb
            );
          }
          function s(a) {
            (a.window_size = 2 * a.w_size),
              f(a.head),
              (a.max_lazy_match = B[a.level].max_lazy),
              (a.good_match = B[a.level].good_length),
              (a.nice_match = B[a.level].nice_length),
              (a.max_chain_length = B[a.level].max_chain),
              (a.strstart = 0),
              (a.block_start = 0),
              (a.lookahead = 0),
              (a.insert = 0),
              (a.match_length = a.prev_length = hb - 1),
              (a.match_available = 0),
              (a.ins_h = 0);
          }
          function t() {
            (this.strm = null),
              (this.status = 0),
              (this.pending_buf = null),
              (this.pending_buf_size = 0),
              (this.pending_out = 0),
              (this.pending = 0),
              (this.wrap = 0),
              (this.gzhead = null),
              (this.gzindex = 0),
              (this.method = Y),
              (this.last_flush = -1),
              (this.w_size = 0),
              (this.w_bits = 0),
              (this.w_mask = 0),
              (this.window = null),
              (this.window_size = 0),
              (this.prev = null),
              (this.head = null),
              (this.ins_h = 0),
              (this.hash_size = 0),
              (this.hash_bits = 0),
              (this.hash_mask = 0),
              (this.hash_shift = 0),
              (this.block_start = 0),
              (this.match_length = 0),
              (this.prev_match = 0),
              (this.match_available = 0),
              (this.strstart = 0),
              (this.match_start = 0),
              (this.lookahead = 0),
              (this.prev_length = 0),
              (this.max_chain_length = 0),
              (this.max_lazy_match = 0),
              (this.level = 0),
              (this.strategy = 0),
              (this.good_match = 0),
              (this.nice_match = 0),
              (this.dyn_ltree = new C.Buf16(2 * fb)),
              (this.dyn_dtree = new C.Buf16(2 * (2 * db + 1))),
              (this.bl_tree = new C.Buf16(2 * (2 * eb + 1))),
              f(this.dyn_ltree),
              f(this.dyn_dtree),
              f(this.bl_tree),
              (this.l_desc = null),
              (this.d_desc = null),
              (this.bl_desc = null),
              (this.bl_count = new C.Buf16(gb + 1)),
              (this.heap = new C.Buf16(2 * cb + 1)),
              f(this.heap),
              (this.heap_len = 0),
              (this.heap_max = 0),
              (this.depth = new C.Buf16(2 * cb + 1)),
              f(this.depth),
              (this.l_buf = 0),
              (this.lit_bufsize = 0),
              (this.last_lit = 0),
              (this.d_buf = 0),
              (this.opt_len = 0),
              (this.static_len = 0),
              (this.matches = 0),
              (this.insert = 0),
              (this.bi_buf = 0),
              (this.bi_valid = 0);
          }
          function u(a) {
            var b;
            return a && a.state
              ? ((a.total_in = a.total_out = 0),
                (a.data_type = X),
                (b = a.state),
                (b.pending = 0),
                (b.pending_out = 0),
                b.wrap < 0 && (b.wrap = -b.wrap),
                (b.status = b.wrap ? lb : qb),
                (a.adler = 2 === b.wrap ? 0 : 1),
                (b.last_flush = H),
                D._tr_init(b),
                M)
              : d(a, O);
          }
          function v(a) {
            var b = u(a);
            return b === M && s(a.state), b;
          }
          function w(a, b) {
            return a && a.state
              ? 2 !== a.state.wrap
                ? O
                : ((a.state.gzhead = b), M)
              : O;
          }
          function x(a, b, c, e, f, g) {
            if (!a) return O;
            var h = 1;
            if (
              (b === R && (b = 6),
              0 > e ? ((h = 0), (e = -e)) : e > 15 && ((h = 2), (e -= 16)),
              1 > f ||
                f > Z ||
                c !== Y ||
                8 > e ||
                e > 15 ||
                0 > b ||
                b > 9 ||
                0 > g ||
                g > V)
            )
              return d(a, O);
            8 === e && (e = 9);
            var i = new t();
            return (
              (a.state = i),
              (i.strm = a),
              (i.wrap = h),
              (i.gzhead = null),
              (i.w_bits = e),
              (i.w_size = 1 << i.w_bits),
              (i.w_mask = i.w_size - 1),
              (i.hash_bits = f + 7),
              (i.hash_size = 1 << i.hash_bits),
              (i.hash_mask = i.hash_size - 1),
              (i.hash_shift = ~~((i.hash_bits + hb - 1) / hb)),
              (i.window = new C.Buf8(2 * i.w_size)),
              (i.head = new C.Buf16(i.hash_size)),
              (i.prev = new C.Buf16(i.w_size)),
              (i.lit_bufsize = 1 << (f + 6)),
              (i.pending_buf_size = 4 * i.lit_bufsize),
              (i.pending_buf = new C.Buf8(i.pending_buf_size)),
              (i.d_buf = i.lit_bufsize >> 1),
              (i.l_buf = 3 * i.lit_bufsize),
              (i.level = b),
              (i.strategy = g),
              (i.method = c),
              v(a)
            );
          }
          function y(a, b) {
            return x(a, b, Y, $, _, W);
          }
          function z(a, b) {
            var c, h, k, l;
            if (!a || !a.state || b > L || 0 > b) return a ? d(a, O) : O;
            if (
              ((h = a.state),
              !a.output ||
                (!a.input && 0 !== a.avail_in) ||
                (h.status === rb && b !== K))
            )
              return d(a, 0 === a.avail_out ? Q : O);
            if (
              ((h.strm = a),
              (c = h.last_flush),
              (h.last_flush = b),
              h.status === lb)
            )
              if (2 === h.wrap)
                (a.adler = 0),
                  i(h, 31),
                  i(h, 139),
                  i(h, 8),
                  h.gzhead
                    ? (i(
                        h,
                        (h.gzhead.text ? 1 : 0) +
                          (h.gzhead.hcrc ? 2 : 0) +
                          (h.gzhead.extra ? 4 : 0) +
                          (h.gzhead.name ? 8 : 0) +
                          (h.gzhead.comment ? 16 : 0)
                      ),
                      i(h, 255 & h.gzhead.time),
                      i(h, (h.gzhead.time >> 8) & 255),
                      i(h, (h.gzhead.time >> 16) & 255),
                      i(h, (h.gzhead.time >> 24) & 255),
                      i(
                        h,
                        9 === h.level
                          ? 2
                          : h.strategy >= T || h.level < 2
                          ? 4
                          : 0
                      ),
                      i(h, 255 & h.gzhead.os),
                      h.gzhead.extra &&
                        h.gzhead.extra.length &&
                        (i(h, 255 & h.gzhead.extra.length),
                        i(h, (h.gzhead.extra.length >> 8) & 255)),
                      h.gzhead.hcrc &&
                        (a.adler = F(a.adler, h.pending_buf, h.pending, 0)),
                      (h.gzindex = 0),
                      (h.status = mb))
                    : (i(h, 0),
                      i(h, 0),
                      i(h, 0),
                      i(h, 0),
                      i(h, 0),
                      i(
                        h,
                        9 === h.level
                          ? 2
                          : h.strategy >= T || h.level < 2
                          ? 4
                          : 0
                      ),
                      i(h, wb),
                      (h.status = qb));
              else {
                var m = (Y + ((h.w_bits - 8) << 4)) << 8,
                  n = -1;
                (n =
                  h.strategy >= T || h.level < 2
                    ? 0
                    : h.level < 6
                    ? 1
                    : 6 === h.level
                    ? 2
                    : 3),
                  (m |= n << 6),
                  0 !== h.strstart && (m |= kb),
                  (m += 31 - (m % 31)),
                  (h.status = qb),
                  j(h, m),
                  0 !== h.strstart &&
                    (j(h, a.adler >>> 16), j(h, 65535 & a.adler)),
                  (a.adler = 1);
              }
            if (h.status === mb)
              if (h.gzhead.extra) {
                for (
                  k = h.pending;
                  h.gzindex < (65535 & h.gzhead.extra.length) &&
                  (h.pending !== h.pending_buf_size ||
                    (h.gzhead.hcrc &&
                      h.pending > k &&
                      (a.adler = F(a.adler, h.pending_buf, h.pending - k, k)),
                    g(a),
                    (k = h.pending),
                    h.pending !== h.pending_buf_size));

                )
                  i(h, 255 & h.gzhead.extra[h.gzindex]), h.gzindex++;
                h.gzhead.hcrc &&
                  h.pending > k &&
                  (a.adler = F(a.adler, h.pending_buf, h.pending - k, k)),
                  h.gzindex === h.gzhead.extra.length &&
                    ((h.gzindex = 0), (h.status = nb));
              } else h.status = nb;
            if (h.status === nb)
              if (h.gzhead.name) {
                k = h.pending;
                do {
                  if (
                    h.pending === h.pending_buf_size &&
                    (h.gzhead.hcrc &&
                      h.pending > k &&
                      (a.adler = F(a.adler, h.pending_buf, h.pending - k, k)),
                    g(a),
                    (k = h.pending),
                    h.pending === h.pending_buf_size)
                  ) {
                    l = 1;
                    break;
                  }
                  (l =
                    h.gzindex < h.gzhead.name.length
                      ? 255 & h.gzhead.name.charCodeAt(h.gzindex++)
                      : 0),
                    i(h, l);
                } while (0 !== l);
                h.gzhead.hcrc &&
                  h.pending > k &&
                  (a.adler = F(a.adler, h.pending_buf, h.pending - k, k)),
                  0 === l && ((h.gzindex = 0), (h.status = ob));
              } else h.status = ob;
            if (h.status === ob)
              if (h.gzhead.comment) {
                k = h.pending;
                do {
                  if (
                    h.pending === h.pending_buf_size &&
                    (h.gzhead.hcrc &&
                      h.pending > k &&
                      (a.adler = F(a.adler, h.pending_buf, h.pending - k, k)),
                    g(a),
                    (k = h.pending),
                    h.pending === h.pending_buf_size)
                  ) {
                    l = 1;
                    break;
                  }
                  (l =
                    h.gzindex < h.gzhead.comment.length
                      ? 255 & h.gzhead.comment.charCodeAt(h.gzindex++)
                      : 0),
                    i(h, l);
                } while (0 !== l);
                h.gzhead.hcrc &&
                  h.pending > k &&
                  (a.adler = F(a.adler, h.pending_buf, h.pending - k, k)),
                  0 === l && (h.status = pb);
              } else h.status = pb;
            if (
              (h.status === pb &&
                (h.gzhead.hcrc
                  ? (h.pending + 2 > h.pending_buf_size && g(a),
                    h.pending + 2 <= h.pending_buf_size &&
                      (i(h, 255 & a.adler),
                      i(h, (a.adler >> 8) & 255),
                      (a.adler = 0),
                      (h.status = qb)))
                  : (h.status = qb)),
              0 !== h.pending)
            ) {
              if ((g(a), 0 === a.avail_out)) return (h.last_flush = -1), M;
            } else if (0 === a.avail_in && e(b) <= e(c) && b !== K)
              return d(a, Q);
            if (h.status === rb && 0 !== a.avail_in) return d(a, Q);
            if (
              0 !== a.avail_in ||
              0 !== h.lookahead ||
              (b !== H && h.status !== rb)
            ) {
              var o =
                h.strategy === T
                  ? r(h, b)
                  : h.strategy === U
                  ? q(h, b)
                  : B[h.level].func(h, b);
              if (
                ((o === ub || o === vb) && (h.status = rb),
                o === sb || o === ub)
              )
                return 0 === a.avail_out && (h.last_flush = -1), M;
              if (
                o === tb &&
                (b === I
                  ? D._tr_align(h)
                  : b !== L &&
                    (D._tr_stored_block(h, 0, 0, !1),
                    b === J &&
                      (f(h.head),
                      0 === h.lookahead &&
                        ((h.strstart = 0),
                        (h.block_start = 0),
                        (h.insert = 0)))),
                g(a),
                0 === a.avail_out)
              )
                return (h.last_flush = -1), M;
            }
            return b !== K
              ? M
              : h.wrap <= 0
              ? N
              : (2 === h.wrap
                  ? (i(h, 255 & a.adler),
                    i(h, (a.adler >> 8) & 255),
                    i(h, (a.adler >> 16) & 255),
                    i(h, (a.adler >> 24) & 255),
                    i(h, 255 & a.total_in),
                    i(h, (a.total_in >> 8) & 255),
                    i(h, (a.total_in >> 16) & 255),
                    i(h, (a.total_in >> 24) & 255))
                  : (j(h, a.adler >>> 16), j(h, 65535 & a.adler)),
                g(a),
                h.wrap > 0 && (h.wrap = -h.wrap),
                0 !== h.pending ? M : N);
          }
          function A(a) {
            var b;
            return a && a.state
              ? ((b = a.state.status),
                b !== lb &&
                b !== mb &&
                b !== nb &&
                b !== ob &&
                b !== pb &&
                b !== qb &&
                b !== rb
                  ? d(a, O)
                  : ((a.state = null), b === qb ? d(a, P) : M))
              : O;
          }
          var B,
            C = a("../utils/common"),
            D = a("./trees"),
            E = a("./adler32"),
            F = a("./crc32"),
            G = a("./messages"),
            H = 0,
            I = 1,
            J = 3,
            K = 4,
            L = 5,
            M = 0,
            N = 1,
            O = -2,
            P = -3,
            Q = -5,
            R = -1,
            S = 1,
            T = 2,
            U = 3,
            V = 4,
            W = 0,
            X = 2,
            Y = 8,
            Z = 9,
            $ = 15,
            _ = 8,
            ab = 29,
            bb = 256,
            cb = bb + 1 + ab,
            db = 30,
            eb = 19,
            fb = 2 * cb + 1,
            gb = 15,
            hb = 3,
            ib = 258,
            jb = ib + hb + 1,
            kb = 32,
            lb = 42,
            mb = 69,
            nb = 73,
            ob = 91,
            pb = 103,
            qb = 113,
            rb = 666,
            sb = 1,
            tb = 2,
            ub = 3,
            vb = 4,
            wb = 3,
            xb = function (a, b, c, d, e) {
              (this.good_length = a),
                (this.max_lazy = b),
                (this.nice_length = c),
                (this.max_chain = d),
                (this.func = e);
            };
          (B = [
            new xb(0, 0, 0, 0, n),
            new xb(4, 4, 8, 4, o),
            new xb(4, 5, 16, 8, o),
            new xb(4, 6, 32, 32, o),
            new xb(4, 4, 16, 16, p),
            new xb(8, 16, 32, 32, p),
            new xb(8, 16, 128, 128, p),
            new xb(8, 32, 128, 256, p),
            new xb(32, 128, 258, 1024, p),
            new xb(32, 258, 258, 4096, p),
          ]),
            (c.deflateInit = y),
            (c.deflateInit2 = x),
            (c.deflateReset = v),
            (c.deflateResetKeep = u),
            (c.deflateSetHeader = w),
            (c.deflate = z),
            (c.deflateEnd = A),
            (c.deflateInfo = "pako deflate (from Nodeca project)");
        },
        {
          "../utils/common": 27,
          "./adler32": 29,
          "./crc32": 31,
          "./messages": 37,
          "./trees": 38,
        },
      ],
      33: [
        function (a, b) {
          "use strict";
          function c() {
            (this.text = 0),
              (this.time = 0),
              (this.xflags = 0),
              (this.os = 0),
              (this.extra = null),
              (this.extra_len = 0),
              (this.name = ""),
              (this.comment = ""),
              (this.hcrc = 0),
              (this.done = !1);
          }
          b.exports = c;
        },
        {},
      ],
      34: [
        function (a, b) {
          "use strict";
          var c = 30,
            d = 12;
          b.exports = function (a, b) {
            var e,
              f,
              g,
              h,
              i,
              j,
              k,
              l,
              m,
              n,
              o,
              p,
              q,
              r,
              s,
              t,
              u,
              v,
              w,
              x,
              y,
              z,
              A,
              B,
              C;
            (e = a.state),
              (f = a.next_in),
              (B = a.input),
              (g = f + (a.avail_in - 5)),
              (h = a.next_out),
              (C = a.output),
              (i = h - (b - a.avail_out)),
              (j = h + (a.avail_out - 257)),
              (k = e.dmax),
              (l = e.wsize),
              (m = e.whave),
              (n = e.wnext),
              (o = e.window),
              (p = e.hold),
              (q = e.bits),
              (r = e.lencode),
              (s = e.distcode),
              (t = (1 << e.lenbits) - 1),
              (u = (1 << e.distbits) - 1);
            a: do {
              15 > q &&
                ((p += B[f++] << q), (q += 8), (p += B[f++] << q), (q += 8)),
                (v = r[p & t]);
              b: for (;;) {
                if (
                  ((w = v >>> 24),
                  (p >>>= w),
                  (q -= w),
                  (w = (v >>> 16) & 255),
                  0 === w)
                )
                  C[h++] = 65535 & v;
                else {
                  if (!(16 & w)) {
                    if (0 === (64 & w)) {
                      v = r[(65535 & v) + (p & ((1 << w) - 1))];
                      continue b;
                    }
                    if (32 & w) {
                      e.mode = d;
                      break a;
                    }
                    (a.msg = "invalid literal/length code"), (e.mode = c);
                    break a;
                  }
                  (x = 65535 & v),
                    (w &= 15),
                    w &&
                      (w > q && ((p += B[f++] << q), (q += 8)),
                      (x += p & ((1 << w) - 1)),
                      (p >>>= w),
                      (q -= w)),
                    15 > q &&
                      ((p += B[f++] << q),
                      (q += 8),
                      (p += B[f++] << q),
                      (q += 8)),
                    (v = s[p & u]);
                  c: for (;;) {
                    if (
                      ((w = v >>> 24),
                      (p >>>= w),
                      (q -= w),
                      (w = (v >>> 16) & 255),
                      !(16 & w))
                    ) {
                      if (0 === (64 & w)) {
                        v = s[(65535 & v) + (p & ((1 << w) - 1))];
                        continue c;
                      }
                      (a.msg = "invalid distance code"), (e.mode = c);
                      break a;
                    }
                    if (
                      ((y = 65535 & v),
                      (w &= 15),
                      w > q &&
                        ((p += B[f++] << q),
                        (q += 8),
                        w > q && ((p += B[f++] << q), (q += 8))),
                      (y += p & ((1 << w) - 1)),
                      y > k)
                    ) {
                      (a.msg = "invalid distance too far back"), (e.mode = c);
                      break a;
                    }
                    if (((p >>>= w), (q -= w), (w = h - i), y > w)) {
                      if (((w = y - w), w > m && e.sane)) {
                        (a.msg = "invalid distance too far back"), (e.mode = c);
                        break a;
                      }
                      if (((z = 0), (A = o), 0 === n)) {
                        if (((z += l - w), x > w)) {
                          x -= w;
                          do C[h++] = o[z++];
                          while (--w);
                          (z = h - y), (A = C);
                        }
                      } else if (w > n) {
                        if (((z += l + n - w), (w -= n), x > w)) {
                          x -= w;
                          do C[h++] = o[z++];
                          while (--w);
                          if (((z = 0), x > n)) {
                            (w = n), (x -= w);
                            do C[h++] = o[z++];
                            while (--w);
                            (z = h - y), (A = C);
                          }
                        }
                      } else if (((z += n - w), x > w)) {
                        x -= w;
                        do C[h++] = o[z++];
                        while (--w);
                        (z = h - y), (A = C);
                      }
                      for (; x > 2; )
                        (C[h++] = A[z++]),
                          (C[h++] = A[z++]),
                          (C[h++] = A[z++]),
                          (x -= 3);
                      x && ((C[h++] = A[z++]), x > 1 && (C[h++] = A[z++]));
                    } else {
                      z = h - y;
                      do
                        (C[h++] = C[z++]),
                          (C[h++] = C[z++]),
                          (C[h++] = C[z++]),
                          (x -= 3);
                      while (x > 2);
                      x && ((C[h++] = C[z++]), x > 1 && (C[h++] = C[z++]));
                    }
                    break;
                  }
                }
                break;
              }
            } while (g > f && j > h);
            (x = q >> 3),
              (f -= x),
              (q -= x << 3),
              (p &= (1 << q) - 1),
              (a.next_in = f),
              (a.next_out = h),
              (a.avail_in = g > f ? 5 + (g - f) : 5 - (f - g)),
              (a.avail_out = j > h ? 257 + (j - h) : 257 - (h - j)),
              (e.hold = p),
              (e.bits = q);
          };
        },
        {},
      ],
      35: [
        function (a, b, c) {
          "use strict";
          function d(a) {
            return (
              ((a >>> 24) & 255) +
              ((a >>> 8) & 65280) +
              ((65280 & a) << 8) +
              ((255 & a) << 24)
            );
          }
          function e() {
            (this.mode = 0),
              (this.last = !1),
              (this.wrap = 0),
              (this.havedict = !1),
              (this.flags = 0),
              (this.dmax = 0),
              (this.check = 0),
              (this.total = 0),
              (this.head = null),
              (this.wbits = 0),
              (this.wsize = 0),
              (this.whave = 0),
              (this.wnext = 0),
              (this.window = null),
              (this.hold = 0),
              (this.bits = 0),
              (this.length = 0),
              (this.offset = 0),
              (this.extra = 0),
              (this.lencode = null),
              (this.distcode = null),
              (this.lenbits = 0),
              (this.distbits = 0),
              (this.ncode = 0),
              (this.nlen = 0),
              (this.ndist = 0),
              (this.have = 0),
              (this.next = null),
              (this.lens = new r.Buf16(320)),
              (this.work = new r.Buf16(288)),
              (this.lendyn = null),
              (this.distdyn = null),
              (this.sane = 0),
              (this.back = 0),
              (this.was = 0);
          }
          function f(a) {
            var b;
            return a && a.state
              ? ((b = a.state),
                (a.total_in = a.total_out = b.total = 0),
                (a.msg = ""),
                b.wrap && (a.adler = 1 & b.wrap),
                (b.mode = K),
                (b.last = 0),
                (b.havedict = 0),
                (b.dmax = 32768),
                (b.head = null),
                (b.hold = 0),
                (b.bits = 0),
                (b.lencode = b.lendyn = new r.Buf32(ob)),
                (b.distcode = b.distdyn = new r.Buf32(pb)),
                (b.sane = 1),
                (b.back = -1),
                C)
              : F;
          }
          function g(a) {
            var b;
            return a && a.state
              ? ((b = a.state),
                (b.wsize = 0),
                (b.whave = 0),
                (b.wnext = 0),
                f(a))
              : F;
          }
          function h(a, b) {
            var c, d;
            return a && a.state
              ? ((d = a.state),
                0 > b
                  ? ((c = 0), (b = -b))
                  : ((c = (b >> 4) + 1), 48 > b && (b &= 15)),
                b && (8 > b || b > 15)
                  ? F
                  : (null !== d.window && d.wbits !== b && (d.window = null),
                    (d.wrap = c),
                    (d.wbits = b),
                    g(a)))
              : F;
          }
          function i(a, b) {
            var c, d;
            return a
              ? ((d = new e()),
                (a.state = d),
                (d.window = null),
                (c = h(a, b)),
                c !== C && (a.state = null),
                c)
              : F;
          }
          function j(a) {
            return i(a, rb);
          }
          function k(a) {
            if (sb) {
              var b;
              for (p = new r.Buf32(512), q = new r.Buf32(32), b = 0; 144 > b; )
                a.lens[b++] = 8;
              for (; 256 > b; ) a.lens[b++] = 9;
              for (; 280 > b; ) a.lens[b++] = 7;
              for (; 288 > b; ) a.lens[b++] = 8;
              for (
                v(x, a.lens, 0, 288, p, 0, a.work, { bits: 9 }), b = 0;
                32 > b;

              )
                a.lens[b++] = 5;
              v(y, a.lens, 0, 32, q, 0, a.work, { bits: 5 }), (sb = !1);
            }
            (a.lencode = p),
              (a.lenbits = 9),
              (a.distcode = q),
              (a.distbits = 5);
          }
          function l(a, b, c, d) {
            var e,
              f = a.state;
            return (
              null === f.window &&
                ((f.wsize = 1 << f.wbits),
                (f.wnext = 0),
                (f.whave = 0),
                (f.window = new r.Buf8(f.wsize))),
              d >= f.wsize
                ? (r.arraySet(f.window, b, c - f.wsize, f.wsize, 0),
                  (f.wnext = 0),
                  (f.whave = f.wsize))
                : ((e = f.wsize - f.wnext),
                  e > d && (e = d),
                  r.arraySet(f.window, b, c - d, e, f.wnext),
                  (d -= e),
                  d
                    ? (r.arraySet(f.window, b, c - d, d, 0),
                      (f.wnext = d),
                      (f.whave = f.wsize))
                    : ((f.wnext += e),
                      f.wnext === f.wsize && (f.wnext = 0),
                      f.whave < f.wsize && (f.whave += e))),
              0
            );
          }
          function m(a, b) {
            var c,
              e,
              f,
              g,
              h,
              i,
              j,
              m,
              n,
              o,
              p,
              q,
              ob,
              pb,
              qb,
              rb,
              sb,
              tb,
              ub,
              vb,
              wb,
              xb,
              yb,
              zb,
              Ab = 0,
              Bb = new r.Buf8(4),
              Cb = [
                16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1,
                15,
              ];
            if (!a || !a.state || !a.output || (!a.input && 0 !== a.avail_in))
              return F;
            (c = a.state),
              c.mode === V && (c.mode = W),
              (h = a.next_out),
              (f = a.output),
              (j = a.avail_out),
              (g = a.next_in),
              (e = a.input),
              (i = a.avail_in),
              (m = c.hold),
              (n = c.bits),
              (o = i),
              (p = j),
              (xb = C);
            a: for (;;)
              switch (c.mode) {
                case K:
                  if (0 === c.wrap) {
                    c.mode = W;
                    break;
                  }
                  for (; 16 > n; ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  if (2 & c.wrap && 35615 === m) {
                    (c.check = 0),
                      (Bb[0] = 255 & m),
                      (Bb[1] = (m >>> 8) & 255),
                      (c.check = t(c.check, Bb, 2, 0)),
                      (m = 0),
                      (n = 0),
                      (c.mode = L);
                    break;
                  }
                  if (
                    ((c.flags = 0),
                    c.head && (c.head.done = !1),
                    !(1 & c.wrap) || (((255 & m) << 8) + (m >> 8)) % 31)
                  ) {
                    (a.msg = "incorrect header check"), (c.mode = lb);
                    break;
                  }
                  if ((15 & m) !== J) {
                    (a.msg = "unknown compression method"), (c.mode = lb);
                    break;
                  }
                  if (
                    ((m >>>= 4), (n -= 4), (wb = (15 & m) + 8), 0 === c.wbits)
                  )
                    c.wbits = wb;
                  else if (wb > c.wbits) {
                    (a.msg = "invalid window size"), (c.mode = lb);
                    break;
                  }
                  (c.dmax = 1 << wb),
                    (a.adler = c.check = 1),
                    (c.mode = 512 & m ? T : V),
                    (m = 0),
                    (n = 0);
                  break;
                case L:
                  for (; 16 > n; ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  if (((c.flags = m), (255 & c.flags) !== J)) {
                    (a.msg = "unknown compression method"), (c.mode = lb);
                    break;
                  }
                  if (57344 & c.flags) {
                    (a.msg = "unknown header flags set"), (c.mode = lb);
                    break;
                  }
                  c.head && (c.head.text = (m >> 8) & 1),
                    512 & c.flags &&
                      ((Bb[0] = 255 & m),
                      (Bb[1] = (m >>> 8) & 255),
                      (c.check = t(c.check, Bb, 2, 0))),
                    (m = 0),
                    (n = 0),
                    (c.mode = M);
                case M:
                  for (; 32 > n; ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  c.head && (c.head.time = m),
                    512 & c.flags &&
                      ((Bb[0] = 255 & m),
                      (Bb[1] = (m >>> 8) & 255),
                      (Bb[2] = (m >>> 16) & 255),
                      (Bb[3] = (m >>> 24) & 255),
                      (c.check = t(c.check, Bb, 4, 0))),
                    (m = 0),
                    (n = 0),
                    (c.mode = N);
                case N:
                  for (; 16 > n; ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  c.head && ((c.head.xflags = 255 & m), (c.head.os = m >> 8)),
                    512 & c.flags &&
                      ((Bb[0] = 255 & m),
                      (Bb[1] = (m >>> 8) & 255),
                      (c.check = t(c.check, Bb, 2, 0))),
                    (m = 0),
                    (n = 0),
                    (c.mode = O);
                case O:
                  if (1024 & c.flags) {
                    for (; 16 > n; ) {
                      if (0 === i) break a;
                      i--, (m += e[g++] << n), (n += 8);
                    }
                    (c.length = m),
                      c.head && (c.head.extra_len = m),
                      512 & c.flags &&
                        ((Bb[0] = 255 & m),
                        (Bb[1] = (m >>> 8) & 255),
                        (c.check = t(c.check, Bb, 2, 0))),
                      (m = 0),
                      (n = 0);
                  } else c.head && (c.head.extra = null);
                  c.mode = P;
                case P:
                  if (
                    1024 & c.flags &&
                    ((q = c.length),
                    q > i && (q = i),
                    q &&
                      (c.head &&
                        ((wb = c.head.extra_len - c.length),
                        c.head.extra ||
                          (c.head.extra = new Array(c.head.extra_len)),
                        r.arraySet(c.head.extra, e, g, q, wb)),
                      512 & c.flags && (c.check = t(c.check, e, q, g)),
                      (i -= q),
                      (g += q),
                      (c.length -= q)),
                    c.length)
                  )
                    break a;
                  (c.length = 0), (c.mode = Q);
                case Q:
                  if (2048 & c.flags) {
                    if (0 === i) break a;
                    q = 0;
                    do
                      (wb = e[g + q++]),
                        c.head &&
                          wb &&
                          c.length < 65536 &&
                          (c.head.name += String.fromCharCode(wb));
                    while (wb && i > q);
                    if (
                      (512 & c.flags && (c.check = t(c.check, e, q, g)),
                      (i -= q),
                      (g += q),
                      wb)
                    )
                      break a;
                  } else c.head && (c.head.name = null);
                  (c.length = 0), (c.mode = R);
                case R:
                  if (4096 & c.flags) {
                    if (0 === i) break a;
                    q = 0;
                    do
                      (wb = e[g + q++]),
                        c.head &&
                          wb &&
                          c.length < 65536 &&
                          (c.head.comment += String.fromCharCode(wb));
                    while (wb && i > q);
                    if (
                      (512 & c.flags && (c.check = t(c.check, e, q, g)),
                      (i -= q),
                      (g += q),
                      wb)
                    )
                      break a;
                  } else c.head && (c.head.comment = null);
                  c.mode = S;
                case S:
                  if (512 & c.flags) {
                    for (; 16 > n; ) {
                      if (0 === i) break a;
                      i--, (m += e[g++] << n), (n += 8);
                    }
                    if (m !== (65535 & c.check)) {
                      (a.msg = "header crc mismatch"), (c.mode = lb);
                      break;
                    }
                    (m = 0), (n = 0);
                  }
                  c.head &&
                    ((c.head.hcrc = (c.flags >> 9) & 1), (c.head.done = !0)),
                    (a.adler = c.check = 0),
                    (c.mode = V);
                  break;
                case T:
                  for (; 32 > n; ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  (a.adler = c.check = d(m)), (m = 0), (n = 0), (c.mode = U);
                case U:
                  if (0 === c.havedict)
                    return (
                      (a.next_out = h),
                      (a.avail_out = j),
                      (a.next_in = g),
                      (a.avail_in = i),
                      (c.hold = m),
                      (c.bits = n),
                      E
                    );
                  (a.adler = c.check = 1), (c.mode = V);
                case V:
                  if (b === A || b === B) break a;
                case W:
                  if (c.last) {
                    (m >>>= 7 & n), (n -= 7 & n), (c.mode = ib);
                    break;
                  }
                  for (; 3 > n; ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  switch (((c.last = 1 & m), (m >>>= 1), (n -= 1), 3 & m)) {
                    case 0:
                      c.mode = X;
                      break;
                    case 1:
                      if ((k(c), (c.mode = bb), b === B)) {
                        (m >>>= 2), (n -= 2);
                        break a;
                      }
                      break;
                    case 2:
                      c.mode = $;
                      break;
                    case 3:
                      (a.msg = "invalid block type"), (c.mode = lb);
                  }
                  (m >>>= 2), (n -= 2);
                  break;
                case X:
                  for (m >>>= 7 & n, n -= 7 & n; 32 > n; ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  if ((65535 & m) !== ((m >>> 16) ^ 65535)) {
                    (a.msg = "invalid stored block lengths"), (c.mode = lb);
                    break;
                  }
                  if (
                    ((c.length = 65535 & m),
                    (m = 0),
                    (n = 0),
                    (c.mode = Y),
                    b === B)
                  )
                    break a;
                case Y:
                  c.mode = Z;
                case Z:
                  if ((q = c.length)) {
                    if ((q > i && (q = i), q > j && (q = j), 0 === q)) break a;
                    r.arraySet(f, e, g, q, h),
                      (i -= q),
                      (g += q),
                      (j -= q),
                      (h += q),
                      (c.length -= q);
                    break;
                  }
                  c.mode = V;
                  break;
                case $:
                  for (; 14 > n; ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  if (
                    ((c.nlen = (31 & m) + 257),
                    (m >>>= 5),
                    (n -= 5),
                    (c.ndist = (31 & m) + 1),
                    (m >>>= 5),
                    (n -= 5),
                    (c.ncode = (15 & m) + 4),
                    (m >>>= 4),
                    (n -= 4),
                    c.nlen > 286 || c.ndist > 30)
                  ) {
                    (a.msg = "too many length or distance symbols"),
                      (c.mode = lb);
                    break;
                  }
                  (c.have = 0), (c.mode = _);
                case _:
                  for (; c.have < c.ncode; ) {
                    for (; 3 > n; ) {
                      if (0 === i) break a;
                      i--, (m += e[g++] << n), (n += 8);
                    }
                    (c.lens[Cb[c.have++]] = 7 & m), (m >>>= 3), (n -= 3);
                  }
                  for (; c.have < 19; ) c.lens[Cb[c.have++]] = 0;
                  if (
                    ((c.lencode = c.lendyn),
                    (c.lenbits = 7),
                    (yb = { bits: c.lenbits }),
                    (xb = v(w, c.lens, 0, 19, c.lencode, 0, c.work, yb)),
                    (c.lenbits = yb.bits),
                    xb)
                  ) {
                    (a.msg = "invalid code lengths set"), (c.mode = lb);
                    break;
                  }
                  (c.have = 0), (c.mode = ab);
                case ab:
                  for (; c.have < c.nlen + c.ndist; ) {
                    for (
                      ;
                      (Ab = c.lencode[m & ((1 << c.lenbits) - 1)]),
                        (qb = Ab >>> 24),
                        (rb = (Ab >>> 16) & 255),
                        (sb = 65535 & Ab),
                        !(n >= qb);

                    ) {
                      if (0 === i) break a;
                      i--, (m += e[g++] << n), (n += 8);
                    }
                    if (16 > sb)
                      (m >>>= qb), (n -= qb), (c.lens[c.have++] = sb);
                    else {
                      if (16 === sb) {
                        for (zb = qb + 2; zb > n; ) {
                          if (0 === i) break a;
                          i--, (m += e[g++] << n), (n += 8);
                        }
                        if (((m >>>= qb), (n -= qb), 0 === c.have)) {
                          (a.msg = "invalid bit length repeat"), (c.mode = lb);
                          break;
                        }
                        (wb = c.lens[c.have - 1]),
                          (q = 3 + (3 & m)),
                          (m >>>= 2),
                          (n -= 2);
                      } else if (17 === sb) {
                        for (zb = qb + 3; zb > n; ) {
                          if (0 === i) break a;
                          i--, (m += e[g++] << n), (n += 8);
                        }
                        (m >>>= qb),
                          (n -= qb),
                          (wb = 0),
                          (q = 3 + (7 & m)),
                          (m >>>= 3),
                          (n -= 3);
                      } else {
                        for (zb = qb + 7; zb > n; ) {
                          if (0 === i) break a;
                          i--, (m += e[g++] << n), (n += 8);
                        }
                        (m >>>= qb),
                          (n -= qb),
                          (wb = 0),
                          (q = 11 + (127 & m)),
                          (m >>>= 7),
                          (n -= 7);
                      }
                      if (c.have + q > c.nlen + c.ndist) {
                        (a.msg = "invalid bit length repeat"), (c.mode = lb);
                        break;
                      }
                      for (; q--; ) c.lens[c.have++] = wb;
                    }
                  }
                  if (c.mode === lb) break;
                  if (0 === c.lens[256]) {
                    (a.msg = "invalid code -- missing end-of-block"),
                      (c.mode = lb);
                    break;
                  }
                  if (
                    ((c.lenbits = 9),
                    (yb = { bits: c.lenbits }),
                    (xb = v(x, c.lens, 0, c.nlen, c.lencode, 0, c.work, yb)),
                    (c.lenbits = yb.bits),
                    xb)
                  ) {
                    (a.msg = "invalid literal/lengths set"), (c.mode = lb);
                    break;
                  }
                  if (
                    ((c.distbits = 6),
                    (c.distcode = c.distdyn),
                    (yb = { bits: c.distbits }),
                    (xb = v(
                      y,
                      c.lens,
                      c.nlen,
                      c.ndist,
                      c.distcode,
                      0,
                      c.work,
                      yb
                    )),
                    (c.distbits = yb.bits),
                    xb)
                  ) {
                    (a.msg = "invalid distances set"), (c.mode = lb);
                    break;
                  }
                  if (((c.mode = bb), b === B)) break a;
                case bb:
                  c.mode = cb;
                case cb:
                  if (i >= 6 && j >= 258) {
                    (a.next_out = h),
                      (a.avail_out = j),
                      (a.next_in = g),
                      (a.avail_in = i),
                      (c.hold = m),
                      (c.bits = n),
                      u(a, p),
                      (h = a.next_out),
                      (f = a.output),
                      (j = a.avail_out),
                      (g = a.next_in),
                      (e = a.input),
                      (i = a.avail_in),
                      (m = c.hold),
                      (n = c.bits),
                      c.mode === V && (c.back = -1);
                    break;
                  }
                  for (
                    c.back = 0;
                    (Ab = c.lencode[m & ((1 << c.lenbits) - 1)]),
                      (qb = Ab >>> 24),
                      (rb = (Ab >>> 16) & 255),
                      (sb = 65535 & Ab),
                      !(n >= qb);

                  ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  if (rb && 0 === (240 & rb)) {
                    for (
                      tb = qb, ub = rb, vb = sb;
                      (Ab =
                        c.lencode[vb + ((m & ((1 << (tb + ub)) - 1)) >> tb)]),
                        (qb = Ab >>> 24),
                        (rb = (Ab >>> 16) & 255),
                        (sb = 65535 & Ab),
                        !(n >= tb + qb);

                    ) {
                      if (0 === i) break a;
                      i--, (m += e[g++] << n), (n += 8);
                    }
                    (m >>>= tb), (n -= tb), (c.back += tb);
                  }
                  if (
                    ((m >>>= qb),
                    (n -= qb),
                    (c.back += qb),
                    (c.length = sb),
                    0 === rb)
                  ) {
                    c.mode = hb;
                    break;
                  }
                  if (32 & rb) {
                    (c.back = -1), (c.mode = V);
                    break;
                  }
                  if (64 & rb) {
                    (a.msg = "invalid literal/length code"), (c.mode = lb);
                    break;
                  }
                  (c.extra = 15 & rb), (c.mode = db);
                case db:
                  if (c.extra) {
                    for (zb = c.extra; zb > n; ) {
                      if (0 === i) break a;
                      i--, (m += e[g++] << n), (n += 8);
                    }
                    (c.length += m & ((1 << c.extra) - 1)),
                      (m >>>= c.extra),
                      (n -= c.extra),
                      (c.back += c.extra);
                  }
                  (c.was = c.length), (c.mode = eb);
                case eb:
                  for (
                    ;
                    (Ab = c.distcode[m & ((1 << c.distbits) - 1)]),
                      (qb = Ab >>> 24),
                      (rb = (Ab >>> 16) & 255),
                      (sb = 65535 & Ab),
                      !(n >= qb);

                  ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  if (0 === (240 & rb)) {
                    for (
                      tb = qb, ub = rb, vb = sb;
                      (Ab =
                        c.distcode[vb + ((m & ((1 << (tb + ub)) - 1)) >> tb)]),
                        (qb = Ab >>> 24),
                        (rb = (Ab >>> 16) & 255),
                        (sb = 65535 & Ab),
                        !(n >= tb + qb);

                    ) {
                      if (0 === i) break a;
                      i--, (m += e[g++] << n), (n += 8);
                    }
                    (m >>>= tb), (n -= tb), (c.back += tb);
                  }
                  if (((m >>>= qb), (n -= qb), (c.back += qb), 64 & rb)) {
                    (a.msg = "invalid distance code"), (c.mode = lb);
                    break;
                  }
                  (c.offset = sb), (c.extra = 15 & rb), (c.mode = fb);
                case fb:
                  if (c.extra) {
                    for (zb = c.extra; zb > n; ) {
                      if (0 === i) break a;
                      i--, (m += e[g++] << n), (n += 8);
                    }
                    (c.offset += m & ((1 << c.extra) - 1)),
                      (m >>>= c.extra),
                      (n -= c.extra),
                      (c.back += c.extra);
                  }
                  if (c.offset > c.dmax) {
                    (a.msg = "invalid distance too far back"), (c.mode = lb);
                    break;
                  }
                  c.mode = gb;
                case gb:
                  if (0 === j) break a;
                  if (((q = p - j), c.offset > q)) {
                    if (((q = c.offset - q), q > c.whave && c.sane)) {
                      (a.msg = "invalid distance too far back"), (c.mode = lb);
                      break;
                    }
                    q > c.wnext
                      ? ((q -= c.wnext), (ob = c.wsize - q))
                      : (ob = c.wnext - q),
                      q > c.length && (q = c.length),
                      (pb = c.window);
                  } else (pb = f), (ob = h - c.offset), (q = c.length);
                  q > j && (q = j), (j -= q), (c.length -= q);
                  do f[h++] = pb[ob++];
                  while (--q);
                  0 === c.length && (c.mode = cb);
                  break;
                case hb:
                  if (0 === j) break a;
                  (f[h++] = c.length), j--, (c.mode = cb);
                  break;
                case ib:
                  if (c.wrap) {
                    for (; 32 > n; ) {
                      if (0 === i) break a;
                      i--, (m |= e[g++] << n), (n += 8);
                    }
                    if (
                      ((p -= j),
                      (a.total_out += p),
                      (c.total += p),
                      p &&
                        (a.adler = c.check =
                          c.flags
                            ? t(c.check, f, p, h - p)
                            : s(c.check, f, p, h - p)),
                      (p = j),
                      (c.flags ? m : d(m)) !== c.check)
                    ) {
                      (a.msg = "incorrect data check"), (c.mode = lb);
                      break;
                    }
                    (m = 0), (n = 0);
                  }
                  c.mode = jb;
                case jb:
                  if (c.wrap && c.flags) {
                    for (; 32 > n; ) {
                      if (0 === i) break a;
                      i--, (m += e[g++] << n), (n += 8);
                    }
                    if (m !== (4294967295 & c.total)) {
                      (a.msg = "incorrect length check"), (c.mode = lb);
                      break;
                    }
                    (m = 0), (n = 0);
                  }
                  c.mode = kb;
                case kb:
                  xb = D;
                  break a;
                case lb:
                  xb = G;
                  break a;
                case mb:
                  return H;
                case nb:
                default:
                  return F;
              }
            return (
              (a.next_out = h),
              (a.avail_out = j),
              (a.next_in = g),
              (a.avail_in = i),
              (c.hold = m),
              (c.bits = n),
              (c.wsize ||
                (p !== a.avail_out &&
                  c.mode < lb &&
                  (c.mode < ib || b !== z))) &&
              l(a, a.output, a.next_out, p - a.avail_out)
                ? ((c.mode = mb), H)
                : ((o -= a.avail_in),
                  (p -= a.avail_out),
                  (a.total_in += o),
                  (a.total_out += p),
                  (c.total += p),
                  c.wrap &&
                    p &&
                    (a.adler = c.check =
                      c.flags
                        ? t(c.check, f, p, a.next_out - p)
                        : s(c.check, f, p, a.next_out - p)),
                  (a.data_type =
                    c.bits +
                    (c.last ? 64 : 0) +
                    (c.mode === V ? 128 : 0) +
                    (c.mode === bb || c.mode === Y ? 256 : 0)),
                  ((0 === o && 0 === p) || b === z) && xb === C && (xb = I),
                  xb)
            );
          }
          function n(a) {
            if (!a || !a.state) return F;
            var b = a.state;
            return b.window && (b.window = null), (a.state = null), C;
          }
          function o(a, b) {
            var c;
            return a && a.state
              ? ((c = a.state),
                0 === (2 & c.wrap) ? F : ((c.head = b), (b.done = !1), C))
              : F;
          }
          var p,
            q,
            r = a("../utils/common"),
            s = a("./adler32"),
            t = a("./crc32"),
            u = a("./inffast"),
            v = a("./inftrees"),
            w = 0,
            x = 1,
            y = 2,
            z = 4,
            A = 5,
            B = 6,
            C = 0,
            D = 1,
            E = 2,
            F = -2,
            G = -3,
            H = -4,
            I = -5,
            J = 8,
            K = 1,
            L = 2,
            M = 3,
            N = 4,
            O = 5,
            P = 6,
            Q = 7,
            R = 8,
            S = 9,
            T = 10,
            U = 11,
            V = 12,
            W = 13,
            X = 14,
            Y = 15,
            Z = 16,
            $ = 17,
            _ = 18,
            ab = 19,
            bb = 20,
            cb = 21,
            db = 22,
            eb = 23,
            fb = 24,
            gb = 25,
            hb = 26,
            ib = 27,
            jb = 28,
            kb = 29,
            lb = 30,
            mb = 31,
            nb = 32,
            ob = 852,
            pb = 592,
            qb = 15,
            rb = qb,
            sb = !0;
          (c.inflateReset = g),
            (c.inflateReset2 = h),
            (c.inflateResetKeep = f),
            (c.inflateInit = j),
            (c.inflateInit2 = i),
            (c.inflate = m),
            (c.inflateEnd = n),
            (c.inflateGetHeader = o),
            (c.inflateInfo = "pako inflate (from Nodeca project)");
        },
        {
          "../utils/common": 27,
          "./adler32": 29,
          "./crc32": 31,
          "./inffast": 34,
          "./inftrees": 36,
        },
      ],
      36: [
        function (a, b) {
          "use strict";
          var c = a("../utils/common"),
            d = 15,
            e = 852,
            f = 592,
            g = 0,
            h = 1,
            i = 2,
            j = [
              3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43,
              51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
            ],
            k = [
              16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
              19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
            ],
            l = [
              1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257,
              385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289,
              16385, 24577, 0, 0,
            ],
            m = [
              16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
              23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
            ];
          b.exports = function (a, b, n, o, p, q, r, s) {
            var t,
              u,
              v,
              w,
              x,
              y,
              z,
              A,
              B,
              C = s.bits,
              D = 0,
              E = 0,
              F = 0,
              G = 0,
              H = 0,
              I = 0,
              J = 0,
              K = 0,
              L = 0,
              M = 0,
              N = null,
              O = 0,
              P = new c.Buf16(d + 1),
              Q = new c.Buf16(d + 1),
              R = null,
              S = 0;
            for (D = 0; d >= D; D++) P[D] = 0;
            for (E = 0; o > E; E++) P[b[n + E]]++;
            for (H = C, G = d; G >= 1 && 0 === P[G]; G--);
            if ((H > G && (H = G), 0 === G))
              return (p[q++] = 20971520), (p[q++] = 20971520), (s.bits = 1), 0;
            for (F = 1; G > F && 0 === P[F]; F++);
            for (F > H && (H = F), K = 1, D = 1; d >= D; D++)
              if (((K <<= 1), (K -= P[D]), 0 > K)) return -1;
            if (K > 0 && (a === g || 1 !== G)) return -1;
            for (Q[1] = 0, D = 1; d > D; D++) Q[D + 1] = Q[D] + P[D];
            for (E = 0; o > E; E++) 0 !== b[n + E] && (r[Q[b[n + E]]++] = E);
            if (
              (a === g
                ? ((N = R = r), (y = 19))
                : a === h
                ? ((N = j), (O -= 257), (R = k), (S -= 257), (y = 256))
                : ((N = l), (R = m), (y = -1)),
              (M = 0),
              (E = 0),
              (D = F),
              (x = q),
              (I = H),
              (J = 0),
              (v = -1),
              (L = 1 << H),
              (w = L - 1),
              (a === h && L > e) || (a === i && L > f))
            )
              return 1;
            for (var T = 0; ; ) {
              T++,
                (z = D - J),
                r[E] < y
                  ? ((A = 0), (B = r[E]))
                  : r[E] > y
                  ? ((A = R[S + r[E]]), (B = N[O + r[E]]))
                  : ((A = 96), (B = 0)),
                (t = 1 << (D - J)),
                (u = 1 << I),
                (F = u);
              do
                (u -= t), (p[x + (M >> J) + u] = (z << 24) | (A << 16) | B | 0);
              while (0 !== u);
              for (t = 1 << (D - 1); M & t; ) t >>= 1;
              if (
                (0 !== t ? ((M &= t - 1), (M += t)) : (M = 0),
                E++,
                0 === --P[D])
              ) {
                if (D === G) break;
                D = b[n + r[E]];
              }
              if (D > H && (M & w) !== v) {
                for (
                  0 === J && (J = H), x += F, I = D - J, K = 1 << I;
                  G > I + J && ((K -= P[I + J]), !(0 >= K));

                )
                  I++, (K <<= 1);
                if (((L += 1 << I), (a === h && L > e) || (a === i && L > f)))
                  return 1;
                (v = M & w), (p[v] = (H << 24) | (I << 16) | (x - q) | 0);
              }
            }
            return (
              0 !== M && (p[x + M] = ((D - J) << 24) | (64 << 16) | 0),
              (s.bits = H),
              0
            );
          };
        },
        { "../utils/common": 27 },
      ],
      37: [
        function (a, b) {
          "use strict";
          b.exports = {
            2: "need dictionary",
            1: "stream end",
            0: "",
            "-1": "file error",
            "-2": "stream error",
            "-3": "data error",
            "-4": "insufficient memory",
            "-5": "buffer error",
            "-6": "incompatible version",
          };
        },
        {},
      ],
      38: [
        function (a, b, c) {
          "use strict";
          function d(a) {
            for (var b = a.length; --b >= 0; ) a[b] = 0;
          }
          function e(a) {
            return 256 > a ? gb[a] : gb[256 + (a >>> 7)];
          }
          function f(a, b) {
            (a.pending_buf[a.pending++] = 255 & b),
              (a.pending_buf[a.pending++] = (b >>> 8) & 255);
          }
          function g(a, b, c) {
            a.bi_valid > V - c
              ? ((a.bi_buf |= (b << a.bi_valid) & 65535),
                f(a, a.bi_buf),
                (a.bi_buf = b >> (V - a.bi_valid)),
                (a.bi_valid += c - V))
              : ((a.bi_buf |= (b << a.bi_valid) & 65535), (a.bi_valid += c));
          }
          function h(a, b, c) {
            g(a, c[2 * b], c[2 * b + 1]);
          }
          function i(a, b) {
            var c = 0;
            do (c |= 1 & a), (a >>>= 1), (c <<= 1);
            while (--b > 0);
            return c >>> 1;
          }
          function j(a) {
            16 === a.bi_valid
              ? (f(a, a.bi_buf), (a.bi_buf = 0), (a.bi_valid = 0))
              : a.bi_valid >= 8 &&
                ((a.pending_buf[a.pending++] = 255 & a.bi_buf),
                (a.bi_buf >>= 8),
                (a.bi_valid -= 8));
          }
          function k(a, b) {
            var c,
              d,
              e,
              f,
              g,
              h,
              i = b.dyn_tree,
              j = b.max_code,
              k = b.stat_desc.static_tree,
              l = b.stat_desc.has_stree,
              m = b.stat_desc.extra_bits,
              n = b.stat_desc.extra_base,
              o = b.stat_desc.max_length,
              p = 0;
            for (f = 0; U >= f; f++) a.bl_count[f] = 0;
            for (
              i[2 * a.heap[a.heap_max] + 1] = 0, c = a.heap_max + 1;
              T > c;
              c++
            )
              (d = a.heap[c]),
                (f = i[2 * i[2 * d + 1] + 1] + 1),
                f > o && ((f = o), p++),
                (i[2 * d + 1] = f),
                d > j ||
                  (a.bl_count[f]++,
                  (g = 0),
                  d >= n && (g = m[d - n]),
                  (h = i[2 * d]),
                  (a.opt_len += h * (f + g)),
                  l && (a.static_len += h * (k[2 * d + 1] + g)));
            if (0 !== p) {
              do {
                for (f = o - 1; 0 === a.bl_count[f]; ) f--;
                a.bl_count[f]--,
                  (a.bl_count[f + 1] += 2),
                  a.bl_count[o]--,
                  (p -= 2);
              } while (p > 0);
              for (f = o; 0 !== f; f--)
                for (d = a.bl_count[f]; 0 !== d; )
                  (e = a.heap[--c]),
                    e > j ||
                      (i[2 * e + 1] !== f &&
                        ((a.opt_len += (f - i[2 * e + 1]) * i[2 * e]),
                        (i[2 * e + 1] = f)),
                      d--);
            }
          }
          function l(a, b, c) {
            var d,
              e,
              f = new Array(U + 1),
              g = 0;
            for (d = 1; U >= d; d++) f[d] = g = (g + c[d - 1]) << 1;
            for (e = 0; b >= e; e++) {
              var h = a[2 * e + 1];
              0 !== h && (a[2 * e] = i(f[h]++, h));
            }
          }
          function m() {
            var a,
              b,
              c,
              d,
              e,
              f = new Array(U + 1);
            for (c = 0, d = 0; O - 1 > d; d++)
              for (ib[d] = c, a = 0; a < 1 << _[d]; a++) hb[c++] = d;
            for (hb[c - 1] = d, e = 0, d = 0; 16 > d; d++)
              for (jb[d] = e, a = 0; a < 1 << ab[d]; a++) gb[e++] = d;
            for (e >>= 7; R > d; d++)
              for (jb[d] = e << 7, a = 0; a < 1 << (ab[d] - 7); a++)
                gb[256 + e++] = d;
            for (b = 0; U >= b; b++) f[b] = 0;
            for (a = 0; 143 >= a; ) (eb[2 * a + 1] = 8), a++, f[8]++;
            for (; 255 >= a; ) (eb[2 * a + 1] = 9), a++, f[9]++;
            for (; 279 >= a; ) (eb[2 * a + 1] = 7), a++, f[7]++;
            for (; 287 >= a; ) (eb[2 * a + 1] = 8), a++, f[8]++;
            for (l(eb, Q + 1, f), a = 0; R > a; a++)
              (fb[2 * a + 1] = 5), (fb[2 * a] = i(a, 5));
            (kb = new nb(eb, _, P + 1, Q, U)),
              (lb = new nb(fb, ab, 0, R, U)),
              (mb = new nb(new Array(0), bb, 0, S, W));
          }
          function n(a) {
            var b;
            for (b = 0; Q > b; b++) a.dyn_ltree[2 * b] = 0;
            for (b = 0; R > b; b++) a.dyn_dtree[2 * b] = 0;
            for (b = 0; S > b; b++) a.bl_tree[2 * b] = 0;
            (a.dyn_ltree[2 * X] = 1),
              (a.opt_len = a.static_len = 0),
              (a.last_lit = a.matches = 0);
          }
          function o(a) {
            a.bi_valid > 8
              ? f(a, a.bi_buf)
              : a.bi_valid > 0 && (a.pending_buf[a.pending++] = a.bi_buf),
              (a.bi_buf = 0),
              (a.bi_valid = 0);
          }
          function p(a, b, c, d) {
            o(a),
              d && (f(a, c), f(a, ~c)),
              E.arraySet(a.pending_buf, a.window, b, c, a.pending),
              (a.pending += c);
          }
          function q(a, b, c, d) {
            var e = 2 * b,
              f = 2 * c;
            return a[e] < a[f] || (a[e] === a[f] && d[b] <= d[c]);
          }
          function r(a, b, c) {
            for (
              var d = a.heap[c], e = c << 1;
              e <= a.heap_len &&
              (e < a.heap_len && q(b, a.heap[e + 1], a.heap[e], a.depth) && e++,
              !q(b, d, a.heap[e], a.depth));

            )
              (a.heap[c] = a.heap[e]), (c = e), (e <<= 1);
            a.heap[c] = d;
          }
          function s(a, b, c) {
            var d,
              f,
              i,
              j,
              k = 0;
            if (0 !== a.last_lit)
              do
                (d =
                  (a.pending_buf[a.d_buf + 2 * k] << 8) |
                  a.pending_buf[a.d_buf + 2 * k + 1]),
                  (f = a.pending_buf[a.l_buf + k]),
                  k++,
                  0 === d
                    ? h(a, f, b)
                    : ((i = hb[f]),
                      h(a, i + P + 1, b),
                      (j = _[i]),
                      0 !== j && ((f -= ib[i]), g(a, f, j)),
                      d--,
                      (i = e(d)),
                      h(a, i, c),
                      (j = ab[i]),
                      0 !== j && ((d -= jb[i]), g(a, d, j)));
              while (k < a.last_lit);
            h(a, X, b);
          }
          function t(a, b) {
            var c,
              d,
              e,
              f = b.dyn_tree,
              g = b.stat_desc.static_tree,
              h = b.stat_desc.has_stree,
              i = b.stat_desc.elems,
              j = -1;
            for (a.heap_len = 0, a.heap_max = T, c = 0; i > c; c++)
              0 !== f[2 * c]
                ? ((a.heap[++a.heap_len] = j = c), (a.depth[c] = 0))
                : (f[2 * c + 1] = 0);
            for (; a.heap_len < 2; )
              (e = a.heap[++a.heap_len] = 2 > j ? ++j : 0),
                (f[2 * e] = 1),
                (a.depth[e] = 0),
                a.opt_len--,
                h && (a.static_len -= g[2 * e + 1]);
            for (b.max_code = j, c = a.heap_len >> 1; c >= 1; c--) r(a, f, c);
            e = i;
            do
              (c = a.heap[1]),
                (a.heap[1] = a.heap[a.heap_len--]),
                r(a, f, 1),
                (d = a.heap[1]),
                (a.heap[--a.heap_max] = c),
                (a.heap[--a.heap_max] = d),
                (f[2 * e] = f[2 * c] + f[2 * d]),
                (a.depth[e] =
                  (a.depth[c] >= a.depth[d] ? a.depth[c] : a.depth[d]) + 1),
                (f[2 * c + 1] = f[2 * d + 1] = e),
                (a.heap[1] = e++),
                r(a, f, 1);
            while (a.heap_len >= 2);
            (a.heap[--a.heap_max] = a.heap[1]), k(a, b), l(f, j, a.bl_count);
          }
          function u(a, b, c) {
            var d,
              e,
              f = -1,
              g = b[1],
              h = 0,
              i = 7,
              j = 4;
            for (
              0 === g && ((i = 138), (j = 3)),
                b[2 * (c + 1) + 1] = 65535,
                d = 0;
              c >= d;
              d++
            )
              (e = g),
                (g = b[2 * (d + 1) + 1]),
                (++h < i && e === g) ||
                  (j > h
                    ? (a.bl_tree[2 * e] += h)
                    : 0 !== e
                    ? (e !== f && a.bl_tree[2 * e]++, a.bl_tree[2 * Y]++)
                    : 10 >= h
                    ? a.bl_tree[2 * Z]++
                    : a.bl_tree[2 * $]++,
                  (h = 0),
                  (f = e),
                  0 === g
                    ? ((i = 138), (j = 3))
                    : e === g
                    ? ((i = 6), (j = 3))
                    : ((i = 7), (j = 4)));
          }
          function v(a, b, c) {
            var d,
              e,
              f = -1,
              i = b[1],
              j = 0,
              k = 7,
              l = 4;
            for (0 === i && ((k = 138), (l = 3)), d = 0; c >= d; d++)
              if (((e = i), (i = b[2 * (d + 1) + 1]), !(++j < k && e === i))) {
                if (l > j) {
                  do h(a, e, a.bl_tree);
                  while (0 !== --j);
                } else
                  0 !== e
                    ? (e !== f && (h(a, e, a.bl_tree), j--),
                      h(a, Y, a.bl_tree),
                      g(a, j - 3, 2))
                    : 10 >= j
                    ? (h(a, Z, a.bl_tree), g(a, j - 3, 3))
                    : (h(a, $, a.bl_tree), g(a, j - 11, 7));
                (j = 0),
                  (f = e),
                  0 === i
                    ? ((k = 138), (l = 3))
                    : e === i
                    ? ((k = 6), (l = 3))
                    : ((k = 7), (l = 4));
              }
          }
          function w(a) {
            var b;
            for (
              u(a, a.dyn_ltree, a.l_desc.max_code),
                u(a, a.dyn_dtree, a.d_desc.max_code),
                t(a, a.bl_desc),
                b = S - 1;
              b >= 3 && 0 === a.bl_tree[2 * cb[b] + 1];
              b--
            );
            return (a.opt_len += 3 * (b + 1) + 5 + 5 + 4), b;
          }
          function x(a, b, c, d) {
            var e;
            for (
              g(a, b - 257, 5), g(a, c - 1, 5), g(a, d - 4, 4), e = 0;
              d > e;
              e++
            )
              g(a, a.bl_tree[2 * cb[e] + 1], 3);
            v(a, a.dyn_ltree, b - 1), v(a, a.dyn_dtree, c - 1);
          }
          function y(a) {
            var b,
              c = 4093624447;
            for (b = 0; 31 >= b; b++, c >>>= 1)
              if (1 & c && 0 !== a.dyn_ltree[2 * b]) return G;
            if (
              0 !== a.dyn_ltree[18] ||
              0 !== a.dyn_ltree[20] ||
              0 !== a.dyn_ltree[26]
            )
              return H;
            for (b = 32; P > b; b++) if (0 !== a.dyn_ltree[2 * b]) return H;
            return G;
          }
          function z(a) {
            pb || (m(), (pb = !0)),
              (a.l_desc = new ob(a.dyn_ltree, kb)),
              (a.d_desc = new ob(a.dyn_dtree, lb)),
              (a.bl_desc = new ob(a.bl_tree, mb)),
              (a.bi_buf = 0),
              (a.bi_valid = 0),
              n(a);
          }
          function A(a, b, c, d) {
            g(a, (J << 1) + (d ? 1 : 0), 3), p(a, b, c, !0);
          }
          function B(a) {
            g(a, K << 1, 3), h(a, X, eb), j(a);
          }
          function C(a, b, c, d) {
            var e,
              f,
              h = 0;
            a.level > 0
              ? (a.strm.data_type === I && (a.strm.data_type = y(a)),
                t(a, a.l_desc),
                t(a, a.d_desc),
                (h = w(a)),
                (e = (a.opt_len + 3 + 7) >>> 3),
                (f = (a.static_len + 3 + 7) >>> 3),
                e >= f && (e = f))
              : (e = f = c + 5),
              e >= c + 4 && -1 !== b
                ? A(a, b, c, d)
                : a.strategy === F || f === e
                ? (g(a, (K << 1) + (d ? 1 : 0), 3), s(a, eb, fb))
                : (g(a, (L << 1) + (d ? 1 : 0), 3),
                  x(a, a.l_desc.max_code + 1, a.d_desc.max_code + 1, h + 1),
                  s(a, a.dyn_ltree, a.dyn_dtree)),
              n(a),
              d && o(a);
          }
          function D(a, b, c) {
            return (
              (a.pending_buf[a.d_buf + 2 * a.last_lit] = (b >>> 8) & 255),
              (a.pending_buf[a.d_buf + 2 * a.last_lit + 1] = 255 & b),
              (a.pending_buf[a.l_buf + a.last_lit] = 255 & c),
              a.last_lit++,
              0 === b
                ? a.dyn_ltree[2 * c]++
                : (a.matches++,
                  b--,
                  a.dyn_ltree[2 * (hb[c] + P + 1)]++,
                  a.dyn_dtree[2 * e(b)]++),
              a.last_lit === a.lit_bufsize - 1
            );
          }
          var E = a("../utils/common"),
            F = 4,
            G = 0,
            H = 1,
            I = 2,
            J = 0,
            K = 1,
            L = 2,
            M = 3,
            N = 258,
            O = 29,
            P = 256,
            Q = P + 1 + O,
            R = 30,
            S = 19,
            T = 2 * Q + 1,
            U = 15,
            V = 16,
            W = 7,
            X = 256,
            Y = 16,
            Z = 17,
            $ = 18,
            _ = [
              0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4,
              4, 4, 5, 5, 5, 5, 0,
            ],
            ab = [
              0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9,
              10, 10, 11, 11, 12, 12, 13, 13,
            ],
            bb = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
            cb = [
              16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
            ],
            db = 512,
            eb = new Array(2 * (Q + 2));
          d(eb);
          var fb = new Array(2 * R);
          d(fb);
          var gb = new Array(db);
          d(gb);
          var hb = new Array(N - M + 1);
          d(hb);
          var ib = new Array(O);
          d(ib);
          var jb = new Array(R);
          d(jb);
          var kb,
            lb,
            mb,
            nb = function (a, b, c, d, e) {
              (this.static_tree = a),
                (this.extra_bits = b),
                (this.extra_base = c),
                (this.elems = d),
                (this.max_length = e),
                (this.has_stree = a && a.length);
            },
            ob = function (a, b) {
              (this.dyn_tree = a), (this.max_code = 0), (this.stat_desc = b);
            },
            pb = !1;
          (c._tr_init = z),
            (c._tr_stored_block = A),
            (c._tr_flush_block = C),
            (c._tr_tally = D),
            (c._tr_align = B);
        },
        { "../utils/common": 27 },
      ],
      39: [
        function (a, b) {
          "use strict";
          function c() {
            (this.input = null),
              (this.next_in = 0),
              (this.avail_in = 0),
              (this.total_in = 0),
              (this.output = null),
              (this.next_out = 0),
              (this.avail_out = 0),
              (this.total_out = 0),
              (this.msg = ""),
              (this.state = null),
              (this.data_type = 2),
              (this.adler = 0);
          }
          b.exports = c;
        },
        {},
      ],
    },
    {},
    [9]
  )(9);
});

/*!
   SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 DataTables 1.12.1
 ©2008-2022 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (l, y, A) {
  l instanceof String && (l = String(l));
  for (var q = l.length, E = 0; E < q; E++) {
    var P = l[E];
    if (y.call(A, P, E, l)) return { i: E, v: P };
  }
  return { i: -1, v: void 0 };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
    ? Object.defineProperty
    : function (l, y, A) {
        if (l == Array.prototype || l == Object.prototype) return l;
        l[y] = A.value;
        return l;
      };
$jscomp.getGlobal = function (l) {
  l = [
    "object" == typeof globalThis && globalThis,
    l,
    "object" == typeof window && window,
    "object" == typeof self && self,
    "object" == typeof global && global,
  ];
  for (var y = 0; y < l.length; ++y) {
    var A = l[y];
    if (A && A.Math == Math) return A;
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE =
  "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS =
  !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function (l, y) {
  var A = $jscomp.propertyToPolyfillSymbol[y];
  if (null == A) return l[y];
  A = l[A];
  return void 0 !== A ? A : l[y];
};
$jscomp.polyfill = function (l, y, A, q) {
  y &&
    ($jscomp.ISOLATE_POLYFILLS
      ? $jscomp.polyfillIsolated(l, y, A, q)
      : $jscomp.polyfillUnisolated(l, y, A, q));
};
$jscomp.polyfillUnisolated = function (l, y, A, q) {
  A = $jscomp.global;
  l = l.split(".");
  for (q = 0; q < l.length - 1; q++) {
    var E = l[q];
    if (!(E in A)) return;
    A = A[E];
  }
  l = l[l.length - 1];
  q = A[l];
  y = y(q);
  y != q &&
    null != y &&
    $jscomp.defineProperty(A, l, { configurable: !0, writable: !0, value: y });
};
$jscomp.polyfillIsolated = function (l, y, A, q) {
  var E = l.split(".");
  l = 1 === E.length;
  q = E[0];
  q = !l && q in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var P = 0; P < E.length - 1; P++) {
    var la = E[P];
    if (!(la in q)) return;
    q = q[la];
  }
  E = E[E.length - 1];
  A = $jscomp.IS_SYMBOL_NATIVE && "es6" === A ? q[E] : null;
  y = y(A);
  null != y &&
    (l
      ? $jscomp.defineProperty($jscomp.polyfills, E, {
          configurable: !0,
          writable: !0,
          value: y,
        })
      : y !== A &&
        (($jscomp.propertyToPolyfillSymbol[E] = $jscomp.IS_SYMBOL_NATIVE
          ? $jscomp.global.Symbol(E)
          : $jscomp.POLYFILL_PREFIX + E),
        (E = $jscomp.propertyToPolyfillSymbol[E]),
        $jscomp.defineProperty(q, E, {
          configurable: !0,
          writable: !0,
          value: y,
        })));
};
$jscomp.polyfill(
  "Array.prototype.find",
  function (l) {
    return l
      ? l
      : function (y, A) {
          return $jscomp.findInternal(this, y, A).v;
        };
  },
  "es6",
  "es3"
);
(function (l) {
  "function" === typeof define && define.amd
    ? define(["jquery"], function (y) {
        return l(y, window, document);
      })
    : "object" === typeof exports
    ? (module.exports = function (y, A) {
        y || (y = window);
        A ||
          (A =
            "undefined" !== typeof window
              ? require("jquery")
              : require("jquery")(y));
        return l(A, y, y.document);
      })
    : (window.DataTable = l(jQuery, window, document));
})(function (l, y, A, q) {
  function E(a) {
    var b,
      c,
      d = {};
    l.each(a, function (e, h) {
      (b = e.match(/^([^A-Z]+?)([A-Z])/)) &&
        -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ") &&
        ((c = e.replace(b[0], b[2].toLowerCase())),
        (d[c] = e),
        "o" === b[1] && E(a[e]));
    });
    a._hungarianMap = d;
  }
  function P(a, b, c) {
    a._hungarianMap || E(a);
    var d;
    l.each(b, function (e, h) {
      d = a._hungarianMap[e];
      d === q ||
        (!c && b[d] !== q) ||
        ("o" === d.charAt(0)
          ? (b[d] || (b[d] = {}), l.extend(!0, b[d], b[e]), P(a[d], b[d], c))
          : (b[d] = b[e]));
    });
  }
  function la(a) {
    var b = u.defaults.oLanguage,
      c = b.sDecimal;
    c && bb(c);
    if (a) {
      var d = a.sZeroRecords;
      !a.sEmptyTable &&
        d &&
        "No data available in table" === b.sEmptyTable &&
        Y(a, a, "sZeroRecords", "sEmptyTable");
      !a.sLoadingRecords &&
        d &&
        "Loading..." === b.sLoadingRecords &&
        Y(a, a, "sZeroRecords", "sLoadingRecords");
      a.sInfoThousands && (a.sThousands = a.sInfoThousands);
      (a = a.sDecimal) && c !== a && bb(a);
    }
  }
  function Db(a) {
    S(a, "ordering", "bSort");
    S(a, "orderMulti", "bSortMulti");
    S(a, "orderClasses", "bSortClasses");
    S(a, "orderCellsTop", "bSortCellsTop");
    S(a, "order", "aaSorting");
    S(a, "orderFixed", "aaSortingFixed");
    S(a, "paging", "bPaginate");
    S(a, "pagingType", "sPaginationType");
    S(a, "pageLength", "iDisplayLength");
    S(a, "searching", "bFilter");
    "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : "");
    "boolean" === typeof a.scrollX && (a.scrollX = a.scrollX ? "100%" : "");
    if ((a = a.aoSearchCols))
      for (var b = 0, c = a.length; b < c; b++)
        a[b] && P(u.models.oSearch, a[b]);
  }
  function Eb(a) {
    S(a, "orderable", "bSortable");
    S(a, "orderData", "aDataSort");
    S(a, "orderSequence", "asSorting");
    S(a, "orderDataType", "sortDataType");
    var b = a.aDataSort;
    "number" !== typeof b || Array.isArray(b) || (a.aDataSort = [b]);
  }
  function Fb(a) {
    if (!u.__browser) {
      var b = {};
      u.__browser = b;
      var c = l("<div/>")
          .css({
            position: "fixed",
            top: 0,
            left: -1 * l(y).scrollLeft(),
            height: 1,
            width: 1,
            overflow: "hidden",
          })
          .append(
            l("<div/>")
              .css({
                position: "absolute",
                top: 1,
                left: 1,
                width: 100,
                overflow: "scroll",
              })
              .append(l("<div/>").css({ width: "100%", height: 10 }))
          )
          .appendTo("body"),
        d = c.children(),
        e = d.children();
      b.barWidth = d[0].offsetWidth - d[0].clientWidth;
      b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth;
      b.bScrollbarLeft = 1 !== Math.round(e.offset().left);
      b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;
      c.remove();
    }
    l.extend(a.oBrowser, u.__browser);
    a.oScroll.iBarWidth = u.__browser.barWidth;
  }
  function Gb(a, b, c, d, e, h) {
    var f = !1;
    if (c !== q) {
      var g = c;
      f = !0;
    }
    for (; d !== e; )
      a.hasOwnProperty(d) &&
        ((g = f ? b(g, a[d], d, a) : a[d]), (f = !0), (d += h));
    return g;
  }
  function cb(a, b) {
    var c = u.defaults.column,
      d = a.aoColumns.length;
    c = l.extend({}, u.models.oColumn, c, {
      nTh: b ? b : A.createElement("th"),
      sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "",
      aDataSort: c.aDataSort ? c.aDataSort : [d],
      mData: c.mData ? c.mData : d,
      idx: d,
    });
    a.aoColumns.push(c);
    c = a.aoPreSearchCols;
    c[d] = l.extend({}, u.models.oSearch, c[d]);
    Ia(a, d, l(b).data());
  }
  function Ia(a, b, c) {
    b = a.aoColumns[b];
    var d = a.oClasses,
      e = l(b.nTh);
    if (!b.sWidthOrig) {
      b.sWidthOrig = e.attr("width") || null;
      var h = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
      h && (b.sWidthOrig = h[1]);
    }
    c !== q &&
      null !== c &&
      (Eb(c),
      P(u.defaults.column, c, !0),
      c.mDataProp === q || c.mData || (c.mData = c.mDataProp),
      c.sType && (b._sManualType = c.sType),
      c.className && !c.sClass && (c.sClass = c.className),
      c.sClass && e.addClass(c.sClass),
      (h = b.sClass),
      l.extend(b, c),
      Y(b, c, "sWidth", "sWidthOrig"),
      h !== b.sClass && (b.sClass = h + " " + b.sClass),
      c.iDataSort !== q && (b.aDataSort = [c.iDataSort]),
      Y(b, c, "aDataSort"));
    var f = b.mData,
      g = ma(f),
      k = b.mRender ? ma(b.mRender) : null;
    c = function (m) {
      return "string" === typeof m && -1 !== m.indexOf("@");
    };
    b._bAttrSrc = l.isPlainObject(f) && (c(f.sort) || c(f.type) || c(f.filter));
    b._setter = null;
    b.fnGetData = function (m, n, p) {
      var t = g(m, n, q, p);
      return k && n ? k(t, n, m, p) : t;
    };
    b.fnSetData = function (m, n, p) {
      return ha(f)(m, n, p);
    };
    "number" !== typeof f && (a._rowReadObject = !0);
    a.oFeatures.bSort || ((b.bSortable = !1), e.addClass(d.sSortableNone));
    a = -1 !== l.inArray("asc", b.asSorting);
    c = -1 !== l.inArray("desc", b.asSorting);
    b.bSortable && (a || c)
      ? a && !c
        ? ((b.sSortingClass = d.sSortableAsc),
          (b.sSortingClassJUI = d.sSortJUIAscAllowed))
        : !a && c
        ? ((b.sSortingClass = d.sSortableDesc),
          (b.sSortingClassJUI = d.sSortJUIDescAllowed))
        : ((b.sSortingClass = d.sSortable), (b.sSortingClassJUI = d.sSortJUI))
      : ((b.sSortingClass = d.sSortableNone), (b.sSortingClassJUI = ""));
  }
  function sa(a) {
    if (!1 !== a.oFeatures.bAutoWidth) {
      var b = a.aoColumns;
      db(a);
      for (var c = 0, d = b.length; c < d; c++)
        b[c].nTh.style.width = b[c].sWidth;
    }
    b = a.oScroll;
    ("" === b.sY && "" === b.sX) || Ja(a);
    F(a, null, "column-sizing", [a]);
  }
  function ta(a, b) {
    a = Ka(a, "bVisible");
    return "number" === typeof a[b] ? a[b] : null;
  }
  function ua(a, b) {
    a = Ka(a, "bVisible");
    b = l.inArray(b, a);
    return -1 !== b ? b : null;
  }
  function na(a) {
    var b = 0;
    l.each(a.aoColumns, function (c, d) {
      d.bVisible && "none" !== l(d.nTh).css("display") && b++;
    });
    return b;
  }
  function Ka(a, b) {
    var c = [];
    l.map(a.aoColumns, function (d, e) {
      d[b] && c.push(e);
    });
    return c;
  }
  function eb(a) {
    var b = a.aoColumns,
      c = a.aoData,
      d = u.ext.type.detect,
      e,
      h,
      f;
    var g = 0;
    for (e = b.length; g < e; g++) {
      var k = b[g];
      var m = [];
      if (!k.sType && k._sManualType) k.sType = k._sManualType;
      else if (!k.sType) {
        var n = 0;
        for (h = d.length; n < h; n++) {
          var p = 0;
          for (f = c.length; p < f; p++) {
            m[p] === q && (m[p] = T(a, p, g, "type"));
            var t = d[n](m[p], a);
            if (!t && n !== d.length - 1) break;
            if ("html" === t && !aa(m[p])) break;
          }
          if (t) {
            k.sType = t;
            break;
          }
        }
        k.sType || (k.sType = "string");
      }
    }
  }
  function Hb(a, b, c, d) {
    var e,
      h,
      f,
      g = a.aoColumns;
    if (b)
      for (e = b.length - 1; 0 <= e; e--) {
        var k = b[e];
        var m =
          k.target !== q ? k.target : k.targets !== q ? k.targets : k.aTargets;
        Array.isArray(m) || (m = [m]);
        var n = 0;
        for (h = m.length; n < h; n++)
          if ("number" === typeof m[n] && 0 <= m[n]) {
            for (; g.length <= m[n]; ) cb(a);
            d(m[n], k);
          } else if ("number" === typeof m[n] && 0 > m[n])
            d(g.length + m[n], k);
          else if ("string" === typeof m[n]) {
            var p = 0;
            for (f = g.length; p < f; p++)
              ("_all" == m[n] || l(g[p].nTh).hasClass(m[n])) && d(p, k);
          }
      }
    if (c) for (e = 0, a = c.length; e < a; e++) d(e, c[e]);
  }
  function ia(a, b, c, d) {
    var e = a.aoData.length,
      h = l.extend(!0, {}, u.models.oRow, { src: c ? "dom" : "data", idx: e });
    h._aData = b;
    a.aoData.push(h);
    for (var f = a.aoColumns, g = 0, k = f.length; g < k; g++)
      f[g].sType = null;
    a.aiDisplayMaster.push(e);
    b = a.rowIdFn(b);
    b !== q && (a.aIds[b] = h);
    (!c && a.oFeatures.bDeferRender) || fb(a, e, c, d);
    return e;
  }
  function La(a, b) {
    var c;
    b instanceof l || (b = l(b));
    return b.map(function (d, e) {
      c = gb(a, e);
      return ia(a, c.data, e, c.cells);
    });
  }
  function T(a, b, c, d) {
    "search" === d ? (d = "filter") : "order" === d && (d = "sort");
    var e = a.iDraw,
      h = a.aoColumns[c],
      f = a.aoData[b]._aData,
      g = h.sDefaultContent,
      k = h.fnGetData(f, d, { settings: a, row: b, col: c });
    if (k === q)
      return (
        a.iDrawError != e &&
          null === g &&
          (ea(
            a,
            0,
            "Requested unknown parameter " +
              ("function" == typeof h.mData
                ? "{function}"
                : "'" + h.mData + "'") +
              " for row " +
              b +
              ", column " +
              c,
            4
          ),
          (a.iDrawError = e)),
        g
      );
    if ((k === f || null === k) && null !== g && d !== q) k = g;
    else if ("function" === typeof k) return k.call(f);
    if (null === k && "display" === d) return "";
    "filter" === d &&
      ((a = u.ext.type.search), a[h.sType] && (k = a[h.sType](k)));
    return k;
  }
  function Ib(a, b, c, d) {
    a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, {
      settings: a,
      row: b,
      col: c,
    });
  }
  function hb(a) {
    return l.map(a.match(/(\\.|[^\.])+/g) || [""], function (b) {
      return b.replace(/\\\./g, ".");
    });
  }
  function ib(a) {
    return U(a.aoData, "_aData");
  }
  function Ma(a) {
    a.aoData.length = 0;
    a.aiDisplayMaster.length = 0;
    a.aiDisplay.length = 0;
    a.aIds = {};
  }
  function Na(a, b, c) {
    for (var d = -1, e = 0, h = a.length; e < h; e++)
      a[e] == b ? (d = e) : a[e] > b && a[e]--;
    -1 != d && c === q && a.splice(d, 1);
  }
  function va(a, b, c, d) {
    var e = a.aoData[b],
      h,
      f = function (k, m) {
        for (; k.childNodes.length; ) k.removeChild(k.firstChild);
        k.innerHTML = T(a, b, m, "display");
      };
    if ("dom" !== c && ((c && "auto" !== c) || "dom" !== e.src)) {
      var g = e.anCells;
      if (g)
        if (d !== q) f(g[d], d);
        else for (c = 0, h = g.length; c < h; c++) f(g[c], c);
    } else e._aData = gb(a, e, d, d === q ? q : e._aData).data;
    e._aSortData = null;
    e._aFilterData = null;
    f = a.aoColumns;
    if (d !== q) f[d].sType = null;
    else {
      c = 0;
      for (h = f.length; c < h; c++) f[c].sType = null;
      jb(a, e);
    }
  }
  function gb(a, b, c, d) {
    var e = [],
      h = b.firstChild,
      f,
      g = 0,
      k,
      m = a.aoColumns,
      n = a._rowReadObject;
    d = d !== q ? d : n ? {} : [];
    var p = function (x, w) {
        if ("string" === typeof x) {
          var r = x.indexOf("@");
          -1 !== r && ((r = x.substring(r + 1)), ha(x)(d, w.getAttribute(r)));
        }
      },
      t = function (x) {
        if (c === q || c === g)
          (f = m[g]),
            (k = x.innerHTML.trim()),
            f && f._bAttrSrc
              ? (ha(f.mData._)(d, k),
                p(f.mData.sort, x),
                p(f.mData.type, x),
                p(f.mData.filter, x))
              : n
              ? (f._setter || (f._setter = ha(f.mData)), f._setter(d, k))
              : (d[g] = k);
        g++;
      };
    if (h)
      for (; h; ) {
        var v = h.nodeName.toUpperCase();
        if ("TD" == v || "TH" == v) t(h), e.push(h);
        h = h.nextSibling;
      }
    else for (e = b.anCells, h = 0, v = e.length; h < v; h++) t(e[h]);
    (b = b.firstChild ? b : b.nTr) &&
      (b = b.getAttribute("id")) &&
      ha(a.rowId)(d, b);
    return { data: d, cells: e };
  }
  function fb(a, b, c, d) {
    var e = a.aoData[b],
      h = e._aData,
      f = [],
      g,
      k;
    if (null === e.nTr) {
      var m = c || A.createElement("tr");
      e.nTr = m;
      e.anCells = f;
      m._DT_RowIndex = b;
      jb(a, e);
      var n = 0;
      for (g = a.aoColumns.length; n < g; n++) {
        var p = a.aoColumns[n];
        e = (k = c ? !1 : !0) ? A.createElement(p.sCellType) : d[n];
        e._DT_CellIndex = { row: b, column: n };
        f.push(e);
        if (
          k ||
          !(
            (!p.mRender && p.mData === n) ||
            (l.isPlainObject(p.mData) && p.mData._ === n + ".display")
          )
        )
          e.innerHTML = T(a, b, n, "display");
        p.sClass && (e.className += " " + p.sClass);
        p.bVisible && !c
          ? m.appendChild(e)
          : !p.bVisible && c && e.parentNode.removeChild(e);
        p.fnCreatedCell &&
          p.fnCreatedCell.call(a.oInstance, e, T(a, b, n), h, b, n);
      }
      F(a, "aoRowCreatedCallback", null, [m, h, b, f]);
    }
  }
  function jb(a, b) {
    var c = b.nTr,
      d = b._aData;
    if (c) {
      if ((a = a.rowIdFn(d))) c.id = a;
      d.DT_RowClass &&
        ((a = d.DT_RowClass.split(" ")),
        (b.__rowc = b.__rowc ? Oa(b.__rowc.concat(a)) : a),
        l(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
      d.DT_RowAttr && l(c).attr(d.DT_RowAttr);
      d.DT_RowData && l(c).data(d.DT_RowData);
    }
  }
  function Jb(a) {
    var b,
      c,
      d = a.nTHead,
      e = a.nTFoot,
      h = 0 === l("th, td", d).length,
      f = a.oClasses,
      g = a.aoColumns;
    h && (c = l("<tr/>").appendTo(d));
    var k = 0;
    for (b = g.length; k < b; k++) {
      var m = g[k];
      var n = l(m.nTh).addClass(m.sClass);
      h && n.appendTo(c);
      a.oFeatures.bSort &&
        (n.addClass(m.sSortingClass),
        !1 !== m.bSortable &&
          (n.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId),
          kb(a, m.nTh, k)));
      m.sTitle != n[0].innerHTML && n.html(m.sTitle);
      lb(a, "header")(a, n, m, f);
    }
    h && wa(a.aoHeader, d);
    l(d).children("tr").children("th, td").addClass(f.sHeaderTH);
    l(e).children("tr").children("th, td").addClass(f.sFooterTH);
    if (null !== e)
      for (a = a.aoFooter[0], k = 0, b = a.length; k < b; k++)
        (m = g[k]),
          (m.nTf = a[k].cell),
          m.sClass && l(m.nTf).addClass(m.sClass);
  }
  function xa(a, b, c) {
    var d,
      e,
      h = [],
      f = [],
      g = a.aoColumns.length;
    if (b) {
      c === q && (c = !1);
      var k = 0;
      for (d = b.length; k < d; k++) {
        h[k] = b[k].slice();
        h[k].nTr = b[k].nTr;
        for (e = g - 1; 0 <= e; e--)
          a.aoColumns[e].bVisible || c || h[k].splice(e, 1);
        f.push([]);
      }
      k = 0;
      for (d = h.length; k < d; k++) {
        if ((a = h[k].nTr)) for (; (e = a.firstChild); ) a.removeChild(e);
        e = 0;
        for (b = h[k].length; e < b; e++) {
          var m = (g = 1);
          if (f[k][e] === q) {
            a.appendChild(h[k][e].cell);
            for (
              f[k][e] = 1;
              h[k + g] !== q && h[k][e].cell == h[k + g][e].cell;

            )
              (f[k + g][e] = 1), g++;
            for (; h[k][e + m] !== q && h[k][e].cell == h[k][e + m].cell; ) {
              for (c = 0; c < g; c++) f[k + c][e + m] = 1;
              m++;
            }
            l(h[k][e].cell).attr("rowspan", g).attr("colspan", m);
          }
        }
      }
    }
  }
  function ja(a, b) {
    var c = "ssp" == Q(a),
      d = a.iInitDisplayStart;
    d !== q &&
      -1 !== d &&
      ((a._iDisplayStart = c ? d : d >= a.fnRecordsDisplay() ? 0 : d),
      (a.iInitDisplayStart = -1));
    c = F(a, "aoPreDrawCallback", "preDraw", [a]);
    if (-1 !== l.inArray(!1, c)) V(a, !1);
    else {
      c = [];
      var e = 0;
      d = a.asStripeClasses;
      var h = d.length,
        f = a.oLanguage,
        g = "ssp" == Q(a),
        k = a.aiDisplay,
        m = a._iDisplayStart,
        n = a.fnDisplayEnd();
      a.bDrawing = !0;
      if (a.bDeferLoading) (a.bDeferLoading = !1), a.iDraw++, V(a, !1);
      else if (!g) a.iDraw++;
      else if (!a.bDestroying && !b) {
        Kb(a);
        return;
      }
      if (0 !== k.length)
        for (b = g ? a.aoData.length : n, f = g ? 0 : m; f < b; f++) {
          g = k[f];
          var p = a.aoData[g];
          null === p.nTr && fb(a, g);
          var t = p.nTr;
          if (0 !== h) {
            var v = d[e % h];
            p._sRowStripe != v &&
              (l(t).removeClass(p._sRowStripe).addClass(v),
              (p._sRowStripe = v));
          }
          F(a, "aoRowCallback", null, [t, p._aData, e, f, g]);
          c.push(t);
          e++;
        }
      else
        (e = f.sZeroRecords),
          1 == a.iDraw && "ajax" == Q(a)
            ? (e = f.sLoadingRecords)
            : f.sEmptyTable && 0 === a.fnRecordsTotal() && (e = f.sEmptyTable),
          (c[0] = l("<tr/>", { class: h ? d[0] : "" }).append(
            l("<td />", {
              valign: "top",
              colSpan: na(a),
              class: a.oClasses.sRowEmpty,
            }).html(e)
          )[0]);
      F(a, "aoHeaderCallback", "header", [
        l(a.nTHead).children("tr")[0],
        ib(a),
        m,
        n,
        k,
      ]);
      F(a, "aoFooterCallback", "footer", [
        l(a.nTFoot).children("tr")[0],
        ib(a),
        m,
        n,
        k,
      ]);
      d = l(a.nTBody);
      d.children().detach();
      d.append(l(c));
      F(a, "aoDrawCallback", "draw", [a]);
      a.bSorted = !1;
      a.bFiltered = !1;
      a.bDrawing = !1;
    }
  }
  function ka(a, b) {
    var c = a.oFeatures,
      d = c.bFilter;
    c.bSort && Lb(a);
    d ? ya(a, a.oPreviousSearch) : (a.aiDisplay = a.aiDisplayMaster.slice());
    !0 !== b && (a._iDisplayStart = 0);
    a._drawHold = b;
    ja(a);
    a._drawHold = !1;
  }
  function Mb(a) {
    var b = a.oClasses,
      c = l(a.nTable);
    c = l("<div/>").insertBefore(c);
    var d = a.oFeatures,
      e = l("<div/>", {
        id: a.sTableId + "_wrapper",
        class: b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter),
      });
    a.nHolding = c[0];
    a.nTableWrapper = e[0];
    a.nTableReinsertBefore = a.nTable.nextSibling;
    for (var h = a.sDom.split(""), f, g, k, m, n, p, t = 0; t < h.length; t++) {
      f = null;
      g = h[t];
      if ("<" == g) {
        k = l("<div/>")[0];
        m = h[t + 1];
        if ("'" == m || '"' == m) {
          n = "";
          for (p = 2; h[t + p] != m; ) (n += h[t + p]), p++;
          "H" == n ? (n = b.sJUIHeader) : "F" == n && (n = b.sJUIFooter);
          -1 != n.indexOf(".")
            ? ((m = n.split(".")),
              (k.id = m[0].substr(1, m[0].length - 1)),
              (k.className = m[1]))
            : "#" == n.charAt(0)
            ? (k.id = n.substr(1, n.length - 1))
            : (k.className = n);
          t += p;
        }
        e.append(k);
        e = l(k);
      } else if (">" == g) e = e.parent();
      else if ("l" == g && d.bPaginate && d.bLengthChange) f = Nb(a);
      else if ("f" == g && d.bFilter) f = Ob(a);
      else if ("r" == g && d.bProcessing) f = Pb(a);
      else if ("t" == g) f = Qb(a);
      else if ("i" == g && d.bInfo) f = Rb(a);
      else if ("p" == g && d.bPaginate) f = Sb(a);
      else if (0 !== u.ext.feature.length)
        for (k = u.ext.feature, p = 0, m = k.length; p < m; p++)
          if (g == k[p].cFeature) {
            f = k[p].fnInit(a);
            break;
          }
      f &&
        ((k = a.aanFeatures), k[g] || (k[g] = []), k[g].push(f), e.append(f));
    }
    c.replaceWith(e);
    a.nHolding = null;
  }
  function wa(a, b) {
    b = l(b).children("tr");
    var c, d, e;
    a.splice(0, a.length);
    var h = 0;
    for (e = b.length; h < e; h++) a.push([]);
    h = 0;
    for (e = b.length; h < e; h++) {
      var f = b[h];
      for (c = f.firstChild; c; ) {
        if (
          "TD" == c.nodeName.toUpperCase() ||
          "TH" == c.nodeName.toUpperCase()
        ) {
          var g = 1 * c.getAttribute("colspan");
          var k = 1 * c.getAttribute("rowspan");
          g = g && 0 !== g && 1 !== g ? g : 1;
          k = k && 0 !== k && 1 !== k ? k : 1;
          var m = 0;
          for (d = a[h]; d[m]; ) m++;
          var n = m;
          var p = 1 === g ? !0 : !1;
          for (d = 0; d < g; d++)
            for (m = 0; m < k; m++)
              (a[h + m][n + d] = { cell: c, unique: p }), (a[h + m].nTr = f);
        }
        c = c.nextSibling;
      }
    }
  }
  function Pa(a, b, c) {
    var d = [];
    c || ((c = a.aoHeader), b && ((c = []), wa(c, b)));
    b = 0;
    for (var e = c.length; b < e; b++)
      for (var h = 0, f = c[b].length; h < f; h++)
        !c[b][h].unique || (d[h] && a.bSortCellsTop) || (d[h] = c[b][h].cell);
    return d;
  }
  function Qa(a, b, c) {
    F(a, "aoServerParams", "serverParams", [b]);
    if (b && Array.isArray(b)) {
      var d = {},
        e = /(.*?)\[\]$/;
      l.each(b, function (n, p) {
        (n = p.name.match(e))
          ? ((n = n[0]), d[n] || (d[n] = []), d[n].push(p.value))
          : (d[p.name] = p.value);
      });
      b = d;
    }
    var h = a.ajax,
      f = a.oInstance,
      g = function (n) {
        var p = a.jqXHR ? a.jqXHR.status : null;
        if (null === n || ("number" === typeof p && 204 == p))
          (n = {}), za(a, n, []);
        (p = n.error || n.sError) && ea(a, 0, p);
        a.json = n;
        F(a, null, "xhr", [a, n, a.jqXHR]);
        c(n);
      };
    if (l.isPlainObject(h) && h.data) {
      var k = h.data;
      var m = "function" === typeof k ? k(b, a) : k;
      b = "function" === typeof k && m ? m : l.extend(!0, b, m);
      delete h.data;
    }
    m = {
      data: b,
      success: g,
      dataType: "json",
      cache: !1,
      type: a.sServerMethod,
      error: function (n, p, t) {
        t = F(a, null, "xhr", [a, null, a.jqXHR]);
        -1 === l.inArray(!0, t) &&
          ("parsererror" == p
            ? ea(a, 0, "Invalid JSON response", 1)
            : 4 === n.readyState && ea(a, 0, "Ajax error", 7));
        V(a, !1);
      },
    };
    a.oAjaxData = b;
    F(a, null, "preXhr", [a, b]);
    a.fnServerData
      ? a.fnServerData.call(
          f,
          a.sAjaxSource,
          l.map(b, function (n, p) {
            return { name: p, value: n };
          }),
          g,
          a
        )
      : a.sAjaxSource || "string" === typeof h
      ? (a.jqXHR = l.ajax(l.extend(m, { url: h || a.sAjaxSource })))
      : "function" === typeof h
      ? (a.jqXHR = h.call(f, b, g, a))
      : ((a.jqXHR = l.ajax(l.extend(m, h))), (h.data = k));
  }
  function Kb(a) {
    a.iDraw++;
    V(a, !0);
    Qa(a, Tb(a), function (b) {
      Ub(a, b);
    });
  }
  function Tb(a) {
    var b = a.aoColumns,
      c = b.length,
      d = a.oFeatures,
      e = a.oPreviousSearch,
      h = a.aoPreSearchCols,
      f = [],
      g = oa(a);
    var k = a._iDisplayStart;
    var m = !1 !== d.bPaginate ? a._iDisplayLength : -1;
    var n = function (x, w) {
      f.push({ name: x, value: w });
    };
    n("sEcho", a.iDraw);
    n("iColumns", c);
    n("sColumns", U(b, "sName").join(","));
    n("iDisplayStart", k);
    n("iDisplayLength", m);
    var p = {
      draw: a.iDraw,
      columns: [],
      order: [],
      start: k,
      length: m,
      search: { value: e.sSearch, regex: e.bRegex },
    };
    for (k = 0; k < c; k++) {
      var t = b[k];
      var v = h[k];
      m = "function" == typeof t.mData ? "function" : t.mData;
      p.columns.push({
        data: m,
        name: t.sName,
        searchable: t.bSearchable,
        orderable: t.bSortable,
        search: { value: v.sSearch, regex: v.bRegex },
      });
      n("mDataProp_" + k, m);
      d.bFilter &&
        (n("sSearch_" + k, v.sSearch),
        n("bRegex_" + k, v.bRegex),
        n("bSearchable_" + k, t.bSearchable));
      d.bSort && n("bSortable_" + k, t.bSortable);
    }
    d.bFilter && (n("sSearch", e.sSearch), n("bRegex", e.bRegex));
    d.bSort &&
      (l.each(g, function (x, w) {
        p.order.push({ column: w.col, dir: w.dir });
        n("iSortCol_" + x, w.col);
        n("sSortDir_" + x, w.dir);
      }),
      n("iSortingCols", g.length));
    b = u.ext.legacy.ajax;
    return null === b ? (a.sAjaxSource ? f : p) : b ? f : p;
  }
  function Ub(a, b) {
    var c = function (f, g) {
        return b[f] !== q ? b[f] : b[g];
      },
      d = za(a, b),
      e = c("sEcho", "draw"),
      h = c("iTotalRecords", "recordsTotal");
    c = c("iTotalDisplayRecords", "recordsFiltered");
    if (e !== q) {
      if (1 * e < a.iDraw) return;
      a.iDraw = 1 * e;
    }
    d || (d = []);
    Ma(a);
    a._iRecordsTotal = parseInt(h, 10);
    a._iRecordsDisplay = parseInt(c, 10);
    e = 0;
    for (h = d.length; e < h; e++) ia(a, d[e]);
    a.aiDisplay = a.aiDisplayMaster.slice();
    ja(a, !0);
    a._bInitComplete || Ra(a, b);
    V(a, !1);
  }
  function za(a, b, c) {
    a =
      l.isPlainObject(a.ajax) && a.ajax.dataSrc !== q
        ? a.ajax.dataSrc
        : a.sAjaxDataProp;
    if (!c) return "data" === a ? b.aaData || b[a] : "" !== a ? ma(a)(b) : b;
    ha(a)(b, c);
  }
  function Ob(a) {
    var b = a.oClasses,
      c = a.sTableId,
      d = a.oLanguage,
      e = a.oPreviousSearch,
      h = a.aanFeatures,
      f = '<input type="search" class="' + b.sFilterInput + '"/>',
      g = d.sSearch;
    g = g.match(/_INPUT_/) ? g.replace("_INPUT_", f) : g + f;
    b = l("<div/>", {
      id: h.f ? null : c + "_filter",
      class: b.sFilter,
    }).append(l("<label/>").append(g));
    var k = function (n) {
      var p = this.value ? this.value : "";
      (e.return && "Enter" !== n.key) ||
        p == e.sSearch ||
        (ya(a, {
          sSearch: p,
          bRegex: e.bRegex,
          bSmart: e.bSmart,
          bCaseInsensitive: e.bCaseInsensitive,
          return: e.return,
        }),
        (a._iDisplayStart = 0),
        ja(a));
    };
    h = null !== a.searchDelay ? a.searchDelay : "ssp" === Q(a) ? 400 : 0;
    var m = l("input", b)
      .val(e.sSearch)
      .attr("placeholder", d.sSearchPlaceholder)
      .on("keyup.DT search.DT input.DT paste.DT cut.DT", h ? mb(k, h) : k)
      .on("mouseup", function (n) {
        setTimeout(function () {
          k.call(m[0], n);
        }, 10);
      })
      .on("keypress.DT", function (n) {
        if (13 == n.keyCode) return !1;
      })
      .attr("aria-controls", c);
    l(a.nTable).on("search.dt.DT", function (n, p) {
      if (a === p)
        try {
          m[0] !== A.activeElement && m.val(e.sSearch);
        } catch (t) {}
    });
    return b[0];
  }
  function ya(a, b, c) {
    var d = a.oPreviousSearch,
      e = a.aoPreSearchCols,
      h = function (g) {
        d.sSearch = g.sSearch;
        d.bRegex = g.bRegex;
        d.bSmart = g.bSmart;
        d.bCaseInsensitive = g.bCaseInsensitive;
        d.return = g.return;
      },
      f = function (g) {
        return g.bEscapeRegex !== q ? !g.bEscapeRegex : g.bRegex;
      };
    eb(a);
    if ("ssp" != Q(a)) {
      Vb(a, b.sSearch, c, f(b), b.bSmart, b.bCaseInsensitive, b.return);
      h(b);
      for (b = 0; b < e.length; b++)
        Wb(a, e[b].sSearch, b, f(e[b]), e[b].bSmart, e[b].bCaseInsensitive);
      Xb(a);
    } else h(b);
    a.bFiltered = !0;
    F(a, null, "search", [a]);
  }
  function Xb(a) {
    for (
      var b = u.ext.search, c = a.aiDisplay, d, e, h = 0, f = b.length;
      h < f;
      h++
    ) {
      for (var g = [], k = 0, m = c.length; k < m; k++)
        (e = c[k]),
          (d = a.aoData[e]),
          b[h](a, d._aFilterData, e, d._aData, k) && g.push(e);
      c.length = 0;
      l.merge(c, g);
    }
  }
  function Wb(a, b, c, d, e, h) {
    if ("" !== b) {
      var f = [],
        g = a.aiDisplay;
      d = nb(b, d, e, h);
      for (e = 0; e < g.length; e++)
        (b = a.aoData[g[e]]._aFilterData[c]), d.test(b) && f.push(g[e]);
      a.aiDisplay = f;
    }
  }
  function Vb(a, b, c, d, e, h) {
    e = nb(b, d, e, h);
    var f = a.oPreviousSearch.sSearch,
      g = a.aiDisplayMaster;
    h = [];
    0 !== u.ext.search.length && (c = !0);
    var k = Yb(a);
    if (0 >= b.length) a.aiDisplay = g.slice();
    else {
      if (k || c || d || f.length > b.length || 0 !== b.indexOf(f) || a.bSorted)
        a.aiDisplay = g.slice();
      b = a.aiDisplay;
      for (c = 0; c < b.length; c++)
        e.test(a.aoData[b[c]]._sFilterRow) && h.push(b[c]);
      a.aiDisplay = h;
    }
  }
  function nb(a, b, c, d) {
    a = b ? a : ob(a);
    c &&
      (a =
        "^(?=.*?" +
        l
          .map(a.match(/"[^"]+"|[^ ]+/g) || [""], function (e) {
            if ('"' === e.charAt(0)) {
              var h = e.match(/^"(.*)"$/);
              e = h ? h[1] : e;
            }
            return e.replace('"', "");
          })
          .join(")(?=.*?") +
        ").*$");
    return new RegExp(a, d ? "i" : "");
  }
  function Yb(a) {
    var b = a.aoColumns,
      c,
      d;
    var e = !1;
    var h = 0;
    for (c = a.aoData.length; h < c; h++) {
      var f = a.aoData[h];
      if (!f._aFilterData) {
        var g = [];
        e = 0;
        for (d = b.length; e < d; e++) {
          var k = b[e];
          k.bSearchable
            ? ((k = T(a, h, e, "filter")),
              null === k && (k = ""),
              "string" !== typeof k && k.toString && (k = k.toString()))
            : (k = "");
          k.indexOf &&
            -1 !== k.indexOf("&") &&
            ((Sa.innerHTML = k), (k = Bc ? Sa.textContent : Sa.innerText));
          k.replace && (k = k.replace(/[\r\n\u2028]/g, ""));
          g.push(k);
        }
        f._aFilterData = g;
        f._sFilterRow = g.join("  ");
        e = !0;
      }
    }
    return e;
  }
  function Zb(a) {
    return {
      search: a.sSearch,
      smart: a.bSmart,
      regex: a.bRegex,
      caseInsensitive: a.bCaseInsensitive,
    };
  }
  function $b(a) {
    return {
      sSearch: a.search,
      bSmart: a.smart,
      bRegex: a.regex,
      bCaseInsensitive: a.caseInsensitive,
    };
  }
  function Rb(a) {
    var b = a.sTableId,
      c = a.aanFeatures.i,
      d = l("<div/>", { class: a.oClasses.sInfo, id: c ? null : b + "_info" });
    c ||
      (a.aoDrawCallback.push({ fn: ac, sName: "information" }),
      d.attr("role", "status").attr("aria-live", "polite"),
      l(a.nTable).attr("aria-describedby", b + "_info"));
    return d[0];
  }
  function ac(a) {
    var b = a.aanFeatures.i;
    if (0 !== b.length) {
      var c = a.oLanguage,
        d = a._iDisplayStart + 1,
        e = a.fnDisplayEnd(),
        h = a.fnRecordsTotal(),
        f = a.fnRecordsDisplay(),
        g = f ? c.sInfo : c.sInfoEmpty;
      f !== h && (g += " " + c.sInfoFiltered);
      g += c.sInfoPostFix;
      g = bc(a, g);
      c = c.fnInfoCallback;
      null !== c && (g = c.call(a.oInstance, a, d, e, h, f, g));
      l(b).html(g);
    }
  }
  function bc(a, b) {
    var c = a.fnFormatNumber,
      d = a._iDisplayStart + 1,
      e = a._iDisplayLength,
      h = a.fnRecordsDisplay(),
      f = -1 === e;
    return b
      .replace(/_START_/g, c.call(a, d))
      .replace(/_END_/g, c.call(a, a.fnDisplayEnd()))
      .replace(/_MAX_/g, c.call(a, a.fnRecordsTotal()))
      .replace(/_TOTAL_/g, c.call(a, h))
      .replace(/_PAGE_/g, c.call(a, f ? 1 : Math.ceil(d / e)))
      .replace(/_PAGES_/g, c.call(a, f ? 1 : Math.ceil(h / e)));
  }
  function Aa(a) {
    var b = a.iInitDisplayStart,
      c = a.aoColumns;
    var d = a.oFeatures;
    var e = a.bDeferLoading;
    if (a.bInitialised) {
      Mb(a);
      Jb(a);
      xa(a, a.aoHeader);
      xa(a, a.aoFooter);
      V(a, !0);
      d.bAutoWidth && db(a);
      var h = 0;
      for (d = c.length; h < d; h++) {
        var f = c[h];
        f.sWidth && (f.nTh.style.width = K(f.sWidth));
      }
      F(a, null, "preInit", [a]);
      ka(a);
      c = Q(a);
      if ("ssp" != c || e)
        "ajax" == c
          ? Qa(
              a,
              [],
              function (g) {
                var k = za(a, g);
                for (h = 0; h < k.length; h++) ia(a, k[h]);
                a.iInitDisplayStart = b;
                ka(a);
                V(a, !1);
                Ra(a, g);
              },
              a
            )
          : (V(a, !1), Ra(a));
    } else
      setTimeout(function () {
        Aa(a);
      }, 200);
  }
  function Ra(a, b) {
    a._bInitComplete = !0;
    (b || a.oInit.aaData) && sa(a);
    F(a, null, "plugin-init", [a, b]);
    F(a, "aoInitComplete", "init", [a, b]);
  }
  function pb(a, b) {
    b = parseInt(b, 10);
    a._iDisplayLength = b;
    qb(a);
    F(a, null, "length", [a, b]);
  }
  function Nb(a) {
    var b = a.oClasses,
      c = a.sTableId,
      d = a.aLengthMenu,
      e = Array.isArray(d[0]),
      h = e ? d[0] : d;
    d = e ? d[1] : d;
    e = l("<select/>", {
      name: c + "_length",
      "aria-controls": c,
      class: b.sLengthSelect,
    });
    for (var f = 0, g = h.length; f < g; f++)
      e[0][f] = new Option(
        "number" === typeof d[f] ? a.fnFormatNumber(d[f]) : d[f],
        h[f]
      );
    var k = l("<div><label/></div>").addClass(b.sLength);
    a.aanFeatures.l || (k[0].id = c + "_length");
    k.children().append(
      a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML)
    );
    l("select", k)
      .val(a._iDisplayLength)
      .on("change.DT", function (m) {
        pb(a, l(this).val());
        ja(a);
      });
    l(a.nTable).on("length.dt.DT", function (m, n, p) {
      a === n && l("select", k).val(p);
    });
    return k[0];
  }
  function Sb(a) {
    var b = a.sPaginationType,
      c = u.ext.pager[b],
      d = "function" === typeof c,
      e = function (f) {
        ja(f);
      };
    b = l("<div/>").addClass(a.oClasses.sPaging + b)[0];
    var h = a.aanFeatures;
    d || c.fnInit(a, b, e);
    h.p ||
      ((b.id = a.sTableId + "_paginate"),
      a.aoDrawCallback.push({
        fn: function (f) {
          if (d) {
            var g = f._iDisplayStart,
              k = f._iDisplayLength,
              m = f.fnRecordsDisplay(),
              n = -1 === k;
            g = n ? 0 : Math.ceil(g / k);
            k = n ? 1 : Math.ceil(m / k);
            m = c(g, k);
            var p;
            n = 0;
            for (p = h.p.length; n < p; n++)
              lb(f, "pageButton")(f, h.p[n], n, m, g, k);
          } else c.fnUpdate(f, e);
        },
        sName: "pagination",
      }));
    return b;
  }
  function Ta(a, b, c) {
    var d = a._iDisplayStart,
      e = a._iDisplayLength,
      h = a.fnRecordsDisplay();
    0 === h || -1 === e
      ? (d = 0)
      : "number" === typeof b
      ? ((d = b * e), d > h && (d = 0))
      : "first" == b
      ? (d = 0)
      : "previous" == b
      ? ((d = 0 <= e ? d - e : 0), 0 > d && (d = 0))
      : "next" == b
      ? d + e < h && (d += e)
      : "last" == b
      ? (d = Math.floor((h - 1) / e) * e)
      : ea(a, 0, "Unknown paging action: " + b, 5);
    b = a._iDisplayStart !== d;
    a._iDisplayStart = d;
    b && (F(a, null, "page", [a]), c && ja(a));
    return b;
  }
  function Pb(a) {
    return l("<div/>", {
      id: a.aanFeatures.r ? null : a.sTableId + "_processing",
      class: a.oClasses.sProcessing,
    })
      .html(a.oLanguage.sProcessing)
      .append("<div><div></div><div></div><div></div><div></div></div>")
      .insertBefore(a.nTable)[0];
  }
  function V(a, b) {
    a.oFeatures.bProcessing &&
      l(a.aanFeatures.r).css("display", b ? "block" : "none");
    F(a, null, "processing", [a, b]);
  }
  function Qb(a) {
    var b = l(a.nTable),
      c = a.oScroll;
    if ("" === c.sX && "" === c.sY) return a.nTable;
    var d = c.sX,
      e = c.sY,
      h = a.oClasses,
      f = b.children("caption"),
      g = f.length ? f[0]._captionSide : null,
      k = l(b[0].cloneNode(!1)),
      m = l(b[0].cloneNode(!1)),
      n = b.children("tfoot");
    n.length || (n = null);
    k = l("<div/>", { class: h.sScrollWrapper })
      .append(
        l("<div/>", { class: h.sScrollHead })
          .css({
            overflow: "hidden",
            position: "relative",
            border: 0,
            width: d ? (d ? K(d) : null) : "100%",
          })
          .append(
            l("<div/>", { class: h.sScrollHeadInner })
              .css({ "box-sizing": "content-box", width: c.sXInner || "100%" })
              .append(
                k
                  .removeAttr("id")
                  .css("margin-left", 0)
                  .append("top" === g ? f : null)
                  .append(b.children("thead"))
              )
          )
      )
      .append(
        l("<div/>", { class: h.sScrollBody })
          .css({
            position: "relative",
            overflow: "auto",
            width: d ? K(d) : null,
          })
          .append(b)
      );
    n &&
      k.append(
        l("<div/>", { class: h.sScrollFoot })
          .css({
            overflow: "hidden",
            border: 0,
            width: d ? (d ? K(d) : null) : "100%",
          })
          .append(
            l("<div/>", { class: h.sScrollFootInner }).append(
              m
                .removeAttr("id")
                .css("margin-left", 0)
                .append("bottom" === g ? f : null)
                .append(b.children("tfoot"))
            )
          )
      );
    b = k.children();
    var p = b[0];
    h = b[1];
    var t = n ? b[2] : null;
    if (d)
      l(h).on("scroll.DT", function (v) {
        v = this.scrollLeft;
        p.scrollLeft = v;
        n && (t.scrollLeft = v);
      });
    l(h).css("max-height", e);
    c.bCollapse || l(h).css("height", e);
    a.nScrollHead = p;
    a.nScrollBody = h;
    a.nScrollFoot = t;
    a.aoDrawCallback.push({ fn: Ja, sName: "scrolling" });
    return k[0];
  }
  function Ja(a) {
    var b = a.oScroll,
      c = b.sX,
      d = b.sXInner,
      e = b.sY;
    b = b.iBarWidth;
    var h = l(a.nScrollHead),
      f = h[0].style,
      g = h.children("div"),
      k = g[0].style,
      m = g.children("table");
    g = a.nScrollBody;
    var n = l(g),
      p = g.style,
      t = l(a.nScrollFoot).children("div"),
      v = t.children("table"),
      x = l(a.nTHead),
      w = l(a.nTable),
      r = w[0],
      C = r.style,
      G = a.nTFoot ? l(a.nTFoot) : null,
      ba = a.oBrowser,
      L = ba.bScrollOversize;
    U(a.aoColumns, "nTh");
    var O = [],
      I = [],
      H = [],
      fa = [],
      Z,
      Ba = function (D) {
        D = D.style;
        D.paddingTop = "0";
        D.paddingBottom = "0";
        D.borderTopWidth = "0";
        D.borderBottomWidth = "0";
        D.height = 0;
      };
    var X = g.scrollHeight > g.clientHeight;
    if (a.scrollBarVis !== X && a.scrollBarVis !== q)
      (a.scrollBarVis = X), sa(a);
    else {
      a.scrollBarVis = X;
      w.children("thead, tfoot").remove();
      if (G) {
        X = G.clone().prependTo(w);
        var ca = G.find("tr");
        var Ca = X.find("tr");
        X.find("[id]").removeAttr("id");
      }
      var Ua = x.clone().prependTo(w);
      x = x.find("tr");
      X = Ua.find("tr");
      Ua.find("th, td").removeAttr("tabindex");
      Ua.find("[id]").removeAttr("id");
      c || ((p.width = "100%"), (h[0].style.width = "100%"));
      l.each(Pa(a, Ua), function (D, W) {
        Z = ta(a, D);
        W.style.width = a.aoColumns[Z].sWidth;
      });
      G &&
        da(function (D) {
          D.style.width = "";
        }, Ca);
      h = w.outerWidth();
      "" === c
        ? ((C.width = "100%"),
          L &&
            (w.find("tbody").height() > g.offsetHeight ||
              "scroll" == n.css("overflow-y")) &&
            (C.width = K(w.outerWidth() - b)),
          (h = w.outerWidth()))
        : "" !== d && ((C.width = K(d)), (h = w.outerWidth()));
      da(Ba, X);
      da(function (D) {
        var W = y.getComputedStyle
          ? y.getComputedStyle(D).width
          : K(l(D).width());
        H.push(D.innerHTML);
        O.push(W);
      }, X);
      da(function (D, W) {
        D.style.width = O[W];
      }, x);
      l(X).css("height", 0);
      G &&
        (da(Ba, Ca),
        da(function (D) {
          fa.push(D.innerHTML);
          I.push(K(l(D).css("width")));
        }, Ca),
        da(function (D, W) {
          D.style.width = I[W];
        }, ca),
        l(Ca).height(0));
      da(function (D, W) {
        D.innerHTML = '<div class="dataTables_sizing">' + H[W] + "</div>";
        D.childNodes[0].style.height = "0";
        D.childNodes[0].style.overflow = "hidden";
        D.style.width = O[W];
      }, X);
      G &&
        da(function (D, W) {
          D.innerHTML = '<div class="dataTables_sizing">' + fa[W] + "</div>";
          D.childNodes[0].style.height = "0";
          D.childNodes[0].style.overflow = "hidden";
          D.style.width = I[W];
        }, Ca);
      Math.round(w.outerWidth()) < Math.round(h)
        ? ((ca =
            g.scrollHeight > g.offsetHeight || "scroll" == n.css("overflow-y")
              ? h + b
              : h),
          L &&
            (g.scrollHeight > g.offsetHeight ||
              "scroll" == n.css("overflow-y")) &&
            (C.width = K(ca - b)),
          ("" !== c && "" === d) || ea(a, 1, "Possible column misalignment", 6))
        : (ca = "100%");
      p.width = K(ca);
      f.width = K(ca);
      G && (a.nScrollFoot.style.width = K(ca));
      !e && L && (p.height = K(r.offsetHeight + b));
      c = w.outerWidth();
      m[0].style.width = K(c);
      k.width = K(c);
      d = w.height() > g.clientHeight || "scroll" == n.css("overflow-y");
      e = "padding" + (ba.bScrollbarLeft ? "Left" : "Right");
      k[e] = d ? b + "px" : "0px";
      G &&
        ((v[0].style.width = K(c)),
        (t[0].style.width = K(c)),
        (t[0].style[e] = d ? b + "px" : "0px"));
      w.children("colgroup").insertBefore(w.children("thead"));
      n.trigger("scroll");
      (!a.bSorted && !a.bFiltered) || a._drawHold || (g.scrollTop = 0);
    }
  }
  function da(a, b, c) {
    for (var d = 0, e = 0, h = b.length, f, g; e < h; ) {
      f = b[e].firstChild;
      for (g = c ? c[e].firstChild : null; f; )
        1 === f.nodeType && (c ? a(f, g, d) : a(f, d), d++),
          (f = f.nextSibling),
          (g = c ? g.nextSibling : null);
      e++;
    }
  }
  function db(a) {
    var b = a.nTable,
      c = a.aoColumns,
      d = a.oScroll,
      e = d.sY,
      h = d.sX,
      f = d.sXInner,
      g = c.length,
      k = Ka(a, "bVisible"),
      m = l("th", a.nTHead),
      n = b.getAttribute("width"),
      p = b.parentNode,
      t = !1,
      v,
      x = a.oBrowser;
    d = x.bScrollOversize;
    (v = b.style.width) && -1 !== v.indexOf("%") && (n = v);
    for (v = 0; v < k.length; v++) {
      var w = c[k[v]];
      null !== w.sWidth && ((w.sWidth = cc(w.sWidthOrig, p)), (t = !0));
    }
    if (d || (!t && !h && !e && g == na(a) && g == m.length))
      for (v = 0; v < g; v++)
        (k = ta(a, v)), null !== k && (c[k].sWidth = K(m.eq(v).width()));
    else {
      g = l(b).clone().css("visibility", "hidden").removeAttr("id");
      g.find("tbody tr").remove();
      var r = l("<tr/>").appendTo(g.find("tbody"));
      g.find("thead, tfoot").remove();
      g.append(l(a.nTHead).clone()).append(l(a.nTFoot).clone());
      g.find("tfoot th, tfoot td").css("width", "");
      m = Pa(a, g.find("thead")[0]);
      for (v = 0; v < k.length; v++)
        (w = c[k[v]]),
          (m[v].style.width =
            null !== w.sWidthOrig && "" !== w.sWidthOrig
              ? K(w.sWidthOrig)
              : ""),
          w.sWidthOrig &&
            h &&
            l(m[v]).append(
              l("<div/>").css({
                width: w.sWidthOrig,
                margin: 0,
                padding: 0,
                border: 0,
                height: 1,
              })
            );
      if (a.aoData.length)
        for (v = 0; v < k.length; v++)
          (t = k[v]),
            (w = c[t]),
            l(dc(a, t)).clone(!1).append(w.sContentPadding).appendTo(r);
      l("[name]", g).removeAttr("name");
      w = l("<div/>")
        .css(
          h || e
            ? {
                position: "absolute",
                top: 0,
                left: 0,
                height: 1,
                right: 0,
                overflow: "hidden",
              }
            : {}
        )
        .append(g)
        .appendTo(p);
      h && f
        ? g.width(f)
        : h
        ? (g.css("width", "auto"),
          g.removeAttr("width"),
          g.width() < p.clientWidth && n && g.width(p.clientWidth))
        : e
        ? g.width(p.clientWidth)
        : n && g.width(n);
      for (v = e = 0; v < k.length; v++)
        (p = l(m[v])),
          (f = p.outerWidth() - p.width()),
          (p = x.bBounding
            ? Math.ceil(m[v].getBoundingClientRect().width)
            : p.outerWidth()),
          (e += p),
          (c[k[v]].sWidth = K(p - f));
      b.style.width = K(e);
      w.remove();
    }
    n && (b.style.width = K(n));
    (!n && !h) ||
      a._reszEvt ||
      ((b = function () {
        l(y).on(
          "resize.DT-" + a.sInstance,
          mb(function () {
            sa(a);
          })
        );
      }),
      d ? setTimeout(b, 1e3) : b(),
      (a._reszEvt = !0));
  }
  function cc(a, b) {
    if (!a) return 0;
    a = l("<div/>")
      .css("width", K(a))
      .appendTo(b || A.body);
    b = a[0].offsetWidth;
    a.remove();
    return b;
  }
  function dc(a, b) {
    var c = ec(a, b);
    if (0 > c) return null;
    var d = a.aoData[c];
    return d.nTr ? d.anCells[b] : l("<td/>").html(T(a, c, b, "display"))[0];
  }
  function ec(a, b) {
    for (var c, d = -1, e = -1, h = 0, f = a.aoData.length; h < f; h++)
      (c = T(a, h, b, "display") + ""),
        (c = c.replace(Cc, "")),
        (c = c.replace(/&nbsp;/g, " ")),
        c.length > d && ((d = c.length), (e = h));
    return e;
  }
  function K(a) {
    return null === a
      ? "0px"
      : "number" == typeof a
      ? 0 > a
        ? "0px"
        : a + "px"
      : a.match(/\d$/)
      ? a + "px"
      : a;
  }
  function oa(a) {
    var b = [],
      c = a.aoColumns;
    var d = a.aaSortingFixed;
    var e = l.isPlainObject(d);
    var h = [];
    var f = function (n) {
      n.length && !Array.isArray(n[0]) ? h.push(n) : l.merge(h, n);
    };
    Array.isArray(d) && f(d);
    e && d.pre && f(d.pre);
    f(a.aaSorting);
    e && d.post && f(d.post);
    for (a = 0; a < h.length; a++) {
      var g = h[a][0];
      f = c[g].aDataSort;
      d = 0;
      for (e = f.length; d < e; d++) {
        var k = f[d];
        var m = c[k].sType || "string";
        h[a]._idx === q && (h[a]._idx = l.inArray(h[a][1], c[k].asSorting));
        b.push({
          src: g,
          col: k,
          dir: h[a][1],
          index: h[a]._idx,
          type: m,
          formatter: u.ext.type.order[m + "-pre"],
        });
      }
    }
    return b;
  }
  function Lb(a) {
    var b,
      c = [],
      d = u.ext.type.order,
      e = a.aoData,
      h = 0,
      f = a.aiDisplayMaster;
    eb(a);
    var g = oa(a);
    var k = 0;
    for (b = g.length; k < b; k++) {
      var m = g[k];
      m.formatter && h++;
      fc(a, m.col);
    }
    if ("ssp" != Q(a) && 0 !== g.length) {
      k = 0;
      for (b = f.length; k < b; k++) c[f[k]] = k;
      h === g.length
        ? f.sort(function (n, p) {
            var t,
              v = g.length,
              x = e[n]._aSortData,
              w = e[p]._aSortData;
            for (t = 0; t < v; t++) {
              var r = g[t];
              var C = x[r.col];
              var G = w[r.col];
              C = C < G ? -1 : C > G ? 1 : 0;
              if (0 !== C) return "asc" === r.dir ? C : -C;
            }
            C = c[n];
            G = c[p];
            return C < G ? -1 : C > G ? 1 : 0;
          })
        : f.sort(function (n, p) {
            var t,
              v = g.length,
              x = e[n]._aSortData,
              w = e[p]._aSortData;
            for (t = 0; t < v; t++) {
              var r = g[t];
              var C = x[r.col];
              var G = w[r.col];
              r = d[r.type + "-" + r.dir] || d["string-" + r.dir];
              C = r(C, G);
              if (0 !== C) return C;
            }
            C = c[n];
            G = c[p];
            return C < G ? -1 : C > G ? 1 : 0;
          });
    }
    a.bSorted = !0;
  }
  function gc(a) {
    var b = a.aoColumns,
      c = oa(a);
    a = a.oLanguage.oAria;
    for (var d = 0, e = b.length; d < e; d++) {
      var h = b[d];
      var f = h.asSorting;
      var g = h.ariaTitle || h.sTitle.replace(/<.*?>/g, "");
      var k = h.nTh;
      k.removeAttribute("aria-sort");
      h.bSortable &&
        (0 < c.length && c[0].col == d
          ? (k.setAttribute(
              "aria-sort",
              "asc" == c[0].dir ? "ascending" : "descending"
            ),
            (h = f[c[0].index + 1] || f[0]))
          : (h = f[0]),
        (g += "asc" === h ? a.sSortAscending : a.sSortDescending));
      k.setAttribute("aria-label", g);
    }
  }
  function rb(a, b, c, d) {
    var e = a.aaSorting,
      h = a.aoColumns[b].asSorting,
      f = function (g, k) {
        var m = g._idx;
        m === q && (m = l.inArray(g[1], h));
        return m + 1 < h.length ? m + 1 : k ? null : 0;
      };
    "number" === typeof e[0] && (e = a.aaSorting = [e]);
    c && a.oFeatures.bSortMulti
      ? ((c = l.inArray(b, U(e, "0"))),
        -1 !== c
          ? ((b = f(e[c], !0)),
            null === b && 1 === e.length && (b = 0),
            null === b ? e.splice(c, 1) : ((e[c][1] = h[b]), (e[c]._idx = b)))
          : (e.push([b, h[0], 0]), (e[e.length - 1]._idx = 0)))
      : e.length && e[0][0] == b
      ? ((b = f(e[0])), (e.length = 1), (e[0][1] = h[b]), (e[0]._idx = b))
      : ((e.length = 0), e.push([b, h[0]]), (e[0]._idx = 0));
    ka(a);
    "function" == typeof d && d(a);
  }
  function kb(a, b, c, d) {
    var e = a.aoColumns[c];
    sb(b, {}, function (h) {
      !1 !== e.bSortable &&
        (a.oFeatures.bProcessing
          ? (V(a, !0),
            setTimeout(function () {
              rb(a, c, h.shiftKey, d);
              "ssp" !== Q(a) && V(a, !1);
            }, 0))
          : rb(a, c, h.shiftKey, d));
    });
  }
  function Va(a) {
    var b = a.aLastSort,
      c = a.oClasses.sSortColumn,
      d = oa(a),
      e = a.oFeatures,
      h;
    if (e.bSort && e.bSortClasses) {
      e = 0;
      for (h = b.length; e < h; e++) {
        var f = b[e].src;
        l(U(a.aoData, "anCells", f)).removeClass(c + (2 > e ? e + 1 : 3));
      }
      e = 0;
      for (h = d.length; e < h; e++)
        (f = d[e].src),
          l(U(a.aoData, "anCells", f)).addClass(c + (2 > e ? e + 1 : 3));
    }
    a.aLastSort = d;
  }
  function fc(a, b) {
    var c = a.aoColumns[b],
      d = u.ext.order[c.sSortDataType],
      e;
    d && (e = d.call(a.oInstance, a, b, ua(a, b)));
    for (
      var h, f = u.ext.type.order[c.sType + "-pre"], g = 0, k = a.aoData.length;
      g < k;
      g++
    )
      if (
        ((c = a.aoData[g]),
        c._aSortData || (c._aSortData = []),
        !c._aSortData[b] || d)
      )
        (h = d ? e[g] : T(a, g, b, "sort")), (c._aSortData[b] = f ? f(h) : h);
  }
  function Da(a) {
    if (!a._bLoadingState) {
      var b = {
        time: +new Date(),
        start: a._iDisplayStart,
        length: a._iDisplayLength,
        order: l.extend(!0, [], a.aaSorting),
        search: Zb(a.oPreviousSearch),
        columns: l.map(a.aoColumns, function (c, d) {
          return { visible: c.bVisible, search: Zb(a.aoPreSearchCols[d]) };
        }),
      };
      a.oSavedState = b;
      F(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
      a.oFeatures.bStateSave &&
        !a.bDestroying &&
        a.fnStateSaveCallback.call(a.oInstance, a, b);
    }
  }
  function hc(a, b, c) {
    if (a.oFeatures.bStateSave)
      return (
        (b = a.fnStateLoadCallback.call(a.oInstance, a, function (d) {
          tb(a, d, c);
        })),
        b !== q && tb(a, b, c),
        !0
      );
    c();
  }
  function tb(a, b, c) {
    var d,
      e = a.aoColumns;
    a._bLoadingState = !0;
    var h = a._bInitComplete ? new u.Api(a) : null;
    if (b && b.time) {
      var f = F(a, "aoStateLoadParams", "stateLoadParams", [a, b]);
      if (-1 !== l.inArray(!1, f)) a._bLoadingState = !1;
      else if (
        ((f = a.iStateDuration), 0 < f && b.time < +new Date() - 1e3 * f)
      )
        a._bLoadingState = !1;
      else if (b.columns && e.length !== b.columns.length)
        a._bLoadingState = !1;
      else {
        a.oLoadedState = l.extend(!0, {}, b);
        b.length !== q &&
          (h ? h.page.len(b.length) : (a._iDisplayLength = b.length));
        b.start !== q &&
          (null === h
            ? ((a._iDisplayStart = b.start), (a.iInitDisplayStart = b.start))
            : Ta(a, b.start / a._iDisplayLength));
        b.order !== q &&
          ((a.aaSorting = []),
          l.each(b.order, function (k, m) {
            a.aaSorting.push(m[0] >= e.length ? [0, m[1]] : m);
          }));
        b.search !== q && l.extend(a.oPreviousSearch, $b(b.search));
        if (b.columns) {
          f = 0;
          for (d = b.columns.length; f < d; f++) {
            var g = b.columns[f];
            g.visible !== q &&
              (h
                ? h.column(f).visible(g.visible, !1)
                : (e[f].bVisible = g.visible));
            g.search !== q && l.extend(a.aoPreSearchCols[f], $b(g.search));
          }
          h && h.columns.adjust();
        }
        a._bLoadingState = !1;
        F(a, "aoStateLoaded", "stateLoaded", [a, b]);
      }
    } else a._bLoadingState = !1;
    c();
  }
  function Wa(a) {
    var b = u.settings;
    a = l.inArray(a, U(b, "nTable"));
    return -1 !== a ? b[a] : null;
  }
  function ea(a, b, c, d) {
    c =
      "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c;
    d &&
      (c +=
        ". For more information about this error, please see http://datatables.net/tn/" +
        d);
    if (b) y.console && console.log && console.log(c);
    else if (
      ((b = u.ext),
      (b = b.sErrMode || b.errMode),
      a && F(a, null, "error", [a, d, c]),
      "alert" == b)
    )
      alert(c);
    else {
      if ("throw" == b) throw Error(c);
      "function" == typeof b && b(a, d, c);
    }
  }
  function Y(a, b, c, d) {
    Array.isArray(c)
      ? l.each(c, function (e, h) {
          Array.isArray(h) ? Y(a, b, h[0], h[1]) : Y(a, b, h);
        })
      : (d === q && (d = c), b[c] !== q && (a[d] = b[c]));
  }
  function ub(a, b, c) {
    var d;
    for (d in b)
      if (b.hasOwnProperty(d)) {
        var e = b[d];
        l.isPlainObject(e)
          ? (l.isPlainObject(a[d]) || (a[d] = {}), l.extend(!0, a[d], e))
          : c && "data" !== d && "aaData" !== d && Array.isArray(e)
          ? (a[d] = e.slice())
          : (a[d] = e);
      }
    return a;
  }
  function sb(a, b, c) {
    l(a)
      .on("click.DT", b, function (d) {
        l(a).trigger("blur");
        c(d);
      })
      .on("keypress.DT", b, function (d) {
        13 === d.which && (d.preventDefault(), c(d));
      })
      .on("selectstart.DT", function () {
        return !1;
      });
  }
  function R(a, b, c, d) {
    c && a[b].push({ fn: c, sName: d });
  }
  function F(a, b, c, d) {
    var e = [];
    b &&
      (e = l.map(a[b].slice().reverse(), function (h, f) {
        return h.fn.apply(a.oInstance, d);
      }));
    null !== c &&
      ((b = l.Event(c + ".dt")), l(a.nTable).trigger(b, d), e.push(b.result));
    return e;
  }
  function qb(a) {
    var b = a._iDisplayStart,
      c = a.fnDisplayEnd(),
      d = a._iDisplayLength;
    b >= c && (b = c - d);
    b -= b % d;
    if (-1 === d || 0 > b) b = 0;
    a._iDisplayStart = b;
  }
  function lb(a, b) {
    a = a.renderer;
    var c = u.ext.renderer[b];
    return l.isPlainObject(a) && a[b]
      ? c[a[b]] || c._
      : "string" === typeof a
      ? c[a] || c._
      : c._;
  }
  function Q(a) {
    return a.oFeatures.bServerSide
      ? "ssp"
      : a.ajax || a.sAjaxSource
      ? "ajax"
      : "dom";
  }
  function Ea(a, b) {
    var c = ic.numbers_length,
      d = Math.floor(c / 2);
    b <= c
      ? (a = pa(0, b))
      : a <= d
      ? ((a = pa(0, c - 2)), a.push("ellipsis"), a.push(b - 1))
      : (a >= b - 1 - d
          ? (a = pa(b - (c - 2), b))
          : ((a = pa(a - d + 2, a + d - 1)), a.push("ellipsis"), a.push(b - 1)),
        a.splice(0, 0, "ellipsis"),
        a.splice(0, 0, 0));
    a.DT_el = "span";
    return a;
  }
  function bb(a) {
    l.each(
      {
        num: function (b) {
          return Xa(b, a);
        },
        "num-fmt": function (b) {
          return Xa(b, a, vb);
        },
        "html-num": function (b) {
          return Xa(b, a, Ya);
        },
        "html-num-fmt": function (b) {
          return Xa(b, a, Ya, vb);
        },
      },
      function (b, c) {
        M.type.order[b + a + "-pre"] = c;
        b.match(/^html\-/) && (M.type.search[b + a] = M.type.search.html);
      }
    );
  }
  function jc(a, b, c, d, e) {
    return y.moment ? a[b](e) : y.luxon ? a[c](e) : d ? a[d](e) : a;
  }
  function Za(a, b, c) {
    if (y.moment) {
      var d = y.moment.utc(a, b, c, !0);
      if (!d.isValid()) return null;
    } else if (y.luxon) {
      d = b ? y.luxon.DateTime.fromFormat(a, b) : y.luxon.DateTime.fromISO(a);
      if (!d.isValid) return null;
      d.setLocale(c);
    } else
      b
        ? (kc ||
            alert(
              "DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17"
            ),
          (kc = !0))
        : (d = new Date(a));
    return d;
  }
  function wb(a) {
    return function (b, c, d, e) {
      0 === arguments.length
        ? ((d = "en"), (b = c = null))
        : 1 === arguments.length
        ? ((d = "en"), (c = b), (b = null))
        : 2 === arguments.length && ((d = c), (c = b), (b = null));
      var h = "datetime-" + c;
      u.ext.type.order[h] ||
        (u.ext.type.detect.unshift(function (f) {
          return f === h ? h : !1;
        }),
        (u.ext.type.order[h + "-asc"] = function (f, g) {
          f = f.valueOf();
          g = g.valueOf();
          return f === g ? 0 : f < g ? -1 : 1;
        }),
        (u.ext.type.order[h + "-desc"] = function (f, g) {
          f = f.valueOf();
          g = g.valueOf();
          return f === g ? 0 : f > g ? -1 : 1;
        }));
      return function (f, g) {
        if (null === f || f === q)
          "--now" === e
            ? ((f = new Date()),
              (f = new Date(
                Date.UTC(
                  f.getFullYear(),
                  f.getMonth(),
                  f.getDate(),
                  f.getHours(),
                  f.getMinutes(),
                  f.getSeconds()
                )
              )))
            : (f = "");
        if ("type" === g) return h;
        if ("" === f)
          return "sort" !== g ? "" : Za("0000-01-01 00:00:00", null, d);
        if (
          null !== c &&
          b === c &&
          "sort" !== g &&
          "type" !== g &&
          !(f instanceof Date)
        )
          return f;
        var k = Za(f, b, d);
        if (null === k) return f;
        if ("sort" === g) return k;
        f =
          null === c
            ? jc(k, "toDate", "toJSDate", "")[a]()
            : jc(k, "format", "toFormat", "toISOString", c);
        return "display" === g ? $a(f) : f;
      };
    };
  }
  function lc(a) {
    return function () {
      var b = [Wa(this[u.ext.iApiIndex])].concat(
        Array.prototype.slice.call(arguments)
      );
      return u.ext.internal[a].apply(this, b);
    };
  }
  var u = function (a, b) {
      if (this instanceof u) return l(a).DataTable(b);
      b = a;
      this.$ = function (f, g) {
        return this.api(!0).$(f, g);
      };
      this._ = function (f, g) {
        return this.api(!0).rows(f, g).data();
      };
      this.api = function (f) {
        return f ? new B(Wa(this[M.iApiIndex])) : new B(this);
      };
      this.fnAddData = function (f, g) {
        var k = this.api(!0);
        f =
          Array.isArray(f) && (Array.isArray(f[0]) || l.isPlainObject(f[0]))
            ? k.rows.add(f)
            : k.row.add(f);
        (g === q || g) && k.draw();
        return f.flatten().toArray();
      };
      this.fnAdjustColumnSizing = function (f) {
        var g = this.api(!0).columns.adjust(),
          k = g.settings()[0],
          m = k.oScroll;
        f === q || f ? g.draw(!1) : ("" !== m.sX || "" !== m.sY) && Ja(k);
      };
      this.fnClearTable = function (f) {
        var g = this.api(!0).clear();
        (f === q || f) && g.draw();
      };
      this.fnClose = function (f) {
        this.api(!0).row(f).child.hide();
      };
      this.fnDeleteRow = function (f, g, k) {
        var m = this.api(!0);
        f = m.rows(f);
        var n = f.settings()[0],
          p = n.aoData[f[0][0]];
        f.remove();
        g && g.call(this, n, p);
        (k === q || k) && m.draw();
        return p;
      };
      this.fnDestroy = function (f) {
        this.api(!0).destroy(f);
      };
      this.fnDraw = function (f) {
        this.api(!0).draw(f);
      };
      this.fnFilter = function (f, g, k, m, n, p) {
        n = this.api(!0);
        null === g || g === q
          ? n.search(f, k, m, p)
          : n.column(g).search(f, k, m, p);
        n.draw();
      };
      this.fnGetData = function (f, g) {
        var k = this.api(!0);
        if (f !== q) {
          var m = f.nodeName ? f.nodeName.toLowerCase() : "";
          return g !== q || "td" == m || "th" == m
            ? k.cell(f, g).data()
            : k.row(f).data() || null;
        }
        return k.data().toArray();
      };
      this.fnGetNodes = function (f) {
        var g = this.api(!0);
        return f !== q ? g.row(f).node() : g.rows().nodes().flatten().toArray();
      };
      this.fnGetPosition = function (f) {
        var g = this.api(!0),
          k = f.nodeName.toUpperCase();
        return "TR" == k
          ? g.row(f).index()
          : "TD" == k || "TH" == k
          ? ((f = g.cell(f).index()), [f.row, f.columnVisible, f.column])
          : null;
      };
      this.fnIsOpen = function (f) {
        return this.api(!0).row(f).child.isShown();
      };
      this.fnOpen = function (f, g, k) {
        return this.api(!0).row(f).child(g, k).show().child()[0];
      };
      this.fnPageChange = function (f, g) {
        f = this.api(!0).page(f);
        (g === q || g) && f.draw(!1);
      };
      this.fnSetColumnVis = function (f, g, k) {
        f = this.api(!0).column(f).visible(g);
        (k === q || k) && f.columns.adjust().draw();
      };
      this.fnSettings = function () {
        return Wa(this[M.iApiIndex]);
      };
      this.fnSort = function (f) {
        this.api(!0).order(f).draw();
      };
      this.fnSortListener = function (f, g, k) {
        this.api(!0).order.listener(f, g, k);
      };
      this.fnUpdate = function (f, g, k, m, n) {
        var p = this.api(!0);
        k === q || null === k ? p.row(g).data(f) : p.cell(g, k).data(f);
        (n === q || n) && p.columns.adjust();
        (m === q || m) && p.draw();
        return 0;
      };
      this.fnVersionCheck = M.fnVersionCheck;
      var c = this,
        d = b === q,
        e = this.length;
      d && (b = {});
      this.oApi = this.internal = M.internal;
      for (var h in u.ext.internal) h && (this[h] = lc(h));
      this.each(function () {
        var f = {},
          g = 1 < e ? ub(f, b, !0) : b,
          k = 0,
          m;
        f = this.getAttribute("id");
        var n = !1,
          p = u.defaults,
          t = l(this);
        if ("table" != this.nodeName.toLowerCase())
          ea(
            null,
            0,
            "Non-table node initialisation (" + this.nodeName + ")",
            2
          );
        else {
          Db(p);
          Eb(p.column);
          P(p, p, !0);
          P(p.column, p.column, !0);
          P(p, l.extend(g, t.data()), !0);
          var v = u.settings;
          k = 0;
          for (m = v.length; k < m; k++) {
            var x = v[k];
            if (
              x.nTable == this ||
              (x.nTHead && x.nTHead.parentNode == this) ||
              (x.nTFoot && x.nTFoot.parentNode == this)
            ) {
              var w = g.bRetrieve !== q ? g.bRetrieve : p.bRetrieve;
              if (d || w) return x.oInstance;
              if (g.bDestroy !== q ? g.bDestroy : p.bDestroy) {
                x.oInstance.fnDestroy();
                break;
              } else {
                ea(x, 0, "Cannot reinitialise DataTable", 3);
                return;
              }
            }
            if (x.sTableId == this.id) {
              v.splice(k, 1);
              break;
            }
          }
          if (null === f || "" === f)
            this.id = f = "DataTables_Table_" + u.ext._unique++;
          var r = l.extend(!0, {}, u.models.oSettings, {
            sDestroyWidth: t[0].style.width,
            sInstance: f,
            sTableId: f,
          });
          r.nTable = this;
          r.oApi = c.internal;
          r.oInit = g;
          v.push(r);
          r.oInstance = 1 === c.length ? c : t.dataTable();
          Db(g);
          la(g.oLanguage);
          g.aLengthMenu &&
            !g.iDisplayLength &&
            (g.iDisplayLength = Array.isArray(g.aLengthMenu[0])
              ? g.aLengthMenu[0][0]
              : g.aLengthMenu[0]);
          g = ub(l.extend(!0, {}, p), g);
          Y(
            r.oFeatures,
            g,
            "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(
              " "
            )
          );
          Y(r, g, [
            "asStripeClasses",
            "ajax",
            "fnServerData",
            "fnFormatNumber",
            "sServerMethod",
            "aaSorting",
            "aaSortingFixed",
            "aLengthMenu",
            "sPaginationType",
            "sAjaxSource",
            "sAjaxDataProp",
            "iStateDuration",
            "sDom",
            "bSortCellsTop",
            "iTabIndex",
            "fnStateLoadCallback",
            "fnStateSaveCallback",
            "renderer",
            "searchDelay",
            "rowId",
            ["iCookieDuration", "iStateDuration"],
            ["oSearch", "oPreviousSearch"],
            ["aoSearchCols", "aoPreSearchCols"],
            ["iDisplayLength", "_iDisplayLength"],
          ]);
          Y(r.oScroll, g, [
            ["sScrollX", "sX"],
            ["sScrollXInner", "sXInner"],
            ["sScrollY", "sY"],
            ["bScrollCollapse", "bCollapse"],
          ]);
          Y(r.oLanguage, g, "fnInfoCallback");
          R(r, "aoDrawCallback", g.fnDrawCallback, "user");
          R(r, "aoServerParams", g.fnServerParams, "user");
          R(r, "aoStateSaveParams", g.fnStateSaveParams, "user");
          R(r, "aoStateLoadParams", g.fnStateLoadParams, "user");
          R(r, "aoStateLoaded", g.fnStateLoaded, "user");
          R(r, "aoRowCallback", g.fnRowCallback, "user");
          R(r, "aoRowCreatedCallback", g.fnCreatedRow, "user");
          R(r, "aoHeaderCallback", g.fnHeaderCallback, "user");
          R(r, "aoFooterCallback", g.fnFooterCallback, "user");
          R(r, "aoInitComplete", g.fnInitComplete, "user");
          R(r, "aoPreDrawCallback", g.fnPreDrawCallback, "user");
          r.rowIdFn = ma(g.rowId);
          Fb(r);
          var C = r.oClasses;
          l.extend(C, u.ext.classes, g.oClasses);
          t.addClass(C.sTable);
          r.iInitDisplayStart === q &&
            ((r.iInitDisplayStart = g.iDisplayStart),
            (r._iDisplayStart = g.iDisplayStart));
          null !== g.iDeferLoading &&
            ((r.bDeferLoading = !0),
            (f = Array.isArray(g.iDeferLoading)),
            (r._iRecordsDisplay = f ? g.iDeferLoading[0] : g.iDeferLoading),
            (r._iRecordsTotal = f ? g.iDeferLoading[1] : g.iDeferLoading));
          var G = r.oLanguage;
          l.extend(!0, G, g.oLanguage);
          G.sUrl
            ? (l.ajax({
                dataType: "json",
                url: G.sUrl,
                success: function (I) {
                  P(p.oLanguage, I);
                  la(I);
                  l.extend(!0, G, I, r.oInit.oLanguage);
                  F(r, null, "i18n", [r]);
                  Aa(r);
                },
                error: function () {
                  Aa(r);
                },
              }),
              (n = !0))
            : F(r, null, "i18n", [r]);
          null === g.asStripeClasses &&
            (r.asStripeClasses = [C.sStripeOdd, C.sStripeEven]);
          f = r.asStripeClasses;
          var ba = t.children("tbody").find("tr").eq(0);
          -1 !==
            l.inArray(
              !0,
              l.map(f, function (I, H) {
                return ba.hasClass(I);
              })
            ) &&
            (l("tbody tr", this).removeClass(f.join(" ")),
            (r.asDestroyStripes = f.slice()));
          f = [];
          v = this.getElementsByTagName("thead");
          0 !== v.length && (wa(r.aoHeader, v[0]), (f = Pa(r)));
          if (null === g.aoColumns)
            for (v = [], k = 0, m = f.length; k < m; k++) v.push(null);
          else v = g.aoColumns;
          k = 0;
          for (m = v.length; k < m; k++) cb(r, f ? f[k] : null);
          Hb(r, g.aoColumnDefs, v, function (I, H) {
            Ia(r, I, H);
          });
          if (ba.length) {
            var L = function (I, H) {
              return null !== I.getAttribute("data-" + H) ? H : null;
            };
            l(ba[0])
              .children("th, td")
              .each(function (I, H) {
                var fa = r.aoColumns[I];
                if (fa.mData === I) {
                  var Z = L(H, "sort") || L(H, "order");
                  H = L(H, "filter") || L(H, "search");
                  if (null !== Z || null !== H)
                    (fa.mData = {
                      _: I + ".display",
                      sort: null !== Z ? I + ".@data-" + Z : q,
                      type: null !== Z ? I + ".@data-" + Z : q,
                      filter: null !== H ? I + ".@data-" + H : q,
                    }),
                      Ia(r, I);
                }
              });
          }
          var O = r.oFeatures;
          f = function () {
            if (g.aaSorting === q) {
              var I = r.aaSorting;
              k = 0;
              for (m = I.length; k < m; k++)
                I[k][1] = r.aoColumns[k].asSorting[0];
            }
            Va(r);
            O.bSort &&
              R(r, "aoDrawCallback", function () {
                if (r.bSorted) {
                  var Z = oa(r),
                    Ba = {};
                  l.each(Z, function (X, ca) {
                    Ba[ca.src] = ca.dir;
                  });
                  F(r, null, "order", [r, Z, Ba]);
                  gc(r);
                }
              });
            R(
              r,
              "aoDrawCallback",
              function () {
                (r.bSorted || "ssp" === Q(r) || O.bDeferRender) && Va(r);
              },
              "sc"
            );
            I = t.children("caption").each(function () {
              this._captionSide = l(this).css("caption-side");
            });
            var H = t.children("thead");
            0 === H.length && (H = l("<thead/>").appendTo(t));
            r.nTHead = H[0];
            var fa = t.children("tbody");
            0 === fa.length && (fa = l("<tbody/>").insertAfter(H));
            r.nTBody = fa[0];
            H = t.children("tfoot");
            0 === H.length &&
              0 < I.length &&
              ("" !== r.oScroll.sX || "" !== r.oScroll.sY) &&
              (H = l("<tfoot/>").appendTo(t));
            0 === H.length || 0 === H.children().length
              ? t.addClass(C.sNoFooter)
              : 0 < H.length && ((r.nTFoot = H[0]), wa(r.aoFooter, r.nTFoot));
            if (g.aaData)
              for (k = 0; k < g.aaData.length; k++) ia(r, g.aaData[k]);
            else
              (r.bDeferLoading || "dom" == Q(r)) &&
                La(r, l(r.nTBody).children("tr"));
            r.aiDisplay = r.aiDisplayMaster.slice();
            r.bInitialised = !0;
            !1 === n && Aa(r);
          };
          R(r, "aoDrawCallback", Da, "state_save");
          g.bStateSave ? ((O.bStateSave = !0), hc(r, g, f)) : f();
        }
      });
      c = null;
      return this;
    },
    M,
    z,
    J,
    xb = {},
    mc = /[\r\n\u2028]/g,
    Ya = /<.*?>/g,
    Dc =
      /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
    Ec = /(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\|\$|\^|\-)/g,
    vb = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,
    aa = function (a) {
      return a && !0 !== a && "-" !== a ? !1 : !0;
    },
    nc = function (a) {
      var b = parseInt(a, 10);
      return !isNaN(b) && isFinite(a) ? b : null;
    },
    oc = function (a, b) {
      xb[b] || (xb[b] = new RegExp(ob(b), "g"));
      return "string" === typeof a && "." !== b
        ? a.replace(/\./g, "").replace(xb[b], ".")
        : a;
    },
    yb = function (a, b, c) {
      var d = "string" === typeof a;
      if (aa(a)) return !0;
      b && d && (a = oc(a, b));
      c && d && (a = a.replace(vb, ""));
      return !isNaN(parseFloat(a)) && isFinite(a);
    },
    pc = function (a, b, c) {
      return aa(a)
        ? !0
        : aa(a) || "string" === typeof a
        ? yb(a.replace(Ya, ""), b, c)
          ? !0
          : null
        : null;
    },
    U = function (a, b, c) {
      var d = [],
        e = 0,
        h = a.length;
      if (c !== q) for (; e < h; e++) a[e] && a[e][b] && d.push(a[e][b][c]);
      else for (; e < h; e++) a[e] && d.push(a[e][b]);
      return d;
    },
    Fa = function (a, b, c, d) {
      var e = [],
        h = 0,
        f = b.length;
      if (d !== q) for (; h < f; h++) a[b[h]][c] && e.push(a[b[h]][c][d]);
      else for (; h < f; h++) e.push(a[b[h]][c]);
      return e;
    },
    pa = function (a, b) {
      var c = [];
      if (b === q) {
        b = 0;
        var d = a;
      } else (d = b), (b = a);
      for (a = b; a < d; a++) c.push(a);
      return c;
    },
    qc = function (a) {
      for (var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]);
      return b;
    },
    Oa = function (a) {
      a: {
        if (!(2 > a.length)) {
          var b = a.slice().sort();
          for (var c = b[0], d = 1, e = b.length; d < e; d++) {
            if (b[d] === c) {
              b = !1;
              break a;
            }
            c = b[d];
          }
        }
        b = !0;
      }
      if (b) return a.slice();
      b = [];
      e = a.length;
      var h,
        f = 0;
      d = 0;
      a: for (; d < e; d++) {
        c = a[d];
        for (h = 0; h < f; h++) if (b[h] === c) continue a;
        b.push(c);
        f++;
      }
      return b;
    },
    rc = function (a, b) {
      if (Array.isArray(b)) for (var c = 0; c < b.length; c++) rc(a, b[c]);
      else a.push(b);
      return a;
    },
    sc = function (a, b) {
      b === q && (b = 0);
      return -1 !== this.indexOf(a, b);
    };
  Array.isArray ||
    (Array.isArray = function (a) {
      return "[object Array]" === Object.prototype.toString.call(a);
    });
  Array.prototype.includes || (Array.prototype.includes = sc);
  String.prototype.trim ||
    (String.prototype.trim = function () {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    });
  String.prototype.includes || (String.prototype.includes = sc);
  u.util = {
    throttle: function (a, b) {
      var c = b !== q ? b : 200,
        d,
        e;
      return function () {
        var h = this,
          f = +new Date(),
          g = arguments;
        d && f < d + c
          ? (clearTimeout(e),
            (e = setTimeout(function () {
              d = q;
              a.apply(h, g);
            }, c)))
          : ((d = f), a.apply(h, g));
      };
    },
    escapeRegex: function (a) {
      return a.replace(Ec, "\\$1");
    },
    set: function (a) {
      if (l.isPlainObject(a)) return u.util.set(a._);
      if (null === a) return function () {};
      if ("function" === typeof a)
        return function (c, d, e) {
          a(c, "set", d, e);
        };
      if (
        "string" !== typeof a ||
        (-1 === a.indexOf(".") &&
          -1 === a.indexOf("[") &&
          -1 === a.indexOf("("))
      )
        return function (c, d) {
          c[a] = d;
        };
      var b = function (c, d, e) {
        e = hb(e);
        var h = e[e.length - 1];
        for (var f, g, k = 0, m = e.length - 1; k < m; k++) {
          if ("__proto__" === e[k] || "constructor" === e[k])
            throw Error("Cannot set prototype values");
          f = e[k].match(Ga);
          g = e[k].match(qa);
          if (f) {
            e[k] = e[k].replace(Ga, "");
            c[e[k]] = [];
            h = e.slice();
            h.splice(0, k + 1);
            f = h.join(".");
            if (Array.isArray(d))
              for (g = 0, m = d.length; g < m; g++)
                (h = {}), b(h, d[g], f), c[e[k]].push(h);
            else c[e[k]] = d;
            return;
          }
          g && ((e[k] = e[k].replace(qa, "")), (c = c[e[k]](d)));
          if (null === c[e[k]] || c[e[k]] === q) c[e[k]] = {};
          c = c[e[k]];
        }
        if (h.match(qa)) c[h.replace(qa, "")](d);
        else c[h.replace(Ga, "")] = d;
      };
      return function (c, d) {
        return b(c, d, a);
      };
    },
    get: function (a) {
      if (l.isPlainObject(a)) {
        var b = {};
        l.each(a, function (d, e) {
          e && (b[d] = u.util.get(e));
        });
        return function (d, e, h, f) {
          var g = b[e] || b._;
          return g !== q ? g(d, e, h, f) : d;
        };
      }
      if (null === a)
        return function (d) {
          return d;
        };
      if ("function" === typeof a)
        return function (d, e, h, f) {
          return a(d, e, h, f);
        };
      if (
        "string" !== typeof a ||
        (-1 === a.indexOf(".") &&
          -1 === a.indexOf("[") &&
          -1 === a.indexOf("("))
      )
        return function (d, e) {
          return d[a];
        };
      var c = function (d, e, h) {
        if ("" !== h) {
          var f = hb(h);
          for (var g = 0, k = f.length; g < k; g++) {
            h = f[g].match(Ga);
            var m = f[g].match(qa);
            if (h) {
              f[g] = f[g].replace(Ga, "");
              "" !== f[g] && (d = d[f[g]]);
              m = [];
              f.splice(0, g + 1);
              f = f.join(".");
              if (Array.isArray(d))
                for (g = 0, k = d.length; g < k; g++) m.push(c(d[g], e, f));
              d = h[0].substring(1, h[0].length - 1);
              d = "" === d ? m : m.join(d);
              break;
            } else if (m) {
              f[g] = f[g].replace(qa, "");
              d = d[f[g]]();
              continue;
            }
            if (null === d || d[f[g]] === q) return q;
            d = d[f[g]];
          }
        }
        return d;
      };
      return function (d, e) {
        return c(d, e, a);
      };
    },
  };
  var S = function (a, b, c) {
      a[b] !== q && (a[c] = a[b]);
    },
    Ga = /\[.*?\]$/,
    qa = /\(\)$/,
    ma = u.util.get,
    ha = u.util.set,
    ob = u.util.escapeRegex,
    Sa = l("<div>")[0],
    Bc = Sa.textContent !== q,
    Cc = /<.*?>/g,
    mb = u.util.throttle,
    tc = [],
    N = Array.prototype,
    Fc = function (a) {
      var b,
        c = u.settings,
        d = l.map(c, function (h, f) {
          return h.nTable;
        });
      if (a) {
        if (a.nTable && a.oApi) return [a];
        if (a.nodeName && "table" === a.nodeName.toLowerCase()) {
          var e = l.inArray(a, d);
          return -1 !== e ? [c[e]] : null;
        }
        if (a && "function" === typeof a.settings)
          return a.settings().toArray();
        "string" === typeof a ? (b = l(a)) : a instanceof l && (b = a);
      } else return [];
      if (b)
        return b
          .map(function (h) {
            e = l.inArray(this, d);
            return -1 !== e ? c[e] : null;
          })
          .toArray();
    };
  var B = function (a, b) {
    if (!(this instanceof B)) return new B(a, b);
    var c = [],
      d = function (f) {
        (f = Fc(f)) && c.push.apply(c, f);
      };
    if (Array.isArray(a)) for (var e = 0, h = a.length; e < h; e++) d(a[e]);
    else d(a);
    this.context = Oa(c);
    b && l.merge(this, b);
    this.selector = { rows: null, cols: null, opts: null };
    B.extend(this, this, tc);
  };
  u.Api = B;
  l.extend(B.prototype, {
    any: function () {
      return 0 !== this.count();
    },
    concat: N.concat,
    context: [],
    count: function () {
      return this.flatten().length;
    },
    each: function (a) {
      for (var b = 0, c = this.length; b < c; b++)
        a.call(this, this[b], b, this);
      return this;
    },
    eq: function (a) {
      var b = this.context;
      return b.length > a ? new B(b[a], this[a]) : null;
    },
    filter: function (a) {
      var b = [];
      if (N.filter) b = N.filter.call(this, a, this);
      else
        for (var c = 0, d = this.length; c < d; c++)
          a.call(this, this[c], c, this) && b.push(this[c]);
      return new B(this.context, b);
    },
    flatten: function () {
      var a = [];
      return new B(this.context, a.concat.apply(a, this.toArray()));
    },
    join: N.join,
    indexOf:
      N.indexOf ||
      function (a, b) {
        b = b || 0;
        for (var c = this.length; b < c; b++) if (this[b] === a) return b;
        return -1;
      },
    iterator: function (a, b, c, d) {
      var e = [],
        h,
        f,
        g = this.context,
        k,
        m = this.selector;
      "string" === typeof a && ((d = c), (c = b), (b = a), (a = !1));
      var n = 0;
      for (h = g.length; n < h; n++) {
        var p = new B(g[n]);
        if ("table" === b) {
          var t = c.call(p, g[n], n);
          t !== q && e.push(t);
        } else if ("columns" === b || "rows" === b)
          (t = c.call(p, g[n], this[n], n)), t !== q && e.push(t);
        else if (
          "column" === b ||
          "column-rows" === b ||
          "row" === b ||
          "cell" === b
        ) {
          var v = this[n];
          "column-rows" === b && (k = ab(g[n], m.opts));
          var x = 0;
          for (f = v.length; x < f; x++)
            (t = v[x]),
              (t =
                "cell" === b
                  ? c.call(p, g[n], t.row, t.column, n, x)
                  : c.call(p, g[n], t, n, x, k)),
              t !== q && e.push(t);
        }
      }
      return e.length || d
        ? ((a = new B(g, a ? e.concat.apply([], e) : e)),
          (b = a.selector),
          (b.rows = m.rows),
          (b.cols = m.cols),
          (b.opts = m.opts),
          a)
        : this;
    },
    lastIndexOf:
      N.lastIndexOf ||
      function (a, b) {
        return this.indexOf.apply(this.toArray.reverse(), arguments);
      },
    length: 0,
    map: function (a) {
      var b = [];
      if (N.map) b = N.map.call(this, a, this);
      else
        for (var c = 0, d = this.length; c < d; c++)
          b.push(a.call(this, this[c], c));
      return new B(this.context, b);
    },
    pluck: function (a) {
      var b = u.util.get(a);
      return this.map(function (c) {
        return b(c);
      });
    },
    pop: N.pop,
    push: N.push,
    reduce:
      N.reduce ||
      function (a, b) {
        return Gb(this, a, b, 0, this.length, 1);
      },
    reduceRight:
      N.reduceRight ||
      function (a, b) {
        return Gb(this, a, b, this.length - 1, -1, -1);
      },
    reverse: N.reverse,
    selector: null,
    shift: N.shift,
    slice: function () {
      return new B(this.context, this);
    },
    sort: N.sort,
    splice: N.splice,
    toArray: function () {
      return N.slice.call(this);
    },
    to$: function () {
      return l(this);
    },
    toJQuery: function () {
      return l(this);
    },
    unique: function () {
      return new B(this.context, Oa(this));
    },
    unshift: N.unshift,
  });
  B.extend = function (a, b, c) {
    if (c.length && b && (b instanceof B || b.__dt_wrapper)) {
      var d,
        e = function (g, k, m) {
          return function () {
            var n = k.apply(g, arguments);
            B.extend(n, n, m.methodExt);
            return n;
          };
        };
      var h = 0;
      for (d = c.length; h < d; h++) {
        var f = c[h];
        b[f.name] =
          "function" === f.type
            ? e(a, f.val, f)
            : "object" === f.type
            ? {}
            : f.val;
        b[f.name].__dt_wrapper = !0;
        B.extend(a, b[f.name], f.propExt);
      }
    }
  };
  B.register = z = function (a, b) {
    if (Array.isArray(a))
      for (var c = 0, d = a.length; c < d; c++) B.register(a[c], b);
    else {
      d = a.split(".");
      var e = tc,
        h;
      a = 0;
      for (c = d.length; a < c; a++) {
        var f = (h = -1 !== d[a].indexOf("()")) ? d[a].replace("()", "") : d[a];
        a: {
          var g = 0;
          for (var k = e.length; g < k; g++)
            if (e[g].name === f) {
              g = e[g];
              break a;
            }
          g = null;
        }
        g ||
          ((g = {
            name: f,
            val: {},
            methodExt: [],
            propExt: [],
            type: "object",
          }),
          e.push(g));
        a === c - 1
          ? ((g.val = b),
            (g.type =
              "function" === typeof b
                ? "function"
                : l.isPlainObject(b)
                ? "object"
                : "other"))
          : (e = h ? g.methodExt : g.propExt);
      }
    }
  };
  B.registerPlural = J = function (a, b, c) {
    B.register(a, c);
    B.register(b, function () {
      var d = c.apply(this, arguments);
      return d === this
        ? this
        : d instanceof B
        ? d.length
          ? Array.isArray(d[0])
            ? new B(d.context, d[0])
            : d[0]
          : q
        : d;
    });
  };
  var uc = function (a, b) {
    if (Array.isArray(a))
      return l.map(a, function (d) {
        return uc(d, b);
      });
    if ("number" === typeof a) return [b[a]];
    var c = l.map(b, function (d, e) {
      return d.nTable;
    });
    return l(c)
      .filter(a)
      .map(function (d) {
        d = l.inArray(this, c);
        return b[d];
      })
      .toArray();
  };
  z("tables()", function (a) {
    return a !== q && null !== a ? new B(uc(a, this.context)) : this;
  });
  z("table()", function (a) {
    a = this.tables(a);
    var b = a.context;
    return b.length ? new B(b[0]) : a;
  });
  J("tables().nodes()", "table().node()", function () {
    return this.iterator(
      "table",
      function (a) {
        return a.nTable;
      },
      1
    );
  });
  J("tables().body()", "table().body()", function () {
    return this.iterator(
      "table",
      function (a) {
        return a.nTBody;
      },
      1
    );
  });
  J("tables().header()", "table().header()", function () {
    return this.iterator(
      "table",
      function (a) {
        return a.nTHead;
      },
      1
    );
  });
  J("tables().footer()", "table().footer()", function () {
    return this.iterator(
      "table",
      function (a) {
        return a.nTFoot;
      },
      1
    );
  });
  J("tables().containers()", "table().container()", function () {
    return this.iterator(
      "table",
      function (a) {
        return a.nTableWrapper;
      },
      1
    );
  });
  z("draw()", function (a) {
    return this.iterator("table", function (b) {
      "page" === a
        ? ja(b)
        : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0),
          ka(b, !1 === a));
    });
  });
  z("page()", function (a) {
    return a === q
      ? this.page.info().page
      : this.iterator("table", function (b) {
          Ta(b, a);
        });
  });
  z("page.info()", function (a) {
    if (0 === this.context.length) return q;
    a = this.context[0];
    var b = a._iDisplayStart,
      c = a.oFeatures.bPaginate ? a._iDisplayLength : -1,
      d = a.fnRecordsDisplay(),
      e = -1 === c;
    return {
      page: e ? 0 : Math.floor(b / c),
      pages: e ? 1 : Math.ceil(d / c),
      start: b,
      end: a.fnDisplayEnd(),
      length: c,
      recordsTotal: a.fnRecordsTotal(),
      recordsDisplay: d,
      serverSide: "ssp" === Q(a),
    };
  });
  z("page.len()", function (a) {
    return a === q
      ? 0 !== this.context.length
        ? this.context[0]._iDisplayLength
        : q
      : this.iterator("table", function (b) {
          pb(b, a);
        });
  });
  var vc = function (a, b, c) {
    if (c) {
      var d = new B(a);
      d.one("draw", function () {
        c(d.ajax.json());
      });
    }
    if ("ssp" == Q(a)) ka(a, b);
    else {
      V(a, !0);
      var e = a.jqXHR;
      e && 4 !== e.readyState && e.abort();
      Qa(a, [], function (h) {
        Ma(a);
        h = za(a, h);
        for (var f = 0, g = h.length; f < g; f++) ia(a, h[f]);
        ka(a, b);
        V(a, !1);
      });
    }
  };
  z("ajax.json()", function () {
    var a = this.context;
    if (0 < a.length) return a[0].json;
  });
  z("ajax.params()", function () {
    var a = this.context;
    if (0 < a.length) return a[0].oAjaxData;
  });
  z("ajax.reload()", function (a, b) {
    return this.iterator("table", function (c) {
      vc(c, !1 === b, a);
    });
  });
  z("ajax.url()", function (a) {
    var b = this.context;
    if (a === q) {
      if (0 === b.length) return q;
      b = b[0];
      return b.ajax
        ? l.isPlainObject(b.ajax)
          ? b.ajax.url
          : b.ajax
        : b.sAjaxSource;
    }
    return this.iterator("table", function (c) {
      l.isPlainObject(c.ajax) ? (c.ajax.url = a) : (c.ajax = a);
    });
  });
  z("ajax.url().load()", function (a, b) {
    return this.iterator("table", function (c) {
      vc(c, !1 === b, a);
    });
  });
  var zb = function (a, b, c, d, e) {
      var h = [],
        f,
        g,
        k;
      var m = typeof b;
      (b && "string" !== m && "function" !== m && b.length !== q) || (b = [b]);
      m = 0;
      for (g = b.length; m < g; m++) {
        var n =
          b[m] && b[m].split && !b[m].match(/[\[\(:]/)
            ? b[m].split(",")
            : [b[m]];
        var p = 0;
        for (k = n.length; p < k; p++)
          (f = c("string" === typeof n[p] ? n[p].trim() : n[p])) &&
            f.length &&
            (h = h.concat(f));
      }
      a = M.selector[a];
      if (a.length) for (m = 0, g = a.length; m < g; m++) h = a[m](d, e, h);
      return Oa(h);
    },
    Ab = function (a) {
      a || (a = {});
      a.filter && a.search === q && (a.search = a.filter);
      return l.extend({ search: "none", order: "current", page: "all" }, a);
    },
    Bb = function (a) {
      for (var b = 0, c = a.length; b < c; b++)
        if (0 < a[b].length)
          return (
            (a[0] = a[b]),
            (a[0].length = 1),
            (a.length = 1),
            (a.context = [a.context[b]]),
            a
          );
      a.length = 0;
      return a;
    },
    ab = function (a, b) {
      var c = [],
        d = a.aiDisplay;
      var e = a.aiDisplayMaster;
      var h = b.search;
      var f = b.order;
      b = b.page;
      if ("ssp" == Q(a)) return "removed" === h ? [] : pa(0, e.length);
      if ("current" == b)
        for (f = a._iDisplayStart, a = a.fnDisplayEnd(); f < a; f++)
          c.push(d[f]);
      else if ("current" == f || "applied" == f)
        if ("none" == h) c = e.slice();
        else if ("applied" == h) c = d.slice();
        else {
          if ("removed" == h) {
            var g = {};
            f = 0;
            for (a = d.length; f < a; f++) g[d[f]] = null;
            c = l.map(e, function (k) {
              return g.hasOwnProperty(k) ? null : k;
            });
          }
        }
      else if ("index" == f || "original" == f)
        for (f = 0, a = a.aoData.length; f < a; f++)
          "none" == h
            ? c.push(f)
            : ((e = l.inArray(f, d)),
              ((-1 === e && "removed" == h) || (0 <= e && "applied" == h)) &&
                c.push(f));
      return c;
    },
    Gc = function (a, b, c) {
      var d;
      return zb(
        "row",
        b,
        function (e) {
          var h = nc(e),
            f = a.aoData;
          if (null !== h && !c) return [h];
          d || (d = ab(a, c));
          if (null !== h && -1 !== l.inArray(h, d)) return [h];
          if (null === e || e === q || "" === e) return d;
          if ("function" === typeof e)
            return l.map(d, function (k) {
              var m = f[k];
              return e(k, m._aData, m.nTr) ? k : null;
            });
          if (e.nodeName) {
            h = e._DT_RowIndex;
            var g = e._DT_CellIndex;
            if (h !== q) return f[h] && f[h].nTr === e ? [h] : [];
            if (g)
              return f[g.row] && f[g.row].nTr === e.parentNode ? [g.row] : [];
            h = l(e).closest("*[data-dt-row]");
            return h.length ? [h.data("dt-row")] : [];
          }
          if (
            "string" === typeof e &&
            "#" === e.charAt(0) &&
            ((h = a.aIds[e.replace(/^#/, "")]), h !== q)
          )
            return [h.idx];
          h = qc(Fa(a.aoData, d, "nTr"));
          return l(h)
            .filter(e)
            .map(function () {
              return this._DT_RowIndex;
            })
            .toArray();
        },
        a,
        c
      );
    };
  z("rows()", function (a, b) {
    a === q ? (a = "") : l.isPlainObject(a) && ((b = a), (a = ""));
    b = Ab(b);
    var c = this.iterator(
      "table",
      function (d) {
        return Gc(d, a, b);
      },
      1
    );
    c.selector.rows = a;
    c.selector.opts = b;
    return c;
  });
  z("rows().nodes()", function () {
    return this.iterator(
      "row",
      function (a, b) {
        return a.aoData[b].nTr || q;
      },
      1
    );
  });
  z("rows().data()", function () {
    return this.iterator(
      !0,
      "rows",
      function (a, b) {
        return Fa(a.aoData, b, "_aData");
      },
      1
    );
  });
  J("rows().cache()", "row().cache()", function (a) {
    return this.iterator(
      "row",
      function (b, c) {
        b = b.aoData[c];
        return "search" === a ? b._aFilterData : b._aSortData;
      },
      1
    );
  });
  J("rows().invalidate()", "row().invalidate()", function (a) {
    return this.iterator("row", function (b, c) {
      va(b, c, a);
    });
  });
  J("rows().indexes()", "row().index()", function () {
    return this.iterator(
      "row",
      function (a, b) {
        return b;
      },
      1
    );
  });
  J("rows().ids()", "row().id()", function (a) {
    for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++)
      for (var h = 0, f = this[d].length; h < f; h++) {
        var g = c[d].rowIdFn(c[d].aoData[this[d][h]]._aData);
        b.push((!0 === a ? "#" : "") + g);
      }
    return new B(c, b);
  });
  J("rows().remove()", "row().remove()", function () {
    var a = this;
    this.iterator("row", function (b, c, d) {
      var e = b.aoData,
        h = e[c],
        f,
        g;
      e.splice(c, 1);
      var k = 0;
      for (f = e.length; k < f; k++) {
        var m = e[k];
        var n = m.anCells;
        null !== m.nTr && (m.nTr._DT_RowIndex = k);
        if (null !== n)
          for (m = 0, g = n.length; m < g; m++) n[m]._DT_CellIndex.row = k;
      }
      Na(b.aiDisplayMaster, c);
      Na(b.aiDisplay, c);
      Na(a[d], c, !1);
      0 < b._iRecordsDisplay && b._iRecordsDisplay--;
      qb(b);
      c = b.rowIdFn(h._aData);
      c !== q && delete b.aIds[c];
    });
    this.iterator("table", function (b) {
      for (var c = 0, d = b.aoData.length; c < d; c++) b.aoData[c].idx = c;
    });
    return this;
  });
  z("rows.add()", function (a) {
    var b = this.iterator(
        "table",
        function (d) {
          var e,
            h = [];
          var f = 0;
          for (e = a.length; f < e; f++) {
            var g = a[f];
            g.nodeName && "TR" === g.nodeName.toUpperCase()
              ? h.push(La(d, g)[0])
              : h.push(ia(d, g));
          }
          return h;
        },
        1
      ),
      c = this.rows(-1);
    c.pop();
    l.merge(c, b);
    return c;
  });
  z("row()", function (a, b) {
    return Bb(this.rows(a, b));
  });
  z("row().data()", function (a) {
    var b = this.context;
    if (a === q)
      return b.length && this.length ? b[0].aoData[this[0]]._aData : q;
    var c = b[0].aoData[this[0]];
    c._aData = a;
    Array.isArray(a) && c.nTr && c.nTr.id && ha(b[0].rowId)(a, c.nTr.id);
    va(b[0], this[0], "data");
    return this;
  });
  z("row().node()", function () {
    var a = this.context;
    return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null;
  });
  z("row.add()", function (a) {
    a instanceof l && a.length && (a = a[0]);
    var b = this.iterator("table", function (c) {
      return a.nodeName && "TR" === a.nodeName.toUpperCase()
        ? La(c, a)[0]
        : ia(c, a);
    });
    return this.row(b[0]);
  });
  l(A).on("plugin-init.dt", function (a, b) {
    a = new B(b);
    a.on("stateSaveParams", function (d, e, h) {
      d = e.rowIdFn;
      e = e.aoData;
      for (var f = [], g = 0; g < e.length; g++)
        e[g]._detailsShow && f.push("#" + d(e[g]._aData));
      h.childRows = f;
    });
    var c = a.state.loaded();
    c &&
      c.childRows &&
      a
        .rows(
          l.map(c.childRows, function (d) {
            return d.replace(/:/g, "\\:");
          })
        )
        .every(function () {
          F(b, null, "requestChild", [this]);
        });
  });
  var Hc = function (a, b, c, d) {
      var e = [],
        h = function (f, g) {
          if (Array.isArray(f) || f instanceof l)
            for (var k = 0, m = f.length; k < m; k++) h(f[k], g);
          else
            f.nodeName && "tr" === f.nodeName.toLowerCase()
              ? e.push(f)
              : ((k = l("<tr><td></td></tr>").addClass(g)),
                (l("td", k).addClass(g).html(f)[0].colSpan = na(a)),
                e.push(k[0]));
        };
      h(c, d);
      b._details && b._details.detach();
      b._details = l(e);
      b._detailsShow && b._details.insertAfter(b.nTr);
    },
    wc = u.util.throttle(function (a) {
      Da(a[0]);
    }, 500),
    Cb = function (a, b) {
      var c = a.context;
      c.length &&
        (a = c[0].aoData[b !== q ? b : a[0]]) &&
        a._details &&
        (a._details.remove(),
        (a._detailsShow = q),
        (a._details = q),
        l(a.nTr).removeClass("dt-hasChild"),
        wc(c));
    },
    xc = function (a, b) {
      var c = a.context;
      if (c.length && a.length) {
        var d = c[0].aoData[a[0]];
        d._details &&
          ((d._detailsShow = b)
            ? (d._details.insertAfter(d.nTr), l(d.nTr).addClass("dt-hasChild"))
            : (d._details.detach(), l(d.nTr).removeClass("dt-hasChild")),
          F(c[0], null, "childRow", [b, a.row(a[0])]),
          Ic(c[0]),
          wc(c));
      }
    },
    Ic = function (a) {
      var b = new B(a),
        c = a.aoData;
      b.off(
        "draw.dt.DT_details column-sizing.dt.DT_details destroy.dt.DT_details"
      );
      0 < U(c, "_details").length &&
        (b.on("draw.dt.DT_details", function (d, e) {
          a === e &&
            b
              .rows({ page: "current" })
              .eq(0)
              .each(function (h) {
                h = c[h];
                h._detailsShow && h._details.insertAfter(h.nTr);
              });
        }),
        b.on("column-sizing.dt.DT_details", function (d, e, h, f) {
          if (a === e)
            for (e = na(e), h = 0, f = c.length; h < f; h++)
              (d = c[h]),
                d._details &&
                  d._details.children("td[colspan]").attr("colspan", e);
        }),
        b.on("destroy.dt.DT_details", function (d, e) {
          if (a === e)
            for (d = 0, e = c.length; d < e; d++) c[d]._details && Cb(b, d);
        }));
    };
  z("row().child()", function (a, b) {
    var c = this.context;
    if (a === q)
      return c.length && this.length ? c[0].aoData[this[0]]._details : q;
    !0 === a
      ? this.child.show()
      : !1 === a
      ? Cb(this)
      : c.length && this.length && Hc(c[0], c[0].aoData[this[0]], a, b);
    return this;
  });
  z(["row().child.show()", "row().child().show()"], function (a) {
    xc(this, !0);
    return this;
  });
  z(["row().child.hide()", "row().child().hide()"], function () {
    xc(this, !1);
    return this;
  });
  z(["row().child.remove()", "row().child().remove()"], function () {
    Cb(this);
    return this;
  });
  z("row().child.isShown()", function () {
    var a = this.context;
    return a.length && this.length
      ? a[0].aoData[this[0]]._detailsShow || !1
      : !1;
  });
  var Jc = /^([^:]+):(name|visIdx|visible)$/,
    yc = function (a, b, c, d, e) {
      c = [];
      d = 0;
      for (var h = e.length; d < h; d++) c.push(T(a, e[d], b));
      return c;
    },
    Kc = function (a, b, c) {
      var d = a.aoColumns,
        e = U(d, "sName"),
        h = U(d, "nTh");
      return zb(
        "column",
        b,
        function (f) {
          var g = nc(f);
          if ("" === f) return pa(d.length);
          if (null !== g) return [0 <= g ? g : d.length + g];
          if ("function" === typeof f) {
            var k = ab(a, c);
            return l.map(d, function (p, t) {
              return f(t, yc(a, t, 0, 0, k), h[t]) ? t : null;
            });
          }
          var m = "string" === typeof f ? f.match(Jc) : "";
          if (m)
            switch (m[2]) {
              case "visIdx":
              case "visible":
                g = parseInt(m[1], 10);
                if (0 > g) {
                  var n = l.map(d, function (p, t) {
                    return p.bVisible ? t : null;
                  });
                  return [n[n.length + g]];
                }
                return [ta(a, g)];
              case "name":
                return l.map(e, function (p, t) {
                  return p === m[1] ? t : null;
                });
              default:
                return [];
            }
          if (f.nodeName && f._DT_CellIndex) return [f._DT_CellIndex.column];
          g = l(h)
            .filter(f)
            .map(function () {
              return l.inArray(this, h);
            })
            .toArray();
          if (g.length || !f.nodeName) return g;
          g = l(f).closest("*[data-dt-column]");
          return g.length ? [g.data("dt-column")] : [];
        },
        a,
        c
      );
    };
  z("columns()", function (a, b) {
    a === q ? (a = "") : l.isPlainObject(a) && ((b = a), (a = ""));
    b = Ab(b);
    var c = this.iterator(
      "table",
      function (d) {
        return Kc(d, a, b);
      },
      1
    );
    c.selector.cols = a;
    c.selector.opts = b;
    return c;
  });
  J("columns().header()", "column().header()", function (a, b) {
    return this.iterator(
      "column",
      function (c, d) {
        return c.aoColumns[d].nTh;
      },
      1
    );
  });
  J("columns().footer()", "column().footer()", function (a, b) {
    return this.iterator(
      "column",
      function (c, d) {
        return c.aoColumns[d].nTf;
      },
      1
    );
  });
  J("columns().data()", "column().data()", function () {
    return this.iterator("column-rows", yc, 1);
  });
  J("columns().dataSrc()", "column().dataSrc()", function () {
    return this.iterator(
      "column",
      function (a, b) {
        return a.aoColumns[b].mData;
      },
      1
    );
  });
  J("columns().cache()", "column().cache()", function (a) {
    return this.iterator(
      "column-rows",
      function (b, c, d, e, h) {
        return Fa(
          b.aoData,
          h,
          "search" === a ? "_aFilterData" : "_aSortData",
          c
        );
      },
      1
    );
  });
  J("columns().nodes()", "column().nodes()", function () {
    return this.iterator(
      "column-rows",
      function (a, b, c, d, e) {
        return Fa(a.aoData, e, "anCells", b);
      },
      1
    );
  });
  J("columns().visible()", "column().visible()", function (a, b) {
    var c = this,
      d = this.iterator("column", function (e, h) {
        if (a === q) return e.aoColumns[h].bVisible;
        var f = e.aoColumns,
          g = f[h],
          k = e.aoData,
          m;
        if (a !== q && g.bVisible !== a) {
          if (a) {
            var n = l.inArray(!0, U(f, "bVisible"), h + 1);
            f = 0;
            for (m = k.length; f < m; f++) {
              var p = k[f].nTr;
              e = k[f].anCells;
              p && p.insertBefore(e[h], e[n] || null);
            }
          } else l(U(e.aoData, "anCells", h)).detach();
          g.bVisible = a;
        }
      });
    a !== q &&
      this.iterator("table", function (e) {
        xa(e, e.aoHeader);
        xa(e, e.aoFooter);
        e.aiDisplay.length ||
          l(e.nTBody).find("td[colspan]").attr("colspan", na(e));
        Da(e);
        c.iterator("column", function (h, f) {
          F(h, null, "column-visibility", [h, f, a, b]);
        });
        (b === q || b) && c.columns.adjust();
      });
    return d;
  });
  J("columns().indexes()", "column().index()", function (a) {
    return this.iterator(
      "column",
      function (b, c) {
        return "visible" === a ? ua(b, c) : c;
      },
      1
    );
  });
  z("columns.adjust()", function () {
    return this.iterator(
      "table",
      function (a) {
        sa(a);
      },
      1
    );
  });
  z("column.index()", function (a, b) {
    if (0 !== this.context.length) {
      var c = this.context[0];
      if ("fromVisible" === a || "toData" === a) return ta(c, b);
      if ("fromData" === a || "toVisible" === a) return ua(c, b);
    }
  });
  z("column()", function (a, b) {
    return Bb(this.columns(a, b));
  });
  var Lc = function (a, b, c) {
    var d = a.aoData,
      e = ab(a, c),
      h = qc(Fa(d, e, "anCells")),
      f = l(rc([], h)),
      g,
      k = a.aoColumns.length,
      m,
      n,
      p,
      t,
      v,
      x;
    return zb(
      "cell",
      b,
      function (w) {
        var r = "function" === typeof w;
        if (null === w || w === q || r) {
          m = [];
          n = 0;
          for (p = e.length; n < p; n++)
            for (g = e[n], t = 0; t < k; t++)
              (v = { row: g, column: t }),
                r
                  ? ((x = d[g]),
                    w(v, T(a, g, t), x.anCells ? x.anCells[t] : null) &&
                      m.push(v))
                  : m.push(v);
          return m;
        }
        if (l.isPlainObject(w))
          return w.column !== q && w.row !== q && -1 !== l.inArray(w.row, e)
            ? [w]
            : [];
        r = f
          .filter(w)
          .map(function (C, G) {
            return { row: G._DT_CellIndex.row, column: G._DT_CellIndex.column };
          })
          .toArray();
        if (r.length || !w.nodeName) return r;
        x = l(w).closest("*[data-dt-row]");
        return x.length
          ? [{ row: x.data("dt-row"), column: x.data("dt-column") }]
          : [];
      },
      a,
      c
    );
  };
  z("cells()", function (a, b, c) {
    l.isPlainObject(a) &&
      (a.row === q ? ((c = a), (a = null)) : ((c = b), (b = null)));
    l.isPlainObject(b) && ((c = b), (b = null));
    if (null === b || b === q)
      return this.iterator("table", function (n) {
        return Lc(n, a, Ab(c));
      });
    var d = c ? { page: c.page, order: c.order, search: c.search } : {},
      e = this.columns(b, d),
      h = this.rows(a, d),
      f,
      g,
      k,
      m;
    d = this.iterator(
      "table",
      function (n, p) {
        n = [];
        f = 0;
        for (g = h[p].length; f < g; f++)
          for (k = 0, m = e[p].length; k < m; k++)
            n.push({ row: h[p][f], column: e[p][k] });
        return n;
      },
      1
    );
    d = c && c.selected ? this.cells(d, c) : d;
    l.extend(d.selector, { cols: b, rows: a, opts: c });
    return d;
  });
  J("cells().nodes()", "cell().node()", function () {
    return this.iterator(
      "cell",
      function (a, b, c) {
        return (a = a.aoData[b]) && a.anCells ? a.anCells[c] : q;
      },
      1
    );
  });
  z("cells().data()", function () {
    return this.iterator(
      "cell",
      function (a, b, c) {
        return T(a, b, c);
      },
      1
    );
  });
  J("cells().cache()", "cell().cache()", function (a) {
    a = "search" === a ? "_aFilterData" : "_aSortData";
    return this.iterator(
      "cell",
      function (b, c, d) {
        return b.aoData[c][a][d];
      },
      1
    );
  });
  J("cells().render()", "cell().render()", function (a) {
    return this.iterator(
      "cell",
      function (b, c, d) {
        return T(b, c, d, a);
      },
      1
    );
  });
  J("cells().indexes()", "cell().index()", function () {
    return this.iterator(
      "cell",
      function (a, b, c) {
        return { row: b, column: c, columnVisible: ua(a, c) };
      },
      1
    );
  });
  J("cells().invalidate()", "cell().invalidate()", function (a) {
    return this.iterator("cell", function (b, c, d) {
      va(b, c, a, d);
    });
  });
  z("cell()", function (a, b, c) {
    return Bb(this.cells(a, b, c));
  });
  z("cell().data()", function (a) {
    var b = this.context,
      c = this[0];
    if (a === q)
      return b.length && c.length ? T(b[0], c[0].row, c[0].column) : q;
    Ib(b[0], c[0].row, c[0].column, a);
    va(b[0], c[0].row, "data", c[0].column);
    return this;
  });
  z("order()", function (a, b) {
    var c = this.context;
    if (a === q) return 0 !== c.length ? c[0].aaSorting : q;
    "number" === typeof a
      ? (a = [[a, b]])
      : a.length &&
        !Array.isArray(a[0]) &&
        (a = Array.prototype.slice.call(arguments));
    return this.iterator("table", function (d) {
      d.aaSorting = a.slice();
    });
  });
  z("order.listener()", function (a, b, c) {
    return this.iterator("table", function (d) {
      kb(d, a, b, c);
    });
  });
  z("order.fixed()", function (a) {
    if (!a) {
      var b = this.context;
      b = b.length ? b[0].aaSortingFixed : q;
      return Array.isArray(b) ? { pre: b } : b;
    }
    return this.iterator("table", function (c) {
      c.aaSortingFixed = l.extend(!0, {}, a);
    });
  });
  z(["columns().order()", "column().order()"], function (a) {
    var b = this;
    return this.iterator("table", function (c, d) {
      var e = [];
      l.each(b[d], function (h, f) {
        e.push([f, a]);
      });
      c.aaSorting = e;
    });
  });
  z("search()", function (a, b, c, d) {
    var e = this.context;
    return a === q
      ? 0 !== e.length
        ? e[0].oPreviousSearch.sSearch
        : q
      : this.iterator("table", function (h) {
          h.oFeatures.bFilter &&
            ya(
              h,
              l.extend({}, h.oPreviousSearch, {
                sSearch: a + "",
                bRegex: null === b ? !1 : b,
                bSmart: null === c ? !0 : c,
                bCaseInsensitive: null === d ? !0 : d,
              }),
              1
            );
        });
  });
  J("columns().search()", "column().search()", function (a, b, c, d) {
    return this.iterator("column", function (e, h) {
      var f = e.aoPreSearchCols;
      if (a === q) return f[h].sSearch;
      e.oFeatures.bFilter &&
        (l.extend(f[h], {
          sSearch: a + "",
          bRegex: null === b ? !1 : b,
          bSmart: null === c ? !0 : c,
          bCaseInsensitive: null === d ? !0 : d,
        }),
        ya(e, e.oPreviousSearch, 1));
    });
  });
  z("state()", function () {
    return this.context.length ? this.context[0].oSavedState : null;
  });
  z("state.clear()", function () {
    return this.iterator("table", function (a) {
      a.fnStateSaveCallback.call(a.oInstance, a, {});
    });
  });
  z("state.loaded()", function () {
    return this.context.length ? this.context[0].oLoadedState : null;
  });
  z("state.save()", function () {
    return this.iterator("table", function (a) {
      Da(a);
    });
  });
  u.versionCheck = u.fnVersionCheck = function (a) {
    var b = u.version.split(".");
    a = a.split(".");
    for (var c, d, e = 0, h = a.length; e < h; e++)
      if (
        ((c = parseInt(b[e], 10) || 0), (d = parseInt(a[e], 10) || 0), c !== d)
      )
        return c > d;
    return !0;
  };
  u.isDataTable = u.fnIsDataTable = function (a) {
    var b = l(a).get(0),
      c = !1;
    if (a instanceof u.Api) return !0;
    l.each(u.settings, function (d, e) {
      d = e.nScrollHead ? l("table", e.nScrollHead)[0] : null;
      var h = e.nScrollFoot ? l("table", e.nScrollFoot)[0] : null;
      if (e.nTable === b || d === b || h === b) c = !0;
    });
    return c;
  };
  u.tables = u.fnTables = function (a) {
    var b = !1;
    l.isPlainObject(a) && ((b = a.api), (a = a.visible));
    var c = l.map(u.settings, function (d) {
      if (!a || (a && l(d.nTable).is(":visible"))) return d.nTable;
    });
    return b ? new B(c) : c;
  };
  u.camelToHungarian = P;
  z("$()", function (a, b) {
    b = this.rows(b).nodes();
    b = l(b);
    return l([].concat(b.filter(a).toArray(), b.find(a).toArray()));
  });
  l.each(["on", "one", "off"], function (a, b) {
    z(b + "()", function () {
      var c = Array.prototype.slice.call(arguments);
      c[0] = l
        .map(c[0].split(/\s/), function (e) {
          return e.match(/\.dt\b/) ? e : e + ".dt";
        })
        .join(" ");
      var d = l(this.tables().nodes());
      d[b].apply(d, c);
      return this;
    });
  });
  z("clear()", function () {
    return this.iterator("table", function (a) {
      Ma(a);
    });
  });
  z("settings()", function () {
    return new B(this.context, this.context);
  });
  z("init()", function () {
    var a = this.context;
    return a.length ? a[0].oInit : null;
  });
  z("data()", function () {
    return this.iterator("table", function (a) {
      return U(a.aoData, "_aData");
    }).flatten();
  });
  z("destroy()", function (a) {
    a = a || !1;
    return this.iterator("table", function (b) {
      var c = b.oClasses,
        d = b.nTable,
        e = b.nTBody,
        h = b.nTHead,
        f = b.nTFoot,
        g = l(d);
      e = l(e);
      var k = l(b.nTableWrapper),
        m = l.map(b.aoData, function (p) {
          return p.nTr;
        }),
        n;
      b.bDestroying = !0;
      F(b, "aoDestroyCallback", "destroy", [b]);
      a || new B(b).columns().visible(!0);
      k.off(".DT").find(":not(tbody *)").off(".DT");
      l(y).off(".DT-" + b.sInstance);
      d != h.parentNode && (g.children("thead").detach(), g.append(h));
      f && d != f.parentNode && (g.children("tfoot").detach(), g.append(f));
      b.aaSorting = [];
      b.aaSortingFixed = [];
      Va(b);
      l(m).removeClass(b.asStripeClasses.join(" "));
      l("th, td", h).removeClass(
        c.sSortable +
          " " +
          c.sSortableAsc +
          " " +
          c.sSortableDesc +
          " " +
          c.sSortableNone
      );
      e.children().detach();
      e.append(m);
      h = b.nTableWrapper.parentNode;
      f = a ? "remove" : "detach";
      g[f]();
      k[f]();
      !a &&
        h &&
        (h.insertBefore(d, b.nTableReinsertBefore),
        g.css("width", b.sDestroyWidth).removeClass(c.sTable),
        (n = b.asDestroyStripes.length) &&
          e.children().each(function (p) {
            l(this).addClass(b.asDestroyStripes[p % n]);
          }));
      c = l.inArray(b, u.settings);
      -1 !== c && u.settings.splice(c, 1);
    });
  });
  l.each(["column", "row", "cell"], function (a, b) {
    z(b + "s().every()", function (c) {
      var d = this.selector.opts,
        e = this;
      return this.iterator(b, function (h, f, g, k, m) {
        c.call(e[b](f, "cell" === b ? g : d, "cell" === b ? d : q), f, g, k, m);
      });
    });
  });
  z("i18n()", function (a, b, c) {
    var d = this.context[0];
    a = ma(a)(d.oLanguage);
    a === q && (a = b);
    c !== q && l.isPlainObject(a) && (a = a[c] !== q ? a[c] : a._);
    return a.replace("%d", c);
  });
  u.version = "1.12.1";
  u.settings = [];
  u.models = {};
  u.models.oSearch = {
    bCaseInsensitive: !0,
    sSearch: "",
    bRegex: !1,
    bSmart: !0,
    return: !1,
  };
  u.models.oRow = {
    nTr: null,
    anCells: null,
    _aData: [],
    _aSortData: null,
    _aFilterData: null,
    _sFilterRow: null,
    _sRowStripe: "",
    src: null,
    idx: -1,
  };
  u.models.oColumn = {
    idx: null,
    aDataSort: null,
    asSorting: null,
    bSearchable: null,
    bSortable: null,
    bVisible: null,
    _sManualType: null,
    _bAttrSrc: !1,
    fnCreatedCell: null,
    fnGetData: null,
    fnSetData: null,
    mData: null,
    mRender: null,
    nTh: null,
    nTf: null,
    sClass: null,
    sContentPadding: null,
    sDefaultContent: null,
    sName: null,
    sSortDataType: "std",
    sSortingClass: null,
    sSortingClassJUI: null,
    sTitle: null,
    sType: null,
    sWidth: null,
    sWidthOrig: null,
  };
  u.defaults = {
    aaData: null,
    aaSorting: [[0, "asc"]],
    aaSortingFixed: [],
    ajax: null,
    aLengthMenu: [10, 25, 50, 100],
    aoColumns: null,
    aoColumnDefs: null,
    aoSearchCols: [],
    asStripeClasses: null,
    bAutoWidth: !0,
    bDeferRender: !1,
    bDestroy: !1,
    bFilter: !0,
    bInfo: !0,
    bLengthChange: !0,
    bPaginate: !0,
    bProcessing: !1,
    bRetrieve: !1,
    bScrollCollapse: !1,
    bServerSide: !1,
    bSort: !0,
    bSortMulti: !0,
    bSortCellsTop: !1,
    bSortClasses: !0,
    bStateSave: !1,
    fnCreatedRow: null,
    fnDrawCallback: null,
    fnFooterCallback: null,
    fnFormatNumber: function (a) {
      return a
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
    },
    fnHeaderCallback: null,
    fnInfoCallback: null,
    fnInitComplete: null,
    fnPreDrawCallback: null,
    fnRowCallback: null,
    fnServerData: null,
    fnServerParams: null,
    fnStateLoadCallback: function (a) {
      try {
        return JSON.parse(
          (-1 === a.iStateDuration ? sessionStorage : localStorage).getItem(
            "DataTables_" + a.sInstance + "_" + location.pathname
          )
        );
      } catch (b) {
        return {};
      }
    },
    fnStateLoadParams: null,
    fnStateLoaded: null,
    fnStateSaveCallback: function (a, b) {
      try {
        (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem(
          "DataTables_" + a.sInstance + "_" + location.pathname,
          JSON.stringify(b)
        );
      } catch (c) {}
    },
    fnStateSaveParams: null,
    iStateDuration: 7200,
    iDeferLoading: null,
    iDisplayLength: 10,
    iDisplayStart: 0,
    iTabIndex: 0,
    oClasses: {},
    oLanguage: {
      oAria: {
        sSortAscending: ": activate to sort column ascending",
        sSortDescending: ": activate to sort column descending",
      },
      oPaginate: {
        sFirst: "First",
        sLast: "Last",
        sNext: "Next",
        sPrevious: "Previous",
      },
      sEmptyTable: "No data available in table",
      sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
      sInfoEmpty: "Showing 0 to 0 of 0 entries",
      sInfoFiltered: "(filtered from _MAX_ total entries)",
      sInfoPostFix: "",
      sDecimal: "",
      sThousands: ",",
      sLengthMenu: "Show _MENU_ entries",
      sLoadingRecords: "Loading...",
      sProcessing: "",
      sSearch: "Search:",
      sSearchPlaceholder: "",
      sUrl: "",
      sZeroRecords: "No matching records found",
    },
    oSearch: l.extend({}, u.models.oSearch),
    sAjaxDataProp: "data",
    sAjaxSource: null,
    sDom: "lfrtip",
    searchDelay: null,
    sPaginationType: "simple_numbers",
    sScrollX: "",
    sScrollXInner: "",
    sScrollY: "",
    sServerMethod: "GET",
    renderer: null,
    rowId: "DT_RowId",
  };
  E(u.defaults);
  u.defaults.column = {
    aDataSort: null,
    iDataSort: -1,
    asSorting: ["asc", "desc"],
    bSearchable: !0,
    bSortable: !0,
    bVisible: !0,
    fnCreatedCell: null,
    mData: null,
    mRender: null,
    sCellType: "td",
    sClass: "",
    sContentPadding: "",
    sDefaultContent: null,
    sName: "",
    sSortDataType: "std",
    sTitle: null,
    sType: null,
    sWidth: null,
  };
  E(u.defaults.column);
  u.models.oSettings = {
    oFeatures: {
      bAutoWidth: null,
      bDeferRender: null,
      bFilter: null,
      bInfo: null,
      bLengthChange: null,
      bPaginate: null,
      bProcessing: null,
      bServerSide: null,
      bSort: null,
      bSortMulti: null,
      bSortClasses: null,
      bStateSave: null,
    },
    oScroll: {
      bCollapse: null,
      iBarWidth: 0,
      sX: null,
      sXInner: null,
      sY: null,
    },
    oLanguage: { fnInfoCallback: null },
    oBrowser: {
      bScrollOversize: !1,
      bScrollbarLeft: !1,
      bBounding: !1,
      barWidth: 0,
    },
    ajax: null,
    aanFeatures: [],
    aoData: [],
    aiDisplay: [],
    aiDisplayMaster: [],
    aIds: {},
    aoColumns: [],
    aoHeader: [],
    aoFooter: [],
    oPreviousSearch: {},
    aoPreSearchCols: [],
    aaSorting: null,
    aaSortingFixed: [],
    asStripeClasses: null,
    asDestroyStripes: [],
    sDestroyWidth: 0,
    aoRowCallback: [],
    aoHeaderCallback: [],
    aoFooterCallback: [],
    aoDrawCallback: [],
    aoRowCreatedCallback: [],
    aoPreDrawCallback: [],
    aoInitComplete: [],
    aoStateSaveParams: [],
    aoStateLoadParams: [],
    aoStateLoaded: [],
    sTableId: "",
    nTable: null,
    nTHead: null,
    nTFoot: null,
    nTBody: null,
    nTableWrapper: null,
    bDeferLoading: !1,
    bInitialised: !1,
    aoOpenRows: [],
    sDom: null,
    searchDelay: null,
    sPaginationType: "two_button",
    iStateDuration: 0,
    aoStateSave: [],
    aoStateLoad: [],
    oSavedState: null,
    oLoadedState: null,
    sAjaxSource: null,
    sAjaxDataProp: null,
    jqXHR: null,
    json: q,
    oAjaxData: q,
    fnServerData: null,
    aoServerParams: [],
    sServerMethod: null,
    fnFormatNumber: null,
    aLengthMenu: null,
    iDraw: 0,
    bDrawing: !1,
    iDrawError: -1,
    _iDisplayLength: 10,
    _iDisplayStart: 0,
    _iRecordsTotal: 0,
    _iRecordsDisplay: 0,
    oClasses: {},
    bFiltered: !1,
    bSorted: !1,
    bSortCellsTop: null,
    oInit: null,
    aoDestroyCallback: [],
    fnRecordsTotal: function () {
      return "ssp" == Q(this)
        ? 1 * this._iRecordsTotal
        : this.aiDisplayMaster.length;
    },
    fnRecordsDisplay: function () {
      return "ssp" == Q(this)
        ? 1 * this._iRecordsDisplay
        : this.aiDisplay.length;
    },
    fnDisplayEnd: function () {
      var a = this._iDisplayLength,
        b = this._iDisplayStart,
        c = b + a,
        d = this.aiDisplay.length,
        e = this.oFeatures,
        h = e.bPaginate;
      return e.bServerSide
        ? !1 === h || -1 === a
          ? b + d
          : Math.min(b + a, this._iRecordsDisplay)
        : !h || c > d || -1 === a
        ? d
        : c;
    },
    oInstance: null,
    sInstance: null,
    iTabIndex: 0,
    nScrollHead: null,
    nScrollFoot: null,
    aLastSort: [],
    oPlugins: {},
    rowIdFn: null,
    rowId: null,
  };
  u.ext = M = {
    buttons: {},
    classes: {},
    builder:
      "bs5/jq-3.6.0/jszip-2.5.0/dt-1.12.1/b-2.2.3/b-colvis-2.2.3/b-html5-2.2.3/b-print-2.2.3/r-2.3.0",
    errMode: "alert",
    feature: [],
    search: [],
    selector: { cell: [], column: [], row: [] },
    internal: {},
    legacy: { ajax: null },
    pager: {},
    renderer: { pageButton: {}, header: {} },
    order: {},
    type: { detect: [], search: {}, order: {} },
    _unique: 0,
    fnVersionCheck: u.fnVersionCheck,
    iApiIndex: 0,
    oJUIClasses: {},
    sVersion: u.version,
  };
  l.extend(M, {
    afnFiltering: M.search,
    aTypes: M.type.detect,
    ofnSearch: M.type.search,
    oSort: M.type.order,
    afnSortData: M.order,
    aoFeatures: M.feature,
    oApi: M.internal,
    oStdClasses: M.classes,
    oPagination: M.pager,
  });
  l.extend(u.ext.classes, {
    sTable: "dataTable",
    sNoFooter: "no-footer",
    sPageButton: "paginate_button",
    sPageButtonActive: "current",
    sPageButtonDisabled: "disabled",
    sStripeOdd: "odd",
    sStripeEven: "even",
    sRowEmpty: "dataTables_empty",
    sWrapper: "dataTables_wrapper",
    sFilter: "dataTables_filter",
    sInfo: "dataTables_info",
    sPaging: "dataTables_paginate paging_",
    sLength: "dataTables_length",
    sProcessing: "dataTables_processing",
    sSortAsc: "sorting_asc",
    sSortDesc: "sorting_desc",
    sSortable: "sorting",
    sSortableAsc: "sorting_desc_disabled",
    sSortableDesc: "sorting_asc_disabled",
    sSortableNone: "sorting_disabled",
    sSortColumn: "sorting_",
    sFilterInput: "",
    sLengthSelect: "",
    sScrollWrapper: "dataTables_scroll",
    sScrollHead: "dataTables_scrollHead",
    sScrollHeadInner: "dataTables_scrollHeadInner",
    sScrollBody: "dataTables_scrollBody",
    sScrollFoot: "dataTables_scrollFoot",
    sScrollFootInner: "dataTables_scrollFootInner",
    sHeaderTH: "",
    sFooterTH: "",
    sSortJUIAsc: "",
    sSortJUIDesc: "",
    sSortJUI: "",
    sSortJUIAscAllowed: "",
    sSortJUIDescAllowed: "",
    sSortJUIWrapper: "",
    sSortIcon: "",
    sJUIHeader: "",
    sJUIFooter: "",
  });
  var ic = u.ext.pager;
  l.extend(ic, {
    simple: function (a, b) {
      return ["previous", "next"];
    },
    full: function (a, b) {
      return ["first", "previous", "next", "last"];
    },
    numbers: function (a, b) {
      return [Ea(a, b)];
    },
    simple_numbers: function (a, b) {
      return ["previous", Ea(a, b), "next"];
    },
    full_numbers: function (a, b) {
      return ["first", "previous", Ea(a, b), "next", "last"];
    },
    first_last_numbers: function (a, b) {
      return ["first", Ea(a, b), "last"];
    },
    _numbers: Ea,
    numbers_length: 7,
  });
  l.extend(!0, u.ext.renderer, {
    pageButton: {
      _: function (a, b, c, d, e, h) {
        var f = a.oClasses,
          g = a.oLanguage.oPaginate,
          k = a.oLanguage.oAria.paginate || {},
          m,
          n,
          p = 0,
          t = function (x, w) {
            var r,
              C = f.sPageButtonDisabled,
              G = function (I) {
                Ta(a, I.data.action, !0);
              };
            var ba = 0;
            for (r = w.length; ba < r; ba++) {
              var L = w[ba];
              if (Array.isArray(L)) {
                var O = l("<" + (L.DT_el || "div") + "/>").appendTo(x);
                t(O, L);
              } else {
                m = null;
                n = L;
                O = a.iTabIndex;
                switch (L) {
                  case "ellipsis":
                    x.append('<span class="ellipsis">&#x2026;</span>');
                    break;
                  case "first":
                    m = g.sFirst;
                    0 === e && ((O = -1), (n += " " + C));
                    break;
                  case "previous":
                    m = g.sPrevious;
                    0 === e && ((O = -1), (n += " " + C));
                    break;
                  case "next":
                    m = g.sNext;
                    if (0 === h || e === h - 1) (O = -1), (n += " " + C);
                    break;
                  case "last":
                    m = g.sLast;
                    if (0 === h || e === h - 1) (O = -1), (n += " " + C);
                    break;
                  default:
                    (m = a.fnFormatNumber(L + 1)),
                      (n = e === L ? f.sPageButtonActive : "");
                }
                null !== m &&
                  ((O = l("<a>", {
                    class: f.sPageButton + " " + n,
                    "aria-controls": a.sTableId,
                    "aria-label": k[L],
                    "data-dt-idx": p,
                    tabindex: O,
                    id:
                      0 === c && "string" === typeof L
                        ? a.sTableId + "_" + L
                        : null,
                  })
                    .html(m)
                    .appendTo(x)),
                  sb(O, { action: L }, G),
                  p++);
              }
            }
          };
        try {
          var v = l(b).find(A.activeElement).data("dt-idx");
        } catch (x) {}
        t(l(b).empty(), d);
        v !== q &&
          l(b)
            .find("[data-dt-idx=" + v + "]")
            .trigger("focus");
      },
    },
  });
  l.extend(u.ext.type.detect, [
    function (a, b) {
      b = b.oLanguage.sDecimal;
      return yb(a, b) ? "num" + b : null;
    },
    function (a, b) {
      if (a && !(a instanceof Date) && !Dc.test(a)) return null;
      b = Date.parse(a);
      return (null !== b && !isNaN(b)) || aa(a) ? "date" : null;
    },
    function (a, b) {
      b = b.oLanguage.sDecimal;
      return yb(a, b, !0) ? "num-fmt" + b : null;
    },
    function (a, b) {
      b = b.oLanguage.sDecimal;
      return pc(a, b) ? "html-num" + b : null;
    },
    function (a, b) {
      b = b.oLanguage.sDecimal;
      return pc(a, b, !0) ? "html-num-fmt" + b : null;
    },
    function (a, b) {
      return aa(a) || ("string" === typeof a && -1 !== a.indexOf("<"))
        ? "html"
        : null;
    },
  ]);
  l.extend(u.ext.type.search, {
    html: function (a) {
      return aa(a)
        ? a
        : "string" === typeof a
        ? a.replace(mc, " ").replace(Ya, "")
        : "";
    },
    string: function (a) {
      return aa(a) ? a : "string" === typeof a ? a.replace(mc, " ") : a;
    },
  });
  var Xa = function (a, b, c, d) {
    if (0 !== a && (!a || "-" === a)) return -Infinity;
    b && (a = oc(a, b));
    a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));
    return 1 * a;
  };
  l.extend(M.type.order, {
    "date-pre": function (a) {
      a = Date.parse(a);
      return isNaN(a) ? -Infinity : a;
    },
    "html-pre": function (a) {
      return aa(a)
        ? ""
        : a.replace
        ? a.replace(/<.*?>/g, "").toLowerCase()
        : a + "";
    },
    "string-pre": function (a) {
      return aa(a)
        ? ""
        : "string" === typeof a
        ? a.toLowerCase()
        : a.toString
        ? a.toString()
        : "";
    },
    "string-asc": function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    },
    "string-desc": function (a, b) {
      return a < b ? 1 : a > b ? -1 : 0;
    },
  });
  bb("");
  l.extend(!0, u.ext.renderer, {
    header: {
      _: function (a, b, c, d) {
        l(a.nTable).on("order.dt.DT", function (e, h, f, g) {
          a === h &&
            ((e = c.idx),
            b
              .removeClass(d.sSortAsc + " " + d.sSortDesc)
              .addClass(
                "asc" == g[e]
                  ? d.sSortAsc
                  : "desc" == g[e]
                  ? d.sSortDesc
                  : c.sSortingClass
              ));
        });
      },
      jqueryui: function (a, b, c, d) {
        l("<div/>")
          .addClass(d.sSortJUIWrapper)
          .append(b.contents())
          .append(l("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI))
          .appendTo(b);
        l(a.nTable).on("order.dt.DT", function (e, h, f, g) {
          a === h &&
            ((e = c.idx),
            b
              .removeClass(d.sSortAsc + " " + d.sSortDesc)
              .addClass(
                "asc" == g[e]
                  ? d.sSortAsc
                  : "desc" == g[e]
                  ? d.sSortDesc
                  : c.sSortingClass
              ),
            b
              .find("span." + d.sSortIcon)
              .removeClass(
                d.sSortJUIAsc +
                  " " +
                  d.sSortJUIDesc +
                  " " +
                  d.sSortJUI +
                  " " +
                  d.sSortJUIAscAllowed +
                  " " +
                  d.sSortJUIDescAllowed
              )
              .addClass(
                "asc" == g[e]
                  ? d.sSortJUIAsc
                  : "desc" == g[e]
                  ? d.sSortJUIDesc
                  : c.sSortingClassJUI
              ));
        });
      },
    },
  });
  var $a = function (a) {
      Array.isArray(a) && (a = a.join(","));
      return "string" === typeof a
        ? a
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
        : a;
    },
    kc = !1,
    zc = ",",
    Ac = ".";
  if (Intl)
    try {
      for (
        var Ha = new Intl.NumberFormat().formatToParts(100000.1), ra = 0;
        ra < Ha.length;
        ra++
      )
        "group" === Ha[ra].type
          ? (zc = Ha[ra].value)
          : "decimal" === Ha[ra].type && (Ac = Ha[ra].value);
    } catch (a) {}
  u.datetime = function (a, b) {
    var c = "datetime-detect-" + a;
    b || (b = "en");
    u.ext.type.order[c] ||
      (u.ext.type.detect.unshift(function (d) {
        var e = Za(d, a, b);
        return "" === d || e ? c : !1;
      }),
      (u.ext.type.order[c + "-pre"] = function (d) {
        return Za(d, a, b) || 0;
      }));
  };
  u.render = {
    date: wb("toLocaleDateString"),
    datetime: wb("toLocaleString"),
    time: wb("toLocaleTimeString"),
    number: function (a, b, c, d, e) {
      if (null === a || a === q) a = zc;
      if (null === b || b === q) b = Ac;
      return {
        display: function (h) {
          if (
            ("number" !== typeof h && "string" !== typeof h) ||
            "" === h ||
            null === h
          )
            return h;
          var f = 0 > h ? "-" : "",
            g = parseFloat(h);
          if (isNaN(g)) return $a(h);
          g = g.toFixed(c);
          h = Math.abs(g);
          g = parseInt(h, 10);
          h = c ? b + (h - g).toFixed(c).substring(2) : "";
          0 === g && 0 === parseFloat(h) && (f = "");
          return (
            f +
            (d || "") +
            g.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) +
            h +
            (e || "")
          );
        },
      };
    },
    text: function () {
      return { display: $a, filter: $a };
    },
  };
  l.extend(u.ext.internal, {
    _fnExternApiFunc: lc,
    _fnBuildAjax: Qa,
    _fnAjaxUpdate: Kb,
    _fnAjaxParameters: Tb,
    _fnAjaxUpdateDraw: Ub,
    _fnAjaxDataSrc: za,
    _fnAddColumn: cb,
    _fnColumnOptions: Ia,
    _fnAdjustColumnSizing: sa,
    _fnVisibleToColumnIndex: ta,
    _fnColumnIndexToVisible: ua,
    _fnVisbleColumns: na,
    _fnGetColumns: Ka,
    _fnColumnTypes: eb,
    _fnApplyColumnDefs: Hb,
    _fnHungarianMap: E,
    _fnCamelToHungarian: P,
    _fnLanguageCompat: la,
    _fnBrowserDetect: Fb,
    _fnAddData: ia,
    _fnAddTr: La,
    _fnNodeToDataIndex: function (a, b) {
      return b._DT_RowIndex !== q ? b._DT_RowIndex : null;
    },
    _fnNodeToColumnIndex: function (a, b, c) {
      return l.inArray(c, a.aoData[b].anCells);
    },
    _fnGetCellData: T,
    _fnSetCellData: Ib,
    _fnSplitObjNotation: hb,
    _fnGetObjectDataFn: ma,
    _fnSetObjectDataFn: ha,
    _fnGetDataMaster: ib,
    _fnClearTable: Ma,
    _fnDeleteIndex: Na,
    _fnInvalidate: va,
    _fnGetRowElements: gb,
    _fnCreateTr: fb,
    _fnBuildHead: Jb,
    _fnDrawHead: xa,
    _fnDraw: ja,
    _fnReDraw: ka,
    _fnAddOptionsHtml: Mb,
    _fnDetectHeader: wa,
    _fnGetUniqueThs: Pa,
    _fnFeatureHtmlFilter: Ob,
    _fnFilterComplete: ya,
    _fnFilterCustom: Xb,
    _fnFilterColumn: Wb,
    _fnFilter: Vb,
    _fnFilterCreateSearch: nb,
    _fnEscapeRegex: ob,
    _fnFilterData: Yb,
    _fnFeatureHtmlInfo: Rb,
    _fnUpdateInfo: ac,
    _fnInfoMacros: bc,
    _fnInitialise: Aa,
    _fnInitComplete: Ra,
    _fnLengthChange: pb,
    _fnFeatureHtmlLength: Nb,
    _fnFeatureHtmlPaginate: Sb,
    _fnPageChange: Ta,
    _fnFeatureHtmlProcessing: Pb,
    _fnProcessingDisplay: V,
    _fnFeatureHtmlTable: Qb,
    _fnScrollDraw: Ja,
    _fnApplyToChildren: da,
    _fnCalculateColumnWidths: db,
    _fnThrottle: mb,
    _fnConvertToWidth: cc,
    _fnGetWidestNode: dc,
    _fnGetMaxLenString: ec,
    _fnStringToCss: K,
    _fnSortFlatten: oa,
    _fnSort: Lb,
    _fnSortAria: gc,
    _fnSortListener: rb,
    _fnSortAttachListener: kb,
    _fnSortingClasses: Va,
    _fnSortData: fc,
    _fnSaveState: Da,
    _fnLoadState: hc,
    _fnImplementState: tb,
    _fnSettingsFromNode: Wa,
    _fnLog: ea,
    _fnMap: Y,
    _fnBindAction: sb,
    _fnCallbackReg: R,
    _fnCallbackFire: F,
    _fnLengthOverflow: qb,
    _fnRenderer: lb,
    _fnDataSource: Q,
    _fnRowAttributes: jb,
    _fnExtend: ub,
    _fnCalculateEnd: function () {},
  });
  l.fn.dataTable = u;
  u.$ = l;
  l.fn.dataTableSettings = u.settings;
  l.fn.dataTableExt = u.ext;
  l.fn.DataTable = function (a) {
    return l(this).dataTable(a).api();
  };
  l.each(u, function (a, b) {
    l.fn.DataTable[a] = b;
  });
  return u;
});

/*!
 DataTables Bootstrap 5 integration
 2020 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (a, b, c) {
  a instanceof String && (a = String(a));
  for (var e = a.length, d = 0; d < e; d++) {
    var f = a[d];
    if (b.call(c, f, d, a)) return { i: d, v: f };
  }
  return { i: -1, v: void 0 };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
    ? Object.defineProperty
    : function (a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a;
      };
$jscomp.getGlobal = function (a) {
  a = [
    "object" == typeof globalThis && globalThis,
    a,
    "object" == typeof window && window,
    "object" == typeof self && self,
    "object" == typeof global && global,
  ];
  for (var b = 0; b < a.length; ++b) {
    var c = a[b];
    if (c && c.Math == Math) return c;
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE =
  "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS =
  !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function (a, b) {
  var c = $jscomp.propertyToPolyfillSymbol[b];
  if (null == c) return a[b];
  c = a[c];
  return void 0 !== c ? c : a[b];
};
$jscomp.polyfill = function (a, b, c, e) {
  b &&
    ($jscomp.ISOLATE_POLYFILLS
      ? $jscomp.polyfillIsolated(a, b, c, e)
      : $jscomp.polyfillUnisolated(a, b, c, e));
};
$jscomp.polyfillUnisolated = function (a, b, c, e) {
  c = $jscomp.global;
  a = a.split(".");
  for (e = 0; e < a.length - 1; e++) {
    var d = a[e];
    if (!(d in c)) return;
    c = c[d];
  }
  a = a[a.length - 1];
  e = c[a];
  b = b(e);
  b != e &&
    null != b &&
    $jscomp.defineProperty(c, a, { configurable: !0, writable: !0, value: b });
};
$jscomp.polyfillIsolated = function (a, b, c, e) {
  var d = a.split(".");
  a = 1 === d.length;
  e = d[0];
  e = !a && e in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var f = 0; f < d.length - 1; f++) {
    var l = d[f];
    if (!(l in e)) return;
    e = e[l];
  }
  d = d[d.length - 1];
  c = $jscomp.IS_SYMBOL_NATIVE && "es6" === c ? e[d] : null;
  b = b(c);
  null != b &&
    (a
      ? $jscomp.defineProperty($jscomp.polyfills, d, {
          configurable: !0,
          writable: !0,
          value: b,
        })
      : b !== c &&
        (($jscomp.propertyToPolyfillSymbol[d] = $jscomp.IS_SYMBOL_NATIVE
          ? $jscomp.global.Symbol(d)
          : $jscomp.POLYFILL_PREFIX + d),
        (d = $jscomp.propertyToPolyfillSymbol[d]),
        $jscomp.defineProperty(e, d, {
          configurable: !0,
          writable: !0,
          value: b,
        })));
};
$jscomp.polyfill(
  "Array.prototype.find",
  function (a) {
    return a
      ? a
      : function (b, c) {
          return $jscomp.findInternal(this, b, c).v;
        };
  },
  "es6",
  "es3"
);
(function (a) {
  "function" === typeof define && define.amd
    ? define(["jquery", "datatables.net"], function (b) {
        return a(b, window, document);
      })
    : "object" === typeof exports
    ? (module.exports = function (b, c) {
        b || (b = window);
        (c && c.fn.dataTable) || (c = require("datatables.net")(b, c).$);
        return a(c, b, b.document);
      })
    : a(jQuery, window, document);
})(function (a, b, c, e) {
  var d = a.fn.dataTable;
  a.extend(!0, d.defaults, {
    dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
    renderer: "bootstrap",
  });
  a.extend(d.ext.classes, {
    sWrapper: "dataTables_wrapper dt-bootstrap5",
    sFilterInput: "form-control form-control-sm",
    sLengthSelect: "form-select form-select-sm",
    sProcessing: "dataTables_processing card",
    sPageButton: "paginate_button page-item",
  });
  d.ext.renderer.pageButton.bootstrap = function (f, l, A, B, m, t) {
    var u = new d.Api(f),
      C = f.oClasses,
      n = f.oLanguage.oPaginate,
      D = f.oLanguage.oAria.paginate || {},
      h,
      k,
      v = 0,
      y = function (q, w) {
        var x,
          E = function (p) {
            p.preventDefault();
            a(p.currentTarget).hasClass("disabled") ||
              u.page() == p.data.action ||
              u.page(p.data.action).draw("page");
          };
        var r = 0;
        for (x = w.length; r < x; r++) {
          var g = w[r];
          if (Array.isArray(g)) y(q, g);
          else {
            k = h = "";
            switch (g) {
              case "ellipsis":
                h = "&#x2026;";
                k = "disabled";
                break;
              case "first":
                h = n.sFirst;
                k = g + (0 < m ? "" : " disabled");
                break;
              case "previous":
                h = n.sPrevious;
                k = g + (0 < m ? "" : " disabled");
                break;
              case "next":
                h = n.sNext;
                k = g + (m < t - 1 ? "" : " disabled");
                break;
              case "last":
                h = n.sLast;
                k = g + (m < t - 1 ? "" : " disabled");
                break;
              default:
                (h = g + 1), (k = m === g ? "active" : "");
            }
            if (h) {
              var F = a("<li>", {
                class: C.sPageButton + " " + k,
                id:
                  0 === A && "string" === typeof g
                    ? f.sTableId + "_" + g
                    : null,
              })
                .append(
                  a("<a>", {
                    href: "#",
                    "aria-controls": f.sTableId,
                    "aria-label": D[g],
                    "data-dt-idx": v,
                    tabindex: f.iTabIndex,
                    class: "page-link",
                  }).html(h)
                )
                .appendTo(q);
              f.oApi._fnBindAction(F, { action: g }, E);
              v++;
            }
          }
        }
      };
    try {
      var z = a(l).find(c.activeElement).data("dt-idx");
    } catch (q) {}
    y(a(l).empty().html('<ul class="pagination"/>').children("ul"), B);
    z !== e &&
      a(l)
        .find("[data-dt-idx=" + z + "]")
        .trigger("focus");
  };
  return d;
});

/*!
 Buttons for DataTables 2.2.3
 ©2016-2022 SpryMedia Ltd - datatables.net/license
*/
(function (d) {
  "function" === typeof define && define.amd
    ? define(["jquery", "datatables.net"], function (A) {
        return d(A, window, document);
      })
    : "object" === typeof exports
    ? (module.exports = function (A, C) {
        A || (A = window);
        (C && C.fn.dataTable) || (C = require("datatables.net")(A, C).$);
        return d(C, A, A.document);
      })
    : d(jQuery, window, document);
})(function (d, A, C, p) {
  function I(a, b, c) {
    d.fn.animate
      ? a.stop().fadeIn(b, c)
      : (a.css("display", "block"), c && c.call(a));
  }
  function J(a, b, c) {
    d.fn.animate
      ? a.stop().fadeOut(b, c)
      : (a.css("display", "none"), c && c.call(a));
  }
  function L(a, b) {
    a = new u.Api(a);
    b = b ? b : a.init().buttons || u.defaults.buttons;
    return new x(a, b).container();
  }
  var u = d.fn.dataTable,
    O = 0,
    P = 0,
    D = u.ext.buttons,
    x = function (a, b) {
      if (!(this instanceof x))
        return function (c) {
          return new x(c, a).container();
        };
      "undefined" === typeof b && (b = {});
      !0 === b && (b = {});
      Array.isArray(b) && (b = { buttons: b });
      this.c = d.extend(!0, {}, x.defaults, b);
      b.buttons && (this.c.buttons = b.buttons);
      this.s = {
        dt: new u.Api(a),
        buttons: [],
        listenKeys: "",
        namespace: "dtb" + O++,
      };
      this.dom = {
        container: d("<" + this.c.dom.container.tag + "/>").addClass(
          this.c.dom.container.className
        ),
      };
      this._constructor();
    };
  d.extend(x.prototype, {
    action: function (a, b) {
      a = this._nodeToButton(a);
      if (b === p) return a.conf.action;
      a.conf.action = b;
      return this;
    },
    active: function (a, b) {
      var c = this._nodeToButton(a);
      a = this.c.dom.button.active;
      c = d(c.node);
      if (b === p) return c.hasClass(a);
      c.toggleClass(a, b === p ? !0 : b);
      return this;
    },
    add: function (a, b, c) {
      var e = this.s.buttons;
      if ("string" === typeof b) {
        b = b.split("-");
        var h = this.s;
        e = 0;
        for (var f = b.length - 1; e < f; e++) h = h.buttons[1 * b[e]];
        e = h.buttons;
        b = 1 * b[b.length - 1];
      }
      this._expandButton(
        e,
        a,
        a !== p ? a.split : p,
        (a === p || a.split === p || 0 === a.split.length) && h !== p,
        !1,
        b
      );
      (c !== p && !0 !== c) || this._draw();
      return this;
    },
    collectionRebuild: function (a, b) {
      a = this._nodeToButton(a);
      if (b !== p) {
        var c;
        for (c = a.buttons.length - 1; 0 <= c; c--)
          this.remove(a.buttons[c].node);
        for (c = 0; c < b.length; c++) {
          var e = b[c];
          this._expandButton(
            a.buttons,
            e,
            e !== p && e.config !== p && e.config.split !== p,
            !0,
            e.parentConf !== p && e.parentConf.split !== p,
            c,
            e.parentConf
          );
        }
      }
      this._draw(a.collection, a.buttons);
    },
    container: function () {
      return this.dom.container;
    },
    disable: function (a) {
      a = this._nodeToButton(a);
      d(a.node).addClass(this.c.dom.button.disabled).attr("disabled", !0);
      return this;
    },
    destroy: function () {
      d("body").off("keyup." + this.s.namespace);
      var a = this.s.buttons.slice(),
        b;
      var c = 0;
      for (b = a.length; c < b; c++) this.remove(a[c].node);
      this.dom.container.remove();
      a = this.s.dt.settings()[0];
      c = 0;
      for (b = a.length; c < b; c++)
        if (a.inst === this) {
          a.splice(c, 1);
          break;
        }
      return this;
    },
    enable: function (a, b) {
      if (!1 === b) return this.disable(a);
      a = this._nodeToButton(a);
      d(a.node).removeClass(this.c.dom.button.disabled).removeAttr("disabled");
      return this;
    },
    index: function (a, b, c) {
      b || ((b = ""), (c = this.s.buttons));
      for (var e = 0, h = c.length; e < h; e++) {
        var f = c[e].buttons;
        if (c[e].node === a) return b + e;
        if (f && f.length && ((f = this.index(a, e + "-", f)), null !== f))
          return f;
      }
      return null;
    },
    name: function () {
      return this.c.name;
    },
    node: function (a) {
      if (!a) return this.dom.container;
      a = this._nodeToButton(a);
      return d(a.node);
    },
    processing: function (a, b) {
      var c = this.s.dt,
        e = this._nodeToButton(a);
      if (b === p) return d(e.node).hasClass("processing");
      d(e.node).toggleClass("processing", b);
      d(c.table().node()).triggerHandler("buttons-processing.dt", [
        b,
        c.button(a),
        c,
        d(a),
        e.conf,
      ]);
      return this;
    },
    remove: function (a) {
      var b = this._nodeToButton(a),
        c = this._nodeToHost(a),
        e = this.s.dt;
      if (b.buttons.length)
        for (var h = b.buttons.length - 1; 0 <= h; h--)
          this.remove(b.buttons[h].node);
      b.conf.destroying = !0;
      b.conf.destroy && b.conf.destroy.call(e.button(a), e, d(a), b.conf);
      this._removeKey(b.conf);
      d(b.node).remove();
      a = d.inArray(b, c);
      c.splice(a, 1);
      return this;
    },
    text: function (a, b) {
      var c = this._nodeToButton(a);
      a = this.c.dom.collection.buttonLiner;
      a = c.inCollection && a && a.tag ? a.tag : this.c.dom.buttonLiner.tag;
      var e = this.s.dt,
        h = d(c.node),
        f = function (g) {
          return "function" === typeof g ? g(e, h, c.conf) : g;
        };
      if (b === p) return f(c.conf.text);
      c.conf.text = b;
      a
        ? h.children(a).eq(0).filter(":not(.dt-down-arrow)").html(f(b))
        : h.html(f(b));
      return this;
    },
    _constructor: function () {
      var a = this,
        b = this.s.dt,
        c = b.settings()[0],
        e = this.c.buttons;
      c._buttons || (c._buttons = []);
      c._buttons.push({ inst: this, name: this.c.name });
      for (var h = 0, f = e.length; h < f; h++) this.add(e[h]);
      b.on("destroy", function (g, l) {
        l === c && a.destroy();
      });
      d("body").on("keyup." + this.s.namespace, function (g) {
        if (!C.activeElement || C.activeElement === C.body) {
          var l = String.fromCharCode(g.keyCode).toLowerCase();
          -1 !== a.s.listenKeys.toLowerCase().indexOf(l) && a._keypress(l, g);
        }
      });
    },
    _addKey: function (a) {
      a.key &&
        (this.s.listenKeys += d.isPlainObject(a.key) ? a.key.key : a.key);
    },
    _draw: function (a, b) {
      a || ((a = this.dom.container), (b = this.s.buttons));
      a.children().detach();
      for (var c = 0, e = b.length; c < e; c++)
        a.append(b[c].inserter),
          a.append(" "),
          b[c].buttons &&
            b[c].buttons.length &&
            this._draw(b[c].collection, b[c].buttons);
    },
    _expandButton: function (a, b, c, e, h, f, g) {
      var l = this.s.dt,
        m = 0,
        r = Array.isArray(b) ? b : [b];
      b === p && (r = Array.isArray(c) ? c : [c]);
      c = 0;
      for (var q = r.length; c < q; c++) {
        var n = this._resolveExtends(r[c]);
        if (n)
          if (
            ((b = n.config !== p && n.config.split ? !0 : !1), Array.isArray(n))
          )
            this._expandButton(
              a,
              n,
              k !== p && k.conf !== p ? k.conf.split : p,
              e,
              g !== p && g.split !== p,
              f,
              g
            );
          else {
            var k = this._buildButton(
              n,
              e,
              n.split !== p || (n.config !== p && n.config.split !== p),
              h
            );
            if (k) {
              f !== p && null !== f ? (a.splice(f, 0, k), f++) : a.push(k);
              if (k.conf.buttons || k.conf.split) {
                k.collection = d(
                  "<" +
                    (b
                      ? this.c.dom.splitCollection.tag
                      : this.c.dom.collection.tag) +
                    "/>"
                );
                k.conf._collection = k.collection;
                if (k.conf.split)
                  for (var t = 0; t < k.conf.split.length; t++)
                    "object" === typeof k.conf.split[t] &&
                      ((k.conf.split[t].parent = g),
                      k.conf.split[t].collectionLayout === p &&
                        (k.conf.split[t].collectionLayout =
                          k.conf.collectionLayout),
                      k.conf.split[t].dropup === p &&
                        (k.conf.split[t].dropup = k.conf.dropup),
                      k.conf.split[t].fade === p &&
                        (k.conf.split[t].fade = k.conf.fade));
                else
                  d(k.node).append(
                    d(
                      '<span class="dt-down-arrow">' +
                        this.c.dom.splitDropdown.text +
                        "</span>"
                    )
                  );
                this._expandButton(
                  k.buttons,
                  k.conf.buttons,
                  k.conf.split,
                  !b,
                  b,
                  f,
                  k.conf
                );
              }
              k.conf.parent = g;
              n.init && n.init.call(l.button(k.node), l, d(k.node), n);
              m++;
            }
          }
      }
    },
    _buildButton: function (a, b, c, e) {
      var h = this.c.dom.button,
        f = this.c.dom.buttonLiner,
        g = this.c.dom.collection,
        l = this.c.dom.splitCollection,
        m = this.c.dom.splitDropdownButton,
        r = this.s.dt,
        q = function (v) {
          return "function" === typeof v ? v(r, k, a) : v;
        };
      if (a.spacer) {
        var n = d("<span></span>")
          .addClass("dt-button-spacer " + a.style + " " + h.spacerClass)
          .html(q(a.text));
        return {
          conf: a,
          node: n,
          inserter: n,
          buttons: [],
          inCollection: b,
          isSplit: c,
          inSplit: e,
          collection: null,
        };
      }
      !c && e && l ? (h = m) : !c && b && g.button && (h = g.button);
      !c && e && l.buttonLiner
        ? (f = l.buttonLiner)
        : !c && b && g.buttonLiner && (f = g.buttonLiner);
      if (a.available && !a.available(r, a) && !a.hasOwnProperty("html"))
        return !1;
      if (a.hasOwnProperty("html")) var k = d(a.html);
      else {
        var t = function (v, E, F, G) {
          G.action.call(E.button(F), v, E, F, G);
          d(E.table().node()).triggerHandler("buttons-action.dt", [
            E.button(F),
            E,
            F,
            G,
          ]);
        };
        g = a.tag || h.tag;
        var y = a.clickBlurs === p ? !0 : a.clickBlurs;
        k = d("<" + g + "/>")
          .addClass(h.className)
          .addClass(e ? this.c.dom.splitDropdownButton.className : "")
          .attr("tabindex", this.s.dt.settings()[0].iTabIndex)
          .attr("aria-controls", this.s.dt.table().node().id)
          .on("click.dtb", function (v) {
            v.preventDefault();
            !k.hasClass(h.disabled) && a.action && t(v, r, k, a);
            y && k.trigger("blur");
          })
          .on("keypress.dtb", function (v) {
            13 === v.keyCode &&
              (v.preventDefault(),
              !k.hasClass(h.disabled) && a.action && t(v, r, k, a));
          });
        "a" === g.toLowerCase() && k.attr("href", "#");
        "button" === g.toLowerCase() && k.attr("type", "button");
        f.tag
          ? ((g = d("<" + f.tag + "/>")
              .html(q(a.text))
              .addClass(f.className)),
            "a" === f.tag.toLowerCase() && g.attr("href", "#"),
            k.append(g))
          : k.html(q(a.text));
        !1 === a.enabled && k.addClass(h.disabled);
        a.className && k.addClass(a.className);
        a.titleAttr && k.attr("title", q(a.titleAttr));
        a.attr && k.attr(a.attr);
        a.namespace || (a.namespace = ".dt-button-" + P++);
        a.config !== p && a.config.split && (a.split = a.config.split);
      }
      f =
        (f = this.c.dom.buttonContainer) && f.tag
          ? d("<" + f.tag + "/>")
              .addClass(f.className)
              .append(k)
          : k;
      this._addKey(a);
      this.c.buttonCreated && (f = this.c.buttonCreated(a, f));
      if (c) {
        n = d("<div/>").addClass(this.c.dom.splitWrapper.className);
        n.append(k);
        var w = d.extend(a, {
          text: this.c.dom.splitDropdown.text,
          className: this.c.dom.splitDropdown.className,
          closeButton: !1,
          attr: { "aria-haspopup": "dialog", "aria-expanded": !1 },
          align: this.c.dom.splitDropdown.align,
          splitAlignClass: this.c.dom.splitDropdown.splitAlignClass,
        });
        this._addKey(w);
        var B = function (v, E, F, G) {
            D.split.action.call(
              E.button(d("div.dt-btn-split-wrapper")[0]),
              v,
              E,
              F,
              G
            );
            d(E.table().node()).triggerHandler("buttons-action.dt", [
              E.button(F),
              E,
              F,
              G,
            ]);
            F.attr("aria-expanded", !0);
          },
          z = d(
            '<button class="' +
              this.c.dom.splitDropdown.className +
              ' dt-button"><span class="dt-btn-split-drop-arrow">' +
              this.c.dom.splitDropdown.text +
              "</span></button>"
          )
            .on("click.dtb", function (v) {
              v.preventDefault();
              v.stopPropagation();
              z.hasClass(h.disabled) || B(v, r, z, w);
              y && z.trigger("blur");
            })
            .on("keypress.dtb", function (v) {
              13 === v.keyCode &&
                (v.preventDefault(), z.hasClass(h.disabled) || B(v, r, z, w));
            });
        0 === a.split.length && z.addClass("dtb-hide-drop");
        n.append(z).attr(w.attr);
      }
      return {
        conf: a,
        node: c ? n.get(0) : k.get(0),
        inserter: c ? n : f,
        buttons: [],
        inCollection: b,
        isSplit: c,
        inSplit: e,
        collection: null,
      };
    },
    _nodeToButton: function (a, b) {
      b || (b = this.s.buttons);
      for (var c = 0, e = b.length; c < e; c++) {
        if (b[c].node === a) return b[c];
        if (b[c].buttons.length) {
          var h = this._nodeToButton(a, b[c].buttons);
          if (h) return h;
        }
      }
    },
    _nodeToHost: function (a, b) {
      b || (b = this.s.buttons);
      for (var c = 0, e = b.length; c < e; c++) {
        if (b[c].node === a) return b;
        if (b[c].buttons.length) {
          var h = this._nodeToHost(a, b[c].buttons);
          if (h) return h;
        }
      }
    },
    _keypress: function (a, b) {
      if (!b._buttonsHandled) {
        var c = function (e) {
          for (var h = 0, f = e.length; h < f; h++) {
            var g = e[h].conf,
              l = e[h].node;
            g.key &&
              (g.key === a
                ? ((b._buttonsHandled = !0), d(l).click())
                : !d.isPlainObject(g.key) ||
                  g.key.key !== a ||
                  (g.key.shiftKey && !b.shiftKey) ||
                  (g.key.altKey && !b.altKey) ||
                  (g.key.ctrlKey && !b.ctrlKey) ||
                  (g.key.metaKey && !b.metaKey) ||
                  ((b._buttonsHandled = !0), d(l).click()));
            e[h].buttons.length && c(e[h].buttons);
          }
        };
        c(this.s.buttons);
      }
    },
    _removeKey: function (a) {
      if (a.key) {
        var b = d.isPlainObject(a.key) ? a.key.key : a.key;
        a = this.s.listenKeys.split("");
        b = d.inArray(b, a);
        a.splice(b, 1);
        this.s.listenKeys = a.join("");
      }
    },
    _resolveExtends: function (a) {
      var b = this,
        c = this.s.dt,
        e,
        h = function (m) {
          for (var r = 0; !d.isPlainObject(m) && !Array.isArray(m); ) {
            if (m === p) return;
            if ("function" === typeof m) {
              if (((m = m.call(b, c, a)), !m)) return !1;
            } else if ("string" === typeof m) {
              if (!D[m]) return { html: m };
              m = D[m];
            }
            r++;
            if (30 < r) throw "Buttons: Too many iterations";
          }
          return Array.isArray(m) ? m : d.extend({}, m);
        };
      for (a = h(a); a && a.extend; ) {
        if (!D[a.extend])
          throw "Cannot extend unknown button type: " + a.extend;
        var f = h(D[a.extend]);
        if (Array.isArray(f)) return f;
        if (!f) return !1;
        var g = f.className;
        a.config !== p &&
          f.config !== p &&
          (a.config = d.extend({}, f.config, a.config));
        a = d.extend({}, f, a);
        g && a.className !== g && (a.className = g + " " + a.className);
        var l = a.postfixButtons;
        if (l) {
          a.buttons || (a.buttons = []);
          g = 0;
          for (e = l.length; g < e; g++) a.buttons.push(l[g]);
          a.postfixButtons = null;
        }
        if ((l = a.prefixButtons)) {
          a.buttons || (a.buttons = []);
          g = 0;
          for (e = l.length; g < e; g++) a.buttons.splice(g, 0, l[g]);
          a.prefixButtons = null;
        }
        a.extend = f.extend;
      }
      return a;
    },
    _popover: function (a, b, c, e) {
      e = this.c;
      var h = !1,
        f = d.extend(
          {
            align: "button-left",
            autoClose: !1,
            background: !0,
            backgroundClassName: "dt-button-background",
            closeButton: !0,
            contentClassName: e.dom.collection.className,
            collectionLayout: "",
            collectionTitle: "",
            dropup: !1,
            fade: 400,
            popoverTitle: "",
            rightAlignClassName: "dt-button-right",
            tag: e.dom.collection.tag,
          },
          c
        ),
        g = b.node(),
        l = function () {
          h = !0;
          J(d(".dt-button-collection"), f.fade, function () {
            d(this).detach();
          });
          d(
            b.buttons('[aria-haspopup="dialog"][aria-expanded="true"]').nodes()
          ).attr("aria-expanded", "false");
          d("div.dt-button-background").off("click.dtb-collection");
          x.background(!1, f.backgroundClassName, f.fade, g);
          d(A).off("resize.resize.dtb-collection");
          d("body").off(".dtb-collection");
          b.off("buttons-action.b-internal");
          b.off("destroy");
        };
      if (!1 === a) l();
      else {
        c = d(
          b.buttons('[aria-haspopup="dialog"][aria-expanded="true"]').nodes()
        );
        c.length &&
          (g.closest("div.dt-button-collection").length && (g = c.eq(0)), l());
        c = d(".dt-button", a).length;
        e = "";
        3 === c
          ? (e = "dtb-b3")
          : 2 === c
          ? (e = "dtb-b2")
          : 1 === c && (e = "dtb-b1");
        var m = d("<div/>")
          .addClass("dt-button-collection")
          .addClass(f.collectionLayout)
          .addClass(f.splitAlignClass)
          .addClass(e)
          .css("display", "none")
          .attr({ "aria-modal": !0, role: "dialog" });
        a = d(a).addClass(f.contentClassName).attr("role", "menu").appendTo(m);
        g.attr("aria-expanded", "true");
        g.parents("body")[0] !== C.body && (g = C.body.lastChild);
        f.popoverTitle
          ? m.prepend(
              '<div class="dt-button-collection-title">' +
                f.popoverTitle +
                "</div>"
            )
          : f.collectionTitle &&
            m.prepend(
              '<div class="dt-button-collection-title">' +
                f.collectionTitle +
                "</div>"
            );
        f.closeButton &&
          m
            .prepend('<div class="dtb-popover-close">x</div>')
            .addClass("dtb-collection-closeable");
        I(m.insertAfter(g), f.fade);
        c = d(b.table().container());
        var r = m.css("position");
        if ("container" === f.span || "dt-container" === f.align)
          (g = g.parent()), m.css("width", c.width());
        if ("absolute" === r) {
          var q = d(g[0].offsetParent);
          c = g.position();
          e = g.offset();
          var n = q.offset(),
            k = q.position(),
            t = A.getComputedStyle(q[0]);
          n.height = q.outerHeight();
          n.width = q.width() + parseFloat(t.paddingLeft);
          n.right = n.left + n.width;
          n.bottom = n.top + n.height;
          q = c.top + g.outerHeight();
          var y = c.left;
          m.css({ top: q, left: y });
          t = A.getComputedStyle(m[0]);
          var w = m.offset();
          w.height = m.outerHeight();
          w.width = m.outerWidth();
          w.right = w.left + w.width;
          w.bottom = w.top + w.height;
          w.marginTop = parseFloat(t.marginTop);
          w.marginBottom = parseFloat(t.marginBottom);
          f.dropup && (q = c.top - w.height - w.marginTop - w.marginBottom);
          if ("button-right" === f.align || m.hasClass(f.rightAlignClassName))
            y = c.left - w.width + g.outerWidth();
          if ("dt-container" === f.align || "container" === f.align)
            y < c.left && (y = -c.left),
              y + w.width > n.width && (y = n.width - w.width);
          k.left + y + w.width > d(A).width() &&
            (y = d(A).width() - w.width - k.left);
          0 > e.left + y && (y = -e.left);
          k.top + q + w.height > d(A).height() + d(A).scrollTop() &&
            (q = c.top - w.height - w.marginTop - w.marginBottom);
          k.top + q < d(A).scrollTop() && (q = c.top + g.outerHeight());
          m.css({ top: q, left: y });
        } else
          (r = function () {
            var B = d(A).height() / 2,
              z = m.height() / 2;
            z > B && (z = B);
            m.css("marginTop", -1 * z);
          }),
            r(),
            d(A).on("resize.dtb-collection", function () {
              r();
            });
        f.background &&
          x.background(
            !0,
            f.backgroundClassName,
            f.fade,
            f.backgroundHost || g
          );
        d("div.dt-button-background").on(
          "click.dtb-collection",
          function () {}
        );
        f.autoClose &&
          setTimeout(function () {
            b.on("buttons-action.b-internal", function (B, z, v, E) {
              E[0] !== g[0] && l();
            });
          }, 0);
        d(m).trigger("buttons-popover.dt");
        b.on("destroy", l);
        setTimeout(function () {
          h = !1;
          d("body")
            .on("click.dtb-collection", function (B) {
              if (!h) {
                var z = d.fn.addBack ? "addBack" : "andSelf",
                  v = d(B.target).parent()[0];
                ((!d(B.target).parents()[z]().filter(a).length &&
                  !d(v).hasClass("dt-buttons")) ||
                  d(B.target).hasClass("dt-button-background")) &&
                  l();
              }
            })
            .on("keyup.dtb-collection", function (B) {
              27 === B.keyCode && l();
            })
            .on("keydown.dtb-collection", function (B) {
              var z = d("a, button", a),
                v = C.activeElement;
              9 === B.keyCode &&
                (-1 === z.index(v)
                  ? (z.first().focus(), B.preventDefault())
                  : B.shiftKey
                  ? v === z[0] && (z.last().focus(), B.preventDefault())
                  : v === z.last()[0] &&
                    (z.first().focus(), B.preventDefault()));
            });
        }, 0);
      }
    },
  });
  x.background = function (a, b, c, e) {
    c === p && (c = 400);
    e || (e = C.body);
    a
      ? I(d("<div/>").addClass(b).css("display", "none").insertAfter(e), c)
      : J(d("div." + b), c, function () {
          d(this).removeClass(b).remove();
        });
  };
  x.instanceSelector = function (a, b) {
    if (a === p || null === a)
      return d.map(b, function (f) {
        return f.inst;
      });
    var c = [],
      e = d.map(b, function (f) {
        return f.name;
      }),
      h = function (f) {
        if (Array.isArray(f)) for (var g = 0, l = f.length; g < l; g++) h(f[g]);
        else
          "string" === typeof f
            ? -1 !== f.indexOf(",")
              ? h(f.split(","))
              : ((f = d.inArray(f.trim(), e)), -1 !== f && c.push(b[f].inst))
            : "number" === typeof f
            ? c.push(b[f].inst)
            : "object" === typeof f && c.push(f);
      };
    h(a);
    return c;
  };
  x.buttonSelector = function (a, b) {
    for (
      var c = [],
        e = function (l, m, r) {
          for (var q, n, k = 0, t = m.length; k < t; k++)
            if ((q = m[k]))
              (n = r !== p ? r + k : k + ""),
                l.push({ node: q.node, name: q.conf.name, idx: n }),
                q.buttons && e(l, q.buttons, n + "-");
        },
        h = function (l, m) {
          var r,
            q = [];
          e(q, m.s.buttons);
          var n = d.map(q, function (k) {
            return k.node;
          });
          if (Array.isArray(l) || l instanceof d)
            for (n = 0, r = l.length; n < r; n++) h(l[n], m);
          else if (null === l || l === p || "*" === l)
            for (n = 0, r = q.length; n < r; n++)
              c.push({ inst: m, node: q[n].node });
          else if ("number" === typeof l)
            m.s.buttons[l] && c.push({ inst: m, node: m.s.buttons[l].node });
          else if ("string" === typeof l)
            if (-1 !== l.indexOf(","))
              for (q = l.split(","), n = 0, r = q.length; n < r; n++)
                h(q[n].trim(), m);
            else if (l.match(/^\d+(\-\d+)*$/))
              (n = d.map(q, function (k) {
                return k.idx;
              })),
                c.push({ inst: m, node: q[d.inArray(l, n)].node });
            else if (-1 !== l.indexOf(":name"))
              for (l = l.replace(":name", ""), n = 0, r = q.length; n < r; n++)
                q[n].name === l && c.push({ inst: m, node: q[n].node });
            else
              d(n)
                .filter(l)
                .each(function () {
                  c.push({ inst: m, node: this });
                });
          else
            "object" === typeof l &&
              l.nodeName &&
              ((q = d.inArray(l, n)),
              -1 !== q && c.push({ inst: m, node: n[q] }));
        },
        f = 0,
        g = a.length;
      f < g;
      f++
    )
      h(b, a[f]);
    return c;
  };
  x.stripData = function (a, b) {
    if ("string" !== typeof a) return a;
    a = a.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
    a = a.replace(/<!\-\-.*?\-\->/g, "");
    if (!b || b.stripHtml) a = a.replace(/<[^>]*>/g, "");
    if (!b || b.trim) a = a.replace(/^\s+|\s+$/g, "");
    if (!b || b.stripNewlines) a = a.replace(/\n/g, " ");
    if (!b || b.decodeEntities) (M.innerHTML = a), (a = M.value);
    return a;
  };
  x.defaults = {
    buttons: ["copy", "excel", "csv", "pdf", "print"],
    name: "main",
    tabIndex: 0,
    dom: {
      container: { tag: "div", className: "dt-buttons" },
      collection: { tag: "div", className: "" },
      button: {
        tag: "button",
        className: "dt-button",
        active: "active",
        disabled: "disabled",
        spacerClass: "",
      },
      buttonLiner: { tag: "span", className: "" },
      split: { tag: "div", className: "dt-button-split" },
      splitWrapper: { tag: "div", className: "dt-btn-split-wrapper" },
      splitDropdown: {
        tag: "button",
        text: "&#x25BC;",
        className: "dt-btn-split-drop",
        align: "split-right",
        splitAlignClass: "dt-button-split-left",
      },
      splitDropdownButton: {
        tag: "button",
        className: "dt-btn-split-drop-button dt-button",
      },
      splitCollection: { tag: "div", className: "dt-button-split-collection" },
    },
  };
  x.version = "2.2.3";
  d.extend(D, {
    collection: {
      text: function (a) {
        return a.i18n("buttons.collection", "Collection");
      },
      className: "buttons-collection",
      closeButton: !1,
      init: function (a, b, c) {
        b.attr("aria-expanded", !1);
      },
      action: function (a, b, c, e) {
        e._collection.parents("body").length
          ? this.popover(!1, e)
          : this.popover(e._collection, e);
        "keypress" === a.type && d("a, button", e._collection).eq(0).focus();
      },
      attr: { "aria-haspopup": "dialog" },
    },
    split: {
      text: function (a) {
        return a.i18n("buttons.split", "Split");
      },
      className: "buttons-split",
      closeButton: !1,
      init: function (a, b, c) {
        return b.attr("aria-expanded", !1);
      },
      action: function (a, b, c, e) {
        this.popover(e._collection, e);
      },
      attr: { "aria-haspopup": "dialog" },
    },
    copy: function (a, b) {
      if (D.copyHtml5) return "copyHtml5";
    },
    csv: function (a, b) {
      if (D.csvHtml5 && D.csvHtml5.available(a, b)) return "csvHtml5";
    },
    excel: function (a, b) {
      if (D.excelHtml5 && D.excelHtml5.available(a, b)) return "excelHtml5";
    },
    pdf: function (a, b) {
      if (D.pdfHtml5 && D.pdfHtml5.available(a, b)) return "pdfHtml5";
    },
    pageLength: function (a) {
      a = a.settings()[0].aLengthMenu;
      var b = [],
        c = [];
      if (Array.isArray(a[0])) (b = a[0]), (c = a[1]);
      else
        for (var e = 0; e < a.length; e++) {
          var h = a[e];
          d.isPlainObject(h)
            ? (b.push(h.value), c.push(h.label))
            : (b.push(h), c.push(h));
        }
      return {
        extend: "collection",
        text: function (f) {
          return f.i18n(
            "buttons.pageLength",
            { "-1": "Show all rows", _: "Show %d rows" },
            f.page.len()
          );
        },
        className: "buttons-page-length",
        autoClose: !0,
        buttons: d.map(b, function (f, g) {
          return {
            text: c[g],
            className: "button-page-length",
            action: function (l, m) {
              m.page.len(f).draw();
            },
            init: function (l, m, r) {
              var q = this;
              m = function () {
                q.active(l.page.len() === f);
              };
              l.on("length.dt" + r.namespace, m);
              m();
            },
            destroy: function (l, m, r) {
              l.off("length.dt" + r.namespace);
            },
          };
        }),
        init: function (f, g, l) {
          var m = this;
          f.on("length.dt" + l.namespace, function () {
            m.text(l.text);
          });
        },
        destroy: function (f, g, l) {
          f.off("length.dt" + l.namespace);
        },
      };
    },
    spacer: {
      style: "empty",
      spacer: !0,
      text: function (a) {
        return a.i18n("buttons.spacer", "");
      },
    },
  });
  u.Api.register("buttons()", function (a, b) {
    b === p && ((b = a), (a = p));
    this.selector.buttonGroup = a;
    var c = this.iterator(
      !0,
      "table",
      function (e) {
        if (e._buttons)
          return x.buttonSelector(x.instanceSelector(a, e._buttons), b);
      },
      !0
    );
    c._groupSelector = a;
    return c;
  });
  u.Api.register("button()", function (a, b) {
    a = this.buttons(a, b);
    1 < a.length && a.splice(1, a.length);
    return a;
  });
  u.Api.registerPlural("buttons().active()", "button().active()", function (a) {
    return a === p
      ? this.map(function (b) {
          return b.inst.active(b.node);
        })
      : this.each(function (b) {
          b.inst.active(b.node, a);
        });
  });
  u.Api.registerPlural("buttons().action()", "button().action()", function (a) {
    return a === p
      ? this.map(function (b) {
          return b.inst.action(b.node);
        })
      : this.each(function (b) {
          b.inst.action(b.node, a);
        });
  });
  u.Api.registerPlural(
    "buttons().collectionRebuild()",
    "button().collectionRebuild()",
    function (a) {
      return this.each(function (b) {
        for (var c = 0; c < a.length; c++)
          "object" === typeof a[c] && (a[c].parentConf = b);
        b.inst.collectionRebuild(b.node, a);
      });
    }
  );
  u.Api.register(["buttons().enable()", "button().enable()"], function (a) {
    return this.each(function (b) {
      b.inst.enable(b.node, a);
    });
  });
  u.Api.register(["buttons().disable()", "button().disable()"], function () {
    return this.each(function (a) {
      a.inst.disable(a.node);
    });
  });
  u.Api.register("button().index()", function () {
    var a = null;
    this.each(function (b) {
      b = b.inst.index(b.node);
      null !== b && (a = b);
    });
    return a;
  });
  u.Api.registerPlural("buttons().nodes()", "button().node()", function () {
    var a = d();
    d(
      this.each(function (b) {
        a = a.add(b.inst.node(b.node));
      })
    );
    return a;
  });
  u.Api.registerPlural(
    "buttons().processing()",
    "button().processing()",
    function (a) {
      return a === p
        ? this.map(function (b) {
            return b.inst.processing(b.node);
          })
        : this.each(function (b) {
            b.inst.processing(b.node, a);
          });
    }
  );
  u.Api.registerPlural("buttons().text()", "button().text()", function (a) {
    return a === p
      ? this.map(function (b) {
          return b.inst.text(b.node);
        })
      : this.each(function (b) {
          b.inst.text(b.node, a);
        });
  });
  u.Api.registerPlural(
    "buttons().trigger()",
    "button().trigger()",
    function () {
      return this.each(function (a) {
        a.inst.node(a.node).trigger("click");
      });
    }
  );
  u.Api.register("button().popover()", function (a, b) {
    return this.map(function (c) {
      return c.inst._popover(a, this.button(this[0].node), b);
    });
  });
  u.Api.register("buttons().containers()", function () {
    var a = d(),
      b = this._groupSelector;
    this.iterator(!0, "table", function (c) {
      if (c._buttons) {
        c = x.instanceSelector(b, c._buttons);
        for (var e = 0, h = c.length; e < h; e++) a = a.add(c[e].container());
      }
    });
    return a;
  });
  u.Api.register("buttons().container()", function () {
    return this.containers().eq(0);
  });
  u.Api.register("button().add()", function (a, b, c) {
    var e = this.context;
    e.length &&
      ((e = x.instanceSelector(this._groupSelector, e[0]._buttons)),
      e.length && e[0].add(b, a, c));
    return this.button(this._groupSelector, a);
  });
  u.Api.register("buttons().destroy()", function () {
    this.pluck("inst")
      .unique()
      .each(function (a) {
        a.destroy();
      });
    return this;
  });
  u.Api.registerPlural("buttons().remove()", "buttons().remove()", function () {
    this.each(function (a) {
      a.inst.remove(a.node);
    });
    return this;
  });
  var H;
  u.Api.register("buttons.info()", function (a, b, c) {
    var e = this;
    if (!1 === a)
      return (
        this.off("destroy.btn-info"),
        J(d("#datatables_buttons_info"), 400, function () {
          d(this).remove();
        }),
        clearTimeout(H),
        (H = null),
        this
      );
    H && clearTimeout(H);
    d("#datatables_buttons_info").length &&
      d("#datatables_buttons_info").remove();
    a = a ? "<h2>" + a + "</h2>" : "";
    I(
      d('<div id="datatables_buttons_info" class="dt-button-info"/>')
        .html(a)
        .append(d("<div/>")["string" === typeof b ? "html" : "append"](b))
        .css("display", "none")
        .appendTo("body")
    );
    c !== p &&
      0 !== c &&
      (H = setTimeout(function () {
        e.buttons.info(!1);
      }, c));
    this.on("destroy.btn-info", function () {
      e.buttons.info(!1);
    });
    return this;
  });
  u.Api.register("buttons.exportData()", function (a) {
    if (this.context.length) return Q(new u.Api(this.context[0]), a);
  });
  u.Api.register("buttons.exportInfo()", function (a) {
    a || (a = {});
    var b = a;
    var c =
      "*" === b.filename &&
      "*" !== b.title &&
      b.title !== p &&
      null !== b.title &&
      "" !== b.title
        ? b.title
        : b.filename;
    "function" === typeof c && (c = c());
    c === p || null === c
      ? (c = null)
      : (-1 !== c.indexOf("*") &&
          (c = c.replace("*", d("head > title").text()).trim()),
        (c = c.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g, "")),
        (b = K(b.extension)) || (b = ""),
        (c += b));
    b = K(a.title);
    b =
      null === b
        ? null
        : -1 !== b.indexOf("*")
        ? b.replace("*", d("head > title").text() || "Exported data")
        : b;
    return {
      filename: c,
      title: b,
      messageTop: N(this, a.message || a.messageTop, "top"),
      messageBottom: N(this, a.messageBottom, "bottom"),
    };
  });
  var K = function (a) {
      return null === a || a === p ? null : "function" === typeof a ? a() : a;
    },
    N = function (a, b, c) {
      b = K(b);
      if (null === b) return null;
      a = d("caption", a.table().container()).eq(0);
      return "*" === b
        ? a.css("caption-side") !== c
          ? null
          : a.length
          ? a.text()
          : ""
        : b;
    },
    M = d("<textarea/>")[0],
    Q = function (a, b) {
      var c = d.extend(
        !0,
        {},
        {
          rows: null,
          columns: "",
          modifier: { search: "applied", order: "applied" },
          orthogonal: "display",
          stripHtml: !0,
          stripNewlines: !0,
          decodeEntities: !0,
          trim: !0,
          format: {
            header: function (t) {
              return x.stripData(t, c);
            },
            footer: function (t) {
              return x.stripData(t, c);
            },
            body: function (t) {
              return x.stripData(t, c);
            },
          },
          customizeData: null,
        },
        b
      );
      b = a
        .columns(c.columns)
        .indexes()
        .map(function (t) {
          var y = a.column(t).header();
          return c.format.header(y.innerHTML, t, y);
        })
        .toArray();
      var e = a.table().footer()
          ? a
              .columns(c.columns)
              .indexes()
              .map(function (t) {
                var y = a.column(t).footer();
                return c.format.footer(y ? y.innerHTML : "", t, y);
              })
              .toArray()
          : null,
        h = d.extend({}, c.modifier);
      a.select &&
        "function" === typeof a.select.info &&
        h.selected === p &&
        a.rows(c.rows, d.extend({ selected: !0 }, h)).any() &&
        d.extend(h, { selected: !0 });
      h = a.rows(c.rows, h).indexes().toArray();
      var f = a.cells(h, c.columns);
      h = f.render(c.orthogonal).toArray();
      f = f.nodes().toArray();
      for (
        var g = b.length, l = [], m = 0, r = 0, q = 0 < g ? h.length / g : 0;
        r < q;
        r++
      ) {
        for (var n = [g], k = 0; k < g; k++)
          (n[k] = c.format.body(h[m], r, k, f[m])), m++;
        l[r] = n;
      }
      b = { header: b, footer: e, body: l };
      c.customizeData && c.customizeData(b);
      return b;
    };
  d.fn.dataTable.Buttons = x;
  d.fn.DataTable.Buttons = x;
  d(C).on("init.dt plugin-init.dt", function (a, b) {
    "dt" === a.namespace &&
      (a = b.oInit.buttons || u.defaults.buttons) &&
      !b._buttons &&
      new x(b, a).container();
  });
  u.ext.feature.push({ fnInit: L, cFeature: "B" });
  u.ext.features && u.ext.features.register("buttons", L);
  return x;
});

/*!
 Bootstrap integration for DataTables' Buttons
 ©2016 SpryMedia Ltd - datatables.net/license
*/
(function (c) {
  "function" === typeof define && define.amd
    ? define(
        ["jquery", "datatables.net-bs5", "datatables.net-buttons"],
        function (a) {
          return c(a, window, document);
        }
      )
    : "object" === typeof exports
    ? (module.exports = function (a, b) {
        a || (a = window);
        (b && b.fn.dataTable) || (b = require("datatables.net-bs5")(a, b).$);
        b.fn.dataTable.Buttons || require("datatables.net-buttons")(a, b);
        return c(b, a, a.document);
      })
    : c(jQuery, window, document);
})(function (c, a, b, f) {
  a = c.fn.dataTable;
  c.extend(!0, a.Buttons.defaults, {
    dom: {
      container: { className: "dt-buttons btn-group flex-wrap" },
      button: { className: "btn btn-secondary" },
      collection: {
        tag: "div",
        className: "dropdown-menu",
        closeButton: !1,
        button: {
          tag: "a",
          className: "dt-button dropdown-item",
          active: "active",
          disabled: "disabled",
        },
      },
      splitWrapper: {
        tag: "div",
        className: "dt-btn-split-wrapper btn-group",
        closeButton: !1,
      },
      splitDropdown: {
        tag: "button",
        text: "",
        className:
          "btn btn-secondary dt-btn-split-drop dropdown-toggle dropdown-toggle-split",
        closeButton: !1,
        align: "split-left",
        splitAlignClass: "dt-button-split-left",
      },
      splitDropdownButton: {
        tag: "button",
        className: "dt-btn-split-drop-button btn btn-secondary",
        closeButton: !1,
      },
    },
    buttonCreated: function (e, d) {
      return e.buttons ? c('<div class="btn-group"/>').append(d) : d;
    },
  });
  a.ext.buttons.collection.className += " dropdown-toggle";
  a.ext.buttons.collection.rightAlignClassName = "dropdown-menu-right";
  return a.Buttons;
});

/*!
 Column visibility buttons for Buttons and DataTables.
 2016 SpryMedia Ltd - datatables.net/license
*/
(function (h) {
  "function" === typeof define && define.amd
    ? define(
        ["jquery", "datatables.net", "datatables.net-buttons"],
        function (e) {
          return h(e, window, document);
        }
      )
    : "object" === typeof exports
    ? (module.exports = function (e, g) {
        e || (e = window);
        (g && g.fn.dataTable) || (g = require("datatables.net")(e, g).$);
        g.fn.dataTable.Buttons || require("datatables.net-buttons")(e, g);
        return h(g, e, e.document);
      })
    : h(jQuery, window, document);
})(function (h, e, g, l) {
  e = h.fn.dataTable;
  h.extend(e.ext.buttons, {
    colvis: function (b, a) {
      var c = null,
        d = {
          extend: "collection",
          init: function (f, k) {
            c = k;
          },
          text: function (f) {
            return f.i18n("buttons.colvis", "Column visibility");
          },
          className: "buttons-colvis",
          closeButton: !1,
          buttons: [
            {
              extend: "columnsToggle",
              columns: a.columns,
              columnText: a.columnText,
            },
          ],
        };
      b.on("column-reorder.dt" + a.namespace, function (f, k, m) {
        b.button(null, b.button(null, c).node()).collectionRebuild([
          {
            extend: "columnsToggle",
            columns: a.columns,
            columnText: a.columnText,
          },
        ]);
      });
      return d;
    },
    columnsToggle: function (b, a) {
      return b
        .columns(a.columns)
        .indexes()
        .map(function (c) {
          return {
            extend: "columnToggle",
            columns: c,
            columnText: a.columnText,
          };
        })
        .toArray();
    },
    columnToggle: function (b, a) {
      return {
        extend: "columnVisibility",
        columns: a.columns,
        columnText: a.columnText,
      };
    },
    columnsVisibility: function (b, a) {
      return b
        .columns(a.columns)
        .indexes()
        .map(function (c) {
          return {
            extend: "columnVisibility",
            columns: c,
            visibility: a.visibility,
            columnText: a.columnText,
          };
        })
        .toArray();
    },
    columnVisibility: {
      columns: l,
      text: function (b, a, c) {
        return c._columnText(b, c);
      },
      className: "buttons-columnVisibility",
      action: function (b, a, c, d) {
        b = a.columns(d.columns);
        a = b.visible();
        b.visible(d.visibility !== l ? d.visibility : !(a.length && a[0]));
      },
      init: function (b, a, c) {
        var d = this;
        a.attr("data-cv-idx", c.columns);
        b.on("column-visibility.dt" + c.namespace, function (f, k) {
          k.bDestroying ||
            k.nTable != b.settings()[0].nTable ||
            d.active(b.column(c.columns).visible());
        }).on("column-reorder.dt" + c.namespace, function (f, k, m) {
          c.destroying ||
            1 !== b.columns(c.columns).count() ||
            (d.text(c._columnText(b, c)),
            d.active(b.column(c.columns).visible()));
        });
        this.active(b.column(c.columns).visible());
      },
      destroy: function (b, a, c) {
        b.off("column-visibility.dt" + c.namespace).off(
          "column-reorder.dt" + c.namespace
        );
      },
      _columnText: function (b, a) {
        var c = b.column(a.columns).index(),
          d = b.settings()[0].aoColumns[c].sTitle;
        d || (d = b.column(c).header().innerHTML);
        d = d
          .replace(/\n/g, " ")
          .replace(/<br\s*\/?>/gi, " ")
          .replace(/<select(.*?)<\/select>/g, "")
          .replace(/<!\-\-.*?\-\->/g, "")
          .replace(/<.*?>/g, "")
          .replace(/^\s+|\s+$/g, "");
        return a.columnText ? a.columnText(b, c, d) : d;
      },
    },
    colvisRestore: {
      className: "buttons-colvisRestore",
      text: function (b) {
        return b.i18n("buttons.colvisRestore", "Restore visibility");
      },
      init: function (b, a, c) {
        c._visOriginal = b
          .columns()
          .indexes()
          .map(function (d) {
            return b.column(d).visible();
          })
          .toArray();
      },
      action: function (b, a, c, d) {
        a.columns().every(function (f) {
          f =
            a.colReorder && a.colReorder.transpose
              ? a.colReorder.transpose(f, "toOriginal")
              : f;
          this.visible(d._visOriginal[f]);
        });
      },
    },
    colvisGroup: {
      className: "buttons-colvisGroup",
      action: function (b, a, c, d) {
        a.columns(d.show).visible(!0, !1);
        a.columns(d.hide).visible(!1, !1);
        a.columns.adjust();
      },
      show: [],
      hide: [],
    },
  });
  return e.Buttons;
});

/*!
 HTML5 export buttons for Buttons and DataTables.
 2016 SpryMedia Ltd - datatables.net/license

 FileSaver.js (1.3.3) - MIT license
 Copyright © 2016 Eli Grey - http://eligrey.com
*/
(function (n) {
  "function" === typeof define && define.amd
    ? define(
        ["jquery", "datatables.net", "datatables.net-buttons"],
        function (u) {
          return n(u, window, document);
        }
      )
    : "object" === typeof exports
    ? (module.exports = function (u, x, E, F) {
        u || (u = window);
        (x && x.fn.dataTable) || (x = require("datatables.net")(u, x).$);
        x.fn.dataTable.Buttons || require("datatables.net-buttons")(u, x);
        return n(x, u, u.document, E, F);
      })
    : n(jQuery, window, document);
})(function (n, u, x, E, F, B) {
  function I(a) {
    for (var c = ""; 0 <= a; )
      (c = String.fromCharCode((a % 26) + 65) + c),
        (a = Math.floor(a / 26) - 1);
    return c;
  }
  function O(a, c) {
    J === B &&
      (J =
        -1 ===
        M.serializeToString(
          new u.DOMParser().parseFromString(
            P["xl/worksheets/sheet1.xml"],
            "text/xml"
          )
        ).indexOf("xmlns:r"));
    n.each(c, function (d, b) {
      if (n.isPlainObject(b)) (d = a.folder(d)), O(d, b);
      else {
        if (J) {
          var m = b.childNodes[0],
            e,
            f = [];
          for (e = m.attributes.length - 1; 0 <= e; e--) {
            var g = m.attributes[e].nodeName;
            var p = m.attributes[e].nodeValue;
            -1 !== g.indexOf(":") &&
              (f.push({ name: g, value: p }), m.removeAttribute(g));
          }
          e = 0;
          for (g = f.length; e < g; e++)
            (p = b.createAttribute(
              f[e].name.replace(":", "_dt_b_namespace_token_")
            )),
              (p.value = f[e].value),
              m.setAttributeNode(p);
        }
        b = M.serializeToString(b);
        J &&
          (-1 === b.indexOf("<?xml") &&
            (b = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' + b),
          (b = b.replace(/_dt_b_namespace_token_/g, ":")),
          (b = b.replace(/xmlns:NS[\d]+="" NS[\d]+:/g, "")));
        b = b.replace(/<([^<>]*?) xmlns=""([^<>]*?)>/g, "<$1 $2>");
        a.file(d, b);
      }
    });
  }
  function y(a, c, d) {
    var b = a.createElement(c);
    d &&
      (d.attr && n(b).attr(d.attr),
      d.children &&
        n.each(d.children, function (m, e) {
          b.appendChild(e);
        }),
      null !== d.text &&
        d.text !== B &&
        b.appendChild(a.createTextNode(d.text)));
    return b;
  }
  function V(a, c) {
    var d = a.header[c].length;
    a.footer && a.footer[c].length > d && (d = a.footer[c].length);
    for (var b = 0, m = a.body.length; b < m; b++) {
      var e = a.body[b][c];
      e = null !== e && e !== B ? e.toString() : "";
      -1 !== e.indexOf("\n")
        ? ((e = e.split("\n")),
          e.sort(function (f, g) {
            return g.length - f.length;
          }),
          (e = e[0].length))
        : (e = e.length);
      e > d && (d = e);
      if (40 < d) return 54;
    }
    d *= 1.35;
    return 6 < d ? d : 6;
  }
  var D = n.fn.dataTable;
  D.Buttons.pdfMake = function (a) {
    if (!a) return F || u.pdfMake;
    F = a;
  };
  D.Buttons.jszip = function (a) {
    if (!a) return E || u.JSZip;
    E = a;
  };
  var K = (function (a) {
    if (
      !(
        "undefined" === typeof a ||
        ("undefined" !== typeof navigator &&
          /MSIE [1-9]\./.test(navigator.userAgent))
      )
    ) {
      var c = a.document.createElementNS("http://www.w3.org/1999/xhtml", "a"),
        d = "download" in c,
        b = /constructor/i.test(a.HTMLElement) || a.safari,
        m = /CriOS\/[\d]+/.test(navigator.userAgent),
        e = function (h) {
          (a.setImmediate || a.setTimeout)(function () {
            throw h;
          }, 0);
        },
        f = function (h) {
          setTimeout(function () {
            "string" === typeof h
              ? (a.URL || a.webkitURL || a).revokeObjectURL(h)
              : h.remove();
          }, 4e4);
        },
        g = function (h) {
          return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
            h.type
          )
            ? new Blob([String.fromCharCode(65279), h], { type: h.type })
            : h;
        },
        p = function (h, q, v) {
          v || (h = g(h));
          var r = this,
            w = "application/octet-stream" === h.type,
            C = function () {
              var l = ["writestart", "progress", "write", "writeend"];
              l = [].concat(l);
              for (var z = l.length; z--; ) {
                var G = r["on" + l[z]];
                if ("function" === typeof G)
                  try {
                    G.call(r, r);
                  } catch (A) {
                    e(A);
                  }
              }
            };
          r.readyState = r.INIT;
          if (d) {
            var k = (a.URL || a.webkitURL || a).createObjectURL(h);
            setTimeout(function () {
              c.href = k;
              c.download = q;
              var l = new MouseEvent("click");
              c.dispatchEvent(l);
              C();
              f(k);
              r.readyState = r.DONE;
            });
          } else
            (function () {
              if ((m || (w && b)) && a.FileReader) {
                var l = new FileReader();
                l.onloadend = function () {
                  var z = m
                    ? l.result
                    : l.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                  a.open(z, "_blank") || (a.location.href = z);
                  r.readyState = r.DONE;
                  C();
                };
                l.readAsDataURL(h);
                r.readyState = r.INIT;
              } else
                k || (k = (a.URL || a.webkitURL || a).createObjectURL(h)),
                  w
                    ? (a.location.href = k)
                    : a.open(k, "_blank") || (a.location.href = k),
                  (r.readyState = r.DONE),
                  C(),
                  f(k);
            })();
        },
        t = p.prototype;
      if ("undefined" !== typeof navigator && navigator.msSaveOrOpenBlob)
        return function (h, q, v) {
          q = q || h.name || "download";
          v || (h = g(h));
          return navigator.msSaveOrOpenBlob(h, q);
        };
      t.abort = function () {};
      t.readyState = t.INIT = 0;
      t.WRITING = 1;
      t.DONE = 2;
      t.error =
        t.onwritestart =
        t.onprogress =
        t.onwrite =
        t.onabort =
        t.onerror =
        t.onwriteend =
          null;
      return function (h, q, v) {
        return new p(h, q || h.name || "download", v);
      };
    }
  })(
    ("undefined" !== typeof self && self) ||
      ("undefined" !== typeof u && u) ||
      this.content
  );
  D.fileSave = K;
  var Q = function (a) {
      var c = "Sheet1";
      a.sheetName && (c = a.sheetName.replace(/[\[\]\*\/\\\?:]/g, ""));
      return c;
    },
    R = function (a) {
      return a.newline
        ? a.newline
        : navigator.userAgent.match(/Windows/)
        ? "\r\n"
        : "\n";
    },
    S = function (a, c) {
      var d = R(c);
      a = a.buttons.exportData(c.exportOptions);
      var b = c.fieldBoundary,
        m = c.fieldSeparator,
        e = new RegExp(b, "g"),
        f = c.escapeChar !== B ? c.escapeChar : "\\",
        g = function (v) {
          for (var r = "", w = 0, C = v.length; w < C; w++)
            0 < w && (r += m),
              (r += b ? b + ("" + v[w]).replace(e, f + b) + b : v[w]);
          return r;
        },
        p = c.header ? g(a.header) + d : "";
      c = c.footer && a.footer ? d + g(a.footer) : "";
      for (var t = [], h = 0, q = a.body.length; h < q; h++)
        t.push(g(a.body[h]));
      return { str: p + t.join(d) + c, rows: t.length };
    },
    T = function () {
      if (
        -1 === navigator.userAgent.indexOf("Safari") ||
        -1 !== navigator.userAgent.indexOf("Chrome") ||
        -1 !== navigator.userAgent.indexOf("Opera")
      )
        return !1;
      var a = navigator.userAgent.match(/AppleWebKit\/(\d+\.\d+)/);
      return a && 1 < a.length && 603.1 > 1 * a[1] ? !0 : !1;
    };
  try {
    var M = new XMLSerializer(),
      J;
  } catch (a) {}
  var P = {
      "_rels/.rels":
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
      "xl/_rels/workbook.xml.rels":
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',
      "[Content_Types].xml":
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',
      "xl/workbook.xml":
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="Sheet1" sheetId="1" r:id="rId1"/></sheets><definedNames/></workbook>',
      "xl/worksheets/sheet1.xml":
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/><mergeCells count="0"/></worksheet>',
      "xl/styles.xml":
        '<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="6"><numFmt numFmtId="164" formatCode="#,##0.00_- [$$-45C]"/><numFmt numFmtId="165" formatCode="&quot;£&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$€-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="68"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="1" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="2" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="14" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>',
    },
    U = [
      {
        match: /^\-?\d+\.\d%$/,
        style: 60,
        fmt: function (a) {
          return a / 100;
        },
      },
      {
        match: /^\-?\d+\.?\d*%$/,
        style: 56,
        fmt: function (a) {
          return a / 100;
        },
      },
      { match: /^\-?\$[\d,]+.?\d*$/, style: 57 },
      { match: /^\-?£[\d,]+.?\d*$/, style: 58 },
      { match: /^\-?€[\d,]+.?\d*$/, style: 59 },
      { match: /^\-?\d+$/, style: 65 },
      { match: /^\-?\d+\.\d{2}$/, style: 66 },
      {
        match: /^\([\d,]+\)$/,
        style: 61,
        fmt: function (a) {
          return -1 * a.replace(/[\(\)]/g, "");
        },
      },
      {
        match: /^\([\d,]+\.\d{2}\)$/,
        style: 62,
        fmt: function (a) {
          return -1 * a.replace(/[\(\)]/g, "");
        },
      },
      { match: /^\-?[\d,]+$/, style: 63 },
      { match: /^\-?[\d,]+\.\d{2}$/, style: 64 },
      {
        match: /^[\d]{4}\-[01][\d]\-[0123][\d]$/,
        style: 67,
        fmt: function (a) {
          return Math.round(25569 + Date.parse(a) / 864e5);
        },
      },
    ];
  D.ext.buttons.copyHtml5 = {
    className: "buttons-copy buttons-html5",
    text: function (a) {
      return a.i18n("buttons.copy", "Copy");
    },
    action: function (a, c, d, b) {
      this.processing(!0);
      var m = this;
      a = S(c, b);
      var e = c.buttons.exportInfo(b),
        f = R(b),
        g = a.str;
      d = n("<div/>").css({
        height: 1,
        width: 1,
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
      });
      e.title && (g = e.title + f + f + g);
      e.messageTop && (g = e.messageTop + f + f + g);
      e.messageBottom && (g = g + f + f + e.messageBottom);
      b.customize && (g = b.customize(g, b, c));
      b = n("<textarea readonly/>").val(g).appendTo(d);
      if (x.queryCommandSupported("copy")) {
        d.appendTo(c.table().container());
        b[0].focus();
        b[0].select();
        try {
          var p = x.execCommand("copy");
          d.remove();
          if (p) {
            c.buttons.info(
              c.i18n("buttons.copyTitle", "Copy to clipboard"),
              c.i18n(
                "buttons.copySuccess",
                {
                  1: "Copied one row to clipboard",
                  _: "Copied %d rows to clipboard",
                },
                a.rows
              ),
              2e3
            );
            this.processing(!1);
            return;
          }
        } catch (q) {}
      }
      p = n(
        "<span>" +
          c.i18n(
            "buttons.copyKeys",
            "Press <i>ctrl</i> or <i>⌘</i> + <i>C</i> to copy the table data<br>to your system clipboard.<br><br>To cancel, click this message or press escape."
          ) +
          "</span>"
      ).append(d);
      c.buttons.info(c.i18n("buttons.copyTitle", "Copy to clipboard"), p, 0);
      b[0].focus();
      b[0].select();
      var t = n(p).closest(".dt-button-info"),
        h = function () {
          t.off("click.buttons-copy");
          n(x).off(".buttons-copy");
          c.buttons.info(!1);
        };
      t.on("click.buttons-copy", h);
      n(x)
        .on("keydown.buttons-copy", function (q) {
          27 === q.keyCode && (h(), m.processing(!1));
        })
        .on("copy.buttons-copy cut.buttons-copy", function () {
          h();
          m.processing(!1);
        });
    },
    exportOptions: {},
    fieldSeparator: "\t",
    fieldBoundary: "",
    header: !0,
    footer: !1,
    title: "*",
    messageTop: "*",
    messageBottom: "*",
  };
  D.ext.buttons.csvHtml5 = {
    bom: !1,
    className: "buttons-csv buttons-html5",
    available: function () {
      return u.FileReader !== B && u.Blob;
    },
    text: function (a) {
      return a.i18n("buttons.csv", "CSV");
    },
    action: function (a, c, d, b) {
      this.processing(!0);
      a = S(c, b).str;
      d = c.buttons.exportInfo(b);
      var m = b.charset;
      b.customize && (a = b.customize(a, b, c));
      !1 !== m
        ? (m || (m = x.characterSet || x.charset), m && (m = ";charset=" + m))
        : (m = "");
      b.bom && (a = String.fromCharCode(65279) + a);
      K(new Blob([a], { type: "text/csv" + m }), d.filename, !0);
      this.processing(!1);
    },
    filename: "*",
    extension: ".csv",
    exportOptions: {},
    fieldSeparator: ",",
    fieldBoundary: '"',
    escapeChar: '"',
    charset: null,
    header: !0,
    footer: !1,
  };
  D.ext.buttons.excelHtml5 = {
    className: "buttons-excel buttons-html5",
    available: function () {
      return u.FileReader !== B && (E || u.JSZip) !== B && !T() && M;
    },
    text: function (a) {
      return a.i18n("buttons.excel", "Excel");
    },
    action: function (a, c, d, b) {
      this.processing(!0);
      var m = this,
        e = 0;
      a = function (k) {
        return n.parseXML(P[k]);
      };
      var f = a("xl/worksheets/sheet1.xml"),
        g = f.getElementsByTagName("sheetData")[0];
      a = {
        _rels: { ".rels": a("_rels/.rels") },
        xl: {
          _rels: { "workbook.xml.rels": a("xl/_rels/workbook.xml.rels") },
          "workbook.xml": a("xl/workbook.xml"),
          "styles.xml": a("xl/styles.xml"),
          worksheets: { "sheet1.xml": f },
        },
        "[Content_Types].xml": a("[Content_Types].xml"),
      };
      var p = c.buttons.exportData(b.exportOptions),
        t,
        h,
        q = function (k) {
          t = e + 1;
          h = y(f, "row", { attr: { r: t } });
          for (var l = 0, z = k.length; l < z; l++) {
            var G = I(l) + "" + t,
              A = null;
            if (null === k[l] || k[l] === B || "" === k[l])
              if (!0 === b.createEmptyCells) k[l] = "";
              else continue;
            var H = k[l];
            k[l] = "function" === typeof k[l].trim ? k[l].trim() : k[l];
            for (var N = 0, W = U.length; N < W; N++) {
              var L = U[N];
              if (k[l].match && !k[l].match(/^0\d+/) && k[l].match(L.match)) {
                A = k[l].replace(/[^\d\.\-]/g, "");
                L.fmt && (A = L.fmt(A));
                A = y(f, "c", {
                  attr: { r: G, s: L.style },
                  children: [y(f, "v", { text: A })],
                });
                break;
              }
            }
            A ||
              ("number" === typeof k[l] ||
              (k[l].match &&
                k[l].match(/^-?\d+(\.\d+)?([eE]\-?\d+)?$/) &&
                !k[l].match(/^0\d+/))
                ? (A = y(f, "c", {
                    attr: { t: "n", r: G },
                    children: [y(f, "v", { text: k[l] })],
                  }))
                : ((H = H.replace
                    ? H.replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, "")
                    : H),
                  (A = y(f, "c", {
                    attr: { t: "inlineStr", r: G },
                    children: {
                      row: y(f, "is", {
                        children: {
                          row: y(f, "t", {
                            text: H,
                            attr: { "xml:space": "preserve" },
                          }),
                        },
                      }),
                    },
                  }))));
            h.appendChild(A);
          }
          g.appendChild(h);
          e++;
        };
      b.customizeData && b.customizeData(p);
      var v = function (k, l) {
          var z = n("mergeCells", f);
          z[0].appendChild(
            y(f, "mergeCell", { attr: { ref: "A" + k + ":" + I(l) + k } })
          );
          z.attr("count", parseFloat(z.attr("count")) + 1);
          n("row:eq(" + (k - 1) + ") c", f).attr("s", "51");
        },
        r = c.buttons.exportInfo(b);
      r.title && (q([r.title], e), v(e, p.header.length - 1));
      r.messageTop && (q([r.messageTop], e), v(e, p.header.length - 1));
      b.header && (q(p.header, e), n("row:last c", f).attr("s", "2"));
      d = e;
      var w = 0;
      for (var C = p.body.length; w < C; w++) q(p.body[w], e);
      w = e;
      b.footer &&
        p.footer &&
        (q(p.footer, e), n("row:last c", f).attr("s", "2"));
      r.messageBottom && (q([r.messageBottom], e), v(e, p.header.length - 1));
      q = y(f, "cols");
      n("worksheet", f).prepend(q);
      v = 0;
      for (C = p.header.length; v < C; v++)
        q.appendChild(
          y(f, "col", {
            attr: { min: v + 1, max: v + 1, width: V(p, v), customWidth: 1 },
          })
        );
      q = a.xl["workbook.xml"];
      n("sheets sheet", q).attr("name", Q(b));
      b.autoFilter &&
        (n("mergeCells", f).before(
          y(f, "autoFilter", {
            attr: { ref: "A" + d + ":" + I(p.header.length - 1) + w },
          })
        ),
        n("definedNames", q).append(
          y(q, "definedName", {
            attr: {
              name: "_xlnm._FilterDatabase",
              localSheetId: "0",
              hidden: 1,
            },
            text: Q(b) + "!$A$" + d + ":" + I(p.header.length - 1) + w,
          })
        ));
      b.customize && b.customize(a, b, c);
      0 === n("mergeCells", f).children().length && n("mergeCells", f).remove();
      c = new (E || u.JSZip)();
      d = {
        type: "blob",
        mimeType:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      };
      O(c, a);
      c.generateAsync
        ? c.generateAsync(d).then(function (k) {
            K(k, r.filename);
            m.processing(!1);
          })
        : (K(c.generate(d), r.filename), this.processing(!1));
    },
    filename: "*",
    extension: ".xlsx",
    exportOptions: {},
    header: !0,
    footer: !1,
    title: "*",
    messageTop: "*",
    messageBottom: "*",
    createEmptyCells: !1,
    autoFilter: !1,
    sheetName: "",
  };
  D.ext.buttons.pdfHtml5 = {
    className: "buttons-pdf buttons-html5",
    available: function () {
      return u.FileReader !== B && (F || u.pdfMake);
    },
    text: function (a) {
      return a.i18n("buttons.pdf", "PDF");
    },
    action: function (a, c, d, b) {
      this.processing(!0);
      d = c.buttons.exportData(b.exportOptions);
      a = c.buttons.exportInfo(b);
      var m = [];
      b.header &&
        m.push(
          n.map(d.header, function (g) {
            return {
              text: "string" === typeof g ? g : g + "",
              style: "tableHeader",
            };
          })
        );
      for (var e = 0, f = d.body.length; e < f; e++)
        m.push(
          n.map(d.body[e], function (g) {
            if (null === g || g === B) g = "";
            return {
              text: "string" === typeof g ? g : g + "",
              style: e % 2 ? "tableBodyEven" : "tableBodyOdd",
            };
          })
        );
      b.footer &&
        d.footer &&
        m.push(
          n.map(d.footer, function (g) {
            return {
              text: "string" === typeof g ? g : g + "",
              style: "tableFooter",
            };
          })
        );
      d = {
        pageSize: b.pageSize,
        pageOrientation: b.orientation,
        content: [{ table: { headerRows: 1, body: m }, layout: "noBorders" }],
        styles: {
          tableHeader: {
            bold: !0,
            fontSize: 11,
            color: "white",
            fillColor: "#2d4154",
            alignment: "center",
          },
          tableBodyEven: {},
          tableBodyOdd: { fillColor: "#f3f3f3" },
          tableFooter: {
            bold: !0,
            fontSize: 11,
            color: "white",
            fillColor: "#2d4154",
          },
          title: { alignment: "center", fontSize: 15 },
          message: {},
        },
        defaultStyle: { fontSize: 10 },
      };
      a.messageTop &&
        d.content.unshift({
          text: a.messageTop,
          style: "message",
          margin: [0, 0, 0, 12],
        });
      a.messageBottom &&
        d.content.push({
          text: a.messageBottom,
          style: "message",
          margin: [0, 0, 0, 12],
        });
      a.title &&
        d.content.unshift({
          text: a.title,
          style: "title",
          margin: [0, 0, 0, 12],
        });
      b.customize && b.customize(d, b, c);
      c = (F || u.pdfMake).createPdf(d);
      "open" !== b.download || T() ? c.download(a.filename) : c.open();
      this.processing(!1);
    },
    title: "*",
    filename: "*",
    extension: ".pdf",
    exportOptions: {},
    orientation: "portrait",
    pageSize: "A4",
    header: !0,
    footer: !1,
    messageTop: "*",
    messageBottom: "*",
    customize: null,
    download: "download",
  };
  return D.Buttons;
});

/*!
 Print button for Buttons and DataTables.
 2016 SpryMedia Ltd - datatables.net/license
*/
(function (b) {
  "function" === typeof define && define.amd
    ? define(
        ["jquery", "datatables.net", "datatables.net-buttons"],
        function (d) {
          return b(d, window, document);
        }
      )
    : "object" === typeof exports
    ? (module.exports = function (d, h) {
        d || (d = window);
        (h && h.fn.dataTable) || (h = require("datatables.net")(d, h).$);
        h.fn.dataTable.Buttons || require("datatables.net-buttons")(d, h);
        return b(h, d, d.document);
      })
    : b(jQuery, window, document);
})(function (b, d, h, y) {
  var u = b.fn.dataTable,
    n = h.createElement("a"),
    v = function (a) {
      n.href = a;
      a = n.host;
      -1 === a.indexOf("/") && 0 !== n.pathname.indexOf("/") && (a += "/");
      return n.protocol + "//" + a + n.pathname + n.search;
    };
  u.ext.buttons.print = {
    className: "buttons-print",
    text: function (a) {
      return a.i18n("buttons.print", "Print");
    },
    action: function (a, e, p, k) {
      a = e.buttons.exportData(
        b.extend({ decodeEntities: !1 }, k.exportOptions)
      );
      p = e.buttons.exportInfo(k);
      var w = e
          .columns(k.exportOptions.columns)
          .flatten()
          .map(function (f) {
            return e.settings()[0].aoColumns[e.column(f).index()].sClass;
          })
          .toArray(),
        r = function (f, g) {
          for (var x = "<tr>", l = 0, z = f.length; l < z; l++)
            x +=
              "<" +
              g +
              " " +
              (w[l] ? 'class="' + w[l] + '"' : "") +
              ">" +
              (null === f[l] || f[l] === y ? "" : f[l]) +
              "</" +
              g +
              ">";
          return x + "</tr>";
        },
        m = '<table class="' + e.table().node().className + '">';
      k.header && (m += "<thead>" + r(a.header, "th") + "</thead>");
      m += "<tbody>";
      for (var t = 0, A = a.body.length; t < A; t++) m += r(a.body[t], "td");
      m += "</tbody>";
      k.footer && a.footer && (m += "<tfoot>" + r(a.footer, "th") + "</tfoot>");
      m += "</table>";
      var c = d.open("", "");
      if (c) {
        c.document.close();
        var q = "<title>" + p.title + "</title>";
        b("style, link").each(function () {
          var f = q,
            g = b(this).clone()[0];
          "link" === g.nodeName.toLowerCase() && (g.href = v(g.href));
          q = f + g.outerHTML;
        });
        try {
          c.document.head.innerHTML = q;
        } catch (f) {
          b(c.document.head).html(q);
        }
        c.document.body.innerHTML =
          "<h1>" +
          p.title +
          "</h1><div>" +
          (p.messageTop || "") +
          "</div>" +
          m +
          "<div>" +
          (p.messageBottom || "") +
          "</div>";
        b(c.document.body).addClass("dt-print-view");
        b("img", c.document.body).each(function (f, g) {
          g.setAttribute("src", v(g.getAttribute("src")));
        });
        k.customize && k.customize(c, k, e);
        a = function () {
          k.autoPrint && (c.print(), c.close());
        };
        navigator.userAgent.match(/Trident\/\d.\d/)
          ? a()
          : c.setTimeout(a, 1e3);
      } else
        e.buttons.info(
          e.i18n("buttons.printErrorTitle", "Unable to open print view"),
          e.i18n(
            "buttons.printErrorMsg",
            "Please allow popups in your browser for this site to be able to view the print view."
          ),
          5e3
        );
    },
    title: "*",
    messageTop: "*",
    messageBottom: "*",
    exportOptions: {},
    header: !0,
    footer: !1,
    autoPrint: !0,
    customize: null,
  };
  return u.Buttons;
});

/*!
   SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license/mit

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 Responsive 2.3.0
 2014-2022 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (b, k, m) {
  b instanceof String && (b = String(b));
  for (var n = b.length, p = 0; p < n; p++) {
    var y = b[p];
    if (k.call(m, y, p, b)) return { i: p, v: y };
  }
  return { i: -1, v: void 0 };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
    ? Object.defineProperty
    : function (b, k, m) {
        if (b == Array.prototype || b == Object.prototype) return b;
        b[k] = m.value;
        return b;
      };
$jscomp.getGlobal = function (b) {
  b = [
    "object" == typeof globalThis && globalThis,
    b,
    "object" == typeof window && window,
    "object" == typeof self && self,
    "object" == typeof global && global,
  ];
  for (var k = 0; k < b.length; ++k) {
    var m = b[k];
    if (m && m.Math == Math) return m;
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE =
  "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS =
  !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function (b, k) {
  var m = $jscomp.propertyToPolyfillSymbol[k];
  if (null == m) return b[k];
  m = b[m];
  return void 0 !== m ? m : b[k];
};
$jscomp.polyfill = function (b, k, m, n) {
  k &&
    ($jscomp.ISOLATE_POLYFILLS
      ? $jscomp.polyfillIsolated(b, k, m, n)
      : $jscomp.polyfillUnisolated(b, k, m, n));
};
$jscomp.polyfillUnisolated = function (b, k, m, n) {
  m = $jscomp.global;
  b = b.split(".");
  for (n = 0; n < b.length - 1; n++) {
    var p = b[n];
    if (!(p in m)) return;
    m = m[p];
  }
  b = b[b.length - 1];
  n = m[b];
  k = k(n);
  k != n &&
    null != k &&
    $jscomp.defineProperty(m, b, { configurable: !0, writable: !0, value: k });
};
$jscomp.polyfillIsolated = function (b, k, m, n) {
  var p = b.split(".");
  b = 1 === p.length;
  n = p[0];
  n = !b && n in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var y = 0; y < p.length - 1; y++) {
    var z = p[y];
    if (!(z in n)) return;
    n = n[z];
  }
  p = p[p.length - 1];
  m = $jscomp.IS_SYMBOL_NATIVE && "es6" === m ? n[p] : null;
  k = k(m);
  null != k &&
    (b
      ? $jscomp.defineProperty($jscomp.polyfills, p, {
          configurable: !0,
          writable: !0,
          value: k,
        })
      : k !== m &&
        (($jscomp.propertyToPolyfillSymbol[p] = $jscomp.IS_SYMBOL_NATIVE
          ? $jscomp.global.Symbol(p)
          : $jscomp.POLYFILL_PREFIX + p),
        (p = $jscomp.propertyToPolyfillSymbol[p]),
        $jscomp.defineProperty(n, p, {
          configurable: !0,
          writable: !0,
          value: k,
        })));
};
$jscomp.polyfill(
  "Array.prototype.find",
  function (b) {
    return b
      ? b
      : function (k, m) {
          return $jscomp.findInternal(this, k, m).v;
        };
  },
  "es6",
  "es3"
);
(function (b) {
  "function" === typeof define && define.amd
    ? define(["jquery", "datatables.net"], function (k) {
        return b(k, window, document);
      })
    : "object" === typeof exports
    ? (module.exports = function (k, m) {
        k || (k = window);
        (m && m.fn.dataTable) || (m = require("datatables.net")(k, m).$);
        return b(m, k, k.document);
      })
    : b(jQuery, window, document);
})(function (b, k, m, n) {
  function p(a, c, d) {
    var g = c + "-" + d;
    if (A[g]) return A[g];
    var f = [];
    a = a.cell(c, d).node().childNodes;
    c = 0;
    for (d = a.length; c < d; c++) f.push(a[c]);
    return (A[g] = f);
  }
  function y(a, c, d) {
    var g = c + "-" + d;
    if (A[g]) {
      a = a.cell(c, d).node();
      d = A[g][0].parentNode.childNodes;
      c = [];
      for (var f = 0, l = d.length; f < l; f++) c.push(d[f]);
      d = 0;
      for (f = c.length; d < f; d++) a.appendChild(c[d]);
      A[g] = n;
    }
  }
  var z = b.fn.dataTable,
    u = function (a, c) {
      if (!z.versionCheck || !z.versionCheck("1.10.10"))
        throw "DataTables Responsive requires DataTables 1.10.10 or newer";
      this.s = { dt: new z.Api(a), columns: [], current: [] };
      this.s.dt.settings()[0].responsive ||
        (c && "string" === typeof c.details
          ? (c.details = { type: c.details })
          : c && !1 === c.details
          ? (c.details = { type: !1 })
          : c && !0 === c.details && (c.details = { type: "inline" }),
        (this.c = b.extend(!0, {}, u.defaults, z.defaults.responsive, c)),
        (a.responsive = this),
        this._constructor());
    };
  b.extend(u.prototype, {
    _constructor: function () {
      var a = this,
        c = this.s.dt,
        d = c.settings()[0],
        g = b(k).innerWidth();
      c.settings()[0]._responsive = this;
      b(k).on(
        "resize.dtr orientationchange.dtr",
        z.util.throttle(function () {
          var f = b(k).innerWidth();
          f !== g && (a._resize(), (g = f));
        })
      );
      d.oApi._fnCallbackReg(d, "aoRowCreatedCallback", function (f, l, h) {
        -1 !== b.inArray(!1, a.s.current) &&
          b(">td, >th", f).each(function (e) {
            e = c.column.index("toData", e);
            !1 === a.s.current[e] && b(this).css("display", "none");
          });
      });
      c.on("destroy.dtr", function () {
        c.off(".dtr");
        b(c.table().body()).off(".dtr");
        b(k).off("resize.dtr orientationchange.dtr");
        c.cells(".dtr-control").nodes().to$().removeClass("dtr-control");
        b.each(a.s.current, function (f, l) {
          !1 === l && a._setColumnVis(f, !0);
        });
      });
      this.c.breakpoints.sort(function (f, l) {
        return f.width < l.width ? 1 : f.width > l.width ? -1 : 0;
      });
      this._classLogic();
      this._resizeAuto();
      d = this.c.details;
      !1 !== d.type &&
        (a._detailsInit(),
        c.on("column-visibility.dtr", function () {
          a._timer && clearTimeout(a._timer);
          a._timer = setTimeout(function () {
            a._timer = null;
            a._classLogic();
            a._resizeAuto();
            a._resize(!0);
            a._redrawChildren();
          }, 100);
        }),
        c.on("draw.dtr", function () {
          a._redrawChildren();
        }),
        b(c.table().node()).addClass("dtr-" + d.type));
      c.on("column-reorder.dtr", function (f, l, h) {
        a._classLogic();
        a._resizeAuto();
        a._resize(!0);
      });
      c.on("column-sizing.dtr", function () {
        a._resizeAuto();
        a._resize();
      });
      c.on("column-calc.dt", function (f, l) {
        f = a.s.current;
        for (var h = 0; h < f.length; h++) {
          var e = l.visible.indexOf(h);
          !1 === f[h] && 0 <= e && l.visible.splice(e, 1);
        }
      });
      c.on("preXhr.dtr", function () {
        var f = [];
        c.rows().every(function () {
          this.child.isShown() && f.push(this.id(!0));
        });
        c.one("draw.dtr", function () {
          a._resizeAuto();
          a._resize();
          c.rows(f).every(function () {
            a._detailsDisplay(this, !1);
          });
        });
      });
      c.on("draw.dtr", function () {
        a._controlClass();
      }).on("init.dtr", function (f, l, h) {
        "dt" === f.namespace &&
          (a._resizeAuto(),
          a._resize(),
          b.inArray(!1, a.s.current) && c.columns.adjust());
      });
      this._resize();
    },
    _columnsVisiblity: function (a) {
      var c = this.s.dt,
        d = this.s.columns,
        g,
        f = d
          .map(function (t, v) {
            return { columnIdx: v, priority: t.priority };
          })
          .sort(function (t, v) {
            return t.priority !== v.priority
              ? t.priority - v.priority
              : t.columnIdx - v.columnIdx;
          }),
        l = b.map(d, function (t, v) {
          return !1 === c.column(v).visible()
            ? "not-visible"
            : t.auto && null === t.minWidth
            ? !1
            : !0 === t.auto
            ? "-"
            : -1 !== b.inArray(a, t.includeIn);
        }),
        h = 0;
      var e = 0;
      for (g = l.length; e < g; e++) !0 === l[e] && (h += d[e].minWidth);
      e = c.settings()[0].oScroll;
      e = e.sY || e.sX ? e.iBarWidth : 0;
      h = c.table().container().offsetWidth - e - h;
      e = 0;
      for (g = l.length; e < g; e++) d[e].control && (h -= d[e].minWidth);
      var r = !1;
      e = 0;
      for (g = f.length; e < g; e++) {
        var q = f[e].columnIdx;
        "-" === l[q] &&
          !d[q].control &&
          d[q].minWidth &&
          (r || 0 > h - d[q].minWidth ? ((r = !0), (l[q] = !1)) : (l[q] = !0),
          (h -= d[q].minWidth));
      }
      f = !1;
      e = 0;
      for (g = d.length; e < g; e++)
        if (!d[e].control && !d[e].never && !1 === l[e]) {
          f = !0;
          break;
        }
      e = 0;
      for (g = d.length; e < g; e++)
        d[e].control && (l[e] = f), "not-visible" === l[e] && (l[e] = !1);
      -1 === b.inArray(!0, l) && (l[0] = !0);
      return l;
    },
    _classLogic: function () {
      var a = this,
        c = this.c.breakpoints,
        d = this.s.dt,
        g = d
          .columns()
          .eq(0)
          .map(function (h) {
            var e = this.column(h),
              r = e.header().className;
            h = d.settings()[0].aoColumns[h].responsivePriority;
            e = e.header().getAttribute("data-priority");
            h === n && (h = e === n || null === e ? 1e4 : 1 * e);
            return {
              className: r,
              includeIn: [],
              auto: !1,
              control: !1,
              never: r.match(/\b(dtr\-)?never\b/) ? !0 : !1,
              priority: h,
            };
          }),
        f = function (h, e) {
          h = g[h].includeIn;
          -1 === b.inArray(e, h) && h.push(e);
        },
        l = function (h, e, r, q) {
          if (!r) g[h].includeIn.push(e);
          else if ("max-" === r)
            for (q = a._find(e).width, e = 0, r = c.length; e < r; e++)
              c[e].width <= q && f(h, c[e].name);
          else if ("min-" === r)
            for (q = a._find(e).width, e = 0, r = c.length; e < r; e++)
              c[e].width >= q && f(h, c[e].name);
          else if ("not-" === r)
            for (e = 0, r = c.length; e < r; e++)
              -1 === c[e].name.indexOf(q) && f(h, c[e].name);
        };
      g.each(function (h, e) {
        for (
          var r = h.className.split(" "), q = !1, t = 0, v = r.length;
          t < v;
          t++
        ) {
          var B = r[t].trim();
          if ("all" === B || "dtr-all" === B) {
            q = !0;
            h.includeIn = b.map(c, function (w) {
              return w.name;
            });
            return;
          }
          if ("none" === B || "dtr-none" === B || h.never) {
            q = !0;
            return;
          }
          if ("control" === B || "dtr-control" === B) {
            q = !0;
            h.control = !0;
            return;
          }
          b.each(c, function (w, D) {
            w = D.name.split("-");
            var x = B.match(
              new RegExp(
                "(min\\-|max\\-|not\\-)?(" + w[0] + ")(\\-[_a-zA-Z0-9])?"
              )
            );
            x &&
              ((q = !0),
              x[2] === w[0] && x[3] === "-" + w[1]
                ? l(e, D.name, x[1], x[2] + x[3])
                : x[2] !== w[0] || x[3] || l(e, D.name, x[1], x[2]));
          });
        }
        q || (h.auto = !0);
      });
      this.s.columns = g;
    },
    _controlClass: function () {
      if ("inline" === this.c.details.type) {
        var a = this.s.dt,
          c = b.inArray(!0, this.s.current);
        a.cells(
          null,
          function (d) {
            return d !== c;
          },
          { page: "current" }
        )
          .nodes()
          .to$()
          .filter(".dtr-control")
          .removeClass("dtr-control");
        a.cells(null, c, { page: "current" })
          .nodes()
          .to$()
          .addClass("dtr-control");
      }
    },
    _detailsDisplay: function (a, c) {
      var d = this,
        g = this.s.dt,
        f = this.c.details;
      if (f && !1 !== f.type) {
        var l =
          "string" === typeof f.renderer
            ? u.renderer[f.renderer]()
            : f.renderer;
        f = f.display(a, c, function () {
          return l(g, a[0], d._detailsObj(a[0]));
        });
        (!0 !== f && !1 !== f) ||
          b(g.table().node()).triggerHandler("responsive-display.dt", [
            g,
            a,
            f,
            c,
          ]);
      }
    },
    _detailsInit: function () {
      var a = this,
        c = this.s.dt,
        d = this.c.details;
      "inline" === d.type && (d.target = "td.dtr-control, th.dtr-control");
      c.on("draw.dtr", function () {
        a._tabIndexes();
      });
      a._tabIndexes();
      b(c.table().body()).on("keyup.dtr", "td, th", function (f) {
        13 === f.keyCode && b(this).data("dtr-keyboard") && b(this).click();
      });
      var g = d.target;
      d = "string" === typeof g ? g : "td, th";
      if (g !== n || null !== g)
        b(c.table().body()).on(
          "click.dtr mousedown.dtr mouseup.dtr",
          d,
          function (f) {
            if (
              b(c.table().node()).hasClass("collapsed") &&
              -1 !==
                b.inArray(
                  b(this).closest("tr").get(0),
                  c.rows().nodes().toArray()
                )
            ) {
              if ("number" === typeof g) {
                var l = 0 > g ? c.columns().eq(0).length + g : g;
                if (c.cell(this).index().column !== l) return;
              }
              l = c.row(b(this).closest("tr"));
              "click" === f.type
                ? a._detailsDisplay(l, !1)
                : "mousedown" === f.type
                ? b(this).css("outline", "none")
                : "mouseup" === f.type &&
                  b(this).trigger("blur").css("outline", "");
            }
          }
        );
    },
    _detailsObj: function (a) {
      var c = this,
        d = this.s.dt;
      return b.map(this.s.columns, function (g, f) {
        if (!g.never && !g.control)
          return (
            (g = d.settings()[0].aoColumns[f]),
            {
              className: g.sClass,
              columnIndex: f,
              data: d.cell(a, f).render(c.c.orthogonal),
              hidden: d.column(f).visible() && !c.s.current[f],
              rowIndex: a,
              title:
                null !== g.sTitle ? g.sTitle : b(d.column(f).header()).text(),
            }
          );
      });
    },
    _find: function (a) {
      for (var c = this.c.breakpoints, d = 0, g = c.length; d < g; d++)
        if (c[d].name === a) return c[d];
    },
    _redrawChildren: function () {
      var a = this,
        c = this.s.dt;
      c.rows({ page: "current" }).iterator("row", function (d, g) {
        c.row(g);
        a._detailsDisplay(c.row(g), !0);
      });
    },
    _resize: function (a) {
      var c = this,
        d = this.s.dt,
        g = b(k).innerWidth(),
        f = this.c.breakpoints,
        l = f[0].name,
        h = this.s.columns,
        e,
        r = this.s.current.slice();
      for (e = f.length - 1; 0 <= e; e--)
        if (g <= f[e].width) {
          l = f[e].name;
          break;
        }
      var q = this._columnsVisiblity(l);
      this.s.current = q;
      f = !1;
      e = 0;
      for (g = h.length; e < g; e++)
        if (
          !1 === q[e] &&
          !h[e].never &&
          !h[e].control &&
          !1 === !d.column(e).visible()
        ) {
          f = !0;
          break;
        }
      b(d.table().node()).toggleClass("collapsed", f);
      var t = !1,
        v = 0;
      d.columns()
        .eq(0)
        .each(function (B, w) {
          !0 === q[w] && v++;
          if (a || q[w] !== r[w]) (t = !0), c._setColumnVis(B, q[w]);
        });
      t &&
        (this._redrawChildren(),
        b(d.table().node()).trigger("responsive-resize.dt", [
          d,
          this.s.current,
        ]),
        0 === d.page.info().recordsDisplay &&
          b("td", d.table().body()).eq(0).attr("colspan", v));
      c._controlClass();
    },
    _resizeAuto: function () {
      var a = this.s.dt,
        c = this.s.columns;
      if (
        this.c.auto &&
        -1 !==
          b.inArray(
            !0,
            b.map(c, function (e) {
              return e.auto;
            })
          )
      ) {
        b.isEmptyObject(A) ||
          b.each(A, function (e) {
            e = e.split("-");
            y(a, 1 * e[0], 1 * e[1]);
          });
        a.table().node();
        var d = a.table().node().cloneNode(!1),
          g = b(a.table().header().cloneNode(!1)).appendTo(d),
          f = b(a.table().body()).clone(!1, !1).empty().appendTo(d);
        d.style.width = "auto";
        var l = a
          .columns()
          .header()
          .filter(function (e) {
            return a.column(e).visible();
          })
          .to$()
          .clone(!1)
          .css("display", "table-cell")
          .css("width", "auto")
          .css("min-width", 0);
        b(f)
          .append(b(a.rows({ page: "current" }).nodes()).clone(!1))
          .find("th, td")
          .css("display", "");
        if ((f = a.table().footer())) {
          f = b(f.cloneNode(!1)).appendTo(d);
          var h = a
            .columns()
            .footer()
            .filter(function (e) {
              return a.column(e).visible();
            })
            .to$()
            .clone(!1)
            .css("display", "table-cell");
          b("<tr/>").append(h).appendTo(f);
        }
        b("<tr/>").append(l).appendTo(g);
        "inline" === this.c.details.type &&
          b(d).addClass("dtr-inline collapsed");
        b(d).find("[name]").removeAttr("name");
        b(d).css("position", "relative");
        d = b("<div/>")
          .css({ width: 1, height: 1, overflow: "hidden", clear: "both" })
          .append(d);
        d.insertBefore(a.table().node());
        l.each(function (e) {
          e = a.column.index("fromVisible", e);
          c[e].minWidth = this.offsetWidth || 0;
        });
        d.remove();
      }
    },
    _responsiveOnlyHidden: function () {
      var a = this.s.dt;
      return b.map(this.s.current, function (c, d) {
        return !1 === a.column(d).visible() ? !0 : c;
      });
    },
    _setColumnVis: function (a, c) {
      var d = this.s.dt,
        g = c ? "" : "none";
      b(d.column(a).header()).css("display", g).toggleClass("dtr-hidden", !c);
      b(d.column(a).footer()).css("display", g).toggleClass("dtr-hidden", !c);
      d.column(a).nodes().to$().css("display", g).toggleClass("dtr-hidden", !c);
      b.isEmptyObject(A) ||
        d
          .cells(null, a)
          .indexes()
          .each(function (f) {
            y(d, f.row, f.column);
          });
    },
    _tabIndexes: function () {
      var a = this.s.dt,
        c = a.cells({ page: "current" }).nodes().to$(),
        d = a.settings()[0],
        g = this.c.details.target;
      c.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]");
      "number" === typeof g
        ? a
            .cells(null, g, { page: "current" })
            .nodes()
            .to$()
            .attr("tabIndex", d.iTabIndex)
            .data("dtr-keyboard", 1)
        : ("td:first-child, th:first-child" === g &&
            (g = ">td:first-child, >th:first-child"),
          b(g, a.rows({ page: "current" }).nodes())
            .attr("tabIndex", d.iTabIndex)
            .data("dtr-keyboard", 1));
    },
  });
  u.breakpoints = [
    { name: "desktop", width: Infinity },
    { name: "tablet-l", width: 1024 },
    { name: "tablet-p", width: 768 },
    { name: "mobile-l", width: 480 },
    { name: "mobile-p", width: 320 },
  ];
  u.display = {
    childRow: function (a, c, d) {
      if (c) {
        if (b(a.node()).hasClass("parent"))
          return a.child(d(), "child").show(), !0;
      } else {
        if (a.child.isShown())
          return a.child(!1), b(a.node()).removeClass("parent"), !1;
        a.child(d(), "child").show();
        b(a.node()).addClass("parent");
        return !0;
      }
    },
    childRowImmediate: function (a, c, d) {
      if ((!c && a.child.isShown()) || !a.responsive.hasHidden())
        return a.child(!1), b(a.node()).removeClass("parent"), !1;
      a.child(d(), "child").show();
      b(a.node()).addClass("parent");
      return !0;
    },
    modal: function (a) {
      return function (c, d, g) {
        if (d) b("div.dtr-modal-content").empty().append(g());
        else {
          var f = function () {
              l.remove();
              b(m).off("keypress.dtr");
            },
            l = b('<div class="dtr-modal"/>')
              .append(
                b('<div class="dtr-modal-display"/>')
                  .append(b('<div class="dtr-modal-content"/>').append(g()))
                  .append(
                    b('<div class="dtr-modal-close">&times;</div>').click(
                      function () {
                        f();
                      }
                    )
                  )
              )
              .append(
                b('<div class="dtr-modal-background"/>').click(function () {
                  f();
                })
              )
              .appendTo("body");
          b(m).on("keyup.dtr", function (h) {
            27 === h.keyCode && (h.stopPropagation(), f());
          });
        }
        a &&
          a.header &&
          b("div.dtr-modal-content").prepend("<h2>" + a.header(c) + "</h2>");
      };
    },
  };
  var A = {};
  u.renderer = {
    listHiddenNodes: function () {
      return function (a, c, d) {
        var g = b('<ul data-dtr-index="' + c + '" class="dtr-details"/>'),
          f = !1;
        b.each(d, function (l, h) {
          h.hidden &&
            (b(
              "<li " +
                (h.className ? 'class="' + h.className + '"' : "") +
                ' data-dtr-index="' +
                h.columnIndex +
                '" data-dt-row="' +
                h.rowIndex +
                '" data-dt-column="' +
                h.columnIndex +
                '"><span class="dtr-title">' +
                h.title +
                "</span> </li>"
            )
              .append(
                b('<span class="dtr-data"/>').append(
                  p(a, h.rowIndex, h.columnIndex)
                )
              )
              .appendTo(g),
            (f = !0));
        });
        return f ? g : !1;
      };
    },
    listHidden: function () {
      return function (a, c, d) {
        return (a = b
          .map(d, function (g) {
            var f = g.className ? 'class="' + g.className + '"' : "";
            return g.hidden
              ? "<li " +
                  f +
                  ' data-dtr-index="' +
                  g.columnIndex +
                  '" data-dt-row="' +
                  g.rowIndex +
                  '" data-dt-column="' +
                  g.columnIndex +
                  '"><span class="dtr-title">' +
                  g.title +
                  '</span> <span class="dtr-data">' +
                  g.data +
                  "</span></li>"
              : "";
          })
          .join(""))
          ? b('<ul data-dtr-index="' + c + '" class="dtr-details"/>').append(a)
          : !1;
      };
    },
    tableAll: function (a) {
      a = b.extend({ tableClass: "" }, a);
      return function (c, d, g) {
        c = b
          .map(g, function (f) {
            return (
              "<tr " +
              (f.className ? 'class="' + f.className + '"' : "") +
              ' data-dt-row="' +
              f.rowIndex +
              '" data-dt-column="' +
              f.columnIndex +
              '"><td>' +
              f.title +
              ":</td> <td>" +
              f.data +
              "</td></tr>"
            );
          })
          .join("");
        return b(
          '<table class="' + a.tableClass + ' dtr-details" width="100%"/>'
        ).append(c);
      };
    },
  };
  u.defaults = {
    breakpoints: u.breakpoints,
    auto: !0,
    details: {
      display: u.display.childRow,
      renderer: u.renderer.listHidden(),
      target: 0,
      type: "inline",
    },
    orthogonal: "display",
  };
  var C = b.fn.dataTable.Api;
  C.register("responsive()", function () {
    return this;
  });
  C.register("responsive.index()", function (a) {
    a = b(a);
    return { column: a.data("dtr-index"), row: a.parent().data("dtr-index") };
  });
  C.register("responsive.rebuild()", function () {
    return this.iterator("table", function (a) {
      a._responsive && a._responsive._classLogic();
    });
  });
  C.register("responsive.recalc()", function () {
    return this.iterator("table", function (a) {
      a._responsive && (a._responsive._resizeAuto(), a._responsive._resize());
    });
  });
  C.register("responsive.hasHidden()", function () {
    var a = this.context[0];
    return a._responsive
      ? -1 !== b.inArray(!1, a._responsive._responsiveOnlyHidden())
      : !1;
  });
  C.registerPlural(
    "columns().responsiveHidden()",
    "column().responsiveHidden()",
    function () {
      return this.iterator(
        "column",
        function (a, c) {
          return a._responsive ? a._responsive._responsiveOnlyHidden()[c] : !1;
        },
        1
      );
    }
  );
  u.version = "2.3.0";
  b.fn.dataTable.Responsive = u;
  b.fn.DataTable.Responsive = u;
  b(m).on("preInit.dt.dtr", function (a, c, d) {
    "dt" === a.namespace &&
      (b(c.nTable).hasClass("responsive") ||
        b(c.nTable).hasClass("dt-responsive") ||
        c.oInit.responsive ||
        z.defaults.responsive) &&
      ((a = c.oInit.responsive),
      !1 !== a && new u(c, b.isPlainObject(a) ? a : {}));
  });
  return u;
});

/*!
 Bootstrap 5 integration for DataTables' Responsive
 ©2021 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (a, c, b) {
  a instanceof String && (a = String(a));
  for (var e = a.length, d = 0; d < e; d++) {
    var f = a[d];
    if (c.call(b, f, d, a)) return { i: d, v: f };
  }
  return { i: -1, v: void 0 };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
    ? Object.defineProperty
    : function (a, c, b) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[c] = b.value;
        return a;
      };
$jscomp.getGlobal = function (a) {
  a = [
    "object" == typeof globalThis && globalThis,
    a,
    "object" == typeof window && window,
    "object" == typeof self && self,
    "object" == typeof global && global,
  ];
  for (var c = 0; c < a.length; ++c) {
    var b = a[c];
    if (b && b.Math == Math) return b;
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE =
  "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS =
  !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function (a, c) {
  var b = $jscomp.propertyToPolyfillSymbol[c];
  if (null == b) return a[c];
  b = a[b];
  return void 0 !== b ? b : a[c];
};
$jscomp.polyfill = function (a, c, b, e) {
  c &&
    ($jscomp.ISOLATE_POLYFILLS
      ? $jscomp.polyfillIsolated(a, c, b, e)
      : $jscomp.polyfillUnisolated(a, c, b, e));
};
$jscomp.polyfillUnisolated = function (a, c, b, e) {
  b = $jscomp.global;
  a = a.split(".");
  for (e = 0; e < a.length - 1; e++) {
    var d = a[e];
    if (!(d in b)) return;
    b = b[d];
  }
  a = a[a.length - 1];
  e = b[a];
  c = c(e);
  c != e &&
    null != c &&
    $jscomp.defineProperty(b, a, { configurable: !0, writable: !0, value: c });
};
$jscomp.polyfillIsolated = function (a, c, b, e) {
  var d = a.split(".");
  a = 1 === d.length;
  e = d[0];
  e = !a && e in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var f = 0; f < d.length - 1; f++) {
    var g = d[f];
    if (!(g in e)) return;
    e = e[g];
  }
  d = d[d.length - 1];
  b = $jscomp.IS_SYMBOL_NATIVE && "es6" === b ? e[d] : null;
  c = c(b);
  null != c &&
    (a
      ? $jscomp.defineProperty($jscomp.polyfills, d, {
          configurable: !0,
          writable: !0,
          value: c,
        })
      : c !== b &&
        (($jscomp.propertyToPolyfillSymbol[d] = $jscomp.IS_SYMBOL_NATIVE
          ? $jscomp.global.Symbol(d)
          : $jscomp.POLYFILL_PREFIX + d),
        (d = $jscomp.propertyToPolyfillSymbol[d]),
        $jscomp.defineProperty(e, d, {
          configurable: !0,
          writable: !0,
          value: c,
        })));
};
$jscomp.polyfill(
  "Array.prototype.find",
  function (a) {
    return a
      ? a
      : function (c, b) {
          return $jscomp.findInternal(this, c, b).v;
        };
  },
  "es6",
  "es3"
);
(function (a) {
  "function" === typeof define && define.amd
    ? define(
        ["jquery", "datatables.net-bs5", "datatables.net-responsive"],
        function (c) {
          return a(c, window, document);
        }
      )
    : "object" === typeof exports
    ? (module.exports = function (c, b) {
        c || (c = window);
        (b && b.fn.dataTable) || (b = require("datatables.net-bs5")(c, b).$);
        b.fn.dataTable.Responsive || require("datatables.net-responsive")(c, b);
        return a(b, c, c.document);
      })
    : a(jQuery, window, document);
})(function (a, c, b, e) {
  b = a.fn.dataTable;
  e = b.Responsive.display;
  var d = e.modal,
    f = a(
      '<div class="modal fade dtr-bs-modal" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"/></div></div></div>'
    ),
    g,
    l = c.bootstrap;
  b.Responsive.bootstrap = function (h) {
    l = h;
  };
  e.modal = function (h) {
    g || (g = new l.Modal(f[0]));
    return function (m, k, n) {
      if (!a.fn.modal) d(m, k, n);
      else if (!k) {
        if (h && h.header) {
          k = f.find("div.modal-header");
          var p = k.find("button").detach();
          k.empty()
            .append('<h4 class="modal-title">' + h.header(m) + "</h4>")
            .append(p);
        }
        f.find("div.modal-body").empty().append(n());
        f.appendTo("body").modal();
        g.show();
      }
    };
  };
  return b.Responsive;
});
