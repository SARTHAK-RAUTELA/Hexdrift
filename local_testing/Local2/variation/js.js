(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "TT-159";
        /* all Pure helper functions */
        function waitForElement(selector, trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function () {
                if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function () {
                clearInterval(interval);
            }, delayTimeout);
        }
        function addLiveEventListener(selector, event, callback, context) {
            // Helper for enabling IE 8 event bindings
            function addEvent(el, type, handler) {
                if (el.attachEvent) el.attachEvent('on' + type, handler);
                else el.addEventListener(type, handler);
            }
            // Matches polyfill
            this.Element && function (ElementPrototype) {
                ElementPrototype.matches = ElementPrototype.matches ||
                    ElementPrototype.matchesSelector ||
                    ElementPrototype.webkitMatchesSelector ||
                    ElementPrototype.msMatchesSelector ||
                    function (selector) {
                        var node = this,
                            nodes = (node.parentNode || node.document).querySelectorAll(selector),
                            i = -1;
                        while (nodes[++i] && nodes[i] != node);
                        return !!nodes[i];
                    };
            }(Element.prototype);
            // Live binding helper using matchesSelector
            function live(selector, event, callback, context) {
                addEvent(context || document, event, function (e) {
                    var found, el = e.target || e.srcElement;
                    while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
                    if (found) callback.call(el, e);
                });
            }
            live(selector, event, callback, context);
        }
        var thumbtechservices = `
            <div class="thumbtechservices bg-white bmhidesection">
                <h2 class="bmheading Type_title5__FuNNq">Popular services near you.</h2>
                <div class="bm-item">
                    <li title="House cleaning"><a href="https://www.thumbtack.com/instant-results/?zip_code=90066&keyword_pk=102906936611670860&project_pk=517046450169815067"><img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT159/spray-bottle.svg"> <p>House <br>cleaning</p></a></li>
                    <li title="Handyman"><a href="https://www.thumbtack.com/instant-results/?zip_code=90066&keyword_pk=102906936628587357&project_pk=516161021990002698"><img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT+-+144+%7C+HP+Hero+Redesign/DIY-Effort_Icon_%C2%B7_Medium.png" > <p>Handyman <br> <span>j</span></p></a></li>
                    <li title="Local electricians" ><a href="https://www.thumbtack.com/instant-results/?zip_code=90066&keyword_pk=367799061344665605&project_pk=517046561932238849"><img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT+-+144+%7C+HP+Hero+Redesign/Energy_Icon_%C2%B7_Medium.png"> <p>Electrical and <br> wiring repair</p></a></li>
                    <li><a href="https://www.thumbtack.com/instant-results/?zip_code=90066&keyword_pk=108249668856752917&project_pk=517046758073319441"><img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT+-+144+%7C+HP+Hero+Redesign/Brush_Icon_%C2%B7_Medium-1.png"> <p>Interior<br> painting</p></a></li>
                    <li><a href="https://www.thumbtack.com/instant-results/?zip_code=90066&keyword_pk=228629991346899932&project_pk=517046785496023060"><img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT+-+144+%7C+HP+Hero+Redesign/Trash_Icon_%C2%B7_Medium.png"> <p>Junk <br> removal</p></a></li>
                    <li><a href="https://www.thumbtack.com/instant-results/?zip_code=90066&keyword_pk=367799060310671361&project_pk=517046805709824017"><img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT+-+144+%7C+HP+Hero+Redesign/Dolly_Icon_%C2%B7_Medium.png"> <p>Local moving<br> (under 50 miles)</p></a></li>
                    <li class="bmhideservice"><a href="https://www.thumbtack.com/instant-results/?zip_code=90066&keyword_pk=367799053227180037&project_pk=517046842712686592"><img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT+-+144+%7C+HP+Hero+Redesign/Repair-Support_Icon_%C2%B7_Medium.png"> <p>Appliance repair or maintenance</p></a></li>
                    <li class="bmhideservice"><a href="https://www.thumbtack.com/instant-results/?zip_code=90066&keyword_pk=367799059811311616&project_pk=517046868953260048"><img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT+-+144+%7C+HP+Hero+Redesign/Preview-Carousel_Icon_%C2%B7_Medium.png"> <p>Floor installation or replacement</p></a></li>
                </div>
            </div>
        `;
        var reviews = `
            <div class="reviewsection desktop">
                <p> Trusted by +4.5M people &nbsp;•&nbsp; 4.9/5 <span><img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT+-+144+%7C+HP+Hero+Redesign/Star-Filled_Icon_%C2%B7_Small.png"></span> with over 300k reviews on the App Store</p>
                <img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT159/Mask+group.svg">
                </div>
        `;
        var mobilereviews = `
            <div class="reviewsection mobile">
                <p> Trusted by +4.5M people <span>4.9/5 <img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT+-+144+%7C+HP+Hero+Redesign/Star-Filled_Icon_%C2%B7_Small.png">with over 300k reviews on the App Store</span></p>
            </div>
        `;
        var imagesforappsection = ` <img src="https://production-next-images-cdn.thumbtack.com/i/511992410826965002/width/400.png">`;
        var heroheading =
            `<div class="thmobilebanner"><img src="//cdn.optimizely.com/img/20611073899/2b43f5d6b9954b86a2a9df7fd4b9f96e.png"></div>
        <h1 class="mb5  homepage-hero_heavy">
            <div class="homepage-hero_textCarousel">
                <ul class="homepage-hero_scroll">
                    <li>Home improvement,</li>
                    <li>Home repair,</li>
                    <li>Home inspection,</li>
                    <li>Home cleaning,</li>
                    <li>Home improvement,</li>
                </ul>
            </div>
            <br>made easy.
        </h1> `;
        /* Variation Init */
        function init() {
            if(window.innerWidth >= 700){
                document.querySelector("body").classList.add(variation_name);
            // waitForElement('form[class*="search-bar-form_root"] input[data-test="search-input"]', function () {
            //     document.querySelector('form[class*="search-bar-form_root"] input[data-test="search-input"]').setAttribute("placeholder", "What’s on your to-do list?")
            // }, 50, 15000)
            // waitForElement('[class*="homepage-hero_mainSection"] [class*="homepage-hero_mobileSearchBar"] [class*="faux-search-input_root"]', function () {
            //     document.querySelector('[class*="homepage-hero_mainSection"] [class*="homepage-hero_mobileSearchBar"] [class*="faux-search-input_root"] span.truncate').innerHTML = "What’s on your to-do list?"
            // }, 50, 15000)
            var textValuesToCheck = ['Popular services in'];
            var elementsToModify = document.querySelectorAll('[class*="Type_title"]');
            elementsToModify.forEach((element) => {
                var fullTextContent = element.textContent.trim();
                if (textValuesToCheck.some(value => fullTextContent.startsWith(value))) {
                    var parentElement = element.closest('.bg-white');
                    if (parentElement) {
                        parentElement.classList.add('bmhidesection');
                    }
                }
            });
            if (document.querySelector('.bmhidesection [class*="Type_title5"]')) {
                if (!document.querySelector(".thumbtechservices")) {
                    document.querySelector('.bmhidesection [class*="Type_title5"]').insertAdjacentHTML('afterend', thumbtechservices);
                }
            } else {
                var rootSiblingElement = document.querySelector('[data-testid="root"] + div');
                if (rootSiblingElement) {
                    if (!document.querySelector(".thumbtechservices")) {
                        rootSiblingElement.insertAdjacentHTML('afterend', thumbtechservices);
                    }
                } else {
                    var customerHeaderSiblingElement = document.querySelector('[class*="composable-customer-header"] + div');
                    if (customerHeaderSiblingElement) {
                        if (!document.querySelector(".thumbtechservices")) {
                            customerHeaderSiblingElement.insertAdjacentHTML('afterend', thumbtechservices);
                        }
                    }
                }
            }
            // Putting new heading
            waitForElement('[class*="homepage-hero_heavy"]', function () {
                var heroElement = document.querySelector('[class*="homepage-hero_heavy"]');
                if (!document.querySelector('.thmobilebanner')) {
                    heroElement.insertAdjacentHTML('afterend', heroheading);
                }
            }, 50, 15000);
            waitForElement('#uniqueId4 ~ [class*="search-bar_zipCodeError"]', function () {
                if (!document.querySelector(".reviewsection.desktop")) {
                    document.querySelector('#uniqueId4 ~ [class*="search-bar_zipCodeError"]').insertAdjacentHTML('afterend', reviews);
                }
            }, 50, 15000);
            // waitForElement('#uniqueId4 ~ [class*="search-bar_zipCodeError"]', function () {
            //  if (!document.querySelector('.reviewsection.mobile')) {
            //      document.querySelector('#uniqueId4 ~ [class*="search-bar_zipCodeError"]').insertAdjacentHTML('afterend', mobilereviews);
            //  }
            // }, 50, 15000);
            // Get the zip code value from the input field
            waitForElement('[class*="search-bar_zipCodeInput"]', function () {
                var zipCode = document.querySelector('[class*="search-bar_zipCodeInput"]').value;
                // Select all the links inside the thumbtechservices div
                var links = document.querySelectorAll('.thumbtechservices a');
                // Loop through each link and replace the zip code in the href attribute
                links.forEach(function (link) {
                    var href = link.getAttribute('href');
                    href = href.replace(/zip_code=([0-9]+)/, 'zip_code=' + zipCode);
                    link.setAttribute('href', href);
                });
            }, 50, 15000);
            }
            
        }
        function thumbtackTest159(list, observer) {
            list.getEntries().forEach((entry) => {
                if (entry.entryType === "mark" && entry.name === "afterHydrate") {
                    observer.disconnect();
                    clearInterval(test144Interval);
                    waitForElement("body", init, 50, 15000);
                    window.isHydrated = true;
                }
            });
        }
        if (!window.isHydrated) {
            var test144Interval = setInterval(function () {
                waitForElement("body", init, 50, 15000);
            }, 50);
            setTimeout(function () {
                clearInterval(test144Interval);
            }, 3000);
            const observer = new PerformanceObserver(thumbtackTest159);
            observer.observe({ entryTypes: ["mark"] });
        } else {
            waitForElement("body", init, 50, 15000);
        }
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();
