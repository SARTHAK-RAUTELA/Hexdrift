(function () {
	try {
		/* main variables */
		var debug = 1;
		var variation_name = "cre-t-253_Variation";

		function waitForElement(selector, trigger) {
			var interval = setInterval(function () {
				if (
					document &&
					document.querySelector(selector) &&
					document.querySelectorAll(selector).length > 0
				) {
					clearInterval(interval);
					trigger();
				}
			}, 50);
			setTimeout(function () {
				clearInterval(interval);
			}, 15000);
		}

		waitForElement("#product-catalog-container-",function(){
			// Adding variation class to body---
			document.querySelector("body").classList.add(variation_name)

			// Adding hideProduct class based on the selector-----
			document.querySelectorAll("#product-catalog-container-")[0].classList.add("cre-t-253-hide-product")
		})


	} catch (e) {
		if (debug) console.log(e, "error in Test" + variation_name);
	}
})();
