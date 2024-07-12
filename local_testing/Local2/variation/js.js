(function () {
	try {
		/* main variables */
		var debug = 0;
		var variation_name = "";

		/* helper liberary */
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
				live: function (selector, event, callback, context) {
					/****Helper Functions****/
					// helper for enabling IE 8 event bindings
					function addEvent(el, type, handler) {
						if (el.attachEvent) el.attachEvent("on" + type, handler);
						else el.addEventListener(type, handler);
					}
					// matches polyfill
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
				},
				waitForElement: function (selector, trigger) {
					var interval = setInterval(function () {
						if (_$(selector).value.length) {
							clearInterval(interval);
							trigger();
						}
					}, 50);
					setTimeout(function () {
						clearInterval(interval);
					}, 15000);
				},
			};
			return function (selector) {
				return new bm(selector);
			};
		});

		function insertHtml(selector, content, position) {
			var el = document.querySelector(selector);
			if (!position) {
				position = "afterend";
			}
			if (el && content) {
				el.insertAdjacentHTML(position, content);
			}
		}

		function addClass(el, cls) {
			var el = document.querySelector(el);
			if (el) {
				el.classList.add(cls);
			}
		}

		function getCookie(cname) {
			var name = cname + "=";
			var ca = document.cookie.split(";");
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == " ") c = c.substring(1);
				if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
			}
			return "";
		}

		var helper = _$();
		/* Variation Init */

		var overlayHtml = `
			<div class="cre-t-42-wrapper">
				<div class="cre-t-42-arrow"></div>
				<div class="cre-t-42-main">
					<div class="cre-t-42-cross">
						<img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/magazinesdirect/MAG42/Meg42cross.svg" alt="" />
					</div>
					<div class="cre-t-42-content">
						<p class="cre-t-42-content-text">
							<span class="cre-t-42-content-inrText">Congratulations! </span>
							<span class="cre-t-42-content-inrText1">Your order includes our lowest-price guarantee and delivery to your door.</span>
						</p>
						<button class="cre-t-42-content-CTA">OK, got it</button>
					</div>
				</div>
			</div>
		`;

		var overlayDesktop = `<div id="cre-t-42-desktop-container" class="cre-t-42-container">${overlayHtml}</div>`;
		var overlayMobile = `<div id="cre-t-42-mobile-container" class="cre-t-42-container">${overlayHtml}</div>`;

		function setCookie() {
			document.cookie = "cre-t-42=cre-t-42-modal-triggered; path=/";
		}

		function eventHandler() {
			helper.live(".cre-t-42-cross, .cre-t-42-content-CTA", "click", function (e) {
				var cross = document.querySelectorAll(".cre-t-42-container, .your-basket-mobile");
				if (cross[0]) {
					cross.forEach(function (element) {
						element.classList.add("cre-t-42-hide");
					});
				}
				setCookie();
			});
		}
		/* Variation Init */
		function init() {
			addClass("body", "cre-t-42");

			if (!document.querySelector(".cre-t-42-container")) {
				insertHtml(".your-basket", overlayDesktop, "afterend");
				insertHtml(".your-basket-mobile", overlayMobile, "afterend");

				window._conv_q = window._conv_q || [];
				_conv_q.push(["triggerConversion", "100033191"]);
			}

			if (!window.creEventHandler) {
				eventHandler();
				window.creEventHandler = true;
			}
		}

		// if user stays on the same page
		function samePage() {
			var intervalTwo = setInterval(function () {
				if (sessionStorage.getItem("cre-t-42-count")) {
					var timerValue = parseInt(sessionStorage.getItem("cre-t-42-count"));
					timerValue++;
					sessionStorage.setItem("cre-t-42-count", timerValue);
					if (timerValue >= 30) {
						init();
						clearInterval(intervalTwo);
					}
				} else {
					sessionStorage.setItem("cre-t-42-count", 1);
				}
			}, 1000);
		}

		// if user browses different pages
		function diffPages() {
			var intervalOne = setInterval(function () {
				var timerValue = parseInt(sessionStorage.getItem("cre-t-42-count"));
				timerValue++;
				sessionStorage.setItem("cre-t-42-count", timerValue);
				if (timerValue >= 30) {
					init();
					clearInterval(intervalOne);
				}
			}, 1000);
		}

		function creCounter() {
			if (sessionStorage.getItem("cre-t-42-count")) {
				diffPages();
			} else {
				samePage();
			}
		}

		// https://www.magazinesdirect.com/your-basket/index.tjson
		function bmFetchData() {
			fetch("https://www.magazinesdirect.com/your-basket/index.tjson")
				.then((response) => {
					if (!response.ok) {
						throw new Error("Network response was not ok");
					}
					return response.json();
				})
				.then((data) => {
					// Do something with the data
					if (data.itemsCount > 0) {
						var cookiename = getCookie("cre-t-42");
						if (cookiename != "cre-t-42-modal-triggered") {
							helper.waitForElement(".your-basket ", function () {
								creCounter();
							});
						}
					}
				})
				.catch((error) => {
					console.error("There was a problem with the fetch operation:", error);
				});
		}

		if (!window.creFetchData) {
			bmFetchData();
			window.creFetchData = true;
		}

		/* Initialise variation */
	} catch (e) {
		if (debug) console.log(e, "error in Test" + variation_name);
	}
})();