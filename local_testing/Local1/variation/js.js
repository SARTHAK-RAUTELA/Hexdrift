(function () {
    try {
      /* main variables */
      var debug = 1;
      var variation_name = "cre-t-12";
  
  
      function waitForElement(selector, trigger, delayInterval, delayTimeout) {
        var interval = setInterval(function () {
          if (
            document &&
            document.querySelector(selector) &&
            document.querySelectorAll(selector).length > 0
          ) {
            clearInterval(interval);
            trigger();
          }
        }, delayInterval);
        setTimeout(function () {
          clearInterval(interval);
        }, delayTimeout);
      }
  
      function live(selector, event, callback, context) {
        function addEvent(el, type, handler) {
          if (el.attachEvent) el.attachEvent("on" + type, handler);
          else el.addEventListener(type, handler);
        }
        // matches polyfill
        this.Element &&
          (function (ElementPrototype) {
            ElementPrototype.matches =
              ElementPrototype.matches ||
              ElementPrototype.matchesSelector ||
              ElementPrototype.webkitMatchesSelector ||
              ElementPrototype.msMatchesSelector ||
              function (selector) {
                var node = this,
                  nodes = (node.parentNode || node.document).querySelectorAll(
                    selector
                  ),
                  i = -1;
                while (nodes[++i] && nodes[i] != node);
                return !!nodes[i];
              };
          })(Element.prototype);
  
  
        function live(selector, event, callback, context) {
          addEvent(context || document, event, function (e) {
            var found,
              el = e.target || e.srcElement;
            while (
              el &&
              el.matches &&
              el !== context &&
              !(found = el.matches(selector))
            )
              el = el.parentElement;
            if (found) callback.call(el, e);
          });
        }
        live(selector, event, callback, context);
      }
  
  
      function addModal() {
        var modalHtml = `
            <div class="cre_12_container cre_12_hide">
              <div class="cre_12_modal_container">
                <div class="cre_12_modal_content">
                  <div class="cre_12_modal_left">
                    <h1 class="cre_12_title">
                      STAY TUNED AMERICA!
                      New Services Coming Soon...
                    </h1>
                    <p class="cre_12_paragraph">
                      Be among the first in America to get GenderGP’s <b>quick and easy access to transition medication</b> and gender-affirming care.
                    </p>
                    <p class="cre_12_paragraph">
                      Leave your email to <b>join the Early Programme Gold Member list.</b>
                    </p>
                    <p class="cre_12_paragraph">
                      Once we launch, you can <b>get your medication shipped in as little as 3 days.</b>
                    </p>
                    <div class="cre_12_input_container">
                      
                    </div>
                  </div>
                  <div class="cre-t-12-stay-content-thank-you">
                    <div class="cre-t-12-main-content-icon-thank-you">
                        <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GenderGP/test13/thank-you.svg" alt="thank you">
                    </div>
                    <div class="cre-t-12-main-content-2-thank-you">
                        <h2 class="cre-t-12-main-content-header-thank-you">Thank You!</h2>
                    </div>
                    <div class="cre-t-12-main-content-3-thank-you">
                        <p class="cre-t-12-main-content-subheader-thank-you">Your submission has been received!</p>
                    </div>
                  </div>
                  <img class="cre_12_mobile_image" src="https://cdn-3.convertexperiments.com/uf/10007679/10007617/shutterstock_2200079503-min.jpg">
                </div>
                <span class="cre_12_close">
                  <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007617/gender-modal-close.png" alt="close icon" >
                </span>
              </div>
            </div>
        `;
        if (!document.querySelector(".cre_12_container")) {
          document.querySelector(".cre-t-12").insertAdjacentHTML("beforeend", modalHtml);
        }
      }
  
      function moveForm() {
        var form = document.querySelector(".footer-widget #block-10");
        console.log(form);
        waitForElement(".cre_12_input_container", function () {
  
          document.querySelector(".cre_12_input_container").insertAdjacentElement("afterbegin", form);
  
        }, 50, 25000);
      }
  
      function eventListeners() {
  
        if (window.innerWidth < 1150) {
          setTimeout(() => {
            var session = sessionStorage.getItem("cre_12_modal_triggered");
            if (!session) {
  
              document.querySelector(".cre_12_container").classList.remove("cre_12_hide");
              document.querySelector("body.cre-t-12").classList.add("cre_12_modal_triggered");
            }
          }, 24000);
        }
        else {
  
          document.body.addEventListener('mouseleave', function (event) {
            var session = sessionStorage.getItem("cre_12_modal_triggered");
            if (event.clientY <= 0 && !session && !document.querySelector(".cre_12_modal_triggered")) {
              document.querySelector(".cre_12_container").classList.remove("cre_12_hide");
              document.querySelector("body.cre-t-12").classList.add("cre_12_modal_triggered");
            }
          });
        }
  
        live(".cre_12_container", "click", function (e) {
          sessionStorage.setItem("cre_12_modal_triggered", true);
          if (document.querySelector(".cre_12_modal_container").contains(e.target)) {
            if (e.target === document.querySelector(".cre_12_close")) {
              document.querySelector(".cre_12_container").classList.add("cre_12_hide");
            }
          }
          else {
            document.querySelector(".cre_12_container").classList.add("cre_12_hide");
          }
        });
  
      }
  
      function init() {
        if (!document.body.classList.contains(variation_name)) {
          document.body.classList.add(variation_name);
  
          addModal();
          waitForElement(".footer-widget #block-10", moveForm, 25, 25000);
  
  
          if (!window.cre_12_events) {
            waitForElement(".cre_12_close", eventListeners, 50, 15000);
            window.cre_12_events = true;
          }
  
        }
      }
  
      waitForElement("body", init, 50, 25000);
  
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();