(function () {
    try {
      /* main variables */
      var debug = 0;
      var variation_name = "Cre_sfg20";
      /* all Pure helper functions */
      function waitForElement(selector, trigger, delayInterval, delayTimeout) {
        var interval = setInterval(function () {
          if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
            clearInterval(interval);
            trigger();
          }
        }, delayInterval);
        setTimeout(function () {
          clearInterval(interval);
        }, delayTimeout);
      }
      function addLiveEventListener(selector, event, callback, context) {
        // Helper for enabling IE 8 event bindings
        function addEvent(el, type, handler) {
          if (el.attachEvent) el.attachEvent('on' + type, handler);
          else el.addEventListener(type, handler);
        }
        // Matches polyfill
        this.Element && function (ElementPrototype) {
          ElementPrototype.matches = ElementPrototype.matches ||
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
        }(Element.prototype);
        // Live binding helper using matchesSelector
        function live(selector, event, callback, context) {
          addEvent(context || document, event, function (e) {
            var found, el = e.target || e.srcElement;
            while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
            if (found) callback.call(el, e);
          });
        }
        live(selector, event, callback, context);
      }
      try {
        window.addEventListener("message", function (event) {
          if (event.data.type == "PLAYER_PLAY") {
            window._conv_q = window._conv_q || [];
            _conv_q.push(["triggerConversion", "100033272"]);
          }
        });
      } catch (error) {
        console.log("error excuting the script ===", error);
      }
  
  
  
      var banner = `
      <div class="Cre_Mainbanner">
           <div class="content-wrapper">
      <div class="Cre_bannerleftsection">
        <h2>The <span>industry standard</span> for building maintenance</h2>
        <p class="Cre_paragraph">Only SFG20 offers comprehensive maintenance schedules, accessed via cutting-edge software, to help users control risk, achieve compliance, and ensure buildings are safe and efficient.</p>
        <p class="logoheading">Developed & referenced by:</p>
        <ul>
        <li><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/SFG20/SFG05/BESA+Logo+1.svg"></li>
        <li><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/SFG20/SFG05/RICS+Logo+1.svg"></li>
        <li><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/SFG20/SFG05/BSRIA+White+1.svg"></li>
        <li><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/SFG20/SFG05/CIBSE+Logo+1.svg"></li>
          <li><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/SFG20/SFG05/image+22.svg"></li>
          
        </ul>
       </div>
  
       <div class="hs-video-widget" data-hsv-embed-id="01b0757b-f1db-4529-83c3-81f6fb48da57" data-hsv-status="loaded">
       <div class="hs-video-container" style="max-width: 1920px; margin: 0 auto;">
         <div class="hs-video-wrapper" style="position: relative; height: 0; padding-bottom: 56.25%">
         <iframe referrerpolicy="origin" sandbox="allow-forms allow-scripts allow-same-origin allow-popups" allow="autoplay; fullscreen;" style="position: absolute !important; width: 100% !important; height: 100% !important; left: 0; top: 0; border: 0 none; pointer-events: initial" title="HubSpot Video" loading="lazy" data-hsv-id="89515008748" data-hsv-style="" data-hsv-width="1920" data-hsv-height="1080" data-hsv-autoplay="false" data-hsv-loop="false" data-hsv-muted="false" data-hsv-hidden-controls="false" data-hsv-full-width="false" src="https://play-eu1.hubspotvideo.com/v/139678265/id/89515008748?parentOrigin=https%3A%2F%2Fwww.sfg20.co.uk&amp;renderContext=hubl-iframe#hsvid=01b0757b-f1db-4529-83c3-81f6fb48da57"></iframe>
         </div>
       </div>
       <p class="Crevideocontent"> Our Facilities-iQ software uses color-coding to distinguish between legally required tasks and those that are optimal and discretionary.</P>
       </div>
       
       </div>
       </div>
     <div class="Cre_bottomimg">	   <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007638/Bottom.png"></di>
      `;
  
  
      function init() {
        // Insert the new span element after the .th_homepage-heroheading element
        if (!document.querySelector('.Cre_Mainbanner')) {
          document.querySelector('.new-homepage-banner-v2 > div').insertAdjacentHTML('afterend', banner);
  
        }
  
      }
      /* Initialise variation */
      function sfg20(list, observer) {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === "mark" && entry.name === "afterHydrate") {
            observer.disconnect();
            clearInterval(sfg20interval);
            waitForElement("body", init, 50, 15000);
            window.isHydrated = true;
          }
        });
      }
      if (!window.isHydrated) {
        var sfg20interval = setInterval(function () {
          waitForElement("body", init, 50, 15000);
        }, 50);
        setTimeout(function () {
          clearInterval(sfg20interval);
        }, 3000);
        const observer = new PerformanceObserver(sfg20);
        observer.observe({ entryTypes: ["mark"] });
      } else {
        waitForElement("body", init, 50, 15000);
      }
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();