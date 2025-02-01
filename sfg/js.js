(function () {
  try {
      var debug = 0;
      var variation_name = "TT-158";

      var uniqueDataObject = {
          "/k/handyman/near-me": {
              "13500042": {
                  "Header": "Check out [#] handyman services near you",
                  "ProListTitle": "Top [#] handyman services near you"
              },
              "44150212": {
                  "Header": "Check out [#] handyman services near you",
                  "ProListTitle": "Top [#] handyman services near you"
              }
          }
      };

      var objectData = {
          "/k/commercial-cleaning/near-me": {
              "602600312": {
                  "Header": "Find commercial cleaning services near you",
                  "ProListTitle": "Top 10 commercial cleaning services near you"
              }
          }
      };

      function replacePlaceholder(text, extractedNumber) {
          return extractedNumber ? text.replace("[#]", extractedNumber) : text;
      }

      function updateTextContent() {
          var url = window.location.href;
          var pagePath = window.location.pathname;
          var match = url.match(/kwd-(\d+)-/);

          if (match && match[1]) {
              var kwId = match[1];

              if (objectData[pagePath] && objectData[pagePath][kwId]) {
                  var headerTitle = objectData[pagePath][kwId].Header;
                  var proListTitle = objectData[pagePath][kwId].ProListTitle;
                  var isMobile = window.innerWidth <= 768;
                  var headerElement = isMobile ? document.querySelector('[class*="hero-header_flexHeaderContentTitle"]') : document.querySelector('[class*="hero-header_filters"] h2');
                  var spanElement = document.querySelector('#pro_list_header > span');
                  var firstChildNode = spanElement ? spanElement.childNodes[0] : null;
                  if (headerElement) headerElement.innerHTML = headerTitle;
                  if (firstChildNode && firstChildNode.nodeType === Node.TEXT_NODE) firstChildNode.nodeValue = proListTitle;
              } else if (uniqueDataObject[pagePath] && uniqueDataObject[pagePath][kwId]) {
                  var extractedNumberHeader = null;
                  var extractedNumberProList = null;

                  var spanElementHeader = document.querySelector('.Type_title3___voqu.Type_title3___voqu span');
                  if (spanElementHeader) {
                      var numberMatchHeader = spanElementHeader.textContent.trim().match(/\d+/);
                      if (numberMatchHeader) extractedNumberHeader = numberMatchHeader[0];
                  }

                  var spanElementProList = document.querySelector('#pro_list_header > span');
                  if (spanElementProList) {
                      var numberMatchProList = spanElementProList.textContent.trim().match(/\d+/);
                      if (numberMatchProList) extractedNumberProList = numberMatchProList[0];
                  }

                  var headerElement = document.querySelector('[class*="hero-header_flexHeaderContentTitle"]') ||
                      document.querySelector('[class*="hero-header_filters"] h2');
                  if (headerElement && extractedNumberHeader) {
                      headerElement.innerHTML = replacePlaceholder(uniqueDataObject[pagePath][kwId].Header, extractedNumberHeader);
                  }
                  if (spanElementProList && extractedNumberProList) {
                      var firstChildNode = spanElementProList.childNodes[0];
                      if (firstChildNode && firstChildNode.nodeType === Node.TEXT_NODE) {
                          firstChildNode.nodeValue = replacePlaceholder(uniqueDataObject[pagePath][kwId].ProListTitle, extractedNumberProList);
                      }
                  }
              }
          }
      }

      var testInterval = setInterval(updateTextContent, 100);
      setTimeout(function () {
          clearInterval(testInterval);
      }, 5000);
  } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
  }
})();