/* ============================================================
   ANOOP PORTFOLIO — script.js
   ============================================================ */

/* ── YEAR ─────────────────────────────────────────────────── */
document.querySelector("#year").textContent = new Date().getFullYear();

/* ── LOADER ───────────────────────────────────────────────── */
const ldCounter = document.getElementById("ldCounter");
const loader    = document.getElementById("loader");
let ldVal = 0;
const ldTimer = setInterval(() => {
  ldVal = Math.min(ldVal + Math.floor(Math.random() * 6) + 2, 100);
  ldCounter.textContent = String(ldVal).padStart(2, "0");
  if (ldVal >= 100) {
    clearInterval(ldTimer);
    setTimeout(() => {
      loader.classList.add("exit");
      setTimeout(() => { loader.style.display = "none"; }, 650);
    }, 300);
  }
}, 40);

/* ── SCROLL PROGRESS ──────────────────────────────────────── */
const progress = document.querySelector(".top-progress");
addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = (scrollY / max * 100) + "%";
}, { passive: true });

/* ── MOBILE MENU ──────────────────────────────────────────── */
const menuBtn = document.getElementById("menuBtn");
const nav     = document.getElementById("main-nav");
menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

/* ── THEME TOGGLE ─────────────────────────────────────────── */
const html     = document.documentElement;
const themeBtn = document.getElementById("themeToggle");

// Persist preference — default light
const saved = localStorage.getItem("theme") || "light";
html.setAttribute("data-theme", saved);

themeBtn.addEventListener("click", () => {
  const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

/* ── REVEAL ON SCROLL ─────────────────────────────────────── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("show");
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

/* ── CUSTOM CURSOR (desktop only) ────────────────────────── */
if (matchMedia("(pointer:fine)").matches) {
  const cursor = document.querySelector(".cursor");
  const dot    = cursor.querySelector(".dot");
  const trail  = cursor.querySelector(".trail");

  let x = innerWidth / 2, y = innerHeight / 2;
  let tx = x, ty = y;

  addEventListener("mousemove", e => {
    tx = e.clientX; ty = e.clientY;
    dot.style.left  = tx + "px";
    dot.style.top   = ty + "px";
  });

  (function animate() {
    x += (tx - x) * 0.12;
    y += (ty - y) * 0.12;
    trail.style.left = x + "px";
    trail.style.top  = y + "px";
    requestAnimationFrame(animate);
  })();

  document.querySelectorAll("a,.magnetic,.project-visual").forEach(el => {
    el.addEventListener("mouseenter", () => cursor.classList.add("active"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("active"));
  });

  /* Magnetic buttons */
  document.querySelectorAll(".magnetic").forEach(el => {
    el.addEventListener("mousemove", e => {
      const r  = el.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width  / 2) * 0.1;
      const dy = (e.clientY - r.top  - r.height / 2) * 0.1;
      el.style.transform = `translate(${dx}px,${dy}px)`;
    });
    el.addEventListener("mouseleave", () => el.style.transform = "");
  });

  /* 3-D tilt on project cards */  document.querySelectorAll(".project").forEach(card => {
    const visual = card.querySelector(".project-visual");
    card.addEventListener("mousemove", e => {
      const r  = card.getBoundingClientRect();
      const dx = (e.clientX - r.left) / r.width  - 0.5;
      const dy = (e.clientY - r.top)  / r.height - 0.5;
      visual.style.transform = `perspective(900px) rotateY(${dx * 4}deg) rotateX(${-dy * 4}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => visual.style.transform = "");
  });
}

/* ── SKILL TAGS — staggered pop-in ───────────────────────── */
document.querySelectorAll(".skill-list span").forEach((tag, i) => {
  tag.style.transitionDelay = (i * 40) + "ms";
});

/* ── STATS COUNTER ANIMATION ──────────────────────────────── */
function animateCounter(el, target, duration) {
  const isSymbol = isNaN(parseInt(target));
  if (isSymbol) return; // skip ✦ ∞
  let start = 0;
  const step = Math.ceil(target / (duration / 16));
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { start = target; clearInterval(timer); }
    el.textContent = String(start).padStart(2, "0");
  }, 16);
}

const statObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const strong = e.target.querySelector("strong");
      if (strong) {
        const val = parseInt(strong.textContent);
        if (!isNaN(val)) animateCounter(strong, val, 800);
      }
      statObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll(".stats div").forEach(d => statObserver.observe(d));

/* ── HEADER BORDER ON SCROLL ──────────────────────────────── */
const header = document.querySelector("header");
addEventListener("scroll", () => {
  header.style.borderBottomColor = scrollY > 20 ? "var(--line2)" : "var(--line)";
}, { passive: true });

/* ── TASK TRACKER — animate stat numbers on reveal ────────── */
const taskVisual = document.querySelector(".task-visual");
if (taskVisual) {
  const taskObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll(".tv-num[data-target]").forEach(el => {
        const target = parseInt(el.dataset.target);
        let n = 0;
        const step = Math.max(1, Math.floor(target / 20));
        const t = setInterval(() => {
          n = Math.min(n + step, target);
          el.textContent = n;
          if (n >= target) clearInterval(t);
        }, 55);
      });
      taskObserver.unobserve(e.target);
    });
  }, { threshold: 0.3 });
  taskObserver.observe(taskVisual);
}
