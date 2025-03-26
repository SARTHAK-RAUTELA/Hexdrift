window.expLibraryDataQueue = window.expLibraryDataQueue || [];
window.expLibraryDataQueue.push({
  CRE_EXP_47: {
    var: {
      bannerHTML: `
            <div class="Cre_banner_logo jeewan" style="display:none">
          <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/TravelShift/CS2/Test47/best-price.png" width="300" height="100" 
          alt="Best Price">
          <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/TravelShift/CS2/Test47/travel-agency.png" width="300" height="100" 
          alt="Travel-agency">
        </div>`
    },
    enable_DEBUG: true,
    initOnce: false,
    localDevelopment: true,
    // Initialize the experiment
    init() {
      let $this = this;
      this.runAt('html[lang="en"] body[data-path="/book-trips-holiday"] [class*="FrontCover_headerWrapper"] h1 + div', function ([element]) {
        if (!document.querySelector(".Cre_banner_logo")) {
          element.insertAdjacentHTML('afterend', $this.var.bannerHTML)
        }
      })
      this.runAt('html[lang="en"] body[data-path="/book-trips-holiday"] #frontCover  [class*="FrontCover_coverImageWrapper"] + div [class*="FrontCover_headerWrapper"] [class*="FrontCover_description"]', function ([element]) {
         if (!document.querySelector(' #frontCover  [class*="FrontCover_coverImageWrapper"] + div [class*="FrontCover_headerWrapper"] [class*="FrontCover_description"] + .Cre_banner_logo')) {
          element.insertAdjacentHTML('afterend', $this.var.bannerHTML)
        }
      })
       
    },
  },
});