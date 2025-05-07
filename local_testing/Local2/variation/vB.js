window.expLibraryDataQueue = window.expLibraryDataQueue || [];
window.expLibraryDataQueue.push({
    CRE_EXP_T90: {
        var: {
            tagConfigs: [
                {
                    selector: `html[lang="en"] body[data-path*="/book-trips-holiday"] [data-crid*="tour_entry_ticket"] [data-crid="product_card_image"]`,
                    content: `<div class="tagContainerT90">
                                <span>Ticket</span>
                                <div class="tooltip-90">
                                   <div class="tooltip-90-heading">Entry Tickets</div>
                                   <div class="tooltip-90-content">Fast access to top attractions</div>
                                </div>
                              </div>`
                },
                {
                    selector: `html[lang="en"] body[data-path*="/book-trips-holiday"] [data-crid*="tour_singleday"] [data-crid="product_card_image"]`,
                    content: `<div class="tagContainerT90">
                                <span>Day Tour</span>
                                <div class="tooltip-90">
                                  <div class="tooltip-90-heading">Day Tours</div>
                                  <div class="tooltip-90-content">Guided single-day adventures</div>
                                </div>
                             </div>`
                },
                {
                    selector: `html[lang="en"] body[data-path*="/book-trips-holiday"] [data-crid*="tour_multiday"] [data-crid="product_card_image"]`,
                    content: `<div class="tagContainerT90">
                    <span>Multi-Day</span>
                    <div class="tooltip-90">
                      <div class="tooltip-90-heading">Multi-Day Tours</div>
                      <div class="tooltip-90-content">Extended trips with guides and hotels</div>
                    </div>
                              </div>`
                },
                {
                    selector: `html[lang="en"] body[data-path*="/book-trips-holiday"] [data-crid*="tour_package"] [data-crid="product_card_image"]`,
                    content: `<div class="tagContainerT90">
                    <span>Package</span>
                    <div class="tooltip-90">
                      <div class="tooltip-90-heading">Vacation Packages</div>
                      <div class="tooltip-90-content">Stays, tours, and a customizable itinerary</div>
                    </div>
                    </div>`
                },
                {
                    selector: `html[lang="en"] body[data-path*="/book-trips-holiday"] [data-crid*="tour_selfdrive"] [data-crid="product_card_image"]`,
                    content: `<div class="tagContainerT90">
                    <span>Self-Drive</span>
                    <div class="tooltip-90">
                      <div class="tooltip-90-heading">Self-Drive Tours</div>
                      <div class="tooltip-90-content">Car, hotels, customizable tours and itineraries</div>
                    </div>
                    </div>`
                },
                {
                    selector: `html[lang="en"] body[data-path*="/book-trips-holiday"] [data-crid*="tour_transfer"] [data-crid="product_card_image"]`,
                    content: `<div class="tagContainerT90">
                    <span>Transfer</span>
                    <div class="tooltip-90">
                      <div class="tooltip-90-heading">Transfers</div>
                      <div class="tooltip-90-content">Convenient and reliable transportation</div>
                    </div></div>`
                },
                {
                    selector: `html[lang="en"] body[data-path*="/book-trips-holiday"] [data-crid*="tour_private"] [data-crid="product_card_image"]`,
                    content: `<div class="tagContainerT90">
                    <span>Private Tour</span>
                    <div class="tooltip-90">
                      <div class="tooltip-90-heading">Private Tours</div>
                      <div class="tooltip-90-content">Private guide, transport, and tailored experiences</div>
                    </div>
                    </div>`
                },
                {
                    selector: `html[lang="en"] body[data-path*="/book-trips-holiday"] [data-crid*="tour_shore_excursions"] [data-crid="product_card_image"]`,
                    content: `<div class="tagContainerT90">
                    <span>Shore-Trip</span>
                    <div class="tooltip-90">
                      <div class="tooltip-90-heading">Shore Excursions</div>
                      <div class="tooltip-90-content">Tours with harbor pickup for cruise passengers</div>
                    </div></div>`
                },
            ],
        },
        enable_DEBUG: true, // For debugging
        initOnce: false, // False if events need to be added multiple times

        // Attach event handlers Please do not call this function anywhere. This will automatically call from library
        attachEventHandlers() {
            window.addEventListener('travelshift:routeChangeComplete', e => {
                if (!window._travelshift.experiments.some(
                    exp => exp.name === "T90_TOUR_TYPES_EXPERIMENT" && exp.variation === "1"
                )) {
                    (window._travelshift.experiments = window._travelshift.experiments || []).push({ name: 'T90_TOUR_TYPES_EXPERIMENT', variation: "1" });
                }
                this.init();
            });
            this.observeSelector('a[data-crid*="product_card"]', (element) => {
                this.appendHtml();
            });

            // SINGLE optimized event handler for all tag interactions
            document.addEventListener('click', (event) => {
                console.log(event.target)
                // Check if click originated from a tag container or its children
                const tagContainer = event.target.closest('.tagContainerT90');

                if (tagContainer) {
                    // Handle tag container click
                    event.preventDefault();
                    event.stopPropagation();

                    // Get all current tag containers (fresh query to include dynamic elements)
                    const allTags = document.querySelectorAll('.tagContainerT90');

                    // Remove class from all others
                    allTags.forEach(tag => {
                        if (tag !== tagContainer) {
                            tag.classList.remove('hover-effect_t90');
                        }
                    });

                    // Toggle class on clicked element
                    tagContainer.classList.toggle('hover-effect_t90');
                } else {
                    // Click was outside any tag container - remove all hover effects
                    document.querySelectorAll('.tagContainerT90').forEach(tag => {
                        tag.classList.remove('hover-effect_t90');
                    });
                }
            });
        },
        appendHtml() {
            this.var.tagConfigs.forEach(({ selector, content }) => {
                document.querySelectorAll(selector).forEach(element => {
                    if (!element.querySelector(".tagContainerT90")) {
                        element.insertAdjacentHTML("beforeend", content);
                    }
                });
            });
        },
        // Initialize the experiment
        init() {
            // Example: Run a callback when the body is available
            if (window.location.href.includes("https://guidetoiceland.is/book-trips-holiday")) {
                if (!window._travelshift.experiments.some(
                    exp => exp.name === "T90_TOUR_TYPES_EXPERIMENT" && exp.variation === "1"
                )) {
                    (window._travelshift.experiments = window._travelshift.experiments || []).push({ name: 'T90_TOUR_TYPES_EXPERIMENT', variation: "1" });
                }
            }

        },
    },
});