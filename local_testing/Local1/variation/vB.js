(function () {
  try {
    /* main variables */
    var debug = 1;
    var variation_name = "cre-t-17";
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

    function live(selector, event, callback, context) {
      // helper for enabling IE 8 event bindings
      function addEvent(el, type, handler) {
          if (el.attachEvent) el.attachEvent("on" + type, handler);
          else el.addEventListener(type, handler);
      }
      // matches polyfill
      this &&
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
    }


    var helper = _$();




function closeListener() {
  live('.cre-t-13-close-icon', 'click', function(){
    var targetElement = document.querySelector('.cre-t-13-stay-container');
    if (targetElement) {
        targetElement.classList.add('cre-t-13-add-close');
    }
  })
}


function filedHide() {
  var targetElement = document.querySelector('body');
  if (targetElement) {
    targetElement.classList.add('cre-t-17-filedHide')
  }

  // helper.waitForElement('.cre-t-17-filedHide .hs_submit .actions input.hs-button', function(){
  //   document.querySelector('.cre-t-17-filedHide .hs_submit .actions input.hs-button').value = 'Next';
  // },25, 50000)
}

function closeListener() {
  live('.hs_submit .actions input.hs-button', 'click', function () {
    var requiredFields = document.querySelectorAll('input[name="firstname"][required], input[name="lastname"][required],input[name="email"][required]');
    var allFilled = true;
    var targetElement = document.querySelector('body');

    requiredFields.forEach(function (field) {
      if (!field.value.trim() || field.classList.contains('error')) {
        allFilled = false;
      }
    });

    if (!allFilled) {
      if (!targetElement.classList.contains('cre-t-17-filedHide')) {
        targetElement.classList.add('cre-t-17-filedHide');
      }
    } else {
      targetElement.classList.remove('cre-t-17-filedHide');
      targetElement.classList.add('cre-t-17-error-handel');
      helper.waitForElement('.hs_submit .actions input.hs-button', function () {
        var button = document.querySelector('.hs_submit .actions input.hs-button');
        if (button) {
          button.value = 'Book your demo';
        }
      }, 25, 50000);
    }
  });
}

var addNewContent = `<div class="cre-t-17-add-content-wrapper">
<div class="cre-t-17-add-content-main">
    <div class="cre-t-17-add-content-text">
        The details below will help us tailor your demo to fit your specific needs. Rest assured, your data is safe with us and will never be shared.
    </div>
</div>
</div>`

function addNewContentText(){
  helper.waitForElement('.form form .hs_company', function(){
    document.querySelector('.form form .hs_company').insertAdjacentHTML('beforebegin', addNewContent)
  }, 25, 50000)
}

    /* Variation Init */
    function init() {
      _$("body").addClass(variation_name); 
      
      filedHide()
      closeListener()
      addNewContentText()

      live('.input [name="company"], .input [name="jobtitle"],.input [inputmode="tel"]', 'click', function(){
        var targetElement = document.querySelector('body');
        if (document.querySelector('.cre-t-17-error-handel')) {
          targetElement.classList.remove('cre-t-17-error-handel');
        }
      })
    }

    /* Init variation */
    helper.waitForElement(".form", init, 50, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();