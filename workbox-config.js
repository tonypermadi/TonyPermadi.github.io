module.exports = {
  "globDirectory": "./",
  "globPatterns": [
    "img/**.*",
    "offline.html",
    "icons/**.*"
  ],
  "swSrc": "src/sw.js",
  "swDest": "sw.js",
  "globIgnores": [
    "./workbox-config.js"
  ]
};