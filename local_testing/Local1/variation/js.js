(function () {
    var debug = 0;
    var variation_name = "cre-t-81";
    try {
        function waitForElement(selector, trigger) {
            var interval = setInterval(function () {
                if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
                    clearInterval(interval);
                    trigger();
                }
            }, 50);
            setTimeout(function () {
                clearInterval(interval);
            }, 15000);
        }

        function live(selector, event, callback, context) {
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
        }
        function scrollToEl(el) {
            var scrollHeight = document.querySelector(el);
            scrollHeight = scrollHeight && scrollHeight.getBoundingClientRect().top || 0;
            scrollHeight = scrollHeight + scrollY - 50;
            scrollTo({ top: scrollHeight, behavior: 'smooth' });
        }
        function waitForSwiper(trigger) {
            var interval = setInterval(function () {
                if (typeof window.Swiper != "undefined") {
                    clearInterval(interval);
                    trigger();
                }
            }, 50);
            setTimeout(function () {
                clearInterval(interval);
            }, 15000);
        }

        var uspOne = `
        <div class="cre-t-81-usp-content1-wrapper cre-t-81-usp-content-wrapper">
        <div class="cre-t-81-usp-content-1-container cre-t-81-usp-content-container cre-t-81-caret">
            <div class="cre-t-81-usp-content-1-main">
                <div class="cre-t-81-usp-header">Works with any garden and every gardening method</div>
                <div class="cre-t-81-usp-paragraph">
                    <p class="cre-t-81-usp-text1">The Garden Planner is versatile for any garden shape or size, supporting various methods like rows, containers, and square foot gardening.</p>
                    <p class="cre-t-81-usp-text3">Start from scratch or choose from one of our <span
                            class="cre-t-81-usp-link">beginner-friendly templates</span></p>
                    <p class="cre-t-81-usp-text4">Or take a look at some of the impressive gardens created and shared by our
                        users...</p>
                </div>
                <div class="cre-t-81-usp-button">Show me some inspiring gardens</div>
            </div>
        </div>
    </div>
    `;

        var uspTwo = ` 
    <div class="cre-t-81-usp-content2-wrapper cre-t-81-usp-content-wrapper">
      <div class="cre-t-81-usp-content-2-container cre-t-81-usp-content-container cre-t-81-caret">
        <div class="cre-t-81-usp-content-2-main">
          <div class="cre-t-81-usp-header">Works wherever you are in the world</div>
          <div class="cre-t-81-usp-paragraph">
            <p>Get tailored sowing, planting, and harvesting plans with email alerts based on live climate data from 5,000+ weather stations.</p>
            <p>The Garden Planner covers all major regions globally, and for other areas, simply input your local frost dates for accurate planting schedules.</p>
            <div class="cre-t-81-usp-paragraph-button Learn_more-81">Learn more</div>
          </div>
        </div>
      </div>
    </div>`;

        var uspThree = ` 
    <div class="cre-t-81-usp-content3-wrapper cre-t-81-usp-content-wrapper">
      <div class="cre-t-81-usp-content-3-container cre-t-81-usp-content-container cre-t-81-caret">
        <div class="cre-t-81-usp-content-3-main">
          <div class="cre-t-81-usp-header">Chat directly to our gardening experts, 7 days a week - ask them anything!</div>
          <div class="cre-t-81-usp-paragraph">
            <div class="cre-t-81-stack-images">
              <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81/image+(30).png" alt="" />
            </div>
            <p>Whether you need help with the Garden Planner or want to ask about companion plants, avoiding pests, or keeping your plants happy, our friendly, experienced customer support team are all expert gardeners and are on standby just waiting to hear from you.</p>
            <p>You can contact us via live chat or email, and we'll get back to you as quickly as possible—usually in less than a minute during working hours.</p>
            <div class="cre-t-81-usp-paragraph-button">Chat to an expert right now</div>
          </div>
        </div>
      </div>
    </div>`;

        var uspFour = `<div class="cre-t-81-usp-content4-wrapper cre-t-81-usp-content-wrapper">
			<div class="cre-t-81-usp-content-4-container cre-t-81-usp-content-container cre-t-81-caret">
				<div class="cre-t-81-usp-content-4-main">
					<div class="cre-t-81-usp-header">Packed with expert guidance at your fingertips</div>
					<div class="cre-t-81-usp-paragraph">
						<ul class="cre-t-81-list-wrapper">
							<li class="cre-t-81-list-item1">
								Specific growing advice on <strong>21,657</strong> varieties of <strong>408 vegetables, herbs, fruit</strong> and <strong>flowers</strong> (and counting!)—written by
								experts in the USA
							</li>
							<li class="cre-t-81-list-item2">
								Weekly <strong>seasonal tips, videos</strong> and <strong>articles</strong> written by our team of <strong>acclaimed gardening experts</strong>
							</li>
							<li class="cre-t-81-list-item3"><strong>441 high quality How-To videos</strong> demonstrating all the gardening techniques you'll ever need—and more!</li>
							<li class="cre-t-81-list-item4">Detailed advice on <strong>how to avoid pests</strong> eating your precious crops</li>
						</ul>
					</div>				
				</div>
			</div>
		</div>`;

        var uspFive = `<div class="cre-t-81-usp-content5-wrapper cre-t-81-usp-content-wrapper">
      <div class=" cre-t-81-usp-content-6-container cre-t-81-usp-content-container cre-t-81-caret">
        <div class="cre-t-81-usp-content-5-main">
          <div class="cre-t-81-usp-header">Don't just take our word for it!</div>
          <div class="cre-t-81-usp-paragraph">
            <p>Hear directly from customers using the Garden Planner every day to plan their most productive garden ever.</p>
		  </div>
          <div class="cre-t-81-5-review-wrapper">
          <div class="cre-t-81-5-review-container">
          <div class="swiper review-swiper">
              <div class="swiper-wrapper">
                  <div class="swiper-slide">
                      <div class="cre-t-81-usp-review cre-t-81-usp-review5">
                          <div class="cre-t-5-live-card-support-wrapper">
                              <div class="cre-t-5-live-card-support-container">
                                  <div class="cer-cards-parts">
                                      <div class="cer-new-card-wrapper">
                                          <div class="cre-cards">
                                              <div class="cre-card-one cre-common-card">
                                                  <div class="cre-cards-topImg"><img
                                                          src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/Landing+Page+%7C+YouTube+This+is+what+Ben+uses+sales+landing+page/4.png"
                                                          alt="" class="cre-cards-top-img"></div>
                                                  <div class="cre-card-title-part">
                                                      <p><span class="cre-quote-icon"></span>This planner is the best there
                                                          is.</p>
                                                  </div>
                                                  <div class="cre-clint-name">
                                                      <p>Ron in Puget Sound</p>
                                                  </div>
                                                  <div class="cre-img-icons"><img class="cre-icons"
                                                          src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/Landing+Page+%7C+YouTube+This+is+what+Ben+uses+sales+landing+page/2.png"
                                                          alt=""></div>
                                                  <div class="cre-card-text">
                                                      <div class="cre-first-text">
                                                          <p class="cre-text-one">This planner is the best there is.</p>
                                                          <p class="cre-text-two">Everything you need to know is at your
                                                              fingertips.</p>
                                                          <p class="cre-text-two cre-text-two1">Plant info, garden layout,
                                                              size, ease to make a plan, and it is easy to use.</p>
                                                          <p class="cre-text-three">I love it and have been using it for
                                                              years.</p>
                                                      </div>
                                                  </div>
                                                  <div class="Feefo-parent">
                                                      <a href="https://www.feefo.com/reviews/growing-interactive"
                                                          target="_blank"><img alt="Feefo logo" border="0"
                                                              src="https://api.feefo.com/api/logo?merchantidentifier=growing-interactive"
                                                              title="See what our customers say about us"></a>
                                                  </div>
                                                  <div class="cre-unfiltered-review">
                                                      <a href="https://www.feefo.com/en-US/reviews/growing-interactive?displayFeedbackType=BOTH&amp;timeFrame=YEAR"
                                                          class="review-link" target="_blank">See all unfiltered reviews</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="swiper-slide swiper-slide-next">
                      <div class="cre-t-81-usp-review cre-t-81-usp-review6">
                          <div class="cre-t-5-live-card-support-wrapper">
                              <div class="cre-t-5-live-card-support-container">
                                  <div class="cer-cards-parts">
                                      <div class="cer-new-card-wrapper">
                                          <div class="cre-cards">
                                              <div class="cre-card-one cre-common-card">
                                                  <div class="cre-cards-topImg"><img
                                                          src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/Landing+Page+%7C+YouTube+This+is+what+Ben+uses+sales+landing+page/4.png"
                                                          alt="" class="cre-cards-top-img"></div>
                                                  <div class="cre-card-title-part">
                                                      <p><span class="cre-quote-icon"></span>Best gardening design and
                                                          information app online!</p>
                                                  </div>
                                                  <div class="cre-clint-name">
                                                      <p>Trusted Customer</p>
                                                  </div>
                                                  <div class="cre-img-icons"><img class="cre-icons"
                                                          src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/Landing+Page+%7C+YouTube+This+is+what+Ben+uses+sales+landing+page/2.png"
                                                          alt=""></div>
                                                  <div class="cre-card-text">
                                                      <div class="cre-first-text">
                                                          <p class="cre-text-one">This is the best garden planner and
                                                              gardening information site online!!!</p>
                                                          <p class="cre-text-two">I have used it for years, given it as gifts,
                                                              ane love it.</p>
                                                          <p class="cre-text-two cre-text-two1">It is so easy to use, has an
                                                              amazing wealth of guides and informational videos, and the
                                                              customer service response is very quick and very thorough and
                                                              helpful.</p>
                                                          <p class="cre-text-three">I highly recommend this app to anyone who
                                                              loves to garden.</p>
                                                      </div>
                                                  </div>
                                                  <div class="Feefo-parent">
                                                      <a href="https://www.feefo.com/reviews/growing-interactive"
                                                          target="_blank"><img alt="Feefo logo" border="0"
                                                              src="https://api.feefo.com/api/logo?merchantidentifier=growing-interactive"
                                                              title="See what our customers say about us"></a>
                                                  </div>
                                                  <div class="cre-unfiltered-review">
                                                      <a href="https://www.feefo.com/en-US/reviews/growing-interactive?displayFeedbackType=BOTH&amp;timeFrame=YEAR"
                                                          class="review-link" target="_blank">See all unfiltered reviews</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="swiper-slide">
                      <div class="cre-t-81-usp-review cre-t-81-usp-review7">
                          <div class="cre-t-5-live-card-support-wrapper">
                              <div class="cre-t-5-live-card-support-container">
                                  <div class="cer-cards-parts">
                                      <div class="cer-new-card-wrapper">
                                          <div class="cre-cards">
                                              <div class="cre-card-one cre-common-card">
                                                  <div class="cre-cards-topImg"><img
                                                          src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/Landing+Page+%7C+YouTube+This+is+what+Ben+uses+sales+landing+page/4.png"
                                                          alt="" class="cre-cards-top-img"></div>
                                                  <div class="cre-card-title-part">
                                                      <p><span class="cre-quote-icon"></span>Outstanding product!</p>
                                                  </div>
                                                  <div class="cre-clint-name">
                                                      <p>Dee k. in Gainesville, Tax</p>
                                                  </div>
                                                  <div class="cre-img-icons"><img class="cre-icons"
                                                          src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/Landing+Page+%7C+YouTube+This+is+what+Ben+uses+sales+landing+page/2.png"
                                                          alt=""></div>
                                                  <div class="cre-card-text">
                                                      <div class="cre-first-text">
                                                          <p class="cre-text-one">Outstanding product.</p>
                                                          <p class="cre-text-two">Make gardening so much simpler!</p>
                                                          <p class="cre-text-two cre-text-two1">I love it so much l gifted a
                                                              year subscription to my sister.</p>
                                                          <p class="cre-text-three">She loves it too!</p>
                                                      </div>
                                                  </div>
                                                  <div class="Feefo-parent">
                                                      <a href="https://www.feefo.com/reviews/growing-interactive"
                                                          target="_blank"><img alt="Feefo logo" border="0"
                                                              src="https://api.feefo.com/api/logo?merchantidentifier=growing-interactive"
                                                              title="See what our customers say about us"></a>
                                                  </div>
                                                  <div class="cre-unfiltered-review">
                                                      <a href="https://www.feefo.com/en-US/reviews/growing-interactive?displayFeedbackType=BOTH&amp;timeFrame=YEAR"
                                                          class="review-link" target="_blank">See all unfiltered reviews</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="swiper-slide">
                      <div class="cre-t-81-usp-review cre-t-81-usp-review8">
                          <div class="cre-t-5-live-card-support-wrapper">
                              <div class="cre-t-5-live-card-support-container">
                                  <div class="cer-cards-parts">
                                      <div class="cer-new-card-wrapper">
                                          <div class="cre-cards">
                                              <div class="cre-card-one cre-common-card">
                                                  <div class="cre-cards-topImg"><img
                                                          src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/Landing+Page+%7C+YouTube+This+is+what+Ben+uses+sales+landing+page/4.png"
                                                          alt="" class="cre-cards-top-img"></div>
                                                  <div class="cre-card-title-part">
                                                      <p><span class="cre-quote-icon"></span>Simply the best!</p>
                                                  </div>
                                                  <div class="cre-clint-name">
                                                      <p>Trusted Customer</p>
                                                  </div>
                                                  <div class="cre-img-icons"><img class="cre-icons"
                                                          src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/Landing+Page+%7C+YouTube+This+is+what+Ben+uses+sales+landing+page/2.png"
                                                          alt=""></div>
                                                  <div class="cre-card-text">
                                                      <div class="cre-first-text">
                                                          <p class="cre-text-one">Love this! Super easy to use.</p>
                                                          <p class="cre-text-two">Regular updates.</p>
                                                          <p class="cre-text-two cre-text-two1">Helps keep track of what went
                                                              where so you can properly rotate.</p>
                                                          <p class="cre-text-two cre-text-two2">As well as a ton of other
                                                              features.</p>
                                                          <p class="cre-text-three">I can't recommend it more.</p>
                                                      </div>
                                                  </div>
                                                  <div class="Feefo-parent">
                                                      <a href="https://www.feefo.com/reviews/growing-interactive"
                                                          target="_blank"><img alt="Feefo logo" border="0"
                                                              src="https://api.feefo.com/api/logo?merchantidentifier=growing-interactive"
                                                              title="See what our customers say about us"></a>
                                                  </div>
                                                  <div class="cre-unfiltered-review">
                                                      <a href="https://www.feefo.com/en-US/reviews/growing-interactive?displayFeedbackType=BOTH&amp;timeFrame=YEAR"
                                                          class="review-link" target="_blank">See all unfiltered reviews</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="swiper-slide">
                      <div class="cre-t-81-usp-review cre-t-81-usp-review9">
                          <div class="cre-t-5-live-card-support-wrapper">
                              <div class="cre-t-5-live-card-support-container">
                                  <div class="cer-cards-parts">
                                      <div class="cer-new-card-wrapper">
                                          <div class="cre-cards">
                                              <div class="cre-card-one cre-common-card">
                                                  <div class="cre-cards-topImg"><img
                                                          src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/Landing+Page+%7C+YouTube+This+is+what+Ben+uses+sales+landing+page/4.png"
                                                          alt="" class="cre-cards-top-img"></div>
                                                  <div class="cre-card-title-part">
                                                      <p><span class="cre-quote-icon"></span>Great easy product from Novice to
                                                          experienced gardener.</p>
                                                  </div>
                                                  <div class="cre-clint-name">
                                                      <p>Claire-Louise</p>
                                                  </div>
                                                  <div class="cre-img-icons"><img class="cre-icons"
                                                          src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/Landing+Page+%7C+YouTube+This+is+what+Ben+uses+sales+landing+page/2.png"
                                                          alt=""></div>
                                                  <div class="cre-card-text">
                                                      <div class="cre-first-text">
                                                          <p class="cre-text-one">The product was very easy to start and
                                                              within 20minutes I had a plan for my veg patch.</p>
                                                          <p class="cre-text-two">It also tells me how many plants i'll need,
                                                              when to sow and pot on, plant &amp; harvest</p>
                                                          <p class="cre-text-three">With the notification's on what to do - it
                                                              should keep me on track!</p>
                                                      </div>
                                                  </div>
                                                  <div class="Feefo-parent">
                                                      <a href="https://www.feefo.com/reviews/growing-interactive"
                                                          target="_blank"><img alt="Feefo logo" border="0"
                                                              src="https://api.feefo.com/api/logo?merchantidentifier=growing-interactive"
                                                              title="See what our customers say about us"></a>
                                                  </div>
                                                  <div class="cre-unfiltered-review">
                                                      <a href="https://www.feefo.com/en-US/reviews/growing-interactive?displayFeedbackType=BOTH&amp;timeFrame=YEAR"
                                                          class="review-link" target="_blank">See all unfiltered reviews</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="swiper-button-prev"></div>
              <div class=" swiper-button-next"></div>
          </div>
      </div>
          </div>
        </div>
      </div>
    </div>`;
        var mobileNavitem = `<ul class="mobile-nav-81">
    <li> <p class="overview-t81-mobile">Overview</p><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/seemorearrow.png" alt="link" style="width:20px"></li>
    <li><p class="perfectPlan-t81">Create Your Plan</p><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/seemorearrow.png" alt="link" style="width:20px"></li>
    <li><p class="personalized-calendar-81">Personalized Planting Calendar</p><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/seemorearrow.png" alt="link" style="width:20px"></li>
    <li><p class="maximizeharvest-t81">Maximize Your Harvest</p><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/seemorearrow.png" alt="link" style="width:20px"></li>
    <li><a href="/account/create-account/" class="Cre-T-81-StickyNav-CTA">Get Started Free</a></li>
</ul>`

        var newstyle = `
<div class="cre-t-81-usp-content5-wrapper cre-t-81-usp-content-wrapper">
    <div class="cre-t-81-usp-content-5-container cre-t-81-usp-content-container cre-t-81-caret">
        <div class="cre-t-81-usp-content-5-main">
            <div class="cre-t-81-usp-header">The most comprehensive list of plants available</div>
            <div class="cre-t-81-usp-paragraph">
                <p>Choose from over <strong>21,657</strong> varieties of veggies, herbs, fruits and flowers, in one easy-to-use tool. </p>
                <p>You can also add ornamental plants, trees & shrubs, and many tropical plants, ensuring your garden will be as unique as you are!</p>
                <p>And if we don’t yet have a plant you need, you can easily add your own custom varieties.</p>
            </div>
            <div class="cre-t-81-5-review-wrapper">
                <div class="cre-t-81-5-review-container">
                    <div class="swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

        var creBugSection =
            "" +
            '  <div class="cre-t-5-protect-left cre-t-5-protect-left-mobile">' +
            '      <div class="cre-t-5-protect-left-bubble">' +
            '          <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/Circle+image.png" alt="" />' +
            "  " +
            "      </div>" +
            '      <div class="cre-t-5-protect-left-pests-wrapper">' +
            '          <div class="cre-t-5-protect-left-pests cre-t-5-protect-left-pests1">' +
            '              <div class="cre-t-5-protect-left-pests-icon">' +
            '                  <img src="https://gardenplannerwebsites.azureedge.net/theme/growveg/beneficial-insects-icon-btn.jpg" />' +
            "              </div>" +
            '              <div class="cre-t-5-protect-left-pests-content">' +
            '                  <div class="cre-t-5-protect-left-pests-img">' +
            '                      <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="25px" height="27.246094px" viewBox="0 0 25 27.246094" version="1.1">' +
            '                  <g id="">' +
            '                    <g id="" fill="#12982E">' +
            '                      <path d="M24.6093 12.5C24.6093 5.81221 19.1878 0.390676 12.5 0.390676C5.81215 0.390676 0.390624 5.81221 0.390624 12.5C0.390624 19.1878 5.81215 24.6094 12.5 24.6094C19.1878 24.6094 24.6093 19.1878 24.6093 12.5ZM11.0993 18.9118C10.7942 19.2169 10.2995 19.2169 9.99439 18.9118L4.91628 13.8337C4.61124 13.5286 4.61124 13.0339 4.91628 12.7288L6.02115 11.624C6.32623 11.3189 6.82095 11.3189 7.12603 11.624L10.5468 15.0448L17.8739 7.71779C18.179 7.41266 18.6738 7.41266 18.9788 7.71779L20.0837 8.82262C20.3887 9.12769 20.3887 9.62241 20.0837 9.92749L11.0993 18.9118Z" />' +
            "                    </g>" +
            "                  </g>" +
            "                </svg>" +
            "                  </div>" +
            '                  <div class="cre-t-5-protect-left-pests-text">' +
            '                      <h1 class="cre-t-5-protect-left-pests-text-wrapper">Attract beneficial insects</h1>' +
            "                  </div>" +
            "              </div>" +
            "          </div>" +
            '          <div class="cre-t-5-protect-left-pests cre-t-5-protect-left-pests2">' +
            '              <div class="cre-t-5-protect-left-pests-icon">' +
            '                  <img src="https://gardenplannerwebsites.azureedge.net/theme/growveg/pests-icon-btn.jpg" />' +
            "              </div>" +
            '              <div class="cre-t-5-protect-left-pests-content">' +
            '                  <div class="cre-t-5-protect-left-pests-img">' +
            '                      <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="25px" height="27.246094px" viewBox="0 0 25 27.246094" version="1.1">' +
            '                  <g id="">' +
            '                    <g id="" fill="#C80800">' +
            '                      <path d="M12.5 0.390676C5.81053 0.390676 0.390624 5.81059 0.390624 12.5C0.390624 19.1895 5.81053 24.6094 12.5 24.6094C19.1894 24.6094 24.6093 19.1895 24.6093 12.5C24.6093 5.81059 19.1894 0.390676 12.5 0.390676ZM18.4374 15.6787C18.6669 15.9082 18.6669 16.2793 18.4374 16.5088L16.5039 18.4375C16.2744 18.667 15.9033 18.667 15.6738 18.4375L12.5 15.2344L9.32129 18.4375C9.09178 18.667 8.72066 18.667 8.49121 18.4375L6.5625 16.5039C6.333 16.2744 6.333 15.9033 6.5625 15.6738L9.7656 12.5L6.5625 9.32134C6.333 9.09184 6.333 8.72072 6.5625 8.49126L8.49607 6.55764C8.72557 6.32814 9.09665 6.32814 9.32615 6.55764L12.5 9.76565L15.6787 6.56256C15.9082 6.33305 16.2793 6.33305 16.5087 6.56256L18.4423 8.49613C18.6719 8.72563 18.6719 9.0967 18.4423 9.3262L15.2343 12.5L18.4374 15.6787Z" />' +
            "                    </g>" +
            "                  </g>" +
            "                </svg>" +
            "                  </div>" +
            '                  <div class="cre-t-5-protect-left-pests-text">' +
            '                      <h1 class="cre-t-5-protect-left-pests-text-wrapper">Repel pests</h1>' +
            "                  </div>" +
            "              </div>" +
            "          </div>" +
            '          <div class="cre-t-5-protect-left-pests cre-t-5-protect-left-pests3">' +
            '              <div class="cre-t-5-protect-left-pests-icon">' +
            '                  <img src="https://gardenplannerwebsites.azureedge.net/theme/growveg/diseases-icon-btn.jpg" />' +
            "              </div>" +
            '              <div class="cre-t-5-protect-left-pests-content">' +
            '                  <div class="cre-t-5-protect-left-pests-img">' +
            '                      <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="25px" height="27.246094px" viewBox="0 0 25 27.246094" version="1.1">' +
            '                  <g id="">' +
            '                    <g id="" fill="#C80800">' +
            '                      <path d="M12.5 0.390676C5.81053 0.390676 0.390624 5.81059 0.390624 12.5C0.390624 19.1895 5.81053 24.6094 12.5 24.6094C19.1894 24.6094 24.6093 19.1895 24.6093 12.5C24.6093 5.81059 19.1894 0.390676 12.5 0.390676ZM18.4374 15.6787C18.6669 15.9082 18.6669 16.2793 18.4374 16.5088L16.5039 18.4375C16.2744 18.667 15.9033 18.667 15.6738 18.4375L12.5 15.2344L9.32129 18.4375C9.09178 18.667 8.72066 18.667 8.49121 18.4375L6.5625 16.5039C6.333 16.2744 6.333 15.9033 6.5625 15.6738L9.7656 12.5L6.5625 9.32134C6.333 9.09184 6.333 8.72072 6.5625 8.49126L8.49607 6.55764C8.72557 6.32814 9.09665 6.32814 9.32615 6.55764L12.5 9.76565L15.6787 6.56256C15.9082 6.33305 16.2793 6.33305 16.5087 6.56256L18.4423 8.49613C18.6719 8.72563 18.6719 9.0967 18.4423 9.3262L15.2343 12.5L18.4374 15.6787Z" />' +
            "                    </g>" +
            "                  </g>" +
            "                </svg>" +
            "                  </div>" +
            '                  <div class="cre-t-5-protect-left-pests-text">' +
            '                      <h1 class="cre-t-5-protect-left-pests-text-wrapper">Treat & prevent plant diseases</h1>' +
            "                  </div>" +
            "              </div>" +
            "          </div>" +
            "      </div>" +
            "  </div>";
        var heroSection = `<div class="cre-t-5-hero-wrapper container-T-81" id="hero-wrapper">
        <div class="cre-t-5-hero-container">
            <div class="cre-t-5-hero-main">
                <div class="cre-t-5-hero-top">
                    <h1 class="cre-t-5-hero-header">Discover the secret to a more productive garden</h1>
                    <h1 class="cre-t-5-hero-sub-header">Whether you're a beginner or a pro, we'll help you garden more
                        efficiently, saving
                        money and increasing harvests all year round</h1>
                </div>
                <div class="cre-t-5-hero-bottom">
                    <div class="cre-t-5-hero-left">
                        <h1 class="cre-t-5-hero-left-header">Our foolproof Garden Planner guides you
                            through each step to achieve better growth,
                            year after year</h1>
                        <div class="cre-t-5-hero-left-list-items">
                            <div class="cre-t-5-hero-left-list-item">
                                <div class="cre-t-5-hero-left-list-item-icon">
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                                        width="19px" height="21px" viewBox="0 0 19 21" version="1.1">
                                        <g id="" fill="#1DC089">
                                            <path
                                                d="M18.7031 11.1865C18.7031 6.10377 14.5828 1.9834 9.5 1.9834C4.41725 1.9834 0.296875 6.10377 0.296875 11.1865C0.296875 16.2693 4.41725 20.3896 9.5 20.3896C14.5828 20.3896 18.7031 16.2693 18.7031 11.1865ZM8.4355 16.0595C8.2036 16.2913 7.82765 16.2913 7.59575 16.0595L3.73638 12.2001C3.50455 11.9682 3.50455 11.5923 3.73638 11.3604L4.57609 10.5207C4.80795 10.2889 5.18393 10.2889 5.41579 10.5207L8.01563 13.1206L13.5842 7.55202C13.8161 7.32012 14.1921 7.32012 14.4239 7.55202L15.2636 8.39169C15.4954 8.62355 15.4954 8.99953 15.2636 9.2314L8.4355 16.0595Z">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                                <p class="cre-t-5-hero-left-list-item-content"><span>Add plants to your plan </span>and
                                    easily drag them around to get your
                                    perfect layout</p>
                            </div>
                            <div class="cre-t-5-hero-left-list-item">
                                <div class="cre-t-5-hero-left-list-item-icon">
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                                        width="19px" height="21px" viewBox="0 0 19 21" version="1.1">
                                        <g id="" fill="#1DC089">
                                            <path
                                                d="M18.7031 11.1865C18.7031 6.10377 14.5828 1.9834 9.5 1.9834C4.41725 1.9834 0.296875 6.10377 0.296875 11.1865C0.296875 16.2693 4.41725 20.3896 9.5 20.3896C14.5828 20.3896 18.7031 16.2693 18.7031 11.1865ZM8.4355 16.0595C8.2036 16.2913 7.82765 16.2913 7.59575 16.0595L3.73638 12.2001C3.50455 11.9682 3.50455 11.5923 3.73638 11.3604L4.57609 10.5207C4.80795 10.2889 5.18393 10.2889 5.41579 10.5207L8.01563 13.1206L13.5842 7.55202C13.8161 7.32012 14.1921 7.32012 14.4239 7.55202L15.2636 8.39169C15.4954 8.62355 15.4954 8.99953 15.2636 9.2314L8.4355 16.0595Z">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                                <p class="cre-t-5-hero-left-list-item-content"><span>See which plants grow well
                                        together</span> at the click of a button with the
                                    world's only Evidence-Based Companion Planting system</p>
                            </div>
                            <div class="cre-t-5-hero-left-list-item">
                                <div class="cre-t-5-hero-left-list-item-icon">
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                                        width="19px" height="21px" viewBox="0 0 19 21" version="1.1">
                                        <g id="" fill="#1DC089">
                                            <path
                                                d="M18.7031 11.1865C18.7031 6.10377 14.5828 1.9834 9.5 1.9834C4.41725 1.9834 0.296875 6.10377 0.296875 11.1865C0.296875 16.2693 4.41725 20.3896 9.5 20.3896C14.5828 20.3896 18.7031 16.2693 18.7031 11.1865ZM8.4355 16.0595C8.2036 16.2913 7.82765 16.2913 7.59575 16.0595L3.73638 12.2001C3.50455 11.9682 3.50455 11.5923 3.73638 11.3604L4.57609 10.5207C4.80795 10.2889 5.18393 10.2889 5.41579 10.5207L8.01563 13.1206L13.5842 7.55202C13.8161 7.32012 14.1921 7.32012 14.4239 7.55202L15.2636 8.39169C15.4954 8.62355 15.4954 8.99953 15.2636 9.2314L8.4355 16.0595Z">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                                <p class="cre-t-5-hero-left-list-item-content"><span>Be shown where to avoid placing
                                        plants</span> based on previous years
                                    plans — makes crop rotation simple</p>
                            </div>
                            <div class="cre-t-5-hero-left-list-item">
                                <div class="cre-t-5-hero-left-list-item-icon">
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                                        width="19px" height="21px" viewBox="0 0 19 21" version="1.1">
                                        <g id="" fill="#1DC089">
                                            <path
                                                d="M18.7031 11.1865C18.7031 6.10377 14.5828 1.9834 9.5 1.9834C4.41725 1.9834 0.296875 6.10377 0.296875 11.1865C0.296875 16.2693 4.41725 20.3896 9.5 20.3896C14.5828 20.3896 18.7031 16.2693 18.7031 11.1865ZM8.4355 16.0595C8.2036 16.2913 7.82765 16.2913 7.59575 16.0595L3.73638 12.2001C3.50455 11.9682 3.50455 11.5923 3.73638 11.3604L4.57609 10.5207C4.80795 10.2889 5.18393 10.2889 5.41579 10.5207L8.01563 13.1206L13.5842 7.55202C13.8161 7.32012 14.1921 7.32012 14.4239 7.55202L15.2636 8.39169C15.4954 8.62355 15.4954 8.99953 15.2636 9.2314L8.4355 16.0595Z">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                                <p class="cre-t-5-hero-left-list-item-content"><span>Generate a personalized calendar
                                    </span>tailored to your local climate - see exactly when to sow, plant, and harvest each
                                    crop</p>
                            </div>
                            <div class="cre-t-5-hero-left-list-item">
                                <div class="cre-t-5-hero-left-list-item-icon">
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                                        width="19px" height="21px" viewBox="0 0 19 21" version="1.1">
                                        <g id="" fill="#1DC089">
                                            <path
                                                d="M18.7031 11.1865C18.7031 6.10377 14.5828 1.9834 9.5 1.9834C4.41725 1.9834 0.296875 6.10377 0.296875 11.1865C0.296875 16.2693 4.41725 20.3896 9.5 20.3896C14.5828 20.3896 18.7031 16.2693 18.7031 11.1865ZM8.4355 16.0595C8.2036 16.2913 7.82765 16.2913 7.59575 16.0595L3.73638 12.2001C3.50455 11.9682 3.50455 11.5923 3.73638 11.3604L4.57609 10.5207C4.80795 10.2889 5.18393 10.2889 5.41579 10.5207L8.01563 13.1206L13.5842 7.55202C13.8161 7.32012 14.1921 7.32012 14.4239 7.55202L15.2636 8.39169C15.4954 8.62355 15.4954 8.99953 15.2636 9.2314L8.4355 16.0595Z">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                                <p class="cre-t-5-hero-left-list-item-content"><span>Receive planting reminders by email
                                    </span>of when to sow and plant what's
                                    on your plan based on your local climate</p>
                            </div>
                        </div>
                        <p class="cre-t-5-hero-left-footer-text">Plus so much more, <span>all in a single tool…</span></p>
                    </div>
                    <div class="cre-t-5-hero-right">
                        <div class="cre-t-5-hero-right-top">
                            <div class="cre-t-5-hero-right-bottom-img-section"> <img class="cre-playBtn"
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/cta.png">
                                <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/hero7.png"
                                    alt="">
                            </div>
                        </div>
                        <div class="cre-t-5-hero-right-bottom">
                            <p class="cre-t-5-hero-right-bottom-header">Works on ANY device - <span>no download
                                    required</span></p>
                            <div class="cre-t-5-hero-right-bottom-header-icons">
                                <div class="cre-t-5-hero-right-bottom-header-icon-one"> <img
                                        src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/hero-icons.png"
                                        alt=""> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="cre-t-5-try-garden-wrapper hero-wrapper-part container-T-81">
        <div class="cre-t-5-try-garden-container">
            <div class="cre-t-5-try-garden-main">
                <h1 class="cre-t-5-try-garden-header"><span class="cre-t-5-try-garden-header-border">Try the Garden Planner
                        FREE for 7 days</span>—No payment details needed</h1>
                <div class="cre-t-5-try-garden-lists">
                    <p class="cre-t-5-try-garden-sub-header">Your <span>free 7 day trial</span> includes:</p>
                    <div class="cre-t-5-try-garden-list">
                        <div class="cre-t-5-try-garden-icon">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="19px"
                                height="21px" viewBox="0 0 19 21" version="1.1">
                                <g id="" fill="#1DC089">
                                    <path
                                        d="M18.7031 11.1865C18.7031 6.10377 14.5828 1.9834 9.5 1.9834C4.41725 1.9834 0.296875 6.10377 0.296875 11.1865C0.296875 16.2693 4.41725 20.3896 9.5 20.3896C14.5828 20.3896 18.7031 16.2693 18.7031 11.1865ZM8.4355 16.0595C8.2036 16.2913 7.82765 16.2913 7.59575 16.0595L3.73638 12.2001C3.50455 11.9682 3.50455 11.5923 3.73638 11.3604L4.57609 10.5207C4.80795 10.2889 5.18393 10.2889 5.41579 10.5207L8.01563 13.1206L13.5842 7.55202C13.8161 7.32012 14.1921 7.32012 14.4239 7.55202L15.2636 8.39169C15.4954 8.62355 15.4954 8.99953 15.2636 9.2314L8.4355 16.0595Z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <p class="cre-t-5-try-garden-content">Full access to the <span>Garden Planner and Garden
                                Journal</span></p>
                    </div>
                    <div class="cre-t-5-try-garden-list">
                        <div class="cre-t-5-try-garden-icon">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="19px"
                                height="21px" viewBox="0 0 19 21" version="1.1">
                                <g id="" fill="#1DC089">
                                    <path
                                        d="M18.7031 11.1865C18.7031 6.10377 14.5828 1.9834 9.5 1.9834C4.41725 1.9834 0.296875 6.10377 0.296875 11.1865C0.296875 16.2693 4.41725 20.3896 9.5 20.3896C14.5828 20.3896 18.7031 16.2693 18.7031 11.1865ZM8.4355 16.0595C8.2036 16.2913 7.82765 16.2913 7.59575 16.0595L3.73638 12.2001C3.50455 11.9682 3.50455 11.5923 3.73638 11.3604L4.57609 10.5207C4.80795 10.2889 5.18393 10.2889 5.41579 10.5207L8.01563 13.1206L13.5842 7.55202C13.8161 7.32012 14.1921 7.32012 14.4239 7.55202L15.2636 8.39169C15.4954 8.62355 15.4954 8.99953 15.2636 9.2314L8.4355 16.0595Z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <p class="cre-t-5-try-garden-content">Access to <span>all expert Grow Guides</span>, videos and
                            articles at your fingertips</p>
                    </div>
                    <div class="cre-t-5-try-garden-list">
                        <div class="cre-t-5-try-garden-icon">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="19px"
                                height="21px" viewBox="0 0 19 21" version="1.1">
                                <g id="" fill="#1DC089">
                                    <path
                                        d="M18.7031 11.1865C18.7031 6.10377 14.5828 1.9834 9.5 1.9834C4.41725 1.9834 0.296875 6.10377 0.296875 11.1865C0.296875 16.2693 4.41725 20.3896 9.5 20.3896C14.5828 20.3896 18.7031 16.2693 18.7031 11.1865ZM8.4355 16.0595C8.2036 16.2913 7.82765 16.2913 7.59575 16.0595L3.73638 12.2001C3.50455 11.9682 3.50455 11.5923 3.73638 11.3604L4.57609 10.5207C4.80795 10.2889 5.18393 10.2889 5.41579 10.5207L8.01563 13.1206L13.5842 7.55202C13.8161 7.32012 14.1921 7.32012 14.4239 7.55202L15.2636 8.39169C15.4954 8.62355 15.4954 8.99953 15.2636 9.2314L8.4355 16.0595Z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <p class="cre-t-5-try-garden-content"><span>Priority support </span>from our expert gardeners</p>
                    </div>
                </div>
                <div class="cre-t-5-try-garden-buttons">
                    <p class="cre-t-5-try-garden-buttons-header">As part of your trial, you can create and print your garden
                        plan and keep it forever, no matter what you decide.<span
                            class="cre-t-5-try-garden-buttons-header-arrow"></span></p>
                    <a href="/account/create-account/" class="cre-t-5-try-garden-button button-one">Start my FREE 7-day
                        trial now</a> <a href="/subscribeinfo.aspx" class="cre-t-5-try-garden-button">See plans
                        and pricing</a>
                </div>
                <div class="cre-t-5-try-garden-footer"> <span>No download required</span> | No obligation | Cancel any time
                    <br>We’ll only ask for payment details if you decide to keep using the Garden Planner after the free
                    trial.
                </div>
                <div class="Feefo-parent">
                    <a href="https://www.feefo.com/en-US/reviews/growing-interactive?displayFeedbackType=BOTH&timeFrame=YEAR"
                        target="_blank"><img alt="Feefo logo"
                            src="https://api.feefo.com/api/logo?merchantidentifier=growing-interactive"
                            title="See what our customers say about us" /></a>
                </div>
            </div>
        </div>
    </div>
    <div class="cre-t-5-draw-wrapper cre-t-81-caret container-T-81" id="perfectPlan">
        <div class="cre-t-5-draw-container">
            <div class="cre-t-5-draw-main">
                <div class="cre-t-5-draw-top">
                    <h1 class="cre-t-5-draw-header">Create Your Perfect Garden Plan Effortlessly <br>Your essential tool for a successful vegetable garden
                        </h1>
                    <h1 class="cre-t-5-draw-sub-header">Start from scratch or choose from one our beginner-friendly
                        templates</h1>
                </div>
                <div class="cre-t-5-inner mobile-perfect-plan">
                    <div class="slide-heading-mobile">
                        <div class="slide1 active">
                            <p>Beginner</p>
                        </div>
                        <div class="slide2">
                            <p>Feed Your Family</p>
                        </div>
                        <div class="slide3">
                            <p>Salad Garden</p>
    
                        </div>
                        <div class="slide4">
                            <p>Pollinator Paradise</p>
    
                        </div>
                        <div class="slide5">
                            <p>Herb Garden</p>
    
                        </div>
                    </div>
                    <div class="cre-t-5-draw-bottom">
                        <div class="cre-t-5-draw-bottom-wrapper swiper-container Cre-T83-swiper-container-mobile">
                            <div class="swiper-wrapper">
                                <div
                                    class="cre-t-5-draw-bottom-item-content cre-t-5-draw-bottom-item1 cre-t-5-draw-right swiper-slide">
                                    <div class="cre-t-5-draw-bottom-item-img"><img
                                            src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/Beginner-Garden.png"
                                            alt="garden1"></div>
                                    <div class="cre-t-5-draw-bottom-text-content">
                                        <div class="cre-t-5-draw-bottom-text-content-wrapper">
                                            <div class="cre-t-5-draw-bottom-item-content-one"><img
                                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/draw-img-7.png"
                                                    alt="gardenicon"></div>
                                            <h1 class="cre-t-5-draw-bottom-item-content-two">Beginner Garden</h1>
                                            <p class="cre-t-5-draw-bottom-item-content-three">An easy-to-grow garden
                                                consisting
                                                of
                                                four raised beds with a selection of reliable crops.</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="cre-t-5-draw-bottom-item-content cre-t-5-draw-bottom-item2 cre-t-5-draw-left swiper-slide">
                                    <div class="cre-t-5-draw-bottom-item-img"><img
                                            src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/Feed-Your-Family-Garden.png"
                                            alt="garden2"></div>
                                    <div class="cre-t-5-draw-bottom-text-content">
                                        <div class="cre-t-5-draw-bottom-text-content-wrapper">
                                            <div class="cre-t-5-draw-bottom-item-content-one"><img
                                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/draw-img-7.png"
                                                    alt="gardenicon"></div>
                                            <h1 class="cre-t-5-draw-bottom-item-content-two">Feed-Your-Family Garden</h1>
                                            <p class="cre-t-5-draw-bottom-item-content-three">A highly productive garden of
                                                eight
                                                raised beds growing a range of vegetables that the whole family will enjoy.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="cre-t-5-draw-bottom-item-content cre-t-5-draw-bottom-item3 cre-t-5-draw-right swiper-slide">
                                    <div class="cre-t-5-draw-bottom-item-img"><img
                                            src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/Salad-Garden.png"
                                            alt="garden3"></div>
                                    <div class="cre-t-5-draw-bottom-text-content">
                                        <div class="cre-t-5-draw-bottom-text-content-wrapper">
                                            <div class="cre-t-5-draw-bottom-item-content-one"><img
                                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/draw-img-7.png"
                                                    alt="gardenicon"></div>
                                            <h1 class="cre-t-5-draw-bottom-item-content-two">Salad Garden</h1>
                                            <p class="cre-t-5-draw-bottom-item-content-three">Two small raised beds with
                                                simple-to-grow salads, along with edible flowers that will attract
                                                beneficial
                                                insects.</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="cre-t-5-draw-bottom-item-content cre-t-5-draw-bottom-item4 cre-t-5-draw-left swiper-slide">
                                    <div class="cre-t-5-draw-bottom-item-img"><img
                                            src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/Pollinator-Garden.png"
                                            alt="garden4"></div>
                                    <div class="cre-t-5-draw-bottom-text-content">
                                        <div class="cre-t-5-draw-bottom-text-content-wrapper">
                                            <div class="cre-t-5-draw-bottom-item-content-one"><img
                                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/draw-img-7.png"
                                                    alt="gardenicon"></div>
                                            <h1 class="cre-t-5-draw-bottom-item-content-two">Pollinator Paradise Garden</h1>
                                            <p class="cre-t-5-draw-bottom-item-content-three">A beautiful garden full of
                                                flowers
                                                that will attract pollinating insects throughout the year.</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="cre-t-5-draw-bottom-item-content cre-t-5-draw-bottom-item5 cre-t-5-draw-right swiper-slide">
                                    <div class="cre-t-5-draw-bottom-item-img"><img
                                            src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/Herb-Garden.png"
                                            alt="garden5"></div>
                                    <div class="cre-t-5-draw-bottom-text-content">
                                        <div class="cre-t-5-draw-bottom-text-content-wrapper">
                                            <div class="cre-t-5-draw-bottom-item-content-one"><img
                                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/draw-img-7.png"
                                                    alt="gardenicon"></div>
                                            <h1 class="cre-t-5-draw-bottom-item-content-two">Herb Garden</h1>
                                            <p class="cre-t-5-draw-bottom-item-content-three">A beautiful circular herb
                                                garden
                                                supplemented by herbs that are best grown in containers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-button-prev"><svg xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns="http://www.w3.org/2000/svg" width="21px" height="24px" viewBox="0 0 21 24" version="1.1"
                            style="
    fill: black;
    ">
                            <g id="" fill="#ffffff">
                                <path
                                    d="M20.9578 12.8672C20.9578 13.4883 20.4534 13.9927 19.8323 13.9927L3.93281 13.9927L10.1531 19.927C10.6043 20.3562 10.6204 21.0713 10.1912 21.518C9.76202 21.9677 9.05027 21.9838 8.60027 21.5561L0.350274 13.6811C0.126328 13.4719 0.000365496 13.1766 0.000365496 12.8672C0.000365496 12.5578 0.126328 12.2672 0.348984 12.0516L8.59898 4.17656C9.04687 3.75047 9.75937 3.76641 10.1906 4.21641C10.6198 4.66172 10.6037 5.37656 10.1525 5.80734L3.93223 11.7417L19.8744 11.7417C20.4937 11.7422 20.9578 12.2484 20.9578 12.8672L20.9578 12.8672Z">
                                </path>
                            </g>
                        </svg></div>
                    <div class="swiper-button-next"><svg xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns="http://www.w3.org/2000/svg" width="21px" height="24px" viewBox="0 0 21 24" version="1.1"
                            style="
    fill: black;
    ">
                            <g id="" fill="#ffffff">
                                <path
                                    d="M20.9578 12.8672C20.9578 13.4883 20.4534 13.9927 19.8323 13.9927L3.93281 13.9927L10.1531 19.927C10.6043 20.3562 10.6204 21.0713 10.1912 21.518C9.76202 21.9677 9.05027 21.9838 8.60027 21.5561L0.350274 13.6811C0.126328 13.4719 0.000365496 13.1766 0.000365496 12.8672C0.000365496 12.5578 0.126328 12.2672 0.348984 12.0516L8.59898 4.17656C9.04687 3.75047 9.75937 3.76641 10.1906 4.21641C10.6198 4.66172 10.6037 5.37656 10.1525 5.80734L3.93223 11.7417L19.8744 11.7417C20.4937 11.7422 20.9578 12.2484 20.9578 12.8672L20.9578 12.8672Z">
                                </path>
                            </g>
                        </svg></div>
                </div>
                <div class="cre-t-5-inner desk-perfect-plan">
                    <div class="slide-heading">
                        <div class="slide1 active">
                            <p>Beginner</p>
                        </div>
                        <div class="slide2">
                            <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/seemorearrow.png"
                                alt="link" style="width:20px">
                            <p>Feed Your Family</p>
                        </div>
                        <div class="slide3">
                            <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/seemorearrow.png"
                                alt="link" style="width:20px">
                            <p>Salad Garden</p>
    
                        </div>
                        <div class="slide4">
                            <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/seemorearrow.png"
                                alt="link" style="width:20px">
                            <p>Pollinator Paradise</p>
    
                        </div>
                        <div class="slide5">
                            <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/seemorearrow.png"
                                alt="link" style="width:20px">
                            <p>Herb Garden</p>
    
                        </div>
                        <div class="slide6">
                            <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/seemorearrow.png"
                                alt="link" style="width:20px">
                            <p>More...</p>
    
                        </div>
                    </div>
                    <div class="cre-t-5-draw-bottom">
                        <div class="cre-t-5-draw-bottom-wrapper swiper-container Cre-T83-swiper-container">
                            <div class="swiper-wrapper">
                                <div
                                    class="cre-t-5-draw-bottom-item-content cre-t-5-draw-bottom-item1 cre-t-5-draw-right swiper-slide">
                                    <div class="cre-t-5-draw-bottom-item-img"><img
                                            src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/Beginner-Garden.png"
                                            alt="garden1"></div>
                                    <div class="cre-t-5-draw-bottom-text-content">
                                        <div class="cre-t-5-draw-bottom-text-content-wrapper">
                                            <div class="cre-t-5-draw-bottom-item-content-one"><img
                                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/draw-img-7.png"
                                                    alt="gardenicon"></div>
                                            <h1 class="cre-t-5-draw-bottom-item-content-two">Beginner Garden</h1>
                                            <p class="cre-t-5-draw-bottom-item-content-three">An easy-to-grow garden
                                                consisting
                                                of
                                                four raised beds with a selection of reliable crops.</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="cre-t-5-draw-bottom-item-content cre-t-5-draw-bottom-item2 cre-t-5-draw-left swiper-slide">
                                    <div class="cre-t-5-draw-bottom-item-img"><img
                                            src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/Feed-Your-Family-Garden.png"
                                            alt="garden2"></div>
                                    <div class="cre-t-5-draw-bottom-text-content">
                                        <div class="cre-t-5-draw-bottom-text-content-wrapper">
                                            <div class="cre-t-5-draw-bottom-item-content-one"><img
                                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/draw-img-7.png"
                                                    alt="gardenicon"></div>
                                            <h1 class="cre-t-5-draw-bottom-item-content-two">Feed-Your-Family Garden</h1>
                                            <p class="cre-t-5-draw-bottom-item-content-three">A highly productive garden of
                                                eight
                                                raised beds growing a range of vegetables that the whole family will enjoy.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="cre-t-5-draw-bottom-item-content cre-t-5-draw-bottom-item3 cre-t-5-draw-right swiper-slide">
                                    <div class="cre-t-5-draw-bottom-item-img"><img
                                            src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/Salad-Garden.png"
                                            alt="garden3"></div>
                                    <div class="cre-t-5-draw-bottom-text-content">
                                        <div class="cre-t-5-draw-bottom-text-content-wrapper">
                                            <div class="cre-t-5-draw-bottom-item-content-one"><img
                                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/draw-img-7.png"
                                                    alt="gardenicon"></div>
                                            <h1 class="cre-t-5-draw-bottom-item-content-two">Salad Garden</h1>
                                            <p class="cre-t-5-draw-bottom-item-content-three">Two small raised beds with
                                                simple-to-grow salads, along with edible flowers that will attract
                                                beneficial
                                                insects.</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="cre-t-5-draw-bottom-item-content cre-t-5-draw-bottom-item4 cre-t-5-draw-left swiper-slide">
                                    <div class="cre-t-5-draw-bottom-item-img"><img
                                            src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/Pollinator-Garden.png"
                                            alt="garden4"></div>
                                    <div class="cre-t-5-draw-bottom-text-content">
                                        <div class="cre-t-5-draw-bottom-text-content-wrapper">
                                            <div class="cre-t-5-draw-bottom-item-content-one"><img
                                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/draw-img-7.png"
                                                    alt="gardenicon"></div>
                                            <h1 class="cre-t-5-draw-bottom-item-content-two">Pollinator Paradise Garden</h1>
                                            <p class="cre-t-5-draw-bottom-item-content-three">A beautiful garden full of
                                                flowers
                                                that will attract pollinating insects throughout the year.</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="cre-t-5-draw-bottom-item-content cre-t-5-draw-bottom-item5 cre-t-5-draw-right swiper-slide">
                                    <div class="cre-t-5-draw-bottom-item-img"><img
                                            src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/Herb-Garden.png"
                                            alt="garden5"></div>
                                    <div class="cre-t-5-draw-bottom-text-content">
                                        <div class="cre-t-5-draw-bottom-text-content-wrapper">
                                            <div class="cre-t-5-draw-bottom-item-content-one"><img
                                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/draw-img-7.png"
                                                    alt="gardenicon"></div>
                                            <h1 class="cre-t-5-draw-bottom-item-content-two">Herb Garden</h1>
                                            <p class="cre-t-5-draw-bottom-item-content-three">A beautiful circular herb
                                                garden
                                                supplemented by herbs that are best grown in containers.</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="cre-t-5-draw-bottom-item-content cre-t-5-draw-bottom-item6 cre-t-5-draw-bottom-item6-desktop swiper-slide">
                                    <div class="cre-t-5-draw-item6-header">
                                        <h1 class="cre-t-5-draw-item6-header-text">And many more!</h1>
                                    </div>
                                    <div class="cre-t-5-draw-bottom-item-img"> <img
                                            src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/googleCollage.png"
                                            alt="garden6" class="cre-t-5-draw-bottom-item-img1"> <img
                                            src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/garden9.png"
                                            alt="garden9" class="cre-t-5-draw-bottom-item-img2"> <img
                                            src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/garden11.png"
                                            alt="garden11" class="cre-t-5-draw-bottom-item-img3"> <img
                                            src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/garden14.png"
                                            alt="garden14" class="cre-t-5-draw-bottom-item-img4">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="cre-t-5-draw-bottom-item-content cre-t-5-draw-bottom-item7 cre-t-5-draw-bottom-item7-mobile">
                            <div class="cre-t-5-draw-item6-header">
                                <h1 class="cre-t-5-draw-item6-header-text">And many more!</h1>
                            </div>
                            <div class="cre-t-5-draw-bottom-item-img"> <img
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/googleCollage.png"
                                    alt="garden6" class="cre-t-5-draw-bottom-item-img1"> <img
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/garden9.png"
                                    alt="garden9-another" class="cre-t-5-draw-bottom-item-img2"> <img
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/garden11.png"
                                    alt="garden11-another" class="cre-t-5-draw-bottom-item-img3"> <img
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/garden14.png"
                                    alt="garden14-another" class="cre-t-5-draw-bottom-item-img4"> </div>
                        </div>
                    </div>
                    <div class="swiper-button-prev"><svg xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns="http://www.w3.org/2000/svg" width="21px" height="24px" viewBox="0 0 21 24" version="1.1"
                            style="
                    fill: black;
                    ">
                            <g id="" fill="#ffffff">
                                <path
                                    d="M20.9578 12.8672C20.9578 13.4883 20.4534 13.9927 19.8323 13.9927L3.93281 13.9927L10.1531 19.927C10.6043 20.3562 10.6204 21.0713 10.1912 21.518C9.76202 21.9677 9.05027 21.9838 8.60027 21.5561L0.350274 13.6811C0.126328 13.4719 0.000365496 13.1766 0.000365496 12.8672C0.000365496 12.5578 0.126328 12.2672 0.348984 12.0516L8.59898 4.17656C9.04687 3.75047 9.75937 3.76641 10.1906 4.21641C10.6198 4.66172 10.6037 5.37656 10.1525 5.80734L3.93223 11.7417L19.8744 11.7417C20.4937 11.7422 20.9578 12.2484 20.9578 12.8672L20.9578 12.8672Z">
                                </path>
                            </g>
                        </svg></div>
                    <div class="swiper-button-next"><svg xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns="http://www.w3.org/2000/svg" width="21px" height="24px" viewBox="0 0 21 24" version="1.1"
                            style="
                    fill: black;
                    ">
                            <g id="" fill="#ffffff">
                                <path
                                    d="M20.9578 12.8672C20.9578 13.4883 20.4534 13.9927 19.8323 13.9927L3.93281 13.9927L10.1531 19.927C10.6043 20.3562 10.6204 21.0713 10.1912 21.518C9.76202 21.9677 9.05027 21.9838 8.60027 21.5561L0.350274 13.6811C0.126328 13.4719 0.000365496 13.1766 0.000365496 12.8672C0.000365496 12.5578 0.126328 12.2672 0.348984 12.0516L8.59898 4.17656C9.04687 3.75047 9.75937 3.76641 10.1906 4.21641C10.6198 4.66172 10.6037 5.37656 10.1525 5.80734L3.93223 11.7417L19.8744 11.7417C20.4937 11.7422 20.9578 12.2484 20.9578 12.8672L20.9578 12.8672Z">
                                </path>
                            </g>
                        </svg></div>
                </div>
    
            </div>
        </div>
    </div>
    <div class="cre-t-5-impressive-wrapper container-T-81">
        <div class="cre-t-5-impressive-header">See some of the impressive gardens created and shared by our users:</div>
        <div class="cre-t-5-impressive-container">
            <div class="cre-t-5-impressive-main">
                <div class="cre-t-5-impressive-slider">
                    <div class="swiper" id="impressive-Slider">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="cre-t-5-impressive-image-wrapper"> <img
                                        src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/gardenSliderImage1-min.jpeg"
                                        alt=""> </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="cre-t-5-impressive-image-wrapper"> <img
                                        src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/gardenSliderImage2-min.jpg"
                                        alt=""> </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="cre-t-5-impressive-image-wrapper"> <img
                                        src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/gardenSliderImage3-min.jpg"
                                        alt=""> </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="cre-t-5-impressive-image-wrapper"> <img
                                        src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/gardenSliderImage4-min.jpg"
                                        alt=""> </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="cre-t-5-impressive-image-wrapper"> <img
                                        src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/gardenSliderImage5-min.jpg"
                                        alt=""> </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="cre-t-5-impressive-image-wrapper"> <img
                                        src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/gardenSliderImage6-min.jpg"
                                        alt=""> </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="cre-t-5-impressive-image-wrapper"> <img
                                        src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/gardenSliderImage7-min.jpg"
                                        alt=""> </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="cre-t-5-impressive-image-wrapper"> <img
                                        src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/gardenSliderImage8-min.jpg"
                                        alt=""> </div>
                            </div>
                        </div>
                        <div class="swiper-pagination-impressive-Slider">
                        </div>
                        <div class="swiper-button-prev-impressive-Slider">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="21px"
                                height="24px" viewBox="0 0 21 24" version="1.1" style="
                      fill: black;
                      ">
                                <g id="" fill="#ffffff">
                                    <path
                                        d="M20.9578 12.8672C20.9578 13.4883 20.4534 13.9927 19.8323 13.9927L3.93281 13.9927L10.1531 19.927C10.6043 20.3562 10.6204 21.0713 10.1912 21.518C9.76202 21.9677 9.05027 21.9838 8.60027 21.5561L0.350274 13.6811C0.126328 13.4719 0.000365496 13.1766 0.000365496 12.8672C0.000365496 12.5578 0.126328 12.2672 0.348984 12.0516L8.59898 4.17656C9.04687 3.75047 9.75937 3.76641 10.1906 4.21641C10.6198 4.66172 10.6037 5.37656 10.1525 5.80734L3.93223 11.7417L19.8744 11.7417C20.4937 11.7422 20.9578 12.2484 20.9578 12.8672L20.9578 12.8672Z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <div class="swiper-button-next-impressive-Slider">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="21px"
                                height="24px" viewBox="0 0 21 24" version="1.1" style="
                      fill: black;
                      ">
                                <g id="" fill="#ffffff">
                                    <path
                                        d="M20.9578 12.8672C20.9578 13.4883 20.4534 13.9927 19.8323 13.9927L3.93281 13.9927L10.1531 19.927C10.6043 20.3562 10.6204 21.0713 10.1912 21.518C9.76202 21.9677 9.05027 21.9838 8.60027 21.5561L0.350274 13.6811C0.126328 13.4719 0.000365496 13.1766 0.000365496 12.8672C0.000365496 12.5578 0.126328 12.2672 0.348984 12.0516L8.59898 4.17656C9.04687 3.75047 9.75937 3.76641 10.1906 4.21641C10.6198 4.66172 10.6037 5.37656 10.1525 5.80734L3.93223 11.7417L19.8744 11.7417C20.4937 11.7422 20.9578 12.2484 20.9578 12.8672L20.9578 12.8672Z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="cre-81-gradient-background container-T-81">
        <div class="cre-81-GrowwithConfidence">
            <div class="cre-81-GrowwithConfidence-inner">
                <div class="cre-81-header">
                    <h1 class="cre-t-5-draw-header">Grow with confidence — Choose the right crops for your garden with smart
                        filters</h1>
                </div>
                <div>
                    <h1 class="cre-t-5-draw-sub-header">Smart filters ensure you only pick crops that will thrive in
                        your garden—so you won't waste money.</h1>
                </div>
                <div class="cre-81-GrowwithConfidence-image"><img
                        src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/custom-filters2.gif"
                        alt="">
                </div>
            </div>
        </div>
        <div class="cre-81-plantsAndObjects">
            <div class="cre-81-plantsAndObjects-inner">
                <div>
                    <h1 class="cre-t-5-draw-header">Move plants and objects around easily, anytime</h1>
                </div>
                <div class="cre_coulmn_reverse">
                    <div class="cre-81-plantsAndObjects-text">
                        <p>Easily design your garden space and start adding plants —
                            getting started for beginners has never been this simple.</p>
                    </div>
                    <div class="cre-81-plantsAndObjects-image">
                        <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/garden-objects2.gif"
                            alt="">
                    </div>
                </div>
                <div>
                    <div class="cre-81-plantsAndObjects-image">
                        <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/plant-spacing2.gif"
                            alt="">
                    </div>
                    <div class="cre-81-plantsAndObjects-text">
                        <p>Automatically space plants to prevent overcrowding, ensuring
                            optimal sunlight, nutrients, and moisture.</p>
                    </div>
                </div>
                <div class="cre_coulmn_reverse">
                    <div class="cre-81-plantsAndObjects-text">
                        <p> Include structures like raised beds and greenhouses.</p>
                        <p>
                            The Planner auto-adjusts planting and harvesting dates to
                            reflect the protection they provide.</p>
                    </div>
                    <div class="cre-81-plantsAndObjects-image">
                        <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/different-gardening-styles2.gif"
                            alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="cre-81-gardeningMethod">
            <div class="cre-81-gardeningMethod-inner">
                <div>
                    <h1 class="cre-t-5-draw-header">Works in any space and with every gardening method</h1>
                </div>
                <div>
                    <div class="cre-81-plantsAndObjects-image-slider">
                        <section id="imagesilder-T81">
                            <div class="slidercontainer-T-81 wide">
                                <p class="slider-text-81-mobile">Actual gardens created by our users with the Garden Planner
                                </p>
                                <div class="swiper" id="swiper-t-81">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <figure>
                                                <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/image_123650291_copysize.jpg"
                                                    alt="first-image">
                                            </figure>
                                        </div>
                                        <div class="swiper-slide">
                                            <figure>
                                                <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/image1vcssize.jpg"
                                                    alt="second-image">
                                            </figure>
                                        </div>
                                        <div class="swiper-slide">
                                            <figure>
                                                <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/imagesize.jpeg"
                                                    alt="third-image">
                                            </figure>
                                        </div>
                                        <div class="swiper-slide">
                                            <figure>
                                                <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/June_2023_Gardensize.jpg"
                                                    alt="centerimage">
                                            </figure>
                                        </div>
                                        <div class="swiper-slide">
                                            <figure>
                                                <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/newsliderImagesize.jpg"
                                                    alt="right-image-2">
                                            </figure>
                                        </div>
                                        <div class="swiper-slide">
                                            <figure>
                                                <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/andygardensize.jpeg"
                                                    alt="right-image-3">
                                            </figure>
                                        </div>
                                        <div class="swiper-slide">
                                            <figure>
                                                <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/20231007_Broccoli_Peas_4wkssize.jpg"
                                                    alt="right-image-4">
                                            </figure>
                                        </div>
                                    </div>
                                    <div class="swiper-t-81-pagination"></div>
                                </div>
                                <p class="slider-text-81">Actual gardens created by our users with the Garden Planner</p>
                            </div>
                        </section>
                    </div>
                    <div class="cre-81-plantsAndObjects-text">The Garden Planner works with any shape or size of garden—from
                        balconies to hobby farms.</div>
                </div>
                <div class="cre_coulmn_reverse">
                    <div class="cre-81-plantsAndObjects-text">
                        <p>
                            Whether you prefer traditional rows, containers, raised beds. or
                            square-foot gardening, the Garden Planner has you covered.</p>
                    </div>
                    <div class="cre-81-plantsAndObjects-image">
                        <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/season-extenders2.gif"
                            alt="">
                    </div>
                </div>
                <div class="cre-81-review">
                    <div class="review-top">
                        <div class="review-left">
    
                            <div class="reviewheading">
                                <div class="doubleComas"><img
                                        src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/Landing+Page+%7C+YouTube+This+is+what+Ben+uses+sales+landing+page/4.png"
                                        alt="doubleComas"></div>
                                The Garden Planner is awesome
                            </div>
                            <div class="nameAndLocation"><span class="Review-name">Maryanne,</span> <span
                                    class="Location"></span>
                            </div>
                        </div>
                        <div class="review-right">
                            <div class="review-star"><img
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/star.png"
                                    alt="stars"></div>
                            <div class="full-review">Read the full review</div>
                        </div>
                    </div>
                    <div class="review-bottom">
                        <div class="review-bottom-left">
                            <p>This garden planner is amazing. It has everything you could possibly need for planning your
                                garden. You can put in raised beds, grow bags, hanging baskets, arbores, trellises,
                                pathways, they have everything you can imagine. they have pretty much every vegetable, plant
                                and tree you can think of. They have greenhouses, beehives. chicken coops.
                                They have everything. This is awesome. You put the plants where you want them, then go to
                                plant list and it tells you when to start them indoors. direct sow, when to harvest. its so
                                simple.</p>
                        </div>
                        <div class="review-bottom-right">
                            <a href="https://www.feefo.com/reviews/growing-interactive" target="_blank"><img
                                    alt="Feefo logo" border="0"
                                    src="https://api.feefo.com/api/logo?merchantidentifier=growing-interactive"
                                    title="See what our customers say about us"></a>
                        </div>
    
                    </div>
                    <div class="seeMore"><img
                            src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/seemorearrow.png"
                            alt="see more"></div>
    
                </div>
    
            </div>
        </div>
    </div>
    </div>
    <div class="cre-81-personalized-calendar container-T-81" id="personalized-calendar">
        <div class="cre-81-personalized-calendar-inner">
            <div>
                <h1 class="cre-t-5-draw-header">A personalized calendar with reminders for your garden layout and local
                    climate</h1>
            </div>
            <div>
                <h1 class="cre-t-5-draw-sub-header">Sow, plant, and harvest each crop at exactly the right time to get the
                    most from your garden year-round</h1>
            </div>
            <div class="cre_coulmn_reverse">
                <div class="cre-81-personalized-calendar-text">
                    <p>As you create your garden layout, the Garden Planner
                        automatically builds your personalized calendar which adjusts
                        any time you change your plan.</p>
                </div>
                <div class="cre-81-personalized-calendar-image">
                    <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/SLIDE3.png" alt="">
                </div>
            </div>
            <div>
                <div class="cre-81-personalized-calendar-image">
                    <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/laptopMobileImage1.png"
                        alt="">
                </div>
                <div class="cre-81-personalized-calendar-text">
                    <p>Your calendar and planting recommendations are based
                        on your own plan and local climate data from your
                        nearest weather station.</p>
                </div>
            </div>
            <div class="cre_coulmn_reverse">
                <div class="cre-81-personalized-calendar-text">
                    <p> Stay on track with email reminders when it’s
                        time to plant, sow, and harvest each crop.</p>
                </div>
                <div class="cre-81-personalized-calendar-image">
                    <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/Groupcollage.png"
                        alt="Groupcollage">
                </div>
            </div>
    
            <div class="cre-81-review">
                <div class="review-top">
                    <div class="review-left">
    
                        <div class="reviewheading">
                            <div class="doubleComas"><img
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/Landing+Page+%7C+YouTube+This+is+what+Ben+uses+sales+landing+page/4.png"
                                    alt="doubleComas"></div>
                            Everything under one umbrella. BRILLIANT
                        </div>
                        <div class="nameAndLocation"><span class="Review-name">Scott in Lismore, </span> <span
                                class="Location">NSW Australia</span>
                        </div>
                    </div>
                    <div class="review-right">
                        <div class="review-star"><img
                                src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/star.png"
                                alt="stars"></div>
                        <div class="full-review">Read the full review</div>
                    </div>
                </div>
                <div class="review-bottom">
                    <div class="review-bottom-left">
                        <p>I was trying to run a schedule on spreadsheets and notepads but gave up on it once I tried this
                            app. Absolutely BRILLIANT with everything in the one spot and takes into account conditions for
                            any location. Highly recommended</p>
                    </div>
                    <div class="review-bottom-right">
                        <a href="https://www.feefo.com/reviews/growing-interactive" target="_blank"><img alt="Feefo logo"
                                border="0" src="https://api.feefo.com/api/logo?merchantidentifier=growing-interactive"
                                title="See what our customers say about us"></a>
                    </div>
                </div>
                <div class="seeMore"><img
                        src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/seemorearrow.png"
                        alt="see more"></div>
            </div>
        </div>
    </div>
    <div class="cre-81-Garden-Planner container-T-81" id="maximizeharvest">
        <div class="cre-81-Garden-Planner-inner">
            <div>
                <h1 class="cre-t-5-draw-header">Best of all, the Garden Planner saves you money...</h1>
            </div>
    
            <div class="cre-81-save-money cre_coulmn_reverse">
                <div class="cre-t-5-best-gardener-left">
                    <div class="cre-81-best-gardener-list-item">
                        <h1 class="cre-t-5-best-gardener-sub-header">Maximize your harvest
                        </h1>
                        <p class="cre-t-5-best-gardener-sub-header-two">Companion planting
                        </p>
                        <p class="cre-t-5-best-gardener-list-content">The world's most advanced Evidence-Based Companion
                            Planting system — suggests plants that grow best together at the click of a button</p>
                    </div>
                    <div class="cre-81-best-gardener-list-item">
                        <p class="cre-t-5-best-gardener-sub-header-two">Crop rotation
                        </p>
                        <p class="cre-t-5-best-gardener-list-content">Helps you avoid a build-up of soil-borne pests and
                            diseases from year to year</p>
                    </div>
                    <div class="cre-81-best-gardener-list-item">
                        <p class="cre-t-5-best-gardener-sub-header-two">Succession Planting
                        </p>
                        <p class="cre-t-5-best-gardener-list-content">Make the most of your space, and see when and
                            where you have space to grow
                            more
                        </p>
                    </div>
                    <div class="cre-81-best-gardener-list-item">
                        <p class="cre-t-5-best-gardener-sub-header-two">Follow-on Plans
                        </p>
                        <p class="cre-t-5-best-gardener-list-content">Create next year's plan from the previous year's
                            plan with the click of a button</p>
                    </div>
    
                </div>
                <div class="cre-81-gardener-right">
                    <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/phone-img.png" alt="">
                </div>
            </div>
            <div class="cre-81-Avoid-wastage">
                <div class="cre-81-graden-planer-image">
                    <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/SLIDE4.png"
                        alt="graden-planer">
                </div>
                <div class="cre-81-graden-planer-text">
                    <h1 class="cre-t-5-best-gardener-sub-header">Avoid wastage - Never buy too many or too few plants or
                        seeds again
                    </h1>
                    <ul>
                        <li>Get a shopping list showing exactly which plants to buy
                            and how many you need</li>
                        <li>Save money and time by raising the right number of plants</li>
                    </ul>
                </div>
            </div>
            <div class="cre-81-Protect-your-crops cre_coulmn_reverse">
                <div class="cre-81-graden-planer-text">
                    <h1 class="cre-t-5-best-gardener-sub-header">Protect your crops from pests & diseases
                    </h1>
                    <p>Companion planting recommendations show you exactly which
                        plants to grow, encouraging beneficial bugs into your garden to
                        take care of pests naturally.</p>
                    <p>And sometimes pests and diseases can still rear their ugly heads.
                        Get straight to the root cause with clear advice on minimizing the
                        damage without pesticides.</p>
                </div>
                <div class="cre-81-graden-planer-image">
                    <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/Group44.png"
                        alt="graden-planer">
                </div>
            </div>
            <div class="cre-81-best-in-your-garden">
                <div class="cre-81-graden-planer-image">
                    <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/Group45.png"
                        alt="graden-planer">
                </div>
                <div class="cre-81-graden-planer-text">
                    <h1 class="cre-t-5-best-gardener-sub-header">Learn what works best in your garden
                    </h1>
                    <p>Track your progress in our Garden Journal — add notes and
                        photos from your phone</p>
                    <ul>
                        <li>Record when you planted or last watered</li>
                            <li>Diagnose problems,
                            and track how much you've harvested</li>
                        <li>The Garden Journal automatically creates reports on your
                            progress, as well as reminders of jobs that need to be done in
                            the next two weeks</li>
                        <li>When you come to plan next year's garden, you can quickly
                            see a neat summary of what worked best</li>
                    </ul>
                </div>
            </div>
            <div class="cre-81-Protect-your-crops cre_coulmn_reverse gurulogo81">
                <div class="cre-81-graden-planer-text">
                    <h1 class="cre-t-5-best-gardener-sub-header">See how its done step-by-step
                    </h1>
                    <p>Timely, personalized videos based on what's in your plan and
                        what's seasonally relevant for your area.</p>
                    <p>Watch as our experts guide you through the steps to gardening
                        success.</p>
                </div>
                <div class="cre-81-graden-planer-image">
                    <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/collargeFaded.png"
                        alt="graden-planer">
                </div>
            </div>
        </div>
    </div>
    <div class="cre-t-5-best-gardener-wrapper container-T-81">
        <div class="cre-t-5-best-gardener-container">
            <div class="cre-t-5-best-gardener-main">
                <div class="cre-t-5-best-gardener-left">
                    <h1 class="cre-t-5-best-gardener-header">Your shortcut to becoming the best gardener you can be</h1>
                    <h1 class="cre-t-5-best-gardener-sub-header">Mastering the art of gardening used to take years of
                        frustrating trial and error over many seasons. But it doesn’t have to be that way any more!</h1>
                    <p class="cre-t-5-best-gardener-sub-header-two">As well as smart features to help you plan your garden,
                        the Garden Planner is packed with all the gardening information you’ll ever need, at your
                        fingertips:</p>
                    <div class="cre-t-5-best-gardener-list">
                        <div class="cre-t-5-best-gardener-list-item">
                            <div class="cre-t-5-best-gardener-list-icon">
                                <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                                    width="19px" height="21px" viewBox="0 0 19 21" version="1.1">
                                    <g id="" fill="#1DC089">
                                        <path
                                            d="M18.7031 11.1865C18.7031 6.10377 14.5828 1.9834 9.5 1.9834C4.41725 1.9834 0.296875 6.10377 0.296875 11.1865C0.296875 16.2693 4.41725 20.3896 9.5 20.3896C14.5828 20.3896 18.7031 16.2693 18.7031 11.1865ZM8.4355 16.0595C8.2036 16.2913 7.82765 16.2913 7.59575 16.0595L3.73638 12.2001C3.50455 11.9682 3.50455 11.5923 3.73638 11.3604L4.57609 10.5207C4.80795 10.2889 5.18393 10.2889 5.41579 10.5207L8.01563 13.1206L13.5842 7.55202C13.8161 7.32012 14.1921 7.32012 14.4239 7.55202L15.2636 8.39169C15.4954 8.62355 15.4954 8.99953 15.2636 9.2314L8.4355 16.0595Z">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                            <p class="cre-t-5-best-gardener-list-content">Specific growing advice on 21,400 varieties of 408
                                vegetables, herbs, fruit and flowers (and counting!)—written by experts in the USA</p>
                        </div>
                        <div class="cre-t-5-best-gardener-list-item">
                            <div class="cre-t-5-best-gardener-list-icon">
                                <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                                    width="19px" height="21px" viewBox="0 0 19 21" version="1.1">
                                    <g id="" fill="#1DC089">
                                        <path
                                            d="M18.7031 11.1865C18.7031 6.10377 14.5828 1.9834 9.5 1.9834C4.41725 1.9834 0.296875 6.10377 0.296875 11.1865C0.296875 16.2693 4.41725 20.3896 9.5 20.3896C14.5828 20.3896 18.7031 16.2693 18.7031 11.1865ZM8.4355 16.0595C8.2036 16.2913 7.82765 16.2913 7.59575 16.0595L3.73638 12.2001C3.50455 11.9682 3.50455 11.5923 3.73638 11.3604L4.57609 10.5207C4.80795 10.2889 5.18393 10.2889 5.41579 10.5207L8.01563 13.1206L13.5842 7.55202C13.8161 7.32012 14.1921 7.32012 14.4239 7.55202L15.2636 8.39169C15.4954 8.62355 15.4954 8.99953 15.2636 9.2314L8.4355 16.0595Z">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                            <p class="cre-t-5-best-gardener-list-content">Weekly seasonal tips, videos and articles written
                                by our team of acclaimed gardening experts</p>
                        </div>
                        <div class="cre-t-5-best-gardener-list-item">
                            <div class="cre-t-5-best-gardener-list-icon">
                                <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                                    width="19px" height="21px" viewBox="0 0 19 21" version="1.1">
                                    <g id="" fill="#1DC089">
                                        <path
                                            d="M18.7031 11.1865C18.7031 6.10377 14.5828 1.9834 9.5 1.9834C4.41725 1.9834 0.296875 6.10377 0.296875 11.1865C0.296875 16.2693 4.41725 20.3896 9.5 20.3896C14.5828 20.3896 18.7031 16.2693 18.7031 11.1865ZM8.4355 16.0595C8.2036 16.2913 7.82765 16.2913 7.59575 16.0595L3.73638 12.2001C3.50455 11.9682 3.50455 11.5923 3.73638 11.3604L4.57609 10.5207C4.80795 10.2889 5.18393 10.2889 5.41579 10.5207L8.01563 13.1206L13.5842 7.55202C13.8161 7.32012 14.1921 7.32012 14.4239 7.55202L15.2636 8.39169C15.4954 8.62355 15.4954 8.99953 15.2636 9.2314L8.4355 16.0595Z">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                            <p class="cre-t-5-best-gardener-list-content">441 high quality How-To videos demonstrating all
                                the gardening techniques you’ll ever need—and more!</p>
                        </div>
                        <div class="cre-t-5-best-gardener-list-item">
                            <div class="cre-t-5-best-gardener-list-icon">
                                <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                                    width="19px" height="21px" viewBox="0 0 19 21" version="1.1">
                                    <g id="" fill="#1DC089">
                                        <path
                                            d="M18.7031 11.1865C18.7031 6.10377 14.5828 1.9834 9.5 1.9834C4.41725 1.9834 0.296875 6.10377 0.296875 11.1865C0.296875 16.2693 4.41725 20.3896 9.5 20.3896C14.5828 20.3896 18.7031 16.2693 18.7031 11.1865ZM8.4355 16.0595C8.2036 16.2913 7.82765 16.2913 7.59575 16.0595L3.73638 12.2001C3.50455 11.9682 3.50455 11.5923 3.73638 11.3604L4.57609 10.5207C4.80795 10.2889 5.18393 10.2889 5.41579 10.5207L8.01563 13.1206L13.5842 7.55202C13.8161 7.32012 14.1921 7.32012 14.4239 7.55202L15.2636 8.39169C15.4954 8.62355 15.4954 8.99953 15.2636 9.2314L8.4355 16.0595Z">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                            <p class="cre-t-5-best-gardener-list-content">Detailed advice on how to avoid pests eating your
                                precious crops</p>
                        </div>
                        <div class="cre-t-5-best-gardener-list-item">
                            <div class="cre-t-5-best-gardener-list-icon">
                                <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                                    width="19px" height="21px" viewBox="0 0 19 21" version="1.1">
                                    <g id="" fill="#1DC089">
                                        <path
                                            d="M18.7031 11.1865C18.7031 6.10377 14.5828 1.9834 9.5 1.9834C4.41725 1.9834 0.296875 6.10377 0.296875 11.1865C0.296875 16.2693 4.41725 20.3896 9.5 20.3896C14.5828 20.3896 18.7031 16.2693 18.7031 11.1865ZM8.4355 16.0595C8.2036 16.2913 7.82765 16.2913 7.59575 16.0595L3.73638 12.2001C3.50455 11.9682 3.50455 11.5923 3.73638 11.3604L4.57609 10.5207C4.80795 10.2889 5.18393 10.2889 5.41579 10.5207L8.01563 13.1206L13.5842 7.55202C13.8161 7.32012 14.1921 7.32012 14.4239 7.55202L15.2636 8.39169C15.4954 8.62355 15.4954 8.99953 15.2636 9.2314L8.4355 16.0595Z">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                            <p class="cre-t-5-best-gardener-list-content">The Garden Journal, which makes it simple to add
                                notes, photos and harvests to track what works best in your garden</p>
                        </div>
                    </div>
                    <p class="cre-t-5-best-gardener-t-5-footer">The Garden Planner is like having your own personal
                        gardening expert on hand whenever you need it. </p>
                    <p class="cre-t-5-best-gardener-t-5-footer">So whether you’re a complete beginner or a seasoned
                        gardener, you can get the best possible results from your garden and set yourself up for success.
                    </p>
                </div>
                <div class="cre-t-5-best-gardener-right">
                    <div class="cre-t-5-best-gardener-right-main-image">
                        <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/ben.png" alt="">
                        <div class="cre-t-5-best-gardener-image-and-arrow">
                            <div class="arrow"> <img
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/Bens-garden-sm.png"
                                    alt=""></div>
                            <div class="img">
                                <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                                    width="66.82324px" height="59.058105px" viewBox="0 0 66.82324 59.058105" version="1.1">
                                    <g id="arrow">
                                        <path d="M0 0C0 0 0.283868 38.0643 32 45" id="Path" fill="none" fill-rule="evenodd"
                                            stroke="#1DC089" stroke-width="2"></path>
                                        <path d="M26.7442 28L36 45.2856L21 53" id="Path-2" fill="none" fill-rule="evenodd"
                                            stroke="#1DC089" stroke-width="2"></path>
                                    </g>
                                </svg>
                                <div class="content">Ben’s Garden</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="cre-t-5-perfect-garden-wrapper container-T-81 cre-t-81-caret">
        <div class="cre-t-5-perfect-garden-container">
            <div class="cre-t-5-perfect-garden-main">
                <div class="cre-t-5-perfect-gardent-left">
                    <div class="cre-t-5-perfect-gardent-left-bubble"><img
                            src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/circle-3.png"
                            alt=""></div>
                    <div class="cre-t-5-perfect-gardent-left-quote-wrapper">
                        <div class="cre-t-5-perfect-gardent-left-quote-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100pt" height="100pt" version="1.1"
                                viewBox="0 0 100 100">
                                <path
                                    d="m6.4375 50.5v35.875h35.875v-35.875h-20.5c0-11.32 9.1797-20.5 20.5-20.5v-15.375c-19.816 0-35.875 16.062-35.875 35.875zm87.125-20.5v-15.375c-19.812 0-35.875 16.062-35.875 35.875v35.875h35.875v-35.875h-20.5c0-11.32 9.1797-20.5 20.5-20.5z"
                                    fill="#fff" fill-rule="evenodd"></path>
                            </svg>
                        </div>
                        <h1 class="cre-t-5-perfect-gardent-left-quote-content">“Why put in months of work, only to have it
                            fail at the end because you didn’t plan?”</h1>
                    </div>
                </div>
                <div class="cre-t-5-perfect-garden-right">
                    <h1 class="cre-t-5-perfect-garden-right-header">Create the perfect garden plan for your space easily,
                        and get <span class="cre-t-5-color0">personalized recommendations</span> based on your local climate
                        and season</h1>
                    <h1 class="cre-t-5-perfect-garden-right-sub-header">We’ve all heard the saying “When you fail to plan,
                        you plan to fail”, and a top-notch plan is the key to getting your most successful garden.</h1>
                    <p class="cre-t-5-perfect-garden-right-content">Whether you’re an experienced gardener or a total
                        beginner, the Garden Planner is the ideal way to plan your perfect garden.</p>
                    <p class="cre-t-5-perfect-garden-right-content">Beginners can get started in just a few clicks with our
                        ready made templates that are perfect if you are new to gardening, while experienced gardeners love
                        how the Garden Planner helps bring their grandest visions to life.</p>
                    <p class="cre-t-5-perfect-garden-right-footer">The Garden Planner is the most powerful and extensive
                        tool of its kind.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="cre-t-5-any-gardener-wrapper container-T-81 ">
        <div class="cre-t-5-any-gardener-container">
            <div class="cre-t-5-any-gardener-main">
                <div class="cre-t-5-any-gardener-left">
                    <h1 class="cre-t-5-any-gardener-header">Works with <span class="cre-t-5-color0">any garden</span> and
                        every gardening method</h1>
                    <h1 class="cre-t-5-any-gardener-sub-header">The Garden Planner works with any shape or size of garden
                        and any gardening method, whether you prefer traditional rows, containers, raised beds or square
                        foot gardening.</h1>
                    <p class="cre-t-5-any-gardener-t-5-content">The Garden Planner’s smart plant filters help you choose
                        only crops that will thrive in your garden’s conditions—so you won’t waste money on crops that
                        aren’t perfectly suited. Simply select what you want to grow, and drop it into your plan.</p>
                    <p class="cre-t-5-any-gardener-t-5-content">The Garden Planner automatically ensures the correct spacing
                        between plants to avoid overcrowding, ensuring they receive enough sunlight, and making most of
                        available nutrients and moisture.</p>
                    <p class="cre-t-5-any-gardener-t-5-content">Move plants and other objects around easily, at any time
                        until you create the perfect layout for your garden—no more erasing and redrawing whenever you
                        change your mind.</p>
                    <p class="cre-t-5-any-gardener-t-5-content">Add structures and objects like raised beds, sheds,
                        greenhouses, cold frames—and much more. The Garden Planner even adjusts planting and harvesting
                        dates automatically to reflect the protection they provide.</p>
                    <p class="cre-t-5-any-gardener-t-5-content">And everyone can take inspiration from garden plans shared
                        by people in your local area.</p>
                </div>
                <div class="cre-t-5-any-gardener-right">
                    <div class="cre-t-5-any-gardener-right-main-image"><img
                            src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/circle-3.png"
                            alt=""></div>
                    <div class="cre-t-5-any-gardener-image-and-arrow">
                        <div class="img"> <img
                                src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/circle-3-main.png"
                                alt=""> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="cre-t-5-sow-wrapper container-T-81">
        <div class="cre-t-5-sow-container">
            <div class="cre-t-5-sow-main">
                <div class="cre-t-5-sow-left">
                    <h1 class="cre-t-5-sow-left-header">Sow, plant and harvest at the right time to <span> maximize your
                            chances of a successful garden,</span> year round</h1>
                    <h1 class="cre-t-5-sow-sub-header">A personalized calendar tailored to your local climate, with timely
                        planting reminders via email.</h1>
                    <p class="cre-t-5-sow-content">As you create your perfect garden layout, the Garden Planner
                        automatically builds your personalized calendar, which adjusts any time you make changes to your
                        plan.</p>
                    <p class="cre-t-5-sow-content">You’ll receive personalized email reminders letting you know what to
                        plant in the next 2 weeks, based on your own plan and local climate data from your nearest weather
                        station.</p>
                    <p class="cre-t-5-sow-content">You’ll also get a shopping list showing exactly which plants to buy and
                        how many you need.</p>
                </div>
                <div class="cre-t-5-sow-right">
                    <div class="cre-t-5-sow-right-wrapper">
                        <div class="cre-t-5-sow-right-slider">
                            <div
                                class="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                                <div class="swiper-wrapper"
                                    style="transform: translate3d(-635px, 0px, 0px); transition-duration: 0ms;"
                                    id="swiper-wrapper-fd8b4a591f6c6fd5" aria-live="polite">
                                    <div class="swiper-slide swiper-slide-duplicate swiper-slide-prev"
                                        data-swiper-slide-index="2" style="width: 635px;" role="group" aria-label="3 / 3">
                                        <div class="cre-t-5-sow-image-wrapper"> <img
                                                src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/SLIDE4.png"
                                                alt=""> </div>
                                    </div>
                                    <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="0"
                                        style="width: 635px;" role="group" aria-label="1 / 3">
                                        <div class="cre-t-5-sow-image-wrapper"> <img
                                                src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/laptopMobileImage1.png"
                                                alt=""> </div>
                                    </div>
                                    <div class="swiper-slide swiper-slide-next" data-swiper-slide-index="1"
                                        style="width: 635px;" role="group" aria-label="2 / 3">
                                        <div class="cre-t-5-sow-image-wrapper"> <img
                                                src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/SLIDE3.png"
                                                alt=""> </div>
                                    </div>
                                    <div class="swiper-slide swiper-slide-duplicate-prev" data-swiper-slide-index="2"
                                        style="width: 635px;" role="group" aria-label="3 / 3">
                                        <div class="cre-t-5-sow-image-wrapper"> <img
                                                src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/SLIDE4.png"
                                                alt=""> </div>
                                    </div>
                                    <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                                        data-swiper-slide-index="0" role="group" aria-label="1 / 3" style="width: 635px;">
                                        <div class="cre-t-5-sow-image-wrapper"> <img
                                                src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/laptopMobileImage1.png"
                                                alt=""> </div>
                                    </div>
                                </div>
                                <div
                                    class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                                    <span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0"
                                        role="button" aria-label="Go to slide 1" aria-current="true"></span><span
                                        class="swiper-pagination-bullet" tabindex="0" role="button"
                                        aria-label="Go to slide 2"></span><span class="swiper-pagination-bullet"
                                        tabindex="0" role="button" aria-label="Go to slide 3"></span>
                                </div>
                                <div class="swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide"
                                    aria-controls="swiper-wrapper-fd8b4a591f6c6fd5">
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                                        width="21px" height="24px" viewBox="0 0 21 24" version="1.1" style="
                                fill: black;
                                ">
                                        <g id="" fill="#ffffff">
                                            <path
                                                d="M20.9578 12.8672C20.9578 13.4883 20.4534 13.9927 19.8323 13.9927L3.93281 13.9927L10.1531 19.927C10.6043 20.3562 10.6204 21.0713 10.1912 21.518C9.76202 21.9677 9.05027 21.9838 8.60027 21.5561L0.350274 13.6811C0.126328 13.4719 0.000365496 13.1766 0.000365496 12.8672C0.000365496 12.5578 0.126328 12.2672 0.348984 12.0516L8.59898 4.17656C9.04687 3.75047 9.75937 3.76641 10.1906 4.21641C10.6198 4.66172 10.6037 5.37656 10.1525 5.80734L3.93223 11.7417L19.8744 11.7417C20.4937 11.7422 20.9578 12.2484 20.9578 12.8672L20.9578 12.8672Z">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                                <div class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide"
                                    aria-controls="swiper-wrapper-fd8b4a591f6c6fd5">
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                                        width="21px" height="24px" viewBox="0 0 21 24" version="1.1" style="
                                fill: black;
                                ">
                                        <g id="" fill="#ffffff">
                                            <path
                                                d="M20.9578 12.8672C20.9578 13.4883 20.4534 13.9927 19.8323 13.9927L3.93281 13.9927L10.1531 19.927C10.6043 20.3562 10.6204 21.0713 10.1912 21.518C9.76202 21.9677 9.05027 21.9838 8.60027 21.5561L0.350274 13.6811C0.126328 13.4719 0.000365496 13.1766 0.000365496 12.8672C0.000365496 12.5578 0.126328 12.2672 0.348984 12.0516L8.59898 4.17656C9.04687 3.75047 9.75937 3.76641 10.1906 4.21641C10.6198 4.66172 10.6037 5.37656 10.1525 5.80734L3.93223 11.7417L19.8744 11.7417C20.4937 11.7422 20.9578 12.2484 20.9578 12.8672L20.9578 12.8672Z">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="cre-t-5-maximize-wrapper cre-t-5-maximize-wrapper-left container-T-81">
        <div class="cre-t-5-maximize-container">
            <div class="cre-t-5-maximize-main">
                <div class="cre-t-5-maximize-left">
                    <div class="cre-t-5-maximize-left-bubble"><img
                            src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/phone-img.png"
                            alt=""></div>
                </div>
                <div class="cre-t-5-maximize-right">
                    <h1 class="cre-t-5-maximize-right-header">Maximize your chances of success with <span
                            class="cre-t-5-color0">Evidence-Based Companion Planting,</span> crop rotation notifications
                        &amp; tracking</h1>
                    <h1 class="cre-t-5-maximizeright-sub-header">With an optimal layout and planting schedule tailored to
                        your local climate, you get the best chance of a successful season from your garden.</h1>
                    <div class="cre-t-5-maximize-left-bubble"><img
                            src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/phone-img.png"
                            alt=""></div>
                    <p class="cre-t-5-maximize-right-content">The handy companion planting tool suggests which plants grow
                        best together, based on the latest research (unlike most companion planting advice online!).</p>
                    <p class="cre-t-5-maximize-right-content">You’ll also get crop rotation notifications to help maximize
                        your garden’s health and productivity by avoiding a build-up of soil-borne pests and diseases. </p>
                    <p class="cre-t-5-maximize-right-content">There’s no need to keep track of all the different plant
                        families or what grew where in previous years —the Garden Planner does this for you automatically!
                    </p>
                    <p class="cre-t-5-maximize-right-content">Make the most productive use of your space throughout the year
                        using the Succession Planting tool which enables you to see when plants will be growing, and when
                        and where you have space to grow more.</p>
                    <p class="cre-t-5-maximize-right-content">And at the end of the year, create next year's Follow-on Plans
                        from the previous year's plan with the click of a button—no need to start again from scratch each
                        year.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="cre-t-5-maximize-wrapper cre-t-5-maximize-wrapper-world container-T-81">
        <div class="cre-t-5-maximize-container">
            <div class="cre-t-5-maximize-main">
                <div class="cre-t-5-maximize-left">
                    <div class="cre-t-5-maximize-left-bubble"><img
                            src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/circle-3.png"
                            alt=""></div>
                    <div class="cre-t-5-maximize-left-quote-wrapper">
                        <div class="cre-t-5-maximize-left-quote-icon"><img
                                src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/doctor.png"
                                alt=""></div>
                    </div>
                </div>
                <div class="cre-t-5-maximize-right">
                    <div class="cre-t-5-maximize-right-header">The world’s first and only <span
                            class="cre-t-5-color0">Evidence-Based Companion Planting </span> System</div>
                    <div class="cre-t-5-maximizeright-sub-header">Our experts spent months analyzing 502 scientific studies
                        in painstaking detail to create the world’s only Evidence-Based Companion Planting system, so you
                        don’t have to spend precious time trying to work out which plants grow best together.</div>
                    <div class="cre-t-5-maximize-right-content">And we review new studies as they are published and update
                        the Garden Planner accordingly, so that you always get the most reliable recommendations for every
                        plant.</div>
                </div>
            </div>
        </div>
    </div>
    <div class="cre-t-5-protect-wrapper container-T-81">
        <div class="cre-t-5-protect-container">
            <div class="cre-t-5-protect-main">
                <div class="cre-t-5-protect-left cre-t-5-protect-left-desktop">
                    <div class="cre-t-5-protect-left-bubble"> <img
                            src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/Circle+image.png"
                            alt=""> </div>
                    <div class="cre-t-5-protect-left-pests-wrapper">
                        <div class="cre-t-5-protect-left-pests cre-t-5-protect-left-pests1">
                            <div class="cre-t-5-protect-left-pests-icon"> <img
                                    src="https://gardenplannerwebsites.azureedge.net/theme/growveg/beneficial-insects-icon-btn.jpg">
                            </div>
                            <div class="cre-t-5-protect-left-pests-content">
                                <div class="cre-t-5-protect-left-pests-img">
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                                        width="25px" height="27.246094px" viewBox="0 0 25 27.246094" version="1.1">
                                        <g id="">
                                            <g id="" fill="#12982E">
                                                <path
                                                    d="M24.6093 12.5C24.6093 5.81221 19.1878 0.390676 12.5 0.390676C5.81215 0.390676 0.390624 5.81221 0.390624 12.5C0.390624 19.1878 5.81215 24.6094 12.5 24.6094C19.1878 24.6094 24.6093 19.1878 24.6093 12.5ZM11.0993 18.9118C10.7942 19.2169 10.2995 19.2169 9.99439 18.9118L4.91628 13.8337C4.61124 13.5286 4.61124 13.0339 4.91628 12.7288L6.02115 11.624C6.32623 11.3189 6.82095 11.3189 7.12603 11.624L10.5468 15.0448L17.8739 7.71779C18.179 7.41266 18.6738 7.41266 18.9788 7.71779L20.0837 8.82262C20.3887 9.12769 20.3887 9.62241 20.0837 9.92749L11.0993 18.9118Z">
                                                </path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div class="cre-t-5-protect-left-pests-text">
                                    <h1 class="cre-t-5-protect-left-pests-text-wrapper">Attract beneficial insects</h1>
                                </div>
                            </div>
                        </div>
                        <div class="cre-t-5-protect-left-pests cre-t-5-protect-left-pests2">
                            <div class="cre-t-5-protect-left-pests-icon"> <img
                                    src="https://gardenplannerwebsites.azureedge.net/theme/growveg/pests-icon-btn.jpg">
                            </div>
                            <div class="cre-t-5-protect-left-pests-content">
                                <div class="cre-t-5-protect-left-pests-img">
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                                        width="25px" height="27.246094px" viewBox="0 0 25 27.246094" version="1.1">
                                        <g id="">
                                            <g id="" fill="#C80800">
                                                <path
                                                    d="M12.5 0.390676C5.81053 0.390676 0.390624 5.81059 0.390624 12.5C0.390624 19.1895 5.81053 24.6094 12.5 24.6094C19.1894 24.6094 24.6093 19.1895 24.6093 12.5C24.6093 5.81059 19.1894 0.390676 12.5 0.390676ZM18.4374 15.6787C18.6669 15.9082 18.6669 16.2793 18.4374 16.5088L16.5039 18.4375C16.2744 18.667 15.9033 18.667 15.6738 18.4375L12.5 15.2344L9.32129 18.4375C9.09178 18.667 8.72066 18.667 8.49121 18.4375L6.5625 16.5039C6.333 16.2744 6.333 15.9033 6.5625 15.6738L9.7656 12.5L6.5625 9.32134C6.333 9.09184 6.333 8.72072 6.5625 8.49126L8.49607 6.55764C8.72557 6.32814 9.09665 6.32814 9.32615 6.55764L12.5 9.76565L15.6787 6.56256C15.9082 6.33305 16.2793 6.33305 16.5087 6.56256L18.4423 8.49613C18.6719 8.72563 18.6719 9.0967 18.4423 9.3262L15.2343 12.5L18.4374 15.6787Z">
                                                </path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div class="cre-t-5-protect-left-pests-text">
                                    <h1 class="cre-t-5-protect-left-pests-text-wrapper">Repel pests</h1>
                                </div>
                            </div>
                        </div>
                        <div class="cre-t-5-protect-left-pests cre-t-5-protect-left-pests3">
                            <div class="cre-t-5-protect-left-pests-icon"> <img
                                    src="https://gardenplannerwebsites.azureedge.net/theme/growveg/diseases-icon-btn.jpg">
                            </div>
                            <div class="cre-t-5-protect-left-pests-content">
                                <div class="cre-t-5-protect-left-pests-img">
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                                        width="25px" height="27.246094px" viewBox="0 0 25 27.246094" version="1.1">
                                        <g id="">
                                            <g id="" fill="#C80800">
                                                <path
                                                    d="M12.5 0.390676C5.81053 0.390676 0.390624 5.81059 0.390624 12.5C0.390624 19.1895 5.81053 24.6094 12.5 24.6094C19.1894 24.6094 24.6093 19.1895 24.6093 12.5C24.6093 5.81059 19.1894 0.390676 12.5 0.390676ZM18.4374 15.6787C18.6669 15.9082 18.6669 16.2793 18.4374 16.5088L16.5039 18.4375C16.2744 18.667 15.9033 18.667 15.6738 18.4375L12.5 15.2344L9.32129 18.4375C9.09178 18.667 8.72066 18.667 8.49121 18.4375L6.5625 16.5039C6.333 16.2744 6.333 15.9033 6.5625 15.6738L9.7656 12.5L6.5625 9.32134C6.333 9.09184 6.333 8.72072 6.5625 8.49126L8.49607 6.55764C8.72557 6.32814 9.09665 6.32814 9.32615 6.55764L12.5 9.76565L15.6787 6.56256C15.9082 6.33305 16.2793 6.33305 16.5087 6.56256L18.4423 8.49613C18.6719 8.72563 18.6719 9.0967 18.4423 9.3262L15.2343 12.5L18.4374 15.6787Z">
                                                </path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div class="cre-t-5-protect-left-pests-text">
                                    <h1 class="cre-t-5-protect-left-pests-text-wrapper">Treat &amp; prevent plant diseases
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cre-t-5-protect-right">
                    <div class="cre-t-5-protect-right-text1">
                        <h1 class="cre-t-5-protect-right-header"><span class="cre-t-5-color0">Protect your precious
                                crops</span> from pests &amp; diseases</h1>
                        <div class="cre-t-5-protect-left cre-t-5-protect-left-mobile">
                            <div class="cre-t-5-protect-left-bubble"> <img
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/Circle+image.png"
                                    alt=""> </div>
                            <div class="cre-t-5-protect-left-pests-wrapper">
                                <div class="cre-t-5-protect-left-pests cre-t-5-protect-left-pests1">
                                    <div class="cre-t-5-protect-left-pests-icon"> <img
                                            src="https://gardenplannerwebsites.azureedge.net/theme/growveg/beneficial-insects-icon-btn.jpg">
                                    </div>
                                    <div class="cre-t-5-protect-left-pests-content">
                                        <div class="cre-t-5-protect-left-pests-img">
                                            <svg xmlns:xlink="http://www.w3.org/1999/xlink"
                                                xmlns="http://www.w3.org/2000/svg" width="25px" height="27.246094px"
                                                viewBox="0 0 25 27.246094" version="1.1">
                                                <g id="">
                                                    <g id="" fill="#12982E">
                                                        <path
                                                            d="M24.6093 12.5C24.6093 5.81221 19.1878 0.390676 12.5 0.390676C5.81215 0.390676 0.390624 5.81221 0.390624 12.5C0.390624 19.1878 5.81215 24.6094 12.5 24.6094C19.1878 24.6094 24.6093 19.1878 24.6093 12.5ZM11.0993 18.9118C10.7942 19.2169 10.2995 19.2169 9.99439 18.9118L4.91628 13.8337C4.61124 13.5286 4.61124 13.0339 4.91628 12.7288L6.02115 11.624C6.32623 11.3189 6.82095 11.3189 7.12603 11.624L10.5468 15.0448L17.8739 7.71779C18.179 7.41266 18.6738 7.41266 18.9788 7.71779L20.0837 8.82262C20.3887 9.12769 20.3887 9.62241 20.0837 9.92749L11.0993 18.9118Z">
                                                        </path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="cre-t-5-protect-left-pests-text">
                                            <h1 class="cre-t-5-protect-left-pests-text-wrapper">Attract beneficial insects
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="cre-t-5-protect-left-pests cre-t-5-protect-left-pests2">
                                    <div class="cre-t-5-protect-left-pests-icon"> <img
                                            src="https://gardenplannerwebsites.azureedge.net/theme/growveg/pests-icon-btn.jpg">
                                    </div>
                                    <div class="cre-t-5-protect-left-pests-content">
                                        <div class="cre-t-5-protect-left-pests-img">
                                            <svg xmlns:xlink="http://www.w3.org/1999/xlink"
                                                xmlns="http://www.w3.org/2000/svg" width="25px" height="27.246094px"
                                                viewBox="0 0 25 27.246094" version="1.1">
                                                <g id="">
                                                    <g id="" fill="#C80800">
                                                        <path
                                                            d="M12.5 0.390676C5.81053 0.390676 0.390624 5.81059 0.390624 12.5C0.390624 19.1895 5.81053 24.6094 12.5 24.6094C19.1894 24.6094 24.6093 19.1895 24.6093 12.5C24.6093 5.81059 19.1894 0.390676 12.5 0.390676ZM18.4374 15.6787C18.6669 15.9082 18.6669 16.2793 18.4374 16.5088L16.5039 18.4375C16.2744 18.667 15.9033 18.667 15.6738 18.4375L12.5 15.2344L9.32129 18.4375C9.09178 18.667 8.72066 18.667 8.49121 18.4375L6.5625 16.5039C6.333 16.2744 6.333 15.9033 6.5625 15.6738L9.7656 12.5L6.5625 9.32134C6.333 9.09184 6.333 8.72072 6.5625 8.49126L8.49607 6.55764C8.72557 6.32814 9.09665 6.32814 9.32615 6.55764L12.5 9.76565L15.6787 6.56256C15.9082 6.33305 16.2793 6.33305 16.5087 6.56256L18.4423 8.49613C18.6719 8.72563 18.6719 9.0967 18.4423 9.3262L15.2343 12.5L18.4374 15.6787Z">
                                                        </path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="cre-t-5-protect-left-pests-text">
                                            <h1 class="cre-t-5-protect-left-pests-text-wrapper">Repel pests</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="cre-t-5-protect-left-pests cre-t-5-protect-left-pests3">
                                    <div class="cre-t-5-protect-left-pests-icon"> <img
                                            src="https://gardenplannerwebsites.azureedge.net/theme/growveg/diseases-icon-btn.jpg">
                                    </div>
                                    <div class="cre-t-5-protect-left-pests-content">
                                        <div class="cre-t-5-protect-left-pests-img">
                                            <svg xmlns:xlink="http://www.w3.org/1999/xlink"
                                                xmlns="http://www.w3.org/2000/svg" width="25px" height="27.246094px"
                                                viewBox="0 0 25 27.246094" version="1.1">
                                                <g id="">
                                                    <g id="" fill="#C80800">
                                                        <path
                                                            d="M12.5 0.390676C5.81053 0.390676 0.390624 5.81059 0.390624 12.5C0.390624 19.1895 5.81053 24.6094 12.5 24.6094C19.1894 24.6094 24.6093 19.1895 24.6093 12.5C24.6093 5.81059 19.1894 0.390676 12.5 0.390676ZM18.4374 15.6787C18.6669 15.9082 18.6669 16.2793 18.4374 16.5088L16.5039 18.4375C16.2744 18.667 15.9033 18.667 15.6738 18.4375L12.5 15.2344L9.32129 18.4375C9.09178 18.667 8.72066 18.667 8.49121 18.4375L6.5625 16.5039C6.333 16.2744 6.333 15.9033 6.5625 15.6738L9.7656 12.5L6.5625 9.32134C6.333 9.09184 6.333 8.72072 6.5625 8.49126L8.49607 6.55764C8.72557 6.32814 9.09665 6.32814 9.32615 6.55764L12.5 9.76565L15.6787 6.56256C15.9082 6.33305 16.2793 6.33305 16.5087 6.56256L18.4423 8.49613C18.6719 8.72563 18.6719 9.0967 18.4423 9.3262L15.2343 12.5L18.4374 15.6787Z">
                                                        </path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="cre-t-5-protect-left-pests-text">
                                            <h1 class="cre-t-5-protect-left-pests-text-wrapper">Treat &amp; prevent plant
                                                diseases</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 class="cre-t-5-protect-right-sub-header">The Garden Planner’s automatic companion planting
                            recommendations show you exactly which plants to grow nearby, to help encourage natural
                            predators into your garden and take care of pests naturally.</h1>
                    </div>
                    <div class="cre-t-5-protect-right-text2">
                        <p class="cre-t-5-protect-right-content cre-t-5-protect-right-content1">And sometimes—despite our
                            best efforts—pests and diseases can still rear their ugly heads.</p>
                        <p class="cre-t-5-protect-right-content cre-t-5-protect-right-content2">Would you know what to do if
                            your tomatoes have holes in them or your garlic developed a downy mildew on the leaves? What if
                            your bean leaves have brown spots on them or you discover an outbreak of aphids on your
                            cabbages?</p>
                        <p class="cre-t-5-protect-right-content cre-t-5-protect-right-content3">In some cases there could be
                            literally a dozen causes.</p>
                        <p class="cre-t-5-protect-right-content cre-t-5-protect-right-content4">The Garden Planner helps you
                            get straight to the root cause with detailed articles and videos on every relevant pest and
                            disease, and how to minimize the damage to your precious crops without pesticides or other
                            chemicals.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="cre-t-5-tracking-wrapper cre-t-81-caret container-T-81">
        <div class="cre-t-5-tracking-container">
            <div class="cre-t-5-tracking-main">
                <div class="cre-t-5-tracking-left">
                    <h1 class="cre-t-5-tracking-left-header"><span class="cre-t-5-color0">Track your progress</span> in our
                        Garden Journal</h1>
                    <div class="cre-t-5-tracking-right-img cre-t-5-tracking-right-img-mobile"> <img
                            src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/track-your-progress-img.jpg"
                            alt="track-Your-Progress"> </div>
                    <h1 class="cre-t-5-tracking-left-sub-header">Use the Garden Journal to add notes and photos of your
                        garden to help you to learn about what works best.</h1>
                    <p class="cre-t-5-tracking-left-content1">Record when you planted or last watered, diagnose problems and
                        track how much you've harvested—The Garden Journal automatically creates reports on your progress,
                        as well as reminders of jobs that need to be done in the next two weeks.</p>
                    <p class="cre-t-5-tracking-left-content2">When you come to plan next year’s garden, information about
                        what worked best and how much you harvested of each variety is neatly summarized right within the
                        Garden Planner.</p>
                </div>
                <div class="cre-t-5-tracking-right">
                    <div class="cre-t-5-tracking-right-wrapper">
                        <div class="cre-t-5-tracking-right-img"> <img
                                src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/track-your-progress-img.jpg"
                                alt="track-Your-Progress"> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="cre-t-5-experts-container cre-t-81-caret container-T-81">
        <div class="cre-t-5-experts-wrapper">
            <div class="cre-t-5-experts-content cre-t-5-experts-content1">
                <h1 class="cre-t-5-experts-header">Chat directly to our gardening experts, <span class="cre-t-5-color0">7
                        days a week</span> - ask them anything!</h1>
            </div>
            <div class="cre-t-5-experts-content cre-t-5-experts-content2">
                <h1 class="cre-t-5-experts-subHeader1">Whether you need help with the Garden Planner or want to ask about
                    companion plants, avoiding pests, or keeping your plants happy, our friendly, experienced customer
                    support team are all expert gardeners and are on standby just waiting to hear from you.</h1>
            </div>
            <div class="cre-t-5-experts-content cre-t-5-experts-content3">
                <p class="cre-t-5-experts-subHeader2">You can contact us via live chat or email, and we’ll get back to you
                    as quickly as possible—usually in less than a minute during working hours.<span
                        class="cre-t-5-experts-content3-icon"></span> <a href=""
                        class="cre-t-5-try-garden-button button-one hidearrow">Chat to a Gardening Expert now - free!</a>
                </p>
            </div>
            <div class="cre-t-5-experts-content cre-t-5-experts-content4">
                <div class="cre-t-5-experts-card-content">
                    <div class="cre-t-5-experts-card cre-t-5-experts1-card1">
                        <div class="cre-t-5-experts-card-wrapper">
                            <div class="cre-t-5-experts-card-image"><img
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/ben-1.png"
                                    alt="ben22"></div>
                            <div class="cre-t-5-experts-card-text">
                                <h1 class="cre-t-5-experts-card-header">Ben</h1>
                                <p class="cre-t-5-experts-card-subHeader">Ben is our YouTube star, published author and
                                    passionate gardener with a degree in horticulture and experience growing in the UK and
                                    US.</p>
                            </div>
                        </div>
                    </div>
                    <div class="cre-t-5-experts-card cre-t-5-experts1-card2">
                        <div class="cre-t-5-experts-card-wrapper">
                            <div class="cre-t-5-experts-card-image"><img
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/barbara.png"
                                    alt="barbara22"></div>
                            <div class="cre-t-5-experts-card-text">
                                <h1 class="cre-t-5-experts-card-header">Barbara</h1>
                                <p class="cre-t-5-experts-card-subHeader">Barbara is one of the foremost experts on
                                    gardening across the US, having written more than 20 books and won multiple awards from
                                    the Garden Writers Association.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cre-t-5-experts-content cre-t-5-experts-content5">
                <div class="cre-t-5-experts-content5-header">
                    <h1 class="cre-t-5-experts-content5-header-text">Customer Support</h1>
                </div>
                <div class="cre-t-5-experts-card-content">
                    <div class="cre-t-5-experts-card cre-t-5-experts2-card1">
                        <div class="cre-t-5-experts-card-wrapper">
                            <div class="cre-t-5-experts-card-image"><img
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/ann.png"
                                    alt="ann22"></div>
                            <div class="cre-t-5-experts-card-text">
                                <h1 class="cre-t-5-experts-card-header">Ann Marie</h1>
                                <p class="cre-t-5-experts-card-subHeader">Ann Marie has a wealth of gardening experience in
                                    Scotland. She writes articles, edits our website and provides customer support.</p>
                            </div>
                        </div>
                    </div>
                    <div class="cre-t-5-experts-card cre-t-5-experts2-card2">
                        <div class="cre-t-5-experts-card-wrapper">
                            <div class="cre-t-5-experts-card-image"><img
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/janine-new.jpg"
                                    alt="janine22"></div>
                            <div class="cre-t-5-experts-card-text">
                                <h1 class="cre-t-5-experts-card-header">Janine</h1>
                                <p class="cre-t-5-experts-card-subHeader">A keen allotmenteer and chicken rescuer, Janine is
                                    a member of our dedicated customer support team. Her chickens occasionally join our
                                    video calls if it's cold outside!</p>
                            </div>
                        </div>
                    </div>
                    <div class="cre-t-5-experts-card cre-t-5-experts2-card3">
                        <div class="cre-t-5-experts-card-wrapper">
                            <div class="cre-t-5-experts-card-image"><img
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/elaine.png"
                                    alt="elaine2222"></div>
                            <div class="cre-t-5-experts-card-text">
                                <h1 class="cre-t-5-experts-card-header">Elaine</h1>
                                <p class="cre-t-5-experts-card-subHeader">When she’s not helping our customers get the most
                                    from the Garden Planner, Elaine is happiest in the garden with a steaming mug of tea,
                                    listening to the birds, watching her veggies grow and roses bloom.</p>
                            </div>
                        </div>
                    </div>
                    <div class="cre-t-5-experts-card cre-t-5-experts2-card4">
                        <div class="cre-t-5-experts-card-wrapper">
                            <div class="cre-t-5-experts-card-image"><img
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/teri.png"
                                    alt="teri22"></div>
                            <div class="cre-t-5-experts-card-text">
                                <h1 class="cre-t-5-experts-card-header">Teri</h1>
                                <p class="cre-t-5-experts-card-subHeader">Teri is a member of our customer support team. She
                                    loves to grow organic fruit and vegetables, especially using permaculture techniques and
                                    perennial plants.</p>
                            </div>
                        </div>
                    </div>
                    <div class="cre-t-5-experts-card cre-t-5-experts2-card5">
                        <div class="cre-t-5-experts-card-wrapper">
                            <div class="cre-t-5-experts-card-image"><img
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/roisin.png" "="" alt="
                                    roisin22"></div>
                            <div class="cre-t-5-experts-card-text">
                                <h1 class="cre-t-5-experts-card-header">Roisin</h1>
                                <p class="cre-t-5-experts-card-subHeader">Roisin is part of our customer support team and
                                    enjoys exploring the Peak District with her dog.</p>
                            </div>
                        </div>
                    </div>
                    <div class="cre-t-5-experts-card cre-t-5-experts2-card6">
                        <div class="cre-t-5-experts-card-wrapper">
                            <div class="cre-t-5-experts-card-image"><img
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/susie-new1.jpg"
                                    alt="susie22"></div>
                            <div class="cre-t-5-experts-card-text">
                                <h1 class="cre-t-5-experts-card-header">Susie</h1>
                                <p class="cre-t-5-experts-card-subHeader">Susie is an avid gardener. She manages our
                                    customer research and social media communities on Facebook, Pinterest etc.</p>
                            </div>
                        </div>
                    </div>
                    <div class="cre-t-5-experts-card cre-t-5-experts2-card7">
                        <div class="cre-t-5-experts-card-wrapper">
                            <div class="cre-t-5-experts-card-image"><img
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/heidi-new.jpg"
                                    alt="heidi-new22"></div>
                            <div class="cre-t-5-experts-card-text">
                                <h1 class="cre-t-5-experts-card-header">Heidi</h1>
                                <p class="cre-t-5-experts-card-subHeader">Heidi is a Canadian transplant living the UK. She
                                    develops our internal tools and coordinates between development and customer support.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="cre-t-5-experts-card cre-t-5-experts2-card8">
                        <div class="cre-t-5-experts-card-wrapper">
                            <div class="cre-t-5-experts-card-image"><img
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/jeremy.png"
                                    alt="jeremy22"></div>
                            <div class="cre-t-5-experts-card-text">
                                <h1 class="cre-t-5-experts-card-header">Jeremy</h1>
                                <p class="cre-t-5-experts-card-subHeader">Jeremy, the original creator of the Garden
                                    Planner, is an avid computer programmer and keen organic gardener.</p>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="cre-t-5-experts-sldr-container">
                    <div class="cre-t-5-experts-sldr-wrapper">
                        <div class="swiper cre-t-5-experts-sldr">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="cre-t-5-experts-card cre-t-5-experts2-sldr-card6">
                                        <div class="cre-t-5-experts-card-wrapper">
                                            <div class="cre-t-5-experts-card-image"><img
                                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/susie-new1.jpg"
                                                    alt="susie222"></div>
                                            <div class="cre-t-5-experts-card-text">
                                                <h1 class="cre-t-5-experts-card-header">Susie</h1>
                                                <p class="cre-t-5-experts-card-subHeader">Susie is an avid gardener. She
                                                    manages our customer research and social media communities on Facebook,
                                                    Pinterest etc.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="cre-t-5-experts-card cre-t-5-experts2-sldr-card7">
                                        <div class="cre-t-5-experts-card-wrapper">
                                            <div class="cre-t-5-experts-card-image"><img
                                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/heidi-new.jpg"
                                                    alt="heidi-new222"></div>
                                            <div class="cre-t-5-experts-card-text">
                                                <h1 class="cre-t-5-experts-card-header">Heidi</h1>
                                                <p class="cre-t-5-experts-card-subHeader">Heidi is a Canadian transplant
                                                    living the UK. She develops our internal tools and coordinates between
                                                    development and customer support.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="cre-t-5-experts-card cre-t-5-experts2-sldr-card8">
                                        <div class="cre-t-5-experts-card-wrapper">
                                            <div class="cre-t-5-experts-card-image"><img
                                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/jeremy.png"
                                                    alt="jeremy2222"></div>
                                            <div class="cre-t-5-experts-card-text">
                                                <h1 class="cre-t-5-experts-card-header">Jeremy</h1>
                                                <p class="cre-t-5-experts-card-subHeader">Jeremy, the original creator of
                                                    the Garden Planner, is an avid computer programmer and keen organic
                                                    gardener.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="cre-t-5-experts-card cre-t-5-experts2-sldr-card1">
                                        <div class="cre-t-5-experts-card-wrapper">
                                            <div class="cre-t-5-experts-card-image"><img
                                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/ann.png"
                                                    alt="ann222"></div>
                                            <div class="cre-t-5-experts-card-text">
                                                <h1 class="cre-t-5-experts-card-header">Ann Marie</h1>
                                                <p class="cre-t-5-experts-card-subHeader"> Ann Marie has a wealth of
                                                    gardening experience in Scotland. She writes articles, edits our website
                                                    and provides customer support. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="cre-t-5-experts-card cre-t-5-experts2-sldr-card2">
                                        <div class="cre-t-5-experts-card-wrapper">
                                            <div class="cre-t-5-experts-card-image"><img
                                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/janine-new.jpg"
                                                    alt="janine-new22222"></div>
                                            <div class="cre-t-5-experts-card-text">
                                                <h1 class="cre-t-5-experts-card-header">Janine</h1>
                                                <p class="cre-t-5-experts-card-subHeader"> A keen allotmenteer and chicken
                                                    rescuer, Janine is a member of our dedicated customer support team. Her
                                                    chickens occasionally join our video calls if it's cold outside! </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="cre-t-5-experts-card cre-t-5-experts2-sldr-card3">
                                        <div class="cre-t-5-experts-card-wrapper">
                                            <div class="cre-t-5-experts-card-image"><img
                                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/elaine.png"
                                                    alt="elaine222"></div>
                                            <div class="cre-t-5-experts-card-text">
                                                <h1 class="cre-t-5-experts-card-header">Elaine</h1>
                                                <p class="cre-t-5-experts-card-subHeader"> When she’s not helping our
                                                    customers get the most from the Garden Planner, Elaine is happiest in
                                                    the garden with a steaming mug of tea, listening to the birds, watching
                                                    her veggies grow and roses bloom. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="cre-t-5-experts-card cre-t-5-experts2-sldr-card4">
                                        <div class="cre-t-5-experts-card-wrapper">
                                            <div class="cre-t-5-experts-card-image"><img
                                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/teri.png"
                                                    alt="teri222"></div>
                                            <div class="cre-t-5-experts-card-text">
                                                <h1 class="cre-t-5-experts-card-header">Teri</h1>
                                                <p class="cre-t-5-experts-card-subHeader"> Teri is a member of our customer
                                                    support team. She loves to grow organic fruit and vegetables, especially
                                                    using permaculture techniques and perennial plants. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="cre-t-5-experts-card cre-t-5-experts2-sldr-card5">
                                        <div class="cre-t-5-experts-card-wrapper">
                                            <div class="cre-t-5-experts-card-image"><img
                                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/roisin.png"
                                                    alt="roisine222"></div>
                                            <div class="cre-t-5-experts-card-text">
                                                <h1 class="cre-t-5-experts-card-header">Roisin</h1>
                                                <p class="cre-t-5-experts-card-subHeader">Roisin is part of our customer
                                                    support team and enjoys exploring the Peak District with her dog.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-pagination-5-experts"></div>
                            <div class="swiper-button-prev-5-experts">
                                <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                                    width="21px" height="24px" viewBox="0 0 21 24" version="1.1" style="fill: black">
                                    <g id="" fill="#ffffff">
                                        <path
                                            d="M20.9578 12.8672C20.9578 13.4883 20.4534 13.9927 19.8323 13.9927L3.93281 13.9927L10.1531 19.927C10.6043 20.3562 10.6204 21.0713 10.1912 21.518C9.76202 21.9677 9.05027 21.9838 8.60027 21.5561L0.350274 13.6811C0.126328 13.4719 0.000365496 13.1766 0.000365496 12.8672C0.000365496 12.5578 0.126328 12.2672 0.348984 12.0516L8.59898 4.17656C9.04687 3.75047 9.75937 3.76641 10.1906 4.21641C10.6198 4.66172 10.6037 5.37656 10.1525 5.80734L3.93223 11.7417L19.8744 11.7417C20.4937 11.7422 20.9578 12.2484 20.9578 12.8672L20.9578 12.8672Z">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                            <div class="swiper-button-next-5-experts">
                                <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                                    width="21px" height="24px" viewBox="0 0 21 24" version="1.1" style="fill: black">
                                    <g id="" fill="#ffffff">
                                        <path
                                            d="M20.9578 12.8672C20.9578 13.4883 20.4534 13.9927 19.8323 13.9927L3.93281 13.9927L10.1531 19.927C10.6043 20.3562 10.6204 21.0713 10.1912 21.518C9.76202 21.9677 9.05027 21.9838 8.60027 21.5561L0.350274 13.6811C0.126328 13.4719 0.000365496 13.1766 0.000365496 12.8672C0.000365496 12.5578 0.126328 12.2672 0.348984 12.0516L8.59898 4.17656C9.04687 3.75047 9.75937 3.76641 10.1906 4.21641C10.6198 4.66172 10.6037 5.37656 10.1525 5.80734L3.93223 11.7417L19.8744 11.7417C20.4937 11.7422 20.9578 12.2484 20.9578 12.8672L20.9578 12.8672Z">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cre-81-review">
                    <div class="review-top">
                        <div class="review-left">
    
                            <div class="reviewheading">
                                <div class="doubleComas"><img
                                        src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/Landing+Page+%7C+YouTube+This+is+what+Ben+uses+sales+landing+page/4.png"
                                        alt="doubleComas"></div>
                                'SPECTACULAR SERVICE'
                            </div>
                            <div class="nameAndLocation"><span class="Review-name">Trusted Customer</span> <span
                                    class="Location"></span>
                            </div>
                        </div>
                        <div class="review-right">
                            <div class="review-star"><img
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/star.png"
                                    alt="stars"></div>
                            <div class="full-review">Read the full review</div>
                        </div>
                    </div>
                    <div class="review-bottom">
                        <div class="review-bottom-left">
                            <p>The product is easy to use but the service from your super knowledgeable team is SPECTACULAR!
                            </p>
                        </div>
                        <div class="review-bottom-right">
                            <a href="https://www.feefo.com/reviews/growing-interactive" target="_blank"><img
                                    alt="Feefo logo" border="0"
                                    src="https://api.feefo.com/api/logo?merchantidentifier=growing-interactive"
                                    title="See what our customers say about us"></a>
                        </div>
                    </div>
                    <div class="seeMore"><img
                            src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/seemorearrow.png"
                            alt="see more"></div>
                </div>
            </div>
            <div class="cre-t-5-experts-content cre-t-5-experts-content6"> <a href="">Meet the rest of our lovely team</a>
            </div>
    
        </div>
    </div>
    <div class="cre-t-5-live-support-wrapper container-T-81">
        <div class="cre-t-5-live-support-container">
            <div class="cre-t-5-live-support-main">
                <div class="cre-t-5-live-support-items">
                    <div class="cre-t-5-live-support-item">
                        <div class="cre-t-5-live-support-item-icon">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="39px"
                                height="39px" viewBox="0 0 39 39" version="1.1">
                                <g id="Group-3">
                                    <path
                                        d="M19.5 39C30.2696 39 39 30.2696 39 19.5C39 8.73045 30.2696 0 19.5 0C8.73045 0 0 8.73045 0 19.5C0 30.2696 8.73045 39 19.5 39Z"
                                        id="Oval" fill="#55A98D" fill-rule="evenodd" stroke="none"></path>
                                    <g id="" transform="translate(14.5 10)">
                                        <g id="" fill="#FFFFFF">
                                            <path
                                                d="M9.81352 10.125L10.3134 6.86742L7.1877 6.86742L7.1877 4.75348C7.1877 3.86226 7.62434 2.99355 9.02426 2.99355L10.4453 2.99355L10.4453 0.220078C10.4453 0.220078 9.15574 0 7.92281 0C5.34867 0 3.66609 1.56023 3.66609 4.38469L3.66609 6.86742L0.804727 6.86742L0.804727 10.125L3.66609 10.125L3.66609 18L7.1877 18L7.1877 10.125L9.81352 10.125Z">
                                            </path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div class="cre-t-5-live-support-item-content">Thanks to our 521k+ <br> followers on Facebook</div>
                    </div>
                    <div class="cre-t-5-live-support-item">
                        <div class="cre-t-5-live-support-item-icon">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="40px"
                                height="40px" viewBox="0 0 40 40" version="1.1">
                                <g id="Group-3">
                                    <path
                                        d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
                                        id="Oval" fill="#55A98D" fill-rule="evenodd" stroke="none"></path>
                                    <g id="" fill="#FFFFFF" transform="translate(10 11)">
                                        <path
                                            d="M19.3238 5.01268C19.103 4.18124 18.4524 3.52642 17.6263 3.3042C16.129 2.90039 10.125 2.90039 10.125 2.90039C10.125 2.90039 4.12102 2.90039 2.62368 3.3042C1.79761 3.52645 1.14701 4.18124 0.926191 5.01268C0.524988 6.51973 0.524988 9.66403 0.524988 9.66403C0.524988 9.66403 0.524988 12.8083 0.926191 14.3154C1.14701 15.1468 1.79761 15.7744 2.62368 15.9966C4.12102 16.4004 10.125 16.4004 10.125 16.4004C10.125 16.4004 16.129 16.4004 17.6263 15.9966C18.4524 15.7744 19.103 15.1468 19.3238 14.3154C19.725 12.8083 19.725 9.66403 19.725 9.66403C19.725 9.66403 19.725 6.51973 19.3238 5.01268ZM8.16135 12.5188L8.16135 6.80924L13.1795 9.6641L8.16135 12.5188L8.16135 12.5188Z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div class="cre-t-5-live-support-item-content">641,404 followers on our <br> GrowVeg YouTube channel
                        </div>
                    </div>
                    <div class="cre-t-5-live-support-item">
                        <div class="cre-t-5-live-support-item-icon">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="39px"
                                height="39px" viewBox="0 0 39 39" version="1.1">
                                <g id="Group-3">
                                    <path
                                        d="M19.5 39C30.2696 39 39 30.2696 39 19.5C39 8.73045 30.2696 0 19.5 0C8.73045 0 0 8.73045 0 19.5C0 30.2696 8.73045 39 19.5 39Z"
                                        id="Oval" fill="#55A98D" fill-rule="evenodd" stroke="none"></path>
                                    <g id="" transform="translate(15.5 10)">
                                        <g id="" fill="#FFFFFF">
                                            <path
                                                d="M10.6238 11.5708C11.169 11.5708 11.4666 10.8691 11.0633 10.4761L1.06444 0.191405C0.700342 -0.214265 0 0.0668135 0 0.643354L0 15.7492C0 16.2968 0.658423 16.6187 1.06447 16.2012L4.11125 13.0674L5.97638 17.6073C6.11309 17.9288 6.47443 18.0895 6.79664 17.9488L8.5251 17.1956C8.83759 17.0549 8.99383 16.6833 8.85709 16.3518L6.89432 11.5708L10.6238 11.5708Z">
                                            </path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div class="cre-t-5-live-support-item-content">4,003,638 website visitors <br> per year</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="cre-t-5-live-card-support-wrapper cre-t-5-live-card-support0 container-T-81">
        <div class="cre-t-5-live-card-support-container">
            <div class="cer-cards-parts">
                <div class="Feefo-parent"> <a href="https://www.feefo.com/reviews/growing-interactive" target="_blank"><img
                            alt="Feefo logo" border="0"
                            src="https://api.feefo.com/api/logo?merchantidentifier=growing-interactive"
                            title="See what our customers say about us"></a> </div>
                <div class="cer-new-card-wrapper">
                    <div class="cre-cards">
                        <div class="cre-card-one cre-common-card">
                            <div class="cre-cards-topImg"> <img
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/Landing+Page+%7C+YouTube+This+is+what+Ben+uses+sales+landing+page/4.png"
                                    alt="" class="cre-cards-top-img"> </div>
                            <div class="cre-card-title-part">
                                <p>Finally found a garden planner that works for me!</p>
                            </div>
                            <div class="cre-clint-name">
                                <p>Sandy B. in Michigan Upper Peninsula</p>
                            </div>
                            <div class="cre-img-icons"> <img class="cre-icons"
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/Landing+Page+%7C+YouTube+This+is+what+Ben+uses+sales+landing+page/2.png"
                                    alt=""> </div>
                            <div class="cre-card-text">
                                <div class="cre-first-text">
                                    <p class="cre-text-one">I would (and have) highly recommend the Garden Planner for
                                        anyone that enjoys gardening.</p>
                                    <p class="cre-text-two">I particularly like the feature of being able to show succession
                                        plantings. And I also love Ben's videos, of course!</p>
                                    <p class="cre-text-three">I've tried several other planners over the years, and have
                                        also used graph paper and colored pencils to diagram my garden, this planner is
                                        light years ahead of any other method I've used</p>
                                </div>
                            </div>
                        </div>
                        <div class="cre-card-two cre-common-card">
                            <div class="cre-cards-topImg"> <img
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/Landing+Page+%7C+YouTube+This+is+what+Ben+uses+sales+landing+page/4.png"
                                    alt="" class="cre-cards-top-img"> </div>
                            <div class="cre-card-title-part">
                                <p>So easy to use</p>
                            </div>
                            <div class="cre-clint-name">
                                <p>Cheri in Lake city, FL</p>
                            </div>
                            <div class="cre-img-icons"> <img class="cre-icons"
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/Landing+Page+%7C+YouTube+This+is+what+Ben+uses+sales+landing+page/2.png"
                                    alt=""> </div>
                            <div class="cre-card-text">
                                <div class="cre-first-text">
                                    <p class="cre-text-one">It is easy to use in designing the garden areas. Each plant's
                                        information and planting chart makes that so easy.</p>
                                    <p class="cre-text-two">The journal makes it easy to keep track of seeding,
                                        transplanting, and harvesting information to use for next season.</p>
                                </div>
                            </div>
                        </div>
                        <div class="cre-card-three cre-common-card">
                            <div class="cre-cards-topImg"> <img
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/Landing+Page+%7C+YouTube+This+is+what+Ben+uses+sales+landing+page/4.png"
                                    alt="" class="cre-cards-top-img"> </div>
                            <div class="cre-card-title-part">
                                <p>Great, easy product from novice to experienced gardener</p>
                            </div>
                            <div class="cre-clint-name">
                                <p>Claire-Louise</p>
                            </div>
                            <div class="cre-img-icons"> <img class="cre-icons"
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/Landing+Page+%7C+YouTube+This+is+what+Ben+uses+sales+landing+page/2.png"
                                    alt=""> </div>
                            <div class="cre-card-text">
                                <div class="cre-first-text">
                                    <p class="cre-text-one">The product was very easy to start and within 20 minutes I had a
                                        plan for my veg patch.</p>
                                    <p class="cre-text-two">It also tells me how many plants I'll need, when to sow and pot
                                        on, plant &amp; harvest.</p>
                                    <p class="cre-text-three">With the notifications on what to do - it should keep me on
                                        track!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="cre-t-5-updates-container cre-t-81-caret container-T-81">
        <div class="cre-t-5-updates-wrapper">
            <div class="cre-t-5-updates-content cre-t-5-updates-content1">
                <h1 class="cre-t-5-updates-header">Regular updates and improvements - suggested by you!</h1>
            </div>
            <div class="cre-t-5-updates-content cre-t-5-updates-content2">
                <h1 class="cre-t-5-updates-subHeader1">Our team of experts are constantly working hard to make the Garden
                    Planner even better, and we add new features throughout the year at no extra cost to you.</h1>
                <p class="cre-t-5-updates-subHeader2">We love to hear your ideas and—in fact—many of the updates we’ve made
                    over the years have been directly suggested by our users. And we’ll even email you back to let you know
                    when we’ve added your suggestions.</p>
            </div>
            <div class="cre-t-5-updates-content cre-t-5-updates-content3">
                <div class="cre-t-5-updates-content3-wrapper">
                    <div class="cre-t-5-updates3-content cre-t-5-updates3-content1">
                        <h1 class="cre-t-5-updates3-header">Some of the incredibly useful features we've added recently</h1>
                    </div>
                    <div class="cre-t-5-updates3-content cre-t-5-updates3-content2">
                        <div class="cre-t-5-updates-features-container">
                            <div class="cre-t-5-updates-features-wrapper">
                                <div class="cre-t-5-updates-features-content cre-t-5-updates-features-content2">
                                    <div class="cre-t-5-updates-features-info cre-t-5-updates-features3-content2">
                                        <div class="cre-t-5-updates-features-text1">
                                            <div class="cre-t-5-updates-features-checkmark">
                                                <svg xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    xmlns="http://www.w3.org/2000/svg" width="22px" height="22px"
                                                    viewBox="0 0 22 22" version="1.1">
                                                    <g id="" fill="#54A98D">
                                                        <path
                                                            d="M15.5848 1.62422L13.5051 3.70391L19.091 9.28984L21.1707 7.21016C22.2449 6.13594 22.2449 4.3957 21.1707 3.32148L19.4777 1.62422C18.4035 0.549999 16.6633 0.549999 15.5891 1.62422L15.5848 1.62422ZM12.534 4.675L2.51797 14.6953C2.07109 15.1422 1.74453 15.6965 1.56406 16.3023L0.0429688 21.4715C-0.0644531 21.8367 0.0343751 22.2277 0.300781 22.4941C0.567187 22.7605 0.958203 22.8594 1.31914 22.7563L6.48828 21.2352C7.09414 21.0547 7.64844 20.7281 8.09531 20.2813L18.1199 10.2609L12.534 4.675Z">
                                                        </path>
                                                    </g>
                                                </svg>
                                            </div>
                                            <h1 class="cre-t-5-updates-features-header">Garden Guru Video Library</h1>
                                        </div>
                                        <div class="cre-t-5-updates-features-text2">
                                            <p
                                                class="cre-t-5-updates-features-subheader cre-t-5-updates-features3-subheader1">
                                                See exactly how to get the most from your garden space with videos selected
                                                to match what you’re growing in your garden.</p>
                                            <p
                                                class="cre-t-5-updates-features-subheader cre-t-5-updates-features3-subheader2">
                                                Watch as our experts guide you through the steps to gardening success.</p>
                                        </div>
                                    </div>
                                    <div class="cre-t-5-updates-features-info cre-t-5-updates-features2-content1">
                                        <div class="cre-t-5-updates-features-text1">
                                            <div class="cre-t-5-updates-features-checkmark">
                                                <svg xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    xmlns="http://www.w3.org/2000/svg" width="26px" height="26px"
                                                    viewBox="0 0 26 26" version="1.1">
                                                    <g id="" fill="#54A98D">
                                                        <path
                                                            d="M23.8977 6.2918C24.5324 6.92656 24.5324 7.95742 23.8977 8.59219L10.8977 21.5922C10.2629 22.227 9.23203 22.227 8.59727 21.5922L2.09727 15.0922C1.4625 14.4574 1.4625 13.4266 2.09727 12.7918C2.73203 12.157 3.76289 12.157 4.39766 12.7918L9.75 18.1391L21.6023 6.2918C22.2371 5.65703 23.268 5.65703 23.9027 6.2918L23.8977 6.2918Z">
                                                        </path>
                                                    </g>
                                                </svg>
                                            </div>
                                            <h1 class="cre-t-5-updates-features-header">Live Chat with our Gardening Experts
                                            </h1>
                                        </div>
                                        <div class="cre-t-5-updates-features-text2">
                                            <p class="cre-t-5-updates-features-subheader">Get super quick answers on
                                                everything from help with using the Garden Planner through to questions
                                                about how to grow particular plants or deal with pests.</p>
                                        </div>
                                    </div>
                                    <div class="cre-t-5-updates-features-info cre-t-5-updates-features2-content2">
                                        <div class="cre-t-5-updates-features-text1">
                                            <div class="cre-t-5-updates-features-checkmark">
                                                <svg xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    xmlns="http://www.w3.org/2000/svg" width="26px" height="26px"
                                                    viewBox="0 0 26 26" version="1.1">
                                                    <g id="" fill="#54A98D">
                                                        <path
                                                            d="M23.8977 6.2918C24.5324 6.92656 24.5324 7.95742 23.8977 8.59219L10.8977 21.5922C10.2629 22.227 9.23203 22.227 8.59727 21.5922L2.09727 15.0922C1.4625 14.4574 1.4625 13.4266 2.09727 12.7918C2.73203 12.157 3.76289 12.157 4.39766 12.7918L9.75 18.1391L21.6023 6.2918C22.2371 5.65703 23.268 5.65703 23.9027 6.2918L23.8977 6.2918Z">
                                                        </path>
                                                    </g>
                                                </svg>
                                            </div>
                                            <h1 class="cre-t-5-updates-features-header">Over 130 new plants—bringing to the
                                                current total to 408</h1>
                                        </div>
                                        <div class="cre-t-5-updates-features-text2">
                                            <p class="cre-t-5-updates-features-subheader">130+ new plants, including
                                                flowers, shrubs and fruit, extending the range of plants to include most of
                                                the common ornamental plants that gardeners grow. The Garden Planner now has
                                                comprehensive planting and growing information for 408 plants (and
                                                counting)!</p>
                                        </div>
                                    </div>
                                    <div class="cre-t-5-updates-features-info cre-t-5-updates-features2-content3">
                                        <div class="cre-t-5-updates-features-text1">
                                            <div class="cre-t-5-updates-features-checkmark">
                                                <svg xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    xmlns="http://www.w3.org/2000/svg" width="26px" height="26px"
                                                    viewBox="0 0 26 26" version="1.1">
                                                    <g id="" fill="#54A98D">
                                                        <path
                                                            d="M23.8977 6.2918C24.5324 6.92656 24.5324 7.95742 23.8977 8.59219L10.8977 21.5922C10.2629 22.227 9.23203 22.227 8.59727 21.5922L2.09727 15.0922C1.4625 14.4574 1.4625 13.4266 2.09727 12.7918C2.73203 12.157 3.76289 12.157 4.39766 12.7918L9.75 18.1391L21.6023 6.2918C22.2371 5.65703 23.268 5.65703 23.9027 6.2918L23.8977 6.2918Z">
                                                        </path>
                                                    </g>
                                                </svg>
                                            </div>
                                            <h1 class="cre-t-5-updates-features-header">Garden Journal Search</h1>
                                        </div>
                                        <div class="cre-t-5-updates-features-text2">
                                            <p class="cre-t-5-updates-features-subheader">Search across all your notes in
                                                the Garden Journal to find just the information you’re looking for.</p>
                                        </div>
                                    </div>
                                    <div class="cre-t-5-updates-features-info cre-t-5-updates-features2-content4">
                                        <div class="cre-t-5-updates-features-text1">
                                            <div class="cre-t-5-updates-features-checkmark">
                                                <svg xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    xmlns="http://www.w3.org/2000/svg" width="26px" height="26px"
                                                    viewBox="0 0 26 26" version="1.1">
                                                    <g id="" fill="#54A98D">
                                                        <path
                                                            d="M23.8977 6.2918C24.5324 6.92656 24.5324 7.95742 23.8977 8.59219L10.8977 21.5922C10.2629 22.227 9.23203 22.227 8.59727 21.5922L2.09727 15.0922C1.4625 14.4574 1.4625 13.4266 2.09727 12.7918C2.73203 12.157 3.76289 12.157 4.39766 12.7918L9.75 18.1391L21.6023 6.2918C22.2371 5.65703 23.268 5.65703 23.9027 6.2918L23.8977 6.2918Z">
                                                        </path>
                                                    </g>
                                                </svg>
                                            </div>
                                            <h1 class="cre-t-5-updates-features-header">Garden Planner Phone compatibility
                                            </h1>
                                        </div>
                                        <div class="cre-t-5-updates-features-text2">
                                            <p class="cre-t-5-updates-features-subheader">Use the full Garden Planner
                                                features on your phone, either to create plans or to update them while
                                                you’re in your garden.</p>
                                        </div>
                                    </div>
    
                                </div>
                                <div class="cre-t-5-updates-features-content cre-t-5-updates-features-content3">
                                    <div class="cre-t-5-updates-features-content3-header">
                                        <h1 class="cre-t-5-updates-features-content3-header-text">Coming Soon</h1>
                                        <div class="cre-t-5-updates-features-content3-header-line"></div>
                                    </div>
                                    <div class="cre-t-5-updates-features-info cre-t-5-updates-features3-content1">
                                        <div class="cre-t-5-updates-features-text1">
                                            <div class="cre-t-5-updates-features-checkmark">
                                                <svg xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    xmlns="http://www.w3.org/2000/svg" width="22px" height="22px"
                                                    viewBox="0 0 22 22" version="1.1">
                                                    <g id="" fill="#54A98D">
                                                        <path
                                                            d="M15.5848 1.62422L13.5051 3.70391L19.091 9.28984L21.1707 7.21016C22.2449 6.13594 22.2449 4.3957 21.1707 3.32148L19.4777 1.62422C18.4035 0.549999 16.6633 0.549999 15.5891 1.62422L15.5848 1.62422ZM12.534 4.675L2.51797 14.6953C2.07109 15.1422 1.74453 15.6965 1.56406 16.3023L0.0429688 21.4715C-0.0644531 21.8367 0.0343751 22.2277 0.300781 22.4941C0.567187 22.7605 0.958203 22.8594 1.31914 22.7563L6.48828 21.2352C7.09414 21.0547 7.64844 20.7281 8.09531 20.2813L18.1199 10.2609L12.534 4.675Z">
                                                        </path>
                                                    </g>
                                                </svg>
                                            </div>
                                            <h1 class="cre-t-5-updates-features-header">Adverse Weather Alerts</h1>
                                        </div>
                                        <div class="cre-t-5-updates-features-text2">
                                            <p class="cre-t-5-updates-features-subheader">Receive warnings by email when a
                                                late frost or other adverse weather is forecast, so you can quickly take
                                                action to save your plants!</p>
                                        </div>
                                    </div>
    
                                </div>
                            </div>
                        </div>
                        <div class="cre-t-5-updates-content cre-t-5-updates-content4">
                            <h1 class="cre-t-5-updates-content4-text">…and more</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="cre-t-5-new-section-harvest-wrapper container-T-81">
        <div class="cre-t-5-try-harvest-container">
            <div class="cre-t-5-harvest-main">
                <h1 class="cre-t-5-try-harvest-header"><span class="cre-t-5-try-harvest-header-border">See how you can have
                        your most bountiful harvest ever</span></h1>
                <p class="cre-t-5-harvest-sub-text"><span> with the Garden Planner </span></p>
            </div>
            <div class="cre-t-5-harvest-img-section"><iframe class="creVideo-06"
                    src="https://player.vimeo.com/video/891419948?h=c2d5f53448&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameborder="0" allow="autoplay; fullscreen; picture-in-picture"
                    style="position:relative;width:100%;min-height:400px;" title="Garden Planner Introduction"
                    data-ready="true"></iframe> <img class="cre-newPlayBtn"
                    src="https://cdn-3.convertexperiments.com/uf/10007679/10007271/1703674334youtube_1.png"><img
                    class="harvest-img-section"
                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T+51/bg+image.png"> </div>
        </div>
    </div>
    <div class="cre-t-5-grdn-plnr-created-wrapper container-T-81">
        <div class="cre-t-5-grdn-plnr-created-container">
            <div class="cre-t-5-grdn-plnr-created-main">
                <div class="cre-t-5-grdn-plnr-created-top">
                    <h1 class="cre-t-5-grdn-plnr-created-header">A Garden Planner created by gardeners for gardeners</h1>
                </div>
                <div class="cre-t-5-grdn-plnr-created-bottom">
                    <div class="cre-t-5-grdn-plnr-created-right-content cre-t-5-grdn-plnr-created-right-content1"> <img
                            src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/img-min.png"
                            alt="Bitmap-1x"></div>
                    <div class="cre-t-5-grdn-plnr-created-left">
                        <div class="cre-t-5-grdn-plnr-created-left-container">
                            <div class="cre-t-5-grdn-plnr-created-left-wrapper">
                                <div class="cre-t-5-grdn-plnr-created-left-main">
                                    <p
                                        class="cre-t-5-grdn-plnr-created-left-content cre-t-5-grdn-plnr-created-left-content1">
                                        Way back in 2006 our founder, Jeremy Dore, was growing organic food with his young
                                        children in a small front garden.</p>
                                    <p
                                        class="cre-t-5-grdn-plnr-created-left-content cre-t-5-grdn-plnr-created-left-content2">
                                        Although plenty of books and websites claimed to have all the answers to common
                                        gardening questions, he was surprised that none of them gave more than vague advice
                                        about planning where and when crops should be planted.</p>
                                    <p
                                        class="cre-t-5-grdn-plnr-created-left-content cre-t-5-grdn-plnr-created-left-content3">
                                        With a background in creating easy-to-use IT systems for education, Jeremy set about
                                        creating the perfect tool for gardeners—an online app that really understood how
                                        plants grow.</p>
                                    <p
                                        class="cre-t-5-grdn-plnr-created-left-content cre-t-5-grdn-plnr-created-left-content4">
                                        The app takes all the knowledge from the best experts and makes intelligent
                                        suggestions in an easy-to-use visual Garden Planner. No more leafing through
                                        encyclopedic books or vague articles online and re-drawing plans by hand.</p>
                                    <p
                                        class="cre-t-5-grdn-plnr-created-left-content cre-t-5-grdn-plnr-created-left-content5">
                                        Launching in 2007, the Garden Planner quickly became a world-wide hit and was
                                        expanded to cover climates around the world. Since then we’ve grown to a team of 15
                                        experts, and helped over 43 million people—from beginners to experienced gardeners
                                        alike—get the most from their gardens</p>
                                    <div
                                        class="cre-t-5-grdn-plnr-created-left-content cre-t-5-grdn-plnr-created-left-content6">
                                        <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/signature-dore.png"
                                            alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cre-t-5-grdn-plnr-created-right">
                        <div class="cre-t-5-grdn-plnr-created-right-content cre-t-5-grdn-plnr-created-right-content1"> <img
                                src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/img-min.png"
                                alt="Bitmap-1x"> </div>
                        <div class="cre-t-5-grdn-plnr-created-right-content cre-t-5-grdn-plnr-created-right-content2"> <img
                                class="cre-t-5-grdn-plnr-created-right2-img1"
                                src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/gardenPlanner6.png"
                                alt="elaine"> <img class="cre-t-5-grdn-plnr-created-right2-img2"
                                src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/gardenPlanner7.png"
                                alt="susie"> <img class="cre-t-5-grdn-plnr-created-right2-img3"
                                src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/gardenPlanner8.png"
                                alt="ben"> <img class="cre-t-5-grdn-plnr-created-right2-img4"
                                src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/gardenPlanner9.png"
                                alt="jeremy"> <img class="cre-t-5-grdn-plnr-created-right2-img5"
                                src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/gardenPlanner10.png"
                                alt="barbara"> <img class="cre-t-5-grdn-plnr-created-right2-img6"
                                src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/gardenPlanner11.png"
                                alt="annmarie"> <img class="cre-t-5-grdn-plnr-created-right2-img7"
                                src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/gardenPlanner12.png"
                                alt="roisin"> </div>
                        <div class="cre-t-5-grdn-plnr-created-right-content cre-t-5-grdn-plnr-created-right-content3">
                            <div class="cre-t-5-grdn-plnr-created-right-link">Meet the rest of our lovely team</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="cre-t-5-satisfied-garden-wrapper container-T-81">
        <div class="cre-t-5-satisfied-garden-container">
            <div class="cre-t-5-satisfied-main">
                <div class="cre-t-5-satisfied-header">
                    <h1 class="cre-t-5-satisfied-header-text">A satisfied gardener left us this lovely feedback, just last
                        week:</h1>
                </div>
                <div class="cre-t-5-satisfied-content">
                    <div class="cre-t-5-satisfied-quote-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100pt" height="100pt" version="1.1"
                            viewBox="0 0 100 100">
                            <path
                                d="m6.4375 50.5v35.875h35.875v-35.875h-20.5c0-11.32 9.1797-20.5 20.5-20.5v-15.375c-19.816 0-35.875 16.062-35.875 35.875zm87.125-20.5v-15.375c-19.812 0-35.875 16.062-35.875 35.875v35.875h35.875v-35.875h-20.5c0-11.32 9.1797-20.5 20.5-20.5z"
                                fill="#fff" fill-rule="evenodd"></path>
                        </svg>
                    </div>
                    <h1 class="cre-t-5-satisfied-content-text">“Thank you so much for such a thorough and satisfactory
                        response. It all makes sense. I absolutely love the planner and the journal. This is the first year
                        I've really taken the time to get to know its capabilities. And the customer support is
                        outstanding!!!"</h1>
                </div>
            </div>
        </div>
    </div>
    <div class="cre-t-5-live-card-support-wrapper cre-t-5-live-card-support1 cre-t-81-caret container-T-81" id="review">
        <div class="cre-t-5-live-card-support-container">
            <div class="cer-cards-parts">
                <div class="cre-t-5-impressive-header Crethousands">Why over 800,000 gardeners
                    of all abilities love the Garden
                    Planner</div>
                <div class="cer-new-card-wrapper">
                    <div class="cre-cards">
                        <div class="cre-card-one cre-common-card">
                            <div class="cre-cards-topImg"> <img
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/Landing+Page+%7C+YouTube+This+is+what+Ben+uses+sales+landing+page/4.png"
                                    alt="" class="cre-cards-top-img"> </div>
                            <div class="cre-card-title-part">
                                <p>Finally found a garden planner that works for me!</p>
                            </div>
                            <div class="cre-clint-name">
                                <p>Sandy B. in Michigan Upper Peninsula</p>
                            </div>
                            <div class="cre-img-icons"> <img class="cre-icons"
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/Landing+Page+%7C+YouTube+This+is+what+Ben+uses+sales+landing+page/2.png"
                                    alt=""> </div>
                            <div class="cre-card-text">
                                <div class="cre-first-text">
                                    <p class="cre-text-one">I would (and have) highly recommend the Garden Planner for
                                        anyone that enjoys gardening.</p>
                                    <p class="cre-text-two">I particularly like the feature of being able to show succession
                                        plantings. And I also love Ben's videos, of course!</p>
                                    <p class="cre-text-three">I've tried several other planners over the years, and have
                                        also used graph paper and colored pencils to diagram my garden, this planner is
                                        light years ahead of any other method I've used</p>
                                </div>
                            </div>
                        </div>
                        <div class="cre-card-two cre-common-card">
                            <div class="cre-cards-topImg"> <img
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/Landing+Page+%7C+YouTube+This+is+what+Ben+uses+sales+landing+page/4.png"
                                    alt="" class="cre-cards-top-img"> </div>
                            <div class="cre-card-title-part">
                                <p>So easy to use</p>
                            </div>
                            <div class="cre-clint-name">
                                <p>Cheri in Lake city, FL</p>
                            </div>
                            <div class="cre-img-icons"> <img class="cre-icons"
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/Landing+Page+%7C+YouTube+This+is+what+Ben+uses+sales+landing+page/2.png"
                                    alt=""> </div>
                            <div class="cre-card-text">
                                <div class="cre-first-text">
                                    <p class="cre-text-one">It is easy to use in designing the garden areas. Each plant's
                                        information and planting chart makes that so easy.</p>
                                    <p class="cre-text-two">The journal makes it easy to keep track of seeding,
                                        transplanting, and harvesting information to use for next season.</p>
                                </div>
                            </div>
                        </div>
                        <div class="cre-card-three cre-common-card">
                            <div class="cre-cards-topImg"> <img
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/Landing+Page+%7C+YouTube+This+is+what+Ben+uses+sales+landing+page/4.png"
                                    alt="" class="cre-cards-top-img"> </div>
                            <div class="cre-card-title-part">
                                <p>Great, easy product from novice to experienced gardener</p>
                            </div>
                            <div class="cre-clint-name">
                                <p>Claire-Louise</p>
                            </div>
                            <div class="cre-img-icons"> <img class="cre-icons"
                                    src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/Landing+Page+%7C+YouTube+This+is+what+Ben+uses+sales+landing+page/2.png"
                                    alt=""> </div>
                            <div class="cre-card-text">
                                <div class="cre-first-text">
                                    <p class="cre-text-one">The product was very easy to start and within 20 minutes I had a
                                        plan for my veg patch.</p>
                                    <p class="cre-text-two">It also tells me how many plants I'll need, when to sow and pot
                                        on, plant &amp; harvest.</p>
                                    <p class="cre-text-three">With the notifications on what to do - it should keep me on
                                        track!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="Feefo-parent"> <a href="https://www.feefo.com/reviews/growing-interactive"
                            target="_blank"><img alt="Feefo logo" border="0"
                                src="https://api.feefo.com/api/logo?merchantidentifier=growing-interactive"
                                title="See what our customers say about us"></a>
                        <p>Verified independent reviews</p>
                    </div>
    
                </div>
            </div>
        </div>
    </div>
    <div class="cre-t-5-recommended-wrapper container-T-81">
        <div class="cre-t-5-recommended-container">
            <div class="cre-t-5-recommended-main">
                <div class="cre-t-5-recommended-header">
                    <h1 class="cre-t-5-recommended-header-text">Recommended By</h1>
                </div>
                <div class="cre-t-5-recommended-list">
                    <div class="cre-t-5-recommended-list-wrapper">
                        <div class="cre-t-5-recommended-list-item cre-t-5-recommended-list-item1"><img
                                src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/stack-images-1.png"
                                alt=""></div>
                        <div class="cre-t-5-recommended-list-item cre-t-5-recommended-list-item2"><img
                                src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/stack-images-2.png"
                                alt=""></div>
                        <div class="cre-t-5-recommended-list-item cre-t-5-recommended-list-item3"><img
                                src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/stack-images-3.png"
                                alt=""></div>
                        <div class="cre-t-5-recommended-list-item cre-t-5-recommended-list-item4"><img
                                src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/stack-images-4.png"
                                alt=""></div>
                        <div class="cre-t-5-recommended-list-item cre-t-5-recommended-list-item5"><img
                                src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/stack-images-5.png"
                                alt="fothergill"></div>
                        <div class="cre-t-5-recommended-list-item cre-t-5-recommended-list-item6"><img
                                src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/stack-images-6.png"
                                alt=""></div>
                        <div class="cre-t-5-recommended-list-item cre-t-5-recommended-list-item7"><img
                                src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T-5/stack-images-7.png"
                                alt=""></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="cre-t-5-try-garden-wrapper cre-t-5-try-garden-wrapper-bottom container-T-81">
        <div class="cre-t-5-try-garden-container">
            <div class="cre-t-5-try-garden-main">
                <h1 class="cre-t-5-try-garden-header"><span>Try the Garden Planner FREE for 7 days</span>—No payment details
                    needed</h1>
                <div class="cre-t-5-try-garden-lists">
                    <div class="cre-t-5-try-garden-sub-header">Your <span>free 7 day trial</span> includes:</div>
                    <div class="cre-t-5-try-garden-list">
                        <div class="cre-t-5-try-garden-icon">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="19px"
                                height="21px" viewBox="0 0 19 21" version="1.1">
                                <g id="" fill="#1DC089">
                                    <path
                                        d="M18.7031 11.1865C18.7031 6.10377 14.5828 1.9834 9.5 1.9834C4.41725 1.9834 0.296875 6.10377 0.296875 11.1865C0.296875 16.2693 4.41725 20.3896 9.5 20.3896C14.5828 20.3896 18.7031 16.2693 18.7031 11.1865ZM8.4355 16.0595C8.2036 16.2913 7.82765 16.2913 7.59575 16.0595L3.73638 12.2001C3.50455 11.9682 3.50455 11.5923 3.73638 11.3604L4.57609 10.5207C4.80795 10.2889 5.18393 10.2889 5.41579 10.5207L8.01563 13.1206L13.5842 7.55202C13.8161 7.32012 14.1921 7.32012 14.4239 7.55202L15.2636 8.39169C15.4954 8.62355 15.4954 8.99953 15.2636 9.2314L8.4355 16.0595Z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <p class="cre-t-5-try-garden-content">Full access to the <span>Garden Planner and Garden
                                Journal</span></p>
                    </div>
                    <div class="cre-t-5-try-garden-list">
                        <div class="cre-t-5-try-garden-icon">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="19px"
                                height="21px" viewBox="0 0 19 21" version="1.1">
                                <g id="" fill="#1DC089">
                                    <path
                                        d="M18.7031 11.1865C18.7031 6.10377 14.5828 1.9834 9.5 1.9834C4.41725 1.9834 0.296875 6.10377 0.296875 11.1865C0.296875 16.2693 4.41725 20.3896 9.5 20.3896C14.5828 20.3896 18.7031 16.2693 18.7031 11.1865ZM8.4355 16.0595C8.2036 16.2913 7.82765 16.2913 7.59575 16.0595L3.73638 12.2001C3.50455 11.9682 3.50455 11.5923 3.73638 11.3604L4.57609 10.5207C4.80795 10.2889 5.18393 10.2889 5.41579 10.5207L8.01563 13.1206L13.5842 7.55202C13.8161 7.32012 14.1921 7.32012 14.4239 7.55202L15.2636 8.39169C15.4954 8.62355 15.4954 8.99953 15.2636 9.2314L8.4355 16.0595Z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <p class="cre-t-5-try-garden-content">Access to <span>all expert Grow Guides</span>, videos and
                            articles at your fingertips</p>
                    </div>
                    <div class="cre-t-5-try-garden-list">
                        <div class="cre-t-5-try-garden-icon">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="19px"
                                height="21px" viewBox="0 0 19 21" version="1.1">
                                <g id="" fill="#1DC089">
                                    <path
                                        d="M18.7031 11.1865C18.7031 6.10377 14.5828 1.9834 9.5 1.9834C4.41725 1.9834 0.296875 6.10377 0.296875 11.1865C0.296875 16.2693 4.41725 20.3896 9.5 20.3896C14.5828 20.3896 18.7031 16.2693 18.7031 11.1865ZM8.4355 16.0595C8.2036 16.2913 7.82765 16.2913 7.59575 16.0595L3.73638 12.2001C3.50455 11.9682 3.50455 11.5923 3.73638 11.3604L4.57609 10.5207C4.80795 10.2889 5.18393 10.2889 5.41579 10.5207L8.01563 13.1206L13.5842 7.55202C13.8161 7.32012 14.1921 7.32012 14.4239 7.55202L15.2636 8.39169C15.4954 8.62355 15.4954 8.99953 15.2636 9.2314L8.4355 16.0595Z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <p class="cre-t-5-try-garden-content"><span>Priority support </span>from our expert gardeners</p>
                    </div>
                </div>
                <div class="cre-t-5-try-garden-buttons">
                    <p class="cre-t-5-try-garden-buttons-header">As part of your trial, you can create and print your garden
                        plan and keep it forever, no matter what you decide.<span
                            class="cre-t-5-try-garden-buttons-header-arrow"></span></p>
                    <a href="/account/create-account/" class="cre-t-5-try-garden-button button-one">Start planning your
                        garden for FREE now</a> <a href="/subscribeinfo.aspx" class="cre-t-5-try-garden-button">See plans
                        and pricing</a>
                </div>
                <p class="cre-t-5-try-garden-footer"> <span>No download required</span> | No obligation | Cancel any time
                    <br>We’ll only ask for payment details if you decide to keep using the Garden Planner after the free
                    trial.
                </p>
            </div>
        </div>
    </div>`
        var Mobileheader = `<div class="mobile-header-t81">
    <div class="header-left-t81">
        <a href="/">
            <img width="100%" height="100%"
                src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/grow-logo.svg"
                id="Cre-T81-main-logo" alt=""></a>
    </div>
    <div class="header-right-t81">
        <a href="/account/create-account/" class="Cre-T-81-StickyNav-CTA">Get Started
            Free</a>
    </div>
</div>`
        var secondryusp = `<div class="Cre-StickyNav-mobile">
<div class="CRE-navStickyItem">
    <p class="Scrollactive overview-t81">Overview</p>
    <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/seemorearrow.png" alt="link"
        style="width:20px">
</div>
<div class="CRE-navStickyItem">
    <p class="perfectPlan-t81">Create Your Plan</p>
    <img src=" https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/seemorearrow.png" alt="link"
        style="width:20px">
</div>
<div class="CRE-navStickyItem">
    <p class="personalized-calendar-t81">Personalized Planting Calendar</p>
    <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/seemorearrow.png" alt="link"
        style="width:20px">
</div>
<div class="CRE-navStickyItem">
    <p class="maximizeharvest-t81">Maximize Your Harvest</p>
    <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/seemorearrow.png" alt="link"
        style="width:20px">
</div>
<div class="CRE-navStickyItem">
    <a href="/account/login">Login</a>
</div>
</div>`

        function addScript() {
            var scriptOne = document.createElement("script");
            scriptOne.src = "https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.3.2/swiper-bundle.min.js";
            document.querySelector("head").appendChild(scriptOne);

            var swiperCss =
                '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.3.2/swiper-bundle.css" integrity="sha512-ipO1yoQyZS3BeIuv2A8C5AwQChWt2Pi4KU3nUvXxc4TKr8QgG8dPexPAj2JGsJD6yelwKa4c7Y2he9TTkPM4Dg==" crossorigin="anonymous" referrerpolicy="no-referrer" />';
            document.querySelector("head").insertAdjacentHTML("beforeend", swiperCss);
        }

        addScript();

        function swiperInit() {
            var swiper = new Swiper("#impressive-Slider", {
                autoHeight: true,
                loop: true,
                pagination: {
                    el: ".swiper-pagination-impressive-Slider",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next-impressive-Slider",
                    prevEl: ".swiper-button-prev-impressive-Slider",
                    clickable: true,
                },

                speed: 850,
            });

            var swiperTwo = new Swiper(" .cre-t-5-sow-container .swiper", {
                loop: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                    clickable: true,
                },
                speed: 850,
            });

            var swiperThree = new Swiper(".cre-t-5-experts-sldr", {
                slidesPerView: 1,
                loop: true,
                pagination: {
                    el: ".swiper-pagination-5-experts",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next-5-experts",
                    prevEl: ".swiper-button-prev-5-experts",
                },
                breakpoints: {
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    1023: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                },
                speed: 850,
            });

            var swiperFive = new Swiper('.Cre-T83-swiper-container', {
                // Swiper options here
                // Add any necessary configuration for your Swiper instance
                autoHeight: true,
                on: {
                    slideChange: function () {

                        var activeIndex = this.activeIndex;

                        // Get all slide headings
                        var headings = document.querySelectorAll('.slide-heading > div');

                        // Remove active class from all headings
                        headings.forEach(function (heading) {
                            heading.classList.remove('active');
                        });

                        // Add active class to the heading of the active slide
                        headings[activeIndex].classList.add('active');
                        console.log(activeIndex)

                    }
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
            var deskheadings = document.querySelectorAll('.slide-heading > div');
            deskheadings.forEach(function (heading, index) {
                heading.addEventListener('click', function () {
                    swiperFive.slideToLoop(index); // Use slideToLoop to handle looped swiper correctly
                });
            });
            var swiperSix = new Swiper('#swiper-t-81', {
                // Optional parameters
                slidesPerView: 1.5,
                centeredSlides: true,
                spaceBetween: 20,
                loop: true,
                lazyLoading: true,
                // pagination
                pagination: {
                    el: '.swiper-t-81-pagination',
                    dynamicBullets: true,
                },
                autoplay: {
                    delay: 2000, // Time between slides in milliseconds
                    disableOnInteraction: false, // Prevent autoplay from stopping on user interaction
                },

            });

            var cre81SwiperaMobile = new Swiper(" .cre-growveg-mobile-wrapper  .cre-t-81-5-review-container .swiper", {
                // Optional parameters
                direction: "horizontal",
                autoHeight: true,
                spaceBetween: 20,
                slidesPerView: 1,
                roundLengths: true,
                navigation: {
                    nextEl: " .cre-t-81-5-review-container  .swiper-button-next",
                    prevEl: " .cre-t-81-5-review-container  .swiper-button-prev",
                },
            });
            var swipermobileseven = new Swiper('.Cre-T83-swiper-container-mobile', {
                autoHeight: true,
                navigation: {
                    nextEl: ".mobile-perfect-plan .swiper-button-next",
                    prevEl: ".mobile-perfect-plan .swiper-button-prev",
                },
                on: {
                    slideChange: function () {
                        var activeIndex = this.activeIndex;

                        // Get all slide headings
                        var headings = document.querySelectorAll('.slide-heading-mobile>div');

                        // Remove active class from all headings
                        headings.forEach(function (heading) {
                            heading.classList.remove('active');
                        });

                        // Add active class to the heading of the active slide
                        headings[activeIndex].classList.add('active');
                        console.log(activeIndex)
                    }
                }
            });

            // Initialize with the first heading active
            var headings = document.querySelectorAll('.slide-heading-mobile > div');
            headings.forEach(function (heading, index) {
                heading.addEventListener('click', function () {
                    swipermobileseven.slideToLoop(index); // Use slideToLoop to handle looped swiper correctly
                });
            });

        }


        function bmScroll(bmContentId, bmValue) {
            const bmContent = document.querySelector(bmContentId);
            const scrollTop = bmContent.getBoundingClientRect().top + window.pageYOffset - bmValue;

            window.scrollTo({
                top: scrollTop,
                behavior: "smooth",
            });
        }


        // Function to check the position of the element and add/remove class accordingly
        function checkElementPosition() {
            // Get the element with the class .cre-t-5-draw-header
            var element = document.querySelector('.cre-t-5-draw-header');

            // Check if the element is found
            if (element) {
                // Get the position of the element from the top of the page
                var positionFromTop = element.getBoundingClientRect().top;

                // Check if the position is less than 21px
                if (positionFromTop < 21) {
                    // Add a class to the body
                    document.body.classList.add('Creshowitem');
                } else {
                    // Remove the class from the body
                    document.body.classList.remove('Creshowitem');
                }
            } else {
                console.log('Element not found');
            }
        }
        live(".mobile-nav-81>li>a", "click", function () {
            if (document.querySelector("#mobile-menu").classList.contains("menu-open")) {
                document.querySelector("#mobile-menu").classList.remove("menu-open")
            }
        })

        waitForElement("#page-header .header-upper-pane", function () {
            if (!document.querySelector(".mobile-header-t81")) {
                document.querySelector("#page-header .header-upper-pane").insertAdjacentHTML("afterbegin", Mobileheader)
            }
        }, 50, 15000)
        waitForElement(".mobile-header-t81", function () {
            if (!document.querySelector(".Cre-StickyNav-mobile")) {
                document.querySelector(".mobile-header-t81").insertAdjacentHTML("afterend", secondryusp)
            }
        })
        waitForElement(".Cre-StickyNav-inner .CRE-navStickyItem p", function () {
            const navLinks = document.querySelectorAll('.Cre-StickyNav-inner .CRE-navStickyItem p');

            // Add click event listener to each navigation link
            navLinks.forEach(link => {
                link.addEventListener('click', function (event) {
                    // Remove 'active' class from all links
                    navLinks.forEach(navLink => {
                        navLink.classList.remove('Scrollactive');
                    });

                    // Add 'active' class to the clicked link
                    link.classList.add('Scrollactive');
                });
            });
            const navLinksmobile = document.querySelectorAll('.Cre-StickyNav-mobile .CRE-navStickyItem p');

            // Add click event listener to each navigation link
            navLinksmobile.forEach(link => {
                link.addEventListener('click', function (event) {
                    // Remove 'active' class from all links
                    navLinksmobile.forEach(navLink => {
                        navLink.classList.remove('Scrollactive');
                    });

                    // Add 'active' class to the clicked link
                    link.classList.add('Scrollactive');
                });
            });
            live(".overview-t81 , .overview-t81-mobile", "click", function () {
                scrollToEl("#hero-wrapper")
                if (document.querySelector("#mobile-menu").classList.contains("menu-open")) {
                    document.querySelector("#mobile-menu").classList.remove("menu-open")
                }
            })
            live(".perfectPlan-t81", "click", function () {
                scrollToEl("#perfectPlan")
                if (document.querySelector("#mobile-menu").classList.contains("menu-open")) {
                    document.querySelector("#mobile-menu").classList.remove("menu-open")
                }
            })
            live(".personalized-calendar-t81 ,.personalized-calendar-81", "click", function () {
                scrollToEl("#personalized-calendar")
                if (document.querySelector("#mobile-menu").classList.contains("menu-open")) {
                    document.querySelector("#mobile-menu").classList.remove("menu-open")
                }

            })
            live(".maximizeharvest-t81", "click", function () {
                scrollToEl("#maximizeharvest")
                if (document.querySelector("#mobile-menu").classList.contains("menu-open")) {
                    document.querySelector("#mobile-menu").classList.remove("menu-open")
                }
            })


        }, 50, 15000)

        // Function to debounce the scroll event
        function debounce(func, wait, immediate) {
            var timeout;
            return function () {
                var context = this,
                    args = arguments;
                var later = function () {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        }

        // Function to check the position of the element and add/remove class accordingly
        function checkElementPosition() {
            // Get the element with the class .cre-t-5-draw-header
            var element = document.querySelector('.cre-t-5-draw-header');

            // Check if the element is found
            if (element) {
                // Get the position of the element from the top of the page
                var positionFromTop = element.getBoundingClientRect().top;

                // Check if the position is less than 21px
                if (positionFromTop < 21) {
                    // Add a class to the body
                    document.body.classList.add('Creshowitem');
                } else {
                    // Remove the class from the body
                    document.body.classList.remove('Creshowitem');
                }
            } else {
                console.log('Element not found');
            }
        }

        // Debounce the scroll event to limit the frequency of calling checkElementPosition
        var debouncedCheckElementPosition = debounce(checkElementPosition, 250);

        // Run the function when the page loads
        checkElementPosition();

        // Run the debounced function when the user scrolls
        window.addEventListener('scroll', debouncedCheckElementPosition);

        // Run the function when the page loads
        checkElementPosition();

        // Run the function when the user scrolls
        window.addEventListener('scroll', checkElementPosition);

        var sitckyNavBar = `<div class="Cre-T-81-StickyNav">
        <div class="Cre-StickyNav-inner">
<div class="logo-t81"><a href="/">
        <img width="100%" height="100%" src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/grow-logo.svg" id="Cre-T81-main-logo" alt=""></a>
</div>
<div class="CRE-navStickyItem">
    <p class="Scrollactive overview-t81">Overview</p>
    <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/seemorearrow.png" alt="link" style="width:20px">
</div>
<div class="CRE-navStickyItem">
    <p class="perfectPlan-t81"">Create Your Plan</p>
    <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/seemorearrow.png" alt="link" style="width:20px">
</div>
<div class="CRE-navStickyItem">
    <p class="personalized-calendar-t81">Personalized Planting Calendar</p>
    <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/seemorearrow.png" alt="link" style="width:20px">
</div>
<div class="CRE-navStickyItem">
    <p class="maximizeharvest-t81">Maximize Your Harvest</p>
    <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/seemorearrow.png" alt="link" style="width:20px">
</div>
<div class="CRE-navStickyItem">
    <a href="/account/login">Login</a>
</div>
<div class="Cre-T-81-StickyNav-CTA">
    <a href="/account/create-account/">Get Started Free</a>
</div>
</div>
</div>`
        function scrollToEl(el) {
            if (window.innerWidth > 1023) {
                var scrollHeight = document.querySelector(el);
                scrollHeight = scrollHeight && scrollHeight.getBoundingClientRect().top || 0;
                scrollHeight = scrollHeight + scrollY - 50;
                scrollTo({ top: scrollHeight, behavior: 'smooth' });
            } else {
                var scrollHeight = document.querySelector(el);
                scrollHeight = scrollHeight && scrollHeight.getBoundingClientRect().top || 0;
                scrollHeight = scrollHeight + scrollY - 75;
                scrollTo({ top: scrollHeight, behavior: 'smooth' });
            }
        }
        function init() {
            document.body.classList.add(variation_name);
            if (!document.querySelector('.cre-t-5-hero-wrapper')) {
                document.querySelector("#aspnetForm").insertAdjacentHTML("afterend", heroSection);
            }

            waitForElement(".cre-growveg-mobile-wrapper", function () {

                if (!document.querySelector(".Cre-T-81-StickyNav")) {
                    document.querySelector("#page-header").insertAdjacentHTML("afterbegin", sitckyNavBar);
                }
                if (!document.querySelector(".mobile-nav-81")) {
                    document.querySelector("#mobile-menu .mobile-menu-inner:first-child>ul").insertAdjacentHTML("beforebegin", mobileNavitem);
                }
            }, 50, 15000)


            document.querySelector(".header-upper-inner .mobile-menu-button").insertAdjacentHTML("afterend", '<div class="Feefo-parent">                  <a href="https://www.feefo.com/reviews/growing-interactive" target="_blank"><img alt="Feefo logo" border="0" src="https://api.feefo.com/api/logo?merchantidentifier=growing-interactive" title="See what our customers say about us"></a> ' + uspFive + '  </div>');
            document.querySelector('#content-container').insertAdjacentHTML("afterend", '<div class="cre-stickycta cre-t-5-try-garden-buttons"> <a href="/account/create-account/" class="cre-t-5-try-garden-button button-one">Start planning your garden for FREE now</a> <a href="/subscribeinfo.aspx" class="cre-t-5-try-garden-button">See plans and pricing</a></div>');


            waitForSwiper(swiperInit);

            waitForVimeo(function () {
                onVimeoPlayerAPIReady();
            });

            live(".cre-t-5-hero-right-bottom-img-section", "click", function () {
                // if(document.querySelector('.creVideo.cre-hide')){
                // document.querySelector('.creVideo').classList.remove('cre-hide')
                // cre-t-5-hero-right-bottom-img-section
                // document.querySelector('.cre-t-5-hero-right-bottom-img-section').classList.add('cre-hide')
                document.querySelector("body").classList.remove("bmhide");

                var iframeVideo1 = document.querySelector(".creVideo-06");
                var player2 = new Vimeo.Player(iframeVideo1);
                player2.pause();

                var iframeVideo = document.querySelector(".creVideo-05");
                var player = new Vimeo.Player(iframeVideo);
                player.play();
                // }
            });

            live(".cre-t-05-overlay, .croxx", "click", function () {
                // if(document.querySelector('.creVideo.cre-hide')){
                // document.querySelector('.creVideo').classList.remove('cre-hide')
                // cre-t-5-hero-right-bottom-img-section
                // document.querySelector('.cre-t-5-hero-right-bottom-img-section').classList.add('cre-hide')
                document.querySelector("body").classList.add("bmhide");

                var iframeVideo = document.querySelector(".creVideo-05");
                var player = new Vimeo.Player(iframeVideo);
                player.pause();
                // }
            });

            live(".cre-t-5-grdn-plnr-created-right-link", "click", function () {
                bmScroll(".cre-t-5-experts-wrapper", 100);
                // bmswiper.autoplay.start();
            });

            waitForElement(
                ".cre-t-5-recommended-wrapper",
                function () {
                    if (!document.querySelector(".cre-t-5-new-section-harvest-wrapper")) {
                        document.querySelector(".cre-t-5-recommended-wrapper").insertAdjacentHTML("beforebegin", harvest);
                    }
                },
                50,
                15000
            );

            live(".harvest-img-section, .cre-newPlayBtn", "click", function () {
                // if(document.querySelector('.creVideo.cre-hide')){
                // document.querySelector('.creVideo').classList.remove('cre-hide')
                // cre-t-5-hero-right-bottom-img-section
                // document.querySelector('.cre-t-5-hero-right-bottom-img-section').classList.add('cre-hide')
                document.querySelector("body").classList.add("cre-t-81-Hide");

                var iframeVideo = document.querySelector(".creVideo-06");
                var player = new Vimeo.Player(iframeVideo);
                player.play();
                // }
            });
        }

        live("#mobile-menu-open", "click", function () {
            document.querySelector("body").classList.toggle("cre-test8");
            // bmswiper.autoplay.start();
        });



        // function for click element for chat open
        live(".hidearrow", "click", function (event) {
            event.preventDefault();
            openIntercomChat()

        });

        function openIntercomChat() {
            // Check if the Intercom object is available
            if (window.Intercom) {
                window.Intercom('show');
            } else {
                console.error('Intercom not available.');
            }
        }
        waitForElement(".cre-81-review", function () {
            live(".cre-81-review .seeMore", "click", function () {
                if (this.parentNode.classList.contains("see-more-part")) {
                    this.parentNode.classList.remove("see-more-part")
                } else {
                    this.parentNode.classList.add("see-more-part")
                }
            })
        }, 50, 15000)
        waitForElement(".cre-81-review", function () {
            live(".cre-81-review .full-review", "click", function () {
                if (this.parentNode.parentNode.parentNode.classList.contains("see-more-part")) {
                    this.parentNode.parentNode.parentNode.classList.remove("see-more-part")
                } else {
                    this.parentNode.parentNode.parentNode.classList.add("see-more-part")
                }
            })
        }, 50, 15000)


        function stickyButton() {
            var target = document.querySelector("#page-header");
            function callback(entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        if (document.querySelector(".cre-t-8-Sticky")) {
                            document.querySelector("body").classList.remove("cre-t-8-Sticky");
                        }
                    } else {
                        document.querySelector("body").classList.add("cre-t-8-Sticky");
                    }
                });
            }
            let observer = new IntersectionObserver(callback);
            observer.observe(target);
        }

        var cre_growveg_desktop =
            "" +
            '  <div class="cre-growveg cre-forDesktop cre-t-5">' +
            '      <div class="cre-groveg-container">' +
            '          <div class="cre-growveg-row">' +
            '              <div class="cre-groevag-card"> <div class="cre-img"><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/planner-icon81.png" alt="" class="cre-planer"></div>' +
            '                  <p class="cre-card-copy"><strong>1,034,104 garden plans</strong> <br /> created by 869,812 gardeners</p>' +
            "                  " +
            uspOne +
            "              </div>" +
            '              <svg width="1" height="90" viewBox="0 0 1 46" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.5" y1="2.18557e-08" x2="0.499998" y2="46" stroke="black" stroke-opacity="1"/></svg>' +
            '              <div class="cre-groevag-card"><div class="cre-img"><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/climate-icon81.png" alt="" class="cre-world"></div>' +
            '                  <p class="cre-card-copy"><strong>Tailored to your local climate</strong> <br /> using data from 5,000 weather stations</p>' +
            "                  " +
            uspTwo +
            "              </div>" +
            '              <svg width="1" height="90" viewBox="0 0 1 46" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.5" y1="2.18557e-08" x2="0.499998" y2="46" stroke="black" stroke-opacity="1"/></svg>' +
            '              <div class="cre-groevag-card"><div class="cre-img"><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/video-icon81.png" alt="" class="cre-ecology"></div>' +
            '                  <p class="cre-card-copy"><strong>Personalized how-to videos and articles,</strong><br /> based on what you’re growing</p>' +
            "                  " +
            uspFour +
            "              </div>" +
            '<svg width="1" height="90" viewBox="0 0 1 46" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.5" y1="2.18557e-08" x2="0.499998" y2="46" stroke="black" stroke-opacity="1"></line></svg>' +
            '              <div class="cre-groevag-card cre-t-5-review-icon cre-groevag-card">' +
            '                  <div class="cre-img"><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/plant-icon81.png" alt="" class="cre-ecology"></div> <p class="cre-card-copy"><strong> Every plant you’ll ever need </strong><br> for a thriving garden</p>' +
            "                  " +
            newstyle +
            "              </div>" +
            '              <svg width="1" height="90" viewBox="0 0 1 46" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.5" y1="2.18557e-08" x2="0.499998" y2="46" stroke="black" stroke-opacity="1"/></svg>' +
            '              <div class="cre-groevag-card"><div class="cre-img"><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/chat-icon81.png" alt="" class="cre-chat"></div>' +
            '                  <p class="cre-card-copy"><strong>Your gardening questions answered in minutes </strong> <br />by our expert gardeners, 7 days a week</p>' +
            "                  " +
            uspThree +
            "              </div>" +
            "          </div>" +
            "      </div>" +
            "  </div>";

        var cre_growveg_mobile =
            "" +
            '<div class="cre-growveg-mobile-wrapper">' +
            uspOne +
            uspTwo +
            uspThree +
            uspFour +
            newstyle +
            uspFive +
            '  <div class="cre-growveg cre-forMobile swiper bmswiper">' +
            '      <div class="cre-groveg-container swiper-container">' +
            '          <div class="cre-growveg-row swiper-wrapper">' +
            '              <div class="cre-groevag-card  garden swiper-slide"> <div class="cre-img"><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/planner-icon81.png" alt="" class="cre-planer"></div>' +
            '                  <p class="cre-card-copy"><strong>1,034,104 garden plans</strong> <br /> created by 869,812 gardeners</p>' +
            "              </div>" +
            '              <svg width="1" height="90" viewBox="0 0 1 46" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.5" y1="2.18557e-08" x2="0.499998" y2="46" stroke="black" stroke-opacity="1"/></svg>' +
            '              <div class="cre-groevag-card climate swiper-slide"><div class="cre-img"><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/climate-icon81.png" alt="" class="cre-world"></div>' +
            '                  <p class="cre-card-copy"><strong>Tailored to your local climate </strong><br /> using data from 5,000 weather stations</p>' +
            "              </div>" +
            '              <svg width="1" height="90" viewBox="0 0 1 46" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.5" y1="2.18557e-08" x2="0.499998" y2="46" stroke="black" stroke-opacity="1"/></svg>' +
            '              <div class="cre-groevag-card live-support  swiper-slide"><div class="cre-img"><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/chat-icon81.png" alt="" class="cre-chat"></div>' +
            '                  <p class="cre-card-copy"><strong>Instant Live Support</strong><br /> from our expert gardeners, 7 days a week</p>' +
            "              </div>" +
            '              <svg width="1" height="90" viewBox="0 0 1 46" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.5" y1="2.18557e-08" x2="0.499998" y2="46" stroke="black" stroke-opacity="1"/></svg>' +
            '              <div class="cre-groevag-card insect swiper-slide"><div class="cre-img"><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/video-icon81.png" alt="" class="cre-ecology"></div>' +
            '                  <p class="cre-card-copy"><strong>1527 Grow Guides & Counting! </strong><br /> Including videos & pest, disease & insect guides</p>' +
            "              </div>" +
            '               <div class="cre-groevag-card review cre-t-5-review-slider-5-last swiper-slide">' +
            '                  <div><div class="cre-img"><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T81.3/plant-icon81.png" alt="" class="cre-ecology"></div> <p class="cre-card-copy"><strong> Every plant you’ll ever need  </strong><br> for a thriving garden</p></div>' +
            "              </div>" +
            '               <div class="cre-groevag-card reviewslider cre-t-6-review-slider-6-last swiper-slide">' +
            '                  <div><div class="cre-img"><img src="https://api.feefo.com/api/logo?merchantidentifier=growing-interactive" alt="" class="cre-ecology"></div> </div>' +
            "              </div>" +
            "          </div>" +
            "      </div>" +
            "  </div>" +
            "</div>";


        function creUspTooltipHide(bmswiper) {
            document.querySelectorAll(".cre-groevag-card.swiper-slide").forEach(function (item) {
                item.classList.remove("cre-t-81-usp-active");
                bmswiper.autoplay.start();
            });
            document.querySelector(".cre-growveg-mobile-wrapper").classList = "cre-growveg-mobile-wrapper";
        }
        waitForElement(".CRE-navStickyItem p", function () {
            setTimeout(function () {
                var sections = [
                    document.querySelector('#hero-wrapper'),
                    document.querySelector('#perfectPlan'),
                    document.querySelector('#personalized-calendar'),
                    document.querySelector('#maximizeharvest')
                ];
                if (window.innerWidth > 1023) {
                    var navItems = document.querySelectorAll('.Cre-T-81-StickyNav .CRE-navStickyItem p');

                    var addActiveClass = () => {
                        var index = sections.length;

                        while (--index && window.scrollY + 100 < sections[index].offsetTop) { }

                        // Remove active class from all nav items
                        navItems.forEach((item) => item.classList.remove('Scrollactive'));

                        // Add active class only if the section is in the viewport
                        if (index < sections.length && window.scrollY + window.innerHeight > sections[index].offsetTop) {
                            navItems[index].classList.add('Scrollactive');
                        }
                    };

                    addActiveClass();
                    window.addEventListener('scroll', addActiveClass);
                } else {
                    var navItems = document.querySelectorAll('.Cre-StickyNav-mobile .CRE-navStickyItem p');

                    var addActiveClass = () => {
                        var index = sections.length;

                        while (--index && window.scrollY + 100 < sections[index].offsetTop) { }

                        // Remove active class from all nav items
                        navItems.forEach((item) => item.classList.remove('Scrollactive'));

                        // Add active class only if the section is in the viewport
                        if (index < sections.length && window.scrollY + window.innerHeight > sections[index].offsetTop) {
                            navItems[index].classList.add('Scrollactive');
                            navItems[index].scrollIntoView({ behavior: 'smooth', inline: 'center' });
                        }
                    };

                    addActiveClass();
                    window.addEventListener('scroll', addActiveClass);
                }
            }, 2000)


        }, 50, 15000)

        function initTwo() {

            waitForElement(
                ".header-upper-pane .header-upper",
                function () {
                    if (!document.querySelector(".cre-forDesktop")) {
                        document.querySelector(".header-upper-pane .header-upper").insertAdjacentHTML("afterend", cre_growveg_desktop);
                    }
                    if (!document.querySelector(".cre-forMobile")) {
                        document.querySelector("#content-container").insertAdjacentHTML("afterbegin", cre_growveg_mobile);
                    }
                },
                50,
                15000
            );

            waitForSwiper(function () {
                var bmswiper = new Swiper(".cre-growveg.cre-forMobile .swiper-container", {
                    // Optional parameters
                    direction: "horizontal",
                    spaceBetween: 10,
                    slidesPerView: 3,
                    roundLengths: true,

                    // loop: true,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                            slidesOffsetBefore: 0,
                        },
                        500: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                            slidesOffsetBefore: 0,
                        },
                        600: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                            slidesOffsetBefore: 0,
                        },
                        800: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                            slidesOffsetBefore: 0,
                        },
                        1023: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                            slidesOffsetBefore: 0,
                        },
                    },
                });

                bmswiper.on("slideChange", function () {
                    document.querySelectorAll(".cre-groevag-card.swiper-slide").forEach(function (item) {
                        item.classList.remove("cre-t-81-usp-active");
                        bmswiper.autoplay.start();
                    });
                    document.querySelector(".cre-growveg-mobile-wrapper").classList = "cre-growveg-mobile-wrapper";
                });

                // desktop usp 1
                live(".cre-groevag-card .cre-t-81-usp-content-1-main .cre-t-81-usp-link", "click", function () {
                    bmScroll(".cre-t-5-draw-wrapper", 100);
                });
                live(".cre-groevag-card .cre-t-81-usp-content1-wrapper .cre-t-81-usp-button", "click", function () {
                    bmScroll(".cre-t-5-impressive-wrapper", 100);
                });
                // mobile usp 1
                live(".cre-growveg-mobile-wrapper .cre-t-81-usp-content-1-main .cre-t-81-usp-link", "click", function () {
                    bmScroll(".cre-t-5-draw-wrapper", 180);
                    creUspTooltipHide(bmswiper);
                });
                live(".cre-growveg-mobile-wrapper .cre-t-81-usp-content1-wrapper .cre-t-81-usp-button", "click", function () {
                    bmScroll(".cre-t-5-impressive-wrapper", 180);
                    creUspTooltipHide(bmswiper);
                });
                // desktop usp 2
                live(".cre-groevag-card .cre-t-81-usp-content2-wrapper .cre-t-81-usp-paragraph-button", "click", function () {
                    bmScroll("#personalized-calendar", 100);
                });
                // mobile usp 2
                live(".cre-growveg-mobile-wrapper .cre-t-81-usp-content2-wrapper .cre-t-81-usp-paragraph-button", "click", function () {
                    scrollToEl("#personalized-calendar")
                    creUspTooltipHide(bmswiper);
                });

                // desktop usp 3
                live(".cre-groevag-card .cre-t-81-usp-content3-wrapper .cre-t-81-usp-paragraph-button", "click", function () {
                    if (document.querySelector(".intercom-lightweight-app") || document.querySelector("#intercom-container .intercom-app")) {
                        window.Intercom("show");
                    }
                });
                // mobile usp 3
                live(".cre-growveg-mobile-wrapper .cre-t-81-usp-content3-wrapper .cre-t-81-usp-paragraph-button", "click", function () {
                    if (document.querySelector(".intercom-lightweight-app") || document.querySelector("#intercom-container .intercom-app")) {
                        window.Intercom("show");
                    }
                    creUspTooltipHide(bmswiper);
                });

                document.querySelector("body").addEventListener("click", function (e) {
                    if (!e.target.closest(".cre-growveg-mobile-wrapper")) {
                        // console.log(e.target);
                        document.querySelectorAll(".cre-groevag-card.swiper-slide").forEach(function (item) {
                            item.classList.remove("cre-t-81-usp-active");
                            bmswiper.autoplay.start();
                        });
                        document.querySelector(".cre-growveg-mobile-wrapper").classList = "cre-growveg-mobile-wrapper";
                    }
                });

                live(".cre-groevag-card.swiper-slide", "click", function () {
                    if (!this.classList.contains("cre-t-81-usp-active")) {
                        bmswiper.autoplay.stop();
                        if (this.classList.contains("garden")) {
                            document.querySelector(".cre-growveg-mobile-wrapper").classList = "cre-growveg-mobile-wrapper garden";
                            this.classList.add("cre-t-81-usp-active");
                        }
                        if (this.classList.contains("climate")) {
                            document.querySelector(".cre-growveg-mobile-wrapper").classList = "cre-growveg-mobile-wrapper climate";
                            this.classList.add("cre-t-81-usp-active");
                        }
                        if (this.classList.contains("live-support")) {
                            document.querySelector(".cre-growveg-mobile-wrapper").classList = "cre-growveg-mobile-wrapper live-support";
                            this.classList.add("cre-t-81-usp-active");
                        }
                        if (this.classList.contains("insect")) {
                            document.querySelector(".cre-growveg-mobile-wrapper").classList = "cre-growveg-mobile-wrapper insect";
                            this.classList.add("cre-t-81-usp-active");
                        }
                        if (this.classList.contains("review")) {
                            document.querySelector(".cre-growveg-mobile-wrapper").classList = "cre-growveg-mobile-wrapper review";
                            this.classList.add("cre-t-81-usp-active");
                        }
                        if (this.classList.contains("reviewslider")) {
                            document.querySelector(".cre-growveg-mobile-wrapper").classList = "cre-growveg-mobile-wrapper reviewslider";
                            this.classList.add("cre-t-81-usp-active");
                        }
                    } else {
                        this.classList.remove("cre-t-81-usp-active");
                        document.querySelector(".cre-growveg-mobile-wrapper").classList = "cre-growveg-mobile-wrapper";
                        bmswiper.autoplay.start();
                    }
                });

            });

            window.dispatchEvent(new Event("resize"));
            stickyButton();



        }

        function waitForVimeo(trigger) {
            var interval = setInterval(function () {
                if (window.Vimeo) {
                    clearInterval(interval);
                    trigger();
                }
            }, 50);
            setTimeout(function () {
                clearInterval(interval);
            }, 15000);
        }

        var popupHtml =
            "" +
            '  <div class="cre-t-05-overlay"></div>' +
            '  <div class="cre-t-05-popup">' +
            '   <div class="cre-t-05-main-content">' +
            '      <div class="cre-t-05-popupcontent">' +
            // '    <span class="cre-t-05-cross"><img src="https://bm-test-dev.s3.us-east-2.amazonaws.com/ConversionRateExpert/Mindful/Test-14/cross-img.png" alt=""></span>' +
            "</div>" +
            "  </div>" +
            "  </div>";

        var harvest =
            "" +
            '  <div class="cre-t-5-new-section-harvest-wrapper">' +
            '      <div class="cre-t-5-try-harvest-container">' +
            '          <div class="cre-t-5-harvest-main">' +
            '              <h1 class="cre-t-5-try-harvest-header"><span class="cre-t-5-try-harvest-header-border">See how you can' +
            "            have your most bountiful harvest ever</span></h1>" +
            '              <p class="cre-t-5-harvest-sub-text"><span>' +
            "            with the Garden Planner" +
            "          </span></p>" +
            "  " +
            "          </div>" +
            '          <div class="cre-t-5-harvest-img-section"> <img class="cre-newPlayBtn" src="https://cdn-3.convertexperiments.com/uf/10007679/10007271/1703674334youtube_1.png"><img class="harvest-img-section" src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GrowVeg/T+51/bg+image.png">' +
            "          </div>" +
            "      </div>" +
            "  </div>";

        function onVimeoPlayerAPIReady() {
            document.querySelector("body").classList.add("bmhide");
            document.querySelector("body").insertAdjacentHTML("afterbegin", popupHtml);

            var htmlStringIframe =
                '<div class="croxx">X</div><iframe class="creVideo-05" src="https://player.vimeo.com/video/891419948?h=c2d5f53448&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:relative;width:100%;min-height:400px;" title="Garden Planner Introduction"></iframe>';

            if (!document.querySelector(".creVideo-05")) {
                document.querySelector(".cre-t-05-popupcontent").insertAdjacentHTML("afterbegin", htmlStringIframe);
            }

            waitForElement(
                ".cre-t-5-harvest-img-section",
                function () {
                    if (!document.querySelector(".creVideo-06")) {
                        document
                            .querySelector(".cre-t-5-harvest-img-section")
                            .insertAdjacentHTML(
                                "afterbegin",
                                '<iframe class="creVideo-06" src="https://player.vimeo.com/video/891419948?h=c2d5f53448&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:relative;width:100%;min-height:400px;" title="Garden Planner Introduction"></iframe>'
                            );
                    }
                },
                50,
                25000
            );
        }
        function vimeoScript() {
            // <script src="https://player.vimeo.com/api/player.js"></script>
            var scriptOne = document.createElement("script");
            scriptOne.src = "https://player.vimeo.com/api/player.js";
            document.querySelector("head").appendChild(scriptOne);
        }

        vimeoScript();

        waitForElement("#page-header", initTwo, 50, 25000);
        waitForElement("#aspnetForm", init, 50, 25000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();
