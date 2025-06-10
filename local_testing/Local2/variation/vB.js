window.expLibraryDataQueue = window.expLibraryDataQueue || [];
window.expLibraryDataQueue.push({
  CRE_EXP_4: {
    enable_DEBUG: true,
    initOnce: false,
    localDevelopment: true,

    // Check and extract the level from the level title
    checkTextLevelTitle() {
      const $this = this;
      // Run when the element is available
      $this.runAt(".product-container .level-title", function () {
        var levelTitleElement = document.querySelector(".product-container .level-title");
        var textContent = levelTitleElement ? levelTitleElement.textContent : "";
        var level = $this.extractLevelFromText(textContent);
        $this.addAlertAndVideoContent(level);
        $this.addNewContentForProduct(level);
      });
    },

    // Extract level from the text content
    extractLevelFromText(textContent) {
      var match = textContent.match(/Level\s+(\d+)/);
      if (match && match[1]) {
        return match[1];
      }
      return "Unknown";
    },

    // Add class for Selected element
    addClassForSpecificElement() {
      const $this = this;
      const testName = $this.__testName;

      this.runAt(".product-container", function () {
        var parentElement = document.querySelector(".product-container");
        if (parentElement) parentElement.classList.add(`${testName}-margin-bottom`);
      });

      this.runAt(".product-details-section > .product-option h4", function () {
        // Select all h4 elements within the product options
        document.querySelectorAll(".product-details-section > .product-option h4").forEach((h4) => {
          const text = h4.textContent.trim();
          const optionDiv = h4.closest("div.product-option");

          if (!optionDiv) return;

          // Add classes based on the text content of the h4 element
          if (text.includes("Level")) optionDiv.classList.add(`${testName}-product-level`);
          if (text.includes("Letter")) optionDiv.classList.add(`${testName}-product-option-letter`);
          if (text.includes("Review")) optionDiv.classList.add(`${testName}-product-option-review`);
        });
      });

      this.live(`.${testName}-product-level.product-option .quantity-increase`, "click", () => {
        var quantityInput = document.querySelector(`.${testName}-product-level .quantity-number`);
        console.log(quantityInput);
        if (quantityInput && parseInt(quantityInput.value, 10) > 0) {
          [`.${testName}-product-option-letter`, `.${testName}-product-option-review`, `.${testName}-new-product-container`].forEach((selector) => {
            var el = document.querySelector(selector);
            console.log(el);
            if (el) el.classList.add(`${testName}-show`);
          });
          if (parentElement) parentElement.classList.remove(`${testName}-margin-bottom`);
        }
      });
    },

    // Add alert and video content dynamically based on level
    addAlertAndVideoContent(level) {
      const $this = this;
      const testName = $this.__testName;

      // Run when the Header element is available for Alert
      this.runAt(".product-container .level-title", function () {
        // Dynamically insert the level into the HTML string
        const alertHtml = `<div class="${testName}-alert-container">
              <div class="${testName}-alert-wrapper">
                <div class="${testName}-text-alert-content">Our programs are based on skill mastery, not age or grade—take the <a href="https://www.allaboutlearningpress.com/all-about-reading-level-4/">placement test</a> to see if your student is ready for level ${level}.</div>
              </div>
            </div>`;

        if (!document.querySelector(`.${testName}-alert-container`)) {
          document.querySelector(".product-container .level-title").insertAdjacentHTML("afterend", alertHtml);
        }

        const videoHeaderHtml = `<div class="${testName}-video-container">
          <div class="${testName}-video-wrapper">
            <div class="${testName}-text-video-content">What’s Included in Level ${level} Materials</div>
          </div>
        </div>`;

        if (!document.querySelector(`.${testName}-video-container`)) {
          document.querySelector(".dx-wide.beige .content-container .video-placeholder").insertAdjacentHTML("beforebegin", videoHeaderHtml);
        }
      });

      // Run when the Video element is available
      this.runAt(".dx-wide.beige .content-container .video-placeholder", function () {
        var videoHeaderHtml = `<div class="${testName}-video-container">
          <div class="${testName}-video-wrapper">
            <div class="${testName}-text-video-content">What’s Included in Level ${level} Materials</div>
          </div>
        </div>`;

        if (!document.querySelector(`.${testName}-video-container`)) {
          document.querySelector(".dx-wide.beige .content-container .video-placeholder").insertAdjacentHTML("beforebegin", videoHeaderHtml);
        }
        // Move this section to the top
        var wideBeigeElement = document.querySelector(".dx-wide.beige");
        var optionalProdsElement = document.querySelector(".product-container");

        if (wideBeigeElement && optionalProdsElement) {
          optionalProdsElement.insertAdjacentElement("afterend", wideBeigeElement);
        }
      });

      this.runAt("html body .product-details-main + .product-option a", function () {
        var levelTitle = document.querySelector("html body .product-details-main + .product-option a");
        if (levelTitle) {
          levelTitle.textContent = `Level ${level} Program Materials`;
        }
      })
      
      var getAlert = document.querySelector(`.${testName}-alert-container a`);
      if (window.location.href.includes("spelling")) {
        getAlert.href = "https://www.allaboutlearningpress.com/spelling-placement";
      } else if (window.location.href.includes("reading")) {
        getAlert.href = "https://www.allaboutlearningpress.com/reading-placement";
      }
    },

    addNewListingForProduct() {
      const $this = this;
      const testName = $this.__testName;

      this.runAt(".product-container .product-details-section .product-details-main + .product-option", function () {
        var sourceParagraph = document.querySelector(`html body.${testName} .product-details-main + .product-option p:not(.product-price)`);
        var dynamicListItemsHtml = "";

        function processItemText(itemTextContent) {
          var processedText = itemTextContent.trim();

          // Remove trailing period if any
          if (processedText.endsWith(".")) {
            processedText = processedText.slice(0, -1);
          }

          processedText = processedText.replace(/^and\s+/i, "");
          processedText = processedText.trim();

          // Rule: Handle quantity words
          var matchOne = processedText.match(/^(?:one|a|an)\s+(.+)/is);

          if (matchOne && matchOne[1]) {
            var rest = matchOne[1];
            processedText = rest.charAt(0).toUpperCase() + rest.slice(1).toLowerCase();
          } else {
            var matchMultiple = processedText.match(/^(two|three|four|five|six|seven|eight|nine|ten)\s+(.+)/is);
            if (matchMultiple && matchMultiple[1] && matchMultiple[2]) {
              var quantity = matchMultiple[1];
              var rest = matchMultiple[2];
              processedText = quantity.charAt(0).toUpperCase() + quantity.slice(1).toLowerCase() + " " + rest.toLowerCase();
            } else {
              if (processedText.length > 0) {
                processedText = processedText.charAt(0).toUpperCase() + processedText.slice(1).toLowerCase();
              }
            }
          }

          processedText = processedText.replace(/(\([^)]*\))/g, "<span>$1</span>—one per child");

          return processedText;
        }

        if (sourceParagraph) {
          var fullText = sourceParagraph.textContent.trim();
          var itemsString = "";

          var packageIncludesMarker = "Package includes:";
          var markerPosition = fullText.toLowerCase().indexOf(packageIncludesMarker.toLowerCase());

          if (markerPosition !== -1) {
            itemsString = fullText.substring(markerPosition + packageIncludesMarker.length).trim();
          } else {
            itemsString = fullText;
          }

          var splitRegex = /(?:,\s*|\s+and\s+)(?=(?:[^()]*\([^()]*\)[^()]*)*[^()]*$)/i;

          var items = itemsString
            .split(splitRegex)
            .map((item, index) => {
              var trimmedItem = item.trim();
              return trimmedItem;
            })
            .filter((item) => item !== "");

          if (items.length > 0) {
            items.forEach((item, index) => {
              var processedItemText = processItemText(item);
              dynamicListItemsHtml += `<div class="${testName}-listing-wrapper ${testName}-listing-wrapper-${index + 1}">
            <ul class="${testName}-listing-content-ui-items">
            <li class="${testName}-listing-item ${testName}-listing-item-${index + 1}">${processedItemText}</li></ul></div>`;
            });
          }
        }

        var addNewListingHtml = `<div class="${testName}-listing-container">
          <div class="${testName}-listing-wrapper">
              <div class="${testName}-listing-main">
                  <div class="${testName}-listing-content-header">Package includes:</div>
                  <div class="${testName}-listing-content-items">
                      ${dynamicListItemsHtml}
                  </div>
                  <div class="${testName}-listing-content-subtext">
                      <span class="${testName}-listing-content-subtext-bold">Want to see what’s inside?</span> Watch the video below or visit our <a href="https://www.allaboutlearningpress.com/shop-all-products/">All Products page</a> for a closer look.
                  </div>
              </div>
          </div>
      </div>`;

        if (!document.querySelector(`.${testName}-listing-container`)) {
          var insertTarget = document.querySelector(`.${testName}-product-level .product-price + p`);
          if (insertTarget) {
            insertTarget.insertAdjacentHTML("beforebegin", addNewListingHtml);
          } else {
            console.error("Target element for inserting new listing container not found.");
          }
        }
      });
    },
    addNewContentForProduct() {
      const $this = this;
      const testName = $this.__testName;

      // Default text based on URL
      var text = "";
      if (location.href.includes("spelling")) {
        text = "Spelling";
      } else if (location.href.includes("reading")) {
        text = "Reading";
      }

      // Function to add the content once level is available
      function addContentWithLevel(level) {
        const newIncludeText = level ? level : "Unknown"; // Default to "Unknown" if level is undefined

        $this.runAt(".product-container .product-details-section .product-details-main + .product-option", function () {
          var newIncludeTextHtml = `
            <div class="${testName}-new-include-container">
              <div class="${testName}-new-include">
                <div class="${testName}-new-include-text-content">
                  Includes everything you need to teach Level ${newIncludeText} 
                  <span class="${testName}-new-include-bold">${text}</span>, 
                  including a reusable teacher’s manual and readers.
                </div>
              </div>
            </div>`;

          var textNewContent = document.querySelector(".product-details-section > .product-details-main + .product-option h4 + .product-price");
          if (!document.querySelector(`.${testName}-new-include-container`)) {
            textNewContent.insertAdjacentHTML("afterend", newIncludeTextHtml);
          }
        });

        // Adding additional new product content
        $this.runAt(".product-container .product-details-section .product-details-main + .product-option + .faq-section", function () {
          var newContentProduct = `
            <div class="${testName}-new-product-container">
              <div class="${testName}-new-product-wrapper">
                <div class="${testName}-new-product-content">
                  <div class="${testName}-new-product-content-header">You’ll also need these one-time resources...</div>
                  <div class="${testName}-new-product-content-subheader">
                    These tools are used across all levels of the All About <span>${text}</span> program. 
                    If you’ve completed a previous level, you probably already have them—no need to repurchase.
                  </div>
                </div>
              </div>
            </div>`;

          var addElement = document.querySelector(".product-container .product-details-section .product-details-main + .product-option + .faq-section");
          if (!document.querySelector(`.${testName}-new-product-container`)) {
            addElement.insertAdjacentHTML("beforebegin", newContentProduct);
          }
        });
      }

      // Check for the level and wait for it to load
      $this.runAt(".product-container .level-title", function () {
        var levelTitleElement = document.querySelector(".product-container .level-title");
        var textContent = levelTitleElement ? levelTitleElement.textContent : "";
        var level = $this.extractLevelFromText(textContent);

        if (level !== "Unknown") {
          addContentWithLevel(level);
        } else {
          // If level is still "Unknown", keep checking every second
          setTimeout(() => {
            $this.addNewContentForProduct(); // Retry until level is available
          }, 1000); // Retry after 1 second
        }
      });
    },
    addContentForProduct() {
      const $this = this;
      const testName = $this.__testName;

      this.runAt(`.product-option.${testName}-product-option-review p:not(.product-price)`, function () {
        var newReviewContentHtml = `<div class="${testName}-review-letter-product-container ${testName}-review-product-container">
      <div class="${testName}-review-product-wrapper">
        <div class="${testName}-review-product-content ${testName}-product-text-content">
          <span class="${testName}-product-content-bold">One-time purchase per student.</span> Helps organize your child’s flashcards for daily review and long-term progress. Includes tabbed dividers and foam spacers to separate mastered and review cards.
        </div>
      </div>
    </div>`;

        var newContentProduct = document.querySelector(`.product-option.${testName}-product-option-review p:not(.product-price)`);

        if (!document.querySelector(`.${testName}-review-product-container`)) {
          newContentProduct.insertAdjacentHTML("beforebegin", newReviewContentHtml);
        }
      });

      this.runAt(`.product-option.${testName}-product-option-letter p:not(.product-price)`, function () {
        var newReviewContentHtml = `<div class="${testName}-review-letter-product-container ${testName}-letter-product-container">
        <div class="${testName}-letter-product-wrapper">
          <div class="${testName}-letter-product-content ${testName}-product-text-content">
            <span class="${testName}-product-content-bold">One-time purchase per household.</span> Includes every tile needed, along with pre-cut magnets and two storage bags. Note that you can use the physical tiles, the <span class="${testName}-letter-product-content-letter">Letter Tiles App</span>, or a combination of both.
          </div>
        </div>
      </div>`;

        var newContentProduct = document.querySelector(`.product-option.${testName}-product-option-letter p:not(.product-price)`);

        if (!document.querySelector(`.${testName}-letter-product-container`)) {
          newContentProduct.insertAdjacentHTML("beforebegin", newReviewContentHtml);
        }
      });

      this.live(`.${testName}-letter-product-content-letter`, "click", function () {
        var targetElement = document.querySelector(".app-container.dx-section");
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });

      var productOptionLetter = document.querySelector(`.${testName}-product-option-letter`);
      var containerSection = document.querySelector(`.${testName}-new-product-container`);

      if (productOptionLetter && containerSection) {
        // Move the element to the top of the .faq section
        containerSection.insertAdjacentElement("afterend", productOptionLetter);
      }
    },
    techMultipleSectionFunction() {
      var getElementP = document.querySelector(".dx-wide.blue .text-content p");
      var level = "";

      if (location.href.includes("spelling")) {
        level = "Spelling";
      } else if (location.href.includes("reading")) {
        level = "Reading";
      }

      if (getElementP && level) {
        getElementP.textContent = `All About ${level} makes it easy to teach multiple students! If you're teaching more than one child, you'll need to purchase an additional Student Packet and Reading Review Box for each child.`;
      }
    },

    // Initialize the experiment
    init() {
      const $this = this;

      $this.addClassForSpecificElement();
      $this.addNewListingForProduct();
      $this.addNewContentForProduct();
      $this.addContentForProduct();
      $this.techMultipleSectionFunction();

      $this.checkTextLevelTitle();
    },
  },
});