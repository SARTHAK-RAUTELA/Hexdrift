(function() {
    try {
        /* main variables */
        var debug = 1;
        var variation_name = "SeaWorld_T205";

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
                waitForElement: function(
                    selector,
                    trigger,
                    delayInterval,
                    delayTimeout
                ) {
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
                live: function(selector, event, callback, context) {
                    /****Helper Functions****/
                    // helper for enabling IE 8 event bindings
                    function addEvent(el, type, handler) {
                        if (el.attachEvent) el.attachEvent("on" + type, handler);
                        else el.addEventListener(type, handler);
                    }
                    // matches polyfill
                    this &&
                        this.Element &&
                        (function(ElementPrototype) {
                            ElementPrototype.matches =
                                ElementPrototype.matches ||
                                ElementPrototype.matchesSelector ||
                                ElementPrototype.webkitMatchesSelector ||
                                ElementPrototype.msMatchesSelector ||
                                function(selector) {
                                    var node = this,
                                        nodes = (
                                            node.parentNode || node.document
                                        ).querySelectorAll(selector),
                                        i = -1;
                                    while (nodes[++i] && nodes[i] != node);
                                    return !!nodes[i];
                                };
                        })(Element.prototype);
                    // live binding helper using matchesSelector
                    function live(selector, event, callback, context) {
                        addEvent(context || document, event, function(e) {
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
                },
            };
            return function(selector) {
                return new bm(selector);
            };
        });

        function clickAdeed() {
            helper.live("#daysGroup", 'click', function(e) {
                if (e.target.tagName === 'BUTTON') {
                    // Remove the selected class from all day buttons and add to the clicked one
                    document.querySelectorAll('#daysGroup button').forEach(button => button.classList.remove('selected'));
                    e.target.classList.add('selected');
                    selectedDays = e.target.dataset.value;
                    console.log(selectedDays)
                    // Reveal the parks section once a day is selected


                    // Update the result based on the new day and already selected parks
                    updateResult();
                }
            })
            helper.live("#parksGroup", "click", function(e) {
                if (e.target.tagName === 'BUTTON') {
                    var park = e.target.dataset.value;
                    if (selectedParks.includes(park)) {
                        // Deselect the park if it was already selected
                        selectedParks = selectedParks.filter(p => p !== park);
                        e.target.classList.remove('selected');
                    } else {
                        // Select the park
                        selectedParks.push(park);
                        e.target.classList.add('selected');
                    }
                    updateResult();
                }

            })
        }

        function updateResult() {
            var headingElem = document.querySelector('.product-tile-heading');
            if (selectedDays && selectedParks.length > 0) {
                result.textContent = `You selected ${selectedDays} and the following parks: ${selectedParks.join(', ')}`;
                result.style.display = 'block'; // Show result once selections are made
            } else if (selectedDays && selectedParks.length === 0) {
                if (selectedDays == 1) {
                    headingElem.style.display = 'none'
                    result.textContent = 'Please select a park';
                    result.style.display = 'block';
                } else {

                    result.textContent = "Please select at least one park";
                    result.style.display = 'block';

                }

            } else {
                result.textContent = 'Select your options above to see available tickets.';
                result.style.display = selectedDays ? 'block' : 'none';
                headingElem.style.display = 'none' // Hide result if no selections
            }
            checkIfAnySelected()
            setTimeout(function() {
                visibleTheCard()
                // visibiltyCheck()
            }, 100)

        }

        function insertProductCards() {
            // Select the #result container
            var resultContainer = document.querySelector('.product-container .product-tiles');

            // Ensure the container exists
            if (!resultContainer) {
                console.error('#result container not found');
                return;
            }

            // Define the product classes
            var productClasses = [
                '.single-day-ticket',
                '.seaworld-2025-fun-card',
                '[class*=aquatica-2025-fun-card]',
                '.any-day-ticket',
                '.two-park-ticket',
                '.three-park-ticket',
                '.four-park-ticket'
            ];

            // Loop through each class and append its elements to the #result container
            productClasses.forEach(productClass => {
                var products = document.querySelectorAll(productClass);
                products.forEach(product => {
                    resultContainer.appendChild(product);
                });
            });
        }

        function checkIfAnySelected() {
            let anySelected = false;
            var headingElem = document.querySelector('.product-tile-heading');
            document.querySelectorAll("#daysGroup button").forEach(function(day) {
                if (day.classList.contains("selected")) {
                    anySelected = true;
                }
            });

            if (anySelected) {
                if (document.querySelector(".filter-container").classList.contains("invalidPark")) {

                    document.querySelector(".filter-container").classList.remove("invalidPark")
                }
            } else {
                document.querySelector(".filter-container").classList.add("invalidPark")
                headingElem.style.display = 'none'
            }
        }

        function visibleTheCard() {
            var parksGroup = document.querySelector('#parksGroup');
            var selectedButtons = parksGroup.querySelectorAll('.selected');

            // Create an array of the selected data-values
            var selectedValues = Array.from(selectedButtons).map(btn => btn.getAttribute('data-value'));

            // Store the selected values as a comma-separated list in #parksGroup's value attribute
            parksGroup.setAttribute('value', selectedValues.join(','));

            // Log the selected values for debugging
            console.log('Selected parks:', selectedValues.join(','));
            var parksGroup = document.querySelector('#parksGroup');
            var resultElem = document.querySelector('#result');
            var daysGroup = document.querySelector('#daysGroup');
            var headingElem = document.querySelector('.product-tile-heading');

            // Hide all product cards initially
            document.querySelectorAll('.product-placement-card__wrapper').forEach(wrapper => {
                wrapper.style.display = "none";
            });

            // No data value case
            if (parksGroup && parksGroup.getAttribute('value') === "null") {
                console.log('No data value');
                return;
            }

            // Utility function to set result message
            function setResultMessage(message) {
                resultElem.innerHTML = message;
            }

            function setheading(heading) {
                headingElem.textContent = heading;
            }

            // Check selected day value
            var daysSelected = daysGroup.querySelector('.selected');
            if (!daysSelected) {
                return;
            }
            var selectedDayValue = daysSelected.getAttribute('data-value');

            // Park group values
            var parksValue = parksGroup.getAttribute('value');

            // Handle 1-day selection
            if (selectedDayValue === "1") {
                document.querySelector('.seaworld-2025-fun-card').style.order = "inherit"
                document.querySelector('[class*=aquatica-2025-fun-card]').style.order = "inherit"
                if (parksValue === "seaworld") {
                    document.querySelector('.single-day-ticket').style.display = "block";
                    document.querySelector('.any-day-ticket').style.display = "block";
                    setheading(`These products meet your criteria:`);
                    headingElem.style.display = 'block'
                    resultElem.style.display = 'none'
                } else if (parksValue === "seaworld,aquatica" ||
                    parksValue === "seaworld,buschgardens" ||
                    parksValue === "seaworld,adventureisland") {
                    headingElem.style.display = 'none'
                    resultElem.style.display = 'block'
                    setResultMessage("Please select at least 2 days for this park combination");
                } else if ((!parksGroup.getAttribute('value').includes('seaworld') && document.querySelectorAll('#parksGroup .selected').length == 1)) {
                    var parkname = parksGroup.getAttribute('value')
                    // Check for different park names and update accordingly
                    if (parkname === 'buschgardens') {
                        parkname = `<a href="https://buschgardens.com/tampa/" target="blank">Busch Gardens</a>`;
                    } else if (parkname === 'seaworld') {
                        parkname = `<a href="https://seaworld.com/orlando" target="blank">SeaWorld</a>`;
                    } else if (parkname === 'aquatica') {
                        parkname = `<a href="https://aquatica.com/orlando/" target="blank">Aquatica</a>`;
                    } else if (parkname === 'adventureisland') {
                        parkname = `<a href="https://adventureisland.com/" target="blank">Adventure Island</a>`;
                    }
                    headingElem.style.display = 'none'
                    resultElem.style.display = 'block'
                    setResultMessage(`Please visit the ${parkname} website to buy this ticket`);

                } else if ((!parksGroup.getAttribute('value').includes('seaworld') && document.querySelectorAll('#parksGroup .selected').length == 2)) {
                    headingElem.style.display = 'none'
                    resultElem.style.display = 'block'
                    setResultMessage("Please select at least 2 days for this park combination");
                } else if ((!parksGroup.getAttribute('value').includes('seaworld') && document.querySelectorAll('#parksGroup .selected').length == 3)) {
                    var parkname = parksGroup.getAttribute('value')
                    headingElem.style.display = 'none'
                    resultElem.style.display = 'block'
                    setResultMessage("Please select at least 3 days for this park combination");
                } else if ((parksGroup.getAttribute('value').includes('seaworld') && document.querySelectorAll('#parksGroup .selected').length == 3)) {
                    headingElem.style.display = 'none'
                    resultElem.style.display = 'block'
                    setResultMessage("Please select at least 3 days for this park combination");
                } else if (parksValue.split(',').length === 4) {
                    headingElem.style.display = 'none'
                    resultElem.style.display = 'block'
                    setResultMessage("Please select at least 4 days for this park combination");
                } else if (parksValue === '') {
                    headingElem.style.display = 'none'
                }
            }

            // Handle 2-day selection
            if (selectedDayValue === "2") {
                if (parksValue === "seaworld") {
                    document.querySelector('.seaworld-2025-fun-card').style.display = "block";
                    document.querySelector('.two-park-ticket').style.display = "block";
                    setTimeout(function() {
                        document.querySelector('.seaworld-2025-fun-card').style.order = "1"
                        document.querySelector('.seaworld-2025-fun-card').setAttribute('data-index', "1")
                        document.querySelector('.two-park-ticket').setAttribute('data-index', "0")
                    }, 300)
                    setheading(`These products meet your criteria:`);
                    headingElem.style.display = 'block'
                    resultElem.style.display = 'none'
                } else if (parksValue === "seaworld,aquatica") {
                    document.querySelector('[class*=aquatica-2025-fun-card]').style.display = "block";
                    document.querySelector('.two-park-ticket').style.display = "block";
                    setTimeout(function() {
                        document.querySelector('[class*=aquatica-2025-fun-card]').style.order = "1"
                        document.querySelector('[class*=aquatica-2025-fun-card]').setAttribute('data-index', "1")
                        document.querySelector('.two-park-ticket').setAttribute('data-index', "0")
                    }, 300)
                    setheading(`This product meets your criteria:`);
                    headingElem.style.display = 'block'
                    resultElem.style.display = 'none'
                } else if (parksValue === "seaworld,buschgardens" || parksValue === "seaworld,adventureisland") {
                    document.querySelector('.two-park-ticket').style.display = "block";
                    setheading(`This product meets your criteria:`);
                    headingElem.style.display = 'block'
                    resultElem.style.display = 'none'
                } else if ((!parksGroup.getAttribute('value').includes('seaworld') && document.querySelectorAll('#parksGroup .selected').length == 1)) {
                    setheading(`This product meets your criteria:`);
                    headingElem.style.display = 'block'
                    resultElem.style.display = 'none'
                    document.querySelector('.two-park-ticket').style.display = "block";
                } else if ((!parksGroup.getAttribute('value').includes('seaworld') && document.querySelectorAll('#parksGroup .selected').length == 2)) {
                    setheading(`This product meets your criteria:`);
                    headingElem.style.display = 'block'
                    resultElem.style.display = 'none'
                    document.querySelector('.two-park-ticket').style.display = "block";
                } else if ((!parksGroup.getAttribute('value').includes('seaworld') && document.querySelectorAll('#parksGroup .selected').length == 3)) {
                    headingElem.style.display = 'none'
                    resultElem.style.display = 'block'
                    setResultMessage("Please select at least 3 days for this park combination");
                } else if ((parksGroup.getAttribute('value').includes('seaworld') && document.querySelectorAll('#parksGroup .selected').length == 3)) {
                    headingElem.style.display = 'none'
                    resultElem.style.display = 'block'
                    setResultMessage("Please select at least 3 days for this park combination");
                } else if (parksValue.split(',').length === 4) {
                    headingElem.style.display = 'none'
                    resultElem.style.display = 'block'
                    setResultMessage("Please select at least 4 days for this park combination");
                } else if (parksValue === '') {
                    headingElem.style.display = 'none'
                }
            }

            // Handle 3-14 day selection
            if (selectedDayValue === "3-14") {
                document.querySelector('.seaworld-2025-fun-card').style.order = "inherit"
                document.querySelector('[class*=aquatica-2025-fun-card]').style.order = "inherit"
                if (parksValue === "seaworld") {
                    document.querySelector('.seaworld-2025-fun-card').style.display = "block";
                    document.querySelector('.three-park-ticket').style.display = "block";
                    headingElem.style.display = "block"
                    resultElem.style.display = 'none'
                    setheading(`These products meet your criteria:`);
                } else if (parksValue === "seaworld,aquatica") {
                    document.querySelector('[class*=aquatica-2025-fun-card]').style.display = "block";
                    document.querySelector('.three-park-ticket').style.display = "block";
                    setheading(`This product meets your criteria:`);
                    headingElem.style.display = 'block'
                    resultElem.style.display = 'none'
                } else if (parksValue === "seaworld,buschgardens" || parksValue === "seaworld,adventureisland") {
                    headingElem.style.display = "block"
                    resultElem.style.display = "none"
                    setheading(`These products meet your criteria:`);
                    document.querySelector('.three-park-ticket').style.display = "block";
                    document.querySelector('.four-park-ticket').style.display = "block";
                } else if (parksValue.split(',').length === 4) {
                    headingElem.style.display = "block"
                    setheading(`This product meets your criteria:`)
                    document.querySelector('.four-park-ticket').style.display = "block";
                    setResultMessage(`Based on your selections, you may also wish to explore our <a href="https://seaworld.com/orlando/annual-pass/">Annual Passes</a>`);
                } else if (!parksGroup.getAttribute('value').includes('seaworld') && (document.querySelectorAll('#parksGroup .selected').length == 3 || document.querySelectorAll('#parksGroup .selected').length == 2 || document.querySelectorAll('#parksGroup .selected').length == 1)) {
                    headingElem.style.display = "block"
                    resultElem.style.display = "none"
                    setheading(`These products meet your criteria:`);
                    document.querySelector('.three-park-ticket').style.display = "block";
                    document.querySelector('.four-park-ticket').style.display = "block";
                } else if (parksGroup.getAttribute('value').includes('seaworld') && (document.querySelectorAll('#parksGroup .selected').length == 3)) {
                    headingElem.style.display = "block"
                    resultElem.style.display = "none"
                    setheading(`These products meet your criteria:`);
                    document.querySelector('.three-park-ticket').style.display = "block";
                    document.querySelector('.four-park-ticket').style.display = "block";
                } else if (parksValue === '') {
                    headingElem.style.display = 'none'
                }

            }

            // Handle unlimited day selection
            if (selectedDayValue === "unlimited") {
                document.querySelector('.seaworld-2025-fun-card').style.order = "inherit"
                document.querySelector('[class*=aquatica-2025-fun-card]').style.order = "inherit"
                if (parksValue === "seaworld") {
                    var headingElem = document.querySelector('.product-tile-heading');
                    document.querySelector('.seaworld-2025-fun-card').style.display = "block";
                    headingElem.style.display = "block";
                    setResultMessage(`Based on your selections, you may also wish to explore our <a href="https://seaworld.com/orlando/annual-pass/">Annual Passes</a>`);
                    setheading("This product meets your criteria:")

                } else if (parksValue === "seaworld,aquatica") {
                    var headingElem = document.querySelector('.product-tile-heading');
                    document.querySelector('[class*=aquatica-2025-fun-card]').style.display = "block";
                    headingElem.style.display = "block";
                    setResultMessage(`Based on your selections, you may also wish to explore our <a href="https://seaworld.com/orlando/annual-pass/">Annual Passes</a>`);
                    setheading("This product meets your criteria:")
                } else if (parksValue === "seaworld,buschgardens" || parksValue === "seaworld,adventureisland" || parksValue === "aquatica,buschgardens,adventureisland" || ((parksGroup.getAttribute('value').includes('seaworld') && document.querySelectorAll('#parksGroup .selected').length == 3))) {
                    setResultMessage(`Based on your selections, please explore our <a href="https://seaworld.com/orlando/annual-pass/">Annual Passes</a>`);
                    headingElem.style.display = "none";
                } else if ((!parksGroup.getAttribute('value').includes('seaworld') && document.querySelectorAll('#parksGroup .selected').length == 1)) {
                    var parkname = parksGroup.getAttribute('value')
                    // Check for different park names and update accordingly
                    if (parkname === 'buschgardens') {
                        parkname = `<a href="https://buschgardens.com/tampa/" target="blank">Busch Gardens</a>`;
                    } else if (parkname === 'seaworld') {
                        parkname = `<a href="https://seaworld.com/orlando" target="blank">SeaWorld</a>`;
                    } else if (parkname === 'aquatica') {
                        parkname = `<a href="https://aquatica.com/orlando/" target="blank">Aquatica</a>`;
                    } else if (parkname === 'adventureisland') {
                        parkname = `<a href="https://adventureisland.com/" target="blank">Adventure Island</a>`;
                    }
                    setResultMessage(`Based on your selections, please visit the ${parkname} website for options`);
                    headingElem.style.display = "none";
                } else if ((!parksGroup.getAttribute('value').includes('seaworld') && document.querySelectorAll('#parksGroup .selected').length == 2)) {
                    var valueAttr = parksGroup.getAttribute('value');
                    var parksArray = valueAttr.split(',');
                    console.log(parksArray)

                    function formatParkName(parkname) {
                        if (parkname === 'buschgardens') {
                            return `<a href="https://buschgardens.com/tampa/" target="blank">Busch Gardens</a>`;
                        } else if (parkname === 'seaworld') {
                            return `<a href="https://seaworld.com/orlando" target="blank">SeaWorld</a>`;
                        } else if (parkname === 'aquatica') {
                            return `<a href="https://aquatica.com/orlando/" target="blank">Aquatica</a>`;
                        } else if (parkname === 'adventureisland') {
                            return `<a href="https://adventureisland.com/" target="blank">Adventure Island</a>`;
                        } else {
                            return parkname; // Return as is if no match
                        }
                    }
                    // Format the first and second park names
                    var valueAttr1 = formatParkName(parksArray[0]);
                    var valueAttr2 = formatParkName(parksArray[1]);
                    console.log(valueAttr1)
                    console.log(valueAttr2)

                    setResultMessage(`Based on your selections, please visit the ${valueAttr1} or ${valueAttr2} website for options`);
                    headingElem.style.display = "none";
                } else if (parksValue.split(',').length === 4) {
                    // document.querySelector('.four-park-ticket').style.display = "block";
                    setResultMessage(`Based on your selections, please explore our <a href="https://seaworld.com/orlando/annual-pass/">Annual Passes</a>`);
                    headingElem.style.display = "none";
                } else if (parksValue === '') {
                    headingElem.style.display = 'none'
                }
            }
        }
        var filter = `<div class="filter-container site-container">
        <div class="full-width-callout">
            <p class="full-width-callout__title">Find Your Ideal Ticket</p>
            <div class="filter-wrapper">
                <div>
                    <strong>Number of days visiting</strong>
                    <div class="btn-group" id="daysGroup">
                        <button data-value="1">1 day</button>
                        <button data-value="2">2 days</button>
                        <button data-value="3-14">3-14 days</button>
                        <button data-value="unlimited">Unlimited</button>
                    </div>
                </div>
    
                <div id="parksSection">
                    <p><strong>Florida Parks</strong> Select all that apply</p>
                    <div class="btn-group" id="parksGroup" value="null">
                        <button data-value="seaworld">SeaWorld</button>
                        <button data-value="aquatica">Aquatica</button>
                        <button data-value="buschgardens">Busch Gardens</button>
                        <button data-value="adventureisland">Adventure Island</button>
                    </div>
                </div>
            </div>
            <div class="product-tile-heading">These products meet your criteria:</div>
    
    
            <div class="product-container">
    
                <div class="product-tiles"></div>
            </div>
            <div class="results" id="result">
                Select your options above to see available tickets.
            </div>
        </div>
        <div class="heading_205">All Products</div>
    </div>`
        var helper = _$();
        let selectedDays = null;
        let selectedParks = [];
        /* Variation Init */
        function init() {
            helper.log('Log inside from init');
            _$('body').addClass(variation_name)
            document.querySelectorAll('.product-placement-card__wrapper').forEach(wrapper => {
                const titleElement = wrapper.querySelector('.product-placement-card__title');
                if (titleElement) {
                    const title = titleElement.textContent.trim().replace(/\s+/g, '-').toLowerCase(); // Transform the title into a class-friendly format
                    wrapper.classList.add(`${title}`);
                }
            });
            if (!document.querySelector('.filter-container')) {
                if (document.querySelector('.product-placement-container__wrapper')) {
                    document.querySelector('.product-placement-container__wrapper').insertAdjacentHTML('afterend', filter)
                }
            }


            helper.waitForElement('.filter-container', function() {
                // Call the function to insert the product cards
                insertProductCards();
                checkIfAnySelected()
                setTimeout(function() {
                    visibleTheCard()
                    // visibiltyCheck()
                }, 100)
            }, 50, 15000)
        }
        if (window.location.href.includes('https://seaworld.com/orlando/tickets-c/')) {
            helper.waitForElement(".filter-container", function() {
                if (!window.clickAdeedT205) {
                    clickAdeed()
                    window.clickAdeedT205 = true
                }
            }, 50, 15000)
        }


        /* Initialise variation */
        if (window.location.href.includes('https://seaworld.com/orlando/tickets-c/')) {
            helper.waitForElement(".product-placement-card__wrapper", init, 50, 5000);
        }

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();