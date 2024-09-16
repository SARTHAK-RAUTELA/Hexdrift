if (!window.statuscaketest30) {
	window.statuscaketest30 = true;
	(function () {
		try {
			/* main variables */
			var debug = 1;
			var variation_name = "CRE-T-30";
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
					append: function (v) {
						return this.each(function (i) {
							i.insertAdjacentHTML('beforeEnd', v);
						});
					},
					prepend: function (v) {
						return this.each(function (i) {
							i.insertAdjacentHTML("afterBegin", v);
						});
					},
					insertAfter: function (v) {
						return this.each(function (i) {
							i.insertAdjacentHTML("afterEnd", v);
						});
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
					live: function (selector, event, callback, context) {
						/****Helper Functions****/
						// helper for enabling IE 8 event bindings
						function addEvent(el, type, handler) {
							if (el.attachEvent) el.attachEvent("on" + type, handler);
							else el.addEventListener(type, handler);
						}
						// matches polyfill
						this && this.Element &&
							(function (ElementPrototype) {
								ElementPrototype.matches =
									ElementPrototype.matches ||
									ElementPrototype.matchesSelector ||
									ElementPrototype.webkitMatchesSelector ||
									ElementPrototype.msMatchesSelector ||
									function (selector) {
										var node = this,
											nodes = (
												node.parentNode || node.document
											).querySelectorAll(selector),
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
			function addScript(src, isCSS) {
				const element = isCSS ? document.createElement('link') : document.createElement('script');
				if (isCSS) {
					element.rel = 'stylesheet';
					element.type = 'text/css';
					element.href = src;
				} else {
					element.type = 'text/javascript';
					element.src = src;
				}
				document.head.appendChild(element);
			}
			addScript("https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.8.4/swiper-bundle.min.js", false);
			addScript("https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.8.4/swiper-bundle.min.css", true);
			var FirstSliderImageUrls = [
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscakeT46/accenture-bg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscakeT46/Akamai_Technologies__Inc.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscakeT46/asana-bg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscakeT46/audi-bg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscakeT46/betfair-bg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscakeT46/delivery_hero-bg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscakeT46/DOJ-bg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscakeT46/elastic-bg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscakeT46/GamCom-bg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscakeT46/Group1.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscakeT46/harvard_university-bg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscakeT46/hp-bg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscakeT46/ibm-bg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscake/jetbrains-removebg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscake/lastminute-removebg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscake/mastercard-removebg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscake/medium-removebg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscake/Mercedes-removebg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscake/Monster-removebg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscake/Moodys-removebg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscake/Netflix-removebg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscake/Nikkei-removebg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscake/RBS-removebg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscake/Roche-removebg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscakeT46/invesco-bg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscakeT46/lastminute-bg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscakeT46/telefonica-bg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscakeT46/ticketmaster-bg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscakeT46/TomTom-bg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscakeT46/universal_music-bg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscakeT46/university_of_cambridge-bg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscakeT46/Verizon-bg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscakeT46/vw-bg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscakeT46/zendesk-bg-preview.png",
				"https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T46/statuscakeT46/zurich-bg-preview.png",
			];
			var SecondSliderImageUrls =
				[
					'https://www.statuscake.com/wp-content/uploads/2020/11/DataDog.png',
					'https://www.statuscake.com/wp-content/uploads/2020/11/Discord.png',
					'https://www.statuscake.com/wp-content/uploads/2020/11/Mattermost.png',
					'https://www.statuscake.com/wp-content/uploads/2020/11/Microsoft_Teams.png',
					'https://www.statuscake.com/wp-content/uploads/2020/11/opengenie.png',
					'https://www.statuscake.com/wp-content/uploads/2020/11/PagerDuty.png',
					'https://www.statuscake.com/wp-content/uploads/2020/08/phone-call.png',
					'https://www.statuscake.com/wp-content/uploads/2020/11/PushBullet.png',
					'https://www.statuscake.com/wp-content/uploads/2020/11/Pushover.svg',
					'https://www.statuscake.com/wp-content/uploads/2020/11/Slack.png',
					'https://www.statuscake.com/wp-content/uploads/2020/11/Telegram.png',
					'https://www.statuscake.com/wp-content/uploads/2020/11/VictorOps.png'
				]
			function waitForSwiper(trigger) {
				var interval = setInterval(() => {
					if (typeof Swiper !== 'undefined') {
						clearInterval(interval);
						trigger();
					}
				});
				setTimeout(() => {
					clearInterval(interval);
				}, 15e3);
			}
			function shuffleArray(array) {
				for (let i = array.length - 1; i > 0; i--) {
					var j = Math.floor(Math.random() * (i + 1));
					[array[i], array[j]] = [array[j], array[i]];
				}
				return array;
			}
			var shuffledImageUrls = shuffleArray(FirstSliderImageUrls);
			function extractAltTagFromUrl(url) {
				var filename = url.substring(url.lastIndexOf('/') + 1);
				var altTag = filename.substring(0, filename.lastIndexOf('.'));
				return altTag;
			}
			function buildRandomizedSwiperSlides(imageArray) {
				var html = "";
				imageArray.forEach(function (link, i) {
					var altTag = extractAltTagFromUrl(link);
					html += `
        <div class="swiper-slide">
        <img src="${link}" alt="${altTag}"/>
        </div>`;
				});
				return html;
			}
			function initializeSwiper() {
				var swiper = new Swiper(".swiper-container-CRE-T30", {
					slidesPerView: 3,
					spaceBetween: 30,
					loop: true,
					autoplay: {
						delay: 2000,
					},
					breakpoints: {
						767: {
							slidesPerView: 8,
							spaceBetween: 30,
						},
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
				});
			}
			function initializeSwiperTwo() {
				var swiper = new Swiper(".second-swiper-container-CRE-T30", {
					slidesPerView: 3,
					spaceBetween: 30,
					loop: true,
					autoplay: {
						delay: 2000,
					},
					breakpoints: {
						767: {
							slidesPerView: 8,
							spaceBetween: 30,
						},
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
				});
			}
			const htmlTemplate = `
        <div class="Cremain">
        <div class="Cre-banner">
        <div class="Cre-container">
        <p class="topper">Comprehensive Monitoring for Websites, APIs, and Servers - Uptime, PageSpeed, Domains, SSL, and more...</p>
        <h1>Find and resolve website issues before your<br> customers (and your CFO) even notice!</h1>
        <div class="Bnnerimg"> <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T+30/hero-banner.svg"></div>
        <p>The <b>only</b> complete monitoring solution backed by <b>expert live support</b> <br> to diagnose and fix issues fast</p>
        <h3>Set up your first monitor in less than 60 seconds - FREE</h3>
        <div class="Cre-ctabanner">
        <a href="https://app.statuscake.com/Try/trial.php?Plan=Business"> Try it FREE for 7 days  <br><span>No credit card needed</span></a>
        <a href="https://www.statuscake.com/pricing/">See Plans and Pricing</a>
        </div>
        <div class="Cre-bannerbottom">
        <div class="item">
        <h3>Exceed your internal SLAs</h3>
        <p>Maximize operational uptime to protect revenue, reputation, and rankings</p>
        </div>
        <div class="item">
        <h3>Understand real user experience</h3>
        <p>Monitor performance where it matters most - from where your customers actually are</p>
        </div>
        <div class="item">
        <h3>Anticipate and prevent issues</h3>
        <p>With Linux server monitoring and historical trend analysis</p>
        </div>
        <div class="item">
        <h3>Minimize on-call fatigue</h3>
        <p>We guarantee you won't receive false alerts</p>
        </div>
        </div>
        </div>
        </div>
        <div class="Cretrustpilot">
        <div class="Cre-container slide-Container-CRE-T30">
        <h3>Trusted by over 120,000 customers, from small businesses to enterprise, including </h3>
        <div class="container-CRE-T30">
        <div class="swiper-container-CRE-T30">
        <div class="swiper-wrapper" id="swiper-wrapper">
        ${buildRandomizedSwiperSlides(shuffledImageUrls)}
        </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        </div>
        </div>
        </div>
        <div class="Cretab">
        <div class="Cre-container">
        <ul>
        <li class="activenav"> <a href="#section1" >
        Who StatusCake is for  </a>
        </li>
        <li><a href="#section2">
        Why StatusCake  </a>
        </li>
        <li> <a href="#section3">
        Monitoring </a>
        </li>
        <li> <a href="#section4">
        Diagnose and fix </a>
        </li>
        <li> <a href="#section5">
        Integrations</a>
        </li>
        </ul>
        </div>
        </div>
        <div class="Cretabrelatedcontent">
        <div id="section1" class="Who_StatusCake">
        <div class="Cre-container">
        <div class="Headingorsbu">
        <h3>Who is StatusCake for?</h3>
        <h2>If your business relies on your website or app, then <br> you can rely on StatusCake</h2>
        </div>
        <div class="Aboutproduct">
        <h3>Tired of overpriced monitoring services that still lack features?</h3>
        <p>Get more features at substantially lower cost than <br> alternatives like uptime.com, Pingdom, and UptimeRobot</p>
        </div>
        <div class="Cretable">
        <table>
        <thead>
        <tr>
        <th scope="col"></th>
        <th scope="col">StatusCake</th>
        <th scope="col">Uptime Robot</th>
        <th scope="col">Pingdom</th>
        <th scope="col">Uptime.com</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <th class="info" scope="row">Uptime monitoring</th>
        <td class="check">Yes</td>
        <td class="check">Yes</td>
        <td class="check">Yes</td>
        <td class="check">Yes</td>
        </tr>
        <tr>
        <th class="info" scope="row">Domain monitoring</th>
        <td class="check">Yes</td>
        <td class="check">Yes</td>
        <td class="check cre-no-column">No</td>
        <td class="check">Yes</td>
        </tr>
        <tr>
        <th class="info" scope="row">Page speed monitoring </th>
        <td class="check">Yes</td>
        <td class="check cre-no-column">No</td>
        <td class="check">Yes</td>
        <td class="check">Yes</td>
        </tr>
        <tr>
        <th class="info" scope="row">Server monitoring</th>
        <td class="check">Yes</td>
        <td class="check cre-no-column">No</td>
        <td class="check">Yes</td>
        <td class="check">Yes</td>
        </tr>
        <tr>
        <th class="info" scope="row">SSL monitoring</th>
        <td class="check">Yes</td>
        <td class="check">Yes</td>
        <td class="check cre-no-column">No</td>
        <td class="check">Yes</td>
        </tr>
        </tr>
        <th class="info" scope="row">Typical customer with 100 uptime checks</th>
        <td class="check">$24.99/mo</td>
        <td class="check">$34/mo</td>
        <td class="check">$120/mo</td>
        <td class="check">$455/mo</td>
        </tr>
        </tbody>
        </table>
        </div>
        <div class="TabContent left">
        <div class="product-section">
        <h3>Need to monitor everything from uptime to page speed?</h3>
        <p>Get <b>Uptime, Page Speed, Domain, SSL, </b>and  <b>Server</b> monitoring all in one suite with StatusCake.</p>
        </div>
        <div class="Product-image">
        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007477/T30_img1.png">
        </div>
        </div>
        <div class="TabContent right">
        <div class="product-section">
        <h3>Don't have the time or expertise
        for complex configurations?</h3>
        <p>StatusCake offers an <b>easy setup process,</b> perfect for
        those with limited technical resources.</p>
        <p>Already using Pingdom? You can <b>automatically migrate</b> to
        StatusCake in just a few clicks!</p>
        </div>
        <div class="Product-image">
        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007477/T30_img2.png">
        </div>
        </div>
        <div class="TabContent left">
        <div class="product-section">
        <h3>Struggling to pinpoint the root
        causes of website issues?</h3>
        <p>StatusCake provides <b>detailed insights</b> to easily identify
        and resolve problems.</p>
        </div>
        <div class="Product-image">
        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007477/T30_img3.png">
        </div>
        </div>
        <div class="TabContent right">
        <div class="product-section">
        <h3>Fed up with constant false
        alarms?</h3>
        <p>StatusCake ensures you only get <b>alerts that matter,</b>
        reducing on-call team fatigue.</p>
        </div>
        <div class="Product-image">
        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007477/T30_img4.png">
        </div>
        </div>
        <div class="TabContent left">
        <div class="product-section">
        <h3>Need to involve multiple users
        for teamwork?</h3>
        <p>StatusCake supports <b>team collaboration</b> for efficient
        monitoring.</p>
        </div>
        <div class="Product-image">
        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007477/T30_img5.png">
        </div>
        </div>
        <div class="TabContent right">
        <div class="product-section">
        <h3>Looking to track and analyze
        past performance?</h3>
        <p>StatusCake offers comprehensive <b>historical data</b> to help
        <b> spot recurring issues</b> and patterns.</p>
        </div>
        <div class="Product-image">
        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007477/T30_img6.png">
        </div>
        </div>
        <div class="TabContent left">
        <div class="product-section">
        <h3>Worried about your growing
        website needs?</h3>
        <p>StatusCake <b>scales effortlessly</b> with your business,
        ensuring continuous and comprehensive coverage as you
        grow.</p>
        </div>
        <div class="Product-image">
        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007477/T30_img7.png">
        </div>
        </div>
        </div>
        <div class="youare60second">
        <div class="Cre-container">
        <div class="Headingorsbu">
        <h2>You're just 60 seconds away </h2>
        </div>
        <h5>from the protection of the most powerful, accurate,<br> and best-value monitoring suite on the market</h5>
        <p>Ensure superior site performance with robust global monitoring, <br> real-time alerts and instant live support</p>
        <ul>
        <li><b>Try it free for 7 Days</b> - risk-free </li>
        <li><b> No credit card needed</b> - get started straight away </li>
        <li><b>Instant live support</b> - if you need any to help set you up</li>
        </ul>
        <div class="cre_try">
        <a href="https://app.statuscake.com/Try/trial.php?Plan=Business" class='CREtryItFree'> Try it FREE for 7 days  <br><span>No credit card needed</span></a>
        <p>or</p>
        <a class="requestdemo" href="https://calendly.com/dorina-/20min/?month=2024-06"> Request a Demo</a>
        </div>
        </div>
        </div>
        </div>
        <!-------------------- Why_StatusCake -------------------------------------->
        <div id="section2" class="Why_StatusCake">
        <div class="Cre-container">
        <div class="Headingorsbu">
        <h3>Why StatusCake</h3>
        <h2>Monitor everything that matters <br>
        to you, in one tool</h2>
        </div>
        <div class="TabContent left">
        <div class="product-section">
        <h3>Maximize performance and
        protect
        your revenue in just 60
        seconds</h3>
        <p>Go beyond basic uptime checks with a comprehensive
        solution that includes key performance indicators, page
        load times, and user experience metrics.</p>
        <P>Track uptime, domains, SSL, page speed, and utilization
        metrics across Websites, APIs and servers.</p>
        </div>
        <div class="Product-image">
        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007477/T30_img8.png">
        </div>
        </div>
        <div class="TabContent right">
        <div class="product-section">
        <h3>Get accurate alerts on any platform and no false positives,
        guaranteed</h3>
        <p>
        Get precise, timely alerts that differentiate real issues
        from false positives with our unique auto-verification
        technology preventing unnecessary wake-up calls and
        alert fatigue, and receive these critical notifications across
        various platforms like Email, Slack, and webhooks.</p>
        </div>
        <div class="Product-image">
        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007477/T30_img9.png">
        </div>
        </div>
        <div class="TabContent left">
        <div class="product-section">
        <h3>Resolve Issues rapidly with
        diagnosis reports</h3>
        <p>
        Rapidly address downtime with instan,t accurate alerts
        and clear diagnoses, complemented by expert live
        support, to minimize disruption and avert revenue loss
        and customer dissatisfaction.</p>
        </div>
        <div class="Product-image">
        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007477/T30_img10.png">
        </div>
        </div>
        <div class="TabContent right">
        <div class="product-section">
        <h3>Get help when you need it most</h3>
        <p>
        StatusCake not only alerts you to one of the 600+ reasons
        a website might go down - including status codes and test
        locations - but also provides expert assistance on standby
        via live chat to help you pinpoint the root cause.</p>
        </div>
        <div class="Product-image">
        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007477/T30_img11.png">
        </div>
        </div>
        <div class="TabContent left">
        <div class="product-section">
        <h3>Identify and prevent issues
        before they happen</h3>
        <p>
        While can't actually give you a crystal ball, we can help
        you monitor server loads to proactively identify and
        mitigate potential issues before they lead to downtime -
        minimize the impact on users and business operations,
        optimize resource usage, and reduce operational costs.</p>
        <p>Super simple set-up with just a single line of code.</p>
        </div>
        <div class="Product-image">
        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007477/T30_img12.png">
        </div>
        </div>
        <div class="TabContent right">
        <div class="product-section">
        <h3>Safeguard your customer
        experience</h3>
        <p>
        Ensure continuous user access to content, products, and
        services, deliver seamless navigation and increased
        customer satisfaction and loyalty.</p>
        </div>
        <div class="Product-image">
        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007477/T30_img13.png">
        </div>
        </div>
        </div>
        <div class="youare60second">
        <div class="Cre-container">
        <div class="Headingorsbu">
        <h2>You're just 60 seconds away </h2>
        </div>
        <h5>from the protection of the most powerful, accurate,<br> and best-value monitoring suite on the market</h5>
        <p>Ensure superior site performance with robust global monitoring, <br> real-time alerts and instant live support</p>
        <ul>
        <li><b>Try it free for 7 Days</b> - risk-free. </li>
        <li><b> No credit card needed</b> - get started straight away </li>
        <li><b>Instant live support</b> - if you need any to help set you up</li>
        </ul>
        <div class="cre_try">
        <a href="https://app.statuscake.com/Try/trial.php?Plan=Business" class='CREtryItFree'> Try it FREE for 7 days  <br><span>No credit card needed</span></a>
        <p>or</p>
        <a class="requestdemo" href="https://calendly.com/dorina-/20min/?month=2024-06"> Request a Demo</a>
        </div>
        </div>
        </div>
        </div>
        <!-------------------- Monitoring -------------------------------------->
        <div id="section3" class="Monitoring">
        <div class="Cre-container">
        <div class="Headingorsbu">
        <h3>How it works</h3>
        <h2>Uptime Monitoring</h2>
        <h4>Downtime happens. Are you confident your monitoring suite will <br> catch it
        every time, AND help get you back up and running faster?</h4>
        </div>
        <div class="TabContent left">
        <div class="product-section">
        <h3>HTTP, HEAD, TCP, DNS, SMTP,
        SSH, PING, and PUSH</h3>
        <p>Monitor everything you care about from basic
        accessibility, security, and email functionality, to real-time
        status monitoring.</p>
        </div>
        <div class="Product-image">
        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007477/T30_img14.png">
        </div>
        </div>
        <div class="TabContent right">
        <div class="product-section">
        <h3>Monitor from 43 locations in 30
        countries</h3>
        <p>
        Check website availability from where your customers
        actually are in the world to understand how real users
        experience your web site in your target regions.</p>
        </div>
        <div class="Product-image">
        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007477/T30_img15.png">
        </div>
        </div>
        <div class="TabContent left">
        <div class="product-section">
        <h3>Constant check rates available</h3>
        <p>
        The fastest check rates in the industry - choose from
        Constant, 30-second or 60-second check rates.</p>
        </div>
        <div class="Product-image">
        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007477/T30_img16.png">
        </div>
        </div>
        <div class="TabContent right">
        <div class="product-section">
        <h3>We confirm downtime with
        multiple servers before
        alerting you</h3>
        <p>
        Our unique auto-verification technology, instantly rechecks
        and confirms downtime with 4 different servers before
        sending an alert.</p>
        </div>
        <div class="Product-image">
        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007477/T30_img17.png">
        </div>
        </div>
        </div>
        <div class="youare60second">
        <div class="Cre-container">
        <div class="Headingorsbu">
        <h2>You're just 60 seconds away </h2>
        </div>
        <h5>from the protection of the most powerful, accurate,<br> and best-value monitoring suite on the market</h5>
        <p>Ensure superior site performance with robust global monitoring, <br> real-time alerts and instant live support</p>
        <ul>
        <li><b>Try it free for 7 Days</b> - risk-free. </li>
        <li><b> No credit card needed</b> - get started straight away </li>
        <li><b>Instant live support</b> - if you need any to help set you up</li>
        </ul>
        <div class="cre_try">
        <a href="https://app.statuscake.com/Try/trial.php?Plan=Business" class='CREtryItFree'> Try it FREE for 7 days  <br><span>No credit card needed</span></a>
        <p>or</p>
        <a class="requestdemo" href="https://calendly.com/dorina-/20min/?month=2024-06"> Request a Demo</a>
        </div>
        </div>
        </div>
        </div>
        <!-------------------- Monitoring -------------------------------------->
        <div id="section4" class="Diagnose__fix">
        <div class="Cre-container">
        <div class="Headingorsbu">
        <h2>Easy Diagnosis and Fix</h2>
        <h3>Instant alerts with easy-to-understand reports, and live <br>support to help
        solve the issue if you need it</h3>
        </div>
        <div class="TabContent left">
        <div class="product-section">
        <h3>Get status codes, Ping, and test
        locations</h3>
        <p>StatusCake not only alerts you to one of the 600+ reasons
        a website might go down, including status codes and test
        locations but also provides expert assistance on standby
        via live chat to help you pinpoint the root cause quickly.</p>
        </div>
        <div class="Product-image">
        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007477/T30_img18.png">
        </div>
        </div>
        <div class="TabContent right">
        <div class="product-section">
        <h3>Unlimited customer support as
        and when you need it</h3>
        <p>Need urgent help diagnosing an issue - ping us on live
        chat and we'll put our best people on it to get you back up
        and running in no time!</p>
        </div>
        <div class="Product-image">
        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007477/T30_img19.png">
        </div>
        </div>
        </div>
        <div class="youare60second">
        <div class="Cre-container">
        <div class="Headingorsbu">
        <h2>You're just 60 seconds away </h2>
        </div>
        <h5>from the protection of the most powerful, accurate,<br> and best-value monitoring suite on the market</h5>
        <p>Ensure superior site performance with robust global monitoring, <br> real-time alerts and instant live support</p>
        <ul>
        <li><b>Try it free for 7 Days</b> - risk-free. </li>
        <li><b> No credit card needed</b> - get started straight away </li>
        <li><b>Instant live support</b> - if you need any to help set you up</li>
        </ul>
        <div class="cre_try">
        <a href="https://app.statuscake.com/Try/trial.php?Plan=Business" class='CREtryItFree'> Try it FREE for 7 days  <br><span>No credit card needed</span></a>
        <p>or</p>
        <a class="requestdemo" href="https://calendly.com/dorina-/20min/?month=2024-06"> Request a Demo</a>
        </div>
        </div>
        </div>
        </div>
        <!-------------------- Monitoring -------------------------------------->
        <div id="section5" class="Integrations">
        <div class="Cre-container">
        <div class="Headingorsbu">
        <h2>Page Speed Monitoring</h2>
        <p>Identify performance bottlenecks and ensure your websites or <br> apps to
        deliver an optimal user experience</p>
        </div>
        <div class="TabContent">
        <div class="Product-image">
        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007477/T30_img20.png">
        </div>
        <div class="product-section">
        <ul>
        <li>Check key pages from multiple global locations</li>
        <li>Observe and analyze page speed trends over time</li>
        <li>Set performance thresholds for any page and get
        instant alerts when they are exceeded</li>
        <li>Test on multiple devices and connections via throttling </li>
        <li>Discover how real users experience your site</li>
        </ul>
        </div>
        </div>  
        <div class="Headingorsbu">
        <h2>Domain Monitoring</h2>
        <p>Keep your domain safe from threats - get alerts when your domain<br>
        records change, and we'll even remind you before it's time to renew!</p>
        </div>
        <div class="TabContent">
        <div class="product-section">
        <ul>
        <li>Instanly view WHOIS and other domain records in real-time</li>
        <li>Get real-time alert on any changes</li>
        <li>Find out if your domain appears on known domain blacklists</li>
        <li>Get email & SMS reminders when your domain is about to expire - 30 days, 14 days, 7 days, and 24 hours before</li>
        </ul>
        </div>
        <div class="Product-image">
        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007477/T30_img21.png">
        </div>
        </div>
        <div class="Headingorsbu">
        <h2>Linux Server Monitoring</h2>
        <p>Monitor server loads to proactively identify and mitigate potential issues<br>
        before they lead to downtime, and find the root causes of any issues</p>
        </div>
        <div class="TabContent">
        <div class="Product-image">
        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007477/T30_img22.png">
        </div>
        <div class="product-section">
        <p>Set thresholds for Memory, CPU and disk utilization, and
        choose to be alerted instantly or only if your server
        exceeds the threshold a set number of times - so you
        don't get bombarded if performance fluctuates.</p>
        </div>
        </div>
        <div class="Headingorsbu">
        <h2>SSL Monitoring</h2>
        <p>Maintain trust and rank higher with SSL monitoring. Get alerts ahead of<br>
        time so you never forget to renew your certificate</p>
        </div>
        <div class="TabContent">
        <div class="product-section">
        <p>Check certificate validity, revocation status, integrity, cipher suite strength, protocol currency, Perfect Forward
        Secrecy, and Mixed Content presence to ensure robust
        SSL security.
        </p>
        <ul>
        <li>Get alerted if your SSL certificate is invalid, expired or
        revoked
        </li>
        <li>Get email and SMS reminders 30 days. 7 days. and 24
        hours  before your certificate expires
        </li>
        <li>Know when insecure resources are added to your site
        </li>
        <li>Quickly diagnose SSL configuration concerns and
        view them all in one place </li>
        </ul>
        </div>
        <div class="Product-image">
        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007477/T30_img23.png">
        </div>
        </div>
        <div class="Headingorsbu">
        <h2>Reporting</h2>
        <p>Customize reporting dashboards, create & send white-label reports, view<br>
        historical trends and track all changes to your monitoring set up</p>
        </div>
        <div class="TabContent">
        <div class="Product-image">
        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007477/T30_img24.png">
        </div>
        <div class="product-section">
        <ul>
        <li>Customize your dashboard to keep all the most
        important insights at your fingertips
        </li>
        <li>Easily set up automated email reports for Uptime,
        Page Speed. SSL Domain and Server Monitoring
        </li>
        <li>Email any report from your dashboard in a few clicks
        </li>
        <li>Customize and brand any alerts and reporting emails
        that you send </li>
        <li>Utilize historical uptime data to analyze patterns. and
        identify recurring issues
        </li>
        <li>Track all changes and updates made by your team in
        one easy report</li>
        </ul>
        </div>
        </div>
        </div>
        <div class="youare60second">
        <div class="Cre-container">
        <div class="Headingorsbu">
        <h2>You're just 60 seconds away </h2>
        </div>
        <h5>from the protection of the most powerful, accurate, <br> and best-value monitoring suite on the market</h5>
        <p>Ensure superior site performance with robust global monitoring, <br> real-time alerts and instant live support</p>
        <ul>
        <li><b>Try it free for 7 Days</b> - risk-free. </li>
        <li><b> No credit card needed</b> - get started straight away </li>
        <li><b>Instant live support</b> - if you need any to help set you up</li>
        </ul>
        <div class="cre_try">
        <a href="https://app.statuscake.com/Try/trial.php?Plan=Business" class='CREtryItFree'> Try it FREE for 7 days  <br><span>No credit card needed</span></a>
        <p>or</p>
        <a class="requestdemo" href="https://calendly.com/dorina-/20min/?month=2024-06"> Request a Demo</a>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div class="GetAlerts">
        <div class="Cre-container">
        <div class="Headingorsbu">
        <h2>Get Alerts on Any Platform</h2>
        <p>Integrates with any messaging app, incident management platform, <br> or even phone calls, so you will never
        miss an alert</p>
        </div>
        <div class="container-CRE-T30">
        <ul>
        <li><img src="https://www.statuscake.com/wp-content/uploads/2020/11/DataDog.png"></li>
        <li><img src="https://www.statuscake.com/wp-content/uploads/2020/11/Discord.png"></li>
        <li><img src="https://www.statuscake.com/wp-content/uploads/2020/11/Mattermost.png"></li>
        <li><img src="https://www.statuscake.com/wp-content/uploads/2020/11/Microsoft_Teams.png"></li>
        <li><img src="https://www.statuscake.com/wp-content/uploads/2020/11/opengenie.png"></li>
        <li><img src="https://www.statuscake.com/wp-content/uploads/2020/11/PagerDuty.png"></li>
        <li><img src="https://www.statuscake.com/wp-content/uploads/2020/08/phone-call.png"></li>
        <li><img src="https://www.statuscake.com/wp-content/uploads/2020/11/PushBullet.png"></li>
        <li><img src="https://www.statuscake.com/wp-content/uploads/2020/11/Pushover.svg"></li>
        <li><img src="https://www.statuscake.com/wp-content/uploads/2020/11/Slack.png"></li>
        <li><img src="https://www.statuscake.com/wp-content/uploads/2020/11/VictorOps.png"></li>
        <li><img src="https://cdn-3.convertexperiments.com/uf/10007679/10007477/apps.59154.2dedd556-5e54-40eb-9611-cfb497573750.bb32f5df-4e47-4c3f-b270-bbe975acbaec.4ae2f38d-48c7-4a19-96e0-fac2b6847e97.png"></li>
        </ul>
        <ul class="Cre_lastimag">
        <li><img src="https://cdn-3.convertexperiments.com/uf/10007679/10007477/zapier-logo_black.png"></li>
        <li><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T+30/logo.svg"></li>
        </ul>
        </div>
        </div>
        </div>
        <div class="Work_with">
        <div class="Cre-container">
        <div class="Headingorsbu">
        <h2>Work with your team</h2>
        <h3>Alert the right people or teams for any specific issue</h3>
        </div>
        <div class="TabContent right">
        <div class="product-section">
        <p>Set up and manage multiple contact groups so the right
        people get the right alerts at the right time</p>
        </div>
        <div class="Product-image">
        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007477/T30_img25.png">
        </div>
        </div>
        <div class="googleimages">
        <h3>SSO for ease of administration and improved security</h3>
        <p>Choose from Google or Microsoft Single Sign-On</p>
        <ul>
        <li><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T+30/Google_logo+1.png" alt="Telegram"><li>
        <li><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T+30/Microsoft_logo2+1.png" alt="Telegram"><li>
        </ul>
        </div>
        </div>
        </div>
        </div>`;
			//generating the Pricing table--------------------------------------------------------
			function generateData(currentCurrency, SuperiorMonthlyPrice, SuperiorAnuallyPrice, SuperiorTotalSaving, SuperiorTotalPrice, BusinessMonthlyPrice, BusinessAnuallyPrice, BusinessTotalPrice, BusinessTotalSaving) {
				var creBillingTable = `<section class="pricing_tiles test-30-price cre-annualPlanActive">
        <div class="inner_container">
        <h2> Which StatusCake plan is right for me?</h2>
        <!-- TogglePlan section -->
        <div class="billing-switch">
        <p> Get 2 months free! <span>(save 16%) </span> <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T41/Group+55.svg"> </p>
        <div class="display">
        <div class='cre-monthlyBilling-heading'>Monthly Billing</div>
        <div class="toggle_btn">
        <label class="switch">
        <input type="checkbox" checked="">
        <span class="slider round"></span>
        </label>
        </div>
        <div class='cre-annualBilling-heading'>Annual Billing</div>
        </div>
        </div>
        <!-- PricingTable -->
        <div class="pricing_cards">
        <!-- FreePlan -->
        <div class="free_card">
        <div class="cre-popularTile">
        <span>Most Popular</span>
        </div>
        <div class='card'>
        <h2>Free</h2>
        <h5>The basics of StatusCake monitoring</h5>
        <div class="border-col">
        <p class="ideal"><strong>Ideal for:</strong>Personal use via a single login</p>
        </div>
        <div class="price">
        <p class="annualPlanfree">
        <span class="annualWasPrice">
        <sup class='cre-currency'>/mo</sup>
        </span>
        <span class="annualPrice"><sup class='cre-currency'>${currentCurrency}</sup>
        <strong>0</strong>/mo
        </span>
        </p>
        </div>
        <a href="https://app.statuscake.com/Try/" class="card-cta">Create My Free Plan</a>
        <p class="no_CC"> No credit card required</p>
        <div class="card_details">
        <p>Your Free plan includes:</p>
        <ul>
        <li><i class="fa fa-check"></i>Single login for personal use</li>
        <li><i class="fa fa-check"></i>3 uptime monitors</li>
        <li><i class="fa fa-check"></i>15-minute test intervals</li>
        <li class="list_light">SMS & integration alerting</li>
        <li class="list_light">Domain monitoring</li>
        <li class="list_light">Page speed monitoring</li>
        <li class="list_light">SSL monitoring</li>
        <li class="list_light">Server monitoring</li>
        <li class="list_light">Reporting</li>
        </ul>
        </div>
        <a class="view_fullPlan">View full feature comparison <img class="down-arrow" src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T41/down+arrow.png">  </a>
        <a class="home_view_fullPlan" href="https://www.statuscake.com/pricing?ScollToPricingTable"> View full feature comparison</a>
        </div>
        </div>
        <!-- SuperiorPlan -->
        <div class="popular_card">
        <div class="cre-popularTile">
        <span>Most Popular</span>
        </div>
        <div class='card'>
        <h2>Superior</h2>
        <h5>Access more monitoring tools and customisation</h5>
        <div class="border-col">
        <p class="ideal"><strong>Ideal for:</strong>Small businesses</p>
        <p> Up to <strong>2</strong> team members</p>
        </div>
        <div class="price">
        <!-- annualPrice with Was Price -->
        <p class="annualPlan">
        <span class="annualWasPrice">
        <sup class='cre-currency'>${currentCurrency}</sup><strong>${SuperiorMonthlyPrice}</strong>/mo</sup>
        </span>
        <span class="annualPrice"><sup class='cre-currency'>${currentCurrency}</sup>
        <strong>${SuperiorAnuallyPrice}</strong>/mo
        </span>
        </p>
        <!-- MonthlyPlan Price -->
        <p class="monthlyPlan"><sup class='cre-currency'>${currentCurrency}</sup><strong>${SuperiorMonthlyPrice}</strong>/mo
        </p>
        <!-- Yearly Bill -->
        <p class="yearly_bill monthly">
        Psst, you could <span class='cre-highlightedText'>save <span
        class='cre-currency'>${currentCurrency}</span>${SuperiorTotalSaving}</span> if you
        choose annual
        billing
        </p>
        <p class="yearly_bill annual">
        <span class="yearly_billPrice"> <span class='cre-currency'>${currentCurrency}</span>${SuperiorTotalPrice}</span>
        billed yearly
        </p>
        <!-- Saving Price -->
        <p class="saving">
        Save <span class="savingAmmount"> <span
        class='cre-currency'>${currentCurrency}</span>${SuperiorTotalSaving}</span>/year
        </p>
        </div>
        <a href="https://app.statuscake.com/Try/trial.php?Plan=Superior" class="card-cta">Start My Free 7-Day
        Trial</a>
        <p class="no_CC"> No credit card required | Cancel or change plans any time</p>
        <div class="card_details">
        <p>Your Superior plan includes:</p>
        <ul>
        <li><i class="fa fa-check"></i>Logins for 2 team members</li>
        <li><i class="fa fa-check"></i>100 uptime monitors</li>
        <li><i class="fa fa-check"></i>1-minute test intervals</li>
        <li><i class="fa fa-check"></i>15 page speed monitors</li>
        <li><i class="fa fa-check"></i>50 domain monitors</li>
        <li><i class="fa fa-check"></i>50 SSL monitors</li>
        <li><i class="fa fa-check"></i>3 server monitors</li>
        <li><i class="fa fa-check"></i>SSL monitoring</li>
        <li><i class="fa fa-check"></i>Alerts through integrations</li>
        <li><i class="fa fa-check"></i>Reporting</li>
        </ul>
        </div>
        <a class="view_fullPlan">View full feature comparison <img class="down-arrow" src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T41/down+arrow.png"> </a>
        <a class="home_view_fullPlan" href="https://www.statuscake.com/pricing?ScollToPricingTable"> View full feature comparison</a>
        </div>
        </div>
        <!-- businessPlan -->
        <div class="business_card">
        <div class="cre-popularTile">
        <span>Most Popular</span>
        </div>
        <div class='card'>
        <h2>Business</h2>
        <h5>The full StatusCake suite</h5>
        <div class="border-col">
        <p class="ideal"><strong>Ideal for:</strong>Larger companies, Dev Ops teams</p>
        <p> Up to <strong>10</strong> team members</p>
        </div>
        <div class="price">
        <!-- annualPrice with Was Price -->
        <p class="annualPlan">
        <span class="annualWasPrice">
        <sup class='cre-currency'>${currentCurrency}</sup><strong>${BusinessMonthlyPrice}</strong>/mo
        </span>
        <span class="annualPrice"><sup class='cre-currency'>${currentCurrency}</sup>
        <strong>${BusinessAnuallyPrice}</strong>/mo
        </span>
        </p>
        <!-- MonthlyPlan Price -->
        <p class="monthlyPlan">
        <sup class='cre-currency'>${currentCurrency}</sup><strong>${BusinessMonthlyPrice}</strong>/mo
        </p>
        <!-- Yearly Bill -->
        <p class="yearly_bill monthly">
        Psst, you could <span class='cre-highlightedText'>save <span
        class='cre-currency'>${currentCurrency}</span>${BusinessTotalSaving}/year</span> if you
        choose annual
        billing
        </p>
        <p class="yearly_bill annual">
        <span class="yearly_billPrice"> <span class='cre-currency'>${currentCurrency}</span>${BusinessTotalPrice}</span>
        billed yearly
        </p>
        <!-- Saving Price -->
        <p class="saving">
        Save <span class="savingAmmount"><span
        class='cre-currency'>${currentCurrency}</span>${BusinessTotalSaving}</span>/year
        </p>
        </div>
        <a href="https://app.statuscake.com/Try/trial.php?Plan=Business" class="card-cta">Start My Free 7-Day
        Trial</a>
        <p class="no_CC"> No credit card required | Cancel or change plans any time</p>
        <div class="card_details">
        <p>Your Business plan includes:</p>
        <ul>
        <li><i class="fa fa-check"></i>Logins for 10 team members</li>
        <li><i class="fa fa-check"></i>300 uptime monitors</li>
        <li><i class="fa fa-check"></i>30-second test intervals</li>
        <li><i class="fa fa-check"></i>30 page speed monitors</li>
        <li><i class="fa fa-check"></i>120 domain monitors</li>
        <li><i class="fa fa-check"></i>100 SSL monitors</li>
        <li><i class="fa fa-check"></i>10 server monitors</li>
        <li><i class="fa fa-check"></i>Alerts through integrations</li>
        <li><i class="fa fa-check"></i>Reporting</li>
        <li><i class="fa fa-check"></i>Team tools </li>
        </ul>
        </div>
        <a class="view_fullPlan">View full feature comparison <img class="down-arrow" src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/StatusCake/T41/down+arrow.png"> </a>
        <a class="home_view_fullPlan" href="https://www.statuscake.com/pricing?ScollToPricingTable"> View full feature comparison</a>
        </div>
        </div>
        <!-- customPlan -->
        <div class="custom_card">
        <div class="cre-popularTile">
        <span>Most Popular</span>
        </div>
        <div class='card'>
        <h2>Custom</h2>
        <h5>Build a plan to suit you, and scale with bolt-ons</h5>
        <div class="border-col">
        <p class="ideal"><strong>Ideal for:</strong>Companies with specific needs</p>
        <p> <strong>Unlimited</strong> team members</p>
        </div>
        <div class="price">
        <strong>Custom pricing - only pay for what you need</strong>
        <p><span class="annualPrice">POA</span></p>
        </div>
        <a onclick="Intercom('show');"  class="card-cta">Let's
        talk</a>
        <p class="no_CC"> No obligation, no hard sales pitch! </p>
        <div class="card_details">
        <p>Popular options on custom plans:</p>
        <ul>
        <li><i class="fa fa-check"></i>Limitless monitors</li>
        <li><i class="fa fa-check"></i>Constant check rate</li>
        <li><i class="fa fa-check"></i>Dedicated Uptime & Page</li>
        <li><i class="fa fa-check"></i>Speed Locations</li>
        <li><i class="fa fa-check"></i>Service Creditable SLAS</li>
        <li><i class="fa fa-check"></i>Regular Account Reviews</li>
        <li><i class="fa fa-check"></i>Unlimited logins</li>
        </ul>
        <div>
        And more - <a onclick="Intercom('show');">tell us what you need</a>
        </div>
        </div>
        </div>
        </div>
        </div>
        <p class="bottom_statement">
        You can cancel your StatusCake subscription or change plans at any time
        </p>
        </div>
        </section>`;
				return creBillingTable;
			}
			//Function for extracting the Price and Currency from Price String---------------------
			function extractCurrencyAndPrice(inputString) {
				// Define a regular expression pattern to match currency symbols and numeric values
				const regex = /([^\d.,]+)([\d.,]+)/;
				// Use the match method to find matches in the input string
				const matches = inputString.match(regex);
				// Check if there are matches
				if (matches && matches.length === 3) {
					// Extract the currency and price from the matches
					const currency = matches[1].trim();
					const price = parseFloat(matches[2].replace(/,/g, '')); // Remove commas and convert to a floating-point number
					// Return an object with the extracted values
					return { currency, price };
				} else {
					// Return null if no matches are found
					return null;
				}
			}
			var helper = _$();
			/* Variation Init */
			function init() {
				_$('body').addClass(variation_name);
				_$('body.home').prepend(htmlTemplate);
				if (!window.scrollfunction) {
					window.scrollfunction = true;
					setTimeout(function () {
						var sections = [
							document.querySelector('#section1'),
							document.querySelector('#section2'),
							document.querySelector('#section3'),
							document.querySelector('#section4'),
							document.querySelector('#section5')
						];

						var navLi = document.querySelectorAll('.Cretab .Cre-container ul li'); // Assuming sections represent the corresponding content

						// Debounce function
						function debounce(func, wait, immediate) {
							var timeout;
							return function () {
								var context = this, args = arguments;
								var later = function () {
									timeout = null;
									if (!immediate) func.apply(context, args);
								};
								var callNow = immediate && !timeout;
								clearTimeout(timeout);
								timeout = setTimeout(later, wait);
								if (callNow) func.apply(context, args);
							};
						};

						// Scroll event handler with debounce
						var handleScroll = debounce(function () {
							var current = "";

							sections.forEach(function (section) {
								var sectionTop = section.offsetTop;
								var sectionHeight = section.clientHeight;
								if (pageYOffset >= sectionTop - sectionHeight / 3) {
									current = section.getAttribute("id");
								}
							});

							navLi.forEach(function (li) {
								li.classList.remove("activenav");
								if (li.querySelector('a').getAttribute("href") === `#${current}`) {
									li.classList.add("activenav");

									// Custom horizontal scroll to center the active nav item
									var container = document.querySelector('.Cretab .Cre-container');
									var containerWidth = container.offsetWidth;
									var itemOffsetLeft = li.offsetLeft;
									var itemWidth = li.offsetWidth;
									var targetScrollLeft = itemOffsetLeft - (containerWidth / 2) + (itemWidth / 2);

									container.scrollTo({
										left: targetScrollLeft,
										behavior: 'smooth'
									});
								}
							});
						}, 200);

						window.addEventListener("scroll", handleScroll);
					}, 2000);
				}


				//Home page--------------------------inserting Table section------------------
				if (window.location.pathname === "/") {
					//Inserting the Billing Table on HomePage------------------------
					helper.waitForElement('[data-id="68e5adfe"]', function () {
						var xhttp = new XMLHttpRequest();
						xhttp.onreadystatechange = function () {
							if (this.readyState == 4 && this.status == 200) {
								var parse = new DOMParser();
								var doc = parse.parseFromString(this.response, 'text/html');
								var SuperiorMonthlyPrice = doc.querySelector(".superior .monthly").innerHTML;
								var priceContainer = extractCurrencyAndPrice(SuperiorMonthlyPrice)
								//Price without string------------------
								SuperiorMonthlyPrice = priceContainer.price;
								//Current currency----------------------
								var currentCurrency = priceContainer.currency;
								var SuperiorAnuallyPrice = doc.querySelector(".superior .annually").innerHTML;
								SuperiorAnuallyPrice = extractCurrencyAndPrice(SuperiorAnuallyPrice);
								SuperiorAnuallyPrice = SuperiorAnuallyPrice.price;
								var BusinessMonthlyPrice = doc.querySelector(".business .monthly").innerHTML;
								BusinessMonthlyPrice = extractCurrencyAndPrice(BusinessMonthlyPrice);
								BusinessMonthlyPrice = BusinessMonthlyPrice.price;
								var BusinessAnuallyPrice = doc.querySelector(".business .annually").innerHTML;
								BusinessAnuallyPrice = extractCurrencyAndPrice(BusinessAnuallyPrice);
								BusinessAnuallyPrice = BusinessAnuallyPrice.price;
								var SuperiorTotalSaving = ((SuperiorMonthlyPrice * 12) - (SuperiorAnuallyPrice * 12)).toFixed(2);
								var SuperiorTotalPrice = (SuperiorAnuallyPrice * 12).toFixed(2);
								var BusinessTotalPrice = (BusinessAnuallyPrice * 12).toFixed(2);
								var BusinessTotalSaving = ((BusinessMonthlyPrice * 12) - (BusinessAnuallyPrice * 12)).toFixed(2);
								var html = generateData(currentCurrency, SuperiorMonthlyPrice, SuperiorAnuallyPrice, SuperiorTotalSaving, SuperiorTotalPrice, BusinessMonthlyPrice, BusinessAnuallyPrice, BusinessTotalPrice, BusinessTotalSaving);
								// document.querySelector('[data-id="68e5adfe"]').innerHTML = html;
								if (!document.querySelector(".test-30-price")) {
									document.querySelector("#page").insertAdjacentHTML("afterend", html)
								}
							}
						};
						xhttp.open('GET', 'https://www.statuscake.com/pricing/', true);
						if (!window.gettingData) {
							xhttp.send();
							window.gettingData = true;
						}

					}, 50, 15000)

					setTimeout(function () {
						waitForSwiper(initializeSwiper);
					}, 200);

					waitForSwiper(initializeSwiperTwo);
				}
				// helper.waitForElement('#top-nav [href="/why/"]', function () {
				//     document.querySelector('#top-nav [href="/why/"]').innerHTML = 'Home'
				// }, 50, 15000)
				// helper.waitForElement('.mobile-only [href="/why/"]', function () {
				//     document.querySelector('.mobile-only [href="/why/"]').innerHTML = 'Home'
				// }, 50, 15000)


				// Function to wait for element and then update innerHTML and href.......................................................
				helper.waitForElement('#top-nav [href="/why/"]', function () {
					var element = document.querySelector('#top-nav [href="/why/"]');
					if (element) {
						element.innerHTML = 'Home'; // Change the displayed name to "Home"
						element.href = 'https://www.statuscake.com/'; // Change the link redirection
					}
				}, 50, 15000);

				helper.waitForElement('.mobile-only [href="/why/"]', function () {
					var element = document.querySelector('.mobile-only [href="/why/"]');
					if (element) {
						element.innerHTML = 'Home'; // Change the displayed name to "Home"
						element.href = 'https://www.statuscake.com/'; // Change the link redirection
					}
				}, 50, 15000);



				helper.waitForElement('#sign-up', function () {
					document.querySelector('#sign-up').innerHTML = 'Try it FREE for 7 days'
				}, 50, 15000)
				_$('#top-nav [href="/pricing/"] ').insertAfter(`<a class="nav-link hide hide-mobile desktop-only" href="https://developers.statuscake.com/api/">
        API</a>`)

				document.querySelector('#sign-up').innerHTML = 'Try it FREE for 7 days'
				_$(' .mobile-only [href="/pricing/"] ').insertAfter(`<a class="nav-link hide hide-mobile desktop-only" href="https://developers.statuscake.com/api/">
        API</a>`)
				_$('#top-nav .nav-link.right > a:first-child').insertAfter('<a href="https://app.statuscake.com/Try/trial.php?Plan=Business"> Try it FREE for 7 days  <br><span>No credit card needed</span></a>')
				_$('.mobile-only .overlay-content .inline-button:nth-child(2)').insertAfter('<a class="inline-button mobilecta" href="https://app.statuscake.com/Try/"> Try it FREE for 7 days  <br><span>No credit card needed</span></a>')
				_$('#features ').insertAfter(`<a href="/features/" class="nav-link--with-children hide hide-mobile cre_mobileonly">Features</a>
        `)

			}
			helper.live(".Cretab .Cre-container li", "click", function () {
				// Remove the 'activenav' class from all li elements
				document.querySelectorAll('.Cretab .Cre-container li').forEach(item => {
					item.classList.remove('activenav');
				});

			})
			//click on Toggle Price Button-------------------------
			helper.live(".billing-switch .toggle_btn", "click", function () {
				//If Toggle button is checked--------------------
				if (this.querySelector('input[type="checkbox"]').checked) {
					//If monthly plan active first removing the monthly class and adding annual Price class----------
					if (document.querySelector(".cre-monthlyPlanActive")) {
						document.querySelector(".cre-monthlyPlanActive").classList.remove("cre-monthlyPlanActive");
					}
					document.querySelector(".pricing_tiles.test-30-price") && document.querySelector(".pricing_tiles.test-30-price").classList.add("cre-annualPlanActive");
				}
				//If Toggle button is Not-checked----------------
				else {
					//If annual plan active first removing the Annual class and adding Monthly Price class----------
					if (document.querySelector(".cre-annualPlanActive")) {
						document.querySelector(".cre-annualPlanActive").classList.remove("cre-annualPlanActive");
					}
					document.querySelector(".pricing_tiles.test-30-price") && document.querySelector(".pricing_tiles.test-30-price").classList.add("cre-monthlyPlanActive");
				}
			})

			helper.live(".Cretab .Cre-container li a", "click", function (e) {
				e.preventDefault(); // Use e.preventDefault() instead of event.preventDefault()

				// Remove 'activenav' class from all li elements
				document.querySelectorAll('.Cretab .Cre-container li').forEach(item => {
					item.classList.remove('activenav');
				});

				// Add 'activenav' class to the clicked li element
				this.parentElement.classList.add('activenav');

				// Get the target section
				const targetId = this.getAttribute('href').substring(1);
				const targetElement = document.getElementById(targetId);

				// Calculate offset to add margin from the top
				const offset = 140; // Adjust this value as needed

				// Smooth scroll to the target section with margin
				window.scrollTo({
					top: targetElement.offsetTop - offset,
					behavior: 'smooth'
				});
			});

			// Function to remove 'paddingtop' class from the body
			function removePaddingTop() {
				if (document.body.classList.contains('paddingtop')) {
					document.body.classList.remove('paddingtop');
				}
			}

			// Remove the 'paddingtop' class on scroll
			window.addEventListener('scroll', removePaddingTop);




			//click on Toggle Price Button-------------------------
			helper.waitForElement("body", init, 50, 25000);
		} catch (e) {
			if (debug) console.log(e, "error in Test" + variation_name);
		}
	})();
}

