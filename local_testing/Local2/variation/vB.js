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
             imgSrc: "https://cdn.optimizely.com/img/20611073899/56d8530cba2945d3a3602f65ae9e529e.png",
             title: "How much does house cleaning cost?",
             price: "$175-$218*",
             subheading: "The national average cost of house cleaning ranges from $175-$218, depending on your home's size. The type of cleaning service you request (like deep cleaning) will also impact pricing."
         },
         {
             url: "https://www.thumbtack.com/p/fence-installation-cost",
             imgSrc: "https://cdn.optimizely.com/img/20611073899/c12b29150b994e49a7718272f0907cc6.png",
             title: "How much does it cost to install a fence?",
             price: "$1,676-$7,357*",
             subheading: "The national average cost to install a fence is $3,999, and prices range from $1,676-$7,357. The fence's height, length, and material will impact the total cost."
         },
         {
             url: "https://www.thumbtack.com/p/deep-cleaning-cost",
             imgSrc: "https://cdn.optimizely.com/img/20611073899/060589400fa24bc3846eabc229dc1e0d.png",
             title: "How much does deep cleaning a house cost?",
             price: "$170-$320*",
             subheading: "The national average cost to deep clean a house is $261, and prices range from $170-$320. Your home's size will be a key factor in determining the cost."
         },
         {
             url: "https://www.thumbtack.com/p/handyman-prices",
             imgSrc: "https://cdn.optimizely.com/img/20611073899/75da982974ba4b3bbaa91175c638716a.png",
             title: "How much are handyman hourly rates?",
             price: "$60-$70 per hour*",
             subheading: "National average handyman hourly rates range from $60-$70, depending on the work being done and the scope of your project."
         },
         {
             url: "https://www.thumbtack.com/p/concrete-driveway-cost",
             imgSrc: "https://cdn.optimizely.com/img/20611073899/9cca3664c3c34ad98c8622ba8b3f961c.png",
             title: "How much does a concrete driveway cost?",
             price: "$2,250-$8,000*",
             subheading: "On average, a concrete driveway costs $6,268 in the U.S. Prices typically range from $2,250-$8,000."
         },
         {
             url: "https://www.thumbtack.com/p/pet-sitting-prices",
             imgSrc: "https://cdn.optimizely.com/img/20611073899/3801adcf1f894224876e62f48b6ef02e.png",
             title: "How much does pet sitting cost?",
             price: "$35-$60 per visit*",
             subheading: "National average pet sitter rates range from $35-$60 per visit. The length and frequency of the visit will impact the cost."
         },
         {
             url: "https://www.thumbtack.com/p/personal-trainer-cost",
             imgSrc: "https://cdn.optimizely.com/img/20611073899/e224747f791245158d81538ef6bf3b0b.png",
             title: "How much does a personal trainer cost?",
             price: "$50-$60 per hour*",
             subheading: "In the U.S., personal trainers charge $50-$60 per hour, on average. Trainers may also charge per session and offer packages with discounted rates."
         },
         {
             url: "https://www.thumbtack.com/p/power-washing-prices",
             imgSrc: "https://cdn.optimizely.com/img/20611073899/81855ade5032464c8a3272a1935f8b5c.png",
             title: "How much does pressure washing cost?",
             price: "$250-$350*",
             subheading: "National average pressure washing prices range from $250-$350. The size of the surface or structure largely impacts pricing."
         },
         {
             url: "https://www.thumbtack.com/p/seamstress-prices",
             imgSrc: "https://cdn.optimizely.com/img/20611073899/3551cd25c85346c7ad7e7399df86b025.png",
             title: "How much does a seamstress cost?",
             price: "$139-$536*",
             subheading: "The national average cost to hire a professional seamstress for alterations, tailoring, or clothing design is $221. Prices typically range from $139-$536, depending on the type of alteration."
         },
         {
             url: "https://www.thumbtack.com/p/house-painting-cost",
             imgSrc: "https://cdn.optimizely.com/img/20611073899/2d122a4349b142708079d069f476a8d4.png",
             title: "How much does it cost to paint the interior of a house?",
             price: "$5,401-$24,282*",
             subheading: "It costs $5,401-$24,282 to paint a home's entire interior. This national average cost includes the cost of painting a home that ranges from 1,400 to 2,800 square feet in size."
         },
         {
             url: "https://www.thumbtack.com/p/concrete-price-per-yard",
             imgSrc: "https://cdn.optimizely.com/img/20611073899/33d237fdded94973afefbd15f8c87d8a.png",
             title: "How much does concrete cost?",
             price: "$5,544-$7,883*",
             subheading: "The national average cost to install concrete for patios, driveways, foundations, and other types of projects ranges from $5,544-$7,883. The amount of concrete needed for your project is a major cost factor."
         },
         {
             url: "https://www.thumbtack.com/p/home-building-cost-by-sqft",
             imgSrc: "https://cdn.optimizely.com/img/20611073899/3e774204a74b4e9cbc8d07e4265af92d.png",
             title: "How much does it cost to build a house?",
             price: "$153 per square foot*",
             subheading: "The national average cost to build a house is $153 per square foot (or $392,241 for a 2,561-sq-ft home), according to the most recent data from the National Association of Home Builders."
         },
         {
             url: "https://www.thumbtack.com/p/ceiling-fan-install-cost",
             imgSrc: "https://cdn.optimizely.com/img/20611073899/597514657b4e47c1bb874e20ed624033.png",
             title: "How much does ceiling fan installation cost?",
             price: "$120-$250*",
             subheading: "It costs an average of $214 to install a ceiling fan in the U.S., and prices range from $120-$250. Expect to pay more if your pro needs to supply the fan and light."
         },
         {
             url: "https://www.thumbtack.com/p/commercial-cleaning-prices",
             imgSrc: "https://cdn.optimizely.com/img/20611073899/4ee863cb6f90420fad0b4dcb4676fcca.png",
             title: "How much does commercial cleaning cost?",
             price: "$205-$568*",
             subheading: "Commercial cleaning for U.S. offices costs $491, on average, and prices tend to range from $205-$568. An office's size or square footage is a big cost factor."
         },
         {
             url: "https://www.thumbtack.com/p/junk-removal-cost",
             imgSrc: "https://cdn.optimizely.com/img/20611073899/fa73d9cd741c4c41a92f032cdf4cb15f.png",
             title: "How much does junk removal cost?",
             price: "$160-$250*",
             subheading: "National average junk removal costs range from $160-$250, largely depending on the amount of junk being removed."
         },
         {
             url: "https://www.thumbtack.com/p/lawn-service-prices",
             imgSrc: "https://cdn.optimizely.com/img/20611073899/68edb18215d949bba18bdb0075c4433a.png",
             title: "How much does lawn care cost?",
             price: "$75-$340*",
             subheading: "The national average cost of lawn care is $299, and prices range from $75-$340. Lawn care prices depend on the type of services you require, such as lawn mowing, aeration, fertilizing, and more."
         },
         {
             url: "https://www.thumbtack.com/p/how-much-does-it-cost-to-paint-a-house",
             imgSrc: "https://cdn.optimizely.com/img/20611073899/ec0527d8dbd84ff89366b3fbbd47f28e.png",
             title: "How much does it cost to paint a house?",
             price: "$3,014-$24,282*",
             subheading: "The national average cost to paint a home's exterior is $3,014-$8,117 (for a 2,500 sq. ft. home). For interior painting, costs range from $5,401-$24,282 (for homes ranging from 1,400-2,800 sq. ft.)."
         },
         {
             url: "https://www.thumbtack.com/p/propane-prices",
             imgSrc: "https://cdn.optimizely.com/img/20611073899/57e2d632b0924e73ac75968b27e9edf4.png",
             title: "How much does propane cost?",
             price: "$2.60 per gallon*",
             subheading: "Propane costs approximately $2.60 per gallon, according to the most recent data from the U.S. Energy Information Administration. If you need to install a propane tank, contact a pro for gas line installation quotes."
         },
         {
             url: "https://www.thumbtack.com/p/hair-stylist-prices",
             imgSrc: "https://cdn.optimizely.com/img/20611073899/bcbea53ce1814fa1ad25742ba01d8af5.png",
             title: "How much does a hairstylist cost?",
             price: "$142-$298*",
             subheading: "The national average cost to hire a hairstylist is $206, with prices ranging from $142-$298. The type of hairstyle you want and the type of event you're attending can impact pricing."
         },
   {
             url: "https://www.thumbtack.com/p/moving-companies-prices",
             imgSrc: "https://cdn.optimizely.com/img/20611073899/61ded4c2b1a0412796b522c050f6837d.png",
             title: "How much do movers cost?",
             price: " $359-$1,803*",
             subheading: "The national average cost for local and long-distance moves ranges from $359-$1,803. Keep in mind that local movers typically charge per hour, and long-distance movers often have fixed rates. "
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
           authorBylineName: "Sydney Champion",
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
           authorBylineName: "Melanie Fourie",
           subline: " Contributing author",
           authorBylinePhoto: "https://cdn.optimizely.com/img/20611073899/7ccf78555e6440e388a33dfb8206178f.png",
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
           authorBylineName: "Kristy Snyder",
           subline: " Contributing author",
           authorBylinePhoto: "https://cdn.optimizely.com/img/20611073899/183677312a214cc4aa1047c11a25ac53.png",
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
           authorBylineName: "Nicki Escudero",
           subline: " Contributing author",
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
           authorBylineName: "Sydney Champion,",
           subline: "Contributing author",
           authorBylinePhoto: "https://cdn.optimizely.com/img/20611073899/e48bd752b35743e1b8093e9827b0af86.jpg",
           expertBylineName: "Chris Davaa",
           linkForExpertByline: "https://www.thumbtack.com/content/pro-advisory-board",
           expertBylinePhoto: "//cdn.optimizely.com/img/20611073899/31db5a5c8bd746dfba7ed8dbbe489102.jpg",
           expertcomment:  " Expert reviewed by Chris Davaa, a <a href='https://www.thumbtack.com/content/pro-advisory-board'>Thumbtack Pro Advisory Board</a> and the owner of <a href='https://www.thumbtack.com/ca/los-angeles/movers/24-seven-moving/service/431466909043875851'>24 Seven Moving</a> in Los Angeles, CA."
      
          
        }
       ];
     var bannerhtml =  `
             <div class="Bm-bannertext">
                <div class="tt_bannerimg"> <img src=""></div>
                <div class="tt_Heading"><h2></h2></div>
                <div class="tt_price"></div>
                <div class="tt_peragraph"><p> </p></div>
             </div>
       `;
    /* Variation Init */
     function init() {
         document.querySelector("body").classList.add(variation_name)
         var currentURL = window.location.href;
         var matchingData = data.find(function(item) {
             return currentURL.startsWith(item.url);
         });
         if (matchingData && document.querySelector('[class*="cobaltized-cost-page-hero"] [class*="cobaltized-cost-page-hero_zipForm"]')) {
             var bannerhtml = `
                 <div class="Bm-bannertext">
                     <div class="bannerimg"><img src="${matchingData.imgSrc}"></div>
                     <div class="tt_Heading">${matchingData.title}</div>
                     <div class="price">${matchingData.price}</div>
                     <p class="tt_tooltipmain"> *Based on our research  <span class="hideitem"><img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/Cost+Page+Redesign_test+1/icon-info.svg"> <span class="tt_tooltip">We track estimates customers get from local professionals and perform additional research.</span></span> </p>
               
                     <div class="peragraph"><p>${matchingData.subheading}</p></div>
                 </div>
             `;
             if (!document.querySelector(".Bm-bannertext")) {
                 document.querySelector('[class*="cobaltized-cost-page-hero"] [class*="cobaltized-cost-page-hero_zipForm"]').insertAdjacentHTML('beforebegin', bannerhtml);
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

         var element = document.querySelector('.formatted-content p em #back-to-top');
         if (element) {
             element.closest('.formatted-content').classList.add('tt_hideitem');
         } 
         var element = document.querySelector('.formatted-content p em #top');
         if (element) {
             element.closest('.formatted-content').classList.add('tt_hideitem');
         } 
var textDiv = document.querySelector('.tt-reviewsection .rightsection');
         var reviewTextor = textDiv.querySelector('.reviewtextor');

         // Check if the .reviewtextor element has text content
         if (!reviewTextor || !reviewTextor.textContent.trim()) {
             textDiv.classList.add('tt_hide');
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

