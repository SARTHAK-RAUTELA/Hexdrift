(function () {
	try {
		/* main variables */
		var debug = 1;
		var variation_name = "cre-t-71";

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
				live: function (selector, event, callback, context) {
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
				},
			};
			return function (selector) {
				return new bm(selector);
			};
		});

		var helper = _$();

		function init() {
			_$("body").addClass(variation_name);
		}

		function homepage() {
			var elements = document.querySelectorAll(
				"#shopify-section-home-hi-touch-homepage .hi-touch__title , #shopify-section-home-price .affordable__title , #shopify-section-home-fifty-off .fifty-off__title , #shopify-section-mattress-guarantee .guarantee-title "
			);

			elements.forEach(function (element) {
				element.textContent = element.textContent.toLowerCase();
			});
		}

		helper.waitForElement("body ", init, 50, 15000);
		helper.waitForElement("#shopify-section-home-price .affordable__title ", homepage, 50, 15000);
	} catch (e) {
		if (debug) console.log(e, "error in Test" + variation_name);
	}
})();