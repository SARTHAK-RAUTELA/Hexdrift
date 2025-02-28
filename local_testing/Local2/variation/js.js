(function () {
    try {
        /* Main Variables */
        var debug = 1;
        var variation_name = "cre-Cambridge_8";
        /* Helper Library */
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
                waitForElement: function (selector, trigger, delayInterval, delayTimeout) {
                    var interval = setInterval(function () {
                        if (_$(selector).value.length) {
                            clearInterval(interval);
                            trigger(document.querySelector(selector));
                        }
                    }, delayInterval);
                    setTimeout(function () {
                        clearInterval(interval);
                    }, delayTimeout);
                },
                live: function (selector, event, callback, context) {
                    function addEvent(el, type, handler) {
                        if (el.attachEvent) el.attachEvent("on" + type, handler);
                        else el.addEventListener(type, handler);
                    }
                    function live(selector, event, callback, context) {
                        addEvent(context || document, event, function (e) {
                            var found,
                                el = e.target || e.srcElement;
                            while (el && el.matches && el !== context && !(found = el.matches(selector)))
                                el = el.parentElement;
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
        var helper = _$();
        helper.live('.Cre_application', 'click', function () {
            document.body.classList.add('hidestup4');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            helper.waitForElement('.wpb_wrapper > #gform_wrapper_71', function () {
                // Check if the element with 75% width exists
                helper.waitForElement('.gf_progressbar_percentage[style="width:75%;"]', function () {
                    let progressBar = document.querySelector('.gf_progressbar_percentage[style="width:75%;"]');
                    if (progressBar) {
                        updatePopupContent();// Add class if progress bar is 75%
                    }
                }, 50, 5000);
            }, 500, 15000);
        });
        helper.live('.CrePrevious', 'click', function () {
            document.body.classList.remove('hidestup4');
            // Check if the progress bar with 75% width is NOT present
            helper.waitForElement('.gf_progressbar_percentage[style="width:75%;"]', function () {
                if (document.querySelector('.gf_progressbar_percentage[style="width:75%;"]')) {
                    document.body.classList.remove('Cre_showcta');
                }
            }, 50, 5000);
            helper.waitForElement('#gform_previous_button_71', function (prevButton) {
                prevButton.click();
            }, 50, 5000);
        });
        helper.live('.Cre_price', 'click', function () {
            document.querySelector('.cre_cta').insertAdjacentHTML(
                'beforeend',
                '<img id="gform_ajax_spinner_71" class="gform_ajax_spinner cre_loader" src="https://www.reachcambridge.com/wp-content/plugins/gravityforms/images/spinner.svg" alt="">'
            );
            sessionStorage.setItem('redirecting', 'true');
            helper.waitForElement('#gform_submit_button_71', function (submitButton) {
                const form = submitButton.closest('form#gform_71');
                if (form) {
                    form.submit();
                } else {
                    submitButton.style.display = 'block';
                    submitButton.click();
                    submitButton.style.display = 'none';
                }
            }, 50, 5000);
        });
        helper.live('.Cre_goaccount', 'click', function () {
            document.body.classList.remove('hidestup4');
        });
        helper.live('#gform_next_button_71_51', 'click', function () {
            helper.waitForElement('.wpb_wrapper > #gform_wrapper_71', function () {
                // Check if the element with 75% width exists
                helper.waitForElement('.gf_progressbar_percentage[style="width:75%;"]', function () {
                    let progressBar = document.querySelector('.gf_progressbar_percentage[style="width:75%;"]');
                    if (progressBar) {
                        updatePopupContent();// Add class if progress bar is 75%
                    }
                }, 50, 5000);
            }, 500, 15000);
        });
        function updatePopupContent() {
            const nameElement = document.querySelector('.apply-right-course.first');
            const courseDateElement = document.querySelector('#sidebar .apply-right-programs .apply-right-title');
            const priceElement = document.querySelector('.apply-right-fees .apply-right-total');
            if (!nameElement || !courseDateElement || !priceElement) {
                return;
            }
            const name = nameElement.textContent.trim() || 'Student';
            const courseDate = courseDateElement.textContent.trim() || 'your selected date';
            const price = priceElement.textContent.trim() || 'Price not available';
            const popupHTML = `
    <div class="cre_popupshow">
    <div class="Ctacontroll">
    <p class='CrePrevious'>Previous</p>
    <p class="Cre_application">Next</p>
    </div>
    <div class="Cre_popupinside">
    <h2>Pay your deposit</h2>
    <p>Please pay now to guarantee ${name}’s course and ${courseDate}.</p>
    <div class="cre_cta">
    <span class="Cre_price">Pay Now (${price})</span>
    <span class="Cre_goaccount">Request to Pay Later</span>
    </div>
    </div>
    </div>
    `;
            const progressBar = document.querySelector('#gform_page_71_3[style="display:none;"]  + #gform_page_71_4');
            const existingPopup = document.querySelector('.cre_popupshow');
            if (existingPopup) {
                existingPopup.outerHTML = popupHTML;
            } else if (progressBar) {
                helper.waitForElement('#gform_page_71_3[style="display:none;"]  + #gform_page_71_4', function () {
                    let progressBar = document.querySelector('#gform_page_71_3[style="display:none;"]  + #gform_page_71_4');
                    if (progressBar) {
                        progressBar.insertAdjacentHTML("afterend", popupHTML);
                    }
                }, 50, 5000);
            }
        }
        function init() {
            _$('body').addClass(variation_name);
            function checkURLAndRedirect() {
                if (sessionStorage.getItem('redirecting') === 'true') {
                    const checkInterval = setInterval(() => {
                        if (window.location.href.includes('dashboard?reachFormEvent=Reach')) {
                            clearInterval(checkInterval);
                            document.querySelector('.page-template-dashboard').style.opacity = '0';
                            document.querySelector('.nectar-button').click();
                            window.location.href = 'https://www.reachcambridge.com/checkout';
                        }
                    }, 100);
                    setTimeout(() => clearInterval(checkInterval), 30000);
                }
            }
            checkURLAndRedirect();
        }
        // if (!window.goalclickAdded205) {
        //     window.goalclickAdded205 = true;
        //     eventHandlerT8();
        // }
        helper.waitForElement("body", init, 50, 5000);
    } catch (e) {
        console.log(e, "Error in Test " + variation_name);
    }
})();