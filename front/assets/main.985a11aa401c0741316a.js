!(function(e) {
  function t(t) {
    for (var r, l, u = t[0], o = t[1], i = t[2], d = 0, f = []; d < u.length; d++)
      (l = u[d]), Object.prototype.hasOwnProperty.call(s, l) && s[l] && f.push(s[l][0]), (s[l] = 0);
    for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
    for (c && c(t); f.length;) f.shift()();
    return a.push.apply(a, i || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, u = 1; u < n.length; u++) {
        var o = n[u];
        0 !== s[o] && (r = !1);
      }
      r && (a.splice(t--, 1), (e = l((l.s = n[0]))));
    }
    return e;
  }
  var r = {},
    s = { 0: 0 },
    a = [];
  function l(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, l), (n.l = !0), n.exports;
  }
  (l.m = e),
    (l.c = r),
    (l.d = function(e, t, n) {
      l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (l.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (l.t = function(e, t) {
      if ((1 & t && (e = l(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (l.r(n),
          Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
      )
        for (var r in e)
          l.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (l.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
            return e.default;
          }
          : function() {
            return e;
          };
      return l.d(t, 'a', t), t;
    }),
    (l.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (l.p = '/');
  var u = (window.webpackJsonp = window.webpackJsonp || []),
    o = u.push.bind(u);
  (u.push = t), (u = u.slice());
  for (var i = 0; i < u.length; i++) t(u[i]);
  var c = o;
  a.push([206, 1]), n();
})({
  206: function(e, t, n) {
    'use strict';
    var r =
      (this && this.__importDefault) ||
      function(e) {
        return e && e.__esModule ? e : { default: e };
      };
    Object.defineProperty(t, '__esModule', { value: !0 });
    var s = r(n(0)),
      a = r(n(4)),
      l = n(315),
      u = r(n(215)),
      o = document.getElementById('root');
    (o.hasChildNodes() ? a.default.hydrate : a.default.render)(
      s.default.createElement(l.BrowserRouter, null, s.default.createElement(u.default, null)),
      o
    );
  },
  215: function(e, t, n) {
    'use strict';
    var r,
      s =
        (this && this.__extends) ||
        ((r = function(e, t) {
          return (
            (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(e, t) {
                  e.__proto__ = t;
                }) ||
              function(e, t) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }),
            r(e, t)
          );
        }),
          function(e, t) {
            function n() {
              this.constructor = e;
            }
            r(e, t),
              (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
          }),
      a =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l = a(n(0));
    n(216);
    var u = a(n(218)),
      o = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          s(t, e),
          (t.prototype.render = function() {
            return l.default.createElement(u.default, null);
          }),
          t
        );
      })(l.default.Component);
    t.default = o;
  },
  216: function(e, t, n) {
    var r = n(45),
      s = n(217);
    'string' == typeof (s = s.__esModule ? s.default : s) && (s = [[e.i, s, '']]);
    var a = { insert: 'head', singleton: !1 };
    r(s, a);
    e.exports = s.locals || {};
  },
  217: function(e, t, n) {
    'use strict';
    n.r(t);
    var r = n(14),
      s = n.n(r),
      a = n(198),
      l = s()(!1);
    l.i(a.a), l.push([e.i, '', '']), (t.default = l);
  },
  218: function(e, t, n) {
    'use strict';
    var r =
      (this && this.__createBinding) ||
      (Object.create
        ? function(e, t, n, r) {
          void 0 === r && (r = n),
            Object.defineProperty(e, r, {
              enumerable: !0,
              get: function() {
                return t[n];
              },
            });
        }
        : function(e, t, n, r) {
          void 0 === r && (r = n), (e[r] = t[n]);
        }),
      s =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function(e, t) {
            Object.defineProperty(e, 'default', { enumerable: !0, value: t });
          }
          : function(e, t) {
            e.default = t;
          }),
      a =
        (this && this.__importStar) ||
        function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              'default' !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
          return s(t, e), t;
        };
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l = a(n(0)),
      u = a(n(219)),
      o = n(314);
    n(312),
      (t.default = function() {
        var e,
          t = l.useState('ws://localhost:8080'),
          n = t[0],
          r = t[1],
          s = l.useState([]),
          a = s[0],
          i = s[1],
          c = l.useState(10),
          d = c[0],
          f = c[1],
          j = l.useState({ x: 0, y: 0 }),
          m = j[0],
          p = j[1],
          b = l.useState(100),
          h = b[0],
          y = b[1],
          v = l.useState(100),
          g = v[0],
          k = v[1],
          w = o.Form.useForm()[0],
          _ = u.default(n),
          E = _.sendMessage,
          O = _.lastMessage,
          x = _.readyState;
        l.useEffect(
          function() {
            if (null !== O) {
              var e = O.data.split(' ');
              if ('mouse_position' === e[0]) {
                var t = e[1].split(',');
                p({ x: t[0], y: t[1] });
              } else if ('prnt_scrn' === e[0]) {
                var n = O.data.substring(10);
                console.log(n),
                  (document.getElementById('screen_wrapper').src = 'data:image/png;base64,' + n);
              }
              i(function(e) {
                return e.concat(O);
              });
            }
          },
          [O, i]
        ),
          l.useEffect(
            function() {
              return (
                window.removeEventListener('keydown', z),
                window.addEventListener('keydown', z),
                function() {
                  window.removeEventListener('keydown', z);
                }
              );
            },
            [d, h, g]
          );
        var z = function(e) {
          switch (e.key) {
            case 'ArrowLeft':
              e.preventDefault(), E('mouse_left ' + d);
              break;
            case 'ArrowRight':
              e.preventDefault(), E('mouse_right ' + d);
              break;
            case 'ArrowUp':
              e.preventDefault(), E('mouse_up ' + d);
              break;
            case 'ArrowDown':
              e.preventDefault(), E('mouse_down ' + d);
              break;
            case 's':
              E('draw_square ' + h);
              break;
            case 'r':
              E('draw_rectangle ' + h + ' ' + g);
              break;
            case 'c':
              E('draw_circle ' + h);
              break;
            case 'p':
              e.ctrlKey ? (e.preventDefault(), E('prnt_scrn')) : E('mouse_position');
          }
        },
          S = l.useCallback(function(e) {
            r('ws://' + e.wsocketUrl);
          }, []),
          C = l.useCallback(function(e) {
            return f(e);
          }, []),
          M = l.useCallback(function(e) {
            return y(e);
          }, []),
          P = l.useCallback(function(e) {
            return k(e);
          }, []),
          D = ((e = {}),
            (e[u.ReadyState.CONNECTING] = 'Connecting'),
            (e[u.ReadyState.OPEN] = 'Open'),
            (e[u.ReadyState.CLOSING] = 'Closing'),
            (e[u.ReadyState.CLOSED] = 'Closed'),
            (e[u.ReadyState.UNINSTANTIATED] = 'Uninstantiated'),
            e)[x];
        return l.default.createElement(
          'div',
          { style: { display: 'flex', flexDirection: 'row' } },
          l.default.createElement(
            o.Space,
            { direction: 'vertical', size: 'middle', style: { display: 'flex', width: '520px' } },
            l.default.createElement(
              o.Card,
              { title: 'Mouse control', size: 'small' },
              l.default.createElement(
                'div',
                null,
                'You can send messages to the ws server with the help of the keyboard arrow buttons'
              ),
              l.default.createElement(
                'div',
                null,
                'Mouse control offset (px):',
                l.default.createElement(o.InputNumber, {
                  min: 10,
                  max: 1920,
                  defaultValue: 10,
                  style: { marginLeft: '5px' },
                  onChange: C,
                }),
                l.default.createElement('br', null),
                'Mouse position (keyboard "p" button) (px):',
                l.default.createElement('div', null, 'x:', m.x, ', y:', m.y)
              )
            ),
            l.default.createElement(
              o.Card,
              { title: 'Drawing', size: 'small' },
              l.default.createElement(
                'div',
                null,
                'You can draw circle (keyboard "c" button), square (keyboard "s" button) and rectangular (keyboard "r" button)'
              ),
              l.default.createElement(
                'div',
                null,
                'Figure width or radius (px):',
                l.default.createElement(o.InputNumber, {
                  min: 1,
                  max: 1080,
                  defaultValue: 100,
                  style: { marginLeft: '5px' },
                  onChange: M,
                })
              ),
              l.default.createElement(
                'div',
                null,
                'Figure length (px):',
                l.default.createElement(o.InputNumber, {
                  min: 1,
                  max: 1080,
                  defaultValue: 100,
                  style: { marginLeft: '5px' },
                  onChange: P,
                })
              )
            ),
            l.default.createElement(
              o.Card,
              { title: 'WebSocket', size: 'small' },
              l.default.createElement(
                o.Form,
                {
                  form: w,
                  name: 'control-hooks',
                  onFinish: S,
                  initialValues: { wsocketUrl: 'localhost' },
                },
                l.default.createElement(
                  o.Form.Item,
                  { name: 'wsocketUrl', label: 'WebSocket URL' },
                  l.default.createElement(o.Input, { addonBefore: 'ws://' })
                ),
                l.default.createElement(
                  o.Form.Item,
                  null,
                  l.default.createElement(
                    o.Button,
                    { type: 'primary', htmlType: 'submit' },
                    'Submit'
                  )
                )
              )
            ),
            l.default.createElement(
              o.Card,
              { title: 'Status and history', size: 'small' },
              l.default.createElement('div', null, 'The WebSocket is currently ', D),
              l.default.createElement(
                'div',
                null,
                'Last command: ',
                O ? O.data.split(' ')[0] : null
              ),
              a.reverse().map(function(e, t) {
                return l.default.createElement(
                  'span',
                  { key: t },
                  e ? l.default.createElement('div', null, e.data.split(' ')[0]) : null
                );
              })
            )
          ),
          l.default.createElement(
            o.Space,
            { direction: 'vertical', size: 'middle' },
            l.default.createElement(
              'div',
              null,
              'You can get part of screen image',
              l.default.createElement('br', null),
              'with LCtrl+p keyboard buttons'
            ),
            l.default.createElement('img', {
              id: 'screen_wrapper',
              style: { width: '200px', height: '200px' },
            })
          )
        );
      });
  },
  227: function(e, t, n) {
    var r = {
      './af': 47,
      './af.js': 47,
      './ar': 48,
      './ar-dz': 49,
      './ar-dz.js': 49,
      './ar-kw': 50,
      './ar-kw.js': 50,
      './ar-ly': 51,
      './ar-ly.js': 51,
      './ar-ma': 52,
      './ar-ma.js': 52,
      './ar-sa': 53,
      './ar-sa.js': 53,
      './ar-tn': 54,
      './ar-tn.js': 54,
      './ar.js': 48,
      './az': 55,
      './az.js': 55,
      './be': 56,
      './be.js': 56,
      './bg': 57,
      './bg.js': 57,
      './bm': 58,
      './bm.js': 58,
      './bn': 59,
      './bn-bd': 60,
      './bn-bd.js': 60,
      './bn.js': 59,
      './bo': 61,
      './bo.js': 61,
      './br': 62,
      './br.js': 62,
      './bs': 63,
      './bs.js': 63,
      './ca': 64,
      './ca.js': 64,
      './cs': 65,
      './cs.js': 65,
      './cv': 66,
      './cv.js': 66,
      './cy': 67,
      './cy.js': 67,
      './da': 68,
      './da.js': 68,
      './de': 69,
      './de-at': 70,
      './de-at.js': 70,
      './de-ch': 71,
      './de-ch.js': 71,
      './de.js': 69,
      './dv': 72,
      './dv.js': 72,
      './el': 73,
      './el.js': 73,
      './en-au': 74,
      './en-au.js': 74,
      './en-ca': 75,
      './en-ca.js': 75,
      './en-gb': 76,
      './en-gb.js': 76,
      './en-ie': 77,
      './en-ie.js': 77,
      './en-il': 78,
      './en-il.js': 78,
      './en-in': 79,
      './en-in.js': 79,
      './en-nz': 80,
      './en-nz.js': 80,
      './en-sg': 81,
      './en-sg.js': 81,
      './eo': 82,
      './eo.js': 82,
      './es': 83,
      './es-do': 84,
      './es-do.js': 84,
      './es-mx': 85,
      './es-mx.js': 85,
      './es-us': 86,
      './es-us.js': 86,
      './es.js': 83,
      './et': 87,
      './et.js': 87,
      './eu': 88,
      './eu.js': 88,
      './fa': 89,
      './fa.js': 89,
      './fi': 90,
      './fi.js': 90,
      './fil': 91,
      './fil.js': 91,
      './fo': 92,
      './fo.js': 92,
      './fr': 93,
      './fr-ca': 94,
      './fr-ca.js': 94,
      './fr-ch': 95,
      './fr-ch.js': 95,
      './fr.js': 93,
      './fy': 96,
      './fy.js': 96,
      './ga': 97,
      './ga.js': 97,
      './gd': 98,
      './gd.js': 98,
      './gl': 99,
      './gl.js': 99,
      './gom-deva': 100,
      './gom-deva.js': 100,
      './gom-latn': 101,
      './gom-latn.js': 101,
      './gu': 102,
      './gu.js': 102,
      './he': 103,
      './he.js': 103,
      './hi': 104,
      './hi.js': 104,
      './hr': 105,
      './hr.js': 105,
      './hu': 106,
      './hu.js': 106,
      './hy-am': 107,
      './hy-am.js': 107,
      './id': 108,
      './id.js': 108,
      './is': 109,
      './is.js': 109,
      './it': 110,
      './it-ch': 111,
      './it-ch.js': 111,
      './it.js': 110,
      './ja': 112,
      './ja.js': 112,
      './jv': 113,
      './jv.js': 113,
      './ka': 114,
      './ka.js': 114,
      './kk': 115,
      './kk.js': 115,
      './km': 116,
      './km.js': 116,
      './kn': 117,
      './kn.js': 117,
      './ko': 118,
      './ko.js': 118,
      './ku': 119,
      './ku.js': 119,
      './ky': 120,
      './ky.js': 120,
      './lb': 121,
      './lb.js': 121,
      './lo': 122,
      './lo.js': 122,
      './lt': 123,
      './lt.js': 123,
      './lv': 124,
      './lv.js': 124,
      './me': 125,
      './me.js': 125,
      './mi': 126,
      './mi.js': 126,
      './mk': 127,
      './mk.js': 127,
      './ml': 128,
      './ml.js': 128,
      './mn': 129,
      './mn.js': 129,
      './mr': 130,
      './mr.js': 130,
      './ms': 131,
      './ms-my': 132,
      './ms-my.js': 132,
      './ms.js': 131,
      './mt': 133,
      './mt.js': 133,
      './my': 134,
      './my.js': 134,
      './nb': 135,
      './nb.js': 135,
      './ne': 136,
      './ne.js': 136,
      './nl': 137,
      './nl-be': 138,
      './nl-be.js': 138,
      './nl.js': 137,
      './nn': 139,
      './nn.js': 139,
      './oc-lnc': 140,
      './oc-lnc.js': 140,
      './pa-in': 141,
      './pa-in.js': 141,
      './pl': 142,
      './pl.js': 142,
      './pt': 143,
      './pt-br': 144,
      './pt-br.js': 144,
      './pt.js': 143,
      './ro': 145,
      './ro.js': 145,
      './ru': 146,
      './ru.js': 146,
      './sd': 147,
      './sd.js': 147,
      './se': 148,
      './se.js': 148,
      './si': 149,
      './si.js': 149,
      './sk': 150,
      './sk.js': 150,
      './sl': 151,
      './sl.js': 151,
      './sq': 152,
      './sq.js': 152,
      './sr': 153,
      './sr-cyrl': 154,
      './sr-cyrl.js': 154,
      './sr.js': 153,
      './ss': 155,
      './ss.js': 155,
      './sv': 156,
      './sv.js': 156,
      './sw': 157,
      './sw.js': 157,
      './ta': 158,
      './ta.js': 158,
      './te': 159,
      './te.js': 159,
      './tet': 160,
      './tet.js': 160,
      './tg': 161,
      './tg.js': 161,
      './th': 162,
      './th.js': 162,
      './tk': 163,
      './tk.js': 163,
      './tl-ph': 164,
      './tl-ph.js': 164,
      './tlh': 165,
      './tlh.js': 165,
      './tr': 166,
      './tr.js': 166,
      './tzl': 167,
      './tzl.js': 167,
      './tzm': 168,
      './tzm-latn': 169,
      './tzm-latn.js': 169,
      './tzm.js': 168,
      './ug-cn': 170,
      './ug-cn.js': 170,
      './uk': 171,
      './uk.js': 171,
      './ur': 172,
      './ur.js': 172,
      './uz': 173,
      './uz-latn': 174,
      './uz-latn.js': 174,
      './uz.js': 173,
      './vi': 175,
      './vi.js': 175,
      './x-pseudo': 176,
      './x-pseudo.js': 176,
      './yo': 177,
      './yo.js': 177,
      './zh-cn': 178,
      './zh-cn.js': 178,
      './zh-hk': 179,
      './zh-hk.js': 179,
      './zh-mo': 180,
      './zh-mo.js': 180,
      './zh-tw': 181,
      './zh-tw.js': 181,
    };
    function s(e) {
      var t = a(e);
      return n(t);
    }
    function a(e) {
      if (!n.o(r, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = 'MODULE_NOT_FOUND'), t);
      }
      return r[e];
    }
    (s.keys = function() {
      return Object.keys(r);
    }),
      (s.resolve = a),
      (e.exports = s),
      (s.id = 227);
  },
  312: function(e, t, n) {
    var r = n(45),
      s = n(313);
    'string' == typeof (s = s.__esModule ? s.default : s) && (s = [[e.i, s, '']]);
    var a = { insert: 'head', singleton: !1 };
    r(s, a);
    e.exports = s.locals || {};
  },
  313: function(e, t, n) {
    'use strict';
    n.r(t);
    var r = n(14),
      s = n.n(r)()(!1);
    s.push([e.i, '', '']), (t.default = s);
  },
});
