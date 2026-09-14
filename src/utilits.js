export const eliscUtilits = {
  dataImage() {
    let d = document.querySelectorAll("[data-img-url");
    for (let i = 0; i < d.length; i++) {
      const element = d[i];
      element.style.backgroundImage = `url(${element.getAttribute(
        "data-img-url"
      )})`;
    }
  },
  preloader() {
    let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent
    )
      ? true
      : false;
    let preloader = document.getElementById("preloader");

    if (preloader) {
      if (!isMobile) {
        setTimeout(function () {
          preloader.classList.add("preloaded");
        }, 800);
        setTimeout(function () {
          preloader.remove();
        }, 2000);
      } else {
        preloader.remove();
      }
    }

    setTimeout(() => {
      document.querySelector("body").classList.add("opened");
    }, 3000);
  },
  customCursor() {
    var myCursor = document.querySelectorAll(".mouse-cursor"),
      hamburger = document.querySelector(".hamburger"),
      kura_tm_topbar = document.querySelector(".kura_tm_topbar "),
      pointer = document.querySelector(".cursor-pointer"),
      e = document.querySelector(".cursor-inner"),
      t = document.querySelector(".cursor-outer");

    function mouseEvent(element) {
      element.addEventListener("mouseenter", function () {
        e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
      });
      element.addEventListener("mouseleave", function () {
        e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover");
      });
    }

    if (myCursor.length) {
      if (document.body) {
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          // console.log(document.querySelector(this));
          o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          document.body.addEventListener(
            "mouseenter",
            // "a,.kura_tm_topbar .trigger, .cursor-pointer",
            function () {
              let a = document.querySelectorAll("a");
              e.classList.add("cursor-inner"), t.classList.add("cursor-outer");

              for (let i = 0; i < a.length; i++) {
                const element = a[i];
                mouseEvent(element);
              }

              hamburger && mouseEvent(hamburger);
              kura_tm_topbar && mouseEvent(kura_tm_topbar);
              pointer && mouseEvent(pointer);
            }
          ),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }
  },
  imgToSVG() {
    document.querySelectorAll("img.svg").forEach((el) => {
      const imgID = el.getAttribute("id");
      const imgClass = el.getAttribute("class");
      const imgURL = el.getAttribute("src");

      fetch(imgURL)
        .then((data) => data.text())
        .then((response) => {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(response, "text/html");
          let svg = xmlDoc.querySelector("svg");

          if (typeof imgID !== "undefined") {
            svg.setAttribute("id", imgID);
          }

          if (typeof imgClass !== "undefined") {
            svg.setAttribute("class", imgClass + " replaced-svg");
          }

          svg.removeAttribute("xmlns:a");
          if (el.parentNode) {
            el.parentNode.replaceChild(svg, el);
          }
        });
    });
  },
  blogMoveingBox() {
    var lists = document.querySelectorAll(".elisc_blogs_list > ul > li");
    let box = document.querySelector(".elisc_fn_moving_box");

    if (!box) {
      let body = document.querySelector("body");
      let div = document.createElement("div");
      div.classList.add("elisc_fn_moving_box");
      body.appendChild(div);
    }

    lists.forEach((list) => {
      list.addEventListener("mouseenter", (event) => {
        box.classList.add("opened");
        var imgURL = list.getAttribute("data-img");
        console.log(imgURL);
        box.style.backgroundImage = `url(${imgURL})`;
        box.style.top = event.clientY - 50 + "px";
        console.log(event.clientY);
        if (imgURL === "") {
          box.classList.remove("opened");
          return false;
        }
      });
      list.addEventListener("mouseleave", () => {
        box.classList.remove("opened");
      });
    });
  },
  smoothScrolling() {
    // Highlight the active nav item as the user scrolls.
    //
    // The legacy version registered an *unthrottled, non-passive* scroll
    // listener that ran a `querySelectorAll` and read `offsetTop` /
    // `clientHeight` from every section on every wheel event. That forces a
    // synchronous layout per tick and blocks the scroll thread — the visible
    // symptom is the page "locking" mid-scroll, especially over the heavy
    // first section. Rewritten with passive listening + rAF throttling +
    // cached node lists, and the work is skipped if nothing actually changed. */
    let ticking = false;
    let lastCurrent = null;
    let sections = null;
    let navItems = null;

    const refreshNodeLists = () => {
      sections = document.querySelectorAll(".elisc_tm_section");
      navItems = Array.from(
        document.querySelectorAll(".transition_link li")
      ).map((li) => {
        const a = li.getElementsByTagName("a")[0];
        return { li, href: a ? a.getAttribute("href") : null };
      });
    };

    const update = () => {
      ticking = false;
      if (!sections || !navItems) refreshNodeLists();
      // If the DOM has been re-rendered since we cached, refresh.
      if (
        !sections.length ||
        !navItems.length ||
        !document.contains(sections[0])
      ) {
        refreshNodeLists();
      }
      const y = window.pageYOffset;
      let current = "";
      // Reading offsetTop/clientHeight forces layout, but doing it once per
      // animation frame instead of per scroll event keeps the cost bounded.
      for (let i = 0; i < sections.length; i++) {
        const s = sections[i];
        const top = s.offsetTop;
        const h = s.clientHeight;
        if (y >= top - h / 3) current = s.getAttribute("id");
      }
      if (current === lastCurrent) return;
      lastCurrent = current;
      for (let i = 0; i < navItems.length; i++) {
        const { li, href } = navItems[i];
        if (href === `#${current}`) li.classList.add("active");
        else li.classList.remove("active");
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    // passive: true tells the browser the listener won't preventDefault, so
    // it can keep scrolling smoothly on the compositor thread without waiting
    // for our handler to run.
    window.addEventListener("scroll", onScroll, { passive: true });
    // Prime once so the initial section gets highlighted.
    update();
  },
};
