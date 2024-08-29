(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "TT_Cost_Page";
        /* all Pure helper functions */
        function waitForElement(selector, trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function () {
                if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function () {
                clearInterval(interval);
            }, delayTimeout);
        }
        function addLiveEventListener(selector, event, callback, context) {
            // Helper for enabling IE 8 event bindings
            function addEvent(el, type, handler) {
              if (el.attachEvent) el.attachEvent('on' + type, handler);
              else el.addEventListener(type, handler);
            }
            // Matches polyfill
            this.Element && function (ElementPrototype) {
              ElementPrototype.matches = ElementPrototype.matches ||
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
            }(Element.prototype);
            // Live binding helper using matchesSelector
            function live(selector, event, callback, context) {
              addEvent(context || document, event, function (e) {
                var found, el = e.target || e.srcElement;
                while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
                if (found) callback.call(el, e);
              });
            }
            live(selector, event, callback, context);
          }
    
          var data = [
            {
                url: "https://www.thumbtack.com/p/house-cleaning-prices",
                imgSrc: "https://production-next-images-cdn.thumbtack.com/i/524505069709688836",
                title: "How much does house cleaning cost?",
                price: "$175-$218*",
                subheading: "The national average cost of house cleaning ranges from $175-$218, depending on your home's size. The type of cleaning service you request (like deep cleaning) will also impact pricing."
            },
            {
                url: "https://www.thumbtack.com/p/fence-installation-cost",
                imgSrc: "https://production-next-images-cdn.thumbtack.com/i/524500707980140548",
                title: "How much does it cost to install a fence?",
                price: "$1,676-$7,357*",
                subheading: "The national average cost to install a fence is $3,999, and prices range from $1,676-$7,357. The fence's height, length, and material will impact the total cost."
            },
            {
                url: "https://www.thumbtack.com/p/deep-cleaning-cost",
                imgSrc: "https://production-next-images-cdn.thumbtack.com/i/524512323436249102",
                title: "How much does deep cleaning a house cost?",
                price: "$170-$320*",
                subheading: "The national average cost to deep clean a house is $261, and prices range from $170-$320. Your home's size will be a key factor in determining the cost."
            },
            {
                url: "https://www.thumbtack.com/p/handyman-prices",
                imgSrc: "https://production-next-images-cdn.thumbtack.com/i/524500827902320652",
                title: "How much are handyman hourly rates?",
                price: "$60-$70 per hour*",
                subheading: "National average handyman hourly rates range from $60-$70, depending on the work being done and the scope of your project."
            },
            {
                url: "https://www.thumbtack.com/p/concrete-driveway-cost",
                imgSrc: "https://production-next-images-cdn.thumbtack.com/i/524431852736323598",
                title: "How much does a concrete driveway cost?",
                price: "$2,250-$8,000*",
                subheading: "On average, a concrete driveway costs $6,268 in the U.S. Prices typically range from $2,250-$8,000."
            },
            {
                url: "https://www.thumbtack.com/p/pet-sitting-prices",
                imgSrc: "https://production-next-images-cdn.thumbtack.com/i/524502055601053701",
                title: "How much does pet sitting cost?",
                price: "$35-$60 per visit*",
                subheading: "National average pet sitter rates range from $35-$60 per visit. The length and frequency of the visit will impact the cost."
            },
            {
                url: "https://www.thumbtack.com/p/personal-trainer-cost",
                imgSrc: "https://production-next-images-cdn.thumbtack.com/i/524501970182086662",
                title: "How much does a personal trainer cost?",
                price: "$50-$60 per hour*",
                subheading: "Personal trainers charge $50-$60 per hour, on average, in the U.S. Trainers may also charge per session and offer packages with discounted rates."
            },
            {
                url: "https://www.thumbtack.com/p/power-washing-prices",
                imgSrc: "https://production-next-images-cdn.thumbtack.com/i/524502109136551948",
                title: "How much does pressure washing cost?",
                price: "$250-$350*",
                subheading: "National average pressure washing prices range from $250-$350. The size of the surface or object largely impacts pricing."
            },
            {
                url: "https://www.thumbtack.com/p/seamstress-prices",
                imgSrc: "https://production-next-images-cdn.thumbtack.com/i/524502290142396428",
                title: "How much does a seamstress cost?",
                price: "$139-$536*",
                subheading: "The national average cost to hire a professional seamstress for alterations, tailoring, or clothing design is $221. Prices typically range from $139-$536, depending on the type of alteration."
            },
            {
                url: "https://www.thumbtack.com/p/house-painting-cost",
                imgSrc: "https://production-next-images-cdn.thumbtack.com/i/524501411160481795",
                title: "How much does it cost to paint the interior of a house?",
                price: "$5,401-$24,282*",
                subheading: "It costs $5,401-$24,282 to paint a home's entire interior. This national average cost includes the cost of painting a home that ranges from 1,400 to 2,800 square feet in size."
            },
            {
                url: "https://www.thumbtack.com/p/concrete-price-per-yard",
                imgSrc: "https://production-next-images-cdn.thumbtack.com/i/524432282728112132",
                title: "How much does concrete cost?",
                price: "$4.30-$8.53 per square foot*",
                subheading: "The national average cost of poured concrete ranges from $4.30-$8.53 per square foot, according to Thumbtack data. The average cost of concrete per yard ranges from $140-$170, according to the Concrete Network."
            },
            {
                url: "https://www.thumbtack.com/p/home-building-cost-by-sqft",
                imgSrc: "https://production-next-images-cdn.thumbtack.com/i/524501295730614276",
                subline: " Contributing author",
                title: "How much does it cost to build a house?",
                price: "$153 per square foot*",
                subheading: "The national average cost to build a house is $153 per square foot (or $392,241), according to the most recent data from the National Association of Home Builders."
            },
            {
                url: "https://www.thumbtack.com/p/ceiling-fan-install-cost",
                imgSrc: "https://production-next-images-cdn.thumbtack.com/i/524504357916745733",
                title: "How much does ceiling fan installation cost?",
                price: "$120-$250*",
                subheading: "It costs an average of $214 to install a ceiling fan in the U.S., and prices range from $120-$250. Expect to pay more if your pro needs to supply the fan and light."
            },
            {
                url: "https://www.thumbtack.com/p/commercial-cleaning-prices",
                imgSrc: "https://production-next-images-cdn.thumbtack.com/i/524431429824528387",
                title: "How much does commercial cleaning cost?",
                price: "$205-$568*",
                subheading: "Commercial cleaning for U.S. offices costs $491, on average, and prices tend to range from $205-$568. An office's size or square footage is a big cost factor."
            },
            {
                url: "https://www.thumbtack.com/p/junk-removal-cost",
                imgSrc: "https://production-next-images-cdn.thumbtack.com/i/524501757909876750",
                title: "How much does junk removal cost?",
                price: "$160-$250*",
                subheading: "National average junk removal costs range from $160-$250, largely depending on the amount of junk being removed."
            },
            {
                url: "https://www.thumbtack.com/p/lawn-service-prices",
                imgSrc: "https://production-next-images-cdn.thumbtack.com/i/524501823501967366",
                title: "How much does lawn care cost?",
                price: "$75-$340*",
                subheading: "The national average cost of lawn care is $299, and prices range from $75-$340. Lawn care prices depend on the type of services you require, such as lawn mowing, aeration, fertilizing, and more."
            },
            {
                url: "https://www.thumbtack.com/p/how-much-does-it-cost-to-paint-a-house",
                subline: " Contributing author",
                imgSrc: "https://production-next-images-cdn.thumbtack.com/i/524501552893747203",
                title: "How much does it cost to paint a house?",
                price: "$3,014-$24,282*",
                subheading: "The national average cost to paint a home's exterior is $3,014-$8,117 (for a 2,500 sq. ft. home). For interior painting, costs range from $5,401-$24,282 (for homes ranging from 1,400-2,800 sq. ft.)."
            },
            {
                url: "https://www.thumbtack.com/p/propane-prices",
                imgSrc: "https://production-next-images-cdn.thumbtack.com/i/524502204946071564",
                title: "How much does propane cost?",
                price: "$2.60 per gallon*",
                subheading: "The national cost of propane is approximately $2.60 per gallon, according to the most recent data from the U.S. Energy Information Administration. Check local retailers to see how much propane costs near you."
            },
            {
                url: "https://www.thumbtack.com/p/hair-stylist-prices",
                imgSrc: "https://production-next-images-cdn.thumbtack.com/i/524500755363889157",
                title: "How much does a hair stylist cost?",
                price: "$142-$298*",
                subheading: "The national average cost to hire a hairtsylist is $206, with prices ranging from $142-$298. The type of hairstyle you want and the type of event you're attending can impact pricing."
            },
            {
               url: "https://www.thumbtack.com/p/moving-companies-prices",
               subline: "Contributing author",
               imgSrc: "https://production-next-images-cdn.thumbtack.com/i/524501894673055758",
               title: "How much do movers cost?",
               price: " $100-$120 per hour (local moves) $799-$5,377 (long-distance moves)* ",
               subheading: "It costs on average of $100-$120 per hour to hire a local mover in the U.S. National long-distance moving costs range from $799-$5,377, on average. "
              
            }
        ];


        var updaterevie = [
            {
              url: "https://www.thumbtack.com/p/house-cleaning-prices",
              authorBylineName: "Written by Thumbtack Staff",
              authorBylinePhoto: "https://production-next-images-cdn.thumbtack.com/i/522528727836483603",
              expertBylineName: '',
              linkForExpertByline: '',
              expertBylinePhoto: ''
            },
            {
              url: "https://www.thumbtack.com/p/fence-installation-cost",
              authorBylineName: "Written by Thumbtack Staff",
              authorBylinePhoto: "https://production-next-images-cdn.thumbtack.com/i/522528727836483603",
              expertBylineName: " ",
              linkForExpertByline: " ",
              expertBylinePhoto: " "
            },
            {
              url: "https://www.thumbtack.com/p/deep-cleaning-cost",
              authorBylineName: "Written by Thumbtack Staff",
              authorBylinePhoto: "https://production-next-images-cdn.thumbtack.com/i/522528727836483603",
              expertBylineName: " ",
              linkForExpertByline: " ",
              expertBylinePhoto: " "
            },
            {
              url: "https://www.thumbtack.com/p/handyman-prices",
              authorBylineName: "Written by Thumbtack Staff",
              authorBylinePhoto: "https://production-next-images-cdn.thumbtack.com/i/522528727836483603",
              expertBylineName: " ",
              linkForExpertByline: " ",
              expertBylinePhoto: " "
            },
            {
              url: "https://www.thumbtack.com/p/concrete-driveway-cost",
              authorBylineName: "Written by Thumbtack Staff",
              authorBylinePhoto: "https://production-next-images-cdn.thumbtack.com/i/522528727836483603",
              expertBylineName: " ",
              linkForExpertByline: " ",
              expertBylinePhoto: " "
            },
            {
              url: "https://www.thumbtack.com/p/pet-sitting-prices",
              authorBylineName: "Written by Thumbtack Staff",
              authorBylinePhoto: "https://production-next-images-cdn.thumbtack.com/i/522528727836483603",
              expertBylineName: " ",
              linkForExpertByline: " ",
              expertBylinePhoto: " "
            },
            {
              url: "https://www.thumbtack.com/p/personal-trainer-cost",
              authorBylineName: "Written by Thumbtack Staff",
              authorBylinePhoto: "https://production-next-images-cdn.thumbtack.com/i/522528727836483603",
              expertBylineName: " ",
              linkForExpertByline: " ",
              expertBylinePhoto: " "
            },
            {
              url: "https://www.thumbtack.com/p/power-washing-prices",
              authorBylineName: "Written by Sydney Champion",
              subline: "Contributing author",
              authorBylinePhoto: "https://cdn.optimizely.com/img/20611073899/e48bd752b35743e1b8093e9827b0af86.jpg",
              expertBylineName: "Shawn Myers",
              linkForExpertByline: "https://www.thumbtack.com/content/pro-advisory-board",
              expertBylinePhoto: "https://production-next-images-cdn.thumbtack.com/i/514347101827743758/width/2200.webp",
              expertcomment:  "  Expert reviewed by Shawn Myers, owner of <a href='https://www.thumbtack.com/ga/cartersville/pressure-washing/skilled-pugs-pressure-wash-gutter-cleaning/service/485915601361354785'> Skilled Pugs Pressure Wash & Gutter Cleaning </a> in Cartersville, GA."
            },
            {
              url: "https://www.thumbtack.com/p/seamstress-prices",
              authorBylineName: "Written by Thumbtack Staff",
              authorBylinePhoto: "https://production-next-images-cdn.thumbtack.com/i/522528727836483603",
              expertBylineName: " ",
              linkForExpertByline: " ",
              expertBylinePhoto: " "
            },
            {
              url: "https://www.thumbtack.com/p/house-painting-cost",
              authorBylineName: "Written by Melanie Fourie",
              subline: " Contributing author",
              authorBylinePhoto: "https://production-next-images-cdn.thumbtack.com/i/522610461055844365",
              expertBylineName: " ",
              linkForExpertByline: " ",
              expertBylinePhoto: " "
            },
            {
              url: "https://www.thumbtack.com/p/concrete-price-per-yard",
              authorBylineName: "Written by Thumbtack Staff",
              authorBylinePhoto: "https://production-next-images-cdn.thumbtack.com/i/522528727836483603",
              expertBylineName: " ",
              linkForExpertByline: " ",
              expertBylinePhoto: " "
            },
            {
              url: "https://www.thumbtack.com/p/home-building-cost-by-sqft",
              authorBylineName: "Written by Kristy Snyder",
              subline: " Contributing author",
              authorBylinePhoto: "https://production-next-images-cdn.thumbtack.com/i/523809590566871044",
              expertBylineName: " ",
              linkForExpertByline: " ",
              expertBylinePhoto: " "
            },
            {
              url: "https://www.thumbtack.com/p/ceiling-fan-install-cost",
              authorBylineName: "Written by Thumbtack Staff",
              authorBylinePhoto: "https://production-next-images-cdn.thumbtack.com/i/522528727836483603",
              expertBylineName: " ",
              linkForExpertByline: " ",
              expertBylinePhoto: " "
            },
            {
              url: "https://www.thumbtack.com/p/commercial-cleaning-prices",
              authorBylineName: "Written by Thumbtack Staff",
              authorBylinePhoto: "https://production-next-images-cdn.thumbtack.com/i/522528727836483603",
              expertBylineName: " ",
              linkForExpertByline: " ",
              expertBylinePhoto: " "
            },
            {
              url: "https://www.thumbtack.com/p/junk-removal-cost",
              authorBylineName: "Written by Sydney Champion",
              subline: " Contributing author",
              authorBylinePhoto: "https://cdn.optimizely.com/img/20611073899/e48bd752b35743e1b8093e9827b0af86.jpg",
              expertBylineName: "Daniel Jones",
              linkForExpertByline: "https://www.thumbtack.com/content/pro-advisory-board",
              expertBylinePhoto: "https://production-next-images-cdn.thumbtack.com/i/493096525202890754",
              expertcomment:  " Expert reviewed by Daniel Jones, a <a href='https://www.thumbtack.com/content/pro-advisory-board'>Thumbtack Pro Advisory Board</a> member and the owner of <a href='https://www.thumbtack.com/ca/carlsbad/junk-removal/junk-miners/service/275863999598453779'>Junk Miners</a> in Carlsbad, CA."
         
            },
            {
              url: "https://www.thumbtack.com/p/lawn-service-prices",
              authorBylineName: "Written by Thumbtack Staff",
              authorBylinePhoto: "https://production-next-images-cdn.thumbtack.com/i/522528727836483603",
              expertBylineName: " ",
              linkForExpertByline: " ",
              expertBylinePhoto: " "
            },
            {
              url: "https://www.thumbtack.com/p/how-much-does-it-cost-to-paint-a-house",
              authorBylineName: "Written by Nicki Escudero",
              authorBylinePhoto: "https://production-next-images-cdn.thumbtack.com/i/522538471725907978",
              expertBylineName: " ",
              linkForExpertByline: " ",
              expertBylinePhoto: " "
            },
            {
              url: "https://www.thumbtack.com/p/propane-prices",
              authorBylineName: "Written by Thumbtack Staff",
              authorBylinePhoto: "https://production-next-images-cdn.thumbtack.com/i/522528727836483603",
              expertBylineName: " ",
              linkForExpertByline: " ",
              expertBylinePhoto: " "
            },
            {
              url: "https://www.thumbtack.com/p/hair-stylist-prices",
              authorBylineName: "Written by Thumbtack Staff",
              authorBylinePhoto: "https://production-next-images-cdn.thumbtack.com/i/522528727836483603",
              expertBylineName: " ",
              linkForExpertByline: " ",
              expertBylinePhoto: " "
            },
            {
              url: "https://www.thumbtack.com/p/moving-companies-prices",
              authorBylineName: "Written by Sydney Champion,",
              subline: "Contributing author",
              authorBylinePhoto: "https://cdn.optimizely.com/img/20611073899/e48bd752b35743e1b8093e9827b0af86.jpg",
              expertBylineName: "Chris Davaa",
              linkForExpertByline: "https://www.thumbtack.com/content/pro-advisory-board",
              expertBylinePhoto: "//cdn.optimizely.com/img/20611073899/31db5a5c8bd746dfba7ed8dbbe489102.jpg",
              expertcomment:  " Expert reviewed by Chris Davaa, a <a href='https://www.thumbtack.com/content/pro-advisory-board'>Thumbtack Pro Advisory Board</a> and the owner of <a href='https://www.thumbtack.com/ca/los-angeles/movers/24-seven-moving/service/431466909043875851'>24 Seven Moving</a> in Los Angeles, CA."
         
             
           }
          ];
          
        
         


    

   
        /* Variation Init */
        function init() {
            document.querySelector("body").classList.add(variation_name)
            var currentURL = window.location.href;
            var matchingData = data.find(function (item) {
                return currentURL.startsWith(item.url);
            });
            if (matchingData && document.querySelector('[class*="cobaltized-cost-page-hero"] [class*="cobaltized-cost-page-hero_zipForm"]')) {
                var bannerhtml = `
                    <div class="Bm-bannertext leftsection" style="background-image: url('${matchingData.imgSrc}'); background-size: cover;">
                        <div class="bannerimg">${matchingData.title}</div>
                        <div class="price">${matchingData.price}</div>
                    </div>
                `;
            
                if (!document.querySelector(".Bm-bannertext")) {
                    document.querySelector('[class*="cobaltized-cost-page-hero"] [class*="cobaltized-cost-page-hero_zipForm"]').insertAdjacentHTML('beforebegin', bannerhtml);
                }
                var tt_peragraph =  `
                <div class="Bm-peragraph">
                  <p>${matchingData.subheading}</p>
                  <p class="tt_tooltipmain"> *Based on our research  <span class="hideitem"><img src="//cdn.optimizely.com/img/20611073899/d12b4b361bb54ce39f76832340062851.png"> <span class="tt_tooltip">We track estimates customers get from local professionals and perform additional research.</span></span> </p>
                  

                </div> `;
                if (!document.querySelector(".Bm-peragraph")) {
                    document.querySelector('[class*="cobaltized-cost-page-hero"] [class*="cobaltized-cost-page-hero_zipForm"] > div:first-child').insertAdjacentHTML('beforebegin', tt_peragraph);
                }

               


            }

          

           

            var currentURL = window.location.href;
            console.log("Current URL:", currentURL); // Debugging the current URL

            var datamatch = updaterevie.find(function (item1) {
                return currentURL.startsWith(item1.url);
            });

if (datamatch) {
   if (document.querySelector('[class*="composable-customer-header"] + div.bg-gray-200')) {
        console.log("Author Byline Photo:", datamatch.authorBylinePhoto); // Debugging author photo URL

        var tt_review = `
    <div class="tt-reviewsection">
        <div class="innnersection">
            <div class="leftsection">
            ${datamatch.authorBylinePhoto ? `<img class="photp" src="${datamatch.authorBylinePhoto}">` : ''}
            ${datamatch.authorBylineName ? `<p class="name">${datamatch.authorBylineName} ${datamatch.subline ? `<span class="ttright">${datamatch.subline}</span>` : ''}</p>` : ''}
            </div>
            <div class="rightsection">
            ${datamatch.expertBylinePhoto ? `<img class="photp" src="${datamatch.expertBylinePhoto}" >` : ''}
            <div class="textdiv">
            ${datamatch.expertBylineName ? `<p class="reviewtextor link">${datamatch.expertBylineName}</p>` : ''}
            ${datamatch.expertcomment ? `<p class="reviewtextortext ">${datamatch.expertcomment}</p>` : ''}
            </div>
            </div>
        </div>
    </div>`;

if (!document.querySelector(".tt-reviewsection")) {
    document.querySelector('[aria-label="Breadcrumb"]').insertAdjacentHTML('afterend', tt_review);
}
    }
} else {
    console.log("No data match found."); // Debugging if no match is found
}

           
        }
        /* Initialise variation */
        function thumbtackTest144(list, observer) {
            list.getEntries().forEach((entry) => {
                if (entry.entryType === "mark" && entry.name === "afterHydrate") {
                    observer.disconnect();
                    clearInterval(test144Interval);
                    waitForElement("body", init, 50, 15000);
                    window.isHydrated = true;
                }
            });
        }
        if (!window.isHydrated) {
            var test144Interval = setInterval(function () {
                waitForElement("body", init, 50, 15000);
            }, 50);
            setTimeout(function () {
                clearInterval(test144Interval);
            }, 3000);
            const observer = new PerformanceObserver(thumbtackTest144);
            observer.observe({ entryTypes: ["mark"] });
        } else {
            waitForElement("body", init, 50, 15000);
        }
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();
