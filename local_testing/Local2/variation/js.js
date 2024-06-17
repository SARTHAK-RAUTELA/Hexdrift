(() => {
  var __defProp = Object.defineProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  // lib/bm-js/lib/index.js
  var waitFor = /* @__PURE__ */ __name((check, invoke, poll) => {
      if (check()) {
          invoke();
          return;
      }
      let polling = setInterval(() => {
          try {
              if (check()) {
                  invoke();
                  clearInterval(polling);
                  polling = null;
              }
          } catch (e) {
              console.info("listener not processed");
          }
      }, poll.interval);
      setTimeout(() => {
          if (!polling)
              return;
          clearInterval(polling);
          console.info("render listener timeout", poll);
          window.evolvRenderTimeout = {
              msg: "evolv render listener timeout",
              poll
          };
      }, poll.duration);
  }, "waitFor");
  var $refs = /* @__PURE__ */ __name((selector) => {
      if (!selector) {
          console.error(`Invalid selector!`);
          return;
      }
      const els = document.querySelectorAll(selector);
      if (!els || !els.length) {
          console.error(`Selector ${selector} does not exist in DOM!`);
          return;
      }
      return els;
  }, "$refs");
  var $addClass = /* @__PURE__ */ __name((selector, classes) => {
      if (!classes) {
          console.error("Atleast one class is required!");
          return;
      }
      const elements = $refs(selector);
      if (!elements)
          return;
      if (Array.isArray(classes)) {
          elements.forEach((el) => {
              el.classList.add(...classes);
          });
          return;
      }
      if (typeof classes === "string") {
          elements.forEach((el) => {
              el.classList.add(classes);
          });
      }
  }, "$addClass");
  var $live = /* @__PURE__ */ __name((selector, event, callback, context) => {
      const addEvent = /* @__PURE__ */ __name((el, type, handler) => {
          if (el.attachEvent) {
              el.attachEvent("on" + type, handler);
          } else {
              el.addEventListener(type, handler);
          }
      }, "addEvent");
      if (Element.prototype.matches === void 0) {
          Element.prototype.matches = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.msMatchesSelector || function (selector2) {
              let node = this;
              let nodes = (node.parentNode || node.document).querySelectorAll(
                  selector2
              );
              let i = -1;
              while (nodes[++i] && nodes[i] != node)
                  ;
              return !!nodes[i];
          };
      }
      const liveBinding = /* @__PURE__ */ __name((selector2, event2, callback2, context2) => {
          addEvent(context2 || document, event2, function (e) {
              let found;
              let el = e.target || e.srcElement;
              while (el && el.matches && el !== context2 && !(found = el.matches(selector2)))
                  el = el.parentElement;
              if (found)
                  callback2.call(el, e);
          });
      }, "liveBinding");
      liveBinding(selector, event, callback, context);
  }, "$live");
  // src/Thumbtack/TT-130-Subcopy-Pro-Info/variation1/index.js
  function extractNumbersWithPlus(inputString) {
      var pattern = /(\d+\+|\d+)/g;
      var matches = inputString.match(pattern);
      return matches || [];
  }
  __name(extractNumbersWithPlus, "extractNumbersWithPlus");
  function extractServices(profession_content) {
      var matches = profession_content.match(/\d+\s+(.*?)\s+near/);
      var result = matches ? matches[1] : null;
      return result;
  }
  __name(extractServices, "extractServices");
  function extractLocation(inputString) {
      const match = inputString.match(/near\s+(.+)/i);
      if (match && match[1]) {
          return match[1].trim();
      } else {
          return null;
      }
  }
  __name(extractLocation, "extractLocation");
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
  function removeLastS(str) {
      // Find the index of the last 's'
      let lastIndex = str.lastIndexOf('s');
      // If 's' is found, remove it; otherwise, return the original string
      if (lastIndex !== -1) {
          return str.slice(0, lastIndex) + str.slice(lastIndex + 1);
      }
      return str;
  }
  __name(extractWordsBeforeNear, "extractWordsBeforeNear");
  // Test 145 changes-------------------------
  var interval = setInterval(function () {
      $addClass("body", "Thumbtack-147");
      waitFor(
          // eslint-disable-next-line no-unneeded-ternary
          () => document.querySelector(`div[class*="hero-header_filters"] h2`) ? true : false,
          () => {
              var number_content = "";
              // If pill is avaiable on the page---------------------
              if (document.querySelector('div[class*="hero-header_filters"] h2 + div button')) {
                  number_content = document.querySelector(`div[class*="hero-header_filters"] h2 + div button`).textContent;
                  var profession_content = document.querySelector(`h2#pro_list_header span`).textContent;
                  // console.log(number_content);
                  var result_number = extractNumbersWithPlus(number_content);
                  var profession_result = extractServices(profession_content);
                  var loc = extractLocation(profession_content);
                  if (profession_result == null) {
                      profession_result = extractWordsBeforeNear(profession_content);
                  }
                  var lowercaseProfessionResult = profession_result.toLowerCase();
                  // console.log(profession_result, "profession_result")
                  var count = extractNumberFromString(document.querySelector(`div[class*="hero-header_filters"] h2 + div button`).textContent)
                  // console.log(count, "count")
                  // if (count == 1) {
                  //     lowercaseProfessionResult = removeLastS(lowercaseProfessionResult);
                  // }
                  const searchString = "https://www.thumbtack.com/k/";
                  if (window.location.href.startsWith(searchString)) {
                      document.querySelector(`[class*="hero-header_filters"] [class*="Type_title3"]`).textContent = "Check out   " + result_number + " " + lowercaseProfessionResult + " near you";
                  }
                  else {
                      if(window.innerWidth < 767){
                          document.querySelector(`[class*="hero-header_filters"] [class*="Type_title3"]`).innerHTML =
                              "Check out " +
                              result_number +
                              " " +
                              lowercaseProfessionResult +
                              " <span> near " +
                              loc +
                              "</span>";    
                      }else{
                          document.querySelector(`[class*="hero-header_filters"] [class*="Type_title3"]`).innerHTML =
                              "Check out " +
                              result_number +
                              " " +
                              lowercaseProfessionResult +
                              " near  <span>" +
                              loc +
                              "</span>";
                      }
                      
                  }
                  if (document.querySelector('[class*="hero-header_rootFlex"]>[class*=hero-header_heroHeaderExtendedHeight] picture+div h1')) {
                      document.querySelector('[class*="hero-header_rootFlex"]>[class*=hero-header_heroHeaderExtendedHeight] picture+div h1').innerHTML =
                          "Check out " +
                          result_number +
                          " " +
                          lowercaseProfessionResult +
                          " <span>near</span> <span>" +
                          loc +
                          "</span>";
                  }
                  if (document.querySelector('[class*="hero-header_heroHeaderHeight"] [class*="hero-header_flexHeaderContentTitle"]')) {
                      document.querySelector('[class*="hero-header_heroHeaderHeight"] [class*="hero-header_flexHeaderContentTitle"]').textContent = "Check out   " + result_number + " " + lowercaseProfessionResult + " near you";
                  }
              } else {
                  number_content = "";
                  var profession_content = document.querySelector(`h2#pro_list_header span`).textContent;
                  // console.log(number_content);
                  // var result_number = extractNumbersWithPlus(number_content);
                  var profession_result = extractServices(profession_content);
                  var loc = extractLocation(profession_content);
                  if (profession_result == null) {
                      profession_result = extractWordsBeforeNear(profession_content);
                  }
                  var lowercaseProfessionResult = profession_result.toLowerCase();
                  // console.log(profession_result, "profession_result")
                  // var count = extractNumberFromString(document.querySelector(`div[class*="hero-header_filters"] h2 + div button`).textContent)
                  // console.log(count, "count")
                  // if (count == 1) {
                  lowercaseProfessionResult = removeLastS(lowercaseProfessionResult);
                  // }
                  const searchString = "https://www.thumbtack.com/k/";
                  if (window.location.href.startsWith(searchString)) {
                      document.querySelector(`[class*="hero-header_filters"] [class*="Type_title3"]`).textContent = "Check out   " + lowercaseProfessionResult + " near you";
                  }
                  else {
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
              }
          },
          {
              interval: 50,
              duration: 15e3
          }
      );
  }, 500);
  setTimeout(function () {
      clearInterval(interval);
  }, 8e3);
  // Test 138 changes---------------------------
  document.addEventListener("readystatechange", (event) => {
      if (document.readyState === "complete") {
          // console.log("ready state complete")
          document.querySelector("body").classList.add("tt-removefilter-147")
          // $addClass("body", "tt-removefilter");
          waitFor(
              () => document.querySelector("[class*=pro-list-results-front-door_loadMoreSection]>div>div>a,.m_absolute .bg-white form > div:nth-child(2) [aria-label='Select a service']") ? true : false,
              () => {
                  var isCloneChanges = false;
                  var dropdown = document.querySelector('[class*=Dropdown_select][aria-label="Select a service"]');
                  if (dropdown) {
                      var e = new Event("change", { bubbles: true });
                      var randomIndex = Math.floor(Math.random() * (dropdown.options.length - 1)) + 1;
                      dropdown.value = dropdown.options[randomIndex].value;
                      dropdown.dispatchEvent(e);
                  }
                  var urlElement = document.querySelector("[class*=pro-list-results-front-door_loadMoreSection]>div>div>a");
                  if (urlElement) {
                      var url = urlElement.getAttribute("href");
                      var pattern = /(.+zip_code=\d+)/;
                      let match = url.match(pattern);
                      if (match) {
                          let extractedPart = match[1];
                          var completeURL = "https://www.thumbtack.com" + extractedPart;
                          $live('.m_absolute .bg-white form [data-test="hero-filters-cta"] span', "click", function (event2) {
                              if (!isCloneChanges) {
                                  event2.preventDefault();
                                  if (completeURL) {
                                      window.location.href = completeURL;
                                  }
                              }
                          });
                      }
                  } else {
                      var keyword_pk = window.__NEXT_DATA__.props.pageProps.frontDoorPage.heroSection.filterSubsection.cta.keywordPk;
                      var zipCodeInput = document.getElementById("zip-code");
                      var zipCodeValue = zipCodeInput.value;
                      //   console.log(keyword_pk);
                      var dynamicURL = `https://www.thumbtack.com/instant-results/?keyword_pk=${keyword_pk}&zip_code=${zipCodeValue}`;
                      //   console.log(dynamicURL);
                      $live('.m_absolute .bg-white form [data-test="hero-filters-cta"] span', "click", function (event2) {
                          if (!isCloneChanges) {
                              event2.preventDefault();
                              if (dynamicURL) {
                                  window.location.href = dynamicURL;
                              }
                          }
                      });
                  }
                  var originalElement = document.querySelector('.m_absolute .bg-white form > div:nth-child(2) [aria-label="Select a service"]');
                  if (originalElement) {
                      var originalParentElement = document.querySelector(".m_absolute .bg-white form > div:nth-child(2)");
                      var clonedElement = originalParentElement.cloneNode(true);
                      clonedElement.classList.add("tt-138-select");
                      originalParentElement.style.display = "none";
                      document.querySelector(".m_absolute .bg-white form > div:nth-child(1)").insertAdjacentElement("afterend", clonedElement);
                      var clonedSelect = clonedElement.querySelector("select");
                      clonedSelect.addEventListener("change", function () {
                          var originalElement2 = document.querySelector(".m_absolute .bg-white form > div:nth-child(3)");
                          var originalSelect = originalElement2.querySelector("select");
                          isCloneChanges = true;
                          originalSelect.value = this.value;
                          originalSelect.dispatchEvent(new Event("change", { bubbles: true }));
                      });
                  }
              },
              {
                  interval: 50,
                  duration: 15e3
              }
          );
      }
  });
})();
