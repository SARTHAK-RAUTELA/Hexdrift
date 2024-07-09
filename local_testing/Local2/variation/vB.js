(function () {
  try {
      /* main variables */
      var debug = 0;
      var variation_name = "TT-148";
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
      function addLiveEventListener(selector, event, callback, context) {
          // Helper for enabling IE 8 event bindings
          function addEvent(el, type, handler) {
              if (el.attachEvent) el.attachEvent('on' + type, handler);
              else el.addEventListener(type, handler);
          }
          // Matches polyfill
          this.Element && function (ElementPrototype) {
              ElementPrototype.matches = ElementPrototype.matches ||
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
          }(Element.prototype);
          // Live binding helper using matchesSelector
          function live(selector, event, callback, context) {
              addEvent(context || document, event, function (e) {
                  var found, el = e.target || e.srcElement;
                  while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
                  if (found) callback.call(el, e);
              });
          }
          live(selector, event, callback, context);
      }

      // Define the HTML content in a variable
      var newContent = `
           <div class="th_homepage-heroheading">
               <ul class="th_homepage-hero_scroll">
                 
                   <li class="item" data-job="Hvac"> <span>HVAC</span>jobs</li>
                   <li class="item" data-job="landscaping"> <span>landscaping</span>jobs</li>
                   <li class="item" data-job="plumbing"> <span>plumbing</span>jobs</li>
                   <li class="item" data-job="home-service"> <span>home service</span>jobs</li>
                   <li class="item" data-job="cleaning"> <span>cleaning</span>jobs</li>
               </ul>
           </div>
           `;

      var newImages = `
           <div class="th_slideimages">
               <ul class="th_slideimages_scroll desktop">
                   <li class="item" data-job="Hvac"><img src="https://cdn.optimizely.com/img/20611073899/27936ea247cf4c01ac9ad61b312aa691.png"> <img src="https://cdn.optimizely.com/img/20611073899/bcd6479914264fb5bab52b33f94efdab.png"></li>
                   <li class="item" data-job="landscaping"><img src="https://cdn.optimizely.com/img/20611073899/94f541d3c3e84d2cb6cd3840f47e2939.png"><img src="https://cdn.optimizely.com/img/20611073899/bccd93877ebf4230afad82b4bb381a33.png"></li>
                   <li class="item" data-job="plumbing"><img src="https://cdn.optimizely.com/img/20611073899/9c7bae50dc854db9a0b8419e40d42e29.png"><img src="https://cdn.optimizely.com/img/20611073899/35480194b3864bd29e0200bfdde13198.png"></li>
                   <li class="item" data-job="home-service"><img src="https://cdn.optimizely.com/img/20611073899/4c250b008d734d5cbf9211af884aadf6.png"><img src="https://cdn.optimizely.com/img/20611073899/3e26b60e717946a785030cd9b01b9465.png"></li>
                   <li class="item" data-job="cleaning"><img src="https://cdn.optimizely.com/img/20611073899/bf5a4c3320cc4e4083e5320778472bab.png"><img src="https://cdn.optimizely.com/img/20611073899/9260b982c844459696183d0ec8724065.png"></li>
               </ul>
              
           </div>
           `;
      /* Variation Init */
      function init() {
          // Select the h1 element with the class 'hero_heroTitle__a8DzL'
          let heroTitleElement = document.querySelector('[class*="hero_heroInnerOffsetRight"] [class*="hero_heroTitle"]');

          // Function to replace the entire content of the h1 element
          function replaceHTMLContent(element, newHTML) {
              element.innerHTML = newHTML;
          }

          // Replace the HTML content of the h1 element
          replaceHTMLContent(heroTitleElement, newContent);

          // Append new images below the current hero section

          if (!document.querySelector(".th_slideimages")){
              document.querySelector('[class*="hero_heroInnerContainer"] [class*="hero_heroInnerOffsetLeft"]').innerHTML += newImages;
          }
          


          const textItems = document.querySelectorAll('.th_homepage-hero_scroll .item');
          const imageItems = document.querySelectorAll('.th_slideimages_scroll .item');
          let currentIndex = 0;

          function rotateItems() {
              // Remove data-job-active attribute from all text and image items
              textItems.forEach(item => item.removeAttribute('data-job-active'));
              imageItems.forEach(item => item.removeAttribute('data-job-active'));

              // Add data-job-active attribute to current text and image item
              const currentTextItem = textItems[currentIndex];
              const currentImageItem = imageItems[currentIndex];

              currentTextItem.setAttribute('data-job-active', "true");
              currentImageItem.setAttribute('data-job-active', "true");

              // Set body data-job attribute
              document.body.setAttribute('data-job', currentTextItem.getAttribute('data-job'));

              // Increment index and wrap around if necessary
              currentIndex = (currentIndex + 1) % textItems.length;
          }

          // Initial call to set the first item as active
          rotateItems();

          // Function to recursively extract visible text content from nodes
          function extractVisibleText(node) {
              let text = '';
              if (node.nodeType === Node.TEXT_NODE) {
                  text = node.textContent.trim(); // Get text content and trim whitespace
              } else if (node.nodeType === Node.COMMENT_NODE) {
                  text = ''; // Ignore comment nodes
              } else if (node.nodeType === Node.ELEMENT_NODE) {
                  let children = node.childNodes;
                  for (let i = 0; i < children.length; i++) {
                      text += extractVisibleText(children[i]); // Recursively extract text from child nodes
                  }
              }
              return text;
          }

          // Get the element under [class*="hero_heroInnerOffsetLeft"] h1
          let h1Element = document.querySelector('[class*="hero_heroInnerOffsetLeft"] h1');

          // Initialize variable to store text after <br>
          let textAfterBreak = '';

          // If h1Element exists, split innerHTML by <br> and extract text nodes
          if (h1Element) {
              let parts = h1Element.innerHTML.split('<br>');
              if (parts.length > 1) {
                  let secondPart = parts[1].trim(); // Extract text after <br> and trim whitespace
                  // Parse the second part into a temporary element to filter out comments
                  let tempElement = document.createElement('div');
                  tempElement.innerHTML = secondPart;
                  textAfterBreak = extractVisibleText(tempElement);
              }
          }

          // Create a new span element with the extracted text
          let newSpan = document.createElement('span');
          newSpan.textContent = textAfterBreak;

          // Select the .th_homepage-heroheading element
          let homepageHeroHeading = document.querySelector('.th_homepage-hero_scroll');

          // Insert the new span element after the .th_homepage-heroheading element
          homepageHeroHeading.insertAdjacentElement('afterend', newSpan);

          // Check if the span element following .th_homepage-hero_scroll is empty and add content if it is
          function addContentIfEmpty(selector, content) {
              // Find the span element by its selector
              var spanElement = document.querySelector(selector);

              // Check if the span element exists and is empty
              if (spanElement && spanElement.textContent.trim() === '') {
                  // Add the specified content inside the span element
                  spanElement.textContent = content;
              }
          }

          // Usage example: Check if the span element with the specific selector is empty
          addContentIfEmpty('.th_homepage-hero_scroll + span', 'your area.');

          function updateInnerHTML() {
              if (window.innerWidth > 768) {
                  document.querySelector('[class*="hero_heroInnerOffsetRight"] h1 + p').innerHTML = '<p class="Type_text1__aaKHf dn m_db mb4 pr6 black-300"> <span class="b">30,000+</span>  homeowners and other customers on Thumbtack per day.</p>';

              }
          }

          // Run the function when the page loads
          updateInnerHTML();

          // Optionally, you can also run the function when the window is resized
          window.addEventListener('resize', updateInnerHTML);


          // Rotate items every 3 seconds.................................................................
          setInterval(rotateItems, 3000);
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
              waitForElement('[class*="hero_heroInnerContainer"] [class*="hero_heroInnerOffsetLeft"]', init, 50, 15000);
          }, 50);
          setTimeout(function () {
              clearInterval(test144Interval);
          }, 3000);
          const observer = new PerformanceObserver(thumbtackTest144);
          observer.observe({ entryTypes: ["mark"] });
      } else {
          waitForElement('[class*="hero_heroInnerContainer"] [class*="hero_heroInnerOffsetLeft"]', init, 50, 15000);
      }
  } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
