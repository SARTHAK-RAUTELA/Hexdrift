(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "TT-153";

        /* all Pure helper functions */
        function waitForElement(selector, trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function () {
                if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function () {
                clearInterval(interval);
            }, delayTimeout);
        }

        /* HTML strings */
        var circle_itemstyle = `
        <div class="main_pulsing-circle">
            <div class="tt_pulsing-circle">
                <div class="circle_itemstyle"></div>
            </div>
        </div>`;



        /* Variation Init */
        function init() {
            document.querySelector("body").classList.add(variation_name);

            // Wait for elements to be available
            waitForElement('[class*="pro-list-result_profileInfoContainer"] [class*="pro-review_root"]', function () {
                document.querySelectorAll('[class*="pro-list-results-front-door_proListResultsWrapper"] > div > div a').forEach((wrapper) => {
                    var firstElement = wrapper.querySelector('[class*="pro-list-result_profileInfoContainer"] [class*="pro-review_root"]');
                    var secondElement = wrapper.querySelector('[class*="pro-list-results-front-door"] a[data-test="pro-list-result"] > div:first-child ');

                    if (firstElement && secondElement) {
                        // Move firstElement after secondElement
                        secondElement.parentNode.insertBefore(firstElement, secondElement.nextSibling);
                    }
                });
            }, 50, 15000);

            // Process each card in a single loop
            document.querySelectorAll('[class*="pro-list-results-front-door_root"] [class*="pro-list-results-front-door"] > div > div').forEach((element) => {
                // add online circle html 
                if (element.querySelector('[class*="pulsing-circle_root"]')) {
                    var targetElement = element.querySelector('[class*="pro-list-result-image_proImage"]');
                    if (targetElement && !element.querySelector('.main_pulsing-circle')) {
                        targetElement.insertAdjacentHTML('beforeend', circle_itemstyle);
                    }
                }

                // add saprater line 
                var lineelement = element.querySelector('[data-test="pro-list-result"]');
                if (lineelement && !element.querySelector('.ttline_addline')) {
                    lineelement.insertAdjacentHTML('beforeend', "<div class='ttline_addline'></div>");
                }

                // Extract and update review rating
                var reviewElement = element.querySelector('[class*="pro-list-results-front-door"] a[data-test="pro-list-result"] > div > div[class*="pro-list-result_profileInfoContainer"] > div .hover-blue + div > [class*="hideAtOrBelow"] .green p');
                if (reviewElement && !element.querySelector('.review_rating')) {
                    let textContent = reviewElement.textContent;
                    let number = textContent.match(/\d+(\.\d+)?/); // Extract number with decimal
                    if (number) {
                        reviewElement.textContent = number[0]; // Replace text with extracted number
                    }
                }

                // Move flex-wrap class element
                if (window.matchMedia('(min-width: 700px)').matches) {
                    var flexWrapChild = element.querySelector('.flex-wrap .mt2.mr1');
                    if (flexWrapChild) {
                        var flexWrapParent = flexWrapChild.closest('.flex-wrap');
                        if (flexWrapParent) {
                            flexWrapParent.classList.add('tt_chnagesposition');
                            var targetElement = element.querySelector('[class*="pro-list-result_profileInfoContainer"] > div .hover-blue + .flex-wrap [class*="lazy-tooltip_root"]');
                            if (targetElement) {
                                targetElement.after(flexWrapParent);
                            }
                        }
                    }
                    waitForElement('[class*="pro-list-results-front-door"] a[data-test="pro-list-result"]>div>div[class*="pro-list-result_profileInfoContainer"]>div .hover-blue+div>[class*="hideAtOrBelow"] p', function () {
                        // Select all matching elements
                        const elements = document.querySelectorAll('[class*="pro-list-results-front-door"] a[data-test="pro-list-result"]>div>div[class*="pro-list-result_profileInfoContainer"]>div .hover-blue+div>[class*="hideAtOrBelow"] p');

                        // Loop through each element and apply the changes
                        elements.forEach(element => {
                            // Extract the text content of each element
                            let text = element.textContent;

                            // Use a regular expression to remove parentheses and keep only the number inside
                            let numberOnly = text.replace(/[()]/g, '').trim();

                            // Update the element's text content with the number only
                            element.textContent = numberOnly;
                        });

                    }, 1000, 15000);
                }

                if (window.matchMedia('(max-width: 699px)').matches) {
                    // chnages pill position for mobile device wrap code 
                    waitForElement('[class*="pro-list-results-front-door"] [class*="pro-review_root"]', function () {
                        // Find all elements inside the card that match [class*="lazy-tooltip_root"] and .br-pill
                        var tooltipElements = element.querySelectorAll('[class*="lazy-tooltip_root"]');
                        var brPillElements = element.querySelectorAll('.br-pill'); // Find .br-pill elements

                        // Now find the [class*="pro-review_root"] element
                        var reviewElement = element.querySelector('[class*="pro-list-results-front-door"] [class*="pro-review_root"]');

                        // Combine tooltipElements and brPillElements into one array
                        var allElements = [...tooltipElements, ...brPillElements];

                        // Check if there are elements to move
                        if (allElements.length > 0) {
                            // Check if the wrapper already exists
                            var existingWrapper = element.querySelector('.tt_tooltip-wrapper');

                            // If wrapper doesn't exist, create one
                            if (!existingWrapper) {
                                // Create a new div that will wrap the elements
                                var wrapperDiv = document.createElement('div');
                                // Add class to the div
                                wrapperDiv.classList.add('tt_tooltip-wrapper');

                                // Move each element into the new div
                                allElements.forEach((el) => {
                                    // Check if the element has children or is not empty before appending
                                    if (el.children.length > 0 || el.textContent.trim() !== '') {
                                        wrapperDiv.appendChild(el);
                                    } else {
                                        // If the element is empty, remove it from the DOM
                                        el.remove();
                                    }
                                });

                                // Check if wrapperDiv has any children before inserting
                                if (wrapperDiv.children.length > 0 && reviewElement) {
                                    // Insert the new div before the [class*="pro-review_root"]
                                    reviewElement.insertAdjacentElement('beforebegin', wrapperDiv);
                                } else {
                                    // If wrapperDiv is empty, remove it
                                    wrapperDiv.remove();
                                }
                            } else {
                                // If the wrapper already exists, just add elements to the existing wrapper
                                allElements.forEach((el) => {
                                    if (el.children.length > 0 || el.textContent.trim() !== '') {
                                        existingWrapper.appendChild(el);
                                    } else {
                                        el.remove();
                                    }
                                });
                            }
                        }

                        var profileInfoElement = element.querySelector('[class*="pro-list-result_profileInfoContainer"]>div:first-child + div');

                        if (profileInfoElement && reviewElement) {
                            // Clone the element to move it (to keep the original structure intact)
                            var clonedElement = profileInfoElement.cloneNode(true);

                            // Remove the original element after moving
                            profileInfoElement.remove();

                            // Insert the cloned element after the review element
                            reviewElement.insertAdjacentElement('afterend', clonedElement);

                            // Add 'sticky' class to the cloned element
                            clonedElement.classList.add('tt_sticky');
                        }
                    }, 50, 15000);




                    document.querySelectorAll('p[class*="pro-cost-estimate_subTex"] span').forEach(function (span) {
                        if (span.textContent.includes('estimated price')) {
                            span.textContent = span.textContent.replace('estimated price', 'est.');
                        }
                    });
                    document.querySelectorAll('[class*="cost-information_mobileCostSubtext"]').forEach(function (element) {
                        if (element.textContent.trim().toLowerCase() === 'Contact for price') {
                            element.textContent = element.textContent.split(' ').map(function (word) {
                                return word.charAt(0).toUpperCase() + word.slice(1);
                            }).join(' ');
                        }
                    });
                }

            });


            // Select all <p> elements
            document.querySelectorAll('p').forEach(function (paragraph) {
                // Check if the paragraph contains the text "Available for a service call"
                if (paragraph.textContent.includes('Available for a service call')) {
                    // Hide the paragraph by setting display to 'none'
                    paragraph.style.display = 'none';
                }
            });

            // Select all elements with the class .signal-child
            document.querySelectorAll('li.signal-child').forEach(function (element) {
                // Check if the text content includes "similar job done near you" or "similar jobs done near you"
                if (element.textContent.includes('similar job done near you') || element.textContent.includes('similar jobs done near you')) {
                    // Hide the entire .signal-child element by setting display to 'none' with !important
                    element.style.setProperty('display', 'none', 'important');
                }
            });





            // Select all the cards that match the provided selector
            document.querySelectorAll('[class*="pro-list-results-front-door"] a[data-test="pro-list-result"]').forEach(card => {
                // Find the element inside the card that matches the specific nested selector
                var targetElement = card.querySelector('div > div[class*="pro-list-result_profileInfoContainer"] > div .hover-blue + div > [class*="hideAtOrBelow"]');

                // Check if the element exists and if its text content is "New on Thumbtack"
                if (targetElement && targetElement.textContent.trim() === "New on Thumbtack") {
                    // Add the class 'newtt' to the element
                    targetElement.classList.add('newtt');
                    targetElement.parentElement.classList.add('newtt');
                }


            });

            document.querySelectorAll('[class*="lazy-tooltip_root"]').forEach(function (element) {
                if (element.textContent.trim() === 'Top Pro') {
                    element.classList.add('tttoppro');
                }
            });

            document.querySelectorAll('[class*="pro-list-result_profileInfoContainer"] > div:first-child > div ul.flex-column').forEach(function (ulElement) {
                let parentElement = ulElement.parentElement; // The parent of the ul element
                if (parentElement) {
                    parentElement.classList.add('TTmobileshowitem');
                }
            });




            document.querySelectorAll('[class*="pro-list-result_profileInfoContainer"] > div:first-child > div ul.flex-column li span').forEach(span => {
                let text = span.textContent;
                if (text.includes('on Thumbtack')) {
                    span.textContent = text.replace('on Thumbtack', '').trim(); // Remove "on Thumbtack"
                }
            });




            document.querySelectorAll('[class*="pro-list-results-front-door"] a[data-test="pro-list-result"]').forEach(card => {
                // First, find the .dn.m_db.mt2 element inside the card and add the tthide class
                const targetElement = card.querySelector('.dn.m_db.mt2');
                if (targetElement) {
                    targetElement.classList.add('tthide');
                }

                // Select the ul within the current card where the li will be appended
                const ul = card.querySelector('.TTmobileshowitem ul'); // Change this to select within the card

                // Function to create li with the given text and append the svg at the beginning
                function createAndAppendLi(text) {
                    const li = document.createElement('li');

                    // Add the required classes to the li
                    li.classList.add('Type_text2__2_pIm', 'nowrap', 'black-300', 'flex', 'pre', 'items-center', 'tt_Available');

                    // Create the SVG element
                    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    svg.setAttribute("height", "14");
                    svg.setAttribute("width", "14");
                    svg.setAttribute("fill", "currentColor");
                    svg.setAttribute("viewBox", "0 0 14 14");

                    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    path.setAttribute("d", "M4.968 10.08l.897-2.855a.751.751 0 00-.716-.975H4.141L6.604 2.5h3.019L8.101 5.123A.748.748 0 008.75 6.25h.898l-4.68 3.83zm7.488-4.832a.748.748 0 00-.706-.498h-1.698l1.523-2.623A.752.752 0 0010.925 1H6.201a.75.75 0 00-.628.338l-3.45 5.25A.75.75 0 002.75 7.75h1.378l-1.344 4.275a.749.749 0 001.19.806l8.25-6.75a.749.749 0 00.232-.833z");

                    // Append the path to the svg
                    svg.appendChild(path);

                    // Append the svg at the start of the li
                    li.appendChild(svg);

                    // Add the text after the svg
                    const textNode = document.createTextNode(text);
                    li.appendChild(textNode);

                    // Append the li to the ul within the current card
                    if (ul) {
                        ul.appendChild(li);
                    }
                }

                // Check if the card contains "Available for a service call"
                if (document.querySelector('span').textContent.includes('Available for a service call')) {
                    const existingLi = [...(ul ? ul.querySelectorAll('li') : [])].some(li => li.textContent.includes('Available for a service call'));
                    if (!existingLi) {
                        createAndAppendLi('Available for a service call');
                    }

                    // Add the hidetext class to the parent div of the first div containing the text
                    const selectedElement = card.querySelector('.dn.m_db.mt2');
                    const parentDiv = selectedElement ? selectedElement.closest('div') : null;

                    if (parentDiv) {
                        parentDiv.classList.add('hidetext');
                    }
                }

                const Available = document.querySelectorAll('[class*="pro-list-result_profileInfoContainer"]'); // Select all cards

                Available.forEach(card => {
                    // Check if the card already contains the text 'Available for a service call'
                    const textExists = card.textContent.includes('Available for a service call');

                    if (textExists) {
                        const targetUl = card.querySelector('div:first-child > div ul.flex-column'); // Target the specific ul.flex-column

                        if (targetUl) {
                            // Check if the text 'Available for a service call' is already present in any <li>
                            const existingLi = [...targetUl.querySelectorAll('li')].find(li => li.textContent.includes('Available for a service call'));

                            // If the text already exists in the card, add the class 'availablehide' to that <li>
                            if (existingLi) {
                                existingLi.classList.add('availablehide');
                            } else {
                                // If the text is not present, create a new <li> and append it
                                const newLi = document.createElement('li'); // Create a new li element
                                newLi.textContent = 'Available for a service call'; // Set the text content

                                targetUl.appendChild(newLi); // Append the li element to the ul
                            }
                        }
                    }
                });






                // Check if the card contains "Instant Book availability"
                if (card.textContent.includes('Instant Book availability')) {
                    const existingLi = [...(ul ? ul.querySelectorAll('li') : [])].some(li => li.textContent.includes('Instant Book availability'));
                    if (!existingLi) {
                        createAndAppendLi('Instant Book availability');
                    }

                    // Add the hidetext class to the parent div of the first div containing the text
                    const selectedElement = card.querySelector('.dn.m_db.mt2');
                    const parentDiv = selectedElement ? selectedElement.closest('div') : null;
                    if (parentDiv) {
                        parentDiv.classList.add('hidetext');
                    }

                    // Find the .black.flex.items-center parent and add the hideitem class
                    const parentElement = card.querySelector('.black.flex.items-center');
                    if (parentElement) {
                        parentElement.classList.add('Instant_hideitem');
                    }
                }
            });


            waitForElement('[class*="pro-list-result_profileInfoContainer"] > div:first-child > div > div', function () {

                document.querySelectorAll('[class*="pro-list-result_profileInfoContainer"] > div:first-child > div > div').forEach(function (element) {
                    // Trim the text content to remove any leading/trailing whitespace and check if it's empty
                    if (element.textContent.trim() === '') {
                        element.classList.add('tt_empty'); // Add the 'empty' class if the element has no text
                    }
                });



            }, 900, 15000);




            if (window.matchMedia('(max-width: 699px)').matches) {
                waitForElement('.tt_tooltip-wrapper', function () {
                    const cards = document.querySelectorAll('[class*="pro-list-results-front-door_root"] [class*="pro-list-results-front-door"]>.ph3>div > div'); // Update '.card-selector' with your card class

                    cards.forEach(card => {
                        const mobileShowItem = card.querySelector('.TTmobileshowitem');
                        const tooltipWrapper = card.querySelector('[class*="pro-list-results-front-door"] [class*="pro-review_root"]');

                        // Check if both elements exist in the current card
                        if (mobileShowItem && tooltipWrapper) {
                            // Move .TTmobileshowitem after .tt_tooltip-wrapper
                            tooltipWrapper.insertAdjacentElement('beforebegin', mobileShowItem);
                        }
                    });
                }, 50, 15000);

                waitForElement('.tt_sticky', function () {
                    var stickyElements = document.querySelectorAll('.tt_sticky');

                    stickyElements.forEach(sticky => {
                        // Select the child divs within the sticky element
                        var childDivs = sticky.querySelectorAll('div');

                        // Check if there is only one child div
                        if (childDivs.length === 1) {
                            // Add the 'single' class to the sticky element itself
                            sticky.classList.add('single');
                        }
                    });
                }, 50, 15000);

                document.querySelectorAll('.black.flex.items-center').forEach(element => {
                    // Check if the element contains the specific text for "Instant Book availability for"
                    const textElement = element.querySelector('.Type_text2__2_pIm span');

                    // Make sure the text element exists before accessing its innerText
                    if (textElement && textElement.innerText.includes('Instant Book availability for')) {

                        // Check if the <svg> exists and get its parent
                        let svgElement = element.querySelector('svg');
                        if (svgElement) {
                            let targetElement = svgElement.parentElement; // Get the parent of the <svg> element
                            if (targetElement) {
                                targetElement.classList.add('hideinstant'); // Add 'hideinstant' class
                            }
                        }
                    }
                });
            }


            document.querySelectorAll('[class*="pro-list-results-front-door"] a[data-test="pro-list-result"]').forEach(card => {
                // Navigate to the desired element inside the card
                const targetElement = card.querySelector('div[class*="pro-list-result_profileInfoContainer"]>div .hover-blue+div>[class*="hideAtOrBelow"]:first-child');

                if (targetElement) {
                    console.log('foundelement')
                    // Traverse to the parent of the parent div
                    const grandParentDiv = targetElement.closest('div').parentElement;
                    if (grandParentDiv) {
                        grandParentDiv.classList.add('positionchnages');
                    }
                }
            });












            waitForElement('.TTmobileshowitem ul li', function () {

                const liElements = document.querySelectorAll('li');

                // Array of text phrases to match, including individual words
                const phrases = [
                    "similar jobs done near you",
                    "Thumbtack pay",
                    "offers remote services",
                    "discounts available",
                    "Serves"
                ];

                // Loop through each <li> element
                liElements.forEach(li => {
                    // Get the text content of the <li> and check if it matches any part of the phrases
                    phrases.forEach(phrase => {
                        if (li.textContent.trim().toLowerCase().includes(phrase.toLowerCase())) {
                            // Add the class 'hideservices' if any part of the phrase matches
                            li.classList.add('hideservices');
                        }
                    });
                });

            }, 2000, 15000);




            // Select all the cards that match the provided selector
            document.querySelectorAll('[class*="pro-list-results-front-door"] a[data-test="pro-list-result"]').forEach(card => {
                // Find the target element which is the second child of [class*="pro-list-result_profileInfoContainer"]
                var targetParent = card.querySelector('[class*="pro-list-result_profileInfoContainer"] > div:nth-child(2)');

                // Check if the targetParent exists and if it has exactly one child div
                if (targetParent && targetParent.querySelectorAll('div').length === 1) {
                    // Add the class 'singleitem' to the parent element
                    targetParent.classList.add('singleitem');

                    // Create the new element to insert
                    var newElement = document.createElement('div');
                    newElement.classList.add('flex', 'items-center', 'contactforprice');
                    newElement.innerHTML = '<p>Contact for price</p>';

                    // Insert the new element before the first child div inside targetParent
                    var firstChildDiv = targetParent.querySelector('div');
                    targetParent.insertBefore(newElement, firstChildDiv);
                }
            });
            // Select all matching elements
            function changetextforpill() {
                const pillelements = document.querySelectorAll('.br-pill');

                // Loop through each element and check the text content
                pillelements.forEach(element => {
                    // Get the trimmed text content of the element
                    const pillText = element.textContent.trim();

                    // Check the text and perform actions accordingly
                    switch (pillText) {
                        case "In high demand":
                            element.textContent = "In demand";
                            element.classList.add('in-demand'); // Add the class to the same element
                            break;
                        case "Licensed pro":
                            element.textContent = "Licensed";
                            element.classList.add('licensed'); // Add the class to the same element
                            break;
                        case "Limited Availability":
                            element.textContent = "Limited avail.";
                            element.classList.add('limited-avail'); // Add the class to the same element
                            break;
                        default:
                            // No action needed for other texts
                            break;
                    }
                });
            }

            var pills = setInterval(function () {
                console.log('test run')
                changetextforpill();
            }, 50);
            setTimeout(function () {
                clearInterval(pills);
            }, 4000);







            waitForElement('[class*="pro-list-results-front-door"] > div > div [data-test="pro-list-result"] > div:nth-last-child(2) > div:first-child > div:last-child', function () {
                document.querySelectorAll('[class*="pro-list-results-front-door"] > div > div [data-test="pro-list-result"] > div:nth-last-child(2) > div:first-child > div:last-child').forEach(element => {
                    // Check if the element has no text content
                    if (element.textContent.trim() === '') {
                        // Ensure the <p>Contact for price</p> is not already appended
                        if (!element.querySelector('p.contact-for-price')) {
                            // Create the new <p> element
                            const contactText = document.createElement('p');
                            contactText.textContent = 'Contact for price';
                            contactText.classList.add('contact-for-price'); // Add a class to avoid multiple inserts

                            // Append the new element
                            element.appendChild(contactText);
                        }
                    }
                });
            }, 1000, 15000);

            var priceWrapperParagraphs = document.querySelectorAll('[class*="pro-cost-estimate_priceWrapperBody"] p');

            // Check each paragraph element
            priceWrapperParagraphs.forEach(function (paragraph) {
                // If the paragraph text includes "hour", replace it
                if (paragraph.textContent.includes("hour")) {
                    // Replace "hour" with "hr"
                    paragraph.textContent = paragraph.textContent.replace(/hour/g, "hr");
                }
            });

            // Find all span elements that are inside [class*="cost-information_mobileCostSubtext"]
            var costSubtextSpans = document.querySelectorAll('[class*="cost-information_mobileCostSubtext"] span');

            // Capitalize the first letter of each span element's text
            costSubtextSpans.forEach(function (span) {
                var text = span.textContent.trim(); // Get the text inside the span and remove spaces
                if (text.length > 0) {
                    // Capitalize the first letter and keep the rest of the text as it is
                    span.textContent = text.charAt(0).toUpperCase() + text.slice(1);
                }
            });
        }

        /* Initialise variation */
        function thumbtackTest144(list, observer) {
            list.getEntries().forEach((entry) => {
                if (entry.entryType === "mark" && entry.name === "afterHydrate") {
                    observer.disconnect();
                    clearInterval(test144Interval);
                    waitForElement("body", init, 50, 15000);
                    window.isHydrated = true;
                }
            });
        }

        if (!window.isHydrated) {
            var test144Interval = setInterval(function () {
                waitForElement("body", init, 50, 15000);
            }, 50);
            setTimeout(function () {
                clearInterval(test144Interval);
            }, 3000);
            var observer = new PerformanceObserver(thumbtackTest144);
            observer.observe({
                entryTypes: ["mark"]
            });
        } else {
            waitForElement("body", init, 50, 15000);
        }
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();
