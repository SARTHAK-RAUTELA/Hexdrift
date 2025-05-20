(function () {
  try {
    /* main variables */
    var debug = 1;
    var variation_name = "cre-t-42";
    /* helper library */
    var _$;
    !(function (factory) {
      _$ = factory();
    })(function () {
      var bm = function (s) {
        if (typeof s === "string") {
          this.value = Array.prototype.slice.call(document.querySelectorAll(s));
        }
        if (typeof s === "object") {
          this.value = [s];
        }
      };
      bm.prototype = {
        eq: function (n) {
          this.value = [this.value[n]];
          return this;
        },
        each: function (fn) {
          [].forEach.call(this.value, fn);
          return this;
        },
        log: function () {
          var items = [];
          for (let index = 0; index < arguments.length; index++) {
            items.push(arguments[index]);
          }
          console && console.log(variation_name, items);
        },
        addClass: function (v) {
          var a = v.split(" ");
          return this.each(function (i) {
            for (var x = 0; x < a.length; x++) {
              if (i.classList) {
                i.classList.add(a[x]);
              } else {
                i.className += " " + a[x];
              }
            }
          });
        },
        waitForElement: function (selector, trigger, delayInterval, delayTimeout) {
          var interval = setInterval(function () {
            if (_$(selector).value.length) {
              clearInterval(interval);
              trigger();
            }
          }, delayInterval);
          setTimeout(function () {
            clearInterval(interval);
          }, delayTimeout);
        },
      };
      return function (selector) {
        return new bm(selector);
      };
    });
    var helper = _$();
    // observer Selector helper for observe  the  dynamic modal 
    function debounce(func, timeout = 300) {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, timeout);
      };
    }
    function observeSelector(selector, callback, options = {}) {
      const document = options.document || window.document;
      const processed = new Map();
      if (options.timeout || options.onTimeout) {
        throw `observeSelector options \`timeout\` and \`onTimeout\` are not yet implemented.`;
      }
      let obs;
      let isDone = false;
      const done = () => {
        if (obs) obs.disconnect();
        isDone = true;
      };
      const processElement = (el) => {
        if (!processed.has(el)) {
          processed.set(el, true);
          callback(el);
          if (options.once) {
            done();
            return true;
          }
        }
        return false;
      };
      const lookForSelector = () => {
        const elParent = document.documentElement;
        if (elParent.matches(selector) || elParent.querySelector(selector)) {
          const elements = elParent.querySelectorAll(selector);
          elements.forEach((el) => processElement(el));
        }
      };
      const debouncedLookForSelector = debounce(() => {
        lookForSelector();
      }, 100);
      // Initial check for the selector on page load
      lookForSelector();
      if (!isDone) {
        obs = new MutationObserver(() => {
          debouncedLookForSelector();
        });
        obs.observe(document, {
          attributes: false,
          childList: true,
          subtree: true,
        });
      }
      return done;
    }
    var icon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
    <path d="M6.74908 14.2382L0 7.48911L1.68727 5.80184L6.74908 10.8637L17.6127 0L19.3 1.68727L6.74908 14.2382Z" fill="#C7A77B"/>
  </svg>`;
    var creT13ModalContent = `
      <div style="display: none;" class="cre-t-42-modal-overlay"></div>
  <div style="display: none;" class="cre-t-42-modal-container">
    
    <div class="cre-t-42-modal-wrapper">
      <div class="cre-t-42-cross">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M2.1868 18L0.452148 16.2L7.39074 9L0.452148 1.8L2.1868 0L9.12538 7.2L16.064 0L17.7986 1.8L10.86 9L17.7986 16.2L16.064 18L9.12538 10.8L2.1868 18Z" fill="#D8DBDF"/>
  </svg>
      </div>
      <div class="cre-t-42-modal-main">
        <div class="cre-t-modal-header">What is First Table?</div>
         <div class="cre-t-42-modal-content">
          <div class="cre-t-42-modal-sub-copy"><b>First Table is a restaurant discovery platform where you get 50% off your meal!</b> <br>Restaurants use First Table to fill empty tables. You pay a small booking fee and enjoy a great dining experience at half the price.</div>
          <div class="cre-t-42-modal-list-header">How it Works</div>
          <div class="cre-t-42-modal-list-items">
            <div class="cre-t-42-modal-list-item">
              <div class="cre-t-42-modal-item-content">
                <span>Find a Restaurant</span> — Browse restaurants near you and discover new cuisines.
              </div>
            </div>
            <div class="cre-t-42-modal-list-item">
              
              <div class="cre-t-42-modal-item-content"><span>Book the First Table</span> — Pay a small booking fee to secure your table. Your reservation is confirmed instantly.</div>
            </div>
            <div class="cre-t-42-modal-list-item">
            
              <div class="cre-t-42-modal-item-content"><span>Enjoy 50% Off</span> — Save on your meal while receiving the same great food and service as full-paying customers.</div>
            </div>
          </div>
          <div class="cre-t-42-modal-nohidefree">No hidden fees. Just great food at half the price.</div>
          <div class="cre-t-42-modal-lWhy_Restaurants">Why Restaurants <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007713/vector_67efae1c20173.svg"> First Table</div>
          <div class="cre-t-42-modal-paragraph">Restaurants love First Table because it fills their empty tables and brings in new customers. You'll get the <b>same great food and service</b>—no cut corners, just a win-win for everyone.</div>
          <div class="cre-t-42-modal-reviewsection">
             <div class="cre-t-42-modal-reviewicon"><img src="https://cdn-3.convertexperiments.com/uf/10007679/10007713/group-10_67efae29ecdee.svg"></div>
              <p> "The service was exceptional, and the food was top-notch even with the discount."<p>
          </div>
          <div class="cre-t-42-modal-lWhy-Common-Questions">
           <div class="Cre_heading_wuestions"> Common Questions</div>
             <div class="cre-t-42-modal-questionstab">
                <p>Will my booking be honoured?</p>
                <p>Yes! Your reservation is confirmed instantly and the restaurant knows you're coming.</p>
             </div>
             <div class="cre-t-42-modal-questionstab">
                <p>Do restaurants limit what I can order?</p>
                <p>The menu and any conditions are always clear upfront, so you know exactly what to expect.</p>
             </div>
               <div class="cre-t-42-modal-questionstab">
                <p>Is First Table legit?</p>
                <p>Trusted by over 2,000,000 diners and 2,500+ restaurants globally. We monitor restaurant quality and only work with reputable venues.</p>
             </div>
              <div class="cre-t-42-modal-faqcta"> <a href="https://www.firsttable.co.nz/frequently-asked-questions">See all FAQs</a></div>
          </div>
        </div>
       <div class="cre-t-42-modal-button">OK, got it</div>
      </div>
    </div>
  </div>
      `;
    // all the changes based  on our targeted modal and social login present or not 
    function updateChanges() {
      observeSelector(' #form-alert , [data-attribute="header-nav"] > span', () => {
        helper.waitForElement('[data-attribute="header-nav"] , [users_type="member"] [data-attribute="header-search"] + [display="flex"] > [display="flex"]', function () {
          var insertionDiv = document.querySelector('[data-attribute="header-nav"]');
          var insertionDiv2 = document.querySelector('[users_type="member"] [data-attribute="header-search"] + [display="flex"] > [display="flex"]');
          var creT13NewContent = document.querySelector(".cre-t-42-new-content-container");
          var mobileselector = document.querySelector('[data-attribute="header-search"]');
          if ((insertionDiv || insertionDiv2 || mobileselector) && !creT13NewContent) {
            const newContent = `<span class="cre-t-42-new-content-container">How it Works</span>`;
            if (window.innerWidth <= 767 && mobileselector) {
              mobileselector.insertAdjacentHTML("beforeend", newContent);
            } else if (insertionDiv) {
              insertionDiv.insertAdjacentHTML("afterbegin", newContent);
            } else if (insertionDiv2) {
              insertionDiv2.insertAdjacentHTML("afterbegin", newContent);
            }
            document.body.insertAdjacentHTML("beforeend", creT13ModalContent);
          }
          document.addEventListener("click", function (e) {
            if (e.target.classList.contains("cre-t-42-new-content-container")) {
              document.body.classList.add("cre-t-42-modal-open");
              window._conv_q = window._conv_q || [];
              _conv_q.push(["triggerConversion", "100035415"]);
            }
            if (e.target.classList.contains("cre-t-42-cross") || e.target.closest("div").classList.contains("cre-t-42-cross") || e.target.classList.contains("cre-t-42-modal-button")) {
              if (document.body.classList.contains("cre-t-42-modal-open")) {
                document.body.classList.remove("cre-t-42-modal-open");
              }
            }
            if (e.target.classList.contains("cre-t-42-modal-overlay")) {
              if (document.body.classList.contains("cre-t-42-modal-open")) {
                document.body.classList.remove("cre-t-42-modal-open");
              }
            }
          });
        }, 50, 15000)
      });
    }
    /* Variation Init */
    function init() {
      document.body.classList.add(variation_name);
      // initiate the observer only once 
      if (!window.creT42bserver) {
        window.creT42bserver = true;
        updateChanges();
      }
    }
    /* Initialise variation */
    helper.waitForElement("[data-attribute='header-logo']", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
