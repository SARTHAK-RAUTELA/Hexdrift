
(function () {
  try {
    /* main variables */
    var debug = 1;
    var variation_name = "";

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


    function live(selector, event, callback, context) {
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




    

    var helper = _$();

     function optGoalEvent(creEventName){
        console.log(creEventName);
        window['optimizely'] = window['optimizely'] || [];
        window['optimizely'].push({
          type: "event",
          eventName: creEventName,
          tags: {
            revenue: 0, // Optional in cents as integer (500 == $5.00)
            value: 0.00 // Optional as float
          }
        });
     }


    

      helper.waitForElement('.center-callout__button-area a[href*= "/orlando/checkout/cart"]', function() { 

          live('.center-callout__button-area a[href*= "/orlando/checkout/cart"],.cre-t-201-button','mousedown',function(){
              if(window.location.pathname === '/orlando/upgrades/animal-experiences/'){
                 if(this.textContent.includes('Continue to Cart') || this.textContent.includes('Proceed to Checkout') ){
                   var creEventName = 'Clicks_on_Continue_to_Cart_Button_Animal_experience';
                   optGoalEvent(creEventName);
                 }
              }
              else if (window.location.pathname === '/orlando/upgrades/parking-and-rentals/'){
                 if(this.textContent.includes('Continue to Cart') || this.textContent.includes('Proceed to Checkout')){
                     var creEventName = 'Continue_to_Cart_Button_on_More_Add-ons_page'
                     optGoalEvent(creEventName);
                 }
              }
           })

      }, 50, 15000);




    /* Initialise variation */
    
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();