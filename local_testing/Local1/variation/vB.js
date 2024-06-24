(function () {
	try {
		/* main variables */
		var debug = 1;
		var variation_name = "mag-33";

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
				waitForElement: function (
					selector,
					trigger,
					delayInterval,
					delayTimeout
				) {
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

		var temp1Url = ["https://www.magazinesdirect.com/az-magazines/6936349/all-about-history-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/34206656/chat-subscription",
			"https://www.magazinesdirect.com/az-magazines/34206771/country-homes-and-interiors-subscription",
			"https://www.magazinesdirect.com/az-magazines/41489131/25-beautiful-homes-subscription",
			"https://www.magazinesdirect.com/az-magazines/34206691/country-life-subscription",
			"https://www.magazinesdirect.com/az-magazines/34206701/country-life-special-subscription",
			"https://www.magazinesdirect.com/az-magazines/34206751/cycling-weekly-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936449/edge-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/34207231/golf-monthly-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936529/homebuilding-renovating-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/34207256/homes-and-gardens-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936539/how-it-works-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/34207276/ideal-home-subscription",
			"https://www.magazinesdirect.com/az-magazines/34248031/livingetc-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936589/maclife-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936599/maximum-pc-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936609/metal-hammer-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/34207321/motorboat-and-yachting-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936649/period-living-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936814/photography-week-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936824/plotfinder-subscription",
			"https://www.magazinesdirect.com/az-magazines/34207381/practical-boat-owner-subscription",
			"https://www.magazinesdirect.com/az-magazines/34207421/rugby-world-subscription",
			"https://www.magazinesdirect.com/az-magazines/34207446/style-at-home-subscription",
			"https://www.magazinesdirect.com/az-magazines/34207551/the-field-subscription",
			"https://www.magazinesdirect.com/az-magazines/34207516/tv-and-satellite-week-subscription",
			"https://www.magazinesdirect.com/az-magazines/34207496/tv-times-subscription",
			"https://www.magazinesdirect.com/az-magazines/34207731/wallpaper-subscription",
			"https://www.magazinesdirect.com/az-magazines/34207726/woman-subscription",
			"https://www.magazinesdirect.com/az-magazines/34207711/woman-and-home-subscription",
			"https://www.magazinesdirect.com/az-magazines/34257846/woman-and-home-feel-good-you-subscription",
			"https://www.magazinesdirect.com/az-magazines/34257816/womans-own-subscription",
			"https://www.magazinesdirect.com/az-magazines/34207706/womans-weekly-subscription",
			"https://www.magazinesdirect.com/az-magazines/34207741/yachting-monthly-subscription",
			"https://www.magazinesdirect.com/az-magazines/41487616/decanter-subscription",
			"https://www.magazinesdirect.com/az-magazines/47028262/yachting-world-subscription"];

		var temp2Url = ["https://www.magazinesdirect.com/az-magazines/6936329/3d-world-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936359/all-about-space-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936399/classic-rock-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936419/computer-music-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936429/digital-camera-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936439/digital-photographer-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936459/four-four-two-442-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936469/future-music-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936489/guitar-techniques-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936509/guitarist-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936519/history-of-war-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/34207246/horse-and-hound-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936559/imaginefx-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936569/linux-format-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936579/macformat-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936619/nphoto-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936629/pc-gamer-uk-edition-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936659/photoplus-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936669/play-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936679/practical-caravan-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936689/practical-motorhome-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936709/prog-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936729/retro-gamer-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936739/sfx-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936759/t3-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/47083043/the-history-anthology-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936769/total-911-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936779/total-film-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936789/total-guitar-magazine-subscription",
			"https://www.magazinesdirect.com/az-magazines/6936799/what-hifi-magazine-subscription"];

		var normalUrlList = {
			"normalStructure": {
				url: ["https://www.magazinesdirect.com/az-magazines/34207726/woman-subscription",
					"https://www.magazinesdirect.com/az-magazines/34207711/woman-and-home-subscription",
					"https://www.magazinesdirect.com/az-magazines/34257846/woman-and-home-feel-good-you-subscription",
					"https://www.magazinesdirect.com/az-magazines/34257816/womans-own-subscription",
					"https://www.magazinesdirect.com/az-magazines/34207706/womans-weekly-subscription",
					"https://www.magazinesdirect.com/az-magazines/34206691/country-life-subscription",
					"https://www.magazinesdirect.com/az-magazines/34207516/tv-and-satellite-week-subscription",
					"https://www.magazinesdirect.com/az-magazines/34207731/wallpaper-subscription",
					"https://www.magazinesdirect.com/az-magazines/41487616/decanter-subscription"],
				content: "<strong>CHOOSE YOUR DEAL</strong>&nbsp;<br>	Spread the cost with easy regular payments."
			}
		}


		var helper = _$();
		// #Template 1 Chnages-----------------------------------------------
		function Template01() {
			// cancel anytime---------------- For Print---------
			helper.waitForElement("body.Temp1CRE .pricing-block.print.standard .plain.chosen .pricing p:nth-child(2)", function () {
				var cancelanytime = document.querySelector("body.Temp1CRE .pricing-block.print.standard .plain.chosen .pricing p:nth-child(2)");
				var removedCancelAnyTime = document.querySelector("body.Temp1CRE .pricing-block.print.standard .plain.chosen .pricing p:nth-child(2)").innerHTML.replace("(cancel anytime)", "");
				if (cancelanytime) {
					cancelanytime.innerHTML = removedCancelAnyTime;
				}
			}, 50, 15000)

			// cancel anytime---------------- For Digital---------
			helper.waitForElement("body.Temp1CRE #digital-pricing .pricing-block.digital #singleIssuePricing+div .pricing >p:nth-child(2)", function () {
				var cancelanytimeDigital = document.querySelector("body.Temp1CRE #digital-pricing .pricing-block.digital #singleIssuePricing+div .pricing >p:nth-child(2)");
				if (cancelanytimeDigital) {
					cancelanytimeDigital.innerHTML = cancelanytimeDigital.innerHTML.replace("(cancel anytime)", "");
				}
			}, 50, 15000)

			// Removing the "."----------------------
			helper.waitForElement("body.Temp1CRE .pricing .price-statement+p+.price-statement", function () {
				document.querySelectorAll(".pricing .price-statement+p+.price-statement").forEach(function (ele) {
					var removedPeriod = ele.innerHTML.replace("issues.", "issue");
					ele.innerText = removedPeriod;
					console.log(removedPeriod, "removedPeriod")
				})

				// document.querySelector(".pricing .price-statement+p+.price-statement").innerText = removedPeriod;

			}, 50, 15000)
		}

		function Template02() {
			// changing the delivery text------------------
			helper.waitForElement(".subscription .subscription-column:last-child .billedAt", function () {
				document.querySelector(".subscription .subscription-column:last-child .billedAt").innerHTML = "Includes delivery.";
			}, 50, 15000)
		}

		/* Variation Init */
		function init() {
			_$('body').addClass(variation_name)

			var url = window.location.href;
			var urlString = "";
			if (url.includes("_.thtml")) {
				console.log("_.thtml")
				urlString = url.split("_.thtml");
			} else {
				console.log(".thtml")
				urlString = url.split(".thtml");
			}

			normalUrlList.normalStructure.url.forEach(function(url){
				if(url.includes(urlString[0])){
					console.log("url found")
					helper.waitForElement("#lefthandside_text ul:first-of-type  li:first-child p", function () {
						console.log("element found----------------------------")
						var text = document.querySelector("#lefthandside_text ul:first-of-type li:first-child p");
						if (text) {
							text.innerHTML = normalUrlList.normalStructure.content;
						}
					}, 50, 15000)
				}
			})

			helper.waitForElement("#lefthandside_text h5", function () {

				if (window.location.href.includes("https://www.magazinesdirect.com/az-magazines/34206656/chat-subscription") ||  window.location.href.includes("https://www.magazinesdirect.com/az-magazines/34206701/country-life-special-subscription")){
					var text = document.querySelector("#lefthandside_text h5 + ul  li:first-child p");
					if (text) {
						text.innerHTML = `<strong>Choose the deal that suits you</strong> - spread the cost with easy regular payments.&nbsp;`;
					}
				}	
				else if (window.location.href.includes("https://www.magazinesdirect.com/az-magazines/34207551/the-field-subscription")){
					var text = document.querySelector("#lefthandside_text>ul:first-of-type li:first-child p");
					if (text) {
						text.innerHTML = `<p><strong>CHOOSE THE DEAL THAT SUITS YOU</strong>&nbsp;- spread the cost with easy regular payments.</p>`;
					}
				}
			}, 50, 15000)

			//Adding a class if url includes the first templete--------------
			if (temp1Url.includes(urlString[0])) {

				document.querySelector("body").classList.add("Temp1CRE");
				
			}
			//Adding a class if url includes the Second templete--------------
			if (temp2Url.includes(urlString[0])) {
				document.querySelector("body").classList.add("Temp2CRE");
			}
			// For Template 01-----------------------
			helper.waitForElement(".Temp1CRE", function () {
				Template01()
			}, 50, 15000)
			// For Template 02------------------------
			helper.waitForElement(".Temp2CRE", function () {
				Template02();
			}, 50, 15000)

			
		}

		/* Initialise variation */
		helper.waitForElement("body", init, 50, 15000);
	} catch (e) {
		if (debug) console.log(e, "error in Test" + variation_name);
	}
})();
