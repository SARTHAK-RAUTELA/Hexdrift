(function () {
    try {
        /* main variables */
        var debug = 1;
        var variation_name = "cre-t-153";

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
                    for (var index = 0; index < arguments.length; index++) {
                        items.push(arguments[index]);
                    }
                    console && console.log(variation_name, items);
                },

                // Adding Class
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

                // Waiting for element to load
                waitForElement: function (selector, trigger, delayInterval, delayTimeout) {
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

                live: function (selector, event, callback, context) {
                    /****Helper Functions****/
                    // helper for enabling IE 8 event bindings
                    function addEvent(el, type, handler) {
                        if (el.attachEvent) el.attachEvent("on" + type, handler);
                        else el.addEventListener(type, handler);
                    }
                    // matches polyfill
                    this.Element &&
                        (function (ElementPrototype) {
                            ElementPrototype.matches =
                                ElementPrototype.matches ||
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
                        })(Element.prototype);
                    // live binding helper using matchesSelector
                    function live(selector, event, callback, context) {
                        addEvent(context || document, event, function (e) {
                            var found,
                                el = e.target || e.srcElement;
                            while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
                            if (found) callback.call(el, e);
                        });
                    }
                    live(selector, event, callback, context);
                },
            };
            return function (selector) {
                return new bm(selector);
            };
        });

        function setBmCookie() {
            document.cookie = "cre-t-153=cre-t-153-modal-triggered; path=/";
        }

        function getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(";");
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == " ") c = c.substring(1);
                if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
            }
            return "";
        }

        function removeContentSetCookie() {
            document.querySelector(".cre-t-153-modal-main").remove();
            setBmCookie();
        }
        // Helper Library
        // Function to determine credit text based on domain
        function generateText(domain) {

            var twoDomainPara = "This Black Friday, score 50% off First Table dinner service fees, and treat yourself to good times and great food.";
            var singleDomainPara = "This Black Friday, score 50% off all First Table service fees, and treat yourself to good times and great food.";

            switch (domain) {
                case "www.firsttable.co.nz":
                case "firsttable.co.nz":
                    return twoDomainPara; // NZ
                case "www.firsttable.com.au":
                case "firsttable.com.au":
                    return twoDomainPara; // AU
                case "www.firsttable.co.uk":
                case "firsttable.co.uk":
                    return singleDomainPara; // UK
                default:
                    return twoDomainPara;
            }
        }

        function modalInsertion() {
            var getDomain = window.location.hostname;
            var modalParagraph = generateText(getDomain);
            var modalHTML = `<div class="cre-t-153-modal-main active" style="display: none;">
    <div id="cre-t-153-modal-overlay" class="cre-t-153-overlay"></div>
    <div class="cre-t-153-modal-content">
        <div class="cre-t-153-modal-badge-wrapper">
            <img src="https://v2.crocdn.com/FirstTable/blackFridayBadge.svg" alt="badge"
                class="cre-t-153-modal-badge">
        </div>
        <div class="cre-t-153-modal-cross-icon-wrapper">
            <img src="https://v2.crocdn.com/FirstTable/crossIcon.svg"
                alt="cross_icon" class="cre-t-153-cross-icon">
        </div>
        <div class="cre-t-153-modal-logo-wrapppr">
            <img src="https://v2.crocdn.com/FirstTable/Main_Logo.png" alt=""
                class="cre-t-153-logo">
        </div>

        <div class="cre-t-153-main-title">
        <span class="cre-t-153-underLine">Get 50% off service fees</span>
        </div>
        <div class="cre-t-153-main-displayImage-wrapper">
            <img class="cre-t-153-displayImage"
                src="https://v2.crocdn.com/FirstTable/modalImage.png"
                alt="modalImage">
        </div>

        <div class="cre-t-153-text-area">
            <div class="cre-t-153-first-para">${modalParagraph}</div>
            <div class="cre-t-153-second-para">Applies only to bookings made on Friday 28 November 2025. Bookings can be for future dates.</div>
        </div>

        <div class="cre-t-153-modal-cta">
            <div class="cre-t-153-modal-cta-text">Book your 50% off table</div>
        </div>

    </div>
</div>`;
            if (!document.querySelector(".cre-t-153-modal-main")) {
                document.body.insertAdjacentHTML("afterbegin", modalHTML);
                window._conv_q = window._conv_q || []; _conv_q.push(["triggerConversion", "100037016"]);
            }

        }

        function modalHandler() {
            helper.live(".cre-t-153-overlay, .cre-t-153-modal-cross-icon-wrapper, .cre-t-153-modal-cta", "click", function () {
                removeContentSetCookie();
            });
        }

        var helper = _$();

        function startStayTimer() {
            if (sessionStorage.getItem("cre_153_modalTriggered_already") === "true") {
                return;
            }

            var session_key = "cre_153_userLandingTime";
            var trigger_seconds = 20;

            // Get landing time from sessionStorage or set new one
            var landingTime = parseInt(sessionStorage.getItem(session_key), 10);

            if (!landingTime) {
                landingTime = Date.now();
                sessionStorage.setItem(session_key, landingTime);
            }

            var triggerTime = landingTime + trigger_seconds * 1000;

            var intervalId = setInterval(() => {
                var now = Date.now();
                if (now >= triggerTime) {
                    clearInterval(intervalId);
                    var currentOrigin = window.location.origin;
                    var currentPath = window.location.pathname;
                    if (currentOrigin === "https://www.firsttable.co.nz" && (currentPath === "/" || window._conv_page_type === "list" || window._conv_page_type === "restaurant") ||
                        currentOrigin === "https://www.firsttable.com.au" && (currentPath === "/" || window._conv_page_type === "list" || window._conv_page_type === "restaurant") ||
                        currentOrigin === "https://www.firsttable.co.uk" && (currentPath === "/" || window._conv_page_type === "list" || window._conv_page_type === "restaurant")) {
                        modalInsertion();
                    }

                    sessionStorage.setItem("cre_153_modalTriggered_already", "true");
                    document.body.classList.add("cre-t-153-modal-open");
                }
            }, 1000);
        }

        /* Variation Init */
        function init() {
            _$("body").addClass(variation_name);
            if (!getCookie("cre-t-153")) {
                startStayTimer();
            }

            if (!window.EVENT_HANDLER_153) {
                modalHandler();
                window.EVENT_HANDLER_153 = true;
            }
        }

        /* Initialize variation */
        helper.waitForElement("html body", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test " + variation_name);
    }
})();