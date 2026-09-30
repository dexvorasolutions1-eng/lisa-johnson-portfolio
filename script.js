/* ============================================================
   LISA JOHNSON — script.js (FINAL v14)
   Comics | 2D Arts | Emotes | Tattoos | 3D Models
   Applications | Websites | About — error-proof
   (Branding removed)
   ============================================================ */

/* IMAGE PROBE */
function probeImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}

/* 1. HERO + ABOUT — sabse pehle */
function buildHeroAndAbout() {
  const cover = (typeof FIXED_IMAGES !== "undefined") ? FIXED_IMAGES.cover : "images/cover.webp";
  const profile = (typeof FIXED_IMAGES !== "undefined") ? FIXED_IMAGES.profile : "images/profile.webp";
  const aboutImg = (typeof FIXED_IMAGES !== "undefined") ? FIXED_IMAGES.aboutBg : "images/about.webp";

  const heroBg = document.getElementById("heroBg");
  if (heroBg) {
    probeImage(cover).then((exists) => {
      if (!exists) { console.warn("cover.webp nahi mili:", cover); return; }
      heroBg.style.backgroundImage = `url('${cover}?v=2')`;
      heroBg.classList.add("has-image");
      const label = heroBg.querySelector(".hero-banner-label, .banner-placeholder-label");
      if (label) label.style.display = "none";
      console.log("✦ Hero banner loaded:", cover);
    });
  }

  const heroAvatar = document.getElementById("heroAvatar");
  if (heroAvatar) {
    probeImage(profile).then((exists) => {
      if (!exists) { console.warn("profile.webp nahi mili:", profile); return; }
      const img = document.createElement("img");
      img.className = "ph-real-img";
      img.src = profile;
      img.alt = "Lisa Johnson";
      img.style.borderRadius = "50%";
      heroAvatar.appendChild(img);
      heroAvatar.classList.add("has-image");
      console.log("✦ Hero avatar loaded:", profile);
    });
  }

  const aboutBg = document.getElementById("aboutBg");
  if (aboutBg) {
    probeImage(aboutImg).then((aboutExists) => {
      const src = aboutExists ? aboutImg : cover;
      probeImage(src).then((exists) => {
        if (!exists) return;
        aboutBg.style.backgroundImage = `url('${src}?v=2')`;
        aboutBg.classList.add("has-image");
        const label = aboutBg.querySelector(".banner-placeholder-label");
        if (label) label.style.display = "none";
        console.log("✦ About bg loaded:", src);
      });
    });
  }

  const aboutAvatar = document.getElementById("aboutAvatar");
  if (aboutAvatar) {
    probeImage(profile).then((exists) => {
      if (!exists) return;
      const img = document.createElement("img");
      img.className = "ph-real-img";
      img.src = profile;
      img.alt = "Lisa Johnson";
      img.style.borderRadius = "50%";
      aboutAvatar.appendChild(img);
      aboutAvatar.classList.add("has-image");
      console.log("✦ About avatar loaded:", profile);
    });
  }
}

/* 2. GALLERIES */
function createGalleryBox(config, i) {
  const box = document.createElement("div");
  box.className = "placeholder-box";
  box.innerHTML = `
    <span class="ph-icon">✦</span>
    <span class="ph-label">${config.label} ${i}</span>
    <span class="ph-index">${config.prefix}-${i}</span>`;
  return box;
}

async function buildGallery(config) {
  const grid = document.getElementById(config.gridId);
  if (!grid) return;

  for (let i = 1; i <= config.count; i++) {
    const src = `${config.folder}${config.prefix}-${i}.webp`;

    const box = createGalleryBox(config, i);
    grid.appendChild(box);
    revealObserver.observe(box);

    const exists = await probeImage(src);
    if (exists) {
      const real = document.createElement("img");
      real.className = "ph-real-img";
      real.src = src;
      real.alt = `${config.label} ${i} by Lisa Johnson`;
      real.loading = "lazy";
      box.appendChild(real);
      box.classList.add("has-image");
    }
  }
}

function buildAllGalleries() {
  Object.values(GALLERY_CONFIG).forEach(config => buildGallery(config));
}

/* 3. APPLICATION CARDS */
function buildAppCards() {
  document.querySelectorAll("[data-app-img]").forEach(async (card) => {
    const name = card.dataset.appImg;
    const src = `images/applications/${name}.webp`;

    const exists = await probeImage(src);
    if (!exists) return;

    const media = card.querySelector(".app-card-media");
    if (!media) return;

    const img = document.createElement("img");
    img.className = "card-real-img";
    img.src = src;
    img.alt = card.dataset.alt || name;
    img.loading = "lazy";
    media.appendChild(img);
    card.classList.add("has-image");
  });
}

/* 4. WEBSITE CARDS (sirf 2 — School + Construction) */
function buildWebsiteCards() {
  document.querySelectorAll("[data-website-img]").forEach(async (card) => {
    const name = card.dataset.websiteImg;
    const src = `images/websites/${name}.webp`;

    const exists = await probeImage(src);
    if (!exists) return;

    const media = card.querySelector(".website-card-media");
    if (!media) return;

    const img = document.createElement("img");
    img.className = "card-real-img";
    img.src = src;
    img.alt = card.dataset.alt || name;
    img.loading = "lazy";
    media.appendChild(img);
    card.classList.add("has-image");
  });
}

/* 5. REVEAL ON SCROLL */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

function observeStaticReveals() {
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
}

/* 6. NAVBAR */
const navToggle = document.getElementById("navToggle");
const navLinksWrap = document.getElementById("navLinks");

if (navToggle && navLinksWrap) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("open");
    navLinksWrap.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", navLinksWrap.classList.contains("open"));
  });

  navLinksWrap.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("open");
      navLinksWrap.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const navLinks = document.querySelectorAll(".nav-link");
const allSections = document.querySelectorAll("section[id]");

function updateActiveNav() {
  let currentId = "";
  allSections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 140) currentId = section.id;
  });

  navLinks.forEach(link => {
    const href = link.getAttribute("href") || "";
    link.classList.toggle("active", href === `#${currentId}`);
  });
}

window.addEventListener("scroll", updateActiveNav, { passive: true });

/* 7. SCROLL TOP + YEAR */
const scrollTopBtn = document.getElementById("scrollTop");

if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    scrollTopBtn.classList.toggle("visible", window.scrollY > 400);
  }, { passive: true });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* 8. INIT — har function try/catch me */
buildHeroAndAbout();

try { buildAllGalleries(); } catch (e) { console.error("Galleries error:", e); }
try { buildAppCards(); } catch (e) { console.error("Applications error:", e); }
try { buildWebsiteCards(); } catch (e) { console.error("Websites error:", e); }
try { observeStaticReveals(); } catch (e) { console.error("Reveal error:", e); }
try { updateActiveNav(); } catch (e) { console.error("Nav error:", e); }

console.log("%c✦ Lisa Johnson Portfolio ✦", "color:#3B82F6;font-size:20px;font-weight:bold;");