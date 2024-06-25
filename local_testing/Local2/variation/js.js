(function () {
    try {
      /* main variables */
      var debug = 1;
      var variation_name = "cre-t-23";
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
      var reviewProfile = ` <div class="ti-profile-img creProfile"> <img src="https://lh3.googleusercontent.com/a-/ALV-UjW6v7fy6wf-jae7AEclEXdmiohWV4ETuYTp1luCCgDZHag=s120-c-rp-mo-br100" alt="Patricia Meneses"> 
        <div class="creText"> 
        <h1>
        Particia Meneses
        </h1>
        <p> February 9, 2024</p>
        </div>
        </div>`;
  
      var reviewImg = ` <div class="creReview"> 
      <div class="googleReview">
      <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/iFLY/Test+23/logo.svg" alt="Patricia Meneses"> </div>
      <div class="startReview">
      <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/iFLY/Test+23/start.svg" alt="Patricia Meneses"> 
      <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/iFLY/Test+23/start.svg" alt="Patricia Meneses"> 
      <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/iFLY/Test+23/start.svg" alt="Patricia Meneses"> 
      <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/iFLY/Test+23/start.svg" alt="Patricia Meneses"> 
      <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/iFLY/Test+23/start.svg" alt="Patricia Meneses"> 
      </div>
      
        </div>`
      var addContent = `<div class="cre-t-23-wrapper">
                            <div class="cre-t-23-container">
                              <div class="cre-t-23-heading">
                                <div class="cre-t-23-txtContent">
                                  <div class="cre-t-23-header">
                                    <h3>Join over 10 million people and experience the freedom of indoor flight!</h3>
                                  </div>
                                  <div class="cre-t-23-subHeading">
                                    <p>“The instructor was amazing. He knew how to calm my kids and help them experience such a fun activity. We will be back again. For anyone with kids, this place is worth the $$ and time. Thank you, iFLY, for the great experience”</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>`;
      /* Variation Init */
      function init() {
        _$("body").addClass(variation_name);
  
          helper.waitForElement('.primaryContainer', function() {
            // setTimeout(function () {
            //   window.scrollTo({ top: 0, behavior: "smooth" });
            // }, 3000);
            document.querySelector(".primaryContainer").insertAdjacentHTML("beforebegin", addContent);
          },50, 25000)
            
          helper.waitForElement('.cre-t-23-wrapper', function(){
            if (document.querySelector('.cre-t-23-wrapper')) {
              document.querySelector(".cre-t-23-wrapper").insertAdjacentHTML("afterend", reviewProfile);
            }
          },50,25000)
          helper.waitForElement('.creProfile', function(){
            if (document.querySelector('.creProfile')) {
              document.querySelector(".creProfile").insertAdjacentHTML('afterend', reviewImg)
            }
          },50,25000)
  
        
      }
  
      function waitForClientScroll(trigger) {
        var interval = setInterval(function() {
          if (typeof window.scrollToSmoothly != "undefined") {
            clearInterval(interval);
            trigger();
          }
        }, 50);
        setTimeout(function() {
          clearInterval(interval);
        }, 15000);
      }
  
  
  
  
  
  waitForClientScroll(function(){
    var originalScrollTo = window.scrollTo;
    window.scrollTo({ top: 0 });
    window.scrollTo = function() {};
    setTimeout(function() {
        window.scrollTo = originalScrollTo;
    },600);
  })
  
  
  
  
  
  
  
  
  
      /* Initialise variation */
      helper.waitForElement(".primaryContainer", init, 50, 25000);
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();