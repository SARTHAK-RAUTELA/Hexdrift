if((window.location.href.includes("https://www.gendergp.com/") && window.location.pathname == "/")){

(function () {
    try {
      /* main variables */
      var debug = 0;
      var variation_name = "cre_gp_T40";
  
      function waitForElement(selector, trigger) {
        var interval = setInterval(function () {
          if (
            document &&
            document.querySelector(selector) &&
            document.querySelectorAll(selector).length > 0
          ) {
            clearInterval(interval);
            trigger();
          }
        }, 50);
        setTimeout(function () {
          clearInterval(interval);
        }, 15000);
      }
  
    
      /* Variation Init */
      function init() {
          document.querySelector("body").classList.add(variation_name);
        
          waitForElement('[data-id*="32265f2"] h1 span:last-child',function(){
            document.querySelector('[data-id*="32265f2"] h1 span:last-child').innerHTML = `wait. Get compassionate, personalised, gender-affirming medications in just 2-3 weeks.`
          })
        
      
      }
  
      waitForElement("body", init);
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();

  }