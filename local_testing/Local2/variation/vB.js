(function () {
    try {
      /* main variables */
      var debug = 1;
      var variation_name = "cre-t-30";
  
      /* helper library */
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
  
      var methodologyContent = {
        methodology: {
          header: "Trusted, Transparent, and 100% Independent Ranking Methodology",
          sections: [
            {
              title: "How Our Rankings Work",
              description:
                "We independently reviewed the top pet insurers from NAPHIA (North American Pet Health Insurance Association) — a trusted industry body — and ranked them based on 11 factors that matter most to pet owners:",
              list: [
                "Average price across all 50 states*",
                "What’s covered and what's not",
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
              title: "Listings Are 100% Independent",
              description: "We don’t accept payment for listings or ranking changes. Every provider is shown based on merit — never financial gain.",
            },
            {
              title: "A+ Rated, BBB-Accredited Business",
              description:
                "Pet Insurance Gurus is an A+ rated, BBB-accredited business. Since 2020, we’ve helped over 100,000 pet owners protect their furry family members. Unlike many competitors, we’re a U.S.-based company headquartered in San Francisco, California.",
              logos: [
                {
                  src: "https://cdn-3.convertexperiments.com/uf/10007679/10007714/group-51_67f7b14d6a58f.png",
                  alt: "B+",
                },
              ],
            },
            {
              title: "How We Make Money",
              description: "We may earn a commission if you buy a policy through one of our links which allows us to keep our service free. Companies can’t pay to appear in or influence our rankings — our recommendations are 100% independent.",
            },
            {
              title: "You Pay the Same Price as Going Direct",
              description: "Pet Insurance prices are regulated by law. You won’t find a lower price anywhere else for a policy found on Pet Insurance Gurus.",
            },
            {
              title: "Our Service Is Free to Use",
              description:
                "You don’t pay anything to use this site. If you click a link and buy a policy, we may earn a commission from a pet insurance provider, however, this does not affect how we rank or recommend plans.",
            },
            {
              title: "Your Privacy is 100% Protected",
              description:
                "We don’t collect personal information. You can browse our website and compare pet insurance providers with complete privacy — no phone number, no email, and no personal details are required.",
            },
            {
              title: "Prices Are Averages, Not Quotes",
              description:
                "To help you compare, we show the average cost of a standard policy for a 2-year-old Labrador Retriever Dog and a 2-year-old American Shorthair Cat, across all 50 US states. Since your pet is unique, your final quote will be different — click through to your provider choice for a personalized quote.",
            },
            {
              title: "We Donate to Animal Welfare Charities",
              description: "When you buy pet insurance through us we donate $25 to the following charities — giving a helping paw to pets and animals in need!",
              logos: [
                {
                  src: "https://cdn-3.convertexperiments.com/uf/10007679/10007714/ca-1_67a0b3f0e6536.png",
                  alt: "human",
                },
                {
                  src: "https://cdn-3.convertexperiments.com/uf/10007679/10007714/wwf-logo_67a0b436ad198.png",
                  alt: "WWF",
                },
                {
                  src: "https://cdn-3.convertexperiments.com/uf/10007679/10007714/bf-sta-logo-4_67a0b3e26a36a.png",
                  alt: "save them all",
                },
                {
                  src: "https://cdn-3.convertexperiments.com/uf/10007679/10007714/ca-4_67a0b3fd4eda1.png",
                  alt: "alley cat allies",
                },
                {
                  src: "https://cdn-3.convertexperiments.com/uf/10007679/10007714/ca-5_67a0b40bb07da.png",
                  alt: "planet",
                },
              ],
            },
            {
              title: "You’re Always in Control",
              description: "We help you narrow your options and build confidence in your shortlist. Every pet and owner is different, so the final decision will always be yours.",
            },
          ],
          zipCodes:
            "*Below are all the zip codes used to calculate the national average prices for each pet insurance provider: AL (35206) | AK (99516) | AZ (85050) | AR (72205) | CA (90210) | CO (80238) | CT (06105) | DE (19904) | FL (33155) | GA (30331) | HI (96821) | ID (83712) | IL (60630) | IN (46229) | IA (50317) | KS (66109) | KY (40511) | LA (70112) | ME (04108) | MD (21209) | MA (02136) | MI (48201) | MN (55414) | MS (39211) | MO (63104) | MT (59101) | NE (68154) | NV (89117) | NH (03062) | NJ (07305) | NM (87120) | NY (10022) | NC (27603) | ND (58104) | OH (44102) | OK (73129) | OR (97229) | PA (19128) | RI (02909) | SC (29414) | SD (57108) | TN (38111) | TX (77054) | UT (84104) | VT (05408) | VA (23221) | WA (98108) | WV (25311) | WI (53225) | WY (82009)",
        },
      };
  
      function generateMethodologyContent() {
        let methodologyHtml = `<div class="cre-t-30-methodology-container">
          <div class="cre-t-30-methodology-wrapper">
            <div class="cre-t-30-header">
              <div class="cre-t-30-header-text">${methodologyContent.methodology.header}</div>
            </div>`;
  
        methodologyContent.methodology.sections.forEach((section, index) => {
          methodologyHtml += `<div class="cre-t-30-content cre-t-30-content${index + 1}">
          <div class="cre-t-30-content-text-header">${section.title}</div>
          <div class="cre-t-30-content-text-description">${section.description}</div>`;
  
          if (section.list) {
            methodologyHtml += `<div class="cre-t-30-content-text-list"><ol>`;
            section.list.forEach((item) => {
              methodologyHtml += `<li>${item}</li>`;
            });
            methodologyHtml += `</ol></div>`;
          }
  
          if (section.logos) {
            methodologyHtml += `<div class="cre-t-30-logo-section">`;
  
            section.logos.forEach((logo, index) => {
              methodologyHtml += `<div class="cre-t-30-logo cre-t-30-logo-${index + 1}">
                <img src="${logo.src}" alt="${logo.alt}" />
              </div>`;
            });
  
            methodologyHtml += `</div>`;
          }
  
          methodologyHtml += `</div>`;
        });
  
        methodologyHtml += `</div></div>`;
        return methodologyHtml;
      }
  
      function generateZipCodeContent() {
        return `<div class="cre-t-30-zipcode-container">
          <div class="cre-t-30-zipcode-text">${methodologyContent.methodology.zipCodes}</div>
        </div>`;
      }
  
      /* Initialize variation */
      function init() {
        _$("body").addClass(variation_name);
  
        // Generate and insert methodology content
        const methodologyHtml = generateMethodologyContent();
        const zipCodeHtml = generateZipCodeContent();
  
        // Append methodology content after #content-section
        if (!document.querySelector(".cre-t-30-methodology-container")) {
          const container = document.querySelector("#content-section");
          container.insertAdjacentHTML("afterend", methodologyHtml);
          document.querySelector(".cre-t-30-methodology-wrapper").insertAdjacentHTML("beforeend", zipCodeHtml);
        }
      }
  
      /* Wait for element to load and initialize */
      helper.waitForElement("#content-section", init, 25, 25000);
    } catch (e) {
      if (debug) console.log(e, "Error in Test " + variation_name);
    }
  })();