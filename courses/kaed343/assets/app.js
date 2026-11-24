/* course-site runtime: theme, menu, copy, saved progress, tabs, TOC, cheat-sheet filter, OS picker.
   UI strings come from window.COURSE_I18N (written by build.py). Everything degrades to plain HTML. */
(function () {
  var root = document.documentElement, T = window.COURSE_I18N || {};
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  function fmt(s, a, b) { return String(s).replace("{0}", a).replace("{1}", b); }

  // theme toggle
  var tb = document.getElementById("theme-btn");
  if (tb) tb.addEventListener("click", function () {
    var cur = root.getAttribute("data-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var next = cur === "dark" ? "light" : "dark"; root.setAttribute("data-theme", next); store("theme", next);
  });

  // mobile menu
  var mb = document.getElementById("menu-btn"), links = document.getElementById("nav-links");
  if (mb && links) mb.addEventListener("click", function () {
    var open = links.classList.toggle("open"); mb.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // toast + copy
  var toast = document.createElement("div"); toast.className = "toast"; toast.setAttribute("role", "status"); document.body.appendChild(toast);
  function say(m) { toast.textContent = m; toast.classList.add("show"); clearTimeout(say.t); say.t = setTimeout(function () { toast.classList.remove("show"); }, 1600); }
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise(function (res, rej) {
      var ta = document.createElement("textarea"); ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); res(); } catch (e) { rej(e); } finally { document.body.removeChild(ta); }
    });
  }
  document.querySelectorAll(".code .copy").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.parentNode.querySelector("pre").innerText.split("\n").map(function (l) { return l.replace(/^(\$|❯) /, ""); }).join("\n");
      copyText(text).then(function () {
        btn.textContent = T.copied || "Copied"; btn.classList.add("ok");
        setTimeout(function () { btn.textContent = T.copy || "Copy"; btn.classList.remove("ok"); }, 1500);
      });
    });
  });
  document.querySelectorAll("[data-copy]").forEach(function (el) {
    el.setAttribute("tabindex", "0"); el.setAttribute("title", T.clickToCopy || "Click to copy");
    el.addEventListener("click", function () { copyText(el.getAttribute("data-copy")).then(function () { say((T.copiedPrefix || "Copied: ") + el.getAttribute("data-copy")); }); });
    el.addEventListener("keydown", function (e) { if (e.key === "Enter") el.click(); });
  });

  // saved checkboxes (prepare checklist + lab steps). Key namespace keeps courses on one host apart.
  var NS = (window.COURSE_ID || "course") + ":";
  document.querySelectorAll("input[type=checkbox][data-key]").forEach(function (b) {
    var k = NS + b.getAttribute("data-key");
    if (store(k) === "1") b.checked = true;
    b.addEventListener("change", function () { store(k, b.checked ? "1" : "0"); });
  });

  // lab step cards: done state, fold, per-lab progress
  function refreshLab(box) {
    var steps = box.querySelectorAll(".step"), done = 0;
    steps.forEach(function (st) { var c = st.querySelector(".check input"), on = !!(c && c.checked); st.classList.toggle("done", on); if (on) done++; });
    var lbl = box.querySelector("[data-steps-label]"), bar = box.querySelector(".lab-progress .bar i");
    if (lbl) lbl.textContent = fmt(T.stepsDone || "{0} of {1} steps done", done, steps.length);
    if (bar) bar.style.width = (steps.length ? done / steps.length * 100 : 0) + "%";
    document.querySelectorAll('[data-lab-pill="' + box.getAttribute("data-lab") + '"]').forEach(function (p) { p.classList.toggle("done", steps.length > 0 && done === steps.length); });
  }
  var labs = document.querySelectorAll(".lab-steps");
  labs.forEach(function (box) { box.addEventListener("change", function () { refreshLab(box); }); refreshLab(box); });
  document.querySelectorAll(".step .step-h").forEach(function (h) {
    h.addEventListener("click", function () { var st = h.parentNode; if (st.classList.contains("done")) st.classList.toggle("peek"); });
  });
  document.querySelectorAll(".step .check input").forEach(function (c) { c.addEventListener("change", function () { c.closest(".step").classList.remove("peek"); }); });
  var reset = document.getElementById("reset-checks");
  if (reset) reset.addEventListener("click", function () {
    if (!confirm(T.resetConfirm || "Clear all ticked steps?")) return;
    document.querySelectorAll("input[type=checkbox][data-key]").forEach(function (b) { b.checked = false; store(NS + b.getAttribute("data-key"), "0"); });
    labs.forEach(refreshLab);
  });

  // home journey: progress per lab from saved step keys (data-lab-progress="1,1b" data-steps="6,4")
  document.querySelectorAll("[data-lab-progress]").forEach(function (el) {
    var ids = el.getAttribute("data-lab-progress").split(","), counts = (el.getAttribute("data-steps") || "").split(","), done = 0, total = 0;
    ids.forEach(function (id, j) { var n = parseInt(counts[j], 10) || 0; for (var i = 1; i <= n; i++) { total++; if (store(NS + "lab-" + id + "-s" + i) === "1") done++; } });
    var bar = el.querySelector(".bar i"), lbl = el.querySelector("[data-lab-progress-label]");
    if (bar) bar.style.width = (total ? done / total * 100 : 0) + "%";
    if (lbl) lbl.textContent = done === 0 ? (T.notStarted || "Not started") : done === total ? (T.allDone || "All done") : fmt(T.stepsDone || "{0} of {1} steps done", done, total);
  });

  // generic ARIA tabs (schedule days)
  document.querySelectorAll("[role=tablist]").forEach(function (list) {
    var tabs = list.querySelectorAll("[role=tab]");
    tabs.forEach(function (t) {
      t.addEventListener("click", function () {
        tabs.forEach(function (o) { o.setAttribute("aria-selected", o === t ? "true" : "false"); document.getElementById(o.getAttribute("aria-controls")).hidden = o !== t; });
      });
    });
  });

  // tabbed doc (labs page): sidebar is the tab list, one section visible at a time, remembered
  var tabDoc = document.querySelector(".tabbed");
  if (tabDoc) {
    var KEY = NS + "tab:" + location.pathname, secs = [].slice.call(tabDoc.querySelectorAll(".tab-sec[id]"));
    var tlinks = document.querySelectorAll(".toc a[href^='#']");
    var show = function (id, scroll) {
      var el = id && document.getElementById(id), sec = el && el.closest(".tab-sec[id]");
      if (!sec) return false;
      secs.forEach(function (s) { s.classList.toggle("on", s === sec); });
      tlinks.forEach(function (a) { var on = a.getAttribute("href") === "#" + sec.id; a.classList.toggle("active", on); if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current"); });
      store(KEY, sec.id);
      if (scroll) el.scrollIntoView({ block: "start" });
      return true;
    };
    if (!show(decodeURIComponent(location.hash.slice(1)), true) && !show(store(KEY), false) && secs[0]) show(secs[0].id, false);
    window.addEventListener("hashchange", function () { show(decodeURIComponent(location.hash.slice(1)), true); });
  } else {
    // scrollspy for long single-flow docs
    var links2 = document.querySelectorAll(".toc a[href^='#']"), targets = [];
    links2.forEach(function (a) { var el = document.getElementById(a.getAttribute("href").slice(1)); if (el) targets.push(el); });
    if (targets.length) {
      var spy = function () {
        var cur = targets[0];
        targets.forEach(function (s) { if (s.getBoundingClientRect().top - 100 <= 1) cur = s; });
        if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) cur = targets[targets.length - 1];
        links2.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + cur.id); });
      };
      addEventListener("scroll", function () { requestAnimationFrame(spy); }, { passive: true }); spy();
    }
  }

  // cheat sheet: level chips + search
  var q = document.getElementById("cs-search");
  if (q) {
    var level = "all", groups = document.querySelectorAll(".cmd-group"), empty = document.querySelector(".empty"), chips = document.querySelectorAll(".chips [data-filter]");
    var apply = function () {
      var term = q.value.trim().toLowerCase(), any = false;
      groups.forEach(function (g) {
        var ok = level === "all" || g.getAttribute("data-level") === level, shown = 0;
        g.querySelectorAll(".cmd").forEach(function (r) { var hit = ok && (!term || r.textContent.toLowerCase().indexOf(term) !== -1); r.hidden = !hit; if (hit) shown++; });
        g.hidden = !shown; if (shown) any = true;
      });
      if (empty) empty.style.display = any ? "none" : "block";
    };
    chips.forEach(function (c) { c.addEventListener("click", function () { level = c.getAttribute("data-filter"); chips.forEach(function (o) { o.setAttribute("aria-pressed", o === c ? "true" : "false"); }); apply(); }); });
    q.addEventListener("input", apply); apply();
  }


  // quizzes: check, explain, score; answers + result saved per quiz id
  document.querySelectorAll(".quiz[data-quiz]").forEach(function (qz) {
    var key = NS + "quiz:" + qz.getAttribute("data-quiz"), qs = qz.querySelectorAll(".q"), scoreEl = qz.querySelector("[data-quiz-score]");
    function answers() { var a = {}; qz.querySelectorAll("input").forEach(function (i) { if ((i.type === "radio" && i.checked) || (i.type === "number" && i.value !== "")) a[i.name] = i.value; }); return a; }
    function save(checked) { store(key, JSON.stringify({ a: answers(), c: checked })); }
    function grade() {
      var ok = 0;
      qs.forEach(function (q) {
        var right;
        if (q.hasAttribute("data-num")) {
          var inp = q.querySelector("input"), v = parseFloat(inp.value);
          right = !isNaN(v) && Math.abs(v - parseFloat(q.getAttribute("data-num"))) <= parseFloat(q.getAttribute("data-tol") || "0") + 1e-9;
        } else {
          var ans = q.getAttribute("data-answer"), pick = q.querySelector("input:checked");
          right = !!pick && pick.value === ans;
          q.querySelectorAll("label.opt").forEach(function (l) { var i = l.querySelector("input"); l.classList.toggle("key", i.value === ans); l.classList.toggle("picked", i.checked); });
        }
        q.classList.add("done"); q.classList.toggle("right", right); q.classList.toggle("wrong", !right); if (right) ok++;
      });
      if (scoreEl) scoreEl.textContent = fmt(T.score || "{0} of {1} correct", ok, qs.length);
      return ok;
    }
    function clear() {
      qs.forEach(function (q) { q.classList.remove("done", "right", "wrong"); q.querySelectorAll("label.opt").forEach(function (l) { l.classList.remove("key", "picked"); }); });
      if (scoreEl) scoreEl.textContent = "";
    }
    try { var saved = JSON.parse(store(key) || "null"); if (saved) {
      Object.keys(saved.a || {}).forEach(function (n) { qz.querySelectorAll('input[name="' + n + '"]').forEach(function (i) { if (i.type === "radio") i.checked = i.value === saved.a[n]; else i.value = saved.a[n]; }); });
      if (saved.c) grade();
    } } catch (e) {}
    qz.addEventListener("change", function () { save(false); clear(); });
    qz.querySelector("[data-quiz-check]").addEventListener("click", function () { grade(); save(true); });
    qz.querySelector("[data-quiz-retry]").addEventListener("click", function () { qz.querySelectorAll("input").forEach(function (i) { if (i.type === "radio") i.checked = false; else i.value = ""; }); clear(); store(key, ""); });
  });

  // OS picker: one choice for every page
  var picks = document.querySelectorAll("[data-os-pick]");
  picks.forEach(function (p) {
    p.value = root.getAttribute("data-os") || "win";
    p.addEventListener("change", function () { root.setAttribute("data-os", p.value); picks.forEach(function (o) { o.value = p.value; }); store("os", p.value); });
  });
})();
