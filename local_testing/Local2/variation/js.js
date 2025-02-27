// The code added for the Convert manual and custom trigger of the tests.
(function() {
  try {
      //console.log("Under the global code")
      var debug = 1;
      /**
       * setup Team
       */
      // LIBRARY FUNCTIONS
      var lib = {
          waitForElement(selector, trigger, delayInterval, delayTimeout) {
              var interval = setInterval(function() {
                  if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
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
              document.querySelector('body').dataset.url = window.location.href;
          }
      }, 50, 15000);
  } catch (e) {
      if (debug) console.log(e, 'Error in Global JavaScript');
  }
})();
// CRO Mode (QA Test cookie)
(function() {
  // Utility Functions
  function setCookie(cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); // Convert days to milliseconds
      let expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let cookies = decodedCookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          let c = cookies[i].trim();
          if (c.indexOf(name) === 0) {
              return c.substring(name.length, c.length);
          }
      }
      return null;
  }
  // Enable or disable QA mode
  function enableQAMode(mode) {
      if (mode === 'qa') {
          // console.log(`CRO Mode enabled: ${mode}`);
          setCookie('cro_mode', mode, 1); // Set cookie for 1 day
      } else {
          // console.log('CRO Mode disabled');
          setCookie('cro_mode', '', -1); // Clear cookie
      }
  }
  // Initialize CRO Mode
  function initCROMode() {
      const urlParams = new URLSearchParams(window.location.search);
      let mode = urlParams.get('cro_mode') || getCookie('cro_mode');
      if (mode === 'qa') {
          enableQAMode(mode);
          // console.log("QA Mode Active");
          // Place any QA mode-specific logic here
      } else {
          console.log("QA Mode Inactive");
      }
  }
  // Run the initialization function
  initCROMode();
})();
//logic for who Land on the homepage
// Logic for who lands on the homepage
window.addEventListener('load', function() {
  try {
      // Get the current URL
      const currentUrl = window.location.origin + window.location.pathname;
      // Define the homepage URL
      const homepageUrl = window.location.origin + '/';
      // Check if the user is on the homepage
      const isHomepage =
          currentUrl === homepageUrl || currentUrl === homepageUrl + 'index.html';
      // Function to get a cookie by name
      function getCookie(cname) {
          var name = cname + "=";
          var ca = document.cookie.split(';');
          for (var i = 0; i < ca.length; i++) {
              var c = ca[i].trim();
              if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
          }
          return "";
      }
      // Function to set a session cookie
      function setBmCookie(cname, cvalue) {
          document.cookie = `${cname}=${cvalue}; path=/;`;
      }
      // Check if this is the user's first visit in this session
      const isFirstVisit = getCookie('homepageVisited') === "";
      // If the user lands on the homepage for the first time in the session
      if (isHomepage && isFirstVisit) {
          // Mark the homepage as visited using a session cookie
          setBmCookie('homepageVisited', 'true');
          if (!window.AlreadyTriggeredTestName_FST21) {
              window.AlreadyTriggeredTestName_FST21 = true;
              // Run your custom logic here (no redirect, no modal)
              window.creT21TestActivated = 1;
              window._conv_q = window._conv_q || [];
              window._conv_q.push(['executeExperiment', '100046812']);
              // console.log(
              //     "User landed on the homepage for the first time in this session."
              // );
          }
          // You can trigger tracking, analytics, or any custom event here
      }
  } catch (error) {
      // Log the error to the console for debugging
      console.error("An error occurred in the homepage visit script:", error);
  }
});
// The following code has been added for the custom trigger of the experiments
(function() {
  // Use a global object to persist experiment state
  window.activatedExperiments = window.activatedExperiments || new Map();
  /**
   * Checks if the current user matches the specified user type condition.
   * @param {string} userType - The user type to check against. Valid values are "logged-out-user" and "logged-in-user".
   * @returns {boolean} True if the current user matches the specified user type, otherwise false.
   */
  function debounce(func, timeout = 300) {
      let timer;
      return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => {
              func.apply(this, args);
          }, timeout);
      };
  }

  function observeSelector(selector, callback, options = {}) {
      const document = options.document || window.document;
      const processed = new Map();
      if (options.timeout || options.onTimeout) {
          throw `observeSelector options \`timeout\` and \`onTimeout\` are not yet implemented.`;
      }
      let obs;
      let isDone = false;
      const done = () => {
          if (obs) obs.disconnect();
          isDone = true;
      };
      const processElement = (el) => {
          if (!processed.has(el)) {
              processed.set(el, true);
              callback(el);
              if (options.once) {
                  done();
                  return true;
              }
          }
          return false;
      };
      const lookForSelector = () => {
          const elParent = document.documentElement;
          if (elParent.matches(selector) || elParent.querySelector(selector)) {
              const elements = elParent.querySelectorAll(selector);
              elements.forEach((el) => processElement(el));
          }
      };
      const debouncedLookForSelector = debounce(() => {
          lookForSelector();
      }, 100);
      // Initial check for the selector on page load
      lookForSelector();
      if (!isDone) {
          obs = new MutationObserver(() => {
              debouncedLookForSelector();
          });
          obs.observe(document, {
              attributes: false,
              childList: true,
              subtree: true,
          });
      }
      return done;
  }

  function checkUserCondition(userType) {
      // Retrieve the current user type from global variable or body attribute
      const currentUserType = window._conv_customer_id || document.querySelector("body")?.getAttribute("users_type");
      if (!userType) return true;
      return currentUserType === userType;
  }
  // Check page type condition
  function checkPageType(pageType) {
      return new Promise((resolve, reject) => {
          if (!pageType) return resolve(true);
          var interval = setInterval(() => {
              if (typeof window._conv_page_type !== "undefined") {
                  clearInterval(interval);
                  resolve(window._conv_page_type === pageType);
              }
          }, 50);
          setTimeout(() => {
              clearInterval(interval);
              resolve(false);
          }, 5000);
      });
  }
  // Experiment class
  class Experiment {
      /**
       * Constructs an Experiment instance with the given parameters.
       * @param {Object} params - The parameters for the experiment.
       * @param {string} params.name - The name of the experiment.
       * @param {Function} params.callBack - The callback function to execute when the experiment is activated.
       * @param {Function} params.conditionToTriggerExperiment - The function that checks if the experiment should be triggered.
       * @param {string} params.userType - The user type for which the experiment is applicable.
       * @param {string} [params.pageType=""] - The page type for which the experiment is applicable.
       */
      constructor(params) {
          const {
              name,
              callBack,
              conditionToTriggerExperiment = null,
              userType = "",
              pageType = ""
          } = params;
          // Initialize instance variables
          this.name = name;
          this.callBack = callBack;
          this.conditionToTriggerExperiment = conditionToTriggerExperiment;
          this.userType = userType;
          this.pageType = pageType;
          // Initialize the experiment
          this.initialize();
      }
      // Initialize the experiment
      initialize() {
          // Check if the experiment is already active
          if (window.activatedExperiments.has(this.name)) {
              return;
          }
          // Store this instance in the global map
          window.activatedExperiments.set(this.name, this);
          // Initial check
          this.evaluateConditions();
      }
      /**
       * Evaluates the conditions of the experiment and activates it if all conditions are met.
       */
      async evaluateConditions() {
          // console.log("global evelvate code FirstTable---")
          const root = document.querySelector("html");
          // Check conditions
          const userCondition = checkUserCondition(this.userType);
          const pageCondition = await checkPageType(this.pageType);
          const triggerCondition = this.conditionToTriggerExperiment == null ? true : this.conditionToTriggerExperiment();
          // If all conditions are met, activate the experiment
          if (userCondition && pageCondition && triggerCondition) {
              if (!root.hasAttribute(this.name)) {
                  root.setAttribute(this.name, true);
                  this.callBack();
              }
          } else {
              // If conditions are not met, remove the experiment attribute
              root.removeAttribute(this.name);
          }
      }
  }
  /**
   * userType: guest, member, empty To check logged in and logged out user. Not user this if test need to run for all user
   * pageType: list => window._conv_page_type
   * conditionToTriggerExperiment: @function
   */
  // Add all experiment here
  var experiments = [{
          name: "test-03-LogOut",
          userType: "guest",
          pageType: "list",
          callBack: () => {
              // Execute experiment
              window.AlreadyTriggeredTestName_FST03_loggedout = 1;
              window._conv_q = window._conv_q || [];
              window._conv_q.push(["executeExperiment", "100046182"]);
              //console.log("Test03Found_loggedout_user");
          },
          conditionToTriggerExperiment: () => {
              return window.location.href.includes("www.firsttable.co");
          },
      },
      {
          name: "test-03-LogIn",
          userType: "member",
          pageType: "list",
          callBack: () => {
              // Execute experiment
              window.AlreadyTriggeredTestName_FST03_loggedin = 1;
              window._conv_q = window._conv_q || [];
              window._conv_q.push(["executeExperiment", "100046311"]);
              // console.log("Test03Found_loggedin_user");
          },
          conditionToTriggerExperiment: () => {
              return window.location.href.includes("www.firsttable.co");
          },
      },
      {
          name: "test-10",
          pageType: "list",
          callBack: () => {
              // Execute experiment
              window.AlreadyTriggeredTestName_FST10 = 1;
              window._conv_q = window._conv_q || [];
              window._conv_q.push(["executeExperiment", "100046388"]);
              //  console.log("Test10Found");
          },
          conditionToTriggerExperiment: () => {
              return window.location.href.includes("https://www.firsttable.co.nz/") && !(window.location.href.includes("https://www.firsttable.co.nz/christchurch") || window.location.href.includes("https://www.firsttable.co.nz/queenstown-lakes"));
          },
      },
      {
          name: "test-04",
          pageType: "list",
          callBack: () => {
              // Execute experiment
              window.AlreadyTriggeredTestName_FST04 = 1;
              window._conv_q = window._conv_q || [];
              window._conv_q.push(["executeExperiment", "100046433"]);
              // console.log("Test04Found");
          },
          conditionToTriggerExperiment: () => {
              return window.location.href.includes("www.firsttable.co") && (window.location.href.includes("https://www.firsttable.co.nz/christchurch") || window.location.href.includes("https://www.firsttable.co.nz/queenstown-lakes")) && !(window.location.href.includes("?regular-table-only=true") || window.location.href.includes("&regular-table-only=true"));
          },
      },
      {
          name: "test-07",
          pageType: "list",
          callBack: () => {
              // Execute experiment
              window.AlreadyTriggeredTestName_FST07 = 1;
              window._conv_q = window._conv_q || [];
              window._conv_q.push(["executeExperiment", "100046604"]);
              // console.log("Test07Found");
          },
          conditionToTriggerExperiment: () => {
              return window.location.href.includes("www.firsttable.co") && !(window.location.href.includes("/christchurch") || window.location.href.includes("/queenstown-lakes") || window.location.href.includes("/wanaka") || window.location.href.includes("/southland") || window.location.href.includes("/northland"));
          },
      },
      {
          name: "test-12",
          pageType: "list",
          callBack: () => {
              // Execute experiment
              window.AlreadyTriggeredTestName_FST12 = 1;
              window._conv_q = window._conv_q || [];
              window._conv_q.push(["executeExperiment", "100046637"]);
              // console.log("Test12Found");
          },
          conditionToTriggerExperiment: () => {
              return window.location.href.includes("www.firsttable.co") && !(window.location.href.includes("/christchurch") || window.location.href.includes("/queenstown-lakes"));
          },
      },
      {
          name: "test-20",
          pageType: "list",
          callBack: () => {
              // Execute experiment
              window.AlreadyTriggeredTestName_FST20 = 1;
              window._conv_q = window._conv_q || [];
              window._conv_q.push(["executeExperiment", "100046730"]);
              window._conv_q.push(["executeExperiment", "100047009"]);
              //  console.log("Test20Found");
          },
          conditionToTriggerExperiment: () => {
              return window.location.href.includes("www.firsttable.co") && !window.location.href.includes("regular-table-only=true");
          },
      },
      {
          name: "test-14",
          pageType: "restaurant",
          callBack: () => {
              // Execute experiment
              window.AlreadyTriggeredTestName_FST14 = 1;
              window._conv_q = window._conv_q || [];
              window._conv_q.push(["executeExperiment", "100047014"]);
              //  console.log("Test14Found");
          },
          conditionToTriggerExperiment: () => {
              return window.location.href.includes("www.firsttable.co");
          },
      },
      {
          name: "Test-19",
          callBack: () => {
              // Execute experiment
              // console.log("test 19 activated")
              window.AlreadyTriggeredTestName_FST19 = 1;
              window._conv_q = window._conv_q || [];
              window._conv_q.push(["executeExperiment", "100046699"]);
              //  console.log("test 19 activated")
          },
          conditionToTriggerExperiment: () => {
              return (window.localStorage.getItem("city") != null && window.location.pathname == "/" && window.location.href.includes("https://www.firsttable.co"))
          },
      },
      {
          name: "test-22-control",
          pageType: "list",
          callBack: () => {
              // Execute experiment only if window.newUITest is "control"
              if (window.newUITest && (window.newUITest === "control")) {
                  window.AlreadyTriggeredTestName_FST022_control = 1;
                  window._conv_q = window._conv_q || [];
                  window._conv_q.push(["executeExperiment", "100047004"]);
                  // console.log("Test22-control executed");
              }
          },
          conditionToTriggerExperiment: () => {
              return window.location.href.includes("www.firsttable.co");
          },
      },
      {
          name: "test-22-variation",
          pageType: "list",
          callBack: () => {
              // Execute experiment only if window.newUITest is "variation"
              if (window.newUITest && (window.newUITest === "variation")) {
                  window.AlreadyTriggeredTestName_FST022_variation = 1;
                  window._conv_q = window._conv_q || [];
                  window._conv_q.push(["executeExperiment", "100047005"]);
                  // console.log("Test22-variation executed");
              }
          },
          conditionToTriggerExperiment: () => {
              return window.location.href.includes("www.firsttable.co");
          },
      },
      {
          name: "test-18-LogOut",
          userType: "guest",
          callBack: () => {
              const currentUrl = window.location.href;
              const currentPath = window.location.pathname;
              const checkForNZCondition = (currentUrl.includes("https://www.firsttable.co.nz") && (currentPath.includes("/join/29") || currentPath.includes("/join/40") || currentPath.includes("/join/38")));
              const checkForAUCondition = (currentUrl.includes("https://www.firsttable.com.au") && (currentPath.includes("/join/193") || currentPath.includes("/join/426")));
              // const checkForUKCondition = (currentUrl.includes("https://www.firsttable.co.uk") && (currentPath.includes("/join/1057") || currentPath.includes("/join/1695") || currentPath.includes("/join/1836") || currentPath.includes("/join/1532")))
              if (checkForNZCondition || checkForAUCondition) {
                  //console.log("custom activation done test18 without observer")
                  if (!window.AlreadyTriggeredTestName_FST18_loggedout) {
                      window.AlreadyTriggeredTestName_FST18_loggedout = 1;
                      window._conv_q = window._conv_q || [];
                      window._conv_q.push(["executeExperiment", "100047035"]);
                  }
              } else {
                  //console.log("custom activation done test18 with observer")
                  observeSelector('[data-attribute="sign-up-page-modal"][data-attribute-social="true"]', function() {
                      // Execute experiment
                      if (!window.AlreadyTriggeredTestName_FST18_loggedout) {
                          window.AlreadyTriggeredTestName_FST18_loggedout = 1;
                          window._conv_q = window._conv_q || [];
                          window._conv_q.push(["executeExperiment", "100047035"]);
                      }
                  })
              }
          },
          conditionToTriggerExperiment: () => {
              return window.location.href.includes("www.firsttable.co");
          },
      },
      {
          name: "test-25-LogOut",
          userType: "guest",
          callBack: () => {

              //console.log("custom activation done test18 with observer")
              observeSelector('[data-attribute="sign-up-modal"]', function() {
                  if (
                      document.querySelector('body[users_type="guest"]') &&
                      (window._conv_page_type == 'list' || window._conv_page_type == 'restaurant') &&
                      !window.AlreadyTriggeredTestName_FST25_loggedout
                  ) {
                      //console.log("test 25 activated")
                      window.AlreadyTriggeredTestName_FST25_loggedout = 1;
                      window._conv_q = window._conv_q || [];
                      window._conv_q.push(["executeExperiment", "100047193"]);
                  }
              });
          },
          conditionToTriggerExperiment: () => {
              return window.location.href.includes("www.firsttable.co");
          },
      }

  ];
  /**
   * Example activation of experiments.
   * Iterates through the list of experiments and checks if the experiment is not active.
   * If the experiment is not active, it creates a new instance of the experiment.
   */
  function activateExperiments() {
      experiments.forEach((experiment) => {
          let currentExperiment = window.activatedExperiments.get(experiment.name);
          if (!window.activatedExperiments.has(experiment.name)) {
              // Create a new instance of the experiment
              new Experiment(experiment);
          } else if (!!currentExperiment) {
              currentExperiment.evaluateConditions();
          }
      });
  }
  // Add mutation to check user condtion
  if (!window.convObserverAdded) {
      window.convObserverAdded = true;
      // Monitor changes in user type dynamically
      const observer = new MutationObserver((mutationsList) => {
          for (const mutation of mutationsList) {
              if (mutation.attributeName === "users_type") {
                  window.activatedExperiments.forEach((experiment) => {
                      experiment.evaluateConditions(); // Reevaluate conditions for all experiments
                  });
              }
          }
      });
      // Attach the observer to the body element
      observer.observe(document.querySelector("body"), {
          attributes: true,
      });
  }

  // Initial activation
  activateExperiments();
})();

(function () {
  try {
      /* main variables */
      var debug = 1;
      var variation_name = "";

      if (!window.location.pathname.includes('/booking') && window.cre_27_timerInterval) {
          clearInterval(window.cre_27_timerInterval);
          window.cre_27_timerInterval = null;
      }


  } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
  }
})();