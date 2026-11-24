(function () {
  "use strict";

  function hexToRgbNorm(hex, fallback) {
    if (typeof hex !== "string") return fallback;
    var clean = hex.trim().replace("#", "");
    if (clean.length === 3) {
      clean = clean[0] + clean[0] + clean[1] + clean[1] + clean[2] + clean[2];
    }
    if (!/^[0-9a-fA-F]{6}$/.test(clean)) return fallback;
    return [
      parseInt(clean.slice(0, 2), 16) / 255,
      parseInt(clean.slice(2, 4), 16) / 255,
      parseInt(clean.slice(4, 6), 16) / 255
    ];
  }

  var state = {
    intensity: 1.05,
    speed: 0.75,
    cursorInfluence: 0.35,
    bgColor: [0.016, 0.02, 0.039],
    coreColor: [0.13, 0.9, 0.94],
    flareColor: [0.96, 0.41, 0.15],
    violetColor: [0.54, 0.25, 0.98],
    roseColor: [0.91, 0.23, 0.55]
  };

  var reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  var reducedMotion = reducedMotionQuery.matches;

  /* Ultra-Lightweight Blurred Multi-Color WebGL Nebula */
  var canvas = document.getElementById("nebula-canvas");
  if (!canvas) return;

  var gl = canvas.getContext("webgl", {
    alpha: false,
    antialias: false,
    depth: false,
    stencil: false,
    preserveDrawingBuffer: false,
    powerPreference: "low-power"
  });

  if (!gl) {
    canvas.style.display = "none";
    return;
  }

  var precisionFormat = gl.getShaderPrecisionFormat
    ? gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT)
    : null;
  var floatPrecision = precisionFormat && precisionFormat.precision > 0 ? "highp" : "mediump";

  var vertexSource = [
    "attribute vec2 a_position;",
    "void main() {",
    "  gl_Position = vec4(a_position, 0.0, 1.0);",
    "}"
  ].join("\n");

  /* Pure organic wave-warped soft blobs: zero straight lines, zero sharp ridges, ultra-fast */
  var fragmentSource = [
    "precision " + floatPrecision + " float;",
    "uniform vec2 u_resolution;",
    "uniform float u_time;",
    "uniform vec2 u_mouse;",
    "uniform float u_phase;",
    "uniform float u_intensity;",
    "uniform float u_cursorInfluence;",
    "uniform vec3 u_bgColor;",
    "uniform vec3 u_coreColor;",
    "uniform vec3 u_flareColor;",
    "uniform vec3 u_violetColor;",
    "uniform vec3 u_roseColor;",
    "",
    "vec2 warp(vec2 p, float t) {",
    "  p += 0.38 * vec2(sin(p.y * 1.45 + t * 0.42), cos(p.x * 1.35 - t * 0.37));",
    "  p += 0.26 * vec2(cos(p.y * 2.15 - t * 0.31 + 1.4), sin(p.x * 1.95 + t * 0.29 + 0.7));",
    "  return p;",
    "}",
    "",
    "float cloudField(vec2 p, float t, float seed) {",
    "  vec2 q = warp(p + vec2(seed * 1.7, -seed * 1.1), t);",
    "  float a = sin(q.x * 1.6 + t * 0.24) * cos(q.y * 1.5 - t * 0.19);",
    "  float b = sin((q.x + q.y) * 1.1 - t * 0.21 + seed);",
    "  float c = cos((q.x * 0.8 - q.y * 1.15) * 1.35 + t * 0.17);",
    "  return smoothstep(-0.28, 0.88, (a + b * 0.85 + c * 0.7) * 0.44 + 0.34);",
    "}",
    "",
    "void main() {",
    "  vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);",
    "  vec2 mouseOffset = (u_mouse - 0.5) * vec2(u_resolution.x / max(u_resolution.y, 1.0), 1.0);",
    "  float cursorPull = exp(-length(uv - mouseOffset) * 1.6) * u_cursorInfluence;",
    "",
    "  float t = u_time * 0.45 + u_phase;",
    "  vec2 p = uv * 1.2 - mouseOffset * (0.12 * u_cursorInfluence);",
    "",
    "  // 4 distinct drifting color centers so >= 3 rich hues remain visible simultaneously",
    "  vec2 cyanPos = vec2(0.52 * cos(t * 0.23), 0.36 * sin(t * 0.19));",
    "  vec2 orangePos = vec2(-0.54 * cos(t * 0.18 + 0.9), 0.34 * sin(t * 0.22 + 1.6));",
    "  vec2 violetPos = vec2(0.42 * sin(t * 0.21 + 2.2), -0.40 * cos(t * 0.17 + 0.6));",
    "  vec2 rosePos = vec2(-0.40 * sin(t * 0.24 + 3.5), -0.35 * cos(t * 0.20 + 2.4));",
    "",
    "  float cyanField = cloudField(p + cyanPos * 0.6, t, 0.4) * (0.42 + 0.78 * exp(-dot(uv - cyanPos, uv - cyanPos) * 1.15));",
    "  float orangeField = cloudField(p * 1.05 + orangePos * 0.6, -t * 0.85, 2.3) * (0.40 + 0.82 * exp(-dot(uv - orangePos, uv - orangePos) * 1.15));",
    "  float violetField = cloudField(p * 0.95 + violetPos * 0.6, t * 0.72, 4.1) * (0.44 + 0.80 * exp(-dot(uv - violetPos, uv - violetPos) * 1.1));",
    "  float roseField = cloudField(p * 1.12 + rosePos * 0.6, -t * 0.68, 5.7) * (0.36 + 0.76 * exp(-dot(uv - rosePos, uv - rosePos) * 1.2));",
    "",
    "  float total = cyanField + orangeField + violetField + roseField + 0.001;",
    "  vec3 blendedHue = (",
    "    u_coreColor * cyanField +",
    "    u_flareColor * orangeField +",
    "    u_violetColor * violetField +",
    "    u_roseColor * roseField",
    "  ) / total;",
    "",
    "  float density = clamp((cyanField + orangeField + violetField + roseField) * 0.42 + cursorPull * 0.28, 0.0, 1.35);",
    "  vec3 col = mix(u_bgColor, blendedHue, clamp(density * 0.85, 0.0, 1.0));",
    "  col += blendedHue * pow(density, 1.4) * 0.34;",
    "  col += mix(u_coreColor, u_flareColor, 0.5 + 0.5 * sin(t * 0.5)) * cursorPull * 0.24;",
    "  col *= u_intensity;",
    "",
    "  float vig = 1.0 - smoothstep(0.45, 1.48, length(uv * vec2(0.84, 1.0)));",
    "  col = mix(u_bgColor, col, 0.38 + 0.62 * vig);",
    "  col = col / (1.0 + col * 0.26);",
    "  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);",
    "}"
  ].join("\n");

  function compileShader(type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  var vs = compileShader(gl.VERTEX_SHADER, vertexSource);
  var fs = compileShader(gl.FRAGMENT_SHADER, fragmentSource);
  if (!vs || !fs) {
    canvas.style.display = "none";
    return;
  }

  var program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    canvas.style.display = "none";
    return;
  }

  gl.useProgram(program);

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
    gl.STATIC_DRAW
  );

  var posLoc = gl.getAttribLocation(program, "a_position");
  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

  var uniforms = {
    resolution: gl.getUniformLocation(program, "u_resolution"),
    time: gl.getUniformLocation(program, "u_time"),
    mouse: gl.getUniformLocation(program, "u_mouse"),
    phase: gl.getUniformLocation(program, "u_phase"),
    intensity: gl.getUniformLocation(program, "u_intensity"),
    cursorInfluence: gl.getUniformLocation(program, "u_cursorInfluence"),
    bgColor: gl.getUniformLocation(program, "u_bgColor"),
    coreColor: gl.getUniformLocation(program, "u_coreColor"),
    flareColor: gl.getUniformLocation(program, "u_flareColor"),
    violetColor: gl.getUniformLocation(program, "u_violetColor"),
    roseColor: gl.getUniformLocation(program, "u_roseColor")
  };

  var targetMouse = { x: 0.5, y: 0.5 };
  var currentMouse = { x: 0.5, y: 0.5 };
  var targetPhase = 0;
  var currentPhase = 0;

  if (reducedMotionQuery.addEventListener) {
    reducedMotionQuery.addEventListener("change", function (e) {
      reducedMotion = e.matches;
      if (!reducedMotion && !rafId && !document.hidden) {
        lastTick = performance.now();
        rafId = requestAnimationFrame(render);
      }
    });
  }

  /* Render at low internal resolution (max 400px wide) for ultra-fast GPU performance + natural silky blur */
  function resize() {
    var scale = 0.26;
    var width = Math.min(400, Math.max(160, Math.round(window.innerWidth * scale)));
    var height = Math.min(260, Math.max(100, Math.round(window.innerHeight * scale)));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
    }
  }

  window.addEventListener("resize", function () {
    resize();
    if (reducedMotion) drawFrame(elapsedTime);
  });

  window.addEventListener("pointermove", function (e) {
    if (reducedMotion) return;
    targetMouse.x = e.clientX / Math.max(1, window.innerWidth);
    targetMouse.y = 1.0 - e.clientY / Math.max(1, window.innerHeight);
  }, { passive: true });

  var elapsedTime = 0;
  var lastTick = performance.now();
  var lastRender = 0;
  var rafId = null;

  function drawFrame(timeSec) {
    gl.uniform2f(uniforms.resolution, canvas.width, canvas.height);
    gl.uniform1f(uniforms.time, timeSec);
    gl.uniform2f(uniforms.mouse, currentMouse.x, currentMouse.y);
    gl.uniform1f(uniforms.phase, currentPhase);
    gl.uniform1f(uniforms.intensity, state.intensity);
    gl.uniform1f(uniforms.cursorInfluence, state.cursorInfluence);
    gl.uniform3fv(uniforms.bgColor, state.bgColor);
    gl.uniform3fv(uniforms.coreColor, state.coreColor);
    gl.uniform3fv(uniforms.flareColor, state.flareColor);
    gl.uniform3fv(uniforms.violetColor, state.violetColor);
    gl.uniform3fv(uniforms.roseColor, state.roseColor);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  function render(now) {
    if (!reducedMotion && !document.hidden) {
      rafId = requestAnimationFrame(render);
    } else {
      rafId = null;
    }

    /* Gentle ~30fps cap keeps all devices silky smooth & cool */
    if (now - lastRender < 30 && !reducedMotion) return;
    lastRender = now;

    var dt = Math.min(0.08, Math.max(0.001, (now - lastTick) / 1000));
    lastTick = now;

    if (!reducedMotion) {
      elapsedTime += dt * state.speed;
      currentMouse.x += (targetMouse.x - currentMouse.x) * 0.05;
      currentMouse.y += (targetMouse.y - currentMouse.y) * 0.05;
      currentPhase += (targetPhase - currentPhase) * 0.04;
    }

    drawFrame(elapsedTime);
  }

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    } else if (!reducedMotion && !rafId) {
      lastTick = performance.now();
      rafId = requestAnimationFrame(render);
    }
  });

  window.NebulaBackground = {
    updateConfig: function (cfg) {
      if (!cfg || typeof cfg !== "object") return;
      if (typeof cfg.intensity === "number" && isFinite(cfg.intensity)) {
        state.intensity = Math.min(1.8, Math.max(0.3, cfg.intensity));
      }
      if (typeof cfg.speed === "number" && isFinite(cfg.speed)) {
        state.speed = Math.min(2.5, Math.max(0.0, cfg.speed));
      }
      if (typeof cfg.cursorInfluence === "number" && isFinite(cfg.cursorInfluence)) {
        state.cursorInfluence = Math.min(1.0, Math.max(0.0, cfg.cursorInfluence));
      }
      state.bgColor = hexToRgbNorm(cfg.bgColor, state.bgColor);
      state.coreColor = hexToRgbNorm(cfg.coreColor, state.coreColor);
      state.flareColor = hexToRgbNorm(cfg.flareColor, state.flareColor);
      state.violetColor = hexToRgbNorm(cfg.violetColor, state.violetColor);
      state.roseColor = hexToRgbNorm(cfg.roseColor, state.roseColor);
      if (reducedMotion) {
        drawFrame(elapsedTime);
      }
    },
    setViewPhase: function (index) {
      targetPhase = (Number(index) || 0) * 0.75;
      if (reducedMotion) {
        currentPhase = targetPhase;
        drawFrame(elapsedTime);
      }
    }
  };

  resize();
  drawFrame(0);
  if (!reducedMotion) {
    lastTick = performance.now();
    rafId = requestAnimationFrame(render);
  }
})();
