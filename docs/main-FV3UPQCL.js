import {
  $ as pt,
  $a as M,
  $b as Wn,
  A as Ga,
  Aa as Ke,
  Ab as qt,
  Ac as xt,
  B as Lt,
  Ba as Ht,
  Bb as _t,
  C as Ya,
  Ca as Wt,
  Cb as Fi,
  D as ve,
  Da as je,
  Db as yt,
  E as z,
  Ea as nt,
  Eb as Ue,
  F as co,
  Fa as gt,
  Fb as Be,
  G as me,
  Ga as go,
  Gb as Eo,
  H as Le,
  Ha as X,
  Hb as ne,
  I as jt,
  Ia as Y,
  Ib as ze,
  J as uo,
  Ja as vo,
  Jb as Xt,
  K as ie,
  Ka as sl,
  Kb as fl,
  L as qa,
  La as Nn,
  Lb as Se,
  M as Xa,
  Ma as al,
  Mb as G,
  N as Za,
  Na as Qe,
  Nb as pl,
  O as Ka,
  Oa as Ve,
  Ob as ee,
  P as Vt,
  Pa as Ri,
  Pb as ae,
  Q as Ut,
  Qa as Ln,
  Qb as bt,
  R as ft,
  Ra as Oi,
  Rb as $n,
  S as tt,
  Sa as j,
  Sb as Hn,
  T as ho,
  Ta as y,
  Tb as So,
  U as fo,
  Ua as _o,
  Ub as Zt,
  V as Qa,
  Va as Ti,
  Vb as Io,
  W as Ja,
  Wa as ll,
  Wb as ki,
  X as el,
  Xa as yo,
  Xb as ye,
  Y as Bt,
  Ya as jn,
  Yb as ml,
  Z as tl,
  Za as Vn,
  Zb as be,
  _ as Di,
  _a as bo,
  _b as Do,
  a as f,
  aa as K,
  ab as vt,
  ac as Ao,
  b as E,
  ba as Ce,
  bb as xo,
  bc as Kt,
  ca as $,
  cb as wo,
  cc as gl,
  d as Ba,
  da as it,
  db as Je,
  dc as vl,
  e as Oe,
  ea as H,
  eb as Ee,
  ec as N,
  f as za,
  fa as zt,
  fb as cl,
  fc as _l,
  g as re,
  ga as v,
  gb as dl,
  gc as yl,
  h as so,
  ha as F,
  hb as Un,
  hc as Qt,
  i as ao,
  ia as il,
  ib as oe,
  ic as Gn,
  j as L,
  ja as g,
  jb as Te,
  jc as bl,
  k as J,
  ka as po,
  kb as se,
  kc as xl,
  l as $a,
  la as h,
  lb as Bn,
  lc as $e,
  m as Fn,
  ma as m,
  mb as Me,
  mc as Jt,
  n as Ne,
  na as mo,
  nb as ul,
  nc as Pi,
  o as kn,
  oa as mt,
  ob as _e,
  oc as wl,
  p as fe,
  pa as Ai,
  pb as zn,
  pc as Cl,
  q as C,
  qa as T,
  qb as hl,
  qc as Ro,
  r as Si,
  ra as W,
  rb as Gt,
  rc as Yn,
  s as lo,
  sa as k,
  sb as Yt,
  t as Ha,
  ta as Q,
  tb as A,
  u as Wa,
  ua as nl,
  ub as O,
  uc as ei,
  v as w,
  va as ge,
  vb as V,
  vc as rt,
  w as Ii,
  wa as rl,
  wb as Mi,
  wc as El,
  x as pe,
  xa as $t,
  xb as Co,
  y as Pn,
  ya as Ze,
  yb as de,
  yc as Fe,
  z as Nt,
  za as ol,
  zb as ue,
  zc as Sl,
} from "./chunk-FIDQSJ5Q.js";
var Li = class {},
  Xn = class {},
  wt = class t {
    constructor(e) {
      (this.normalizedNames = new Map()),
        (this.lazyUpdate = null),
        e
          ? typeof e == "string"
            ? (this.lazyInit = () => {
                (this.headers = new Map()),
                  e
                    .split(
                      `
`,
                    )
                    .forEach((r) => {
                      let i = r.indexOf(":");
                      if (i > 0) {
                        let n = r.slice(0, i),
                          o = n.toLowerCase(),
                          s = r.slice(i + 1).trim();
                        this.maybeSetNormalizedName(n, o),
                          this.headers.has(o)
                            ? this.headers.get(o).push(s)
                            : this.headers.set(o, [s]);
                      }
                    });
              })
            : typeof Headers < "u" && e instanceof Headers
              ? ((this.headers = new Map()),
                e.forEach((r, i) => {
                  this.setHeaderEntries(i, r);
                }))
              : (this.lazyInit = () => {
                  (this.headers = new Map()),
                    Object.entries(e).forEach(([r, i]) => {
                      this.setHeaderEntries(r, i);
                    });
                })
          : (this.headers = new Map());
    }
    has(e) {
      return this.init(), this.headers.has(e.toLowerCase());
    }
    get(e) {
      this.init();
      let r = this.headers.get(e.toLowerCase());
      return r && r.length > 0 ? r[0] : null;
    }
    keys() {
      return this.init(), Array.from(this.normalizedNames.values());
    }
    getAll(e) {
      return this.init(), this.headers.get(e.toLowerCase()) || null;
    }
    append(e, r) {
      return this.clone({ name: e, value: r, op: "a" });
    }
    set(e, r) {
      return this.clone({ name: e, value: r, op: "s" });
    }
    delete(e, r) {
      return this.clone({ name: e, value: r, op: "d" });
    }
    maybeSetNormalizedName(e, r) {
      this.normalizedNames.has(r) || this.normalizedNames.set(r, e);
    }
    init() {
      this.lazyInit &&
        (this.lazyInit instanceof t
          ? this.copyFrom(this.lazyInit)
          : this.lazyInit(),
        (this.lazyInit = null),
        this.lazyUpdate &&
          (this.lazyUpdate.forEach((e) => this.applyUpdate(e)),
          (this.lazyUpdate = null)));
    }
    copyFrom(e) {
      e.init(),
        Array.from(e.headers.keys()).forEach((r) => {
          this.headers.set(r, e.headers.get(r)),
            this.normalizedNames.set(r, e.normalizedNames.get(r));
        });
    }
    clone(e) {
      let r = new t();
      return (
        (r.lazyInit =
          this.lazyInit && this.lazyInit instanceof t ? this.lazyInit : this),
        (r.lazyUpdate = (this.lazyUpdate || []).concat([e])),
        r
      );
    }
    applyUpdate(e) {
      let r = e.name.toLowerCase();
      switch (e.op) {
        case "a":
        case "s":
          let i = e.value;
          if ((typeof i == "string" && (i = [i]), i.length === 0)) return;
          this.maybeSetNormalizedName(e.name, r);
          let n = (e.op === "a" ? this.headers.get(r) : void 0) || [];
          n.push(...i), this.headers.set(r, n);
          break;
        case "d":
          let o = e.value;
          if (!o) this.headers.delete(r), this.normalizedNames.delete(r);
          else {
            let s = this.headers.get(r);
            if (!s) return;
            (s = s.filter((a) => o.indexOf(a) === -1)),
              s.length === 0
                ? (this.headers.delete(r), this.normalizedNames.delete(r))
                : this.headers.set(r, s);
          }
          break;
      }
    }
    setHeaderEntries(e, r) {
      let i = (Array.isArray(r) ? r : [r]).map((o) => o.toString()),
        n = e.toLowerCase();
      this.headers.set(n, i), this.maybeSetNormalizedName(e, n);
    }
    forEach(e) {
      this.init(),
        Array.from(this.normalizedNames.keys()).forEach((r) =>
          e(this.normalizedNames.get(r), this.headers.get(r)),
        );
    }
  };
var To = class {
  encodeKey(e) {
    return Il(e);
  }
  encodeValue(e) {
    return Il(e);
  }
  decodeKey(e) {
    return decodeURIComponent(e);
  }
  decodeValue(e) {
    return decodeURIComponent(e);
  }
};
function xh(t, e) {
  let r = new Map();
  return (
    t.length > 0 &&
      t
        .replace(/^\?/, "")
        .split("&")
        .forEach((n) => {
          let o = n.indexOf("="),
            [s, a] =
              o == -1
                ? [e.decodeKey(n), ""]
                : [e.decodeKey(n.slice(0, o)), e.decodeValue(n.slice(o + 1))],
            c = r.get(s) || [];
          c.push(a), r.set(s, c);
        }),
    r
  );
}
var wh = /%(\d[a-f0-9])/gi,
  Ch = {
    40: "@",
    "3A": ":",
    24: "$",
    "2C": ",",
    "3B": ";",
    "3D": "=",
    "3F": "?",
    "2F": "/",
  };
function Il(t) {
  return encodeURIComponent(t).replace(wh, (e, r) => Ch[r] ?? e);
}
function qn(t) {
  return `${t}`;
}
var He = class t {
  constructor(e = {}) {
    if (
      ((this.updates = null),
      (this.cloneFrom = null),
      (this.encoder = e.encoder || new To()),
      e.fromString)
    ) {
      if (e.fromObject)
        throw new Error("Cannot specify both fromString and fromObject.");
      this.map = xh(e.fromString, this.encoder);
    } else
      e.fromObject
        ? ((this.map = new Map()),
          Object.keys(e.fromObject).forEach((r) => {
            let i = e.fromObject[r],
              n = Array.isArray(i) ? i.map(qn) : [qn(i)];
            this.map.set(r, n);
          }))
        : (this.map = null);
  }
  has(e) {
    return this.init(), this.map.has(e);
  }
  get(e) {
    this.init();
    let r = this.map.get(e);
    return r ? r[0] : null;
  }
  getAll(e) {
    return this.init(), this.map.get(e) || null;
  }
  keys() {
    return this.init(), Array.from(this.map.keys());
  }
  append(e, r) {
    return this.clone({ param: e, value: r, op: "a" });
  }
  appendAll(e) {
    let r = [];
    return (
      Object.keys(e).forEach((i) => {
        let n = e[i];
        Array.isArray(n)
          ? n.forEach((o) => {
              r.push({ param: i, value: o, op: "a" });
            })
          : r.push({ param: i, value: n, op: "a" });
      }),
      this.clone(r)
    );
  }
  set(e, r) {
    return this.clone({ param: e, value: r, op: "s" });
  }
  delete(e, r) {
    return this.clone({ param: e, value: r, op: "d" });
  }
  toString() {
    return (
      this.init(),
      this.keys()
        .map((e) => {
          let r = this.encoder.encodeKey(e);
          return this.map
            .get(e)
            .map((i) => r + "=" + this.encoder.encodeValue(i))
            .join("&");
        })
        .filter((e) => e !== "")
        .join("&")
    );
  }
  clone(e) {
    let r = new t({ encoder: this.encoder });
    return (
      (r.cloneFrom = this.cloneFrom || this),
      (r.updates = (this.updates || []).concat(e)),
      r
    );
  }
  init() {
    this.map === null && (this.map = new Map()),
      this.cloneFrom !== null &&
        (this.cloneFrom.init(),
        this.cloneFrom
          .keys()
          .forEach((e) => this.map.set(e, this.cloneFrom.map.get(e))),
        this.updates.forEach((e) => {
          switch (e.op) {
            case "a":
            case "s":
              let r = (e.op === "a" ? this.map.get(e.param) : void 0) || [];
              r.push(qn(e.value)), this.map.set(e.param, r);
              break;
            case "d":
              if (e.value !== void 0) {
                let i = this.map.get(e.param) || [],
                  n = i.indexOf(qn(e.value));
                n !== -1 && i.splice(n, 1),
                  i.length > 0
                    ? this.map.set(e.param, i)
                    : this.map.delete(e.param);
              } else {
                this.map.delete(e.param);
                break;
              }
          }
        }),
        (this.cloneFrom = this.updates = null));
  }
};
var Mo = class {
  constructor() {
    this.map = new Map();
  }
  set(e, r) {
    return this.map.set(e, r), this;
  }
  get(e) {
    return (
      this.map.has(e) || this.map.set(e, e.defaultValue()), this.map.get(e)
    );
  }
  delete(e) {
    return this.map.delete(e), this;
  }
  has(e) {
    return this.map.has(e);
  }
  keys() {
    return this.map.keys();
  }
};
function Eh(t) {
  switch (t) {
    case "DELETE":
    case "GET":
    case "HEAD":
    case "OPTIONS":
    case "JSONP":
      return !1;
    default:
      return !0;
  }
}
function Dl(t) {
  return typeof ArrayBuffer < "u" && t instanceof ArrayBuffer;
}
function Al(t) {
  return typeof Blob < "u" && t instanceof Blob;
}
function Rl(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function Sh(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
var Ni = class t {
    constructor(e, r, i, n) {
      (this.url = r),
        (this.body = null),
        (this.reportProgress = !1),
        (this.withCredentials = !1),
        (this.responseType = "json"),
        (this.method = e.toUpperCase());
      let o;
      if (
        (Eh(this.method) || n
          ? ((this.body = i !== void 0 ? i : null), (o = n))
          : (o = i),
        o &&
          ((this.reportProgress = !!o.reportProgress),
          (this.withCredentials = !!o.withCredentials),
          o.responseType && (this.responseType = o.responseType),
          o.headers && (this.headers = o.headers),
          o.context && (this.context = o.context),
          o.params && (this.params = o.params),
          (this.transferCache = o.transferCache)),
        (this.headers ??= new wt()),
        (this.context ??= new Mo()),
        !this.params)
      )
        (this.params = new He()), (this.urlWithParams = r);
      else {
        let s = this.params.toString();
        if (s.length === 0) this.urlWithParams = r;
        else {
          let a = r.indexOf("?"),
            c = a === -1 ? "?" : a < r.length - 1 ? "&" : "";
          this.urlWithParams = r + c + s;
        }
      }
    }
    serializeBody() {
      return this.body === null
        ? null
        : typeof this.body == "string" ||
            Dl(this.body) ||
            Al(this.body) ||
            Rl(this.body) ||
            Sh(this.body)
          ? this.body
          : this.body instanceof He
            ? this.body.toString()
            : typeof this.body == "object" ||
                typeof this.body == "boolean" ||
                Array.isArray(this.body)
              ? JSON.stringify(this.body)
              : this.body.toString();
    }
    detectContentTypeHeader() {
      return this.body === null || Rl(this.body)
        ? null
        : Al(this.body)
          ? this.body.type || null
          : Dl(this.body)
            ? null
            : typeof this.body == "string"
              ? "text/plain"
              : this.body instanceof He
                ? "application/x-www-form-urlencoded;charset=UTF-8"
                : typeof this.body == "object" ||
                    typeof this.body == "number" ||
                    typeof this.body == "boolean"
                  ? "application/json"
                  : null;
    }
    clone(e = {}) {
      let r = e.method || this.method,
        i = e.url || this.url,
        n = e.responseType || this.responseType,
        o = e.transferCache ?? this.transferCache,
        s = e.body !== void 0 ? e.body : this.body,
        a = e.withCredentials ?? this.withCredentials,
        c = e.reportProgress ?? this.reportProgress,
        l = e.headers || this.headers,
        d = e.params || this.params,
        u = e.context ?? this.context;
      return (
        e.setHeaders !== void 0 &&
          (l = Object.keys(e.setHeaders).reduce(
            (p, b) => p.set(b, e.setHeaders[b]),
            l,
          )),
        e.setParams &&
          (d = Object.keys(e.setParams).reduce(
            (p, b) => p.set(b, e.setParams[b]),
            d,
          )),
        new t(r, i, s, {
          params: d,
          headers: l,
          context: u,
          reportProgress: c,
          responseType: n,
          withCredentials: a,
          transferCache: o,
        })
      );
    }
  },
  ti = (function (t) {
    return (
      (t[(t.Sent = 0)] = "Sent"),
      (t[(t.UploadProgress = 1)] = "UploadProgress"),
      (t[(t.ResponseHeader = 2)] = "ResponseHeader"),
      (t[(t.DownloadProgress = 3)] = "DownloadProgress"),
      (t[(t.Response = 4)] = "Response"),
      (t[(t.User = 5)] = "User"),
      t
    );
  })(ti || {}),
  ji = class {
    constructor(e, r = Qn.Ok, i = "OK") {
      (this.headers = e.headers || new wt()),
        (this.status = e.status !== void 0 ? e.status : r),
        (this.statusText = e.statusText || i),
        (this.url = e.url || null),
        (this.ok = this.status >= 200 && this.status < 300);
    }
  },
  Fo = class t extends ji {
    constructor(e = {}) {
      super(e), (this.type = ti.ResponseHeader);
    }
    clone(e = {}) {
      return new t({
        headers: e.headers || this.headers,
        status: e.status !== void 0 ? e.status : this.status,
        statusText: e.statusText || this.statusText,
        url: e.url || this.url || void 0,
      });
    }
  },
  Zn = class t extends ji {
    constructor(e = {}) {
      super(e),
        (this.type = ti.Response),
        (this.body = e.body !== void 0 ? e.body : null);
    }
    clone(e = {}) {
      return new t({
        body: e.body !== void 0 ? e.body : this.body,
        headers: e.headers || this.headers,
        status: e.status !== void 0 ? e.status : this.status,
        statusText: e.statusText || this.statusText,
        url: e.url || this.url || void 0,
      });
    }
  },
  Kn = class extends ji {
    constructor(e) {
      super(e, 0, "Unknown Error"),
        (this.name = "HttpErrorResponse"),
        (this.ok = !1),
        this.status >= 200 && this.status < 300
          ? (this.message = `Http failure during parsing for ${e.url || "(unknown url)"}`)
          : (this.message = `Http failure response for ${e.url || "(unknown url)"}: ${e.status} ${e.statusText}`),
        (this.error = e.error || null);
    }
  },
  Qn = (function (t) {
    return (
      (t[(t.Continue = 100)] = "Continue"),
      (t[(t.SwitchingProtocols = 101)] = "SwitchingProtocols"),
      (t[(t.Processing = 102)] = "Processing"),
      (t[(t.EarlyHints = 103)] = "EarlyHints"),
      (t[(t.Ok = 200)] = "Ok"),
      (t[(t.Created = 201)] = "Created"),
      (t[(t.Accepted = 202)] = "Accepted"),
      (t[(t.NonAuthoritativeInformation = 203)] =
        "NonAuthoritativeInformation"),
      (t[(t.NoContent = 204)] = "NoContent"),
      (t[(t.ResetContent = 205)] = "ResetContent"),
      (t[(t.PartialContent = 206)] = "PartialContent"),
      (t[(t.MultiStatus = 207)] = "MultiStatus"),
      (t[(t.AlreadyReported = 208)] = "AlreadyReported"),
      (t[(t.ImUsed = 226)] = "ImUsed"),
      (t[(t.MultipleChoices = 300)] = "MultipleChoices"),
      (t[(t.MovedPermanently = 301)] = "MovedPermanently"),
      (t[(t.Found = 302)] = "Found"),
      (t[(t.SeeOther = 303)] = "SeeOther"),
      (t[(t.NotModified = 304)] = "NotModified"),
      (t[(t.UseProxy = 305)] = "UseProxy"),
      (t[(t.Unused = 306)] = "Unused"),
      (t[(t.TemporaryRedirect = 307)] = "TemporaryRedirect"),
      (t[(t.PermanentRedirect = 308)] = "PermanentRedirect"),
      (t[(t.BadRequest = 400)] = "BadRequest"),
      (t[(t.Unauthorized = 401)] = "Unauthorized"),
      (t[(t.PaymentRequired = 402)] = "PaymentRequired"),
      (t[(t.Forbidden = 403)] = "Forbidden"),
      (t[(t.NotFound = 404)] = "NotFound"),
      (t[(t.MethodNotAllowed = 405)] = "MethodNotAllowed"),
      (t[(t.NotAcceptable = 406)] = "NotAcceptable"),
      (t[(t.ProxyAuthenticationRequired = 407)] =
        "ProxyAuthenticationRequired"),
      (t[(t.RequestTimeout = 408)] = "RequestTimeout"),
      (t[(t.Conflict = 409)] = "Conflict"),
      (t[(t.Gone = 410)] = "Gone"),
      (t[(t.LengthRequired = 411)] = "LengthRequired"),
      (t[(t.PreconditionFailed = 412)] = "PreconditionFailed"),
      (t[(t.PayloadTooLarge = 413)] = "PayloadTooLarge"),
      (t[(t.UriTooLong = 414)] = "UriTooLong"),
      (t[(t.UnsupportedMediaType = 415)] = "UnsupportedMediaType"),
      (t[(t.RangeNotSatisfiable = 416)] = "RangeNotSatisfiable"),
      (t[(t.ExpectationFailed = 417)] = "ExpectationFailed"),
      (t[(t.ImATeapot = 418)] = "ImATeapot"),
      (t[(t.MisdirectedRequest = 421)] = "MisdirectedRequest"),
      (t[(t.UnprocessableEntity = 422)] = "UnprocessableEntity"),
      (t[(t.Locked = 423)] = "Locked"),
      (t[(t.FailedDependency = 424)] = "FailedDependency"),
      (t[(t.TooEarly = 425)] = "TooEarly"),
      (t[(t.UpgradeRequired = 426)] = "UpgradeRequired"),
      (t[(t.PreconditionRequired = 428)] = "PreconditionRequired"),
      (t[(t.TooManyRequests = 429)] = "TooManyRequests"),
      (t[(t.RequestHeaderFieldsTooLarge = 431)] =
        "RequestHeaderFieldsTooLarge"),
      (t[(t.UnavailableForLegalReasons = 451)] = "UnavailableForLegalReasons"),
      (t[(t.InternalServerError = 500)] = "InternalServerError"),
      (t[(t.NotImplemented = 501)] = "NotImplemented"),
      (t[(t.BadGateway = 502)] = "BadGateway"),
      (t[(t.ServiceUnavailable = 503)] = "ServiceUnavailable"),
      (t[(t.GatewayTimeout = 504)] = "GatewayTimeout"),
      (t[(t.HttpVersionNotSupported = 505)] = "HttpVersionNotSupported"),
      (t[(t.VariantAlsoNegotiates = 506)] = "VariantAlsoNegotiates"),
      (t[(t.InsufficientStorage = 507)] = "InsufficientStorage"),
      (t[(t.LoopDetected = 508)] = "LoopDetected"),
      (t[(t.NotExtended = 510)] = "NotExtended"),
      (t[(t.NetworkAuthenticationRequired = 511)] =
        "NetworkAuthenticationRequired"),
      t
    );
  })(Qn || {});
function Oo(t, e) {
  return {
    body: e,
    headers: t.headers,
    context: t.context,
    observe: t.observe,
    params: t.params,
    reportProgress: t.reportProgress,
    responseType: t.responseType,
    withCredentials: t.withCredentials,
    transferCache: t.transferCache,
  };
}
var Ct = (() => {
  let e = class e {
    constructor(i) {
      this.handler = i;
    }
    request(i, n, o = {}) {
      let s;
      if (i instanceof Ni) s = i;
      else {
        let l;
        o.headers instanceof wt ? (l = o.headers) : (l = new wt(o.headers));
        let d;
        o.params &&
          (o.params instanceof He
            ? (d = o.params)
            : (d = new He({ fromObject: o.params }))),
          (s = new Ni(i, n, o.body !== void 0 ? o.body : null, {
            headers: l,
            context: o.context,
            params: d,
            reportProgress: o.reportProgress,
            responseType: o.responseType || "json",
            withCredentials: o.withCredentials,
            transferCache: o.transferCache,
          }));
      }
      let a = C(s).pipe(Le((l) => this.handler.handle(l)));
      if (i instanceof Ni || o.observe === "events") return a;
      let c = a.pipe(z((l) => l instanceof Zn));
      switch (o.observe || "body") {
        case "body":
          switch (s.responseType) {
            case "arraybuffer":
              return c.pipe(
                w((l) => {
                  if (l.body !== null && !(l.body instanceof ArrayBuffer))
                    throw new Error("Response is not an ArrayBuffer.");
                  return l.body;
                }),
              );
            case "blob":
              return c.pipe(
                w((l) => {
                  if (l.body !== null && !(l.body instanceof Blob))
                    throw new Error("Response is not a Blob.");
                  return l.body;
                }),
              );
            case "text":
              return c.pipe(
                w((l) => {
                  if (l.body !== null && typeof l.body != "string")
                    throw new Error("Response is not a string.");
                  return l.body;
                }),
              );
            case "json":
            default:
              return c.pipe(w((l) => l.body));
          }
        case "response":
          return c;
        default:
          throw new Error(`Unreachable: unhandled observe type ${o.observe}}`);
      }
    }
    delete(i, n = {}) {
      return this.request("DELETE", i, n);
    }
    get(i, n = {}) {
      return this.request("GET", i, n);
    }
    head(i, n = {}) {
      return this.request("HEAD", i, n);
    }
    jsonp(i, n) {
      return this.request("JSONP", i, {
        params: new He().append(n, "JSONP_CALLBACK"),
        observe: "body",
        responseType: "json",
      });
    }
    options(i, n = {}) {
      return this.request("OPTIONS", i, n);
    }
    patch(i, n, o = {}) {
      return this.request("PATCH", i, Oo(o, n));
    }
    post(i, n, o = {}) {
      return this.request("POST", i, Oo(o, n));
    }
    put(i, n, o = {}) {
      return this.request("PUT", i, Oo(o, n));
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(h(Li));
  }),
    (e.ɵprov = v({ token: e, factory: e.ɵfac }));
  let t = e;
  return t;
})();
function Ih(t, e) {
  return e(t);
}
function Dh(t, e, r) {
  return (i, n) => Ze(r, () => e(i, (o) => t(o, n)));
}
var Ml = new g(""),
  Ah = new g(""),
  Rh = new g("");
var Ol = (() => {
  let e = class e extends Li {
    constructor(i, n) {
      super(),
        (this.backend = i),
        (this.injector = n),
        (this.chain = null),
        (this.pendingTasks = m(Un));
      let o = m(Rh, { optional: !0 });
      this.backend = o ?? i;
    }
    handle(i) {
      if (this.chain === null) {
        let o = Array.from(
          new Set([...this.injector.get(Ml), ...this.injector.get(Ah, [])]),
        );
        this.chain = o.reduceRight((s, a) => Dh(s, a, this.injector), Ih);
      }
      let n = this.pendingTasks.add();
      return this.chain(i, (o) => this.backend.handle(o)).pipe(
        ft(() => this.pendingTasks.remove(n)),
      );
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(h(Xn), h($t));
  }),
    (e.ɵprov = v({ token: e, factory: e.ɵfac }));
  let t = e;
  return t;
})();
var Oh = /^\)\]\}',?\n/;
function Th(t) {
  return "responseURL" in t && t.responseURL
    ? t.responseURL
    : /^X-Request-URL:/m.test(t.getAllResponseHeaders())
      ? t.getResponseHeader("X-Request-URL")
      : null;
}
var Tl = (() => {
    let e = class e {
      constructor(i) {
        this.xhrFactory = i;
      }
      handle(i) {
        if (i.method === "JSONP") throw new H(-2800, !1);
        let n = this.xhrFactory;
        return (n.ɵloadImpl ? fe(n.ɵloadImpl()) : C(null)).pipe(
          K(
            () =>
              new re((s) => {
                let a = n.build();
                if (
                  (a.open(i.method, i.urlWithParams),
                  i.withCredentials && (a.withCredentials = !0),
                  i.headers.forEach((I, S) =>
                    a.setRequestHeader(I, S.join(",")),
                  ),
                  i.headers.has("Accept") ||
                    a.setRequestHeader(
                      "Accept",
                      "application/json, text/plain, */*",
                    ),
                  !i.headers.has("Content-Type"))
                ) {
                  let I = i.detectContentTypeHeader();
                  I !== null && a.setRequestHeader("Content-Type", I);
                }
                if (i.responseType) {
                  let I = i.responseType.toLowerCase();
                  a.responseType = I !== "json" ? I : "text";
                }
                let c = i.serializeBody(),
                  l = null,
                  d = () => {
                    if (l !== null) return l;
                    let I = a.statusText || "OK",
                      S = new wt(a.getAllResponseHeaders()),
                      Z = Th(a) || i.url;
                    return (
                      (l = new Fo({
                        headers: S,
                        status: a.status,
                        statusText: I,
                        url: Z,
                      })),
                      l
                    );
                  },
                  u = () => {
                    let { headers: I, status: S, statusText: Z, url: Xe } = d(),
                      D = null;
                    S !== Qn.NoContent &&
                      (D =
                        typeof a.response > "u" ? a.responseText : a.response),
                      S === 0 && (S = D ? Qn.Ok : 0);
                    let q = S >= 200 && S < 300;
                    if (i.responseType === "json" && typeof D == "string") {
                      let B = D;
                      D = D.replace(Oh, "");
                      try {
                        D = D !== "" ? JSON.parse(D) : null;
                      } catch (Pe) {
                        (D = B), q && ((q = !1), (D = { error: Pe, text: D }));
                      }
                    }
                    q
                      ? (s.next(
                          new Zn({
                            body: D,
                            headers: I,
                            status: S,
                            statusText: Z,
                            url: Xe || void 0,
                          }),
                        ),
                        s.complete())
                      : s.error(
                          new Kn({
                            error: D,
                            headers: I,
                            status: S,
                            statusText: Z,
                            url: Xe || void 0,
                          }),
                        );
                  },
                  p = (I) => {
                    let { url: S } = d(),
                      Z = new Kn({
                        error: I,
                        status: a.status || 0,
                        statusText: a.statusText || "Unknown Error",
                        url: S || void 0,
                      });
                    s.error(Z);
                  },
                  b = !1,
                  _ = (I) => {
                    b || (s.next(d()), (b = !0));
                    let S = { type: ti.DownloadProgress, loaded: I.loaded };
                    I.lengthComputable && (S.total = I.total),
                      i.responseType === "text" &&
                        a.responseText &&
                        (S.partialText = a.responseText),
                      s.next(S);
                  },
                  x = (I) => {
                    let S = { type: ti.UploadProgress, loaded: I.loaded };
                    I.lengthComputable && (S.total = I.total), s.next(S);
                  };
                return (
                  a.addEventListener("load", u),
                  a.addEventListener("error", p),
                  a.addEventListener("timeout", p),
                  a.addEventListener("abort", p),
                  i.reportProgress &&
                    (a.addEventListener("progress", _),
                    c !== null &&
                      a.upload &&
                      a.upload.addEventListener("progress", x)),
                  a.send(c),
                  s.next({ type: ti.Sent }),
                  () => {
                    a.removeEventListener("error", p),
                      a.removeEventListener("abort", p),
                      a.removeEventListener("load", u),
                      a.removeEventListener("timeout", p),
                      i.reportProgress &&
                        (a.removeEventListener("progress", _),
                        c !== null &&
                          a.upload &&
                          a.upload.removeEventListener("progress", x)),
                      a.readyState !== a.DONE && a.abort();
                  }
                );
              }),
          ),
        );
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(Yn));
    }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  Fl = new g(""),
  Mh = "XSRF-TOKEN",
  Fh = new g("", { providedIn: "root", factory: () => Mh }),
  kh = "X-XSRF-TOKEN",
  Ph = new g("", { providedIn: "root", factory: () => kh }),
  Jn = class {},
  Nh = (() => {
    let e = class e {
      constructor(i, n, o) {
        (this.doc = i),
          (this.platform = n),
          (this.cookieName = o),
          (this.lastCookieString = ""),
          (this.lastToken = null),
          (this.parseCount = 0);
      }
      getToken() {
        if (this.platform === "server") return null;
        let i = this.doc.cookie || "";
        return (
          i !== this.lastCookieString &&
            (this.parseCount++,
            (this.lastToken = Gn(i, this.cookieName)),
            (this.lastCookieString = i)),
          this.lastToken
        );
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(N), h(Qe), h(Fh));
    }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })();
function Lh(t, e) {
  let r = t.url.toLowerCase();
  if (
    !m(Fl) ||
    t.method === "GET" ||
    t.method === "HEAD" ||
    r.startsWith("http://") ||
    r.startsWith("https://")
  )
    return e(t);
  let i = m(Jn).getToken(),
    n = m(Ph);
  return (
    i != null &&
      !t.headers.has(n) &&
      (t = t.clone({ headers: t.headers.set(n, i) })),
    e(t)
  );
}
function kl(...t) {
  let e = [
    Ct,
    Tl,
    Ol,
    { provide: Li, useExisting: Ol },
    { provide: Xn, useExisting: Tl },
    { provide: Ml, useValue: Lh, multi: !0 },
    { provide: Fl, useValue: !0 },
    { provide: Jn, useClass: Nh },
  ];
  for (let r of t) e.push(...r.ɵproviders);
  return ge(e);
}
var Lo = class extends vl {
    constructor() {
      super(...arguments), (this.supportsDOMEvents = !0);
    }
  },
  jo = class t extends Lo {
    static makeCurrent() {
      gl(new t());
    }
    onAndCancel(e, r, i) {
      return (
        e.addEventListener(r, i),
        () => {
          e.removeEventListener(r, i);
        }
      );
    }
    dispatchEvent(e, r) {
      e.dispatchEvent(r);
    }
    remove(e) {
      e.parentNode && e.parentNode.removeChild(e);
    }
    createElement(e, r) {
      return (r = r || this.getDefaultDocument()), r.createElement(e);
    }
    createHtmlDocument() {
      return document.implementation.createHTMLDocument("fakeTitle");
    }
    getDefaultDocument() {
      return document;
    }
    isElementNode(e) {
      return e.nodeType === Node.ELEMENT_NODE;
    }
    isShadowRoot(e) {
      return e instanceof DocumentFragment;
    }
    getGlobalEventTarget(e, r) {
      return r === "window"
        ? window
        : r === "document"
          ? e
          : r === "body"
            ? e.body
            : null;
    }
    getBaseHref(e) {
      let r = Vh();
      return r == null ? null : Uh(r);
    }
    resetBaseElement() {
      Vi = null;
    }
    getUserAgent() {
      return window.navigator.userAgent;
    }
    getCookie(e) {
      return Gn(document.cookie, e);
    }
  },
  Vi = null;
function Vh() {
  return (
    (Vi = Vi || document.querySelector("base")),
    Vi ? Vi.getAttribute("href") : null
  );
}
function Uh(t) {
  return new URL(t, document.baseURI).pathname;
}
var Bh = (() => {
    let e = class e {
      build() {
        return new XMLHttpRequest();
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  Vo = new g(""),
  Ll = (() => {
    let e = class e {
      constructor(i, n) {
        (this._zone = n),
          (this._eventNameToPlugin = new Map()),
          i.forEach((o) => {
            o.manager = this;
          }),
          (this._plugins = i.slice().reverse());
      }
      addEventListener(i, n, o) {
        return this._findPluginFor(n).addEventListener(i, n, o);
      }
      getZone() {
        return this._zone;
      }
      _findPluginFor(i) {
        let n = this._eventNameToPlugin.get(i);
        if (n) return n;
        if (((n = this._plugins.find((s) => s.supports(i))), !n))
          throw new H(5101, !1);
        return this._eventNameToPlugin.set(i, n), n;
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(Vo), h(M));
    }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  er = class {
    constructor(e) {
      this._doc = e;
    }
  },
  Po = "ng-app-id",
  jl = (() => {
    let e = class e {
      constructor(i, n, o, s = {}) {
        (this.doc = i),
          (this.appId = n),
          (this.nonce = o),
          (this.platformId = s),
          (this.styleRef = new Map()),
          (this.hostNodes = new Set()),
          (this.styleNodesInDOM = this.collectServerRenderedStyles()),
          (this.platformIsServer = Ro(s)),
          this.resetHostNodes();
      }
      addStyles(i) {
        for (let n of i)
          this.changeUsageCount(n, 1) === 1 && this.onStyleAdded(n);
      }
      removeStyles(i) {
        for (let n of i)
          this.changeUsageCount(n, -1) <= 0 && this.onStyleRemoved(n);
      }
      ngOnDestroy() {
        let i = this.styleNodesInDOM;
        i && (i.forEach((n) => n.remove()), i.clear());
        for (let n of this.getAllStyles()) this.onStyleRemoved(n);
        this.resetHostNodes();
      }
      addHost(i) {
        this.hostNodes.add(i);
        for (let n of this.getAllStyles()) this.addStyleToHost(i, n);
      }
      removeHost(i) {
        this.hostNodes.delete(i);
      }
      getAllStyles() {
        return this.styleRef.keys();
      }
      onStyleAdded(i) {
        for (let n of this.hostNodes) this.addStyleToHost(n, i);
      }
      onStyleRemoved(i) {
        let n = this.styleRef;
        n.get(i)?.elements?.forEach((o) => o.remove()), n.delete(i);
      }
      collectServerRenderedStyles() {
        let i = this.doc.head?.querySelectorAll(`style[${Po}="${this.appId}"]`);
        if (i?.length) {
          let n = new Map();
          return (
            i.forEach((o) => {
              o.textContent != null && n.set(o.textContent, o);
            }),
            n
          );
        }
        return null;
      }
      changeUsageCount(i, n) {
        let o = this.styleRef;
        if (o.has(i)) {
          let s = o.get(i);
          return (s.usage += n), s.usage;
        }
        return o.set(i, { usage: n, elements: [] }), n;
      }
      getStyleElement(i, n) {
        let o = this.styleNodesInDOM,
          s = o?.get(n);
        if (s?.parentNode === i) return o.delete(n), s.removeAttribute(Po), s;
        {
          let a = this.doc.createElement("style");
          return (
            this.nonce && a.setAttribute("nonce", this.nonce),
            (a.textContent = n),
            this.platformIsServer && a.setAttribute(Po, this.appId),
            i.appendChild(a),
            a
          );
        }
      }
      addStyleToHost(i, n) {
        let o = this.getStyleElement(i, n),
          s = this.styleRef,
          a = s.get(n)?.elements;
        a ? a.push(o) : s.set(n, { elements: [o], usage: 1 });
      }
      resetHostNodes() {
        let i = this.hostNodes;
        i.clear(), i.add(this.doc.head);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(N), h(Nn), h(Ri, 8), h(Qe));
    }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  No = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
    math: "http://www.w3.org/1998/MathML/",
  },
  zo = /%COMP%/g,
  Vl = "%COMP%",
  zh = `_nghost-${Vl}`,
  $h = `_ngcontent-${Vl}`,
  Hh = !0,
  Wh = new g("", { providedIn: "root", factory: () => Hh });
function Gh(t) {
  return $h.replace(zo, t);
}
function Yh(t) {
  return zh.replace(zo, t);
}
function Ul(t, e) {
  return e.map((r) => r.replace(zo, t));
}
var tr = (() => {
    let e = class e {
      constructor(i, n, o, s, a, c, l, d = null) {
        (this.eventManager = i),
          (this.sharedStylesHost = n),
          (this.appId = o),
          (this.removeStylesOnCompDestroy = s),
          (this.doc = a),
          (this.platformId = c),
          (this.ngZone = l),
          (this.nonce = d),
          (this.rendererByCompId = new Map()),
          (this.platformIsServer = Ro(c)),
          (this.defaultRenderer = new Ui(i, a, l, this.platformIsServer));
      }
      createRenderer(i, n) {
        if (!i || !n) return this.defaultRenderer;
        this.platformIsServer &&
          n.encapsulation === Ai.ShadowDom &&
          (n = E(f({}, n), { encapsulation: Ai.Emulated }));
        let o = this.getOrCreateRenderer(i, n);
        return (
          o instanceof ir
            ? o.applyToHost(i)
            : o instanceof Bi && o.applyStyles(),
          o
        );
      }
      getOrCreateRenderer(i, n) {
        let o = this.rendererByCompId,
          s = o.get(n.id);
        if (!s) {
          let a = this.doc,
            c = this.ngZone,
            l = this.eventManager,
            d = this.sharedStylesHost,
            u = this.removeStylesOnCompDestroy,
            p = this.platformIsServer;
          switch (n.encapsulation) {
            case Ai.Emulated:
              s = new ir(l, d, n, this.appId, u, a, c, p);
              break;
            case Ai.ShadowDom:
              return new Uo(l, d, i, n, a, c, this.nonce, p);
            default:
              s = new Bi(l, d, n, u, a, c, p);
              break;
          }
          o.set(n.id, s);
        }
        return s;
      }
      ngOnDestroy() {
        this.rendererByCompId.clear();
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(Ll), h(jl), h(Nn), h(Wh), h(N), h(Qe), h(M), h(Ri));
    }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  Ui = class {
    constructor(e, r, i, n) {
      (this.eventManager = e),
        (this.doc = r),
        (this.ngZone = i),
        (this.platformIsServer = n),
        (this.data = Object.create(null)),
        (this.throwOnSyntheticProps = !0),
        (this.destroyNode = null);
    }
    destroy() {}
    createElement(e, r) {
      return r
        ? this.doc.createElementNS(No[r] || r, e)
        : this.doc.createElement(e);
    }
    createComment(e) {
      return this.doc.createComment(e);
    }
    createText(e) {
      return this.doc.createTextNode(e);
    }
    appendChild(e, r) {
      (Pl(e) ? e.content : e).appendChild(r);
    }
    insertBefore(e, r, i) {
      e && (Pl(e) ? e.content : e).insertBefore(r, i);
    }
    removeChild(e, r) {
      e && e.removeChild(r);
    }
    selectRootElement(e, r) {
      let i = typeof e == "string" ? this.doc.querySelector(e) : e;
      if (!i) throw new H(-5104, !1);
      return r || (i.textContent = ""), i;
    }
    parentNode(e) {
      return e.parentNode;
    }
    nextSibling(e) {
      return e.nextSibling;
    }
    setAttribute(e, r, i, n) {
      if (n) {
        r = n + ":" + r;
        let o = No[n];
        o ? e.setAttributeNS(o, r, i) : e.setAttribute(r, i);
      } else e.setAttribute(r, i);
    }
    removeAttribute(e, r, i) {
      if (i) {
        let n = No[i];
        n ? e.removeAttributeNS(n, r) : e.removeAttribute(`${i}:${r}`);
      } else e.removeAttribute(r);
    }
    addClass(e, r) {
      e.classList.add(r);
    }
    removeClass(e, r) {
      e.classList.remove(r);
    }
    setStyle(e, r, i, n) {
      n & (Oi.DashCase | Oi.Important)
        ? e.style.setProperty(r, i, n & Oi.Important ? "important" : "")
        : (e.style[r] = i);
    }
    removeStyle(e, r, i) {
      i & Oi.DashCase ? e.style.removeProperty(r) : (e.style[r] = "");
    }
    setProperty(e, r, i) {
      e != null && (e[r] = i);
    }
    setValue(e, r) {
      e.nodeValue = r;
    }
    listen(e, r, i) {
      if (
        typeof e == "string" &&
        ((e = Kt().getGlobalEventTarget(this.doc, e)), !e)
      )
        throw new Error(`Unsupported event target ${e} for event ${r}`);
      return this.eventManager.addEventListener(
        e,
        r,
        this.decoratePreventDefault(i),
      );
    }
    decoratePreventDefault(e) {
      return (r) => {
        if (r === "__ngUnwrap__") return e;
        (this.platformIsServer ? this.ngZone.runGuarded(() => e(r)) : e(r)) ===
          !1 && r.preventDefault();
      };
    }
  };
function Pl(t) {
  return t.tagName === "TEMPLATE" && t.content !== void 0;
}
var Uo = class extends Ui {
    constructor(e, r, i, n, o, s, a, c) {
      super(e, o, s, c),
        (this.sharedStylesHost = r),
        (this.hostEl = i),
        (this.shadowRoot = i.attachShadow({ mode: "open" })),
        this.sharedStylesHost.addHost(this.shadowRoot);
      let l = Ul(n.id, n.styles);
      for (let d of l) {
        let u = document.createElement("style");
        a && u.setAttribute("nonce", a),
          (u.textContent = d),
          this.shadowRoot.appendChild(u);
      }
    }
    nodeOrShadowRoot(e) {
      return e === this.hostEl ? this.shadowRoot : e;
    }
    appendChild(e, r) {
      return super.appendChild(this.nodeOrShadowRoot(e), r);
    }
    insertBefore(e, r, i) {
      return super.insertBefore(this.nodeOrShadowRoot(e), r, i);
    }
    removeChild(e, r) {
      return super.removeChild(this.nodeOrShadowRoot(e), r);
    }
    parentNode(e) {
      return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)));
    }
    destroy() {
      this.sharedStylesHost.removeHost(this.shadowRoot);
    }
  },
  Bi = class extends Ui {
    constructor(e, r, i, n, o, s, a, c) {
      super(e, o, s, a),
        (this.sharedStylesHost = r),
        (this.removeStylesOnCompDestroy = n),
        (this.styles = c ? Ul(c, i.styles) : i.styles);
    }
    applyStyles() {
      this.sharedStylesHost.addStyles(this.styles);
    }
    destroy() {
      this.removeStylesOnCompDestroy &&
        this.sharedStylesHost.removeStyles(this.styles);
    }
  },
  ir = class extends Bi {
    constructor(e, r, i, n, o, s, a, c) {
      let l = n + "-" + i.id;
      super(e, r, i, o, s, a, c, l),
        (this.contentAttr = Gh(l)),
        (this.hostAttr = Yh(l));
    }
    applyToHost(e) {
      this.applyStyles(), this.setAttribute(e, this.hostAttr, "");
    }
    createElement(e, r) {
      let i = super.createElement(e, r);
      return super.setAttribute(i, this.contentAttr, ""), i;
    }
  },
  qh = (() => {
    let e = class e extends er {
      constructor(i) {
        super(i);
      }
      supports(i) {
        return !0;
      }
      addEventListener(i, n, o) {
        return (
          i.addEventListener(n, o, !1), () => this.removeEventListener(i, n, o)
        );
      }
      removeEventListener(i, n, o) {
        return i.removeEventListener(n, o);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(N));
    }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  Nl = ["alt", "control", "meta", "shift"],
  Xh = {
    "\b": "Backspace",
    "	": "Tab",
    "\x7F": "Delete",
    "\x1B": "Escape",
    Del: "Delete",
    Esc: "Escape",
    Left: "ArrowLeft",
    Right: "ArrowRight",
    Up: "ArrowUp",
    Down: "ArrowDown",
    Menu: "ContextMenu",
    Scroll: "ScrollLock",
    Win: "OS",
  },
  Zh = {
    alt: (t) => t.altKey,
    control: (t) => t.ctrlKey,
    meta: (t) => t.metaKey,
    shift: (t) => t.shiftKey,
  },
  Kh = (() => {
    let e = class e extends er {
      constructor(i) {
        super(i);
      }
      supports(i) {
        return e.parseEventName(i) != null;
      }
      addEventListener(i, n, o) {
        let s = e.parseEventName(n),
          a = e.eventCallback(s.fullKey, o, this.manager.getZone());
        return this.manager
          .getZone()
          .runOutsideAngular(() => Kt().onAndCancel(i, s.domEventName, a));
      }
      static parseEventName(i) {
        let n = i.toLowerCase().split("."),
          o = n.shift();
        if (n.length === 0 || !(o === "keydown" || o === "keyup")) return null;
        let s = e._normalizeKey(n.pop()),
          a = "",
          c = n.indexOf("code");
        if (
          (c > -1 && (n.splice(c, 1), (a = "code.")),
          Nl.forEach((d) => {
            let u = n.indexOf(d);
            u > -1 && (n.splice(u, 1), (a += d + "."));
          }),
          (a += s),
          n.length != 0 || s.length === 0)
        )
          return null;
        let l = {};
        return (l.domEventName = o), (l.fullKey = a), l;
      }
      static matchEventFullKeyCode(i, n) {
        let o = Xh[i.key] || i.key,
          s = "";
        return (
          n.indexOf("code.") > -1 && ((o = i.code), (s = "code.")),
          o == null || !o
            ? !1
            : ((o = o.toLowerCase()),
              o === " " ? (o = "space") : o === "." && (o = "dot"),
              Nl.forEach((a) => {
                if (a !== o) {
                  let c = Zh[a];
                  c(i) && (s += a + ".");
                }
              }),
              (s += o),
              s === n)
        );
      }
      static eventCallback(i, n, o) {
        return (s) => {
          e.matchEventFullKeyCode(s, i) && o.runGuarded(() => n(s));
        };
      }
      static _normalizeKey(i) {
        return i === "esc" ? "escape" : i;
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(N));
    }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })();
function Bl(t, e) {
  return ml(f({ rootComponent: t }, Qh(e)));
}
function Qh(t) {
  return {
    appProviders: [...rf, ...(t?.providers ?? [])],
    platformProviders: nf,
  };
}
function Jh() {
  jo.makeCurrent();
}
function ef() {
  return new gt();
}
function tf() {
  return sl(document), document;
}
var nf = [
  { provide: Qe, useValue: wl },
  { provide: al, useValue: Jh, multi: !0 },
  { provide: N, useFactory: tf, deps: [] },
];
var rf = [
  { provide: rl, useValue: "root" },
  { provide: gt, useFactory: ef, deps: [] },
  { provide: Vo, useClass: qh, multi: !0, deps: [N, M, Qe] },
  { provide: Vo, useClass: Kh, multi: !0, deps: [N] },
  tr,
  jl,
  Ll,
  { provide: jn, useExisting: tr },
  { provide: Yn, useClass: Bh, deps: [] },
  [],
];
var zl = (() => {
  let e = class e {
    constructor(i) {
      this._doc = i;
    }
    getTitle() {
      return this._doc.title;
    }
    setTitle(i) {
      this._doc.title = i || "";
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(h(N));
  }),
    (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
var R = "primary",
  nn = Symbol("RouteTitle"),
  Yo = class {
    constructor(e) {
      this.params = e || {};
    }
    has(e) {
      return Object.prototype.hasOwnProperty.call(this.params, e);
    }
    get(e) {
      if (this.has(e)) {
        let r = this.params[e];
        return Array.isArray(r) ? r[0] : r;
      }
      return null;
    }
    getAll(e) {
      if (this.has(e)) {
        let r = this.params[e];
        return Array.isArray(r) ? r : [r];
      }
      return [];
    }
    get keys() {
      return Object.keys(this.params);
    }
  };
function si(t) {
  return new Yo(t);
}
function af(t, e, r) {
  let i = r.path.split("/");
  if (
    i.length > t.length ||
    (r.pathMatch === "full" && (e.hasChildren() || i.length < t.length))
  )
    return null;
  let n = {};
  for (let o = 0; o < i.length; o++) {
    let s = i[o],
      a = t[o];
    if (s.startsWith(":")) n[s.substring(1)] = a;
    else if (s !== a.path) return null;
  }
  return { consumed: t.slice(0, i.length), posParams: n };
}
function lf(t, e) {
  if (t.length !== e.length) return !1;
  for (let r = 0; r < t.length; ++r) if (!We(t[r], e[r])) return !1;
  return !0;
}
function We(t, e) {
  let r = t ? qo(t) : void 0,
    i = e ? qo(e) : void 0;
  if (!r || !i || r.length != i.length) return !1;
  let n;
  for (let o = 0; o < r.length; o++)
    if (((n = r[o]), !ql(t[n], e[n]))) return !1;
  return !0;
}
function qo(t) {
  return [...Object.keys(t), ...Object.getOwnPropertySymbols(t)];
}
function ql(t, e) {
  if (Array.isArray(t) && Array.isArray(e)) {
    if (t.length !== e.length) return !1;
    let r = [...t].sort(),
      i = [...e].sort();
    return r.every((n, o) => i[o] === n);
  } else return t === e;
}
function Xl(t) {
  return t.length > 0 ? t[t.length - 1] : null;
}
function at(t) {
  return lo(t) ? t : Hn(t) ? fe(Promise.resolve(t)) : C(t);
}
var cf = { exact: Kl, subset: Ql },
  Zl = { exact: df, subset: uf, ignored: () => !0 };
function $l(t, e, r) {
  return (
    cf[r.paths](t.root, e.root, r.matrixParams) &&
    Zl[r.queryParams](t.queryParams, e.queryParams) &&
    !(r.fragment === "exact" && t.fragment !== e.fragment)
  );
}
function df(t, e) {
  return We(t, e);
}
function Kl(t, e, r) {
  if (
    !St(t.segments, e.segments) ||
    !or(t.segments, e.segments, r) ||
    t.numberOfChildren !== e.numberOfChildren
  )
    return !1;
  for (let i in e.children)
    if (!t.children[i] || !Kl(t.children[i], e.children[i], r)) return !1;
  return !0;
}
function uf(t, e) {
  return (
    Object.keys(e).length <= Object.keys(t).length &&
    Object.keys(e).every((r) => ql(t[r], e[r]))
  );
}
function Ql(t, e, r) {
  return Jl(t, e, e.segments, r);
}
function Jl(t, e, r, i) {
  if (t.segments.length > r.length) {
    let n = t.segments.slice(0, r.length);
    return !(!St(n, r) || e.hasChildren() || !or(n, r, i));
  } else if (t.segments.length === r.length) {
    if (!St(t.segments, r) || !or(t.segments, r, i)) return !1;
    for (let n in e.children)
      if (!t.children[n] || !Ql(t.children[n], e.children[n], i)) return !1;
    return !0;
  } else {
    let n = r.slice(0, t.segments.length),
      o = r.slice(t.segments.length);
    return !St(t.segments, n) || !or(t.segments, n, i) || !t.children[R]
      ? !1
      : Jl(t.children[R], e, o, i);
  }
}
function or(t, e, r) {
  return e.every((i, n) => Zl[r](t[n].parameters, i.parameters));
}
var ot = class {
    constructor(e = new U([], {}), r = {}, i = null) {
      (this.root = e), (this.queryParams = r), (this.fragment = i);
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= si(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      return pf.serialize(this);
    }
  },
  U = class {
    constructor(e, r) {
      (this.segments = e),
        (this.children = r),
        (this.parent = null),
        Object.values(r).forEach((i) => (i.parent = this));
    }
    hasChildren() {
      return this.numberOfChildren > 0;
    }
    get numberOfChildren() {
      return Object.keys(this.children).length;
    }
    toString() {
      return sr(this);
    }
  },
  Et = class {
    constructor(e, r) {
      (this.path = e), (this.parameters = r);
    }
    get parameterMap() {
      return (this._parameterMap ??= si(this.parameters)), this._parameterMap;
    }
    toString() {
      return tc(this);
    }
  };
function hf(t, e) {
  return St(t, e) && t.every((r, i) => We(r.parameters, e[i].parameters));
}
function St(t, e) {
  return t.length !== e.length ? !1 : t.every((r, i) => r.path === e[i].path);
}
function ff(t, e) {
  let r = [];
  return (
    Object.entries(t.children).forEach(([i, n]) => {
      i === R && (r = r.concat(e(n, i)));
    }),
    Object.entries(t.children).forEach(([i, n]) => {
      i !== R && (r = r.concat(e(n, i)));
    }),
    r
  );
}
var bs = (() => {
    let e = class e {};
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵprov = v({ token: e, factory: () => new lr(), providedIn: "root" }));
    let t = e;
    return t;
  })(),
  lr = class {
    parse(e) {
      let r = new Zo(e);
      return new ot(
        r.parseRootSegment(),
        r.parseQueryParams(),
        r.parseFragment(),
      );
    }
    serialize(e) {
      let r = `/${zi(e.root, !0)}`,
        i = vf(e.queryParams),
        n = typeof e.fragment == "string" ? `#${mf(e.fragment)}` : "";
      return `${r}${i}${n}`;
    }
  },
  pf = new lr();
function sr(t) {
  return t.segments.map((e) => tc(e)).join("/");
}
function zi(t, e) {
  if (!t.hasChildren()) return sr(t);
  if (e) {
    let r = t.children[R] ? zi(t.children[R], !1) : "",
      i = [];
    return (
      Object.entries(t.children).forEach(([n, o]) => {
        n !== R && i.push(`${n}:${zi(o, !1)}`);
      }),
      i.length > 0 ? `${r}(${i.join("//")})` : r
    );
  } else {
    let r = ff(t, (i, n) =>
      n === R ? [zi(t.children[R], !1)] : [`${n}:${zi(i, !1)}`],
    );
    return Object.keys(t.children).length === 1 && t.children[R] != null
      ? `${sr(t)}/${r[0]}`
      : `${sr(t)}/(${r.join("//")})`;
  }
}
function ec(t) {
  return encodeURIComponent(t)
    .replace(/%40/g, "@")
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",");
}
function nr(t) {
  return ec(t).replace(/%3B/gi, ";");
}
function mf(t) {
  return encodeURI(t);
}
function Xo(t) {
  return ec(t)
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/%26/gi, "&");
}
function ar(t) {
  return decodeURIComponent(t);
}
function Hl(t) {
  return ar(t.replace(/\+/g, "%20"));
}
function tc(t) {
  return `${Xo(t.path)}${gf(t.parameters)}`;
}
function gf(t) {
  return Object.entries(t)
    .map(([e, r]) => `;${Xo(e)}=${Xo(r)}`)
    .join("");
}
function vf(t) {
  let e = Object.entries(t)
    .map(([r, i]) =>
      Array.isArray(i)
        ? i.map((n) => `${nr(r)}=${nr(n)}`).join("&")
        : `${nr(r)}=${nr(i)}`,
    )
    .filter((r) => r);
  return e.length ? `?${e.join("&")}` : "";
}
var _f = /^[^\/()?;#]+/;
function $o(t) {
  let e = t.match(_f);
  return e ? e[0] : "";
}
var yf = /^[^\/()?;=#]+/;
function bf(t) {
  let e = t.match(yf);
  return e ? e[0] : "";
}
var xf = /^[^=?&#]+/;
function wf(t) {
  let e = t.match(xf);
  return e ? e[0] : "";
}
var Cf = /^[^&#]+/;
function Ef(t) {
  let e = t.match(Cf);
  return e ? e[0] : "";
}
var Zo = class {
  constructor(e) {
    (this.url = e), (this.remaining = e);
  }
  parseRootSegment() {
    return (
      this.consumeOptional("/"),
      this.remaining === "" ||
      this.peekStartsWith("?") ||
      this.peekStartsWith("#")
        ? new U([], {})
        : new U([], this.parseChildren())
    );
  }
  parseQueryParams() {
    let e = {};
    if (this.consumeOptional("?"))
      do this.parseQueryParam(e);
      while (this.consumeOptional("&"));
    return e;
  }
  parseFragment() {
    return this.consumeOptional("#")
      ? decodeURIComponent(this.remaining)
      : null;
  }
  parseChildren() {
    if (this.remaining === "") return {};
    this.consumeOptional("/");
    let e = [];
    for (
      this.peekStartsWith("(") || e.push(this.parseSegment());
      this.peekStartsWith("/") &&
      !this.peekStartsWith("//") &&
      !this.peekStartsWith("/(");

    )
      this.capture("/"), e.push(this.parseSegment());
    let r = {};
    this.peekStartsWith("/(") &&
      (this.capture("/"), (r = this.parseParens(!0)));
    let i = {};
    return (
      this.peekStartsWith("(") && (i = this.parseParens(!1)),
      (e.length > 0 || Object.keys(r).length > 0) && (i[R] = new U(e, r)),
      i
    );
  }
  parseSegment() {
    let e = $o(this.remaining);
    if (e === "" && this.peekStartsWith(";")) throw new H(4009, !1);
    return this.capture(e), new Et(ar(e), this.parseMatrixParams());
  }
  parseMatrixParams() {
    let e = {};
    for (; this.consumeOptional(";"); ) this.parseParam(e);
    return e;
  }
  parseParam(e) {
    let r = bf(this.remaining);
    if (!r) return;
    this.capture(r);
    let i = "";
    if (this.consumeOptional("=")) {
      let n = $o(this.remaining);
      n && ((i = n), this.capture(i));
    }
    e[ar(r)] = ar(i);
  }
  parseQueryParam(e) {
    let r = wf(this.remaining);
    if (!r) return;
    this.capture(r);
    let i = "";
    if (this.consumeOptional("=")) {
      let s = Ef(this.remaining);
      s && ((i = s), this.capture(i));
    }
    let n = Hl(r),
      o = Hl(i);
    if (e.hasOwnProperty(n)) {
      let s = e[n];
      Array.isArray(s) || ((s = [s]), (e[n] = s)), s.push(o);
    } else e[n] = o;
  }
  parseParens(e) {
    let r = {};
    for (
      this.capture("(");
      !this.consumeOptional(")") && this.remaining.length > 0;

    ) {
      let i = $o(this.remaining),
        n = this.remaining[i.length];
      if (n !== "/" && n !== ")" && n !== ";") throw new H(4010, !1);
      let o;
      i.indexOf(":") > -1
        ? ((o = i.slice(0, i.indexOf(":"))), this.capture(o), this.capture(":"))
        : e && (o = R);
      let s = this.parseChildren();
      (r[o] = Object.keys(s).length === 1 ? s[R] : new U([], s)),
        this.consumeOptional("//");
    }
    return r;
  }
  peekStartsWith(e) {
    return this.remaining.startsWith(e);
  }
  consumeOptional(e) {
    return this.peekStartsWith(e)
      ? ((this.remaining = this.remaining.substring(e.length)), !0)
      : !1;
  }
  capture(e) {
    if (!this.consumeOptional(e)) throw new H(4011, !1);
  }
};
function ic(t) {
  return t.segments.length > 0 ? new U([], { [R]: t }) : t;
}
function nc(t) {
  let e = {};
  for (let [i, n] of Object.entries(t.children)) {
    let o = nc(n);
    if (i === R && o.segments.length === 0 && o.hasChildren())
      for (let [s, a] of Object.entries(o.children)) e[s] = a;
    else (o.segments.length > 0 || o.hasChildren()) && (e[i] = o);
  }
  let r = new U(t.segments, e);
  return Sf(r);
}
function Sf(t) {
  if (t.numberOfChildren === 1 && t.children[R]) {
    let e = t.children[R];
    return new U(t.segments.concat(e.segments), e.children);
  }
  return t;
}
function ai(t) {
  return t instanceof ot;
}
function If(t, e, r = null, i = null) {
  let n = rc(t);
  return oc(n, e, r, i);
}
function rc(t) {
  let e;
  function r(o) {
    let s = {};
    for (let c of o.children) {
      let l = r(c);
      s[c.outlet] = l;
    }
    let a = new U(o.url, s);
    return o === t && (e = a), a;
  }
  let i = r(t.root),
    n = ic(i);
  return e ?? n;
}
function oc(t, e, r, i) {
  let n = t;
  for (; n.parent; ) n = n.parent;
  if (e.length === 0) return Ho(n, n, n, r, i);
  let o = Df(e);
  if (o.toRoot()) return Ho(n, n, new U([], {}), r, i);
  let s = Af(o, n, t),
    a = s.processChildren
      ? Wi(s.segmentGroup, s.index, o.commands)
      : ac(s.segmentGroup, s.index, o.commands);
  return Ho(n, s.segmentGroup, a, r, i);
}
function cr(t) {
  return typeof t == "object" && t != null && !t.outlets && !t.segmentPath;
}
function qi(t) {
  return typeof t == "object" && t != null && t.outlets;
}
function Ho(t, e, r, i, n) {
  let o = {};
  i &&
    Object.entries(i).forEach(([c, l]) => {
      o[c] = Array.isArray(l) ? l.map((d) => `${d}`) : `${l}`;
    });
  let s;
  t === e ? (s = r) : (s = sc(t, e, r));
  let a = ic(nc(s));
  return new ot(a, o, n);
}
function sc(t, e, r) {
  let i = {};
  return (
    Object.entries(t.children).forEach(([n, o]) => {
      o === e ? (i[n] = r) : (i[n] = sc(o, e, r));
    }),
    new U(t.segments, i)
  );
}
var dr = class {
  constructor(e, r, i) {
    if (
      ((this.isAbsolute = e),
      (this.numberOfDoubleDots = r),
      (this.commands = i),
      e && i.length > 0 && cr(i[0]))
    )
      throw new H(4003, !1);
    let n = i.find(qi);
    if (n && n !== Xl(i)) throw new H(4004, !1);
  }
  toRoot() {
    return (
      this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"
    );
  }
};
function Df(t) {
  if (typeof t[0] == "string" && t.length === 1 && t[0] === "/")
    return new dr(!0, 0, t);
  let e = 0,
    r = !1,
    i = t.reduce((n, o, s) => {
      if (typeof o == "object" && o != null) {
        if (o.outlets) {
          let a = {};
          return (
            Object.entries(o.outlets).forEach(([c, l]) => {
              a[c] = typeof l == "string" ? l.split("/") : l;
            }),
            [...n, { outlets: a }]
          );
        }
        if (o.segmentPath) return [...n, o.segmentPath];
      }
      return typeof o != "string"
        ? [...n, o]
        : s === 0
          ? (o.split("/").forEach((a, c) => {
              (c == 0 && a === ".") ||
                (c == 0 && a === ""
                  ? (r = !0)
                  : a === ".."
                    ? e++
                    : a != "" && n.push(a));
            }),
            n)
          : [...n, o];
    }, []);
  return new dr(r, e, i);
}
var ri = class {
  constructor(e, r, i) {
    (this.segmentGroup = e), (this.processChildren = r), (this.index = i);
  }
};
function Af(t, e, r) {
  if (t.isAbsolute) return new ri(e, !0, 0);
  if (!r) return new ri(e, !1, NaN);
  if (r.parent === null) return new ri(r, !0, 0);
  let i = cr(t.commands[0]) ? 0 : 1,
    n = r.segments.length - 1 + i;
  return Rf(r, n, t.numberOfDoubleDots);
}
function Rf(t, e, r) {
  let i = t,
    n = e,
    o = r;
  for (; o > n; ) {
    if (((o -= n), (i = i.parent), !i)) throw new H(4005, !1);
    n = i.segments.length;
  }
  return new ri(i, !1, n - o);
}
function Of(t) {
  return qi(t[0]) ? t[0].outlets : { [R]: t };
}
function ac(t, e, r) {
  if (((t ??= new U([], {})), t.segments.length === 0 && t.hasChildren()))
    return Wi(t, e, r);
  let i = Tf(t, e, r),
    n = r.slice(i.commandIndex);
  if (i.match && i.pathIndex < t.segments.length) {
    let o = new U(t.segments.slice(0, i.pathIndex), {});
    return (
      (o.children[R] = new U(t.segments.slice(i.pathIndex), t.children)),
      Wi(o, 0, n)
    );
  } else
    return i.match && n.length === 0
      ? new U(t.segments, {})
      : i.match && !t.hasChildren()
        ? Ko(t, e, r)
        : i.match
          ? Wi(t, 0, n)
          : Ko(t, e, r);
}
function Wi(t, e, r) {
  if (r.length === 0) return new U(t.segments, {});
  {
    let i = Of(r),
      n = {};
    if (
      Object.keys(i).some((o) => o !== R) &&
      t.children[R] &&
      t.numberOfChildren === 1 &&
      t.children[R].segments.length === 0
    ) {
      let o = Wi(t.children[R], e, r);
      return new U(t.segments, o.children);
    }
    return (
      Object.entries(i).forEach(([o, s]) => {
        typeof s == "string" && (s = [s]),
          s !== null && (n[o] = ac(t.children[o], e, s));
      }),
      Object.entries(t.children).forEach(([o, s]) => {
        i[o] === void 0 && (n[o] = s);
      }),
      new U(t.segments, n)
    );
  }
}
function Tf(t, e, r) {
  let i = 0,
    n = e,
    o = { match: !1, pathIndex: 0, commandIndex: 0 };
  for (; n < t.segments.length; ) {
    if (i >= r.length) return o;
    let s = t.segments[n],
      a = r[i];
    if (qi(a)) break;
    let c = `${a}`,
      l = i < r.length - 1 ? r[i + 1] : null;
    if (n > 0 && c === void 0) break;
    if (c && l && typeof l == "object" && l.outlets === void 0) {
      if (!Gl(c, l, s)) return o;
      i += 2;
    } else {
      if (!Gl(c, {}, s)) return o;
      i++;
    }
    n++;
  }
  return { match: !0, pathIndex: n, commandIndex: i };
}
function Ko(t, e, r) {
  let i = t.segments.slice(0, e),
    n = 0;
  for (; n < r.length; ) {
    let o = r[n];
    if (qi(o)) {
      let c = Mf(o.outlets);
      return new U(i, c);
    }
    if (n === 0 && cr(r[0])) {
      let c = t.segments[e];
      i.push(new Et(c.path, Wl(r[0]))), n++;
      continue;
    }
    let s = qi(o) ? o.outlets[R] : `${o}`,
      a = n < r.length - 1 ? r[n + 1] : null;
    s && a && cr(a)
      ? (i.push(new Et(s, Wl(a))), (n += 2))
      : (i.push(new Et(s, {})), n++);
  }
  return new U(i, {});
}
function Mf(t) {
  let e = {};
  return (
    Object.entries(t).forEach(([r, i]) => {
      typeof i == "string" && (i = [i]),
        i !== null && (e[r] = Ko(new U([], {}), 0, i));
    }),
    e
  );
}
function Wl(t) {
  let e = {};
  return Object.entries(t).forEach(([r, i]) => (e[r] = `${i}`)), e;
}
function Gl(t, e, r) {
  return t == r.path && We(e, r.parameters);
}
var Gi = "imperative",
  le = (function (t) {
    return (
      (t[(t.NavigationStart = 0)] = "NavigationStart"),
      (t[(t.NavigationEnd = 1)] = "NavigationEnd"),
      (t[(t.NavigationCancel = 2)] = "NavigationCancel"),
      (t[(t.NavigationError = 3)] = "NavigationError"),
      (t[(t.RoutesRecognized = 4)] = "RoutesRecognized"),
      (t[(t.ResolveStart = 5)] = "ResolveStart"),
      (t[(t.ResolveEnd = 6)] = "ResolveEnd"),
      (t[(t.GuardsCheckStart = 7)] = "GuardsCheckStart"),
      (t[(t.GuardsCheckEnd = 8)] = "GuardsCheckEnd"),
      (t[(t.RouteConfigLoadStart = 9)] = "RouteConfigLoadStart"),
      (t[(t.RouteConfigLoadEnd = 10)] = "RouteConfigLoadEnd"),
      (t[(t.ChildActivationStart = 11)] = "ChildActivationStart"),
      (t[(t.ChildActivationEnd = 12)] = "ChildActivationEnd"),
      (t[(t.ActivationStart = 13)] = "ActivationStart"),
      (t[(t.ActivationEnd = 14)] = "ActivationEnd"),
      (t[(t.Scroll = 15)] = "Scroll"),
      (t[(t.NavigationSkipped = 16)] = "NavigationSkipped"),
      t
    );
  })(le || {}),
  Ie = class {
    constructor(e, r) {
      (this.id = e), (this.url = r);
    }
  },
  Xi = class extends Ie {
    constructor(e, r, i = "imperative", n = null) {
      super(e, r),
        (this.type = le.NavigationStart),
        (this.navigationTrigger = i),
        (this.restoredState = n);
    }
    toString() {
      return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
    }
  },
  It = class extends Ie {
    constructor(e, r, i) {
      super(e, r), (this.urlAfterRedirects = i), (this.type = le.NavigationEnd);
    }
    toString() {
      return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
    }
  },
  we = (function (t) {
    return (
      (t[(t.Redirect = 0)] = "Redirect"),
      (t[(t.SupersededByNewNavigation = 1)] = "SupersededByNewNavigation"),
      (t[(t.NoDataFromResolver = 2)] = "NoDataFromResolver"),
      (t[(t.GuardRejected = 3)] = "GuardRejected"),
      t
    );
  })(we || {}),
  Qo = (function (t) {
    return (
      (t[(t.IgnoredSameUrlNavigation = 0)] = "IgnoredSameUrlNavigation"),
      (t[(t.IgnoredByUrlHandlingStrategy = 1)] =
        "IgnoredByUrlHandlingStrategy"),
      t
    );
  })(Qo || {}),
  st = class extends Ie {
    constructor(e, r, i, n) {
      super(e, r),
        (this.reason = i),
        (this.code = n),
        (this.type = le.NavigationCancel);
    }
    toString() {
      return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
    }
  },
  Dt = class extends Ie {
    constructor(e, r, i, n) {
      super(e, r),
        (this.reason = i),
        (this.code = n),
        (this.type = le.NavigationSkipped);
    }
  },
  Zi = class extends Ie {
    constructor(e, r, i, n) {
      super(e, r),
        (this.error = i),
        (this.target = n),
        (this.type = le.NavigationError);
    }
    toString() {
      return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
    }
  },
  ur = class extends Ie {
    constructor(e, r, i, n) {
      super(e, r),
        (this.urlAfterRedirects = i),
        (this.state = n),
        (this.type = le.RoutesRecognized);
    }
    toString() {
      return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Jo = class extends Ie {
    constructor(e, r, i, n) {
      super(e, r),
        (this.urlAfterRedirects = i),
        (this.state = n),
        (this.type = le.GuardsCheckStart);
    }
    toString() {
      return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  es = class extends Ie {
    constructor(e, r, i, n, o) {
      super(e, r),
        (this.urlAfterRedirects = i),
        (this.state = n),
        (this.shouldActivate = o),
        (this.type = le.GuardsCheckEnd);
    }
    toString() {
      return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
    }
  },
  ts = class extends Ie {
    constructor(e, r, i, n) {
      super(e, r),
        (this.urlAfterRedirects = i),
        (this.state = n),
        (this.type = le.ResolveStart);
    }
    toString() {
      return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  is = class extends Ie {
    constructor(e, r, i, n) {
      super(e, r),
        (this.urlAfterRedirects = i),
        (this.state = n),
        (this.type = le.ResolveEnd);
    }
    toString() {
      return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  ns = class {
    constructor(e) {
      (this.route = e), (this.type = le.RouteConfigLoadStart);
    }
    toString() {
      return `RouteConfigLoadStart(path: ${this.route.path})`;
    }
  },
  rs = class {
    constructor(e) {
      (this.route = e), (this.type = le.RouteConfigLoadEnd);
    }
    toString() {
      return `RouteConfigLoadEnd(path: ${this.route.path})`;
    }
  },
  os = class {
    constructor(e) {
      (this.snapshot = e), (this.type = le.ChildActivationStart);
    }
    toString() {
      return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  ss = class {
    constructor(e) {
      (this.snapshot = e), (this.type = le.ChildActivationEnd);
    }
    toString() {
      return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  as = class {
    constructor(e) {
      (this.snapshot = e), (this.type = le.ActivationStart);
    }
    toString() {
      return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  ls = class {
    constructor(e) {
      (this.snapshot = e), (this.type = le.ActivationEnd);
    }
    toString() {
      return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  };
var Ki = class {},
  Qi = class {
    constructor(e) {
      this.url = e;
    }
  };
var cs = class {
    constructor() {
      (this.outlet = null),
        (this.route = null),
        (this.injector = null),
        (this.children = new vr()),
        (this.attachRef = null);
    }
  },
  vr = (() => {
    let e = class e {
      constructor() {
        this.contexts = new Map();
      }
      onChildOutletCreated(i, n) {
        let o = this.getOrCreateContext(i);
        (o.outlet = n), this.contexts.set(i, o);
      }
      onChildOutletDestroyed(i) {
        let n = this.getContext(i);
        n && ((n.outlet = null), (n.attachRef = null));
      }
      onOutletDeactivated() {
        let i = this.contexts;
        return (this.contexts = new Map()), i;
      }
      onOutletReAttached(i) {
        this.contexts = i;
      }
      getOrCreateContext(i) {
        let n = this.getContext(i);
        return n || ((n = new cs()), this.contexts.set(i, n)), n;
      }
      getContext(i) {
        return this.contexts.get(i) || null;
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })(),
  hr = class {
    constructor(e) {
      this._root = e;
    }
    get root() {
      return this._root.value;
    }
    parent(e) {
      let r = this.pathFromRoot(e);
      return r.length > 1 ? r[r.length - 2] : null;
    }
    children(e) {
      let r = ds(e, this._root);
      return r ? r.children.map((i) => i.value) : [];
    }
    firstChild(e) {
      let r = ds(e, this._root);
      return r && r.children.length > 0 ? r.children[0].value : null;
    }
    siblings(e) {
      let r = us(e, this._root);
      return r.length < 2
        ? []
        : r[r.length - 2].children.map((n) => n.value).filter((n) => n !== e);
    }
    pathFromRoot(e) {
      return us(e, this._root).map((r) => r.value);
    }
  };
function ds(t, e) {
  if (t === e.value) return e;
  for (let r of e.children) {
    let i = ds(t, r);
    if (i) return i;
  }
  return null;
}
function us(t, e) {
  if (t === e.value) return [e];
  for (let r of e.children) {
    let i = us(t, r);
    if (i.length) return i.unshift(e), i;
  }
  return [];
}
var xe = class {
  constructor(e, r) {
    (this.value = e), (this.children = r);
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function ni(t) {
  let e = {};
  return t && t.children.forEach((r) => (e[r.value.outlet] = r)), e;
}
var fr = class extends hr {
  constructor(e, r) {
    super(e), (this.snapshot = r), ws(this, e);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function lc(t) {
  let e = Ff(t),
    r = new J([new Et("", {})]),
    i = new J({}),
    n = new J({}),
    o = new J({}),
    s = new J(""),
    a = new li(r, i, o, s, n, R, t, e.root);
  return (a.snapshot = e.root), new fr(new xe(a, []), e);
}
function Ff(t) {
  let e = {},
    r = {},
    i = {},
    n = "",
    o = new Ji([], e, i, n, r, R, t, null, {});
  return new pr("", new xe(o, []));
}
var li = class {
  constructor(e, r, i, n, o, s, a, c) {
    (this.urlSubject = e),
      (this.paramsSubject = r),
      (this.queryParamsSubject = i),
      (this.fragmentSubject = n),
      (this.dataSubject = o),
      (this.outlet = s),
      (this.component = a),
      (this._futureSnapshot = c),
      (this.title = this.dataSubject?.pipe(w((l) => l[nn])) ?? C(void 0)),
      (this.url = e),
      (this.params = r),
      (this.queryParams = i),
      (this.fragment = n),
      (this.data = o);
  }
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    return (
      (this._paramMap ??= this.params.pipe(w((e) => si(e)))), this._paramMap
    );
  }
  get queryParamMap() {
    return (
      (this._queryParamMap ??= this.queryParams.pipe(w((e) => si(e)))),
      this._queryParamMap
    );
  }
  toString() {
    return this.snapshot
      ? this.snapshot.toString()
      : `Future(${this._futureSnapshot})`;
  }
};
function xs(t, e, r = "emptyOnly") {
  let i,
    { routeConfig: n } = t;
  return (
    e !== null &&
    (r === "always" ||
      n?.path === "" ||
      (!e.component && !e.routeConfig?.loadComponent))
      ? (i = {
          params: f(f({}, e.params), t.params),
          data: f(f({}, e.data), t.data),
          resolve: f(f(f(f({}, t.data), e.data), n?.data), t._resolvedData),
        })
      : (i = {
          params: f({}, t.params),
          data: f({}, t.data),
          resolve: f(f({}, t.data), t._resolvedData ?? {}),
        }),
    n && dc(n) && (i.resolve[nn] = n.title),
    i
  );
}
var Ji = class {
    get title() {
      return this.data?.[nn];
    }
    constructor(e, r, i, n, o, s, a, c, l) {
      (this.url = e),
        (this.params = r),
        (this.queryParams = i),
        (this.fragment = n),
        (this.data = o),
        (this.outlet = s),
        (this.component = a),
        (this.routeConfig = c),
        (this._resolve = l);
    }
    get root() {
      return this._routerState.root;
    }
    get parent() {
      return this._routerState.parent(this);
    }
    get firstChild() {
      return this._routerState.firstChild(this);
    }
    get children() {
      return this._routerState.children(this);
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this);
    }
    get paramMap() {
      return (this._paramMap ??= si(this.params)), this._paramMap;
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= si(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      let e = this.url.map((i) => i.toString()).join("/"),
        r = this.routeConfig ? this.routeConfig.path : "";
      return `Route(url:'${e}', path:'${r}')`;
    }
  },
  pr = class extends hr {
    constructor(e, r) {
      super(r), (this.url = e), ws(this, r);
    }
    toString() {
      return cc(this._root);
    }
  };
function ws(t, e) {
  (e.value._routerState = t), e.children.forEach((r) => ws(t, r));
}
function cc(t) {
  let e = t.children.length > 0 ? ` { ${t.children.map(cc).join(", ")} } ` : "";
  return `${t.value}${e}`;
}
function Wo(t) {
  if (t.snapshot) {
    let e = t.snapshot,
      r = t._futureSnapshot;
    (t.snapshot = r),
      We(e.queryParams, r.queryParams) ||
        t.queryParamsSubject.next(r.queryParams),
      e.fragment !== r.fragment && t.fragmentSubject.next(r.fragment),
      We(e.params, r.params) || t.paramsSubject.next(r.params),
      lf(e.url, r.url) || t.urlSubject.next(r.url),
      We(e.data, r.data) || t.dataSubject.next(r.data);
  } else
    (t.snapshot = t._futureSnapshot),
      t.dataSubject.next(t._futureSnapshot.data);
}
function hs(t, e) {
  let r = We(t.params, e.params) && hf(t.url, e.url),
    i = !t.parent != !e.parent;
  return r && !i && (!t.parent || hs(t.parent, e.parent));
}
function dc(t) {
  return typeof t.title == "string" || t.title === null;
}
var rn = (() => {
    let e = class e {
      constructor() {
        (this.activated = null),
          (this._activatedRoute = null),
          (this.name = R),
          (this.activateEvents = new Y()),
          (this.deactivateEvents = new Y()),
          (this.attachEvents = new Y()),
          (this.detachEvents = new Y()),
          (this.parentContexts = m(vr)),
          (this.location = m(vt)),
          (this.changeDetector = m(ye)),
          (this.environmentInjector = m($t)),
          (this.inputBinder = m(Cs, { optional: !0 })),
          (this.supportsBindingToComponentInputs = !0);
      }
      get activatedComponentRef() {
        return this.activated;
      }
      ngOnChanges(i) {
        if (i.name) {
          let { firstChange: n, previousValue: o } = i.name;
          if (n) return;
          this.isTrackedInParentContexts(o) &&
            (this.deactivate(), this.parentContexts.onChildOutletDestroyed(o)),
            this.initializeOutletWithName();
        }
      }
      ngOnDestroy() {
        this.isTrackedInParentContexts(this.name) &&
          this.parentContexts.onChildOutletDestroyed(this.name),
          this.inputBinder?.unsubscribeFromRouteData(this);
      }
      isTrackedInParentContexts(i) {
        return this.parentContexts.getContext(i)?.outlet === this;
      }
      ngOnInit() {
        this.initializeOutletWithName();
      }
      initializeOutletWithName() {
        if (
          (this.parentContexts.onChildOutletCreated(this.name, this),
          this.activated)
        )
          return;
        let i = this.parentContexts.getContext(this.name);
        i?.route &&
          (i.attachRef
            ? this.attach(i.attachRef, i.route)
            : this.activateWith(i.route, i.injector));
      }
      get isActivated() {
        return !!this.activated;
      }
      get component() {
        if (!this.activated) throw new H(4012, !1);
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated) throw new H(4012, !1);
        return this._activatedRoute;
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
      }
      detach() {
        if (!this.activated) throw new H(4012, !1);
        this.location.detach();
        let i = this.activated;
        return (
          (this.activated = null),
          (this._activatedRoute = null),
          this.detachEvents.emit(i.instance),
          i
        );
      }
      attach(i, n) {
        (this.activated = i),
          (this._activatedRoute = n),
          this.location.insert(i.hostView),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.attachEvents.emit(i.instance);
      }
      deactivate() {
        if (this.activated) {
          let i = this.component;
          this.activated.destroy(),
            (this.activated = null),
            (this._activatedRoute = null),
            this.deactivateEvents.emit(i);
        }
      }
      activateWith(i, n) {
        if (this.isActivated) throw new H(4013, !1);
        this._activatedRoute = i;
        let o = this.location,
          a = i.snapshot.component,
          c = this.parentContexts.getOrCreateContext(this.name).children,
          l = new fs(i, c, o.injector);
        (this.activated = o.createComponent(a, {
          index: o.length,
          injector: l,
          environmentInjector: n ?? this.environmentInjector,
        })),
          this.changeDetector.markForCheck(),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.activateEvents.emit(this.activated.instance);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵdir = Q({
        type: e,
        selectors: [["router-outlet"]],
        inputs: { name: "name" },
        outputs: {
          activateEvents: "activate",
          deactivateEvents: "deactivate",
          attachEvents: "attach",
          detachEvents: "detach",
        },
        exportAs: ["outlet"],
        standalone: !0,
        features: [Ke],
      }));
    let t = e;
    return t;
  })(),
  fs = class {
    constructor(e, r, i) {
      (this.route = e),
        (this.childContexts = r),
        (this.parent = i),
        (this.__ngOutletInjector = !0);
    }
    get(e, r) {
      return e === li
        ? this.route
        : e === vr
          ? this.childContexts
          : this.parent.get(e, r);
    }
  },
  Cs = new g("");
function kf(t, e, r) {
  let i = en(t, e._root, r ? r._root : void 0);
  return new fr(i, e);
}
function en(t, e, r) {
  if (r && t.shouldReuseRoute(e.value, r.value.snapshot)) {
    let i = r.value;
    i._futureSnapshot = e.value;
    let n = Pf(t, e, r);
    return new xe(i, n);
  } else {
    if (t.shouldAttach(e.value)) {
      let o = t.retrieve(e.value);
      if (o !== null) {
        let s = o.route;
        return (
          (s.value._futureSnapshot = e.value),
          (s.children = e.children.map((a) => en(t, a))),
          s
        );
      }
    }
    let i = Nf(e.value),
      n = e.children.map((o) => en(t, o));
    return new xe(i, n);
  }
}
function Pf(t, e, r) {
  return e.children.map((i) => {
    for (let n of r.children)
      if (t.shouldReuseRoute(i.value, n.value.snapshot)) return en(t, i, n);
    return en(t, i);
  });
}
function Nf(t) {
  return new li(
    new J(t.url),
    new J(t.params),
    new J(t.queryParams),
    new J(t.fragment),
    new J(t.data),
    t.outlet,
    t.component,
    t,
  );
}
var uc = "ngNavigationCancelingError";
function hc(t, e) {
  let { redirectTo: r, navigationBehaviorOptions: i } = ai(e)
      ? { redirectTo: e, navigationBehaviorOptions: void 0 }
      : e,
    n = fc(!1, we.Redirect);
  return (n.url = r), (n.navigationBehaviorOptions = i), n;
}
function fc(t, e) {
  let r = new Error(`NavigationCancelingError: ${t || ""}`);
  return (r[uc] = !0), (r.cancellationCode = e), r;
}
function Lf(t) {
  return pc(t) && ai(t.url);
}
function pc(t) {
  return !!t && t[uc];
}
var jf = (() => {
  let e = class e {};
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵcmp = W({
      type: e,
      selectors: [["ng-component"]],
      standalone: !0,
      features: [G],
      decls: 1,
      vars: 0,
      template: function (n, o) {
        n & 1 && V(0, "router-outlet");
      },
      dependencies: [rn],
      encapsulation: 2,
    }));
  let t = e;
  return t;
})();
function Vf(t, e) {
  return (
    t.providers &&
      !t._injector &&
      (t._injector = dl(t.providers, e, `Route: ${t.path}`)),
    t._injector ?? e
  );
}
function Es(t) {
  let e = t.children && t.children.map(Es),
    r = e ? E(f({}, t), { children: e }) : f({}, t);
  return (
    !r.component &&
      !r.loadComponent &&
      (e || r.loadChildren) &&
      r.outlet &&
      r.outlet !== R &&
      (r.component = jf),
    r
  );
}
function Ge(t) {
  return t.outlet || R;
}
function Uf(t, e) {
  let r = t.filter((i) => Ge(i) === e);
  return r.push(...t.filter((i) => Ge(i) !== e)), r;
}
function on(t) {
  if (!t) return null;
  if (t.routeConfig?._injector) return t.routeConfig._injector;
  for (let e = t.parent; e; e = e.parent) {
    let r = e.routeConfig;
    if (r?._loadedInjector) return r._loadedInjector;
    if (r?._injector) return r._injector;
  }
  return null;
}
var Bf = (t, e, r, i) =>
    w(
      (n) => (
        new ps(e, n.targetRouterState, n.currentRouterState, r, i).activate(t),
        n
      ),
    ),
  ps = class {
    constructor(e, r, i, n, o) {
      (this.routeReuseStrategy = e),
        (this.futureState = r),
        (this.currState = i),
        (this.forwardEvent = n),
        (this.inputBindingEnabled = o);
    }
    activate(e) {
      let r = this.futureState._root,
        i = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(r, i, e),
        Wo(this.futureState.root),
        this.activateChildRoutes(r, i, e);
    }
    deactivateChildRoutes(e, r, i) {
      let n = ni(r);
      e.children.forEach((o) => {
        let s = o.value.outlet;
        this.deactivateRoutes(o, n[s], i), delete n[s];
      }),
        Object.values(n).forEach((o) => {
          this.deactivateRouteAndItsChildren(o, i);
        });
    }
    deactivateRoutes(e, r, i) {
      let n = e.value,
        o = r ? r.value : null;
      if (n === o)
        if (n.component) {
          let s = i.getContext(n.outlet);
          s && this.deactivateChildRoutes(e, r, s.children);
        } else this.deactivateChildRoutes(e, r, i);
      else o && this.deactivateRouteAndItsChildren(r, i);
    }
    deactivateRouteAndItsChildren(e, r) {
      e.value.component &&
      this.routeReuseStrategy.shouldDetach(e.value.snapshot)
        ? this.detachAndStoreRouteSubtree(e, r)
        : this.deactivateRouteAndOutlet(e, r);
    }
    detachAndStoreRouteSubtree(e, r) {
      let i = r.getContext(e.value.outlet),
        n = i && e.value.component ? i.children : r,
        o = ni(e);
      for (let s of Object.values(o)) this.deactivateRouteAndItsChildren(s, n);
      if (i && i.outlet) {
        let s = i.outlet.detach(),
          a = i.children.onOutletDeactivated();
        this.routeReuseStrategy.store(e.value.snapshot, {
          componentRef: s,
          route: e,
          contexts: a,
        });
      }
    }
    deactivateRouteAndOutlet(e, r) {
      let i = r.getContext(e.value.outlet),
        n = i && e.value.component ? i.children : r,
        o = ni(e);
      for (let s of Object.values(o)) this.deactivateRouteAndItsChildren(s, n);
      i &&
        (i.outlet && (i.outlet.deactivate(), i.children.onOutletDeactivated()),
        (i.attachRef = null),
        (i.route = null));
    }
    activateChildRoutes(e, r, i) {
      let n = ni(r);
      e.children.forEach((o) => {
        this.activateRoutes(o, n[o.value.outlet], i),
          this.forwardEvent(new ls(o.value.snapshot));
      }),
        e.children.length && this.forwardEvent(new ss(e.value.snapshot));
    }
    activateRoutes(e, r, i) {
      let n = e.value,
        o = r ? r.value : null;
      if ((Wo(n), n === o))
        if (n.component) {
          let s = i.getOrCreateContext(n.outlet);
          this.activateChildRoutes(e, r, s.children);
        } else this.activateChildRoutes(e, r, i);
      else if (n.component) {
        let s = i.getOrCreateContext(n.outlet);
        if (this.routeReuseStrategy.shouldAttach(n.snapshot)) {
          let a = this.routeReuseStrategy.retrieve(n.snapshot);
          this.routeReuseStrategy.store(n.snapshot, null),
            s.children.onOutletReAttached(a.contexts),
            (s.attachRef = a.componentRef),
            (s.route = a.route.value),
            s.outlet && s.outlet.attach(a.componentRef, a.route.value),
            Wo(a.route.value),
            this.activateChildRoutes(e, null, s.children);
        } else {
          let a = on(n.snapshot);
          (s.attachRef = null),
            (s.route = n),
            (s.injector = a),
            s.outlet && s.outlet.activateWith(n, s.injector),
            this.activateChildRoutes(e, null, s.children);
        }
      } else this.activateChildRoutes(e, null, i);
    }
  },
  mr = class {
    constructor(e) {
      (this.path = e), (this.route = this.path[this.path.length - 1]);
    }
  },
  oi = class {
    constructor(e, r) {
      (this.component = e), (this.route = r);
    }
  };
function zf(t, e, r) {
  let i = t._root,
    n = e ? e._root : null;
  return $i(i, n, r, [i.value]);
}
function $f(t) {
  let e = t.routeConfig ? t.routeConfig.canActivateChild : null;
  return !e || e.length === 0 ? null : { node: t, guards: e };
}
function di(t, e) {
  let r = Symbol(),
    i = e.get(t, r);
  return i === r ? (typeof t == "function" && !il(t) ? t : e.get(t)) : i;
}
function $i(
  t,
  e,
  r,
  i,
  n = { canDeactivateChecks: [], canActivateChecks: [] },
) {
  let o = ni(e);
  return (
    t.children.forEach((s) => {
      Hf(s, o[s.value.outlet], r, i.concat([s.value]), n),
        delete o[s.value.outlet];
    }),
    Object.entries(o).forEach(([s, a]) => Yi(a, r.getContext(s), n)),
    n
  );
}
function Hf(
  t,
  e,
  r,
  i,
  n = { canDeactivateChecks: [], canActivateChecks: [] },
) {
  let o = t.value,
    s = e ? e.value : null,
    a = r ? r.getContext(t.value.outlet) : null;
  if (s && o.routeConfig === s.routeConfig) {
    let c = Wf(s, o, o.routeConfig.runGuardsAndResolvers);
    c
      ? n.canActivateChecks.push(new mr(i))
      : ((o.data = s.data), (o._resolvedData = s._resolvedData)),
      o.component ? $i(t, e, a ? a.children : null, i, n) : $i(t, e, r, i, n),
      c &&
        a &&
        a.outlet &&
        a.outlet.isActivated &&
        n.canDeactivateChecks.push(new oi(a.outlet.component, s));
  } else
    s && Yi(e, a, n),
      n.canActivateChecks.push(new mr(i)),
      o.component
        ? $i(t, null, a ? a.children : null, i, n)
        : $i(t, null, r, i, n);
  return n;
}
function Wf(t, e, r) {
  if (typeof r == "function") return r(t, e);
  switch (r) {
    case "pathParamsChange":
      return !St(t.url, e.url);
    case "pathParamsOrQueryParamsChange":
      return !St(t.url, e.url) || !We(t.queryParams, e.queryParams);
    case "always":
      return !0;
    case "paramsOrQueryParamsChange":
      return !hs(t, e) || !We(t.queryParams, e.queryParams);
    case "paramsChange":
    default:
      return !hs(t, e);
  }
}
function Yi(t, e, r) {
  let i = ni(t),
    n = t.value;
  Object.entries(i).forEach(([o, s]) => {
    n.component
      ? e
        ? Yi(s, e.children.getContext(o), r)
        : Yi(s, null, r)
      : Yi(s, e, r);
  }),
    n.component
      ? e && e.outlet && e.outlet.isActivated
        ? r.canDeactivateChecks.push(new oi(e.outlet.component, n))
        : r.canDeactivateChecks.push(new oi(null, n))
      : r.canDeactivateChecks.push(new oi(null, n));
}
function sn(t) {
  return typeof t == "function";
}
function Gf(t) {
  return typeof t == "boolean";
}
function Yf(t) {
  return t && sn(t.canLoad);
}
function qf(t) {
  return t && sn(t.canActivate);
}
function Xf(t) {
  return t && sn(t.canActivateChild);
}
function Zf(t) {
  return t && sn(t.canDeactivate);
}
function Kf(t) {
  return t && sn(t.canMatch);
}
function mc(t) {
  return t instanceof Ha || t?.name === "EmptyError";
}
var rr = Symbol("INITIAL_VALUE");
function ci() {
  return K((t) =>
    Ii(t.map((e) => e.pipe(ie(1), pt(rr)))).pipe(
      w((e) => {
        for (let r of e)
          if (r !== !0) {
            if (r === rr) return rr;
            if (r === !1 || r instanceof ot) return r;
          }
        return !0;
      }),
      z((e) => e !== rr),
      ie(1),
    ),
  );
}
function Qf(t, e) {
  return pe((r) => {
    let {
      targetSnapshot: i,
      currentSnapshot: n,
      guards: { canActivateChecks: o, canDeactivateChecks: s },
    } = r;
    return s.length === 0 && o.length === 0
      ? C(E(f({}, r), { guardsResult: !0 }))
      : Jf(s, i, n, t).pipe(
          pe((a) => (a && Gf(a) ? ep(i, o, t, e) : C(a))),
          w((a) => E(f({}, r), { guardsResult: a })),
        );
  });
}
function Jf(t, e, r, i) {
  return fe(t).pipe(
    pe((n) => op(n.component, n.route, r, e, i)),
    tt((n) => n !== !0, !0),
  );
}
function ep(t, e, r, i) {
  return fe(e).pipe(
    Le((n) =>
      Pn(
        ip(n.route.parent, i),
        tp(n.route, i),
        rp(t, n.path, r),
        np(t, n.route, r),
      ),
    ),
    tt((n) => n !== !0, !0),
  );
}
function tp(t, e) {
  return t !== null && e && e(new as(t)), C(!0);
}
function ip(t, e) {
  return t !== null && e && e(new os(t)), C(!0);
}
function np(t, e, r) {
  let i = e.routeConfig ? e.routeConfig.canActivate : null;
  if (!i || i.length === 0) return C(!0);
  let n = i.map((o) =>
    Nt(() => {
      let s = on(e) ?? r,
        a = di(o, s),
        c = qf(a) ? a.canActivate(e, t) : Ze(s, () => a(e, t));
      return at(c).pipe(tt());
    }),
  );
  return C(n).pipe(ci());
}
function rp(t, e, r) {
  let i = e[e.length - 1],
    o = e
      .slice(0, e.length - 1)
      .reverse()
      .map((s) => $f(s))
      .filter((s) => s !== null)
      .map((s) =>
        Nt(() => {
          let a = s.guards.map((c) => {
            let l = on(s.node) ?? r,
              d = di(c, l),
              u = Xf(d) ? d.canActivateChild(i, t) : Ze(l, () => d(i, t));
            return at(u).pipe(tt());
          });
          return C(a).pipe(ci());
        }),
      );
  return C(o).pipe(ci());
}
function op(t, e, r, i, n) {
  let o = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
  if (!o || o.length === 0) return C(!0);
  let s = o.map((a) => {
    let c = on(e) ?? n,
      l = di(a, c),
      d = Zf(l) ? l.canDeactivate(t, e, r, i) : Ze(c, () => l(t, e, r, i));
    return at(d).pipe(tt());
  });
  return C(s).pipe(ci());
}
function sp(t, e, r, i) {
  let n = e.canLoad;
  if (n === void 0 || n.length === 0) return C(!0);
  let o = n.map((s) => {
    let a = di(s, t),
      c = Yf(a) ? a.canLoad(e, r) : Ze(t, () => a(e, r));
    return at(c);
  });
  return C(o).pipe(ci(), gc(i));
}
function gc(t) {
  return za(
    $((e) => {
      if (ai(e)) throw hc(t, e);
    }),
    w((e) => e === !0),
  );
}
function ap(t, e, r, i) {
  let n = e.canMatch;
  if (!n || n.length === 0) return C(!0);
  let o = n.map((s) => {
    let a = di(s, t),
      c = Kf(a) ? a.canMatch(e, r) : Ze(t, () => a(e, r));
    return at(c);
  });
  return C(o).pipe(ci(), gc(i));
}
var tn = class {
    constructor(e) {
      this.segmentGroup = e || null;
    }
  },
  gr = class extends Error {
    constructor(e) {
      super(), (this.urlTree = e);
    }
  };
function ii(t) {
  return Si(new tn(t));
}
function lp(t) {
  return Si(new H(4e3, !1));
}
function cp(t) {
  return Si(fc(!1, we.GuardRejected));
}
var ms = class {
    constructor(e, r) {
      (this.urlSerializer = e), (this.urlTree = r);
    }
    lineralizeSegments(e, r) {
      let i = [],
        n = r.root;
      for (;;) {
        if (((i = i.concat(n.segments)), n.numberOfChildren === 0)) return C(i);
        if (n.numberOfChildren > 1 || !n.children[R]) return lp(e.redirectTo);
        n = n.children[R];
      }
    }
    applyRedirectCommands(e, r, i) {
      let n = this.applyRedirectCreateUrlTree(
        r,
        this.urlSerializer.parse(r),
        e,
        i,
      );
      if (r.startsWith("/")) throw new gr(n);
      return n;
    }
    applyRedirectCreateUrlTree(e, r, i, n) {
      let o = this.createSegmentGroup(e, r.root, i, n);
      return new ot(
        o,
        this.createQueryParams(r.queryParams, this.urlTree.queryParams),
        r.fragment,
      );
    }
    createQueryParams(e, r) {
      let i = {};
      return (
        Object.entries(e).forEach(([n, o]) => {
          if (typeof o == "string" && o.startsWith(":")) {
            let a = o.substring(1);
            i[n] = r[a];
          } else i[n] = o;
        }),
        i
      );
    }
    createSegmentGroup(e, r, i, n) {
      let o = this.createSegments(e, r.segments, i, n),
        s = {};
      return (
        Object.entries(r.children).forEach(([a, c]) => {
          s[a] = this.createSegmentGroup(e, c, i, n);
        }),
        new U(o, s)
      );
    }
    createSegments(e, r, i, n) {
      return r.map((o) =>
        o.path.startsWith(":")
          ? this.findPosParam(e, o, n)
          : this.findOrReturn(o, i),
      );
    }
    findPosParam(e, r, i) {
      let n = i[r.path.substring(1)];
      if (!n) throw new H(4001, !1);
      return n;
    }
    findOrReturn(e, r) {
      let i = 0;
      for (let n of r) {
        if (n.path === e.path) return r.splice(i), n;
        i++;
      }
      return e;
    }
  },
  gs = {
    matched: !1,
    consumedSegments: [],
    remainingSegments: [],
    parameters: {},
    positionalParamSegments: {},
  };
function dp(t, e, r, i, n) {
  let o = Ss(t, e, r);
  return o.matched
    ? ((i = Vf(e, i)),
      ap(i, e, r, n).pipe(w((s) => (s === !0 ? o : f({}, gs)))))
    : C(o);
}
function Ss(t, e, r) {
  if (e.path === "**") return up(r);
  if (e.path === "")
    return e.pathMatch === "full" && (t.hasChildren() || r.length > 0)
      ? f({}, gs)
      : {
          matched: !0,
          consumedSegments: [],
          remainingSegments: r,
          parameters: {},
          positionalParamSegments: {},
        };
  let n = (e.matcher || af)(r, t, e);
  if (!n) return f({}, gs);
  let o = {};
  Object.entries(n.posParams ?? {}).forEach(([a, c]) => {
    o[a] = c.path;
  });
  let s =
    n.consumed.length > 0
      ? f(f({}, o), n.consumed[n.consumed.length - 1].parameters)
      : o;
  return {
    matched: !0,
    consumedSegments: n.consumed,
    remainingSegments: r.slice(n.consumed.length),
    parameters: s,
    positionalParamSegments: n.posParams ?? {},
  };
}
function up(t) {
  return {
    matched: !0,
    parameters: t.length > 0 ? Xl(t).parameters : {},
    consumedSegments: t,
    remainingSegments: [],
    positionalParamSegments: {},
  };
}
function Yl(t, e, r, i) {
  return r.length > 0 && pp(t, r, i)
    ? {
        segmentGroup: new U(e, fp(i, new U(r, t.children))),
        slicedSegments: [],
      }
    : r.length === 0 && mp(t, r, i)
      ? {
          segmentGroup: new U(t.segments, hp(t, r, i, t.children)),
          slicedSegments: r,
        }
      : { segmentGroup: new U(t.segments, t.children), slicedSegments: r };
}
function hp(t, e, r, i) {
  let n = {};
  for (let o of r)
    if (_r(t, e, o) && !i[Ge(o)]) {
      let s = new U([], {});
      n[Ge(o)] = s;
    }
  return f(f({}, i), n);
}
function fp(t, e) {
  let r = {};
  r[R] = e;
  for (let i of t)
    if (i.path === "" && Ge(i) !== R) {
      let n = new U([], {});
      r[Ge(i)] = n;
    }
  return r;
}
function pp(t, e, r) {
  return r.some((i) => _r(t, e, i) && Ge(i) !== R);
}
function mp(t, e, r) {
  return r.some((i) => _r(t, e, i));
}
function _r(t, e, r) {
  return (t.hasChildren() || e.length > 0) && r.pathMatch === "full"
    ? !1
    : r.path === "";
}
function gp(t, e, r, i) {
  return Ge(t) !== i && (i === R || !_r(e, r, t)) ? !1 : Ss(e, t, r).matched;
}
function vp(t, e, r) {
  return e.length === 0 && !t.children[r];
}
var vs = class {};
function _p(t, e, r, i, n, o, s = "emptyOnly") {
  return new _s(t, e, r, i, n, s, o).recognize();
}
var yp = 31,
  _s = class {
    constructor(e, r, i, n, o, s, a) {
      (this.injector = e),
        (this.configLoader = r),
        (this.rootComponentType = i),
        (this.config = n),
        (this.urlTree = o),
        (this.paramsInheritanceStrategy = s),
        (this.urlSerializer = a),
        (this.applyRedirects = new ms(this.urlSerializer, this.urlTree)),
        (this.absoluteRedirectCount = 0),
        (this.allowRedirects = !0);
    }
    noMatchError(e) {
      return new H(4002, `'${e.segmentGroup}'`);
    }
    recognize() {
      let e = Yl(this.urlTree.root, [], [], this.config).segmentGroup;
      return this.match(e).pipe(
        w((r) => {
          let i = new Ji(
              [],
              Object.freeze({}),
              Object.freeze(f({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              {},
              R,
              this.rootComponentType,
              null,
              {},
            ),
            n = new xe(i, r),
            o = new pr("", n),
            s = If(i, [], this.urlTree.queryParams, this.urlTree.fragment);
          return (
            (s.queryParams = this.urlTree.queryParams),
            (o.url = this.urlSerializer.serialize(s)),
            this.inheritParamsAndData(o._root, null),
            { state: o, tree: s }
          );
        }),
      );
    }
    match(e) {
      return this.processSegmentGroup(this.injector, this.config, e, R).pipe(
        me((i) => {
          if (i instanceof gr)
            return (this.urlTree = i.urlTree), this.match(i.urlTree.root);
          throw i instanceof tn ? this.noMatchError(i) : i;
        }),
      );
    }
    inheritParamsAndData(e, r) {
      let i = e.value,
        n = xs(i, r, this.paramsInheritanceStrategy);
      (i.params = Object.freeze(n.params)),
        (i.data = Object.freeze(n.data)),
        e.children.forEach((o) => this.inheritParamsAndData(o, i));
    }
    processSegmentGroup(e, r, i, n) {
      return i.segments.length === 0 && i.hasChildren()
        ? this.processChildren(e, r, i)
        : this.processSegment(e, r, i, i.segments, n, !0).pipe(
            w((o) => (o instanceof xe ? [o] : [])),
          );
    }
    processChildren(e, r, i) {
      let n = [];
      for (let o of Object.keys(i.children))
        o === "primary" ? n.unshift(o) : n.push(o);
      return fe(n).pipe(
        Le((o) => {
          let s = i.children[o],
            a = Uf(r, o);
          return this.processSegmentGroup(e, a, s, o);
        }),
        Bt((o, s) => (o.push(...s), o)),
        uo(null),
        Qa(),
        pe((o) => {
          if (o === null) return ii(i);
          let s = vc(o);
          return bp(s), C(s);
        }),
      );
    }
    processSegment(e, r, i, n, o, s) {
      return fe(r).pipe(
        Le((a) =>
          this.processSegmentAgainstRoute(
            a._injector ?? e,
            r,
            a,
            i,
            n,
            o,
            s,
          ).pipe(
            me((c) => {
              if (c instanceof tn) return C(null);
              throw c;
            }),
          ),
        ),
        tt((a) => !!a),
        me((a) => {
          if (mc(a)) return vp(i, n, o) ? C(new vs()) : ii(i);
          throw a;
        }),
      );
    }
    processSegmentAgainstRoute(e, r, i, n, o, s, a) {
      return gp(i, n, o, s)
        ? i.redirectTo === void 0
          ? this.matchSegmentAgainstRoute(e, n, i, o, s)
          : this.allowRedirects && a
            ? this.expandSegmentAgainstRouteUsingRedirect(e, n, r, i, o, s)
            : ii(n)
        : ii(n);
    }
    expandSegmentAgainstRouteUsingRedirect(e, r, i, n, o, s) {
      let {
        matched: a,
        consumedSegments: c,
        positionalParamSegments: l,
        remainingSegments: d,
      } = Ss(r, n, o);
      if (!a) return ii(r);
      n.redirectTo.startsWith("/") &&
        (this.absoluteRedirectCount++,
        this.absoluteRedirectCount > yp && (this.allowRedirects = !1));
      let u = this.applyRedirects.applyRedirectCommands(c, n.redirectTo, l);
      return this.applyRedirects
        .lineralizeSegments(n, u)
        .pipe(pe((p) => this.processSegment(e, i, r, p.concat(d), s, !1)));
    }
    matchSegmentAgainstRoute(e, r, i, n, o) {
      let s = dp(r, i, n, e, this.urlSerializer);
      return (
        i.path === "**" && (r.children = {}),
        s.pipe(
          K((a) =>
            a.matched
              ? ((e = i._injector ?? e),
                this.getChildConfig(e, i, n).pipe(
                  K(({ routes: c }) => {
                    let l = i._loadedInjector ?? e,
                      {
                        consumedSegments: d,
                        remainingSegments: u,
                        parameters: p,
                      } = a,
                      b = new Ji(
                        d,
                        p,
                        Object.freeze(f({}, this.urlTree.queryParams)),
                        this.urlTree.fragment,
                        wp(i),
                        Ge(i),
                        i.component ?? i._loadedComponent ?? null,
                        i,
                        Cp(i),
                      ),
                      { segmentGroup: _, slicedSegments: x } = Yl(r, d, u, c);
                    if (x.length === 0 && _.hasChildren())
                      return this.processChildren(l, c, _).pipe(
                        w((S) => (S === null ? null : new xe(b, S))),
                      );
                    if (c.length === 0 && x.length === 0)
                      return C(new xe(b, []));
                    let I = Ge(i) === o;
                    return this.processSegment(l, c, _, x, I ? R : o, !0).pipe(
                      w((S) => new xe(b, S instanceof xe ? [S] : [])),
                    );
                  }),
                ))
              : ii(r),
          ),
        )
      );
    }
    getChildConfig(e, r, i) {
      return r.children
        ? C({ routes: r.children, injector: e })
        : r.loadChildren
          ? r._loadedRoutes !== void 0
            ? C({ routes: r._loadedRoutes, injector: r._loadedInjector })
            : sp(e, r, i, this.urlSerializer).pipe(
                pe((n) =>
                  n
                    ? this.configLoader.loadChildren(e, r).pipe(
                        $((o) => {
                          (r._loadedRoutes = o.routes),
                            (r._loadedInjector = o.injector);
                        }),
                      )
                    : cp(r),
                ),
              )
          : C({ routes: [], injector: e });
    }
  };
function bp(t) {
  t.sort((e, r) =>
    e.value.outlet === R
      ? -1
      : r.value.outlet === R
        ? 1
        : e.value.outlet.localeCompare(r.value.outlet),
  );
}
function xp(t) {
  let e = t.value.routeConfig;
  return e && e.path === "";
}
function vc(t) {
  let e = [],
    r = new Set();
  for (let i of t) {
    if (!xp(i)) {
      e.push(i);
      continue;
    }
    let n = e.find((o) => i.value.routeConfig === o.value.routeConfig);
    n !== void 0 ? (n.children.push(...i.children), r.add(n)) : e.push(i);
  }
  for (let i of r) {
    let n = vc(i.children);
    e.push(new xe(i.value, n));
  }
  return e.filter((i) => !r.has(i));
}
function wp(t) {
  return t.data || {};
}
function Cp(t) {
  return t.resolve || {};
}
function Ep(t, e, r, i, n, o) {
  return pe((s) =>
    _p(t, e, r, i, s.extractedUrl, n, o).pipe(
      w(({ state: a, tree: c }) =>
        E(f({}, s), { targetSnapshot: a, urlAfterRedirects: c }),
      ),
    ),
  );
}
function Sp(t, e) {
  return pe((r) => {
    let {
      targetSnapshot: i,
      guards: { canActivateChecks: n },
    } = r;
    if (!n.length) return C(r);
    let o = new Set(n.map((c) => c.route)),
      s = new Set();
    for (let c of o) if (!s.has(c)) for (let l of _c(c)) s.add(l);
    let a = 0;
    return fe(s).pipe(
      Le((c) =>
        o.has(c)
          ? Ip(c, i, t, e)
          : ((c.data = xs(c, c.parent, t).resolve), C(void 0)),
      ),
      $(() => a++),
      fo(1),
      pe((c) => (a === s.size ? C(r) : Ne)),
    );
  });
}
function _c(t) {
  let e = t.children.map((r) => _c(r)).flat();
  return [t, ...e];
}
function Ip(t, e, r, i) {
  let n = t.routeConfig,
    o = t._resolve;
  return (
    n?.title !== void 0 && !dc(n) && (o[nn] = n.title),
    Dp(o, t, e, i).pipe(
      w(
        (s) => (
          (t._resolvedData = s), (t.data = xs(t, t.parent, r).resolve), null
        ),
      ),
    )
  );
}
function Dp(t, e, r, i) {
  let n = qo(t);
  if (n.length === 0) return C({});
  let o = {};
  return fe(n).pipe(
    pe((s) =>
      Ap(t[s], e, r, i).pipe(
        tt(),
        $((a) => {
          o[s] = a;
        }),
      ),
    ),
    fo(1),
    Xa(o),
    me((s) => (mc(s) ? Ne : Si(s))),
  );
}
function Ap(t, e, r, i) {
  let n = on(e) ?? i,
    o = di(t, n),
    s = o.resolve ? o.resolve(e, r) : Ze(n, () => o(e, r));
  return at(s);
}
function Go(t) {
  return K((e) => {
    let r = t(e);
    return r ? fe(r).pipe(w(() => e)) : C(e);
  });
}
var yc = (() => {
    let e = class e {
      buildTitle(i) {
        let n,
          o = i.root;
        for (; o !== void 0; )
          (n = this.getResolvedTitleForRoute(o) ?? n),
            (o = o.children.find((s) => s.outlet === R));
        return n;
      }
      getResolvedTitleForRoute(i) {
        return i.data[nn];
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵprov = v({ token: e, factory: () => m(Rp), providedIn: "root" }));
    let t = e;
    return t;
  })(),
  Rp = (() => {
    let e = class e extends yc {
      constructor(i) {
        super(), (this.title = i);
      }
      updateTitle(i) {
        let n = this.buildTitle(i);
        n !== void 0 && this.title.setTitle(n);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(zl));
    }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })(),
  Is = new g("", { providedIn: "root", factory: () => ({}) }),
  Ds = new g(""),
  Op = (() => {
    let e = class e {
      constructor() {
        (this.componentLoaders = new WeakMap()),
          (this.childrenLoaders = new WeakMap()),
          (this.compiler = m(Io));
      }
      loadComponent(i) {
        if (this.componentLoaders.get(i)) return this.componentLoaders.get(i);
        if (i._loadedComponent) return C(i._loadedComponent);
        this.onLoadStartListener && this.onLoadStartListener(i);
        let n = at(i.loadComponent()).pipe(
            w(bc),
            $((s) => {
              this.onLoadEndListener && this.onLoadEndListener(i),
                (i._loadedComponent = s);
            }),
            ft(() => {
              this.componentLoaders.delete(i);
            }),
          ),
          o = new ao(n, () => new L()).pipe(so());
        return this.componentLoaders.set(i, o), o;
      }
      loadChildren(i, n) {
        if (this.childrenLoaders.get(n)) return this.childrenLoaders.get(n);
        if (n._loadedRoutes)
          return C({ routes: n._loadedRoutes, injector: n._loadedInjector });
        this.onLoadStartListener && this.onLoadStartListener(n);
        let s = Tp(n, this.compiler, i, this.onLoadEndListener).pipe(
            ft(() => {
              this.childrenLoaders.delete(n);
            }),
          ),
          a = new ao(s, () => new L()).pipe(so());
        return this.childrenLoaders.set(n, a), a;
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })();
function Tp(t, e, r, i) {
  return at(t.loadChildren()).pipe(
    w(bc),
    pe((n) =>
      n instanceof cl || Array.isArray(n) ? C(n) : fe(e.compileModuleAsync(n)),
    ),
    w((n) => {
      i && i(t);
      let o,
        s,
        a = !1;
      return (
        Array.isArray(n)
          ? ((s = n), (a = !0))
          : ((o = n.create(r).injector),
            (s = o.get(Ds, [], { optional: !0, self: !0 }).flat())),
        { routes: s.map(Es), injector: o }
      );
    }),
  );
}
function Mp(t) {
  return t && typeof t == "object" && "default" in t;
}
function bc(t) {
  return Mp(t) ? t.default : t;
}
var As = (() => {
    let e = class e {};
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵprov = v({ token: e, factory: () => m(Fp), providedIn: "root" }));
    let t = e;
    return t;
  })(),
  Fp = (() => {
    let e = class e {
      shouldProcessUrl(i) {
        return !0;
      }
      extract(i) {
        return i;
      }
      merge(i, n) {
        return i;
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })(),
  kp = new g("");
var Pp = (() => {
  let e = class e {
    get hasRequestedNavigation() {
      return this.navigationId !== 0;
    }
    constructor() {
      (this.currentNavigation = null),
        (this.currentTransition = null),
        (this.lastSuccessfulNavigation = null),
        (this.events = new L()),
        (this.transitionAbortSubject = new L()),
        (this.configLoader = m(Op)),
        (this.environmentInjector = m($t)),
        (this.urlSerializer = m(bs)),
        (this.rootContexts = m(vr)),
        (this.location = m(Qt)),
        (this.inputBindingEnabled = m(Cs, { optional: !0 }) !== null),
        (this.titleStrategy = m(yc)),
        (this.options = m(Is, { optional: !0 }) || {}),
        (this.paramsInheritanceStrategy =
          this.options.paramsInheritanceStrategy || "emptyOnly"),
        (this.urlHandlingStrategy = m(As)),
        (this.createViewTransition = m(kp, { optional: !0 })),
        (this.navigationId = 0),
        (this.afterPreactivation = () => C(void 0)),
        (this.rootComponentType = null);
      let i = (o) => this.events.next(new ns(o)),
        n = (o) => this.events.next(new rs(o));
      (this.configLoader.onLoadEndListener = n),
        (this.configLoader.onLoadStartListener = i);
    }
    complete() {
      this.transitions?.complete();
    }
    handleNavigationRequest(i) {
      let n = ++this.navigationId;
      this.transitions?.next(E(f(f({}, this.transitions.value), i), { id: n }));
    }
    setupNavigations(i, n, o) {
      return (
        (this.transitions = new J({
          id: 0,
          currentUrlTree: n,
          currentRawUrl: n,
          extractedUrl: this.urlHandlingStrategy.extract(n),
          urlAfterRedirects: this.urlHandlingStrategy.extract(n),
          rawUrl: n,
          extras: {},
          resolve: null,
          reject: null,
          promise: Promise.resolve(!0),
          source: Gi,
          restoredState: null,
          currentSnapshot: o.snapshot,
          targetSnapshot: null,
          currentRouterState: o,
          targetRouterState: null,
          guards: { canActivateChecks: [], canDeactivateChecks: [] },
          guardsResult: null,
        })),
        this.transitions.pipe(
          z((s) => s.id !== 0),
          w((s) =>
            E(f({}, s), {
              extractedUrl: this.urlHandlingStrategy.extract(s.rawUrl),
            }),
          ),
          K((s) => {
            let a = !1,
              c = !1;
            return C(s).pipe(
              K((l) => {
                if (this.navigationId > s.id)
                  return (
                    this.cancelNavigationTransition(
                      s,
                      "",
                      we.SupersededByNewNavigation,
                    ),
                    Ne
                  );
                (this.currentTransition = s),
                  (this.currentNavigation = {
                    id: l.id,
                    initialUrl: l.rawUrl,
                    extractedUrl: l.extractedUrl,
                    trigger: l.source,
                    extras: l.extras,
                    previousNavigation: this.lastSuccessfulNavigation
                      ? E(f({}, this.lastSuccessfulNavigation), {
                          previousNavigation: null,
                        })
                      : null,
                  });
                let d =
                    !i.navigated ||
                    this.isUpdatingInternalState() ||
                    this.isUpdatedBrowserUrl(),
                  u = l.extras.onSameUrlNavigation ?? i.onSameUrlNavigation;
                if (!d && u !== "reload") {
                  let p = "";
                  return (
                    this.events.next(
                      new Dt(
                        l.id,
                        this.urlSerializer.serialize(l.rawUrl),
                        p,
                        Qo.IgnoredSameUrlNavigation,
                      ),
                    ),
                    l.resolve(null),
                    Ne
                  );
                }
                if (this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))
                  return C(l).pipe(
                    K((p) => {
                      let b = this.transitions?.getValue();
                      return (
                        this.events.next(
                          new Xi(
                            p.id,
                            this.urlSerializer.serialize(p.extractedUrl),
                            p.source,
                            p.restoredState,
                          ),
                        ),
                        b !== this.transitions?.getValue()
                          ? Ne
                          : Promise.resolve(p)
                      );
                    }),
                    Ep(
                      this.environmentInjector,
                      this.configLoader,
                      this.rootComponentType,
                      i.config,
                      this.urlSerializer,
                      this.paramsInheritanceStrategy,
                    ),
                    $((p) => {
                      (s.targetSnapshot = p.targetSnapshot),
                        (s.urlAfterRedirects = p.urlAfterRedirects),
                        (this.currentNavigation = E(
                          f({}, this.currentNavigation),
                          { finalUrl: p.urlAfterRedirects },
                        ));
                      let b = new ur(
                        p.id,
                        this.urlSerializer.serialize(p.extractedUrl),
                        this.urlSerializer.serialize(p.urlAfterRedirects),
                        p.targetSnapshot,
                      );
                      this.events.next(b);
                    }),
                  );
                if (
                  d &&
                  this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)
                ) {
                  let {
                      id: p,
                      extractedUrl: b,
                      source: _,
                      restoredState: x,
                      extras: I,
                    } = l,
                    S = new Xi(p, this.urlSerializer.serialize(b), _, x);
                  this.events.next(S);
                  let Z = lc(this.rootComponentType).snapshot;
                  return (
                    (this.currentTransition = s =
                      E(f({}, l), {
                        targetSnapshot: Z,
                        urlAfterRedirects: b,
                        extras: E(f({}, I), {
                          skipLocationChange: !1,
                          replaceUrl: !1,
                        }),
                      })),
                    (this.currentNavigation.finalUrl = b),
                    C(s)
                  );
                } else {
                  let p = "";
                  return (
                    this.events.next(
                      new Dt(
                        l.id,
                        this.urlSerializer.serialize(l.extractedUrl),
                        p,
                        Qo.IgnoredByUrlHandlingStrategy,
                      ),
                    ),
                    l.resolve(null),
                    Ne
                  );
                }
              }),
              $((l) => {
                let d = new Jo(
                  l.id,
                  this.urlSerializer.serialize(l.extractedUrl),
                  this.urlSerializer.serialize(l.urlAfterRedirects),
                  l.targetSnapshot,
                );
                this.events.next(d);
              }),
              w(
                (l) => (
                  (this.currentTransition = s =
                    E(f({}, l), {
                      guards: zf(
                        l.targetSnapshot,
                        l.currentSnapshot,
                        this.rootContexts,
                      ),
                    })),
                  s
                ),
              ),
              Qf(this.environmentInjector, (l) => this.events.next(l)),
              $((l) => {
                if (((s.guardsResult = l.guardsResult), ai(l.guardsResult)))
                  throw hc(this.urlSerializer, l.guardsResult);
                let d = new es(
                  l.id,
                  this.urlSerializer.serialize(l.extractedUrl),
                  this.urlSerializer.serialize(l.urlAfterRedirects),
                  l.targetSnapshot,
                  !!l.guardsResult,
                );
                this.events.next(d);
              }),
              z((l) =>
                l.guardsResult
                  ? !0
                  : (this.cancelNavigationTransition(l, "", we.GuardRejected),
                    !1),
              ),
              Go((l) => {
                if (l.guards.canActivateChecks.length)
                  return C(l).pipe(
                    $((d) => {
                      let u = new ts(
                        d.id,
                        this.urlSerializer.serialize(d.extractedUrl),
                        this.urlSerializer.serialize(d.urlAfterRedirects),
                        d.targetSnapshot,
                      );
                      this.events.next(u);
                    }),
                    K((d) => {
                      let u = !1;
                      return C(d).pipe(
                        Sp(
                          this.paramsInheritanceStrategy,
                          this.environmentInjector,
                        ),
                        $({
                          next: () => (u = !0),
                          complete: () => {
                            u ||
                              this.cancelNavigationTransition(
                                d,
                                "",
                                we.NoDataFromResolver,
                              );
                          },
                        }),
                      );
                    }),
                    $((d) => {
                      let u = new is(
                        d.id,
                        this.urlSerializer.serialize(d.extractedUrl),
                        this.urlSerializer.serialize(d.urlAfterRedirects),
                        d.targetSnapshot,
                      );
                      this.events.next(u);
                    }),
                  );
              }),
              Go((l) => {
                let d = (u) => {
                  let p = [];
                  u.routeConfig?.loadComponent &&
                    !u.routeConfig._loadedComponent &&
                    p.push(
                      this.configLoader.loadComponent(u.routeConfig).pipe(
                        $((b) => {
                          u.component = b;
                        }),
                        w(() => {}),
                      ),
                    );
                  for (let b of u.children) p.push(...d(b));
                  return p;
                };
                return Ii(d(l.targetSnapshot.root)).pipe(uo(null), ie(1));
              }),
              Go(() => this.afterPreactivation()),
              K(() => {
                let { currentSnapshot: l, targetSnapshot: d } = s,
                  u = this.createViewTransition?.(
                    this.environmentInjector,
                    l.root,
                    d.root,
                  );
                return u ? fe(u).pipe(w(() => s)) : C(s);
              }),
              w((l) => {
                let d = kf(
                  i.routeReuseStrategy,
                  l.targetSnapshot,
                  l.currentRouterState,
                );
                return (
                  (this.currentTransition = s =
                    E(f({}, l), { targetRouterState: d })),
                  (this.currentNavigation.targetRouterState = d),
                  s
                );
              }),
              $(() => {
                this.events.next(new Ki());
              }),
              Bf(
                this.rootContexts,
                i.routeReuseStrategy,
                (l) => this.events.next(l),
                this.inputBindingEnabled,
              ),
              ie(1),
              $({
                next: (l) => {
                  (a = !0),
                    (this.lastSuccessfulNavigation = this.currentNavigation),
                    this.events.next(
                      new It(
                        l.id,
                        this.urlSerializer.serialize(l.extractedUrl),
                        this.urlSerializer.serialize(l.urlAfterRedirects),
                      ),
                    ),
                    this.titleStrategy?.updateTitle(
                      l.targetRouterState.snapshot,
                    ),
                    l.resolve(!0);
                },
                complete: () => {
                  a = !0;
                },
              }),
              Ce(
                this.transitionAbortSubject.pipe(
                  $((l) => {
                    throw l;
                  }),
                ),
              ),
              ft(() => {
                !a &&
                  !c &&
                  this.cancelNavigationTransition(
                    s,
                    "",
                    we.SupersededByNewNavigation,
                  ),
                  this.currentTransition?.id === s.id &&
                    ((this.currentNavigation = null),
                    (this.currentTransition = null));
              }),
              me((l) => {
                if (((c = !0), pc(l)))
                  this.events.next(
                    new st(
                      s.id,
                      this.urlSerializer.serialize(s.extractedUrl),
                      l.message,
                      l.cancellationCode,
                    ),
                  ),
                    Lf(l) ? this.events.next(new Qi(l.url)) : s.resolve(!1);
                else {
                  this.events.next(
                    new Zi(
                      s.id,
                      this.urlSerializer.serialize(s.extractedUrl),
                      l,
                      s.targetSnapshot ?? void 0,
                    ),
                  );
                  try {
                    s.resolve(i.errorHandler(l));
                  } catch (d) {
                    this.options.resolveNavigationPromiseOnError
                      ? s.resolve(!1)
                      : s.reject(d);
                  }
                }
                return Ne;
              }),
            );
          }),
        )
      );
    }
    cancelNavigationTransition(i, n, o) {
      let s = new st(i.id, this.urlSerializer.serialize(i.extractedUrl), n, o);
      this.events.next(s), i.resolve(!1);
    }
    isUpdatingInternalState() {
      return (
        this.currentTransition?.extractedUrl.toString() !==
        this.currentTransition?.currentUrlTree.toString()
      );
    }
    isUpdatedBrowserUrl() {
      return (
        this.urlHandlingStrategy
          .extract(this.urlSerializer.parse(this.location.path(!0)))
          .toString() !== this.currentTransition?.extractedUrl.toString() &&
        !this.currentTransition?.extras.skipLocationChange
      );
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
function Np(t) {
  return t !== Gi;
}
var Lp = (() => {
    let e = class e {};
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵprov = v({ token: e, factory: () => m(jp), providedIn: "root" }));
    let t = e;
    return t;
  })(),
  ys = class {
    shouldDetach(e) {
      return !1;
    }
    store(e, r) {}
    shouldAttach(e) {
      return !1;
    }
    retrieve(e) {
      return null;
    }
    shouldReuseRoute(e, r) {
      return e.routeConfig === r.routeConfig;
    }
  },
  jp = (() => {
    let e = class e extends ys {};
    (e.ɵfac = (() => {
      let i;
      return function (o) {
        return (i || (i = je(e)))(o || e);
      };
    })()),
      (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })(),
  xc = (() => {
    let e = class e {};
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵprov = v({ token: e, factory: () => m(Vp), providedIn: "root" }));
    let t = e;
    return t;
  })(),
  Vp = (() => {
    let e = class e extends xc {
      constructor() {
        super(...arguments),
          (this.location = m(Qt)),
          (this.urlSerializer = m(bs)),
          (this.options = m(Is, { optional: !0 }) || {}),
          (this.canceledNavigationResolution =
            this.options.canceledNavigationResolution || "replace"),
          (this.urlHandlingStrategy = m(As)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.currentUrlTree = new ot()),
          (this.rawUrlTree = this.currentUrlTree),
          (this.currentPageId = 0),
          (this.lastSuccessfulId = -1),
          (this.routerState = lc(null)),
          (this.stateMemento = this.createStateMemento());
      }
      getCurrentUrlTree() {
        return this.currentUrlTree;
      }
      getRawUrlTree() {
        return this.rawUrlTree;
      }
      restoredState() {
        return this.location.getState();
      }
      get browserPageId() {
        return this.canceledNavigationResolution !== "computed"
          ? this.currentPageId
          : this.restoredState()?.ɵrouterPageId ?? this.currentPageId;
      }
      getRouterState() {
        return this.routerState;
      }
      createStateMemento() {
        return {
          rawUrlTree: this.rawUrlTree,
          currentUrlTree: this.currentUrlTree,
          routerState: this.routerState,
        };
      }
      registerNonRouterCurrentEntryChangeListener(i) {
        return this.location.subscribe((n) => {
          n.type === "popstate" && i(n.url, n.state);
        });
      }
      handleRouterEvent(i, n) {
        if (i instanceof Xi) this.stateMemento = this.createStateMemento();
        else if (i instanceof Dt) this.rawUrlTree = n.initialUrl;
        else if (i instanceof ur) {
          if (
            this.urlUpdateStrategy === "eager" &&
            !n.extras.skipLocationChange
          ) {
            let o = this.urlHandlingStrategy.merge(n.finalUrl, n.initialUrl);
            this.setBrowserUrl(o, n);
          }
        } else
          i instanceof Ki
            ? ((this.currentUrlTree = n.finalUrl),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                n.finalUrl,
                n.initialUrl,
              )),
              (this.routerState = n.targetRouterState),
              this.urlUpdateStrategy === "deferred" &&
                (n.extras.skipLocationChange ||
                  this.setBrowserUrl(this.rawUrlTree, n)))
            : i instanceof st &&
                (i.code === we.GuardRejected ||
                  i.code === we.NoDataFromResolver)
              ? this.restoreHistory(n)
              : i instanceof Zi
                ? this.restoreHistory(n, !0)
                : i instanceof It &&
                  ((this.lastSuccessfulId = i.id),
                  (this.currentPageId = this.browserPageId));
      }
      setBrowserUrl(i, n) {
        let o = this.urlSerializer.serialize(i);
        if (this.location.isCurrentPathEqualTo(o) || n.extras.replaceUrl) {
          let s = this.browserPageId,
            a = f(f({}, n.extras.state), this.generateNgRouterState(n.id, s));
          this.location.replaceState(o, "", a);
        } else {
          let s = f(
            f({}, n.extras.state),
            this.generateNgRouterState(n.id, this.browserPageId + 1),
          );
          this.location.go(o, "", s);
        }
      }
      restoreHistory(i, n = !1) {
        if (this.canceledNavigationResolution === "computed") {
          let o = this.browserPageId,
            s = this.currentPageId - o;
          s !== 0
            ? this.location.historyGo(s)
            : this.currentUrlTree === i.finalUrl &&
              s === 0 &&
              (this.resetState(i), this.resetUrlToCurrentUrlTree());
        } else
          this.canceledNavigationResolution === "replace" &&
            (n && this.resetState(i), this.resetUrlToCurrentUrlTree());
      }
      resetState(i) {
        (this.routerState = this.stateMemento.routerState),
          (this.currentUrlTree = this.stateMemento.currentUrlTree),
          (this.rawUrlTree = this.urlHandlingStrategy.merge(
            this.currentUrlTree,
            i.finalUrl ?? this.rawUrlTree,
          ));
      }
      resetUrlToCurrentUrlTree() {
        this.location.replaceState(
          this.urlSerializer.serialize(this.rawUrlTree),
          "",
          this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId),
        );
      }
      generateNgRouterState(i, n) {
        return this.canceledNavigationResolution === "computed"
          ? { navigationId: i, ɵrouterPageId: n }
          : { navigationId: i };
      }
    };
    (e.ɵfac = (() => {
      let i;
      return function (o) {
        return (i || (i = je(e)))(o || e);
      };
    })()),
      (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })(),
  Hi = (function (t) {
    return (
      (t[(t.COMPLETE = 0)] = "COMPLETE"),
      (t[(t.FAILED = 1)] = "FAILED"),
      (t[(t.REDIRECTING = 2)] = "REDIRECTING"),
      t
    );
  })(Hi || {});
function Up(t, e) {
  t.events
    .pipe(
      z(
        (r) =>
          r instanceof It ||
          r instanceof st ||
          r instanceof Zi ||
          r instanceof Dt,
      ),
      w((r) =>
        r instanceof It || r instanceof Dt
          ? Hi.COMPLETE
          : (
                r instanceof st
                  ? r.code === we.Redirect ||
                    r.code === we.SupersededByNewNavigation
                  : !1
              )
            ? Hi.REDIRECTING
            : Hi.FAILED,
      ),
      z((r) => r !== Hi.REDIRECTING),
      ie(1),
    )
    .subscribe(() => {
      e();
    });
}
function Bp(t) {
  throw t;
}
var zp = {
    paths: "exact",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "exact",
  },
  $p = {
    paths: "subset",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "subset",
  },
  wc = (() => {
    let e = class e {
      get currentUrlTree() {
        return this.stateManager.getCurrentUrlTree();
      }
      get rawUrlTree() {
        return this.stateManager.getRawUrlTree();
      }
      get events() {
        return this._events;
      }
      get routerState() {
        return this.stateManager.getRouterState();
      }
      constructor() {
        (this.disposed = !1),
          (this.isNgZoneEnabled = !1),
          (this.console = m($n)),
          (this.stateManager = m(xc)),
          (this.options = m(Is, { optional: !0 }) || {}),
          (this.pendingTasks = m(Un)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.navigationTransitions = m(Pp)),
          (this.urlSerializer = m(bs)),
          (this.location = m(Qt)),
          (this.urlHandlingStrategy = m(As)),
          (this._events = new L()),
          (this.errorHandler = this.options.errorHandler || Bp),
          (this.navigated = !1),
          (this.routeReuseStrategy = m(Lp)),
          (this.onSameUrlNavigation =
            this.options.onSameUrlNavigation || "ignore"),
          (this.config = m(Ds, { optional: !0 })?.flat() ?? []),
          (this.componentInputBindingEnabled = !!m(Cs, { optional: !0 })),
          (this.eventsSubscription = new Oe()),
          (this.isNgZoneEnabled = m(M) instanceof M && M.isInAngularZone()),
          this.resetConfig(this.config),
          this.navigationTransitions
            .setupNavigations(this, this.currentUrlTree, this.routerState)
            .subscribe({
              error: (i) => {
                this.console.warn(i);
              },
            }),
          this.subscribeToNavigationEvents();
      }
      subscribeToNavigationEvents() {
        let i = this.navigationTransitions.events.subscribe((n) => {
          try {
            let o = this.navigationTransitions.currentTransition,
              s = this.navigationTransitions.currentNavigation;
            if (o !== null && s !== null) {
              if (
                (this.stateManager.handleRouterEvent(n, s),
                n instanceof st &&
                  n.code !== we.Redirect &&
                  n.code !== we.SupersededByNewNavigation)
              )
                this.navigated = !0;
              else if (n instanceof It) this.navigated = !0;
              else if (n instanceof Qi) {
                let a = this.urlHandlingStrategy.merge(n.url, o.currentRawUrl),
                  c = {
                    info: o.extras.info,
                    skipLocationChange: o.extras.skipLocationChange,
                    replaceUrl:
                      this.urlUpdateStrategy === "eager" || Np(o.source),
                  };
                this.scheduleNavigation(a, Gi, null, c, {
                  resolve: o.resolve,
                  reject: o.reject,
                  promise: o.promise,
                });
              }
            }
            Wp(n) && this._events.next(n);
          } catch (o) {
            this.navigationTransitions.transitionAbortSubject.next(o);
          }
        });
        this.eventsSubscription.add(i);
      }
      resetRootComponentType(i) {
        (this.routerState.root.component = i),
          (this.navigationTransitions.rootComponentType = i);
      }
      initialNavigation() {
        this.setUpLocationChangeListener(),
          this.navigationTransitions.hasRequestedNavigation ||
            this.navigateToSyncWithBrowser(
              this.location.path(!0),
              Gi,
              this.stateManager.restoredState(),
            );
      }
      setUpLocationChangeListener() {
        this.nonRouterCurrentEntryChangeSubscription ??=
          this.stateManager.registerNonRouterCurrentEntryChangeListener(
            (i, n) => {
              setTimeout(() => {
                this.navigateToSyncWithBrowser(i, "popstate", n);
              }, 0);
            },
          );
      }
      navigateToSyncWithBrowser(i, n, o) {
        let s = { replaceUrl: !0 },
          a = o?.navigationId ? o : null;
        if (o) {
          let l = f({}, o);
          delete l.navigationId,
            delete l.ɵrouterPageId,
            Object.keys(l).length !== 0 && (s.state = l);
        }
        let c = this.parseUrl(i);
        this.scheduleNavigation(c, n, a, s);
      }
      get url() {
        return this.serializeUrl(this.currentUrlTree);
      }
      getCurrentNavigation() {
        return this.navigationTransitions.currentNavigation;
      }
      get lastSuccessfulNavigation() {
        return this.navigationTransitions.lastSuccessfulNavigation;
      }
      resetConfig(i) {
        (this.config = i.map(Es)), (this.navigated = !1);
      }
      ngOnDestroy() {
        this.dispose();
      }
      dispose() {
        this.navigationTransitions.complete(),
          this.nonRouterCurrentEntryChangeSubscription &&
            (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
            (this.nonRouterCurrentEntryChangeSubscription = void 0)),
          (this.disposed = !0),
          this.eventsSubscription.unsubscribe();
      }
      createUrlTree(i, n = {}) {
        let {
            relativeTo: o,
            queryParams: s,
            fragment: a,
            queryParamsHandling: c,
            preserveFragment: l,
          } = n,
          d = l ? this.currentUrlTree.fragment : a,
          u = null;
        switch (c) {
          case "merge":
            u = f(f({}, this.currentUrlTree.queryParams), s);
            break;
          case "preserve":
            u = this.currentUrlTree.queryParams;
            break;
          default:
            u = s || null;
        }
        u !== null && (u = this.removeEmptyProps(u));
        let p;
        try {
          let b = o ? o.snapshot : this.routerState.snapshot.root;
          p = rc(b);
        } catch {
          (typeof i[0] != "string" || !i[0].startsWith("/")) && (i = []),
            (p = this.currentUrlTree.root);
        }
        return oc(p, i, u, d ?? null);
      }
      navigateByUrl(i, n = { skipLocationChange: !1 }) {
        let o = ai(i) ? i : this.parseUrl(i),
          s = this.urlHandlingStrategy.merge(o, this.rawUrlTree);
        return this.scheduleNavigation(s, Gi, null, n);
      }
      navigate(i, n = { skipLocationChange: !1 }) {
        return Hp(i), this.navigateByUrl(this.createUrlTree(i, n), n);
      }
      serializeUrl(i) {
        return this.urlSerializer.serialize(i);
      }
      parseUrl(i) {
        try {
          return this.urlSerializer.parse(i);
        } catch {
          return this.urlSerializer.parse("/");
        }
      }
      isActive(i, n) {
        let o;
        if (
          (n === !0 ? (o = f({}, zp)) : n === !1 ? (o = f({}, $p)) : (o = n),
          ai(i))
        )
          return $l(this.currentUrlTree, i, o);
        let s = this.parseUrl(i);
        return $l(this.currentUrlTree, s, o);
      }
      removeEmptyProps(i) {
        return Object.entries(i).reduce(
          (n, [o, s]) => (s != null && (n[o] = s), n),
          {},
        );
      }
      scheduleNavigation(i, n, o, s, a) {
        if (this.disposed) return Promise.resolve(!1);
        let c, l, d;
        a
          ? ((c = a.resolve), (l = a.reject), (d = a.promise))
          : (d = new Promise((p, b) => {
              (c = p), (l = b);
            }));
        let u = this.pendingTasks.add();
        return (
          Up(this, () => {
            queueMicrotask(() => this.pendingTasks.remove(u));
          }),
          this.navigationTransitions.handleNavigationRequest({
            source: n,
            restoredState: o,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            rawUrl: i,
            extras: s,
            resolve: c,
            reject: l,
            promise: d,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState,
          }),
          d.catch((p) => Promise.reject(p))
        );
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })();
function Hp(t) {
  for (let e = 0; e < t.length; e++) if (t[e] == null) throw new H(4008, !1);
}
function Wp(t) {
  return !(t instanceof Ki) && !(t instanceof Qi);
}
var Gp = new g("");
function Cc(t, ...e) {
  return ge([
    { provide: Ds, multi: !0, useValue: t },
    [],
    { provide: li, useFactory: Yp, deps: [wc] },
    { provide: So, multi: !0, useFactory: Xp },
    e.map((r) => r.ɵproviders),
  ]);
}
function Yp(t) {
  return t.routerState.root;
}
function qp(t, e) {
  return { ɵkind: t, ɵproviders: e };
}
function Xp() {
  let t = m(nt);
  return (e) => {
    let r = t.get(Zt);
    if (e !== r.components[0]) return;
    let i = t.get(wc),
      n = t.get(Zp);
    t.get(Kp) === 1 && i.initialNavigation(),
      t.get(Qp, null, po.Optional)?.setUpPreloading(),
      t.get(Gp, null, po.Optional)?.init(),
      i.resetRootComponentType(r.componentTypes[0]),
      n.closed || (n.next(), n.complete(), n.unsubscribe());
  };
}
var Zp = new g("", { factory: () => new L() }),
  Kp = new g("", { providedIn: "root", factory: () => 1 });
var Qp = new g("");
function Ec() {
  return qp(6, [{ provide: _l, useClass: yl }]);
}
function an(t, e) {
  let r = !e?.manualCleanup;
  r && !e?.injector && ol(an);
  let i = r ? e?.injector?.get(go) ?? m(go) : null,
    n;
  e?.requireSync
    ? (n = wo({ kind: 0 }))
    : (n = wo({ kind: 1, value: e?.initialValue }));
  let o = t.subscribe({
    next: (s) => n.set({ kind: 1, value: s }),
    error: (s) => {
      if (e?.rejectErrors) throw s;
      n.set({ kind: 2, error: s });
    },
  });
  return (
    i?.onDestroy(o.unsubscribe.bind(o)),
    Wn(() => {
      let s = n();
      switch (s.kind) {
        case 1:
          return s.value;
        case 2:
          throw s.error;
        case 0:
          throw new H(
            601,
            "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.",
          );
      }
    })
  );
}
var Ms = {};
function Ye(t, e) {
  if (((Ms[t] = (Ms[t] || 0) + 1), typeof e == "function"))
    return Rs(t, (...i) => E(f({}, e(...i)), { type: t }));
  switch (e ? e._as : "empty") {
    case "empty":
      return Rs(t, () => ({ type: t }));
    case "props":
      return Rs(t, (i) => E(f({}, i), { type: t }));
    default:
      throw new Error("Unexpected config.");
  }
}
function lt() {
  return { _as: "props", _p: void 0 };
}
function Rs(t, e) {
  return Object.defineProperty(e, "type", { value: t, writable: !1 });
}
var dn = "@ngrx/store/init",
  qe = (() => {
    let e = class e extends J {
      constructor() {
        super({ type: dn });
      }
      next(i) {
        if (typeof i == "function")
          throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);
        if (typeof i > "u") throw new TypeError("Actions must be objects");
        if (typeof i.type > "u")
          throw new TypeError("Actions must have a type property");
        super.next(i);
      }
      complete() {}
      ngOnDestroy() {
        super.complete();
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  Jp = [qe],
  Uc = new g("@ngrx/store Internal Root Guard"),
  Sc = new g("@ngrx/store Internal Initial State"),
  un = new g("@ngrx/store Initial State"),
  Bc = new g("@ngrx/store Reducer Factory"),
  Ic = new g("@ngrx/store Internal Reducer Factory Provider"),
  zc = new g("@ngrx/store Initial Reducers"),
  Os = new g("@ngrx/store Internal Initial Reducers"),
  Dc = new g("@ngrx/store Store Features"),
  Ac = new g("@ngrx/store Internal Store Reducers"),
  Ts = new g("@ngrx/store Internal Feature Reducers"),
  Rc = new g("@ngrx/store Internal Feature Configs"),
  $c = new g("@ngrx/store Internal Store Features"),
  Oc = new g("@ngrx/store Internal Feature Reducers Token"),
  Hc = new g("@ngrx/store Feature Reducers"),
  Tc = new g("@ngrx/store User Provided Meta Reducers"),
  yr = new g("@ngrx/store Meta Reducers"),
  Mc = new g("@ngrx/store Internal Resolved Meta Reducers"),
  Fc = new g("@ngrx/store User Runtime Checks Config"),
  kc = new g("@ngrx/store Internal User Runtime Checks Config"),
  ln = new g("@ngrx/store Internal Runtime Checks"),
  Ns = new g("@ngrx/store Check if Action types are unique"),
  cn = new g("@ngrx/store Root Store Provider"),
  br = new g("@ngrx/store Feature State Provider");
function Ls(t, e = {}) {
  let r = Object.keys(t),
    i = {};
  for (let o = 0; o < r.length; o++) {
    let s = r[o];
    typeof t[s] == "function" && (i[s] = t[s]);
  }
  let n = Object.keys(i);
  return function (s, a) {
    s = s === void 0 ? e : s;
    let c = !1,
      l = {};
    for (let d = 0; d < n.length; d++) {
      let u = n[d],
        p = i[u],
        b = s[u],
        _ = p(b, a);
      (l[u] = _), (c = c || _ !== b);
    }
    return c ? l : s;
  };
}
function em(t, e) {
  return Object.keys(t)
    .filter((r) => r !== e)
    .reduce((r, i) => Object.assign(r, { [i]: t[i] }), {});
}
function Wc(...t) {
  return function (e) {
    if (t.length === 0) return e;
    let r = t[t.length - 1];
    return t.slice(0, -1).reduceRight((n, o) => o(n), r(e));
  };
}
function Gc(t, e) {
  return (
    Array.isArray(e) && e.length > 0 && (t = Wc.apply(null, [...e, t])),
    (r, i) => {
      let n = t(r);
      return (o, s) => ((o = o === void 0 ? i : o), n(o, s));
    }
  );
}
function tm(t) {
  let e = Array.isArray(t) && t.length > 0 ? Wc(...t) : (r) => r;
  return (r, i) => (
    (r = e(r)), (n, o) => ((n = n === void 0 ? i : n), r(n, o))
  );
}
var At = class extends re {},
  ui = class extends qe {},
  wr = "@ngrx/store/update-reducers",
  xr = (() => {
    let e = class e extends J {
      get currentReducers() {
        return this.reducers;
      }
      constructor(i, n, o, s) {
        super(s(o, n)),
          (this.dispatcher = i),
          (this.initialState = n),
          (this.reducers = o),
          (this.reducerFactory = s);
      }
      addFeature(i) {
        this.addFeatures([i]);
      }
      addFeatures(i) {
        let n = i.reduce(
          (
            o,
            {
              reducers: s,
              reducerFactory: a,
              metaReducers: c,
              initialState: l,
              key: d,
            },
          ) => {
            let u = typeof s == "function" ? tm(c)(s, l) : Gc(a, c)(s, l);
            return (o[d] = u), o;
          },
          {},
        );
        this.addReducers(n);
      }
      removeFeature(i) {
        this.removeFeatures([i]);
      }
      removeFeatures(i) {
        this.removeReducers(i.map((n) => n.key));
      }
      addReducer(i, n) {
        this.addReducers({ [i]: n });
      }
      addReducers(i) {
        (this.reducers = f(f({}, this.reducers), i)),
          this.updateReducers(Object.keys(i));
      }
      removeReducer(i) {
        this.removeReducers([i]);
      }
      removeReducers(i) {
        i.forEach((n) => {
          this.reducers = em(this.reducers, n);
        }),
          this.updateReducers(i);
      }
      updateReducers(i) {
        this.next(this.reducerFactory(this.reducers, this.initialState)),
          this.dispatcher.next({ type: wr, features: i });
      }
      ngOnDestroy() {
        this.complete();
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(ui), h(un), h(zc), h(Bc));
    }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  im = [xr, { provide: At, useExisting: xr }, { provide: ui, useExisting: qe }],
  Rt = (() => {
    let e = class e extends L {
      ngOnDestroy() {
        this.complete();
      }
    };
    (e.ɵfac = (() => {
      let i;
      return function (o) {
        return (i || (i = je(e)))(o || e);
      };
    })()),
      (e.ɵprov = v({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  nm = [Rt],
  hi = class extends re {},
  Pc = (() => {
    let e = class e extends J {
      constructor(i, n, o, s) {
        super(s);
        let c = i.pipe(kn(Fn)).pipe(it(n)),
          l = { state: s },
          d = c.pipe(Bt(rm, l));
        (this.stateSubscription = d.subscribe(({ state: u, action: p }) => {
          this.next(u), o.next(p);
        })),
          (this.state = an(this, { manualCleanup: !0, requireSync: !0 }));
      }
      ngOnDestroy() {
        this.stateSubscription.unsubscribe(), this.complete();
      }
    };
    (e.INIT = dn),
      (e.ɵfac = function (n) {
        return new (n || e)(h(qe), h(At), h(Rt), h(un));
      }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })();
function rm(t = { state: void 0 }, [e, r]) {
  let { state: i } = t;
  return { state: r(i, e), action: e };
}
var om = [Pc, { provide: hi, useExisting: Pc }],
  ce = (() => {
    let e = class e extends re {
      constructor(i, n, o) {
        super(),
          (this.actionsObserver = n),
          (this.reducerManager = o),
          (this.source = i),
          (this.state = i.state);
      }
      select(i, ...n) {
        return hn.call(null, i, ...n)(this);
      }
      selectSignal(i, n) {
        return Wn(() => i(this.state()), n);
      }
      lift(i) {
        let n = new e(this, this.actionsObserver, this.reducerManager);
        return (n.operator = i), n;
      }
      dispatch(i) {
        this.actionsObserver.next(i);
      }
      next(i) {
        this.actionsObserver.next(i);
      }
      error(i) {
        this.actionsObserver.error(i);
      }
      complete() {
        this.actionsObserver.complete();
      }
      addReducer(i, n) {
        this.reducerManager.addReducer(i, n);
      }
      removeReducer(i) {
        this.reducerManager.removeReducer(i);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(hi), h(qe), h(xr));
    }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  sm = [ce];
function hn(t, e, ...r) {
  return function (n) {
    let o;
    if (typeof t == "string") {
      let s = [e, ...r].filter(Boolean);
      o = n.pipe(el(t, ...s));
    } else if (typeof t == "function") o = n.pipe(w((s) => t(s, e)));
    else
      throw new TypeError(
        `Unexpected type '${typeof t}' in select operator, expected 'string' or 'function'`,
      );
    return o.pipe(Vt());
  };
}
var js = "https://ngrx.io/guide/store/configuration/runtime-checks";
function Nc(t) {
  return t === void 0;
}
function Lc(t) {
  return t === null;
}
function Yc(t) {
  return Array.isArray(t);
}
function am(t) {
  return typeof t == "string";
}
function lm(t) {
  return typeof t == "boolean";
}
function cm(t) {
  return typeof t == "number";
}
function qc(t) {
  return typeof t == "object" && t !== null;
}
function dm(t) {
  return qc(t) && !Yc(t);
}
function um(t) {
  if (!dm(t)) return !1;
  let e = Object.getPrototypeOf(t);
  return e === Object.prototype || e === null;
}
function Fs(t) {
  return typeof t == "function";
}
function hm(t) {
  return Fs(t) && t.hasOwnProperty("\u0275cmp");
}
function fm(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
var pm = !1;
function mm() {
  return pm;
}
function jc(t, e) {
  return t === e;
}
function gm(t, e, r) {
  for (let i = 0; i < t.length; i++) if (!r(t[i], e[i])) return !0;
  return !1;
}
function Xc(t, e = jc, r = jc) {
  let i = null,
    n = null,
    o;
  function s() {
    (i = null), (n = null);
  }
  function a(d = void 0) {
    o = { result: d };
  }
  function c() {
    o = void 0;
  }
  function l() {
    if (o !== void 0) return o.result;
    if (!i) return (n = t.apply(null, arguments)), (i = arguments), n;
    if (!gm(arguments, i, e)) return n;
    let d = t.apply(null, arguments);
    return (i = arguments), r(n, d) ? n : ((n = d), d);
  }
  return { memoized: l, reset: s, setResult: a, clearResult: c };
}
function ke(...t) {
  return _m(Xc)(...t);
}
function vm(t, e, r, i) {
  if (r === void 0) {
    let o = e.map((s) => s(t));
    return i.memoized.apply(null, o);
  }
  let n = e.map((o) => o(t, r));
  return i.memoized.apply(null, [...n, r]);
}
function _m(t, e = { stateFn: vm }) {
  return function (...r) {
    let i = r;
    if (Array.isArray(i[0])) {
      let [d, ...u] = i;
      i = [...d, ...u];
    } else i.length === 1 && ym(i[0]) && (i = bm(i[0]));
    let n = i.slice(0, i.length - 1),
      o = i[i.length - 1],
      s = n.filter((d) => d.release && typeof d.release == "function"),
      a = t(function (...d) {
        return o.apply(null, d);
      }),
      c = Xc(function (d, u) {
        return e.stateFn.apply(null, [d, n, u, a]);
      });
    function l() {
      c.reset(), a.reset(), s.forEach((d) => d.release());
    }
    return Object.assign(c.memoized, {
      release: l,
      projector: a.memoized,
      setResult: c.setResult,
      clearResult: c.clearResult,
    });
  };
}
function Cr(t) {
  return ke(
    (e) => {
      let r = e[t];
      return (
        !mm() &&
          ki() &&
          !(t in e) &&
          console.warn(
            `@ngrx/store: The feature name "${t}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${t}', ...) or StoreModule.forFeature('${t}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`,
          ),
        r
      );
    },
    (e) => e,
  );
}
function ym(t) {
  return (
    !!t &&
    typeof t == "object" &&
    Object.values(t).every((e) => typeof e == "function")
  );
}
function bm(t) {
  let e = Object.values(t),
    r = Object.keys(t),
    i = (...n) => r.reduce((o, s, a) => E(f({}, o), { [s]: n[a] }), {});
  return [...e, i];
}
function xm(t) {
  return t instanceof g ? m(t) : t;
}
function wm(t, e) {
  return e.map((r, i) => {
    if (t[i] instanceof g) {
      let n = m(t[i]);
      return {
        key: r.key,
        reducerFactory: n.reducerFactory ? n.reducerFactory : Ls,
        metaReducers: n.metaReducers ? n.metaReducers : [],
        initialState: n.initialState,
      };
    }
    return r;
  });
}
function Cm(t) {
  return t.map((e) => (e instanceof g ? m(e) : e));
}
function Zc(t) {
  return typeof t == "function" ? t() : t;
}
function Em(t, e) {
  return t.concat(e);
}
function Sm() {
  if (m(ce, { optional: !0, skipSelf: !0 }))
    throw new TypeError(
      "The root Store has been provided more than once. Feature modules should provide feature states instead.",
    );
  return "guarded";
}
function Im(t, e) {
  return function (r, i) {
    let n = e.action(i) ? ks(i) : i,
      o = t(r, n);
    return e.state() ? ks(o) : o;
  };
}
function ks(t) {
  Object.freeze(t);
  let e = Fs(t);
  return (
    Object.getOwnPropertyNames(t).forEach((r) => {
      if (
        !r.startsWith("\u0275") &&
        fm(t, r) &&
        (!e || (r !== "caller" && r !== "callee" && r !== "arguments"))
      ) {
        let i = t[r];
        (qc(i) || Fs(i)) && !Object.isFrozen(i) && ks(i);
      }
    }),
    t
  );
}
function Dm(t, e) {
  return function (r, i) {
    if (e.action(i)) {
      let o = Ps(i);
      Vc(o, "action");
    }
    let n = t(r, i);
    if (e.state()) {
      let o = Ps(n);
      Vc(o, "state");
    }
    return n;
  };
}
function Ps(t, e = []) {
  return (Nc(t) || Lc(t)) && e.length === 0
    ? { path: ["root"], value: t }
    : Object.keys(t).reduce((i, n) => {
        if (i) return i;
        let o = t[n];
        return hm(o)
          ? i
          : Nc(o) || Lc(o) || cm(o) || lm(o) || am(o) || Yc(o)
            ? !1
            : um(o)
              ? Ps(o, [...e, n])
              : { path: [...e, n], value: o };
      }, !1);
}
function Vc(t, e) {
  if (t === !1) return;
  let r = t.path.join("."),
    i = new Error(
      `Detected unserializable ${e} at "${r}". ${js}#strict${e}serializability`,
    );
  throw ((i.value = t.value), (i.unserializablePath = r), i);
}
function Am(t, e) {
  return function (r, i) {
    if (e.action(i) && !M.isInAngularZone())
      throw new Error(
        `Action '${i.type}' running outside NgZone. ${js}#strictactionwithinngzone`,
      );
    return t(r, i);
  };
}
function Rm(t) {
  return ki()
    ? f(
        {
          strictStateSerializability: !1,
          strictActionSerializability: !1,
          strictStateImmutability: !0,
          strictActionImmutability: !0,
          strictActionWithinNgZone: !1,
          strictActionTypeUniqueness: !1,
        },
        t,
      )
    : {
        strictStateSerializability: !1,
        strictActionSerializability: !1,
        strictStateImmutability: !1,
        strictActionImmutability: !1,
        strictActionWithinNgZone: !1,
        strictActionTypeUniqueness: !1,
      };
}
function Om({ strictActionSerializability: t, strictStateSerializability: e }) {
  return (r) =>
    t || e ? Dm(r, { action: (i) => t && !Vs(i), state: () => e }) : r;
}
function Tm({ strictActionImmutability: t, strictStateImmutability: e }) {
  return (r) =>
    t || e ? Im(r, { action: (i) => t && !Vs(i), state: () => e }) : r;
}
function Vs(t) {
  return t.type.startsWith("@ngrx");
}
function Mm({ strictActionWithinNgZone: t }) {
  return (e) => (t ? Am(e, { action: (r) => t && !Vs(r) }) : e);
}
function Fm(t) {
  return [
    { provide: kc, useValue: t },
    { provide: Fc, useFactory: km, deps: [kc] },
    { provide: ln, deps: [Fc], useFactory: Rm },
    { provide: yr, multi: !0, deps: [ln], useFactory: Tm },
    { provide: yr, multi: !0, deps: [ln], useFactory: Om },
    { provide: yr, multi: !0, deps: [ln], useFactory: Mm },
  ];
}
function Kc() {
  return [{ provide: Ns, multi: !0, deps: [ln], useFactory: Pm }];
}
function km(t) {
  return t;
}
function Pm(t) {
  if (!t.strictActionTypeUniqueness) return;
  let e = Object.entries(Ms)
    .filter(([, r]) => r > 1)
    .map(([r]) => r);
  if (e.length)
    throw new Error(
      `Action types are registered more than once, ${e.map((r) => `"${r}"`).join(", ")}. ${js}#strictactiontypeuniqueness`,
    );
}
function Us(t, e, r = {}) {
  return ge([...Bm(t, e, r), Um]);
}
function Nm(t = {}, e = {}) {
  return [
    { provide: Uc, useFactory: Sm },
    { provide: Sc, useValue: e.initialState },
    { provide: un, useFactory: Zc, deps: [Sc] },
    { provide: Os, useValue: t },
    { provide: Ac, useExisting: t instanceof g ? t : Os },
    { provide: zc, deps: [Os, [new mo(Ac)]], useFactory: xm },
    { provide: Tc, useValue: e.metaReducers ? e.metaReducers : [] },
    { provide: Mc, deps: [yr, Tc], useFactory: Em },
    { provide: Ic, useValue: e.reducerFactory ? e.reducerFactory : Ls },
    { provide: Bc, deps: [Ic, Mc], useFactory: Gc },
    Jp,
    im,
    nm,
    om,
    sm,
    Fm(e.runtimeChecks),
    Kc(),
  ];
}
function Lm() {
  m(qe), m(At), m(Rt), m(ce), m(Uc, { optional: !0 }), m(Ns, { optional: !0 });
}
var jm = [
  { provide: cn, useFactory: Lm },
  {
    provide: mt,
    multi: !0,
    useFactory() {
      return () => m(cn);
    },
  },
];
function Qc(t, e) {
  return ge([...Nm(t, e), jm]);
}
function Vm() {
  m(cn);
  let t = m($c),
    e = m(Hc),
    r = m(xr);
  m(Ns, { optional: !0 });
  let i = t.map((n, o) => {
    let a = e.shift()[o];
    return E(f({}, n), { reducers: a, initialState: Zc(n.initialState) });
  });
  r.addFeatures(i);
}
var Um = [
  { provide: br, useFactory: Vm },
  {
    provide: mt,
    multi: !0,
    useFactory() {
      return () => m(br);
    },
  },
];
function Bm(t, e, r = {}) {
  return [
    { provide: Rc, multi: !0, useValue: t instanceof Object ? {} : r },
    {
      provide: Dc,
      multi: !0,
      useValue: {
        key: t instanceof Object ? t.name : t,
        reducerFactory:
          !(r instanceof g) && r.reducerFactory ? r.reducerFactory : Ls,
        metaReducers: !(r instanceof g) && r.metaReducers ? r.metaReducers : [],
        initialState:
          !(r instanceof g) && r.initialState ? r.initialState : void 0,
      },
    },
    { provide: $c, deps: [Rc, Dc], useFactory: wm },
    { provide: Ts, multi: !0, useValue: t instanceof Object ? t.reducer : e },
    { provide: Oc, multi: !0, useExisting: e instanceof g ? e : Ts },
    { provide: Hc, multi: !0, deps: [Ts, [new mo(Oc)]], useFactory: Cm },
    Kc(),
  ];
}
function ct(...t) {
  let e = t.pop(),
    r = t.map((i) => i.type);
  return { reducer: e, types: r };
}
function Er(t, ...e) {
  let r = new Map();
  for (let i of e)
    for (let n of i.types) {
      let o = r.get(n);
      if (o) {
        let s = (a, c) => i.reducer(o(a, c), c);
        r.set(n, s);
      } else r.set(n, i.reducer);
    }
  return function (i = t, n) {
    let o = r.get(n.type);
    return o ? o(i, n) : i;
  };
}
var et = (function (t) {
  return (
    (t.GET_DAILY_FORECAST = "[Daily Forecast] Get Forecast"),
    (t.GET_DAILY_FORECAST_SUCCESS = "[Daily Forecast] Get Forecast Success"),
    (t.GET_DAILY_FORECAST_FAILURE = "[Daily Forecast] Get Forecast Failure"),
    (t.GET_HOURLY_FORECAST = "[Hourly Forecast] Get Forecast"),
    (t.GET_HOURLY_FORECAST_SUCCESS = "[Hourly Forecast] Get Forecast Success"),
    (t.GET_HOURLY_FORECAST_FAILURE = "[Hourly Forecast] Get Forecast Failure"),
    t
  );
})(et || {});
var fi = Ye(et.GET_DAILY_FORECAST, lt()),
  pn = Ye(et.GET_DAILY_FORECAST_SUCCESS, lt()),
  mn = Ye(et.GET_DAILY_FORECAST_FAILURE, lt());
var Sr = "daily",
  zm = { data: null, isLoading: !1, error: null },
  ed = Er(
    zm,
    ct(fi, (t) => E(f({}, t), { isLoading: !0, error: null })),
    ct(pn, (t, { forecast: e }) => E(f({}, t), { data: e, isLoading: !1 })),
    ct(mn, (t) => E(f({}, t), { isLoading: !1 })),
  );
var Ir = Cr(Sr),
  Dr = ke(Ir, (t) => t.data),
  td = ke(Ir, (t) => t.isLoading),
  id = ke(Ir, (t) => t.error),
  nd = ke(Ir, (t) => t.data?.data[0].weather);
var Bs;
try {
  Bs = typeof Intl < "u" && Intl.v8BreakIterator;
} catch {
  Bs = !1;
}
var he = (() => {
  let e = class e {
    constructor(i) {
      (this._platformId = i),
        (this.isBrowser = this._platformId
          ? Cl(this._platformId)
          : typeof document == "object" && !!document),
        (this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent)),
        (this.TRIDENT =
          this.isBrowser && /(msie|trident)/i.test(navigator.userAgent)),
        (this.BLINK =
          this.isBrowser &&
          !!(window.chrome || Bs) &&
          typeof CSS < "u" &&
          !this.EDGE &&
          !this.TRIDENT),
        (this.WEBKIT =
          this.isBrowser &&
          /AppleWebKit/i.test(navigator.userAgent) &&
          !this.BLINK &&
          !this.EDGE &&
          !this.TRIDENT),
        (this.IOS =
          this.isBrowser &&
          /iPad|iPhone|iPod/.test(navigator.userAgent) &&
          !("MSStream" in window)),
        (this.FIREFOX =
          this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent)),
        (this.ANDROID =
          this.isBrowser &&
          /android/i.test(navigator.userAgent) &&
          !this.TRIDENT),
        (this.SAFARI =
          this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT);
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(h(Qe));
  }),
    (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
var gn;
function $m() {
  if (gn == null && typeof window < "u")
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", { get: () => (gn = !0) }),
      );
    } finally {
      gn = gn || !1;
    }
  return gn;
}
function zs(t) {
  return $m() ? t : !!t.capture;
}
var Ot;
function rd() {
  if (Ot == null) {
    if (
      typeof document != "object" ||
      !document ||
      typeof Element != "function" ||
      !Element
    )
      return (Ot = !1), Ot;
    if ("scrollBehavior" in document.documentElement.style) Ot = !0;
    else {
      let t = Element.prototype.scrollTo;
      t ? (Ot = !/\{\s*\[native code\]\s*\}/.test(t.toString())) : (Ot = !1);
    }
  }
  return Ot;
}
function Tt(t) {
  return t.composedPath ? t.composedPath()[0] : t.target;
}
function vn() {
  return (
    (typeof __karma__ < "u" && !!__karma__) ||
    (typeof jasmine < "u" && !!jasmine) ||
    (typeof jest < "u" && !!jest) ||
    (typeof Mocha < "u" && !!Mocha)
  );
}
function dt(t, ...e) {
  return e.length
    ? e.some((r) => t[r])
    : t.altKey || t.shiftKey || t.ctrlKey || t.metaKey;
}
function mi(t) {
  return Array.isArray(t) ? t : [t];
}
function te(t) {
  return t == null ? "" : typeof t == "string" ? t : `${t}px`;
}
function _n(t) {
  return t instanceof X ? t.nativeElement : t;
}
function od(t, e = /\s+/) {
  let r = [];
  if (t != null) {
    let i = Array.isArray(t) ? t : `${t}`.split(e);
    for (let n of i) {
      let o = `${n}`.trim();
      o && r.push(o);
    }
  }
  return r;
}
var Hm = (() => {
  let e = class e {
    create(i) {
      return typeof MutationObserver > "u" ? null : new MutationObserver(i);
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
var sd = (() => {
  let e = class e {};
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵmod = k({ type: e })),
    (e.ɵinj = F({ providers: [Hm] }));
  let t = e;
  return t;
})();
var ad = new Set(),
  Mt,
  Wm = (() => {
    let e = class e {
      constructor(i, n) {
        (this._platform = i),
          (this._nonce = n),
          (this._matchMedia =
            this._platform.isBrowser && window.matchMedia
              ? window.matchMedia.bind(window)
              : Ym);
      }
      matchMedia(i) {
        return (
          (this._platform.WEBKIT || this._platform.BLINK) && Gm(i, this._nonce),
          this._matchMedia(i)
        );
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(he), h(Ri, 8));
    }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })();
function Gm(t, e) {
  if (!ad.has(t))
    try {
      Mt ||
        ((Mt = document.createElement("style")),
        e && Mt.setAttribute("nonce", e),
        Mt.setAttribute("type", "text/css"),
        document.head.appendChild(Mt)),
        Mt.sheet &&
          (Mt.sheet.insertRule(`@media ${t} {body{ }}`, 0), ad.add(t));
    } catch (r) {
      console.error(r);
    }
}
function Ym(t) {
  return {
    matches: t === "all" || t === "",
    media: t,
    addListener: () => {},
    removeListener: () => {},
  };
}
var cd = (() => {
  let e = class e {
    constructor(i, n) {
      (this._mediaMatcher = i),
        (this._zone = n),
        (this._queries = new Map()),
        (this._destroySubject = new L());
    }
    ngOnDestroy() {
      this._destroySubject.next(), this._destroySubject.complete();
    }
    isMatched(i) {
      return ld(mi(i)).some((o) => this._registerQuery(o).mql.matches);
    }
    observe(i) {
      let o = ld(mi(i)).map((a) => this._registerQuery(a).observable),
        s = Ii(o);
      return (
        (s = Pn(s.pipe(ie(1)), s.pipe(Di(1), jt(0)))),
        s.pipe(
          w((a) => {
            let c = { matches: !1, breakpoints: {} };
            return (
              a.forEach(({ matches: l, query: d }) => {
                (c.matches = c.matches || l), (c.breakpoints[d] = l);
              }),
              c
            );
          }),
        )
      );
    }
    _registerQuery(i) {
      if (this._queries.has(i)) return this._queries.get(i);
      let n = this._mediaMatcher.matchMedia(i),
        s = {
          observable: new re((a) => {
            let c = (l) => this._zone.run(() => a.next(l));
            return (
              n.addListener(c),
              () => {
                n.removeListener(c);
              }
            );
          }).pipe(
            pt(n),
            w(({ matches: a }) => ({ query: i, matches: a })),
            Ce(this._destroySubject),
          ),
          mql: n,
        };
      return this._queries.set(i, s), s;
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(h(Wm), h(M));
  }),
    (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
function ld(t) {
  return t
    .map((e) => e.split(","))
    .reduce((e, r) => e.concat(r))
    .map((e) => e.trim());
}
var hd = " ";
function Ys(t, e, r) {
  let i = fd(t, e);
  (r = r.trim()),
    !i.some((n) => n.trim() === r) &&
      (i.push(r), t.setAttribute(e, i.join(hd)));
}
function Or(t, e, r) {
  let i = fd(t, e);
  r = r.trim();
  let n = i.filter((o) => o !== r);
  n.length ? t.setAttribute(e, n.join(hd)) : t.removeAttribute(e);
}
function fd(t, e) {
  return t.getAttribute(e)?.match(/\S+/g) ?? [];
}
var Hs = class {
    constructor(e, r) {
      (this._items = e),
        (this._activeItemIndex = -1),
        (this._activeItem = null),
        (this._wrap = !1),
        (this._letterKeyStream = new L()),
        (this._typeaheadSubscription = Oe.EMPTY),
        (this._vertical = !0),
        (this._allowedModifierKeys = []),
        (this._homeAndEnd = !1),
        (this._pageUpAndDown = { enabled: !1, delta: 10 }),
        (this._skipPredicateFn = (i) => i.disabled),
        (this._pressedLetters = []),
        (this.tabOut = new L()),
        (this.change = new L()),
        e instanceof vo
          ? (this._itemChangesSubscription = e.changes.subscribe((i) =>
              this._itemsChanged(i.toArray()),
            ))
          : xo(e) &&
            (this._effectRef = Ao(() => this._itemsChanged(e()), {
              injector: r,
            }));
    }
    skipPredicate(e) {
      return (this._skipPredicateFn = e), this;
    }
    withWrap(e = !0) {
      return (this._wrap = e), this;
    }
    withVerticalOrientation(e = !0) {
      return (this._vertical = e), this;
    }
    withHorizontalOrientation(e) {
      return (this._horizontal = e), this;
    }
    withAllowedModifierKeys(e) {
      return (this._allowedModifierKeys = e), this;
    }
    withTypeAhead(e = 200) {
      return (
        this._typeaheadSubscription.unsubscribe(),
        (this._typeaheadSubscription = this._letterKeyStream
          .pipe(
            $((r) => this._pressedLetters.push(r)),
            jt(e),
            z(() => this._pressedLetters.length > 0),
            w(() => this._pressedLetters.join("")),
          )
          .subscribe((r) => {
            let i = this._getItemsArray();
            for (let n = 1; n < i.length + 1; n++) {
              let o = (this._activeItemIndex + n) % i.length,
                s = i[o];
              if (
                !this._skipPredicateFn(s) &&
                s.getLabel().toUpperCase().trim().indexOf(r) === 0
              ) {
                this.setActiveItem(o);
                break;
              }
            }
            this._pressedLetters = [];
          })),
        this
      );
    }
    cancelTypeahead() {
      return (this._pressedLetters = []), this;
    }
    withHomeAndEnd(e = !0) {
      return (this._homeAndEnd = e), this;
    }
    withPageUpDown(e = !0, r = 10) {
      return (this._pageUpAndDown = { enabled: e, delta: r }), this;
    }
    setActiveItem(e) {
      let r = this._activeItem;
      this.updateActiveItem(e),
        this._activeItem !== r && this.change.next(this._activeItemIndex);
    }
    onKeydown(e) {
      let r = e.keyCode,
        n = ["altKey", "ctrlKey", "metaKey", "shiftKey"].every(
          (o) => !e[o] || this._allowedModifierKeys.indexOf(o) > -1,
        );
      switch (r) {
        case 9:
          this.tabOut.next();
          return;
        case 40:
          if (this._vertical && n) {
            this.setNextItemActive();
            break;
          } else return;
        case 38:
          if (this._vertical && n) {
            this.setPreviousItemActive();
            break;
          } else return;
        case 39:
          if (this._horizontal && n) {
            this._horizontal === "rtl"
              ? this.setPreviousItemActive()
              : this.setNextItemActive();
            break;
          } else return;
        case 37:
          if (this._horizontal && n) {
            this._horizontal === "rtl"
              ? this.setNextItemActive()
              : this.setPreviousItemActive();
            break;
          } else return;
        case 36:
          if (this._homeAndEnd && n) {
            this.setFirstItemActive();
            break;
          } else return;
        case 35:
          if (this._homeAndEnd && n) {
            this.setLastItemActive();
            break;
          } else return;
        case 33:
          if (this._pageUpAndDown.enabled && n) {
            let o = this._activeItemIndex - this._pageUpAndDown.delta;
            this._setActiveItemByIndex(o > 0 ? o : 0, 1);
            break;
          } else return;
        case 34:
          if (this._pageUpAndDown.enabled && n) {
            let o = this._activeItemIndex + this._pageUpAndDown.delta,
              s = this._getItemsArray().length;
            this._setActiveItemByIndex(o < s ? o : s - 1, -1);
            break;
          } else return;
        default:
          (n || dt(e, "shiftKey")) &&
            (e.key && e.key.length === 1
              ? this._letterKeyStream.next(e.key.toLocaleUpperCase())
              : ((r >= 65 && r <= 90) || (r >= 48 && r <= 57)) &&
                this._letterKeyStream.next(String.fromCharCode(r)));
          return;
      }
      (this._pressedLetters = []), e.preventDefault();
    }
    get activeItemIndex() {
      return this._activeItemIndex;
    }
    get activeItem() {
      return this._activeItem;
    }
    isTyping() {
      return this._pressedLetters.length > 0;
    }
    setFirstItemActive() {
      this._setActiveItemByIndex(0, 1);
    }
    setLastItemActive() {
      this._setActiveItemByIndex(this._items.length - 1, -1);
    }
    setNextItemActive() {
      this._activeItemIndex < 0
        ? this.setFirstItemActive()
        : this._setActiveItemByDelta(1);
    }
    setPreviousItemActive() {
      this._activeItemIndex < 0 && this._wrap
        ? this.setLastItemActive()
        : this._setActiveItemByDelta(-1);
    }
    updateActiveItem(e) {
      let r = this._getItemsArray(),
        i = typeof e == "number" ? e : r.indexOf(e),
        n = r[i];
      (this._activeItem = n ?? null), (this._activeItemIndex = i);
    }
    destroy() {
      this._typeaheadSubscription.unsubscribe(),
        this._itemChangesSubscription?.unsubscribe(),
        this._effectRef?.destroy(),
        this._letterKeyStream.complete(),
        this.tabOut.complete(),
        this.change.complete(),
        (this._pressedLetters = []);
    }
    _setActiveItemByDelta(e) {
      this._wrap
        ? this._setActiveInWrapMode(e)
        : this._setActiveInDefaultMode(e);
    }
    _setActiveInWrapMode(e) {
      let r = this._getItemsArray();
      for (let i = 1; i <= r.length; i++) {
        let n = (this._activeItemIndex + e * i + r.length) % r.length,
          o = r[n];
        if (!this._skipPredicateFn(o)) {
          this.setActiveItem(n);
          return;
        }
      }
    }
    _setActiveInDefaultMode(e) {
      this._setActiveItemByIndex(this._activeItemIndex + e, e);
    }
    _setActiveItemByIndex(e, r) {
      let i = this._getItemsArray();
      if (i[e]) {
        for (; this._skipPredicateFn(i[e]); ) if (((e += r), !i[e])) return;
        this.setActiveItem(e);
      }
    }
    _getItemsArray() {
      return xo(this._items)
        ? this._items()
        : this._items instanceof vo
          ? this._items.toArray()
          : this._items;
    }
    _itemsChanged(e) {
      if (this._activeItem) {
        let r = e.indexOf(this._activeItem);
        r > -1 && r !== this._activeItemIndex && (this._activeItemIndex = r);
      }
    }
  },
  Ar = class extends Hs {
    setActiveItem(e) {
      this.activeItem && this.activeItem.setInactiveStyles(),
        super.setActiveItem(e),
        this.activeItem && this.activeItem.setActiveStyles();
    }
  };
function pd(t) {
  return t.buttons === 0 || t.detail === 0;
}
function md(t) {
  let e =
    (t.touches && t.touches[0]) || (t.changedTouches && t.changedTouches[0]);
  return (
    !!e &&
    e.identifier === -1 &&
    (e.radiusX == null || e.radiusX === 1) &&
    (e.radiusY == null || e.radiusY === 1)
  );
}
var Ft = (function (t) {
    return (
      (t[(t.NONE = 0)] = "NONE"),
      (t[(t.BLACK_ON_WHITE = 1)] = "BLACK_ON_WHITE"),
      (t[(t.WHITE_ON_BLACK = 2)] = "WHITE_ON_BLACK"),
      t
    );
  })(Ft || {}),
  dd = "cdk-high-contrast-black-on-white",
  ud = "cdk-high-contrast-white-on-black",
  $s = "cdk-high-contrast-active",
  gd = (() => {
    let e = class e {
      constructor(i, n) {
        (this._platform = i),
          (this._document = n),
          (this._breakpointSubscription = m(cd)
            .observe("(forced-colors: active)")
            .subscribe(() => {
              this._hasCheckedHighContrastMode &&
                ((this._hasCheckedHighContrastMode = !1),
                this._applyBodyHighContrastModeCssClasses());
            }));
      }
      getHighContrastMode() {
        if (!this._platform.isBrowser) return Ft.NONE;
        let i = this._document.createElement("div");
        (i.style.backgroundColor = "rgb(1,2,3)"),
          (i.style.position = "absolute"),
          this._document.body.appendChild(i);
        let n = this._document.defaultView || window,
          o = n && n.getComputedStyle ? n.getComputedStyle(i) : null,
          s = ((o && o.backgroundColor) || "").replace(/ /g, "");
        switch ((i.remove(), s)) {
          case "rgb(0,0,0)":
          case "rgb(45,50,54)":
          case "rgb(32,32,32)":
            return Ft.WHITE_ON_BLACK;
          case "rgb(255,255,255)":
          case "rgb(255,250,239)":
            return Ft.BLACK_ON_WHITE;
        }
        return Ft.NONE;
      }
      ngOnDestroy() {
        this._breakpointSubscription.unsubscribe();
      }
      _applyBodyHighContrastModeCssClasses() {
        if (
          !this._hasCheckedHighContrastMode &&
          this._platform.isBrowser &&
          this._document.body
        ) {
          let i = this._document.body.classList;
          i.remove($s, dd, ud), (this._hasCheckedHighContrastMode = !0);
          let n = this.getHighContrastMode();
          n === Ft.BLACK_ON_WHITE
            ? i.add($s, dd)
            : n === Ft.WHITE_ON_BLACK && i.add($s, ud);
        }
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(he), h(N));
    }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })();
var og = new g("cdk-dir-doc", { providedIn: "root", factory: sg });
function sg() {
  return m(N);
}
var ag =
  /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function lg(t) {
  let e = t?.toLowerCase() || "";
  return e === "auto" && typeof navigator < "u" && navigator?.language
    ? ag.test(navigator.language)
      ? "rtl"
      : "ltr"
    : e === "rtl"
      ? "rtl"
      : "ltr";
}
var Tr = (() => {
  let e = class e {
    constructor(i) {
      if (((this.value = "ltr"), (this.change = new Y()), i)) {
        let n = i.body ? i.body.dir : null,
          o = i.documentElement ? i.documentElement.dir : null;
        this.value = lg(n || o || "ltr");
      }
    }
    ngOnDestroy() {
      this.change.complete();
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(h(og, 8));
  }),
    (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
var ut = (() => {
  let e = class e {};
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵmod = k({ type: e })),
    (e.ɵinj = F({}));
  let t = e;
  return t;
})();
var ug = ["text"],
  hg = [[["mat-icon"]], "*"],
  fg = ["mat-icon", "*"];
function pg(t, e) {
  if ((t & 1 && V(0, "mat-pseudo-checkbox", 1), t & 2)) {
    let r = ue();
    se("disabled", r.disabled)("state", r.selected ? "checked" : "unchecked");
  }
}
function mg(t, e) {
  if ((t & 1 && V(0, "mat-pseudo-checkbox", 3), t & 2)) {
    let r = ue();
    se("disabled", r.disabled);
  }
}
function gg(t, e) {
  if ((t & 1 && (A(0, "span", 4), ne(1), O()), t & 2)) {
    let r = ue();
    j(), Xt("(", r.group.label, ")");
  }
}
function vg() {
  return !0;
}
var _g = new g("mat-sanity-checks", { providedIn: "root", factory: vg }),
  Ae = (() => {
    let e = class e {
      constructor(i, n, o) {
        (this._sanityChecks = n),
          (this._document = o),
          (this._hasDoneGlobalChecks = !1),
          i._applyBodyHighContrastModeCssClasses(),
          this._hasDoneGlobalChecks || (this._hasDoneGlobalChecks = !0);
      }
      _checkIsEnabled(i) {
        return vn()
          ? !1
          : typeof this._sanityChecks == "boolean"
            ? this._sanityChecks
            : !!this._sanityChecks[i];
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(gd), h(_g, 8), h(N));
    }),
      (e.ɵmod = k({ type: e })),
      (e.ɵinj = F({ imports: [ut, ut] }));
    let t = e;
    return t;
  })();
var De = (function (t) {
    return (
      (t[(t.FADING_IN = 0)] = "FADING_IN"),
      (t[(t.VISIBLE = 1)] = "VISIBLE"),
      (t[(t.FADING_OUT = 2)] = "FADING_OUT"),
      (t[(t.HIDDEN = 3)] = "HIDDEN"),
      t
    );
  })(De || {}),
  qs = class {
    constructor(e, r, i, n = !1) {
      (this._renderer = e),
        (this.element = r),
        (this.config = i),
        (this._animationForciblyDisabledThroughCss = n),
        (this.state = De.HIDDEN);
    }
    fadeOut() {
      this._renderer.fadeOutRipple(this);
    }
  },
  _d = zs({ passive: !0, capture: !0 }),
  Xs = class {
    constructor() {
      (this._events = new Map()),
        (this._delegateEventHandler = (e) => {
          let r = Tt(e);
          r &&
            this._events.get(e.type)?.forEach((i, n) => {
              (n === r || n.contains(r)) && i.forEach((o) => o.handleEvent(e));
            });
        });
    }
    addHandler(e, r, i, n) {
      let o = this._events.get(r);
      if (o) {
        let s = o.get(i);
        s ? s.add(n) : o.set(i, new Set([n]));
      } else
        this._events.set(r, new Map([[i, new Set([n])]])),
          e.runOutsideAngular(() => {
            document.addEventListener(r, this._delegateEventHandler, _d);
          });
    }
    removeHandler(e, r, i) {
      let n = this._events.get(e);
      if (!n) return;
      let o = n.get(r);
      o &&
        (o.delete(i),
        o.size === 0 && n.delete(r),
        n.size === 0 &&
          (this._events.delete(e),
          document.removeEventListener(e, this._delegateEventHandler, _d)));
    }
  },
  yd = { enterDuration: 225, exitDuration: 150 },
  yg = 800,
  bd = zs({ passive: !0, capture: !0 }),
  xd = ["mousedown", "touchstart"],
  wd = ["mouseup", "mouseleave", "touchend", "touchcancel"],
  yn = class yn {
    constructor(e, r, i, n) {
      (this._target = e),
        (this._ngZone = r),
        (this._platform = n),
        (this._isPointerDown = !1),
        (this._activeRipples = new Map()),
        (this._pointerUpEventsRegistered = !1),
        n.isBrowser && (this._containerElement = _n(i));
    }
    fadeInRipple(e, r, i = {}) {
      let n = (this._containerRect =
          this._containerRect ||
          this._containerElement.getBoundingClientRect()),
        o = f(f({}, yd), i.animation);
      i.centered && ((e = n.left + n.width / 2), (r = n.top + n.height / 2));
      let s = i.radius || bg(e, r, n),
        a = e - n.left,
        c = r - n.top,
        l = o.enterDuration,
        d = document.createElement("div");
      d.classList.add("mat-ripple-element"),
        (d.style.left = `${a - s}px`),
        (d.style.top = `${c - s}px`),
        (d.style.height = `${s * 2}px`),
        (d.style.width = `${s * 2}px`),
        i.color != null && (d.style.backgroundColor = i.color),
        (d.style.transitionDuration = `${l}ms`),
        this._containerElement.appendChild(d);
      let u = window.getComputedStyle(d),
        p = u.transitionProperty,
        b = u.transitionDuration,
        _ =
          p === "none" ||
          b === "0s" ||
          b === "0s, 0s" ||
          (n.width === 0 && n.height === 0),
        x = new qs(this, d, i, _);
      (d.style.transform = "scale3d(1, 1, 1)"),
        (x.state = De.FADING_IN),
        i.persistent || (this._mostRecentTransientRipple = x);
      let I = null;
      return (
        !_ &&
          (l || o.exitDuration) &&
          this._ngZone.runOutsideAngular(() => {
            let S = () => this._finishRippleTransition(x),
              Z = () => this._destroyRipple(x);
            d.addEventListener("transitionend", S),
              d.addEventListener("transitioncancel", Z),
              (I = { onTransitionEnd: S, onTransitionCancel: Z });
          }),
        this._activeRipples.set(x, I),
        (_ || !l) && this._finishRippleTransition(x),
        x
      );
    }
    fadeOutRipple(e) {
      if (e.state === De.FADING_OUT || e.state === De.HIDDEN) return;
      let r = e.element,
        i = f(f({}, yd), e.config.animation);
      (r.style.transitionDuration = `${i.exitDuration}ms`),
        (r.style.opacity = "0"),
        (e.state = De.FADING_OUT),
        (e._animationForciblyDisabledThroughCss || !i.exitDuration) &&
          this._finishRippleTransition(e);
    }
    fadeOutAll() {
      this._getActiveRipples().forEach((e) => e.fadeOut());
    }
    fadeOutAllNonPersistent() {
      this._getActiveRipples().forEach((e) => {
        e.config.persistent || e.fadeOut();
      });
    }
    setupTriggerEvents(e) {
      let r = _n(e);
      !this._platform.isBrowser ||
        !r ||
        r === this._triggerElement ||
        (this._removeTriggerEvents(),
        (this._triggerElement = r),
        xd.forEach((i) => {
          yn._eventManager.addHandler(this._ngZone, i, r, this);
        }));
    }
    handleEvent(e) {
      e.type === "mousedown"
        ? this._onMousedown(e)
        : e.type === "touchstart"
          ? this._onTouchStart(e)
          : this._onPointerUp(),
        this._pointerUpEventsRegistered ||
          (this._ngZone.runOutsideAngular(() => {
            wd.forEach((r) => {
              this._triggerElement.addEventListener(r, this, bd);
            });
          }),
          (this._pointerUpEventsRegistered = !0));
    }
    _finishRippleTransition(e) {
      e.state === De.FADING_IN
        ? this._startFadeOutTransition(e)
        : e.state === De.FADING_OUT && this._destroyRipple(e);
    }
    _startFadeOutTransition(e) {
      let r = e === this._mostRecentTransientRipple,
        { persistent: i } = e.config;
      (e.state = De.VISIBLE), !i && (!r || !this._isPointerDown) && e.fadeOut();
    }
    _destroyRipple(e) {
      let r = this._activeRipples.get(e) ?? null;
      this._activeRipples.delete(e),
        this._activeRipples.size || (this._containerRect = null),
        e === this._mostRecentTransientRipple &&
          (this._mostRecentTransientRipple = null),
        (e.state = De.HIDDEN),
        r !== null &&
          (e.element.removeEventListener("transitionend", r.onTransitionEnd),
          e.element.removeEventListener(
            "transitioncancel",
            r.onTransitionCancel,
          )),
        e.element.remove();
    }
    _onMousedown(e) {
      let r = pd(e),
        i =
          this._lastTouchStartEvent &&
          Date.now() < this._lastTouchStartEvent + yg;
      !this._target.rippleDisabled &&
        !r &&
        !i &&
        ((this._isPointerDown = !0),
        this.fadeInRipple(e.clientX, e.clientY, this._target.rippleConfig));
    }
    _onTouchStart(e) {
      if (!this._target.rippleDisabled && !md(e)) {
        (this._lastTouchStartEvent = Date.now()), (this._isPointerDown = !0);
        let r = e.changedTouches;
        if (r)
          for (let i = 0; i < r.length; i++)
            this.fadeInRipple(
              r[i].clientX,
              r[i].clientY,
              this._target.rippleConfig,
            );
      }
    }
    _onPointerUp() {
      this._isPointerDown &&
        ((this._isPointerDown = !1),
        this._getActiveRipples().forEach((e) => {
          let r =
            e.state === De.VISIBLE ||
            (e.config.terminateOnPointerUp && e.state === De.FADING_IN);
          !e.config.persistent && r && e.fadeOut();
        }));
    }
    _getActiveRipples() {
      return Array.from(this._activeRipples.keys());
    }
    _removeTriggerEvents() {
      let e = this._triggerElement;
      e &&
        (xd.forEach((r) => yn._eventManager.removeHandler(r, e, this)),
        this._pointerUpEventsRegistered &&
          wd.forEach((r) => e.removeEventListener(r, this, bd)));
    }
  };
yn._eventManager = new Xs();
var Zs = yn;
function bg(t, e, r) {
  let i = Math.max(Math.abs(t - r.left), Math.abs(t - r.right)),
    n = Math.max(Math.abs(e - r.top), Math.abs(e - r.bottom));
  return Math.sqrt(i * i + n * n);
}
var xg = new g("mat-ripple-global-options"),
  wg = (() => {
    let e = class e {
      get disabled() {
        return this._disabled;
      }
      set disabled(i) {
        i && this.fadeOutAllNonPersistent(),
          (this._disabled = i),
          this._setupTriggerEventsIfEnabled();
      }
      get trigger() {
        return this._trigger || this._elementRef.nativeElement;
      }
      set trigger(i) {
        (this._trigger = i), this._setupTriggerEventsIfEnabled();
      }
      constructor(i, n, o, s, a) {
        (this._elementRef = i),
          (this._animationMode = a),
          (this.radius = 0),
          (this._disabled = !1),
          (this._isInitialized = !1),
          (this._globalOptions = s || {}),
          (this._rippleRenderer = new Zs(this, n, i, o));
      }
      ngOnInit() {
        (this._isInitialized = !0), this._setupTriggerEventsIfEnabled();
      }
      ngOnDestroy() {
        this._rippleRenderer._removeTriggerEvents();
      }
      fadeOutAll() {
        this._rippleRenderer.fadeOutAll();
      }
      fadeOutAllNonPersistent() {
        this._rippleRenderer.fadeOutAllNonPersistent();
      }
      get rippleConfig() {
        return {
          centered: this.centered,
          radius: this.radius,
          color: this.color,
          animation: f(
            f(
              f({}, this._globalOptions.animation),
              this._animationMode === "NoopAnimations"
                ? { enterDuration: 0, exitDuration: 0 }
                : {},
            ),
            this.animation,
          ),
          terminateOnPointerUp: this._globalOptions.terminateOnPointerUp,
        };
      }
      get rippleDisabled() {
        return this.disabled || !!this._globalOptions.disabled;
      }
      _setupTriggerEventsIfEnabled() {
        !this.disabled &&
          this._isInitialized &&
          this._rippleRenderer.setupTriggerEvents(this.trigger);
      }
      launch(i, n = 0, o) {
        return typeof i == "number"
          ? this._rippleRenderer.fadeInRipple(
              i,
              n,
              f(f({}, this.rippleConfig), o),
            )
          : this._rippleRenderer.fadeInRipple(
              0,
              0,
              f(f({}, this.rippleConfig), i),
            );
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(y(X), y(M), y(he), y(xg, 8), y(Ve, 8));
    }),
      (e.ɵdir = Q({
        type: e,
        selectors: [
          ["", "mat-ripple", ""],
          ["", "matRipple", ""],
        ],
        hostAttrs: [1, "mat-ripple"],
        hostVars: 2,
        hostBindings: function (n, o) {
          n & 2 && Me("mat-ripple-unbounded", o.unbounded);
        },
        inputs: {
          color: [T.None, "matRippleColor", "color"],
          unbounded: [T.None, "matRippleUnbounded", "unbounded"],
          centered: [T.None, "matRippleCentered", "centered"],
          radius: [T.None, "matRippleRadius", "radius"],
          animation: [T.None, "matRippleAnimation", "animation"],
          disabled: [T.None, "matRippleDisabled", "disabled"],
          trigger: [T.None, "matRippleTrigger", "trigger"],
        },
        exportAs: ["matRipple"],
        standalone: !0,
      }));
    let t = e;
    return t;
  })(),
  Cg = (() => {
    let e = class e {};
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵmod = k({ type: e })),
      (e.ɵinj = F({ imports: [Ae, Ae] }));
    let t = e;
    return t;
  })(),
  Eg = (() => {
    let e = class e {
      constructor(i) {
        (this._animationMode = i),
          (this.state = "unchecked"),
          (this.disabled = !1),
          (this.appearance = "full");
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(y(Ve, 8));
    }),
      (e.ɵcmp = W({
        type: e,
        selectors: [["mat-pseudo-checkbox"]],
        hostAttrs: [1, "mat-pseudo-checkbox"],
        hostVars: 12,
        hostBindings: function (n, o) {
          n & 2 &&
            Me(
              "mat-pseudo-checkbox-indeterminate",
              o.state === "indeterminate",
            )("mat-pseudo-checkbox-checked", o.state === "checked")(
              "mat-pseudo-checkbox-disabled",
              o.disabled,
            )("mat-pseudo-checkbox-minimal", o.appearance === "minimal")(
              "mat-pseudo-checkbox-full",
              o.appearance === "full",
            )("_mat-animation-noopable", o._animationMode === "NoopAnimations");
        },
        inputs: {
          state: "state",
          disabled: "disabled",
          appearance: "appearance",
        },
        standalone: !0,
        features: [G],
        decls: 0,
        vars: 0,
        template: function (n, o) {},
        styles: [
          '.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-minimal-pseudo-checkbox-selected-checkmark-color)}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color)}.mat-pseudo-checkbox-full{border-color:var(--mat-full-pseudo-checkbox-unselected-icon-color);border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-full-pseudo-checkbox-disabled-unselected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-full-pseudo-checkbox-selected-icon-color);border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-full-pseudo-checkbox-selected-checkmark-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-full-pseudo-checkbox-disabled-selected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-full-pseudo-checkbox-disabled-selected-checkmark-color)}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}',
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let t = e;
    return t;
  })(),
  Sg = (() => {
    let e = class e {};
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵmod = k({ type: e })),
      (e.ɵinj = F({ imports: [Ae] }));
    let t = e;
    return t;
  })(),
  Qs = new g("MAT_OPTION_PARENT_COMPONENT");
var Js = new g("MatOptgroup");
var Ig = 0,
  bn = class {
    constructor(e, r = !1) {
      (this.source = e), (this.isUserInput = r);
    }
  },
  Mr = (() => {
    let e = class e {
      get multiple() {
        return this._parent && this._parent.multiple;
      }
      get selected() {
        return this._selected;
      }
      get disabled() {
        return (this.group && this.group.disabled) || this._disabled;
      }
      set disabled(i) {
        this._disabled = i;
      }
      get disableRipple() {
        return !!(this._parent && this._parent.disableRipple);
      }
      get hideSingleSelectionIndicator() {
        return !!(this._parent && this._parent.hideSingleSelectionIndicator);
      }
      constructor(i, n, o, s) {
        (this._element = i),
          (this._changeDetectorRef = n),
          (this._parent = o),
          (this.group = s),
          (this._selected = !1),
          (this._active = !1),
          (this._disabled = !1),
          (this._mostRecentViewValue = ""),
          (this.id = `mat-option-${Ig++}`),
          (this.onSelectionChange = new Y()),
          (this._stateChanges = new L());
      }
      get active() {
        return this._active;
      }
      get viewValue() {
        return (this._text?.nativeElement.textContent || "").trim();
      }
      select(i = !0) {
        this._selected ||
          ((this._selected = !0),
          this._changeDetectorRef.markForCheck(),
          i && this._emitSelectionChangeEvent());
      }
      deselect(i = !0) {
        this._selected &&
          ((this._selected = !1),
          this._changeDetectorRef.markForCheck(),
          i && this._emitSelectionChangeEvent());
      }
      focus(i, n) {
        let o = this._getHostElement();
        typeof o.focus == "function" && o.focus(n);
      }
      setActiveStyles() {
        this._active ||
          ((this._active = !0), this._changeDetectorRef.markForCheck());
      }
      setInactiveStyles() {
        this._active &&
          ((this._active = !1), this._changeDetectorRef.markForCheck());
      }
      getLabel() {
        return this.viewValue;
      }
      _handleKeydown(i) {
        (i.keyCode === 13 || i.keyCode === 32) &&
          !dt(i) &&
          (this._selectViaInteraction(), i.preventDefault());
      }
      _selectViaInteraction() {
        this.disabled ||
          ((this._selected = this.multiple ? !this._selected : !0),
          this._changeDetectorRef.markForCheck(),
          this._emitSelectionChangeEvent(!0));
      }
      _getTabIndex() {
        return this.disabled ? "-1" : "0";
      }
      _getHostElement() {
        return this._element.nativeElement;
      }
      ngAfterViewChecked() {
        if (this._selected) {
          let i = this.viewValue;
          i !== this._mostRecentViewValue &&
            (this._mostRecentViewValue && this._stateChanges.next(),
            (this._mostRecentViewValue = i));
        }
      }
      ngOnDestroy() {
        this._stateChanges.complete();
      }
      _emitSelectionChangeEvent(i = !1) {
        this.onSelectionChange.emit(new bn(this, i));
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(y(X), y(ye), y(Qs, 8), y(Js, 8));
    }),
      (e.ɵcmp = W({
        type: e,
        selectors: [["mat-option"]],
        viewQuery: function (n, o) {
          if ((n & 1 && yt(ug, 7), n & 2)) {
            let s;
            Ue((s = Be())) && (o._text = s.first);
          }
        },
        hostAttrs: ["role", "option", 1, "mat-mdc-option", "mdc-list-item"],
        hostVars: 11,
        hostBindings: function (n, o) {
          n & 1 &&
            de("click", function () {
              return o._selectViaInteraction();
            })("keydown", function (a) {
              return o._handleKeydown(a);
            }),
            n & 2 &&
              (Co("id", o.id),
              Te("aria-selected", o.selected)(
                "aria-disabled",
                o.disabled.toString(),
              ),
              Me("mdc-list-item--selected", o.selected)(
                "mat-mdc-option-multiple",
                o.multiple,
              )("mat-mdc-option-active", o.active)(
                "mdc-list-item--disabled",
                o.disabled,
              ));
        },
        inputs: {
          value: "value",
          id: "id",
          disabled: [T.HasDecoratorInputTransform, "disabled", "disabled", be],
        },
        outputs: { onSelectionChange: "onSelectionChange" },
        exportAs: ["matOption"],
        standalone: !0,
        features: [Ee, G],
        ngContentSelectors: fg,
        decls: 8,
        vars: 5,
        consts: [
          ["text", ""],
          [
            "aria-hidden",
            "true",
            1,
            "mat-mdc-option-pseudo-checkbox",
            3,
            "disabled",
            "state",
          ],
          [1, "mdc-list-item__primary-text"],
          [
            "state",
            "checked",
            "aria-hidden",
            "true",
            "appearance",
            "minimal",
            1,
            "mat-mdc-option-pseudo-checkbox",
            3,
            "disabled",
          ],
          [1, "cdk-visually-hidden"],
          [
            "aria-hidden",
            "true",
            "mat-ripple",
            "",
            1,
            "mat-mdc-option-ripple",
            "mat-mdc-focus-indicator",
            3,
            "matRippleTrigger",
            "matRippleDisabled",
          ],
        ],
        template: function (n, o) {
          n & 1 &&
            (qt(hg),
            oe(0, pg, 1, 2, "mat-pseudo-checkbox", 1),
            _t(1),
            A(2, "span", 2, 0),
            _t(4, 1),
            O(),
            oe(5, mg, 1, 1, "mat-pseudo-checkbox", 3)(6, gg, 2, 1, "span", 4),
            V(7, "div", 5)),
            n & 2 &&
              (_e(0, o.multiple ? 0 : -1),
              j(5),
              _e(
                5,
                !o.multiple && o.selected && !o.hideSingleSelectionIndicator
                  ? 5
                  : -1,
              ),
              j(),
              _e(6, o.group && o.group._inert ? 6 : -1),
              j(),
              se("matRippleTrigger", o._getHostElement())(
                "matRippleDisabled",
                o.disabled || o.disableRipple,
              ));
        },
        dependencies: [Eg, wg],
        styles: [
          '.mat-mdc-option{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color);font-family:var(--mat-option-label-text-font);line-height:var(--mat-option-label-text-line-height);font-size:var(--mat-option-label-text-size);letter-spacing:var(--mat-option-label-text-tracking);font-weight:var(--mat-option-label-text-weight);min-height:48px}.mat-mdc-option:focus{outline:none}[dir=rtl] .mat-mdc-option,.mat-mdc-option[dir=rtl]{padding-left:16px;padding-right:16px}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color)}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color)}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color)}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple){background-color:var(--mat-option-selected-state-layer-color)}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}.cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{right:auto;left:16px}.mat-mdc-option-multiple{--mdc-list-list-item-selected-container-color:var(--mdc-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-mdc-focus-indicator::before{content:""}',
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let t = e;
    return t;
  })();
function Cd(t, e, r) {
  if (r.length) {
    let i = e.toArray(),
      n = r.toArray(),
      o = 0;
    for (let s = 0; s < t + 1; s++) i[s].group && i[s].group === n[o] && o++;
    return o;
  }
  return 0;
}
function Ed(t, e, r, i) {
  return t < r ? t : t + e > r + i ? Math.max(0, t - i + e) : r;
}
var ea = (() => {
  let e = class e {};
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵmod = k({ type: e })),
    (e.ɵinj = F({ imports: [Cg, Ae, Sg] }));
  let t = e;
  return t;
})();
var Ag = new g("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");
var Fr = (() => {
  let e = class e {
    constructor(i, n, o, s, a) {
      (this._elementRef = i),
        (this._ngZone = n),
        (this._changeDetectorRef = o),
        (this._animationMode = s),
        (this._isNoopAnimation = !1),
        (this._defaultColor = "primary"),
        (this._value = 0),
        (this._bufferValue = 0),
        (this.animationEnd = new Y()),
        (this._mode = "determinate"),
        (this._transitionendHandler = (c) => {
          this.animationEnd.observers.length === 0 ||
            !c.target ||
            !c.target.classList.contains("mdc-linear-progress__primary-bar") ||
            ((this.mode === "determinate" || this.mode === "buffer") &&
              this._ngZone.run(() =>
                this.animationEnd.next({ value: this.value }),
              ));
        }),
        (this._isNoopAnimation = s === "NoopAnimations"),
        a &&
          (a.color && (this.color = this._defaultColor = a.color),
          (this.mode = a.mode || this.mode));
    }
    get color() {
      return this._color || this._defaultColor;
    }
    set color(i) {
      this._color = i;
    }
    get value() {
      return this._value;
    }
    set value(i) {
      (this._value = Sd(i || 0)), this._changeDetectorRef.markForCheck();
    }
    get bufferValue() {
      return this._bufferValue || 0;
    }
    set bufferValue(i) {
      (this._bufferValue = Sd(i || 0)), this._changeDetectorRef.markForCheck();
    }
    get mode() {
      return this._mode;
    }
    set mode(i) {
      (this._mode = i), this._changeDetectorRef.markForCheck();
    }
    ngAfterViewInit() {
      this._ngZone.runOutsideAngular(() => {
        this._elementRef.nativeElement.addEventListener(
          "transitionend",
          this._transitionendHandler,
        );
      });
    }
    ngOnDestroy() {
      this._elementRef.nativeElement.removeEventListener(
        "transitionend",
        this._transitionendHandler,
      );
    }
    _getPrimaryBarTransform() {
      return `scaleX(${this._isIndeterminate() ? 1 : this.value / 100})`;
    }
    _getBufferBarFlexBasis() {
      return `${this.mode === "buffer" ? this.bufferValue : 100}%`;
    }
    _isIndeterminate() {
      return this.mode === "indeterminate" || this.mode === "query";
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(y(X), y(M), y(ye), y(Ve, 8), y(Ag, 8));
  }),
    (e.ɵcmp = W({
      type: e,
      selectors: [["mat-progress-bar"]],
      hostAttrs: [
        "role",
        "progressbar",
        "aria-valuemin",
        "0",
        "aria-valuemax",
        "100",
        "tabindex",
        "-1",
        1,
        "mat-mdc-progress-bar",
        "mdc-linear-progress",
      ],
      hostVars: 10,
      hostBindings: function (n, o) {
        n & 2 &&
          (Te("aria-valuenow", o._isIndeterminate() ? null : o.value)(
            "mode",
            o.mode,
          ),
          ul("mat-" + o.color),
          Me("_mat-animation-noopable", o._isNoopAnimation)(
            "mdc-linear-progress--animation-ready",
            !o._isNoopAnimation,
          )("mdc-linear-progress--indeterminate", o._isIndeterminate()));
      },
      inputs: {
        color: "color",
        value: [T.HasDecoratorInputTransform, "value", "value", Do],
        bufferValue: [
          T.HasDecoratorInputTransform,
          "bufferValue",
          "bufferValue",
          Do,
        ],
        mode: "mode",
      },
      outputs: { animationEnd: "animationEnd" },
      exportAs: ["matProgressBar"],
      standalone: !0,
      features: [Ee, G],
      decls: 7,
      vars: 4,
      consts: [
        ["aria-hidden", "true", 1, "mdc-linear-progress__buffer"],
        [1, "mdc-linear-progress__buffer-bar"],
        [1, "mdc-linear-progress__buffer-dots"],
        [
          "aria-hidden",
          "true",
          1,
          "mdc-linear-progress__bar",
          "mdc-linear-progress__primary-bar",
        ],
        [1, "mdc-linear-progress__bar-inner"],
        [
          "aria-hidden",
          "true",
          1,
          "mdc-linear-progress__bar",
          "mdc-linear-progress__secondary-bar",
        ],
      ],
      template: function (n, o) {
        n & 1 &&
          (A(0, "div", 0),
          V(1, "div", 1)(2, "div", 2),
          O(),
          A(3, "div", 3),
          V(4, "span", 4),
          O(),
          A(5, "div", 5),
          V(6, "span", 4),
          O()),
          n & 2 &&
            (j(),
            Bn("flex-basis", o._getBufferBarFlexBasis()),
            j(2),
            Bn("transform", o._getPrimaryBarTransform()));
      },
      styles: [
        `@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half))}100%{transform:translateX(var(--mdc-linear-progress-primary-full))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half-neg))}100%{transform:translateX(var(--mdc-linear-progress-primary-full-neg))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half-neg))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full-neg))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}@media screen and (forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;flex:auto;transform:rotate(180deg);-webkit-mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mdc-linear-progress-track-height) * -2.5))}}.mdc-linear-progress__bar-inner{border-color:var(--mdc-linear-progress-active-indicator-color)}.mdc-linear-progress__buffer-dots{background-color:var(--mdc-linear-progress-track-color)}@media(forced-colors: active){.mdc-linear-progress__buffer-dots{background-color:ButtonBorder}}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress__buffer-dots{background-color:rgba(0,0,0,0);background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(244, 67, 54, 0.25)'/%3E%3C/svg%3E")}}.mdc-linear-progress__buffer-bar{background-color:var(--mdc-linear-progress-track-color)}.mdc-linear-progress{height:max(var(--mdc-linear-progress-track-height), var(--mdc-linear-progress-active-indicator-height))}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress{height:4px}}.mdc-linear-progress__bar{height:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress__bar-inner{border-top-width:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress__buffer{height:var(--mdc-linear-progress-track-height)}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress__buffer-dots{background-size:10px var(--mdc-linear-progress-track-height)}}.mdc-linear-progress__buffer{border-radius:var(--mdc-linear-progress-track-shape)}.mat-mdc-progress-bar{display:block;text-align:start;--mdc-linear-progress-primary-half: 83.67142%;--mdc-linear-progress-primary-full: 200.611057%;--mdc-linear-progress-secondary-quarter: 37.651913%;--mdc-linear-progress-secondary-half: 84.386165%;--mdc-linear-progress-secondary-full: 160.277782%;--mdc-linear-progress-primary-half-neg: -83.67142%;--mdc-linear-progress-primary-full-neg: -200.611057%;--mdc-linear-progress-secondary-quarter-neg: -37.651913%;--mdc-linear-progress-secondary-half-neg: -84.386165%;--mdc-linear-progress-secondary-full-neg: -160.277782%}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}`,
      ],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let t = e;
  return t;
})();
function Sd(t, e = 0, r = 100) {
  return Math.max(e, Math.min(r, t));
}
var kr = (() => {
  let e = class e {};
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵmod = k({ type: e })),
    (e.ɵinj = F({ imports: [Ae] }));
  let t = e;
  return t;
})();
var Dd = (() => {
  let e = class e {
    constructor() {
      this.userGeo = { lat: "51.509865", lng: "-0.1277583" };
    }
    getLocation() {
      return (
        navigator.geolocation &&
          navigator.geolocation.getCurrentPosition(
            (i) => {
              this.userGeo = {
                lat: `${i.coords.latitude}`,
                lng: `${i.coords.longitude}`,
              };
            },
            (i) => {
              alert(i.message);
            },
          ),
        this.userGeo
      );
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
var gi = (() => {
  let e = class e {
    constructor(i) {
      (this.userGeoService = i),
        (this.cityInfo$ = new J({ name: "", lat: "", lng: "" })),
        this.cityInfo$.next(
          (() => {
            let n = this.userGeoService.getLocation();
            return E(f({}, this.cityInfo$.value), { lat: n.lat, lng: n.lng });
          })(),
        );
    }
    getCityInfo() {
      return this.cityInfo$;
    }
    setCityInfo(i) {
      this.cityInfo$.next(f({}, i));
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(h(Dd));
  }),
    (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
function Og(t, e) {
  t & 1 && V(0, "mat-progress-bar", 0);
}
function Tg(t, e) {
  t & 1 && (A(0, "p"), ne(1, "Something went wrong"), O());
}
function Mg(t, e) {
  if (
    (t & 1 &&
      (A(0, "div", 2)(1, "p"),
      ne(2),
      ee(3, "date"),
      O(),
      V(4, "img", 4),
      A(5, "p"),
      ne(6),
      O()()),
    t & 2)
  ) {
    let r = e.$implicit,
      i = e.$index,
      n = ue(3);
    j(2),
      ze(i ? bt(3, 3, r.ts * 1e3, "cccc") : "Today"),
      j(2),
      se("src", n.basicPathToIcons + r.weather.icon + ".png", Ln),
      j(2),
      Xt("", r.temp, "\xB0C");
  }
}
function Fg(t, e) {
  t & 1 && (A(0, "p", 3), ne(1, "No data found"), O());
}
function kg(t, e) {
  if (
    (t & 1 &&
      (A(0, "div", 1),
      Gt(1, Mg, 7, 6, "div", 2, zn, !1, Fg, 2, 0, "p", 3),
      ee(4, "async"),
      O()),
    t & 2)
  ) {
    let r,
      i = ue(2);
    se("@enterTrigger", void 0),
      j(),
      Yt((r = ae(4, 2, i.forecast$)) == null ? null : r.data);
  }
}
function Pg(t, e) {
  if (
    (t & 1 && (oe(0, Tg, 2, 0, "p"), ee(1, "async"), oe(2, kg, 5, 4)), t & 2)
  ) {
    let r = ue();
    _e(0, ae(1, 1, r.error$) ? 0 : 2);
  }
}
var Ad = (() => {
  let e = class e {
    constructor(i, n) {
      (this.store = i),
        (this.cityService = n),
        (this.basicPathToIcons = "assets/images/icons/forecast/");
    }
    ngOnInit() {
      (this.city$ = this.cityService.getCityInfo().subscribe((i) => {
        this.store.dispatch(fi({ city: i }));
      })),
        (this.forecast$ = this.store.select(Dr)),
        (this.isLoading$ = this.store.select(td)),
        (this.error$ = this.store.select(id));
    }
    ngOnDestroy() {
      this.city$.unsubscribe();
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(y(ce), y(gi));
  }),
    (e.ɵcmp = W({
      type: e,
      selectors: [["app-daily-forecast"]],
      standalone: !0,
      features: [G],
      decls: 3,
      vars: 3,
      consts: [
        ["mode", "buffer"],
        [1, "forecast_cards"],
        [1, "forecast_cards__card"],
        [1, "forecast_cards__no_data"],
        ["alt", "icon", 3, "src"],
      ],
      template: function (n, o) {
        n & 1 &&
          (oe(0, Og, 1, 0, "mat-progress-bar", 0),
          ee(1, "async"),
          oe(2, Pg, 3, 3)),
          n & 2 && _e(0, ae(1, 1, o.isLoading$) ? 0 : 2);
      },
      dependencies: [$e, Jt, kr, Fr],
      styles: [
        "[_nghost-%COMP%]{width:100%}.forecast_cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.forecast_cards__card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:space-around}.forecast_cards__card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.forecast_cards__no_data[_ngcontent-%COMP%]{font-size:40px;width:100%;text-align:center;grid-column:2}@media (min-width: 768px){.forecast_cards[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-shrink:0;justify-content:space-between}.forecast_cards__card[_ngcontent-%COMP%]{max-width:120px}}",
      ],
      data: {
        animation: [
          ei("enterTrigger", [
            xt(":enter", [
              Fe({ opacity: 0 }),
              rt("1000ms", Fe({ opacity: 1 })),
            ]),
          ]),
        ],
      },
    }));
  let t = e;
  return t;
})();
var Pr = (() => {
  let e = class e {};
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵcmp = W({
      type: e,
      selectors: [["app-common-button"]],
      inputs: { text: "text" },
      standalone: !0,
      features: [G],
      decls: 2,
      vars: 1,
      consts: [[1, "common"]],
      template: function (n, o) {
        n & 1 && (A(0, "button", 0), ne(1), O()), n & 2 && (j(), ze(o.text));
      },
      styles: [
        ".common[_ngcontent-%COMP%]{color:#fff;background-color:#000;border:0;border-radius:10px;width:94px;height:38px;font-size:20px;font-family:inherit;text-align:center;cursor:pointer;outline:none}.common[_ngcontent-%COMP%]:hover{transition:all .2s;background-color:#222;box-shadow:4px 4px 14px #bbb}.common[_ngcontent-%COMP%]:active{background-color:gray}",
      ],
    }));
  let t = e;
  return t;
})();
var Pd = (() => {
    let e = class e {
      constructor(i, n) {
        (this._renderer = i),
          (this._elementRef = n),
          (this.onChange = (o) => {}),
          (this.onTouched = () => {});
      }
      setProperty(i, n) {
        this._renderer.setProperty(this._elementRef.nativeElement, i, n);
      }
      registerOnTouched(i) {
        this.onTouched = i;
      }
      registerOnChange(i) {
        this.onChange = i;
      }
      setDisabledState(i) {
        this.setProperty("disabled", i);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(y(Vn), y(X));
    }),
      (e.ɵdir = Q({ type: e }));
    let t = e;
    return t;
  })(),
  Ng = (() => {
    let e = class e extends Pd {};
    (e.ɵfac = (() => {
      let i;
      return function (o) {
        return (i || (i = je(e)))(o || e);
      };
    })()),
      (e.ɵdir = Q({ type: e, features: [Je] }));
    let t = e;
    return t;
  })(),
  $r = new g("");
var Lg = { provide: $r, useExisting: zt(() => Hr), multi: !0 };
function jg() {
  let t = Kt() ? Kt().getUserAgent() : "";
  return /android (\d+)/.test(t.toLowerCase());
}
var Vg = new g(""),
  Hr = (() => {
    let e = class e extends Pd {
      constructor(i, n, o) {
        super(i, n),
          (this._compositionMode = o),
          (this._composing = !1),
          this._compositionMode == null && (this._compositionMode = !jg());
      }
      writeValue(i) {
        let n = i ?? "";
        this.setProperty("value", n);
      }
      _handleInput(i) {
        (!this._compositionMode ||
          (this._compositionMode && !this._composing)) &&
          this.onChange(i);
      }
      _compositionStart() {
        this._composing = !0;
      }
      _compositionEnd(i) {
        (this._composing = !1), this._compositionMode && this.onChange(i);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(y(Vn), y(X), y(Vg, 8));
    }),
      (e.ɵdir = Q({
        type: e,
        selectors: [
          ["input", "formControlName", "", 3, "type", "checkbox"],
          ["textarea", "formControlName", ""],
          ["input", "formControl", "", 3, "type", "checkbox"],
          ["textarea", "formControl", ""],
          ["input", "ngModel", "", 3, "type", "checkbox"],
          ["textarea", "ngModel", ""],
          ["", "ngDefaultControl", ""],
        ],
        hostBindings: function (n, o) {
          n & 1 &&
            de("input", function (a) {
              return o._handleInput(a.target.value);
            })("blur", function () {
              return o.onTouched();
            })("compositionstart", function () {
              return o._compositionStart();
            })("compositionend", function (a) {
              return o._compositionEnd(a.target.value);
            });
        },
        features: [Se([Lg]), Je],
      }));
    let t = e;
    return t;
  })();
var Nd = new g(""),
  Ld = new g("");
function jd(t) {
  return t != null;
}
function Vd(t) {
  return Hn(t) ? fe(t) : t;
}
function Ud(t) {
  let e = {};
  return (
    t.forEach((r) => {
      e = r != null ? f(f({}, e), r) : e;
    }),
    Object.keys(e).length === 0 ? null : e
  );
}
function Bd(t, e) {
  return e.map((r) => r(t));
}
function Ug(t) {
  return !t.validate;
}
function zd(t) {
  return t.map((e) => (Ug(e) ? e : (r) => e.validate(r)));
}
function Bg(t) {
  if (!t) return null;
  let e = t.filter(jd);
  return e.length == 0
    ? null
    : function (r) {
        return Ud(Bd(r, e));
      };
}
function na(t) {
  return t != null ? Bg(zd(t)) : null;
}
function zg(t) {
  if (!t) return null;
  let e = t.filter(jd);
  return e.length == 0
    ? null
    : function (r) {
        let i = Bd(r, e).map(Vd);
        return Ga(i).pipe(w(Ud));
      };
}
function ra(t) {
  return t != null ? zg(zd(t)) : null;
}
function Rd(t, e) {
  return t === null ? [e] : Array.isArray(t) ? [...t, e] : [t, e];
}
function $d(t) {
  return t._rawValidators;
}
function Hd(t) {
  return t._rawAsyncValidators;
}
function ia(t) {
  return t ? (Array.isArray(t) ? t : [t]) : [];
}
function Lr(t, e) {
  return Array.isArray(t) ? t.includes(e) : t === e;
}
function Od(t, e) {
  let r = ia(e);
  return (
    ia(t).forEach((n) => {
      Lr(r, n) || r.push(n);
    }),
    r
  );
}
function Td(t, e) {
  return ia(e).filter((r) => !Lr(t, r));
}
var jr = class {
    constructor() {
      (this._rawValidators = []),
        (this._rawAsyncValidators = []),
        (this._onDestroyCallbacks = []);
    }
    get value() {
      return this.control ? this.control.value : null;
    }
    get valid() {
      return this.control ? this.control.valid : null;
    }
    get invalid() {
      return this.control ? this.control.invalid : null;
    }
    get pending() {
      return this.control ? this.control.pending : null;
    }
    get disabled() {
      return this.control ? this.control.disabled : null;
    }
    get enabled() {
      return this.control ? this.control.enabled : null;
    }
    get errors() {
      return this.control ? this.control.errors : null;
    }
    get pristine() {
      return this.control ? this.control.pristine : null;
    }
    get dirty() {
      return this.control ? this.control.dirty : null;
    }
    get touched() {
      return this.control ? this.control.touched : null;
    }
    get status() {
      return this.control ? this.control.status : null;
    }
    get untouched() {
      return this.control ? this.control.untouched : null;
    }
    get statusChanges() {
      return this.control ? this.control.statusChanges : null;
    }
    get valueChanges() {
      return this.control ? this.control.valueChanges : null;
    }
    get path() {
      return null;
    }
    _setValidators(e) {
      (this._rawValidators = e || []),
        (this._composedValidatorFn = na(this._rawValidators));
    }
    _setAsyncValidators(e) {
      (this._rawAsyncValidators = e || []),
        (this._composedAsyncValidatorFn = ra(this._rawAsyncValidators));
    }
    get validator() {
      return this._composedValidatorFn || null;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn || null;
    }
    _registerOnDestroy(e) {
      this._onDestroyCallbacks.push(e);
    }
    _invokeOnDestroyCallbacks() {
      this._onDestroyCallbacks.forEach((e) => e()),
        (this._onDestroyCallbacks = []);
    }
    reset(e = void 0) {
      this.control && this.control.reset(e);
    }
    hasError(e, r) {
      return this.control ? this.control.hasError(e, r) : !1;
    }
    getError(e, r) {
      return this.control ? this.control.getError(e, r) : null;
    }
  },
  En = class extends jr {
    get formDirective() {
      return null;
    }
    get path() {
      return null;
    }
  },
  Sn = class extends jr {
    constructor() {
      super(...arguments),
        (this._parent = null),
        (this.name = null),
        (this.valueAccessor = null);
    }
  },
  Vr = class {
    constructor(e) {
      this._cd = e;
    }
    get isTouched() {
      return !!this._cd?.control?.touched;
    }
    get isUntouched() {
      return !!this._cd?.control?.untouched;
    }
    get isPristine() {
      return !!this._cd?.control?.pristine;
    }
    get isDirty() {
      return !!this._cd?.control?.dirty;
    }
    get isValid() {
      return !!this._cd?.control?.valid;
    }
    get isInvalid() {
      return !!this._cd?.control?.invalid;
    }
    get isPending() {
      return !!this._cd?.control?.pending;
    }
    get isSubmitted() {
      return !!this._cd?.submitted;
    }
  },
  $g = {
    "[class.ng-untouched]": "isUntouched",
    "[class.ng-touched]": "isTouched",
    "[class.ng-pristine]": "isPristine",
    "[class.ng-dirty]": "isDirty",
    "[class.ng-valid]": "isValid",
    "[class.ng-invalid]": "isInvalid",
    "[class.ng-pending]": "isPending",
  },
  fx = E(f({}, $g), { "[class.ng-submitted]": "isSubmitted" }),
  Wd = (() => {
    let e = class e extends Vr {
      constructor(i) {
        super(i);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(y(Sn, 2));
    }),
      (e.ɵdir = Q({
        type: e,
        selectors: [
          ["", "formControlName", ""],
          ["", "ngModel", ""],
          ["", "formControl", ""],
        ],
        hostVars: 14,
        hostBindings: function (n, o) {
          n & 2 &&
            Me("ng-untouched", o.isUntouched)("ng-touched", o.isTouched)(
              "ng-pristine",
              o.isPristine,
            )("ng-dirty", o.isDirty)("ng-valid", o.isValid)(
              "ng-invalid",
              o.isInvalid,
            )("ng-pending", o.isPending);
        },
        features: [Je],
      }));
    let t = e;
    return t;
  })(),
  Gd = (() => {
    let e = class e extends Vr {
      constructor(i) {
        super(i);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(y(En, 10));
    }),
      (e.ɵdir = Q({
        type: e,
        selectors: [
          ["", "formGroupName", ""],
          ["", "formArrayName", ""],
          ["", "ngModelGroup", ""],
          ["", "formGroup", ""],
          ["form", 3, "ngNoForm", ""],
          ["", "ngForm", ""],
        ],
        hostVars: 16,
        hostBindings: function (n, o) {
          n & 2 &&
            Me("ng-untouched", o.isUntouched)("ng-touched", o.isTouched)(
              "ng-pristine",
              o.isPristine,
            )("ng-dirty", o.isDirty)("ng-valid", o.isValid)(
              "ng-invalid",
              o.isInvalid,
            )("ng-pending", o.isPending)("ng-submitted", o.isSubmitted);
        },
        features: [Je],
      }));
    let t = e;
    return t;
  })();
var xn = "VALID",
  Nr = "INVALID",
  vi = "PENDING",
  wn = "DISABLED";
function Yd(t) {
  return (Wr(t) ? t.validators : t) || null;
}
function Hg(t) {
  return Array.isArray(t) ? na(t) : t || null;
}
function qd(t, e) {
  return (Wr(e) ? e.asyncValidators : t) || null;
}
function Wg(t) {
  return Array.isArray(t) ? ra(t) : t || null;
}
function Wr(t) {
  return t != null && !Array.isArray(t) && typeof t == "object";
}
function Gg(t, e, r) {
  let i = t.controls;
  if (!(e ? Object.keys(i) : i).length) throw new H(1e3, "");
  if (!i[r]) throw new H(1001, "");
}
function Yg(t, e, r) {
  t._forEachChild((i, n) => {
    if (r[n] === void 0) throw new H(1002, "");
  });
}
var Ur = class {
    constructor(e, r) {
      (this._pendingDirty = !1),
        (this._hasOwnPendingAsyncValidator = !1),
        (this._pendingTouched = !1),
        (this._onCollectionChange = () => {}),
        (this._parent = null),
        (this.pristine = !0),
        (this.touched = !1),
        (this._onDisabledChange = []),
        this._assignValidators(e),
        this._assignAsyncValidators(r);
    }
    get validator() {
      return this._composedValidatorFn;
    }
    set validator(e) {
      this._rawValidators = this._composedValidatorFn = e;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn;
    }
    set asyncValidator(e) {
      this._rawAsyncValidators = this._composedAsyncValidatorFn = e;
    }
    get parent() {
      return this._parent;
    }
    get valid() {
      return this.status === xn;
    }
    get invalid() {
      return this.status === Nr;
    }
    get pending() {
      return this.status == vi;
    }
    get disabled() {
      return this.status === wn;
    }
    get enabled() {
      return this.status !== wn;
    }
    get dirty() {
      return !this.pristine;
    }
    get untouched() {
      return !this.touched;
    }
    get updateOn() {
      return this._updateOn
        ? this._updateOn
        : this.parent
          ? this.parent.updateOn
          : "change";
    }
    setValidators(e) {
      this._assignValidators(e);
    }
    setAsyncValidators(e) {
      this._assignAsyncValidators(e);
    }
    addValidators(e) {
      this.setValidators(Od(e, this._rawValidators));
    }
    addAsyncValidators(e) {
      this.setAsyncValidators(Od(e, this._rawAsyncValidators));
    }
    removeValidators(e) {
      this.setValidators(Td(e, this._rawValidators));
    }
    removeAsyncValidators(e) {
      this.setAsyncValidators(Td(e, this._rawAsyncValidators));
    }
    hasValidator(e) {
      return Lr(this._rawValidators, e);
    }
    hasAsyncValidator(e) {
      return Lr(this._rawAsyncValidators, e);
    }
    clearValidators() {
      this.validator = null;
    }
    clearAsyncValidators() {
      this.asyncValidator = null;
    }
    markAsTouched(e = {}) {
      (this.touched = !0),
        this._parent && !e.onlySelf && this._parent.markAsTouched(e);
    }
    markAllAsTouched() {
      this.markAsTouched({ onlySelf: !0 }),
        this._forEachChild((e) => e.markAllAsTouched());
    }
    markAsUntouched(e = {}) {
      (this.touched = !1),
        (this._pendingTouched = !1),
        this._forEachChild((r) => {
          r.markAsUntouched({ onlySelf: !0 });
        }),
        this._parent && !e.onlySelf && this._parent._updateTouched(e);
    }
    markAsDirty(e = {}) {
      (this.pristine = !1),
        this._parent && !e.onlySelf && this._parent.markAsDirty(e);
    }
    markAsPristine(e = {}) {
      (this.pristine = !0),
        (this._pendingDirty = !1),
        this._forEachChild((r) => {
          r.markAsPristine({ onlySelf: !0 });
        }),
        this._parent && !e.onlySelf && this._parent._updatePristine(e);
    }
    markAsPending(e = {}) {
      (this.status = vi),
        e.emitEvent !== !1 && this.statusChanges.emit(this.status),
        this._parent && !e.onlySelf && this._parent.markAsPending(e);
    }
    disable(e = {}) {
      let r = this._parentMarkedDirty(e.onlySelf);
      (this.status = wn),
        (this.errors = null),
        this._forEachChild((i) => {
          i.disable(E(f({}, e), { onlySelf: !0 }));
        }),
        this._updateValue(),
        e.emitEvent !== !1 &&
          (this.valueChanges.emit(this.value),
          this.statusChanges.emit(this.status)),
        this._updateAncestors(E(f({}, e), { skipPristineCheck: r })),
        this._onDisabledChange.forEach((i) => i(!0));
    }
    enable(e = {}) {
      let r = this._parentMarkedDirty(e.onlySelf);
      (this.status = xn),
        this._forEachChild((i) => {
          i.enable(E(f({}, e), { onlySelf: !0 }));
        }),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: e.emitEvent }),
        this._updateAncestors(E(f({}, e), { skipPristineCheck: r })),
        this._onDisabledChange.forEach((i) => i(!1));
    }
    _updateAncestors(e) {
      this._parent &&
        !e.onlySelf &&
        (this._parent.updateValueAndValidity(e),
        e.skipPristineCheck || this._parent._updatePristine(),
        this._parent._updateTouched());
    }
    setParent(e) {
      this._parent = e;
    }
    getRawValue() {
      return this.value;
    }
    updateValueAndValidity(e = {}) {
      this._setInitialStatus(),
        this._updateValue(),
        this.enabled &&
          (this._cancelExistingSubscription(),
          (this.errors = this._runValidator()),
          (this.status = this._calculateStatus()),
          (this.status === xn || this.status === vi) &&
            this._runAsyncValidator(e.emitEvent)),
        e.emitEvent !== !1 &&
          (this.valueChanges.emit(this.value),
          this.statusChanges.emit(this.status)),
        this._parent && !e.onlySelf && this._parent.updateValueAndValidity(e);
    }
    _updateTreeValidity(e = { emitEvent: !0 }) {
      this._forEachChild((r) => r._updateTreeValidity(e)),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: e.emitEvent });
    }
    _setInitialStatus() {
      this.status = this._allControlsDisabled() ? wn : xn;
    }
    _runValidator() {
      return this.validator ? this.validator(this) : null;
    }
    _runAsyncValidator(e) {
      if (this.asyncValidator) {
        (this.status = vi), (this._hasOwnPendingAsyncValidator = !0);
        let r = Vd(this.asyncValidator(this));
        this._asyncValidationSubscription = r.subscribe((i) => {
          (this._hasOwnPendingAsyncValidator = !1),
            this.setErrors(i, { emitEvent: e });
        });
      }
    }
    _cancelExistingSubscription() {
      this._asyncValidationSubscription &&
        (this._asyncValidationSubscription.unsubscribe(),
        (this._hasOwnPendingAsyncValidator = !1));
    }
    setErrors(e, r = {}) {
      (this.errors = e), this._updateControlsErrors(r.emitEvent !== !1);
    }
    get(e) {
      let r = e;
      return r == null ||
        (Array.isArray(r) || (r = r.split(".")), r.length === 0)
        ? null
        : r.reduce((i, n) => i && i._find(n), this);
    }
    getError(e, r) {
      let i = r ? this.get(r) : this;
      return i && i.errors ? i.errors[e] : null;
    }
    hasError(e, r) {
      return !!this.getError(e, r);
    }
    get root() {
      let e = this;
      for (; e._parent; ) e = e._parent;
      return e;
    }
    _updateControlsErrors(e) {
      (this.status = this._calculateStatus()),
        e && this.statusChanges.emit(this.status),
        this._parent && this._parent._updateControlsErrors(e);
    }
    _initObservables() {
      (this.valueChanges = new Y()), (this.statusChanges = new Y());
    }
    _calculateStatus() {
      return this._allControlsDisabled()
        ? wn
        : this.errors
          ? Nr
          : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(vi)
            ? vi
            : this._anyControlsHaveStatus(Nr)
              ? Nr
              : xn;
    }
    _anyControlsHaveStatus(e) {
      return this._anyControls((r) => r.status === e);
    }
    _anyControlsDirty() {
      return this._anyControls((e) => e.dirty);
    }
    _anyControlsTouched() {
      return this._anyControls((e) => e.touched);
    }
    _updatePristine(e = {}) {
      (this.pristine = !this._anyControlsDirty()),
        this._parent && !e.onlySelf && this._parent._updatePristine(e);
    }
    _updateTouched(e = {}) {
      (this.touched = this._anyControlsTouched()),
        this._parent && !e.onlySelf && this._parent._updateTouched(e);
    }
    _registerOnCollectionChange(e) {
      this._onCollectionChange = e;
    }
    _setUpdateStrategy(e) {
      Wr(e) && e.updateOn != null && (this._updateOn = e.updateOn);
    }
    _parentMarkedDirty(e) {
      let r = this._parent && this._parent.dirty;
      return !e && !!r && !this._parent._anyControlsDirty();
    }
    _find(e) {
      return null;
    }
    _assignValidators(e) {
      (this._rawValidators = Array.isArray(e) ? e.slice() : e),
        (this._composedValidatorFn = Hg(this._rawValidators));
    }
    _assignAsyncValidators(e) {
      (this._rawAsyncValidators = Array.isArray(e) ? e.slice() : e),
        (this._composedAsyncValidatorFn = Wg(this._rawAsyncValidators));
    }
  },
  Br = class extends Ur {
    constructor(e, r, i) {
      super(Yd(r), qd(i, r)),
        (this.controls = e),
        this._initObservables(),
        this._setUpdateStrategy(r),
        this._setUpControls(),
        this.updateValueAndValidity({
          onlySelf: !0,
          emitEvent: !!this.asyncValidator,
        });
    }
    registerControl(e, r) {
      return this.controls[e]
        ? this.controls[e]
        : ((this.controls[e] = r),
          r.setParent(this),
          r._registerOnCollectionChange(this._onCollectionChange),
          r);
    }
    addControl(e, r, i = {}) {
      this.registerControl(e, r),
        this.updateValueAndValidity({ emitEvent: i.emitEvent }),
        this._onCollectionChange();
    }
    removeControl(e, r = {}) {
      this.controls[e] &&
        this.controls[e]._registerOnCollectionChange(() => {}),
        delete this.controls[e],
        this.updateValueAndValidity({ emitEvent: r.emitEvent }),
        this._onCollectionChange();
    }
    setControl(e, r, i = {}) {
      this.controls[e] &&
        this.controls[e]._registerOnCollectionChange(() => {}),
        delete this.controls[e],
        r && this.registerControl(e, r),
        this.updateValueAndValidity({ emitEvent: i.emitEvent }),
        this._onCollectionChange();
    }
    contains(e) {
      return this.controls.hasOwnProperty(e) && this.controls[e].enabled;
    }
    setValue(e, r = {}) {
      Yg(this, !0, e),
        Object.keys(e).forEach((i) => {
          Gg(this, !0, i),
            this.controls[i].setValue(e[i], {
              onlySelf: !0,
              emitEvent: r.emitEvent,
            });
        }),
        this.updateValueAndValidity(r);
    }
    patchValue(e, r = {}) {
      e != null &&
        (Object.keys(e).forEach((i) => {
          let n = this.controls[i];
          n && n.patchValue(e[i], { onlySelf: !0, emitEvent: r.emitEvent });
        }),
        this.updateValueAndValidity(r));
    }
    reset(e = {}, r = {}) {
      this._forEachChild((i, n) => {
        i.reset(e ? e[n] : null, { onlySelf: !0, emitEvent: r.emitEvent });
      }),
        this._updatePristine(r),
        this._updateTouched(r),
        this.updateValueAndValidity(r);
    }
    getRawValue() {
      return this._reduceChildren(
        {},
        (e, r, i) => ((e[i] = r.getRawValue()), e),
      );
    }
    _syncPendingControls() {
      let e = this._reduceChildren(!1, (r, i) =>
        i._syncPendingControls() ? !0 : r,
      );
      return e && this.updateValueAndValidity({ onlySelf: !0 }), e;
    }
    _forEachChild(e) {
      Object.keys(this.controls).forEach((r) => {
        let i = this.controls[r];
        i && e(i, r);
      });
    }
    _setUpControls() {
      this._forEachChild((e) => {
        e.setParent(this),
          e._registerOnCollectionChange(this._onCollectionChange);
      });
    }
    _updateValue() {
      this.value = this._reduceValue();
    }
    _anyControls(e) {
      for (let [r, i] of Object.entries(this.controls))
        if (this.contains(r) && e(i)) return !0;
      return !1;
    }
    _reduceValue() {
      let e = {};
      return this._reduceChildren(
        e,
        (r, i, n) => ((i.enabled || this.disabled) && (r[n] = i.value), r),
      );
    }
    _reduceChildren(e, r) {
      let i = e;
      return (
        this._forEachChild((n, o) => {
          i = r(i, n, o);
        }),
        i
      );
    }
    _allControlsDisabled() {
      for (let e of Object.keys(this.controls))
        if (this.controls[e].enabled) return !1;
      return Object.keys(this.controls).length > 0 || this.disabled;
    }
    _find(e) {
      return this.controls.hasOwnProperty(e) ? this.controls[e] : null;
    }
  };
var Gr = new g("CallSetDisabledState", {
    providedIn: "root",
    factory: () => Yr,
  }),
  Yr = "always";
function Xd(t, e, r = Yr) {
  Zd(t, e),
    e.valueAccessor.writeValue(t.value),
    (t.disabled || r === "always") &&
      e.valueAccessor.setDisabledState?.(t.disabled),
    Zg(t, e),
    Qg(t, e),
    Kg(t, e),
    qg(t, e);
}
function Md(t, e, r = !0) {
  let i = () => {};
  e.valueAccessor &&
    (e.valueAccessor.registerOnChange(i), e.valueAccessor.registerOnTouched(i)),
    Xg(t, e),
    t &&
      (e._invokeOnDestroyCallbacks(), t._registerOnCollectionChange(() => {}));
}
function zr(t, e) {
  t.forEach((r) => {
    r.registerOnValidatorChange && r.registerOnValidatorChange(e);
  });
}
function qg(t, e) {
  if (e.valueAccessor.setDisabledState) {
    let r = (i) => {
      e.valueAccessor.setDisabledState(i);
    };
    t.registerOnDisabledChange(r),
      e._registerOnDestroy(() => {
        t._unregisterOnDisabledChange(r);
      });
  }
}
function Zd(t, e) {
  let r = $d(t);
  e.validator !== null
    ? t.setValidators(Rd(r, e.validator))
    : typeof r == "function" && t.setValidators([r]);
  let i = Hd(t);
  e.asyncValidator !== null
    ? t.setAsyncValidators(Rd(i, e.asyncValidator))
    : typeof i == "function" && t.setAsyncValidators([i]);
  let n = () => t.updateValueAndValidity();
  zr(e._rawValidators, n), zr(e._rawAsyncValidators, n);
}
function Xg(t, e) {
  let r = !1;
  if (t !== null) {
    if (e.validator !== null) {
      let n = $d(t);
      if (Array.isArray(n) && n.length > 0) {
        let o = n.filter((s) => s !== e.validator);
        o.length !== n.length && ((r = !0), t.setValidators(o));
      }
    }
    if (e.asyncValidator !== null) {
      let n = Hd(t);
      if (Array.isArray(n) && n.length > 0) {
        let o = n.filter((s) => s !== e.asyncValidator);
        o.length !== n.length && ((r = !0), t.setAsyncValidators(o));
      }
    }
  }
  let i = () => {};
  return zr(e._rawValidators, i), zr(e._rawAsyncValidators, i), r;
}
function Zg(t, e) {
  e.valueAccessor.registerOnChange((r) => {
    (t._pendingValue = r),
      (t._pendingChange = !0),
      (t._pendingDirty = !0),
      t.updateOn === "change" && Kd(t, e);
  });
}
function Kg(t, e) {
  e.valueAccessor.registerOnTouched(() => {
    (t._pendingTouched = !0),
      t.updateOn === "blur" && t._pendingChange && Kd(t, e),
      t.updateOn !== "submit" && t.markAsTouched();
  });
}
function Kd(t, e) {
  t._pendingDirty && t.markAsDirty(),
    t.setValue(t._pendingValue, { emitModelToViewChange: !1 }),
    e.viewToModelUpdate(t._pendingValue),
    (t._pendingChange = !1);
}
function Qg(t, e) {
  let r = (i, n) => {
    e.valueAccessor.writeValue(i), n && e.viewToModelUpdate(i);
  };
  t.registerOnChange(r),
    e._registerOnDestroy(() => {
      t._unregisterOnChange(r);
    });
}
function Jg(t, e) {
  t == null, Zd(t, e);
}
function ev(t, e) {
  if (!t.hasOwnProperty("model")) return !1;
  let r = t.model;
  return r.isFirstChange() ? !0 : !Object.is(e, r.currentValue);
}
function tv(t) {
  return Object.getPrototypeOf(t.constructor) === Ng;
}
function iv(t, e) {
  t._syncPendingControls(),
    e.forEach((r) => {
      let i = r.control;
      i.updateOn === "submit" &&
        i._pendingChange &&
        (r.viewToModelUpdate(i._pendingValue), (i._pendingChange = !1));
    });
}
function nv(t, e) {
  if (!e) return null;
  Array.isArray(e);
  let r, i, n;
  return (
    e.forEach((o) => {
      o.constructor === Hr ? (r = o) : tv(o) ? (i = o) : (n = o);
    }),
    n || i || r || null
  );
}
var rv = { provide: En, useExisting: zt(() => oa) },
  Cn = Promise.resolve(),
  oa = (() => {
    let e = class e extends En {
      constructor(i, n, o) {
        super(),
          (this.callSetDisabledState = o),
          (this.submitted = !1),
          (this._directives = new Set()),
          (this.ngSubmit = new Y()),
          (this.form = new Br({}, na(i), ra(n)));
      }
      ngAfterViewInit() {
        this._setUpdateStrategy();
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return [];
      }
      get controls() {
        return this.form.controls;
      }
      addControl(i) {
        Cn.then(() => {
          let n = this._findContainer(i.path);
          (i.control = n.registerControl(i.name, i.control)),
            Xd(i.control, i, this.callSetDisabledState),
            i.control.updateValueAndValidity({ emitEvent: !1 }),
            this._directives.add(i);
        });
      }
      getControl(i) {
        return this.form.get(i.path);
      }
      removeControl(i) {
        Cn.then(() => {
          let n = this._findContainer(i.path);
          n && n.removeControl(i.name), this._directives.delete(i);
        });
      }
      addFormGroup(i) {
        Cn.then(() => {
          let n = this._findContainer(i.path),
            o = new Br({});
          Jg(o, i),
            n.registerControl(i.name, o),
            o.updateValueAndValidity({ emitEvent: !1 });
        });
      }
      removeFormGroup(i) {
        Cn.then(() => {
          let n = this._findContainer(i.path);
          n && n.removeControl(i.name);
        });
      }
      getFormGroup(i) {
        return this.form.get(i.path);
      }
      updateModel(i, n) {
        Cn.then(() => {
          this.form.get(i.path).setValue(n);
        });
      }
      setValue(i) {
        this.control.setValue(i);
      }
      onSubmit(i) {
        return (
          (this.submitted = !0),
          iv(this.form, this._directives),
          this.ngSubmit.emit(i),
          i?.target?.method === "dialog"
        );
      }
      onReset() {
        this.resetForm();
      }
      resetForm(i = void 0) {
        this.form.reset(i), (this.submitted = !1);
      }
      _setUpdateStrategy() {
        this.options &&
          this.options.updateOn != null &&
          (this.form._updateOn = this.options.updateOn);
      }
      _findContainer(i) {
        return i.pop(), i.length ? this.form.get(i) : this.form;
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(y(Nd, 10), y(Ld, 10), y(Gr, 8));
    }),
      (e.ɵdir = Q({
        type: e,
        selectors: [
          ["form", 3, "ngNoForm", "", 3, "formGroup", ""],
          ["ng-form"],
          ["", "ngForm", ""],
        ],
        hostBindings: function (n, o) {
          n & 1 &&
            de("submit", function (a) {
              return o.onSubmit(a);
            })("reset", function () {
              return o.onReset();
            });
        },
        inputs: { options: [T.None, "ngFormOptions", "options"] },
        outputs: { ngSubmit: "ngSubmit" },
        exportAs: ["ngForm"],
        features: [Se([rv]), Je],
      }));
    let t = e;
    return t;
  })();
function Fd(t, e) {
  let r = t.indexOf(e);
  r > -1 && t.splice(r, 1);
}
function kd(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    Object.keys(t).length === 2 &&
    "value" in t &&
    "disabled" in t
  );
}
var Qd = class extends Ur {
  constructor(e = null, r, i) {
    super(Yd(r), qd(i, r)),
      (this.defaultValue = null),
      (this._onChange = []),
      (this._pendingChange = !1),
      this._applyFormState(e),
      this._setUpdateStrategy(r),
      this._initObservables(),
      this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !!this.asyncValidator,
      }),
      Wr(r) &&
        (r.nonNullable || r.initialValueIsDefault) &&
        (kd(e) ? (this.defaultValue = e.value) : (this.defaultValue = e));
  }
  setValue(e, r = {}) {
    (this.value = this._pendingValue = e),
      this._onChange.length &&
        r.emitModelToViewChange !== !1 &&
        this._onChange.forEach((i) =>
          i(this.value, r.emitViewToModelChange !== !1),
        ),
      this.updateValueAndValidity(r);
  }
  patchValue(e, r = {}) {
    this.setValue(e, r);
  }
  reset(e = this.defaultValue, r = {}) {
    this._applyFormState(e),
      this.markAsPristine(r),
      this.markAsUntouched(r),
      this.setValue(this.value, r),
      (this._pendingChange = !1);
  }
  _updateValue() {}
  _anyControls(e) {
    return !1;
  }
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(e) {
    this._onChange.push(e);
  }
  _unregisterOnChange(e) {
    Fd(this._onChange, e);
  }
  registerOnDisabledChange(e) {
    this._onDisabledChange.push(e);
  }
  _unregisterOnDisabledChange(e) {
    Fd(this._onDisabledChange, e);
  }
  _forEachChild(e) {}
  _syncPendingControls() {
    return this.updateOn === "submit" &&
      (this._pendingDirty && this.markAsDirty(),
      this._pendingTouched && this.markAsTouched(),
      this._pendingChange)
      ? (this.setValue(this._pendingValue, {
          onlySelf: !0,
          emitModelToViewChange: !1,
        }),
        !0)
      : !1;
  }
  _applyFormState(e) {
    kd(e)
      ? ((this.value = this._pendingValue = e.value),
        e.disabled
          ? this.disable({ onlySelf: !0, emitEvent: !1 })
          : this.enable({ onlySelf: !0, emitEvent: !1 }))
      : (this.value = this._pendingValue = e);
  }
};
var Jd = (() => {
  let e = class e {};
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵdir = Q({
      type: e,
      selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
      hostAttrs: ["novalidate", ""],
    }));
  let t = e;
  return t;
})();
var eu = new g(""),
  ov = { provide: Sn, useExisting: zt(() => sa) },
  sa = (() => {
    let e = class e extends Sn {
      set isDisabled(i) {}
      constructor(i, n, o, s, a) {
        super(),
          (this._ngModelWarningConfig = s),
          (this.callSetDisabledState = a),
          (this.update = new Y()),
          (this._ngModelWarningSent = !1),
          this._setValidators(i),
          this._setAsyncValidators(n),
          (this.valueAccessor = nv(this, o));
      }
      ngOnChanges(i) {
        if (this._isControlChanged(i)) {
          let n = i.form.previousValue;
          n && Md(n, this, !1),
            Xd(this.form, this, this.callSetDisabledState),
            this.form.updateValueAndValidity({ emitEvent: !1 });
        }
        ev(i, this.viewModel) &&
          (this.form.setValue(this.model), (this.viewModel = this.model));
      }
      ngOnDestroy() {
        this.form && Md(this.form, this, !1);
      }
      get path() {
        return [];
      }
      get control() {
        return this.form;
      }
      viewToModelUpdate(i) {
        (this.viewModel = i), this.update.emit(i);
      }
      _isControlChanged(i) {
        return i.hasOwnProperty("form");
      }
    };
    (e._ngModelWarningSentOnce = !1),
      (e.ɵfac = function (n) {
        return new (n || e)(
          y(Nd, 10),
          y(Ld, 10),
          y($r, 10),
          y(eu, 8),
          y(Gr, 8),
        );
      }),
      (e.ɵdir = Q({
        type: e,
        selectors: [["", "formControl", ""]],
        inputs: {
          form: [T.None, "formControl", "form"],
          isDisabled: [T.None, "disabled", "isDisabled"],
          model: [T.None, "ngModel", "model"],
        },
        outputs: { update: "ngModelChange" },
        exportAs: ["ngForm"],
        features: [Se([ov]), Je, Ke],
      }));
    let t = e;
    return t;
  })();
var tu = (() => {
  let e = class e {};
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵmod = k({ type: e })),
    (e.ɵinj = F({}));
  let t = e;
  return t;
})();
var iu = (() => {
    let e = class e {
      static withConfig(i) {
        return {
          ngModule: e,
          providers: [{ provide: Gr, useValue: i.callSetDisabledState ?? Yr }],
        };
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵmod = k({ type: e })),
      (e.ɵinj = F({ imports: [tu] }));
    let t = e;
    return t;
  })(),
  nu = (() => {
    let e = class e {
      static withConfig(i) {
        return {
          ngModule: e,
          providers: [
            {
              provide: eu,
              useValue: i.warnOnNgModelWithFormControl ?? "always",
            },
            { provide: Gr, useValue: i.callSetDisabledState ?? Yr },
          ],
        };
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵmod = k({ type: e })),
      (e.ɵinj = F({ imports: [tu] }));
    let t = e;
    return t;
  })();
var av = 20,
  ru = (() => {
    let e = class e {
      constructor(i, n, o) {
        (this._ngZone = i),
          (this._platform = n),
          (this._scrolled = new L()),
          (this._globalSubscription = null),
          (this._scrolledCount = 0),
          (this.scrollContainers = new Map()),
          (this._document = o);
      }
      register(i) {
        this.scrollContainers.has(i) ||
          this.scrollContainers.set(
            i,
            i.elementScrolled().subscribe(() => this._scrolled.next(i)),
          );
      }
      deregister(i) {
        let n = this.scrollContainers.get(i);
        n && (n.unsubscribe(), this.scrollContainers.delete(i));
      }
      scrolled(i = av) {
        return this._platform.isBrowser
          ? new re((n) => {
              this._globalSubscription || this._addGlobalListener();
              let o =
                i > 0
                  ? this._scrolled.pipe(co(i)).subscribe(n)
                  : this._scrolled.subscribe(n);
              return (
                this._scrolledCount++,
                () => {
                  o.unsubscribe(),
                    this._scrolledCount--,
                    this._scrolledCount || this._removeGlobalListener();
                }
              );
            })
          : C();
      }
      ngOnDestroy() {
        this._removeGlobalListener(),
          this.scrollContainers.forEach((i, n) => this.deregister(n)),
          this._scrolled.complete();
      }
      ancestorScrolled(i, n) {
        let o = this.getAncestorScrollContainers(i);
        return this.scrolled(n).pipe(z((s) => !s || o.indexOf(s) > -1));
      }
      getAncestorScrollContainers(i) {
        let n = [];
        return (
          this.scrollContainers.forEach((o, s) => {
            this._scrollableContainsElement(s, i) && n.push(s);
          }),
          n
        );
      }
      _getWindow() {
        return this._document.defaultView || window;
      }
      _scrollableContainsElement(i, n) {
        let o = _n(n),
          s = i.getElementRef().nativeElement;
        do if (o == s) return !0;
        while ((o = o.parentElement));
        return !1;
      }
      _addGlobalListener() {
        this._globalSubscription = this._ngZone.runOutsideAngular(() => {
          let i = this._getWindow();
          return Lt(i.document, "scroll").subscribe(() =>
            this._scrolled.next(),
          );
        });
      }
      _removeGlobalListener() {
        this._globalSubscription &&
          (this._globalSubscription.unsubscribe(),
          (this._globalSubscription = null));
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(M), h(he), h(N, 8));
    }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })();
var lv = 20,
  In = (() => {
    let e = class e {
      constructor(i, n, o) {
        (this._platform = i),
          (this._change = new L()),
          (this._changeListener = (s) => {
            this._change.next(s);
          }),
          (this._document = o),
          n.runOutsideAngular(() => {
            if (i.isBrowser) {
              let s = this._getWindow();
              s.addEventListener("resize", this._changeListener),
                s.addEventListener("orientationchange", this._changeListener);
            }
            this.change().subscribe(() => (this._viewportSize = null));
          });
      }
      ngOnDestroy() {
        if (this._platform.isBrowser) {
          let i = this._getWindow();
          i.removeEventListener("resize", this._changeListener),
            i.removeEventListener("orientationchange", this._changeListener);
        }
        this._change.complete();
      }
      getViewportSize() {
        this._viewportSize || this._updateViewportSize();
        let i = {
          width: this._viewportSize.width,
          height: this._viewportSize.height,
        };
        return this._platform.isBrowser || (this._viewportSize = null), i;
      }
      getViewportRect() {
        let i = this.getViewportScrollPosition(),
          { width: n, height: o } = this.getViewportSize();
        return {
          top: i.top,
          left: i.left,
          bottom: i.top + o,
          right: i.left + n,
          height: o,
          width: n,
        };
      }
      getViewportScrollPosition() {
        if (!this._platform.isBrowser) return { top: 0, left: 0 };
        let i = this._document,
          n = this._getWindow(),
          o = i.documentElement,
          s = o.getBoundingClientRect(),
          a = -s.top || i.body.scrollTop || n.scrollY || o.scrollTop || 0,
          c = -s.left || i.body.scrollLeft || n.scrollX || o.scrollLeft || 0;
        return { top: a, left: c };
      }
      change(i = lv) {
        return i > 0 ? this._change.pipe(co(i)) : this._change;
      }
      _getWindow() {
        return this._document.defaultView || window;
      }
      _updateViewportSize() {
        let i = this._getWindow();
        this._viewportSize = this._platform.isBrowser
          ? { width: i.innerWidth, height: i.innerHeight }
          : { width: 0, height: 0 };
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(he), h(M), h(N, 8));
    }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })();
var qr = (() => {
    let e = class e {};
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵmod = k({ type: e })),
      (e.ɵinj = F({}));
    let t = e;
    return t;
  })(),
  aa = (() => {
    let e = class e {};
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵmod = k({ type: e })),
      (e.ɵinj = F({ imports: [ut, qr, ut, qr] }));
    let t = e;
    return t;
  })();
var Dn = class {
    attach(e) {
      return (this._attachedHost = e), e.attach(this);
    }
    detach() {
      let e = this._attachedHost;
      e != null && ((this._attachedHost = null), e.detach());
    }
    get isAttached() {
      return this._attachedHost != null;
    }
    setAttachedHost(e) {
      this._attachedHost = e;
    }
  },
  la = class extends Dn {
    constructor(e, r, i, n, o) {
      super(),
        (this.component = e),
        (this.viewContainerRef = r),
        (this.injector = i),
        (this.componentFactoryResolver = n),
        (this.projectableNodes = o);
    }
  },
  _i = class extends Dn {
    constructor(e, r, i, n) {
      super(),
        (this.templateRef = e),
        (this.viewContainerRef = r),
        (this.context = i),
        (this.injector = n);
    }
    get origin() {
      return this.templateRef.elementRef;
    }
    attach(e, r = this.context) {
      return (this.context = r), super.attach(e);
    }
    detach() {
      return (this.context = void 0), super.detach();
    }
  },
  ca = class extends Dn {
    constructor(e) {
      super(), (this.element = e instanceof X ? e.nativeElement : e);
    }
  },
  da = class {
    constructor() {
      (this._isDisposed = !1), (this.attachDomPortal = null);
    }
    hasAttached() {
      return !!this._attachedPortal;
    }
    attach(e) {
      if (e instanceof la)
        return (this._attachedPortal = e), this.attachComponentPortal(e);
      if (e instanceof _i)
        return (this._attachedPortal = e), this.attachTemplatePortal(e);
      if (this.attachDomPortal && e instanceof ca)
        return (this._attachedPortal = e), this.attachDomPortal(e);
    }
    detach() {
      this._attachedPortal &&
        (this._attachedPortal.setAttachedHost(null),
        (this._attachedPortal = null)),
        this._invokeDisposeFn();
    }
    dispose() {
      this.hasAttached() && this.detach(),
        this._invokeDisposeFn(),
        (this._isDisposed = !0);
    }
    setDisposeFn(e) {
      this._disposeFn = e;
    }
    _invokeDisposeFn() {
      this._disposeFn && (this._disposeFn(), (this._disposeFn = null));
    }
  };
var Xr = class extends da {
  constructor(e, r, i, n, o) {
    super(),
      (this.outletElement = e),
      (this._componentFactoryResolver = r),
      (this._appRef = i),
      (this._defaultInjector = n),
      (this.attachDomPortal = (s) => {
        this._document;
        let a = s.element;
        a.parentNode;
        let c = this._document.createComment("dom-portal");
        a.parentNode.insertBefore(c, a),
          this.outletElement.appendChild(a),
          (this._attachedPortal = s),
          super.setDisposeFn(() => {
            c.parentNode && c.parentNode.replaceChild(a, c);
          });
      }),
      (this._document = o);
  }
  attachComponentPortal(e) {
    let i = (
        e.componentFactoryResolver || this._componentFactoryResolver
      ).resolveComponentFactory(e.component),
      n;
    return (
      e.viewContainerRef
        ? ((n = e.viewContainerRef.createComponent(
            i,
            e.viewContainerRef.length,
            e.injector || e.viewContainerRef.injector,
            e.projectableNodes || void 0,
          )),
          this.setDisposeFn(() => n.destroy()))
        : ((n = i.create(e.injector || this._defaultInjector || nt.NULL)),
          this._appRef.attachView(n.hostView),
          this.setDisposeFn(() => {
            this._appRef.viewCount > 0 && this._appRef.detachView(n.hostView),
              n.destroy();
          })),
      this.outletElement.appendChild(this._getComponentRootNode(n)),
      (this._attachedPortal = e),
      n
    );
  }
  attachTemplatePortal(e) {
    let r = e.viewContainerRef,
      i = r.createEmbeddedView(e.templateRef, e.context, {
        injector: e.injector,
      });
    return (
      i.rootNodes.forEach((n) => this.outletElement.appendChild(n)),
      i.detectChanges(),
      this.setDisposeFn(() => {
        let n = r.indexOf(i);
        n !== -1 && r.remove(n);
      }),
      (this._attachedPortal = e),
      i
    );
  }
  dispose() {
    super.dispose(), this.outletElement.remove();
  }
  _getComponentRootNode(e) {
    return e.hostView.rootNodes[0];
  }
};
var su = (() => {
  let e = class e {};
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵmod = k({ type: e })),
    (e.ɵinj = F({}));
  let t = e;
  return t;
})();
var au = rd(),
  ua = class {
    constructor(e, r) {
      (this._viewportRuler = e),
        (this._previousHTMLStyles = { top: "", left: "" }),
        (this._isEnabled = !1),
        (this._document = r);
    }
    attach() {}
    enable() {
      if (this._canBeEnabled()) {
        let e = this._document.documentElement;
        (this._previousScrollPosition =
          this._viewportRuler.getViewportScrollPosition()),
          (this._previousHTMLStyles.left = e.style.left || ""),
          (this._previousHTMLStyles.top = e.style.top || ""),
          (e.style.left = te(-this._previousScrollPosition.left)),
          (e.style.top = te(-this._previousScrollPosition.top)),
          e.classList.add("cdk-global-scrollblock"),
          (this._isEnabled = !0);
      }
    }
    disable() {
      if (this._isEnabled) {
        let e = this._document.documentElement,
          r = this._document.body,
          i = e.style,
          n = r.style,
          o = i.scrollBehavior || "",
          s = n.scrollBehavior || "";
        (this._isEnabled = !1),
          (i.left = this._previousHTMLStyles.left),
          (i.top = this._previousHTMLStyles.top),
          e.classList.remove("cdk-global-scrollblock"),
          au && (i.scrollBehavior = n.scrollBehavior = "auto"),
          window.scroll(
            this._previousScrollPosition.left,
            this._previousScrollPosition.top,
          ),
          au && ((i.scrollBehavior = o), (n.scrollBehavior = s));
      }
    }
    _canBeEnabled() {
      if (
        this._document.documentElement.classList.contains(
          "cdk-global-scrollblock",
        ) ||
        this._isEnabled
      )
        return !1;
      let r = this._document.body,
        i = this._viewportRuler.getViewportSize();
      return r.scrollHeight > i.height || r.scrollWidth > i.width;
    }
  };
var ha = class {
    constructor(e, r, i, n) {
      (this._scrollDispatcher = e),
        (this._ngZone = r),
        (this._viewportRuler = i),
        (this._config = n),
        (this._scrollSubscription = null),
        (this._detach = () => {
          this.disable(),
            this._overlayRef.hasAttached() &&
              this._ngZone.run(() => this._overlayRef.detach());
        });
    }
    attach(e) {
      this._overlayRef, (this._overlayRef = e);
    }
    enable() {
      if (this._scrollSubscription) return;
      let e = this._scrollDispatcher
        .scrolled(0)
        .pipe(
          z(
            (r) =>
              !r ||
              !this._overlayRef.overlayElement.contains(
                r.getElementRef().nativeElement,
              ),
          ),
        );
      this._config && this._config.threshold && this._config.threshold > 1
        ? ((this._initialScrollPosition =
            this._viewportRuler.getViewportScrollPosition().top),
          (this._scrollSubscription = e.subscribe(() => {
            let r = this._viewportRuler.getViewportScrollPosition().top;
            Math.abs(r - this._initialScrollPosition) > this._config.threshold
              ? this._detach()
              : this._overlayRef.updatePosition();
          })))
        : (this._scrollSubscription = e.subscribe(this._detach));
    }
    disable() {
      this._scrollSubscription &&
        (this._scrollSubscription.unsubscribe(),
        (this._scrollSubscription = null));
    }
    detach() {
      this.disable(), (this._overlayRef = null);
    }
  },
  Zr = class {
    enable() {}
    disable() {}
    attach() {}
  };
function fa(t, e) {
  return e.some((r) => {
    let i = t.bottom < r.top,
      n = t.top > r.bottom,
      o = t.right < r.left,
      s = t.left > r.right;
    return i || n || o || s;
  });
}
function lu(t, e) {
  return e.some((r) => {
    let i = t.top < r.top,
      n = t.bottom > r.bottom,
      o = t.left < r.left,
      s = t.right > r.right;
    return i || n || o || s;
  });
}
var pa = class {
    constructor(e, r, i, n) {
      (this._scrollDispatcher = e),
        (this._viewportRuler = r),
        (this._ngZone = i),
        (this._config = n),
        (this._scrollSubscription = null);
    }
    attach(e) {
      this._overlayRef, (this._overlayRef = e);
    }
    enable() {
      if (!this._scrollSubscription) {
        let e = this._config ? this._config.scrollThrottle : 0;
        this._scrollSubscription = this._scrollDispatcher
          .scrolled(e)
          .subscribe(() => {
            if (
              (this._overlayRef.updatePosition(),
              this._config && this._config.autoClose)
            ) {
              let r = this._overlayRef.overlayElement.getBoundingClientRect(),
                { width: i, height: n } = this._viewportRuler.getViewportSize();
              fa(r, [
                { width: i, height: n, bottom: n, right: i, top: 0, left: 0 },
              ]) &&
                (this.disable(),
                this._ngZone.run(() => this._overlayRef.detach()));
            }
          });
      }
    }
    disable() {
      this._scrollSubscription &&
        (this._scrollSubscription.unsubscribe(),
        (this._scrollSubscription = null));
    }
    detach() {
      this.disable(), (this._overlayRef = null);
    }
  },
  cv = (() => {
    let e = class e {
      constructor(i, n, o, s) {
        (this._scrollDispatcher = i),
          (this._viewportRuler = n),
          (this._ngZone = o),
          (this.noop = () => new Zr()),
          (this.close = (a) =>
            new ha(
              this._scrollDispatcher,
              this._ngZone,
              this._viewportRuler,
              a,
            )),
          (this.block = () => new ua(this._viewportRuler, this._document)),
          (this.reposition = (a) =>
            new pa(
              this._scrollDispatcher,
              this._viewportRuler,
              this._ngZone,
              a,
            )),
          (this._document = s);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(ru), h(In), h(M), h(N));
    }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })(),
  An = class {
    constructor(e) {
      if (
        ((this.scrollStrategy = new Zr()),
        (this.panelClass = ""),
        (this.hasBackdrop = !1),
        (this.backdropClass = "cdk-overlay-dark-backdrop"),
        (this.disposeOnNavigation = !1),
        e)
      ) {
        let r = Object.keys(e);
        for (let i of r) e[i] !== void 0 && (this[i] = e[i]);
      }
    }
  };
var ma = class {
  constructor(e, r) {
    (this.connectionPair = e), (this.scrollableViewProperties = r);
  }
};
var fu = (() => {
    let e = class e {
      constructor(i) {
        (this._attachedOverlays = []), (this._document = i);
      }
      ngOnDestroy() {
        this.detach();
      }
      add(i) {
        this.remove(i), this._attachedOverlays.push(i);
      }
      remove(i) {
        let n = this._attachedOverlays.indexOf(i);
        n > -1 && this._attachedOverlays.splice(n, 1),
          this._attachedOverlays.length === 0 && this.detach();
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(N));
    }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })(),
  dv = (() => {
    let e = class e extends fu {
      constructor(i, n) {
        super(i),
          (this._ngZone = n),
          (this._keydownListener = (o) => {
            let s = this._attachedOverlays;
            for (let a = s.length - 1; a > -1; a--)
              if (s[a]._keydownEvents.observers.length > 0) {
                let c = s[a]._keydownEvents;
                this._ngZone ? this._ngZone.run(() => c.next(o)) : c.next(o);
                break;
              }
          });
      }
      add(i) {
        super.add(i),
          this._isAttached ||
            (this._ngZone
              ? this._ngZone.runOutsideAngular(() =>
                  this._document.body.addEventListener(
                    "keydown",
                    this._keydownListener,
                  ),
                )
              : this._document.body.addEventListener(
                  "keydown",
                  this._keydownListener,
                ),
            (this._isAttached = !0));
      }
      detach() {
        this._isAttached &&
          (this._document.body.removeEventListener(
            "keydown",
            this._keydownListener,
          ),
          (this._isAttached = !1));
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(N), h(M, 8));
    }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })(),
  uv = (() => {
    let e = class e extends fu {
      constructor(i, n, o) {
        super(i),
          (this._platform = n),
          (this._ngZone = o),
          (this._cursorStyleIsSet = !1),
          (this._pointerDownListener = (s) => {
            this._pointerDownEventTarget = Tt(s);
          }),
          (this._clickListener = (s) => {
            let a = Tt(s),
              c =
                s.type === "click" && this._pointerDownEventTarget
                  ? this._pointerDownEventTarget
                  : a;
            this._pointerDownEventTarget = null;
            let l = this._attachedOverlays.slice();
            for (let d = l.length - 1; d > -1; d--) {
              let u = l[d];
              if (
                u._outsidePointerEvents.observers.length < 1 ||
                !u.hasAttached()
              )
                continue;
              if (u.overlayElement.contains(a) || u.overlayElement.contains(c))
                break;
              let p = u._outsidePointerEvents;
              this._ngZone ? this._ngZone.run(() => p.next(s)) : p.next(s);
            }
          });
      }
      add(i) {
        if ((super.add(i), !this._isAttached)) {
          let n = this._document.body;
          this._ngZone
            ? this._ngZone.runOutsideAngular(() => this._addEventListeners(n))
            : this._addEventListeners(n),
            this._platform.IOS &&
              !this._cursorStyleIsSet &&
              ((this._cursorOriginalValue = n.style.cursor),
              (n.style.cursor = "pointer"),
              (this._cursorStyleIsSet = !0)),
            (this._isAttached = !0);
        }
      }
      detach() {
        if (this._isAttached) {
          let i = this._document.body;
          i.removeEventListener("pointerdown", this._pointerDownListener, !0),
            i.removeEventListener("click", this._clickListener, !0),
            i.removeEventListener("auxclick", this._clickListener, !0),
            i.removeEventListener("contextmenu", this._clickListener, !0),
            this._platform.IOS &&
              this._cursorStyleIsSet &&
              ((i.style.cursor = this._cursorOriginalValue),
              (this._cursorStyleIsSet = !1)),
            (this._isAttached = !1);
        }
      }
      _addEventListeners(i) {
        i.addEventListener("pointerdown", this._pointerDownListener, !0),
          i.addEventListener("click", this._clickListener, !0),
          i.addEventListener("auxclick", this._clickListener, !0),
          i.addEventListener("contextmenu", this._clickListener, !0);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(N), h(he), h(M, 8));
    }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })(),
  pu = (() => {
    let e = class e {
      constructor(i, n) {
        (this._platform = n), (this._document = i);
      }
      ngOnDestroy() {
        this._containerElement?.remove();
      }
      getContainerElement() {
        return (
          this._containerElement || this._createContainer(),
          this._containerElement
        );
      }
      _createContainer() {
        let i = "cdk-overlay-container";
        if (this._platform.isBrowser || vn()) {
          let o = this._document.querySelectorAll(
            `.${i}[platform="server"], .${i}[platform="test"]`,
          );
          for (let s = 0; s < o.length; s++) o[s].remove();
        }
        let n = this._document.createElement("div");
        n.classList.add(i),
          vn()
            ? n.setAttribute("platform", "test")
            : this._platform.isBrowser || n.setAttribute("platform", "server"),
          this._document.body.appendChild(n),
          (this._containerElement = n);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(N), h(he));
    }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })(),
  ga = class {
    constructor(e, r, i, n, o, s, a, c, l, d = !1) {
      (this._portalOutlet = e),
        (this._host = r),
        (this._pane = i),
        (this._config = n),
        (this._ngZone = o),
        (this._keyboardDispatcher = s),
        (this._document = a),
        (this._location = c),
        (this._outsideClickDispatcher = l),
        (this._animationsDisabled = d),
        (this._backdropElement = null),
        (this._backdropClick = new L()),
        (this._attachments = new L()),
        (this._detachments = new L()),
        (this._locationChanges = Oe.EMPTY),
        (this._backdropClickHandler = (u) => this._backdropClick.next(u)),
        (this._backdropTransitionendHandler = (u) => {
          this._disposeBackdrop(u.target);
        }),
        (this._keydownEvents = new L()),
        (this._outsidePointerEvents = new L()),
        n.scrollStrategy &&
          ((this._scrollStrategy = n.scrollStrategy),
          this._scrollStrategy.attach(this)),
        (this._positionStrategy = n.positionStrategy);
    }
    get overlayElement() {
      return this._pane;
    }
    get backdropElement() {
      return this._backdropElement;
    }
    get hostElement() {
      return this._host;
    }
    attach(e) {
      !this._host.parentElement &&
        this._previousHostParent &&
        this._previousHostParent.appendChild(this._host);
      let r = this._portalOutlet.attach(e);
      return (
        this._positionStrategy && this._positionStrategy.attach(this),
        this._updateStackingOrder(),
        this._updateElementSize(),
        this._updateElementDirection(),
        this._scrollStrategy && this._scrollStrategy.enable(),
        this._ngZone.onStable.pipe(ie(1)).subscribe(() => {
          this.hasAttached() && this.updatePosition();
        }),
        this._togglePointerEvents(!0),
        this._config.hasBackdrop && this._attachBackdrop(),
        this._config.panelClass &&
          this._toggleClasses(this._pane, this._config.panelClass, !0),
        this._attachments.next(),
        this._keyboardDispatcher.add(this),
        this._config.disposeOnNavigation &&
          (this._locationChanges = this._location.subscribe(() =>
            this.dispose(),
          )),
        this._outsideClickDispatcher.add(this),
        typeof r?.onDestroy == "function" &&
          r.onDestroy(() => {
            this.hasAttached() &&
              this._ngZone.runOutsideAngular(() =>
                Promise.resolve().then(() => this.detach()),
              );
          }),
        r
      );
    }
    detach() {
      if (!this.hasAttached()) return;
      this.detachBackdrop(),
        this._togglePointerEvents(!1),
        this._positionStrategy &&
          this._positionStrategy.detach &&
          this._positionStrategy.detach(),
        this._scrollStrategy && this._scrollStrategy.disable();
      let e = this._portalOutlet.detach();
      return (
        this._detachments.next(),
        this._keyboardDispatcher.remove(this),
        this._detachContentWhenStable(),
        this._locationChanges.unsubscribe(),
        this._outsideClickDispatcher.remove(this),
        e
      );
    }
    dispose() {
      let e = this.hasAttached();
      this._positionStrategy && this._positionStrategy.dispose(),
        this._disposeScrollStrategy(),
        this._disposeBackdrop(this._backdropElement),
        this._locationChanges.unsubscribe(),
        this._keyboardDispatcher.remove(this),
        this._portalOutlet.dispose(),
        this._attachments.complete(),
        this._backdropClick.complete(),
        this._keydownEvents.complete(),
        this._outsidePointerEvents.complete(),
        this._outsideClickDispatcher.remove(this),
        this._host?.remove(),
        (this._previousHostParent = this._pane = this._host = null),
        e && this._detachments.next(),
        this._detachments.complete();
    }
    hasAttached() {
      return this._portalOutlet.hasAttached();
    }
    backdropClick() {
      return this._backdropClick;
    }
    attachments() {
      return this._attachments;
    }
    detachments() {
      return this._detachments;
    }
    keydownEvents() {
      return this._keydownEvents;
    }
    outsidePointerEvents() {
      return this._outsidePointerEvents;
    }
    getConfig() {
      return this._config;
    }
    updatePosition() {
      this._positionStrategy && this._positionStrategy.apply();
    }
    updatePositionStrategy(e) {
      e !== this._positionStrategy &&
        (this._positionStrategy && this._positionStrategy.dispose(),
        (this._positionStrategy = e),
        this.hasAttached() && (e.attach(this), this.updatePosition()));
    }
    updateSize(e) {
      (this._config = f(f({}, this._config), e)), this._updateElementSize();
    }
    setDirection(e) {
      (this._config = E(f({}, this._config), { direction: e })),
        this._updateElementDirection();
    }
    addPanelClass(e) {
      this._pane && this._toggleClasses(this._pane, e, !0);
    }
    removePanelClass(e) {
      this._pane && this._toggleClasses(this._pane, e, !1);
    }
    getDirection() {
      let e = this._config.direction;
      return e ? (typeof e == "string" ? e : e.value) : "ltr";
    }
    updateScrollStrategy(e) {
      e !== this._scrollStrategy &&
        (this._disposeScrollStrategy(),
        (this._scrollStrategy = e),
        this.hasAttached() && (e.attach(this), e.enable()));
    }
    _updateElementDirection() {
      this._host.setAttribute("dir", this.getDirection());
    }
    _updateElementSize() {
      if (!this._pane) return;
      let e = this._pane.style;
      (e.width = te(this._config.width)),
        (e.height = te(this._config.height)),
        (e.minWidth = te(this._config.minWidth)),
        (e.minHeight = te(this._config.minHeight)),
        (e.maxWidth = te(this._config.maxWidth)),
        (e.maxHeight = te(this._config.maxHeight));
    }
    _togglePointerEvents(e) {
      this._pane.style.pointerEvents = e ? "" : "none";
    }
    _attachBackdrop() {
      let e = "cdk-overlay-backdrop-showing";
      (this._backdropElement = this._document.createElement("div")),
        this._backdropElement.classList.add("cdk-overlay-backdrop"),
        this._animationsDisabled &&
          this._backdropElement.classList.add(
            "cdk-overlay-backdrop-noop-animation",
          ),
        this._config.backdropClass &&
          this._toggleClasses(
            this._backdropElement,
            this._config.backdropClass,
            !0,
          ),
        this._host.parentElement.insertBefore(
          this._backdropElement,
          this._host,
        ),
        this._backdropElement.addEventListener(
          "click",
          this._backdropClickHandler,
        ),
        !this._animationsDisabled && typeof requestAnimationFrame < "u"
          ? this._ngZone.runOutsideAngular(() => {
              requestAnimationFrame(() => {
                this._backdropElement && this._backdropElement.classList.add(e);
              });
            })
          : this._backdropElement.classList.add(e);
    }
    _updateStackingOrder() {
      this._host.nextSibling && this._host.parentNode.appendChild(this._host);
    }
    detachBackdrop() {
      let e = this._backdropElement;
      if (e) {
        if (this._animationsDisabled) {
          this._disposeBackdrop(e);
          return;
        }
        e.classList.remove("cdk-overlay-backdrop-showing"),
          this._ngZone.runOutsideAngular(() => {
            e.addEventListener(
              "transitionend",
              this._backdropTransitionendHandler,
            );
          }),
          (e.style.pointerEvents = "none"),
          (this._backdropTimeout = this._ngZone.runOutsideAngular(() =>
            setTimeout(() => {
              this._disposeBackdrop(e);
            }, 500),
          ));
      }
    }
    _toggleClasses(e, r, i) {
      let n = mi(r || []).filter((o) => !!o);
      n.length && (i ? e.classList.add(...n) : e.classList.remove(...n));
    }
    _detachContentWhenStable() {
      this._ngZone.runOutsideAngular(() => {
        let e = this._ngZone.onStable
          .pipe(Ce(ve(this._attachments, this._detachments)))
          .subscribe(() => {
            (!this._pane || !this._host || this._pane.children.length === 0) &&
              (this._pane &&
                this._config.panelClass &&
                this._toggleClasses(this._pane, this._config.panelClass, !1),
              this._host &&
                this._host.parentElement &&
                ((this._previousHostParent = this._host.parentElement),
                this._host.remove()),
              e.unsubscribe());
          });
      });
    }
    _disposeScrollStrategy() {
      let e = this._scrollStrategy;
      e && (e.disable(), e.detach && e.detach());
    }
    _disposeBackdrop(e) {
      e &&
        (e.removeEventListener("click", this._backdropClickHandler),
        e.removeEventListener(
          "transitionend",
          this._backdropTransitionendHandler,
        ),
        e.remove(),
        this._backdropElement === e && (this._backdropElement = null)),
        this._backdropTimeout &&
          (clearTimeout(this._backdropTimeout),
          (this._backdropTimeout = void 0));
    }
  },
  cu = "cdk-overlay-connected-position-bounding-box",
  hv = /([A-Za-z%]+)$/,
  va = class {
    get positions() {
      return this._preferredPositions;
    }
    constructor(e, r, i, n, o) {
      (this._viewportRuler = r),
        (this._document = i),
        (this._platform = n),
        (this._overlayContainer = o),
        (this._lastBoundingBoxSize = { width: 0, height: 0 }),
        (this._isPushed = !1),
        (this._canPush = !0),
        (this._growAfterOpen = !1),
        (this._hasFlexibleDimensions = !0),
        (this._positionLocked = !1),
        (this._viewportMargin = 0),
        (this._scrollables = []),
        (this._preferredPositions = []),
        (this._positionChanges = new L()),
        (this._resizeSubscription = Oe.EMPTY),
        (this._offsetX = 0),
        (this._offsetY = 0),
        (this._appliedPanelClasses = []),
        (this.positionChanges = this._positionChanges),
        this.setOrigin(e);
    }
    attach(e) {
      this._overlayRef && this._overlayRef,
        this._validatePositions(),
        e.hostElement.classList.add(cu),
        (this._overlayRef = e),
        (this._boundingBox = e.hostElement),
        (this._pane = e.overlayElement),
        (this._isDisposed = !1),
        (this._isInitialRender = !0),
        (this._lastPosition = null),
        this._resizeSubscription.unsubscribe(),
        (this._resizeSubscription = this._viewportRuler
          .change()
          .subscribe(() => {
            (this._isInitialRender = !0), this.apply();
          }));
    }
    apply() {
      if (this._isDisposed || !this._platform.isBrowser) return;
      if (
        !this._isInitialRender &&
        this._positionLocked &&
        this._lastPosition
      ) {
        this.reapplyLastPosition();
        return;
      }
      this._clearPanelClasses(),
        this._resetOverlayElementStyles(),
        this._resetBoundingBoxStyles(),
        (this._viewportRect = this._getNarrowedViewportRect()),
        (this._originRect = this._getOriginRect()),
        (this._overlayRect = this._pane.getBoundingClientRect()),
        (this._containerRect = this._overlayContainer
          .getContainerElement()
          .getBoundingClientRect());
      let e = this._originRect,
        r = this._overlayRect,
        i = this._viewportRect,
        n = this._containerRect,
        o = [],
        s;
      for (let a of this._preferredPositions) {
        let c = this._getOriginPoint(e, n, a),
          l = this._getOverlayPoint(c, r, a),
          d = this._getOverlayFit(l, r, i, a);
        if (d.isCompletelyWithinViewport) {
          (this._isPushed = !1), this._applyPosition(a, c);
          return;
        }
        if (this._canFitWithFlexibleDimensions(d, l, i)) {
          o.push({
            position: a,
            origin: c,
            overlayRect: r,
            boundingBoxRect: this._calculateBoundingBoxRect(c, a),
          });
          continue;
        }
        (!s || s.overlayFit.visibleArea < d.visibleArea) &&
          (s = {
            overlayFit: d,
            overlayPoint: l,
            originPoint: c,
            position: a,
            overlayRect: r,
          });
      }
      if (o.length) {
        let a = null,
          c = -1;
        for (let l of o) {
          let d =
            l.boundingBoxRect.width *
            l.boundingBoxRect.height *
            (l.position.weight || 1);
          d > c && ((c = d), (a = l));
        }
        (this._isPushed = !1), this._applyPosition(a.position, a.origin);
        return;
      }
      if (this._canPush) {
        (this._isPushed = !0), this._applyPosition(s.position, s.originPoint);
        return;
      }
      this._applyPosition(s.position, s.originPoint);
    }
    detach() {
      this._clearPanelClasses(),
        (this._lastPosition = null),
        (this._previousPushAmount = null),
        this._resizeSubscription.unsubscribe();
    }
    dispose() {
      this._isDisposed ||
        (this._boundingBox &&
          kt(this._boundingBox.style, {
            top: "",
            left: "",
            right: "",
            bottom: "",
            height: "",
            width: "",
            alignItems: "",
            justifyContent: "",
          }),
        this._pane && this._resetOverlayElementStyles(),
        this._overlayRef && this._overlayRef.hostElement.classList.remove(cu),
        this.detach(),
        this._positionChanges.complete(),
        (this._overlayRef = this._boundingBox = null),
        (this._isDisposed = !0));
    }
    reapplyLastPosition() {
      if (this._isDisposed || !this._platform.isBrowser) return;
      let e = this._lastPosition;
      if (e) {
        (this._originRect = this._getOriginRect()),
          (this._overlayRect = this._pane.getBoundingClientRect()),
          (this._viewportRect = this._getNarrowedViewportRect()),
          (this._containerRect = this._overlayContainer
            .getContainerElement()
            .getBoundingClientRect());
        let r = this._getOriginPoint(this._originRect, this._containerRect, e);
        this._applyPosition(e, r);
      } else this.apply();
    }
    withScrollableContainers(e) {
      return (this._scrollables = e), this;
    }
    withPositions(e) {
      return (
        (this._preferredPositions = e),
        e.indexOf(this._lastPosition) === -1 && (this._lastPosition = null),
        this._validatePositions(),
        this
      );
    }
    withViewportMargin(e) {
      return (this._viewportMargin = e), this;
    }
    withFlexibleDimensions(e = !0) {
      return (this._hasFlexibleDimensions = e), this;
    }
    withGrowAfterOpen(e = !0) {
      return (this._growAfterOpen = e), this;
    }
    withPush(e = !0) {
      return (this._canPush = e), this;
    }
    withLockedPosition(e = !0) {
      return (this._positionLocked = e), this;
    }
    setOrigin(e) {
      return (this._origin = e), this;
    }
    withDefaultOffsetX(e) {
      return (this._offsetX = e), this;
    }
    withDefaultOffsetY(e) {
      return (this._offsetY = e), this;
    }
    withTransformOriginOn(e) {
      return (this._transformOriginSelector = e), this;
    }
    _getOriginPoint(e, r, i) {
      let n;
      if (i.originX == "center") n = e.left + e.width / 2;
      else {
        let s = this._isRtl() ? e.right : e.left,
          a = this._isRtl() ? e.left : e.right;
        n = i.originX == "start" ? s : a;
      }
      r.left < 0 && (n -= r.left);
      let o;
      return (
        i.originY == "center"
          ? (o = e.top + e.height / 2)
          : (o = i.originY == "top" ? e.top : e.bottom),
        r.top < 0 && (o -= r.top),
        { x: n, y: o }
      );
    }
    _getOverlayPoint(e, r, i) {
      let n;
      i.overlayX == "center"
        ? (n = -r.width / 2)
        : i.overlayX === "start"
          ? (n = this._isRtl() ? -r.width : 0)
          : (n = this._isRtl() ? 0 : -r.width);
      let o;
      return (
        i.overlayY == "center"
          ? (o = -r.height / 2)
          : (o = i.overlayY == "top" ? 0 : -r.height),
        { x: e.x + n, y: e.y + o }
      );
    }
    _getOverlayFit(e, r, i, n) {
      let o = uu(r),
        { x: s, y: a } = e,
        c = this._getOffset(n, "x"),
        l = this._getOffset(n, "y");
      c && (s += c), l && (a += l);
      let d = 0 - s,
        u = s + o.width - i.width,
        p = 0 - a,
        b = a + o.height - i.height,
        _ = this._subtractOverflows(o.width, d, u),
        x = this._subtractOverflows(o.height, p, b),
        I = _ * x;
      return {
        visibleArea: I,
        isCompletelyWithinViewport: o.width * o.height === I,
        fitsInViewportVertically: x === o.height,
        fitsInViewportHorizontally: _ == o.width,
      };
    }
    _canFitWithFlexibleDimensions(e, r, i) {
      if (this._hasFlexibleDimensions) {
        let n = i.bottom - r.y,
          o = i.right - r.x,
          s = du(this._overlayRef.getConfig().minHeight),
          a = du(this._overlayRef.getConfig().minWidth),
          c = e.fitsInViewportVertically || (s != null && s <= n),
          l = e.fitsInViewportHorizontally || (a != null && a <= o);
        return c && l;
      }
      return !1;
    }
    _pushOverlayOnScreen(e, r, i) {
      if (this._previousPushAmount && this._positionLocked)
        return {
          x: e.x + this._previousPushAmount.x,
          y: e.y + this._previousPushAmount.y,
        };
      let n = uu(r),
        o = this._viewportRect,
        s = Math.max(e.x + n.width - o.width, 0),
        a = Math.max(e.y + n.height - o.height, 0),
        c = Math.max(o.top - i.top - e.y, 0),
        l = Math.max(o.left - i.left - e.x, 0),
        d = 0,
        u = 0;
      return (
        n.width <= o.width
          ? (d = l || -s)
          : (d = e.x < this._viewportMargin ? o.left - i.left - e.x : 0),
        n.height <= o.height
          ? (u = c || -a)
          : (u = e.y < this._viewportMargin ? o.top - i.top - e.y : 0),
        (this._previousPushAmount = { x: d, y: u }),
        { x: e.x + d, y: e.y + u }
      );
    }
    _applyPosition(e, r) {
      if (
        (this._setTransformOrigin(e),
        this._setOverlayElementStyles(r, e),
        this._setBoundingBoxStyles(r, e),
        e.panelClass && this._addPanelClasses(e.panelClass),
        this._positionChanges.observers.length)
      ) {
        let i = this._getScrollVisibility();
        if (
          e !== this._lastPosition ||
          !this._lastScrollVisibility ||
          !fv(this._lastScrollVisibility, i)
        ) {
          let n = new ma(e, i);
          this._positionChanges.next(n);
        }
        this._lastScrollVisibility = i;
      }
      (this._lastPosition = e), (this._isInitialRender = !1);
    }
    _setTransformOrigin(e) {
      if (!this._transformOriginSelector) return;
      let r = this._boundingBox.querySelectorAll(this._transformOriginSelector),
        i,
        n = e.overlayY;
      e.overlayX === "center"
        ? (i = "center")
        : this._isRtl()
          ? (i = e.overlayX === "start" ? "right" : "left")
          : (i = e.overlayX === "start" ? "left" : "right");
      for (let o = 0; o < r.length; o++)
        r[o].style.transformOrigin = `${i} ${n}`;
    }
    _calculateBoundingBoxRect(e, r) {
      let i = this._viewportRect,
        n = this._isRtl(),
        o,
        s,
        a;
      if (r.overlayY === "top")
        (s = e.y), (o = i.height - s + this._viewportMargin);
      else if (r.overlayY === "bottom")
        (a = i.height - e.y + this._viewportMargin * 2),
          (o = i.height - a + this._viewportMargin);
      else {
        let b = Math.min(i.bottom - e.y + i.top, e.y),
          _ = this._lastBoundingBoxSize.height;
        (o = b * 2),
          (s = e.y - b),
          o > _ &&
            !this._isInitialRender &&
            !this._growAfterOpen &&
            (s = e.y - _ / 2);
      }
      let c = (r.overlayX === "start" && !n) || (r.overlayX === "end" && n),
        l = (r.overlayX === "end" && !n) || (r.overlayX === "start" && n),
        d,
        u,
        p;
      if (l)
        (p = i.width - e.x + this._viewportMargin * 2),
          (d = e.x - this._viewportMargin);
      else if (c) (u = e.x), (d = i.right - e.x);
      else {
        let b = Math.min(i.right - e.x + i.left, e.x),
          _ = this._lastBoundingBoxSize.width;
        (d = b * 2),
          (u = e.x - b),
          d > _ &&
            !this._isInitialRender &&
            !this._growAfterOpen &&
            (u = e.x - _ / 2);
      }
      return { top: s, left: u, bottom: a, right: p, width: d, height: o };
    }
    _setBoundingBoxStyles(e, r) {
      let i = this._calculateBoundingBoxRect(e, r);
      !this._isInitialRender &&
        !this._growAfterOpen &&
        ((i.height = Math.min(i.height, this._lastBoundingBoxSize.height)),
        (i.width = Math.min(i.width, this._lastBoundingBoxSize.width)));
      let n = {};
      if (this._hasExactPosition())
        (n.top = n.left = "0"),
          (n.bottom = n.right = n.maxHeight = n.maxWidth = ""),
          (n.width = n.height = "100%");
      else {
        let o = this._overlayRef.getConfig().maxHeight,
          s = this._overlayRef.getConfig().maxWidth;
        (n.height = te(i.height)),
          (n.top = te(i.top)),
          (n.bottom = te(i.bottom)),
          (n.width = te(i.width)),
          (n.left = te(i.left)),
          (n.right = te(i.right)),
          r.overlayX === "center"
            ? (n.alignItems = "center")
            : (n.alignItems = r.overlayX === "end" ? "flex-end" : "flex-start"),
          r.overlayY === "center"
            ? (n.justifyContent = "center")
            : (n.justifyContent =
                r.overlayY === "bottom" ? "flex-end" : "flex-start"),
          o && (n.maxHeight = te(o)),
          s && (n.maxWidth = te(s));
      }
      (this._lastBoundingBoxSize = i), kt(this._boundingBox.style, n);
    }
    _resetBoundingBoxStyles() {
      kt(this._boundingBox.style, {
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        height: "",
        width: "",
        alignItems: "",
        justifyContent: "",
      });
    }
    _resetOverlayElementStyles() {
      kt(this._pane.style, {
        top: "",
        left: "",
        bottom: "",
        right: "",
        position: "",
        transform: "",
      });
    }
    _setOverlayElementStyles(e, r) {
      let i = {},
        n = this._hasExactPosition(),
        o = this._hasFlexibleDimensions,
        s = this._overlayRef.getConfig();
      if (n) {
        let d = this._viewportRuler.getViewportScrollPosition();
        kt(i, this._getExactOverlayY(r, e, d)),
          kt(i, this._getExactOverlayX(r, e, d));
      } else i.position = "static";
      let a = "",
        c = this._getOffset(r, "x"),
        l = this._getOffset(r, "y");
      c && (a += `translateX(${c}px) `),
        l && (a += `translateY(${l}px)`),
        (i.transform = a.trim()),
        s.maxHeight &&
          (n ? (i.maxHeight = te(s.maxHeight)) : o && (i.maxHeight = "")),
        s.maxWidth &&
          (n ? (i.maxWidth = te(s.maxWidth)) : o && (i.maxWidth = "")),
        kt(this._pane.style, i);
    }
    _getExactOverlayY(e, r, i) {
      let n = { top: "", bottom: "" },
        o = this._getOverlayPoint(r, this._overlayRect, e);
      if (
        (this._isPushed &&
          (o = this._pushOverlayOnScreen(o, this._overlayRect, i)),
        e.overlayY === "bottom")
      ) {
        let s = this._document.documentElement.clientHeight;
        n.bottom = `${s - (o.y + this._overlayRect.height)}px`;
      } else n.top = te(o.y);
      return n;
    }
    _getExactOverlayX(e, r, i) {
      let n = { left: "", right: "" },
        o = this._getOverlayPoint(r, this._overlayRect, e);
      this._isPushed &&
        (o = this._pushOverlayOnScreen(o, this._overlayRect, i));
      let s;
      if (
        (this._isRtl()
          ? (s = e.overlayX === "end" ? "left" : "right")
          : (s = e.overlayX === "end" ? "right" : "left"),
        s === "right")
      ) {
        let a = this._document.documentElement.clientWidth;
        n.right = `${a - (o.x + this._overlayRect.width)}px`;
      } else n.left = te(o.x);
      return n;
    }
    _getScrollVisibility() {
      let e = this._getOriginRect(),
        r = this._pane.getBoundingClientRect(),
        i = this._scrollables.map((n) =>
          n.getElementRef().nativeElement.getBoundingClientRect(),
        );
      return {
        isOriginClipped: lu(e, i),
        isOriginOutsideView: fa(e, i),
        isOverlayClipped: lu(r, i),
        isOverlayOutsideView: fa(r, i),
      };
    }
    _subtractOverflows(e, ...r) {
      return r.reduce((i, n) => i - Math.max(n, 0), e);
    }
    _getNarrowedViewportRect() {
      let e = this._document.documentElement.clientWidth,
        r = this._document.documentElement.clientHeight,
        i = this._viewportRuler.getViewportScrollPosition();
      return {
        top: i.top + this._viewportMargin,
        left: i.left + this._viewportMargin,
        right: i.left + e - this._viewportMargin,
        bottom: i.top + r - this._viewportMargin,
        width: e - 2 * this._viewportMargin,
        height: r - 2 * this._viewportMargin,
      };
    }
    _isRtl() {
      return this._overlayRef.getDirection() === "rtl";
    }
    _hasExactPosition() {
      return !this._hasFlexibleDimensions || this._isPushed;
    }
    _getOffset(e, r) {
      return r === "x"
        ? e.offsetX == null
          ? this._offsetX
          : e.offsetX
        : e.offsetY == null
          ? this._offsetY
          : e.offsetY;
    }
    _validatePositions() {}
    _addPanelClasses(e) {
      this._pane &&
        mi(e).forEach((r) => {
          r !== "" &&
            this._appliedPanelClasses.indexOf(r) === -1 &&
            (this._appliedPanelClasses.push(r), this._pane.classList.add(r));
        });
    }
    _clearPanelClasses() {
      this._pane &&
        (this._appliedPanelClasses.forEach((e) => {
          this._pane.classList.remove(e);
        }),
        (this._appliedPanelClasses = []));
    }
    _getOriginRect() {
      let e = this._origin;
      if (e instanceof X) return e.nativeElement.getBoundingClientRect();
      if (e instanceof Element) return e.getBoundingClientRect();
      let r = e.width || 0,
        i = e.height || 0;
      return {
        top: e.y,
        bottom: e.y + i,
        left: e.x,
        right: e.x + r,
        height: i,
        width: r,
      };
    }
  };
function kt(t, e) {
  for (let r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
  return t;
}
function du(t) {
  if (typeof t != "number" && t != null) {
    let [e, r] = t.split(hv);
    return !r || r === "px" ? parseFloat(e) : null;
  }
  return t || null;
}
function uu(t) {
  return {
    top: Math.floor(t.top),
    right: Math.floor(t.right),
    bottom: Math.floor(t.bottom),
    left: Math.floor(t.left),
    width: Math.floor(t.width),
    height: Math.floor(t.height),
  };
}
function fv(t, e) {
  return t === e
    ? !0
    : t.isOriginClipped === e.isOriginClipped &&
        t.isOriginOutsideView === e.isOriginOutsideView &&
        t.isOverlayClipped === e.isOverlayClipped &&
        t.isOverlayOutsideView === e.isOverlayOutsideView;
}
var hu = "cdk-global-overlay-wrapper",
  _a = class {
    constructor() {
      (this._cssPosition = "static"),
        (this._topOffset = ""),
        (this._bottomOffset = ""),
        (this._alignItems = ""),
        (this._xPosition = ""),
        (this._xOffset = ""),
        (this._width = ""),
        (this._height = ""),
        (this._isDisposed = !1);
    }
    attach(e) {
      let r = e.getConfig();
      (this._overlayRef = e),
        this._width && !r.width && e.updateSize({ width: this._width }),
        this._height && !r.height && e.updateSize({ height: this._height }),
        e.hostElement.classList.add(hu),
        (this._isDisposed = !1);
    }
    top(e = "") {
      return (
        (this._bottomOffset = ""),
        (this._topOffset = e),
        (this._alignItems = "flex-start"),
        this
      );
    }
    left(e = "") {
      return (this._xOffset = e), (this._xPosition = "left"), this;
    }
    bottom(e = "") {
      return (
        (this._topOffset = ""),
        (this._bottomOffset = e),
        (this._alignItems = "flex-end"),
        this
      );
    }
    right(e = "") {
      return (this._xOffset = e), (this._xPosition = "right"), this;
    }
    start(e = "") {
      return (this._xOffset = e), (this._xPosition = "start"), this;
    }
    end(e = "") {
      return (this._xOffset = e), (this._xPosition = "end"), this;
    }
    width(e = "") {
      return (
        this._overlayRef
          ? this._overlayRef.updateSize({ width: e })
          : (this._width = e),
        this
      );
    }
    height(e = "") {
      return (
        this._overlayRef
          ? this._overlayRef.updateSize({ height: e })
          : (this._height = e),
        this
      );
    }
    centerHorizontally(e = "") {
      return this.left(e), (this._xPosition = "center"), this;
    }
    centerVertically(e = "") {
      return this.top(e), (this._alignItems = "center"), this;
    }
    apply() {
      if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
      let e = this._overlayRef.overlayElement.style,
        r = this._overlayRef.hostElement.style,
        i = this._overlayRef.getConfig(),
        { width: n, height: o, maxWidth: s, maxHeight: a } = i,
        c =
          (n === "100%" || n === "100vw") &&
          (!s || s === "100%" || s === "100vw"),
        l =
          (o === "100%" || o === "100vh") &&
          (!a || a === "100%" || a === "100vh"),
        d = this._xPosition,
        u = this._xOffset,
        p = this._overlayRef.getConfig().direction === "rtl",
        b = "",
        _ = "",
        x = "";
      c
        ? (x = "flex-start")
        : d === "center"
          ? ((x = "center"), p ? (_ = u) : (b = u))
          : p
            ? d === "left" || d === "end"
              ? ((x = "flex-end"), (b = u))
              : (d === "right" || d === "start") &&
                ((x = "flex-start"), (_ = u))
            : d === "left" || d === "start"
              ? ((x = "flex-start"), (b = u))
              : (d === "right" || d === "end") && ((x = "flex-end"), (_ = u)),
        (e.position = this._cssPosition),
        (e.marginLeft = c ? "0" : b),
        (e.marginTop = l ? "0" : this._topOffset),
        (e.marginBottom = this._bottomOffset),
        (e.marginRight = c ? "0" : _),
        (r.justifyContent = x),
        (r.alignItems = l ? "flex-start" : this._alignItems);
    }
    dispose() {
      if (this._isDisposed || !this._overlayRef) return;
      let e = this._overlayRef.overlayElement.style,
        r = this._overlayRef.hostElement,
        i = r.style;
      r.classList.remove(hu),
        (i.justifyContent =
          i.alignItems =
          e.marginTop =
          e.marginBottom =
          e.marginLeft =
          e.marginRight =
          e.position =
            ""),
        (this._overlayRef = null),
        (this._isDisposed = !0);
    }
  },
  pv = (() => {
    let e = class e {
      constructor(i, n, o, s) {
        (this._viewportRuler = i),
          (this._document = n),
          (this._platform = o),
          (this._overlayContainer = s);
      }
      global() {
        return new _a();
      }
      flexibleConnectedTo(i) {
        return new va(
          i,
          this._viewportRuler,
          this._document,
          this._platform,
          this._overlayContainer,
        );
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(In), h(N), h(he), h(pu));
    }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })(),
  mv = 0,
  ht = (() => {
    let e = class e {
      constructor(i, n, o, s, a, c, l, d, u, p, b, _) {
        (this.scrollStrategies = i),
          (this._overlayContainer = n),
          (this._componentFactoryResolver = o),
          (this._positionBuilder = s),
          (this._keyboardDispatcher = a),
          (this._injector = c),
          (this._ngZone = l),
          (this._document = d),
          (this._directionality = u),
          (this._location = p),
          (this._outsideClickDispatcher = b),
          (this._animationsModuleType = _);
      }
      create(i) {
        let n = this._createHostElement(),
          o = this._createPaneElement(n),
          s = this._createPortalOutlet(o),
          a = new An(i);
        return (
          (a.direction = a.direction || this._directionality.value),
          new ga(
            s,
            n,
            o,
            a,
            this._ngZone,
            this._keyboardDispatcher,
            this._document,
            this._location,
            this._outsideClickDispatcher,
            this._animationsModuleType === "NoopAnimations",
          )
        );
      }
      position() {
        return this._positionBuilder;
      }
      _createPaneElement(i) {
        let n = this._document.createElement("div");
        return (
          (n.id = `cdk-overlay-${mv++}`),
          n.classList.add("cdk-overlay-pane"),
          i.appendChild(n),
          n
        );
      }
      _createHostElement() {
        let i = this._document.createElement("div");
        return this._overlayContainer.getContainerElement().appendChild(i), i;
      }
      _createPortalOutlet(i) {
        return (
          this._appRef || (this._appRef = this._injector.get(Zt)),
          new Xr(
            i,
            this._componentFactoryResolver,
            this._appRef,
            this._injector,
            this._document,
          )
        );
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(
        h(cv),
        h(pu),
        h(yo),
        h(pv),
        h(dv),
        h(nt),
        h(M),
        h(N),
        h(Tr),
        h(Qt),
        h(uv),
        h(Ve, 8),
      );
    }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })();
var gv = new g("cdk-connected-overlay-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    let t = m(ht);
    return () => t.scrollStrategies.reposition();
  },
});
function vv(t) {
  return () => t.scrollStrategies.reposition();
}
var _v = { provide: gv, deps: [ht], useFactory: vv },
  mu = (() => {
    let e = class e {};
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵmod = k({ type: e })),
      (e.ɵinj = F({ providers: [ht, _v], imports: [ut, su, aa, aa] }));
    let t = e;
    return t;
  })();
var gu = new g("MatFormField");
var vu = (() => {
  let e = class e {};
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵmod = k({ type: e })),
    (e.ɵinj = F({ imports: [Ae, Pi, sd, Ae] }));
  let t = e;
  return t;
})();
var bv = ["panel"],
  xv = ["*"];
function wv(t, e) {
  if (t & 1) {
    let r = Mi();
    A(0, "div", 1, 0),
      de("@panelAnimation.done", function (n) {
        Ht(r);
        let o = ue();
        return Wt(o._animationDone.next(n));
      }),
      _t(2),
      O();
  }
  if (t & 2) {
    let r = e.id,
      i = ue();
    se("id", i.id)("ngClass", i._classList)(
      "@panelAnimation",
      i.isOpen ? "visible" : "hidden",
    ),
      Te("aria-label", i.ariaLabel || null)(
        "aria-labelledby",
        i._getPanelAriaLabelledby(r),
      );
  }
}
var Cv = ei("panelAnimation", [
    Sl("void, hidden", Fe({ opacity: 0, transform: "scaleY(0.8)" })),
    xt(":enter, hidden => visible", [
      El([
        rt("0.03s linear", Fe({ opacity: 1 })),
        rt("0.12s cubic-bezier(0, 0, 0.2, 1)", Fe({ transform: "scaleY(1)" })),
      ]),
    ]),
    xt(":leave, visible => hidden", [rt("0.075s linear", Fe({ opacity: 0 }))]),
  ]),
  Ev = 0,
  ya = class {
    constructor(e, r) {
      (this.source = e), (this.option = r);
    }
  },
  yu = new g("mat-autocomplete-default-options", {
    providedIn: "root",
    factory: Sv,
  });
function Sv() {
  return {
    autoActiveFirstOption: !1,
    autoSelectActiveOption: !1,
    hideSingleSelectionIndicator: !1,
    requireSelection: !1,
  };
}
var bu = (() => {
  let e = class e {
    get isOpen() {
      return this._isOpen && this.showPanel;
    }
    _setColor(i) {
      (this._color = i), this._setThemeClasses(this._classList);
    }
    set classList(i) {
      i && i.length
        ? (this._classList = od(i).reduce((n, o) => ((n[o] = !0), n), {}))
        : (this._classList = {}),
        this._setVisibilityClasses(this._classList),
        this._setThemeClasses(this._classList),
        (this._elementRef.nativeElement.className = "");
    }
    get hideSingleSelectionIndicator() {
      return this._hideSingleSelectionIndicator;
    }
    set hideSingleSelectionIndicator(i) {
      (this._hideSingleSelectionIndicator = i), this._syncParentProperties();
    }
    _syncParentProperties() {
      if (this.options)
        for (let i of this.options) i._changeDetectorRef.markForCheck();
    }
    constructor(i, n, o, s) {
      (this._changeDetectorRef = i),
        (this._elementRef = n),
        (this._defaults = o),
        (this._activeOptionChanges = Oe.EMPTY),
        (this._visibleClass = "mat-mdc-autocomplete-visible"),
        (this._hiddenClass = "mat-mdc-autocomplete-hidden"),
        (this._animationDone = new Y()),
        (this.showPanel = !1),
        (this._isOpen = !1),
        (this.displayWith = null),
        (this.optionSelected = new Y()),
        (this.opened = new Y()),
        (this.closed = new Y()),
        (this.optionActivated = new Y()),
        (this._classList = {}),
        (this.id = `mat-autocomplete-${Ev++}`),
        (this.inertGroups = s?.SAFARI || !1),
        (this.autoActiveFirstOption = !!o.autoActiveFirstOption),
        (this.autoSelectActiveOption = !!o.autoSelectActiveOption),
        (this.requireSelection = !!o.requireSelection),
        (this._hideSingleSelectionIndicator =
          this._defaults.hideSingleSelectionIndicator ?? !1);
    }
    ngAfterContentInit() {
      (this._keyManager = new Ar(this.options)
        .withWrap()
        .skipPredicate(this._skipPredicate)),
        (this._activeOptionChanges = this._keyManager.change.subscribe((i) => {
          this.isOpen &&
            this.optionActivated.emit({
              source: this,
              option: this.options.toArray()[i] || null,
            });
        })),
        this._setVisibility();
    }
    ngOnDestroy() {
      this._keyManager?.destroy(),
        this._activeOptionChanges.unsubscribe(),
        this._animationDone.complete();
    }
    _setScrollTop(i) {
      this.panel && (this.panel.nativeElement.scrollTop = i);
    }
    _getScrollTop() {
      return this.panel ? this.panel.nativeElement.scrollTop : 0;
    }
    _setVisibility() {
      (this.showPanel = !!this.options.length),
        this._setVisibilityClasses(this._classList),
        this._changeDetectorRef.markForCheck();
    }
    _emitSelectEvent(i) {
      let n = new ya(this, i);
      this.optionSelected.emit(n);
    }
    _getPanelAriaLabelledby(i) {
      if (this.ariaLabel) return null;
      let n = i ? i + " " : "";
      return this.ariaLabelledby ? n + this.ariaLabelledby : i;
    }
    _setVisibilityClasses(i) {
      (i[this._visibleClass] = this.showPanel),
        (i[this._hiddenClass] = !this.showPanel);
    }
    _setThemeClasses(i) {
      (i["mat-primary"] = this._color === "primary"),
        (i["mat-warn"] = this._color === "warn"),
        (i["mat-accent"] = this._color === "accent");
    }
    _skipPredicate() {
      return !1;
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(y(ye), y(X), y(yu), y(he));
  }),
    (e.ɵcmp = W({
      type: e,
      selectors: [["mat-autocomplete"]],
      contentQueries: function (n, o, s) {
        if ((n & 1 && (Fi(s, Mr, 5), Fi(s, Js, 5)), n & 2)) {
          let a;
          Ue((a = Be())) && (o.options = a),
            Ue((a = Be())) && (o.optionGroups = a);
        }
      },
      viewQuery: function (n, o) {
        if ((n & 1 && (yt(Ti, 7), yt(bv, 5)), n & 2)) {
          let s;
          Ue((s = Be())) && (o.template = s.first),
            Ue((s = Be())) && (o.panel = s.first);
        }
      },
      hostAttrs: [1, "mat-mdc-autocomplete"],
      inputs: {
        ariaLabel: [T.None, "aria-label", "ariaLabel"],
        ariaLabelledby: [T.None, "aria-labelledby", "ariaLabelledby"],
        displayWith: "displayWith",
        autoActiveFirstOption: [
          T.HasDecoratorInputTransform,
          "autoActiveFirstOption",
          "autoActiveFirstOption",
          be,
        ],
        autoSelectActiveOption: [
          T.HasDecoratorInputTransform,
          "autoSelectActiveOption",
          "autoSelectActiveOption",
          be,
        ],
        requireSelection: [
          T.HasDecoratorInputTransform,
          "requireSelection",
          "requireSelection",
          be,
        ],
        panelWidth: "panelWidth",
        disableRipple: [
          T.HasDecoratorInputTransform,
          "disableRipple",
          "disableRipple",
          be,
        ],
        classList: [T.None, "class", "classList"],
        hideSingleSelectionIndicator: [
          T.HasDecoratorInputTransform,
          "hideSingleSelectionIndicator",
          "hideSingleSelectionIndicator",
          be,
        ],
      },
      outputs: {
        optionSelected: "optionSelected",
        opened: "opened",
        closed: "closed",
        optionActivated: "optionActivated",
      },
      exportAs: ["matAutocomplete"],
      standalone: !0,
      features: [Se([{ provide: Qs, useExisting: e }]), Ee, G],
      ngContentSelectors: xv,
      decls: 1,
      vars: 0,
      consts: [
        ["panel", ""],
        [
          "role",
          "listbox",
          1,
          "mat-mdc-autocomplete-panel",
          "mdc-menu-surface",
          "mdc-menu-surface--open",
          3,
          "id",
          "ngClass",
        ],
      ],
      template: function (n, o) {
        n & 1 && (qt(), oe(0, wv, 3, 5, "ng-template"));
      },
      dependencies: [bl],
      styles: [
        "div.mat-mdc-autocomplete-panel{width:100%;max-height:256px;visibility:hidden;transform-origin:center top;overflow:auto;padding:8px 0;box-sizing:border-box;position:static;border-radius:var(--mat-autocomplete-container-shape);box-shadow:var(--mat-autocomplete-container-elevation-shadow);background-color:var(--mat-autocomplete-background-color)}.cdk-high-contrast-active div.mat-mdc-autocomplete-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel{border-top-left-radius:0;border-top-right-radius:0}.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:center bottom}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible{visibility:visible}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden{visibility:hidden;pointer-events:none}mat-autocomplete{display:none}",
      ],
      encapsulation: 2,
      data: { animation: [Cv] },
      changeDetection: 0,
    }));
  let t = e;
  return t;
})();
var Iv = { provide: $r, useExisting: zt(() => ba), multi: !0 };
var xu = new g("mat-autocomplete-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    let t = m(ht);
    return () => t.scrollStrategies.reposition();
  },
});
function Dv(t) {
  return () => t.scrollStrategies.reposition();
}
var Av = { provide: xu, deps: [ht], useFactory: Dv },
  ba = (() => {
    let e = class e {
      constructor(i, n, o, s, a, c, l, d, u, p, b) {
        (this._element = i),
          (this._overlay = n),
          (this._viewContainerRef = o),
          (this._zone = s),
          (this._changeDetectorRef = a),
          (this._dir = l),
          (this._formField = d),
          (this._document = u),
          (this._viewportRuler = p),
          (this._defaults = b),
          (this._componentDestroyed = !1),
          (this._manuallyFloatingLabel = !1),
          (this._viewportSubscription = Oe.EMPTY),
          (this._canOpenOnNextFocus = !0),
          (this._closeKeyEventStream = new L()),
          (this._windowBlurHandler = () => {
            this._canOpenOnNextFocus =
              this._document.activeElement !== this._element.nativeElement ||
              this.panelOpen;
          }),
          (this._onChange = () => {}),
          (this._onTouched = () => {}),
          (this.position = "auto"),
          (this.autocompleteAttribute = "off"),
          (this._aboveClass = "mat-mdc-autocomplete-panel-above"),
          (this._overlayAttached = !1),
          (this.optionSelections = Nt(() => {
            let _ = this.autocomplete ? this.autocomplete.options : null;
            return _
              ? _.changes.pipe(
                  pt(_),
                  K(() => ve(..._.map((x) => x.onSelectionChange))),
                )
              : this._zone.onStable.pipe(
                  ie(1),
                  K(() => this.optionSelections),
                );
          })),
          (this._handlePanelKeydown = (_) => {
            ((_.keyCode === 27 && !dt(_)) ||
              (_.keyCode === 38 && dt(_, "altKey"))) &&
              (this._pendingAutoselectedOption &&
                (this._updateNativeInputValue(
                  this._valueBeforeAutoSelection ?? "",
                ),
                (this._pendingAutoselectedOption = null)),
              this._closeKeyEventStream.next(),
              this._resetActiveItem(),
              _.stopPropagation(),
              _.preventDefault());
          }),
          (this._trackedModal = null),
          (this._scrollStrategy = c);
      }
      ngAfterViewInit() {
        let i = this._getWindow();
        typeof i < "u" &&
          this._zone.runOutsideAngular(() =>
            i.addEventListener("blur", this._windowBlurHandler),
          );
      }
      ngOnChanges(i) {
        i.position &&
          this._positionStrategy &&
          (this._setStrategyPositions(this._positionStrategy),
          this.panelOpen && this._overlayRef.updatePosition());
      }
      ngOnDestroy() {
        let i = this._getWindow();
        typeof i < "u" &&
          i.removeEventListener("blur", this._windowBlurHandler),
          this._viewportSubscription.unsubscribe(),
          (this._componentDestroyed = !0),
          this._destroyPanel(),
          this._closeKeyEventStream.complete(),
          this._clearFromModal();
      }
      get panelOpen() {
        return this._overlayAttached && this.autocomplete.showPanel;
      }
      openPanel() {
        this._openPanelInternal();
      }
      closePanel() {
        if (
          (this._resetLabel(),
          !!this._overlayAttached &&
            (this.panelOpen &&
              this._zone.run(() => {
                this.autocomplete.closed.emit();
              }),
            (this.autocomplete._isOpen = this._overlayAttached = !1),
            (this._pendingAutoselectedOption = null),
            this._overlayRef &&
              this._overlayRef.hasAttached() &&
              (this._overlayRef.detach(),
              this._closingActionsSubscription.unsubscribe()),
            this._updatePanelState(),
            this._componentDestroyed || this._changeDetectorRef.detectChanges(),
            this._trackedModal))
        ) {
          let i = this.autocomplete.id;
          Or(this._trackedModal, "aria-owns", i);
        }
      }
      updatePosition() {
        this._overlayAttached && this._overlayRef.updatePosition();
      }
      get panelClosingActions() {
        return ve(
          this.optionSelections,
          this.autocomplete._keyManager.tabOut.pipe(
            z(() => this._overlayAttached),
          ),
          this._closeKeyEventStream,
          this._getOutsideClickStream(),
          this._overlayRef
            ? this._overlayRef
                .detachments()
                .pipe(z(() => this._overlayAttached))
            : C(),
        ).pipe(w((i) => (i instanceof bn ? i : null)));
      }
      get activeOption() {
        return this.autocomplete && this.autocomplete._keyManager
          ? this.autocomplete._keyManager.activeItem
          : null;
      }
      _getOutsideClickStream() {
        return ve(
          Lt(this._document, "click"),
          Lt(this._document, "auxclick"),
          Lt(this._document, "touchend"),
        ).pipe(
          z((i) => {
            let n = Tt(i),
              o = this._formField
                ? this._formField.getConnectedOverlayOrigin().nativeElement
                : null,
              s = this.connectedTo
                ? this.connectedTo.elementRef.nativeElement
                : null;
            return (
              this._overlayAttached &&
              n !== this._element.nativeElement &&
              this._document.activeElement !== this._element.nativeElement &&
              (!o || !o.contains(n)) &&
              (!s || !s.contains(n)) &&
              !!this._overlayRef &&
              !this._overlayRef.overlayElement.contains(n)
            );
          }),
        );
      }
      writeValue(i) {
        Promise.resolve(null).then(() => this._assignOptionValue(i));
      }
      registerOnChange(i) {
        this._onChange = i;
      }
      registerOnTouched(i) {
        this._onTouched = i;
      }
      setDisabledState(i) {
        this._element.nativeElement.disabled = i;
      }
      _handleKeydown(i) {
        let n = i.keyCode,
          o = dt(i);
        if (
          (n === 27 && !o && i.preventDefault(),
          (this._valueOnLastKeydown = this._element.nativeElement.value),
          this.activeOption && n === 13 && this.panelOpen && !o)
        )
          this.activeOption._selectViaInteraction(),
            this._resetActiveItem(),
            i.preventDefault();
        else if (this.autocomplete) {
          let s = this.autocomplete._keyManager.activeItem,
            a = n === 38 || n === 40;
          n === 9 || (a && !o && this.panelOpen)
            ? this.autocomplete._keyManager.onKeydown(i)
            : a &&
              this._canOpen() &&
              this._openPanelInternal(this._valueOnLastKeydown),
            (a || this.autocomplete._keyManager.activeItem !== s) &&
              (this._scrollToOption(
                this.autocomplete._keyManager.activeItemIndex || 0,
              ),
              this.autocomplete.autoSelectActiveOption &&
                this.activeOption &&
                (this._pendingAutoselectedOption ||
                  (this._valueBeforeAutoSelection = this._valueOnLastKeydown),
                (this._pendingAutoselectedOption = this.activeOption),
                this._assignOptionValue(this.activeOption.value)));
        }
      }
      _handleInput(i) {
        let n = i.target,
          o = n.value;
        if (
          (n.type === "number" && (o = o == "" ? null : parseFloat(o)),
          this._previousValue !== o)
        ) {
          if (
            ((this._previousValue = o),
            (this._pendingAutoselectedOption = null),
            (!this.autocomplete || !this.autocomplete.requireSelection) &&
              this._onChange(o),
            !o)
          )
            this._clearPreviousSelectedOption(null, !1);
          else if (this.panelOpen && !this.autocomplete.requireSelection) {
            let s = this.autocomplete.options?.find((a) => a.selected);
            if (s) {
              let a = this._getDisplayValue(s.value);
              o !== a && s.deselect(!1);
            }
          }
          if (this._canOpen() && this._document.activeElement === i.target) {
            let s =
              this._valueOnLastKeydown ?? this._element.nativeElement.value;
            (this._valueOnLastKeydown = null), this._openPanelInternal(s);
          }
        }
      }
      _handleFocus() {
        this._canOpenOnNextFocus
          ? this._canOpen() &&
            ((this._previousValue = this._element.nativeElement.value),
            this._attachOverlay(this._previousValue),
            this._floatLabel(!0))
          : (this._canOpenOnNextFocus = !0);
      }
      _handleClick() {
        this._canOpen() && !this.panelOpen && this._openPanelInternal();
      }
      _floatLabel(i = !1) {
        this._formField &&
          this._formField.floatLabel === "auto" &&
          (i
            ? this._formField._animateAndLockLabel()
            : (this._formField.floatLabel = "always"),
          (this._manuallyFloatingLabel = !0));
      }
      _resetLabel() {
        this._manuallyFloatingLabel &&
          (this._formField && (this._formField.floatLabel = "auto"),
          (this._manuallyFloatingLabel = !1));
      }
      _subscribeToClosingActions() {
        let i = this._zone.onStable.pipe(ie(1)),
          n = this.autocomplete.options.changes.pipe(
            $(() => this._positionStrategy.reapplyLastPosition()),
            Za(0),
          );
        return ve(i, n)
          .pipe(
            K(
              () => (
                this._zone.run(() => {
                  let o = this.panelOpen;
                  this._resetActiveItem(),
                    this._updatePanelState(),
                    this._changeDetectorRef.detectChanges(),
                    this.panelOpen && this._overlayRef.updatePosition(),
                    o !== this.panelOpen &&
                      (this.panelOpen
                        ? this._emitOpened()
                        : this.autocomplete.closed.emit());
                }),
                this.panelClosingActions
              ),
            ),
            ie(1),
          )
          .subscribe((o) => this._setValueAndClose(o));
      }
      _emitOpened() {
        this.autocomplete.opened.emit();
      }
      _destroyPanel() {
        this._overlayRef &&
          (this.closePanel(),
          this._overlayRef.dispose(),
          (this._overlayRef = null));
      }
      _getDisplayValue(i) {
        let n = this.autocomplete;
        return n && n.displayWith ? n.displayWith(i) : i;
      }
      _assignOptionValue(i) {
        let n = this._getDisplayValue(i);
        i == null && this._clearPreviousSelectedOption(null, !1),
          this._updateNativeInputValue(n ?? "");
      }
      _updateNativeInputValue(i) {
        this._formField
          ? (this._formField._control.value = i)
          : (this._element.nativeElement.value = i),
          (this._previousValue = i);
      }
      _setValueAndClose(i) {
        let n = this.autocomplete,
          o = i ? i.source : this._pendingAutoselectedOption;
        o
          ? (this._clearPreviousSelectedOption(o),
            this._assignOptionValue(o.value),
            this._onChange(o.value),
            n._emitSelectEvent(o),
            this._element.nativeElement.focus())
          : n.requireSelection &&
            this._element.nativeElement.value !== this._valueOnAttach &&
            (this._clearPreviousSelectedOption(null),
            this._assignOptionValue(null),
            n._animationDone
              ? n._animationDone
                  .pipe(ie(1))
                  .subscribe(() => this._onChange(null))
              : this._onChange(null)),
          this.closePanel();
      }
      _clearPreviousSelectedOption(i, n) {
        this.autocomplete?.options?.forEach((o) => {
          o !== i && o.selected && o.deselect(n);
        });
      }
      _openPanelInternal(i = this._element.nativeElement.value) {
        if ((this._attachOverlay(i), this._floatLabel(), this._trackedModal)) {
          let n = this.autocomplete.id;
          Ys(this._trackedModal, "aria-owns", n);
        }
      }
      _attachOverlay(i) {
        this.autocomplete;
        let n = this._overlayRef;
        n
          ? (this._positionStrategy.setOrigin(this._getConnectedElement()),
            n.updateSize({ width: this._getPanelWidth() }))
          : ((this._portal = new _i(
              this.autocomplete.template,
              this._viewContainerRef,
              { id: this._formField?.getLabelId() },
            )),
            (n = this._overlay.create(this._getOverlayConfig())),
            (this._overlayRef = n),
            (this._viewportSubscription = this._viewportRuler
              .change()
              .subscribe(() => {
                this.panelOpen &&
                  n &&
                  n.updateSize({ width: this._getPanelWidth() });
              }))),
          n &&
            !n.hasAttached() &&
            (n.attach(this._portal),
            (this._valueOnAttach = i),
            (this._valueOnLastKeydown = null),
            (this._closingActionsSubscription =
              this._subscribeToClosingActions()));
        let o = this.panelOpen;
        (this.autocomplete._isOpen = this._overlayAttached = !0),
          this.autocomplete._setColor(this._formField?.color),
          this._updatePanelState(),
          this._applyModalPanelOwnership(),
          this.panelOpen && o !== this.panelOpen && this._emitOpened();
      }
      _updatePanelState() {
        if ((this.autocomplete._setVisibility(), this.panelOpen)) {
          let i = this._overlayRef;
          this._keydownSubscription ||
            (this._keydownSubscription = i
              .keydownEvents()
              .subscribe(this._handlePanelKeydown)),
            this._outsideClickSubscription ||
              (this._outsideClickSubscription = i
                .outsidePointerEvents()
                .subscribe());
        } else
          this._keydownSubscription?.unsubscribe(),
            this._outsideClickSubscription?.unsubscribe(),
            (this._keydownSubscription = this._outsideClickSubscription = null);
      }
      _getOverlayConfig() {
        return new An({
          positionStrategy: this._getOverlayPosition(),
          scrollStrategy: this._scrollStrategy(),
          width: this._getPanelWidth(),
          direction: this._dir ?? void 0,
          panelClass: this._defaults?.overlayPanelClass,
        });
      }
      _getOverlayPosition() {
        let i = this._overlay
          .position()
          .flexibleConnectedTo(this._getConnectedElement())
          .withFlexibleDimensions(!1)
          .withPush(!1);
        return this._setStrategyPositions(i), (this._positionStrategy = i), i;
      }
      _setStrategyPositions(i) {
        let n = [
            {
              originX: "start",
              originY: "bottom",
              overlayX: "start",
              overlayY: "top",
            },
            {
              originX: "end",
              originY: "bottom",
              overlayX: "end",
              overlayY: "top",
            },
          ],
          o = this._aboveClass,
          s = [
            {
              originX: "start",
              originY: "top",
              overlayX: "start",
              overlayY: "bottom",
              panelClass: o,
            },
            {
              originX: "end",
              originY: "top",
              overlayX: "end",
              overlayY: "bottom",
              panelClass: o,
            },
          ],
          a;
        this.position === "above"
          ? (a = s)
          : this.position === "below"
            ? (a = n)
            : (a = [...n, ...s]),
          i.withPositions(a);
      }
      _getConnectedElement() {
        return this.connectedTo
          ? this.connectedTo.elementRef
          : this._formField
            ? this._formField.getConnectedOverlayOrigin()
            : this._element;
      }
      _getPanelWidth() {
        return this.autocomplete.panelWidth || this._getHostWidth();
      }
      _getHostWidth() {
        return this._getConnectedElement().nativeElement.getBoundingClientRect()
          .width;
      }
      _resetActiveItem() {
        let i = this.autocomplete;
        if (i.autoActiveFirstOption) {
          let n = -1;
          for (let o = 0; o < i.options.length; o++)
            if (!i.options.get(o).disabled) {
              n = o;
              break;
            }
          i._keyManager.setActiveItem(n);
        } else i._keyManager.setActiveItem(-1);
      }
      _canOpen() {
        let i = this._element.nativeElement;
        return !i.readOnly && !i.disabled && !this.autocompleteDisabled;
      }
      _getWindow() {
        return this._document?.defaultView || window;
      }
      _scrollToOption(i) {
        let n = this.autocomplete,
          o = Cd(i, n.options, n.optionGroups);
        if (i === 0 && o === 1) n._setScrollTop(0);
        else if (n.panel) {
          let s = n.options.toArray()[i];
          if (s) {
            let a = s._getHostElement(),
              c = Ed(
                a.offsetTop,
                a.offsetHeight,
                n._getScrollTop(),
                n.panel.nativeElement.offsetHeight,
              );
            n._setScrollTop(c);
          }
        }
      }
      _applyModalPanelOwnership() {
        let i = this._element.nativeElement.closest(
          'body > .cdk-overlay-container [aria-modal="true"]',
        );
        if (!i) return;
        let n = this.autocomplete.id;
        this._trackedModal && Or(this._trackedModal, "aria-owns", n),
          Ys(i, "aria-owns", n),
          (this._trackedModal = i);
      }
      _clearFromModal() {
        if (this._trackedModal) {
          let i = this.autocomplete.id;
          Or(this._trackedModal, "aria-owns", i), (this._trackedModal = null);
        }
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(
        y(X),
        y(ht),
        y(vt),
        y(M),
        y(ye),
        y(xu),
        y(Tr, 8),
        y(gu, 9),
        y(N, 8),
        y(In),
        y(yu, 8),
      );
    }),
      (e.ɵdir = Q({
        type: e,
        selectors: [
          ["input", "matAutocomplete", ""],
          ["textarea", "matAutocomplete", ""],
        ],
        hostAttrs: [1, "mat-mdc-autocomplete-trigger"],
        hostVars: 7,
        hostBindings: function (n, o) {
          n & 1 &&
            de("focusin", function () {
              return o._handleFocus();
            })("blur", function () {
              return o._onTouched();
            })("input", function (a) {
              return o._handleInput(a);
            })("keydown", function (a) {
              return o._handleKeydown(a);
            })("click", function () {
              return o._handleClick();
            }),
            n & 2 &&
              Te("autocomplete", o.autocompleteAttribute)(
                "role",
                o.autocompleteDisabled ? null : "combobox",
              )("aria-autocomplete", o.autocompleteDisabled ? null : "list")(
                "aria-activedescendant",
                o.panelOpen && o.activeOption ? o.activeOption.id : null,
              )(
                "aria-expanded",
                o.autocompleteDisabled ? null : o.panelOpen.toString(),
              )(
                "aria-controls",
                o.autocompleteDisabled || !o.panelOpen || o.autocomplete == null
                  ? null
                  : o.autocomplete.id,
              )("aria-haspopup", o.autocompleteDisabled ? null : "listbox");
        },
        inputs: {
          autocomplete: [T.None, "matAutocomplete", "autocomplete"],
          position: [T.None, "matAutocompletePosition", "position"],
          connectedTo: [T.None, "matAutocompleteConnectedTo", "connectedTo"],
          autocompleteAttribute: [
            T.None,
            "autocomplete",
            "autocompleteAttribute",
          ],
          autocompleteDisabled: [
            T.HasDecoratorInputTransform,
            "matAutocompleteDisabled",
            "autocompleteDisabled",
            be,
          ],
        },
        exportAs: ["matAutocompleteTrigger"],
        standalone: !0,
        features: [Se([Iv]), Ee, Ke],
      }));
    let t = e;
    return t;
  })(),
  wu = (() => {
    let e = class e {};
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵmod = k({ type: e })),
      (e.ɵinj = F({ providers: [Av], imports: [mu, ea, Ae, Pi, qr, ea, Ae] }));
    let t = e;
    return t;
  })();
var Cu = (() => {
  let e = class e {
    constructor(i) {
      (this.http = i),
        (this.apiUrl = "https://secure.geonames.org/searchJSON"),
        (this.username = "antontestapp");
    }
    autocompleteCity(i) {
      let n = new He()
        .set("name", i)
        .set("username", this.username)
        .set("featureClass", "P")
        .set("maxRows", 5);
      return i.length >= 2
        ? this.http
            .get(this.apiUrl, { params: n })
            .pipe(w((o) => o.geonames || []))
        : new re();
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(h(Ct));
  }),
    (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
function Tv(t, e) {
  if ((t & 1 && (A(0, "mat-option", 5), ne(1), O()), t & 2)) {
    let r = e.$implicit;
    se("value", r), j(), fl("", r.name, ", ", r.countryName, " ");
  }
}
var Eu = (() => {
  let e = class e {
    constructor(i, n) {
      (this.citySearchService = i),
        (this.cityService = n),
        (this.checkedCity = { name: "", lat: "", lng: "" }),
        (this.search = new Qd(this.checkedCity.name));
    }
    ngOnInit() {
      this.cities$ = this.search.valueChanges.pipe(
        Vt(),
        w((i) => (typeof i == "string" ? i : i.name)),
        $((i) => this.search.setValue(i)),
        K((i) => this.citySearchService.autocompleteCity(i || "")),
        $(
          (i) =>
            (this.checkedCity = {
              name: i[0]?.name || this.search.value,
              lat: this.checkedCity.lat || i[0]?.lat || "",
              lng: this.checkedCity.lng || i[0]?.lng || "",
            }),
        ),
      );
    }
    onOptionSelected(i) {
      let n = i.option.value;
      this.checkedCity = E(f({}, this.checkedCity), {
        name: n.name,
        lat: n.lat,
        lng: n.lng,
      });
    }
    searchCity() {
      this.search.setValue(this.checkedCity.name),
        this.cityService.setCityInfo(f({}, this.checkedCity));
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(y(Cu), y(gi));
  }),
    (e.ɵcmp = W({
      type: e,
      selectors: [["app-search"]],
      standalone: !0,
      features: [G],
      decls: 9,
      vars: 4,
      consts: [
        ["auto", "matAutocomplete"],
        [1, "search"],
        [1, "serach__form"],
        [
          "type",
          "text",
          "placeholder",
          "City search",
          1,
          "search__input",
          3,
          "formControl",
          "matAutocomplete",
        ],
        ["autoActiveFirstOption", "", 3, "optionSelected"],
        [3, "value"],
        ["text", "Search", 3, "click"],
      ],
      template: function (n, o) {
        if (n & 1) {
          let s = Mi();
          A(0, "div", 1)(1, "form", 2),
            V(2, "input", 3),
            A(3, "mat-autocomplete", 4, 0),
            de("optionSelected", function (c) {
              return Ht(s), Wt(o.onOptionSelected(c));
            }),
            Gt(5, Tv, 2, 3, "mat-option", 5, hl),
            ee(7, "async"),
            O()(),
            A(8, "app-common-button", 6),
            de("click", function () {
              return Ht(s), Wt(o.searchCity());
            }),
            O()();
        }
        if (n & 2) {
          let s = Eo(4);
          j(2),
            se("formControl", o.search)("matAutocomplete", s),
            j(3),
            Yt(ae(7, 2, o.cities$));
        }
      },
      dependencies: [
        Pr,
        nu,
        Jd,
        Hr,
        Wd,
        Gd,
        sa,
        $e,
        iu,
        oa,
        vu,
        wu,
        bu,
        Mr,
        ba,
      ],
      styles: [
        ".search[_ngcontent-%COMP%]{min-width:100%;display:flex}.search__input[_ngcontent-%COMP%]{border:0;border-radius:5px;height:38px;width:clamp(120px,31.63vw,257px);margin-right:28px;padding:3px 14px;outline:none}@media (min-width: 768px){.search[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.search__input[_ngcontent-%COMP%]{margin-right:0;margin-bottom:17px}}",
      ],
    }));
  let t = e;
  return t;
})();
var Su = (() => {
  let e = class e {
    constructor() {
      (this.currentTime$ = new J(new Date())),
        Ya(1e3)
          .pipe(w(() => new Date()))
          .subscribe((i) => this.currentTime$.next(i));
    }
    getCurrentTime() {
      return this.currentTime$;
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
var Iu = (() => {
  let e = class e {
    constructor(i) {
      this.currentTimeService = i;
    }
    ngOnInit() {
      this.currentTime$ = this.currentTimeService.getCurrentTime();
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(y(Su));
  }),
    (e.ɵcmp = W({
      type: e,
      selectors: [["app-title"]],
      standalone: !0,
      features: [G],
      decls: 10,
      vars: 12,
      consts: [[1, "title"]],
      template: function (n, o) {
        n & 1 &&
          (A(0, "div", 0)(1, "span"),
          ne(2),
          ee(3, "async"),
          ee(4, "date"),
          O(),
          V(5, "br"),
          A(6, "span"),
          ne(7),
          ee(8, "async"),
          ee(9, "date"),
          O()()),
          n & 2 &&
            (j(2),
            ze(bt(4, 4, ae(3, 2, o.currentTime$), "shortTime")),
            j(5),
            ze(bt(9, 9, ae(8, 7, o.currentTime$), "EEEE, d MMMM y")));
      },
      dependencies: [Jt, $e],
      styles: [
        ".title[_ngcontent-%COMP%]{text-align:center;font-size:clamp(31px,5.67vw,41px)}@media (min-width: 768px){.title[_ngcontent-%COMP%]{text-align:start}}",
      ],
    }));
  let t = e;
  return t;
})();
var yi = Ye(et.GET_HOURLY_FORECAST, lt()),
  Rn = Ye(et.GET_HOURLY_FORECAST_SUCCESS, lt()),
  On = Ye(et.GET_HOURLY_FORECAST_FAILURE, lt());
var Kr = "hourly",
  Fv = { data: null, isLoading: !1, error: null },
  Au = Er(
    Fv,
    ct(yi, (t) => E(f({}, t), { isLoading: !0 })),
    ct(Rn, (t, { forecast: e }) => E(f({}, t), { data: e, isLoading: !1 })),
    ct(On, (t, { errMsg: e }) => E(f({}, t), { isLoading: !1, error: e })),
  );
var Qr = Cr(Kr),
  Ru = ke(Qr, (t) => t.data?.forecast.forecastday[0]),
  Ou = ke(Qr, (t) => t.isLoading),
  Tu = ke(Qr, (t) => t.error),
  Mu = ke(Qr, (t) => t.data);
var Fu = (() => {
  let e = class e {
    transform(i) {
      if (!i) return i;
      let n = new Date();
      return i.filter((o) => {
        let s = new Date(o.time_epoch * 1e3);
        return s.getDay() !== n.getDay() ? !0 : s.getHours() >= n.getHours();
      });
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵpipe = nl({ name: "filterByTime", type: e, pure: !0, standalone: !0 }));
  let t = e;
  return t;
})();
var ku = (() => {
  let e = class e {
    constructor() {
      this.syncTable = {
        1e3: "c01",
        1003: "c02",
        1006: "c03",
        1009: "c04",
        1030: "a01",
        1063: "r01",
        1066: "s01",
        1069: "s05",
        1072: "d02",
        1087: "t04",
        1114: "s03",
        1117: "s05",
        1135: "a05",
        1147: "a06",
        1150: "d01",
        1153: "d01",
        1168: "d01",
        1171: "d03",
        1180: "r01",
        1183: "r01",
        1186: "r02",
        1189: "r02",
        1192: "r03",
        1195: "r03",
        1198: "f01",
        1201: "f01",
        1204: "s05",
        1207: "s05",
        1210: "s01",
        1213: "s01",
        1216: "s02",
        1219: "s02",
        1222: "s03",
        1225: "s03",
        1237: "s06",
        1240: "r04",
        1243: "r05",
        1246: "r06",
        1249: "r03",
        1252: "r03",
        1255: "s01",
        1258: "s02",
        1261: "s06",
        1264: "s06",
        1273: "t01",
        1276: "t03",
        1279: "s02",
        1282: "s02",
      };
    }
    getIconPath(i, n) {
      return `${this.syncTable[i]}${n ? "d" : "n"}.png`;
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
function Pv(t, e) {
  t & 1 && V(0, "mat-progress-bar", 0);
}
function Nv(t, e) {
  t & 1 && (A(0, "p"), ne(1, "Something went wrong"), O());
}
function Lv(t, e) {
  if (
    (t & 1 &&
      (A(0, "div", 2)(1, "p"),
      ne(2),
      ee(3, "date"),
      O(),
      V(4, "img", 4),
      A(5, "p"),
      ne(6),
      O()()),
    t & 2)
  ) {
    let r = e.$implicit,
      i = ue(3);
    se("@enterTrigger", void 0),
      j(2),
      ze(bt(3, 4, r.time_epoch * 1e3, "H:mm")),
      j(2),
      se(
        "src",
        i.basicPathToIcons +
          i.syncIconsService.getIconPath(r.condition.code, r.is_day),
        Ln,
      ),
      j(2),
      Xt("", r.temp_c, "\xB0C");
  }
}
function jv(t, e) {
  t & 1 && (A(0, "p", 3), ne(1, "No data found"), O());
}
function Vv(t, e) {
  if (
    (t & 1 &&
      (A(0, "div", 1),
      Gt(1, Lv, 7, 7, "div", 2, zn, !1, jv, 2, 0, "p", 3),
      ee(4, "async"),
      ee(5, "filterByTime"),
      O()),
    t & 2)
  ) {
    let r,
      i = ue(2);
    j(), Yt(ae(5, 3, (r = ae(4, 1, i.forecast$)) == null ? null : r.hour));
  }
}
function Uv(t, e) {
  if (
    (t & 1 && (oe(0, Nv, 2, 0, "p"), ee(1, "async"), oe(2, Vv, 6, 5)), t & 2)
  ) {
    let r = ue();
    _e(0, ae(1, 1, r.error$) ? 0 : 2);
  }
}
var Pu = (() => {
  let e = class e {
    constructor(i, n, o) {
      (this.store = i),
        (this.cityService = n),
        (this.syncIconsService = o),
        (this.basicPathToIcons = "assets/images/icons/forecast/");
    }
    ngOnInit() {
      (this.city$ = this.cityService.getCityInfo().subscribe((i) => {
        this.store.dispatch(yi({ city: i }));
      })),
        (this.forecast$ = this.store.select(Ru)),
        (this.isLoading$ = this.store.select(Ou)),
        (this.error$ = this.store.select(Tu));
    }
    ngOnDestroy() {
      this.city$.unsubscribe();
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(y(ce), y(gi), y(ku));
  }),
    (e.ɵcmp = W({
      type: e,
      selectors: [["app-hourly-forecast"]],
      standalone: !0,
      features: [G],
      decls: 3,
      vars: 3,
      consts: [
        ["mode", "buffer"],
        [1, "forecast_cards"],
        [1, "forecast_cards__card"],
        [1, "forecast_cards__no_data"],
        ["alt", "icon", 3, "src"],
      ],
      template: function (n, o) {
        n & 1 &&
          (oe(0, Pv, 1, 0, "mat-progress-bar", 0),
          ee(1, "async"),
          oe(2, Uv, 3, 3)),
          n & 2 && _e(0, ae(1, 1, o.isLoading$) ? 0 : 2);
      },
      dependencies: [$e, Jt, kr, Fr, Fu],
      styles: [
        "[_nghost-%COMP%]{width:100%}.forecast_cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.forecast_cards__card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:space-around}.forecast_cards__card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.forecast_cards__no_data[_ngcontent-%COMP%]{font-size:40px;width:100%;text-align:center;grid-column:2}@media (min-width: 768px){.forecast_cards[_ngcontent-%COMP%]{display:flex;flex-direction:row;overflow-x:auto;scrollbar-width:thin;scrollbar-color:#4b4a4a rgba(0,0,0,0)}.forecast_cards__card[_ngcontent-%COMP%]{height:clamp(120px,15.58vw,168px);min-width:9.35vw;max-width:120px}}",
      ],
      data: {
        animation: [
          ei("enterTrigger", [
            xt(":enter", [
              Fe({ opacity: 0 }),
              rt("1000ms", Fe({ opacity: 1 })),
            ]),
          ]),
        ],
      },
    }));
  let t = e;
  return t;
})();
var bi = (function (t) {
  return (t.DAILY = "daily"), (t.HOURLY = "hourly"), t;
})(bi || {});
function Bv(t, e) {
  t & 1 && V(0, "app-daily-forecast");
}
function zv(t, e) {
  t & 1 && V(0, "app-hourly-forecast");
}
var Nu = (() => {
  let e = class e {
    constructor() {
      (this.forecastMode = bi.DAILY), (this.modes = bi);
    }
    changeForecastToHourly() {
      this.forecastMode = bi.HOURLY;
    }
    changeForecastToDaily() {
      this.forecastMode = bi.DAILY;
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵcmp = W({
      type: e,
      selectors: [["app-weather-page"]],
      standalone: !0,
      features: [G],
      decls: 10,
      vars: 1,
      consts: [
        [1, "header"],
        [1, "additional"],
        [1, "additional__select"],
        ["text", "Daily", 3, "click"],
        ["text", "Hourly", 3, "click"],
        [1, "forecast"],
      ],
      template: function (n, o) {
        n & 1 &&
          (A(0, "div", 0),
          V(1, "app-title")(2, "app-search"),
          O(),
          A(3, "section", 1)(4, "div", 2)(5, "app-common-button", 3),
          de("click", function () {
            return o.changeForecastToDaily();
          }),
          O(),
          A(6, "app-common-button", 4),
          de("click", function () {
            return o.changeForecastToHourly();
          }),
          O()()(),
          A(7, "section", 5),
          oe(8, Bv, 1, 0, "app-daily-forecast")(9, zv, 1, 0),
          O()),
          n & 2 &&
            (j(8),
            _e(
              8,
              o.forecastMode === o.modes.DAILY
                ? 8
                : o.forecastMode === o.modes.HOURLY
                  ? 9
                  : -1,
            ));
      },
      dependencies: [Ad, Eu, Iu, Pr, Pu],
      styles: [
        "[_nghost-%COMP%]{height:100%;display:flex;flex-direction:column;padding:12px 1rem}.header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%}.additional[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;width:100%;align-items:center;padding-top:20px;padding-bottom:38px}.additional__select[_ngcontent-%COMP%]{display:flex;width:clamp(120px,31.63vw,257px);justify-content:center;gap:36px;height:100%}.forecast[_ngcontent-%COMP%]{display:flex;width:100%;padding:10px}@media (min-width: 440px){.forecast[_ngcontent-%COMP%]{padding:10px 50px}}@media (min-width: 768px){[_nghost-%COMP%]{padding:50px 79px}.header[_ngcontent-%COMP%]{flex-direction:row;justify-content:space-between}.additional[_ngcontent-%COMP%]{flex-direction:row;justify-content:flex-end}.additional__select[_ngcontent-%COMP%]{align-items:end}.additional__calendar[_ngcontent-%COMP%]{height:100%;align-items:start}.forecast[_ngcontent-%COMP%]{margin:0 0 -50px -79px;width:calc(100% + 158px);background-color:#d9d9d933;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);padding:18px 40px}}",
      ],
    }));
  let t = e;
  return t;
})();
var $v = (t) => ({ "background-image": t }),
  Lu = (() => {
    let e = class e {
      constructor(i) {
        (this.store = i), (this.path = "assets/images/backgrounds/");
      }
      ngOnInit() {
        this.theme$ = this.store.select(nd);
      }
      getImageByCode(i) {
        let n = "";
        return (
          i.code === 900
            ? (n += "900")
            : i.code % 800
              ? (n += i.code)
              : (n += Math.floor(i.code / 10) * 10),
          `${n}${i.icon.at(-1)}.jpg`
        );
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(y(ce));
    }),
      (e.ɵcmp = W({
        type: e,
        selectors: [["app-background-layout"]],
        standalone: !0,
        features: [G],
        decls: 5,
        vars: 7,
        consts: [
          [1, "background", 3, "ngStyle"],
          [1, "container"],
        ],
        template: function (n, o) {
          n & 1 &&
            (A(0, "main", 0),
            ee(1, "async"),
            ee(2, "async"),
            A(3, "article", 1),
            V(4, "router-outlet"),
            O()()),
            n & 2 &&
              se(
                "ngStyle",
                pl(
                  5,
                  $v,
                  ae(1, 1, o.theme$)
                    ? "url(" +
                        o.path +
                        o.getImageByCode(ae(2, 3, o.theme$)) +
                        ")"
                    : "url(" + o.path + "def.jpg)",
                ),
              );
        },
        dependencies: [rn, xl, $e],
        styles: [
          ".background[_ngcontent-%COMP%]{width:100%;min-height:100%;display:flex;background-position:center;background-repeat:no-repeat;background-size:cover;background-attachment:fixed;align-items:center;justify-content:center;padding:10px 20px;transition:background-image 2s}.background[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{background-color:#d9d9d933;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);width:100%;min-width:280px;max-width:1147px}@media (min-width: 768px){.background[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{height:647px}}",
        ],
        changeDetection: 0,
      }));
    let t = e;
    return t;
  })();
var ju = [
  {
    path: "forecast",
    component: Lu,
    title: "Forecast",
    children: [{ path: "", component: Nu }],
  },
  { path: "**", redirectTo: "forecast" },
];
var Mn = "PERFORM_ACTION",
  Hv = "REFRESH",
  Hu = "RESET",
  Wu = "ROLLBACK",
  Gu = "COMMIT",
  Yu = "SWEEP",
  qu = "TOGGLE_ACTION",
  Wv = "SET_ACTIONS_ACTIVE",
  Xu = "JUMP_TO_STATE",
  Zu = "JUMP_TO_ACTION",
  Fa = "IMPORT_STATE",
  Ku = "LOCK_CHANGES",
  Qu = "PAUSE_RECORDING",
  xi = class {
    constructor(e, r) {
      if (
        ((this.action = e),
        (this.timestamp = r),
        (this.type = Mn),
        typeof e.type > "u")
      )
        throw new Error(
          'Actions may not have an undefined "type" property. Have you misspelled a constant?',
        );
    }
  },
  xa = class {
    constructor() {
      this.type = Hv;
    }
  },
  wa = class {
    constructor(e) {
      (this.timestamp = e), (this.type = Hu);
    }
  },
  Ca = class {
    constructor(e) {
      (this.timestamp = e), (this.type = Wu);
    }
  },
  Ea = class {
    constructor(e) {
      (this.timestamp = e), (this.type = Gu);
    }
  },
  Sa = class {
    constructor() {
      this.type = Yu;
    }
  },
  Ia = class {
    constructor(e) {
      (this.id = e), (this.type = qu);
    }
  };
var Da = class {
    constructor(e) {
      (this.index = e), (this.type = Xu);
    }
  },
  Aa = class {
    constructor(e) {
      (this.actionId = e), (this.type = Zu);
    }
  },
  Ra = class {
    constructor(e) {
      (this.nextLiftedState = e), (this.type = Fa);
    }
  },
  Oa = class {
    constructor(e) {
      (this.status = e), (this.type = Ku);
    }
  },
  Ta = class {
    constructor(e) {
      (this.status = e), (this.type = Qu);
    }
  };
var io = new g("@ngrx/store-devtools Options"),
  Vu = new g("@ngrx/store-devtools Initial Config");
function Ju() {
  return null;
}
var Gv = "NgRx Store DevTools";
function Yv(t) {
  let e = {
      maxAge: !1,
      monitor: Ju,
      actionSanitizer: void 0,
      stateSanitizer: void 0,
      name: Gv,
      serialize: !1,
      logOnly: !1,
      autoPause: !1,
      trace: !1,
      traceLimit: 75,
      features: {
        pause: !0,
        lock: !0,
        persist: !0,
        export: !0,
        import: "custom",
        jump: !0,
        skip: !0,
        reorder: !0,
        dispatch: !0,
        test: !0,
      },
      connectInZone: !1,
    },
    r = typeof t == "function" ? t() : t,
    i = r.logOnly ? { pause: !0, export: !0, test: !0 } : !1,
    n = r.features || i || e.features;
  n.import === !0 && (n.import = "custom");
  let o = Object.assign({}, e, { features: n }, r);
  if (o.maxAge && o.maxAge < 2)
    throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${o.maxAge}`);
  return o;
}
function Uu(t, e) {
  return t.filter((r) => e.indexOf(r) < 0);
}
function eh(t) {
  let { computedStates: e, currentStateIndex: r } = t;
  if (r >= e.length) {
    let { state: n } = e[e.length - 1];
    return n;
  }
  let { state: i } = e[r];
  return i;
}
function Tn(t) {
  return new xi(t, +Date.now());
}
function qv(t, e) {
  return Object.keys(e).reduce((r, i) => {
    let n = Number(i);
    return (r[n] = th(t, e[n], n)), r;
  }, {});
}
function th(t, e, r) {
  return E(f({}, e), { action: t(e.action, r) });
}
function Xv(t, e) {
  return e.map((r, i) => ({ state: ih(t, r.state, i), error: r.error }));
}
function ih(t, e, r) {
  return t(e, r);
}
function nh(t) {
  return t.predicate || t.actionsSafelist || t.actionsBlocklist;
}
function Zv(t, e, r, i) {
  let n = [],
    o = {},
    s = [];
  return (
    t.stagedActionIds.forEach((a, c) => {
      let l = t.actionsById[a];
      l &&
        ((c && ka(t.computedStates[c], l, e, r, i)) ||
          ((o[a] = l), n.push(a), s.push(t.computedStates[c])));
    }),
    E(f({}, t), { stagedActionIds: n, actionsById: o, computedStates: s })
  );
}
function ka(t, e, r, i, n) {
  let o = r && !r(t, e.action),
    s = i && !e.action.type.match(i.map((c) => Bu(c)).join("|")),
    a = n && e.action.type.match(n.map((c) => Bu(c)).join("|"));
  return o || s || a;
}
function Bu(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function rh(t) {
  return { ngZone: t ? m(M) : null, connectInZone: t };
}
var no = (() => {
    let e = class e extends qe {};
    (e.ɵfac = (() => {
      let i;
      return function (o) {
        return (i || (i = je(e)))(o || e);
      };
    })()),
      (e.ɵprov = v({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  Jr = { START: "START", DISPATCH: "DISPATCH", STOP: "STOP", ACTION: "ACTION" },
  Ma = new g("@ngrx/store-devtools Redux Devtools Extension"),
  oh = (() => {
    let e = class e {
      constructor(i, n, o) {
        (this.config = n),
          (this.dispatcher = o),
          (this.zoneConfig = rh(this.config.connectInZone)),
          (this.devtoolsExtension = i),
          this.createActionStreams();
      }
      notify(i, n) {
        if (this.devtoolsExtension)
          if (i.type === Mn) {
            if (n.isLocked || n.isPaused) return;
            let o = eh(n);
            if (
              nh(this.config) &&
              ka(
                o,
                i,
                this.config.predicate,
                this.config.actionsSafelist,
                this.config.actionsBlocklist,
              )
            )
              return;
            let s = this.config.stateSanitizer
                ? ih(this.config.stateSanitizer, o, n.currentStateIndex)
                : o,
              a = this.config.actionSanitizer
                ? th(this.config.actionSanitizer, i, n.nextActionId)
                : i;
            this.sendToReduxDevtools(() => this.extensionConnection.send(a, s));
          } else {
            let o = E(f({}, n), {
              stagedActionIds: n.stagedActionIds,
              actionsById: this.config.actionSanitizer
                ? qv(this.config.actionSanitizer, n.actionsById)
                : n.actionsById,
              computedStates: this.config.stateSanitizer
                ? Xv(this.config.stateSanitizer, n.computedStates)
                : n.computedStates,
            });
            this.sendToReduxDevtools(() =>
              this.devtoolsExtension.send(
                null,
                o,
                this.getExtensionConfig(this.config),
              ),
            );
          }
      }
      createChangesObservable() {
        return this.devtoolsExtension
          ? new re((i) => {
              let n = this.zoneConfig.connectInZone
                ? this.zoneConfig.ngZone.runOutsideAngular(() =>
                    this.devtoolsExtension.connect(
                      this.getExtensionConfig(this.config),
                    ),
                  )
                : this.devtoolsExtension.connect(
                    this.getExtensionConfig(this.config),
                  );
              return (
                (this.extensionConnection = n),
                n.init(),
                n.subscribe((o) => i.next(o)),
                n.unsubscribe
              );
            })
          : Ne;
      }
      createActionStreams() {
        let i = this.createChangesObservable().pipe(tl()),
          n = i.pipe(z((d) => d.type === Jr.START)),
          o = i.pipe(z((d) => d.type === Jr.STOP)),
          s = i.pipe(
            z((d) => d.type === Jr.DISPATCH),
            w((d) => this.unwrapAction(d.payload)),
            Le((d) =>
              d.type === Fa
                ? this.dispatcher.pipe(
                    z((u) => u.type === wr),
                    Wa(1e3),
                    jt(1e3),
                    w(() => d),
                    me(() => C(d)),
                    ie(1),
                  )
                : C(d),
            ),
          ),
          c = i
            .pipe(
              z((d) => d.type === Jr.ACTION),
              w((d) => this.unwrapAction(d.payload)),
            )
            .pipe(Ce(o)),
          l = s.pipe(Ce(o));
        (this.start$ = n.pipe(Ce(o))),
          (this.actions$ = this.start$.pipe(K(() => c))),
          (this.liftedActions$ = this.start$.pipe(K(() => l)));
      }
      unwrapAction(i) {
        return typeof i == "string" ? (0, eval)(`(${i})`) : i;
      }
      getExtensionConfig(i) {
        let n = {
          name: i.name,
          features: i.features,
          serialize: i.serialize,
          autoPause: i.autoPause ?? !1,
          trace: i.trace ?? !1,
          traceLimit: i.traceLimit ?? 75,
        };
        return i.maxAge !== !1 && (n.maxAge = i.maxAge), n;
      }
      sendToReduxDevtools(i) {
        try {
          i();
        } catch (n) {
          console.warn(
            "@ngrx/store-devtools: something went wrong inside the redux devtools",
            n,
          );
        }
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(Ma), h(io), h(no));
    }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  to = { type: dn },
  Kv = "@ngrx/store-devtools/recompute",
  Qv = { type: Kv };
function sh(t, e, r, i, n) {
  if (i) return { state: r, error: "Interrupted by an error up the chain" };
  let o = r,
    s;
  try {
    o = t(r, e);
  } catch (a) {
    (s = a.toString()), n.handleError(a);
  }
  return { state: o, error: s };
}
function eo(t, e, r, i, n, o, s, a, c) {
  if (e >= t.length && t.length === o.length) return t;
  let l = t.slice(0, e),
    d = o.length - (c ? 1 : 0);
  for (let u = e; u < d; u++) {
    let p = o[u],
      b = n[p].action,
      _ = l[u - 1],
      x = _ ? _.state : i,
      I = _ ? _.error : void 0,
      Z = s.indexOf(p) > -1 ? _ : sh(r, b, x, I, a);
    l.push(Z);
  }
  return c && l.push(t[t.length - 1]), l;
}
function Jv(t, e) {
  return {
    monitorState: e(void 0, {}),
    nextActionId: 1,
    actionsById: { 0: Tn(to) },
    stagedActionIds: [0],
    skippedActionIds: [],
    committedState: t,
    currentStateIndex: 0,
    computedStates: [],
    isLocked: !1,
    isPaused: !1,
  };
}
function e_(t, e, r, i, n = {}) {
  return (o) => (s, a) => {
    let {
      monitorState: c,
      actionsById: l,
      nextActionId: d,
      stagedActionIds: u,
      skippedActionIds: p,
      committedState: b,
      currentStateIndex: _,
      computedStates: x,
      isLocked: I,
      isPaused: S,
    } = s || e;
    s || (l = Object.create(l));
    function Z(q) {
      let B = q,
        Pe = u.slice(1, B + 1);
      for (let Re = 0; Re < Pe.length; Re++)
        if (x[Re + 1].error) {
          (B = Re), (Pe = u.slice(1, B + 1));
          break;
        } else delete l[Pe[Re]];
      (p = p.filter((Re) => Pe.indexOf(Re) === -1)),
        (u = [0, ...u.slice(B + 1)]),
        (b = x[B].state),
        (x = x.slice(B)),
        (_ = _ > B ? _ - B : 0);
    }
    function Xe() {
      (l = { 0: Tn(to) }),
        (d = 1),
        (u = [0]),
        (p = []),
        (b = x[_].state),
        (_ = 0),
        (x = []);
    }
    let D = 0;
    switch (a.type) {
      case Ku: {
        (I = a.status), (D = 1 / 0);
        break;
      }
      case Qu: {
        (S = a.status),
          S
            ? ((u = [...u, d]),
              (l[d] = new xi({ type: "@ngrx/devtools/pause" }, +Date.now())),
              d++,
              (D = u.length - 1),
              (x = x.concat(x[x.length - 1])),
              _ === u.length - 2 && _++,
              (D = 1 / 0))
            : Xe();
        break;
      }
      case Hu: {
        (l = { 0: Tn(to) }),
          (d = 1),
          (u = [0]),
          (p = []),
          (b = t),
          (_ = 0),
          (x = []);
        break;
      }
      case Gu: {
        Xe();
        break;
      }
      case Wu: {
        (l = { 0: Tn(to) }), (d = 1), (u = [0]), (p = []), (_ = 0), (x = []);
        break;
      }
      case qu: {
        let { id: q } = a;
        p.indexOf(q) === -1
          ? (p = [q, ...p])
          : (p = p.filter((Pe) => Pe !== q)),
          (D = u.indexOf(q));
        break;
      }
      case Wv: {
        let { start: q, end: B, active: Pe } = a,
          Re = [];
        for (let oo = q; oo < B; oo++) Re.push(oo);
        Pe ? (p = Uu(p, Re)) : (p = [...p, ...Re]), (D = u.indexOf(q));
        break;
      }
      case Xu: {
        (_ = a.index), (D = 1 / 0);
        break;
      }
      case Zu: {
        let q = u.indexOf(a.actionId);
        q !== -1 && (_ = q), (D = 1 / 0);
        break;
      }
      case Yu: {
        (u = Uu(u, p)), (p = []), (_ = Math.min(_, u.length - 1));
        break;
      }
      case Mn: {
        if (I) return s || e;
        if (
          S ||
          (s &&
            ka(
              s.computedStates[_],
              a,
              n.predicate,
              n.actionsSafelist,
              n.actionsBlocklist,
            ))
        ) {
          let B = x[x.length - 1];
          (x = [...x.slice(0, -1), sh(o, a.action, B.state, B.error, r)]),
            (D = 1 / 0);
          break;
        }
        n.maxAge && u.length === n.maxAge && Z(1), _ === u.length - 1 && _++;
        let q = d++;
        (l[q] = a), (u = [...u, q]), (D = u.length - 1);
        break;
      }
      case Fa: {
        ({
          monitorState: c,
          actionsById: l,
          nextActionId: d,
          stagedActionIds: u,
          skippedActionIds: p,
          committedState: b,
          currentStateIndex: _,
          computedStates: x,
          isLocked: I,
          isPaused: S,
        } = a.nextLiftedState);
        break;
      }
      case dn: {
        (D = 0),
          n.maxAge &&
            u.length > n.maxAge &&
            ((x = eo(x, D, o, b, l, u, p, r, S)),
            Z(u.length - n.maxAge),
            (D = 1 / 0));
        break;
      }
      case wr: {
        if (x.filter((B) => B.error).length > 0)
          (D = 0),
            n.maxAge &&
              u.length > n.maxAge &&
              ((x = eo(x, D, o, b, l, u, p, r, S)),
              Z(u.length - n.maxAge),
              (D = 1 / 0));
        else {
          if (!S && !I) {
            _ === u.length - 1 && _++;
            let B = d++;
            (l[B] = new xi(a, +Date.now())),
              (u = [...u, B]),
              (D = u.length - 1),
              (x = eo(x, D, o, b, l, u, p, r, S));
          }
          (x = x.map((B) => E(f({}, B), { state: o(B.state, Qv) }))),
            (_ = u.length - 1),
            n.maxAge && u.length > n.maxAge && Z(u.length - n.maxAge),
            (D = 1 / 0);
        }
        break;
      }
      default: {
        D = 1 / 0;
        break;
      }
    }
    return (
      (x = eo(x, D, o, b, l, u, p, r, S)),
      (c = i(c, a)),
      {
        monitorState: c,
        actionsById: l,
        nextActionId: d,
        stagedActionIds: u,
        skippedActionIds: p,
        committedState: b,
        currentStateIndex: _,
        computedStates: x,
        isLocked: I,
        isPaused: S,
      }
    );
  };
}
var zu = (() => {
  let e = class e {
    constructor(i, n, o, s, a, c, l, d) {
      let u = Jv(l, d.monitor),
        p = e_(l, u, c, d.monitor, d),
        b = ve(
          ve(n.asObservable().pipe(Di(1)), s.actions$).pipe(w(Tn)),
          i,
          s.liftedActions$,
        ).pipe(kn(Fn)),
        _ = o.pipe(w(p)),
        x = rh(d.connectInZone),
        I = new $a(1);
      (this.liftedStateSubscription = b
        .pipe(
          it(_),
          $u(x),
          Bt(
            ({ state: Xe }, [D, q]) => {
              let B = q(Xe, D);
              return (
                D.type !== Mn &&
                  nh(d) &&
                  (B = Zv(
                    B,
                    d.predicate,
                    d.actionsSafelist,
                    d.actionsBlocklist,
                  )),
                s.notify(D, B),
                { state: B, action: D }
              );
            },
            { state: u, action: null },
          ),
        )
        .subscribe(({ state: Xe, action: D }) => {
          if ((I.next(Xe), D.type === Mn)) {
            let q = D.action;
            a.next(q);
          }
        })),
        (this.extensionStartSubscription = s.start$
          .pipe($u(x))
          .subscribe(() => {
            this.refresh();
          }));
      let S = I.asObservable(),
        Z = S.pipe(w(eh));
      Object.defineProperty(Z, "state", {
        value: an(Z, { manualCleanup: !0, requireSync: !0 }),
      }),
        (this.dispatcher = i),
        (this.liftedState = S),
        (this.state = Z);
    }
    ngOnDestroy() {
      this.liftedStateSubscription.unsubscribe(),
        this.extensionStartSubscription.unsubscribe();
    }
    dispatch(i) {
      this.dispatcher.next(i);
    }
    next(i) {
      this.dispatcher.next(i);
    }
    error(i) {}
    complete() {}
    performAction(i) {
      this.dispatch(new xi(i, +Date.now()));
    }
    refresh() {
      this.dispatch(new xa());
    }
    reset() {
      this.dispatch(new wa(+Date.now()));
    }
    rollback() {
      this.dispatch(new Ca(+Date.now()));
    }
    commit() {
      this.dispatch(new Ea(+Date.now()));
    }
    sweep() {
      this.dispatch(new Sa());
    }
    toggleAction(i) {
      this.dispatch(new Ia(i));
    }
    jumpToAction(i) {
      this.dispatch(new Aa(i));
    }
    jumpToState(i) {
      this.dispatch(new Da(i));
    }
    importState(i) {
      this.dispatch(new Ra(i));
    }
    lockChanges(i) {
      this.dispatch(new Oa(i));
    }
    pauseRecording(i) {
      this.dispatch(new Ta(i));
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(h(no), h(qe), h(At), h(oh), h(Rt), h(gt), h(un), h(io));
  }),
    (e.ɵprov = v({ token: e, factory: e.ɵfac }));
  let t = e;
  return t;
})();
function $u({ ngZone: t, connectInZone: e }) {
  return (r) =>
    e
      ? new re((i) =>
          r.subscribe({
            next: (n) => t.run(() => i.next(n)),
            error: (n) => t.run(() => i.error(n)),
            complete: () => t.run(() => i.complete()),
          }),
        )
      : r;
}
var t_ = new g("@ngrx/store-devtools Is Devtools Extension or Monitor Present");
function i_(t, e) {
  return !!t || e.monitor !== Ju;
}
function n_() {
  let t = "__REDUX_DEVTOOLS_EXTENSION__";
  return typeof window == "object" && typeof window[t] < "u" ? window[t] : null;
}
function ah(t = {}) {
  return ge([
    oh,
    no,
    zu,
    { provide: Vu, useValue: t },
    { provide: t_, deps: [Ma, io], useFactory: i_ },
    { provide: Ma, useFactory: n_ },
    { provide: io, deps: [Vu], useFactory: Yv },
    { provide: hi, deps: [zu], useFactory: r_ },
    { provide: ui, useExisting: no },
  ]);
}
function r_(t) {
  return t.state;
}
var o_ = { dispatch: !0, functional: !1, useEffectsErrorHandler: !0 },
  ro = "__@ngrx/effects_create__";
function wi(t, e = {}) {
  let r = e.functional ? t : t(),
    i = f(f({}, o_), e);
  return Object.defineProperty(r, ro, { value: i }), r;
}
function s_(t) {
  return Object.getOwnPropertyNames(t)
    .filter((i) =>
      t[i] && t[i].hasOwnProperty(ro)
        ? t[i][ro].hasOwnProperty("dispatch")
        : !1,
    )
    .map((i) => {
      let n = t[i][ro];
      return f({ propertyName: i }, n);
    });
}
function a_(t) {
  return s_(t);
}
function lh(t) {
  return Object.getPrototypeOf(t);
}
function l_(t) {
  return (
    !!t.constructor &&
    t.constructor.name !== "Object" &&
    t.constructor.name !== "Function"
  );
}
function ch(t) {
  return typeof t == "function";
}
function c_(t) {
  return t.filter(ch);
}
function d_(t, e, r) {
  let i = lh(t),
    o = !!i && i.constructor.name !== "Object" ? i.constructor.name : null,
    s = a_(t).map(
      ({ propertyName: a, dispatch: c, useEffectsErrorHandler: l }) => {
        let d = typeof t[a] == "function" ? t[a]() : t[a],
          u = l ? r(d, e) : d;
        return c === !1
          ? u.pipe(qa())
          : u
              .pipe(Ja())
              .pipe(
                w((b) => ({
                  effect: t[a],
                  notification: b,
                  propertyName: a,
                  sourceName: o,
                  sourceInstance: t,
                })),
              );
      },
    );
  return ve(...s);
}
var u_ = 10;
function dh(t, e, r = u_) {
  return t.pipe(
    me((i) => (e && e.handleError(i), r <= 1 ? t : dh(t, e, r - 1))),
  );
}
var Ci = (() => {
  let e = class e extends re {
    constructor(i) {
      super(), i && (this.source = i);
    }
    lift(i) {
      let n = new e();
      return (n.source = this), (n.operator = i), n;
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(h(Rt));
  }),
    (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
function Ei(...t) {
  return z((e) =>
    t.some((r) => (typeof r == "string" ? r === e.type : r.type === e.type)),
  );
}
var iE = new g("@ngrx/effects Internal Root Guard"),
  nE = new g("@ngrx/effects User Provided Effects"),
  rE = new g("@ngrx/effects Internal Root Effects"),
  oE = new g("@ngrx/effects Internal Root Effects Instances"),
  sE = new g("@ngrx/effects Internal Feature Effects"),
  aE = new g("@ngrx/effects Internal Feature Effects Instance Groups"),
  h_ = new g("@ngrx/effects Effects Error Handler", {
    providedIn: "root",
    factory: () => dh,
  }),
  f_ = "@ngrx/effects/init",
  p_ = Ye(f_);
function m_(t, e) {
  if (t.notification.kind === "N") {
    let r = t.notification.value;
    !g_(r) &&
      e.handleError(
        new Error(`Effect ${v_(t)} dispatched an invalid action: ${__(r)}`),
      );
  }
}
function g_(t) {
  return typeof t != "function" && t && t.type && typeof t.type == "string";
}
function v_({ propertyName: t, sourceInstance: e, sourceName: r }) {
  let i = typeof e[t] == "function";
  return !!r ? `"${r}.${String(t)}${i ? "()" : ""}"` : `"${String(t)}()"`;
}
function __(t) {
  try {
    return JSON.stringify(t);
  } catch {
    return t;
  }
}
var y_ = "ngrxOnIdentifyEffects";
function b_(t) {
  return Pa(t, y_);
}
var x_ = "ngrxOnRunEffects";
function w_(t) {
  return Pa(t, x_);
}
var C_ = "ngrxOnInitEffects";
function E_(t) {
  return Pa(t, C_);
}
function Pa(t, e) {
  return t && e in t && typeof t[e] == "function";
}
var uh = (() => {
  let e = class e extends L {
    constructor(i, n) {
      super(), (this.errorHandler = i), (this.effectsErrorHandler = n);
    }
    addEffects(i) {
      this.next(i);
    }
    toActions() {
      return this.pipe(
        ho((i) => (l_(i) ? lh(i) : i)),
        pe((i) => i.pipe(ho(S_))),
        pe((i) => {
          let n = i.pipe(
              Ut((s) => I_(this.errorHandler, this.effectsErrorHandler)(s)),
              w((s) => (m_(s, this.errorHandler), s.notification)),
              z((s) => s.kind === "N" && s.value != null),
              Ka(),
            ),
            o = i.pipe(
              ie(1),
              z(E_),
              w((s) => s.ngrxOnInitEffects()),
            );
          return ve(n, o);
        }),
      );
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(h(gt), h(h_));
  }),
    (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
function S_(t) {
  return b_(t) ? t.ngrxOnIdentifyEffects() : "";
}
function I_(t, e) {
  return (r) => {
    let i = d_(r, t, e);
    return w_(r) ? r.ngrxOnRunEffects(i) : i;
  };
}
var D_ = (() => {
  let e = class e {
    get isStarted() {
      return !!this.effectsSubscription;
    }
    constructor(i, n) {
      (this.effectSources = i),
        (this.store = n),
        (this.effectsSubscription = null);
    }
    start() {
      this.effectsSubscription ||
        (this.effectsSubscription = this.effectSources
          .toActions()
          .subscribe(this.store));
    }
    ngOnDestroy() {
      this.effectsSubscription &&
        (this.effectsSubscription.unsubscribe(),
        (this.effectsSubscription = null));
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(h(uh), h(ce));
  }),
    (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
function hh(...t) {
  let e = t.flat(),
    r = c_(e);
  return ge([
    r,
    {
      provide: mt,
      multi: !0,
      useValue: () => {
        m(cn), m(br, { optional: !0 });
        let i = m(D_),
          n = m(uh),
          o = !i.isStarted;
        o && i.start();
        for (let s of e) {
          let a = ch(s) ? m(s) : s;
          n.addEffects(a);
        }
        o && m(ce).dispatch(p_());
      },
    },
  ]);
}
var La = {};
Ba(La, { displayErrorAlert: () => R_, loadDaily: () => A_ });
var Na = {
  API_KEY_WEATHERBIT: "45be6ce1040e42c79f4260b2f3da52de",
  API_KEY_WEATHERAPI: "621ce140721f4563bba202211243103",
};
var Pt = {
  API_KEY_DAILY_FORECAST: Na.API_KEY_WEATHERBIT,
  API_KEY_HOURLY_FORECAST: Na.API_KEY_WEATHERAPI,
  API_URL_DAILY_FORECAST: "https://api.weatherbit.io/v2.0/forecast/daily",
  API_URL_HOURLY_FORECAST: "https://api.weatherapi.com/v1/forecast.json",
};
var fh = (() => {
  let e = class e {
    constructor(i) {
      this.http = i;
    }
    getForecast(i) {
      let n = `${Pt.API_URL_DAILY_FORECAST}?`;
      return (
        i.lat || i.lng
          ? (n = `${n}lat=${(+i.lat).toFixed(3)}&lon=${(+i.lng).toFixed(3)}`)
          : (n = `${n}city=${i.name}`),
        (n = `${n}&key=${Pt.API_KEY_DAILY_FORECAST}`),
        this.http.get(n)
      );
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(h(Ct));
  }),
    (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
var A_ = wi(
    (t = m(Ci), e = m(fh), r = m(ce)) =>
      t.pipe(
        Ei(fi),
        it(r.pipe(hn(Dr))),
        Ut((i) =>
          Number(i[1]?.lat).toFixed(3) === Number(i[0].city.lat).toFixed(3) &&
          Number(i[1]?.lon).toFixed(3) === Number(i[0].city.lng).toFixed(3)
            ? C(pn({ forecast: i[1] }))
            : e.getForecast(i[0].city).pipe(
                w((n) => pn({ forecast: n })),
                me((n) => C(mn({ errMsg: n.message }))),
              ),
        ),
      ),
    { functional: !0 },
  ),
  R_ = wi(
    () =>
      m(Ci).pipe(
        Ei(mn),
        $(({ errMsg: t }) => alert(t)),
      ),
    { functional: !0, dispatch: !1 },
  );
var ja = {};
Ba(ja, { displayErrorAlert: () => T_, loadHourly: () => O_ });
var ph = (() => {
  let e = class e {
    constructor(i) {
      this.http = i;
    }
    getForecast(i) {
      let n = `${Pt.API_URL_HOURLY_FORECAST}?`;
      return (
        `${i}${Pt.API_KEY_HOURLY_FORECAST}`,
        i.lat || i.lng
          ? (n = `${n}q=${(+i.lat).toFixed(3)},${(+i.lng).toFixed(3)}`)
          : (n = `${n}q=${i.name}`),
        (n = `${n}&key=${Pt.API_KEY_HOURLY_FORECAST}`),
        this.http.get(n)
      );
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(h(Ct));
  }),
    (e.ɵprov = v({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
var O_ = wi(
    (t = m(Ci), e = m(ph), r = m(ce)) =>
      t.pipe(
        Ei(yi),
        it(r.pipe(hn(Mu))),
        Ut((i) =>
          Number(i[1]?.location.lat).toFixed(2) ===
            Number(i[0].city.lat).toFixed(2) &&
          Number(i[1]?.location.lon).toFixed(2) ===
            Number(i[0].city.lng).toFixed(2)
            ? C(Rn({ forecast: i[1] }))
            : e.getForecast(i[0].city).pipe(
                w((n) => Rn({ forecast: n })),
                me((n) => C(On({ errMsg: n.message }))),
              ),
        ),
      ),
    { functional: !0 },
  ),
  T_ = wi(
    () =>
      m(Ci).pipe(
        Ei(On),
        $(({ errMsg: t }) => alert(t)),
      ),
    { functional: !0, dispatch: !1 },
  );
var M_ = "@",
  F_ = (() => {
    let e = class e {
      constructor(i, n, o, s, a) {
        (this.doc = i),
          (this.delegate = n),
          (this.zone = o),
          (this.animationType = s),
          (this.moduleImpl = a),
          (this._rendererFactoryPromise = null),
          (this.scheduler = m(ll, { optional: !0 }));
      }
      ngOnDestroy() {
        this._engine?.flush();
      }
      loadImpl() {
        return (this.moduleImpl ?? import("./chunk-ULULQ4KN.js"))
          .catch((n) => {
            throw new H(5300, !1);
          })
          .then(({ ɵcreateEngine: n, ɵAnimationRendererFactory: o }) => {
            this._engine = n(this.animationType, this.doc, this.scheduler);
            let s = new o(this.delegate, this._engine, this.zone);
            return (this.delegate = s), s;
          });
      }
      createRenderer(i, n) {
        let o = this.delegate.createRenderer(i, n);
        if (o.ɵtype === 0) return o;
        typeof o.throwOnSyntheticProps == "boolean" &&
          (o.throwOnSyntheticProps = !1);
        let s = new Va(o);
        return (
          n?.data?.animation &&
            !this._rendererFactoryPromise &&
            (this._rendererFactoryPromise = this.loadImpl()),
          this._rendererFactoryPromise
            ?.then((a) => {
              let c = a.createRenderer(i, n);
              s.use(c);
            })
            .catch((a) => {
              s.use(o);
            }),
          s
        );
      }
      begin() {
        this.delegate.begin?.();
      }
      end() {
        this.delegate.end?.();
      }
      whenRenderingDone() {
        return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
      }
    };
    (e.ɵfac = function (n) {
      _o();
    }),
      (e.ɵprov = v({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  Va = class {
    constructor(e) {
      (this.delegate = e), (this.replay = []), (this.ɵtype = 1);
    }
    use(e) {
      if (((this.delegate = e), this.replay !== null)) {
        for (let r of this.replay) r(e);
        this.replay = null;
      }
    }
    get data() {
      return this.delegate.data;
    }
    destroy() {
      (this.replay = null), this.delegate.destroy();
    }
    createElement(e, r) {
      return this.delegate.createElement(e, r);
    }
    createComment(e) {
      return this.delegate.createComment(e);
    }
    createText(e) {
      return this.delegate.createText(e);
    }
    get destroyNode() {
      return this.delegate.destroyNode;
    }
    appendChild(e, r) {
      this.delegate.appendChild(e, r);
    }
    insertBefore(e, r, i, n) {
      this.delegate.insertBefore(e, r, i, n);
    }
    removeChild(e, r, i) {
      this.delegate.removeChild(e, r, i);
    }
    selectRootElement(e, r) {
      return this.delegate.selectRootElement(e, r);
    }
    parentNode(e) {
      return this.delegate.parentNode(e);
    }
    nextSibling(e) {
      return this.delegate.nextSibling(e);
    }
    setAttribute(e, r, i, n) {
      this.delegate.setAttribute(e, r, i, n);
    }
    removeAttribute(e, r, i) {
      this.delegate.removeAttribute(e, r, i);
    }
    addClass(e, r) {
      this.delegate.addClass(e, r);
    }
    removeClass(e, r) {
      this.delegate.removeClass(e, r);
    }
    setStyle(e, r, i, n) {
      this.delegate.setStyle(e, r, i, n);
    }
    removeStyle(e, r, i) {
      this.delegate.removeStyle(e, r, i);
    }
    setProperty(e, r, i) {
      this.shouldReplay(r) && this.replay.push((n) => n.setProperty(e, r, i)),
        this.delegate.setProperty(e, r, i);
    }
    setValue(e, r) {
      this.delegate.setValue(e, r);
    }
    listen(e, r, i) {
      return (
        this.shouldReplay(r) && this.replay.push((n) => n.listen(e, r, i)),
        this.delegate.listen(e, r, i)
      );
    }
    shouldReplay(e) {
      return this.replay !== null && e.startsWith(M_);
    }
  };
function Ua(t = "animations") {
  return (
    bo("NgAsyncAnimations"),
    ge([
      {
        provide: jn,
        useFactory: (e, r, i) => new F_(e, r, i, t),
        deps: [N, tr, M],
      },
      {
        provide: Ve,
        useValue: t === "noop" ? "NoopAnimations" : "BrowserAnimations",
      },
    ])
  );
}
var mh = {
  providers: [
    Cc(ju, Ec()),
    Qc(),
    Us({ name: Sr, reducer: ed }),
    Us({ name: Kr, reducer: Au }),
    kl(),
    ah({ maxAge: 25, logOnly: !ki() }),
    hh(La, ja),
    Ua(),
    Ua(),
  ],
};
var gh = (() => {
  let e = class e {
    constructor() {
      this.title = "check-weather";
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵcmp = W({
      type: e,
      selectors: [["app-root"]],
      standalone: !0,
      features: [G],
      decls: 1,
      vars: 0,
      template: function (n, o) {
        n & 1 && V(0, "router-outlet");
      },
      dependencies: [rn],
    }));
  let t = e;
  return t;
})();
Bl(gh, mh).catch((t) => console.error(t));
