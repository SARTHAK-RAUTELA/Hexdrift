window.expLibraryDataQueue = window.expLibraryDataQueue || [];
window.expLibraryDataQueue.push({
  CRE_EXP_09: {
    enable_DEBUG: true,
    initOnce: false,
    localDevelopment: true,

    addNewContentToPage() {
      const $this = this;
      const testName = $this.__testName;

      const newHtml = `
      <div class="${testName}-container">
        <div class="${testName}-wrapper">
          <div class="${testName}-main">
            <div class="${testName}-header">
              <div class="${testName}-header-content">
                <div class="${testName}-header-text">Find the right reading, spelling or math level for your child</div>
              </div>
            </div>
            <div class="${testName}-subheader">
              <div class="${testName}-subheader-content">
                <div class="${testName}-subheader-text">Every child learns at a different pace—that’s why our programs are based on skill mastery, not age or grade.</div>
              </div>
            </div>
            <div class="${testName}-tool">
              <div class="${testName}-tool-content">
                <div class="${testName}-tool-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M9 15H11V9H9V15ZM10 7C10.2833 7 10.5208 6.90417 10.7125 6.7125C10.9042 6.52083 11 6.28333 11 6C11 5.71667 10.9042 5.47917 10.7125 5.2875C10.5208 5.09583 10.2833 5 10 5C9.71667 5 9.47917 5.09583 9.2875 5.2875C9.09583 5.47917 9 5.71667 9 6C9 6.28333 9.09583 6.52083 9.2875 6.7125C9.47917 6.90417 9.71667 7 10 7ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
                      fill="#0B3E64"
                    />
                  </svg>
                </div>
                <div class="${testName}-tool-text">
                  Research shows that children placed by skill—rather than by age or grade—make faster progress and feel more confident. Our placement test helps you find the right starting point, so your
                  child can succeed from day one.
                </div>
              </div>
            </div>
            <div class="${testName}-howItWorks-container">
              <div class="${testName}-howItWorks-content">
                <div class="${testName}-howItWorks-header">How it works</div>
                <div class="${testName}-htw-wrapper">
                  <div class="${testName}-htw-content">
                    <div class="${testName}-htw-step">1</div>
                    <div class="${testName}-htw-text-content">
                      <div class="${testName}-htw-head">Choose your subject</div>
                      <div class="${testName}-htw-subhead">Pick Reading, Spelling, or Math—whichever you’d like to start with. Not sure? Start with Reading.</div>
                    </div>
                  </div>
                  <div class="${testName}-htw-content">
                    <div class="${testName}-htw-step">2</div>
                    <div class="${testName}-htw-text-content">
                      <div class="${testName}-htw-head">Complete the assessment</div>
                      <div class="${testName}-htw-subhead">Takes 10–20 minutes, done online with your child. No prep needed.</div>
                    </div>
                  </div>
                  <div class="${testName}-htw-content">
                    <div class="${testName}-htw-step">3</div>
                    <div class="${testName}-htw-text-content">
                      <div class="${testName}-htw-head">Get your recommendation</div>
                      <div class="${testName}-htw-subhead">We’ll tell you exactly what to order. If it’s not the right fit, return within a year for a refund.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;

      this.runAt(".page-content p+.presenter_alt.readingPlacementTest .presenter__media", function () {
        if (!document.querySelector(`.${testName}-container`)) {
          document.querySelector(".page-content p+.presenter_alt.readingPlacementTest .presenter__media").insertAdjacentHTML("afterend", newHtml);
        }
      });
    },

    redirectToMappedUrl() {
      const urlMappings = {
        "https://www.allaboutlearningpress.com/reading-placement": "https://www.allaboutlearningpress.com/placement/",
        "https://www.allaboutlearningpress.com/spelling-placement": "https://www.allaboutlearningpress.com/placement/",
      };

      let currentUrl = window.location.href.split("?")[0].trim();
      const queryParams = window.location.search;

      if (currentUrl.endsWith('/')) {
        currentUrl = currentUrl.slice(0, -1);
      }

      const referrer = document.referrer;

      // Only redirect if no referrer or from external site
      if (
        urlMappings[currentUrl] &&
        (!referrer || new URL(referrer).origin !== window.location.origin)
      ) {
        const newUrl = urlMappings[currentUrl] + queryParams;
        window.location.href = newUrl;
      }
    },

    init() {
      const $this = this;
      $this.addNewContentToPage();

      const targetUrls = [
        "https://www.allaboutlearningpress.com/placement/",
      ];

      let currentUrl = window.location.href.split("?")[0].trim();
      if (currentUrl.endsWith('/')) {
        currentUrl = currentUrl.slice(0, -1);
      }

      const isExactMatch = targetUrls.some(target => {
        let normalizedTarget = target;
        if (normalizedTarget.endsWith('/')) {
          normalizedTarget = normalizedTarget.slice(0, -1);
        }
        return currentUrl === normalizedTarget;
      });

      if (!isExactMatch) {
        this.redirectToMappedUrl();
      }
    },
  },
});
