(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "TT-155";
    /* Helper function to extract numbers and services */
    function extractNumbersWithPlus(content) {
      const numberMatch = content.match(/(\d+)\+?/);
      return numberMatch ? numberMatch[0] : null;
    }
    function extractServices(content) {
      // Match "Find a" or "Find an" (optional), then extract the profession, ignoring "near you" or any location.
      const services = content.match(/(?:Find (?:a|an)\s+)?(.*?)(?:\s+near\s+\w+|\s+near\s+you|$)/i);
      return services && services[1] ? services[1].trim() : null;
    }

    /* all Pure helper functions */
    function waitForElement(selector, trigger) {
      var interval = setInterval(function () {
        if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
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
      var profession_content = "";
      // New selector for profession content
      if (document.querySelector('[class*="hero-header_filters"] h2[class*="Type_title3"]')) {
        // Extract the profession from the content
        var professionElement = document.querySelector('[class*="hero-header_filters"] h2[class*="Type_title3"]');
        profession_content = professionElement.textContent.toLowerCase(); // Convert to lowercase
        // Extract the profession name cleanly
        var profession_result = extractServices(profession_content);
        // Update the text content only if it hasn't been set before
        if (!professionElement.dataset.updated) {
          professionElement.textContent = "Find your partner in " + profession_result + " projects.";
          professionElement.dataset.updated = "true";
        }
        // Extract numbers (if needed)
        var number_content = professionElement.textContent;
        var result_number = extractNumbersWithPlus(number_content);

      }
      // Additional updates using profession_content for other elements
      if (document.querySelector('[class*="hero-header_rootFlex"]>[class*=hero-header_heroHeaderExtendedHeight] picture+div h1')) {
        var h1Element = document.querySelector('[class*="hero-header_rootFlex"]>[class*=hero-header_heroHeaderExtendedHeight] picture+div h1');
        if (!h1Element.dataset.updated) {
          h1Element.innerHTML = "Find your partner in " + profession_result + " <span>projects.</span>";
          h1Element.dataset.updated = "true";  // Mark as updated
        }
      }
      if (document.querySelector('[class*="hero-header_heroHeaderHeight"] [class*="hero-header_flexHeaderContentTitle"]')) {
        var flexHeaderElement = document.querySelector('[class*="hero-header_heroHeaderHeight"] [class*="hero-header_flexHeaderContentTitle"]');
        if (!flexHeaderElement.dataset.updated) {
          flexHeaderElement.textContent = "Find your partner in " + profession_result + " projects.";
          flexHeaderElement.dataset.updated = "true";  // Mark as updated
        }
      }
      waitForElement('[class*="hero-header_filters"] p', function () {
        document.querySelector('[class*="hero-header_filters"] p').innerHTML = "Confirm your location to find expert guidance in your area.";
      })

      // Removing "professional" from the additional selector you mentioned desktop
      waitForElement('[class*="hero-header_filters"] [class*="Type_title3"]', function () {
        const elements = document.querySelectorAll('[class*="hero-header_filters"] [class*="Type_title3"]');


        elements.forEach(element => {

          if (element.textContent.includes('professional')) {
            element.textContent = element.textContent.replace('professional', '').trim();
          }
        });
      })

      // Removing "professional" from the additional selector you mentioned mobile
      waitForElement('[class*="hero-header_heroContainer"] [class*="hero-header_flexHeaderContentTitle"]', function () {
        const flexHeaderElements = document.querySelectorAll('[class*="hero-header_heroContainer"] [class*="hero-header_flexHeaderContentTitle"]');

        flexHeaderElements.forEach(element => {
          if (element.textContent.includes('professional')) {
            element.textContent = element.textContent.replace('professional', '').trim();
          }
        });
      });




    }
    var test144Interval = setInterval(function () {
      waitForElement("body", init);
    }, 50);
    setTimeout(function () {
      clearInterval(test144Interval);
    }, 15000);

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
