(function () {
	try {
		/* main variables */
		var debug = 0;
		var variation_name = "TT-155";
		/* all Pure helper functions */
		function waitForElement(selector, trigger, delayInterval, delayTimeout) {
			var interval = setInterval(function () {
				if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
					clearInterval(interval);
					trigger();
				}
			}, delayInterval);
			setTimeout(function () {
				clearInterval(interval);
			}, delayTimeout);
		}
	
		
	   
		/* Variation Init */
		function init() {
			document.querySelector("body").classList.add(variation_name);

			if (document.querySelector('[aria-label="Breadcrumb"] ol li:last-child p')) {
        var profession_content = document.querySelector(`[aria-label="Breadcrumb"] ol li:last-child p`).textContent;
          
       
        if (window.location.href.startsWith("https://www.thumbtack.com/k/")) {
          document.querySelector(`[class*="hero-header_filters"] [class*="Type_title3"]`).textContent =
            "Hire a highly-rated " + profession_content + " pro with confidence.";
        } else {
          document.querySelector(`[class*="hero-header_filters"] [class*="Type_title3"]`).innerHTML =
            "Hire a highly-rated " + profession_content + " pro with confidence.";
        }
        if (document.querySelector('[class*="hero-header_rootFlex"]>[class*=hero-header_heroHeaderExtendedHeight] picture+div h1')) {
          document.querySelector('[class*="hero-header_rootFlex"]>[class*=hero-header_heroHeaderExtendedHeight] picture+div h1').innerHTML =
            "Hire a highly-rated " + profession_content + " <span>pro with confidence.</span>";
        }
        if (document.querySelector('[class*="hero-header_heroHeaderHeight"] [class*="hero-header_flexHeaderContentTitle"]')) {
          document.querySelector('[class*="hero-header_heroHeaderHeight"] [class*="hero-header_flexHeaderContentTitle"]').textContent =
            "Hire a highly-rated " + profession_content + " pro with confidence.";
        }
        
		  } 
      document.querySelector('[class*="hero-header_filters"]  p').innerHTML = "Confirm your location and browse pros — you've got this.";
       
		   
		   
		  
		 
		}
		
		/* Initialise variation */
		function thumbtackTest155(list, observer) {
			list.getEntries().forEach((entry) => {
				if (entry.entryType === "mark" && entry.name === "afterHydrate") {
					observer.disconnect();
					clearInterval(test144Interval);
					waitForElement("body", init, 50, 15000);
					window.isHydrated = true;
				}
			});
		}
		if (!window.isHydrated) {
			var test144Interval = setInterval(function () {
				waitForElement("body", init, 50, 15000);
			}, 50);
			setTimeout(function () {
				clearInterval(test144Interval);
			}, 3000);
			const observer = new PerformanceObserver(thumbtackTest155);
			observer.observe({ entryTypes: ["mark"] });
		} else {
			waitForElement("body", init, 50, 15000);
		}
	} catch (e) {
		if (debug) console.log(e, "error in Test" + variation_name);
	}
  })();