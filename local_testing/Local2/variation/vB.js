// New template code starts here---------------
"use strict";
(function (initialObject, version) {
    const globalKey = "expLibraryData";
    // Initialize or update the global object
    window[globalKey] = window[globalKey] || {
        ...initialObject,
        version: 0
    };
    if (window[globalKey].version >= version) return;
    // Update global object with new properties
    Object.assign(window[globalKey], {
        ...initialObject,
        version,
        startTime: Date.now(),
        logs: [],
        tmp: {},
        data: {},
        exp: {},
        defaultCacheTTL: 3600, // Default TTL for caching
    });
    const {
        logs
    } = window[globalKey];
    let sessionErrors = [];
    /**
     * ================================================
     * Error Handling
     * ================================================
     */
    const sendError = (e, ctx) => {
        if (window._travelshift?.captureAbTestException && !ctx.localDevelopment) {
            delete ctx.localDevelopment;
            return window._travelshift.captureAbTestException(e, ctx);
        }
        sessionErrors.push({
            err: e,
            ctx
        });
    };
    /**
     * ================================================
     * Utility Functions
     * ================================================
     */
    // Debounce a function to limit its execution rate
    const debounce = function (func, delay = 300) {
        let timeout;
        return (...args) => {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), delay);
        };
    };
    const handleError = (context, fn, ...args) => {
        try {
            return fn(...args);
        } catch (e) {
            sendError(e, context);
        }
    };
    const inject = (elementsToInject) => {
        if (!elementsToInject || typeof elementsToInject !== "object") return;
        Object.entries(elementsToInject).forEach(([tagName, attributesArray]) => {
            attributesArray.forEach((attributes) => {
                const parent = document.querySelector(attributes.parentSelector || "body");
                if (!parent) return;
                const existingElement = document.querySelector(`${tagName}[src="${attributes.src}"],${tagName}[href="${attributes.href}"]`);
                if (existingElement) return;
                // Validate URLs to prevent XSS
                if (attributes.src && !/^https?:\/\//.test(attributes.src)) return;
                if (attributes.href && !/^https?:\/\//.test(attributes.href)) return;
                const element = document.createElement(tagName);
                Object.entries(attributes).forEach(([key, value]) => {
                    if (key !== "parentSelector") element[key] = value;
                });
                parent.appendChild(element);
            });
        });
    };
    const createObserver = (callback, options = {}, timeout = 10000, errorContext = {}) => {
        const debouncedCallback = debounce(callback, 60);
        const observer = new MutationObserver(debouncedCallback);
        observer.observe(document, options);
        const timeoutId = setTimeout(() => {
            sendError(`Selector not available: "${errorContext?.selector}"`, {
                testId: errorContext?.testName || "Unknown Experiment",
                context: errorContext?.context || "createObserver timeout",
                localDevelopment: errorContext?.localDevelopment,
            });
            observer.disconnect();
        }, timeout);
        return () => {
            clearTimeout(timeoutId);
            observer.disconnect();
        };
    };
    // Function to check hydration state before running code
    const checkHydration = (callback) => {
        const hydrationObserver = function (list, observer) {
            list.getEntries().forEach((entry) => {
                if (entry.entryType === "mark" && entry.name === "afterHydrate") {
                    observer.disconnect();
                    callback();
                }
            });
        };
        // Case 1: If window._travelshift exists and chunks are loaded, execute callback immediately
        if (window._travelshift?.chunksLoadingData?.status === "loaded") {
            setTimeout(function () {
                callback();
            }, 1000)
        } else {
            const observer = new PerformanceObserver(hydrationObserver);
            observer.observe({
                entryTypes: ["mark"]
            });
        }
    };
    // Capture errors
    const captureAbTestExceptionOnLoad = () => {
        if (window._travelshift?.captureAbTestException) {
            sessionErrors.forEach((e) => window._travelshift.captureAbTestException(e));
            sessionErrors = [];
        }
    };
    // Initial load
    captureAbTestExceptionOnLoad();
    // Chunks Loaded
    window.addEventListener("chunksLoaded", () => {
        captureAbTestExceptionOnLoad();
    });
    /**
     * ================================================
     * Library Functions
     * ================================================
     */
    Object.assign(window[globalKey], {
        inject,
        debounce,
        log: function (...args) {
            // Only log if debugging is enabled
            if (!(this.data[args[0]] || {}).enable_DEBUG && !(this.exp[args[0]] || {}).enable_DEBUG) return;
            if (logs.length >= 100) logs.shift(); // Cap logs at 100
            logs.push({
                time: Date.now() - window[globalKey].startTime,
                log: args
            });
            console.log(...args);
        },
        run: function (experimentName) {
            return handleError({
                testId: experimentName,
                context: "run",
                localDevelopment: this.data[experimentName]?.localDevelopment
            }, () => this.data[experimentName]);
        },
        add: function (experiments) {
            checkHydration(() => {
                for (const experimentName in experiments) {
                    const experiment = experiments[experimentName];
                    if (this.data[experimentName]?.initOnce) continue;
                    handleError({
                        testId: experimentName,
                        context: "On Init",
                        localDevelopment: experiment?.localDevelopment
                    }, () => {
                        let alreadyEventAttached = false;
                        if (this.data[experimentName]?.attachEventHandlers) {
                            alreadyEventAttached = true;
                        }
                        this.inject(experiment.inject);
                        this.data[experimentName] = Object.assign(this.template(experimentName), experiment);
                        this.setBodyClass(experimentName);
                        // Attached event listeners
                        if (!alreadyEventAttached) {
                            this.data[experimentName].attachEventHandlers?.();
                        }
                        this.data[experimentName].eventHandlersAttached = true;
                        this.run(experimentName).init(experimentName);
                    });
                }
            });
        },
        setBodyClass: function (testName) {
            if (this.data[testName]?.disableBodyClassSetting) return;
            document.body.classList.add(testName);
        },
        runAt: function (selector, callback, timeout = 10000) {
            let elements = document.querySelectorAll(selector);
            if (elements.length > 0) {
                handleError({
                    testId: this.__testName || "General",
                    context: "runAt callback",
                    localDevelopment: this?.localDevelopment
                }, () => {
                    callback([...elements]);
                });
                return;
            }
            const disconnect = createObserver(
                () => {
                    let elements = document.querySelectorAll(selector);
                    if (elements.length > 0) {
                        disconnect();
                        handleError({
                            testId: this.__testName || "General",
                            context: "runAt callback",
                            localDevelopment: this?.localDevelopment
                        }, () => {
                            callback([...elements]);
                        });
                    }
                }, {
                childList: true,
                subtree: true
            },
                timeout, {
                selector,
                context: "runAt",
                testName: this.__testName || "General",
                localDevelopment: this?.localDevelopment
            }
            );
        },
        observeSelector: function (selector, callback, options = {}) {
            const documentRef = options.document || window.document;
            const processed = new Map();
            let observer;
            let isDone = false;
            const done = () => {
                if (observer) observer.disconnect();
                processed.clear();
                isDone = true;
            };
            const processElement = (el) => {
                handleError({
                    testId: this.__testName || "General",
                    context: "observeSelector callback",
                    localDevelopment: this?.localDevelopment
                }, () => {
                    callback(el);
                });
                if (options.once) {
                    done();
                }
            };
            const lookForSelector = () => {
                const elParent = documentRef.documentElement;
                const elements = elParent.querySelectorAll(selector);
                elements.forEach((el) => processElement(el));
            };
            // Debounce the lookForSelector function
            const debouncedLookForSelector = debounce(lookForSelector, options.debounceDelay || 100);
            lookForSelector();
            if (!isDone) {
                observer = new MutationObserver(() => debouncedLookForSelector());
                observer.observe(documentRef, {
                    attributes: false,
                    childList: true,
                    subtree: true,
                });
            }
            return done;
        },
        live: function (selector, event, callback, context = document) {
            const handler = (e) => {
                handleError({
                    testId: this.__testName,
                    context: `live event for selector: ${selector}`,
                    localDevelopment: this?.localDevelopment
                }, () => {
                    const target = e.target.closest(selector);
                    if (target) callback.call(target, e);
                });
            };
            context.addEventListener(event, handler);
            return () => context.removeEventListener(event, handler);
        },
        getCookie: function (key) {
            return Object.fromEntries(document.cookie.split("; ").map((c) => c.split("=").map(decodeURIComponent)))[key] || null;
        },
        template: function (__testName) {
            return {
                __testName,
                disableBodyClassSetting: false,
                initOnce: true,
                runAt: this.runAt,
                live: this.live,
                log: this.log.bind(this, __testName),
                error: this.log.bind(this, __testName),
                injectElement: this.inject.bind(this),
                observeSelector: this.observeSelector,
                getCookie: this.getCookie,
            };
        },
    });
    /**
     * ================================================
     * Experiment Queue Handling
     * ================================================
     */
    // Automatically activate experiments
    const experimentQueue = window[`${globalKey}Queue`] || [];
    experimentQueue.forEach((experiment) => expLibraryData.add(experiment));
    window[`${globalKey}Queue`] = {
        push(experiment) {
            expLibraryData.add(experiment);
        },
    };
    /**
     * ============================================================
     * Activated Experiments using custom activatino menthod
     * ============================================================
     */
    Object.assign(window[globalKey], {
        exp: window[globalKey].exp || {},
        // Retrieve an experiment by name
        runCustomTrigger: function (experimentName) {
            return handleError({
                testId: experimentName,
                context: "Run Custom Experiment"
            }, () => this.exp[experimentName]);
        },
        // Initialize an experiment
        initializeExperiment: function (experimentData) {
            const {
                name
            } = experimentData;
            if (this.exp[name]) return;
            const newExperiment = Object.assign(this.template(name), experimentData, {
                evaluateConditions: async () => {
                    await this.evaluateExperimentConditions(name);
                },
            });
            this.exp[name] = newExperiment;
            // Initial condition evaluation
            newExperiment.evaluateConditions();
        },
        // Evaluate experiment conditions
        evaluateExperimentConditions: async function (name) {
            const root = document.documentElement;
            const currentExp = this.runCustomTrigger(name);
            if (!currentExp) return;
            // Skip already executed experiments
            if (currentExp.isAlreadyExecuted) return true;
            const triggerCondition = currentExp.conditionToTriggerExperiment == null ? true : await currentExp.conditionToTriggerExperiment();
            // Trigger condition not mattched
            if (!triggerCondition) return false;
            // Check If attribute already added
            if (!root.hasAttribute(name)) {
                root.setAttribute(name, true);
                // Safely execute the experiment callback
                if (typeof currentExp.callBack === "function") {
                    handleError({
                        testId: name,
                        context: "Callback Execution"
                    }, currentExp.callBack);
                }
                currentExp.isAlreadyExecuted = true;
                if (currentExp.experimentId) {
                    this.executeExperiment(currentExp.experimentId);
                }
            }
        },
        // Execute experiment for backend tracking
        executeExperiment: function (experimentId) {
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", experimentId]);
        },
        // Activate a single experiment
        activateExperiment: function (experiment) {
            handleError({
                testId: experiment.name,
                context: "Custom Experiment Activation"
            }, () => {
                const currentExperiment = this.exp[experiment.name];
                if (!currentExperiment) {
                    this.initializeExperiment(experiment);
                } else {
                    currentExperiment.evaluateConditions();
                }
            });
        },
    });
    // Initialize the activation queue
    const experimentActivationQueue = window[`${globalKey}Activation`] || [];
    experimentActivationQueue.forEach((experiment) => window[globalKey].activateExperiment(experiment));
    // Redefine the activation queue
    window[`${globalKey}Activation`] = {
        push(experiment) {
            window[globalKey].activateExperiment(experiment);
        },
    };
})({
    data: {},
    logs: [],
    tmp: {}
}, 1);
// New template code Ends here---------------
//Cro Mode (QA Test cookie)
(function () {
    // Utility Functions
    function setCookie(name, value, options = {}) {
        let {
            duration,
            domain,
            sameSite = 'Lax'
        } = options;
        domain = domain || window.location.hostname.split('.').slice(-2).join('.');
        let expires = '';
        if (duration) {
            let date = new Date();
            date.setTime(date.getTime() + duration * 60 * 60 * 1000);
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = `${name}=${value}; Path=/; Domain=${domain}; SameSite=${sameSite}${expires}`;
    }

    function getCookie(name) {
        let nameEQ = name + '=';
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    // Extract QA mode logic
    function enableQAMode(mode) {
        if (mode === 'qa') {
            // console.log(`CRO Mode enabled: ${mode}`);
            setCookie('cro_mode', mode, {
                duration: 1,
            });
        } else {
            //console.log('CRO Mode disabled');
            setCookie('cro_mode', '', {
                duration: -1,
            });
        }
    }
    // Initialize CRO Mode
    function initCROMode() {
        const urlParams = new URLSearchParams(window.location.search);
        let mode = urlParams.get('cro_mode') || getCookie('cro_mode');
        if (mode === 'qa') {
            enableQAMode(mode);
            //console.log("QA Mode Active");
            // Place any QA mode specific logic here
        } else {
            enableQAMode('');
        }
    }
    initCROMode();
})();
// SPA Snippet From: https://support.convert.com/hc/en-us/articles/205159975-Running-Experiments-on-Single-Page-Apps
// with all console.log commented out
if (!window.globalExecutedTs) {
    function checkURLchange() {
        if (window.location.href + window.location.hash != oldURL) {
            oldURL = window.location.href + window.location.hash;
            // console.log("URL Changed and will fire Convert");
            window._conv_q = _conv_q || [];
            window._conv_q.push(['run', 'true']);
        }
    }
    window.globalExecutedTs = true;
    var oldURL = window.location.href + window.location.hash;
    setInterval(checkURLchange, 100);
}
window.creGoalWatcher =
    window.creGoalWatcher ||
    window.setInterval(() => {
        // Check for dataLayer to exist first
        if ('dataLayer' in window && Array.isArray(window.dataLayer)) {
            // Add to Cart Goal
            if (window.dataLayer.find(({
                event
            }) => event === 'add_to_cart') !== undefined) {
                if (window.creAddToCartGoal === undefined) {
                    window.creAddToCartGoal = 'sent';
                    // console.info("send Add To Cart goal");
                    window._conv_q = window._conv_q || [];
                    _conv_q.push(['triggerConversion', '100031404']);
                }
            }
            // View Item Goal
            if (window.dataLayer.find(({
                event
            }) => event === 'view_item') !== undefined) {
                if (window.creViewItemGoal === undefined) {
                    window.creViewItemGoal = 'sent';
                    // console.info("send View Item goal");
                    window._conv_q = window._conv_q || [];
                    _conv_q.push(['triggerConversion', '100031405']);
                }
            }
        }
    }, 500);
// following code will help in developing the test.
if (document && document.querySelector && document.querySelector('body')) {
    document.querySelector('body').dataset.path = window.location.pathname;
    document.querySelector('body').dataset.url = window.location.href;
    // adding class to Tour_product_page pages
    var element = document.querySelector('#gtivpabtest');
    if (element) {
        // Check if the element is found
        document.body.classList.add('Tour_product_page'); // Add class to the body
    } else {
        document.body.classList.remove('Tour_product_page'); // Remove the class if the element is not found
    }
    const cartWithProducts = document.querySelector('#navBardesktopCart');
    const bodyElement = document.body;
    const multipleItemsClass = 'T7.1_cart_items';
    if (cartWithProducts) {
        const cartContent = cartWithProducts.textContent.trim();
        const itemCount = parseInt(cartContent, 10);
        if (itemCount > 1) {
            bodyElement.classList.add(multipleItemsClass);
            //console.log("Products in cart:", cartContent);
        } else {
            if (bodyElement.classList.contains(multipleItemsClass)) {
                bodyElement.classList.remove(multipleItemsClass);
            }
            // console.log("Less than 2 products in cart.");
        }
    } else {
        // console.error("Cart element not found.");
    }
}
//The code is  below added for the Integrate Convert Experiences with Microsoft Clarity
(function () {
    try {
        /**
         * setup Team
         */
        function waitforclarity(trigger) {
            var interval = setInterval(function () {
                if (window.clarity) {
                    clearInterval(interval);
                    trigger();
                }
            }, 50);
            setTimeout(function () {
                clearInterval(interval);
            }, 15000);
        }
        waitforclarity(function () {
            //setTimeout(function() {
            if (window.convert && window.convert.data.experiments) {
                var refObject = window.convert.data.experiments,
                    key;
                // console.log("Window Convert Data Experiments:", window.convert.data.experiments);
                for (key in window.convert.currentData.experiments) {
                    if (window.convert.currentData.experiments.hasOwnProperty(key)) {
                        var currentExperiment = window.convert.currentData.experiments[key];
                        var curExperimentName = refObject[key] && refObject[key].n ? refObject[key].n : 'unknown experiment name';
                        curExperimentName = curExperimentName.replace('Test #', 'Test ');
                        var curVariant = currentExperiment.variation_name ? currentExperiment.variation_name : 'unknown variant';
                        curVariant = curVariant.replace('Var #', 'Variation ');
                        //console.log("Experiment Name:", curExperimentName);
                        //console.log("Variant Name:", curVariant);
                        clarity('set', 'Exp_Name', curExperimentName);
                        clarity('set', 'Var_Name', curVariant);
                    }
                }
            }
            // }, 2000);
        });
    } catch (e) {
        if (debug) console.log(e, 'Error in Global JavaScript');
    }
})();
// The code below is added for the Convert Experiments experiments and manual location trigger
(function () {
    try {
        var debug = 1;
        /**
         * setup Team
         */
        // LIBRARY FUNCTIONS
        var lib = {
            waitForElement(selector, trigger, delayInterval, delayTimeout) {
                var interval = setInterval(function () {
                    if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
                        clearInterval(interval);
                        trigger();
                    }
                }, delayInterval);
                setTimeout(function () {
                    clearInterval(interval);
                }, delayTimeout);
            },
        };
        lib.waitForElement(
            'body #navBardesktopCart',
            function () {
                const cartWithProducts = document.querySelector('#navBardesktopCart');
                const bodyElement = document.body;
                const multipleItemsClass = 'T7.1_cart_items';
                if (cartWithProducts) {
                    const cartContent = cartWithProducts.textContent.trim();
                    const itemCount = parseInt(cartContent, 10);
                    if (itemCount > 1) {
                        bodyElement.classList.add(multipleItemsClass);
                        //   console.log("Products in cart:", cartContent);
                    } else {
                        if (bodyElement.classList.contains(multipleItemsClass)) {
                            bodyElement.classList.remove(multipleItemsClass);
                        }
                        //  console.log("Less than 2 products in cart.");
                    }
                } else {
                    //  console.error("Cart element not found.");
                }
            },
            50,
            15000
        );
        lib.waitForElement(
            'body ',
            function () {
                function addclassForSelfDriveTour() {
                    // Removing the class if it exist---------------
                    document.querySelector('body.SelfDriveTour-Test43')?.classList.remove('SelfDriveTour-Test43');
                    // Adding the class if the day tour selector present----------
                    lib.waitForElement(
                        '[data-tour-type="tour_selfdrive"]',
                        function () {
                            document.querySelector('body').classList.add('SelfDriveTour-Test43');
                        },
                        50,
                        15000
                    );
                }
                addclassForSelfDriveTour();
            },
            50,
            15000
        );

        function checkUrlForStrings(strings) {
            for (let i = 0; i < strings.length; i++) {
                if (window.location.href.includes(strings[i])) {
                    return true; // Exit loop once a match is found
                }
            }
            return false; // No match found
        }

        var urlString = [
            "nature-info", "travel-info", "reykjavik-guide", "history-culture", "music-of-iceland", "the-northern-lights",
            "best-of-iceland", "you-guide", "natur-island", "las-auroras-boreales", "la-nature-en-islande",
            "naturaleza-en-islandia", "informacion-de-viaje", "island-reisetipps", "you-guide", "guia-de-reykjavik",
            "historia-y-cultura", "voyager-en-islande", "musica-islandesa", "lo-mejor-de-islandia", "tu-eres-el-guia",
            "guide-de-reykjavik", "histoire-et-culture", "la-musique-en-islande", "les-aurores-boreales",
            "le-meilleur-de-l-islande", "c-est-vous-le-guide", "islaendische-musik", "geschichte-und-kultur",
            "polarlichter-island", "das-beste-von-island", "reiserouten", "best-of-iceland", "reykjavik-guide",
            "la-natura-islandese", "informazioni-di-viaggio", "guida-di-reykjavik", "storia-e-cultura", "musica-islandese",
            "aurore-boreali", "il-meglio-dell-islanda", "la-tua-islanda", "islandzka-natura", "informacja-turystyczna",
            "przewodnik-po-reykjaviku", "historia-i-kultura", "muzyka-islandzka", "zorza-polarna",
            "wszystko-co-najlepsze-na-islandii", "plan-podrozy", "priroda-v-islandii", "planirovanie-puteshestvija",
            "putevoditel-po-rejkjaviku", "istorija-i-kultura", "muzyka-islandii", "severnoe-sijanie", "luchshee-v-islandii",
            "marshruty-po-islandii", "music-of-iceland", "travel-info", "history-culture", "the-northern-lights",
            "nature-info", "nordlys", "musik-i-island", "historie-og-kultur", "naturinformation", "rejseinformation",
            "guide-til-reykjavik", "rejseplaner", "det-bedste-af-island", "naturinfo", "reseinformation",
            "guide-till-reykjavik", "resplaner", "hojdpunkter-pa-island", "norrsken", "musik-pa-island",
            "historia-och-kultur", "reiseinformasjon", "reiseruter", "det-beste-av-island", "nordlyset", "musikk-pa-island",
            "naturen-pa-island", "natuur-info", "reykjavik-gids", "je-gids", "het-beste-van-ijsland", "het-noorderlicht",
            "muziek-in-ijsland", "geschiedenis-en-cultuur", "reisinformatie", "luonto", "matkustustiedot",
            "historia-kulttuuri", "islannin-musiikki", "revontulet", "islannin-parhaat", "reykjavik-opas", "matkasuunnitelmat"
        ];

        var experiments = {
            // Experiments
            travel_Shift62() {
                if (window.location.href.includes('https://guidetoiceland.is/')) {
                    if (!window.travelShift62AlredyActivated) {
                        lib.waitForElement(
                            '#gtivpabtest',
                            function () {
                                window.travel_Shift62 = 1;
                                window._conv_q = window._conv_q || [];
                                window._conv_q.push(['executeExperiment', '100046370']);
                            },
                            50,
                            15000
                        );
                        window.travelShift62AlredyActivated = true;
                    }
                }
            },
            // Travel Shift 32 [Desktop] ---------
            travelShift32() {
                if (window.location.href.includes('https://guidetoiceland.is/') && window.innerWidth >= 960) {
                    if (!window.travelShift32AlredyActivated) {
                        lib.waitForElement(
                            '#gtivpabtest[data-tour-page="gtiVacationPackage"]',
                            function () {
                                console.log("travelShift test 32 custom activation")
                                // Activate the experiment here-----------------------------
                                window.travelShift_32 = 1;
                                window._conv_q = window._conv_q || [];
                                window._conv_q.push(['executeExperiment', '100046563']);
                            },
                            50,
                            15000
                        );
                        window.travelShift32AlredyActivated = true;
                    }
                }
            },
            // Travel Shift 31 [Desktop] ---------
            travelShift31() {
                if (window.location.href.includes('https://guidetoiceland.is/') && window.innerWidth < 960) {
                    if (!window.travelShift31AlredyActivated) {
                        lib.waitForElement(
                            '#gtivpabtest[data-tour-page="gtiVacationPackage"]',
                            function () {
                                // Activate the experiment here-----------------------------
                                window.travelShift31 = 1;
                                window._conv_q = window._conv_q || [];
                                //   window._conv_q.push(['executeExperiment', '100046299']);
                                window._conv_q.push(['executeExperiment', '100046669']);

                            },
                            50,
                            15000
                        );
                        window.travelShift31AlredyActivated = true;
                    }
                }
            },
            travelShift61() {
                // Check the current URL
                if (checkUrlForStrings(urlString)) {
                    console.log("Match found in the current URL! test activated");
                    window.travelShift61 = 1;
                    window._conv_q = window._conv_q || [];
                    window._conv_q.push(['executeExperiment', '100046350']);
                } else {
                    console.log("No match found in the current URL.");
                }
            },

            travel_Shift44() {
                if (window.location.href.includes('https://guidetoiceland.is/')) {
                    if (!window.travelShift44AlredyActivated) {
                        lib.waitForElement(
                            '[data-crid="vpcard_header vpcard_header--stay"]',
                            function () {
                                window.travel_Shift44 = 1;
                                window._conv_q = window._conv_q || [];
                                window._conv_q.push(['executeExperiment', '100046815']);
                            },
                            50,
                            15000
                        );
                        window.travelShift44AlredyActivated = true;
                    }
                }
            },
            travel_Shift45() {
                if (window.location.href.includes('https://guidetoiceland.is/')) {
                    if (!window.travelShift45AlredyActivated) {
                        lib.waitForElement(
                            '[data-crid="vpcard_header vpcard_header--stay"]',
                            function () {
                                window.travel_Shift45 = 1;
                                window._conv_q = window._conv_q || [];
                                window._conv_q.push(['executeExperiment', '100046898']);
                            },
                            50,
                            15000
                        );
                        window.travelShift45AlredyActivated = true;
                    }
                }
            },

            travel_Shift84() {
                if (window.location.href.includes('https://guidetoiceland.is/')) {
                    if (!window.travelShift84AlredyActivated) {
                        lib.waitForElement(
                            '#gtivpabtest[data-tour-page="gtiVacationPackage"]',
                            function () {
                                window.travel_Shift84 = 1;
                                window._conv_q = window._conv_q || [];
                                window._conv_q.push(['executeExperiment', '100046963']);
                            },
                            50,
                            15000
                        );
                        window.travelShift84AlredyActivated = true;
                    }
                }
            },

            travel_Shift49() {
                if (window.location.href.includes('https://guidetoiceland.is/')) {

                    lib.waitForElement(
                        '[data-crid*="vpcard_wrapper--car"]',
                        function () {
                            if (!window.travelShift49AlredyActivated) {
                                window.travelShift49 = 1;

                                window._conv_q = window._conv_q || [];
                                window._conv_q.push(['executeExperiment', '100046957']);
                                window.travelShift49AlredyActivated = true;
                            }
                        },
                        50,
                        15000
                    );

                }
            },

            travel_Shift43() {
                if (window.location.href.includes('https://guidetoiceland.is/')) {

                    lib.waitForElement(
                        '[data-crid="vprowheading-transfers"]',
                        function () {
                            if (!window.travelShift43AlredyActivated) {
                                window.travelShift43 = 1;

                                window._conv_q = window._conv_q || [];
                                window._conv_q.push(['executeExperiment', '100047011']);
                                window.travelShift43AlredyActivated = true;
                            }
                        },
                        50,
                        15000
                    );

                }
            },

        };
        //activating test 62
        experiments.travel_Shift62();
        // Travlehift 32 activated---
        experiments.travelShift32();
        // Travlehift 31 activated---
        experiments.travelShift31();
        experiments.travelShift61();
        experiments.travel_Shift44();
        experiments.travel_Shift45();
        experiments.travel_Shift84();
        experiments.travel_Shift49();
        experiments.travel_Shift43();
    } catch (e) {
        if (debug) console.log(e, 'Error in Global JavaScript');
    }
})();

// Function to toggle the "search_page" class on the body element
const toggleSearchPageClass = () => {
    // Check if the current page is a search page
    const isSearchPage = window._travelshift?.pageInfo?.search === true;
    const bodyElement = document.querySelector("body");
    if (bodyElement) {
        isSearchPage
            ? bodyElement.classList.add("search_page")
            : bodyElement.classList.remove("search_page");
    }
};

try {
    // Initial check to toggle the "search_page" class
    toggleSearchPageClass();

    // Listen for route changes and update the "search_page" class accordingly
    window.addEventListener('travelshift:routeChangeComplete', () => {
        try {
            toggleSearchPageClass();
        } catch (innerError) {
            console.error("Error in routeChangeComplete handler:", innerError);
        }
    });
} catch (error) {
    console.error("Error in initial search page handling:", error);
}