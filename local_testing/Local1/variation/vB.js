(function() {
  try {
      /* main variables */
      var debug = 0;
      var variation_name = "TT_procard";
      /* all Pure helper functions */
      function waitForElement(selector, trigger, delayInterval, delayTimeout) {
          var interval = setInterval(function() {
              if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
                  clearInterval(interval);
                  trigger();
              }
          }, delayInterval);
          setTimeout(function() {
              clearInterval(interval);
          }, delayTimeout);
      }

 
   // Utility functions
   function extractNumbersWithPlus(inputString) {
    var pattern = /(\d+\+|\d+)/g;
    var matches = inputString.match(pattern);
    return matches || [];
  }

  function extractServices(profession_content) {
    var matches = profession_content.match(/\d+\s+(.*?)\s+near/);
    var result = matches ? matches[1] : null;
    return result;
  }

  function extractLocation(inputString) {
    const match = inputString.match(/near\s+(.+)/i);
    if (match && match[1]) {
      return match[1].trim();
    } else {
      return null;
    }
  }

  function extractWordsBeforeNear(sentence) {
    const regex = /^(.*?)\s?near/i;
    const match = sentence.match(regex);
    return match ? match[1].trim() : sentence;
  }

  function extractNumberFromString(str) {
    // Use regular expression to find numbers in the string, including those with commas
    let match = str.match(/\d{1,3}(,\d{3})*/g);
    // If there's a match, join the parts and return it as a number; otherwise, return null
    return match ? parseInt(match.join(''), 10) : null;
  }
  


      /* Variation Init */
      function init() {
         
    if (window.innerWidth > 1024) {
      document.querySelector("body").classList.add(variation_name);
    
      var targetElements = document.querySelectorAll('[class*="pro-list-results-front-door"] [class*="pro-list-results"] > div > div > div');

      targetElements.forEach((element) => {
        // Check if the .ttviewcta element already exists within the current element
        if (!element.querySelector('.ttviewcta')) {
          // Find the element to clone
          var elementToClone = element.querySelector('[class*="pro-list-result-image_proImage"] + div > div:nth-child(2)');
          
          if (elementToClone) {
            // Clone the element
            var clonedElement = elementToClone.cloneNode(true);
            
            // Optionally, add the .ttviewcta class to the cloned element to prevent duplication
            clonedElement.classList.add('ttviewcta');
            
            // Find the target element after which the cloned element should be inserted
            var target = element.querySelector('a > div [class*="pro-list-result-image_proImage"] > div:last-child');
            
            if (target) {
              // Insert the cloned element after the target element
              target.insertAdjacentElement('afterend', clonedElement);
            }
          }
        }
        
        // Add the .ttctamore class to the parent of the button if a button tag is found
        var button = element.querySelector('button');
        if (button) {
          button.parentElement.classList.add('ttctamore');
        }
      });
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
          var test144Interval = setInterval(function() {
              waitForElement("body", init, 50, 15000);
          }, 50);
          setTimeout(function() {
              clearInterval(test144Interval);
          }, 3000);
          const observer = new PerformanceObserver(thumbtackTest144);
          observer.observe({
              entryTypes: ["mark"]
          });
      } else {
          waitForElement("body", init, 50, 15000);
      }
  } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
  }
})();