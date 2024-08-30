(function () {
    try {
      /* main variables */
      var debug = 1;
      var variation_name = "cre-t-56";
  
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
            var items =[];
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
          waitForElement: function (
            selector,
            trigger,
            delayInterval,
            delayTimeout
          ) {
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
  
  
      function addHeroImg(){
          helper.waitForElement('.container .homepage-page-header img[alt="Great Offer - "]', function(){
            var imageElement = document.querySelector('.container .homepage-page-header img[alt="Great Offer - "]');
            if (imageElement) {
                imageElement.src = 'https://cdn-3.convertexperiments.com/uf/10007679/10007537/desk-v1.gif';
            }
          }, 50, 25000)
      }
  
      function addHeroImgMob(){
        helper.waitForElement('.container .homepage-page-header img[alt="Latest Offer - "]', function(){
          var imageElement = document.querySelector('.container .homepage-page-header img[alt="Latest Offer - "]');
          if (imageElement) {
              imageElement.src = 'https://cdn-3.convertexperiments.com/uf/10007679/10007537/mob-v1.gif';
          }
        }, 50, 25000)
      }
  
      /* Variation Init */
      function init() {
        _$('body').addClass(variation_name)
  
        addHeroImg()
        addHeroImgMob()
  
      }
  
      /* Init variation */
      helper.waitForElement(".homepage-page-header", init, 50, 25000);
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();