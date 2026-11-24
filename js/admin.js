(function () {
  "use strict";

  var GH_OWNER = "nebula-play";
  var GH_REPO = "nebula-play.github.io";
  var GH_BRANCH = "main";
  var GH_TOKEN_KEY = "nebula_gh_token";
  var DRAFT_KEY = "nebula_draft_preview_json";
  var DIRTY_KEY = "nebula_admin_dirty";
  var CONTENT_PATH = "data/content.json";

  var DEFAULT_CONTENT = {
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
        tickets: { en: "Inquire", ru: "Связаться" },
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
          links: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/alexterex/" }]
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
          },
          ticketLabel: { en: "Inquire", ru: "Связаться" },
          ticketUrl: "mailto"
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
          },
          ticketLabel: { en: "Partner / Inquire", ru: "Сотрудничество" },
          ticketUrl: "mailto"
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
          },
          ticketLabel: { en: "", ru: "" },
          ticketUrl: ""
        }
      ]
    },
    contacts: {
      email: "termist@gmail.com"
    }
  };

  var state = {
    data: null,
    editLang: "en",
    dirty: false,
    busy: false,
    pendingUpload: null
  };

  function el(id) {
    return document.getElementById(id);
  }

  function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function ensurePath(obj, path, fallback) {
    var cur = obj;
    for (var i = 0; i < path.length - 1; i++) {
      var key = path[i];
      if (!cur[key] || typeof cur[key] !== "object") {
        cur[key] = {};
      }
      cur = cur[key];
    }
    var last = path[path.length - 1];
    if (cur[last] === undefined) cur[last] = fallback;
    return cur;
  }

  function getByPath(obj, path, fallback) {
    var cur = obj;
    for (var i = 0; i < path.length; i++) {
      if (cur == null) return fallback;
      cur = cur[path[i]];
    }
    return cur === undefined ? fallback : cur;
  }

  function setByPath(obj, path, value) {
    var parent = ensurePath(obj, path, value);
    parent[path[path.length - 1]] = value;
  }

  /* Safe UTF-8 Base64 helpers (handles Cyrillic, Polish diacritics, emojis) */
  function toBase64Utf8(str) {
    var bytes = new TextEncoder().encode(str);
    return bytesToBase64(bytes);
  }

  function bytesToBase64(bytes) {
    var chunk = 0x8000;
    var binary = "";
    for (var i = 0; i < bytes.length; i += chunk) {
      binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
    }
    return btoa(binary);
  }

  function fromBase64Utf8(b64) {
    var binary = atob(String(b64).replace(/\s+/g, ""));
    var bytes = new Uint8Array(binary.length);
    for (var i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return new TextDecoder().decode(bytes);
  }

  /* Toast status */
  var statusTimer = null;
  function showStatus(text, type, duration) {
    clearTimeout(statusTimer);
    var box = el("status");
    if (!box) return;
    box.className = "status-msg is-visible " + (type === "ok" ? "status-ok" : type === "err" ? "status-err" : "status-loading");
    box.textContent = text;
    if (duration === 0) return;
    statusTimer = setTimeout(function () {
      box.classList.remove("is-visible");
    }, duration || 3800);
  }

  /* Non-blocking confirmation dialog */
  function askConfirm(title, message) {
    return new Promise(function (resolve) {
      var dialog = el("confirm-dialog");
      if (!dialog || typeof dialog.showModal !== "function") {
        resolve(true);
        return;
      }
      el("confirm-title").textContent = title;
      el("confirm-message").textContent = message;

      function cleanup(result) {
        okBtn.removeEventListener("click", onOk);
        cancelBtn.removeEventListener("click", onCancel);
        dialog.removeEventListener("cancel", onCancel);
        if (dialog.open) dialog.close();
        resolve(result);
      }
      function onOk() { cleanup(true); }
      function onCancel() { cleanup(false); }

      var okBtn = el("confirm-ok");
      var cancelBtn = el("confirm-cancel");
      okBtn.addEventListener("click", onOk);
      cancelBtn.addEventListener("click", onCancel);
      dialog.addEventListener("cancel", onCancel);
      dialog.showModal();
    });
  }

  function markDirty(isDirty) {
    state.dirty = isDirty;
    try {
      localStorage.setItem(DIRTY_KEY, isDirty ? "1" : "0");
      if (state.data) {
        localStorage.setItem(DRAFT_KEY, JSON.stringify(state.data));
      }
    } catch (e) { /* ignore */ }
    var ind = el("dirty-indicator");
    if (ind) ind.hidden = !isDirty;
  }

  var saveTimer = null;
  function scheduleLocalDraftSave() {
    markDirty(true);
    clearTimeout(saveTimer);
    saveTimer = setTimeout(function () {
      try {
        localStorage.setItem(DRAFT_KEY, JSON.stringify(state.data));
        showStatus("Draft saved locally", "ok", 1400);
      } catch (e) {
        showStatus("LocalStorage full or blocked", "err", 3200);
      }
    }, 250);
  }

  function countWords(str) {
    var trimmed = String(str || "").trim();
    if (!trimmed) return 0;
    return trimmed.split(/\s+/).length;
  }

  function createBudgetNote(text) {
    var div = document.createElement("div");
    div.className = "panel-budget-note";
    div.textContent = text;
    return div;
  }

  /* UI Field Builders */
  function createField(opts) {
    var wrap = document.createElement("div");
    wrap.className = "field-wrap";

    var label = document.createElement("label");
    label.textContent = opts.label;
    if (opts.langTag) {
      var tag = document.createElement("span");
      tag.className = "lang-tag";
      tag.textContent = opts.langTag;
      label.appendChild(tag);
    }

    var counterEl = null;
    var limitNoteEl = null;
    if (opts.limit) {
      var labelRow = document.createElement("div");
      labelRow.className = "field-label-row";
      counterEl = document.createElement("span");
      counterEl.className = "field-counter";
      labelRow.append(label, counterEl);
      wrap.appendChild(labelRow);
    } else {
      wrap.appendChild(label);
    }

    var input;
    if (opts.type === "textarea") {
      input = document.createElement("textarea");
    } else if (opts.type === "select") {
      input = document.createElement("select");
      (opts.options || []).forEach(function (opt) {
        var o = document.createElement("option");
        o.value = opt.value;
        o.textContent = opt.label;
        input.appendChild(o);
      });
    } else {
      input = document.createElement("input");
      input.type = opts.type || "text";
      if (opts.placeholder) input.placeholder = opts.placeholder;
      if (opts.min !== undefined) input.min = opts.min;
      if (opts.max !== undefined) input.max = opts.max;
      if (opts.step !== undefined) input.step = opts.step;
    }

    function updateCounter() {
      if (!opts.limit || !counterEl) return;
      var val = String(input.value || "");
      var w = countWords(val);
      var c = val.length;
      var maxW = opts.limit.words;
      var maxC = opts.limit.chars;
      counterEl.textContent = w + "/" + maxW + " w · " + c + "/" + maxC + " ch";
      var over = w > maxW || c > maxC;
      var warn = !over && (w >= Math.ceil(maxW * 0.85) || c >= Math.ceil(maxC * 0.85));
      counterEl.classList.toggle("is-over", over);
      counterEl.classList.toggle("is-warn", warn);
      wrap.classList.toggle("is-over", over);
      if (limitNoteEl) {
        limitNoteEl.hidden = !over;
      }
    }

    input.value = opts.value != null ? opts.value : "";
    input.addEventListener("input", function () {
      var val = opts.type === "number" ? parseFloat(input.value) : input.value;
      opts.onChange(val);
      updateCounter();
      scheduleLocalDraftSave();
    });

    if (opts.uploadFolder) {
      var row = document.createElement("div");
      row.className = "input-upload-row";
      var upBtn = document.createElement("button");
      upBtn.type = "button";
      upBtn.className = "btn-upload-inline";
      upBtn.textContent = opts.uploadLabel || "Upload";
      upBtn.addEventListener("click", function () {
        triggerAssetUpload(opts.uploadFolder, opts.accept || "image/*", function (uploadedPath) {
          input.value = uploadedPath;
          opts.onChange(uploadedPath);
          updateCounter();
          scheduleLocalDraftSave();
        });
      });
      row.append(input, upBtn);
      wrap.appendChild(row);
    } else {
      wrap.appendChild(input);
    }

    if (opts.limit) {
      limitNoteEl = document.createElement("div");
      limitNoteEl.className = "field-limit-note";
      limitNoteEl.textContent = "Recommended limit exceeded — may crowd or wrap card layout.";
      limitNoteEl.hidden = true;
      wrap.appendChild(limitNoteEl);
      updateCounter();
    }

    return wrap;
  }

  function createBilingualField(opts) {
    var pair = document.createElement("div");
    pair.className = "bilingual-pair";
    pair.dataset.mode = state.editLang;

    var enVal = getByPath(opts.target, opts.enPath || ["en"], "");
    var ruVal = getByPath(opts.target, opts.ruPath || ["ru"], "");

    var enCol = createField({
      label: opts.label,
      langTag: "EN",
      type: opts.type || "text",
      value: enVal,
      limit: opts.limit,
      uploadFolder: opts.uploadFolder,
      uploadLabel: opts.uploadLabel,
      accept: opts.accept,
      onChange: function (v) {
        setByPath(opts.target, opts.enPath || ["en"], v);
      }
    });
    enCol.classList.add("lang-col-en");

    var ruCol = createField({
      label: opts.label,
      langTag: "RU",
      type: opts.type || "text",
      value: ruVal,
      limit: opts.limit,
      uploadFolder: opts.uploadFolder,
      uploadLabel: opts.uploadLabel,
      accept: opts.accept,
      onChange: function (v) {
        setByPath(opts.target, opts.ruPath || ["ru"], v);
      }
    });
    ruCol.classList.add("lang-col-ru");

    pair.append(enCol, ruCol);
    return pair;
  }

  function createHeading(text) {
    var h = document.createElement("div");
    h.className = "section-block-heading";
    h.textContent = text;
    return h;
  }

  function setSvgChildren(svgEl, specs) {
    svgEl.replaceChildren();
    specs.forEach(function (spec) {
      var node = document.createElementNS("http://www.w3.org/2000/svg", spec[0]);
      var attrs = spec[1];
      Object.keys(attrs).forEach(function (k) { node.setAttribute(k, attrs[k]); });
      svgEl.appendChild(node);
    });
  }

  function createMiniSvg(specs) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 12 12");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    setSvgChildren(svg, specs);
    return svg;
  }

  function createCardControls(list, index, rerenderFn) {
    var actions = document.createElement("div");
    actions.className = "item-actions";

    var upBtn = document.createElement("button");
    upBtn.type = "button";
    upBtn.className = "btn-card-ctrl";
    upBtn.title = "Move up";
    upBtn.disabled = index === 0;
    upBtn.appendChild(createMiniSvg([["polygon", { points: "6,2.2 10.5,9.5 1.5,9.5", fill: "currentColor" }]]));
    upBtn.addEventListener("click", function () {
      if (index === 0) return;
      var tmp = list[index - 1];
      list[index - 1] = list[index];
      list[index] = tmp;
      rerenderFn();
      scheduleLocalDraftSave();
    });

    var downBtn = document.createElement("button");
    downBtn.type = "button";
    downBtn.className = "btn-card-ctrl";
    downBtn.title = "Move down";
    downBtn.disabled = index === list.length - 1;
    downBtn.appendChild(createMiniSvg([["polygon", { points: "1.5,2.5 10.5,2.5 6,9.8", fill: "currentColor" }]]));
    downBtn.addEventListener("click", function () {
      if (index >= list.length - 1) return;
      var tmp = list[index + 1];
      list[index + 1] = list[index];
      list[index] = tmp;
      rerenderFn();
      scheduleLocalDraftSave();
    });

    var delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.className = "btn-card-ctrl";
    delBtn.title = "Remove";
    delBtn.appendChild(createMiniSvg([["path", { d: "M2.5 2.5L9.5 9.5M9.5 2.5L2.5 9.5", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round" }]]));
    delBtn.addEventListener("click", function () {
      list.splice(index, 1);
      rerenderFn();
      scheduleLocalDraftSave();
    });

    actions.append(upBtn, downBtn, delBtn);
    return actions;
  }

  /* Panel Renderers */
  function renderHeroPanel() {
    var panel = el("panel-hero");
    panel.replaceChildren();
    var d = state.data;
    ensurePath(d, ["hero", "title"], { en: "NEBULA", ru: "ТУМАННОСТЬ" });
    ensurePath(d, ["hero", "subtitle"], { en: "", ru: "" });
    ensurePath(d, ["about", "cards"], []);
    if (d.hero) {
      delete d.hero.eyebrow;
      delete d.hero.logline;
    }

    panel.append(
      createHeading("The Play — Title & Tagline"),
      createBudgetNote("Single-screen header: Title <= 2 words (16 ch), Subtitle <= 11 words (65 ch)."),
      createBilingualField({ label: "Main Title", target: d.hero.title, limit: { words: 2, chars: 16 } }),
      createBilingualField({ label: "Subtitle", target: d.hero.subtitle, limit: { words: 11, chars: 65 } }),
      createHeading("Play Cards (3 Columns Below Title)"),
      createBudgetNote("Optimal 3-column no-scroll budget: Kicker <= 3 words, Title <= 5 words (40 ch), Body <= 24 words (165 ch).")
    );

    d.about.cards.forEach(function (card, index) {
      ensurePath(card, ["kicker"], { en: "", ru: "" });
      ensurePath(card, ["title"], { en: "", ru: "" });
      ensurePath(card, ["text"], { en: "", ru: "" });

      var box = document.createElement("div");
      box.className = "item-card";

      var header = document.createElement("div");
      header.className = "item-header";
      var left = document.createElement("div");
      left.className = "item-header-left";
      var title = document.createElement("span");
      title.textContent = "Card " + (index + 1);
      left.appendChild(title);
      header.append(left, createCardControls(d.about.cards, index, renderHeroPanel));

      box.append(
        header,
        createBilingualField({ label: "Kicker", target: card.kicker, limit: { words: 3, chars: 24 } }),
        createBilingualField({ label: "Title", target: card.title, limit: { words: 5, chars: 40 } }),
        createBilingualField({ label: "Body Text", type: "textarea", target: card.text, limit: { words: 24, chars: 165 } })
      );
      panel.appendChild(box);
    });

    var addBtn = document.createElement("button");
    addBtn.type = "button";
    addBtn.className = "btn-add";
    addBtn.textContent = "+ Add Play Card";
    addBtn.addEventListener("click", function () {
      d.about.cards.push({
        kicker: { en: "0" + (d.about.cards.length + 1) + ". Note", ru: "0" + (d.about.cards.length + 1) + ". Деталь" },
        title: { en: "", ru: "" },
        text: { en: "", ru: "" }
      });
      renderHeroPanel();
      scheduleLocalDraftSave();
    });

    panel.append(addBtn);
  }

  function ensureCreatorLinksDatalist() {
    if (document.getElementById("creator-link-presets")) return;
    var list = document.createElement("datalist");
    list.id = "creator-link-presets";
    ["Website", "LinkedIn", "Instagram", "Facebook", "IMDb", "Vimeo", "YouTube", "Telegram"].forEach(function (name) {
      var opt = document.createElement("option");
      opt.value = name;
      list.appendChild(opt);
    });
    document.body.appendChild(list);
  }

  function renderCreatorsPanel() {
    var panel = el("panel-creators");
    panel.replaceChildren();
    var d = state.data;
    ensurePath(d, ["creators", "items"], []);
    ensureCreatorLinksDatalist();

    panel.append(
      createHeading("Creators & Partners"),
      createBudgetNote("Optimal 2-column card budget: Role <= 6 words (48 ch), Biography <= 38 words (250 ch). Footer holds only social & website buttons.")
    );

    d.creators.items.forEach(function (item, index) {
      ensurePath(item, ["name"], { en: "", ru: "" });
      ensurePath(item, ["role"], { en: "", ru: "" });
      ensurePath(item, ["bio"], { en: "", ru: "" });
      if (!Array.isArray(item.links)) {
        item.links = item.link ? [{ label: "LinkedIn", url: item.link }] : [];
      }
      delete item.highlights;
      delete item.link;

      var box = document.createElement("div");
      box.className = "item-card";

      var header = document.createElement("div");
      header.className = "item-header";
      var left = document.createElement("div");
      left.className = "item-header-left";
      var title = document.createElement("span");
      title.textContent = (item.name && (item.name.en || item.name.ru)) || ("Creator " + (index + 1));

      var visLabel = document.createElement("label");
      visLabel.className = "vis-toggle";
      var visCheck = document.createElement("input");
      visCheck.type = "checkbox";
      visCheck.checked = item.visible !== false;
      visCheck.addEventListener("change", function () {
        item.visible = visCheck.checked;
        scheduleLocalDraftSave();
      });
      visLabel.append(visCheck, document.createTextNode("Visible"));
      left.append(title, visLabel);

      header.append(left, createCardControls(d.creators.items, index, renderCreatorsPanel));

      var linksBox = document.createElement("div");
      linksBox.className = "creator-links-box";
      var linksLabel = document.createElement("div");
      linksLabel.className = "creator-links-label";
      linksLabel.textContent = "Social Media & Website Buttons";
      linksBox.appendChild(linksLabel);

      if (!item.links.length) {
        var emptyLinks = document.createElement("div");
        emptyLinks.className = "creator-link-empty";
        emptyLinks.textContent = "No buttons yet. Add social profiles or personal website links below.";
        linksBox.appendChild(emptyLinks);
      } else {
        item.links.forEach(function (entry, linkIndex) {
          if (!entry || typeof entry !== "object") {
            entry = { label: "Website", url: "" };
            item.links[linkIndex] = entry;
          }
          var row = document.createElement("div");
          row.className = "creator-link-row";

          var labelInput = document.createElement("input");
          labelInput.type = "text";
          labelInput.setAttribute("list", "creator-link-presets");
          labelInput.placeholder = "Label (e.g. Website)";
          labelInput.value = typeof entry.label === "string" ? entry.label : ((entry.label && (entry.label.en || entry.label.ru)) || "");
          labelInput.addEventListener("input", function () {
            entry.label = labelInput.value;
            scheduleLocalDraftSave();
          });

          var urlInput = document.createElement("input");
          urlInput.type = "text";
          urlInput.placeholder = "https://...";
          urlInput.value = entry.url || "";
          urlInput.addEventListener("input", function () {
            entry.url = urlInput.value.trim();
            scheduleLocalDraftSave();
          });

          row.append(labelInput, urlInput, createCardControls(item.links, linkIndex, renderCreatorsPanel));
          linksBox.appendChild(row);
        });
      }

      var addLinkBtn = document.createElement("button");
      addLinkBtn.type = "button";
      addLinkBtn.className = "btn-add-inline";
      addLinkBtn.textContent = "+ Add Button";
      addLinkBtn.addEventListener("click", function () {
        item.links.push({ label: "Website", url: "" });
        renderCreatorsPanel();
        scheduleLocalDraftSave();
      });
      linksBox.appendChild(addLinkBtn);

      box.append(
        header,
        createBilingualField({ label: "Full Name", target: item.name, limit: { words: 6, chars: 44 } }),
        createBilingualField({ label: "Role", target: item.role, limit: { words: 6, chars: 48 } }),
        createBilingualField({ label: "Biography", type: "textarea", target: item.bio, limit: { words: 38, chars: 250 } }),
        createField({
          label: "Portrait Photo Path / URL",
          value: item.photo || "",
          placeholder: "assets/images/portrait.jpg",
          uploadFolder: "assets/images",
          uploadLabel: "Upload Photo",
          accept: "image/*",
          onChange: function (v) { item.photo = v; }
        }),
        linksBox
      );
      panel.appendChild(box);
    });

    var addBtn = document.createElement("button");
    addBtn.type = "button";
    addBtn.className = "btn-add";
    addBtn.textContent = "+ Add Creator / Collaborator";
    addBtn.addEventListener("click", function () {
      d.creators.items.push({
        id: "creator-" + Date.now(),
        visible: true,
        photo: "",
        name: { en: "", ru: "" },
        role: { en: "", ru: "" },
        bio: { en: "", ru: "" },
        links: []
      });
      renderCreatorsPanel();
      scheduleLocalDraftSave();
    });
    panel.appendChild(addBtn);
  }

  function renderShowingsPanel() {
    var panel = el("panel-showings");
    panel.replaceChildren();
    var d = state.data;
    ensurePath(d, ["showings", "items"], []);

    panel.append(
      createHeading("News & Updates"),
      createBudgetNote("Optimal square-card budget (fits 3–4/row with button): Date <= 3w (14 ch), Location <= 2w (16 ch), Title <= 5w (36 ch), Description <= 12w (80 ch).")
    );

    d.showings.items.forEach(function (item, index) {
      ensurePath(item, ["dateLabel"], { en: "", ru: "" });
      ensurePath(item, ["city"], { en: "", ru: "" });
      ensurePath(item, ["title"], { en: "", ru: "" });
      ensurePath(item, ["description"], { en: "", ru: "" });
      ensurePath(item, ["ticketLabel"], { en: "", ru: "" });

      var box = document.createElement("div");
      box.className = "item-card";

      var header = document.createElement("div");
      header.className = "item-header";
      var left = document.createElement("div");
      left.className = "item-header-left";
      var title = document.createElement("span");
      title.textContent = "News " + (index + 1);

      var visLabel = document.createElement("label");
      visLabel.className = "vis-toggle";
      var visCheck = document.createElement("input");
      visCheck.type = "checkbox";
      visCheck.checked = item.visible !== false;
      visCheck.addEventListener("change", function () {
        item.visible = visCheck.checked;
        scheduleLocalDraftSave();
      });
      visLabel.append(visCheck, document.createTextNode("Visible"));
      left.append(title, visLabel);

      header.append(left, createCardControls(d.showings.items, index, renderShowingsPanel));

      box.append(
        header,
        createBilingualField({ label: "Date", target: item.dateLabel, limit: { words: 3, chars: 14 } }),
        createBilingualField({ label: "Location", target: item.city, limit: { words: 2, chars: 16 } }),
        createBilingualField({ label: "Title", target: item.title, limit: { words: 5, chars: 36 } }),
        createBilingualField({ label: "Description", type: "textarea", target: item.description, limit: { words: 12, chars: 80 } }),
        createBilingualField({ label: "Button Label (Optional)", target: item.ticketLabel, limit: { words: 3, chars: 18 } }),
        createField({
          label: "Button Action ('mailto' or external URL, Optional)",
          value: item.ticketUrl || "",
          placeholder: "mailto or https://...",
          onChange: function (v) { item.ticketUrl = v; }
        })
      );
      panel.appendChild(box);
    });

    var addBtn = document.createElement("button");
    addBtn.type = "button";
    addBtn.className = "btn-add";
    addBtn.textContent = "+ Add News Card";
    addBtn.addEventListener("click", function () {
      d.showings.items.push({
        id: "news-" + Date.now(),
        visible: true,
        dateLabel: { en: "2027", ru: "2027" },
        city: { en: "", ru: "" },
        title: { en: "", ru: "" },
        description: { en: "", ru: "" },
        ticketLabel: { en: "", ru: "" },
        ticketUrl: ""
      });
      renderShowingsPanel();
      scheduleLocalDraftSave();
    });
    panel.appendChild(addBtn);
  }

  function renderContactsPanel() {
    var panel = el("panel-contacts");
    panel.replaceChildren();
    var d = state.data;
    ensurePath(d, ["contacts", "email"], "");
    if (d.contacts) {
      delete d.contacts.pitchEnUrl;
      delete d.contacts.pitchRuUrl;
    }
    ensurePath(d, ["ui", "labels", "footerNote"], { en: "Warsaw / Berlin", ru: "Варшава / Берлин" });

    panel.append(
      createHeading("Single Contact & Footer"),
      createField({
        label: "Contact Email (Used in News & Footer)",
        type: "email",
        value: d.contacts.email || "",
        placeholder: "name@domain.com",
        onChange: function (v) { d.contacts.email = v.trim(); }
      }),
      createBilingualField({ label: "Footer Location / Note", target: d.ui.labels.footerNote })
    );
  }

  function createColorField(label, value, onChange) {
    var wrap = document.createElement("div");
    wrap.className = "field-wrap";
    var lbl = document.createElement("label");
    lbl.textContent = label;

    var row = document.createElement("div");
    row.className = "color-input-row";

    var picker = document.createElement("input");
    picker.type = "color";
    picker.value = /^#[0-9a-fA-F]{6}$/.test(value || "") ? value : "#5ce1e6";

    var text = document.createElement("input");
    text.type = "text";
    text.value = value || "";

    picker.addEventListener("input", function () {
      text.value = picker.value;
      onChange(picker.value);
      scheduleLocalDraftSave();
    });
    text.addEventListener("input", function () {
      if (/^#[0-9a-fA-F]{6}$/.test(text.value.trim())) {
        picker.value = text.value.trim();
      }
      onChange(text.value.trim());
      scheduleLocalDraftSave();
    });

    row.append(picker, text);
    wrap.append(lbl, row);
    return wrap;
  }

  function renderNebulaSeoPanel() {
    var panel = el("panel-nebula");
    panel.replaceChildren();
    var d = state.data;
    ensurePath(d, ["settings", "defaultLang"], "en");
    ensurePath(d, ["settings", "seo", "en"], { title: "", description: "" });
    ensurePath(d, ["settings", "seo", "ru"], { title: "", description: "" });
    ensurePath(d, ["settings", "nebula"], {
      intensity: 1.12,
      speed: 0.78,
      cursorInfluence: 0.35,
      bgColor: "#04050a",
      coreColor: "#22e6f0",
      flareColor: "#f46825",
      violetColor: "#8a3ffc",
      roseColor: "#e83b8c"
    });

    var neb = d.settings.nebula;
    if (!neb.roseColor) neb.roseColor = "#e83b8c";

    var slidersGrid = document.createElement("div");
    slidersGrid.className = "field-grid-2";
    slidersGrid.append(
      createField({
        label: "Intensity (0.3 – 1.6)",
        type: "number",
        min: 0.3,
        max: 1.6,
        step: 0.05,
        value: neb.intensity,
        onChange: function (v) { if (!isNaN(v)) neb.intensity = v; }
      }),
      createField({
        label: "Drift Speed (0 – 2.5)",
        type: "number",
        min: 0,
        max: 2.5,
        step: 0.1,
        value: neb.speed,
        onChange: function (v) { if (!isNaN(v)) neb.speed = v; }
      }),
      createField({
        label: "Cursor Observer (0 – 1)",
        type: "number",
        min: 0,
        max: 1,
        step: 0.05,
        value: neb.cursorInfluence,
        onChange: function (v) { if (!isNaN(v)) neb.cursorInfluence = v; }
      })
    );

    var colorsGrid = document.createElement("div");
    colorsGrid.className = "field-grid-2";
    colorsGrid.append(
      createColorField("Deep Space Background", neb.bgColor, function (v) { neb.bgColor = v; }),
      createColorField("Cyan Mist", neb.coreColor, function (v) { neb.coreColor = v; }),
      createColorField("Orange / Amber Flare", neb.flareColor, function (v) { neb.flareColor = v; }),
      createColorField("Violet / Indigo", neb.violetColor, function (v) { neb.violetColor = v; }),
      createColorField("Rose / Magenta Glow", neb.roseColor, function (v) { neb.roseColor = v; })
    );

    panel.append(
      createHeading("WebGL Nebula Backdrop"),
      slidersGrid,
      colorsGrid,
      createHeading("Language & SEO Metadata"),
      createField({
        label: "Default Site Language",
        type: "select",
        value: d.settings.defaultLang,
        options: [
          { value: "en", label: "English (Recommended for Europe / Producers)" },
          { value: "ru", label: "Russian" }
        ],
        onChange: function (v) { d.settings.defaultLang = v; }
      }),
      createBilingualField({
        label: "SEO Page Title",
        target: d.settings.seo,
        enPath: ["en", "title"],
        ruPath: ["ru", "title"]
      }),
      createBilingualField({
        label: "SEO Meta Description",
        type: "textarea",
        target: d.settings.seo,
        enPath: ["en", "description"],
        ruPath: ["ru", "description"]
      })
    );
  }

  function renderAllPanels() {
    if (!state.data) return;
    renderHeroPanel();
    renderCreatorsPanel();
    renderShowingsPanel();
    renderContactsPanel();
    renderNebulaSeoPanel();
  }

  /* GitHub Settings & Contents API */
  function getGhSettings() {
    var token = el("gh-token").value.trim();
    return { owner: GH_OWNER, repo: GH_REPO, branch: GH_BRANCH, token: token };
  }

  function saveGhSettings() {
    var s = getGhSettings();
    try {
      if (s.token) {
        localStorage.setItem(GH_TOKEN_KEY, s.token);
      } else {
        localStorage.removeItem(GH_TOKEN_KEY);
      }
    } catch (e) { /* ignore */ }
  }

  function loadGhSettings() {
    try {
      el("gh-token").value = localStorage.getItem(GH_TOKEN_KEY) || "";
    } catch (e) { /* ignore */ }
  }

  function ghHeaders(token) {
    return {
      "Authorization": "Bearer " + token,
      "Accept": "application/vnd.github+json"
    };
  }

  function buildContentsUrl(cfg, filePath, withRef) {
    var cleanPath = filePath.split("/").map(encodeURIComponent).join("/");
    var url = "https://api.github.com/repos/" +
      encodeURIComponent(cfg.owner) + "/" +
      encodeURIComponent(cfg.repo) + "/contents/" + cleanPath;
    if (withRef && cfg.branch) {
      url += "?ref=" + encodeURIComponent(cfg.branch);
    }
    return url;
  }

  async function fetchRemoteFile(cfg, filePath) {
    var res = await fetch(buildContentsUrl(cfg, filePath, true), {
      headers: ghHeaders(cfg.token),
      cache: "no-store"
    });
    if (res.status === 401 || res.status === 403) {
      throw new Error("Invalid token or missing Contents write permission");
    }
    if (res.status === 404) {
      return null;
    }
    if (!res.ok) {
      throw new Error("GitHub read error (" + res.status + ")");
    }
    return await res.json();
  }

  async function putRemoteBase64(cfg, filePath, base64Content, commitMessage) {
    var existing = await fetchRemoteFile(cfg, filePath);
    var body = {
      message: commitMessage,
      content: base64Content,
      branch: cfg.branch
    };
    if (existing && existing.sha) {
      body.sha = existing.sha;
    }

    var res = await fetch(buildContentsUrl(cfg, filePath, false), {
      method: "PUT",
      headers: Object.assign({}, ghHeaders(cfg.token), { "Content-Type": "application/json" }),
      body: JSON.stringify(body)
    });

    if (res.status === 409) {
      var refreshed = await fetchRemoteFile(cfg, filePath);
      if (refreshed && refreshed.sha) {
        body.sha = refreshed.sha;
      } else {
        delete body.sha;
      }
      res = await fetch(buildContentsUrl(cfg, filePath, false), {
        method: "PUT",
        headers: Object.assign({}, ghHeaders(cfg.token), { "Content-Type": "application/json" }),
        body: JSON.stringify(body)
      });
    }

    if (!res.ok) {
      var errText = "";
      try {
        var errJson = await res.json();
        errText = errJson.message ? ": " + errJson.message : "";
      } catch (e) { /* ignore */ }
      throw new Error("GitHub write error (" + res.status + ")" + errText);
    }
    return await res.json();
  }

  function sanitizeParsedJson(val) {
    if (Array.isArray(val)) {
      return val.map(sanitizeParsedJson);
    }
    if (val && typeof val === "object") {
      var clean = {};
      Object.keys(val).forEach(function (k) {
        if (k === "__proto__" || k === "constructor" || k === "prototype") return;
        clean[k] = sanitizeParsedJson(val[k]);
      });
      return clean;
    }
    return val;
  }

  function normalizeLoadedContent(raw) {
    var clean = sanitizeParsedJson(raw);
    if (clean && clean.contacts && typeof clean.contacts === "object") {
      delete clean.contacts.pitchEnUrl;
      delete clean.contacts.pitchRuUrl;
    }
    return clean;
  }

  function validateGhConfig(cfg) {
    if (!cfg.token) {
      switchTab("github");
      showStatus("Enter GitHub Fine-Grained PAT", "err", 4000);
      return false;
    }
    return true;
  }

  async function syncFromGithub() {
    var cfg = getGhSettings();
    if (!validateGhConfig(cfg)) return;
    if (state.busy) return;

    state.busy = true;
    showStatus("Syncing from GitHub...", "loading", 0);
    try {
      var remote = await fetchRemoteFile(cfg, CONTENT_PATH);
      if (!remote || typeof remote.content !== "string") {
        throw new Error("data/content.json not found in repository");
      }
      var decoded = fromBase64Utf8(remote.content);
      var parsed = normalizeLoadedContent(JSON.parse(decoded));
      if (!parsed || typeof parsed !== "object" || !parsed.hero) {
        throw new Error("Invalid remote content.json structure");
      }
      state.data = parsed;
      renderAllPanels();
      markDirty(false);
      showStatus("Synced from GitHub", "ok", 2600);
    } catch (err) {
      showStatus(err.message || "Sync failed", "err", 5200);
    } finally {
      state.busy = false;
    }
  }

  async function publishToGithub() {
    var cfg = getGhSettings();
    if (!validateGhConfig(cfg)) return;
    if (state.busy || !state.data) return;

    var ok = await askConfirm(
      "Publish to GitHub",
      "Commit updated data/content.json to " + cfg.owner + "/" + cfg.repo + " (" + cfg.branch + ")?"
    );
    if (!ok) return;

    state.busy = true;
    el("btn-publish").disabled = true;
    showStatus("Publishing to GitHub...", "loading", 0);

    try {
      var formattedJson = JSON.stringify(state.data, null, 2) + "\n";
      var b64 = toBase64Utf8(formattedJson);
      await putRemoteBase64(cfg, CONTENT_PATH, b64, "Update Nebula content via control panel");
      markDirty(false);
      showStatus("Published! GitHub Pages updates in ~30–60s", "ok", 5500);
    } catch (err) {
      showStatus(err.message || "Publish failed", "err", 6000);
    } finally {
      state.busy = false;
      el("btn-publish").disabled = false;
    }
  }

  function sanitizeFilename(name) {
    return String(name || "file")
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9._-]/g, "")
      .replace(/^[.-]+/, "");
  }

  function triggerAssetUpload(folder, accept, onDone) {
    var cfg = getGhSettings();
    if (!validateGhConfig(cfg)) return;

    var input = el("asset-upload-input");
    input.accept = accept || "*/*";
    state.pendingUpload = { folder: folder, onDone: onDone };
    input.value = "";
    input.click();
  }

  async function handleAssetFileSelected(event) {
    var file = event.target.files && event.target.files[0];
    event.target.value = "";
    var pending = state.pendingUpload;
    state.pendingUpload = null;
    if (!file || !pending) return;

    var cfg = getGhSettings();
    if (!validateGhConfig(cfg)) return;

    if (file.size > 15 * 1024 * 1024) {
      showStatus("File exceeds 15 MB GitHub upload limit", "err", 4500);
      return;
    }

    var safeName = sanitizeFilename(file.name) || ("asset-" + Date.now());
    var targetPath = pending.folder.replace(/\/$/, "") + "/" + safeName;

    state.busy = true;
    showStatus("Uploading " + safeName + "...", "loading", 0);

    try {
      var buffer = await file.arrayBuffer();
      var b64 = bytesToBase64(new Uint8Array(buffer));
      await putRemoteBase64(cfg, targetPath, b64, "Upload asset " + safeName + " via control panel");
      pending.onDone(targetPath);
      showStatus("Uploaded " + targetPath + " (remember to Publish JSON)", "ok", 4800);
    } catch (err) {
      showStatus(err.message || "Upload failed", "err", 5500);
    } finally {
      state.busy = false;
    }
  }

  /* Push Unpacked Local Folder (atomic single commit via Git Data API) */
  var FOLDER_ALLOWED_EXACT = {
    "index.html": true,
    "admin.html": true,
    "cname": true,
    ".nojekyll": true,
    "robots.txt": true,
    "sitemap.xml": true
  };
  var FOLDER_ALLOWED_EXT_RE = /\.(html|css|js|json|svg|png|jpe?g|webp|gif|ico|woff2?|ttf|txt|xml|webmanifest)$/i;
  var FOLDER_IGNORED_SEGMENTS = {
    ".git": true,
    "node_modules": true,
    "dist": true,
    "__macosx": true
  };
  var FOLDER_IGNORED_FILES = {
    ".ds_store": true,
    "thumbs.db": true,
    "desktop.ini": true
  };

  async function ghApiRequest(cfg, apiSubpath, options) {
    var url = "https://api.github.com/repos/" +
      encodeURIComponent(cfg.owner) + "/" +
      encodeURIComponent(cfg.repo) + "/" + apiSubpath;
    var reqHeaders = ghHeaders(cfg.token);
    if (options && options.body) {
      reqHeaders["Content-Type"] = "application/json";
    }
    var res = await fetch(url, {
      method: (options && options.method) || "GET",
      headers: reqHeaders,
      body: options && options.body ? JSON.stringify(options.body) : undefined,
      cache: "no-store"
    });
    if (res.status === 401 || res.status === 403) {
      throw new Error("Invalid token or missing Contents write permission");
    }
    if (!res.ok) {
      var errText = "";
      try {
        var errJson = await res.json();
        errText = errJson.message ? ": " + errJson.message : "";
      } catch (e) { /* ignore */ }
      throw new Error("GitHub API error (" + res.status + ")" + errText);
    }
    return await res.json();
  }

  async function computeGitBlobSha1(bytes) {
    if (typeof crypto === "undefined" || !crypto.subtle || !crypto.subtle.digest) {
      return null;
    }
    var header = new TextEncoder().encode("blob " + bytes.length + "\0");
    var combined = new Uint8Array(header.length + bytes.length);
    combined.set(header, 0);
    combined.set(bytes, header.length);
    var hashBuf = await crypto.subtle.digest("SHA-1", combined);
    var hashBytes = new Uint8Array(hashBuf);
    var hex = "";
    for (var i = 0; i < hashBytes.length; i++) {
      hex += (hashBytes[i] < 16 ? "0" : "") + hashBytes[i].toString(16);
    }
    return hex;
  }

  function isSafeSiteRelativePath(relPath) {
    if (!relPath || relPath.indexOf("..") !== -1 || relPath.indexOf("\\") !== -1) return false;
    var segments = relPath.split("/");
    for (var i = 0; i < segments.length; i++) {
      var seg = segments[i];
      if (!seg || seg === "." || seg === "..") return false;
      var lowerSeg = seg.toLowerCase();
      if (FOLDER_IGNORED_SEGMENTS[lowerSeg]) return false;
      if (i < segments.length - 1 && seg.charAt(0) === ".") return false;
      if (!/^[a-zA-Z0-9._-]+$/.test(seg)) return false;
    }
    var fileNameLower = segments[segments.length - 1].toLowerCase();
    if (FOLDER_IGNORED_FILES[fileNameLower]) return false;
    if (fileNameLower.charAt(0) === "." && fileNameLower !== ".nojekyll") return false;
    if (FOLDER_ALLOWED_EXACT[fileNameLower] && segments.length === 1) return true;
    return FOLDER_ALLOWED_EXT_RE.test(fileNameLower);
  }

  function collectFolderFiles(fileList) {
    var rawFiles = Array.prototype.slice.call(fileList || []);
    if (!rawFiles.length) return null;

    var splitItems = rawFiles.map(function (file) {
      var rawPath = String(file.webkitRelativePath || file.name || "").replace(/^\/+/, "");
      return { file: file, parts: rawPath.split("/").filter(Boolean) };
    });

    // Detect prefix depth containing index.html (handles both direct folder and nested unzip folder)
    var relevantItems = splitItems.filter(function (item) {
      return !item.parts.some(function (seg) {
        var low = seg.toLowerCase();
        return FOLDER_IGNORED_SEGMENTS[low] || FOLDER_IGNORED_FILES[low];
      });
    });
    if (!relevantItems.length) relevantItems = splitItems;

    var rootDepth = 1;
    var indexCandidates = relevantItems.filter(function (item) {
      return item.parts.length >= 2 && item.parts[item.parts.length - 1].toLowerCase() === "index.html";
    }).sort(function (a, b) {
      return a.parts.length - b.parts.length;
    });

    if (indexCandidates.length) {
      var bestPrefix = indexCandidates[0].parts.slice(0, -1).join("/");
      var prefixPartsLen = indexCandidates[0].parts.length - 1;
      var matchesAll = relevantItems.every(function (item) {
        return item.parts.slice(0, prefixPartsLen).join("/") === bestPrefix;
      });
      if (matchesAll) {
        rootDepth = prefixPartsLen;
      }
    }

    var folderLabel = relevantItems[0].parts.slice(0, rootDepth).join("/") || "selected folder";
    var files = [];
    var totalBytes = 0;
    var hasIndexHtml = false;

    for (var i = 0; i < splitItems.length; i++) {
      var entry = splitItems[i];
      if (entry.parts.length <= rootDepth) continue;
      var relPath = entry.parts.slice(rootDepth).join("/");
      if (!isSafeSiteRelativePath(relPath)) continue;

      if (entry.file.size > 15 * 1024 * 1024) {
        throw new Error("File exceeds 15 MB GitHub limit: " + relPath);
      }
      totalBytes += entry.file.size;
      if (totalBytes > 40 * 1024 * 1024) {
        throw new Error("Selected folder exceeds 40 MB total limit");
      }
      if (relPath === "index.html") {
        hasIndexHtml = true;
      }
      files.push({ path: relPath, file: entry.file });
    }

    if (!hasIndexHtml) {
      throw new Error("Selected folder must contain index.html at its root");
    }
    if (files.length > 150) {
      throw new Error("Too many files (" + files.length + "). Select the unpacked site folder only.");
    }

    files.sort(function (a, b) {
      return a.path < b.path ? -1 : a.path > b.path ? 1 : 0;
    });

    return { folderLabel: folderLabel, files: files };
  }

  function triggerFolderPush() {
    var cfg = getGhSettings();
    if (!validateGhConfig(cfg)) return;
    if (state.busy) return;
    var input = el("folder-upload-input");
    if (!input) return;
    input.value = "";
    input.click();
  }

  async function handleFolderSelected(event) {
    var fileList = event.target.files;
    if (!fileList || !fileList.length) return;

    var parsed;
    try {
      parsed = collectFolderFiles(fileList);
    } catch (err) {
      event.target.value = "";
      showStatus(err.message || "Invalid site folder", "err", 5200);
      return;
    }
    event.target.value = "";
    if (!parsed || !parsed.files.length) return;

    var cfg = getGhSettings();
    if (!validateGhConfig(cfg)) return;

    state.busy = true;
    var btn = el("btn-push-folder");
    if (btn) btn.disabled = true;
    showStatus("Comparing " + parsed.files.length + " local files with GitHub...", "loading", 0);

    try {
      var refData = await ghApiRequest(cfg, "git/ref/heads/" + encodeURIComponent(cfg.branch));
      var baseCommitSha = refData && refData.object && refData.object.sha;
      if (!baseCommitSha) {
        throw new Error("Could not read branch " + cfg.branch);
      }

      var baseCommit = await ghApiRequest(cfg, "git/commits/" + encodeURIComponent(baseCommitSha));
      var baseTreeSha = baseCommit && baseCommit.tree && baseCommit.tree.sha;
      if (!baseTreeSha) {
        throw new Error("Could not read repository tree");
      }

      var existingShaMap = {};
      var treeLookupOk = false;
      try {
        var remoteTree = await ghApiRequest(cfg, "git/trees/" + encodeURIComponent(baseTreeSha) + "?recursive=1");
        if (remoteTree && Array.isArray(remoteTree.tree)) {
          treeLookupOk = true;
          remoteTree.tree.forEach(function (node) {
            if (node.type === "blob" && node.path && node.sha) {
              existingShaMap[node.path] = node.sha;
            }
          });
        }
      } catch (e) { /* fall back to uploading non-content files if tree lookup fails */ }

      var filesToUpload = [];
      var preserveRemoteContent = !treeLookupOk || !!existingShaMap[CONTENT_PATH];

      for (var i = 0; i < parsed.files.length; i++) {
        var item = parsed.files[i];
        if (item.path === CONTENT_PATH && preserveRemoteContent) {
          continue;
        }
        var buf = await item.file.arrayBuffer();
        var bytes = new Uint8Array(buf);
        var localSha = await computeGitBlobSha1(bytes);
        if (localSha && existingShaMap[item.path] === localSha) {
          continue;
        }
        filesToUpload.push({ path: item.path, bytes: bytes });
      }

      if (!filesToUpload.length) {
        showStatus("GitHub site files are already up to date", "ok", 4200);
        return;
      }

      showStatus("Uploading " + filesToUpload.length + " changed file(s)...", "loading", 0);

      var treeEntries = [];
      var batchSize = 4;
      for (var start = 0; start < filesToUpload.length; start += batchSize) {
        var slice = filesToUpload.slice(start, start + batchSize);
        var uploadedBatch = await Promise.all(slice.map(async function (entry) {
          var blobRes = await ghApiRequest(cfg, "git/blobs", {
            method: "POST",
            body: {
              content: bytesToBase64(entry.bytes),
              encoding: "base64"
            }
          });
          return {
            path: entry.path,
            mode: "100644",
            type: "blob",
            sha: blobRes.sha
          };
        }));
        treeEntries = treeEntries.concat(uploadedBatch);
      }

      showStatus("Creating commit on " + cfg.branch + "...", "loading", 0);
      var newTree = await ghApiRequest(cfg, "git/trees", {
        method: "POST",
        body: {
          base_tree: baseTreeSha,
          tree: treeEntries
        }
      });

      var newCommit = await ghApiRequest(cfg, "git/commits", {
        method: "POST",
        body: {
          message: "Update site files via Control Panel (" + treeEntries.length + " files)",
          tree: newTree.sha,
          parents: [baseCommitSha]
        }
      });

      await ghApiRequest(cfg, "git/refs/heads/" + encodeURIComponent(cfg.branch), {
        method: "PATCH",
        body: { sha: newCommit.sha }
      });

      showStatus("Pushed " + treeEntries.length + " site file(s)! Form text preserved", "ok", 5500);
    } catch (err) {
      showStatus(err.message || "Folder push failed", "err", 6000);
    } finally {
      state.busy = false;
      if (btn) btn.disabled = false;
    }
  }

  /* Tab Switching & Language Mode */
  function switchTab(tabId) {
    document.querySelector(".tab-shell").dataset.active = tabId;
    document.querySelectorAll(".tab-btn").forEach(function (btn) {
      var active = btn.dataset.tab === tabId;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });
    document.querySelectorAll(".tab-panel").forEach(function (panel) {
      var active = panel.id === "panel-" + tabId;
      panel.classList.toggle("active", active);
      panel.hidden = !active;
    });
  }

  function setEditLanguageMode(mode) {
    var nextMode = mode === "ru" ? "ru" : "en";
    state.editLang = nextMode;
    document.querySelectorAll(".lang-filter-btn").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.dataset.editLang === nextMode);
    });
    document.querySelectorAll(".bilingual-pair").forEach(function (pair) {
      pair.dataset.mode = nextMode;
    });
  }

  /* Export / Import / Download Full ZIP / Preview */
  var CRC32_TABLE = (function () {
    var table = new Uint32Array(256);
    for (var i = 0; i < 256; i++) {
      var c = i;
      for (var j = 0; j < 8; j++) {
        c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
      }
      table[i] = c >>> 0;
    }
    return table;
  })();

  function crc32Bytes(bytes) {
    var crc = 0xffffffff;
    for (var i = 0; i < bytes.length; i++) {
      crc = CRC32_TABLE[(crc ^ bytes[i]) & 0xff] ^ (crc >>> 8);
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function buildZipBlob(entries) {
    var encoder = new TextEncoder();
    var now = new Date();
    var dosTime = ((now.getHours() & 31) << 11) | ((now.getMinutes() & 63) << 5) | ((now.getSeconds() >> 1) & 31);
    var dosDate = (((Math.max(1980, now.getFullYear()) - 1980) & 127) << 9) | (((now.getMonth() + 1) & 15) << 5) | (now.getDate() & 31);

    var localParts = [];
    var centralParts = [];
    var offset = 0;

    entries.forEach(function (entry) {
      var nameBytes = encoder.encode(entry.path);
      var data = entry.data instanceof Uint8Array ? entry.data : new Uint8Array(entry.data);
      var crc = crc32Bytes(data);

      var localHeader = new Uint8Array(30 + nameBytes.length);
      var lv = new DataView(localHeader.buffer);
      lv.setUint32(0, 0x04034b50, true);
      lv.setUint16(4, 20, true);
      lv.setUint16(6, 0x0800, true); // UTF-8 filename flag
      lv.setUint16(8, 0, true); // STORE
      lv.setUint16(10, dosTime, true);
      lv.setUint16(12, dosDate, true);
      lv.setUint32(14, crc, true);
      lv.setUint32(18, data.length, true);
      lv.setUint32(22, data.length, true);
      lv.setUint16(26, nameBytes.length, true);
      lv.setUint16(28, 0, true);
      localHeader.set(nameBytes, 30);

      localParts.push(localHeader, data);

      var centralHeader = new Uint8Array(46 + nameBytes.length);
      var cv = new DataView(centralHeader.buffer);
      cv.setUint32(0, 0x02014b50, true);
      cv.setUint16(4, 20, true);
      cv.setUint16(6, 20, true);
      cv.setUint16(8, 0x0800, true);
      cv.setUint16(10, 0, true);
      cv.setUint16(12, dosTime, true);
      cv.setUint16(14, dosDate, true);
      cv.setUint32(16, crc, true);
      cv.setUint32(20, data.length, true);
      cv.setUint32(24, data.length, true);
      cv.setUint16(28, nameBytes.length, true);
      cv.setUint16(30, 0, true);
      cv.setUint16(32, 0, true);
      cv.setUint16(34, 0, true);
      cv.setUint16(36, 0, true);
      cv.setUint32(38, 0, true);
      cv.setUint32(42, offset, true);
      centralHeader.set(nameBytes, 46);

      centralParts.push(centralHeader);
      offset += localHeader.length + data.length;
    });

    var cdSize = 0;
    centralParts.forEach(function (part) { cdSize += part.length; });

    var eocd = new Uint8Array(22);
    var ev = new DataView(eocd.buffer);
    ev.setUint32(0, 0x06054b50, true);
    ev.setUint16(4, 0, true);
    ev.setUint16(6, 0, true);
    ev.setUint16(8, entries.length, true);
    ev.setUint16(10, entries.length, true);
    ev.setUint32(12, cdSize, true);
    ev.setUint32(16, offset, true);
    ev.setUint16(20, 0, true);

    return new Blob(localParts.concat(centralParts, [eocd]), { type: "application/zip" });
  }

  function collectAssetPathsFromData(obj, outSet) {
    if (!obj) return;
    if (typeof obj === "string") {
      var trimmed = obj.trim();
      if (/^assets\/[a-zA-Z0-9._/-]+$/.test(trimmed) && trimmed.indexOf("..") === -1) {
        outSet.add(trimmed);
      }
      return;
    }
    if (Array.isArray(obj)) {
      obj.forEach(function (item) { collectAssetPathsFromData(item, outSet); });
      return;
    }
    if (typeof obj === "object") {
      Object.keys(obj).forEach(function (k) { collectAssetPathsFromData(obj[k], outSet); });
    }
  }

  async function downloadSiteZip() {
    if (state.busy) return;
    state.busy = true;
    var btn = el("btn-download-zip");
    if (btn) btn.disabled = true;
    showStatus("Packaging GitHub Pages ZIP...", "loading", 0);

    try {
      var basePaths = [
        "index.html",
        "admin.html",
        "css/style.css",
        "css/admin.css",
        "js/nebula.js",
        "js/app.js",
        "js/admin.js"
      ];
      var pathSet = new Set(basePaths);
      if (state.data) collectAssetPathsFromData(state.data, pathSet);

      var encoder = new TextEncoder();
      var entries = [];
      var allPaths = Array.from(pathSet);

      for (var i = 0; i < allPaths.length; i++) {
        var filePath = allPaths[i];
        try {
          var res = await fetch(filePath + "?raw=1&v=" + Date.now(), { cache: "no-store" });
          if (!res.ok) continue;
          if (filePath.endsWith(".html")) {
            var html = await res.text();
            html = html.replace(/<script\b[^>]*src=["']\/@vite\/client["'][^>]*><\/script>\s*/gi, "");
            entries.push({ path: filePath, data: encoder.encode(html) });
          } else {
            var buf = await res.arrayBuffer();
            entries.push({ path: filePath, data: new Uint8Array(buf) });
          }
        } catch (e) { /* skip unreachable optional assets */ }
      }

      if (state.data) {
        var jsonStr = JSON.stringify(state.data, null, 2) + "\n";
        entries.push({ path: CONTENT_PATH, data: encoder.encode(jsonStr) });
      }

      if (!entries.length) {
        throw new Error("Could not collect site files");
      }

      var zipBlob = buildZipBlob(entries);
      var url = URL.createObjectURL(zipBlob);
      var a = document.createElement("a");
      a.href = url;
      a.download = "nebula-github-pages.zip";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
      showStatus("Downloaded nebula-github-pages.zip (" + entries.length + " files)", "ok", 3800);
    } catch (err) {
      showStatus(err.message || "ZIP export failed", "err", 4500);
    } finally {
      state.busy = false;
      if (btn) btn.disabled = false;
    }
  }

  function openPreview() {
    if (!state.data) return;
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(state.data));
    } catch (e) {
      showStatus("Could not write draft preview", "err", 3200);
      return;
    }
    var a = document.createElement("a");
    a.href = "index.html?preview=draft";
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  var EYE_OPEN_SVG = [
    ["path", { d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" }],
    ["circle", { cx: "12", cy: "12", r: "3" }]
  ];
  var EYE_CLOSED_SVG = [
    ["path", { d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-6.5 0-10-8-10-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c6.5 0 10 8 10 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" }],
    ["line", { x1: "2", y1: "2", x2: "22", y2: "22" }]
  ];

  function toggleTokenVisibility() {
    var input = el("gh-token");
    var btn = el("toggle-token");
    var icon = el("eye-icon");
    var showing = input.type === "text";
    if (showing) {
      input.type = "password";
      btn.setAttribute("aria-label", "Show token");
      btn.setAttribute("aria-pressed", "false");
      setSvgChildren(icon, EYE_OPEN_SVG);
    } else {
      input.type = "text";
      btn.setAttribute("aria-label", "Hide token");
      btn.setAttribute("aria-pressed", "true");
      setSvgChildren(icon, EYE_CLOSED_SVG);
    }
  }

  async function loadInitialContent() {
    var hasDirtyDraft = false;
    var cachedDraft = null;
    try {
      hasDirtyDraft = localStorage.getItem(DIRTY_KEY) === "1" && !!localStorage.getItem(DRAFT_KEY);
      var rawDraft = localStorage.getItem(DRAFT_KEY);
      if (rawDraft) {
        var parsedDraft = normalizeLoadedContent(JSON.parse(rawDraft));
        if (parsedDraft && Number(parsedDraft.schemaVersion) >= 13 && parsedDraft.hero) {
          cachedDraft = parsedDraft;
        }
      }
    } catch (e) { /* ignore */ }

    if (hasDirtyDraft && cachedDraft) {
      state.data = cachedDraft;
      renderAllPanels();
      markDirty(true);
      showStatus("Restored unsaved local draft", "ok", 2600);
      return;
    }

    if (window.location.protocol !== "file:") {
      try {
        var res = await fetch(CONTENT_PATH, { cache: "no-cache" });
        if (!res.ok) throw new Error("Could not load data/content.json");
        state.data = normalizeLoadedContent(await res.json());
        renderAllPanels();
        markDirty(false);
        return;
      } catch (e) { /* fall through to GitHub or local fallback */ }
    }

    var cfg = getGhSettings();
    if (cfg.token) {
      try {
        showStatus("Syncing from GitHub...", "loading", 0);
        var remote = await fetchRemoteFile(cfg, CONTENT_PATH);
        if (remote && typeof remote.content === "string") {
          var decoded = fromBase64Utf8(remote.content);
          var parsedRemote = normalizeLoadedContent(JSON.parse(decoded));
          if (parsedRemote && typeof parsedRemote === "object" && parsedRemote.hero) {
            state.data = parsedRemote;
            renderAllPanels();
            markDirty(false);
            showStatus("Synced from GitHub", "ok", 2600);
            return;
          }
        }
      } catch (ghErr) {
        state.data = cachedDraft || deepClone(DEFAULT_CONTENT);
        renderAllPanels();
        markDirty(false);
        showStatus((ghErr && ghErr.message) ? ghErr.message : "GitHub sync failed — loaded local template", "err", 5200);
        return;
      }
    }

    state.data = cachedDraft || deepClone(DEFAULT_CONTENT);
    renderAllPanels();
    markDirty(false);
    if (cachedDraft) {
      showStatus("Loaded cached local copy", "ok", 2600);
    } else if (cfg.token) {
      showStatus("Loaded default template (Publish to create data/content.json)", "ok", 4000);
    } else {
      showStatus("Loaded local template — add GitHub token in GitHub tab", "ok", 4000);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    loadGhSettings();

    document.querySelectorAll(".tab-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        switchTab(btn.dataset.tab);
      });
    });

    document.querySelectorAll(".lang-filter-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setEditLanguageMode(btn.dataset.editLang);
      });
    });

    var ghForm = el("gh-form");
    if (ghForm) {
      ghForm.addEventListener("submit", function (e) {
        e.preventDefault();
      });
    }

    el("gh-token").addEventListener("input", saveGhSettings);

    el("toggle-token").addEventListener("click", toggleTokenVisibility);
    el("btn-sync-gh").addEventListener("click", syncFromGithub);
    el("btn-clear-token").addEventListener("click", async function () {
      var ok = await askConfirm("Clear GitHub Token", "Remove the saved Personal Access Token from this browser?");
      if (!ok) return;
      el("gh-token").value = "";
      try {
        localStorage.removeItem(GH_TOKEN_KEY);
      } catch (e) { /* ignore */ }
      showStatus("Token cleared from browser", "ok", 2600);
    });

    el("btn-publish").addEventListener("click", publishToGithub);
    el("btn-preview").addEventListener("click", openPreview);
    el("btn-push-folder").addEventListener("click", triggerFolderPush);
    el("folder-upload-input").addEventListener("change", handleFolderSelected);
    el("btn-download-zip").addEventListener("click", downloadSiteZip);
    el("asset-upload-input").addEventListener("change", handleAssetFileSelected);

    loadInitialContent();
  });
})();
