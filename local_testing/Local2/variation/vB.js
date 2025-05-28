(function () {
    try {
        /* main variables */
        var debug = 1;
        var variation_name = "cre-t-51";

        function waitForElement(selector, trigger) {
            var interval = setInterval(function () {
                if (
                    document &&
                    document.querySelector(selector) &&
                    document.querySelectorAll(selector).length > 0
                ) {
                    clearInterval(interval);
                    trigger();
                }
            }, 50);
            setTimeout(function () {
                clearInterval(interval);
            }, 15000);
        }

        function waitForConvert(trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function () {
                if (typeof window.convert !== "undefined" && typeof window.convert.getAllVisitorData === "function") {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);

            setTimeout(function () {
                clearInterval(interval);
            }, delayTimeout);
        }

        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Helper function to get a cookie
        function getCookie(name) {
            const nameEQ = name + "=";
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        // Helper function to set a session cookie
        function setSessionCookie(name, value) {
            document.cookie = name + "=" + value + "; path=/";
        }

        // Function removed as we're no longer showing modal on scroll
        function checkVisibility() {
            waitForElement("[data-attribute='restaurant-list-item']", function () {
                const shadowSearch = document.querySelector("[data-attribute='restaurant-list-item']");
                console.log(shadowSearch, "shadowSearch")
                if (!shadowSearch) return;

                // Check if modal has already been shown for this user using session cookie
                if (getCookie("modalShown") === "true") return;

                if (document.querySelector("body").getAttribute("users_type") != "member") {
                    if (isInViewport(shadowSearch)) {
                        waitForConvert(function () {
                            const visitorData = window.convert.getAllVisitorData();
                            if (visitorData?.segments?.visitorType === "new") {
                                injectModal();
                                window._conv_q = window._conv_q || [];
                                _conv_q.push(["triggerConversion", "100035661"]);
                                setSessionCookie("modalShown", "true");
                                window.removeEventListener("scroll", checkVisibility); // <-- moved here
                            }
                        }, 100, 1000);
                    }
                }
            });
        }


        // observer Selector helper for observe  the  dynamic modal 
        function debounce(func, timeout = 300) {
            let timer;
            return (...args) => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    func.apply(this, args);
                }, timeout);
            };
        }

        function observeSelector(selector, callback, options = {}) {
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
            const debouncedLookForSelector = debounce(() => {
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
        }

        function waitForSwiper(trigger) {
            var interval = setInterval(function () {
                if (typeof window.Swiper != "undefined") {
                    clearInterval(interval);
                    trigger();
                }
            }, 50);
            setTimeout(function () {
                clearInterval(interval);
            }, 15000);
        }

        function addScript() {
            var scriptOne = document.createElement("script");
            scriptOne.src = "https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.3.2/swiper-bundle.min.js";
            document.querySelector("head").appendChild(scriptOne);
            var swiperCss =
                '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.3.2/swiper-bundle.css" integrity="sha512-ipO1yoQyZS3BeIuv2A8C5AwQChWt2Pi4KU3nUvXxc4TKr8QgG8dPexPAj2JGsJD6yelwKa4c7Y2he9TTkPM4Dg==" crossorigin="anonymous" referrerpolicy="no-referrer" />';
            document.querySelector("head").insertAdjacentHTML("beforeend", swiperCss);
        }

        function mutationObserverForUseUSerType() {
            // Create a mutation observer to watch for changes to the users_type attribute
            const userTypeObserver = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'users_type') {
                        const userType = document.body.getAttribute('users_type');
                        if (userType === 'guest') {
                            var mobileselector = document.querySelector(' [data-attribute="header-search"]');
                            if (window.innerWidth <= 767 && mobileselector) {
                                mobileselector.insertAdjacentHTML("beforeend", newContent);
                            } else {
                                var insertionDiv = document.querySelector(' [data-attribute="header-nav"]');
                                insertionDiv && insertionDiv.insertAdjacentHTML("afterbegin", newContent);
                            }

                        } else if (userType === 'member') {
                            var mobileselector = document.querySelector(' [data-attribute="header-search"]');
                            if (window.innerWidth <= 767 && mobileselector) {
                                mobileselector.insertAdjacentHTML("beforeend", newContent);
                            } else {
                                if (document.querySelector(' [users_type="member"] [data-attribute="header-search"] + [display="flex"] > [display="flex"]')) {
                                    document.querySelector(' [users_type="member"] [data-attribute="header-search"] + [display="flex"] > [display="flex"]').insertAdjacentHTML("afterbegin", newContent);
                                }
                            }
                        }
                    }
                });
            });

            // Start observing the body element for attribute changes
            userTypeObserver.observe(document.body, {
                attributes: true,
                attributeFilter: ['users_type']
            });

        }


        let newContent = `<span class="cre-t-51-new-content-container">How it Works</span>`;

        var icon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
    <path d="M6.74908 14.2382L0 7.48911L1.68727 5.80184L6.74908 10.8637L17.6127 0L19.3 1.68727L6.74908 14.2382Z" fill="#C7A77B"/>
    </svg>`;

        var creT13ModalContent = `
    <div class="cre-t-51-modal-overlay"></div>
<div class="cre-t-51-modal-container">
  
  <div class="cre-t-51-modal-wrapper">
    <div class="cre-t-51-cross">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M2.1868 18L0.452148 16.2L7.39074 9L0.452148 1.8L2.1868 0L9.12538 7.2L16.064 0L17.7986 1.8L10.86 9L17.7986 16.2L16.064 18L9.12538 10.8L2.1868 18Z" fill="#D8DBDF"/>
</svg>
    </div>
  <!-- Swiper container -->
   <div class="cre-t-51-modal-main">
      <div class="desktopopup">
        <div class="cre-t-modal-header">What is First Table?</div>
         <div class="cre-t-51-modal-content">
          <div class="cre-t-51-modal-sub-copy"><b>First Table offers 50% off bookings at top restaurants.</b> Pay a small fee to secure a table and enjoy great dining for half the price.</div>
          <div class="cre-t-51-modal-list-header Cre_Accordion">How it Works</div>
          <div class="cre-t-51-modal-list-items">
            <div class="cre-t-51-modal-list-item">
              <div class="cre-t-51-modal-item-content">
                <span>Explore Restaurants</span>—Find top-rated restaurants near you and try something new.
              </div>
            </div>
            <div class="cre-t-51-modal-list-item">
              
              <div class="cre-t-51-modal-item-content"><span>Book a Table</span>—Pay a small fee to reserve your discounted table. Your reservation is confirmed instantly.</div>
            </div>
            <div class="cre-t-51-modal-list-item">
            
              <div class="cre-t-51-modal-item-content"><span>Enjoy 50% Off</span>—Get the same great food and service for half the price.</div>
            </div>
          </div>
          <div class="cre-t-51-modal-nohidefree">No hidden fees. Just great food at half the price.</div>
          <div class="cre-t-51-modal-lWhy_Restaurants Cre_Accordion">Why Restaurants <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007713/vector_67efae1c20173.svg"> First Table</div>
          <div class="cre-t-51-modal-paragraph">Restaurants love First Table because it fills their empty tables and brings in new customers. You'll get the <b>same great food and service</b>—no cut corners, just a win-win for everyone.</div>
          <div class="cre-t-51-modal-reviewsection">
             <div class="cre-t-51-modal-reviewicon"><img src="https://cdn-3.convertexperiments.com/uf/10007679/10007713/group-10_67efae29ecdee.svg"></div>
              <p> "The service was exceptional, and the food was top-notch even with the discount."<p>
          </div>
          <div class="cre-t-51-modal-lWhy-Common-Questions">
           <div class="Cre_heading_wuestions Cre_Accordion"> Common Questions</div>
             <div class="cre-t-51-modal-questionstab">
                <p>Will my booking be honoured?</p>
                <p>Yes! Your reservation is confirmed instantly and the restaurant knows you're coming.</p>
             </div>
             <div class="cre-t-51-modal-questionstab">
                <p>Do restaurants limit what I can order?</p>
                <p>The menu and any conditions are always clear upfront, so you know exactly what to expect.</p>
             </div>
               <div class="cre-t-51-modal-questionstab">
                <p>Is First Table legit?</p>
                <p>Trusted by over 2,000,000 diners and 2,500+ restaurants globally. We monitor restaurant quality and only work with reputable venues.</p>
             </div>
              <div class="cre-t-51-modal-faqcta"> <a href="https://www.firsttable.co.nz/frequently-asked-questions">See all FAQs</a></div>
          </div>
        </div>
        </div>
<div class="mobile_popup">
  <div class="cre-t-51-cross-mobile">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M2.1868 18L0.452148 16.2L7.39074 9L0.452148 1.8L2.1868 0L9.12538 7.2L16.064 0L17.7986 1.8L10.86 9L17.7986 16.2L16.064 18L9.12538 10.8L2.1868 18Z" fill="#D8DBDF"></path>
</svg>
    </div>
  <div class="swiperslidermain swiper">
<div class="swiper-wrapper">
  <div class="swiper-slide Cre_item">
    <div class="cre-t-51-modal-list-header Cre_Accordion">How it Works</div>
    <div class="cre-t-51-modal-sub-copy"><b>First Table offers 50% off bookings at top restaurants.</b> Pay a small fee to secure a table and enjoy great dining for half the price.</div>
    <div class="cre-t-51-modal-list-items">
      <div class="cre-t-51-modal-list-item">
        <div class="cre-t-51-modal-item-content">
          <span>Explore Restaurants</span>—find top-rated restaurants near you and try something new.
        </div>
      </div>
      <div class="cre-t-51-modal-list-item">
        <div class="cre-t-51-modal-item-content">
          <span>Book a Table</span>—pay a small fee to reserve your discounted table. Your reservation is confirmed instantly.
        </div>
      </div>
      <div class="cre-t-51-modal-list-item">
        <div class="cre-t-51-modal-item-content">
          <span>Enjoy 50% Off</span>—get the same great food and service for half the price.
        </div>
      </div>
    </div>
  </div>
  <div class="swiper-slide Cre_item">
    <div class="cre-t-51-modal-lWhy_Restaurants Cre_Accordion">
      Why Restaurants
      <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007713/vector_67efae1c20173.svg">
      First Table
    </div>
    <div class="cre-t-51-modal-paragraph">
      Restaurants love First Table because it fills their empty tables and brings in new customers.
      You'll get the <b>same great food and service—no</b> cut corners, just a win-win for everyone.
    </div>
    <div class="cre-t-51-modal-reviewsection">
      <div class="cre-t-51-modal-reviewicon">
        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007713/group-10_67efae29ecdee.svg">
      </div>
      <p>"The service was exceptional, and the food was top-notch even with the discount."</p>
    </div>
  </div>
  <div class="swiper-slide Cre_item">
    <div class="cre-t-51-modal-lWhy-Common-Questions">
      <div class="Cre_heading_wuestions Cre_Accordion">Common Questions</div>
      <div class="cre-t-51-modal-questionstab">
        <p>Will my booking be honoured?</p>
        <p>Yes! Your reservation is confirmed instantly and the restaurant knows you're coming.</p>
      </div>
      <div class="cre-t-51-modal-questionstab">
        <p>Do restaurants limit what I can order?</p>
        <p>The menu and any conditions are always clear upfront, so you know exactly what to expect.</p>
      </div>
      <div class="cre-t-51-modal-questionstab">
        <p>Is First Table legit?</p>
        <p>Trusted by over 2,000,000 diners and 2,500+ restaurants globally. We monitor restaurant quality and only work with reputable venues.</p>
      </div>
      <div class="cre-t-51-modal-faqcta">
        <a href="https://www.firsttable.co.nz/frequently-asked-questions">See all FAQs</a>
      </div>
    </div>
  </div>
  </div>
</div>
<!-- Add Pagination & Navigation if needed -->
 
</div>
<div class="cre_fixed_footer">
<div class="swiper-pagination"></div>
<div class="cre-t-51-modal-button">OK, got it</div>
</div>
</div>
</div>
</div>
    `;

        // Function to inject modal into the DOM
        function injectModal() {
            // Only inject if it doesn't already exist
            if (!document.querySelector(".cre-t-51-modal-container")) {
                const modalWrapper = document.createElement('div');
                modalWrapper.className = 'cre-t-51-modal-wrapper-container';
                modalWrapper.innerHTML = creT13ModalContent;
                document.body.appendChild(modalWrapper);

                // Initialize event listeners for the newly added modal
                addModalEventListeners();

                // Initialize Swiper if mobile view
                if (window.innerWidth <= 768) {
                    waitForSwiper(initializeSwiper);
                }

                // Add open class to show modal
                document.body.classList.add("cre-t-51-modal-open");
            } else {
                // If modal already exists, just show it
                document.body.classList.add("cre-t-51-modal-open");
            }
        }

        // Function to remove modal from the DOM
        function removeModal() {
            const modalWrapper = document.querySelector('.cre-t-51-modal-wrapper-container');
            if (modalWrapper) {
                // First remove the open class
                document.body.classList.remove("cre-t-51-modal-open");

                // Use setTimeout to add a slight delay before removing from DOM
                // This allows for any CSS transitions to complete
                setTimeout(() => {
                    modalWrapper.remove();
                }, 300);
            }
        }

        // Add event listeners for the modal
        function addModalEventListeners() {
            // Close modal with X button
            const closeButtons = document.querySelectorAll('.cre-t-51-cross, .cre-t-51-cross-mobile');
            closeButtons.forEach(button => {
                button.addEventListener('click', removeModal);
            });

            // Close with overlay click
            const overlay = document.querySelector('.cre-t-51-modal-overlay');
            if (overlay) {
                overlay.addEventListener('click', removeModal);
            }

            // Close with "OK, got it" button
            const okButton = document.querySelector('.cre-t-51-modal-button');
            if (okButton) {
                okButton.addEventListener('click', removeModal);
            }

            // Toggle sections
            const toggleHeaders = document.querySelectorAll('.cre-t-51-modal-list-header, .cre-t-51-modal-lWhy_Restaurants, .Cre_heading_wuestions');
            toggleHeaders.forEach(header => {
                header.addEventListener('click', function () {
                    if (this.classList.contains('cre-t-51-modal-list-header')) {
                        this.classList.toggle('cre-t-51-modal-open');
                    } else if (this.classList.contains('cre-t-51-modal-lWhy_Restaurants')) {
                        this.classList.toggle('cre-t-51-Why_Restaurants');
                    } else if (this.classList.contains('Cre_heading_wuestions')) {
                        this.classList.toggle('cre-t-51-heading_wuestions');
                    }
                });
            });
        }

        function initializeSwiper() {
            new Swiper(".swiperslidermain", {
                loop: false,
                slidesPerView: 1,
                spaceBetween: 20,
                autoHeight: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                a11y: {
                    enabled: false // This disables aria-live and related attributes
                }
            });
        }

        // all the changes based on our targeted modal and social login present or not 
        function updateChanges() {
            observeSelector('[data-attribute="header-search"]', () => {
                waitForElement(' [data-attribute="header-nav"] ,  [users_type="member"] [data-attribute="header-search"] + [display="flex"] > [display="flex"]', function () {
                    var insertionDiv = document.querySelector(' [data-attribute="header-nav"]');
                    var insertionDiv2 = document.querySelector(' [users_type="member"] [data-attribute="header-search"] + [display="flex"] > [display="flex"]');
                    var creT13NewContent = document.querySelector(".cre-t-51-new-content-container");
                    var mobileselector = document.querySelector(' [data-attribute="header-search"]');
                    if ((insertionDiv || insertionDiv2 || mobileselector) && !creT13NewContent) {
                        if (window.innerWidth <= 767 && mobileselector) {
                            mobileselector.insertAdjacentHTML("beforeend", newContent);
                        } else if (insertionDiv) {
                            insertionDiv.insertAdjacentHTML("afterbegin", newContent);
                        } else if (insertionDiv2) {
                            insertionDiv2.insertAdjacentHTML("afterbegin", newContent);
                        }
                    }
                });
            });

            // Add click event for "How it Works" link
            document.addEventListener("click", function (e) {
                if (e.target.classList.contains("cre-t-51-new-content-container")) {
                    injectModal();
                    window._conv_q = window._conv_q || [];
                    _conv_q.push(["triggerConversion", "100035661"]);
                }

                if (e.target.classList.contains("cre-t-51-cross") ||
                    e.target.closest("div")?.classList.contains("cre-t-51-cross") ||
                    e.target.classList.contains("cre-t-51-modal-button")) {
                    if (document.body.getAttribute("user_type") === "new_account") {
                        document.body.removeAttribute("user_type");
                    }
                    removeModal();
                }


                if (e.target.classList.contains("cre-t-51-modal-overlay")) {
                    removeModal();
                }
            });

            mutationObserverForUseUSerType();

            if (getCookie("modalShown") != "true") {
                window.addEventListener("scroll", checkVisibility);
            }
        }

        addScript();

        /* Variation Init */
        function init() {
            document.body.classList.add(variation_name);
            // initiate the observer only once 
            if (!window.creT52bserver) {
                window.creT52bserver = true;
                updateChanges();
            }
        }

        // checkVisibility();

        /* Initialise variation */
        waitForElement("[data-attribute='header-logo']", init);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();