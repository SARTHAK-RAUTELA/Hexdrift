(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "TT-158";
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

        var uniqueDataObject{
            "/k/handyman/near-me": {
                "13500042": {
                    "Header": "Check out [#] handyman services near you",
                    "ProListTitle": "Top 10 handyman services near you"
                },
                "44150212": {
                    "Header": "Check out [#] handyman services near you",
                    "ProListTitle": "Top 10 handyman services near you"
                },
                "89093037": {
                    "Header": "Check out [#] handyman services near you",
                    "ProListTitle": "Top 10 handyman services near you"
                },
                "89094657": {
                    "Header": "Check out [#] quality handymen near you",
                    "ProListTitle": "Top 10 quality handymen near you"
                },
                "102073904": {
                    "Header": "Check out [#] handymen for hire near you",
                    "ProListTitle": "Top 10 handymen for hire near you"
                },
                "102073984": {
                    "Header": "Check out [#] handymen for hire near you",
                    "ProListTitle": "Top 10 handymen for hire near you"
                },
                "154548391": {
                    "Header": "Check out [#] handyman services near you",
                    "ProListTitle": "Top 10 handyman services near you"
                },
                "178195763": {
                    "Header": "Check out [#] handymen for hire near you",
                    "ProListTitle": "Top 10 handymen for hire near you"
                },
                "246689671": {
                    "Header": "Check out [#] handyman services near you",
                    "ProListTitle": "Top 10 handyman services near you"
                },
                "286606524": {
                    "Header": "Check out price estimates from [#] handymen near you",
                    "ProListTitle": "Get price estimates from the top 10 handymen near you"
                },
                "289852464": {
                    "Header": "Check out [#] handymen for hire near you",
                    "ProListTitle": "Top 10 handymen for hire near you"
                },
                "289852764": {
                    "Header": "Check out quotes from [#] handymen near you",
                    "ProListTitle": "Get quotes from the top 10 handymen near you"
                },
                "289856844": {
                    "Header": "Check out [#] handymen for hire near you",
                    "ProListTitle": "Top 10 handymen for hire near you"
                },
                "289873644": {
                    "Header": "Check out [#] handymen for hire near you",
                    "ProListTitle": "Top 10 handymen for hire near you"
                },
                "289873974": {
                    "Header": "Check out [#] handymen for hire near you",
                    "ProListTitle": "Top 10 handymen for hire near you"
                },
                "335491628293": {
                    "Header": "Check out [#] handymen for hire near you",
                    "ProListTitle": "Top 10 handymen for hire near you"
                }
            },
        }
        var objectData = {
            
            "/k/commercial-cleaning/near-me": {
                "602600312": {
                    "Header": "Find commercial cleaning services near you",
                    "ProListTitle": "Top 10 commercial cleaning services near you"
                },
                "602605922": {
                    "Header": "Find commercial cleaning services near you",
                    "ProListTitle": "Top 10 commercial cleaning services near you"
                },
                "882313130": {
                    "Header": "Find commercial cleaning services near you",
                    "ProListTitle": "Top 10 commercial cleaning services near you"
                },
                "1438063534": {
                    "Header": "Find commercial cleaning services near you",
                    "ProListTitle": "Top 10 commercial cleaning services near you"
                },
                "2225190958683": {
                    "Header": "Find commercial cleaning services near you",
                    "ProListTitle": "Top 10 commercial cleaning services near you"
                },
                "315474535667": {
                    "Header": "Find commercial cleaning services near you",
                    "ProListTitle": "Top 10 commercial cleaning services near you"
                },
                "298574927001": {
                    "Header": "Find commercial cleaning services near you",
                    "ProListTitle": "Top 10 commercial cleaning services near you"
                },
                "2233444683052": {
                    "Header": "Find commercial cleaning services near you",
                    "ProListTitle": "Top 10 commercial cleaning services near you"
                },
                "369478754132": {
                    "Header": "Find commercial cleaning services near you",
                    "ProListTitle": "Top 10 commercial cleaning services near you"
                },
                "297627036861": {
                    "Header": "Find commercial cleaning services near you",
                    "ProListTitle": "Top 10 commercial cleaning services near you"
                }
            }
        }


        /* Variation Init */
        function init() {
            document.querySelector("body").classList.add(variation_name);
            var url = window.location.href;
            var match = url.match(/kwd-(\d+)-/);
            var pagePath = window.location.pathname;
            if (match && match[1]) {
                var kwId = match[1];
                if (kwId && pagePath) {
                    // Assuming objectData is defined and contains the required data
                    // console.log(typeof(kwId), "kwID")
                    var HeaderTitle = objectData[pagePath] && objectData[pagePath][kwId] && objectData[pagePath][kwId].Header;
                    var ProListTitle = objectData[pagePath] && objectData[pagePath][kwId] && objectData[pagePath][kwId].ProListTitle;
                    console.log(HeaderTitle, "headetitle")
                    console.log(ProListTitle, "ProListTitle")
                    // Determine if it's mobile or desktop based on screen width or platform
                    var isMobile = window.innerWidth <= 768; // You can adjust the width threshold if needed
                    // Use appropriate selector based on device type
                    var headerElement;
                    if (isMobile) {
                        headerElement = document.querySelector('[class*="hero-header_flexHeaderContentTitle"]'); // Mobile selector
                    } else {
                        headerElement = document.querySelector('[class*="hero-header_filters"] h2'); // Desktop selector
                    }
                    var spanElement = document.querySelector('#pro_list_header > span');
                    var firstChildNode = spanElement ? spanElement.childNodes[0] : null;
                    // Update header content if element exists
                    if (headerElement) {
                        headerElement.innerHTML = HeaderTitle;
                    }
                    // Update ProList title if element exists and is a text node
                    if (firstChildNode && firstChildNode.nodeType === Node.TEXT_NODE) {
                        firstChildNode.nodeValue = ProListTitle;
                    }
                }
            }
        }
        /* Initialise variation */

        var test144Interval = setInterval(function () {
            waitForElement("body", init, 50, 15000);
        }, 100);
        setTimeout(function () {
            clearInterval(test144Interval);
        }, 5000);

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();
