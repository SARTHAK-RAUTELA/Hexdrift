// Test-01
window.expLibraryDataQueue = window.expLibraryDataQueue || [];
window.expLibraryDataQueue.push({
  CRE_EXP_25: {
    var: {},
    enable_DEBUG: true, // For debugging
    initOnce: false, // False if events need to be added multiple times
    localDevelopment: true,
    changeBtnText() {
      // Change button text Reading
      this.runAt('html body[data-path^="/all-about"]  .product-details-section .product-option .product-option-text h4 a', () => {
        const readingBtns = document.querySelectorAll('.product-details-section .product-option .product-option-text h4 a');
           readingBtns.forEach(btn => {
            btn.setAttribute('target', '_blank');
        });
      });

      this.runAt('html body[data-path^="/tiles-and-boxes"]  .product-details-section .product-option .product-option-text h4 a', () => {
        const readingBtns = document.querySelectorAll('.product-details-section .product-option .product-option-text h4 a');
           readingBtns.forEach(btn => {
            btn.setAttribute('target', '_blank');
        });
      });
    
    },
   
    // Initialize the experiment
    init() {
      const $this = this;
      $this.changeBtnText();
     
      // $this.startUpdateTextIntervalForMath();
    },
  },
});