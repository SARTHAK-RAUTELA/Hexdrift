(function () {
    try {
        /* main variables */
        var debug = 1;
        var variation_name = "travelShift-T45";

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
                waitForElement: function (
                    selector,
                    trigger,
                    delayInterval,
                    delayTimeout
                ) {
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
        function observeSelector(selector, callback, options = {}) {
            const doc = options.document || window.document;
            const processed = new Map();

            if (options.timeout || options.onTimeout) {
                throw new Error(`observeSelector options \`timeout\` and \`onTimeout\` are not yet implemented.`);
            }

            let obs;
            let isDone = false;

            const done = () => {
                if (obs) obs.disconnect();
                isDone = true;
            };

            const processElement = el => {
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

            const lookForSelector = elParent => {
                if (elParent.nodeType === Node.ELEMENT_NODE) {
                    if (elParent.matches(selector) && processElement(elParent)) {
                        return true;
                    }
                    const elements = elParent.querySelectorAll(selector);
                    for (const el of elements) {
                        if (processElement(el)) return true;
                    }
                }
                return false;
            };

            lookForSelector(doc.documentElement);

            if (!isDone) {
                obs = new MutationObserver(mutationsList => {
                    for (const record of mutationsList) {
                        if (record.addedNodes && record.addedNodes.length) {
                            for (const addedNode of record.addedNodes) {
                                if (addedNode.nodeType === Node.ELEMENT_NODE) {
                                    if (lookForSelector(addedNode)) return true;
                                }
                            }
                        }
                    }
                });
                obs.observe(doc, {
                    attributes: false,
                    childList: true,
                    subtree: true,
                });
            }

            return done;
        }

        // Helper functions for localStorage handling
        function setLocalStorage(name, value, minutes) {
            const item = {
                value: value,
                expiry: minutes ? Date.now() + minutes * 60 * 1000 : null
            };
            localStorage.setItem(name, JSON.stringify(item));
        }

        function getLocalStorage(name) {
            const itemStr = localStorage.getItem(name);
            if (!itemStr) return null;
            const item = JSON.parse(itemStr);
            if (item.expiry && Date.now() > item.expiry) {
                localStorage.removeItem(name); // Expired item, remove it
                return null;
            }
            return item.value;
        }

        function eraseLocalStorage(name) {
            localStorage.removeItem(name);
        }

        function eraseSpecificLocalStorages(storageNames) {
            storageNames.forEach(function (name) {
                localStorage.removeItem(name);
            });
        }

        const initialTimeInMinutes = 30;

        function updateCountdown() {
            var countdownElement = document.getElementById('timer');
            var now = Date.now();
            var remainingTime = parseInt(getLocalStorage('endTime')) - now;

            if (remainingTime > 0) {
                var minutes = Math.floor((remainingTime / 1000) / 60);
                var seconds = Math.floor((remainingTime / 1000) % 60);
                if (countdownElement) {
                    countdownElement.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
                }
                // Call updateCountdown again after 1 second
                setTimeout(updateCountdown, 1000);
            } else {
                eraseLocalStorage('endTime'); // Clear the end time
                setTimeout(() => {
                    // Reset the timer
                    setLocalStorage('endTime', Date.now() + (initialTimeInMinutes * 60 * 1000), initialTimeInMinutes);
                    updateCountdown(); // Start countdown immediately after resetting
                }, 1000); // Delay before restarting
            }
        }

        function startCountdown() {
            // Set the end time in localStorage if it doesn't exist
            if (!getLocalStorage('endTime')) {
                setLocalStorage('endTime', Date.now() + (initialTimeInMinutes * 60 * 1000), initialTimeInMinutes);
            }
            updateCountdown(); // Initial call to update the countdown immediately
        }

        var scriptStorages = [
            'endTime',           // LocalStorage storing the countdown end time
            'firstTimeTimer',    // LocalStorage indicating the first time the timer was set
            'timerProductTitle'  // LocalStorage storing the product title associated with the timer
        ];

        var helper = _$();
        // Variation Init
        function init() {
            setTimeout(function () {
                helper.log('Log inside from init');
                _$('body').addClass(variation_name);

                if (!getLocalStorage('firstTimeTimer')) {
                    // Product not a flight nor a car and only one item in cart
                    if (document.querySelectorAll('[data-crid*="product_card--cart"]').length === 1) {
                        if (document.querySelector('[data-path*="/cart"]') && !document.querySelector('[data-crid="product_card product_card--cart product_card--flight"]') && !document.querySelector('[data-crid="product_card product_card--cart product_card--car"]')) {
                            setLocalStorage('firstTimeTimer', "True", 30);
                            if (window.innerWidth > 960) {
                                helper.waitForElement('[data-crid="price_Lock_timer"]', function () {
                                    if (!document.querySelector('.lock_time')) {
                                        document.querySelector('[data-crid="price_Lock_timer"]').insertAdjacentHTML('afterbegin', `Price locked for <span class="lock_time" id="timer"></span>`);
                                        var timeproduct = document.querySelector('.lock_time').closest('[data-crid*="product_card"]');
                                        var timerProductTitle = timeproduct.querySelector('[data-crid="product_card_heading"]').textContent;
                                        setLocalStorage('timerProductTitle', timerProductTitle, 30);
                                    }
                                }, 50, 15000);
                            }
                            else {
                                if (!document.querySelector('.lock_time_mobile')) {
                                    document.querySelector('[class*=MobileStickyFooter_leftWrapper]').insertAdjacentHTML('afterend', `<div class="mobile_timer_container">Price locked for <span class="lock_time_mobile" id="timer"></span></div>`);
                                }
                                if (document.querySelectorAll('[data-crid="Selected-package-section"]>div').length == 1) {
                                    var timerProductTitle = document.querySelector('[data-crid="card_item_details"]').textContent;
                                    setLocalStorage('timerProductTitle', timerProductTitle, 30);
                                }
                            }
                        }
                    }
                } else if (getLocalStorage('firstTimeTimer')) {
                    console.log("firtstbda")
                    var privioustitle = getLocalStorage('timerProductTitle');
                    var lastMatch = null; // Variable to store the last matching element
                    var matchCount = 0; // Initialize a counter to track matches

                    document.querySelectorAll('[data-crid*="product_card--cart"] [data-crid="product_card_heading"]').forEach(function (ele) {
                        if (ele.textContent == privioustitle) {
                            matchCount++; // Increment the counter for each match
                            lastMatch = ele; // Store the last matching element

                            console.log('product available');
                        }
                    });
                    if (window.innerWidth > 960) {
                        if (matchCount > 1 && lastMatch) {
                            // If there is more than one match, insert the timer in the last matching element
                            if (!document.querySelector('.lock_time')) {
                                lastMatch.closest('[data-crid*="product_card--cart"]').querySelector('[data-crid="price_Lock_timer"]').insertAdjacentHTML('afterbegin', `Price locked for <span class="lock_time" id="timer"></span>`);
                            }
                        } else if (matchCount === 1 && lastMatch) {
                            // If only one match, insert the timer in that single matched element
                            if (!document.querySelector('.lock_time')) {
                                lastMatch.closest('[data-crid*="product_card--cart"]').querySelector('[data-crid="price_Lock_timer"]').insertAdjacentHTML('afterbegin', `Price locked for <span class="lock_time" id="timer"></span>`);
                            }
                        }
                    } else {
                        helper.waitForElement('[class*=MobileStickyFooter_leftWrapper]', function () {
                            console.log("hello")
                            if (lastMatch) {
                                if (!document.querySelector('.lock_time_mobile')) {
                                    document.querySelector('[class*=MobileStickyFooter_leftWrapper]').insertAdjacentHTML('afterend', `<div class="mobile_timer_container">Price locked for <span class="lock_time_mobile" id="timer"></span></div>`);
                                }
                            } else {
                                if (!document.querySelector('.lock_time_mobile') && privioustitle) {
                                    document.querySelector('[class*=MobileStickyFooter_leftWrapper]').insertAdjacentHTML('afterend', `<div class="mobile_timer_container">Price locked for <span class="lock_time_mobile" id="timer"></span></div>`);
                                }
                            }
                        }, 50, 15000);
                    }
                }

                startCountdown(); // Start the countdown when everything is initialized

            }, 2000);
        }

        if (!window.observeSelectorT45) {
            window.observeSelectorT45 = true;
            observeSelector('#navBardesktopCart', function () {
                console.log("item removed")
                if (window.innerWidth > 960) {
                    setTimeout(function () {
                        if (window.location.href.includes('/cart')) {
                            var privioustitle = getLocalStorage('timerProductTitle');
                            if (privioustitle) {
                                var foundMatch = false; // Initialize a flag to track if any match is found

                                document.querySelectorAll('[data-crid*="product_card--cart"] [data-crid="product_card_heading"]').forEach(function (ele) {
                                    if (ele.textContent === privioustitle) {
                                        foundMatch = true; // Set flag to true if a match is found
                                    }
                                });

                                if (!foundMatch) {
                                    // If no match is found after checking all product titles, remove the session storage item
                                    eraseSpecificLocalStorages(['endTime', 'firstTimeTimer', 'timerProductTitle']);
                                    document.querySelector('body').classList.remove(variation_name)
                                    console.log("all session cookies")
                                    console.log('Session removed because no matching product title was found');
                                } else {
                                    console.log('Matching product title found');
                                }
                            }
                            init()
                        }
                    }, 2000);
                }
            })


        }
        function Test_45perfObserver(list, observer) {
            list.getEntries().forEach((entry) => {
                if (entry.entryType === "mark" && entry.name === "afterHydrate") {
                    observer.disconnect();
                    // Trigger the testVariable
                    helper.waitForElement('[data-crid*="product_card--cart"]', init, 50, 5000);
                    console.log("test triggered");
                    window.isHydrated = true;
                }
            });
        }

        if (window._travelshift && window._travelshift.chunksLoadingData && window._travelshift.chunksLoadingData.status != "loaded") {
            const observer = new PerformanceObserver(Test_45perfObserver);
            observer.observe({ entryTypes: ["mark"] });
        } else {
            setTimeout(function () {
                helper.waitForElement('[data-crid*="product_card--cart"]', init, 50, 5000);
                console.log("test triggered set timeout");
            }, 2000);
        }

    } catch (e) {
        console && console.log(e, "Error in Test" + variation_name);
    }
})();