/**
 * pbls-gate.js — 소프트 회원 게이트 (DataClinic 가입 유도)
 *
 * 설계: pbls-auth.js 와 같은 독립 모듈. common-utils.js 가 한 줄로 로드하지만
 * 게이트 로직은 전부 여기 격리 — 버그가 나도 게이트 페이지에만 영향, 나머지 글은 무사.
 * 모든 것을 try/catch 로 감싸 어떤 경우에도 페이지 렌더를 막지 않는다.
 *
 * 동작 (전부 클라이언트 사이드 = 소프트 게이트):
 *   1) /gated.json 을 fetch 해서 "잠글 글 목록"을 읽는다 (중앙 소스, 어드민이 관리).
 *   2) 현재 글 경로가 목록에 있고 + 미로그인이면 → <main> 을 일정 높이로 클립하고
 *      가입 유도 모달을 띄운다. 본문은 DOM 에 그대로 남아 구글은 전체를 색인한다.
 *   3) 로그인(스텁 세션)하면 클립을 풀어 전체를 보여준다.
 *
 * ⚠️ 소프트 게이트 = 소스 보기·JS 끄기로 우회 가능. 콘텐츠 보호가 아니라 가입 유도용.
 *
 * 인증: 현재는 sessionStorage 스텁. 실제 DataClinic Firebase 연동은 후속 PR —
 *   PBLS_GATE_AUTH 의 signInEmail/signUp/signInGoogle 안의 // FIREBASE: 주석 지점에
 *   firebase.auth() 호출을 꽂으면 된다.
 *
 * SEO: 잠긴 글엔 schema.org Article.isAccessibleForFree=false + hasPart(cssSelector)
 *   를 주입해 구글에 "합법적 회원 게이트"임을 알린다(클로킹 회피).
 */
(function () {
  'use strict';

  var GATED_JSON = '/gated.json';
  var SESSION_KEY = 'pbls_dc_member';         // 스텁 세션 (Firebase 연동 시 교체)
  var DEFAULT_FREE_HEIGHT = 1000;             // 무료 미리보기 높이(px). gated.json 으로 조정 가능.

  // ── 현재 글 경로 정규화: "/report/foo/ko/index.html" → "report/foo/ko/" ──
  function currentPath() {
    var p = (location.pathname || '').replace(/index\.html$/, '');
    if (p.charAt(0) === '/') p = p.slice(1);
    if (p && p.charAt(p.length - 1) !== '/') p += '/';
    return p;
  }
  function isEn() { return /\/en\//.test(location.pathname); }

  // ── i18n (경로로 언어 판별) ──
  var I18N = {
    ko: {
      head: '페블러스 블로그를<br>후원하시는 법!',
      sub: '데이터클리닉 무료 회원에 가입해 주세요.',
      body: '회원 가입하시면 이미지 1만 장 <b class="hl">품질진단 이용권</b>과<br>데이터 품질관리 <b class="hl">가이드북</b>도 드려요!',
      tabSignup: '회원가입', tabLogin: '로그인',
      email: '이메일', password: '비밀번호', pwPlaceholder: '6자 이상',
      ctaSignup: '무료로 회원 가입', ctaLogin: '로그인',
      google: 'Google로 계속하기', dismiss: '오늘은 앞부분만 볼게요',
      showPw: '비밀번호 표시', hidePw: '비밀번호 숨기기',
      err: '이메일 형식과 6자 이상 비밀번호를 확인하세요.', working: '처리 중…'
    },
    en: {
      head: 'Help keep the<br>Pebblous blog free',
      sub: 'Sign up for a free DataClinic account.',
      body: 'Our thanks — a free <b class="hl">quality check on 10,000 images</b>, plus our data-quality <b class="hl">guidebook</b>.',
      tabSignup: 'Sign up', tabLogin: 'Log in',
      email: 'Email', password: 'Password', pwPlaceholder: 'At least 6 characters',
      ctaSignup: 'Create free account', ctaLogin: 'Log in',
      google: 'Continue with Google', dismiss: 'Maybe later',
      showPw: 'Show password', hidePw: 'Hide password',
      err: 'Enter a valid email and a 6+ character password.', working: 'Working…'
    }
  };

  // ── 인증 (스텁) — 후속 PR 에서 Firebase 로 교체 ──
  var AUTH = {
    isMember: function () { try { return sessionStorage.getItem(SESSION_KEY) === '1'; } catch (e) { return false; } },
    _grant: function () { try { sessionStorage.setItem(SESSION_KEY, '1'); } catch (e) {} },
    signInEmail: function (email, pw) {
      // FIREBASE: return firebase.auth().signInWithEmailAndPassword(email, pw)
      return new Promise(function (res, rej) {
        setTimeout(function () {
          if (/.+@.+\..+/.test(email) && pw.length >= 6) { AUTH._grant(); res(); }
          else rej(new Error('invalid'));
        }, 350);
      });
    },
    signUp: function (email, pw) {
      // FIREBASE: return firebase.auth().createUserWithEmailAndPassword(email, pw)
      return AUTH.signInEmail(email, pw);
    },
    signInGoogle: function () {
      // FIREBASE: return firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
      return new Promise(function (res) { setTimeout(function () { AUTH._grant(); res(); }, 450); });
    }
  };

  var STYLE = '' +
    '.pbls-gated main{max-height:var(--pbls-free-h,1000px);overflow:hidden;position:relative}' +
    '.pbls-gated main::after{content:"";position:absolute;left:0;right:0;bottom:0;height:320px;background:linear-gradient(to bottom,rgba(255,255,255,0),rgba(255,255,255,.72) 45%,var(--card-bg,#fff) 92%);pointer-events:none}' +
    '.pbls-gatewrap{max-width:460px;margin:-150px auto 60px;position:relative;z-index:20;padding:0 14px}' +
    '.pbls-dismissed .pbls-gatewrap{display:none}' +
    '.pbls-card{background:var(--card-bg,#fff);border-radius:26px;box-shadow:0 24px 70px rgba(23,23,25,.18);padding:34px 32px 24px;text-align:center;animation:pblsRise .45s cubic-bezier(.2,.7,.3,1)}' +
    '@keyframes pblsRise{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}' +
    '.pbls-head{font-family:var(--font-display,inherit);font-size:1.7rem;line-height:1.35;font-weight:800;letter-spacing:-.02em;margin:4px 6px 8px;color:var(--text-primary,#171719)}' +
    '.pbls-sub{font-size:1.02rem;font-weight:600;color:var(--text-secondary,#585858);margin:0 6px 22px}' +
    '.pbls-fan{position:relative;height:186px;width:330px;margin:0 auto 22px}' +
    '.pbls-rc{position:absolute;top:12px;left:50%;width:114px;height:158px;border-radius:13px;padding:12px 11px;box-shadow:0 8px 22px rgba(0,0,0,.16);transform-origin:bottom center;text-align:left;overflow:hidden}' +
    '.pbls-rc .b{font-size:8px;font-weight:800;opacity:.9;margin-bottom:24px}' +
    '.pbls-rc .t{font-size:12px;font-weight:800;line-height:1.22}' +
    '.pbls-rc1{background:#3a3330;color:#F9A26C;margin-left:-160px;transform:rotate(-16deg);z-index:1}' +
    '.pbls-rc2{background:#F86825;color:#fff;margin-left:-90px;transform:rotate(-6deg);z-index:2}' +
    '.pbls-rc3{background:#fff;color:#F86825;margin-left:-16px;transform:rotate(4deg);z-index:3;border:1px solid #f2e6de}' +
    '.pbls-rc4{background:#FBE4D6;color:#c9571f;margin-left:56px;transform:rotate(14deg);z-index:2}' +
    '.pbls-body{color:var(--text-secondary,#585858);font-size:1rem;line-height:1.7;margin:0 6px 22px}' +
    '.pbls-body b{color:var(--text-primary,#171719);font-weight:700}.pbls-body .hl{color:#F86825}' +
    '.pbls-tabs{display:flex;gap:4px;background:rgba(120,120,128,.1);border-radius:12px;padding:4px;margin:0 0 16px}' +
    '.pbls-tab{flex:1;padding:9px;border:none;background:transparent;border-radius:9px;font-size:.9rem;font-weight:700;color:var(--text-secondary,#585858);cursor:pointer}' +
    '.pbls-tab.on{background:var(--card-bg,#fff);color:var(--text-primary,#171719);box-shadow:0 1px 3px rgba(0,0,0,.08)}' +
    '.pbls-f{margin-bottom:11px;text-align:left}.pbls-f label{display:block;font-size:.78rem;font-weight:600;color:var(--text-secondary,#585858);margin-bottom:4px}' +
    '.pbls-pw{position:relative}' +
    '.pbls-f input{width:100%;padding:12px 13px;border:1px solid rgba(120,120,128,.28);border-radius:11px;font-size:.95rem;background:var(--card-bg,#fff);color:var(--text-primary,#171719);box-sizing:border-box}' +
    '.pbls-f input:focus{outline:none;border-color:#F86825;box-shadow:0 0 0 3px rgba(248,104,37,.13)}' +
    '.pbls-eye{position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:1.1rem;color:#b6b6bb;padding:4px}' +
    '.pbls-err{color:#CF1D21;font-size:.8rem;min-height:16px;text-align:left}' +
    '.pbls-btn{display:flex;align-items:center;justify-content:center;gap:9px;width:100%;padding:15px;border-radius:40px;border:none;font-size:1.02rem;font-weight:800;cursor:pointer}' +
    '.pbls-primary{background:#F86825;color:#fff;box-shadow:0 8px 20px rgba(248,104,37,.32)}.pbls-primary:hover{background:#d9531a}' +
    '.pbls-google{background:var(--card-bg,#fff);color:var(--text-primary,#171719);border:1px solid rgba(120,120,128,.28);font-size:.96rem;padding:12px;border-radius:12px;margin-top:10px}' +
    '.pbls-dismiss{display:block;width:100%;background:none;border:none;color:#a7a7ac;font-size:.9rem;margin-top:14px;cursor:pointer;padding:6px}';

  var GICON = '<svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.6l6.8-6.8C35.6 2.4 30.2 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.3 13.2 17.7 9.5 24 9.5z"/><path fill="#4285F4" d="M46.1 24.6c0-1.6-.1-3.1-.4-4.6H24v9.1h12.4c-.5 2.9-2.1 5.3-4.6 6.9l7.1 5.5c4.2-3.9 6.6-9.6 6.6-16.9z"/><path fill="#FBBC05" d="M10.5 28.7c-.5-1.4-.7-2.9-.7-4.7s.3-3.3.7-4.7l-7.9-6.1C1 16.3 0 20 0 24s1 7.7 2.6 10.8l7.9-6.1z"/><path fill="#34A853" d="M24 48c6.2 0 11.5-2.1 15.3-5.6l-7.1-5.5c-2 1.4-4.6 2.2-8.2 2.2-6.3 0-11.7-3.7-13.5-9l-7.9 6.1C6.5 42.6 14.6 48 24 48z"/></svg>';

  function injectSchema(active) {
    try {
      var old = document.getElementById('pbls-gate-schema');
      if (old) old.remove();
      var s = document.createElement('script');
      s.type = 'application/ld+json'; s.id = 'pbls-gate-schema';
      var data = { '@context': 'https://schema.org', '@type': 'Article', 'isAccessibleForFree': !active };
      if (active) data.hasPart = { '@type': 'WebPageElement', 'isAccessibleForFree': false, 'cssSelector': 'main' };
      s.textContent = JSON.stringify(data);
      document.head.appendChild(s);
    } catch (e) {}
  }

  function reveal() {
    document.body.classList.remove('pbls-gated');
    var wrap = document.querySelector('.pbls-gatewrap');
    if (wrap) wrap.parentNode.removeChild(wrap);        // 모달 제거 — 로그인 후 본문 뒤 잔존 방지
    injectSchema(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function buildModal(t) {
    var wrap = document.createElement('div');
    wrap.className = 'pbls-gatewrap';
    wrap.innerHTML =
      '<div class="pbls-card">' +
        '<div class="pbls-head">' + t.head + '</div>' +
        '<div class="pbls-sub">' + t.sub + '</div>' +
        '<div class="pbls-fan" aria-hidden="true">' +
          '<div class="pbls-rc pbls-rc1"><div class="b">Data Clinic</div><div class="t">Data Quality<br>Diagnosis<br>Report</div></div>' +
          '<div class="pbls-rc pbls-rc2"><div class="b">Data Clinic</div><div class="t">Data Quality<br>Improvement<br>Report</div></div>' +
          '<div class="pbls-rc pbls-rc3"><div class="b">Data Clinic</div><div class="t">Data Quality<br>Comparison<br>Report</div></div>' +
          '<div class="pbls-rc pbls-rc4"><div class="b">Data Clinic</div><div class="t">Data Lifecycle<br>Management<br>Report</div></div>' +
        '</div>' +
        '<p class="pbls-body">' + t.body + '</p>' +
        '<div class="pbls-tabs"><button class="pbls-tab on" data-m="signup">' + t.tabSignup + '</button><button class="pbls-tab" data-m="login">' + t.tabLogin + '</button></div>' +
        '<div class="pbls-f"><label>' + t.email + '</label><input type="email" class="pbls-email" placeholder="you@company.com" autocomplete="email"></div>' +
        '<div class="pbls-f"><label>' + t.password + '</label><div class="pbls-pw"><input type="password" class="pbls-pwi" placeholder="' + t.pwPlaceholder + '" autocomplete="new-password"><button type="button" class="pbls-eye" title="' + t.showPw + '">👁</button></div></div>' +
        '<div class="pbls-err"></div>' +
        '<button class="pbls-btn pbls-primary pbls-submit">' + t.ctaSignup + '</button>' +
        '<button class="pbls-btn pbls-google">' + GICON + t.google + '</button>' +
        '<button class="pbls-dismiss">' + t.dismiss + '</button>' +
      '</div>';
    return wrap;
  }

  function wire(wrap, t) {
    var mode = 'signup';
    var $ = function (s) { return wrap.querySelector(s); };
    var email = $('.pbls-email'), pw = $('.pbls-pwi'), err = $('.pbls-err'), submit = $('.pbls-submit');
    function setMode(m) {
      mode = m;
      wrap.querySelector('.pbls-tab[data-m="signup"]').classList.toggle('on', m === 'signup');
      wrap.querySelector('.pbls-tab[data-m="login"]').classList.toggle('on', m === 'login');
      submit.textContent = m === 'signup' ? t.ctaSignup : t.ctaLogin;
      pw.setAttribute('autocomplete', m === 'signup' ? 'new-password' : 'current-password');
      err.textContent = '';
    }
    wrap.querySelectorAll('.pbls-tab').forEach(function (b) { b.onclick = function () { setMode(b.getAttribute('data-m')); }; });
    $('.pbls-eye').onclick = function () {
      var show = pw.type === 'password';
      pw.type = show ? 'text' : 'password';
      this.textContent = show ? '🙈' : '👁';
      this.title = show ? t.hidePw : t.showPw;
    };
    submit.onclick = function () {
      submit.disabled = true; submit.textContent = t.working; err.textContent = '';
      var p = mode === 'signup' ? AUTH.signUp(email.value.trim(), pw.value) : AUTH.signInEmail(email.value.trim(), pw.value);
      p.then(reveal).catch(function () { err.textContent = t.err; submit.disabled = false; setMode(mode); });
    };
    $('.pbls-google').onclick = function () { this.disabled = true; this.style.opacity = .6; AUTH.signInGoogle().then(reveal); };
    $('.pbls-dismiss').onclick = function () { document.body.classList.add('pbls-dismissed'); };
  }

  function applyGate(cfg) {
    var main = document.querySelector('main');
    if (!main) return;                                  // 게이트할 본문 없음
    // 스타일 1회 주입
    if (!document.getElementById('pbls-gate-style')) {
      var st = document.createElement('style');
      st.id = 'pbls-gate-style'; st.textContent = STYLE;
      document.head.appendChild(st);
    }
    var freeH = (cfg && cfg.freeHeight) || DEFAULT_FREE_HEIGHT;
    document.documentElement.style.setProperty('--pbls-free-h', freeH + 'px');
    document.body.classList.add('pbls-gated');
    injectSchema(true);
    var t = I18N[isEn() ? 'en' : 'ko'];
    var modal = buildModal(t);
    main.parentNode.insertBefore(modal, main.nextSibling);  // <main> 바로 뒤
    wire(modal, t);
  }

  function init() {
    try {
      if (AUTH.isMember()) return;                      // 이미 회원 → 게이트 없음
      fetch(GATED_JSON, { cache: 'no-store' })
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (data) {
          if (!data || !Array.isArray(data.gatedPaths)) return;
          var path = currentPath();
          if (data.gatedPaths.indexOf(path) === -1) return;   // 이 글은 게이트 대상 아님
          applyGate({ freeHeight: data.defaultFreeHeight });
        })
        .catch(function () {});                          // gated.json 실패 → 게이트 없음(안전)
    } catch (e) {}
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
