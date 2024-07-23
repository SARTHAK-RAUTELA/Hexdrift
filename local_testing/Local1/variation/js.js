(function () {
    try {
        /* main variables */
        var debug = 1;
        var variation_name = "cre-t-6";
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
        var helper = _$();
  
  
  
        //  array of locations
  
        var locationPerPerson = [
            { "tunnel": "Austin" },
            { "tunnel": "Baltimore" },
            { "tunnel": "Charlotte" },
            { "tunnel": "Lincoln Park" },
            { "tunnel": "Naperville" },
            { "tunnel": "Rosemont" },
            { "tunnel": "Cincinnati" },
            { "tunnel": "Denver" },
            { "tunnel": "Fort Worth" },
            { "tunnel": "Hollywood" },
            { "tunnel": "Woodlands" },
            { "tunnel": "Kansas City" },
            { "tunnel": "King of Prussia" },
            { "tunnel": "Minneapolis" },
            { "tunnel": "Montgomery" },
            { "tunnel": "Oklahoma City" },
            { "tunnel": "Orlando" },
            { "tunnel": "Portland" },
            { "tunnel": "Sacramento" },
            { "tunnel": "San Antonio" },
            { "tunnel": "Seattle" },
            { "tunnel": "Tampa" },
            {"tunnel": "Fort Lauderdale" },
            {"tunnel": "Houston" }
        ];
  
        // Function to wait for elements and perform the check
        function checkLocation() {
            helper.waitForElement('.welcomeContainer .sms-heading', function () {
                var smsHeading = document.querySelector('.welcomeContainer .sms-heading');
                if (smsHeading) {
                    var text = smsHeading.textContent.trim();
                    var found = false;
                    locationPerPerson.forEach(function (location) {
                        if (text.includes(location.tunnel)) {
                            found = true;
                            return;
                        }
                    });
                    if (found) {
                        helper.waitForElement('.updatePrice', function () {
                            document.querySelector('.updatePrice').textContent = '20';
                        }, 25, 50000);
                    }
                }
            }, 25, 50000);
        }
  
        checkLocation();
  
  
        var superUspBar =
            '<div class="cre-usp-bar"><span>SAVE $<span class="updatePrice">30</span>/person - 2</span> Flight Super Saver Special</div>';
        var reviewRat = ' <span class="rating fa fa-star checked"></span>';
        var addContent =
            "" +
            '<div class="cre-t-6-wrapper">' +
            '<div class="cre-t-6-container">' +
            '<div class="cre-t-6-main">' +
            '<div class="cre-t-6-txtContent">' +
            '<div class="cre-t-6-header">' +
            "<h3>A once in a lifetime experience you'll never forget</h3>" +
            '<div class="cre-bordered"></div>' +
            "</div>" +
            '<div class="cre-t-6-contentReview">' +
            '<p>"100% recommended iFly!!! We did this as a family and had an amazing time"</p>' +
            "<span><span class='cre-t-6-spaName'>- Carly </span>" +
            "<span class='cre-t-6-spano'> o. </span>" +
            reviewRat +
            reviewRat +
            reviewRat +
            reviewRat +
            reviewRat +
            "</span>" +
            "</div>" +
            "</div>" +
            "</div>" +
            '<div class="cre-card">' +
            '<div class="cre-text-6-steps">' +
            '<div class="cre-t-6-step cre-t-6-step1">' +
            '<div class="cre-step">' +
            '<span class="cre-step-number">1</span>' +
            "</div>" +
            '<div class="cre-step-name">Meet & greet with your instructor!</div>' +
            '<div class="cre-step-img"><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/iFLY/06/img1.jpg" alt="" /></div>' +
            "</div>" +
            '<div class="cre-t-6-step cre-t-6-step2">' +
            '<div class="cre-step">' +
            '<span class="step-number">2</span>' +
            "</div>" +
            '<div class="cre-step-name">Learn the basics of indoor skydiving</div>' +
            '<div class="cre-step-img"><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/iFLY/06/img2.jpg" alt="" /></div>' +
            "</div>" +
            '<div class="cre-t-6-step cre-t-6-step3">' +
            '<div class="cre-step">' +
            '<span class="cre-step-number">3</span>' +
            "</div>" +
            '<div class="cre-step-name">Gear up in professional flight gear</div>' +
            '<div class="cre-step-img"><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/iFLY/06/img3.jpg" alt="" /></div>' +
            "</div>" +
            '<div class="cre-t-6-step cre-t-6-step4">' +
            '<div class="cre-step">' +
            '<span class="cre-step-number">4</span>' +
            "</div>" +
            '<div class="cre-step-name">Experience the freedom of flight</div>' +
            '<div class="cre-step-img"><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/iFLY/06/img4.jpg" alt="" /></div>' +
            "</div>" +
            '<div class="cre-t-6-step cre-t-6-step5">' +
            '<div class="cre-step">' +
            '<span class="cre-step-number">5</span>' +
            "</div>" +
            '<div class="cre-step-name">Receive your official flight certificate</div>' +
            '<div class="cre-step-img"><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/iFLY/06/img5.jpg" alt="" /></div>' +
            "</div>" +
            "</div>" +
            "<div class='cre-text'><p>Get ready for an experience that you'll look back on as a highlight of your year.</p></div>" +
            "</div>" +
            "</div>" +
            "</div>";
        var creSuperSaver =
            "" +
            '  <div class="cre-superSaver">' +
            '      <div class="cre-superSaver-container">' +
            '          <div class="cre-superSaver-row">' +
            '              <div class="cre-textItem">' +
            '                  <p class="cre-card-text">AVOID THE CROWDS AND SAVE ~30% IN OFF-PEAK TIMES!</p>' +
            '                   <p class="cre-card-boldText">2 Flight Super Saver Special - $<span class="cre-dataPrice"></span>/person</p>' +
            '                  <p class="cre-card-subText">The Super Saver offer is valid Monday-Friday 11am-4:30pm, excluding holidays and peak periods.</p>' +
            "              </div>" +
            '              <div class="cre-quantity">' +
            '                <p class="cre-quantity">QUANTITY</p>' +
            '              <div class="cre-quantityBtn-container">' +
            '               <div class="cre-quantityBtn">' +
            '                  <button id="decreaseButton">-</button>' +
            '                  <input type="text" id="inputField" min="0" max="13" value="0">' +
            '                  <button id="increaseButton">+</button>' +
            "               </div>" +
            '                  <button id="cre-addToCart-mobile">ADD TO CART</button>' +
            "              </div>" +
            '                  <button id="cre-addToCart">ADD TO CART</button>' +
            '                  <p class="cre-card-subText_mobile">The Super Saver offer is valid Monday-Friday 11am-4:30pm, excluding holidays and peak periods.</p>' +
            "              </div>" +
            "          </div>" +
            "      </div>" +
            "  </div>";
        var cre_card_fourFlights =
            "" +
            '  <div class="cre-card-copy-fourFlights">' +
            "      <h2>Double the flying time of the 2 Flight and more than twice the fun!</h2>" +
            '      <p>This is where you can begin to develop your flying skills. <span class="cre-bold">We recommend this package to get the most from your visit.</span></p>' +
            "  </div>";
        var cre_card_twoFlights =
            "" +
            '  <div class="cre-card-copy-twoFlights">' +
            "      <h2>The perfect taster experience.</h2>" +
            "      <p>Most people leave wishing they'd flown more, but this offers great introductory value.</span>" +
            "      </p>" +
            "  </div>";
        var cre_card_tenFlights =
            "" +
            '  <div class="cre-card-copy-tenFlights">' +
            "      <h2>Share 10 flights with up to 5 flyers on one fun-filled visit.</h2>" +
            "      <p>Designed for groups who want the ultimate flying experience in one convenient package.</p>" +
            "  </div>";
        function creFourBubble() {
            var fourLi = document.querySelector(
                ".product-grid-item.cre_fourFlights .features > li:first-child"
            );
            var text = fourLi.textContent;
            let regex = /(\d{1,3})%/;
            let matchResult = text.match(regex);
            if (matchResult) {
                let extractedNumbers = parseInt(matchResult[1], 10);
                var creDealFour =
                    '<div class="cre6-popular-box cre6-discount">' +
                    '<div class="cre6-discount-wrapper"><span class="cre6-popular-text1">most popular</span> <span class="cre6-popular-text2">save 20%</span></div>' +
                    "</div>";
                return creDealFour;
            }
            return "";
        }
        function waitForElementTwo(selector, trigger) {
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
            setTimeout(function () { }, 15000);
        }
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
        function live(selector, event, callback, context) {
            // helper for enabling IE 8 event bindings
            function addEvent(el, type, handler) {
                if (el.attachEvent) el.attachEvent("on" + type, handler);
                else el.addEventListener(type, handler);
            }
            // matches polyfill
            this &&
                this.Element &&
                (function (ElementPrototype) {
                    ElementPrototype.matches =
                        ElementPrototype.matches ||
                        ElementPrototype.matchesSelector ||
                        ElementPrototype.webkitMatchesSelector ||
                        ElementPrototype.msMatchesSelector ||
                        function (selector) {
                            var node = this,
                                nodes = (node.parentNode || node.document).querySelectorAll(
                                    selector
                                ),
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
                    while (
                        el &&
                        el.matches &&
                        el !== context &&
                        !(found = el.matches(selector))
                    )
                        el = el.parentElement;
                    if (found) callback.call(el, e);
                });
            }
            live(selector, event, callback, context);
        }
        function addClass(el, cls) {
            var el = document.querySelector(el);
            if (el) {
                el.classList.add(cls);
            }
        }
        function creFamilyBubble() {
            var familyLi = document.querySelector(
                ".product-grid-item.cre_familyFlights .features > li:first-child"
            );
            var text = familyLi.textContent;
            let regex = /(\d{1,3})%/;
            let matchResult = text.match(regex);
            if (matchResult) {
                let extractedNumbers = parseInt(matchResult[1], 10);
                var creDealFamily =
                    '<div class="cre6-best-deal-box cre6-discount">' +
                    '<div class="cre6-discount-wrapper"><span class="cre6-popular-text1">best deal</span> <span class="cre6-popular-text2">save 25%</span></div>' +
                    "</div>";
                return creDealFamily;
            }
            return "";
        }
        function updateCardHeader() {
            helper.waitForElement(
                ".product-grid-item.cre_fourFlights div.product-name",
                function () {
                    var fourFlights = document.querySelector(
                        ".product-grid-item.cre_fourFlights"
                    );
                    var cardHeader = fourFlights.querySelector("div.product-name");
                    cardHeader.innerHTML = "<span>4</span> Flights";
                },
                50,
                5000
            );
            helper.waitForElement(
                ".product-grid-item.cre_twoFlights div.product-name",
                function () {
                    var twoFlights = document.querySelector(
                        ".product-grid-item.cre_twoFlights"
                    );
                    var cardHeader = twoFlights.querySelector("div.product-name");
                    cardHeader.innerHTML = "<span>2</span> Flights";
                },
                50,
                5000
            );
            helper.waitForElement(
                ".product-grid-item.cre_familyFlights div.product-name",
                function () {
                    var tenFlights = document.querySelector(
                        ".product-grid-item.cre_familyFlights"
                    );
                    var cardHeader = tenFlights.querySelector("div.product-name");
                    cardHeader.innerHTML = "<span>Friends & Family</span> 10 Flights";
                },
                50,
                5000
            );
        }
        function moveRegularPrice() {
            helper.waitForElement(
                ".product-grid-item.cre_fourFlights .cre-regularPrice",
                function () {
                    helper.waitForElement(
                        ".product-grid-item.cre_fourFlights .pricing-container .pricing-content",
                        function () {
                            var fourRegular = document.querySelector(
                                ".product-grid-item.cre_fourFlights .cre-regularPrice"
                            );
                            var fourPrice = document.querySelector(
                                ".product-grid-item.cre_fourFlights .pricing-container .pricing-content"
                            );
                            fourPrice.insertAdjacentElement("beforebegin", fourRegular);
                        },
                        50,
                        25000
                    );
                },
                50,
                25000
            );
            helper.waitForElement(
                ".product-grid-item.cre_familyFlights .cre-regularPrice",
                function () {
                    helper.waitForElement(
                        ".product-grid-item.cre_familyFlights .pricing-container .pricing-content",
                        function () {
                            var familyRegular = document.querySelector(
                                ".product-grid-item.cre_familyFlights .cre-regularPrice"
                            );
                            var familyPrice = document.querySelector(
                                ".product-grid-item.cre_familyFlights .pricing-container .pricing-content"
                            );
                            familyPrice.insertAdjacentElement("beforebegin", familyRegular);
                        },
                        50,
                        25000
                    );
                },
                50,
                25000
            );
        }
        function trigger() {
            var doneTypingInterval = 9000; //time in ms, 5 seconds for example
            var intervalCallAgain = setInterval(function () {
                var calloutLenght = document.querySelectorAll(".ProductGridForm");
                if (calloutLenght.length >= 4) {
                    waitForElement(
                        ".categoryGroup .categoryLinkSelected div",
                        function () {
                            var selector = document.querySelector(
                                ".categoryGroup .categoryLinkSelected div"
                            );
                            if (
                                selector.innerHTML.indexOf("Buy a Gift") != -1 ||
                                selector.innerHTML.indexOf("buy a gift") != -1
                            ) {
                                addClass("body", "cre-t-6-prod");
                            }
                        }
                    );
                    clearInterval(intervalCallAgain);
                }
            }, 500);
            //start the countdown .cre-t-6-prod .product-grid-item:not()
            var Timer = setTimeout(function () {
                clearInterval(intervalCallAgain);
            }, doneTypingInterval);
        }
        function ifly3() {
            var creSuperSaver =
                "" +
                '  <div class="cre-superSaver">' +
                '      <div class="cre-superSaver-container">' +
                '          <div class="cre-superSaver-row">' +
                '              <div class="cre-textItem">' +
                '                  <p class="cre-card-text">AVOID THE CROWDS AND SAVE ~30% IN OFF-PEAK TIMES!</p>' +
                '                   <p class="cre-card-boldText">2 Flight Super Saver Special - $<span class="cre-dataPrice"></span>/person</p>' +
                '                  <p class="cre-card-subText">The Super Saver offer is valid Monday-Friday 11am-4:30pm, excluding holidays and peak periods.</p>' +
                "              </div>" +
                '              <div class="cre-quantity">' +
                '                <p class="cre-quantity">QUANTITY</p>' +
                '              <div class="cre-quantityBtn-container">' +
                '               <div class="cre-quantityBtn">' +
                '                  <button id="decreaseButton">-</button>' +
                '                  <input type="text" id="inputField" min="0" max="13" value="0">' +
                '                  <button id="increaseButton">+</button>' +
                "               </div>" +
                '                  <button id="cre-addToCart-mobile">ADD TO CART</button>' +
                "              </div>" +
                '                  <button id="cre-addToCart">ADD TO CART</button>' +
                '                  <p class="cre-card-subText_mobile">The Super Saver offer is valid Monday-Friday 11am-4:30pm, excluding holidays and peak periods.</p>' +
                "              </div>" +
                "          </div>" +
                "      </div>" +
                "  </div>";
            var cre_card_fourFlights =
                "" +
                '  <div class="cre-card-copy-fourFlights">' +
                "      <h2>Double the flying time of the 2 Flight and more than twice the fun!</h2>" +
                '      <p>This is where you can begin to develop your flying skills. <span class="cre-bold">We recommend this package to get the most from your visit.</span></p>' +
                "  </div>";
            var cre_card_twoFlights =
                "" +
                '  <div class="cre-card-copy-twoFlights">' +
                "      <h2>The perfect taster experience.</h2>" +
                "      <p>Most people leave wishing they'd flown more, but this offers great introductory value.</span>" +
                "      </p>" +
                "  </div>";
            var cre_card_tenFlights =
                "" +
                '  <div class="cre-card-copy-tenFlights">' +
                "      <h2>Share 10 flights with up to 5 flyers on one fun-filled visit.</h2>" +
                "      <p>Designed for groups who want the ultimate flying experience in one convenient package.</p>" +
                "  </div>";
            function inputValue() {
                var input1 = document.getElementById("inputField");
                var input2 = document.querySelector(
                    ".cre_superSaverproduct .qty-value"
                );
                if (input1 && input2) {
                    input1.value = input2.value;
                }
                //('Trigger Input value')
            }
            function updateValues() {
                var input1 = document.getElementById("inputField");
                var input2 = document.querySelector(
                    ".cre_superSaverproduct .qty-value"
                );
                if (input1 && input2) {
                    if (input1.value > parseInt(input2.max)) {
                        input1.value = 13;
                    }
                    input2.value = input1.value;
                }
                //('Trigger Update value')
            }
            function addClassToParent(inputValue, className) {
                waitForElement(
                    '.ProductGridForm input[value="' + inputValue + '"]',
                    function () {
                        var parent = document
                            .querySelector(
                                '.ProductGridForm input[value="' + inputValue + '"]'
                            )
                            .closest(".product-grid-item");
                        if (parent) {
                            parent.classList.add(className);
                        }
                    }
                );
            }
            function eventListener() {
                live("#inputField", "input", function () {
                    updateValues();
                });
                live("#increaseButton", "click", function () {
                    // console.log('click')
                    document.querySelector(".cre_superSaverproduct .btn-add").click();
                    inputValue();
                });
                live("#decreaseButton", "click", function () {
                    // console.log('click')
                    document
                        .querySelector(".cre_superSaverproduct .btn-subtract")
                        .click();
                    inputValue();
                });
                live("#cre-addToCart , #cre-addToCart-mobile", "click", function () {
                    document
                        .querySelector(".cre_superSaverproduct .btn-add-to-cart")
                        .click();
                });
            }
            function addingData() {
                retrivePrice();
                if (
                    !document.querySelector(".cre-card-copy-fourFlights") &&
                    document.querySelector(".cre_fourFlights .features")
                ) {
                    document
                        .querySelector(".cre_fourFlights .features")
                        .insertAdjacentHTML("beforebegin", cre_card_fourFlights);
                }
                if (
                    !document.querySelector(".cre-card-copy-twoFlights") &&
                    document.querySelector(".cre_twoFlights .features")
                ) {
                    document
                        .querySelector(".cre_twoFlights .features")
                        .insertAdjacentHTML("beforebegin", cre_card_twoFlights);
                }
                if (
                    !document.querySelector(".cre-card-copy-tenFlights") &&
                    document.querySelector(".cre_familyFlights .features")
                ) {
                    document
                        .querySelector(".cre_familyFlights .features")
                        .insertAdjacentHTML("beforebegin", cre_card_tenFlights);
                }
                if (
                    !document.querySelector(".cre_twoFlights .cre-person-text") &&
                    document.querySelector(".cre_twoFlights .qty-select-method-3")
                ) {
                    document
                        .querySelector(".cre_twoFlights .qty-select-method-3")
                        .insertAdjacentHTML(
                            "beforebegin",
                            '<h2 class="cre-person-text">PER PERSON</h2><p class="cre-person-subtext">Select the number of flyers</p>'
                        );
                }
                if (
                    !document.querySelector(".cre_fourFlights .cre-person-text") &&
                    document.querySelector(".cre_fourFlights .qty-select-method-3")
                ) {
                    document
                        .querySelector(".cre_fourFlights .qty-select-method-3")
                        .insertAdjacentHTML(
                            "beforebegin",
                            '<h2 class="cre-person-text">PER PERSON</h2><p class="cre-person-subtext">Select the number of flyers</p>'
                        );
                }
                if (
                    !document.querySelector(".cre_familyFlights div .cre-person-text") &&
                    document.querySelector(".cre_familyFlights .qty-select-method-3")
                ) {
                    document
                        .querySelector(".cre_familyFlights .qty-select-method-3")
                        .insertAdjacentHTML(
                            "beforebegin",
                            '<h2 class="cre-person-text">For 10 flights</h2><p class="cre-person-subtext">Select the number of 10 flight packages</p>'
                        );
                }
            }
            function productPrice() {
                var jsonObjects = [];
                var dataRegularAmount; // Define dataRegularAmount here
                document.querySelectorAll(".btn.btn-add").forEach(function (e) {
                    var parent = e.closest(".product-grid-item");
                    var features = parent.querySelector(".features");
                    var listItems = parent
                        ? parent.querySelectorAll(".features li")
                        : null;
                    if (e.getAttribute("data-name") && e.getAttribute("data-price")) {
                        var dataName = e.getAttribute("data-name");
                        var dataPrice = parseFloat(e.getAttribute("data-price"));
                        var jsonObject = {
                            dataName: dataName,
                            dataPrice: dataPrice,
                        };
                        if (listItems) {
                            listItems.forEach(function (item) {
                                var text = item.textContent;
                                var percentMatch = text.match(/\d+%/); // Match one or more digits followed by '%'
                                if (percentMatch) {
                                    var dataOfferPrice = parseFloat(
                                        percentMatch[0].replace("%", "")
                                    );
                                    dataRegularAmount =
                                        (dataOfferPrice * dataPrice) / 100 + dataPrice;
                                    dataRegularAmount = Math.round(dataRegularAmount * 100) / 100;
                                    jsonObject.dataOfferPrice = dataOfferPrice;
                                    jsonObject.dataRegularAmount = dataRegularAmount;
                                }
                            });
                        }
                        // Add class to the parent based on dataName
                        if (dataName.indexOf("2 Flights Super Saver") !== -1) {
                            // parent.classList.add("cre_superSaverproduct");
                        } else if (dataName.indexOf("4 Flights") !== -1) {
                            // parent.classList.add("cre_fourFlights");
                            if (
                                features &&
                                !document.querySelector(".cre_fourFlights .cre-regularPrice")
                            ) {
                                features.insertAdjacentHTML(
                                    "afterend",
                                    '<p class="cre-regularPrice">Regularly $<span>' +
                                    dataRegularAmount +
                                    "</span></p>"
                                );
                            }
                        } else if (dataName.indexOf("Family 10 Flights") !== -1) {
                            // parent.classList.add("cre_familyFlights");
                            if (
                                features &&
                                !document.querySelector(".cre_familyFlights .cre-regularPrice")
                            ) {
                                features.insertAdjacentHTML(
                                    "afterend",
                                    '<p class="cre-regularPrice">Regularly $<span>' +
                                    dataRegularAmount +
                                    "</span></p>"
                                );
                            }
                        } else if (dataName === "2 Flights") {
                            // parent.classList.add("cre_twoFlights");
                        }
                        addClassToParent(
                            "2 Flights Super Saver ~30% Off",
                            "cre_superSaverproduct"
                        );
                        addClassToParent("2 Flights", "cre_twoFlights");
                        addClassToParent(
                            "4 Flights: Our Most Popular Product!",
                            "cre_fourFlights"
                        );
                        addClassToParent(
                            "Friends and Family 10 Flights",
                            "cre_familyFlights"
                        );
                        waitForElement(".cre_fourFlights", function () {
                            addingData();
                        });
                        jsonObjects.push(jsonObject);
                    }
                });
                var jsonString = JSON.stringify(jsonObjects);
                sessionStorage.setItem("CRE-t-Data", jsonString);
            }
            function retrivePrice() {
                var jsonString = sessionStorage.getItem("CRE-t-Data");
                if (jsonString) {
                    var jsonObjects = JSON.parse(jsonString);
                    jsonObjects.forEach(function (jsonObject) {
                        if (jsonObject.dataName.indexOf("2 Flights Super Saver") !== -1) {
                            // console.log("dataPrice: " + jsonObject.dataPrice);
                            if (document.querySelector(".cre-dataPrice")) {
                                document.querySelector(".cre-dataPrice").innerHTML =
                                    jsonObject.dataPrice;
                            }
                        }
                    });
                }
            }
            /* Variation Init */
            function newInit() {
                addClass("body", "cre-iFly3");
                waitForElement(
                    ".primaryContainer .mainStore .category  .category-footer",
                    function () {
                        if (!document.querySelector(".cre-superSaver")) {
                            document
                                .querySelector(
                                    ".primaryContainer .mainStore .category  .category-footer"
                                )
                                .insertAdjacentHTML("beforebegin", creSuperSaver);
                        }
                    }
                );
                eventListener();
            }
            function activateTestBasedOnTile() {
                var isSuperSaverPackAvailable = false;
                document
                    .querySelectorAll(
                        ".category .product-grid .product-grid-item .product-name"
                    )
                    .forEach(function (elm) {
                        var gridItem = elm.closest(".product-grid-item");
                        if (!gridItem) return;
                        var cardName = elm.innerText.toLowerCase().trim(" ");
                        if (
                            cardName.indexOf("2 flights super saver") != -1 &&
                            gridItem.querySelector(".ProductGridForm")
                        ) {
                            isSuperSaverPackAvailable = true;
                        }
                    });
                if (
                    isSuperSaverPackAvailable &&
                    !document.querySelector(".cre-iFly3")
                ) {
                    newInit();
                    waitForElementTwo(".btn.btn-add", productPrice);
                }
            }
            /* Initialise variation */
            waitForElement(
                ".category .product-grid .product-grid-item .product-name",
                activateTestBasedOnTile
            );
        }
        /* Variation Init */
        function init() {
            if (!document.querySelector("body.cre-iFly3")) {
                ifly3();
            }
            if (
                window.location.href.includes(
                    "https://booking.iflyworld.com/mainstore?cid=0"
                )
            ) {
                _$("body").addClass(variation_name);
            } else {
                helper.waitForElement(
                    ".categoryLinkSelected >div",
                    function () {
                        if (
                            document
                                .querySelector(".categoryLinkSelected >div")
                                .textContent.toLowerCase() === "book a flight"
                        ) {
                            _$("body").addClass(variation_name);
                        } else if (
                            document
                                .querySelector(".categoryLinkSelected >div")
                                .textContent.toLowerCase() === "reserve group package"
                        ) {
                            _$("body").addClass(variation_name);
                        } else if (
                            document
                                .querySelector(".categoryLinkSelected >div")
                                .textContent.toLowerCase() === "host a birthday"
                        ) {
                            _$("body").addClass(variation_name);
                        } else if (
                            document
                                .querySelector(".categoryLinkSelected > div")
                                .textContent.trim()
                                .toLowerCase() === "aff/experienced flyers"
                        ) {
                            _$("body").addClass(variation_name);
                        } else if (
                            document
                                .querySelector(".categoryLinkSelected >div")
                                .textContent.toLowerCase() === "buy a gift"
                        ) {
                            _$("body").addClass(variation_name);
                        }
                    },
                    50,
                    25000
                );
            }
            if (document.querySelector("body.cre-t-6")) {
                if (!document.querySelector(".cre-t-6-wrapper")) {
                    document
                        .querySelector(".primaryContainer")
                        .insertAdjacentHTML("beforebegin", addContent);
                }
                // helper.waitForElement(
                //     ".customIntroCopy_welcome .sms-heading",
                //     function () {
                //         // setTimeout(function () {
                //         //     window.scrollTo({ top: 0, behavior: "smooth" });
                //         // }, 3000);
                //         var smsHead = document.querySelector(".customIntroCopy_welcome .sms-heading").textContent;
                //         var addTextContent = '<div class= "creWapper"><div class="cre-ifly6-textContent">Next, just select the filght package(s) right for you in:</div><span>' + smsHead + "</span></div>";
                //         if (!document.querySelector(".welcomeContent .creWapper")) {
                //             document.querySelector(".customIntroCopy_welcome").insertAdjacentHTML("beforebegin", addTextContent);
                //         }
                //     },
                //     50,
                //     25000
                // );
                helper.waitForElement(
                    ".product-grid-item.cre_fourFlights",
                    function () {
                        updateCardHeader();
                        moveRegularPrice();
                    },
                    50,
                    25000
                );
                helper.waitForElement(
                    ".cre-superSaver .cre-superSaver-row > .cre-quantity",
                    function () {
                        helper.waitForElement(
                            ".cre-superSaver .cre-superSaver-row  .cre-card-boldText .cre-dataPrice",
                            function () {
                                var creCurrentWhole = document.querySelector(".cre-dataPrice");
                                var updateSuperPr = creCurrentWhole.textContent;
                                var creSuperPrice =
                                    '<div class="cre-super-price"> <p>$' +
                                    updateSuperPr +
                                    '</p><span class = "cre-person">PER PERSON</span></div>';
                                !document.querySelector(".cre-super-price") &&
                                    document
                                        .querySelector(
                                            ".cre-superSaver .cre-superSaver-row > .cre-quantity"
                                        )
                                        .insertAdjacentHTML("beforebegin", creSuperPrice);
                            },
                            50,
                            25000
                        );
                    },
                    50,
                    25000
                );
                helper.waitForElement(
                    ".cre-iFly3 .cre-superSaver",
                    function () {
                        if (!document.querySelector(".cre-usp-bar")) {
                            document
                                .querySelector(".cre-superSaver")
                                .insertAdjacentHTML("beforebegin", superUspBar);
                        }
                    },
                    50,
                    25000
                );
                helper.waitForElement(
                    ".cre-iFly3 .product-grid-item.cre_fourFlights .features > li:first-child",
                    function () {
                        document
                            .querySelector(".cre_fourFlights")
                            .insertAdjacentHTML("afterbegin", creFourBubble());
                    },
                    50,
                    25000
                );
                helper.waitForElement(
                    ".cre-iFly3 .product-grid-item.cre_familyFlights .features > li:first-child",
                    function () {
                        document
                            .querySelector(".cre_familyFlights")
                            .insertAdjacentHTML("afterbegin", creFamilyBubble());
                    },
                    50,
                    25000
                );
                helper.waitForElement(
                    ".cre-iFly3 .cre-quantity p",
                    function () {
                        document.querySelector(".cre-quantity p").innerText =
                            "Select the number of flyers";
                    },
                    50,
                    25000
                );
                helper.waitForElement(
                    ".cre-iFly3 .cre-textItem .cre-card-text",
                    function () {
                        document.querySelector(".cre-textItem .cre-card-text").innerText =
                            "Avoid the crowds and save ~30% in off-peak times!";
  
                        helper.waitForElement('.welcomeContainer .sms-heading', function () {
                            var smsHeading = document.querySelector('.welcomeContainer .sms-heading');
                            if (smsHeading) {
                                var text = smsHeading.textContent.trim();
                                locationPerPerson.forEach(function (location) {
                                    if (text.includes(location.tunnel)) {
                                        if ((location.tunnel == "Houston") || (location.tunnel == "Fort Lauderdale")) {
                                            if (document.querySelector(".cre-superSaver-container .cre-card-text")) {
                                                document.querySelector(".cre-superSaver-container .cre-card-text").innerText = "Avoid the crowds and save ~20% in off-peak times!";
                                            }
  
                                        }
                                    }
                                });
                            }
                        }, 25, 50000);
  
                    },
                    50,
                    25000
                );
                trigger();
                if (!document.querySelector(".cre-regularPrice")) {
                    ifly3();
                }
            }
        }
        helper.waitForElement(
            ".categoryLinkSelected > div",
            function () {
                if (
                    document
                        .querySelector(".categoryLinkSelected > div")
                        .textContent.trim()
                        .toLowerCase() === "book a flight"
                ) {
                    helper.waitForElement(".cre-iFly3", init, 500, 30000);
                }
            },
            250,
            25000
        );
        helper.waitForElement(
            ".primaryContainer .categoryLinkSelected, a .categoryLink",
            function () {
                if (
                    window.location.href.includes(
                        "https://booking.iflyworld.com/mainstore?cid=0"
                    )
                ) {
                    helper.waitForElement(".cre-iFly3", init, 500, 30000);
                } else {
                    init();
                }
            },
            50,
            25000
        );
  
  
  
  
  
  
  
  
  
  
  
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();