(function () {
    try {
      /* main variables */

      var variation_name = "Buckfire_T02";
      /* Helper functions */

      function waitForElement(selector, trigger, delayInterval, delayTimeout) {
        var interval = setInterval(function () {
          if (document.querySelectorAll(selector).length) {
            clearInterval(interval);
            trigger();
          }
        }, delayInterval);

        setTimeout(function () {
          clearInterval(interval);
        }, delayTimeout);
      }

      var Buckfire02_Stick = `
               <div class="Buckfire02-Stick_Button" style="display: none;">
                <div class="Buckfire02-Stick_CTA">
                  <div class="Need_Helf">
                    <div class="Need_Helf_logo">
                      <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007804/online_686382d83edeb.svg" alt="online">
                    </div>
                    <span class="need-help_content">Case Specialists Available Now </span>
                  </div>
                  
                  <p class="need-help_subcontent"><a href="tel:8006061717"> – Call (800) 606-1717</a></p>
                </div>
              </div>`;
      function init() {
        document.body.classList.add(variation_name);
        function replacePhoneNumberEverywhere(oldText, newText, oldDigits, newDigits) {

          // 1. Replace in text nodes

          const treeWalker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            null,
            false
          );

          let node;
          while ((node = treeWalker.nextNode())) {
            if (node.nodeValue.includes(oldText)) {
              node.nodeValue = node.nodeValue.replaceAll(oldText, newText);
            }
          }

          // 2. Replace in attributes
          const allElements = document.querySelectorAll('*');
          allElements.forEach(el => {
            for (let attr of el.attributes) {
              let updatedValue = attr.value;
              if (updatedValue.includes(oldDigits)) {
                updatedValue = updatedValue.replaceAll(oldDigits, newDigits);
              }
              if (updatedValue.includes(oldText)) {
                updatedValue = updatedValue.replaceAll(oldText, newText);
              }
              if (updatedValue !== attr.value) {
                el.setAttribute(attr.name, updatedValue);
              }
            }
          });
        }

        // Run replacement continuously for 20 seconds
        const runStart = Date.now();
        const intervalId = setInterval(() => {
          replacePhoneNumberEverywhere(
            '(888) 797-8787',
            '(800) 606-1717',
            '+18887978787',
            '+18006061717'
          );

          if (Date.now() - runStart > 20000) {
            clearInterval(intervalId);
            console.log('Stopped after 20 seconds');
          }
        }, 50);
        waitForElement("header+#mobile-menu-view", function () {
          if (!document.querySelector(".Buckfire02-Stick_Button")) {
            document.querySelector("header+#mobile-menu-view")
              .insertAdjacentHTML("afterend", Buckfire02_Stick);
          }
        }, 50, 15000);
      }
      /* Initialise variation */
      waitForElement("header+#mobile-menu-view", init, 50, 15000);
      function loadCTM() {
        var s = document.createElement("script");
        s.src = "http:////76015.tctm.co/t.js";
        s.async = true;
        document.head.appendChild(s);
      }
      waitForElement('head', loadCTM)
      // Make entire banner clickable
      document.addEventListener("click", function (e) {
        var banner = document.querySelector(".Buckfire_T02 .Buckfire02-Stick_Button");
        if (banner && banner.contains(e.target)) {
        window.location.href = "tel:8006061717";
      }
    });
    } catch (e) {
      console.error(e, "error in Test " + variation_name);
    }
  })();