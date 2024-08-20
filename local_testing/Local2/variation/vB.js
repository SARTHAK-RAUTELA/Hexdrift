if(!window.location.href.includes("https://www.sfg20.co.uk/webinar/thanks/facilities-iq-launch")){

  
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
              <h1 class="cre_12_title">
                Watch a quick tour of<br>Facilities-iQ's key features
              </h1>
              <p class="cre_12_subtitle">Skip straight to the features that interest you. No registration required.</p>
              <a href="https://www.sfg20.co.uk/webinar/thanks/facilities-iq-launch" class="cre_12_image_container">
                <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007638/image 28.png" alt="">
              </a>
              <a href="https://www.sfg20.co.uk/webinar/thanks/facilities-iq-launch" class="cre_12_watch">WATCH NOW</a>
            </div>
            <span class="cre_12_close">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 20L0 18L8 10L0 2L2 0L10 8L18 0L20 2L12 10L20 18L18 20L10 12L2 20Z" fill="#929393"/>
              </svg>
            </span>
          </div>
        </div>
      `;
      if (!document.querySelector(".cre_12_container")) {
        document.querySelector(".cre-t-12").insertAdjacentHTML("beforeend", modalHtml);
      }
    }


    function eventListeners() {

      document.querySelector("body").addEventListener('mouseleave', function (event) {
        var session = sessionStorage.getItem("cre_12_modal_triggered");
        if (event.clientY <= 0 && !session && !document.querySelector(".cre_12_modal_triggered")) {
          document.querySelector(".cre_12_container").classList.remove("cre_12_hide");
          document.querySelector("body.cre-t-12").classList.add("cre_12_modal_triggered");
        }
      });

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
      })

    }

    function init() {
      if (!document.body.classList.contains(variation_name)) {
        document.body.classList.add(variation_name);

        if (!window.location.href.includes("/webinar/thanks/facilities-iq-launch")) {
          addModal();
        }

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




}