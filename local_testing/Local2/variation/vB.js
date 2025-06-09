window.expLibraryDataQueue = window.expLibraryDataQueue || [];
window.expLibraryDataQueue.push({
  CRE_EXP_6: {
    var: {},
    enable_DEBUG: true,
    initOnce: false,
    localDevelopment: true,

    // Cache DOM selectors for performance
    selectors: {
      faqItem1:'.dx-faqs .stripe.stripeDark .container.transparent.clearfix h1 + nav a[href="#FAQsOrdering"]',
      faqItem2:'.dx-faqs .stripe.stripeDark .container.transparent.clearfix h1 + nav a[href="#FAQsTiles"]',
      faqAccordion1: '#FAQsOrdering',
      faqAccordion2:'#FAQsTiles'

    },

    

    addNewSubHeader(headerId, headerText) {
      this.runAt(headerId, ([headerElement]) => {
        if (headerElement) {
          if(!document.querySelector(`${headerId} + p`)) {
            headerElement.insertAdjacentHTML('afterend', `${headerText}`);
          }
          
        } 
      });
    },

    // Initialize the experiment
    init() {
      this.runAt(this.selectors.faqItem1, ([faqItem1Content]) => {
        faqItem1Content.nextSibling.remove();

        this.runAt(this.selectors.faqItem2, ([faqItem2Content]) => {
            
             
            // faqItem2Content.nextSibling.insertAdjacentElement('afterend', faqItem1Content);
            faqItem2Content.parentNode.insertBefore(faqItem1Content, faqItem2Content.nextSibling);
            const newText = document.createTextNode('\u00A0\u00A0|\u00A0\u00A0');
            faqItem2Content.parentNode.insertBefore(newText, faqItem2Content.nextSibling);


        
        });

      });


      this.runAt(this.selectors.faqAccordion1, ([faqAcc1]) => {
        this.runAt(this.selectors.faqAccordion2, ([faqAcc2]) => {
            const faqAcc1Parent = faqAcc1.closest('.stripe');
            const faqAcc2Parent = faqAcc2.closest('.stripe');
            faqAcc2Parent.insertAdjacentElement('afterend', faqAcc1Parent);
        });

      });

      this.addNewSubHeader('#FAQsReading', '<p>For level-specific questions, please see the FAQ section on each individual level page.</p>');
      this.addNewSubHeader('#FAQsSpelling', '<p>For level-specific questions, please see the FAQ section on each individual level page.</p>');
      this.addNewSubHeader('#FAQsTiles', '<p>For letter-tile specific questions, please see the FAQ section on each individual level page.</p>');
    },
  },
});