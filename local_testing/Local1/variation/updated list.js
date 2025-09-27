(function () {
  try {
    /* main variables */
    var debug = 1;
    var variation_name = "cre-t-68";

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
          for (var index = 0; index < arguments.length; index++) {
            items.push(arguments[index]);
          }
          console && console.log(variation_name, items);
        },

        // Adding Class
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

        // Waiting for element to load
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

        live: function (selector, event, callback, context) {
          /****Helper Functions****/
          // helper for enabling IE 8 event bindings
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
          // live binding helper using matchesSelector
          function live(selector, event, callback, context) {
            addEvent(context || document, event, function (e) {
              var found,
                el = e.target || e.srcElement;
              while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
              if (found) callback.call(el, e);
            });
          }
          live(selector, event, callback, context);
        },
      };
      return function (selector) {
        return new bm(selector);
      };
    });

    var helper = _$();
    // Helper Library

    function customGoal() {
      // SFG20 Standard
      helper.live('#mega_loop_1 .cre-t-50-header-text', 'mouseover', function () {
        window._conv_q = window._conv_q || []; _conv_q.push(["triggerConversion", "100036704"]);
      })
      // Software
      helper.live('#mega_loop_2 .cre-t-50-header-text', 'mouseover', function () {
        window._conv_q = window._conv_q || []; _conv_q.push(["triggerConversion", "100036705"]);
      })

      //  What is SFG menu 
      helper.live('[data-id="the_sfg20_standard"]', 'click', function () {
        window._conv_q = window._conv_q || []; _conv_q.push(["triggerConversion", "100036706"]);
      })
      //  Maintenance Schedules
      helper.live('[data-id="maintenance_schedules"]', 'click', function () {
        window._conv_q = window._conv_q || []; _conv_q.push(["triggerConversion", "100036708"]);
      })

      //  SFG20 Licensed Companies 
      helper.live('.cre-t-68-licensed', 'click', function () {
        window._conv_q = window._conv_q || []; _conv_q.push(["triggerConversion", "100036710"]);
      })



      //  Software content goal for variation and control
      //  [data-id="facilities_iq"]
      helper.live('a[data-id="facilities_iq"]', 'click', function () {
        window._conv_q = window._conv_q || []; _conv_q.push(["triggerConversion", "100036707"]);
      })

      //  SFG20 Mobiliser  only for variation
      helper.live('.cre-t-68-software', 'click', function () {
        window._conv_q = window._conv_q || []; _conv_q.push(["triggerConversion", "100036709"]);
      })

      //  [data-id="integration_with_fm_systems"]
      helper.live('[data-id="integration_with_fm_systems"]', 'click', function () {
        window._conv_q = window._conv_q || []; _conv_q.push(["triggerConversion", "100036711"]);
      })



      //  Industry Content Goal for variation and control
      //  Healthcare
      helper.live('a[data-id="healthcare"]', 'click', function () {
        window._conv_q = window._conv_q || []; _conv_q.push(["triggerConversion", "100036712"]);
      })

      //  [data-id="education"]
      helper.live('a[data-id="education"]', 'click', function () {
        window._conv_q = window._conv_q || []; _conv_q.push(["triggerConversion", "100036713"]);
      })
      // data-id="facilities_management"
      helper.live('a[data-id="facilities_management"]', 'click', function () {
        window._conv_q = window._conv_q || []; _conv_q.push(["triggerConversion", "100036714"]);
      })
      //  data-id="government"
      helper.live('a[data-id="government"]', 'click', function () {
        window._conv_q = window._conv_q || []; _conv_q.push(["triggerConversion", "100036715"]);
      })
      //  data-id="sports"
      helper.live('a[data-id="sports"]', 'click', function () {
        window._conv_q = window._conv_q || []; _conv_q.push(["triggerConversion", "100036716"]);
      })
      //  data-id="hvac"
      helper.live('a[data-id="hvac"]', 'click', function () {
        window._conv_q = window._conv_q || []; _conv_q.push(["triggerConversion", "100036717"]);
      })
      // data-id="residential"
      helper.live('a[data-id="residential"]', 'click', function () {
        window._conv_q = window._conv_q || []; _conv_q.push(["triggerConversion", "100036718"]);
      })
      //  data-id="other_industries"
      helper.live('a[data-id="other_industries"]', 'click', function () {
        window._conv_q = window._conv_q || []; _conv_q.push(["triggerConversion", "100036719"]);
      })
    }

    function htmlInsertion() {
      const submenuTitles = document.querySelectorAll(".child-items .submenu-parent-title");

      submenuTitles.forEach((submenuTitle) => {
        const textContent = submenuTitle.textContent.trim();

        const parentLi = submenuTitle.closest("li");

        if (parentLi && parentLi.tagName === "LI") {
          const sanitizedText = textContent.replace(/\s+/g, "-").toLowerCase();

          parentLi.classList.add("cre-t-68-" + sanitizedText);
        }
      });

      // Array of data-id values to target
      const dataIds = ["who_we_help", "the_sfg20_standard", "maintenance_schedules", "accessing_the_schedules", "facilities_iq", "features_&_benefits", "integration_with_fm_systems"];

      // Generate a CSS selector string dynamically
      const selector = dataIds.map((id) => `[data-id="${id}"]`).join(", ");

      // Select all elements matching the generated selector
      document.querySelectorAll(selector).forEach((targetElement) => {
        // Find the closest parent <li> element
        const parentLi = targetElement.closest("li");

        // Ensure the parent <li> exists before proceeding
        if (parentLi && parentLi.tagName === "LI") {
          // Get the data-id value from the target element
          const dataId = targetElement.getAttribute("data-id");

          // Sanitize the data-id to make it suitable for a class name
          const sanitizedDataId = dataId.replace(/[^a-zA-Z0-9-_]/g).toLowerCase();

          // Dynamically create the class name
          const dynamicClass = `cre-t-68-${sanitizedDataId}`;

          // Add the dynamic class to the parent <li>
          parentLi.classList.add(dynamicClass);
        }
      });

      setTimeout(function () {
        var getItemsMenu = document.querySelector(".cre-t-68-industry-content");
        if (getItemsMenu) {
          var wherePlace = document.querySelector(".cre-t-68-fm-providers");
          wherePlace.insertAdjacentElement("afterend", getItemsMenu);
        }

        var getItemSoft = document.querySelector(".cre-t-68-software");
        if (getItemSoft) {
          var wherePlaceSoft = document.querySelector(".left-side .cre-t-68-maintenance-schedules");
          wherePlaceSoft.insertAdjacentElement("afterend", getItemSoft);
        }
      }, 500);
    }

    function textChangeAndUrl() {
      setTimeout(() => {
        const htmlElementNew = `<li class="cre-t-68-licensed-li  nav-items main-link hs-item-has-children">
        <a href="https://www.sfg20.co.uk/sfg20-digital-badge" class="cre-t-68-licensed child-menu-item" data-id="accessing_the_schedules_licensed">
            SFG20 Licensed Companies 
            <span style="color:rgba(29, 113, 166, 1.0);background: rgba(210, 228, 238, 1.0);" class="bookmark-text cre-t-68-new">New</span>
          </a>
    </li>`;

        const htmlElementNew2 = `<li class="cre-t-68-mobility nav-items main-link hs-item-has-children"><a href="https://www.sfg20.co.uk/facilities-iq/mobiliser" class="cre-t-68-software child-menu-item" data-id="accessing_the_schedules">
        SFG20 Mobiliser
        <span style="color:rgba(29, 113, 166, 1.0);background: rgba(210, 228, 238, 1.0);" class="bookmark-text cre-t-68-new">New</span>
      </a></li>`;

        // Only insert the first element if no ".cre-t-68-new" exists anywhere on the page
        if (!document.querySelector(".cre-t-68-new")) {
          document.querySelectorAll(".cre-t-68-accessing_the_schedules").forEach(el => {
            el.insertAdjacentHTML("beforebegin", htmlElementNew);
          });
        }

        // Insert the second element before every matching target
        document.querySelectorAll(".cre-t-68-features_undefined_benefits").forEach(el => {
          el.insertAdjacentHTML("beforebegin", htmlElementNew2);
        });
      }, 1000);

      document.querySelectorAll('[data-id="the_sfg20_standard"]').forEach(el => {
        el.textContent = "What is SFG20";
      });
      document.querySelectorAll('[data-id="integration_with_fm_systems"]').forEach(el => {
        el.textContent = "Integrations";
      });


      document.querySelectorAll('[data-id="maintenance_schedules"]').forEach(el => {
        if (el.tagName === 'A') {
          el.href = "https://www.sfg20.co.uk/maintenance-schedules";
        }
      });


    }


    function forMobileUrlAndTextChange() {

      var submenuTitlesMobile1 = document.querySelectorAll('.header-mobile .nav-drill-inner > ul.nav-items > li:nth-child(1) > ul li.hs-menu-depth-2 > div a')

      submenuTitlesMobile1.forEach((submenuTitle) => {
        const textContent = submenuTitle.textContent.trim();

        const parentLi = submenuTitle.closest("li");

        if (parentLi && parentLi.tagName === "LI") {
          const sanitizedText = textContent.replace(/\s+/g, "-").toLowerCase();

          parentLi.classList.add("cre-t-68-" + sanitizedText);
        }
      });

      var submenuTitlesMobile2 = document.querySelectorAll('.header-mobile .nav-drill-inner > ul.nav-items > li:nth-child(2) > ul li.hs-menu-depth-2 > div a')

      submenuTitlesMobile2.forEach((submenuTitle) => {
        const textContent = submenuTitle.textContent.trim();

        const parentLi = submenuTitle.closest("li");

        if (parentLi && parentLi.tagName === "LI") {
          const sanitizedText = textContent.replace(/\s+/g, "-").toLowerCase();

          parentLi.classList.add("cre-t-68-" + sanitizedText);
        }
      });

      setTimeout(() => {
        document.querySelector('.header-mobile .cre-t-68-fm-providers').insertAdjacentElement("beforebegin", document.querySelector('.header-mobile .cre-t-68-industry-content'));
        document.querySelector('.header-mobile .nav-level-1 > .nav-item:nth-child(2)').insertAdjacentElement("beforeend", document.querySelector('.header-mobile .cre-t-68-software'));
      }, 1000);

      document.querySelector('.header-mobile .nav-level-1 > .nav-item:nth-child(1) > .nav-link-wrap  a.nav-link').textContent = "SFG20 Standard";
      document.querySelector('.header-mobile .nav-level-1 > .nav-item:nth-child(2) > .nav-link-wrap  a.nav-link').textContent = "Software";
    }
    /* Variation Init */
    function init() {
      _$("body").addClass(variation_name);
      htmlInsertion();
      textChangeAndUrl();
      forMobileUrlAndTextChange();
      customGoal();
      // eventHandler();
      // if(window.innerWidth < 1198){
      //   helper.live('.header-mobile .nav-level-1 > .nav-item:nth-child(2)', 'click', function () {
      //     console.log("clicked");
      //     document.querySelector('.header-mobile li.cre-t-68-software').click()
      //   })
      // }
    }

    /* Initialize variation */
    helper.waitForElement('[data-id="accessing_the_schedules"]', init, 50, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test " + variation_name);
  }
})();