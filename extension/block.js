// Preview Blocker for YouTube TV
// Blocks video playback everywhere on tv.youtube.com EXCEPT the watch page
// (tv.youtube.com/watch/...), which is where clicking a thumbnail takes you.
// Not affiliated with YouTube or Google. Collects no data.
(() => {
  const isWatchPage = () => location.pathname.startsWith("/watch");

  // 1. Hide preview videos so the thumbnail underneath stays visible.
  const style = document.createElement("style");
  style.textContent = "html.ytnap-blocking video { visibility: hidden !important; }";
  document.documentElement.appendChild(style);

  // 2. Refuse play() calls outside the watch page. Rejecting with
  //    NotAllowedError is what browsers do when autoplay is blocked,
  //    so the player handles it gracefully.
  const originalPlay = HTMLMediaElement.prototype.play;
  HTMLMediaElement.prototype.play = function (...args) {
    if (this instanceof HTMLVideoElement && !isWatchPage()) {
      return Promise.reject(new DOMException("Preview blocked", "NotAllowedError"));
    }
    return originalPlay.apply(this, args);
  };

  // 3. Backup: catch anything that starts playing another way (e.g. autoplay attribute).
  document.addEventListener("play", (e) => {
    if (e.target instanceof HTMLVideoElement && !isWatchPage()) e.target.pause();
  }, true);

  // 4. Re-apply rules whenever the page changes (YouTube TV is a single-page app).
  function update() {
    const blocking = !isWatchPage();
    document.documentElement.classList.toggle("ytnap-blocking", blocking);
    if (blocking) {
      document.querySelectorAll("video").forEach((v) => { if (!v.paused) v.pause(); });
    }
  }

  let lastPath = location.pathname;
  function checkForNavigation() {
    if (location.pathname !== lastPath) {
      lastPath = location.pathname;
      update();
    }
  }
  for (const method of ["pushState", "replaceState"]) {
    const original = history[method];
    history[method] = function (...args) {
      const result = original.apply(this, args);
      checkForNavigation();
      return result;
    };
  }
  window.addEventListener("popstate", checkForNavigation);
  setInterval(checkForNavigation, 1000);

  update();
})();
