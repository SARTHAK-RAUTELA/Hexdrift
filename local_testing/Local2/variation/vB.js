(function () {
  try {
      /* main variables */
      var debug = 1;
      var variation_name = "cre-sfg-14";
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
                              el = e.target || e.oldElement;
                          while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
                          if (found) callback.call(el, e);
                      });
                  }
                  live(selector, event, callback, context);
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
      function waitForSwiper(trigger) {
          var interval = setInterval(function () {
              if (typeof window.Swiper != "undefined") {
                  clearInterval(interval);
                  trigger();
              }
          }, 50);
          setTimeout(function () {
              clearInterval(interval);
          }, 15000);
      }
      // Helper functions
      function addScript() {
          var bmScript = document.createElement("script");
          bmScript.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
          document.getElementsByTagName("head")[0].appendChild(bmScript);
          var bmcsslink = document.createElement("link");
          bmcsslink.rel = "stylesheet";
          bmcsslink.href = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
          document.getElementsByTagName("head")[0].appendChild(bmcsslink);
      }
      var CreSlider = `
<div class="cre-t-39-testimonial-wrapper" style="display:none">
<div class="cre-t-39-testimonial-container ">
<div class="cre_headinger">
<h2>Introducing Facilities-iQ—our cutting-edge <br> facilities management software</h2>
<p style="font-size: 16px;">Combining the <strong>latest SFG20 maintenance standards</strong> with <strong> advanced facility management automation</strong>, <br> Facilities-iQ ensures unmatched efficiency, compliance, and peace of mind.</p>
</div>
<div class="cre-t-sfg14-boxslider swiper content-wrapper">
<div class="cre-t-sfg14-boxslider-wrapper swiper-wrapper">
<div class="cre-t-sfg14-box swiper-slide">
<img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/SFG20/SFG14/dashboard_screens_1.svg">
<p>With over 1000 regularly updated maintenance schedules, all aligned with the latest legislation, you can quickly find what you need using keywords, Uniclass, SFG20, or NRM codes.</P>
</div>
<div class="cre-t-sfg14-box swiper-slide">
<img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/SFG20/SFG14/dashboard_screens_2.svg">
<p>Tailor and organize maintenance schedules with custom Maintenance Regimes, then securely share them with your team in the field.</p>
</div>
<div class="cre-t-sfg14-box swiper-slide">
<img src="https://cdn-3.convertexperiments.com/uf/10007679/10007638/dashboard_screens_3-(1).jpg">
<p>Customize task details like duration, frequency, criticality and skill set for better resource planning and allocation.</p>
</div>
<div class="cre-t-sfg14-box swiper-slide">
<img src="https://cdn-3.convertexperiments.com/uf/10007679/10007638/dashboard_screens_4.jpg">
<p>Create tailored maintenance schedules with Derived or Custom options, perfect for focusing on critical tasks and managing specialist assets.</p>
</div>
<div class="cre-t-sfg14-box swiper-slide">
<img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/SFG20/SFG14/dashboard_screens_5.svg">
<p>Easily and securely share Maintenance Regimes with authorized teams, ensuring everyone works under the latest SFG20 standard.</p>
</div>
<div class="cre-t-sfg14-box swiper-slide">
<img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/SFG20/SFG14/dashboard_screens_6.svg">
<p>Quickly access your most-used schedules by creating personalized Favourite Lists, saving you time and effort.</p>
</div>
<div class="cre-t-sfg14-box swiper-slide">
<img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/SFG20/SFG14/dashboard_screens_9.svg">
<p>Use custom Tags to quickly identify schedules, helping you and your team save valuable time.</p>
</div>
<div class="cre-t-sfg14-box swiper-slide">
<img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/SFG20/SFG14/dashboard_screens_10.svg">
<p>Take full control by adding new users and assigning licenses and roles directly from the Admin area.</p>
</div>
<div class="cre-t-sfg14-box swiper-slide">
<img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/SFG20/SFG14/dashboard_screens_11.svg">
<p>Stay on top of tasks with the 'Actions' area, your personal reminder and to-do list at a tap.</p>
</div>
<div class="cre-t-sfg14-box swiper-slide">
<img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/SFG20/SFG14/dashboard_screens_7.svg">
<p>Stay compliant with automated schedule updates, compare changes side-by-side, and implement them at your convenience.</p>
</div>
<div class="cre-t-sfg14-box swiper-slide">
<img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/SFG20/SFG14/dashboard_screens_8.svg">
<p>Integrate Facilities-iQ to your FM system via our free API, automating Maintenance Regimes and saving hours of manual entry.</p>
</div>
</div>
</div>
<!-- If we need pagination -->
<div class="cre-swiper-pagination"></div>
</div>
<!-- If we need navigation buttons -->
<div class="cre-swiper-button-prev"></div>
<div class="cre-swiper-button-next"></div>
<!-- </div> -->
<!-- </div> -->
</div>
`;
      function intializeSwiper() {
          var swiper = document.querySelector(".cre-t-sfg14-boxslider");
          new Swiper(swiper, {
              slidesPerView: 1.2,
              centeredSlides: true,
              grabCursor: true,
              spaceBetween: 30,
              loop: true,
              speed: 800,  // transition duration in milliseconds
              effect: 'slide',
              pagination: {
                  el: ".cre-swiper-pagination",
                  clickable: true,
              },
              navigation: {
                  nextEl: ".cre-swiper-button-next",
                  prevEl: ".cre-swiper-button-prev",
              },
          });
      }
      var helper = _$();
      function init() {
          _$("body").addClass(variation_name);
          if (!document.querySelector(".cre-t-39-testimonial-container")) {
              document.querySelector(".body-container--home .widget-type-cell .row-number-1").insertAdjacentHTML("afterend", CreSlider);
          }
          waitForSwiper(
              function () {
                  intializeSwiper();
              },
              50,
              15000
          );
      }
      addScript();
      helper.waitForElement(".body-container--home .widget-type-cell .row-number-1", init, 50, 25000);
  } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
  }
})();