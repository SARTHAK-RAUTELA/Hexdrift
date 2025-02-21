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
  Leave your email below and we’ll notify you the minute we open the doors.
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
      var form = document.querySelector('[cre-t12="sitewide"]');
      waitForElement(".cre_12_input_container", function () {
        form.querySelector("input[type='email']").setAttribute("placeholder", "Email*");
        document.querySelector(".cre_12_input_container").insertAdjacentElement("afterbegin", form);
        var userData = convert.getUserData().geo.state;
        if (userData) {
          document.querySelector(".cre_12_input_container #user_state").value = userData;
          var event = new Event("change", { bubbles: true });
          document.querySelector(".cre_12_input_container #user_state").dispatchEvent(event);
        }
      }, 50, 25000);
    }
    function setTimer() {
      var now = new Date().getTime();
      sessionStorage.setItem('cre_12_user_entered', now);
    }
    function mobileModalTrigger() {
      var modalInterval = setInterval(() => {
        var session = sessionStorage.getItem("cre_12_modal_triggered");
        if (!session) {
          var userEntry = sessionStorage.getItem('cre_12_user_entered');
          if (userEntry != null) {
            var now = new Date();
            var startTime = parseInt(userEntry);
            if (startTime + 24000 < now.getTime()) {
              setTimeout(function () {
                waitForElement('[cre-t12="sitewide"] form', moveForm, 25, 25000);
              }, 1000);
              document.querySelector(".cre_12_container").classList.remove("cre_12_hide");
              document.querySelector("body.cre-t-12").classList.add("cre_12_modal_triggered");
              clearInterval(modalInterval);
            }
          }
          else {
            setTimer();
          }
        }
      }, 50);
    }
    function eventListeners() {
      if (window.innerWidth < 1150) {
        mobileModalTrigger();
      }
      else {
        document.body.addEventListener('mouseleave', function (event) {
          var session = sessionStorage.getItem("cre_12_modal_triggered");
          if (event.clientY <= 0 && !session && !document.querySelector(".cre_12_modal_triggered")) {
            waitForElement('[cre-t12="sitewide"] form', moveForm, 25, 25000);
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