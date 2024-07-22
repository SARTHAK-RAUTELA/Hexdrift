(function () {
    try {
        /* main variables */
        var debug = 1;
        var variation_name = "cre-t-4";

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
            };
            return function (selector) {
                return new bm(selector);
            };
        });

        function waitForOptions(trigger) {
            var interval = setInterval(function () {
                if (typeof window.options != "undefined") {
                    clearInterval(interval);
                    trigger();
                }
            }, 50);
            setTimeout(function () {
                clearInterval(interval);
            }, 15000);
        }

        var creT4HtmlSection = `
      <div class="cre-t-4-header"></div>
      <div class="cre-t-4-subheader"></div>
    `;
        var creT4LeftHtmlSection = ` <div class="cre-t-4-wrapper cre-t-4-wrapper-left">${creT4HtmlSection}</div> `;
        var creT4RightHtmlSection = ` <div class="cre-t-4-wrapper cre-t-4-wrapper-right">${creT4HtmlSection}</div> `;
        var creT4ImageHtmlSection = ` <div class="cre-t-4-wrapper cre-t-4-wrapper-img"></div> `;

        var helper = _$();

        function loginPage() {
            document.querySelector(".hs-form.stacked.hs-custom-form").closest(".full-width-form").classList.add("hide-login-page-form");
        }

        function buildingPage() {
            var forceInterval = setInterval(function () {
                document.querySelectorAll(".hs-form.stacked.hs-custom-form").forEach(function (item) {
                    item.closest(".form").classList.add("hide-login-page-form");
                    item.closest(".form").previousElementSibling.classList.add("cre-t-04-full-width");
                    item.closest(".form").parentElement.classList.add("cre-t-4-form-parent");
                    if (item.closest(".form").closest(".row-fluid-wrapper")) {
                        item.closest(".form").closest(".row-fluid-wrapper").classList.add("cre-t-4-form-grand-parent");
                    }
                });
            }, 50);

            setTimeout(function () {
                clearInterval(forceInterval);
            }, 10000);
        }

        function industries() {
            var forceInterval = setInterval(function () {
                document.querySelectorAll(".hs-form.stacked.hs-custom-form").forEach(function (item) {
                    if (item.closest(".span6 ")) {
                        item.closest(".span6 ").classList.add("hide-login-page-form");
                        item.closest(".span6").previousElementSibling.classList.add("cre-t-04-full-width");
                        item.closest(".span6").parentElement.classList.add("cre-t-4-form-parent");
                        if (item.closest(".span6").closest(".row-fluid-wrapper")) {
                            item.closest(".span6").closest(".row-fluid-wrapper").classList.add("cre-t-4-form-grand-parent");
                        }
                    }
                    if (item.closest(".full-width-form")) {
                        item.closest(".full-width-form").classList.add("hide-login-page-form");
                    }
                });
            }, 50);

            setTimeout(function () {
                clearInterval(forceInterval);
            }, 10000);
        }

        function property() {
            var forceInterval = setInterval(function () {
                document.querySelectorAll(".hs-form.stacked.hs-custom-form").forEach(function (item) {
                    if (item.closest(".form")) {
                        item.closest(".form").classList.add("hide-login-page-form");
                        item.closest(".form").previousElementSibling.classList.add("cre-t-04-full-width");
                        item.closest(".form").parentElement.classList.add("cre-t-4-form-parent");
                        if (item.closest(".form").closest(".row-fluid-wrapper")) {
                            item.closest(".form").closest(".row-fluid-wrapper").classList.add("cre-t-4-form-grand-parent");
                        }
                    }
                    if (item.closest(".full-width-form")) {
                        item.closest(".full-width-form").classList.add("hide-login-page-form");
                    }
                });
            }, 50);

            setTimeout(function () {
                clearInterval(forceInterval);
            }, 10000);
        }

        function homePage() {
            var forceInterval = setInterval(function () {
                document.querySelectorAll(".hs-form.stacked.hs-custom-form").forEach(function (item) {
                    if (item.closest(".form-side")) {
                        item.closest(".form-side").classList.add("hide-login-page-form");
                        item.closest(".form-side").previousElementSibling.classList.add("cre-t-04-full-width");
                        item.closest(".form-side").parentElement.classList.add("cre-t-4-form-parent");

                        if (item.closest(".form-side").closest(".row-fluid-wrapper")) {
                            item.closest(".form-side").closest(".row-fluid-wrapper").classList.add("cre-t-4-form-grand-parent");
                        }
                    }
                    // if(item.closest('.full-width-form')){
                    //     item.closest('.full-width-form').classList.add('hide-login-page-form');
                    // }
                });
            }, 50);

            setTimeout(function () {
                clearInterval(forceInterval);
            }, 10000);
        }

        function maintenanceLeftHtml() {
            _$("body").addClass("cre-t-4-maintenance");
            helper.waitForElement(
                ".content.cre-t-04-full-width .info img",
                function () {
                    var forceInterval = setInterval(function () {
                        if (!document.querySelector(".cre-t-4-wrapper-left")) {
                            var content = document.querySelector(".content.cre-t-04-full-width h1.h2");
                            if (content) {
                                content.insertAdjacentHTML("afterend", creT4LeftHtmlSection);
                            }
                        }

                        var creHeader = document.querySelector("#main-content .row-depth-1.row-number-1 .content.cre-t-04-full-width h1.h2");
                        var creNewHeader = document.querySelector(".cre-t-4-wrapper-left .cre-t-4-header");
                        if (creHeader && !creNewHeader.innerHTML) {
                            creNewHeader.insertAdjacentHTML("beforeend", creHeader.outerHTML);
                        }

                        var creSubHeaderElements = document.querySelectorAll("#main-content .row-depth-1.row-number-1 .content.cre-t-04-full-width .info p");
                        var creSubHeader = document.querySelector(".cre-t-4-wrapper-left .cre-t-4-subheader");
                        var creImageElements = document.querySelector("#main-content .row-depth-1.row-number-1 .content.cre-t-04-full-width .info p > img");

                        if (creImageElements) {
                            creImageElements.parentElement.classList.add("cre-t-04-img-parent");
                            var creSubHeaderElements1 = document.querySelectorAll("#main-content .row-depth-1.row-number-1 .content.cre-t-04-full-width .info p:not(.cre-t-04-img-parent)");
                            creSubHeaderElements1.forEach(function (subText) {
                                if (!subText.classList.contains("processed")) {
                                    subText.classList.add("processed");
                                    creSubHeader && creSubHeader.insertAdjacentHTML("beforeend", subText.outerHTML);
                                }
                            });
                        } else {
                            creSubHeaderElements.forEach(function (subText) {
                                if (!subText.classList.contains("processed")) {
                                    subText.classList.add("processed");
                                    creSubHeader && creSubHeader.insertAdjacentHTML("beforeend", subText.outerHTML);
                                }
                            });
                        }
                    }, 50);

                    setTimeout(function () {
                        clearInterval(forceInterval);
                    }, 10000);
                },
                50,
                25000
            );
        }

        function maintenanceRightHtml() {
            _$("body").addClass("cre-t-4-maintenance");
            helper.waitForElement(
                ".content.cre-t-04-full-width .info img",
                function () {
                    var forceInterval = setInterval(function () {
                        if (!document.querySelector(".cre-t-4-wrapper-right")) {
                            var content = document.querySelector(".right.cre-t-4-form-parent .info ");
                            if (content) {
                                content.insertAdjacentHTML("beforebegin", creT4RightHtmlSection);
                            }
                        }

                        var creNewHeader = document.querySelector(".cre-t-4-wrapper-right .cre-t-4-header");
                        var creSubHeader = document.querySelector(".cre-t-4-wrapper-right .cre-t-4-subheader");

                        var creHeader = document.querySelector(".right.cre-t-4-form-parent .info h5");
                        if (creHeader && !creNewHeader.innerHTML) {
                            creNewHeader.insertAdjacentHTML("beforeend", creHeader.outerHTML);
                        }

                        var creImageElements = document.querySelector(".right.cre-t-4-form-parent .info p > img");
                        if (creImageElements) {
                            creImageElements.parentElement.classList.add("cre-t-04-img-parent1");

                            var creSubHeaderElements1 = document.querySelectorAll(".right.cre-t-4-form-parent .info p:not(.cre-t-04-img-parent1)");
                            creSubHeaderElements1.forEach(function (subText) {
                                if (!subText.classList.contains("processed")) {
                                    subText.classList.add("processed");
                                    creSubHeader && creSubHeader.insertAdjacentHTML("beforeend", subText.outerHTML);
                                }
                            });
                        } else {
                            var creSubHeaderElements = document.querySelectorAll(".right.cre-t-4-form-parent .info p");
                            creSubHeaderElements.forEach(function (subText) {
                                if (!subText.classList.contains("processed")) {
                                    subText.classList.add("processed");
                                    creSubHeader && creSubHeader.insertAdjacentHTML("beforeend", subText.outerHTML);
                                }
                            });
                        }
                    }, 50);

                    setTimeout(function () {
                        clearInterval(forceInterval);
                    }, 10000);
                },
                50,
                25000
            );
        }

        function maintenanceImageHtml() {
            helper.waitForElement(
                '.cre-t-04-full-width p img[alt="laptop"]',
                function () {
                    var forceInterval = setInterval(function () {
                        var creOldImage = document.querySelector('.cre-t-04-full-width p img[alt="laptop"]');

                        var creOldImageParent = creOldImage.closest("p");
                        if (creOldImageParent) {
                            creOldImageParent.classList.add("cre-t-4-img-parent3");
                            creOldImageParent.parentElement.classList.add("cre-t-4-img-parent2");
                            creOldImageParent.parentElement.parentElement.classList.add("cre-t-4-img-parent1");

                            if (!document.querySelector(".cre-t-4-wrapper-img")) {
                                var content = document.querySelector(".cre-t-4-img-parent2.hs_cos_wrapper");
                                if (content) {
                                    content.insertAdjacentHTML("afterend", creT4ImageHtmlSection);
                                }
                            }

                            var creNewImg = document.querySelector(".cre-t-4-wrapper.cre-t-4-wrapper-img");
                            var creOldImage1 = document.querySelector('.cre-t-04-full-width p.cre-t-4-img-parent3 img[alt="laptop"]');

                            if (creOldImage1 && !creNewImg.innerHTML) {
                                creNewImg.insertAdjacentHTML("beforeend", creOldImage1.outerHTML);
                            }
                        }
                    }, 50);

                    setTimeout(function () {
                        clearInterval(forceInterval);
                    }, 10000);
                },
                50,
                25000
            );
        }

        function pageDetectionWithConsole() {
            console.log("Test 4 Activated");
            if (window.location.pathname === "/building-maintenance-planning-solution") {
                _$("body").addClass("cre-t-4-building-page");
                helper.waitForElement(".hs-form.stacked.hs-custom-form", buildingPage, 50, 15000);
                maintenanceLeftHtml();
                maintenanceRightHtml();
            } else if (window.location.pathname === "/maintenance-schedules/other-industries") {
                _$("body").addClass("cre-t-4-industries-page");
                helper.waitForElement(".hs-form.stacked.hs-custom-form", industries, 50, 15000);
                maintenanceImageHtml();
            } else if (window.location.pathname === "/maintenance-schedules/residential-properties") {
                _$("body").addClass("cre-t-4-property-page");
                helper.waitForElement(".hs-form.stacked.hs-custom-form", property, 50, 15000);
                maintenanceLeftHtml();
            } else if (window.location.pathname === "/maintenance-schedules/hvac") {
                _$("body").addClass("cre-t-4-hvac-page");
                helper.waitForElement(".hs-form.stacked.hs-custom-form", property, 50, 15000);
            } else if (window.location.pathname === "/maintenance-schedules/sports") {
                _$("body").addClass("cre-t-4-sports-page");
                helper.waitForElement(".hs-form.stacked.hs-custom-form", property, 50, 15000);
                maintenanceLeftHtml();
            } else if (window.location.pathname === "/maintenance-schedules/government") {
                _$("body").addClass("cre-t-4-government-page");
                helper.waitForElement(".hs-form.stacked.hs-custom-form", property, 50, 15000);
                maintenanceLeftHtml();
            } else if (window.location.pathname === "/maintenance-schedules/facilities-maintenance") {
                _$("body").addClass("cre-t-4-facilities-page");
                helper.waitForElement(".hs-form.stacked.hs-custom-form", property, 50, 15000);
                maintenanceLeftHtml();
            } else if (window.location.pathname === "/maintenance-schedules/education") {
                _$("body").addClass("cre-t-4-education-page");
                helper.waitForElement(".hs-form.stacked.hs-custom-form", property, 50, 15000);
                maintenanceLeftHtml();
            } else if (window.location.pathname === "/maintenance-schedules/healthcare") {
                _$("body").addClass("cre-t-4-healthcare-page");
                helper.waitForElement(".hs-form.stacked.hs-custom-form", property, 50, 15000);
                maintenanceLeftHtml();
            } else if (window.location.pathname === "/products/preventative-maintenance-software") {
                _$("body").addClass("cre-t-4-preventative-software-page");
                helper.waitForElement(".hs-form.stacked.hs-custom-form", property, 50, 15000);
            } else if (window.location.pathname === "/") {
                _$("body").addClass("cre-t-4-home-page");
                helper.waitForElement(".hs-form.stacked.hs-custom-form", homePage, 50, 15000);
            }
            // else if (window.location.pathname === "/what-is-sfg20") {
            //   _$("body").addClass("cre-t-4-sfg20-page");
            //   helper.waitForElement(".hs-form.stacked.hs-custom-form", property, 50, 15000);
            // }
            // else if (window.location.pathname === "/login") {
            //   _$("body").addClass("cre-t-4-login-page");
            //   helper.waitForElement(".hs-form.stacked.hs-custom-form", loginPage, 50, 15000);
            // }
        }

        /* Variation Init */
        function init() {
            helper.log("Log inside from init");
            _$("body").addClass(variation_name);

            // pageDetection();
            pageDetectionWithConsole();
        }

        // need to work on remaining section design per page
        // please work on function basis start from homePage

        /* Initialise variation */
        helper.waitForElement("body", init, 50, 25000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();