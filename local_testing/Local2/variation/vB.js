(function () {
  try {
    /* main variables */
    var debug = 1;
    var variation_name = "cre-t-brandNameInCopyDeployment";
    let Content = `<div class='cre-t-brandNameInCopy'><p>Other providers we evaluated but which did not make our top 10 include: AAA, Allstate, Banfield, Chewy, Costco, Doggo, Farmers, Hartville, Healthy Paws, Nationwide, Pets Best, PetPartners, Progressive, Rainwalk, Spokk, Spot, State Farm, USAA and Wishbone.</p></div>`

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

    function init() {
      document.querySelector('body').classList.add(variation_name);
     
      waitForElement('.oxy-tab-content  [data-unique="best-overall"]', function () {
        document.querySelectorAll('.oxy-tab-content ').forEach(function (tabContent) {
          if (!tabContent.querySelector('.cre-t-brandNameInCopy')) {
            tabContent.querySelector('[data-unique="best-overall"]').insertAdjacentHTML('afterend', Content)
          }
        })
      })
    }

    if (window.location.search.includes('adgroup=insurer')) {
      waitForElement('body', init)
    }

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();