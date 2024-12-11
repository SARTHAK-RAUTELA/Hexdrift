
(function () {
    try {
      /* Main Variables */
      const DEBUG = 1;
      const VARIATION_NAME = "SEA241";
      /* Utility Function: Wait for an Element */
      function waitForElement(selector, callback, delayInterval, delayTimeout) {
        const interval = setInterval(() => {
          const element = document.querySelector(selector);
          if (element) {
            clearInterval(interval);
            callback();
          }
        }, delayInterval);
        setTimeout(() => clearInterval(interval), delayTimeout);
      }
     
    
      /* Initialize Popup */
      function initPopup() {
        document.body.classList.add(VARIATION_NAME);
        const linkElement = document.querySelector('.site-header__links > div + a');

        // Change the inner text
        linkElement.innerHTML = 'VIP Tour';
        
        // Change the href attribute
        linkElement.setAttribute('href', '/orlando/tours/ultimate-vip/?tab=overview');
        
        // Alternatively, you can do this:
        linkElement.href = '/orlando/tours/ultimate-vip/?tab=overview';

        
     }

      /* Initialize Variation */
      waitForElement(
        ".site-header__links > div + a",
        () => {
          initPopup();
        },
        50,
        15000
      );
    } catch (e) {
      if (DEBUG) console.error(`Error in Test ${VARIATION_NAME}:`, e);
    }
  })();