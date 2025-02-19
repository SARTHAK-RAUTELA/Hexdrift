(function () {
    try {
      /* Main Variables */
      const VARIATION_NAME = "TT_164";
  
      /* Utility Function: Wait for an Element */
      function waitForElement(selector, callback, delayInterval, delayTimeout) {
        const interval = setInterval(() => {
          const element = document.querySelector(selector);
          if (element) {
            clearInterval(interval);
            callback();
          }
        }, delayInterval);
  
        setTimeout(() => {
          clearInterval(interval);
        }, delayTimeout);
      }
  
      /* Initialize Popup */
      function init() {
        document.body.classList.add(VARIATION_NAME);
  
      }
  
      /* Initialize Variation */
      waitForElement("body", () => {
        init();
      }, 50, 15000);
  
    } catch (e) {
      if (DEBUG) console.error(`Error in Test ${VARIATION_NAME}:`, e);
    }
  })();