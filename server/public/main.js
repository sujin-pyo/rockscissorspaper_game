(() => {
  "use strict";
  function t(t) {
    this.items = t;
  }
  function e(t, e) {
    (this.name = t),
      (this.buttonEl = document.createElement("button")),
      (this.buttonEl.textContent = t);
    var n = this;
    this.buttonEl.onclick = function () {
      e(n);
    };
  }
  function n(t) {
    var e = o.getNext(t);
    t === s
      ? alert("비겼습니다")
      : e === s
      ? alert("졌습니다")
      : alert("이겼습니다"),
      clearInterval(i),
      l.removeAttribute("disabled"),
      o.getAll().forEach(function (t) {
        t.disable(!0);
      });
  }
  (t.prototype.getAll = function () {
    return this.items;
  }),
    (t.prototype.getNext = function (t) {
      var e = this.items.indexOf(t);
      return this.items[e + 1] || this.items[0];
    }),
    (e.prototype.render = function (t) {
      t.append(this.buttonEl);
    }),
    (e.prototype.disable = function (t) {
      t
        ? this.buttonEl.setAttribute("disabled", !0)
        : this.buttonEl.removeAttribute("disabled");
    });
  var i,
    o = new t([new e("가위", n), new e("바위", n), new e("보", n)]),
    l = document.getElementById("start"),
    r = document.getElementById("com"),
    s = o.getAll()[0],
    u = document.getElementById("item-buttons");
  o.getAll().forEach(function (t) {
    t.render(u), t.disable(!0);
  }),
    (l.onclick = function () {
      l.setAttribute("disabled", !0),
        o.getAll().forEach(function (t) {
          t.disable(!1);
        }),
        (i = setInterval(() => {
          (s = o.getNext(s)), (r.textContent = s.name);
        }, 100));
    });
})();
//# sourceMappingURL=main.js.map
