var da = Object.defineProperty,
  Td = Object.defineProperties;
var Nd = Object.getOwnPropertyDescriptors;
var Fn = Object.getOwnPropertySymbols;
var fa = Object.prototype.hasOwnProperty,
  pa = Object.prototype.propertyIsEnumerable;
var la = (e, t, n) =>
    t in e
      ? da(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Ue = (e, t) => {
    for (var n in (t ||= {})) fa.call(t, n) && la(e, n, t[n]);
    if (Fn) for (var n of Fn(t)) pa.call(t, n) && la(e, n, t[n]);
    return e;
  },
  Ge = (e, t) => Td(e, Nd(t));
var iD = (e, t) => {
  var n = {};
  for (var r in e) fa.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Fn)
    for (var r of Fn(e)) t.indexOf(r) < 0 && pa.call(e, r) && (n[r] = e[r]);
  return n;
};
var sD = (e, t) => {
  for (var n in t) da(e, n, { get: t[n], enumerable: !0 });
};
function ha(e, t) {
  return Object.is(e, t);
}
var U = null,
  nn = !1,
  Rn = 1,
  Me = Symbol("SIGNAL");
function _(e) {
  let t = U;
  return (U = e), t;
}
function Ad() {
  return nn;
}
var on = {
  version: 0,
  lastCleanEpoch: 0,
  dirty: !1,
  producerNode: void 0,
  producerLastReadVersion: void 0,
  producerIndexOfThis: void 0,
  nextProducerIndex: 0,
  liveConsumerNode: void 0,
  liveConsumerIndexOfThis: void 0,
  consumerAllowSignalWrites: !1,
  consumerIsAlwaysLive: !1,
  producerMustRecompute: () => !1,
  producerRecomputeValue: () => {},
  consumerMarkedDirty: () => {},
  consumerOnSignalRead: () => {},
};
function Io(e) {
  if (nn) throw new Error("");
  if (U === null) return;
  U.consumerOnSignalRead(e);
  let t = U.nextProducerIndex++;
  if ((St(U), t < U.producerNode.length && U.producerNode[t] !== e && rn(U))) {
    let n = U.producerNode[t];
    Vn(n, U.producerIndexOfThis[t]);
  }
  U.producerNode[t] !== e &&
    ((U.producerNode[t] = e),
    (U.producerIndexOfThis[t] = rn(U) ? Da(e, U, t) : 0)),
    (U.producerLastReadVersion[t] = e.version);
}
function Od() {
  Rn++;
}
function ga(e) {
  if (!(rn(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === Rn)) {
    if (!e.producerMustRecompute(e) && !jn(e)) {
      (e.dirty = !1), (e.lastCleanEpoch = Rn);
      return;
    }
    e.producerRecomputeValue(e), (e.dirty = !1), (e.lastCleanEpoch = Rn);
  }
}
function ma(e) {
  if (e.liveConsumerNode === void 0) return;
  let t = nn;
  nn = !0;
  try {
    for (let n of e.liveConsumerNode) n.dirty || va(n);
  } finally {
    nn = t;
  }
}
function ya() {
  return U?.consumerAllowSignalWrites !== !1;
}
function va(e) {
  (e.dirty = !0), ma(e), e.consumerMarkedDirty?.(e);
}
function kn(e) {
  return e && (e.nextProducerIndex = 0), _(e);
}
function Ln(e, t) {
  if (
    (_(t),
    !(
      !e ||
      e.producerNode === void 0 ||
      e.producerIndexOfThis === void 0 ||
      e.producerLastReadVersion === void 0
    ))
  ) {
    if (rn(e))
      for (let n = e.nextProducerIndex; n < e.producerNode.length; n++)
        Vn(e.producerNode[n], e.producerIndexOfThis[n]);
    for (; e.producerNode.length > e.nextProducerIndex; )
      e.producerNode.pop(),
        e.producerLastReadVersion.pop(),
        e.producerIndexOfThis.pop();
  }
}
function jn(e) {
  St(e);
  for (let t = 0; t < e.producerNode.length; t++) {
    let n = e.producerNode[t],
      r = e.producerLastReadVersion[t];
    if (r !== n.version || (ga(n), r !== n.version)) return !0;
  }
  return !1;
}
function Eo(e) {
  if ((St(e), rn(e)))
    for (let t = 0; t < e.producerNode.length; t++)
      Vn(e.producerNode[t], e.producerIndexOfThis[t]);
  (e.producerNode.length =
    e.producerLastReadVersion.length =
    e.producerIndexOfThis.length =
      0),
    e.liveConsumerNode &&
      (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0);
}
function Da(e, t, n) {
  if ((wa(e), St(e), e.liveConsumerNode.length === 0))
    for (let r = 0; r < e.producerNode.length; r++)
      e.producerIndexOfThis[r] = Da(e.producerNode[r], e, r);
  return e.liveConsumerIndexOfThis.push(n), e.liveConsumerNode.push(t) - 1;
}
function Vn(e, t) {
  if ((wa(e), St(e), e.liveConsumerNode.length === 1))
    for (let r = 0; r < e.producerNode.length; r++)
      Vn(e.producerNode[r], e.producerIndexOfThis[r]);
  let n = e.liveConsumerNode.length - 1;
  if (
    ((e.liveConsumerNode[t] = e.liveConsumerNode[n]),
    (e.liveConsumerIndexOfThis[t] = e.liveConsumerIndexOfThis[n]),
    e.liveConsumerNode.length--,
    e.liveConsumerIndexOfThis.length--,
    t < e.liveConsumerNode.length)
  ) {
    let r = e.liveConsumerIndexOfThis[t],
      o = e.liveConsumerNode[t];
    St(o), (o.producerIndexOfThis[r] = t);
  }
}
function rn(e) {
  return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0;
}
function St(e) {
  (e.producerNode ??= []),
    (e.producerIndexOfThis ??= []),
    (e.producerLastReadVersion ??= []);
}
function wa(e) {
  (e.liveConsumerNode ??= []), (e.liveConsumerIndexOfThis ??= []);
}
function Ia(e) {
  let t = Object.create(Fd);
  t.computation = e;
  let n = () => {
    if ((ga(t), Io(t), t.value === Pn)) throw t.error;
    return t.value;
  };
  return (n[Me] = t), n;
}
var vo = Symbol("UNSET"),
  Do = Symbol("COMPUTING"),
  Pn = Symbol("ERRORED"),
  Fd = Ge(Ue({}, on), {
    value: vo,
    dirty: !0,
    error: null,
    equal: ha,
    producerMustRecompute(e) {
      return e.value === vo || e.value === Do;
    },
    producerRecomputeValue(e) {
      if (e.value === Do) throw new Error("Detected cycle in computations.");
      let t = e.value;
      e.value = Do;
      let n = kn(e),
        r;
      try {
        r = e.computation();
      } catch (o) {
        (r = Pn), (e.error = o);
      } finally {
        Ln(e, n);
      }
      if (t !== vo && t !== Pn && r !== Pn && e.equal(t, r)) {
        e.value = t;
        return;
      }
      (e.value = r), e.version++;
    },
  });
function Rd() {
  throw new Error();
}
var Ea = Rd;
function Ca() {
  Ea();
}
function ba(e) {
  Ea = e;
}
var Pd = null;
function _a(e) {
  let t = Object.create(xa);
  t.value = e;
  let n = () => (Io(t), t.value);
  return (n[Me] = t), n;
}
function Co(e, t) {
  ya() || Ca(), e.equal(e.value, t) || ((e.value = t), kd(e));
}
function Ma(e, t) {
  ya() || Ca(), Co(e, t(e.value));
}
var xa = Ge(Ue({}, on), { equal: ha, value: void 0 });
function kd(e) {
  e.version++, Od(), ma(e), Pd?.();
}
function Sa(e, t, n) {
  let r = Object.create(Ld);
  n && (r.consumerAllowSignalWrites = !0), (r.fn = e), (r.schedule = t);
  let o = (u) => {
    r.cleanupFn = u;
  };
  function i(u) {
    return u.fn === null && u.schedule === null;
  }
  function s(u) {
    i(u) ||
      (Eo(u),
      u.cleanupFn(),
      (u.fn = null),
      (u.schedule = null),
      (u.cleanupFn = wo));
  }
  let a = () => {
    if (r.fn === null) return;
    if (Ad())
      throw new Error(
        "Schedulers cannot synchronously execute watches while scheduling.",
      );
    if (((r.dirty = !1), r.hasRun && !jn(r))) return;
    r.hasRun = !0;
    let u = kn(r);
    try {
      r.cleanupFn(), (r.cleanupFn = wo), r.fn(o);
    } finally {
      Ln(r, u);
    }
  };
  return (
    (r.ref = {
      notify: () => va(r),
      run: a,
      cleanup: () => r.cleanupFn(),
      destroy: () => s(r),
      [Me]: r,
    }),
    r.ref
  );
}
var wo = () => {},
  Ld = Ge(Ue({}, on), {
    consumerIsAlwaysLive: !0,
    consumerAllowSignalWrites: !1,
    consumerMarkedDirty: (e) => {
      e.schedule !== null && e.schedule(e.ref);
    },
    hasRun: !1,
    cleanupFn: wo,
  });
function v(e) {
  return typeof e == "function";
}
function ze(e) {
  let n = e((r) => {
    Error.call(r), (r.stack = new Error().stack);
  });
  return (
    (n.prototype = Object.create(Error.prototype)),
    (n.prototype.constructor = n),
    n
  );
}
var Bn = ze(
  (e) =>
    function (n) {
      e(this),
        (this.message = n
          ? `${n.length} errors occurred during unsubscription:
${n.map((r, o) => `${o + 1}) ${r.toString()}`).join(`
  `)}`
          : ""),
        (this.name = "UnsubscriptionError"),
        (this.errors = n);
    },
);
function ot(e, t) {
  if (e) {
    let n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}
var H = class e {
  constructor(t) {
    (this.initialTeardown = t),
      (this.closed = !1),
      (this._parentage = null),
      (this._finalizers = null);
  }
  unsubscribe() {
    let t;
    if (!this.closed) {
      this.closed = !0;
      let { _parentage: n } = this;
      if (n)
        if (((this._parentage = null), Array.isArray(n)))
          for (let i of n) i.remove(this);
        else n.remove(this);
      let { initialTeardown: r } = this;
      if (v(r))
        try {
          r();
        } catch (i) {
          t = i instanceof Bn ? i.errors : [i];
        }
      let { _finalizers: o } = this;
      if (o) {
        this._finalizers = null;
        for (let i of o)
          try {
            Ta(i);
          } catch (s) {
            (t = t ?? []),
              s instanceof Bn ? (t = [...t, ...s.errors]) : t.push(s);
          }
      }
      if (t) throw new Bn(t);
    }
  }
  add(t) {
    var n;
    if (t && t !== this)
      if (this.closed) Ta(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this)) return;
          t._addParent(this);
        }
        (this._finalizers =
          (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t);
      }
  }
  _hasParent(t) {
    let { _parentage: n } = this;
    return n === t || (Array.isArray(n) && n.includes(t));
  }
  _addParent(t) {
    let { _parentage: n } = this;
    this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
  }
  _removeParent(t) {
    let { _parentage: n } = this;
    n === t ? (this._parentage = null) : Array.isArray(n) && ot(n, t);
  }
  remove(t) {
    let { _finalizers: n } = this;
    n && ot(n, t), t instanceof e && t._removeParent(this);
  }
};
H.EMPTY = (() => {
  let e = new H();
  return (e.closed = !0), e;
})();
var bo = H.EMPTY;
function $n(e) {
  return (
    e instanceof H ||
    (e && "closed" in e && v(e.remove) && v(e.add) && v(e.unsubscribe))
  );
}
function Ta(e) {
  v(e) ? e() : e.unsubscribe();
}
var ge = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1,
};
var Tt = {
  setTimeout(e, t, ...n) {
    let { delegate: r } = Tt;
    return r?.setTimeout ? r.setTimeout(e, t, ...n) : setTimeout(e, t, ...n);
  },
  clearTimeout(e) {
    let { delegate: t } = Tt;
    return (t?.clearTimeout || clearTimeout)(e);
  },
  delegate: void 0,
};
function Hn(e) {
  Tt.setTimeout(() => {
    let { onUnhandledError: t } = ge;
    if (t) t(e);
    else throw e;
  });
}
function Fe() {}
var Na = _o("C", void 0, void 0);
function Aa(e) {
  return _o("E", void 0, e);
}
function Oa(e) {
  return _o("N", e, void 0);
}
function _o(e, t, n) {
  return { kind: e, value: t, error: n };
}
var it = null;
function Nt(e) {
  if (ge.useDeprecatedSynchronousErrorHandling) {
    let t = !it;
    if ((t && (it = { errorThrown: !1, error: null }), e(), t)) {
      let { errorThrown: n, error: r } = it;
      if (((it = null), n)) throw r;
    }
  } else e();
}
function Fa(e) {
  ge.useDeprecatedSynchronousErrorHandling &&
    it &&
    ((it.errorThrown = !0), (it.error = e));
}
var st = class extends H {
    constructor(t) {
      super(),
        (this.isStopped = !1),
        t
          ? ((this.destination = t), $n(t) && t.add(this))
          : (this.destination = Bd);
    }
    static create(t, n, r) {
      return new Re(t, n, r);
    }
    next(t) {
      this.isStopped ? xo(Oa(t), this) : this._next(t);
    }
    error(t) {
      this.isStopped
        ? xo(Aa(t), this)
        : ((this.isStopped = !0), this._error(t));
    }
    complete() {
      this.isStopped ? xo(Na, this) : ((this.isStopped = !0), this._complete());
    }
    unsubscribe() {
      this.closed ||
        ((this.isStopped = !0), super.unsubscribe(), (this.destination = null));
    }
    _next(t) {
      this.destination.next(t);
    }
    _error(t) {
      try {
        this.destination.error(t);
      } finally {
        this.unsubscribe();
      }
    }
    _complete() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    }
  },
  jd = Function.prototype.bind;
function Mo(e, t) {
  return jd.call(e, t);
}
var So = class {
    constructor(t) {
      this.partialObserver = t;
    }
    next(t) {
      let { partialObserver: n } = this;
      if (n.next)
        try {
          n.next(t);
        } catch (r) {
          Un(r);
        }
    }
    error(t) {
      let { partialObserver: n } = this;
      if (n.error)
        try {
          n.error(t);
        } catch (r) {
          Un(r);
        }
      else Un(t);
    }
    complete() {
      let { partialObserver: t } = this;
      if (t.complete)
        try {
          t.complete();
        } catch (n) {
          Un(n);
        }
    }
  },
  Re = class extends st {
    constructor(t, n, r) {
      super();
      let o;
      if (v(t) || !t)
        o = { next: t ?? void 0, error: n ?? void 0, complete: r ?? void 0 };
      else {
        let i;
        this && ge.useDeprecatedNextContext
          ? ((i = Object.create(t)),
            (i.unsubscribe = () => this.unsubscribe()),
            (o = {
              next: t.next && Mo(t.next, i),
              error: t.error && Mo(t.error, i),
              complete: t.complete && Mo(t.complete, i),
            }))
          : (o = t);
      }
      this.destination = new So(o);
    }
  };
function Un(e) {
  ge.useDeprecatedSynchronousErrorHandling ? Fa(e) : Hn(e);
}
function Vd(e) {
  throw e;
}
function xo(e, t) {
  let { onStoppedNotification: n } = ge;
  n && Tt.setTimeout(() => n(e, t));
}
var Bd = { closed: !0, next: Fe, error: Vd, complete: Fe };
var At = (typeof Symbol == "function" && Symbol.observable) || "@@observable";
function z(e) {
  return e;
}
function $d(...e) {
  return To(e);
}
function To(e) {
  return e.length === 0
    ? z
    : e.length === 1
      ? e[0]
      : function (n) {
          return e.reduce((r, o) => o(r), n);
        };
}
var M = (() => {
  class e {
    constructor(n) {
      n && (this._subscribe = n);
    }
    lift(n) {
      let r = new e();
      return (r.source = this), (r.operator = n), r;
    }
    subscribe(n, r, o) {
      let i = Ud(n) ? n : new Re(n, r, o);
      return (
        Nt(() => {
          let { operator: s, source: a } = this;
          i.add(
            s ? s.call(i, a) : a ? this._subscribe(i) : this._trySubscribe(i),
          );
        }),
        i
      );
    }
    _trySubscribe(n) {
      try {
        return this._subscribe(n);
      } catch (r) {
        n.error(r);
      }
    }
    forEach(n, r) {
      return (
        (r = Ra(r)),
        new r((o, i) => {
          let s = new Re({
            next: (a) => {
              try {
                n(a);
              } catch (u) {
                i(u), s.unsubscribe();
              }
            },
            error: i,
            complete: o,
          });
          this.subscribe(s);
        })
      );
    }
    _subscribe(n) {
      var r;
      return (r = this.source) === null || r === void 0
        ? void 0
        : r.subscribe(n);
    }
    [At]() {
      return this;
    }
    pipe(...n) {
      return To(n)(this);
    }
    toPromise(n) {
      return (
        (n = Ra(n)),
        new n((r, o) => {
          let i;
          this.subscribe(
            (s) => (i = s),
            (s) => o(s),
            () => r(i),
          );
        })
      );
    }
  }
  return (e.create = (t) => new e(t)), e;
})();
function Ra(e) {
  var t;
  return (t = e ?? ge.Promise) !== null && t !== void 0 ? t : Promise;
}
function Hd(e) {
  return e && v(e.next) && v(e.error) && v(e.complete);
}
function Ud(e) {
  return (e && e instanceof st) || (Hd(e) && $n(e));
}
function No(e) {
  return v(e?.lift);
}
function y(e) {
  return (t) => {
    if (No(t))
      return t.lift(function (n) {
        try {
          return e(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function m(e, t, n, r, o) {
  return new sn(e, t, n, r, o);
}
var sn = class extends st {
  constructor(t, n, r, o, i, s) {
    super(t),
      (this.onFinalize = i),
      (this.shouldUnsubscribe = s),
      (this._next = n
        ? function (a) {
            try {
              n(a);
            } catch (u) {
              t.error(u);
            }
          }
        : super._next),
      (this._error = o
        ? function (a) {
            try {
              o(a);
            } catch (u) {
              t.error(u);
            } finally {
              this.unsubscribe();
            }
          }
        : super._error),
      (this._complete = r
        ? function () {
            try {
              r();
            } catch (a) {
              t.error(a);
            } finally {
              this.unsubscribe();
            }
          }
        : super._complete);
  }
  unsubscribe() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      let { closed: n } = this;
      super.unsubscribe(),
        !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }
};
function Ao() {
  return y((e, t) => {
    let n = null;
    e._refCount++;
    let r = m(t, void 0, void 0, void 0, () => {
      if (!e || e._refCount <= 0 || 0 < --e._refCount) {
        n = null;
        return;
      }
      let o = e._connection,
        i = n;
      (n = null), o && (!i || o === i) && o.unsubscribe(), t.unsubscribe();
    });
    e.subscribe(r), r.closed || (n = e.connect());
  });
}
var Oo = class extends M {
  constructor(t, n) {
    super(),
      (this.source = t),
      (this.subjectFactory = n),
      (this._subject = null),
      (this._refCount = 0),
      (this._connection = null),
      No(t) && (this.lift = t.lift);
  }
  _subscribe(t) {
    return this.getSubject().subscribe(t);
  }
  getSubject() {
    let t = this._subject;
    return (
      (!t || t.isStopped) && (this._subject = this.subjectFactory()),
      this._subject
    );
  }
  _teardown() {
    this._refCount = 0;
    let { _connection: t } = this;
    (this._subject = this._connection = null), t?.unsubscribe();
  }
  connect() {
    let t = this._connection;
    if (!t) {
      t = this._connection = new H();
      let n = this.getSubject();
      t.add(
        this.source.subscribe(
          m(
            n,
            void 0,
            () => {
              this._teardown(), n.complete();
            },
            (r) => {
              this._teardown(), n.error(r);
            },
            () => this._teardown(),
          ),
        ),
      ),
        t.closed && ((this._connection = null), (t = H.EMPTY));
    }
    return t;
  }
  refCount() {
    return Ao()(this);
  }
};
var Pa = ze(
  (e) =>
    function () {
      e(this),
        (this.name = "ObjectUnsubscribedError"),
        (this.message = "object unsubscribed");
    },
);
var te = (() => {
    class e extends M {
      constructor() {
        super(),
          (this.closed = !1),
          (this.currentObservers = null),
          (this.observers = []),
          (this.isStopped = !1),
          (this.hasError = !1),
          (this.thrownError = null);
      }
      lift(n) {
        let r = new Gn(this, this);
        return (r.operator = n), r;
      }
      _throwIfClosed() {
        if (this.closed) throw new Pa();
      }
      next(n) {
        Nt(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.currentObservers ||
              (this.currentObservers = Array.from(this.observers));
            for (let r of this.currentObservers) r.next(n);
          }
        });
      }
      error(n) {
        Nt(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            (this.hasError = this.isStopped = !0), (this.thrownError = n);
            let { observers: r } = this;
            for (; r.length; ) r.shift().error(n);
          }
        });
      }
      complete() {
        Nt(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.isStopped = !0;
            let { observers: n } = this;
            for (; n.length; ) n.shift().complete();
          }
        });
      }
      unsubscribe() {
        (this.isStopped = this.closed = !0),
          (this.observers = this.currentObservers = null);
      }
      get observed() {
        var n;
        return (
          ((n = this.observers) === null || n === void 0 ? void 0 : n.length) >
          0
        );
      }
      _trySubscribe(n) {
        return this._throwIfClosed(), super._trySubscribe(n);
      }
      _subscribe(n) {
        return (
          this._throwIfClosed(),
          this._checkFinalizedStatuses(n),
          this._innerSubscribe(n)
        );
      }
      _innerSubscribe(n) {
        let { hasError: r, isStopped: o, observers: i } = this;
        return r || o
          ? bo
          : ((this.currentObservers = null),
            i.push(n),
            new H(() => {
              (this.currentObservers = null), ot(i, n);
            }));
      }
      _checkFinalizedStatuses(n) {
        let { hasError: r, thrownError: o, isStopped: i } = this;
        r ? n.error(o) : i && n.complete();
      }
      asObservable() {
        let n = new M();
        return (n.source = this), n;
      }
    }
    return (e.create = (t, n) => new Gn(t, n)), e;
  })(),
  Gn = class extends te {
    constructor(t, n) {
      super(), (this.destination = t), (this.source = n);
    }
    next(t) {
      var n, r;
      (r =
        (n = this.destination) === null || n === void 0 ? void 0 : n.next) ===
        null ||
        r === void 0 ||
        r.call(n, t);
    }
    error(t) {
      var n, r;
      (r =
        (n = this.destination) === null || n === void 0 ? void 0 : n.error) ===
        null ||
        r === void 0 ||
        r.call(n, t);
    }
    complete() {
      var t, n;
      (n =
        (t = this.destination) === null || t === void 0
          ? void 0
          : t.complete) === null ||
        n === void 0 ||
        n.call(t);
    }
    _subscribe(t) {
      var n, r;
      return (r =
        (n = this.source) === null || n === void 0
          ? void 0
          : n.subscribe(t)) !== null && r !== void 0
        ? r
        : bo;
    }
  };
var an = class extends te {
  constructor(t) {
    super(), (this._value = t);
  }
  get value() {
    return this.getValue();
  }
  _subscribe(t) {
    let n = super._subscribe(t);
    return !n.closed && t.next(this._value), n;
  }
  getValue() {
    let { hasError: t, thrownError: n, _value: r } = this;
    if (t) throw n;
    return this._throwIfClosed(), r;
  }
  next(t) {
    super.next((this._value = t));
  }
};
var un = {
  now() {
    return (un.delegate || Date).now();
  },
  delegate: void 0,
};
var Fo = class extends te {
  constructor(t = 1 / 0, n = 1 / 0, r = un) {
    super(),
      (this._bufferSize = t),
      (this._windowTime = n),
      (this._timestampProvider = r),
      (this._buffer = []),
      (this._infiniteTimeWindow = !0),
      (this._infiniteTimeWindow = n === 1 / 0),
      (this._bufferSize = Math.max(1, t)),
      (this._windowTime = Math.max(1, n));
  }
  next(t) {
    let {
      isStopped: n,
      _buffer: r,
      _infiniteTimeWindow: o,
      _timestampProvider: i,
      _windowTime: s,
    } = this;
    n || (r.push(t), !o && r.push(i.now() + s)),
      this._trimBuffer(),
      super.next(t);
  }
  _subscribe(t) {
    this._throwIfClosed(), this._trimBuffer();
    let n = this._innerSubscribe(t),
      { _infiniteTimeWindow: r, _buffer: o } = this,
      i = o.slice();
    for (let s = 0; s < i.length && !t.closed; s += r ? 1 : 2) t.next(i[s]);
    return this._checkFinalizedStatuses(t), n;
  }
  _trimBuffer() {
    let {
        _bufferSize: t,
        _timestampProvider: n,
        _buffer: r,
        _infiniteTimeWindow: o,
      } = this,
      i = (o ? 1 : 2) * t;
    if ((t < 1 / 0 && i < r.length && r.splice(0, r.length - i), !o)) {
      let s = n.now(),
        a = 0;
      for (let u = 1; u < r.length && r[u] <= s; u += 2) a = u;
      a && r.splice(0, a + 1);
    }
  }
};
var zn = class extends H {
  constructor(t, n) {
    super();
  }
  schedule(t, n = 0) {
    return this;
  }
};
var cn = {
  setInterval(e, t, ...n) {
    let { delegate: r } = cn;
    return r?.setInterval ? r.setInterval(e, t, ...n) : setInterval(e, t, ...n);
  },
  clearInterval(e) {
    let { delegate: t } = cn;
    return (t?.clearInterval || clearInterval)(e);
  },
  delegate: void 0,
};
var Ot = class extends zn {
  constructor(t, n) {
    super(t, n), (this.scheduler = t), (this.work = n), (this.pending = !1);
  }
  schedule(t, n = 0) {
    var r;
    if (this.closed) return this;
    this.state = t;
    let o = this.id,
      i = this.scheduler;
    return (
      o != null && (this.id = this.recycleAsyncId(i, o, n)),
      (this.pending = !0),
      (this.delay = n),
      (this.id =
        (r = this.id) !== null && r !== void 0
          ? r
          : this.requestAsyncId(i, this.id, n)),
      this
    );
  }
  requestAsyncId(t, n, r = 0) {
    return cn.setInterval(t.flush.bind(t, this), r);
  }
  recycleAsyncId(t, n, r = 0) {
    if (r != null && this.delay === r && this.pending === !1) return n;
    n != null && cn.clearInterval(n);
  }
  execute(t, n) {
    if (this.closed) return new Error("executing a cancelled action");
    this.pending = !1;
    let r = this._execute(t, n);
    if (r) return r;
    this.pending === !1 &&
      this.id != null &&
      (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }
  _execute(t, n) {
    let r = !1,
      o;
    try {
      this.work(t);
    } catch (i) {
      (r = !0), (o = i || new Error("Scheduled action threw falsy error"));
    }
    if (r) return this.unsubscribe(), o;
  }
  unsubscribe() {
    if (!this.closed) {
      let { id: t, scheduler: n } = this,
        { actions: r } = n;
      (this.work = this.state = this.scheduler = null),
        (this.pending = !1),
        ot(r, this),
        t != null && (this.id = this.recycleAsyncId(n, t, null)),
        (this.delay = null),
        super.unsubscribe();
    }
  }
};
var Ft = class e {
  constructor(t, n = e.now) {
    (this.schedulerActionCtor = t), (this.now = n);
  }
  schedule(t, n = 0, r) {
    return new this.schedulerActionCtor(this, t).schedule(r, n);
  }
};
Ft.now = un.now;
var Rt = class extends Ft {
  constructor(t, n = Ft.now) {
    super(t, n), (this.actions = []), (this._active = !1);
  }
  flush(t) {
    let { actions: n } = this;
    if (this._active) {
      n.push(t);
      return;
    }
    let r;
    this._active = !0;
    do if ((r = t.execute(t.state, t.delay))) break;
    while ((t = n.shift()));
    if (((this._active = !1), r)) {
      for (; (t = n.shift()); ) t.unsubscribe();
      throw r;
    }
  }
};
var me = new Rt(Ot),
  ka = me;
var Wn = class extends Ot {
  constructor(t, n) {
    super(t, n), (this.scheduler = t), (this.work = n);
  }
  schedule(t, n = 0) {
    return n > 0
      ? super.schedule(t, n)
      : ((this.delay = n), (this.state = t), this.scheduler.flush(this), this);
  }
  execute(t, n) {
    return n > 0 || this.closed ? super.execute(t, n) : this._execute(t, n);
  }
  requestAsyncId(t, n, r = 0) {
    return (r != null && r > 0) || (r == null && this.delay > 0)
      ? super.requestAsyncId(t, n, r)
      : (t.flush(this), 0);
  }
};
var qn = class extends Rt {};
var Gd = new qn(Wn);
var Pe = new M((e) => e.complete());
function Yn(e) {
  return e && v(e.schedule);
}
function Ro(e) {
  return e[e.length - 1];
}
function Pt(e) {
  return v(Ro(e)) ? e.pop() : void 0;
}
function xe(e) {
  return Yn(Ro(e)) ? e.pop() : void 0;
}
function La(e, t) {
  return typeof Ro(e) == "number" ? e.pop() : t;
}
function Va(e, t, n, r) {
  function o(i) {
    return i instanceof n
      ? i
      : new n(function (s) {
          s(i);
        });
  }
  return new (n || (n = Promise))(function (i, s) {
    function a(l) {
      try {
        c(r.next(l));
      } catch (d) {
        s(d);
      }
    }
    function u(l) {
      try {
        c(r.throw(l));
      } catch (d) {
        s(d);
      }
    }
    function c(l) {
      l.done ? i(l.value) : o(l.value).then(a, u);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
function ja(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    n = t && e[t],
    r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (
          e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined.",
  );
}
function at(e) {
  return this instanceof at ? ((this.v = e), this) : new at(e);
}
function Ba(e, t, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(e, t || []),
    o,
    i = [];
  return (
    (o = {}),
    s("next"),
    s("throw"),
    s("return"),
    (o[Symbol.asyncIterator] = function () {
      return this;
    }),
    o
  );
  function s(f) {
    r[f] &&
      (o[f] = function (p) {
        return new Promise(function (h, g) {
          i.push([f, p, h, g]) > 1 || a(f, p);
        });
      });
  }
  function a(f, p) {
    try {
      u(r[f](p));
    } catch (h) {
      d(i[0][3], h);
    }
  }
  function u(f) {
    f.value instanceof at
      ? Promise.resolve(f.value.v).then(c, l)
      : d(i[0][2], f);
  }
  function c(f) {
    a("next", f);
  }
  function l(f) {
    a("throw", f);
  }
  function d(f, p) {
    f(p), i.shift(), i.length && a(i[0][0], i[0][1]);
  }
}
function $a(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof ja == "function" ? ja(e) : e[Symbol.iterator]()),
      (n = {}),
      r("next"),
      r("throw"),
      r("return"),
      (n[Symbol.asyncIterator] = function () {
        return this;
      }),
      n);
  function r(i) {
    n[i] =
      e[i] &&
      function (s) {
        return new Promise(function (a, u) {
          (s = e[i](s)), o(a, u, s.done, s.value);
        });
      };
  }
  function o(i, s, a, u) {
    Promise.resolve(u).then(function (c) {
      i({ value: c, done: a });
    }, s);
  }
}
var kt = (e) => e && typeof e.length == "number" && typeof e != "function";
function Qn(e) {
  return v(e?.then);
}
function Zn(e) {
  return v(e[At]);
}
function Kn(e) {
  return Symbol.asyncIterator && v(e?.[Symbol.asyncIterator]);
}
function Jn(e) {
  return new TypeError(
    `You provided ${e !== null && typeof e == "object" ? "an invalid object" : `'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`,
  );
}
function zd() {
  return typeof Symbol != "function" || !Symbol.iterator
    ? "@@iterator"
    : Symbol.iterator;
}
var Xn = zd();
function er(e) {
  return v(e?.[Xn]);
}
function tr(e) {
  return Ba(this, arguments, function* () {
    let n = e.getReader();
    try {
      for (;;) {
        let { value: r, done: o } = yield at(n.read());
        if (o) return yield at(void 0);
        yield yield at(r);
      }
    } finally {
      n.releaseLock();
    }
  });
}
function nr(e) {
  return v(e?.getReader);
}
function E(e) {
  if (e instanceof M) return e;
  if (e != null) {
    if (Zn(e)) return Wd(e);
    if (kt(e)) return qd(e);
    if (Qn(e)) return Yd(e);
    if (Kn(e)) return Ha(e);
    if (er(e)) return Qd(e);
    if (nr(e)) return Zd(e);
  }
  throw Jn(e);
}
function Wd(e) {
  return new M((t) => {
    let n = e[At]();
    if (v(n.subscribe)) return n.subscribe(t);
    throw new TypeError(
      "Provided object does not correctly implement Symbol.observable",
    );
  });
}
function qd(e) {
  return new M((t) => {
    for (let n = 0; n < e.length && !t.closed; n++) t.next(e[n]);
    t.complete();
  });
}
function Yd(e) {
  return new M((t) => {
    e.then(
      (n) => {
        t.closed || (t.next(n), t.complete());
      },
      (n) => t.error(n),
    ).then(null, Hn);
  });
}
function Qd(e) {
  return new M((t) => {
    for (let n of e) if ((t.next(n), t.closed)) return;
    t.complete();
  });
}
function Ha(e) {
  return new M((t) => {
    Kd(e, t).catch((n) => t.error(n));
  });
}
function Zd(e) {
  return Ha(tr(e));
}
function Kd(e, t) {
  var n, r, o, i;
  return Va(this, void 0, void 0, function* () {
    try {
      for (n = $a(e); (r = yield n.next()), !r.done; ) {
        let s = r.value;
        if ((t.next(s), t.closed)) return;
      }
    } catch (s) {
      o = { error: s };
    } finally {
      try {
        r && !r.done && (i = n.return) && (yield i.call(n));
      } finally {
        if (o) throw o.error;
      }
    }
    t.complete();
  });
}
function q(e, t, n, r = 0, o = !1) {
  let i = t.schedule(function () {
    n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if ((e.add(i), !o)) return i;
}
function ln(e, t = 0) {
  return y((n, r) => {
    n.subscribe(
      m(
        r,
        (o) => q(r, e, () => r.next(o), t),
        () => q(r, e, () => r.complete(), t),
        (o) => q(r, e, () => r.error(o), t),
      ),
    );
  });
}
function rr(e, t = 0) {
  return y((n, r) => {
    r.add(e.schedule(() => n.subscribe(r), t));
  });
}
function Ua(e, t) {
  return E(e).pipe(rr(t), ln(t));
}
function Ga(e, t) {
  return E(e).pipe(rr(t), ln(t));
}
function za(e, t) {
  return new M((n) => {
    let r = 0;
    return t.schedule(function () {
      r === e.length
        ? n.complete()
        : (n.next(e[r++]), n.closed || this.schedule());
    });
  });
}
function Wa(e, t) {
  return new M((n) => {
    let r;
    return (
      q(n, t, () => {
        (r = e[Xn]()),
          q(
            n,
            t,
            () => {
              let o, i;
              try {
                ({ value: o, done: i } = r.next());
              } catch (s) {
                n.error(s);
                return;
              }
              i ? n.complete() : n.next(o);
            },
            0,
            !0,
          );
      }),
      () => v(r?.return) && r.return()
    );
  });
}
function or(e, t) {
  if (!e) throw new Error("Iterable cannot be null");
  return new M((n) => {
    q(n, t, () => {
      let r = e[Symbol.asyncIterator]();
      q(
        n,
        t,
        () => {
          r.next().then((o) => {
            o.done ? n.complete() : n.next(o.value);
          });
        },
        0,
        !0,
      );
    });
  });
}
function qa(e, t) {
  return or(tr(e), t);
}
function Ya(e, t) {
  if (e != null) {
    if (Zn(e)) return Ua(e, t);
    if (kt(e)) return za(e, t);
    if (Qn(e)) return Ga(e, t);
    if (Kn(e)) return or(e, t);
    if (er(e)) return Wa(e, t);
    if (nr(e)) return qa(e, t);
  }
  throw Jn(e);
}
function Se(e, t) {
  return t ? Ya(e, t) : E(e);
}
function Po(...e) {
  let t = xe(e);
  return Se(e, t);
}
function ko(e, t) {
  let n = v(e) ? e : () => e,
    r = (o) => o.error(n());
  return new M(t ? (o) => t.schedule(r, 0, o) : r);
}
var We = class e {
  constructor(t, n, r) {
    (this.kind = t),
      (this.value = n),
      (this.error = r),
      (this.hasValue = t === "N");
  }
  observe(t) {
    return Lo(this, t);
  }
  do(t, n, r) {
    let { kind: o, value: i, error: s } = this;
    return o === "N" ? t?.(i) : o === "E" ? n?.(s) : r?.();
  }
  accept(t, n, r) {
    var o;
    return v((o = t) === null || o === void 0 ? void 0 : o.next)
      ? this.observe(t)
      : this.do(t, n, r);
  }
  toObservable() {
    let { kind: t, value: n, error: r } = this,
      o = t === "N" ? Po(n) : t === "E" ? ko(() => r) : t === "C" ? Pe : 0;
    if (!o) throw new TypeError(`Unexpected notification kind ${t}`);
    return o;
  }
  static createNext(t) {
    return new e("N", t);
  }
  static createError(t) {
    return new e("E", void 0, t);
  }
  static createComplete() {
    return e.completeNotification;
  }
};
We.completeNotification = new We("C");
function Lo(e, t) {
  var n, r, o;
  let { kind: i, value: s, error: a } = e;
  if (typeof i != "string")
    throw new TypeError('Invalid notification, missing "kind"');
  i === "N"
    ? (n = t.next) === null || n === void 0 || n.call(t, s)
    : i === "E"
      ? (r = t.error) === null || r === void 0 || r.call(t, a)
      : (o = t.complete) === null || o === void 0 || o.call(t);
}
function Jd(e) {
  return !!e && (e instanceof M || (v(e.lift) && v(e.subscribe)));
}
var ut = ze(
  (e) =>
    function () {
      e(this),
        (this.name = "EmptyError"),
        (this.message = "no elements in sequence");
    },
);
function ir(e) {
  return e instanceof Date && !isNaN(e);
}
var Xd = ze(
  (e) =>
    function (n = null) {
      e(this),
        (this.message = "Timeout has occurred"),
        (this.name = "TimeoutError"),
        (this.info = n);
    },
);
function ef(e, t) {
  let {
    first: n,
    each: r,
    with: o = tf,
    scheduler: i = t ?? me,
    meta: s = null,
  } = ir(e) ? { first: e } : typeof e == "number" ? { each: e } : e;
  if (n == null && r == null) throw new TypeError("No timeout provided.");
  return y((a, u) => {
    let c,
      l,
      d = null,
      f = 0,
      p = (h) => {
        l = q(
          u,
          i,
          () => {
            try {
              c.unsubscribe(),
                E(o({ meta: s, lastValue: d, seen: f })).subscribe(u);
            } catch (g) {
              u.error(g);
            }
          },
          h,
        );
      };
    (c = a.subscribe(
      m(
        u,
        (h) => {
          l?.unsubscribe(), f++, u.next((d = h)), r > 0 && p(r);
        },
        void 0,
        void 0,
        () => {
          l?.closed || l?.unsubscribe(), (d = null);
        },
      ),
    )),
      !f && p(n != null ? (typeof n == "number" ? n : +n - i.now()) : r);
  });
}
function tf(e) {
  throw new Xd(e);
}
function ne(e, t) {
  return y((n, r) => {
    let o = 0;
    n.subscribe(
      m(r, (i) => {
        r.next(e.call(t, i, o++));
      }),
    );
  });
}
var { isArray: nf } = Array;
function rf(e, t) {
  return nf(t) ? e(...t) : e(t);
}
function Lt(e) {
  return ne((t) => rf(e, t));
}
var { isArray: of } = Array,
  { getPrototypeOf: sf, prototype: af, keys: uf } = Object;
function sr(e) {
  if (e.length === 1) {
    let t = e[0];
    if (of(t)) return { args: t, keys: null };
    if (cf(t)) {
      let n = uf(t);
      return { args: n.map((r) => t[r]), keys: n };
    }
  }
  return { args: e, keys: null };
}
function cf(e) {
  return e && typeof e == "object" && sf(e) === af;
}
function ar(e, t) {
  return e.reduce((n, r, o) => ((n[r] = t[o]), n), {});
}
function lf(...e) {
  let t = xe(e),
    n = Pt(e),
    { args: r, keys: o } = sr(e);
  if (r.length === 0) return Se([], t);
  let i = new M(df(r, t, o ? (s) => ar(o, s) : z));
  return n ? i.pipe(Lt(n)) : i;
}
function df(e, t, n = z) {
  return (r) => {
    Qa(
      t,
      () => {
        let { length: o } = e,
          i = new Array(o),
          s = o,
          a = o;
        for (let u = 0; u < o; u++)
          Qa(
            t,
            () => {
              let c = Se(e[u], t),
                l = !1;
              c.subscribe(
                m(
                  r,
                  (d) => {
                    (i[u] = d), l || ((l = !0), a--), a || r.next(n(i.slice()));
                  },
                  () => {
                    --s || r.complete();
                  },
                ),
              );
            },
            r,
          );
      },
      r,
    );
  };
}
function Qa(e, t, n) {
  e ? q(n, e, t) : t();
}
function Za(e, t, n, r, o, i, s, a) {
  let u = [],
    c = 0,
    l = 0,
    d = !1,
    f = () => {
      d && !u.length && !c && t.complete();
    },
    p = (g) => (c < r ? h(g) : u.push(g)),
    h = (g) => {
      i && t.next(g), c++;
      let I = !1;
      E(n(g, l++)).subscribe(
        m(
          t,
          (x) => {
            o?.(x), i ? p(x) : t.next(x);
          },
          () => {
            I = !0;
          },
          void 0,
          () => {
            if (I)
              try {
                for (c--; u.length && c < r; ) {
                  let x = u.shift();
                  s ? q(t, s, () => h(x)) : h(x);
                }
                f();
              } catch (x) {
                t.error(x);
              }
          },
        ),
      );
    };
  return (
    e.subscribe(
      m(t, p, () => {
        (d = !0), f();
      }),
    ),
    () => {
      a?.();
    }
  );
}
function ye(e, t, n = 1 / 0) {
  return v(t)
    ? ye((r, o) => ne((i, s) => t(r, i, o, s))(E(e(r, o))), n)
    : (typeof t == "number" && (n = t), y((r, o) => Za(r, o, e, n)));
}
function ur(e = 1 / 0) {
  return ye(z, e);
}
function Ka() {
  return ur(1);
}
function jt(...e) {
  return Ka()(Se(e, xe(e)));
}
function ff(e) {
  return new M((t) => {
    E(e()).subscribe(t);
  });
}
function pf(...e) {
  let t = Pt(e),
    { args: n, keys: r } = sr(e),
    o = new M((i) => {
      let { length: s } = n;
      if (!s) {
        i.complete();
        return;
      }
      let a = new Array(s),
        u = s,
        c = s;
      for (let l = 0; l < s; l++) {
        let d = !1;
        E(n[l]).subscribe(
          m(
            i,
            (f) => {
              d || ((d = !0), c--), (a[l] = f);
            },
            () => u--,
            void 0,
            () => {
              (!u || !d) && (c || i.next(r ? ar(r, a) : a), i.complete());
            },
          ),
        );
      }
    });
  return t ? o.pipe(Lt(t)) : o;
}
var hf = ["addListener", "removeListener"],
  gf = ["addEventListener", "removeEventListener"],
  mf = ["on", "off"];
function jo(e, t, n, r) {
  if ((v(n) && ((r = n), (n = void 0)), r)) return jo(e, t, n).pipe(Lt(r));
  let [o, i] = Df(e)
    ? gf.map((s) => (a) => e[s](t, a, n))
    : yf(e)
      ? hf.map(Ja(e, t))
      : vf(e)
        ? mf.map(Ja(e, t))
        : [];
  if (!o && kt(e)) return ye((s) => jo(s, t, n))(E(e));
  if (!o) throw new TypeError("Invalid event target");
  return new M((s) => {
    let a = (...u) => s.next(1 < u.length ? u : u[0]);
    return o(a), () => i(a);
  });
}
function Ja(e, t) {
  return (n) => (r) => e[n](t, r);
}
function yf(e) {
  return v(e.addListener) && v(e.removeListener);
}
function vf(e) {
  return v(e.on) && v(e.off);
}
function Df(e) {
  return v(e.addEventListener) && v(e.removeEventListener);
}
function Vt(e = 0, t, n = ka) {
  let r = -1;
  return (
    t != null && (Yn(t) ? (n = t) : (r = t)),
    new M((o) => {
      let i = ir(e) ? +e - n.now() : e;
      i < 0 && (i = 0);
      let s = 0;
      return n.schedule(function () {
        o.closed ||
          (o.next(s++), 0 <= r ? this.schedule(void 0, r) : o.complete());
      }, i);
    })
  );
}
function wf(e = 0, t = me) {
  return e < 0 && (e = 0), Vt(e, e, t);
}
function If(...e) {
  let t = xe(e),
    n = La(e, 1 / 0),
    r = e;
  return r.length ? (r.length === 1 ? E(r[0]) : ur(n)(Se(r, t))) : Pe;
}
function ct(e, t) {
  return y((n, r) => {
    let o = 0;
    n.subscribe(m(r, (i) => e.call(t, i, o++) && r.next(i)));
  });
}
function Xa(e) {
  return y((t, n) => {
    let r = !1,
      o = null,
      i = null,
      s = !1,
      a = () => {
        if ((i?.unsubscribe(), (i = null), r)) {
          r = !1;
          let c = o;
          (o = null), n.next(c);
        }
        s && n.complete();
      },
      u = () => {
        (i = null), s && n.complete();
      };
    t.subscribe(
      m(
        n,
        (c) => {
          (r = !0), (o = c), i || E(e(c)).subscribe((i = m(n, a, u)));
        },
        () => {
          (s = !0), (!r || !i || i.closed) && n.complete();
        },
      ),
    );
  });
}
function Ef(e, t = me) {
  return Xa(() => Vt(e, t));
}
function Vo(e) {
  return y((t, n) => {
    let r = null,
      o = !1,
      i;
    (r = t.subscribe(
      m(n, void 0, void 0, (s) => {
        (i = E(e(s, Vo(e)(t)))),
          r ? (r.unsubscribe(), (r = null), i.subscribe(n)) : (o = !0);
      }),
    )),
      o && (r.unsubscribe(), (r = null), i.subscribe(n));
  });
}
function eu(e, t, n, r, o) {
  return (i, s) => {
    let a = n,
      u = t,
      c = 0;
    i.subscribe(
      m(
        s,
        (l) => {
          let d = c++;
          (u = a ? e(u, l, d) : ((a = !0), l)), r && s.next(u);
        },
        o &&
          (() => {
            a && s.next(u), s.complete();
          }),
      ),
    );
  };
}
function Cf(e, t) {
  return v(t) ? ye(e, t, 1) : ye(e, 1);
}
function bf(e, t = me) {
  return y((n, r) => {
    let o = null,
      i = null,
      s = null,
      a = () => {
        if (o) {
          o.unsubscribe(), (o = null);
          let c = i;
          (i = null), r.next(c);
        }
      };
    function u() {
      let c = s + e,
        l = t.now();
      if (l < c) {
        (o = this.schedule(void 0, c - l)), r.add(o);
        return;
      }
      a();
    }
    n.subscribe(
      m(
        r,
        (c) => {
          (i = c), (s = t.now()), o || ((o = t.schedule(u, e)), r.add(o));
        },
        () => {
          a(), r.complete();
        },
        void 0,
        () => {
          i = o = null;
        },
      ),
    );
  });
}
function dn(e) {
  return y((t, n) => {
    let r = !1;
    t.subscribe(
      m(
        n,
        (o) => {
          (r = !0), n.next(o);
        },
        () => {
          r || n.next(e), n.complete();
        },
      ),
    );
  });
}
function Bt(e) {
  return e <= 0
    ? () => Pe
    : y((t, n) => {
        let r = 0;
        t.subscribe(
          m(n, (o) => {
            ++r <= e && (n.next(o), e <= r && n.complete());
          }),
        );
      });
}
function Bo() {
  return y((e, t) => {
    e.subscribe(m(t, Fe));
  });
}
function $o(e) {
  return ne(() => e);
}
function Ho(e, t) {
  return t
    ? (n) => jt(t.pipe(Bt(1), Bo()), n.pipe(Ho(e)))
    : ye((n, r) => E(e(n, r)).pipe(Bt(1), $o(n)));
}
function _f(e, t = me) {
  let n = Vt(e, t);
  return Ho(() => n);
}
function Mf() {
  return y((e, t) => {
    e.subscribe(m(t, (n) => Lo(n, t)));
  });
}
function tu(e, t = z) {
  return (
    (e = e ?? xf),
    y((n, r) => {
      let o,
        i = !0;
      n.subscribe(
        m(r, (s) => {
          let a = t(s);
          (i || !e(o, a)) && ((i = !1), (o = a), r.next(s));
        }),
      );
    })
  );
}
function xf(e, t) {
  return e === t;
}
function cr(e = Sf) {
  return y((t, n) => {
    let r = !1;
    t.subscribe(
      m(
        n,
        (o) => {
          (r = !0), n.next(o);
        },
        () => (r ? n.complete() : n.error(e())),
      ),
    );
  });
}
function Sf() {
  return new ut();
}
function Uo(e, t) {
  return t
    ? (n) => n.pipe(Uo((r, o) => E(e(r, o)).pipe(ne((i, s) => t(r, i, o, s)))))
    : y((n, r) => {
        let o = 0,
          i = null,
          s = !1;
        n.subscribe(
          m(
            r,
            (a) => {
              i ||
                ((i = m(r, void 0, () => {
                  (i = null), s && r.complete();
                })),
                E(e(a, o++)).subscribe(i));
            },
            () => {
              (s = !0), !i && r.complete();
            },
          ),
        );
      });
}
function Tf(e) {
  return y((t, n) => {
    try {
      t.subscribe(n);
    } finally {
      n.add(e);
    }
  });
}
function nu(e, t) {
  let n = arguments.length >= 2;
  return (r) =>
    r.pipe(
      e ? ct((o, i) => e(o, i, r)) : z,
      Bt(1),
      n ? dn(t) : cr(() => new ut()),
    );
}
function Nf(e, t, n, r) {
  return y((o, i) => {
    let s;
    !t || typeof t == "function"
      ? (s = t)
      : ({ duration: n, element: s, connector: r } = t);
    let a = new Map(),
      u = (h) => {
        a.forEach(h), h(i);
      },
      c = (h) => u((g) => g.error(h)),
      l = 0,
      d = !1,
      f = new sn(
        i,
        (h) => {
          try {
            let g = e(h),
              I = a.get(g);
            if (!I) {
              a.set(g, (I = r ? r() : new te()));
              let x = p(g, I);
              if ((i.next(x), n)) {
                let $ = m(
                  I,
                  () => {
                    I.complete(), $?.unsubscribe();
                  },
                  void 0,
                  void 0,
                  () => a.delete(g),
                );
                f.add(E(n(x)).subscribe($));
              }
            }
            I.next(s ? s(h) : h);
          } catch (g) {
            c(g);
          }
        },
        () => u((h) => h.complete()),
        c,
        () => a.clear(),
        () => ((d = !0), l === 0),
      );
    o.subscribe(f);
    function p(h, g) {
      let I = new M((x) => {
        l++;
        let $ = g.subscribe(x);
        return () => {
          $.unsubscribe(), --l === 0 && d && f.unsubscribe();
        };
      });
      return (I.key = h), I;
    }
  });
}
function Go(e) {
  return e <= 0
    ? () => Pe
    : y((t, n) => {
        let r = [];
        t.subscribe(
          m(
            n,
            (o) => {
              r.push(o), e < r.length && r.shift();
            },
            () => {
              for (let o of r) n.next(o);
              n.complete();
            },
            void 0,
            () => {
              r = null;
            },
          ),
        );
      });
}
function Af(e, t) {
  let n = arguments.length >= 2;
  return (r) =>
    r.pipe(
      e ? ct((o, i) => e(o, i, r)) : z,
      Go(1),
      n ? dn(t) : cr(() => new ut()),
    );
}
function Of() {
  return y((e, t) => {
    e.subscribe(
      m(
        t,
        (n) => {
          t.next(We.createNext(n));
        },
        () => {
          t.next(We.createComplete()), t.complete();
        },
        (n) => {
          t.next(We.createError(n)), t.complete();
        },
      ),
    );
  });
}
function Ff(...e) {
  let t = e.length;
  if (t === 0) throw new Error("list of properties cannot be empty.");
  return ne((n) => {
    let r = n;
    for (let o = 0; o < t; o++) {
      let i = r?.[e[o]];
      if (typeof i < "u") r = i;
      else return;
    }
    return r;
  });
}
function Rf(e, t) {
  return y(eu(e, t, arguments.length >= 2, !0));
}
function Pf(e = {}) {
  let {
    connector: t = () => new te(),
    resetOnError: n = !0,
    resetOnComplete: r = !0,
    resetOnRefCountZero: o = !0,
  } = e;
  return (i) => {
    let s,
      a,
      u,
      c = 0,
      l = !1,
      d = !1,
      f = () => {
        a?.unsubscribe(), (a = void 0);
      },
      p = () => {
        f(), (s = u = void 0), (l = d = !1);
      },
      h = () => {
        let g = s;
        p(), g?.unsubscribe();
      };
    return y((g, I) => {
      c++, !d && !l && f();
      let x = (u = u ?? t());
      I.add(() => {
        c--, c === 0 && !d && !l && (a = zo(h, o));
      }),
        x.subscribe(I),
        !s &&
          c > 0 &&
          ((s = new Re({
            next: ($) => x.next($),
            error: ($) => {
              (d = !0), f(), (a = zo(p, n, $)), x.error($);
            },
            complete: () => {
              (l = !0), f(), (a = zo(p, r)), x.complete();
            },
          })),
          E(g).subscribe(s));
    })(i);
  };
}
function zo(e, t, ...n) {
  if (t === !0) {
    e();
    return;
  }
  if (t === !1) return;
  let r = new Re({
    next: () => {
      r.unsubscribe(), e();
    },
  });
  return E(t(...n)).subscribe(r);
}
function kf(e) {
  return ct((t, n) => e <= n);
}
function Lf(...e) {
  let t = xe(e);
  return y((n, r) => {
    (t ? jt(e, n, t) : jt(e, n)).subscribe(r);
  });
}
function ru(e, t) {
  return y((n, r) => {
    let o = null,
      i = 0,
      s = !1,
      a = () => s && !o && r.complete();
    n.subscribe(
      m(
        r,
        (u) => {
          o?.unsubscribe();
          let c = 0,
            l = i++;
          E(e(u, l)).subscribe(
            (o = m(
              r,
              (d) => r.next(t ? t(u, d, l, c++) : d),
              () => {
                (o = null), a();
              },
            )),
          );
        },
        () => {
          (s = !0), a();
        },
      ),
    );
  });
}
function jf(e) {
  return y((t, n) => {
    E(e).subscribe(m(n, () => n.complete(), Fe)), !n.closed && t.subscribe(n);
  });
}
function ou(e, t, n) {
  let r = v(e) || t || n ? { next: e, error: t, complete: n } : e;
  return r
    ? y((o, i) => {
        var s;
        (s = r.subscribe) === null || s === void 0 || s.call(r);
        let a = !0;
        o.subscribe(
          m(
            i,
            (u) => {
              var c;
              (c = r.next) === null || c === void 0 || c.call(r, u), i.next(u);
            },
            () => {
              var u;
              (a = !1),
                (u = r.complete) === null || u === void 0 || u.call(r),
                i.complete();
            },
            (u) => {
              var c;
              (a = !1),
                (c = r.error) === null || c === void 0 || c.call(r, u),
                i.error(u);
            },
            () => {
              var u, c;
              a && ((u = r.unsubscribe) === null || u === void 0 || u.call(r)),
                (c = r.finalize) === null || c === void 0 || c.call(r);
            },
          ),
        );
      })
    : z;
}
function iu(...e) {
  let t = Pt(e);
  return y((n, r) => {
    let o = e.length,
      i = new Array(o),
      s = e.map(() => !1),
      a = !1;
    for (let u = 0; u < o; u++)
      E(e[u]).subscribe(
        m(
          r,
          (c) => {
            (i[u] = c),
              !a && !s[u] && ((s[u] = !0), (a = s.every(z)) && (s = null));
          },
          Fe,
        ),
      );
    n.subscribe(
      m(r, (u) => {
        if (a) {
          let c = [u, ...i];
          r.next(t ? t(...c) : c);
        }
      }),
    );
  });
}
var Bu = "https://g.co/ng/security#xss",
  T = class extends Error {
    constructor(t, n) {
      super($u(t, n)), (this.code = t);
    }
  };
function $u(e, t) {
  return `${`NG0${Math.abs(e)}`}${t ? ": " + t : ""}`;
}
function Sn(e) {
  return { toString: e }.toString();
}
var lr = "__parameters__";
function Vf(e) {
  return function (...n) {
    if (e) {
      let r = e(...n);
      for (let o in r) this[o] = r[o];
    }
  };
}
function fs(e, t, n) {
  return Sn(() => {
    let r = Vf(t);
    function o(...i) {
      if (this instanceof o) return r.apply(this, i), this;
      let s = new o(...i);
      return (a.annotation = s), a;
      function a(u, c, l) {
        let d = u.hasOwnProperty(lr)
          ? u[lr]
          : Object.defineProperty(u, lr, { value: [] })[lr];
        for (; d.length <= l; ) d.push(null);
        return (d[l] = d[l] || []).push(s), u;
      }
    }
    return (
      n && (o.prototype = Object.create(n.prototype)),
      (o.prototype.ngMetadataName = e),
      (o.annotationCls = o),
      o
    );
  });
}
var Ye = globalThis;
function O(e) {
  for (let t in e) if (e[t] === O) return t;
  throw Error("Could not find renamed property on target object.");
}
function Bf(e, t) {
  for (let n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
}
function ie(e) {
  if (typeof e == "string") return e;
  if (Array.isArray(e)) return "[" + e.map(ie).join(", ") + "]";
  if (e == null) return "" + e;
  if (e.overriddenName) return `${e.overriddenName}`;
  if (e.name) return `${e.name}`;
  let t = e.toString();
  if (t == null) return "" + t;
  let n = t.indexOf(`
`);
  return n === -1 ? t : t.substring(0, n);
}
function ui(e, t) {
  return e == null || e === ""
    ? t === null
      ? ""
      : t
    : t == null || t === ""
      ? e
      : e + " " + t;
}
var $f = O({ __forward_ref__: O });
function Hu(e) {
  return (
    (e.__forward_ref__ = Hu),
    (e.toString = function () {
      return ie(this());
    }),
    e
  );
}
function J(e) {
  return Uu(e) ? e() : e;
}
function Uu(e) {
  return (
    typeof e == "function" && e.hasOwnProperty($f) && e.__forward_ref__ === Hu
  );
}
function L(e) {
  return {
    token: e.token,
    providedIn: e.providedIn || null,
    factory: e.factory,
    value: void 0,
  };
}
function Gu(e) {
  return { providers: e.providers || [], imports: e.imports || [] };
}
function $r(e) {
  return su(e, zu) || su(e, Wu);
}
function HM(e) {
  return $r(e) !== null;
}
function su(e, t) {
  return e.hasOwnProperty(t) ? e[t] : null;
}
function Hf(e) {
  let t = e && (e[zu] || e[Wu]);
  return t || null;
}
function au(e) {
  return e && (e.hasOwnProperty(uu) || e.hasOwnProperty(Uf)) ? e[uu] : null;
}
var zu = O({ ɵprov: O }),
  uu = O({ ɵinj: O }),
  Wu = O({ ngInjectableDef: O }),
  Uf = O({ ngInjectorDef: O }),
  R = class {
    constructor(t, n) {
      (this._desc = t),
        (this.ngMetadataName = "InjectionToken"),
        (this.ɵprov = void 0),
        typeof n == "number"
          ? (this.__NG_ELEMENT_ID__ = n)
          : n !== void 0 &&
            (this.ɵprov = L({
              token: this,
              providedIn: n.providedIn || "root",
              factory: n.factory,
            }));
    }
    get multi() {
      return this;
    }
    toString() {
      return `InjectionToken ${this._desc}`;
    }
  };
function qu(e) {
  return e && !!e.ɵproviders;
}
var Gf = O({ ɵcmp: O }),
  zf = O({ ɵdir: O }),
  Wf = O({ ɵpipe: O }),
  qf = O({ ɵmod: O }),
  wr = O({ ɵfac: O }),
  fn = O({ __NG_ELEMENT_ID__: O }),
  cu = O({ __NG_ENV_ID__: O });
function Wt(e) {
  return typeof e == "string" ? e : e == null ? "" : String(e);
}
function Yf(e) {
  return typeof e == "function"
    ? e.name || e.toString()
    : typeof e == "object" && e != null && typeof e.type == "function"
      ? e.type.name || e.type.toString()
      : Wt(e);
}
function Qf(e, t) {
  let n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
  throw new T(-200, e);
}
function ps(e, t) {
  throw new T(-201, !1);
}
var S = (function (e) {
    return (
      (e[(e.Default = 0)] = "Default"),
      (e[(e.Host = 1)] = "Host"),
      (e[(e.Self = 2)] = "Self"),
      (e[(e.SkipSelf = 4)] = "SkipSelf"),
      (e[(e.Optional = 8)] = "Optional"),
      e
    );
  })(S || {}),
  ci;
function Yu() {
  return ci;
}
function re(e) {
  let t = ci;
  return (ci = e), t;
}
function Qu(e, t, n) {
  let r = $r(e);
  if (r && r.providedIn == "root")
    return r.value === void 0 ? (r.value = r.factory()) : r.value;
  if (n & S.Optional) return null;
  if (t !== void 0) return t;
  ps(e, "Injector");
}
var Zf = {},
  pn = Zf,
  li = "__NG_DI_FLAG__",
  Ir = "ngTempTokenPath",
  Kf = "ngTokenPath",
  Jf = /\n/gm,
  Xf = "\u0275",
  lu = "__source",
  Gt;
function ep() {
  return Gt;
}
function qe(e) {
  let t = Gt;
  return (Gt = e), t;
}
function tp(e, t = S.Default) {
  if (Gt === void 0) throw new T(-203, !1);
  return Gt === null
    ? Qu(e, void 0, t)
    : Gt.get(e, t & S.Optional ? null : void 0, t);
}
function Z(e, t = S.Default) {
  return (Yu() || tp)(J(e), t);
}
function k(e, t = S.Default) {
  return Z(e, Hr(t));
}
function Hr(e) {
  return typeof e > "u" || typeof e == "number"
    ? e
    : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4);
}
function di(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = J(e[n]);
    if (Array.isArray(r)) {
      if (r.length === 0) throw new T(900, !1);
      let o,
        i = S.Default;
      for (let s = 0; s < r.length; s++) {
        let a = r[s],
          u = np(a);
        typeof u == "number" ? (u === -1 ? (o = a.token) : (i |= u)) : (o = a);
      }
      t.push(Z(o, i));
    } else t.push(Z(r));
  }
  return t;
}
function hs(e, t) {
  return (e[li] = t), (e.prototype[li] = t), e;
}
function np(e) {
  return e[li];
}
function rp(e, t, n, r) {
  let o = e[Ir];
  throw (
    (t[lu] && o.unshift(t[lu]),
    (e.message = op(
      `
` + e.message,
      o,
      n,
      r,
    )),
    (e[Kf] = o),
    (e[Ir] = null),
    e)
  );
}
function op(e, t, n, r = null) {
  e =
    e &&
    e.charAt(0) ===
      `
` &&
    e.charAt(1) == Xf
      ? e.slice(2)
      : e;
  let o = ie(t);
  if (Array.isArray(t)) o = t.map(ie).join(" -> ");
  else if (typeof t == "object") {
    let i = [];
    for (let s in t)
      if (t.hasOwnProperty(s)) {
        let a = t[s];
        i.push(s + ":" + (typeof a == "string" ? JSON.stringify(a) : ie(a)));
      }
    o = `{${i.join(", ")}}`;
  }
  return `${n}${r ? "(" + r + ")" : ""}[${o}]: ${e.replace(
    Jf,
    `
  `,
  )}`;
}
var UM = hs(
    fs("Inject", (e) => ({ token: e })),
    -1,
  ),
  ip = hs(fs("Optional"), 8);
var sp = hs(fs("SkipSelf"), 4);
function ht(e, t) {
  let n = e.hasOwnProperty(wr);
  return n ? e[wr] : null;
}
function ap(e, t, n) {
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) {
    let o = e[r],
      i = t[r];
    if ((n && ((o = n(o)), (i = n(i))), i !== o)) return !1;
  }
  return !0;
}
function up(e) {
  return e.flat(Number.POSITIVE_INFINITY);
}
function gs(e, t) {
  e.forEach((n) => (Array.isArray(n) ? gs(n, t) : t(n)));
}
function Zu(e, t, n) {
  t >= e.length ? e.push(n) : e.splice(t, 0, n);
}
function Er(e, t) {
  return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
}
function cp(e, t) {
  let n = [];
  for (let r = 0; r < e; r++) n.push(t);
  return n;
}
function lp(e, t, n, r) {
  let o = e.length;
  if (o == t) e.push(n, r);
  else if (o === 1) e.push(r, e[0]), (e[0] = n);
  else {
    for (o--, e.push(e[o - 1], e[o]); o > t; ) {
      let i = o - 2;
      (e[o] = e[i]), o--;
    }
    (e[t] = n), (e[t + 1] = r);
  }
}
function ms(e, t, n) {
  let r = Tn(e, t);
  return r >= 0 ? (e[r | 1] = n) : ((r = ~r), lp(e, r, t, n)), r;
}
function Wo(e, t) {
  let n = Tn(e, t);
  if (n >= 0) return e[n | 1];
}
function Tn(e, t) {
  return dp(e, t, 1);
}
function dp(e, t, n) {
  let r = 0,
    o = e.length >> n;
  for (; o !== r; ) {
    let i = r + ((o - r) >> 1),
      s = e[i << n];
    if (t === s) return i << n;
    s > t ? (o = i) : (r = i + 1);
  }
  return ~(o << n);
}
var qt = {},
  oe = [],
  Cr = new R(""),
  Ku = new R("", -1),
  Ju = new R(""),
  br = class {
    get(t, n = pn) {
      if (n === pn) {
        let r = new Error(`NullInjectorError: No provider for ${ie(t)}!`);
        throw ((r.name = "NullInjectorError"), r);
      }
      return n;
    }
  },
  Xu = (function (e) {
    return (e[(e.OnPush = 0)] = "OnPush"), (e[(e.Default = 1)] = "Default"), e;
  })(Xu || {}),
  hn = (function (e) {
    return (
      (e[(e.Emulated = 0)] = "Emulated"),
      (e[(e.None = 2)] = "None"),
      (e[(e.ShadowDom = 3)] = "ShadowDom"),
      e
    );
  })(hn || {}),
  Ze = (function (e) {
    return (
      (e[(e.None = 0)] = "None"),
      (e[(e.SignalBased = 1)] = "SignalBased"),
      (e[(e.HasDecoratorInputTransform = 2)] = "HasDecoratorInputTransform"),
      e
    );
  })(Ze || {});
function fp(e, t, n) {
  let r = e.length;
  for (;;) {
    let o = e.indexOf(t, n);
    if (o === -1) return o;
    if (o === 0 || e.charCodeAt(o - 1) <= 32) {
      let i = t.length;
      if (o + i === r || e.charCodeAt(o + i) <= 32) return o;
    }
    n = o + 1;
  }
}
function fi(e, t, n) {
  let r = 0;
  for (; r < n.length; ) {
    let o = n[r];
    if (typeof o == "number") {
      if (o !== 0) break;
      r++;
      let i = n[r++],
        s = n[r++],
        a = n[r++];
      e.setAttribute(t, s, a, i);
    } else {
      let i = o,
        s = n[++r];
      hp(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), r++;
    }
  }
  return r;
}
function pp(e) {
  return e === 3 || e === 4 || e === 6;
}
function hp(e) {
  return e.charCodeAt(0) === 64;
}
function gn(e, t) {
  if (!(t === null || t.length === 0))
    if (e === null || e.length === 0) e = t.slice();
    else {
      let n = -1;
      for (let r = 0; r < t.length; r++) {
        let o = t[r];
        typeof o == "number"
          ? (n = o)
          : n === 0 ||
            (n === -1 || n === 2
              ? du(e, n, o, null, t[++r])
              : du(e, n, o, null, null));
      }
    }
  return e;
}
function du(e, t, n, r, o) {
  let i = 0,
    s = e.length;
  if (t === -1) s = -1;
  else
    for (; i < e.length; ) {
      let a = e[i++];
      if (typeof a == "number") {
        if (a === t) {
          s = -1;
          break;
        } else if (a > t) {
          s = i - 1;
          break;
        }
      }
    }
  for (; i < e.length; ) {
    let a = e[i];
    if (typeof a == "number") break;
    if (a === n) {
      if (r === null) {
        o !== null && (e[i + 1] = o);
        return;
      } else if (r === e[i + 1]) {
        e[i + 2] = o;
        return;
      }
    }
    i++, r !== null && i++, o !== null && i++;
  }
  s !== -1 && (e.splice(s, 0, t), (i = s + 1)),
    e.splice(i++, 0, n),
    r !== null && e.splice(i++, 0, r),
    o !== null && e.splice(i++, 0, o);
}
var ec = "ng-template";
function gp(e, t, n, r) {
  let o = 0;
  if (r) {
    for (; o < t.length && typeof t[o] == "string"; o += 2)
      if (t[o] === "class" && fp(t[o + 1].toLowerCase(), n, 0) !== -1)
        return !0;
  } else if (ys(e)) return !1;
  if (((o = t.indexOf(1, o)), o > -1)) {
    let i;
    for (; ++o < t.length && typeof (i = t[o]) == "string"; )
      if (i.toLowerCase() === n) return !0;
  }
  return !1;
}
function ys(e) {
  return e.type === 4 && e.value !== ec;
}
function mp(e, t, n) {
  let r = e.type === 4 && !n ? ec : e.value;
  return t === r;
}
function yp(e, t, n) {
  let r = 4,
    o = e.attrs,
    i = o !== null ? wp(o) : 0,
    s = !1;
  for (let a = 0; a < t.length; a++) {
    let u = t[a];
    if (typeof u == "number") {
      if (!s && !ve(r) && !ve(u)) return !1;
      if (s && ve(u)) continue;
      (s = !1), (r = u | (r & 1));
      continue;
    }
    if (!s)
      if (r & 4) {
        if (
          ((r = 2 | (r & 1)),
          (u !== "" && !mp(e, u, n)) || (u === "" && t.length === 1))
        ) {
          if (ve(r)) return !1;
          s = !0;
        }
      } else if (r & 8) {
        if (o === null || !gp(e, o, u, n)) {
          if (ve(r)) return !1;
          s = !0;
        }
      } else {
        let c = t[++a],
          l = vp(u, o, ys(e), n);
        if (l === -1) {
          if (ve(r)) return !1;
          s = !0;
          continue;
        }
        if (c !== "") {
          let d;
          if (
            (l > i ? (d = "") : (d = o[l + 1].toLowerCase()), r & 2 && c !== d)
          ) {
            if (ve(r)) return !1;
            s = !0;
          }
        }
      }
  }
  return ve(r) || s;
}
function ve(e) {
  return (e & 1) === 0;
}
function vp(e, t, n, r) {
  if (t === null) return -1;
  let o = 0;
  if (r || !n) {
    let i = !1;
    for (; o < t.length; ) {
      let s = t[o];
      if (s === e) return o;
      if (s === 3 || s === 6) i = !0;
      else if (s === 1 || s === 2) {
        let a = t[++o];
        for (; typeof a == "string"; ) a = t[++o];
        continue;
      } else {
        if (s === 4) break;
        if (s === 0) {
          o += 4;
          continue;
        }
      }
      o += i ? 1 : 2;
    }
    return -1;
  } else return Ip(t, e);
}
function tc(e, t, n = !1) {
  for (let r = 0; r < t.length; r++) if (yp(e, t[r], n)) return !0;
  return !1;
}
function Dp(e) {
  let t = e.attrs;
  if (t != null) {
    let n = t.indexOf(5);
    if (!(n & 1)) return t[n + 1];
  }
  return null;
}
function wp(e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (pp(n)) return t;
  }
  return e.length;
}
function Ip(e, t) {
  let n = e.indexOf(4);
  if (n > -1)
    for (n++; n < e.length; ) {
      let r = e[n];
      if (typeof r == "number") return -1;
      if (r === t) return n;
      n++;
    }
  return -1;
}
function Ep(e, t) {
  e: for (let n = 0; n < t.length; n++) {
    let r = t[n];
    if (e.length === r.length) {
      for (let o = 0; o < e.length; o++) if (e[o] !== r[o]) continue e;
      return !0;
    }
  }
  return !1;
}
function fu(e, t) {
  return e ? ":not(" + t.trim() + ")" : t;
}
function Cp(e) {
  let t = e[0],
    n = 1,
    r = 2,
    o = "",
    i = !1;
  for (; n < e.length; ) {
    let s = e[n];
    if (typeof s == "string")
      if (r & 2) {
        let a = e[++n];
        o += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
      } else r & 8 ? (o += "." + s) : r & 4 && (o += " " + s);
    else
      o !== "" && !ve(s) && ((t += fu(i, o)), (o = "")),
        (r = s),
        (i = i || !ve(r));
    n++;
  }
  return o !== "" && (t += fu(i, o)), t;
}
function bp(e) {
  return e.map(Cp).join(",");
}
function _p(e) {
  let t = [],
    n = [],
    r = 1,
    o = 2;
  for (; r < e.length; ) {
    let i = e[r];
    if (typeof i == "string")
      o === 2 ? i !== "" && t.push(i, e[++r]) : o === 8 && n.push(i);
    else {
      if (!ve(o)) break;
      o = i;
    }
    r++;
  }
  return { attrs: t, classes: n };
}
function GM(e) {
  return Sn(() => {
    let t = sc(e),
      n = Ge(Ue({}, t), {
        decls: e.decls,
        vars: e.vars,
        template: e.template,
        consts: e.consts || null,
        ngContentSelectors: e.ngContentSelectors,
        onPush: e.changeDetection === Xu.OnPush,
        directiveDefs: null,
        pipeDefs: null,
        dependencies: (t.standalone && e.dependencies) || null,
        getStandaloneInjector: null,
        signals: e.signals ?? !1,
        data: e.data || {},
        encapsulation: e.encapsulation || hn.Emulated,
        styles: e.styles || oe,
        _: null,
        schemas: e.schemas || null,
        tView: null,
        id: "",
      });
    ac(n);
    let r = e.dependencies;
    return (
      (n.directiveDefs = hu(r, !1)), (n.pipeDefs = hu(r, !0)), (n.id = Tp(n)), n
    );
  });
}
function Mp(e) {
  return gt(e) || rc(e);
}
function xp(e) {
  return e !== null;
}
function nc(e) {
  return Sn(() => ({
    type: e.type,
    bootstrap: e.bootstrap || oe,
    declarations: e.declarations || oe,
    imports: e.imports || oe,
    exports: e.exports || oe,
    transitiveCompileScopes: null,
    schemas: e.schemas || null,
    id: e.id || null,
  }));
}
function pu(e, t) {
  if (e == null) return qt;
  let n = {};
  for (let r in e)
    if (e.hasOwnProperty(r)) {
      let o = e[r],
        i,
        s,
        a = Ze.None;
      Array.isArray(o)
        ? ((a = o[0]), (i = o[1]), (s = o[2] ?? i))
        : ((i = o), (s = o)),
        t ? ((n[i] = a !== Ze.None ? [r, a] : r), (t[i] = s)) : (n[i] = r);
    }
  return n;
}
function vs(e) {
  return Sn(() => {
    let t = sc(e);
    return ac(t), t;
  });
}
function Ds(e) {
  return {
    type: e.type,
    name: e.name,
    factory: null,
    pure: e.pure !== !1,
    standalone: e.standalone === !0,
    onDestroy: e.type.prototype.ngOnDestroy || null,
  };
}
function gt(e) {
  return e[Gf] || null;
}
function rc(e) {
  return e[zf] || null;
}
function oc(e) {
  return e[Wf] || null;
}
function Sp(e) {
  let t = gt(e) || rc(e) || oc(e);
  return t !== null ? t.standalone : !1;
}
function ic(e, t) {
  let n = e[qf] || null;
  if (!n && t === !0)
    throw new Error(`Type ${ie(e)} does not have '\u0275mod' property.`);
  return n;
}
function sc(e) {
  let t = {};
  return {
    type: e.type,
    providersResolver: null,
    factory: null,
    hostBindings: e.hostBindings || null,
    hostVars: e.hostVars || 0,
    hostAttrs: e.hostAttrs || null,
    contentQueries: e.contentQueries || null,
    declaredInputs: t,
    inputTransforms: null,
    inputConfig: e.inputs || qt,
    exportAs: e.exportAs || null,
    standalone: e.standalone === !0,
    signals: e.signals === !0,
    selectors: e.selectors || oe,
    viewQuery: e.viewQuery || null,
    features: e.features || null,
    setInput: null,
    findHostDirectiveDefs: null,
    hostDirectives: null,
    inputs: pu(e.inputs, t),
    outputs: pu(e.outputs),
    debugInfo: null,
  };
}
function ac(e) {
  e.features?.forEach((t) => t(e));
}
function hu(e, t) {
  if (!e) return null;
  let n = t ? oc : Mp;
  return () => (typeof e == "function" ? e() : e).map((r) => n(r)).filter(xp);
}
function Tp(e) {
  let t = 0,
    n = [
      e.selectors,
      e.ngContentSelectors,
      e.hostVars,
      e.hostAttrs,
      e.consts,
      e.vars,
      e.decls,
      e.encapsulation,
      e.standalone,
      e.signals,
      e.exportAs,
      JSON.stringify(e.inputs),
      JSON.stringify(e.outputs),
      Object.getOwnPropertyNames(e.type.prototype),
      !!e.contentQueries,
      !!e.viewQuery,
    ].join("|");
  for (let o of n) t = (Math.imul(31, t) + o.charCodeAt(0)) << 0;
  return (t += 2147483648), "c" + t;
}
function Np(e) {
  return { ɵproviders: e };
}
function Ap(...e) {
  return { ɵproviders: uc(!0, e), ɵfromNgModule: !0 };
}
function uc(e, ...t) {
  let n = [],
    r = new Set(),
    o,
    i = (s) => {
      n.push(s);
    };
  return (
    gs(t, (s) => {
      let a = s;
      pi(a, i, [], r) && ((o ||= []), o.push(a));
    }),
    o !== void 0 && cc(o, i),
    n
  );
}
function cc(e, t) {
  for (let n = 0; n < e.length; n++) {
    let { ngModule: r, providers: o } = e[n];
    ws(o, (i) => {
      t(i, r);
    });
  }
}
function pi(e, t, n, r) {
  if (((e = J(e)), !e)) return !1;
  let o = null,
    i = au(e),
    s = !i && gt(e);
  if (!i && !s) {
    let u = e.ngModule;
    if (((i = au(u)), i)) o = u;
    else return !1;
  } else {
    if (s && !s.standalone) return !1;
    o = e;
  }
  let a = r.has(o);
  if (s) {
    if (a) return !1;
    if ((r.add(o), s.dependencies)) {
      let u =
        typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
      for (let c of u) pi(c, t, n, r);
    }
  } else if (i) {
    if (i.imports != null && !a) {
      r.add(o);
      let c;
      try {
        gs(i.imports, (l) => {
          pi(l, t, n, r) && ((c ||= []), c.push(l));
        });
      } finally {
      }
      c !== void 0 && cc(c, t);
    }
    if (!a) {
      let c = ht(o) || (() => new o());
      t({ provide: o, useFactory: c, deps: oe }, o),
        t({ provide: Ju, useValue: o, multi: !0 }, o),
        t({ provide: Cr, useValue: () => Z(o), multi: !0 }, o);
    }
    let u = i.providers;
    if (u != null && !a) {
      let c = e;
      ws(u, (l) => {
        t(l, c);
      });
    }
  } else return !1;
  return o !== e && e.providers !== void 0;
}
function ws(e, t) {
  for (let n of e)
    qu(n) && (n = n.ɵproviders), Array.isArray(n) ? ws(n, t) : t(n);
}
var Op = O({ provide: String, useValue: O });
function lc(e) {
  return e !== null && typeof e == "object" && Op in e;
}
function Fp(e) {
  return !!(e && e.useExisting);
}
function Rp(e) {
  return !!(e && e.useFactory);
}
function Yt(e) {
  return typeof e == "function";
}
function Pp(e) {
  return !!e.useClass;
}
var dc = new R(""),
  pr = {},
  kp = {},
  qo;
function Is() {
  return qo === void 0 && (qo = new br()), qo;
}
var Ke = class {},
  mn = class extends Ke {
    get destroyed() {
      return this._destroyed;
    }
    constructor(t, n, r, o) {
      super(),
        (this.parent = n),
        (this.source = r),
        (this.scopes = o),
        (this.records = new Map()),
        (this._ngOnDestroyHooks = new Set()),
        (this._onDestroyHooks = []),
        (this._destroyed = !1),
        gi(t, (s) => this.processProvider(s)),
        this.records.set(Ku, $t(void 0, this)),
        o.has("environment") && this.records.set(Ke, $t(void 0, this));
      let i = this.records.get(dc);
      i != null && typeof i.value == "string" && this.scopes.add(i.value),
        (this.injectorDefTypes = new Set(this.get(Ju, oe, S.Self)));
    }
    destroy() {
      this.assertNotDestroyed(), (this._destroyed = !0);
      let t = _(null);
      try {
        for (let r of this._ngOnDestroyHooks) r.ngOnDestroy();
        let n = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let r of n) r();
      } finally {
        this.records.clear(),
          this._ngOnDestroyHooks.clear(),
          this.injectorDefTypes.clear(),
          _(t);
      }
    }
    onDestroy(t) {
      return (
        this.assertNotDestroyed(),
        this._onDestroyHooks.push(t),
        () => this.removeOnDestroy(t)
      );
    }
    runInContext(t) {
      this.assertNotDestroyed();
      let n = qe(this),
        r = re(void 0),
        o;
      try {
        return t();
      } finally {
        qe(n), re(r);
      }
    }
    get(t, n = pn, r = S.Default) {
      if ((this.assertNotDestroyed(), t.hasOwnProperty(cu))) return t[cu](this);
      r = Hr(r);
      let o,
        i = qe(this),
        s = re(void 0);
      try {
        if (!(r & S.SkipSelf)) {
          let u = this.records.get(t);
          if (u === void 0) {
            let c = $p(t) && $r(t);
            c && this.injectableDefInScope(c)
              ? (u = $t(hi(t), pr))
              : (u = null),
              this.records.set(t, u);
          }
          if (u != null) return this.hydrate(t, u);
        }
        let a = r & S.Self ? Is() : this.parent;
        return (n = r & S.Optional && n === pn ? null : n), a.get(t, n);
      } catch (a) {
        if (a.name === "NullInjectorError") {
          if (((a[Ir] = a[Ir] || []).unshift(ie(t)), i)) throw a;
          return rp(a, t, "R3InjectorError", this.source);
        } else throw a;
      } finally {
        re(s), qe(i);
      }
    }
    resolveInjectorInitializers() {
      let t = _(null),
        n = qe(this),
        r = re(void 0),
        o;
      try {
        let i = this.get(Cr, oe, S.Self);
        for (let s of i) s();
      } finally {
        qe(n), re(r), _(t);
      }
    }
    toString() {
      let t = [],
        n = this.records;
      for (let r of n.keys()) t.push(ie(r));
      return `R3Injector[${t.join(", ")}]`;
    }
    assertNotDestroyed() {
      if (this._destroyed) throw new T(205, !1);
    }
    processProvider(t) {
      t = J(t);
      let n = Yt(t) ? t : J(t && t.provide),
        r = jp(t);
      if (!Yt(t) && t.multi === !0) {
        let o = this.records.get(n);
        o ||
          ((o = $t(void 0, pr, !0)),
          (o.factory = () => di(o.multi)),
          this.records.set(n, o)),
          (n = t),
          o.multi.push(t);
      }
      this.records.set(n, r);
    }
    hydrate(t, n) {
      let r = _(null);
      try {
        return (
          n.value === pr && ((n.value = kp), (n.value = n.factory())),
          typeof n.value == "object" &&
            n.value &&
            Bp(n.value) &&
            this._ngOnDestroyHooks.add(n.value),
          n.value
        );
      } finally {
        _(r);
      }
    }
    injectableDefInScope(t) {
      if (!t.providedIn) return !1;
      let n = J(t.providedIn);
      return typeof n == "string"
        ? n === "any" || this.scopes.has(n)
        : this.injectorDefTypes.has(n);
    }
    removeOnDestroy(t) {
      let n = this._onDestroyHooks.indexOf(t);
      n !== -1 && this._onDestroyHooks.splice(n, 1);
    }
  };
function hi(e) {
  let t = $r(e),
    n = t !== null ? t.factory : ht(e);
  if (n !== null) return n;
  if (e instanceof R) throw new T(204, !1);
  if (e instanceof Function) return Lp(e);
  throw new T(204, !1);
}
function Lp(e) {
  if (e.length > 0) throw new T(204, !1);
  let n = Hf(e);
  return n !== null ? () => n.factory(e) : () => new e();
}
function jp(e) {
  if (lc(e)) return $t(void 0, e.useValue);
  {
    let t = fc(e);
    return $t(t, pr);
  }
}
function fc(e, t, n) {
  let r;
  if (Yt(e)) {
    let o = J(e);
    return ht(o) || hi(o);
  } else if (lc(e)) r = () => J(e.useValue);
  else if (Rp(e)) r = () => e.useFactory(...di(e.deps || []));
  else if (Fp(e)) r = () => Z(J(e.useExisting));
  else {
    let o = J(e && (e.useClass || e.provide));
    if (Vp(e)) r = () => new o(...di(e.deps));
    else return ht(o) || hi(o);
  }
  return r;
}
function $t(e, t, n = !1) {
  return { factory: e, value: t, multi: n ? [] : void 0 };
}
function Vp(e) {
  return !!e.deps;
}
function Bp(e) {
  return (
    e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"
  );
}
function $p(e) {
  return typeof e == "function" || (typeof e == "object" && e instanceof R);
}
function gi(e, t) {
  for (let n of e)
    Array.isArray(n) ? gi(n, t) : n && qu(n) ? gi(n.ɵproviders, t) : t(n);
}
function zM(e, t) {
  e instanceof mn && e.assertNotDestroyed();
  let n,
    r = qe(e),
    o = re(void 0);
  try {
    return t();
  } finally {
    qe(r), re(o);
  }
}
function pc() {
  return Yu() !== void 0 || ep() != null;
}
function Hp(e) {
  if (!pc()) throw new T(-203, !1);
}
function Up(e) {
  return typeof e == "function";
}
var Le = 0,
  w = 1,
  D = 2,
  W = 3,
  we = 4,
  ae = 5,
  Qt = 6,
  yn = 7,
  Y = 8,
  Zt = 9,
  Ee = 10,
  V = 11,
  vn = 12,
  gu = 13,
  Xt = 14,
  le = 15,
  Nn = 16,
  Ht = 17,
  ke = 18,
  Ur = 19,
  hc = 20,
  Qe = 21,
  hr = 22,
  mt = 23,
  K = 25,
  gc = 1;
var yt = 7,
  _r = 8,
  Kt = 9,
  Q = 10,
  Es = (function (e) {
    return (
      (e[(e.None = 0)] = "None"),
      (e[(e.HasTransplantedViews = 2)] = "HasTransplantedViews"),
      e
    );
  })(Es || {});
function ft(e) {
  return Array.isArray(e) && typeof e[gc] == "object";
}
function je(e) {
  return Array.isArray(e) && e[gc] === !0;
}
function mc(e) {
  return (e.flags & 4) !== 0;
}
function Gr(e) {
  return e.componentOffset > -1;
}
function Cs(e) {
  return (e.flags & 1) === 1;
}
function Je(e) {
  return !!e.template;
}
function Gp(e) {
  return (e[D] & 512) !== 0;
}
var mi = class {
  constructor(t, n, r) {
    (this.previousValue = t), (this.currentValue = n), (this.firstChange = r);
  }
  isFirstChange() {
    return this.firstChange;
  }
};
function yc(e, t, n, r) {
  t !== null ? t.applyValueToInputSignal(t, r) : (e[n] = r);
}
function vc() {
  return Dc;
}
function Dc(e) {
  return e.type.prototype.ngOnChanges && (e.setInput = Wp), zp;
}
vc.ngInherit = !0;
function zp() {
  let e = Ic(this),
    t = e?.current;
  if (t) {
    let n = e.previous;
    if (n === qt) e.previous = t;
    else for (let r in t) n[r] = t[r];
    (e.current = null), this.ngOnChanges(t);
  }
}
function Wp(e, t, n, r, o) {
  let i = this.declaredInputs[r],
    s = Ic(e) || qp(e, { previous: qt, current: null }),
    a = s.current || (s.current = {}),
    u = s.previous,
    c = u[i];
  (a[i] = new mi(c && c.currentValue, n, u === qt)), yc(e, t, o, n);
}
var wc = "__ngSimpleChanges__";
function Ic(e) {
  return e[wc] || null;
}
function qp(e, t) {
  return (e[wc] = t);
}
var mu = null;
var Te = function (e, t, n) {
    mu?.(e, t, n);
  },
  Yp = "svg",
  Qp = "math",
  Zp = !1;
function Kp() {
  return Zp;
}
function Ae(e) {
  for (; Array.isArray(e); ) e = e[Le];
  return e;
}
function Ec(e, t) {
  return Ae(t[e]);
}
function de(e, t) {
  return Ae(t[e.index]);
}
function bs(e, t) {
  return e.data[t];
}
function _s(e, t) {
  return e[t];
}
function et(e, t) {
  let n = t[e];
  return ft(n) ? n : n[Le];
}
function Jp(e) {
  return (e[D] & 4) === 4;
}
function Ms(e) {
  return (e[D] & 128) === 128;
}
function Xp(e) {
  return je(e[W]);
}
function Mr(e, t) {
  return t == null ? null : e[t];
}
function Cc(e) {
  e[Ht] = 0;
}
function eh(e) {
  e[D] & 1024 || ((e[D] |= 1024), Ms(e) && Dn(e));
}
function th(e, t) {
  for (; e > 0; ) (t = t[Xt]), e--;
  return t;
}
function xs(e) {
  return !!(e[D] & 9216 || e[mt]?.dirty);
}
function yi(e) {
  e[Ee].changeDetectionScheduler?.notify(1),
    xs(e)
      ? Dn(e)
      : e[D] & 64 &&
        (Kp()
          ? ((e[D] |= 1024), Dn(e))
          : e[Ee].changeDetectionScheduler?.notify());
}
function Dn(e) {
  e[Ee].changeDetectionScheduler?.notify();
  let t = wn(e);
  for (; t !== null && !(t[D] & 8192 || ((t[D] |= 8192), !Ms(t))); ) t = wn(t);
}
function bc(e, t) {
  if ((e[D] & 256) === 256) throw new T(911, !1);
  e[Qe] === null && (e[Qe] = []), e[Qe].push(t);
}
function nh(e, t) {
  if (e[Qe] === null) return;
  let n = e[Qe].indexOf(t);
  n !== -1 && e[Qe].splice(n, 1);
}
function wn(e) {
  let t = e[W];
  return je(t) ? t[W] : t;
}
var C = { lFrame: Fc(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
function rh() {
  return C.lFrame.elementDepthCount;
}
function oh() {
  C.lFrame.elementDepthCount++;
}
function ih() {
  C.lFrame.elementDepthCount--;
}
function _c() {
  return C.bindingsEnabled;
}
function Mc() {
  return C.skipHydrationRootTNode !== null;
}
function sh(e) {
  return C.skipHydrationRootTNode === e;
}
function ah() {
  C.skipHydrationRootTNode = null;
}
function b() {
  return C.lFrame.lView;
}
function G() {
  return C.lFrame.tView;
}
function WM(e) {
  return (C.lFrame.contextLView = e), e[Y];
}
function qM(e) {
  return (C.lFrame.contextLView = null), e;
}
function ue() {
  let e = xc();
  for (; e !== null && e.type === 64; ) e = e.parent;
  return e;
}
function xc() {
  return C.lFrame.currentTNode;
}
function uh() {
  let e = C.lFrame,
    t = e.currentTNode;
  return e.isParent ? t : t.parent;
}
function An(e, t) {
  let n = C.lFrame;
  (n.currentTNode = e), (n.isParent = t);
}
function Sc() {
  return C.lFrame.isParent;
}
function Tc() {
  C.lFrame.isParent = !1;
}
function ch() {
  return C.lFrame.contextLView;
}
function Ss() {
  let e = C.lFrame,
    t = e.bindingRootIndex;
  return t === -1 && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t;
}
function lh() {
  return C.lFrame.bindingIndex;
}
function dh(e) {
  return (C.lFrame.bindingIndex = e);
}
function en() {
  return C.lFrame.bindingIndex++;
}
function Ts(e) {
  let t = C.lFrame,
    n = t.bindingIndex;
  return (t.bindingIndex = t.bindingIndex + e), n;
}
function fh() {
  return C.lFrame.inI18n;
}
function ph(e, t) {
  let n = C.lFrame;
  (n.bindingIndex = n.bindingRootIndex = e), vi(t);
}
function hh() {
  return C.lFrame.currentDirectiveIndex;
}
function vi(e) {
  C.lFrame.currentDirectiveIndex = e;
}
function gh(e) {
  let t = C.lFrame.currentDirectiveIndex;
  return t === -1 ? null : e[t];
}
function Nc() {
  return C.lFrame.currentQueryIndex;
}
function Ns(e) {
  C.lFrame.currentQueryIndex = e;
}
function mh(e) {
  let t = e[w];
  return t.type === 2 ? t.declTNode : t.type === 1 ? e[ae] : null;
}
function Ac(e, t, n) {
  if (n & S.SkipSelf) {
    let o = t,
      i = e;
    for (; (o = o.parent), o === null && !(n & S.Host); )
      if (((o = mh(i)), o === null || ((i = i[Xt]), o.type & 10))) break;
    if (o === null) return !1;
    (t = o), (e = i);
  }
  let r = (C.lFrame = Oc());
  return (r.currentTNode = t), (r.lView = e), !0;
}
function As(e) {
  let t = Oc(),
    n = e[w];
  (C.lFrame = t),
    (t.currentTNode = n.firstChild),
    (t.lView = e),
    (t.tView = n),
    (t.contextLView = e),
    (t.bindingIndex = n.bindingStartIndex),
    (t.inI18n = !1);
}
function Oc() {
  let e = C.lFrame,
    t = e === null ? null : e.child;
  return t === null ? Fc(e) : t;
}
function Fc(e) {
  let t = {
    currentTNode: null,
    isParent: !0,
    lView: null,
    tView: null,
    selectedIndex: -1,
    contextLView: null,
    elementDepthCount: 0,
    currentNamespace: null,
    currentDirectiveIndex: -1,
    bindingRootIndex: -1,
    bindingIndex: -1,
    currentQueryIndex: 0,
    parent: e,
    child: null,
    inI18n: !1,
  };
  return e !== null && (e.child = t), t;
}
function Rc() {
  let e = C.lFrame;
  return (C.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e;
}
var Pc = Rc;
function Os() {
  let e = Rc();
  (e.isParent = !0),
    (e.tView = null),
    (e.selectedIndex = -1),
    (e.contextLView = null),
    (e.elementDepthCount = 0),
    (e.currentDirectiveIndex = -1),
    (e.currentNamespace = null),
    (e.bindingRootIndex = -1),
    (e.bindingIndex = -1),
    (e.currentQueryIndex = 0);
}
function yh(e) {
  return (C.lFrame.contextLView = th(e, C.lFrame.contextLView))[Y];
}
function Ve() {
  return C.lFrame.selectedIndex;
}
function vt(e) {
  C.lFrame.selectedIndex = e;
}
function Fs() {
  let e = C.lFrame;
  return bs(e.tView, e.selectedIndex);
}
function vh() {
  return C.lFrame.currentNamespace;
}
var kc = !0;
function Rs() {
  return kc;
}
function Ps(e) {
  kc = e;
}
function Dh(e, t, n) {
  let { ngOnChanges: r, ngOnInit: o, ngDoCheck: i } = t.type.prototype;
  if (r) {
    let s = Dc(t);
    (n.preOrderHooks ??= []).push(e, s),
      (n.preOrderCheckHooks ??= []).push(e, s);
  }
  o && (n.preOrderHooks ??= []).push(0 - e, o),
    i &&
      ((n.preOrderHooks ??= []).push(e, i),
      (n.preOrderCheckHooks ??= []).push(e, i));
}
function ks(e, t) {
  for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
    let i = e.data[n].type.prototype,
      {
        ngAfterContentInit: s,
        ngAfterContentChecked: a,
        ngAfterViewInit: u,
        ngAfterViewChecked: c,
        ngOnDestroy: l,
      } = i;
    s && (e.contentHooks ??= []).push(-n, s),
      a &&
        ((e.contentHooks ??= []).push(n, a),
        (e.contentCheckHooks ??= []).push(n, a)),
      u && (e.viewHooks ??= []).push(-n, u),
      c &&
        ((e.viewHooks ??= []).push(n, c), (e.viewCheckHooks ??= []).push(n, c)),
      l != null && (e.destroyHooks ??= []).push(n, l);
  }
}
function gr(e, t, n) {
  Lc(e, t, 3, n);
}
function mr(e, t, n, r) {
  (e[D] & 3) === n && Lc(e, t, n, r);
}
function Yo(e, t) {
  let n = e[D];
  (n & 3) === t && ((n &= 16383), (n += 1), (e[D] = n));
}
function Lc(e, t, n, r) {
  let o = r !== void 0 ? e[Ht] & 65535 : 0,
    i = r ?? -1,
    s = t.length - 1,
    a = 0;
  for (let u = o; u < s; u++)
    if (typeof t[u + 1] == "number") {
      if (((a = t[u]), r != null && a >= r)) break;
    } else
      t[u] < 0 && (e[Ht] += 65536),
        (a < i || i == -1) &&
          (wh(e, n, t, u), (e[Ht] = (e[Ht] & 4294901760) + u + 2)),
        u++;
}
function yu(e, t) {
  Te(4, e, t);
  let n = _(null);
  try {
    t.call(e);
  } finally {
    _(n), Te(5, e, t);
  }
}
function wh(e, t, n, r) {
  let o = n[r] < 0,
    i = n[r + 1],
    s = o ? -n[r] : n[r],
    a = e[s];
  o
    ? e[D] >> 14 < e[Ht] >> 16 &&
      (e[D] & 3) === t &&
      ((e[D] += 16384), yu(a, i))
    : yu(a, i);
}
var zt = -1,
  Dt = class {
    constructor(t, n, r) {
      (this.factory = t),
        (this.resolving = !1),
        (this.canSeeViewProviders = n),
        (this.injectImpl = r);
    }
  };
function Ih(e) {
  return e instanceof Dt;
}
function Eh(e) {
  return (e.flags & 8) !== 0;
}
function Ch(e) {
  return (e.flags & 16) !== 0;
}
function jc(e) {
  return e !== zt;
}
function xr(e) {
  return e & 32767;
}
function bh(e) {
  return e >> 16;
}
function Sr(e, t) {
  let n = bh(e),
    r = t;
  for (; n > 0; ) (r = r[Xt]), n--;
  return r;
}
var Di = !0;
function Tr(e) {
  let t = Di;
  return (Di = e), t;
}
var _h = 256,
  Vc = _h - 1,
  Bc = 5,
  Mh = 0,
  Ne = {};
function xh(e, t, n) {
  let r;
  typeof n == "string"
    ? (r = n.charCodeAt(0) || 0)
    : n.hasOwnProperty(fn) && (r = n[fn]),
    r == null && (r = n[fn] = Mh++);
  let o = r & Vc,
    i = 1 << o;
  t.data[e + (o >> Bc)] |= i;
}
function Nr(e, t) {
  let n = $c(e, t);
  if (n !== -1) return n;
  let r = t[w];
  r.firstCreatePass &&
    ((e.injectorIndex = t.length),
    Qo(r.data, e),
    Qo(t, null),
    Qo(r.blueprint, null));
  let o = Ls(e, t),
    i = e.injectorIndex;
  if (jc(o)) {
    let s = xr(o),
      a = Sr(o, t),
      u = a[w].data;
    for (let c = 0; c < 8; c++) t[i + c] = a[s + c] | u[s + c];
  }
  return (t[i + 8] = o), i;
}
function Qo(e, t) {
  e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
}
function $c(e, t) {
  return e.injectorIndex === -1 ||
    (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
    t[e.injectorIndex + 8] === null
    ? -1
    : e.injectorIndex;
}
function Ls(e, t) {
  if (e.parent && e.parent.injectorIndex !== -1) return e.parent.injectorIndex;
  let n = 0,
    r = null,
    o = t;
  for (; o !== null; ) {
    if (((r = Wc(o)), r === null)) return zt;
    if ((n++, (o = o[Xt]), r.injectorIndex !== -1))
      return r.injectorIndex | (n << 16);
  }
  return zt;
}
function wi(e, t, n) {
  xh(e, t, n);
}
function Hc(e, t, n) {
  if (n & S.Optional || e !== void 0) return e;
  ps(t, "NodeInjector");
}
function Uc(e, t, n, r) {
  if (
    (n & S.Optional && r === void 0 && (r = null), !(n & (S.Self | S.Host)))
  ) {
    let o = e[Zt],
      i = re(void 0);
    try {
      return o ? o.get(t, r, n & S.Optional) : Qu(t, r, n & S.Optional);
    } finally {
      re(i);
    }
  }
  return Hc(r, t, n);
}
function Gc(e, t, n, r = S.Default, o) {
  if (e !== null) {
    if (t[D] & 2048 && !(r & S.Self)) {
      let s = Ah(e, t, n, r, Ne);
      if (s !== Ne) return s;
    }
    let i = zc(e, t, n, r, Ne);
    if (i !== Ne) return i;
  }
  return Uc(t, n, r, o);
}
function zc(e, t, n, r, o) {
  let i = Th(n);
  if (typeof i == "function") {
    if (!Ac(t, e, r)) return r & S.Host ? Hc(o, n, r) : Uc(t, n, r, o);
    try {
      let s;
      if (((s = i(r)), s == null && !(r & S.Optional))) ps(n);
      else return s;
    } finally {
      Pc();
    }
  } else if (typeof i == "number") {
    let s = null,
      a = $c(e, t),
      u = zt,
      c = r & S.Host ? t[le][ae] : null;
    for (
      (a === -1 || r & S.SkipSelf) &&
      ((u = a === -1 ? Ls(e, t) : t[a + 8]),
      u === zt || !Du(r, !1)
        ? (a = -1)
        : ((s = t[w]), (a = xr(u)), (t = Sr(u, t))));
      a !== -1;

    ) {
      let l = t[w];
      if (vu(i, a, l.data)) {
        let d = Sh(a, t, n, s, r, c);
        if (d !== Ne) return d;
      }
      (u = t[a + 8]),
        u !== zt && Du(r, t[w].data[a + 8] === c) && vu(i, a, t)
          ? ((s = l), (a = xr(u)), (t = Sr(u, t)))
          : (a = -1);
    }
  }
  return o;
}
function Sh(e, t, n, r, o, i) {
  let s = t[w],
    a = s.data[e + 8],
    u = r == null ? Gr(a) && Di : r != s && (a.type & 3) !== 0,
    c = o & S.Host && i === a,
    l = yr(a, s, n, u, c);
  return l !== null ? wt(t, s, l, a) : Ne;
}
function yr(e, t, n, r, o) {
  let i = e.providerIndexes,
    s = t.data,
    a = i & 1048575,
    u = e.directiveStart,
    c = e.directiveEnd,
    l = i >> 20,
    d = r ? a : a + l,
    f = o ? a + l : c;
  for (let p = d; p < f; p++) {
    let h = s[p];
    if ((p < u && n === h) || (p >= u && h.type === n)) return p;
  }
  if (o) {
    let p = s[u];
    if (p && Je(p) && p.type === n) return u;
  }
  return null;
}
function wt(e, t, n, r) {
  let o = e[n],
    i = t.data;
  if (Ih(o)) {
    let s = o;
    s.resolving && Qf(Yf(i[n]));
    let a = Tr(s.canSeeViewProviders);
    s.resolving = !0;
    let u,
      c = s.injectImpl ? re(s.injectImpl) : null,
      l = Ac(e, r, S.Default);
    try {
      (o = e[n] = s.factory(void 0, i, e, r)),
        t.firstCreatePass && n >= r.directiveStart && Dh(n, i[n], t);
    } finally {
      c !== null && re(c), Tr(a), (s.resolving = !1), Pc();
    }
  }
  return o;
}
function Th(e) {
  if (typeof e == "string") return e.charCodeAt(0) || 0;
  let t = e.hasOwnProperty(fn) ? e[fn] : void 0;
  return typeof t == "number" ? (t >= 0 ? t & Vc : Nh) : t;
}
function vu(e, t, n) {
  let r = 1 << e;
  return !!(n[t + (e >> Bc)] & r);
}
function Du(e, t) {
  return !(e & S.Self) && !(e & S.Host && t);
}
var pt = class {
  constructor(t, n) {
    (this._tNode = t), (this._lView = n);
  }
  get(t, n, r) {
    return Gc(this._tNode, this._lView, t, Hr(r), n);
  }
};
function Nh() {
  return new pt(ue(), b());
}
function YM(e) {
  return Sn(() => {
    let t = e.prototype.constructor,
      n = t[wr] || Ii(t),
      r = Object.prototype,
      o = Object.getPrototypeOf(e.prototype).constructor;
    for (; o && o !== r; ) {
      let i = o[wr] || Ii(o);
      if (i && i !== n) return i;
      o = Object.getPrototypeOf(o);
    }
    return (i) => new i();
  });
}
function Ii(e) {
  return Uu(e)
    ? () => {
        let t = Ii(J(e));
        return t && t();
      }
    : ht(e);
}
function Ah(e, t, n, r, o) {
  let i = e,
    s = t;
  for (; i !== null && s !== null && s[D] & 2048 && !(s[D] & 512); ) {
    let a = zc(i, s, n, r | S.Self, Ne);
    if (a !== Ne) return a;
    let u = i.parent;
    if (!u) {
      let c = s[hc];
      if (c) {
        let l = c.get(n, Ne, r);
        if (l !== Ne) return l;
      }
      (u = Wc(s)), (s = s[Xt]);
    }
    i = u;
  }
  return o;
}
function Wc(e) {
  let t = e[w],
    n = t.type;
  return n === 2 ? t.declTNode : n === 1 ? e[ae] : null;
}
function wu(e, t = null, n = null, r) {
  let o = qc(e, t, n, r);
  return o.resolveInjectorInitializers(), o;
}
function qc(e, t = null, n = null, r, o = new Set()) {
  let i = [n || oe, Ap(e)];
  return (
    (r = r || (typeof e == "object" ? void 0 : ie(e))),
    new mn(i, t || Is(), r || null, o)
  );
}
var zr = (() => {
  let t = class t {
    static create(r, o) {
      if (Array.isArray(r)) return wu({ name: "" }, o, r, "");
      {
        let i = r.name ?? "";
        return wu({ name: i }, r.parent, r.providers, i);
      }
    }
  };
  (t.THROW_IF_NOT_FOUND = pn),
    (t.NULL = new br()),
    (t.ɵprov = L({ token: t, providedIn: "any", factory: () => Z(Ku) })),
    (t.__NG_ELEMENT_ID__ = -1);
  let e = t;
  return e;
})();
var Oh = "ngOriginalError";
function Zo(e) {
  return e[Oh];
}
var It = class {
    constructor() {
      this._console = console;
    }
    handleError(t) {
      let n = this._findOriginalError(t);
      this._console.error("ERROR", t),
        n && this._console.error("ORIGINAL ERROR", n);
    }
    _findOriginalError(t) {
      let n = t && Zo(t);
      for (; n && Zo(n); ) n = Zo(n);
      return n || null;
    }
  },
  Yc = new R("", {
    providedIn: "root",
    factory: () => k(It).handleError.bind(void 0),
  }),
  js = (() => {
    let t = class t {};
    (t.__NG_ELEMENT_ID__ = Fh), (t.__NG_ENV_ID__ = (r) => r);
    let e = t;
    return e;
  })(),
  Ei = class extends js {
    constructor(t) {
      super(), (this._lView = t);
    }
    onDestroy(t) {
      return bc(this._lView, t), () => nh(this._lView, t);
    }
  };
function Fh() {
  return new Ei(b());
}
function Rh() {
  return tn(ue(), b());
}
function tn(e, t) {
  return new tt(de(e, t));
}
var tt = (() => {
  let t = class t {
    constructor(r) {
      this.nativeElement = r;
    }
  };
  t.__NG_ELEMENT_ID__ = Rh;
  let e = t;
  return e;
})();
function Ph(e) {
  return e instanceof tt ? e.nativeElement : e;
}
var Ci = class extends te {
  constructor(t = !1) {
    super(),
      (this.destroyRef = void 0),
      (this.__isAsync = t),
      pc() && (this.destroyRef = k(js, { optional: !0 }) ?? void 0);
  }
  emit(t) {
    let n = _(null);
    try {
      super.next(t);
    } finally {
      _(n);
    }
  }
  subscribe(t, n, r) {
    let o = t,
      i = n || (() => null),
      s = r;
    if (t && typeof t == "object") {
      let u = t;
      (o = u.next?.bind(u)), (i = u.error?.bind(u)), (s = u.complete?.bind(u));
    }
    this.__isAsync && ((i = Ko(i)), o && (o = Ko(o)), s && (s = Ko(s)));
    let a = super.subscribe({ next: o, error: i, complete: s });
    return t instanceof H && t.add(a), a;
  }
};
function Ko(e) {
  return (t) => {
    setTimeout(e, void 0, t);
  };
}
var dt = Ci;
function kh() {
  return this._results[Symbol.iterator]();
}
var bi = class e {
  get changes() {
    return (this._changes ??= new dt());
  }
  constructor(t = !1) {
    (this._emitDistinctChangesOnly = t),
      (this.dirty = !0),
      (this._onDirty = void 0),
      (this._results = []),
      (this._changesDetected = !1),
      (this._changes = void 0),
      (this.length = 0),
      (this.first = void 0),
      (this.last = void 0);
    let n = e.prototype;
    n[Symbol.iterator] || (n[Symbol.iterator] = kh);
  }
  get(t) {
    return this._results[t];
  }
  map(t) {
    return this._results.map(t);
  }
  filter(t) {
    return this._results.filter(t);
  }
  find(t) {
    return this._results.find(t);
  }
  reduce(t, n) {
    return this._results.reduce(t, n);
  }
  forEach(t) {
    this._results.forEach(t);
  }
  some(t) {
    return this._results.some(t);
  }
  toArray() {
    return this._results.slice();
  }
  toString() {
    return this._results.toString();
  }
  reset(t, n) {
    this.dirty = !1;
    let r = up(t);
    (this._changesDetected = !ap(this._results, r, n)) &&
      ((this._results = r),
      (this.length = r.length),
      (this.last = r[this.length - 1]),
      (this.first = r[0]));
  }
  notifyOnChanges() {
    this._changes !== void 0 &&
      (this._changesDetected || !this._emitDistinctChangesOnly) &&
      this._changes.emit(this);
  }
  onDirty(t) {
    this._onDirty = t;
  }
  setDirty() {
    (this.dirty = !0), this._onDirty?.();
  }
  destroy() {
    this._changes !== void 0 &&
      (this._changes.complete(), this._changes.unsubscribe());
  }
};
function Qc(e) {
  return (e.flags & 128) === 128;
}
var Zc = new Map(),
  Lh = 0;
function jh() {
  return Lh++;
}
function Vh(e) {
  Zc.set(e[Ur], e);
}
function Bh(e) {
  Zc.delete(e[Ur]);
}
var Iu = "__ngContext__";
function Et(e, t) {
  ft(t) ? ((e[Iu] = t[Ur]), Vh(t)) : (e[Iu] = t);
}
function Kc(e) {
  return Xc(e[vn]);
}
function Jc(e) {
  return Xc(e[we]);
}
function Xc(e) {
  for (; e !== null && !je(e); ) e = e[we];
  return e;
}
var _i;
function QM(e) {
  _i = e;
}
function $h() {
  if (_i !== void 0) return _i;
  if (typeof document < "u") return document;
  throw new T(210, !1);
}
var ZM = new R("", { providedIn: "root", factory: () => Hh }),
  Hh = "ng",
  Uh = new R(""),
  Gh = new R("", { providedIn: "platform", factory: () => "unknown" });
var KM = new R(""),
  JM = new R("", {
    providedIn: "root",
    factory: () =>
      $h().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") ||
      null,
  });
var zh = "h",
  Wh = "b";
var qh = () => null;
function Vs(e, t, n = !1) {
  return qh(e, t, n);
}
var el = !1,
  Yh = new R("", { providedIn: "root", factory: () => el });
var Ar = class {
  constructor(t) {
    this.changingThisBreaksApplicationSecurity = t;
  }
  toString() {
    return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Bu})`;
  }
};
function Wr(e) {
  return e instanceof Ar ? e.changingThisBreaksApplicationSecurity : e;
}
function Qh(e, t) {
  let n = Zh(e);
  if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL") return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${Bu})`);
  }
  return n === t;
}
function Zh(e) {
  return (e instanceof Ar && e.getTypeName()) || null;
}
var Kh = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function Jh(e) {
  return (e = String(e)), e.match(Kh) ? e : "unsafe:" + e;
}
var tl = (function (e) {
  return (
    (e[(e.NONE = 0)] = "NONE"),
    (e[(e.HTML = 1)] = "HTML"),
    (e[(e.STYLE = 2)] = "STYLE"),
    (e[(e.SCRIPT = 3)] = "SCRIPT"),
    (e[(e.URL = 4)] = "URL"),
    (e[(e.RESOURCE_URL = 5)] = "RESOURCE_URL"),
    e
  );
})(tl || {});
function XM(e) {
  let t = Xh();
  return t ? t.sanitize(tl.URL, e) || "" : Qh(e, "URL") ? Wr(e) : Jh(Wt(e));
}
function Xh() {
  let e = b();
  return e && e[Ee].sanitizer;
}
function nl(e) {
  return e instanceof Function ? e() : e;
}
var In = (function (e) {
    return (
      (e[(e.Important = 1)] = "Important"),
      (e[(e.DashCase = 2)] = "DashCase"),
      e
    );
  })(In || {}),
  eg;
function Bs(e, t) {
  return eg(e, t);
}
function Ut(e, t, n, r, o) {
  if (r != null) {
    let i,
      s = !1;
    je(r) ? (i = r) : ft(r) && ((s = !0), (r = r[Le]));
    let a = Ae(r);
    e === 0 && n !== null
      ? o == null
        ? al(t, n, a)
        : Or(t, n, a, o || null, !0)
      : e === 1 && n !== null
        ? Or(t, n, a, o || null, !0)
        : e === 2
          ? gg(t, a, s)
          : e === 3 && t.destroyNode(a),
      i != null && yg(t, e, i, n, o);
  }
}
function tg(e, t) {
  return e.createText(t);
}
function ng(e, t, n) {
  e.setValue(t, n);
}
function rl(e, t, n) {
  return e.createElement(t, n);
}
function rg(e, t) {
  ol(e, t), (t[Le] = null), (t[ae] = null);
}
function og(e, t, n, r, o, i) {
  (r[Le] = o), (r[ae] = t), Yr(e, r, n, 1, o, i);
}
function ol(e, t) {
  t[Ee].changeDetectionScheduler?.notify(1), Yr(e, t, t[V], 2, null, null);
}
function ig(e) {
  let t = e[vn];
  if (!t) return Jo(e[w], e);
  for (; t; ) {
    let n = null;
    if (ft(t)) n = t[vn];
    else {
      let r = t[Q];
      r && (n = r);
    }
    if (!n) {
      for (; t && !t[we] && t !== e; ) ft(t) && Jo(t[w], t), (t = t[W]);
      t === null && (t = e), ft(t) && Jo(t[w], t), (n = t && t[we]);
    }
    t = n;
  }
}
function sg(e, t, n, r) {
  let o = Q + r,
    i = n.length;
  r > 0 && (n[o - 1][we] = t),
    r < i - Q ? ((t[we] = n[o]), Zu(n, Q + r, t)) : (n.push(t), (t[we] = null)),
    (t[W] = n);
  let s = t[Nn];
  s !== null && n !== s && ag(s, t);
  let a = t[ke];
  a !== null && a.insertView(e), yi(t), (t[D] |= 128);
}
function ag(e, t) {
  let n = e[Kt],
    o = t[W][W][le];
  t[le] !== o && (e[D] |= Es.HasTransplantedViews),
    n === null ? (e[Kt] = [t]) : n.push(t);
}
function il(e, t) {
  let n = e[Kt],
    r = n.indexOf(t);
  n.splice(r, 1);
}
function En(e, t) {
  if (e.length <= Q) return;
  let n = Q + t,
    r = e[n];
  if (r) {
    let o = r[Nn];
    o !== null && o !== e && il(o, r), t > 0 && (e[n - 1][we] = r[we]);
    let i = Er(e, Q + t);
    rg(r[w], r);
    let s = i[ke];
    s !== null && s.detachView(i[w]),
      (r[W] = null),
      (r[we] = null),
      (r[D] &= -129);
  }
  return r;
}
function qr(e, t) {
  if (!(t[D] & 256)) {
    let n = t[V];
    n.destroyNode && Yr(e, t, n, 3, null, null), ig(t);
  }
}
function Jo(e, t) {
  if (t[D] & 256) return;
  let n = _(null);
  try {
    (t[D] &= -129),
      (t[D] |= 256),
      t[mt] && Eo(t[mt]),
      cg(e, t),
      ug(e, t),
      t[w].type === 1 && t[V].destroy();
    let r = t[Nn];
    if (r !== null && je(t[W])) {
      r !== t[W] && il(r, t);
      let o = t[ke];
      o !== null && o.detachView(e);
    }
    Bh(t);
  } finally {
    _(n);
  }
}
function ug(e, t) {
  let n = e.cleanup,
    r = t[yn];
  if (n !== null)
    for (let i = 0; i < n.length - 1; i += 2)
      if (typeof n[i] == "string") {
        let s = n[i + 3];
        s >= 0 ? r[s]() : r[-s].unsubscribe(), (i += 2);
      } else {
        let s = r[n[i + 1]];
        n[i].call(s);
      }
  r !== null && (t[yn] = null);
  let o = t[Qe];
  if (o !== null) {
    t[Qe] = null;
    for (let i = 0; i < o.length; i++) {
      let s = o[i];
      s();
    }
  }
}
function cg(e, t) {
  let n;
  if (e != null && (n = e.destroyHooks) != null)
    for (let r = 0; r < n.length; r += 2) {
      let o = t[n[r]];
      if (!(o instanceof Dt)) {
        let i = n[r + 1];
        if (Array.isArray(i))
          for (let s = 0; s < i.length; s += 2) {
            let a = o[i[s]],
              u = i[s + 1];
            Te(4, a, u);
            try {
              u.call(a);
            } finally {
              Te(5, a, u);
            }
          }
        else {
          Te(4, o, i);
          try {
            i.call(o);
          } finally {
            Te(5, o, i);
          }
        }
      }
    }
}
function sl(e, t, n) {
  return lg(e, t.parent, n);
}
function lg(e, t, n) {
  let r = t;
  for (; r !== null && r.type & 40; ) (t = r), (r = t.parent);
  if (r === null) return n[Le];
  {
    let { componentOffset: o } = r;
    if (o > -1) {
      let { encapsulation: i } = e.data[r.directiveStart + o];
      if (i === hn.None || i === hn.Emulated) return null;
    }
    return de(r, n);
  }
}
function Or(e, t, n, r, o) {
  e.insertBefore(t, n, r, o);
}
function al(e, t, n) {
  e.appendChild(t, n);
}
function Eu(e, t, n, r, o) {
  r !== null ? Or(e, t, n, r, o) : al(e, t, n);
}
function dg(e, t, n, r) {
  e.removeChild(t, n, r);
}
function $s(e, t) {
  return e.parentNode(t);
}
function fg(e, t) {
  return e.nextSibling(t);
}
function ul(e, t, n) {
  return hg(e, t, n);
}
function pg(e, t, n) {
  return e.type & 40 ? de(e, n) : null;
}
var hg = pg,
  Cu;
function Hs(e, t, n, r) {
  let o = sl(e, r, t),
    i = t[V],
    s = r.parent || t[ae],
    a = ul(s, r, t);
  if (o != null)
    if (Array.isArray(n))
      for (let u = 0; u < n.length; u++) Eu(i, o, n[u], a, !1);
    else Eu(i, o, n, a, !1);
  Cu !== void 0 && Cu(i, r, t, n, o);
}
function vr(e, t) {
  if (t !== null) {
    let n = t.type;
    if (n & 3) return de(t, e);
    if (n & 4) return Mi(-1, e[t.index]);
    if (n & 8) {
      let r = t.child;
      if (r !== null) return vr(e, r);
      {
        let o = e[t.index];
        return je(o) ? Mi(-1, o) : Ae(o);
      }
    } else {
      if (n & 32) return Bs(t, e)() || Ae(e[t.index]);
      {
        let r = cl(e, t);
        if (r !== null) {
          if (Array.isArray(r)) return r[0];
          let o = wn(e[le]);
          return vr(o, r);
        } else return vr(e, t.next);
      }
    }
  }
  return null;
}
function cl(e, t) {
  if (t !== null) {
    let r = e[le][ae],
      o = t.projection;
    return r.projection[o];
  }
  return null;
}
function Mi(e, t) {
  let n = Q + e + 1;
  if (n < t.length) {
    let r = t[n],
      o = r[w].firstChild;
    if (o !== null) return vr(r, o);
  }
  return t[yt];
}
function gg(e, t, n) {
  let r = $s(e, t);
  r && dg(e, r, t, n);
}
function Us(e, t, n, r, o, i, s) {
  for (; n != null; ) {
    let a = r[n.index],
      u = n.type;
    if (
      (s && t === 0 && (a && Et(Ae(a), r), (n.flags |= 2)),
      (n.flags & 32) !== 32)
    )
      if (u & 8) Us(e, t, n.child, r, o, i, !1), Ut(t, e, o, a, i);
      else if (u & 32) {
        let c = Bs(n, r),
          l;
        for (; (l = c()); ) Ut(t, e, o, l, i);
        Ut(t, e, o, a, i);
      } else u & 16 ? ll(e, t, r, n, o, i) : Ut(t, e, o, a, i);
    n = s ? n.projectionNext : n.next;
  }
}
function Yr(e, t, n, r, o, i) {
  Us(n, r, e.firstChild, t, o, i, !1);
}
function mg(e, t, n) {
  let r = t[V],
    o = sl(e, n, t),
    i = n.parent || t[ae],
    s = ul(i, n, t);
  ll(r, 0, t, n, o, s);
}
function ll(e, t, n, r, o, i) {
  let s = n[le],
    u = s[ae].projection[r.projection];
  if (Array.isArray(u))
    for (let c = 0; c < u.length; c++) {
      let l = u[c];
      Ut(t, e, o, l, i);
    }
  else {
    let c = u,
      l = s[W];
    Qc(r) && (c.flags |= 128), Us(e, t, c, l, o, i, !0);
  }
}
function yg(e, t, n, r, o) {
  let i = n[yt],
    s = Ae(n);
  i !== s && Ut(t, e, r, i, o);
  for (let a = Q; a < n.length; a++) {
    let u = n[a];
    Yr(u[w], u, e, t, r, i);
  }
}
function vg(e, t, n, r, o) {
  if (t) o ? e.addClass(n, r) : e.removeClass(n, r);
  else {
    let i = r.indexOf("-") === -1 ? void 0 : In.DashCase;
    o == null
      ? e.removeStyle(n, r, i)
      : (typeof o == "string" &&
          o.endsWith("!important") &&
          ((o = o.slice(0, -10)), (i |= In.Important)),
        e.setStyle(n, r, o, i));
  }
}
function Dg(e, t, n) {
  e.setAttribute(t, "style", n);
}
function dl(e, t, n) {
  n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n);
}
function fl(e, t, n) {
  let { mergedAttrs: r, classes: o, styles: i } = n;
  r !== null && fi(e, t, r),
    o !== null && dl(e, t, o),
    i !== null && Dg(e, t, i);
}
var be = {};
function ex(e = 1) {
  pl(G(), b(), Ve() + e, !1);
}
function pl(e, t, n, r) {
  if (!r)
    if ((t[D] & 3) === 3) {
      let i = e.preOrderCheckHooks;
      i !== null && gr(t, i, n);
    } else {
      let i = e.preOrderHooks;
      i !== null && mr(t, i, 0, n);
    }
  vt(n);
}
function se(e, t = S.Default) {
  let n = b();
  if (n === null) return Z(e, t);
  let r = ue();
  return Gc(r, n, J(e), t);
}
function tx() {
  let e = "invalid";
  throw new Error(e);
}
function hl(e, t, n, r, o, i) {
  let s = _(null);
  try {
    let a = null;
    o & Ze.SignalBased && (a = t[r][Me]),
      a !== null && a.transformFn !== void 0 && (i = a.transformFn(i)),
      o & Ze.HasDecoratorInputTransform &&
        (i = e.inputTransforms[r].call(t, i)),
      e.setInput !== null ? e.setInput(t, a, i, n, r) : yc(t, a, r, i);
  } finally {
    _(s);
  }
}
function wg(e, t) {
  let n = e.hostBindingOpCodes;
  if (n !== null)
    try {
      for (let r = 0; r < n.length; r++) {
        let o = n[r];
        if (o < 0) vt(~o);
        else {
          let i = o,
            s = n[++r],
            a = n[++r];
          ph(s, i);
          let u = t[i];
          a(2, u);
        }
      }
    } finally {
      vt(-1);
    }
}
function Qr(e, t, n, r, o, i, s, a, u, c, l) {
  let d = t.blueprint.slice();
  return (
    (d[Le] = o),
    (d[D] = r | 4 | 128 | 8 | 64),
    (c !== null || (e && e[D] & 2048)) && (d[D] |= 2048),
    Cc(d),
    (d[W] = d[Xt] = e),
    (d[Y] = n),
    (d[Ee] = s || (e && e[Ee])),
    (d[V] = a || (e && e[V])),
    (d[Zt] = u || (e && e[Zt]) || null),
    (d[ae] = i),
    (d[Ur] = jh()),
    (d[Qt] = l),
    (d[hc] = c),
    (d[le] = t.type == 2 ? e[le] : d),
    d
  );
}
function On(e, t, n, r, o) {
  let i = e.data[t];
  if (i === null) (i = Ig(e, t, n, r, o)), fh() && (i.flags |= 32);
  else if (i.type & 64) {
    (i.type = n), (i.value = r), (i.attrs = o);
    let s = uh();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
  }
  return An(i, !0), i;
}
function Ig(e, t, n, r, o) {
  let i = xc(),
    s = Sc(),
    a = s ? i : i && i.parent,
    u = (e.data[t] = xg(e, a, n, t, r, o));
  return (
    e.firstChild === null && (e.firstChild = u),
    i !== null &&
      (s
        ? i.child == null && u.parent !== null && (i.child = u)
        : i.next === null && ((i.next = u), (u.prev = i))),
    u
  );
}
function gl(e, t, n, r) {
  if (n === 0) return -1;
  let o = t.length;
  for (let i = 0; i < n; i++) t.push(r), e.blueprint.push(r), e.data.push(null);
  return o;
}
function ml(e, t, n, r, o) {
  let i = Ve(),
    s = r & 2;
  try {
    vt(-1), s && t.length > K && pl(e, t, K, !1), Te(s ? 2 : 0, o), n(r, o);
  } finally {
    vt(i), Te(s ? 3 : 1, o);
  }
}
function yl(e, t, n) {
  if (mc(t)) {
    let r = _(null);
    try {
      let o = t.directiveStart,
        i = t.directiveEnd;
      for (let s = o; s < i; s++) {
        let a = e.data[s];
        if (a.contentQueries) {
          let u = n[s];
          a.contentQueries(1, u, s);
        }
      }
    } finally {
      _(r);
    }
  }
}
function vl(e, t, n) {
  _c() && (Fg(e, t, n, de(n, t)), (n.flags & 64) === 64 && bl(e, t, n));
}
function Dl(e, t, n = de) {
  let r = t.localNames;
  if (r !== null) {
    let o = t.index + 1;
    for (let i = 0; i < r.length; i += 2) {
      let s = r[i + 1],
        a = s === -1 ? n(t, e) : e[s];
      e[o++] = a;
    }
  }
}
function wl(e) {
  let t = e.tView;
  return t === null || t.incompleteFirstPass
    ? (e.tView = Gs(
        1,
        null,
        e.template,
        e.decls,
        e.vars,
        e.directiveDefs,
        e.pipeDefs,
        e.viewQuery,
        e.schemas,
        e.consts,
        e.id,
      ))
    : t;
}
function Gs(e, t, n, r, o, i, s, a, u, c, l) {
  let d = K + r,
    f = d + o,
    p = Eg(d, f),
    h = typeof c == "function" ? c() : c;
  return (p[w] = {
    type: e,
    blueprint: p,
    template: n,
    queries: null,
    viewQuery: a,
    declTNode: t,
    data: p.slice().fill(null, d),
    bindingStartIndex: d,
    expandoStartIndex: f,
    hostBindingOpCodes: null,
    firstCreatePass: !0,
    firstUpdatePass: !0,
    staticViewQueries: !1,
    staticContentQueries: !1,
    preOrderHooks: null,
    preOrderCheckHooks: null,
    contentHooks: null,
    contentCheckHooks: null,
    viewHooks: null,
    viewCheckHooks: null,
    destroyHooks: null,
    cleanup: null,
    contentQueries: null,
    components: null,
    directiveRegistry: typeof i == "function" ? i() : i,
    pipeRegistry: typeof s == "function" ? s() : s,
    firstChild: null,
    schemas: u,
    consts: h,
    incompleteFirstPass: !1,
    ssrId: l,
  });
}
function Eg(e, t) {
  let n = [];
  for (let r = 0; r < t; r++) n.push(r < e ? null : be);
  return n;
}
function Cg(e, t, n, r) {
  let i = r.get(Yh, el) || n === hn.ShadowDom,
    s = e.selectRootElement(t, i);
  return bg(s), s;
}
function bg(e) {
  _g(e);
}
var _g = () => null;
function Mg(e, t, n, r) {
  let o = xl(t);
  o.push(n), e.firstCreatePass && Sl(e).push(r, o.length - 1);
}
function xg(e, t, n, r, o, i) {
  let s = t ? t.injectorIndex : -1,
    a = 0;
  return (
    Mc() && (a |= 128),
    {
      type: n,
      index: r,
      insertBeforeIndex: null,
      injectorIndex: s,
      directiveStart: -1,
      directiveEnd: -1,
      directiveStylingLast: -1,
      componentOffset: -1,
      propertyBindings: null,
      flags: a,
      providerIndexes: 0,
      value: o,
      attrs: i,
      mergedAttrs: null,
      localNames: null,
      initialInputs: void 0,
      inputs: null,
      outputs: null,
      tView: null,
      next: null,
      prev: null,
      projectionNext: null,
      child: null,
      parent: t,
      projection: null,
      styles: null,
      stylesWithoutHost: null,
      residualStyles: void 0,
      classes: null,
      classesWithoutHost: null,
      residualClasses: void 0,
      classBindings: 0,
      styleBindings: 0,
    }
  );
}
function bu(e, t, n, r, o) {
  for (let i in t) {
    if (!t.hasOwnProperty(i)) continue;
    let s = t[i];
    if (s === void 0) continue;
    r ??= {};
    let a,
      u = Ze.None;
    Array.isArray(s) ? ((a = s[0]), (u = s[1])) : (a = s);
    let c = i;
    if (o !== null) {
      if (!o.hasOwnProperty(i)) continue;
      c = o[i];
    }
    e === 0 ? _u(r, n, c, a, u) : _u(r, n, c, a);
  }
  return r;
}
function _u(e, t, n, r, o) {
  let i;
  e.hasOwnProperty(n) ? (i = e[n]).push(t, r) : (i = e[n] = [t, r]),
    o !== void 0 && i.push(o);
}
function Sg(e, t, n) {
  let r = t.directiveStart,
    o = t.directiveEnd,
    i = e.data,
    s = t.attrs,
    a = [],
    u = null,
    c = null;
  for (let l = r; l < o; l++) {
    let d = i[l],
      f = n ? n.get(d) : null,
      p = f ? f.inputs : null,
      h = f ? f.outputs : null;
    (u = bu(0, d.inputs, l, u, p)), (c = bu(1, d.outputs, l, c, h));
    let g = u !== null && s !== null && !ys(t) ? Gg(u, l, s) : null;
    a.push(g);
  }
  u !== null &&
    (u.hasOwnProperty("class") && (t.flags |= 8),
    u.hasOwnProperty("style") && (t.flags |= 16)),
    (t.initialInputs = a),
    (t.inputs = u),
    (t.outputs = c);
}
function Tg(e) {
  return e === "class"
    ? "className"
    : e === "for"
      ? "htmlFor"
      : e === "formaction"
        ? "formAction"
        : e === "innerHtml"
          ? "innerHTML"
          : e === "readonly"
            ? "readOnly"
            : e === "tabindex"
              ? "tabIndex"
              : e;
}
function Il(e, t, n, r, o, i, s, a) {
  let u = de(t, n),
    c = t.inputs,
    l;
  !a && c != null && (l = c[r])
    ? (zs(e, n, l, r, o), Gr(t) && Ng(n, t.index))
    : t.type & 3
      ? ((r = Tg(r)),
        (o = s != null ? s(o, t.value || "", r) : o),
        i.setProperty(u, r, o))
      : t.type & 12;
}
function Ng(e, t) {
  let n = et(t, e);
  n[D] & 16 || (n[D] |= 64);
}
function El(e, t, n, r) {
  if (_c()) {
    let o = r === null ? null : { "": -1 },
      i = Pg(e, n),
      s,
      a;
    i === null ? (s = a = null) : ([s, a] = i),
      s !== null && Cl(e, t, n, s, o, a),
      o && kg(n, r, o);
  }
  n.mergedAttrs = gn(n.mergedAttrs, n.attrs);
}
function Cl(e, t, n, r, o, i) {
  for (let c = 0; c < r.length; c++) wi(Nr(n, t), e, r[c].type);
  jg(n, e.data.length, r.length);
  for (let c = 0; c < r.length; c++) {
    let l = r[c];
    l.providersResolver && l.providersResolver(l);
  }
  let s = !1,
    a = !1,
    u = gl(e, t, r.length, null);
  for (let c = 0; c < r.length; c++) {
    let l = r[c];
    (n.mergedAttrs = gn(n.mergedAttrs, l.hostAttrs)),
      Vg(e, n, t, u, l),
      Lg(u, l, o),
      l.contentQueries !== null && (n.flags |= 4),
      (l.hostBindings !== null || l.hostAttrs !== null || l.hostVars !== 0) &&
        (n.flags |= 64);
    let d = l.type.prototype;
    !s &&
      (d.ngOnChanges || d.ngOnInit || d.ngDoCheck) &&
      ((e.preOrderHooks ??= []).push(n.index), (s = !0)),
      !a &&
        (d.ngOnChanges || d.ngDoCheck) &&
        ((e.preOrderCheckHooks ??= []).push(n.index), (a = !0)),
      u++;
  }
  Sg(e, n, i);
}
function Ag(e, t, n, r, o) {
  let i = o.hostBindings;
  if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    Og(s) != a && s.push(a), s.push(n, r, i);
  }
}
function Og(e) {
  let t = e.length;
  for (; t > 0; ) {
    let n = e[--t];
    if (typeof n == "number" && n < 0) return n;
  }
  return 0;
}
function Fg(e, t, n, r) {
  let o = n.directiveStart,
    i = n.directiveEnd;
  Gr(n) && Bg(t, n, e.data[o + n.componentOffset]),
    e.firstCreatePass || Nr(n, t),
    Et(r, t);
  let s = n.initialInputs;
  for (let a = o; a < i; a++) {
    let u = e.data[a],
      c = wt(t, e, a, n);
    if ((Et(c, t), s !== null && Ug(t, a - o, c, u, n, s), Je(u))) {
      let l = et(n.index, t);
      l[Y] = wt(t, e, a, n);
    }
  }
}
function bl(e, t, n) {
  let r = n.directiveStart,
    o = n.directiveEnd,
    i = n.index,
    s = hh();
  try {
    vt(i);
    for (let a = r; a < o; a++) {
      let u = e.data[a],
        c = t[a];
      vi(a),
        (u.hostBindings !== null || u.hostVars !== 0 || u.hostAttrs !== null) &&
          Rg(u, c);
    }
  } finally {
    vt(-1), vi(s);
  }
}
function Rg(e, t) {
  e.hostBindings !== null && e.hostBindings(1, t);
}
function Pg(e, t) {
  let n = e.directiveRegistry,
    r = null,
    o = null;
  if (n)
    for (let i = 0; i < n.length; i++) {
      let s = n[i];
      if (tc(t, s.selectors, !1))
        if ((r || (r = []), Je(s)))
          if (s.findHostDirectiveDefs !== null) {
            let a = [];
            (o = o || new Map()),
              s.findHostDirectiveDefs(s, a, o),
              r.unshift(...a, s);
            let u = a.length;
            xi(e, t, u);
          } else r.unshift(s), xi(e, t, 0);
        else
          (o = o || new Map()), s.findHostDirectiveDefs?.(s, r, o), r.push(s);
    }
  return r === null ? null : [r, o];
}
function xi(e, t, n) {
  (t.componentOffset = n), (e.components ??= []).push(t.index);
}
function kg(e, t, n) {
  if (t) {
    let r = (e.localNames = []);
    for (let o = 0; o < t.length; o += 2) {
      let i = n[t[o + 1]];
      if (i == null) throw new T(-301, !1);
      r.push(t[o], i);
    }
  }
}
function Lg(e, t, n) {
  if (n) {
    if (t.exportAs)
      for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
    Je(t) && (n[""] = e);
  }
}
function jg(e, t, n) {
  (e.flags |= 1),
    (e.directiveStart = t),
    (e.directiveEnd = t + n),
    (e.providerIndexes = t);
}
function Vg(e, t, n, r, o) {
  e.data[r] = o;
  let i = o.factory || (o.factory = ht(o.type, !0)),
    s = new Dt(i, Je(o), se);
  (e.blueprint[r] = s), (n[r] = s), Ag(e, t, r, gl(e, n, o.hostVars, be), o);
}
function Bg(e, t, n) {
  let r = de(t, e),
    o = wl(n),
    i = e[Ee].rendererFactory,
    s = 16;
  n.signals ? (s = 4096) : n.onPush && (s = 64);
  let a = Zr(
    e,
    Qr(e, o, null, s, r, t, null, i.createRenderer(r, n), null, null, null),
  );
  e[t.index] = a;
}
function $g(e, t, n, r, o, i) {
  let s = de(e, t);
  Hg(t[V], s, i, e.value, n, r, o);
}
function Hg(e, t, n, r, o, i, s) {
  if (i == null) e.removeAttribute(t, o, n);
  else {
    let a = s == null ? Wt(i) : s(i, r || "", o);
    e.setAttribute(t, o, a, n);
  }
}
function Ug(e, t, n, r, o, i) {
  let s = i[t];
  if (s !== null)
    for (let a = 0; a < s.length; ) {
      let u = s[a++],
        c = s[a++],
        l = s[a++],
        d = s[a++];
      hl(r, n, u, c, l, d);
    }
}
function Gg(e, t, n) {
  let r = null,
    o = 0;
  for (; o < n.length; ) {
    let i = n[o];
    if (i === 0) {
      o += 4;
      continue;
    } else if (i === 5) {
      o += 2;
      continue;
    }
    if (typeof i == "number") break;
    if (e.hasOwnProperty(i)) {
      r === null && (r = []);
      let s = e[i];
      for (let a = 0; a < s.length; a += 3)
        if (s[a] === t) {
          r.push(i, s[a + 1], s[a + 2], n[o + 1]);
          break;
        }
    }
    o += 2;
  }
  return r;
}
function _l(e, t, n, r) {
  return [e, !0, 0, t, null, r, null, n, null, null];
}
function Ml(e, t) {
  let n = e.contentQueries;
  if (n !== null) {
    let r = _(null);
    try {
      for (let o = 0; o < n.length; o += 2) {
        let i = n[o],
          s = n[o + 1];
        if (s !== -1) {
          let a = e.data[s];
          Ns(i), a.contentQueries(2, t[s], s);
        }
      }
    } finally {
      _(r);
    }
  }
}
function Zr(e, t) {
  return e[vn] ? (e[gu][we] = t) : (e[vn] = t), (e[gu] = t), t;
}
function Si(e, t, n) {
  Ns(0);
  let r = _(null);
  try {
    t(e, n);
  } finally {
    _(r);
  }
}
function xl(e) {
  return e[yn] || (e[yn] = []);
}
function Sl(e) {
  return e.cleanup || (e.cleanup = []);
}
function Tl(e, t) {
  let n = e[Zt],
    r = n ? n.get(It, null) : null;
  r && r.handleError(t);
}
function zs(e, t, n, r, o) {
  for (let i = 0; i < n.length; ) {
    let s = n[i++],
      a = n[i++],
      u = n[i++],
      c = t[s],
      l = e.data[s];
    hl(l, c, r, a, u, o);
  }
}
function Nl(e, t, n) {
  let r = Ec(t, e);
  ng(e[V], r, n);
}
function zg(e, t) {
  let n = et(t, e),
    r = n[w];
  Wg(r, n);
  let o = n[Le];
  o !== null && n[Qt] === null && (n[Qt] = Vs(o, n[Zt])), Ws(r, n, n[Y]);
}
function Wg(e, t) {
  for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n]);
}
function Ws(e, t, n) {
  As(t);
  try {
    let r = e.viewQuery;
    r !== null && Si(1, r, n);
    let o = e.template;
    o !== null && ml(e, t, o, 1, n),
      e.firstCreatePass && (e.firstCreatePass = !1),
      t[ke]?.finishViewCreation(e),
      e.staticContentQueries && Ml(e, t),
      e.staticViewQueries && Si(2, e.viewQuery, n);
    let i = e.components;
    i !== null && qg(t, i);
  } catch (r) {
    throw (
      (e.firstCreatePass &&
        ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
      r)
    );
  } finally {
    (t[D] &= -5), Os();
  }
}
function qg(e, t) {
  for (let n = 0; n < t.length; n++) zg(e, t[n]);
}
function Kr(e, t, n, r) {
  let o = _(null);
  try {
    let i = t.tView,
      a = e[D] & 4096 ? 4096 : 16,
      u = Qr(
        e,
        i,
        n,
        a,
        null,
        t,
        null,
        null,
        r?.injector ?? null,
        r?.embeddedViewInjector ?? null,
        r?.dehydratedView ?? null,
      ),
      c = e[t.index];
    u[Nn] = c;
    let l = e[ke];
    return l !== null && (u[ke] = l.createEmbeddedView(i)), Ws(i, u, n), u;
  } finally {
    _(o);
  }
}
function Al(e, t) {
  let n = Q + t;
  if (n < e.length) return e[n];
}
function Cn(e, t) {
  return !t || t.firstChild === null || Qc(e);
}
function Jr(e, t, n, r = !0) {
  let o = t[w];
  if ((sg(o, t, e, n), r)) {
    let s = Mi(n, e),
      a = t[V],
      u = $s(a, e[yt]);
    u !== null && og(o, e[ae], a, t, u, s);
  }
  let i = t[Qt];
  i !== null && i.firstChild !== null && (i.firstChild = null);
}
function Ol(e, t) {
  let n = En(e, t);
  return n !== void 0 && qr(n[w], n), n;
}
function Fr(e, t, n, r, o = !1) {
  for (; n !== null; ) {
    let i = t[n.index];
    i !== null && r.push(Ae(i)), je(i) && Yg(i, r);
    let s = n.type;
    if (s & 8) Fr(e, t, n.child, r);
    else if (s & 32) {
      let a = Bs(n, t),
        u;
      for (; (u = a()); ) r.push(u);
    } else if (s & 16) {
      let a = cl(t, n);
      if (Array.isArray(a)) r.push(...a);
      else {
        let u = wn(t[le]);
        Fr(u[w], u, a, r, !0);
      }
    }
    n = o ? n.projectionNext : n.next;
  }
  return r;
}
function Yg(e, t) {
  for (let n = Q; n < e.length; n++) {
    let r = e[n],
      o = r[w].firstChild;
    o !== null && Fr(r[w], r, o, t);
  }
  e[yt] !== e[Le] && t.push(e[yt]);
}
var Fl = [];
function Qg(e) {
  return e[mt] ?? Zg(e);
}
function Zg(e) {
  let t = Fl.pop() ?? Object.create(Jg);
  return (t.lView = e), t;
}
function Kg(e) {
  e.lView[mt] !== e && ((e.lView = null), Fl.push(e));
}
var Jg = Ge(Ue({}, on), {
    consumerIsAlwaysLive: !0,
    consumerMarkedDirty: (e) => {
      Dn(e.lView);
    },
    consumerOnSignalRead() {
      this.lView[mt] = this;
    },
  }),
  Rl = 100;
function Pl(e, t = !0, n = 0) {
  let r = e[Ee],
    o = r.rendererFactory,
    i = !1;
  i || o.begin?.();
  try {
    Xg(e, n);
  } catch (s) {
    throw (t && Tl(e, s), s);
  } finally {
    i || (o.end?.(), r.inlineEffectRunner?.flush());
  }
}
function Xg(e, t) {
  Ti(e, t);
  let n = 0;
  for (; xs(e); ) {
    if (n === Rl) throw new T(103, !1);
    n++, Ti(e, 1);
  }
}
function em(e, t, n, r) {
  let o = t[D];
  if ((o & 256) === 256) return;
  let i = !1;
  !i && t[Ee].inlineEffectRunner?.flush(), As(t);
  let s = null,
    a = null;
  !i && tm(e) && ((a = Qg(t)), (s = kn(a)));
  try {
    Cc(t), dh(e.bindingStartIndex), n !== null && ml(e, t, n, 2, r);
    let u = (o & 3) === 3;
    if (!i)
      if (u) {
        let d = e.preOrderCheckHooks;
        d !== null && gr(t, d, null);
      } else {
        let d = e.preOrderHooks;
        d !== null && mr(t, d, 0, null), Yo(t, 0);
      }
    if ((nm(t), kl(t, 0), e.contentQueries !== null && Ml(e, t), !i))
      if (u) {
        let d = e.contentCheckHooks;
        d !== null && gr(t, d);
      } else {
        let d = e.contentHooks;
        d !== null && mr(t, d, 1), Yo(t, 1);
      }
    wg(e, t);
    let c = e.components;
    c !== null && jl(t, c, 0);
    let l = e.viewQuery;
    if ((l !== null && Si(2, l, r), !i))
      if (u) {
        let d = e.viewCheckHooks;
        d !== null && gr(t, d);
      } else {
        let d = e.viewHooks;
        d !== null && mr(t, d, 2), Yo(t, 2);
      }
    if ((e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[hr])) {
      for (let d of t[hr]) d();
      t[hr] = null;
    }
    i || (t[D] &= -73);
  } catch (u) {
    throw (Dn(t), u);
  } finally {
    a !== null && (Ln(a, s), Kg(a)), Os();
  }
}
function tm(e) {
  return e.type !== 2;
}
function kl(e, t) {
  for (let n = Kc(e); n !== null; n = Jc(n))
    for (let r = Q; r < n.length; r++) {
      let o = n[r];
      Ll(o, t);
    }
}
function nm(e) {
  for (let t = Kc(e); t !== null; t = Jc(t)) {
    if (!(t[D] & Es.HasTransplantedViews)) continue;
    let n = t[Kt];
    for (let r = 0; r < n.length; r++) {
      let o = n[r],
        i = o[W];
      eh(o);
    }
  }
}
function rm(e, t, n) {
  let r = et(t, e);
  Ll(r, n);
}
function Ll(e, t) {
  Ms(e) && Ti(e, t);
}
function Ti(e, t) {
  let r = e[w],
    o = e[D],
    i = e[mt],
    s = !!(t === 0 && o & 16);
  if (
    ((s ||= !!(o & 64 && t === 0)),
    (s ||= !!(o & 1024)),
    (s ||= !!(i?.dirty && jn(i))),
    i && (i.dirty = !1),
    (e[D] &= -9217),
    s)
  )
    em(r, e, r.template, e[Y]);
  else if (o & 8192) {
    kl(e, 1);
    let a = r.components;
    a !== null && jl(e, a, 1);
  }
}
function jl(e, t, n) {
  for (let r = 0; r < t.length; r++) rm(e, t[r], n);
}
function qs(e) {
  for (e[Ee].changeDetectionScheduler?.notify(); e; ) {
    e[D] |= 64;
    let t = wn(e);
    if (Gp(e) && !t) return e;
    e = t;
  }
  return null;
}
var Ct = class {
    get rootNodes() {
      let t = this._lView,
        n = t[w];
      return Fr(n, t, n.firstChild, []);
    }
    constructor(t, n, r = !0) {
      (this._lView = t),
        (this._cdRefInjectingView = n),
        (this.notifyErrorHandler = r),
        (this._appRef = null),
        (this._attachedToViewContainer = !1);
    }
    get context() {
      return this._lView[Y];
    }
    set context(t) {
      this._lView[Y] = t;
    }
    get destroyed() {
      return (this._lView[D] & 256) === 256;
    }
    destroy() {
      if (this._appRef) this._appRef.detachView(this);
      else if (this._attachedToViewContainer) {
        let t = this._lView[W];
        if (je(t)) {
          let n = t[_r],
            r = n ? n.indexOf(this) : -1;
          r > -1 && (En(t, r), Er(n, r));
        }
        this._attachedToViewContainer = !1;
      }
      qr(this._lView[w], this._lView);
    }
    onDestroy(t) {
      bc(this._lView, t);
    }
    markForCheck() {
      qs(this._cdRefInjectingView || this._lView);
    }
    detach() {
      this._lView[D] &= -129;
    }
    reattach() {
      yi(this._lView), (this._lView[D] |= 128);
    }
    detectChanges() {
      (this._lView[D] |= 1024), Pl(this._lView, this.notifyErrorHandler);
    }
    checkNoChanges() {}
    attachToViewContainerRef() {
      if (this._appRef) throw new T(902, !1);
      this._attachedToViewContainer = !0;
    }
    detachFromAppRef() {
      (this._appRef = null), ol(this._lView[w], this._lView);
    }
    attachToAppRef(t) {
      if (this._attachedToViewContainer) throw new T(902, !1);
      (this._appRef = t), yi(this._lView);
    }
  },
  bn = (() => {
    let t = class t {};
    t.__NG_ELEMENT_ID__ = sm;
    let e = t;
    return e;
  })(),
  om = bn,
  im = class extends om {
    constructor(t, n, r) {
      super(),
        (this._declarationLView = t),
        (this._declarationTContainer = n),
        (this.elementRef = r);
    }
    get ssrId() {
      return this._declarationTContainer.tView?.ssrId || null;
    }
    createEmbeddedView(t, n) {
      return this.createEmbeddedViewImpl(t, n);
    }
    createEmbeddedViewImpl(t, n, r) {
      let o = Kr(this._declarationLView, this._declarationTContainer, t, {
        embeddedViewInjector: n,
        dehydratedView: r,
      });
      return new Ct(o);
    }
  };
function sm() {
  return Ys(ue(), b());
}
function Ys(e, t) {
  return e.type & 4 ? new im(t, e, tn(e, t)) : null;
}
var rx = new RegExp(`^(\\d+)*(${Wh}|${zh})*(.*)`);
var am = () => null;
function _n(e, t) {
  return am(e, t);
}
var Ni = class {},
  Ai = class {},
  Rr = class {};
function um(e) {
  let t = Error(`No component factory found for ${ie(e)}.`);
  return (t[cm] = e), t;
}
var cm = "ngComponent";
var Oi = class {
    resolveComponentFactory(t) {
      throw um(t);
    }
  },
  Xr = (() => {
    let t = class t {};
    t.NULL = new Oi();
    let e = t;
    return e;
  })(),
  Fi = class {},
  eo = (() => {
    let t = class t {
      constructor() {
        this.destroyNode = null;
      }
    };
    t.__NG_ELEMENT_ID__ = () => lm();
    let e = t;
    return e;
  })();
function lm() {
  let e = b(),
    t = ue(),
    n = et(t.index, e);
  return (ft(n) ? n : e)[V];
}
var dm = (() => {
    let t = class t {};
    t.ɵprov = L({ token: t, providedIn: "root", factory: () => null });
    let e = t;
    return e;
  })(),
  Xo = {};
var Mu = new Set();
function _t(e) {
  Mu.has(e) ||
    (Mu.add(e),
    performance?.mark?.("mark_feature_usage", { detail: { feature: e } }));
}
function xu(...e) {}
function fm() {
  let e = typeof Ye.requestAnimationFrame == "function",
    t = Ye[e ? "requestAnimationFrame" : "setTimeout"],
    n = Ye[e ? "cancelAnimationFrame" : "clearTimeout"];
  if (typeof Zone < "u" && t && n) {
    let r = t[Zone.__symbol__("OriginalDelegate")];
    r && (t = r);
    let o = n[Zone.__symbol__("OriginalDelegate")];
    o && (n = o);
  }
  return { nativeRequestAnimationFrame: t, nativeCancelAnimationFrame: n };
}
var Ie = class e {
    constructor({
      enableLongStackTrace: t = !1,
      shouldCoalesceEventChangeDetection: n = !1,
      shouldCoalesceRunChangeDetection: r = !1,
    }) {
      if (
        ((this.hasPendingMacrotasks = !1),
        (this.hasPendingMicrotasks = !1),
        (this.isStable = !0),
        (this.onUnstable = new dt(!1)),
        (this.onMicrotaskEmpty = new dt(!1)),
        (this.onStable = new dt(!1)),
        (this.onError = new dt(!1)),
        typeof Zone > "u")
      )
        throw new T(908, !1);
      Zone.assertZonePatched();
      let o = this;
      (o._nesting = 0),
        (o._outer = o._inner = Zone.current),
        Zone.TaskTrackingZoneSpec &&
          (o._inner = o._inner.fork(new Zone.TaskTrackingZoneSpec())),
        t &&
          Zone.longStackTraceZoneSpec &&
          (o._inner = o._inner.fork(Zone.longStackTraceZoneSpec)),
        (o.shouldCoalesceEventChangeDetection = !r && n),
        (o.shouldCoalesceRunChangeDetection = r),
        (o.lastRequestAnimationFrameId = -1),
        (o.nativeRequestAnimationFrame = fm().nativeRequestAnimationFrame),
        gm(o);
    }
    static isInAngularZone() {
      return typeof Zone < "u" && Zone.current.get("isAngularZone") === !0;
    }
    static assertInAngularZone() {
      if (!e.isInAngularZone()) throw new T(909, !1);
    }
    static assertNotInAngularZone() {
      if (e.isInAngularZone()) throw new T(909, !1);
    }
    run(t, n, r) {
      return this._inner.run(t, n, r);
    }
    runTask(t, n, r, o) {
      let i = this._inner,
        s = i.scheduleEventTask("NgZoneEvent: " + o, t, pm, xu, xu);
      try {
        return i.runTask(s, n, r);
      } finally {
        i.cancelTask(s);
      }
    }
    runGuarded(t, n, r) {
      return this._inner.runGuarded(t, n, r);
    }
    runOutsideAngular(t) {
      return this._outer.run(t);
    }
  },
  pm = {};
function Qs(e) {
  if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
      e._nesting++, e.onMicrotaskEmpty.emit(null);
    } finally {
      if ((e._nesting--, !e.hasPendingMicrotasks))
        try {
          e.runOutsideAngular(() => e.onStable.emit(null));
        } finally {
          e.isStable = !0;
        }
    }
}
function hm(e) {
  e.isCheckStableRunning ||
    e.lastRequestAnimationFrameId !== -1 ||
    ((e.lastRequestAnimationFrameId = e.nativeRequestAnimationFrame.call(
      Ye,
      () => {
        e.fakeTopEventTask ||
          (e.fakeTopEventTask = Zone.root.scheduleEventTask(
            "fakeTopEventTask",
            () => {
              (e.lastRequestAnimationFrameId = -1),
                Ri(e),
                (e.isCheckStableRunning = !0),
                Qs(e),
                (e.isCheckStableRunning = !1);
            },
            void 0,
            () => {},
            () => {},
          )),
          e.fakeTopEventTask.invoke();
      },
    )),
    Ri(e));
}
function gm(e) {
  let t = () => {
    hm(e);
  };
  e._inner = e._inner.fork({
    name: "angular",
    properties: { isAngularZone: !0 },
    onInvokeTask: (n, r, o, i, s, a) => {
      if (mm(a)) return n.invokeTask(o, i, s, a);
      try {
        return Su(e), n.invokeTask(o, i, s, a);
      } finally {
        ((e.shouldCoalesceEventChangeDetection && i.type === "eventTask") ||
          e.shouldCoalesceRunChangeDetection) &&
          t(),
          Tu(e);
      }
    },
    onInvoke: (n, r, o, i, s, a, u) => {
      try {
        return Su(e), n.invoke(o, i, s, a, u);
      } finally {
        e.shouldCoalesceRunChangeDetection && t(), Tu(e);
      }
    },
    onHasTask: (n, r, o, i) => {
      n.hasTask(o, i),
        r === o &&
          (i.change == "microTask"
            ? ((e._hasPendingMicrotasks = i.microTask), Ri(e), Qs(e))
            : i.change == "macroTask" &&
              (e.hasPendingMacrotasks = i.macroTask));
    },
    onHandleError: (n, r, o, i) => (
      n.handleError(o, i), e.runOutsideAngular(() => e.onError.emit(i)), !1
    ),
  });
}
function Ri(e) {
  e._hasPendingMicrotasks ||
  ((e.shouldCoalesceEventChangeDetection ||
    e.shouldCoalesceRunChangeDetection) &&
    e.lastRequestAnimationFrameId !== -1)
    ? (e.hasPendingMicrotasks = !0)
    : (e.hasPendingMicrotasks = !1);
}
function Su(e) {
  e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
}
function Tu(e) {
  e._nesting--, Qs(e);
}
function mm(e) {
  return !Array.isArray(e) || e.length !== 1
    ? !1
    : e[0].data?.__ignore_ng_zone__ === !0;
}
var Vl = (() => {
  let t = class t {
    constructor() {
      (this.handler = null), (this.internalCallbacks = []);
    }
    execute() {
      this.executeInternalCallbacks(), this.handler?.execute();
    }
    executeInternalCallbacks() {
      let r = [...this.internalCallbacks];
      this.internalCallbacks.length = 0;
      for (let o of r) o();
    }
    ngOnDestroy() {
      this.handler?.destroy(),
        (this.handler = null),
        (this.internalCallbacks.length = 0);
    }
  };
  t.ɵprov = L({ token: t, providedIn: "root", factory: () => new t() });
  let e = t;
  return e;
})();
function Pi(e, t, n) {
  let r = n ? e.styles : null,
    o = n ? e.classes : null,
    i = 0;
  if (t !== null)
    for (let s = 0; s < t.length; s++) {
      let a = t[s];
      if (typeof a == "number") i = a;
      else if (i == 1) o = ui(o, a);
      else if (i == 2) {
        let u = a,
          c = t[++s];
        r = ui(r, u + ": " + c + ";");
      }
    }
  n ? (e.styles = r) : (e.stylesWithoutHost = r),
    n ? (e.classes = o) : (e.classesWithoutHost = o);
}
var Pr = class extends Xr {
  constructor(t) {
    super(), (this.ngModule = t);
  }
  resolveComponentFactory(t) {
    let n = gt(t);
    return new Mn(n, this.ngModule);
  }
};
function Nu(e) {
  let t = [];
  for (let n in e) {
    if (!e.hasOwnProperty(n)) continue;
    let r = e[n];
    r !== void 0 &&
      t.push({ propName: Array.isArray(r) ? r[0] : r, templateName: n });
  }
  return t;
}
function ym(e) {
  let t = e.toLowerCase();
  return t === "svg" ? Yp : t === "math" ? Qp : null;
}
var ki = class {
    constructor(t, n) {
      (this.injector = t), (this.parentInjector = n);
    }
    get(t, n, r) {
      r = Hr(r);
      let o = this.injector.get(t, Xo, r);
      return o !== Xo || n === Xo ? o : this.parentInjector.get(t, n, r);
    }
  },
  Mn = class extends Rr {
    get inputs() {
      let t = this.componentDef,
        n = t.inputTransforms,
        r = Nu(t.inputs);
      if (n !== null)
        for (let o of r)
          n.hasOwnProperty(o.propName) && (o.transform = n[o.propName]);
      return r;
    }
    get outputs() {
      return Nu(this.componentDef.outputs);
    }
    constructor(t, n) {
      super(),
        (this.componentDef = t),
        (this.ngModule = n),
        (this.componentType = t.type),
        (this.selector = bp(t.selectors)),
        (this.ngContentSelectors = t.ngContentSelectors
          ? t.ngContentSelectors
          : []),
        (this.isBoundToModule = !!n);
    }
    create(t, n, r, o) {
      let i = _(null);
      try {
        o = o || this.ngModule;
        let s = o instanceof Ke ? o : o?.injector;
        s &&
          this.componentDef.getStandaloneInjector !== null &&
          (s = this.componentDef.getStandaloneInjector(s) || s);
        let a = s ? new ki(t, s) : t,
          u = a.get(Fi, null);
        if (u === null) throw new T(407, !1);
        let c = a.get(dm, null),
          l = a.get(Vl, null),
          d = a.get(Ni, null),
          f = {
            rendererFactory: u,
            sanitizer: c,
            inlineEffectRunner: null,
            afterRenderEventManager: l,
            changeDetectionScheduler: d,
          },
          p = u.createRenderer(null, this.componentDef),
          h = this.componentDef.selectors[0][0] || "div",
          g = r
            ? Cg(p, r, this.componentDef.encapsulation, a)
            : rl(p, h, ym(h)),
          I = 512;
        this.componentDef.signals
          ? (I |= 4096)
          : this.componentDef.onPush || (I |= 16);
        let x = null;
        g !== null && (x = Vs(g, a, !0));
        let $ = Gs(0, null, null, 1, 0, null, null, null, null, null, null),
          ee = Qr(null, $, null, I, null, null, f, p, a, null, x);
        As(ee);
        let Oe, Mt;
        try {
          let he = this.componentDef,
            xt,
            yo = null;
          he.findHostDirectiveDefs
            ? ((xt = []),
              (yo = new Map()),
              he.findHostDirectiveDefs(he, xt, yo),
              xt.push(he))
            : (xt = [he]);
          let xd = vm(ee, g),
            Sd = Dm(xd, g, he, xt, ee, f, p);
          (Mt = bs($, K)),
            g && Em(p, he, g, r),
            n !== void 0 && Cm(Mt, this.ngContentSelectors, n),
            (Oe = Im(Sd, he, xt, yo, ee, [bm])),
            Ws($, ee, null);
        } finally {
          Os();
        }
        return new Li(this.componentType, Oe, tn(Mt, ee), ee, Mt);
      } finally {
        _(i);
      }
    }
  },
  Li = class extends Ai {
    constructor(t, n, r, o, i) {
      super(),
        (this.location = r),
        (this._rootLView = o),
        (this._tNode = i),
        (this.previousInputValues = null),
        (this.instance = n),
        (this.hostView = this.changeDetectorRef = new Ct(o, void 0, !1)),
        (this.componentType = t);
    }
    setInput(t, n) {
      let r = this._tNode.inputs,
        o;
      if (r !== null && (o = r[t])) {
        if (
          ((this.previousInputValues ??= new Map()),
          this.previousInputValues.has(t) &&
            Object.is(this.previousInputValues.get(t), n))
        )
          return;
        let i = this._rootLView;
        zs(i[w], i, o, t, n), this.previousInputValues.set(t, n);
        let s = et(this._tNode.index, i);
        qs(s);
      }
    }
    get injector() {
      return new pt(this._tNode, this._rootLView);
    }
    destroy() {
      this.hostView.destroy();
    }
    onDestroy(t) {
      this.hostView.onDestroy(t);
    }
  };
function vm(e, t) {
  let n = e[w],
    r = K;
  return (e[r] = t), On(n, r, 2, "#host", null);
}
function Dm(e, t, n, r, o, i, s) {
  let a = o[w];
  wm(r, e, t, s);
  let u = null;
  t !== null && (u = Vs(t, o[Zt]));
  let c = i.rendererFactory.createRenderer(t, n),
    l = 16;
  n.signals ? (l = 4096) : n.onPush && (l = 64);
  let d = Qr(o, wl(n), null, l, o[e.index], e, i, c, null, null, u);
  return (
    a.firstCreatePass && xi(a, e, r.length - 1), Zr(o, d), (o[e.index] = d)
  );
}
function wm(e, t, n, r) {
  for (let o of e) t.mergedAttrs = gn(t.mergedAttrs, o.hostAttrs);
  t.mergedAttrs !== null &&
    (Pi(t, t.mergedAttrs, !0), n !== null && fl(r, n, t));
}
function Im(e, t, n, r, o, i) {
  let s = ue(),
    a = o[w],
    u = de(s, o);
  Cl(a, o, s, n, null, r);
  for (let l = 0; l < n.length; l++) {
    let d = s.directiveStart + l,
      f = wt(o, a, d, s);
    Et(f, o);
  }
  bl(a, o, s), u && Et(u, o);
  let c = wt(o, a, s.directiveStart + s.componentOffset, s);
  if (((e[Y] = o[Y] = c), i !== null)) for (let l of i) l(c, t);
  return yl(a, s, o), c;
}
function Em(e, t, n, r) {
  if (r) fi(e, n, ["ng-version", "17.3.2"]);
  else {
    let { attrs: o, classes: i } = _p(t.selectors[0]);
    o && fi(e, n, o), i && i.length > 0 && dl(e, n, i.join(" "));
  }
}
function Cm(e, t, n) {
  let r = (e.projection = []);
  for (let o = 0; o < t.length; o++) {
    let i = n[o];
    r.push(i != null ? Array.from(i) : null);
  }
}
function bm() {
  let e = ue();
  ks(b()[w], e);
}
var to = (() => {
  let t = class t {};
  t.__NG_ELEMENT_ID__ = _m;
  let e = t;
  return e;
})();
function _m() {
  let e = ue();
  return $l(e, b());
}
var Mm = to,
  Bl = class extends Mm {
    constructor(t, n, r) {
      super(),
        (this._lContainer = t),
        (this._hostTNode = n),
        (this._hostLView = r);
    }
    get element() {
      return tn(this._hostTNode, this._hostLView);
    }
    get injector() {
      return new pt(this._hostTNode, this._hostLView);
    }
    get parentInjector() {
      let t = Ls(this._hostTNode, this._hostLView);
      if (jc(t)) {
        let n = Sr(t, this._hostLView),
          r = xr(t),
          o = n[w].data[r + 8];
        return new pt(o, n);
      } else return new pt(null, this._hostLView);
    }
    clear() {
      for (; this.length > 0; ) this.remove(this.length - 1);
    }
    get(t) {
      let n = Au(this._lContainer);
      return (n !== null && n[t]) || null;
    }
    get length() {
      return this._lContainer.length - Q;
    }
    createEmbeddedView(t, n, r) {
      let o, i;
      typeof r == "number"
        ? (o = r)
        : r != null && ((o = r.index), (i = r.injector));
      let s = _n(this._lContainer, t.ssrId),
        a = t.createEmbeddedViewImpl(n || {}, i, s);
      return this.insertImpl(a, o, Cn(this._hostTNode, s)), a;
    }
    createComponent(t, n, r, o, i) {
      let s = t && !Up(t),
        a;
      if (s) a = n;
      else {
        let h = n || {};
        (a = h.index),
          (r = h.injector),
          (o = h.projectableNodes),
          (i = h.environmentInjector || h.ngModuleRef);
      }
      let u = s ? t : new Mn(gt(t)),
        c = r || this.parentInjector;
      if (!i && u.ngModule == null) {
        let g = (s ? c : this.parentInjector).get(Ke, null);
        g && (i = g);
      }
      let l = gt(u.componentType ?? {}),
        d = _n(this._lContainer, l?.id ?? null),
        f = d?.firstChild ?? null,
        p = u.create(c, o, f, i);
      return this.insertImpl(p.hostView, a, Cn(this._hostTNode, d)), p;
    }
    insert(t, n) {
      return this.insertImpl(t, n, !0);
    }
    insertImpl(t, n, r) {
      let o = t._lView;
      if (Xp(o)) {
        let a = this.indexOf(t);
        if (a !== -1) this.detach(a);
        else {
          let u = o[W],
            c = new Bl(u, u[ae], u[W]);
          c.detach(c.indexOf(t));
        }
      }
      let i = this._adjustIndex(n),
        s = this._lContainer;
      return Jr(s, o, i, r), t.attachToViewContainerRef(), Zu(ei(s), i, t), t;
    }
    move(t, n) {
      return this.insert(t, n);
    }
    indexOf(t) {
      let n = Au(this._lContainer);
      return n !== null ? n.indexOf(t) : -1;
    }
    remove(t) {
      let n = this._adjustIndex(t, -1),
        r = En(this._lContainer, n);
      r && (Er(ei(this._lContainer), n), qr(r[w], r));
    }
    detach(t) {
      let n = this._adjustIndex(t, -1),
        r = En(this._lContainer, n);
      return r && Er(ei(this._lContainer), n) != null ? new Ct(r) : null;
    }
    _adjustIndex(t, n = 0) {
      return t ?? this.length + n;
    }
  };
function Au(e) {
  return e[_r];
}
function ei(e) {
  return e[_r] || (e[_r] = []);
}
function $l(e, t) {
  let n,
    r = t[e.index];
  return (
    je(r) ? (n = r) : ((n = _l(r, t, null, e)), (t[e.index] = n), Zr(t, n)),
    Sm(n, t, e, r),
    new Bl(n, e, t)
  );
}
function xm(e, t) {
  let n = e[V],
    r = n.createComment(""),
    o = de(t, e),
    i = $s(n, o);
  return Or(n, i, r, fg(n, o), !1), r;
}
var Sm = Am,
  Tm = () => !1;
function Nm(e, t, n) {
  return Tm(e, t, n);
}
function Am(e, t, n, r) {
  if (e[yt]) return;
  let o;
  n.type & 8 ? (o = Ae(r)) : (o = xm(t, n)), (e[yt] = o);
}
var ji = class e {
    constructor(t) {
      (this.queryList = t), (this.matches = null);
    }
    clone() {
      return new e(this.queryList);
    }
    setDirty() {
      this.queryList.setDirty();
    }
  },
  Vi = class e {
    constructor(t = []) {
      this.queries = t;
    }
    createEmbeddedView(t) {
      let n = t.queries;
      if (n !== null) {
        let r = t.contentQueries !== null ? t.contentQueries[0] : n.length,
          o = [];
        for (let i = 0; i < r; i++) {
          let s = n.getByIndex(i),
            a = this.queries[s.indexInDeclarationView];
          o.push(a.clone());
        }
        return new e(o);
      }
      return null;
    }
    insertView(t) {
      this.dirtyQueriesWithMatches(t);
    }
    detachView(t) {
      this.dirtyQueriesWithMatches(t);
    }
    finishViewCreation(t) {
      this.dirtyQueriesWithMatches(t);
    }
    dirtyQueriesWithMatches(t) {
      for (let n = 0; n < this.queries.length; n++)
        Zs(t, n).matches !== null && this.queries[n].setDirty();
    }
  },
  kr = class {
    constructor(t, n, r = null) {
      (this.flags = n),
        (this.read = r),
        typeof t == "string" ? (this.predicate = Vm(t)) : (this.predicate = t);
    }
  },
  Bi = class e {
    constructor(t = []) {
      this.queries = t;
    }
    elementStart(t, n) {
      for (let r = 0; r < this.queries.length; r++)
        this.queries[r].elementStart(t, n);
    }
    elementEnd(t) {
      for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t);
    }
    embeddedTView(t) {
      let n = null;
      for (let r = 0; r < this.length; r++) {
        let o = n !== null ? n.length : 0,
          i = this.getByIndex(r).embeddedTView(t, o);
        i &&
          ((i.indexInDeclarationView = r), n !== null ? n.push(i) : (n = [i]));
      }
      return n !== null ? new e(n) : null;
    }
    template(t, n) {
      for (let r = 0; r < this.queries.length; r++)
        this.queries[r].template(t, n);
    }
    getByIndex(t) {
      return this.queries[t];
    }
    get length() {
      return this.queries.length;
    }
    track(t) {
      this.queries.push(t);
    }
  },
  $i = class e {
    constructor(t, n = -1) {
      (this.metadata = t),
        (this.matches = null),
        (this.indexInDeclarationView = -1),
        (this.crossesNgTemplate = !1),
        (this._appliesToNextNode = !0),
        (this._declarationNodeIndex = n);
    }
    elementStart(t, n) {
      this.isApplyingToNode(n) && this.matchTNode(t, n);
    }
    elementEnd(t) {
      this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1);
    }
    template(t, n) {
      this.elementStart(t, n);
    }
    embeddedTView(t, n) {
      return this.isApplyingToNode(t)
        ? ((this.crossesNgTemplate = !0),
          this.addMatch(-t.index, n),
          new e(this.metadata))
        : null;
    }
    isApplyingToNode(t) {
      if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex,
          r = t.parent;
        for (; r !== null && r.type & 8 && r.index !== n; ) r = r.parent;
        return n === (r !== null ? r.index : -1);
      }
      return this._appliesToNextNode;
    }
    matchTNode(t, n) {
      let r = this.metadata.predicate;
      if (Array.isArray(r))
        for (let o = 0; o < r.length; o++) {
          let i = r[o];
          this.matchTNodeWithReadOption(t, n, Om(n, i)),
            this.matchTNodeWithReadOption(t, n, yr(n, t, i, !1, !1));
        }
      else
        r === bn
          ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1)
          : this.matchTNodeWithReadOption(t, n, yr(n, t, r, !1, !1));
    }
    matchTNodeWithReadOption(t, n, r) {
      if (r !== null) {
        let o = this.metadata.read;
        if (o !== null)
          if (o === tt || o === to || (o === bn && n.type & 4))
            this.addMatch(n.index, -2);
          else {
            let i = yr(n, t, o, !1, !1);
            i !== null && this.addMatch(n.index, i);
          }
        else this.addMatch(n.index, r);
      }
    }
    addMatch(t, n) {
      this.matches === null ? (this.matches = [t, n]) : this.matches.push(t, n);
    }
  };
function Om(e, t) {
  let n = e.localNames;
  if (n !== null) {
    for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
  }
  return null;
}
function Fm(e, t) {
  return e.type & 11 ? tn(e, t) : e.type & 4 ? Ys(e, t) : null;
}
function Rm(e, t, n, r) {
  return n === -1 ? Fm(t, e) : n === -2 ? Pm(e, t, r) : wt(e, e[w], n, t);
}
function Pm(e, t, n) {
  if (n === tt) return tn(t, e);
  if (n === bn) return Ys(t, e);
  if (n === to) return $l(t, e);
}
function Hl(e, t, n, r) {
  let o = t[ke].queries[r];
  if (o.matches === null) {
    let i = e.data,
      s = n.matches,
      a = [];
    for (let u = 0; s !== null && u < s.length; u += 2) {
      let c = s[u];
      if (c < 0) a.push(null);
      else {
        let l = i[c];
        a.push(Rm(t, l, s[u + 1], n.metadata.read));
      }
    }
    o.matches = a;
  }
  return o.matches;
}
function Hi(e, t, n, r) {
  let o = e.queries.getByIndex(n),
    i = o.matches;
  if (i !== null) {
    let s = Hl(e, t, o, n);
    for (let a = 0; a < i.length; a += 2) {
      let u = i[a];
      if (u > 0) r.push(s[a / 2]);
      else {
        let c = i[a + 1],
          l = t[-u];
        for (let d = Q; d < l.length; d++) {
          let f = l[d];
          f[Nn] === f[W] && Hi(f[w], f, c, r);
        }
        if (l[Kt] !== null) {
          let d = l[Kt];
          for (let f = 0; f < d.length; f++) {
            let p = d[f];
            Hi(p[w], p, c, r);
          }
        }
      }
    }
  }
  return r;
}
function km(e, t) {
  return e[ke].queries[t].queryList;
}
function Ul(e, t, n) {
  let r = new bi((n & 4) === 4);
  return (
    Mg(e, t, r, r.destroy), (t[ke] ??= new Vi()).queries.push(new ji(r)) - 1
  );
}
function Lm(e, t, n) {
  let r = G();
  return (
    r.firstCreatePass &&
      (Gl(r, new kr(e, t, n), -1), (t & 2) === 2 && (r.staticViewQueries = !0)),
    Ul(r, b(), t)
  );
}
function jm(e, t, n, r) {
  let o = G();
  if (o.firstCreatePass) {
    let i = ue();
    Gl(o, new kr(t, n, r), i.index),
      Bm(o, e),
      (n & 2) === 2 && (o.staticContentQueries = !0);
  }
  return Ul(o, b(), n);
}
function Vm(e) {
  return e.split(",").map((t) => t.trim());
}
function Gl(e, t, n) {
  e.queries === null && (e.queries = new Bi()), e.queries.track(new $i(t, n));
}
function Bm(e, t) {
  let n = e.contentQueries || (e.contentQueries = []),
    r = n.length ? n[n.length - 1] : -1;
  t !== r && n.push(e.queries.length - 1, t);
}
function Zs(e, t) {
  return e.queries.getByIndex(t);
}
function $m(e, t) {
  let n = e[w],
    r = Zs(n, t);
  return r.crossesNgTemplate ? Hi(n, e, t, []) : Hl(n, e, r, t);
}
function ix(e) {
  return typeof e == "function" && e[Me] !== void 0;
}
function sx(e, t) {
  _t("NgSignals");
  let n = _a(e),
    r = n[Me];
  return (
    t?.equal && (r.equal = t.equal),
    (n.set = (o) => Co(r, o)),
    (n.update = (o) => Ma(r, o)),
    (n.asReadonly = Hm.bind(n)),
    n
  );
}
function Hm() {
  let e = this[Me];
  if (e.readonlyFn === void 0) {
    let t = () => this();
    (t[Me] = e), (e.readonlyFn = t);
  }
  return e.readonlyFn;
}
function Um(e) {
  return Object.getPrototypeOf(e.prototype).constructor;
}
function Gm(e) {
  let t = Um(e.type),
    n = !0,
    r = [e];
  for (; t; ) {
    let o;
    if (Je(e)) o = t.ɵcmp || t.ɵdir;
    else {
      if (t.ɵcmp) throw new T(903, !1);
      o = t.ɵdir;
    }
    if (o) {
      if (n) {
        r.push(o);
        let s = e;
        (s.inputs = dr(e.inputs)),
          (s.inputTransforms = dr(e.inputTransforms)),
          (s.declaredInputs = dr(e.declaredInputs)),
          (s.outputs = dr(e.outputs));
        let a = o.hostBindings;
        a && Qm(e, a);
        let u = o.viewQuery,
          c = o.contentQueries;
        if (
          (u && qm(e, u),
          c && Ym(e, c),
          zm(e, o),
          Bf(e.outputs, o.outputs),
          Je(o) && o.data.animation)
        ) {
          let l = e.data;
          l.animation = (l.animation || []).concat(o.data.animation);
        }
      }
      let i = o.features;
      if (i)
        for (let s = 0; s < i.length; s++) {
          let a = i[s];
          a && a.ngInherit && a(e), a === Gm && (n = !1);
        }
    }
    t = Object.getPrototypeOf(t);
  }
  Wm(r);
}
function zm(e, t) {
  for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n)) continue;
    let r = t.inputs[n];
    if (
      r !== void 0 &&
      ((e.inputs[n] = r),
      (e.declaredInputs[n] = t.declaredInputs[n]),
      t.inputTransforms !== null)
    ) {
      let o = Array.isArray(r) ? r[0] : r;
      if (!t.inputTransforms.hasOwnProperty(o)) continue;
      (e.inputTransforms ??= {}), (e.inputTransforms[o] = t.inputTransforms[o]);
    }
  }
}
function Wm(e) {
  let t = 0,
    n = null;
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    (o.hostVars = t += o.hostVars),
      (o.hostAttrs = gn(o.hostAttrs, (n = gn(n, o.hostAttrs))));
  }
}
function dr(e) {
  return e === qt ? {} : e === oe ? [] : e;
}
function qm(e, t) {
  let n = e.viewQuery;
  n
    ? (e.viewQuery = (r, o) => {
        t(r, o), n(r, o);
      })
    : (e.viewQuery = t);
}
function Ym(e, t) {
  let n = e.contentQueries;
  n
    ? (e.contentQueries = (r, o, i) => {
        t(r, o, i), n(r, o, i);
      })
    : (e.contentQueries = t);
}
function Qm(e, t) {
  let n = e.hostBindings;
  n
    ? (e.hostBindings = (r, o) => {
        t(r, o), n(r, o);
      })
    : (e.hostBindings = t);
}
function Zm(e) {
  let t = e.inputConfig,
    n = {};
  for (let r in t)
    if (t.hasOwnProperty(r)) {
      let o = t[r];
      Array.isArray(o) && o[3] && (n[r] = o[3]);
    }
  e.inputTransforms = n;
}
var Xe = class {},
  Ui = class {};
var Gi = class extends Xe {
    constructor(t, n, r) {
      super(),
        (this._parent = n),
        (this._bootstrapComponents = []),
        (this.destroyCbs = []),
        (this.componentFactoryResolver = new Pr(this));
      let o = ic(t);
      (this._bootstrapComponents = nl(o.bootstrap)),
        (this._r3Injector = qc(
          t,
          n,
          [
            { provide: Xe, useValue: this },
            { provide: Xr, useValue: this.componentFactoryResolver },
            ...r,
          ],
          ie(t),
          new Set(["environment"]),
        )),
        this._r3Injector.resolveInjectorInitializers(),
        (this.instance = this._r3Injector.get(t));
    }
    get injector() {
      return this._r3Injector;
    }
    destroy() {
      let t = this._r3Injector;
      !t.destroyed && t.destroy(),
        this.destroyCbs.forEach((n) => n()),
        (this.destroyCbs = null);
    }
    onDestroy(t) {
      this.destroyCbs.push(t);
    }
  },
  zi = class extends Ui {
    constructor(t) {
      super(), (this.moduleType = t);
    }
    create(t) {
      return new Gi(this.moduleType, t, []);
    }
  };
var Lr = class extends Xe {
  constructor(t) {
    super(),
      (this.componentFactoryResolver = new Pr(this)),
      (this.instance = null);
    let n = new mn(
      [
        ...t.providers,
        { provide: Xe, useValue: this },
        { provide: Xr, useValue: this.componentFactoryResolver },
      ],
      t.parent || Is(),
      t.debugName,
      new Set(["environment"]),
    );
    (this.injector = n),
      t.runEnvironmentInitializers && n.resolveInjectorInitializers();
  }
  destroy() {
    this.injector.destroy();
  }
  onDestroy(t) {
    this.injector.onDestroy(t);
  }
};
function Km(e, t, n = null) {
  return new Lr({
    providers: e,
    parent: t,
    debugName: n,
    runEnvironmentInitializers: !0,
  }).injector;
}
var Ks = (() => {
  let t = class t {
    constructor() {
      (this.taskId = 0),
        (this.pendingTasks = new Set()),
        (this.hasPendingTasks = new an(!1));
    }
    get _hasPendingTasks() {
      return this.hasPendingTasks.value;
    }
    add() {
      this._hasPendingTasks || this.hasPendingTasks.next(!0);
      let r = this.taskId++;
      return this.pendingTasks.add(r), r;
    }
    remove(r) {
      this.pendingTasks.delete(r),
        this.pendingTasks.size === 0 &&
          this._hasPendingTasks &&
          this.hasPendingTasks.next(!1);
    }
    ngOnDestroy() {
      this.pendingTasks.clear(),
        this._hasPendingTasks && this.hasPendingTasks.next(!1);
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let e = t;
  return e;
})();
function zl(e) {
  return e !== null && (typeof e == "function" || typeof e == "object");
}
function Wl(e, t, n) {
  return (e[t] = n);
}
function Ce(e, t, n) {
  let r = e[t];
  return Object.is(r, n) ? !1 : ((e[t] = n), !0);
}
function ql(e, t, n, r) {
  let o = Ce(e, t, n);
  return Ce(e, t + 1, r) || o;
}
function Jm(e) {
  return (e.flags & 32) === 32;
}
function Xm(e, t, n, r, o, i, s, a, u) {
  let c = t.consts,
    l = On(t, e, 4, s || null, Mr(c, a));
  El(t, n, l, Mr(c, u)), ks(t, l);
  let d = (l.tView = Gs(
    2,
    l,
    r,
    o,
    i,
    t.directiveRegistry,
    t.pipeRegistry,
    null,
    t.schemas,
    c,
    null,
  ));
  return (
    t.queries !== null &&
      (t.queries.template(t, l), (d.queries = t.queries.embeddedTView(l))),
    l
  );
}
function Wi(e, t, n, r, o, i, s, a) {
  let u = b(),
    c = G(),
    l = e + K,
    d = c.firstCreatePass ? Xm(l, c, u, t, n, r, o, i, s) : c.data[l];
  An(d, !1);
  let f = ey(c, u, d, e);
  Rs() && Hs(c, u, f, d), Et(f, u);
  let p = _l(f, u, f, d);
  return (
    (u[l] = p),
    Zr(u, p),
    Nm(p, d, u),
    Cs(d) && vl(c, u, d),
    s != null && Dl(u, d, a),
    Wi
  );
}
var ey = ty;
function ty(e, t, n, r) {
  return Ps(!0), t[V].createComment("");
}
function ny(e, t, n, r) {
  let o = b(),
    i = en();
  if (Ce(o, i, t)) {
    let s = G(),
      a = Fs();
    $g(a, o, e, t, n, r);
  }
  return ny;
}
function ry(e, t, n, r) {
  return Ce(e, en(), n) ? t + Wt(n) + r : be;
}
function oy(e, t, n, r, o, i) {
  let s = lh(),
    a = ql(e, s, n, o);
  return Ts(2), a ? t + Wt(n) + r + Wt(o) + i : be;
}
function fr(e, t) {
  return (e << 17) | (t << 2);
}
function bt(e) {
  return (e >> 17) & 32767;
}
function iy(e) {
  return (e & 2) == 2;
}
function sy(e, t) {
  return (e & 131071) | (t << 17);
}
function qi(e) {
  return e | 2;
}
function Jt(e) {
  return (e & 131068) >> 2;
}
function ti(e, t) {
  return (e & -131069) | (t << 2);
}
function ay(e) {
  return (e & 1) === 1;
}
function Yi(e) {
  return e | 1;
}
function uy(e, t, n, r, o, i) {
  let s = i ? t.classBindings : t.styleBindings,
    a = bt(s),
    u = Jt(s);
  e[r] = n;
  let c = !1,
    l;
  if (Array.isArray(n)) {
    let d = n;
    (l = d[1]), (l === null || Tn(d, l) > 0) && (c = !0);
  } else l = n;
  if (o)
    if (u !== 0) {
      let f = bt(e[a + 1]);
      (e[r + 1] = fr(f, a)),
        f !== 0 && (e[f + 1] = ti(e[f + 1], r)),
        (e[a + 1] = sy(e[a + 1], r));
    } else
      (e[r + 1] = fr(a, 0)), a !== 0 && (e[a + 1] = ti(e[a + 1], r)), (a = r);
  else
    (e[r + 1] = fr(u, 0)),
      a === 0 ? (a = r) : (e[u + 1] = ti(e[u + 1], r)),
      (u = r);
  c && (e[r + 1] = qi(e[r + 1])),
    Ou(e, l, r, !0),
    Ou(e, l, r, !1),
    cy(t, l, e, r, i),
    (s = fr(a, u)),
    i ? (t.classBindings = s) : (t.styleBindings = s);
}
function cy(e, t, n, r, o) {
  let i = o ? e.residualClasses : e.residualStyles;
  i != null &&
    typeof t == "string" &&
    Tn(i, t) >= 0 &&
    (n[r + 1] = Yi(n[r + 1]));
}
function Ou(e, t, n, r) {
  let o = e[n + 1],
    i = t === null,
    s = r ? bt(o) : Jt(o),
    a = !1;
  for (; s !== 0 && (a === !1 || i); ) {
    let u = e[s],
      c = e[s + 1];
    ly(u, t) && ((a = !0), (e[s + 1] = r ? Yi(c) : qi(c))),
      (s = r ? bt(c) : Jt(c));
  }
  a && (e[n + 1] = r ? qi(o) : Yi(o));
}
function ly(e, t) {
  return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t
    ? !0
    : Array.isArray(e) && typeof t == "string"
      ? Tn(e, t) >= 0
      : !1;
}
var De = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function dy(e) {
  return e.substring(De.key, De.keyEnd);
}
function fy(e) {
  return py(e), Yl(e, Ql(e, 0, De.textEnd));
}
function Yl(e, t) {
  let n = De.textEnd;
  return n === t ? -1 : ((t = De.keyEnd = hy(e, (De.key = t), n)), Ql(e, t, n));
}
function py(e) {
  (De.key = 0),
    (De.keyEnd = 0),
    (De.value = 0),
    (De.valueEnd = 0),
    (De.textEnd = e.length);
}
function Ql(e, t, n) {
  for (; t < n && e.charCodeAt(t) <= 32; ) t++;
  return t;
}
function hy(e, t, n) {
  for (; t < n && e.charCodeAt(t) > 32; ) t++;
  return t;
}
function gy(e, t, n) {
  let r = b(),
    o = en();
  if (Ce(r, o, t)) {
    let i = G(),
      s = Fs();
    Il(i, s, r, e, t, r[V], n, !1);
  }
  return gy;
}
function Qi(e, t, n, r, o) {
  let i = t.inputs,
    s = o ? "class" : "style";
  zs(e, n, i[s], s, r);
}
function Zl(e, t, n) {
  return Kl(e, t, n, !1), Zl;
}
function my(e, t) {
  return Kl(e, t, null, !0), my;
}
function ax(e) {
  vy(by, yy, e, !0);
}
function yy(e, t) {
  for (let n = fy(t); n >= 0; n = Yl(t, n)) ms(e, dy(t), !0);
}
function Kl(e, t, n, r) {
  let o = b(),
    i = G(),
    s = Ts(2);
  if ((i.firstUpdatePass && Xl(i, e, s, r), t !== be && Ce(o, s, t))) {
    let a = i.data[Ve()];
    ed(i, a, o, o[V], e, (o[s + 1] = My(t, n)), r, s);
  }
}
function vy(e, t, n, r) {
  let o = G(),
    i = Ts(2);
  o.firstUpdatePass && Xl(o, null, i, r);
  let s = b();
  if (n !== be && Ce(s, i, n)) {
    let a = o.data[Ve()];
    if (td(a, r) && !Jl(o, i)) {
      let u = r ? a.classesWithoutHost : a.stylesWithoutHost;
      u !== null && (n = ui(u, n || "")), Qi(o, a, s, n, r);
    } else _y(o, a, s, s[V], s[i + 1], (s[i + 1] = Cy(e, t, n)), r, i);
  }
}
function Jl(e, t) {
  return t >= e.expandoStartIndex;
}
function Xl(e, t, n, r) {
  let o = e.data;
  if (o[n + 1] === null) {
    let i = o[Ve()],
      s = Jl(e, n);
    td(i, r) && t === null && !s && (t = !1),
      (t = Dy(o, i, t, r)),
      uy(o, i, t, n, s, r);
  }
}
function Dy(e, t, n, r) {
  let o = gh(e),
    i = r ? t.residualClasses : t.residualStyles;
  if (o === null)
    (r ? t.classBindings : t.styleBindings) === 0 &&
      ((n = ni(null, e, t, n, r)), (n = xn(n, t.attrs, r)), (i = null));
  else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== o)
      if (((n = ni(o, e, t, n, r)), i === null)) {
        let u = wy(e, t, r);
        u !== void 0 &&
          Array.isArray(u) &&
          ((u = ni(null, e, t, u[1], r)),
          (u = xn(u, t.attrs, r)),
          Iy(e, t, r, u));
      } else i = Ey(e, t, r);
  }
  return (
    i !== void 0 && (r ? (t.residualClasses = i) : (t.residualStyles = i)), n
  );
}
function wy(e, t, n) {
  let r = n ? t.classBindings : t.styleBindings;
  if (Jt(r) !== 0) return e[bt(r)];
}
function Iy(e, t, n, r) {
  let o = n ? t.classBindings : t.styleBindings;
  e[bt(o)] = r;
}
function Ey(e, t, n) {
  let r,
    o = t.directiveEnd;
  for (let i = 1 + t.directiveStylingLast; i < o; i++) {
    let s = e[i].hostAttrs;
    r = xn(r, s, n);
  }
  return xn(r, t.attrs, n);
}
function ni(e, t, n, r, o) {
  let i = null,
    s = n.directiveEnd,
    a = n.directiveStylingLast;
  for (
    a === -1 ? (a = n.directiveStart) : a++;
    a < s && ((i = t[a]), (r = xn(r, i.hostAttrs, o)), i !== e);

  )
    a++;
  return e !== null && (n.directiveStylingLast = a), r;
}
function xn(e, t, n) {
  let r = n ? 1 : 2,
    o = -1;
  if (t !== null)
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      typeof s == "number"
        ? (o = s)
        : o === r &&
          (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]),
          ms(e, s, n ? !0 : t[++i]));
    }
  return e === void 0 ? null : e;
}
function Cy(e, t, n) {
  if (n == null || n === "") return oe;
  let r = [],
    o = Wr(n);
  if (Array.isArray(o)) for (let i = 0; i < o.length; i++) e(r, o[i], !0);
  else if (typeof o == "object")
    for (let i in o) o.hasOwnProperty(i) && e(r, i, o[i]);
  else typeof o == "string" && t(r, o);
  return r;
}
function by(e, t, n) {
  let r = String(t);
  r !== "" && !r.includes(" ") && ms(e, r, n);
}
function _y(e, t, n, r, o, i, s, a) {
  o === be && (o = oe);
  let u = 0,
    c = 0,
    l = 0 < o.length ? o[0] : null,
    d = 0 < i.length ? i[0] : null;
  for (; l !== null || d !== null; ) {
    let f = u < o.length ? o[u + 1] : void 0,
      p = c < i.length ? i[c + 1] : void 0,
      h = null,
      g;
    l === d
      ? ((u += 2), (c += 2), f !== p && ((h = d), (g = p)))
      : d === null || (l !== null && l < d)
        ? ((u += 2), (h = l))
        : ((c += 2), (h = d), (g = p)),
      h !== null && ed(e, t, n, r, h, g, s, a),
      (l = u < o.length ? o[u] : null),
      (d = c < i.length ? i[c] : null);
  }
}
function ed(e, t, n, r, o, i, s, a) {
  if (!(t.type & 3)) return;
  let u = e.data,
    c = u[a + 1],
    l = ay(c) ? Fu(u, t, n, o, Jt(c), s) : void 0;
  if (!jr(l)) {
    jr(i) || (iy(c) && (i = Fu(u, null, n, o, a, s)));
    let d = Ec(Ve(), n);
    vg(r, s, d, o, i);
  }
}
function Fu(e, t, n, r, o, i) {
  let s = t === null,
    a;
  for (; o > 0; ) {
    let u = e[o],
      c = Array.isArray(u),
      l = c ? u[1] : u,
      d = l === null,
      f = n[o + 1];
    f === be && (f = d ? oe : void 0);
    let p = d ? Wo(f, r) : l === r ? f : void 0;
    if ((c && !jr(p) && (p = Wo(u, r)), jr(p) && ((a = p), s))) return a;
    let h = e[o + 1];
    o = s ? bt(h) : Jt(h);
  }
  if (t !== null) {
    let u = i ? t.residualClasses : t.residualStyles;
    u != null && (a = Wo(u, r));
  }
  return a;
}
function jr(e) {
  return e !== void 0;
}
function My(e, t) {
  return (
    e == null ||
      e === "" ||
      (typeof t == "string"
        ? (e = e + t)
        : typeof e == "object" && (e = ie(Wr(e)))),
    e
  );
}
function td(e, t) {
  return (e.flags & (t ? 8 : 16)) !== 0;
}
var Zi = class {
  destroy(t) {}
  updateValue(t, n) {}
  swap(t, n) {
    let r = Math.min(t, n),
      o = Math.max(t, n),
      i = this.detach(o);
    if (o - r > 1) {
      let s = this.detach(r);
      this.attach(r, i), this.attach(o, s);
    } else this.attach(r, i);
  }
  move(t, n) {
    this.attach(n, this.detach(t));
  }
};
function ri(e, t, n, r, o) {
  return e === n && Object.is(t, r) ? 1 : Object.is(o(e, t), o(n, r)) ? -1 : 0;
}
function xy(e, t, n) {
  let r,
    o,
    i = 0,
    s = e.length - 1;
  if (Array.isArray(t)) {
    let a = t.length - 1;
    for (; i <= s && i <= a; ) {
      let u = e.at(i),
        c = t[i],
        l = ri(i, u, i, c, n);
      if (l !== 0) {
        l < 0 && e.updateValue(i, c), i++;
        continue;
      }
      let d = e.at(s),
        f = t[a],
        p = ri(s, d, a, f, n);
      if (p !== 0) {
        p < 0 && e.updateValue(s, f), s--, a--;
        continue;
      }
      let h = n(i, u),
        g = n(s, d),
        I = n(i, c);
      if (Object.is(I, g)) {
        let x = n(a, f);
        Object.is(x, h)
          ? (e.swap(i, s), e.updateValue(s, f), a--, s--)
          : e.move(s, i),
          e.updateValue(i, c),
          i++;
        continue;
      }
      if (((r ??= new Vr()), (o ??= Pu(e, i, s, n)), Ki(e, r, i, I)))
        e.updateValue(i, c), i++, s++;
      else if (o.has(I)) r.set(h, e.detach(i)), s--;
      else {
        let x = e.create(i, t[i]);
        e.attach(i, x), i++, s++;
      }
    }
    for (; i <= a; ) Ru(e, r, n, i, t[i]), i++;
  } else if (t != null) {
    let a = t[Symbol.iterator](),
      u = a.next();
    for (; !u.done && i <= s; ) {
      let c = e.at(i),
        l = u.value,
        d = ri(i, c, i, l, n);
      if (d !== 0) d < 0 && e.updateValue(i, l), i++, (u = a.next());
      else {
        (r ??= new Vr()), (o ??= Pu(e, i, s, n));
        let f = n(i, l);
        if (Ki(e, r, i, f)) e.updateValue(i, l), i++, s++, (u = a.next());
        else if (!o.has(f))
          e.attach(i, e.create(i, l)), i++, s++, (u = a.next());
        else {
          let p = n(i, c);
          r.set(p, e.detach(i)), s--;
        }
      }
    }
    for (; !u.done; ) Ru(e, r, n, e.length, u.value), (u = a.next());
  }
  for (; i <= s; ) e.destroy(e.detach(s--));
  r?.forEach((a) => {
    e.destroy(a);
  });
}
function Ki(e, t, n, r) {
  return t !== void 0 && t.has(r)
    ? (e.attach(n, t.get(r)), t.delete(r), !0)
    : !1;
}
function Ru(e, t, n, r, o) {
  if (Ki(e, t, r, n(r, o))) e.updateValue(r, o);
  else {
    let i = e.create(r, o);
    e.attach(r, i);
  }
}
function Pu(e, t, n, r) {
  let o = new Set();
  for (let i = t; i <= n; i++) o.add(r(i, e.at(i)));
  return o;
}
var Vr = class {
  constructor() {
    (this.kvMap = new Map()), (this._vMap = void 0);
  }
  has(t) {
    return this.kvMap.has(t);
  }
  delete(t) {
    if (!this.has(t)) return !1;
    let n = this.kvMap.get(t);
    return (
      this._vMap !== void 0 && this._vMap.has(n)
        ? (this.kvMap.set(t, this._vMap.get(n)), this._vMap.delete(n))
        : this.kvMap.delete(t),
      !0
    );
  }
  get(t) {
    return this.kvMap.get(t);
  }
  set(t, n) {
    if (this.kvMap.has(t)) {
      let r = this.kvMap.get(t);
      this._vMap === void 0 && (this._vMap = new Map());
      let o = this._vMap;
      for (; o.has(r); ) r = o.get(r);
      o.set(r, n);
    } else this.kvMap.set(t, n);
  }
  forEach(t) {
    for (let [n, r] of this.kvMap)
      if ((t(r, n), this._vMap !== void 0)) {
        let o = this._vMap;
        for (; o.has(r); ) (r = o.get(r)), t(r, n);
      }
  }
};
function ux(e, t, n) {
  _t("NgControlFlow");
  let r = b(),
    o = en(),
    i = ts(r, K + e),
    s = 0;
  if (Ce(r, o, t)) {
    let a = _(null);
    try {
      if ((Ol(i, s), t !== -1)) {
        let u = ns(r[w], K + t),
          c = _n(i, u.tView.ssrId),
          l = Kr(r, u, n, { dehydratedView: c });
        Jr(i, l, s, Cn(u, c));
      }
    } finally {
      _(a);
    }
  } else {
    let a = Al(i, s);
    a !== void 0 && (a[Y] = n);
  }
}
var Ji = class {
  constructor(t, n, r) {
    (this.lContainer = t), (this.$implicit = n), (this.$index = r);
  }
  get $count() {
    return this.lContainer.length - Q;
  }
};
function cx(e) {
  return e;
}
function lx(e, t) {
  return t;
}
var Xi = class {
  constructor(t, n, r) {
    (this.hasEmptyBlock = t), (this.trackByFn = n), (this.liveCollection = r);
  }
};
function dx(e, t, n, r, o, i, s, a, u, c, l, d, f) {
  _t("NgControlFlow");
  let p = u !== void 0,
    h = b(),
    g = a ? s.bind(h[le][Y]) : s,
    I = new Xi(p, g);
  (h[K + e] = I), Wi(e + 1, t, n, r, o, i), p && Wi(e + 2, u, c, l, d, f);
}
var es = class extends Zi {
  constructor(t, n, r) {
    super(),
      (this.lContainer = t),
      (this.hostLView = n),
      (this.templateTNode = r),
      (this.needsIndexUpdate = !1);
  }
  get length() {
    return this.lContainer.length - Q;
  }
  at(t) {
    return this.getLView(t)[Y].$implicit;
  }
  attach(t, n) {
    let r = n[Qt];
    (this.needsIndexUpdate ||= t !== this.length),
      Jr(this.lContainer, n, t, Cn(this.templateTNode, r));
  }
  detach(t) {
    return (
      (this.needsIndexUpdate ||= t !== this.length - 1), Sy(this.lContainer, t)
    );
  }
  create(t, n) {
    let r = _n(this.lContainer, this.templateTNode.tView.ssrId);
    return Kr(
      this.hostLView,
      this.templateTNode,
      new Ji(this.lContainer, n, t),
      { dehydratedView: r },
    );
  }
  destroy(t) {
    qr(t[w], t);
  }
  updateValue(t, n) {
    this.getLView(t)[Y].$implicit = n;
  }
  reset() {
    this.needsIndexUpdate = !1;
  }
  updateIndexes() {
    if (this.needsIndexUpdate)
      for (let t = 0; t < this.length; t++) this.getLView(t)[Y].$index = t;
  }
  getLView(t) {
    return Ty(this.lContainer, t);
  }
};
function fx(e) {
  let t = _(null),
    n = Ve();
  try {
    let r = b(),
      o = r[w],
      i = r[n];
    if (i.liveCollection === void 0) {
      let a = n + 1,
        u = ts(r, a),
        c = ns(o, a);
      i.liveCollection = new es(u, r, c);
    } else i.liveCollection.reset();
    let s = i.liveCollection;
    if ((xy(s, e, i.trackByFn), s.updateIndexes(), i.hasEmptyBlock)) {
      let a = en(),
        u = s.length === 0;
      if (Ce(r, a, u)) {
        let c = n + 2,
          l = ts(r, c);
        if (u) {
          let d = ns(o, c),
            f = _n(l, d.tView.ssrId),
            p = Kr(r, d, void 0, { dehydratedView: f });
          Jr(l, p, 0, Cn(d, f));
        } else Ol(l, 0);
      }
    }
  } finally {
    _(t);
  }
}
function ts(e, t) {
  return e[t];
}
function Sy(e, t) {
  return En(e, t);
}
function Ty(e, t) {
  return Al(e, t);
}
function ns(e, t) {
  return bs(e, t);
}
function Ny(e, t, n, r, o, i) {
  let s = t.consts,
    a = Mr(s, o),
    u = On(t, e, 2, r, a);
  return (
    El(t, n, u, Mr(s, i)),
    u.attrs !== null && Pi(u, u.attrs, !1),
    u.mergedAttrs !== null && Pi(u, u.mergedAttrs, !0),
    t.queries !== null && t.queries.elementStart(t, u),
    u
  );
}
function nd(e, t, n, r) {
  let o = b(),
    i = G(),
    s = K + e,
    a = o[V],
    u = i.firstCreatePass ? Ny(s, i, o, t, n, r) : i.data[s],
    c = Oy(i, o, u, a, t, e);
  o[s] = c;
  let l = Cs(u);
  return (
    An(u, !0),
    fl(a, c, u),
    !Jm(u) && Rs() && Hs(i, o, c, u),
    rh() === 0 && Et(c, o),
    oh(),
    l && (vl(i, o, u), yl(i, u, o)),
    r !== null && Dl(o, u),
    nd
  );
}
function rd() {
  let e = ue();
  Sc() ? Tc() : ((e = e.parent), An(e, !1));
  let t = e;
  sh(t) && ah(), ih();
  let n = G();
  return (
    n.firstCreatePass && (ks(n, e), mc(e) && n.queries.elementEnd(e)),
    t.classesWithoutHost != null &&
      Eh(t) &&
      Qi(n, t, b(), t.classesWithoutHost, !0),
    t.stylesWithoutHost != null &&
      Ch(t) &&
      Qi(n, t, b(), t.stylesWithoutHost, !1),
    rd
  );
}
function Ay(e, t, n, r) {
  return nd(e, t, n, r), rd(), Ay;
}
var Oy = (e, t, n, r, o, i) => (Ps(!0), rl(r, o, vh()));
function px() {
  return b();
}
function Fy(e, t, n) {
  let r = b(),
    o = en();
  if (Ce(r, o, t)) {
    let i = G(),
      s = Fs();
    Il(i, s, r, e, t, r[V], n, !0);
  }
  return Fy;
}
var lt = void 0;
function Ry(e) {
  let t = e,
    n = Math.floor(Math.abs(e)),
    r = e.toString().replace(/^[^.]*\.?/, "").length;
  return n === 1 && r === 0 ? 1 : 5;
}
var Py = [
    "en",
    [["a", "p"], ["AM", "PM"], lt],
    [["AM", "PM"], lt, lt],
    [
      ["S", "M", "T", "W", "T", "F", "S"],
      ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    ],
    lt,
    [
      ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
      [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    ],
    lt,
    [
      ["B", "A"],
      ["BC", "AD"],
      ["Before Christ", "Anno Domini"],
    ],
    0,
    [6, 0],
    ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
    ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
    ["{1}, {0}", lt, "{1} 'at' {0}", lt],
    [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"],
    ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"],
    "USD",
    "$",
    "US Dollar",
    {},
    "ltr",
    Ry,
  ],
  oi = {};
function fe(e) {
  let t = ky(e),
    n = ku(t);
  if (n) return n;
  let r = t.split("-")[0];
  if (((n = ku(r)), n)) return n;
  if (r === "en") return Py;
  throw new T(701, !1);
}
function ku(e) {
  return (
    e in oi ||
      (oi[e] =
        Ye.ng &&
        Ye.ng.common &&
        Ye.ng.common.locales &&
        Ye.ng.common.locales[e]),
    oi[e]
  );
}
var j = (function (e) {
  return (
    (e[(e.LocaleId = 0)] = "LocaleId"),
    (e[(e.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
    (e[(e.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
    (e[(e.DaysFormat = 3)] = "DaysFormat"),
    (e[(e.DaysStandalone = 4)] = "DaysStandalone"),
    (e[(e.MonthsFormat = 5)] = "MonthsFormat"),
    (e[(e.MonthsStandalone = 6)] = "MonthsStandalone"),
    (e[(e.Eras = 7)] = "Eras"),
    (e[(e.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
    (e[(e.WeekendRange = 9)] = "WeekendRange"),
    (e[(e.DateFormat = 10)] = "DateFormat"),
    (e[(e.TimeFormat = 11)] = "TimeFormat"),
    (e[(e.DateTimeFormat = 12)] = "DateTimeFormat"),
    (e[(e.NumberSymbols = 13)] = "NumberSymbols"),
    (e[(e.NumberFormats = 14)] = "NumberFormats"),
    (e[(e.CurrencyCode = 15)] = "CurrencyCode"),
    (e[(e.CurrencySymbol = 16)] = "CurrencySymbol"),
    (e[(e.CurrencyName = 17)] = "CurrencyName"),
    (e[(e.Currencies = 18)] = "Currencies"),
    (e[(e.Directionality = 19)] = "Directionality"),
    (e[(e.PluralCase = 20)] = "PluralCase"),
    (e[(e.ExtraData = 21)] = "ExtraData"),
    e
  );
})(j || {});
function ky(e) {
  return e.toLowerCase().replace(/_/g, "-");
}
var Br = "en-US";
var Ly = Br;
function jy(e) {
  typeof e == "string" && (Ly = e.toLowerCase().replace(/_/g, "-"));
}
function Vy(e, t, n, r) {
  let o = b(),
    i = G(),
    s = ue();
  return $y(i, o, o[V], s, e, t, r), Vy;
}
function By(e, t, n, r) {
  let o = e.cleanup;
  if (o != null)
    for (let i = 0; i < o.length - 1; i += 2) {
      let s = o[i];
      if (s === n && o[i + 1] === r) {
        let a = t[yn],
          u = o[i + 2];
        return a.length > u ? a[u] : null;
      }
      typeof s == "string" && (i += 2);
    }
  return null;
}
function $y(e, t, n, r, o, i, s) {
  let a = Cs(r),
    c = e.firstCreatePass && Sl(e),
    l = t[Y],
    d = xl(t),
    f = !0;
  if (r.type & 3 || s) {
    let g = de(r, t),
      I = s ? s(g) : g,
      x = d.length,
      $ = s ? (Oe) => s(Ae(Oe[r.index])) : r.index,
      ee = null;
    if ((!s && a && (ee = By(e, t, o, r.index)), ee !== null)) {
      let Oe = ee.__ngLastListenerFn__ || ee;
      (Oe.__ngNextListenerFn__ = i), (ee.__ngLastListenerFn__ = i), (f = !1);
    } else {
      i = ju(r, t, l, i, !1);
      let Oe = n.listen(I, o, i);
      d.push(i, Oe), c && c.push(o, $, x, x + 1);
    }
  } else i = ju(r, t, l, i, !1);
  let p = r.outputs,
    h;
  if (f && p !== null && (h = p[o])) {
    let g = h.length;
    if (g)
      for (let I = 0; I < g; I += 2) {
        let x = h[I],
          $ = h[I + 1],
          Mt = t[x][$].subscribe(i),
          he = d.length;
        d.push(i, Mt), c && c.push(o, r.index, he, -(he + 1));
      }
  }
}
function Lu(e, t, n, r) {
  let o = _(null);
  try {
    return Te(6, t, n), n(r) !== !1;
  } catch (i) {
    return Tl(e, i), !1;
  } finally {
    Te(7, t, n), _(o);
  }
}
function ju(e, t, n, r, o) {
  return function i(s) {
    if (s === Function) return r;
    let a = e.componentOffset > -1 ? et(e.index, t) : t;
    qs(a);
    let u = Lu(t, n, r, s),
      c = i.__ngNextListenerFn__;
    for (; c; ) (u = Lu(t, n, c, s) && u), (c = c.__ngNextListenerFn__);
    return o && u === !1 && s.preventDefault(), u;
  };
}
function hx(e = 1) {
  return yh(e);
}
function Hy(e, t) {
  let n = null,
    r = Dp(e);
  for (let o = 0; o < t.length; o++) {
    let i = t[o];
    if (i === "*") {
      n = o;
      continue;
    }
    if (r === null ? tc(e, i, !0) : Ep(r, i)) return o;
  }
  return n;
}
function gx(e) {
  let t = b()[le][ae];
  if (!t.projection) {
    let n = e ? e.length : 1,
      r = (t.projection = cp(n, null)),
      o = r.slice(),
      i = t.child;
    for (; i !== null; ) {
      let s = e ? Hy(i, e) : 0;
      s !== null && (o[s] ? (o[s].projectionNext = i) : (r[s] = i), (o[s] = i)),
        (i = i.next);
    }
  }
}
function mx(e, t = 0, n) {
  let r = b(),
    o = G(),
    i = On(o, K + e, 16, null, n || null);
  i.projection === null && (i.projection = t),
    Tc(),
    (!r[Qt] || Mc()) && (i.flags & 32) !== 32 && mg(o, r, i);
}
function yx(e, t, n, r) {
  jm(e, t, n, r);
}
function vx(e, t, n) {
  Lm(e, t, n);
}
function Dx(e) {
  let t = b(),
    n = G(),
    r = Nc();
  Ns(r + 1);
  let o = Zs(n, r);
  if (e.dirty && Jp(t) === ((o.metadata.flags & 2) === 2)) {
    if (o.matches === null) e.reset([]);
    else {
      let i = $m(t, r);
      e.reset(i, Ph), e.notifyOnChanges();
    }
    return !0;
  }
  return !1;
}
function wx() {
  return km(b(), Nc());
}
function Uy(e, t, n, r) {
  n >= e.data.length && ((e.data[n] = null), (e.blueprint[n] = null)),
    (t[n] = r);
}
function Ix(e) {
  let t = ch();
  return _s(t, K + e);
}
function Ex(e, t = "") {
  let n = b(),
    r = G(),
    o = e + K,
    i = r.firstCreatePass ? On(r, o, 1, t, null) : r.data[o],
    s = Gy(r, n, i, t, e);
  (n[o] = s), Rs() && Hs(r, n, s, i), An(i, !1);
}
var Gy = (e, t, n, r, o) => (Ps(!0), tg(t[V], r));
function zy(e) {
  return od("", e, ""), zy;
}
function od(e, t, n) {
  let r = b(),
    o = ry(r, e, t, n);
  return o !== be && Nl(r, Ve(), o), od;
}
function Wy(e, t, n, r, o) {
  let i = b(),
    s = oy(i, e, t, n, r, o);
  return s !== be && Nl(i, Ve(), s), Wy;
}
function qy(e, t, n) {
  let r = G();
  if (r.firstCreatePass) {
    let o = Je(e);
    rs(n, r.data, r.blueprint, o, !0), rs(t, r.data, r.blueprint, o, !1);
  }
}
function rs(e, t, n, r, o) {
  if (((e = J(e)), Array.isArray(e)))
    for (let i = 0; i < e.length; i++) rs(e[i], t, n, r, o);
  else {
    let i = G(),
      s = b(),
      a = ue(),
      u = Yt(e) ? e : J(e.provide),
      c = fc(e),
      l = a.providerIndexes & 1048575,
      d = a.directiveStart,
      f = a.providerIndexes >> 20;
    if (Yt(e) || !e.multi) {
      let p = new Dt(c, o, se),
        h = si(u, t, o ? l : l + f, d);
      h === -1
        ? (wi(Nr(a, s), i, u),
          ii(i, e, t.length),
          t.push(u),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          n.push(p),
          s.push(p))
        : ((n[h] = p), (s[h] = p));
    } else {
      let p = si(u, t, l + f, d),
        h = si(u, t, l, l + f),
        g = p >= 0 && n[p],
        I = h >= 0 && n[h];
      if ((o && !I) || (!o && !g)) {
        wi(Nr(a, s), i, u);
        let x = Zy(o ? Qy : Yy, n.length, o, r, c);
        !o && I && (n[h].providerFactory = x),
          ii(i, e, t.length, 0),
          t.push(u),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          n.push(x),
          s.push(x);
      } else {
        let x = id(n[o ? h : p], c, !o && r);
        ii(i, e, p > -1 ? p : h, x);
      }
      !o && r && I && n[h].componentProviders++;
    }
  }
}
function ii(e, t, n, r) {
  let o = Yt(t),
    i = Pp(t);
  if (o || i) {
    let u = (i ? J(t.useClass) : t).prototype.ngOnDestroy;
    if (u) {
      let c = e.destroyHooks || (e.destroyHooks = []);
      if (!o && t.multi) {
        let l = c.indexOf(n);
        l === -1 ? c.push(n, [r, u]) : c[l + 1].push(r, u);
      } else c.push(n, u);
    }
  }
}
function id(e, t, n) {
  return n && e.componentProviders++, e.multi.push(t) - 1;
}
function si(e, t, n, r) {
  for (let o = n; o < r; o++) if (t[o] === e) return o;
  return -1;
}
function Yy(e, t, n, r) {
  return os(this.multi, []);
}
function Qy(e, t, n, r) {
  let o = this.multi,
    i;
  if (this.providerFactory) {
    let s = this.providerFactory.componentProviders,
      a = wt(n, n[w], this.providerFactory.index, r);
    (i = a.slice(0, s)), os(o, i);
    for (let u = s; u < a.length; u++) i.push(a[u]);
  } else (i = []), os(o, i);
  return i;
}
function os(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    t.push(r());
  }
  return t;
}
function Zy(e, t, n, r, o) {
  let i = new Dt(e, n, se);
  return (
    (i.multi = []),
    (i.index = t),
    (i.componentProviders = 0),
    id(i, o, r && !n),
    i
  );
}
function Cx(e, t = []) {
  return (n) => {
    n.providersResolver = (r, o) => qy(r, o ? o(e) : e, t);
  };
}
var Ky = (() => {
  let t = class t {
    constructor(r) {
      (this._injector = r), (this.cachedInjectors = new Map());
    }
    getOrCreateStandaloneInjector(r) {
      if (!r.standalone) return null;
      if (!this.cachedInjectors.has(r)) {
        let o = uc(!1, r.type),
          i =
            o.length > 0
              ? Km([o], this._injector, `Standalone[${r.type.name}]`)
              : null;
        this.cachedInjectors.set(r, i);
      }
      return this.cachedInjectors.get(r);
    }
    ngOnDestroy() {
      try {
        for (let r of this.cachedInjectors.values()) r !== null && r.destroy();
      } finally {
        this.cachedInjectors.clear();
      }
    }
  };
  t.ɵprov = L({
    token: t,
    providedIn: "environment",
    factory: () => new t(Z(Ke)),
  });
  let e = t;
  return e;
})();
function bx(e) {
  _t("NgStandalone"),
    (e.getStandaloneInjector = (t) =>
      t.get(Ky).getOrCreateStandaloneInjector(e));
}
function _x(e, t, n, r) {
  return ad(b(), Ss(), e, t, n, r);
}
function sd(e, t) {
  let n = e[t];
  return n === be ? void 0 : n;
}
function ad(e, t, n, r, o, i) {
  let s = t + n;
  return Ce(e, s, o) ? Wl(e, s + 1, i ? r.call(i, o) : r(o)) : sd(e, s + 1);
}
function Jy(e, t, n, r, o, i, s) {
  let a = t + n;
  return ql(e, a, o, i)
    ? Wl(e, a + 2, s ? r.call(s, o, i) : r(o, i))
    : sd(e, a + 2);
}
function Mx(e, t) {
  let n = G(),
    r,
    o = e + K;
  n.firstCreatePass
    ? ((r = Xy(t, n.pipeRegistry)),
      (n.data[o] = r),
      r.onDestroy && (n.destroyHooks ??= []).push(o, r.onDestroy))
    : (r = n.data[o]);
  let i = r.factory || (r.factory = ht(r.type, !0)),
    s,
    a = re(se);
  try {
    let u = Tr(!1),
      c = i();
    return Tr(u), Uy(n, b(), o, c), c;
  } finally {
    re(a);
  }
}
function Xy(e, t) {
  if (t)
    for (let n = t.length - 1; n >= 0; n--) {
      let r = t[n];
      if (e === r.name) return r;
    }
}
function xx(e, t, n) {
  let r = e + K,
    o = b(),
    i = _s(o, r);
  return ud(o, r) ? ad(o, Ss(), t, i.transform, n, i) : i.transform(n);
}
function Sx(e, t, n, r) {
  let o = e + K,
    i = b(),
    s = _s(i, o);
  return ud(i, o) ? Jy(i, Ss(), t, s.transform, n, r, s) : s.transform(n, r);
}
function ud(e, t) {
  return e[w].data[t].pure;
}
var Tx = (() => {
  let t = class t {
    log(r) {
      console.log(r);
    }
    warn(r) {
      console.warn(r);
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "platform" }));
  let e = t;
  return e;
})();
var ev = new R("");
function no(e) {
  return !!e && typeof e.then == "function";
}
function Js(e) {
  return !!e && typeof e.subscribe == "function";
}
var tv = new R(""),
  cd = (() => {
    let t = class t {
      constructor() {
        (this.initialized = !1),
          (this.done = !1),
          (this.donePromise = new Promise((r, o) => {
            (this.resolve = r), (this.reject = o);
          })),
          (this.appInits = k(tv, { optional: !0 }) ?? []);
      }
      runInitializers() {
        if (this.initialized) return;
        let r = [];
        for (let i of this.appInits) {
          let s = i();
          if (no(s)) r.push(s);
          else if (Js(s)) {
            let a = new Promise((u, c) => {
              s.subscribe({ complete: u, error: c });
            });
            r.push(a);
          }
        }
        let o = () => {
          (this.done = !0), this.resolve();
        };
        Promise.all(r)
          .then(() => {
            o();
          })
          .catch((i) => {
            this.reject(i);
          }),
          r.length === 0 && o(),
          (this.initialized = !0);
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  nv = new R("");
function rv() {
  ba(() => {
    throw new T(600, !1);
  });
}
function ov(e) {
  return e.isBoundToModule;
}
function iv(e, t, n) {
  try {
    let r = n();
    return no(r)
      ? r.catch((o) => {
          throw (t.runOutsideAngular(() => e.handleError(o)), o);
        })
      : r;
  } catch (r) {
    throw (t.runOutsideAngular(() => e.handleError(r)), r);
  }
}
var ld = (() => {
  let t = class t {
    constructor() {
      (this._bootstrapListeners = []),
        (this._runningTick = !1),
        (this._destroyed = !1),
        (this._destroyListeners = []),
        (this._views = []),
        (this.internalErrorHandler = k(Yc)),
        (this.afterRenderEffectManager = k(Vl)),
        (this.externalTestViews = new Set()),
        (this.beforeRender = new te()),
        (this.afterTick = new te()),
        (this.componentTypes = []),
        (this.components = []),
        (this.isStable = k(Ks).hasPendingTasks.pipe(ne((r) => !r))),
        (this._injector = k(Ke));
    }
    get destroyed() {
      return this._destroyed;
    }
    get injector() {
      return this._injector;
    }
    bootstrap(r, o) {
      let i = r instanceof Rr;
      if (!this._injector.get(cd).done) {
        let p = !i && Sp(r),
          h = !1;
        throw new T(405, h);
      }
      let a;
      i ? (a = r) : (a = this._injector.get(Xr).resolveComponentFactory(r)),
        this.componentTypes.push(a.componentType);
      let u = ov(a) ? void 0 : this._injector.get(Xe),
        c = o || a.selector,
        l = a.create(zr.NULL, [], c, u),
        d = l.location.nativeElement,
        f = l.injector.get(ev, null);
      return (
        f?.registerApplication(d),
        l.onDestroy(() => {
          this.detachView(l.hostView),
            ai(this.components, l),
            f?.unregisterApplication(d);
        }),
        this._loadComponent(l),
        l
      );
    }
    tick() {
      this._tick(!0);
    }
    _tick(r) {
      if (this._runningTick) throw new T(101, !1);
      let o = _(null);
      try {
        (this._runningTick = !0), this.detectChangesInAttachedViews(r);
      } catch (i) {
        this.internalErrorHandler(i);
      } finally {
        this.afterTick.next(), (this._runningTick = !1), _(o);
      }
    }
    detectChangesInAttachedViews(r) {
      let o = 0,
        i = this.afterRenderEffectManager;
      for (;;) {
        if (o === Rl) throw new T(103, !1);
        if (r) {
          let s = o === 0;
          this.beforeRender.next(s);
          for (let { _lView: a, notifyErrorHandler: u } of this._views)
            sv(a, s, u);
        }
        if (
          (o++,
          i.executeInternalCallbacks(),
          ![...this.externalTestViews.keys(), ...this._views].some(
            ({ _lView: s }) => is(s),
          ) &&
            (i.execute(),
            ![...this.externalTestViews.keys(), ...this._views].some(
              ({ _lView: s }) => is(s),
            )))
        )
          break;
      }
    }
    attachView(r) {
      let o = r;
      this._views.push(o), o.attachToAppRef(this);
    }
    detachView(r) {
      let o = r;
      ai(this._views, o), o.detachFromAppRef();
    }
    _loadComponent(r) {
      this.attachView(r.hostView), this.tick(), this.components.push(r);
      let o = this._injector.get(nv, []);
      [...this._bootstrapListeners, ...o].forEach((i) => i(r));
    }
    ngOnDestroy() {
      if (!this._destroyed)
        try {
          this._destroyListeners.forEach((r) => r()),
            this._views.slice().forEach((r) => r.destroy());
        } finally {
          (this._destroyed = !0),
            (this._views = []),
            (this._bootstrapListeners = []),
            (this._destroyListeners = []);
        }
    }
    onDestroy(r) {
      return (
        this._destroyListeners.push(r), () => ai(this._destroyListeners, r)
      );
    }
    destroy() {
      if (this._destroyed) throw new T(406, !1);
      let r = this._injector;
      r.destroy && !r.destroyed && r.destroy();
    }
    get viewCount() {
      return this._views.length;
    }
    warnIfDestroyed() {}
  };
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let e = t;
  return e;
})();
function ai(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function sv(e, t, n) {
  (!t && !is(e)) || av(e, n, t);
}
function is(e) {
  return xs(e);
}
function av(e, t, n) {
  let r;
  n ? ((r = 0), (e[D] |= 1024)) : e[D] & 64 ? (r = 0) : (r = 1), Pl(e, t, r);
}
var ss = class {
    constructor(t, n) {
      (this.ngModuleFactory = t), (this.componentFactories = n);
    }
  },
  Nx = (() => {
    let t = class t {
      compileModuleSync(r) {
        return new zi(r);
      }
      compileModuleAsync(r) {
        return Promise.resolve(this.compileModuleSync(r));
      }
      compileModuleAndAllComponentsSync(r) {
        let o = this.compileModuleSync(r),
          i = ic(r),
          s = nl(i.declarations).reduce((a, u) => {
            let c = gt(u);
            return c && a.push(new Mn(c)), a;
          }, []);
        return new ss(o, s);
      }
      compileModuleAndAllComponentsAsync(r) {
        return Promise.resolve(this.compileModuleAndAllComponentsSync(r));
      }
      clearCache() {}
      clearCacheFor(r) {}
      getModuleId(r) {}
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })();
var uv = (() => {
  let t = class t {
    constructor() {
      (this.zone = k(Ie)), (this.applicationRef = k(ld));
    }
    initialize() {
      this._onMicrotaskEmptySubscription ||
        (this._onMicrotaskEmptySubscription =
          this.zone.onMicrotaskEmpty.subscribe({
            next: () => {
              this.zone.run(() => {
                this.applicationRef.tick();
              });
            },
          }));
    }
    ngOnDestroy() {
      this._onMicrotaskEmptySubscription?.unsubscribe();
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let e = t;
  return e;
})();
function cv(e) {
  return [
    { provide: Ie, useFactory: e },
    {
      provide: Cr,
      multi: !0,
      useFactory: () => {
        let t = k(uv, { optional: !0 });
        return () => t.initialize();
      },
    },
    {
      provide: Cr,
      multi: !0,
      useFactory: () => {
        let t = k(pv);
        return () => {
          t.initialize();
        };
      },
    },
    { provide: Yc, useFactory: lv },
  ];
}
function lv() {
  let e = k(Ie),
    t = k(It);
  return (n) => e.runOutsideAngular(() => t.handleError(n));
}
function dv(e) {
  let t = cv(() => new Ie(fv(e)));
  return Np([[], t]);
}
function fv(e) {
  return {
    enableLongStackTrace: !1,
    shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1,
    shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1,
  };
}
var pv = (() => {
  let t = class t {
    constructor() {
      (this.subscription = new H()),
        (this.initialized = !1),
        (this.zone = k(Ie)),
        (this.pendingTasks = k(Ks));
    }
    initialize() {
      if (this.initialized) return;
      this.initialized = !0;
      let r = null;
      !this.zone.isStable &&
        !this.zone.hasPendingMacrotasks &&
        !this.zone.hasPendingMicrotasks &&
        (r = this.pendingTasks.add()),
        this.zone.runOutsideAngular(() => {
          this.subscription.add(
            this.zone.onStable.subscribe(() => {
              Ie.assertNotInAngularZone(),
                queueMicrotask(() => {
                  r !== null &&
                    !this.zone.hasPendingMacrotasks &&
                    !this.zone.hasPendingMicrotasks &&
                    (this.pendingTasks.remove(r), (r = null));
                });
            }),
          );
        }),
        this.subscription.add(
          this.zone.onUnstable.subscribe(() => {
            Ie.assertInAngularZone(), (r ??= this.pendingTasks.add());
          }),
        );
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let e = t;
  return e;
})();
function hv() {
  return (typeof $localize < "u" && $localize.locale) || Br;
}
var ro = new R("", {
  providedIn: "root",
  factory: () => k(ro, S.Optional | S.SkipSelf) || hv(),
});
var dd = new R("");
var Dr = null;
function gv(e = [], t) {
  return zr.create({
    name: t,
    providers: [
      { provide: dc, useValue: "platform" },
      { provide: dd, useValue: new Set([() => (Dr = null)]) },
      ...e,
    ],
  });
}
function mv(e = []) {
  if (Dr) return Dr;
  let t = gv(e);
  return (Dr = t), rv(), yv(t), t;
}
function yv(e) {
  e.get(Uh, null)?.forEach((n) => n());
}
function Ax() {
  return !1;
}
var oo = (() => {
  let t = class t {};
  t.__NG_ELEMENT_ID__ = vv;
  let e = t;
  return e;
})();
function vv(e) {
  return Dv(ue(), b(), (e & 16) === 16);
}
function Dv(e, t, n) {
  if (Gr(e) && !n) {
    let r = et(e.index, t);
    return new Ct(r, r);
  } else if (e.type & 47) {
    let r = t[le];
    return new Ct(r, t);
  }
  return null;
}
var as = class {
    constructor() {}
    supports(t) {
      return t instanceof Map || zl(t);
    }
    create() {
      return new us();
    }
  },
  us = class {
    constructor() {
      (this._records = new Map()),
        (this._mapHead = null),
        (this._appendAfter = null),
        (this._previousMapHead = null),
        (this._changesHead = null),
        (this._changesTail = null),
        (this._additionsHead = null),
        (this._additionsTail = null),
        (this._removalsHead = null),
        (this._removalsTail = null);
    }
    get isDirty() {
      return (
        this._additionsHead !== null ||
        this._changesHead !== null ||
        this._removalsHead !== null
      );
    }
    forEachItem(t) {
      let n;
      for (n = this._mapHead; n !== null; n = n._next) t(n);
    }
    forEachPreviousItem(t) {
      let n;
      for (n = this._previousMapHead; n !== null; n = n._nextPrevious) t(n);
    }
    forEachChangedItem(t) {
      let n;
      for (n = this._changesHead; n !== null; n = n._nextChanged) t(n);
    }
    forEachAddedItem(t) {
      let n;
      for (n = this._additionsHead; n !== null; n = n._nextAdded) t(n);
    }
    forEachRemovedItem(t) {
      let n;
      for (n = this._removalsHead; n !== null; n = n._nextRemoved) t(n);
    }
    diff(t) {
      if (!t) t = new Map();
      else if (!(t instanceof Map || zl(t))) throw new T(900, !1);
      return this.check(t) ? this : null;
    }
    onDestroy() {}
    check(t) {
      this._reset();
      let n = this._mapHead;
      if (
        ((this._appendAfter = null),
        this._forEach(t, (r, o) => {
          if (n && n.key === o)
            this._maybeAddToChanges(n, r),
              (this._appendAfter = n),
              (n = n._next);
          else {
            let i = this._getOrCreateRecordForKey(o, r);
            n = this._insertBeforeOrAppend(n, i);
          }
        }),
        n)
      ) {
        n._prev && (n._prev._next = null), (this._removalsHead = n);
        for (let r = n; r !== null; r = r._nextRemoved)
          r === this._mapHead && (this._mapHead = null),
            this._records.delete(r.key),
            (r._nextRemoved = r._next),
            (r.previousValue = r.currentValue),
            (r.currentValue = null),
            (r._prev = null),
            (r._next = null);
      }
      return (
        this._changesTail && (this._changesTail._nextChanged = null),
        this._additionsTail && (this._additionsTail._nextAdded = null),
        this.isDirty
      );
    }
    _insertBeforeOrAppend(t, n) {
      if (t) {
        let r = t._prev;
        return (
          (n._next = t),
          (n._prev = r),
          (t._prev = n),
          r && (r._next = n),
          t === this._mapHead && (this._mapHead = n),
          (this._appendAfter = t),
          t
        );
      }
      return (
        this._appendAfter
          ? ((this._appendAfter._next = n), (n._prev = this._appendAfter))
          : (this._mapHead = n),
        (this._appendAfter = n),
        null
      );
    }
    _getOrCreateRecordForKey(t, n) {
      if (this._records.has(t)) {
        let o = this._records.get(t);
        this._maybeAddToChanges(o, n);
        let i = o._prev,
          s = o._next;
        return (
          i && (i._next = s),
          s && (s._prev = i),
          (o._next = null),
          (o._prev = null),
          o
        );
      }
      let r = new cs(t);
      return (
        this._records.set(t, r),
        (r.currentValue = n),
        this._addToAdditions(r),
        r
      );
    }
    _reset() {
      if (this.isDirty) {
        let t;
        for (
          this._previousMapHead = this._mapHead, t = this._previousMapHead;
          t !== null;
          t = t._next
        )
          t._nextPrevious = t._next;
        for (t = this._changesHead; t !== null; t = t._nextChanged)
          t.previousValue = t.currentValue;
        for (t = this._additionsHead; t != null; t = t._nextAdded)
          t.previousValue = t.currentValue;
        (this._changesHead = this._changesTail = null),
          (this._additionsHead = this._additionsTail = null),
          (this._removalsHead = null);
      }
    }
    _maybeAddToChanges(t, n) {
      Object.is(n, t.currentValue) ||
        ((t.previousValue = t.currentValue),
        (t.currentValue = n),
        this._addToChanges(t));
    }
    _addToAdditions(t) {
      this._additionsHead === null
        ? (this._additionsHead = this._additionsTail = t)
        : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
    }
    _addToChanges(t) {
      this._changesHead === null
        ? (this._changesHead = this._changesTail = t)
        : ((this._changesTail._nextChanged = t), (this._changesTail = t));
    }
    _forEach(t, n) {
      t instanceof Map
        ? t.forEach(n)
        : Object.keys(t).forEach((r) => n(t[r], r));
    }
  },
  cs = class {
    constructor(t) {
      (this.key = t),
        (this.previousValue = null),
        (this.currentValue = null),
        (this._nextPrevious = null),
        (this._next = null),
        (this._prev = null),
        (this._nextAdded = null),
        (this._nextRemoved = null),
        (this._nextChanged = null);
    }
  };
function Vu() {
  return new Xs([new as()]);
}
var Xs = (() => {
  let t = class t {
    constructor(r) {
      this.factories = r;
    }
    static create(r, o) {
      if (o) {
        let i = o.factories.slice();
        r = r.concat(i);
      }
      return new t(r);
    }
    static extend(r) {
      return {
        provide: t,
        useFactory: (o) => t.create(r, o || Vu()),
        deps: [[t, new sp(), new ip()]],
      };
    }
    find(r) {
      let o = this.factories.find((i) => i.supports(r));
      if (o) return o;
      throw new T(901, !1);
    }
  };
  t.ɵprov = L({ token: t, providedIn: "root", factory: Vu });
  let e = t;
  return e;
})();
function Ox(e) {
  try {
    let { rootComponent: t, appProviders: n, platformProviders: r } = e,
      o = mv(r),
      i = [dv(), ...(n || [])],
      a = new Lr({
        providers: i,
        parent: o,
        debugName: "",
        runEnvironmentInitializers: !1,
      }).injector,
      u = a.get(Ie);
    return u.run(() => {
      a.resolveInjectorInitializers();
      let c = a.get(It, null),
        l;
      u.runOutsideAngular(() => {
        l = u.onError.subscribe({
          next: (p) => {
            c.handleError(p);
          },
        });
      });
      let d = () => a.destroy(),
        f = o.get(dd);
      return (
        f.add(d),
        a.onDestroy(() => {
          l.unsubscribe(), f.delete(d);
        }),
        iv(c, u, () => {
          let p = a.get(cd);
          return (
            p.runInitializers(),
            p.donePromise.then(() => {
              let h = a.get(ro, Br);
              jy(h || Br);
              let g = a.get(ld);
              return t !== void 0 && g.bootstrap(t), g;
            })
          );
        })
      );
    });
  } catch (t) {
    return Promise.reject(t);
  }
}
function wv(e) {
  return typeof e == "boolean" ? e : e != null && e !== "false";
}
function Iv(e, t = NaN) {
  return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t;
}
function Fx(e, t) {
  _t("NgSignals");
  let n = Ia(e);
  return t?.equal && (n[Me].equal = t.equal), n;
}
function ea(e) {
  let t = _(null);
  try {
    return e();
  } finally {
    _(t);
  }
}
var Ev = new R("", { providedIn: "root", factory: () => k(Cv) }),
  Cv = (() => {
    let t = class t {};
    t.ɵprov = L({ token: t, providedIn: "root", factory: () => new ls() });
    let e = t;
    return e;
  })(),
  ls = class {
    constructor() {
      (this.queuedEffectCount = 0),
        (this.queues = new Map()),
        (this.pendingTasks = k(Ks)),
        (this.taskId = null);
    }
    scheduleEffect(t) {
      if ((this.enqueue(t), this.taskId === null)) {
        let n = (this.taskId = this.pendingTasks.add());
        queueMicrotask(() => {
          this.flush(), this.pendingTasks.remove(n), (this.taskId = null);
        });
      }
    }
    enqueue(t) {
      let n = t.creationZone;
      this.queues.has(n) || this.queues.set(n, new Set());
      let r = this.queues.get(n);
      r.has(t) || (this.queuedEffectCount++, r.add(t));
    }
    flush() {
      for (; this.queuedEffectCount > 0; )
        for (let [t, n] of this.queues)
          t === null ? this.flushQueue(n) : t.run(() => this.flushQueue(n));
    }
    flushQueue(t) {
      for (let n of t) t.delete(n), this.queuedEffectCount--, n.run();
    }
  },
  ds = class {
    constructor(t, n, r, o, i, s) {
      (this.scheduler = t),
        (this.effectFn = n),
        (this.creationZone = r),
        (this.injector = i),
        (this.watcher = Sa(
          (a) => this.runEffect(a),
          () => this.schedule(),
          s,
        )),
        (this.unregisterOnDestroy = o?.onDestroy(() => this.destroy()));
    }
    runEffect(t) {
      try {
        this.effectFn(t);
      } catch (n) {
        this.injector.get(It, null, { optional: !0 })?.handleError(n);
      }
    }
    run() {
      this.watcher.run();
    }
    schedule() {
      this.scheduler.scheduleEffect(this);
    }
    destroy() {
      this.watcher.destroy(), this.unregisterOnDestroy?.();
    }
  };
function bv(e, t) {
  _t("NgSignals"), !t?.injector && Hp(bv);
  let n = t?.injector ?? k(zr),
    r = t?.manualCleanup !== !0 ? n.get(js) : null,
    o = new ds(
      n.get(Ev),
      e,
      typeof Zone > "u" ? null : Zone.current,
      r,
      n,
      t?.allowSignalWrites ?? !1,
    ),
    i = n.get(oo, null, { optional: !0 });
  return (
    !i || !(i._lView[D] & 8)
      ? o.watcher.notify()
      : (i._lView[hr] ??= []).push(o.watcher.notify),
    o
  );
}
var vd = null;
function ta() {
  return vd;
}
function tS(e) {
  vd ??= e;
}
var fd = class {};
var Dd = new R(""),
  ua = (() => {
    let t = class t {
      historyGo(r) {
        throw new Error("");
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = L({ token: t, factory: () => k(Mv), providedIn: "platform" }));
    let e = t;
    return e;
  })();
var Mv = (() => {
  let t = class t extends ua {
    constructor() {
      super(),
        (this._doc = k(Dd)),
        (this._location = window.location),
        (this._history = window.history);
    }
    getBaseHrefFromDOM() {
      return ta().getBaseHref(this._doc);
    }
    onPopState(r) {
      let o = ta().getGlobalEventTarget(this._doc, "window");
      return (
        o.addEventListener("popstate", r, !1),
        () => o.removeEventListener("popstate", r)
      );
    }
    onHashChange(r) {
      let o = ta().getGlobalEventTarget(this._doc, "window");
      return (
        o.addEventListener("hashchange", r, !1),
        () => o.removeEventListener("hashchange", r)
      );
    }
    get href() {
      return this._location.href;
    }
    get protocol() {
      return this._location.protocol;
    }
    get hostname() {
      return this._location.hostname;
    }
    get port() {
      return this._location.port;
    }
    get pathname() {
      return this._location.pathname;
    }
    get search() {
      return this._location.search;
    }
    get hash() {
      return this._location.hash;
    }
    set pathname(r) {
      this._location.pathname = r;
    }
    pushState(r, o, i) {
      this._history.pushState(r, o, i);
    }
    replaceState(r, o, i) {
      this._history.replaceState(r, o, i);
    }
    forward() {
      this._history.forward();
    }
    back() {
      this._history.back();
    }
    historyGo(r = 0) {
      this._history.go(r);
    }
    getState() {
      return this._history.state;
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵprov = L({ token: t, factory: () => new t(), providedIn: "platform" }));
  let e = t;
  return e;
})();
function ca(e, t) {
  if (e.length == 0) return t;
  if (t.length == 0) return e;
  let n = 0;
  return (
    e.endsWith("/") && n++,
    t.startsWith("/") && n++,
    n == 2 ? e + t.substring(1) : n == 1 ? e + t : e + "/" + t
  );
}
function pd(e) {
  let t = e.match(/#|\?|$/),
    n = (t && t.index) || e.length,
    r = n - (e[n - 1] === "/" ? 1 : 0);
  return e.slice(0, r) + e.slice(n);
}
function $e(e) {
  return e && e[0] !== "?" ? "?" + e : e;
}
var go = (() => {
    let t = class t {
      historyGo(r) {
        throw new Error("");
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = L({ token: t, factory: () => k(xv), providedIn: "root" }));
    let e = t;
    return e;
  })(),
  wd = new R(""),
  xv = (() => {
    let t = class t extends go {
      constructor(r, o) {
        super(),
          (this._platformLocation = r),
          (this._removeListenerFns = []),
          (this._baseHref =
            o ??
            this._platformLocation.getBaseHrefFromDOM() ??
            k(Dd).location?.origin ??
            "");
      }
      ngOnDestroy() {
        for (; this._removeListenerFns.length; )
          this._removeListenerFns.pop()();
      }
      onPopState(r) {
        this._removeListenerFns.push(
          this._platformLocation.onPopState(r),
          this._platformLocation.onHashChange(r),
        );
      }
      getBaseHref() {
        return this._baseHref;
      }
      prepareExternalUrl(r) {
        return ca(this._baseHref, r);
      }
      path(r = !1) {
        let o =
            this._platformLocation.pathname + $e(this._platformLocation.search),
          i = this._platformLocation.hash;
        return i && r ? `${o}${i}` : o;
      }
      pushState(r, o, i, s) {
        let a = this.prepareExternalUrl(i + $e(s));
        this._platformLocation.pushState(r, o, a);
      }
      replaceState(r, o, i, s) {
        let a = this.prepareExternalUrl(i + $e(s));
        this._platformLocation.replaceState(r, o, a);
      }
      forward() {
        this._platformLocation.forward();
      }
      back() {
        this._platformLocation.back();
      }
      getState() {
        return this._platformLocation.getState();
      }
      historyGo(r = 0) {
        this._platformLocation.historyGo?.(r);
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(Z(ua), Z(wd, 8));
    }),
      (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  nS = (() => {
    let t = class t extends go {
      constructor(r, o) {
        super(),
          (this._platformLocation = r),
          (this._baseHref = ""),
          (this._removeListenerFns = []),
          o != null && (this._baseHref = o);
      }
      ngOnDestroy() {
        for (; this._removeListenerFns.length; )
          this._removeListenerFns.pop()();
      }
      onPopState(r) {
        this._removeListenerFns.push(
          this._platformLocation.onPopState(r),
          this._platformLocation.onHashChange(r),
        );
      }
      getBaseHref() {
        return this._baseHref;
      }
      path(r = !1) {
        let o = this._platformLocation.hash ?? "#";
        return o.length > 0 ? o.substring(1) : o;
      }
      prepareExternalUrl(r) {
        let o = ca(this._baseHref, r);
        return o.length > 0 ? "#" + o : o;
      }
      pushState(r, o, i, s) {
        let a = this.prepareExternalUrl(i + $e(s));
        a.length == 0 && (a = this._platformLocation.pathname),
          this._platformLocation.pushState(r, o, a);
      }
      replaceState(r, o, i, s) {
        let a = this.prepareExternalUrl(i + $e(s));
        a.length == 0 && (a = this._platformLocation.pathname),
          this._platformLocation.replaceState(r, o, a);
      }
      forward() {
        this._platformLocation.forward();
      }
      back() {
        this._platformLocation.back();
      }
      getState() {
        return this._platformLocation.getState();
      }
      historyGo(r = 0) {
        this._platformLocation.historyGo?.(r);
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(Z(ua), Z(wd, 8));
    }),
      (t.ɵprov = L({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })(),
  Sv = (() => {
    let t = class t {
      constructor(r) {
        (this._subject = new dt()),
          (this._urlChangeListeners = []),
          (this._urlChangeSubscription = null),
          (this._locationStrategy = r);
        let o = this._locationStrategy.getBaseHref();
        (this._basePath = Av(pd(hd(o)))),
          this._locationStrategy.onPopState((i) => {
            this._subject.emit({
              url: this.path(!0),
              pop: !0,
              state: i.state,
              type: i.type,
            });
          });
      }
      ngOnDestroy() {
        this._urlChangeSubscription?.unsubscribe(),
          (this._urlChangeListeners = []);
      }
      path(r = !1) {
        return this.normalize(this._locationStrategy.path(r));
      }
      getState() {
        return this._locationStrategy.getState();
      }
      isCurrentPathEqualTo(r, o = "") {
        return this.path() == this.normalize(r + $e(o));
      }
      normalize(r) {
        return t.stripTrailingSlash(Nv(this._basePath, hd(r)));
      }
      prepareExternalUrl(r) {
        return (
          r && r[0] !== "/" && (r = "/" + r),
          this._locationStrategy.prepareExternalUrl(r)
        );
      }
      go(r, o = "", i = null) {
        this._locationStrategy.pushState(i, "", r, o),
          this._notifyUrlChangeListeners(this.prepareExternalUrl(r + $e(o)), i);
      }
      replaceState(r, o = "", i = null) {
        this._locationStrategy.replaceState(i, "", r, o),
          this._notifyUrlChangeListeners(this.prepareExternalUrl(r + $e(o)), i);
      }
      forward() {
        this._locationStrategy.forward();
      }
      back() {
        this._locationStrategy.back();
      }
      historyGo(r = 0) {
        this._locationStrategy.historyGo?.(r);
      }
      onUrlChange(r) {
        return (
          this._urlChangeListeners.push(r),
          (this._urlChangeSubscription ??= this.subscribe((o) => {
            this._notifyUrlChangeListeners(o.url, o.state);
          })),
          () => {
            let o = this._urlChangeListeners.indexOf(r);
            this._urlChangeListeners.splice(o, 1),
              this._urlChangeListeners.length === 0 &&
                (this._urlChangeSubscription?.unsubscribe(),
                (this._urlChangeSubscription = null));
          }
        );
      }
      _notifyUrlChangeListeners(r = "", o) {
        this._urlChangeListeners.forEach((i) => i(r, o));
      }
      subscribe(r, o, i) {
        return this._subject.subscribe({ next: r, error: o, complete: i });
      }
    };
    (t.normalizeQueryParams = $e),
      (t.joinWithSlash = ca),
      (t.stripTrailingSlash = pd),
      (t.ɵfac = function (o) {
        return new (o || t)(Z(go));
      }),
      (t.ɵprov = L({ token: t, factory: () => Tv(), providedIn: "root" }));
    let e = t;
    return e;
  })();
function Tv() {
  return new Sv(Z(go));
}
function Nv(e, t) {
  if (!e || !t.startsWith(e)) return t;
  let n = t.substring(e.length);
  return n === "" || ["/", ";", "?", "#"].includes(n[0]) ? n : t;
}
function hd(e) {
  return e.replace(/\/index.html$/, "");
}
function Av(e) {
  if (new RegExp("^(https?:)?//").test(e)) {
    let [, n] = e.split(/\/\/[^\/]+/);
    return n;
  }
  return e;
}
var X = (function (e) {
    return (
      (e[(e.Format = 0)] = "Format"), (e[(e.Standalone = 1)] = "Standalone"), e
    );
  })(X || {}),
  F = (function (e) {
    return (
      (e[(e.Narrow = 0)] = "Narrow"),
      (e[(e.Abbreviated = 1)] = "Abbreviated"),
      (e[(e.Wide = 2)] = "Wide"),
      (e[(e.Short = 3)] = "Short"),
      e
    );
  })(F || {}),
  ce = (function (e) {
    return (
      (e[(e.Short = 0)] = "Short"),
      (e[(e.Medium = 1)] = "Medium"),
      (e[(e.Long = 2)] = "Long"),
      (e[(e.Full = 3)] = "Full"),
      e
    );
  })(ce || {}),
  nt = {
    Decimal: 0,
    Group: 1,
    List: 2,
    PercentSign: 3,
    PlusSign: 4,
    MinusSign: 5,
    Exponential: 6,
    SuperscriptingExponent: 7,
    PerMille: 8,
    Infinity: 9,
    NaN: 10,
    TimeSeparator: 11,
    CurrencyDecimal: 12,
    CurrencyGroup: 13,
  };
function Ov(e) {
  return fe(e)[j.LocaleId];
}
function Fv(e, t, n) {
  let r = fe(e),
    o = [r[j.DayPeriodsFormat], r[j.DayPeriodsStandalone]],
    i = pe(o, t);
  return pe(i, n);
}
function Rv(e, t, n) {
  let r = fe(e),
    o = [r[j.DaysFormat], r[j.DaysStandalone]],
    i = pe(o, t);
  return pe(i, n);
}
function Pv(e, t, n) {
  let r = fe(e),
    o = [r[j.MonthsFormat], r[j.MonthsStandalone]],
    i = pe(o, t);
  return pe(i, n);
}
function kv(e, t) {
  let r = fe(e)[j.Eras];
  return pe(r, t);
}
function io(e, t) {
  let n = fe(e);
  return pe(n[j.DateFormat], t);
}
function so(e, t) {
  let n = fe(e);
  return pe(n[j.TimeFormat], t);
}
function ao(e, t) {
  let r = fe(e)[j.DateTimeFormat];
  return pe(r, t);
}
function mo(e, t) {
  let n = fe(e),
    r = n[j.NumberSymbols][t];
  if (typeof r > "u") {
    if (t === nt.CurrencyDecimal) return n[j.NumberSymbols][nt.Decimal];
    if (t === nt.CurrencyGroup) return n[j.NumberSymbols][nt.Group];
  }
  return r;
}
function Id(e) {
  if (!e[j.ExtraData])
    throw new Error(
      `Missing extra locale data for the locale "${e[j.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`,
    );
}
function Lv(e) {
  let t = fe(e);
  return (
    Id(t),
    (t[j.ExtraData][2] || []).map((r) =>
      typeof r == "string" ? na(r) : [na(r[0]), na(r[1])],
    )
  );
}
function jv(e, t, n) {
  let r = fe(e);
  Id(r);
  let o = [r[j.ExtraData][0], r[j.ExtraData][1]],
    i = pe(o, t) || [];
  return pe(i, n) || [];
}
function pe(e, t) {
  for (let n = t; n > -1; n--) if (typeof e[n] < "u") return e[n];
  throw new Error("Locale data API: locale data undefined");
}
function na(e) {
  let [t, n] = e.split(":");
  return { hours: +t, minutes: +n };
}
var Vv =
    /^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
  uo = {},
  Bv =
    /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,
  He = (function (e) {
    return (
      (e[(e.Short = 0)] = "Short"),
      (e[(e.ShortGMT = 1)] = "ShortGMT"),
      (e[(e.Long = 2)] = "Long"),
      (e[(e.Extended = 3)] = "Extended"),
      e
    );
  })(He || {}),
  A = (function (e) {
    return (
      (e[(e.FullYear = 0)] = "FullYear"),
      (e[(e.Month = 1)] = "Month"),
      (e[(e.Date = 2)] = "Date"),
      (e[(e.Hours = 3)] = "Hours"),
      (e[(e.Minutes = 4)] = "Minutes"),
      (e[(e.Seconds = 5)] = "Seconds"),
      (e[(e.FractionalSeconds = 6)] = "FractionalSeconds"),
      (e[(e.Day = 7)] = "Day"),
      e
    );
  })(A || {}),
  N = (function (e) {
    return (
      (e[(e.DayPeriods = 0)] = "DayPeriods"),
      (e[(e.Days = 1)] = "Days"),
      (e[(e.Months = 2)] = "Months"),
      (e[(e.Eras = 3)] = "Eras"),
      e
    );
  })(N || {});
function $v(e, t, n, r) {
  let o = Zv(e);
  t = Be(n, t) || t;
  let s = [],
    a;
  for (; t; )
    if (((a = Bv.exec(t)), a)) {
      s = s.concat(a.slice(1));
      let l = s.pop();
      if (!l) break;
      t = l;
    } else {
      s.push(t);
      break;
    }
  let u = o.getTimezoneOffset();
  r && ((u = Cd(r, u)), (o = Qv(o, r, !0)));
  let c = "";
  return (
    s.forEach((l) => {
      let d = qv(l);
      c += d
        ? d(o, n, u)
        : l === "''"
          ? "'"
          : l.replace(/(^'|'$)/g, "").replace(/''/g, "'");
    }),
    c
  );
}
function ho(e, t, n) {
  let r = new Date(0);
  return r.setFullYear(e, t, n), r.setHours(0, 0, 0), r;
}
function Be(e, t) {
  let n = Ov(e);
  if (((uo[n] ??= {}), uo[n][t])) return uo[n][t];
  let r = "";
  switch (t) {
    case "shortDate":
      r = io(e, ce.Short);
      break;
    case "mediumDate":
      r = io(e, ce.Medium);
      break;
    case "longDate":
      r = io(e, ce.Long);
      break;
    case "fullDate":
      r = io(e, ce.Full);
      break;
    case "shortTime":
      r = so(e, ce.Short);
      break;
    case "mediumTime":
      r = so(e, ce.Medium);
      break;
    case "longTime":
      r = so(e, ce.Long);
      break;
    case "fullTime":
      r = so(e, ce.Full);
      break;
    case "short":
      let o = Be(e, "shortTime"),
        i = Be(e, "shortDate");
      r = co(ao(e, ce.Short), [o, i]);
      break;
    case "medium":
      let s = Be(e, "mediumTime"),
        a = Be(e, "mediumDate");
      r = co(ao(e, ce.Medium), [s, a]);
      break;
    case "long":
      let u = Be(e, "longTime"),
        c = Be(e, "longDate");
      r = co(ao(e, ce.Long), [u, c]);
      break;
    case "full":
      let l = Be(e, "fullTime"),
        d = Be(e, "fullDate");
      r = co(ao(e, ce.Full), [l, d]);
      break;
  }
  return r && (uo[n][t] = r), r;
}
function co(e, t) {
  return (
    t &&
      (e = e.replace(/\{([^}]+)}/g, function (n, r) {
        return t != null && r in t ? t[r] : n;
      })),
    e
  );
}
function _e(e, t, n = "-", r, o) {
  let i = "";
  (e < 0 || (o && e <= 0)) && (o ? (e = -e + 1) : ((e = -e), (i = n)));
  let s = String(e);
  for (; s.length < t; ) s = "0" + s;
  return r && (s = s.slice(s.length - t)), i + s;
}
function Hv(e, t) {
  return _e(e, 3).substring(0, t);
}
function B(e, t, n = 0, r = !1, o = !1) {
  return function (i, s) {
    let a = Uv(e, i);
    if (((n > 0 || a > -n) && (a += n), e === A.Hours))
      a === 0 && n === -12 && (a = 12);
    else if (e === A.FractionalSeconds) return Hv(a, t);
    let u = mo(s, nt.MinusSign);
    return _e(a, t, u, r, o);
  };
}
function Uv(e, t) {
  switch (e) {
    case A.FullYear:
      return t.getFullYear();
    case A.Month:
      return t.getMonth();
    case A.Date:
      return t.getDate();
    case A.Hours:
      return t.getHours();
    case A.Minutes:
      return t.getMinutes();
    case A.Seconds:
      return t.getSeconds();
    case A.FractionalSeconds:
      return t.getMilliseconds();
    case A.Day:
      return t.getDay();
    default:
      throw new Error(`Unknown DateType value "${e}".`);
  }
}
function P(e, t, n = X.Format, r = !1) {
  return function (o, i) {
    return Gv(o, i, e, t, n, r);
  };
}
function Gv(e, t, n, r, o, i) {
  switch (n) {
    case N.Months:
      return Pv(t, o, r)[e.getMonth()];
    case N.Days:
      return Rv(t, o, r)[e.getDay()];
    case N.DayPeriods:
      let s = e.getHours(),
        a = e.getMinutes();
      if (i) {
        let c = Lv(t),
          l = jv(t, o, r),
          d = c.findIndex((f) => {
            if (Array.isArray(f)) {
              let [p, h] = f,
                g = s >= p.hours && a >= p.minutes,
                I = s < h.hours || (s === h.hours && a < h.minutes);
              if (p.hours < h.hours) {
                if (g && I) return !0;
              } else if (g || I) return !0;
            } else if (f.hours === s && f.minutes === a) return !0;
            return !1;
          });
        if (d !== -1) return l[d];
      }
      return Fv(t, o, r)[s < 12 ? 0 : 1];
    case N.Eras:
      return kv(t, r)[e.getFullYear() <= 0 ? 0 : 1];
    default:
      let u = n;
      throw new Error(`unexpected translation type ${u}`);
  }
}
function lo(e) {
  return function (t, n, r) {
    let o = -1 * r,
      i = mo(n, nt.MinusSign),
      s = o > 0 ? Math.floor(o / 60) : Math.ceil(o / 60);
    switch (e) {
      case He.Short:
        return (o >= 0 ? "+" : "") + _e(s, 2, i) + _e(Math.abs(o % 60), 2, i);
      case He.ShortGMT:
        return "GMT" + (o >= 0 ? "+" : "") + _e(s, 1, i);
      case He.Long:
        return (
          "GMT" +
          (o >= 0 ? "+" : "") +
          _e(s, 2, i) +
          ":" +
          _e(Math.abs(o % 60), 2, i)
        );
      case He.Extended:
        return r === 0
          ? "Z"
          : (o >= 0 ? "+" : "") +
              _e(s, 2, i) +
              ":" +
              _e(Math.abs(o % 60), 2, i);
      default:
        throw new Error(`Unknown zone width "${e}"`);
    }
  };
}
var zv = 0,
  po = 4;
function Wv(e) {
  let t = ho(e, zv, 1).getDay();
  return ho(e, 0, 1 + (t <= po ? po : po + 7) - t);
}
function Ed(e) {
  let t = e.getDay(),
    n = t === 0 ? -3 : po - t;
  return ho(e.getFullYear(), e.getMonth(), e.getDate() + n);
}
function ra(e, t = !1) {
  return function (n, r) {
    let o;
    if (t) {
      let i = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1,
        s = n.getDate();
      o = 1 + Math.floor((s + i) / 7);
    } else {
      let i = Ed(n),
        s = Wv(i.getFullYear()),
        a = i.getTime() - s.getTime();
      o = 1 + Math.round(a / 6048e5);
    }
    return _e(o, e, mo(r, nt.MinusSign));
  };
}
function fo(e, t = !1) {
  return function (n, r) {
    let i = Ed(n).getFullYear();
    return _e(i, e, mo(r, nt.MinusSign), t);
  };
}
var oa = {};
function qv(e) {
  if (oa[e]) return oa[e];
  let t;
  switch (e) {
    case "G":
    case "GG":
    case "GGG":
      t = P(N.Eras, F.Abbreviated);
      break;
    case "GGGG":
      t = P(N.Eras, F.Wide);
      break;
    case "GGGGG":
      t = P(N.Eras, F.Narrow);
      break;
    case "y":
      t = B(A.FullYear, 1, 0, !1, !0);
      break;
    case "yy":
      t = B(A.FullYear, 2, 0, !0, !0);
      break;
    case "yyy":
      t = B(A.FullYear, 3, 0, !1, !0);
      break;
    case "yyyy":
      t = B(A.FullYear, 4, 0, !1, !0);
      break;
    case "Y":
      t = fo(1);
      break;
    case "YY":
      t = fo(2, !0);
      break;
    case "YYY":
      t = fo(3);
      break;
    case "YYYY":
      t = fo(4);
      break;
    case "M":
    case "L":
      t = B(A.Month, 1, 1);
      break;
    case "MM":
    case "LL":
      t = B(A.Month, 2, 1);
      break;
    case "MMM":
      t = P(N.Months, F.Abbreviated);
      break;
    case "MMMM":
      t = P(N.Months, F.Wide);
      break;
    case "MMMMM":
      t = P(N.Months, F.Narrow);
      break;
    case "LLL":
      t = P(N.Months, F.Abbreviated, X.Standalone);
      break;
    case "LLLL":
      t = P(N.Months, F.Wide, X.Standalone);
      break;
    case "LLLLL":
      t = P(N.Months, F.Narrow, X.Standalone);
      break;
    case "w":
      t = ra(1);
      break;
    case "ww":
      t = ra(2);
      break;
    case "W":
      t = ra(1, !0);
      break;
    case "d":
      t = B(A.Date, 1);
      break;
    case "dd":
      t = B(A.Date, 2);
      break;
    case "c":
    case "cc":
      t = B(A.Day, 1);
      break;
    case "ccc":
      t = P(N.Days, F.Abbreviated, X.Standalone);
      break;
    case "cccc":
      t = P(N.Days, F.Wide, X.Standalone);
      break;
    case "ccccc":
      t = P(N.Days, F.Narrow, X.Standalone);
      break;
    case "cccccc":
      t = P(N.Days, F.Short, X.Standalone);
      break;
    case "E":
    case "EE":
    case "EEE":
      t = P(N.Days, F.Abbreviated);
      break;
    case "EEEE":
      t = P(N.Days, F.Wide);
      break;
    case "EEEEE":
      t = P(N.Days, F.Narrow);
      break;
    case "EEEEEE":
      t = P(N.Days, F.Short);
      break;
    case "a":
    case "aa":
    case "aaa":
      t = P(N.DayPeriods, F.Abbreviated);
      break;
    case "aaaa":
      t = P(N.DayPeriods, F.Wide);
      break;
    case "aaaaa":
      t = P(N.DayPeriods, F.Narrow);
      break;
    case "b":
    case "bb":
    case "bbb":
      t = P(N.DayPeriods, F.Abbreviated, X.Standalone, !0);
      break;
    case "bbbb":
      t = P(N.DayPeriods, F.Wide, X.Standalone, !0);
      break;
    case "bbbbb":
      t = P(N.DayPeriods, F.Narrow, X.Standalone, !0);
      break;
    case "B":
    case "BB":
    case "BBB":
      t = P(N.DayPeriods, F.Abbreviated, X.Format, !0);
      break;
    case "BBBB":
      t = P(N.DayPeriods, F.Wide, X.Format, !0);
      break;
    case "BBBBB":
      t = P(N.DayPeriods, F.Narrow, X.Format, !0);
      break;
    case "h":
      t = B(A.Hours, 1, -12);
      break;
    case "hh":
      t = B(A.Hours, 2, -12);
      break;
    case "H":
      t = B(A.Hours, 1);
      break;
    case "HH":
      t = B(A.Hours, 2);
      break;
    case "m":
      t = B(A.Minutes, 1);
      break;
    case "mm":
      t = B(A.Minutes, 2);
      break;
    case "s":
      t = B(A.Seconds, 1);
      break;
    case "ss":
      t = B(A.Seconds, 2);
      break;
    case "S":
      t = B(A.FractionalSeconds, 1);
      break;
    case "SS":
      t = B(A.FractionalSeconds, 2);
      break;
    case "SSS":
      t = B(A.FractionalSeconds, 3);
      break;
    case "Z":
    case "ZZ":
    case "ZZZ":
      t = lo(He.Short);
      break;
    case "ZZZZZ":
      t = lo(He.Extended);
      break;
    case "O":
    case "OO":
    case "OOO":
    case "z":
    case "zz":
    case "zzz":
      t = lo(He.ShortGMT);
      break;
    case "OOOO":
    case "ZZZZ":
    case "zzzz":
      t = lo(He.Long);
      break;
    default:
      return null;
  }
  return (oa[e] = t), t;
}
function Cd(e, t) {
  e = e.replace(/:/g, "");
  let n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
  return isNaN(n) ? t : n;
}
function Yv(e, t) {
  return (e = new Date(e.getTime())), e.setMinutes(e.getMinutes() + t), e;
}
function Qv(e, t, n) {
  let r = n ? -1 : 1,
    o = e.getTimezoneOffset(),
    i = Cd(t, o);
  return Yv(e, r * (i - o));
}
function Zv(e) {
  if (gd(e)) return e;
  if (typeof e == "number" && !isNaN(e)) return new Date(e);
  if (typeof e == "string") {
    if (((e = e.trim()), /^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e))) {
      let [o, i = 1, s = 1] = e.split("-").map((a) => +a);
      return ho(o, i - 1, s);
    }
    let n = parseFloat(e);
    if (!isNaN(e - n)) return new Date(n);
    let r;
    if ((r = e.match(Vv))) return Kv(r);
  }
  let t = new Date(e);
  if (!gd(t)) throw new Error(`Unable to convert "${e}" into a date`);
  return t;
}
function Kv(e) {
  let t = new Date(0),
    n = 0,
    r = 0,
    o = e[8] ? t.setUTCFullYear : t.setFullYear,
    i = e[8] ? t.setUTCHours : t.setHours;
  e[9] && ((n = Number(e[9] + e[10])), (r = Number(e[9] + e[11]))),
    o.call(t, Number(e[1]), Number(e[2]) - 1, Number(e[3]));
  let s = Number(e[4] || 0) - n,
    a = Number(e[5] || 0) - r,
    u = Number(e[6] || 0),
    c = Math.floor(parseFloat("0." + (e[7] || 0)) * 1e3);
  return i.call(t, s, a, u, c), t;
}
function gd(e) {
  return e instanceof Date && !isNaN(e.valueOf());
}
function rS(e, t) {
  t = encodeURIComponent(t);
  for (let n of e.split(";")) {
    let r = n.indexOf("="),
      [o, i] = r == -1 ? [n, ""] : [n.slice(0, r), n.slice(r + 1)];
    if (o.trim() === t) return decodeURIComponent(i);
  }
  return null;
}
var ia = /\s+/,
  md = [],
  oS = (() => {
    let t = class t {
      constructor(r, o) {
        (this._ngEl = r),
          (this._renderer = o),
          (this.initialClasses = md),
          (this.stateMap = new Map());
      }
      set klass(r) {
        this.initialClasses = r != null ? r.trim().split(ia) : md;
      }
      set ngClass(r) {
        this.rawClass = typeof r == "string" ? r.trim().split(ia) : r;
      }
      ngDoCheck() {
        for (let o of this.initialClasses) this._updateState(o, !0);
        let r = this.rawClass;
        if (Array.isArray(r) || r instanceof Set)
          for (let o of r) this._updateState(o, !0);
        else if (r != null)
          for (let o of Object.keys(r)) this._updateState(o, !!r[o]);
        this._applyStateDiff();
      }
      _updateState(r, o) {
        let i = this.stateMap.get(r);
        i !== void 0
          ? (i.enabled !== o && ((i.changed = !0), (i.enabled = o)),
            (i.touched = !0))
          : this.stateMap.set(r, { enabled: o, changed: !0, touched: !0 });
      }
      _applyStateDiff() {
        for (let r of this.stateMap) {
          let o = r[0],
            i = r[1];
          i.changed
            ? (this._toggleClass(o, i.enabled), (i.changed = !1))
            : i.touched ||
              (i.enabled && this._toggleClass(o, !1), this.stateMap.delete(o)),
            (i.touched = !1);
        }
      }
      _toggleClass(r, o) {
        (r = r.trim()),
          r.length > 0 &&
            r.split(ia).forEach((i) => {
              o
                ? this._renderer.addClass(this._ngEl.nativeElement, i)
                : this._renderer.removeClass(this._ngEl.nativeElement, i);
            });
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(se(tt), se(eo));
    }),
      (t.ɵdir = vs({
        type: t,
        selectors: [["", "ngClass", ""]],
        inputs: { klass: [Ze.None, "class", "klass"], ngClass: "ngClass" },
        standalone: !0,
      }));
    let e = t;
    return e;
  })();
var iS = (() => {
  let t = class t {
    constructor(r, o, i) {
      (this._ngEl = r),
        (this._differs = o),
        (this._renderer = i),
        (this._ngStyle = null),
        (this._differ = null);
    }
    set ngStyle(r) {
      (this._ngStyle = r),
        !this._differ && r && (this._differ = this._differs.find(r).create());
    }
    ngDoCheck() {
      if (this._differ) {
        let r = this._differ.diff(this._ngStyle);
        r && this._applyChanges(r);
      }
    }
    _setStyle(r, o) {
      let [i, s] = r.split("."),
        a = i.indexOf("-") === -1 ? void 0 : In.DashCase;
      o != null
        ? this._renderer.setStyle(
            this._ngEl.nativeElement,
            i,
            s ? `${o}${s}` : o,
            a,
          )
        : this._renderer.removeStyle(this._ngEl.nativeElement, i, a);
    }
    _applyChanges(r) {
      r.forEachRemovedItem((o) => this._setStyle(o.key, null)),
        r.forEachAddedItem((o) => this._setStyle(o.key, o.currentValue)),
        r.forEachChangedItem((o) => this._setStyle(o.key, o.currentValue));
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)(se(tt), se(Xs), se(eo));
  }),
    (t.ɵdir = vs({
      type: t,
      selectors: [["", "ngStyle", ""]],
      inputs: { ngStyle: "ngStyle" },
      standalone: !0,
    }));
  let e = t;
  return e;
})();
function bd(e, t) {
  return new T(2100, !1);
}
var sa = class {
    createSubscription(t, n) {
      return ea(() =>
        t.subscribe({
          next: n,
          error: (r) => {
            throw r;
          },
        }),
      );
    }
    dispose(t) {
      ea(() => t.unsubscribe());
    }
  },
  aa = class {
    createSubscription(t, n) {
      return t.then(n, (r) => {
        throw r;
      });
    }
    dispose(t) {}
  },
  Jv = new aa(),
  Xv = new sa(),
  sS = (() => {
    let t = class t {
      constructor(r) {
        (this._latestValue = null),
          (this.markForCheckOnValueUpdate = !0),
          (this._subscription = null),
          (this._obj = null),
          (this._strategy = null),
          (this._ref = r);
      }
      ngOnDestroy() {
        this._subscription && this._dispose(), (this._ref = null);
      }
      transform(r) {
        if (!this._obj) {
          if (r)
            try {
              (this.markForCheckOnValueUpdate = !1), this._subscribe(r);
            } finally {
              this.markForCheckOnValueUpdate = !0;
            }
          return this._latestValue;
        }
        return r !== this._obj
          ? (this._dispose(), this.transform(r))
          : this._latestValue;
      }
      _subscribe(r) {
        (this._obj = r),
          (this._strategy = this._selectStrategy(r)),
          (this._subscription = this._strategy.createSubscription(r, (o) =>
            this._updateLatestValue(r, o),
          ));
      }
      _selectStrategy(r) {
        if (no(r)) return Jv;
        if (Js(r)) return Xv;
        throw bd(t, r);
      }
      _dispose() {
        this._strategy.dispose(this._subscription),
          (this._latestValue = null),
          (this._subscription = null),
          (this._obj = null);
      }
      _updateLatestValue(r, o) {
        r === this._obj &&
          ((this._latestValue = o),
          this.markForCheckOnValueUpdate && this._ref?.markForCheck());
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(se(oo, 16));
    }),
      (t.ɵpipe = Ds({ name: "async", type: t, pure: !1, standalone: !0 }));
    let e = t;
    return e;
  })();
var eD = "mediumDate",
  tD = new R(""),
  nD = new R(""),
  aS = (() => {
    let t = class t {
      constructor(r, o, i) {
        (this.locale = r),
          (this.defaultTimezone = o),
          (this.defaultOptions = i);
      }
      transform(r, o, i, s) {
        if (r == null || r === "" || r !== r) return null;
        try {
          let a = o ?? this.defaultOptions?.dateFormat ?? eD,
            u =
              i ??
              this.defaultOptions?.timezone ??
              this.defaultTimezone ??
              void 0;
          return $v(r, a, s || this.locale, u);
        } catch (a) {
          throw bd(t, a.message);
        }
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(se(ro, 16), se(tD, 24), se(nD, 24));
    }),
      (t.ɵpipe = Ds({ name: "date", type: t, pure: !0, standalone: !0 }));
    let e = t;
    return e;
  })();
var uS = (() => {
    let t = class t {};
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵmod = nc({ type: t })),
      (t.ɵinj = Gu({}));
    let e = t;
    return e;
  })(),
  rD = "browser",
  oD = "server";
function cS(e) {
  return e === rD;
}
function lS(e) {
  return e === oD;
}
var yd = class {};
var rt = (function (e) {
    return (
      (e[(e.State = 0)] = "State"),
      (e[(e.Transition = 1)] = "Transition"),
      (e[(e.Sequence = 2)] = "Sequence"),
      (e[(e.Group = 3)] = "Group"),
      (e[(e.Animate = 4)] = "Animate"),
      (e[(e.Keyframes = 5)] = "Keyframes"),
      (e[(e.Style = 6)] = "Style"),
      (e[(e.Trigger = 7)] = "Trigger"),
      (e[(e.Reference = 8)] = "Reference"),
      (e[(e.AnimateChild = 9)] = "AnimateChild"),
      (e[(e.AnimateRef = 10)] = "AnimateRef"),
      (e[(e.Query = 11)] = "Query"),
      (e[(e.Stagger = 12)] = "Stagger"),
      e
    );
  })(rt || {}),
  pS = "*";
function hS(e, t) {
  return { type: rt.Trigger, name: e, definitions: t, options: {} };
}
function gS(e, t = null) {
  return { type: rt.Animate, styles: t, timings: e };
}
function mS(e, t = null) {
  return { type: rt.Group, steps: e, options: t };
}
function yS(e, t = null) {
  return { type: rt.Sequence, steps: e, options: t };
}
function vS(e) {
  return { type: rt.Style, styles: e, offset: null };
}
function DS(e, t, n) {
  return { type: rt.State, name: e, styles: t, options: n };
}
function wS(e, t, n = null) {
  return { type: rt.Transition, expr: e, animation: t, options: n };
}
var _d = class {
    constructor(t = 0, n = 0) {
      (this._onDoneFns = []),
        (this._onStartFns = []),
        (this._onDestroyFns = []),
        (this._originalOnDoneFns = []),
        (this._originalOnStartFns = []),
        (this._started = !1),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._position = 0),
        (this.parentPlayer = null),
        (this.totalTime = t + n);
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach((t) => t()),
        (this._onDoneFns = []));
    }
    onStart(t) {
      this._originalOnStartFns.push(t), this._onStartFns.push(t);
    }
    onDone(t) {
      this._originalOnDoneFns.push(t), this._onDoneFns.push(t);
    }
    onDestroy(t) {
      this._onDestroyFns.push(t);
    }
    hasStarted() {
      return this._started;
    }
    init() {}
    play() {
      this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
        (this._started = !0);
    }
    triggerMicrotask() {
      queueMicrotask(() => this._onFinish());
    }
    _onStart() {
      this._onStartFns.forEach((t) => t()), (this._onStartFns = []);
    }
    pause() {}
    restart() {}
    finish() {
      this._onFinish();
    }
    destroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this.hasStarted() || this._onStart(),
        this.finish(),
        this._onDestroyFns.forEach((t) => t()),
        (this._onDestroyFns = []));
    }
    reset() {
      (this._started = !1),
        (this._finished = !1),
        (this._onStartFns = this._originalOnStartFns),
        (this._onDoneFns = this._originalOnDoneFns);
    }
    setPosition(t) {
      this._position = this.totalTime ? t * this.totalTime : 1;
    }
    getPosition() {
      return this.totalTime ? this._position / this.totalTime : 1;
    }
    triggerCallback(t) {
      let n = t == "start" ? this._onStartFns : this._onDoneFns;
      n.forEach((r) => r()), (n.length = 0);
    }
  },
  Md = class {
    constructor(t) {
      (this._onDoneFns = []),
        (this._onStartFns = []),
        (this._finished = !1),
        (this._started = !1),
        (this._destroyed = !1),
        (this._onDestroyFns = []),
        (this.parentPlayer = null),
        (this.totalTime = 0),
        (this.players = t);
      let n = 0,
        r = 0,
        o = 0,
        i = this.players.length;
      i == 0
        ? queueMicrotask(() => this._onFinish())
        : this.players.forEach((s) => {
            s.onDone(() => {
              ++n == i && this._onFinish();
            }),
              s.onDestroy(() => {
                ++r == i && this._onDestroy();
              }),
              s.onStart(() => {
                ++o == i && this._onStart();
              });
          }),
        (this.totalTime = this.players.reduce(
          (s, a) => Math.max(s, a.totalTime),
          0,
        ));
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach((t) => t()),
        (this._onDoneFns = []));
    }
    init() {
      this.players.forEach((t) => t.init());
    }
    onStart(t) {
      this._onStartFns.push(t);
    }
    _onStart() {
      this.hasStarted() ||
        ((this._started = !0),
        this._onStartFns.forEach((t) => t()),
        (this._onStartFns = []));
    }
    onDone(t) {
      this._onDoneFns.push(t);
    }
    onDestroy(t) {
      this._onDestroyFns.push(t);
    }
    hasStarted() {
      return this._started;
    }
    play() {
      this.parentPlayer || this.init(),
        this._onStart(),
        this.players.forEach((t) => t.play());
    }
    pause() {
      this.players.forEach((t) => t.pause());
    }
    restart() {
      this.players.forEach((t) => t.restart());
    }
    finish() {
      this._onFinish(), this.players.forEach((t) => t.finish());
    }
    destroy() {
      this._onDestroy();
    }
    _onDestroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this._onFinish(),
        this.players.forEach((t) => t.destroy()),
        this._onDestroyFns.forEach((t) => t()),
        (this._onDestroyFns = []));
    }
    reset() {
      this.players.forEach((t) => t.reset()),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._started = !1);
    }
    setPosition(t) {
      let n = t * this.totalTime;
      this.players.forEach((r) => {
        let o = r.totalTime ? Math.min(1, n / r.totalTime) : 1;
        r.setPosition(o);
      });
    }
    getPosition() {
      let t = this.players.reduce(
        (n, r) => (n === null || r.totalTime > n.totalTime ? r : n),
        null,
      );
      return t != null ? t.getPosition() : 0;
    }
    beforeDestroy() {
      this.players.forEach((t) => {
        t.beforeDestroy && t.beforeDestroy();
      });
    }
    triggerCallback(t) {
      let n = t == "start" ? this._onStartFns : this._onDoneFns;
      n.forEach((r) => r()), (n.length = 0);
    }
  },
  IS = "!";
export {
  Ue as a,
  Ge as b,
  iD as c,
  sD as d,
  H as e,
  $d as f,
  M as g,
  Ao as h,
  Oo as i,
  te as j,
  an as k,
  Fo as l,
  Gd as m,
  Pe as n,
  ln as o,
  Se as p,
  Po as q,
  ko as r,
  Jd as s,
  ut as t,
  ef as u,
  ne as v,
  lf as w,
  ye as x,
  jt as y,
  ff as z,
  pf as A,
  jo as B,
  wf as C,
  If as D,
  ct as E,
  Ef as F,
  Vo as G,
  Cf as H,
  bf as I,
  dn as J,
  Bt as K,
  Bo as L,
  $o as M,
  _f as N,
  Mf as O,
  tu as P,
  Uo as Q,
  Tf as R,
  nu as S,
  Nf as T,
  Go as U,
  Af as V,
  Of as W,
  Ff as X,
  Rf as Y,
  Pf as Z,
  kf as _,
  Lf as $,
  ru as aa,
  jf as ba,
  ou as ca,
  iu as da,
  T as ea,
  Hu as fa,
  L as ga,
  Gu as ha,
  HM as ia,
  R as ja,
  S as ka,
  Z as la,
  k as ma,
  UM as na,
  Cr as oa,
  hn as pa,
  Ze as qa,
  GM as ra,
  nc as sa,
  vs as ta,
  Ds as ua,
  Np as va,
  dc as wa,
  Ke as xa,
  zM as ya,
  Hp as za,
  vc as Aa,
  WM as Ba,
  qM as Ca,
  YM as Da,
  zr as Ea,
  It as Fa,
  js as Ga,
  tt as Ha,
  dt as Ia,
  bi as Ja,
  QM as Ka,
  ZM as La,
  Uh as Ma,
  Gh as Na,
  KM as Oa,
  JM as Pa,
  XM as Qa,
  In as Ra,
  ex as Sa,
  se as Ta,
  tx as Ua,
  bn as Va,
  Ni as Wa,
  Xr as Xa,
  Fi as Ya,
  eo as Za,
  _t as _a,
  Ie as $a,
  to as ab,
  ix as bb,
  sx as cb,
  Gm as db,
  Zm as eb,
  Ui as fb,
  Km as gb,
  Ks as hb,
  Wi as ib,
  ny as jb,
  gy as kb,
  Zl as lb,
  my as mb,
  ax as nb,
  ux as ob,
  cx as pb,
  lx as qb,
  dx as rb,
  fx as sb,
  nd as tb,
  rd as ub,
  Ay as vb,
  px as wb,
  Fy as xb,
  Vy as yb,
  hx as zb,
  gx as Ab,
  mx as Bb,
  yx as Cb,
  vx as Db,
  Dx as Eb,
  wx as Fb,
  Ix as Gb,
  Ex as Hb,
  zy as Ib,
  od as Jb,
  Wy as Kb,
  Cx as Lb,
  bx as Mb,
  _x as Nb,
  Mx as Ob,
  xx as Pb,
  Sx as Qb,
  Tx as Rb,
  no as Sb,
  nv as Tb,
  ld as Ub,
  Nx as Vb,
  Ax as Wb,
  oo as Xb,
  Ox as Yb,
  wv as Zb,
  Iv as _b,
  Fx as $b,
  bv as ac,
  ta as bc,
  tS as cc,
  fd as dc,
  Dd as ec,
  go as fc,
  nS as gc,
  Sv as hc,
  rS as ic,
  oS as jc,
  iS as kc,
  sS as lc,
  aS as mc,
  uS as nc,
  rD as oc,
  cS as pc,
  lS as qc,
  yd as rc,
  rt as sc,
  pS as tc,
  hS as uc,
  gS as vc,
  mS as wc,
  yS as xc,
  vS as yc,
  DS as zc,
  wS as Ac,
  _d as Bc,
  Md as Cc,
  IS as Dc,
};
