// The code added for the Convert manual and custom trigger of the tests.
(function() {
    try {
        console.log("Under the global code")
        var debug = 1;
        /**
         * setup Team
         */
        // LIBRARY FUNCTIONS
        var lib = {
            waitForElement(selector, trigger, delayInterval, delayTimeout) {
                var interval = setInterval(function() {
                    if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
                        clearInterval(interval);
                        trigger();
                    }
                }, delayInterval);
                setTimeout(function() {
                    clearInterval(interval);
                }, delayTimeout);
            },
        };

        lib.waitForElement(
            "body",
            function() {
                // The following code will help in developing the test.
                if (document && document.querySelector && document.querySelector("body")) {
                    document.querySelector("body").dataset.path = window.location.pathname;
                    document.querySelector("body").dataset.url = window.location.href;
                }
            },
            50,
            15000
        );
    } catch (e) {
        if (debug) console.log(e, "Error in Global JavaScript");
    }
})();

// CRO Mode (QA Test cookie)
(function() {
    // Utility Functions
    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000); // Convert days to milliseconds
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let cookies = decodedCookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            let c = cookies[i].trim();
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return null;
    }

    // Enable or disable QA mode
    function enableQAMode(mode) {
        if (mode === "qa") {
            console.log(`CRO Mode enabled: ${mode}`);
            setCookie("cro_mode", mode, 1); // Set cookie for 1 day
        } else {
            console.log("CRO Mode disabled");
            setCookie("cro_mode", "", -1); // Clear cookie
        }
    }

    // Initialize CRO Mode
    function initCROMode() {
        const urlParams = new URLSearchParams(window.location.search);
        let mode = urlParams.get("cro_mode") || getCookie("cro_mode");
        if (mode === "qa") {
            enableQAMode(mode);
            // console.log("QA Mode Active");
            // Place any QA mode-specific logic here
        } else {
            console.log("QA Mode Inactive");
        }
    }

    // Run the initialization function
    initCROMode();
})();

// The code added for the Utility Functions
("use strict");

(function(initialObject, version) {
    const globalKey = "expLibraryData";

    // Initialize or update the global object
    window[globalKey] = window[globalKey] || {
        ...initialObject,
        version: 0,
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
        sessionErrors.push({
            err: e,
            ctx,
        });
    };

    /**
     * ================================================
     * Utility Functions
     * ================================================
     */
    // Debounce a function to limit its execution rate
    const debounce = function(func, delay = 300) {
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

    /**
     * ================================================
     * Library Functions
     * ================================================
     */
    Object.assign(window[globalKey], {
        inject,
        debounce,

        log: function(...args) {
            // Only log if debugging is enabled
            if (!(this.data[args[0]] || {}).enable_DEBUG && !(this.exp[args[0]] || {}).enable_DEBUG) return;

            if (logs.length >= 100) logs.shift(); // Cap logs at 100
            logs.push({
                time: Date.now() - window[globalKey].startTime,
                log: args,
            });
            console.log(...args);
        },

        run: function(experimentName) {
            return handleError({
                    testId: experimentName,
                    context: "run",
                    localDevelopment: this.data[experimentName]?.localDevelopment,
                },
                () => this.data[experimentName]
            );
        },

        add: function(experiments) {
            for (const experimentName in experiments) {
                const experiment = experiments[experimentName];
                if (this.data[experimentName]?.initOnce) continue;

                handleError({
                        testId: experimentName,
                        context: "On Init",
                        localDevelopment: experiment?.localDevelopment,
                    },
                    () => {
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
                    }
                );
            }
        },

        setBodyClass: function(testName) {
            if (this.data[testName]?.disableBodyClassSetting) return;
            this.runAt("body", () => {
                document.querySelector("body")?.classList.add(testName);
            });
        },

        runAt: function(selector, callback, timeout = 10000) {
            let elements = document.querySelectorAll(selector);
            if (elements.length > 0) {
                handleError({
                        testId: this.__testName || "General",
                        context: "runAt callback",
                        localDevelopment: this?.localDevelopment,
                    },
                    () => {
                        callback([...elements]);
                    }
                );

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
                                localDevelopment: this?.localDevelopment,
                            },
                            () => {
                                callback([...elements]);
                            }
                        );
                    }
                }, {
                    childList: true,
                    subtree: true,
                },
                timeout, {
                    selector,
                    context: "runAt",
                    testName: this.__testName || "General",
                    localDevelopment: this?.localDevelopment,
                }
            );
        },

        observeSelector: function(selector, callback, options = {}) {
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
                        localDevelopment: this?.localDevelopment,
                    },
                    () => {
                        callback(el);
                    }
                );
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
            const debouncedLookForSelector = debounce(lookForSelector, options.debounceDelay || 60);

            lookForSelector();

            if (!isDone) {
                observer = new MutationObserver(() => debouncedLookForSelector());
                observer.observe(documentRef, {
                    attributes: true,
                    childList: true,
                    subtree: true,
                });
            }

            return done;
        },

        live: function(selector, event, callback, context = document) {
            const handler = (e) => {
                handleError({
                        testId: this.__testName,
                        context: `live event for selector: ${selector}`,
                        localDevelopment: this?.localDevelopment,
                    },
                    () => {
                        const target = e.target.closest(selector);
                        if (target) callback.call(target, e);
                    }
                );
            };

            context.addEventListener(event, handler);

            return () => context.removeEventListener(event, handler);
        },

        getCookie: function(key) {
            return Object.fromEntries(document.cookie.split("; ").map((c) => c.split("=").map(decodeURIComponent)))[key] || null;
        },

        template: function(__testName) {
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
    experimentQueue.forEach((experiment) => window[globalKey].add(experiment));

    window[`${globalKey}Queue`] = {
        push(experiment) {
            window[globalKey].add(experiment);
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
        runCustomTrigger: function(experimentName) {
            return handleError({
                    testId: experimentName,
                    context: "Run Custom Experiment",
                },
                () => this.exp[experimentName]
            );
        },

        // Initialize an experiment
        initializeExperiment: function(experimentData) {
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
        evaluateExperimentConditions: async function(name) {
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
                            context: "Callback Execution",
                        },
                        currentExp.callBack
                    );
                }

                currentExp.isAlreadyExecuted = true;

                if (currentExp.experimentId) {
                    this.executeExperiment(currentExp.experimentId);
                }
            }
        },

        // Execute experiment for backend tracking
        executeExperiment: function(experimentId) {
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", experimentId]);
        },

        // Activate a single experiment
        activateExperiment: function(experiment) {
            handleError({
                    testId: experiment.name,
                    context: "Custom Experiment Activation",
                },
                () => {
                    const currentExperiment = this.exp[experiment.name];
                    if (!currentExperiment) {
                        this.initializeExperiment(experiment);
                    } else {
                        currentExperiment.evaluateConditions();
                    }
                }
            );
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
        tmp: {},
    },
    1
);

(function() {
    try {

        function test10NewsletterGoal() {

            const currentUrl = window.location.href;

            // Regular expression to match the full URL pattern including dynamic submissionGuid and optional other parameters
            if (currentUrl.includes('info.allaboutlearningpress.com/newsletter-thank-you?submissionGuid=')) {

                // Get the referrer
                const referrer = document.referrer;

                if (!referrer || referrer.length < 1) {
                    return;
                }

                // Use the pathname of the referrer to check if it is exactly '/newsletter'
                const referrerPathname = new URL(referrer).pathname;

                // Check if the referrer pathname is exactly '/newsletter'
                const isReferrerValid = referrerPathname === '/newsletter';

                // Log the results to the console
                if (isReferrerValid) {
                    console.log('Referrer is valid, newsletter subscribed goal firing...');
                    // fire the goal
                    window._conv_q = window._conv_q || [];
                    _conv_q.push(["triggerConversion", "100036076"]);
                }

            }
        }


        /* helper library */
        var _$;
        !(function(factory) {
            _$ = factory();
        })(function() {
            var bm = function(s) {
                if (typeof s === "string") {
                    this.value = Array.prototype.slice.call(document.querySelectorAll(s));
                }
                if (typeof s === "object") {
                    this.value = [s];
                }
            };
            bm.prototype = {
                eq: function(n) {
                    this.value = [this.value[n]];
                    return this;
                },
                each: function(fn) {
                    [].forEach.call(this.value, fn);
                    return this;
                },
                log: function() {
                    var items = [];
                    for (let index = 0; index < arguments.length; index++) {
                        items.push(arguments[index]);
                    }
                    console && console.log(variation_name, items);
                },
                addClass: function(v) {
                    var a = v.split(" ");
                    return this.each(function(i) {
                        for (var x = 0; x < a.length; x++) {
                            if (i.classList) {
                                i.classList.add(a[x]);
                            } else {
                                i.className += " " + a[x];
                            }
                        }
                    });
                },
                waitForElement: function(selector, trigger, delayInterval, delayTimeout) {
                    var interval = setInterval(function() {
                        if (_$(selector).value.length) {
                            clearInterval(interval);
                            trigger();
                        }
                    }, delayInterval);
                    setTimeout(function() {
                        clearInterval(interval);
                    }, delayTimeout);
                },
            };
            return function(selector) {
                return new bm(selector);
            };
        });
        var helper = _$();

        helper.waitForElement('body', test10NewsletterGoal, 25, 25000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();