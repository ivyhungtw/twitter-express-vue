;(function (e) {
  function t(t) {
    for (
      var s, a, o = t[0], c = t[1], l = t[2], u = 0, d = [];
      u < o.length;
      u++
    )
      (a = o[u]),
        Object.prototype.hasOwnProperty.call(r, a) && r[a] && d.push(r[a][0]),
        (r[a] = 0)
    for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (e[s] = c[s])
    f && f(t)
    while (d.length) d.shift()()
    return i.push.apply(i, l || []), n()
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], s = !0, a = 1; a < n.length; a++) {
        var o = n[a]
        0 !== r[o] && (s = !1)
      }
      s && (i.splice(t--, 1), (e = c((c.s = n[0]))))
    }
    return e
  }
  var s = {},
    a = { app: 0 },
    r = { app: 0 },
    i = []
  function o(e) {
    return (
      c.p +
      'js/' +
      ({}[e] || e) +
      '.' +
      {
        'chunk-0805d522': 'c09cdab3',
        'chunk-72e25456': 'bd49acec',
        'chunk-85796188': '99e5abff',
        'chunk-9b8d9a98': 'c6ba640b',
        'chunk-101578b4': '2128e49d',
        'chunk-2ddc7857': 'b0f12e3f',
        'chunk-43b0f4ed': '7a9dd943',
        'chunk-4a2d9787': 'bc51ae73',
        'chunk-4fc785b7': '5ca3bc1e',
        'chunk-50f6107d': 'f42312d1',
        'chunk-62a5c27f': '758f642d',
        'chunk-7dfb09f9': '05984062',
        'chunk-9c15aa06': '10a7a910',
        'chunk-e9787968': 'b74c615f',
        'chunk-ef721bfc': '9899f6c5'
      }[e] +
      '.js'
    )
  }
  function c(t) {
    if (s[t]) return s[t].exports
    var n = (s[t] = { i: t, l: !1, exports: {} })
    return e[t].call(n.exports, n, n.exports, c), (n.l = !0), n.exports
  }
  ;(c.e = function (e) {
    var t = [],
      n = {
        'chunk-0805d522': 1,
        'chunk-72e25456': 1,
        'chunk-85796188': 1,
        'chunk-9b8d9a98': 1,
        'chunk-101578b4': 1,
        'chunk-2ddc7857': 1,
        'chunk-43b0f4ed': 1,
        'chunk-4a2d9787': 1,
        'chunk-4fc785b7': 1,
        'chunk-50f6107d': 1,
        'chunk-62a5c27f': 1,
        'chunk-7dfb09f9': 1,
        'chunk-9c15aa06': 1,
        'chunk-e9787968': 1,
        'chunk-ef721bfc': 1
      }
    a[e]
      ? t.push(a[e])
      : 0 !== a[e] &&
        n[e] &&
        t.push(
          (a[e] = new Promise(function (t, n) {
            for (
              var s =
                  'css/' +
                  ({}[e] || e) +
                  '.' +
                  {
                    'chunk-0805d522': '6933f9dc',
                    'chunk-72e25456': 'c726c24c',
                    'chunk-85796188': 'b85e360c',
                    'chunk-9b8d9a98': '5745571f',
                    'chunk-101578b4': '97dde428',
                    'chunk-2ddc7857': '8b5758b0',
                    'chunk-43b0f4ed': 'f0c12418',
                    'chunk-4a2d9787': '6e338157',
                    'chunk-4fc785b7': '21a9f28b',
                    'chunk-50f6107d': 'd720a432',
                    'chunk-62a5c27f': 'b35ab980',
                    'chunk-7dfb09f9': '6eea43db',
                    'chunk-9c15aa06': '52173306',
                    'chunk-e9787968': '02302dea',
                    'chunk-ef721bfc': '73194e41'
                  }[e] +
                  '.css',
                r = c.p + s,
                i = document.getElementsByTagName('link'),
                o = 0;
              o < i.length;
              o++
            ) {
              var l = i[o],
                u = l.getAttribute('data-href') || l.getAttribute('href')
              if ('stylesheet' === l.rel && (u === s || u === r)) return t()
            }
            var d = document.getElementsByTagName('style')
            for (o = 0; o < d.length; o++) {
              ;(l = d[o]), (u = l.getAttribute('data-href'))
              if (u === s || u === r) return t()
            }
            var f = document.createElement('link')
            ;(f.rel = 'stylesheet'),
              (f.type = 'text/css'),
              (f.onload = t),
              (f.onerror = function (t) {
                var s = (t && t.target && t.target.src) || r,
                  i = new Error(
                    'Loading CSS chunk ' + e + ' failed.\n(' + s + ')'
                  )
                ;(i.code = 'CSS_CHUNK_LOAD_FAILED'),
                  (i.request = s),
                  delete a[e],
                  f.parentNode.removeChild(f),
                  n(i)
              }),
              (f.href = r)
            var m = document.getElementsByTagName('head')[0]
            m.appendChild(f)
          }).then(function () {
            a[e] = 0
          }))
        )
    var s = r[e]
    if (0 !== s)
      if (s) t.push(s[2])
      else {
        var i = new Promise(function (t, n) {
          s = r[e] = [t, n]
        })
        t.push((s[2] = i))
        var l,
          u = document.createElement('script')
        ;(u.charset = 'utf-8'),
          (u.timeout = 120),
          c.nc && u.setAttribute('nonce', c.nc),
          (u.src = o(e))
        var d = new Error()
        l = function (t) {
          ;(u.onerror = u.onload = null), clearTimeout(f)
          var n = r[e]
          if (0 !== n) {
            if (n) {
              var s = t && ('load' === t.type ? 'missing' : t.type),
                a = t && t.target && t.target.src
              ;(d.message =
                'Loading chunk ' + e + ' failed.\n(' + s + ': ' + a + ')'),
                (d.name = 'ChunkLoadError'),
                (d.type = s),
                (d.request = a),
                n[1](d)
            }
            r[e] = void 0
          }
        }
        var f = setTimeout(function () {
          l({ type: 'timeout', target: u })
        }, 12e4)
        ;(u.onerror = u.onload = l), document.head.appendChild(u)
      }
    return Promise.all(t)
  }),
    (c.m = e),
    (c.c = s),
    (c.d = function (e, t, n) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
    }),
    (c.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (c.t = function (e, t) {
      if ((1 & t && (e = c(e)), 8 & t)) return e
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e
      var n = Object.create(null)
      if (
        (c.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var s in e)
          c.d(
            n,
            s,
            function (t) {
              return e[t]
            }.bind(null, s)
          )
      return n
    }),
    (c.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e['default']
            }
          : function () {
              return e
            }
      return c.d(t, 'a', t), t
    }),
    (c.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (c.p = '/'),
    (c.oe = function (e) {
      throw (console.error(e), e)
    })
  var l = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    u = l.push.bind(l)
  ;(l.push = t), (l = l.slice())
  for (var d = 0; d < l.length; d++) t(l[d])
  var f = u
  i.push([0, 'chunk-vendors']), n()
})({
  0: function (e, t, n) {
    e.exports = n('56d7')
  },
  '05fa': function (e, t, n) {},
  '0c38': function (e, t, n) {},
  '10d1': function (e, t, n) {
    e.exports = n.p + 'img/home.82742891.svg'
  },
  '12b0': function (e, t, n) {
    'use strict'
    n('9072')
  },
  '141a': function (e, t, n) {
    'use strict'
    var s = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t
        return n(
          'div',
          {
            staticClass: 'modal fade',
            attrs: {
              id: 'tweetReplyModal-' + e.tweet.id,
              tabindex: '-1',
              role: 'dialog',
              'aria-labelledby': 'exampleModalLabel',
              'aria-hidden': 'true'
            }
          },
          [
            n(
              'div',
              { staticClass: 'modal-dialog', attrs: { role: 'document' } },
              [
                n('div', { staticClass: 'modal-content' }, [
                  n('div', { staticClass: 'modal-header' }, [
                    n(
                      'button',
                      {
                        staticClass: 'start btn',
                        attrs: {
                          type: 'button',
                          'data-dismiss': 'modal',
                          'aria-label': 'Close'
                        },
                        on: { click: e.clearReplyContent }
                      },
                      [e._m(0)]
                    )
                  ]),
                  n('div', { staticClass: 'modal-body' }, [
                    n('div', { staticClass: 'container replyTarget' }, [
                      n('div', { staticClass: 'avatar' }, [
                        e.tweet.user
                          ? n('img', {
                              attrs: { src: e.tweet.user.avatar, alt: '' }
                            })
                          : n('img', {
                              attrs: {
                                src: e._f('emptyImageFilter')(''),
                                alt: ''
                              }
                            })
                      ]),
                      n('div', { staticClass: 'tweetInfo' }, [
                        n('div', { staticClass: 'userInfo' }, [
                          n('p', { staticClass: 'userName' }, [
                            e._v(
                              ' ' +
                                e._s(e.tweet.user ? e.tweet.user.name : '') +
                                ' '
                            )
                          ]),
                          n('p', { staticClass: 'userAccount' }, [
                            e._v(
                              ' @' +
                                e._s(e.tweet.user ? e.tweet.user.account : '') +
                                ' '
                            )
                          ]),
                          n('span', { staticClass: 'mx-1' }, [e._v('·')]),
                          n('p', { staticClass: 'tweetUpdateAt' }, [
                            e._v(
                              ' ' +
                                e._s(e._f('fromNow')(e.tweet.updatedAt)) +
                                ' '
                            )
                          ])
                        ]),
                        n('div', { staticClass: 'tweetContent' }, [
                          n('p', [e._v(e._s(e.tweet.description))])
                        ]),
                        n('div', { staticClass: 'panel' }, [
                          n('p', [
                            e._v(' 回覆給 '),
                            n('span', [
                              e._v(
                                ' @ ' +
                                  e._s(e.tweet.user ? e.tweet.user.name : '') +
                                  ' '
                              )
                            ])
                          ])
                        ])
                      ])
                    ]),
                    n('div', { staticClass: 'container myReply' }, [
                      n('div', { staticClass: 'avatar' }, [
                        n('img', {
                          attrs: {
                            src: e._f('emptyImageFilter')(e.currentUser.avatar),
                            alt: ''
                          }
                        })
                      ]),
                      n('div', { staticClass: 'tweetInf' }, [
                        n('div', { staticClass: 'input' }, [
                          n('textarea', {
                            directives: [
                              {
                                name: 'model',
                                rawName: 'v-model',
                                value: e.replyContent,
                                expression: 'replyContent'
                              }
                            ],
                            attrs: {
                              id: '',
                              name: '',
                              cols: '55',
                              rows: '5',
                              autofocus: '',
                              maxlength: '140',
                              required: '',
                              placeholder: '推你的回覆 (字數限制 140 字元)'
                            },
                            domProps: { value: e.replyContent },
                            on: {
                              input: function (t) {
                                t.target.composing ||
                                  (e.replyContent = t.target.value)
                              }
                            }
                          })
                        ])
                      ])
                    ])
                  ]),
                  n('div', { staticClass: 'modal-footer' }, [
                    n('div', { staticClass: 'tweetButton' }, [
                      n(
                        'button',
                        {
                          staticClass: 'btn',
                          attrs: { type: 'button', disabled: e.isProcessing },
                          on: {
                            click: function (t) {
                              return e.createReply(e.tweet.id)
                            }
                          }
                        },
                        [
                          e._v(
                            ' ' +
                              e._s(e.isProcessing ? '回覆中..' : '回覆') +
                              ' '
                          )
                        ]
                      )
                    ])
                  ])
                ])
              ]
            )
          ]
        )
      },
      a = [
        function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t
          return s('span', { attrs: { 'aria-hidden': 'true' } }, [
            s('img', { attrs: { src: n('27ae'), alt: '' } })
          ])
        }
      ],
      r = n('5530'),
      i = n('1da1'),
      o = (n('96cf'), n('b0c0'), n('2fa3')),
      c = n('2708'),
      l = n('2f62'),
      u = n('6783'),
      d = n('1157'),
      f = n.n(d),
      m = {
        name: 'TweetReplyModal',
        mixins: [c['a'], c['c']],
        props: {
          tweet: {
            type: Object,
            default: function () {
              return { user: { avatar: '', name: '', account: '' } }
            }
          }
        },
        data: function () {
          return { replyContent: '', isProcessing: !1 }
        },
        methods: {
          clearReplyContent: function () {
            this.replyContent = ''
          },
          createReply: function (e) {
            var t = this
            return Object(i['a'])(
              regeneratorRuntime.mark(function n() {
                var s, a, r, i, c, l, d, m
                return regeneratorRuntime.wrap(
                  function (n) {
                    while (1)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (((s = t.replyContentCheck(t.replyContent)), s)) {
                            n.next = 3
                            break
                          }
                          return n.abrupt('return')
                        case 3:
                          return (
                            (n.prev = 3),
                            (t.isProcessing = !0),
                            (a = { comment: t.replyContent }),
                            (n.next = 8),
                            u['a'].createReply(e, a)
                          )
                        case 8:
                          if (
                            ((r = n.sent),
                            (i = r.data),
                            (c = i.ReplyId),
                            (l = c),
                            'success' === i.status)
                          ) {
                            n.next = 14
                            break
                          }
                          throw new Error(i.message)
                        case 14:
                          console.log('replyId', c),
                            (d = t.$route.params.id),
                            t.$socket.emit('reply', {
                              userId: d,
                              replyId: c,
                              reply: t.replyContent,
                              currentUserId: t.currentUser.id
                            }),
                            o['a'].fire({
                              icon: 'success',
                              title: '回覆成功！'
                            }),
                            f()('#tweetReplyModal-'.concat(e)).modal('hide'),
                            (m = {
                              tweetId: e,
                              name: t.currentUser.name,
                              UserId: t.currentUser.id,
                              account: t.currentUser.account,
                              avatar: t.currentUser.avatar,
                              comment: t.replyContent,
                              createdAt: new Date(),
                              id: l
                            }),
                            console.log(m),
                            t.$bus.$emit('afterCreateReply', m),
                            t.clearReplyContent(),
                            (t.isProcessing = !1),
                            (n.next = 31)
                          break
                        case 26:
                          ;(n.prev = 26),
                            (n.t0 = n['catch'](3)),
                            (t.isProcessing = !1),
                            console.log(n.t0),
                            o['a'].fire({
                              icon: 'error',
                              title: '無法回復推文，請稍後再試！'
                            })
                        case 31:
                        case 'end':
                          return n.stop()
                      }
                  },
                  n,
                  null,
                  [[3, 26]]
                )
              })
            )()
          },
          replyContentCheck: function (e) {
            return e
              ? !(e.length > 140) ||
                  (o['a'].fire({
                    icon: 'error',
                    title: '回覆字數不得超過 140 個字！'
                  }),
                  !1)
              : (o['a'].fire({ icon: 'error', title: '尚未輸入回覆內容！' }),
                !1)
          },
          closeModal: function (e) {
            var t = document.querySelector('#tweetReplyModal-'.concat(e))
            t.classList.remove('show'),
              t.setAttribute('aria-hidden', 'true'),
              t.setAttribute('style', 'display: none')
            var n = document.getElementsByClassName('modal-backdrop')
            document.body.removeChild(n[0])
          }
        },
        computed: Object(r['a'])({}, Object(l['b'])(['currentUser']))
      },
      p = m,
      b = (n('d2b8'), n('2877')),
      h = Object(b['a'])(p, s, a, !1, null, 'a660268c', null)
    t['a'] = h.exports
  },
  1881: function (e, t, n) {
    e.exports = n.p + 'img/likedLikeCount.12d69306.svg'
  },
  '1a13': function (e, t, n) {
    'use strict'
    n('2e42')
  },
  2708: function (e, t, n) {
    'use strict'
    n.d(t, 'c', function () {
      return r
    }),
      n.d(t, 'b', function () {
        return i
      }),
      n.d(t, 'a', function () {
        return o
      })
    var s = n('c1df'),
      a = n.n(s),
      r = {
        filters: {
          fromNow: function (e) {
            return a.a.locale('zh-tw'), e ? a()(e).fromNow() : '-'
          }
        }
      },
      i = {
        filters: {
          exactDate: function (e) {
            return (
              a.a.locale('zh-tw'),
              e ? a()(e).format('a h:mm ⋅ YYYY年M月Do') : '-'
            )
          }
        }
      },
      o = {
        filters: {
          emptyImageFilter: function (e) {
            return e || 'https://via.placeholder.com/1000x1000/ccc/fff'
          }
        }
      }
  },
  '27ae': function (e, t, n) {
    e.exports = n.p + 'img/close.5dc8d9f5.svg'
  },
  '2e42': function (e, t, n) {},
  '2fa3': function (e, t, n) {
    'use strict'
    n.d(t, 'b', function () {
      return l
    }),
      n.d(t, 'a', function () {
        return u
      })
    n('d3b7')
    var s = n('bc3a'),
      a = n.n(s),
      r = n('3d20'),
      i = n.n(r),
      o = 'https://twitter-express-vue.herokuapp.com/api',
      c = a.a.create({ baseURL: o })
    c.interceptors.request.use(
      function (e) {
        var t = localStorage.getItem('token')
        return t && (e.headers['Authorization'] = 'Bearer '.concat(t)), e
      },
      function (e) {
        Promise.reject(e)
      }
    )
    var l = c,
      u = i.a.mixin({
        toast: !0,
        position: 'top-end',
        showConfirmButton: !1,
        timer: 5e3
      })
  },
  '341c': function (e, t, n) {
    e.exports = n.p + 'img/atNoti.ba841650.svg'
  },
  '390e': function (e, t, n) {},
  '459f': function (e, t, n) {
    e.exports = n.p + 'img/atHome.05204c5e.svg'
  },
  4678: function (e, t, n) {
    var s = {
      './af': '2bfb',
      './af.js': '2bfb',
      './ar': '8e73',
      './ar-dz': 'a356',
      './ar-dz.js': 'a356',
      './ar-kw': '423e',
      './ar-kw.js': '423e',
      './ar-ly': '1cfd',
      './ar-ly.js': '1cfd',
      './ar-ma': '0a84',
      './ar-ma.js': '0a84',
      './ar-sa': '8230',
      './ar-sa.js': '8230',
      './ar-tn': '6d83',
      './ar-tn.js': '6d83',
      './ar.js': '8e73',
      './az': '485c',
      './az.js': '485c',
      './be': '1fc1',
      './be.js': '1fc1',
      './bg': '84aa',
      './bg.js': '84aa',
      './bm': 'a7fa',
      './bm.js': 'a7fa',
      './bn': '9043',
      './bn-bd': '9686',
      './bn-bd.js': '9686',
      './bn.js': '9043',
      './bo': 'd26a',
      './bo.js': 'd26a',
      './br': '6887',
      './br.js': '6887',
      './bs': '2554',
      './bs.js': '2554',
      './ca': 'd716',
      './ca.js': 'd716',
      './cs': '3c0d',
      './cs.js': '3c0d',
      './cv': '03ec',
      './cv.js': '03ec',
      './cy': '9797',
      './cy.js': '9797',
      './da': '0f14',
      './da.js': '0f14',
      './de': 'b469',
      './de-at': 'b3eb',
      './de-at.js': 'b3eb',
      './de-ch': 'bb71',
      './de-ch.js': 'bb71',
      './de.js': 'b469',
      './dv': '598a',
      './dv.js': '598a',
      './el': '8d47',
      './el.js': '8d47',
      './en-au': '0e6b',
      './en-au.js': '0e6b',
      './en-ca': '3886',
      './en-ca.js': '3886',
      './en-gb': '39a6',
      './en-gb.js': '39a6',
      './en-ie': 'e1d3',
      './en-ie.js': 'e1d3',
      './en-il': '7333',
      './en-il.js': '7333',
      './en-in': 'ec2e',
      './en-in.js': 'ec2e',
      './en-nz': '6f50',
      './en-nz.js': '6f50',
      './en-sg': 'b7e9',
      './en-sg.js': 'b7e9',
      './eo': '65db',
      './eo.js': '65db',
      './es': '898b',
      './es-do': '0a3c',
      './es-do.js': '0a3c',
      './es-mx': 'b5b7',
      './es-mx.js': 'b5b7',
      './es-us': '55c9',
      './es-us.js': '55c9',
      './es.js': '898b',
      './et': 'ec18',
      './et.js': 'ec18',
      './eu': '0ff2',
      './eu.js': '0ff2',
      './fa': '8df4',
      './fa.js': '8df4',
      './fi': '81e9',
      './fi.js': '81e9',
      './fil': 'd69a',
      './fil.js': 'd69a',
      './fo': '0721',
      './fo.js': '0721',
      './fr': '9f26',
      './fr-ca': 'd9f8',
      './fr-ca.js': 'd9f8',
      './fr-ch': '0e49',
      './fr-ch.js': '0e49',
      './fr.js': '9f26',
      './fy': '7118',
      './fy.js': '7118',
      './ga': '5120',
      './ga.js': '5120',
      './gd': 'f6b4',
      './gd.js': 'f6b4',
      './gl': '8840',
      './gl.js': '8840',
      './gom-deva': 'aaf2',
      './gom-deva.js': 'aaf2',
      './gom-latn': '0caa',
      './gom-latn.js': '0caa',
      './gu': 'e0c5',
      './gu.js': 'e0c5',
      './he': 'c7aa',
      './he.js': 'c7aa',
      './hi': 'dc4d',
      './hi.js': 'dc4d',
      './hr': '4ba9',
      './hr.js': '4ba9',
      './hu': '5b14',
      './hu.js': '5b14',
      './hy-am': 'd6b6',
      './hy-am.js': 'd6b6',
      './id': '5038',
      './id.js': '5038',
      './is': '0558',
      './is.js': '0558',
      './it': '6e98',
      './it-ch': '6f12',
      './it-ch.js': '6f12',
      './it.js': '6e98',
      './ja': '079e',
      './ja.js': '079e',
      './jv': 'b540',
      './jv.js': 'b540',
      './ka': '201b',
      './ka.js': '201b',
      './kk': '6d79',
      './kk.js': '6d79',
      './km': 'e81d',
      './km.js': 'e81d',
      './kn': '3e92',
      './kn.js': '3e92',
      './ko': '22f8',
      './ko.js': '22f8',
      './ku': '2421',
      './ku.js': '2421',
      './ky': '9609',
      './ky.js': '9609',
      './lb': '440c',
      './lb.js': '440c',
      './lo': 'b29d',
      './lo.js': 'b29d',
      './lt': '26f9',
      './lt.js': '26f9',
      './lv': 'b97c',
      './lv.js': 'b97c',
      './me': '293c',
      './me.js': '293c',
      './mi': '688b',
      './mi.js': '688b',
      './mk': '6909',
      './mk.js': '6909',
      './ml': '02fb',
      './ml.js': '02fb',
      './mn': '958b',
      './mn.js': '958b',
      './mr': '39bd',
      './mr.js': '39bd',
      './ms': 'ebe4',
      './ms-my': '6403',
      './ms-my.js': '6403',
      './ms.js': 'ebe4',
      './mt': '1b45',
      './mt.js': '1b45',
      './my': '8689',
      './my.js': '8689',
      './nb': '6ce3',
      './nb.js': '6ce3',
      './ne': '3a39',
      './ne.js': '3a39',
      './nl': 'facd',
      './nl-be': 'db29',
      './nl-be.js': 'db29',
      './nl.js': 'facd',
      './nn': 'b84c',
      './nn.js': 'b84c',
      './oc-lnc': '167b',
      './oc-lnc.js': '167b',
      './pa-in': 'f3ff',
      './pa-in.js': 'f3ff',
      './pl': '8d57',
      './pl.js': '8d57',
      './pt': 'f260',
      './pt-br': 'd2d4',
      './pt-br.js': 'd2d4',
      './pt.js': 'f260',
      './ro': '972c',
      './ro.js': '972c',
      './ru': '957c',
      './ru.js': '957c',
      './sd': '6784',
      './sd.js': '6784',
      './se': 'ffff',
      './se.js': 'ffff',
      './si': 'eda5',
      './si.js': 'eda5',
      './sk': '7be6',
      './sk.js': '7be6',
      './sl': '8155',
      './sl.js': '8155',
      './sq': 'c8f3',
      './sq.js': 'c8f3',
      './sr': 'cf1e',
      './sr-cyrl': '13e9',
      './sr-cyrl.js': '13e9',
      './sr.js': 'cf1e',
      './ss': '52bd',
      './ss.js': '52bd',
      './sv': '5fbd',
      './sv.js': '5fbd',
      './sw': '74dc',
      './sw.js': '74dc',
      './ta': '3de5',
      './ta.js': '3de5',
      './te': '5cbb',
      './te.js': '5cbb',
      './tet': '576c',
      './tet.js': '576c',
      './tg': '3b1b',
      './tg.js': '3b1b',
      './th': '10e8',
      './th.js': '10e8',
      './tk': '5aff',
      './tk.js': '5aff',
      './tl-ph': '0f38',
      './tl-ph.js': '0f38',
      './tlh': 'cf75',
      './tlh.js': 'cf75',
      './tr': '0e81',
      './tr.js': '0e81',
      './tzl': 'cf51',
      './tzl.js': 'cf51',
      './tzm': 'c109',
      './tzm-latn': 'b53d',
      './tzm-latn.js': 'b53d',
      './tzm.js': 'c109',
      './ug-cn': '6117',
      './ug-cn.js': '6117',
      './uk': 'ada2',
      './uk.js': 'ada2',
      './ur': '5294',
      './ur.js': '5294',
      './uz': '2e8c',
      './uz-latn': '010e',
      './uz-latn.js': '010e',
      './uz.js': '2e8c',
      './vi': '2921',
      './vi.js': '2921',
      './x-pseudo': 'fd7e',
      './x-pseudo.js': 'fd7e',
      './yo': '7f33',
      './yo.js': '7f33',
      './zh-cn': '5c3a',
      './zh-cn.js': '5c3a',
      './zh-hk': '49ab',
      './zh-hk.js': '49ab',
      './zh-mo': '3a6c',
      './zh-mo.js': '3a6c',
      './zh-tw': '90ea',
      './zh-tw.js': '90ea'
    }
    function a(e) {
      var t = r(e)
      return n(t)
    }
    function r(e) {
      if (!n.o(s, e)) {
        var t = new Error("Cannot find module '" + e + "'")
        throw ((t.code = 'MODULE_NOT_FOUND'), t)
      }
      return s[e]
    }
    ;(a.keys = function () {
      return Object.keys(s)
    }),
      (a.resolve = r),
      (e.exports = a),
      (a.id = '4678')
  },
  4937: function (e, t, n) {
    'use strict'
    n('0c38')
  },
  '4c24': function (e, t, n) {},
  '4c9a': function (e, t, n) {
    e.exports = n.p + 'img/profile.6524f5cf.svg'
  },
  '4cce': function (e, t, n) {
    'use strict'
    var s = n('2fa3')
    t['a'] = {
      putUser: function (e, t) {
        return s['b'].put('/users/'.concat(e), t)
      },
      getUser: function (e) {
        return s['b'].get('/users/'.concat(e))
      },
      getCurrentUser: function () {
        return s['b'].get('/users/current_user')
      },
      getTotalUser: function () {
        return s['b'].get('/admin/users')
      },
      setUser: function (e) {
        return s['b'].post('/users', e)
      },
      getRecommendedFollowers: function () {
        return s['b'].get('/users')
      },
      getUserFollowers: function (e) {
        return s['b'].get('/users/'.concat(e, '/followers'))
      },
      getUserFollowings: function (e) {
        return s['b'].get('/users/'.concat(e, '/followings'))
      },
      followUser: function (e) {
        return s['b'].post('/users/'.concat(e, '/followships'))
      },
      unfollowUser: function (e) {
        return s['b'].delete('/users/'.concat(e, '/followships'))
      },
      subscribeUser: function (e) {
        return s['b'].post('/users/'.concat(e, '/subscriptions'))
      },
      unsubscribeUser: function (e) {
        return s['b'].delete('/users/'.concat(e, '/subscriptions'))
      }
    }
  },
  '4dfd': function (e, t, n) {
    'use strict'
    var s = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t
        return n(
          'form',
          {
            on: {
              submit: function (t) {
                return (
                  t.preventDefault(), t.stopPropagation(), e.handleSubmit(t)
                )
              }
            }
          },
          [
            n('div', { staticClass: 'row' }, [
              n('label', { attrs: { for: 'account' } }, [
                e._v('帳號'),
                e.inputCheck.account
                  ? e._e()
                  : n('span', { staticClass: 'note ml-5' }, [
                      e._v('*帳號長度不得大於 50 字元')
                    ])
              ]),
              n('input', {
                directives: [
                  {
                    name: 'model',
                    rawName: 'v-model',
                    value: e.form.account,
                    expression: 'form.account'
                  }
                ],
                attrs: {
                  id: 'account',
                  name: 'account',
                  type: 'text',
                  required: '',
                  maxlength: '50'
                },
                domProps: { value: e.form.account },
                on: {
                  input: function (t) {
                    t.target.composing ||
                      e.$set(e.form, 'account', t.target.value)
                  }
                }
              })
            ]),
            n('div', { staticClass: 'row' }, [
              n('label', { attrs: { for: 'name' } }, [
                e._v('名稱'),
                e.inputCheck.name
                  ? e._e()
                  : n('span', { staticClass: 'note ml-5' }, [
                      e._v('*名稱長度不得大於 50 字元')
                    ])
              ]),
              n('input', {
                directives: [
                  {
                    name: 'model',
                    rawName: 'v-model',
                    value: e.form.name,
                    expression: 'form.name'
                  }
                ],
                attrs: {
                  id: 'name',
                  name: 'name',
                  type: 'text',
                  maxlength: '50',
                  required: ''
                },
                domProps: { value: e.form.name },
                on: {
                  input: function (t) {
                    t.target.composing || e.$set(e.form, 'name', t.target.value)
                  }
                }
              })
            ]),
            n('div', { staticClass: 'row' }, [
              n('label', { attrs: { for: 'email' } }, [
                e._v('Email'),
                e.inputCheck.email
                  ? e._e()
                  : n('span', { staticClass: 'note ml-5' }, [
                      e._v('*信箱長度不得大於 50 字元')
                    ])
              ]),
              n('input', {
                directives: [
                  {
                    name: 'model',
                    rawName: 'v-model',
                    value: e.form.email,
                    expression: 'form.email'
                  }
                ],
                attrs: {
                  id: 'email',
                  name: 'email',
                  type: 'email',
                  maxlength: '50',
                  required: ''
                },
                domProps: { value: e.form.email },
                on: {
                  input: function (t) {
                    t.target.composing ||
                      e.$set(e.form, 'email', t.target.value)
                  }
                }
              })
            ]),
            n('div', { staticClass: 'row' }, [
              n('label', { attrs: { for: 'password' } }, [
                e._v('密碼'),
                e.inputCheck.password
                  ? e._e()
                  : n('span', { staticClass: 'note ml-5' }, [
                      e._v('*密碼長度需介於 4 和 12 之間')
                    ])
              ]),
              n('input', {
                directives: [
                  {
                    name: 'model',
                    rawName: 'v-model',
                    value: e.form.password,
                    expression: 'form.password'
                  }
                ],
                attrs: {
                  id: 'password',
                  name: 'password',
                  type: 'password',
                  required: '',
                  maxLength: '12'
                },
                domProps: { value: e.form.password },
                on: {
                  input: function (t) {
                    t.target.composing ||
                      e.$set(e.form, 'password', t.target.value)
                  }
                }
              })
            ]),
            n('div', { staticClass: 'row' }, [
              n('label', { attrs: { for: 'passwordCheck' } }, [
                e._v('密碼確認'),
                e.inputCheck.checkPassword
                  ? e._e()
                  : n('span', { staticClass: 'note ml-3' }, [
                      e._v('*密碼長度需介於 4 和 12 之間')
                    ])
              ]),
              n('input', {
                directives: [
                  {
                    name: 'model',
                    rawName: 'v-model',
                    value: e.form.checkPassword,
                    expression: 'form.checkPassword'
                  }
                ],
                attrs: {
                  id: 'passwordCheck',
                  name: 'passwordCheck',
                  type: 'password',
                  maxLength: '12',
                  required: ''
                },
                domProps: { value: e.form.checkPassword },
                on: {
                  input: function (t) {
                    t.target.composing ||
                      e.$set(e.form, 'checkPassword', t.target.value)
                  }
                }
              })
            ]),
            e.isSignUp
              ? [
                  n('div', { staticClass: 'row mt-4' }, [
                    n(
                      'button',
                      {
                        staticClass: 'btn submit',
                        attrs: { type: 'submit', disabled: e.isProcessing }
                      },
                      [
                        e._v(
                          ' ' + e._s(e.isProcessing ? '註冊中..' : '註冊') + ' '
                        )
                      ]
                    )
                  ]),
                  n('div', { staticClass: 'row' }, [
                    n(
                      'button',
                      {
                        staticClass: 'btn cancel',
                        on: {
                          click: function (t) {
                            return (
                              t.stopPropagation(),
                              t.preventDefault(),
                              e.goBackToSignIn(t)
                            )
                          }
                        }
                      },
                      [e._v(' 取消 ')]
                    )
                  ])
                ]
              : [
                  n('div', { staticClass: 'row' }, [
                    e.isSaved
                      ? n(
                          'button',
                          {
                            staticClass: 'btn update',
                            attrs: { disabled: '' }
                          },
                          [e._v('已儲存')]
                        )
                      : n(
                          'button',
                          {
                            staticClass: 'btn update',
                            attrs: { type: 'submit', disabled: e.isProcessing }
                          },
                          [
                            e._v(
                              ' ' +
                                e._s(e.isProcessing ? '儲存中..' : '儲存') +
                                ' '
                            )
                          ]
                        )
                  ])
                ]
          ],
          2
        )
      },
      a = [],
      r = n('1da1'),
      i = n('5530'),
      o = (n('96cf'), n('b0c0'), n('2fa3')),
      c = n('7696'),
      l = n('4cce'),
      u = n('2f62'),
      d = {
        name: 'AccountEditForm',
        props: { isSignUp: { type: Boolean, default: !0 } },
        created: function () {
          this.fetchCurrentUser(this.currentUser)
        },
        data: function () {
          return {
            form: {
              name: '',
              account: '',
              email: '',
              password: '',
              checkPassword: ''
            },
            isProcessing: !1,
            isSaved: !0,
            userChanged: !1,
            inputCheck: {
              account: !0,
              name: !0,
              email: !0,
              password: !0,
              checkPassword: !0
            }
          }
        },
        methods: {
          fetchCurrentUser: function (e) {
            var t = e.name,
              n = e.email,
              s = e.account
            this.form = Object(i['a'])(
              Object(i['a'])({}, this.form),
              {},
              { name: t, email: n, account: s }
            )
          },
          goBackToSignIn: function () {
            this.$router.push('/signin')
          },
          handleSubmit: function (e) {
            var t = this.formDataCheck()
            if (!t) return (this.isProcessing = !1)
            this.isSignUp
              ? this.handleSignUpSubmit(e)
              : this.handleSaveSetting(e)
          },
          formDataCheck: function () {
            var e = !1
            return this.form.account
              ? this.form.account.length > 50
                ? (o['a'].fire({
                    icon: 'info',
                    title: '帳號長度不得大於 50 個字元！'
                  }),
                  (this.inputCheck.account = !1),
                  e)
                : this.form.name
                ? this.form.name
                  ? this.form.email
                    ? this.form.password
                      ? this.form.password.length > 12 ||
                        this.form.password.length < 4
                        ? (o['a'].fire({
                            icon: 'info',
                            title: '密碼長度不得小於 4 或超過 12！'
                          }),
                          (this.inputCheck.password = !1),
                          e)
                        : this.form.checkPassword
                        ? this.form.password !== this.form.checkPassword
                          ? (o['a'].fire({
                              icon: 'error',
                              title: '密碼不相符！'
                            }),
                            e)
                          : (console.log('Data check passed'), !0)
                        : (o['a'].fire({
                            icon: 'info',
                            title: '請填寫密碼確認！'
                          }),
                          (this.inputCheck.checkPassword = !1),
                          e)
                      : (o['a'].fire({ icon: 'info', title: '請填寫密碼！' }),
                        (this.inputCheck.password = !1),
                        e)
                    : (o['a'].fire({ icon: 'info', title: '請填寫 Email！' }),
                      (this.inputCheck.email = !1),
                      e)
                  : (o['a'].fire({
                      icon: 'info',
                      title: '名稱長度不得大於 50 個字元！'
                    }),
                    (this.inputCheck.name = !1),
                    e)
                : (o['a'].fire({ icon: 'info', title: '請填寫名稱！' }),
                  (this.inputCheck.name = !1),
                  e)
              : (o['a'].fire({ icon: 'info', title: '請填寫帳號！' }),
                (this.inputCheck.account = !1),
                e)
          },
          handleSignUpSubmit: function () {
            var e = this
            return Object(r['a'])(
              regeneratorRuntime.mark(function t() {
                var n, s, a, r, i
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (((n = e.formDataCheck()), n)) {
                            t.next = 3
                            break
                          }
                          return t.abrupt('return')
                        case 3:
                          return (
                            (t.prev = 3),
                            (e.isProcessing = !0),
                            (s = e.form),
                            (t.next = 8),
                            c['a'].signUp(s)
                          )
                        case 8:
                          if (
                            ((a = t.sent), (r = a.data), 'success' === r.status)
                          ) {
                            t.next = 12
                            break
                          }
                          throw new Error(r)
                        case 12:
                          o['a'].fire({ icon: 'success', title: '註冊成功！' }),
                            e.$router.push('signin'),
                            (t.next = 23)
                          break
                        case 16:
                          ;(t.prev = 16),
                            (t.t0 = t['catch'](3)),
                            console.log(t.t0),
                            (i = '無法註冊，請稍後再試！'),
                            409 === t.t0.response.status &&
                              (i = '該 Email 已被註冊，請選擇其他 Email！'),
                            (e.isProcessing = !1),
                            o['a'].fire({ icon: 'error', title: i })
                        case 23:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[3, 16]]
                )
              })
            )()
          },
          handleSaveSetting: function () {
            var e = this
            return Object(r['a'])(
              regeneratorRuntime.mark(function t() {
                var n, s, a, r, c
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (((n = e.formDataCheck()), n)) {
                            t.next = 3
                            break
                          }
                          return t.abrupt('return')
                        case 3:
                          return (
                            (t.prev = 3),
                            (e.isProcessing = !0),
                            (s = e.currentUser.id),
                            (a = Object(i['a'])(
                              Object(i['a'])({}, e.form),
                              {},
                              { page: 'setting' }
                            )),
                            (t.next = 9),
                            l['a'].putUser(s, a)
                          )
                        case 9:
                          if (
                            ((r = t.sent),
                            (c = r.data),
                            console.log(c),
                            'success' === c.status)
                          ) {
                            t.next = 14
                            break
                          }
                          throw new Error(c.message)
                        case 14:
                          o['a'].fire({
                            icon: 'success',
                            title: '資料修改成功！'
                          }),
                            (e.isProcessing = !1),
                            (e.isSaved = !0),
                            (e.userChanged = !0),
                            (e.form.password = ''),
                            (e.form.checkPassword = ''),
                            (t.next = 27)
                          break
                        case 22:
                          ;(t.prev = 22),
                            (t.t0 = t['catch'](3)),
                            console.log(t.t0),
                            (e.isProcessing = !1),
                            o['a'].fire({
                              icon: 'error',
                              title: '無法變更使用者資訊，請稍候再試！'
                            })
                        case 27:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[3, 22]]
                )
              })
            )()
          }
        },
        watch: {
          currentUser: function (e) {
            this.fetchCurrentUser(e)
          },
          form: {
            handler: function () {
              if (!this.userChanged) return (this.userChanged = !0)
              this.isSaved = !1
            },
            deep: !0
          }
        },
        computed: Object(i['a'])({}, Object(u['b'])(['currentUser']))
      },
      f = d,
      m = (n('981e'), n('2877')),
      p = Object(m['a'])(f, s, a, !1, null, '6abcc760', null)
    t['a'] = p.exports
  },
  '4ee2': function (e, t, n) {},
  '54c2': function (e, t, n) {
    'use strict'
    n('05fa')
  },
  '56d7': function (e, t, n) {
    'use strict'
    n.r(t)
    n('e260'), n('e6cf'), n('cca6'), n('a79d')
    var s = n('2b0e'),
      a = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t
        return n(
          'div',
          { attrs: { id: 'simple-twitter' } },
          [n('router-view')],
          1
        )
      },
      r = [],
      i = n('5530'),
      o = (n('b0c0'), n('ab8b'), n('4989'), n('2f62')),
      c = {
        name: 'App',
        created: function () {
          var e = this
          console.log('[App.vue]: App.vue created!'),
            this.$bus.$on('updateSession', function (t) {
              e.updateSession(t)
            })
        },
        sockets: {
          'set session': function (e) {
            console.log('[App.vue - SESSION]: SET SESSION!'),
              console.log('-----------'),
              sessionStorage.setItem('rooms', JSON.stringify(e))
          }
        },
        methods: {
          startSession: function () {
            var e = localStorage.getItem('token')
            if ((console.log('token exists: ', !!e), e)) {
              console.log('[App.vue - SESSION]: Starting session...')
              var t = JSON.parse(sessionStorage.getItem('rooms'))
              t
                ? (console.log('rooms: '),
                  console.log(t),
                  console.log('-----------'),
                  console.log('[App.vue - SESSION]: rooms exist'),
                  console.log('userId: ' + this.currentUser.id),
                  this.$socket.emit('start session', t, this.currentUser.id))
                : (console.log('[App.vue - SESSION]: no rooms exist'),
                  console.log(
                    '[App.vue - SESSION]: userId ' + this.currentUser.id
                  ),
                  console.log(
                    '[App.vue - SESSION]: emit start session with { rooms: null }'
                  ),
                  this.$socket.emit(
                    'start session',
                    { rooms: null },
                    this.currentUser.id
                  ))
            }
          },
          updateSession: function (e) {
            var t = this.currentUser,
              n = t.name,
              s = t.id,
              a = ['# '.concat(n), 'self '.concat(s), ''.concat(e)]
            this.$socket.emit('start session', a, this.currentUser.id),
              sessionStorage.setItem('rooms', JSON.stringify(a))
          }
        },
        watch: {
          currentUser: {
            deep: !0,
            handler: function () {
              console.log('[App.vue - watch]: currentUser data changed'),
                this.startSession()
            }
          }
        },
        computed: Object(i['a'])({}, Object(o['b'])(['currentUser']))
      },
      l = c,
      u = (n('e409'), n('2877')),
      d = Object(u['a'])(l, a, r, !1, null, '520ba164', null),
      f = d.exports,
      m = n('1da1'),
      p =
        (n('96cf'),
        n('d3b7'),
        n('3ca3'),
        n('ddb0'),
        n('caad'),
        n('2532'),
        n('8c4f')),
      b = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t
        return n(
          'div',
          { staticClass: 'main flex' },
          [
            n('UserSidebar'),
            n(
              'div',
              { staticClass: 'mainSection' },
              [
                e._m(0),
                n('CreateTweet'),
                e.tweets.length
                  ? n('FollowingUsersTweets', {
                      attrs: { tweets: e.tweets },
                      on: { afterToggleLike: e.afterToggleLike }
                    })
                  : n('Spinner')
              ],
              1
            ),
            n('RecommendedFollowers')
          ],
          1
        )
      },
      h = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n('div', { staticClass: 'title stickyTitle' }, [
            n('h1', [e._v('首頁')])
          ])
        }
      ],
      v = (n('d81d'), n('c8e4')),
      g = n('999e'),
      w = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t
        return n(
          'div',
          { staticClass: 'createTweet' },
          [
            n('div', { staticClass: 'container' }, [
              n('div', { staticClass: 'avatar' }, [
                n('img', {
                  attrs: {
                    src: e._f('emptyImageFilter')(e.user.avatar),
                    alt: ''
                  }
                })
              ]),
              e._m(0)
            ]),
            e._m(1),
            n('CreateTweetModal', { attrs: { user: e.user } })
          ],
          1
        )
      },
      C = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n('div', { staticClass: 'textInput' }, [
            n(
              'p',
              {
                attrs: { 'data-toggle': 'modal', 'data-target': '#tweetModal' }
              },
              [e._v('有什麼新鮮事？')]
            )
          ])
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n('div', { staticClass: 'tweetButton' }, [
            n(
              'button',
              {
                staticClass: 'btn',
                attrs: {
                  type: 'button',
                  'data-toggle': 'modal',
                  'data-target': '#tweetModal'
                }
              },
              [e._v(' 推文 ')]
            )
          ])
        }
      ],
      k = n('bb7a'),
      j = n('2708'),
      x = {
        name: 'CreateTweet',
        mixins: [j['a']],
        components: { CreateTweetModal: k['a'] },
        created: function () {
          this.fetchCurrentUser()
        },
        data: function () {
          return { user: {}, tweetContent: '', isProcessing: !1 }
        },
        methods: {
          fetchCurrentUser: function () {
            this.user = this.currentUser
          }
        },
        computed: Object(i['a'])({}, Object(o['b'])(['currentUser']))
      },
      y = x,
      _ = (n('be23'), Object(u['a'])(y, w, C, !1, null, '711020c8', null)),
      T = _.exports,
      U = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t
        return n('div', { staticClass: 'container' }, [
          n(
            'ul',
            { staticClass: 'tweetList' },
            e._l(e.localTweets, function (t) {
              return n('TweetItem', {
                key: t.id,
                attrs: { tweet: t },
                on: { afterDeleteTweet: e.afterDeleteTweet }
              })
            }),
            1
          )
        ])
      },
      P = [],
      A = (n('4de4'), n('da7c')),
      E = {
        name: 'FollowingUsersTweets',
        props: { tweets: { type: Array, required: !0 } },
        created: function () {
          this.localTweets = this.tweets
        },
        components: { TweetItem: A['a'] },
        data: function () {
          return { localTweets: [] }
        },
        methods: {
          afterDeleteTweet: function (e) {
            this.localTweets = this.localTweets.filter(function (t) {
              return t.id !== e
            })
          }
        },
        watch: {
          tweets: function (e) {
            this.localTweets = e
          }
        }
      },
      I = E,
      O = (n('7e55'), Object(u['a'])(I, U, P, !1, null, '7225840a', null)),
      S = O.exports,
      R = n('2fa3'),
      M = n('6783'),
      F = n('b572'),
      L = {
        name: 'Main',
        components: {
          UserSidebar: v['a'],
          RecommendedFollowers: g['a'],
          CreateTweet: T,
          FollowingUsersTweets: S,
          Spinner: F['a']
        },
        created: function () {
          var e = this
          this.fetchTweets(),
            this.$bus.$on('afterCreateReply', function (t) {
              e.afterCreateReply(t)
            }),
            this.$bus.$on('afterCreateTweet', function (t) {
              e.afterCreateTweet(t)
            })
        },
        data: function () {
          return {
            tweets: [],
            tweet: {
              UserId: void 0,
              created: '',
              description: '',
              id: void 0,
              likeCount: 0,
              replyCount: 0,
              updatedAt: '',
              user: { account: '', name: '', avatar: '' },
              isLiked: !1
            }
          }
        },
        methods: {
          fetchTweets: function () {
            var e = this
            return Object(m['a'])(
              regeneratorRuntime.mark(function t() {
                var n, s
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (t.next = 3),
                            M['a'].getAllFollowedTweets()
                          )
                        case 3:
                          ;(n = t.sent),
                            (s = n.data),
                            (e.tweets = s),
                            (t.next = 11)
                          break
                        case 8:
                          ;(t.prev = 8),
                            (t.t0 = t['catch'](0)),
                            R['a'].fire({
                              icon: 'error',
                              title: '無法取得推文，請稍後再試！'
                            })
                        case 11:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[0, 8]]
                )
              })
            )()
          },
          afterCreateTweet: function (e) {
            this.tweets.unshift(
              Object(i['a'])(Object(i['a'])({}, this.tweet), e)
            )
          },
          afterToggleLike: function (e) {
            this.tweets = this.tweets.map(function (t) {
              return t.id === e.id
                ? Object(i['a'])(
                    Object(i['a'])({}, t),
                    {},
                    { isLiked: e.isLiked }
                  )
                : t
            })
          },
          afterCreateReply: function (e) {
            var t = e.tweetId
            console.log('tweetId: ' + t),
              (this.tweets = this.tweets.map(function (e) {
                return e.id !== t
                  ? Object(i['a'])({}, e)
                  : Object(i['a'])(
                      Object(i['a'])({}, e),
                      {},
                      { replyCount: e.replyCount + 1 }
                    )
              }))
          }
        }
      },
      $ = L,
      D = (n('8265'), Object(u['a'])($, b, h, !1, null, '3cf955a2', null)),
      N = D.exports,
      B = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t
        return n(
          'div',
          { staticClass: 'container flex' },
          [
            e._m(0),
            e._m(1),
            n('AccountEditForm', { attrs: { isSignUp: e.isSignUp } })
          ],
          1
        )
      },
      z = [
        function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t
          return s('div', { staticClass: 'logo' }, [
            s('img', { attrs: { src: n('a1d8'), alt: '' } })
          ])
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n('div', { staticClass: 'title' }, [
            n('h1', [e._v('建立你的帳號')])
          ])
        }
      ],
      q = n('4dfd'),
      W = {
        name: 'sign-up',
        components: { AccountEditForm: q['a'] },
        data: function () {
          return { isSignUp: !0 }
        }
      },
      J = W,
      Y = (n('8d24'), Object(u['a'])(J, B, z, !1, null, 'eca52d0c', null)),
      G = Y.exports,
      H = function () {
        var e = this,
          t = e.$createElement
        e._self._c
        return e._m(0)
      },
      Z = [
        function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t
          return s('div', { staticClass: 'container' }, [
            s('div', { staticClass: 'logo' }, [
              s('img', { attrs: { src: n('a1d8'), alt: '' } })
            ]),
            s('h1', [e._v('404 Not Found')])
          ])
        }
      ],
      K = { name: 'NotFound' },
      X = K,
      Q = (n('12b0'), Object(u['a'])(X, H, Z, !1, null, '82391ae4', null)),
      V = Q.exports,
      ee = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t
        return n('div', { staticClass: 'container py-5' }, [
          n(
            'form',
            {
              staticClass: 'w-100',
              on: {
                submit: function (t) {
                  return (
                    t.preventDefault(), t.stopPropagation(), e.handleSubmit(t)
                  )
                }
              }
            },
            [
              e._m(0),
              e._m(1),
              n('div', { staticClass: 'form-account form-label-group mb-2' }, [
                n('label', { attrs: { for: 'account' } }, [e._v('帳號')]),
                n('input', {
                  directives: [
                    {
                      name: 'model',
                      rawName: 'v-model',
                      value: e.account,
                      expression: 'account'
                    }
                  ],
                  staticClass: 'form-control',
                  attrs: {
                    id: 'account',
                    name: 'account',
                    type: 'text',
                    autocomplete: 'useraccount',
                    required: '',
                    autofocus: ''
                  },
                  domProps: { value: e.account },
                  on: {
                    input: function (t) {
                      t.target.composing || (e.account = t.target.value)
                    }
                  }
                })
              ]),
              n('div', { staticClass: 'form-password form-label-group mb-3' }, [
                n('label', { attrs: { for: 'password' } }, [e._v('密碼')]),
                n('input', {
                  directives: [
                    {
                      name: 'model',
                      rawName: 'v-model',
                      value: e.password,
                      expression: 'password'
                    }
                  ],
                  staticClass: 'form-control',
                  attrs: {
                    id: 'password',
                    name: 'password',
                    type: 'password',
                    autocomplete: 'current-password',
                    required: ''
                  },
                  domProps: { value: e.password },
                  on: {
                    input: function (t) {
                      t.target.composing || (e.password = t.target.value)
                    }
                  }
                })
              ]),
              n(
                'button',
                {
                  staticClass: 'btn btn-lg btn-primary btn-block mb-3',
                  attrs: { type: 'submit', disabled: e.isProcessing }
                },
                [e._v(' 登入 ')]
              ),
              n('div', { staticClass: 'sign-in text-center mb-3' }, [
                n(
                  'p',
                  [
                    n('router-link', { attrs: { to: '/signin' } }, [
                      e._v('前台登入')
                    ])
                  ],
                  1
                )
              ])
            ]
          )
        ])
      },
      te = [
        function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t
          return s('div', { staticClass: 'logo text-center' }, [
            s('img', { attrs: { src: n('a1d8'), alt: '' } })
          ])
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n('div', { staticClass: 'admin-text text-center mb-4' }, [
            n('h1', { staticClass: 'h3 mb-3 font-weight-normal' }, [
              e._v('後台登入')
            ])
          ])
        }
      ],
      ne = n('7696'),
      se = {
        name: 'AdminSignin',
        data: function () {
          return { account: '', password: '', isProcessing: !1 }
        },
        methods: {
          handleSubmit: function () {
            var e = this
            return Object(m['a'])(
              regeneratorRuntime.mark(function t() {
                var n, s
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (((t.prev = 0), e.account && e.password)) {
                            t.next = 4
                            break
                          }
                          return (
                            R['a'].fire({
                              icon: 'warning',
                              title: '請填入帳號和密碼'
                            }),
                            t.abrupt('return')
                          )
                        case 4:
                          return (
                            (e.isProcessing = !0),
                            (t.next = 7),
                            ne['a'].signIn({
                              account: e.account,
                              password: e.password
                            })
                          )
                        case 7:
                          if (
                            ((n = t.sent),
                            console.log('response:', n),
                            (s = n.data),
                            'success' === s.status)
                          ) {
                            t.next = 12
                            break
                          }
                          throw new Error(s.message)
                        case 12:
                          if ('admin' === s.user.role) {
                            t.next = 16
                            break
                          }
                          return (
                            R['a'].fire({
                              icon: 'warning',
                              title: '您非管理者身分!'
                            }),
                            (e.isProcessing = !1),
                            t.abrupt('return')
                          )
                        case 16:
                          localStorage.setItem('token', s.token),
                            e.$router.push('/admin/tweets'),
                            (t.next = 25)
                          break
                        case 20:
                          ;(t.prev = 20),
                            (t.t0 = t['catch'](0)),
                            (e.password = ''),
                            (e.isProcessing = !1),
                            R['a'].fire({
                              icon: 'warning',
                              title: '請確認您輸入了正確的帳號密碼'
                            })
                        case 25:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[0, 20]]
                )
              })
            )()
          }
        }
      },
      ae = se,
      re = (n('5890'), Object(u['a'])(ae, ee, te, !1, null, '5cc5ae45', null)),
      ie = re.exports,
      oe = n('4cce')
    s['a'].use(o['a'])
    var ce = new o['a'].Store({
      state: {
        currentUser: {
          account: '',
          avatar: '',
          cover: '',
          email: '',
          id: void 0,
          introduction: '',
          name: '',
          role: 'user'
        },
        isAuthenticated: !1,
        token: '',
        currentRoomId: void 0
      },
      mutations: {
        setCurrentUser: function (e, t) {
          ;(e.currentUser = Object(i['a'])(
            Object(i['a'])({}, e.currentUser),
            t
          )),
            (e.isAuthenticated = !0),
            (e.token = localStorage.getItem('token'))
        },
        revokeAuthentication: function (e) {
          ;(e.currentUser = {}),
            (e.isAuthenticated = !1),
            (e.token = ''),
            localStorage.removeItem('token'),
            sessionStorage.removeItem('rooms'),
            console.log('[RevokeAuthentication completed]')
        },
        setCurrentRoomId: function (e, t) {
          e.currentRoomId = t
        }
      },
      actions: {
        fetchCurrentUser: function (e) {
          return Object(m['a'])(
            regeneratorRuntime.mark(function t() {
              var n, s, a, r, i, o, c, l, u
              return regeneratorRuntime.wrap(
                function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = e.commit),
                          (t.prev = 1),
                          (t.next = 4),
                          oe['a'].getCurrentUser()
                        )
                      case 4:
                        if (
                          ((s = t.sent), (a = s.data), 'error' !== a.status)
                        ) {
                          t.next = 8
                          break
                        }
                        throw new Error(a.message)
                      case 8:
                        return (
                          (r = a.account),
                          (i = a.id),
                          (o = a.name),
                          (c = a.email),
                          (l = a.avatar),
                          (u = a.role),
                          n('setCurrentUser', {
                            account: r,
                            id: i,
                            name: o,
                            email: c,
                            avatar: l,
                            role: u
                          }),
                          t.abrupt('return', !0)
                        )
                      case 13:
                        return (
                          (t.prev = 13),
                          (t.t0 = t['catch'](1)),
                          n('revokeAuthentication'),
                          console.log(t.t0.message),
                          t.abrupt('return', !1)
                        )
                      case 18:
                      case 'end':
                        return t.stop()
                    }
                },
                t,
                null,
                [[1, 13]]
              )
            })
          )()
        }
      },
      modules: {}
    })
    s['a'].use(p['a'])
    var le = function (e, t, n) {
        var s = ce.state.currentUser
        s && 'admin' !== s.role ? n('/404') : n()
      },
      ue = [
        { path: '/', name: 'root', redirect: '/signin' },
        { path: '/signup', name: 'sign-up', component: G },
        {
          path: '/signin',
          name: 'sign-in',
          component: function () {
            return n.e('chunk-7dfb09f9').then(n.bind(null, '54e2'))
          }
        },
        { path: '/admin', name: 'admin-root', redirect: '/admin/signin' },
        { path: '/admin/signin', name: 'admin-sign-in', component: ie },
        { path: '/main', name: 'main', component: N },
        {
          path: '/notification/mentions',
          name: 'notification-mentions',
          component: function () {
            return n.e('chunk-43b0f4ed').then(n.bind(null, '49e5'))
          }
        },
        {
          path: '/notification',
          name: 'notification',
          component: function () {
            return n.e('chunk-e9787968').then(n.bind(null, '109a'))
          }
        },
        {
          path: '/publicMessage',
          name: 'publicMessage',
          component: function () {
            return n.e('chunk-4a2d9787').then(n.bind(null, 'ffce'))
          }
        },
        {
          path: '/privateMessage',
          name: 'privateMessage',
          component: function () {
            return n.e('chunk-9c15aa06').then(n.bind(null, 'e39f'))
          }
        },
        {
          path: '/accountEdit',
          name: 'account-edit',
          component: function () {
            return n.e('chunk-ef721bfc').then(n.bind(null, '376a'))
          }
        },
        {
          path: '/replydetail/:id',
          name: 'reply-detail',
          component: function () {
            return n.e('chunk-50f6107d').then(n.bind(null, '54f8'))
          }
        },
        {
          path: '/userprofile/:id/replies',
          name: 'user-profile-replies',
          component: function () {
            return Promise.all([
              n.e('chunk-0805d522'),
              n.e('chunk-72e25456')
            ]).then(n.bind(null, '236c'))
          }
        },
        {
          path: '/userprofile/:id/likes',
          name: 'user-profile-Likes',
          component: function () {
            return Promise.all([
              n.e('chunk-0805d522'),
              n.e('chunk-85796188')
            ]).then(n.bind(null, 'ff96'))
          }
        },
        {
          path: '/userprofile/:id/followers',
          name: 'user-profile-followers',
          component: function () {
            return n.e('chunk-4fc785b7').then(n.bind(null, '369c'))
          }
        },
        {
          path: '/userprofile/:id/following',
          name: 'user-profile-following',
          component: function () {
            return n.e('chunk-101578b4').then(n.bind(null, 'cc95'))
          }
        },
        {
          path: '/userprofile/:id',
          name: 'user-profile',
          component: function () {
            return Promise.all([
              n.e('chunk-0805d522'),
              n.e('chunk-9b8d9a98')
            ]).then(n.bind(null, '4a39'))
          }
        },
        {
          path: '/admin/tweets',
          name: 'admin-tweets',
          component: function () {
            return n.e('chunk-2ddc7857').then(n.bind(null, 'fa6a'))
          },
          beforeEnter: le
        },
        {
          path: '/admin/users',
          name: 'admin-users',
          component: function () {
            return n.e('chunk-62a5c27f').then(n.bind(null, '6135'))
          },
          beforeEnter: le
        },
        { path: '*', name: 'not-found', component: V }
      ],
      de = new p['a']({ linkExactActiveClass: 'active', routes: ue })
    de.beforeEach(
      (function () {
        var e = Object(m['a'])(
          regeneratorRuntime.mark(function e(t, n, s) {
            var a, r, i, o
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((a = localStorage.getItem('token')),
                      (r = ce.state.token),
                      (i = ce.state.isAuthenticated),
                      !a || a === r)
                    ) {
                      e.next = 9
                      break
                    }
                    return (
                      console.log('[Token-check]: token no match!'),
                      console.log('[Token-check]: check with server!'),
                      (e.next = 8),
                      ce.dispatch('fetchCurrentUser')
                    )
                  case 8:
                    i = e.sent
                  case 9:
                    ;(o = ['sign-in', 'sign-up', 'admin-sign-in']),
                      console.log('isAuthenticated: ' + i),
                      i ||
                        o.includes(t.name) ||
                        (console.log('no token!'), s('/signin')),
                      i && o.includes(t.name) && s('/main'),
                      s()
                  case 14:
                  case 'end':
                    return e.stop()
                }
            }, e)
          })
        )
        return function (t, n, s) {
          return e.apply(this, arguments)
        }
      })()
    )
    var fe = de
    n('bb31'), n('4ee2'), n('15f5'), n('7051')
    s['a'].prototype.$bus = new s['a']()
    var me = n('5132'),
      pe = n.n(me),
      be = n('8e27'),
      he = n.n(be),
      ve = 'https://twitter-express-vue.herokuapp.com/',
      ge = localStorage.getItem('token'),
      we = new he.a(ve, { reconnectionDelayMax: 1e4, auth: { token: ge } })
    s['a'].use(
      new pe.a({
        debug: !0,
        connection: we,
        vuex: { store: ce, actionPrefix: 'SOCKET_', mutationPrefix: 'SOCKET_' }
      })
    ),
      new s['a']({
        router: fe,
        store: ce,
        render: function (e) {
          return e(f)
        }
      }).$mount('#app')
  },
  5758: function (e, t, n) {
    e.exports = n.p + 'img/noti.1b5d9f0d.svg'
  },
  5890: function (e, t, n) {
    'use strict'
    n('6217')
  },
  6217: function (e, t, n) {},
  6569: function (e, t, n) {
    e.exports = n.p + 'img/commentCount.f3a21f8f.svg'
  },
  6783: function (e, t, n) {
    'use strict'
    var s = n('2fa3')
    t['a'] = {
      getAllFollowedTweets: function () {
        return s['b'].get('tweets')
      },
      createNewTweet: function (e) {
        return s['b'].post('/tweets', e)
      },
      adminDeleteTweet: function (e) {
        var t = e.tweetId
        return s['b'].delete('/admin/tweets/'.concat(t))
      },
      getUserTweet: function (e) {
        return s['b'].get('/users/'.concat(e, '/tweets'))
      },
      getUserFollowersTweet: function (e) {
        var t = e.userId
        return s['b'].get('/users/'.concat(t, '/followers'))
      },
      getTweet: function (e) {
        return s['b'].get('/tweets/'.concat(e))
      },
      getTweetReplies: function (e) {
        return s['b'].get('/tweets/'.concat(e, '/replies'))
      },
      getAllTweetsByUserId: function (e) {
        return s['b'].get('/users/'.concat(e, '/tweets'))
      },
      getAllRepliedTweets: function (e) {
        return s['b'].get('/users/'.concat(e, '/replied_tweets'))
      },
      getAllLikedTweets: function (e) {
        return s['b'].get('/users/'.concat(e, '/likes'))
      },
      createReply: function (e, t) {
        return s['b'].post('/tweets/'.concat(e, '/replies'), t)
      },
      likeTweet: function (e) {
        return s['b'].post('/tweets/'.concat(e, '/like'))
      },
      unlikeTweet: function (e) {
        return s['b'].delete('/tweets/'.concat(e, '/like'))
      },
      putTweet: function (e, t) {
        return s['b'].put('/tweets/'.concat(e), { description: t })
      },
      deleteTweet: function (e) {
        return s['b'].delete('/tweets/'.concat(e))
      }
    }
  },
  '6adc': function (e, t, n) {
    e.exports = n.p + 'img/likeCount.f8017931.svg'
  },
  '6d80': function (e, t, n) {
    e.exports = n.p + 'img/setting.2b17014d.svg'
  },
  7696: function (e, t, n) {
    'use strict'
    var s = n('2fa3')
    t['a'] = {
      signIn: function (e) {
        return s['b'].post('/users/login', e)
      },
      signUp: function (e) {
        return s['b'].post('/users', e)
      }
    }
  },
  '7e55': function (e, t, n) {
    'use strict'
    n('4c24')
  },
  8265: function (e, t, n) {
    'use strict'
    n('a2f2')
  },
  '85f5': function (e, t, n) {
    e.exports = n.p + 'img/atSetting.77d3ffe0.svg'
  },
  '89b5': function (e, t, n) {},
  '8d24': function (e, t, n) {
    'use strict'
    n('a241')
  },
  9072: function (e, t, n) {},
  '977e': function (e, t, n) {
    e.exports = n.p + 'img/logout.b18c7e38.svg'
  },
  '981e': function (e, t, n) {
    'use strict'
    n('a5e5')
  },
  '999e': function (e, t, n) {
    'use strict'
    var s = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t
        return n('div', { staticClass: 'container' }, [
          e._m(0),
          n('hr'),
          n('div', { staticClass: 'users' }, [
            n(
              'ul',
              { staticClass: 'usersList' },
              [
                e.isLoading
                  ? n('spinner', { staticClass: 'spinner' })
                  : e._l(e.recommendedFollowers, function (t) {
                      return n('li', { key: t.id, staticClass: 'user' }, [
                        n('div', { staticClass: 'userContent' }, [
                          n(
                            'div',
                            { staticClass: 'avatar' },
                            [
                              n(
                                'router-link',
                                { attrs: { to: '/userProfile/' + t.id } },
                                [
                                  n('img', {
                                    attrs: {
                                      src: e._f('emptyImageFilter')(t.avatar),
                                      alt: ''
                                    }
                                  })
                                ]
                              )
                            ],
                            1
                          ),
                          n('div', { staticClass: 'info' }, [
                            n(
                              'div',
                              { staticClass: 'name' },
                              [
                                n(
                                  'router-link',
                                  { attrs: { to: '/userProfile/' + t.id } },
                                  [n('h2', [e._v(e._s(t.name))])]
                                )
                              ],
                              1
                            ),
                            n(
                              'div',
                              { staticClass: 'account' },
                              [
                                n(
                                  'router-link',
                                  { attrs: { to: '/userProfile/' + t.id } },
                                  [n('h2', [e._v('@' + e._s(t.account))])]
                                )
                              ],
                              1
                            )
                          ]),
                          n('div', { staticClass: 'toggleFollow' }, [
                            t.isFollowed
                              ? n(
                                  'button',
                                  {
                                    staticClass: 'btn isFollowing',
                                    attrs: { disabled: e.isProcessing },
                                    on: {
                                      click: function (n) {
                                        return (
                                          n.preventDefault(),
                                          n.stopPropagation(),
                                          e.unfollowUser(t)
                                        )
                                      }
                                    }
                                  },
                                  [e._v(' 正在跟隨 ')]
                                )
                              : n(
                                  'button',
                                  {
                                    staticClass: 'btn',
                                    attrs: { disabled: e.isProcessing },
                                    on: {
                                      click: function (n) {
                                        return (
                                          n.preventDefault(),
                                          n.stopPropagation(),
                                          e.followUser(t)
                                        )
                                      }
                                    }
                                  },
                                  [e._v(' 跟隨 ')]
                                )
                          ])
                        ]),
                        n('hr')
                      ])
                    })
              ],
              2
            )
          ]),
          n('div', { staticClass: 'showMore' }, [
            n(
              'button',
              {
                staticClass: 'btn',
                on: { click: e.fetchRecommendedFollowers }
              },
              [e._v('顯示更多')]
            )
          ])
        ])
      },
      a = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n('div', { staticClass: 'title' }, [n('h1', [e._v('跟隨誰')])])
        }
      ],
      r = n('5530'),
      i = n('1da1'),
      o = (n('96cf'), n('4de4'), n('d81d'), n('b572')),
      c = n('4cce'),
      l = n('2708'),
      u = n('2fa3'),
      d = n('2f62'),
      f = {
        components: { Spinner: o['a'] },
        name: 'RecommendedFollowers',
        mixins: [l['a']],
        created: function () {
          var e = this
          this.fetchRecommendedFollowers(),
            this.$bus.$on('toggleFollowFromProfileCard', function (t) {
              e.renderAfterFollowToggle(t)
            })
        },
        data: function () {
          return { recommendedFollowers: [], isLoading: !0, isProcessing: !1 }
        },
        methods: {
          fetchRecommendedFollowers: function () {
            var e = this
            return Object(i['a'])(
              regeneratorRuntime.mark(function t() {
                var n, s
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (e.isLoading = !0),
                            (t.next = 4),
                            c['a'].getRecommendedFollowers()
                          )
                        case 4:
                          ;(n = t.sent),
                            (s = n.data),
                            (e.recommendedFollowers = s.filter(function (t) {
                              return t.id !== e.currentUser.id
                            })),
                            (e.isLoading = !1),
                            (t.next = 15)
                          break
                        case 10:
                          ;(t.prev = 10),
                            (t.t0 = t['catch'](0)),
                            (e.isLoading = !1),
                            console.log(t.t0),
                            u['a'].fire({
                              icon: 'error',
                              title: '無法取得推薦追蹤資料，請稍後再試！'
                            })
                        case 15:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[0, 10]]
                )
              })
            )()
          },
          followUser: function (e) {
            var t = this
            return Object(i['a'])(
              regeneratorRuntime.mark(function n() {
                var s, a, r
                return regeneratorRuntime.wrap(
                  function (n) {
                    while (1)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            (t.isProcessing = !0),
                            (s = e.id),
                            (n.next = 5),
                            c['a'].followUser(s)
                          )
                        case 5:
                          if (
                            ((a = n.sent), (r = a.data), 'success' === r.status)
                          ) {
                            n.next = 9
                            break
                          }
                          throw new Error(r.message)
                        case 9:
                          t.renderAfterFollowToggle(e),
                            t.$bus.$emit('afterFollowUser', e.id),
                            u['a'].fire({
                              icon: 'success',
                              title: '追蹤成功！'
                            }),
                            t.$socket.emit('follow', {
                              userId: e.id,
                              currentUserId: t.currentUser.id
                            }),
                            (t.isProcessing = !1),
                            (n.next = 21)
                          break
                        case 16:
                          ;(n.prev = 16),
                            (n.t0 = n['catch'](0)),
                            (t.isProcessing = !1),
                            console.log(n.t0),
                            u['a'].fire({
                              icon: 'error',
                              title: '無法執行動作，請稍後再試！'
                            })
                        case 21:
                        case 'end':
                          return n.stop()
                      }
                  },
                  n,
                  null,
                  [[0, 16]]
                )
              })
            )()
          },
          unfollowUser: function (e) {
            var t = this
            return Object(i['a'])(
              regeneratorRuntime.mark(function n() {
                var s, a
                return regeneratorRuntime.wrap(
                  function (n) {
                    while (1)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            (t.isProcessing = !0),
                            (n.next = 4),
                            c['a'].unfollowUser(e.id)
                          )
                        case 4:
                          if (
                            ((s = n.sent), (a = s.data), 'success' === a.status)
                          ) {
                            n.next = 8
                            break
                          }
                          throw new Error(a.message)
                        case 8:
                          t.renderAfterFollowToggle(e),
                            t.$bus.$emit('afterUnfollowUser', e.id),
                            u['a'].fire({
                              icon: 'success',
                              title: '取消追蹤成功！'
                            }),
                            (t.isProcessing = !1),
                            (n.next = 19)
                          break
                        case 14:
                          ;(n.prev = 14),
                            (n.t0 = n['catch'](0)),
                            (t.isProcessing = !1),
                            console.log(n.t0),
                            u['a'].fire({
                              icon: 'error',
                              title: '無法追蹤，請稍後再試！'
                            })
                        case 19:
                        case 'end':
                          return n.stop()
                      }
                  },
                  n,
                  null,
                  [[0, 14]]
                )
              })
            )()
          },
          disabledButtonAlert: function () {
            u['a'].fire({
              icon: 'info',
              title: '這個按鈕目前沒有功能，請下個月再試！'
            })
          },
          renderAfterFollowToggle: function (e) {
            var t = ''
            ;(t = 'number' === typeof e ? e : e.id),
              (this.recommendedFollowers = this.recommendedFollowers.map(
                function (e) {
                  return e.id === t
                    ? Object(r['a'])(
                        Object(r['a'])({}, e),
                        {},
                        { isFollowed: !e.isFollowed }
                      )
                    : e
                }
              ))
          }
        },
        computed: Object(r['a'])({}, Object(d['b'])(['currentUser']))
      },
      m = f,
      p = (n('1a13'), n('2877')),
      b = Object(p['a'])(m, s, a, !1, null, '233e0f66', null)
    t['a'] = b.exports
  },
  '999f': function (e, t, n) {
    e.exports = n.p + 'img/getNoti.8be5292b.svg'
  },
  a1d8: function (e, t) {
    e.exports =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAbhSURBVHgB7ZxdbttGEMeHlCUDRR90BPoEtk/Q+gSNT2AFbY2+JT5BpBPUfmvrArVPEOcEdk9Q5QRlbuACfWhjW5vZ4QqSZYqcpXa4FDA/QJFikeLHf+djd2cJoCiKoiiKoiiKoiiKoiiKoiiKoiiKoihKGQlsCWYEQ9iBA/x4AD3YB0Ofh/jKFhvBPV7RPb7n9D6DP/GvU3iEaXKF/98COi2IE2GEZ/kdvr6FTTBwh/9ewwPcoTg5dJROCmJ+wJufwLuNRVhHAlfwBNfJ7yRSp+iUIOJCvDggCmJg0iVhOiEIuqYM+vBHa0KsYi3mfxSmA64shciYH+ENivFXNDHoJDBODeAWz2UEkYlqIeYUfsa3t+BLkU3d4esTfTauZSdoaQllXvuYYR24z76cJ7/BGUQiiiCUPWGLBKDUlbkT+fsPmHXdJL/wXAvFpJRa/Qn4MYXPcBQjVW5dEIoXhRhZ/cZkCRfwFbba8+Y3x/yEx5oxj1mQo5BHXOFD0qogbDECCfHiZ09hjG/v6jeE18klBvoItCvIKQbvOjdlXVMPb4hQ62SIcoMx5Bgi0ZogzAB+hjfjHDi/Z+NDD3vwxlmbHSZ5xJvJSF0xmzrHK39T+mUKezFc1ZxWBKF0MsF+xnpyvLHH6CamwPst28Kzkq+te5twRF1jrXbfMUREXBBG3Jhiqzyua5UuM7OivoJ6xnhjJ5W/VwT6v5f+lOM+exAZ+Y7h7trWbJli4D5iiGFFtS2aI4ZlTC6tAnfMhWgzeA0dQNRCXD/gds3XhRg1WZRXmvycHPsSh1V9CbK6PlpJirHn124IImsh6dq4kZObkhMDaJ9BdRJBYuHgIjbLCTCRHl4Rs5AK62B3uvDibzcc47pHK9kL1eM236PL7MF7dG9HUiPEchbSW5NWmvoATpudBhmGt4nACELRo9QdXJYngogg5GpMaQCesFLbIiCPIQQG+yohfuZ0KTnBhkLxRwAZC+mXtuyck+PThaaVfRY/Atw8amCrDWQgE0tkBElLRlcxbgCHAbm6DELSZ6fL5Qycq1omkOWtElwQao3mhYVMWHGjrCWGIIVvoCEuq3opqJDbCm8hOy+GI3I7agscdoWCpWmWHFADqQrgOx7zOUzCC5KuXLwtImAMobtEYAQyZI1ac/Uog73WLRAkwenTBTl7XmFXLpUk+n5xidVAnl9rECSC+nJLvODsIGwdc/xa82DtkM+C2TZYiFlqiThGxNpH2josCd9CqBKGk+kl2xDU5xdi4AN7oqdh0PXADtdccTZ0gZxbCZNBYCQHF1nW4XrlGUhieGk30ScxMoiE5FjWHXM73xIdPxK48ipYSOJWycsIYmDaEXeV+wytE2mcapPF4cOT4+sTZ0MMnjZLyUCKmX/1Cm2fsIfWcwiMhCD37Auaifrq5lXthhb6cLbLITASgnyEJ+aJpmLu6maj6hG+2/oHAhNekBnOd3ADYxq+pwvF2NlG8+Nst5XUz+34ItExzCEexfRwiPJTjtuahZ/GDS/IEy0TyFjbmoAxpFiWcOwbxNfCcVuPW2AhrqAg+InWwqx85FLrtgwtHg3eZ5HphzwwW2kSqDXbanWPjMoOj7DKeard1jUIICIIu+XMMCPbBEPHOfbpiS8tFqqf1q1yW71tKwPiYJijweXk+DrC9Jb9G0ti2AHE2mndtW7LZ+DUk6iCODeTgz9TyqY8YkbJMrphXf0vkWAKbVYs3jCnpBsQfRWud5GzgQu0ikOfFrpUrP18QildU8y3hDvO8iLQXHJde3RB6OJMSStcpVj0eYhWwZ2rKHazVtAnMbKSr1+5Spfqc7ykJz/YVVW5dJV8G+tDDjDI11cr2vUaj1Q7a1dF2Zk4+7L7fbSxxjeldS7KzkRWC2jT10tezZh5C8OQax7LkBcELwL+wwtpcZmYK/S21Y8Zcxf2UjppxAWxzHN+6ZWtGz6iY4SiiPQtfGhFEItbaGngMz1TJKjZuwWgJwEqV2qXwknTmiAWt9BySItkHmjFbPOHAYR8ltazH8ZYZdCFRXpCUNsPDhi69DNzf7qhx2Vg8K4L2hT0nyg27Ltp3+A1USvk+LpoO7a0Koil5jEX+bPh+8WocQbtE+XxGq0LYnGivAf5Vt4U1oJUCaIIMqfyiQqxsCMBlw0eGRWIuGNZ9sIN9XxziE0xUnAWUwxLVAuZ41zYGEC4aG7tCcg+8MaHTggyp0EPe8MD6kMwWThhbGypn0RqdIDuCTGnk4LMWep7nGxccjp/RODXcBUje+LSaUGWoUHKfzFNLorr9mltRlG1kq1smkNRPTlFMe0U8RRFmHZZBEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVR6vkCxvlLFay+9pMAAAAASUVORK5CYII='
  },
  a241: function (e, t, n) {},
  a2f2: function (e, t, n) {},
  a5e5: function (e, t, n) {},
  b3eb0: function (e, t, n) {},
  b572: function (e, t, n) {
    'use strict'
    var s = function () {
        var e = this,
          t = e.$createElement
        e._self._c
        return e._m(0)
      },
      a = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n('div', { staticClass: 'spinner' }, [
            n('div', { staticClass: 'bouncing-loader' }, [
              n('div'),
              n('div'),
              n('div')
            ])
          ])
        }
      ],
      r = (n('b9a7'), n('2877')),
      i = {},
      o = Object(r['a'])(i, s, a, !1, null, '3ed9f437', null)
    t['a'] = o.exports
  },
  b6a3: function (e, t, n) {},
  b9a7: function (e, t, n) {
    'use strict'
    n('b3eb0')
  },
  bb31: function (e, t, n) {},
  bb7a: function (e, t, n) {
    'use strict'
    var s = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t
        return n(
          'div',
          {
            staticClass: 'modal fade',
            attrs: {
              id: 'tweetModal',
              tabindex: '-1',
              role: 'dialog',
              'aria-labelledby': 'exampleModalLabel',
              'aria-hidden': 'true'
            }
          },
          [
            n(
              'div',
              { staticClass: 'modal-dialog', attrs: { role: 'document' } },
              [
                n('div', { staticClass: 'modal-content' }, [
                  n('div', { staticClass: 'modal-header' }, [
                    n(
                      'button',
                      {
                        staticClass: 'start btn',
                        attrs: {
                          type: 'button',
                          'data-dismiss': 'modal',
                          'aria-label': 'Close'
                        },
                        on: {
                          click: function (t) {
                            e.tweetContent = ''
                          }
                        }
                      },
                      [e._m(0)]
                    )
                  ]),
                  n('div', { staticClass: 'modal-body' }, [
                    n('div', { staticClass: 'container' }, [
                      n('div', { staticClass: 'avatar' }, [
                        n('img', {
                          attrs: {
                            src: e._f('emptyImageFilter')(e.user.avatar),
                            alt: ''
                          }
                        })
                      ]),
                      n('div', { staticClass: 'textInput' }, [
                        n('textarea', {
                          directives: [
                            {
                              name: 'model',
                              rawName: 'v-model',
                              value: e.tweetContent,
                              expression: 'tweetContent'
                            }
                          ],
                          attrs: {
                            name: '',
                            id: '',
                            cols: '80',
                            rows: '5',
                            autofocus: '',
                            maxlength: '140',
                            required: '',
                            placeholder: '有什麼新鮮事？ (字數限制 140 字元)'
                          },
                          domProps: { value: e.tweetContent },
                          on: {
                            input: function (t) {
                              t.target.composing ||
                                (e.tweetContent = t.target.value)
                            }
                          }
                        })
                      ])
                    ])
                  ]),
                  n('div', { staticClass: 'modal-footer' }, [
                    n('div', { staticClass: 'tweetButton' }, [
                      n(
                        'button',
                        {
                          staticClass: 'btn',
                          attrs: { type: 'button', disabled: e.isProcessing },
                          on: { click: e.createNewTweet }
                        },
                        [
                          e._v(
                            ' ' + e._s(e.isProcessing ? '推文中' : '推文') + ' '
                          )
                        ]
                      )
                    ])
                  ])
                ])
              ]
            )
          ]
        )
      },
      a = [
        function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t
          return s('span', { attrs: { 'aria-hidden': 'true' } }, [
            s('img', { attrs: { src: n('27ae'), alt: '' } })
          ])
        }
      ],
      r = n('5530'),
      i = n('1da1'),
      o = (n('96cf'), n('a4d3'), n('e01a'), n('b0c0'), n('498a'), n('2fa3')),
      c = n('2708'),
      l = n('6783'),
      u = n('2f62'),
      d = n('1157'),
      f = n.n(d),
      m = {
        name: 'CreateTweetModal',
        props: { user: { type: Object, required: !0 } },
        mixins: [c['a']],
        data: function () {
          return { tweetContent: '', isProcessing: !1 }
        },
        methods: {
          createNewTweet: function () {
            var e = this
            return Object(i['a'])(
              regeneratorRuntime.mark(function t() {
                var n, s, a, r, i, c, u, d, m, p, b, h, v, g, w, C
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (((n = e.contentCheck(e.tweetContent)), n)) {
                            t.next = 4
                            break
                          }
                          return (e.tweetContent = ''), t.abrupt('return')
                        case 4:
                          return (
                            (t.prev = 4),
                            (e.isProcessing = !0),
                            (s = { description: e.tweetContent }),
                            (t.next = 9),
                            l['a'].createNewTweet(s)
                          )
                        case 9:
                          if (
                            ((a = t.sent),
                            (r = a.data),
                            console.log(r),
                            'success' === r.status)
                          ) {
                            t.next = 14
                            break
                          }
                          throw new Error(r.message)
                        case 14:
                          ;(i = r.tweet),
                            (c = i.id),
                            (u = i.UserId),
                            (d = i.createdAt),
                            (m = i.description),
                            (p = i.updatedAt),
                            (b = e.currentUser),
                            (h = b.account),
                            (v = b.name),
                            (g = b.avatar),
                            (w = {
                              user: { account: h, name: v, avatar: g },
                              id: c,
                              UserId: u,
                              createdAt: d,
                              description: m,
                              updatedAt: p
                            }),
                            e.$socket.emit('notification', {
                              userId: u,
                              tweetId: c,
                              tweet: m
                            }),
                            o['a'].fire({
                              icon: 'success',
                              title: '推文成功！'
                            }),
                            f()('#tweetModal').modal('hide'),
                            (C = '#tweetModal'),
                            e.$bus.$emit('closeModal', C),
                            e.$bus.$emit('afterCreateTweet', w),
                            (e.tweetContent = ''),
                            (e.isProcessing = !1),
                            (t.next = 32)
                          break
                        case 27:
                          ;(t.prev = 27),
                            (t.t0 = t['catch'](4)),
                            console.log(t.t0),
                            (e.isProcessing = !1),
                            o['a'].fire({
                              icon: 'error',
                              title: '無法推文，請稍後再試！'
                            })
                        case 32:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[4, 27]]
                )
              })
            )()
          },
          contentCheck: function (e) {
            var t = e.trim()
            return t
              ? !(t.length > 140) ||
                  (o['a'].fire({
                    icon: 'error',
                    title: '推文字數不得超過 140 個字！'
                  }),
                  !1)
              : (o['a'].fire({ icon: 'error', title: '尚未輸入推文內容！' }),
                !1)
          },
          closeModal: function (e) {
            var t = document.querySelector('#'.concat(e))
            t.classList.remove('show'),
              t.setAttribute('aria-hidden', 'true'),
              t.setAttribute('style', 'display: none')
            var n = document.getElementsByClassName('modal-backdrop')
            document.body.removeChild(n[0])
          }
        },
        computed: Object(r['a'])({}, Object(u['b'])(['currentUser']))
      },
      p = m,
      b = (n('54c2'), n('2877')),
      h = Object(b['a'])(p, s, a, !1, null, '44295052', null)
    t['a'] = h.exports
  },
  be23: function (e, t, n) {
    'use strict'
    n('390e')
  },
  c8e4: function (e, t, n) {
    'use strict'
    var s = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t
        return s('div', { staticClass: 'userSidebar' }, [
          s(
            'div',
            { staticClass: 'logo' },
            [
              s('router-link', { attrs: { to: '/main' } }, [
                s('img', { attrs: { src: n('a1d8'), alt: '' } })
              ])
            ],
            1
          ),
          s('div', { staticClass: 'buttonList' }, [
            s('div', { staticClass: 'navItem index' }, [
              'main' === e.location
                ? s('div', { staticClass: 'icon' }, [
                    s('img', { attrs: { src: n('459f'), alt: '' } })
                  ])
                : s('div', { staticClass: 'icon' }, [
                    s('img', { attrs: { src: n('10d1'), alt: '' } })
                  ]),
              s(
                'button',
                { staticClass: 'btn' },
                [
                  s('router-link', { attrs: { to: '/main' } }, [
                    'main' === e.location
                      ? s(
                          'p',
                          {
                            staticClass: 'located',
                            attrs: { id: 'routerMain' }
                          },
                          [e._v(' 首頁 ')]
                        )
                      : s('p', { attrs: { id: 'routerMain' } }, [e._v('首頁')])
                  ])
                ],
                1
              )
            ]),
            s('div', { staticClass: 'navItem notification' }, [
              s('div', { staticClass: 'icon' }, [
                this.noti.length > 0
                  ? s('img', { attrs: { src: n('999f'), alt: '' } })
                  : e.notification
                  ? s('img', { attrs: { src: n('341c'), alt: '' } })
                  : s('img', { attrs: { src: n('5758'), alt: '' } })
              ]),
              s(
                'button',
                { staticClass: 'btn' },
                [
                  s('router-link', { attrs: { to: '/notification' } }, [
                    'notification' === e.location
                      ? s(
                          'p',
                          {
                            staticClass: 'located',
                            attrs: { id: 'routerNotification' }
                          },
                          [e._v(' 通知 ')]
                        )
                      : s('p', { attrs: { id: 'routerNotification' } }, [
                          e._v('通知')
                        ])
                  ])
                ],
                1
              )
            ]),
            s('div', { staticClass: 'navItem userProfile' }, [
              (e.location,
              s('div', { staticClass: 'icon' }, [
                s('i', { staticClass: 'far fa-envelope tempIcon' })
              ])),
              s(
                'button',
                { staticClass: 'btn' },
                [
                  s('router-link', { attrs: { to: '/publicMessage' } }, [
                    'publicMessage' === e.location
                      ? s(
                          'p',
                          {
                            staticClass: 'located',
                            attrs: { id: 'routerPublicMessage' }
                          },
                          [e._v(' 公開聊天室 ')]
                        )
                      : s('p', { attrs: { id: 'routerPublicMessage' } }, [
                          e._v('公開聊天室')
                        ])
                  ])
                ],
                1
              )
            ]),
            s('div', { staticClass: 'navItem userProfile' }, [
              (e.location,
              s('div', { staticClass: 'icon' }, [
                s('i', { staticClass: 'far fa-envelope tempIcon' })
              ])),
              s(
                'button',
                { staticClass: 'btn' },
                [
                  s('router-link', { attrs: { to: '/privateMessage' } }, [
                    'privateMessage' === e.location
                      ? s(
                          'p',
                          {
                            staticClass: 'located',
                            attrs: { id: 'routerPrivateMessage' }
                          },
                          [e._v(' 私人訊息 ')]
                        )
                      : s('p', { attrs: { id: 'routerPrivateMessage' } }, [
                          e._v('私人訊息')
                        ])
                  ])
                ],
                1
              )
            ]),
            s('div', { staticClass: 'navItem userProfile' }, [
              'userProfile' === e.location
                ? s('div', { staticClass: 'icon' }, [
                    s('img', { attrs: { src: n('fc4c'), alt: '' } })
                  ])
                : s('div', { staticClass: 'icon' }, [
                    s('img', { attrs: { src: n('4c9a'), alt: '' } })
                  ]),
              s(
                'button',
                { staticClass: 'btn' },
                [
                  s(
                    'router-link',
                    {
                      attrs: {
                        to: {
                          name: 'user-profile',
                          params: { id: e.currentUser.id }
                        }
                      }
                    },
                    [
                      'userProfile' === e.location
                        ? s(
                            'p',
                            {
                              staticClass: 'located',
                              attrs: { id: 'routerProfile' }
                            },
                            [e._v(' 個人資料 ')]
                          )
                        : s('p', { attrs: { id: 'routerProfile' } }, [
                            e._v('個人資料')
                          ])
                    ]
                  )
                ],
                1
              )
            ]),
            s('div', { staticClass: 'navItem setting' }, [
              'accountEdit' === e.location
                ? s('div', { staticClass: 'icon' }, [
                    s('img', { attrs: { src: n('85f5'), alt: '' } })
                  ])
                : s('div', { staticClass: 'icon' }, [
                    s('img', { attrs: { src: n('6d80'), alt: '' } })
                  ]),
              s(
                'button',
                { staticClass: 'btn' },
                [
                  s('router-link', { attrs: { to: '/accountEdit' } }, [
                    'accountEdit' === e.location
                      ? s(
                          'p',
                          {
                            staticClass: 'located',
                            attrs: { id: 'routerSetting' }
                          },
                          [e._v(' 設定 ')]
                        )
                      : s('p', { attrs: { id: 'routerSetting' } }, [
                          e._v('設定')
                        ])
                  ])
                ],
                1
              )
            ]),
            s(
              'div',
              { staticClass: 'navItem newTweet' },
              [
                s(
                  'button',
                  { staticClass: 'btn', on: { click: e.showModal } },
                  [s('p', [e._v('推文')])]
                ),
                s('CreateTweetModal', { attrs: { user: e.currentUser } })
              ],
              1
            ),
            s('div', { staticClass: 'navItem logout' }, [
              e._m(0),
              s(
                'button',
                {
                  staticClass: 'btn',
                  on: {
                    click: function (t) {
                      return (
                        t.stopPropagation(), t.preventDefault(), e.logout(t)
                      )
                    }
                  }
                },
                [s('p', [e._v('登出')])]
              )
            ])
          ])
        ])
      },
      a = [
        function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t
          return s('div', { staticClass: 'icon' }, [
            s('img', { attrs: { src: n('977e'), alt: '' } })
          ])
        }
      ],
      r = n('5530'),
      i = (n('b0c0'), n('ac1f'), n('1276'), n('2f62')),
      o = n('bb7a'),
      c = n('1157'),
      l = n.n(c),
      u = {
        name: 'UserSidebar',
        components: { CreateTweetModal: o['a'] },
        data: function () {
          return {
            noti: [],
            main: !1,
            notification: !1,
            publicMessage: !1,
            privateMessage: !1,
            profile: !1,
            accountEdit: !1,
            location: ' '
          }
        },
        sockets: {
          connection: function (e) {
            console.log('Data:' + e)
          },
          notification: function (e) {
            console.log('notification', e),
              this.noti.push(e.id),
              e &&
                !this.notification &&
                this.$socket.emit(
                  'tweet',
                  {
                    id: e.id,
                    account: e.account,
                    name: e.name,
                    UserId: e.id,
                    avatar: e.avatar,
                    tweetId: e.tweetId,
                    tweet: e.tweet,
                    replyId: e.replyId,
                    reply: e.reply
                  },
                  this.currentUser.id
                )
          }
        },
        created: function () {
          var e = this
          this.$bus.$on('closeModal', function (t) {
            e.closeModal(t)
          })
          var t = this.$route.path.split('/')[1]
          this.setCurrentLocation(t)
        },
        methods: {
          logout: function () {
            this.$store.commit('revokeAuthentication'),
              this.$router.push('/signin'),
              sessionStorage.clear()
          },
          showModal: function () {
            console.log('open from sidebar'), l()('#tweetModal').modal('show')
          },
          closeModal: function (e) {
            console.log('closed'),
              l()(e).modal('hide'),
              l()('.modal-backdrop').hide()
          },
          setCurrentLocation: function (e) {
            switch (e) {
              case 'main':
                this.main = !0
                break
              case 'notification':
                this.notification = !0
                break
              case 'publicMessage':
                this.publicMessage = !0
                break
              case 'privateMessage':
                this.privateMessage = !0
                break
              case 'profile':
                this.profile = !0
                break
              case 'accountEdit':
                this.accountEdit = !0
                break
            }
          }
        },
        computed: Object(r['a'])({}, Object(i['b'])(['currentUser']))
      },
      d = u,
      f = (n('cb0b'), n('2877')),
      m = Object(f['a'])(d, s, a, !1, null, 'b74b053a', null)
    t['a'] = m.exports
  },
  cb0b: function (e, t, n) {
    'use strict'
    n('b6a3')
  },
  d2b8: function (e, t, n) {
    'use strict'
    n('d887')
  },
  d855: function (e, t, n) {},
  d887: function (e, t, n) {},
  da7c: function (e, t, n) {
    'use strict'
    var s = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t
        return s(
          'div',
          { staticClass: 'tweet' },
          [
            s(
              'div',
              { staticClass: 'avatar' },
              [
                s(
                  'router-link',
                  {
                    attrs: {
                      to: {
                        name: 'user-profile',
                        params: { id: e.localTweet.UserId }
                      }
                    }
                  },
                  [
                    e.localTweet.user
                      ? s('img', {
                          attrs: { src: e.localTweet.user.avatar, alt: '' }
                        })
                      : s('img', {
                          attrs: { src: e._f('emptyImageFilter')(''), alt: '' }
                        })
                  ]
                )
              ],
              1
            ),
            s('div', { staticClass: 'tweetInfo' }, [
              s(
                'div',
                { staticClass: 'userInfo' },
                [
                  s(
                    'router-link',
                    {
                      attrs: {
                        to: {
                          name: 'user-profile',
                          params: { id: e.localTweet.UserId }
                        }
                      }
                    },
                    [
                      s('p', { staticClass: 'userName mr-1' }, [
                        e._v(
                          ' ' +
                            e._s(
                              e.localTweet.user
                                ? e.localTweet.user.name
                                : 'UserName'
                            ) +
                            ' '
                        )
                      ])
                    ]
                  ),
                  s('p', { staticClass: 'userAccount' }, [
                    e._v(
                      ' @' +
                        e._s(
                          e.localTweet.user
                            ? e.localTweet.user.account
                            : 'UserAccount'
                        ) +
                        ' '
                    )
                  ]),
                  s('span', { staticClass: 'mx-1' }, [e._v('·')]),
                  s('p', { staticClass: 'tweetUpdateAt' }, [
                    e._v(e._s(e._f('fromNow')(e.localTweet.createdAt)))
                  ]),
                  e.currentUser.id === e.localTweet.UserId
                    ? s('div', { staticClass: 'edit-panel' }, [
                        s(
                          'button',
                          {
                            staticClass: 'btn edit',
                            on: {
                              click: function (t) {
                                return (
                                  t.stopPropagation(),
                                  t.preventDefault(),
                                  e.showModal('edit', e.localTweet.id)
                                )
                              }
                            }
                          },
                          [s('i', { staticClass: 'fas fa-pen' })]
                        ),
                        s(
                          'button',
                          {
                            staticClass: 'btn deleteTweet',
                            on: {
                              click: function (t) {
                                return (
                                  t.stopPropagation(),
                                  t.preventDefault(),
                                  e.deleteTweet(e.localTweet.id)
                                )
                              }
                            }
                          },
                          [s('i', { staticClass: 'fas fa-times' })]
                        )
                      ])
                    : e._e()
                ],
                1
              ),
              s(
                'div',
                { staticClass: 'tweetContent' },
                [
                  s(
                    'router-link',
                    { attrs: { to: '/replydetail/' + e.localTweet.id } },
                    [s('p', [e._v(e._s(e.localTweet.description))])]
                  )
                ],
                1
              ),
              s('div', { staticClass: 'tweetPanel' }, [
                s('div', { staticClass: 'comments' }, [
                  s('img', {
                    attrs: { src: n('6569'), alt: '' },
                    on: {
                      click: function (t) {
                        return e.showModal('reply', e.localTweet.id)
                      }
                    }
                  }),
                  s('p', [e._v(' ' + e._s(e.localTweet.replyCount) + ' ')])
                ]),
                s('div', { staticClass: 'likes' }, [
                  e.localTweet.isLiked
                    ? s('img', {
                        attrs: { src: n('1881'), alt: '' },
                        on: {
                          click: function (t) {
                            return e.toggleLike(e.localTweet)
                          }
                        }
                      })
                    : s('img', {
                        class: { liked: e.localTweet.isLiked },
                        attrs: { src: n('6adc'), alt: '' },
                        on: {
                          click: function (t) {
                            return e.toggleLike(e.localTweet)
                          }
                        }
                      }),
                  s('p', [e._v(' ' + e._s(e.localTweet.likeCount) + ' ')])
                ])
              ])
            ]),
            s('PutTweetModal', {
              attrs: { tweet: e.localTweet },
              on: { afterPutTweet: e.afterPutTweet }
            }),
            s('TweetReplyModal', { attrs: { tweet: e.localTweet } })
          ],
          1
        )
      },
      a = [],
      r = n('5530'),
      i = n('1da1'),
      o =
        (n('a4d3'),
        n('e01a'),
        n('99af'),
        n('96cf'),
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n(
            'div',
            {
              staticClass: 'modal fade',
              attrs: {
                id: 'putTweetModal-' + e.tweet.id,
                tabindex: '-1',
                role: 'dialog',
                'aria-labelledby': 'exampleModalLabel',
                'aria-hidden': 'true'
              }
            },
            [
              n(
                'div',
                { staticClass: 'modal-dialog', attrs: { role: 'document' } },
                [
                  n('div', { staticClass: 'modal-content' }, [
                    n('div', { staticClass: 'modal-header' }, [
                      n(
                        'button',
                        {
                          staticClass: 'start btn',
                          attrs: {
                            type: 'button',
                            'data-dismiss': 'modal',
                            'aria-label': 'Close'
                          },
                          on: { click: e.clearTweetContent }
                        },
                        [e._m(0)]
                      )
                    ]),
                    n('div', { staticClass: 'modal-body' }, [
                      n('div', { staticClass: 'container replyTarget' }, [
                        n('div', { staticClass: 'avatar' }, [
                          e.tweet.user
                            ? n('img', {
                                attrs: { src: e.tweet.user.avatar, alt: '' }
                              })
                            : n('img', {
                                attrs: {
                                  src: e._f('emptyImageFilter')(''),
                                  alt: ''
                                }
                              })
                        ]),
                        n('div', { staticClass: 'tweetInfo' }, [
                          n('div', { staticClass: 'tweetContent' }, [
                            n('textarea', {
                              directives: [
                                {
                                  name: 'model',
                                  rawName: 'v-model',
                                  value: e.tweetContent,
                                  expression: 'tweetContent'
                                }
                              ],
                              attrs: {
                                name: 'tweetContent',
                                id: 'tweetContent',
                                cols: '60',
                                rows: '10'
                              },
                              domProps: { value: e.tweetContent },
                              on: {
                                input: function (t) {
                                  t.target.composing ||
                                    (e.tweetContent = t.target.value)
                                }
                              }
                            })
                          ])
                        ])
                      ])
                    ]),
                    n('div', { staticClass: 'modal-footer' }, [
                      n('div', { staticClass: 'tweetButton' }, [
                        n(
                          'button',
                          {
                            staticClass: 'btn',
                            attrs: { type: 'button', disabled: e.isProcessing },
                            on: {
                              click: function (t) {
                                return e.createReply(e.tweet.id)
                              }
                            }
                          },
                          [
                            e._v(
                              ' ' +
                                e._s(e.isProcessing ? '更新中..' : '更新') +
                                ' '
                            )
                          ]
                        )
                      ])
                    ])
                  ])
                ]
              )
            ]
          )
        }),
      c = [
        function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t
          return s('span', { attrs: { 'aria-hidden': 'true' } }, [
            s('img', { attrs: { src: n('27ae'), alt: '' } })
          ])
        }
      ],
      l = n('2fa3'),
      u = n('2708'),
      d = n('2f62'),
      f = n('6783'),
      m = n('1157'),
      p = n.n(m),
      b = {
        name: 'PutTweetModal',
        mixins: [u['a']],
        props: {
          tweet: {
            type: Object,
            default: function () {
              return { user: { avatar: '', name: '', account: '' } }
            }
          }
        },
        data: function () {
          return { tweetContent: '', isProcessing: !1 }
        },
        created: function () {
          this.tweetContent = this.tweet.description
        },
        methods: {
          clearTweetContent: function () {
            this.tweetContent = this.tweet.description
          },
          createReply: function (e) {
            var t = this
            return Object(i['a'])(
              regeneratorRuntime.mark(function n() {
                var s, a, r, i
                return regeneratorRuntime.wrap(
                  function (n) {
                    while (1)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (((s = t.tweetContentCheck(t.tweetContent)), s)) {
                            n.next = 3
                            break
                          }
                          return n.abrupt('return')
                        case 3:
                          return (
                            (n.prev = 3),
                            (t.isProcessing = !0),
                            (a = t.tweetContent),
                            (n.next = 8),
                            f['a'].putTweet(e, a)
                          )
                        case 8:
                          if (
                            ((r = n.sent), (i = r.data), 'success' === i.status)
                          ) {
                            n.next = 12
                            break
                          }
                          throw new Error(i.message)
                        case 12:
                          l['a'].fire({
                            icon: 'success',
                            title: '推文更新成功！'
                          }),
                            p()('#putTweetModal-'.concat(e)).modal('hide'),
                            t.$emit('afterPutTweet', t.tweetContent),
                            t.clearTweetContent(),
                            (t.isProcessing = !1),
                            (n.next = 24)
                          break
                        case 19:
                          ;(n.prev = 19),
                            (n.t0 = n['catch'](3)),
                            (t.isProcessing = !1),
                            console.log(n.t0),
                            l['a'].fire({
                              icon: 'error',
                              title: '無法更新推文，請稍後再試！'
                            })
                        case 24:
                        case 'end':
                          return n.stop()
                      }
                  },
                  n,
                  null,
                  [[3, 19]]
                )
              })
            )()
          },
          tweetContentCheck: function (e) {
            return e
              ? !(e.length > 140) ||
                  (l['a'].fire({
                    icon: 'error',
                    title: '推文字數不得超過 140 個字！'
                  }),
                  !1)
              : (l['a'].fire({ icon: 'error', title: '尚未輸入推文內容！' }),
                !1)
          }
        },
        computed: Object(r['a'])({}, Object(d['b'])(['currentUser']))
      },
      h = b,
      v = (n('4937'), n('2877')),
      g = Object(v['a'])(h, o, c, !1, null, '6525e1bb', null),
      w = g.exports,
      C = n('141a'),
      k = {
        name: 'TweetItem',
        mixins: [u['c'], u['a']],
        components: { TweetReplyModal: C['a'], PutTweetModal: w },
        props: { tweet: { type: Object, required: !0 } },
        data: function () {
          return { localTweet: {}, isMine: !1 }
        },
        created: function () {
          var e = this
          ;(this.localTweet = this.tweet),
            this.$bus.$on('afterCreateReply', function (t) {
              e.afterCreateReply(t)
            })
        },
        methods: {
          toggleLike: function (e) {
            var t = this
            return Object(i['a'])(
              regeneratorRuntime.mark(function n() {
                var s, a
                return regeneratorRuntime.wrap(
                  function (n) {
                    while (1)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (((n.prev = 0), (s = {}), !e.isLiked)) {
                            n.next = 10
                            break
                          }
                          return (
                            (e.isLiked = !1),
                            (e.likeCount -= 1),
                            (n.next = 7),
                            f['a'].unlikeTweet(e.id)
                          )
                        case 7:
                          ;(s = n.sent), (n.next = 17)
                          break
                        case 10:
                          return (
                            (e.isLiked = !0),
                            (e.likeCount += 1),
                            (n.next = 14),
                            f['a'].likeTweet(e.id)
                          )
                        case 14:
                          ;(s = n.sent),
                            (a = t.$route.params.id),
                            t.$socket.emit('like', {
                              userId: a,
                              currentUserId: t.currentUser.id
                            })
                        case 17:
                          if ('success' === s.data.status) {
                            n.next = 19
                            break
                          }
                          throw new Error(s.data.message)
                        case 19:
                          l['a'].fire({ icon: 'success', title: '操作成功！' }),
                            t.$emit('afterToggleLike', e),
                            (n.next = 27)
                          break
                        case 23:
                          ;(n.prev = 23),
                            (n.t0 = n['catch'](0)),
                            console.log(n.t0),
                            l['a'].fire({
                              icon: 'error',
                              title: '無法執行此操作，請稍後再試！'
                            })
                        case 27:
                        case 'end':
                          return n.stop()
                      }
                  },
                  n,
                  null,
                  [[0, 23]]
                )
              })
            )()
          },
          afterCreateReply: function (e) {
            this.localTweet.id === e.tweetId && this.tweet.replyCount++
          },
          afterPutTweet: function (e) {
            this.localTweet.description = e
          },
          deleteTweet: function (e) {
            var t = this
            return Object(i['a'])(
              regeneratorRuntime.mark(function n() {
                var s, a
                return regeneratorRuntime.wrap(
                  function (n) {
                    while (1)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0), (n.next = 3), f['a'].deleteTweet(e)
                          )
                        case 3:
                          if (
                            ((s = n.sent),
                            (a = s.data),
                            console.log(a),
                            'success' === a.status)
                          ) {
                            n.next = 8
                            break
                          }
                          throw new Error()
                        case 8:
                          t.$emit('afterDeleteTweet', e),
                            l['a'].fire({
                              icon: 'success',
                              title: '成功刪除推文！'
                            }),
                            (n.next = 15)
                          break
                        case 12:
                          ;(n.prev = 12),
                            (n.t0 = n['catch'](0)),
                            l['a'].fire({
                              icon: 'error',
                              title: 'API尚未建立，請下個月再試！'
                            })
                        case 15:
                        case 'end':
                          return n.stop()
                      }
                  },
                  n,
                  null,
                  [[0, 12]]
                )
              })
            )()
          },
          showModal: function (e, t) {
            var n = ''
            ;(n = 'reply' === e ? '#tweetReplyModal' : '#putTweetModal'),
              p()(''.concat(n, '-').concat(t)).modal('show'),
              p()(''.concat(n, '-').concat(t)).appendTo('body')
          }
        },
        computed: Object(r['a'])({}, Object(d['b'])(['currentUser'])),
        watch: {
          tweet: {
            handler: function () {
              this.localTweet = this.tweet
            },
            deep: !0
          }
        }
      },
      j = k,
      x = (n('ebd4'), Object(v['a'])(j, s, a, !1, null, '0bae2d59', null))
    t['a'] = x.exports
  },
  e409: function (e, t, n) {
    'use strict'
    n('89b5')
  },
  ebd4: function (e, t, n) {
    'use strict'
    n('d855')
  },
  fc4c: function (e, t, n) {
    e.exports = n.p + 'img/atProfile.85b75b38.svg'
  }
})
//# sourceMappingURL=app.a2a9fc1e.js.map
