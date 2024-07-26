if (!window.location.href.includes("https://www.gendergp.com/next-steps/")){

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
      console.error("Atleast one class is required!");
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

  // src/conversion-rate-experts/GenderGP-Test7/variation1/index.js
  var banner_html = `<div class="cre-t7-banner">
        <div class="cre-t7-hero-banner">
            <div class="left-s-block">
                <h1>Empowering transgender and non-binary people to get the care they deserve, wherever they are.</h1>
                <a href="https://www.gendergp.com/accessing-gender-affirming-care/" class="cre-start-now-btn">Start now</a>
            </div>
        </div>
        <div class="cre-t7-below-hero-banner">
            <div class="left-bh-sec">
                <div class="list-heading">GenderGP is committed to providing gender-affirming care that supports your journey every step of the way.</div>
                <div class="list-point-container">
                    <div class="list-point">
                        <div class="list-point-img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8.37891 12.0001L10.7889 14.4201L15.6189 9.58008" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.7489 2.45007C11.4389 1.86007 12.5689 1.86007 13.2689 2.45007L14.8489 3.81007C15.1489 4.07007 15.7089 4.28007 16.1089 4.28007H17.8089C18.8689 4.28007 19.7389 5.15007 19.7389 6.21007V7.91007C19.7389 8.30007 19.9489 8.87007 20.2089 9.17007L21.5689 10.7501C22.1589 11.4401 22.1589 12.5701 21.5689 13.2701L20.2089 14.8501C19.9489 15.1501 19.7389 15.7101 19.7389 16.1101V17.8101C19.7389 18.8701 18.8689 19.7401 17.8089 19.7401H16.1089C15.7189 19.7401 15.1489 19.9501 14.8489 20.2101L13.2689 21.5701C12.5789 22.1601 11.4489 22.1601 10.7489 21.5701L9.16891 20.2101C8.86891 19.9501 8.30891 19.7401 7.90891 19.7401H6.17891C5.11891 19.7401 4.24891 18.8701 4.24891 17.8101V16.1001C4.24891 15.7101 4.03891 15.1501 3.78891 14.8501L2.43891 13.2601C1.85891 12.5701 1.85891 11.4501 2.43891 10.7601L3.78891 9.17007C4.03891 8.87007 4.24891 8.31007 4.24891 7.92007V6.20007C4.24891 5.14007 5.11891 4.27007 6.17891 4.27007H7.90891C8.29891 4.27007 8.86891 4.06007 9.16891 3.80007L10.7489 2.45007Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </div>
                        <div class="list-point-text">Treatment recommendations in 24 hours</div>
                    </div>
                    <div class="list-point">
                        <div class="list-point-img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8.37891 12.0001L10.7889 14.4201L15.6189 9.58008" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.7489 2.45007C11.4389 1.86007 12.5689 1.86007 13.2689 2.45007L14.8489 3.81007C15.1489 4.07007 15.7089 4.28007 16.1089 4.28007H17.8089C18.8689 4.28007 19.7389 5.15007 19.7389 6.21007V7.91007C19.7389 8.30007 19.9489 8.87007 20.2089 9.17007L21.5689 10.7501C22.1589 11.4401 22.1589 12.5701 21.5689 13.2701L20.2089 14.8501C19.9489 15.1501 19.7389 15.7101 19.7389 16.1101V17.8101C19.7389 18.8701 18.8689 19.7401 17.8089 19.7401H16.1089C15.7189 19.7401 15.1489 19.9501 14.8489 20.2101L13.2689 21.5701C12.5789 22.1601 11.4489 22.1601 10.7489 21.5701L9.16891 20.2101C8.86891 19.9501 8.30891 19.7401 7.90891 19.7401H6.17891C5.11891 19.7401 4.24891 18.8701 4.24891 17.8101V16.1001C4.24891 15.7101 4.03891 15.1501 3.78891 14.8501L2.43891 13.2601C1.85891 12.5701 1.85891 11.4501 2.43891 10.7601L3.78891 9.17007C4.03891 8.87007 4.24891 8.31007 4.24891 7.92007V6.20007C4.24891 5.14007 5.11891 4.27007 6.17891 4.27007H7.90891C8.29891 4.27007 8.86891 4.06007 9.16891 3.80007L10.7489 2.45007Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </div>
                        <div class="list-point-text">Referrals to prescribers instantly</div>
                    </div>
                    <div class="list-point">
                        <div class="list-point-img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8.37891 12.0001L10.7889 14.4201L15.6189 9.58008" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.7489 2.45007C11.4389 1.86007 12.5689 1.86007 13.2689 2.45007L14.8489 3.81007C15.1489 4.07007 15.7089 4.28007 16.1089 4.28007H17.8089C18.8689 4.28007 19.7389 5.15007 19.7389 6.21007V7.91007C19.7389 8.30007 19.9489 8.87007 20.2089 9.17007L21.5689 10.7501C22.1589 11.4401 22.1589 12.5701 21.5689 13.2701L20.2089 14.8501C19.9489 15.1501 19.7389 15.7101 19.7389 16.1101V17.8101C19.7389 18.8701 18.8689 19.7401 17.8089 19.7401H16.1089C15.7189 19.7401 15.1489 19.9501 14.8489 20.2101L13.2689 21.5701C12.5789 22.1601 11.4489 22.1601 10.7489 21.5701L9.16891 20.2101C8.86891 19.9501 8.30891 19.7401 7.90891 19.7401H6.17891C5.11891 19.7401 4.24891 18.8701 4.24891 17.8101V16.1001C4.24891 15.7101 4.03891 15.1501 3.78891 14.8501L2.43891 13.2601C1.85891 12.5701 1.85891 11.4501 2.43891 10.7601L3.78891 9.17007C4.03891 8.87007 4.24891 8.31007 4.24891 7.92007V6.20007C4.24891 5.14007 5.11891 4.27007 6.17891 4.27007H7.90891C8.29891 4.27007 8.86891 4.06007 9.16891 3.80007L10.7489 2.45007Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </div>
                        <div class="list-point-text">Prescriptions delivered in 2-3 days</div>
                    </div>
                </div>
            </div>
            <div class="right-bh-section">
            <div>
                <a href="https://book.gendergp.com/#/ggp-5" class="cre-t7-card">
                    <div class="link-text">
						Counselling \u2192</div>
                </a>
                </div>
                  <div>
                <a href="https://www.gendergp.com/subscription-payments/" class="cre-t7-card">
                    <div class="link-text">
						Become a member \u2192</div>
                </a>
                  </div>
										
            </div>
        </div>
    </div>`;
  waitFor(
    () => document.querySelector("#welcome-gate") ? true : false,
    () => {
      $addClass("body", "CRE-7");
      document.querySelector("#welcome-gate").insertAdjacentHTML("beforebegin", banner_html);
    },
    {
      interval: 50,
      duration: 15e3
    }
  );
})();
}