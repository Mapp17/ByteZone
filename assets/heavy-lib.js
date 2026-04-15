// OLD (Bad): while (Date.now() - start < 800) {} 
// This freezes the browser.

// NEW (Optimized):
(function () {
  // Use requestIdleCallback to run heavy logic when the browser is bored
  window.requestIdleCallback ? requestIdleCallback(startHeavyLib) : setTimeout(startHeavyLib, 1);

  function startHeavyLib() {
    console.log("Heavy Lib starting without blocking the UI thread.");
    window.__heavyLibLoaded = true;
  }
})();