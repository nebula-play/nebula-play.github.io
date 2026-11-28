(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.add("app-booting");

  window._nebulaBootFallbackTimer = setTimeout(function () {
    root.classList.remove("app-booting");
  }, 900);

  var isDraft = false;
  try {
    var params = new URLSearchParams(window.location.search);
    isDraft = params.get("preview") === "draft";
    var raw = localStorage.getItem(isDraft ? "nebula_draft_preview_json" : "nebula_content_cache_json");
    var data = raw ? JSON.parse(raw) : null;
    if (data && typeof data === "object" && !Array.isArray(data)) {
      if (!isDraft) {
        window._nebulaBootCache = data;
        window._nebulaBootCacheRaw = raw;
      }
    } else {
      data = null;
    }

    var savedLang = localStorage.getItem("nebula_lang");
    var defaultLang = data && data.settings && data.settings.defaultLang === "ru" ? "ru" : "en";
    var lang = savedLang === "ru" || savedLang === "en" ? savedLang : defaultLang;
    root.lang = lang;

    var seoTitle = data && data.settings && data.settings.seo && data.settings.seo[lang] && data.settings.seo[lang].title;
    if (typeof seoTitle === "string" && seoTitle.trim()) {
      document.title = seoTitle.trim();
    }
  } catch (e) { /* ignore storage/JSON access errors */ }

  if (!isDraft && window.location.protocol !== "file:" && typeof fetch === "function") {
    try {
      var controller = typeof AbortController === "function" ? new AbortController() : null;
      var fetchTimer = controller ? setTimeout(function () { controller.abort(); }, 8000) : 0;
      window._nebulaContentFetch = fetch("data/content.json", {
        cache: "no-cache",
        signal: controller ? controller.signal : undefined
      }).then(function (res) {
        clearTimeout(fetchTimer);
        if (!res.ok) throw new Error("Failed to load content.json");
        return res.text();
      }).catch(function (err) {
        clearTimeout(fetchTimer);
        throw err;
      });
    } catch (e) { /* ignore early fetch errors */ }
  }
})();
