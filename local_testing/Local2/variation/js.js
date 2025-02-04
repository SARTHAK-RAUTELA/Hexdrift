window.expLibraryDataQueue = window.expLibraryDataQueue || [];
window.expLibraryDataQueue.push({
  CRE_EXP_47: {
    var: {},
    enable_DEBUG: true, // For debugging
    initOnce: false, // False if events need to be added multiple times

    // Function to check element existence and execute callback
    runAt(selector, callback) {
      let checkExist = setInterval(function () {
        let elements = document.querySelectorAll(selector);
        if (elements.length) {
          clearInterval(checkExist);
          callback(elements);
        }
      }, 100);
    },

    // Function to determine device type (mobile, tablet, or desktop)
    getDeviceType() {
      const userAgent = navigator.userAgent.toLowerCase();
      const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

      if (isTouchDevice) {
        if (/ipad|tablet|android(?!.*mobile)/.test(userAgent)) {
          return 'tablet'; // Tablets
        }
        return 'mobile'; // Mobile devices
      }

      return 'desktop'; // Default fallback: Desktop
    },

    // Initialize the experiment
    init() {
      const bannerHTML = `
        <div class="Cre_banner_logo">
          <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007503/best-price_67a0dc5332bad.png">
          <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007503/travel-agency_67a0dc39a20c7.png">
        </div>`;

      // Function to insert banner based on screen size
      const insertBannerBasedOnDevice = () => {
        const deviceType = this.getDeviceType();

        // Check the device type and choose appropriate selector
        const targetSelector = deviceType === 'mobile' || deviceType === 'tablet'
          ? '[class*="FrontCover_headerWrapper"] h1' // For mobile/tablet, use this selector
          : '[class*="FrontCover_headerWrapper"] h1 + div'; // For desktop, use this selector

        const targetElement = document.querySelector(targetSelector);

        if (targetElement) {
          // Insert the banner based on the device type
          if (deviceType === 'mobile' || deviceType === 'tablet') {
            targetElement.insertAdjacentHTML('beforebegin', bannerHTML); // Insert before the element for mobile/tablet
          } else {
            targetElement.insertAdjacentHTML('afterend', bannerHTML); // Insert after the element for desktop
          }
        }
      };

      // Run the check when the target element is found
      this.runAt('[class*="FrontCover_headerWrapper"]', function () {
        insertBannerBasedOnDevice();
      });
    },
  },
});