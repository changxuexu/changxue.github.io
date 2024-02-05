"use strict";
!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : void 0, function(e, t) {
    function n(e) {
        var t = !!e && "length"in e && e.length
          , n = ot.type(e);
        return "function" === n || ot.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    function r(e, t, n) {
        if (ot.isFunction(t))
            return ot.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return ot.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (gt.test(t))
                return ot.filter(t, e, n);
            t = ot.filter(t, e)
        }
        return ot.grep(e, function(e) {
            return Z.call(t, e) > -1 !== n
        })
    }
    function i(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function o(e) {
        var t = {};
        return ot.each(e.match(wt) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    function s() {
        G.removeEventListener("DOMContentLoaded", s),
        e.removeEventListener("load", s),
        ot.ready()
    }
    function a() {
        this.expando = ot.expando + a.uid++
    }
    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(jt, "-$&").toLowerCase(),
            n = e.getAttribute(r),
            "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : St.test(n) ? ot.parseJSON(n) : n
                } catch (i) {}
                Nt.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function l(e, t, n, r) {
        var i, o = 1, s = 20, a = r ? function() {
            return r.cur()
        }
        : function() {
            return ot.css(e, t, "")
        }
        , u = a(), l = n && n[3] || (ot.cssNumber[t] ? "" : "px"), c = (ot.cssNumber[t] || "px" !== l && +u) && At.exec(ot.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3],
            n = n || [],
            c = +u || 1;
            do
                o = o || ".5",
                c /= o,
                ot.style(e, t, c + l);
            while (o !== (o = a() / u) && 1 !== o && --s)
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    function c(e, t) {
        var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && ot.nodeName(e, t) ? ot.merge([e], n) : n
    }
    function f(e, t) {
        for (var n = 0, r = e.length; r > n; n++)
            Et.set(e[n], "globalEval", !t || Et.get(t[n], "globalEval"))
    }
    function p(e, t, n, r, i) {
        for (var o, s, a, u, l, p, d = t.createDocumentFragment(), h = [], g = 0, m = e.length; m > g; g++)
            if (o = e[g],
            o || 0 === o)
                if ("object" === ot.type(o))
                    ot.merge(h, o.nodeType ? [o] : o);
                else if (Rt.test(o)) {
                    for (s = s || d.appendChild(t.createElement("div")),
                    a = (Ot.exec(o) || ["", ""])[1].toLowerCase(),
                    u = Pt[a] || Pt._default,
                    s.innerHTML = u[1] + ot.htmlPrefilter(o) + u[2],
                    p = u[0]; p--; )
                        s = s.lastChild;
                    ot.merge(h, s.childNodes),
                    s = d.firstChild,
                    s.textContent = ""
                } else
                    h.push(t.createTextNode(o));
        for (d.textContent = "",
        g = 0; o = h[g++]; )
            if (r && ot.inArray(o, r) > -1)
                i && i.push(o);
            else if (l = ot.contains(o.ownerDocument, o),
            s = c(d.appendChild(o), "script"),
            l && f(s),
            n)
                for (p = 0; o = s[p++]; )
                    Ft.test(o.type || "") && n.push(o);
        return d
    }
    function d() {
        return !0
    }
    function h() {
        return !1
    }
    function g() {
        try {
            return G.activeElement
        } catch (e) {}
    }
    function m(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n,
            n = void 0);
            for (a in t)
                m(e, a, n, r, t[a], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        i === !1)
            i = h;
        else if (!i)
            return e;
        return 1 === o && (s = i,
        i = function(e) {
            return ot().off(e),
            s.apply(this, arguments)
        }
        ,
        i.guid = s.guid || (s.guid = ot.guid++)),
        e.each(function() {
            ot.event.add(this, t, i, r, n)
        })
    }
    function v(e, t) {
        return ot.nodeName(e, "table") && ot.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function x(e) {
        var t = Xt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function b(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (Et.hasData(e) && (o = Et.access(e),
            s = Et.set(t, o),
            l = o.events)) {
                delete s.handle,
                s.events = {};
                for (i in l)
                    for (n = 0,
                    r = l[i].length; r > n; n++)
                        ot.event.add(t, i, l[i][n])
            }
            Nt.hasData(e) && (a = Nt.access(e),
            u = ot.extend({}, a),
            Nt.set(t, u))
        }
    }
    function w(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ht.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }
    function T(e, t, n, r) {
        t = J.apply([], t);
        var i, o, s, a, u, l, f = 0, d = e.length, h = d - 1, g = t[0], m = ot.isFunction(g);
        if (m || d > 1 && "string" == typeof g && !rt.checkClone && _t.test(g))
            return e.each(function(i) {
                var o = e.eq(i);
                m && (t[0] = g.call(this, i, o.html())),
                T(o, t, n, r)
            });
        if (d && (i = p(t, e[0].ownerDocument, !1, e, r),
        o = i.firstChild,
        1 === i.childNodes.length && (i = o),
        o || r)) {
            for (s = ot.map(c(i, "script"), y),
            a = s.length; d > f; f++)
                u = i,
                f !== h && (u = ot.clone(u, !0, !0),
                a && ot.merge(s, c(u, "script"))),
                n.call(e[f], u, f);
            if (a)
                for (l = s[s.length - 1].ownerDocument,
                ot.map(s, x),
                f = 0; a > f; f++)
                    u = s[f],
                    Ft.test(u.type || "") && !Et.access(u, "globalEval") && ot.contains(l, u) && (u.src ? ot._evalUrl && ot._evalUrl(u.src) : ot.globalEval(u.textContent.replace(zt, "")))
        }
        return e
    }
    function C(e, t, n) {
        for (var r, i = t ? ot.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || ot.cleanData(c(r)),
            r.parentNode && (n && ot.contains(r.ownerDocument, r) && f(c(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    function k(e, t) {
        var n = ot(t.createElement(e)).appendTo(t.body)
          , r = ot.css(n[0], "display");
        return n.detach(),
        r
    }
    function E(e) {
        var t = G
          , n = Vt[e];
        return n || (n = k(e, t),
        "none" !== n && n || (Ut = (Ut || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
        t = Ut[0].contentDocument,
        t.write(),
        t.close(),
        n = k(e, t),
        Ut.detach()),
        Vt[e] = n),
        n
    }
    function N(e, t, n) {
        var r, i, o, s, a = e.style;
        return n = n || Qt(e),
        s = n ? n.getPropertyValue(t) || n[t] : void 0,
        "" !== s && void 0 !== s || ot.contains(e.ownerDocument, e) || (s = ot.style(e, t)),
        n && !rt.pixelMarginRight() && Gt.test(s) && Yt.test(t) && (r = a.width,
        i = a.minWidth,
        o = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = n.width,
        a.width = r,
        a.minWidth = i,
        a.maxWidth = o),
        void 0 !== s ? s + "" : s
    }
    function S(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function j(e) {
        if (e in rn)
            return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = nn.length; n--; )
            if (e = nn[n] + t,
            e in rn)
                return e
    }
    function D(e, t, n) {
        var r = At.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function A(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2)
            "margin" === n && (s += ot.css(e, n + qt[o], !0, i)),
            r ? ("content" === n && (s -= ot.css(e, "padding" + qt[o], !0, i)),
            "margin" !== n && (s -= ot.css(e, "border" + qt[o] + "Width", !0, i))) : (s += ot.css(e, "padding" + qt[o], !0, i),
            "padding" !== n && (s += ot.css(e, "border" + qt[o] + "Width", !0, i)));
        return s
    }
    function q(e, t, n) {
        var r = !0
          , i = "width" === t ? e.offsetWidth : e.offsetHeight
          , o = Qt(e)
          , s = "border-box" === ot.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = N(e, t, o),
            (0 > i || null == i) && (i = e.style[t]),
            Gt.test(i))
                return i;
            r = s && (rt.boxSizingReliable() || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + A(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }
    function L(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++)
            r = e[s],
            r.style && (o[s] = Et.get(r, "olddisplay"),
            n = r.style.display,
            t ? (o[s] || "none" !== n || (r.style.display = ""),
            "" === r.style.display && Lt(r) && (o[s] = Et.access(r, "olddisplay", E(r.nodeName)))) : (i = Lt(r),
            "none" === n && i || Et.set(r, "olddisplay", i ? n : ot.css(r, "display"))));
        for (s = 0; a > s; s++)
            r = e[s],
            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }
    function H(e, t, n, r, i) {
        return new H.prototype.init(e,t,n,r,i)
    }
    function O() {
        return e.setTimeout(function() {
            on = void 0
        }),
        on = ot.now()
    }
    function F(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t)
            n = qt[r],
            i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function P(e, t, n) {
        for (var r, i = (I.tweeners[t] || []).concat(I.tweeners["*"]), o = 0, s = i.length; s > o; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function R(e, t, n) {
        var r, i, o, s, a, u, l, c, f = this, p = {}, d = e.style, h = e.nodeType && Lt(e), g = Et.get(e, "fxshow");
        n.queue || (a = ot._queueHooks(e, "fx"),
        null == a.unqueued && (a.unqueued = 0,
        u = a.empty.fire,
        a.empty.fire = function() {
            a.unqueued || u()
        }
        ),
        a.unqueued++,
        f.always(function() {
            f.always(function() {
                a.unqueued--,
                ot.queue(e, "fx").length || a.empty.fire()
            })
        })),
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
        l = ot.css(e, "display"),
        c = "none" === l ? Et.get(e, "olddisplay") || E(e.nodeName) : l,
        "inline" === c && "none" === ot.css(e, "float") && (d.display = "inline-block")),
        n.overflow && (d.overflow = "hidden",
        f.always(function() {
            d.overflow = n.overflow[0],
            d.overflowX = n.overflow[1],
            d.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r],
            an.exec(i)) {
                if (delete t[r],
                o = o || "toggle" === i,
                i === (h ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r])
                        continue;
                    h = !0
                }
                p[r] = g && g[r] || ot.style(e, r)
            } else
                l = void 0;
        if (ot.isEmptyObject(p))
            "inline" === ("none" === l ? E(e.nodeName) : l) && (d.display = l);
        else {
            g ? "hidden"in g && (h = g.hidden) : g = Et.access(e, "fxshow", {}),
            o && (g.hidden = !h),
            h ? ot(e).show() : f.done(function() {
                ot(e).hide()
            }),
            f.done(function() {
                var t;
                Et.remove(e, "fxshow");
                for (t in p)
                    ot.style(e, t, p[t])
            });
            for (r in p)
                s = P(h ? g[r] : 0, r, f),
                r in g || (g[r] = s.start,
                h && (s.end = s.start,
                s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function M(e, t) {
        var n, r, i, o, s;
        for (n in e)
            if (r = ot.camelCase(n),
            i = t[r],
            o = e[n],
            ot.isArray(o) && (i = o[1],
            o = e[n] = o[0]),
            n !== r && (e[r] = o,
            delete e[n]),
            s = ot.cssHooks[r],
            s && "expand"in s) {
                o = s.expand(o),
                delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n],
                    t[n] = i)
            } else
                t[r] = i
    }
    function I(e, t, n) {
        var r, i, o = 0, s = I.prefilters.length, a = ot.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (i)
                return !1;
            for (var t = on || O(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; u > s; s++)
                l.tweens[s].run(o);
            return a.notifyWith(e, [l, o, n]),
            1 > o && u ? n : (a.resolveWith(e, [l]),
            !1)
        }, l = a.promise({
            elem: e,
            props: ot.extend({}, t),
            opts: ot.extend(!0, {
                specialEasing: {},
                easing: ot.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: on || O(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = ot.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? l.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; r > n; n++)
                    l.tweens[n].run(1);
                return t ? (a.notifyWith(e, [l, 1, 0]),
                a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]),
                this
            }
        }), c = l.props;
        for (M(c, l.opts.specialEasing); s > o; o++)
            if (r = I.prefilters[o].call(l, e, c, l.opts))
                return ot.isFunction(r.stop) && (ot._queueHooks(l.elem, l.opts.queue).stop = ot.proxy(r.stop, r)),
                r;
        return ot.map(c, P, l),
        ot.isFunction(l.opts.start) && l.opts.start.call(e, l),
        ot.fx.timer(ot.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function W(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function $(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(wt) || [];
            if (ot.isFunction(n))
                for (; r = o[i++]; )
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function B(e, t, n, r) {
        function i(a) {
            var u;
            return o[a] = !0,
            ot.each(e[a] || [], function(e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                i(l),
                !1)
            }),
            u
        }
        var o = {}
          , s = e === Sn;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function _(e, t) {
        var n, r, i = ot.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && ot.extend(!0, e, r),
        e
    }
    function X(e, t, n) {
        for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0]; )
            u.shift(),
            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in a)
                if (a[i] && a[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0]in n)
            o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        return o ? (o !== u[0] && u.unshift(o),
        n[o]) : void 0
    }
    function z(e, t, n, r) {
        var i, o, s, a, u, l = {}, c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters)
                l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            u = o,
            o = c.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (s = l[u + " " + o] || l["* " + o],
                    !s)
                        for (i in l)
                            if (a = i.split(" "),
                            a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0],
                                c.unshift(a[1]));
                                break
                            }
                    if (s !== !0)
                        if (s && e.throws)
                            t = s(t);
                        else
                            try {
                                t = s(t)
                            } catch (f) {
                                return {
                                    state: "parsererror",
                                    error: s ? f : "No conversion from " + u + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function U(e, t, n, r) {
        var i;
        if (ot.isArray(t))
            ot.each(t, function(t, i) {
                n || qn.test(e) ? r(e, i) : U(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== ot.type(t))
            r(e, t);
        else
            for (i in t)
                U(e + "[" + i + "]", t[i], n, r)
    }
    function V(e) {
        return ot.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var Y = []
      , G = e.document
      , Q = Y.slice
      , J = Y.concat
      , K = Y.push
      , Z = Y.indexOf
      , et = {}
      , tt = et.toString
      , nt = et.hasOwnProperty
      , rt = {}
      , it = "2.2.4"
      , ot = function Bn(e, t) {
        return new Bn.fn.init(e,t)
    }
      , st = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , at = /^-ms-/
      , ut = /-([\da-z])/gi
      , lt = function(e, t) {
        return t.toUpperCase()
    };
    ot.fn = ot.prototype = {
        jquery: it,
        constructor: ot,
        selector: "",
        length: 0,
        toArray: function() {
            return Q.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : Q.call(this)
        },
        pushStack: function(e) {
            var t = ot.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e) {
            return ot.each(this, e)
        },
        map: function(e) {
            return this.pushStack(ot.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(Q.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: K,
        sort: Y.sort,
        splice: Y.splice
    },
    ot.extend = ot.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof s && (l = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || ot.isFunction(s) || (s = {}),
        a === u && (s = this,
        a--); u > a; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    n = s[t],
                    r = e[t],
                    s !== r && (l && r && (ot.isPlainObject(r) || (i = ot.isArray(r))) ? (i ? (i = !1,
                    o = n && ot.isArray(n) ? n : []) : o = n && ot.isPlainObject(n) ? n : {},
                    s[t] = ot.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }
    ,
    ot.extend({
        expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ot.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !ot.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(e) {
            var t;
            if ("object" !== ot.type(e) || e.nodeType || ot.isWindow(e))
                return !1;
            if (e.constructor && !nt.call(e, "constructor") && !nt.call(e.constructor.prototype || {}, "isPrototypeOf"))
                return !1;
            for (t in e)
                ;
            return void 0 === t || nt.call(e, t)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? et[tt.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = ot.trim(e),
            e && (1 === e.indexOf("use strict") ? (t = G.createElement("script"),
            t.text = e,
            G.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(at, "ms-").replace(ut, lt)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var r, i = 0;
            if (n(e))
                for (r = e.length; r > i && t.call(e[i], i, e[i]) !== !1; i++)
                    ;
            else
                for (i in e)
                    if (t.call(e[i], i, e[i]) === !1)
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(st, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ot.merge(r, "string" == typeof e ? [e] : e) : K.call(r, e)),
            r
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : Z.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, s = e.length, a = !n; s > o; o++)
                r = !t(e[o], o),
                r !== a && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o, s = 0, a = [];
            if (n(e))
                for (i = e.length; i > s; s++)
                    o = t(e[s], s, r),
                    null != o && a.push(o);
            else
                for (s in e)
                    o = t(e[s], s, r),
                    null != o && a.push(o);
            return J.apply([], a)
        },
        guid: 1,
        proxy: function _n(e, t) {
            var n, r, _n;
            return "string" == typeof t && (n = e[t],
            t = e,
            e = n),
            ot.isFunction(e) ? (r = Q.call(arguments, 2),
            _n = function() {
                return e.apply(t || this, r.concat(Q.call(arguments)))
            }
            ,
            _n.guid = e.guid = e.guid || ot.guid++,
            _n) : void 0
        },
        now: Date.now,
        support: rt
    }),
    "function" == typeof Symbol && (ot.fn[Symbol.iterator] = Y[Symbol.iterator]),
    ot.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        et["[object " + t + "]"] = t.toLowerCase()
    });
    var ct = function(e) {
        function t(e, t, n, r) {
            var i, o, s, a, u, l, f, d, h = t && t.ownerDocument, g = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g)
                return n;
            if (!r && ((t ? t.ownerDocument || t : W) !== L && q(t),
            t = t || L,
            O)) {
                if (11 !== g && (l = vt.exec(e)))
                    if (i = l[1]) {
                        if (9 === g) {
                            if (!(s = t.getElementById(i)))
                                return n;
                            if (s.id === i)
                                return n.push(s),
                                n
                        } else if (h && (s = h.getElementById(i)) && M(t, s) && s.id === i)
                            return n.push(s),
                            n
                    } else {
                        if (l[2])
                            return K.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((i = l[3]) && w.getElementsByClassName && t.getElementsByClassName)
                            return K.apply(n, t.getElementsByClassName(i)),
                            n
                    }
                if (!(!w.qsa || z[e + " "] || F && F.test(e))) {
                    if (1 !== g)
                        h = t,
                        d = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(xt, "\\$&") : t.setAttribute("id", a = I),
                        f = E(e),
                        o = f.length,
                        u = pt.test(a) ? "#" + a : "[id='" + a + "']"; o--; )
                            f[o] = u + " " + p(f[o]);
                        d = f.join(","),
                        h = yt.test(e) && c(t.parentNode) || t
                    }
                    if (d)
                        try {
                            return K.apply(n, h.querySelectorAll(d)),
                            n
                        } catch (m) {} finally {
                            a === I && t.removeAttribute("id")
                        }
                }
            }
            return S(e.replace(at, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()],
                e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[I] = !0,
            e
        }
        function i(e) {
            var t = L.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                T.attrHandle[n[r]] = t
        }
        function s(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function l(e) {
            return r(function(t) {
                return t = +t,
                r(function(n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--; )
                        n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function f() {}
        function p(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++)
                r += e[t].value;
            return r
        }
        function d(e, t, n) {
            var r = t.dir
              , i = n && "parentNode" === r
              , o = B++;
            return t.first ? function(t, n, o) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || i)
                        return e(t, n, o)
            }
            : function(t, n, s) {
                var a, u, l, c = [$, o];
                if (s) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || i) && e(t, n, s))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || i) {
                            if (l = t[I] || (t[I] = {}),
                            u = l[t.uniqueID] || (l[t.uniqueID] = {}),
                            (a = u[r]) && a[0] === $ && a[1] === o)
                                return c[2] = a[2];
                            if (u[r] = c,
                            c[2] = e(t, n, s))
                                return !0
                        }
            }
        }
        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; )
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function g(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++)
                t(e, n[i], r);
            return r
        }
        function m(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)
                (o = e[a]) && (!n || n(o, r, i)) && (s.push(o),
                l && t.push(a));
            return s
        }
        function v(e, t, n, i, o, s) {
            return i && !i[I] && (i = v(i)),
            o && !o[I] && (o = v(o, s)),
            r(function(r, s, a, u) {
                var l, c, f, p = [], d = [], h = s.length, v = r || g(t || "*", a.nodeType ? [a] : a, []), y = !e || !r && t ? v : m(v, p, e, a, u), x = n ? o || (r ? e : h || i) ? [] : s : y;
                if (n && n(y, x, a, u),
                i)
                    for (l = m(x, d),
                    i(l, [], a, u),
                    c = l.length; c--; )
                        (f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [],
                            c = x.length; c--; )
                                (f = x[c]) && l.push(y[c] = f);
                            o(null, x = [], l, u)
                        }
                        for (c = x.length; c--; )
                            (f = x[c]) && (l = o ? et(r, f) : p[c]) > -1 && (r[l] = !(s[l] = f))
                    }
                } else
                    x = m(x === s ? x.splice(h, x.length) : x),
                    o ? o(null, s, x, u) : K.apply(s, x)
            })
        }
        function y(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = d(function(e) {
                return e === t
            }, s, !0), l = d(function(e) {
                return et(t, e) > -1
            }, s, !0), c = [function(e, n, r) {
                var i = !o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                return t = null,
                i
            }
            ]; i > a; a++)
                if (n = T.relative[e[a].type])
                    c = [d(h(c), n)];
                else {
                    if (n = T.filter[e[a].type].apply(null, e[a].matches),
                    n[I]) {
                        for (r = ++a; i > r && !T.relative[e[r].type]; r++)
                            ;
                        return v(a > 1 && h(c), a > 1 && p(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(at, "$1"), n, r > a && y(e.slice(a, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                    }
                    c.push(n)
                }
            return h(c)
        }
        function x(e, n) {
            var i = n.length > 0
              , o = e.length > 0
              , s = function(r, s, a, u, l) {
                var c, f, p, d = 0, h = "0", g = r && [], v = [], y = j, x = r || o && T.find.TAG("*", l), b = $ += null == y ? 1 : Math.random() || .1, w = x.length;
                for (l && (j = s === L || s || l); h !== w && null != (c = x[h]); h++) {
                    if (o && c) {
                        for (f = 0,
                        s || c.ownerDocument === L || (q(c),
                        a = !O); p = e[f++]; )
                            if (p(c, s || L, a)) {
                                u.push(c);
                                break
                            }
                        l && ($ = b)
                    }
                    i && ((c = !p && c) && d--,
                    r && g.push(c))
                }
                if (d += h,
                i && h !== d) {
                    for (f = 0; p = n[f++]; )
                        p(g, v, s, a);
                    if (r) {
                        if (d > 0)
                            for (; h--; )
                                g[h] || v[h] || (v[h] = Q.call(u));
                        v = m(v)
                    }
                    K.apply(u, v),
                    l && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                }
                return l && ($ = b,
                j = y),
                g
            };
            return i ? r(s) : s
        }
        var b, w, T, C, k, E, N, S, j, D, A, q, L, H, O, F, P, R, M, I = "sizzle" + 1 * new Date, W = e.document, $ = 0, B = 0, _ = n(), X = n(), z = n(), U = function(e, t) {
            return e === t && (A = !0),
            0
        }, V = 1 << 31, Y = {}.hasOwnProperty, G = [], Q = G.pop, J = G.push, K = G.push, Z = G.slice, et = function(e, t) {
            for (var n = 0, r = e.length; r > n; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", nt = "[\\x20\\t\\r\\n\\f]", rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", it = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + nt + "*\\]", ot = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)", st = new RegExp(nt + "+","g"), at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$","g"), ut = new RegExp("^" + nt + "*," + nt + "*"), lt = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"), ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]","g"), ft = new RegExp(ot), pt = new RegExp("^" + rt + "$"), dt = {
            ID: new RegExp("^#(" + rt + ")"),
            CLASS: new RegExp("^\\.(" + rt + ")"),
            TAG: new RegExp("^(" + rt + "|[*])"),
            ATTR: new RegExp("^" + it),
            PSEUDO: new RegExp("^" + ot),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)","i"),
            bool: new RegExp("^(?:" + tt + ")$","i"),
            needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)","i")
        }, ht = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, mt = /^[^{]+\{\s*\[native \w/, vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, yt = /[+~]/, xt = /'|\\/g, bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)","ig"), wt = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, Tt = function() {
            q()
        };
        try {
            K.apply(G = Z.call(W.childNodes), W.childNodes),
            G[W.childNodes.length].nodeType
        } catch (Ct) {
            K = {
                apply: G.length ? function(e, t) {
                    J.apply(e, Z.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        w = t.support = {},
        k = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }
        ,
        q = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : W;
            return r !== L && 9 === r.nodeType && r.documentElement ? (L = r,
            H = L.documentElement,
            O = !k(L),
            (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Tt, !1) : n.attachEvent && n.attachEvent("onunload", Tt)),
            w.attributes = i(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            w.getElementsByTagName = i(function(e) {
                return e.appendChild(L.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            w.getElementsByClassName = mt.test(L.getElementsByClassName),
            w.getById = i(function(e) {
                return H.appendChild(e).id = I,
                !L.getElementsByName || !L.getElementsByName(I).length
            }),
            w.getById ? (T.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && O) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ,
            T.filter.ID = function(e) {
                var t = e.replace(bt, wt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete T.find.ID,
            T.filter.ID = function(e) {
                var t = e.replace(bt, wt);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            T.find.TAG = w.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            T.find.CLASS = w.getElementsByClassName && function(e, t) {
                return "undefined" != typeof t.getElementsByClassName && O ? t.getElementsByClassName(e) : void 0
            }
            ,
            P = [],
            F = [],
            (w.qsa = mt.test(L.querySelectorAll)) && (i(function(e) {
                H.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + nt + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || F.push("\\[" + nt + "*(?:value|" + tt + ")"),
                e.querySelectorAll("[id~=" + I + "-]").length || F.push("~="),
                e.querySelectorAll(":checked").length || F.push(":checked"),
                e.querySelectorAll("a#" + I + "+*").length || F.push(".#.+[+~]")
            }),
            i(function(e) {
                var t = L.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && F.push("name" + nt + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                F.push(",.*:")
            })),
            (w.matchesSelector = mt.test(R = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function(e) {
                w.disconnectedMatch = R.call(e, "div"),
                R.call(e, "[s!='']:x"),
                P.push("!=", ot)
            }),
            F = F.length && new RegExp(F.join("|")),
            P = P.length && new RegExp(P.join("|")),
            t = mt.test(H.compareDocumentPosition),
            M = t || mt.test(H.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            U = t ? function(e, t) {
                if (e === t)
                    return A = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === L || e.ownerDocument === W && M(W, e) ? -1 : t === L || t.ownerDocument === W && M(W, t) ? 1 : D ? et(D, e) - et(D, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return A = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], u = [t];
                if (!i || !o)
                    return e === L ? -1 : t === L ? 1 : i ? -1 : o ? 1 : D ? et(D, e) - et(D, t) : 0;
                if (i === o)
                    return s(e, t);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (n = t; n = n.parentNode; )
                    u.unshift(n);
                for (; a[r] === u[r]; )
                    r++;
                return r ? s(a[r], u[r]) : a[r] === W ? -1 : u[r] === W ? 1 : 0
            }
            ,
            L) : L
        }
        ,
        t.matches = function(e, n) {
            return t(e, null, null, n)
        }
        ,
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== L && q(e),
            n = n.replace(ct, "='$1']"),
            !(!w.matchesSelector || !O || z[n + " "] || P && P.test(n) || F && F.test(n)))
                try {
                    var r = R.call(e, n);
                    if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (i) {}
            return t(n, L, null, [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== L && q(e),
            M(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== L && q(e);
            var n = T.attrHandle[t.toLowerCase()]
              , r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== r ? r : w.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (A = !w.detectDuplicates,
            D = !w.sortStable && e.slice(0),
            e.sort(U),
            A) {
                for (; t = e[i++]; )
                    t === e[i] && (r = n.push(i));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return D = null,
            e
        }
        ,
        C = t.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += C(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += C(t);
            return n
        }
        ,
        T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: dt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(bt, wt),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(bt, wt),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return dt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ft.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(bt, wt).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = _[e + " "];
                    return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && _(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : n ? (o += "",
                        "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , s = "last" !== e.slice(-4)
                      , a = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !u && !a, x = !1;
                        if (m) {
                            if (o) {
                                for (; g; ) {
                                    for (p = t; p = p[g]; )
                                        if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? m.firstChild : m.lastChild],
                            s && y) {
                                for (p = m,
                                f = p[I] || (p[I] = {}),
                                c = f[p.uniqueID] || (f[p.uniqueID] = {}),
                                l = c[e] || [],
                                d = l[0] === $ && l[1],
                                x = d && l[2],
                                p = d && m.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop(); )
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [$, d, x];
                                        break
                                    }
                            } else if (y && (p = t,
                            f = p[I] || (p[I] = {}),
                            c = f[p.uniqueID] || (f[p.uniqueID] = {}),
                            l = c[e] || [],
                            d = l[0] === $ && l[1],
                            x = d),
                            x === !1)
                                for (; (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++x || (y && (f = p[I] || (p[I] = {}),
                                c = f[p.uniqueID] || (f[p.uniqueID] = {}),
                                c[e] = [$, x]),
                                p !== t)); )
                                    ;
                            return x -= i,
                            x === r || x % r === 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[I] ? o(n) : o.length > 1 ? (i = [e, e, "", n],
                    T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), s = i.length; s--; )
                            r = et(e, i[s]),
                            e[r] = !(t[r] = i[s])
                    }) : function(e) {
                        return o(e, 0, i)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = []
                      , n = []
                      , i = N(e.replace(at, "$1"));
                    return i[I] ? r(function(e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--; )
                            (o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, r, o) {
                        return t[0] = e,
                        i(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(bt, wt),
                    function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return pt.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(bt, wt).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(),
                                n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === H
                },
                focus: function(e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !T.pseudos.empty(e)
                },
                header: function(e) {
                    return gt.test(e.nodeName)
                },
                input: function(e) {
                    return ht.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        },
        T.pseudos.nth = T.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            T.pseudos[b] = a(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            T.pseudos[b] = u(b);
        return f.prototype = T.filters = T.pseudos,
        T.setFilters = new f,
        E = t.tokenize = function(e, n) {
            var r, i, o, s, a, u, l, c = X[e + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (a = e,
            u = [],
            l = T.preFilter; a; ) {
                (!r || (i = ut.exec(a))) && (i && (a = a.slice(i[0].length) || a),
                u.push(o = [])),
                r = !1,
                (i = lt.exec(a)) && (r = i.shift(),
                o.push({
                    value: r,
                    type: i[0].replace(at, " ")
                }),
                a = a.slice(r.length));
                for (s in T.filter)
                    !(i = dt[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(),
                    o.push({
                        value: r,
                        type: s,
                        matches: i
                    }),
                    a = a.slice(r.length));
                if (!r)
                    break
            }
            return n ? a.length : a ? t.error(e) : X(e, u).slice(0)
        }
        ,
        N = t.compile = function(e, t) {
            var n, r = [], i = [], o = z[e + " "];
            if (!o) {
                for (t || (t = E(e)),
                n = t.length; n--; )
                    o = y(t[n]),
                    o[I] ? r.push(o) : i.push(o);
                o = z(e, x(i, r)),
                o.selector = e
            }
            return o
        }
        ,
        S = t.select = function(e, t, n, r) {
            var i, o, s, a, u, l = "function" == typeof e && e, f = !r && E(e = l.selector || e);
            if (n = n || [],
            1 === f.length) {
                if (o = f[0] = f[0].slice(0),
                o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && O && T.relative[o[1].type]) {
                    if (t = (T.find.ID(s.matches[0].replace(bt, wt), t) || [])[0],
                    !t)
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (i = dt.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i],
                !T.relative[a = s.type]); )
                    if ((u = T.find[a]) && (r = u(s.matches[0].replace(bt, wt), yt.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        e = r.length && p(o),
                        !e)
                            return K.apply(n, r),
                            n;
                        break
                    }
            }
            return (l || N(e, f))(r, t, !O, n, !t || yt.test(e) && c(t.parentNode) || t),
            n
        }
        ,
        w.sortStable = I.split("").sort(U).join("") === I,
        w.detectDuplicates = !!A,
        q(),
        w.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(L.createElement("div"))
        }),
        i(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        w.attributes && i(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(tt, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        t
    }(e);
    ot.find = ct,
    ot.expr = ct.selectors,
    ot.expr[":"] = ot.expr.pseudos,
    ot.uniqueSort = ot.unique = ct.uniqueSort,
    ot.text = ct.getText,
    ot.isXMLDoc = ct.isXML,
    ot.contains = ct.contains;
    var ft = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && ot(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , pt = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , dt = ot.expr.match.needsContext
      , ht = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , gt = /^.[^:#\[\.,]*$/;
    ot.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? ot.find.matchesSelector(r, e) ? [r] : [] : ot.find.matches(e, ot.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    ot.fn.extend({
        find: function(e) {
            var t, n = this.length, r = [], i = this;
            if ("string" != typeof e)
                return this.pushStack(ot(e).filter(function() {
                    for (t = 0; n > t; t++)
                        if (ot.contains(i[t], this))
                            return !0
                }));
            for (t = 0; n > t; t++)
                ot.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? ot.unique(r) : r),
            r.selector = this.selector ? this.selector + " " + e : e,
            r
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && dt.test(e) ? ot(e) : e || [], !1).length
        }
    });
    var mt, vt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, yt = ot.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || mt,
        "string" == typeof e) {
            if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : vt.exec(e),
            !r || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof ot ? t[0] : t,
                ot.merge(this, ot.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : G, !0)),
                ht.test(r[1]) && ot.isPlainObject(t))
                    for (r in t)
                        ot.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return i = G.getElementById(r[2]),
            i && i.parentNode && (this.length = 1,
            this[0] = i),
            this.context = G,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : ot.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ot) : (void 0 !== e.selector && (this.selector = e.selector,
        this.context = e.context),
        ot.makeArray(e, this))
    }
    ;
    yt.prototype = ot.fn,
    mt = ot(G);
    var xt = /^(?:parents|prev(?:Until|All))/
      , bt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ot.fn.extend({
        has: function(e) {
            var t = ot(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (ot.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], s = dt.test(e) || "string" != typeof e ? ot(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? ot.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? Z.call(ot(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ot.uniqueSort(ot.merge(this.get(), ot(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    ot.each({
        parent: function Xn(e) {
            var Xn = e.parentNode;
            return Xn && 11 !== Xn.nodeType ? Xn : null
        },
        parents: function(e) {
            return ft(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ft(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return ft(e, "nextSibling")
        },
        prevAll: function(e) {
            return ft(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ft(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ft(e, "previousSibling", n)
        },
        siblings: function(e) {
            return pt((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return pt(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || ot.merge([], e.childNodes)
        }
    }, function(e, t) {
        ot.fn[e] = function(n, r) {
            var i = ot.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = ot.filter(r, i)),
            this.length > 1 && (bt[e] || ot.uniqueSort(i),
            xt.test(e) && i.reverse()),
            this.pushStack(i)
        }
    });
    var wt = /\S+/g;
    ot.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : ot.extend({}, e);
        var t, n, r, i, s = [], a = [], u = -1, l = function() {
            for (i = e.once,
            r = t = !0; a.length; u = -1)
                for (n = a.shift(); ++u < s.length; )
                    s[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = s.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            i && (s = n ? [] : "")
        }, c = {
            add: function() {
                return s && (n && !t && (u = s.length - 1,
                a.push(n)),
                function r(t) {
                    ot.each(t, function(t, n) {
                        ot.isFunction(n) ? e.unique && c.has(n) || s.push(n) : n && n.length && "string" !== ot.type(n) && r(n)
                    })
                }(arguments),
                n && !t && l()),
                this
            },
            remove: function() {
                return ot.each(arguments, function(e, t) {
                    for (var n; (n = ot.inArray(t, s, n)) > -1; )
                        s.splice(n, 1),
                        u >= n && u--
                }),
                this
            },
            has: function(e) {
                return e ? ot.inArray(e, s) > -1 : s.length > 0
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return i = a = [],
                s = n = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return i = a = [],
                n || (s = n = ""),
                this
            },
            locked: function() {
                return !!i
            },
            fireWith: function(e, n) {
                return i || (n = n || [],
                n = [e, n.slice ? n.slice() : n],
                a.push(n),
                t || l()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return c
    }
    ,
    ot.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", ot.Callbacks("once memory"), "resolved"], ["reject", "fail", ot.Callbacks("once memory"), "rejected"], ["notify", "progress", ot.Callbacks("memory")]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return ot.Deferred(function(n) {
                        ot.each(t, function(t, o) {
                            var s = ot.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && ot.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? ot.extend(e, r) : r
                }
            }
              , i = {};
            return r.pipe = r.then,
            ot.each(t, function(e, o) {
                var s = o[2]
                  , a = o[3];
                r[o[1]] = s.add,
                a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments),
                    this
                }
                ,
                i[o[0] + "With"] = s.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t, n, r, i = 0, o = Q.call(arguments), s = o.length, a = 1 !== s || e && ot.isFunction(e.promise) ? s : 0, u = 1 === a ? e : ot.Deferred(), l = function(e, n, r) {
                return function(i) {
                    n[e] = this,
                    r[e] = arguments.length > 1 ? Q.call(arguments) : i,
                    r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                }
            };
            if (s > 1)
                for (t = new Array(s),
                n = new Array(s),
                r = new Array(s); s > i; i++)
                    o[i] && ot.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, t)).done(l(i, r, o)).fail(u.reject) : --a;
            return a || u.resolveWith(r, o),
            u.promise()
        }
    });
    var Tt;
    ot.fn.ready = function(e) {
        return ot.ready.promise().done(e),
        this
    }
    ,
    ot.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ot.readyWait++ : ot.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --ot.readyWait : ot.isReady) || (ot.isReady = !0,
            e !== !0 && --ot.readyWait > 0 || (Tt.resolveWith(G, [ot]),
            ot.fn.triggerHandler && (ot(G).triggerHandler("ready"),
            ot(G).off("ready"))))
        }
    }),
    ot.ready.promise = function(t) {
        return Tt || (Tt = ot.Deferred(),
        "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll ? e.setTimeout(ot.ready) : (G.addEventListener("DOMContentLoaded", s),
        e.addEventListener("load", s))),
        Tt.promise(t)
    }
    ,
    ot.ready.promise();
    var Ct = function zn(e, t, n, r, i, o, s) {
        var a = 0
          , u = e.length
          , l = null == n;
        if ("object" === ot.type(n)) {
            i = !0;
            for (a in n)
                zn(e, t, a, n[a], !0, o, s)
        } else if (void 0 !== r && (i = !0,
        ot.isFunction(r) || (s = !0),
        l && (s ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(ot(e), n)
        }
        )),
        t))
            for (; u > a; a++)
                t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , kt = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    a.uid = 1,
    a.prototype = {
        register: function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }),
            e[this.expando]
        },
        cache: function(e) {
            if (!kt(e))
                return {};
            var t = e[this.expando];
            return t || (t = {},
            kt(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[t] = n;
            else
                for (r in t)
                    i[r] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t),
            void 0 !== r ? r : this.get(e, ot.camelCase(t))) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 === t)
                    this.register(e);
                else {
                    ot.isArray(t) ? r = t.concat(t.map(ot.camelCase)) : (i = ot.camelCase(t),
                    t in o ? r = [t, i] : (r = i,
                    r = r in o ? [r] : r.match(wt) || [])),
                    n = r.length;
                    for (; n--; )
                        delete o[r[n]]
                }
                (void 0 === t || ot.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !ot.isEmptyObject(t)
        }
    };
    var Et = new a
      , Nt = new a
      , St = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , jt = /[A-Z]/g;
    ot.extend({
        hasData: function(e) {
            return Nt.hasData(e) || Et.hasData(e)
        },
        data: function(e, t, n) {
            return Nt.access(e, t, n)
        },
        removeData: function(e, t) {
            Nt.remove(e, t)
        },
        _data: function(e, t, n) {
            return Et.access(e, t, n)
        },
        _removeData: function(e, t) {
            Et.remove(e, t)
        }
    }),
    ot.fn.extend({
        data: function Un(e, t) {
            var n, r, Un, i = this[0], o = i && i.attributes;
            if (void 0 === e) {
                if (this.length && (Un = Nt.get(i),
                1 === i.nodeType && !Et.get(i, "hasDataAttrs"))) {
                    for (n = o.length; n--; )
                        o[n] && (r = o[n].name,
                        0 === r.indexOf("data-") && (r = ot.camelCase(r.slice(5)),
                        u(i, r, Un[r])));
                    Et.set(i, "hasDataAttrs", !0)
                }
                return Un
            }
            return "object" == typeof e ? this.each(function() {
                Nt.set(this, e)
            }) : Ct(this, function(t) {
                var n, r;
                if (i && void 0 === t) {
                    if (n = Nt.get(i, e) || Nt.get(i, e.replace(jt, "-$&").toLowerCase()),
                    void 0 !== n)
                        return n;
                    if (r = ot.camelCase(e),
                    n = Nt.get(i, r),
                    void 0 !== n)
                        return n;
                    if (n = u(i, r, void 0),
                    void 0 !== n)
                        return n
                } else
                    r = ot.camelCase(e),
                    this.each(function() {
                        var n = Nt.get(this, r);
                        Nt.set(this, r, t),
                        e.indexOf("-") > -1 && void 0 !== n && Nt.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Nt.remove(this, e)
            })
        }
    }),
    ot.extend({
        queue: function Vn(e, t, n) {
            var Vn;
            return e ? (t = (t || "fx") + "queue",
            Vn = Et.get(e, t),
            n && (!Vn || ot.isArray(n) ? Vn = Et.access(e, t, ot.makeArray(n)) : Vn.push(n)),
            Vn || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ot.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = ot._queueHooks(e, t)
              , s = function() {
                ot.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, s, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Et.get(e, n) || Et.access(e, n, {
                empty: ot.Callbacks("once memory").add(function() {
                    Et.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    ot.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? ot.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = ot.queue(this, e, t);
                ot._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && ot.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ot.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = ot.Deferred(), o = this, s = this.length, a = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                n = Et.get(o[s], e + "queueHooks"),
                n && n.empty && (r++,
                n.empty.add(a));
            return a(),
            i.promise(t)
        }
    });
    var Dt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , At = new RegExp("^(?:([+-])=|)(" + Dt + ")([a-z%]*)$","i")
      , qt = ["Top", "Right", "Bottom", "Left"]
      , Lt = function(e, t) {
        return e = t || e,
        "none" === ot.css(e, "display") || !ot.contains(e.ownerDocument, e)
    }
      , Ht = /^(?:checkbox|radio)$/i
      , Ot = /<([\w:-]+)/
      , Ft = /^$|\/(?:java|ecma)script/i
      , Pt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Pt.optgroup = Pt.option,
    Pt.tbody = Pt.tfoot = Pt.colgroup = Pt.caption = Pt.thead,
    Pt.th = Pt.td;
    var Rt = /<|&#?\w+;/;
    !function() {
        var e = G.createDocumentFragment()
          , t = e.appendChild(G.createElement("div"))
          , n = G.createElement("input");
        n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        t.appendChild(n),
        rt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.innerHTML = "<textarea>x</textarea>",
        rt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Mt = /^key/
      , It = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Wt = /^([^.]*)(?:\.(.+)|)/;
    ot.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = Et.get(e);
            if (m)
                for (n.handler && (o = n,
                n = o.handler,
                i = o.selector),
                n.guid || (n.guid = ot.guid++),
                (u = m.events) || (u = m.events = {}),
                (s = m.handle) || (s = m.handle = function(t) {
                    return "undefined" != typeof ot && ot.event.triggered !== t.type ? ot.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                t = (t || "").match(wt) || [""],
                l = t.length; l--; )
                    a = Wt.exec(t[l]) || [],
                    d = g = a[1],
                    h = (a[2] || "").split(".").sort(),
                    d && (f = ot.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = ot.event.special[d] || {},
                    c = ot.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && ot.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || (p = u[d] = [],
                    p.delegateCount = 0,
                    f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(d, s)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    ot.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = Et.hasData(e) && Et.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(wt) || [""],
                l = t.length; l--; )
                    if (a = Wt.exec(t[l]) || [],
                    d = g = a[1],
                    h = (a[2] || "").split(".").sort(),
                    d) {
                        for (f = ot.event.special[d] || {},
                        d = (r ? f.delegateType : f.bindType) || d,
                        p = u[d] || [],
                        a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = o = p.length; o--; )
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        s && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || ot.removeEvent(e, d, m.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            ot.event.remove(e, d + t[l], n, r, !0);
                ot.isEmptyObject(u) && Et.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = ot.event.fix(e);
            var t, n, r, i, o, s = [], a = Q.call(arguments), u = (Et.get(this, "events") || {})[e.type] || [], l = ot.event.special[e.type] || {};
            if (a[0] = e,
            e.delegateTarget = this,
            !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (s = ot.event.handlers.call(this, e, u),
                t = 0; (i = s[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                        (!e.rnamespace || e.rnamespace.test(o.namespace)) && (e.handleObj = o,
                        e.data = o.data,
                        r = ((ot.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a),
                        void 0 !== r && (e.result = r) === !1 && (e.preventDefault(),
                        e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s = [], a = t.delegateCount, u = e.target;
            if (a && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (r = [],
                        n = 0; a > n; n++)
                            o = t[n],
                            i = o.selector + " ",
                            void 0 === r[i] && (r[i] = o.needsContext ? ot(i, this).index(u) > -1 : ot.find(i, this, null, [u]).length),
                            r[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }),
            s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || G,
                r = n.documentElement,
                i = n.body,
                e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0),
                e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[ot.expando])
                return e;
            var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = It.test(i) ? this.mouseHooks : Mt.test(i) ? this.keyHooks : {}),
            r = s.props ? this.props.concat(s.props) : this.props,
            e = new ot.Event(o),
            t = r.length; t--; )
                n = r[t],
                e[n] = o[n];
            return e.target || (e.target = G),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== g() && this.focus ? (this.focus(),
                    !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === g() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && ot.nodeName(this, "input") ? (this.click(),
                    !1) : void 0
                },
                _default: function(e) {
                    return ot.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    ot.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    ot.Event = function(e, t) {
        return this instanceof ot.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? d : h) : this.type = e,
        t && ot.extend(this, t),
        this.timeStamp = e && e.timeStamp || ot.now(),
        void (this[ot.expando] = !0)) : new ot.Event(e,t)
    }
    ,
    ot.Event.prototype = {
        constructor: ot.Event,
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = d,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = d,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = d,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    ot.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        ot.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !ot.contains(r, i)) && (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    ot.fn.extend({
        on: function(e, t, n, r) {
            return m(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return m(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                ot(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t,
            t = void 0),
            n === !1 && (n = h),
            this.each(function() {
                ot.event.remove(this, e, n, t)
            })
        }
    });
    var $t = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , Bt = /<script|<style|<link/i
      , _t = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Xt = /^true\/(.*)/
      , zt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ot.extend({
        htmlPrefilter: function(e) {
            return e.replace($t, "<$1></$2>")
        },
        clone: function Yn(e, t, n) {
            var r, i, o, s, Yn = e.cloneNode(!0), a = ot.contains(e.ownerDocument, e);
            if (!(rt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ot.isXMLDoc(e)))
                for (s = c(Yn),
                o = c(e),
                r = 0,
                i = o.length; i > r; r++)
                    w(o[r], s[r]);
            if (t)
                if (n)
                    for (o = o || c(e),
                    s = s || c(Yn),
                    r = 0,
                    i = o.length; i > r; r++)
                        b(o[r], s[r]);
                else
                    b(e, Yn);
            return s = c(Yn, "script"),
            s.length > 0 && f(s, !a && c(e, "script")),
            Yn
        },
        cleanData: function(e) {
            for (var t, n, r, i = ot.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (kt(n)) {
                    if (t = n[Et.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? ot.event.remove(n, r) : ot.removeEvent(n, r, t.handle);
                        n[Et.expando] = void 0
                    }
                    n[Nt.expando] && (n[Nt.expando] = void 0)
                }
        }
    }),
    ot.fn.extend({
        domManip: T,
        detach: function(e) {
            return C(this, e, !0)
        },
        remove: function(e) {
            return C(this, e)
        },
        text: function(e) {
            return Ct(this, function(e) {
                return void 0 === e ? ot.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return T(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return T(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return T(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return T(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (ot.cleanData(c(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e : t,
            this.map(function() {
                return ot.clone(this, e, t)
            })
        },
        html: function(e) {
            return Ct(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Bt.test(e) && !Pt[(Ot.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ot.htmlPrefilter(e);
                    try {
                        for (; r > n; n++)
                            t = this[n] || {},
                            1 === t.nodeType && (ot.cleanData(c(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return T(this, arguments, function(t) {
                var n = this.parentNode;
                ot.inArray(this, e) < 0 && (ot.cleanData(c(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    ot.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ot.fn[e] = function(e) {
            for (var n, r = [], i = ot(e), o = i.length - 1, s = 0; o >= s; s++)
                n = s === o ? this : this.clone(!0),
                ot(i[s])[t](n),
                K.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Ut, Vt = {
        HTML: "block",
        BODY: "block"
    }, Yt = /^margin/, Gt = new RegExp("^(" + Dt + ")(?!px)[a-z%]+$","i"), Qt = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }, Jt = function(e, t, n, r) {
        var i, o, s = {};
        for (o in t)
            s[o] = e.style[o],
            e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)
            e.style[o] = s[o];
        return i
    }, Kt = G.documentElement;
    !function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            a.innerHTML = "",
            Kt.appendChild(s);
            var t = e.getComputedStyle(a);
            n = "1%" !== t.top,
            o = "2px" === t.marginLeft,
            r = "4px" === t.width,
            a.style.marginRight = "50%",
            i = "4px" === t.marginRight,
            Kt.removeChild(s)
        }
        var n, r, i, o, s = G.createElement("div"), a = G.createElement("div");
        a.style && (a.style.backgroundClip = "content-box",
        a.cloneNode(!0).style.backgroundClip = "",
        rt.clearCloneStyle = "content-box" === a.style.backgroundClip,
        s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        s.appendChild(a),
        ot.extend(rt, {
            pixelPosition: function() {
                return t(),
                n
            },
            boxSizingReliable: function() {
                return null == r && t(),
                r
            },
            pixelMarginRight: function() {
                return null == r && t(),
                i
            },
            reliableMarginLeft: function() {
                return null == r && t(),
                o
            },
            reliableMarginRight: function() {
                var t, n = a.appendChild(G.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                n.style.marginRight = n.style.width = "0",
                a.style.width = "1px",
                Kt.appendChild(s),
                t = !parseFloat(e.getComputedStyle(n).marginRight),
                Kt.removeChild(s),
                a.removeChild(n),
                t
            }
        }))
    }();
    var Zt = /^(none|table(?!-c[ea]).+)/
      , en = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , tn = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , nn = ["Webkit", "O", "Moz", "ms"]
      , rn = G.createElement("div").style;
    ot.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = N(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function Gn(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = ot.camelCase(t), Gn = e.style;
                return t = ot.cssProps[a] || (ot.cssProps[a] = j(a) || a),
                s = ot.cssHooks[t] || ot.cssHooks[a],
                void 0 === n ? s && "get"in s && void 0 !== (i = s.get(e, !1, r)) ? i : Gn[t] : (o = typeof n,
                "string" === o && (i = At.exec(n)) && i[1] && (n = l(e, t, i),
                o = "number"),
                null != n && n === n && ("number" === o && (n += i && i[3] || (ot.cssNumber[a] ? "" : "px")),
                rt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (Gn[t] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(e, n, r)) || (Gn[t] = n)),
                void 0)
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = ot.camelCase(t);
            return t = ot.cssProps[a] || (ot.cssProps[a] = j(a) || a),
            s = ot.cssHooks[t] || ot.cssHooks[a],
            s && "get"in s && (i = s.get(e, !0, n)),
            void 0 === i && (i = N(e, t, r)),
            "normal" === i && t in tn && (i = tn[t]),
            "" === n || n ? (o = parseFloat(i),
            n === !0 || isFinite(o) ? o || 0 : i) : i
        }
    }),
    ot.each(["height", "width"], function(e, t) {
        ot.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? Zt.test(ot.css(e, "display")) && 0 === e.offsetWidth ? Jt(e, en, function() {
                    return q(e, t, r)
                }) : q(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i, o = r && Qt(e), s = r && A(e, t, r, "border-box" === ot.css(e, "boxSizing", !1, o), o);
                return s && (i = At.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                n = ot.css(e, t)),
                D(e, n, s)
            }
        }
    }),
    ot.cssHooks.marginLeft = S(rt.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(N(e, "marginLeft")) || e.getBoundingClientRect().left - Jt(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }),
    ot.cssHooks.marginRight = S(rt.reliableMarginRight, function(e, t) {
        return t ? Jt(e, {
            display: "inline-block"
        }, N, [e, "marginRight"]) : void 0
    }),
    ot.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ot.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)
                    i[e + qt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        Yt.test(e) || (ot.cssHooks[e + t].set = D)
    }),
    ot.fn.extend({
        css: function(e, t) {
            return Ct(this, function(e, t, n) {
                var r, i, o = {}, s = 0;
                if (ot.isArray(t)) {
                    for (r = Qt(e),
                    i = t.length; i > s; s++)
                        o[t[s]] = ot.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? ot.style(e, t, n) : ot.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return L(this, !0)
        },
        hide: function() {
            return L(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Lt(this) ? ot(this).show() : ot(this).hide()
            })
        }
    }),
    ot.Tween = H,
    H.prototype = {
        constructor: H,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || ot.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (ot.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = H.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ot.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : H.propHooks._default.set(this),
            this
        }
    },
    H.prototype.init.prototype = H.prototype,
    H.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ot.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                ot.fx.step[e.prop] ? ot.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ot.cssProps[e.prop]] && !ot.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ot.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    ot.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    ot.fx = H.prototype.init,
    ot.fx.step = {};
    var on, sn, an = /^(?:toggle|show|hide)$/, un = /queueHooks$/;
    ot.Animation = ot.extend(I, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return l(n.elem, e, At.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            ot.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.match(wt);
            for (var n, r = 0, i = e.length; i > r; r++)
                n = e[r],
                I.tweeners[n] = I.tweeners[n] || [],
                I.tweeners[n].unshift(t)
        },
        prefilters: [R],
        prefilter: function(e, t) {
            t ? I.prefilters.unshift(e) : I.prefilters.push(e)
        }
    }),
    ot.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? ot.extend({}, e) : {
            complete: n || !n && t || ot.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ot.isFunction(t) && t
        };
        return r.duration = ot.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ot.fx.speeds ? ot.fx.speeds[r.duration] : ot.fx.speeds._default,
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            ot.isFunction(r.old) && r.old.call(this),
            r.queue && ot.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    ot.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Lt).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = ot.isEmptyObject(e)
              , o = ot.speed(t, n, r)
              , s = function() {
                var t = I(this, ot.extend({}, e), o);
                (i || Et.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s,
            i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , i = null != e && e + "queueHooks"
                  , o = ot.timers
                  , s = Et.get(this);
                if (i)
                    s[i] && s[i].stop && r(s[i]);
                else
                    for (i in s)
                        s[i] && s[i].stop && un.test(i) && r(s[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                    t = !1,
                    o.splice(i, 1));
                (t || !n) && ot.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = Et.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = ot.timers, s = r ? r.length : 0;
                for (n.finish = !0,
                ot.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; s > t; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    ot.each(["toggle", "show", "hide"], function(e, t) {
        var n = ot.fn[t];
        ot.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, r, i)
        }
    }),
    ot.each({
        slideDown: F("show"),
        slideUp: F("hide"),
        slideToggle: F("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        ot.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    ot.timers = [],
    ot.fx.tick = function() {
        var e, t = 0, n = ot.timers;
        for (on = ot.now(); t < n.length; t++)
            e = n[t],
            e() || n[t] !== e || n.splice(t--, 1);
        n.length || ot.fx.stop(),
        on = void 0
    }
    ,
    ot.fx.timer = function(e) {
        ot.timers.push(e),
        e() ? ot.fx.start() : ot.timers.pop()
    }
    ,
    ot.fx.interval = 13,
    ot.fx.start = function() {
        sn || (sn = e.setInterval(ot.fx.tick, ot.fx.interval))
    }
    ,
    ot.fx.stop = function() {
        e.clearInterval(sn),
        sn = null
    }
    ,
    ot.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    ot.fn.delay = function(t, n) {
        return t = ot.fx ? ot.fx.speeds[t] || t : t,
        n = n || "fx",
        this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    }
    ,
    function() {
        var e = G.createElement("input")
          , t = G.createElement("select")
          , n = t.appendChild(G.createElement("option"));
        e.type = "checkbox",
        rt.checkOn = "" !== e.value,
        rt.optSelected = n.selected,
        t.disabled = !0,
        rt.optDisabled = !n.disabled,
        e = G.createElement("input"),
        e.value = "t",
        e.type = "radio",
        rt.radioValue = "t" === e.value
    }();
    var ln, cn = ot.expr.attrHandle;
    ot.fn.extend({
        attr: function(e, t) {
            return Ct(this, ot.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ot.removeAttr(this, e)
            })
        }
    }),
    ot.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? ot.prop(e, t, n) : (1 === o && ot.isXMLDoc(e) || (t = t.toLowerCase(),
                i = ot.attrHooks[t] || (ot.expr.match.bool.test(t) ? ln : void 0)),
                void 0 !== n ? null === n ? void ot.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : (r = ot.find.attr(e, t),
                null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!rt.radioValue && "radio" === t && ot.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(wt);
            if (o && 1 === e.nodeType)
                for (; n = o[i++]; )
                    r = ot.propFix[n] || n,
                    ot.expr.match.bool.test(n) && (e[r] = !1),
                    e.removeAttribute(n)
        }
    }),
    ln = {
        set: function(e, t, n) {
            return t === !1 ? ot.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    ot.each(ot.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = cn[t] || ot.find.attr;
        cn[t] = function(e, t, r) {
            var i, o;
            return r || (o = cn[t],
            cn[t] = i,
            i = null != n(e, t, r) ? t.toLowerCase() : null,
            cn[t] = o),
            i
        }
    });
    var fn = /^(?:input|select|textarea|button)$/i
      , pn = /^(?:a|area)$/i;
    ot.fn.extend({
        prop: function(e, t) {
            return Ct(this, ot.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[ot.propFix[e] || e]
            })
        }
    }),
    ot.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && ot.isXMLDoc(e) || (t = ot.propFix[t] || t,
                i = ot.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ot.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : fn.test(e.nodeName) || pn.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    rt.optSelected || (ot.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ot.propFix[this.toLowerCase()] = this
    });
    var dn = /[\t\r\n\f]/g;
    ot.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, s, a, u = 0;
            if (ot.isFunction(e))
                return this.each(function(t) {
                    ot(this).addClass(e.call(this, t, W(this)))
                });
            if ("string" == typeof e && e)
                for (t = e.match(wt) || []; n = this[u++]; )
                    if (i = W(n),
                    r = 1 === n.nodeType && (" " + i + " ").replace(dn, " ")) {
                        for (s = 0; o = t[s++]; )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        a = ot.trim(r),
                        i !== a && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s, a, u = 0;
            if (ot.isFunction(e))
                return this.each(function(t) {
                    ot(this).removeClass(e.call(this, t, W(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(wt) || []; n = this[u++]; )
                    if (i = W(n),
                    r = 1 === n.nodeType && (" " + i + " ").replace(dn, " ")) {
                        for (s = 0; o = t[s++]; )
                            for (; r.indexOf(" " + o + " ") > -1; )
                                r = r.replace(" " + o + " ", " ");
                        a = ot.trim(r),
                        i !== a && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(ot.isFunction(e) ? function(n) {
                ot(this).toggleClass(e.call(this, n, W(this), t), t)
            }
            : function() {
                var t, r, i, o;
                if ("string" === n)
                    for (r = 0,
                    i = ot(this),
                    o = e.match(wt) || []; t = o[r++]; )
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    (void 0 === e || "boolean" === n) && (t = W(this),
                    t && Et.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Et.get(this, "__className__") || ""))
            }
            )
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && (" " + W(n) + " ").replace(dn, " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var hn = /\r/g
      , gn = /[\x20\t\r\n\f]+/g;
    ot.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length)
                    return r = ot.isFunction(e),
                    this.each(function(n) {
                        var i;
                        1 === this.nodeType && (i = r ? e.call(this, n, ot(this).val()) : e,
                        null == i ? i = "" : "number" == typeof i ? i += "" : ot.isArray(i) && (i = ot.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        t = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()],
                        t && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    });
                if (i)
                    return t = ot.valHooks[i.type] || ot.valHooks[i.nodeName.toLowerCase()],
                    t && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value,
                    "string" == typeof n ? n.replace(hn, "") : null == n ? "" : n)
            }
        }
    }),
    ot.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ot.find.attr(e, "value");
                    return null != t ? t : ot.trim(ot.text(e)).replace(gn, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++)
                        if (n = r[u],
                        !(!n.selected && u !== i || (rt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ot.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ot(n).val(),
                            o)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = ot.makeArray(t), s = i.length; s--; )
                        r = i[s],
                        (r.selected = ot.inArray(ot.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    ot.each(["radio", "checkbox"], function() {
        ot.valHooks[this] = {
            set: function(e, t) {
                return ot.isArray(t) ? e.checked = ot.inArray(ot(e).val(), t) > -1 : void 0
            }
        },
        rt.checkOn || (ot.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var mn = /^(?:focusinfocus|focusoutblur)$/;
    ot.extend(ot.event, {
        trigger: function(t, n, r, i) {
            var o, s, a, u, l, c, f, p = [r || G], d = nt.call(t, "type") ? t.type : t, h = nt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = r = r || G,
            3 !== r.nodeType && 8 !== r.nodeType && !mn.test(d + ot.event.triggered) && (d.indexOf(".") > -1 && (h = d.split("."),
            d = h.shift(),
            h.sort()),
            l = d.indexOf(":") < 0 && "on" + d,
            t = t[ot.expando] ? t : new ot.Event(d,"object" == typeof t && t),
            t.isTrigger = i ? 2 : 3,
            t.namespace = h.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = r),
            n = null == n ? [t] : ot.makeArray(n, [t]),
            f = ot.event.special[d] || {},
            i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !ot.isWindow(r)) {
                    for (u = f.delegateType || d,
                    mn.test(u + d) || (s = s.parentNode); s; s = s.parentNode)
                        p.push(s),
                        a = s;
                    a === (r.ownerDocument || G) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0; (s = p[o++]) && !t.isPropagationStopped(); )
                    t.type = o > 1 ? u : f.bindType || d,
                    c = (Et.get(s, "events") || {})[t.type] && Et.get(s, "handle"),
                    c && c.apply(s, n),
                    c = l && s[l],
                    c && c.apply && kt(s) && (t.result = c.apply(s, n),
                    t.result === !1 && t.preventDefault());
                return t.type = d,
                i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !kt(r) || l && ot.isFunction(r[d]) && !ot.isWindow(r) && (a = r[l],
                a && (r[l] = null),
                ot.event.triggered = d,
                r[d](),
                ot.event.triggered = void 0,
                a && (r[l] = a)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var r = ot.extend(new ot.Event, n, {
                type: e,
                isSimulated: !0
            });
            ot.event.trigger(r, null, t)
        }
    }),
    ot.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                ot.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? ot.event.trigger(e, t, n, !0) : void 0
        }
    }),
    ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ot.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    ot.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    rt.focusin = "onfocusin"in e,
    rt.focusin || ot.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            ot.event.simulate(t, e.target, ot.event.fix(e))
        };
        ot.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , i = Et.access(r, t);
                i || r.addEventListener(e, n, !0),
                Et.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , i = Et.access(r, t) - 1;
                i ? Et.access(r, t, i) : (r.removeEventListener(e, n, !0),
                Et.remove(r, t))
            }
        }
    });
    var vn = e.location
      , yn = ot.now()
      , xn = /\?/;
    ot.parseJSON = function(e) {
        return JSON.parse(e + "")
    }
    ,
    ot.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (r) {
            n = void 0
        }
        return (!n || n.getElementsByTagName("parsererror").length) && ot.error("Invalid XML: " + t),
        n
    }
    ;
    var bn = /#.*$/
      , wn = /([?&])_=[^&]*/
      , Tn = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , kn = /^(?:GET|HEAD)$/
      , En = /^\/\//
      , Nn = {}
      , Sn = {}
      , jn = "*/".concat("*")
      , Dn = G.createElement("a");
    Dn.href = vn.href,
    ot.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vn.href,
            type: "GET",
            isLocal: Cn.test(vn.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": jn,
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
                "text html": !0,
                "text json": ot.parseJSON,
                "text xml": ot.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? _(_(e, ot.ajaxSettings), t) : _(ot.ajaxSettings, e)
        },
        ajaxPrefilter: $(Nn),
        ajaxTransport: $(Sn),
        ajax: function(t, n) {
            function r(t, n, r, a) {
                var l, f, y, x, w, C = n;
                2 !== b && (b = 2,
                u && e.clearTimeout(u),
                i = void 0,
                s = a || "",
                T.readyState = t > 0 ? 4 : 0,
                l = t >= 200 && 300 > t || 304 === t,
                r && (x = X(p, T, r)),
                x = z(p, x, T, l),
                l ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"),
                w && (ot.lastModified[o] = w),
                w = T.getResponseHeader("etag"),
                w && (ot.etag[o] = w)),
                204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state,
                f = x.data,
                y = x.error,
                l = !y)) : (y = C,
                (t || !C) && (C = "error",
                0 > t && (t = 0))),
                T.status = t,
                T.statusText = (n || C) + "",
                l ? g.resolveWith(d, [f, C, T]) : g.rejectWith(d, [T, C, y]),
                T.statusCode(v),
                v = void 0,
                c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [T, p, l ? f : y]),
                m.fireWith(d, [T, C]),
                c && (h.trigger("ajaxComplete", [T, p]),
                --ot.active || ot.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var i, o, s, a, u, l, c, f, p = ot.ajaxSetup({}, n), d = p.context || p, h = p.context && (d.nodeType || d.jquery) ? ot(d) : ot.event, g = ot.Deferred(), m = ot.Callbacks("once memory"), v = p.statusCode || {}, y = {}, x = {}, b = 0, w = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === b) {
                        if (!a)
                            for (a = {}; t = Tn.exec(s); )
                                a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? s : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return b || (e = x[n] = x[n] || e,
                    y[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return b || (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > b)
                            for (t in e)
                                v[t] = [v[t], e[t]];
                        else
                            T.always(e[T.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || w;
                    return i && i.abort(t),
                    r(0, t),
                    this
                }
            };
            if (g.promise(T).complete = m.add,
            T.success = T.done,
            T.error = T.fail,
            p.url = ((t || p.url || vn.href) + "").replace(bn, "").replace(En, vn.protocol + "//"),
            p.type = n.method || n.type || p.method || p.type,
            p.dataTypes = ot.trim(p.dataType || "*").toLowerCase().match(wt) || [""],
            null == p.crossDomain) {
                l = G.createElement("a");
                try {
                    l.href = p.url,
                    l.href = l.href,
                    p.crossDomain = Dn.protocol + "//" + Dn.host != l.protocol + "//" + l.host
                } catch (C) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = ot.param(p.data, p.traditional)),
            B(Nn, p, n, T),
            2 === b)
                return T;
            c = ot.event && p.global,
            c && 0 === ot.active++ && ot.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !kn.test(p.type),
            o = p.url,
            p.hasContent || (p.data && (o = p.url += (xn.test(o) ? "&" : "?") + p.data,
            delete p.data),
            p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + yn++) : o + (xn.test(o) ? "&" : "?") + "_=" + yn++)),
            p.ifModified && (ot.lastModified[o] && T.setRequestHeader("If-Modified-Since", ot.lastModified[o]),
            ot.etag[o] && T.setRequestHeader("If-None-Match", ot.etag[o])),
            (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType),
            T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + jn + "; q=0.01" : "") : p.accepts["*"]);
            for (f in p.headers)
                T.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (p.beforeSend.call(d, T, p) === !1 || 2 === b))
                return T.abort();
            w = "abort";
            for (f in {
                success: 1,
                error: 1,
                complete: 1
            })
                T[f](p[f]);
            if (i = B(Sn, p, n, T)) {
                if (T.readyState = 1,
                c && h.trigger("ajaxSend", [T, p]),
                2 === b)
                    return T;
                p.async && p.timeout > 0 && (u = e.setTimeout(function() {
                    T.abort("timeout")
                }, p.timeout));
                try {
                    b = 1,
                    i.send(y, r)
                } catch (C) {
                    if (!(2 > b))
                        throw C;
                    r(-1, C)
                }
            } else
                r(-1, "No Transport");
            return T
        },
        getJSON: function(e, t, n) {
            return ot.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ot.get(e, void 0, t, "script")
        }
    }),
    ot.each(["get", "post"], function(e, t) {
        ot[t] = function(e, n, r, i) {
            return ot.isFunction(n) && (i = i || r,
            r = n,
            n = void 0),
            ot.ajax(ot.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, ot.isPlainObject(e) && e))
        }
    }),
    ot._evalUrl = function(e) {
        return ot.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    ot.fn.extend({
        wrapAll: function(e) {
            var t;
            return ot.isFunction(e) ? this.each(function(t) {
                ot(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = ot(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this)
        },
        wrapInner: function(e) {
            return this.each(ot.isFunction(e) ? function(t) {
                ot(this).wrapInner(e.call(this, t))
            }
            : function() {
                var t = ot(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }
            )
        },
        wrap: function(e) {
            var t = ot.isFunction(e);
            return this.each(function(n) {
                ot(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    ot.expr.filters.hidden = function(e) {
        return !ot.expr.filters.visible(e)
    }
    ,
    ot.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    }
    ;
    var An = /%20/g
      , qn = /\[\]$/
      , Ln = /\r?\n/g
      , Hn = /^(?:submit|button|image|reset|file)$/i
      , On = /^(?:input|select|textarea|keygen)/i;
    ot.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            t = ot.isFunction(t) ? t() : null == t ? "" : t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = ot.ajaxSettings && ot.ajaxSettings.traditional),
        ot.isArray(e) || e.jquery && !ot.isPlainObject(e))
            ot.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                U(n, e[n], t, i);
        return r.join("&").replace(An, "+")
    }
    ,
    ot.fn.extend({
        serialize: function() {
            return ot.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ot.prop(this, "elements");
                return e ? ot.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ot(this).is(":disabled") && On.test(this.nodeName) && !Hn.test(e) && (this.checked || !Ht.test(e))
            }).map(function(e, t) {
                var n = ot(this).val();
                return null == n ? null : ot.isArray(n) ? ot.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ln, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ln, "\r\n")
                }
            }).get()
        }
    }),
    ot.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    ;
    var Fn = {
        0: 200,
        1223: 204
    }
      , Pn = ot.ajaxSettings.xhr();
    rt.cors = !!Pn && "withCredentials"in Pn,
    rt.ajax = Pn = !!Pn,
    ot.ajaxTransport(function(t) {
        var n, r;
        return rt.cors || Pn && !t.crossDomain ? {
            send: function(i, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
                    for (s in t.xhrFields)
                        a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (s in i)
                    a.setRequestHeader(s, i[s]);
                n = function(e) {
                    return function() {
                        n && (n = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null,
                        "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Fn[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }
                ,
                a.onload = n(),
                r = a.onerror = n("error"),
                void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        n && r()
                    })
                }
                ,
                n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (u) {
                    if (n)
                        throw u
                }
            },
            abort: function() {
                n && n()
            }
        } : void 0
    }),
    ot.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return ot.globalEval(e),
                e
            }
        }
    }),
    ot.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    ot.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = ot("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && i("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    G.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Rn = []
      , Mn = /(=)\?(?=&|$)|\?\?/;
    ot.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Rn.pop() || ot.expando + "_" + yn++;
            return this[e] = !0,
            e
        }
    }),
    ot.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, s, a = t.jsonp !== !1 && (Mn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Mn.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = ot.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
        a ? t[a] = t[a].replace(Mn, "$1" + i) : t.jsonp !== !1 && (t.url += (xn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
        t.converters["script json"] = function() {
            return s || ot.error(i + " was not called"),
            s[0]
        }
        ,
        t.dataTypes[0] = "json",
        o = e[i],
        e[i] = function() {
            s = arguments
        }
        ,
        r.always(function() {
            void 0 === o ? ot(e).removeProp(i) : e[i] = o,
            t[i] && (t.jsonpCallback = n.jsonpCallback,
            Rn.push(i)),
            s && ot.isFunction(o) && o(s[0]),
            s = o = void 0
        }),
        "script") : void 0
    }),
    ot.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t,
        t = !1),
        t = t || G;
        var r = ht.exec(e)
          , i = !n && [];
        return r ? [t.createElement(r[1])] : (r = p([e], t, i),
        i && i.length && ot(i).remove(),
        ot.merge([], r.childNodes))
    }
    ;
    var In = ot.fn.load;
    ot.fn.load = function(e, t, n) {
        if ("string" != typeof e && In)
            return In.apply(this, arguments);
        var r, i, o, s = this, a = e.indexOf(" ");
        return a > -1 && (r = ot.trim(e.slice(a)),
        e = e.slice(0, a)),
        ot.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        s.length > 0 && ot.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            s.html(r ? ot("<div>").append(ot.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ot.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    ot.expr.filters.animated = function(e) {
        return ot.grep(ot.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    ot.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, l, c = ot.css(e, "position"), f = ot(e), p = {};
            "static" === c && (e.style.position = "relative"),
            a = f.offset(),
            o = ot.css(e, "top"),
            u = ot.css(e, "left"),
            l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1,
            l ? (r = f.position(),
            s = r.top,
            i = r.left) : (s = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            ot.isFunction(t) && (t = t.call(e, n, ot.extend({}, a))),
            null != t.top && (p.top = t.top - a.top + s),
            null != t.left && (p.left = t.left - a.left + i),
            "using"in t ? t.using.call(e, p) : f.css(p)
        }
    },
    ot.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    ot.offset.setOffset(this, e, t)
                });
            var t, n, r = this[0], i = {
                top: 0,
                left: 0
            }, o = r && r.ownerDocument;
            if (o)
                return t = o.documentElement,
                ot.contains(t, r) ? (i = r.getBoundingClientRect(),
                n = V(o),
                {
                    top: i.top + n.pageYOffset - t.clientTop,
                    left: i.left + n.pageXOffset - t.clientLeft
                }) : i
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], r = {
                    top: 0,
                    left: 0
                };
                return "fixed" === ot.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                ot.nodeName(e[0], "html") || (r = e.offset()),
                r.top += ot.css(e[0], "borderTopWidth", !0),
                r.left += ot.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - r.top - ot.css(n, "marginTop", !0),
                    left: t.left - r.left - ot.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === ot.css(e, "position"); )
                    e = e.offsetParent;
                return e || Kt
            })
        }
    }),
    ot.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        ot.fn[e] = function(r) {
            return Ct(this, function(e, r, i) {
                var o = V(e);
                return void 0 === i ? o ? o[t] : e[r] : void (o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
            }, e, r, arguments.length)
        }
    }),
    ot.each(["top", "left"], function(e, t) {
        ot.cssHooks[t] = S(rt.pixelPosition, function(e, n) {
            return n ? (n = N(e, t),
            Gt.test(n) ? ot(e).position()[t] + "px" : n) : void 0
        })
    }),
    ot.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        ot.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            ot.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r)
                  , s = n || (r === !0 || i === !0 ? "margin" : "border");
                return Ct(this, function(t, n, r) {
                    var i;
                    return ot.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                    Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ot.css(t, n, s) : ot.style(t, n, r, s)
                }, t, o ? r : void 0, o, null)
            }
        })
    }),
    ot.fn.extend({
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
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function() {
            return this.length
        }
    }),
    ot.fn.andSelf = ot.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return ot
    });
    var Wn = e.jQuery
      , $n = e.$;
    return ot.noConflict = function(t) {
        return e.$ === ot && (e.$ = $n),
        t && e.jQuery === ot && (e.jQuery = Wn),
        ot
    }
    ,
    t || (e.jQuery = e.$ = ot),
    ot
});
