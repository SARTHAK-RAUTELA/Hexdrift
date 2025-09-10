(function () {
  try {
    /* main variables */
    var debug = 1;
    var variation_name = "ssc-14";
    function waitForElement(selector, trigger) {
      var interval = setInterval(function () {
        if (
          document &&
          document.querySelector(selector) &&
          document.querySelectorAll(selector).length > 0
        ) {
          clearInterval(interval);
          trigger();
        }
      }, 50);
      setTimeout(function () {
        clearInterval(interval);
      }, 15000);
    }
    function live(selector, event, callback, context) {
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent("on" + type, handler);
        else el.addEventListener(type, handler);
      }
      if (this && this.Element) {
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
      }
      addEvent(context || document, event, function (e) {
        var el = e.target || e.srcElement;
        while (el && el.matches && el !== context) {
          if (el.matches(selector)) {
            callback.call(el, e);
            break;
          }
          el = el.parentElement;
        }
      });
    }
    var Cre_13Accordion = `
      <div class="ssc13_accordion">
          <h3 class="accordion_heading">
              How our money-back guarantee works 
              <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007821/vector-4_68a6acd6018d8.svg" alt="" width="14" height="14">
          </h3>
          <p class="accordion_content" style="display:none;">
            If you’re not happy, tell us within 7 days and we’ll refund your $29.95. No questions asked. You can also cancel anytime to stop future charges.
          </p>
      </div>`;

    function init() {
      document.body.setAttribute("data-plan-override", "premium-plus-alt-a");

      setTimeout(function () {

        waitForElement('#step-payments form h2', function () {
          document.querySelector('#step-payments  form h2').innerHTML = 'Unlock all 3 scores today for just $29.95—100% risk-free';
        })
        waitForElement('#step-payments form h2 + div', function () {
          document.querySelector('#step-payments  form h2 + div').innerHTML = 'Get instant access to all 3 credit scores. You’ll be charged<b> $29.95</b> today and each month after. Cancel anytime.'
        })
        waitForElement('#step-payments form h2 + div + div >div span', function () {
          document.querySelectorAll('#step-payments  form h2 + div + div >div span').forEach(function (bullet, index) {
            if (index == 0) {
              bullet.innerHTML = '<b>Instant access</b> to all 3 bureau reports';
            } else if (index == 1) {
              bullet.innerHTML = '<b>Risk-free—</b>full refund within 7 days';
            } else {
              bullet.innerHTML = '<b>Cancel anytime</b> in seconds';
            }
          })
        })
        waitForElement('.accordion_heading', function () {
          document.querySelector('.accordion_heading').innerHTML =
            'How our money-back guarantee works <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007821/vector-4_68a6acd6018d8.svg" alt="" width="14" height="14">';
        });
        waitForElement('.accordion_content', function () {
          document.querySelector('.accordion_content').innerHTML = " If you’re not happy, tell us within 7 days and we’ll refund your $29.95. No questions asked. You can also cancel anytime to stop future charges."
        })
      }, 100);

      waitForElement("#step-payments form h2+div+div", function () {
        let target = document.querySelector("#step-payments form h2+div+div");

        // Check if accordion already inserted right after the target
        if (target && !target.nextElementSibling?.classList.contains("ssc13_accordion")) {
          target.insertAdjacentHTML("afterend", Cre_13Accordion);
        }
      });



      if (!window.eventListenerAddedTest14) {
        window.eventListenerAddedTest14 = true;

        live(".ssc13_accordion .accordion_heading", "click", function () {
          console.log("clicked");
          let parent = this.closest(".ssc13_accordion");
          if (parent) {
            parent.classList.toggle("active");
          }
        });

      }

    }




    waitForElement('html body[data-funnel-step="payments"] .ssc13_accordion .accordion_heading #step-payments form h2', init)
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();