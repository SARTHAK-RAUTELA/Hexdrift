(function () {
	try {
	  // Main variables
	  var debug = 0;
	  var variation_name = "seamwork14";
	  // Define waitForElement function
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
  
	  function getCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
		  var c = ca[i];
		  while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		  if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
		}
		return null;
	  }
  
	  // Join Html
	  var crejoin = `
		  <div class="Cre-Join">
			  <div class="CreGuarantee">
				  <div class="">
					  <h3>30-Day Time For Sewing Guarantee</h3>
					  <p>We know you'll love being part of this special community. But if you find that you just can't find the time to make the most of it, just email us for a full refund in your first 30 days.</p>
				  </div>
			  </div>
		  </div>`;
  
  
	  /* Variation Init */
	  function init() {
		if (getCookie("NonMember")) {
  
		  document.querySelector("body").classList.add("seamwork14");
  
		  // Inserting Produt details (Number/ SKILL/ Formate) under Add to cart button------------------
		  waitForElement(".product--details + div form#checkout", function () {
  
			waitForElement(".js--external-links + .product--details", function () {
			  var productDetails = document.querySelector(".js--external-links + .product--details");
  
			  if (!document.querySelector(".product--details + div form#checkout .product--details")) {
				document.querySelector(".product--details + div form#checkout ").insertAdjacentElement("afterend", productDetails)
			  }
			}, 50, 15000)
  
			// Shifting the "Projector Files Included" text under add to cart CTA,
			waitForElement(".js--external-links p:last-child", function () {
			  var ProjectorFilesIncludedText = document.querySelector(".js--external-links p:last-child");
			  // If there text conatins  "Projector Files Included"------------
			  if (ProjectorFilesIncludedText.innerText == "Projector Files Included") {
				ProjectorFilesIncludedText.classList.add("creIncluded");
  
				waitForElement("div form#checkout + .product--details", function () {
				  if (!document.querySelector(".product--details + div form#checkout .product--details .creIncluded")) {
					document.querySelector("div form#checkout + .product--details").insertAdjacentElement("afterbegin", ProjectorFilesIncludedText)
				  }
				}, 50, 15000)
			  }
			}, 50, 15000)
  
  
		  })
  
		  // adding new content------------------
		  waitForElement('div[data-turbo="false"] a[href="/join#pricing"]', function () {
			if (!document.querySelector(".cre-AccessText")) {
			  document.querySelector('div[data-turbo="false"] a[href="/join#pricing"]').insertAdjacentHTML("beforebegin", "<p class='cre-AccessText'>Access this pattern and 200+ more for free with a Seamwork membership!</p>")
			}
  
			if (!document.querySelector(".Cre-Join")) {
			  document.querySelector('div[data-turbo="false"] a[href="/join#pricing"]').insertAdjacentHTML("afterend", crejoin)
			}
		  })
  
		}
	  }
	  /* Initialise variation */
	  waitForElement(".simple-format.js--external-links p:first-child", init);
	} catch (e) {
	  if (debug) console.log(e, "error in Test " + variation_name);
	}
  })();