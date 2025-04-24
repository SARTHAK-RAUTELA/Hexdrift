(function () {
    try {
      /* main variables */
      var debug = 1;
      var variation_name = "cre-t-20";
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
      var helper = _$();
      // Helper Library
      // Modal Exit HTML
      var newUI = `<div class="cre-t-20-container">
      <div class="container">
       <div class="row">
          <div class="cre-t-20-content">
           <p class="topshortcontent">Dreaming of a summer abroad?</p>
           <div class="cre-t-20-subtitle"> <div class="cre-t-20-subtitle"> Experience the magic of Cambridge this summer</div>
              <p class="cre-t-20-subdescription">Join students aged 14-18 from around the world for an unforgettable summer at Cambridge. </p>
              </div>
           
              <ul>
              <li><b>Tailored content –</b> Expert-led subjects in small classes, with content adapted to match each intake's skills and needs.</li>
              <li><b>A taste of university life –</b> Stay in historic Cambridge college accommodation and experience the setting that has inspired the world's greatest minds.</li>
              <li><b>A global community -</b> Make lifelong friends from around the world in a diverse, dynamic,  and welcoming setting.</li>
              <li><b>Beyond the classroom -</b> Cultural excursions, fun social events, and hands-on learning bring your summer to life.</li>
              </ul>
              <div class="cre-t-5-cat-link">
                  <a href="https://www.reachcambridge.com/apply" class="cre-t-5-button">Apply now</a>
              </div>
          </div>
          <div class="cre-t-20-slider">
              <div class="elementor-element elementor-element-0b25c22 e-flex e-con-boxed e-con e-parent e-lazyloaded cre-t-20-slider-cover" data-id="0b25c22" data-element_type="container" id="cover">
                  <div class="e-con-inner cre-t-20-slider-cover-inner">
                      <div class="elementor-element elementor-element-16c6c9b elementor-widget__width-inherit elementor-absolute overlay elementor-widget elementor-widget-html" data-id="16c6c9b" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="html.default">
                      </div>
                      <div class="elementor-element elementor-element-a762eac elementor-widget elementor-widget-heading" data-id="a762eac" data-element_type="widget" data-widget_type="heading.default">
                          <div class="elementor-element elementor-element-2d5b1db elementor-widget elementor-widget-image" data-id="2d5b1db" data-element_type="widget" data-widget_type="image.default">
                              <div class="elementor-widget-container cre-t-5-image-container">
                                  <a href="https://www.reachcambridge.com/wp-content/uploads/2024/03/Reach-Cambridge_-Trailer.mp4" data-custom_overlay="yes">
                                      <img decoding="async" width="167" height="167" src="https://ddnc0nx6xfvo1.cloudfront.net/wp-content/uploads/2024/01/transparent.png" title="" alt="" loading="lazy"> </a>
                              </div>
                          </div>
                          <div class="elementor-element elementor-element-f455c2f elementor-widget elementor-widget-text-editor" data-id="f455c2f" data-element_type="widget" data-widget_type="text-editor.default">
                              <div class="elementor-widget-container cre-t-5-text-editor">
                                  <p>Watch the trailer</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="Crebac">
                <div class="Cre_img"><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/Reach+Cambridge/11/image+4.svg"></div>
                <div class="textsection">
                 <h5>Endorsed by Experts, Trusted by Families</h5>
                 <p><b>Accredited by the British Accreditation Council.</b> Reach Cambridge is recognised for delivering programs of exceptional academic and personal value. This commitment to excellence means every student not only feels safe and supported but leaves with an experience that is truly transformative.</p>
                </div>
              </div>
                <div class="Cre_logoimages"> 
              <ul>
                <li> <a href="https://www.gooverseas.com/organization/reach-cambridge-reviews"> <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007715/gooverseas_6808dc0d66937.png"> </a></li>
                <li> <a href="https://www.goabroad.com/providers/reach-cambridge"> <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007715/goabroad_6808dbfa95a91.png"> </a> </li>
                <li> <a href="https://world-camps.org/camp/reach-cambridge-summer-school/#:~:text=Reach%20Cambridge%20provides%20a%20range,Cambridge%20Summer%20School%20is%20English"> <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007715/world-camps_6808dc1beb30f.png"> </a></li>
              </ul>
          </div>
          </div>
        </div>
      </div>
  </div>`;
      /* Variation Init */
      function init() {
        _$("body").addClass(variation_name);
        var leftContent = document.querySelector(".cre-t-20-container");
        var mainContainer = document.querySelector(`.elementor[data-elementor-post-type="page"]`)
        if (mainContainer && !leftContent) {
          mainContainer.insertAdjacentHTML("afterbegin", newUI);
        }
  }
      /* Initialize variation */
      helper.waitForElement(`.elementor[data-elementor-post-type="page"]`, init, 50, 25000);
    } catch (e) {
      if (debug) console.log(e, "error in Test " + variation_name);
    }
  })();