/**
 * Minified by jsDelivr using Terser v5.3.5.
 * Original file: /npm/vue-scrollto@2.20.0/vue-scrollto.js
 * https://github.com/rigor789/vue-scrollto
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*!
  * vue-scrollto v2.20.0
  * (c) 2019 Randjelovic Igor
  * @license MIT
  */
!function(n, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (n = "undefined" != typeof globalThis ? globalThis : n || self)["vue-scrollto"] = e()
}(this, (function() {
    "use strict";
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
            return typeof n
        }
        : function(n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        }
        )(e)
    }
    function e() {
        return (e = Object.assign || function(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = arguments[e];
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o])
            }
            return n
        }
        ).apply(this, arguments)
    }
    var t = .1
      , o = "function" == typeof Float32Array;
    function r(n, e) {
        return 1 - 3 * e + 3 * n
    }
    function i(n, e) {
        return 3 * e - 6 * n
    }
    function u(n) {
        return 3 * n
    }
    function a(n, e, t) {
        return ((r(e, t) * n + i(e, t)) * n + u(e)) * n
    }
    function f(n, e, t) {
        return 3 * r(e, t) * n * n + 2 * i(e, t) * n + u(e)
    }
    function l(n) {
        return n
    }
    var c = function(n, e, r, i) {
        if (!(0 <= n && n <= 1 && 0 <= r && r <= 1))
            throw new Error("bezier x values must be in [0, 1] range");
        if (n === e && r === i)
            return l;
        for (var u = o ? new Float32Array(11) : new Array(11), c = 0; c < 11; ++c)
            u[c] = a(c * t, n, r);
        function s(e) {
            for (var o = 0, i = 1; 10 !== i && u[i] <= e; ++i)
                o += t;
            --i;
            var l = o + (e - u[i]) / (u[i + 1] - u[i]) * t
              , c = f(l, n, r);
            return c >= .001 ? function(n, e, t, o) {
                for (var r = 0; r < 4; ++r) {
                    var i = f(e, t, o);
                    if (0 === i)
                        return e;
                    e -= (a(e, t, o) - n) / i
                }
                return e
            }(e, l, n, r) : 0 === c ? l : function(n, e, t, o, r) {
                var i, u, f = 0;
                do {
                    (i = a(u = e + (t - e) / 2, o, r) - n) > 0 ? t = u : e = u
                } while (Math.abs(i) > 1e-7 && ++f < 10);
                return u
            }(e, o, o + t, n, r)
        }
        return function(n) {
            return 0 === n ? 0 : 1 === n ? 1 : a(s(n), e, i)
        }
    }
      , s = {
        ease: [.25, .1, .25, 1],
        linear: [0, 0, 1, 1],
        "ease-in": [.42, 0, 1, 1],
        "ease-out": [0, 0, .58, 1],
        "ease-in-out": [.42, 0, .58, 1]
    }
      , d = !1;
    try {
        var p = Object.defineProperty({}, "passive", {
            get: function() {
                d = !0
            }
        });
        window.addEventListener("test", null, p)
    } catch (n) {}
    var y = function(n) {
        return "string" != typeof n ? n : document.querySelector(n)
    }
      , v = function(n, e, t) {
        var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
            passive: !1
        };
        e instanceof Array || (e = [e]);
        for (var r = 0; r < e.length; r++)
            n.addEventListener(e[r], t, !!d && o)
    }
      , m = function(n, e, t) {
        e instanceof Array || (e = [e]);
        for (var o = 0; o < e.length; o++)
            n.removeEventListener(e[o], t)
    }
      , w = function(n) {
        var e = 0
          , t = 0;
        do {
            e += n.offsetTop || 0,
            t += n.offsetLeft || 0,
            n = n.offsetParent
        } while (n);
        return {
            top: e,
            left: t
        }
    }
      , b = ["mousedown", "wheel", "DOMMouseScroll", "mousewheel", "keyup", "touchmove"]
      , g = {
        container: "body",
        duration: 500,
        lazy: !0,
        easing: "ease",
        offset: 0,
        force: !0,
        cancelable: !0,
        onStart: !1,
        onDone: !1,
        onCancel: !1,
        x: !1,
        y: !0
    };
    function h(n) {
        g = e({}, g, n)
    }
    var T = function() {
        var e, t, o, r, i, u, a, f, l, d, p, h, T, S, L, O, E, P, x, A, C, D, V, j, z, M, F, H = function(n) {
            f && (V = n,
            A = !0)
        };
        function N(n) {
            var e = n.scrollTop;
            return "body" === n.tagName.toLowerCase() && (e = e || document.documentElement.scrollTop),
            e
        }
        function k(n) {
            var e = n.scrollLeft;
            return "body" === n.tagName.toLowerCase() && (e = e || document.documentElement.scrollLeft),
            e
        }
        function q() {
            C = w(t),
            D = w(e),
            h && (L = D.left - C.left + u,
            P = L - S),
            T && (E = D.top - C.top + u,
            x = E - O)
        }
        function $(n) {
            if (A)
                return B();
            z || (z = n),
            i || q(),
            M = n - z,
            F = Math.min(M / o, 1),
            F = j(F),
            G(t, O + x * F, S + P * F),
            M < o ? window.requestAnimationFrame($) : B()
        }
        function B() {
            A || G(t, E, L),
            z = !1,
            m(t, b, H),
            A && p && p(V, e),
            !A && d && d(e)
        }
        function G(n, e, t) {
            T && (n.scrollTop = e),
            h && (n.scrollLeft = t),
            "body" === n.tagName.toLowerCase() && (T && (document.documentElement.scrollTop = e),
            h && (document.documentElement.scrollLeft = t))
        }
        return function(m, w) {
            var L = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if ("object" === n(w) ? L = w : "number" == typeof w && (L.duration = w),
            !(e = y(m)))
                return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: " + m);
            if (t = y(L.container || g.container),
            o = L.hasOwnProperty("duration") ? L.duration : g.duration,
            i = L.hasOwnProperty("lazy") ? L.lazy : g.lazy,
            r = L.easing || g.easing,
            u = L.hasOwnProperty("offset") ? L.offset : g.offset,
            a = L.hasOwnProperty("force") ? !1 !== L.force : g.force,
            f = L.hasOwnProperty("cancelable") ? !1 !== L.cancelable : g.cancelable,
            l = L.onStart || g.onStart,
            d = L.onDone || g.onDone,
            p = L.onCancel || g.onCancel,
            h = void 0 === L.x ? g.x : L.x,
            T = void 0 === L.y ? g.y : L.y,
            "function" == typeof u && (u = u(e, t)),
            S = k(t),
            O = N(t),
            q(),
            A = !1,
            !a) {
                var C = "body" === t.tagName.toLowerCase() ? document.documentElement.clientHeight || window.innerHeight : t.offsetHeight
                  , D = O
                  , z = D + C
                  , M = E - u
                  , F = M + e.offsetHeight;
                if (M >= D && F <= z)
                    return void (d && d(e))
            }
            if (l && l(e),
            x || P)
                return "string" == typeof r && (r = s[r] || s.ease),
                j = c.apply(c, r),
                v(t, b, H, {
                    passive: !0
                }),
                window.requestAnimationFrame($),
                function() {
                    V = null,
                    A = !0
                }
                ;
            d && d(e)
        }
    }
      , S = T()
      , L = [];
    function O(n) {
        var e = function(n) {
            for (var e = 0; e < L.length; ++e)
                if (L[e].el === n)
                    return L[e]
        }(n);
        return e || (L.push(e = {
            el: n,
            binding: {}
        }),
        e)
    }
    function E(n) {
        var e = O(this).binding;
        if (e.value) {
            if (n.preventDefault(),
            "string" == typeof e.value)
                return S(e.value);
            S(e.value.el || e.value.element, e.value)
        }
    }
    var P = {
        bind: function(n, e) {
            O(n).binding = e,
            v(n, "click", E)
        },
        unbind: function(n) {
            !function(n) {
                for (var e = 0; e < L.length; ++e)
                    if (L[e].el === n)
                        return L.splice(e, 1),
                        !0
            }(n),
            m(n, "click", E)
        },
        update: function(n, e) {
            O(n).binding = e
        }
    }
      , x = {
        bind: P.bind,
        unbind: P.unbind,
        update: P.update,
        beforeMount: P.bind,
        unmounted: P.unbind,
        updated: P.update,
        scrollTo: S,
        bindings: L
    }
      , A = function(n, e) {
        e && h(e),
        n.directive("scroll-to", x),
        (n.config.globalProperties || n.prototype).$scrollTo = x.scrollTo
    };
    return "undefined" != typeof window && window.Vue && (window.VueScrollTo = x,
    window.VueScrollTo.setDefaults = h,
    window.VueScrollTo.scroller = T,
    window.Vue.use && window.Vue.use(A)),
    x.install = A,
    x
}
));