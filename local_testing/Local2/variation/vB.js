(function () {
  try {
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
          while (el && el.matches && el !== context && !(found = el.matches(selector)))
            el = el.parentElement;
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
              <h1 class="cre_ggp_br_title">
                A GenderGP no Brasil agora se chama Vivuna!
              </h1>
              <div class="cre_ggp_br_modal_left">
                <p class="cre_ggp_br_paragraph">
                  <b>Estamos ampliando nossa missão de apoiar as pessoas trans no mundo todo</b> e, no Brasil, atuamos com o nome <b>Vivuna.</b>
                </p>
                <p class="cre_ggp_br_paragraph">
                  Descubra nossos serviços e conheça nosso site aqui.
                </p>

                <div class="cre_ggp_br_input_container">
                  <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007617/mobile-image_68b17f9a29a97.png">
                </div>
                
                <a href="https://vivuna.com.br" target="_blank" class="cre_ggp_br_cta">Continuar</a>
              </div>
              <img class="cre_ggp_br_mobile_image" src="https://cdn-3.convertexperiments.com/uf/10007679/10007617/bg-image_68b14abea0013.png">
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
    function mobileModalTrigger() {
      var modalInterval = setInterval(() => {
        var session = sessionStorage.getItem("cre_ggp_br_modal_triggered");
        if (!session) {
          var userEntry = sessionStorage.getItem("cre_ggp_br_user_entered");
          if (userEntry != null) {
            var now = new Date();
            var startTime = parseInt(userEntry);
            if (startTime + 24000 < now.getTime()) {
              document.querySelector(".cre_ggp_br_container").classList.remove("cre_ggp_br_hide");
              document.querySelector("body.cre_ggp_br").classList.add("cre_ggp_br_modal_triggered");
              clearInterval(modalInterval);
            }
          } else {
            setTimer();
          }
        }
      }, 50);
    }
    function setTimer() {
      var now = new Date().getTime();
      sessionStorage.setItem("cre_ggp_br_user_entered", now);
    }
    function eventListeners() {
      if (window.innerWidth < 1150) {
        mobileModalTrigger();
      } else {
        document.body.addEventListener("mouseleave", function (event) {
          var session = sessionStorage.getItem("cre_ggp_br_modal_triggered");
          if (event.clientY <= 0 && !session && !document.querySelector(".cre_ggp_br_modal_triggered")) {
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
        } else {
          document.querySelector(".cre_ggp_br_container").classList.add("cre_ggp_br_hide");
        }
      });
    }
    function init() {
      if (!document.body.classList.contains(variation_name)) {
        document.body.classList.add(variation_name);
        addModal();
        waitForElement(".cre_ggp_br_close", eventListeners, 50, 15000);
      }
    }
    waitForElement("body", init, 50, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();