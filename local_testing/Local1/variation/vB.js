

(function () {
  try {
    /* main variables */
    var debug = 1;
    var variation_name = "TT-150";
    window.serviceData = "";


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
      /****Helper Functions****/
      // helper for enabling IE 8 event bindings
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent("on" + type, handler);
        else el.addEventListener(type, handler);
      }
      // matches polyfill
      this && this.Element &&
        (function (ElementPrototype) {
          ElementPrototype.matches =
            ElementPrototype.matches ||
            ElementPrototype.matchesSelector ||
            ElementPrototype.webkitMatchesSelector ||
            ElementPrototype.msMatchesSelector ||
            function (selector) {
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

    // Utility functions
    function extractNumbersWithPlus(inputString) {
      var pattern = /(\d+\+|\d+)/g;
      var matches = inputString.match(pattern);
      return matches || [];
    }

    function extractServices(profession_content) {
      var matches = profession_content.match(/\d+\s+(.*?)\s+near/);
      var result = matches ? matches[1] : null;
      return result;
    }

    function extractLocation(inputString) {
      const match = inputString.match(/near\s+(.+)/i);
      if (match && match[1]) {
        return match[1].trim();
      } else {
        return null;
      }
    }

    function extractWordsBeforeNear(sentence) {
      const regex = /^(.*?)\s?near/i;
      const match = sentence.match(regex);
      return match ? match[1].trim() : sentence;
    }

    function extractNumberFromString(str) {
      // Use regular expression to find numbers in the string, including those with commas
      let match = str.match(/\d{1,3}(,\d{3})*/g);
      // If there's a match, join the parts and return it as a number; otherwise, return null
      return match ? parseInt(match.join(''), 10) : null;
    }

    function changeTopFormStyling() {
      var number_content = "";
      var SearchDiv = `<tt-searchContainer></tt-searchContainer>`;
      // Adding a parenetDiv to the search form hero for styling --------------------
      waitForElement("[class*='compact-filters_wrapper']", function () {
        if (!document.querySelector("tt-searchContainer")) {
          document.querySelector("[class*='compact-filters_wrapper']").insertAdjacentHTML("beforebegin", SearchDiv)
        }
      })

      waitForElement("tt-searchContainer", function () {
        var searchInputForm = document.querySelector("[class*='compact-filters_wrapper'] ");
        var SearchButton = document.querySelector("[class*='compact-filters_wrapper']+div");
        // console.log(typeof(searchInputForm), "searchInputForm");
        // console.log(SearchButton, "SearchButton");
        // var containerDiv = searchInputForm + SearchButton
        if (searchInputForm && SearchButton) {
          if (!document.querySelector("tt-searchContainer #uniqueId2")) {
            document.querySelector("tt-searchContainer").insertAdjacentElement("afterbegin", SearchButton);
            document.querySelector("tt-searchContainer").insertAdjacentElement("afterbegin", searchInputForm);
          }

        }
      })

      // If pill is available on the page
      waitForElement("[class*='hero-header_filters'] p", function () {
        if (document.querySelector("[class*='hero-header_filters'] p").innerHTML != "Confirm your location to see highly-rated pros near you.") {
          document.querySelector("[class*='hero-header_filters'] p").innerHTML = "Confirm your location to see highly-rated pros near you."
        }
      })

      if (document.querySelector('div[class*="hero-header_filters"] h2 + div button')) {
        number_content = document.querySelector(`div[class*="hero-header_filters"] h2 + div button`).textContent;
        var profession_content = document.querySelector(`h2#pro_list_header span`).textContent;
        var result_number = extractNumbersWithPlus(number_content);
        var profession_result = extractServices(profession_content);
        var loc = extractLocation(profession_content);
        if (profession_result == null) {
          profession_result = extractWordsBeforeNear(profession_content);
        }
        var lowercaseProfessionResult = profession_result.toLowerCase();
        var count = extractNumberFromString(document.querySelector(`div[class*="hero-header_filters"] h2 + div button`).textContent);

        const searchString = "https://www.thumbtack.com/k/";
        if (window.location.href.startsWith(searchString)) {
          document.querySelector(`[class*="hero-header_filters"] [class*="Type_title3"]`).textContent = "Check out   " + result_number + " " + lowercaseProfessionResult + " near you";
        } else {
          document.querySelector(`[class*="hero-header_filters"] [class*="Type_title3"]`).innerHTML =
            "Check out " +
            result_number +
            " " +
            lowercaseProfessionResult +
            " near  <span>" +
            loc +
            "</span>";
        }
        if (document.querySelector('[class*="hero-header_rootFlex"]>[class*=hero-header_heroHeaderExtendedHeight] picture+div h1')) {
          document.querySelector('[class*="hero-header_rootFlex"]>[class*=hero-header_heroHeaderExtendedHeight] picture+div h1').innerHTML =
            "Check out " +
            result_number +
            " " +
            '<span class="tt_location">' + lowercaseProfessionResult + '</span>'
            +
            " <span>near</span> <span>" +
            loc +
            "</span>";
        }
        if (document.querySelector('[class*="hero-header_heroHeaderHeight"] [class*="hero-header_flexHeaderContentTitle"]')) {
          document.querySelector('[class*="hero-header_heroHeaderHeight"] [class*="hero-header_flexHeaderContentTitle"]').textContent = "Check out   " + result_number + " " + lowercaseProfessionResult + " near you";
        }
      } else {
        number_content = "";
        waitForElement("h2#pro_list_header span", function () {
          var profession_content = document.querySelector(`h2#pro_list_header span`).textContent;

          var profession_result = extractServices(profession_content);
          var loc = extractLocation(profession_content);
          if (profession_result == null) {
            profession_result = extractWordsBeforeNear(profession_content);
          }
          var lowercaseProfessionResult = profession_result.toLowerCase();

          const searchString = "https://www.thumbtack.com/k/";
          if (window.location.href.startsWith(searchString)) {
            document.querySelector(`[class*="hero-header_filters"] [class*="Type_title3"]`).textContent = "Check out   " + lowercaseProfessionResult + " near you";
          } else {
            document.querySelector(`[class*="hero-header_filters"] [class*="Type_title3"]`).innerHTML =
              "Check out " +
              " " +
              lowercaseProfessionResult +
              " near  <span>" +
              loc +
              "</span>";
          }
          if (document.querySelector('[class*="hero-header_rootFlex"]>[class*=hero-header_heroHeaderExtendedHeight] picture+div h1')) {
            document.querySelector('[class*="hero-header_rootFlex"]>[class*=hero-header_heroHeaderExtendedHeight] picture+div h1').innerHTML =
              "Check out " +
              " " +
              lowercaseProfessionResult +
              " <span>near</span> <span>" +
              loc +
              "</span>";
          }
          if (document.querySelector('[class*="hero-header_heroHeaderHeight"] [class*="hero-header_flexHeaderContentTitle"]')) {
            document.querySelector('[class*="hero-header_heroHeaderHeight"] [class*="hero-header_flexHeaderContentTitle"]').textContent = "Check out   " + lowercaseProfessionResult + " near you";
          }
        })

      }
    }

    var overlay = `<div class='showOverlay LoadingOverlay' style="display:none"><div class='loader'></div></div>`

    function init() {

      if (!document.querySelector(".LoadingOverlay")) {
        document.querySelector("body").insertAdjacentHTML("afterbegin", overlay)
      }

      // adding opcatity 0 for 3seconds to reduce flicker-------------
      if (!window.onlyForFirstTime) {
        window.onlyForFirstTime = true;
        // document.querySelector("body").style.opacity = 0;
        // setTimeout(function () {
        // 	document.querySelector("body").style.opacity = 1;
        // }, 3000)
        setTimeout(function () {
          document.querySelector(".showOverlay.LoadingOverlay").classList.remove("showOverlay");
        }, 3000)
      }

      // Getting "keyword_pk", "projectPK" from next data object and "currentZipCode" from Hero Form---------------
      if (window.__NEXT_DATA__ && window.__NEXT_DATA__.props) {
        var keyword_pk = window.__NEXT_DATA__.props.pageProps.frontDoorPage.heroSection.filterSubsection.cta.keywordPk;

        var projectPK = window.__NEXT_DATA__.props.pageProps.frontDoorPage.heroSection.filterSubsection.cta.projectPk;

        var currentZipCode = document.querySelector("#zip-code").value;
      }

      // keyword_pk, projectPK, currentZipCode is Availble----------------
      if (keyword_pk && projectPK && currentZipCode && window.__NEXT_DATA__.props.pageProps) {

        function generateServiceTiles() {

          var html = "";
          serviceData["data"].proList.projectDetails.categorySelector.singleSelect.options.forEach(function (ele) {
            html += `<div class="tt-servicesTile">
                    <a href=https://www.thumbtack.com/instant-results?keyword_pk=${keyword_pk}&zip_code=${currentZipCode}&ir_referrer=FRONT_DOOR_SEARCH&encoded_answers=eyJzZl9wayI6IjQ4OTk0ODk2NjE1OTQxNzM0OCIsImFucyI6e319&project_pk=${projectPK}&category_pk=${ele.id}>`;

            if (ele.image != null) {
              html += `<div class='tt-servicesTile-image'>
                            <img src='https://production-next-images-cdn.thumbtack.com/i/${ele.image.imagePk}/width/120.webp' alt='tt-servicesTile-image'>
                        </div>`;
            }

            html += `<div class='tt-servicesTile-Content'>
                            ${ele.label}
                        </div>
                        </a>
                    </div>`;
          })

          return html;

        }

        // Getting the data from GraphQL API and storing it into window.serviceData------------------
        if (!window.DataRetrevetdByGQL) {
          waitForElement("#zip-code", function () {

            if (keyword_pk && projectPK && currentZipCode) {
              var query = `query ProListResponse($input: ProListInput!) {
        proList(input: $input) {
        projectDetails {
        searchFormId
        categorySelector {
        id
        question
        label
        title {
          segments {
            text
            isBold
            emphasis
            url
            color
          }
        }
        singleSelect {
          options {
            id
            label
            image {
              imagePk
            }
          }
        }
      }
    }
  }
}`;

              var queryRequest = {
                "operationName": "ProListResponse",
                "variables": {
                  "input": {
                    "encodedAnswers": "eyJzZl9wayI6IjQ4OTk0ODk2NjE1OTQxNzM0OCIsImFucyI6e319",
                    "searchFormAnswers": [],
                    "keywordPk": keyword_pk,
                    "zipCode": currentZipCode,
                    "projectPk": projectPK,
                    "supportedSections": [
                      "PRO_GROUP",
                      "FULFILLMENT_PRO_CARD",
                      "MARKET_AVERAGES",
                      "PRICE_HIDING_UPSELL",
                      "HEADER",
                      "NO_EXACT_MATCH",
                      "ERROR",
                      "NO_MORE_PROS",
                      "REMOVE_FILTERS",
                      "CATEGORY_NOT_SUPPORTED",
                      "PROJECT_PRICING",
                      "GUARANTEE"
                    ],
                    "supportedIntroTypes": [
                      "CONTACT",
                      "FULFILLMENT",
                      "CALL",
                      "AVAILABILITY",
                      "ESTIMATION",
                      "INSTANT_BOOK_UPSELL",
                      "CONNECT_TO_BOOK"
                    ],
                    "searchBarQueryPk": null,
                    "isNearMePage": false,
                    "sourcePage": "FILTER_VIEW",
                    "sourceEvent": "INITIAL_LOAD",
                    "proListReferrer": "FRONT_DOOR_SEARCH"
                  }
                },
                "query": query
              };

              var data = JSON.stringify(queryRequest);

              let xhr = new XMLHttpRequest();
              xhr.open('POST', 'https://app.thumbtack.com/graphql');

              // Adding appropriate headers
              xhr.setRequestHeader('Content-Type', 'application/json');
              xhr.setRequestHeader('Accept', 'application/json');

              xhr.onload = function () {
                console.log(xhr.response);
                window.serviceData = JSON.parse(xhr.response);


              };

              xhr.send(data);
            }
          })

          window.DataRetrevetdByGQL = true;
        }

        // generating the service tiles from the GarphQl response data-------------------------------
        if (window.serviceData["data"] && !window.ServiceSevtionAdded) {
          document.querySelector("body").classList.add("TT-150")
          // changing the style of hero banner------------
          changeTopFormStyling()

          window.ServiceSevtionAdded = true;
          var serviceDiv = `<div class="tt-servicesTiles-container">
					<p>Narrow down your issue</p>
            		<div class="tt-servicesTiles">
                    	${generateServiceTiles()}
						
                	</div>
					
					</div>`;

          if (!document.querySelector(".tt-servicesTiles-container")) {
            document.querySelector("[class*='hero-header_filters']>div").insertAdjacentHTML("beforeend", serviceDiv)
          }

          if (serviceData["data"].proList.projectDetails.categorySelector.singleSelect.options.length > 6) {
            var seeMoreless = `<p class="tt-showMoreLess"><span class="tt-showAll">Show all services</span> <span class='tt-showFewer' style="display:none">Show fewer services</span><svg height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M14.646 6.764L9 13 3.311 6.725a1 1 0 011.342-1.482L9 10l4.285-4.699c.2-.187.435-.301.715-.301a1 1 0 011 1c0 .306-.151.537-.354.764z"></path></svg></p>`;
            if (!document.querySelector("tt-showMoreLess")) {
              document.querySelector(".tt-servicesTiles").insertAdjacentHTML("afterend", seeMoreless)
            }
          }
        }
      }

      //Event Handler-----------------------------------
      if (!window.eventListenerTT150) {
        window.eventListenerTT150 = true;
        // click on see more and see less-------------
        live(".tt-showMoreLess", "click", function () {
          document.querySelector(".tt-servicesTiles-container").classList.toggle("tt-showMoreTiles");
        })
      }
    }

    /* Initialise variation */
    var intervalTT150 = setInterval(function () {
      waitForElement("body", init);
    }, 50)

    setTimeout(function () {
      clearInterval(intervalTT150);
    }, 15000)

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();