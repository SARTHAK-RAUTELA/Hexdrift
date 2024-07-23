(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "";
        /* all Pure helper functions */
        function waitForElement(selector, trigger) {
            var interval = setInterval(function () {
                if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
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
        }
        function addClass(el, cls) {
            var el = document.querySelector(el);
            if (el) {
                el.classList.add(cls);
            }
        }
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
            var input2 = document.querySelector(".cre_superSaverproduct .qty-value");
            if (input1 && input2) {
                input1.value = input2.value;
            }
            //('Trigger Input value')
        }
        function updateValues() {
            var input1 = document.getElementById("inputField");
            var input2 = document.querySelector(".cre_superSaverproduct .qty-value");
            if (input1 && input2) {
                if (input1.value > parseInt(input2.max)) {
                    input1.value = 13;
                }
                input2.value = input1.value;
            }
            //('Trigger Update value')
        }
        function addClassToParent(inputValue, className) {
            waitForElement('.ProductGridForm input[value="' + inputValue + '"]', function () {
                var parent = document.querySelector('.ProductGridForm input[value="' + inputValue + '"]').closest('.product-grid-item');
                if (parent) {
                    parent.classList.add(className);
                }
            });
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
                document.querySelector(".cre_superSaverproduct .btn-subtract").click();
                inputValue();
            });
            live("#cre-addToCart , #cre-addToCart-mobile", "click", function () {
                document.querySelector(".cre_superSaverproduct .btn-add-to-cart").click();
            });
        }
        function addingData() {
            retrivePrice();
            if (!document.querySelector(".cre-card-copy-fourFlights") && document.querySelector(".cre_fourFlights .features")) {
                document.querySelector(".cre_fourFlights .features").insertAdjacentHTML("beforebegin", cre_card_fourFlights);
            }
            if (!document.querySelector(".cre-card-copy-twoFlights") && document.querySelector(".cre_twoFlights .features")) {
                document.querySelector(".cre_twoFlights .features").insertAdjacentHTML("beforebegin", cre_card_twoFlights);
            }
            if (!document.querySelector(".cre-card-copy-tenFlights") && document.querySelector(".cre_familyFlights .features")) {
                document.querySelector(".cre_familyFlights .features").insertAdjacentHTML("beforebegin", cre_card_tenFlights);
            }
            if (!document.querySelector(".cre_twoFlights .cre-person-text") && document.querySelector(".cre_twoFlights .qty-select-method-3")) {
                document.querySelector(".cre_twoFlights .qty-select-method-3").insertAdjacentHTML("beforebegin", '<h2 class="cre-person-text">PER PERSON</h2><p class="cre-person-subtext">Select the number of flyers</p>');
            }
            if (!document.querySelector(".cre_fourFlights .cre-person-text") && document.querySelector(".cre_fourFlights .qty-select-method-3")) {
                document.querySelector(".cre_fourFlights .qty-select-method-3").insertAdjacentHTML("beforebegin", '<h2 class="cre-person-text">PER PERSON</h2><p class="cre-person-subtext">Select the number of flyers</p>');
            }
            if (!document.querySelector(".cre_familyFlights div .cre-person-text") && document.querySelector(".cre_familyFlights .qty-select-method-3")) {
                document.querySelector(".cre_familyFlights .qty-select-method-3").insertAdjacentHTML("beforebegin", '<h2 class="cre-person-text">For 10 flights</h2><p class="cre-person-subtext">Select the number of 10 flight packages</p>');
            }
        }
        function productPrice() {
            var jsonObjects = [];
            var dataRegularAmount; // Define dataRegularAmount here
            document.querySelectorAll(".btn.btn-add").forEach(function (e) {
                var parent = e.closest(".product-grid-item");
                var features = parent.querySelector(".features");
                var listItems = parent ? parent.querySelectorAll(".features li") : null;
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
                                var dataOfferPrice = parseFloat(percentMatch[0].replace("%", ""));
                                dataRegularAmount = (dataOfferPrice * dataPrice) / 100 + dataPrice;
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
                        if (features && !document.querySelector('.cre_fourFlights .cre-regularPrice')) {
                            features.insertAdjacentHTML("afterend", '<p class="cre-regularPrice">Regularly $<span>' + dataRegularAmount + "</span></p>");
                        }
                    } else if (dataName.indexOf("Family 10 Flights") !== -1) {
                        // parent.classList.add("cre_familyFlights");
                        if (features && !document.querySelector('.cre_familyFlights .cre-regularPrice')) {
                            features.insertAdjacentHTML("afterend", '<p class="cre-regularPrice">Regularly $<span>' + dataRegularAmount + "</span></p>");
                        }
                    } else if (dataName === "2 Flights") {
                        // parent.classList.add("cre_twoFlights");
                    }
                    addClassToParent('2 Flights Super Saver ~30% Off', 'cre_superSaverproduct');
                    addClassToParent('2 Flights', 'cre_twoFlights');
                    addClassToParent('4 Flights: Our Most Popular Product!', 'cre_fourFlights');
                    addClassToParent('Friends and Family 10 Flights', 'cre_familyFlights');
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
                            document.querySelector(".cre-dataPrice").innerHTML = jsonObject.dataPrice;
                        }
                    }
                });
            }
        }
        /* Variation Init */
        function init() {
            // console.log('Ifly-3')
            addClass("body", "cre-iFly3");
  
      waitForElement('[data-name*="2 Flights Super Saver"]', function () {
        waitForElement(".primaryContainer .mainStore .category  .category-footer", function () {
          if (!document.querySelector(".cre-superSaver")) {
            document.querySelector(".primaryContainer .mainStore .category  .category-footer").insertAdjacentHTML("beforebegin", creSuperSaver);
          }
        });
            });
            
            eventListener();
        }
        /* Initialise variation */
        // waitForElement('body', function () {
        //  addClass("body", "cre-iFly3");
        // });
        // waitForElement('.ProductGridForm input[value="2 Flights Super Saver ~30% Off"]', function () {
        //  init();
        //  waitForElement(".btn.btn-add", productPrice);
        // });
        function activateTestBasedOnTile() {
            var isSuperSaverPackAvailable = false;
            // Check the super saver pack available or not
            document.querySelectorAll(".category .product-grid .product-grid-item .product-name").forEach(function (elm) {
                var gridItem = elm.closest(".product-grid-item");
                if (!gridItem) return;
                var cardName = elm.innerText.toLowerCase().trim(" ");
                // If Current card is supper saver
                if (cardName.indexOf("2 flights super saver") != -1 && gridItem.querySelector(".ProductGridForm")) {
                    isSuperSaverPackAvailable = true;
                }
            });
            // If super saver is available then made changes in site
            if (!document.querySelector(".cre-iFly3")) {
                init();
                waitForElement(".btn.btn-add", productPrice);
            }
        }
        /* Initialise variation */
        waitForElement(".category .product-grid .product-grid-item .product-name", activateTestBasedOnTile);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();