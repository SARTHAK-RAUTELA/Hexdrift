(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "TT-148";
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
           this && this.Element && function (ElementPrototype) {
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

        /* Variation Init */
        function init() {
            document.querySelector("body").classList.add(variation_name);

            function wrapDivs() {
                // Select the starting div with class bmhidesection
                var startDiv = document.querySelector('[class*="Wrap_root"] + [class*="pro-list-results-front-door"]');
                if (!startDiv) return; // Exit if starting div is not found

                // Texts to match
                var textsToMatch = [
                    'Why hire professionals on Thumbtack?',
                    'Q & A',
                    'Reviews for '
                ];

                // Select the next sibling divs after startDiv until we wrap 4 valid divs
                var siblingDivs = [];
                var currentDiv = startDiv.nextElementSibling;
                while (currentDiv && siblingDivs.length < 4) {
                    if (currentDiv.tagName === 'DIV' && !currentDiv.classList.contains('wrapped-divs')) {
                        var divText = currentDiv.textContent.trim();
                        if (textsToMatch.some(text => divText.includes(text))) {
                            siblingDivs.push(currentDiv);
                        }
                    }
                    currentDiv = currentDiv.nextElementSibling;
                }

                // Create a new parent div if we have valid sibling divs
                if (siblingDivs.length > 0) {
                    var newParentDiv = document.createElement('div');
                    newParentDiv.className = 'wrapped-divs'; // Assign a class to the new parent div for styling purposes

                    // Append the selected divs to the new parent div
                    siblingDivs.forEach(function (div) {
                        newParentDiv.appendChild(div);
                    });

                    // Insert the new parent div after startDiv
                    startDiv.parentNode.insertBefore(newParentDiv, startDiv.nextSibling);
                }

                // Check if the .wrapped-divs element is empty, then remove it
                var wrappedDiv = document.querySelector('.wrapped-divs');
                if (wrappedDiv && !wrappedDiv.hasChildNodes()) {
                    wrappedDiv.parentNode.removeChild(wrappedDiv);
                }
            }
            waitForElement('[class*="Wrap_root"] + [class*="pro-list-results-front-door"]', function () {
                wrapDivs()
            }, 50, 15000);


            addLiveEventListener('button[class*="themed_themedButtonRoundedBordersRight"]', "click", function (event) {
                event.preventDefault()
                event.stopImmediatePropagation()
                setTimeout(() => {
                    document.querySelector('[data-test="hero-filters-cta"]').click()
                }, 200);
            });
        }
        /* Initialise variation */
        function thumbtackTest144(list, observer) {
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
            const observer = new PerformanceObserver(thumbtackTest144);
            observer.observe({ entryTypes: ["mark"] });
        } else {
            waitForElement('button[class*="themed_themedButtonRoundedBordersRight"]', init, 50, 15000);
        }
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();


// To buypass TT-124/variation1
(() => {
    var __defProp = Object.defineProperty;
    var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

    // lib/bm-js/lib/index.js
    var waitFor = /* @__PURE__ */ __name((check, invoke, poll) => {
        if (check()) {
            invoke();
            return;
        }
        let polling = setInterval(() => {
            try {
                if (check()) {
                    invoke();
                    clearInterval(polling);
                    polling = null;
                }
            } catch (e) {
                console.info("listener not processed");
            }
        }, poll.interval);
        setTimeout(() => {
            if (!polling)
                return;
            clearInterval(polling);
            console.info("render listener timeout", poll);
            window.evolvRenderTimeout = {
                msg: "evolv render listener timeout",
                poll
            };
        }, poll.duration);
    }, "waitFor");
    var $refs = /* @__PURE__ */ __name((selector) => {
        if (!selector) {
            console.error(`Invalid selector!`);
            return;
        }
        const els = document.querySelectorAll(selector);
        if (!els || !els.length) {
            console.error(`Selector ${selector} does not exist in DOM!`);
            return;
        }
        return els;
    }, "$refs");
    var $addClass = /* @__PURE__ */ __name((selector, classes) => {
        if (!classes) {
            console.error("Atleast one class is required!");
            return;
        }
        const elements = $refs(selector);
        if (!elements)
            return;
        if (Array.isArray(classes)) {
            elements.forEach((el) => {
                el.classList.add(...classes);
            });
            return;
        }
        if (typeof classes === "string") {
            elements.forEach((el) => {
                el.classList.add(classes);
            });
        }
    }, "$addClass");
    var $live = /* @__PURE__ */ __name((selector, event, callback, context) => {
        const addEvent = /* @__PURE__ */ __name((el, type, handler) => {
            if (el.attachEvent) {
                el.attachEvent("on" + type, handler);
            } else {
                el.addEventListener(type, handler);
            }
        }, "addEvent");
        if (Element.prototype.matches === void 0) {
            Element.prototype.matches = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.msMatchesSelector || function (selector2) {
                let node = this;
                let nodes = (node.parentNode || node.document).querySelectorAll(
                    selector2
                );
                let i = -1;
                while (nodes[++i] && nodes[i] != node)
                    ;
                return !!nodes[i];
            };
        }
        const liveBinding = /* @__PURE__ */ __name((selector2, event2, callback2, context2) => {
            addEvent(context2 || document, event2, function (e) {
                let found;
                let el = e.target || e.srcElement;
                while (el && el.matches && el !== context2 && !(found = el.matches(selector2)))
                    el = el.parentElement;
                if (found)
                    callback2.call(el, e);
            });
        }, "liveBinding");
        liveBinding(selector, event, callback, context);
    }, "$live");

    // src/Thumbtack/Thumbtack-TT-124/variation1/index.js
    document.addEventListener("readystatechange", (event) => {
        if (document.readyState === "complete") {
            $addClass("body", "Thumbtack-TT-124_1");
            waitFor(
                () => document.querySelector("[class*=pro-list-results-front-door_loadMoreSection]>div>div>a,.m_absolute .bg-white form > div:nth-child(2) [aria-label='Select a service']") ? true : false,
                () => {
                    var isCloneChanges = false;
                    var dropdown = document.querySelector('[class*=Dropdown_select][aria-label="Select a service"]');
                    if (dropdown) {
                        var e = new Event("change", { bubbles: true });
                        var randomIndex = Math.floor(Math.random() * (dropdown.options.length - 1)) + 1;
                        dropdown.value = dropdown.options[randomIndex].value;
                        dropdown.dispatchEvent(e);
                    }
                    var urlElement = document.querySelector("[class*=pro-list-results-front-door_loadMoreSection]>div>div>a");
                    if (urlElement) {
                        var url = urlElement.getAttribute("href");
                        var pattern = /(.+zip_code=\d+)/;
                        let match = url.match(pattern);
                        if (match) {
                            let extractedPart = match[1];
                            var completeURL = "https://www.thumbtack.com" + extractedPart;
                            $live('.m_absolute .bg-white form [data-test="hero-filters-cta"] span', "click", function (event2) {
                                if (!isCloneChanges) {
                                    event2.preventDefault();
                                    if (completeURL) {
                                        window.location.href = completeURL;
                                    }
                                }
                            });
                        }
                    } else {
                        var keyword_pk = window.__NEXT_DATA__.props.pageProps.frontDoorPage.heroSection.filterSubsection.cta.keywordPk;
                        var zipCodeInput = document.getElementById("zip-code");
                        var zipCodeValue = zipCodeInput.value;
                        console.log(keyword_pk);
                        var dynamicURL = `https://www.thumbtack.com/instant-results/?keyword_pk=${keyword_pk}&zip_code=${zipCodeValue}`;
                        console.log(dynamicURL);
                        $live('.m_absolute .bg-white form [data-test="hero-filters-cta"] span', "click", function (event2) {
                            if (!isCloneChanges) {
                                event2.preventDefault();
                                if (dynamicURL) {
                                    window.location.href = dynamicURL;
                                }
                            }
                        });
                    }
                    var originalElement = document.querySelector('.m_absolute .bg-white form > div:nth-child(2) [aria-label="Select a service"]');
                    if (originalElement) {
                        var originalParentElement = document.querySelector(".m_absolute .bg-white form > div:nth-child(2)");
                        var clonedElement = originalParentElement.cloneNode(true);
                        clonedElement.classList.add("tt-124-select");
                        originalParentElement.style.display = "none";
                        document.querySelector(".m_absolute .bg-white form > div:nth-child(1)").insertAdjacentElement("afterend", clonedElement);
                        var clonedSelect = clonedElement.querySelector("select");
                        clonedSelect.addEventListener("change", function () {
                            var originalElement2 = document.querySelector(".m_absolute .bg-white form > div:nth-child(3)");
                            var originalSelect = originalElement2.querySelector("select");
                            isCloneChanges = true;
                            originalSelect.value = this.value;
                            originalSelect.dispatchEvent(new Event("change", { bubbles: true }));
                        });
                    }
                },
                {
                    interval: 50,
                    duration: 15e3
                }
            );
        }
    });
})();
