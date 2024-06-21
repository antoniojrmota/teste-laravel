/*! SAC APP - v0.1.0 - 2015-10-28
 * https://bitbucket.org/ezoom/sac.git
 * Copyright (c) 2015 Ramon Barros; Licensed BSD */
! function (a, b, c) {
    "use strict";

    function d(a, b) {
        return b = b || Error,
            function () {
                var c, d, e = 2,
                    f = arguments,
                    g = f[0],
                    h = "[" + (a ? a + ":" : "") + g + "] ",
                    i = f[1];
                for (h += i.replace(/\{\d+\}/g, function (a) {
                    var b = +a.slice(1, -1),
                        c = b + e;
                    return c < f.length ? sa(f[c]) : a
                }), h += "\nhttp://errors.angularjs.org/1.4.0/" + (a ? a + "/" : "") + g, d = e, c = "?"; d < f.length; d++ , c = "&") h += c + "p" + (d - e) + "=" + encodeURIComponent(sa(f[d]));
                return new b(h)
            }
    }

    function e(a) {
        if (null == a || B(a)) return !1;
        var b = "length" in Object(a) && a.length;
        return a.nodeType === Ud && b ? !0 : w(a) || Ld(a) || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function f(a, b, c) {
        var d, g;
        if (a)
            if (z(a))
                for (d in a) "prototype" == d || "length" == d || "name" == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d, a);
            else if (Ld(a) || e(a)) {
                var h = "object" != typeof a;
                for (d = 0, g = a.length; g > d; d++)(h || d in a) && b.call(c, a[d], d, a)
            } else if (a.forEach && a.forEach !== f) a.forEach(b, c, a);
            else if (v(a))
                for (d in a) b.call(c, a[d], d, a);
            else if ("function" == typeof a.hasOwnProperty)
                for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d, a);
            else
                for (d in a) ud.call(a, d) && b.call(c, a[d], d, a);
        return a
    }

    function g(a, b, c) {
        for (var d = Object.keys(a).sort(), e = 0; e < d.length; e++) b.call(c, a[d[e]], d[e]);
        return d
    }

    function h(a) {
        return function (b, c) {
            a(c, b)
        }
    }

    function i() {
        return ++Jd
    }

    function j(a, b) {
        b ? a.$$hashKey = b : delete a.$$hashKey
    }

    function k(a, b, c) {
        for (var d = a.$$hashKey, e = 0, f = b.length; f > e; ++e) {
            var g = b[e];
            if (u(g) || z(g))
                for (var h = Object.keys(g), i = 0, l = h.length; l > i; i++) {
                    var m = h[i],
                        n = g[m];
                    c && u(n) ? (u(a[m]) || (a[m] = Ld(n) ? [] : {}), k(a[m], [n], !0)) : a[m] = n
                }
        }
        return j(a, d), a
    }

    function l(a) {
        return k(a, Cd.call(arguments, 1), !1)
    }

    function m(a) {
        return k(a, Cd.call(arguments, 1), !0)
    }

    function n(a) {
        return parseInt(a, 10)
    }

    function o(a, b) {
        return l(Object.create(a), b)
    }

    function p() { }

    function q(a) {
        return a
    }

    function r(a) {
        return function () {
            return a
        }
    }

    function s(a) {
        return "undefined" == typeof a
    }

    function t(a) {
        return "undefined" != typeof a
    }

    function u(a) {
        return null !== a && "object" == typeof a
    }

    function v(a) {
        return null !== a && "object" == typeof a && !Gd(a)
    }

    function w(a) {
        return "string" == typeof a
    }

    function x(a) {
        return "number" == typeof a
    }

    function y(a) {
        return "[object Date]" === Fd.call(a)
    }

    function z(a) {
        return "function" == typeof a
    }

    function A(a) {
        return "[object RegExp]" === Fd.call(a)
    }

    function B(a) {
        return a && a.window === a
    }

    function C(a) {
        return a && a.$evalAsync && a.$watch
    }

    function D(a) {
        return "[object File]" === Fd.call(a)
    }

    function E(a) {
        return "[object FormData]" === Fd.call(a)
    }

    function F(a) {
        return "[object Blob]" === Fd.call(a)
    }

    function G(a) {
        return "boolean" == typeof a
    }

    function H(a) {
        return a && z(a.then)
    }

    function I(a) {
        return Md.test(Fd.call(a))
    }

    function J(a) {
        return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
    }

    function K(a) {
        var b, c = {},
            d = a.split(",");
        for (b = 0; b < d.length; b++) c[d[b]] = !0;
        return c
    }

    function L(a) {
        return td(a.nodeName || a[0] && a[0].nodeName)
    }

    function M(a, b) {
        var c = a.indexOf(b);
        return c >= 0 && a.splice(c, 1), c
    }

    function N(a, b, c, d) {
        function e(a, b, c, d, e) {
            var f = N(b, null, d, e);
            u(b) && (d.push(b), e.push(f)), c[a] = f
        }
        if (B(a) || C(a)) throw Hd("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
        if (I(b)) throw Hd("cpta", "Can't copy! TypedArray destination cannot be mutated.");
        if (b) {
            if (a === b) throw Hd("cpi", "Can't copy! Source and destination are identical.");
            if (c = c || [], d = d || [], u(a)) {
                var g = c.indexOf(a);
                if (-1 !== g) return d[g];
                c.push(a), d.push(b)
            }
            var h, i;
            if (Ld(a)) {
                b.length = 0;
                for (var k = 0; k < a.length; k++) h = N(a[k], null, c, d), u(a[k]) && (c.push(a[k]), d.push(h)), b.push(h)
            } else {
                var l = b.$$hashKey;
                if (Ld(b) ? b.length = 0 : f(b, function (a, c) {
                    delete b[c]
                }), v(a))
                    for (i in a) e(i, a[i], b, c, d);
                else if (a && "function" == typeof a.hasOwnProperty)
                    for (i in a) a.hasOwnProperty(i) && e(i, a[i], b, c, d);
                else
                    for (i in a) ud.call(a, i) && e(i, a[i], b, c, d);
                j(b, l)
            }
        } else if (b = a, a)
            if (Ld(a)) b = N(a, [], c, d);
            else if (I(a)) b = new a.constructor(a);
            else if (y(a)) b = new Date(a.getTime());
            else if (A(a)) b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), b.lastIndex = a.lastIndex;
            else if (u(a)) {
                var m = Object.create(Gd(a));
                b = N(a, m, c, d)
            }
        return b
    }

    function O(a, b) {
        if (Ld(a)) {
            b = b || [];
            for (var c = 0, d = a.length; d > c; c++) b[c] = a[c]
        } else if (u(a)) {
            b = b || {};
            for (var e in a) ("$" !== e.charAt(0) || "$" !== e.charAt(1)) && (b[e] = a[e])
        }
        return b || a
    }

    function P(a, b) {
        if (a === b) return !0;
        if (null === a || null === b) return !1;
        if (a !== a && b !== b) return !0;
        var d, e, f, g = typeof a,
            h = typeof b;
        if (g == h && "object" == g) {
            if (!Ld(a)) {
                if (y(a)) return y(b) ? P(a.getTime(), b.getTime()) : !1;
                if (A(a)) return A(b) ? a.toString() == b.toString() : !1;
                if (C(a) || C(b) || B(a) || B(b) || Ld(b) || y(b) || A(b)) return !1;
                f = pa();
                for (e in a)
                    if ("$" !== e.charAt(0) && !z(a[e])) {
                        if (!P(a[e], b[e])) return !1;
                        f[e] = !0
                    }
                for (e in b)
                    if (!(e in f || "$" === e.charAt(0) || b[e] === c || z(b[e]))) return !1;
                return !0
            }
            if (!Ld(b)) return !1;
            if ((d = a.length) == b.length) {
                for (e = 0; d > e; e++)
                    if (!P(a[e], b[e])) return !1;
                return !0
            }
        }
        return !1
    }

    function Q(a, b, c) {
        return a.concat(Cd.call(b, c))
    }

    function R(a, b) {
        return Cd.call(a, b || 0)
    }

    function S(a, b) {
        var c = arguments.length > 2 ? R(arguments, 2) : [];
        return !z(b) || b instanceof RegExp ? b : c.length ? function () {
            return arguments.length ? b.apply(a, Q(c, arguments, 0)) : b.apply(a, c)
        } : function () {
            return arguments.length ? b.apply(a, arguments) : b.call(a)
        }
    }

    function T(a, d) {
        var e = d;
        return "string" == typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? e = c : B(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : C(d) && (e = "$SCOPE"), e
    }

    function U(a, b) {
        return "undefined" == typeof a ? c : (x(b) || (b = b ? 2 : null), JSON.stringify(a, T, b))
    }

    function V(a) {
        return w(a) ? JSON.parse(a) : a
    }

    function W(a, b) {
        var c = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6e4;
        return isNaN(c) ? b : c
    }

    function X(a, b) {
        return a = new Date(a.getTime()), a.setMinutes(a.getMinutes() + b), a
    }

    function Y(a, b, c) {
        c = c ? -1 : 1;
        var d = W(b, a.getTimezoneOffset());
        return X(a, c * (d - a.getTimezoneOffset()))
    }

    function Z(a) {
        a = zd(a).clone();
        try {
            a.empty()
        } catch (b) { }
        var c = zd("<div>").append(a).html();
        try {
            return a[0].nodeType === Wd ? td(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
                return "<" + td(b)
            })
        } catch (b) {
            return td(c)
        }
    }

    function $(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) { }
    }

    function _(a) {
        var b, c, d = {};
        return f((a || "").split("&"), function (a) {
            if (a && (b = a.replace(/\+/g, "%20").split("="), c = $(b[0]), t(c))) {
                var e = t(b[1]) ? $(b[1]) : !0;
                ud.call(d, c) ? Ld(d[c]) ? d[c].push(e) : d[c] = [d[c], e] : d[c] = e
            }
        }), d
    }

    function aa(a) {
        var b = [];
        return f(a, function (a, c) {
            Ld(a) ? f(a, function (a) {
                b.push(ca(c, !0) + (a === !0 ? "" : "=" + ca(a, !0)))
            }) : b.push(ca(c, !0) + (a === !0 ? "" : "=" + ca(a, !0)))
        }), b.length ? b.join("&") : ""
    }

    function ba(a) {
        return ca(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function ca(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+")
    }

    function da(a, b) {
        var c, d, e = Rd.length;
        for (d = 0; e > d; ++d)
            if (c = Rd[d] + b, w(c = a.getAttribute(c))) return c;
        return null
    }

    function ea(a, b) {
        var c, d, e = {};
        f(Rd, function (b) {
            var e = b + "app";
            !c && a.hasAttribute && a.hasAttribute(e) && (c = a, d = a.getAttribute(e))
        }), f(Rd, function (b) {
            var e, f = b + "app";
            !c && (e = a.querySelector("[" + f.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(f))
        }), c && (e.strictDi = null !== da(c, "strict-di"), b(c, d ? [d] : [], e))
    }

    function fa(c, d, e) {
        u(e) || (e = {});
        var g = {
            strictDi: !1
        };
        e = l(g, e);
        var h = function () {
            if (c = zd(c), c.injector()) {
                var a = c[0] === b ? "document" : Z(c);
                throw Hd("btstrpd", "App Already Bootstrapped with this Element '{0}'", a.replace(/</, "&lt;").replace(/>/, "&gt;"))
            }
            d = d || [], d.unshift(["$provide", function (a) {
                a.value("$rootElement", c)
            }]), e.debugInfoEnabled && d.push(["$compileProvider", function (a) {
                a.debugInfoEnabled(!0)
            }]), d.unshift("ng");
            var f = Ya(d, e.strictDi);
            return f.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
                a.$apply(function () {
                    b.data("$injector", d), c(b)(a)
                })
            }]), f
        },
            i = /^NG_ENABLE_DEBUG_INFO!/,
            j = /^NG_DEFER_BOOTSTRAP!/;
        return a && i.test(a.name) && (e.debugInfoEnabled = !0, a.name = a.name.replace(i, "")), a && !j.test(a.name) ? h() : (a.name = a.name.replace(j, ""), Id.resumeBootstrap = function (a) {
            return f(a, function (a) {
                d.push(a)
            }), h()
        }, void (z(Id.resumeDeferredBootstrap) && Id.resumeDeferredBootstrap()))
    }

    function ga() {
        a.name = "NG_ENABLE_DEBUG_INFO!" + a.name, a.location.reload()
    }

    function ha(a) {
        var b = Id.element(a).injector();
        if (!b) throw Hd("test", "no injector found for element argument to getTestability");
        return b.get("$$testability")
    }

    function ia(a, b) {
        return b = b || "_", a.replace(Sd, function (a, c) {
            return (c ? b : "") + a.toLowerCase()
        })
    }

    function ja() {
        var b;
        if (!Td) {
            var d = Qd();
            Ad = a.jQuery, t(d) && (Ad = null === d ? c : a[d]), Ad && Ad.fn.on ? (zd = Ad, l(Ad.fn, {
                scope: me.scope,
                isolateScope: me.isolateScope,
                controller: me.controller,
                injector: me.injector,
                inheritedData: me.inheritedData
            }), b = Ad.cleanData, Ad.cleanData = function (a) {
                var c;
                if (Kd) Kd = !1;
                else
                    for (var d, e = 0; null != (d = a[e]); e++) c = Ad._data(d, "events"), c && c.$destroy && Ad(d).triggerHandler("$destroy");
                b(a)
            }) : zd = Aa, Id.element = zd, Td = !0
        }
    }

    function ka(a, b, c) {
        if (!a) throw Hd("areq", "Argument '{0}' is {1}", b || "?", c || "required");
        return a
    }

    function la(a, b, c) {
        return c && Ld(a) && (a = a[a.length - 1]), ka(z(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), a
    }

    function ma(a, b) {
        if ("hasOwnProperty" === a) throw Hd("badname", "hasOwnProperty is not a valid {0} name", b)
    }

    function na(a, b, c) {
        if (!b) return a;
        for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++) d = e[h], a && (a = (f = a)[d]);
        return !c && z(a) ? S(f, a) : a
    }

    function oa(a) {
        var b = a[0],
            c = a[a.length - 1],
            d = [b];
        do {
            if (b = b.nextSibling, !b) break;
            d.push(b)
        } while (b !== c);
        return zd(d)
    }

    function pa() {
        return Object.create(null)
    }

    function qa(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c())
        }
        var c = d("$injector"),
            e = d("ng"),
            f = b(a, "angular", Object);
        return f.$$minErr = f.$$minErr || d, b(f, "module", function () {
            var a = {};
            return function (d, f, g) {
                var h = function (a, b) {
                    if ("hasOwnProperty" === a) throw e("badname", "hasOwnProperty is not a valid {0} name", b)
                };
                return h(d, "module"), f && a.hasOwnProperty(d) && (a[d] = null), b(a, d, function () {
                    function a(a, c, d, e) {
                        return e || (e = b),
                            function () {
                                return e[d || "push"]([a, c, arguments]), j
                            }
                    }
                    if (!f) throw c("nomod", "Module '{0}' is not available! YEither misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", d);
                    var b = [],
                        e = [],
                        h = [],
                        i = a("$injector", "invoke", "push", e),
                        j = {
                            _invokeQueue: b,
                            _configBlocks: e,
                            _runBlocks: h,
                            requires: f,
                            name: d,
                            provider: a("$provide", "provider"),
                            factory: a("$provide", "factory"),
                            service: a("$provide", "service"),
                            value: a("$provide", "value"),
                            constant: a("$provide", "constant", "unshift"),
                            decorator: a("$provide", "decorator"),
                            animation: a("$animateProvider", "register"),
                            filter: a("$filterProvider", "register"),
                            controller: a("$controllerProvider", "register"),
                            directive: a("$compileProvider", "directive"),
                            config: i,
                            run: function (a) {
                                return h.push(a), this
                            }
                        };
                    return g && i(g), j
                })
            }
        })
    }

    function ra(a) {
        var b = [];
        return JSON.stringify(a, function (a, c) {
            if (c = T(a, c), u(c)) {
                if (b.indexOf(c) >= 0) return "<<already seen>>";
                b.push(c)
            }
            return c
        })
    }

    function sa(a) {
        return "function" == typeof a ? a.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof a ? "undefined" : "string" != typeof a ? ra(a) : a
    }

    function ta(b) {
        l(b, {
            bootstrap: fa,
            copy: N,
            extend: l,
            merge: m,
            equals: P,
            element: zd,
            forEach: f,
            injector: Ya,
            noop: p,
            bind: S,
            toJson: U,
            fromJson: V,
            identity: q,
            isUndefined: s,
            isDefined: t,
            isString: w,
            isFunction: z,
            isObject: u,
            isNumber: x,
            isElement: J,
            isArray: Ld,
            version: $d,
            isDate: y,
            lowercase: td,
            uppercase: vd,
            callbacks: {
                counter: 0
            },
            getTestability: ha,
            $$minErr: d,
            $$csp: Pd,
            reloadWithDebugInfo: ga
        }), Bd = qa(a);
        try {
            Bd("ngLocale")
        } catch (c) {
            Bd("ngLocale", []).provider("$locale", Eb)
        }
        Bd("ng", ["ngLocale"], ["$provide", function (a) {
            a.provider({
                $$sanitizeUri: pc
            }), a.provider("$compile", hb).directive({
                a: jf,
                input: Af,
                textarea: Af,
                form: of,
                script: sg,
                select: vg,
                style: xg,
                option: wg,
                ngBind: Df,
                ngBindHtml: Ff,
                ngBindTemplate: Ef,
                ngClass: Hf,
                ngClassEven: Jf,
                ngClassOdd: If,
                ngCloak: Kf,
                ngController: Lf,
                ngForm: pf,
                ngHide: mg,
                ngIf: Of,
                ngInclude: Pf,
                ngInit: Rf,
                ngNonBindable: dg,
                ngPluralize: hg,
                ngRepeat: ig,
                ngShow: lg,
                ngStyle: ng,
                ngSwitch: og,
                ngSwitchWhen: pg,
                ngSwitchDefault: qg,
                ngOptions: gg,
                ngTransclude: rg,
                ngModel: ag,
                ngList: Sf,
                ngChange: Gf,
                pattern: zg,
                ngPattern: zg,
                required: yg,
                ngRequired: yg,
                minlength: Bg,
                ngMinlength: Bg,
                maxlength: Ag,
                ngMaxlength: Ag,
                ngValue: Cf,
                ngModelOptions: cg
            }).directive({
                ngInclude: Qf
            }).directive(kf).directive(Mf), a.provider({
                $anchorScroll: Za,
                $animate: Be,
                $$animateQueue: Ae,
                $$AnimateRunner: ze,
                $browser: eb,
                $cacheFactory: fb,
                $controller: mb,
                $document: nb,
                $exceptionHandler: ob,
                $filter: Dc,
                $interpolate: Cb,
                $interval: Db,
                $http: yb,
                $httpParamSerializer: qb,
                $httpParamSerializerJQLike: rb,
                $httpBackend: Ab,
                $location: Sb,
                $log: Tb,
                $parse: jc,
                $rootScope: oc,
                $q: kc,
                $$q: lc,
                $sce: tc,
                $sceDelegate: sc,
                $sniffer: uc,
                $templateCache: gb,
                $templateRequest: vc,
                $$testability: wc,
                $timeout: xc,
                $window: Ac,
                $$rAF: nc,
                $$asyncCallback: cb,
                $$jqLite: Ta,
                $$HashMap: qe,
                $$cookieReader: Cc
            })
        }])
    }

    function ua() {
        return ++ae
    }

    function va(a) {
        return a.replace(de, function (a, b, c, d) {
            return d ? c.toUpperCase() : c
        }).replace(ee, "Moz$1")
    }

    function wa(a) {
        return !ie.test(a)
    }

    function xa(a) {
        var b = a.nodeType;
        return b === Ud || !b || b === Yd
    }

    function ya(a, b) {
        var c, d, e, g, h = b.createDocumentFragment(),
            i = [];
        if (wa(a)) i.push(b.createTextNode(a));
        else {
            for (c = c || h.appendChild(b.createElement("div")), d = (je.exec(a) || ["", ""])[1].toLowerCase(), e = le[d] || le._default, c.innerHTML = e[1] + a.replace(ke, "<$1></$2>") + e[2], g = e[0]; g--;) c = c.lastChild;
            i = Q(i, c.childNodes), c = h.firstChild, c.textContent = ""
        }
        return h.textContent = "", h.innerHTML = "", f(i, function (a) {
            h.appendChild(a)
        }), h
    }

    function za(a, c) {
        c = c || b;
        var d;
        return (d = he.exec(a)) ? [c.createElement(d[1])] : (d = ya(a, c)) ? d.childNodes : []
    }

    function Aa(a) {
        if (a instanceof Aa) return a;
        var b;
        if (w(a) && (a = Nd(a), b = !0), !(this instanceof Aa)) {
            if (b && "<" != a.charAt(0)) throw ge("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new Aa(a)
        }
        b ? Ka(this, za(a)) : Ka(this, a)
    }

    function Ba(a) {
        return a.cloneNode(!0)
    }

    function Ca(a, b) {
        if (b || Ea(a), a.querySelectorAll)
            for (var c = a.querySelectorAll("*"), d = 0, e = c.length; e > d; d++) Ea(c[d])
    }

    function Da(a, b, c, d) {
        if (t(d)) throw ge("offargs", "jqLite#off() does not support the `selector` argument");
        var e = Fa(a),
            g = e && e.events,
            h = e && e.handle;
        if (h)
            if (b) f(b.split(" "), function (b) {
                if (t(c)) {
                    var d = g[b];
                    if (M(d || [], c), d && d.length > 0) return
                }
                ce(a, b, h), delete g[b]
            });
            else
                for (b in g) "$destroy" !== b && ce(a, b, h), delete g[b]
    }

    function Ea(a, b) {
        var d = a.ng339,
            e = d && _d[d];
        if (e) {
            if (b) return void delete e.data[b];
            e.handle && (e.events.$destroy && e.handle({}, "$destroy"), Da(a)), delete _d[d], a.ng339 = c
        }
    }

    function Fa(a, b) {
        var d = a.ng339,
            e = d && _d[d];
        return b && !e && (a.ng339 = d = ua(), e = _d[d] = {
            events: {},
            data: {},
            handle: c
        }), e
    }

    function Ga(a, b, c) {
        if (xa(a)) {
            var d = t(c),
                e = !d && b && !u(b),
                f = !b,
                g = Fa(a, !e),
                h = g && g.data;
            if (d) h[b] = c;
            else {
                if (f) return h;
                if (e) return h && h[b];
                l(h, b)
            }
        }
    }

    function Ha(a, b) {
        return a.getAttribute ? (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1 : !1
    }

    function Ia(a, b) {
        b && a.setAttribute && f(b.split(" "), function (b) {
            a.setAttribute("class", Nd((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Nd(b) + " ", " ")))
        })
    }

    function Ja(a, b) {
        if (b && a.setAttribute) {
            var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            f(b.split(" "), function (a) {
                a = Nd(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ")
            }), a.setAttribute("class", Nd(c))
        }
    }

    function Ka(a, b) {
        if (b)
            if (b.nodeType) a[a.length++] = b;
            else {
                var c = b.length;
                if ("number" == typeof c && b.window !== b) {
                    if (c)
                        for (var d = 0; c > d; d++) a[a.length++] = b[d]
                } else a[a.length++] = b
            }
    }

    function La(a, b) {
        return Ma(a, "$" + (b || "ngController") + "Controller")
    }

    function Ma(a, b, d) {
        a.nodeType == Yd && (a = a.documentElement);
        for (var e = Ld(b) ? b : [b]; a;) {
            for (var f = 0, g = e.length; g > f; f++)
                if ((d = zd.data(a, e[f])) !== c) return d;
            a = a.parentNode || a.nodeType === Zd && a.host
        }
    }

    function Na(a) {
        for (Ca(a, !0); a.firstChild;) a.removeChild(a.firstChild)
    }

    function Oa(a, b) {
        b || Ca(a);
        var c = a.parentNode;
        c && c.removeChild(a)
    }

    function Pa(b, c) {
        c = c || a, "complete" === c.document.readyState ? c.setTimeout(b) : zd(c).on("load", b)
    }

    function Qa(a, b) {
        var c = ne[b.toLowerCase()];
        return c && oe[L(a)] && c
    }

    function Ra(a, b) {
        var c = a.nodeName;
        return ("INPUT" === c || "TEXTAREA" === c) && pe[b]
    }

    function Sa(a, b) {
        var c = function (c, d) {
            c.isDefaultPrevented = function () {
                return c.defaultPrevented
            };
            var e = b[d || c.type],
                f = e ? e.length : 0;
            if (f) {
                if (s(c.immediatePropagationStopped)) {
                    var g = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function () {
                        c.immediatePropagationStopped = !0, c.stopPropagation && c.stopPropagation(), g && g.call(c)
                    }
                }
                c.isImmediatePropagationStopped = function () {
                    return c.immediatePropagationStopped === !0
                }, f > 1 && (e = O(e));
                for (var h = 0; f > h; h++) c.isImmediatePropagationStopped() || e[h].call(a, c)
            }
        };
        return c.elem = a, c
    }

    function Ta() {
        this.$get = function () {
            return l(Aa, {
                hasClass: function (a, b) {
                    return a.attr && (a = a[0]), Ha(a, b)
                },
                addClass: function (a, b) {
                    return a.attr && (a = a[0]), Ja(a, b)
                },
                removeClass: function (a, b) {
                    return a.attr && (a = a[0]), Ia(a, b)
                }
            })
        }
    }

    function Ua(a, b) {
        var c = a && a.$$hashKey;
        if (c) return "function" == typeof c && (c = a.$$hashKey()), c;
        var d = typeof a;
        return c = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || i)() : d + ":" + a
    }

    function Va(a, b) {
        if (b) {
            var c = 0;
            this.nextUid = function () {
                return ++c
            }
        }
        f(a, this.put, this)
    }

    function Wa(a) {
        var b = a.toString().replace(ue, ""),
            c = b.match(re);
        return c ? "function(" + (c[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function Xa(a, b, c) {
        var d, e, g, h;
        if ("function" == typeof a) {
            if (!(d = a.$inject)) {
                if (d = [], a.length) {
                    if (b) throw w(c) && c || (c = a.name || Wa(a)), ve("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", c);
                    e = a.toString().replace(ue, ""), g = e.match(re), f(g[1].split(se), function (a) {
                        a.replace(te, function (a, b, c) {
                            d.push(c)
                        })
                    })
                }
                a.$inject = d
            }
        } else Ld(a) ? (h = a.length - 1, la(a[h], "fn"), d = a.slice(0, h)) : la(a, "fn", !0);
        return d
    }

    function Ya(a, b) {
        function d(a) {
            return function (b, c) {
                return u(b) ? void f(b, h(a)) : a(b, c)
            }
        }

        function e(a, b) {
            if (ma(a, "service"), (z(b) || Ld(b)) && (b = A.instantiate(b)), !b.$get) throw ve("pget", "Provider '{0}' must define $get factory method.", a);
            return y[a + t] = b
        }

        function g(a, b) {
            return function () {
                var c = C.invoke(b, this);
                if (s(c)) throw ve("undef", "Provider '{0}' must return a value from $get factory method.", a);
                return c
            }
        }

        function i(a, b, c) {
            return e(a, {
                $get: c !== !1 ? g(a, b) : b
            })
        }

        function j(a, b) {
            return i(a, ["$injector", function (a) {
                return a.instantiate(b)
            }])
        }

        function k(a, b) {
            return i(a, r(b), !1)
        }

        function l(a, b) {
            ma(a, "constant"), y[a] = b, B[a] = b
        }

        function m(a, b) {
            var c = A.get(a + t),
                d = c.$get;
            c.$get = function () {
                var a = C.invoke(d, c);
                return C.invoke(b, null, {
                    $delegate: a
                })
            }
        }

        function n(a) {
            var b, c = [];
            return f(a, function (a) {
                function d(a) {
                    var b, c;
                    for (b = 0, c = a.length; c > b; b++) {
                        var d = a[b],
                            e = A.get(d[0]);
                        e[d[1]].apply(e, d[2])
                    }
                }
                if (!x.get(a)) {
                    x.put(a, !0);
                    try {
                        w(a) ? (b = Bd(a), c = c.concat(n(b.requires)).concat(b._runBlocks), d(b._invokeQueue), d(b._configBlocks)) : z(a) ? c.push(A.invoke(a)) : Ld(a) ? c.push(A.invoke(a)) : la(a, "module")
                    } catch (e) {
                        throw Ld(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), ve("modulerr", "Failed to instantiate module {0} due to:\n{1}", a, e.stack || e.message || e)
                    }
                }
            }), c
        }

        function o(a, c) {
            function d(b, d) {
                if (a.hasOwnProperty(b)) {
                    if (a[b] === q) throw ve("cdep", "Circular dependency found: {0}", b + " <- " + v.join(" <- "));
                    return a[b]
                }
                try {
                    return v.unshift(b), a[b] = q, a[b] = c(b, d)
                } catch (e) {
                    throw a[b] === q && delete a[b], e
                } finally {
                    v.shift()
                }
            }

            function e(a, c, e, f) {
                "string" == typeof e && (f = e, e = null);
                var g, h, i, j = [],
                    k = Ya.$$annotate(a, b, f);
                for (h = 0, g = k.length; g > h; h++) {
                    if (i = k[h], "string" != typeof i) throw ve("itkn", "Incorrect injection token! Expected service name as string, got {0}", i);
                    j.push(e && e.hasOwnProperty(i) ? e[i] : d(i, f))
                }
                return Ld(a) && (a = a[g]), a.apply(c, j)
            }

            function f(a, b, c) {
                var d = Object.create((Ld(a) ? a[a.length - 1] : a).prototype || null),
                    f = e(a, d, b, c);
                return u(f) || z(f) ? f : d
            }
            return {
                invoke: e,
                instantiate: f,
                get: d,
                annotate: Ya.$$annotate,
                has: function (b) {
                    return y.hasOwnProperty(b + t) || a.hasOwnProperty(b)
                }
            }
        }
        b = b === !0;
        var q = {},
            t = "Provider",
            v = [],
            x = new Va([], !0),
            y = {
                $provide: {
                    provider: d(e),
                    factory: d(i),
                    service: d(j),
                    value: d(k),
                    constant: d(l),
                    decorator: m
                }
            },
            A = y.$injector = o(y, function (a, b) {
                throw Id.isString(b) && v.push(b), ve("unpr", "Unknown provider: {0}", v.join(" <- "))
            }),
            B = {},
            C = B.$injector = o(B, function (a, b) {
                var d = A.get(a + t, b);
                return C.invoke(d.$get, d, c, a)
            });
        return f(n(a), function (a) {
            C.invoke(a || p)
        }), C
    }

    function Za() {
        var a = !0;
        this.disableAutoScrolling = function () {
            a = !1
        }, this.$get = ["$window", "$location", "$rootScope", function (b, c, d) {
            function e(a) {
                var b = null;
                return Array.prototype.some.call(a, function (a) {
                    return "a" === L(a) ? (b = a, !0) : void 0
                }), b
            }

            function f() {
                var a = h.yOffset;
                if (z(a)) a = a();
                else if (J(a)) {
                    var c = a[0],
                        d = b.getComputedStyle(c);
                    a = "fixed" !== d.position ? 0 : c.getBoundingClientRect().bottom
                } else x(a) || (a = 0);
                return a
            }

            function g(a) {
                if (a) {
                    a.scrollIntoView();
                    var c = f();
                    if (c) {
                        var d = a.getBoundingClientRect().top;
                        b.scrollBy(0, d - c)
                    }
                } else b.scrollTo(0, 0)
            }

            function h(a) {
                a = w(a) ? a : c.hash();
                var b;
                a ? (b = i.getElementById(a)) ? g(b) : (b = e(i.getElementsByName(a))) ? g(b) : "top" === a && g(null) : g(null)
            }
            var i = b.document;
            return a && d.$watch(function () {
                return c.hash()
            }, function (a, b) {
                (a !== b || "" !== a) && Pa(function () {
                    d.$evalAsync(h)
                })
            }), h
        }]
    }

    function $a(a, b) {
        return a || b ? a ? b ? (Ld(a) && (a = a.join(" ")), Ld(b) && (b = b.join(" ")), a + " " + b) : a : b : ""
    }

    function _a(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (c.nodeType === xe) return c
        }
    }

    function ab(a) {
        w(a) && (a = a.split(" "));
        var b = pa();
        return f(a, function (a) {
            a.length && (b[a] = !0)
        }), b
    }

    function bb(a) {
        return u(a) ? a : {}
    }

    function cb() {
        this.$get = ["$$rAF", "$timeout", function (a, b) {
            return a.supported ? function (b) {
                return a(b)
            } : function (a) {
                return b(a, 0, !1)
            }
        }]
    }

    function db(a, b, c, d) {
        function e(a) {
            try {
                a.apply(null, R(arguments, 1))
            } finally {
                if (t-- , 0 === t)
                    for (; u.length;) try {
                        u.pop()()
                    } catch (b) {
                        c.error(b)
                    }
            }
        }

        function g(a) {
            var b = a.indexOf("#");
            return -1 === b ? "" : a.substr(b + 1)
        }

        function h() {
            j(), k()
        }

        function i() {
            try {
                return n.state
            } catch (a) { }
        }

        function j() {
            v = i(), v = s(v) ? null : v, P(v, C) && (v = C), C = v
        }

        function k() {
            (x !== l.url() || w !== v) && (x = l.url(), w = v, f(A, function (a) {
                a(l.url(), v)
            }))
        }
        var l = this,
            m = (b[0], a.location),
            n = a.history,
            o = a.setTimeout,
            q = a.clearTimeout,
            r = {};
        l.isMock = !1;
        var t = 0,
            u = [];
        l.$$completeOutstandingRequest = e, l.$$incOutstandingRequestCount = function () {
            t++
        }, l.notifyWhenNoOutstandingRequests = function (a) {
            0 === t ? a() : u.push(a)
        };
        var v, w, x = m.href,
            y = b.find("base"),
            z = null;
        j(), w = v, l.url = function (b, c, e) {
            if (s(e) && (e = null), m !== a.location && (m = a.location), n !== a.history && (n = a.history), b) {
                var f = w === e;
                if (x === b && (!d.history || f)) return l;
                var h = x && Jb(x) === Jb(b);
                return x = b, w = e, !d.history || h && f ? (h || (z = b), c ? m.replace(b) : h ? m.hash = g(b) : m.href = b) : (n[c ? "replaceState" : "pushState"](e, "", b), j(), w = v), l
            }
            return z || m.href.replace(/%27/g, "'")
        }, l.state = function () {
            return v
        };
        var A = [],
            B = !1,
            C = null;
        l.onUrlChange = function (b) {
            return B || (d.history && zd(a).on("popstate", h), zd(a).on("hashchange", h), B = !0), A.push(b), b
        }, l.$$applicationDestroyed = function () {
            zd(a).off("hashchange popstate", h)
        }, l.$$checkUrlChange = k, l.baseHref = function () {
            var a = y.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        }, l.defer = function (a, b) {
            var c;
            return t++ , c = o(function () {
                delete r[c], e(a)
            }, b || 0), r[c] = !0, c
        }, l.defer.cancel = function (a) {
            return r[a] ? (delete r[a], q(a), e(p), !0) : !1
        }
    }

    function eb() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (a, b, c, d) {
            return new db(a, d, b, c)
        }]
    }

    function fb() {
        this.$get = function () {
            function a(a, c) {
                function e(a) {
                    a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null)
                }

                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a))
                }
                if (a in b) throw d("$cacheFactory")("iid", "CacheId '{0}' is already taken!", a);
                var g = 0,
                    h = l({}, c, {
                        id: a
                    }),
                    i = {},
                    j = c && c.capacity || Number.MAX_VALUE,
                    k = {},
                    m = null,
                    n = null;
                return b[a] = {
                    put: function (a, b) {
                        if (!s(b)) {
                            if (j < Number.MAX_VALUE) {
                                var c = k[a] || (k[a] = {
                                    key: a
                                });
                                e(c)
                            }
                            return a in i || g++ , i[a] = b, g > j && this.remove(n.key), b
                        }
                    },
                    get: function (a) {
                        if (j < Number.MAX_VALUE) {
                            var b = k[a];
                            if (!b) return;
                            e(b)
                        }
                        return i[a]
                    },
                    remove: function (a) {
                        if (j < Number.MAX_VALUE) {
                            var b = k[a];
                            if (!b) return;
                            b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete k[a]
                        }
                        delete i[a], g--
                    },
                    removeAll: function () {
                        i = {}, g = 0, k = {}, m = n = null
                    },
                    destroy: function () {
                        i = null, h = null, k = null, delete b[a]
                    },
                    info: function () {
                        return l({}, h, {
                            size: g
                        })
                    }
                }
            }
            var b = {};
            return a.info = function () {
                var a = {};
                return f(b, function (b, c) {
                    a[c] = b.info()
                }), a
            }, a.get = function (a) {
                return b[a]
            }, a
        }
    }

    function gb() {
        this.$get = ["$cacheFactory", function (a) {
            return a("templates")
        }]
    }

    function hb(a, d) {
        function e(a, b, c) {
            var d = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
                e = {};
            return f(a, function (a, f) {
                var g = a.match(d);
                if (!g) throw Ce("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", b, f, a, c ? "controller bindings definition" : "isolate scope definition");
                e[f] = {
                    mode: g[1][0],
                    collection: "*" === g[2],
                    optional: "?" === g[3],
                    attrName: g[4] || f
                }
            }), e
        }

        function g(a, b) {
            var c = {
                isolateScope: null,
                bindToController: null
            };
            if (u(a.scope) && (a.bindToController === !0 ? (c.bindToController = e(a.scope, b, !0), c.isolateScope = {}) : c.isolateScope = e(a.scope, b, !1)), u(a.bindToController) && (c.bindToController = e(a.bindToController, b, !0)), u(c.bindToController)) {
                var d = a.controller,
                    f = a.controllerAs;
                if (!d) throw Ce("noctrl", "Cannot bind to controller without directive '{0}'s controller.", b);
                if (!lb(d, f)) throw Ce("noident", "Cannot bind to controller without identifier for directive '{0}'.", b)
            }
            return c
        }

        function i(a) {
            var b = a.charAt(0);
            if (!b || b !== td(b)) throw Ce("baddir", "Directive name '{0}' is invalid. The first character must be a lowercase letter", a);
            if (a !== a.trim()) throw Ce("baddir", "Directive name '{0}' is invalid. The name should not contain leading or trailing whitespaces", a)
        }
        var j = {},
            k = "Directive",
            m = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
            n = /(([\w\-]+)(?:\:([^;]+))?;?)/,
            s = K("ngSrc,ngSrcset,src,srcset"),
            v = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
            x = /^(on[a-z]+|formaction)$/;
        this.directive = function A(b, c) {
            return ma(b, "directive"), w(b) ? (i(b), ka(c, "directiveFactory"), j.hasOwnProperty(b) || (j[b] = [], a.factory(b + k, ["$injector", "$exceptionHandler", function (a, c) {
                var d = [];
                return f(j[b], function (e, f) {
                    try {
                        var h = a.invoke(e);
                        z(h) ? h = {
                            compile: r(h)
                        } : !h.compile && h.link && (h.compile = r(h.link)), h.priority = h.priority || 0, h.index = f, h.name = h.name || b, h.require = h.require || h.controller && h.name, h.restrict = h.restrict || "EA";
                        var i = h.$$bindings = g(h, h.name);
                        u(i.isolateScope) && (h.$$isolateBindings = i.isolateScope), d.push(h)
                    } catch (j) {
                        c(j)
                    }
                }), d
            }])), j[b].push(c)) : f(b, h(A)), this
        }, this.aHrefSanitizationWhitelist = function (a) {
            return t(a) ? (d.aHrefSanitizationWhitelist(a), this) : d.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function (a) {
            return t(a) ? (d.imgSrcSanitizationWhitelist(a), this) : d.imgSrcSanitizationWhitelist()
        };
        var y = !0;
        this.debugInfoEnabled = function (a) {
            return t(a) ? (y = a, this) : y
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (a, d, e, g, h, i, r, t, A, B, D) {
            function E(a, b) {
                try {
                    a.addClass(b)
                } catch (c) { }
            }

            function F(a, b, c, d, e) {
                a instanceof zd || (a = zd(a)), f(a, function (b, c) {
                    b.nodeType == Wd && b.nodeValue.match(/\S+/) && (a[c] = zd(b).wrap("<span></span>").parent()[0])
                });
                var g = H(a, b, a, c, d, e);
                F.$$addScopeClass(a);
                var h = null;
                return function (b, c, d) {
                    ka(b, "scope"), d = d || {};
                    var e = d.parentBoundTranscludeFn,
                        f = d.transcludeControllers,
                        i = d.futureParentElement;
                    e && e.$$boundTransclude && (e = e.$$boundTransclude), h || (h = G(i));
                    var j;
                    if (j = "html" !== h ? zd($(h, zd("<div>").append(a).html())) : c ? me.clone.call(a) : a, f)
                        for (var k in f) j.data("$" + k + "Controller", f[k].instance);
                    return F.$$addScopeInfo(j, b), c && c(j, b), g && g(b, j, j, e), j
                }
            }

            function G(a) {
                var b = a && a[0];
                return b && "foreignobject" !== L(b) && b.toString().match(/SVG/) ? "svg" : "html"
            }

            function H(a, b, d, e, f, g) {
                function h(a, d, e, f) {
                    var g, h, i, j, k, l, m, n, q;
                    if (o) {
                        var r = d.length;
                        for (q = new Array(r), k = 0; k < p.length; k += 3) m = p[k], q[m] = d[m]
                    } else q = d;
                    for (k = 0, l = p.length; l > k;)
                        if (i = q[p[k++]], g = p[k++], h = p[k++], g) {
                            if (g.scope) {
                                j = a.$new(), F.$$addScopeInfo(zd(i), j);
                                var s = g.$$destroyBindings;
                                s && (g.$$destroyBindings = null, j.$on("$destroyed", s))
                            } else j = a;
                            n = g.transcludeOnThisElement ? I(a, g.transclude, f, g.elementTranscludeOnThisElement) : !g.templateOnThisElement && f ? f : !f && b ? I(a, b) : null, g(h, j, i, e, n, g)
                        } else h && h(a, i.childNodes, c, f)
                }
                for (var i, j, k, l, m, n, o, p = [], q = 0; q < a.length; q++) i = new fa, j = J(a[q], [], i, 0 === q ? e : c, f), k = j.length ? O(j, a[q], i, b, d, null, [], [], g) : null, k && k.scope && F.$$addScopeClass(i.$$element), m = k && k.terminal || !(l = a[q].childNodes) || !l.length ? null : H(l, k ? (k.transcludeOnThisElement || !k.templateOnThisElement) && k.transclude : b), (k || m) && (p.push(q, k, m), n = !0, o = o || k), g = null;
                return n ? h : null
            }

            function I(a, b, c, d) {
                var e = function (d, e, f, g, h) {
                    return d || (d = a.$new(!1, h), d.$$transcluded = !0), b(d, e, {
                        parentBoundTranscludeFn: c,
                        transcludeControllers: f,
                        futureParentElement: g
                    })
                };
                return e
            }

            function J(a, b, c, d, e) {
                var f, g, h = a.nodeType,
                    i = c.$attr;
                switch (h) {
                    case Ud:
                        S(b, ib(L(a)), "E", d, e);
                        for (var j, k, l, o, p, q, r = a.attributes, s = 0, t = r && r.length; t > s; s++) {
                            var v = !1,
                                x = !1;
                            j = r[s], k = j.name, p = Nd(j.value), o = ib(k), (q = la.test(o)) && (k = k.replace(De, "").substr(8).replace(/_(.)/g, function (a, b) {
                                return b.toUpperCase()
                            }));
                            var y = o.replace(/(Start|End)$/, "");
                            T(y) && o === y + "Start" && (v = k, x = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6)), l = ib(k.toLowerCase()), i[l] = k, (q || !c.hasOwnProperty(l)) && (c[l] = p, Qa(a, l) && (c[l] = !0)), aa(a, b, p, l, q), S(b, l, "A", d, e, v, x)
                        }
                        if (g = a.className, u(g) && (g = g.animVal), w(g) && "" !== g)
                            for (; f = n.exec(g);) l = ib(f[2]), S(b, l, "C", d, e) && (c[l] = Nd(f[3])), g = g.substr(f.index + f[0].length);
                        break;
                    case Wd:
                        Y(b, a.nodeValue);
                        break;
                    case Xd:
                        try {
                            f = m.exec(a.nodeValue), f && (l = ib(f[1]), S(b, l, "M", d, e) && (c[l] = Nd(f[2])))
                        } catch (z) { }
                }
                return b.sort(W), b
            }

            function K(a, b, c) {
                var d = [],
                    e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a) throw Ce("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", b, c);
                        a.nodeType == Ud && (a.hasAttribute(b) && e++ , a.hasAttribute(c) && e--), d.push(a), a = a.nextSibling
                    } while (e > 0)
                } else d.push(a);
                return zd(d)
            }

            function N(a, b, c) {
                return function (d, e, f, g, h) {
                    return e = K(e[0], b, c), a(d, e, f, g, h)
                }
            }

            function O(a, d, f, g, h, j, k, l, m) {
                function n(a, b, c, d) {
                    a && (c && (a = N(a, c, d)), a.require = s.require, a.directiveName = t, (E === s || s.$$isolateScope) && (a = ca(a, {
                        isolateScope: !0
                    })), k.push(a)), b && (c && (b = N(b, c, d)), b.require = s.require, b.directiveName = t, (E === s || s.$$isolateScope) && (b = ca(b, {
                        isolateScope: !0
                    })), l.push(b))
                }

                function o(a, b, c, d) {
                    var e;
                    if (w(b)) {
                        var f = b.match(v),
                            g = b.substring(f[0].length),
                            h = f[1] || f[3],
                            i = "?" === f[2];
                        if ("^^" === h ? c = c.parent() : (e = d && d[g], e = e && e.instance), !e) {
                            var j = "$" + g + "Controller";
                            e = h ? c.inheritedData(j) : c.data(j)
                        }
                        if (!e && !i) throw Ce("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", g, a)
                    } else if (Ld(b)) {
                        e = [];
                        for (var k = 0, l = b.length; l > k; k++) e[k] = o(a, b[k], c, d)
                    }
                    return e || null
                }

                function p(a, b, c, d, e, f) {
                    var g = pa();
                    for (var h in d) {
                        var j = d[h],
                            k = {
                                $scope: j === E || j.$$isolateScope ? e : f,
                                $element: a,
                                $attrs: b,
                                $transclude: c
                            },
                            l = j.controller;
                        "@" == l && (l = b[j.name]);
                        var m = i(l, k, !0, j.controllerAs);
                        g[j.name] = m, M || a.data("$" + j.name + "Controller", m.instance)
                    }
                    return g
                }

                function q(a, b, e, g, h, i) {
                    function j(a, b, d) {
                        var e;
                        return C(a) || (d = b, b = a, a = c), M && (e = v), d || (d = M ? x.parent() : x), h(a, b, e, d, I)
                    }
                    var m, n, q, t, u, v, w, x, y;
                    if (d === e ? (y = f, x = f.$$element) : (x = zd(e), y = new fa(x, f)), E && (u = b.$new(!0)), h && (w = j, w.$$boundTransclude = h), D && (v = p(x, y, w, D, u, b)), E && (F.$$addScopeInfo(x, u, !0, !(G && (G === E || G === E.$$originalDirective))), F.$$addScopeClass(x, !0), u.$$isolateBindings = E.$$isolateBindings, ea(b, y, u, u.$$isolateBindings, E, u)), v) {
                        var z, A, B = E || r;
                        B && v[B.name] && (z = B.$$bindings.bindToController, t = v[B.name], t && t.identifier && z && (A = t, i.$$destroyBindings = ea(b, y, t.instance, z, B)));
                        for (m in v) {
                            t = v[m];
                            var H = t();
                            H !== t.instance && (t.instance = H, x.data("$" + s.name + "Controller", H), t === A && (i.$$destroyBindings(), i.$$destroyBindings = ea(b, y, H, z, B)))
                        }
                    }
                    for (m = 0, n = k.length; n > m; m++) q = k[m], da(q, q.isolateScope ? u : b, x, y, q.require && o(q.directiveName, q.require, x, v), w);
                    var I = b;
                    for (E && (E.template || null === E.templateUrl) && (I = u), a && a(I, e.childNodes, c, h), m = l.length - 1; m >= 0; m--) q = l[m], da(q, q.isolateScope ? u : b, x, y, q.require && o(q.directiveName, q.require, x, v), w)
                }
                m = m || {};
                for (var r, s, t, x, y, A, B = -Number.MAX_VALUE, D = m.controllerDirectives, E = m.newIsolateScopeDirective, G = m.templateDirective, H = m.nonTlbTranscludeDirective, I = !1, L = !1, M = m.hasElementTranscludeDirective, O = f.$$element = zd(d), P = j, S = g, T = 0, W = a.length; W > T; T++) {
                    s = a[T];
                    var Y = s.$$start,
                        _ = s.$$end;
                    if (Y && (O = K(d, Y, _)), x = c, B > s.priority) break;
                    if ((A = s.scope) && (s.templateUrl || (u(A) ? (X("new/isolated scope", E || r, s, O), E = s) : X("new/isolated scope", E, s, O)), r = r || s), t = s.name, !s.templateUrl && s.controller && (A = s.controller, D = D || pa(), X("'" + t + "' controller", D[t], s, O), D[t] = s), (A = s.transclude) && (I = !0, s.$$tlb || (X("transclusion", H, s, O), H = s), "element" == A ? (M = !0, B = s.priority, x = O, O = f.$$element = zd(b.createComment(" " + t + ": " + f[t] + " ")), d = O[0], ba(h, R(x), d), S = F(x, g, B, P && P.name, {
                        nonTlbTranscludeDirective: H
                    })) : (x = zd(Ba(d)).contents(), O.empty(), S = F(x, g))), s.template)
                        if (L = !0, X("template", G, s, O),
                            G = s, A = z(s.template) ? s.template(O, f) : s.template, A = ja(A), s.replace) {
                            if (P = s, x = wa(A) ? [] : kb($(s.templateNamespace, Nd(A))), d = x[0], 1 != x.length || d.nodeType !== Ud) throw Ce("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", t, "");
                            ba(h, O, d);
                            var aa = {
                                $attr: {}
                            },
                                ga = J(d, [], aa),
                                ha = a.splice(T + 1, a.length - (T + 1));
                            E && Q(ga), a = a.concat(ga).concat(ha), U(f, aa), W = a.length
                        } else O.html(A);
                    if (s.templateUrl) L = !0, X("template", G, s, O), G = s, s.replace && (P = s), q = V(a.splice(T, a.length - T), O, f, h, I && S, k, l, {
                        controllerDirectives: D,
                        newIsolateScopeDirective: E,
                        templateDirective: G,
                        nonTlbTranscludeDirective: H
                    }), W = a.length;
                    else if (s.compile) try {
                        y = s.compile(O, f, S), z(y) ? n(null, y, Y, _) : y && n(y.pre, y.post, Y, _)
                    } catch (ia) {
                        e(ia, Z(O))
                    }
                    s.terminal && (q.terminal = !0, B = Math.max(B, s.priority))
                }
                return q.scope = r && r.scope === !0, q.transcludeOnThisElement = I, q.elementTranscludeOnThisElement = M, q.templateOnThisElement = L, q.transclude = S, m.hasElementTranscludeDirective = M, q
            }

            function Q(a) {
                for (var b = 0, c = a.length; c > b; b++) a[b] = o(a[b], {
                    $$isolateScope: !0
                })
            }

            function S(b, d, f, g, h, i, l) {
                if (d === h) return null;
                var m = null;
                if (j.hasOwnProperty(d))
                    for (var n, p = a.get(d + k), q = 0, r = p.length; r > q; q++) try {
                        n = p[q], (g === c || g > n.priority) && -1 != n.restrict.indexOf(f) && (i && (n = o(n, {
                            $$start: i,
                            $$end: l
                        })), b.push(n), m = n)
                    } catch (s) {
                        e(s)
                    }
                return m
            }

            function T(b) {
                if (j.hasOwnProperty(b))
                    for (var c, d = a.get(b + k), e = 0, f = d.length; f > e; e++)
                        if (c = d[e], c.multiElement) return !0;
                return !1
            }

            function U(a, b) {
                var c = b.$attr,
                    d = a.$attr,
                    e = a.$$element;
                f(a, function (d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                }), f(b, function (b, f) {
                    "class" == f ? (E(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                })
            }

            function V(a, b, c, d, e, h, i, j) {
                var k, l, m = [],
                    n = b[0],
                    p = a.shift(),
                    q = o(p, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: p
                    }),
                    r = z(p.templateUrl) ? p.templateUrl(b, c) : p.templateUrl,
                    s = p.templateNamespace;
                return b.empty(), g(A.getTrustedResourceUrl(r)).then(function (g) {
                    var o, t, v, w;
                    if (g = ja(g), p.replace) {
                        if (v = wa(g) ? [] : kb($(s, Nd(g))), o = v[0], 1 != v.length || o.nodeType !== Ud) throw Ce("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", p.name, r);
                        t = {
                            $attr: {}
                        }, ba(d, b, o);
                        var x = J(o, [], t);
                        u(p.scope) && Q(x), a = x.concat(a), U(c, t)
                    } else o = n, b.html(g);
                    for (a.unshift(q), k = O(a, o, c, e, b, p, h, i, j), f(d, function (a, c) {
                        a == o && (d[c] = b[0])
                    }), l = H(b[0].childNodes, e); m.length;) {
                        var y = m.shift(),
                            z = m.shift(),
                            A = m.shift(),
                            B = m.shift(),
                            C = b[0];
                        if (!y.$$destroyed) {
                            if (z !== n) {
                                var D = z.className;
                                j.hasElementTranscludeDirective && p.replace || (C = Ba(o)), ba(A, zd(z), C), E(zd(C), D)
                            }
                            w = k.transcludeOnThisElement ? I(y, k.transclude, B) : B, k(l, y, C, d, w, k)
                        }
                    }
                    m = null
                }),
                    function (a, b, c, d, e) {
                        var f = e;
                        b.$$destroyed || (m ? m.push(b, c, d, f) : (k.transcludeOnThisElement && (f = I(b, k.transclude, e)), k(l, b, c, d, f, k)))
                    }
            }

            function W(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
            }

            function X(a, b, c, d) {
                if (b) throw Ce("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", b.name, c.name, a, Z(d))
            }

            function Y(a, b) {
                var c = d(b, !0);
                c && a.push({
                    priority: 0,
                    compile: function (a) {
                        var b = a.parent(),
                            d = !!b.length;
                        return d && F.$$addBindingClass(b),
                            function (a, b) {
                                var e = b.parent();
                                d || F.$$addBindingClass(e), F.$$addBindingInfo(e, c.expressions), a.$watch(c, function (a) {
                                    b[0].nodeValue = a
                                })
                            }
                    }
                })
            }

            function $(a, c) {
                switch (a = td(a || "html")) {
                    case "svg":
                    case "math":
                        var d = b.createElement("div");
                        return d.innerHTML = "<" + a + ">" + c + "</" + a + ">", d.childNodes[0].childNodes;
                    default:
                        return c
                }
            }

            function _(a, b) {
                if ("srcdoc" == b) return A.HTML;
                var c = L(a);
                return "xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b) ? A.RESOURCE_URL : void 0
            }

            function aa(a, b, c, e, f) {
                var g = _(a, e);
                f = s[e] || f;
                var h = d(c, !0, g, f);
                if (h) {
                    if ("multiple" === e && "select" === L(a)) throw Ce("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", Z(a));
                    b.push({
                        priority: 100,
                        compile: function () {
                            return {
                                pre: function (a, b, i) {
                                    var j = i.$$observers || (i.$$observers = {});
                                    if (x.test(e)) throw Ce("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                    var k = i[e];
                                    k !== c && (h = k && d(k, !0, g, f), c = k), h && (i[e] = h(a), (j[e] || (j[e] = [])).$$inter = !0, (i.$$observers && i.$$observers[e].$$scope || a).$watch(h, function (a, b) {
                                        "class" === e && a != b ? i.$updateClass(a, b) : i.$set(e, a)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function ba(a, c, d) {
                var e, f, g = c[0],
                    h = c.length,
                    i = g.parentNode;
                if (a)
                    for (e = 0, f = a.length; f > e; e++)
                        if (a[e] == g) {
                            a[e++] = d;
                            for (var j = e, k = j + h - 1, l = a.length; l > j; j++ , k++) l > k ? a[j] = a[k] : delete a[j];
                            a.length -= h - 1, a.context === g && (a.context = d);
                            break
                        }
                i && i.replaceChild(d, g);
                var m = b.createDocumentFragment();
                m.appendChild(g), zd(d).data(zd(g).data()), Ad ? (Kd = !0, Ad.cleanData([g])) : delete zd.cache[g[zd.expando]];
                for (var n = 1, o = c.length; o > n; n++) {
                    var p = c[n];
                    zd(p).remove(), m.appendChild(p), delete c[n]
                }
                c[0] = d, c.length = 1
            }

            function ca(a, b) {
                return l(function () {
                    return a.apply(null, arguments)
                }, a, b)
            }

            function da(a, b, c, d, f, g) {
                try {
                    a(b, c, d, f, g)
                } catch (h) {
                    e(h, Z(c))
                }
            }

            function ea(a, b, c, e, g, i) {
                var j;
                f(e, function (e, f) {
                    var i, k, l, m, n = e.attrName,
                        o = e.optional,
                        q = e.mode;
                    switch (q) {
                        case "@":
                            b.$observe(n, function (a) {
                                c[f] = a
                            }), b.$$observers[n].$$scope = a, b[n] && (c[f] = d(b[n])(a));
                            break;
                        case "=":
                            if (o && !b[n]) return;
                            k = h(b[n]), m = k.literal ? P : function (a, b) {
                                return a === b || a !== a && b !== b
                            }, l = k.assign || function () {
                                throw i = c[f] = k(a), Ce("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", b[n], g.name)
                            }, i = c[f] = k(a);
                            var r = function (b) {
                                return m(b, c[f]) || (m(b, i) ? l(a, b = c[f]) : c[f] = b), i = b
                            };
                            r.$stateful = !0;
                            var s;
                            s = e.collection ? a.$watchCollection(b[n], r) : a.$watch(h(b[n], r), null, k.literal), j = j || [], j.push(s);
                            break;
                        case "&":
                            if (!b.hasOwnProperty(n) && o) break;
                            if (k = h(b[n]), k === p && o) break;
                            c[f] = function (b) {
                                return k(a, b)
                            }
                    }
                });
                var k = j ? function () {
                    for (var a = 0, b = j.length; b > a; ++a) j[a]()
                } : p;
                return i && k !== p ? (i.$on("$destroy", k), p) : k
            }
            var fa = function (a, b) {
                if (b) {
                    var c, d, e, f = Object.keys(b);
                    for (c = 0, d = f.length; d > c; c++) e = f[c], this[e] = b[e]
                } else this.$attr = {};
                this.$$element = a
            };
            fa.prototype = {
                $normalize: ib,
                $addClass: function (a) {
                    a && a.length > 0 && B.addClass(this.$$element, a)
                },
                $removeClass: function (a) {
                    a && a.length > 0 && B.removeClass(this.$$element, a)
                },
                $updateClass: function (a, b) {
                    var c = jb(a, b);
                    c && c.length && B.addClass(this.$$element, c);
                    var d = jb(b, a);
                    d && d.length && B.removeClass(this.$$element, d)
                },
                $set: function (a, b, d, g) {
                    var h, i = this.$$element[0],
                        j = Qa(i, a),
                        k = Ra(i, a),
                        l = a;
                    if (j ? (this.$$element.prop(a, b), g = j) : k && (this[k] = b, l = k), this[a] = b, g ? this.$attr[a] = g : (g = this.$attr[a], g || (this.$attr[a] = g = ia(a, "-"))), h = L(this.$$element), "a" === h && "href" === a || "img" === h && "src" === a) this[a] = b = D(b, "src" === a);
                    else if ("img" === h && "srcset" === a) {
                        for (var m = "", n = Nd(b), o = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, p = /\s/.test(n) ? o : /(,)/, q = n.split(p), r = Math.floor(q.length / 2), s = 0; r > s; s++) {
                            var t = 2 * s;
                            m += D(Nd(q[t]), !0), m += " " + Nd(q[t + 1])
                        }
                        var u = Nd(q[2 * s]).split(/\s/);
                        m += D(Nd(u[0]), !0), 2 === u.length && (m += " " + Nd(u[1])), this[a] = b = m
                    }
                    d !== !1 && (null === b || b === c ? this.$$element.removeAttr(g) : this.$$element.attr(g, b));
                    var v = this.$$observers;
                    v && f(v[l], function (a) {
                        try {
                            a(b)
                        } catch (c) {
                            e(c)
                        }
                    })
                },
                $observe: function (a, b) {
                    var c = this,
                        d = c.$$observers || (c.$$observers = pa()),
                        e = d[a] || (d[a] = []);
                    return e.push(b), r.$evalAsync(function () {
                        !e.$$inter && c.hasOwnProperty(a) && b(c[a])
                    }),
                        function () {
                            M(e, b)
                        }
                }
            };
            var ga = d.startSymbol(),
                ha = d.endSymbol(),
                ja = "{{" == ga || "}}" == ha ? q : function (a) {
                    return a.replace(/\{\{/g, ga).replace(/}}/g, ha)
                },
                la = /^ngAttr[A-Z]/;
            return F.$$addBindingInfo = y ? function (a, b) {
                var c = a.data("$binding") || [];
                Ld(b) ? c = c.concat(b) : c.push(b), a.data("$binding", c)
            } : p, F.$$addBindingClass = y ? function (a) {
                E(a, "ng-binding")
            } : p, F.$$addScopeInfo = y ? function (a, b, c, d) {
                var e = c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                a.data(e, b)
            } : p, F.$$addScopeClass = y ? function (a, b) {
                E(a, b ? "ng-isolate-scope" : "ng-scope")
            } : p, F
        }]
    }

    function ib(a) {
        return va(a.replace(De, ""))
    }

    function jb(a, b) {
        var c = "",
            d = a.split(/\s+/),
            e = b.split(/\s+/);
        a: for (var f = 0; f < d.length; f++) {
            for (var g = d[f], h = 0; h < e.length; h++)
                if (g == e[h]) continue a;
            c += (c.length > 0 ? " " : "") + g
        }
        return c
    }

    function kb(a) {
        a = zd(a);
        var b = a.length;
        if (1 >= b) return a;
        for (; b--;) {
            var c = a[b];
            c.nodeType === Xd && Dd.call(a, b, 1)
        }
        return a
    }

    function lb(a, b) {
        if (b && w(b)) return b;
        if (w(a)) {
            var c = Fe.exec(a);
            if (c) return c[3]
        }
    }

    function mb() {
        var a = {},
            b = !1;
        this.register = function (b, c) {
            ma(b, "controller"), u(b) ? l(a, b) : a[b] = c
        }, this.allowGlobals = function () {
            b = !0
        }, this.$get = ["$injector", "$window", function (e, f) {
            function g(a, b, c, e) {
                if (!a || !u(a.$scope)) throw d("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", e, b);
                a.$scope[b] = c
            }
            return function (d, h, i, j) {
                var k, m, n, o;
                if (i = i === !0, j && w(j) && (o = j), w(d)) {
                    if (m = d.match(Fe), !m) throw Ee("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", d);
                    n = m[1], o = o || m[3], d = a.hasOwnProperty(n) ? a[n] : na(h.$scope, n, !0) || (b ? na(f, n, !0) : c), la(d, n, !0)
                }
                if (i) {
                    var p = (Ld(d) ? d[d.length - 1] : d).prototype;
                    k = Object.create(p || null), o && g(h, o, k, n || d.name);
                    var q;
                    return q = l(function () {
                        var a = e.invoke(d, k, h, n);
                        return a !== k && (u(a) || z(a)) && (k = a, o && g(h, o, k, n || d.name)), k
                    }, {
                        instance: k,
                        identifier: o
                    })
                }
                return k = e.instantiate(d, h, n), o && g(h, o, k, n || d.name), k
            }
        }]
    }

    function nb() {
        this.$get = ["$window", function (a) {
            return zd(a.document)
        }]
    }

    function ob() {
        this.$get = ["$log", function (a) {
            return function (b, c) {
                a.error.apply(a, arguments)
            }
        }]
    }

    function pb(a) {
        return u(a) ? y(a) ? a.toISOString() : U(a) : a
    }

    function qb() {
        this.$get = function () {
            return function (a) {
                if (!a) return "";
                var b = [];
                return g(a, function (a, c) {
                    null === a || s(a) || (Ld(a) ? f(a, function (a, d) {
                        b.push(ca(c) + "=" + ca(pb(a)))
                    }) : b.push(ca(c) + "=" + ca(pb(a))))
                }), b.join("&")
            }
        }
    }

    function rb() {
        this.$get = function () {
            return function (a) {
                function b(a, d, e) {
                    null === a || s(a) || (Ld(a) ? f(a, function (a) {
                        b(a, d + "[]")
                    }) : u(a) && !y(a) ? g(a, function (a, c) {
                        b(a, d + (e ? "" : "[") + c + (e ? "" : "]"))
                    }) : c.push(ca(d) + "=" + ca(pb(a))))
                }
                if (!a) return "";
                var c = [];
                return b(a, "", !0), c.join("&")
            }
        }
    }

    function sb(a, b) {
        if (w(a)) {
            var c = a.replace(Ke, "").trim();
            if (c) {
                var d = b("Content-Type");
                (d && 0 === d.indexOf(Ge) || tb(c)) && (a = V(c))
            }
        }
        return a
    }

    function tb(a) {
        var b = a.match(Ie);
        return b && Je[b[0]].test(a)
    }

    function ub(a) {
        function b(a, b) {
            a && (d[a] = d[a] ? d[a] + ", " + b : b)
        }
        var c, d = pa();
        return w(a) ? f(a.split("\n"), function (a) {
            c = a.indexOf(":"), b(td(Nd(a.substr(0, c))), Nd(a.substr(c + 1)))
        }) : u(a) && f(a, function (a, c) {
            b(td(c), Nd(a))
        }), d
    }

    function vb(a) {
        var b;
        return function (c) {
            if (b || (b = ub(a)), c) {
                var d = b[td(c)];
                return void 0 === d && (d = null), d
            }
            return b
        }
    }

    function wb(a, b, c, d) {
        return z(d) ? d(a, b, c) : (f(d, function (d) {
            a = d(a, b, c)
        }), a)
    }

    function xb(a) {
        return a >= 200 && 300 > a
    }

    function yb() {
        var a = this.defaults = {
            transformResponse: [sb],
            transformRequest: [function (a) {
                return !u(a) || D(a) || F(a) || E(a) ? a : U(a)
            }],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                post: O(He),
                put: O(He),
                patch: O(He)
            },
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            paramSerializer: "$httpParamSerializer"
        },
            b = !1;
        this.useApplyAsync = function (a) {
            return t(a) ? (b = !!a, this) : b
        };
        var e = this.interceptors = [];
        this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function (g, h, i, j, k, m) {
            function n(b) {
                function e(a) {
                    var b = l({}, a);
                    return a.data ? b.data = wb(a.data, a.headers, a.status, i.transformResponse) : b.data = a.data, xb(a.status) ? b : k.reject(b)
                }

                function g(a, b) {
                    var c, d = {};
                    return f(a, function (a, e) {
                        z(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a
                    }), d
                }

                function h(b) {
                    var c, d, e, f = a.headers,
                        h = l({}, b.headers);
                    f = l({}, f.common, f[td(b.method)]);
                    a: for (c in f) {
                        d = td(c);
                        for (e in h)
                            if (td(e) === d) continue a;
                        h[c] = f[c]
                    }
                    return g(h, O(b))
                }
                if (!Id.isObject(b)) throw d("$http")("badreq", "Http request configuration must be an object.  Received: {0}", b);
                var i = l({
                    method: "get",
                    transformRequest: a.transformRequest,
                    transformResponse: a.transformResponse,
                    paramSerializer: a.paramSerializer
                }, b);
                i.headers = h(b), i.method = vd(i.method), i.paramSerializer = w(i.paramSerializer) ? m.get(i.paramSerializer) : i.paramSerializer;
                var j = function (b) {
                    var d = b.headers,
                        g = wb(b.data, vb(d), c, b.transformRequest);
                    return s(g) && f(d, function (a, b) {
                        "content-type" === td(b) && delete d[b]
                    }), s(b.withCredentials) && !s(a.withCredentials) && (b.withCredentials = a.withCredentials), q(b, g).then(e, e)
                },
                    n = [j, c],
                    o = k.when(i);
                for (f(x, function (a) {
                    (a.request || a.requestError) && n.unshift(a.request, a.requestError), (a.response || a.responseError) && n.push(a.response, a.responseError)
                }); n.length;) {
                    var p = n.shift(),
                        r = n.shift();
                    o = o.then(p, r)
                }
                return o.success = function (a) {
                    return la(a, "fn"), o.then(function (b) {
                        a(b.data, b.status, b.headers, i)
                    }), o
                }, o.error = function (a) {
                    return la(a, "fn"), o.then(null, function (b) {
                        a(b.data, b.status, b.headers, i)
                    }), o
                }, o
            }

            function o(a) {
                f(arguments, function (a) {
                    n[a] = function (b, c) {
                        return n(l({}, c || {}, {
                            method: a,
                            url: b
                        }))
                    }
                })
            }

            function p(a) {
                f(arguments, function (a) {
                    n[a] = function (b, c, d) {
                        return n(l({}, d || {}, {
                            method: a,
                            url: b,
                            data: c
                        }))
                    }
                })
            }

            function q(d, e) {
                function f(a, c, d, e) {
                    function f() {
                        i(c, a, d, e)
                    }
                    o && (xb(a) ? o.put(y, [a, c, ub(d), e]) : o.remove(y)), b ? j.$applyAsync(f) : (f(), j.$$phase || j.$apply())
                }

                function i(a, b, c, e) {
                    b = Math.max(b, 0), (xb(b) ? q.resolve : q.reject)({
                        data: a,
                        status: b,
                        headers: vb(c),
                        config: d,
                        statusText: e
                    })
                }

                function l(a) {
                    i(a.data, a.status, O(a.headers()), a.statusText)
                }

                function m() {
                    var a = n.pendingRequests.indexOf(d); - 1 !== a && n.pendingRequests.splice(a, 1)
                }
                var o, p, q = k.defer(),
                    w = q.promise,
                    x = d.headers,
                    y = r(d.url, d.paramSerializer(d.params));
                if (n.pendingRequests.push(d), w.then(m, m), !d.cache && !a.cache || d.cache === !1 || "GET" !== d.method && "JSONP" !== d.method || (o = u(d.cache) ? d.cache : u(a.cache) ? a.cache : v), o && (p = o.get(y), t(p) ? H(p) ? p.then(l, l) : Ld(p) ? i(p[1], p[0], O(p[2]), p[3]) : i(p, 200, {}, "OK") : o.put(y, w)), s(p)) {
                    var z = zc(d.url) ? h()[d.xsrfCookieName || a.xsrfCookieName] : c;
                    z && (x[d.xsrfHeaderName || a.xsrfHeaderName] = z), g(d.method, y, e, f, x, d.timeout, d.withCredentials, d.responseType)
                }
                return w
            }

            function r(a, b) {
                return b.length > 0 && (a += (-1 == a.indexOf("?") ? "?" : "&") + b), a
            }
            var v = i("$http");
            a.paramSerializer = w(a.paramSerializer) ? m.get(a.paramSerializer) : a.paramSerializer;
            var x = [];
            return f(e, function (a) {
                x.unshift(w(a) ? m.get(a) : m.invoke(a))
            }), n.pendingRequests = [], o("get", "delete", "head", "jsonp"), p("post", "put", "patch"), n.defaults = a, n
        }]
    }

    function zb() {
        return new a.XMLHttpRequest
    }

    function Ab() {
        this.$get = ["$browser", "$window", "$document", function (a, b, c) {
            return Bb(a, zb, a.defer, b.angular.callbacks, c[0])
        }]
    }

    function Bb(a, b, d, e, g) {
        function h(a, b, c) {
            var d = g.createElement("script"),
                f = null;
            return d.type = "text/javascript", d.src = a, d.async = !0, f = function (a) {
                ce(d, "load", f), ce(d, "error", f), g.body.removeChild(d), d = null;
                var h = -1,
                    i = "unknown";
                a && ("load" !== a.type || e[b].called || (a = {
                    type: "error"
                }), i = a.type, h = "error" === a.type ? 404 : 200), c && c(h, i)
            }, be(d, "load", f), be(d, "error", f), g.body.appendChild(d), f
        }
        return function (g, i, j, k, l, m, n, o) {
            function q() {
                u && u(), v && v.abort()
            }

            function r(b, e, f, g, h) {
                y !== c && d.cancel(y), u = v = null, b(e, f, g, h), a.$$completeOutstandingRequest(p)
            }
            if (a.$$incOutstandingRequestCount(), i = i || a.url(), "jsonp" == td(g)) {
                var s = "_" + (e.counter++).toString(36);
                e[s] = function (a) {
                    e[s].data = a, e[s].called = !0
                };
                var u = h(i.replace("JSON_CALLBACK", "angular.callbacks." + s), s, function (a, b) {
                    r(k, a, e[s].data, "", b), e[s] = p
                })
            } else {
                var v = b();
                v.open(g, i, !0), f(l, function (a, b) {
                    t(a) && v.setRequestHeader(b, a)
                }), v.onload = function () {
                    var a = v.statusText || "",
                        b = "response" in v ? v.response : v.responseText,
                        c = 1223 === v.status ? 204 : v.status;
                    0 === c && (c = b ? 200 : "file" == yc(i).protocol ? 404 : 0), r(k, c, b, v.getAllResponseHeaders(), a)
                };
                var w = function () {
                    r(k, -1, null, null, "")
                };
                if (v.onerror = w, v.onabort = w, n && (v.withCredentials = !0), o) try {
                    v.responseType = o
                } catch (x) {
                    if ("json" !== o) throw x
                }
                v.send(j)
            }
            if (m > 0) var y = d(q, m);
            else H(m) && m.then(q)
        }
    }

    function Cb() {
        var a = "{{",
            b = "}}";
        this.startSymbol = function (b) {
            return b ? (a = b, this) : a
        }, this.endSymbol = function (a) {
            return a ? (b = a, this) : b
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function (c, d, e) {
            function f(a) {
                return "\\\\\\" + a
            }

            function g(c) {
                return c.replace(m, a).replace(n, b)
            }

            function h(a) {
                if (null == a) return "";
                switch (typeof a) {
                    case "string":
                        break;
                    case "number":
                        a = "" + a;
                        break;
                    default:
                        a = U(a)
                }
                return a
            }

            function i(f, i, m, n) {
                function o(a) {
                    try {
                        return a = C(a), n && !t(a) ? a : h(a)
                    } catch (b) {
                        d(Le.interr(f, b))
                    }
                }
                n = !!n;
                for (var p, q, r, u = 0, v = [], w = [], x = f.length, y = [], A = []; x > u;) {
                    if (-1 == (p = f.indexOf(a, u)) || -1 == (q = f.indexOf(b, p + j))) {
                        u !== x && y.push(g(f.substring(u)));
                        break
                    }
                    u !== p && y.push(g(f.substring(u, p))), r = f.substring(p + j, q), v.push(r), w.push(c(r, o)), u = q + k, A.push(y.length), y.push("")
                }
                if (m && y.length > 1 && Le.throwNoconcat(f), !i || v.length) {
                    var B = function (a) {
                        for (var b = 0, c = v.length; c > b; b++) {
                            if (n && s(a[b])) return;
                            y[A[b]] = a[b]
                        }
                        return y.join("")
                    },
                        C = function (a) {
                            return m ? e.getTrusted(m, a) : e.valueOf(a)
                        };
                    return l(function (a) {
                        var b = 0,
                            c = v.length,
                            e = new Array(c);
                        try {
                            for (; c > b; b++) e[b] = w[b](a);
                            return B(e)
                        } catch (g) {
                            d(Le.interr(f, g))
                        }
                    }, {
                        exp: f,
                        expressions: v,
                        $$watchDelegate: function (a, b) {
                            var c;
                            return a.$watchGroup(w, function (d, e) {
                                var f = B(d);
                                z(b) && b.call(this, f, d !== e ? c : f, a), c = f
                            })
                        }
                    })
                }
            }
            var j = a.length,
                k = b.length,
                m = new RegExp(a.replace(/./g, f), "g"),
                n = new RegExp(b.replace(/./g, f), "g");
            return i.startSymbol = function () {
                return a
            }, i.endSymbol = function () {
                return b
            }, i
        }]
    }

    function Db() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", function (a, b, c, d) {
            function e(e, g, h, i) {
                var j = arguments.length > 4,
                    k = j ? R(arguments, 4) : [],
                    l = b.setInterval,
                    m = b.clearInterval,
                    n = 0,
                    o = t(i) && !i,
                    p = (o ? d : c).defer(),
                    q = p.promise;
                return h = t(h) ? h : 0, q.then(null, null, j ? function () {
                    e.apply(null, k)
                } : e), q.$$intervalId = l(function () {
                    p.notify(n++), h > 0 && n >= h && (p.resolve(n), m(q.$$intervalId), delete f[q.$$intervalId]), o || a.$apply()
                }, g), f[q.$$intervalId] = p, q
            }
            var f = {};
            return e.cancel = function (a) {
                return a && a.$$intervalId in f ? (f[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete f[a.$$intervalId], !0) : !1
            }, e
        }]
    }

    function Eb() {
        this.$get = function () {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                    SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                    DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                    SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a",
                    ERANAMES: ["Before Christ", "Anno Domini"],
                    ERAS: ["BC", "AD"]
                },
                pluralCat: function (a) {
                    return 1 === a ? "one" : "other"
                }
            }
        }
    }

    function Fb(a) {
        for (var b = a.split("/"), c = b.length; c--;) b[c] = ba(b[c]);
        return b.join("/")
    }

    function Gb(a, b) {
        var c = yc(a);
        b.$$protocol = c.protocol, b.$$host = c.hostname, b.$$port = n(c.port) || Ne[c.protocol] || null
    }

    function Hb(a, b) {
        var c = "/" !== a.charAt(0);
        c && (a = "/" + a);
        var d = yc(a);
        b.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname), b.$$search = _(d.search), b.$$hash = decodeURIComponent(d.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
    }

    function Ib(a, b) {
        return 0 === b.indexOf(a) ? b.substr(a.length) : void 0
    }

    function Jb(a) {
        var b = a.indexOf("#");
        return -1 == b ? a : a.substr(0, b)
    }

    function Kb(a) {
        return a.replace(/(#.+)|#$/, "$1")
    }

    function Lb(a) {
        return a.substr(0, Jb(a).lastIndexOf("/") + 1)
    }

    function Mb(a) {
        return a.substring(0, a.indexOf("/", a.indexOf("//") + 2))
    }

    function Nb(a, b) {
        this.$$html5 = !0, b = b || "";
        var d = Lb(a);
        Gb(a, this), this.$$parse = function (a) {
            var b = Ib(d, a);
            if (!w(b)) throw Oe("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', a, d);
            Hb(b, this), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function () {
            var a = aa(this.$$search),
                b = this.$$hash ? "#" + ba(this.$$hash) : "";
            this.$$url = Fb(this.$$path) + (a ? "?" + a : "") + b, this.$$absUrl = d + this.$$url.substr(1)
        }, this.$$parseLinkUrl = function (e, f) {
            if (f && "#" === f[0]) return this.hash(f.slice(1)), !0;
            var g, h, i;
            return (g = Ib(a, e)) !== c ? (h = g, i = (g = Ib(b, g)) !== c ? d + (Ib("/", g) || g) : a + h) : (g = Ib(d, e)) !== c ? i = d + g : d == e + "/" && (i = d), i && this.$$parse(i), !!i
        }
    }

    function Ob(a, b) {
        var c = Lb(a);
        Gb(a, this), this.$$parse = function (d) {
            function e(a, b, c) {
                var d, e = /^\/[A-Z]:(\/.*)/;
                return 0 === b.indexOf(c) && (b = b.replace(c, "")), e.exec(b) ? a : (d = e.exec(a), d ? d[1] : a)
            }
            var f, g = Ib(a, d) || Ib(c, d);
            "#" === g.charAt(0) ? (f = Ib(b, g), s(f) && (f = g)) : f = this.$$html5 ? g : "", Hb(f, this), this.$$path = e(this.$$path, f, a), this.$$compose()
        }, this.$$compose = function () {
            var c = aa(this.$$search),
                d = this.$$hash ? "#" + ba(this.$$hash) : "";
            this.$$url = Fb(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + (this.$$url ? b + this.$$url : "")
        }, this.$$parseLinkUrl = function (b, c) {
            return Jb(a) == Jb(b) ? (this.$$parse(b), !0) : !1
        }
    }

    function Pb(a, b) {
        this.$$html5 = !0, Ob.apply(this, arguments);
        var c = Lb(a);
        this.$$parseLinkUrl = function (d, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g;
            return a == Jb(d) ? f = d : (g = Ib(c, d)) ? f = a + b + g : c === d + "/" && (f = c), f && this.$$parse(f), !!f
        }, this.$$compose = function () {
            var c = aa(this.$$search),
                d = this.$$hash ? "#" + ba(this.$$hash) : "";
            this.$$url = Fb(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + b + this.$$url
        }
    }

    function Qb(a) {
        return function () {
            return this[a]
        }
    }

    function Rb(a, b) {
        return function (c) {
            return s(c) ? this[a] : (this[a] = b(c), this.$$compose(), this)
        }
    }

    function Sb() {
        var a = "",
            b = {
                enabled: !1,
                requireBase: !0,
                rewriteLinks: !0
            };
        this.hashPrefix = function (b) {
            return t(b) ? (a = b, this) : a
        }, this.html5Mode = function (a) {
            return G(a) ? (b.enabled = a, this) : u(a) ? (G(a.enabled) && (b.enabled = a.enabled), G(a.requireBase) && (b.requireBase = a.requireBase), G(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (c, d, e, f, g) {
            function h(a, b, c) {
                var e = j.url(),
                    f = j.$$state;
                try {
                    d.url(a, b, c), j.$$state = d.state()
                } catch (g) {
                    throw j.url(e), j.$$state = f, g
                }
            }

            function i(a, b) {
                c.$broadcast("$locationChangeSuccess", j.absUrl(), a, j.$$state, b)
            }
            var j, k, l, m = d.baseHref(),
                n = d.url();
            if (b.enabled) {
                if (!m && b.requireBase) throw Oe("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                l = Mb(n) + (m || "/"), k = e.history ? Nb : Pb
            } else l = Jb(n), k = Ob;
            j = new k(l, "#" + a), j.$$parseLinkUrl(n, n), j.$$state = d.state();
            var o = /^\s*(javascript|mailto):/i;
            f.on("click", function (a) {
                if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
                    for (var e = zd(a.target);
                        "a" !== L(e[0]);)
                        if (e[0] === f[0] || !(e = e.parent())[0]) return;
                    var h = e.prop("href"),
                        i = e.attr("href") || e.attr("xlink:href");
                    u(h) && "[object SVGAnimatedString]" === h.toString() && (h = yc(h.animVal).href), o.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || j.$$parseLinkUrl(h, i) && (a.preventDefault(), j.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0))
                }
            }), Kb(j.absUrl()) != Kb(n) && d.url(j.absUrl(), !0);
            var p = !0;
            return d.onUrlChange(function (a, b) {
                c.$evalAsync(function () {
                    var d, e = j.absUrl(),
                        f = j.$$state;
                    j.$$parse(a), j.$$state = b, d = c.$broadcast("$locationChangeStart", a, e, b, f).defaultPrevented, j.absUrl() === a && (d ? (j.$$parse(e), j.$$state = f, h(e, !1, f)) : (p = !1, i(e, f)))
                }), c.$$phase || c.$digest()
            }), c.$watch(function () {
                var a = Kb(d.url()),
                    b = Kb(j.absUrl()),
                    f = d.state(),
                    g = j.$$replace,
                    k = a !== b || j.$$html5 && e.history && f !== j.$$state;
                (p || k) && (p = !1, c.$evalAsync(function () {
                    var b = j.absUrl(),
                        d = c.$broadcast("$locationChangeStart", b, a, j.$$state, f).defaultPrevented;
                    j.absUrl() === b && (d ? (j.$$parse(a), j.$$state = f) : (k && h(b, g, f === j.$$state ? null : j.$$state), i(a, f)))
                })), j.$$replace = !1
            }), j
        }]
    }

    function Tb() {
        var a = !0,
            b = this;
        this.debugEnabled = function (b) {
            return t(b) ? (a = b, this) : a
        }, this.$get = ["$window", function (c) {
            function d(a) {
                return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), a
            }

            function e(a) {
                var b = c.console || {},
                    e = b[a] || b.log || p,
                    g = !1;
                try {
                    g = !!e.apply
                } catch (h) { }
                return g ? function () {
                    var a = [];
                    return f(arguments, function (b) {
                        a.push(d(b))
                    }), e.apply(b, a)
                } : function (a, b) {
                    e(a, null == b ? "" : b)
                }
            }
            return {
                log: e("log"),
                info: e("info"),
                warn: e("warn"),
                error: e("error"),
                debug: function () {
                    var c = e("debug");
                    return function () {
                        a && c.apply(b, arguments)
                    }
                }()
            }
        }]
    }

    function Ub(a, b) {
        if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a) throw Qe("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", b);
        return a
    }

    function Vb(a, b) {
        if (a) {
            if (a.constructor === a) throw Qe("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
            if (a.window === a) throw Qe("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", b);
            if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw Qe("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", b);
            if (a === Object) throw Qe("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", b)
        }
        return a
    }

    function Wb(a, b) {
        if (a) {
            if (a.constructor === a) throw Qe("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
            if (a === Re || a === Se || a === Te) throw Qe("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", b)
        }
    }

    function Xb(a, b) {
        return "undefined" != typeof a ? a : b
    }

    function Yb(a, b) {
        return "undefined" == typeof a ? b : "undefined" == typeof b ? a : a + b
    }

    function Zb(a, b) {
        var c = a(b);
        return !c.$stateful
    }

    function $b(a, b) {
        var c, d;
        switch (a.type) {
            case Xe.Program:
                c = !0, f(a.body, function (a) {
                    $b(a.expression, b), c = c && a.expression.constant
                }), a.constant = c;
                break;
            case Xe.Literal:
                a.constant = !0, a.toWatch = [];
                break;
            case Xe.UnaryExpression:
                $b(a.argument, b), a.constant = a.argument.constant, a.toWatch = a.argument.toWatch;
                break;
            case Xe.BinaryExpression:
                $b(a.left, b), $b(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = a.left.toWatch.concat(a.right.toWatch);
                break;
            case Xe.LogicalExpression:
                $b(a.left, b), $b(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = a.constant ? [] : [a];
                break;
            case Xe.ConditionalExpression:
                $b(a.test, b), $b(a.alternate, b), $b(a.consequent, b), a.constant = a.test.constant && a.alternate.constant && a.consequent.constant, a.toWatch = a.constant ? [] : [a];
                break;
            case Xe.Identifier:
                a.constant = !1, a.toWatch = [a];
                break;
            case Xe.MemberExpression:
                $b(a.object, b), a.computed && $b(a.property, b), a.constant = a.object.constant && (!a.computed || a.property.constant), a.toWatch = [a];
                break;
            case Xe.CallExpression:
                c = a.filter ? Zb(b, a.callee.name) : !1, d = [], f(a.arguments, function (a) {
                    $b(a, b), c = c && a.constant, a.constant || d.push.apply(d, a.toWatch)
                }), a.constant = c, a.toWatch = a.filter && Zb(b, a.callee.name) ? d : [a];
                break;
            case Xe.AssignmentExpression:
                $b(a.left, b), $b(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = [a];
                break;
            case Xe.ArrayExpression:
                c = !0, d = [], f(a.elements, function (a) {
                    $b(a, b), c = c && a.constant, a.constant || d.push.apply(d, a.toWatch)
                }), a.constant = c, a.toWatch = d;
                break;
            case Xe.ObjectExpression:
                c = !0, d = [], f(a.properties, function (a) {
                    $b(a.value, b), c = c && a.value.constant, a.value.constant || d.push.apply(d, a.value.toWatch)
                }), a.constant = c, a.toWatch = d;
                break;
            case Xe.ThisExpression:
                a.constant = !1, a.toWatch = []
        }
    }

    function _b(a) {
        if (1 == a.length) {
            var b = a[0].expression,
                d = b.toWatch;
            return 1 !== d.length ? d : d[0] !== b ? d : c
        }
    }

    function ac(a) {
        return a.type === Xe.Identifier || a.type === Xe.MemberExpression
    }

    function bc(a) {
        return 1 === a.body.length && ac(a.body[0].expression) ? {
            type: Xe.AssignmentExpression,
            left: a.body[0].expression,
            right: {
                type: Xe.NGValueParameter
            },
            operator: "="
        } : void 0
    }

    function cc(a) {
        return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === Xe.Literal || a.body[0].expression.type === Xe.ArrayExpression || a.body[0].expression.type === Xe.ObjectExpression)
    }

    function dc(a) {
        return a.constant
    }

    function ec(a, b) {
        this.astBuilder = a, this.$filter = b
    }

    function fc(a, b) {
        this.astBuilder = a, this.$filter = b
    }

    function gc(a, b, c, d) {
        Vb(a, d);
        for (var e, f = b.split("."), g = 0; f.length > 1; g++) {
            e = Ub(f.shift(), d);
            var h = Vb(a[e], d);
            h || (h = {}, a[e] = h), a = h
        }
        return e = Ub(f.shift(), d), Vb(a[e], d), a[e] = c, c
    }

    function hc(a) {
        return "constructor" == a
    }

    function ic(a) {
        return z(a.valueOf) ? a.valueOf() : Ze.call(a)
    }

    function jc() {
        var a = pa(),
            b = pa();
        this.$get = ["$filter", "$sniffer", function (d, e) {
            function g(a, b) {
                return null == a || null == b ? a === b : "object" == typeof a && (a = ic(a), "object" == typeof a) ? !1 : a === b || a !== a && b !== b
            }

            function h(a, b, d, e, f) {
                var h, i = e.inputs;
                if (1 === i.length) {
                    var j = g;
                    return i = i[0], a.$watch(function (a) {
                        var b = i(a);
                        return g(b, j) || (h = e(a, c, c, [b]), j = b && ic(b)), h
                    }, b, d, f)
                }
                for (var k = [], l = [], m = 0, n = i.length; n > m; m++) k[m] = g, l[m] = null;
                return a.$watch(function (a) {
                    for (var b = !1, d = 0, f = i.length; f > d; d++) {
                        var j = i[d](a);
                        (b || (b = !g(j, k[d]))) && (l[d] = j, k[d] = j && ic(j))
                    }
                    return b && (h = e(a, c, c, l)), h
                }, b, d, f)
            }

            function i(a, b, c, d) {
                var e, f;
                return e = a.$watch(function (a) {
                    return d(a)
                }, function (a, c, d) {
                    f = a, z(b) && b.apply(this, arguments), t(a) && d.$$postDigest(function () {
                        t(f) && e()
                    })
                }, c)
            }

            function j(a, b, c, d) {
                function e(a) {
                    var b = !0;
                    return f(a, function (a) {
                        t(a) || (b = !1)
                    }), b
                }
                var g, h;
                return g = a.$watch(function (a) {
                    return d(a)
                }, function (a, c, d) {
                    h = a, z(b) && b.call(this, a, c, d), e(a) && d.$$postDigest(function () {
                        e(h) && g()
                    })
                }, c)
            }

            function k(a, b, c, d) {
                var e;
                return e = a.$watch(function (a) {
                    return d(a)
                }, function (a, c, d) {
                    z(b) && b.apply(this, arguments), e()
                }, c)
            }

            function l(a, b) {
                if (!b) return a;
                var c = a.$$watchDelegate,
                    d = c !== j && c !== i,
                    e = d ? function (c, d, e, f) {
                        var g = a(c, d, e, f);
                        return b(g, c, d)
                    } : function (c, d, e, f) {
                        var g = a(c, d, e, f),
                            h = b(g, c, d);
                        return t(g) ? h : g
                    };
                return a.$$watchDelegate && a.$$watchDelegate !== h ? e.$$watchDelegate = a.$$watchDelegate : b.$stateful || (e.$$watchDelegate = h, e.inputs = a.inputs ? a.inputs : [a]), e
            }
            var m = {
                csp: e.csp,
                expensiveChecks: !1
            },
                n = {
                    csp: e.csp,
                    expensiveChecks: !0
                };
            return function (c, e, f) {
                var g, o, q;
                switch (typeof c) {
                    case "string":
                        c = c.trim(), q = c;
                        var r = f ? b : a;
                        if (g = r[q], !g) {
                            ":" === c.charAt(0) && ":" === c.charAt(1) && (o = !0, c = c.substring(2));
                            var s = f ? n : m,
                                t = new We(s),
                                u = new Ye(t, d, s);
                            g = u.parse(c), g.constant ? g.$$watchDelegate = k : o ? g.$$watchDelegate = g.literal ? j : i : g.inputs && (g.$$watchDelegate = h), r[q] = g
                        }
                        return l(g, e);
                    case "function":
                        return l(c, e);
                    default:
                        return p
                }
            }
        }]
    }

    function kc() {
        this.$get = ["$rootScope", "$exceptionHandler", function (a, b) {
            return mc(function (b) {
                a.$evalAsync(b)
            }, b)
        }]
    }

    function lc() {
        this.$get = ["$browser", "$exceptionHandler", function (a, b) {
            return mc(function (b) {
                a.defer(b)
            }, b)
        }]
    }

    function mc(a, b) {
        function e(a, b, c) {
            function d(b) {
                return function (c) {
                    e || (e = !0, b.call(a, c))
                }
            }
            var e = !1;
            return [d(b), d(c)]
        }

        function g() {
            this.$$state = {
                status: 0
            }
        }

        function h(a, b) {
            return function (c) {
                b.call(a, c)
            }
        }

        function i(a) {
            var d, e, f;
            f = a.pending, a.processScheduled = !1, a.pending = c;
            for (var g = 0, h = f.length; h > g; ++g) {
                e = f[g][0], d = f[g][a.status];
                try {
                    z(d) ? e.resolve(d(a.value)) : 1 === a.status ? e.resolve(a.value) : e.reject(a.value)
                } catch (i) {
                    e.reject(i), b(i)
                }
            }
        }

        function j(b) {
            !b.processScheduled && b.pending && (b.processScheduled = !0, a(function () {
                i(b)
            }))
        }

        function k() {
            this.promise = new g, this.resolve = h(this, this.resolve), this.reject = h(this, this.reject), this.notify = h(this, this.notify)
        }

        function l(a) {
            var b = new k,
                c = 0,
                d = Ld(a) ? [] : {};
            return f(a, function (a, e) {
                c++ , r(a).then(function (a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                }, function (a) {
                    d.hasOwnProperty(e) || b.reject(a)
                })
            }), 0 === c && b.resolve(d), b.promise
        }
        var m = d("$q", TypeError),
            n = function () {
                return new k
            };
        g.prototype = {
            then: function (a, b, c) {
                var d = new k;
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([d, a, b, c]), this.$$state.status > 0 && j(this.$$state), d.promise
            },
            "catch": function (a) {
                return this.then(null, a)
            },
            "finally": function (a, b) {
                return this.then(function (b) {
                    return q(b, !0, a)
                }, function (b) {
                    return q(b, !1, a)
                }, b)
            }
        }, k.prototype = {
            resolve: function (a) {
                this.promise.$$state.status || (a === this.promise ? this.$$reject(m("qcycle", "Expected promise to be resolved with value other than itself '{0}'", a)) : this.$$resolve(a))
            },
            $$resolve: function (a) {
                var c, d;
                d = e(this, this.$$resolve, this.$$reject);
                try {
                    (u(a) || z(a)) && (c = a && a.then), z(c) ? (this.promise.$$state.status = -1, c.call(a, d[0], d[1], this.notify)) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, j(this.promise.$$state))
                } catch (f) {
                    d[1](f), b(f)
                }
            },
            reject: function (a) {
                this.promise.$$state.status || this.$$reject(a)
            },
            $$reject: function (a) {
                this.promise.$$state.value = a, this.promise.$$state.status = 2, j(this.promise.$$state)
            },
            notify: function (c) {
                var d = this.promise.$$state.pending;
                this.promise.$$state.status <= 0 && d && d.length && a(function () {
                    for (var a, e, f = 0, g = d.length; g > f; f++) {
                        e = d[f][0], a = d[f][3];
                        try {
                            e.notify(z(a) ? a(c) : c)
                        } catch (h) {
                            b(h)
                        }
                    }
                })
            }
        };
        var o = function (a) {
            var b = new k;
            return b.reject(a), b.promise
        },
            p = function (a, b) {
                var c = new k;
                return b ? c.resolve(a) : c.reject(a), c.promise
            },
            q = function (a, b, c) {
                var d = null;
                try {
                    z(c) && (d = c())
                } catch (e) {
                    return p(e, !1)
                }
                return H(d) ? d.then(function () {
                    return p(a, b)
                }, function (a) {
                    return p(a, !1)
                }) : p(a, b)
            },
            r = function (a, b, c, d) {
                var e = new k;
                return e.resolve(a), e.promise.then(b, c, d)
            },
            s = function t(a) {
                function b(a) {
                    d.resolve(a)
                }

                function c(a) {
                    d.reject(a)
                }
                if (!z(a)) throw m("norslvr", "Expected resolverFn, got '{0}'", a);
                if (!(this instanceof t)) return new t(a);
                var d = new k;
                return a(b, c), d.promise
            };
        return s.defer = n, s.reject = o, s.when = r, s.all = l, s
    }

    function nc() {
        this.$get = ["$window", "$timeout", function (a, b) {
            function c() {
                for (var a = 0; a < k.length; a++) {
                    var b = k[a];
                    b && (k[a] = null, b())
                }
                j = k.length = 0
            }

            function d(a) {
                var b = k.length;
                return j++ , k.push(a), 0 === b && (i = h(c)),
                    function () {
                        b >= 0 && (k[b] = null, b = null, 0 === --j && i && (i(), i = null, k.length = 0))
                    }
            }
            var e = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
                f = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
                g = !!e,
                h = g ? function (a) {
                    var b = e(a);
                    return function () {
                        f(b)
                    }
                } : function (a) {
                    var c = b(a, 16.66, !1);
                    return function () {
                        b.cancel(c)
                    }
                };
            d.supported = g;
            var i, j = 0,
                k = [];
            return d
        }]
    }

    function oc() {
        function a(a) {
            function b() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = i(), this.$$ChildScope = null
            }
            return b.prototype = a, b
        }
        var b = 10,
            c = d("$rootScope"),
            g = null,
            h = null;
        this.digestTtl = function (a) {
            return arguments.length && (b = a), b
        }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (d, j, k, l) {
            function m(a) {
                a.currentScope.$$destroyed = !0
            }

            function n() {
                this.$id = i(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
            }

            function o(a) {
                if (y.$$phase) throw c("inprog", "{0} already in progress", y.$$phase);
                y.$$phase = a
            }

            function q() {
                y.$$phase = null
            }

            function r(a, b) {
                do a.$$watchersCount += b; while (a = a.$parent)
            }

            function t(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
            }

            function v() { }

            function w() {
                for (; C.length;) try {
                    C.shift()()
                } catch (a) {
                    j(a)
                }
                h = null
            }

            function x() {
                null === h && (h = l.defer(function () {
                    y.$apply(w)
                }))
            }
            n.prototype = {
                constructor: n,
                $new: function (b, c) {
                    var d;
                    return c = c || this, b ? (d = new n, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope), d.$parent = c, d.$$prevSibling = c.$$childTail, c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d, (b || c != this) && d.$on("$destroy", m), d
                },
                $watch: function (a, b, c, d) {
                    var e = k(a);
                    if (e.$$watchDelegate) return e.$$watchDelegate(this, b, c, e, a);
                    var f = this,
                        h = f.$$watchers,
                        i = {
                            fn: b,
                            last: v,
                            get: e,
                            exp: d || a,
                            eq: !!c
                        };
                    return g = null, z(b) || (i.fn = p), h || (h = f.$$watchers = []), h.unshift(i), r(this, 1),
                        function () {
                            M(h, i) >= 0 && r(f, -1), g = null
                        }
                },
                $watchGroup: function (a, b) {
                    function c() {
                        i = !1, j ? (j = !1, b(e, e, h)) : b(e, d, h)
                    }
                    var d = new Array(a.length),
                        e = new Array(a.length),
                        g = [],
                        h = this,
                        i = !1,
                        j = !0;
                    if (!a.length) {
                        var k = !0;
                        return h.$evalAsync(function () {
                            k && b(e, e, h)
                        }),
                            function () {
                                k = !1
                            }
                    }
                    return 1 === a.length ? this.$watch(a[0], function (a, c, f) {
                        e[0] = a, d[0] = c, b(e, a === c ? e : d, f)
                    }) : (f(a, function (a, b) {
                        var f = h.$watch(a, function (a, f) {
                            e[b] = a, d[b] = f, i || (i = !0, h.$evalAsync(c))
                        });
                        g.push(f)
                    }), function () {
                        for (; g.length;) g.shift()()
                    })
                },
                $watchCollection: function (a, b) {
                    function c(a) {
                        f = a;
                        var b, c, d, h, i;
                        if (!s(f)) {
                            if (u(f))
                                if (e(f)) {
                                    g !== n && (g = n, q = g.length = 0, l++), b = f.length, q !== b && (l++ , g.length = q = b);
                                    for (var j = 0; b > j; j++) i = g[j], h = f[j], d = i !== i && h !== h, d || i === h || (l++ , g[j] = h)
                                } else {
                                    g !== o && (g = o = {}, q = 0, l++), b = 0;
                                    for (c in f) f.hasOwnProperty(c) && (b++ , h = f[c], i = g[c], c in g ? (d = i !== i && h !== h, d || i === h || (l++ , g[c] = h)) : (q++ , g[c] = h, l++));
                                    if (q > b) {
                                        l++;
                                        for (c in g) f.hasOwnProperty(c) || (q-- , delete g[c])
                                    }
                                } else g !== f && (g = f, l++);
                            return l
                        }
                    }

                    function d() {
                        if (p ? (p = !1, b(f, f, i)) : b(f, h, i), j)
                            if (u(f))
                                if (e(f)) {
                                    h = new Array(f.length);
                                    for (var a = 0; a < f.length; a++) h[a] = f[a]
                                } else {
                                    h = {};
                                    for (var c in f) ud.call(f, c) && (h[c] = f[c])
                                } else h = f
                    }
                    c.$stateful = !0;
                    var f, g, h, i = this,
                        j = b.length > 1,
                        l = 0,
                        m = k(a, c),
                        n = [],
                        o = {},
                        p = !0,
                        q = 0;
                    return this.$watch(m, d)
                },
                $digest: function () {
                    var a, d, e, f, i, k, m, n, p, r, s = b,
                        t = this,
                        u = [];
                    o("$digest"), l.$$checkUrlChange(), this === y && null !== h && (l.defer.cancel(h), w()), g = null;
                    do {
                        for (k = !1, n = t; A.length;) {
                            try {
                                r = A.shift(), r.scope.$eval(r.expression, r.locals)
                            } catch (x) {
                                j(x)
                            }
                            g = null
                        }
                        a: do {
                            if (f = n.$$watchers)
                                for (i = f.length; i--;) try {
                                    if (a = f[i])
                                        if ((d = a.get(n)) === (e = a.last) || (a.eq ? P(d, e) : "number" == typeof d && "number" == typeof e && isNaN(d) && isNaN(e))) {
                                            if (a === g) {
                                                k = !1;
                                                break a
                                            }
                                        } else k = !0, g = a, a.last = a.eq ? N(d, null) : d, a.fn(d, e === v ? d : e, n), 5 > s && (p = 4 - s, u[p] || (u[p] = []), u[p].push({
                                            msg: z(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                                            newVal: d,
                                            oldVal: e
                                        }))
                                } catch (x) {
                                    j(x)
                                }
                            if (!(m = n.$$watchersCount && n.$$childHead || n !== t && n.$$nextSibling))
                                for (; n !== t && !(m = n.$$nextSibling);) n = n.$parent
                        } while (n = m);
                        if ((k || A.length) && !s--) throw q(), c("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", b, u)
                    } while (k || A.length);
                    for (q(); B.length;) try {
                        B.shift()()
                    } catch (x) {
                        j(x)
                    }
                },
                $destroy: function () {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0, this === y && l.$$applicationDestroyed(), r(this, -this.$$watchersCount);
                        for (var b in this.$$listenerCount) t(this, this.$$listenerCount[b], b);
                        a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = p, this.$on = this.$watch = this.$watchGroup = function () {
                            return p
                        }, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
                    }
                },
                $eval: function (a, b) {
                    return k(a)(this, b)
                },
                $evalAsync: function (a, b) {
                    y.$$phase || A.length || l.defer(function () {
                        A.length && y.$digest()
                    }), A.push({
                        scope: this,
                        expression: a,
                        locals: b
                    })
                },
                $$postDigest: function (a) {
                    B.push(a)
                },
                $apply: function (a) {
                    try {
                        return o("$apply"), this.$eval(a)
                    } catch (b) {
                        j(b)
                    } finally {
                        q();
                        try {
                            y.$digest()
                        } catch (b) {
                            throw j(b), b
                        }
                    }
                },
                $applyAsync: function (a) {
                    function b() {
                        c.$eval(a)
                    }
                    var c = this;
                    a && C.push(b), x()
                },
                $on: function (a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []), c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                    var e = this;
                    return function () {
                        var d = c.indexOf(b); - 1 !== d && (c[d] = null, t(e, 1, a))
                    }
                },
                $emit: function (a, b) {
                    var c, d, e, f = [],
                        g = this,
                        h = !1,
                        i = {
                            name: a,
                            targetScope: g,
                            stopPropagation: function () {
                                h = !0
                            },
                            preventDefault: function () {
                                i.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        },
                        k = Q([i], arguments, 1);
                    do {
                        for (c = g.$$listeners[a] || f, i.currentScope = g, d = 0, e = c.length; e > d; d++)
                            if (c[d]) try {
                                c[d].apply(null, k)
                            } catch (l) {
                                j(l)
                            } else c.splice(d, 1), d-- , e--;
                        if (h) return i.currentScope = null, i;
                        g = g.$parent
                    } while (g);
                    return i.currentScope = null, i
                },
                $broadcast: function (a, b) {
                    var c = this,
                        d = c,
                        e = c,
                        f = {
                            name: a,
                            targetScope: c,
                            preventDefault: function () {
                                f.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        };
                    if (!c.$$listenerCount[a]) return f;
                    for (var g, h, i, k = Q([f], arguments, 1); d = e;) {
                        for (f.currentScope = d, g = d.$$listeners[a] || [], h = 0, i = g.length; i > h; h++)
                            if (g[h]) try {
                                g[h].apply(null, k)
                            } catch (l) {
                                j(l)
                            } else g.splice(h, 1), h-- , i--;
                        if (!(e = d.$$listenerCount[a] && d.$$childHead || d !== c && d.$$nextSibling))
                            for (; d !== c && !(e = d.$$nextSibling);) d = d.$parent
                    }
                    return f.currentScope = null, f
                }
            };
            var y = new n,
                A = y.$$asyncQueue = [],
                B = y.$$postDigestQueue = [],
                C = y.$$applyAsyncQueue = [];
            return y
        }]
    }

    function pc() {
        var a = /^\s*(https?|ftp|mailto|tel|file):/,
            b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function (b) {
            return t(b) ? (a = b, this) : a
        }, this.imgSrcSanitizationWhitelist = function (a) {
            return t(a) ? (b = a, this) : b
        }, this.$get = function () {
            return function (c, d) {
                var e, f = d ? b : a;
                return e = yc(c).href, "" === e || e.match(f) ? c : "unsafe:" + e
            }
        }
    }

    function qc(a) {
        if ("self" === a) return a;
        if (w(a)) {
            if (a.indexOf("***") > -1) throw $e("iwcard", "Illegal sequence *** in string matcher.  String: {0}", a);
            return a = Od(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + a + "$")
        }
        if (A(a)) return new RegExp("^" + a.source + "$");
        throw $e("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
    }

    function rc(a) {
        var b = [];
        return t(a) && f(a, function (a) {
            b.push(qc(a))
        }), b
    }

    function sc() {
        this.SCE_CONTEXTS = _e;
        var a = ["self"],
            b = [];
        this.resourceUrlWhitelist = function (b) {
            return arguments.length && (a = rc(b)), a
        }, this.resourceUrlBlacklist = function (a) {
            return arguments.length && (b = rc(a)), b
        }, this.$get = ["$injector", function (d) {
            function e(a, b) {
                return "self" === a ? zc(b) : !!a.exec(b.href)
            }

            function f(c) {
                var d, f, g = yc(c.toString()),
                    h = !1;
                for (d = 0, f = a.length; f > d; d++)
                    if (e(a[d], g)) {
                        h = !0;
                        break
                    }
                if (h)
                    for (d = 0, f = b.length; f > d; d++)
                        if (e(b[d], g)) {
                            h = !1;
                            break
                        }
                return h
            }

            function g(a) {
                var b = function (a) {
                    this.$$unwrapTrustedValue = function () {
                        return a
                    }
                };
                return a && (b.prototype = new a), b.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                }, b.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                }, b
            }

            function h(a, b) {
                var d = m.hasOwnProperty(a) ? m[a] : null;
                if (!d) throw $e("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", a, b);
                if (null === b || b === c || "" === b) return b;
                if ("string" != typeof b) throw $e("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", a);
                return new d(b)
            }

            function i(a) {
                return a instanceof l ? a.$$unwrapTrustedValue() : a
            }

            function j(a, b) {
                if (null === b || b === c || "" === b) return b;
                var d = m.hasOwnProperty(a) ? m[a] : null;
                if (d && b instanceof d) return b.$$unwrapTrustedValue();
                if (a === _e.RESOURCE_URL) {
                    if (f(b)) return b;
                    throw $e("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", b.toString())
                }
                if (a === _e.HTML) return k(b);
                throw $e("unsafe", "Attempting to use an unsafe value in a safe context.")
            }
            var k = function (a) {
                throw $e("unsafe", "Attempting to use an unsafe value in a safe context.")
            };
            d.has("$sanitize") && (k = d.get("$sanitize"));
            var l = g(),
                m = {};
            return m[_e.HTML] = g(l), m[_e.CSS] = g(l), m[_e.URL] = g(l), m[_e.JS] = g(l), m[_e.RESOURCE_URL] = g(m[_e.URL]), {
                trustAs: h,
                getTrusted: j,
                valueOf: i
            }
        }]
    }

    function tc() {
        var a = !0;
        this.enabled = function (b) {
            return arguments.length && (a = !!b), a
        }, this.$get = ["$parse", "$sceDelegate", function (b, c) {
            if (a && 8 > yd) throw $e("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
            var d = O(_e);
            d.isEnabled = function () {
                return a
            }, d.trustAs = c.trustAs, d.getTrusted = c.getTrusted, d.valueOf = c.valueOf, a || (d.trustAs = d.getTrusted = function (a, b) {
                return b
            }, d.valueOf = q), d.parseAs = function (a, c) {
                var e = b(c);
                return e.literal && e.constant ? e : b(c, function (b) {
                    return d.getTrusted(a, b)
                })
            };
            var e = d.parseAs,
                g = d.getTrusted,
                h = d.trustAs;
            return f(_e, function (a, b) {
                var c = td(b);
                d[va("parse_as_" + c)] = function (b) {
                    return e(a, b)
                }, d[va("get_trusted_" + c)] = function (b) {
                    return g(a, b)
                }, d[va("trust_as_" + c)] = function (b) {
                    return h(a, b)
                }
            }), d
        }]
    }

    function uc() {
        this.$get = ["$window", "$document", function (a, b) {
            var c, d, e = {},
                f = n((/android (\d+)/.exec(td((a.navigator || {}).userAgent)) || [])[1]),
                g = /Boxee/i.test((a.navigator || {}).userAgent),
                h = b[0] || {},
                i = /^(Moz|webkit|ms)(?=[A-Z])/,
                j = h.body && h.body.style,
                k = !1,
                l = !1;
            if (j) {
                for (var m in j)
                    if (d = i.exec(m)) {
                        c = d[0], c = c.substr(0, 1).toUpperCase() + c.substr(1);
                        break
                    }
                c || (c = "WebkitOpacity" in j && "webkit"), k = !!("transition" in j || c + "Transition" in j), l = !!("animation" in j || c + "Animation" in j), !f || k && l || (k = w(j.webkitTransition), l = w(j.webkitAnimation))
            }
            return {
                history: !(!a.history || !a.history.pushState || 4 > f || g),
                hasEvent: function (a) {
                    if ("input" === a && 11 >= yd) return !1;
                    if (s(e[a])) {
                        var b = h.createElement("div");
                        e[a] = "on" + a in b
                    }
                    return e[a]
                },
                csp: Pd(),
                vendorPrefix: c,
                transitions: k,
                animations: l,
                android: f
            }
        }]
    }

    function vc() {
        this.$get = ["$templateCache", "$http", "$q", function (a, b, c) {
            function d(e, f) {
                function g(a) {
                    if (!f) throw Ce("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", e, a.status, a.statusText);
                    return c.reject(a)
                }
                d.totalPendingRequests++;
                var h = b.defaults && b.defaults.transformResponse;
                Ld(h) ? h = h.filter(function (a) {
                    return a !== sb
                }) : h === sb && (h = null);
                var i = {
                    cache: a,
                    transformResponse: h
                };
                return b.get(e, i)["finally"](function () {
                    d.totalPendingRequests--
                }).then(function (b) {
                    return a.put(e, b.data), b.data
                }, g)
            }
            return d.totalPendingRequests = 0, d
        }]
    }

    function wc() {
        this.$get = ["$rootScope", "$browser", "$location", function (a, b, c) {
            var d = {};
            return d.findBindings = function (a, b, c) {
                var d = a.getElementsByClassName("ng-binding"),
                    e = [];
                return f(d, function (a) {
                    var d = Id.element(a).data("$binding");
                    d && f(d, function (d) {
                        if (c) {
                            var f = new RegExp("(^|\\s)" + Od(b) + "(\\s|\\||$)");
                            f.test(d) && e.push(a)
                        } else -1 != d.indexOf(b) && e.push(a)
                    })
                }), e
            }, d.findModels = function (a, b, c) {
                for (var d = ["ng-", "data-ng-", "ng\\:"], e = 0; e < d.length; ++e) {
                    var f = c ? "=" : "*=",
                        g = "[" + d[e] + "model" + f + '"' + b + '"]',
                        h = a.querySelectorAll(g);
                    if (h.length) return h
                }
            }, d.getLocation = function () {
                return c.url()
            }, d.setLocation = function (b) {
                b !== c.url() && (c.url(b), a.$digest())
            }, d.whenStable = function (a) {
                b.notifyWhenNoOutstandingRequests(a)
            }, d
        }]
    }

    function xc() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (a, b, c, d, e) {
            function f(f, h, i) {
                z(f) || (i = h, h = f, f = p);
                var j, k = R(arguments, 3),
                    l = t(i) && !i,
                    m = (l ? d : c).defer(),
                    n = m.promise;
                return j = b.defer(function () {
                    try {
                        m.resolve(f.apply(null, k))
                    } catch (b) {
                        m.reject(b), e(b)
                    } finally {
                        delete g[n.$$timeoutId]
                    }
                    l || a.$apply()
                }, h), n.$$timeoutId = j, g[j] = m, n
            }
            var g = {};
            return f.cancel = function (a) {
                return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
            }, f
        }]
    }

    function yc(a) {
        var b = a;
        return yd && (af.setAttribute("href", b), b = af.href), af.setAttribute("href", b), {
            href: af.href,
            protocol: af.protocol ? af.protocol.replace(/:$/, "") : "",
            host: af.host,
            search: af.search ? af.search.replace(/^\?/, "") : "",
            hash: af.hash ? af.hash.replace(/^#/, "") : "",
            hostname: af.hostname,
            port: af.port,
            pathname: "/" === af.pathname.charAt(0) ? af.pathname : "/" + af.pathname
        }
    }

    function zc(a) {
        var b = w(a) ? yc(a) : a;
        return b.protocol === bf.protocol && b.host === bf.host
    }

    function Ac() {
        this.$get = r(a)
    }

    function Bc(a) {
        function b(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {
                return a
            }
        }
        var d = a[0] || {},
            e = {},
            f = "";
        return function () {
            var a, g, h, i, j, k = d.cookie || "";
            if (k !== f)
                for (f = k, a = f.split("; "), e = {}, h = 0; h < a.length; h++) g = a[h], i = g.indexOf("="), i > 0 && (j = b(g.substring(0, i)), e[j] === c && (e[j] = b(g.substring(i + 1))));
            return e
        }
    }

    function Cc() {
        this.$get = Bc
    }

    function Dc(a) {
        function b(d, e) {
            if (u(d)) {
                var g = {};
                return f(d, function (a, c) {
                    g[c] = b(c, a)
                }), g
            }
            return a.factory(d + c, e)
        }
        var c = "Filter";
        this.register = b, this.$get = ["$injector", function (a) {
            return function (b) {
                return a.get(b + c)
            }
        }], b("currency", Jc), b("date", Wc), b("filter", Ec), b("json", Xc), b("limitTo", Yc), b("lowercase", gf), b("number", Kc), b("orderBy", Zc), b("uppercase", hf)
    }

    function Ec() {
        return function (a, b, c) {
            if (!e(a)) {
                if (null == a) return a;
                throw d("filter")("notarray", "Expected array but received: {0}", a)
            }
            var f, g, h = Ic(b);
            switch (h) {
                case "function":
                    f = b;
                    break;
                case "boolean":
                case "null":
                case "number":
                case "string":
                    g = !0;
                case "object":
                    f = Gc(b, c, g);
                    break;
                default:
                    return a
            }
            return Array.prototype.filter.call(a, f)
        }
    }

    function Fc(a) {
        return z(a.toString) && a.toString !== Object.prototype.toString
    }

    function Gc(a, b, c) {
        var d, e = u(a) && "$" in a;
        return b === !0 ? b = P : z(b) || (b = function (a, b) {
            return s(a) ? !1 : null === a || null === b ? a === b : u(b) || u(a) && !Fc(a) ? !1 : (a = td("" + a), b = td("" + b), -1 !== a.indexOf(b))
        }), d = function (d) {
            return e && !u(d) ? Hc(d, a.$, b, !1) : Hc(d, a, b, c)
        }
    }

    function Hc(a, b, c, d, e) {
        var f = Ic(a),
            g = Ic(b);
        if ("string" === g && "!" === b.charAt(0)) return !Hc(a, b.substring(1), c, d);
        if (Ld(a)) return a.some(function (a) {
            return Hc(a, b, c, d)
        });
        switch (f) {
            case "object":
                var h;
                if (d) {
                    for (h in a)
                        if ("$" !== h.charAt(0) && Hc(a[h], b, c, !0)) return !0;
                    return e ? !1 : Hc(a, b, c, !1)
                }
                if ("object" === g) {
                    for (h in b) {
                        var i = b[h];
                        if (!z(i) && !s(i)) {
                            var j = "$" === h,
                                k = j ? a : a[h];
                            if (!Hc(k, i, c, j, j)) return !1
                        }
                    }
                    return !0
                }
                return c(a, b);
            case "function":
                return !1;
            default:
                return c(a, b)
        }
    }

    function Ic(a) {
        return null === a ? "null" : typeof a
    }

    function Jc(a) {
        var b = a.NUMBER_FORMATS;
        return function (a, c, d) {
            return s(c) && (c = b.CURRENCY_SYM), s(d) && (d = b.PATTERNS[1].maxFrac), null == a ? a : Lc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, d).replace(/\u00A4/g, c)
        }
    }

    function Kc(a) {
        var b = a.NUMBER_FORMATS;
        return function (a, c) {
            return null == a ? a : Lc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
        }
    }

    function Lc(a, b, c, d, e) {
        if (u(a)) return "";
        var f = 0 > a;
        a = Math.abs(a);
        var g = a === 1 / 0;
        if (!g && !isFinite(a)) return "";
        var h = a + "",
            i = "",
            j = !1,
            k = [];
        if (g && (i = "∞"), !g && -1 !== h.indexOf("e")) {
            var l = h.match(/([\d\.]+)e(-?)(\d+)/);
            l && "-" == l[2] && l[3] > e + 1 ? a = 0 : (i = h, j = !0)
        }
        if (g || j) e > 0 && 1 > a && (i = a.toFixed(e), a = parseFloat(i));
        else {
            var m = (h.split(cf)[1] || "").length;
            s(e) && (e = Math.min(Math.max(b.minFrac, m), b.maxFrac)), a = +(Math.round(+(a.toString() + "e" + e)).toString() + "e" + -e);
            var n = ("" + a).split(cf),
                o = n[0];
            n = n[1] || "";
            var p, q = 0,
                r = b.lgSize,
                t = b.gSize;
            if (o.length >= r + t)
                for (q = o.length - r, p = 0; q > p; p++)(q - p) % t === 0 && 0 !== p && (i += c), i += o.charAt(p);
            for (p = q; p < o.length; p++)(o.length - p) % r === 0 && 0 !== p && (i += c), i += o.charAt(p);
            for (; n.length < e;) n += "0";
            e && "0" !== e && (i += d + n.substr(0, e))
        }
        return 0 === a && (f = !1), k.push(f ? b.negPre : b.posPre, i, f ? b.negSuf : b.posSuf), k.join("")
    }

    function Mc(a, b, c) {
        var d = "";
        for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b;) a = "0" + a;
        return c && (a = a.substr(a.length - b)), d + a
    }

    function Nc(a, b, c, d) {
        return c = c || 0,
            function (e) {
                var f = e["get" + a]();
                return (c > 0 || f > -c) && (f += c), 0 === f && -12 == c && (f = 12), Mc(f, b, d)
            }
    }

    function Oc(a, b) {
        return function (c, d) {
            var e = c["get" + a](),
                f = vd(b ? "SHORT" + a : a);
            return d[f][e]
        }
    }

    function Pc(a, b, c) {
        var d = -1 * c,
            e = d >= 0 ? "+" : "";
        return e += Mc(Math[d > 0 ? "floor" : "ceil"](d / 60), 2) + Mc(Math.abs(d % 60), 2)
    }

    function Qc(a) {
        var b = new Date(a, 0, 1).getDay();
        return new Date(a, 0, (4 >= b ? 5 : 12) - b)
    }

    function Rc(a) {
        return new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay()))
    }

    function Sc(a) {
        return function (b) {
            var c = Qc(b.getFullYear()),
                d = Rc(b),
                e = +d - +c,
                f = 1 + Math.round(e / 6048e5);
            return Mc(f, a)
        }
    }

    function Tc(a, b) {
        return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1]
    }

    function Uc(a, b) {
        return a.getFullYear() <= 0 ? b.ERAS[0] : b.ERAS[1]
    }

    function Vc(a, b) {
        return a.getFullYear() <= 0 ? b.ERANAMES[0] : b.ERANAMES[1]
    }

    function Wc(a) {
        function b(a) {
            var b;
            if (b = a.match(c)) {
                var d = new Date(0),
                    e = 0,
                    f = 0,
                    g = b[8] ? d.setUTCFullYear : d.setFullYear,
                    h = b[8] ? d.setUTCHours : d.setHours;
                b[9] && (e = n(b[9] + b[10]), f = n(b[9] + b[11])), g.call(d, n(b[1]), n(b[2]) - 1, n(b[3]));
                var i = n(b[4] || 0) - e,
                    j = n(b[5] || 0) - f,
                    k = n(b[6] || 0),
                    l = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
                return h.call(d, i, j, k, l), d
            }
            return a
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (c, d, e) {
            var g, h, i = "",
                j = [];
            if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, w(c) && (c = ff.test(c) ? n(c) : b(c)), x(c) && (c = new Date(c)), !y(c) || !isFinite(c.getTime())) return c;
            for (; d;) h = ef.exec(d), h ? (j = Q(j, h, 1), d = j.pop()) : (j.push(d), d = null);
            var k = c.getTimezoneOffset();
            return e && (k = W(e, c.getTimezoneOffset()), c = Y(c, e, !0)), f(j, function (b) {
                g = df[b], i += g ? g(c, a.DATETIME_FORMATS, k) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), i
        }
    }

    function Xc() {
        return function (a, b) {
            return s(b) && (b = 2), U(a, b)
        }
    }

    function Yc() {
        return function (a, b, c) {
            return b = Math.abs(Number(b)) === 1 / 0 ? Number(b) : n(b), isNaN(b) ? a : (x(a) && (a = a.toString()), Ld(a) || w(a) ? (c = !c || isNaN(c) ? 0 : n(c), c = 0 > c && c >= -a.length ? a.length + c : c, b >= 0 ? a.slice(c, c + b) : 0 === c ? a.slice(b, a.length) : a.slice(Math.max(0, c + b), c)) : a)
        }
    }

    function Zc(a) {
        return function (b, c, d) {
            function f(a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e) return e
                }
                return 0
            }

            function g(a, b) {
                return b ? function (b, c) {
                    return a(c, b)
                } : a
            }

            function h(a) {
                switch (typeof a) {
                    case "number":
                    case "boolean":
                    case "string":
                        return !0;
                    default:
                        return !1
                }
            }

            function i(a) {
                return null === a ? "null" : "function" == typeof a.valueOf && (a = a.valueOf(), h(a)) ? a : "function" == typeof a.toString && (a = a.toString(), h(a)) ? a : ""
            }

            function j(a, b) {
                var c = typeof a,
                    d = typeof b;
                return c === d && "object" === c && (a = i(a), b = i(b)), c === d ? ("string" === c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : b > a ? -1 : 1) : d > c ? -1 : 1
            }
            return e(b) ? (c = Ld(c) ? c : [c], 0 === c.length && (c = ["+"]), c = c.map(function (b) {
                var c = !1,
                    d = b || q;
                if (w(b)) {
                    if (("+" == b.charAt(0) || "-" == b.charAt(0)) && (c = "-" == b.charAt(0), b = b.substring(1)), "" === b) return g(j, c);
                    if (d = a(b), d.constant) {
                        var e = d();
                        return g(function (a, b) {
                            return j(a[e], b[e])
                        }, c)
                    }
                }
                return g(function (a, b) {
                    return j(d(a), d(b))
                }, c)
            }), Cd.call(b).sort(g(f, d))) : b
        }
    }

    function $c(a) {
        return z(a) && (a = {
            link: a
        }), a.restrict = a.restrict || "AC", r(a)
    }

    function _c(a, b) {
        a.$name = b
    }

    function ad(a, b, d, e, g) {
        var h = this,
            i = [],
            j = h.$$parentForm = a.parent().controller("form") || lf;
        h.$error = {}, h.$$success = {}, h.$pending = c, h.$name = g(b.name || b.ngForm || "")(d), h.$dirty = !1, h.$pristine = !0, h.$valid = !0, h.$invalid = !1, h.$submitted = !1, j.$addControl(h), h.$rollbackViewValue = function () {
            f(i, function (a) {
                a.$rollbackViewValue()
            })
        }, h.$commitViewValue = function () {
            f(i, function (a) {
                a.$commitViewValue()
            })
        }, h.$addControl = function (a) {
            ma(a.$name, "input"), i.push(a), a.$name && (h[a.$name] = a)
        }, h.$$renameControl = function (a, b) {
            var c = a.$name;
            h[c] === a && delete h[c], h[b] = a, a.$name = b
        }, h.$removeControl = function (a) {
            a.$name && h[a.$name] === a && delete h[a.$name], f(h.$pending, function (b, c) {
                h.$setValidity(c, null, a)
            }), f(h.$error, function (b, c) {
                h.$setValidity(c, null, a)
            }), f(h.$$success, function (b, c) {
                h.$setValidity(c, null, a)
            }), M(i, a)
        }, pd({
            ctrl: this,
            $element: a,
            set: function (a, b, c) {
                var d = a[b];
                if (d) {
                    var e = d.indexOf(c); - 1 === e && d.push(c)
                } else a[b] = [c]
            },
            unset: function (a, b, c) {
                var d = a[b];
                d && (M(d, c), 0 === d.length && delete a[b])
            },
            parentForm: j,
            $animate: e
        }), h.$setDirty = function () {
            e.removeClass(a, Vf), e.addClass(a, Wf), h.$dirty = !0, h.$pristine = !1, j.$setDirty()
        }, h.$setPristine = function () {
            e.setClass(a, Vf, Wf + " " + mf), h.$dirty = !1, h.$pristine = !0, h.$submitted = !1, f(i, function (a) {
                a.$setPristine()
            })
        }, h.$setUntouched = function () {
            f(i, function (a) {
                a.$setUntouched()
            })
        }, h.$setSubmitted = function () {
            e.addClass(a, mf), h.$submitted = !0, j.$setSubmitted()
        }
    }

    function bd(a) {
        a.$formatters.push(function (b) {
            return a.$isEmpty(b) ? b : b.toString()
        })
    }

    function cd(a, b, c, d, e, f) {
        dd(a, b, c, d, e, f), bd(d)
    }

    function dd(a, b, c, d, e, f) {
        var g = td(b[0].type);
        if (!e.android) {
            var h = !1;
            b.on("compositionstart", function (a) {
                h = !0
            }), b.on("compositionend", function () {
                h = !1, i()
            })
        }
        var i = function (a) {
            if (j && (f.defer.cancel(j), j = null), !h) {
                var e = b.val(),
                    i = a && a.type;
                "password" === g || c.ngTrim && "false" === c.ngTrim || (e = Nd(e)), (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, i)
            }
        };
        if (e.hasEvent("input")) b.on("input", i);
        else {
            var j, k = function (a, b, c) {
                j || (j = f.defer(function () {
                    j = null, b && b.value === c || i(a)
                }))
            };
            b.on("keydown", function (a) {
                var b = a.keyCode;
                91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || k(a, this, this.value)
            }), e.hasEvent("paste") && b.on("paste cut", k)
        }
        b.on("change", i), d.$render = function () {
            b.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue)
        }
    }

    function ed(a, b) {
        if (y(a)) return a;
        if (w(a)) {
            wf.lastIndex = 0;
            var c = wf.exec(a);
            if (c) {
                var d = +c[1],
                    e = +c[2],
                    f = 0,
                    g = 0,
                    h = 0,
                    i = 0,
                    j = Qc(d),
                    k = 7 * (e - 1);
                return b && (f = b.getHours(), g = b.getMinutes(), h = b.getSeconds(), i = b.getMilliseconds()), new Date(d, 0, j.getDate() + k, f, g, h, i)
            }
        }
        return NaN
    }

    function fd(a, b) {
        return function (c, d) {
            var e, g;
            if (y(c)) return c;
            if (w(c)) {
                if ('"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1)), qf.test(c)) return new Date(c);
                if (a.lastIndex = 0, e = a.exec(c)) return e.shift(), g = d ? {
                    yyyy: d.getFullYear(),
                    MM: d.getMonth() + 1,
                    dd: d.getDate(),
                    HH: d.getHours(),
                    mm: d.getMinutes(),
                    ss: d.getSeconds(),
                    sss: d.getMilliseconds() / 1e3
                } : {
                        yyyy: 1970,
                        MM: 1,
                        dd: 1,
                        HH: 0,
                        mm: 0,
                        ss: 0,
                        sss: 0
                    }, f(e, function (a, c) {
                        c < b.length && (g[b[c]] = +a)
                    }), new Date(g.yyyy, g.MM - 1, g.dd, g.HH, g.mm, g.ss || 0, 1e3 * g.sss || 0)
            }
            return NaN
        }
    }

    function gd(a, b, d, e) {
        return function (f, g, h, i, j, k, l) {
            function m(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime())
            }

            function n(a) {
                return t(a) ? y(a) ? a : d(a) : c
            }
            hd(f, g, h, i), dd(f, g, h, i, j, k);
            var o, p = i && i.$options && i.$options.timezone;
            if (i.$$parserName = a, i.$parsers.push(function (a) {
                if (i.$isEmpty(a)) return null;
                if (b.test(a)) {
                    var e = d(a, o);
                    return p && (e = Y(e, p)), e
                }
                return c
            }), i.$formatters.push(function (a) {
                if (a && !y(a)) throw $f("datefmt", "Expected `{0}` to be a date", a);
                return m(a) ? (o = a, o && p && (o = Y(o, p, !0)), l("date")(a, e, p)) : (o = null, "")
            }), t(h.min) || h.ngMin) {
                var q;
                i.$validators.min = function (a) {
                    return !m(a) || s(q) || d(a) >= q
                }, h.$observe("min", function (a) {
                    q = n(a), i.$validate()
                })
            }
            if (t(h.max) || h.ngMax) {
                var r;
                i.$validators.max = function (a) {
                    return !m(a) || s(r) || d(a) <= r
                }, h.$observe("max", function (a) {
                    r = n(a), i.$validate()
                })
            }
        }
    }

    function hd(a, b, d, e) {
        var f = b[0],
            g = e.$$hasNativeValidators = u(f.validity);
        g && e.$parsers.push(function (a) {
            var d = b.prop(sd) || {};
            return d.badInput && !d.typeMismatch ? c : a
        })
    }

    function id(a, b, d, e, f, g) {
        if (hd(a, b, d, e), dd(a, b, d, e, f, g), e.$$parserName = "number", e.$parsers.push(function (a) {
            return e.$isEmpty(a) ? null : tf.test(a) ? parseFloat(a) : c
        }), e.$formatters.push(function (a) {
            if (!e.$isEmpty(a)) {
                if (!x(a)) throw $f("numfmt", "Expected `{0}` to be a number", a);
                a = a.toString()
            }
            return a
        }), t(d.min) || d.ngMin) {
            var h;
            e.$validators.min = function (a) {
                return e.$isEmpty(a) || s(h) || a >= h
            }, d.$observe("min", function (a) {
                t(a) && !x(a) && (a = parseFloat(a, 10)), h = x(a) && !isNaN(a) ? a : c, e.$validate()
            })
        }
        if (t(d.max) || d.ngMax) {
            var i;
            e.$validators.max = function (a) {
                return e.$isEmpty(a) || s(i) || i >= a
            }, d.$observe("max", function (a) {
                t(a) && !x(a) && (a = parseFloat(a, 10)), i = x(a) && !isNaN(a) ? a : c, e.$validate()
            })
        }
    }

    function jd(a, b, c, d, e, f) {
        dd(a, b, c, d, e, f), bd(d), d.$$parserName = "url", d.$validators.url = function (a, b) {
            var c = a || b;
            return d.$isEmpty(c) || rf.test(c)
        }
    }

    function kd(a, b, c, d, e, f) {
        dd(a, b, c, d, e, f), bd(d), d.$$parserName = "email", d.$validators.email = function (a, b) {
            var c = a || b;
            return d.$isEmpty(c) || sf.test(c)
        }
    }

    function ld(a, b, c, d) {
        s(c.name) && b.attr("name", i());
        var e = function (a) {
            b[0].checked && d.$setViewValue(c.value, a && a.type)
        };
        b.on("click", e), d.$render = function () {
            var a = c.value;
            b[0].checked = a == d.$viewValue
        }, c.$observe("value", d.$render)
    }

    function md(a, b, c, e, f) {
        var g;
        if (t(e)) {
            if (g = a(e), !g.constant) throw d("ngModel")("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", c, e);
            return g(b)
        }
        return f
    }

    function nd(a, b, c, d, e, f, g, h) {
        var i = md(h, a, "ngTrueValue", c.ngTrueValue, !0),
            j = md(h, a, "ngFalseValue", c.ngFalseValue, !1),
            k = function (a) {
                d.$setViewValue(b[0].checked, a && a.type)
            };
        b.on("click", k), d.$render = function () {
            b[0].checked = d.$viewValue
        }, d.$isEmpty = function (a) {
            return a === !1
        }, d.$formatters.push(function (a) {
            return P(a, i)
        }), d.$parsers.push(function (a) {
            return a ? i : j
        })
    }

    function od(a, b) {
        return a = "ngClass" + a, ["$animate", function (c) {
            function d(a, b) {
                var c = [];
                a: for (var d = 0; d < a.length; d++) {
                    for (var e = a[d], f = 0; f < b.length; f++)
                        if (e == b[f]) continue a;
                    c.push(e)
                }
                return c
            }

            function e(a) {
                var b = [];
                return Ld(a) ? (f(a, function (a) {
                    b = b.concat(e(a))
                }), b) : w(a) ? a.split(" ") : u(a) ? (f(a, function (a, c) {
                    a && (b = b.concat(c.split(" ")))
                }), b) : a
            }
            return {
                restrict: "AC",
                link: function (g, h, i) {
                    function j(a) {
                        var b = l(a, 1);
                        i.$addClass(b)
                    }

                    function k(a) {
                        var b = l(a, -1);
                        i.$removeClass(b)
                    }

                    function l(a, b) {
                        var c = h.data("$classCounts") || pa(),
                            d = [];
                        return f(a, function (a) {
                            (b > 0 || c[a]) && (c[a] = (c[a] || 0) + b, c[a] === +(b > 0) && d.push(a))
                        }), h.data("$classCounts", c), d.join(" ")
                    }

                    function m(a, b) {
                        var e = d(b, a),
                            f = d(a, b);
                        e = l(e, 1), f = l(f, -1), e && e.length && c.addClass(h, e), f && f.length && c.removeClass(h, f)
                    }

                    function n(a) {
                        if (b === !0 || g.$index % 2 === b) {
                            var c = e(a || []);
                            if (o) {
                                if (!P(a, o)) {
                                    var d = e(o);
                                    m(d, c)
                                }
                            } else j(c)
                        }
                        o = O(a)
                    }
                    var o;
                    g.$watch(i[a], n, !0), i.$observe("class", function (b) {
                        n(g.$eval(i[a]))
                    }), "ngClass" !== a && g.$watch("$index", function (c, d) {
                        var f = 1 & c;
                        if (f !== (1 & d)) {
                            var h = e(g.$eval(i[a]));
                            f === b ? j(h) : k(h)
                        }
                    })
                }
            }
        }]
    }

    function pd(a) {
        function b(a, b, i) {
            b === c ? d("$pending", a, i) : e("$pending", a, i), G(b) ? b ? (l(h.$error, a, i), k(h.$$success, a, i)) : (k(h.$error, a, i), l(h.$$success, a, i)) : (l(h.$error, a, i), l(h.$$success, a, i)), h.$pending ? (f(Zf, !0), h.$valid = h.$invalid = c, g("", null)) : (f(Zf, !1), h.$valid = qd(h.$error), h.$invalid = !h.$valid, g("", h.$valid));
            var j;
            j = h.$pending && h.$pending[a] ? c : h.$error[a] ? !1 : h.$$success[a] ? !0 : null, g(a, j), m.$setValidity(a, j, h)
        }

        function d(a, b, c) {
            h[a] || (h[a] = {}), k(h[a], b, c)
        }

        function e(a, b, d) {
            h[a] && l(h[a], b, d), qd(h[a]) && (h[a] = c)
        }

        function f(a, b) {
            b && !j[a] ? (n.addClass(i, a), j[a] = !0) : !b && j[a] && (n.removeClass(i, a), j[a] = !1)
        }

        function g(a, b) {
            a = a ? "-" + ia(a, "-") : "", f(Tf + a, b === !0), f(Uf + a, b === !1)
        }
        var h = a.ctrl,
            i = a.$element,
            j = {},
            k = a.set,
            l = a.unset,
            m = a.parentForm,
            n = a.$animate;
        j[Uf] = !(j[Tf] = i.hasClass(Tf)), h.$setValidity = b
    }

    function qd(a) {
        if (a)
            for (var b in a) return !1;
        return !0
    }
    var rd = /^\/(.+)\/([a-z]*)$/,
        sd = "validity",
        td = function (a) {
            return w(a) ? a.toLowerCase() : a
        },
        ud = Object.prototype.hasOwnProperty,
        vd = function (a) {
            return w(a) ? a.toUpperCase() : a
        },
        wd = function (a) {
            return w(a) ? a.replace(/[A-Z]/g, function (a) {
                return String.fromCharCode(32 | a.charCodeAt(0))
            }) : a
        },
        xd = function (a) {
            return w(a) ? a.replace(/[a-z]/g, function (a) {
                return String.fromCharCode(-33 & a.charCodeAt(0))
            }) : a
        };
    "i" !== "I".toLowerCase() && (td = wd, vd = xd);
    var yd, zd, Ad, Bd, Cd = [].slice,
        Dd = [].splice,
        Ed = [].push,
        Fd = Object.prototype.toString,
        Gd = Object.getPrototypeOf,
        Hd = d("ng"),
        Id = a.angular || (a.angular = {}),
        Jd = 0;
    yd = b.documentMode, p.$inject = [], q.$inject = [];
    var Kd, Ld = Array.isArray,
        Md = /^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,
        Nd = function (a) {
            return w(a) ? a.trim() : a
        },
        Od = function (a) {
            return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        },
        Pd = function () {
            if (t(Pd.isActive_)) return Pd.isActive_;
            var a = !(!b.querySelector("[ng-csp]") && !b.querySelector("[data-ng-csp]"));
            if (!a) try {
                new Function("")
            } catch (c) {
                a = !0
            }
            return Pd.isActive_ = a
        },
        Qd = function () {
            if (t(Qd.name_)) return Qd.name_;
            var a, c, d, e, f = Rd.length;
            for (c = 0; f > c; ++c)
                if (d = Rd[c], a = b.querySelector("[" + d.replace(":", "\\:") + "jq]")) {
                    e = a.getAttribute(d + "jq");
                    break
                }
            return Qd.name_ = e
        },
        Rd = ["ng-", "data-ng-", "ng:", "x-ng-"],
        Sd = /[A-Z]/g,
        Td = !1,
        Ud = 1,
        Vd = 2,
        Wd = 3,
        Xd = 8,
        Yd = 9,
        Zd = 11,
        $d = {
            full: "1.4.0",
            major: 1,
            minor: 4,
            dot: 0,
            codeName: "jaracimrman-existence"
        };
    Aa.expando = "ng339";
    var _d = Aa.cache = {},
        ae = 1,
        be = function (a, b, c) {
            a.addEventListener(b, c, !1)
        },
        ce = function (a, b, c) {
            a.removeEventListener(b, c, !1)
        };
    Aa._data = function (a) {
        return this.cache[a[this.expando]] || {}
    };
    var de = /([\:\-\_]+(.))/g,
        ee = /^moz([A-Z])/,
        fe = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
        },
        ge = d("jqLite"),
        he = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ie = /<|&#?\w+;/,
        je = /<([\w:]+)/,
        ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        le = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    le.optgroup = le.option, le.tbody = le.tfoot = le.colgroup = le.caption = le.thead, le.th = le.td;
    var me = Aa.prototype = {
        ready: function (c) {
            function d() {
                e || (e = !0, c())
            }
            var e = !1;
            "complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), Aa(a).on("load", d))
        },
        toString: function () {
            var a = [];
            return f(this, function (b) {
                a.push("" + b)
            }), "[" + a.join(", ") + "]"
        },
        eq: function (a) {
            return zd(a >= 0 ? this[a] : this[this.length + a])
        },
        length: 0,
        push: Ed,
        sort: [].sort,
        splice: [].splice
    },
        ne = {};
    f("multiple,selected,checked,disabled,readOnly,required,open".split(","), function (a) {
        ne[td(a)] = a
    });
    var oe = {};
    f("input,select,option,textarea,button,form,details".split(","), function (a) {
        oe[a] = !0
    });
    var pe = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
    };
    f({
        data: Ga,
        removeData: Ea
    }, function (a, b) {
        Aa[b] = a
    }), f({
        data: Ga,
        inheritedData: Ma,
        scope: function (a) {
            return zd.data(a, "$scope") || Ma(a.parentNode || a, ["$isolateScope", "$scope"])
        },
        isolateScope: function (a) {
            return zd.data(a, "$isolateScope") || zd.data(a, "$isolateScopeNoTemplate")
        },
        controller: La,
        injector: function (a) {
            return Ma(a, "$injector")
        },
        removeAttr: function (a, b) {
            a.removeAttribute(b)
        },
        hasClass: Ha,
        css: function (a, b, c) {
            return b = va(b), t(c) ? void (a.style[b] = c) : a.style[b]
        },
        attr: function (a, b, d) {
            var e = a.nodeType;
            if (e !== Wd && e !== Vd && e !== Xd) {
                var f = td(b);
                if (ne[f]) {
                    if (!t(d)) return a[b] || (a.attributes.getNamedItem(b) || p).specified ? f : c;
                    d ? (a[b] = !0, a.setAttribute(b, f)) : (a[b] = !1, a.removeAttribute(f))
                } else if (t(d)) a.setAttribute(b, d);
                else if (a.getAttribute) {
                    var g = a.getAttribute(b, 2);
                    return null === g ? c : g
                }
            }
        },
        prop: function (a, b, c) {
            return t(c) ? void (a[b] = c) : a[b]
        },
        text: function () {
            function a(a, b) {
                if (s(b)) {
                    var c = a.nodeType;
                    return c === Ud || c === Wd ? a.textContent : ""
                }
                a.textContent = b
            }
            return a.$dv = "", a
        }(),
        val: function (a, b) {
            if (s(b)) {
                if (a.multiple && "select" === L(a)) {
                    var c = [];
                    return f(a.options, function (a) {
                        a.selected && c.push(a.value || a.text)
                    }), 0 === c.length ? null : c
                }
                return a.value
            }
            a.value = b
        },
        html: function (a, b) {
            return s(b) ? a.innerHTML : (Ca(a, !0), void (a.innerHTML = b))
        },
        empty: Na
    }, function (a, b) {
        Aa.prototype[b] = function (b, d) {
            var e, f, g = this.length;
            if (a !== Na && (2 == a.length && a !== Ha && a !== La ? b : d) === c) {
                if (u(b)) {
                    for (e = 0; g > e; e++)
                        if (a === Ga) a(this[e], b);
                        else
                            for (f in b) a(this[e], f, b[f]);
                    return this
                }
                for (var h = a.$dv, i = h === c ? Math.min(g, 1) : g, j = 0; i > j; j++) {
                    var k = a(this[j], b, d);
                    h = h ? h + k : k
                }
                return h
            }
            for (e = 0; g > e; e++) a(this[e], b, d);
            return this
        }
    }), f({
        removeData: Ea,
        on: function Cg(a, b, c, d) {
            if (t(d)) throw ge("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
            if (xa(a)) {
                var e = Fa(a, !0),
                    f = e.events,
                    g = e.handle;
                g || (g = e.handle = Sa(a, f));
                for (var h = b.indexOf(" ") >= 0 ? b.split(" ") : [b], i = h.length; i--;) {
                    b = h[i];
                    var j = f[b];
                    j || (f[b] = [], "mouseenter" === b || "mouseleave" === b ? Cg(a, fe[b], function (a) {
                        var c = this,
                            d = a.relatedTarget;
                        (!d || d !== c && !c.contains(d)) && g(a, b)
                    }) : "$destroy" !== b && be(a, b, g), j = f[b]), j.push(c)
                }
            }
        },
        off: Da,
        one: function (a, b, c) {
            a = zd(a), a.on(b, function d() {
                a.off(b, c), a.off(b, d)
            }), a.on(b, c)
        },
        replaceWith: function (a, b) {
            var c, d = a.parentNode;
            Ca(a), f(new Aa(b), function (b) {
                c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b
            })
        },
        children: function (a) {
            var b = [];
            return f(a.childNodes, function (a) {
                a.nodeType === Ud && b.push(a)
            }), b
        },
        contents: function (a) {
            return a.contentDocument || a.childNodes || []
        },
        append: function (a, b) {
            var c = a.nodeType;
            if (c === Ud || c === Zd) {
                b = new Aa(b);
                for (var d = 0, e = b.length; e > d; d++) {
                    var f = b[d];
                    a.appendChild(f)
                }
            }
        },
        prepend: function (a, b) {
            if (a.nodeType === Ud) {
                var c = a.firstChild;
                f(new Aa(b), function (b) {
                    a.insertBefore(b, c)
                })
            }
        },
        wrap: function (a, b) {
            b = zd(b).eq(0).clone()[0];
            var c = a.parentNode;
            c && c.replaceChild(b, a), b.appendChild(a)
        },
        remove: Oa,
        detach: function (a) {
            Oa(a, !0)
        },
        after: function (a, b) {
            var c = a,
                d = a.parentNode;
            b = new Aa(b);
            for (var e = 0, f = b.length; f > e; e++) {
                var g = b[e];
                d.insertBefore(g, c.nextSibling), c = g
            }
        },
        addClass: Ja,
        removeClass: Ia,
        toggleClass: function (a, b, c) {
            b && f(b.split(" "), function (b) {
                var d = c;
                s(d) && (d = !Ha(a, b)), (d ? Ja : Ia)(a, b)
            })
        },
        parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== Zd ? b : null
        },
        next: function (a) {
            return a.nextElementSibling
        },
        find: function (a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b) : []
        },
        clone: Ba,
        triggerHandler: function (a, b, c) {
            var d, e, g, h = b.type || b,
                i = Fa(a),
                j = i && i.events,
                k = j && j[h];
            k && (d = {
                preventDefault: function () {
                    this.defaultPrevented = !0
                },
                isDefaultPrevented: function () {
                    return this.defaultPrevented === !0
                },
                stopImmediatePropagation: function () {
                    this.immediatePropagationStopped = !0
                },
                isImmediatePropagationStopped: function () {
                    return this.immediatePropagationStopped === !0
                },
                stopPropagation: p,
                type: h,
                target: a
            }, b.type && (d = l(d, b)), e = O(k), g = c ? [d].concat(c) : [d], f(e, function (b) {
                d.isImmediatePropagationStopped() || b.apply(a, g)
            }))
        }
    }, function (a, b) {
        Aa.prototype[b] = function (b, c, d) {
            for (var e, f = 0, g = this.length; g > f; f++) s(e) ? (e = a(this[f], b, c, d), t(e) && (e = zd(e))) : Ka(e, a(this[f], b, c, d));
            return t(e) ? e : this
        }, Aa.prototype.bind = Aa.prototype.on, Aa.prototype.unbind = Aa.prototype.off
    }), Va.prototype = {
        put: function (a, b) {
            this[Ua(a, this.nextUid)] = b
        },
        get: function (a) {
            return this[Ua(a, this.nextUid)]
        },
        remove: function (a) {
            var b = this[a = Ua(a, this.nextUid)];
            return delete this[a], b
        }
    };
    var qe = [function () {
        this.$get = [function () {
            return Va
        }]
    }],
        re = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
        se = /,/,
        te = /^\s*(_?)(\S+?)\1\s*$/,
        ue = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
        ve = d("$injector");
    Ya.$$annotate = Xa;
    var we = d("$animate"),
        xe = 1,
        ye = "ng-animate",
        ze = function () {
            this.$get = ["$q", "$$rAF", function (a, b) {
                function c() { }
                return c.all = p, c.chain = p, c.prototype = {
                    end: p,
                    cancel: p,
                    resume: p,
                    pause: p,
                    complete: p,
                    then: function (c, d) {
                        return a(function (a) {
                            b(function () {
                                a()
                            })
                        }).then(c, d)
                    }
                }, c
            }]
        },
        Ae = function () {
            var a = new Va,
                b = [];
            this.$get = ["$$AnimateRunner", "$rootScope", function (c, d) {
                function e(c, e, g) {
                    var h = a.get(c);
                    h || (a.put(c, h = {}), b.push(c)), e && f(e.split(" "), function (a) {
                        a && (h[a] = !0)
                    }), g && f(g.split(" "), function (a) {
                        a && (h[a] = !1)
                    }), b.length > 1 || d.$$postDigest(function () {
                        f(b, function (b) {
                            var c = a.get(b);
                            if (c) {
                                var d = ab(b.attr("class")),
                                    e = "",
                                    g = "";
                                f(c, function (a, b) {
                                    var c = !!d[b];
                                    a !== c && (a ? e += (e.length ? " " : "") + b : g += (g.length ? " " : "") + b)
                                }), f(b, function (a) {
                                    e && Ja(a, e), g && Ia(a, g)
                                }), a.remove(b)
                            }
                        }), b.length = 0
                    })
                }
                return {
                    enabled: p,
                    on: p,
                    off: p,
                    pin: p,
                    push: function (a, b, d, f) {
                        return f && f(), d = d || {}, d.from && a.css(d.from), d.to && a.css(d.to), (d.addClass || d.removeClass) && e(a, d.addClass, d.removeClass), new c
                    }
                }
            }]
        },
        Be = ["$provide", function (a) {
            var b = this;
            this.$$registeredAnimations = Object.create(null), this.register = function (c, d) {
                if (c && "." !== c.charAt(0)) throw we("notcsel", "Expecting class selector starting with '.' got '{0}'.", c);
                var e = c + "-animation";
                b.$$registeredAnimations[c.substr(1)] = e, a.factory(e, d)
            }, this.classNameFilter = function (a) {
                if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null, this.$$classNameFilter)) {
                    var b = new RegExp("(\\s+|\\/)" + ye + "(\\s+|\\/)");
                    if (b.test(this.$$classNameFilter.toString())) throw we("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', ye)
                }
                return this.$$classNameFilter
            }, this.$get = ["$$animateQueue", function (a) {
                function b(a, b, c) {
                    if (c) {
                        var d = _a(c);
                        !d || d.parentNode || d.previousElementSibling || (c = null)
                    }
                    c ? c.after(a) : b.prepend(a)
                }
                return {
                    on: a.on,
                    off: a.off,
                    pin: a.pin,
                    enabled: a.enabled,
                    cancel: function (a) {
                        a.end && a.end()
                    },
                    enter: function (c, d, e, f) {
                        return d = d && zd(d), e = e && zd(e), d = d || e.parent(), b(c, d, e), a.push(c, "enter", bb(f))
                    },
                    move: function (c, d, e, f) {
                        return d = d && zd(d), e = e && zd(e), d = d || e.parent(), b(c, d, e), a.push(c, "move", bb(f))
                    },
                    leave: function (b, c) {
                        return a.push(b, "leave", bb(c), function () {
                            b.remove()
                        })
                    },
                    addClass: function (b, c, d) {
                        return d = bb(d), d.addClass = $a(d.addclass, c), a.push(b, "addClass", d)
                    },
                    removeClass: function (b, c, d) {
                        return d = bb(d), d.removeClass = $a(d.removeClass, c), a.push(b, "removeClass", d)
                    },
                    setClass: function (b, c, d, e) {
                        return e = bb(e), e.addClass = $a(e.addClass, c), e.removeClass = $a(e.removeClass, d), a.push(b, "setClass", e)
                    },
                    animate: function (b, c, d, e, f) {
                        return f = bb(f), f.from = f.from ? l(f.from, c) : c, f.to = f.to ? l(f.to, d) : d, e = e || "ng-inline-animate", f.tempClasses = $a(f.tempClasses, e), a.push(b, "animate", f)
                    }
                }
            }]
        }],
        Ce = d("$compile");
    hb.$inject = ["$provide", "$$sanitizeUriProvider"];
    var De = /^((?:x|data)[\:\-_])/i,
        Ee = d("$controller"),
        Fe = /^(\S+)(\s+as\s+(\w+))?$/,
        Ge = "application/json",
        He = {
            "Content-Type": Ge + ";charset=utf-8"
        },
        Ie = /^\[|^\{(?!\{)/,
        Je = {
            "[": /]$/,
            "{": /}$/
        },
        Ke = /^\)\]\}',?\n/,
        Le = Id.$interpolateMinErr = d("$interpolate");
    Le.throwNoconcat = function (a) {
        throw Le("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", a)
    }, Le.interr = function (a, b) {
        return Le("interr", "Can't interpolate: {0}\n{1}", a, b.toString())
    };
    var Me = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        Ne = {
            http: 80,
            https: 443,
            ftp: 21
        },
        Oe = d("$location"),
        Pe = {
            $$html5: !1,
            $$replace: !1,
            absUrl: Qb("$$absUrl"),
            url: function (a) {
                if (s(a)) return this.$$url;
                var b = Me.exec(a);
                return (b[1] || "" === a) && this.path(decodeURIComponent(b[1])), (b[2] || b[1] || "" === a) && this.search(b[3] || ""), this.hash(b[5] || ""), this
            },
            protocol: Qb("$$protocol"),
            host: Qb("$$host"),
            port: Qb("$$port"),
            path: Rb("$$path", function (a) {
                return a = null !== a ? a.toString() : "", "/" == a.charAt(0) ? a : "/" + a
            }),
            search: function (a, b) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (w(a) || x(a)) a = a.toString(), this.$$search = _(a);
                        else {
                            if (!u(a)) throw Oe("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                            a = N(a, {}), f(a, function (b, c) {
                                null == b && delete a[c]
                            }), this.$$search = a
                        }
                        break;
                    default:
                        s(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
                }
                return this.$$compose(), this
            },
            hash: Rb("$$hash", function (a) {
                return null !== a ? a.toString() : ""
            }),
            replace: function () {
                return this.$$replace = !0, this
            }
        };
    f([Pb, Ob, Nb], function (a) {
        a.prototype = Object.create(Pe), a.prototype.state = function (b) {
            if (!arguments.length) return this.$$state;
            if (a !== Nb || !this.$$html5) throw Oe("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
            return this.$$state = s(b) ? null : b, this
        }
    });
    var Qe = d("$parse"),
        Re = Function.prototype.call,
        Se = Function.prototype.apply,
        Te = Function.prototype.bind,
        Ue = pa();
    f("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (a) {
        Ue[a] = !0
    });
    var Ve = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "	",
        v: "",
        "'": "'",
        '"': '"'
    },
        We = function (a) {
            this.options = a
        };
    We.prototype = {
        constructor: We,
        lex: function (a) {
            for (this.text = a, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                var b = this.text.charAt(this.index);
                if ('"' === b || "'" === b) this.readString(b);
                else if (this.isNumber(b) || "." === b && this.isNumber(this.peek())) this.readNumber();
                else if (this.isIdent(b)) this.readIdent();
                else if (this.is(b, "(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: b
                }), this.index++;
                else if (this.isWhitespace(b)) this.index++;
                else {
                    var c = b + this.peek(),
                        d = c + this.peek(2),
                        e = Ue[b],
                        f = Ue[c],
                        g = Ue[d];
                    if (e || f || g) {
                        var h = g ? d : f ? c : b;
                        this.tokens.push({
                            index: this.index,
                            text: h,
                            operator: !0
                        }), this.index += h.length
                    } else this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
            }
            return this.tokens
        },
        is: function (a, b) {
            return -1 !== b.indexOf(a)
        },
        peek: function (a) {
            var b = a || 1;
            return this.index + b < this.text.length ? this.text.charAt(this.index + b) : !1
        },
        isNumber: function (a) {
            return a >= "0" && "9" >= a && "string" == typeof a
        },
        isWhitespace: function (a) {
            return " " === a || "\r" === a || "	" === a || "\n" === a || "" === a || " " === a
        },
        isIdent: function (a) {
            return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a
        },
        isExpOperator: function (a) {
            return "-" === a || "+" === a || this.isNumber(a)
        },
        throwError: function (a, b, c) {
            c = c || this.index;
            var d = t(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c;
            throw Qe("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", a, d, this.text)
        },
        readNumber: function () {
            for (var a = "", b = this.index; this.index < this.text.length;) {
                var c = td(this.text.charAt(this.index));
                if ("." == c || this.isNumber(c)) a += c;
                else {
                    var d = this.peek();
                    if ("e" == c && this.isExpOperator(d)) a += c;
                    else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1)) a += c;
                    else {
                        if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1)) break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            this.tokens.push({
                index: b,
                text: a,
                constant: !0,
                value: Number(a)
            })
        },
        readIdent: function () {
            for (var a = this.index; this.index < this.text.length;) {
                var b = this.text.charAt(this.index);
                if (!this.isIdent(b) && !this.isNumber(b)) break;
                this.index++
            }
            this.tokens.push({
                index: a,
                text: this.text.slice(a, this.index),
                identifier: !0
            })
        },
        readString: function (a) {
            var b = this.index;
            this.index++;
            for (var c = "", d = a, e = !1; this.index < this.text.length;) {
                var f = this.text.charAt(this.index);
                if (d += f, e) {
                    if ("u" === f) {
                        var g = this.text.substring(this.index + 1, this.index + 5);
                        g.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + g + "]"), this.index += 4, c += String.fromCharCode(parseInt(g, 16))
                    } else {
                        var h = Ve[f];
                        c += h || f
                    }
                    e = !1
                } else if ("\\" === f) e = !0;
                else {
                    if (f === a) return this.index++ , void this.tokens.push({
                        index: b,
                        text: d,
                        constant: !0,
                        value: c
                    });
                    c += f
                }
                this.index++
            }
            this.throwError("Unterminated quote", b)
        }
    };
    var Xe = function (a, b) {
        this.lexer = a, this.options = b
    };
    Xe.Program = "Program", Xe.ExpressionStatement = "ExpressionStatement", Xe.AssignmentExpression = "AssignmentExpression", Xe.ConditionalExpression = "ConditionalExpression", Xe.LogicalExpression = "LogicalExpression", Xe.BinaryExpression = "BinaryExpression", Xe.UnaryExpression = "UnaryExpression", Xe.CallExpression = "CallExpression", Xe.MemberExpression = "MemberExpression", Xe.Identifier = "Identifier", Xe.Literal = "Literal", Xe.ArrayExpression = "ArrayExpression", Xe.Property = "Property", Xe.ObjectExpression = "ObjectExpression", Xe.ThisExpression = "ThisExpression", Xe.NGValueParameter = "NGValueParameter", Xe.prototype = {
        ast: function (a) {
            this.text = a, this.tokens = this.lexer.lex(a);
            var b = this.program();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), b
        },
        program: function () {
            for (var a = []; ;)
                if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";")) return {
                    type: Xe.Program,
                    body: a
                }
        },
        expressionStatement: function () {
            return {
                type: Xe.ExpressionStatement,
                expression: this.filterChain()
            }
        },
        filterChain: function () {
            for (var a, b = this.expression(); a = this.expect("|");) b = this.filter(b);
            return b
        },
        expression: function () {
            return this.assignment()
        },
        assignment: function () {
            var a = this.ternary();
            return this.expect("=") && (a = {
                type: Xe.AssignmentExpression,
                left: a,
                right: this.assignment(),
                operator: "="
            }), a
        },
        ternary: function () {
            var a, b, c = this.logicalOR();
            return this.expect("?") && (a = this.expression(), this.consume(":")) ? (b = this.expression(), {
                type: Xe.ConditionalExpression,
                test: c,
                alternate: a,
                consequent: b
            }) : c
        },
        logicalOR: function () {
            for (var a = this.logicalAND(); this.expect("||");) a = {
                type: Xe.LogicalExpression,
                operator: "||",
                left: a,
                right: this.logicalAND()
            };
            return a
        },
        logicalAND: function () {
            for (var a = this.equality(); this.expect("&&");) a = {
                type: Xe.LogicalExpression,
                operator: "&&",
                left: a,
                right: this.equality()
            };
            return a
        },
        equality: function () {
            for (var a, b = this.relational(); a = this.expect("==", "!=", "===", "!==");) b = {
                type: Xe.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.relational()
            };
            return b
        },
        relational: function () {
            for (var a, b = this.additive(); a = this.expect("<", ">", "<=", ">=");) b = {
                type: Xe.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.additive()
            };
            return b
        },
        additive: function () {
            for (var a, b = this.multiplicative(); a = this.expect("+", "-");) b = {
                type: Xe.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.multiplicative()
            };
            return b
        },
        multiplicative: function () {
            for (var a, b = this.unary(); a = this.expect("*", "/", "%");) b = {
                type: Xe.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.unary()
            };
            return b
        },
        unary: function () {
            var a;
            return (a = this.expect("+", "-", "!")) ? {
                type: Xe.UnaryExpression,
                operator: a.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary()
        },
        primary: function () {
            var a;
            this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.constants.hasOwnProperty(this.peek().text) ? a = N(this.constants[this.consume().text]) : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var b; b = this.expect("(", "[", ".");) "(" === b.text ? (a = {
                type: Xe.CallExpression,
                callee: a,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === b.text ? (a = {
                type: Xe.MemberExpression,
                object: a,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === b.text ? a = {
                type: Xe.MemberExpression,
                object: a,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return a
        },
        filter: function (a) {
            for (var b = [a], c = {
                type: Xe.CallExpression,
                callee: this.identifier(),
                arguments: b,
                filter: !0
            }; this.expect(":");) b.push(this.expression());
            return c
        },
        parseArguments: function () {
            var a = [];
            if (")" !== this.peekToken().text)
                do a.push(this.expression()); while (this.expect(","));
            return a
        },
        identifier: function () {
            var a = this.consume();
            return a.identifier || this.throwError("is not a valid identifier", a), {
                type: Xe.Identifier,
                name: a.text
            }
        },
        constant: function () {
            return {
                type: Xe.Literal,
                value: this.consume().value
            }
        },
        arrayDeclaration: function () {
            var a = [];
            if ("]" !== this.peekToken().text)
                do {
                    if (this.peek("]")) break;
                    a.push(this.expression())
                } while (this.expect(","));
            return this.consume("]"), {
                type: Xe.ArrayExpression,
                elements: a
            }
        },
        object: function () {
            var a, b = [];
            if ("}" !== this.peekToken().text)
                do {
                    if (this.peek("}")) break;
                    a = {
                        type: Xe.Property,
                        kind: "init"
                    }, this.peek().constant ? a.key = this.constant() : this.peek().identifier ? a.key = this.identifier() : this.throwError("invalid key", this.peek()), this.consume(":"), a.value = this.expression(), b.push(a)
                } while (this.expect(","));
            return this.consume("}"), {
                type: Xe.ObjectExpression,
                properties: b
            }
        },
        throwError: function (a, b) {
            throw Qe("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", b.text, a, b.index + 1, this.text, this.text.substring(b.index))
        },
        consume: function (a) {
            if (0 === this.tokens.length) throw Qe("ueoe", "Unexpected end of expression: {0}", this.text);
            var b = this.expect(a);
            return b || this.throwError("is unexpected, expecting [" + a + "]", this.peek()), b
        },
        peekToken: function () {
            if (0 === this.tokens.length) throw Qe("ueoe", "Unexpected end of expression: {0}", this.text);
            return this.tokens[0]
        },
        peek: function (a, b, c, d) {
            return this.peekAhead(0, a, b, c, d)
        },
        peekAhead: function (a, b, c, d, e) {
            if (this.tokens.length > a) {
                var f = this.tokens[a],
                    g = f.text;
                if (g === b || g === c || g === d || g === e || !b && !c && !d && !e) return f
            }
            return !1
        },
        expect: function (a, b, c, d) {
            var e = this.peek(a, b, c, d);
            return e ? (this.tokens.shift(), e) : !1
        },
        constants: {
            "true": {
                type: Xe.Literal,
                value: !0
            },
            "false": {
                type: Xe.Literal,
                value: !1
            },
            "null": {
                type: Xe.Literal,
                value: null
            },
            undefined: {
                type: Xe.Literal,
                value: c
            },
            "this": {
                type: Xe.ThisExpression
            }
        }
    }, ec.prototype = {
        compile: function (a, b) {
            var d = this,
                e = this.astBuilder.ast(a);
            this.state = {
                nextId: 0,
                filters: {},
                expensiveChecks: b,
                fn: {
                    vars: [],
                    body: [],
                    own: {}
                },
                assign: {
                    vars: [],
                    body: [],
                    own: {}
                },
                inputs: []
            }, $b(e, d.$filter);
            var g, h = "";
            if (this.stage = "assign", g = bc(e)) {
                this.state.computing = "assign";
                var i = this.nextId();
                this.recurse(g, i), h = "fn.assign=" + this.generateFunction("assign", "s,v,l")
            }
            var j = _b(e.body);
            d.stage = "inputs", f(j, function (a, b) {
                var c = "fn" + b;
                d.state[c] = {
                    vars: [],
                    body: [],
                    own: {}
                }, d.state.computing = c;
                var e = d.nextId();
                d.recurse(a, e), d.return_(e), d.state.inputs.push(c), a.watchId = b
            }), this.state.computing = "fn", this.stage = "main", this.recurse(e);
            var k = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + h + this.watchFns() + "return fn;",
                l = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "ifDefined", "plus", "text", k)(this.$filter, Ub, Vb, Wb, Xb, Yb, a);
            return this.state = this.stage = c, l.literal = cc(e), l.constant = dc(e), l
        },
        USE: "use",
        STRICT: "strict",
        watchFns: function () {
            var a = [],
                b = this.state.inputs,
                c = this;
            return f(b, function (b) {
                a.push("var " + b + "=" + c.generateFunction(b, "s"))
            }), b.length && a.push("fn.inputs=[" + b.join(",") + "];"), a.join("")
        },
        generateFunction: function (a, b) {
            return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};"
        },
        filterPrefix: function () {
            var a = [],
                b = this;
            return f(this.state.filters, function (c, d) {
                a.push(c + "=$filter(" + b.escape(d) + ")")
            }), a.length ? "var " + a.join(",") + ";" : ""
        },
        varsPrefix: function (a) {
            return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : ""
        },
        body: function (a) {
            return this.state[a].body.join("")
        },
        recurse: function (a, b, d, e, g, h) {
            var i, j, k, l, m = this;
            if (e = e || p, !h && t(a.watchId)) return b = b || this.nextId(), void this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, e, g, !0));
            switch (a.type) {
                case Xe.Program:
                    f(a.body, function (b, d) {
                        m.recurse(b.expression, c, c, function (a) {
                            j = a
                        }), d !== a.body.length - 1 ? m.current().body.push(j, ";") : m.return_(j)
                    });
                    break;
                case Xe.Literal:
                    l = this.escape(a.value), this.assign(b, l), e(l);
                    break;
                case Xe.UnaryExpression:
                    this.recurse(a.argument, c, c, function (a) {
                        j = a
                    }), l = a.operator + "(" + this.ifDefined(j, 0) + ")", this.assign(b, l), e(l);
                    break;
                case Xe.BinaryExpression:
                    this.recurse(a.left, c, c, function (a) {
                        i = a
                    }), this.recurse(a.right, c, c, function (a) {
                        j = a
                    }), l = "+" === a.operator ? this.plus(i, j) : "-" === a.operator ? this.ifDefined(i, 0) + a.operator + this.ifDefined(j, 0) : "(" + i + ")" + a.operator + "(" + j + ")", this.assign(b, l), e(l);
                    break;
                case Xe.LogicalExpression:
                    b = b || this.nextId(), m.recurse(a.left, b), m.if_("&&" === a.operator ? b : m.not(b), m.lazyRecurse(a.right, b)), e(b);
                    break;
                case Xe.ConditionalExpression:
                    b = b || this.nextId(), m.recurse(a.test, b), m.if_(b, m.lazyRecurse(a.alternate, b), m.lazyRecurse(a.consequent, b)), e(b);
                    break;
                case Xe.Identifier:
                    b = b || this.nextId(), d && (d.context = "inputs" === m.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name), Ub(a.name), m.if_("inputs" === m.stage || m.not(m.getHasOwnProperty("l", a.name)), function () {
                        m.if_("inputs" === m.stage || "s", function () {
                            g && 1 !== g && m.if_(m.not(m.nonComputedMember("s", a.name)), m.lazyAssign(m.nonComputedMember("s", a.name), "{}")), m.assign(b, m.nonComputedMember("s", a.name))
                        })
                    }, b && m.lazyAssign(b, m.nonComputedMember("l", a.name))), (m.state.expensiveChecks || hc(a.name)) && m.addEnsureSafeObject(b), e(b);
                    break;
                case Xe.MemberExpression:
                    i = d && (d.context = this.nextId()) || this.nextId(), b = b || this.nextId(), m.recurse(a.object, i, c, function () {
                        m.if_(m.notNull(i), function () {
                            a.computed ? (j = m.nextId(), m.recurse(a.property, j), m.addEnsureSafeMemberName(j), g && 1 !== g && m.if_(m.not(m.computedMember(i, j)), m.lazyAssign(m.computedMember(i, j), "{}")), l = m.ensureSafeObject(m.computedMember(i, j)), m.assign(b, l), d && (d.computed = !0, d.name = j)) : (Ub(a.property.name), g && 1 !== g && m.if_(m.not(m.nonComputedMember(i, a.property.name)), m.lazyAssign(m.nonComputedMember(i, a.property.name), "{}")), l = m.nonComputedMember(i, a.property.name), (m.state.expensiveChecks || hc(a.property.name)) && (l = m.ensureSafeObject(l)), m.assign(b, l), d && (d.computed = !1, d.name = a.property.name)), e(b)
                        })
                    }, !!g);
                    break;
                case Xe.CallExpression:
                    b = b || this.nextId(), a.filter ? (j = m.filter(a.callee.name), k = [], f(a.arguments, function (a) {
                        var b = m.nextId();
                        m.recurse(a, b), k.push(b)
                    }), l = j + "(" + k.join(",") + ")", m.assign(b, l), e(b)) : (j = m.nextId(), i = {}, k = [], m.recurse(a.callee, j, i, function () {
                        m.if_(m.notNull(j), function () {
                            m.addEnsureSafeFunction(j), f(a.arguments, function (a) {
                                m.recurse(a, m.nextId(), c, function (a) {
                                    k.push(m.ensureSafeObject(a))
                                })
                            }), i.name ? (m.state.expensiveChecks || m.addEnsureSafeObject(i.context), l = m.member(i.context, i.name, i.computed) + "(" + k.join(",") + ")") : l = j + "(" + k.join(",") + ")", l = m.ensureSafeObject(l), m.assign(b, l), e(b)
                        })
                    }));
                    break;
                case Xe.AssignmentExpression:
                    if (j = this.nextId(), i = {}, !ac(a.left)) throw Qe("lval", "Trying to assing a value to a non l-value");
                    this.recurse(a.left, c, i, function () {
                        m.if_(m.notNull(i.context), function () {
                            m.recurse(a.right, j), m.addEnsureSafeObject(m.member(i.context, i.name, i.computed)), l = m.member(i.context, i.name, i.computed) + a.operator + j, m.assign(b, l), e(b || l)
                        })
                    }, 1);
                    break;
                case Xe.ArrayExpression:
                    k = [], f(a.elements, function (a) {
                        m.recurse(a, m.nextId(), c, function (a) {
                            k.push(a)
                        })
                    }), l = "[" + k.join(",") + "]", this.assign(b, l), e(l);
                    break;
                case Xe.ObjectExpression:
                    k = [], f(a.properties, function (a) {
                        m.recurse(a.value, m.nextId(), c, function (b) {
                            k.push(m.escape(a.key.type === Xe.Identifier ? a.key.name : "" + a.key.value) + ":" + b)
                        })
                    }), l = "{" + k.join(",") + "}", this.assign(b, l), e(l);
                    break;
                case Xe.ThisExpression:
                    this.assign(b, "s"), e("s");
                    break;
                case Xe.NGValueParameter:
                    this.assign(b, "v"), e("v")
            }
        },
        getHasOwnProperty: function (a, b) {
            var c = a + "." + b,
                d = this.current().own;
            return d.hasOwnProperty(c) || (d[c] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")")), d[c]
        },
        assign: function (a, b) {
            return a ? (this.current().body.push(a, "=", b, ";"), a) : void 0
        },
        filter: function (a) {
            return this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0)), this.state.filters[a]
        },
        ifDefined: function (a, b) {
            return "ifDefined(" + a + "," + this.escape(b) + ")"
        },
        plus: function (a, b) {
            return "plus(" + a + "," + b + ")"
        },
        return_: function (a) {
            this.current().body.push("return ", a, ";")
        },
        if_: function (a, b, c) {
            if (a === !0) b();
            else {
                var d = this.current().body;
                d.push("if(", a, "){"), b(), d.push("}"), c && (d.push("else{"), c(), d.push("}"))
            }
        },
        not: function (a) {
            return "!(" + a + ")"
        },
        notNull: function (a) {
            return a + "!=null"
        },
        nonComputedMember: function (a, b) {
            return a + "." + b
        },
        computedMember: function (a, b) {
            return a + "[" + b + "]"
        },
        member: function (a, b, c) {
            return c ? this.computedMember(a, b) : this.nonComputedMember(a, b)
        },
        addEnsureSafeObject: function (a) {
            this.current().body.push(this.ensureSafeObject(a), ";")
        },
        addEnsureSafeMemberName: function (a) {
            this.current().body.push(this.ensureSafeMemberName(a), ";")
        },
        addEnsureSafeFunction: function (a) {
            this.current().body.push(this.ensureSafeFunction(a), ";")
        },
        ensureSafeObject: function (a) {
            return "ensureSafeObject(" + a + ",text)"
        },
        ensureSafeMemberName: function (a) {
            return "ensureSafeMemberName(" + a + ",text)"
        },
        ensureSafeFunction: function (a) {
            return "ensureSafeFunction(" + a + ",text)"
        },
        lazyRecurse: function (a, b, c, d, e, f) {
            var g = this;
            return function () {
                g.recurse(a, b, c, d, e, f)
            }
        },
        lazyAssign: function (a, b) {
            var c = this;
            return function () {
                c.assign(a, b)
            }
        },
        stringEscapeRegex: /[^ a-zA-Z0-9]/g,
        stringEscapeFn: function (a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        },
        escape: function (a) {
            if (w(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (x(a)) return a.toString();
            if (a === !0) return "true";
            if (a === !1) return "false";
            if (null === a) return "null";
            if ("undefined" == typeof a) return "undefined";
            throw Qe("esc", "IMPOSSIBLE")
        },
        nextId: function (a, b) {
            var c = "v" + this.state.nextId++;
            return a || this.current().vars.push(c + (b ? "=" + b : "")), c
        },
        current: function () {
            return this.state[this.state.computing]
        }
    }, fc.prototype = {
        compile: function (a, b) {
            var c = this,
                d = this.astBuilder.ast(a);
            this.expression = a, this.expensiveChecks = b, $b(d, c.$filter);
            var e, g;
            (e = bc(d)) && (g = this.recurse(e));
            var h, i = _b(d.body);
            i && (h = [], f(i, function (a, b) {
                var d = c.recurse(a);
                a.input = d, h.push(d), a.watchId = b
            }));
            var j = [];
            f(d.body, function (a) {
                j.push(c.recurse(a.expression))
            });
            var k = 0 === d.body.length ? function () { } : 1 === d.body.length ? j[0] : function (a, b) {
                var c;
                return f(j, function (d) {
                    c = d(a, b)
                }), c
            };
            return g && (k.assign = function (a, b, c) {
                return g(a, c, b)
            }), h && (k.inputs = h), k.literal = cc(d), k.constant = dc(d), k
        },
        recurse: function (a, b, d) {
            var e, g, h, i = this;
            if (a.input) return this.inputs(a.input, a.watchId);
            switch (a.type) {
                case Xe.Literal:
                    return this.value(a.value, b);
                case Xe.UnaryExpression:
                    return g = this.recurse(a.argument), this["unary" + a.operator](g, b);
                case Xe.BinaryExpression:
                    return e = this.recurse(a.left), g = this.recurse(a.right), this["binary" + a.operator](e, g, b);
                case Xe.LogicalExpression:
                    return e = this.recurse(a.left), g = this.recurse(a.right), this["binary" + a.operator](e, g, b);
                case Xe.ConditionalExpression:
                    return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);
                case Xe.Identifier:
                    return Ub(a.name, i.expression), i.identifier(a.name, i.expensiveChecks || hc(a.name), b, d, i.expression);
                case Xe.MemberExpression:
                    return e = this.recurse(a.object, !1, !!d), a.computed || (Ub(a.property.name, i.expression), g = a.property.name), a.computed && (g = this.recurse(a.property)), a.computed ? this.computedMember(e, g, b, d, i.expression) : this.nonComputedMember(e, g, i.expensiveChecks, b, d, i.expression);
                case Xe.CallExpression:
                    return h = [], f(a.arguments, function (a) {
                        h.push(i.recurse(a))
                    }), a.filter && (g = this.$filter(a.callee.name)), a.filter || (g = this.recurse(a.callee, !0)), a.filter ? function (a, d, e, f) {
                        for (var i = [], j = 0; j < h.length; ++j) i.push(h[j](a, d, e, f));
                        var k = g.apply(c, i, f);
                        return b ? {
                            context: c,
                            name: c,
                            value: k
                        } : k
                    } : function (a, c, d, e) {
                        var f, j = g(a, c, d, e);
                        if (null != j.value) {
                            Vb(j.context, i.expression), Wb(j.value, i.expression);
                            for (var k = [], l = 0; l < h.length; ++l) k.push(Vb(h[l](a, c, d, e), i.expression));
                            f = Vb(j.value.apply(j.context, k), i.expression)
                        }
                        return b ? {
                            value: f
                        } : f
                    };
                case Xe.AssignmentExpression:
                    return e = this.recurse(a.left, !0, 1), g = this.recurse(a.right),
                        function (a, c, d, f) {
                            var h = e(a, c, d, f),
                                j = g(a, c, d, f);
                            return Vb(h.value, i.expression), h.context[h.name] = j, b ? {
                                value: j
                            } : j
                        };
                case Xe.ArrayExpression:
                    return h = [], f(a.elements, function (a) {
                        h.push(i.recurse(a))
                    }),
                        function (a, c, d, e) {
                            for (var f = [], g = 0; g < h.length; ++g) f.push(h[g](a, c, d, e));
                            return b ? {
                                value: f
                            } : f
                        };
                case Xe.ObjectExpression:
                    return h = [], f(a.properties, function (a) {
                        h.push({
                            key: a.key.type === Xe.Identifier ? a.key.name : "" + a.key.value,
                            value: i.recurse(a.value)
                        })
                    }),
                        function (a, c, d, e) {
                            for (var f = {}, g = 0; g < h.length; ++g) f[h[g].key] = h[g].value(a, c, d, e);
                            return b ? {
                                value: f
                            } : f
                        };
                case Xe.ThisExpression:
                    return function (a) {
                        return b ? {
                            value: a
                        } : a
                    };
                case Xe.NGValueParameter:
                    return function (a, c, d, e) {
                        return b ? {
                            value: d
                        } : d
                    }
            }
        },
        "unary+": function (a, b) {
            return function (c, d, e, f) {
                var g = a(c, d, e, f);
                return g = t(g) ? +g : 0, b ? {
                    value: g
                } : g
            }
        },
        "unary-": function (a, b) {
            return function (c, d, e, f) {
                var g = a(c, d, e, f);
                return g = t(g) ? -g : 0, b ? {
                    value: g
                } : g
            }
        },
        "unary!": function (a, b) {
            return function (c, d, e, f) {
                var g = !a(c, d, e, f);
                return b ? {
                    value: g
                } : g
            }
        },
        "binary+": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g),
                    i = b(d, e, f, g),
                    j = Yb(h, i);
                return c ? {
                    value: j
                } : j
            }
        },
        "binary-": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g),
                    i = b(d, e, f, g),
                    j = (t(h) ? h : 0) - (t(i) ? i : 0);
                return c ? {
                    value: j
                } : j
            }
        },
        "binary*": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g) * b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary/": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g) / b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary%": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g) % b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary===": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g) === b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary!==": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g) !== b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary==": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g) == b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary!=": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g) != b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary<": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g) < b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary>": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g) > b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary<=": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g) <= b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary>=": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g) >= b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary&&": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g) && b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary||": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g) || b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "ternary?:": function (a, b, c, d) {
            return function (e, f, g, h) {
                var i = a(e, f, g, h) ? b(e, f, g, h) : c(e, f, g, h);
                return d ? {
                    value: i
                } : i
            }
        },
        value: function (a, b) {
            return function () {
                return b ? {
                    context: c,
                    name: c,
                    value: a
                } : a
            }
        },
        identifier: function (a, b, d, e, f) {
            return function (g, h, i, j) {
                var k = h && a in h ? h : g;
                e && 1 !== e && k && !k[a] && (k[a] = {});
                var l = k ? k[a] : c;
                return b && Vb(l, f), d ? {
                    context: k,
                    name: a,
                    value: l
                } : l
            }
        },
        computedMember: function (a, b, c, d, e) {
            return function (f, g, h, i) {
                var j, k, l = a(f, g, h, i);
                return null != l && (j = b(f, g, h, i), Ub(j, e), d && 1 !== d && l && !l[j] && (l[j] = {}), k = l[j], Vb(k, e)), c ? {
                    context: l,
                    name: j,
                    value: k
                } : k
            }
        },
        nonComputedMember: function (a, b, d, e, f, g) {
            return function (h, i, j, k) {
                var l = a(h, i, j, k);
                f && 1 !== f && l && !l[b] && (l[b] = {});
                var m = null != l ? l[b] : c;
                return (d || hc(b)) && Vb(m, g), e ? {
                    context: l,
                    name: b,
                    value: m
                } : m
            }
        },
        inputs: function (a, b) {
            return function (c, d, e, f) {
                return f ? f[b] : a(c, d, e)
            }
        }
    };
    var Ye = function (a, b, c) {
        this.lexer = a, this.$filter = b, this.options = c, this.ast = new Xe(this.lexer), this.astCompiler = c.csp ? new fc(this.ast, b) : new ec(this.ast, b)
    };
    Ye.prototype = {
        constructor: Ye,
        parse: function (a) {
            return this.astCompiler.compile(a, this.options.expensiveChecks)
        }
    };
    var Ze = (pa(), pa(), Object.prototype.valueOf),
        $e = d("$sce"),
        _e = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        },
        Ce = d("$compile"),
        af = b.createElement("a"),
        bf = yc(a.location.href);
    Bc.$inject = ["$document"], Dc.$inject = ["$provide"], Jc.$inject = ["$locale"], Kc.$inject = ["$locale"];
    var cf = ".",
        df = {
            yyyy: Nc("FullYear", 4),
            yy: Nc("FullYear", 2, 0, !0),
            y: Nc("FullYear", 1),
            MMMM: Oc("Month"),
            MMM: Oc("Month", !0),
            MM: Nc("Month", 2, 1),
            M: Nc("Month", 1, 1),
            dd: Nc("Date", 2),
            d: Nc("Date", 1),
            HH: Nc("Hours", 2),
            H: Nc("Hours", 1),
            hh: Nc("Hours", 2, -12),
            h: Nc("Hours", 1, -12),
            mm: Nc("Minutes", 2),
            m: Nc("Minutes", 1),
            ss: Nc("Seconds", 2),
            s: Nc("Seconds", 1),
            sss: Nc("Milliseconds", 3),
            EEEE: Oc("Day"),
            EEE: Oc("Day", !0),
            a: Tc,
            Z: Pc,
            ww: Sc(2),
            w: Sc(1),
            G: Uc,
            GG: Uc,
            GGG: Uc,
            GGGG: Vc
        },
        ef = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
        ff = /^\-?\d+$/;
    Wc.$inject = ["$locale"];
    var gf = r(td),
        hf = r(vd);
    Zc.$inject = ["$parse"];
    var jf = r({
        restrict: "E",
        compile: function (a, b) {
            return b.href || b.xlinkHref ? void 0 : function (a, b) {
                if ("a" === b[0].nodeName.toLowerCase()) {
                    var c = "[object SVGAnimatedString]" === Fd.call(b.prop("href")) ? "xlink:href" : "href";
                    b.on("click", function (a) {
                        b.attr(c) || a.preventDefault()
                    })
                }
            }
        }
    }),
        kf = {};
    f(ne, function (a, b) {
        function c(a, c, e) {
            a.$watch(e[d], function (a) {
                e.$set(b, !!a)
            })
        }
        if ("multiple" != a) {
            var d = ib("ng-" + b),
                e = c;
            "checked" === a && (e = function (a, b, e) {
                e.ngModel !== e[d] && c(a, b, e)
            }), kf[d] = function () {
                return {
                    restrict: "A",
                    priority: 100,
                    link: e
                }
            }
        }
    }), f(pe, function (a, b) {
        kf[b] = function () {
            return {
                priority: 100,
                link: function (a, c, d) {
                    if ("ngPattern" === b && "/" == d.ngPattern.charAt(0)) {
                        var e = d.ngPattern.match(rd);
                        if (e) return void d.$set("ngPattern", new RegExp(e[1], e[2]))
                    }
                    a.$watch(d[b], function (a) {
                        d.$set(b, a)
                    })
                }
            }
        }
    }), f(["src", "srcset", "href"], function (a) {
        var b = ib("ng-" + a);
        kf[b] = function () {
            return {
                priority: 99,
                link: function (c, d, e) {
                    var f = a,
                        g = a;
                    "href" === a && "[object SVGAnimatedString]" === Fd.call(d.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null), e.$observe(b, function (b) {
                        return b ? (e.$set(g, b), void (yd && f && d.prop(f, e[g]))) : void ("href" === a && e.$set(g, null));
                    })
                }
            }
        }
    });
    var lf = {
        $addControl: p,
        $$renameControl: _c,
        $removeControl: p,
        $setValidity: p,
        $setDirty: p,
        $setPristine: p,
        $setSubmitted: p
    },
        mf = "ng-submitted";
    ad.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var nf = function (a) {
        return ["$timeout", function (b) {
            var d = {
                name: "form",
                restrict: a ? "EAC" : "E",
                controller: ad,
                compile: function (d, e) {
                    d.addClass(Vf).addClass(Tf);
                    var f = e.name ? "name" : a && e.ngForm ? "ngForm" : !1;
                    return {
                        pre: function (a, d, e, g) {
                            if (!("action" in e)) {
                                var h = function (b) {
                                    a.$apply(function () {
                                        g.$commitViewValue(), g.$setSubmitted()
                                    }), b.preventDefault()
                                };
                                be(d[0], "submit", h), d.on("$destroy", function () {
                                    b(function () {
                                        ce(d[0], "submit", h)
                                    }, 0, !1)
                                })
                            }
                            var i = g.$$parentForm;
                            f && (gc(a, g.$name, g, g.$name), e.$observe(f, function (b) {
                                g.$name !== b && (gc(a, g.$name, c, g.$name), i.$$renameControl(g, b), gc(a, g.$name, g, g.$name))
                            })), d.on("$destroy", function () {
                                i.$removeControl(g), f && gc(a, e[f], c, g.$name), l(g, lf)
                            })
                        }
                    }
                }
            };
            return d
        }]
    },
        of = nf(),
        pf = nf(!0),
        qf = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
        rf = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        sf = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
        tf = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
        uf = /^(\d{4})-(\d{2})-(\d{2})$/,
        vf = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        wf = /^(\d{4})-W(\d\d)$/,
        xf = /^(\d{4})-(\d\d)$/,
        yf = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        zf = {
            text: cd,
            date: gd("date", uf, fd(uf, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": gd("datetimelocal", vf, fd(vf, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: gd("time", yf, fd(yf, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: gd("week", wf, ed, "yyyy-Www"),
            month: gd("month", xf, fd(xf, ["yyyy", "MM"]), "yyyy-MM"),
            number: id,
            url: jd,
            email: kd,
            radio: ld,
            checkbox: nd,
            hidden: p,
            button: p,
            submit: p,
            reset: p,
            file: p
        },
        Af = ["$browser", "$sniffer", "$filter", "$parse", function (a, b, c, d) {
            return {
                restrict: "E",
                require: ["?ngModel"],
                link: {
                    pre: function (e, f, g, h) {
                        h[0] && (zf[td(g.type)] || zf.text)(e, f, g, h[0], b, a, c, d)
                    }
                }
            }
        }],
        Bf = /^(true|false|\d+)$/,
        Cf = function () {
            return {
                restrict: "A",
                priority: 100,
                compile: function (a, b) {
                    return Bf.test(b.ngValue) ? function (a, b, c) {
                        c.$set("value", a.$eval(c.ngValue))
                    } : function (a, b, c) {
                        a.$watch(c.ngValue, function (a) {
                            c.$set("value", a)
                        })
                    }
                }
            }
        },
        Df = ["$compile", function (a) {
            return {
                restrict: "AC",
                compile: function (b) {
                    return a.$$addBindingClass(b),
                        function (b, d, e) {
                            a.$$addBindingInfo(d, e.ngBind), d = d[0], b.$watch(e.ngBind, function (a) {
                                d.textContent = a === c ? "" : a
                            })
                        }
                }
            }
        }],
        Ef = ["$interpolate", "$compile", function (a, b) {
            return {
                compile: function (d) {
                    return b.$$addBindingClass(d),
                        function (d, e, f) {
                            var g = a(e.attr(f.$attr.ngBindTemplate));
                            b.$$addBindingInfo(e, g.expressions), e = e[0], f.$observe("ngBindTemplate", function (a) {
                                e.textContent = a === c ? "" : a
                            })
                        }
                }
            }
        }],
        Ff = ["$sce", "$parse", "$compile", function (a, b, c) {
            return {
                restrict: "A",
                compile: function (d, e) {
                    var f = b(e.ngBindHtml),
                        g = b(e.ngBindHtml, function (a) {
                            return (a || "").toString()
                        });
                    return c.$$addBindingClass(d),
                        function (b, d, e) {
                            c.$$addBindingInfo(d, e.ngBindHtml), b.$watch(g, function () {
                                d.html(a.getTrustedHtml(f(b)) || "")
                            })
                        }
                }
            }
        }],
        Gf = r({
            restrict: "A",
            require: "ngModel",
            link: function (a, b, c, d) {
                d.$viewChangeListeners.push(function () {
                    a.$eval(c.ngChange)
                })
            }
        }),
        Hf = od("", !0),
        If = od("Odd", 0),
        Jf = od("Even", 1),
        Kf = $c({
            compile: function (a, b) {
                b.$set("ngCloak", c), a.removeClass("ng-cloak")
            }
        }),
        Lf = [function () {
            return {
                restrict: "A",
                scope: !0,
                controller: "@",
                priority: 500
            }
        }],
        Mf = {},
        Nf = {
            blur: !0,
            focus: !0
        };
    f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
        var b = ib("ng-" + a);
        Mf[b] = ["$parse", "$rootScope", function (c, d) {
            return {
                restrict: "A",
                compile: function (e, f) {
                    var g = c(f[b], null, !0);
                    return function (b, c) {
                        c.on(a, function (c) {
                            var e = function () {
                                g(b, {
                                    $event: c
                                })
                            };
                            Nf[a] && d.$$phase ? b.$evalAsync(e) : b.$apply(e)
                        })
                    }
                }
            }
        }]
    });
    var Of = ["$animate", function (a) {
        return {
            multiElement: !0,
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function (c, d, e, f, g) {
                var h, i, j;
                c.$watch(e.ngIf, function (c) {
                    c ? i || g(function (c, f) {
                        i = f, c[c.length++] = b.createComment(" end ngIf: " + e.ngIf + " "), h = {
                            clone: c
                        }, a.enter(c, d.parent(), d)
                    }) : (j && (j.remove(), j = null), i && (i.$destroy(), i = null), h && (j = oa(h.clone), a.leave(j).then(function () {
                        j = null
                    }), h = null))
                })
            }
        }
    }],
        Pf = ["$templateRequest", "$anchorScroll", "$animate", "$sce", function (a, b, c, d) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: Id.noop,
                compile: function (e, f) {
                    var g = f.ngInclude || f.src,
                        h = f.onload || "",
                        i = f.autoscroll;
                    return function (e, f, j, k, l) {
                        var m, n, o, p = 0,
                            q = function () {
                                n && (n.remove(), n = null), m && (m.$destroy(), m = null), o && (c.leave(o).then(function () {
                                    n = null
                                }), n = o, o = null)
                            };
                        e.$watch(d.parseAsResourceUrl(g), function (d) {
                            var g = function () {
                                !t(i) || i && !e.$eval(i) || b()
                            },
                                j = ++p;
                            d ? (a(d, !0).then(function (a) {
                                if (j === p) {
                                    var b = e.$new();
                                    k.template = a;
                                    var i = l(b, function (a) {
                                        q(), c.enter(a, null, f).then(g)
                                    });
                                    m = b, o = i, m.$emit("$includeContentLoaded", d), e.$eval(h)
                                }
                            }, function () {
                                j === p && (q(), e.$emit("$includeContentError", d))
                            }), e.$emit("$includeContentRequested", d)) : (q(), k.template = null)
                        })
                    }
                }
            }
        }],
        Qf = ["$compile", function (a) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function (c, d, e, f) {
                    return /SVG/.test(d[0].toString()) ? (d.empty(), void a(ya(f.template, b).childNodes)(c, function (a) {
                        d.append(a)
                    }, {
                        futureParentElement: d
                    })) : (d.html(f.template), void a(d.contents())(c))
                }
            }
        }],
        Rf = $c({
            priority: 450,
            compile: function () {
                return {
                    pre: function (a, b, c) {
                        a.$eval(c.ngInit)
                    }
                }
            }
        }),
        Sf = function () {
            return {
                restrict: "A",
                priority: 100,
                require: "ngModel",
                link: function (a, b, d, e) {
                    var g = b.attr(d.$attr.ngList) || ", ",
                        h = "false" !== d.ngTrim,
                        i = h ? Nd(g) : g,
                        j = function (a) {
                            if (!s(a)) {
                                var b = [];
                                return a && f(a.split(i), function (a) {
                                    a && b.push(h ? Nd(a) : a)
                                }), b
                            }
                        };
                    e.$parsers.push(j), e.$formatters.push(function (a) {
                        return Ld(a) ? a.join(g) : c
                    }), e.$isEmpty = function (a) {
                        return !a || !a.length
                    }
                }
            }
        },
        Tf = "ng-valid",
        Uf = "ng-invalid",
        Vf = "ng-pristine",
        Wf = "ng-dirty",
        Xf = "ng-untouched",
        Yf = "ng-touched",
        Zf = "ng-pending",
        $f = new d("ngModel"),
        _f = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (a, b, d, e, g, h, i, j, k, l) {
            this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = c, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = c, this.$name = l(d.name || "", !1)(a);
            var m, n = g(d.ngModel),
                o = n.assign,
                q = n,
                r = o,
                u = null,
                v = this;
            this.$$setOptions = function (a) {
                if (v.$options = a, a && a.getterSetter) {
                    var b = g(d.ngModel + "()"),
                        c = g(d.ngModel + "($$$p)");
                    q = function (a) {
                        var c = n(a);
                        return z(c) && (c = b(a)), c
                    }, r = function (a, b) {
                        z(n(a)) ? c(a, {
                            $$$p: v.$modelValue
                        }) : o(a, v.$modelValue)
                    }
                } else if (!n.assign) throw $f("nonassign", "Expression '{0}' is non-assignable. Element: {1}", d.ngModel, Z(e))
            }, this.$render = p, this.$isEmpty = function (a) {
                return s(a) || "" === a || null === a || a !== a
            };
            var w = e.inheritedData("$formController") || lf,
                y = 0;
            pd({
                ctrl: this,
                $element: e,
                set: function (a, b) {
                    a[b] = !0
                },
                unset: function (a, b) {
                    delete a[b]
                },
                parentForm: w,
                $animate: h
            }), this.$setPristine = function () {
                v.$dirty = !1, v.$pristine = !0, h.removeClass(e, Wf), h.addClass(e, Vf)
            }, this.$setDirty = function () {
                v.$dirty = !0, v.$pristine = !1, h.removeClass(e, Vf), h.addClass(e, Wf), w.$setDirty()
            }, this.$setUntouched = function () {
                v.$touched = !1, v.$untouched = !0, h.setClass(e, Xf, Yf)
            }, this.$setTouched = function () {
                v.$touched = !0, v.$untouched = !1, h.setClass(e, Yf, Xf)
            }, this.$rollbackViewValue = function () {
                i.cancel(u), v.$viewValue = v.$$lastCommittedViewValue, v.$render()
            }, this.$validate = function () {
                if (!x(v.$modelValue) || !isNaN(v.$modelValue)) {
                    var a = v.$$lastCommittedViewValue,
                        b = v.$$rawModelValue,
                        d = v.$valid,
                        e = v.$modelValue,
                        f = v.$options && v.$options.allowInvalid;
                    v.$$runValidators(b, a, function (a) {
                        f || d === a || (v.$modelValue = a ? b : c, v.$modelValue !== e && v.$$writeModelToScope())
                    })
                }
            }, this.$$runValidators = function (a, b, d) {
                function e() {
                    var a = v.$$parserName || "parse";
                    return m !== c ? (m || (f(v.$validators, function (a, b) {
                        i(b, null)
                    }), f(v.$asyncValidators, function (a, b) {
                        i(b, null)
                    })), i(a, m), m) : (i(a, null), !0)
                }

                function g() {
                    var c = !0;
                    return f(v.$validators, function (d, e) {
                        var f = d(a, b);
                        c = c && f, i(e, f)
                    }), c ? !0 : (f(v.$asyncValidators, function (a, b) {
                        i(b, null)
                    }), !1)
                }

                function h() {
                    var d = [],
                        e = !0;
                    f(v.$asyncValidators, function (f, g) {
                        var h = f(a, b);
                        if (!H(h)) throw $f("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", h);
                        i(g, c), d.push(h.then(function () {
                            i(g, !0)
                        }, function (a) {
                            e = !1, i(g, !1)
                        }))
                    }), d.length ? k.all(d).then(function () {
                        j(e)
                    }, p) : j(!0)
                }

                function i(a, b) {
                    l === y && v.$setValidity(a, b)
                }

                function j(a) {
                    l === y && d(a)
                }
                y++;
                var l = y;
                return e() && g() ? void h() : void j(!1)
            }, this.$commitViewValue = function () {
                var a = v.$viewValue;
                i.cancel(u), (v.$$lastCommittedViewValue !== a || "" === a && v.$$hasNativeValidators) && (v.$$lastCommittedViewValue = a, v.$pristine && this.$setDirty(), this.$$parseAndValidate())
            }, this.$$parseAndValidate = function () {
                function b() {
                    v.$modelValue !== g && v.$$writeModelToScope()
                }
                var d = v.$$lastCommittedViewValue,
                    e = d;
                if (m = s(e) ? c : !0)
                    for (var f = 0; f < v.$parsers.length; f++)
                        if (e = v.$parsers[f](e), s(e)) {
                            m = !1;
                            break
                        }
                x(v.$modelValue) && isNaN(v.$modelValue) && (v.$modelValue = q(a));
                var g = v.$modelValue,
                    h = v.$options && v.$options.allowInvalid;
                v.$$rawModelValue = e, h && (v.$modelValue = e, b()), v.$$runValidators(e, v.$$lastCommittedViewValue, function (a) {
                    h || (v.$modelValue = a ? e : c, b())
                })
            }, this.$$writeModelToScope = function () {
                r(a, v.$modelValue), f(v.$viewChangeListeners, function (a) {
                    try {
                        a()
                    } catch (c) {
                        b(c)
                    }
                })
            }, this.$setViewValue = function (a, b) {
                v.$viewValue = a, (!v.$options || v.$options.updateOnDefault) && v.$$debounceViewValueCommit(b)
            }, this.$$debounceViewValueCommit = function (b) {
                var c, d = 0,
                    e = v.$options;
                e && t(e.debounce) && (c = e.debounce, x(c) ? d = c : x(c[b]) ? d = c[b] : x(c["default"]) && (d = c["default"])), i.cancel(u), d ? u = i(function () {
                    v.$commitViewValue()
                }, d) : j.$$phase ? v.$commitViewValue() : a.$apply(function () {
                    v.$commitViewValue()
                })
            }, a.$watch(function () {
                var b = q(a);
                if (b !== v.$modelValue && (v.$modelValue === v.$modelValue || b === b)) {
                    v.$modelValue = v.$$rawModelValue = b, m = c;
                    for (var d = v.$formatters, e = d.length, f = b; e--;) f = d[e](f);
                    v.$viewValue !== f && (v.$viewValue = v.$$lastCommittedViewValue = f, v.$render(), v.$$runValidators(b, f, p))
                }
                return b
            })
        }],
        ag = ["$rootScope", function (a) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: _f,
                priority: 1,
                compile: function (b) {
                    return b.addClass(Vf).addClass(Xf).addClass(Tf), {
                        pre: function (a, b, c, d) {
                            var e = d[0],
                                f = d[1] || lf;
                            e.$$setOptions(d[2] && d[2].$options), f.$addControl(e), c.$observe("name", function (a) {
                                e.$name !== a && f.$$renameControl(e, a)
                            }), a.$on("$destroy", function () {
                                f.$removeControl(e)
                            })
                        },
                        post: function (b, c, d, e) {
                            var f = e[0];
                            f.$options && f.$options.updateOn && c.on(f.$options.updateOn, function (a) {
                                f.$$debounceViewValueCommit(a && a.type)
                            }), c.on("blur", function (c) {
                                f.$touched || (a.$$phase ? b.$evalAsync(f.$setTouched) : b.$apply(f.$setTouched))
                            })
                        }
                    }
                }
            }
        }],
        bg = /(\s+|^)default(\s+|$)/,
        cg = function () {
            return {
                restrict: "A",
                controller: ["$scope", "$attrs", function (a, b) {
                    var d = this;
                    this.$options = N(a.$eval(b.ngModelOptions)), this.$options.updateOn !== c ? (this.$options.updateOnDefault = !1, this.$options.updateOn = Nd(this.$options.updateOn.replace(bg, function () {
                        return d.$options.updateOnDefault = !0, " "
                    }))) : this.$options.updateOnDefault = !0
                }]
            }
        },
        dg = $c({
            terminal: !0,
            priority: 1e3
        }),
        eg = d("ngOptions"),
        fg = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
        gg = ["$compile", "$parse", function (a, c) {
            function d(a, b, d) {
                function f(a, b, c, d, e) {
                    this.selectValue = a, this.viewValue = b, this.label = c, this.group = d, this.disabled = e
                }
                var g = a.match(fg);
                if (!g) throw eg("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", a, Z(b));
                var h = g[5] || g[7],
                    i = g[6],
                    j = / as /.test(g[0]) && g[1],
                    k = g[9],
                    l = c(g[2] ? g[1] : h),
                    m = j && c(j),
                    n = m || l,
                    o = k && c(k),
                    p = k ? function (a, b) {
                        return o(d, b)
                    } : function (a) {
                        return Ua(a)
                    },
                    q = function (a, b) {
                        return p(a, w(a, b))
                    },
                    r = c(g[2] || g[1]),
                    s = c(g[3] || ""),
                    t = c(g[4] || ""),
                    u = c(g[8]),
                    v = {},
                    w = i ? function (a, b) {
                        return v[i] = b, v[h] = a, v
                    } : function (a) {
                        return v[h] = a, v
                    };
                return {
                    trackBy: k,
                    getTrackByValue: q,
                    getWatchables: c(u, function (a) {
                        var b = [];
                        return a = a || [], Object.keys(a).forEach(function (c) {
                            var e = w(a[c], c),
                                f = p(a[c], e);
                            if (b.push(f), g[2] || g[1]) {
                                var h = r(d, e);
                                b.push(h)
                            }
                            if (g[4]) {
                                var i = t(d, e);
                                b.push(i)
                            }
                        }), b
                    }),
                    getOptions: function () {
                        var a, b = [],
                            c = {},
                            g = u(d) || [];
                        if (!i && e(g)) a = g;
                        else {
                            a = [];
                            for (var h in g) g.hasOwnProperty(h) && "$" !== h.charAt(0) && a.push(h)
                        }
                        for (var j = a.length, l = 0; j > l; l++) {
                            var m = g === a ? l : a[l],
                                o = g[m],
                                v = w(o, m),
                                x = n(d, v),
                                y = p(x, v),
                                z = r(d, v),
                                A = s(d, v),
                                B = t(d, v),
                                C = new f(y, x, z, A, B);
                            b.push(C), c[y] = C
                        }
                        return {
                            items: b,
                            selectValueMap: c,
                            getOptionFromViewValue: function (a) {
                                return c[q(a)]
                            },
                            getViewValueFromOption: function (a) {
                                return k ? Id.copy(a.viewValue) : a.viewValue
                            }
                        }
                    }
                }
            }
            var g = b.createElement("option"),
                h = b.createElement("optgroup");
            return {
                restrict: "A",
                terminal: !0,
                require: ["select", "?ngModel"],
                link: function (b, c, e, i) {
                    function j(a, b) {
                        a.element = b, b.disabled = a.disabled, a.value !== b.value && (b.value = a.selectValue), a.label !== b.label && (b.label = a.label, b.textContent = a.label)
                    }

                    function k(a, b, c, d) {
                        var e;
                        return b && td(b.nodeName) === c ? e = b : (e = d.cloneNode(!1), b ? a.insertBefore(e, b) : a.appendChild(e)), e
                    }

                    function l(a) {
                        for (var b; a;) b = a.nextSibling, Oa(a), a = b
                    }

                    function m(a) {
                        var b = p && p[0],
                            c = w && w[0];
                        if (b || c)
                            for (; a && (a === b || a === c);) a = a.nextSibling;
                        return a
                    }

                    function n() {
                        var a = x && q.readValue();
                        x = y.getOptions();
                        var b = {},
                            d = c[0].firstChild;
                        if (v && c.prepend(p), d = m(d), x.items.forEach(function (a) {
                            var e, f, i;
                            a.group ? (e = b[a.group], e || (f = k(c[0], d, "optgroup", h), d = f.nextSibling, f.label = a.group, e = b[a.group] = {
                                groupElement: f,
                                currentOptionElement: f.firstChild
                            }), i = k(e.groupElement, e.currentOptionElement, "option", g), j(a, i), e.currentOptionElement = i.nextSibling) : (i = k(c[0], d, "option", g), j(a, i), d = i.nextSibling)
                        }), Object.keys(b).forEach(function (a) {
                            l(b[a].currentOptionElement)
                        }), l(d), o.$render(), !o.$isEmpty(a)) {
                            var e = q.readValue();
                            (y.trackBy && !P(a, e) || a !== e) && (o.$setViewValue(e), o.$render())
                        }
                    }
                    var o = i[1];
                    if (o) {
                        for (var p, q = i[0], r = e.multiple, s = 0, t = c.children(), u = t.length; u > s; s++)
                            if ("" === t[s].value) {
                                p = t.eq(s);
                                break
                            }
                        var v = !!p,
                            w = zd(g.cloneNode(!1));
                        w.val("?");
                        var x, y = d(e.ngOptions, c, b),
                            z = function () {
                                v || c.prepend(p), c.val(""), p.prop("selected", !0), p.attr("selected", !0)
                            },
                            A = function () {
                                v || p.remove()
                            },
                            B = function () {
                                c.prepend(w), c.val("?"), w.prop("selected", !0), w.attr("selected", !0)
                            },
                            C = function () {
                                w.remove()
                            };
                        r ? (o.$isEmpty = function (a) {
                            return !a || 0 === a.length
                        }, q.writeValue = function (a) {
                            x.items.forEach(function (a) {
                                a.element.selected = !1
                            }), a && a.forEach(function (a) {
                                var b = x.getOptionFromViewValue(a);
                                b && !b.disabled && (b.element.selected = !0)
                            })
                        }, q.readValue = function () {
                            var a = c.val() || [],
                                b = [];
                            return f(a, function (a) {
                                var c = x.selectValueMap[a];
                                c.disabled || b.push(x.getViewValueFromOption(c))
                            }), b
                        }, y.trackBy && b.$watchCollection(function () {
                            return Ld(o.$viewValue) ? o.$viewValue.map(function (a) {
                                return y.getTrackByValue(a)
                            }) : void 0
                        }, function () {
                            o.$render()
                        })) : (q.writeValue = function (a) {
                            var b = x.getOptionFromViewValue(a);
                            b && !b.disabled ? c[0].value !== b.selectValue && (C(), A(), c[0].value = b.selectValue, b.element.selected = !0, b.element.setAttribute("selected", "selected")) : null === a || v ? (C(), z()) : (A(), B())
                        }, q.readValue = function () {
                            var a = x.selectValueMap[c.val()];
                            return a && !a.disabled ? (A(), C(), x.getViewValueFromOption(a)) : null
                        }, y.trackBy && b.$watch(function () {
                            return y.getTrackByValue(o.$viewValue)
                        }, function () {
                            o.$render()
                        })), v ? (p.remove(), a(p)(b), p.removeClass("ng-scope")) : p = zd(g.cloneNode(!1)), n(), b.$watchCollection(y.getWatchables, n)
                    }
                }
            }
        }],
        hg = ["$locale", "$interpolate", "$log", function (a, b, c) {
            var d = /{}/g,
                e = /^when(Minus)?(.+)$/;
            return {
                link: function (g, h, i) {
                    function j(a) {
                        h.text(a || "")
                    }
                    var k, l = i.count,
                        m = i.$attr.when && h.attr(i.$attr.when),
                        n = i.offset || 0,
                        o = g.$eval(m) || {},
                        q = {},
                        r = b.startSymbol(),
                        t = b.endSymbol(),
                        u = r + l + "-" + n + t,
                        v = Id.noop;
                    f(i, function (a, b) {
                        var c = e.exec(b);
                        if (c) {
                            var d = (c[1] ? "-" : "") + td(c[2]);
                            o[d] = h.attr(i.$attr[b])
                        }
                    }), f(o, function (a, c) {
                        q[c] = b(a.replace(d, u))
                    }), g.$watch(l, function (b) {
                        var d = parseFloat(b),
                            e = isNaN(d);
                        if (e || d in o || (d = a.pluralCat(d - n)), d !== k && !(e && x(k) && isNaN(k))) {
                            v();
                            var f = q[d];
                            s(f) ? (null != b && c.debug("ngPluralize: no rule defined for '" + d + "' in " + m), v = p, j()) : v = g.$watch(f, j), k = d
                        }
                    })
                }
            }
        }],
        ig = ["$parse", "$animate", function (a, g) {
            var h = "$$NG_REMOVED",
                i = d("ngRepeat"),
                j = function (a, b, c, d, e, f, g) {
                    a[c] = d, e && (a[e] = f), a.$index = b, a.$first = 0 === b, a.$last = b === g - 1, a.$middle = !(a.$first || a.$last), a.$odd = !(a.$even = 0 === (1 & b))
                },
                k = function (a) {
                    return a.clone[0]
                },
                l = function (a) {
                    return a.clone[a.clone.length - 1]
                };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                $$tlb: !0,
                compile: function (d, m) {
                    var n = m.ngRepeat,
                        o = b.createComment(" end ngRepeat: " + n + " "),
                        p = n.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!p) throw i("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", n);
                    var q = p[1],
                        r = p[2],
                        s = p[3],
                        t = p[4];
                    if (p = q.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !p) throw i("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", q);
                    var u = p[3] || p[1],
                        v = p[2];
                    if (s && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(s))) throw i("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", s);
                    var w, x, y, z, A = {
                        $id: Ua
                    };
                    return t ? w = a(t) : (y = function (a, b) {
                        return Ua(b)
                    }, z = function (a) {
                        return a
                    }),
                        function (a, b, d, m, p) {
                            w && (x = function (b, c, d) {
                                return v && (A[v] = b), A[u] = c, A.$index = d, w(a, A)
                            });
                            var q = pa();
                            a.$watchCollection(r, function (d) {
                                var m, r, t, w, A, B, C, D, E, F, G, H, I = b[0],
                                    J = pa();
                                if (s && (a[s] = d), e(d)) E = d, D = x || y;
                                else {
                                    D = x || z, E = [];
                                    for (var K in d) d.hasOwnProperty(K) && "$" !== K.charAt(0) && E.push(K)
                                }
                                for (w = E.length, G = new Array(w), m = 0; w > m; m++)
                                    if (A = d === E ? m : E[m], B = d[A], C = D(A, B, m), q[C]) F = q[C], delete q[C], J[C] = F, G[m] = F;
                                    else {
                                        if (J[C]) throw f(G, function (a) {
                                            a && a.scope && (q[a.id] = a)
                                        }), i("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", n, C, B);
                                        G[m] = {
                                            id: C,
                                            scope: c,
                                            clone: c
                                        }, J[C] = !0
                                    }
                                for (var L in q) {
                                    if (F = q[L], H = oa(F.clone), g.leave(H), H[0].parentNode)
                                        for (m = 0, r = H.length; r > m; m++) H[m][h] = !0;
                                    F.scope.$destroy()
                                }
                                for (m = 0; w > m; m++)
                                    if (A = d === E ? m : E[m], B = d[A], F = G[m], F.scope) {
                                        t = I;
                                        do t = t.nextSibling; while (t && t[h]);
                                        k(F) != t && g.move(oa(F.clone), null, zd(I)), I = l(F), j(F.scope, m, u, B, v, A, w)
                                    } else p(function (a, b) {
                                        F.scope = b;
                                        var c = o.cloneNode(!1);
                                        a[a.length++] = c, g.enter(a, null, zd(I)), I = c, F.clone = a, J[F.id] = F, j(F.scope, m, u, B, v, A, w)
                                    });
                                q = J
                            })
                        }
                }
            }
        }],
        jg = "ng-hide",
        kg = "ng-hide-animate",
        lg = ["$animate", function (a) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function (b, c, d) {
                    b.$watch(d.ngShow, function (b) {
                        a[b ? "removeClass" : "addClass"](c, jg, {
                            tempClasses: kg
                        })
                    })
                }
            }
        }],
        mg = ["$animate", function (a) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function (b, c, d) {
                    b.$watch(d.ngHide, function (b) {
                        a[b ? "addClass" : "removeClass"](c, jg, {
                            tempClasses: kg
                        })
                    })
                }
            }
        }],
        ng = $c(function (a, b, c) {
            a.$watch(c.ngStyle, function (a, c) {
                c && a !== c && f(c, function (a, c) {
                    b.css(c, "")
                }), a && b.css(a)
            }, !0)
        }),
        og = ["$animate", function (a) {
            return {
                require: "ngSwitch",
                controller: ["$scope", function () {
                    this.cases = {}
                }],
                link: function (c, d, e, g) {
                    var h = e.ngSwitch || e.on,
                        i = [],
                        j = [],
                        k = [],
                        l = [],
                        m = function (a, b) {
                            return function () {
                                a.splice(b, 1)
                            }
                        };
                    c.$watch(h, function (c) {
                        var d, e;
                        for (d = 0, e = k.length; e > d; ++d) a.cancel(k[d]);
                        for (k.length = 0, d = 0, e = l.length; e > d; ++d) {
                            var h = oa(j[d].clone);
                            l[d].$destroy();
                            var n = k[d] = a.leave(h);
                            n.then(m(k, d))
                        }
                        j.length = 0, l.length = 0, (i = g.cases["!" + c] || g.cases["?"]) && f(i, function (c) {
                            c.transclude(function (d, e) {
                                l.push(e);
                                var f = c.element;
                                d[d.length++] = b.createComment(" end ngSwitchWhen: ");
                                var g = {
                                    clone: d
                                };
                                j.push(g), a.enter(d, f.parent(), f)
                            })
                        })
                    })
                }
            }
        }],
        pg = $c({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (a, b, c, d, e) {
                d.cases["!" + c.ngSwitchWhen] = d.cases["!" + c.ngSwitchWhen] || [], d.cases["!" + c.ngSwitchWhen].push({
                    transclude: e,
                    element: b
                })
            }
        }),
        qg = $c({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (a, b, c, d, e) {
                d.cases["?"] = d.cases["?"] || [], d.cases["?"].push({
                    transclude: e,
                    element: b
                })
            }
        }),
        rg = $c({
            restrict: "EAC",
            link: function (a, b, c, e, f) {
                if (!f) throw d("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", Z(b));
                f(function (a) {
                    b.empty(), b.append(a)
                })
            }
        }),
        sg = ["$templateCache", function (a) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function (b, c) {
                    if ("text/ng-template" == c.type) {
                        var d = c.id,
                            e = b[0].text;
                        a.put(d, e)
                    }
                }
            }
        }],
        tg = {
            $setViewValue: p,
            $render: p
        },
        ug = ["$element", "$scope", "$attrs", function (a, d, e) {
            var f = this,
                g = new Va;
            f.ngModelCtrl = tg, f.unknownOption = zd(b.createElement("option")), f.renderUnknownOption = function (b) {
                var c = "? " + Ua(b) + " ?";
                f.unknownOption.val(c), a.prepend(f.unknownOption), a.val(c)
            }, d.$on("$destroy", function () {
                f.renderUnknownOption = p
            }), f.removeUnknownOption = function () {
                f.unknownOption.parent() && f.unknownOption.remove()
            }, f.readValue = function () {
                return f.removeUnknownOption(), a.val()
            }, f.writeValue = function (b) {
                f.hasOption(b) ? (f.removeUnknownOption(), a.val(b), "" === b && f.emptyOption.prop("selected", !0)) : null == b && f.emptyOption ? (f.removeUnknownOption(), a.val("")) : f.renderUnknownOption(b)
            }, f.addOption = function (a, b) {
                ma(a, '"option value"'), "" === a && (f.emptyOption = b);
                var c = g.get(a) || 0;
                g.put(a, c + 1)
            }, f.removeOption = function (a) {
                var b = g.get(a);
                b && (1 === b ? (g.remove(a), "" === a && (f.emptyOption = c)) : g.put(a, b - 1))
            }, f.hasOption = function (a) {
                return !!g.get(a)
            }
        }],
        vg = function () {
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: ug,
                link: function (a, b, c, d) {
                    var e = d[1];
                    if (e) {
                        var g = d[0];
                        if (g.ngModelCtrl = e, e.$render = function () {
                            g.writeValue(e.$viewValue)
                        }, b.on("change", function () {
                            a.$apply(function () {
                                e.$setViewValue(g.readValue())
                            })
                        }), c.multiple) {
                            g.readValue = function () {
                                var a = [];
                                return f(b.find("option"), function (b) {
                                    b.selected && a.push(b.value)
                                }), a
                            }, g.writeValue = function (a) {
                                var c = new Va(a);
                                f(b.find("option"), function (a) {
                                    a.selected = t(c.get(a.value))
                                })
                            };
                            var h, i = NaN;
                            a.$watch(function () {
                                i !== e.$viewValue || P(h, e.$viewValue) || (h = O(e.$viewValue), e.$render()), i = e.$viewValue
                            }), e.$isEmpty = function (a) {
                                return !a || 0 === a.length
                            }
                        }
                    }
                }
            }
        },
        wg = ["$interpolate", function (a) {
            function b(a) {
                a[0].hasAttribute("selected") && (a[0].selected = !0)
            }
            return {
                restrict: "E",
                priority: 100,
                compile: function (c, d) {
                    if (s(d.value)) {
                        var e = a(c.text(), !0);
                        e || d.$set("value", c.text())
                    }
                    return function (a, c, d) {
                        var f = "$selectController",
                            g = c.parent(),
                            h = g.data(f) || g.parent().data(f);
                        h && h.ngModelCtrl && (e ? a.$watch(e, function (a, e) {
                            d.$set("value", a), e !== a && h.removeOption(e), h.addOption(a, c), h.ngModelCtrl.$render(), b(c)
                        }) : (h.addOption(d.value, c), h.ngModelCtrl.$render(), b(c)), c.on("$destroy", function () {
                            h.removeOption(d.value), h.ngModelCtrl.$render()
                        }))
                    }
                }
            }
        }],
        xg = r({
            restrict: "E",
            terminal: !1
        }),
        yg = function () {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function (a, b, c, d) {
                    d && (c.required = !0, d.$validators.required = function (a, b) {
                        return !c.required || !d.$isEmpty(b)
                    }, c.$observe("required", function () {
                        d.$validate()
                    }))
                }
            }
        },
        zg = function () {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function (a, b, e, f) {
                    if (f) {
                        var g, h = e.ngPattern || e.pattern;
                        e.$observe("pattern", function (a) {
                            if (w(a) && a.length > 0 && (a = new RegExp("^" + a + "$")), a && !a.test) throw d("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", h, a, Z(b));
                            g = a || c, f.$validate()
                        }), f.$validators.pattern = function (a) {
                            return f.$isEmpty(a) || s(g) || g.test(a)
                        }
                    }
                }
            }
        },
        Ag = function () {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function (a, b, c, d) {
                    if (d) {
                        var e = -1;
                        c.$observe("maxlength", function (a) {
                            var b = n(a);
                            e = isNaN(b) ? -1 : b, d.$validate()
                        }), d.$validators.maxlength = function (a, b) {
                            return 0 > e || d.$isEmpty(b) || b.length <= e
                        }
                    }
                }
            }
        },
        Bg = function () {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function (a, b, c, d) {
                    if (d) {
                        var e = 0;
                        c.$observe("minlength", function (a) {
                            e = n(a) || 0, d.$validate()
                        }), d.$validators.minlength = function (a, b) {
                            return d.$isEmpty(b) || b.length >= e
                        }
                    }
                }
            }
        };
    return a.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (ja(), ta(Id), void zd(b).ready(function () {
        ea(b, fa)
    }))
}(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'),
    function (a, b, c) {
        "use strict";

        function d(a, b, c) {
            if (!a) throw ngMinErr("areq", "Argument '{0}' is {1}", b || "?", c || "required");
            return a
        }

        function e(a, b) {
            return a || b ? a ? b ? (M(a) && (a = a.join(" ")), M(b) && (b = b.join(" ")), a + " " + b) : a : b : ""
        }

        function f(a) {
            var b = {};
            return a && (a.to || a.from) && (b.to = a.to, b.from = a.from), b
        }

        function g(a, b, c) {
            var d = "";
            return a = M(a) ? a : a && N(a) && a.length ? a.split(/\s+/) : [], L(a, function (a, e) {
                a && a.length > 0 && (d += e > 0 ? " " : "", d += c ? b + a : a + b)
            }), d
        }

        function h(a, b) {
            var c = a.indexOf(b);
            b >= 0 && a.splice(c, 1)
        }

        function i(a) {
            if (a instanceof K) switch (a.length) {
                case 0:
                    return [];
                case 1:
                    if (a[0].nodeType === T) return a;
                    break;
                default:
                    return K(j(a))
            }
            return a.nodeType === T ? K(a) : void 0
        }

        function j(a) {
            if (!a[0]) return a;
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (c.nodeType == T) return c
            }
        }

        function k(a, b, c) {
            L(b, function (b) {
                a.addClass(b, c)
            })
        }

        function l(a, b, c) {
            L(b, function (b) {
                a.removeClass(b, c)
            })
        }

        function m(a) {
            return function (b, c) {
                c.addClass && (k(a, b, c.addClass), c.addClass = null), c.removeClass && (l(a, b, c.removeClass), c.removeClass = null)
            }
        }

        function n(a) {
            if (a = a || {}, !a.$$prepared) {
                var b = a.domOperation || I;
                a.domOperation = function () {
                    a.$$domOperationFired = !0, b(), b = I
                }, a.$$prepared = !0
            }
            return a
        }

        function o(a, b) {
            p(a, b), q(a, b)
        }

        function p(a, b) {
            b.from && (a.css(b.from), b.from = null)
        }

        function q(a, b) {
            b.to && (a.css(b.to), b.to = null)
        }

        function r(a, b, c) {
            var d = (b.addClass || "") + " " + (c.addClass || ""),
                e = (b.removeClass || "") + " " + (c.removeClass || ""),
                f = s(a.attr("class"), d, e);
            return J(b, c), f.addClass ? b.addClass = f.addClass : b.addClass = null, f.removeClass ? b.removeClass = f.removeClass : b.removeClass = null, b
        }

        function s(a, b, c) {
            function d(a) {
                N(a) && (a = a.split(" "));
                var b = {};
                return L(a, function (a) {
                    a.length && (b[a] = !0)
                }), b
            }
            var e = 1,
                f = -1,
                g = {};
            a = d(a), b = d(b), L(b, function (a, b) {
                g[b] = e
            }), c = d(c), L(c, function (a, b) {
                g[b] = g[b] === e ? null : f
            });
            var h = {
                addClass: "",
                removeClass: ""
            };
            return L(g, function (b, c) {
                var d, g;
                b === e ? (d = "addClass", g = !a[c]) : b === f && (d = "removeClass", g = a[c]), g && (h[d].length && (h[d] += " "), h[d] += c)
            }), h
        }

        function t(a) {
            return a instanceof b.element ? a[0] : a
        }

        function u(a, b, c) {
            var d = Object.create(null),
                e = a.getComputedStyle(b) || {};
            return L(c, function (a, b) {
                var c = e[a];
                if (c) {
                    var f = c.charAt(0);
                    ("-" === f || "+" === f || f >= 0) && (c = v(c)), 0 === c && (c = null), d[b] = c
                }
            }), d
        }

        function v(a) {
            var b = 0,
                c = a.split(/\s*,\s*/);
            return L(c, function (a) {
                "s" == a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1)), a = parseFloat(a) || 0, b = b ? Math.max(a, b) : a
            }), b
        }

        function w(a) {
            return 0 === a || null != a
        }

        function x(a, b) {
            var c = E,
                d = a + "s";
            return b ? c += Z : d += " linear all", [c, d]
        }

        function y(a) {
            return [ia, a + "s"]
        }

        function z(a, b) {
            var c = b ? ha : ja;
            return [c, a + "s"]
        }

        function A(a, b) {
            var c = b ? "-" + b + "s" : "";
            return C(a, [ja, c]), [ja, c]
        }

        function B(a, b) {
            var c = b ? "paused" : "",
                d = G + ca;
            return C(a, [d, c]), [d, c]
        }

        function C(a, b) {
            var c = b[0],
                d = b[1];
            a.style[c] = d
        }

        function D() {
            var a = Object.create(null);
            return {
                flush: function () {
                    a = Object.create(null)
                },
                count: function (b) {
                    var c = a[b];
                    return c ? c.total : 0
                },
                get: function (b) {
                    var c = a[b];
                    return c && c.value
                },
                put: function (b, c) {
                    a[b] ? a[b].total++ : a[b] = {
                        total: 1,
                        value: c
                    }
                }
            }
        }
        var E, F, G, H, I = b.noop,
            J = b.extend,
            K = b.element,
            L = b.forEach,
            M = b.isArray,
            N = b.isString,
            O = b.isObject,
            P = b.isUndefined,
            Q = b.isDefined,
            R = b.isFunction,
            S = b.isElement,
            T = 1,
            U = "ng-animate",
            V = "$$ngAnimateChildren",
            W = ["$$rAF", function (a) {
                function b(a) {
                    f.push([].concat(a)), c()
                }

                function c() {
                    if (f.length) {
                        for (var b = [], g = 0; g < f.length; g++) {
                            var h = f[g];
                            d(h), h.length && b.push(h)
                        }
                        f = b, e || a(function () {
                            e || c()
                        })
                    }
                }

                function d(a) {
                    var b = a.shift();
                    b()
                }
                var e, f = [];
                return b.waitUntilQuiet = function (b) {
                    e && e(), e = a(function () {
                        e = null, b(), c()
                    })
                }, b
            }],
            X = [function () {
                return function (a, c, d) {
                    var e = d.ngAnimateChildren;
                    b.isString(e) && 0 === e.length ? c.data(V, !0) : d.$observe("ngAnimateChildren", function (a) {
                        a = "on" === a || "true" === a, c.data(V, a)
                    })
                }
            }],
            Y = "";
        a.ontransitionend === c && a.onwebkittransitionend !== c ? (Y = "-webkit-", E = "WebkitTransition", F = "webkitTransitionEnd transitionend") : (E = "transition", F = "transitionend"), a.onanimationend === c && a.onwebkitanimationend !== c ? (Y = "-webkit-", G = "WebkitAnimation", H = "webkitAnimationEnd animationend") : (G = "animation", H = "animationend");
        var Z = "Duration",
            $ = "Property",
            _ = "Delay",
            aa = "TimingFunction",
            ba = "IterationCount",
            ca = "PlayState",
            da = 3,
            ea = 1.5,
            fa = 1e3,
            ga = 9999,
            ha = G + _,
            ia = G + Z,
            ja = E + _,
            ka = E + Z,
            la = {
                transitionDuration: ka,
                transitionDelay: ja,
                transitionProperty: E + $,
                animationDuration: ia,
                animationDelay: ha,
                animationIterationCount: G + ba
            },
            ma = {
                transitionDuration: ka,
                transitionDelay: ja,
                animationDuration: ia,
                animationDelay: ha
            },
            na = ["$animateProvider", function (a) {
                var b = D(),
                    c = D();
                this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$document", "$sniffer", "$$rAFScheduler", function (a, d, e, i, j, k, l) {
                    function r(a, b) {
                        var c = "$$ngAnimateParentKey",
                            d = a.parentNode,
                            e = d[c] || (d[c] = ++N);
                        return e + "-" + a.getAttribute("class") + "-" + b
                    }

                    function s(c, d, e, f) {
                        var g = b.get(e);
                        return g || (g = u(a, c, f), "infinite" === g.animationIterationCount && (g.animationIterationCount = 1)), b.put(e, g), g
                    }

                    function v(e, f, h, i) {
                        var j;
                        if (b.count(h) > 0 && (j = c.get(h), !j)) {
                            var k = g(f, "-stagger");
                            d.addClass(e, k), j = u(a, e, i), j.animationDuration = Math.max(j.animationDuration, 0), j.transitionDuration = Math.max(j.transitionDuration, 0), d.removeClass(e, k), c.put(h, j)
                        }
                        return j || {}
                    }

                    function D(a) {
                        P.push(a), l.waitUntilQuiet(function () {
                            b.flush(), c.flush();
                            for (var a = O.offsetWidth + 1, d = 0; d < P.length; d++) P[d](a);
                            P.length = 0
                        })
                    }

                    function I(a, b, c) {
                        var d = s(a, b, c, la),
                            e = d.animationDelay,
                            f = d.transitionDelay;
                        return d.maxDelay = e && f ? Math.max(e, f) : e || f, d.maxDuration = Math.max(d.animationDuration * d.animationIterationCount, d.transitionDuration), d
                    }

                    function J(a, c) {
                        function j() {
                            m()
                        }

                        function l() {
                            m(!0)
                        }

                        function m(b) {
                            O || Q && P || (O = !0, P = !1, d.removeClass(a, ia), d.removeClass(a, ka), B(N, !1), A(N, !1), L(X, function (a) {
                                N.style[a[0]] = ""
                            }), K(a, c), o(a, c), c.onDone && c.onDone(), R && R.complete(!b))
                        }

                        function s(a) {
                            ya.blockTransition && A(N, a), ya.blockKeyframeAnimation && B(N, !!a)
                        }

                        function u() {
                            return R = new e({
                                end: j,
                                cancel: l
                            }), m(), {
                                $$willAnimate: !1,
                                start: function () {
                                    return R
                                },
                                end: j
                            }
                        }

                        function J() {
                            function b() {
                                if (!O) {
                                    if (s(!1), L(X, function (a) {
                                        var b = a[0],
                                            c = a[1];
                                        N.style[b] = c
                                    }), K(a, c), d.addClass(a, ka), ya.recalculateTimingStyles) {
                                        if (ja = N.className + " " + ia, na = r(N, ja), wa = I(N, ja, na), xa = wa.maxDelay, T = Math.max(xa, 0), V = wa.maxDuration, 0 === V) return void m();
                                        ya.hasTransitions = wa.transitionDuration > 0, ya.hasAnimations = wa.animationDuration > 0
                                    }
                                    if (ya.applyTransitionDelay || ya.applyAnimationDelay) {
                                        xa = "boolean" != typeof c.delay && w(c.delay) ? parseFloat(c.delay) : xa, T = Math.max(xa, 0);
                                        var b;
                                        ya.applyTransitionDelay && (wa.transitionDelay = xa, b = z(xa), X.push(b), N.style[b[0]] = b[1]), ya.applyAnimationDelay && (wa.animationDelay = xa, b = z(xa, !0), X.push(b), N.style[b[0]] = b[1])
                                    }
                                    if (U = T * fa, W = V * fa, c.easing) {
                                        var h, k = c.easing;
                                        ya.hasTransitions && (h = E + aa, X.push([h, k]), N.style[h] = k), ya.hasAnimations && (h = G + aa, X.push([h, k]), N.style[h] = k)
                                    }
                                    wa.transitionDuration && j.push(F), wa.animationDuration && j.push(H), g = Date.now(), a.on(j.join(" "), f), i(e, U + ea * W), q(a, c)
                                }
                            }

                            function e() {
                                m()
                            }

                            function f(a) {
                                a.stopPropagation();
                                var b = a.originalEvent || a,
                                    c = b.$manualTimeStamp || b.timeStamp || Date.now(),
                                    d = parseFloat(b.elapsedTime.toFixed(da));
                                Math.max(c - g, 0) >= U && d >= V && (Q = !0, m())
                            }
                            if (!O) {
                                var g, j = [],
                                    k = function (a) {
                                        if (Q) P && a && (P = !1, m());
                                        else if (P = !a, wa.animationDuration) {
                                            var b = B(N, P);
                                            P ? X.push(b) : h(X, b)
                                        }
                                    },
                                    l = ua > 0 && (wa.transitionDuration && 0 === oa.transitionDuration || wa.animationDuration && 0 === oa.animationDuration) && Math.max(oa.animationDelay, oa.transitionDelay);
                                l ? i(b, Math.floor(l * ua * fa), !1) : b(), S.resume = function () {
                                    k(!0)
                                }, S.pause = function () {
                                    k(!1)
                                }
                            }
                        }
                        var N = t(a);
                        c = n(c);
                        var O, P, Q, R, S, T, U, V, W, X = [],
                            Y = a.attr("class"),
                            Z = f(c);
                        if (0 === c.duration || !k.animations && !k.transitions) return u();
                        var _ = c.event && M(c.event) ? c.event.join(" ") : c.event,
                            ba = _ && c.structural,
                            ca = "",
                            ha = "";
                        ba ? ca = g(_, "ng-", !0) : _ && (ca = _), c.addClass && (ha += g(c.addClass, "-add")), c.removeClass && (ha.length && (ha += " "),
                            ha += g(c.removeClass, "-remove")), c.applyClassesEarly && ha.length && (K(a, c), ha = "");
                        var ia = [ca, ha].join(" ").trim(),
                            ja = Y + " " + ia,
                            ka = g(ia, "-active"),
                            la = Z.to && Object.keys(Z.to).length > 0;
                        if (!la && !ia) return u();
                        var na, oa;
                        if (c.stagger > 0) {
                            var pa = parseFloat(c.stagger);
                            oa = {
                                transitionDelay: pa,
                                animationDelay: pa,
                                transitionDuration: 0,
                                animationDuration: 0
                            }
                        } else na = r(N, ja), oa = v(N, ia, na, ma);
                        d.addClass(a, ia);
                        var qa;
                        if (c.transitionStyle) {
                            var ra = [E, c.transitionStyle];
                            C(N, ra), X.push(ra)
                        }
                        if (c.duration >= 0) {
                            qa = N.style[E].length > 0;
                            var sa = x(c.duration, qa);
                            C(N, sa), X.push(sa)
                        }
                        if (c.keyframeStyle) {
                            var ta = [G, c.keyframeStyle];
                            C(N, ta), X.push(ta)
                        }
                        var ua = oa ? c.staggerIndex >= 0 ? c.staggerIndex : b.count(na) : 0,
                            va = 0 === ua;
                        va && A(N, ga);
                        var wa = I(N, ja, na),
                            xa = wa.maxDelay;
                        T = Math.max(xa, 0), V = wa.maxDuration;
                        var ya = {};
                        return ya.hasTransitions = wa.transitionDuration > 0, ya.hasAnimations = wa.animationDuration > 0, ya.hasTransitionAll = ya.hasTransitions && "all" == wa.transitionProperty, ya.applyTransitionDuration = la && (ya.hasTransitions && !ya.hasTransitionAll || ya.hasAnimations && !ya.hasTransitions), ya.applyAnimationDuration = c.duration && ya.hasAnimations, ya.applyTransitionDelay = w(c.delay) && (ya.applyTransitionDuration || ya.hasTransitions), ya.applyAnimationDelay = w(c.delay) && ya.hasAnimations, ya.recalculateTimingStyles = ha.length > 0, (ya.applyTransitionDuration || ya.applyAnimationDuration) && (V = c.duration ? parseFloat(c.duration) : V, ya.applyTransitionDuration && (ya.hasTransitions = !0, wa.transitionDuration = V, qa = N.style[E + $].length > 0, X.push(x(V, qa))), ya.applyAnimationDuration && (ya.hasAnimations = !0, wa.animationDuration = V, X.push(y(V)))), 0 !== V || ya.recalculateTimingStyles ? (null == c.duration && wa.transitionDuration > 0 && (ya.recalculateTimingStyles = ya.recalculateTimingStyles || va), U = T * fa, W = V * fa, c.skipBlocking || (ya.blockTransition = wa.transitionDuration > 0, ya.blockKeyframeAnimation = wa.animationDuration > 0 && oa.animationDelay > 0 && 0 === oa.animationDuration), p(a, c), ya.blockTransition || A(N, !1), s(V), {
                            $$willAnimate: !0,
                            end: j,
                            start: function () {
                                return O ? void 0 : (S = {
                                    end: j,
                                    cancel: l,
                                    resume: null,
                                    pause: null
                                }, R = new e(S), D(J), R)
                            }
                        }) : u()
                    }
                    var K = m(d),
                        N = 0,
                        O = t(j).body,
                        P = [];
                    return J
                }]
            }],
            oa = ["$$animationProvider", function (a) {
                a.drivers.push("$$animateCssDriver");
                var b = "ng-animate-shim",
                    c = "ng-anchor",
                    d = "ng-anchor-out",
                    e = "ng-anchor-in";
                this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$document", "$sniffer", function (a, f, g, h, i, j) {
                    function k(a) {
                        return a.replace(/\bng-\S+\b/g, "")
                    }

                    function l(a, b) {
                        return N(a) && (a = a.split(" ")), N(b) && (b = b.split(" ")), a.filter(function (a) {
                            return -1 === b.indexOf(a)
                        }).join(" ")
                    }

                    function m(f, h, i) {
                        function j(a) {
                            var b = {},
                                c = t(a).getBoundingClientRect();
                            return L(["width", "height", "top", "left"], function (a) {
                                var d = c[a];
                                switch (a) {
                                    case "top":
                                        d += p.scrollTop;
                                        break;
                                    case "left":
                                        d += p.scrollLeft
                                }
                                b[a] = Math.floor(d) + "px"
                            }), b
                        }

                        function m() {
                            var b = a(s, {
                                addClass: d,
                                delay: !0,
                                from: j(h)
                            });
                            return b.$$willAnimate ? b : null
                        }

                        function n(a) {
                            return a.attr("class") || ""
                        }

                        function o() {
                            var b = k(n(i)),
                                c = l(b, u),
                                f = l(u, b),
                                g = a(s, {
                                    to: j(i),
                                    addClass: e + " " + c,
                                    removeClass: d + " " + f,
                                    delay: !0
                                });
                            return g.$$willAnimate ? g : null
                        }

                        function q() {
                            s.remove(), h.removeClass(b), i.removeClass(b)
                        }
                        var s = K(t(h).cloneNode(!0)),
                            u = k(n(s));
                        h.addClass(b), i.addClass(b), s.addClass(c), r.append(s);
                        var v, w = m();
                        if (!w && (v = o(), !v)) return q();
                        var x = w || v;
                        return {
                            start: function () {
                                function a() {
                                    c && c.end()
                                }
                                var b, c = x.start();
                                return c.done(function () {
                                    return c = null, !v && (v = o()) ? (c = v.start(), c.done(function () {
                                        c = null, q(), b.complete()
                                    }), c) : (q(), void b.complete())
                                }), b = new g({
                                    end: a,
                                    cancel: a
                                })
                            }
                        }
                    }

                    function n(a, b, c, d) {
                        var e = o(a),
                            f = o(b),
                            h = [];
                        return L(d, function (a) {
                            var b = a.out,
                                d = a["in"],
                                e = m(c, b, d);
                            e && h.push(e)
                        }), e || f || 0 !== h.length ? {
                            start: function () {
                                function a() {
                                    L(b, function (a) {
                                        a.end()
                                    })
                                }
                                var b = [];
                                e && b.push(e.start()), f && b.push(f.start()), L(h, function (a) {
                                    b.push(a.start())
                                });
                                var c = new g({
                                    end: a,
                                    cancel: a
                                });
                                return g.all(b, function (a) {
                                    c.complete(a)
                                }), c
                            }
                        } : void 0
                    }

                    function o(b) {
                        var c = b.element,
                            d = b.options || {};
                        b.structural ? (d.structural = d.applyClassesEarly = !0, d.event = b.event, "leave" === d.event && (d.onDone = d.domOperation)) : d.event = null;
                        var e = a(c, d);
                        return e.$$willAnimate ? e : null
                    }
                    if (!j.animations && !j.transitions) return I;
                    var p = t(i).body,
                        q = t(h),
                        r = K(p.parentNode === q ? p : q);
                    return function (a) {
                        return a.from && a.to ? n(a.from, a.to, a.classes, a.anchors) : o(a)
                    }
                }]
            }],
            pa = ["$animateProvider", function (a) {
                this.$get = ["$injector", "$$AnimateRunner", "$$rAFMutex", "$$jqLite", function (b, c, d, e) {
                    function f(c) {
                        c = M(c) ? c : c.split(" ");
                        for (var d = [], e = {}, f = 0; f < c.length; f++) {
                            var g = c[f],
                                h = a.$$registeredAnimations[g];
                            h && !e[g] && (d.push(b.get(h)), e[g] = !0)
                        }
                        return d
                    }
                    var g = m(e);
                    return function (a, b, d, e) {
                        function h() {
                            e.domOperation(), g(a, e)
                        }

                        function i(a, b, d, e, f) {
                            var g;
                            switch (d) {
                                case "animate":
                                    g = [b, e.from, e.to, f];
                                    break;
                                case "setClass":
                                    g = [b, p, q, f];
                                    break;
                                case "addClass":
                                    g = [b, p, f];
                                    break;
                                case "removeClass":
                                    g = [b, q, f];
                                    break;
                                default:
                                    g = [b, f]
                            }
                            g.push(e);
                            var h = a.apply(a, g);
                            if (h)
                                if (R(h.start) && (h = h.start()), h instanceof c) h.done(f);
                                else if (R(h)) return h;
                            return I
                        }

                        function j(a, b, d, e, f) {
                            var g = [];
                            return L(e, function (e) {
                                var h = e[f];
                                h && g.push(function () {
                                    var e, f, g = !1,
                                        j = function (a) {
                                            g || (g = !0, (f || I)(a), e.complete(!a))
                                        };
                                    return e = new c({
                                        end: function () {
                                            j()
                                        },
                                        cancel: function () {
                                            j(!0)
                                        }
                                    }), f = i(h, a, b, d, function (a) {
                                        var b = a === !1;
                                        j(b)
                                    }), e
                                })
                            }), g
                        }

                        function k(a, b, d, e, f) {
                            var g = j(a, b, d, e, f);
                            if (0 === g.length) {
                                var h, i;
                                "beforeSetClass" === f ? (h = j(a, "removeClass", d, e, "beforeRemoveClass"), i = j(a, "addClass", d, e, "beforeAddClass")) : "setClass" === f && (h = j(a, "removeClass", d, e, "removeClass"), i = j(a, "addClass", d, e, "addClass")), h && (g = g.concat(h)), i && (g = g.concat(i))
                            }
                            if (0 !== g.length) return function (a) {
                                var b = [];
                                return g.length && L(g, function (a) {
                                    b.push(a())
                                }), b.length ? c.all(b, a) : a(),
                                    function (a) {
                                        L(b, function (b) {
                                            a ? b.cancel() : b.end()
                                        })
                                    }
                            }
                        }
                        3 === arguments.length && O(d) && (e = d, d = null), e = n(e), d || (d = a.attr("class") || "", e.addClass && (d += " " + e.addClass), e.removeClass && (d += " " + e.removeClass));
                        var l, m, p = e.addClass,
                            q = e.removeClass,
                            r = f(d);
                        if (r.length) {
                            var s, t;
                            "leave" == b ? (t = "leave", s = "afterLeave") : (t = "before" + b.charAt(0).toUpperCase() + b.substr(1), s = b), "enter" !== b && "move" !== b && (l = k(a, b, e, r, t)), m = k(a, b, e, r, s)
                        }
                        return l || m ? {
                            start: function () {
                                function b(b) {
                                    i = !0, h(), o(a, e), j.complete(b)
                                }

                                function d(a) {
                                    i || ((f || I)(a), b(a))
                                }
                                var f, g = [];
                                l && g.push(function (a) {
                                    f = l(a)
                                }), g.length ? g.push(function (a) {
                                    h(), a(!0)
                                }) : h(), m && g.push(function (a) {
                                    f = m(a)
                                });
                                var i = !1,
                                    j = new c({
                                        end: function () {
                                            d()
                                        },
                                        cancel: function () {
                                            d(!0)
                                        }
                                    });
                                return c.chain(g, b), j
                            }
                        } : void 0
                    }
                }]
            }],
            qa = ["$$animationProvider", function (a) {
                a.drivers.push("$$animateJsDriver"), this.$get = ["$$animateJs", "$$AnimateRunner", function (a, b) {
                    function c(b) {
                        var c = b.element,
                            d = b.event,
                            e = b.options,
                            f = b.classes;
                        return a(c, d, f, e)
                    }
                    return function (a) {
                        if (a.from && a.to) {
                            var d = c(a.from),
                                e = c(a.to);
                            if (!d && !e) return;
                            return {
                                start: function () {
                                    function a() {
                                        return function () {
                                            L(f, function (a) {
                                                a.end()
                                            })
                                        }
                                    }

                                    function c(a) {
                                        g.complete(a)
                                    }
                                    var f = [];
                                    d && f.push(d.start()), e && f.push(e.start()), b.all(f, c);
                                    var g = new b({
                                        end: a(),
                                        cancel: a()
                                    });
                                    return g
                                }
                            }
                        }
                        return c(a)
                    }
                }]
            }],
            ra = "data-ng-animate",
            sa = "$ngAnimatePin",
            ta = ["$animateProvider", function (a) {
                function b(a, b, c, d) {
                    return g[a].some(function (a) {
                        return a(b, c, d)
                    })
                }

                function c(a, b) {
                    a = a || {};
                    var c = (a.addClass || "").length > 0,
                        d = (a.removeClass || "").length > 0;
                    return b ? c && d : c || d
                }
                var e = 1,
                    f = 2,
                    g = this.rules = {
                        skip: [],
                        cancel: [],
                        join: []
                    };
                g.join.push(function (a, b, d) {
                    return !b.structural && c(b.options)
                }), g.skip.push(function (a, b, d) {
                    return !b.structural && !c(b.options)
                }), g.skip.push(function (a, b, c) {
                    return "leave" == c.event && b.structural
                }), g.skip.push(function (a, b, c) {
                    return c.structural && !b.structural
                }), g.cancel.push(function (a, b, c) {
                    return c.structural && b.structural
                }), g.cancel.push(function (a, b, c) {
                    return c.state === f && b.structural
                }), g.cancel.push(function (a, b, c) {
                    var d = b.options,
                        e = c.options;
                    return d.addClass && d.addClass === e.removeClass || d.removeClass && d.removeClass === e.addClass
                }), this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", function (g, h, k, l, p, q, s, u, v) {
                    function w(a, b) {
                        return r(a, b, {})
                    }

                    function x(a, b) {
                        var c = t(a),
                            d = [],
                            e = U[b];
                        return e && L(e, function (a) {
                            a.node.contains(c) && d.push(a.callback)
                        }), d
                    }

                    function y(a, b, c, d) {
                        g(function () {
                            L(x(b, a), function (a) {
                                a(b, c, d)
                            })
                        })
                    }

                    function z(a, d, g) {
                        function j(b, c, d, e) {
                            y(c, a, d, e), b.progress(c, d, e)
                        }

                        function k(b) {
                            Y(a, g), o(a, g), g.domOperation(), p.complete(!b)
                        }
                        var l, m;
                        a = i(a), a && (l = t(a), m = a.parent()), g = n(g);
                        var p = new s;
                        if (!l) return k(), p;
                        M(g.addClass) && (g.addClass = g.addClass.join(" ")), M(g.removeClass) && (g.removeClass = g.removeClass.join(" ")), g.from && !O(g.from) && (g.from = null), g.to && !O(g.to) && (g.to = null);
                        var u = [l.className, g.addClass, g.removeClass].join(" ");
                        if (!X(u)) return k(), p;
                        var v = ["enter", "move", "leave"].indexOf(d) >= 0,
                            x = !I || H.get(l),
                            z = !x && G.get(l) || {},
                            C = !!z.state;
                        if (x || C && z.state == e || (x = !E(a, m, d)), x) return k(), p;
                        v && A(a);
                        var J = {
                            structural: v,
                            element: a,
                            event: d,
                            close: k,
                            options: g,
                            runner: p
                        };
                        if (C) {
                            var K = b("skip", a, J, z);
                            if (K) return z.state === f ? (k(), p) : (r(a, z.options, g), z.runner);
                            var L = b("cancel", a, J, z);
                            if (L) z.state === f ? z.runner.end() : z.structural ? z.close() : r(a, J.options, z.options);
                            else {
                                var N = b("join", a, J, z);
                                if (N) {
                                    if (z.state !== f) return d = J.event = z.event, g = r(a, z.options, J.options), p;
                                    w(a, g)
                                }
                            }
                        } else w(a, g);
                        var P = J.structural;
                        if (P || (P = "animate" === J.event && Object.keys(J.options.to || {}).length > 0 || c(J.options)), !P) return k(), B(a), p;
                        v && D(m);
                        var Q = (z.counter || 0) + 1;
                        return J.counter = Q, F(a, e, J), h.$$postDigest(function () {
                            var b = G.get(l),
                                e = !b;
                            b = b || {};
                            var h = a.parent() || [],
                                i = h.length > 0 && ("animate" === b.event || b.structural || c(b.options));
                            if (e || b.counter !== Q || !i) return e && (Y(a, g), o(a, g)), (e || v && b.event !== d) && (g.domOperation(), p.end()), void (i || B(a));
                            d = !b.structural && c(b.options, !0) ? "setClass" : b.event, b.structural && D(h), F(a, f);
                            var m = q(a, d, b.options);
                            m.done(function (b) {
                                k(!b);
                                var c = G.get(l);
                                c && c.counter === Q && B(t(a)), j(p, d, "close", {})
                            }), p.setHost(m), j(p, d, "start", {})
                        }), p
                    }

                    function A(a) {
                        var b = t(a),
                            c = b.querySelectorAll("[" + ra + "]");
                        L(c, function (a) {
                            var b = parseInt(a.getAttribute(ra)),
                                c = G.get(a);
                            switch (b) {
                                case f:
                                    c.runner.end();
                                case e:
                                    c && G.remove(a)
                            }
                        })
                    }

                    function B(a) {
                        var b = t(a);
                        b.removeAttribute(ra), G.remove(b)
                    }

                    function C(a, b) {
                        return t(a) === t(b)
                    }

                    function D(a) {
                        function b(a, b) {
                            !b.structural && c(b.options) && (b.state === f && b.runner.end(), B(a))
                        }
                        for (var d = t(a); ;) {
                            if (!d || d.nodeType !== T) break;
                            var e = G.get(d);
                            e && b(d, e), d = d.parentNode
                        }
                    }

                    function E(a, b, c) {
                        var d, e = !1,
                            f = !1,
                            g = !1,
                            h = a.data(sa);
                        for (h && (b = h); b && b.length;) {
                            f || (f = C(b, k));
                            var i = b[0];
                            if (i.nodeType !== T) break;
                            var j = G.get(i) || {};
                            if (g || (g = j.structural || H.get(i)), P(d) || d === !0) {
                                var l = b.data(V);
                                Q(l) && (d = l)
                            }
                            if (g && d === !1) break;
                            f || (f = C(b, k), f || (h = b.data(sa), h && (b = h))), e || (e = C(b, R)), b = b.parent()
                        }
                        var m = !g || d;
                        return m && f && e
                    }

                    function F(a, b, c) {
                        c = c || {}, c.state = b;
                        var d = t(a);
                        d.setAttribute(ra, b);
                        var e = G.get(d),
                            f = e ? J(e, c) : c;
                        G.put(d, f)
                    }
                    var G = new p,
                        H = new p,
                        I = null,
                        N = h.$watch(function () {
                            return 0 === u.totalPendingRequests
                        }, function (a) {
                            a && (N(), h.$$postDigest(function () {
                                h.$$postDigest(function () {
                                    null === I && (I = !0)
                                })
                            }))
                        }),
                        R = K(l[0].body),
                        U = {},
                        W = a.classNameFilter(),
                        X = W ? function (a) {
                            return W.test(a)
                        } : function () {
                            return !0
                        },
                        Y = m(v);
                    return {
                        on: function (a, b, c) {
                            var d = j(b);
                            U[a] = U[a] || [], U[a].push({
                                node: d,
                                callback: c
                            })
                        },
                        off: function (a, b, c) {
                            function d(a, b, c) {
                                var d = j(b);
                                return a.filter(function (a) {
                                    var b = a.node === d && (!c || a.callback === c);
                                    return !b
                                })
                            }
                            var e = U[a];
                            e && (U[a] = 1 === arguments.length ? null : d(e, b, c))
                        },
                        pin: function (a, b) {
                            d(S(a), "element", "not an element"), d(S(b), "parentElement", "not an element"), a.data(sa, b)
                        },
                        push: function (a, b, c, d) {
                            return c = c || {}, c.domOperation = d, z(a, b, c)
                        },
                        enabled: function (a, b) {
                            var c = arguments.length;
                            if (0 === c) b = !!I;
                            else {
                                var d = S(a);
                                if (d) {
                                    var e = t(a),
                                        f = H.get(e);
                                    1 === c ? b = !f : (b = !!b, b ? f && H.remove(e) : H.put(e, !0))
                                } else b = I = !!a
                            }
                            return b
                        }
                    }
                }]
            }],
            ua = ["$$rAF", function (a) {
                return function () {
                    var b = !1;
                    return a(function () {
                        b = !0
                    }),
                        function (c) {
                            b ? c() : a(c)
                        }
                }
            }],
            va = ["$q", "$$rAFMutex", function (a, b) {
                function c(a) {
                    this.setHost(a), this._doneCallbacks = [], this._runInAnimationFrame = b(), this._state = 0
                }
                var d = 0,
                    e = 1,
                    f = 2;
                return c.chain = function (a, b) {
                    function c() {
                        return d === a.length ? void b(!0) : void a[d](function (a) {
                            return a === !1 ? void b(!1) : (d++ , void c())
                        })
                    }
                    var d = 0;
                    c()
                }, c.all = function (a, b) {
                    function c(c) {
                        e = e && c, ++d === a.length && b(e)
                    }
                    var d = 0,
                        e = !0;
                    L(a, function (a) {
                        a.done(c)
                    })
                }, c.prototype = {
                    setHost: function (a) {
                        this.host = a || {}
                    },
                    done: function (a) {
                        this._state === f ? a() : this._doneCallbacks.push(a)
                    },
                    progress: I,
                    getPromise: function () {
                        if (!this.promise) {
                            var b = this;
                            this.promise = a(function (a, c) {
                                b.done(function (b) {
                                    b === !1 ? c() : a()
                                })
                            })
                        }
                        return this.promise
                    },
                    then: function (a, b) {
                        return this.getPromise().then(a, b)
                    },
                    "catch": function (a) {
                        return this.getPromise()["catch"](a)
                    },
                    "finally": function (a) {
                        return this.getPromise()["finally"](a)
                    },
                    pause: function () {
                        this.host.pause && this.host.pause()
                    },
                    resume: function () {
                        this.host.resume && this.host.resume()
                    },
                    end: function () {
                        this.host.end && this.host.end(), this._resolve(!0)
                    },
                    cancel: function () {
                        this.host.cancel && this.host.cancel(), this._resolve(!1)
                    },
                    complete: function (a) {
                        var b = this;
                        b._state === d && (b._state = e, b._runInAnimationFrame(function () {
                            b._resolve(a)
                        }))
                    },
                    _resolve: function (a) {
                        this._state !== f && (L(this._doneCallbacks, function (b) {
                            b(a)
                        }), this._doneCallbacks.length = 0, this._state = f)
                    }
                }, c
            }],
            wa = ["$animateProvider", function (a) {
                function b(a, b) {
                    a.data(h, b)
                }

                function c(a) {
                    a.removeData(h)
                }

                function d(a) {
                    return a.data(h)
                }
                var f = "ng-animate-ref",
                    g = this.drivers = [],
                    h = "$$animationRunner";
                this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$rAFScheduler", function (a, h, i, j, k) {
                    var l = [],
                        p = m(a),
                        q = 0,
                        r = 0,
                        s = [];
                    return function (m, u, v) {
                        function w(a) {
                            var b = "[" + f + "]",
                                c = a.hasAttribute(f) ? [a] : a.querySelectorAll(b),
                                d = [];
                            return L(c, function (a) {
                                var b = a.getAttribute(f);
                                b && b.length && d.push(a)
                            }), d
                        }

                        function x(a) {
                            var b = [],
                                c = {};
                            L(a, function (a, d) {
                                var e = a.element,
                                    g = t(e),
                                    h = a.event,
                                    i = ["enter", "move"].indexOf(h) >= 0,
                                    j = a.structural ? w(g) : [];
                                if (j.length) {
                                    var k = i ? "to" : "from";
                                    L(j, function (a) {
                                        var b = a.getAttribute(f);
                                        c[b] = c[b] || {}, c[b][k] = {
                                            animationID: d,
                                            element: K(a)
                                        }
                                    })
                                } else b.push(a)
                            });
                            var d = {},
                                e = {};
                            return L(c, function (c, f) {
                                var g = c.from,
                                    h = c.to;
                                if (!g || !h) {
                                    var i = g ? g.animationID : h.animationID,
                                        j = i.toString();
                                    return void (d[j] || (d[j] = !0, b.push(a[i])))
                                }
                                var k = a[g.animationID],
                                    l = a[h.animationID],
                                    m = g.animationID.toString();
                                if (!e[m]) {
                                    var n = e[m] = {
                                        structural: !0,
                                        beforeStart: function () {
                                            k.beforeStart(), l.beforeStart()
                                        },
                                        close: function () {
                                            k.close(), l.close()
                                        },
                                        classes: y(k.classes, l.classes),
                                        from: k,
                                        to: l,
                                        anchors: []
                                    };
                                    n.classes.length ? b.push(n) : (b.push(k), b.push(l))
                                }
                                e[m].anchors.push({
                                    out: g.element,
                                    "in": h.element
                                })
                            }), b
                        }

                        function y(a, b) {
                            a = a.split(" "), b = b.split(" ");
                            for (var c = [], d = 0; d < a.length; d++) {
                                var e = a[d];
                                if ("ng-" !== e.substring(0, 3))
                                    for (var f = 0; f < b.length; f++)
                                        if (e === b[f]) {
                                            c.push(e);
                                            break
                                        }
                            }
                            return c.join(" ")
                        }

                        function z(a) {
                            for (var b = g.length - 1; b >= 0; b--) {
                                var c = g[b];
                                if (i.has(c)) {
                                    var d = i.get(c),
                                        e = d(a);
                                    if (e) return e
                                }
                            }
                        }

                        function A() {
                            m.addClass(U), H && a.addClass(m, H)
                        }

                        function B(a, b) {
                            function c(a) {
                                d(a).setHost(b)
                            }
                            a.from && a.to ? (c(a.from.element), c(a.to.element)) : c(a.element)
                        }

                        function C() {
                            var a = d(m);
                            !a || "leave" === u && v.$$domOperationFired || a.end()
                        }

                        function D(b) {
                            m.off("$destroy", C), c(m), p(m, v), o(m, v), v.domOperation(), H && a.removeClass(m, H), m.removeClass(U), F.complete(!b)
                        }
                        v = n(v);
                        var E = ["enter", "move", "leave"].indexOf(u) >= 0,
                            F = new j({
                                end: function () {
                                    D()
                                },
                                cancel: function () {
                                    D(!0)
                                }
                            });
                        if (!g.length) return D(), F;
                        b(m, F);
                        var G = e(m.attr("class"), e(v.addClass, v.removeClass)),
                            H = v.tempClasses;
                        H && (G += " " + H, v.tempClasses = null);
                        var I;
                        return E || (I = q, q += 1), l.push({
                            element: m,
                            classes: G,
                            event: u,
                            classBasedIndex: I,
                            structural: E,
                            options: v,
                            beforeStart: A,
                            close: D
                        }), m.on("$destroy", C), l.length > 1 ? F : (h.$$postDigest(function () {
                            r = q, q = 0, s.length = 0;
                            var a = [];
                            L(l, function (b) {
                                d(b.element) && a.push(b)
                            }), l.length = 0, L(x(a), function (a) {
                                function b() {
                                    a.beforeStart();
                                    var b, c = a.close,
                                        e = a.anchors ? a.from.element || a.to.element : a.element;
                                    if (d(e)) {
                                        var f = z(a);
                                        f && (b = f.start)
                                    }
                                    if (b) {
                                        var g = b();
                                        g.done(function (a) {
                                            c(!a)
                                        }), B(a, g)
                                    } else c()
                                }
                                a.structural ? b() : (s.push({
                                    node: t(a.element),
                                    fn: b
                                }), a.classBasedIndex === r - 1 && (s = s.sort(function (a, b) {
                                    return b.node.contains(a.node)
                                }).map(function (a) {
                                    return a.fn
                                }), k(s)))
                            })
                        }), F)
                    }
                }]
            }];
        b.module("ngAnimate", []).directive("ngAnimateChildren", X).factory("$$rAFMutex", ua).factory("$$rAFScheduler", W).factory("$$AnimateRunner", va).provider("$$animateQueue", ta).provider("$$animation", wa).provider("$animateCss", na).provider("$$animateCssDriver", oa).provider("$$animateJs", pa).provider("$$animateJsDriver", qa)
    }(window, window.angular),
    function (a, b, c) {
        "use strict";

        function d(a, d, e) {
            function f(a, e, f) {
                var h, i;
                f = f || {}, i = f.expires, h = b.isDefined(f.path) ? f.path : g, e === c && (i = "Thu, 01 Jan 1970 00:00:00 GMT", e = ""), b.isString(i) && (i = new Date(i));
                var j = encodeURIComponent(a) + "=" + encodeURIComponent(e);
                j += h ? ";path=" + h : "", j += f.domain ? ";domain=" + f.domain : "", j += i ? ";expires=" + i.toUTCString() : "", j += f.secure ? ";secure" : "";
                var k = j.length + 1;
                return k > 4096 && d.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + k + " > 4096 bytes)!"), j
            }
            var g = e.baseHref(),
                h = a[0];
            return function (a, b, c) {
                h.cookie = f(a, b, c)
            }
        }
        b.module("ngCookies", ["ng"]).provider("$cookies", [function () {
            function a(a) {
                return a ? b.extend({}, d, a) : d
            }
            var d = this.defaults = {};
            this.$get = ["$$cookieReader", "$$cookieWriter", function (d, e) {
                return {
                    get: function (a) {
                        return d()[a]
                    },
                    getObject: function (a) {
                        var c = this.get(a);
                        return c ? b.fromJson(c) : c
                    },
                    getAll: function () {
                        return d()
                    },
                    put: function (b, c, d) {
                        e(b, c, a(d))
                    },
                    putObject: function (a, c, d) {
                        this.put(a, b.toJson(c), d)
                    },
                    remove: function (b, d) {
                        e(b, c, a(d))
                    }
                }
            }]
        }]), b.module("ngCookies").factory("$cookieStore", ["$cookies", function (a) {
            return {
                get: function (b) {
                    return a.getObject(b)
                },
                put: function (b, c) {
                    a.putObject(b, c)
                },
                remove: function (b) {
                    a.remove(b)
                }
            }
        }]), d.$inject = ["$document", "$log", "$browser"], b.module("ngCookies").provider("$$cookieWriter", function () {
            this.$get = d
        })
    }(window, window.angular),
    function (a, b, c) {
        "use strict";

        function d(a) {
            function b(a, b) {
                return a ? e(a) ? a.indexOf(b) >= 0 : a.hasOwnProperty(b) : void 0
            }
            return ["$animate", function (a) {
                return {
                    restrict: "AE",
                    transclude: "element",
                    terminal: !0,
                    require: "^^ngMessages",
                    link: function (c, d, f, g, h) {
                        var i, j = d[0],
                            k = f.ngMessage || f.when,
                            l = f.ngMessageExp || f.whenExp,
                            m = function (a) {
                                i = a ? e(a) ? a : a.split(/[\s,]+/) : null, g.reRender()
                            };
                        l ? (m(c.$eval(l)), c.$watchCollection(l, m)) : m(k);
                        var n, o;
                        g.register(j, o = {
                            test: function (a) {
                                return b(i, a)
                            },
                            attach: function () {
                                n || h(c, function (b) {
                                    a.enter(b, null, d), n = b, n.on("$destroy", function () {
                                        n && (g.deregister(j), o.detach())
                                    })
                                })
                            },
                            detach: function () {
                                if (n) {
                                    var b = n;
                                    n = null, a.leave(b)
                                }
                            }
                        })
                    }
                }
            }]
        }
        var e = b.isArray,
            f = b.forEach,
            g = b.isString,
            h = b.element;
        b.module("ngMessages", []).directive("ngMessages", ["$animate", function (a) {
            function b(a, b) {
                return g(b) && 0 === b.length || c(a.$eval(b))
            }

            function c(a) {
                return g(a) ? a.length : !!a
            }
            var d = "ng-active",
                e = "ng-inactive";
            return {
                require: "ngMessages",
                restrict: "AE",
                controller: ["$element", "$scope", "$attrs", function (g, h, i) {
                    function j(a, b) {
                        for (var c = b, d = []; c && c !== a;) {
                            var e = c.$$ngMessageNode;
                            if (e && e.length) return q[e];
                            c.childNodes.length && -1 == d.indexOf(c) ? (d.push(c), c = c.childNodes[c.childNodes.length - 1]) : c = c.previousSibling || c.parentNode
                        }
                    }

                    function k(a, b, c) {
                        var d = q[c];
                        if (o.head) {
                            var e = j(a, b);
                            e ? (d.next = e.next, e.next = d) : (d.next = o.head, o.head = d)
                        } else o.head = d
                    }

                    function l(a, b, c) {
                        var d = q[c],
                            e = j(a, b);
                        e ? e.next = d.next : o.head = d.next
                    }
                    var m, n, o = this,
                        p = 0,
                        q = this.messages = {};
                    this.render = function (j) {
                        j = j || {}, m = !1, n = j;
                        for (var k = b(h, i.ngMessagesMultiple) || b(h, i.multiple), l = [], p = {}, q = o.head, r = !1, s = 0; null != q;) {
                            s++;
                            var t = q.message,
                                u = !1;
                            r || f(j, function (a, b) {
                                if (!u && c(a) && t.test(b)) {
                                    if (p[b]) return;
                                    p[b] = !0, u = !0, t.attach()
                                }
                            }), u ? r = !k : l.push(t), q = q.next
                        }
                        f(l, function (a) {
                            a.detach()
                        }), l.length !== s ? a.setClass(g, d, e) : a.setClass(g, e, d)
                    }, h.$watchCollection(i.ngMessages || i["for"], o.render), this.reRender = function () {
                        m || (m = !0, h.$evalAsync(function () {
                            m && n && o.render(n)
                        }))
                    }, this.register = function (a, b) {
                        var c = p.toString();
                        q[c] = {
                            message: b
                        }, k(g[0], a, c), a.$$ngMessageNode = c, p++ , o.reRender()
                    }, this.deregister = function (a) {
                        var b = a.$$ngMessageNode;
                        delete a.$$ngMessageNode, l(g[0], a, b), delete q[b], o.reRender()
                    }
                }]
            }
        }]).directive("ngMessagesInclude", ["$templateRequest", "$document", "$compile", function (a, b, c) {
            return {
                restrict: "AE",
                require: "^^ngMessages",
                link: function (d, e, f) {
                    var g = f.ngMessagesInclude || f.src;
                    a(g).then(function (a) {
                        c(a)(d, function (a) {
                            e.after(a);
                            var c = h(b[0].createComment(" ngMessagesInclude: " + g + " "));
                            e.after(c), e.remove()
                        })
                    })
                }
            }
        }]).directive("ngMessage", d("AE")).directive("ngMessageExp", d("A"))
    }(window, window.angular),
    function (a, b, c) {
        "use strict";

        function d(a) {
            return null != a && "" !== a && "hasOwnProperty" !== a && h.test("." + a)
        }

        function e(a, b) {
            if (!d(b)) throw g("badmember", 'Dotted member path "@{0}" is invalid.', b);
            for (var e = b.split("."), f = 0, h = e.length; h > f && a !== c; f++) {
                var i = e[f];
                a = null !== a ? a[i] : c
            }
            return a
        }

        function f(a, c) {
            c = c || {}, b.forEach(c, function (a, b) {
                delete c[b]
            });
            for (var d in a) !a.hasOwnProperty(d) || "$" === d.charAt(0) && "$" === d.charAt(1) || (c[d] = a[d]);
            return c
        }
        var g = b.$$minErr("$resource"),
            h = /^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;
        b.module("ngResource", ["ng"]).provider("$resource", function () {
            var a = this;
            this.defaults = {
                stripTrailingSlashes: !0,
                actions: {
                    get: {
                        method: "GET"
                    },
                    save: {
                        method: "POST"
                    },
                    query: {
                        method: "GET",
                        isArray: !0
                    },
                    remove: {
                        method: "DELETE"
                    },
                    "delete": {
                        method: "DELETE"
                    }
                }
            }, this.$get = ["$http", "$q", function (d, h) {
                function i(a) {
                    return j(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
                }

                function j(a, b) {
                    return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+")
                }

                function k(b, c) {
                    this.template = b, this.defaults = o({}, a.defaults, c), this.urlParams = {}
                }

                function l(i, j, r, s) {
                    function t(a, b) {
                        var c = {};
                        return b = o({}, j, b), n(b, function (b, d) {
                            q(b) && (b = b()), c[d] = b && b.charAt && "@" == b.charAt(0) ? e(a, b.substr(1)) : b
                        }), c
                    }

                    function u(a) {
                        return a.resource
                    }

                    function v(a) {
                        f(a || {}, this)
                    }
                    var w = new k(i, s);
                    return r = o({}, a.defaults.actions, r), v.prototype.toJSON = function () {
                        var a = o({}, this);
                        return delete a.$promise, delete a.$resolved, a
                    }, n(r, function (a, e) {
                        var i = /^(POST|PUT|PATCH)$/i.test(a.method);
                        v[e] = function (j, k, l, r) {
                            var s, x, y, z = {};
                            switch (arguments.length) {
                                case 4:
                                    y = r, x = l;
                                case 3:
                                case 2:
                                    if (!q(k)) {
                                        z = j, s = k, x = l;
                                        break
                                    }
                                    if (q(j)) {
                                        x = j, y = k;
                                        break
                                    }
                                    x = k, y = l;
                                case 1:
                                    q(j) ? x = j : i ? s = j : z = j;
                                    break;
                                case 0:
                                    break;
                                default:
                                    throw g("badargs", "Expected up to 4 arguments [params, data, success, error], got {0} arguments", arguments.length)
                            }
                            var A = this instanceof v,
                                B = A ? s : a.isArray ? [] : new v(s),
                                C = {},
                                D = a.interceptor && a.interceptor.response || u,
                                E = a.interceptor && a.interceptor.responseError || c;
                            n(a, function (a, b) {
                                "params" != b && "isArray" != b && "interceptor" != b && (C[b] = p(a))
                            }), i && (C.data = s), w.setUrlParams(C, o({}, t(s, a.params || {}), z), a.url);
                            var F = d(C).then(function (c) {
                                var d = c.data,
                                    h = B.$promise;
                                if (d) {
                                    if (b.isArray(d) !== !!a.isArray) throw g("badcfg", "Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2} (Request: {3} {4})", e, a.isArray ? "array" : "object", b.isArray(d) ? "array" : "object", C.method, C.url);
                                    a.isArray ? (B.length = 0, n(d, function (a) {
                                        "object" == typeof a ? B.push(new v(a)) : B.push(a)
                                    })) : (f(d, B), B.$promise = h)
                                }
                                return B.$resolved = !0, c.resource = B, c
                            }, function (a) {
                                return B.$resolved = !0, (y || m)(a), h.reject(a)
                            });
                            return F = F.then(function (a) {
                                var b = D(a);
                                return (x || m)(b, a.headers), b
                            }, E), A ? F : (B.$promise = F, B.$resolved = !1, B)
                        }, v.prototype["$" + e] = function (a, b, c) {
                            q(a) && (c = b, b = a, a = {});
                            var d = v[e].call(this, a, this, b, c);
                            return d.$promise || d
                        }
                    }), v.bind = function (a) {
                        return l(i, o({}, j, a), r)
                    }, v
                }
                var m = b.noop,
                    n = b.forEach,
                    o = b.extend,
                    p = b.copy,
                    q = b.isFunction;
                return k.prototype = {
                    setUrlParams: function (a, c, d) {
                        var e, f, h = this,
                            j = d || h.template,
                            k = h.urlParams = {};
                        n(j.split(/\W/), function (a) {
                            if ("hasOwnProperty" === a) throw g("badname", "hasOwnProperty is not a valid parameter name.");
                            !new RegExp("^\\d+$").test(a) && a && new RegExp("(^|[^\\\\]):" + a + "(\\W|$)").test(j) && (k[a] = !0)
                        }), j = j.replace(/\\:/g, ":"), c = c || {}, n(h.urlParams, function (a, d) {
                            e = c.hasOwnProperty(d) ? c[d] : h.defaults[d], b.isDefined(e) && null !== e ? (f = i(e), j = j.replace(new RegExp(":" + d + "(\\W|$)", "g"), function (a, b) {
                                return f + b
                            })) : j = j.replace(new RegExp("(/?):" + d + "(\\W|$)", "g"), function (a, b, c) {
                                return "/" == c.charAt(0) ? c : b + c
                            })
                        }), h.defaults.stripTrailingSlashes && (j = j.replace(/\/+$/, "") || "/"), j = j.replace(/\/\.(?=\w+($|\?))/, "."), a.url = j.replace(/\/\\\./, "/."), n(c, function (b, c) {
                            h.urlParams[c] || (a.params = a.params || {}, a.params[c] = b)
                        })
                    }
                }, l
            }]
        })
    }(window, window.angular),
    function (a, b, c) {
        "use strict";

        function d() {
            function a(a, c) {
                return b.extend(Object.create(a), c)
            }

            function c(a, b) {
                var c = b.caseInsensitiveMatch,
                    d = {
                        originalPath: a,
                        regexp: a
                    },
                    e = d.keys = [];
                return a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function (a, b, c, d) {
                    var f = "?" === d ? d : null,
                        g = "*" === d ? d : null;
                    return e.push({
                        name: c,
                        optional: !!f
                    }), b = b || "", "" + (f ? "" : b) + "(?:" + (f ? b : "") + (g && "(.+?)" || "([^/]+)") + (f || "") + ")" + (f || "")
                }).replace(/([\/$\*])/g, "\\$1"), d.regexp = new RegExp("^" + a + "$", c ? "i" : ""), d
            }
            var d = {};
            this.when = function (a, e) {
                var f = b.copy(e);
                if (b.isUndefined(f.reloadOnSearch) && (f.reloadOnSearch = !0), b.isUndefined(f.caseInsensitiveMatch) && (f.caseInsensitiveMatch = this.caseInsensitiveMatch), d[a] = b.extend(f, a && c(a, f)), a) {
                    var g = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
                    d[g] = b.extend({
                        redirectTo: a
                    }, c(g, f))
                }
                return this
            }, this.caseInsensitiveMatch = !1, this.otherwise = function (a) {
                return "string" == typeof a && (a = {
                    redirectTo: a
                }), this.when(null, a), this
            }, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", function (c, e, f, g, h, j, k) {
                function l(a, b) {
                    var c = b.keys,
                        d = {};
                    if (!b.regexp) return null;
                    var e = b.regexp.exec(a);
                    if (!e) return null;
                    for (var f = 1, g = e.length; g > f; ++f) {
                        var h = c[f - 1],
                            i = e[f];
                        h && i && (d[h.name] = i)
                    }
                    return d
                }

                function m(a) {
                    var d = t.current;
                    q = o(), r = q && d && q.$$route === d.$$route && b.equals(q.pathParams, d.pathParams) && !q.reloadOnSearch && !s, r || !d && !q || c.$broadcast("$routeChangeStart", q, d).defaultPrevented && a && a.preventDefault()
                }

                function n() {
                    var a = t.current,
                        d = q;
                    r ? (a.params = d.params, b.copy(a.params, f), c.$broadcast("$routeUpdate", a)) : (d || a) && (s = !1, t.current = d, d && d.redirectTo && (b.isString(d.redirectTo) ? e.path(p(d.redirectTo, d.params)).search(d.params).replace() : e.url(d.redirectTo(d.pathParams, e.path(), e.search())).replace()), g.when(d).then(function () {
                        if (d) {
                            var a, c, e = b.extend({}, d.resolve);
                            return b.forEach(e, function (a, c) {
                                e[c] = b.isString(a) ? h.get(a) : h.invoke(a, null, null, c)
                            }), b.isDefined(a = d.template) ? b.isFunction(a) && (a = a(d.params)) : b.isDefined(c = d.templateUrl) && (b.isFunction(c) && (c = c(d.params)), c = k.getTrustedResourceUrl(c), b.isDefined(c) && (d.loadedTemplateUrl = c, a = j(c))), b.isDefined(a) && (e.$template = a), g.all(e)
                        }
                    }).then(function (e) {
                        d == t.current && (d && (d.locals = e, b.copy(d.params, f)), c.$broadcast("$routeChangeSuccess", d, a))
                    }, function (b) {
                        d == t.current && c.$broadcast("$routeChangeError", d, a, b)
                    }))
                }

                function o() {
                    var c, f;
                    return b.forEach(d, function (d, g) {
                        !f && (c = l(e.path(), d)) && (f = a(d, {
                            params: b.extend({}, e.search(), c),
                            pathParams: c
                        }), f.$$route = d)
                    }), f || d[null] && a(d[null], {
                        params: {},
                        pathParams: {}
                    })
                }

                function p(a, c) {
                    var d = [];
                    return b.forEach((a || "").split(":"), function (a, b) {
                        if (0 === b) d.push(a);
                        else {
                            var e = a.match(/(\w+)(?:[?*])?(.*)/),
                                f = e[1];
                            d.push(c[f]), d.push(e[2] || ""), delete c[f]
                        }
                    }), d.join("")
                }
                var q, r, s = !1,
                    t = {
                        routes: d,
                        reload: function () {
                            s = !0, c.$evalAsync(function () {
                                m(), n()
                            })
                        },
                        updateParams: function (a) {
                            if (!this.current || !this.current.$$route) throw i("norout", "Tried updating route when with no current route");
                            a = b.extend({}, this.current.params, a), e.path(p(this.current.$$route.originalPath, a)), e.search(a)
                        }
                    };
                return c.$on("$locationChangeStart", m), c.$on("$locationChangeSuccess", n), t
            }]
        }

        function e() {
            this.$get = function () {
                return {}
            }
        }

        function f(a, c, d) {
            return {
                restrict: "ECA",
                terminal: !0,
                priority: 400,
                transclude: "element",
                link: function (e, f, g, h, i) {
                    function j() {
                        n && (d.cancel(n), n = null), l && (l.$destroy(), l = null), m && (n = d.leave(m), n.then(function () {
                            n = null
                        }), m = null)
                    }

                    function k() {
                        var g = a.current && a.current.locals,
                            h = g && g.$template;
                        if (b.isDefined(h)) {
                            var k = e.$new(),
                                n = a.current,
                                q = i(k, function (a) {
                                    d.enter(a, null, m || f).then(function () {
                                        !b.isDefined(o) || o && !e.$eval(o) || c()
                                    }), j()
                                });
                            m = q, l = n.scope = k, l.$emit("$viewContentLoaded"), l.$eval(p)
                        } else j()
                    }
                    var l, m, n, o = g.autoscroll,
                        p = g.onload || "";
                    e.$on("$routeChangeSuccess", k), k()
                }
            }
        }

        function g(a, b, c) {
            return {
                restrict: "ECA",
                priority: -400,
                link: function (d, e) {
                    var f = c.current,
                        g = f.locals;
                    e.html(g.$template);
                    var h = a(e.contents());
                    if (f.controller) {
                        g.$scope = d;
                        var i = b(f.controller, g);
                        f.controllerAs && (d[f.controllerAs] = i), e.data("$ngControllerController", i), e.children().data("$ngControllerController", i)
                    }
                    h(d)
                }
            }
        }
        var h = b.module("ngRoute", ["ng"]).provider("$route", d),
            i = b.$$minErr("ngRoute");
        h.provider("$routeParams", e), h.directive("ngView", f), h.directive("ngView", g), f.$inject = ["$route", "$anchorScroll", "$animate"], g.$inject = ["$compile", "$controller", "$route"]
    }(window, window.angular),
    function (a, b, c) {
        "use strict";

        function d() {
            this.$get = ["$$sanitizeUri", function (a) {
                return function (b) {
                    var c = [];
                    return g(b, j(c, function (b, c) {
                        return !/^unsafe/.test(a(b, c))
                    })), c.join("")
                }
            }]
        }

        function e(a) {
            var c = [],
                d = j(c, b.noop);
            return d.chars(a), c.join("")
        }

        function f(a, c) {
            var d, e = {},
                f = a.split(",");
            for (d = 0; d < f.length; d++) e[c ? b.lowercase(f[d]) : f[d]] = !0;
            return e
        }

        function g(a, c) {
            function d(a, d, f, g) {
                if (d = b.lowercase(d), z[d])
                    for (; t.last() && A[t.last()];) e("", t.last());
                y[d] && t.last() == d && e("", d), g = v[d] || !!g, g || t.push(d);
                var i = {};
                f.replace(n, function (a, b, c, d, e) {
                    var f = c || d || e || "";
                    i[b] = h(f)
                }), c.start && c.start(d, i, g)
            }

            function e(a, d) {
                var e, f = 0;
                if (d = b.lowercase(d))
                    for (f = t.length - 1; f >= 0 && t[f] != d; f--);
                if (f >= 0) {
                    for (e = t.length - 1; e >= f; e--) c.end && c.end(t[e]);
                    t.length = f
                }
            }
            "string" != typeof a && (a = null === a || "undefined" == typeof a ? "" : "" + a);
            var f, g, i, j, t = [],
                u = a;
            for (t.last = function () {
                return t[t.length - 1]
            }; a;) {
                if (j = "", g = !0, t.last() && C[t.last()] ? (a = a.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*" + t.last() + "[^>]*>", "i"), function (a, b) {
                    return b = b.replace(q, "$1").replace(s, "$1"), c.chars && c.chars(h(b)), ""
                }), e("", t.last())) : (0 === a.indexOf("<!--") ? (f = a.indexOf("--", 4), f >= 0 && a.lastIndexOf("-->", f) === f && (c.comment && c.comment(a.substring(4, f)), a = a.substring(f + 3), g = !1)) : r.test(a) ? (i = a.match(r), i && (a = a.replace(i[0], ""), g = !1)) : p.test(a) ? (i = a.match(m), i && (a = a.substring(i[0].length), i[0].replace(m, e), g = !1)) : o.test(a) && (i = a.match(l), i ? (i[4] && (a = a.substring(i[0].length), i[0].replace(l, d)), g = !1) : (j += "<", a = a.substring(1))), g && (f = a.indexOf("<"), j += 0 > f ? a : a.substring(0, f), a = 0 > f ? "" : a.substring(f), c.chars && c.chars(h(j)))), a == u) throw k("badparse", "The sanitizer was unable to parse the following block of html: {0}", a);
                u = a
            }
            e()
        }

        function h(a) {
            return a ? (I.innerHTML = a.replace(/</g, "&lt;"), I.textContent) : ""
        }

        function i(a) {
            return a.replace(/&/g, "&amp;").replace(t, function (a) {
                var b = a.charCodeAt(0),
                    c = a.charCodeAt(1);
                return "&#" + (1024 * (b - 55296) + (c - 56320) + 65536) + ";"
            }).replace(u, function (a) {
                return "&#" + a.charCodeAt(0) + ";"
            }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function j(a, c) {
            var d = !1,
                e = b.bind(a, a.push);
            return {
                start: function (a, f, g) {
                    a = b.lowercase(a), !d && C[a] && (d = a), d || D[a] !== !0 || (e("<"), e(a), b.forEach(f, function (d, f) {
                        var g = b.lowercase(f),
                            h = "img" === a && "src" === g || "background" === g;
                        H[g] !== !0 || E[g] === !0 && !c(d, h) || (e(" "), e(f), e('="'), e(i(d)), e('"'))
                    }), e(g ? "/>" : ">"))
                },
                end: function (a) {
                    a = b.lowercase(a), d || D[a] !== !0 || (e("</"), e(a), e(">")), a == d && (d = !1)
                },
                chars: function (a) {
                    d || e(i(a))
                }
            }
        }
        var k = b.$$minErr("$sanitize"),
            l = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,
            m = /^<\/\s*([\w:-]+)[^>]*>/,
            n = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
            o = /^</,
            p = /^<\//,
            q = /<!--(.*?)-->/g,
            r = /<!DOCTYPE([^>]*?)>/i,
            s = /<!\[CDATA\[(.*?)]]>/g,
            t = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            u = /([^\#-~| |!])/g,
            v = f("area,br,col,hr,img,wbr"),
            w = f("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
            x = f("rp,rt"),
            y = b.extend({}, x, w),
            z = b.extend({}, w, f("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
            A = b.extend({}, x, f("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
            B = f("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan,use"),
            C = f("script,style"),
            D = b.extend({}, v, z, A, y, B),
            E = f("background,cite,href,longdesc,src,usemap,xlink:href"),
            F = f("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width"),
            G = f("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan", !0),
            H = b.extend({}, E, G, F),
            I = document.createElement("pre");
        b.module("ngSanitize", []).provider("$sanitize", d), b.module("ngSanitize").filter("linky", ["$sanitize", function (a) {
            var c = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"”’]/,
                d = /^mailto:/;
            return function (f, g) {
                function h(a) {
                    a && n.push(e(a))
                }

                function i(a, c) {
                    n.push("<a "), b.isDefined(g) && n.push('target="', g, '" '), n.push('href="', a.replace(/"/g, "&quot;"), '">'), h(c), n.push("</a>")
                }
                if (!f) return f;
                for (var j, k, l, m = f, n = []; j = m.match(c);) k = j[0], j[2] || j[4] || (k = (j[3] ? "http://" : "mailto:") + k), l = j.index, h(m.substr(0, l)), i(k, j[0].replace(d, "")), m = m.substring(l + j[0].length);
                return h(m), a(n.join(""))
            }
        }])
    }(window, window.angular),
    function (a, b, c) {
        "use strict";

        function d(a) {
            return b.lowercase(a.nodeName || a[0] && a[0].nodeName)
        }

        function e(a, c, d) {
            f.directive(a, ["$parse", "$swipe", function (e, f) {
                var g = 75,
                    h = .3,
                    i = 30;
                return function (j, k, l) {
                    function m(a) {
                        if (!n) return !1;
                        var b = Math.abs(a.y - n.y),
                            d = (a.x - n.x) * c;
                        return o && g > b && d > 0 && d > i && h > b / d
                    }
                    var n, o, p = e(l[a]),
                        q = ["touch"];
                    b.isDefined(l.ngSwipeDisableMouse) || q.push("mouse"), f.bind(k, {
                        start: function (a, b) {
                            n = a, o = !0
                        },
                        cancel: function (a) {
                            o = !1
                        },
                        end: function (a, b) {
                            m(a) && j.$apply(function () {
                                k.triggerHandler(d), p(j, {
                                    $event: b
                                })
                            })
                        }
                    }, q)
                }
            }])
        }
        var f = b.module("ngTouch", []);
        f.factory("$swipe", [function () {
            function a(a) {
                var b = a.originalEvent || a,
                    c = b.touches && b.touches.length ? b.touches : [b],
                    d = b.changedTouches && b.changedTouches[0] || c[0];
                return {
                    x: d.clientX,
                    y: d.clientY
                }
            }

            function c(a, c) {
                var d = [];
                return b.forEach(a, function (a) {
                    var b = e[a][c];
                    b && d.push(b)
                }), d.join(" ")
            }
            var d = 10,
                e = {
                    mouse: {
                        start: "mousedown",
                        move: "mousemove",
                        end: "mouseup"
                    },
                    touch: {
                        start: "touchstart",
                        move: "touchmove",
                        end: "touchend",
                        cancel: "touchcancel"
                    }
                };
            return {
                bind: function (b, e, f) {
                    var g, h, i, j, k = !1;
                    f = f || ["mouse", "touch"], b.on(c(f, "start"), function (b) {
                        i = a(b), k = !0, g = 0, h = 0, j = i, e.start && e.start(i, b)
                    });
                    var l = c(f, "cancel");
                    l && b.on(l, function (a) {
                        k = !1, e.cancel && e.cancel(a)
                    }), b.on(c(f, "move"), function (b) {
                        if (k && i) {
                            var c = a(b);
                            if (g += Math.abs(c.x - j.x), h += Math.abs(c.y - j.y), j = c, !(d > g && d > h)) return h > g ? (k = !1, void (e.cancel && e.cancel(b))) : (b.preventDefault(), void (e.move && e.move(c, b)))
                        }
                    }), b.on(c(f, "end"), function (b) {
                        k && (k = !1, e.end && e.end(a(b), b))
                    })
                }
            }
        }]), f.config(["$provide", function (a) {
            a.decorator("ngClickDirective", ["$delegate", function (a) {
                return a.shift(), a
            }])
        }]), f.directive("ngClick", ["$parse", "$timeout", "$rootElement", function (a, c, e) {
            function f(a, b, c, d) {
                return Math.abs(a - c) < q && Math.abs(b - d) < q
            }

            function g(a, b, c) {
                for (var d = 0; d < a.length; d += 2)
                    if (f(a[d], a[d + 1], b, c)) return a.splice(d, d + 2), !0;
                return !1
            }

            function h(a) {
                if (!(Date.now() - k > p)) {
                    var b = a.touches && a.touches.length ? a.touches : [a],
                        c = b[0].clientX,
                        e = b[0].clientY;
                    1 > c && 1 > e || m && m[0] === c && m[1] === e || (m && (m = null), "label" === d(a.target) && (m = [c, e]), g(l, c, e) || (a.stopPropagation(), a.preventDefault(), a.target && a.target.blur && a.target.blur()))
                }
            }

            function i(a) {
                var b = a.touches && a.touches.length ? a.touches : [a],
                    d = b[0].clientX,
                    e = b[0].clientY;
                l.push(d, e), c(function () {
                    for (var a = 0; a < l.length; a += 2)
                        if (l[a] == d && l[a + 1] == e) return void l.splice(a, a + 2)
                }, p, !1)
            }

            function j(a, b) {
                l || (e[0].addEventListener("click", h, !0), e[0].addEventListener("touchstart", i, !0), l = []), k = Date.now(), g(l, a, b)
            }
            var k, l, m, n = 750,
                o = 12,
                p = 2500,
                q = 25,
                r = "ng-click-active";
            return function (c, d, e) {
                function f() {
                    m = !1, d.removeClass(r)
                }
                var g, h, i, k, l = a(e.ngClick),
                    m = !1;
                d.on("touchstart", function (a) {
                    m = !0, g = a.target ? a.target : a.srcElement, 3 == g.nodeType && (g = g.parentNode), d.addClass(r), h = Date.now();
                    var b = a.originalEvent || a,
                        c = b.touches && b.touches.length ? b.touches : [b],
                        e = c[0];
                    i = e.clientX, k = e.clientY
                }), d.on("touchcancel", function (a) {
                    f()
                }), d.on("touchend", function (a) {
                    var c = Date.now() - h,
                        l = a.originalEvent || a,
                        p = l.changedTouches && l.changedTouches.length ? l.changedTouches : l.touches && l.touches.length ? l.touches : [l],
                        q = p[0],
                        r = q.clientX,
                        s = q.clientY,
                        t = Math.sqrt(Math.pow(r - i, 2) + Math.pow(s - k, 2));
                    m && n > c && o > t && (j(r, s), g && g.blur(), b.isDefined(e.disabled) && e.disabled !== !1 || d.triggerHandler("click", [a])), f()
                }), d.onclick = function (a) { }, d.on("click", function (a, b) {
                    c.$apply(function () {
                        l(c, {
                            $event: b || a
                        })
                    })
                }), d.on("mousedown", function (a) {
                    d.addClass(r)
                }), d.on("mousemove mouseup", function (a) {
                    d.removeClass(r)
                })
            }
        }]), e("ngSwipeLeft", -1, "swipeleft"), e("ngSwipeRight", 1, "swiperight")
    }(window, window.angular),
    function (a, b, c) {
        "use strict";

        function d(a) {
            var b;
            if (b = a.match(j)) {
                var c = new Date(0),
                    d = 0,
                    f = 0;
                return b[9] && (d = e(b[9] + b[10]), f = e(b[9] + b[11])), c.setUTCFullYear(e(b[1]), e(b[2]) - 1, e(b[3])), c.setUTCHours(e(b[4] || 0) - d, e(b[5] || 0) - f, e(b[6] || 0), e(b[7] || 0)), c
            }
            return a
        }

        function e(a) {
            return parseInt(a, 10)
        }

        function f(a, b, c) {
            var d = "";
            for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b;) a = "0" + a;
            return c && (a = a.substr(a.length - b)), d + a
        }

        function g(a, d, e, f) {
            function g(a, c, d, e) {
                return b.isFunction(a) ? a : function () {
                    return b.isNumber(a) ? [a, c, d, e] : [200, a, c, d]
                }
            }

            function j(a, g, h, j, k, q, r) {
                function s(a) {
                    return b.isString(a) || b.isFunction(a) || a instanceof RegExp ? a : b.toJson(a)
                }

                function t(b) {
                    function e() {
                        var c = b.response(a, g, h, k);
                        u.$$respHeaders = c[2], j(p(c[0]), p(c[1]), u.getAllResponseHeaders(), p(c[3] || ""))
                    }

                    function i() {
                        for (var a = 0, b = n.length; b > a; a++)
                            if (n[a] === e) {
                                n.splice(a, 1), j(-1, c, "");
                                break
                            }
                    }
                    return !f && q && (q.then ? q.then(i) : d(i, q)), e
                }
                var u = new i,
                    v = m[0],
                    w = !1;
                if (v && v.match(a, g)) {
                    if (!v.matchData(h)) throw new Error("Expected " + v + " with different data\nEXPECTED: " + s(v.data) + "\nGOT:      " + h);
                    if (!v.matchHeaders(k)) throw new Error("Expected " + v + " with different headers\nEXPECTED: " + s(v.headers) + "\nGOT:      " + s(k));
                    if (m.shift(), v.response) return void n.push(t(v));
                    w = !0
                }
                for (var x, y = -1; x = l[++y];)
                    if (x.match(a, g, h, k || {})) {
                        if (x.response) (f ? f.defer : o)(t(x));
                        else {
                            if (!x.passThrough) throw new Error("No response defined !");
                            e(a, g, h, j, k, q, r)
                        }
                        return
                    }
                throw w ? new Error("No response defined !") : new Error("Unexpected request: " + a + " " + g + "\n" + (v ? "Expected " + v : "No more request expected"))
            }

            function k(a) {
                b.forEach(["GET", "DELETE", "JSONP", "HEAD"], function (b) {
                    j[a + b] = function (d, e) {
                        return j[a](b, d, c, e)
                    }
                }), b.forEach(["PUT", "POST", "PATCH"], function (b) {
                    j[a + b] = function (c, d, e) {
                        return j[a](b, c, d, e)
                    }
                })
            }
            var l = [],
                m = [],
                n = [],
                o = b.bind(n, n.push),
                p = b.copy;
            return j.when = function (a, b, d, e) {
                var i = new h(a, b, d, e),
                    j = {
                        respond: function (a, b, d, e) {
                            return i.passThrough = c, i.response = g(a, b, d, e), j
                        }
                    };
                return f && (j.passThrough = function () {
                    return i.response = c, i.passThrough = !0, j
                }), l.push(i), j
            }, k("when"), j.expect = function (a, b, c, d) {
                var e = new h(a, b, c, d),
                    f = {
                        respond: function (a, b, c, d) {
                            return e.response = g(a, b, c, d), f
                        }
                    };
                return m.push(e), f
            }, k("expect"), j.flush = function (c, d) {
                if (d !== !1 && a.$digest(), !n.length) throw new Error("No pending request to flush !");
                if (b.isDefined(c) && null !== c)
                    for (; c--;) {
                        if (!n.length) throw new Error("No more pending request to flush !");
                        n.shift()()
                    } else
                    for (; n.length;) n.shift()();
                j.verifyNoOutstandingExpectation(d)
            }, j.verifyNoOutstandingExpectation = function (b) {
                if (b !== !1 && a.$digest(), m.length) throw new Error("Unsatisfied requests: " + m.join(", "))
            }, j.verifyNoOutstandingRequest = function () {
                if (n.length) throw new Error("Unflushed requests: " + n.length)
            }, j.resetExpectations = function () {
                m.length = 0, n.length = 0
            }, j
        }

        function h(a, c, d, e) {
            this.data = d, this.headers = e, this.match = function (c, d, e, f) {
                return a != c ? !1 : this.matchUrl(d) ? b.isDefined(e) && !this.matchData(e) ? !1 : b.isDefined(f) && !this.matchHeaders(f) ? !1 : !0 : !1
            }, this.matchUrl = function (a) {
                return c ? b.isFunction(c.test) ? c.test(a) : b.isFunction(c) ? c(a) : c == a : !0
            }, this.matchHeaders = function (a) {
                return b.isUndefined(e) ? !0 : b.isFunction(e) ? e(a) : b.equals(e, a)
            }, this.matchData = function (a) {
                return b.isUndefined(d) ? !0 : d && b.isFunction(d.test) ? d.test(a) : d && b.isFunction(d) ? d(a) : d && !b.isString(d) ? b.equals(b.fromJson(b.toJson(d)), b.fromJson(a)) : d == a
            }, this.toString = function () {
                return a + " " + c
            }
        }

        function i() {
            i.$$lastInstance = this, this.open = function (a, b, c) {
                this.$$method = a, this.$$url = b, this.$$async = c, this.$$reqHeaders = {}, this.$$respHeaders = {}
            }, this.send = function (a) {
                this.$$data = a
            }, this.setRequestHeader = function (a, b) {
                this.$$reqHeaders[a] = b
            }, this.getResponseHeader = function (a) {
                var d = this.$$respHeaders[a];
                return d ? d : (a = b.lowercase(a), (d = this.$$respHeaders[a]) ? d : (d = c, b.forEach(this.$$respHeaders, function (c, e) {
                    d || b.lowercase(e) != a || (d = c)
                }), d))
            }, this.getAllResponseHeaders = function () {
                var a = [];
                return b.forEach(this.$$respHeaders, function (b, c) {
                    a.push(c + ": " + b)
                }), a.join("\n")
            }, this.abort = b.noop
        }
        b.mock = {}, b.mock.$BrowserProvider = function () {
            this.$get = function () {
                return new b.mock.$Browser
            }
        }, b.mock.$Browser = function () {
            var a = this;
            this.isMock = !0, a.$$url = "http://server/", a.$$lastUrl = a.$$url, a.pollFns = [], a.$$completeOutstandingRequest = b.noop, a.$$incOutstandingRequestCount = b.noop, a.onUrlChange = function (b) {
                return a.pollFns.push(function () {
                    (a.$$lastUrl !== a.$$url || a.$$state !== a.$$lastState) && (a.$$lastUrl = a.$$url, a.$$lastState = a.$$state, b(a.$$url, a.$$state))
                }), b
            }, a.$$applicationDestroyed = b.noop, a.$$checkUrlChange = b.noop, a.deferredFns = [], a.deferredNextId = 0, a.defer = function (b, c) {
                return c = c || 0, a.deferredFns.push({
                    time: a.defer.now + c,
                    fn: b,
                    id: a.deferredNextId
                }), a.deferredFns.sort(function (a, b) {
                    return a.time - b.time
                }), a.deferredNextId++
            }, a.defer.now = 0, a.defer.cancel = function (d) {
                var e;
                return b.forEach(a.deferredFns, function (a, b) {
                    a.id === d && (e = b)
                }), e !== c ? (a.deferredFns.splice(e, 1), !0) : !1
            }, a.defer.flush = function (c) {
                if (b.isDefined(c)) a.defer.now += c;
                else {
                    if (!a.deferredFns.length) throw new Error("No deferred tasks to be flushed");
                    a.defer.now = a.deferredFns[a.deferredFns.length - 1].time
                }
                for (; a.deferredFns.length && a.deferredFns[0].time <= a.defer.now;) a.deferredFns.shift().fn()
            }, a.$$baseHref = "/", a.baseHref = function () {
                return this.$$baseHref
            }
        }, b.mock.$Browser.prototype = {
            poll: function () {
                b.forEach(this.pollFns, function (a) {
                    a()
                })
            },
            url: function (a, c, d) {
                return b.isUndefined(d) && (d = null), a ? (this.$$url = a, this.$$state = b.copy(d), this) : this.$$url
            },
            state: function () {
                return this.$$state
            },
            notifyWhenNoOutstandingRequests: function (a) {
                a()
            }
        }, b.mock.$ExceptionHandlerProvider = function () {
            var a;
            this.mode = function (b) {
                switch (b) {
                    case "log":
                    case "rethrow":
                        var c = [];
                        a = function (a) {
                            if (1 == arguments.length ? c.push(a) : c.push([].slice.call(arguments, 0)), "rethrow" === b) throw a
                        }, a.errors = c;
                        break;
                    default:
                        throw new Error("Unknown mode '" + b + "', only 'log'/'rethrow' modes are allowed!")
                }
            }, this.$get = function () {
                return a
            }, this.mode("rethrow")
        }, b.mock.$LogProvider = function () {
            function a(a, b, c) {
                return a.concat(Array.prototype.slice.call(b, c))
            }
            var c = !0;
            this.debugEnabled = function (a) {
                return b.isDefined(a) ? (c = a, this) : c
            }, this.$get = function () {
                var d = {
                    log: function () {
                        d.log.logs.push(a([], arguments, 0))
                    },
                    warn: function () {
                        d.warn.logs.push(a([], arguments, 0))
                    },
                    info: function () {
                        d.info.logs.push(a([], arguments, 0))
                    },
                    error: function () {
                        d.error.logs.push(a([], arguments, 0))
                    },
                    debug: function () {
                        c && d.debug.logs.push(a([], arguments, 0))
                    }
                };
                return d.reset = function () {
                    d.log.logs = [], d.info.logs = [], d.warn.logs = [], d.error.logs = [], d.debug.logs = []
                }, d.assertEmpty = function () {
                    var a = [];
                    if (b.forEach(["error", "warn", "info", "log", "debug"], function (c) {
                        b.forEach(d[c].logs, function (d) {
                            b.forEach(d, function (b) {
                                a.push("MOCK $log (" + c + "): " + String(b) + "\n" + (b.stack || ""))
                            })
                        })
                    }), a.length) throw a.unshift("Expected $log to be empty! Either a message was logged unexpectedly, or an expected log message was not checked and removed:"), a.push(""), new Error(a.join("\n---------\n"))
                }, d.reset(), d
            }
        }, b.mock.$IntervalProvider = function () {
            this.$get = ["$browser", "$rootScope", "$q", "$$q", function (a, d, e, f) {
                var g = [],
                    h = 0,
                    i = 0,
                    j = function (j, k, l, m) {
                        function n() {
                            if (s.notify(q++), l > 0 && q >= l) {
                                var e;
                                s.resolve(q), b.forEach(g, function (a, b) {
                                    a.id === t.$$intervalId && (e = b)
                                }), e !== c && g.splice(e, 1)
                            }
                            r ? a.defer.flush() : d.$apply()
                        }
                        var o = arguments.length > 4,
                            p = o ? Array.prototype.slice.call(arguments, 4) : [],
                            q = 0,
                            r = b.isDefined(m) && !m,
                            s = (r ? f : e).defer(),
                            t = s.promise;
                        return l = b.isDefined(l) ? l : 0, t.then(null, null, o ? function () {
                            j.apply(null, p)
                        } : j), t.$$intervalId = h, g.push({
                            nextTime: i + k,
                            delay: k,
                            fn: n,
                            id: h,
                            deferred: s
                        }), g.sort(function (a, b) {
                            return a.nextTime - b.nextTime
                        }), h++ , t
                    };
                return j.cancel = function (a) {
                    if (!a) return !1;
                    var d;
                    return b.forEach(g, function (b, c) {
                        b.id === a.$$intervalId && (d = c)
                    }), d !== c ? (g[d].deferred.reject("canceled"), g.splice(d, 1), !0) : !1
                }, j.flush = function (a) {
                    for (i += a; g.length && g[0].nextTime <= i;) {
                        var b = g[0];
                        b.fn(), b.nextTime += b.delay, g.sort(function (a, b) {
                            return a.nextTime - b.nextTime
                        })
                    }
                    return a
                }, j
            }]
        };
        var j = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?:\:?(\d\d)(?:\:?(\d\d)(?:\.(\d{3}))?)?)?(Z|([+-])(\d\d):?(\d\d)))?$/;
        if (b.mock.TzDate = function (a, c) {
            var e = new Date(0);
            if (b.isString(c)) {
                var g = c;
                if (e.origDate = d(c), c = e.origDate.getTime(), isNaN(c)) throw {
                    name: "Illegal Argument",
                    message: "Arg '" + g + "' passed into TzDate constructor is not a valid date string"
                }
            } else e.origDate = new Date(c);
            var h = new Date(c).getTimezoneOffset();
            e.offsetDiff = 60 * h * 1e3 - 1e3 * a * 60 * 60, e.date = new Date(c + e.offsetDiff), e.getTime = function () {
                return e.date.getTime() - e.offsetDiff
            }, e.toLocaleDateString = function () {
                return e.date.toLocaleDateString()
            }, e.getFullYear = function () {
                return e.date.getFullYear()
            }, e.getMonth = function () {
                return e.date.getMonth()
            }, e.getDate = function () {
                return e.date.getDate()
            }, e.getHours = function () {
                return e.date.getHours()
            }, e.getMinutes = function () {
                return e.date.getMinutes()
            }, e.getSeconds = function () {
                return e.date.getSeconds()
            }, e.getMilliseconds = function () {
                return e.date.getMilliseconds()
            }, e.getTimezoneOffset = function () {
                return 60 * a
            }, e.getUTCFullYear = function () {
                return e.origDate.getUTCFullYear()
            }, e.getUTCMonth = function () {
                return e.origDate.getUTCMonth()
            }, e.getUTCDate = function () {
                return e.origDate.getUTCDate()
            }, e.getUTCHours = function () {
                return e.origDate.getUTCHours()
            }, e.getUTCMinutes = function () {
                return e.origDate.getUTCMinutes()
            }, e.getUTCSeconds = function () {
                return e.origDate.getUTCSeconds()
            }, e.getUTCMilliseconds = function () {
                return e.origDate.getUTCMilliseconds()
            }, e.getDay = function () {
                return e.date.getDay()
            }, e.toISOString && (e.toISOString = function () {
                return f(e.origDate.getUTCFullYear(), 4) + "-" + f(e.origDate.getUTCMonth() + 1, 2) + "-" + f(e.origDate.getUTCDate(), 2) + "T" + f(e.origDate.getUTCHours(), 2) + ":" + f(e.origDate.getUTCMinutes(), 2) + ":" + f(e.origDate.getUTCSeconds(), 2) + "." + f(e.origDate.getUTCMilliseconds(), 3) + "Z"
            });
            var i = ["getUTCDay", "getYear", "setDate", "setFullYear", "setHours", "setMilliseconds", "setMinutes", "setMonth", "setSeconds", "setTime", "setUTCDate", "setUTCFullYear", "setUTCHours", "setUTCMilliseconds", "setUTCMinutes", "setUTCMonth", "setUTCSeconds", "setYear", "toDateString", "toGMTString", "toJSON", "toLocaleFormat", "toLocaleString", "toLocaleTimeString", "toSource", "toString", "toTimeString", "toUTCString", "valueOf"];
            return b.forEach(i, function (a) {
                e[a] = function () {
                    throw new Error("Method '" + a + "' is not implemented in the TzDate mock")
                }
            }), e
        }, b.mock.TzDate.prototype = Date.prototype, b.mock.animate = b.module("ngAnimateMock", ["ng"]).config(["$provide", function (a) {
            var c = [];
            a.value("$$animateReflow", function (a) {
                var b = c.length;
                return c.push(a),
                    function () {
                        c.splice(b, 1)
                    }
            }), a.decorator("$animate", ["$delegate", "$$asyncCallback", "$timeout", "$browser", "$$rAF", function (a, d, e, f, g) {
                var h = {
                    queue: [],
                    cancel: a.cancel,
                    enabled: a.enabled,
                    triggerCallbackEvents: function () {
                        g.flush(), d.flush()
                    },
                    triggerCallbackPromise: function () {
                        e.flush(0)
                    },
                    triggerCallbacks: function () {
                        this.triggerCallbackEvents(), this.triggerCallbackPromise()
                    },
                    triggerReflow: function () {
                        b.forEach(c, function (a) {
                            a()
                        }), c = []
                    }
                };
                return b.forEach(["animate", "enter", "leave", "move", "addClass", "removeClass", "setClass"], function (b) {
                    h[b] = function () {
                        return h.queue.push({
                            event: b,
                            element: arguments[0],
                            options: arguments[arguments.length - 1],
                            args: arguments
                        }), a[b].apply(a, arguments)
                    }
                }), h
            }])
        }]), b.mock.dump = function (a) {
            function c(a) {
                var e;
                return b.isElement(a) ? (a = b.element(a), e = b.element("<div></div>"), b.forEach(a, function (a) {
                    e.append(b.element(a).clone())
                }), e = e.html()) : b.isArray(a) ? (e = [], b.forEach(a, function (a) {
                    e.push(c(a))
                }), e = "[ " + e.join(", ") + " ]") : e = b.isObject(a) ? b.isFunction(a.$eval) && b.isFunction(a.$apply) ? d(a) : a instanceof Error ? a.stack || "" + a.name + ": " + a.message : b.toJson(a, !0) : String(a), e
            }

            function d(a, c) {
                c = c || "  ";
                var e = [c + "Scope(" + a.$id + "): {"];
                for (var f in a) Object.prototype.hasOwnProperty.call(a, f) && !f.match(/^(\$|this)/) && e.push("  " + f + ": " + b.toJson(a[f]));
                for (var g = a.$$childHead; g;) e.push(d(g, c + "  ")), g = g.$$nextSibling;
                return e.push("}"), e.join("\n" + c)
            }
            return c(a)
        }, b.mock.$HttpBackendProvider = function () {
            this.$get = ["$rootScope", "$timeout", g]
        }, b.mock.$TimeoutDecorator = ["$delegate", "$browser", function (a, c) {
            function d(a) {
                var c = [];
                return b.forEach(a, function (a) {
                    c.push("{id: " + a.id + ", time: " + a.time + "}")
                }), c.join(", ")
            }
            return a.flush = function (a) {
                c.defer.flush(a)
            }, a.verifyNoPendingTasks = function () {
                if (c.deferredFns.length) throw new Error("Deferred tasks to flush (" + c.deferredFns.length + "): " + d(c.deferredFns))
            }, a
        }], b.mock.$RAFDecorator = ["$delegate", function (a) {
            var b = [],
                c = function (a) {
                    var c = b.length;
                    return b.push(a),
                        function () {
                            b.splice(c, 1)
                        }
                };
            return c.supported = a.supported, c.flush = function () {
                if (0 === b.length) throw new Error("No rAF callbacks present");
                for (var a = b.length, c = 0; a > c; c++) b[c]();
                b = b.slice(c)
            }, c
        }], b.mock.$AsyncCallbackDecorator = ["$delegate", function (a) {
            var c = [],
                d = function (a) {
                    c.push(a)
                };
            return d.flush = function () {
                b.forEach(c, function (a) {
                    a()
                }), c = []
            }, d
        }], b.mock.$RootElementProvider = function () {
            this.$get = function () {
                return b.element("<div ng-app></div>")
            }
        }, b.mock.$ControllerDecorator = ["$delegate", function (a) {
            return function (c, d, e, f) {
                if (e && "object" == typeof e) {
                    var g = a(c, d, !0, f);
                    return b.extend(g.instance, e), g()
                }
                return a(c, d, e, f)
            }
        }], b.module("ngMock", ["ng"]).provider({
            $browser: b.mock.$BrowserProvider,
            $exceptionHandler: b.mock.$ExceptionHandlerProvider,
            $log: b.mock.$LogProvider,
            $interval: b.mock.$IntervalProvider,
            $httpBackend: b.mock.$HttpBackendProvider,
            $rootElement: b.mock.$RootElementProvider
        }).config(["$provide", function (a) {
            a.decorator("$timeout", b.mock.$TimeoutDecorator), a.decorator("$$rAF", b.mock.$RAFDecorator), a.decorator("$$asyncCallback", b.mock.$AsyncCallbackDecorator), a.decorator("$rootScope", b.mock.$RootScopeDecorator), a.decorator("$controller", b.mock.$ControllerDecorator)
        }]), b.module("ngMockE2E", ["ng"]).config(["$provide", function (a) {
            a.decorator("$httpBackend", b.mock.e2e.$httpBackendDecorator)
        }]), b.mock.e2e = {}, b.mock.e2e.$httpBackendDecorator = ["$rootScope", "$timeout", "$delegate", "$browser", g], b.mock.$RootScopeDecorator = ["$delegate", function (a) {
            function b() {
                for (var a, b = 0, c = [this.$$childHead]; c.length;)
                    for (a = c.shift(); a;) b += 1, c.push(a.$$childHead), a = a.$$nextSibling;
                return b
            }

            function c() {
                for (var a, b = this.$$watchers ? this.$$watchers.length : 0, c = [this.$$childHead]; c.length;)
                    for (a = c.shift(); a;) b += a.$$watchers ? a.$$watchers.length : 0, c.push(a.$$childHead), a = a.$$nextSibling;
                return b
            }
            var d = Object.getPrototypeOf(a);
            return d.$countChildScopes = b, d.$countWatchers = c, a
        }], a.jasmine || a.mocha) {
            var k = null,
                l = [],
                m = function () {
                    return !!k
                };
            b.mock.$$annotate = b.injector.$$annotate, b.injector.$$annotate = function (a) {
                return "function" != typeof a || a.$inject || l.push(a), b.mock.$$annotate.apply(this, arguments)
            }, (a.beforeEach || a.setup)(function () {
                l = [], k = this
            }), (a.afterEach || a.teardown)(function () {
                var a = k.$injector;
                l.forEach(function (a) {
                    delete a.$inject
                }), b.forEach(k.$modules, function (a) {
                    a && a.$$hashKey && (a.$$hashKey = c)
                }), k.$injector = null, k.$modules = null, k = null, a && a.get("$rootElement").off(), b.forEach(b.element.fragments, function (a, c) {
                    delete b.element.fragments[c]
                }), i.$$lastInstance = null, b.forEach(b.callbacks, function (a, c) {
                    delete b.callbacks[c]
                }), b.callbacks.counter = 0
            }), a.module = b.mock.module = function () {
                function a() {
                    if (k.$injector) throw new Error("Injector already created, can not register a module!");
                    var a = k.$modules || (k.$modules = []);
                    b.forEach(c, function (c) {
                        b.isObject(c) && !b.isArray(c) ? a.push(function (a) {
                            b.forEach(c, function (b, c) {
                                a.value(c, b)
                            })
                        }) : a.push(c)
                    })
                }
                var c = Array.prototype.slice.call(arguments, 0);
                return m() ? a() : a
            };
            var n = function (a, b) {
                this.message = a.message, this.name = a.name, a.line && (this.line = a.line), a.sourceId && (this.sourceId = a.sourceId), a.stack && b && (this.stack = a.stack + "\n" + b.stack), a.stackArray && (this.stackArray = a.stackArray)
            };
            n.prototype.toString = Error.prototype.toString, a.inject = b.mock.inject = function () {
                function a() {
                    var a = k.$modules || [],
                        e = !!k.$injectorStrict;
                    a.unshift("ngMock"), a.unshift("ng");
                    var f = k.$injector;
                    f || (e && b.forEach(a, function (a) {
                        "function" == typeof a && b.injector.$$annotate(a)
                    }), f = k.$injector = b.injector(a, e), k.$injectorStrict = e);
                    for (var g = 0, h = c.length; h > g; g++) {
                        k.$injectorStrict && f.annotate(c[g]);
                        try {
                            f.invoke(c[g] || b.noop, this)
                        } catch (i) {
                            if (i.stack && d) throw new n(i, d);
                            throw i
                        } finally {
                            d = null
                        }
                    }
                }
                var c = Array.prototype.slice.call(arguments, 0),
                    d = new Error("Declaration Location");
                return m() ? a.call(k) : a
            }, b.mock.inject.strictDi = function (a) {
                function b() {
                    if (a !== k.$injectorStrict) {
                        if (k.$injector) throw new Error("Injector already created, can not modify strict annotations");
                        k.$injectorStrict = a
                    }
                }
                return a = arguments.length ? !!a : !0, m() ? b() : b
            }
        }
    }(window, window.angular),
    function (a, b, c) {
        b.module("angular-md5", ["gdi2290.md5"]), b.module("ngMd5", ["gdi2290.md5"]), b.module("gdi2290.md5", ["gdi2290.gravatar-filter", "gdi2290.md5-service", "gdi2290.md5-filter"]), b.module("gdi2290.gravatar-filter", []).filter("gravatar", ["md5", function (a) {
            var b = {};
            return function (c, d) {
                return b[c] || (d = d ? a.createHash(d.toString().toLowerCase()) : "", b[c] = c ? a.createHash(c.toString().toLowerCase()) : d), b[c]
            }
        }]), b.module("gdi2290.md5-filter", []).filter("md5", ["md5", function (a) {
            return function (b) {
                return b ? a.createHash(b.toString().toLowerCase()) : b
            }
        }]), b.module("gdi2290.md5-service", []).factory("md5", [function () {
            var a = {
                createHash: function (a) {
                    var b, c, d, e, f, g, h, i, j, k, l = function (a, b) {
                        return a << b | a >>> 32 - b
                    },
                        m = function (a, b) {
                            var c, d, e, f, g;
                            return e = 2147483648 & a, f = 2147483648 & b, c = 1073741824 & a, d = 1073741824 & b, g = (1073741823 & a) + (1073741823 & b), c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f
                        },
                        n = function (a, b, c) {
                            return a & b | ~a & c
                        },
                        o = function (a, b, c) {
                            return a & c | b & ~c
                        },
                        p = function (a, b, c) {
                            return a ^ b ^ c
                        },
                        q = function (a, b, c) {
                            return b ^ (a | ~c)
                        },
                        r = function (a, b, c, d, e, f, g) {
                            return a = m(a, m(m(n(b, c, d), e), g)), m(l(a, f), b)
                        },
                        s = function (a, b, c, d, e, f, g) {
                            return a = m(a, m(m(o(b, c, d), e), g)), m(l(a, f), b)
                        },
                        t = function (a, b, c, d, e, f, g) {
                            return a = m(a, m(m(p(b, c, d), e), g)), m(l(a, f), b)
                        },
                        u = function (a, b, c, d, e, f, g) {
                            return a = m(a, m(m(q(b, c, d), e), g)), m(l(a, f), b)
                        },
                        v = function (a) {
                            for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = new Array(f - 1), h = 0, i = 0; c > i;) b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | a.charCodeAt(i) << h, i++;
                            return b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | 128 << h, g[f - 2] = c << 3, g[f - 1] = c >>> 29, g
                        },
                        w = function (a) {
                            var b, c, d = "",
                                e = "";
                            for (c = 0; 3 >= c; c++) b = a >>> 8 * c & 255, e = "0" + b.toString(16), d += e.substr(e.length - 2, 2);
                            return d
                        },
                        x = [],
                        y = 7,
                        z = 12,
                        A = 17,
                        B = 22,
                        C = 5,
                        D = 9,
                        E = 14,
                        F = 20,
                        G = 4,
                        H = 11,
                        I = 16,
                        J = 23,
                        K = 6,
                        L = 10,
                        M = 15,
                        N = 21;
                    for (x = v(a), h = 1732584193, i = 4023233417, j = 2562383102, k = 271733878, b = x.length, c = 0; b > c; c += 16) d = h, e = i, f = j, g = k, h = r(h, i, j, k, x[c + 0], y, 3614090360), k = r(k, h, i, j, x[c + 1], z, 3905402710), j = r(j, k, h, i, x[c + 2], A, 606105819), i = r(i, j, k, h, x[c + 3], B, 3250441966), h = r(h, i, j, k, x[c + 4], y, 4118548399), k = r(k, h, i, j, x[c + 5], z, 1200080426), j = r(j, k, h, i, x[c + 6], A, 2821735955), i = r(i, j, k, h, x[c + 7], B, 4249261313), h = r(h, i, j, k, x[c + 8], y, 1770035416), k = r(k, h, i, j, x[c + 9], z, 2336552879), j = r(j, k, h, i, x[c + 10], A, 4294925233), i = r(i, j, k, h, x[c + 11], B, 2304563134), h = r(h, i, j, k, x[c + 12], y, 1804603682), k = r(k, h, i, j, x[c + 13], z, 4254626195), j = r(j, k, h, i, x[c + 14], A, 2792965006), i = r(i, j, k, h, x[c + 15], B, 1236535329), h = s(h, i, j, k, x[c + 1], C, 4129170786), k = s(k, h, i, j, x[c + 6], D, 3225465664), j = s(j, k, h, i, x[c + 11], E, 643717713), i = s(i, j, k, h, x[c + 0], F, 3921069994), h = s(h, i, j, k, x[c + 5], C, 3593408605), k = s(k, h, i, j, x[c + 10], D, 38016083), j = s(j, k, h, i, x[c + 15], E, 3634488961), i = s(i, j, k, h, x[c + 4], F, 3889429448), h = s(h, i, j, k, x[c + 9], C, 568446438), k = s(k, h, i, j, x[c + 14], D, 3275163606), j = s(j, k, h, i, x[c + 3], E, 4107603335), i = s(i, j, k, h, x[c + 8], F, 1163531501), h = s(h, i, j, k, x[c + 13], C, 2850285829), k = s(k, h, i, j, x[c + 2], D, 4243563512), j = s(j, k, h, i, x[c + 7], E, 1735328473), i = s(i, j, k, h, x[c + 12], F, 2368359562), h = t(h, i, j, k, x[c + 5], G, 4294588738), k = t(k, h, i, j, x[c + 8], H, 2272392833), j = t(j, k, h, i, x[c + 11], I, 1839030562), i = t(i, j, k, h, x[c + 14], J, 4259657740), h = t(h, i, j, k, x[c + 1], G, 2763975236), k = t(k, h, i, j, x[c + 4], H, 1272893353), j = t(j, k, h, i, x[c + 7], I, 4139469664), i = t(i, j, k, h, x[c + 10], J, 3200236656), h = t(h, i, j, k, x[c + 13], G, 681279174), k = t(k, h, i, j, x[c + 0], H, 3936430074), j = t(j, k, h, i, x[c + 3], I, 3572445317), i = t(i, j, k, h, x[c + 6], J, 76029189), h = t(h, i, j, k, x[c + 9], G, 3654602809), k = t(k, h, i, j, x[c + 12], H, 3873151461), j = t(j, k, h, i, x[c + 15], I, 530742520), i = t(i, j, k, h, x[c + 2], J, 3299628645), h = u(h, i, j, k, x[c + 0], K, 4096336452), k = u(k, h, i, j, x[c + 7], L, 1126891415), j = u(j, k, h, i, x[c + 14], M, 2878612391), i = u(i, j, k, h, x[c + 5], N, 4237533241), h = u(h, i, j, k, x[c + 12], K, 1700485571), k = u(k, h, i, j, x[c + 3], L, 2399980690), j = u(j, k, h, i, x[c + 10], M, 4293915773), i = u(i, j, k, h, x[c + 1], N, 2240044497), h = u(h, i, j, k, x[c + 8], K, 1873313359), k = u(k, h, i, j, x[c + 15], L, 4264355552), j = u(j, k, h, i, x[c + 6], M, 2734768916), i = u(i, j, k, h, x[c + 13], N, 1309151649), h = u(h, i, j, k, x[c + 4], K, 4149444226), k = u(k, h, i, j, x[c + 11], L, 3174756917), j = u(j, k, h, i, x[c + 2], M, 718787259), i = u(i, j, k, h, x[c + 9], N, 3951481745), h = m(h, d), i = m(i, e), j = m(j, f), k = m(k, g);
                    var O = w(h) + w(i) + w(j) + w(k);
                    return O.toLowerCase()
                }
            };
            return a
        }])
    }(this, this.angular, void 0),
    function (a, b) {
        "object" == typeof exports ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.Spinner = b()
    }(this, function () {
        "use strict";

        function a(a, b) {
            var c, d = document.createElement(a || "div");
            for (c in b) d[c] = b[c];
            return d
        }

        function b(a) {
            for (var b = 1, c = arguments.length; c > b; b++) a.appendChild(arguments[b]);
            return a
        }

        function c(a, b, c, d) {
            var e = ["opacity", b, ~~(100 * a), c, d].join("-"),
                f = .01 + c / d * 100,
                g = Math.max(1 - (1 - a) / b * (100 - f), a),
                h = j.substring(0, j.indexOf("Animation")).toLowerCase(),
                i = h && "-" + h + "-" || "";
            return l[e] || (m.insertRule("@" + i + "keyframes " + e + "{0%{opacity:" + g + "}" + f + "%{opacity:" + a + "}" + (f + .01) + "%{opacity:1}" + (f + b) % 100 + "%{opacity:" + a + "}100%{opacity:" + g + "}}", m.cssRules.length), l[e] = 1), e
        }

        function d(a, b) {
            var c, d, e = a.style;
            for (b = b.charAt(0).toUpperCase() + b.slice(1), d = 0; d < k.length; d++)
                if (c = k[d] + b, void 0 !== e[c]) return c;
            return void 0 !== e[b] ? b : void 0
        }

        function e(a, b) {
            for (var c in b) a.style[d(a, c) || c] = b[c];
            return a
        }

        function f(a) {
            for (var b = 1; b < arguments.length; b++) {
                var c = arguments[b];
                for (var d in c) void 0 === a[d] && (a[d] = c[d])
            }
            return a
        }

        function g(a, b) {
            return "string" == typeof a ? a : a[b % a.length]
        }

        function h(a) {
            this.opts = f(a || {}, h.defaults, n)
        }

        function i() {
            function c(b, c) {
                return a("<" + b + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', c)
            }
            m.addRule(".spin-vml", "behavior:url(#default#VML)"), h.prototype.lines = function (a, d) {
                function f() {
                    return e(c("group", {
                        coordsize: k + " " + k,
                        coordorigin: -j + " " + -j
                    }), {
                        width: k,
                        height: k
                    })
                }

                function h(a, h, i) {
                    b(m, b(e(f(), {
                        rotation: 360 / d.lines * a + "deg",
                        left: ~~h
                    }), b(e(c("roundrect", {
                        arcsize: d.corners
                    }), {
                        width: j,
                        height: d.width,
                        left: d.radius,
                        top: -d.width >> 1,
                        filter: i
                    }), c("fill", {
                        color: g(d.color, a),
                        opacity: d.opacity
                    }), c("stroke", {
                        opacity: 0
                    }))))
                }
                var i, j = d.length + d.width,
                    k = 2 * j,
                    l = 2 * -(d.width + d.length) + "px",
                    m = e(f(), {
                        position: "absolute",
                        top: l,
                        left: l
                    });
                if (d.shadow)
                    for (i = 1; i <= d.lines; i++) h(i, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                for (i = 1; i <= d.lines; i++) h(i);
                return b(a, m)
            }, h.prototype.opacity = function (a, b, c, d) {
                var e = a.firstChild;
                d = d.shadow && d.lines || 0, e && b + d < e.childNodes.length && (e = e.childNodes[b + d], e = e && e.firstChild, e = e && e.firstChild, e && (e.opacity = c))
            }
        }
        var j, k = ["webkit", "Moz", "ms", "O"],
            l = {},
            m = function () {
                var c = a("style", {
                    type: "text/css"
                });
                return b(document.getElementsByTagName("head")[0], c), c.sheet || c.styleSheet
            }(),
            n = {
                lines: 12,
                length: 7,
                width: 5,
                radius: 10,
                rotate: 0,
                corners: 1,
                color: "#000",
                direction: 1,
                speed: 1,
                trail: 100,
                opacity: .25,
                fps: 20,
                zIndex: 2e9,
                className: "spinner",
                top: "50%",
                left: "50%",
                position: "absolute"
            };
        h.defaults = {}, f(h.prototype, {
            spin: function (b) {
                this.stop();
                var c = this,
                    d = c.opts,
                    f = c.el = e(a(0, {
                        className: d.className
                    }), {
                        position: d.position,
                        width: 0,
                        zIndex: d.zIndex
                    });
                if (e(f, {
                    left: d.left,
                    top: d.top
                }), b && b.insertBefore(f, b.firstChild || null), f.setAttribute("role", "progressbar"), c.lines(f, c.opts), !j) {
                    var g, h = 0,
                        i = (d.lines - 1) * (1 - d.direction) / 2,
                        k = d.fps,
                        l = k / d.speed,
                        m = (1 - d.opacity) / (l * d.trail / 100),
                        n = l / d.lines;
                    ! function o() {
                        h++;
                        for (var a = 0; a < d.lines; a++) g = Math.max(1 - (h + (d.lines - a) * n) % l * m, d.opacity), c.opacity(f, a * d.direction + i, g, d);
                        c.timeout = c.el && setTimeout(o, ~~(1e3 / k))
                    }()
                }
                return c
            },
            stop: function () {
                var a = this.el;
                return a && (clearTimeout(this.timeout), a.parentNode && a.parentNode.removeChild(a), this.el = void 0), this
            },
            lines: function (d, f) {
                function h(b, c) {
                    return e(a(), {
                        position: "absolute",
                        width: f.length + f.width + "px",
                        height: f.width + "px",
                        background: b,
                        boxShadow: c,
                        transformOrigin: "left",
                        transform: "rotate(" + ~~(360 / f.lines * k + f.rotate) + "deg) translate(" + f.radius + "px,0)",
                        borderRadius: (f.corners * f.width >> 1) + "px"
                    })
                }
                for (var i, k = 0, l = (f.lines - 1) * (1 - f.direction) / 2; k < f.lines; k++) i = e(a(), {
                    position: "absolute",
                    top: 1 + ~(f.width / 2) + "px",
                    transform: f.hwaccel ? "translate3d(0,0,0)" : "",
                    opacity: f.opacity,
                    animation: j && c(f.opacity, f.trail, l + k * f.direction, f.lines) + " " + 1 / f.speed + "s linear infinite"
                }), f.shadow && b(i, e(h("#000", "0 0 4px #000"), {
                    top: "2px"
                })), b(d, b(i, h(g(f.color, k), "0 0 1px rgba(0,0,0,.1)")));
                return d
            },
            opacity: function (a, b, c) {
                b < a.childNodes.length && (a.childNodes[b].style.opacity = c)
            }
        });
        var o = e(a("group"), {
            behavior: "url(#default#VML)"
        });
        return !d(o, "transform") && o.adj ? i() : j = d(o, "animation"), h
    }),
    function (a) {
        "use strict";

        function b(a, b) {
            return a.module("angularSpinner", []).provider("usSpinnerConfig", function () {
                var a = {};
                return {
                    setDefaults: function (b) {
                        a = b || a
                    },
                    $get: function () {
                        return {
                            config: a
                        }
                    }
                }
            }).factory("usSpinnerService", ["$rootScope", function (a) {
                var b = {};
                return b.spin = function (b) {
                    a.$broadcast("us-spinner:spin", b)
                }, b.stop = function (b) {
                    a.$broadcast("us-spinner:stop", b)
                }, b
            }]).directive("usSpinner", ["$window", "usSpinnerConfig", function (c, d) {
                return {
                    scope: !0,
                    link: function (e, f, g) {
                        function h() {
                            e.spinner && e.spinner.stop()
                        }
                        var i = b || c.Spinner;
                        e.spinner = null, e.key = a.isDefined(g.spinnerKey) ? g.spinnerKey : !1, e.startActive = a.isDefined(g.spinnerStartActive) ? e.$eval(g.spinnerStartActive) : e.key ? !1 : !0, e.spin = function () {
                            e.spinner && e.spinner.spin(f[0])
                        }, e.stop = function () {
                            e.startActive = !1, h()
                        }, e.$watch(g.usSpinner, function (a) {
                            h(), a = a || {};
                            for (var b in d.config) void 0 === a[b] && (a[b] = d.config[b]);
                            e.spinner = new i(a), (!e.key || e.startActive) && e.spinner.spin(f[0])
                        }, !0), e.$on("us-spinner:spin", function (a, b) {
                            b === e.key && e.spin()
                        }), e.$on("us-spinner:stop", function (a, b) {
                            b === e.key && e.stop()
                        }), e.$on("$destroy", function () {
                            e.stop(), e.spinner = null
                        })
                    }
                }
            }])
        }
        "function" == typeof define && define.amd ? define(["angular", "spin"], b) : b(a.angular)
    }(window),
    function (a, b) {
        "object" == typeof exports ? module.exports = b(require("spin.js")) : "function" == typeof define && define.amd ? define(["spin"], b) : a.Ladda = b(a.Spinner)
    }(this, function (a) {
        "use strict";

        function b(a) {
            if (void 0 === a) return void console.warn("Ladda button target must be defined.");
            a.querySelector(".ladda-label") || (a.innerHTML = '<span class="ladda-label">' + a.innerHTML + "</span>");
            var b, c = a.querySelector(".ladda-spinner");
            c || (c = document.createElement("span"), c.className = "ladda-spinner"), a.appendChild(c);
            var d, e = {
                start: function () {
                    return b || (b = g(a)), a.setAttribute("disabled", ""), a.setAttribute("data-loading", ""), clearTimeout(d), b.spin(c), this.setProgress(0), this
                },
                startAfter: function (a) {
                    return clearTimeout(d), d = setTimeout(function () {
                        e.start()
                    }, a), this
                },
                stop: function () {
                    return a.removeAttribute("disabled"), a.removeAttribute("data-loading"), clearTimeout(d), b && (d = setTimeout(function () {
                        b.stop()
                    }, 1e3)), this
                },
                toggle: function () {
                    return this.isLoading() ? this.stop() : this.start(), this
                },
                setProgress: function (b) {
                    b = Math.max(Math.min(b, 1), 0);
                    var c = a.querySelector(".ladda-progress");
                    0 === b && c && c.parentNode ? c.parentNode.removeChild(c) : (c || (c = document.createElement("div"), c.className = "ladda-progress", a.appendChild(c)), c.style.width = (b || 0) * a.offsetWidth + "px")
                },
                enable: function () {
                    return this.stop(), this
                },
                disable: function () {
                    return this.stop(), a.setAttribute("disabled", ""), this
                },
                isLoading: function () {
                    return a.hasAttribute("data-loading")
                },
                remove: function () {
                    clearTimeout(d), a.removeAttribute("disabled", ""), a.removeAttribute("data-loading", ""), b && (b.stop(), b = null);
                    for (var c = 0, f = i.length; f > c; c++)
                        if (e === i[c]) {
                            i.splice(c, 1);
                            break
                        }
                }
            };
            return i.push(e), e
        }

        function c(a, b) {
            for (; a.parentNode && a.tagName !== b;) a = a.parentNode;
            return b === a.tagName ? a : void 0
        }

        function d(a) {
            for (var b = ["input", "textarea", "select"], c = [], d = 0; b.length > d; d++)
                for (var e = a.getElementsByTagName(b[d]), f = 0; e.length > f; f++) e[f].hasAttribute("required") && c.push(e[f]);
            return c
        }

        function e(a, e) {
            e = e || {};
            var f = [];
            "string" == typeof a ? f = h(document.querySelectorAll(a)) : "object" == typeof a && "string" == typeof a.nodeName && (f = [a]);
            for (var g = 0, i = f.length; i > g; g++)(function () {
                var a = f[g];
                if ("function" == typeof a.addEventListener) {
                    var h = b(a),
                        i = -1;
                    a.addEventListener("click", function () {
                        var b = !0,
                            f = c(a, "FORM");
                        if (void 0 !== f)
                            for (var g = d(f), j = 0; g.length > j; j++) "" === g[j].value.replace(/^\s+|\s+$/g, "") && (b = !1), "checkbox" !== g[j].type && "radio" !== g[j].type || g[j].checked || (b = !1), "email" === g[j].type && (b = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(g[j].value));
                        b && (h.startAfter(1), "number" == typeof e.timeout && (clearTimeout(i), i = setTimeout(h.stop, e.timeout)), "function" == typeof e.callback && e.callback.apply(null, [h]))
                    }, !1)
                }
            })()
        }

        function f() {
            for (var a = 0, b = i.length; b > a; a++) i[a].stop()
        }

        function g(b) {
            var c, d = b.offsetHeight;
            0 === d && (d = parseFloat(window.getComputedStyle(b).height)), d > 32 && (d *= .8), b.hasAttribute("data-spinner-size") && (d = parseInt(b.getAttribute("data-spinner-size"), 10)), b.hasAttribute("data-spinner-color") && (c = b.getAttribute("data-spinner-color"));
            var e = 12,
                f = .2 * d,
                g = .6 * f,
                h = 7 > f ? 2 : 3;
            return new a({
                color: c || "#fff",
                lines: e,
                radius: f,
                length: g,
                width: h,
                zIndex: "auto",
                top: "auto",
                left: "auto",
                className: ""
            })
        }

        function h(a) {
            for (var b = [], c = 0; a.length > c; c++) b.push(a[c]);
            return b
        }
        var i = [];
        return {
            bind: e,
            create: b,
            stopAll: f
        }
    }), ! function (a, b) {
        "use strict";
        var c;
        if ("object" == typeof exports) {
            try {
                c = require("ladda")
            } catch (d) { }
            module.exports = b(c)
        } else "function" == typeof define && define.amd ? define(function (a) {
            var d = "ladda";
            try {
                c = a(d)
            } catch (e) { }
            return b(c)
        }) : a.Ladda = b(a.Ladda)
    }(this, function (a) {
        "use strict";
        angular.module("angular-ladda", []).provider("ladda", function () {
            var a = {
                style: "zoom-in"
            };
            return {
                setOption: function (b) {
                    angular.extend(a, b)
                },
                $get: function () {
                    return a
                }
            }
        }).directive("ladda", ["ladda", function (b) {
            return {
                restrict: "A",
                priority: -1,
                link: function (c, d, e) {
                    if (d.addClass("ladda-button"), angular.isUndefined(d.attr("data-style")) && d.attr("data-style", b.style || "zoom-in"), !d[0].querySelector(".ladda-label")) {
                        var f = document.createElement("span");
                        f.className = "ladda-label", angular.element(f).append(d.contents()), d.append(f)
                    }
                    var g = a.create(d[0]);
                    c.$watch(e.ladda, function (a) {
                        a || angular.isNumber(a) ? (g.isLoading() || g.start(), angular.isNumber(a) && g.setProgress(a)) : (g.stop(), e.ngDisabled && d.attr("disabled", c.$eval(e.ngDisabled)))
                    })
                }
            }
        }])
    }), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function (a, b, c, d, e) {
            return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
        },
        easeInQuad: function (a, b, c, d, e) {
            return d * (b /= e) * b + c
        },
        easeOutQuad: function (a, b, c, d, e) {
            return -d * (b /= e) * (b - 2) + c
        },
        easeInOutQuad: function (a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
        },
        easeInCubic: function (a, b, c, d, e) {
            return d * (b /= e) * b * b + c
        },
        easeOutCubic: function (a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b + 1) + c
        },
        easeInOutCubic: function (a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
        },
        easeInQuart: function (a, b, c, d, e) {
            return d * (b /= e) * b * b * b + c
        },
        easeOutQuart: function (a, b, c, d, e) {
            return -d * ((b = b / e - 1) * b * b * b - 1) + c
        },
        easeInOutQuart: function (a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
        },
        easeInQuint: function (a, b, c, d, e) {
            return d * (b /= e) * b * b * b * b + c
        },
        easeOutQuint: function (a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b * b * b + 1) + c
        },
        easeInOutQuint: function (a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
        },
        easeInSine: function (a, b, c, d, e) {
            return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
        },
        easeOutSine: function (a, b, c, d, e) {
            return d * Math.sin(b / e * (Math.PI / 2)) + c
        },
        easeInOutSine: function (a, b, c, d, e) {
            return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
        },
        easeInExpo: function (a, b, c, d, e) {
            return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
        },
        easeOutExpo: function (a, b, c, d, e) {
            return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
        },
        easeInOutExpo: function (a, b, c, d, e) {
            return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
        },
        easeInCirc: function (a, b, c, d, e) {
            return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
        },
        easeOutCirc: function (a, b, c, d, e) {
            return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
        },
        easeInOutCirc: function (a, b, c, d, e) {
            return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
        },
        easeInElastic: function (a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if (g || (g = .3 * e), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g)) + c
        },
        easeOutElastic: function (a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if (g || (g = .3 * e), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return h * Math.pow(2, -10 * b) * Math.sin(2 * (b * e - f) * Math.PI / g) + d + c
        },
        easeInOutElastic: function (a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (2 == (b /= e / 2)) return c + d;
            if (g || (g = .3 * e * 1.5), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return 1 > b ? -.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) * .5 + d + c
        },
        easeInBack: function (a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
        },
        easeOutBack: function (a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
        },
        easeInOutBack: function (a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
        },
        easeInBounce: function (a, b, c, d, e) {
            return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
        },
        easeOutBounce: function (a, b, c, d, e) {
            return (b /= e) < 1 / 2.75 ? 7.5625 * d * b * b + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
        },
        easeInOutBounce: function (a, b, c, d, e) {
            return e / 2 > b ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
        }
    }),
    function () {
        var a, b, c, d, e, f = {}.hasOwnProperty,
            g = function (a, b) {
                function c() {
                    this.constructor = a
                }
                for (var d in b) f.call(b, d) && (a[d] = b[d]);
                return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
            };
        d = function () {
            function a() {
                this.options_index = 0, this.parsed = []
            }
            return a.prototype.add_node = function (a) {
                return "OPTGROUP" === a.nodeName.toUpperCase() ? this.add_group(a) : this.add_option(a)
            }, a.prototype.add_group = function (a) {
                var b, c, d, e, f, g;
                for (b = this.parsed.length, this.parsed.push({
                    array_index: b,
                    group: !0,
                    label: this.escapeExpression(a.label),
                    title: a.title ? a.title : void 0,
                    children: 0,
                    disabled: a.disabled,
                    classes: a.className
                }), f = a.childNodes, g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push(this.add_option(c, b, a.disabled));
                return g
            }, a.prototype.add_option = function (a, b, c) {
                return "OPTION" === a.nodeName.toUpperCase() ? ("" !== a.text ? (null != b && (this.parsed[b].children += 1), this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    value: a.value,
                    text: a.text,
                    html: a.innerHTML,
                    title: a.title ? a.title : void 0,
                    selected: a.selected,
                    disabled: c === !0 ? c : a.disabled,
                    group_array_index: b,
                    group_label: null != b ? this.parsed[b].label : null,
                    classes: a.className,
                    style: a.style.cssText
                })) : this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    empty: !0
                }), this.options_index += 1) : void 0
            }, a.prototype.escapeExpression = function (a) {
                var b, c;
                return null == a || a === !1 ? "" : /[\&\<\>\"\'\`]/.test(a) ? (b = {
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                }, c = /&(?!\w+;)|[\<\>\"\'\`]/g, a.replace(c, function (a) {
                    return b[a] || "&amp;"
                })) : a
            }, a
        }(), d.select_to_array = function (a) {
            var b, c, e, f, g;
            for (c = new d, g = a.childNodes, e = 0, f = g.length; f > e; e++) b = g[e], c.add_node(b);
            return c.parsed
        }, b = function () {
            function a(b, c) {
                this.form_field = b, this.options = null != c ? c : {}, a.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), this.on_ready())
            }
            return a.prototype.set_default_values = function () {
                var a = this;
                return this.click_test_action = function (b) {
                    return a.test_active_click(b)
                }, this.activate_action = function (b) {
                    return a.activate_field(b)
                }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null != this.options.enable_split_word_search ? this.options.enable_split_word_search : !0, this.group_search = null != this.options.group_search ? this.options.group_search : !0, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null != this.options.single_backstroke_delete ? this.options.single_backstroke_delete : !0, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null != this.options.display_selected_options ? this.options.display_selected_options : !0, this.display_disabled_options = null != this.options.display_disabled_options ? this.options.display_disabled_options : !0, this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1
            }, a.prototype.set_default_text = function () {
                return this.default_text = this.form_field.getAttribute("data-placeholder") ? this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.options.placeholder_text_multiple || this.options.placeholder_text || a.default_multiple_text : this.options.placeholder_text_single || this.options.placeholder_text || a.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || a.default_no_result_text
            }, a.prototype.choice_label = function (a) {
                return this.include_group_label_in_selected && null != a.group_label ? "<b class='group-name'>" + a.group_label + "</b>" + a.html : a.html
            }, a.prototype.mouse_enter = function () {
                return this.mouse_on_container = !0
            }, a.prototype.mouse_leave = function () {
                return this.mouse_on_container = !1
            }, a.prototype.input_focus = function () {
                var a = this;
                if (this.is_multiple) {
                    if (!this.active_field) return setTimeout(function () {
                        return a.container_mousedown()
                    }, 50)
                } else if (!this.active_field) return this.activate_field()
            }, a.prototype.input_blur = function () {
                var a = this;
                return this.mouse_on_container ? void 0 : (this.active_field = !1, setTimeout(function () {
                    return a.blur_test()
                }, 100))
            }, a.prototype.results_option_build = function (a) {
                var b, c, d, e, f;
                for (b = "", f = this.results_data, d = 0, e = f.length; e > d; d++) c = f[d], b += c.group ? this.result_add_group(c) : this.result_add_option(c), (null != a ? a.first : void 0) && (c.selected && this.is_multiple ? this.choice_build(c) : c.selected && !this.is_multiple && this.single_set_selected_text(this.choice_label(c)));
                return b
            }, a.prototype.result_add_option = function (a) {
                var b, c;
                return a.search_match && this.include_option_in_results(a) ? (b = [], a.disabled || a.selected && this.is_multiple || b.push("active-result"), !a.disabled || a.selected && this.is_multiple || b.push("disabled-result"), a.selected && b.push("result-selected"), null != a.group_array_index && b.push("group-option"), "" !== a.classes && b.push(a.classes), c = document.createElement("li"), c.className = b.join(" "), c.style.cssText = a.style, c.setAttribute("data-option-array-index", a.array_index), c.innerHTML = a.search_text, a.title && (c.title = a.title), this.outerHTML(c)) : ""
            }, a.prototype.result_add_group = function (a) {
                var b, c;
                return (a.search_match || a.group_match) && a.active_options > 0 ? (b = [], b.push("group-result"), a.classes && b.push(a.classes), c = document.createElement("li"), c.className = b.join(" "), c.innerHTML = a.search_text, a.title && (c.title = a.title), this.outerHTML(c)) : ""
            }, a.prototype.results_update_field = function () {
                return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing ? this.winnow_results() : void 0
            }, a.prototype.reset_single_select_options = function () {
                var a, b, c, d, e;
                for (d = this.results_data, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.selected ? a.selected = !1 : void 0);
                return e
            }, a.prototype.results_toggle = function () {
                return this.results_showing ? this.results_hide() : this.results_show()
            }, a.prototype.results_search = function () {
                return this.results_showing ? this.winnow_results() : this.results_show()
            }, a.prototype.winnow_results = function () {
                var a, b, c, d, e, f, g, h, i, j, k, l;
                for (this.no_results_clear(), d = 0, f = this.get_search_text(), a = f.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), i = new RegExp(a, "i"), c = this.get_search_regex(a), l = this.results_data, j = 0, k = l.length; k > j; j++) b = l[j], b.search_match = !1, e = null, this.include_option_in_results(b) && (b.group && (b.group_match = !1, b.active_options = 0), null != b.group_array_index && this.results_data[b.group_array_index] && (e = this.results_data[b.group_array_index], 0 === e.active_options && e.search_match && (d += 1), e.active_options += 1), b.search_text = b.group ? b.label : b.html, (!b.group || this.group_search) && (b.search_match = this.search_string_match(b.search_text, c), b.search_match && !b.group && (d += 1), b.search_match ? (f.length && (g = b.search_text.search(i), h = b.search_text.substr(0, g + f.length) + "</em>" + b.search_text.substr(g + f.length), b.search_text = h.substr(0, g) + "<em>" + h.substr(g)), null != e && (e.group_match = !0)) : null != b.group_array_index && this.results_data[b.group_array_index].search_match && (b.search_match = !0)));
                return this.result_clear_highlight(), 1 > d && f.length ? (this.update_results_content(""), this.no_results(f)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
            }, a.prototype.get_search_regex = function (a) {
                var b;
                return b = this.search_contains ? "" : "^", new RegExp(b + a, "i")
            }, a.prototype.search_string_match = function (a, b) {
                var c, d, e, f;
                if (b.test(a)) return !0;
                if (this.enable_split_word_search && (a.indexOf(" ") >= 0 || 0 === a.indexOf("[")) && (d = a.replace(/\[|\]/g, "").split(" "), d.length))
                    for (e = 0, f = d.length; f > e; e++)
                        if (c = d[e], b.test(c)) return !0
            }, a.prototype.choices_count = function () {
                var a, b, c, d;
                if (null != this.selected_option_count) return this.selected_option_count;
                for (this.selected_option_count = 0, d = this.form_field.options, b = 0, c = d.length; c > b; b++) a = d[b], a.selected && (this.selected_option_count += 1);
                return this.selected_option_count
            }, a.prototype.choices_click = function (a) {
                return a.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show()
            }, a.prototype.keyup_checker = function (a) {
                var b, c;
                switch (b = null != (c = a.which) ? c : a.keyCode, this.search_field_scale(), b) {
                    case 8:
                        if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) return this.keydown_backstroke();
                        if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
                        break;
                    case 13:
                        if (a.preventDefault(), this.results_showing) return this.result_select(a);
                        break;
                    case 27:
                        return this.results_showing && this.results_hide(), !0;
                    case 9:
                    case 38:
                    case 40:
                    case 16:
                    case 91:
                    case 17:
                        break;
                    default:
                        return this.results_search()
                }
            }, a.prototype.clipboard_event_checker = function () {
                var a = this;
                return setTimeout(function () {
                    return a.results_search()
                }, 50)
            }, a.prototype.container_width = function () {
                return null != this.options.width ? this.options.width : "" + this.form_field.offsetWidth + "px"
            }, a.prototype.include_option_in_results = function (a) {
                return this.is_multiple && !this.display_selected_options && a.selected ? !1 : !this.display_disabled_options && a.disabled ? !1 : a.empty ? !1 : !0
            }, a.prototype.search_results_touchstart = function (a) {
                return this.touch_started = !0, this.search_results_mouseover(a)
            }, a.prototype.search_results_touchmove = function (a) {
                return this.touch_started = !1, this.search_results_mouseout(a)
            }, a.prototype.search_results_touchend = function (a) {
                return this.touch_started ? this.search_results_mouseup(a) : void 0
            }, a.prototype.outerHTML = function (a) {
                var b;
                return a.outerHTML ? a.outerHTML : (b = document.createElement("div"), b.appendChild(a), b.innerHTML)
            }, a.browser_is_supported = function () {
                return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : /iP(od|hone)/i.test(window.navigator.userAgent) ? !1 : /Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent) ? !1 : !0
            }, a.default_multiple_text = "Select Some Options", a.default_single_text = "Select an Option", a.default_no_result_text = "No results match", a
        }(), a = jQuery, a.fn.extend({
            chosen: function (d) {
                return b.browser_is_supported() ? this.each(function () {
                    var b, e;
                    b = a(this), e = b.data("chosen"), "destroy" === d && e instanceof c ? e.destroy() : e instanceof c || b.data("chosen", new c(this, d))
                }) : this
            }
        }), c = function (b) {
            function c() {
                return e = c.__super__.constructor.apply(this, arguments)
            }
            return g(c, b), c.prototype.setup = function () {
                return this.form_field_jq = a(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
            }, c.prototype.set_up_html = function () {
                var b, c;
                return b = ["chosen-container"], b.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && b.push(this.form_field.className), this.is_rtl && b.push("chosen-rtl"), c = {
                    "class": b.join(" "),
                    style: "width: " + this.container_width() + ";",
                    title: this.form_field.title
                }, this.form_field.id.length && (c.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = a("<div />", c), this.container.html(this.is_multiple ? '<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>' : '<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior()
            }, c.prototype.on_ready = function () {
                return this.form_field_jq.trigger("chosen:ready", {
                    chosen: this
                })
            }, c.prototype.register_observers = function () {
                var a = this;
                return this.container.bind("touchstart.chosen", function (b) {
                    return a.container_mousedown(b), b.preventDefault()
                }), this.container.bind("touchend.chosen", function (b) {
                    return a.container_mouseup(b), b.preventDefault()
                }), this.container.bind("mousedown.chosen", function (b) {
                    a.container_mousedown(b)
                }), this.container.bind("mouseup.chosen", function (b) {
                    a.container_mouseup(b)
                }), this.container.bind("mouseenter.chosen", function (b) {
                    a.mouse_enter(b)
                }), this.container.bind("mouseleave.chosen", function (b) {
                    a.mouse_leave(b)
                }), this.search_results.bind("mouseup.chosen", function (b) {
                    a.search_results_mouseup(b)
                }), this.search_results.bind("mouseover.chosen", function (b) {
                    a.search_results_mouseover(b)
                }), this.search_results.bind("mouseout.chosen", function (b) {
                    a.search_results_mouseout(b)
                }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function (b) {
                    a.search_results_mousewheel(b)
                }), this.search_results.bind("touchstart.chosen", function (b) {
                    a.search_results_touchstart(b)
                }), this.search_results.bind("touchmove.chosen", function (b) {
                    a.search_results_touchmove(b)
                }), this.search_results.bind("touchend.chosen", function (b) {
                    a.search_results_touchend(b)
                }), this.form_field_jq.bind("chosen:updated.chosen", function (b) {
                    a.results_update_field(b)
                }), this.form_field_jq.bind("chosen:activate.chosen", function (b) {
                    a.activate_field(b)
                }), this.form_field_jq.bind("chosen:open.chosen", function (b) {
                    a.container_mousedown(b)
                }), this.form_field_jq.bind("chosen:close.chosen", function (b) {
                    a.input_blur(b)
                }), this.search_field.bind("blur.chosen", function (b) {
                    a.input_blur(b)
                }), this.search_field.bind("keyup.chosen", function (b) {
                    a.keyup_checker(b)
                }), this.search_field.bind("keydown.chosen", function (b) {
                    a.keydown_checker(b)
                }), this.search_field.bind("focus.chosen", function (b) {
                    a.input_focus(b)
                }), this.search_field.bind("cut.chosen", function (b) {
                    a.clipboard_event_checker(b)
                }), this.search_field.bind("paste.chosen", function (b) {
                    a.clipboard_event_checker(b)
                }), this.is_multiple ? this.search_choices.bind("click.chosen", function (b) {
                    a.choices_click(b)
                }) : this.container.bind("click.chosen", function (a) {
                    a.preventDefault()
                })
            }, c.prototype.destroy = function () {
                return a(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
            }, c.prototype.search_field_disabled = function () {
                return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
            }, c.prototype.container_mousedown = function (b) {
                return this.is_disabled || (b && "mousedown" === b.type && !this.results_showing && b.preventDefault(), null != b && a(b.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ? this.is_multiple || !b || a(b.target)[0] !== this.selected_item[0] && !a(b.target).parents("a.chosen-single").length || (b.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), a(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
            }, c.prototype.container_mouseup = function (a) {
                return "ABBR" !== a.target.nodeName || this.is_disabled ? void 0 : this.results_reset(a)
            }, c.prototype.search_results_mousewheel = function (a) {
                var b;
                return a.originalEvent && (b = a.originalEvent.deltaY || -a.originalEvent.wheelDelta || a.originalEvent.detail), null != b ? (a.preventDefault(), "DOMMouseScroll" === a.type && (b = 40 * b), this.search_results.scrollTop(b + this.search_results.scrollTop())) : void 0
            }, c.prototype.blur_test = function () {
                return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0
            }, c.prototype.close_field = function () {
                return a(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
            }, c.prototype.activate_field = function () {
                return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
            }, c.prototype.test_active_click = function (b) {
                var c;
                return c = a(b.target).closest(".chosen-container"), c.length && this.container[0] === c[0] ? this.active_field = !0 : this.close_field()
            }, c.prototype.results_build = function () {
                return this.parsing = !0, this.selected_option_count = null, this.results_data = d.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
                    first: !0
                })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
            }, c.prototype.result_do_highlight = function (a) {
                var b, c, d, e, f;
                if (a.length) {
                    if (this.result_clear_highlight(), this.result_highlight = a, this.result_highlight.addClass("highlighted"), d = parseInt(this.search_results.css("maxHeight"), 10), f = this.search_results.scrollTop(), e = d + f, c = this.result_highlight.position().top + this.search_results.scrollTop(), b = c + this.result_highlight.outerHeight(), b >= e) return this.search_results.scrollTop(b - d > 0 ? b - d : 0);
                    if (f > c) return this.search_results.scrollTop(c)
                }
            }, c.prototype.result_clear_highlight = function () {
                return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
            }, c.prototype.results_show = function () {
                return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
                    chosen: this
                }))
            }, c.prototype.update_results_content = function (a) {
                return this.search_results.html(a)
            }, c.prototype.results_hide = function () {
                return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
                    chosen: this
                })), this.results_showing = !1
            }, c.prototype.set_tab_index = function () {
                var a;
                return this.form_field.tabIndex ? (a = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = a) : void 0
            }, c.prototype.set_label_behavior = function () {
                var b = this;
                return this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = a("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0 ? this.form_field_label.bind("click.chosen", function (a) {
                    return b.is_multiple ? b.container_mousedown(a) : b.activate_field()
                }) : void 0
            }, c.prototype.show_search_field_default = function () {
                return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
            }, c.prototype.search_results_mouseup = function (b) {
                var c;
                return c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first(), c.length ? (this.result_highlight = c, this.result_select(b), this.search_field.focus()) : void 0
            }, c.prototype.search_results_mouseover = function (b) {
                var c;
                return c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first(), c ? this.result_do_highlight(c) : void 0
            }, c.prototype.search_results_mouseout = function (b) {
                return a(b.target).hasClass("active-result") ? this.result_clear_highlight() : void 0
            }, c.prototype.choice_build = function (b) {
                var c, d, e = this;
                return c = a("<li />", {
                    "class": "search-choice"
                }).html("<span>" + this.choice_label(b) + "</span>"), b.disabled ? c.addClass("search-choice-disabled") : (d = a("<a />", {
                    "class": "search-choice-close",
                    "data-option-array-index": b.array_index
                }), d.bind("click.chosen", function (a) {
                    return e.choice_destroy_link_click(a)
                }), c.append(d)), this.search_container.before(c)
            }, c.prototype.choice_destroy_link_click = function (b) {
                return b.preventDefault(), b.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(a(b.target))
            }, c.prototype.choice_destroy = function (a) {
                return this.result_deselect(a[0].getAttribute("data-option-array-index")) ? (this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), a.parents("li").first().remove(), this.search_field_scale()) : void 0
            }, c.prototype.results_reset = function () {
                return this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field ? this.results_hide() : void 0
            }, c.prototype.results_reset_cleanup = function () {
                return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
            }, c.prototype.result_select = function (a) {
                var b, c;
                return this.result_highlight ? (b = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                }), !1) : (this.is_multiple ? b.removeClass("active-result") : this.reset_single_select_options(), b.addClass("result-selected"), c = this.results_data[b[0].getAttribute("data-option-array-index")], c.selected = !0, this.form_field.options[c.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(c) : this.single_set_selected_text(this.choice_label(c)), (a.metaKey || a.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
                    selected: this.form_field.options[c.options_index].value
                }), this.current_selectedIndex = this.form_field.selectedIndex, a.preventDefault(), this.search_field_scale())) : void 0
            }, c.prototype.single_set_selected_text = function (a) {
                return null == a && (a = this.default_text), a === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").html(a)
            }, c.prototype.result_deselect = function (a) {
                var b;
                return b = this.results_data[a], this.form_field.options[b.options_index].disabled ? !1 : (b.selected = !1, this.form_field.options[b.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
                    deselected: this.form_field.options[b.options_index].value
                }), this.search_field_scale(), !0)
            }, c.prototype.single_deselect_control_build = function () {
                return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")) : void 0
            }, c.prototype.get_search_text = function () {
                return a("<div/>").text(a.trim(this.search_field.val())).html()
            }, c.prototype.winnow_results_set_highlight = function () {
                var a, b;
                return b = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), a = b.length ? b.first() : this.search_results.find(".active-result").first(), null != a ? this.result_do_highlight(a) : void 0
            }, c.prototype.no_results = function (b) {
                var c;
                return c = a('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), c.find("span").first().html(b), this.search_results.append(c), this.form_field_jq.trigger("chosen:no_results", {
                    chosen: this
                })
            }, c.prototype.no_results_clear = function () {
                return this.search_results.find(".no-results").remove()
            }, c.prototype.keydown_arrow = function () {
                var a;
                return this.results_showing && this.result_highlight ? (a = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(a) : void 0 : this.results_show()
            }, c.prototype.keyup_arrow = function () {
                var a;
                return this.results_showing || this.is_multiple ? this.result_highlight ? (a = this.result_highlight.prevAll("li.active-result"), a.length ? this.result_do_highlight(a.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
            }, c.prototype.keydown_backstroke = function () {
                var a;
                return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (a = this.search_container.siblings("li.search-choice").last(), a.length && !a.hasClass("search-choice-disabled") ? (this.pending_backstroke = a, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
            }, c.prototype.clear_backstroke = function () {
                return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
            }, c.prototype.keydown_checker = function (a) {
                var b, c;
                switch (b = null != (c = a.which) ? c : a.keyCode, this.search_field_scale(), 8 !== b && this.pending_backstroke && this.clear_backstroke(), b) {
                    case 8:
                        this.backstroke_length = this.search_field.val().length;
                        break;
                    case 9:
                        this.results_showing && !this.is_multiple && this.result_select(a), this.mouse_on_container = !1;
                        break;
                    case 13:
                        this.results_showing && a.preventDefault();
                        break;
                    case 32:
                        this.disable_search && a.preventDefault();
                        break;
                    case 38:
                        a.preventDefault(), this.keyup_arrow();
                        break;
                    case 40:
                        a.preventDefault(), this.keydown_arrow()
                }
            }, c.prototype.search_field_scale = function () {
                var b, c, d, e, f, g, h, i, j;
                if (this.is_multiple) {
                    for (d = 0, h = 0, f = "position:absolute; left: -1000px; top: -1000px; display:none;", g = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"],
                        i = 0, j = g.length; j > i; i++) e = g[i], f += e + ":" + this.search_field.css(e) + ";";
                    return b = a("<div />", {
                        style: f
                    }), b.text(this.search_field.val()), a("body").append(b), h = b.width() + 25, b.remove(), c = this.container.outerWidth(), h > c - 10 && (h = c - 10), this.search_field.css({
                        width: h + "px"
                    })
                }
            }, c
        }(b)
    }.call(this),
    function () {
        function a(a, b) {
            window.XMLHttpRequest.prototype[a] = b(window.XMLHttpRequest.prototype[a])
        }

        function b(a, b, c, d, g, h, i) {
            function j() {
                return "input" === b[0].tagName.toLowerCase() && b.attr("type") && "file" === b.attr("type").toLowerCase()
            }

            function k(b) {
                if (!p) {
                    p = !0;
                    try {
                        for (var i = b.__files_ || b.target && b.target.files, j = [], k = [], l = 0; l < i.length; l++) {
                            var m = i.item(l);
                            f(a, g, c, m, b) ? j.push(m) : k.push(m)
                        }
                        e(g, h, a, d, c, c.ngfChange || c.ngfSelect, j, k, b), 0 == j.length && (b.target.value = j)
                    } finally {
                        p = !1
                    }
                }
            }

            function l(d) {
                c.ngfMultiple && d.attr("multiple", g(c.ngfMultiple)(a)), g(c.ngfMultiple)(a) || d.attr("multiple", void 0), c.accept && d.attr("accept", c.accept), c.ngfCapture && d.attr("capture", g(c.ngfCapture)(a)), c.ngfDisabled && d.attr("disabled", g(c.ngfDisabled)(a));
                for (var e = j(), f = 0; f < b[0].attributes.length; f++) {
                    var h = b[0].attributes[f];
                    (e || "type" !== h.name && "class" !== h.name && "id" !== h.name && "style" !== h.name) && d.attr(h.name, h.value)
                }
            }

            function m(a) {
                if (!b.attr("disabled")) {
                    var c = angular.element('<input type="file">');
                    return l(c), j() ? (b.replaceWith(c), b = c) : (c.css("display", "none").attr("tabindex", "-1").attr("__ngf_gen__", !0), b.__ngf_ref_elem__ && b.__ngf_ref_elem__.remove(), b.__ngf_ref_elem__ = c, document.body.appendChild(c[0])), c
                }
            }

            function n(b) {
                e(g, h, a, d, c, c.ngfChange || c.ngfSelect, [], [], b, !0)
            }

            function o(a) {
                function c() {
                    d[0].click(), j() && (b.bind("click touchend", o), a.preventDefault())
                }
                a.preventDefault();
                var d = m(a);
                d && (d.bind("change", k), n(a), navigator.userAgent.toLowerCase().match(/android/) ? setTimeout(function () {
                    c()
                }, 0) : c())
            }
            var p = !1;
            window.FileAPI && window.FileAPI.ngfFixIE ? window.FileAPI.ngfFixIE(b, m, l, k, n) : b.bind("click touchend", o)
        }

        function c(a, b, c, g, h, i, j) {
            function k(a, b, c) {
                var d = !0,
                    e = c.dataTransfer.items;
                if (null != e)
                    for (var g = 0; g < e.length && d; g++) d = d && ("file" == e[g].kind || "" == e[g].kind) && f(a, h, b, e[g], c);
                var i = h(b.ngfDragOverClass)(a, {
                    $event: c
                });
                return i && (i.delay && (q = i.delay), i.accept && (i = d ? i.accept : i.reject)), i || b.ngfDragOverClass || "dragover"
            }

            function l(b, d, e, g) {
                function k(d) {
                    f(a, h, c, d, b) ? m.push(d) : n.push(d)
                }

                function l(a, b, c) {
                    if (null != b)
                        if (b.isDirectory) {
                            var d = (c || "") + b.name;
                            k({
                                name: b.name,
                                type: "directory",
                                path: d
                            });
                            var e = b.createReader(),
                                f = [];
                            p++;
                            var g = function () {
                                e.readEntries(function (d) {
                                    try {
                                        if (d.length) f = f.concat(Array.prototype.slice.call(d || [], 0)), g();
                                        else {
                                            for (var e = 0; e < f.length; e++) l(a, f[e], (c ? c : "") + b.name + "/");
                                            p--
                                        }
                                    } catch (h) {
                                        p-- , console.error(h)
                                    }
                                }, function () {
                                    p--
                                })
                            };
                            g()
                        } else p++ , b.file(function (a) {
                            try {
                                p-- , a.path = (c ? c : "") + a.name, k(a)
                            } catch (b) {
                                p-- , console.error(b)
                            }
                        }, function () {
                            p--
                        })
                }
                var m = [],
                    n = [],
                    o = b.dataTransfer.items,
                    p = 0;
                if (o && o.length > 0 && "file" != j.protocol())
                    for (var q = 0; q < o.length; q++) {
                        if (o[q].webkitGetAsEntry && o[q].webkitGetAsEntry() && o[q].webkitGetAsEntry().isDirectory) {
                            var r = o[q].webkitGetAsEntry();
                            if (r.isDirectory && !e) continue;
                            null != r && l(m, r)
                        } else {
                            var s = o[q].getAsFile();
                            null != s && k(s)
                        }
                        if (!g && m.length > 0) break
                    } else {
                    var t = b.dataTransfer.files;
                    if (null != t)
                        for (var q = 0; q < t.length && (k(t.item(q)), g || !(m.length > 0)); q++);
                }
                var u = 0;
                ! function v(a) {
                    i(function () {
                        if (p) 10 * u++ < 2e4 && v(10);
                        else {
                            if (!g && m.length > 1) {
                                for (q = 0;
                                    "directory" == m[q].type;) q++;
                                m = [m[q]]
                            }
                            d(m, n)
                        }
                    }, a || 0)
                }()
            }
            var m = d();
            if (c.dropAvailable && i(function () {
                a[c.dropAvailable] ? a[c.dropAvailable].value = m : a[c.dropAvailable] = m
            }), !m) return void (1 == h(c.ngfHideOnDropNotAvailable)(a) && b.css("display", "none"));
            var n, o = null,
                p = h(c.ngfStopPropagation),
                q = 1,
                r = (h(c.ngfAccept), h(c.ngfDisabled));
            b[0].addEventListener("dragover", function (d) {
                if (!r(a)) {
                    if (d.preventDefault(), p(a) && d.stopPropagation(), navigator.userAgent.indexOf("Chrome") > -1) {
                        var e = d.dataTransfer.effectAllowed;
                        d.dataTransfer.dropEffect = "move" === e || "linkMove" === e ? "move" : "copy"
                    }
                    i.cancel(o), a.actualDragOverClass || (n = k(a, c, d)), b.addClass(n)
                }
            }, !1), b[0].addEventListener("dragenter", function (b) {
                r(a) || (b.preventDefault(), p(a) && b.stopPropagation())
            }, !1), b[0].addEventListener("dragleave", function () {
                r(a) || (o = i(function () {
                    b.removeClass(n), n = null
                }, q || 1))
            }, !1), b[0].addEventListener("drop", function (d) {
                r(a) || (d.preventDefault(), p(a) && d.stopPropagation(), b.removeClass(n), n = null, l(d, function (b, f) {
                    e(h, i, a, g, c, c.ngfChange || c.ngfDrop, b, f, d)
                }, 0 != h(c.ngfAllowDir)(a), c.multiple || h(c.ngfMultiple)(a)))
            }, !1)
        }

        function d() {
            var a = document.createElement("div");
            return "draggable" in a && "ondrop" in a
        }

        function e(a, b, c, d, e, f, g, h, i, j) {
            function k() {
                d && (a(e.ngModel).assign(c, g), b(function () {
                    d && d.$setViewValue(null != g && 0 == g.length ? null : g)
                })), e.ngModelRejected && a(e.ngModelRejected).assign(c, h), f && a(f)(c, {
                    $files: g,
                    $rejectedFiles: h,
                    $event: i
                })
            }
            j ? k() : b(function () {
                k()
            })
        }

        function f(a, b, c, d, e) {
            var f = b(c.ngfAccept)(a, {
                $file: d,
                $event: e
            }),
                h = b(c.ngfMaxSize)(a, {
                    $file: d,
                    $event: e
                }) || 9007199254740991,
                i = b(c.ngfMinSize)(a, {
                    $file: d,
                    $event: e
                }) || -1;
            if (null != f && angular.isString(f)) {
                var j = new RegExp(g(f), "gi");
                f = null != d.type && j.test(d.type.toLowerCase()) || null != d.name && j.test(d.name.toLowerCase())
            }
            return (null == f || f) && (null == d.size || d.size < h && d.size > i)
        }

        function g(a) {
            if (a.length > 2 && "/" === a[0] && "/" === a[a.length - 1]) return a.substring(1, a.length - 1);
            var b = a.split(","),
                c = "";
            if (b.length > 1)
                for (var d = 0; d < b.length; d++) c += "(" + g(b[d]) + ")", d < b.length - 1 && (c += "|");
            else 0 == a.indexOf(".") && (a = "*" + a), c = "^" + a.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]", "g"), "\\$&") + "$", c = c.replace(/\\\*/g, ".*").replace(/\\\?/g, ".");
            return c
        }
        var h;
        window.XMLHttpRequest && !window.XMLHttpRequest.__isFileAPIShim && a("setRequestHeader", function (a) {
            return function (b, c) {
                if ("__setXHR_" === b) {
                    var d = c(this);
                    d instanceof Function && d(this)
                } else a.apply(this, arguments)
            }
        });
        var i = angular.module("ngFileUpload", []);
        i.version = "4.1.4", i.service("Upload", ["$http", "$q", "$timeout", function (a, b, c) {
            function d(d) {
                d.method = d.method || "POST", d.headers = d.headers || {}, d.transformRequest = d.transformRequest || function (b, c) {
                    return window.ArrayBuffer && b instanceof window.ArrayBuffer ? b : a.defaults.transformRequest[0](b, c)
                };
                var e = b.defer(),
                    f = e.promise;
                return d.headers.__setXHR_ = function () {
                    return function (a) {
                        a && (d.__XHR = a, d.xhrFn && d.xhrFn(a), a.upload.addEventListener("progress", function (a) {
                            a.config = d, e.notify ? e.notify(a) : f.progress_fn && c(function () {
                                f.progress_fn(a)
                            })
                        }, !1), a.upload.addEventListener("load", function (a) {
                            a.lengthComputable && (a.config = d, e.notify ? e.notify(a) : f.progress_fn && c(function () {
                                f.progress_fn(a)
                            }))
                        }, !1))
                    }
                }, a(d).then(function (a) {
                    e.resolve(a)
                }, function (a) {
                    e.reject(a)
                }, function (a) {
                    e.notify(a)
                }), f.success = function (a) {
                    return f.then(function (b) {
                        a(b.data, b.status, b.headers, d)
                    }), f
                }, f.error = function (a) {
                    return f.then(null, function (b) {
                        a(b.data, b.status, b.headers, d)
                    }), f
                }, f.progress = function (a) {
                    return f.progress_fn = a, f.then(null, null, function (b) {
                        a(b)
                    }), f
                }, f.abort = function () {
                    return d.__XHR && c(function () {
                        d.__XHR.abort()
                    }), f
                }, f.xhr = function (a) {
                    return d.xhrFn = function (b) {
                        return function () {
                            b && b.apply(f, arguments), a.apply(f, arguments)
                        }
                    }(d.xhrFn), f
                }, f
            }
            this.upload = function (a) {
                return a.headers = a.headers || {}, a.headers["Content-Type"] = void 0, a.transformRequest = a.transformRequest ? angular.isArray(a.transformRequest) ? a.transformRequest : [a.transformRequest] : [], a.transformRequest.push(function (b) {
                    var c = new FormData,
                        d = {};
                    for (h in a.fields) a.fields.hasOwnProperty(h) && (d[h] = a.fields[h]);
                    if (b && (d.data = b), a.formDataAppender)
                        for (h in d) d.hasOwnProperty(h) && a.formDataAppender(c, h, d[h]);
                    else
                        for (h in d)
                            if (d.hasOwnProperty(h)) {
                                var e = d[h];
                                void 0 !== e && (angular.isDate(e) && (e = e.toISOString()), angular.isString(e) ? c.append(h, e) : a.sendObjectsAsJsonBlob && angular.isObject(e) ? c.append(h, new Blob([e], {
                                    type: "application/json"
                                })) : c.append(h, JSON.stringify(e)))
                            } if (null != a.file) {
                                var f = a.fileFormDataName || "file";
                                if (angular.isArray(a.file))
                                    for (var g = angular.isString(f), i = 0; i < a.file.length; i++) c.append(g ? f : f[i], a.file[i], a.fileName && a.fileName[i] || a.file[i].name);
                                else c.append(f, a.file, a.fileName || a.file.name)
                            }
                    return c
                }), d(a)
            }, this.http = function (a) {
                return d(a)
            }
        }]), i.directive("ngfSelect", ["$parse", "$timeout", "$compile", function (a, c, d) {
            return {
                restrict: "AEC",
                require: "?ngModel",
                link: function (e, f, g, h) {
                    b(e, f, g, h, a, c, d)
                }
            }
        }]), i.directive("ngfDrop", ["$parse", "$timeout", "$location", function (a, b, d) {
            return {
                restrict: "AEC",
                require: "?ngModel",
                link: function (e, f, g, h) {
                    c(e, f, g, h, a, b, d)
                }
            }
        }]), i.directive("ngfNoFileDrop", function () {
            return function (a, b) {
                d() && b.css("display", "none")
            }
        }), i.directive("ngfDropAvailable", ["$parse", "$timeout", function (a, b) {
            return function (c, e, f) {
                if (d()) {
                    var g = a(f.ngfDropAvailable);
                    b(function () {
                        g(c), g.assign && g.assign(c, !0)
                    })
                }
            }
        }]), i.directive("ngfSrc", ["$parse", "$timeout", function (a, b) {
            return {
                restrict: "AE",
                link: function (a, c, d, e) {
                    window.FileReader && a.$watch(d.ngfSrc, function (a) {
                        a ? b(function () {
                            var d = new FileReader;
                            d.readAsDataURL(a), d.onload = function (a) {
                                b(function () {
                                    c.attr("src", a.target.result)
                                })
                            }
                        }) : c.attr("src", "")
                    })
                }
            }
        }])
    }(),
    function () {
        function a(a, b) {
            window.XMLHttpRequest.prototype[a] = b(window.XMLHttpRequest.prototype[a])
        }

        function b(a, b, c) {
            try {
                Object.defineProperty(a, b, {
                    get: c
                })
            } catch (d) { }
        }

        function c(a) {
            return "input" === a[0].tagName.toLowerCase() && a.attr("type") && "file" === a.attr("type").toLowerCase()
        }
        var d = function () {
            try {
                var a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                if (a) return !0
            } catch (b) {
                if (void 0 != navigator.mimeTypes["application/x-shockwave-flash"]) return !0
            }
            return !1
        };
        if (window.XMLHttpRequest && !window.FormData || window.FileAPI && FileAPI.forceLoad) {
            var e = function (a) {
                if (!a.__listeners) {
                    a.upload || (a.upload = {}), a.__listeners = [];
                    var b = a.upload.addEventListener;
                    a.upload.addEventListener = function (c, d, e) {
                        a.__listeners[c] = d, b && b.apply(this, arguments)
                    }
                }
            };
            a("open", function (a) {
                return function (b, c, d) {
                    e(this), this.__url = c;
                    try {
                        a.apply(this, [b, c, d])
                    } catch (f) {
                        f.message.indexOf("Access is denied") > -1 && (this.__origError = f, a.apply(this, [b, "_fix_for_ie_crossdomain__", d]))
                    }
                }
            }), a("getResponseHeader", function (a) {
                return function (b) {
                    return this.__fileApiXHR && this.__fileApiXHR.getResponseHeader ? this.__fileApiXHR.getResponseHeader(b) : null == a ? null : a.apply(this, [b])
                }
            }), a("getAllResponseHeaders", function (a) {
                return function () {
                    return this.__fileApiXHR && this.__fileApiXHR.getAllResponseHeaders ? this.__fileApiXHR.getAllResponseHeaders() : null == a ? null : a.apply(this)
                }
            }), a("abort", function (a) {
                return function () {
                    return this.__fileApiXHR && this.__fileApiXHR.abort ? this.__fileApiXHR.abort() : null == a ? null : a.apply(this)
                }
            }), a("setRequestHeader", function (a) {
                return function (b, c) {
                    if ("__setXHR_" === b) {
                        e(this);
                        var d = c(this);
                        d instanceof Function && d(this)
                    } else this.__requestHeaders = this.__requestHeaders || {}, this.__requestHeaders[b] = c, a.apply(this, arguments)
                }
            }), a("send", function (a) {
                return function () {
                    var c = this;
                    if (arguments[0] && arguments[0].__isFileAPIShim) {
                        var e = arguments[0],
                            f = {
                                url: c.__url,
                                jsonp: !1,
                                cache: !0,
                                complete: function (a, d) {
                                    c.__completed = !0, !a && c.__listeners.load && c.__listeners.load({
                                        type: "load",
                                        loaded: c.__loaded,
                                        total: c.__total,
                                        target: c,
                                        lengthComputable: !0
                                    }), !a && c.__listeners.loadend && c.__listeners.loadend({
                                        type: "loadend",
                                        loaded: c.__loaded,
                                        total: c.__total,
                                        target: c,
                                        lengthComputable: !0
                                    }), "abort" === a && c.__listeners.abort && c.__listeners.abort({
                                        type: "abort",
                                        loaded: c.__loaded,
                                        total: c.__total,
                                        target: c,
                                        lengthComputable: !0
                                    }), void 0 !== d.status && b(c, "status", function () {
                                        return 0 == d.status && a && "abort" !== a ? 500 : d.status
                                    }), void 0 !== d.statusText && b(c, "statusText", function () {
                                        return d.statusText
                                    }), b(c, "readyState", function () {
                                        return 4
                                    }), void 0 !== d.response && b(c, "response", function () {
                                        return d.response
                                    });
                                    var e = d.responseText || (a && 0 == d.status && "abort" !== a ? a : void 0);
                                    b(c, "responseText", function () {
                                        return e
                                    }), b(c, "response", function () {
                                        return e
                                    }), a && b(c, "err", function () {
                                        return a
                                    }), c.__fileApiXHR = d, c.onreadystatechange && c.onreadystatechange(), c.onload && c.onload()
                                },
                                fileprogress: function (a) {
                                    if (a.target = c, c.__listeners.progress && c.__listeners.progress(a), c.__total = a.total, c.__loaded = a.loaded, a.total === a.loaded) {
                                        var b = this;
                                        setTimeout(function () {
                                            c.__completed || (c.getAllResponseHeaders = function () { }, b.complete(null, {
                                                status: 204,
                                                statusText: "No Content"
                                            }))
                                        }, FileAPI.noContentTimeout || 1e4)
                                    }
                                },
                                headers: c.__requestHeaders
                            };
                        f.data = {}, f.files = {};
                        for (var g = 0; g < e.data.length; g++) {
                            var h = e.data[g];
                            null != h.val && null != h.val.name && null != h.val.size && null != h.val.type ? f.files[h.key] = h.val : f.data[h.key] = h.val
                        }
                        setTimeout(function () {
                            if (!d()) throw 'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';
                            c.__fileApiXHR = FileAPI.upload(f)
                        }, 1)
                    } else {
                        if (this.__origError) throw this.__origError;
                        a.apply(c, arguments)
                    }
                }
            }), window.XMLHttpRequest.__isFileAPIShim = !0, window.FormData = FormData = function () {
                return {
                    append: function (a, b, c) {
                        b.__isFileAPIBlobShim && (b = b.data[0]), this.data.push({
                            key: a,
                            val: b,
                            name: c
                        })
                    },
                    data: [],
                    __isFileAPIShim: !0
                }
            }, window.Blob = Blob = function (a) {
                return {
                    data: a,
                    __isFileAPIBlobShim: !0
                }
            },
                function () {
                    if (window.FileAPI || (window.FileAPI = {}), FileAPI.forceLoad && (FileAPI.html5 = !1), !FileAPI.upload) {
                        var a, b, c, e, f, g = document.createElement("script"),
                            h = document.getElementsByTagName("script");
                        if (window.FileAPI.jsUrl) a = window.FileAPI.jsUrl;
                        else if (window.FileAPI.jsPath) b = window.FileAPI.jsPath;
                        else
                            for (c = 0; c < h.length; c++)
                                if (f = h[c].src, e = f.search(/\/ng\-file\-upload[\-a-zA-z0-9\.]*\.js/), e > -1) {
                                    b = f.substring(0, e + 1);
                                    break
                                }
                        null == FileAPI.staticPath && (FileAPI.staticPath = b), g.setAttribute("src", a || b + "FileAPI.min.js"), document.getElementsByTagName("head")[0].appendChild(g), FileAPI.hasFlash = d()
                    }
                }(), FileAPI.ngfFixIE = function (a, b, e, f, g) {
                    if (!d()) throw 'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';
                    var h = function (d) {
                        function g(a) {
                            var b, c;
                            if (b = c = 0, a.offsetParent)
                                do b += a.offsetLeft, c += a.offsetTop; while (a = a.offsetParent);
                            return {
                                left: b,
                                top: c
                            }
                        }
                        if (a.attr("disabled")) a.__ngf_elem__.removeClass("js-fileapi-wrapper");
                        else {
                            var j = a.__ngf_elem__;
                            j ? e(a.__ngf_elem__) : (j = a.__ngf_elem__ = b(), j.addClass("js-fileapi-wrapper"), !c(a), setTimeout(function () {
                                j.bind("mouseenter", h)
                            }, 10), j.bind("change", function (a) {
                                i.apply(this, [a]), f.apply(this, [a])
                            })), c(a) || j.css("position", "absolute").css("top", g(a[0]).top + "px").css("left", g(a[0]).left + "px").css("width", a[0].offsetWidth + "px").css("height", a[0].offsetHeight + "px").css("filter", "alpha(opacity=0)").css("display", a.css("display")).css("overflow", "hidden").css("z-index", "900000")
                        }
                    };
                    a.bind("mouseenter", h);
                    var i = function (a) {
                        for (var b = FileAPI.getFiles(a), c = 0; c < b.length; c++) void 0 === b[c].size && (b[c].size = 0), void 0 === b[c].name && (b[c].name = "file"), void 0 === b[c].type && (b[c].type = "undefined");
                        a.target || (a.target = {}), a.target.files = b, a.target.files != b && (a.__files_ = b), (a.__files_ || a.target.files).item = function (b) {
                            return (a.__files_ || a.target.files)[b] || null
                        }
                    }
                }, FileAPI.disableFileInput = function (a, b) {
                    b ? a.removeClass("js-fileapi-wrapper") : a.addClass("js-fileapi-wrapper")
                }
        }
        window.FileReader || (window.FileReader = function () {
            var a = this,
                b = !1;
            this.listeners = {}, this.addEventListener = function (b, c) {
                a.listeners[b] = a.listeners[b] || [], a.listeners[b].push(c)
            }, this.removeEventListener = function (b, c) {
                a.listeners[b] && a.listeners[b].splice(a.listeners[b].indexOf(c), 1)
            }, this.dispatchEvent = function (b) {
                var c = a.listeners[b.type];
                if (c)
                    for (var d = 0; d < c.length; d++) c[d].call(a, b)
            }, this.onabort = this.onerror = this.onload = this.onloadstart = this.onloadend = this.onprogress = null;
            var c = function (b, c) {
                var d = {
                    type: b,
                    target: a,
                    loaded: c.loaded,
                    total: c.total,
                    error: c.error
                };
                return null != c.result && (d.target.result = c.result), d
            },
                d = function (d) {
                    if (b || (b = !0, a.onloadstart && a.onloadstart(c("loadstart", d))), "load" === d.type) {
                        a.onloadend && a.onloadend(c("loadend", d));
                        var e = c("load", d);
                        a.onload && a.onload(e), a.dispatchEvent(e)
                    } else if ("progress" === d.type) {
                        var e = c("progress", d);
                        a.onprogress && a.onprogress(e), a.dispatchEvent(e)
                    } else {
                        var e = c("error", d);
                        a.onerror && a.onerror(e), a.dispatchEvent(e)
                    }
                };
            this.readAsArrayBuffer = function (a) {
                FileAPI.readAsBinaryString(a, d)
            }, this.readAsBinaryString = function (a) {
                FileAPI.readAsBinaryString(a, d)
            }, this.readAsDataURL = function (a) {
                FileAPI.readAsDataURL(a, d)
            }, this.readAsText = function (a) {
                FileAPI.readAsText(a, d)
            }
        })
    }(),
    function () {
        "use strict";
        angular.module("ngMask", [])
    }(),
    function () {
        "use strict";
        angular.module("ngMask").directive("mask", ["$log", "$timeout", "MaskService", function (a, b, c) {
            return {
                restrict: "A",
                require: "ngModel",
                compile: function (d, e) {
                    function f(a) {
                        "number" == typeof a && (b.cancel(g), g = b(function () {
                            var b = a + 1,
                                c = d[0];
                            if (c.setSelectionRange) c.focus(), c.setSelectionRange(a, b);
                            else if (c.createTextRange) {
                                var e = c.createTextRange();
                                e.collapse(!0), e.moveEnd("character", b), e.moveStart("character", a), e.select()
                            }
                        }))
                    }
                    if (!e.mask || !e.ngModel) return void a.info("Mask and ng-model attributes are required!");
                    var g, h, i = c.create();
                    return {
                        pre: function (a, b, c, d) {
                            h = i.generateRegex({
                                mask: c.mask,
                                repeat: c.repeat || c.maskRepeat,
                                clean: "true" === (c.clean || c.maskClean),
                                limit: "true" === (c.limit || c.maskLimit || "true"),
                                restrict: c.restrict || c.maskRestrict || "select",
                                validate: "true" === (c.validate || c.maskValidate || "true"),
                                model: c.ngModel,
                                value: c.ngValue
                            })
                        },
                        post: function (c, d, e, g) {
                            h.then(function () {
                                function h(b) {
                                    b = b || "";
                                    var c = i.getViewValue(b),
                                        d = k.maskWithoutOptionals || "",
                                        e = c.withDivisors(!0),
                                        h = c.withoutDivisors(!0);
                                    try {
                                        var j = i.getRegex(e.length - 1),
                                            l = i.getRegex(d.length - 1),
                                            m = j.test(e) || l.test(e),
                                            n = b.length - e.length === 1,
                                            o = d.length - e.length > 0;
                                        if ("accept" !== k.restrict)
                                            if ("select" !== k.restrict || m && !n) "reject" !== k.restrict || m || (c = i.removeWrongPositions(e), e = c.withDivisors(!0), h = c.withoutDivisors(!0));
                                            else {
                                                var p = b[b.length - 1],
                                                    q = e[e.length - 1];
                                                p !== q && o && (e += p);
                                                var r = i.getFirstWrongPosition(e);
                                                angular.isDefined(r) && f(r)
                                            }
                                        k.limit || (e = c.withDivisors(!1), h = c.withoutDivisors(!1)), k.validate && g.$dirty && (l.test(e) || g.$isEmpty(g.$modelValue) ? g.$setValidity("mask", !0) : g.$setValidity("mask", !1)), b !== e && (g.$setViewValue(angular.copy(e), "input"), g.$render())
                                    } catch (s) {
                                        throw a.error("[mask - parseViewValue]"), s
                                    }
                                    return k.clean ? h : e
                                }
                                var j, k = i.getOptions();
                                g.$parsers.push(h), d.on("click input paste keyup", function () {
                                    j = b(function () {
                                        b.cancel(j), h(d.val()), c.$apply()
                                    }, 100)
                                });
                                var l = c.$watch(e.ngModel, function (a, b) {
                                    angular.isDefined(a) && (h(a), l())
                                });
                                k.value && c.$evalAsync(function (a) {
                                    g.$setViewValue(angular.copy(k.value), "input"), g.$render()
                                })
                            })
                        }
                    }
                }
            }
        }])
    }(),
    function () {
        "use strict";
        angular.module("ngMask").factory("MaskService", ["$q", "OptionalService", "UtilService", function (a, b, c) {
            function d() {
                function d(a, b) {
                    var c;
                    try {
                        var d = t[a],
                            e = C[d],
                            f = h(a);
                        e ? c = "(" + e.source + ")" : (i(a) || (z.push(a), A[a] = d), c = "(\\" + d + ")")
                    } catch (g) {
                        throw g
                    }
                    return (f || b) && (c += "?"), new RegExp(c)
                }

                function e(a, b) {
                    var c, f;
                    try {
                        var g = d(a, b);
                        c = g;
                        var i = h(a),
                            j = g.source;
                        if (i && u > a + 1) {
                            var k = e(a + 1, !0).elementOptionalRegex();
                            j += k.source
                        }
                        f = new RegExp(j)
                    } catch (l) {
                        throw l
                    }
                    return {
                        elementRegex: function () {
                            return c
                        },
                        elementOptionalRegex: function () {
                            return f
                        }
                    }
                }

                function f(c) {
                    var d = a.defer();
                    s = c;
                    try {
                        var f = c.mask,
                            g = c.repeat;
                        g && (f = Array(parseInt(g) + 1).join(f)), w = b.getOptionals(f).fromMaskWithoutOptionals(), s.maskWithoutOptionals = t = b.removeOptionals(f), u = t.length;
                        for (var h, i = 0; u > i; i++) {
                            var l = e(i),
                                m = l.elementRegex(),
                                n = l.elementOptionalRegex(),
                                o = h ? h.source + n.source : n.source;
                            o = new RegExp(o), h = h ? h.source + m.source : m.source, h = new RegExp(h), B.push(o)
                        }
                        j(), v = k(t).length, d.resolve({
                            options: s,
                            divisors: z,
                            divisorElements: A,
                            optionalIndexes: w,
                            optionalDivisors: x,
                            optionalDivisorsCombinations: y
                        })
                    } catch (p) {
                        throw d.reject(p), p
                    }
                    return d.promise
                }

                function g(a) {
                    var b;
                    try {
                        b = B[a] ? B[a].source : ""
                    } catch (c) {
                        throw c
                    }
                    return new RegExp("^" + b + "$")
                }

                function h(a) {
                    return c.inArray(a, w)
                }

                function i(a) {
                    return c.inArray(a, z)
                }

                function j() {
                    function a(a, b) {
                        return a - b
                    }
                    for (var b = z.sort(a), c = w.sort(a), d = 0; d < b.length; d++)
                        for (var e = b[d], f = 1; f <= c.length; f++) {
                            var g = c[f - 1];
                            if (g >= e) break;
                            x[e] ? x[e] = x[e].concat(e - f) : x[e] = [e - f], A[e - f] = A[e]
                        }
                }

                function k(a) {
                    try {
                        if (z.length > 0 && a) {
                            for (var b = Object.keys(A), d = [], e = b.length - 1; e >= 0; e--) {
                                var f = A[b[e]];
                                f && d.push(f)
                            }
                            d = c.uniqueArray(d);
                            var g = new RegExp("[\\" + d.join("\\") + "]", "g");
                            return a.replace(g, "")
                        }
                        return a
                    } catch (h) {
                        throw h
                    }
                }

                function l(a, b) {
                    function d(a, b) {
                        for (var c = b, d = 0; d < a.length; d++) {
                            var e = a[d];
                            e < c.length && c.splice(e, 0, A[e])
                        }
                        return c
                    }
                    var e = a,
                        f = z.filter(function (a) {
                            var d = Object.keys(x).map(function (a) {
                                return parseInt(a)
                            });
                            return !c.inArray(a, b) && !c.inArray(a, d)
                        });
                    return angular.isArray(a) && angular.isArray(b) ? (e = d(f, e), e = d(b, e)) : e
                }

                function m(a) {
                    var b = a.split(""),
                        d = !0;
                    if (w.length > 0) {
                        for (var e = [], f = Object.keys(x), h = 0; h < f.length; h++) {
                            var i = x[f[h]];
                            e.push(i)
                        }
                        0 === y.length && c.lazyProduct(e, function () {
                            y.push(Array.prototype.slice.call(arguments))
                        });
                        for (var h = y.length - 1; h >= 0; h--) {
                            var j = angular.copy(b);
                            j = l(j, y[h]);
                            var k = j.join(""),
                                m = g(t.length - 1);
                            if (m.test(k)) {
                                d = !1, b = j;
                                break
                            }
                        }
                    }
                    return d && (b = l(b, z)), b.join("")
                }

                function n() {
                    return s
                }

                function o(a) {
                    try {
                        var b = k(a),
                            c = m(b);
                        return {
                            withDivisors: function (a) {
                                return a ? c.substr(0, u) : c
                            },
                            withoutDivisors: function (a) {
                                return a ? b.substr(0, v) : b
                            }
                        }
                    } catch (d) {
                        throw d
                    }
                }

                function p(a, b) {
                    var c = [];
                    if (!a) return 0;
                    for (var d = 0; d < a.length; d++) {
                        var e = g(d),
                            f = a.substr(0, d + 1);
                        if (e && !e.test(f) && (c.push(d), b)) break
                    }
                    return c
                }

                function q(a) {
                    return p(a, !0)[0]
                }

                function r(a) {
                    var b = p(a, !1),
                        c = a;
                    for (var d in b) {
                        var e = b[d],
                            f = a.split("");
                        f.splice(e, 1), c = f.join("")
                    }
                    return o(c)
                }
                var s, t, u = 0,
                    v = 0,
                    w = [],
                    x = {},
                    y = [],
                    z = [],
                    A = {},
                    B = [],
                    C = {
                        9: /[0-9]/,
                        8: /[0-8]/,
                        7: /[0-7]/,
                        6: /[0-6]/,
                        5: /[0-5]/,
                        4: /[0-4]/,
                        3: /[0-3]/,
                        2: /[0-2]/,
                        1: /[0-1]/,
                        0: /[0]/,
                        "*": /./,
                        w: /\w/,
                        W: /\W/,
                        d: /\d/,
                        D: /\D/,
                        s: /\s/,
                        S: /\S/,
                        b: /\b/,
                        A: /[A-Z]/,
                        a: /[a-z]/,
                        Z: /[A-ZÇÀÁÂÃÈÉÊẼÌÍÎĨÒÓÔÕÙÚÛŨ]/,
                        z: /[a-zçáàãâéèêẽíìĩîóòôõúùũüû]/,
                        "@": /[a-zA-Z]/,
                        "#": /[a-zA-ZçáàãâéèêẽíìĩîóòôõúùũüûÇÀÁÂÃÈÉÊẼÌÍÎĨÒÓÔÕÙÚÛŨ]/,
                        "%": /[0-9a-zA-ZçáàãâéèêẽíìĩîóòôõúùũüûÇÀÁÂÃÈÉÊẼÌÍÎĨÒÓÔÕÙÚÛŨ]/
                    };
                return {
                    getViewValue: o,
                    generateRegex: f,
                    getRegex: g,
                    getOptions: n,
                    removeDivisors: k,
                    getFirstWrongPosition: q,
                    removeWrongPositions: r
                }
            }
            return {
                create: d
            }
        }])
    }(),
    function () {
        "use strict";
        angular.module("ngMask").factory("OptionalService", [function () {
            function a(a) {
                var c = [];
                try {
                    for (var d = /\?/g, e = []; null != (e = d.exec(a));) c.push(e.index - 1)
                } catch (f) {
                    throw f
                }
                return {
                    fromMask: function () {
                        return c
                    },
                    fromMaskWithoutOptionals: function () {
                        return b(c)
                    }
                }
            }

            function b(a) {
                for (var b = [], c = 0; c < a.length; c++) b.push(a[c] - c);
                return b
            }

            function c(a) {
                var b;
                try {
                    b = a.replace(/\?/g, "")
                } catch (c) {
                    throw c
                }
                return b
            }
            return {
                removeOptionals: c,
                getOptionals: a
            }
        }])
    }(),
    function () {
        "use strict";
        angular.module("ngMask").factory("UtilService", [function () {
            function a(a, b, c) {
                function d(h) {
                    var i = a[h],
                        j = g[h];
                    if (h === f)
                        for (var k = 0; j > k; ++k) e[h] = i[k], b.apply(c, e);
                    else
                        for (var k = 0; j > k; ++k) e[h] = i[k], d(h + 1);
                    e.pop()
                }
                c || (c = this);
                for (var e = [], f = a.length - 1, g = [], h = a.length; h--;) g[h] = a[h].length;
                d(0)
            }

            function b(a, b) {
                var c;
                try {
                    c = b.indexOf(a) > -1
                } catch (d) {
                    throw d
                }
                return c
            }

            function c(a) {
                for (var b = {}, c = [], d = 0, e = a.length; e > d; ++d) b.hasOwnProperty(a[d]) || (c.push(a[d]), b[a[d]] = 1);
                return c
            }
            return {
                lazyProduct: a,
                inArray: b,
                uniqueArray: c
            }
        }])
    }(), ! function (a, b, c) {
        "use strict";
        ! function d(a, b, c) {
            function e(g, h) {
                if (!b[g]) {
                    if (!a[g]) {
                        var i = "function" == typeof require && require;
                        if (!h && i) return i(g, !0);
                        if (f) return f(g, !0);
                        var j = new Error("Cannot find module '" + g + "'");
                        throw j.code = "MODULE_NOT_FOUND", j
                    }
                    var k = b[g] = {
                        exports: {}
                    };
                    a[g][0].call(k.exports, function (b) {
                        var c = a[g][1][b];
                        return e(c ? c : b)
                    }, k, k.exports, d, a, b, c)
                }
                return b[g].exports
            }
            for (var f = "function" == typeof require && require, g = 0; g < c.length; g++) e(c[g]);
            return e
        }({
            1: [function (d) {
                var e, f, g, h, i = function (a) {
                    return a && a.__esModule ? a : {
                        "default": a
                    }
                },
                    j = d("./modules/handle-dom"),
                    k = d("./modules/utils"),
                    l = d("./modules/handle-swal-dom"),
                    m = d("./modules/handle-click"),
                    n = d("./modules/handle-key"),
                    o = i(n),
                    p = d("./modules/default-params"),
                    q = i(p),
                    r = d("./modules/set-params"),
                    s = i(r);
                g = h = function () {
                    function d(a) {
                        var b = g;
                        return b[a] === c ? q["default"][a] : b[a]
                    }
                    var g = arguments[0];
                    if (j.addClass(b.body, "stop-scrolling"), l.resetInput(), g === c) return k.logStr("SweetAlert expects at least 1 attribute!"), !1;
                    var h = k.extend({}, q["default"]);
                    switch (typeof g) {
                        case "string":
                            h.title = g, h.text = arguments[1] || "", h.type = arguments[2] || "";
                            break;
                        case "object":
                            if (g.title === c) return k.logStr('Missing "title" argument!'), !1;
                            h.title = g.title;
                            for (var i in q["default"]) h[i] = d(i);
                            h.confirmButtonText = h.showCancelButton ? "Confirm" : q["default"].confirmButtonText, h.confirmButtonText = d("confirmButtonText"), h.doneFunction = arguments[1] || null;
                            break;
                        default:
                            return k.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof g), !1
                    }
                    s["default"](h), l.fixVerticalPosition(), l.openModal(arguments[1]);
                    for (var n = l.getModal(), p = n.querySelectorAll("button"), r = ["onclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onfocus"], t = function (a) {
                        return m.handleButton(a, h, n)
                    }, u = 0; u < p.length; u++)
                        for (var v = 0; v < r.length; v++) {
                            var w = r[v];
                            p[u][w] = t
                        }
                    l.getOverlay().onclick = t, e = a.onkeydown;
                    var x = function (a) {
                        return o["default"](a, h, n)
                    };
                    a.onkeydown = x, a.onfocus = function () {
                        setTimeout(function () {
                            f !== c && (f.focus(), f = c)
                        }, 0)
                    }
                }, g.setDefaults = h.setDefaults = function (a) {
                    if (!a) throw new Error("userParams is required");
                    if ("object" != typeof a) throw new Error("userParams has to be a object");
                    k.extend(q["default"], a)
                }, g.close = h.close = function () {
                    var d = l.getModal();
                    j.fadeOut(l.getOverlay(), 5), j.fadeOut(d, 5), j.removeClass(d, "showSweetAlert"), j.addClass(d, "hideSweetAlert"), j.removeClass(d, "visible");
                    var g = d.querySelector(".sa-icon.sa-success");
                    j.removeClass(g, "animate"), j.removeClass(g.querySelector(".sa-tip"), "animateSuccessTip"), j.removeClass(g.querySelector(".sa-long"), "animateSuccessLong");
                    var h = d.querySelector(".sa-icon.sa-error");
                    j.removeClass(h, "animateErrorIcon"), j.removeClass(h.querySelector(".sa-x-mark"), "animateXMark");
                    var i = d.querySelector(".sa-icon.sa-warning");
                    return j.removeClass(i, "pulseWarning"), j.removeClass(i.querySelector(".sa-body"), "pulseWarningIns"), j.removeClass(i.querySelector(".sa-dot"), "pulseWarningIns"), setTimeout(function () {
                        var a = d.getAttribute("data-custom-class");
                        j.removeClass(d, a)
                    }, 300), j.removeClass(b.body, "stop-scrolling"), a.onkeydown = e, a.previousActiveElement && a.previousActiveElement.focus(), f = c, clearTimeout(d.timeout), !0
                }, g.showInputError = h.showInputError = function (a) {
                    var b = l.getModal(),
                        c = b.querySelector(".sa-input-error");
                    j.addClass(c, "show");
                    var d = b.querySelector(".sa-error-container");
                    j.addClass(d, "show"), d.querySelector("p").innerHTML = a, b.querySelector("input").focus()
                }, g.resetInputError = h.resetInputError = function (a) {
                    if (a && 13 === a.keyCode) return !1;
                    var b = l.getModal(),
                        c = b.querySelector(".sa-input-error");
                    j.removeClass(c, "show");
                    var d = b.querySelector(".sa-error-container");
                    j.removeClass(d, "show")
                }, "undefined" != typeof a ? a.sweetAlert = a.swal = g : k.logStr("SweetAlert is a frontend module!")
            }, {
                "./modules/default-params": 2,
                "./modules/handle-click": 3,
                "./modules/handle-dom": 4,
                "./modules/handle-key": 5,
                "./modules/handle-swal-dom": 6,
                "./modules/set-params": 8,
                "./modules/utils": 9
            }],
            2: [function (a, b, c) {
                Object.defineProperty(c, "__esModule", {
                    value: !0
                });
                var d = {
                    title: "",
                    text: "",
                    type: null,
                    allowOutsideClick: !1,
                    showConfirmButton: !0,
                    showCancelButton: !1,
                    closeOnConfirm: !0,
                    closeOnCancel: !0,
                    confirmButtonText: "OK",
                    confirmButtonColor: "#AEDEF4",
                    cancelButtonText: "Cancel",
                    imageUrl: null,
                    imageSize: null,
                    timer: null,
                    customClass: "",
                    html: !1,
                    animation: !0,
                    allowEscapeKey: !0,
                    inputType: "text",
                    inputPlaceholder: "",
                    inputValue: ""
                };
                c["default"] = d, b.exports = c["default"]
            }, {}],
            3: [function (b, c, d) {
                Object.defineProperty(d, "__esModule", {
                    value: !0
                });
                var e = b("./utils"),
                    f = (b("./handle-swal-dom"), b("./handle-dom")),
                    g = function (b, c, d) {
                        function g(a) {
                            o && c.confirmButtonColor && (n.style.backgroundColor = a)
                        }
                        var j, k, l, m = b || a.event,
                            n = m.target || m.srcElement,
                            o = -1 !== n.className.indexOf("confirm"),
                            p = -1 !== n.className.indexOf("sweet-overlay"),
                            q = f.hasClass(d, "visible"),
                            r = c.doneFunction && "true" === d.getAttribute("data-has-done-function");
                        switch (o && c.confirmButtonColor && (j = c.confirmButtonColor, k = e.colorLuminance(j, -.04), l = e.colorLuminance(j, -.14)), m.type) {
                            case "mouseover":
                                g(k);
                                break;
                            case "mouseout":
                                g(j);
                                break;
                            case "mousedown":
                                g(l);
                                break;
                            case "mouseup":
                                g(k);
                                break;
                            case "focus":
                                var s = d.querySelector("button.confirm"),
                                    t = d.querySelector("button.cancel");
                                o ? t.style.boxShadow = "none" : s.style.boxShadow = "none";
                                break;
                            case "click":
                                var u = d === n,
                                    v = f.isDescendant(d, n);
                                if (!u && !v && q && !c.allowOutsideClick) break;
                                o && r && q ? h(d, c) : r && q || p ? i(d, c) : f.isDescendant(d, n) && "BUTTON" === n.tagName && sweetAlert.close()
                        }
                    },
                    h = function (a, b) {
                        var c = !0;
                        f.hasClass(a, "show-input") && (c = a.querySelector("input").value, c || (c = "")), b.doneFunction(c), b.closeOnConfirm && sweetAlert.close()
                    },
                    i = function (a, b) {
                        var c = String(b.doneFunction).replace(/\s/g, ""),
                            d = "function(" === c.substring(0, 9) && ")" !== c.substring(9, 10);
                        d && b.doneFunction(!1), b.closeOnCancel && sweetAlert.close()
                    };
                d["default"] = {
                    handleButton: g,
                    handleConfirm: h,
                    handleCancel: i
                }, c.exports = d["default"]
            }, {
                "./handle-dom": 4,
                "./handle-swal-dom": 6,
                "./utils": 9
            }],
            4: [function (c, d, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var f = function (a, b) {
                    return new RegExp(" " + b + " ").test(" " + a.className + " ")
                },
                    g = function (a, b) {
                        f(a, b) || (a.className += " " + b)
                    },
                    h = function (a, b) {
                        var c = " " + a.className.replace(/[\t\r\n]/g, " ") + " ";
                        if (f(a, b)) {
                            for (; c.indexOf(" " + b + " ") >= 0;) c = c.replace(" " + b + " ", " ");
                            a.className = c.replace(/^\s+|\s+$/g, "")
                        }
                    },
                    i = function (a) {
                        var c = b.createElement("div");
                        return c.appendChild(b.createTextNode(a)), c.innerHTML
                    },
                    j = function (a) {
                        a.style.opacity = "", a.style.display = "block"
                    },
                    k = function (a) {
                        if (a && !a.length) return j(a);
                        for (var b = 0; b < a.length; ++b) j(a[b])
                    },
                    l = function (a) {
                        a.style.opacity = "", a.style.display = "none"
                    },
                    m = function (a) {
                        if (a && !a.length) return l(a);
                        for (var b = 0; b < a.length; ++b) l(a[b])
                    },
                    n = function (a, b) {
                        for (var c = b.parentNode; null !== c;) {
                            if (c === a) return !0;
                            c = c.parentNode
                        }
                        return !1
                    },
                    o = function (a) {
                        a.style.left = "-9999px", a.style.display = "block";
                        var b, c = a.clientHeight;
                        return b = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(a).getPropertyValue("padding-top"), 10) : parseInt(a.currentStyle.padding), a.style.left = "", a.style.display = "none", "-" + parseInt((c + b) / 2) + "px"
                    },
                    p = function (a, b) {
                        if (+a.style.opacity < 1) {
                            b = b || 16, a.style.opacity = 0, a.style.display = "block";
                            var c = +new Date,
                                d = function (a) {
                                    function b() {
                                        return a.apply(this, arguments)
                                    }
                                    return b.toString = function () {
                                        return a.toString()
                                    }, b
                                }(function () {
                                    a.style.opacity = +a.style.opacity + (new Date - c) / 100, c = +new Date, +a.style.opacity < 1 && setTimeout(d, b)
                                });
                            d()
                        }
                        a.style.display = "block"
                    },
                    q = function (a, b) {
                        b = b || 16, a.style.opacity = 1;
                        var c = +new Date,
                            d = function (a) {
                                function b() {
                                    return a.apply(this, arguments)
                                }
                                return b.toString = function () {
                                    return a.toString()
                                }, b
                            }(function () {
                                a.style.opacity = +a.style.opacity - (new Date - c) / 100, c = +new Date, +a.style.opacity > 0 ? setTimeout(d, b) : a.style.display = "none"
                            });
                        d()
                    },
                    r = function (c) {
                        if ("function" == typeof MouseEvent) {
                            var d = new MouseEvent("click", {
                                view: a,
                                bubbles: !1,
                                cancelable: !0
                            });
                            c.dispatchEvent(d)
                        } else if (b.createEvent) {
                            var e = b.createEvent("MouseEvents");
                            e.initEvent("click", !1, !1), c.dispatchEvent(e)
                        } else b.createEventObject ? c.fireEvent("onclick") : "function" == typeof c.onclick && c.onclick()
                    },
                    s = function (b) {
                        "function" == typeof b.stopPropagation ? (b.stopPropagation(), b.preventDefault()) : a.event && a.event.hasOwnProperty("cancelBubble") && (a.event.cancelBubble = !0)
                    };
                e.hasClass = f, e.addClass = g, e.removeClass = h, e.escapeHtml = i, e._show = j, e.show = k, e._hide = l, e.hide = m, e.isDescendant = n, e.getTopMargin = o, e.fadeIn = p, e.fadeOut = q, e.fireClick = r, e.stopEventPropagation = s
            }, {}],
            5: [function (b, d, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var f = b("./handle-dom"),
                    g = b("./handle-swal-dom"),
                    h = function (b, d, e) {
                        var h = b || a.event,
                            i = h.keyCode || h.which,
                            j = e.querySelector("button.confirm"),
                            k = e.querySelector("button.cancel"),
                            l = e.querySelectorAll("button[tabindex]");
                        if (-1 !== [9, 13, 32, 27].indexOf(i)) {
                            for (var m = h.target || h.srcElement, n = -1, o = 0; o < l.length; o++)
                                if (m === l[o]) {
                                    n = o;
                                    break
                                }
                            9 === i ? (m = -1 === n ? j : n === l.length - 1 ? l[0] : l[n + 1], f.stopEventPropagation(h), m.focus(), d.confirmButtonColor && g.setFocusStyle(m, d.confirmButtonColor)) : 13 === i ? ("INPUT" === m.tagName && (m = j, j.focus()), m = -1 === n ? j : c) : 27 === i && d.allowEscapeKey === !0 ? (m = k, f.fireClick(m, h)) : m = c
                        }
                    };
                e["default"] = h, d.exports = e["default"]
            }, {
                "./handle-dom": 4,
                "./handle-swal-dom": 6
            }],
            6: [function (c, d, e) {
                var f = function (a) {
                    return a && a.__esModule ? a : {
                        "default": a
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var g = c("./utils"),
                    h = c("./handle-dom"),
                    i = c("./default-params"),
                    j = f(i),
                    k = c("./injected-html"),
                    l = f(k),
                    m = ".sweet-alert",
                    n = ".sweet-overlay",
                    o = function () {
                        var a = b.createElement("div");
                        for (a.innerHTML = l["default"]; a.firstChild;) b.body.appendChild(a.firstChild)
                    },
                    p = function (a) {
                        function b() {
                            return a.apply(this, arguments)
                        }
                        return b.toString = function () {
                            return a.toString()
                        }, b
                    }(function () {
                        var a = b.querySelector(m);
                        return a || (o(), a = p()), a
                    }),
                    q = function () {
                        var a = p();
                        return a ? a.querySelector("input") : void 0
                    },
                    r = function () {
                        return b.querySelector(n)
                    },
                    s = function (a, b) {
                        var c = g.hexToRgb(b);
                        a.style.boxShadow = "0 0 2px rgba(" + c + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"
                    },
                    t = function (c) {
                        var d = p();
                        h.fadeIn(r(), 10), h.show(d), h.addClass(d, "showSweetAlert"), h.removeClass(d, "hideSweetAlert"), a.previousActiveElement = b.activeElement;
                        var e = d.querySelector("button.confirm");
                        e.focus(), setTimeout(function () {
                            h.addClass(d, "visible")
                        }, 500);
                        var f = d.getAttribute("data-timer");
                        if ("null" !== f && "" !== f) {
                            var g = c;
                            d.timeout = setTimeout(function () {
                                var a = (g || null) && "true" === d.getAttribute("data-has-done-function");
                                a ? g(null) : sweetAlert.close()
                            }, f)
                        }
                    },
                    u = function () {
                        var a = p(),
                            b = q();
                        h.removeClass(a, "show-input"), b.value = j["default"].inputValue, b.setAttribute("type", j["default"].inputType), b.setAttribute("placeholder", j["default"].inputPlaceholder), v()
                    },
                    v = function (a) {
                        if (a && 13 === a.keyCode) return !1;
                        var b = p(),
                            c = b.querySelector(".sa-input-error");
                        h.removeClass(c, "show");
                        var d = b.querySelector(".sa-error-container");
                        h.removeClass(d, "show")
                    },
                    w = function () {
                        var a = p();
                        a.style.marginTop = h.getTopMargin(p())
                    };
                e.sweetAlertInitialize = o, e.getModal = p, e.getOverlay = r, e.getInput = q, e.setFocusStyle = s, e.openModal = t, e.resetInput = u, e.resetInputError = v, e.fixVerticalPosition = w
            }, {
                "./default-params": 2,
                "./handle-dom": 4,
                "./injected-html": 7,
                "./utils": 9
            }],
            7: [function (a, b, c) {
                Object.defineProperty(c, "__esModule", {
                    value: !0
                });
                var d = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <button class="confirm" tabIndex="1">OK</button>\n    </div></div>';
                c["default"] = d, b.exports = c["default"]
            }, {}],
            8: [function (a, b, d) {
                Object.defineProperty(d, "__esModule", {
                    value: !0
                });
                var e = a("./utils"),
                    f = a("./handle-swal-dom"),
                    g = a("./handle-dom"),
                    h = ["error", "warning", "info", "success", "input", "prompt"],
                    i = function (a) {
                        var b = f.getModal(),
                            d = b.querySelector("h2"),
                            i = b.querySelector("p"),
                            j = b.querySelector("button.cancel"),
                            k = b.querySelector("button.confirm");
                        if (d.innerHTML = a.html ? a.title : g.escapeHtml(a.title).split("\n").join("<br>"), i.innerHTML = a.html ? a.text : g.escapeHtml(a.text || "").split("\n").join("<br>"), a.text && g.show(i), a.customClass) g.addClass(b, a.customClass), b.setAttribute("data-custom-class", a.customClass);
                        else {
                            var l = b.getAttribute("data-custom-class");
                            g.removeClass(b, l), b.setAttribute("data-custom-class", "")
                        }
                        if (g.hide(b.querySelectorAll(".sa-icon")), a.type && !e.isIE8()) {
                            var m = function () {
                                for (var d = !1, e = 0; e < h.length; e++)
                                    if (a.type === h[e]) {
                                        d = !0;
                                        break
                                    }
                                if (!d) return logStr("Unknown alert type: " + a.type), {
                                    v: !1
                                };
                                var i = ["success", "error", "warning", "info"],
                                    j = c; - 1 !== i.indexOf(a.type) && (j = b.querySelector(".sa-icon.sa-" + a.type), g.show(j));
                                var k = f.getInput();
                                switch (a.type) {
                                    case "success":
                                        g.addClass(j, "animate"), g.addClass(j.querySelector(".sa-tip"), "animateSuccessTip"), g.addClass(j.querySelector(".sa-long"), "animateSuccessLong");
                                        break;
                                    case "error":
                                        g.addClass(j, "animateErrorIcon"), g.addClass(j.querySelector(".sa-x-mark"), "animateXMark");
                                        break;
                                    case "warning":
                                        g.addClass(j, "pulseWarning"), g.addClass(j.querySelector(".sa-body"), "pulseWarningIns"), g.addClass(j.querySelector(".sa-dot"), "pulseWarningIns");
                                        break;
                                    case "input":
                                    case "prompt":
                                        k.setAttribute("type", a.inputType), k.value = a.inputValue, k.setAttribute("placeholder", a.inputPlaceholder), g.addClass(b, "show-input"), setTimeout(function () {
                                            k.focus(), k.addEventListener("keyup", swal.resetInputError)
                                        }, 400)
                                }
                            }();
                            if ("object" == typeof m) return m.v
                        }
                        if (a.imageUrl) {
                            var n = b.querySelector(".sa-icon.sa-custom");
                            n.style.backgroundImage = "url(" + a.imageUrl + ")", g.show(n);
                            var o = 80,
                                p = 80;
                            if (a.imageSize) {
                                var q = a.imageSize.toString().split("x"),
                                    r = q[0],
                                    s = q[1];
                                r && s ? (o = r, p = s) : logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + a.imageSize)
                            }
                            n.setAttribute("style", n.getAttribute("style") + "width:" + o + "px; height:" + p + "px")
                        }
                        b.setAttribute("data-has-cancel-button", a.showCancelButton), a.showCancelButton ? j.style.display = "inline-block" : g.hide(j), b.setAttribute("data-has-confirm-button", a.showConfirmButton), a.showConfirmButton ? k.style.display = "inline-block" : g.hide(k), a.cancelButtonText && (j.innerHTML = g.escapeHtml(a.cancelButtonText)), a.confirmButtonText && (k.innerHTML = g.escapeHtml(a.confirmButtonText)), a.confirmButtonColor && (k.style.backgroundColor = a.confirmButtonColor, f.setFocusStyle(k, a.confirmButtonColor)), b.setAttribute("data-allow-outside-click", a.allowOutsideClick);
                        var t = a.doneFunction ? !0 : !1;
                        b.setAttribute("data-has-done-function", t), a.animation ? "string" == typeof a.animation ? b.setAttribute("data-animation", a.animation) : b.setAttribute("data-animation", "pop") : b.setAttribute("data-animation", "none"), b.setAttribute("data-timer", a.timer)
                    };
                d["default"] = i, b.exports = d["default"]
            }, {
                "./handle-dom": 4,
                "./handle-swal-dom": 6,
                "./utils": 9
            }],
            9: [function (b, c, d) {
                Object.defineProperty(d, "__esModule", {
                    value: !0
                });
                var e = function (a, b) {
                    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
                    return a
                },
                    f = function (a) {
                        var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
                        return b ? parseInt(b[1], 16) + ", " + parseInt(b[2], 16) + ", " + parseInt(b[3], 16) : null
                    },
                    g = function () {
                        return a.attachEvent && !a.addEventListener
                    },
                    h = function (b) {
                        a.console && a.console.log("SweetAlert: " + b)
                    },
                    i = function (a, b) {
                        a = String(a).replace(/[^0-9a-f]/gi, ""), a.length < 6 && (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]), b = b || 0;
                        var c, d, e = "#";
                        for (d = 0; 3 > d; d++) c = parseInt(a.substr(2 * d, 2), 16), c = Math.round(Math.min(Math.max(0, c + c * b), 255)).toString(16), e += ("00" + c).substr(c.length);
                        return e
                    };
                d.extend = e, d.hexToRgb = f, d.isIE8 = g, d.logStr = h, d.colorLuminance = i
            }, {}]
        }, {}, [1]), "function" == typeof define && define.amd ? define(function () {
            return sweetAlert
        }) : "undefined" != typeof module && module.exports && (module.exports = sweetAlert)
    }(window, document), angular.module("config", []).constant("APP_NAME", "SAC APP").constant("APP_VERSION", "0.1").constant("API", "/websites/deux/api/").constant("ENV", "PROD"), window.appSacLocale = window.appSacLocale || {}, window.appSacLocale["app/i18n/resources-locale_en.js"] = {
        "faq message": "Aqui você encontra algumas respostas para esclarecer as suas dúvidas de forma rápida e prática.",
        "faq search": "Digite a palavra-chave de sua dúvida",
        "faq search placeholder": "Digite aqui sua dúvida",
        faq: "Perguntas mais Acessadas",
        "faq zero results": "Nenhum resultado encontrado para a sua dúvida. Entre em contato através do formulário abaixo.",
        "accordion default title": "Digite sua busca acima!",
        "accordion default content": "Digite sua busca acima!",
        "label form": "Entre em contato conosco, responderemos o mais breve possível.",
        "label identification": "Identifique-se:",
        "label message": "Mensagem:",
        "label channel": "Canal/Assunto",
        "label identification": "Identificação",
        "label interest area": "Área de Interesse",
        "button send": "Enviar",
        "button search": "Buscar"
    }, window.appSacLocale["app/i18n/resources-locale_es.js"] = {
        "faq message": "Aqui você encontra algumas respostas para esclarecer as suas dúvidas de forma rápida e prática.",
        "faq search": "Digite a palavra-chave de sua dúvida",
        "faq search placeholder": "Digite aqui sua dúvida",
        faq: "Perguntas mais Acessadas",
        "faq zero results": "Nenhum resultado encontrado para a sua dúvida. Entre em contato através do formulário abaixo.",
        "accordion default title": "Digite sua busca acima!",
        "accordion default content": "Digite sua busca acima!",
        "label form": "Entre em contato conosco, responderemos o mais breve possível.",
        "label identification": "Identifique-se:",
        "label message": "Mensagem:",
        "label channel": "Canal/Assunto",
        "label identification": "Identificação",
        "label interest area": "Área de Interesse",
        "button send": "Enviar",
        "button search": "Buscar"
    }, window.appSacLocale["app/i18n/resources-locale_pt.js"] = {
        "faq message": "Aqui você encontra algumas respostas para esclarecer as suas dúvidas de forma rápida e prática.",
        "faq search": "Digite a palavra-chave de sua dúvida",
        "faq search placeholder": "Digite aqui sua dúvida",
        faq: "Perguntas mais Acessadas",
        "faq zero results": "Nenhum resultado encontrado para a sua dúvida. Entre em contato através do formulário abaixo.",
        "accordion default title": "Digite sua busca acima!",
        "accordion default content": "Digite sua busca acima!",
        "label form": "Entre em contato conosco, responderemos o mais breve possível.",
        "label identification": "Identifique-se:",
        "label message": "Mensagem:",
        "label channel": "Canal/Assunto",
        "label identification": "Identificação",
        "label interest area": "Área de Interesse",
        "button send": "Enviar",
        "button search": "Buscar"
    }, angular.module("sacApp", ["ngAnimate", "ngCookies", "ngMessages", "ngResource", "ngRoute", "ngSanitize", "ngTouch", "ngCookies", "ngMockE2E", "config", "ngFileUpload", "angular-md5", "angular-ladda", "angularSpinner", "ngMask", "ngSweetAlert"]).config(["$routeProvider", "$httpProvider", "usSpinnerConfigProvider", function (a, b, c) {
        b.defaults.useXDomain = !0, delete b.defaults.headers.common["X-Requested-With"], c.setDefaults({
            lines: 7,
            length: 2,
            width: 3,
            radius: 5,
            corners: 1,
            rotate: 0,
            trail: 50,
            speed: 1,
            direction: 1
        }), a.when("/", {
            redirectTo: "/faq"
        }).when("/faq", {
            templateUrl: "views/faq.html",
            controller: "FaqController"
        }).when("/login", {
            templateUrl: "views/login.html",
            controller: "LoginController"
        }).when("/login/:protocolo", {
            templateUrl: "views/login.html",
            controller: "LoginController"
        }).when("/protocolo/:protocolo", {
            templateUrl: "views/protocolo.html",
            controller: "ProtocoloController"
        }).otherwise({
            redirectTo: "/"
        })
    }]).run(["$httpBackend", "$location", "$cookies", "$window", function (a, b, c, d) {
        a.whenGET(new RegExp("views/.*")).passThrough(), a.whenGET(new RegExp("api/.*")).passThrough(), a.whenPOST(new RegExp("api/.*")).passThrough(), a.whenPUT(new RegExp("api/.*")).passThrough(), a.whenGET(new RegExp("i18n")).respond(function (a, b) {
            return [200, angular.fromJson(d.appSacLocale["app/" + b]), {}]
        })
    }]), angular.module("sacApp").run(["$templateCache", function (a) {
        "use strict";
        a.put("views/areasinteresse.html", '<div class="form-field">\r\n    <div class="form-label">\r\n        <span class="contato-caption"><b data-i18n="Label Interest Area"></b></span>\r\n    </div>\r\n    <div class="form-input">\r\n\r\n        <span data-us-spinner data-spinner-key="spinner-4">\r\n        </span>\r\n\r\n        <select id="areainteresse"\r\n                class="chosen-select"\r\n                name="areainteresse"\r\n                data-chosen\r\n                data-ng-model="atendimento.areainteresse"\r\n                data-ng-options="areainteresse.interest_area_description.title for areainteresse in areasinteresse track by areainteresse.id"\r\n                >\r\n            <option value="">Selecione a Área de Interesse</option>\r\n        </select>\r\n\r\n        <small ng-show="form.$submitted && form.areainteresse.$error.required">Selecione a Área de Interesse</small>\r\n\r\n    </div>\r\n</div>\r\n'), a.put("views/canais.html", '<div class="form-field-esq">\r\n    <div class="form-label">\r\n        <span class="contato-caption"><b data-i18n="Label Channel"></b></span>\r\n    </div>\r\n    <div class="form-input">\r\n\r\n        <span data-us-spinner data-spinner-key="spinner-3">\r\n        </span>\r\n\r\n        <select id="canal"\r\n                class="chosen-select"\r\n                name="canal"\r\n                data-chosen\r\n                data-ng-model="atendimento.canal"\r\n                data-ng-options="canal.channel_description.title for canal in canais track by canal.id"\r\n                >\r\n            <option value="">Selecione o Canal/Assunto</option>\r\n        </select>\r\n\r\n        <small ng-show="form.$submitted && form.canal.$error.required">Selecione o Canal/Assunto</small>\r\n\r\n    </div>\r\n</div>\r\n'), a.put("views/elements/admirador.html", '<div class="form-field-esq">\r\n    <div class="form-label">\r\n        <span class="contato-caption"><b>Nome:<br></b></span>\r\n    </div>\r\n    <div class="form-input">\r\n        <input type="text"\r\n               class="form-input-big"\r\n               name="name"\r\n               data-ng-model="atendimento.name"\r\n               value=""\r\n               maxlength="128"\r\n               required\r\n               autofocus />\r\n        <small ng-show="form.name.$invalid && form.name.$dirty"> Nome é obrigatório.</small>\r\n    </div>\r\n</div>\r\n<div class="form-field">\r\n    <div class="form-label">\r\n        <span class="contato-caption"><b>E-mail:</b><br></span>\r\n    </div>\r\n    <div class="form-input">\r\n        <input type="email"\r\n               class="form-input-big"\r\n               name="email"\r\n               data-ng-model="atendimento.email"\r\n               value=""\r\n               maxlength="128"\r\n               required />\r\n        <small ng-show="form.email.$invalid && form.email.$dirty"> E-mail é obrigatório.</small>\r\n    </div>\r\n</div>\r\n<div class="clear"></div>\r\n<div class="form-field-esq">\r\n    <div class="form-label">\r\n        <span class="contato-caption"><b>Telefone:</b><br></span>\r\n    </div>\r\n    <div class="form-input">\r\n        <input type="text"\r\n               class="form-input-big"\r\n               name="phone"\r\n               data-ng-model="atendimento.phone"\r\n               value=""\r\n               data-mask=\'(99) 9?9999-9999\'\r\n               maxlength="15"\r\n               required />\r\n        <small ng-show="form.phone.$invalid && form.phone.$dirty"> Telefone é obrigatório.</small>\r\n    </div>\r\n</div>\r\n'), a.put("views/elements/cliente.html", '<div class="form-field-esq">\r\n    <div class="form-label">\r\n        <span class="contato-caption"><b>Nome:<br></b></span>\r\n    </div>\r\n    <div class="form-input">\r\n        <input type="text"\r\n               class="form-input-big"\r\n               name="name"\r\n               data-ng-model="atendimento.name"\r\n               value=""\r\n               maxlength="128"\r\n               required\r\n               autofocus />\r\n        <small ng-show="form.name.$invalid && form.name.$dirty"> Nome é obrigatório.</small>\r\n    </div>\r\n</div>\r\n<div class="form-field">\r\n    <div class="form-label">\r\n        <span class="contato-caption"><b>E-mail:</b><br></span>\r\n    </div>\r\n    <div class="form-input">\r\n        <input type="email"\r\n               class="form-input-big"\r\n               name="email"\r\n               data-ng-model="atendimento.email"\r\n               value=""\r\n               maxlength="128"\r\n               required />\r\n        <small ng-show="form.email.$invalid && form.email.$dirty"> E-mail é obrigatório.</small>\r\n    </div>\r\n</div>\r\n<div class="clear"></div>\r\n<div class="form-field-esq">\r\n    <div class="form-label">\r\n        <span class="contato-caption"><b>Telefone:</b><br></span>\r\n    </div>\r\n    <div class="form-input">\r\n        <input type="text"\r\n               class="form-input-big"\r\n               name="phone"\r\n               data-ng-model="atendimento.phone"\r\n               value=""\r\n               data-mask=\'(99) 9?9999-9999\'\r\n               maxlength="15"\r\n               required />\r\n        <small ng-show="form.phone.$invalid && form.phone.$dirty"> Telefone é obrigatório.</small>\r\n    </div>\r\n</div>\r\n'), a.put("views/elements/comunidade.html", '<div class="form-field-esq">\r\n    <div class="form-label">\r\n        <span class="contato-caption"><b>Nome:<br></b></span>\r\n    </div>\r\n    <div class="form-input">\r\n        <input type="text"\r\n               class="form-input-big"\r\n               name="name"\r\n               data-ng-model="atendimento.name"\r\n               value=""\r\n               maxlength="128"\r\n               required\r\n               autofocus />\r\n        <small ng-show="form.$submitted && form.name.$error.required"> Nome é obrigatório.</small>\r\n    </div>\r\n</div>\r\n<div class="form-field">\r\n    <div class="form-label">\r\n        <span class="contato-caption"><b>E-mail:</b><br></span>\r\n    </div>\r\n    <div class="form-input">\r\n        <input type="email"\r\n               class="form-input-big"\r\n               name="email"\r\n               data-ng-model="atendimento.email"\r\n               value=""\r\n               maxlength="128"\r\n               required />\r\n        <small ng-show="form.$submitted && form.email.$error.required"> E-mail é obrigatório.</small>\r\n    </div>\r\n</div>\r\n<div class="clear"></div>\r\n<div class="form-field-esq">\r\n    <div class="form-label">\r\n        <span class="contato-caption"><b>Telefone:</b><br></span>\r\n    </div>\r\n    <div class="form-input">\r\n        <input type="text"\r\n               class="form-input-big"\r\n               name="phone"\r\n               data-ng-model="atendimento.phone"\r\n               value=""\r\n               data-mask=\'(99) 9?9999-9999\'\r\n               maxlength="15"\r\n               required />\r\n        <small ng-show="form.$submitted && form.phone.$error.required"> Telefone é obrigatório.</small>\r\n    </div>\r\n</div>\r\n'), a.put("views/elements/fornecedor.html", '<div class="form-field-esq">\r\n    <div class="form-label">\r\n        <span class="contato-caption"><b>Nome:<br></b></span>\r\n    </div>\r\n    <div class="form-input">\r\n        <input type="text"\r\n               class="form-input-big"\r\n               name="name"\r\n               data-ng-model="atendimento.name"\r\n               value=""\r\n               maxlength="128"\r\n               required\r\n               autofocus />\r\n        <small ng-show="form.$submitted && form.name.$error.required"> Nome é obrigatório.</small>\r\n    </div>\r\n</div>\r\n<div class="form-field">\r\n    <div class="form-label">\r\n        <span class="contato-caption"><b>E-mail:</b><br></span>\r\n    </div>\r\n    <div class="form-input">\r\n        <input type="email"\r\n               class="form-input-big"\r\n               name="email"\r\n               data-ng-model="atendimento.email"\r\n               value=""\r\n               maxlength="128"\r\n               required />\r\n        <small ng-show="form.$submitted && form.email.$error.required"> E-mail é obrigatório.</small>\r\n    </div>\r\n</div>\r\n\r\n<div class="clear"></div>\r\n\r\n<div class="form-field-esq">\r\n    <div class="form-label">\r\n        <span class="contato-caption"><b>Empresa:</b><br></span>\r\n    </div>\r\n    <div class="form-input">\r\n        <input type="text"\r\n               class="form-input-big"\r\n               name="empresa"\r\n               data-ng-model="atendimento.empresa"\r\n               value=""\r\n               maxlength="60"\r\n               required />\r\n        <small ng-show="form.$submitted && form.empresa.$error.required"> Empresa é obrigatório.</small>\r\n    </div>\r\n</div>\r\n<div class="form-field">\r\n    <div class="form-label">\r\n        <span class="contato-caption"><b>CNPJ:</b><br></span>\r\n    </div>\r\n    <div class="form-input">\r\n        <input type="text"\r\n               class="form-input-big"\r\n               name="doc"\r\n               data-ng-model="atendimento.doc"\r\n               value=""\r\n               data-mask=\'99.999.999/9999-99\'\r\n               maxlength="18"\r\n               required />\r\n        <small ng-show="form.$submitted && form.doc.$error.required"> CNPJ é obrigatório.</small>\r\n    </div>\r\n</div>\r\n\r\n<div class="clear"></div>\r\n\r\n<div class="form-field-esq">\r\n    <div class="form-label">\r\n        <span class="contato-caption"><b>Telefone:</b><br></span>\r\n    </div>\r\n    <div class="form-input">\r\n        <input type="text"\r\n               class="form-input-big"\r\n               name="phone"\r\n               data-ng-model="atendimento.phone"\r\n               value=""\r\n               data-mask=\'(99) 9?9999-9999\'\r\n               maxlength="15"\r\n               required />\r\n        <small ng-show="form.$submitted && form.phone.$error.required"> Telefone é obrigatório.</small>\r\n    </div>\r\n</div>\r\n<div class="form-field">\r\n    <div class="form-label">\r\n        <span class="contato-caption"><b>Endereço:<br></b></span>\r\n    </div>\r\n    <div class="form-input">\r\n        <input type="text"\r\n               class="form-input-big"\r\n               name="endereco"\r\n               data-ng-model="atendimento.endereco"\r\n               value=""\r\n               maxlength="255"\r\n               required\r\n               />\r\n        <small ng-show="form.$submitted && form.endereco.$error.required"> Endereço é obrigatório.</small>\r\n    </div>\r\n</div>\r\n\r\n<div class="clear"></div>\r\n\r\n<div class="form-field-esq">\r\n    <div class="form-label">\r\n        <span class="contato-caption"><b>Bairro:</b><br></span>\r\n    </div>\r\n    <div class="form-input">\r\n        <input type="text"\r\n               class="form-input-big"\r\n               name="bairro"\r\n               data-ng-model="atendimento.bairro"\r\n               value=""\r\n               maxlength="60"\r\n               required />\r\n        <small ng-show="form.$submitted && form.bairro.$error.required"> Bairro é obrigatório.</small>\r\n    </div>\r\n</div>\r\n<div class="form-field">\r\n    <div class="form-label">\r\n        <span class="contato-caption"><b>Cep:</b><br></span>\r\n    </div>\r\n    <div class="form-input">\r\n        <input type="text"\r\n               class="form-input-big"\r\n               name="cep"\r\n               data-ng-model="atendimento.cep"\r\n               value=""\r\n               maxlength="9"\r\n               data-mask=\'99999-999\'\r\n               required />\r\n        <small ng-show="form.$submitted && form.cep.$error.required"> Cep é obrigatório.</small>\r\n    </div>\r\n</div>\r\n\r\n<div class="clear"></div>\r\n\r\n<div class="form-field-esq">\r\n    <div class="form-label">\r\n        <span class="contato-caption"><b>Cidade:</b><br></span>\r\n    </div>\r\n    <div class="form-input">\r\n        <input type="text"\r\n               class="form-input-big small"\r\n               name="cidade"\r\n               data-ng-model="atendimento.cidade"\r\n               value=""\r\n               maxlength="60"\r\n               required />\r\n        <small ng-show="form.$submitted && form.cidade.$error.required"> Cidade é obrigatório.</small>\r\n    </div>\r\n</div>\r\n<div class="form-field">\r\n    <div class="form-label">\r\n        <span class="contato-caption"><b>Estados:</b><br></span>\r\n    </div>\r\n    <div class="form-input">\r\n        <select id="estado"\r\n                class="chosen-select"\r\n                name="estado"\r\n                data-chosen\r\n                data-ng-model="atendimento.estado"\r\n                data-ng-options="estado.name for estado in estados track by estado.id"\r\n                required >\r\n            <option value="">Selecione o Estado</option>\r\n        </select>\r\n        <small ng-show="form.$submitted && form.estado.$error.required"> Estado é obrigatório.</small>\r\n    </div>\r\n</div>\r\n\r\n<div class="clear"></div>\r\n'), a.put("views/elements/imprensa.html", '<div class="form-field-esq">\r\n    <div class="form-label">\r\n        <span class="contato-caption"><b>Nome:<br></b></span>\r\n    </div>\r\n    <div class="form-input">\r\n        <input type="text"\r\n               class="form-input-big"\r\n               name="name"\r\n               data-ng-model="atendimento.name"\r\n               value=""\r\n               maxlength="128"\r\n               required\r\n               autofocus />\r\n        <small ng-show="form.$submitted && form.name.$error.required"> Nome é obrigatório.</small>\r\n    </div>\r\n</div>\r\n<div class="form-field">\r\n    <div class="form-label">\r\n        <span class="contato-caption"><b>E-mail:</b><br></span>\r\n    </div>\r\n    <div class="form-input">\r\n        <input type="email"\r\n               class="form-input-big"\r\n               name="email"\r\n               data-ng-model="atendimento.email"\r\n               value=""\r\n               maxlength="128"\r\n               required />\r\n        <small ng-show="form.$submitted && form.email.$error.required"> E-mail é obrigatório.</small>\r\n    </div>\r\n</div>\r\n<div class="clear"></div>\r\n<div class="form-field-esq">\r\n    <div class="form-label">\r\n        <span class="contato-caption"><b>Veículo:</b><br></span>\r\n    </div>\r\n    <div class="form-input">\r\n        <input type="text"\r\n               class="form-input-big"\r\n               name="veiculo"\r\n               data-ng-model="atendimento.veiculo"\r\n               value=""\r\n               maxlength="45"\r\n               required />\r\n        <small ng-show="form.$submitted && form.veiculo.$error.required"> Veículo é obrigatório.</small>\r\n    </div>\r\n</div>\r\n<div class="form-field">\r\n    <div class="form-label">\r\n        <span class="contato-caption"><b>Telefone:</b><br></span>\r\n    </div>\r\n    <div class="form-input">\r\n        <input type="text"\r\n               class="form-input-big"\r\n               name="phone"\r\n               data-ng-model="atendimento.phone"\r\n               value=""\r\n               data-mask=\'(99) 9?9999-9999\'\r\n               maxlength="15"\r\n               required />\r\n        <small ng-show="form.$submitted && form.phone.$error.required"> Telefone é obrigatório.</small>\r\n    </div>\r\n</div>\r\n\r\n'), a.put("views/faq.html", '<hgroup class="common-group">\r\n    <h2>SAC Deux</h2>\r\n</hgroup>\r\n<div class="search">\r\n    <p data-i18n="Faq Message"></p>\r\n    <div class="clear"></div>\r\n    <label for="searchFaq" data-i18n="Faq Search"></label>\r\n    <input type="text"\r\n           id="searchFaq"\r\n           title="Busca"\r\n           data-i18n="i18n-placeholder"\r\n           placeholder="Faq Search Placeholder"\r\n           data-ng-model="searchFaq"\r\n           data-ng-change="loadFaqs()"\r\n           data-ng-focus="" />\r\n    <button data-ladda="loadingSearch" class="send-btn" data-ng-click="loadFaqs()">\r\n        <span data-i18n="Button Search"></span>\r\n    </button>\r\n</div>\r\n\r\n<p class="faq" id="faqTitle" data-i18n="Faq">Perguntas mais Acessadas</p>\r\n\r\n<!-- Resultados da busca -->\r\n<div class="common-accordion-box" data-accordion data-ng-repeat="faq in faqs" data-id="{{faq.id}}">\r\n    <span class="icon-angle-down"></span>\r\n    <span class="icon-angle-up"></span>\r\n    <p class="title" data-ng-bind-html="faq.title | highlight:searchFaq">\r\n        {{faq.title}}\r\n    </p>\r\n    <div class="accordion-content" data-ng-bind-html="faq.text | highlight:searchFaq">\r\n        {{faq.text}}\r\n    </div>\r\n</div>\r\n\r\n<p id="faqZeroResults" data-i18n="Faq Zero Results"></p>\r\n\r\n<p class="or" data-i18n="Label Form"></p>\r\n\r\n<!-- Formulário de contato -->\r\n<div class="form-wrapper">\r\n    <div class="contact-form">\r\n        <form name="form" role="form" class="search" ng-submit="register(form)" validate>\r\n\r\n            <!-- view do select de identificacao -->\r\n            <div class="form-field-esq">\r\n                <div class="form-label">\r\n                    <span class="contato-caption"><b data-i18n="Label Identification"></b></span>\r\n                </div>\r\n                <div class="form-input">\r\n\r\n                    <span data-us-spinner data-spinner-key="spinner-2">\r\n                    </span>\r\n                    <select id="identificacao"\r\n                            class="chosen-select"\r\n                            name="identificacao"\r\n                            data-chosen\r\n                            data-ng-model="atendimento.identificacao"\r\n                            data-ng-options="identificacao.identification_description.title for identificacao in identificacoes track by identificacao.id"\r\n                            required >\r\n                        <option value="">Selecione a Identificação</option>\r\n                    </select>\r\n\r\n                    <small ng-show="form.$submitted && form.identificacao.$error.required"> Identificação obrigatório.</small>\r\n\r\n                </div>\r\n            </div>\r\n            <div class="clear"></div>\r\n\r\n            <!-- view do formulário de identificação -->\r\n            <div data-ng-include="atendimento.identificacao.form"></div>\r\n            <div class="clear"></div>\r\n\r\n            <!-- view do select de canais -->\r\n            <div data-ng-include="templates.canal"></div>\r\n\r\n            <!-- view do select de area de interesse -->\r\n            <div data-ng-include="templates.areainteresse"></div>\r\n\r\n            <div class="clear"></div>\r\n\r\n            <div class="form-field-esq">\r\n                <div class="form-label">\r\n                    <span class="contato-caption"><b data-i18n="Label Message"></b><br></span>\r\n                </div>\r\n                <div class="form-input">\r\n                    <textarea id="mensagem"\r\n                              class="form-textarea"\r\n                              name="message"\r\n                              data-ng-model="atendimento.message"\r\n                              required="">\r\n                    </textarea>\r\n                    <small ng-show="form.$submitted && form.message.$error.required"> A mensagem é obrigatório.</small>\r\n                </div>\r\n            </div>\r\n            <div class="clear"></div>\r\n            <div class="form-button">\r\n                <div class="container-send-button">\r\n                    <button data-ladda="loading" type="submit" class="send-btn">\r\n                        <span data-i18n="Button Send"></span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n'), a.put("views/login.html", '<div class="login">\r\n    <hgroup class="common-group">\r\n        <h2>SAC Deux</h2>\r\n    </hgroup>\r\n    <p>Acesse seu atendimento preenchendo os campos abaixo.</p>\r\n    <div class="form-wrapper">\r\n        <div class="contact-form">\r\n            <div class="{{response.classe}}" ng-bind-html="response.message"></div>\r\n            <form name="form" role="form" class="search" data-ng-submit="login(form)" validate>\r\n                <div class="form-field-esq">\r\n                    <div class="form-label">\r\n                        <span class="contato-caption"><b>Digite seu E-mail:</b><br></span>\r\n                    </div>\r\n                    <div class="form-input">\r\n                        <input type="email"\r\n                               class="form-input-big mask-email"\r\n                               name="email"\r\n                               data-ng-model="atendimento.email"\r\n                               value=""\r\n                               autofocus\r\n                               required />\r\n                        <small ng-show="form.$submitted && form.email.$error.required"> O e-mail é obrigatório.</small>\r\n                    </div>\r\n                </div>\r\n                <div class="form-field">\r\n                    <div class="form-label">\r\n                        <span class="contato-caption"><b>Digite Nº do atendimento:<br></b></span>\r\n                    </div>\r\n                    <div class="form-input">\r\n                        <input type="text"\r\n                               class="form-input-big"\r\n                               name="protocolo"\r\n                               data-ng-model="atendimento.protocolo"\r\n                               value=""\r\n                               required\r\n                                />\r\n                        <div class="form-button">\r\n                            <div class="container-send-button">\r\n                                <button type="submit" data-ladda="loading" class="send-btn">\r\n                                    <span>Enviar</span>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <small ng-show="form.$submitted && form.protocolo.$error.required"> O protocolo é obrigatório.</small>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n'),
            a.put("views/protocolo.html", '<div class="protocolo">\r\n    <hgroup class="common-group">\r\n        <h2>SAC Deux</h2>\r\n    </hgroup>\r\n    <p data-ng-show="!atendimento">Protocolo não encontrado.</p>\r\n    <p>Os detalhes do seu atendimento estão visíveis abaixo.</p>\r\n    <div data-ng-show="atendimento">\r\n        <span>Histórico</span>\r\n        <span class="text-right">Nº do Atendimento <b>{{atendimento.code}}</b> </span>\r\n        <div class="answer client">\r\n            <span>{{atendimento.name}}</span>\r\n            <small>{{atendimento.created_at | timestamp | date:"dd/MM/yyyy \'-\' HH:mm:ss\'h\'":pt-br}}</small>\r\n            <p>\r\n                {{atendimento.message}}\r\n            </p>\r\n        </div>\r\n        <div data-ng-repeat="answer in atendimento.answer">\r\n            <div class="answer user">\r\n                <img data-ng-src="{{logo}}" alt="logo" />\r\n                <span>{{answer.user.name}}</span>\r\n                <small>{{answer.created_at | timestamp | date:"dd/MM/yyyy \'-\' HH:mm:ss\'h\'":pt-br}}</small>\r\n                <p>\r\n                    {{answer.message}}\r\n                </p>\r\n            </div>\r\n            <div class="answer client" data-ng-show="answer.feedback">\r\n                <span>{{atendimento.name}}</span>\r\n                <small>{{answer.updated_at | timestamp | date:"dd/MM/yyyy \'-\' HH:mm:ss\'h\'":pt-br}}</small>\r\n                <p>\r\n                    {{answer.feedback}}\r\n                </p>\r\n                <div data-ng-show="answer.file">\r\n                    <label>Anexo</label>\r\n                    <a href="{{url}}download/atendimento/{{answer.file}}">\r\n                        {{answer.file}}\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <div data-ng-if="answer.feedback == null && answer.rating == \'Não\'">\r\n                <form name="form" role="form" class="protocolo" data-ng-submit="save(form)" novalidate>\r\n                    <div data-ng-show="showAnswer">\r\n                        <span><b>O problema foi resolvido ?</b></span>\r\n                        <button type="button" data-ng-click="sim(answer)">\r\n                            <span>Sim</span>\r\n                        </button>\r\n                        <button type="button" data-ng-click="nao(answer)">\r\n                            <span>Não</span>\r\n                        </button>\r\n                        <div class="clear"></div>\r\n                    </div>\r\n                    <div data-ng-show="showFeedback">\r\n                        <span data-ng-if="!rating">Descreva o motivo:</span>\r\n                        <span data-ng-if="rating">Avalie este atendimento:</span>\r\n                        <textarea class="form-textarea" id="feedback" name="feedback" data-ng-model="atendimento.feedback" data-ng-required="!rating"></textarea>\r\n                        <small ng-show="form.$submitted && form.feedback.$error.required && !rating"> Mensagem obrigatória.</small>\r\n                        <div class="clear"></div>\r\n                    </div>\r\n                    <div data-ng-show="showFeedback && !rating">\r\n                        <div class="upload" ngf-select ngf-change="upload($files)" ngf-multiple="multiple">\r\n                            <label>{{filename}}</label>\r\n                            <span data-ladda="loadingUpload">Anexar Arquivo</span>\r\n                        </div>\r\n                        <div class="progress">\r\n                            <div class="porcent" style="width: {{progress}}%;"></div>\r\n                        </div>\r\n                        <div class="clear"></div>\r\n                    </div>\r\n                    <div data-ng-show="showFeedback">\r\n                        <button data-ladda="loading" type="submit">\r\n                            <span data-ng-if="!rating">Enviar</span>\r\n                            <span data-ng-if="rating">Finalizar Atendimento</span>\r\n                        </button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        <div data-ng-show="ratingShow" class="rating">\r\n            <p>Atendimento Finalizado</p>\r\n            <!--small>Obrigado.</small-->\r\n        </div>\r\n    </div>\r\n</div>\r\n')
    }]), angular.module("sacApp").controller("FaqController", ["$scope", "$location", "$timeout", "$window", "$log", "SweetAlert", "focus", "usSpinnerService", "FaqModel", "IdentificacaoModel", "CanalModel", "AreaInteresseModel", "AtendimentoModel", function (a, b, c, d, e, f, g, h, i, j, k, l, m) {
        var n = !1;
        a.response = {}, a.atendimento = {}, a.faqs = [], a.identificaoes = [], a.canais = [], a.loading = !1, a.estados = [{
            id: 1,
            uf: "AC",
            name: "Acre"
        }, {
            id: 2,
            uf: "AL",
            name: "Alagoas"
        }, {
            id: 3,
            uf: "AM",
            name: "Amazonas"
        }, {
            id: 4,
            uf: "AP",
            name: "Amapá"
        }, {
            id: 5,
            uf: "BA",
            name: "Bahia"
        }, {
            id: 6,
            uf: "CE",
            name: "Ceará"
        }, {
            id: 7,
            uf: "DF",
            name: "Distrito Federal"
        }, {
            id: 8,
            uf: "ES",
            name: "Espírito Santo"
        }, {
            id: 9,
            uf: "GO",
            name: "Goiás"
        }, {
            id: 10,
            uf: "MA",
            name: "Maranhão"
        }, {
            id: 11,
            uf: "MG",
            name: "Minas Gerais"
        }, {
            id: 12,
            uf: "MS",
            name: "Mato Grosso do Sul"
        }, {
            id: 13,
            uf: "MT",
            name: "Mato Grosso"
        }, {
            id: 14,
            uf: "PA",
            name: "Pará"
        }, {
            id: 15,
            uf: "PB",
            name: "Paraíba"
        }, {
            id: 16,
            uf: "PE",
            name: "Pernambuco"
        }, {
            id: 17,
            uf: "PI",
            name: "Piauí"
        }, {
            id: 18,
            uf: "PR",
            name: "Paraná"
        }, {
            id: 19,
            uf: "RJ",
            name: "Rio de Janeiro"
        }, {
            id: 20,
            uf: "RN",
            name: "Rio Grande do Norte"
        }, {
            id: 21,
            uf: "RO",
            name: "Rondônia"
        }, {
            id: 22,
            uf: "RR",
            name: "Roraima"
        }, {
            id: 23,
            uf: "RS",
            name: "Rio Grande do Sul"
        }, {
            id: 24,
            uf: "SC",
            name: "Santa Catarina"
        }, {
            id: 25,
            uf: "SE",
            name: "Sergipe"
        }, {
            id: 26,
            uf: "SP",
            name: "São Paulo"
        }, {
            id: 27,
            uf: "TO",
            name: "Tocantins"
        }], a.templates = {}, a.templates.identificacao = "", a.templates.canal = "", a.templates.areainteresse = "", a.templates.form = {}, a.templates.form.identificacao = "", a.searchFaq = "", a.searchFaqDisabled = !1, a.loadingSearch = !1, h.spin("spinner-2"), h.spin("spinner-3"), g("searchFaq"), a.atendimento.identificacao = "", j.query(function (b) {
            a.identificacoes = b, h.stop("spinner-2"), a.atendimento.identificacao = a.identificacoes[0]
        }), a.atendimento.canal = "", k.query(function (b) {
            a.canais = b, h.stop("spinner-3"), a.templates.canal = "views/canais.html"
        }), a.atendimento.areainteresse = "", l.query(function (b) {
            a.areasinteresse = b, a.templates.areainteresse = "views/areasinteresse.html"
        }), i.query({
            search: "topFaq"
        }, function (b) {
            d.jQuery("#faqZeroResults").hide(), d.jQuery("#faqTitle").show(), a.faqs = b, a.searchFaqDisabled = !1, n = !1, a.loadingSearch = !1
        }), a.loadFaqs = function () {
            d.jQuery("#faqZeroResults").hide(), d.jQuery("#faqTitle").show(), "" === a.searchFaq && (a.faqs = []), (a.searchFaq.length >= 4 || "" === a.searchFaq) && !n && (n = !0, a.searchFaqDisabled = !0, a.loadingSearch = !0, i.query({
                search: "" === a.searchFaq.length ? "topFaq" : a.searchFaq
            }, function (b) {
                a.faqs = b, a.searchFaqDisabled = !1, g("searchFaq"), n = !1, a.loadingSearch = !1, 0 === b.length && (d.jQuery("#faqZeroResults").show(), d.jQuery("#faqTitle").hide())
            }))
        }, a.register = function (c) {
            if (a.loading = !0, c.$invalid === !1) {
                var d = {
                    id_identification: a.atendimento.identificacao.id,
                    id_channel: a.atendimento.canal ? a.atendimento.canal.id : null,
                    id_interest_area: a.atendimento.areainteresse ? a.atendimento.areainteresse.id : null,
                    name: a.atendimento.name,
                    phone: a.atendimento.phone,
                    email: a.atendimento.email,
                    message: a.atendimento.message,
                    company: a.atendimento.empresa || null,
                    company_cnpj: a.atendimento.doc || null,
                    communication_vehicle: a.atendimento.veiculo || null,
                    address: a.atendimento.endereco || null,
                    suburb: a.atendimento.bairro || null,
                    zip_code: a.atendimento.cep || null,
                    city: a.atendimento.cidade || null,
                    state: a.atendimento.estado ? a.atendimento.estado.id : null
                };
                return m.save(d, function (b) {
                    b.status === !0 ? (a.protocolo = b.atendimento.code, a.loading = !1, d.code = b.atendimento.code, m.email(d), f.success(b.message, b.submessage), a.reset(c)) : (a.loading = !1, f.error("Ocorreu um erro", b.message))
                }, function (c) {
                    a.loading = !1, a.errors = {}, c || b.path("/atendimento")
                })
            }
            a.loading = !1
        }, a.reset = function (b) {
            a.searchFaq = "", a.faqs = [], a.atendimento.identificacao = a.identificacoes[0], a.atendimento.name = "", a.atendimento.email = "", a.atendimento.phone = "", a.atendimento.canal = "", a.atendimento.areainteresse = "", a.atendimento.message = "", b.$setPristine(), b.$setUntouched()
        }
    }]).factory("focus", ["$timeout", function (a) {
        return function (b) {
            a(function () {
                var a = document.getElementById(b);
                a && a.focus()
            })
        }
    }]).filter("highlight", ["$sce", function (a) {
        var b = function (a) {
            var b = ["aáàãäâ", "eéèëê", "iíìïî", "oóòõöô", "uúùüû", "cç"];
            for (var c in b) a = a.replace(new RegExp("[" + b[c] + "]", "g"), "[" + b[c] + "]");
            return a
        },
            c = function (a, c) {
                return c && (c = c.replace(/[^0-9A-Za-záéíóúàèìòùâêîôûãõç\s]/gi, "").split(" ").join("|"), a = a.replace(new RegExp("(" + b(c) + ")", "gi"), '<span class="search">$1</span>')), a
            };
        return function (b, d) {
            return a.trustAsHtml(c(b, d))
        }
    }]), angular.module("sacApp").factory("IdentificacaoModel", ["$resource", "API", function (a, b) {
        return a(b + ":controller/:resource", {
            controller: "identificacao",
            resource: "@resource"
        })
    }]), angular.module("sacApp").factory("FaqModel", ["$resource", "API", function (a, b) {
        return a(b + ":controller/:resource", {
            controller: "faq",
            resource: "@resource",
            search: "@search"
        }, {
            query: {
                method: "GET",
                isArray: !0,
                params: {
                    resource: "index",
                    search: "search"
                }
            }
        })
    }]), angular.module("sacApp").directive("accordion", ["API", function (a) {
        return {
            restrict: "A",
            link: function (b, c) {
                c.find(".title").click(function () {
                    if ($(this).parent().toggleClass("openned"), $(this).siblings('[class^="icon-angle"]').stop(!0).fadeToggle({
                        duration: 100
                    }), $(this).siblings(".accordion-content").stop(!0).slideToggle({
                        duration: 500,
                        easing: "easeOutExpo"
                    }), $(this).parent().hasClass("openned")) {
                        var b = $(this).parent().data("id"),
                            c = $(this).parent();
                        0 !== parseInt(b) && $.ajax({
                            type: "GET",
                            url: a + "faq/add-view",
                            data: {
                                id: b
                            },
                            dataType: "json",
                            complete: function () {
                                c.data("id", 0)
                            }
                        })
                    }
                })
            }
        }
    }]), angular.module("sacApp").factory("AtendimentoModel", ["$resource", "API", function (a, b) {
        return a(b + ":controller/:resource/:protocolo", {
            controller: "atendimento",
            resource: "@resource",
            protocolo: "@protocolo"
        }, {
            query: {
                method: "GET",
                params: {
                    resource: "index",
                    protocolo: "protocolo"
                }
            },
            save: {
                method: "POST",
                params: {
                    resource: "index"
                }
            },
            email: {
                method: "POST",
                params: {
                    resource: "email"
                }
            }
        })
    }]), angular.module("sacApp").factory("CanalModel", ["$resource", "API", function (a, b) {
        return a(b + ":controller/:resource", {
            controller: "canal",
            resource: "@resource"
        })
    }]), angular.module("sacApp").factory("AreaInteresseModel", ["$resource", "API", function (a, b) {
        return a(b + ":controller/:resource", {
            controller: "area-interesse",
            resource: "@resource"
        })
    }]), angular.module("sacApp").controller("ProtocoloController", ["$scope", "$location", "$routeParams", "$timeout", "$cookies", "$log", "SweetAlert", "md5", "Upload", "API", "AtendimentoModel", "ProtocoloModel", function (a, b, c, d, e, f, g, h, i, j, k, l) {
        a.response = {}, a.showAnswer = !1, a.showFeedback = !1, a.loading = !1, a.loadingUpload = !1, a.url = j.replace(/api\//, ""), a.logo = j.replace(/api\//, "") + "application/userfiles/silhouette.png";
        var m = 0,
            n = null;
        a.rating = !1, a.ratingShow = !1, a.answer = null, a.atendimento = {};
        var o = function () {
            k.query({
                protocolo: c.protocolo
            }, function (f) {
                if (f.code) {
                    if (a.atendimento = f, a.response.message || (a.showAnswer = !0), angular.forEach(a.atendimento.answer, function (b) {
                        null === b.feedback && "Não" === b.rating && m++ , "Sim" === b.rating && (a.rating = !0)
                    }), 6 === parseInt(a.atendimento.id_status, 10) && a.rating && (a.ratingShow = !0), 0 !== m || !e.sacAppLogin || a.answer || a.rating || d(o, 5e3), c.protocolo && !e.sacAppLogin || e.sacAppLogin !== h.createHash(a.atendimento.email + a.atendimento.code || "")) return b.path("/login/" + c.protocolo), !1
                } else b.path("/login")
            })
        };
        o(), a.sim = function (b) {
            a.rating = !0, a.answer = b, a.showFeedback = !0, a.showAnswer = !0
        }, a.nao = function (b) {
            a.rating = !1, a.answer = b, a.showFeedback = !0, a.showAnswer = !0
        }, a.log = "", a.$watch("files", function () {
            a.upload(a.files)
        }), a.filename = null, a.progress = 0;
        var p = function (b) {
            var c = parseInt(100 * b.loaded / b.total);
            a.progress = c, a.filename = b.config.file.name, a.loadingUpload = !1
        },
            q = function (b) {
                a.response = b, a.loadingUpload = !1, a.progress = 0, a.response.status === !0 ? a.update() : a.loading = !1
            },
            r = function (b) {
                a.response = b, a.loadingUpload = !1, a.progress = 0
            };
        a.upload = function (b) {
            if (b && b.length)
                for (var c = 0; c < b.length; c++) n = b[c], a.filename = n.name
        }, a.save = function (b) {
            a.loading = !0, b.$invalid === !1 ? (n ? (a.loadingUpload = !0, i.upload({
                url: j + "atendimento/file/" + a.answer.id,
                fields: {},
                file: n
            }).progress(p).success(q).error(r)) : a.update(), d(o, 1e4)) : a.loading = !1
        }, a.update = function () {
            var c = {
                rating: a.rating ? "Sim" : "Não",
                feedback: a.atendimento.feedback,
                id_call: a.atendimento.id
            };
            l.update({
                id: a.answer.id
            }, c, function (b) {
                b.status === !0 ? (a.answer = null, a.showFeedback = !1, a.showAnswer = !1, g.success(b.message, b.submessage)) : g.error("Ocorreu um erro", b.message), a.loading = !1
            }, function (c) {
                a.loading = !1, a.errors = {}, c || b.path("/atendimento")
            })
        }
    }]).filter("timestamp", function () {
        return function (a) {
            return Date.parse(angular.isString(a) ? a.replace(/\-/g, "/") : a)
        }
    }), angular.module("sacApp").factory("ProtocoloModel", ["$resource", "API", function (a, b) {
        return a(b + ":controller/:resource/:id", {
            controller: "atendimento",
            resource: "@resource",
            id: "@id"
        }, {
            update: {
                method: "PUT",
                params: {
                    resource: "index"
                }
            }
        })
    }]), angular.module("sacApp").directive("chosen", ["$window", function (a) {
        return {
            restrict: "A",
            link: function (b, c, d) {
                b.$watch(d.chosen, function () {
                    c.trigger("chosen:updated")
                }), b.$watch(d.ngModel, function () {
                    c.trigger("chosen:updated")
                }), c.chosen().change(function () {
                    b.atendimento.identificacao.identification_description.link && a.open(b.atendimento.identificacao.identification_description.link)
                })
            }
        }
    }]), angular.module("ngSweetAlert", []).factory("SweetAlert", ["$rootScope", function (a) {
        var b = window.swal;
        b.setDefaults({
            confirmButtonColor: "#f07d00"
        });
        var c = {
            swal: function (c, d, e) {
                a.$evalAsync(function () {
                    "function" == typeof d ? b(c, function (b) {
                        a.$evalAsync(function () {
                            d(b)
                        })
                    }, e) : b(c, d, e)
                })
            },
            success: function (c, d) {
                a.$evalAsync(function () {
                    b(c, d, "success")
                })
            },
            error: function (c, d) {
                a.$evalAsync(function () {
                    b(c, d, "error")
                })
            },
            warning: function (c, d) {
                a.$evalAsync(function () {
                    b(c, d, "warning")
                })
            },
            info: function (c, d) {
                a.$evalAsync(function () {
                    b(c, d, "info")
                })
            }
        };
        return c
    }]), angular.module("sacApp").controller("LoginController", ["$scope", "$location", "$routeParams", "$cookies", "$log", "md5", "LoginModel", function (a, b, c, d, e, f, g) {
        a.response = {}, a.atendimento = {}, a.atendimento.protocolo = c.protocolo, a.loading = !1, a.login = function (c) {
            if (a.loading = !0, c.$invalid === !1) {
                var e = {
                    email: a.atendimento.email,
                    protocolo: a.atendimento.protocolo
                };
                a.response = g.login(e, function (c) {
                    c.status && (d.sacAppLogin = f.createHash(a.atendimento.email + a.atendimento.protocolo), b.path("/protocolo/" + a.atendimento.protocolo)), a.loading = !1
                })
            } else a.loading = !1
        }
    }]), angular.module("sacApp").service("LoginModel", ["$resource", "API", function (a, b) {
        return a(b + ":controller/:resource", {
            controller: "atendimento",
            resource: "@resource"
        }, {
            login: {
                method: "GET",
                params: {
                    resource: "login"
                }
            }
        })
    }]), angular.module("sacApp").factory("localize", ["$http", "$rootScope", "$window", function (a, b, c) {
        var d;
        return d = {
            language: "",
            url: void 0,
            resourceFileLoaded: !1,
            successCallback: function (a) {
                return d.dictionary = a, d.resourceFileLoaded = !0, b.$broadcast("localizeResourcesUpdated")
            },
            setLanguage: function (a) {
                return d.language = a.toLowerCase().split("-")[0], d.initLocalizedResources()
            },
            setUrl: function (a) {
                return d.url = a, d.initLocalizedResources()
            },
            buildUrl: function () {
                return d.language || (d.language = (c.navigator.userLanguage || c.navigator.language).toLowerCase(), d.language = d.language.split("-")[0]), "i18n/resources-locale_" + d.language + ".js"
            },
            initLocalizedResources: function () {
                var c;
                return c = d.url || d.buildUrl(), a({
                    method: "GET",
                    url: c,
                    cache: !1
                }).success(d.successCallback).error(function () {
                    return b.$broadcast("localizeResourcesUpdated")
                })
            },
            getLocalizedString: function (a) {
                var b, c;
                return b = void 0, d.dictionary && a ? (c = a.toLowerCase(), b = "" === d.dictionary[c] ? a : d.dictionary[c]) : b = a, b
            }
        }, d.initLocalizedResources(), d
    }]), angular.module("sacApp").controller("LangController", ["$scope", "localize", function (a, b) {
        a.lang = "English", a.setLang = function (c) {
            switch (c) {
                case "English":
                    b.setLanguage("EN-US");
                    break;
                case "Español":
                    b.setLanguage("ES-ES");
                    break;
                case "日本語":
                    b.setLanguage("JA-JP");
                    break;
                case "中文":
                    b.setLanguage("ZH-TW");
                    break;
                case "Deutsch":
                    b.setLanguage("DE-DE");
                    break;
                case "français":
                    b.setLanguage("FR-FR");
                    break;
                case "Italiano":
                    b.setLanguage("IT-IT");
                    break;
                case "Portugal":
                    b.setLanguage("PT-BR");
                    break;
                case "Русский язык":
                    b.setLanguage("RU-RU");
                    break;
                case "한국어":
                    b.setLanguage("KO-KR")
            }
            a.lang = c
        }
    }]), angular.module("sacApp").directive("i18n", ["localize", function (a) {
        var b;
        return b = {
            restrict: "EA",
            updateText: function (b, c, d) {
                var e;
                return e = void 0, "i18n-placeholder" === c ? (e = a.getLocalizedString(d), b.attr("placeholder", e)) : c.length >= 1 ? (e = a.getLocalizedString(c), b.text(e)) : void 0
            },
            link: function (a, c, d) {
                return a.$on("localizeResourcesUpdated", function () {
                    return b.updateText(c, d.i18n, d.placeholder)
                }), d.$observe("i18n", function (a) {
                    return b.updateText(c, a, d.placeholder)
                })
            }
        }
    }]);