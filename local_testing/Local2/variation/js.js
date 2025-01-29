(function () {
  try {
      console.log("Testing the script"); // Fixed case-sensitive typo in console.log

      /* main variables */
      var debug = 1;
      var variation_name = "cre-t-19";

      function waitForElement(selector, trigger) {
          console.log("Starting waitForElement for selector:", selector);
          var interval = setInterval(function () {
              console.log("Checking for selector:", selector);
              var element = document.querySelector(selector); // Cache query result
              if (element) {
                  console.log("Element found: ", selector);
                  clearInterval(interval);
                  trigger(element); // Pass the element to the callback
              }
          }, 50);
          setTimeout(function () {
              clearInterval(interval);
              console.log("Timeout reached for selector: ", selector);
          }, 15000);
      }

      function init(searchButton) {
          console.log("Initialization started for: ", variation_name);
          if (searchButton) {
              console.log("Clicking the search button");
              searchButton.click();
              // Goal after redirection
              window._conv_q = window._conv_q || [];
              window._conv_q.push(["triggerConversion", "100034716"]);
              console.log("Conversion trigger pushed for goal 100034716");
          } else {
              console.log("Search button not found during initialization");
          }
      }

      waitForElement('[data-testid="search__button"]', init);
      console.log("Waiting for the body and search button to load...");
      

  } catch (e) {
      if (debug) {
          console.error("Error in Test " + variation_name + ": ", e);
      }
  }
})();