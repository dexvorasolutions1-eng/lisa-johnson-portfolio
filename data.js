/* ============================================================
   LISA JOHNSON — data.js (FINAL v14)
   Comics (25) | 2D Arts (25) | Emotes (20) | Tattoos (15) | 3D Models (4)
   (Branding removed, Websites = 2, Contact removed)
   ============================================================ */

const GALLERY_CONFIG = {
  comics: {
    gridId: "comicsGrid",
    folder: "images/comics/",
    prefix: "comic",
    count: 25,
    label: "Comic",
    isVideo: false
  },
  twoDArts: {
    gridId: "twoDArtsGrid",
    folder: "images/art2d/",
    prefix: "art",
    count: 25,
    label: "2D Art",
    isVideo: false
  },
  emotes: {
    gridId: "emotesGrid",
    folder: "images/emotes/",
    prefix: "emote",
    count: 20,
    label: "Emote",
    isVideo: false
  },
  tattoos: {
    gridId: "tattoosGrid",
    folder: "images/tattoos/",
    prefix: "tattoo",
    count: 15,
    label: "Tattoo",
    isVideo: false
  },
  models3d: {
    gridId: "modelsGrid",
    folder: "images/models3d/",
    prefix: "model",
    count: 4,
    label: "3D Model",
    isVideo: false
  }
};

/* ==========================================
   FIXED IMAGES — auto probe paths
   ========================================== */

const FIXED_IMAGES = {
  cover: "images/cover.webp",
  profile: "images/profile.webp",
  aboutBg: "images/about.webp"
};

console.log("✦ Lisa config loaded —",
  Object.values(GALLERY_CONFIG).reduce((sum, c) => sum + c.count, 0),
  "gallery slots ready");