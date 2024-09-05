 // Test 138 changes---------------------------
 document.addEventListener("readystatechange", (event) => {
  if (document.readyState === "complete") {
      // console.log("ready state complete")
      document.querySelector("body").classList.add("tt-removefilter")
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

