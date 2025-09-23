// The code added for the Convert manual and custom trigger of the tests.
(function () {
    try {
        //console.log("Under the global code")
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
        lib.waitForElement('body', function () {
            // The following code will help in developing the test.
            if (document && document.querySelector && document.querySelector('body')) {
                document.querySelector('body').dataset.path = window.location.pathname;
                document.querySelector('body').dataset.url = window.location.href;

                // Wait for 1 second before executing the code
                setTimeout(() => {
                    // Define the page type from _conv_page_type
                    let pageType = _conv_page_type; // Assuming _conv_page_type is already defined



                    // Remove the class if pageType is not "list"
                    if (pageType !== "list") {
                        // Check if the classes exist on the body and remove them
                        if (document.body.classList.contains("cre-t-35")) {
                            document.body.classList.remove("cre-t-35");
                        }
                        if (document.body.classList.contains("cre-t-35-redirection")) {
                            document.body.classList.remove("cre-t-35-redirection");
                        }
                    }
                }, 1000); // 1 second delay

            }
        }, 50, 15000);




    } catch (e) {
        if (debug) console.log(e, 'Error in Global JavaScript');
    }
})();
// CRO Mode (QA Test cookie)
(function () {
    // Utility Functions
    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); // Convert days to milliseconds
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let cookies = decodedCookie.split(';');
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
        if (mode === 'qa') {
            // console.log(`CRO Mode enabled: ${mode}`);
            setCookie('cro_mode', mode, 1); // Set cookie for 1 day
        } else {
            // console.log('CRO Mode disabled');
            setCookie('cro_mode', '', -1); // Clear cookie
        }
    }
    // Initialize CRO Mode
    function initCROMode() {
        const urlParams = new URLSearchParams(window.location.search);
        let mode = urlParams.get('cro_mode') || getCookie('cro_mode');
        if (mode === 'qa') {
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

// Logic for who lands on the homepage
window.addEventListener('load', function () {
    try {
        // Get the current URL
        const currentUrl = window.location.origin + window.location.pathname;
        // Define the homepage URL
        const homepageUrl = window.location.origin + '/';
        // Check if the user is on the homepage
        const isHomepage =
            currentUrl === homepageUrl || currentUrl === homepageUrl + 'index.html';
        // Function to get a cookie by name
        function getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i].trim();
                if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
            }
            return "";
        }
        // Function to set a session cookie
        function setBmCookie(cname, cvalue) {
            document.cookie = `${cname}=${cvalue}; path=/;`;
        }
        // Check if this is the user's first visit in this session
        const isFirstVisit = getCookie('homepageVisited') === "";
        // If the user lands on the homepage for the first time in the session
        if (isHomepage && isFirstVisit) {
            // Mark the homepage as visited using a session cookie
            setBmCookie('homepageVisited', 'true');
            if (!window.AlreadyTriggeredTestName_FST21) {
                window.AlreadyTriggeredTestName_FST21 = true;
                // Run your custom logic here (no redirect, no modal)
                window.creT21TestActivated = 1;
                window._conv_q = window._conv_q || [];
                window._conv_q.push(['executeExperiment', '100046812']);
                // console.log(
                //     "User landed on the homepage for the first time in this session."
                // );
            }
            // You can trigger tracking, analytics, or any custom event here
        }
    } catch (error) {
        // Log the error to the console for debugging
        console.error("An error occurred in the homepage visit script:", error);
    }
});
// The following code has been added for the custom trigger of the experiments
(function () {
    // Use a global object to persist experiment state
    window.activatedExperiments = window.activatedExperiments || new Map();
    /**
     * Checks if the current user matches the specified user type condition.
     * @param {string} userType - The user type to check against. Valid values are "logged-out-user" and "logged-in-user".
     * @returns {boolean} True if the current user matches the specified user type, otherwise false.
     */
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

    function checkUserCondition(userType) {
        // Retrieve the current user type from global variable or body attribute
        const currentUserType = window._conv_customer_id || document.querySelector("body")?.getAttribute("users_type");
        if (!userType) return true;
        return currentUserType === userType;
    }
    // Check page type condition
    function checkPageType(pageType) {
        return new Promise((resolve, reject) => {
            if (!pageType) return resolve(true);
            var interval = setInterval(() => {
                if (typeof window._conv_page_type !== "undefined") {
                    clearInterval(interval);
                    resolve(window._conv_page_type === pageType);
                }
            }, 50);
            setTimeout(() => {
                clearInterval(interval);
                resolve(false);
            }, 5000);
        });
    }
    // Experiment class
    class Experiment {
        /**
         * Constructs an Experiment instance with the given parameters.
         * @param {Object} params - The parameters for the experiment.
         * @param {string} params.name - The name of the experiment.
         * @param {Function} params.callBack - The callback function to execute when the experiment is activated.
         * @param {Function} params.conditionToTriggerExperiment - The function that checks if the experiment should be triggered.
         * @param {string} params.userType - The user type for which the experiment is applicable.
         * @param {string} [params.pageType=""] - The page type for which the experiment is applicable.
         */
        constructor(params) {
            const {
                name,
                callBack,
                conditionToTriggerExperiment = null,
                userType = "",
                pageType = ""
            } = params;
            // Initialize instance variables
            this.name = name;
            this.callBack = callBack;
            this.conditionToTriggerExperiment = conditionToTriggerExperiment;
            this.userType = userType;
            this.pageType = pageType;
            // Initialize the experiment
            this.initialize();
        }
        // Initialize the experiment
        initialize() {
            // Check if the experiment is already active
            if (window.activatedExperiments.has(this.name)) {
                return;
            }
            // Store this instance in the global map
            window.activatedExperiments.set(this.name, this);
            // Initial check
            this.evaluateConditions();
        }
        /**
         * Evaluates the conditions of the experiment and activates it if all conditions are met.
         */
        async evaluateConditions() {
            // console.log("global evelvate code FirstTable---")
            const root = document.querySelector("html");
            // Check conditions
            const userCondition = checkUserCondition(this.userType);
            const pageCondition = await checkPageType(this.pageType);
            const triggerCondition = this.conditionToTriggerExperiment == null ? true : this.conditionToTriggerExperiment();
            // If all conditions are met, activate the experiment
            if (userCondition && pageCondition && triggerCondition) {
                if (!root.hasAttribute(this.name)) {
                    root.setAttribute(this.name, true);
                    this.callBack();
                }
            } else {
                // If conditions are not met, remove the experiment attribute
                root.removeAttribute(this.name);
            }
        }
    }
    /**
     * userType: guest, member, empty To check logged in and logged out user. Not user this if test need to run for all user
     * pageType: list => window._conv_page_type
     * conditionToTriggerExperiment: @function
     */
    // Add all experiment here
    var experiments = [{
        name: "test-03-LogOut",
        userType: "guest",
        pageType: "list",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST03_loggedout = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100046182"]);
            //console.log("Test03Found_loggedout_user");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co");
        },
    },
    {
        name: "test-03-LogIn",
        userType: "member",
        pageType: "list",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST03_loggedin = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100046311"]);
            // console.log("Test03Found_loggedin_user");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co");
        },
    },
    {
        name: "test-10",
        pageType: "list",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST10 = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100046388"]);
            //  console.log("Test10Found");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("https://www.firsttable.co.nz/") && !(window.location.href.includes("https://www.firsttable.co.nz/christchurch") || window.location.href.includes("https://www.firsttable.co.nz/queenstown-lakes"));
        },
    },
    {
        name: "test-04",
        pageType: "list",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST04 = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100046433"]);
            // console.log("Test04Found");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co") && (window.location.href.includes("https://www.firsttable.co.nz/christchurch") || window.location.href.includes("https://www.firsttable.co.nz/queenstown-lakes")) && !(window.location.href.includes("?regular-table-only=true") || window.location.href.includes("&regular-table-only=true"));
        },
    },
    {
        name: "test-07",
        pageType: "list",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST07 = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100046604"]);
            // console.log("Test07Found");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co") && !(window.location.href.includes("/christchurch") || window.location.href.includes("/queenstown-lakes") || window.location.href.includes("/wanaka") || window.location.href.includes("/southland") || window.location.href.includes("/northland"));
        },
    },
    {
        name: "test-12",
        pageType: "list",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST12 = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100046637"]);
            // console.log("Test12Found");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co") && !(window.location.href.includes("/christchurch") || window.location.href.includes("/queenstown-lakes"));
        },
    },
    {
        name: "test-20",
        pageType: "list",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST20 = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100046730"]);
            window._conv_q.push(["executeExperiment", "100047009"]);
            //  console.log("Test20Found");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co") && !window.location.href.includes("regular-table-only=true");
        },
    },
    {
        name: "test-33",
        pageType: "list",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST33 = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100047600"]);
            //   console.log("Test33Found");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co")
        },
    },

    {
        name: "test-35-personalize",
        pageType: "list",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST35Personalize = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100047742"]);
            console.log("Test35PersonalizeFound");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co")
        },
    },

    {
        name: "test-14",
        pageType: "restaurant",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST14 = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100047014"]);
            //  console.log("Test14Found");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co");
        },
    },
    {
        name: "Test-19",
        callBack: () => {
            // Execute experiment
            // console.log("test 19 activated")
            window.AlreadyTriggeredTestName_FST19 = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100046699"]);
            //  console.log("test 19 activated")
        },
        conditionToTriggerExperiment: () => {
            return (window.localStorage.getItem("city") != null && window.location.pathname == "/" && window.location.href.includes("https://www.firsttable.co"))
        },
    },
    {
        name: "test-22-control",
        pageType: "list",
        callBack: () => {
            // Execute experiment only if window.newUITest is "control"
            if (window.newUITest && (window.newUITest === "control")) {
                window.AlreadyTriggeredTestName_FST022_control = 1;
                window._conv_q = window._conv_q || [];
                window._conv_q.push(["executeExperiment", "100047004"]);
                // console.log("Test22-control executed");
            }
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co");
        },
    },
    {
        name: "test-22-variation",
        pageType: "list",
        callBack: () => {
            // Execute experiment only if window.newUITest is "variation"
            if (window.newUITest && (window.newUITest === "variation")) {
                window.AlreadyTriggeredTestName_FST022_variation = 1;
                window._conv_q = window._conv_q || [];
                window._conv_q.push(["executeExperiment", "100047005"]);
                // console.log("Test22-variation executed");
            }
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co");
        },
    },
    {
        name: "test-18-LogOut",
        userType: "guest",
        callBack: () => {
            const currentUrl = window.location.href;
            const currentPath = window.location.pathname;
            const checkForNZCondition = (currentUrl.includes("https://www.firsttable.co.nz") && (currentPath.includes("/join/29") || currentPath.includes("/join/40") || currentPath.includes("/join/38")));
            const checkForAUCondition = (currentUrl.includes("https://www.firsttable.com.au") && (currentPath.includes("/join/193") || currentPath.includes("/join/426")));
            // const checkForUKCondition = (currentUrl.includes("https://www.firsttable.co.uk") && (currentPath.includes("/join/1057") || currentPath.includes("/join/1695") || currentPath.includes("/join/1836") || currentPath.includes("/join/1532")))
            if (checkForNZCondition || checkForAUCondition) {
                //console.log("custom activation done test18 without observer")
                if (!window.AlreadyTriggeredTestName_FST18_loggedout) {
                    window.AlreadyTriggeredTestName_FST18_loggedout = 1;
                    window._conv_q = window._conv_q || [];
                    window._conv_q.push(["executeExperiment", "100048562"]);
                }
            } else {
                //console.log("custom activation done test18 with observer")
                observeSelector('[data-attribute="sign-up-page-modal"][data-attribute-social="true"]', function () {
                    // Execute experiment
                    if (!window.AlreadyTriggeredTestName_FST18_loggedout) {
                        window.AlreadyTriggeredTestName_FST18_loggedout = 1;
                        window._conv_q = window._conv_q || [];
                        window._conv_q.push(["executeExperiment", "100048562"]);
                    }
                })
            }
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co");
        },
    },
    {
        name: "test-25-LogOut",
        userType: "guest",
        callBack: () => {

            // console.log("custom activation done test18 with observer")
            observeSelector('[data-attribute="sign-up-modal"]', function () {
                if (
                    document.querySelector('body[users_type="guest"]') &&
                    (window._conv_page_type == 'list' || window._conv_page_type == 'restaurant') &&
                    !window.AlreadyTriggeredTestName_FST25_loggedout
                ) {
                    // console.log("test 25 activated")
                    window.AlreadyTriggeredTestName_FST25_loggedout = 1;
                    window._conv_q = window._conv_q || [];
                    window._conv_q.push(["executeExperiment", "100047193"]);
                }
            });
        },


        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co");
        },
    },
    {
        name: "test-45-LogOut",
        userType: "guest",
        callBack: () => {

            // console.log("custom activation done test18 with observer")
            observeSelector('[data-attribute="sign-up-modal"]', function () {
                if (
                    document.querySelector('body[users_type="guest"]') &&
                    (window._conv_page_type == 'list' || window._conv_page_type == 'restaurant') &&
                    !window.AlreadyTriggeredTestName_FST45_loggedout
                ) {
                    // console.log("test 45 activated")
                    window.AlreadyTriggeredTestName_FST45_loggedout = 1;
                    window._conv_q = window._conv_q || [];
                    window._conv_q.push(["executeExperiment", "100047827"]);
                }
            });
        },


        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co");
        },
    },
    {
        name: "test-39",
        pageType: "list",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST39 = 1;
            window._conv_q = window._conv_q || [];
            //   window._conv_q.push(["executeExperiment", "100047669"]);
            window._conv_q.push(["executeExperiment", "100048184"]);
            //    console.log("Test39Found");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co")
        },
    },
    {
        name: "test-36-LogOut",
        userType: "guest",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST36_loggedout = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100047886"]);
            //console.log("Test36Found_loggedout_user");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co");
        },
    },
    {
        name: "test-34",
        pageType: "list",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST34 = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100048183"]);
            //    console.log("Test34Found");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co")
        },
    },
    {
        name: "test-37",
        pageType: "list",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST37_list = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100047731"]);
            //    console.log("Test37Found");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co")
        },
    },
    {
        name: "test-37a",
        pageType: "restaurant",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST37_restaurant = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100047731"]);
            //    console.log("Test37Found");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co")
        },
    },
    {
        name: "test-40",
        pageType: "list",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST40 = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100047779"]);
            //    console.log("Test40Found");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co")
        },
    },
    {
        pageType: "list",
        name: "list-page",
        callBack: () => {
            console.log("adding list page attribute")
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co");
        },
    },
    {
        name: "test-29",
        pageType: "list",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST29 = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100047999"]);
            //    console.log("Test40Found");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co");
        },
    },
    {
        name: "test-29-new",
        pageType: "list",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST29_new = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100048758"]);
            //    console.log("Test40Found");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co")

        },
    },
    {
        name: "test-55-LogOut",
        userType: "guest",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST55_loggedout = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100048242"]);
            //console.log("Test55Found_loggedout_user");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co");
        },
    },
    {
        name: "test-32",
        userType: "member",
        callBack: () => {

            // console.log("custom activation done test18 with observer")
            observeSelector('[data-attribute="Hide Red Text"]', function () {
                if (
                    document.querySelector('body[users_type="member"]') && !window.AlreadyTriggeredTestName_FST32_loggedout
                ) {
                    // console.log("test_32 activated")
                    window.AlreadyTriggeredTestName_FST32_loggedout = 1;
                    window._conv_q = window._conv_q || [];
                    window._conv_q.push(["executeExperiment", "100047872"]);
                }
            });
        },


        conditionToTriggerExperiment: () => {
            return window.location.href.includes("https://www.firsttable.co") && window.location.href.includes("/booking/details");
        },
    },
    {
        name: "test-50_1",
        pageType: "list",

        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST50_loggedout = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100048232"]);
            //console.log("Test55Found_loggedout_user");
        },


        conditionToTriggerExperiment: () => {
            return window.location.href.includes("https://www.firsttable.co.nz/");


        },
    },
    {
        name: "test-50_2",

        pageType: "restaurant",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST50_loggedout = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100048232"]);
            //console.log("Test55Found_loggedout_user");
        },


        conditionToTriggerExperiment: () => {
            return window.location.href.includes("https://www.firsttable.co.nz/");


        },
    },


    {
        name: "FST44_1",
        pageType: "list",

        callBack: () => {
            // Execute experiment
            console.log("test 44 activated")
            window.AlreadyTriggeredTestName_FST44_loggedout = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100048630"]);
            //console.log("Test55Found_loggedout_user");
        },


        conditionToTriggerExperiment: () => {
            return window.location.href.includes("https://www.firsttable.co");


        },
    },
    {
        name: "FST44_2",

        pageType: "restaurant",
        callBack: () => {
            // Execute experiment
            console.log("test 44 activated")
            window.AlreadyTriggeredTestName_FST44_loggedout = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100048630"]);
            //console.log("Test55Found_loggedout_user");
        },


        conditionToTriggerExperiment: () => {
            return window.location.href.includes("https://www.firsttable.co");


        },
    },
    {
        name: "test-74",
        pageType: "list",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST74_list = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100049278"]);
            //    console.log("Test74Found");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co")
        },
    },
    {
        name: "test-74a",
        pageType: "restaurant",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST74_restaurant = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100049278"]);
            //    console.log("Test74Found");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co")
        },
    },

    {
        name: "FST85",
        pageType: "list",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST85_restaurant = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100049375"]);
            //    console.log("Test74Found");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co")
        },


    },

    {
        name: "test-86",
        pageType: "list",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST86_list = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100049119"]);
            //    console.log("Test86Found");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co")
        },
    },
    {
        name: "test-86a",
        pageType: "restaurant",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST86_restaurant = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100049119"]);
            //    console.log("Test86Found");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co")
        },
    },
    {
        name: "test-79",
        pageType: "restaurant",
        callBack: () => {
            // Execute experiment after a 0.5 second delay
            //  setTimeout(() => {
            window.AlreadyTriggeredTestName_FST79_restaurant = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100049552"]);
            // console.log("Test86Found");
            // }, 500); // 500ms delay (0.5 second)
        },
        conditionToTriggerExperiment: () => {
            return (
                window.location.href.includes("www.firsttable.co") ||
                window.location.href.includes("preview.firsttable.com") ||
                window.location.href.includes("local.firsttable.com")
            );
        },
    },

    {
        name: "test_79",
        pageType: "list",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST91_list = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100049126"]);
            //    console.log("Test86Found");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co")

        },
    },

    {
        name: "test_91",
        pageType: "list",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST91_list = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100049423"]);
            //    console.log("Test91Found");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co")

        },
    },

    {
        name: "test_89",
        pageType: "list",
        callBack: () => {
            // Execute experiment




            observeSelector('[data-mobile-filter="row-2"] [data-filter-label=suburb] span', function () {

                if (
                    document.querySelector('[data-mobile-filter="row-2"] [data-filter-label=suburb] span').textContent !== "Any suburb" &&
                    document.querySelector('[data-mobile-filter="row-2"] [data-filter-label=suburb] span').textContent !== "North London" &&
                    document.querySelector('[data-mobile-filter="row-2"] [data-filter-label=suburb] span').textContent !== "South East London" &&
                    document.querySelector('[data-mobile-filter="row-2"] [data-filter-label=suburb] span').textContent !== "West London" &&
                    document.querySelector('[data-mobile-filter="row-2"] [data-filter-label=suburb] span').textContent !== "North West London" &&
                    document.querySelector('[data-mobile-filter="row-2"] [data-filter-label=suburb] span').textContent !== "South West London" &&
                    document.querySelector('[data-mobile-filter="row-2"] [data-filter-label=suburb] span').textContent !== "East London" &&
                    document.querySelector('[data-mobile-filter="row-2"] [data-filter-label=suburb] span').textContent !== "South London" &&
                    document.querySelector('[data-mobile-filter="row-2"] [data-filter-label=suburb] span').textContent !== "Central London" &&
                    document.querySelector('[data-mobile-filter="row-2"] [data-filter-label=suburb] span').textContent !== "Dunedin" &&
                    document.querySelector('[data-mobile-filter="row-2"] [data-filter-label=suburb] span').textContent !== "Invercargill" &&
                    document.querySelector('[data-mobile-filter="row-2"] [data-filter-label=suburb] span').textContent !== "Arrowtown"
                ) {

                    console.log('remove 89')
                } else {
                    //push convert id 
                    window.AlreadyTriggeredTestName_FST89_list = 1;
                    window._conv_q = window._conv_q || [];
                    window._conv_q.push(["executeExperiment", "100049592"]);
                }
            });
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co")

        },
    },


    {
        name: "test_111",
        pageType: "list",
        callBack: () => {


            function addLuxonScript(callback) {
                const script = document.createElement("script");
                script.src = "https://cdn.jsdelivr.net/npm/luxon@3/build/global/luxon.min.js";
                script.onload = callback;
                document.head.appendChild(script);
            }

            addLuxonScript(() => {
                const {
                    DateTime
                } = window.luxon;

                // --- Region-specific timezone mapping ---
                const regionMap = {
                    "https://www.firsttable.co.nz": "Pacific/Auckland",
                    "https://www.firsttable.com.au": "Australia/Sydney",
                    "https://www.firsttable.co.uk": "Europe/London"
                };

                const currentOrigin = window.location.origin;
                const userZone = regionMap[currentOrigin];

                if (!userZone) return; // If not one of the target sites, do nothing

                const nowInRegion = DateTime.now().setZone(userZone);
                window.Cre_t_111 = nowInRegion.toFormat("yyyy-MM-dd");

                // Check if before 6pm in that region
                const isBefore6pm = nowInRegion.hour < 18;

                if (isBefore6pm) {
                    // ✅ Execute your original exit intent / inactivity / rapid scroll code
                    runTriggerCode();
                }
            });

            function runTriggerCode() {
                if (window.innerWidth > 1023) {
                    if (!window.creT111) {
                        document.addEventListener("mouseout", (e) => {
                            if (e.clientY < 10) {
                                const suburbSpan = document.querySelector('[data-mobile-filter="row-2"] [data-filter-label=suburb] span');
                                if (suburbSpan) {
                                    const validSuburbs = [
                                        "Any suburb", "North London", "South East London", "West London",
                                        "North West London", "South West London", "East London", "South London",
                                        "Central London", "Dunedin", "Invercargill", "Arrowtown"
                                    ];
                                    if (validSuburbs.includes(suburbSpan.textContent)) {
                                        console.log('test is triggering');
                                        window.AlreadyTriggeredTestName_FST111_list = 1;
                                        window._conv_q = window._conv_q || [];
                                        window._conv_q.push(["executeExperiment", "100049929"]);
                                        window._conv_q.push(["executeExperiment", "100050110"]);
                                    }
                                }
                            }
                        });
                        window.creT111 = true;
                    }
                } else {
                    let timer;
                    let inactive = false;

                    function resetTimer() {
                        if (inactive) inactive = false;
                        clearTimeout(timer);
                        timer = setTimeout(() => {
                            if (!inactive) {
                                inactive = true;
                                checkAndExecute();
                            }
                        }, 15000);
                    }

                    function checkAndExecute() {
                        const suburbSpan = document.querySelector('[data-mobile-filter="row-2"] [data-filter-label=suburb] span');
                        if (suburbSpan) {
                            const validSuburbs = [
                                "Any suburb", "North London", "South East London", "West London",
                                "North West London", "South West London", "East London", "South London",
                                "Central London", "Dunedin", "Invercargill", "Arrowtown"
                            ];
                            if (validSuburbs.includes(suburbSpan.textContent)) {
                                window.AlreadyTriggeredTestName_FST111_list = 1;
                                window._conv_q = window._conv_q || [];
                                window._conv_q.push(["executeExperiment", "100049929"]);
                            }
                        }
                    }

                    let lastScroll = 0;
                    let lastTime = Date.now();

                    function detectRapidScroll() {
                        const now = Date.now();
                        const currentScroll = window.scrollY;
                        const deltaScroll = Math.abs(currentScroll - lastScroll);
                        const deltaTime = now - lastTime;
                        const speed = deltaScroll / (deltaTime || 1);

                        if (speed > 1.5) {
                            clearTimeout(window._scrollTriggerTimer);
                            window._scrollTriggerTimer = setTimeout(() => {
                                checkAndExecute();
                            }, 1000); // wait 1 seconds
                        }

                        lastScroll = currentScroll;
                        lastTime = now;
                        resetTimer();
                    }

                    ["mousemove", "keydown", "click", "touchstart"].forEach(evt => {
                        document.addEventListener(evt, resetTimer, {
                            passive: true
                        });
                    });
                    document.addEventListener("scroll", detectRapidScroll, {
                        passive: true
                    });
                    resetTimer();
                }
            }


        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co")

        },
    },



    {
        name: "test_95",
        pageType: "list",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST95_list = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100049980"]);
            //    console.log("Test95Found");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co")

        },
    },

    {
        name: "test_100",
        pageType: "list",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST100_list = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100049779"]);
            //    console.log("Test100Found");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co")

        },
    },
    {
        name: "test_104",
        pageType: "list",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST104_list = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100049780"]);
            //    console.log("Test104Found");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co")

        },
    },
    {
        name: "test_116",
        pageType: "list",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST116_list = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100049994"]);
            // console.log("Test116Found");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co");
        },
    },
    {
        name: "test_118",
        userType: "member",
        pageType: "list",


        callBack: () => {

            // console.log("custom activation done test18 with observer")
            observeSelector('body[users_loyalty_tier]', function () {
                window.AlreadyTriggeredTestName_FST118_list = 1;
                window._conv_q = window._conv_q || [];
                window._conv_q.push(["executeExperiment", "100049995"]);

            });
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("https://www.firsttable.co.nz/");
        },
    },
    {
        name: "test_119",
        pageType: "list",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST119_list = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100049961"]);
            // console.log("Test119Found");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co");
        },
    },

    {
        name: "test_108",
        pageType: "list",
        callBack: () => {
            var country = [
                '/auckland',
                '/christchurch',
                '/wellington',
                '/queenstown-lakes',
                '/waikato',
                '/otago',
                '/bay-of-plenty',
                '/taupo',
                '/rotorua',
                '/nelson-and-tasman-district',
                '/melbourne',
                '/hobart',
                '/sydney',
                '/cairns',
                '/sunshine-coast',
                '/brisbane',
                '/gold-coast',
                '/london',
                '/bristol',
                '/brighton',
                '/london/west',
                '/birmingham',
                '/manchester'
            ];

            if (country.includes(window.location.pathname)) {
                // Execute experiment
                window.AlreadyTriggeredTestName_FST108_list = 1;
                window._conv_q = window._conv_q || [];
                window._conv_q.push(["executeExperiment", "100050072"]);
            };


        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co");
        },
    },
    {
        name: "test_123",
        pageType: "list",
        callBack: () => {
            // Execute experiment
            window.AlreadyTriggeredTestName_FST123_list = 1;
            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "100050089"]);
            // console.log("Test123Found");
        },
        conditionToTriggerExperiment: () => {
            return window.location.href.includes("www.firsttable.co");
        },
    },
    ];
    /**
     * Example activation of experiments.
     * Iterates through the list of experiments and checks if the experiment is not active.
     * If the experiment is not active, it creates a new instance of the experiment.
     */
    function activateExperiments() {
        experiments.forEach((experiment) => {
            let currentExperiment = window.activatedExperiments.get(experiment.name);
            if (!window.activatedExperiments.has(experiment.name)) {
                // Create a new instance of the experiment
                new Experiment(experiment);
            } else if (!!currentExperiment) {
                currentExperiment.evaluateConditions();
            }
        });
    }
    // Add mutation to check user condtion
    if (!window.convObserverAdded) {
        window.convObserverAdded = true;
        // Monitor changes in user type dynamically
        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.attributeName === "users_type") {
                    window.activatedExperiments.forEach((experiment) => {
                        experiment.evaluateConditions(); // Reevaluate conditions for all experiments
                    });
                }
            }
        });
        // Attach the observer to the body element
        observer.observe(document.querySelector("body"), {
            attributes: true,
        });
    }

    // Initial activation
    activateExperiments();
})();

(function () {
    try {
        /* main variables */
        var debug = 1;
        var variation_name = "";

        if (!window.location.pathname.includes('/booking') && window.cre_27_timerInterval) {
            clearInterval(window.cre_27_timerInterval);
            window.cre_27_timerInterval = null;
        }


    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();