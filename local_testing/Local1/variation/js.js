(function () {
  try {
      /* main variables */
      var debug = 1;
      var variation_name = "SEA211-SWO";

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

      // function for pushing the Optimixely events----------
      function pushOptimizelyEvents(event) {
          window['optimizely'] = window['optimizely'] || [];
          window['optimizely'].push({
              type: "event",
              eventName: event,
              tags: {
                  revenue: 0, // Optional in cents as integer (500 == $5.00)
                  value: 0.00 // Optional as float
              }
          });
      }

      /* Variation Init */
      function init() {

          // Order conformation wrapper on Thank you page------------------------------------
          var orderConformationWrapper = document.querySelector(".order-confirmation__wrapper");

          // getting the transaction object--------------------------------------------------
          var orderJSON = orderConformationWrapper.getAttribute("data-google-enhanced-transaction");

          // Parsing the Stringfy JSON object-------------------
          if (orderJSON) {
              orderJSON = JSON.parse(orderJSON);
              orderJSON.ecommerce.purchase.products.forEach(function (product) {
                  if (product.name == "Single-Day Ticket") {
                      pushOptimizelyEvents('SEA211_Product_sales_of_Single-Day_Ticket_product')
                  }
              })
          }
      }

      /* Initialise variation */
      // Only for /checkout/confirmation Page-------------------------
      if (window.location.href.includes("/checkout/confirmation")) {
          waitForElement(".order-confirmation__wrapper", init, 50, 15000);
      }
  } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
  }
})();