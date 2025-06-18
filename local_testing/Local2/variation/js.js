(function () {
  try {
    /* main variables */
    var debug = 1;
    var variation_name = "cre-t-76";

    /* helper library */
    var _$;
    !(function (factory) {
      _$ = factory();
    })(function () {
      var bm = function (s) {
        if (typeof s === "string") {
          this.value = Array.prototype.slice.call(document.querySelectorAll(s));
        }
        if (typeof s === "object") {
          this.value = [s];
        }
      };
      bm.prototype = {
        eq: function (n) {
          this.value = [this.value[n]];
          return this;
        },
        each: function (fn) {
          [].forEach.call(this.value, fn);
          return this;
        },
        log: function () {
          var items = [];
          for (let index = 0; index < arguments.length; index++) {
            items.push(arguments[index]);
          }
          console && console.log(variation_name, items);
        },
        addClass: function (v) {
          var a = v.split(" ");
          return this.each(function (i) {
            for (var x = 0; x < a.length; x++) {
              if (i.classList) {
                i.classList.add(a[x]);
              } else {
                i.className += " " + a[x];
              }
            }
          });
        },
        waitForElement: function (selector, trigger, delayInterval, delayTimeout) {
          var interval = setInterval(function () {
            if (_$(selector).value.length) {
              clearInterval(interval);
              trigger();
            }
          }, delayInterval);
          setTimeout(function () {
            clearInterval(interval);
          }, delayTimeout);
        },
      };
      return function (selector) {
        return new bm(selector);
      };
    });



    var helper = _$();

    const config = {
      appleIcon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="26" viewBox="0 0 22 26" fill="none">
          <path d="M18.375 13.8267C18.4019 11.8196 19.5229 9.92049 21.3013 8.86924C20.1794 7.32862 18.3002 6.35183 16.3451 6.29301C14.2599 6.08256 12.2384 7.49276 11.1758 7.49276C10.0926 7.49276 8.45655 6.31391 6.69481 6.34876C4.39845 6.42009 2.25766 7.67542 1.14044 9.60578C-1.26116 13.6037 0.530216 19.4794 2.83074 22.711C3.98175 24.2934 5.32694 26.0611 7.0871 25.9984C8.80951 25.9297 9.4528 24.9423 11.5319 24.9423C13.5917 24.9423 14.1953 25.9984 15.9911 25.9585C17.8394 25.9297 19.0038 24.3691 20.1145 22.7716C20.9415 21.6441 21.5778 20.3979 22 19.0792C19.828 18.1959 18.3775 16.0942 18.375 13.8267Z" fill="white"/>
          <path d="M14.9828 4.16773C15.9906 3.00454 16.487 1.50947 16.3668 0C14.8272 0.155481 13.4051 0.862984 12.3837 1.98154C11.385 3.07443 10.8652 4.5432 10.9635 5.99497C12.5036 6.01022 14.0177 5.32189 14.9828 4.16773Z" fill="white"/>
        </svg>
      `,
      starIcon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="112" height="19" viewBox="0 0 112 19" fill="none">
        <path d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z" fill="#FFBF00"/>
        <path d="M26.825 19L28.45 11.975L23 7.25L30.2 6.625L33 0L35.8 6.625L43 7.25L37.55 11.975L39.175 19L33 15.275L26.825 19Z" fill="#FFBF00"/>
        <path d="M49.825 19L51.45 11.975L46 7.25L53.2 6.625L56 0L58.8 6.625L66 7.25L60.55 11.975L62.175 19L56 15.275L49.825 19Z" fill="#FFBF00"/>
        <path d="M72.825 19L74.45 11.975L69 7.25L76.2 6.625L79 0L81.8 6.625L89 7.25L83.55 11.975L85.175 19L79 15.275L72.825 19Z" fill="#FFBF00"/>
        <path d="M95.825 19L97.45 11.975L92 7.25L99.2 6.625L102 0L104.8 6.625L112 7.25L106.55 11.975L108.175 19L102 15.275L95.825 19Z" fill="#FFBF00"/>
      </svg>`,
      googleIcon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
          <path d="M14.6055 14.4631L2.90137 21.1154C2.41337 21.3921 1.96299 21.4554 1.60449 21.3381L11.542 11.3996L14.6055 14.4631ZM10.835 10.6925L0.90625 20.6222C0.829801 20.4165 0.787115 20.1731 0.787109 19.8947V1.49235C0.787109 1.21395 0.829589 0.969868 0.90625 0.763834L10.835 10.6925ZM19.1279 9.49235C20.2904 10.153 20.2904 11.2342 19.1279 11.8957L15.5078 13.9513L12.249 10.6925L15.5059 7.43376L19.1279 9.49235ZM1.60547 0.0489904C1.96383 -0.0681004 2.41379 -0.00444593 2.90137 0.272623L14.6045 6.92204L11.542 9.98551L1.60547 0.0489904Z" fill="white"/>
        </svg>`,
      curvedImage: 'https://cdn-3.convertexperiments.com/uf/10007679/10007713/curved-content_6842dfc15d1d0.svg',
      profile1: "https://cdn-3.convertexperiments.com/uf/10007679/10007713/cre-76-user-1_6842df979b37e.svg",
      profile2: "https://cdn-3.convertexperiments.com/uf/10007679/10007713/cre-76-user-2_6842dfa840e24.svg",
      profile3: "https://cdn-3.convertexperiments.com/uf/10007679/10007713/cre-76-user-3_6842dfb54cbb2.svg",
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.firsttable.live',
      appStoreLink: 'https://apps.apple.com/app/apple-store/id1599994101',
    }


    var curvedHtml = `
    <div class="${variation_name}-curved-container">
      <div class="${variation_name}-curved-wrapper">
        <div class="${variation_name}-curved-content">
        <img src="${config.curvedImage}" alt="Curved Content" class="${variation_name}-curved-image" />
        </div>
      </div>
    </div>
    `;

    var textHtml = `
      <div class="${variation_name}-text-container">
        <div class="${variation_name}-text-wrapper">
          <div class="${variation_name}-text-content">
            <h1 display="block" color="white" font-family="headings" font-weight="400" class="sc-88b5dd01-0 cfyWof ${variation_name}-custom-h1">Dine 
              <span class="cre-t-76-mobile-same-line">off-peak &amp;</span>
              <span class="cre-t-76-mobile-save">&nbsp;save 50%&nbsp;</span>
              on your entire meal
            </h1>
            <p color="white" font-size="19px" display="flex" class="sc-e5a2a45e-0 dabarf ${variation_name}-custom-p">
              Dine slightly earlier or later in the evening at thousands of top-rated restaurants and enjoy 50% off the food bill—for you and up to three guests.
            </p>
          </div>
        </div>
      </div>
    `;


    var bottomHtml = `
      <div class="${variation_name}-bottom-container">
        <div class="${variation_name}-bottom-wrapper">
          <div class="${variation_name}-bottom-content">
            <div class="${variation_name}-rating-store-container">
              <div class="${variation_name}-star-container">${config.starIcon}</div>
              <span class="${variation_name}-rating-text">4.9 on</span>
              <div class="${variation_name}-store-icons">
                <a href="${config.appStoreLink}" target="_blank" rel="noopener noreferrer" class="${variation_name}-apple-store ${variation_name}-store">
                  ${config.appleIcon}
                </a>
                <a href="${config.playStoreLink}" target="_blank" rel="noopener noreferrer" class="${variation_name}-google-store ${variation_name}-store">
                  ${config.googleIcon}
                </a> 
              </div>
            </div>
            <div class="${variation_name}-trusted-container">
              <div class="${variation_name}-profiles">
                <div class="${variation_name}-profile ${variation_name}-profile-1">
                  <img src="${config.profile1}" alt="Profile 1" />
                </div>
                <div class="${variation_name}-profile ${variation_name}-profile-2">
                  <img src="${config.profile2}" alt="Profile 2" />
                </div>
                <div class="${variation_name}-profile ${variation_name}-profile-3">
                  <img src="${config.profile3}" alt="Profile 3" />
                </div>
              </div>
              <span class="${variation_name}-trusted-text">
                Trusted by 2.2M+ diners
              </span>
            </div>
          </div>
        </div>
      </div>  
    `;

    function changeSubCopies() {

      helper.waitForElement('[data-attribute="booking_details_find_restaurant"] p', function () {
        const element = document.querySelector('[data-attribute="booking_details_find_restaurant"] p');
        element.textContent = "From fine dining to everyday favourites—browse top-rated restaurants near you and discover new cuisines.";
      }, 50, 15000);

      helper.waitForElement('[data-attribute="booking_details_date_time"] p', function () {
        const element = document.querySelector('[data-attribute="booking_details_date_time"] p');
        element.textContent = "Pay a small booking fee to secure your discounted table. Your reservation is confirmed instantly.";
      }, 50, 15000);

      helper.waitForElement('[data-attribute="booking_details_First_table"] p', function () {
        const element = document.querySelector('[data-attribute="booking_details_First_table"] p');
        element.textContent = "Save 50% on your entire food bill while enjoying the same great quality and service as full-paying customers.";
      }, 50, 15000);

    }

    /* Variation Init */
    function init() {
      document.body.classList.add(variation_name);
      var intervalId = setInterval(function () {

        changeSubCopies();

        const mainForm = document.querySelector('[data-crid="Main_Search_form"]');
        const mainFormParent = mainForm && mainForm.parentElement;
        if (mainFormParent) {
          if (!document.querySelector(`.${variation_name}-text-container`)) {
            mainFormParent.insertAdjacentHTML("beforebegin", textHtml);
          }
          if (!document.querySelector(`.${variation_name}-bottom-container`)) {
            mainFormParent.insertAdjacentHTML("afterend", bottomHtml);
          }

          var formButton = mainFormParent.querySelector('button[type="submit"]');
          if (formButton) {
            var formButtonParent = formButton.parentElement;
            formButtonParent.classList.add(`${variation_name}-form-button-parent`);


            if (!document.querySelector(`.${variation_name}-curved-container`)) {
              if (formButtonParent) {
                formButtonParent.parentElement && formButtonParent.parentElement.classList.add(`${variation_name}-curved-parent`);
                formButtonParent.insertAdjacentHTML("afterend", curvedHtml);
              }
            }
          }
        }
      }, 250);

      setTimeout(function () {
        clearInterval(intervalId);
      }, 4000);
    }


    /* Initialise variation */
    helper.waitForElement('[role="main"] h1', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();