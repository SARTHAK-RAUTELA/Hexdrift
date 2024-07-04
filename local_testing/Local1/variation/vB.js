(function () {
	try {
		/* main variables */
		var debug = 1;
		var variation_name = "gendergp1";

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

	var boxitem = `<div class="box_item">
		<h2>What you should do next...</h2>
		 <h5>1. Enjoy more FREE resources</h5>
		 <p><a href="https://www.gendergp.com/blog/">Visit our blog</a> to read more about things that are impacting the trans community. This page is regularly updated, so check in often for the latest updates.</p>
         <h5>2. Learn how you can transition fast, easily, and compassionately with GenderGP’s gender-affirming care...</h5>
		 <p>Whether you’re just starting out on your transition journey, or are some way through, you’ve likely already faced long waiting lists and a lack of clear information. </p>
		 <p>At GenderGP, we get it. We’re here to make things easier. </p>
		 <p>Being a member of our service gives you immediate access to care and you can receive your prescription in as little as 3-5 days...</p>
		 <a class="Crelearcta " href="https://www.gendergp.com/">Learn More</a>

	     </div>`;
   

		var helper = _$();

		/* Variation Init */
		function init() {
			_$("body").addClass(variation_name);
			
			
			if (!document.querySelector(".box_item")) {
				document.querySelector("#left-area article").insertAdjacentHTML("afterend", boxitem);
			}
		}

		/* Initialise variation */
		helper.waitForElement("#left-area article", init, 50, 15000);
	} catch (e) {
		if (debug) console.log(e, "error in Test" + variation_name);
	}
})();