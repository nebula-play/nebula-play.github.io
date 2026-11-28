(function () {
  "use strict";

  var LANG_STORAGE_KEY = "nebula_lang";
  var DRAFT_STORAGE_KEY = "nebula_draft_preview_json";
  var CONTENT_CACHE_KEY = "nebula_content_cache_json";
  var VIEW_ORDER = ["overview", "creators", "showings"];

  var FALLBACK_CONTENT = {
    schemaVersion: 13,
    settings: {
      defaultLang: "en",
      seo: {
        en: {
          title: "NEBULA — A Metaphysical Sci-Fi Play by Alex Terex",
          description: "Inspired by Ray Bradbury. A metaphysical dramedy about two parents, a quantumograph malfunction, and a child born as a cloud of probability."
        },
        ru: {
          title: "ТУМАННОСТЬ — Метафизическая сай-фай пьеса Александра Терехова",
          description: "Пьеса, вдохновлённая творчеством Рэя Брэдбери. Метафизическая драмедия о родителях и ребёнке в квантовой суперпозиции."
        }
      },
      nebula: {
        intensity: 1.12,
        speed: 0.78,
        cursorInfluence: 0.35,
        bgColor: "#04050a",
        coreColor: "#22e6f0",
        flareColor: "#f46825",
        violetColor: "#8a3ffc",
        roseColor: "#e83b8c"
      }
    },
    ui: {
      nav: {
        overview: { en: "The Play", ru: "О пьесе" },
        creators: { en: "Creators", ru: "Создатели" },
        showings: { en: "News", ru: "Новости" }
      },
      labels: {
        copied: { en: "Email copied to clipboard", ru: "Почта скопирована" },
        emptyShowings: { en: "Updates coming soon.", ru: "Новости появятся скоро." },
        footerNote: { en: "Warsaw / Berlin", ru: "Варшава / Берлин" }
      }
    },
    hero: {
      title: { en: "NEBULA", ru: "ТУМАННОСТЬ" },
      subtitle: {
        en: "A Play by Alex Terex · Inspired by Ray Bradbury",
        ru: "Пьеса Александра Терехова · Вдохновлено Рэем Брэдбери"
      }
    },
    about: {
      cards: [
        {
          kicker: { en: "01. Premise", ru: "01. Завязка" },
          title: { en: "A Glitch in Decoherence", ru: "Сбой декогеренции" },
          text: {
            en: "In a sterile future of automated childbirth, a quantumograph error freezes their infant in permanent superposition — luminous, vocal, yet formless.",
            ru: "В стерильном будущем сбой квантомографа оставляет новорождённого в вечной суперпозиции — светящегося, звучащего, но лишённого тела."
          }
        },
        {
          kicker: { en: "02. Stage", ru: "02. Сцена" },
          title: { en: "Postdramatic & Digital Score", ru: "Постдрама и реактивный свет" },
          text: {
            en: "Minimalist architecture: a translucent scrim, modular cubes, spatial sound, and live light projection responding in real time to actors’ voices and movement.",
            ru: "Строгий минимализм: полупрозрачная пелена, серые кубы, пространственный звук и интерактивный свет, реагирующий на голос и движение перформеров."
          }
        },
        {
          kicker: { en: "03. DNA", ru: "03. Вдохновение" },
          title: { en: "Bradbury Meets Physics", ru: "Брэдбери и современная наука" },
          text: {
            en: "Humanistic sci-fi meets cosmology and neuropsychology — turning scientific metaphors into raw theatrical intimacy.",
            ru: "Гуманистическая фантастика на языке квантовой физики и нейропсихологии — точные метафоры человеческой уязвимости."
          }
        }
      ]
    },
    creators: {
      items: [
        {
          id: "alex-terex",
          visible: true,
          photo: "",
          name: { en: "Aleksandr Terekhov (Alex Terex)", ru: "Александр Терехов (Alex Terex)" },
          role: { en: "Playwright · Screenwriter · Director", ru: "Драматург · Сценарист · Режиссёр" },
          bio: {
            en: "Warsaw-based Polish-Russian filmmaker and playwright (VGIK). Raised in a theatrical dynasty — son of Margarita Terekhova, muse of Andrey Tarkovsky (Mirror). His sci-fi short Monument (2026) was selected at 49th Mill Valley Film Festival (CAFILM).",
            ru: "Независимый режиссёр и драматург польского происхождения в Варшаве (ВГИК). Вырос в театральной династии — сын актрисы Маргариты Тереховой (музы Андрея Тарковского в «Зеркале»). Автор сай-фай драмы «Monument» (2026, 49th Mill Valley Film Festival)."
          },
          links: [
            { label: "LinkedIn", url: "https://www.linkedin.com/in/alexterex/" }
          ]
        },
        {
          id: "co-director",
          visible: true,
          photo: "",
          name: { en: "Co-Director (TBC)", ru: "Сорежиссёр (TBC)" },
          role: { en: "Physical Theatre & Choreography", ru: "Физический театр и хореография" },
          bio: {
            en: "Collaborative staging partner shaping the somatic score of the performance — bridging the absurd physical comedy of 'Dance of Love' and the ecstatic ensemble choreography of 'Dance of Everything'.",
            ru: "Партнёр по сорежиссуре, отвечающий за телесную партитуру спектакля — от абсурдной пластики «Танца Любви» до финального «Танца Всего»."
          },
          links: []
        }
      ]
    },
    showings: {
      items: [
        {
          id: "script-2026",
          visible: true,
          dateLabel: { en: "2026", ru: "2026" },
          city: { en: "Warsaw", ru: "Варшава" },
          title: { en: "Play & Producer Dossier Ready", ru: "Пьеса и досье готовы" },
          description: {
            en: "Completed script and bilingual pitch decks available for theatres.",
            ru: "Текст пьесы и презентации на двух языках готовы для театров."
          }
        },
        {
          id: "dock11-2027",
          visible: true,
          dateLabel: { en: "Spring 2027", ru: "Весна 2027" },
          city: { en: "Berlin, DE", ru: "Берлин, DE" },
          title: { en: "Digital Lab at DOCK 11", ru: "Лаборатория в DOCK 11" },
          description: {
            en: "Four-week residency testing reactive light, audio, and a 25-min WIP.",
            ru: "Месячная лаборатория реактивного света, звука и 25-минутный эскиз."
          }
        },
        {
          id: "premiere-2028",
          visible: true,
          dateLabel: { en: "2027 – 2028", ru: "2027 – 2028" },
          city: { en: "Europe", ru: "Европа" },
          title: { en: "International Stage Premiere", ru: "Международная премьера" },
          description: {
            en: "Full-length touring premiere co-directed with a physical theatre partner.",
            ru: "Полнометражная постановка с партнёром по физическому театру."
          }
        }
      ]
    },
    contacts: {
      email: "termist@gmail.com"
    }
  };

  var appData = FALLBACK_CONTENT;
  var currentLang = "en";
  var currentView = "overview";
  var toastTimer = null;
  var cachedPanels = null;
  var cachedNavTabs = null;
  var cachedViewport = null;

  function byId(id) {
    return document.getElementById(id);
  }

  function t(value, lang) {
    if (value == null) return "";
    if (typeof value === "string") return value;
    if (typeof value === "object") {
      if (typeof value[lang] === "string" && value[lang].trim() !== "") return value[lang];
      if (typeof value.en === "string" && value.en.trim() !== "") return value.en;
      if (typeof value.ru === "string" && value.ru.trim() !== "") return value.ru;
      return value[lang] || value.en || value.ru || "";
    }
    return String(value);
  }

  function isValidEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(String(email || "").trim());
  }

  function safeHref(url) {
    if (!url || typeof url !== "string") return "";
    var trimmed = url.trim();
    if (!trimmed || /[\u0000-\u001f\u007f]/.test(trimmed)) return "";
    // Block protocol-relative URLs (//evil.com) and path traversal
    if (trimmed.indexOf("//") === 0) return "";
    if (trimmed[0] === "#" || trimmed.indexOf("./") === 0 || (trimmed[0] === "/" && trimmed[1] !== "/")) {
      return trimmed;
    }
    if (trimmed.indexOf("assets/") === 0 && trimmed.indexOf("..") === -1) {
      return trimmed;
    }
    try {
      var parsed = new URL(trimmed, window.location.origin);
      if (parsed.protocol === "http:" || parsed.protocol === "https:") {
        return parsed.href;
      }
      if (parsed.protocol === "mailto:") {
        var addr = trimmed.slice(7).split("?")[0];
        return isValidEmail(addr) ? "mailto:" + addr : "";
      }
    } catch (e) {
      return "";
    }
    return "";
  }

  function safeMediaSrc(url) {
    var href = safeHref(url);
    if (!href || href.charAt(0) === "#" || href.indexOf("mailto:") === 0) return "";
    return href;
  }

  function parseVideoSource(rawUrl) {
    var src = safeMediaSrc(rawUrl);
    if (!src) return null;

    if (/^https?:/i.test(src)) {
      try {
        var u = new URL(src);
        var host = u.hostname.replace(/^www\./i, "").toLowerCase();
        var ytId = "";
        if (host === "youtu.be") {
          ytId = u.pathname.replace(/^\/+/, "").split("/")[0];
        } else if (host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com") {
          if (u.pathname === "/watch") {
            ytId = u.searchParams.get("v") || "";
          } else {
            var ytMatch = u.pathname.match(/^\/(?:embed|shorts|live)\/([^/?#]+)/);
            if (ytMatch) ytId = ytMatch[1];
          }
        }
        if (ytId && /^[a-zA-Z0-9_-]{6,20}$/.test(ytId)) {
          return {
            type: "iframe",
            src: "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(ytId) + "?rel=0&modestbranding=1"
          };
        }

        if (host === "vimeo.com" || host === "player.vimeo.com") {
          var vMatch = u.pathname.match(/\/(?:video\/)?(\d{4,16})(?:$|\/|\?)/);
          if (vMatch) {
            return {
              type: "iframe",
              src: "https://player.vimeo.com/video/" + encodeURIComponent(vMatch[1]) + "?dnt=1&title=0&byline=0&portrait=0"
            };
          }
        }
      } catch (e) { /* fall through to direct video check */ }
    }

    if (/\.(mp4|webm|ogg|mov|m4v)(?:[?#].*)?$/i.test(src) || src.indexOf("assets/") === 0) {
      return { type: "video", src: src };
    }
    return null;
  }

  var INLINE_LINK_RE = /\[([^\]\r\n]+)\]\(([^\s)]+(?:\([^\s)]*\)[^\s)]*)*)\)/g;

  function stripInlineLinks(text) {
    return String(text || "").replace(INLINE_LINK_RE, "$1");
  }

  function setRichText(node, rawText) {
    var str = String(rawText || "");
    node.replaceChildren();
    INLINE_LINK_RE.lastIndex = 0;
    var lastIdx = 0;
    var match;
    while ((match = INLINE_LINK_RE.exec(str)) !== null) {
      if (match.index > lastIdx) {
        node.appendChild(document.createTextNode(str.slice(lastIdx, match.index)));
      }
      var label = match[1];
      var href = safeHref(match[2]);
      if (href) {
        var a = document.createElement("a");
        a.className = "inline-card-link";
        a.href = href;
        a.textContent = label;
        if (/^https?:/i.test(href)) {
          a.target = "_blank";
          a.rel = "noopener noreferrer";
        }
        node.appendChild(a);
      } else {
        node.appendChild(document.createTextNode(match[0]));
      }
      lastIdx = INLINE_LINK_RE.lastIndex;
    }
    if (lastIdx < str.length) {
      node.appendChild(document.createTextNode(str.slice(lastIdx)));
    }
  }

  function getInitials(name) {
    var parts = stripInlineLinks(name).replace(/\(.*?\)/g, "").trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return "N";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }

  function detectSocialPlatform(url, label) {
    var hay = (String(url || "") + " " + String(label || "")).toLowerCase();
    if (hay.indexOf("linkedin") !== -1) return "linkedin";
    if (hay.indexOf("instagram") !== -1) return "instagram";
    if (hay.indexOf("facebook") !== -1 || hay.indexOf("fb.com") !== -1) return "facebook";
    if (hay.indexOf("youtube") !== -1 || hay.indexOf("youtu.be") !== -1) return "youtube";
    if (hay.indexOf("vimeo") !== -1) return "vimeo";
    if (hay.indexOf("imdb") !== -1) return "imdb";
    if (hay.indexOf("t.me") !== -1 || hay.indexOf("telegram") !== -1) return "telegram";
    if (hay.indexOf("twitter.com") !== -1 || hay.indexOf("x.com") !== -1) return "x";
    if (String(url || "").trim().toLowerCase().indexOf("mailto:") === 0) return "mail";
    return "website";
  }

  var SOCIAL_ICONS = {
    linkedin: [["path", { fill: "currentColor", d: "M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3.5C4.14 3.5 3.25 4.39 3.25 5.5C3.25 6.6 4.14 7.5 5.25 7.5C6.35 7.5 7.25 6.6 7.25 5.5C7.25 4.39 6.35 3.5 5.25 3.5ZM20.44 13.02C20.44 9.88 18.76 8.22 16.16 8.22C14.37 8.22 13.48 9.21 13.02 9.93V8.5H9.65C9.7 9.48 9.65 19.5 9.65 19.5H13.02V13.36C13.02 13.02 13.05 12.69 13.15 12.45C13.42 11.78 14.03 11.09 15.07 11.09C16.41 11.09 17.06 12.11 17.06 13.6V19.5H20.44V13.02Z" }]],
    instagram: [
      ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "5", fill: "none", stroke: "currentColor", "stroke-width": "1.8" }],
      ["circle", { cx: "12", cy: "12", r: "4", fill: "none", stroke: "currentColor", "stroke-width": "1.8" }],
      ["circle", { cx: "17.3", cy: "6.7", r: "1.1", fill: "currentColor" }]
    ],
    facebook: [["path", { fill: "currentColor", d: "M13.8 20.5V12.8H16.4L16.8 9.8H13.8V7.9C13.8 7.03 14.05 6.44 15.3 6.44H16.9V3.76C16.62 3.72 15.68 3.64 14.58 3.64C12.28 3.64 10.7 5.04 10.7 7.62V9.8H8.1V12.8H10.7V20.5H13.8Z" }]],
    youtube: [["path", { fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M21.2 7.2C20.98 6.37 20.33 5.72 19.5 5.5C18 5.1 12 5.1 12 5.1C12 5.1 6 5.1 4.5 5.5C3.67 5.72 3.02 6.37 2.8 7.2C2.4 8.7 2.4 12 2.4 12C2.4 12 2.4 15.3 2.8 16.8C3.02 17.63 3.67 18.28 4.5 18.5C6 18.9 12 18.9 12 18.9C12 18.9 18 18.9 19.5 18.5C20.33 18.28 20.98 17.63 21.2 16.8C21.6 15.3 21.6 12 21.6 12C21.6 12 21.6 8.7 21.2 7.2ZM10.1 14.9V9.1L15.2 12L10.1 14.9Z" }]],
    vimeo: [["path", { fill: "currentColor", d: "M21.4 8.2C21.3 10.2 19.9 13 17.2 16.5C14.4 20.1 12.1 21.9 10.2 21.9C9 21.9 8 20.8 7.2 18.6C6.7 16.7 6.1 14.8 5.6 12.9C5 10.7 4.4 9.6 3.7 9.6C3.5 9.6 3 9.9 2.3 10.4L1.5 9.3C2.3 8.6 3.1 7.9 3.9 7.2C5 6.3 5.8 5.8 6.4 5.7C7.7 5.6 8.5 6.5 8.8 8.3C9.1 10.3 9.4 11.5 9.5 12C9.9 13.8 10.3 14.7 10.8 14.7C11.2 14.7 11.8 14.1 12.6 12.8C13.4 11.5 13.8 10.5 13.9 9.9C14 8.8 13.6 8.3 12.6 8.3C12.1 8.3 11.7 8.4 11.2 8.6C12.1 5.6 13.8 4.1 16.4 4.2C18.3 4.3 19.3 5.5 19.4 8.2H21.4Z" }]],
    telegram: [["path", { fill: "currentColor", d: "M20.6 4.6L3.4 11.2C2.2 11.7 2.2 12.4 3.2 12.7L7.6 14.1L17.8 7.7C18.3 7.4 18.7 7.6 18.3 7.9L10.1 15.3L9.8 19.7C10.3 19.7 10.5 19.5 10.7 19.2L12.9 17.1L17.4 20.4C18.2 20.9 18.8 20.6 19 19.6L21.9 5.9C22.2 4.7 21.5 4.2 20.6 4.6Z" }]],
    x: [["path", { fill: "currentColor", d: "M17.8 3.5H20.6L14.5 10.5L21.7 20.5H16.1L11.7 14.7L6.7 20.5H3.9L10.4 13L3.5 3.5H9.2L13.2 8.8L17.8 3.5ZM16.8 18.8H18.3L8.4 5.1H6.8L16.8 18.8Z" }]],
    imdb: [["path", { fill: "currentColor", d: "M3 6.5C3 5.67 3.67 5 4.5 5H19.5C20.33 5 21 5.67 21 6.5V17.5C21 18.33 20.33 19 19.5 19H4.5C3.67 19 3 18.33 3 17.5V6.5ZM5.5 8.5V15.5H7V8.5H5.5ZM8.5 8.5V15.5H9.8V10.7L10.7 15.5H11.7L12.6 10.7V15.5H13.9V8.5H11.9L11.2 12.3L10.5 8.5H8.5ZM15.2 8.5V15.5H17.3C18.2 15.5 18.7 14.9 18.7 13.9V10.1C18.7 9.1 18.2 8.5 17.3 8.5H15.2ZM16.6 9.8H17.1C17.3 9.8 17.4 10 17.4 10.3V13.7C17.4 14 17.3 14.2 17.1 14.2H16.6V9.8Z" }]],
    mail: [
      ["rect", { x: "3", y: "5", width: "18", height: "14", rx: "2.5", fill: "none", stroke: "currentColor", "stroke-width": "1.8" }],
      ["path", { d: "M4 7L12 13L20 7", fill: "none", stroke: "currentColor", "stroke-width": "1.8", "stroke-linecap": "round", "stroke-linejoin": "round" }]
    ],
    website: [
      ["circle", { cx: "12", cy: "12", r: "9", fill: "none", stroke: "currentColor", "stroke-width": "1.75" }],
      ["ellipse", { cx: "12", cy: "12", rx: "4", ry: "9", fill: "none", stroke: "currentColor", "stroke-width": "1.6" }],
      ["line", { x1: "3.3", y1: "12", x2: "20.7", y2: "12", stroke: "currentColor", "stroke-width": "1.6" }]
    ]
  };

  function createSocialIconSvg(url, label) {
    var platform = detectSocialPlatform(url, label);
    var ns = "http://www.w3.org/2000/svg";

    var svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");

    var shapes = SOCIAL_ICONS[platform] || SOCIAL_ICONS.website;
    shapes.forEach(function (spec) {
      var node = document.createElementNS(ns, spec[0]);
      var attrs = spec[1];
      Object.keys(attrs).forEach(function (k) {
        node.setAttribute(k, attrs[k]);
      });
      svg.appendChild(node);
    });

    return svg;
  }

  function showToast(msg) {
    var toast = byId("site-toast");
    if (!toast) return;
    clearTimeout(toastTimer);
    toast.textContent = msg;
    toast.classList.add("is-visible");
    toastTimer = setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 2200);
  }

  function copyEmailToClipboard(e) {
    var email = isValidEmail((appData.contacts && appData.contacts.email) || "")
      ? String(appData.contacts.email).trim()
      : "";
    if (!email) {
      if (e) e.preventDefault();
      return;
    }
    var labels = (appData.ui && appData.ui.labels) || FALLBACK_CONTENT.ui.labels;
    var msg = t(labels.copied, currentLang) + " (" + email + ")";
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(function () {
        showToast(msg);
      }).catch(function () {
        showToast(email);
      });
    } else {
      showToast(email);
    }
  }

  function switchView(viewId) {
    if (VIEW_ORDER.indexOf(viewId) === -1) viewId = "overview";
    currentView = viewId;

    var panels = cachedPanels || document.querySelectorAll(".stage-panel");
    panels.forEach(function (panel) {
      var active = panel.id === "view-" + viewId;
      panel.hidden = !active;
      panel.classList.toggle("is-active", active);
    });

    var tabs = cachedNavTabs || document.querySelectorAll("[data-view-target].nav-tab");
    tabs.forEach(function (btn) {
      var active = btn.getAttribute("data-view-target") === viewId;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });

    var viewport = cachedViewport || document.querySelector(".stage-viewport");
    if (viewport) viewport.scrollTop = 0;

    if (window.NebulaBackground && typeof window.NebulaBackground.setViewPhase === "function") {
      window.NebulaBackground.setViewPhase(VIEW_ORDER.indexOf(viewId));
    }
  }

  function applySeo(lang) {
    var seo = appData.settings && appData.settings.seo ? appData.settings.seo[lang] : null;
    if (seo) {
      if (seo.title) {
        document.title = seo.title;
        var ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", seo.title);
        var twTitle = document.querySelector('meta[name="twitter:title"]');
        if (twTitle) twTitle.setAttribute("content", seo.title);
      }
      if (seo.description) {
        var desc = document.querySelector('meta[name="description"]');
        if (desc) desc.setAttribute("content", seo.description);
        var ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", seo.description);
        var twDesc = document.querySelector('meta[name="twitter:description"]');
        if (twDesc) twDesc.setAttribute("content", seo.description);
      }
    }
    document.documentElement.lang = lang;
  }

  function renderNavAndFooter(lang) {
    var ui = appData.ui || FALLBACK_CONTENT.ui;

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var path = node.getAttribute("data-i18n").split(".");
      var cur = ui;
      for (var i = 0; i < path.length; i++) {
        cur = cur && cur[path[i]];
      }
      var text = t(cur, lang);
      if (text) node.textContent = text;
    });

    var labels = ui.labels || {};
    var footerNote = byId("footer-note");
    var noteText = labels.footerNote ? String(t(labels.footerNote, lang) || "").trim() : "";
    if (footerNote) {
      footerNote.textContent = noteText;
      footerNote.hidden = !noteText;
    }

    var rawEmail = String((appData.contacts && appData.contacts.email) || "").trim();
    var validEmail = isValidEmail(rawEmail) ? rawEmail : "";
    var footerEmail = byId("footer-email-link");
    if (footerEmail) {
      footerEmail.textContent = validEmail;
      footerEmail.href = validEmail ? "mailto:" + validEmail : "#";
      footerEmail.hidden = !validEmail;
    }

    var footerSep = document.querySelector(".footer-sep");
    if (footerSep) {
      footerSep.hidden = !(validEmail && noteText);
    }

    var footerLeft = document.querySelector(".footer-left");
    if (footerLeft) {
      footerLeft.hidden = !validEmail && !noteText;
    }
  }

  function renderHero(lang) {
    var hero = appData.hero || FALLBACK_CONTENT.hero;
    byId("hero-title").textContent = t(hero.title, lang);
    byId("hero-subtitle").textContent = t(hero.subtitle, lang);
  }

  function renderAbout(lang) {
    var about = appData.about || FALLBACK_CONTENT.about;
    var grid = byId("about-grid");
    var frag = document.createDocumentFragment();
    var cards = Array.isArray(about.cards) ? about.cards : [];
    cards.forEach(function (card) {
      var article = document.createElement("article");
      article.className = "about-card glass-surface";

      var kicker = document.createElement("p");
      kicker.className = "card-kicker";
      setRichText(kicker, t(card.kicker, lang));

      var h3 = document.createElement("h3");
      h3.className = "about-card-title";
      setRichText(h3, t(card.title, lang));

      var p = document.createElement("p");
      p.className = "about-card-text";
      setRichText(p, t(card.text, lang));

      article.append(kicker, h3, p);
      frag.appendChild(article);
    });
    grid.replaceChildren(frag);
  }

  function renderCreators(lang) {
    var creators = appData.creators || FALLBACK_CONTENT.creators;
    var list = byId("creators-list");
    var frag = document.createDocumentFragment();
    var items = (Array.isArray(creators.items) ? creators.items : []).filter(function (c) {
      return c && c.visible !== false;
    });
    list.classList.toggle("is-single", items.length === 1);

    items.forEach(function (item) {
      var card = document.createElement("article");
      card.className = "creator-card glass-surface";

      var top = document.createElement("div");
      top.className = "creator-top";

      var media = document.createElement("div");
      media.className = "creator-media";
      var nameRaw = t(item.name, lang);
      var namePlain = stripInlineLinks(nameRaw);
      var photoUrl = safeHref(item.photo);

      function renderMonogram() {
        media.replaceChildren();
        var mono = document.createElement("span");
        mono.className = "creator-monogram";
        mono.textContent = getInitials(namePlain);
        media.appendChild(mono);
      }

      if (photoUrl) {
        var img = document.createElement("img");
        img.src = photoUrl;
        img.alt = namePlain;
        img.loading = "lazy";
        img.setAttribute("referrerpolicy", "no-referrer");
        img.addEventListener("error", renderMonogram, { once: true });
        media.appendChild(img);
      } else {
        renderMonogram();
      }

      var head = document.createElement("div");
      head.className = "creator-head";

      var role = document.createElement("p");
      role.className = "creator-role";
      setRichText(role, t(item.role, lang));

      var h3 = document.createElement("h3");
      h3.className = "creator-name";
      setRichText(h3, nameRaw);

      head.append(role, h3);
      top.append(media, head);

      var bio = document.createElement("p");
      bio.className = "creator-bio";
      setRichText(bio, t(item.bio, lang));

      card.append(top, bio);

      var rawLinks = Array.isArray(item.links)
        ? item.links
        : (item.link ? [{ label: "LinkedIn", url: item.link }] : []);
      var validLinks = rawLinks.filter(function (entry) {
        return entry && safeHref(entry.url);
      });

      if (validLinks.length) {
        var foot = document.createElement("div");
        foot.className = "creator-foot";
        validLinks.forEach(function (entry) {
          var href = safeHref(entry.url);
          var labelText = t(entry.label, lang) || "Website";
          var link = document.createElement("a");
          link.className = "creator-social-link";
          link.href = href;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          link.setAttribute("aria-label", labelText);
          link.setAttribute("data-tooltip", labelText);
          link.appendChild(createSocialIconSvg(href, labelText));
          foot.appendChild(link);
        });
        card.appendChild(foot);
      }

      frag.appendChild(card);
    });
    list.replaceChildren(frag);
  }

  function renderShowings(lang) {
    var showings = appData.showings || FALLBACK_CONTENT.showings;
    var labels = (appData.ui && appData.ui.labels) || FALLBACK_CONTENT.ui.labels;
    var list = byId("showings-list");
    var frag = document.createDocumentFragment();
    var items = (Array.isArray(showings.items) ? showings.items : []).filter(function (s) {
      return s && s.visible !== false;
    });
    list.classList.toggle("is-single", items.length === 1);

    if (!items.length) {
      var empty = document.createElement("div");
      empty.className = "empty-state glass-surface";
      empty.textContent = t(labels.emptyShowings, lang);
      list.replaceChildren(empty);
      return;
    }

    items.forEach(function (item) {
      var card = document.createElement("article");
      card.className = "showing-card glass-surface";

      var when = document.createElement("div");
      when.className = "showing-when";

      var dateText = t(item.dateLabel, lang);
      if (dateText) {
        var date = document.createElement("span");
        date.className = "showing-date";
        setRichText(date, dateText);
        when.appendChild(date);
      }

      var placeText = t(item.city, lang);
      if (placeText) {
        var place = document.createElement("span");
        place.className = "showing-place";
        setRichText(place, placeText);
        when.appendChild(place);
      }

      var main = document.createElement("div");
      main.className = "showing-main";

      var h3 = document.createElement("h3");
      h3.className = "showing-title";
      setRichText(h3, t(item.title, lang));
      main.appendChild(h3);

      var descText = t(item.description, lang);
      if (descText) {
        var desc = document.createElement("p");
        desc.className = "showing-desc";
        setRichText(desc, descText);
        main.appendChild(desc);
      }

      card.append(when, main);

      var videoSpec = parseVideoSource(item.video);
      var photoSrc = safeMediaSrc(item.photo);
      if (videoSpec || photoSrc) {
        var mediaStack = document.createElement("div");
        mediaStack.className = "showing-media-stack";

        function pruneEmptyStack() {
          if (!mediaStack.children.length && mediaStack.parentNode) {
            mediaStack.remove();
          }
        }

        if (videoSpec) {
          var videoWrap = document.createElement("div");
          videoWrap.className = "showing-media showing-media--video";
          if (videoSpec.type === "iframe") {
            var iframe = document.createElement("iframe");
            iframe.src = videoSpec.src;
            iframe.title = stripInlineLinks(t(item.title, lang)) || "Video";
            iframe.loading = "lazy";
            iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
            iframe.allowFullscreen = true;
            iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
            videoWrap.appendChild(iframe);
          } else {
            var videoEl = document.createElement("video");
            videoEl.src = videoSpec.src;
            videoEl.controls = true;
            videoEl.playsInline = true;
            videoEl.preload = "metadata";
            videoEl.addEventListener("error", function () {
              videoWrap.remove();
              pruneEmptyStack();
            }, { once: true });
            videoWrap.appendChild(videoEl);
          }
          mediaStack.appendChild(videoWrap);
        }

        if (photoSrc) {
          var photoHref = safeHref(item.photoLink);
          var photoWrap = document.createElement("div");
          photoWrap.className = "showing-media showing-media--photo" + (photoHref ? " is-linked" : "");
          var imgEl = document.createElement("img");
          imgEl.src = photoSrc;
          imgEl.alt = stripInlineLinks(t(item.title, lang)) || "News photo";
          imgEl.loading = "lazy";
          imgEl.setAttribute("referrerpolicy", "no-referrer");
          imgEl.addEventListener("error", function () {
            photoWrap.remove();
            pruneEmptyStack();
          }, { once: true });

          if (photoHref) {
            var photoAnchor = document.createElement("a");
            photoAnchor.className = "showing-photo-link";
            photoAnchor.href = photoHref;
            photoAnchor.setAttribute("aria-label", imgEl.alt);
            if (/^https?:/i.test(photoHref)) {
              photoAnchor.target = "_blank";
              photoAnchor.rel = "noopener noreferrer";
            }
            photoAnchor.appendChild(imgEl);
            photoWrap.appendChild(photoAnchor);
          } else {
            photoWrap.appendChild(imgEl);
          }
          mediaStack.appendChild(photoWrap);
        }

        card.appendChild(mediaStack);
      }

      frag.appendChild(card);
    });
    list.replaceChildren(frag);
  }

  function renderAll(lang) {
    currentLang = lang;
    applySeo(lang);
    renderNavAndFooter(lang);
    renderHero(lang);
    renderAbout(lang);
    renderCreators(lang);
    renderShowings(lang);

    var currentEl = byId("lang-current");
    if (currentEl) {
      currentEl.textContent = lang.toUpperCase();
    }

    document.querySelectorAll(".lang-option").forEach(function (btn) {
      var active = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-checked", active ? "true" : "false");
    });
  }

  function setupInteractions() {
    cachedPanels = document.querySelectorAll(".stage-panel");
    cachedNavTabs = document.querySelectorAll("[data-view-target].nav-tab");
    cachedViewport = document.querySelector(".stage-viewport");

    document.querySelectorAll("[data-view-target]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.documentElement.classList.remove("app-boot-initial");
        switchView(btn.getAttribute("data-view-target"));
      });
    });

    var langDropdown = byId("lang-dropdown");
    var langToggle = byId("lang-toggle");
    var langMenu = byId("lang-menu");

    function setLangMenuOpen(open) {
      if (!langDropdown || !langToggle || !langMenu) return;
      langDropdown.classList.toggle("is-open", open);
      langToggle.setAttribute("aria-expanded", open ? "true" : "false");
      langMenu.hidden = !open;
    }

    if (langToggle) {
      langToggle.addEventListener("click", function (e) {
        e.stopPropagation();
        var isOpen = langDropdown && langDropdown.classList.contains("is-open");
        setLangMenuOpen(!isOpen);
      });
    }

    document.querySelectorAll(".lang-option").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var nextLang = btn.dataset.lang === "ru" ? "ru" : "en";
        try {
          localStorage.setItem(LANG_STORAGE_KEY, nextLang);
        } catch (e) { /* ignore */ }
        renderAll(nextLang);
        setLangMenuOpen(false);
      });
    });

    document.addEventListener("click", function (e) {
      if (langDropdown && !langDropdown.contains(e.target)) {
        setLangMenuOpen(false);
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        setLangMenuOpen(false);
      }
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "a") {
        e.preventDefault();
        window.location.href = "admin.html";
      }
    });

    var footerEmail = byId("footer-email-link");
    if (footerEmail) {
      footerEmail.addEventListener("click", copyEmailToClipboard);
    }

    var footerCopy = document.querySelector(".footer-copy");
    if (footerCopy) {
      footerCopy.addEventListener("click", function (e) {
        if (e.detail >= 3) {
          window.location.href = "admin.html";
        }
      });
    }

    var exitPreview = byId("preview-exit-btn");
    if (exitPreview) {
      exitPreview.addEventListener("click", function () {
        var url = new URL(window.location.href);
        url.searchParams.delete("preview");
        window.location.href = url.toString();
      });
    }

    var yearEl = byId("footer-year");
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }
  }

  function loadInitialData() {
    var params = new URLSearchParams(window.location.search);
    if (params.get("preview") === "draft") {
      try {
        var draftRaw = localStorage.getItem(DRAFT_STORAGE_KEY);
        if (draftRaw) {
          var parsedDraft = JSON.parse(draftRaw);
          if (parsedDraft && typeof parsedDraft === "object" && !Array.isArray(parsedDraft)) {
            appData = parsedDraft;
            var banner = byId("preview-banner");
            if (banner) banner.hidden = false;
            return Promise.resolve();
          }
        }
      } catch (e) { /* fall through */ }
    }

    return fetch("data/content.json", { cache: "no-cache" })
      .then(function (res) {
        if (!res.ok) throw new Error("Failed to load content.json");
        return res.json();
      })
      .then(function (json) {
        if (json && typeof json === "object" && !Array.isArray(json)) {
          appData = json;
          try {
            localStorage.setItem(CONTENT_CACHE_KEY, JSON.stringify(json));
          } catch (e) { /* ignore */ }
        }
      })
      .catch(function () {
        appData = FALLBACK_CONTENT;
      });
  }

  var initialDataPromise = loadInitialData();

  function initCustomTooltips() {
    if (window._nebulaSiteTooltipsInit) return;
    window._nebulaSiteTooltipsInit = true;

    var tip = document.createElement("div");
    tip.className = "nebula-tooltip";
    tip.setAttribute("role", "tooltip");
    tip.setAttribute("aria-hidden", "true");
    document.body.appendChild(tip);

    var activeTarget = null;
    var showTimer = null;

    function hideTooltip() {
      clearTimeout(showTimer);
      showTimer = null;
      activeTarget = null;
      tip.classList.remove("is-visible", "is-below");
      tip.setAttribute("aria-hidden", "true");
    }

    function positionAndShow(target) {
      if (!target || !document.body.contains(target)) return;
      var text = target.getAttribute("data-tooltip");
      if (!text) return;

      tip.textContent = text;
      tip.classList.remove("is-below");
      var rect = target.getBoundingClientRect();
      var tipW = tip.offsetWidth;
      var tipH = tip.offsetHeight;

      var top = rect.top - tipH - 8;
      var below = false;
      if (top < 8) {
        top = rect.bottom + 8;
        below = true;
      }
      var left = rect.left + (rect.width - tipW) / 2;
      var maxLeft = Math.max(10, window.innerWidth - tipW - 10);
      left = Math.max(10, Math.min(maxLeft, left));

      tip.style.left = Math.round(left) + "px";
      tip.style.top = Math.round(top) + "px";
      tip.classList.toggle("is-below", below);
      tip.setAttribute("aria-hidden", "false");
      tip.classList.add("is-visible");
    }

    function scheduleShow(target, delayMs) {
      clearTimeout(showTimer);
      activeTarget = target;
      if (!delayMs) {
        positionAndShow(target);
      } else {
        showTimer = setTimeout(function () {
          if (activeTarget === target) {
            positionAndShow(target);
          }
        }, delayMs);
      }
    }

    document.addEventListener("pointerover", function (e) {
      if (e.pointerType === "touch") return;
      var target = e.target && e.target.closest ? e.target.closest("[data-tooltip]") : null;
      if (!target || target === activeTarget) return;
      scheduleShow(target, 110);
    });

    document.addEventListener("pointerout", function (e) {
      if (!activeTarget) return;
      var next = e.relatedTarget && e.relatedTarget.closest ? e.relatedTarget.closest("[data-tooltip]") : null;
      if (next !== activeTarget) {
        hideTooltip();
      }
    });

    document.addEventListener("focusin", function (e) {
      var target = e.target && e.target.closest ? e.target.closest("[data-tooltip]") : null;
      if (!target) return;
      try {
        if (target.matches(":focus-visible")) {
          scheduleShow(target, 0);
        }
      } catch (err) { /* ignore */ }
    });

    document.addEventListener("focusout", hideTooltip);
    document.addEventListener("pointerdown", hideTooltip);
    document.addEventListener("scroll", hideTooltip, true);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") hideTooltip();
    });
  }

  function waitForFonts() {
    if (!document.fonts || !document.fonts.ready) {
      return Promise.resolve();
    }
    return Promise.race([
      document.fonts.ready,
      new Promise(function (resolve) { setTimeout(resolve, 350); })
    ]);
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupInteractions();
    initCustomTooltips();
    Promise.all([initialDataPromise, waitForFonts()]).then(function () {
      var savedLang = null;
      try {
        savedLang = localStorage.getItem(LANG_STORAGE_KEY);
      } catch (e) { /* ignore */ }
      var defaultLang = (appData.settings && appData.settings.defaultLang) || "en";
      var initialLang = savedLang === "ru" || savedLang === "en" ? savedLang : defaultLang;
      if (window.NebulaBackground && appData.settings && appData.settings.nebula) {
        window.NebulaBackground.updateConfig(appData.settings.nebula);
      }
      renderAll(initialLang);
      switchView(currentView);
      requestAnimationFrame(function () {
        clearTimeout(window._nebulaBootFallbackTimer);
        document.documentElement.classList.remove("app-booting");
        setTimeout(function () {
          document.documentElement.classList.remove("app-boot-initial");
        }, 260);
      });
    });
  });
})();
