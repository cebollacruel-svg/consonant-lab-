/* =============================================================
   app.js — Consonant Lab engine
   Vanilla JS · no build step · works from file:// and GitHub Pages
   ============================================================= */
(function () {
'use strict';

/* ── vocal-tract geometry (drawn by hand, checked by rendering) ── */
const TRACT = {
  "head": "M 190,10 C 128,12 96,26 86,50 C 80,64 76,74 68,82 C 58,92 44,98 32,100 C 26,101 26,106 34,110 L 56,116 C 58,120 54,122 48,124 C 42,127 42,132 48,136 C 54,140 56,144 52,150 C 48,156 50,162 56,166 C 60,182 74,194 100,200 C 132,207 150,212 158,224 L 166,258 L 268,258 L 268,10 Z",
  "nasalRoof": "M 46,100 C 62,84 92,68 128,62 C 156,58 178,62 190,72",
  "nasalFloor": "M 52,110 C 80,104 118,100 150,102 C 166,103 178,106 186,112",
  "turbinates": [
    "M 84,88 C 96,80 112,80 120,88 C 110,93 94,94 84,88 Z",
    "M 100,100 C 114,92 130,92 138,100 C 126,105 112,106 100,100 Z",
    "M 122,110 C 134,104 150,104 158,110 C 146,115 134,116 122,110 Z"
  ],
  "palate": "M 56,118 C 66,118 76,119 86,122 C 110,112 140,110 168,116 L 168,124 C 140,120 112,122 88,132 C 76,128 64,126 56,126 Z",
  "teethUp": "M 64,116 L 76,119 L 74,132 L 66,130 Z",
  "teethLo": "M 64,156 L 76,152 L 74,142 L 66,144 Z",
  "velumUp": "M 164,112 C 180,108 194,100 200,90 C 208,100 206,120 196,132 C 186,138 170,126 164,118 Z",
  "velumDown": "M 164,112 C 176,128 182,152 178,172 C 166,166 158,140 156,116 Z",
  "pharynx": "M 196,64 C 212,116 214,168 206,216",
  "epiglottis": "M 182,198 C 192,192 200,194 202,202 C 196,208 186,208 182,202 Z",
  "larynx": "M 180,210 C 190,206 202,210 206,218 L 206,252 L 178,252 Z",
  "folds": [
    "M 184,220 L 195,228 L 184,236 Z",
    "M 206,220 L 195,228 L 206,236 Z"
  ],
  "airOral": "M 196,240 C 198,210 200,180 186,162 C 160,140 100,132 46,128",
  "airNasal": "M 196,240 C 198,206 194,178 178,158 C 166,142 140,118 100,106 C 76,100 56,100 40,104",
  "tongue": {
    "neutral": "M 76,172 C 74,164 78,158 88,156 C 112,150 138,150 158,156 C 172,160 182,170 186,182 C 190,194 188,204 186,212 C 158,208 114,196 88,184 C 80,180 76,176 76,172 Z",
    "dental": "M 78,174 C 70,158 62,134 68,122 C 80,128 86,144 104,152 C 126,160 150,160 166,166 C 176,170 183,176 186,184 C 190,194 188,204 186,212 C 158,208 114,196 88,184 C 80,180 76,176 76,172 Z",
    "alveolar": "M 78,174 C 72,150 76,126 86,118 C 94,134 114,150 140,156 C 162,161 180,172 186,184 C 190,194 188,204 186,212 C 158,208 114,196 88,184 C 80,180 76,176 76,172 Z",
    "post": "M 76,172 C 74,160 80,150 94,140 C 110,129 130,128 146,138 C 164,149 178,166 186,182 C 190,194 188,204 186,212 C 158,208 114,196 88,184 C 80,180 76,176 76,172 Z",
    "palatal": "M 76,172 C 76,158 88,146 106,134 C 126,122 148,128 162,146 C 174,161 182,172 186,182 C 190,194 188,204 186,212 C 158,208 114,196 88,184 C 80,180 76,176 76,172 Z",
    "velar": "M 76,172 C 78,164 92,162 110,158 C 134,152 158,142 172,126 C 179,117 183,112 186,110 C 192,132 190,166 186,184 C 190,194 188,204 186,212 C 158,208 114,196 88,184 C 80,180 76,176 76,172 Z",
    "bunched": "M 76,172 C 74,158 84,142 102,138 C 120,134 132,146 140,156 C 150,168 172,172 186,182 C 190,194 188,204 186,212 C 158,208 114,196 88,184 C 80,180 76,176 76,172 Z"
  },
  "lips": {
    "open": [
      "M 44,112 C 56,110 62,114 62,120 C 62,124 50,126 40,122 Z",
      "M 40,140 C 50,134 62,136 62,142 C 62,148 52,152 42,150 Z"
    ],
    "closed": [
      "M 42,116 C 56,114 64,120 64,128 C 64,131 48,133 38,130 Z",
      "M 38,132 C 48,129 64,131 64,134 C 64,142 52,148 40,146 Z"
    ],
    "labiodental": [
      "M 44,112 C 56,110 62,114 62,120 C 62,124 50,126 40,122 Z",
      "M 44,144 C 56,134 68,126 74,130 C 76,138 64,150 48,152 Z"
    ],
    "rounded": [
      "M 30,116 C 46,110 58,114 58,122 C 58,126 42,128 26,126 Z",
      "M 26,138 C 42,132 58,134 58,142 C 58,150 46,154 30,148 Z"
    ]
  }
};

/* ─────────────────────────────────────────────────────────────
   TEACHER SETTINGS — paste your Google Apps Script /exec URL
   between the quotes and every student's results arrive in your
   spreadsheet automatically. Leave empty to keep it off.
   ───────────────────────────────────────────────────────────── */
var SHEET_ENDPOINT = '';

/* ── helpers ──────────────────────────────────────────────── */
var $  = function (s, r) { return (r || document).querySelector(s); };
var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
function el(tag, cls, txt) { var n = document.createElement(tag); if (cls) n.className = cls; if (txt != null) n.textContent = txt; return n; }
function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
function pick(a, n) { return shuffle(a).slice(0, n); }
function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }
function esc(s) { return String(s).replace(/[&<>]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c]; }); }

/* storage that never throws (sandboxed frames block localStorage) */
var store = (function () {
  var ok = true, mem = {};
  try { localStorage.setItem('__t', '1'); localStorage.removeItem('__t'); } catch (e) { ok = false; }
  return {
    get: function (k, fb) { try { var v = ok ? localStorage.getItem(k) : mem[k]; return v == null ? fb : JSON.parse(v); } catch (e) { return fb; } },
    set: function (k, v) { try { var s = JSON.stringify(v); if (ok) localStorage.setItem(k, s); else mem[k] = s; } catch (e) {} },
    wipe: function () { ['cl.progress', 'cl.log', 'cl.name', 'cl.group', 'cl.endpoint', 'cl.rate', 'cl.voice'].forEach(function (k) { try { if (ok) localStorage.removeItem(k); } catch (e) {} delete mem[k]; }); }
  };
})();

var State = {
  progress: store.get('cl.progress', {}),
  log:      store.get('cl.log', []),
  name:     store.get('cl.name', ''),
  group:    store.get('cl.group', ''),
  endpoint: store.get('cl.endpoint', '') || SHEET_ENDPOINT,
  rate:     store.get('cl.rate', 0.9),
  voiceName: store.get('cl.voice', ''),
  save: function () {
    store.set('cl.progress', this.progress); store.set('cl.log', this.log);
    store.set('cl.name', this.name); store.set('cl.group', this.group);
    store.set('cl.endpoint', this.endpoint); store.set('cl.rate', this.rate);
    store.set('cl.voice', this.voiceName);
  }
};

function toast(msg) {
  var t = $('#toast');
  t.textContent = msg;
  t.classList.add('on');
  clearTimeout(toast._t);
  toast._t = setTimeout(function () { t.classList.remove('on'); }, 2600);
}

/* ── particle field ───────────────────────────────────────── */
function particles() {
  var c = $('#particles');
  var mm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!c || (mm && mm.matches)) return;
  var x = c.getContext && c.getContext('2d');
  if (!x) return;
  var dots = [], W = 0, H = 0;
  var COLORS = ['0,245,196', '255,77,184', '200,80,240'];
  function size() {
    W = c.width = window.innerWidth; H = c.height = window.innerHeight;
    var n = Math.min(70, Math.round(W * H / 26000));
    dots = [];
    for (var i = 0; i < n; i++) dots.push({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.5 + 0.4,
      vx: (Math.random() - 0.5) * 0.14, vy: (Math.random() - 0.5) * 0.14,
      a: Math.random() * 0.5 + 0.15, t: Math.random() * 6.28,
      c: COLORS[Math.floor(Math.random() * COLORS.length)]
    });
  }
  function frame() {
    x.clearRect(0, 0, W, H);
    for (var i = 0; i < dots.length; i++) {
      var d = dots[i];
      d.x += d.vx; d.y += d.vy; d.t += 0.012;
      if (d.x < -8) d.x = W + 8; if (d.x > W + 8) d.x = -8;
      if (d.y < -8) d.y = H + 8; if (d.y > H + 8) d.y = -8;
      var a = d.a * (0.6 + 0.4 * Math.sin(d.t));
      x.beginPath();
      x.arc(d.x, d.y, d.r, 0, 6.2832);
      x.fillStyle = 'rgba(' + d.c + ',' + a.toFixed(3) + ')';
      x.fill();
    }
    requestAnimationFrame(frame);
  }
  size(); frame();
  window.addEventListener('resize', size);
}

/* ── speech: pick the most natural voice available ────────── */
var Voice = {
  list: [], chosen: null, supported: 'speechSynthesis' in window,

  score: function (v) {
    var n = (v.name || '').toLowerCase(), s = 0;
    if (/en[-_]us/i.test(v.lang)) s += 40; else if (/^en/i.test(v.lang)) s += 22;
    if (/natural|neural/.test(n)) s += 70;
    if (/online/.test(n)) s += 25;
    if (/google/.test(n)) s += 38;
    if (/enhanced|premium/.test(n)) s += 30;
    if (/samantha|ava|aria|jenny|emma|michelle|guy|andrew|brian|sonia|libby|nova/.test(n)) s += 20;
    if (/desktop/.test(n)) s -= 18;
    if (/espeak|compact|pico|festival|flite/.test(n)) s -= 70;
    if (v.localService === false) s += 12;
    return s;
  },
  tier: function (s) { return s >= 80 ? '★ natural' : (s >= 45 ? 'good' : 'basic'); },

  init: function () {
    var self = this;
    if (!this.supported) {
      $('#voiceSelect').innerHTML = '<option>No voice on this device</option>';
      $('#voiceSelect').disabled = true;
      return;
    }
    function load() {
      var all = speechSynthesis.getVoices();
      if (!all.length) return;
      var en = all.filter(function (v) { return /^en/i.test(v.lang); });
      self.list = (en.length ? en : all).slice().sort(function (a, b) { return self.score(b) - self.score(a); });
      var sel = $('#voiceSelect');
      sel.innerHTML = '';
      self.list.forEach(function (v, i) {
        var s = self.score(v);
        var label = v.name.replace(/microsoft\s*/i, '').replace(/\s*\(.*?\)\s*/g, ' ').trim();
        sel.appendChild(new Option(label + ' · ' + self.tier(s), String(i)));
      });
      var idx = 0;
      if (State.voiceName) {
        var k = self.list.findIndex(function (v) { return v.name === State.voiceName; });
        if (k > -1) idx = k;
      }
      sel.value = String(idx);
      self.chosen = self.list[idx] || null;
      var best = self.list[0] ? self.score(self.list[0]) : 0;
      if (best < 45) $('#voiceHint') && ($('#voiceHint').hidden = false);
    }
    load();
    speechSynthesis.onvoiceschanged = load;
    $('#voiceSelect').addEventListener('change', function (e) {
      self.chosen = self.list[+e.target.value] || null;
      State.voiceName = self.chosen ? self.chosen.name : '';
      State.save();
      self.say('This is the voice you will hear.');
    });
  },

  say: function (text, opts) {
    opts = opts || {};
    if (!this.supported) { toast('This browser cannot speak. Try Chrome, Edge or Safari.'); return; }
    try { speechSynthesis.cancel(); } catch (e) {}
    var u = new SpeechSynthesisUtterance(text);
    if (this.chosen) { u.voice = this.chosen; u.lang = this.chosen.lang; } else { u.lang = 'en-US'; }
    u.rate = opts.rate || State.rate;
    u.pitch = 1; u.volume = 1;
    if (opts.onend) u.onend = opts.onend;
    speechSynthesis.speak(u);
  }
};

/* ── mid-sagittal vocal tract ─────────────────────────────── */
var COUNTERPART = { p:'b', b:'p', t:'d', d:'t', k:'g', g:'k', f:'v', v:'f',
  'θ':'ð', 'ð':'θ', s:'z', z:'s', 'ʃ':'ʒ', 'ʒ':'ʃ', 'tʃ':'dʒ', 'dʒ':'tʃ' };

function tractSVG(ph) {
  var a = ph.art || { shape: 'neutral', lips: 'open', velum: 'up', spot: [100, 130], nasal: 0 };
  var lips = TRACT.lips[a.lips] || TRACT.lips.open;
  var vel = a.velum === 'down' ? TRACT.velumDown : TRACT.velumUp;
  var air = a.nasal ? TRACT.airNasal : TRACT.airOral;
  var vib = ph.voiced
    ? '<g class="vib"><path d="M 176,222 q -7,6 0,12"/><path d="M 214,222 q 7,6 0,12"/></g>' : '';
  return '<svg class="tract" viewBox="26 48 196 208" role="img" aria-label="Where /' + ph.ipa + '/ is made in the mouth">' +
    '<path class="skin" d="' + TRACT.head + '"/>' +
    '<path class="wall" d="' + TRACT.nasalRoof + '"/>' +
    '<path class="wall" d="' + TRACT.nasalFloor + '"/>' +
    TRACT.turbinates.map(function (t) { return '<path class="soft" d="' + t + '"/>'; }).join('') +
    '<path class="palate" d="' + TRACT.palate + '"/>' +
    '<path class="velum" d="' + vel + '"/>' +
    '<path class="wall" d="' + TRACT.pharynx + '"/>' +
    '<path class="tongue" d="' + (TRACT.tongue[a.shape] || TRACT.tongue.neutral) + '"/>' +
    '<path class="teeth" d="' + TRACT.teethUp + '"/><path class="teeth" d="' + TRACT.teethLo + '"/>' +
    '<path class="soft" d="' + TRACT.epiglottis + '"/>' +
    '<path class="palate" d="' + TRACT.larynx + '"/>' +
    '<path class="fold" d="' + TRACT.folds[0] + '"/><path class="fold" d="' + TRACT.folds[1] + '"/>' + vib +
    '<path class="lip" d="' + lips[0] + '"/><path class="lip" d="' + lips[1] + '"/>' +
    '<path class="air" d="' + air + '"/>' +
    '<circle class="halo" cx="' + a.spot[0] + '" cy="' + a.spot[1] + '" r="15"/>' +
    '<circle class="spot" cx="' + a.spot[0] + '" cy="' + a.spot[1] + '" r="4.5"/>' +
    '<text x="60" y="72">nasal cavity</text><text x="36" y="164">lips</text>' +
    '<text x="112" y="200">tongue</text><text x="150" y="248">vocal folds</text>' +
    '</svg>';
}

/* ── study plan ───────────────────────────────────────────── */
function renderPlan() {
  var host = $('#planList');
  host.innerHTML = '';
  UNITS.forEach(function (u, i) {
    var p = State.progress[u.id] || {};
    var b = el('button', 'trial-card' + (p.mastered ? ' done' : ''));
    b.type = 'button';
    b.innerHTML =
      '<div class="tc-num">Unit ' + String(i + 1).padStart(2, '0') + '</div>' +
      '<div class="tc-ipa">' + u.focus.map(function (f) { return '/' + f + '/'; }).join(' ') + '</div>' +
      '<div class="tc-title">' + esc(u.title) + '</div>' +
      '<p class="tc-desc">' + esc(u.goal) + '</p>' +
      '<span class="tc-tag' + (p.best ? ' on' : '') + '">' + (p.best ? 'best ' + p.best + '%' : u.minutes + ' min') + '</span>';
    b.addEventListener('click', function () { openUnit(u.id, 'review'); });
    host.appendChild(b);
  });
  var items = UNITS.reduce(function (n, u) {
    return n + (u.pairs ? u.pairs.length : 0) + (u.sentences ? u.sentences.length : 0) +
      (u.which ? u.which.length : 0) + (u.sort ? u.sort.length : 0) + (u.rules ? u.rules.length : 0);
  }, 0);
  $('#statItems').textContent = items;
  $('#statUnits').textContent = UNITS.length;
  $('#statMastered').textContent = Object.keys(State.progress).filter(function (k) { return State.progress[k].mastered; }).length;
  var next = UNITS.filter(function (u) { return !(State.progress[u.id] || {}).mastered; })[0] || UNITS[0];
  $('#startNext').innerHTML = 'Start ' + esc(next.title) + ' <span class="btn-arrow">→</span>';
  $('#startNext').onclick = function () { openUnit(next.id, 'review'); };
}

/* ── review ───────────────────────────────────────────────── */
function wordButton(text, label) {
  var b = el('button', 'wordbtn');
  b.type = 'button';
  b.innerHTML = label || esc(text);
  b.addEventListener('click', function () {
    $$('.wordbtn.playing').forEach(function (x) { x.classList.remove('playing'); });
    b.classList.add('playing');
    Voice.say(text, { onend: function () { b.classList.remove('playing'); } });
    setTimeout(function () { b.classList.remove('playing'); }, 2600);
  });
  return b;
}

function renderReview(unitId) {
  var u = UNITS.filter(function (x) { return x.id === unitId; })[0];
  var host = $('#reviewBody');
  host.innerHTML = '';
  var card = el('div', 'arena stack');

  var head = el('div', 'rev-head');
  head.innerHTML = '<div class="rev-ipa">' + u.focus.map(function (f) { return '/' + f + '/'; }).join(' ') + '</div>' +
    '<div><h3>' + esc(u.title) + '</h3><p>' + esc(u.review.intro) + '</p></div>';
  card.appendChild(head);

  var grid = el('div', 'snd-cards');
  u.review.sounds.forEach(function (s) {
    var ph = PHONES[s.k] || { voiced: 0, manner: '', eg: [] };
    var c = el('div', 'snd-card' + (ph.voiced ? ' voiced' : ''));
    c.innerHTML = '<div class="snd-top"><span class="snd-ipa">/' + s.k + '/</span>' +
      '<span class="snd-tag">' + (ph.voiced ? 'voiced' : 'voiceless') + ' · ' + (ph.manner || '') + '</span></div>' +
      '<p>' + esc(s.how) + '</p><p class="mirror">' + esc(s.mirror) + '</p>';
    var row = el('div', 'wordrow');
    if (Synth.has(s.k)) {
      var sb = el('button', 'wordbtn', '▶ the sound /' + s.k + '/');
      sb.type = 'button';
      sb.addEventListener('click', function () { Synth.play(s.k); });
      row.appendChild(sb);
    }
    (ph.eg || []).filter(function (w) { return w !== '—'; }).forEach(function (w) { row.appendChild(wordButton(w)); });
    c.appendChild(row);
    grid.appendChild(c);
  });
  card.appendChild(grid);

  var tw = el('div');
  tw.innerHTML = '<div class="eyebrow">How it is spelled</div>' +
    '<table class="spelltable"><thead><tr><th>Spelling</th><th>Sound</th><th>Examples</th></tr></thead><tbody></tbody></table>';
  var tb = $('tbody', tw);
  u.review.spellings.forEach(function (sp) {
    var tr = el('tr');
    tr.innerHTML = '<td>' + esc(sp.p) + '</td><td class="ipa">' + (sp.s === '—' ? 'silent' : '/' + sp.s + '/') + '</td><td class="wordrow"></td>';
    var cell = tr.children[2];
    sp.ex.split(',').forEach(function (w) {
      w = w.trim();
      cell.appendChild(wordButton(w.replace(/\s*\/.*?\/\s*/g, ''), esc(w)));
    });
    tb.appendChild(tr);
  });
  card.appendChild(tw);

  var tr2 = el('div');
  tr2.innerHTML = '<div class="eyebrow">Watch out</div>';
  var ul = el('ul', 'traps');
  u.review.traps.forEach(function (t) { ul.appendChild(el('li', null, t)); });
  tr2.appendChild(ul);
  card.appendChild(tr2);

  var key = el('div', 'keyline');
  key.innerHTML = '<b>Remember this one line</b>' + esc(u.review.key);
  card.appendChild(key);

  var foot = el('div', 'rev-foot');
  var go = el('button', 'cta-btn', 'I am ready — practise this unit');
  go.type = 'button';
  go.addEventListener('click', function () { openUnit(u.id, 'practice'); });
  var lab = el('button', 'nav-btn', 'Open these sounds in the lab');
  lab.type = 'button';
  lab.addEventListener('click', function () { showView('lab'); selectPhone(u.focus[0]); });
  foot.appendChild(go); foot.appendChild(lab);
  card.appendChild(foot);

  host.appendChild(card);
}

/* ── sound lab ────────────────────────────────────────────── */
function renderLab() {
  var grid = $('#labGrid');
  grid.innerHTML = '';
  Object.keys(PHONES).forEach(function (k) {
    var p = PHONES[k];
    var b = el('button', 'sndbtn');
    b.type = 'button';
    b.dataset.key = k;
    b.dataset.v = p.voiced ? '1' : '0';
    b.setAttribute('aria-label', 'Play the sound ' + p.ipa);
    b.innerHTML = '<span class="s-ipa">' + p.ipa + '</span><span class="s-eg">' + p.eg.filter(function (w) { return w !== '—'; })[0] + '</span>';
    b.addEventListener('click', function () { selectPhone(k); Synth.play(k); });
    grid.appendChild(b);
  });
  $('#labPanel').innerHTML = '<p class="lab-empty">Tap any symbol. You will hear the consonant itself — the app builds the sound wave live, so there is no letter name and no word in the way.</p>';
}

function selectPhone(k) {
  var p = PHONES[k];
  if (!p) return;
  $$('.sndbtn').forEach(function (b) { b.classList.toggle('active', b.dataset.key === k); });
  var panel = $('#labPanel');
  panel.innerHTML = tractSVG(p) +
    '<div class="snd-top" style="margin-top:16px"><span class="snd-ipa" style="color:var(--' + (p.voiced ? 'pink' : 'teal') + ')">/' + p.ipa + '/</span>' +
    '<span class="snd-tag">' + (p.voiced ? 'voiced' : 'voiceless') + '</span></div>' +
    '<p style="color:rgba(255,255,255,.72);font-size:14px">' + esc(p.tip) + '</p>' +
    '<dl class="labfacts"><dt>Place</dt><dd>' + esc(p.place) + '</dd>' +
    '<dt>Manner</dt><dd>' + esc(p.manner) + '</dd>' +
    '<dt>Voicing</dt><dd>' + (p.voiced ? 'The vocal folds vibrate' : 'Air only, no vibration') + '</dd>' +
    '<dt>Air</dt><dd>' + (p.art && p.art.nasal ? 'Out through the nose' : 'Out through the mouth') + '</dd></dl>';

  var row = el('div', 'synthrow');
  var b1 = el('button', 'nav-btn', '▶ the sound alone');
  b1.type = 'button'; b1.addEventListener('click', function () { Synth.play(k); });
  row.appendChild(b1);
  var b2 = el('button', 'nav-btn', '▶ with a vowel');
  b2.type = 'button'; b2.addEventListener('click', function () { Synth.playSyllable(k); });
  row.appendChild(b2);
  if (COUNTERPART[k]) {
    var b3 = el('button', 'nav-btn', '▶ /' + k + '/ then /' + COUNTERPART[k] + '/');
    b3.type = 'button';
    b3.addEventListener('click', function () { Synth.playPair(k, COUNTERPART[k]); });
    row.appendChild(b3);
  }
  panel.appendChild(row);

  var words = el('div', 'wordrow');
  var labels = ['start', 'middle', 'end'];
  p.eg.forEach(function (w, i) {
    if (w !== '—') words.appendChild(wordButton(w, esc(w) + ' <span style="opacity:.45;font-size:11px">· ' + labels[i] + '</span>'));
  });
  panel.appendChild(words);
}

/* ── practice engine ──────────────────────────────────────── */
var Run = { unit: null, drill: null, items: [], i: 0, score: 0, streak: 0, best: 0, missed: [], answered: false, current: null };

function renderDrillPicker(unitId) {
  var u = UNITS.filter(function (x) { return x.id === unitId; })[0];
  var host = $('#drillPicker');
  host.innerHTML = '';
  host.hidden = false;
  $('#runner').hidden = true;
  $('#results').hidden = true;
  u.drills.concat(['check']).forEach(function (d) {
    var meta = DRILL_META[d];
    var count = d === 'check' ? 10 : (u[d] || []).length;
    var b = el('button', 'trial-card');
    b.type = 'button';
    b.innerHTML = '<div class="tc-num">' + (d === 'check' ? 'scored' : 'drill') + '</div>' +
      '<div class="tc-title">' + meta.name + '</div><p class="tc-desc">' + meta.desc + '</p>' +
      '<span class="tc-tag">' + count + ' items</span>';
    b.addEventListener('click', function () { startDrill(u, d); });
    host.appendChild(b);
  });
}

function buildItems(u, drill) {
  if (drill === 'check') {
    var bag = [];
    ['pairs', 'sentences', 'which', 'sort', 'rules'].forEach(function (t) {
      (u[t] || []).forEach(function (x) { bag.push({ type: t, d: x }); });
    });
    return pick(bag, Math.min(10, bag.length));
  }
  return shuffle((u[drill] || []).map(function (x) { return { type: drill, d: x }; }));
}

function startDrill(u, drill) {
  Run.unit = u; Run.drill = drill; Run.items = buildItems(u, drill);
  Run.i = 0; Run.score = 0; Run.streak = 0; Run.best = 0; Run.missed = [];
  $('#drillPicker').hidden = true;
  $('#results').hidden = true;
  $('#runner').hidden = false;
  $('#runnerKind').textContent = u.title + ' · ' + DRILL_META[drill].name;
  showItem();
  $('#runner').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function playPad() {
  var b = el('button', 'playpad');
  b.type = 'button';
  b.setAttribute('aria-label', 'Play the audio');
  b.innerHTML = '<svg viewBox="0 0 24 24" class="ico ico-fill" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
  b.addEventListener('click', function () { playCurrent(false); });
  return b;
}

function playCurrent(slow) {
  if (!Run.current || !Run.current.audio) return;
  var pad = $('.playpad');
  if (pad) { pad.classList.add('playing'); setTimeout(function () { pad.classList.remove('playing'); }, 1800); }
  Voice.say(Run.current.audio, { rate: slow ? Math.max(0.5, State.rate - 0.25) : State.rate });
}

function showItem() {
  var stage = $('#stage'), fb = $('#feedback');
  fb.className = 'verdict';
  $('#nextBtn').hidden = true;
  Run.answered = false;

  var item = Run.items[Run.i], u = Run.unit, total = Run.items.length;
  $('#posCount').textContent = (Run.i + 1) + '/' + total;
  $('#scoreCount').textContent = Run.score;
  $('#streakChip').hidden = Run.streak < 2;
  $('#streakN').textContent = Run.streak;
  $('#progFill').style.width = pct(Run.i, total) + '%';
  $('#runnerTitle').textContent = DRILL_META[item.type].prompt;

  stage.innerHTML = '';
  var hasAudio = item.type === 'pairs' || item.type === 'sentences' || item.type === 'which';
  $('#replayBtn').hidden = !hasAudio;
  $('#slowBtn').hidden = !hasAudio;

  var opts = [], correct = null, note = '', d = item.d, spokenIsA;

  if (item.type === 'pairs') {
    spokenIsA = Math.random() < 0.5;
    Run.current = { audio: spokenIsA ? d.a : d.b };
    correct = spokenIsA ? 'a' : 'b';
    opts = [{ id: 'a', main: d.a, sub: d.ipa ? '/' + d.ipa[0] + '/' : '' },
            { id: 'b', main: d.b, sub: d.ipa ? '/' + d.ipa[1] + '/' : '' }];
    note = 'The word was <strong>' + esc(spokenIsA ? d.a : d.b) + '</strong> <span class="ipa">/' + (d.ipa ? (spokenIsA ? d.ipa[0] : d.ipa[1]) : '') + '/</span>';
    stage.appendChild(playPad());

  } else if (item.type === 'sentences') {
    spokenIsA = Math.random() < 0.5;
    Run.current = { audio: spokenIsA ? d.a : d.b };
    correct = spokenIsA ? 'a' : 'b';
    opts = [{ id: 'a', main: d.wa, sub: d.a }, { id: 'b', main: d.wb, sub: d.b }];
    note = 'You heard: ' + esc(spokenIsA ? d.a : d.b).replace(esc(spokenIsA ? d.wa : d.wb), '<span class="ipa">' + esc(spokenIsA ? d.wa : d.wb) + '</span>');
    stage.appendChild(playPad());
    stage.appendChild(el('p', 'prompt', 'Only one word changes between the two.'));

  } else if (item.type === 'which') {
    Run.current = { audio: d.text };
    correct = d.ans;
    opts = (u.whichOptions || ['θ', 'ð']).map(function (o) { return { id: o, main: '/' + o + '/', ipa: true }; });
    stage.appendChild(playPad());
    var s = el('p', 'bigsent');
    s.innerHTML = esc(d.text).replace(esc(d.target), '<u>' + esc(d.target) + '</u>');
    stage.appendChild(s);
    note = '<strong>' + esc(d.target) + '</strong> contains <span class="ipa">/' + d.ans + '/</span>';

  } else if (item.type === 'sort') {
    Run.current = { audio: d.w };
    correct = d.ans;
    opts = (u.sortOptions || []).map(function (o) { return { id: o, main: o === '—' ? 'silent' : '/' + o + '/', ipa: o !== '—' }; });
    stage.appendChild(el('p', 'bigword', d.w));
    stage.appendChild(el('p', 'prompt', 'Say it out loud before you choose.'));
    note = '<strong>' + esc(d.w) + '</strong> ' + (d.ans === '—' ? 'has a silent letter there.' : 'contains <span class="ipa">/' + d.ans + '/</span>.') + ' ' + esc(d.why || '');

  } else {
    Run.current = { audio: d.ex };
    correct = d.ans;
    opts = d.options.map(function (o) { return { id: o, main: o === '—' ? 'silent' : '/' + o + '/', ipa: o !== '—' }; });
    var q = el('p', 'bigword');
    q.innerHTML = esc(d.q);
    q.style.fontSize = 'clamp(21px,4.2vw,32px)';
    stage.appendChild(q);
    stage.appendChild(el('p', 'prompt', d.ex));
    note = '<strong>' + esc(d.q) + '</strong> → <span class="ipa">' + (d.ans === '—' ? 'silent' : '/' + d.ans + '/') + '</span>. ' + esc(d.why || '');
  }

  Run.current.correct = correct;
  Run.current.note = note;
  Run.current.item = item;

  var box = el('div', 'options');
  if (opts.length > 3) box.style.maxWidth = '780px';
  shuffle(opts).forEach(function (o, idx) {
    var b = el('button', 'opt' + (o.ipa ? ' ipa-opt' : ''));
    b.type = 'button';
    b.dataset.id = o.id;
    b.innerHTML = '<span class="opt-main">' + esc(o.main) + '</span>' + (o.sub ? '<span class="opt-sub">' + esc(o.sub) + '</span>' : '') + '<kbd>' + (idx + 1) + '</kbd>';
    b.addEventListener('click', function () { answer(o.id); });
    box.appendChild(b);
  });
  stage.appendChild(box);

  if (hasAudio) setTimeout(function () { playCurrent(false); }, 280);
}

function answer(id) {
  if (Run.answered) return;
  Run.answered = true;
  var right = id === Run.current.correct;
  $$('.opt').forEach(function (b) {
    b.disabled = true;
    if (b.dataset.id === Run.current.correct) b.classList.add('correct');
    else if (b.dataset.id === id) b.classList.add('wrong');
  });

  if (right) { Run.score++; Run.streak++; Run.best = Math.max(Run.best, Run.streak); }
  else {
    Run.streak = 0;
    var it = Run.current.item, d = it.d;
    Run.missed.push(
      it.type === 'pairs' ? d.a + ' / ' + d.b :
      it.type === 'sentences' ? d.wa + ' / ' + d.wb :
      it.type === 'which' ? d.target + ' → /' + d.ans + '/' :
      it.type === 'sort' ? d.w + ' → /' + d.ans + '/' :
      d.q + ' → /' + d.ans + '/');
  }

  var fb = $('#feedback');
  fb.className = 'verdict show ' + (right ? 'good' : 'bad');
  fb.innerHTML = '<div class="verdict-head">' + (right ? 'Correct' : 'Not quite') + '</div><div class="verdict-why">' + Run.current.note + '</div>';
  var hear = el('button', 'nav-btn', '▶ Hear it');
  hear.type = 'button';
  hear.style.marginTop = '10px';
  hear.addEventListener('click', function () { Voice.say(Run.current.audio || ''); });
  fb.appendChild(hear);

  $('#scoreCount').textContent = Run.score;
  $('#streakChip').hidden = Run.streak < 2;
  $('#streakN').textContent = Run.streak;

  var nb = $('#nextBtn');
  nb.hidden = false;
  nb.innerHTML = (Run.i + 1 >= Run.items.length ? 'See the result' : 'Next') + ' <kbd>↵</kbd>';
  nb.focus();
}

function nextItem() {
  if (!Run.answered) return;
  Run.i++;
  if (Run.i >= Run.items.length) { $('#progFill').style.width = '100%'; endDrill(); }
  else showItem();
}

function endDrill() {
  $('#runner').hidden = true;
  $('#drillPicker').hidden = false;
  var total = Run.items.length, score = pct(Run.score, total), pass = score >= 80;

  var p = State.progress[Run.unit.id] || { best: 0, attempts: 0, mastered: false };
  p.attempts += 1;
  if (Run.drill === 'check') {
    p.best = Math.max(p.best || 0, score);
    if (pass) p.mastered = true;
  }
  State.progress[Run.unit.id] = p;
  State.log.unshift({ t: Date.now(), unit: Run.unit.title, drill: DRILL_META[Run.drill].name, score: Run.score, total: total });
  State.log = State.log.slice(0, 40);
  State.save();
  sendResult(Run.unit, Run.drill, Run.score, total, score);

  var r = $('#results');
  r.hidden = false;
  r.innerHTML = '<div class="score-lbl">' + esc(Run.unit.title) + ' · ' + DRILL_META[Run.drill].name + '</div>' +
    '<div class="score-num ' + (pass ? 'grad-teal' : 'grad-pink') + '">' + score + '%</div>' +
    '<div class="score-lbl">' + Run.score + ' of ' + total + ' correct</div>' +
    '<p class="score-msg">' + (Run.drill === 'check'
      ? (pass ? 'This unit is marked as mastered.' : 'You need 80% to master the unit — go back to the review and run it again.')
      : 'Now try the unit check when you feel ready.') +
      (Run.best > 2 ? ' Longest streak: ' + Run.best + '.' : '') + '</p>';

  if (Run.missed.length) {
    var m = el('div', 'missed');
    m.innerHTML = '<h4>Take these back to the review</h4>';
    var ul = el('ul');
    Run.missed.forEach(function (x) {
      var li = el('li');
      li.innerHTML = '<span class="x">✕</span><span>' + esc(x) + '</span>';
      ul.appendChild(li);
    });
    m.appendChild(ul);
    r.appendChild(m);
  }
  var acts = el('div', 'menu-actions');
  var again = el('button', 'cta-btn small-cta', 'Run it again');
  again.type = 'button';
  again.addEventListener('click', function () { startDrill(Run.unit, Run.drill); });
  var rev = el('button', 'nav-btn', 'Back to the review');
  rev.type = 'button';
  rev.addEventListener('click', function () { openUnit(Run.unit.id, 'review'); });
  acts.appendChild(again); acts.appendChild(rev);
  r.appendChild(acts);
  r.scrollIntoView({ behavior: 'smooth', block: 'center' });
  renderPlan(); renderProgress();
}

/* ── progress + spreadsheet ───────────────────────────────── */
function renderProgress() {
  var tb = $('#progressTable tbody');
  tb.innerHTML = '';
  UNITS.forEach(function (u) {
    var p = State.progress[u.id] || { best: 0, attempts: 0 };
    var tr = el('tr');
    tr.innerHTML = '<td>' + esc(u.title) + '</td><td>' + (p.best ? p.best + '%' : '—') + '</td><td>' + (p.attempts || 0) + '</td>' +
      '<td><div class="bar"><span style="width:' + (p.best || 0) + '%"></span></div></td>';
    tb.appendChild(tr);
  });
  var list = $('#logList');
  list.innerHTML = '';
  if (!State.log.length) { list.innerHTML = '<li>Nothing yet. Finish a drill and it appears here.</li>'; }
  else State.log.forEach(function (r) {
    var d = new Date(r.t), li = el('li');
    li.innerHTML = '<span>' + esc(r.unit) + ' · ' + esc(r.drill) + ' — <strong>' + r.score + '/' + r.total + '</strong></span>' +
      '<time>' + d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + '</time>';
    list.appendChild(li);
  });
  var on = !!State.endpoint;
  $('#syncState').classList.toggle('on', on);
  $('#syncText').textContent = on ? 'connected to the teacher spreadsheet' : 'not connected';
}

function post(payload) {
  if (!State.endpoint) return false;
  try {
    var body = new URLSearchParams(payload);
    fetch(State.endpoint, { method: 'POST', mode: 'no-cors', body: body })['catch'](function () {});
    return true;
  } catch (e) { return false; }
}

function sendResult(unit, drill, score, total, percent) {
  post({
    type: 'drill',
    timestamp: new Date().toISOString(),
    student: State.name || 'anonymous',
    group: State.group || '',
    unit: unit.title,
    drill: DRILL_META[drill].name,
    score: String(score), total: String(total), percent: String(percent)
  });
}

function sendSummary() {
  if (!State.endpoint) { toast('No teacher endpoint set yet.'); return; }
  var mastered = UNITS.filter(function (u) { return (State.progress[u.id] || {}).mastered; }).length;
  var bests = UNITS.map(function (u) { return u.title + '=' + ((State.progress[u.id] || {}).best || 0) + '%'; }).join('; ');
  post({
    type: 'summary',
    timestamp: new Date().toISOString(),
    student: State.name || 'anonymous',
    group: State.group || '',
    unit: 'ALL UNITS', drill: 'Summary',
    score: String(mastered), total: String(UNITS.length),
    percent: String(pct(mastered, UNITS.length)),
    detail: bests
  });
  toast('Summary sent to your teacher.');
}

function csv() {
  var rows = [['student', 'group', 'date', 'unit', 'drill', 'score', 'total', 'percent']];
  State.log.forEach(function (r) {
    rows.push([State.name || 'anonymous', State.group || '', new Date(r.t).toISOString(), r.unit, r.drill, r.score, r.total, pct(r.score, r.total)]);
  });
  return rows.map(function (r) { return r.map(function (c) { return '"' + String(c).replace(/"/g, '""') + '"'; }).join(','); }).join('\n');
}

function download(name, text, mime) {
  var blob = new Blob([text], { type: mime || 'text/plain;charset=utf-8' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a); a.click();
  setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
}

function reportCode() {
  var payload = {
    n: State.name || 'anonymous', g: State.group || '',
    d: new Date().toISOString().slice(0, 10),
    p: Object.keys(State.progress).map(function (k) { return k + ':' + (State.progress[k].best || 0); }).join('|')
  };
  try { return btoa(unescape(encodeURIComponent(JSON.stringify(payload)))); }
  catch (e) { return JSON.stringify(payload); }
}

/* ── recorder ─────────────────────────────────────────────── */
var Rec = { mr: null, chunks: [] };
function toggleRecord() {
  var btn = $('#recBtn'), audio = $('#recAudio');
  if (Rec.mr && Rec.mr.state === 'recording') { Rec.mr.stop(); return; }
  if (!navigator.mediaDevices || !window.MediaRecorder) { toast('Recording is not available in this browser.'); return; }
  navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
    Rec.chunks = [];
    Rec.mr = new MediaRecorder(stream);
    Rec.mr.ondataavailable = function (e) { Rec.chunks.push(e.data); };
    Rec.mr.onstop = function () {
      audio.src = URL.createObjectURL(new Blob(Rec.chunks, { type: 'audio/webm' }));
      audio.hidden = false;
      btn.classList.remove('recording');
      btn.textContent = '● Record again';
      stream.getTracks().forEach(function (t) { t.stop(); });
    };
    Rec.mr.start();
    btn.classList.add('recording');
    btn.textContent = '■ Stop';
    setTimeout(function () { if (Rec.mr && Rec.mr.state === 'recording') Rec.mr.stop(); }, 20000);
  })['catch'](function () { toast('Microphone permission was refused.'); });
}

/* ── navigation ───────────────────────────────────────────── */
function showView(name) {
  $$('.view').forEach(function (v) { v.classList.toggle('active', v.id === 'view-' + name); });
  $$('.tab').forEach(function (t) { t.classList.toggle('active', t.dataset.view === name); });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openUnit(unitId, where) {
  $('#reviewUnit').value = unitId;
  $('#practiceUnit').value = unitId;
  renderReview(unitId);
  renderDrillPicker(unitId);
  showView(where || 'review');
}

function fillUnitSelects() {
  ['#reviewUnit', '#practiceUnit'].forEach(function (sel) {
    var s = $(sel);
    s.innerHTML = '';
    UNITS.forEach(function (u, i) { s.appendChild(new Option((i + 1) + '. ' + u.title, u.id)); });
  });
}

/* ── boot ─────────────────────────────────────────────────── */
function init() {
  particles();
  Voice.init();
  fillUnitSelects();
  renderPlan();
  renderReview(UNITS[0].id);
  renderLab();
  renderDrillPicker(UNITS[0].id);
  renderProgress();

  $('#rateRange').value = State.rate;
  $('#rateOut').textContent = Number(State.rate).toFixed(2);
  $('#rateRange').addEventListener('input', function (e) {
    State.rate = parseFloat(e.target.value);
    $('#rateOut').textContent = State.rate.toFixed(2);
    State.save();
  });
  $('#testVoice').addEventListener('click', function () {
    Voice.say('She sells the cheap ships. This is the thirteenth measure.');
  });

  $('#tabs').addEventListener('click', function (e) {
    var t = e.target.closest('.tab');
    if (t) showView(t.dataset.view);
  });
  $('#printPlan').addEventListener('click', function () { showView('plan'); setTimeout(function () { window.print(); }, 220); });
  $('#reviewUnit').addEventListener('change', function (e) { renderReview(e.target.value); });
  $('#practiceUnit').addEventListener('change', function (e) { renderDrillPicker(e.target.value); });

  $('#quitDrill').addEventListener('click', function () { $('#runner').hidden = true; $('#drillPicker').hidden = false; });
  $('#replayBtn').addEventListener('click', function () { playCurrent(false); });
  $('#slowBtn').addEventListener('click', function () { playCurrent(true); });
  $('#nextBtn').addEventListener('click', nextItem);
  $('#recBtn').addEventListener('click', toggleRecord);

  var n1 = $('#studentName'), n2 = $('#studentName2'), gp = $('#studentGroup'), ep = $('#endpointUrl');
  n1.value = n2.value = State.name;
  gp.value = State.group;
  ep.value = State.endpoint;
  function setName(v) { State.name = v.trim(); n1.value = n2.value = State.name; State.save(); }
  n1.addEventListener('change', function (e) { setName(e.target.value); });
  n2.addEventListener('change', function (e) { setName(e.target.value); });
  gp.addEventListener('change', function (e) { State.group = e.target.value.trim(); State.save(); });
  ep.addEventListener('change', function (e) {
    State.endpoint = e.target.value.trim(); State.save(); renderProgress();
    toast(State.endpoint ? 'Connected. Results will be sent automatically.' : 'Endpoint cleared.');
  });

  $('#sendNow').addEventListener('click', sendSummary);
  $('#exportCsv').addEventListener('click', function () {
    if (!State.log.length) { toast('No results to export yet.'); return; }
    download('consonant-lab-results.csv', csv(), 'text/csv;charset=utf-8');
  });
  $('#copyCode').addEventListener('click', function () {
    var code = reportCode();
    if (navigator.clipboard) navigator.clipboard.writeText(code).then(function () { toast('Report code copied.'); }, function () { toast(code); });
    else toast(code);
  });
  $('#resetAll').addEventListener('click', function () {
    if (!confirm('Delete all progress on this device?')) return;
    State.progress = {}; State.log = [];
    store.wipe(); State.save();
    renderPlan(); renderProgress(); toast('Progress cleared.');
  });

  document.addEventListener('keydown', function (e) {
    if ($('#runner').hidden) return;
    if (e.target.matches('input, select, textarea')) return;
    var k = e.key.toLowerCase();
    if (k === 'r') { e.preventDefault(); playCurrent(false); }
    else if (k === 'enter' && !$('#nextBtn').hidden) { e.preventDefault(); nextItem(); }
    else if (k === 'escape') { $('#runner').hidden = true; $('#drillPicker').hidden = false; }
    else if (/^[1-4]$/.test(k) && !Run.answered) {
      var b = $$('.opt')[+k - 1];
      if (b) { e.preventDefault(); b.click(); }
    }
  });

  /* browsers only allow audio after a gesture */
  document.addEventListener('pointerdown', function once() {
    Synth.unlock();
    document.removeEventListener('pointerdown', once);
  });
  window.addEventListener('beforeunload', function () { try { speechSynthesis.cancel(); } catch (e) {} });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();

})();
