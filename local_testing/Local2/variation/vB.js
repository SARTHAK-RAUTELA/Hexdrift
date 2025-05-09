(function () {
  try {
    /* Main Variables */
    var debug = 1;
    var variation_name = "cre-t-38";

    /* Helper Library */
    var _$;
    !(function (factory) {
      _$ = factory();
    })(function () {
      var bm = function (s) {
        if (typeof s === "string") {
          this.value = Array.prototype.slice.call(document.querySelectorAll(s));
        }
        if (typeof s === "object") {
          this.value = [s];
        }
      };
      bm.prototype = {
        eq: function (n) {
          this.value = [this.value[n]];
          return this;
        },
        each: function (fn) {
          [].forEach.call(this.value, fn);
          return this;
        },
        log: function () {
          var items = [];
          for (let index = 0; index < arguments.length; index++) {
            items.push(arguments[index]);
          }
          console && console.log(variation_name, items);
        },
        addClass: function (v) {
          var a = v.split(" ");
          return this.each(function (i) {
            for (var x = 0; x < a.length; x++) {
              if (i.classList) {
                i.classList.add(a[x]);
              } else {
                i.className += " " + a[x];
              }
            }
          });
        },
        waitForElement: function (selector, trigger, delayInterval, delayTimeout) {
          var interval = setInterval(function () {
            if (_$(selector).value.length) {
              clearInterval(interval);
              trigger();
            }
          }, delayInterval);
          setTimeout(function () {
            clearInterval(interval);
          }, delayTimeout);
        },
      };
      return function (selector) {
        return new bm(selector);
      };
    });
    var helper = _$();

    /* Live Event Listener */
    function live(selector, event, callback, context) {
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent("on" + type, handler);
        else el.addEventListener(type, handler);
      }
      this &&
        this.Element &&
        (function (ElementPrototype) {
          ElementPrototype.matches =
            ElementPrototype.matches ||
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
        })(Element.prototype);
      function live(selector, event, callback, context) {
        addEvent(context || document, event, function (e) {
          var found,
            el = e.target || e.srcElement;
          while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
          if (found) callback.call(el, e);
        });
      }
      live(selector, event, callback, context);
    }

    /* Methodology Content */
    var methodologyContent = {
      methodology: {
        rankingMethodology: {
          headerMethodology: "Trusted, Transparent, and 100% Independent",
        },
        faqs: [
          {
            title: "Ranking Methodology",
            description:
              "We independently reviewed the top pet insurers from NAPHIA (North American Pet Health Insurance Association) — a trusted industry body — and ranked them based on 11 factors that matter most to pet owners:",
            descriptionList: [
              "Average price across all 50 states*",
              "What's covered and what's not",
              "Key policy details like accidents, illnesses, surgeries, check-ups, cancer treatment, and lab tests",
              "Financial strength of the insurer (AM Best rating)",
              "Reimbursement percentage (how much you get back)",
              "Annual payout limit",
              "How easy it is to sign up and manage your policy",
              "How clear and simple the policy is to understand",
              "Customer reviews",
              "Overall Brand Trust",
              "Satisfaction with the claims process",
            ],
          },
          {
    "title": "Listings are 100% independent",
    "description": "We don't accept payment for listings or ranking changes. Every provider is shown based on merit — never financial gain."
  },
  {
    "title": "A+ rated, BBB-accredited business",
    "description": "Pet Insurance Gurus is an A+ rated, BBB-accredited business. Since 2020, we've helped over 100,000 pet owners protect their furry family members. Unlike many competitors, we're a U.S.-based company headquartered in San Francisco, California.",
    "logos": [
      {
        "src": "https://cdn-3.convertexperiments.com/uf/10007679/10007714/group-51_67f7b14d6a58f.png",
        "alt": "B+"
      }
    ]
  },
  {
    "title": "How we make money",
    "description": "We may earn a commission if you buy a policy through one of our links which allows us to keep our service free. Companies can't pay to appear in or influence our rankings — our recommendations are 100% independent."
  },
  {
    "title": "You pay the same price as going direct",
    "description": "Pet Insurance prices are regulated by law. You won't find a lower price anywhere else for a policy found on Pet Insurance Gurus."
  },
  {
    "title": "Our service is free to use",
    "description": "You don't pay anything to use this site. If you click a link and buy a policy, we may earn a commission from a pet insurance provider, however, this does not affect how we rank or recommend plans."
  },
  {
    "title": "Your privacy is 100% protected",
    "description": "We don't collect personal information. You can browse our website and compare pet insurance providers with complete privacy — no phone number, no email, and no personal details are required."
  },
  {
    "title": "Prices are averages, not quotes",
    "description": "To help you compare, we show the average cost of a standard policy for a 2-year-old Labrador Retriever Dog and a 2-year-old American Shorthair Cat, across all 50 US states. Since your pet is unique, your final quote will be different — click through to your provider choice for a personalized quote."
  },
  {
    "title": "We donate to animal welfare charities",
    "description": "When you buy pet insurance through us we donate $25 to the following charities — giving a helping paw to pets and animals in need!",
    "logos": [
      {
        "src": "https://cdn-3.convertexperiments.com/uf/10007679/10007714/ca-1_67a0b3f0e6536.png",
        "alt": "human"
      },
      {
        "src": "https://cdn-3.convertexperiments.com/uf/10007679/10007714/wwf-logo_67a0b436ad198.png",
        "alt": "WWF"
      },
      {
        "src": "https://cdn-3.convertexperiments.com/uf/10007679/10007714/bf-sta-logo-4_67a0b3e26a36a.png",
        "alt": "save them all"
      },
      {
        "src": "https://cdn-3.convertexperiments.com/uf/10007679/10007714/ca-4_67a0b3fd4eda1.png",
        "alt": "alley cat allies"
      },
      {
        "src": "https://cdn-3.convertexperiments.com/uf/10007679/10007714/ca-5_67a0b40bb07da.png",
        "alt": "planet"
      }
    ]
  },
  {
    "title": "You're always in control",
    "description": "We help you narrow your options and build confidence in your shortlist. Every pet and owner is different, so the final decision will always be yours."
  }
        ],
        zipCodes:
          "*Below are all the zip codes used to calculate the national average prices for each pet insurance provider: AL (35206) | AK (99516) | AZ (85050) | AR (72205) | CA (90210) | CO (80238) | CT (06105) | DE (19904) | FL (33155) | GA (30331) | HI (96821) | ID (83712) | IL (60630) | IN (46229) | IA (50317) | KS (66109) | KY (40511) | LA (70112) | ME (04108) | MD (21209) | MA (02136) | MI (48201) | MN (55414) | MS (39211) | MO (63104) | MT (59101) | NE (68154) | NV (89117) | NH (03062) | NJ (87120) | NY (10022) | NC (27603) | ND (58104) | OH (44102) | OK (73129) | OR (97229) | PA (19128) | RI (02909) | SC (29414) | SD (57108) | TN (38111) | TX (77054) | UT (84104) | VT (05408) | VA (23221) | WA (98108) | WV (25311) | WI (53225) | WY (82009)",
      },
    };

    /* Generate Ranking Methodology */
    function generateRankingMethodology() {
      const ranking = methodologyContent.methodology.rankingMethodology;
      let html = `
      <div class="cre-t-38-methodology-container">
        <h2 class="cre-t-38-methodology-header">${ranking.headerMethodology}</h2>
        
      `;

      html += `</div>`;
      return html;
    }

    /* Generate FAQs */
    function generateFAQs() {
      let faqHtml = `<div class="cre-t-38-faq-container">`;
      methodologyContent.methodology.faqs.forEach((faq, index) => {
        faqHtml += `
          <div class="cre-t-38-faq-wrapper">
            <div class="cre-t-38-header">
              <div class="cre-t-38-header-text">${faq.title}</div>
              <div class="cre-t-38-header-icon">
                <img class="cre-t-38-header-icon-img-plus" src="https://cdn-3.convertexperiments.com/uf/10007679/10007714/plus_6813312b8647c.svg">
                <img class="cre-t-38-header-icon-img-min" src="https://cdn-3.convertexperiments.com/uf/10007679/10007714/min_6813311e380d0.svg">
              </div>
            </div>
            <div class="cre-t-38-content-wrapper-faq">
              <div class="cre-t-38-description">${faq.description}</div>
        `;
        // Add ordered list if descriptionList exists
        if (faq.descriptionList) {
          faqHtml += `<ol class="cre-t-38-list">`;
          faq.descriptionList.forEach((item) => {
            faqHtml += `<li>${item}</li>`;
          });
          faqHtml += `</ol>`;
        }
        // Add logos if they exist
        if (faq.logos) {
          faqHtml += `<div class="cre-t-38-logo-section">`;
          faq.logos.forEach((logo, logoIndex) => {
            faqHtml += `
              <div class="cre-t-38-logo cre-t-38-logo-${logoIndex + 1}">
                <img src="${logo.src}" alt="${logo.alt}" />
              </div>
            `;
          });
          faqHtml += `</div>`;
        }
        faqHtml += `</div></div>`;
      });
      faqHtml += `</div>`;
      return faqHtml;
    }

    /* Generate Zip Code Content */
    function generateZipCodeContent() {
      return `<div class="cre-t-38-zipcode-container">
        <div class="cre-t-38-zipcode-text">${methodologyContent.methodology.zipCodes}</div>
      </div>`;
    }

    /* Add Event Listener for Toggle */
    function addEventListener() {
      live(".cre-t-38-header", "click", (e) => {
        const clickedHeader = e.target.closest(".cre-t-38-header");
        if (clickedHeader) {
          const wrapper = clickedHeader.parentElement;
          wrapper.classList.toggle("active");
        }
      });
    }

    /* Initialize Variation */
    function init() {
      _$("body").addClass(variation_name);

      // Generate and append all content to the DOM
      const container = document.getElementById("span-26-63");
      if (container) {
        // Append Ranking Methodology
        container.innerHTML = generateRankingMethodology();

        // Append FAQs
        container.insertAdjacentHTML("beforeend", generateFAQs());

        // Append Zip Code Content
        container.insertAdjacentHTML("beforeend", generateZipCodeContent());
      } else {
        console.error('Element with ID "span-26-63" not found.');
      }

      // Add event listeners
      addEventListener();
    }

    /* Wait for Element to Load and Initialize */
    helper.waitForElement("#content-section", init, 25, 25000);
  } catch (e) {
    if (debug) console.log(e, "Error in Test " + variation_name);
  }
})();