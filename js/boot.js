(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.add("app-booting");

  window._nebulaBootFallbackTimer = setTimeout(function () {
    root.classList.remove("app-booting");
  }, 1500);

  try {
    var params = new URLSearchParams(window.location.search);
    var isDraft = params.get("preview") === "draft";
    var raw = localStorage.getItem(isDraft ? "nebula_draft_preview_json" : "nebula_content_cache_json");
    var data = raw ? JSON.parse(raw) : null;
    var savedLang = localStorage.getItem("nebula_lang");
    var defaultLang = data && data.settings && data.settings.defaultLang === "ru" ? "ru" : "en";
    var lang = savedLang === "ru" || savedLang === "en" ? savedLang : defaultLang;
    root.lang = lang;

    var seoTitle = data && data.settings && data.settings.seo && data.settings.seo[lang] && data.settings.seo[lang].title;
    if (typeof seoTitle === "string" && seoTitle.trim()) {
      document.title = seoTitle.trim();
    }
  } catch (e) { /* ignore storage/JSON access errors */ }
})();
