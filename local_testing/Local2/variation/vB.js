(function () {
    try {
      /* main variables */
      var debug = 1;
      var variation_name = "cre-t-29";
      /* all Pure helper functions */
  
      function waitForElement(selector, trigger, delayInterval, delayTimeout) {
        var interval = setInterval(function () {
          if (document.querySelector(selector)) {
            clearInterval(interval);
            trigger();
          }
        }, delayInterval);
        setTimeout(function () {
          clearInterval(interval);
        }, delayTimeout);
      }
  
      function feesPage() {
        document.body.classList.add("cre-t-29-fees");
        waitForElement("h1.elementor-heading-title.elementor-size-default", function () {
          var membershipTitle = document.querySelector("h1.elementor-heading-title.elementor-size-default");
          if (membershipTitle.closest("section")) {
            membershipTitle.closest("section").classList.add("cre_t_29_membership_section");
          }
        }, 25, 25000);
  
        waitForElement('.cre_t_29_membership_section [data-element_type="container"] > .e-con-inner', function () {
          document.querySelector('.cre_t_29_membership_section [data-element_type="container"] > .e-con-inner').classList.add("cre-t-29-orange-bg");
        }, 25, 25000);
      }
  
      function updateHeader() {
        waitForElement('header [data-widget_type="button.default"] [href="https://www.gendergp.com/existing-members/"]', function () {
          var button = document.querySelector('header [data-widget_type="button.default"] [href="https://www.gendergp.com/existing-members/"]');
          var buttonContainer = button.closest('header > .e-con-inner  .e-con-inner > .e-con-full.e-flex.e-con.e-child[data-element_type="container"]');
  
          if (buttonContainer) {
            buttonContainer.classList.add("cre_t_29_header_button_container");
          }
        }, 25, 25000);
      }
  
      function addBackground() {
        waitForElement('[data-elementor-type="header"]', function () {
          var bgDiv = '<div class="cre-t-29-hero-bg"></div>';
          if (!document.querySelector(".cre-t-29-hero-bg")) {
            document.querySelector('[data-elementor-type="header"]').insertAdjacentHTML("beforebegin", bgDiv);
          }
        }, 25, 25000);
      }
  
      function init() {
        document.body.classList.add(variation_name);
        updateHeader();
        addBackground();
        if (window.location.pathname === "/fees/") {
          feesPage();
        } else if (window.location.pathname === "/accessing-gender-affirming-care/") {
          document.body.classList.add("cre-t-29-care");
        }
      }
  
      waitForElement('[data-elementor-type="header"]', init, 25, 25000);
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();