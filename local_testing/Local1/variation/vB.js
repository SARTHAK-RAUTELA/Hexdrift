(function () {
    try {
      /* main variables */
      var debug = 1;
      var variation_name = "cre-t-02";
  
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
  
           live : function(selector, event, callback, context) {
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
  
     // yearly pro html for price block 
      var yearlyPro = `
      <div class="cre-t-2-pro-yearly-price-wrapper">
      <div class="cre-t-2-pro-yearly-price">
          <span class="currency"></span>
          <span class="integer-part"></span>
          <span class="time price-without-decimal"></span>
        </div>
        <div class="total">
  
        </div>
  </div>
      `;
  
  
      // yearly starter html for price block 
      var yearlyStarter = `
      <div class="cre-t-2-started-yearly-price-wrapper">
      <div class="cre-t-2-started-yearly-price">
          <span class="currency"></span>
          <span class="integer-part"></span>
          <span class="time price-without-decimal"></span>
        </div>
        <div class="total">
          
        </div>
  </div>
      `;
  
  
      //input box toggle for price section 1
      var inputToggleHTML = `
      
      <div class="cre-t-02-toggle-wrapper">
      <div class="cre-t-02-toggle-container">
          <div class="cre-t-02-toggle-main">
              <div class="cre-t-02-monthly">
                  Monthly
              </div>
              <div class="cre-t-02-toggle-box">
                  <input class="input" type="checkbox" checked name="darkmode" id="dark-mode"/>
                  <label for="dark-mode" class="label">
                    <span class="circle"></span>
                  </label>
              </div>
              <div class="cre-t-02-yearly">
                  Annual
              </div>
              <div class="cre-t-02-discount">
                  (Save 30%)
              </div>
          </div>
      </div>
  </div>	
      `;
  
  //input box toggle for price section 2
      var inputToggleHTMLOne = `
      
      <div class="cre-t-02-toggle-wrapper">
      <div class="cre-t-02-toggle-container">
          <div class="cre-t-02-toggle-main">
              <div class="cre-t-02-monthly">
                  Monthly
              </div>
              <div class="cre-t-02-toggle-box">
                  <input class="input" type="checkbox" checked name="darkmodeOne" id="dark-mode-one"/>
                  <label for="dark-mode-one" class="label">
                    <span class="circle"></span>
                  </label>
              </div>
              <div class="cre-t-02-yearly">
                  Annual
              </div>
              <div class="cre-t-02-discount">
                  (Save 30%)
              </div>
          </div>
      </div>
  </div>	
      `;
  
  
      //subscribe content where its not present 
      var subscribeContent = `
      <div class="cre-t-02-subscribe-wrapper">
   <div class="cre-t-02-subscribe-container">
    <div class="cre-t-02-subscribe-main">
  
      <h2>Subscribe today</h2>
      <div>
        <p style="text-align: left;">Start using the fastest, most user-friendly,&nbsp;<strong>value betting</strong>&nbsp;and&nbsp;<strong>sure betting</strong> service on the market. At any given time, RebelBetting finds thousands of profitable bets for you to bet on.</p>
        
      </div>
  
    </div>
   </div>
  </div>
      
      `
  
      // format the number from 1162 to 1,162
      function formatNumber(n) {
          if (n >= 1000) {
              return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
          return n.toString();
      }
  
  
      // monthly toggle enable for single price block
      function monthlyToggle(){
          document.body.classList.add('cre-t-02-monthly-activated')
          if(document.body.classList.contains('cre-t-02-yearly-activated')){
              document.body.classList.remove('cre-t-02-yearly-activated')
          }
      }
  
       // yearly  toggle enable for single price block
      function yearlyToggle(){
          document.body.classList.add('cre-t-02-yearly-activated')
          if(document.body.classList.contains('cre-t-02-monthly-activated')){
              document.body.classList.remove('cre-t-02-monthly-activated')
          }
      }
  
      
  
  
  
  
  // toggle function for single price block
  function toggle(){
  
  var inputElmt = document.querySelector(".cre-t-02-toggle-box .input");
  
  inputElmt.addEventListener('input',function(){
      updateStatus();
  })
  
  // update status of price block 
  function updateStatus(){
    if(inputElmt.checked){
       yearlyToggle();
  
    }
    else {
      monthlyToggle();
    }
  }
  
  }
  
  
  // toggle for multiple price section
      function toggleHome(){
          var inputElmt = document.querySelector(".cre-t-02-pricing-one  .cre-t-02-toggle-box .input");
          
  
          inputElmt.addEventListener('input',function(){
              updateStatusHome();
          })
  
          helper.waitForElement('.cre-t-02-pricing-two .cre-t-02-toggle-box .input',function(){
              var inputElmtOne = document.querySelector(".cre-t-02-pricing-two .cre-t-02-toggle-box .input");
              inputElmtOne.addEventListener('input',function(){
                  updateStatusHomeOne(inputElmtOne);
              })
          },50,15000);
  
          
          // update status of price block 
          function updateStatusHome(){
            if(inputElmt.checked){
              document.body.classList.add('cre-t-02-yearly-activated')
              if(document.body.classList.contains('cre-t-02-monthly-activated')){
                  document.body.classList.remove('cre-t-02-monthly-activated')
              }
          
            }
            else {
              document.body.classList.add('cre-t-02-monthly-activated')
              if(document.body.classList.contains('cre-t-02-yearly-activated')){
                  document.body.classList.remove('cre-t-02-yearly-activated')
              }
            }
  
  
      }
  // update status of price block 
      function updateStatusHomeOne(inputElmtOne){
          if(inputElmtOne.checked){
              document.body.classList.add('cre-t-02-yearly-activated-one')
              if(document.body.classList.contains('cre-t-02-monthly-activated-one')){
                  document.body.classList.remove('cre-t-02-monthly-activated-one')
              }
        
          }
          else {
              document.body.classList.add('cre-t-02-monthly-activated-one')
              if(document.body.classList.contains('cre-t-02-yearly-activated-one')){
                  document.body.classList.remove('cre-t-02-yearly-activated-one')
              }
          }
  
  
    }
  
  }
  
  
    function updateDynamicPriceSingleBlock(){
     
      helper.waitForElement('.cre-t-02-pricing-section .cre-t-2-pro .pricing-row',function(){
          helper.waitForElement('.cre-t-02-pricing-section .cre-t-2-starter .pricing-row',function(){
            document.querySelector('.cre-t-02-pricing-section .cre-t-2-pro .pricing-row').insertAdjacentHTML('afterend',yearlyPro);
            document.querySelector('.cre-t-02-pricing-section .cre-t-2-starter .pricing-row').insertAdjacentHTML('afterend',yearlyStarter);
  
            document.querySelector('.cre-t-2-pro .fusion-button-wrapper a ').classList.add('cre-pro-without-discount');
            document.querySelector('.cre-t-2-starter .fusion-button-wrapper a ').classList.add('cre-starter-without-discount');
  
            document.querySelector('.cre-t-2-pro .fusion-button-wrapper a ').insertAdjacentHTML('afterend',creProDiscount);
            document.querySelector('.cre-t-2-starter .fusion-button-wrapper a ').insertAdjacentHTML('afterend',creStarterDiscount);
  
  
            setTimeout(function(){
               helper.waitForElement('.cre-t-02-pricing-section .cre-t-2-pro .pricing-row .price .currency',function(){
                   helper.waitForElement('.cre-t-02-pricing-section .cre-t-2-pro .pricing-row .price .integer-part',function(){
                       helper.waitForElement('.cre-t-02-pricing-section .cre-t-2-pro .pricing-row .price .time.price-without-decimal',function(){
                           
                           var currency = document.querySelector('.cre-t-02-pricing-section .cre-t-2-pro .pricing-row .price .currency').textContent;
                           var pricePro = document.querySelector('.cre-t-02-pricing-section .cre-t-2-pro .pricing-row .price .integer-part').textContent;
                           var priceType = document.querySelector('.cre-t-02-pricing-section .cre-t-2-pro .pricing-row .price .time.price-without-decimal').textContent;
                            
                           var pricePro = parseFloat(pricePro).toFixed(2);
                           var priceProNewYearly  = parseFloat(pricePro/100).toFixed(2);
                           var priceProDiscount = parseFloat(priceProNewYearly*30).toFixed(2);
                           var priceProYearlyAfterDiscount = parseInt(pricePro - priceProDiscount);
  
                           var total = parseFloat((pricePro - priceProDiscount)*12);
                           total = Math.round(total);
                            total = formatNumber(total);
  
                           document.querySelector('.cre-t-2-pro-yearly-price .currency').textContent = currency;
                           document.querySelector('.cre-t-2-pro-yearly-price .integer-part').textContent = priceProYearlyAfterDiscount;
                           document.querySelector('.cre-t-2-pro-yearly-price .price-without-decimal').textContent = priceType;
                           document.querySelector('.cre-t-2-pro-yearly-price-wrapper .total').textContent = currency +total +'/year';
  
                           document.querySelector('.cre-t-2-pro .cre-pro-discount').href = document.querySelector('html body .cre-t-2-pro .panel-footer a:not(.fusion-button)').href;
  
                       },50,15000);
  
  
                   },50,15000);
  
  
                },50,15000);
  
  
                helper.waitForElement('.cre-t-02-pricing-section .cre-t-2-starter .pricing-row .price .currency',function(){
  
                   helper.waitForElement('.cre-t-02-pricing-section .cre-t-2-starter .pricing-row .price .integer-part',function(){
                       helper.waitForElement('.cre-t-02-pricing-section .cre-t-2-starter .pricing-row .price .time.price-without-decimal',function(){
  
                           var currency = document.querySelector('.cre-t-02-pricing-section .cre-t-2-starter .pricing-row .price .currency').textContent;
                           var pricePro = document.querySelector('.cre-t-02-pricing-section .cre-t-2-starter .pricing-row .price .integer-part').textContent;
                           var priceType = document.querySelector('.cre-t-02-pricing-section .cre-t-2-starter  .pricing-row .price .time.price-without-decimal').textContent;
                            
                           var pricePro = parseFloat(pricePro).toFixed(2);
                           var priceProNewYearly  = parseFloat(pricePro/100).toFixed(2);
                           var priceProDiscount = parseFloat(priceProNewYearly*30).toFixed(2);
                           var priceProYearlyAfterDiscount = parseInt(pricePro - priceProDiscount);
  
                           var total = parseFloat((pricePro - priceProDiscount)*12);
                           total = Math.round(total);
                            total = formatNumber(total);
  
  
  
                           document.querySelector('.cre-t-2-started-yearly-price .currency').textContent = currency;
                           document.querySelector('.cre-t-2-started-yearly-price .integer-part').textContent = priceProYearlyAfterDiscount;
                           document.querySelector('.cre-t-2-started-yearly-price .price-without-decimal').textContent = priceType;
                           document.querySelector('.cre-t-2-started-yearly-price-wrapper .total').textContent = currency +total +'/year';
  
                           document.querySelector('.cre-t-2-starter .cre-starter-discount').href = document.querySelector('html body .cre-t-2-starter .panel-footer a:not(.fusion-button)').href;
  
  
                       },50,15000);
  
  
                   },50,15000);
  
  
                },50,15000);
  
            },2000);
  
          },50,15000);
       },50,15000);
  
    }
  
  
    function updateDynamicPriceMultipleBlock(){
  
      helper.waitForElement('.cre-t-02-pricing-section.cre-t-02-pricing-one .cre-t-2-pro .pricing-row',function(){
          helper.waitForElement('.cre-t-02-pricing-section.cre-t-02-pricing-one .cre-t-2-starter .pricing-row',function(){
            document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-one .cre-t-2-pro .pricing-row').insertAdjacentHTML('afterend',yearlyPro);
            document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-one .cre-t-2-starter .pricing-row').insertAdjacentHTML('afterend',yearlyStarter);
  
            document.querySelector('.cre-t-02-pricing-one  .cre-t-2-pro .fusion-button-wrapper a ').classList.add('cre-pro-without-discount');
            document.querySelector('.cre-t-02-pricing-one  .cre-t-2-starter .fusion-button-wrapper a ').classList.add('cre-starter-without-discount');
  
            document.querySelector('.cre-t-02-pricing-one  .cre-t-2-pro .fusion-button-wrapper a ').insertAdjacentHTML('afterend',creProDiscount);
            document.querySelector('.cre-t-02-pricing-one  .cre-t-2-starter .fusion-button-wrapper a ').insertAdjacentHTML('afterend',creStarterDiscount);
  
            document.querySelector('.cre-t-02-pricing-two  .cre-t-2-pro .fusion-button-wrapper a ').classList.add('cre-pro-without-discount');
            document.querySelector('.cre-t-02-pricing-two  .cre-t-2-starter .fusion-button-wrapper a ').classList.add('cre-starter-without-discount');
  
            document.querySelector('.cre-t-02-pricing-two  .cre-t-2-pro .fusion-button-wrapper a ').insertAdjacentHTML('afterend',creProDiscount);
            document.querySelector('.cre-t-02-pricing-two  .cre-t-2-starter .fusion-button-wrapper a ').insertAdjacentHTML('afterend',creStarterDiscount);
  
  
           
            document.body.classList.add('cre-t-02-yearly-activated')
            document.body.classList.add('cre-t-02-yearly-activated-one')
            setTimeout(function(){
               helper.waitForElement('.cre-t-02-pricing-section.cre-t-02-pricing-one .cre-t-2-pro .pricing-row .price .currency',function(){
  
                   helper.waitForElement('.cre-t-02-pricing-section.cre-t-02-pricing-one .cre-t-2-pro .pricing-row .price .integer-part',function(){
  
  
                       helper.waitForElement('.cre-t-02-pricing-section.cre-t-02-pricing-one .cre-t-2-pro .pricing-row .price .time.price-without-decimal',function(){
                           
                           var currency = document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-one .cre-t-2-pro .pricing-row .price .currency').textContent;
                           var pricePro = document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-one .cre-t-2-pro .pricing-row .price .integer-part').textContent;
                           var priceType = document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-one .cre-t-2-pro .pricing-row .price .time.price-without-decimal').textContent;
                            
                           var pricePro = parseFloat(pricePro).toFixed(2);
                           var priceProNewYearly  = parseFloat(pricePro/100).toFixed(2);
                           var priceProDiscount = parseFloat(priceProNewYearly*30).toFixed(2);
                           var priceProYearlyAfterDiscount = parseInt(pricePro - priceProDiscount);
  
                           var total = parseFloat((pricePro - priceProDiscount)*12);
                           total = Math.round(total);
                            total = formatNumber(total);
  
                           document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-one .cre-t-2-pro-yearly-price .currency').textContent = currency;
                           document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-one .cre-t-2-pro-yearly-price .integer-part').textContent = priceProYearlyAfterDiscount;
                           document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-one .cre-t-2-pro-yearly-price .price-without-decimal').textContent = priceType;
                           document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-one .cre-t-2-pro-yearly-price-wrapper .total').textContent = currency +total +'/year';
  
  
                           document.querySelector('.cre-t-02-pricing-one .cre-t-2-pro .cre-pro-discount').href = document.querySelector('html body .cre-t-2-pro .panel-footer a:not(.fusion-button)').href;
  
                           
  
                       },50,15000);
  
  
                   },50,15000);
  
  
                },50,15000);
  
  
  
  
                helper.waitForElement('.cre-t-02-pricing-section.cre-t-02-pricing-one  .cre-t-2-starter .pricing-row .price .currency',function(){
  
                   helper.waitForElement('.cre-t-02-pricing-section.cre-t-02-pricing-one .cre-t-2-starter .pricing-row .price .integer-part',function(){
  
  
                       helper.waitForElement('.cre-t-02-pricing-section.cre-t-02-pricing-one .cre-t-2-starter .pricing-row .price .time.price-without-decimal',function(){
  
                           var currency = document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-one .cre-t-2-starter .pricing-row .price .currency').textContent;
                           var pricePro = document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-one .cre-t-2-starter .pricing-row .price .integer-part').textContent;
                           var priceType = document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-one .cre-t-2-starter  .pricing-row .price .time.price-without-decimal').textContent;
                            
                           var pricePro = parseFloat(pricePro).toFixed(2);
                           var priceProNewYearly  = parseFloat(pricePro/100).toFixed(2);
                           var priceProDiscount = parseFloat(priceProNewYearly*30).toFixed(2);
                           var priceProYearlyAfterDiscount = parseInt(pricePro - priceProDiscount);
  
                           var total = parseFloat((pricePro - priceProDiscount)*12);
                           total = Math.round(total);
                            total = formatNumber(total);
  
  
  
                           document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-one .cre-t-2-started-yearly-price .currency').textContent = currency;
                           document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-one .cre-t-2-started-yearly-price .integer-part').textContent = priceProYearlyAfterDiscount;
                           document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-one .cre-t-2-started-yearly-price .price-without-decimal').textContent = priceType;
                           document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-one .cre-t-2-started-yearly-price-wrapper .total').textContent = currency +total +'/year';
  
  
                           document.querySelector('.cre-t-02-pricing-one .cre-t-2-starter .cre-starter-discount').href = document.querySelector('html body .cre-t-2-starter .panel-footer a:not(.fusion-button)').href;
  
                       },50,15000);
  
  
                   },50,15000);
  
  
                },50,15000);
  
            },2000);
  
  
          },50,15000);
       },50,15000);
  
  
  
       helper.waitForElement('.cre-t-02-pricing-section.cre-t-02-pricing-two .cre-t-2-pro .pricing-row',function(){
          helper.waitForElement('.cre-t-02-pricing-section.cre-t-02-pricing-two .cre-t-2-starter .pricing-row',function(){
            document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-two .cre-t-2-pro .pricing-row').insertAdjacentHTML('afterend',yearlyPro);
            document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-two .cre-t-2-starter .pricing-row').insertAdjacentHTML('afterend',yearlyStarter);
  
            setTimeout(function(){
               helper.waitForElement('.cre-t-02-pricing-section.cre-t-02-pricing-two .cre-t-2-pro .pricing-row .price .currency',function(){
  
                   helper.waitForElement('.cre-t-02-pricing-section.cre-t-02-pricing-two .cre-t-2-pro .pricing-row .price .integer-part',function(){
  
  
                       helper.waitForElement('.cre-t-02-pricing-section.cre-t-02-pricing-two .cre-t-2-pro .pricing-row .price .time.price-without-decimal',function(){
                           
                           var currency = document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-two .cre-t-2-pro .pricing-row .price .currency').textContent;
                           var pricePro = document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-two .cre-t-2-pro .pricing-row .price .integer-part').textContent;
                           var priceType = document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-two .cre-t-2-pro .pricing-row .price .time.price-without-decimal').textContent;
                            
                           var pricePro = parseFloat(pricePro).toFixed(2);
                           var priceProNewYearly  = parseFloat(pricePro/100).toFixed(2);
                           var priceProDiscount = parseFloat(priceProNewYearly*30).toFixed(2);
                           var priceProYearlyAfterDiscount = parseInt(pricePro - priceProDiscount);
  
                           var total = parseFloat((pricePro - priceProDiscount)*12);
                           total = Math.round(total);
                            total = formatNumber(total);
  
                           document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-two .cre-t-2-pro-yearly-price .currency').textContent = currency;
                           document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-two .cre-t-2-pro-yearly-price .integer-part').textContent = priceProYearlyAfterDiscount;
                           document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-two .cre-t-2-pro-yearly-price .price-without-decimal').textContent = priceType;
                           document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-two .cre-t-2-pro-yearly-price-wrapper .total').textContent = currency +total +'/year';
   
                           document.querySelector('.cre-t-02-pricing-two .cre-t-2-pro .cre-pro-discount').href = document.querySelector('html body .cre-t-2-pro .panel-footer a:not(.fusion-button)').href;
  
  
                           
  
                       },50,15000);
  
  
                   },50,15000);
  
  
                },50,15000);
  
  
  
  
                helper.waitForElement('.cre-t-02-pricing-section.cre-t-02-pricing-two  .cre-t-2-starter .pricing-row .price .currency',function(){
  
                   helper.waitForElement('.cre-t-02-pricing-section.cre-t-02-pricing-two .cre-t-2-starter .pricing-row .price .integer-part',function(){
  
  
                       helper.waitForElement('.cre-t-02-pricing-section.cre-t-02-pricing-two .cre-t-2-starter .pricing-row .price .time.price-without-decimal',function(){
  
                           var currency = document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-two .cre-t-2-starter .pricing-row .price .currency').textContent;
                           var pricePro = document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-two .cre-t-2-starter .pricing-row .price .integer-part').textContent;
                           var priceType = document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-two .cre-t-2-starter  .pricing-row .price .time.price-without-decimal').textContent;
                            
                           var pricePro = parseFloat(pricePro).toFixed(2);
                           var priceProNewYearly  = parseFloat(pricePro/100).toFixed(2);
                           var priceProDiscount = parseFloat(priceProNewYearly*30).toFixed(2);
                           var priceProYearlyAfterDiscount = parseInt(pricePro - priceProDiscount);
  
                           var total = parseFloat((pricePro - priceProDiscount)*12);
                           total = Math.round(total);
                            total = formatNumber(total);
  
  
  
                           document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-two .cre-t-2-started-yearly-price .currency').textContent = currency;
                           document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-two .cre-t-2-started-yearly-price .integer-part').textContent = priceProYearlyAfterDiscount;
                           document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-two .cre-t-2-started-yearly-price .price-without-decimal').textContent = priceType;
                           document.querySelector('.cre-t-02-pricing-section.cre-t-02-pricing-two .cre-t-2-started-yearly-price-wrapper .total').textContent = currency +total +'/year';
  
                           document.querySelector('.cre-t-02-pricing-two .cre-t-2-starter .cre-starter-discount').href = document.querySelector('html body .cre-t-2-starter .panel-footer a:not(.fusion-button)').href;
  
  
                       },50,15000);
  
  
                   },50,15000);
  
  
                },50,15000);
  
            },2000);
  
           
  
  
  
  
  
  
  
          },50,15000);
       },50,15000);
  
    }
  
  
  
  
      //adding attributes for sections 
      function addAttribute(){
  
          helper.waitForElement('#toc_Subscribe_today',function(){
              document.querySelector('#toc_Subscribe_today').closest('#pricing').classList.add('cre-t-02-subscribe-section');
          },50,15000);
  
          helper.waitForElement('#pricing h3',function(){
            document.querySelectorAll('#pricing h3').forEach(function(item){
             item.closest('#pricing').classList.add('cre-t-02-pricing-section');
             
             if(item.textContent.includes('Starter')){
                item.closest('.fusion-pricingtable-column').classList.add('cre-t-2-starter')
  
             }
             else if(item.textContent.includes('Pro')){
              item.closest('.fusion-pricingtable-column').classList.add('cre-t-2-pro')
             }
            })
          },50,15000);
      }
  
      var creProDiscount = `
      <a class="fusion-button cre-pro-discount button-flat button-xlarge button-default fusion-button-default button-1 fusion-button-default-span fusion-button-default-type" target="_self" href="https://rebelbetting.com/subscribe/Payment.aspx?item=Pro1Month"><span class="fusion-button-text">Sign up</span></a>
      `;
  
      var creStarterDiscount = `
      <a class="fusion-button cre-starter-discount button-flat button-xlarge button-default fusion-button-default button-1 fusion-button-default-span fusion-button-default-type" target="_self" href="https://rebelbetting.com/subscribe/Payment.aspx?item=Pro1Month"><span class="fusion-button-text">Sign up</span></a>
      `;
  
      
  
  
  
      // moving sections for some pages 
      function moveSections(){
          helper.waitForElement('#what-you-get',function(){
              helper.waitForElement('.cre-t-02-subscribe-section',function(){
                 helper.waitForElement('.cre-t-02-pricing-section',function(){
                  document.querySelector('#what-you-get').insertAdjacentElement('beforebegin',document.querySelector('.cre-t-02-subscribe-section'));
                  document.querySelector('#what-you-get').insertAdjacentElement('beforebegin',document.querySelector('.cre-t-02-pricing-section'));
  
                  // document.querySelector('.cre-t-2-pro .fusion-button-wrapper a ').classList.add('cre-pro-without-discount');
                  // document.querySelector('.cre-t-2-starter .fusion-button-wrapper a ').classList.add('cre-starter-without-discount');
  
                  // document.querySelector('.cre-t-2-pro .fusion-button-wrapper a ').insertAdjacentHTML('afterend',creProDiscount);
                  // document.querySelector('.cre-t-2-starter .fusion-button-wrapper a ').insertAdjacentHTML('afterend',creStarterDiscount);
  
  
                  document.querySelector('.cre-t-02-pricing-section').insertAdjacentHTML('beforebegin',inputToggleHTML);
                  document.body.classList.add('cre-t-02-yearly-activated');
                  updateDynamicPriceSingleBlock();
                  toggle();
                 },50,15000);
              },50,15000);
           
          },50,15000);
      }
  
  
      function moveSectionsHomepage(){
          helper.waitForElement('.fusion-builder-row-13',function(){
              helper.waitForElement('.fusion-builder-column-37',function(){
                  document.querySelector('.fusion-builder-row-13').insertAdjacentElement('beforebegin',document.querySelector('.fusion-builder-column-37').closest('#pricing'));
                  helper.waitForElement('.pricing-table-2',function(){
                      document.querySelector('.fusion-builder-column-37').closest('#pricing').insertAdjacentElement('afterend',document.querySelector('.pricing-table-2').closest('#pricing'));
                  },50,15000);
              },50,15000);
          },50,15000);
       } 
  
  
       function addingAttributesHomepage(){
          helper.waitForElement('#pricing h3',function(){
              document.querySelectorAll('#pricing h3').forEach(function(item){
               item.closest('#pricing').classList.add('cre-t-02-pricing-section');
               
               if(item.textContent.includes('Starter')){
                  item.closest('.fusion-pricingtable-column').classList.add('cre-t-2-starter')
    
               }
               else if(item.textContent.includes('Pro')){
                item.closest('.fusion-pricingtable-column').classList.add('cre-t-2-pro')
               }
              })
            },50,15000);
       }
  
       function addingInputToggleHomepage(){
          helper.waitForElement('.fusion-builder-row-22',function(){
              document.querySelector('.fusion-builder-row-22').closest("#pricing").classList.add('cre-t-02-pricing-one');
              document.querySelector('.cre-t-02-pricing-one').insertAdjacentHTML('afterbegin',inputToggleHTML)
              toggleHome();
                },50,15000);
            helper.waitForElement('.fusion-builder-row-16',function(){
                document.querySelector('.fusion-builder-row-16').closest("#pricing").classList.add('cre-t-02-pricing-two');
                document.querySelector('.cre-t-02-pricing-two').insertAdjacentHTML('afterbegin',inputToggleHTMLOne)
              },50,15000);
       }
  
  
      
  
  
      function init() {
          _$('body').addClass(variation_name)
          _$('body').addClass('cre-t-02-valuebetting')
          addAttribute();
          moveSections();
        }
  
  
  
  
      function initTwo(){
          _$('body').addClass(variation_name)
          _$('body').addClass('cre-t-02-homepage');
            addingInputToggleHomepage();
            addingAttributesHomepage();
            moveSectionsHomepage();
            updateDynamicPriceMultipleBlock();	
      }
  
  
  
      
  
  
      function initThree(){
          _$('body').addClass(variation_name)
          _$('body').addClass('cre-t-02-others')
          addAttribute();
              helper.waitForElement('.cre-t-02-subscribe-section',function(){
                 helper.waitForElement('.cre-t-02-pricing-section',function(){
                  document.querySelector('.cre-t-02-pricing-section').insertAdjacentHTML('beforebegin',inputToggleHTML);		
                  document.body.classList.add('cre-t-02-yearly-activated');
                   updateDynamicPriceSingleBlock();
                   toggle();
                 },50,15000);
              },50,15000);
      }
  
      function initFour(){
          _$('body').addClass(variation_name)
          _$('body').addClass('cre-t-02-others')
          addAttribute();
          helper.waitForElement('.cre-t-02-pricing-section',function(){
               document.querySelector('.cre-t-02-pricing-section').insertAdjacentHTML('beforebegin',inputToggleHTML);
               document.querySelector('.cre-t-02-toggle-wrapper').insertAdjacentHTML('beforebegin',subscribeContent);			 
               document.body.classList.add('cre-t-02-yearly-activated');
               updateDynamicPriceSingleBlock();
               toggle();
          },50,15000);
           
      }
  
  
  
  
      switch (window.location.pathname) {
          case '/':
              helper.waitForElement("body", initTwo, 50, 15000);
              break;
          case '/valuebetting/value-betting-guide':
              helper.waitForElement("body", initThree, 50, 15000);
              break;
          case '/surebetting/the-ultimate-guide-to-sure-betting-sports-arbitrage':
              helper.waitForElement("body", initFour, 50, 15000);
              break;
          default:
              helper.waitForElement("body", init, 50, 15000);
              break;
      }
      
      
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();