(function () {
	try {
		/* main variables */
		var debug = 1;
		var variation_name = "tt-160";

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

		var ttSocialProof = `<tt-160-socialProof>
		<div class="tt-160-socialProof-container">
			<div class="tt-160-socialProof-item-heading">
					Featured on
				</div>
			<div class="tt-160-socialProof-wrapper">

			<div class="tt-160-socialProof-item">
					Featured on
				</div>
				<div class="tt-160-socialProof-item">
					<img src="https://cdn.optimizely.com/img/20611073899/c94e175d5b674673be2a6f1d7cab7b81.png" alt="tt-wired">
				</div>

				<div class="tt-160-socialProof-item">
					<img src="https://cdn.optimizely.com/img/20611073899/ff3eef077cda4b3ea3710044c42b2829.png" alt="tt-cbs-news">
				</div>

				<div class="tt-160-socialProof-item">
					<img src="https://cdn.optimizely.com/img/20611073899/aa433c7999b140fbbf7c85b8295bde0c.png" alt="tt-forbes">
				</div>
				
			</div>
		</div>
		</tt-160-socialProof>`

		function init() {
        waitForElement("body",function(){
			document.querySelector("body").classList.add(variation_name);
		})
			waitForElement("[class*='hero-header_root']+div", function () {
				if (!document.querySelector("tt-160-socialProof")) {
					document.querySelector("[class*='hero-header_root']+div").insertAdjacentHTML("beforebegin", ttSocialProof)
				}
			})
		}

		init()

		var tt160Interval = setInterval(function () {
			init()
		}, 100)
		
		setTimeout(function () {
			clearInterval(tt160Interval)
		}, 5000)

	} catch (e) {
		if (debug) console.log(e, "error in Test" + variation_name);
	}
})();