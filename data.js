/* ============================================================
   LISA JOHNSON — data.js (FINAL v13)
   Comics | 2D Arts | Emotes | Tattoos
   (Videos & Mascots removed, Contact removed)
   ============================================================ */

const GALLERY_CONFIG = {
  comics: {
    gridId: "comicsGrid",
    folder: "images/comics/",
    prefix: "comic",
    count: 45,
    label: "Comic",
    isVideo: false
  },
  twoDArts: {
    gridId: "twoDArtsGrid",
    folder: "images/art2d/",
    prefix: "art",
    count: 40,
    label: "2D Art",
    isVideo: false
  },
  emotes: {
    gridId: "emotesGrid",
    folder: "images/emotes/",
    prefix: "emote",
    count: 30,
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