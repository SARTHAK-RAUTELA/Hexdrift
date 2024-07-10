(function () {
	try {
		/* main variables */
		var debug = 1;
		var variation_name = "cre-t-193";

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
		/* Variation Init */
		function init() {
			_$("body").addClass("cre-t-193-app-download");
			//body.cre-t-193-app-download .s-curve-container .s-curve-card__description [href*="/ait-admissions"]
		}
		helper.waitForElement('.s-curve-container .s-curve-card__description [href*="/ait-admissions"]', init, 50, 25000);
	} catch (e) {
		if (debug) console.log(e, "error in Test" + variation_name);
	}
})();