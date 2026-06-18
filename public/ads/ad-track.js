(function () {
  var unit = document.body.getAttribute("data-ad-unit") || "unknown";
  var sessionId =
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : "ad-" + Date.now() + "-" + Math.random().toString(16).slice(2);
  var startedAt = Date.now();
  var pagesSeen = {};
  var endpoint = "/api/ad-event";

  function send(event, properties) {
    if (unit === "unknown") return;

    var payload = {
      event: event,
      unit: unit,
      sessionId: sessionId,
      timestamp: new Date().toISOString(),
      properties: properties || {},
    };

    var body = JSON.stringify(payload);

    if (navigator.sendBeacon) {
      var blob = new Blob([body], { type: "application/json" });
      if (navigator.sendBeacon(endpoint, blob)) return;
    }

    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body,
      keepalive: true,
    }).catch(function () {});
  }

  function withUtm(href) {
    try {
      var url = new URL(href, window.location.origin);
      if (url.hostname !== "burn-zero.com" && url.hostname !== "www.burn-zero.com") {
        return href;
      }
      url.searchParams.set("utm_source", "fleetmagic");
      url.searchParams.set("utm_medium", "display");
      url.searchParams.set("utm_campaign", unit);
      return url.toString();
    } catch (error) {
      return href;
    }
  }

  function pagesSeenList() {
    return Object.keys(pagesSeen)
      .map(function (key) {
        return Number(key) + 1;
      })
      .sort(function (a, b) {
        return a - b;
      });
  }

  send("impression", {
    referrer: document.referrer || null,
    path: window.location.pathname,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    locale: navigator.language || null,
  });

  document.addEventListener(
    "click",
    function (event) {
      var link = event.target.closest("a[href]");
      if (!link) return;

      var href = withUtm(link.href);
      if (href !== link.href) {
        link.href = href;
      }

      send("click", {
        href: href,
        label: (link.className || link.textContent || "link").trim(),
      });
    },
    true
  );

  var carousel = document.getElementById("track");
  var currentPage = 0;
  var pageEnteredAt = Date.now();

  if (carousel) {
    var pageWidth = carousel.clientWidth || 728;
    var lastReportedPage = 0;
    pagesSeen[0] = true;

    send("page_view", { page: 1, durationMs: 0 });

    carousel.addEventListener(
      "scroll",
      function () {
        var page = Math.round(carousel.scrollLeft / pageWidth);
        if (page === lastReportedPage) return;

        send("page_view", {
          page: lastReportedPage + 1,
          durationMs: Date.now() - pageEnteredAt,
        });

        lastReportedPage = page;
        currentPage = page;
        pageEnteredAt = Date.now();
        pagesSeen[page] = true;

        send("page_view", { page: page + 1, durationMs: 0 });
      },
      { passive: true }
    );
  } else {
    pagesSeen[0] = true;
    currentPage = 0;
  }

  window.setInterval(function () {
    send("engagement", {
      timeOnAdMs: Date.now() - startedAt,
      currentPage: currentPage + 1,
      pagesSeen: pagesSeenList(),
    });
  }, 15000);

  function endSession() {
    send("session_end", {
      timeOnAdMs: Date.now() - startedAt,
      pagesSeen: pagesSeenList(),
      lastPage: currentPage + 1,
    });
  }

  window.addEventListener("pagehide", endSession);
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
      endSession();
    }
  });
})();
