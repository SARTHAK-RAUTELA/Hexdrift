(() => {
    var __defProp = Object.defineProperty;
    var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  
    // lib/bm-js/lib/index.js
    var waitFor = /* @__PURE__ */ __name((check, invoke, poll) => {
      if (check()) {
        invoke();
        return;
      }
      let polling = setInterval(() => {
        try {
          if (check()) {
            invoke();
            clearInterval(polling);
            polling = null;
          }
        } catch (e) {
          console.info("listener not processed");
        }
      }, poll.interval);
      setTimeout(() => {
        if (!polling)
          return;
        clearInterval(polling);
        console.info("render listener timeout", poll);
        window.evolvRenderTimeout = {
          msg: "evolv render listener timeout",
          poll
        };
      }, poll.duration);
    }, "waitFor");
    var $refs = /* @__PURE__ */ __name((selector) => {
      if (!selector) {
        console.error(`Invalid selector!`);
        return;
      }
      const els = document.querySelectorAll(selector);
      if (!els || !els.length) {
        console.error(`Selector ${selector} does not exist in DOM!`);
        return;
      }
      return els;
    }, "$refs");
    var $addClass = /* @__PURE__ */ __name((selector, classes) => {
      if (!classes) {
        console.error("At least one class is required!");
        return;
      }
      const elements = $refs(selector);
      if (!elements)
        return;
      if (Array.isArray(classes)) {
        elements.forEach((el) => {
          el.classList.add(...classes);
        });
        return;
      }
      if (typeof classes === "string") {
        elements.forEach((el) => {
          el.classList.add(classes);
        });
      }
    }, "$addClass");
  
    // src/conversion-rate-experts/iFLY-Test33/variation1/index.js
    var locationSuperSaver = [
        { "tunnel": "Loudoun" },
        { "tunnel": "Westchester" },
        { "tunnel": "Atlanta" },
        { "tunnel": "Phoenix" },
        { "tunnel": "New Jersey Paramus" },
        { "tunnel": "Dallas" },
        { "tunnel": "Fort Lauderdale" },
        { "tunnel": "Houston" }
    ];

    waitFor(
      () => document.querySelector("body") ? true : false,
      () => {
        var pageHeaderDivs = document.querySelectorAll(".pageHeader > div");
        var found = false;
  
        pageHeaderDivs.forEach(function (div) {
          var text = div.textContent.trim();
          locationSuperSaver.forEach(function (location) {
            if (text.includes(location.tunnel)) {
              found = true;
              return;
            }
          });

          if (found) {
            div.innerHTML = div.innerHTML.replace('2 Flights Super Saver ~30% Off [1]', '2 Flights Super Saver ~20% Off [1]');
          }
        });

        if (document.querySelector(".pageHeader > div").innerHTML.includes("2 Flights Super Saver")) {
          $addClass("body", "CRE-33");
          if (!document.querySelector(".cre-33-container")) {
            document.querySelector(".pageHeader > div").insertAdjacentHTML("afterend", "<div class='cre-33-container'><div class='cre-33-heading'>Limited Availability Notice</div><div>Thank you for your interest in our Super Saver package! Please note that Super Saver package has limited availability and can only be booked at select times during the week. If your desired date and time is unavailable, please check out our regular 2 flight and 4 flight packages.</div></div>");
          }
        }
      },
      {
        interval: 50,
        duration: 15e3
      }
    );
  })();
