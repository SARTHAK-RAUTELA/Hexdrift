(function () {
	try {
		/* main variables */
		var debug = 1;
		var variation_name = "cre-t-5";

		function waitForElement(
			selector,
			trigger,
			delayInterval,
			delayTimeout
		) {
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
		function live(selector, event, callback, context) {
			/* Helper Functions */
			// Helper for enabling IE 8 event bindings
			function addEvent(el, type, handler) {
				if (el.attachEvent) el.attachEvent("on" + type, handler);
				else el.addEventListener(type, handler);
			}
			// Matches polyfill
			this.Element &&
				(function (ElementPrototype) {
					ElementPrototype.matches =
						ElementPrototype.matches ||
						ElementPrototype.matchesSelector ||
						ElementPrototype.webkitMatchesSelector ||
						ElementPrototype.msMatchesSelector ||
						function (selector) {
							var node = this,
								nodes = (node.parentNode || node.document).querySelectorAll(
									selector
								),
								i = -1;
							while (nodes[++i] && nodes[i] != node);
							return !!nodes[i];
						};
				})(Element.prototype);
			// Live binding helper using matchesSelector
			function live(selector, event, callback, context) {
				addEvent(context || document, event, function (e) {
					var found,
						el = e.target || e.srcElement;
					while (
						el &&
						el.matches &&
						el !== context &&
						!(found = el.matches(selector))
					)
						el = el.parentElement;
					if (found) callback.call(el, e);
				});
			}
			live(selector, event, callback, context);
		}
		function setSessionCookie(cookieName, cookieValue) {
			document.cookie = `${cookieName}=${cookieValue}; path=/`;
		}

		var html = `
	  <div class="paste_custom">
		<span>Paste your text here</span>
		<span class="blinking_cursor">|</span>
	  </div>`;

		function addTextAndCursor() {
			document.querySelector("textarea").placeholder = "";
			document.querySelector("textarea").nextElementSibling.classList.add("cre-t-5_hide");
			document.querySelector("textarea").insertAdjacentHTML("afterend", html);

		}



		function eventListener() {
			live('#paste', 'input', function () {
				waitForElement('.paste_custom', function () {
					setTimeout(function () {
						console.log('ok')
						if (!document.querySelector('.paste_custom').classList.contains('cre-t-5_hide')) {
							document.querySelector('.paste_custom').classList.add('cre-t-5_hide');
						}
					}, 100);
				}, 50, 15000);
			})

			live("#bCheckForAi", "mousedown", function (event) {
				var textarea = document.querySelector('textarea');
				if (!textarea.contains(event.target)) {
					if (textarea.value.length >= 50) {
						var checkStarted = false;
						var intervalId = setInterval(function () {
							if (checkStarted === false && document.querySelector("#bCheckForAi").textContent.trim().toLowerCase().includes("checking")) {
								document.querySelector("#bCheckForAi").classList.add("cre-t-5_checking");
								checkStarted = true;
							}
							else if (checkStarted === true && document.querySelector("#bCheckForAi").textContent.trim().toLowerCase().includes("ai")) {
								document.querySelector("#bCheckForAi").classList.remove("cre-t-5_checking");

								clearInterval(intervalId);
							}
						}, 250);
					}
				}
			});

			live("#bCheckForAi", "click", function () {
				var textarea = document.querySelector('textarea');
				if (textarea.value.length > 50) {
					document.querySelector("#bCheckForAi").classList.remove("cre-t-5_center");
					document.querySelector("#bHumanize").classList.remove("cre-t-5_hide");

				}
			})

			live("#gLightmode", "click", function () {
				document.querySelector(".paste_custom").classList.toggle("cre-t-5_dark");
			});
			live("textarea", "click", function () {
				document.querySelector(".paste_custom").classList.add("cre-t-5_hide");
			});
			document.addEventListener('click', function (event) {
				var textarea = document.querySelector('textarea');

				// Check if the clicked element is not the textarea and not a descendant of the textarea
				if (!textarea.contains(event.target)) {
					// Perform the desired action\
					if (textarea.value.length < 1) {
						document.querySelector(".paste_custom").classList.remove("cre-t-5_hide");
					}
				}
			});
		}

		function modifyButtonSection() {
			document.querySelector("#bCheckForAi").parentElement.classList.add("cre-t-5_button-container");
			document.querySelector("#bCheckForAi").parentElement.previousElementSibling.classList.add("cre-t-5_hide_desktop");
			document.querySelector("#bCheckForAi").classList.add("cre-t-5_center");
			document.querySelector("#bHumanize").classList.add("cre-t-5_hide");
			//  modify button text
			// document.querySelector("#bCheckForAi").textContent = "IS THIS DETECTED AS AI?"
			// waitForElement('#bHumanize', function(){
			//   document.querySelector("#bHumanize").textContent = "HUMANIZE THIS TEXT"
			// })


		}

		function modifySubCopy() {
			document.querySelector("#cre-lightbox-bottom-sec >div > .Text").classList.add("cre-t-5_subcopy");

			setTimeout(function () {
				document.querySelector("#cre-lightbox-bottom-sec >div > .Text").textContent = 'Instantly assess the likelihood of AI detection across all major tools:';
			}, 500);

		}

		function updateBoxFooter() {
			document.querySelector("#cre-lightbox-middle-sec #gLightmode").parentElement.classList.add("cre-t-5_box-footer");
		}

		function init() {
			setTimeout(function () {
				var isLoggedIn = localStorage.getItem("logged_in");
				if (isLoggedIn === null || isLoggedIn === "False") {
					setSessionCookie("logged_out_users", "true");
					if (!document.querySelector("." + variation_name)) {
						document.body.classList.add(variation_name);
						addTextAndCursor();
						modifyButtonSection();
						modifySubCopy();

						waitForElement(".paste_custom", function () {
							if (!window.cre_5_event) {
								eventListener();
								window.cre_5_event = true;
							}
						}, 50, 5000)

						waitForElement("#cre-lightbox-middle-sec #gLightmode", function () {
							updateBoxFooter()
						}, 50, 15000);

					}
				}
				else {
					setSessionCookie("logged_out_users", "false");
				}
			}, 500)


		}
		waitForElement('html[lang="en"] textarea', init, 50, 25000);

	} catch (e) {
		if (debug) console.log(e, "error in Test" + variation_name);
	}
})();
