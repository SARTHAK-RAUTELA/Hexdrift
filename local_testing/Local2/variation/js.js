// SPA/Convert Code

if (!window.globalExecutedTs) {
    function checkURLchange() {
        if (window.location.href + window.location.hash != oldURL) {
            oldURL = window.location.href + window.location.hash;
            console.log('URL Changed and will fire Convert');
            window._conv_q = _conv_q || [];
            window._conv_q.push(['run', 'true']);
        }
    }
    window.globalExecutedTs = true;
    var oldURL = window.location.href + window.location.hash;
    setInterval(checkURLchange, 100);
}

//Custom Audiance for logged our and logged in users
try {
    // function for setting session cookie--------
    function setSessioncookie(name, value) {
        if (name && value) {
            document.cookie = `${name}=${value}; path=/`;
        }
    }

    // function for removing session cookie-------
    function removeSessionCookie(name) {
        if (name) {
            document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        }
    }

    // Wait for element function -----------------
    function waitForElement(selector, trigger) {
        var interval = setInterval(function() {
            if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
                clearInterval(interval);
                trigger();
            }
        }, 50);
        setTimeout(function() {
            clearInterval(interval);
        }, 15000);
    }

    function init() {
        //Setting data-path to body---------------------------------
        if (document && document.querySelector && document.querySelector('body')) {
            document.querySelector('body').dataset.path = window.location.pathname;
            document.querySelector('body').dataset.url = window.location.href;
        }

        // Remove the cookie at first--------------------------------
        removeSessionCookie('logged_out_users');

        // If logged out user----------------------------------------
        waitForElement('body[data-attribute="logged-out"]', function() {
            setSessioncookie('logged_out_users', 'true');
        });

        // If logged In user----------------------------------------
        waitForElement('body[data-attribute="logged-in"]', function() {
            setSessioncookie('logged_out_users', 'false');
        });
    }
    //checking the login log out condition for a certain interval-------
    var checkForLoggin = setInterval(function() {
        init();
    }, 50);

    setTimeout(function() {
        clearInterval(checkForLoggin);
    }, 5000);
} catch (e) {
    console.log(e, 'error in setting data-path and login,logout cookie');
}

//Cro Mode (QA Test cookie)
(function() {
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
            console.log(`CRO Mode enabled: ${mode}`);
            setCookie('cro_mode', mode, {
                duration: 1,
            });
        } else {
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
            console.log('QA Mode Active');
        } else {
            enableQAMode('');
        }
    }
    initCROMode();
})();

// The code below is added for the Convert Experiments experiments and manual location trigger
(function() {
    try {
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
            'body ',
            function() {
                if (document && document.querySelector && document.querySelector('body')) {
                    document.querySelector('body').dataset.path = window.location.pathname;
                    document.querySelector('body').dataset.url = window.location.href;
                }
            },
            50,
            15000
        );

        var experiments = {
            // Experiments

            Undetectable_AI_Tests() {
                if (window.location.href.includes('https://undetectable.ai/')) {
                    lib.waitForElement(
                        'body[data-attribute="logged-out"]',
                        function() {
                            if (!window.Test28AlreadyActivated) {
                                window.Test28AlreadyActivated = true;
                                window._conv_q = window._conv_q || [];
                                window._conv_q.push(['executeExperiment', '100045408']);
                                window.Test_23 = 1;
                            }
                        },
                        50,
                        15000
                    );

                    lib.waitForElement(
                        'body[data-attribute="logged-out"]',
                        function() {
                            if (!window.Test_35AlreadyActivated) {
                                window.Test_35 = 1;
                                window._conv_q = window._conv_q || [];
                                window._conv_q.push(['executeExperiment', '100045944']);
                                window.Test_35AlreadyActivated = true;
                            }
                        },
                        50,
                        15000
                    );
                    lib.waitForElement(
                        'body[data-attribute="logged-out"]',
                        function() {
                            if (!window.Test_33AlreadyActivated) {
                                window.Test_33 = 1;
                                window._conv_q = window._conv_q || [];
                                window._conv_q.push(['executeExperiment', '100046186']);
                                window.Test_33AlreadyActivated = true;
                            }
                        },
                        50,
                        15000
                    );

                    lib.waitForElement(
                        'body[data-attribute="logged-out"]',
                        function() {
                            if (!window.Test_32AlreadyActivated) {
                                window.Test_32 = 1;
                                window._conv_q = window._conv_q || [];
                                window._conv_q.push(['executeExperiment', '100046226']);
                                window._conv_q.push(['executeExperiment', '100046391']);
                                window.Test_32AlreadyActivated = true;
                            }
                        },
                        50,
                        15000
                    );

                    // test 34 custom activation----
                    lib.waitForElement('body[data-attribute="logged-out"]', function() {
                        if (!window.Test_34AlreadyActivated) {
                            window.Test_34 = 1;
                            window._conv_q = window._conv_q || [];
                            window._conv_q.push(["executeExperiment", "100046268"]);
                            //  console.log("Experiment_34 Activated")
                            window.Test_34AlreadyActivated = true;
                        }
                    }, 50, 15000);

                    // test 37 custom activation----
                    lib.waitForElement('body[data-attribute="logged-out"]', function() {
                        if (!window.Test_37AlreadyActivated) {
                            window.Test_37 = 1;
                            window._conv_q = window._conv_q || [];
                            window._conv_q.push(["executeExperiment", "100046275"]);
                            //  console.log("Experiment_37 Activated")
                            window.Test_37AlreadyActivated = true;
                        }
                    }, 50, 15000);


                    // test 42 custom activation----
                    lib.waitForElement('body[data-attribute="logged-out"]', function() {
                        if (!window.Test_42AlreadyActivated) {
                            window.Test_42 = 1;
                            window._conv_q = window._conv_q || [];
                            window._conv_q.push(["executeExperiment", "100046464"]);
                            //  console.log("Experiment_42 Activated")
                            window.Test_42AlreadyActivated = true;
                        }
                    }, 50, 15000);
                }
            },
        };

        //Activate
        experiments.Undetectable_AI_Tests();
    } catch (e) {
        if (debug) console.log(e, 'Error in Global JavaScript');
    }
})();

// Code for test Undetectable 12------------------------------------
// ALL users, desktop and mobile but exclude all logged-in users who have been members for more than 24 hours.
(function() {
    try {
        function waitForElement(selector, trigger) {
            var interval = setInterval(function() {
                if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
                    clearInterval(interval);
                    trigger();
                }
            }, 50);
            setTimeout(function() {
                clearInterval(interval);
            }, 15000);
        }

        // Function to check if the user has been a member for less than 24 hours
        function checkIfLessThan24Hours(time) {
            if (time) {
                const storedDate = new Date(time);
                const currentDate = new Date();
                const timeDifference = currentDate - storedDate;
                const hoursDifference = timeDifference / (1000 * 60 * 60);
                console.log(hoursDifference);
                return hoursDifference < 24;
            }
            return false; // Return false if time is not valid or time is not available
        }

        // Function to set the current time in local storage
        function setCurrentTime() {
            const currentDateTime = new Date().toISOString();
            localStorage.setItem('CRE24hoursCountDown', currentDateTime);
        }

        if (window.location.href.includes('https://undetectable.ai/pricing')) {
            waitForElement('body[data-attribute="logged-out"]', function() {
                // Check for logged-out users
                if (localStorage.getItem('CRE24hoursCountDown')) {
                    localStorage.removeItem('CRE24hoursCountDown');
                }

                if (document.querySelector('body').getAttribute('userUnder24Hours')) {
                    document.querySelector('body').removeAttribute('userUnder24Hours');
                }
                if (!window.Test12AlreadyActivated) {
                    window.creUndetectable_12 = 1;
                    window._conv_q = window._conv_q || [];
                    window._conv_q.push(['executeExperiment', '100045701']);
                    window.Test12AlreadyActivated = true;
                }
            });

            // Check for logged-in users
            waitForElement('[data-attribute="logged-in"]', function() {
                const storedTime = localStorage.getItem('CRE24hoursCountDown');
                if (storedTime) {
                    if (checkIfLessThan24Hours(storedTime)) {
                        // Trigger the test for users who have been members for less than 24 hours
                        if (!window.Test12AlreadyActivated) {
                            window.creUndetectable_12 = 1;
                            window._conv_q = window._conv_q || [];
                            window._conv_q.push(['executeExperiment', '100045701']);
                            window.Test12AlreadyActivated = true;
                        }
                        // Setting a data attribute that will display that the 24 hours condition is running--
                        document.querySelector('body').setAttribute('userUnder24Hours', 'true');
                    }
                } else {
                    // If the 24-hour countdown hasn't been set, set it and activate the test
                    setCurrentTime();
                    if (!window.Test12AlreadyActivated) {
                        window.creUndetectable_12 = 1;
                        window._conv_q = window._conv_q || [];
                        window._conv_q.push(['executeExperiment', '100045701']);
                        window.Test12AlreadyActivated = true;
                    }
                    document.querySelector('body').setAttribute('userUnder24Hours', 'true');
                }
            });
        }
    } catch (e) {
        console.log(e, 'Error in custom activation logic for Test 12');
    }
})();