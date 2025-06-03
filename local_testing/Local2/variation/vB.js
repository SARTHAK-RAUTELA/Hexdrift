window.expLibraryDataQueue = window.expLibraryDataQueue || [];
window.expLibraryDataQueue.push({
  CRE_EXP_3: {
    var: {},
    enable_DEBUG: true,
    initOnce: false,
    localDevelopment: true,
    images:{
       visaIcon:`<svg xmlns="http://www.w3.org/2000/svg" width="46" height="32" viewBox="0 0 46 32" fill="none">
                    <rect x="0.5" y="0.5" width="45" height="31" rx="5.5" fill="white"/>
                    <rect x="0.5" y="0.5" width="45" height="31" rx="5.5" stroke="#F2F4F7"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3336 21.1444H11.5872L9.52784 13.0565C9.43009 12.6845 9.22255 12.3556 8.91725 12.2006C8.15535 11.811 7.31579 11.501 6.3999 11.3446V11.0332H10.824C11.4346 11.0332 11.8925 11.501 11.9689 12.0442L13.0374 17.8782L15.7824 11.0332H18.4524L14.3336 21.1444ZM19.9789 21.1444H17.3852L19.5209 11.0332H22.1146L19.9789 21.1444ZM25.4702 13.8343C25.5465 13.2898 26.0044 12.9784 26.5387 12.9784C27.3783 12.9002 28.2928 13.0566 29.0561 13.4448L29.514 11.2678C28.7508 10.9564 27.9112 10.8 27.1493 10.8C24.6319 10.8 22.8002 12.2006 22.8002 14.1444C22.8002 15.6231 24.0977 16.3995 25.0136 16.8673C26.0044 17.3337 26.3861 17.6451 26.3097 18.1114C26.3097 18.811 25.5465 19.1224 24.7846 19.1224C23.8687 19.1224 22.9528 18.8892 22.1146 18.4997L21.6567 20.678C22.5725 21.0662 23.5634 21.2226 24.4793 21.2226C27.3019 21.2994 29.0561 19.9002 29.0561 17.8001C29.0561 15.1553 25.4702 15.0003 25.4702 13.8343ZM38.1332 21.1444L36.0738 11.0332H33.8618C33.4038 11.0332 32.9459 11.3446 32.7932 11.811L28.9797 21.1444H31.6497L32.1826 19.667H35.4632L35.7685 21.1444H38.1332ZM34.2434 13.7562L35.0053 17.5669H32.8696L34.2434 13.7562Z" fill="#172B85"/>
                  </svg>`,

      masterCardIcon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="32" viewBox="0 0 46 32" fill="none">
                <rect x="0.5" y="0.5" width="45" height="31" rx="5.5" fill="white"/>
                <rect x="0.5" y="0.5" width="45" height="31" rx="5.5" stroke="#F2F4F7"/>
                <path d="M28.7695 6.70667C33.7627 6.70667 37.8105 10.7065 37.8105 15.6403C37.8104 20.5739 33.7626 24.5729 28.7695 24.5729C26.5311 24.5728 24.4842 23.7676 22.9053 22.4362C21.3264 23.7676 19.2795 24.5729 17.041 24.5729C12.0479 24.5729 8.00014 20.5739 8 15.6403C8 10.7065 12.0479 6.70667 17.041 6.70667C19.2794 6.70669 21.3264 7.51203 22.9053 8.84338C24.4841 7.51202 26.5312 6.7067 28.7695 6.70667Z" fill="#ED0006"/>
                <path d="M28.7695 6.70667C33.7627 6.70667 37.8105 10.7065 37.8105 15.6403C37.8104 20.5739 33.7626 24.5729 28.7695 24.5729C26.5311 24.5728 24.4842 23.7676 22.9053 22.4362C24.8482 20.7977 26.082 18.362 26.082 15.6403C26.082 12.9183 24.8484 10.4819 22.9053 8.84338C24.4842 7.51202 26.5312 6.70669 28.7695 6.70667Z" fill="#F9A000"/>
                <path d="M22.9048 8.84375C24.848 10.4822 26.0814 12.9177 26.0815 15.6396C26.0815 18.3616 24.8479 20.797 22.9048 22.4355C20.9622 20.797 19.729 18.3612 19.729 15.6396C19.7291 12.9181 20.9621 10.4822 22.9048 8.84375Z" fill="#FF5E00"/>
                </svg>
                  `,

     discoverIcon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="32" viewBox="0 0 46 32" fill="none">
                <rect x="0.5" y="0.5" width="45" height="31" rx="3.5" fill="white"/>
                <rect x="0.5" y="0.5" width="45" height="31" rx="3.5" stroke="#F2F4F7"/>
                <path d="M25 31L44 25.25V28C44 29.6569 42.6569 31 41 31H25Z" fill="#FD6020"/>
                <path d="M18.9131 12.1478C19.4008 12.1478 19.9579 12.2198 20.376 12.5062V13.9388C20.0276 13.5091 19.4705 13.2221 18.9131 13.222C17.7982 13.2937 16.8924 14.2967 16.9619 15.4427V15.5863C16.9619 16.7324 17.8675 17.5921 18.9824 17.5922C19.5399 17.5922 20.0275 17.3052 20.376 16.8754V18.309C19.8883 18.5238 19.4001 18.6664 18.8428 18.6664C17.1008 18.6661 15.7071 17.1622 15.707 15.3715C15.707 13.5089 17.1012 12.0046 18.9131 12.1478ZM29.8535 16.4457L31.5264 12.1478H32.7803L30.2021 18.6664H29.5752L26.9961 12.1478H28.251L29.8535 16.4457ZM13.3379 12.0043C13.9651 12.0043 14.5923 12.2913 15.0801 12.7211L14.4531 13.5804C14.1744 13.294 13.8259 13.0796 13.4775 13.0795C13.0594 13.0078 12.7103 13.3655 12.6406 13.7953C12.6406 14.1534 12.8501 14.2969 13.5469 14.5834C14.9404 15.1564 15.2887 15.5863 15.3584 16.4457V16.6605C15.2887 17.8066 14.3834 18.6666 13.2686 18.5951C12.4324 18.5951 11.5959 18.1653 11.1777 17.3773L11.9443 16.5892C12.1534 17.0906 12.6409 17.4485 13.1982 17.4486H13.2686C13.6865 17.4484 14.1043 17.0191 14.1045 16.5179C14.1045 16.2314 13.9649 16.0157 13.7559 15.8724C13.4773 15.7293 13.1985 15.5866 12.9199 15.515C11.8049 15.1568 11.4561 14.6549 11.4561 13.7953V13.724C11.5257 12.7211 12.3623 11.9327 13.3379 12.0043ZM6.09082 12.1478C7.76318 12.2196 9.08726 13.6523 9.01758 15.3715C9.01757 16.3027 8.5992 17.1623 7.90234 17.807C7.27519 18.3084 6.5087 18.5954 5.74219 18.5238H4V12.1478H6.09082ZM10.6895 18.5238H9.50488V12.1478H10.6895V18.5238ZM36.6826 13.222H34.5225V14.6547H36.6133V15.7299H34.5225V17.4486H36.6826V18.5238H33.3379V12.1478H36.6826V13.222ZM39.1914 12.1478C40.585 12.1478 41.3515 12.7925 41.3516 14.0101C41.4212 14.9413 40.7942 15.7291 39.958 15.8724L41.8398 18.5238H40.376L38.7734 15.9447H38.6338V18.5238H37.4492V12.1478H39.1914ZM5.5332 13.222H5.18457V17.4486H5.5332C6.09059 17.5202 6.71764 17.3057 7.13574 16.9476C7.55377 16.5179 7.76261 15.9447 7.7627 15.3002C7.7627 14.7271 7.55383 14.1538 7.13574 13.724C6.71766 13.3658 6.09066 13.1505 5.5332 13.222ZM38.6338 15.0853H38.9824C39.7487 15.0853 40.0975 14.7268 40.0977 14.0824C40.0977 13.5093 39.7489 13.1508 38.9824 13.1508H38.6338V15.0853Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.9302 12C22.188 12 20.7246 13.4327 20.7246 15.2953C20.7246 17.0862 22.1183 18.5905 23.9302 18.6621C25.742 18.7338 27.1357 17.2294 27.2054 15.3669C27.1357 13.5044 25.742 12 23.9302 12V12Z" fill="#FD6020"/>
                </svg>
              `             
      
    },
    // Cache DOM selectors for performance
    selectors: {
      cartContainer: '.body > .container',
      cartTotals: 'div[data-cart-totals]',
      cartTotalLabels: 'div[data-cart-totals] .cart-totals li.cart-total .cart-total-label strong',
      grandTotal: '.cart-total-grandTotal',
      grandTotalSpan: '.cart-total-grandTotal span',
      grandTotalMain: '.grand-total-main',
      grandTotalNew: '.grand-total-new',
      addCouponCodeText: '.CRE_EXP_3coupon-code .cart-total-value .coupon-code-add',
      grandTotalText: '.grand-total .cart-total-label strong',

    },
    // Map text content to CSS classes
    textClassMap: {
      'Subtotal': 'subTotal',
      'Shipping': 'shipping',
      'Sales Tax': 'sales-tax',
      'Coupon': 'CRE_EXP_3coupon-code',
      'Grand total': 'grand-total'
    },
    // Shipping rates based on order total
    shippingRates: [
      { range: [0.01, 4.99], rate: 2.50 },
      { range: [5, 29.99], rate: 4.95 },
      { range: [30, 44.99], rate: 7.95 },
      { range: [45, 174.99], rate: 9.95 },
      { range: [175, 249.99], rate: 12.95 },
      { range: [250, 349.99], rate: 15.95 },
      { range: [350, 499.99], rate: 28.95 },
      { range: [500, 999.99], rate: 63.95 },
      { range: [1000, 1499.99], rate: 98.95 }
    ],
    // Parse currency text to number
    parseCurrency(text) {
      return parseFloat(text.replace(/[$,]/g, '')) || 0;
    },
    // Format number as currency
    formatCurrency(amount) {
      return `$${amount.toFixed(2)}`;
    },

    debounce(func, timeout = 300) {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, timeout);
      };
    },

    observeSelectorPrice(selector, callback, options = {}) {
      const document = options.document || window.document;
      const processed = new Map();
      if (options.timeout || options.onTimeout) {
        throw `observeSelector options \`timeout\` and \`onTimeout\` are not yet implemented.`;
      }
      let obs;
      let isDone = false;
      const done = () => {
        if (obs) obs.disconnect();
        isDone = true;
      };
      const processElement = (el) => {
        if (!processed.has(el)) {
          processed.set(el, true);
          callback(el);
          if (options.once) {
            done();
            return true;
          }
        }
        return false;
      };
      const lookForSelector = () => {
        const elParent = document.documentElement;
        if (elParent.matches(selector) || elParent.querySelector(selector)) {
          const elements = elParent.querySelectorAll(selector);
          elements.forEach((el) => processElement(el));
        }
      };
      const debouncedLookForSelector = this.debounce(() => {
        lookForSelector();
      }, 100);
      // Initial check for the selector on page load
      lookForSelector();
      if (!isDone) {
        obs = new MutationObserver(() => {
          debouncedLookForSelector();
        });
        obs.observe(document, {
          attributes: false,
          childList: true,
          subtree: true,
        });
      }
      return done;
    },
    // Get all cart value elements at once
    getCartValueElements() {
      return {
        subTotal: document.querySelector('.subTotal .cart-total-value span'),
        shipping: document.querySelector('.shipping .cart-total-value span') || document.querySelector('.shipping .shipping-estimate-show .shipping-estimate-value'),
        salesTax: document.querySelector('.sales-tax .cart-total-value span'),
        couponCode: document.querySelector('.CRE_EXP_3coupon-code .cart-total-value span'),
        grandTotalNew: document.querySelector('.grand-total-new')
        
      };
    },
    // Add header and subheader to cart page
    addHeaderAndSubheader() {
      const testName = this.__testName;
      const headerClass = `${testName}__header`;
      this.runAt(this.selectors.cartContainer, () => {
        if (document.querySelector(`.${headerClass}`)) return; // Skip if already exists
        const htmlString = `
          <div class="${headerClass}">Your Cart</div>
          <div class="${testName}__subheader">
            Watch your child love learning with these products—or return them within 12 months for a full refund, no questions asked.
          </div>
        `;
        const container = document.querySelector(this.selectors.cartContainer);
        container?.insertAdjacentHTML('beforebegin', htmlString);
      });
    },
    // Add CSS classes to cart total elements
    addClassesToElements() {
      this.runAt(this.selectors.cartTotalLabels, () => {
        const elements = document.querySelectorAll(this.selectors.cartTotalLabels);
        elements.forEach(element => {
          const textContent = element.textContent.trim();
          const closestCartTotal = element.closest('li.cart-total');
          if (!closestCartTotal) return;
          // Find matching text and add corresponding class
          const matchedKey = Object.keys(this.textClassMap).find(key =>
            textContent.includes(key)
          );
          if (matchedKey) {
            closestCartTotal.classList.add(this.textClassMap[matchedKey]);
          }
        });
        this.setupGrandTotalElements();
      });
    },
    // Setup grand total display elements
    setupGrandTotalElements() {
      const grandTotalSpan = document.querySelector(this.selectors.grandTotalSpan);
      if (!grandTotalSpan) return;
      grandTotalSpan.classList.add('grand-total-main');
      // Add new element for custom grand total
      if (!document.querySelector('.grand-total-new')) {
        grandTotalSpan.insertAdjacentHTML('afterend', '<span class="grand-total-new"></span>');
      }
    },
    // Update shipping cost based on subtotal
    updateShippingCost() {
      const elements = this.getCartValueElements();
      if (!elements.subTotal) return;
      const subTotal = this.parseCurrency(elements.subTotal.textContent);
      // Find matching shipping rate
      const rate = this.shippingRates.find(data =>
        subTotal >= data.range[0] && subTotal <= data.range[1]
      )?.rate;
      if (rate !== undefined) {
        const shippingContainer = document.querySelector('.shipping .cart-total-value');
        const shippingText = document.querySelector('.shipping .cart-total-label strong');
        if(shippingText){
          shippingText.textContent = 'Estimated shipping:';
        }
        if (shippingContainer) {
          shippingContainer.innerHTML = `<span>${this.formatCurrency(rate)}</span>`;
          
        }
      }
      else {
        const shippingContainer = document.querySelector('.shipping .cart-total-value');
        const shippingValue = document.querySelector('.shipping-estimate-show .shipping-estimate-value');
        if (shippingContainer && !shippingValue && !document.querySelector('.shipping-found')) {
          console.log('shipping value not found');
          shippingContainer.innerHTML = `<span>Calculated at checkout</span>`;
           const shippingText = document.querySelector('.shipping .cart-total-label strong');
        if(shippingText){
          shippingText.textContent = 'Estimated shipping:';
        }
        }
        if(shippingContainer && shippingValue){
          console.log('shipping value found');
          shippingContainer.innerHTML = `<span class="shipping-found">${this.formatCurrency(this.parseCurrency(shippingValue.textContent))}</span>`;
           const shippingText = document.querySelector('.shipping .cart-total-label strong');
            if(shippingText){
              shippingText.textContent = 'Estimated shipping:';
            }
        }
      }
    },

    //update coupon text
    updateCouponText() {
      this.runAt(this.selectors.grandTotalText, ([grandTotalText]) => {
        grandTotalText.textContent = 'Total:';
      });
    },


    updateGrandTotalText(){
      this.runAt(this.selectors.grandTotalText, ([grandTotalText]) => {
        grandTotalText.textContent = 'Grand Total';
      });
    },

    // Calculate and update grand total
    updateGrandTotal() {
      const elements = this.getCartValueElements();
      if (!elements.subTotal || !elements.shipping || !elements.grandTotalNew) return;
      const values = {
        subTotal: this.parseCurrency(elements.subTotal.textContent),
        shipping: this.parseCurrency(elements.shipping.textContent),
        salesTax: elements.salesTax ? this.parseCurrency(elements.salesTax.textContent) : 0,
        couponCode: elements.couponCode ? Math.abs(this.parseCurrency(elements.couponCode.textContent)) : 0 // Always positive for subtraction
      };
      // Calculate final total
      const finalGrandTotal = values.subTotal + values.shipping + values.salesTax - values.couponCode;
      elements.grandTotalNew.textContent = this.formatCurrency(finalGrandTotal);
    },
    // Monitor fetch requests for cart updates
    setupFetchDetection() {
      const performanceObserver = new PerformanceObserver(list => {
        list.getEntries().forEach(entry => {
          if (entry.entryType === "resource" &&
              entry.initiatorType === "fetch" &&
              entry.name.includes("cart")) {
            this.refreshCartCalculations(); // Refresh when cart is updated
          }
        });
      });
      performanceObserver.observe({ entryTypes: ["resource"] });
    },
    // Run all cart calculation functions
    refreshCartCalculations() {
      this.addHeaderAndSubheader();
      this.addClassesToElements();
      this.updateShippingCost();
      this.updateGrandTotal();
      this.updateGrandTotalText();
      this.updateCouponText();
      this.addPaymentIcons();
    },
    // Initialize the experiment
    init() {
      this.runAt(this.selectors.grandTotal, () => {
        this.refreshCartCalculations(); // Initial setup
        this.setupFetchDetection(); // Monitor for updates
        // Set up observer after elements are created
          this.runAt(this.selectors.grandTotalMain, () => {
          this.observeSelectorPrice(this.selectors.grandTotalMain, (element) => {
            this.runAt(this.selectors.grandTotalNew, () => {
              this.updateGrandTotal();
             });
            });
          });
      });
    },
    // Add payment icons before cart button
    addPaymentIcons() {
      const testName = this.__testName;
      this.runAt('.cart-actions.cart-content-padding-right', () => {
        // Check if icons already exist
        if (document.querySelector(`.${testName}__payment-icons`)) return;
        
        // Generate payment icons using reducer
        const paymentIconsContent = Object.values(this.images).reduce((accumulator, iconSvg) => {
          return accumulator + `<div class="${testName}__payment-icon">${iconSvg}</div>`;
        }, '');
        
        const paymentIconsHtml = `
          <div class="${testName}__payment-icons">
            ${paymentIconsContent}
          </div>
        `;
        
        const cartActions = document.querySelector('.cart-actions.cart-content-padding-right');
        if (cartActions) {
          cartActions.insertAdjacentHTML('afterbegin', paymentIconsHtml);
        }
      });
    },
  }
});


//some design work remaining 
// also need to check the price section twice
// need to create a new variation for the price section