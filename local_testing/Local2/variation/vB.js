(function () {
    try {
        /* main variables */
        var debug = 1;
        var variation_name = "TT-179";

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

        function updateOverviewSectionPosition() {
            waitForElement('section#ServicePageBusinessInfoSection>div>div:last-child>div:first-child', function () {
                let overviewSection = document.querySelector('section#ServicePageBusinessInfoSection>div>div:last-child>div:first-child');
                document.querySelector('#ServicePageHeaderSection').insertAdjacentElement('afterend', overviewSection)
            })
        }

        function init() {
            if (!document.querySelector('body').classList.contains(variation_name)) {
                document.querySelector('body').classList.add(variation_name);
                observeSelector('section#ServicePageBusinessInfoSection>div>div:last-child', updateOverviewSectionPosition)
            }

        }

        waitForElement('body', init)

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();