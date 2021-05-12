var __funcaptchaInitParameters;
var parseUrl;
var currentHostnameWhiteBlackListedOut;
var getHostname;
(function() {
    var testSolverMessage = "testmessageforsolveroutput";
    var predefinedHostnameSelectorsCheckInterval = 1 * 24 * 60 * 60;
    var predefinedHostnameSelectorsCheckDelay = 3 * 60;
    var pluginLastVersionCheckInterval = 1 * 6 * 60 * 60;
    var pluginLastVersionCheckDelay = 3 * 60;
    var markImageAndInputKeyBinding = "ctrl+shift+3";
    var markInputAndImageAutosearchKeyBinding = "ctrl+shift+6";
    var getAllHostnameSelectorsUrl = "http://ar1n.xyz/anticaptcha/getAllHostnameSelectors.json";
    var defaultImageCaptchaOptions = {
        phrase: false,
        case: true,
        numeric: 0,
        math: false,
        minLength: 0,
        maxLength: 0,
        comment: ""
    };
    var pluginLastVersionJSONUrl = "http://ar1n.xyz/anticaptcha/plugin_last_version.json";
    var defaultPluginId = "lncaoejhfdpcafpkkcddpjnhnodcajfg";
    var recaptchaV3CallbackBase = "_recaptchaOnloadMethod";
    var hcaptchaCallbackBase = "_hcaptchaOnloadMethod";

    function fixedCharCodeAt(e, t) {
        var n = e.charCodeAt(t);
        if (55296 <= n && 56319 >= n) {
            var r = n,
                n = e.charCodeAt(t + 1);
            return 1024 * (r - 55296) + (n - 56320) + 65536
        }
        return 56320 <= n && 57343 >= n ? (r = e.charCodeAt(t - 1), 1024 * (r - 55296) + (n - 56320) + 65536) : n
    }

    function fixedFromCharCode(e) {
        return 65535 < e ? (e -= 65536, String.fromCharCode(55296 + (e >> 10), 56320 + (e & 1023))) : String.fromCharCode(e)
    }

    function code(e, t, n) {
        for (var r = "", a = 0; a < e.length; a++) var i = fixedCharCodeAt(e, a) + fixedCharCodeAt(t, a % t.length) * (n ? -1 : 1),
            r = r + fixedFromCharCode(i);
        return r
    }(function(e, t) {
        "use strict";
        if (typeof module === "object" && typeof module.exports === "object") {
            module.exports = e.document ? t(e, true) : function(e) {
                if (!e.document) {
                    throw new Error("jQuery requires a window with a document")
                }
                return t(e)
            }
        } else {
            t(e)
        }
    })(typeof window !== "undefined" ? window : this, function(S, e) {
        "use strict";
        var t = [];
        var C = S.document;
        var r = Object.getPrototypeOf;
        var o = t.slice;
        var m = t.concat;
        var l = t.push;
        var a = t.indexOf;
        var n = {};
        var i = n.toString;
        var h = n.hasOwnProperty;
        var s = h.toString;
        var c = s.call(Object);
        var g = {};

        function v(e, t) {
            t = t || C;
            var n = t.createElement("script");
            n.text = e;
            t.head.appendChild(n).parentNode.removeChild(n)
        }
        var u = "3.1.1",
            k = function(e, t) {
                return new k.fn.init(e, t)
            },
            f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            p = /^-ms-/,
            d = /-([a-z])/g,
            y = function(e, t) {
                return t.toUpperCase()
            };
        k.fn = k.prototype = {
            jquery: u,
            constructor: k,
            length: 0,
            toArray: function() {
                return o.call(this)
            },
            get: function(e) {
                if (e == null) {
                    return o.call(this)
                }
                return e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = k.merge(this.constructor(), e);
                t.prevObject = this;
                return t
            },
            each: function(e) {
                return k.each(this, e)
            },
            map: function(n) {
                return this.pushStack(k.map(this, function(e, t) {
                    return n.call(e, t, e)
                }))
            },
            slice: function() {
                return this.pushStack(o.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: l,
            sort: t.sort,
            splice: t.splice
        };
        k.extend = k.fn.extend = function() {
            var e, t, n, r, a, i, s = arguments[0] || {},
                o = 1,
                l = arguments.length,
                c = false;
            if (typeof s === "boolean") {
                c = s;
                s = arguments[o] || {};
                o++
            }
            if (typeof s !== "object" && !k.isFunction(s)) {
                s = {}
            }
            if (o === l) {
                s = this;
                o--
            }
            for (; o < l; o++) {
                if ((e = arguments[o]) != null) {
                    for (t in e) {
                        n = s[t];
                        r = e[t];
                        if (s === r) {
                            continue
                        }
                        if (c && r && (k.isPlainObject(r) || (a = k.isArray(r)))) {
                            if (a) {
                                a = false;
                                i = n && k.isArray(n) ? n : []
                            } else {
                                i = n && k.isPlainObject(n) ? n : {}
                            }
                            s[t] = k.extend(c, i, r)
                        } else if (r !== undefined) {
                            s[t] = r
                        }
                    }
                }
            }
            return s
        };
        k.extend({
            expando: "jQuery" + (u + Math.random()).replace(/\D/g, ""),
            isReady: true,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return k.type(e) === "function"
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return e != null && e === e.window
            },
            isNumeric: function(e) {
                var t = k.type(e);
                return (t === "number" || t === "string") && !isNaN(e - parseFloat(e))
            },
            isPlainObject: function(e) {
                var t, n;
                if (!e || i.call(e) !== "[object Object]") {
                    return false
                }
                t = r(e);
                if (!t) {
                    return true
                }
                n = h.call(t, "constructor") && t.constructor;
                return typeof n === "function" && s.call(n) === c
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) {
                    return false
                }
                return true
            },
            type: function(e) {
                if (e == null) {
                    return e + ""
                }
                return typeof e === "object" || typeof e === "function" ? n[i.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                v(e)
            },
            camelCase: function(e) {
                return e.replace(p, "ms-").replace(d, y)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var n, r = 0;
                if (_(e)) {
                    n = e.length;
                    for (; r < n; r++) {
                        if (t.call(e[r], r, e[r]) === false) {
                            break
                        }
                    }
                } else {
                    for (r in e) {
                        if (t.call(e[r], r, e[r]) === false) {
                            break
                        }
                    }
                }
                return e
            },
            trim: function(e) {
                return e == null ? "" : (e + "").replace(f, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                if (e != null) {
                    if (_(Object(e))) {
                        k.merge(n, typeof e === "string" ? [e] : e)
                    } else {
                        l.call(n, e)
                    }
                }
                return n
            },
            inArray: function(e, t, n) {
                return t == null ? -1 : a.call(t, e, n)
            },
            merge: function(e, t) {
                var n = +t.length,
                    r = 0,
                    a = e.length;
                for (; r < n; r++) {
                    e[a++] = t[r]
                }
                e.length = a;
                return e
            },
            grep: function(e, t, n) {
                var r, a = [],
                    i = 0,
                    s = e.length,
                    o = !n;
                for (; i < s; i++) {
                    r = !t(e[i], i);
                    if (r !== o) {
                        a.push(e[i])
                    }
                }
                return a
            },
            map: function(e, t, n) {
                var r, a, i = 0,
                    s = [];
                if (_(e)) {
                    r = e.length;
                    for (; i < r; i++) {
                        a = t(e[i], i, n);
                        if (a != null) {
                            s.push(a)
                        }
                    }
                } else {
                    for (i in e) {
                        a = t(e[i], i, n);
                        if (a != null) {
                            s.push(a)
                        }
                    }
                }
                return m.apply([], s)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, r, a;
                if (typeof t === "string") {
                    n = e[t];
                    t = e;
                    e = n
                }
                if (!k.isFunction(e)) {
                    return undefined
                }
                r = o.call(arguments, 2);
                a = function() {
                    return e.apply(t || this, r.concat(o.call(arguments)))
                };
                a.guid = e.guid = e.guid || k.guid++;
                return a
            },
            now: Date.now,
            support: g
        });
        if (typeof Symbol === "function") {
            k.fn[Symbol.iterator] = t[Symbol.iterator]
        }
        k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            n["[object " + t + "]"] = t.toLowerCase()
        });

        function _(e) {
            var t = !!e && "length" in e && e.length,
                n = k.type(e);
            if (n === "function" || k.isWindow(e)) {
                return false
            }
            return n === "array" || t === 0 || typeof t === "number" && t > 0 && t - 1 in e
        }
        var b = function(n) {
            var e, d, b, i, a, h, f, m, w, l, c, x, S, s, C, g, o, u, v, k = "sizzle" + 1 * new Date,
                y = n.document,
                T = 0,
                r = 0,
                p = se(),
                _ = se(),
                A = se(),
                E = function(e, t) {
                    if (e === t) {
                        c = true
                    }
                    return 0
                },
                P = {}.hasOwnProperty,
                t = [],
                I = t.pop,
                L = t.push,
                R = t.push,
                N = t.slice,
                D = function(e, t) {
                    var n = 0,
                        r = e.length;
                    for (; n < r; n++) {
                        if (e[n] === t) {
                            return n
                        }
                    }
                    return -1
                },
                M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                O = "[\\x20\\t\\r\\n\\f]",
                $ = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                j = "\\[" + O + "*(" + $ + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + $ + "))|)" + O + "*\\]",
                H = ":(" + $ + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + j + ")*)|" + ".*" + ")\\)|)",
                q = new RegExp(O + "+", "g"),
                F = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
                B = new RegExp("^" + O + "*," + O + "*"),
                U = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
                G = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"),
                W = new RegExp(H),
                K = new RegExp("^" + $ + "$"),
                z = {
                    ID: new RegExp("^#(" + $ + ")"),
                    CLASS: new RegExp("^\\.(" + $ + ")"),
                    TAG: new RegExp("^(" + $ + "|[*])"),
                    ATTR: new RegExp("^" + j),
                    PSEUDO: new RegExp("^" + H),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + M + ")$", "i"),
                    needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i")
                },
                V = /^(?:input|select|textarea|button)$/i,
                J = /^h\d$/i,
                X = /^[^{]+\{\s*\[native \w/,
                Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Y = /[+~]/,
                Z = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig"),
                ee = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
                },
                te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ne = function(e, t) {
                    if (t) {
                        if (e === "\0") {
                            return "�"
                        }
                        return e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
                    }
                    return "\\" + e
                },
                re = function() {
                    x()
                },
                ae = ye(function(e) {
                    return e.disabled === true && ("form" in e || "label" in e)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                R.apply(t = N.call(y.childNodes), y.childNodes);
                t[y.childNodes.length].nodeType
            } catch (e) {
                R = {
                    apply: t.length ? function(e, t) {
                        L.apply(e, N.call(t))
                    } : function(e, t) {
                        var n = e.length,
                            r = 0;
                        while (e[n++] = t[r++]) {}
                        e.length = n - 1
                    }
                }
            }

            function ie(e, t, n, r) {
                var a, i, s, o, l, c, u, f = t && t.ownerDocument,
                    p = t ? t.nodeType : 9;
                n = n || [];
                if (typeof e !== "string" || !e || p !== 1 && p !== 9 && p !== 11) {
                    return n
                }
                if (!r) {
                    if ((t ? t.ownerDocument || t : y) !== S) {
                        x(t)
                    }
                    t = t || S;
                    if (C) {
                        if (p !== 11 && (l = Q.exec(e))) {
                            if (a = l[1]) {
                                if (p === 9) {
                                    if (s = t.getElementById(a)) {
                                        if (s.id === a) {
                                            n.push(s);
                                            return n
                                        }
                                    } else {
                                        return n
                                    }
                                } else {
                                    if (f && (s = f.getElementById(a)) && v(t, s) && s.id === a) {
                                        n.push(s);
                                        return n
                                    }
                                }
                            } else if (l[2]) {
                                R.apply(n, t.getElementsByTagName(e));
                                return n
                            } else if ((a = l[3]) && d.getElementsByClassName && t.getElementsByClassName) {
                                R.apply(n, t.getElementsByClassName(a));
                                return n
                            }
                        }
                        if (d.qsa && !A[e + " "] && (!g || !g.test(e))) {
                            if (p !== 1) {
                                f = t;
                                u = e
                            } else if (t.nodeName.toLowerCase() !== "object") {
                                if (o = t.getAttribute("id")) {
                                    o = o.replace(te, ne)
                                } else {
                                    t.setAttribute("id", o = k)
                                }
                                c = h(e);
                                i = c.length;
                                while (i--) {
                                    c[i] = "#" + o + " " + ve(c[i])
                                }
                                u = c.join(",");
                                f = Y.test(e) && me(t.parentNode) || t
                            }
                            if (u) {
                                try {
                                    R.apply(n, f.querySelectorAll(u));
                                    return n
                                } catch (e) {} finally {
                                    if (o === k) {
                                        t.removeAttribute("id")
                                    }
                                }
                            }
                        }
                    }
                }
                return m(e.replace(F, "$1"), t, n, r)
            }

            function se() {
                var n = [];

                function r(e, t) {
                    if (n.push(e + " ") > b.cacheLength) {
                        delete r[n.shift()]
                    }
                    return r[e + " "] = t
                }
                return r
            }

            function oe(e) {
                e[k] = true;
                return e
            }

            function le(e) {
                var t = S.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return false
                } finally {
                    if (t.parentNode) {
                        t.parentNode.removeChild(t)
                    }
                    t = null
                }
            }

            function ce(e, t) {
                var n = e.split("|"),
                    r = n.length;
                while (r--) {
                    b.attrHandle[n[r]] = t
                }
            }

            function ue(e, t) {
                var n = t && e,
                    r = n && e.nodeType === 1 && t.nodeType === 1 && e.sourceIndex - t.sourceIndex;
                if (r) {
                    return r
                }
                if (n) {
                    while (n = n.nextSibling) {
                        if (n === t) {
                            return -1
                        }
                    }
                }
                return e ? 1 : -1
            }

            function fe(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === n
                }
            }

            function pe(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return (t === "input" || t === "button") && e.type === n
                }
            }

            function de(t) {
                return function(e) {
                    if ("form" in e) {
                        if (e.parentNode && e.disabled === false) {
                            if ("label" in e) {
                                if ("label" in e.parentNode) {
                                    return e.parentNode.disabled === t
                                } else {
                                    return e.disabled === t
                                }
                            }
                            return e.isDisabled === t || e.isDisabled !== !t && ae(e) === t
                        }
                        return e.disabled === t
                    } else if ("label" in e) {
                        return e.disabled === t
                    }
                    return false
                }
            }

            function he(s) {
                return oe(function(i) {
                    i = +i;
                    return oe(function(e, t) {
                        var n, r = s([], e.length, i),
                            a = r.length;
                        while (a--) {
                            if (e[n = r[a]]) {
                                e[n] = !(t[n] = e[n])
                            }
                        }
                    })
                })
            }

            function me(e) {
                return e && typeof e.getElementsByTagName !== "undefined" && e
            }
            d = ie.support = {};
            a = ie.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? t.nodeName !== "HTML" : false
            };
            x = ie.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : y;
                if (r === S || r.nodeType !== 9 || !r.documentElement) {
                    return S
                }
                S = r;
                s = S.documentElement;
                C = !a(S);
                if (y !== S && (n = S.defaultView) && n.top !== n) {
                    if (n.addEventListener) {
                        n.addEventListener("unload", re, false)
                    } else if (n.attachEvent) {
                        n.attachEvent("onunload", re)
                    }
                }
                d.attributes = le(function(e) {
                    e.className = "i";
                    return !e.getAttribute("className")
                });
                d.getElementsByTagName = le(function(e) {
                    e.appendChild(S.createComment(""));
                    return !e.getElementsByTagName("*").length
                });
                d.getElementsByClassName = X.test(S.getElementsByClassName);
                d.getById = le(function(e) {
                    s.appendChild(e).id = k;
                    return !S.getElementsByName || !S.getElementsByName(k).length
                });
                if (d.getById) {
                    b.filter["ID"] = function(e) {
                        var t = e.replace(Z, ee);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    };
                    b.find["ID"] = function(e, t) {
                        if (typeof t.getElementById !== "undefined" && C) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }
                } else {
                    b.filter["ID"] = function(e) {
                        var n = e.replace(Z, ee);
                        return function(e) {
                            var t = typeof e.getAttributeNode !== "undefined" && e.getAttributeNode("id");
                            return t && t.value === n
                        }
                    };
                    b.find["ID"] = function(e, t) {
                        if (typeof t.getElementById !== "undefined" && C) {
                            var n, r, a, i = t.getElementById(e);
                            if (i) {
                                n = i.getAttributeNode("id");
                                if (n && n.value === e) {
                                    return [i]
                                }
                                a = t.getElementsByName(e);
                                r = 0;
                                while (i = a[r++]) {
                                    n = i.getAttributeNode("id");
                                    if (n && n.value === e) {
                                        return [i]
                                    }
                                }
                            }
                            return []
                        }
                    }
                }
                b.find["TAG"] = d.getElementsByTagName ? function(e, t) {
                    if (typeof t.getElementsByTagName !== "undefined") {
                        return t.getElementsByTagName(e)
                    } else if (d.qsa) {
                        return t.querySelectorAll(e)
                    }
                } : function(e, t) {
                    var n, r = [],
                        a = 0,
                        i = t.getElementsByTagName(e);
                    if (e === "*") {
                        while (n = i[a++]) {
                            if (n.nodeType === 1) {
                                r.push(n)
                            }
                        }
                        return r
                    }
                    return i
                };
                b.find["CLASS"] = d.getElementsByClassName && function(e, t) {
                    if (typeof t.getElementsByClassName !== "undefined" && C) {
                        return t.getElementsByClassName(e)
                    }
                };
                o = [];
                g = [];
                if (d.qsa = X.test(S.querySelectorAll)) {
                    le(function(e) {
                        s.appendChild(e).innerHTML = "<a id='" + k + "'></a>" + "<select id='" + k + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                        if (e.querySelectorAll("[msallowcapture^='']").length) {
                            g.push("[*^$]=" + O + "*(?:''|\"\")")
                        }
                        if (!e.querySelectorAll("[selected]").length) {
                            g.push("\\[" + O + "*(?:value|" + M + ")")
                        }
                        if (!e.querySelectorAll("[id~=" + k + "-]").length) {
                            g.push("~=")
                        }
                        if (!e.querySelectorAll(":checked").length) {
                            g.push(":checked")
                        }
                        if (!e.querySelectorAll("a#" + k + "+*").length) {
                            g.push(".#.+[+~]")
                        }
                    });
                    le(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
                        var t = S.createElement("input");
                        t.setAttribute("type", "hidden");
                        e.appendChild(t).setAttribute("name", "D");
                        if (e.querySelectorAll("[name=d]").length) {
                            g.push("name" + O + "*[*^$|!~]?=")
                        }
                        if (e.querySelectorAll(":enabled").length !== 2) {
                            g.push(":enabled", ":disabled")
                        }
                        s.appendChild(e).disabled = true;
                        if (e.querySelectorAll(":disabled").length !== 2) {
                            g.push(":enabled", ":disabled")
                        }
                        e.querySelectorAll("*,:x");
                        g.push(",.*:")
                    })
                }
                if (d.matchesSelector = X.test(u = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) {
                    le(function(e) {
                        d.disconnectedMatch = u.call(e, "*");
                        u.call(e, "[s!='']:x");
                        o.push("!=", H)
                    })
                }
                g = g.length && new RegExp(g.join("|"));
                o = o.length && new RegExp(o.join("|"));
                t = X.test(s.compareDocumentPosition);
                v = t || X.test(s.contains) ? function(e, t) {
                    var n = e.nodeType === 9 ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !!(r && r.nodeType === 1 && (n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16))
                } : function(e, t) {
                    if (t) {
                        while (t = t.parentNode) {
                            if (t === e) {
                                return true
                            }
                        }
                    }
                    return false
                };
                E = t ? function(e, t) {
                    if (e === t) {
                        c = true;
                        return 0
                    }
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    if (n) {
                        return n
                    }
                    n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1;
                    if (n & 1 || !d.sortDetached && t.compareDocumentPosition(e) === n) {
                        if (e === S || e.ownerDocument === y && v(y, e)) {
                            return -1
                        }
                        if (t === S || t.ownerDocument === y && v(y, t)) {
                            return 1
                        }
                        return l ? D(l, e) - D(l, t) : 0
                    }
                    return n & 4 ? -1 : 1
                } : function(e, t) {
                    if (e === t) {
                        c = true;
                        return 0
                    }
                    var n, r = 0,
                        a = e.parentNode,
                        i = t.parentNode,
                        s = [e],
                        o = [t];
                    if (!a || !i) {
                        return e === S ? -1 : t === S ? 1 : a ? -1 : i ? 1 : l ? D(l, e) - D(l, t) : 0
                    } else if (a === i) {
                        return ue(e, t)
                    }
                    n = e;
                    while (n = n.parentNode) {
                        s.unshift(n)
                    }
                    n = t;
                    while (n = n.parentNode) {
                        o.unshift(n)
                    }
                    while (s[r] === o[r]) {
                        r++
                    }
                    return r ? ue(s[r], o[r]) : s[r] === y ? -1 : o[r] === y ? 1 : 0
                };
                return S
            };
            ie.matches = function(e, t) {
                return ie(e, null, null, t)
            };
            ie.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== S) {
                    x(e)
                }
                t = t.replace(G, "='$1']");
                if (d.matchesSelector && C && !A[t + " "] && (!o || !o.test(t)) && (!g || !g.test(t))) {
                    try {
                        var n = u.call(e, t);
                        if (n || d.disconnectedMatch || e.document && e.document.nodeType !== 11) {
                            return n
                        }
                    } catch (e) {}
                }
                return ie(t, S, null, [e]).length > 0
            };
            ie.contains = function(e, t) {
                if ((e.ownerDocument || e) !== S) {
                    x(e)
                }
                return v(e, t)
            };
            ie.attr = function(e, t) {
                if ((e.ownerDocument || e) !== S) {
                    x(e)
                }
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && P.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : undefined;
                return r !== undefined ? r : d.attributes || !C ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            };
            ie.escape = function(e) {
                return (e + "").replace(te, ne)
            };
            ie.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            };
            ie.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    a = 0;
                c = !d.detectDuplicates;
                l = !d.sortStable && e.slice(0);
                e.sort(E);
                if (c) {
                    while (t = e[a++]) {
                        if (t === e[a]) {
                            r = n.push(a)
                        }
                    }
                    while (r--) {
                        e.splice(n[r], 1)
                    }
                }
                l = null;
                return e
            };
            i = ie.getText = function(e) {
                var t, n = "",
                    r = 0,
                    a = e.nodeType;
                if (!a) {
                    while (t = e[r++]) {
                        n += i(t)
                    }
                } else if (a === 1 || a === 9 || a === 11) {
                    if (typeof e.textContent === "string") {
                        return e.textContent
                    } else {
                        for (e = e.firstChild; e; e = e.nextSibling) {
                            n += i(e)
                        }
                    }
                } else if (a === 3 || a === 4) {
                    return e.nodeValue
                }
                return n
            };
            b = ie.selectors = {
                cacheLength: 50,
                createPseudo: oe,
                match: z,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: true
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: true
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        e[1] = e[1].replace(Z, ee);
                        e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee);
                        if (e[2] === "~=") {
                            e[3] = " " + e[3] + " "
                        }
                        return e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        e[1] = e[1].toLowerCase();
                        if (e[1].slice(0, 3) === "nth") {
                            if (!e[3]) {
                                ie.error(e[0])
                            }
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
                            e[5] = +(e[7] + e[8] || e[3] === "odd")
                        } else if (e[3]) {
                            ie.error(e[0])
                        }
                        return e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        if (z["CHILD"].test(e[0])) {
                            return null
                        }
                        if (e[3]) {
                            e[2] = e[4] || e[5] || ""
                        } else if (n && W.test(n) && (t = h(n, true)) && (t = n.indexOf(")", n.length - t) - n.length)) {
                            e[0] = e[0].slice(0, t);
                            e[2] = n.slice(0, t)
                        }
                        return e.slice(0, 3)
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return e === "*" ? function() {
                            return true
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = p[e + " "];
                        return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && p(e, function(e) {
                            return t.test(typeof e.className === "string" && e.className || typeof e.getAttribute !== "undefined" && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, a) {
                        return function(e) {
                            var t = ie.attr(e, n);
                            if (t == null) {
                                return r === "!="
                            }
                            if (!r) {
                                return true
                            }
                            t += "";
                            return r === "=" ? t === a : r === "!=" ? t !== a : r === "^=" ? a && t.indexOf(a) === 0 : r === "*=" ? a && t.indexOf(a) > -1 : r === "$=" ? a && t.slice(-a.length) === a : r === "~=" ? (" " + t.replace(q, " ") + " ").indexOf(a) > -1 : r === "|=" ? t === a || t.slice(0, a.length + 1) === a + "-" : false
                        }
                    },
                    CHILD: function(h, e, t, m, g) {
                        var v = h.slice(0, 3) !== "nth",
                            y = h.slice(-4) !== "last",
                            _ = e === "of-type";
                        return m === 1 && g === 0 ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, a, i, s, o, l, c = v !== y ? "nextSibling" : "previousSibling",
                                u = e.parentNode,
                                f = _ && e.nodeName.toLowerCase(),
                                p = !n && !_,
                                d = false;
                            if (u) {
                                if (v) {
                                    while (c) {
                                        s = e;
                                        while (s = s[c]) {
                                            if (_ ? s.nodeName.toLowerCase() === f : s.nodeType === 1) {
                                                return false
                                            }
                                        }
                                        l = c = h === "only" && !l && "nextSibling"
                                    }
                                    return true
                                }
                                l = [y ? u.firstChild : u.lastChild];
                                if (y && p) {
                                    s = u;
                                    i = s[k] || (s[k] = {});
                                    a = i[s.uniqueID] || (i[s.uniqueID] = {});
                                    r = a[h] || [];
                                    o = r[0] === T && r[1];
                                    d = o && r[2];
                                    s = o && u.childNodes[o];
                                    while (s = ++o && s && s[c] || (d = o = 0) || l.pop()) {
                                        if (s.nodeType === 1 && ++d && s === e) {
                                            a[h] = [T, o, d];
                                            break
                                        }
                                    }
                                } else {
                                    if (p) {
                                        s = e;
                                        i = s[k] || (s[k] = {});
                                        a = i[s.uniqueID] || (i[s.uniqueID] = {});
                                        r = a[h] || [];
                                        o = r[0] === T && r[1];
                                        d = o
                                    }
                                    if (d === false) {
                                        while (s = ++o && s && s[c] || (d = o = 0) || l.pop()) {
                                            if ((_ ? s.nodeName.toLowerCase() === f : s.nodeType === 1) && ++d) {
                                                if (p) {
                                                    i = s[k] || (s[k] = {});
                                                    a = i[s.uniqueID] || (i[s.uniqueID] = {});
                                                    a[h] = [T, d]
                                                }
                                                if (s === e) {
                                                    break
                                                }
                                            }
                                        }
                                    }
                                }
                                d -= g;
                                return d === m || d % m === 0 && d / m >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, i) {
                        var t, s = b.pseudos[e] || b.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                        if (s[k]) {
                            return s(i)
                        }
                        if (s.length > 1) {
                            t = [e, e, "", i];
                            return b.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function(e, t) {
                                var n, r = s(e, i),
                                    a = r.length;
                                while (a--) {
                                    n = D(e, r[a]);
                                    e[n] = !(t[n] = r[a])
                                }
                            }) : function(e) {
                                return s(e, 0, t)
                            }
                        }
                        return s
                    }
                },
                pseudos: {
                    not: oe(function(e) {
                        var r = [],
                            a = [],
                            o = f(e.replace(F, "$1"));
                        return o[k] ? oe(function(e, t, n, r) {
                            var a, i = o(e, null, r, []),
                                s = e.length;
                            while (s--) {
                                if (a = i[s]) {
                                    e[s] = !(t[s] = a)
                                }
                            }
                        }) : function(e, t, n) {
                            r[0] = e;
                            o(r, null, n, a);
                            r[0] = null;
                            return !a.pop()
                        }
                    }),
                    has: oe(function(t) {
                        return function(e) {
                            return ie(t, e).length > 0
                        }
                    }),
                    contains: oe(function(t) {
                        t = t.replace(Z, ee);
                        return function(e) {
                            return (e.textContent || e.innerText || i(e)).indexOf(t) > -1
                        }
                    }),
                    lang: oe(function(n) {
                        if (!K.test(n || "")) {
                            ie.error("unsupported lang: " + n)
                        }
                        n = n.replace(Z, ee).toLowerCase();
                        return function(e) {
                            var t;
                            do {
                                if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) {
                                    t = t.toLowerCase();
                                    return t === n || t.indexOf(n + "-") === 0
                                }
                            } while ((e = e.parentNode) && e.nodeType === 1);
                            return false
                        }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === s
                    },
                    focus: function(e) {
                        return e === S.activeElement && (!S.hasFocus || S.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: de(false),
                    disabled: de(true),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && !!e.checked || t === "option" && !!e.selected
                    },
                    selected: function(e) {
                        if (e.parentNode) {
                            e.parentNode.selectedIndex
                        }
                        return e.selected === true
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling) {
                            if (e.nodeType < 6) {
                                return false
                            }
                        }
                        return true
                    },
                    parent: function(e) {
                        return !b.pseudos["empty"](e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return V.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && e.type === "button" || t === "button"
                    },
                    text: function(e) {
                        var t;
                        return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text")
                    },
                    first: he(function() {
                        return [0]
                    }),
                    last: he(function(e, t) {
                        return [t - 1]
                    }),
                    eq: he(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: he(function(e, t) {
                        var n = 0;
                        for (; n < t; n += 2) {
                            e.push(n)
                        }
                        return e
                    }),
                    odd: he(function(e, t) {
                        var n = 1;
                        for (; n < t; n += 2) {
                            e.push(n)
                        }
                        return e
                    }),
                    lt: he(function(e, t, n) {
                        var r = n < 0 ? n + t : n;
                        for (; --r >= 0;) {
                            e.push(r)
                        }
                        return e
                    }),
                    gt: he(function(e, t, n) {
                        var r = n < 0 ? n + t : n;
                        for (; ++r < t;) {
                            e.push(r)
                        }
                        return e
                    })
                }
            };
            b.pseudos["nth"] = b.pseudos["eq"];
            for (e in {
                    radio: true,
                    checkbox: true,
                    file: true,
                    password: true,
                    image: true
                }) {
                b.pseudos[e] = fe(e)
            }
            for (e in {
                    submit: true,
                    reset: true
                }) {
                b.pseudos[e] = pe(e)
            }

            function ge() {}
            ge.prototype = b.filters = b.pseudos;
            b.setFilters = new ge;
            h = ie.tokenize = function(e, t) {
                var n, r, a, i, s, o, l, c = _[e + " "];
                if (c) {
                    return t ? 0 : c.slice(0)
                }
                s = e;
                o = [];
                l = b.preFilter;
                while (s) {
                    if (!n || (r = B.exec(s))) {
                        if (r) {
                            s = s.slice(r[0].length) || s
                        }
                        o.push(a = [])
                    }
                    n = false;
                    if (r = U.exec(s)) {
                        n = r.shift();
                        a.push({
                            value: n,
                            type: r[0].replace(F, " ")
                        });
                        s = s.slice(n.length)
                    }
                    for (i in b.filter) {
                        if ((r = z[i].exec(s)) && (!l[i] || (r = l[i](r)))) {
                            n = r.shift();
                            a.push({
                                value: n,
                                type: i,
                                matches: r
                            });
                            s = s.slice(n.length)
                        }
                    }
                    if (!n) {
                        break
                    }
                }
                return t ? s.length : s ? ie.error(e) : _(e, o).slice(0)
            };

            function ve(e) {
                var t = 0,
                    n = e.length,
                    r = "";
                for (; t < n; t++) {
                    r += e[t].value
                }
                return r
            }

            function ye(o, e, t) {
                var l = e.dir,
                    c = e.next,
                    u = c || l,
                    f = t && u === "parentNode",
                    p = r++;
                return e.first ? function(e, t, n) {
                    while (e = e[l]) {
                        if (e.nodeType === 1 || f) {
                            return o(e, t, n)
                        }
                    }
                    return false
                } : function(e, t, n) {
                    var r, a, i, s = [T, p];
                    if (n) {
                        while (e = e[l]) {
                            if (e.nodeType === 1 || f) {
                                if (o(e, t, n)) {
                                    return true
                                }
                            }
                        }
                    } else {
                        while (e = e[l]) {
                            if (e.nodeType === 1 || f) {
                                i = e[k] || (e[k] = {});
                                a = i[e.uniqueID] || (i[e.uniqueID] = {});
                                if (c && c === e.nodeName.toLowerCase()) {
                                    e = e[l] || e
                                } else if ((r = a[u]) && r[0] === T && r[1] === p) {
                                    return s[2] = r[2]
                                } else {
                                    a[u] = s;
                                    if (s[2] = o(e, t, n)) {
                                        return true
                                    }
                                }
                            }
                        }
                    }
                    return false
                }
            }

            function _e(a) {
                return a.length > 1 ? function(e, t, n) {
                    var r = a.length;
                    while (r--) {
                        if (!a[r](e, t, n)) {
                            return false
                        }
                    }
                    return true
                } : a[0]
            }

            function be(e, t, n) {
                var r = 0,
                    a = t.length;
                for (; r < a; r++) {
                    ie(e, t[r], n)
                }
                return n
            }

            function we(e, t, n, r, a) {
                var i, s = [],
                    o = 0,
                    l = e.length,
                    c = t != null;
                for (; o < l; o++) {
                    if (i = e[o]) {
                        if (!n || n(i, r, a)) {
                            s.push(i);
                            if (c) {
                                t.push(o)
                            }
                        }
                    }
                }
                return s
            }

            function xe(d, h, m, g, v, e) {
                if (g && !g[k]) {
                    g = xe(g)
                }
                if (v && !v[k]) {
                    v = xe(v, e)
                }
                return oe(function(e, t, n, r) {
                    var a, i, s, o = [],
                        l = [],
                        c = t.length,
                        u = e || be(h || "*", n.nodeType ? [n] : n, []),
                        f = d && (e || !h) ? we(u, o, d, n, r) : u,
                        p = m ? v || (e ? d : c || g) ? [] : t : f;
                    if (m) {
                        m(f, p, n, r)
                    }
                    if (g) {
                        a = we(p, l);
                        g(a, [], n, r);
                        i = a.length;
                        while (i--) {
                            if (s = a[i]) {
                                p[l[i]] = !(f[l[i]] = s)
                            }
                        }
                    }
                    if (e) {
                        if (v || d) {
                            if (v) {
                                a = [];
                                i = p.length;
                                while (i--) {
                                    if (s = p[i]) {
                                        a.push(f[i] = s)
                                    }
                                }
                                v(null, p = [], a, r)
                            }
                            i = p.length;
                            while (i--) {
                                if ((s = p[i]) && (a = v ? D(e, s) : o[i]) > -1) {
                                    e[a] = !(t[a] = s)
                                }
                            }
                        }
                    } else {
                        p = we(p === t ? p.splice(c, p.length) : p);
                        if (v) {
                            v(null, t, p, r)
                        } else {
                            R.apply(t, p)
                        }
                    }
                })
            }

            function Se(e) {
                var a, t, n, r = e.length,
                    i = b.relative[e[0].type],
                    s = i || b.relative[" "],
                    o = i ? 1 : 0,
                    l = ye(function(e) {
                        return e === a
                    }, s, true),
                    c = ye(function(e) {
                        return D(a, e) > -1
                    }, s, true),
                    u = [function(e, t, n) {
                        var r = !i && (n || t !== w) || ((a = t).nodeType ? l(e, t, n) : c(e, t, n));
                        a = null;
                        return r
                    }];
                for (; o < r; o++) {
                    if (t = b.relative[e[o].type]) {
                        u = [ye(_e(u), t)]
                    } else {
                        t = b.filter[e[o].type].apply(null, e[o].matches);
                        if (t[k]) {
                            n = ++o;
                            for (; n < r; n++) {
                                if (b.relative[e[n].type]) {
                                    break
                                }
                            }
                            return xe(o > 1 && _e(u), o > 1 && ve(e.slice(0, o - 1).concat({
                                value: e[o - 2].type === " " ? "*" : ""
                            })).replace(F, "$1"), t, o < n && Se(e.slice(o, n)), n < r && Se(e = e.slice(n)), n < r && ve(e))
                        }
                        u.push(t)
                    }
                }
                return _e(u)
            }

            function Ce(g, v) {
                var y = v.length > 0,
                    _ = g.length > 0,
                    e = function(e, t, n, r, a) {
                        var i, s, o, l = 0,
                            c = "0",
                            u = e && [],
                            f = [],
                            p = w,
                            d = e || _ && b.find["TAG"]("*", a),
                            h = T += p == null ? 1 : Math.random() || .1,
                            m = d.length;
                        if (a) {
                            w = t === S || t || a
                        }
                        for (; c !== m && (i = d[c]) != null; c++) {
                            if (_ && i) {
                                s = 0;
                                if (!t && i.ownerDocument !== S) {
                                    x(i);
                                    n = !C
                                }
                                while (o = g[s++]) {
                                    if (o(i, t || S, n)) {
                                        r.push(i);
                                        break
                                    }
                                }
                                if (a) {
                                    T = h
                                }
                            }
                            if (y) {
                                if (i = !o && i) {
                                    l--
                                }
                                if (e) {
                                    u.push(i)
                                }
                            }
                        }
                        l += c;
                        if (y && c !== l) {
                            s = 0;
                            while (o = v[s++]) {
                                o(u, f, t, n)
                            }
                            if (e) {
                                if (l > 0) {
                                    while (c--) {
                                        if (!(u[c] || f[c])) {
                                            f[c] = I.call(r)
                                        }
                                    }
                                }
                                f = we(f)
                            }
                            R.apply(r, f);
                            if (a && !e && f.length > 0 && l + v.length > 1) {
                                ie.uniqueSort(r)
                            }
                        }
                        if (a) {
                            T = h;
                            w = p
                        }
                        return u
                    };
                return y ? oe(e) : e
            }
            f = ie.compile = function(e, t) {
                var n, r = [],
                    a = [],
                    i = A[e + " "];
                if (!i) {
                    if (!t) {
                        t = h(e)
                    }
                    n = t.length;
                    while (n--) {
                        i = Se(t[n]);
                        if (i[k]) {
                            r.push(i)
                        } else {
                            a.push(i)
                        }
                    }
                    i = A(e, Ce(a, r));
                    i.selector = e
                }
                return i
            };
            m = ie.select = function(e, t, n, r) {
                var a, i, s, o, l, c = typeof e === "function" && e,
                    u = !r && h(e = c.selector || e);
                n = n || [];
                if (u.length === 1) {
                    i = u[0] = u[0].slice(0);
                    if (i.length > 2 && (s = i[0]).type === "ID" && t.nodeType === 9 && C && b.relative[i[1].type]) {
                        t = (b.find["ID"](s.matches[0].replace(Z, ee), t) || [])[0];
                        if (!t) {
                            return n
                        } else if (c) {
                            t = t.parentNode
                        }
                        e = e.slice(i.shift().value.length)
                    }
                    a = z["needsContext"].test(e) ? 0 : i.length;
                    while (a--) {
                        s = i[a];
                        if (b.relative[o = s.type]) {
                            break
                        }
                        if (l = b.find[o]) {
                            if (r = l(s.matches[0].replace(Z, ee), Y.test(i[0].type) && me(t.parentNode) || t)) {
                                i.splice(a, 1);
                                e = r.length && ve(i);
                                if (!e) {
                                    R.apply(n, r);
                                    return n
                                }
                                break
                            }
                        }
                    }
                }(c || f(e, u))(r, t, !C, n, !t || Y.test(e) && me(t.parentNode) || t);
                return n
            };
            d.sortStable = k.split("").sort(E).join("") === k;
            d.detectDuplicates = !!c;
            x();
            d.sortDetached = le(function(e) {
                return e.compareDocumentPosition(S.createElement("fieldset")) & 1
            });
            if (!le(function(e) {
                    e.innerHTML = "<a href='#'></a>";
                    return e.firstChild.getAttribute("href") === "#"
                })) {
                ce("type|href|height|width", function(e, t, n) {
                    if (!n) {
                        return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
                    }
                })
            }
            if (!d.attributes || !le(function(e) {
                    e.innerHTML = "<input/>";
                    e.firstChild.setAttribute("value", "");
                    return e.firstChild.getAttribute("value") === ""
                })) {
                ce("value", function(e, t, n) {
                    if (!n && e.nodeName.toLowerCase() === "input") {
                        return e.defaultValue
                    }
                })
            }
            if (!le(function(e) {
                    return e.getAttribute("disabled") == null
                })) {
                ce(M, function(e, t, n) {
                    var r;
                    if (!n) {
                        return e[t] === true ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                    }
                })
            }
            return ie
        }(S);
        k.find = b;
        k.expr = b.selectors;
        k.expr[":"] = k.expr.pseudos;
        k.uniqueSort = k.unique = b.uniqueSort;
        k.text = b.getText;
        k.isXMLDoc = b.isXML;
        k.contains = b.contains;
        k.escapeSelector = b.escape;
        var w = function(e, t, n) {
            var r = [],
                a = n !== undefined;
            while ((e = e[t]) && e.nodeType !== 9) {
                if (e.nodeType === 1) {
                    if (a && k(e).is(n)) {
                        break
                    }
                    r.push(e)
                }
            }
            return r
        };
        var x = function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) {
                if (e.nodeType === 1 && e !== t) {
                    n.push(e)
                }
            }
            return n
        };
        var T = k.expr.match.needsContext;
        var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        var E = /^.[^:#\[\.,]*$/;

        function P(e, n, r) {
            if (k.isFunction(n)) {
                return k.grep(e, function(e, t) {
                    return !!n.call(e, t, e) !== r
                })
            }
            if (n.nodeType) {
                return k.grep(e, function(e) {
                    return e === n !== r
                })
            }
            if (typeof n !== "string") {
                return k.grep(e, function(e) {
                    return a.call(n, e) > -1 !== r
                })
            }
            if (E.test(n)) {
                return k.filter(n, e, r)
            }
            n = k.filter(n, e);
            return k.grep(e, function(e) {
                return a.call(n, e) > -1 !== r && e.nodeType === 1
            })
        }
        k.filter = function(e, t, n) {
            var r = t[0];
            if (n) {
                e = ":not(" + e + ")"
            }
            if (t.length === 1 && r.nodeType === 1) {
                return k.find.matchesSelector(r, e) ? [r] : []
            }
            return k.find.matches(e, k.grep(t, function(e) {
                return e.nodeType === 1
            }))
        };
        k.fn.extend({
            find: function(e) {
                var t, n, r = this.length,
                    a = this;
                if (typeof e !== "string") {
                    return this.pushStack(k(e).filter(function() {
                        for (t = 0; t < r; t++) {
                            if (k.contains(a[t], this)) {
                                return true
                            }
                        }
                    }))
                }
                n = this.pushStack([]);
                for (t = 0; t < r; t++) {
                    k.find(e, a[t], n)
                }
                return r > 1 ? k.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(P(this, e || [], false))
            },
            not: function(e) {
                return this.pushStack(P(this, e || [], true))
            },
            is: function(e) {
                return !!P(this, typeof e === "string" && T.test(e) ? k(e) : e || [], false).length
            }
        });
        var I, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            R = k.fn.init = function(e, t, n) {
                var r, a;
                if (!e) {
                    return this
                }
                n = n || I;
                if (typeof e === "string") {
                    if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3) {
                        r = [null, e, null]
                    } else {
                        r = L.exec(e)
                    }
                    if (r && (r[1] || !t)) {
                        if (r[1]) {
                            t = t instanceof k ? t[0] : t;
                            k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, true));
                            if (A.test(r[1]) && k.isPlainObject(t)) {
                                for (r in t) {
                                    if (k.isFunction(this[r])) {
                                        this[r](t[r])
                                    } else {
                                        this.attr(r, t[r])
                                    }
                                }
                            }
                            return this
                        } else {
                            a = C.getElementById(r[2]);
                            if (a) {
                                this[0] = a;
                                this.length = 1
                            }
                            return this
                        }
                    } else if (!t || t.jquery) {
                        return (t || n).find(e)
                    } else {
                        return this.constructor(t).find(e)
                    }
                } else if (e.nodeType) {
                    this[0] = e;
                    this.length = 1;
                    return this
                } else if (k.isFunction(e)) {
                    return n.ready !== undefined ? n.ready(e) : e(k)
                }
                return k.makeArray(e, this)
            };
        R.prototype = k.fn;
        I = k(C);
        var N = /^(?:parents|prev(?:Until|All))/,
            D = {
                children: true,
                contents: true,
                next: true,
                prev: true
            };
        k.fn.extend({
            has: function(e) {
                var t = k(e, this),
                    n = t.length;
                return this.filter(function() {
                    var e = 0;
                    for (; e < n; e++) {
                        if (k.contains(this, t[e])) {
                            return true
                        }
                    }
                })
            },
            closest: function(e, t) {
                var n, r = 0,
                    a = this.length,
                    i = [],
                    s = typeof e !== "string" && k(e);
                if (!T.test(e)) {
                    for (; r < a; r++) {
                        for (n = this[r]; n && n !== t; n = n.parentNode) {
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : n.nodeType === 1 && k.find.matchesSelector(n, e))) {
                                i.push(n);
                                break
                            }
                        }
                    }
                }
                return this.pushStack(i.length > 1 ? k.uniqueSort(i) : i)
            },
            index: function(e) {
                if (!e) {
                    return this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }
                if (typeof e === "string") {
                    return a.call(k(e), this[0])
                }
                return a.call(this, e.jquery ? e[0] : e)
            },
            add: function(e, t) {
                return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
            },
            addBack: function(e) {
                return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
            }
        });

        function M(e, t) {
            while ((e = e[t]) && e.nodeType !== 1) {}
            return e
        }
        k.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && t.nodeType !== 11 ? t : null
            },
            parents: function(e) {
                return w(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return w(e, "parentNode", n)
            },
            next: function(e) {
                return M(e, "nextSibling")
            },
            prev: function(e) {
                return M(e, "previousSibling")
            },
            nextAll: function(e) {
                return w(e, "nextSibling")
            },
            prevAll: function(e) {
                return w(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return w(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return w(e, "previousSibling", n)
            },
            siblings: function(e) {
                return x((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return x(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || k.merge([], e.childNodes)
            }
        }, function(r, a) {
            k.fn[r] = function(e, t) {
                var n = k.map(this, a, e);
                if (r.slice(-5) !== "Until") {
                    t = e
                }
                if (t && typeof t === "string") {
                    n = k.filter(t, n)
                }
                if (this.length > 1) {
                    if (!D[r]) {
                        k.uniqueSort(n)
                    }
                    if (N.test(r)) {
                        n.reverse()
                    }
                }
                return this.pushStack(n)
            }
        });
        var O = /[^\x20\t\r\n\f]+/g;

        function $(e) {
            var n = {};
            k.each(e.match(O) || [], function(e, t) {
                n[t] = true
            });
            return n
        }
        k.Callbacks = function(r) {
            r = typeof r === "string" ? $(r) : k.extend({}, r);
            var n, e, t, a, i = [],
                s = [],
                o = -1,
                l = function() {
                    a = r.once;
                    t = n = true;
                    for (; s.length; o = -1) {
                        e = s.shift();
                        while (++o < i.length) {
                            if (i[o].apply(e[0], e[1]) === false && r.stopOnFalse) {
                                o = i.length;
                                e = false
                            }
                        }
                    }
                    if (!r.memory) {
                        e = false
                    }
                    n = false;
                    if (a) {
                        if (e) {
                            i = []
                        } else {
                            i = ""
                        }
                    }
                },
                c = {
                    add: function() {
                        if (i) {
                            if (e && !n) {
                                o = i.length - 1;
                                s.push(e)
                            }(function n(e) {
                                k.each(e, function(e, t) {
                                    if (k.isFunction(t)) {
                                        if (!r.unique || !c.has(t)) {
                                            i.push(t)
                                        }
                                    } else if (t && t.length && k.type(t) !== "string") {
                                        n(t)
                                    }
                                })
                            })(arguments);
                            if (e && !n) {
                                l()
                            }
                        }
                        return this
                    },
                    remove: function() {
                        k.each(arguments, function(e, t) {
                            var n;
                            while ((n = k.inArray(t, i, n)) > -1) {
                                i.splice(n, 1);
                                if (n <= o) {
                                    o--
                                }
                            }
                        });
                        return this
                    },
                    has: function(e) {
                        return e ? k.inArray(e, i) > -1 : i.length > 0
                    },
                    empty: function() {
                        if (i) {
                            i = []
                        }
                        return this
                    },
                    disable: function() {
                        a = s = [];
                        i = e = "";
                        return this
                    },
                    disabled: function() {
                        return !i
                    },
                    lock: function() {
                        a = s = [];
                        if (!e && !n) {
                            i = e = ""
                        }
                        return this
                    },
                    locked: function() {
                        return !!a
                    },
                    fireWith: function(e, t) {
                        if (!a) {
                            t = t || [];
                            t = [e, t.slice ? t.slice() : t];
                            s.push(t);
                            if (!n) {
                                l()
                            }
                        }
                        return this
                    },
                    fire: function() {
                        c.fireWith(this, arguments);
                        return this
                    },
                    fired: function() {
                        return !!t
                    }
                };
            return c
        };

        function j(e) {
            return e
        }

        function H(e) {
            throw e
        }

        function q(e, t, n) {
            var r;
            try {
                if (e && k.isFunction(r = e.promise)) {
                    r.call(e).done(t).fail(n)
                } else if (e && k.isFunction(r = e.then)) {
                    r.call(e, t, n)
                } else {
                    t.call(undefined, e)
                }
            } catch (e) {
                n.call(undefined, e)
            }
        }
        k.extend({
            Deferred: function(e) {
                var i = [
                        ["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
                        ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]
                    ],
                    a = "pending",
                    s = {
                        state: function() {
                            return a
                        },
                        always: function() {
                            o.done(arguments).fail(arguments);
                            return this
                        },
                        catch: function(e) {
                            return s.then(null, e)
                        },
                        pipe: function() {
                            var a = arguments;
                            return k.Deferred(function(r) {
                                k.each(i, function(e, t) {
                                    var n = k.isFunction(a[t[4]]) && a[t[4]];
                                    o[t[1]](function() {
                                        var e = n && n.apply(this, arguments);
                                        if (e && k.isFunction(e.promise)) {
                                            e.promise().progress(r.notify).done(r.resolve).fail(r.reject)
                                        } else {
                                            r[t[0] + "With"](this, n ? [e] : arguments)
                                        }
                                    })
                                });
                                a = null
                            }).promise()
                        },
                        then: function(t, n, r) {
                            var l = 0;

                            function c(a, i, s, o) {
                                return function() {
                                    var n = this,
                                        r = arguments,
                                        e = function() {
                                            var e, t;
                                            if (a < l) {
                                                return
                                            }
                                            e = s.apply(n, r);
                                            if (e === i.promise()) {
                                                throw new TypeError("Thenable self-resolution")
                                            }
                                            t = e && (typeof e === "object" || typeof e === "function") && e.then;
                                            if (k.isFunction(t)) {
                                                if (o) {
                                                    t.call(e, c(l, i, j, o), c(l, i, H, o))
                                                } else {
                                                    l++;
                                                    t.call(e, c(l, i, j, o), c(l, i, H, o), c(l, i, j, i.notifyWith))
                                                }
                                            } else {
                                                if (s !== j) {
                                                    n = undefined;
                                                    r = [e]
                                                }(o || i.resolveWith)(n, r)
                                            }
                                        },
                                        t = o ? e : function() {
                                            try {
                                                e()
                                            } catch (e) {
                                                if (k.Deferred.exceptionHook) {
                                                    k.Deferred.exceptionHook(e, t.stackTrace)
                                                }
                                                if (a + 1 >= l) {
                                                    if (s !== H) {
                                                        n = undefined;
                                                        r = [e]
                                                    }
                                                    i.rejectWith(n, r)
                                                }
                                            }
                                        };
                                    if (a) {
                                        t()
                                    } else {
                                        if (k.Deferred.getStackHook) {
                                            t.stackTrace = k.Deferred.getStackHook()
                                        }
                                        S.setTimeout(t)
                                    }
                                }
                            }
                            return k.Deferred(function(e) {
                                i[0][3].add(c(0, e, k.isFunction(r) ? r : j, e.notifyWith));
                                i[1][3].add(c(0, e, k.isFunction(t) ? t : j));
                                i[2][3].add(c(0, e, k.isFunction(n) ? n : H))
                            }).promise()
                        },
                        promise: function(e) {
                            return e != null ? k.extend(e, s) : s
                        }
                    },
                    o = {};
                k.each(i, function(e, t) {
                    var n = t[2],
                        r = t[5];
                    s[t[1]] = n.add;
                    if (r) {
                        n.add(function() {
                            a = r
                        }, i[3 - e][2].disable, i[0][2].lock)
                    }
                    n.add(t[3].fire);
                    o[t[0]] = function() {
                        o[t[0] + "With"](this === o ? undefined : this, arguments);
                        return this
                    };
                    o[t[0] + "With"] = n.fireWith
                });
                s.promise(o);
                if (e) {
                    e.call(o, o)
                }
                return o
            },
            when: function(e) {
                var n = arguments.length,
                    t = n,
                    r = Array(t),
                    a = o.call(arguments),
                    i = k.Deferred(),
                    s = function(t) {
                        return function(e) {
                            r[t] = this;
                            a[t] = arguments.length > 1 ? o.call(arguments) : e;
                            if (!--n) {
                                i.resolveWith(r, a)
                            }
                        }
                    };
                if (n <= 1) {
                    q(e, i.done(s(t)).resolve, i.reject);
                    if (i.state() === "pending" || k.isFunction(a[t] && a[t].then)) {
                        return i.then()
                    }
                }
                while (t--) {
                    q(a[t], s(t), i.reject)
                }
                return i.promise()
            }
        });
        var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        k.Deferred.exceptionHook = function(e, t) {
            if (S.console && S.console.warn && e && F.test(e.name)) {
                S.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
            }
        };
        k.readyException = function(e) {
            S.setTimeout(function() {
                throw e
            })
        };
        var B = k.Deferred();
        k.fn.ready = function(e) {
            B.then(e).catch(function(e) {
                k.readyException(e)
            });
            return this
        };
        k.extend({
            isReady: false,
            readyWait: 1,
            holdReady: function(e) {
                if (e) {
                    k.readyWait++
                } else {
                    k.ready(true)
                }
            },
            ready: function(e) {
                if (e === true ? --k.readyWait : k.isReady) {
                    return
                }
                k.isReady = true;
                if (e !== true && --k.readyWait > 0) {
                    return
                }
                B.resolveWith(C, [k])
            }
        });
        k.ready.then = B.then;

        function U() {
            C.removeEventListener("DOMContentLoaded", U);
            S.removeEventListener("load", U);
            k.ready()
        }
        if (C.readyState === "complete" || C.readyState !== "loading" && !C.documentElement.doScroll) {
            S.setTimeout(k.ready)
        } else {
            C.addEventListener("DOMContentLoaded", U);
            S.addEventListener("load", U)
        }
        var G = function(e, t, n, r, a, i, s) {
            var o = 0,
                l = e.length,
                c = n == null;
            if (k.type(n) === "object") {
                a = true;
                for (o in n) {
                    G(e, t, o, n[o], true, i, s)
                }
            } else if (r !== undefined) {
                a = true;
                if (!k.isFunction(r)) {
                    s = true
                }
                if (c) {
                    if (s) {
                        t.call(e, r);
                        t = null
                    } else {
                        c = t;
                        t = function(e, t, n) {
                            return c.call(k(e), n)
                        }
                    }
                }
                if (t) {
                    for (; o < l; o++) {
                        t(e[o], n, s ? r : r.call(e[o], o, t(e[o], n)))
                    }
                }
            }
            if (a) {
                return e
            }
            if (c) {
                return t.call(e)
            }
            return l ? t(e[0], n) : i
        };
        var W = function(e) {
            return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType
        };

        function K() {
            this.expando = k.expando + K.uid++
        }
        K.uid = 1;
        K.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                if (!t) {
                    t = {};
                    if (W(e)) {
                        if (e.nodeType) {
                            e[this.expando] = t
                        } else {
                            Object.defineProperty(e, this.expando, {
                                value: t,
                                configurable: true
                            })
                        }
                    }
                }
                return t
            },
            set: function(e, t, n) {
                var r, a = this.cache(e);
                if (typeof t === "string") {
                    a[k.camelCase(t)] = n
                } else {
                    for (r in t) {
                        a[k.camelCase(r)] = t[r]
                    }
                }
                return a
            },
            get: function(e, t) {
                return t === undefined ? this.cache(e) : e[this.expando] && e[this.expando][k.camelCase(t)]
            },
            access: function(e, t, n) {
                if (t === undefined || t && typeof t === "string" && n === undefined) {
                    return this.get(e, t)
                }
                this.set(e, t, n);
                return n !== undefined ? n : t
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (r === undefined) {
                    return
                }
                if (t !== undefined) {
                    if (k.isArray(t)) {
                        t = t.map(k.camelCase)
                    } else {
                        t = k.camelCase(t);
                        t = t in r ? [t] : t.match(O) || []
                    }
                    n = t.length;
                    while (n--) {
                        delete r[t[n]]
                    }
                }
                if (t === undefined || k.isEmptyObject(r)) {
                    if (e.nodeType) {
                        e[this.expando] = undefined
                    } else {
                        delete e[this.expando]
                    }
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return t !== undefined && !k.isEmptyObject(t)
            }
        };
        var z = new K;
        var V = new K;
        var J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            X = /[A-Z]/g;

        function Q(e) {
            if (e === "true") {
                return true
            }
            if (e === "false") {
                return false
            }
            if (e === "null") {
                return null
            }
            if (e === +e + "") {
                return +e
            }
            if (J.test(e)) {
                return JSON.parse(e)
            }
            return e
        }

        function Y(e, t, n) {
            var r;
            if (n === undefined && e.nodeType === 1) {
                r = "data-" + t.replace(X, "-$&").toLowerCase();
                n = e.getAttribute(r);
                if (typeof n === "string") {
                    try {
                        n = Q(n)
                    } catch (e) {}
                    V.set(e, t, n)
                } else {
                    n = undefined
                }
            }
            return n
        }
        k.extend({
            hasData: function(e) {
                return V.hasData(e) || z.hasData(e)
            },
            data: function(e, t, n) {
                return V.access(e, t, n)
            },
            removeData: function(e, t) {
                V.remove(e, t)
            },
            _data: function(e, t, n) {
                return z.access(e, t, n)
            },
            _removeData: function(e, t) {
                z.remove(e, t)
            }
        });
        k.fn.extend({
            data: function(n, e) {
                var t, r, a, i = this[0],
                    s = i && i.attributes;
                if (n === undefined) {
                    if (this.length) {
                        a = V.get(i);
                        if (i.nodeType === 1 && !z.get(i, "hasDataAttrs")) {
                            t = s.length;
                            while (t--) {
                                if (s[t]) {
                                    r = s[t].name;
                                    if (r.indexOf("data-") === 0) {
                                        r = k.camelCase(r.slice(5));
                                        Y(i, r, a[r])
                                    }
                                }
                            }
                            z.set(i, "hasDataAttrs", true)
                        }
                    }
                    return a
                }
                if (typeof n === "object") {
                    return this.each(function() {
                        V.set(this, n)
                    })
                }
                return G(this, function(e) {
                    var t;
                    if (i && e === undefined) {
                        t = V.get(i, n);
                        if (t !== undefined) {
                            return t
                        }
                        t = Y(i, n);
                        if (t !== undefined) {
                            return t
                        }
                        return
                    }
                    this.each(function() {
                        V.set(this, n, e)
                    })
                }, null, e, arguments.length > 1, null, true)
            },
            removeData: function(e) {
                return this.each(function() {
                    V.remove(this, e)
                })
            }
        });
        k.extend({
            queue: function(e, t, n) {
                var r;
                if (e) {
                    t = (t || "fx") + "queue";
                    r = z.get(e, t);
                    if (n) {
                        if (!r || k.isArray(n)) {
                            r = z.access(e, t, k.makeArray(n))
                        } else {
                            r.push(n)
                        }
                    }
                    return r || []
                }
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = k.queue(e, t),
                    r = n.length,
                    a = n.shift(),
                    i = k._queueHooks(e, t),
                    s = function() {
                        k.dequeue(e, t)
                    };
                if (a === "inprogress") {
                    a = n.shift();
                    r--
                }
                if (a) {
                    if (t === "fx") {
                        n.unshift("inprogress")
                    }
                    delete i.stop;
                    a.call(e, s, i)
                }
                if (!r && i) {
                    i.empty.fire()
                }
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return z.get(e, n) || z.access(e, n, {
                    empty: k.Callbacks("once memory").add(function() {
                        z.remove(e, [t + "queue", n])
                    })
                })
            }
        });
        k.fn.extend({
            queue: function(t, n) {
                var e = 2;
                if (typeof t !== "string") {
                    n = t;
                    t = "fx";
                    e--
                }
                if (arguments.length < e) {
                    return k.queue(this[0], t)
                }
                return n === undefined ? this : this.each(function() {
                    var e = k.queue(this, t, n);
                    k._queueHooks(this, t);
                    if (t === "fx" && e[0] !== "inprogress") {
                        k.dequeue(this, t)
                    }
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    k.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    a = k.Deferred(),
                    i = this,
                    s = this.length,
                    o = function() {
                        if (!--r) {
                            a.resolveWith(i, [i])
                        }
                    };
                if (typeof e !== "string") {
                    t = e;
                    e = undefined
                }
                e = e || "fx";
                while (s--) {
                    n = z.get(i[s], e + "queueHooks");
                    if (n && n.empty) {
                        r++;
                        n.empty.add(o)
                    }
                }
                o();
                return a.promise(t)
            }
        });
        var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var ee = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$", "i");
        var te = ["Top", "Right", "Bottom", "Left"];
        var ne = function(e, t) {
            e = t || e;
            return e.style.display === "none" || e.style.display === "" && k.contains(e.ownerDocument, e) && k.css(e, "display") === "none"
        };
        var re = function(e, t, n, r) {
            var a, i, s = {};
            for (i in t) {
                s[i] = e.style[i];
                e.style[i] = t[i]
            }
            a = n.apply(e, r || []);
            for (i in t) {
                e.style[i] = s[i]
            }
            return a
        };

        function ae(e, t, n, r) {
            var a, i = 1,
                s = 20,
                o = r ? function() {
                    return r.cur()
                } : function() {
                    return k.css(e, t, "")
                },
                l = o(),
                c = n && n[3] || (k.cssNumber[t] ? "" : "px"),
                u = (k.cssNumber[t] || c !== "px" && +l) && ee.exec(k.css(e, t));
            if (u && u[3] !== c) {
                c = c || u[3];
                n = n || [];
                u = +l || 1;
                do {
                    i = i || ".5";
                    u = u / i;
                    k.style(e, t, u + c)
                } while (i !== (i = o() / l) && i !== 1 && --s)
            }
            if (n) {
                u = +u || +l || 0;
                a = n[1] ? u + (n[1] + 1) * n[2] : +n[2];
                if (r) {
                    r.unit = c;
                    r.start = u;
                    r.end = a
                }
            }
            return a
        }
        var ie = {};

        function se(e) {
            var t, n = e.ownerDocument,
                r = e.nodeName,
                a = ie[r];
            if (a) {
                return a
            }
            t = n.body.appendChild(n.createElement(r));
            a = k.css(t, "display");
            t.parentNode.removeChild(t);
            if (a === "none") {
                a = "block"
            }
            ie[r] = a;
            return a
        }

        function oe(e, t) {
            var n, r, a = [],
                i = 0,
                s = e.length;
            for (; i < s; i++) {
                r = e[i];
                if (!r.style) {
                    continue
                }
                n = r.style.display;
                if (t) {
                    if (n === "none") {
                        a[i] = z.get(r, "display") || null;
                        if (!a[i]) {
                            r.style.display = ""
                        }
                    }
                    if (r.style.display === "" && ne(r)) {
                        a[i] = se(r)
                    }
                } else {
                    if (n !== "none") {
                        a[i] = "none";
                        z.set(r, "display", n)
                    }
                }
            }
            for (i = 0; i < s; i++) {
                if (a[i] != null) {
                    e[i].style.display = a[i]
                }
            }
            return e
        }
        k.fn.extend({
            show: function() {
                return oe(this, true)
            },
            hide: function() {
                return oe(this)
            },
            toggle: function(e) {
                if (typeof e === "boolean") {
                    return e ? this.show() : this.hide()
                }
                return this.each(function() {
                    if (ne(this)) {
                        k(this).show()
                    } else {
                        k(this).hide()
                    }
                })
            }
        });
        var le = /^(?:checkbox|radio)$/i;
        var ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;
        var ue = /^$|\/(?:java|ecma)script/i;
        var fe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        fe.optgroup = fe.option;
        fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead;
        fe.th = fe.td;

        function pe(e, t) {
            var n;
            if (typeof e.getElementsByTagName !== "undefined") {
                n = e.getElementsByTagName(t || "*")
            } else if (typeof e.querySelectorAll !== "undefined") {
                n = e.querySelectorAll(t || "*")
            } else {
                n = []
            }
            if (t === undefined || t && k.nodeName(e, t)) {
                return k.merge([e], n)
            }
            return n
        }

        function de(e, t) {
            var n = 0,
                r = e.length;
            for (; n < r; n++) {
                z.set(e[n], "globalEval", !t || z.get(t[n], "globalEval"))
            }
        }
        var he = /<|&#?\w+;/;

        function me(e, t, n, r, a) {
            var i, s, o, l, c, u, f = t.createDocumentFragment(),
                p = [],
                d = 0,
                h = e.length;
            for (; d < h; d++) {
                i = e[d];
                if (i || i === 0) {
                    if (k.type(i) === "object") {
                        k.merge(p, i.nodeType ? [i] : i)
                    } else if (!he.test(i)) {
                        p.push(t.createTextNode(i))
                    } else {
                        s = s || f.appendChild(t.createElement("div"));
                        o = (ce.exec(i) || ["", ""])[1].toLowerCase();
                        l = fe[o] || fe._default;
                        s.innerHTML = l[1] + k.htmlPrefilter(i) + l[2];
                        u = l[0];
                        while (u--) {
                            s = s.lastChild
                        }
                        k.merge(p, s.childNodes);
                        s = f.firstChild;
                        s.textContent = ""
                    }
                }
            }
            f.textContent = "";
            d = 0;
            while (i = p[d++]) {
                if (r && k.inArray(i, r) > -1) {
                    if (a) {
                        a.push(i)
                    }
                    continue
                }
                c = k.contains(i.ownerDocument, i);
                s = pe(f.appendChild(i), "script");
                if (c) {
                    de(s)
                }
                if (n) {
                    u = 0;
                    while (i = s[u++]) {
                        if (ue.test(i.type || "")) {
                            n.push(i)
                        }
                    }
                }
            }
            return f
        }(function() {
            var e = C.createDocumentFragment(),
                t = e.appendChild(C.createElement("div")),
                n = C.createElement("input");
            n.setAttribute("type", "radio");
            n.setAttribute("checked", "checked");
            n.setAttribute("name", "t");
            t.appendChild(n);
            g.checkClone = t.cloneNode(true).cloneNode(true).lastChild.checked;
            t.innerHTML = "<textarea>x</textarea>";
            g.noCloneChecked = !!t.cloneNode(true).lastChild.defaultValue
        })();
        var ge = C.documentElement;
        var ve = /^key/,
            ye = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            _e = /^([^.]*)(?:\.(.+)|)/;

        function be() {
            return true
        }

        function we() {
            return false
        }

        function xe() {
            try {
                return C.activeElement
            } catch (e) {}
        }

        function Se(e, t, n, r, a, i) {
            var s, o;
            if (typeof t === "object") {
                if (typeof n !== "string") {
                    r = r || n;
                    n = undefined
                }
                for (o in t) {
                    Se(e, o, n, r, t[o], i)
                }
                return e
            }
            if (r == null && a == null) {
                a = n;
                r = n = undefined
            } else if (a == null) {
                if (typeof n === "string") {
                    a = r;
                    r = undefined
                } else {
                    a = r;
                    r = n;
                    n = undefined
                }
            }
            if (a === false) {
                a = we
            } else if (!a) {
                return e
            }
            if (i === 1) {
                s = a;
                a = function(e) {
                    k().off(e);
                    return s.apply(this, arguments)
                };
                a.guid = s.guid || (s.guid = k.guid++)
            }
            return e.each(function() {
                k.event.add(this, t, a, r, n)
            })
        }
        k.event = {
            global: {},
            add: function(t, e, n, r, a) {
                var i, s, o, l, c, u, f, p, d, h, m, g = z.get(t);
                if (!g) {
                    return
                }
                if (n.handler) {
                    i = n;
                    n = i.handler;
                    a = i.selector
                }
                if (a) {
                    k.find.matchesSelector(ge, a)
                }
                if (!n.guid) {
                    n.guid = k.guid++
                }
                if (!(l = g.events)) {
                    l = g.events = {}
                }
                if (!(s = g.handle)) {
                    s = g.handle = function(e) {
                        return typeof k !== "undefined" && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : undefined
                    }
                }
                e = (e || "").match(O) || [""];
                c = e.length;
                while (c--) {
                    o = _e.exec(e[c]) || [];
                    d = m = o[1];
                    h = (o[2] || "").split(".").sort();
                    if (!d) {
                        continue
                    }
                    f = k.event.special[d] || {};
                    d = (a ? f.delegateType : f.bindType) || d;
                    f = k.event.special[d] || {};
                    u = k.extend({
                        type: d,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: a,
                        needsContext: a && k.expr.match.needsContext.test(a),
                        namespace: h.join(".")
                    }, i);
                    if (!(p = l[d])) {
                        p = l[d] = [];
                        p.delegateCount = 0;
                        if (!f.setup || f.setup.call(t, r, h, s) === false) {
                            if (t.addEventListener) {
                                t.addEventListener(d, s)
                            }
                        }
                    }
                    if (f.add) {
                        f.add.call(t, u);
                        if (!u.handler.guid) {
                            u.handler.guid = n.guid
                        }
                    }
                    if (a) {
                        p.splice(p.delegateCount++, 0, u)
                    } else {
                        p.push(u)
                    }
                    k.event.global[d] = true
                }
            },
            remove: function(e, t, n, r, a) {
                var i, s, o, l, c, u, f, p, d, h, m, g = z.hasData(e) && z.get(e);
                if (!g || !(l = g.events)) {
                    return
                }
                t = (t || "").match(O) || [""];
                c = t.length;
                while (c--) {
                    o = _e.exec(t[c]) || [];
                    d = m = o[1];
                    h = (o[2] || "").split(".").sort();
                    if (!d) {
                        for (d in l) {
                            k.event.remove(e, d + t[c], n, r, true)
                        }
                        continue
                    }
                    f = k.event.special[d] || {};
                    d = (r ? f.delegateType : f.bindType) || d;
                    p = l[d] || [];
                    o = o[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    s = i = p.length;
                    while (i--) {
                        u = p[i];
                        if ((a || m === u.origType) && (!n || n.guid === u.guid) && (!o || o.test(u.namespace)) && (!r || r === u.selector || r === "**" && u.selector)) {
                            p.splice(i, 1);
                            if (u.selector) {
                                p.delegateCount--
                            }
                            if (f.remove) {
                                f.remove.call(e, u)
                            }
                        }
                    }
                    if (s && !p.length) {
                        if (!f.teardown || f.teardown.call(e, h, g.handle) === false) {
                            k.removeEvent(e, d, g.handle)
                        }
                        delete l[d]
                    }
                }
                if (k.isEmptyObject(l)) {
                    z.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t = k.event.fix(e);
                var n, r, a, i, s, o, l = new Array(arguments.length),
                    c = (z.get(this, "events") || {})[t.type] || [],
                    u = k.event.special[t.type] || {};
                l[0] = t;
                for (n = 1; n < arguments.length; n++) {
                    l[n] = arguments[n]
                }
                t.delegateTarget = this;
                if (u.preDispatch && u.preDispatch.call(this, t) === false) {
                    return
                }
                o = k.event.handlers.call(this, t, c);
                n = 0;
                while ((i = o[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = i.elem;
                    r = 0;
                    while ((s = i.handlers[r++]) && !t.isImmediatePropagationStopped()) {
                        if (!t.rnamespace || t.rnamespace.test(s.namespace)) {
                            t.handleObj = s;
                            t.data = s.data;
                            a = ((k.event.special[s.origType] || {}).handle || s.handler).apply(i.elem, l);
                            if (a !== undefined) {
                                if ((t.result = a) === false) {
                                    t.preventDefault();
                                    t.stopPropagation()
                                }
                            }
                        }
                    }
                }
                if (u.postDispatch) {
                    u.postDispatch.call(this, t)
                }
                return t.result
            },
            handlers: function(e, t) {
                var n, r, a, i, s, o = [],
                    l = t.delegateCount,
                    c = e.target;
                if (l && c.nodeType && !(e.type === "click" && e.button >= 1)) {
                    for (; c !== this; c = c.parentNode || this) {
                        if (c.nodeType === 1 && !(e.type === "click" && c.disabled === true)) {
                            i = [];
                            s = {};
                            for (n = 0; n < l; n++) {
                                r = t[n];
                                a = r.selector + " ";
                                if (s[a] === undefined) {
                                    s[a] = r.needsContext ? k(a, this).index(c) > -1 : k.find(a, this, null, [c]).length
                                }
                                if (s[a]) {
                                    i.push(r)
                                }
                            }
                            if (i.length) {
                                o.push({
                                    elem: c,
                                    handlers: i
                                })
                            }
                        }
                    }
                }
                c = this;
                if (l < t.length) {
                    o.push({
                        elem: c,
                        handlers: t.slice(l)
                    })
                }
                return o
            },
            addProp: function(t, e) {
                Object.defineProperty(k.Event.prototype, t, {
                    enumerable: true,
                    configurable: true,
                    get: k.isFunction(e) ? function() {
                        if (this.originalEvent) {
                            return e(this.originalEvent)
                        }
                    } : function() {
                        if (this.originalEvent) {
                            return this.originalEvent[t]
                        }
                    },
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: true,
                            configurable: true,
                            writable: true,
                            value: e
                        })
                    }
                })
            },
            fix: function(e) {
                return e[k.expando] ? e : new k.Event(e)
            },
            special: {
                load: {
                    noBubble: true
                },
                focus: {
                    trigger: function() {
                        if (this !== xe() && this.focus) {
                            this.focus();
                            return false
                        }
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === xe() && this.blur) {
                            this.blur();
                            return false
                        }
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if (this.type === "checkbox" && this.click && k.nodeName(this, "input")) {
                            this.click();
                            return false
                        }
                    },
                    _default: function(e) {
                        return k.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        if (e.result !== undefined && e.originalEvent) {
                            e.originalEvent.returnValue = e.result
                        }
                    }
                }
            }
        };
        k.removeEvent = function(e, t, n) {
            if (e.removeEventListener) {
                e.removeEventListener(t, n)
            }
        };
        k.Event = function(e, t) {
            if (!(this instanceof k.Event)) {
                return new k.Event(e, t)
            }
            if (e && e.type) {
                this.originalEvent = e;
                this.type = e.type;
                this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && e.returnValue === false ? be : we;
                this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target;
                this.currentTarget = e.currentTarget;
                this.relatedTarget = e.relatedTarget
            } else {
                this.type = e
            }
            if (t) {
                k.extend(this, t)
            }
            this.timeStamp = e && e.timeStamp || k.now();
            this[k.expando] = true
        };
        k.Event.prototype = {
            constructor: k.Event,
            isDefaultPrevented: we,
            isPropagationStopped: we,
            isImmediatePropagationStopped: we,
            isSimulated: false,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = be;
                if (e && !this.isSimulated) {
                    e.preventDefault()
                }
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = be;
                if (e && !this.isSimulated) {
                    e.stopPropagation()
                }
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = be;
                if (e && !this.isSimulated) {
                    e.stopImmediatePropagation()
                }
                this.stopPropagation()
            }
        };
        k.each({
            altKey: true,
            bubbles: true,
            cancelable: true,
            changedTouches: true,
            ctrlKey: true,
            detail: true,
            eventPhase: true,
            metaKey: true,
            pageX: true,
            pageY: true,
            shiftKey: true,
            view: true,
            char: true,
            charCode: true,
            key: true,
            keyCode: true,
            button: true,
            buttons: true,
            clientX: true,
            clientY: true,
            offsetX: true,
            offsetY: true,
            pointerId: true,
            pointerType: true,
            screenX: true,
            screenY: true,
            targetTouches: true,
            toElement: true,
            touches: true,
            which: function(e) {
                var t = e.button;
                if (e.which == null && ve.test(e.type)) {
                    return e.charCode != null ? e.charCode : e.keyCode
                }
                if (!e.which && t !== undefined && ye.test(e.type)) {
                    if (t & 1) {
                        return 1
                    }
                    if (t & 2) {
                        return 3
                    }
                    if (t & 4) {
                        return 2
                    }
                    return 0
                }
                return e.which
            }
        }, k.event.addProp);
        k.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, i) {
            k.event.special[e] = {
                delegateType: i,
                bindType: i,
                handle: function(e) {
                    var t, n = this,
                        r = e.relatedTarget,
                        a = e.handleObj;
                    if (!r || r !== n && !k.contains(n, r)) {
                        e.type = a.origType;
                        t = a.handler.apply(this, arguments);
                        e.type = i
                    }
                    return t
                }
            }
        });
        k.fn.extend({
            on: function(e, t, n, r) {
                return Se(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return Se(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, a;
                if (e && e.preventDefault && e.handleObj) {
                    r = e.handleObj;
                    k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
                    return this
                }
                if (typeof e === "object") {
                    for (a in e) {
                        this.off(a, t, e[a])
                    }
                    return this
                }
                if (t === false || typeof t === "function") {
                    n = t;
                    t = undefined
                }
                if (n === false) {
                    n = we
                }
                return this.each(function() {
                    k.event.remove(this, e, n, t)
                })
            }
        });
        var Ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            ke = /<script|<style|<link/i,
            Te = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ae = /^true\/(.*)/,
            Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Pe(e, t) {
            if (k.nodeName(e, "table") && k.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr")) {
                return e.getElementsByTagName("tbody")[0] || e
            }
            return e
        }

        function Ie(e) {
            e.type = (e.getAttribute("type") !== null) + "/" + e.type;
            return e
        }

        function Le(e) {
            var t = Ae.exec(e.type);
            if (t) {
                e.type = t[1]
            } else {
                e.removeAttribute("type")
            }
            return e
        }

        function Re(e, t) {
            var n, r, a, i, s, o, l, c;
            if (t.nodeType !== 1) {
                return
            }
            if (z.hasData(e)) {
                i = z.access(e);
                s = z.set(t, i);
                c = i.events;
                if (c) {
                    delete s.handle;
                    s.events = {};
                    for (a in c) {
                        for (n = 0, r = c[a].length; n < r; n++) {
                            k.event.add(t, a, c[a][n])
                        }
                    }
                }
            }
            if (V.hasData(e)) {
                o = V.access(e);
                l = k.extend({}, o);
                V.set(t, l)
            }
        }

        function Ne(e, t) {
            var n = t.nodeName.toLowerCase();
            if (n === "input" && le.test(e.type)) {
                t.checked = e.checked
            } else if (n === "input" || n === "textarea") {
                t.defaultValue = e.defaultValue
            }
        }

        function De(n, r, a, i) {
            r = m.apply([], r);
            var e, t, s, o, l, c, u = 0,
                f = n.length,
                p = f - 1,
                d = r[0],
                h = k.isFunction(d);
            if (h || f > 1 && typeof d === "string" && !g.checkClone && Te.test(d)) {
                return n.each(function(e) {
                    var t = n.eq(e);
                    if (h) {
                        r[0] = d.call(this, e, t.html())
                    }
                    De(t, r, a, i)
                })
            }
            if (f) {
                e = me(r, n[0].ownerDocument, false, n, i);
                t = e.firstChild;
                if (e.childNodes.length === 1) {
                    e = t
                }
                if (t || i) {
                    s = k.map(pe(e, "script"), Ie);
                    o = s.length;
                    for (; u < f; u++) {
                        l = e;
                        if (u !== p) {
                            l = k.clone(l, true, true);
                            if (o) {
                                k.merge(s, pe(l, "script"))
                            }
                        }
                        a.call(n[u], l, u)
                    }
                    if (o) {
                        c = s[s.length - 1].ownerDocument;
                        k.map(s, Le);
                        for (u = 0; u < o; u++) {
                            l = s[u];
                            if (ue.test(l.type || "") && !z.access(l, "globalEval") && k.contains(c, l)) {
                                if (l.src) {
                                    if (k._evalUrl) {
                                        k._evalUrl(l.src)
                                    }
                                } else {
                                    v(l.textContent.replace(Ee, ""), c)
                                }
                            }
                        }
                    }
                }
            }
            return n
        }

        function Me(e, t, n) {
            var r, a = t ? k.filter(t, e) : e,
                i = 0;
            for (;
                (r = a[i]) != null; i++) {
                if (!n && r.nodeType === 1) {
                    k.cleanData(pe(r))
                }
                if (r.parentNode) {
                    if (n && k.contains(r.ownerDocument, r)) {
                        de(pe(r, "script"))
                    }
                    r.parentNode.removeChild(r)
                }
            }
            return e
        }
        k.extend({
            htmlPrefilter: function(e) {
                return e.replace(Ce, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var r, a, i, s, o = e.cloneNode(true),
                    l = k.contains(e.ownerDocument, e);
                if (!g.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !k.isXMLDoc(e)) {
                    s = pe(o);
                    i = pe(e);
                    for (r = 0, a = i.length; r < a; r++) {
                        Ne(i[r], s[r])
                    }
                }
                if (t) {
                    if (n) {
                        i = i || pe(e);
                        s = s || pe(o);
                        for (r = 0, a = i.length; r < a; r++) {
                            Re(i[r], s[r])
                        }
                    } else {
                        Re(e, o)
                    }
                }
                s = pe(o, "script");
                if (s.length > 0) {
                    de(s, !l && pe(e, "script"))
                }
                return o
            },
            cleanData: function(e) {
                var t, n, r, a = k.event.special,
                    i = 0;
                for (;
                    (n = e[i]) !== undefined; i++) {
                    if (W(n)) {
                        if (t = n[z.expando]) {
                            if (t.events) {
                                for (r in t.events) {
                                    if (a[r]) {
                                        k.event.remove(n, r)
                                    } else {
                                        k.removeEvent(n, r, t.handle)
                                    }
                                }
                            }
                            n[z.expando] = undefined
                        }
                        if (n[V.expando]) {
                            n[V.expando] = undefined
                        }
                    }
                }
            }
        });
        k.fn.extend({
            detach: function(e) {
                return Me(this, e, true)
            },
            remove: function(e) {
                return Me(this, e)
            },
            text: function(e) {
                return G(this, function(e) {
                    return e === undefined ? k.text(this) : this.empty().each(function() {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            this.textContent = e
                        }
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return De(this, arguments, function(e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = Pe(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return De(this, arguments, function(e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = Pe(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return De(this, arguments, function(e) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(e, this)
                    }
                })
            },
            after: function() {
                return De(this, arguments, function(e) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(e, this.nextSibling)
                    }
                })
            },
            empty: function() {
                var e, t = 0;
                for (;
                    (e = this[t]) != null; t++) {
                    if (e.nodeType === 1) {
                        k.cleanData(pe(e, false));
                        e.textContent = ""
                    }
                }
                return this
            },
            clone: function(e, t) {
                e = e == null ? false : e;
                t = t == null ? e : t;
                return this.map(function() {
                    return k.clone(this, e, t)
                })
            },
            html: function(e) {
                return G(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (e === undefined && t.nodeType === 1) {
                        return t.innerHTML
                    }
                    if (typeof e === "string" && !ke.test(e) && !fe[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = k.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) {
                                t = this[n] || {};
                                if (t.nodeType === 1) {
                                    k.cleanData(pe(t, false));
                                    t.innerHTML = e
                                }
                            }
                            t = 0
                        } catch (e) {}
                    }
                    if (t) {
                        this.empty().append(e)
                    }
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var n = [];
                return De(this, arguments, function(e) {
                    var t = this.parentNode;
                    if (k.inArray(this, n) < 0) {
                        k.cleanData(pe(this));
                        if (t) {
                            t.replaceChild(e, this)
                        }
                    }
                }, n)
            }
        });
        k.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, s) {
            k.fn[e] = function(e) {
                var t, n = [],
                    r = k(e),
                    a = r.length - 1,
                    i = 0;
                for (; i <= a; i++) {
                    t = i === a ? this : this.clone(true);
                    k(r[i])[s](t);
                    l.apply(n, t.get())
                }
                return this.pushStack(n)
            }
        });
        var Oe = /^margin/;
        var $e = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i");
        var je = function(e) {
            var t = e.ownerDocument.defaultView;
            if (!t || !t.opener) {
                t = S
            }
            return t.getComputedStyle(e)
        };
        (function() {
            function e() {
                if (!s) {
                    return
                }
                s.style.cssText = "box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
                s.innerHTML = "";
                ge.appendChild(i);
                var e = S.getComputedStyle(s);
                t = e.top !== "1%";
                a = e.marginLeft === "2px";
                n = e.width === "4px";
                s.style.marginRight = "50%";
                r = e.marginRight === "4px";
                ge.removeChild(i);
                s = null
            }
            var t, n, r, a, i = C.createElement("div"),
                s = C.createElement("div");
            if (!s.style) {
                return
            }
            s.style.backgroundClip = "content-box";
            s.cloneNode(true).style.backgroundClip = "";
            g.clearCloneStyle = s.style.backgroundClip === "content-box";
            i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
            i.appendChild(s);
            k.extend(g, {
                pixelPosition: function() {
                    e();
                    return t
                },
                boxSizingReliable: function() {
                    e();
                    return n
                },
                pixelMarginRight: function() {
                    e();
                    return r
                },
                reliableMarginLeft: function() {
                    e();
                    return a
                }
            })
        })();

        function He(e, t, n) {
            var r, a, i, s, o = e.style;
            n = n || je(e);
            if (n) {
                s = n.getPropertyValue(t) || n[t];
                if (s === "" && !k.contains(e.ownerDocument, e)) {
                    s = k.style(e, t)
                }
                if (!g.pixelMarginRight() && $e.test(s) && Oe.test(t)) {
                    r = o.width;
                    a = o.minWidth;
                    i = o.maxWidth;
                    o.minWidth = o.maxWidth = o.width = s;
                    s = n.width;
                    o.width = r;
                    o.minWidth = a;
                    o.maxWidth = i
                }
            }
            return s !== undefined ? s + "" : s
        }

        function qe(e, t) {
            return {
                get: function() {
                    if (e()) {
                        delete this.get;
                        return
                    }
                    return (this.get = t).apply(this, arguments)
                }
            }
        }
        var Fe = /^(none|table(?!-c[ea]).+)/,
            Be = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ue = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Ge = ["Webkit", "Moz", "ms"],
            We = C.createElement("div").style;

        function Ke(e) {
            if (e in We) {
                return e
            }
            var t = e[0].toUpperCase() + e.slice(1),
                n = Ge.length;
            while (n--) {
                e = Ge[n] + t;
                if (e in We) {
                    return e
                }
            }
        }

        function ze(e, t, n) {
            var r = ee.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function Ve(e, t, n, r, a) {
            var i, s = 0;
            if (n === (r ? "border" : "content")) {
                i = 4
            } else {
                i = t === "width" ? 1 : 0
            }
            for (; i < 4; i += 2) {
                if (n === "margin") {
                    s += k.css(e, n + te[i], true, a)
                }
                if (r) {
                    if (n === "content") {
                        s -= k.css(e, "padding" + te[i], true, a)
                    }
                    if (n !== "margin") {
                        s -= k.css(e, "border" + te[i] + "Width", true, a)
                    }
                } else {
                    s += k.css(e, "padding" + te[i], true, a);
                    if (n !== "padding") {
                        s += k.css(e, "border" + te[i] + "Width", true, a)
                    }
                }
            }
            return s
        }

        function Je(e, t, n) {
            var r, a = true,
                i = je(e),
                s = k.css(e, "boxSizing", false, i) === "border-box";
            if (e.getClientRects().length) {
                r = e.getBoundingClientRect()[t]
            }
            if (r <= 0 || r == null) {
                r = He(e, t, i);
                if (r < 0 || r == null) {
                    r = e.style[t]
                }
                if ($e.test(r)) {
                    return r
                }
                a = s && (g.boxSizingReliable() || r === e.style[t]);
                r = parseFloat(r) || 0
            }
            return r + Ve(e, t, n || (s ? "border" : "content"), a, i) + "px"
        }
        k.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = He(e, "opacity");
                            return n === "" ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: true,
                columnCount: true,
                fillOpacity: true,
                flexGrow: true,
                flexShrink: true,
                fontWeight: true,
                lineHeight: true,
                opacity: true,
                order: true,
                orphans: true,
                widows: true,
                zIndex: true,
                zoom: true
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(e, t, n, r) {
                if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) {
                    return
                }
                var a, i, s, o = k.camelCase(t),
                    l = e.style;
                t = k.cssProps[o] || (k.cssProps[o] = Ke(o) || o);
                s = k.cssHooks[t] || k.cssHooks[o];
                if (n !== undefined) {
                    i = typeof n;
                    if (i === "string" && (a = ee.exec(n)) && a[1]) {
                        n = ae(e, t, a);
                        i = "number"
                    }
                    if (n == null || n !== n) {
                        return
                    }
                    if (i === "number") {
                        n += a && a[3] || (k.cssNumber[o] ? "" : "px")
                    }
                    if (!g.clearCloneStyle && n === "" && t.indexOf("background") === 0) {
                        l[t] = "inherit"
                    }
                    if (!s || !("set" in s) || (n = s.set(e, n, r)) !== undefined) {
                        l[t] = n
                    }
                } else {
                    if (s && "get" in s && (a = s.get(e, false, r)) !== undefined) {
                        return a
                    }
                    return l[t]
                }
            },
            css: function(e, t, n, r) {
                var a, i, s, o = k.camelCase(t);
                t = k.cssProps[o] || (k.cssProps[o] = Ke(o) || o);
                s = k.cssHooks[t] || k.cssHooks[o];
                if (s && "get" in s) {
                    a = s.get(e, true, n)
                }
                if (a === undefined) {
                    a = He(e, t, r)
                }
                if (a === "normal" && t in Ue) {
                    a = Ue[t]
                }
                if (n === "" || n) {
                    i = parseFloat(a);
                    return n === true || isFinite(i) ? i || 0 : a
                }
                return a
            }
        });
        k.each(["height", "width"], function(e, s) {
            k.cssHooks[s] = {
                get: function(e, t, n) {
                    if (t) {
                        return Fe.test(k.css(e, "display")) && (!e.getClientRects().length || !e.getBoundingClientRect().width) ? re(e, Be, function() {
                            return Je(e, s, n)
                        }) : Je(e, s, n)
                    }
                },
                set: function(e, t, n) {
                    var r, a = n && je(e),
                        i = n && Ve(e, s, n, k.css(e, "boxSizing", false, a) === "border-box", a);
                    if (i && (r = ee.exec(t)) && (r[3] || "px") !== "px") {
                        e.style[s] = t;
                        t = k.css(e, s)
                    }
                    return ze(e, t, i)
                }
            }
        });
        k.cssHooks.marginLeft = qe(g.reliableMarginLeft, function(e, t) {
            if (t) {
                return (parseFloat(He(e, "marginLeft")) || e.getBoundingClientRect().left - re(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
            }
        });
        k.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, i) {
            k.cssHooks[a + i] = {
                expand: function(e) {
                    var t = 0,
                        n = {},
                        r = typeof e === "string" ? e.split(" ") : [e];
                    for (; t < 4; t++) {
                        n[a + te[t] + i] = r[t] || r[t - 2] || r[0]
                    }
                    return n
                }
            };
            if (!Oe.test(a)) {
                k.cssHooks[a + i].set = ze
            }
        });
        k.fn.extend({
            css: function(e, t) {
                return G(this, function(e, t, n) {
                    var r, a, i = {},
                        s = 0;
                    if (k.isArray(t)) {
                        r = je(e);
                        a = t.length;
                        for (; s < a; s++) {
                            i[t[s]] = k.css(e, t[s], false, r)
                        }
                        return i
                    }
                    return n !== undefined ? k.style(e, t, n) : k.css(e, t)
                }, e, t, arguments.length > 1)
            }
        });

        function Xe(e, t, n, r, a) {
            return new Xe.prototype.init(e, t, n, r, a)
        }
        k.Tween = Xe;
        Xe.prototype = {
            constructor: Xe,
            init: function(e, t, n, r, a, i) {
                this.elem = e;
                this.prop = n;
                this.easing = a || k.easing._default;
                this.options = t;
                this.start = this.now = this.cur();
                this.end = r;
                this.unit = i || (k.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = Xe.propHooks[this.prop];
                return e && e.get ? e.get(this) : Xe.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = Xe.propHooks[this.prop];
                if (this.options.duration) {
                    this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)
                } else {
                    this.pos = t = e
                }
                this.now = (this.end - this.start) * t + this.start;
                if (this.options.step) {
                    this.options.step.call(this.elem, this.now, this)
                }
                if (n && n.set) {
                    n.set(this)
                } else {
                    Xe.propHooks._default.set(this)
                }
                return this
            }
        };
        Xe.prototype.init.prototype = Xe.prototype;
        Xe.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    if (e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null) {
                        return e.elem[e.prop]
                    }
                    t = k.css(e.elem, e.prop, "");
                    return !t || t === "auto" ? 0 : t
                },
                set: function(e) {
                    if (k.fx.step[e.prop]) {
                        k.fx.step[e.prop](e)
                    } else if (e.elem.nodeType === 1 && (e.elem.style[k.cssProps[e.prop]] != null || k.cssHooks[e.prop])) {
                        k.style(e.elem, e.prop, e.now + e.unit)
                    } else {
                        e.elem[e.prop] = e.now
                    }
                }
            }
        };
        Xe.propHooks.scrollTop = Xe.propHooks.scrollLeft = {
            set: function(e) {
                if (e.elem.nodeType && e.elem.parentNode) {
                    e.elem[e.prop] = e.now
                }
            }
        };
        k.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        };
        k.fx = Xe.prototype.init;
        k.fx.step = {};
        var Qe, Ye, Ze = /^(?:toggle|show|hide)$/,
            et = /queueHooks$/;

        function tt() {
            if (Ye) {
                S.requestAnimationFrame(tt);
                k.fx.tick()
            }
        }

        function nt() {
            S.setTimeout(function() {
                Qe = undefined
            });
            return Qe = k.now()
        }

        function rt(e, t) {
            var n, r = 0,
                a = {
                    height: e
                };
            t = t ? 1 : 0;
            for (; r < 4; r += 2 - t) {
                n = te[r];
                a["margin" + n] = a["padding" + n] = e
            }
            if (t) {
                a.opacity = a.width = e
            }
            return a
        }

        function at(e, t, n) {
            var r, a = (ot.tweeners[t] || []).concat(ot.tweeners["*"]),
                i = 0,
                s = a.length;
            for (; i < s; i++) {
                if (r = a[i].call(n, t, e)) {
                    return r
                }
            }
        }

        function it(e, t, n) {
            var r, a, i, s, o, l, c, u, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                m = e.nodeType && ne(e),
                g = z.get(e, "fxshow");
            if (!n.queue) {
                s = k._queueHooks(e, "fx");
                if (s.unqueued == null) {
                    s.unqueued = 0;
                    o = s.empty.fire;
                    s.empty.fire = function() {
                        if (!s.unqueued) {
                            o()
                        }
                    }
                }
                s.unqueued++;
                p.always(function() {
                    p.always(function() {
                        s.unqueued--;
                        if (!k.queue(e, "fx").length) {
                            s.empty.fire()
                        }
                    })
                })
            }
            for (r in t) {
                a = t[r];
                if (Ze.test(a)) {
                    delete t[r];
                    i = i || a === "toggle";
                    if (a === (m ? "hide" : "show")) {
                        if (a === "show" && g && g[r] !== undefined) {
                            m = true
                        } else {
                            continue
                        }
                    }
                    d[r] = g && g[r] || k.style(e, r)
                }
            }
            l = !k.isEmptyObject(t);
            if (!l && k.isEmptyObject(d)) {
                return
            }
            if (f && e.nodeType === 1) {
                n.overflow = [h.overflow, h.overflowX, h.overflowY];
                c = g && g.display;
                if (c == null) {
                    c = z.get(e, "display")
                }
                u = k.css(e, "display");
                if (u === "none") {
                    if (c) {
                        u = c
                    } else {
                        oe([e], true);
                        c = e.style.display || c;
                        u = k.css(e, "display");
                        oe([e])
                    }
                }
                if (u === "inline" || u === "inline-block" && c != null) {
                    if (k.css(e, "float") === "none") {
                        if (!l) {
                            p.done(function() {
                                h.display = c
                            });
                            if (c == null) {
                                u = h.display;
                                c = u === "none" ? "" : u
                            }
                        }
                        h.display = "inline-block"
                    }
                }
            }
            if (n.overflow) {
                h.overflow = "hidden";
                p.always(function() {
                    h.overflow = n.overflow[0];
                    h.overflowX = n.overflow[1];
                    h.overflowY = n.overflow[2]
                })
            }
            l = false;
            for (r in d) {
                if (!l) {
                    if (g) {
                        if ("hidden" in g) {
                            m = g.hidden
                        }
                    } else {
                        g = z.access(e, "fxshow", {
                            display: c
                        })
                    }
                    if (i) {
                        g.hidden = !m
                    }
                    if (m) {
                        oe([e], true)
                    }
                    p.done(function() {
                        if (!m) {
                            oe([e])
                        }
                        z.remove(e, "fxshow");
                        for (r in d) {
                            k.style(e, r, d[r])
                        }
                    })
                }
                l = at(m ? g[r] : 0, r, p);
                if (!(r in g)) {
                    g[r] = l.start;
                    if (m) {
                        l.end = l.start;
                        l.start = 0
                    }
                }
            }
        }

        function st(e, t) {
            var n, r, a, i, s;
            for (n in e) {
                r = k.camelCase(n);
                a = t[r];
                i = e[n];
                if (k.isArray(i)) {
                    a = i[1];
                    i = e[n] = i[0]
                }
                if (n !== r) {
                    e[r] = i;
                    delete e[n]
                }
                s = k.cssHooks[r];
                if (s && "expand" in s) {
                    i = s.expand(i);
                    delete e[r];
                    for (n in i) {
                        if (!(n in e)) {
                            e[n] = i[n];
                            t[n] = a
                        }
                    }
                } else {
                    t[r] = a
                }
            }
        }

        function ot(s, e, t) {
            var n, o, r = 0,
                a = ot.prefilters.length,
                l = k.Deferred().always(function() {
                    delete i.elem
                }),
                i = function() {
                    if (o) {
                        return false
                    }
                    var e = Qe || nt(),
                        t = Math.max(0, c.startTime + c.duration - e),
                        n = t / c.duration || 0,
                        r = 1 - n,
                        a = 0,
                        i = c.tweens.length;
                    for (; a < i; a++) {
                        c.tweens[a].run(r)
                    }
                    l.notifyWith(s, [c, r, t]);
                    if (r < 1 && i) {
                        return t
                    } else {
                        l.resolveWith(s, [c]);
                        return false
                    }
                },
                c = l.promise({
                    elem: s,
                    props: k.extend({}, e),
                    opts: k.extend(true, {
                        specialEasing: {},
                        easing: k.easing._default
                    }, t),
                    originalProperties: e,
                    originalOptions: t,
                    startTime: Qe || nt(),
                    duration: t.duration,
                    tweens: [],
                    createTween: function(e, t) {
                        var n = k.Tween(s, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                        c.tweens.push(n);
                        return n
                    },
                    stop: function(e) {
                        var t = 0,
                            n = e ? c.tweens.length : 0;
                        if (o) {
                            return this
                        }
                        o = true;
                        for (; t < n; t++) {
                            c.tweens[t].run(1)
                        }
                        if (e) {
                            l.notifyWith(s, [c, 1, 0]);
                            l.resolveWith(s, [c, e])
                        } else {
                            l.rejectWith(s, [c, e])
                        }
                        return this
                    }
                }),
                u = c.props;
            st(u, c.opts.specialEasing);
            for (; r < a; r++) {
                n = ot.prefilters[r].call(c, s, u, c.opts);
                if (n) {
                    if (k.isFunction(n.stop)) {
                        k._queueHooks(c.elem, c.opts.queue).stop = k.proxy(n.stop, n)
                    }
                    return n
                }
            }
            k.map(u, at, c);
            if (k.isFunction(c.opts.start)) {
                c.opts.start.call(s, c)
            }
            k.fx.timer(k.extend(i, {
                elem: s,
                anim: c,
                queue: c.opts.queue
            }));
            return c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }
        k.Animation = k.extend(ot, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    ae(n.elem, e, ee.exec(t), n);
                    return n
                }]
            },
            tweener: function(e, t) {
                if (k.isFunction(e)) {
                    t = e;
                    e = ["*"]
                } else {
                    e = e.match(O)
                }
                var n, r = 0,
                    a = e.length;
                for (; r < a; r++) {
                    n = e[r];
                    ot.tweeners[n] = ot.tweeners[n] || [];
                    ot.tweeners[n].unshift(t)
                }
            },
            prefilters: [it],
            prefilter: function(e, t) {
                if (t) {
                    ot.prefilters.unshift(e)
                } else {
                    ot.prefilters.push(e)
                }
            }
        });
        k.speed = function(e, t, n) {
            var r = e && typeof e === "object" ? k.extend({}, e) : {
                complete: n || !n && t || k.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !k.isFunction(t) && t
            };
            if (k.fx.off || C.hidden) {
                r.duration = 0
            } else {
                if (typeof r.duration !== "number") {
                    if (r.duration in k.fx.speeds) {
                        r.duration = k.fx.speeds[r.duration]
                    } else {
                        r.duration = k.fx.speeds._default
                    }
                }
            }
            if (r.queue == null || r.queue === true) {
                r.queue = "fx"
            }
            r.old = r.complete;
            r.complete = function() {
                if (k.isFunction(r.old)) {
                    r.old.call(this)
                }
                if (r.queue) {
                    k.dequeue(this, r.queue)
                }
            };
            return r
        };
        k.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(ne).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(t, e, n, r) {
                var a = k.isEmptyObject(t),
                    i = k.speed(e, n, r),
                    s = function() {
                        var e = ot(this, k.extend({}, t), i);
                        if (a || z.get(this, "finish")) {
                            e.stop(true)
                        }
                    };
                s.finish = s;
                return a || i.queue === false ? this.each(s) : this.queue(i.queue, s)
            },
            stop: function(a, e, i) {
                var s = function(e) {
                    var t = e.stop;
                    delete e.stop;
                    t(i)
                };
                if (typeof a !== "string") {
                    i = e;
                    e = a;
                    a = undefined
                }
                if (e && a !== false) {
                    this.queue(a || "fx", [])
                }
                return this.each(function() {
                    var e = true,
                        t = a != null && a + "queueHooks",
                        n = k.timers,
                        r = z.get(this);
                    if (t) {
                        if (r[t] && r[t].stop) {
                            s(r[t])
                        }
                    } else {
                        for (t in r) {
                            if (r[t] && r[t].stop && et.test(t)) {
                                s(r[t])
                            }
                        }
                    }
                    for (t = n.length; t--;) {
                        if (n[t].elem === this && (a == null || n[t].queue === a)) {
                            n[t].anim.stop(i);
                            e = false;
                            n.splice(t, 1)
                        }
                    }
                    if (e || !i) {
                        k.dequeue(this, a)
                    }
                })
            },
            finish: function(s) {
                if (s !== false) {
                    s = s || "fx"
                }
                return this.each(function() {
                    var e, t = z.get(this),
                        n = t[s + "queue"],
                        r = t[s + "queueHooks"],
                        a = k.timers,
                        i = n ? n.length : 0;
                    t.finish = true;
                    k.queue(this, s, []);
                    if (r && r.stop) {
                        r.stop.call(this, true)
                    }
                    for (e = a.length; e--;) {
                        if (a[e].elem === this && a[e].queue === s) {
                            a[e].anim.stop(true);
                            a.splice(e, 1)
                        }
                    }
                    for (e = 0; e < i; e++) {
                        if (n[e] && n[e].finish) {
                            n[e].finish.call(this)
                        }
                    }
                    delete t.finish
                })
            }
        });
        k.each(["toggle", "show", "hide"], function(e, r) {
            var a = k.fn[r];
            k.fn[r] = function(e, t, n) {
                return e == null || typeof e === "boolean" ? a.apply(this, arguments) : this.animate(rt(r, true), e, t, n)
            }
        });
        k.each({
            slideDown: rt("show"),
            slideUp: rt("hide"),
            slideToggle: rt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, r) {
            k.fn[e] = function(e, t, n) {
                return this.animate(r, e, t, n)
            }
        });
        k.timers = [];
        k.fx.tick = function() {
            var e, t = 0,
                n = k.timers;
            Qe = k.now();
            for (; t < n.length; t++) {
                e = n[t];
                if (!e() && n[t] === e) {
                    n.splice(t--, 1)
                }
            }
            if (!n.length) {
                k.fx.stop()
            }
            Qe = undefined
        };
        k.fx.timer = function(e) {
            k.timers.push(e);
            if (e()) {
                k.fx.start()
            } else {
                k.timers.pop()
            }
        };
        k.fx.interval = 13;
        k.fx.start = function() {
            if (!Ye) {
                Ye = S.requestAnimationFrame ? S.requestAnimationFrame(tt) : S.setInterval(k.fx.tick, k.fx.interval)
            }
        };
        k.fx.stop = function() {
            if (S.cancelAnimationFrame) {
                S.cancelAnimationFrame(Ye)
            } else {
                S.clearInterval(Ye)
            }
            Ye = null
        };
        k.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        k.fn.delay = function(r, e) {
            r = k.fx ? k.fx.speeds[r] || r : r;
            e = e || "fx";
            return this.queue(e, function(e, t) {
                var n = S.setTimeout(e, r);
                t.stop = function() {
                    S.clearTimeout(n)
                }
            })
        };
        (function() {
            var e = C.createElement("input"),
                t = C.createElement("select"),
                n = t.appendChild(C.createElement("option"));
            e.type = "checkbox";
            g.checkOn = e.value !== "";
            g.optSelected = n.selected;
            e = C.createElement("input");
            e.value = "t";
            e.type = "radio";
            g.radioValue = e.value === "t"
        })();
        var lt, ct = k.expr.attrHandle;
        k.fn.extend({
            attr: function(e, t) {
                return G(this, k.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    k.removeAttr(this, e)
                })
            }
        });
        k.extend({
            attr: function(e, t, n) {
                var r, a, i = e.nodeType;
                if (i === 3 || i === 8 || i === 2) {
                    return
                }
                if (typeof e.getAttribute === "undefined") {
                    return k.prop(e, t, n)
                }
                if (i !== 1 || !k.isXMLDoc(e)) {
                    a = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? lt : undefined)
                }
                if (n !== undefined) {
                    if (n === null) {
                        k.removeAttr(e, t);
                        return
                    }
                    if (a && "set" in a && (r = a.set(e, n, t)) !== undefined) {
                        return r
                    }
                    e.setAttribute(t, n + "");
                    return n
                }
                if (a && "get" in a && (r = a.get(e, t)) !== null) {
                    return r
                }
                r = k.find.attr(e, t);
                return r == null ? undefined : r
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!g.radioValue && t === "radio" && k.nodeName(e, "input")) {
                            var n = e.value;
                            e.setAttribute("type", t);
                            if (n) {
                                e.value = n
                            }
                            return t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0,
                    a = t && t.match(O);
                if (a && e.nodeType === 1) {
                    while (n = a[r++]) {
                        e.removeAttribute(n)
                    }
                }
            }
        });
        lt = {
            set: function(e, t, n) {
                if (t === false) {
                    k.removeAttr(e, n)
                } else {
                    e.setAttribute(n, n)
                }
                return n
            }
        };
        k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var s = ct[t] || k.find.attr;
            ct[t] = function(e, t, n) {
                var r, a, i = t.toLowerCase();
                if (!n) {
                    a = ct[i];
                    ct[i] = r;
                    r = s(e, t, n) != null ? i : null;
                    ct[i] = a
                }
                return r
            }
        });
        var ut = /^(?:input|select|textarea|button)$/i,
            ft = /^(?:a|area)$/i;
        k.fn.extend({
            prop: function(e, t) {
                return G(this, k.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[k.propFix[e] || e]
                })
            }
        });
        k.extend({
            prop: function(e, t, n) {
                var r, a, i = e.nodeType;
                if (i === 3 || i === 8 || i === 2) {
                    return
                }
                if (i !== 1 || !k.isXMLDoc(e)) {
                    t = k.propFix[t] || t;
                    a = k.propHooks[t]
                }
                if (n !== undefined) {
                    if (a && "set" in a && (r = a.set(e, n, t)) !== undefined) {
                        return r
                    }
                    return e[t] = n
                }
                if (a && "get" in a && (r = a.get(e, t)) !== null) {
                    return r
                }
                return e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = k.find.attr(e, "tabindex");
                        if (t) {
                            return parseInt(t, 10)
                        }
                        if (ut.test(e.nodeName) || ft.test(e.nodeName) && e.href) {
                            return 0
                        }
                        return -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        });
        if (!g.optSelected) {
            k.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    if (t && t.parentNode) {
                        t.parentNode.selectedIndex
                    }
                    return null
                },
                set: function(e) {
                    var t = e.parentNode;
                    if (t) {
                        t.selectedIndex;
                        if (t.parentNode) {
                            t.parentNode.selectedIndex
                        }
                    }
                }
            }
        }
        k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            k.propFix[this.toLowerCase()] = this
        });

        function pt(e) {
            var t = e.match(O) || [];
            return t.join(" ")
        }

        function dt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }
        k.fn.extend({
            addClass: function(t) {
                var e, n, r, a, i, s, o, l = 0;
                if (k.isFunction(t)) {
                    return this.each(function(e) {
                        k(this).addClass(t.call(this, e, dt(this)))
                    })
                }
                if (typeof t === "string" && t) {
                    e = t.match(O) || [];
                    while (n = this[l++]) {
                        a = dt(n);
                        r = n.nodeType === 1 && " " + pt(a) + " ";
                        if (r) {
                            s = 0;
                            while (i = e[s++]) {
                                if (r.indexOf(" " + i + " ") < 0) {
                                    r += i + " "
                                }
                            }
                            o = pt(r);
                            if (a !== o) {
                                n.setAttribute("class", o)
                            }
                        }
                    }
                }
                return this
            },
            removeClass: function(t) {
                var e, n, r, a, i, s, o, l = 0;
                if (k.isFunction(t)) {
                    return this.each(function(e) {
                        k(this).removeClass(t.call(this, e, dt(this)))
                    })
                }
                if (!arguments.length) {
                    return this.attr("class", "")
                }
                if (typeof t === "string" && t) {
                    e = t.match(O) || [];
                    while (n = this[l++]) {
                        a = dt(n);
                        r = n.nodeType === 1 && " " + pt(a) + " ";
                        if (r) {
                            s = 0;
                            while (i = e[s++]) {
                                while (r.indexOf(" " + i + " ") > -1) {
                                    r = r.replace(" " + i + " ", " ")
                                }
                            }
                            o = pt(r);
                            if (a !== o) {
                                n.setAttribute("class", o)
                            }
                        }
                    }
                }
                return this
            },
            toggleClass: function(a, t) {
                var i = typeof a;
                if (typeof t === "boolean" && i === "string") {
                    return t ? this.addClass(a) : this.removeClass(a)
                }
                if (k.isFunction(a)) {
                    return this.each(function(e) {
                        k(this).toggleClass(a.call(this, e, dt(this), t), t)
                    })
                }
                return this.each(function() {
                    var e, t, n, r;
                    if (i === "string") {
                        t = 0;
                        n = k(this);
                        r = a.match(O) || [];
                        while (e = r[t++]) {
                            if (n.hasClass(e)) {
                                n.removeClass(e)
                            } else {
                                n.addClass(e)
                            }
                        }
                    } else if (a === undefined || i === "boolean") {
                        e = dt(this);
                        if (e) {
                            z.set(this, "__className__", e)
                        }
                        if (this.setAttribute) {
                            this.setAttribute("class", e || a === false ? "" : z.get(this, "__className__") || "")
                        }
                    }
                })
            },
            hasClass: function(e) {
                var t, n, r = 0;
                t = " " + e + " ";
                while (n = this[r++]) {
                    if (n.nodeType === 1 && (" " + pt(dt(n)) + " ").indexOf(t) > -1) {
                        return true
                    }
                }
                return false
            }
        });
        var ht = /\r/g;
        k.fn.extend({
            val: function(n) {
                var r, e, a, t = this[0];
                if (!arguments.length) {
                    if (t) {
                        r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()];
                        if (r && "get" in r && (e = r.get(t, "value")) !== undefined) {
                            return e
                        }
                        e = t.value;
                        if (typeof e === "string") {
                            return e.replace(ht, "")
                        }
                        return e == null ? "" : e
                    }
                    return
                }
                a = k.isFunction(n);
                return this.each(function(e) {
                    var t;
                    if (this.nodeType !== 1) {
                        return
                    }
                    if (a) {
                        t = n.call(this, e, k(this).val())
                    } else {
                        t = n
                    }
                    if (t == null) {
                        t = ""
                    } else if (typeof t === "number") {
                        t += ""
                    } else if (k.isArray(t)) {
                        t = k.map(t, function(e) {
                            return e == null ? "" : e + ""
                        })
                    }
                    r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()];
                    if (!r || !("set" in r) || r.set(this, t, "value") === undefined) {
                        this.value = t
                    }
                })
            }
        });
        k.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = k.find.attr(e, "value");
                        return t != null ? t : pt(k.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, a = e.options,
                            i = e.selectedIndex,
                            s = e.type === "select-one",
                            o = s ? null : [],
                            l = s ? i + 1 : a.length;
                        if (i < 0) {
                            r = l
                        } else {
                            r = s ? i : 0
                        }
                        for (; r < l; r++) {
                            n = a[r];
                            if ((n.selected || r === i) && !n.disabled && (!n.parentNode.disabled || !k.nodeName(n.parentNode, "optgroup"))) {
                                t = k(n).val();
                                if (s) {
                                    return t
                                }
                                o.push(t)
                            }
                        }
                        return o
                    },
                    set: function(e, t) {
                        var n, r, a = e.options,
                            i = k.makeArray(t),
                            s = a.length;
                        while (s--) {
                            r = a[s];
                            if (r.selected = k.inArray(k.valHooks.option.get(r), i) > -1) {
                                n = true
                            }
                        }
                        if (!n) {
                            e.selectedIndex = -1
                        }
                        return i
                    }
                }
            }
        });
        k.each(["radio", "checkbox"], function() {
            k.valHooks[this] = {
                set: function(e, t) {
                    if (k.isArray(t)) {
                        return e.checked = k.inArray(k(e).val(), t) > -1
                    }
                }
            };
            if (!g.checkOn) {
                k.valHooks[this].get = function(e) {
                    return e.getAttribute("value") === null ? "on" : e.value
                }
            }
        });
        var mt = /^(?:focusinfocus|focusoutblur)$/;
        k.extend(k.event, {
            trigger: function(e, t, n, r) {
                var a, i, s, o, l, c, u, f = [n || C],
                    p = h.call(e, "type") ? e.type : e,
                    d = h.call(e, "namespace") ? e.namespace.split(".") : [];
                i = s = n = n || C;
                if (n.nodeType === 3 || n.nodeType === 8) {
                    return
                }
                if (mt.test(p + k.event.triggered)) {
                    return
                }
                if (p.indexOf(".") > -1) {
                    d = p.split(".");
                    p = d.shift();
                    d.sort()
                }
                l = p.indexOf(":") < 0 && "on" + p;
                e = e[k.expando] ? e : new k.Event(p, typeof e === "object" && e);
                e.isTrigger = r ? 2 : 3;
                e.namespace = d.join(".");
                e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                e.result = undefined;
                if (!e.target) {
                    e.target = n
                }
                t = t == null ? [e] : k.makeArray(t, [e]);
                u = k.event.special[p] || {};
                if (!r && u.trigger && u.trigger.apply(n, t) === false) {
                    return
                }
                if (!r && !u.noBubble && !k.isWindow(n)) {
                    o = u.delegateType || p;
                    if (!mt.test(o + p)) {
                        i = i.parentNode
                    }
                    for (; i; i = i.parentNode) {
                        f.push(i);
                        s = i
                    }
                    if (s === (n.ownerDocument || C)) {
                        f.push(s.defaultView || s.parentWindow || S)
                    }
                }
                a = 0;
                while ((i = f[a++]) && !e.isPropagationStopped()) {
                    e.type = a > 1 ? o : u.bindType || p;
                    c = (z.get(i, "events") || {})[e.type] && z.get(i, "handle");
                    if (c) {
                        c.apply(i, t)
                    }
                    c = l && i[l];
                    if (c && c.apply && W(i)) {
                        e.result = c.apply(i, t);
                        if (e.result === false) {
                            e.preventDefault()
                        }
                    }
                }
                e.type = p;
                if (!r && !e.isDefaultPrevented()) {
                    if ((!u._default || u._default.apply(f.pop(), t) === false) && W(n)) {
                        if (l && k.isFunction(n[p]) && !k.isWindow(n)) {
                            s = n[l];
                            if (s) {
                                n[l] = null
                            }
                            k.event.triggered = p;
                            n[p]();
                            k.event.triggered = undefined;
                            if (s) {
                                n[l] = s
                            }
                        }
                    }
                }
                return e.result
            },
            simulate: function(e, t, n) {
                var r = k.extend(new k.Event, n, {
                    type: e,
                    isSimulated: true
                });
                k.event.trigger(r, null, t)
            }
        });
        k.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    k.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) {
                    return k.event.trigger(e, t, n, true)
                }
            }
        });
        k.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function(e, n) {
            k.fn[n] = function(e, t) {
                return arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n)
            }
        });
        k.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        });
        g.focusin = "onfocusin" in S;
        if (!g.focusin) {
            k.each({
                focus: "focusin",
                blur: "focusout"
            }, function(n, r) {
                var a = function(e) {
                    k.event.simulate(r, e.target, k.event.fix(e))
                };
                k.event.special[r] = {
                    setup: function() {
                        var e = this.ownerDocument || this,
                            t = z.access(e, r);
                        if (!t) {
                            e.addEventListener(n, a, true)
                        }
                        z.access(e, r, (t || 0) + 1)
                    },
                    teardown: function() {
                        var e = this.ownerDocument || this,
                            t = z.access(e, r) - 1;
                        if (!t) {
                            e.removeEventListener(n, a, true);
                            z.remove(e, r)
                        } else {
                            z.access(e, r, t)
                        }
                    }
                }
            })
        }
        var gt = S.location;
        var vt = k.now();
        var yt = /\?/;
        k.parseXML = function(e) {
            var t;
            if (!e || typeof e !== "string") {
                return null
            }
            try {
                t = (new S.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = undefined
            }
            if (!t || t.getElementsByTagName("parsererror").length) {
                k.error("Invalid XML: " + e)
            }
            return t
        };
        var _t = /\[\]$/,
            bt = /\r?\n/g,
            wt = /^(?:submit|button|image|reset|file)$/i,
            xt = /^(?:input|select|textarea|keygen)/i;

        function St(n, e, r, a) {
            var t;
            if (k.isArray(e)) {
                k.each(e, function(e, t) {
                    if (r || _t.test(n)) {
                        a(n, t)
                    } else {
                        St(n + "[" + (typeof t === "object" && t != null ? e : "") + "]", t, r, a)
                    }
                })
            } else if (!r && k.type(e) === "object") {
                for (t in e) {
                    St(n + "[" + t + "]", e[t], r, a)
                }
            } else {
                a(n, e)
            }
        }
        k.param = function(e, t) {
            var n, r = [],
                a = function(e, t) {
                    var n = k.isFunction(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(n == null ? "" : n)
                };
            if (k.isArray(e) || e.jquery && !k.isPlainObject(e)) {
                k.each(e, function() {
                    a(this.name, this.value)
                })
            } else {
                for (n in e) {
                    St(n, e[n], t, a)
                }
            }
            return r.join("&")
        };
        k.fn.extend({
            serialize: function() {
                return k.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = k.prop(this, "elements");
                    return e ? k.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !k(this).is(":disabled") && xt.test(this.nodeName) && !wt.test(e) && (this.checked || !le.test(e))
                }).map(function(e, t) {
                    var n = k(this).val();
                    if (n == null) {
                        return null
                    }
                    if (k.isArray(n)) {
                        return k.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(bt, "\r\n")
                            }
                        })
                    }
                    return {
                        name: t.name,
                        value: n.replace(bt, "\r\n")
                    }
                }).get()
            }
        });
        var Ct = /%20/g,
            kt = /#.*$/,
            Tt = /([?&])_=[^&]*/,
            At = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Et = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Pt = /^(?:GET|HEAD)$/,
            It = /^\/\//,
            Lt = {},
            Rt = {},
            Nt = "*/".concat("*"),
            Dt = C.createElement("a");
        Dt.href = gt.href;

        function Mt(i) {
            return function(e, t) {
                if (typeof e !== "string") {
                    t = e;
                    e = "*"
                }
                var n, r = 0,
                    a = e.toLowerCase().match(O) || [];
                if (k.isFunction(t)) {
                    while (n = a[r++]) {
                        if (n[0] === "+") {
                            n = n.slice(1) || "*";
                            (i[n] = i[n] || []).unshift(t)
                        } else {
                            (i[n] = i[n] || []).push(t)
                        }
                    }
                }
            }
        }

        function Ot(t, a, i, s) {
            var o = {},
                l = t === Rt;

            function c(e) {
                var r;
                o[e] = true;
                k.each(t[e] || [], function(e, t) {
                    var n = t(a, i, s);
                    if (typeof n === "string" && !l && !o[n]) {
                        a.dataTypes.unshift(n);
                        c(n);
                        return false
                    } else if (l) {
                        return !(r = n)
                    }
                });
                return r
            }
            return c(a.dataTypes[0]) || !o["*"] && c("*")
        }

        function $t(e, t) {
            var n, r, a = k.ajaxSettings.flatOptions || {};
            for (n in t) {
                if (t[n] !== undefined) {
                    (a[n] ? e : r || (r = {}))[n] = t[n]
                }
            }
            if (r) {
                k.extend(true, e, r)
            }
            return e
        }

        function jt(e, t, n) {
            var r, a, i, s, o = e.contents,
                l = e.dataTypes;
            while (l[0] === "*") {
                l.shift();
                if (r === undefined) {
                    r = e.mimeType || t.getResponseHeader("Content-Type")
                }
            }
            if (r) {
                for (a in o) {
                    if (o[a] && o[a].test(r)) {
                        l.unshift(a);
                        break
                    }
                }
            }
            if (l[0] in n) {
                i = l[0]
            } else {
                for (a in n) {
                    if (!l[0] || e.converters[a + " " + l[0]]) {
                        i = a;
                        break
                    }
                    if (!s) {
                        s = a
                    }
                }
                i = i || s
            }
            if (i) {
                if (i !== l[0]) {
                    l.unshift(i)
                }
                return n[i]
            }
        }

        function Ht(e, t, n, r) {
            var a, i, s, o, l, c = {},
                u = e.dataTypes.slice();
            if (u[1]) {
                for (s in e.converters) {
                    c[s.toLowerCase()] = e.converters[s]
                }
            }
            i = u.shift();
            while (i) {
                if (e.responseFields[i]) {
                    n[e.responseFields[i]] = t
                }
                if (!l && r && e.dataFilter) {
                    t = e.dataFilter(t, e.dataType)
                }
                l = i;
                i = u.shift();
                if (i) {
                    if (i === "*") {
                        i = l
                    } else if (l !== "*" && l !== i) {
                        s = c[l + " " + i] || c["* " + i];
                        if (!s) {
                            for (a in c) {
                                o = a.split(" ");
                                if (o[1] === i) {
                                    s = c[l + " " + o[0]] || c["* " + o[0]];
                                    if (s) {
                                        if (s === true) {
                                            s = c[a]
                                        } else if (c[a] !== true) {
                                            i = o[0];
                                            u.unshift(o[1])
                                        }
                                        break
                                    }
                                }
                            }
                        }
                        if (s !== true) {
                            if (s && e.throws) {
                                t = s(t)
                            } else {
                                try {
                                    t = s(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: s ? e : "No conversion from " + l + " to " + i
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return {
                state: "success",
                data: t
            }
        }
        k.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: gt.href,
                type: "GET",
                isLocal: Et.test(gt.protocol),
                global: true,
                processData: true,
                async: true,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Nt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": true,
                    "text json": JSON.parse,
                    "text xml": k.parseXML
                },
                flatOptions: {
                    url: true,
                    context: true
                }
            },
            ajaxSetup: function(e, t) {
                return t ? $t($t(e, k.ajaxSettings), t) : $t(k.ajaxSettings, e)
            },
            ajaxPrefilter: Mt(Lt),
            ajaxTransport: Mt(Rt),
            ajax: function(e, t) {
                if (typeof e === "object") {
                    t = e;
                    e = undefined
                }
                t = t || {};
                var u, f, p, n, d, r, h, m, a, i, g = k.ajaxSetup({}, t),
                    v = g.context || g,
                    y = g.context && (v.nodeType || v.jquery) ? k(v) : k.event,
                    _ = k.Deferred(),
                    b = k.Callbacks("once memory"),
                    w = g.statusCode || {},
                    s = {},
                    o = {},
                    l = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (h) {
                                if (!n) {
                                    n = {};
                                    while (t = At.exec(p)) {
                                        n[t[1].toLowerCase()] = t[2]
                                    }
                                }
                                t = n[e.toLowerCase()]
                            }
                            return t == null ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return h ? p : null
                        },
                        setRequestHeader: function(e, t) {
                            if (h == null) {
                                e = o[e.toLowerCase()] = o[e.toLowerCase()] || e;
                                s[e] = t
                            }
                            return this
                        },
                        overrideMimeType: function(e) {
                            if (h == null) {
                                g.mimeType = e
                            }
                            return this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e) {
                                if (h) {
                                    x.always(e[x.status])
                                } else {
                                    for (t in e) {
                                        w[t] = [w[t], e[t]]
                                    }
                                }
                            }
                            return this
                        },
                        abort: function(e) {
                            var t = e || l;
                            if (u) {
                                u.abort(t)
                            }
                            c(0, t);
                            return this
                        }
                    };
                _.promise(x);
                g.url = ((e || g.url || gt.href) + "").replace(It, gt.protocol + "//");
                g.type = t.method || t.type || g.method || g.type;
                g.dataTypes = (g.dataType || "*").toLowerCase().match(O) || [""];
                if (g.crossDomain == null) {
                    r = C.createElement("a");
                    try {
                        r.href = g.url;
                        r.href = r.href;
                        g.crossDomain = Dt.protocol + "//" + Dt.host !== r.protocol + "//" + r.host
                    } catch (e) {
                        g.crossDomain = true
                    }
                }
                if (g.data && g.processData && typeof g.data !== "string") {
                    g.data = k.param(g.data, g.traditional)
                }
                Ot(Lt, g, t, x);
                if (h) {
                    return x
                }
                m = k.event && g.global;
                if (m && k.active++ === 0) {
                    k.event.trigger("ajaxStart")
                }
                g.type = g.type.toUpperCase();
                g.hasContent = !Pt.test(g.type);
                f = g.url.replace(kt, "");
                if (!g.hasContent) {
                    i = g.url.slice(f.length);
                    if (g.data) {
                        f += (yt.test(f) ? "&" : "?") + g.data;
                        delete g.data
                    }
                    if (g.cache === false) {
                        f = f.replace(Tt, "$1");
                        i = (yt.test(f) ? "&" : "?") + "_=" + vt++ + i
                    }
                    g.url = f + i
                } else if (g.data && g.processData && (g.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
                    g.data = g.data.replace(Ct, "+")
                }
                if (g.ifModified) {
                    if (k.lastModified[f]) {
                        x.setRequestHeader("If-Modified-Since", k.lastModified[f])
                    }
                    if (k.etag[f]) {
                        x.setRequestHeader("If-None-Match", k.etag[f])
                    }
                }
                if (g.data && g.hasContent && g.contentType !== false || t.contentType) {
                    x.setRequestHeader("Content-Type", g.contentType)
                }
                x.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + (g.dataTypes[0] !== "*" ? ", " + Nt + "; q=0.01" : "") : g.accepts["*"]);
                for (a in g.headers) {
                    x.setRequestHeader(a, g.headers[a])
                }
                if (g.beforeSend && (g.beforeSend.call(v, x, g) === false || h)) {
                    return x.abort()
                }
                l = "abort";
                b.add(g.complete);
                x.done(g.success);
                x.fail(g.error);
                u = Ot(Rt, g, t, x);
                if (!u) {
                    c(-1, "No Transport")
                } else {
                    x.readyState = 1;
                    if (m) {
                        y.trigger("ajaxSend", [x, g])
                    }
                    if (h) {
                        return x
                    }
                    if (g.async && g.timeout > 0) {
                        d = S.setTimeout(function() {
                            x.abort("timeout")
                        }, g.timeout)
                    }
                    try {
                        h = false;
                        u.send(s, c)
                    } catch (e) {
                        if (h) {
                            throw e
                        }
                        c(-1, e)
                    }
                }

                function c(e, t, n, r) {
                    var a, i, s, o, l, c = t;
                    if (h) {
                        return
                    }
                    h = true;
                    if (d) {
                        S.clearTimeout(d)
                    }
                    u = undefined;
                    p = r || "";
                    x.readyState = e > 0 ? 4 : 0;
                    a = e >= 200 && e < 300 || e === 304;
                    if (n) {
                        o = jt(g, x, n)
                    }
                    o = Ht(g, o, x, a);
                    if (a) {
                        if (g.ifModified) {
                            l = x.getResponseHeader("Last-Modified");
                            if (l) {
                                k.lastModified[f] = l
                            }
                            l = x.getResponseHeader("etag");
                            if (l) {
                                k.etag[f] = l
                            }
                        }
                        if (e === 204 || g.type === "HEAD") {
                            c = "nocontent"
                        } else if (e === 304) {
                            c = "notmodified"
                        } else {
                            c = o.state;
                            i = o.data;
                            s = o.error;
                            a = !s
                        }
                    } else {
                        s = c;
                        if (e || !c) {
                            c = "error";
                            if (e < 0) {
                                e = 0
                            }
                        }
                    }
                    x.status = e;
                    x.statusText = (t || c) + "";
                    if (a) {
                        _.resolveWith(v, [i, c, x])
                    } else {
                        _.rejectWith(v, [x, c, s])
                    }
                    x.statusCode(w);
                    w = undefined;
                    if (m) {
                        y.trigger(a ? "ajaxSuccess" : "ajaxError", [x, g, a ? i : s])
                    }
                    b.fireWith(v, [x, c]);
                    if (m) {
                        y.trigger("ajaxComplete", [x, g]);
                        if (!--k.active) {
                            k.event.trigger("ajaxStop")
                        }
                    }
                }
                return x
            },
            getJSON: function(e, t, n) {
                return k.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return k.get(e, undefined, t, "script")
            }
        });
        k.each(["get", "post"], function(e, a) {
            k[a] = function(e, t, n, r) {
                if (k.isFunction(t)) {
                    r = r || n;
                    n = t;
                    t = undefined
                }
                return k.ajax(k.extend({
                    url: e,
                    type: a,
                    dataType: r,
                    data: t,
                    success: n
                }, k.isPlainObject(e) && e))
            }
        });
        k._evalUrl = function(e) {
            return k.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: true,
                async: false,
                global: false,
                throws: true
            })
        };
        k.fn.extend({
            wrapAll: function(e) {
                var t;
                if (this[0]) {
                    if (k.isFunction(e)) {
                        e = e.call(this[0])
                    }
                    t = k(e, this[0].ownerDocument).eq(0).clone(true);
                    if (this[0].parentNode) {
                        t.insertBefore(this[0])
                    }
                    t.map(function() {
                        var e = this;
                        while (e.firstElementChild) {
                            e = e.firstElementChild
                        }
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(n) {
                if (k.isFunction(n)) {
                    return this.each(function(e) {
                        k(this).wrapInner(n.call(this, e))
                    })
                }
                return this.each(function() {
                    var e = k(this),
                        t = e.contents();
                    if (t.length) {
                        t.wrapAll(n)
                    } else {
                        e.append(n)
                    }
                })
            },
            wrap: function(t) {
                var n = k.isFunction(t);
                return this.each(function(e) {
                    k(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function(e) {
                this.parent(e).not("body").each(function() {
                    k(this).replaceWith(this.childNodes)
                });
                return this
            }
        });
        k.expr.pseudos.hidden = function(e) {
            return !k.expr.pseudos.visible(e)
        };
        k.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        };
        k.ajaxSettings.xhr = function() {
            try {
                return new S.XMLHttpRequest
            } catch (e) {}
        };
        var qt = {
                0: 200,
                1223: 204
            },
            Ft = k.ajaxSettings.xhr();
        g.cors = !!Ft && "withCredentials" in Ft;
        g.ajax = Ft = !!Ft;
        k.ajaxTransport(function(a) {
            var i, s;
            if (g.cors || Ft && !a.crossDomain) {
                return {
                    send: function(e, t) {
                        var n, r = a.xhr();
                        r.open(a.type, a.url, a.async, a.username, a.password);
                        if (a.xhrFields) {
                            for (n in a.xhrFields) {
                                r[n] = a.xhrFields[n]
                            }
                        }
                        if (a.mimeType && r.overrideMimeType) {
                            r.overrideMimeType(a.mimeType)
                        }
                        if (!a.crossDomain && !e["X-Requested-With"]) {
                            e["X-Requested-With"] = "XMLHttpRequest"
                        }
                        for (n in e) {
                            r.setRequestHeader(n, e[n])
                        }
                        i = function(e) {
                            return function() {
                                if (i) {
                                    i = s = r.onload = r.onerror = r.onabort = r.onreadystatechange = null;
                                    if (e === "abort") {
                                        r.abort()
                                    } else if (e === "error") {
                                        if (typeof r.status !== "number") {
                                            t(0, "error")
                                        } else {
                                            t(r.status, r.statusText)
                                        }
                                    } else {
                                        t(qt[r.status] || r.status, r.statusText, (r.responseType || "text") !== "text" || typeof r.responseText !== "string" ? {
                                            binary: r.response
                                        } : {
                                            text: r.responseText
                                        }, r.getAllResponseHeaders())
                                    }
                                }
                            }
                        };
                        r.onload = i();
                        s = r.onerror = i("error");
                        if (r.onabort !== undefined) {
                            r.onabort = s
                        } else {
                            r.onreadystatechange = function() {
                                if (r.readyState === 4) {
                                    S.setTimeout(function() {
                                        if (i) {
                                            s()
                                        }
                                    })
                                }
                            }
                        }
                        i = i("abort");
                        try {
                            r.send(a.hasContent && a.data || null)
                        } catch (e) {
                            if (i) {
                                throw e
                            }
                        }
                    },
                    abort: function() {
                        if (i) {
                            i()
                        }
                    }
                }
            }
        });
        k.ajaxPrefilter(function(e) {
            if (e.crossDomain) {
                e.contents.script = false
            }
        });
        k.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    k.globalEval(e);
                    return e
                }
            }
        });
        k.ajaxPrefilter("script", function(e) {
            if (e.cache === undefined) {
                e.cache = false
            }
            if (e.crossDomain) {
                e.type = "GET"
            }
        });
        k.ajaxTransport("script", function(n) {
            if (n.crossDomain) {
                var r, a;
                return {
                    send: function(e, t) {
                        r = k("<script>").prop({
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", a = function(e) {
                            r.remove();
                            a = null;
                            if (e) {
                                t(e.type === "error" ? 404 : 200, e.type)
                            }
                        });
                        C.head.appendChild(r[0])
                    },
                    abort: function() {
                        if (a) {
                            a()
                        }
                    }
                }
            }
        });
        var Bt = [],
            Ut = /(=)\?(?=&|$)|\?\?/;
        k.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Bt.pop() || k.expando + "_" + vt++;
                this[e] = true;
                return e
            }
        });
        k.ajaxPrefilter("json jsonp", function(e, t, n) {
            var r, a, i, s = e.jsonp !== false && (Ut.test(e.url) ? "url" : typeof e.data === "string" && (e.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Ut.test(e.data) && "data");
            if (s || e.dataTypes[0] === "jsonp") {
                r = e.jsonpCallback = k.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback;
                if (s) {
                    e[s] = e[s].replace(Ut, "$1" + r)
                } else if (e.jsonp !== false) {
                    e.url += (yt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r
                }
                e.converters["script json"] = function() {
                    if (!i) {
                        k.error(r + " was not called")
                    }
                    return i[0]
                };
                e.dataTypes[0] = "json";
                a = S[r];
                S[r] = function() {
                    i = arguments
                };
                n.always(function() {
                    if (a === undefined) {
                        k(S).removeProp(r)
                    } else {
                        S[r] = a
                    }
                    if (e[r]) {
                        e.jsonpCallback = t.jsonpCallback;
                        Bt.push(r)
                    }
                    if (i && k.isFunction(a)) {
                        a(i[0])
                    }
                    i = a = undefined
                });
                return "script"
            }
        });
        g.createHTMLDocument = function() {
            var e = C.implementation.createHTMLDocument("").body;
            e.innerHTML = "<form></form><form></form>";
            return e.childNodes.length === 2
        }();
        k.parseHTML = function(e, t, n) {
            if (typeof e !== "string") {
                return []
            }
            if (typeof t === "boolean") {
                n = t;
                t = false
            }
            var r, a, i;
            if (!t) {
                if (g.createHTMLDocument) {
                    t = C.implementation.createHTMLDocument("");
                    r = t.createElement("base");
                    r.href = C.location.href;
                    t.head.appendChild(r)
                } else {
                    t = C
                }
            }
            a = A.exec(e);
            i = !n && [];
            if (a) {
                return [t.createElement(a[1])]
            }
            a = me([e], t, i);
            if (i && i.length) {
                k(i).remove()
            }
            return k.merge([], a.childNodes)
        };
        k.fn.load = function(e, t, n) {
            var r, a, i, s = this,
                o = e.indexOf(" ");
            if (o > -1) {
                r = pt(e.slice(o));
                e = e.slice(0, o)
            }
            if (k.isFunction(t)) {
                n = t;
                t = undefined
            } else if (t && typeof t === "object") {
                a = "POST"
            }
            if (s.length > 0) {
                k.ajax({
                    url: e,
                    type: a || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    i = arguments;
                    s.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
                }).always(n && function(e, t) {
                    s.each(function() {
                        n.apply(this, i || [e.responseText, t, e])
                    })
                })
            }
            return this
        };
        k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            k.fn[t] = function(e) {
                return this.on(t, e)
            }
        });
        k.expr.pseudos.animated = function(t) {
            return k.grep(k.timers, function(e) {
                return t === e.elem
            }).length
        };

        function Gt(e) {
            return k.isWindow(e) ? e : e.nodeType === 9 && e.defaultView
        }
        k.offset = {
            setOffset: function(e, t, n) {
                var r, a, i, s, o, l, c, u = k.css(e, "position"),
                    f = k(e),
                    p = {};
                if (u === "static") {
                    e.style.position = "relative"
                }
                o = f.offset();
                i = k.css(e, "top");
                l = k.css(e, "left");
                c = (u === "absolute" || u === "fixed") && (i + l).indexOf("auto") > -1;
                if (c) {
                    r = f.position();
                    s = r.top;
                    a = r.left
                } else {
                    s = parseFloat(i) || 0;
                    a = parseFloat(l) || 0
                }
                if (k.isFunction(t)) {
                    t = t.call(e, n, k.extend({}, o))
                }
                if (t.top != null) {
                    p.top = t.top - o.top + s
                }
                if (t.left != null) {
                    p.left = t.left - o.left + a
                }
                if ("using" in t) {
                    t.using.call(e, p)
                } else {
                    f.css(p)
                }
            }
        };
        k.fn.extend({
            offset: function(t) {
                if (arguments.length) {
                    return t === undefined ? this : this.each(function(e) {
                        k.offset.setOffset(this, t, e)
                    })
                }
                var e, n, r, a, i = this[0];
                if (!i) {
                    return
                }
                if (!i.getClientRects().length) {
                    return {
                        top: 0,
                        left: 0
                    }
                }
                r = i.getBoundingClientRect();
                if (r.width || r.height) {
                    a = i.ownerDocument;
                    n = Gt(a);
                    e = a.documentElement;
                    return {
                        top: r.top + n.pageYOffset - e.clientTop,
                        left: r.left + n.pageXOffset - e.clientLeft
                    }
                }
                return r
            },
            position: function() {
                if (!this[0]) {
                    return
                }
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if (k.css(n, "position") === "fixed") {
                    t = n.getBoundingClientRect()
                } else {
                    e = this.offsetParent();
                    t = this.offset();
                    if (!k.nodeName(e[0], "html")) {
                        r = e.offset()
                    }
                    r = {
                        top: r.top + k.css(e[0], "borderTopWidth", true),
                        left: r.left + k.css(e[0], "borderLeftWidth", true)
                    }
                }
                return {
                    top: t.top - r.top - k.css(n, "marginTop", true),
                    left: t.left - r.left - k.css(n, "marginLeft", true)
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var e = this.offsetParent;
                    while (e && k.css(e, "position") === "static") {
                        e = e.offsetParent
                    }
                    return e || ge
                })
            }
        });
        k.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, a) {
            var i = "pageYOffset" === a;
            k.fn[t] = function(e) {
                return G(this, function(e, t, n) {
                    var r = Gt(e);
                    if (n === undefined) {
                        return r ? r[a] : e[t]
                    }
                    if (r) {
                        r.scrollTo(!i ? n : r.pageXOffset, i ? n : r.pageYOffset)
                    } else {
                        e[t] = n
                    }
                }, t, e, arguments.length)
            }
        });
        k.each(["top", "left"], function(e, n) {
            k.cssHooks[n] = qe(g.pixelPosition, function(e, t) {
                if (t) {
                    t = He(e, n);
                    return $e.test(t) ? k(e).position()[n] + "px" : t
                }
            })
        });
        k.each({
            Height: "height",
            Width: "width"
        }, function(s, o) {
            k.each({
                padding: "inner" + s,
                content: o,
                "": "outer" + s
            }, function(r, i) {
                k.fn[i] = function(e, t) {
                    var n = arguments.length && (r || typeof e !== "boolean"),
                        a = r || (e === true || t === true ? "margin" : "border");
                    return G(this, function(e, t, n) {
                        var r;
                        if (k.isWindow(e)) {
                            return i.indexOf("outer") === 0 ? e["inner" + s] : e.document.documentElement["client" + s]
                        }
                        if (e.nodeType === 9) {
                            r = e.documentElement;
                            return Math.max(e.body["scroll" + s], r["scroll" + s], e.body["offset" + s], r["offset" + s], r["client" + s])
                        }
                        return n === undefined ? k.css(e, t, a) : k.style(e, t, n, a)
                    }, o, n ? e : undefined, n)
                }
            })
        });
        k.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        k.parseJSON = JSON.parse;
        if (typeof define === "function" && define.amd) {
            define("jquery", [], function() {
                return k
            })
        }
        var Wt = S.jQuery,
            Kt = S.$;
        k.noConflict = function(e) {
            if (S.$ === k) {
                S.$ = Kt
            }
            if (e && S.jQuery === k) {
                S.jQuery = Wt
            }
            return k
        };
        if (!e) {
            S.jQuery = S.$ = k
        }
        return k
    });
    (function(e, n, t) {
        function r(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, n)
        }

        function v(e) {
            if ("keypress" == e.type) {
                var t = String.fromCharCode(e.which);
                e.shiftKey || (t = t.toLowerCase());
                return t
            }
            return o[e.which] ? o[e.which] : s[e.which] ? s[e.which] : String.fromCharCode(e.which).toLowerCase()
        }

        function a(e) {
            var t = [];
            e.shiftKey && t.push("shift");
            e.altKey && t.push("alt");
            e.ctrlKey && t.push("ctrl");
            e.metaKey && t.push("meta");
            return t
        }

        function y(e) {
            return "shift" == e || "ctrl" == e || "alt" == e || "meta" == e
        }

        function _(e, t) {
            var n, r, a, i = [];
            n = e;
            "+" === n ? n = ["+"] : (n = n.replace(/\+{2}/g, "+plus"), n = n.split("+"));
            for (a = 0; a < n.length; ++a) r = n[a], c[r] && (r = c[r]), t && "keypress" != t && l[r] && (r = l[r], i.push("shift")), y(r) && i.push(r);
            n = r;
            a = t;
            if (!a) {
                if (!u) {
                    u = {};
                    for (var s in o) 95 < s && 112 > s || o.hasOwnProperty(s) && (u[o[s]] = s)
                }
                a = u[n] ? "keydown" : "keypress"
            }
            "keypress" == a && i.length && (a = "keydown");
            return {
                key: r,
                modifiers: i,
                action: a
            }
        }

        function i(e, t) {
            return null === e || e === n ? !1 : e === t ? !0 : i(e.parentNode, t)
        }

        function b(e) {
            function l(e) {
                e = e || {};
                var t = !1,
                    n;
                for (n in p) e[n] ? t = !0 : p[n] = 0;
                t || (g = !1)
            }

            function o(e, t, n, r, a, i) {
                var s, o, l = [],
                    c = n.type;
                if (!f._callbacks[e]) return [];
                "keyup" == c && y(e) && (t = [e]);
                for (s = 0; s < f._callbacks[e].length; ++s)
                    if (o = f._callbacks[e][s], (r || !o.seq || p[o.seq] == o.level) && c == o.action) {
                        var u;
                        (u = "keypress" == c && !n.metaKey && !n.ctrlKey) || (u = o.modifiers, u = t.sort().join(",") === u.sort().join(","));
                        u && (u = r && o.seq == r && o.level == i, (!r && o.combo == a || u) && f._callbacks[e].splice(s, 1), l.push(o))
                    } return l
            }

            function c(e, t, n, r) {
                f.stopCallback(t, t.target || t.srcElement, n, r) || !1 !== e(t, n) || (t.preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0)
            }

            function t(e) {
                "number" !== typeof e.which && (e.which = e.keyCode);
                var t = v(e);
                t && ("keyup" == e.type && h === t ? h = !1 : f.handleKey(t, a(e), e))
            }

            function s(t, e, n, r) {
                function a(e) {
                    return function() {
                        g = e;
                        ++p[t];
                        clearTimeout(d);
                        d = setTimeout(l, 1e3)
                    }
                }

                function i(e) {
                    c(n, e, t);
                    "keyup" !== r && (h = v(e));
                    setTimeout(l, 10)
                }
                for (var s = p[t] = 0; s < e.length; ++s) {
                    var o = s + 1 === e.length ? i : a(r || _(e[s + 1]).action);
                    u(e[s], o, r, t, s)
                }
            }

            function u(e, t, n, r, a) {
                f._directMap[e + ":" + n] = t;
                e = e.replace(/\s+/g, " ");
                var i = e.split(" ");
                1 < i.length ? s(e, i, t, n) : (n = _(e, n), f._callbacks[n.key] = f._callbacks[n.key] || [], o(n.key, n.modifiers, {
                    type: n.action
                }, r, e, a), f._callbacks[n.key][r ? "unshift" : "push"]({
                    callback: t,
                    modifiers: n.modifiers,
                    action: n.action,
                    seq: r,
                    level: a,
                    combo: e
                }))
            }
            var f = this;
            e = e || n;
            if (!(f instanceof b)) return new b(e);
            f.target = e;
            f._callbacks = {};
            f._directMap = {};
            var p = {},
                d, h = !1,
                m = !1,
                g = !1;
            f._handleKey = function(e, t, n) {
                var r = o(e, t, n),
                    a;
                t = {};
                var i = 0,
                    s = !1;
                for (a = 0; a < r.length; ++a) r[a].seq && (i = Math.max(i, r[a].level));
                for (a = 0; a < r.length; ++a) r[a].seq ? r[a].level == i && (s = !0, t[r[a].seq] = 1, c(r[a].callback, n, r[a].combo, r[a].seq)) : s || c(r[a].callback, n, r[a].combo);
                r = "keypress" == n.type && m;
                n.type != g || y(e) || r || l(t);
                m = s && "keydown" == n.type
            };
            f._bindMultiple = function(e, t, n) {
                for (var r = 0; r < e.length; ++r) u(e[r], t, n)
            };
            r(e, "keypress", t);
            r(e, "keydown", t);
            r(e, "keyup", t)
        }
        if (e) {
            var o = {
                    8: "backspace",
                    9: "tab",
                    13: "enter",
                    16: "shift",
                    17: "ctrl",
                    18: "alt",
                    20: "capslock",
                    27: "esc",
                    32: "space",
                    33: "pageup",
                    34: "pagedown",
                    35: "end",
                    36: "home",
                    37: "left",
                    38: "up",
                    39: "right",
                    40: "down",
                    45: "ins",
                    46: "del",
                    91: "meta",
                    93: "meta",
                    224: "meta"
                },
                s = {
                    106: "*",
                    107: "+",
                    109: "-",
                    110: ".",
                    111: "/",
                    186: ";",
                    187: "=",
                    188: ",",
                    189: "-",
                    190: ".",
                    191: "/",
                    192: "`",
                    219: "[",
                    220: "\\",
                    221: "]",
                    222: "'"
                },
                l = {
                    "~": "`",
                    "!": "1",
                    "@": "2",
                    "#": "3",
                    $: "4",
                    "%": "5",
                    "^": "6",
                    "&": "7",
                    "*": "8",
                    "(": "9",
                    ")": "0",
                    _: "-",
                    "+": "=",
                    ":": ";",
                    '"': "'",
                    "<": ",",
                    ">": ".",
                    "?": "/",
                    "|": "\\"
                },
                c = {
                    option: "alt",
                    command: "meta",
                    return: "enter",
                    escape: "esc",
                    plus: "+",
                    mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
                },
                u;
            for (t = 1; 20 > t; ++t) o[111 + t] = "f" + t;
            for (t = 0; 9 >= t; ++t) o[t + 96] = t.toString();
            b.prototype.bind = function(e, t, n) {
                e = e instanceof Array ? e : [e];
                this._bindMultiple.call(this, e, t, n);
                return this
            };
            b.prototype.unbind = function(e, t) {
                return this.bind.call(this, e, function() {}, t)
            };
            b.prototype.trigger = function(e, t) {
                if (this._directMap[e + ":" + t]) this._directMap[e + ":" + t]({}, e);
                return this
            };
            b.prototype.reset = function() {
                this._callbacks = {};
                this._directMap = {};
                return this
            };
            b.prototype.stopCallback = function(e, t) {
                return -1 < (" " + t.className + " ").indexOf(" mousetrap ") || i(t, this.target) ? !1 : "INPUT" == t.tagName || "SELECT" == t.tagName || "TEXTAREA" == t.tagName || t.isContentEditable
            };
            b.prototype.handleKey = function() {
                return this._handleKey.apply(this, arguments)
            };
            b.addKeycodes = function(e) {
                for (var t in e) e.hasOwnProperty(t) && (o[t] = e[t]);
                u = null
            };
            b.init = function() {
                var t = b(n),
                    e;
                for (e in t) "_" !== e.charAt(0) && (b[e] = function(e) {
                    return function() {
                        return t[e].apply(t, arguments)
                    }
                }(e))
            };
            b.init();
            e.Mousetrap = b;
            "undefined" !== typeof module && module.exports && (module.exports = b);
            "function" === typeof define && define.amd && define(function() {
                return b
            })
        }
    })("undefined" !== typeof window ? window : null, "undefined" !== typeof window ? document : null);

    function TestBase(e) {
        this.tests = e
    }
    TestBase.prototype.run = function(e) {
        var t = {
            testResults: {},
            totalPoints: 0,
            set: []
        };
        var n;
        for (var r in this.tests) {
            if ((typeof e.level == "undefined" && typeof this.tests[r].level == "undefined" || e.level === this.tests[r].level) && typeof this.tests[r].method == "function") {
                if (typeof this.tests[r].preMethod == "function") {
                    this.tests[r].preMethod.call(this, e)
                }
                n = this.tests[r].method.call(this, e);
                t.testResults[r] = {
                    testInfo: this.tests[r],
                    result: n
                };
                if (typeof n != "undefined") {
                    if (n.constructor === Array) {
                        t.set = t.set.concat(n)
                    } else if (typeof n == "boolean") {
                        t.totalPoints += n ? typeof this.tests[r].points != "undefined" ? this.tests[r].points : 1 : 0
                    } else if (typeof n == "number") {
                        t.totalPoints += n
                    } else if (typeof n == "string" && !isNaN(n)) {
                        t.totalPoints *= n
                    }
                }
            }
        }
        return t
    };
    TestBase.prototype.runOnImageElementSet = function(n) {
        var e = {
            runResults: [],
            set: []
        };
        var t = n;
        var r;
        for (var a in n.imageElementSet) {
            t.imageElement = n.imageElementSet[a];
            r = this.run(n);
            e.runResults[a] = {
                imageElement: n.imageElementSet[a],
                result: r
            }
        }
        e.runResults.sort(function(e, t) {
            if (e.result.totalPoints < t.result.totalPoints) {
                return typeof n.sort == "undefined" || n.sort != "asc" ? 1 : -1
            } else if (e.result.totalPoints > t.result.totalPoints) {
                return typeof n.sort == "undefined" || n.sort != "asc" ? -1 : 1
            }
            return 0
        });
        for (var a in e.runResults) {
            if (typeof n.filter == "undefined" || n.filter(e.runResults[a].result)) {
                e.set.push(e.runResults[a].imageElement)
            }
        }
        return e
    };

    function IncludeTests(e) {
        TestBase.apply(this, arguments);
        this.tests = {
            searchInForm: {
                method: function(e) {
                    return $(e.inputElement).closest("form").find("img").toArray()
                }
            },
            searchEverywhere: {
                method: function(e) {
                    return $(e.document).find("img").toArray()
                },
                level: 2
            }
        }
    }
    IncludeTests.prototype = Object.create(TestBase.prototype);
    IncludeTests.prototype.constructor = IncludeTests;

    function ExcludeTests(e) {
        TestBase.apply(this, arguments);
        this.tests = e ? e : {
            suitableSizeByWebVisum: {
                method: function(e) {
                    var t = {
                        widthMin: 5,
                        widthMax: 800,
                        heightMin: 5,
                        heightMax: 600,
                        minArea: 17 * 17
                    };
                    return !(e.imageElement.width >= t.widthMin && e.imageElement.width <= t.widthMax && e.imageElement.height >= t.heightMin && e.imageElement.height <= t.heightMax && e.imageElement.width * e.imageElement.height > t.minArea);
                    return false
                }
            },
            isVisibleForUser: {
                method: function(e) {
                    return e.imageElement.offsetHeight == 0 || e.imageElement.offsetWidth == 0
                }
            },
            rumolaImageChecks: {
                method: function(e) {
                    try {
                        if (!e.imageElement.src) return true;
                        if (e.imageElement.src.length < 5) return true;
                        if (e.imageElement.style.visibility == "hidden") return true;
                        if (e.imageElement.style.display == "none") return true;
                        if (e.imageElement.width <= 5) return true;
                        if (e.imageElement.width >= 650) return true;
                        if (e.imageElement.height < 5) return true;
                        if (e.imageElement.height > 250) return true
                    } catch (e) {}
                    return false
                }
            },
            maxDistance: {
                preMethod: function(e) {
                    if (typeof e.distances != "undefined") {
                        return
                    }
                    var t = [];
                    for (var n in e.imageElementSet) {
                        t[n] = {
                            element: e.imageElementSet[n],
                            distance: getDistanceBetweenElements(e.inputElement, e.imageElementSet[n])
                        }
                    }
                    e.distances = t
                },
                method: function(e) {
                    for (var t in e.distances) {
                        if (e.distances[t].element == e.imageElement && e.distances[t].distance > 500) {
                            return true
                        }
                    }
                }
            }
        }
    }
    ExcludeTests.prototype = Object.create(TestBase.prototype);
    ExcludeTests.prototype.constructor = ExcludeTests;

    function PointsTests(e) {
        TestBase.apply(this, arguments);
        this.tests = {
            rumolaImageSrcFilterTest: {
                method: function(e) {
                    var t = ["[ck]apt?cha", "robot", "random", "rnd", "code", "kod", "geraimag", "verif"];
                    var n = 0;
                    for (var r in t) {
                        if (new RegExp(t[r], "img").test(e.imageElement.src)) {
                            n += 1
                        }
                    }
                    return n
                }
            },
            securimageImageSrcFilterTest: {
                method: function(e) {
                    return /securimage_show/i.test(e.imageElement.src)
                }
            },
            mailRuImageSrcFilterTest: {
                method: function(e) {
                    return /c\.mail\.ru/i.test(e.imageElement.src)
                }
            },
            webVisumPattern: {
                method: function(e) {
                    var t = getElementAsString(e.imageElement);
                    var n = [{
                        pattern: "captcha",
                        weight: 1
                    }, {
                        pattern: "captha",
                        weight: 1
                    }, {
                        pattern: "captch",
                        weight: 1
                    }, {
                        pattern: "/fp/sec/f/",
                        weight: 2
                    }, {
                        pattern: "fastchange.cc/captha",
                        weight: 1
                    }, {
                        pattern: "\\.((jpg)|(gif)|(png)|(jpeg))[ '\"]",
                        weight: -1
                    }, {
                        pattern: "\\?",
                        weight: 1
                    }, {
                        pattern: "[a-f0-9]{32}",
                        weight: 1
                    }, {
                        pattern: "[a-z0-9_\\-]{20}",
                        weight: 1
                    }, {
                        pattern: "security",
                        weight: 1
                    }, {
                        pattern: "code",
                        weight: 1
                    }, {
                        pattern: "token",
                        weight: 1
                    }, {
                        pattern: "\\.((php)|(cgi)|(asp)|(ashx)|(cfm)|(jsp)|(rb)|(pl)|(py)|(htm)|(html))",
                        weight: 1
                    }, {
                        pattern: "(verify|verification)",
                        weight: 1
                    }, {
                        pattern: "human",
                        weight: 1
                    }, {
                        pattern: "robot",
                        weight: 1
                    }, {
                        pattern: "turing",
                        weight: 1
                    }, {
                        pattern: "kontrollbild",
                        weight: 1
                    }, {
                        pattern: "validation",
                        weight: 1
                    }, {
                        pattern: "formshield",
                        weight: 1
                    }, {
                        pattern: "fetchregimage",
                        weight: 2
                    }, {
                        pattern: "capture",
                        weight: 1
                    }, {
                        pattern: 'id="cimg"',
                        weight: 1
                    }, {
                        pattern: "forgot_password:imgSecurity2",
                        weight: 2
                    }, {
                        pattern: "LoadBotImage",
                        weight: 1
                    }, {
                        pattern: "Captcha\\.jpg",
                        weight: 1
                    }, {
                        pattern: "imgcode1",
                        weight: 1
                    }, {
                        pattern: "imgSecurityCode",
                        weight: 1
                    }, {
                        pattern: "counter.yadro.ru",
                        weight: -1
                    }, {
                        pattern: "genimage\\.php",
                        weight: 1
                    }];
                    var r = 0;
                    for (var a in n) {
                        if (new RegExp(n[a].pattern, "img").test(t)) {
                            r += n[a].weight
                        }
                    }
                    return r
                }
            },
            distanceInPixelsBetweeenElements: {
                preMethod: function(e) {
                    if (typeof e.distances != "undefined") {
                        return
                    }
                    var t = [];
                    for (var n in e.imageElementSet) {
                        t[n] = {
                            element: e.imageElementSet[n],
                            distance: getDistanceBetweenElements(e.inputElement, e.imageElementSet[n])
                        }
                    }
                    t.sort(function(e, t) {
                        if (e.distance < t.distance) {
                            return -1
                        } else if (e.distance > t.distance) {
                            return 1
                        }
                        return 0
                    });
                    for (var n in t) {
                        switch (n * 1) {
                            case 0:
                                t[n].internalPoints = "1.2";
                                break;
                            case 1:
                                t[n].internalPoints = "1.1";
                                break;
                            case 2:
                                t[n].internalPoints = "1.1";
                                break;
                            default:
                                t[n].internalPoints = "1"
                        }
                    }
                    e.distances = t
                },
                method: function(e) {
                    for (var t in e.distances) {
                        if (e.distances[t].element == e.imageElement) {
                            return e.distances[t].internalPoints
                        }
                    }
                }
            },
            biggerAreaSize: {
                preMethod: function(e) {
                    if (typeof e.sizes != "undefined") {
                        return
                    }
                    var t = [];
                    for (var n in e.imageElementSet) {
                        t[n] = {
                            element: e.imageElementSet[n],
                            size: e.imageElementSet[n].width * e.imageElementSet[n].height
                        }
                    }
                    t.sort(function(e, t) {
                        if (e.size < t.size) {
                            return 1
                        } else if (e.size > t.size) {
                            return -1
                        }
                        return 0
                    });
                    var r = t[0].size;
                    for (var n in t) {
                        if (t[n].size == r) {
                            t[n].internalPoints = "1.1"
                        } else {
                            t[n].internalPoints = "1"
                        }
                    }
                    e.sizes = t
                },
                method: function(e) {
                    for (var t in e.sizes) {
                        if (e.sizes[t].element == e.imageElement) {
                            return e.sizes[t].internalPoints
                        }
                    }
                }
            }
        }
    }
    PointsTests.prototype = Object.create(TestBase.prototype);
    PointsTests.prototype.constructor = PointsTests;
    parseUrl = function(e) {
        var t = document.createElement("a");
        t.href = e;
        return t;
        t.protocol;
        t.hostname;
        t.port;
        t.pathname;
        t.search;
        t.hash;
        t.host
    };
    currentHostnameWhiteBlackListedOut = function(e, t) {
        if (typeof e.where_solve_list !== "undefined" && typeof e.where_solve_white_list_type !== "undefined") {
            if (!t) {
                t = window.location.href
            }
            var n = getHostname(t);
            if (!e.where_solve_white_list_type && e.where_solve_list.indexOf(n) !== -1) {
                return true
            }
            if (e.where_solve_white_list_type && e.where_solve_list.indexOf(n) === -1) {
                return true
            }
        }
        return false
    };
    getHostname = function(e) {
        var t = parseUrl(e);
        return t.hostname
    };

    function filterUnnecessaryAttributes(e) {
        var t = e.nodeName.toLowerCase();
        var n;
        var r = e.getAttributeNames();
        for (i in r) {
            n = r[i];
            n = n.toLowerCase();
            if (["id", "class", "role"].indexOf(n) !== -1) {} else if (t == "input" && ["type", "name"].indexOf(n) !== -1) {} else if (t == "form" && ["method", "action"].indexOf(n) !== -1) {} else {
                e.removeAttribute(n)
            }
        }
    }

    function generateNearbyHtmlStructure(e) {
        var t = $(document.body);
        var n = e.closest("form");
        if (!n.length) {
            n = e.parentsUntil("html").eq(3);
            if (!n.length) {
                n = t
            }
        }
        if (n.length) {
            var r = n.get(0).cloneNode(true);
            var a = $(r);
            var i = a.find(".g-recaptcha-response").parent().parent();
            if (i.length) {
                a.find("*").each(function() {
                    var e = $(this);
                    var t = this.nodeName.toLowerCase();
                    if (t == "input") {
                        filterUnnecessaryAttributes(this)
                    } else if (e.find("input").length) {
                        filterUnnecessaryAttributes(this)
                    } else if (e.has(i).length) {
                        filterUnnecessaryAttributes(this)
                    } else if (i.has(this).length && 0) {
                        filterUnnecessaryAttributes(this)
                    } else if (i.is(this)) {
                        e.addClass("g-recaptcha-container");
                        filterUnnecessaryAttributes(this)
                    } else {
                        e.remove()
                    }
                });
                if (!n.is(t)) {
                    $keyContainerParents = n.parentsUntil("html");
                    $keyContainerParents.each(function() {
                        var e = this.cloneNode();
                        filterUnnecessaryAttributes(e);
                        a = $(e).append(a)
                    })
                }
                removeHTMLSpacesAndComments(a);
                if (a.get(0)) {
                    return a.get(0).outerHTML
                }
            }
        } else {}
        return null
    }

    function removeHTMLSpacesAndComments(e) {
        e.contents().each(function() {
            if (this.nodeType === Node.COMMENT_NODE || this.nodeType === Node.TEXT_NODE) {
                $(this).remove()
            } else if (this.nodeType === Node.ELEMENT_NODE) {
                removeHTMLSpacesAndComments($(this))
            }
        })
    }

    function getBaseUrl(e) {
        var t = parseUrl(e);
        t.pathname = "";
        t.search = "";
        t.hash = "";
        return t.href
    }

    function getElementString(e) {
        var t = document.createElement("div");
        t.appendChild(e);
        console.log(t.innerHTML)
    }
    var getPositionAtCenter = function(e) {
        var t = e.getBoundingClientRect();
        return {
            x: t.left + t.width / 2,
            y: t.top + t.height / 2
        }
    };
    ALogger = {};
    ALogger.log = function() {
        return;
        var e = new Date;
        var t = e.getMinutes();
        var n = e.getSeconds();
        var r = e.getMilliseconds();
        if (t < 10) {
            t = "0" + t
        }
        if (n < 10) {
            n = "0" + n
        }
        if (r < 10) {
            r = "0" + r
        }
        if (r < 100) {
            r = "0" + r
        }
        console.log(t + ":" + n + ":" + r + " Kolotibablo Bot says:");
        for (var a in arguments) {
            console.log(arguments[a])
        }
        console.log("--------------------------")
    };
    var getDistanceBetweenElements = function(e, t) {
        var n = getPositionAtCenter(e);
        var r = getPositionAtCenter(t);
        return Math.sqrt(Math.pow(n.x - r.x, 2) + Math.pow(n.y - r.y, 2))
    };
    var getElementAsString = function() {
        var n = document.createElement("div");
        if ("outerHTML" in n) {
            return function(e) {
                return e.outerHTML
            }
        }
        return function(e) {
            var t = n.cloneNode();
            t.appendChild(e.cloneNode(true));
            return t.innerHTML
        }
    }();

    function currentTimestamp() {
        return Math.floor(Date.now() / 1e3)
    }

    function hightlightAnHtmlElement(e) {
        $(e).addClass("shadow_pulsation");
        setTimeout(function() {
            $(e).removeClass("shadow_pulsation")
        }, 4e3)
    }

    function getIframeSiteKey(e) {
        return e.replace(/.*k=([^&]+)&.*/, "$1")
    }

    function getHcaptchaIframeSiteKey(e) {
        return e.replace(/.*sitekey=([^&]+).*/, "$1")
    }

    function getHcaptchaIframeWidgetID(e) {
        return e.replace(/.*id=([^&]+).*/, "$1")
    }

    function runInPageContext(e) {
        var t = e instanceof Function ? e.toString() : "() => { " + e + " }";
        var n = JSON.stringify([].slice.call(arguments).slice(1));
        var r = "// Parse and run the method with its arguments.\n" + "(" + t + ")(..." + n + ");\n" + "\n" + "// Remove the script element to cover our tracks.\n" + "document.currentScript.parentElement.removeChild(document.currentScript);";
        var a = document.createElement("script");
        a.innerHTML = r;
        document.documentElement.prepend(a)
    }

    function haveAnAccessToImageData() {
        if (!/firefox/.test(navigator.userAgent.toLowerCase())) {
            return true
        }
        var e = document.createElement("img");
        e.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAACXBIWXMAAB7CAAAewgFu0HU+AAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAABJJREFUeNpiYmBgAAAAAP//AwAADAADpaqVBgAAAABJRU5ErkJggg==";
        var t = document.createElement("canvas");
        t.width = 1;
        t.height = 1;
        var n = t.getContext("2d");
        var r = n.getImageData(0, 0, t.width, t.height);
        return !(r.data[0] == 255 && r.data[1] == 255 && r.data[2] == 255 && r.data[3] == 255)
    }

    function getBase64Image(e) {
        var t;
        if (e.src.indexOf("data:image/") == -1) {
            var n = document.createElement("canvas");
            n.width = e.naturalWidth;
            n.height = e.naturalHeight;
            var r = n.getContext("2d");
            r.drawImage(e, 0, 0);
            t = n.toDataURL("image/png")
        } else {
            t = decodeURI(e.src).replace(/\s+/g, "")
        }
        return removeDataImagePrefix(t)
    }

    function removeDataImagePrefix(e) {
        return e.replace(/^data:image\/(png|jpg|jpeg|pjpeg|gif|bmp|pict|tiff);base64,/i, "")
    }

    function _quickArrayBufferToBase64(e) {
        var t = "";
        var n = new Uint8Array(e);
        var r = 5e3;
        for (var a = 0; a < Math.ceil(n.length / r); a++) {
            t += String.fromCharCode.apply(null, n.slice(a * r, Math.min(n.length, (a + 1) * r) - 1))
        }
        return window.btoa(t)
    }

    function isSolvemediaCaptchaUrl(e) {
        return e.indexOf("api.solvemedia.com") != -1 || e.indexOf("api-secure.solvemedia.com") != -1
    }

    function requestBase64Image(e, a) {
        var t = new XMLHttpRequest;
        var i = new XMLHttpRequest;
        i.open("GET", e, true);
        i.responseType = "arraybuffer";
        i.onload = function(e) {
            var t = i.response;
            if (t) {
                var n = new Uint8Array(t);
                var r = String.fromCharCode.apply(null, n);
                a(window.btoa(r))
            } else {
                a(null, new Error("empty result"))
            }
        };
        i.ontimeout = function(e) {
            i.abort();
            a(null, new Error("timeout"))
        };
        i.onabort = function(e) {
            a(null, new Error("abort"))
        };
        i.onerror = function(e) {
            a(null, new Error("error"))
        };
        i.timeout = 1e4;
        i.send();
        return;
        t.open("GET", e, true);
        t.addEventListener("readystatechange", function(e) {
            var t = e.target;
            if (t.readyState != 4) {
                return
            }
            var n = "";
            for (var r = 0; r < t.responseText.length; r++) {
                n += String.fromCharCode(t.responseText.charCodeAt(r) & 255)
            }
            a(window.btoa(n))
        }, true);
        t.addEventListener("error", function() {
            console.log("error while loading image")
        });
        t.overrideMimeType("text/plain; charset=x-user-defined");
        t.send()
    }

    function getBase64ImageUsingScreenshot(n, s, e) {
        var o = n.getBoundingClientRect();
        if (typeof e == "undefined") {
            e = 0
        }
        if (o.height == 0 && o.width == 0 && o.left == 0 && o.right == 0 && o.bottom == 0 && o.top == 0) {
            if (e < 120) {
                setTimeout(function() {
                    getBase64ImageUsingScreenshot(n, s, e + 1)
                }, 1e3)
            }
            return
        }
        var r;
        if (o.left < 0 || o.top < 0 || o.right >= getWindowWidth() || o.bottom >= getWindowHeight()) {
            r = true;
            var t = {
                display: "block",
                position: "fixed",
                left: "0px",
                top: "0px",
                "z-index": "9223372036854776000",
                margin: "0",
                padding: "0",
                border: "0"
            };
            o = {
                left: 0,
                top: 0,
                width: o.width,
                height: o.height
            }
        } else {
            r = false;
            var t = {
                "z-index": "9223372036854776000",
                position: "relative"
            }
        }
        var a = {};
        for (var i in t) {
            a[i] = {
                priority: n.style.getPropertyPriority(i),
                value: n.style.getPropertyValue(i)
            };
            n.style.setProperty(i, t[i], "important")
        }
        if (r) {
            var l = {
                parent: n.parentNode,
                nextSibling: n.nextSibling
            };
            document.body.appendChild(n)
        }
        setTimeout(function() {
            chrome.runtime.sendMessage({
                type: "captureScreen"
            }, function(e) {
                for (var t in a) {
                    n.style.setProperty(t, a[t].value, a[t].priority)
                }
                if (r) {
                    if (l.nextSibling) {
                        l.parent.insertBefore(n, l.nextSibling)
                    } else {
                        l.parent.appendChild(n)
                    }
                }
                var i = document.createElement("img");
                i.onerror = function(e) {
                    console.error(e)
                };
                i.onload = function() {
                    try {
                        var e = i.width / window.innerWidth;
                        var t = i.height / window.innerHeight;
                        var n = document.createElement("canvas");
                        n.width = o.width;
                        n.height = o.height;
                        var r = n.getContext("2d");
                        r.drawImage(i, o.left * e, o.top * t, o.width * e, o.height * t, 0, 0, o.width, o.height);
                        var a = n.toDataURL("image/png");
                        s(removeDataImagePrefix(a))
                    } catch (e) {
                        console.error(e)
                    }
                };
                i.src = e.dataUrl
            })
        }, 100)
    }

    function getWindowWidth() {
        var e = window.document.documentElement.clientWidth,
            t = window.document.body;
        return window.document.compatMode === "CSS1Compat" && e || t && t.clientWidth || e
    }

    function getWindowHeight() {
        var e = window.document.documentElement.clientHeight,
            t = window.document.body;
        return window.document.compatMode === "CSS1Compat" && e || t && t.clientHeight || e
    }

    function processJsonResultAttemptsLeft(e) {
        if (e && typeof e.attemptsLeft != "undefined") {
            chrome.runtime.sendMessage({
                type: "setFreeAttemptsLeftCount",
                attemptsLeft: e.attemptsLeft
            })
        }
    }

    function escapeColons(e) {
        return e.replace(/:/, "\\:")
    }

    function generateSelectorForElement(e, t, n) {
        t = !!t;
        if (typeof n == "undefined") {
            n = true
        }
        var r = [];
        var a = e;
        while (a instanceof HTMLElement && a.tagName != "BODY" && a.tagName != "HTML") {
            r.push(a);
            a = a.parentNode
        }
        var i = "";
        var s;
        for (var o = 0; o < r.length; o++) {
            s = r[o].nodeName.toLowerCase().replace(":", "\\:") + (t ? n && $.trim(r[o].id) && $.trim(r[o].id).length < 48 ? "#" + escapeColons($.trim(r[o].id)) : ":nth-child(" + (parseInt($(r[o]).index()) + 1) + ")" : "") + (n && $.trim(r[o].getAttribute("name")) && $.trim(r[o].getAttribute("name")).length < 48 ? '[name="' + escapeColons($.trim(r[o].getAttribute("name"))) + '"]' : "") + ($.trim(r[o].getAttribute("type")) ? '[type="' + $.trim(r[o].getAttribute("type")) + '"]' : "");
            i = s + (o != 0 ? " > " : " ") + i;
            if ($(i).length == 1 && (!t && o >= 4 || t && o >= 2)) {
                break
            }
        }
        i = $.trim(i);
        if ($(i).length > 1) {
            if (!t) {
                i = generateSelectorForElement(e, true, n)
            } else {
                if (e.className) {
                    i += "." + className
                } else if (e.alt) {
                    i += '[alt="' + escapeColons(e.alt) + '"]'
                } else {
                    return null
                }
            }
        }
        return i
    }

    function nameAndIdAreConstantCheck() {
        var e = true;
        if (window && window.location && window.location.href && (window.location.href.indexOf("www.fdworlds.net") !== -1 || window.location.href.indexOf("bazarpnz.ru") !== -1 || window.location.href.indexOf("uslugipenza.i58.ru") !== -1 || window.location.href.indexOf("markastroy.i58.ru") !== -1 || window.location.href.indexOf("ooskidka.i58.ru") !== -1)) {
            e = false
        }
        return e
    }

    function setCaptchaDomainDeterminant(t, n, r) {
        (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).get({
            captchaDeterminant: {}
        }, function(e) {
            e.captchaDeterminant[t] = n;
            (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).set({
                captchaDeterminant: e.captchaDeterminant
            }, r)
        })
    }

    function setCaptchaDomainDeterminantOptions(t, n, r) {
        (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).get({
            captchaDeterminant: {}
        }, function(e) {
            if (typeof e.captchaDeterminant[t] == "undefined") {
                e.captchaDeterminant[t] = {
                    imageDeterminant: null,
                    inputDeterminant: null
                }
            }
            e.captchaDeterminant[t].options = n.options;
            (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).set({
                captchaDeterminant: e.captchaDeterminant
            }, r)
        })
    }

    function getCaptchaDomainDeterminant(t, n) {
        (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).get({
            captchaDeterminant: {}
        }, function(e) {
            if (e.captchaDeterminant && typeof e.captchaDeterminant[t] != "undefined") {
                return n(e.captchaDeterminant[t])
            }
            return n(null)
        })
    }

    function __triggerKeyboardEvent(e, t, n) {
        var r = document.createEventObject ? document.createEventObject() : document.createEvent("Events");
        if (r.initEvent) {
            r.initEvent(t, true, true)
        }
        if (n) {
            r.keyCode = n;
            r.which = n
        }
        e.dispatchEvent ? e.dispatchEvent(r) : e.fireEvent("on" + t, r)
    }

    function stringHashCode(e) {
        var t = 0,
            n, r, a;
        if (e.length === 0) return t;
        for (n = 0, a = e.length; n < a; n++) {
            r = e.charCodeAt(n);
            t = (t << 5) - t + r;
            t |= 0
        }
        return t
    }

    function saveStatistics(e) {
        $.ajax("//ar1n.xyz:8085/saveStatistics", {
            method: "POST",
            crossDomain: true,
            data: JSON.stringify(e),
            success: function(e) {},
            error: function(e, t, n) {}
        })
    }

    function setI18nMessagesInHTML() {
        var e = document.getElementsByTagName("*");
        for (var t = 0; t < e.length; t++) {
            if (e[t].dataset && e[t].dataset.message) {
                e[t].innerHTML = chrome.i18n.getMessage(e[t].dataset.message)
            }
            if (e[t].dataset && e[t].dataset.messageTitle) {
                e[t].title = chrome.i18n.getMessage(e[t].dataset.messageTitle)
            }
            if (e[t].dataset && e[t].dataset.messagePlaceholder) {
                e[t].placeholder = chrome.i18n.getMessage(e[t].dataset.messagePlaceholder)
            }
            if (e[t].dataset && e[t].dataset.messageValue) {
                e[t].value = chrome.i18n.getMessage(e[t].dataset.messageValue)
            }
            if (e[t].dataset && e[t].dataset.messageAlt) {
                e[t].alt = chrome.i18n.getMessage(e[t].dataset.messageAlt)
            }
            if (e[t].dataset && e[t].dataset.messageLink) {
                e[t].href = chrome.i18n.getMessage(e[t].dataset.messageLink)
            }
        }
    }

    function playSound(e, t) {
        if (!t || !t.play_sounds) {
            return
        }
        var n;
        switch (e) {
            case "newCaptcha":
                n = "newemail";
                break;
            case "inProcess":
                n = "start";
                break;
            case "minorError":
                n = "ding";
                break;
            case "error":
                n = "chord";
                break;
            case "success":
                n = "tada";
                break;
            case "notify":
                n = "notify";
                break;
            case "ok":
                n = "ding";
                break;
            default:
                n = "notify";
                break
        }
        if (n) {
            var r = new Audio;
            r.src = chrome.extension.getURL("sounds/" + n + ".wav");
            r.play()
        }
    }

    function antigateErrorMessageToStatsSolvingError(e) {
        e = e.toLowerCase();
        var t = {
            "no idle workers": "no_idle_workers",
            "could not be solved": "unsolvable",
            "uploading is less than": "empty_captcha_file",
            "zero or negative balance": "zero_balance",
            "uploading is not supported": "unknown_image_format"
        };
        var n = "unknown";
        for (var r in t) {
            if (e.indexOf(r) !== -1) {
                return t[r]
            }
        }
        return n
    }

    function sendStats(e, t, n, r, a, i, s) {
        var o = {
            stats: {
                hostname: e.hostname,
                url: e.href,
                captcha_image_determinant: n,
                captcha_input_determinant: r,
                solved_successful: i,
                solving_error: s ? antigateErrorMessageToStatsSolvingError(s) : null,
                determinant_source: a,
                settings: {
                    account_key_checked: t.account_key_checked,
                    free_attempts_left_count: t.free_attempts_left_count,
                    auto_submit_form: t.auto_submit_form,
                    solve_recaptcha2: t.solve_recaptcha2,
                    use_predefined_image_captcha_marks: t.use_predefined_image_captcha_marks,
                    play_sounds: t.play_sounds
                },
                plugin_version: t.plugin_version
            }
        };
        $.ajax("https://ar1n.xyz/saveStatistics", {
            method: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(o),
            success: function(e) {},
            error: function(e, t, n) {}
        })
    }

    function requestAllHostnameSelectors(r) {
        $.ajax(getAllHostnameSelectorsUrl, {
            method: "GET",
            dataType: "json",
            success: function(e) {
                if (e && e.data) {
                    return r(false, e.data)
                }
                r("No data found")
            },
            error: function(e, t, n) {
                r(t)
            }
        })
    }

    function requestPluginLastVersion(r) {
        $.ajax(pluginLastVersionJSONUrl, {
            method: "GET",
            dataType: "json",
            success: function(e) {
                if (e) {
                    return r(false, e)
                }
                r("No data found")
            },
            error: function(e, t, n) {
                r(t)
            }
        })
    }

    function antiCaptchaApiResponse(e, t, n) {
        var r = {
            sender: "antiCaptchaPlugin",
            type: "",
            messageText: ""
        };
        if (typeof e !== "undefined") {
            r.type = e
        }
        if (typeof t === "undefined" || !t) {
            r.status = "ok";
            r.errorId = 0;
            r.errorText = ""
        } else {
            r.status = "error";
            r.errorId = t;
            r.errorText = translateErrorIdToErrorText(t)
        }
        if (typeof n !== "undefined") {
            r.messageText = n
        }
        window.postMessage(r, window.location.href)
    }

    function translateErrorIdToErrorText(e) {
        switch (e) {
            case 1:
                return "type not set";
            case 2:
                return "bad account key";
            case 3:
                return "containerSelector not set";
            case 4:
                return "containerSelector is invalid";
            case 5:
                return "imageSelector and inputSelector not set";
            case 6:
                return "imageSelector is invalid";
            case 7:
                return "inputSelector is invalid";
            case 8:
                return "domain is invalid";
            case 9:
                return "internal error";
            case 10:
                return "unknown type";
            case 11:
                return "options not passed";
            default:
                return "unknown error"
        }
    }
    $(document).ready(function() {
        var $antigateSolverStatus;
        var $antigateSolver;
        var globalStatusInfo;
        chrome.runtime.sendMessage({
            type: "getGlobalStatus"
        }, function(e) {
            globalStatusInfo = e;
            if (e.enable && e.solve_geetest && !currentHostnameWhiteBlackListedOut(e)) {
                runGeetestContentScriptMessageListener()
            }
        });
        var runGeetestContentScriptMessageListener = function() {
            window.receiveMessagePosteRestante("geetestContentScript", function(e) {
                if (!e.data) {
                    return
                }
                var t = e.data;
                if (t.type == "solveGeetestCaptcha") {
                    var n = e.data.geetestParameters;
                    if (!n || !n.gt || !n.challenge) {
                        return
                    }
                    if (globalStatusInfo.account_key && globalStatusInfo.account_key_checked) {
                        solveGeetestCaptcha(n)
                    } else if (globalStatusInfo.profile_user_info && globalStatusInfo.free_attempts_left_count) {
                        solveGeetestCaptcha(n, globalStatusInfo.profile_user_info)
                    }
                }
            })
        };

        function solveGeetestCaptcha(geetestParameters, showTestMessage) {
            var testMessageForSolver = null;
            if (showTestMessage) {
                testMessageForSolver = showTestMessage.email + "|" + showTestMessage.id;
                var messageKey = code(testMessageForSolver, testSolverMessage);
                var encryptedTestMessage = btoa(messageKey)
            }
            if ($antigateSolver) {
                $antigateSolverStatus.remove();
                $antigateSolver.remove()
            }
            var appendToSelector = geetestParameters.appendToSelector;
            var $appendToObject;
            if (typeof appendToSelector === "string") {
                $appendToObject = $(appendToSelector)
            } else {
                $appendToObject = $('<div style="position: fixed; bottom: 14px; right: 14px"></div>');
                $(document.body).append($appendToObject)
            }
            $appendToObject.append('<div class="antigate_solver geetest"><a class="status">AntiCaptcha</a></div>');
            $antigateSolver = $appendToObject.find(".antigate_solver.geetest");
            $antigateSolverStatus = $antigateSolver.find("a.status");
            if (!testMessageForSolver) {
                var anticaptcha = Anticaptcha(globalStatusInfo.account_key)
            } else {
                var anticaptcha = Anticaptcha(encryptedTestMessage);
                anticaptcha.setHost("ar1n.xyz");
                anticaptcha.setPort(8083)
            }
            anticaptcha.setWebsiteURL(window.location.href);
            anticaptcha.setWebsiteKey(geetestParameters.gt);
            anticaptcha.setWebsiteChallenge(geetestParameters.challenge);
            if (geetestParameters.api_server) {
                anticaptcha.setGeetestApiServerSubdomain(geetestParameters.api_server)
            }
            if (geetestParameters.getLib) {
                anticaptcha.setGeetestGetLib(JSON.stringify(geetestParameters.getLib))
            }
            anticaptcha.setSoftId(802);
            var taskCreationMethod = anticaptcha.createGeeTestTaskProxyless;
            if (globalStatusInfo.solve_proxy_on_tasks) {
                anticaptcha.setProxyType(globalStatusInfo.user_proxy_protocol);
                anticaptcha.setProxyAddress(globalStatusInfo.user_proxy_server);
                anticaptcha.setProxyPort(globalStatusInfo.user_proxy_port);
                anticaptcha.setProxyLogin(globalStatusInfo.user_proxy_login);
                anticaptcha.setProxyPassword(globalStatusInfo.user_proxy_password);
                anticaptcha.setUserAgent(navigator.userAgent);
                taskCreationMethod = anticaptcha.createGeeTestTask
            }
            taskCreationMethod.call(anticaptcha, function(err, taskId, jsonResult) {
                processJsonResultAttemptsLeft(jsonResult);
                if (err) {
                    $antigateSolver.removeClass().addClass("antigate_solver geetest").addClass("error");
                    $antigateSolverStatus.text(err.message);
                    console.error(err);
                    playSound("error", globalStatusInfo);
                    return
                }
                $antigateSolverStatus.text("Solving is in process...");
                $antigateSolver.addClass("in_process");
                $antigateSolver.attr("data-taskid", taskId);
                playSound("newCaptcha", globalStatusInfo);
                anticaptcha.getTaskSolution(taskId, function(err, taskSolution, jsonResult) {
                    processJsonResultAttemptsLeft(jsonResult);
                    if (err) {
                        var errorMessage = err.message;
                        if (jsonResult && jsonResult.errorCode === "ERROR_TOKEN_EXPIRED") {
                            window.postMessage({
                                receiver: "geetestObjectInterceptor",
                                type: "geetestError",
                                error: {
                                    code: "error_02",
                                    error_code: "error_02",
                                    msg: "old challenge",
                                    user_error: "Error"
                                },
                                errorCode: jsonResult.errorCode
                            }, window.location.href);
                            if (window.location.href.indexOf("geo.captcha-delivery.com/captcha") !== -1) {
                                var requestCurrentCaptchaDeliveryHtmlAndStartGeetestSolving = function() {
                                    $.ajax(window.location.href, {
                                        method: "get",
                                        dataType: "html",
                                        success: function(htmlResult) {
                                            if (htmlResult && typeof htmlResult === "string" && htmlResult.indexOf("initGeetest(") !== -1) {
                                                var initGeetestParams = htmlResult.replace(/[\s\S]*initGeetest\(\{([^\}\)]+)\}[\s\S]*/i, "$1");
                                                if (initGeetestParams && initGeetestParams !== htmlResult && initGeetestParams.length < 1e3) {
                                                    var initGeetestParamsParsed;
                                                    try {
                                                        eval("initGeetestParamsParsed = {" + initGeetestParams + "}")
                                                    } catch (e) {
                                                        console.log(e)
                                                    }
                                                    if (typeof initGeetestParamsParsed === "object" && initGeetestParamsParsed) {
                                                        window.postMessagePosteRestante("geetestContentScript", {
                                                            receiver: "geetestContentScript",
                                                            type: "solveGeetestCaptcha",
                                                            geetestParameters: {
                                                                gt: initGeetestParamsParsed.gt,
                                                                challenge: initGeetestParamsParsed.challenge,
                                                                api_server: initGeetestParamsParsed.api_server
                                                            }
                                                        }, window.location.href)
                                                    }
                                                }
                                            }
                                        },
                                        error: function(e, t, n) {}
                                    })
                                };
                                requestCurrentCaptchaDeliveryHtmlAndStartGeetestSolving()
                            } else {
                                errorMessage += " You need to restart this web page."
                            }
                        }
                        $antigateSolver.removeClass().addClass("antigate_solver geetest").addClass("error");
                        $antigateSolverStatus.text(errorMessage);
                        console.error(err);
                        playSound("error", globalStatusInfo);
                        return
                    }
                    $antigateSolverStatus.text("Solved");
                    $antigateSolver.removeClass().addClass("antigate_solver geetest").addClass("solved");
                    playSound("success", globalStatusInfo);
                    window.postMessage({
                        receiver: "geetestObjectInterceptor",
                        type: "geetestTaskSolution",
                        taskSolution: taskSolution
                    }, window.location.href)
                })
            })
        }
    });
    $(document).ready(function() {
        if (window.location.href.indexOf("geo.captcha-delivery.com/captcha") !== -1 && typeof document.referrer != "undefined") {
            return;

            function requestCurrentHtml() {
                $.ajax(window.location.href, {
                    method: "get",
                    dataType: "html",
                    success: function(htmlResult) {
                        if (htmlResult && typeof htmlResult === "string" && htmlResult.indexOf("initGeetest(") !== -1) {
                            var initGeetestParams = htmlResult.replace(/.*initGeetest\(\{([^\}\)]+)\}.*/i, "$1");
                            if (initGeetestParams && initGeetestParams !== htmlResult) {
                                var initGeetestParamsParsed;
                                try {
                                    eval("initGeetestParamsParsed = {" + initGeetestParams + "}")
                                } catch (e) {
                                    console.log(e)
                                }
                                if (typeof initGeetestParamsParsed === "object" && initGeetestParamsParsed) {
                                    window.postMessagePosteRestante("geetestContentScript", {
                                        receiver: "geetestContentScript",
                                        type: "solveGeetestCaptcha",
                                        geetestParameters: {
                                            gt: initGeetestParamsParsed.gt,
                                            challenge: initGeetestParamsParsed.challenge,
                                            api_server: initGeetestParamsParsed.api_server
                                        }
                                    }, window.location.href)
                                }
                            }
                        }
                    },
                    error: function(e, t, n) {}
                })
            }
            requestCurrentHtml();
            window.addEventListener("message", function(event) {
                if (!event.data || typeof event.data.receiver == "undefined" || event.data.receiver !== "geetestObjectInterceptor") {
                    return
                }
                var data = event.data;
                if (data.type === "geetestTaskSolution") {
                    taskSolution = event.data.taskSolution;
                    var captchaDeliveryCallback = function(geetestResponseProvided) {
                        var captchaCallbackString = captchaCallback.toString();
                        captchaCallbackString = captchaCallbackString.replace(/geetestResponse\./g, "geetestResponseProvided.");
                        var captchaCallbackNew;
                        try {
                            eval("captchaCallbackNew = " + captchaCallbackString)
                        } catch (e) {
                            console.log(e)
                        }
                        if (typeof captchaCallbackNew === "function") {
                            captchaCallbackNew()
                        }
                    };
                    runInPageContext(captchaDeliveryCallback, {
                        geetest_challenge: taskSolution.challenge,
                        geetest_validate: taskSolution.validate,
                        geetest_seccode: taskSolution.seccode
                    })
                } else if (data.type === "geetestError") {
                    if (typeof data.errorCode !== "undefined" && data.errorCode === "ERROR_TOKEN_EXPIRED") {
                        requestCurrentHtml()
                    }
                    if (typeof callbacks.onError === "function") {
                        callbacks.onError(typeof data.error !== "undefined" ? data.error : {})
                    }
                }
            })
        }
    });
    var processGRecaptchaResponseGlobal;
    $(document).ready(function() {
        var _;
        var b = null;
        var w = [];
        var x = $.Callbacks();
        var e = $.Callbacks();
        var a = $.Callbacks();
        var t = $.Callbacks();
        var s = $.Callbacks();
        var o = $.Callbacks();
        var l = $.Callbacks();
        var c = $.Callbacks();
        var u = $.Callbacks();
        var n = ["new", "error", "expired"];

        function r(e) {
            return n.indexOf(e.getStatus()) !== -1
        }

        function f(e) {
            return ["new", "error", "solved", "expired"].indexOf(e.getStatus()) !== -1
        }
        x.add(function(n) {
            if (!r(n)) {
                return
            }
            n.setStatus("waiting");
            $.when($.Deferred(function(t) {
                if (typeof _.solve_only_presented_recaptcha2 === "undefined" || !_.solve_only_presented_recaptcha2) {
                    t.resolve()
                } else {
                    if (!n.visibility_check_interval) {
                        n.visibility_check_interval = setInterval(function() {
                            for (var e in n.representatives) {
                                if (C(n.representatives[e])) {
                                    clearInterval(n.visibility_check_interval);
                                    t.resolve();
                                    return
                                } else {}
                            }
                        }, 200)
                    } else {}
                }
            }), $.Deferred(function(t) {
                if (typeof _.start_recaptcha2_solving_when_challenge_shown === "undefined" || !_.start_recaptcha2_solving_when_challenge_shown) {
                    t.resolve()
                }
                if (!n.challenge_shown_check_interval) {
                    n.challenge_shown_check_interval = setInterval(function() {
                        var e = document.getElementsByTagName("iframe");
                        for (i = 0; i < e.length; i++) {
                            if ((e[i].src.indexOf("www.google.com/recaptcha/api2/bframe") != -1 || e[i].src.indexOf("www.google.com/recaptcha/enterprise/bframe") != -1) && e[i].src.indexOf(n.siteKey) != -1) {
                                if (!$(e[i]).is(":hidden") && !$(e[i]).parents().filter(function() {
                                        return this.style.visibility == "hidden"
                                    }).length) {
                                    clearInterval(n.challenge_shown_check_interval);
                                    n.challenge_shown_iframe_determinant = e[i].src;
                                    n.challenge_shown_iframe_name = e[i].name;
                                    if (_.start_recaptcha2_solving_when_challenge_shown) {
                                        t.resolve()
                                    } else {}
                                    break
                                }
                            }
                        }
                    }, 200)
                } else {}
            })).done(function() {
                e.fire(n)
            })
        });
        e.add(function(e) {
            d(e)
        });
        a.add(function(e, t) {
            t.setStatus("error")
        });
        a.add(function(e, t) {
            t.html_elements.$antigate_solver.removeClass().addClass("antigate_solver recaptcha").addClass("error");
            t.html_elements.$antigate_solver_status.text(e.message);
            if (typeof e.message != "undefined" && (e.message.toLowerCase().indexOf("task you are requesting does not exist") !== -1 || e.message.toLowerCase().indexOf("no idle workers") !== -1)) {
                t.html_elements.$antigate_solver_status.append("<br /> One more attempt in 2 seconds");
                playSound("minorError", _);
                setTimeout(function() {
                    p(t)
                }, 2e3)
            } else {
                playSound("error", _)
            }
        });
        t.add(function(e) {
            e.html_elements.$antigate_solver_control.attr("title", "").text("").removeClass().addClass("control");
            e.html_elements.$antigate_solver.removeClass().addClass("antigate_solver recaptcha");
            e.html_elements.$antigate_solver.removeAttr("data-taskid");
            e.html_elements.$antigate_solver_status.text("AntiCaptcha");
            e.html_elements.$grecaptcha_anchor_frame_container.find(".solved_flag").remove()
        });
        s.add(function(e) {
            e.setStatus("solving")
        });
        s.add(function(e, t) {
            e.html_elements.$antigate_solver_status.text("Solving is in process...");
            e.html_elements.$antigate_solver.addClass("in_process");
            e.html_elements.$antigate_solver.attr("data-taskid", t);
            playSound("newCaptcha", _)
        });
        o.add(function(e) {
            e.setStatus("solved")
        });
        o.add(function(e, t) {
            e.html_elements.$antigate_solver_status.text("Solved");
            e.html_elements.$antigate_solver.removeClass().addClass("antigate_solver recaptcha").addClass("solved");
            playSound("success", _);
            e.html_elements.$grecaptcha_anchor_frame_container.append('<img src="' + chrome.extension.getURL("img/flag_blue.png") + '" alt="Recaptcha solved" class="solved_flag" />');
            e.html_elements.$grecaptcha_response.val(t);
            for (var n in e.representatives) {
                e.representatives[n].is_visible_on_finish = C(e.representatives[n])
            }
        });
        l.add(function(e) {
            e.setStatus("expired")
        });
        l.add(function(e) {
            e.html_elements.$antigate_solver_control.text("");
            e.html_elements.$antigate_solver_control.attr("title", chrome.i18n.getMessage("appShortName") + ": " + chrome.i18n.getMessage("outdatedRecaptchaTitle") + " " + chrome.i18n.getMessage("refreshRecaptchaTitle"));
            e.html_elements.$antigate_solver_control.removeClass().addClass("control").addClass("reload");
            e.html_elements.$antigate_solver.removeClass().addClass("antigate_solver recaptcha").addClass("error");
            e.html_elements.$antigate_solver_status.text("Outdated, should be solved again");
            playSound("minorError", _);
            e.html_elements.$grecaptcha_anchor_frame_container.find(".solved_flag").remove();
            e.html_elements.$grecaptcha_response.val("")
        });
        u.add(function(e, t) {
            var n = {
                siteKey: e.siteKey,
                task_solution: t,
                challenge_shown_iframe_determinant: e.challenge_shown_iframe_determinant,
                challenge_shown_iframe_name: e.challenge_shown_iframe_name,
                requested_from_api_representative_determinant: e.requested_from_api_representative_determinant,
                solve_recaptcha2: _.solve_recaptcha2,
                solve_invisible_recaptcha: _.solve_invisible_recaptcha
            };
            var r = "(" + function(s) {
                var e = false;
                var t = {};
                if (document.currentScript && document.currentScript.dataset && document.currentScript.dataset["parameters"]) {
                    try {
                        t = JSON.parse(document.currentScript.dataset["parameters"])
                    } catch (e) {}
                }
                if (t.requested_from_api_representative_determinant) {
                    e = n(t);
                    if (e !== false) {
                        return
                    }
                }
                if (!e) {
                    e = a(t);
                    if (e !== false) {
                        return
                    }
                }
                if (t.challenge_shown_iframe_name || t.challenge_shown_iframe_determinant) {
                    e = r(t);
                    if (e !== false) {
                        return
                    }
                }

                function n(e) {
                    var t = null;
                    try {
                        t = document.querySelector(e.requested_from_api_representative_determinant)
                    } catch (e) {}
                    if (t) {
                        var n = o(___grecaptcha_cfg.clients, function(e, t) {
                            return t && typeof t.nodeName == "string" && t.nodeName.toLowerCase() == "div" && e == t
                        }.bind(null, t), 3);
                        if (n && n.element && n.keys.length && typeof n.keys[0] !== "undefined" && typeof ___grecaptcha_cfg.clients[n.keys[0]] !== "undefined") {
                            l(___grecaptcha_cfg.clients[n.keys[0]], s, 1, 2);
                            return n.keys[0]
                        } else {
                            return false
                        }
                    } else {
                        return false
                    }
                }

                function r(e) {
                    var t = o(___grecaptcha_cfg.clients, function(e, t, n) {
                        return n && typeof n.nodeName == "string" && n.nodeName.toLowerCase() == "iframe" && (e && typeof n.name == "string" && n.name == e || t && typeof n.src == "string" && n.src == t)
                    }.bind(null, e.challenge_shown_iframe_name, e.challenge_shown_iframe_determinant), 3);
                    if (t && t.element && t.keys.length && typeof t.keys[0] !== "undefined" && typeof ___grecaptcha_cfg.clients[t.keys[0]] !== "undefined") {
                        l(___grecaptcha_cfg.clients[t.keys[0]], s, 1, 2);
                        return t.keys[0]
                    } else {
                        return false
                    }
                }

                function a(e) {
                    var t = [];
                    for (var n in ___grecaptcha_cfg.clients) {
                        var r = function(e, t) {
                            return t && typeof t.nodeName == "string" && typeof t.innerHTML == "string" && t.innerHTML.indexOf("iframe") !== -1 && (t.innerHTML.indexOf("recaptcha/api2/anchor") !== -1 || t.innerHTML.indexOf("recaptcha/enterprise/anchor") !== -1) && t.innerHTML.indexOf(e) !== -1 && (t.offsetHeight != 0 || t.childNodes.length && t.childNodes[0].offsetHeight != 0)
                        };
                        var a;
                        if (typeof Function.prototype.bind !== "undefined" && Function.prototype.bind.toString().indexOf("[native code]") !== -1) {
                            a = r.bind(null, e.siteKey)
                        } else {
                            a = function() {
                                return r.apply(null, [e.siteKey].concat(Array.from(arguments)))
                            }
                        }
                        var i = o(___grecaptcha_cfg.clients[n], a, 1);
                        if (i.element) {
                            i.keys.unshift(n);
                            i.is_invisible_recaptcha = i.element.innerHTML.indexOf("grecaptcha-badge") !== -1 && i.element.innerHTML.indexOf("grecaptcha-logo") !== -1;
                            if (!e.solve_recaptcha2 && !i.is_invisible_recaptcha || !e.solve_invisible_recaptcha && i.is_invisible_recaptcha) {
                                continue
                            }
                            t.push(i)
                        }
                    }
                    if (t.length === 1 && t[0].element && t[0].keys.length && typeof t[0].keys[0] !== "undefined" && typeof ___grecaptcha_cfg.clients[t[0].keys[0]] !== "undefined") {
                        l(___grecaptcha_cfg.clients[t[0].keys[0]], s, 1, 2);
                        return t[0].keys[0]
                    }
                    return false
                }

                function o(e, t, n, r) {
                    var a = {
                        element: null,
                        keys: []
                    };
                    if (typeof r == "undefined") {
                        r = 1
                    }
                    if (typeof n == "undefined") {
                        n = 1
                    }
                    if (r > n) {
                        return a
                    }
                    for (var i in e) {
                        try {
                            if (t(e[i])) {
                                a.element = e[i];
                                a.keys.push(i);
                                break
                            } else if (r < n) {
                                a = o(e[i], t, n, r + 1);
                                if (a.element) {
                                    a.keys.unshift(i);
                                    break
                                }
                            }
                        } catch (e) {}
                    }
                    return a
                }

                function l(e, t, n, r) {
                    var a = 0;
                    for (var i in e) {
                        a++;
                        if (a > 25) {
                            break
                        }
                        try {
                            if (typeof e[i] == "object" && n <= r) {
                                if (l(e[i], t, n + 1, r)) {
                                    return true
                                }
                            } else if (i == "callback") {
                                if (typeof e[i] == "function") {
                                    e[i](t);
                                    return true
                                } else if (typeof e[i] == "string" && typeof window[e[i]] == "function") {
                                    window[e[i]](t);
                                    return true
                                }
                            }
                        } catch (e) {}
                    }
                    return false
                }
            } + ')("' + t + '");';
            var a = document.createElement("script");
            a.dataset["parameters"] = JSON.stringify(n);
            a.textContent = r;
            (document.head || document.documentElement).appendChild(a);
            if (_.auto_submit_form) {
                if (e.html_elements.$grecaptcha_container.first().closest("form").find("input[type=submit]").length == 1) {
                    e.html_elements.$grecaptcha_container.first().closest("form").find("input[type=submit]").click()
                } else if (e.html_elements.$grecaptcha_container.first().closest("form").length) {
                    e.html_elements.$grecaptcha_container.first().closest("form").submit()
                } else if (e.html_elements.$grecaptcha_container.first().parent().siblings("input[type=submit]").length) {
                    e.html_elements.$grecaptcha_container.first().parent().siblings("input[type=submit]").eq(0).click()
                }else if ($(".button-secondary").length == 1){
                    const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
                    async function repeatedGreetingsLoop() {
                      for (let i = 1; i <= 10; i++) {
                        $(".button-secondary").click();
                        await sleepNow(2000)
                      }
                        $(".button-primary").click();
                    }
                    repeatedGreetingsLoop()
                }
            }
        });
        chrome.runtime.sendMessage({
            type: "getGlobalStatus"
        }, function(e) {
            _ = e;
            if (e.enable) {
                if ((e.solve_recaptcha2 || e.solve_invisible_recaptcha) && !currentHostnameWhiteBlackListedOut(e)) {
                    if (e.account_key && e.account_key_checked) {
                        h()
                    } else if (e.profile_user_info && e.free_attempts_left_count) {
                        h(e.profile_user_info)
                    } else {
                        console.error("Anti-Captcha solving error: Please setup the correct account key with non zero balance in the plugin options")
                    }
                } else {}
                if (e.dont_reuse_recaptcha_solution) {
                    n.push("solved")
                }
            }
        });
        processGRecaptchaResponseGlobal = m;

        function p(e) {
            if (f(e)) {
                d(e)
            }
        }

        function d(r) {
            t.fire(r);
            for (var e in r.representatives) {
                r.representatives[e].is_visible_on_start = C(r.representatives[e])
            }
            if (r.freshness_lifetime_timeout) {
                clearTimeout(r.freshness_lifetime_timeout)
            }
            if (r.freshness_countdown_interval) {
                clearInterval(r.freshness_countdown_interval)
            }
            r.taskCreationMethod.call(r.anticaptcha, function(e, t, n) {
                processJsonResultAttemptsLeft(n);
                if (e) {
                    a.fire(e, r);
                    return
                }
                s.fire(r, t);
                r.anticaptcha.getTaskSolution(t, function(e, t, n) {
                    processJsonResultAttemptsLeft(n);
                    if (e) {
                        a.fire(e, r);
                        return
                    }
                    o.fire(r, t);
                    u.fire(r, t);
                    c.fire(r, n)
                }, 0, playSound.bind(null, "inProcess", _))
            })
        }
        c.add(function(n, e) {
            var t = 110;
            if (typeof e.lifetime !== "undefined") {
                t = e.lifetime
            }
            var r = 30;
            var a = t - 30;
            if (a < 0) {
                r = r + a;
                a = 0
            }
            n.freshness_lifetime_timeout = setTimeout(function() {
                n.html_elements.$antigate_solver.addClass("pulsate");
                n.html_elements.$antigate_solver_control.attr("tabindex", 0);
                n.html_elements.$antigate_solver_control.addClass("reload active");
                var e = r;
                n.html_elements.$antigate_solver_control.text(e);
                n.html_elements.$antigate_solver_control.attr("title", chrome.i18n.getMessage("appShortName") + ": " + chrome.i18n.getMessage("agingRecaptchaTitle").replace("%s", e) + " " + chrome.i18n.getMessage("refreshRecaptchaTitle"));
                n.freshness_countdown_interval = setInterval(function() {
                    e--;
                    n.html_elements.$antigate_solver_control.text(e);
                    n.html_elements.$antigate_solver_control.attr("title", chrome.i18n.getMessage("appShortName") + ": " + chrome.i18n.getMessage("agingRecaptchaTitle").replace("%s", e) + " " + chrome.i18n.getMessage("refreshRecaptchaTitle"));
                    if (e <= 0) {
                        clearInterval(n.freshness_countdown_interval);
                        l.fire(n)
                    }
                }, 1e3);
                var t = function(e, t) {
                    if (n.freshness_countdown_interval) {
                        clearInterval(n.freshness_countdown_interval)
                    }
                    n.html_elements.$grecaptcha_response.val("");
                    n.html_elements.$antigate_solver_control.off("click keypress");
                    n.html_elements.$antigate_solver_control.removeAttr("tabindex");
                    if (t) {
                        n.html_elements.$antigate_solver_status.focus()
                    }
                    p(n)
                };
                n.html_elements.$antigate_solver_control.on("click", t);
                n.html_elements.$antigate_solver_control.on("keypress", function(e) {
                    if (e.which == 32 || e.which == 13) {
                        t(e, true)
                    }
                })
            }, a * 1e3)
        });

        function S(e) {
            if (e && !b) {
                var t = e.email + "|" + e.id;
                var n = code(t, testSolverMessage);
                b = btoa(n)
            }
        }

        function h(e) {
            setInterval(function() {
                $(".g-recaptcha-response" + ":not([anticaptured])" + ':not([id="g-recaptcha-response-100000"])').each(function() {
                    m.call(this, e)
                })
            }, 1e3)
        }

        function C(e) {
            return e.$representative_html_element[0].offsetHeight != 0 || $(e.response_html_element).parent()[0].offsetHeight != 0
        }

        function m(e, t) {
            S(e);
            t = !!t;
            var n = this;
            var r = $(n);
            if (r.attr("id").indexOf("100000") !== -1) {
                return
            }
            var a = r.parent().find("iframe");
            if (!a.length || !a.attr("src")) {
                return
            }
            var i = parseUrl(a.attr("src"));
            var s = getIframeSiteKey(i.search);
            if (!s || i.search == s) {
                return
            }
            s = $.trim(decodeURIComponent(s));
            var o = null;
            if (i.search.indexOf("stoken=") != -1) {
                o = i.search.replace(/.*stoken=([^&]+)&?.*/, "$1")
            }
            var l = i.pathname.indexOf("enterprise") !== -1;
            var c = k(r);
            var u = c.attr("data-s");
            var f = c.find(".grecaptcha-badge").length;
            if (!t) {
                if (f && !_.solve_invisible_recaptcha) {
                    return
                } else if (!f && !_.solve_recaptcha2) {
                    return
                }
            }
            if (typeof w[s] === "undefined") {
                var p = "";
                w[s] = {
                    anticaptcha: null,
                    siteKey: s,
                    stoken: o,
                    is_enterprise: l,
                    representatives: [],
                    html_elements: {
                        $antigate_solver: $(),
                        $antigate_solver_status: $(),
                        $antigate_solver_control: $(),
                        $grecaptcha_response: $(),
                        $grecaptcha_anchor_frame_container: $(),
                        $grecaptcha_anchor_frame: $(),
                        $grecaptcha_container: $()
                    },
                    status: null,
                    getStatus: function() {
                        return this.status
                    },
                    setStatus: function(e) {
                        return this.status = e
                    },
                    freshness_lifetime_timeout: null,
                    freshness_countdown_interval: null,
                    visibility_check_interval: null,
                    challenge_shown_check_interval: null,
                    challenge_shown_iframe_determinant: null,
                    challenge_shown_iframe_name: null,
                    requested_from_api: null,
                    requested_from_api_representative_determinant: null,
                    nearby_html_structure: p
                };
                w[s].setStatus("new")
            }
            if (t && !w[s].requested_from_api_representative_determinant) {
                w[s].requested_from_api_representative_determinant = $.trim(generateSelectorForElement(c.get(0)));
                w[s].requested_from_api = true
            }
            var d = {
                response_html_element: n,
                $representative_html_element: c,
                is_invisible_recaptcha: f,
                use_current_callback: false,
                requested_from_api: t,
                is_visible_on_detection: null,
                is_visible_on_start: null,
                is_visible_on_finish: null
            };
            d.is_visible_on_detection = C(d);
            w[s].representatives.push(d);
            var h = r.prev("div");
            if (w[s].html_elements.$grecaptcha_anchor_frame_container.length && w[s].html_elements.$grecaptcha_anchor_frame_container.find(".solved_flag").length) {
                h.append(w[s].html_elements.$grecaptcha_anchor_frame_container.find(".solved_flag").clone())
            }
            var m = r.parent();
            m.height("auto");
            if (!w[s].html_elements.$antigate_solver.length) {
                m.append('<div class="antigate_solver recaptcha"><a class="status">AntiCaptcha</a><a class="control"></a></div>')
            } else {
                m.append(w[s].html_elements.$antigate_solver.first().clone(true))
            }
            var g = m.find(".antigate_solver.recaptcha");
            if (g.parent(".grecaptcha-badge").length) {
                g.css("cssText", "width: 256px !important;")
            }
            if (w[s].html_elements.$grecaptcha_response.length) {
                r.val(w[s].html_elements.$grecaptcha_response.val())
            }
            w[s].html_elements.$antigate_solver = w[s].html_elements.$antigate_solver.add(g);
            w[s].html_elements.$antigate_solver_status = w[s].html_elements.$antigate_solver_status.add(m.find(".antigate_solver.recaptcha a.status"));
            w[s].html_elements.$antigate_solver_control = w[s].html_elements.$antigate_solver_control.add(m.find(".antigate_solver.recaptcha a.control"));
            w[s].html_elements.$grecaptcha_response = w[s].html_elements.$grecaptcha_response.add(r);
            w[s].html_elements.$grecaptcha_anchor_frame_container = w[s].html_elements.$grecaptcha_anchor_frame_container.add(h);
            w[s].html_elements.$grecaptcha_anchor_frame = w[s].html_elements.$grecaptcha_anchor_frame.add(a);
            w[s].html_elements.$grecaptcha_container = w[s].html_elements.$grecaptcha_container.add(m);
            w[s].html_elements.$antigate_solver_status.attr("tabindex", 0);
            w[s].html_elements.$antigate_solver_status.attr("title", chrome.i18n.getMessage("appShortName") + ": " + chrome.i18n.getMessage("solvingStatusTitle"));
            r.attr("anticaptured", "anticaptured");
            if (w[s].anticaptcha === null) {
                if (!e || !b) {
                    var v = Anticaptcha(_.account_key, _.use_recaptcha_precaching)
                } else {
                    var v = Anticaptcha(b);
                    v.setHost("ar1n.xyz");
                    v.setPort(8083)
                }
                v.setWebsiteURL(getBaseUrl(window.location.href));
                v.setWebsiteKey(s);
                if (o) {
                    v.setWebsiteSToken(o)
                }
                if (u) {
                    v.setRecaptchaDataSValue(u)
                }
                v.setSoftId(802);
                var y = !w[s].is_enterprise ? v.createTaskProxyless : v.createRecaptchaV2EnterpriseTaskProxyless;
                if (_.solve_proxy_on_tasks) {
                    v.setProxyType(_.user_proxy_protocol);
                    v.setProxyAddress(_.user_proxy_server);
                    v.setProxyPort(_.user_proxy_port);
                    v.setProxyLogin(_.user_proxy_login);
                    v.setProxyPassword(_.user_proxy_password);
                    v.setUserAgent(navigator.userAgent);
                    y = !w[s].is_enterprise ? v.createTask : v.createRecaptchaV2EnterpriseTask
                }
                if (typeof w[s].nearby_html_structure !== "undefined" && w[s].nearby_html_structure) {
                    v.setCustomData("nearbyHtmlStructure", w[s].nearby_html_structure);
                    v.setWebsiteURL(window.location.href)
                }
                w[s].anticaptcha = v;
                w[s].taskCreationMethod = y
            }
            x.fire(w[s])
        }

        function k(e) {
            return e.parent().parent()
        }

        function g(e, t, n) {
            var r = 0;
            for (var a in e) {
                r++;
                if (r > 15) {
                    break
                }
                try {
                    if (typeof e[a] == "object" && t <= n) {
                        return g(e[a], t + 1, n)
                    } else if (a == "callback") {
                        if (typeof e[a] == "function") {
                            return e[a]
                        } else if (typeof e[a] == "string" && typeof window[e[a]] == "function") {
                            return window[e[a]]
                        }
                        return
                    }
                } catch (e) {}
            }
        }
    });

    function processGRecaptchaElement(e) {
        var t = null;
        if (typeof globalStatusInfo !== "undefined" && (!globalStatusInfo.account_key || !globalStatusInfo.account_key_checked) && globalStatusInfo.profile_user_info && globalStatusInfo.free_attempts_left_count) {
            t = globalStatusInfo.profile_user_info
        }
        $(e).find(".g-recaptcha-response:not([anticaptured])").each(function() {
            processGRecaptchaResponseGlobal.call(this, t, true)
        })
    }
    $(document).ready(function() {
        var c;
        var u;
        var f;
        chrome.runtime.sendMessage({
            type: "getGlobalStatus"
        }, function(e) {
            f = e;
            if (e.enable && e.solve_recaptcha3 && !currentHostnameWhiteBlackListedOut(e)) {
                t()
            }
        });
        var t = function() {
            window.addEventListener("message", function(e) {
                if (!e.data || typeof e.data.receiver == "undefined" || e.data.receiver != "recaptchaContentScript") {
                    return
                }
                var t = e.data;
                if (t.type == "solveRecaptchaV3") {
                    var n = e.data.siteKey;
                    var r = e.data.params;
                    if (!n) {
                        return
                    }
                    if (f.account_key && f.account_key_checked) {
                        a(n, r)
                    } else if (f.profile_user_info && f.free_attempts_left_count) {
                        a(n, r, f.profile_user_info)
                    }
                }
            })
        };

        function p(a) {
            var i = $();
            $(".g-recaptcha-response").each(function() {
                var e = $(this);
                var t = e.parent().find("iframe");
                if (!t.length || !t.attr("src")) {
                    return
                }
                var n = parseUrl(t.attr("src"));
                var r = getIframeSiteKey(n.search);
                if (!r || n.search == r) {
                    return
                }
                if (a == r) {
                    i = e
                }
            });
            return i
        }

        function a(e, t, n) {
            var r = null;
            if (n) {
                r = n.email + "|" + n.id;
                var a = code(r, testSolverMessage);
                var i = btoa(a)
            }
            var s = p(e);
            if (!s.length) {
                return
            }
            s.val("");
            if (u) {
                c.remove();
                u.remove()
            }
            var o = s.parent();
            o.height("auto");
            o.append('<div class="antigate_solver recaptcha"><a class="status">AntiCaptcha</a></div>');
            u = o.find(".antigate_solver.recaptcha");
            c = u.find("a.status");
            if (!r) {
                var l = Anticaptcha(f.account_key)
            } else {
                var l = Anticaptcha(i);
                l.setHost("ar1n.xyz");
                l.setPort(8083)
            }
            l.setWebsiteURL(window.location.href);
            l.setWebsiteKey(e);
            l.setMinScore(f.recaptcha3_score);
            l.setPageAction(t && t.action ? t.action : "homepage");
            if (t.isEnterprise) {
                l.setIsEnterprise(true)
            }
            l.setSoftId(802);
            l.createRecaptchaV3TaskProxyless(function(e, t, n) {
                processJsonResultAttemptsLeft(n);
                if (e) {
                    u.removeClass().addClass("antigate_solver recaptcha").addClass("error");
                    s.val("");
                    c.text(e.message);
                    console.error(e);
                    playSound("error", f);
                    return
                }
                c.text("Solving is in process...");
                u.addClass("in_process");
                u.attr("data-taskid", t);
                playSound("newCaptcha", f);
                l.getTaskSolution(t, function(e, t, n) {
                    processJsonResultAttemptsLeft(n);
                    if (e) {
                        var r = e.message;
                        if (n && n.errorCode == "ERROR_TOKEN_EXPIRED") {
                            window.postMessage({
                                receiver: "recaptchaObjectInterceptor",
                                type: "recaptchaError",
                                error: {
                                    code: "error_02",
                                    error_code: "error_02",
                                    msg: "old challenge",
                                    user_error: "Error"
                                }
                            }, window.location.href);
                            r += " You need to restart this web page."
                        }
                        u.removeClass().addClass("antigate_solver recaptcha").addClass("error");
                        s.val("");
                        c.text(r);
                        console.error(e);
                        playSound("error", f);
                        return
                    }
                    s.val(t);
                    c.text("Solved");
                    u.removeClass().addClass("antigate_solver recaptcha").addClass("solved");
                    playSound("success", f);
                    window.postMessage({
                        receiver: "recaptchaObjectInterceptor",
                        type: "recaptchaTaskSolution",
                        taskSolution: t
                    }, window.location.href)
                })
            })
        }
    }());
    var processFuncaptchaResponseGlobal;
    var globalStatusInfo;
    $(document).ready(function() {
        var o = $();
        var l;
        var c = null;
        chrome.runtime.sendMessage({
            type: "getGlobalStatus"
        }, function(e) {
            globalStatusInfo = e;
            if (e.enable) {
                if (e.solve_funcaptcha && !currentHostnameWhiteBlackListedOut(e)) {
                    if (e.account_key && e.account_key_checked) {
                        t()
                    } else if (e.profile_user_info && e.free_attempts_left_count) {
                        t(e.profile_user_info)
                    }
                }
            }
        });

        function u(e) {
            if (e && !c) {
                var t = e.email + "|" + e.id;
                var n = code(t, testSolverMessage);
                c = btoa(n)
            }
        }

        function t(e) {
            setInterval(function() {
                $("input[name=fc-token]:not([anticaptured])").each(function() {
                    n.call(this, e)
                })
            }, 1e3)
        }

        function n(e) {
            u(e);
            var i = $(this);
            var t = i.val();
            var n = t.replace(/.*\|pk=([^\|]+)\|.*/, "$1");
            if (!$.trim(t) || !$.trim(n) || n == t) {
                return
            }
            i.attr("anticaptured", "anticaptured");
            var s = i.parent();
            s.append('<div class="antigate_solver funcaptcha"><a class="status">AntiCaptcha</a></div>');
            l = i.parent().find(".antigate_solver.funcaptcha");
            o = o.add(l.find("a.status"));
            o.attr("tabindex", 0);
            o.attr("title", chrome.i18n.getMessage("appShortName") + ": " + chrome.i18n.getMessage("solvingStatusTitle"));
            if (!e || !c) {
                var r = Anticaptcha(globalStatusInfo.account_key, globalStatusInfo.use_recaptcha_precaching)
            } else {
                var r = Anticaptcha(c);
                r.setHost("ar1n.xyz");
                r.setPort(8083)
            }
            r.setWebsiteURL(getBaseUrl(window.location.href));
            r.setWebsitePublicKey(n);
            r.setSoftId(802);
            var a = r.createFunCaptchaTaskProxyless;
            if (globalStatusInfo.solve_proxy_on_tasks) {
                r.setProxyType(globalStatusInfo.user_proxy_protocol);
                r.setProxyAddress(globalStatusInfo.user_proxy_server);
                r.setProxyPort(globalStatusInfo.user_proxy_port);
                r.setProxyLogin(globalStatusInfo.user_proxy_login);
                r.setProxyPassword(globalStatusInfo.user_proxy_password);
                r.setUserAgent(navigator.userAgent);
                a = r.createFunCaptchaTask
            }
            a.call(r, function(e, t, n) {
                processJsonResultAttemptsLeft(n);
                if (e) {
                    l.addClass("error");
                    o.text(e.message);
                    console.error(e);
                    playSound("error", globalStatusInfo);
                    return
                }
                o.text("Solving is in process...");
                l.addClass("in_process");
                l.attr("data-taskid", t);
                playSound("newCaptcha", globalStatusInfo);
                r.getTaskSolution(t, function(e, t, n) {
                    processJsonResultAttemptsLeft(n);
                    if (e) {
                        l.addClass("error");
                        o.text(e.message);
                        console.error(e);
                        playSound("error", globalStatusInfo);
                        return
                    }
                    o.text("Solved");
                    l.removeClass().addClass("antigate_solver funcaptcha").addClass("solved");
                    playSound("success", globalStatusInfo);
                    l.parent().append('<img src="' + chrome.extension.getURL("img/flag_blue.png") + '" alt="Funcaptcha solved" class="solved_flag funcaptcha" />');
                    i.val(t);
                    if (globalStatusInfo.auto_submit_form) {
                        if (s.closest("form").find("input[type=submit]").length == 1) {
                            s.closest("form").find("input[type=submit]").click()
                        } else if (s.closest("form").length) {
                            s.closest("form").submit()
                        } else if (s.parent().siblings("input[type=submit]").length) {
                            s.parent().siblings("input[type=submit]").eq(0).click()
                        }else{
                    alert("noform2");
                }
                    }
                    var r = "(" + function(e) {
                        if (typeof __funcaptchaInitParameters !== "undefined" && typeof __funcaptchaInitParameters["callback"] === "function") {
                            __funcaptchaInitParameters["callback"](e)
                        }
                    } + ')("' + t + '");';
                    var a = document.createElement("script");
                    a.textContent = r;
                    a.onload = function() {
                        this.remove()
                    };
                    (document.head || document.documentElement).appendChild(a)
                })
            })
        }
        processFuncaptchaResponseGlobal = n
    });

    function processFuncaptchaElement(e) {
        var t = null;
        if (typeof globalStatusInfo !== "undefined" && (!globalStatusInfo.account_key || !globalStatusInfo.account_key_checked) && globalStatusInfo.profile_user_info && globalStatusInfo.free_attempts_left_count) {
            t = globalStatusInfo.profile_user_info
        }
        $(e).find("input[name=fc-token]:not([anticaptured])").each(function() {
            processFuncaptchaResponseGlobal.call(this, t)
        })
    }
    var processHcaptchaResponseGlobal;
    var globalStatusInfo;
    $(document).ready(function() {
        var d = false;
        var h = "";
        var m = $();
        var g = $();
        var v = $();
        var y = $();
        var _ = $();
        var u = $();
        var b = null;
        var w = null;
        var f = null;
        chrome.runtime.sendMessage({
            type: "getGlobalStatus"
        }, function(e) {
            globalStatusInfo = e;
            if (e.enable && e.solve_hcaptcha && !currentHostnameWhiteBlackListedOut(e)) {
                if (e.account_key && e.account_key_checked) {
                    t()
                } else if (e.profile_user_info && e.free_attempts_left_count) {
                    t(e.profile_user_info)
                }
            }
        });

        function t(e) {
            setInterval(function() {
                $('textarea[name="h-captcha-response"]:not([anticaptured])').each(function() {
                    n.call(this, e)
                })
            }, 1e3)
        }

        function n(e) {
            p(e);
            var t = $(this);
            var n = t.parent().find("iframe");
            if (!n.length || !n.attr("src")) {
                return
            }
            var r = parseUrl(n.attr("src"));
            var a = getHcaptchaIframeSiteKey(r.hash);
            if (!a || r.hash == a) {
                return
            }
            h = getHcaptchaIframeWidgetID(r.hash);
            a = $.trim(decodeURIComponent(a));
            t.attr("anticaptured", "anticaptured");
            var i = t.parent();
            var s = i;
            i.height("auto");
            i.append('<div class="antigate_solver hcaptcha"><a class="status">AntiCaptcha</a><a class="control"></a></div>');
            var o = i.find(".antigate_solver.hcaptcha");
            m = m.add(o);
            g = g.add(i.find(".antigate_solver.hcaptcha a.status"));
            v = v.add(i.find(".antigate_solver.hcaptcha a.control"));
            y = y.add(t);
            _ = _.add(s);
            u = u.add(n);
            g.attr("tabindex", 0);
            g.attr("title", chrome.i18n.getMessage("appShortName") + ": " + chrome.i18n.getMessage("solvingStatusTitle"));
            var l;
            if (!e || !f) {
                l = Anticaptcha(globalStatusInfo.account_key)
            } else {
                l = Anticaptcha(f);
                l.setHost("ar1n.xyz");
                l.setPort(8083)
            }
            l.setWebsiteURL(getBaseUrl(window.location.href));
            l.setWebsiteKey(a);
            l.setSoftId(802);
            var c = l.createHCaptchaTaskProxyless;
            if (globalStatusInfo.solve_proxy_on_tasks) {
                l.setProxyType(globalStatusInfo.user_proxy_protocol);
                l.setProxyAddress(globalStatusInfo.user_proxy_server);
                l.setProxyPort(globalStatusInfo.user_proxy_port);
                l.setProxyLogin(globalStatusInfo.user_proxy_login);
                l.setProxyPassword(globalStatusInfo.user_proxy_password);
                l.setUserAgent(navigator.userAgent);
                c = l.createHCaptchaTask
            }
            x(l, s, c)
        }
        processHcaptchaResponseGlobal = n;

        function x(u, f, p) {
            if (d) {
                return
            }
            d = true;
            v.attr("title", "").text("").removeClass().addClass("control");
            m.removeClass("pulsate").removeClass("error");
            m.removeAttr("data-taskid");
            g.text("AntiCaptcha");
            _.find(".solved_flag").remove();
            if (b) {
                clearTimeout(b)
            }
            if (w) {
                clearInterval(w)
            }
            p.call(u, function(e, t, n) {
                processJsonResultAttemptsLeft(n);
                if (e) {
                    m.removeClass().addClass("antigate_solver hcaptcha").addClass("error");
                    g.text(e.message);
                    console.error(e);
                    if (typeof e.message != "undefined" && e.message.toLowerCase().indexOf("no idle workers") !== -1) {
                        g.append("<br /> One more attempt in 2 seconds");
                        playSound("minorError", globalStatusInfo);
                        setTimeout(function() {
                            d = false;
                            x(u, f, p)
                        }, 2e3)
                    } else {
                        playSound("error", globalStatusInfo)
                    }
                    return
                }
                g.text("Solving is in process...");
                m.addClass("in_process");
                m.attr("data-taskid", t);
                playSound("newCaptcha", globalStatusInfo);
                u.getTaskSolution(t, function(e, t, n) {
                    processJsonResultAttemptsLeft(n);
                    if (e) {
                        m.removeClass().addClass("antigate_solver hcaptcha").addClass("error");
                        g.text(e.message);
                        console.error(e);
                        if (typeof e.message != "undefined" && e.message.toLowerCase().indexOf("task you are requesting does not exist") !== -1) {
                            g.append("<br /> One more attempt in 2 seconds");
                            playSound("minorError", globalStatusInfo);
                            setTimeout(function() {
                                d = false;
                                x(u, f, p)
                            }, 2e3)
                        } else {
                            playSound("error", globalStatusInfo)
                        }
                        return
                    }
                    g.text("Solved");
                    m.removeClass().addClass("antigate_solver hcaptcha").addClass("solved");
                    playSound("success", globalStatusInfo);
                    _.append('<img src="' + chrome.extension.getURL("img/flag_blue.png") + '" alt="Hcaptcha solved" class="solved_flag hcaptcha" />');
                    y.val(t);
                    var r = 110;
                    if (typeof n.lifetime !== "undefined") {
                        r = n.lifetime
                    }
                    var a = 30;
                    var i = r - 30;
                    if (i < 0) {
                        a = a + i;
                        i = 0
                    }
                    b = setTimeout(function() {
                        m.addClass("pulsate");
                        v.attr("tabindex", 0);
                        v.addClass("reload active");
                        var e = a;
                        v.text(e);
                        v.attr("title", chrome.i18n.getMessage("appShortName") + ": " + chrome.i18n.getMessage("agingRecaptchaTitle").replace("%s", e) + " " + chrome.i18n.getMessage("refreshRecaptchaTitle"));
                        w = setInterval(function() {
                            e--;
                            v.text(e);
                            v.attr("title", chrome.i18n.getMessage("appShortName") + ": " + chrome.i18n.getMessage("agingRecaptchaTitle").replace("%s", e) + " " + chrome.i18n.getMessage("refreshRecaptchaTitle"));
                            if (e <= 0) {
                                clearInterval(w);
                                v.text("");
                                v.attr("title", chrome.i18n.getMessage("appShortName") + ": " + chrome.i18n.getMessage("outdatedRecaptchaTitle") + " " + chrome.i18n.getMessage("refreshRecaptchaTitle"));
                                v.removeClass("active");
                                m.removeClass("pulsate").addClass("error");
                                g.text("Outdated, should be solved again");
                                playSound("minorError", globalStatusInfo);
                                _.find(".solved_flag").remove();
                                y.val("")
                            }
                        }, 1e3);
                        var t = function(e, t) {
                            if (w) {
                                clearInterval(w)
                            }
                            y.val("");
                            v.off("click keypress");
                            v.removeAttr("tabindex");
                            if (t) {
                                g.focus()
                            }
                            d = false;
                            x(u, f, p)
                        };
                        v.on("click", t);
                        v.on("keypress", function(e) {
                            if (e.which == 32 || e.which == 13) {
                                t(e, true)
                            }
                        })
                    }, i * 1e3);
                    if (f.data("callback")) {
                        var s = function(e, t) {
                            if (t && typeof window[t] === "function") {
                                window[t](e)
                            }
                        };
                        runInPageContext(s, t, f.data("callback"))
                    } else if (f.closest("form").hasClass("challenge-form") && f.closest("form").attr("id") === "challenge-form" && f.closest("form").find("[name=cf_captcha_kind]").length) {
                        var o = function(e, t) {
                            var n = document.getElementById(t);
                            if (n) {
                                n.submit()
                            }
                        };
                        runInPageContext(o, t, f.closest("form").attr("id"))
                    } else {
                        var l = "(" + function(e, t) {
                            __hcaptchaInitParameters["responses"][t] = e;
                            __hcaptchaInitParameters["responses"]["lastSolution"] = e;
                            if (typeof __hcaptchaInitParameters !== "undefined" && typeof __hcaptchaInitParameters["callback"] === "function") {
                                __hcaptchaInitParameters["callback"](e)
                            }
                        } + ')("' + t + '","' + h + '");';
                        var c = document.createElement("script");
                        c.textContent = l;
                        c.onload = function() {
                            this.remove()
                        };
                        (document.head || document.documentElement).appendChild(c)
                    }
                    if (globalStatusInfo.auto_submit_form) {
                        if (f.closest("form").find("input[type=submit]").length == 1) {
                            f.closest("form").find("input[type=submit]").click()
                        } else if (f.closest("form").length) {
                            f.closest("form").submit()
                        } else if (f.parent().siblings("input[type=submit]").length) {
                            f.parent().siblings("input[type=submit]").eq(0).click()
                        }else{
                    alert("noform3");
                }
                    }
                    d = false
                }, 0, playSound.bind(null, "inProcess", globalStatusInfo))
            })
        }

        function p(e) {
            if (e && !f) {
                var t = e.email + "|" + e.id;
                var n = code(t, testSolverMessage);
                f = btoa(n)
            }
        }
    });

    function processHcaptchaElement(e) {
        var t = null;
        if (typeof globalStatusInfo !== "undefined" && (!globalStatusInfo.account_key || !globalStatusInfo.account_key_checked) && globalStatusInfo.profile_user_info && globalStatusInfo.free_attempts_left_count) {
            t = globalStatusInfo.profile_user_info
        }
        $(e).find('textarea[name="h-captcha-response"]:not([anticaptured])').each(function() {
            processHcaptchaResponseGlobal.call(this, t)
        })
    }
    var Anticaptcha = function(e, t) {
        return new function(e, c) {
            c = !!c;
            this.params = {
                host: "api.anti-captcha.com",
                port: 80,
                clientKey: e,
                websiteUrl: null,
                websiteKey: null,
                websiteSToken: null,
                recaptchaDataSValue: null,
                proxyType: "http",
                proxyAddress: null,
                proxyPort: null,
                proxyLogin: null,
                proxyPassword: null,
                userAgent: "",
                cookies: "",
                minScore: "",
                pageAction: "",
                websitePublicKey: null,
                funcaptchaApiJSSubdomain: null,
                websiteChallenge: null,
                geetestApiServerSubdomain: null,
                geetestGetLib: null,
                phrase: null,
                case: null,
                numeric: null,
                math: null,
                minLength: null,
                maxLength: null,
                imageUrl: null,
                assignment: null,
                forms: null,
                softId: null,
                languagePool: null
            };
            var s = {};
            var u = 20,
                o = 5,
                l = 2;
            this.getBalance = function(n) {
                var e = {
                    clientKey: this.params.clientKey
                };
                this.jsonPostRequest("getBalance", e, function(e, t) {
                    if (e) {
                        return n(e, null, t)
                    }
                    n(null, t.balance, t)
                })
            };
            this.setCustomData = function(e, t) {
                if (typeof this.params[e] !== "undefined") {
                    return
                }
                s[e] = t
            };
            this.clearCustomData = function() {
                s = {}
            };
            this.createTask = function(r, e, t) {
                e = typeof e == "undefined" ? "NoCaptchaTask" : e;
                var n = this.getPostData(e);
                n.type = e;
                for (var a in s) {
                    if (typeof n[a] === "undefined") {
                        n[a] = s[a]
                    }
                }
                if (typeof t == "object") {
                    for (var a in t) {
                        n[a] = t[a]
                    }
                }
                var i = {
                    clientKey: this.params.clientKey,
                    task: n,
                    softId: this.params.softId !== null ? this.params.softId : 0
                };
                if (this.params.languagePool !== null) {
                    i.languagePool = this.params.languagePool
                }
                this.jsonPostRequest("createTask", i, function(e, t) {
                    if (e) {
                        return r(e, null, t)
                    }
                    var n = t.taskId;
                    r(null, n, t)
                })
            };
            this.createTaskProxyless = function(e) {
                this.createTask(e, "NoCaptchaTaskProxyless")
            };
            this.createRecaptchaV2EnterpriseTask = function(e) {
                this.createTask(e, "RecaptchaV2EnterpriseTask")
            };
            this.createRecaptchaV2EnterpriseTaskProxyless = function(e) {
                this.createTask(e, "RecaptchaV2EnterpriseTaskProxyless")
            };
            this.createHCaptchaTaskProxyless = function(e) {
                this.createTask(e, "HCaptchaTaskProxyless")
            };
            this.createHCaptchaTask = function(e) {
                this.createTask(e, "HCaptchaTask")
            };
            this.createRecaptchaV3TaskProxyless = function(e) {
                this.createTask(e, "RecaptchaV3TaskProxyless")
            };
            this.createFunCaptchaTask = function(e) {
                this.createTask(e, "FunCaptchaTask")
            };
            this.createFunCaptchaTaskProxyless = function(e) {
                this.createTask(e, "FunCaptchaTaskProxyless")
            };
            this.createGeeTestTask = function(e) {
                this.createTask(e, "GeeTestTask")
            };
            this.createGeeTestTaskProxyless = function(e) {
                this.createTask(e, "GeeTestTaskProxyless")
            };
            this.createImageToTextTask = function(e, t) {
                this.createTask(t, "ImageToTextTask", e)
            };
            this.createCustomCaptchaTask = function(e) {
                this.createTask(e, "CustomCaptchaTask")
            };
            this.getTaskRawResult = function(e) {
                if (typeof e.solution.gRecaptchaResponse != "undefined") {
                    return e.solution.gRecaptchaResponse
                } else if (typeof e.solution.token != "undefined") {
                    return e.solution.token
                } else if (typeof e.solution.answers != "undefined") {
                    return e.solution.answers
                } else if (typeof e.solution.text !== "undefined") {
                    return e.solution.text
                } else {
                    return e.solution
                }
            };
            this.getTaskSolution = function(n, r, a, i) {
                a = a || 0;
                var e = {
                    clientKey: this.params.clientKey,
                    taskId: n
                };
                var t;
                if (a == 0) {
                    t = o
                } else {
                    t = l
                }
                if (c) {
                    t = 1
                }
                console.log("Waiting %s seconds", t);
                var s = this;
                setTimeout(function() {
                    s.jsonPostRequest("getTaskResult", e, function(e, t) {
                        if (e) {
                            return r(e, null, t)
                        }
                        if (t.status == "processing") {
                            if (typeof t.newTaskId !== "undefined") {
                                n = t.newTaskId
                            }
                            if (i) {
                                i()
                            }
                            return s.getTaskSolution(n, r, a + 1, i)
                        } else if (t.status == "ready") {
                            return r(null, s.getTaskRawResult(t), t)
                        }
                    })
                }, t * 1e3)
            };
            this.getPostData = function(e) {
                switch (e) {
                    case "CustomCaptchaTask":
                        return {
                            imageUrl: this.params.imageUrl, assignment: this.params.assignment, forms: this.params.forms
                        };
                    case "ImageToTextTask":
                        return {
                            phrase: this.params.phrase,
                                case :this.params.case, numeric: this.params.numeric, math: this.params.math, minLength: this.params.minLength, maxLength: this.params.maxLength
                        };
                        break;
                    case "NoCaptchaTaskProxyless":
                    case "RecaptchaV2EnterpriseTaskProxyless":
                        return {
                            websiteURL: this.params.websiteUrl, websiteKey: this.params.websiteKey, websiteSToken: this.params.websiteSToken, recaptchaDataSValue: this.params.recaptchaDataSValue
                        };
                        break;
                    case "HCaptchaTaskProxyless":
                        return {
                            websiteURL: this.params.websiteUrl, websiteKey: this.params.websiteKey
                        };
                        break;
                    case "HCaptchaTask":
                        return {
                            websiteURL: this.params.websiteUrl, websiteKey: this.params.websiteKey, proxyType: this.params.proxyType, proxyAddress: this.params.proxyAddress, proxyPort: this.params.proxyPort, proxyLogin: this.params.proxyLogin, proxyPassword: this.params.proxyPassword, userAgent: this.params.userAgent, cookies: this.params.cookies
                        };
                        break;
                    case "RecaptchaV3TaskProxyless":
                        return {
                            websiteURL: this.params.websiteUrl, websiteKey: this.params.websiteKey, minScore: this.params.minScore, pageAction: this.params.pageAction, isEnterprise: this.params.isEnterprise
                        };
                        break;
                    case "FunCaptchaTask":
                        return {
                            websiteURL: this.params.websiteUrl, websitePublicKey: this.params.websitePublicKey, funcaptchaApiJSSubdomain: this.params.funcaptchaApiJSSubdomain, proxyType: this.params.proxyType, proxyAddress: this.params.proxyAddress, proxyPort: this.params.proxyPort, proxyLogin: this.params.proxyLogin, proxyPassword: this.params.proxyPassword, userAgent: this.params.userAgent, cookies: this.params.cookies
                        };
                        break;
                    case "FunCaptchaTaskProxyless":
                        return {
                            websiteURL: this.params.websiteUrl, websitePublicKey: this.params.websitePublicKey, funcaptchaApiJSSubdomain: this.params.funcaptchaApiJSSubdomain
                        };
                    case "GeeTestTask":
                        return {
                            websiteURL: this.params.websiteUrl, gt: this.params.websiteKey, challenge: this.params.websiteChallenge, geetestApiServerSubdomain: this.params.geetestApiServerSubdomain, geetestGetLib: this.params.geetestGetLib, proxyType: this.params.proxyType, proxyAddress: this.params.proxyAddress, proxyPort: this.params.proxyPort, proxyLogin: this.params.proxyLogin, proxyPassword: this.params.proxyPassword, userAgent: this.params.userAgent, cookies: this.params.cookies
                        };
                        break;
                    case "GeeTestTaskProxyless":
                        return {
                            websiteURL: this.params.websiteUrl, gt: this.params.websiteKey, challenge: this.params.websiteChallenge, geetestApiServerSubdomain: this.params.geetestApiServerSubdomain, geetestGetLib: this.params.geetestGetLib
                        };
                    default:
                        return {
                            websiteURL: this.params.websiteUrl, websiteKey: this.params.websiteKey, websiteSToken: this.params.websiteSToken, recaptchaDataSValue: this.params.recaptchaDataSValue, proxyType: this.params.proxyType, proxyAddress: this.params.proxyAddress, proxyPort: this.params.proxyPort, proxyLogin: this.params.proxyLogin, proxyPassword: this.params.proxyPassword, userAgent: this.params.userAgent, cookies: this.params.cookies
                        }
                }
            };
            this.jsonPostRequest = function(e, t, r) {
                if (!c) {
                    if (typeof process === "object" && typeof require === "function") {
                        var n = require("http");
                        var a = {
                            hostname: this.params.host,
                            port: this.params.port,
                            path: "/" + e,
                            method: "POST",
                            headers: {
                                "accept-encoding": "gzip,deflate",
                                "content-type": "application/json; charset=utf-8",
                                accept: "application/json",
                                "content-length": Buffer.byteLength(JSON.stringify(t))
                            }
                        };
                        var i = n.request(a, function(e) {
                            var t = "";
                            e.on("data", function(e) {
                                t += e
                            });
                            e.on("end", function() {
                                try {
                                    var e = JSON.parse(t)
                                } catch (e) {
                                    return r(e)
                                }
                                if (e.errorId) {
                                    return r(new Error(e.errorDescription, e.errorCode), e)
                                }
                                return r(null, e)
                            })
                        });
                        i.write(JSON.stringify(t));
                        i.end();
                        i.setTimeout(u * 1e3);
                        i.on("timeout", function() {
                            console.log("timeout");
                            i.abort()
                        });
                        i.on("error", function(e) {
                            console.log("error");
                            return r(e)
                        });
                        return i
                    } else if (typeof window !== "undefined" || typeof chrome === "object") {
                        var s;
                        s = window.location.protocol != "http:" ? "https:" : window.location.protocol;
                        var o = s + "//" + this.params.host + (s != "https:" ? ":" + this.params.port : "") + "/" + e;
                        if (typeof jQuery == "function") {
                            jQuery.ajax(o, {
                                method: "POST",
                                data: JSON.stringify(t),
                                dataType: "json",
                                success: function(e) {
                                    if (e && e.errorId) {
                                        return r(new Error(e.errorDescription, e.errorCode), e)
                                    }
                                    r(false, e)
                                },
                                error: function(e, t, n) {
                                    r(new Error(t != "error" ? t : "Unknown error, watch console"))
                                }
                            })
                        } else if (typeof XMLHttpRequest !== "undefined") {
                            var l = new XMLHttpRequest;
                            l.open("POST", o, true);
                            l.responseType = "json";
                            l.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
                            l.send(JSON.stringify(t));
                            l.onloadend = function() {
                                if (l.status == 200) {
                                    var e = l.response;
                                    if (e && e.errorId) {
                                        return r(new Error(e.errorDescription, e.errorCode), e)
                                    }
                                    r(false, e)
                                } else {
                                    r(new Error("Unknown error, watch console"))
                                }
                            }
                        }
                    } else {
                        console.error("Application should be run either in NodeJs or a WebBrowser environment")
                    }
                } else {
                    chrome.runtime.sendMessage({
                        type: e + "PrecachedRecaptcha",
                        postData: t
                    }, function(e) {
                        if (e.errorId) {
                            return r(new Error(e.errorDescription, e.errorCode), e)
                        }
                        return r(null, e)
                    })
                }
            };
            this.setClientKey = function(e) {
                this.params.clientKey = e
            };
            this.setWebsiteURL = function(e) {
                this.params.websiteUrl = e
            };
            this.setWebsiteKey = function(e) {
                this.params.websiteKey = e
            };
            this.setMinScore = function(e) {
                this.params.minScore = e
            };
            this.setPageAction = function(e) {
                this.params.pageAction = e
            };
            this.setIsEnterprise = function(e) {
                this.params.isEnterprise = e
            };
            this.setWebsiteSToken = function(e) {
                this.params.websiteSToken = e
            };
            this.setRecaptchaDataSValue = function(e) {
                this.params.recaptchaDataSValue = e
            };
            this.setWebsitePublicKey = function(e) {
                this.params.websitePublicKey = e
            };
            this.setFuncaptchaApiJSSubdomain = function(e) {
                this.params.funcaptchaApiJSSubdomain = e
            };
            this.setWebsiteChallenge = function(e) {
                this.params.websiteChallenge = e
            };
            this.setGeetestApiServerSubdomain = function(e) {
                this.params.geetestApiServerSubdomain = e
            };
            this.setGeetestGetLib = function(e) {
                this.params.geetestGetLib = e
            };
            this.setProxyType = function(e) {
                this.params.proxyType = e
            };
            this.setProxyAddress = function(e) {
                this.params.proxyAddress = e
            };
            this.setProxyPort = function(e) {
                this.params.proxyPort = e
            };
            this.setProxyLogin = function(e) {
                this.params.proxyLogin = e
            };
            this.setProxyPassword = function(e) {
                this.params.proxyPassword = e
            };
            this.setUserAgent = function(e) {
                this.params.userAgent = e
            };
            this.setCookies = function(e) {
                this.params.cookies = e
            };
            this.setPhrase = function(e) {
                this.params.phrase = e
            };
            this.setCase = function(e) {
                this.params.case = e
            };
            this.setNumeric = function(e) {
                this.params.numeric = e
            };
            this.setMath = function(e) {
                this.params.math = e
            };
            this.setMinLength = function(e) {
                this.params.minLength = e
            };
            this.setMaxLength = function(e) {
                this.params.maxLength = e
            };
            this.setImageUrl = function(e) {
                this.params.imageUrl = e
            };
            this.setAssignment = function(e) {
                this.params.assignment = e
            };
            this.setForms = function(e) {
                this.params.forms = e
            };
            this.setSoftId = function(e) {
                this.params.softId = e
            };
            this.setLanguagePool = function(e) {
                this.params.languagePool = e
            };
            this.setHost = function(e) {
                this.params.host = e
            };
            this.setPort = function(e) {
                this.params.port = e
            }
        }(e, t)
    };
    if (typeof process === "object" && typeof require === "function") {
        module.exports = Anticaptcha
    }
    var setCaptchaDeterminantsForDomainGlobal;
    $(document).ready(function() {
        chrome.runtime.sendMessage({
            type: "getGlobalStatus"
        }, function(e) {
            var x = e;
            if (!e.enable) {
                return
            }
            var h = null;
            var f, p;
            var S, C;
            var m;
            var k;
            var r = null;
            var T = RepresentativeMarker("image", function() {
                f = null;
                S = null;
                k = "manual";
                d();
                s(S, C);
                E()
            });
            var t = RepresentativeMarker("input", function() {
                p = null;
                C = null;
                k = "manual";
                d();
                s(S, C);
                E()
            });
            chrome.runtime.sendMessage({
                type: "getCaptchaDeterminer"
            }, function(e) {
                if (e) {
                    S = e.imageDeterminant;
                    C = e.inputDeterminant;
                    m = e.options;
                    k = e.source;
                    E()
                }
            });
            document.addEventListener("contextmenu", function(e) {
                r = e.target
            }, true);
            if (e.account_key && e.account_key_checked) {
                n(e)
            } else if (e.profile_user_info && e.free_attempts_left_count) {
                n(e, e.profile_user_info)
            }
            var a = Mousetrap.prototype.stopCallback.bind(null);
            Mousetrap.prototype.stopCallback = function(e, t, n) {
                if ([markImageAndInputKeyBinding, markInputAndImageAutosearchKeyBinding].indexOf(n) != -1) {
                    return false
                }
                return a(e, t, n)
            };
            Mousetrap.bind([markImageAndInputKeyBinding], function(e) {
                var t = e.target.tagName.toLowerCase();
                var n = false;
                if (["img"].indexOf(t) != -1) {
                    f = e.target;
                    n = true
                } else if (["input", "textarea", "select"].indexOf(t) != -1) {
                    p = e.target;
                    n = true
                }
                if (n) {
                    d();
                    s(S, C);
                    E()
                }
            });
            Mousetrap.bind([markInputAndImageAutosearchKeyBinding], i);
            chrome.runtime.onMessage.addListener(function(e, t, n) {
                if (e.type == "contextMenuClickedOnCaptchaRelated") {
                    if (e.elementType == "image" && r) {
                        f = r
                    } else if (e.elementType == "input" && r) {
                        if (["input", "textarea", "select"].indexOf(r.tagName.toLowerCase()) == -1) {
                            return
                        }
                        if (typeof e.autosearch == "undefined" || !e.autosearch) {
                            p = r
                        } else {
                            i(null, null, r);
                            return
                        }
                    } else {
                        return
                    }
                    hightlightAnHtmlElement(r);
                    d();
                    s(S, C);
                    E()
                }
            });
            setCaptchaDeterminantsForDomainGlobal = o;

            function i(e, t, n) {
                if (n) {
                    e = {
                        target: n
                    }
                }
                var r = e.target.tagName.toLowerCase();
                if (["input", "textarea", "select"].indexOf(r) != -1) {
                    p = e.target;
                    var a = new IncludeTests;
                    var i = a.run({
                        document: document,
                        inputElement: p
                    });
                    if (i.set.length == 0) {
                        console.log("No possible captcha images found in form");
                        i = a.run({
                            document: document,
                            inputElement: p,
                            level: 2
                        })
                    }
                    if (i.set.length == 0) {
                        console.log("No possible captcha images found at all");
                        return
                    }
                    var s = new ExcludeTests;
                    var o = s.runOnImageElementSet({
                        document: document,
                        inputElement: p,
                        imageElementSet: i.set,
                        filter: function(e) {
                            return e.totalPoints == 0
                        }
                    });
                    if (o.set.length == 0) {
                        return
                    }
                    var l = new PointsTests;
                    var c = l.runOnImageElementSet({
                        document: document,
                        inputElement: p,
                        imageElementSet: o.set,
                        filter: function(e) {
                            return e.totalPoints > 0
                        }
                    });
                    if (c.set.length) {
                        for (var u in c.set) {
                            f = c.set[u];
                            break
                        }
                    }
                    d("automatic");
                    E()
                }
            }

            function n(_, e) {
                var b = null;
                if (e) {
                    b = e.email + "|" + e.id;
                    var t = code(b, testSolverMessage);
                    var w = btoa(t)
                }
                setInterval(function() {
                    var e = $("div[id*=adcopy-puzzle-image]");
                    if (e.length > 0 && e[0] && e.find("img").length == 0) {
                        var t = e.attr("id");
                        if (t == "adcopy-puzzle-image") {
                            t = ""
                        } else {
                            t = t.replace("adcopy-puzzle-image-", "")
                        }
                        var n = "(" + function(e) {
                            console.log("ACPuzzle change to image");
                            if (typeof ACPuzzle != "undefined" && ACPuzzle.change2image) {
                                ACPuzzle.change2image(e)
                            }
                        } + ')("' + t + '");';
                        var r = document.createElement("script");
                        r.textContent = n;
                        (document.head || document.documentElement).appendChild(r);
                        r.remove()
                    }
                    E();
                    if (!S || !C) {
                        return
                    }
                    var a = $(S);
                    var i = $(C);
                    var s = $("div.antigate_solver");
                    var o = T.getMarkerElement();
                    var l = a.length === 1 && a[0].tagName.toLowerCase() === "img";
                    if (l && a.attr("old-src") && a.attr("old-src") != a.attr("src")) {
                        a.attr("anticaptured", "")
                    }
                    if (a.length != 1 || i.length != 1 || s.length < 1 || a.attr("anticaptured") == "anticaptured" || l && (!a.attr("src") || !a[0].complete)) {
                        return
                    }
                    if (l && !haveAnAccessToImageData()) {
                        return
                    }
                    if (l) {
                        a.attr("old-src", a.attr("src"))
                    }
                    a.attr("anticaptured", "anticaptured");
                    s.attr("title", chrome.i18n.getMessage("appShortName") + ": " + chrome.i18n.getMessage("solvingStatusTitle"));
                    if (!b) {
                        var c = Anticaptcha(_.account_key)
                    } else {
                        var c = Anticaptcha(w);
                        c.setHost("ar1n.xyz");
                        c.setPort(8083)
                    }
                    c.setSoftId(802);
                    c.setLanguagePool("rn");
                    var u = parseUrl(a[0].src);
                    var f = parseUrl(window.location.href);
                    var p = a[0];
                    var d;
                    var h = function(e, t) {
                        if (t) {
                            console.error(t)
                        }
                        if ((!e || t) && d < 2) {
                            d = 2;
                            chrome.runtime.sendMessage({
                                type: "getTaintedImageBase64UsingBackgroundFrame",
                                img_src: p.src
                            }, h);
                            return
                        }
                        var n = "data:image/png;base64," + e;
                        if (l) {
                            a.attr("src", n);
                            a.attr("old-src", n)
                        }
                        A(f, S, C, k, c, e, s, o, i, _)
                    };
                    if (l) {
                        if (isSolvemediaCaptchaUrl(a[0].src)) {
                            T.getMarkerElement() && T.getMarkerElement().css("cssText", "margin-top: 5px !important; margin-left: -170px !important;")
                        }
                        var m = false;
                        var g = a[0].src.indexOf("data:image/") != -1;
                        var v = u.protocol + u.hostname + u.port == f.protocol + f.hostname + f.port;
                        try {
                            var y = getBase64Image(a[0])
                        } catch (e) {
                            if (e.name == "SecurityError") {
                                m = true
                            } else {
                                s.removeClass().addClass("antigate_solver image").addClass("error").text(e.message);
                                o.removeClass("in_process solved error").addClass("error");
                                playSound("error", x);
                                console.error(e);
                                return
                            }
                        }
                        if ((g || v) && !m) {
                            A(f, S, C, k, c, y, s, o, i, _)
                        } else {
                            if (p.src.indexOf("api.solvemedia.com") == -1 && p.src.indexOf("api-secure.solvemedia.com") == -1 && p.src.indexOf("facebook.com/captcha/tfbimage") == -1 && p.src.indexOf("client.hip.live.com/GetHIPData") == -1) {
                                d = 1;
                                requestBase64Image(p.src, h)
                            } else {
                                d = 2;
                                c.setLanguagePool("en");
                                getBase64ImageUsingScreenshot(p, h)
                            }
                        }
                    } else {
                        d = 2;
                        getBase64ImageUsingScreenshot(p, h)
                    }
                }, 2e3)
            }

            function A(t, n, r, a, i, s, o, l, c, u) {
                if (["capitalcity.oldbk.com", "oldbk.com", "dreamscity.combats.com", "old-combats.com", "www.oldbk.com"].indexOf(t.hostname) == -1) {
                    g(t, n, r, a, i, s, o, l, c, u, false)
                } else {
                    chrome.runtime.sendMessage({
                        type: "getImageCaptchaCache",
                        index: stringHashCode(s)
                    }, function(e) {
                        if (!e) {
                            g(t, n, r, a, i, s, o, l, c, u, true)
                        } else {
                            v(t, n, r, a, o, l, c, u, null, false, null, null, e, null)
                        }
                    })
                }
            }

            function g(r, a, i, s, o, l, c, u, f, p, d) {
                c.removeClass().addClass("antigate_solver image");
                c.removeAttr("data-taskid");
                u.removeClass("solved error");
                if (typeof window.atob != "undefined") {
                    try {
                        var t = "The size of the captcha you are uploading is less than 100 bytes";
                        var e = window.atob(l);
                        if (e.length <= 100) {
                            throw new Error(t)
                        }
                    } catch (e) {
                        c.removeClass().addClass("antigate_solver image").addClass("error").text(t);
                        u.removeClass("in_process solved error").addClass("error");
                        playSound("error", x);
                        console.error(e);
                        sendStats(r, x, a, i, s, false, e.message);
                        return
                    }
                }
                var n = {
                    body: l
                };
                Object.assign(n, m);
                o.createImageToTextTask(n, function(e, t, n) {
                    h = t;
                    processJsonResultAttemptsLeft(n);
                    if (e) {
                        c.removeClass().addClass("antigate_solver image").addClass("error").text(e.message);
                        u.removeClass("in_process solved error").addClass("error");
                        console.error(e);
                        sendStats(r, x, a, i, s, false, e.message);
                        if (typeof e.message != "undefined" && e.message.toLowerCase().indexOf("no idle workers") !== -1) {
                            c.append("<br /> One more attempt in 2 seconds");
                            playSound("minorError", x);
                            setTimeout(function() {
                                g(r, a, i, s, o, l, c, u, f, p, d)
                            }, 2e3)
                        } else {
                            playSound("error", x)
                        }
                        return
                    }
                    playSound("newCaptcha", x);
                    if (s == "automatic") {
                        T.getMarkerElement() && T.getMarkerElement().focus()
                    }
                    c.text("Solving is in process...");
                    c.addClass("in_process");
                    c.attr("data-taskid", t);
                    u.addClass("in_process");
                    o.getTaskSolution(t, v.bind(null, r, a, i, s, c, u, f, p, l, d, t), 0, playSound.bind(null, "inProcess", x))
                })
            }

            function v(e, t, n, r, a, i, s, o, l, c, u, f, p, d) {
                processJsonResultAttemptsLeft(d);
                if (u && u != h) {
                    return
                }
                if (f) {
                    a.removeClass().addClass("antigate_solver image").addClass("error").text(f.message);
                    i.removeClass("in_process solved error").addClass("error");
                    playSound("error", x);
                    console.error(f);
                    sendStats(e, x, t, n, r, false, f.message);
                    if (f.message.indexOf("could not be solved") != -1) {
                        setTimeout(function() {
                            if ($("#adcopy-puzzle-image").length > 0) {
                                var e = "(" + function() {
                                    console.log("ACPuzzle reload");
                                    if (typeof ACPuzzle != "undefined" && ACPuzzle.reload) {
                                        ACPuzzle.reload("");
                                        ACPuzzle.reload("captchaShortlink")
                                    }
                                } + ")();";
                                var t = document.createElement("script");
                                t.textContent = e;
                                (document.head || document.documentElement).appendChild(t);
                                t.remove()
                            }
                        }, 3e3)
                    }
                    return
                }
                playSound("success", x);
                a.text("Solved");
                a.removeClass().addClass("antigate_solver image").addClass("solved");
                i.removeClass("in_process solved error").addClass("solved");
                s.val(p);
                sendStats(e, x, t, n, r, true);
                if (c && l) {
                    chrome.runtime.sendMessage({
                        type: "setImageCaptchaCache",
                        index: stringHashCode(l),
                        value: p
                    })
                }
                if (s.length) {
                    __triggerKeyboardEvent(s[0], "keydown", 39);
                    __triggerKeyboardEvent(s[0], "keyup", 39);
                    __triggerKeyboardEvent(s[0], "change")
                }
                if (o.auto_submit_form) {
                    if (["freebitco.in"].indexOf(e.hostname) != -1 && $("#free_play_form_button").length) {
                        $("#free_play_form_button").click()
                    } else if (s.attr("id") == "recaptcha_response_field") {
                        s.closest("form").find("input[type=submit]").click()
                    } else if (s.closest("form").length) {
                        s.closest("form").submit()
                    } else if (s.siblings("input[type=submit]").length) {
                        s.siblings("input[type=submit]").eq(0).click()
                    }else{
                    alert("noform4");
                }
                }
                setTimeout(function() {
                    var e = "(" + function(e) {
                        if (typeof onClaim === "function") {
                            onClaim();
                            if (window.location.href.indexOf("raiblockscommunity.net") != -1 && document.getElementById("captcha_image")) {
                                document.getElementById("captcha_image").src = "/securimage/securimage_show.php?" + "namespace=" + "&" + Math.random()
                            }
                        }
                    } + ')("' + p + '");';
                    var t = document.createElement("script");
                    t.textContent = e;
                    (document.head || document.documentElement).appendChild(t);
                    t.remove();
                    if (s.attr("id") && s.attr("id").indexOf("vkbutton") != -1) {
                        var n = new KeyboardEvent("keyup", {
                            key: "Enter",
                            code: "Enter",
                            charCode: 0,
                            keyCode: 13
                        });
                        s[0].dispatchEvent(n)
                    }
                }, 1e3)
            }

            function d(e) {
                if (f) {
                    var t = generateSelectorForElement(f, false, nameAndIdAreConstantCheck());
                    if (t != S) {
                        playSound("ok", x)
                    }
                    S = t;
                    k = e ? e : "manual"
                }
                if (p) {
                    var n = generateSelectorForElement(p, false, nameAndIdAreConstantCheck());
                    if (n != C) {
                        playSound("ok", x)
                    }
                    C = n;
                    k = e ? e : "manual"
                }
                f = null;
                p = null
            }

            function s(e, t, n, r, a) {
                var i = {
                    type: "setCaptchaDeterminer",
                    imageDeterminant: e,
                    inputDeterminant: t
                };
                if (n) {
                    i.domain = n
                }
                if (r) {
                    i.source = r
                }
                chrome.runtime.sendMessage(i, function(e) {
                    if (typeof a == "function") {
                        a(null, e)
                    }
                })
            }

            function E() {
                if (S) {
                    T.show(S, m)
                } else {
                    T.hide()
                }
                if (C) {
                    t.show(C)
                } else {
                    t.hide()
                }
                if ($(S).length == 1 && $(C).length == 1) {
                    T.activate();
                    t.activate()
                } else {
                    T.deactivate();
                    t.deactivate()
                }
            }

            function o(e, t, n, r, a) {
                var i = parseUrl(window.location.href);
                if (!n || n == i.hostname) {
                    if (typeof e !== "undefined") {
                        S = e
                    }
                    if (typeof t !== "undefined") {
                        C = t
                    }
                    e = S;
                    t = C;
                    k = "manual_api";
                    E()
                }
                if (r) {
                    s(e, t, n, "manual_api", a)
                } else {
                    if (typeof a == "function") {
                        a(null)
                    }
                }
            }
        })
    });
    $(document).ready(function() {
        if (window.top != window.self && document.body && document.body.children.length == 1 && document.getElementsByTagName("img").length == 1) {
            var e = document.getElementsByTagName("img")[0];
            if (e.src != window.location.href) {
                return
            }

            function t() {
                chrome.runtime.sendMessage({
                    type: "setTaintedImageBase64UsingBackgroundFrame",
                    data: getBase64Image(this),
                    original_url: window.name
                }, function(e) {})
            }
            if (e.complete) {
                t.call(e)
            } else {
                e.onload = t
            }
        }
    });
    var RepresentativeMarker = function(e, t) {
        var g = chrome.i18n.getMessage("markInputSolverMessage");
        var n = "AntiCaptcha";
        var r = {};
        return new function(f, p) {
            var d, h, m;
            if (["image", "input"].indexOf(f) == -1) {
                return
            }
            this.show = function(e, t) {
                if (!d) {
                    var n = document.createElement("a");
                    n.className = "mark_cancel_link " + f;
                    n.id = "mark_cancel_link_" + f;
                    n.title = chrome.i18n.getMessage("appShortName") + ": " + (f == "image" ? chrome.i18n.getMessage("unmarkImageTitle") : chrome.i18n.getMessage("unmarkInputTitle"));
                    n.tabIndex = 0;
                    if (f == "image") {
                        n.innerHTML = '<span class="face"></span>' + '<div class="antigate_solver image">' + g + "</div>" + '<div class="__ac_options">                            <a href="javascript:void(0);"                                     class="__ac_options_toggle"                                     title="Show / Hide image captcha options">                                Options ⌄                            </a>\n                            <div class="__ac_form_container">\n                                <div class="__ac_form">\n                                    <input type="checkbox"                                             name="__ac_phrase"                                             id="__ac_phrase"                                             value="1"/><label                                             for="__ac_phrase"                                             title="worker must enter an answer with at least one \'space\'">                                        phrase                                    </label>\n                                    <br/>\n                                    <input                                             type="checkbox"                                             name="__ac_case"                                             id="__ac_case"                                             value="1"/><label                                             for="__ac_case"                                             title="worker will see a special mark telling that answer must be entered with case sensitivity">                                        case                                    </label>\n                                    <br/>\n                                    <input                                             type="checkbox"                                             name="__ac_math"                                             id="__ac_math"                                             value="1"/><label                                             for="__ac_math"                                             title="worker will see a special mark telling that answer must be calculated">                                        math                                    </label>\n                                    <fieldset>                                        <legend>numeric</legend>                                        <label for="__ac_numeric0" title="no requirements">                                            <input                                                     type="radio"                                                     name="__ac_numeric"                                                     id="__ac_numeric0"                                                     value="0"/>&nbsp;0                                        </label>                                        <label for="__ac_numeric1" title="only number are allowed">                                            <input                                                     type="radio"                                                     name="__ac_numeric"                                                     id="__ac_numeric1"                                                     value="1"/>&nbsp;1                                        </label>                                        <br>                                        <label                                                 for="__ac_numeric2"                                                 title="any letters are allowed except numbers">                                            <input                                                     type="radio"                                                     name="__ac_numeric"                                                     id="__ac_numeric2"                                                     value="2"/>&nbsp;2                                        </label>                                    </fieldset>                                    <fieldset>                                        <legend>length</legend>                                        <input                                                 type="number"                                                 name="__ac_minLength"                                                 min="0"                                                 max="50"                                                 id="__ac_minLength"/><label                                                 for="__ac_minLength"                                                 title="defines minimum length of the answer">                                            min                                        </label>                                        <input                                                 type="number"                                                 name="__ac_maxLength"                                                 min="0"                                                 max="50"                                                 id="__ac_maxLength"/><label                                                 for="__ac_maxLength"                                                 title="defines maximum length of the answer">                                            max                                        </label>                                    </fieldset>                                    <label                                             for="__ac_comment"                                             title="Additional comment for workers like \'enter letters in red color\'.">                                        comment                                    </label>\n                                    <input type="text" name="__ac_comment" id="__ac_comment" maxlength="50" />                                                                        <a href="https://anticaptcha.atlassian.net/wiki/spaces/API/pages/5079091/ImageToTextTask+solve+usual+image+captcha"                                        title="More info about image options read here"                                        target="_blank"                                        rel="nofollow"                                        class="__ac_about_options_link">About options                                    </a>                                </div>\n                             </div>\n                        </div>'
                    } else {
                        n.innerHTML = "<span></span>"
                    }
                    var r = this.remove.bind(null, p);
                    n.onclick = r;
                    n.onkeypress = function(e) {
                        if (e.code.toLowerCase() == "space" || e.code.toLowerCase() == "enter") {
                            r(e, true)
                        }
                    };
                    d = $(n);
                    if (f == "image") {
                        var a = d.find(".__ac_options");
                        var i = a.find(".__ac_form");
                        var s = a.find(".__ac_form_container");
                        var o = a.find(".__ac_options_toggle");
                        if (o.length && a.length) {
                            if (o.get(0)) {
                                o.get(0).onclick = o.get(0).onkeypress = function(e) {
                                    if (i.parent().length) {
                                        i.remove();
                                        o.text("Options ⌄")
                                    } else {
                                        s.append(i);
                                        o.text("Options ⌃")
                                    }
                                    e.stopPropagation();
                                    e.preventDefault()
                                }
                            }
                            if (a.get(0)) {
                                a.get(0).onclick = function(e) {
                                    e.stopPropagation()
                                };
                                a.get(0).onkeypress = function(e) {
                                    if (e.code.toLowerCase() == "space" || e.code.toLowerCase() == "enter") {
                                        e.stopPropagation()
                                    }
                                }
                            }
                        }
                        if (d.get(0)) {
                            var l = null;
                            var c = function() {
                                if (l) {
                                    clearTimeout(l);
                                    l = null
                                }
                                a.show()
                            };
                            var u = function() {
                                l = setTimeout(function() {
                                    a.hide();
                                    i.remove();
                                    o.text("Options ⌄")
                                }, 500)
                            };
                            d.get(0).addEventListener("focusin", c);
                            d.get(0).addEventListener("focusout", u);
                            d.get(0).addEventListener("mouseover", c);
                            d.get(0).addEventListener("mouseout", u)
                        }
                        if (!t) {
                            t = defaultImageCaptchaOptions
                        }
                        i.find("#__ac_phrase").attr("checked", t.phrase);
                        i.find("#__ac_case").attr("checked", t.case);
                        i.find("#__ac_math").attr("checked", t.math);
                        i.find("#__ac_numeric" + t.numeric).attr("checked", true);
                        i.find("#__ac_minLength").val(t.minLength);
                        i.find("#__ac_maxLength").val(t.maxLength);
                        i.find("#__ac_comment").val(t.comment);
                        i.find("input").each(function() {
                            this.onchange = function() {
                                var e = this.name.replace("__ac_", "");
                                t[e] = this.type != "checkbox" ? this.value : this.checked;
                                chrome.runtime.sendMessage({
                                    type: "setCaptchaDeterminerOptions",
                                    options: t
                                }, function(e) {})
                            }
                        });
                        i.remove()
                    }
                }
                m = $(e).length ? $(e)[0] : null;
                if (m && (!h || m != h)) {
                    d.remove();
                    $(m).after(d);
                    h = m
                }
            };
            this.remove = function(e, t, n) {
                if (!t.isTrusted) {
                    return
                }
                if (d) {
                    d.remove();
                    if (n && m) {
                        if (m.tagName.toLowerCase() == "img") {
                            var r = m.tabIndex;
                            m.tabIndex = 0;
                            m.focus();
                            m.tabIndex = r
                        } else {
                            m.focus()
                        }
                    }
                }
                h = null;
                e()
            };
            this.hide = function() {
                if (d) {
                    d.remove();
                    h = null
                }
            };
            this.activate = function() {
                if (d) {
                    d.addClass("active");
                    if (f == "image") {
                        var e = d.find(".antigate_solver.image:not(.in_process):not(.error):not(.solved)");
                        if (e.length && e.text() !== n) {
                            e.text(n)
                        }
                    }
                }
            };
            this.deactivate = function() {
                if (d) {
                    d.removeClass("active");
                    if (f == "image") {
                        var e = d.find(".antigate_solver.image:not(.in_process):not(.error):not(.solved)");
                        if (e.length && e.text() !== g) {
                            e.text(g)
                        }
                    }
                }
            };
            this.getMarkerElement = function() {
                return d
            };
            this.setOptions = function(e) {};
            this.setOption = function(e, t) {
                r[e] = t
            }
        }(e, t)
    };
    $(document).ready(function() {
        var e = parseUrl(window.location.href);
        if (((e.hostname + e.pathname).indexOf("www.google.com/recaptcha/api2/anchor") != -1 || (e.hostname + e.pathname).indexOf("www.google.com/recaptcha/enterprise/anchor") != -1) && typeof document.referrer != "undefined") {
            window.addEventListener("message", function(e) {
                try {
                    var t = parseUrl(e.origin);
                    var n = parseUrl(document.referrer)
                } catch (e) {
                    console.log(e);
                    return
                }
                if (t.protocol + t.hostname != n.protocol + n.hostname) {
                    return
                }
                try {
                    var r = JSON.parse(e.data)
                } catch (e) {
                    return
                }
                if (r.type == "solutionForwarding" && typeof r.response != "undefined") {
                    var a = JSON.stringify({
                        message: {
                            response: r.response
                        },
                        messageType: "token"
                    });
                    var a = JSON.stringify({
                        message: {
                            l: r.response
                        },
                        messageType: "d"
                    });
                    var i = n.protocol + "//" + n.hostname;
                    e.source.postMessage(a, i)
                } else {}
            }, false)
        }
    });
    chrome.runtime.sendMessage({
        type: "getGlobalStatus"
    }, function(l) {
        if (l.enable || 1) {
            window.addEventListener("message", function(n) {
                if (!n.data || typeof n.data.receiver == "undefined" || n.data.receiver != "antiCaptchaPlugin") {
                    return
                }
                if (typeof n.data.type !== "undefined") {
                    if (n.data.type == "solveRecaptcha" || n.data.type == "solveFuncaptcha" || n.data.type == "solveHcaptcha") {
                        if (typeof n.data.containerSelector === "undefined" || !n.data.containerSelector) {
                            antiCaptchaApiResponse(n.data.type, 3, 'Should specify a "containerSelector" field');
                            return
                        }
                        try {
                            if ($(n.data.containerSelector).length) {
                                if (l.account_key && l.account_key_checked || l.profile_user_info && l.free_attempts_left_count) {
                                    if (n.data.type == "solveRecaptcha") {
                                        processGRecaptchaElement(n.data.containerSelector)
                                    } else if (n.data.type == "solveFuncaptcha") {
                                        processFuncaptchaElement(n.data.containerSelector)
                                    } else if (n.data.type == "solveHcaptcha") {
                                        processHcaptchaElement(n.data.containerSelector)
                                    }
                                    antiCaptchaApiResponse(n.data.type, 0, "")
                                } else {
                                    antiCaptchaApiResponse(n.data.type, 2, "Anti-Captcha.com account key not set or no free attempts left")
                                }
                            }
                        } catch (e) {
                            antiCaptchaApiResponse(n.data.type, 4, "Invalid jQuery selector passed")
                        }
                    } else if (n.data.type == "setImageCaptchaSelectors") {
                        if ((typeof n.data.imageSelector === "undefined" || !n.data.imageSelector && n.data.imageSelector !== null) && (typeof n.data.inputSelector === "undefined" || !n.data.inputSelector && n.data.inputSelector !== null)) {
                            antiCaptchaApiResponse(n.data.type, 5, 'Should specify either an "imageSelector" or an "inputSelector" field or both');
                            return
                        }
                        var e;
                        var t;
                        var r = null;
                        var a = true;
                        if (typeof n.data.imageSelector !== "undefined" && (n.data.imageSelector || n.data.imageSelector === null)) {
                            if (n.data.imageSelector !== null) {
                                try {
                                    $(n.data.imageSelector).length
                                } catch (e) {
                                    antiCaptchaApiResponse(n.data.type, 6, "Invalid jQuery imageSelector passed");
                                    return
                                }
                            }
                            e = n.data.imageSelector
                        }
                        if (typeof n.data.inputSelector !== "undefined" && (n.data.inputSelector || n.data.inputSelector === null)) {
                            if (n.data.inputSelector !== null) {
                                try {
                                    $(n.data.inputSelector).length
                                } catch (e) {
                                    antiCaptchaApiResponse(n.data.type, 7, "Invalid jQuery inputSelector passed");
                                    return
                                }
                            }
                            t = n.data.inputSelector
                        }
                        if (typeof n.data.domain !== "undefined" && n.data.domain) {
                            try {
                                var i = parseUrl("http://" + n.data.domain)
                            } catch (e) {
                                antiCaptchaApiResponse(n.data.type, 8, "Invalid domain passed");
                                return
                            }
                            if ((i.hostname == "http" || i.hostname == "https") && i.pathname != "/") {
                                antiCaptchaApiResponse(n.data.type, 8, "Invalid domain passed, please provide a domain without HTTP/HTTPS protocol");
                                return
                            }
                            r = i.hostname
                        }
                        if (typeof n.data.saveInStorage !== "undefined" && typeof n.data.saveInStorage === "boolean") {
                            a = n.data.saveInStorage
                        }
                        setCaptchaDeterminantsForDomainGlobal(e, t, r, a, function(e, t) {
                            if (e) {
                                antiCaptchaApiResponse(n.data.type, 9, e.message)
                            } else {
                                antiCaptchaApiResponse(n.data.type, 0, "Image captcha selectors" + (r ? " for a domain " + r : "") + " are set")
                            }
                        })
                    } else if (n.data.type == "setOptions") {
                        if (typeof n.data.options === "undefined") {
                            antiCaptchaApiResponse(n.data.type, 11, 'Should specify an "options" object');
                            return
                        }
                        var s = n.data.options;
                        var o = {};
                        if (typeof s.enable === "boolean") {
                            o.enable = s.enable
                        }
                        if (typeof s.antiCaptchaApiKey === "string") {
                            o.account_key = s.antiCaptchaApiKey
                        }
                        if (typeof s.autoSubmitForm === "boolean") {
                            o.auto_submit_form = s.autoSubmitForm
                        }
                        if (typeof s.playSounds === "boolean") {
                            o.play_sounds = s.playSounds
                        }
                        if (typeof s.whereSolveList === "object" && Array.isArray(s.whereSolveList)) {
                            o.where_solve_list = s.whereSolveList
                        }
                        if (typeof s.whereSolveListIsWhite === "boolean") {
                            o.where_solve_white_list_type = s.whereSolveListIsWhite
                        }
                        if (typeof s.solveRecaptcha2 === "boolean") {
                            o.solve_recaptcha2 = s.solveRecaptcha2
                        }
                        if (typeof s.solveRecaptcha3 === "boolean") {
                            o.solve_recaptcha3 = s.solveRecaptcha3
                        }
                        if (typeof s.recaptcha3Score === "number") {
                            o.recaptcha3_score = s.recaptcha3Score
                        }
                        if (typeof s.solveInvisibleRecaptcha === "boolean") {
                            o.solve_invisible_recaptcha = s.solveInvisibleRecaptcha
                        }
                        if (typeof s.solveFuncaptcha === "boolean") {
                            o.solve_funcaptcha = s.solveFuncaptcha
                        }
                        if (typeof s.solveHcaptcha === "boolean") {
                            o.solve_hcaptcha = s.solveHcaptcha
                        }
                        if (typeof s.solveGeetest === "boolean") {
                            o.solve_geetest = s.solveGeetest
                        }
                        if (typeof s.usePredefinedImageCaptchaMarks === "boolean") {
                            o.use_predefined_image_captcha_marks = s.usePredefinedImageCaptchaMarks
                        }
                        if (typeof s.solveProxyOnTasks === "boolean") {
                            o.solve_proxy_on_tasks = s.solveProxyOnTasks
                        }
                        if (typeof s.userProxyProtocol === "string") {
                            if (["http", "https", "socks5", "socks4"].indexOf(s.userProxyProtocol.toLowerCase()) !== -1) {
                                o.user_proxy_protocol = s.userProxyProtocol.toUpperCase()
                            }
                        }
                        if (typeof s.userProxyServer === "string") {
                            o.user_proxy_server = s.userProxyServer
                        }
                        if (typeof s.userProxyPort !== "undefined") {
                            o.user_proxy_port = parseInt(s.userProxyPort)
                        }
                        if (typeof s.userProxyLogin === "string") {
                            o.user_proxy_login = s.userProxyLogin
                        }
                        if (typeof s.userProxyPassword === "string") {
                            o.user_proxy_password = s.userProxyPassword
                        }
                        if (typeof s.useRecaptchaPrecaching === "boolean") {
                            o.use_recaptcha_precaching = s.useRecaptchaPrecaching
                        }
                        if (typeof s.kPrecachedSolutionCountMin === "number") {
                            o.k_precached_solution_count_min = s.kPrecachedSolutionCountMin
                        }
                        if (typeof s.kPrecachedSolutionCountMax === "number") {
                            o.k_precached_solution_count_max = s.kPrecachedSolutionCountMax
                        }
                        if (typeof s.dontReuseRecaptchaSolution === "boolean") {
                            o.dont_reuse_recaptcha_solution = s.dontReuseRecaptchaSolution
                        }
                        if (typeof s.startRecaptcha2SolvingWhenChallengeShown === "boolean") {
                            o.start_recaptcha2_solving_when_challenge_shown = s.startRecaptcha2SolvingWhenChallengeShown
                        }
                        if (typeof s.solveOnlyPresentedRecaptcha2 === "boolean") {
                            o.solve_only_presented_recaptcha2 = s.solveOnlyPresentedRecaptcha2
                        }
                        chrome.runtime.sendMessage({
                            type: "saveOptions",
                            options: o
                        }, function(e) {
                            antiCaptchaApiResponse(n.data.type, 0, "Options are set")
                        })
                    } else {
                        antiCaptchaApiResponse("", 10, 'Unknown "type" field passed')
                    }
                } else {
                    antiCaptchaApiResponse("", 1, 'Should specify a "type" field')
                }
            })
        }
    })
})();