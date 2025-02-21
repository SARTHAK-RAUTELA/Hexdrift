(function () {
    try {
      /* main variables */
      var debug = 1;
      var variation_name = "cre_ggp_br";
  
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
                  nodes = (node.parentNode || node.document).querySelectorAll(selector),
                  i = -1;
                while (nodes[++i] && nodes[i] != node);
                return !!nodes[i];
              };
          })(Element.prototype);
  
        function live(selector, event, callback, context) {
          addEvent(context || document, event, function (e) {
            var found,
              el = e.target || e.srcElement;
            while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
            if (found) callback.call(el, e);
          });
        }
        live(selector, event, callback, context);
      }
  
      function addModal() {
        var modalHtml = `
              <div class="cre_ggp_br_container cre_ggp_br_hide">
                <div class="cre_ggp_br_modal_container">
                  <div class="cre_ggp_br_modal_content">
                    <div class="cre_ggp_br_modal_left">
                      <h1 class="cre_ggp_br_title">
                        STAY TUNED BRAZIL!
                        New Services Coming Soon...
                      </h1>
                      <p class="cre_ggp_br_paragraph">
                        Be among the first in Brazil to get GenderGP’s <b>quick and easy access to transition medication</b> and gender-affirming care.
                      </p>
                      <p class="cre_ggp_br_paragraph">
                        Leave your email below and we’ll notify you the minute we open the doors.
                      </p>
                      <div class="cre_ggp_br_input_container"></div>
                    </div>
                    <div class="cre_ggp_br-stay-content-thank-you">
                      <div class="cre_ggp_br-main-content-icon-thank-you">
                          <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GenderGP/test13/thank-you.svg" alt="thank you">
                      </div>
                      <div class="cre_ggp_br-main-content-2-thank-you">
                          <h2 class="cre_ggp_br-main-content-header-thank-you">Thank You!</h2>
                      </div>
                      <div class="cre_ggp_br-main-content-3-thank-you">
                          <p class="cre_ggp_br-main-content-subheader-thank-you">Your submission has been received!</p>
                      </div>
                    </div>
                    <img class="cre_ggp_br_mobile_image" src="https://cdn-3.convertexperiments.com/uf/10007679/10007617/shutterstock_2200079503-min.jpg">
                  </div>
                  <span class="cre_ggp_br_close">
                    <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007617/gender-modal-close.png" alt="close icon">
                  </span>
                </div>
              </div>
          `;
        if (!document.querySelector(".cre_ggp_br_container")) {
          document.querySelector(".cre_ggp_br").insertAdjacentHTML("beforeend", modalHtml);
        }
      }
  
  
      function changeJourneyPlaceholder(){
        const journeySelect = document.querySelector('[cre-test-id="brazil-sitewide"] select[name="journey"]');
        if (journeySelect) {
            journeySelect.options[0].text = "What journey are you on? (Select)";
        }
      }
  
      function moveForm() {
        var form = document.querySelector('[cre-test-id="brazil-sitewide"]');
  
        waitForElement(".cre_ggp_br_input_container", function () {
          form.querySelector('input[type="email"]').setAttribute("placeholder", "Email*");
          document.querySelector(".cre_ggp_br_input_container").insertAdjacentElement("afterbegin", form);
  
          // Handle form submission
          // form.addEventListener("submit", function (event) {
          //   waitForElement(".cre_ggp_br_container", function () {
          //     document.body.classList.add("signUpForm-submitted");
          //     document.body.classList.add("cre_ggp_br-submitted");
  
          //   }, 50, 5000);
          // });
  
  
        }, 50, 25000);
      }
  
      function mobileModalTrigger() {
        var modalInterval = setInterval(() => {
          var session = sessionStorage.getItem("cre_ggp_br_modal_triggered");
          if (!session) {
            var userEntry = sessionStorage.getItem('cre_ggp_br_user_entered');
  
            if (userEntry != null) {
              var now = new Date();
              var startTime = parseInt(userEntry);
              if (startTime + 24000 < now.getTime()) {
  
                setTimeout(function () {
                  waitForElement('[cre-test-id="brazil-sitewide"] form', moveForm, 25, 25000);
                },1000);
                document.querySelector(".cre_ggp_br_container").classList.remove("cre_ggp_br_hide");
                document.querySelector("body.cre_ggp_br").classList.add("cre_ggp_br_modal_triggered");
  
                clearInterval(modalInterval);
              }
            }
            else {
              setTimer();
            }
          }
  
        }, 50);
      }
  
      function setTimer() {
        var now = new Date().getTime();
        sessionStorage.setItem('cre_ggp_br_user_entered', now);
      }
  
      function eventListeners() {
  
        if (window.innerWidth < 1150) {
          mobileModalTrigger();
  
        }
        else {
  
          document.body.addEventListener('mouseleave', function (event) {
            var session = sessionStorage.getItem("cre_ggp_br_modal_triggered");
            if (event.clientY <= 0 && !session && !document.querySelector(".cre_ggp_br_modal_triggered")) {
              waitForElement('[cre-test-id="brazil-sitewide"] form', moveForm, 25, 25000);
              document.querySelector(".cre_ggp_br_container").classList.remove("cre_ggp_br_hide");
              document.querySelector("body.cre_ggp_br").classList.add("cre_ggp_br_modal_triggered");
            }
          });
        }
  
        live(".cre_ggp_br_container", "click", function (e) {
          sessionStorage.setItem("cre_ggp_br_modal_triggered", true);
          if (document.querySelector(".cre_ggp_br_modal_container").contains(e.target)) {
            if (e.target === document.querySelector(".cre_ggp_br_close")) {
              document.querySelector(".cre_ggp_br_container").classList.add("cre_ggp_br_hide");
            }
          }
          else {
            document.querySelector(".cre_ggp_br_container").classList.add("cre_ggp_br_hide");
          }
        });
  
  
        var wpcf7Elm = document.querySelector('[cre-test-id="brazil-sitewide"] .wpcf7-form');
        wpcf7Elm && wpcf7Elm.addEventListener('wpcf7submit', function (event) {
          console.log("Form coming braz il")
           setTimeout(() => {
            if(document.querySelector('[cre-test-id="brazil-sitewide"] .wpcf7-form.sent')){
                document.body.classList.add('signUpForm-submitted')
                document.body.classList.add("cre_ggp_br-submitted");
            }
           }, 3000);
        }, false);
  
      }
  
      function init() {
        if (!document.body.classList.contains(variation_name)) {
          document.body.classList.add(variation_name);
          addModal();
          waitForElement('[cre-test-id="brazil-sitewide"] select[name="journey"]', changeJourneyPlaceholder, 50, 15000);
          waitForElement(".cre_ggp_br_close", eventListeners, 50, 15000);
        }
      }
  
      waitForElement("body", init, 50, 25000);
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();
  