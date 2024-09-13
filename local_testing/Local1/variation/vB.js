(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "cre-t-68";
        /* all Pure helper functions */

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

        function addClass(el, cls) {
            var el = document.querySelector(el);
            if (el) {
                el.classList.add(cls);
            }
        }

        var category = `
      <div class="cre-t-68-category-sec">
      <div class="cre-t-68-category-wrapper">
          <div class="cre-t-68-category-container">
              <div class="cre-t-68-category-inr">
                 
                  <div class="cre-t-logo-content">
      
                  <div class="cre-t-68-category-logos">
                  <a class="cre-t-68-category-logos-link" href="/guides-and-specials/categories/celebrityandfanpacks/"> 
                     <div class="cre-t-68-category-img"> <img class="camera-icon new-icons" src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/magazinesdirect/MAG68/Component_2.svg" alt="Celebrity & Fan Packs guides and specials"></div>
                     <p class="cre-t-68-category-text">Celebrity & Fan Packs</p>
                     </a>
                  </div>
      
                  <div class="cre-t-68-category-logos">
                  <a class="cre-t-68-category-logos-link" href="/guides-and-specials/categories/christmasguidesspecials/"> 
                      <div class="cre-t-68-category-img"> <img class="new-icons" src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/magazinesdirect/MAG68/Component_3.svg" alt="Christmas guides and specials"></div>
                      <p class="cre-t-68-category-text">Christmas</p>
                      </a>
                   </div>
      
                   <div class="cre-t-68-category-logos">
                   <a class="cre-t-68-category-logos-link" href="/guides-and-specials/categories/annuals/"> 
                      <div class="cre-t-68-category-img"> <img class="new-icons" src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/magazinesdirect/MAG68/Component_4.svg" alt="Annuals guides and specials"></div>
                      <p class="cre-t-68-category-text">Annuals</p>
                      </a>
                   </div>
      
                   <div class="cre-t-68-category-logos">
                   <a class="cre-t-68-category-logos-link" href="/guides-and-specials/categories/royalguidesspecials/"> 
                      <div class="cre-t-68-category-img"> <img class="new-icons" src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/magazinesdirect/MAG68/Component_5.svg"></div>
                      <p class="cre-t-68-category-text">Royal Guides & Specials</p>
                     </a>
                   </div>
      
                   <div class="cre-t-68-category-logos">
                   <a class="cre-t-68-category-logos-link" href="/guides-and-specials/categories/bestsellingguides/"> 
                      <div class="cre-t-68-category-img"> <img class="new-icons" class="cre-t-68-category-homes-logo" src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/magazinesdirect/MAG68/Component_6.svg"></div>
                      <p class="cre-t-68-category-text">Bestsellers</p>
                      </a>
                   </div>
      
                   <div class="cre-t-68-category-logos">
                   <a class="cre-t-68-category-logos-link" href="/guides-and-specials/categories/bundles/"> 
                      <div class="cre-t-68-category-img"> <img class="new-icons" src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/magazinesdirect/MAG68/Component_7.svg" alt="Bundles guides and specials"></div>
                      <p class="cre-t-68-category-text">Bundles</p>
                      </a>
                   </div>
      
                   <div class="cre-t-68-category-logos">
                   <a class="cre-t-68-category-logos-link" href="/guides-and-specials/categories/tech/"> 
                      <div class="cre-t-68-category-img"> <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/magazinesdirect/MAG68/Tech.svg" alt="Tech guides and specials"></div>
                      <p class="cre-t-68-category-text">Tech</p>
                      </a>
                   </div>
      
                   <div class="cre-t-68-category-logos">
                   <a class="cre-t-68-category-logos-link" href="/guides-and-specials/categories/music/"> 
                      <div class="cre-t-68-category-img"> <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/magazinesdirect/MAG68/Music.svg" alt="Music guides and specials"></div>
                      <p class="cre-t-68-category-text">Music</p>
                      </a>
                   </div>
      
                   <div class="cre-t-68-category-logos">
                   <a class="cre-t-68-category-logos-link" href="/guides-and-specials/categories/gaming/"> 
                      <div class="cre-t-68-category-img"> <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/magazinesdirect/MAG68/Gaming.svg" alt="Gaming guides and specials"></div>
                      <p class="cre-t-68-category-text">Gaming</p>
                      </a>
                   </div>
      
                   <div class="cre-t-68-category-logos">
                   <a class="cre-t-68-category-logos-link" href="/guides-and-specials/categories/sport-and-leisure/"> 
                      <div class="cre-t-68-category-img"> <img class="cre-t-68-category-women-logo" src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/magazinesdirect/MAG68/Sports.svg" alt="Sport & Leisure guides and specials"></div>
                      <p class="cre-t-68-category-text">Sport & Leisure</p>
                      </a>
                   </div>
      
                   <div class="cre-t-68-category-logos">
                   <a class="cre-t-68-category-logos-link" href="/guides-and-specials/categories/lifestyle/"> 
                      <div class="cre-t-68-category-img"> <img class="cre-t-68-category-mens-logo new-icons" src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/magazinesdirect/MAG68/Component_1.svg" alt="Lifestyle guides and specials"></div>
                      <p class="cre-t-68-category-text">Lifestyle</p>
                      </a>
                   </div>
      
                   <div class="cre-t-68-category-logos">
                   <a class="cre-t-68-category-logos-link" href="/guides-and-specials/categories/home-and-garden/"> 
                      <div class="cre-t-68-category-img"> <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/magazinesdirect/MAG68/Homes.svg" alt="Home and Garden"></div>
                      <p class="cre-t-68-category-text">Home and Garden</p>
                      </a>
                   </div>
      
                   <div class="cre-t-68-category-logos">
                   <a class="cre-t-68-category-logos-link" href="/guides-and-specials/categories/knowledge/"> 
                      <div class="cre-t-68-category-img"> <img class="new-icons" src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/magazinesdirect/MAG68/Component_8.svg" alt="Knowledge guides and specials"></div>
                      <p class="cre-t-68-category-text">Knowledge</p>
                      </a>
                   </div>
      
                   <div class="cre-t-68-category-logos">
                   <a class="cre-t-68-category-logos-link" href="/guides-and-specials/categories/photography/"> 
                      <div class="cre-t-68-category-img"> <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/magazinesdirect/MAG68/Photography.svg" alt="Photography guides and specials"></div>
                      <p class="cre-t-68-category-text">Photography</p>
                      </a>
                   </div>
      
                   <div class="cre-t-68-category-logos">
                      <a class="cre-t-68-category-logos-link" href="/guides-and-specials/categories/tv/"> 
                         <div class="cre-t-68-category-img"> <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/magazinesdirect/MAG68/TV.svg" alt="Film & TV guides and specials"></div>
                         <p class="cre-t-68-category-text">Film & TV</p>
                         </a>
                      </div>
              
      
      
                  </div>
      
      
      
              </div>
          </div>
      </div>
      </div>
      `;


        /* Variation Init */
        function init() {

            addClass("body", variation_name);

            if (!document.querySelector('.cre-t-68-category-sec')) {
                document.querySelector(".magazine-categories > div.mx-auto").insertAdjacentHTML("afterend", category)

            }
        }


        /* Initialise variation */
        waitForElement('.magazine-categories > div.mx-auto', init);


    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();