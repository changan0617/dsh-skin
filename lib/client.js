window.__ModuleLoader__.load({
  id: 'dsh-skin',
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

    // ===== 鐨偆 CSS =====
    const SKIN_CSS = `/* ============================================================================
   DeepSeek Harness 棣栭〉椋庢牸鑱婂ぉ鑳屾櫙锛堟繁鑹蹭富棰橈級v6
   瀵圭収 www.deepseek.com/harness/en/ 棣栭〉瀹炴祴杩樺師锛?   1. 鍩哄簳娓愬彉锛氶《閮ㄦ繁钃?(#0e1a2c) 鈫?涓绋嶄寒 鈫?搴曢儴杩戦粦 (#0a0a0a)
      锛堝疄娴嬮椤?y=3%:rgb(15,27,44) y=20%:rgb(17,30,47) y=65%:rgb(12,16,24)
        y=95%:rgb(9,10,10)锛屽搴?--ds-color-bg-page:#0a0a0a锛?   2. 鐧借壊鐐圭嚎缃戞牸 + 闆炬祦 + 椴搁奔鐢?harness-fluid.js锛圕anvas + DOM锛夊疄鐜?   3. 鑱婂ぉ杈撳叆鍖猴細绉婚櫎榛戣壊閬僵銆佽緭鍏ュ崱鐗囧崐閫忔槑鐜荤拑
   搴旂敤鏂瑰紡锛氭浛鎹?dsh-web-frontend/dist/assets/index-*.css 涓?   dsh-client-ui-theme/lib/styles/base.css 鏈熬鐨勬棫琛ヤ竵鍧楋紱鍒锋柊椤甸潰鍚庣敓鏁堛€?   ============================================================================ */

/* ---- 1. html 鐢诲竷鍏滃簳锛氫笌 body 鍚屾娓愬彉锛屾潨缁濋粦杈?婊氬姩闇插簳 ---- */
html {
  background: linear-gradient(180deg, #0e1a2c 0%, #111f31 25%, #0d1724 55%, #0a0e15 82%, #0a0a0a 100%) fixed;
}

/* ---- 2. body 鍩哄簳娓愬彉锛堢偣闃?缃戞牸宸茬敱 Canvas 缁樺埗锛屾澶勫彧鏀惧簳鑹诧級 ---- */
body[data-ds-dark-theme] {
  background-color: #0a0e15;
  background-image: linear-gradient(180deg, #0e1a2c 0%, #111f31 25%, #0d1724 55%, #0a0e15 82%, #0a0a0a 100%);
}

/* ---- 3. 渚ц竟鏍忓崐閫忔槑娣辨捣钃濓紝铻嶅叆椤甸潰搴曞浘 ---- */
body[data-ds-dark-theme] {
  --dsw-specific-sidebar-fill: rgba(9, 19, 32, 0.62);
}
body[data-ds-dark-theme] .pI_x6G_sidebarCol {
  background: rgba(9, 19, 32, 0.62);
}

/* ---- 4. 搴旂敤妗嗘灦锛氶€忔槑鑳屾櫙 + 鑷垚灞傚彔涓婁笅鏂囷紙Canvas 鑳屾櫙灞備綅浜庡叾涓嬶級 ---- */
body[data-ds-dark-theme] .pI_x6G_frame {
  background: transparent;
  isolation: isolate;
}

/* ---- 5. 鑱婂ぉ鍖?/ 鍙充晶闈㈡澘鑳屾櫙閫忔槑锛岄湶鍑洪椤靛紡搴曞浘 ---- */
body[data-ds-dark-theme] .wSkVaW_root,
body[data-ds-dark-theme] .ydkMvW_root {
  background: transparent;
}

/* ---- 6. 鑱婂ぉ杈撳叆鍖猴細绉婚櫎榛戣壊閬僵銆佽緭鍏ュ崱鐗囨敼鍗婇€忔槑鐜荤拑 ---- */
body[data-ds-dark-theme] .wSkVaW_composerSeat {
  background: transparent !important;
}
body[data-ds-dark-theme] .uV2eYG_card {
  background: rgba(10, 20, 34, 0.58);
  backdrop-filter: blur(18px) saturate(1.12);
  -webkit-backdrop-filter: blur(18px) saturate(1.12);
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.22);
}
body[data-ds-dark-theme] ._7yHdaG_panel {
  background: rgba(10, 20, 34, 0.5);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}`;

    // ===== 鑳屾櫙鑴氭湰锛堟祦浣?+ 缃戞牸 + 椴搁奔鐐逛簯锛?=====
    function startSkin() {

  'use strict';
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  window.__harnessFluid = window.__harnessFluid || { state: 'pending' };

  var WHALE_PATH_D = "M22.9168 1.43018C22.6713 1.31018 22.5658 1.53918 22.4223 1.65519C22.3733 1.69269 22.3318 1.74169 22.2903 1.78669C21.9317 2.1697 21.5127 2.42121 20.9657 2.39121C20.1657 2.34621 19.4827 2.59771 18.8787 3.20973C18.7502 2.45521 18.3236 2.0047 17.6746 1.71569C17.3351 1.56568 16.9916 1.41518 16.7536 1.08867C16.5876 0.856163 16.5421 0.597155 16.4591 0.341647C16.4061 0.187643 16.3536 0.0301382 16.1761 0.00363739C15.9836 -0.0263635 15.9081 0.135141 15.8326 0.270145C15.5306 0.822162 15.4136 1.43018 15.4251 2.0462C15.4516 3.43174 16.0366 4.53527 17.1991 5.3203C17.3311 5.4103 17.3651 5.5003 17.3236 5.63181C17.2441 5.90231 17.1501 6.16482 17.0671 6.43533C17.0141 6.60784 16.9351 6.64584 16.7501 6.57033C16.1121 6.30383 15.5611 5.90931 15.074 5.4328C14.2475 4.63328 13.5 3.75075 12.568 3.05973C12.349 2.89822 12.13 2.74822 11.9034 2.60522C10.9524 1.68169 12.028 0.923165 12.277 0.833162C12.5375 0.739159 12.3675 0.41615 11.5259 0.42015C10.6844 0.42365 9.91439 0.705658 8.93286 1.08117C8.78935 1.13767 8.63835 1.17867 8.48384 1.21267C7.59332 1.04367 6.66829 1.00617 5.70226 1.11517C3.88321 1.31768 2.43016 2.1777 1.36213 3.64575C0.0790928 5.4103 -0.222916 7.41536 0.146595 9.50642C0.535106 11.7105 1.66014 13.535 3.38869 14.9616C5.18125 16.4406 7.24581 17.1657 9.60138 17.0266C11.0319 16.9441 12.6245 16.7526 14.421 15.2321C14.874 15.4576 15.3496 15.5476 16.1381 15.6151C16.7456 15.6716 17.3306 15.5851 17.7836 15.4911C18.4931 15.3411 18.4441 14.6841 18.1876 14.5636C16.1081 13.595 16.5646 13.9891 16.1496 13.67C17.2061 12.42 18.8202 10.1979 19.3182 7.17235C19.3672 6.83834 19.4297 6.36783 19.4222 6.09732C19.4182 5.93231 19.4562 5.86831 19.6447 5.84931C20.1657 5.78931 20.6712 5.64681 21.1357 5.3913C22.4833 4.65528 23.0268 3.44624 23.1548 1.9972C23.1738 1.77569 23.1508 1.54668 22.9168 1.43018ZM11.1749 14.4736C9.15936 12.889 8.18184 12.3675 7.77832 12.39C7.40081 12.4125 7.46881 12.8445 7.55182 13.126C7.63882 13.404 7.75182 13.5955 7.91033 13.8396C8.01983 14.0011 8.09533 14.2411 7.80083 14.4216C7.15181 14.8231 6.02327 14.2866 5.97027 14.2601C4.65673 13.4865 3.5587 12.4655 2.78467 11.069C2.03715 9.72493 1.60314 8.28289 1.53164 6.74384C1.51264 6.37233 1.62214 6.24082 1.99215 6.17332C2.47916 6.08332 2.98118 6.06432 3.46769 6.13582C5.52476 6.43633 7.27581 7.35586 8.74385 8.8129C9.58188 9.64243 10.2159 10.634 10.8689 11.6025C11.5634 12.631 12.3105 13.611 13.262 14.4146C13.598 14.6961 13.866 14.9101 14.1225 15.0681C13.349 15.1546 12.058 15.1731 11.1749 14.4746V14.4736ZM12.141 8.25988C12.141 8.09488 12.273 7.96338 12.439 7.96338C12.4765 7.96338 12.5105 7.97088 12.541 7.98188C12.5825 7.99688 12.6205 8.01938 12.6505 8.05338C12.7035 8.10588 12.7335 8.18088 12.7335 8.25988C12.7335 8.42489 12.6015 8.55639 12.4355 8.55639C12.2695 8.55639 12.141 8.42489 12.141 8.25988ZM15.1415 9.79893C14.949 9.87793 14.7565 9.94544 14.5715 9.95294C14.2845 9.96794 13.9715 9.85143 13.8015 9.70893C13.5375 9.48742 13.3485 9.36342 13.2695 8.97691C13.2355 8.8119 13.2545 8.55639 13.2845 8.40989C13.3525 8.09438 13.277 7.89187 13.0545 7.70787C12.8735 7.55786 12.643 7.51636 12.39 7.51636C12.2955 7.51636 12.209 7.47486 12.1445 7.44136C12.039 7.38886 11.9519 7.25735 12.035 7.09585C12.0615 7.04335 12.19 6.91584 12.22 6.89334C12.5635 6.69784 12.9595 6.76184 13.326 6.90834C13.6655 7.04735 13.9225 7.30236 14.292 7.66287C14.6695 8.09838 14.7375 8.21838 14.9525 8.54539C15.1225 8.8009 15.277 9.06341 15.3831 9.36392C15.4471 9.55142 15.3641 9.70493 15.1415 9.79893Z";

  var FRAME_SEL = '.pI_x6G_frame';
  var WAIT_MS = 20000;
  var t0 = Date.now();
  var started = false;

  function findFrame() {
    var f = document.querySelector(FRAME_SEL);
    if (f && typeof f.insertBefore === 'function' && typeof f.appendChild === 'function') return f;
    return null;
  }

  function boot() {
    if (started) return true;
    var frame = findFrame();
    if (!frame) return false;
    started = true;
    try {
      start(frame);
      if (window.__harnessFluid) window.__harnessFluid.state = 'ok';
    } catch (err) {
      started = false;
      if (window.__harnessFluid) window.__harnessFluid.state = 'error:' + err.message;
    }
    return true;
  }

  var iv = setInterval(function () {
    if (boot()) { clearInterval(iv); }
    else if (Date.now() - t0 > WAIT_MS) { clearInterval(iv); }
  }, 400);

  if (window.MutationObserver && !started) {
    new MutationObserver(function () {
      if (started) return;
      boot();
    }).observe(document.documentElement, { childList: true, subtree: true });
  }

  function smoothstep(a, b, x) {
    var t = Math.max(0, Math.min(1, (x - a) / (b - a)));
    return t * t * (3 - 2 * t);
  }
  function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }

  /* ------------------------- 娑撹鍨垫慨瀣 ------------------------- */
  function start(frame) {
    var WHALE_PATH;
    try { WHALE_PATH = new Path2D(WHALE_PATH_D); } catch (e) { WHALE_PATH = null; }

    var host = document.getElementById('root') || document.body;
    var insertBefore = (host.parentNode && typeof host.parentNode.insertBefore === 'function')
      ? function (el) { host.parentNode.insertBefore(el, host); }
      : function (el) { document.body.appendChild(el); };

    var MASK = 'linear-gradient(#000000fc 0%, #000000e8 9%, transparent 100%)';

    /* -- 濞翠椒缍?Canvas閿涘湹ebGL2閿涘苯绨抽柈銊︾瑤闂呮劙浼勭純鈺嬬礉娴ｅ秳绨張鈧惔鏇炵湴閿?-- */
    var fluidCanvas = document.createElement('canvas');
    fluidCanvas.setAttribute('aria-hidden', 'true');
    fluidCanvas.style.cssText =
      'position:fixed;inset:0;z-index:0;pointer-events:none;width:100%;height:100%;display:block;' +
      'mask-image:' + MASK + ';-webkit-mask-image:' + MASK + ';';
    insertBefore(fluidCanvas);

    /* -- 缂冩垶鐗?Canvas閿涘牆绨抽柈銊︾瑤闂呮劙浼勭純鈺嬬礉娴ｅ秳绨ù浣风秼娑斿绗傞敍?-- */
    var gridCanvas = document.createElement('canvas');
    gridCanvas.setAttribute('aria-hidden', 'true');
    gridCanvas.style.cssText =
      'position:fixed;inset:0;z-index:0;pointer-events:none;width:100%;height:100%;display:block;' +
      'mask-image:' + MASK + ';-webkit-mask-image:' + MASK + ';';
    insertBefore(gridCanvas);
    var gctx = gridCanvas.getContext('2d');

    /* -- 妞存悂濂旈悙閫涚隘 Canvas閿涘牊妫ら柆顔惧兊閿?-- */
    var whaleCanvas = document.createElement('canvas');
    whaleCanvas.setAttribute('aria-hidden', 'true');
    whaleCanvas.style.cssText =
      'position:fixed;inset:0;z-index:0;pointer-events:none;width:100%;height:100%;display:block;';
    insertBefore(whaleCanvas);
    var wctx = whaleCanvas.getContext('2d');

    var W = 0, H = 0, DPR = 1;
    var gridPts = [], gridCols = 0, gridRows = 0;
    var contentCX = 0;

    /* ===================== 濞翠椒缍?WebGL2閿涘牓顩绘い?shader 閸樼喐鐗辩粔缁橆槻閿?===================== */
    var FLUID = {
      mouseRadius: 0.09, mouseStrength: 1.8, mouseSmoothing: 0.1, mouseVelocity: 0.2,
      decay: 0.925, distortBoost: 2.2, swirlBoost: 0.8, glowIntensity: 0.13,
      glowC1: [1.0, 0.969, 0.820], glowC2: [0.325, 0.553, 0.792], glowC3: [0.176, 0.267, 0.545],
      speed: 28, scale: 1.77, offsetX: -124, offsetY: -48, grain: 0.005,
      c1: [0.0, 0.0, 0.0], c2: [0.102, 0.220, 0.439], c3: [0.125, 0.290, 0.494], c4: [0.933, 0.847, 0.667], c5: [0.0, 0.0, 0.0],
      lightX: 0.89, lightY: 0.46, lightCore: 0.14, lightHalo: 0.2, vignette: 0.38,
      lightFollow: 0.63, bloomThreshold: 0.61, bloomRange: 0.18, bloomStrength: 0.4
    };
    var gl = null;
    var glPrograms = null;
    var glQuad = null;
    var glFbo = null;
    var glTexSize = { w: 0, h: 0 };
    var glPing = 0;
    var glTimeStart = 0;

    var VERT_SRC = '#version 300 es\nin vec4 a_position;\nout vec2 vUv;\nvoid main() {\n  vUv = a_position.xy * 0.5 + 0.5;\n  gl_Position = a_position;\n}\n';

    var FLOW_SRC = '#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D u_prev;\nuniform vec2 u_mouse;\nuniform vec2 u_velocity;\nuniform float u_brushRadius;\nuniform float u_brushStrength;\nuniform float u_decay;\nout vec4 fragColor;\n\nvoid main() {\n  vec4 prev = texture(u_prev, vUv);\n\n  prev.r *= u_decay;\n  prev.gb = mix(vec2(0.5), prev.gb, u_decay);\n\n  float dist = distance(vUv, u_mouse);\n\n  float influence = exp(-dist * dist / (u_brushRadius * u_brushRadius * 0.5));\n  influence = max(0.0, influence - 0.01);\n\n  float speed = length(u_velocity);\n  float presenceStrength = u_brushStrength * 0.3;\n  float velBonus = min(speed * 3.0, 0.7) * u_brushStrength;\n  float totalStrength = presenceStrength + velBonus;\n\n  prev.r = max(prev.r, influence * totalStrength);\n  float blendAmt = influence * min(totalStrength, 0.4) * 0.3;\n  prev.g = mix(prev.g, clamp(u_velocity.x * 2.0 + 0.5, 0.0, 1.0), blendAmt);\n  prev.b = mix(prev.b, clamp(u_velocity.y * 2.0 + 0.5, 0.0, 1.0), blendAmt);\n\n  fragColor = prev;\n}\n';

    var FLUID_SRC = '#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec3 u_c1, u_c2, u_c3, u_c4, u_c5;\nuniform float u_scale;\nuniform vec2 u_offset;\nuniform float u_grain;\nuniform float u_speed;\nuniform sampler2D u_flowmap;\nuniform float u_distortBoost;\nuniform float u_swirlBoost;\nuniform float u_glowIntensity;\nuniform vec3 u_glowColor1;\nuniform vec3 u_glowColor2;\nuniform vec3 u_glowColor3;\nuniform vec2 u_lightPos;\nuniform float u_lightCore;\nuniform float u_lightHalo;\nuniform float u_vignette;\nuniform float u_bloomThreshold;\nuniform float u_bloomRange;\nuniform float u_bloomStrength;\nout vec4 fragColor;\n\nvec3 mod289v3(vec3 x){return x-floor(x*(1./289.))*289.;}\nvec4 mod289v4(vec4 x){return x-floor(x*(1./289.))*289.;}\nvec4 permute(vec4 x){return mod289v4(((x*34.)+1.)*x);}\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159-.85373472095314*r;}\n\nfloat snoise(vec3 v){\n  const vec2 C=vec2(1./6.,1./3.);\n  const vec4 D=vec4(0.,.5,1.,2.);\n  vec3 i=floor(v+dot(v,C.yyy));\n  vec3 x0=v-i+dot(i,C.xxx);\n  vec3 g=step(x0.yzx,x0.xyz);\n  vec3 l=1.-g;\n  vec3 i1=min(g.xyz,l.zxy);\n  vec3 i2=max(g.xyz,l.zxy);\n  vec3 x1=x0-i1+C.xxx;\n  vec3 x2=x0-i2+C.yyy;\n  vec3 x3=x0-D.yyy;\n  i=mod289v3(i);\n  vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));\n  float n_=.142857142857;\n  vec3 ns=n_*D.wyz-D.xzx;\n  vec4 j=p-49.*floor(p*ns.z*ns.z);\n  vec4 x_=floor(j*ns.z);\n  vec4 y_=floor(j-7.*x_);\n  vec4 x=x_*ns.x+ns.yyyy;\n  vec4 y=y_*ns.x+ns.yyyy;\n  vec4 h=1.-abs(x)-abs(y);\n  vec4 b0=vec4(x.xy,y.xy);\n  vec4 b1=vec4(x.zw,y.zw);\n  vec4 s0=floor(b0)*2.+1.;\n  vec4 s1=floor(b1)*2.+1.;\n  vec4 sh=-step(h,vec4(0.));\n  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;\n  vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;\n  vec3 p0=vec3(a0.xy,h.x);\n  vec3 p1=vec3(a0.zw,h.y);\n  vec3 p2=vec3(a1.xy,h.z);\n  vec3 p3=vec3(a1.zw,h.w);\n  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));\n  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;\n  vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);\n  m=m*m;\n  return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));\n}\n\nfloat hash(vec2 p){\n  vec3 p3=fract(vec3(p.xyx)*.1031);\n  p3+=dot(p3,p3.yzx+33.33);\n  return fract((p3.x+p3.y)*p3.z);\n}\n\nfloat fbm(vec3 p){\n  float v=0.,amp=.6;vec3 shift=vec3(100.);\n  for(int i=0;i<1;i++){v+=amp*snoise(p);p=p*2.+shift;amp*=.4;}\n  return v;\n}\n\nfloat fluidNoise(vec2 uv,float t){\n  float n1=fbm(vec3(uv*.6,t*.06));\n  float n2=fbm(vec3(uv*.6+5.2,t*.06+1.3));\n  vec2 w1=vec2(n1,n2)*.6;\n  float n3=fbm(vec3((uv+w1)*.7+1.7,t*.05+3.1));\n  float n4=fbm(vec3((uv+w1)*.7+9.2,t*.05+5.7));\n  vec2 w2=vec2(n3,n4)*.5;\n  return fbm(vec3((uv+w1+w2)*.5,t*.04));\n}\n\nvec2 curlish(vec2 uv,float t){\n  float eps=.02;\n  float n=snoise(vec3(uv*.8,t));\n  float nx=snoise(vec3((uv+vec2(eps,0.))*.8,t));\n  float ny=snoise(vec3((uv+vec2(0.,eps))*.8,t));\n  return vec2(-(ny-n)/eps,(nx-n)/eps)*.003;\n}\n\nvoid main(){\n  float aspect=u_resolution.x/u_resolution.y;\n  vec2 uv=gl_FragCoord.xy/u_resolution;\n  vec2 suv=vec2(uv.x*aspect,uv.y)*u_scale+u_offset;\n  float t=u_time;\n\n  vec4 flow=texture(u_flowmap,uv);\n  float influence=flow.r;\n  vec2 flowDir=(flow.gb-0.5)*2.0;\n\n  suv+=flowDir*influence*u_distortBoost*0.8;\n  float swirlAngle=influence*u_swirlBoost*2.5;\n  float cs=cos(swirlAngle),sn=sin(swirlAngle);\n  vec2 delta=suv-vec2(uv.x*aspect,uv.y)*u_scale;\n  suv+=(mat2(cs,sn,-sn,cs)*delta-delta)*influence;\n\n  vec2 curl=curlish(suv,t*.04);\n  vec2 uvD=suv+curl*12.;\n  float f=fluidNoise(uvD,t);\n  float swirl=snoise(vec3(uvD*.8+f*1.5,t*.035))*.5+.5;\n  float n=f*.5+.5;\n  vec3 col=mix(u_c1,u_c2,smoothstep(.2,.5,n));\n  col=mix(col,u_c3,smoothstep(.35,.65,n+swirl*.25));\n  col=mix(col,u_c4,smoothstep(.6,.85,swirl)*.55);\n  col=mix(col,u_c5,smoothstep(.5,.8,n*swirl)*.35);\n\n  float glow=smoothstep(0.0,0.8,influence);\n  float glowNoise=snoise(vec3(uvD*1.5,t*0.08))*0.5+0.5;\n  float glowDist=smoothstep(0.0,1.0,influence);\n  vec3 glowMix=mix(u_glowColor3,u_glowColor2,glowDist);\n  glowMix=mix(glowMix,u_glowColor1,glowDist*glowNoise);\n  col=mix(col,glowMix,glow*u_glowIntensity);\n\n  if(u_grain>0.0){\n    vec2 flowOffset=(uvD-suv)*u_resolution.y;\n    vec2 gp=floor((gl_FragCoord.xy+flowOffset)/5.0);\n    float gr=hash(gp)*2.-1.;\n    col+=gr*u_grain;\n  }\n\n  float luma=dot(col,vec3(.299,.587,.114));\n  float bloom=smoothstep(u_bloomThreshold-u_bloomRange,u_bloomThreshold+u_bloomRange,luma);\n  col+=(col*.85+vec3(.15,.145,.13))*bloom*u_bloomStrength;\n\n  float ld=length((uv-u_lightPos)*vec2(aspect,1.));\n  float core=exp(-ld*ld*4.5);\n  float halo=exp(-ld*1.8);\n  col+=vec3(1.,.97,.9)*core*u_lightCore+vec3(.72,.8,1.)*halo*u_lightHalo;\n\n  float vig=1.-smoothstep(.35,.75,length(uv-.5));\n  col=mix(col*(1.-u_vignette),col,vig);\n  fragColor=vec4(col,1.);\n}\n';

    function initFluid() {
      try {
        gl = fluidCanvas.getContext('webgl2', { alpha: true, premultipliedAlpha: false, powerPreference: 'low-power' });
      } catch (e) { gl = null; }
      if (!gl) return;
      function compile(type, src) {
        var sh = gl.createShader(type);
        gl.shaderSource(sh, src);
        gl.compileShader(sh);
        if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
          console.error('Fluid shader:', gl.getShaderInfoLog(sh));
          gl.deleteShader(sh);
          return null;
        }
        return sh;
      }
      function program(fragSrc) {
        var vs = compile(gl.VERTEX_SHADER, VERT_SRC);
        var fs = compile(gl.FRAGMENT_SHADER, fragSrc);
        if (!vs || !fs) return null;
        var p = gl.createProgram();
        gl.attachShader(p, vs);
        gl.attachShader(p, fs);
        gl.linkProgram(p);
        if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
          console.error('Fluid link:', gl.getProgramInfoLog(p));
          return null;
        }
        return p;
      }
      var flowProg = program(FLOW_SRC);
      var fluidProg = program(FLUID_SRC);
      if (!flowProg || !fluidProg) { gl = null; return; }
      glPrograms = { flow: flowProg, fluid: fluidProg, flowU: {}, fluidU: {} };
      var fnames = ['u_prev', 'u_mouse', 'u_velocity', 'u_brushRadius', 'u_brushStrength', 'u_decay'];
      fnames.forEach(function (n) { glPrograms.flowU[n.replace('u_', '')] = gl.getUniformLocation(flowProg, n); });
      var mnames = ['u_time', 'u_resolution', 'u_c1', 'u_c2', 'u_c3', 'u_c4', 'u_c5', 'u_scale', 'u_offset', 'u_grain', 'u_speed', 'u_flowmap', 'u_distortBoost', 'u_swirlBoost', 'u_glowIntensity', 'u_glowColor1', 'u_glowColor2', 'u_glowColor3', 'u_lightPos', 'u_lightCore', 'u_lightHalo', 'u_vignette', 'u_bloomThreshold', 'u_bloomRange', 'u_bloomStrength'];
      mnames.forEach(function (n) { glPrograms.fluidU[n.replace('u_', '')] = gl.getUniformLocation(fluidProg, n); });
      glQuad = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, glQuad);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
      glTimeStart = performance.now();
      fluidResize();
    }

    function fluidResize() {
      if (!gl || !glPrograms) return;
      var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      var w = Math.max(1, Math.round(W * dpr));
      var h = Math.max(1, Math.round(H * dpr));
      fluidCanvas.width = w;
      fluidCanvas.height = h;
      gl.viewport(0, 0, w, h);
      var tw = Math.round(w / 4), th = Math.round(h / 4);
      if (glFbo) {
        glFbo.forEach(function (f) {
          gl.deleteTexture(f.tex);
          gl.deleteFramebuffer(f.fbo);
        });
      }
      var init = new Uint8Array(tw * th * 4);
      for (var i = 0; i < tw * th; i++) { init[4 * i] = 0; init[4 * i + 1] = 128; init[4 * i + 2] = 128; init[4 * i + 3] = 255; }
      glFbo = [makeFbo(tw, th, init), makeFbo(tw, th, init)];
      glTexSize = { w: tw, h: th };
      glPing = 0;
    }

    function makeFbo(w, h, data) {
      var tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      var fbo = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      return { fbo: fbo, tex: tex };
    }

    function fluidFrame(t) {
      if (!gl || !glPrograms || !glFbo) return;
      var k = fluidMouse;
      k.smoothX += (k.x - k.smoothX) * FLUID.mouseSmoothing;
      k.smoothY += (k.y - k.smoothY) * FLUID.mouseSmoothing;
      k.svx += ((k.x - k.smoothX) * 0.5 - k.svx) * FLUID.mouseVelocity;
      k.svy += ((k.y - k.smoothY) * 0.5 - k.svy) * FLUID.mouseVelocity;
      var N = glPing ? glFbo[0] : glFbo[1];
      var T = glPing ? glFbo[1] : glFbo[0];
      glPing = glPing ? 0 : 1;

      /* 濞翠礁婧€缁楁柨鍩?pass */
      gl.bindFramebuffer(gl.FRAMEBUFFER, T.fbo);
      gl.viewport(0, 0, glTexSize.w, glTexSize.h);
      gl.useProgram(glPrograms.flow);
      bindQuad();
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, N.tex);
      gl.uniform1i(glPrograms.flowU.prev, 0);
      gl.uniform2f(glPrograms.flowU.mouse, k.smoothX, k.smoothY);
      gl.uniform2f(glPrograms.flowU.velocity, k.svx, k.svy);
      gl.uniform1f(glPrograms.flowU.brushRadius, FLUID.mouseRadius);
      gl.uniform1f(glPrograms.flowU.brushStrength, 0); /* 榧犳爣涓嶆壄鏇叉祦浣?*/
      gl.uniform1f(glPrograms.flowU.decay, FLUID.decay);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      /* 濞翠椒缍嬪〒鍙夌厠 pass */
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, fluidCanvas.width, fluidCanvas.height);
      gl.useProgram(glPrograms.fluid);
      bindQuad();
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, T.tex);
      var U = glPrograms.fluidU;
      var Rt = (performance.now() - glTimeStart) * 0.001 * (FLUID.speed / 100);
      gl.uniform1i(U.flowmap, 0);
      gl.uniform1f(U.time, Rt);
      gl.uniform2f(U.resolution, fluidCanvas.width, fluidCanvas.height);
      gl.uniform3f(U.c1, FLUID.c1[0], FLUID.c1[1], FLUID.c1[2]);
      gl.uniform3f(U.c2, FLUID.c2[0], FLUID.c2[1], FLUID.c2[2]);
      gl.uniform3f(U.c3, FLUID.c3[0], FLUID.c3[1], FLUID.c3[2]);
      gl.uniform3f(U.c4, FLUID.c4[0], FLUID.c4[1], FLUID.c4[2]);
      gl.uniform3f(U.c5, FLUID.c5[0], FLUID.c5[1], FLUID.c5[2]);
      gl.uniform1f(U.scale, FLUID.scale);
      gl.uniform2f(U.offset, FLUID.offsetX / 100, FLUID.offsetY / 100);
      gl.uniform1f(U.grain, FLUID.grain);
      gl.uniform1f(U.distortBoost, FLUID.distortBoost);
      gl.uniform1f(U.swirlBoost, FLUID.swirlBoost);
      var follow = 0; /* 鍏夋簮鍥哄畾锛屼笉闅忛紶鏍?*/
      gl.uniform2f(U.lightPos, FLUID.lightX + (k.smoothX - FLUID.lightX) * follow, FLUID.lightY);
      gl.uniform1f(U.lightCore, FLUID.lightCore);
      gl.uniform1f(U.lightHalo, FLUID.lightHalo);
      gl.uniform1f(U.vignette, FLUID.vignette);
      gl.uniform1f(U.bloomThreshold, FLUID.bloomThreshold);
      gl.uniform1f(U.bloomRange, FLUID.bloomRange);
      gl.uniform1f(U.bloomStrength, FLUID.bloomStrength);
      gl.uniform1f(U.glowIntensity, FLUID.glowIntensity);
      gl.uniform3f(U.glowColor1, FLUID.glowC1[0], FLUID.glowC1[1], FLUID.glowC1[2]);
      gl.uniform3f(U.glowColor2, FLUID.glowC2[0], FLUID.glowC2[1], FLUID.glowC2[2]);
      gl.uniform3f(U.glowColor3, FLUID.glowC3[0], FLUID.glowC3[1], FLUID.glowC3[2]);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    function bindQuad() {
      gl.bindBuffer(gl.ARRAY_BUFFER, glQuad);
      var loc = gl.getAttribLocation(gl.getParameter(gl.CURRENT_PROGRAM), 'a_position');
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    }

    var fluidMouse = { x: 0.5, y: 0.5, smoothX: 0.5, smoothY: 0.5, vx: 0, vy: 0, svx: 0, svy: 0 };
    var fluidMouseActive = false;
    var fluidCoarse = false;

    /* ------------------------- 妞存悂濂旈弫鏉跨摟閻愰€涚隘閺佺増宓?------------------------- */
    var whalePts = [];
    var whaleCount = 0;

    function buildWhaleData() {
      whalePts = [];
      if (!WHALE_PATH) return;
      var SIZE = 60;
      var off = document.createElement('canvas');
      off.width = SIZE; off.height = SIZE;
      var octx = off.getContext('2d');
      octx.fillStyle = '#000';
      octx.fillRect(0, 0, SIZE, SIZE);
      octx.fillStyle = '#fff';
      var sc = SIZE / 24;
      octx.translate((SIZE - 24 * sc) / 2, (SIZE - 18 * sc) / 2);
      octx.scale(sc, sc);
      octx.fill(WHALE_PATH);
      var img = octx.getImageData(0, 0, SIZE, SIZE).data;
      var lum = new Float32Array(SIZE * SIZE);
      for (var e = 0; e < SIZE * SIZE; e++) {
        lum[e] = (0.299 * img[4 * e] + 0.587 * img[4 * e + 1] + 0.114 * img[4 * e + 2]) / 255;
      }
      var isInterior = function (n, e2) {
        for (var a = -2; a <= 2; a++) for (var r = -2; r <= 2; r++) {
          if (r === 0 && a === 0) continue;
          var o = n + r, s = e2 + a;
          if (o >= 0 && s >= 0 && o < SIZE && s < SIZE && lum[s * SIZE + o] > 0.2) return false;
        }
        return true;
      };
      var d = SIZE / 2;
      for (var y = 0; y < SIZE; y++) {
        for (var x = 0; x < SIZE; x++) {
          var l = lum[y * SIZE + x];
          if (l > 0.2 && !isInterior(x, y)) {
            var sx = (x - d) * 0.18;
            var sy = (y - d) * 0.18; /* Canvas y 閸氭垳绗呴敍宀€鐐曟潪顒勪缉閸忓秹顤呴崐?*/
            var edge = 0;
            for (var a2 = -1; a2 <= 1; a2++) for (var r2 = -1; r2 <= 1; r2++) {
              if (r2 === 0 && a2 === 0) continue;
              var o2 = x + r2, s2 = y + a2;
              if (o2 < 0 || s2 < 0 || o2 >= SIZE || s2 >= SIZE || lum[s2 * SIZE + o2] <= 0.2) edge++;
            }
            var ang = Math.random() * Math.PI * 2;
            var phi = Math.acos(2 * Math.random() - 1);
            var rad = 3 * (0.4 + 0.6 * Math.random());
            whalePts.push({
              sx: sx, sy: sy,
              opacity: l,
              edge: edge / 8,
              scx: Math.sin(phi) * Math.cos(ang) * rad,
              scy: Math.sin(phi) * Math.sin(ang) * rad,
              idx: whalePts.length
            });
          }
        }
      }
      whaleCount = whalePts.length;
    }

    /* ------------------------- 缂冩垶鐗?------------------------- */
    function gridRebuild() {
      gridCols = Math.ceil(W / 90) + 1;
      gridRows = Math.ceil(H / 90) + 1;
      var ox = (W - (gridCols - 1) * 90) / 2;
      var oy = (H - (gridRows - 1) * 90) / 2;
      gridPts = [];
      for (var n = 0; n < gridRows; n++) {
        for (var r = 0; r < gridCols; r++) {
          var rx = ox + 90 * r, ry = oy + 90 * n;
          gridPts.push({ restX: rx, restY: ry, x: rx, y: ry, vx: 0, vy: 0 });
        }
      }
    }

    function measureContentCX() {
      var sb = document.querySelector('.pI_x6G_sidebarCol');
      var sw = sb ? sb.getBoundingClientRect().width : 0;
      contentCX = sw + (W - sw) / 2;
    }

    function resize() {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      gridCanvas.width = Math.max(1, Math.round(W * DPR));
      gridCanvas.height = Math.max(1, Math.round(H * DPR));
      gctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      whaleCanvas.width = Math.max(1, Math.round(W * DPR));
      whaleCanvas.height = Math.max(1, Math.round(H * DPR));
      wctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      gridRebuild();
      buildWhaleData();
      measureContentCX();
      if (gl) fluidResize();
    }

    if (window.ResizeObserver) {
      var ro = new ResizeObserver(resize);
      ro.observe(document.body);
    } else {
      window.addEventListener('resize', resize);
    }

    /* ------------------------- 閹稿洭鎷?娴溿倓绨?------------------------- */
    var mx = -9999, my = -9999;
    var mouseHasMoved = false;
    var mouseActive = false;
    var lastMove = 0;
    var activity = 0;
    window.addEventListener('pointermove', function (e) {
      mx = e.clientX; my = e.clientY;
      mouseHasMoved = true; mouseActive = true; lastMove = Date.now();
      fluidMouse.x = mx / Math.max(1, W);
      fluidMouse.y = 1 - my / Math.max(1, H);
      fluidMouseActive = true;
      fluidCoarse = e.pointerType !== 'mouse';
    }, { passive: true });
    window.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'mouse') return;
      mx = e.clientX; my = e.clientY;
      mouseHasMoved = true; mouseActive = true; lastMove = Date.now();
      fluidMouse.x = mx / Math.max(1, W);
      fluidMouse.y = 1 - my / Math.max(1, H);
      fluidMouseActive = true;
      fluidCoarse = true;
    }, { passive: true });
    window.addEventListener('mouseleave', function () { mouseActive = false; fluidMouseActive = false; }, { passive: true });
    document.addEventListener('visibilitychange', function () { if (document.hidden) { mouseActive = false; fluidMouseActive = false; } });

    /* ------------------------- 濠婃艾濮?------------------------- */
    var parallax = 0;
    var scrollProg = 0;
    window.addEventListener('scroll', function () {
      parallax = (window.scrollY || 0) * 0.06;
      scrollProg = Math.min(1, (window.scrollY || 0) / window.innerHeight);
    }, { passive: true });

    /* ------------------------- 濞撳弶鐓嬪顏嗗箚 ------------------------- */
    var lastT = 0, lastGrid = 0, mountT = -1;
    var GRID_INTERVAL = 1000 / 30;
    var MOUSE_R = 4.9, MOUSE_STR = 0.8, MOUSE_DECAY = 0.2, MOUSE_DISTORT = 5;
    var BEAM_R = 10; /* 鍏夋潫鎻愪寒鍗婂緞锛坰cene 鍗曚綅锛夛紝澶т簬鎺ㄥ紑鍗婂緞 MOUSE_R */
    var LIGHT_X = 4.5, LIGHT_Y = 5.5, LIGHT_RANGE = 14, SHADE_MIN = 0.2, SHADE_MAX = 1.116, FOLLOW_X = 1.05;
    var LOOSE = 1;
    var mouseStrength = 0;
    var smoothMouseX = 0, smoothMouseY = 0;

    function frame(now) {
      var t = now / 1000;
      var dt = Math.min(0.05, Math.max(0.001, t - lastT));
      lastT = t;
      if (!gridCanvas.width) { requestAnimationFrame(frame); return; }
      if (mountT < 0) mountT = t;

      var moving = Date.now() - lastMove < 260;
      if (moving) activity += (1 - activity) * Math.min(1, dt * 8);
      else activity += (0 - activity) * Math.min(1, dt * 2.2);

      /* 濞翠椒缍?+ 缂冩垶鐗搁崗鍙橀煩 30fps 閼哄倹绁?*/
      if (now - lastGrid >= GRID_INTERVAL) {
        lastGrid = now;

        /* -- 濞翠椒缍嬮敍鍦礶bGL閿涘矂顩绘い?shader閿?-- */
        fluidFrame(t);

        /* -- 缂冩垶鐗搁悧鈺冩倞 -- */
        var i2;
        for (i2 = 0; i2 < gridPts.length; i2++) {
          var p = gridPts[i2];
          var gdx = p.x - mx, gdy = p.y - my;
          var dist = Math.sqrt(gdx * gdx + gdy * gdy);
          if (dist < 140 && dist > 0.1) {
            var e = (1 - dist / 140) * 30;
            p.vx += (gdx / dist) * e * 0.1;
            p.vy += (gdy / dist) * e * 0.1;
          }
          p.vx += 0.05 * (p.restX - p.x);
          p.vy += 0.05 * (p.restY - p.y);
          p.vx *= 0.85; p.vy *= 0.85;
          p.x += p.vx; p.y += p.vy;
        }
      }

      gctx.clearRect(0, 0, W, H);
      var sy = parallax;
      gctx.strokeStyle = 'rgba(255,255,255,0.08)';
      gctx.lineWidth = 0.5;
      gctx.beginPath();
      for (var n = 0; n < gridRows; n++) {
        for (var r = 0; r < gridCols - 1; r++) {
          var a = gridPts[n * gridCols + r], b2 = gridPts[n * gridCols + r + 1];
          var o = b2.x - a.x, s2 = b2.y - a.y;
          var d = Math.sqrt(o * o + s2 * s2);
          if (d < 20) continue;
          var l = o / d, m2 = s2 / d;
          gctx.moveTo(a.x + 10 * l + sy, a.y + 10 * m2);
          gctx.lineTo(b2.x - 10 * l + sy, b2.y - 10 * m2);
        }
      }
      for (var r2 = 0; r2 < gridCols; r2++) {
        for (var n2 = 0; n2 < gridRows - 1; n2++) {
          var a2 = gridPts[n2 * gridCols + r2], b3 = gridPts[(n2 + 1) * gridCols + r2];
          var o2 = b3.x - a2.x, s3 = b3.y - a2.y;
          var d2b = Math.sqrt(o2 * o2 + s3 * s3);
          if (d2b < 20) continue;
          var l2 = o2 / d2b, m3 = s3 / d2b;
          gctx.moveTo(a2.x + 10 * l2 + sy, a2.y + 10 * m3);
          gctx.lineTo(b3.x - 10 * l2 + sy, b3.y - 10 * m3);
        }
      }
      gctx.stroke();
      var i3;
      for (i3 = 0; i3 < gridPts.length; i3++) {
        var p2 = gridPts[i3];
        var dn = 1.8, an = 0.16;
        if (!isNaN(mx) && !isNaN(my)) {
          var ddx = p2.x - mx, ddy = p2.y - my;
          var dd = Math.sqrt(ddx * ddx + ddy * ddy);
          var l3 = Math.max(0, 1 - dd / 140);
          dn = 1.8 + 2 * l3;
          an = 0.16 + 0.4 * l3;
        }
        gctx.fillStyle = 'rgba(255,255,255,' + an.toFixed(3) + ')';
        var sz = 2 * dn;
        gctx.fillRect(p2.x - dn + sy, p2.y - dn, sz, sz);
      }

      /* ================= 妞存悂濂旈弫鏉跨摟閻愰€涚隘 ================= */
      var whaleW = Math.min(W, H) * 0.52;
      var unit = whaleW / 10.8;
      var cx = contentCX + Math.sin(t * 0.04) * W * 0.02;
      var cy = H * 0.45 + Math.sin(t * 0.028 + 1.7) * H * 0.018 + sy * 0.8;

      var I = t - mountT - 0.3;
      var L = clamp01(I / 2.5);
      var D = 1 - Math.pow(1 - L, 3);
      var assembly = smoothstep(0, 1, D);
      var scatter = 1.6 * Math.min(1, 1.5 * scrollProg);

      var nmx = mouseHasMoved ? (mx / W) * 2 - 1 : 0;
      var nmy = mouseHasMoved ? -((my / H) * 2 - 1) : 0;
      var lf = Math.min(1, MOUSE_DECAY * dt * 60);
      if (!mouseHasMoved) { smoothMouseX = 0; smoothMouseY = 0; }
      else {
        smoothMouseX += (nmx - smoothMouseX) * lf;
        smoothMouseY += (nmy - smoothMouseY) * lf;
      }
      var targetStr = mouseActive ? MOUSE_STR : 0;
      mouseStrength += (targetStr - mouseStrength) * (1 - Math.pow(0.05, dt));

      var rotZ = 0.04 * Math.sin(0.25 * t);
      var rotX = 0.05 * Math.sin(0.056 * t);
      var rotY = 0.1 * Math.sin(0.08 * t);
      var floatY = 0.15 * Math.sin(0.4 * t);
      var objScale = (0.75 + 0.25 * D) * (1 - 0.5 * scrollProg);

      var lightX = LIGHT_X + smoothMouseX * FOLLOW_X;
      var lightY = LIGHT_Y;

      var mouseSX = (mx - cx) / unit;
      var mouseSY = (my - cy) / unit;
      var cosZ = Math.cos(-rotZ), sinZ = Math.sin(-rotZ);
      var mRotX = mouseSX * cosZ - mouseSY * sinZ;
      var mRotY = mouseSX * sinZ + mouseSY * cosZ;

      wctx.clearRect(0, 0, W, H);
      wctx.save();
      wctx.translate(cx, cy + floatY * unit);
      wctx.rotate(rotZ);
      wctx.scale(objScale, objScale);
      wctx.globalCompositeOperation = 'lighter';

      var cr = Math.cos(rotX), cg = Math.cos(rotY);

      for (var i = 0; i < whaleCount; i++) {
        var pt = whalePts[i];
        var idx = pt.idx;
        var ty1 = pt.sy * cr;
        var tx2 = pt.sx * cg;
        var ty2 = pt.sy * cr;

        var px2 = pt.scx + (tx2 - pt.scx) * assembly;
        var py2 = pt.scy + (ty2 - pt.scy) * assembly;

        var loose = LOOSE * (0.25 + 0.75 * pt.edge) * assembly;
        if (loose > 0.001) {
          var h1 = Math.sin(idx * 12.9898) * 43758.5453;
          var h2 = Math.sin(idx * 78.2330) * 12543.1230;
          var jx = (h1 - Math.floor(h1)) - 0.5;
          var jy = (h2 - Math.floor(h2)) - 0.5;
          px2 += jx * 0.05 * loose;
          py2 += jy * 0.05 * loose;
          px2 += Math.sin(t * 0.50 + idx * 0.53) * 0.06 * loose;
          py2 += Math.cos(t * 0.42 + idx * 0.71) * 0.06 * loose;
          var tailF = smoothstep(0.2, 0.8, clamp01((5.4 + pt.sx) / 5.4)) * LOOSE * assembly;
          py2 += Math.sin(t * 1.1 - pt.sx * 0.7) * 0.1 * tailF;
        }

        if (scatter > 0.001) {
          var disperse = scatter * (0.5 + 0.5 * pt.edge);
          px2 += (pt.scx - px2) * disperse;
          py2 += (pt.scy - py2) * disperse;
          py2 += Math.sin(t * 0.6 + idx * 0.3) * disperse * 0.6;
        }

        if (assembly < 0.9) {
          var scat = smoothstep(0.9, 0, assembly);
          px2 += Math.sin(t * 0.5 + idx * 0.1) * 0.2 * scat;
          py2 += Math.cos(t * 0.4 + idx * 0.07) * 0.2 * scat;
        }

        if (assembly > 0.8) {
          var mouseEffect = (assembly - 0.8) * 5;
          var mdx2 = px2 - mRotX, mdy2 = py2 - mRotY;
          var mouseDist = Math.sqrt(mdx2 * mdx2 + mdy2 * mdy2);
          if (mouseDist < MOUSE_R && mouseDist > 0.001) {
            var mt = 1 - mouseDist / MOUSE_R;
            var force = mt * mt * mt * mouseEffect * mouseStrength;
            var noiseAng = Math.sin(idx * 0.37 + t * 0.5) * MOUSE_DISTORT;
            var ca = Math.cos(noiseAng), sa = Math.sin(noiseAng);
            var radX = mdx2 / mouseDist, radY = mdy2 / mouseDist;
            var pushX = radX * ca - radY * sa;
            var pushY = radX * sa + radY * ca;
            px2 += pushX * force * 2.0;
            py2 += pushY * force * 2.0;
          }
        }

        /* 鍏夋潫鏄剧幇锛氶紶鏍囨帴杩戠殑鐐归€忔槑搴﹀彉浣庯紙鍙樹寒锛夛紝鏌斿拰琛板噺锛屽彧鏀逛寒搴︿笉鏀逛綅缃?*/
        var beam = 0;
        if (assembly > 0.8 && mouseActive && mouseHasMoved) {
          var bdx = px2 - mRotX, bdy = py2 - mRotY;
          var bdist = Math.sqrt(bdx * bdx + bdy * bdy);
          if (bdist < BEAM_R) {
            var bt = 1 - bdist / BEAM_R;
            beam = bt * bt * (3 - 2 * bt);
          }
        }

        /* 鏈潬杩戦紶鏍囨椂绮掑瓙浜害缁熶竴锛堝幓鎺夎窛绂诲厜鐓т笌涓績杈夊厜鐨勫樊寮傦級锛?           榧犳爣闈犺繎鏃剁敱鍏夋潫(beam)鎻愪寒 */
        var vLight = 1;

        var glowF = 0;
        var baseAlpha = 0.25 + 0.28 * D;
        var shimmer = Math.sin(t * 1.5 + px2 * 5 + py2 * 3) * 0.1 + 0.9;
        var alpha = pt.opacity * (baseAlpha + glowF) * shimmer * Math.min(vLight, 1) * (1 + 0.35 * beam);
        if (alpha <= 0.004) continue;

        var crr = (0.75 + glowF * 0.2) * vLight * (1 + 0.08 * beam);
        var cgg = (0.8 + glowF * 0.3) * vLight * (1 + 0.1 * beam);
        var cbb = (0.9 + glowF * 0.5) * vLight * (1 + 0.12 * beam);
        if (vLight > 1) { crr *= 1.07; cgg *= 1.02; cbb *= 0.94; }

        var pxPx = px2 * unit;
        var pyPx = py2 * unit;
        var size = 0.09 * unit * (1 + 0.2 * Math.sin(t * 1.5 + idx));
        wctx.fillStyle = 'rgba(' + Math.round(Math.min(255, crr * 255)) + ',' + Math.round(Math.min(255, cgg * 255)) + ',' + Math.round(Math.min(255, cbb * 255)) + ',' + Math.min(1, alpha).toFixed(3) + ')';
        wctx.fillRect(pxPx - size / 2, pyPx - size / 2, size, size);
      }
      wctx.restore();

      requestAnimationFrame(frame);
    }

    resize();
    initFluid();
    requestAnimationFrame(function (now) { lastT = now / 1000; frame(now); });
  }
    }

    exports.apply = function (ctx) {
      const styleEl = document.createElement('style');
      styleEl.textContent = SKIN_CSS;
      document.head.append(styleEl);
      ctx.effect(() => () => { styleEl.remove(); });
      startSkin();
    };

    return module.exports;
  }
});
