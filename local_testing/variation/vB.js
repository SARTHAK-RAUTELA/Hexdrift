(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "TT-144";

    /* all Pure helper functions */

    function waitForElement(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (
          document &&
          document.querySelector(selector) &&
          document.querySelectorAll(selector).length > 0
        ) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }
    var thumbtechservices = `
  <div class="thumbtechservices">
     <h2 class="bmheading">Popular services near you.</h2>
     <div class="bm-item">
       <li><a href="https://www.thumbtack.com/instant-results/?zip_code=90066&keyword_pk=102906936611670860&project_pk=517046450169815067"><img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT+-+144+%7C+HP+Hero+Redesign/Sparkle_Icon_%C2%B7_Medium.png"> <p>House <br>Cleaning</p></a></li>
      
       <li><a href="https://www.thumbtack.com/instant-results/?zip_code=90066&keyword_pk=102906936628587357&project_pk=516161021990002698"><img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT+-+144+%7C+HP+Hero+Redesign/DIY-Effort_Icon_%C2%B7_Medium.png"> <p>Handyman <br> <span>j</span></p></a></li>
       <li><a href="https://www.thumbtack.com/instant-results/?zip_code=90066&keyword_pk=367799061344665605&project_pk=517046561932238849"><img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT+-+144+%7C+HP+Hero+Redesign/Energy_Icon_%C2%B7_Medium.png"> <p>Electrical and <br> Wiring Repair</p></a></li>
       
       <li><a href="https://www.thumbtack.com/instant-results/?zip_code=90066&keyword_pk=108249668856752917&project_pk=517046758073319441"><img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT+-+144+%7C+HP+Hero+Redesign/Brush_Icon_%C2%B7_Medium-1.png"> <p>Interior<br> Painting</p></a></li>
    
       
       <li><a href="https://www.thumbtack.com/instant-results/?zip_code=90066&keyword_pk=228629991346899932&project_pk=517046785496023060"><img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT+-+144+%7C+HP+Hero+Redesign/Trash_Icon_%C2%B7_Medium.png"> <p>Junk <br>
       Removal</p></a></li>
       <li><a href="https://www.thumbtack.com/instant-results/?zip_code=90066&keyword_pk=367799060310671361&project_pk=517046805709824017"><img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT+-+144+%7C+HP+Hero+Redesign/Dolly_Icon_%C2%B7_Medium.png"> <p>Local Moving<br>(Under 50 miles)</p></a></li>
    
       <li class="bmhideservice"><a href="https://www.thumbtack.com/instant-results/?zip_code=90066&keyword_pk=367799053227180037&project_pk=517046842712686592"><img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT+-+144+%7C+HP+Hero+Redesign/Repair-Support_Icon_%C2%B7_Medium.png"> <p>Appliance Repair or Maintenance</p></a></li>
       <li class="bmhideservice"><a href="https://www.thumbtack.com/instant-results/?zip_code=90066&keyword_pk=367799059811311616&project_pk=517046868953260048"><img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT+-+144+%7C+HP+Hero+Redesign/Preview-Carousel_Icon_%C2%B7_Medium.png"> <p>Floor Installation or Replacement</p><a></li>
       
       </div>
  </div>
`;
    var reviews = ` <div class="reviewsection disktop"> <p> Trusted by +4.5M people <span> • </span>4.9/5 <span><img src=" https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT+-+144+%7C+HP+Hero+Redesign/Star-Filled_Icon_%C2%B7_Small.png "></span>  with over 300k reviews on the App Store</p></div> `;
    var mobilereviews = ` <div class="reviewsection mobile"> <p> Trusted by +4.5M people <span>4.9/5 <img src=" https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT+-+144+%7C+HP+Hero+Redesign/Star-Filled_Icon_%C2%B7_Small.png ">with over 300k reviews on the App Store</span>  </p></div> `;



    /* Variation Init */
    function init() {
      document.querySelector("body").classList.add(variation_name);
      var textValuesToCheck = [
        'Popular services in '
      ];

      var elementsToModify = document.querySelectorAll('[class*="Type_title"]');
      // Loop through the elements
      elementsToModify.forEach((element) => {
        // Get the full text content of the element
        var fullTextContent = element.textContent.trim();

        // Check if the text content starts with any value in the array
        if (textValuesToCheck.some(value => fullTextContent.startsWith(value))) {
          // Add the "bmhidesection" class to the parent element
          var parentElement = element.closest('.bg-white');
          if (parentElement) {
            parentElement.classList.add('bmhidesection');
          }
        }
      });
      // Check if the element .bmhidesection [class*="Type_title5"] exists
      if (document.querySelector('.bmhidesection [class*="Type_title5"]')) {
        // If it exists, insert content after it
        document.querySelector('.bmhidesection [class*="Type_title5"]').insertAdjacentHTML('afterend', thumbtechservices);
      } else {
        // If it does not exist, check for the element [data-testid="root"] + div
        var rootSiblingElement = document.querySelector('[data-testid="root"] + div');
        if (rootSiblingElement) {
          rootSiblingElement.insertAdjacentHTML('afterend', thumbtechservices);
        } else {
          // If neither of the above elements exist, check for [class*="composable-customer-header"] + div
          var customerHeaderSiblingElement = document.querySelector('[class*="composable-customer-header"] + div');
          if (customerHeaderSiblingElement) {
            customerHeaderSiblingElement.insertAdjacentHTML('afterend', thumbtechservices);
          }
        }
      }
      document.querySelector('#uniqueId4 ~ [class*="search-bar_zipCodeError"]').insertAdjacentHTML('afterend', reviews);
      document.querySelector('#uniqueId4 ~ [class*="search-bar_zipCodeError"]').insertAdjacentHTML('afterend', mobilereviews);


      var itemToClone2 = document.querySelector('.bmhidesection + div ');
      if (itemToClone2) {
        // Clone the selected element
        var clonedItem1 = itemToClone2.cloneNode(true);

        // Insert the cloned element after the .thumbtechservices element
        document.querySelector('.bmhidesection + div + div').insertAdjacentElement('afterend', clonedItem1);

      }

    }

    /* Initialise variation */
    waitForElement("body", function () {
      setTimeout(init, 3000);
    }, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
