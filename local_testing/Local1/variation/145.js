(function () {
  try {
      /* main variables */
      var debug = 1;
      var variation_name = "SWF_15";
      var newImageUrl = `https://cdn-3.convertexperiments.com/uf/10007679/10007714/newdogcat_679c6eed14e0b.png`

      /* helper library */
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
          /****Helper Functions****/
          // helper for enabling IE 8 event bindings
          function addEvent(el, type, handler) {
              if (el.attachEvent) el.attachEvent("on" + type, handler);
              else el.addEventListener(type, handler);
          }
          // matches polyfill
          this && this.Element &&
              (function (ElementPrototype) {
                  ElementPrototype.matches =
                      ElementPrototype.matches ||
                      ElementPrototype.matchesSelector ||
                      ElementPrototype.webkitMatchesSelector ||
                      ElementPrototype.msMatchesSelector ||
                      function (selector) {
                          var node = this,
                              nodes = (
                                  node.parentNode || node.document
                              ).querySelectorAll(selector),
                              i = -1;
                          while (nodes[++i] && nodes[i] != node);
                          return !!nodes[i];
                      };
              })(Element.prototype);
          // live binding helper using matchesSelector
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
      
      // Current date
      const currentDate = new Date();
      // Subtract 2 days
      const twoDaysBefore = new Date();
      twoDaysBefore.setDate(currentDate.getDate());

      // Format the date (e.g., DD Month YYYY)
      const options = { month: 'long', year: 'numeric' };
      const formattedDate = twoDaysBefore.toLocaleDateString('en-GB', options);

      var TheSwiftest_06 = `
<div class="swf_section">
  <div class="swf_container">
      <div class="swf_times">
          <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007714/time-logo_676504cc408c2.svg" alt="">
          <p class="times_content">Last updated:<strong> ${formattedDate}</strong></p>
      </div>
      <div class="swf_content">
          <h2 class="swf_heading">2025’s <span class="border">Best Pet Insurance Plans</span></h2>
          <p class="swf_subheading"><strong>Your furry friend deserves the very best care.</strong> Trusted by over
              10,000 pet owners since 2020, these plans deliver the coverage you need, at great value.</p>
      </div>
      <ul class="swf_list">
          <li class="swf_item">
              <div class="check_mark">
                  <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007714/check-mark_676504a22a13f.svg" alt="">
              </div>
              <p class="bulet_content"><strong>Top brands</strong> offering excellent service and fast claims payouts</p>
          </li>
          <li class="swf_item">
              <div class="check_mark">
                  <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007714/check-mark_676504a22a13f.svg" alt="">
              </div>
              <p class="bulet_content"><strong>Guaranteed lowest prices</strong> with exclusive deals</p>
          </li>
          <li class="swf_item">
              <div class="check_mark">
                  <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007714/check-mark_676504a22a13f.svg" alt="">
              </div>
              <p class="bulet_content"><strong>Accepted by all vets</strong> across the United States</p>
          </li>
      </ul>
  </div>
      </div>`;

      // Dynamic heading based on for /home page----
      function dynamicHeading() {

        waitForElement(".swf_heading", function () {
            if (window.location.pathname == '/home/') {
                if (window.location.href.includes("sub4")) {
                    var dynamicKey = window.location.href;
                    const params = new URLSearchParams(dynamicKey.split('?')[1]);
                    const sub4Value = params.get('sub4');
                    document.querySelector(".swf_heading").innerHTML = `2025’s Best <span class='cre-t-15-cap'>${sub4Value} Plans</span>`
                } else {
                    document.querySelector(".swf_heading").innerHTML = `2025’s <span class="border">Best Pet Insurance Plans</span>`;
                }
            }
        })
    }    
      // experiment event handlers-----------
      function eventHandler(){
          live(".shortcode-tooltip-ad .shortcode-tooltip", "click", function () {
              dynamicHeading()
          })
      }
      // function to update the hero image---
      function updateHeroImage(){
        waitForElement('#page .inside-article [id*="modal"] + .gb-grid-wrapper .wp-block-image', function () {
            document.querySelector("#page .inside-article [id*='modal'] + .gb-grid-wrapper .wp-block-image").innerHTML = `<img src="${newImageUrl}" alt="newpetImage"/>`
        })
    }

      /* Variation Init */
      function init() {
          // Adding variation class to body-------------
          document.querySelector('body').classList.add(variation_name)

          // Inserting the new section in the page-------
          waitForElement('#page .inside-article [id*="modal"]+div> div.gb-grid-column:first-child .gb-inside-container', function () {
              if (!document.querySelector(".swf_section")) {
                  document.querySelector('#page .inside-article [id*="modal"]+div> div.gb-grid-column:first-child .gb-inside-container').innerHTML = TheSwiftest_06;
              }
          })

          // adding the dynamic heading for the /home page--------- based on the sub4 value
          dynamicHeading()

          // updating the hero image----
          updateHeroImage()
          
          // event handler added for test based on the window variable--------
          if(!window.eventHandlerTest06){
              eventHandler();
              window.eventHandlerTest06 = true;
          }

      }

      /* Initialise variation */
      waitForElement("body", init);
  } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
  }
})();