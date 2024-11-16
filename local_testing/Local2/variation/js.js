(function () {
    try {
      /* main variables */
      var debug = 1;
      var variation_name = "tt-160";
  
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
  
      var ttSocialProof = `<tt-160-socialProof>
          <div class="tt-160-socialProof-container">
              <div class="tt-160-socialProof-wrapper">
  
                  <div class="tt-160-socialProof-item">
                      Featured on
                  </div>
  
                  <div class="tt-160-socialProof-item">
                      <img src="https://i.ibb.co/M9bRFb9/tt-wired.png" alt="tt-wired">
                  </div>
  
                  <div class="tt-160-socialProof-item">
                  <img src="https://i.ibb.co/K5ZhvkS/tt-cbs-News.png" alt="tt-cbs-news">
                  </div>
  
                  <div class="tt-160-socialProof-item">
                      <img src="https://i.ibb.co/vZTccR2/tt-forbes.png" alt="tt-forbes">
                  </div>
              </div>
          </div>
      </tt-160-socialProof>`
  
      function init(){
        document.querySelector("body").classList.add(variation_name);
          waitForElement("[class*='hero-header_filters']>div>div",function(){
              if(!document.querySelector("[class*='hero-header_filters']>div>div + tt-160-socialProof")){
                  document.querySelector("[class*='hero-header_filters']>div>div").insertAdjacentHTML("afterend",ttSocialProof)
              }
          })
  
          waitForElement("[class*='hero-header_heroContainer'] [class*='hero-header_heroHeaderHeight'] +div h1+div",function(){
              if(!document.querySelector("[class*='hero-header_heroContainer'] [class*='hero-header_heroHeaderHeight'] +div h1+div + tt-160-socialProof")){
                  document.querySelector("[class*='hero-header_heroContainer'] [class*='hero-header_heroHeaderHeight'] +div h1+div").insertAdjacentHTML("afterend",ttSocialProof)
              }
          })
      }
  
      init()
  
      var tt160Interval = setInterval(function(){
          init()
      },100)
  
      setTimeout(function(){
          clearInterval(tt160Interval)
      },5000)
  
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();