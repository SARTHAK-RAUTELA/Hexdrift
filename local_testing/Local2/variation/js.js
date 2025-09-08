if (!window.location.pathname.includes('/what-happens-next-treatment-review/') && 
    !window.location.pathname.includes('/next-steps/')){

		(function () {
	try {
		/* main variables */
		var debug = 1;
		var variation_name = "cre-t-26";
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

		function live(selector, event, callback, context) {
			/****Helper Functions****/
			// helper for enabling IE 8 event bindings
			function addEvent(el, type, handler) {
				if (el.attachEvent) el.attachEvent("on" + type, handler);
				else el.addEventListener(type, handler);
			}
			// matches polyfill
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
			// live binding helper using matchesSelector
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

		var heroListIcon = ` <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GenderGP/Test26/cre26arrow2.svg" alt="list arrow" /> `;

		var heroSectionHtml = `
      <div class="cre-t-26-hero-container">
        <div class="cre-t-26-hero-wrapper">
          <div class="cre-t-26-hero-main">
            <!-- List content  -->
            <div class="cre-t-26-hero-right">
              <div class="cre-t-26-hero-header">Welcome back!</div>
              <div class="cre-t-26-hero-subheader">If you’re a current member in need of Gender <br />Affirming Care, you’re in the right place.</div>
              <div class="cre-t-26-hero-right-wrapper">
                <div class="cre-t-26-hero-right-main">
                  <div class="cre-t-26-hero-content cre-t-26-hero-content1">How to get your treatment plan:</div>
                  <div class="cre-t-26-hero-content cre-t-26-hero-content2">
                    <ul class="cre-t-26-hero-lists">
                      <li class="cre-t-26-hero-list-item cre-t-26-hero-list-item1">
                        <div class="cre-t-26-hero-list-icon">${heroListIcon}</div>
                        <div class="cre-t-26-hero-list-text"><strong>Fill out the form </strong><br />with your goals, preferences, and health data so that we can create your up-to-date personalised treatment plan.</div>
                      </li>
                      <li class="cre-t-26-hero-list-item cre-t-26-hero-list-item2">
                        <div class="cre-t-26-hero-list-icon">${heroListIcon}</div>
                        <div class="cre-t-26-hero-list-text"><strong>You’ll need an active subscription. </strong>If yours has lapsed, no worries- you can activate it again <a href="https://billing.stripe.com/p/login/3cs7vt02l4N8a1GfYY" target="_blank" rel="noopener noreferrer">here.</a></div>
                      </li>
                      <li class="cre-t-26-hero-list-item cre-t-26-hero-list-item3">
                        <div class="cre-t-26-hero-list-icon">${heroListIcon}</div>
                        <div class="cre-t-26-hero-list-text"><strong>After you’ve completed the form, </strong><br />as always, you’ll receive your treatment plan. Simply take it to your doctor to access what you need, or, with a quick tick of a box, we can refer you to an independent prescriber who can work with you to get your medication.</div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="cre-t-26-hero-right-main2">
                  <div class="loader"></div>
                </div>
              </div>
            </div>
            <!-- form Content  -->
            <div class="cre-t-26-hero-left-container">
              <div class="cre-t-26-hero-left-section">
                <div class="cre-t-26-hero-left-section1">
                  <div class="cre-t-26-hero-left-wrapper">
                    <div class="cre-t-26-hero-left-main">
                      <div class="cre-t-26-hero-left-image"><img src="https://cdn-3.convertexperiments.com/uf/10007679/10007617/heroImg.webp" alt="Person holding a rainbow flag" /></div>
                      <div class="cre-t-26-hero-left-text">
                        <div class="cre-t-26-hero-left-text1">“I have been with GenderGP for my daughter for almost 3 years now. Most recently we have had communication and sessions with James Morris. The level of communication has been above and beyond, and all information has been clear and well received. James comes across as a truly empathetic human, who really cares about the people he comes into contact with. Thank you for support.”</div>
                        <div class="cre-t-26-hero-left-text2"><strong>Emma Burgess.</strong></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cre-t-26-hero-left-section2 cre-t-26-hero-left">
                  <div class="loader mobile-loader"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

		function waitForPageLoad(trigger, delayInterval, delayTimeout) {
			var interval = setInterval(function () {
				if (document.readyState === "complete") {
					clearInterval(interval);
					trigger();
				}
			}, delayInterval);
			setTimeout(function () {
				clearInterval(interval);
			}, delayTimeout);
		}

		// Step 1: Create an array of objects with text content and unique step identifiers
		var steps = [
			{
				text: "Hello and welcome to new and existing members",
				step: "welcome-step",
			},
			{
				text: "APPLY HERE",
				step: "apply-step",
			},
			{
				text: "Personal Details",
				step: "personal-details-step",
			},
			{
				text: "Blood Tests",
				step: "blood-tests-step",
			},
			{
				text: "Your Preferences and Medical History",
				step: "preferences-history-step",
			},
			{
				text: "About Your Current Gender-Affirming Medication",
				step: "current-medication-step",
			},
			{
				text: "Your Choice of Medication",
				step: "choice-medication-step",
			},
			{
				text: "Estrogen Hormone",
				step: "estrogen-hormone-step",
			},
			{
				text: "Progesterone Hormone",
				step: "progesterone-hormone-step",
			},
			{
				text: "Testosterone Hormone",
				step: "testosterone-hormone-step",
			},
			{
				text: "GnRHa Blockers",
				step: "gnrha-blockers-step",
			},
			{
				text: "Treatment Recommendations and Independent Prescribers",
				step: "treatment-recommendations-step",
			},
			{
				text: "Membership and Payments",
				step: "membership-payments-step",
			},
			{
				text: "That's it!",
				step: "thats-it-step",
			},
			{
				text: "Antiandrogen Consent - Spironolactone and Cyproterone*",
				step: "antiandrogen-consent-step",
			},
			{
				text: "Consent For Finasteride / Dutasteride*",
				step: "finasteride-consent-step",
			},
			{
				text: "Thank you for choosing your medication preferences, please click next to continue.",
				step: "thank-you-step",
			},
			{
				text: "Confirmation",
				step: "confirmation-step",
			},
			{
				text: "Membership",
				step: "membership-step",
			},
		];

		function moveFrom() {
			document.querySelector("html body #form-section-id > div").style.display = "block";
			// document.querySelector(".loader").style.display = "none";

			if (window.innerWidth > 1023) {
				document.querySelector(".cre-t-26-hero-right-main2 .loader").style.display = "none";
				var topPositionEl = document.querySelector(".cre-t-26-hero-right-main");
				var moveFormEl = document.querySelector("#form-section-id > div");
				var topPosition = topPositionEl.getBoundingClientRect().top + window.scrollY;
				var formPosition = moveFormEl.getBoundingClientRect().top + window.scrollY;
				var difference = topPosition - formPosition;
				moveFormEl.style.marginTop = difference + "px";
				document.body.classList.add("cre-t-26-form-moved");
			} else {
				document.querySelector(".loader.mobile-loader").style.display = "none";
			}
		}

		function formSkipStepsAndAddingAttributes() {
			var elements = document.querySelectorAll("form.jotform-form ul  *");
			elements.forEach(function (element) {
				if (element.tagName === "LABEL" || element.tagName === "H3" || element.tagName === "H2" || element.tagName === "P") {
					steps.forEach(function (step) {
						element.textContent.trim().includes(step.text) && element.closest("ul")?.setAttribute("data-step", step.step);
					});
				}
			});

			helper.waitForElement(
				'[data-step="welcome-step"] .form-pagebreak-next',
				function () {
					document.querySelector('[data-step="welcome-step"] .form-pagebreak-next').click();
					setTimeout(function () {
						helper.waitForElement(
							'[data-step="apply-step"] #label_input_138_1',
							function () {
								document.querySelector("#label_input_138_1").click();
								document.querySelector('[data-step="apply-step"] .form-pagebreak-next').click();

								setTimeout(function () {
									moveFrom();
								}, 500);
							},
							50,
							15000,
						);
					}, 250);
				},
				50,
				15000,
			);
		}

		var helper = _$();

		/* Variation Init */
		function init() {
			_$("body").addClass(variation_name);

			if (!document.querySelector(".cre-t-26-hero-container")) {
				document.querySelector(".page-content").insertAdjacentHTML("beforeend", heroSectionHtml);
			}

			helper.waitForElement(
				"#form-section-id",
				function () {
					document.querySelector(".cre-t-26-hero-left-section2") &&
						document.querySelector(".cre-t-26-hero-left-section2").insertAdjacentElement("afterbegin", document.querySelector("#form-section-id"));
				},
				50,
				20000,
			);
			helper.waitForElement(
				'[data-step="personal-details-step"] #text_309 h3',
				function () {
					document.querySelector('[data-step="personal-details-step"] #text_309 h3').textContent = "Enter your info now to get your transition treatment plan:";
				},
				50,
				20000,
			);

			waitForPageLoad(
				function () {
					formSkipStepsAndAddingAttributes();
				},
				50,
				20000,
			);
		}
		/* Initialise variation */
		helper.waitForElement(".page-content", init, 50, 20000);
	} catch (e) {
		if (debug) console.log(e, "error in Test" + variation_name);
	}
})();

	}