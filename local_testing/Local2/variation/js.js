//Cro Mode (QA Test cookie)
(function() {

    // Utility Functions
    function setCookie(name, value, options = {}) {
        let {
            duration,
            domain,
            sameSite = 'Lax'
        } = options;
        domain = domain || window.location.hostname.split('.').slice(-2).join('.');
        let expires = '';
        if (duration) {
            let date = new Date();
            date.setTime(date.getTime() + (duration * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = `${name}=${value}; Path=/; Domain=${domain}; SameSite=${sameSite}${expires}`;
    }

    function getCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Extract QA mode logic
    function enableQAMode(mode) {
        if (mode === 'qa') {
            console.log(`CRO Mode enabled: ${mode}`);
            setCookie('cro_mode', mode, {
                duration: 1
            });
        } else {
            //console.log('CRO Mode disabled');
            setCookie('cro_mode', '', {
                duration: -1
            });
        }
    }

    // Initialize CRO Mode
    function initCROMode() {
        const urlParams = new URLSearchParams(window.location.search);
        let mode = urlParams.get('cro_mode') || getCookie('cro_mode');
        if (mode === 'qa') {
            enableQAMode(mode);
            console.log("QA Mode Active");
            // Place any QA mode specific logic here
        } else {
            enableQAMode('');
        }
    }

    initCROMode();
})();



// The code below is added for the Convert Experiments experiments and manual location trigger
(function() {
  try {
      var debug = 1;

      /**
       * setup Team
       */
      // LIBRARY FUNCTIONS
      var lib = {

          waitForElement(selector, trigger, delayInterval, delayTimeout) {
              var interval = setInterval(function() {
                  if (
                      document &&
                      document.querySelector(selector) &&
                      document.querySelectorAll(selector).length > 0
                  ) {
                      clearInterval(interval);
                      trigger();
                  }
              }, delayInterval);
              setTimeout(function() {
                  clearInterval(interval);
              }, delayTimeout);
          },

      };

      lib.waitForElement('body', function() {
        // The following code will help in developing the test.
        if (document && document.querySelector && document.querySelector('body')) {
            document.querySelector('body').dataset.path = window.location.pathname;
            
        }
    }, 50, 15000);




      var experiments = {
          // Experiments 


          genderGpUrls_10() {

              const genderGpUrls = [
                  "/help-centre/gendergp-service-costs/",
                  "/trans-sex-education/",
                  "/help-centre/professionals-contact/",
                  "/help-centre/surgery-referral/",
                  "/help-centre/request-a-one-off-prescription/",
                  "/help-centre/patients-membership/",
                  "/locations/",
                  "/about/updates-and-information/",
                  "/the-gendergp-fund/",
                  "/help-centre/reduced-costs/",
                  "/brochure/",
                  "/news/",
                  "/testimonials/",
                  "/gendergp-network/marianne-oakes/",
                  "/podcasts/",
                  "/pharmacy-hub/prescriber-credentials/",
                  "/raising-concerns/",
                  "/advocacy/petition/",
                  "/gendergp-network/jayne-olden/",
                  "/gendergp-network/jackie-swarbrick/",
                  "/gender-affirming-treatment-for-trans-youth/",
                  "/important-documents/",
                  "/gendergp-network/james-byrne/",
                  "/follow-up-form/",
                  "/nhse/",
                  "/non-binary-hub/",
                  "/test-stripe-button/",
                  "/help-centre/pathology-alternatives/",
                  "/case-studies/",
                  "/advocacy/correspondence/",
                  "/gendergp-network/claire-booth/",
                  "/mpts-testimonials/",
                  "/annual-reviews/",
                  "/trans-woman-hub/",
                  "/guidance/",
                  "/gendergp-network/diana-hattersley/",
                  "/advocacy-hub/nhs-digital/",
                  "/new-patient-prescribing-protocols/",
                  "/help-centre/media-enquiries/",
                  "/medical-hub/professional-indemnity/",
                  "/advocacy/",
                  "/gmc-requests-to-meet/",
                  "/advocacy/bell-and-mrs-a-v-tavistock/",
                  "/treatment-review/",
                  "/gender-questioning-hub/",
                  "/how-should-i-support-my-trans-child/",
                  "/trans-man-hub/",
                  "/voice-workshops/",
                  "/help-centre/patients-membership-20/",
                  "/rcgp/",
                  "/check-subscription/",
                  "/huffington-post/",
                  "/advocacy/affirmative-care-for-trans-youth-live-discussion/",
                  "/media-exposure/",
                  "/payments_joining-fee/",
                  "/subscribe-to-podcast/",
                  "/advocacy-hub/british-menopause-society/article-template/",
                  "/blood-testing-alternatives/",
                  "/enrolment-checklist/",
                  "/f87h43/",
                  "/geo/",
                  "/help-centre_old/patients-membership-20/",
                  "/join-our-pharmacy-network/",
                  "/kindness-counts/",
                  "/page/",
                  "/payments_formal-diagnosis-letter-fee/",
                  "/payments_set-up-fee/",
                  "/prescription-check/",
                  "/project/",
                  "/where-now/",
                  "/write-to-the-bbc/",
                  "/help-centre/blood-testing-services/",
                  "/",
                  "/treatment-reviews/",
                  "/consent-session/",
                  "/what-happens-next/",
                  "/next-steps/",
                  "/new-form-test/",
                  "/jobs/",
                  "/payments_travelling-with-medication-fee/",
                  "/payments_paper-prescription-fee/",
                  "/payments_electronic-prescription-fee/",
                  "/team-requests/",
                  "/quality-assurance-feedback/",
                  "/workbox/",
                  "/thank-you-for-subscribing/",
                  "/feedback-gender-affirming/",
                  "/workspace/",
                  "/sitemap/",
                  "/your-message-has-been-successfully-sent/"
              ];

              if (window.location.href.includes("https://www.gendergp.com/") && genderGpUrls.includes(window.location.pathname)) {
                  console.log("condition matched")
                  window.Gender_10 = 1;
                  window._conv_q = window._conv_q || [];
                  window._conv_q.push(["executeExperiment", "100045070"]);
                  // console.log('Special URL detected:', currentURL);
              }

          }
      };

      //Activate Gender_10 activated
      experiments.genderGpUrls_10();


  } catch (e) {
      if (debug) console.log(e, "Error in Global JavaScript");
  }
})();