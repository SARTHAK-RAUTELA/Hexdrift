(function () {
	try {
		/* main variables */
		var debug = 1;
		var variation_name = "imageline-17";

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
					}, 50);
					setTimeout(function () {
						clearInterval(interval);
					}, 15000);
				},
			};
			return function (selector) {
				return new bm(selector);
			};
		});
		// Payment section html-----------------
		var Payment = `<div class="cre_17_gateway">
    <div
        class="wp-block-group has-column-gap-2-px is-vertical is-layout-flex wp-container-core-group-is-layout-13 wp-block-group-is-layout-flex cre_17_gateway_1">
        <h2 class="wp-block-heading has-fw-medium has-size-0-font-size">Buy now, pay later</h2>
        <p
            class="has-size--1-font-size has-medium-grey-color has-text-color has-link-color wp-elements-8ba0eb68fe3d18761719a58a8cc688cf">
            Choose from options like instant payment, four interest-free payments, delayed payment in 30 days, and other
            staggered payment plans.</p>
    </div>
    <div class="cre_17_hr"></div>
    <div
        class="wp-block-group has-column-gap-10-px is-vertical is-content-justification-center is-layout-flex wp-container-core-group-is-layout-17 wp-block-group-is-layout-flex cre_17_gateway_2">
        <figure class="wp-block-image size-full has-ml-auto has-mr-auto has-max-w-87-pc">
            <picture loading="lazy" decoding="async" class="wp-image-7385">
                <source type="image/webp" srcset="/static/assets/payment-providers-1.png.566777f.webp 901w"
                    sizes="(max-width: 901px) 100vw, 901px"><img loading="lazy" decoding="async" width="901" height="65"
                    src="/static/assets/payment-providers-1.8823ae7.png" alt=""
                    srcset="/static/assets/payment-providers-1.8823ae7.png 901w, /static/assets/payment-providers-1-300x22.eb0e949.png 300w, /static/assets/payment-providers-1-768x55.a92ae38.png 768w"
                    sizes="(max-width: 901px) 100vw, 901px">
            </picture>
        </figure>
        <p
            class="has-size--1-font-size has-ml-auto has-mr-auto has-medium-grey-color has-text-color has-link-color wp-elements-b165dc5de4228fa6bfadeef4c4ce4584">
            Some payment plans might only be available in certain regions.</p>
    </div>
    <div class="cre_17_hr"></div>
    <div
        class="wp-block-group has-column-gap-2-px is-vertical is-layout-flex wp-container-core-group-is-layout-14 wp-block-group-is-layout-flex cre_17_gateway_3">
        <h2 class="wp-block-heading has-fw-medium has-size-0-font-size">30+ Payment Providers</h2>
        <p
            class="has-size--1-font-size has-medium-grey-color has-text-color has-link-color wp-elements-2d79331d44747e7776f7fd00f357342e">
            We accept payment from over 30 of the most popular online payment merchants.</p>
    </div>
</div>


<div class="sound-img">

	<figure class="wp-block-image size-full has-ml-auto has-mr-auto has-max-w-90-pc has-max-w-1600-px">
	<picture loading="lazy" decoding="async" class="wp-image-6768">
	<source type="image/webp" srcset="/static/assets/fls-gui-2342.png.acba39f.webp 1700w, /static/assets/fls-gui-2342-1536x360.png.8bfee22.webp 1536w" sizes="(max-width: 1700px) 100vw, 1700px"><img loading="lazy" decoding="async" width="1700" height="398" src="/static/assets/fls-gui-2342.a1298d0.png" alt="" srcset="/static/assets/fls-gui-2342.a1298d0.png 1700w, /static/assets/fls-gui-2342-300x70.c04e619.png 300w, /static/assets/fls-gui-2342-1024x240.51f5bae.png 1024w, /static/assets/fls-gui-2342-768x180.a2ae8c8.png 768w, /static/assets/fls-gui-2342-1536x360.dfaff24.png 1536w" sizes="(max-width: 1700px) 100vw, 1700px"></picture>
	</figure>

</div>


		</div>`;

		var helper = _$();

		// function for generating the table with dynamic price-------------
		function generateTableWithDynamicPrice(fruityEdition, producerEdition, signatureBundle, allPluginsBundle) {
			var tablesection = `<div class="Cre-ImageLineSection-t-17">
    <div
        class="wp-block-group has-column-gap-30-px is-vertical is-content-justification-center is-layout-flex wp-container-core-group-is-layout-40 wp-block-group-is-layout-flex cooseed-ition">
        <div
            class="wp-block-group has-column-gap-14-px is-vertical is-content-justification-center is-layout-flex wp-container-core-group-is-layout-35 wp-block-group-is-layout-flex">
            <div
                class="wp-block-group has-flex-justify-content-center has-flex-align-items-center is-horizontal is-content-justification-center is-nowrap is-layout-flex wp-container-core-group-is-layout-34 wp-block-group-is-layout-flex">
                <section data-block_76e69e9c3d9465b2bd64a5582959fe8f=""
                    class="icon has-margin-right-5 has-mr-10-px alignleft block-icon block-icon-chrome_reader_mode">
                    <div class="block-icon--inner">
                        <div class="block-icon--icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    d="M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14c0 .55-.45 1-1 1h-8V6h8c.55 0 1 .45 1 1v11zm-1.75-8.5h-5.5c-.41 0-.75.34-.75.75s.34.75.75.75h5.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zm0 2.5h-5.5c-.41 0-.75.34-.75.75s.34.75.75.75h5.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zm0 2.5h-5.5c-.41 0-.75.34-.75.75s.34.75.75.75h5.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </section>
                <p class="has-ff-century-gothic has-fw-semibold has-decoration-uppercase">CHOOSE AN EDITION</p>
            </div>
            <h2
                class="wp-block-heading has-text-align-center has-ff-open-sans-semicondensed has-fw-semibold has-size-6-font-size has-max-w-750-px">
                Buy FL Studio</h2>
        </div>
        <div data-product-id="31010" data-block_8f0b293f4d8fc45a0c0bda86d4a11783=""
            id="block_8f0b293f4d8fc45a0c0bda86d4a11783" class="price align price">
            <p class="has-text-align-center has-size-1-font-size has-max-w-700-px">Buying a license will let you instantly
                unlock FL Studio and make you our first priority on new updates, support and other perks. Thank you for
                becoming a supporter of FL Studio.</p>
        </div>
        <div
            class="wp-block-group has-size-0-font-size has-column-gap-14-px has-very-dark-grey-color has-text-color has-link-color wp-elements-bd6af4e8d0852310e924026cd6905099 is-content-justification-center is-layout-flex wp-container-core-group-is-layout-39 wp-block-group-is-layout-flex">

             <div
                class="wp-block-group has-column-gap-6-px is-nowrap is-layout-flex wp-container-core-group-is-layout-36 wp-block-group-is-layout-flex">
                <section data-block_64cfd3b8d0fa92d55d21ee15ae77cad8="" class="icon align block-icon block-icon-check">
                    <div class="block-icon--inner">
                        <div class="block-icon--icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41L9 16.17z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </section>
                <p class="has-decoration-no-wrap">Re-open projects from trial</p>
            </div>
            <div
                class="wp-block-group has-column-gap-6-px is-nowrap is-layout-flex wp-container-core-group-is-layout-36 wp-block-group-is-layout-flex">
                <section data-block_64cfd3b8d0fa92d55d21ee15ae77cad8="" class="icon align block-icon block-icon-check">
                    <div class="block-icon--inner">
                        <div class="block-icon--icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41L9 16.17z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </section>
                <p class="has-decoration-no-wrap">Lifetime Free Updates</p>
            </div>
            <div
                class="wp-block-group has-column-gap-6-px is-nowrap is-layout-flex wp-container-core-group-is-layout-37 wp-block-group-is-layout-flex">
                <section data-block_64cfd3b8d0fa92d55d21ee15ae77cad8="" class="icon align block-icon block-icon-check">
                    <div class="block-icon--inner">
                        <div class="block-icon--icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41L9 16.17z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </section>
                <p class="has-decoration-no-wrap">Buy now, Pay later</p>
            </div>
            <div
                class="wp-block-group has-column-gap-6-px is-nowrap is-layout-flex wp-container-core-group-is-layout-38 wp-block-group-is-layout-flex">
                <section data-block_64cfd3b8d0fa92d55d21ee15ae77cad8="" class="icon align block-icon block-icon-check">
                    <div class="block-icon--inner">
                        <div class="block-icon--icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41L9 16.17z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </section>
                <p class="has-decoration-no-wrap">Upgrade anytime</p>
            </div>
        </div>
    </div>
    
    <div data-block_e497f26f2ac9845676dfb1b2eb4d9ffc="" id="block_e497f26f2ac9845676dfb1b2eb4d9ffc"
        class="grid  has-max-w-1425-px align block-grid table-section">
        <!-- cre-Fruity-Edition -->
        <div class="cre-Fruity-Edition wp-block-group has-column-gap-20-px has-pt-25-px has-pb-25-px has-pl-25-px has-pr-25-px has-border-radius-7-px has-background is-vertical is-layout-flex wp-container-core-group-is-layout-50 wp-block-group-is-layout-flex table-box"
            style="background-color:#ffffff">
            <div
                class="wp-block-group has-column-gap-4-px is-vertical is-layout-flex wp-container-core-group-is-layout-41 wp-block-group-is-layout-flex">
                <p class="has-ff-century-gothic has-fw-semibold has-decoration-uppercase has-size-0-font-size">THE BASICS
                </p>
                <h2 class="wp-block-heading has-fw-semibold has-ff-open-sans-semicondensed has-size-3-font-size">Fruity
                    Edition</h2>
            </div>
            <p class="has-size-0-font-size">Ideal for beginners, it offers everything you need to create your first tracks.
                Then upgrade when you’re ready to add audio recording and extra pro tools.</p>
            <div
                class="wp-block-group has-w-100-pc has-size-0-font-size has-column-gap-6-px is-vertical is-layout-flex wp-container-core-group-is-layout-47 wp-block-group-is-layout-flex">
                <div
                    class="wp-block-group has-column-gap-4-px is-nowrap is-layout-flex wp-container-core-group-is-layout-42 wp-block-group-is-layout-flex">
                    <p class="has-fw-semibold">84</p>
                    <p>instruments and effects</p>
                </div>
                <hr class="wp-block-separator has-text-color has-alpha-channel-opacity has-background wp-container-content-7"
                    style="background-color:#dddddd;color:#dddddd">
                <div
                    class="wp-block-group has-column-gap-4-px is-nowrap is-layout-flex wp-container-core-group-is-layout-43 wp-block-group-is-layout-flex">
                    <p class="has-fw-semibold">No</p>
                    <p>Stem Separation</p>
                </div>
                <hr class="wp-block-separator has-text-color has-alpha-channel-opacity has-background wp-container-content-8"
                    style="background-color:#dddddd;color:#dddddd">
                <div
                    class="wp-block-group has-column-gap-4-px is-nowrap is-layout-flex wp-container-core-group-is-layout-44 wp-block-group-is-layout-flex">
                    <p class="has-fw-semibold">No</p>
                    <p>audio Recording</p>
                </div>
                <hr class="wp-block-separator has-text-color has-alpha-channel-opacity has-background wp-container-content-9"
                    style="background-color:#dddddd;color:#dddddd">
                <div
                    class="wp-block-group has-column-gap-4-px is-nowrap is-layout-flex wp-container-core-group-is-layout-45 wp-block-group-is-layout-flex">
                    <p class="has-fw-semibold">8</p>
                    <p>Audio Clips</p>
                </div>
                <hr class="wp-block-separator has-text-color has-alpha-channel-opacity has-background wp-container-content-10"
                    style="background-color:#dddddd;color:#dddddd">
                <div
                    class="wp-block-group has-column-gap-4-px is-nowrap is-layout-flex wp-container-core-group-is-layout-46 wp-block-group-is-layout-flex">
                    <p class="has-fw-semibold">Limited</p>
                    <p>Playlist features</p>
                </div>
            </div>
            <div
                class="wp-block-group has-w-100-pc has-pt-10-px has-pb-10-px has-border-radius-5-px has-light-gray-background-color has-background">
                <div class="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
                    <div
                        class="wp-block-group has-size-0-font-size has-column-gap-6-px is-content-justification-center is-nowrap is-layout-flex wp-container-core-group-is-layout-48 wp-block-group-is-layout-flex">
                        <section data-block_ddb07f68c9140c58a6011572d266cb8a=""
                            class="icon align block-icon block-icon-redeem">
                            <div class="block-icon--inner">
                                <div class="block-icon--icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path
                                            d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm10 15H5c-.55 0-1-.45-1-1v-1h16v1c0 .55-.45 1-1 1zm1-5H4V9c0-.55.45-1 1-1h4.08L7.6 10.02a.995.995 0 0 0 .22 1.4c.44.32 1.07.22 1.39-.22L12 7.4l2.79 3.8c.32.44.95.54 1.39.22.45-.32.55-.95.22-1.4L14.92 8H19c.55 0 1 .45 1 1v5z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </section>
                        <p class="has-size-0-font-size">Get one free month of FL&nbsp;Cloud</p>
                    </div>
                </div>
            </div>
           
            <div data-product-id="31010" data-block_68360a1a0c78fd9b248eb39e50858408=""
                id="block_68360a1a0c78fd9b248eb39e50858408"
                class="price is-hidden-owns-edition has-flex-direction-column has-column-gap-10-px has-flex-align-items-start has-mt-auto align price">
                <p class="has-fw-semibold has-size-2-font-size"><span class="cre-priceElement"
                        data-price-current="">${fruityEdition}</span></p>
                <div class="wp-block-buttons has-w-100-pc is-layout-flex wp-block-buttons-is-layout-flex">
                    <div
                        class="wp-block-button has-w-100-pc is-style-arrow-circled-right-after is-style-full-width is-style-medium-border-radius has-size-1-font-size has-fw-medium">
                        <a class="wp-block-button__link has-very-dark-grey-color has-text-color has-background has-link-color wp-element-button"
                            href="https://support.image-line.com/jshop/shop_flcloud2.php?ord=31010"
                            style="background-color:#e9e9e9">Buy now</a>
                    </div>
                </div>
            </div>
            <p
                class="is-visible-owns-fruity has-mt-auto has-fw-regular has-size-0-font-size has-very-dark-grey-color has-text-color has-link-color wp-elements-25c751aab692a96e30c14d5313769ec4">
                You own this Edition</p>
        </div>
        <!-- cre-Producer-Edition -->
        <div class="cre-Producer-Edition wp-block-group has-column-gap-20-px has-border-radius-7-px has-pt-25-px has-pb-25-px has-pl-25-px has-pr-25-px has-background is-vertical is-layout-flex wp-container-core-group-is-layout-60 wp-block-group-is-layout-flex table-box"
            style="background-color:#fff1ea">
            <div
                class="wp-block-group has-column-gap-4-px is-vertical is-layout-flex wp-container-core-group-is-layout-51 wp-block-group-is-layout-flex">
                <p class="has-ff-century-gothic has-fw-semibold has-decoration-uppercase has-size-0-font-size">The
                    Producer’s Choice</p>
                <h2 class="wp-block-heading has-fw-semibold has-ff-open-sans-semicondensed has-size-3-font-size">Producer
                    Edition</h2>
            </div>
            <p class="has-size-0-font-size">Our most popular Edition. Designed for those who seek advanced music production
                capabilities, including Stem Separation and audio recording.</p>
            <div
                class="wp-block-group has-w-100-pc has-size-0-font-size has-column-gap-6-px is-vertical is-layout-flex wp-container-core-group-is-layout-57 wp-block-group-is-layout-flex">
                <div
                    class="wp-block-group has-column-gap-4-px is-nowrap is-layout-flex wp-container-core-group-is-layout-52 wp-block-group-is-layout-flex">
                    <p class="has-fw-semibold">94</p>
                    <p>instruments and effects</p>
                </div>
                <hr class="wp-block-separator has-text-color has-alpha-channel-opacity has-background wp-container-content-11"
                    style="background-color:#dddddd;color:#dddddd">
                <div
                    class="wp-block-group has-column-gap-4-px is-nowrap is-layout-flex wp-container-core-group-is-layout-53 wp-block-group-is-layout-flex">
                    <p class="has-fw-semibold">Includes</p>
                    <p>Stem Separation</p>
                </div>
                <hr class="wp-block-separator has-text-color has-alpha-channel-opacity has-background wp-container-content-12"
                    style="background-color:#dddddd;color:#dddddd">
                <div
                    class="wp-block-group has-column-gap-4-px is-nowrap is-layout-flex wp-container-core-group-is-layout-54 wp-block-group-is-layout-flex">
                    <p class="has-fw-semibold">Includes</p>
                    <p>audio recording</p>
                </div>
                <hr class="wp-block-separator has-text-color has-alpha-channel-opacity has-background wp-container-content-13"
                    style="background-color:#dddddd;color:#dddddd">
                <div
                    class="wp-block-group has-column-gap-4-px is-nowrap is-layout-flex wp-container-core-group-is-layout-55 wp-block-group-is-layout-flex">
                    <p class="has-fw-semibold">Unlimited</p>
                    <p>Audio Clips</p>
                </div>
                <hr class="wp-block-separator has-text-color has-alpha-channel-opacity has-background wp-container-content-14"
                    style="background-color:#dddddd;color:#dddddd">
                <div
                    class="wp-block-group has-column-gap-4-px is-nowrap is-layout-flex wp-container-core-group-is-layout-56 wp-block-group-is-layout-flex">
                    <p class="has-fw-semibold">Full</p>
                    <p>Playlist features</p>
                </div>
            </div>
            <div class="wp-block-group has-w-100-pc has-pt-10-px has-pb-10-px has-border-radius-5-px has-background"
                style="background-color:#f5e7e0">
                <div class="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
                    <div
                        class="wp-block-group has-size-0-font-size has-column-gap-6-px is-content-justification-center is-nowrap is-layout-flex wp-container-core-group-is-layout-58 wp-block-group-is-layout-flex">
                        <section data-block_ddb07f68c9140c58a6011572d266cb8a=""
                            class="icon align block-icon block-icon-redeem">
                            <div class="block-icon--inner">
                                <div class="block-icon--icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path
                                            d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm10 15H5c-.55 0-1-.45-1-1v-1h16v1c0 .55-.45 1-1 1zm1-5H4V9c0-.55.45-1 1-1h4.08L7.6 10.02a.995.995 0 0 0 .22 1.4c.44.32 1.07.22 1.39-.22L12 7.4l2.79 3.8c.32.44.95.54 1.39.22.45-.32.55-.95.22-1.4L14.92 8H19c.55 0 1 .45 1 1v5z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </section>
                        <p class="has-size-0-font-size">Get one free month of FL&nbsp;Cloud</p>
                    </div>
                </div>
            </div>
            <div data-product-id="31020" data-block_ccb07e0a08f5dc6a7572fb3268e396cb=""
                id="block_ccb07e0a08f5dc6a7572fb3268e396cb"
                class="price is-hidden-owns-edition has-flex-direction-column has-column-gap-10-px has-flex-align-items-start has-mt-auto align price">
                <p class="has-fw-semibold has-size-2-font-size"><span class="cre-priceElement"
                        data-price-current="">${producerEdition}</span></p>
                <div class="wp-block-buttons has-w-100-pc is-layout-flex wp-block-buttons-is-layout-flex">
                    <div
                        class="wp-block-button has-w-100-pc is-style-arrow-circled-right-after is-style-full-width is-style-medium-border-radius has-size-1-font-size has-fw-medium">
                        <a class="wp-block-button__link wp-element-button"
                            href="https://support.image-line.com/jshop/shop_flcloud2.php?ord=31020">Buy now</a>
                    </div>
                </div>
            </div>
            <div data-product-id="31040" data-block_53fffee5f04ef56151ab5ba8c0d4d91f=""
                id="block_53fffee5f04ef56151ab5ba8c0d4d91f"
                class="price is-visible-owns-fruity has-flex-direction-column has-column-gap-10-px has-flex-align-items-start has-mt-auto align price">
                <p class="has-fw-semibold has-size-2-font-size"><span class="cre-priceElement"
                        data-price-current="">₹6,000</span></p>
                <div class="wp-block-buttons has-w-100-pc is-layout-flex wp-block-buttons-is-layout-flex">
                    <div
                        class="wp-block-button has-w-100-pc is-style-arrow-circled-right-after is-style-full-width is-style-medium-border-radius has-size-1-font-size has-fw-medium">
                        <a class="wp-block-button__link wp-element-button"
                            href="https://support.image-line.com/jshop/shop_flcloud2.php?ord=31040">Upgrade to this
                            Edition</a>
                    </div>
                </div>
            </div>
            <p
                class="has-mt-auto has-fw-regular has-size-0-font-size is-visible-owns-producer has-very-dark-grey-color has-text-color has-link-color wp-elements-4ee48e1d8d299d5cb23632c8e55d9749">
                You own this Edition</p>
        </div>
        <div class="cre-Signature-Bundle wp-block-group has-column-gap-20-px has-pt-25-px has-pb-25-px has-pl-25-px has-pr-25-px has-border-radius-7-px has-background is-vertical is-layout-flex wp-container-core-group-is-layout-70 wp-block-group-is-layout-flex table-box"
            style="background-color:#ffffff">
            <div
                class="wp-block-group has-column-gap-4-px is-vertical is-layout-flex wp-container-core-group-is-layout-61 wp-block-group-is-layout-flex">
                <p class="has-ff-century-gothic has-fw-semibold has-decoration-uppercase has-size-0-font-size">FOR
                    PROFESSIONALS</p>
                <h2 class="wp-block-heading has-fw-semibold has-ff-open-sans-semicondensed has-size-3-font-size">Signature
                    Bundle</h2>
            </div>
            <p class="has-size-0-font-size">Signature bundle adds iconic, creative, genre-defining tools like Gross Beat,
                plus more effects and instruments.</p>
            <div
                class="wp-block-group has-w-100-pc has-size-0-font-size has-column-gap-6-px is-vertical is-layout-flex wp-container-core-group-is-layout-67 wp-block-group-is-layout-flex">
                <div
                    class="wp-block-group has-column-gap-4-px is-nowrap is-layout-flex wp-container-core-group-is-layout-62 wp-block-group-is-layout-flex">
                    <p class="has-fw-semibold">103</p>
                    <p>instruments, effects, and editors</p>
                </div>
                <hr class="wp-block-separator has-text-color has-alpha-channel-opacity has-background wp-container-content-15"
                    style="background-color:#dddddd;color:#dddddd">
                <div
                    class="wp-block-group has-column-gap-4-px is-nowrap is-layout-flex wp-container-core-group-is-layout-63 wp-block-group-is-layout-flex">
                    <p class="has-fw-semibold">Includes</p>
                    <p>Stem Separation</p>
                </div>
                <hr class="wp-block-separator has-text-color has-alpha-channel-opacity has-background wp-container-content-16"
                    style="background-color:#dddddd;color:#dddddd">
                <div
                    class="wp-block-group has-column-gap-4-px is-nowrap is-layout-flex wp-container-core-group-is-layout-64 wp-block-group-is-layout-flex">
                    <p class="has-fw-semibold">Includes</p>
                    <p>audio recording</p>
                </div>
                <hr class="wp-block-separator has-text-color has-alpha-channel-opacity has-background wp-container-content-17"
                    style="background-color:#dddddd;color:#dddddd">
                <div
                    class="wp-block-group has-column-gap-4-px is-nowrap is-layout-flex wp-container-core-group-is-layout-65 wp-block-group-is-layout-flex">
                    <p class="has-fw-semibold">Unlimited</p>
                    <p>Audio Clips</p>
                </div>
                <hr class="wp-block-separator has-text-color has-alpha-channel-opacity has-background wp-container-content-18"
                    style="background-color:#dddddd;color:#dddddd">
                <div
                    class="wp-block-group has-column-gap-4-px is-nowrap is-layout-flex wp-container-core-group-is-layout-66 wp-block-group-is-layout-flex">
                    <p class="has-fw-semibold">Full</p>
                    <p>Playlist features</p>
                </div>
            </div>
            <div
                class="wp-block-group has-w-100-pc has-pt-10-px has-pb-10-px has-border-radius-5-px has-light-gray-background-color has-background">
                <div class="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
                    <div
                        class="wp-block-group has-size-0-font-size has-column-gap-6-px is-content-justification-center is-nowrap is-layout-flex wp-container-core-group-is-layout-68 wp-block-group-is-layout-flex">
                        <section data-block_ddb07f68c9140c58a6011572d266cb8a=""
                            class="icon align block-icon block-icon-redeem">
                            <div class="block-icon--inner">
                                <div class="block-icon--icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path
                                            d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm10 15H5c-.55 0-1-.45-1-1v-1h16v1c0 .55-.45 1-1 1zm1-5H4V9c0-.55.45-1 1-1h4.08L7.6 10.02a.995.995 0 0 0 .22 1.4c.44.32 1.07.22 1.39-.22L12 7.4l2.79 3.8c.32.44.95.54 1.39.22.45-.32.55-.95.22-1.4L14.92 8H19c.55 0 1 .45 1 1v5z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </section>
                        <p class="has-size-0-font-size">Get one free month of FL&nbsp;Cloud</p>
                    </div>
                </div>
            </div>
            <div data-product-id="31035" data-block_5ec0340051ff80a1e40299d2554b5290=""
                id="block_5ec0340051ff80a1e40299d2554b5290"
                class="price is-hidden-owns-edition has-flex-direction-column has-column-gap-10-px has-flex-align-items-start has-mt-auto align price">
                <p class="has-fw-semibold has-size-2-font-size"><span class="cre-priceElement"
                        data-price-current="">${signatureBundle}</span></p>
                <div class="wp-block-buttons has-w-100-pc is-layout-flex wp-block-buttons-is-layout-flex">
                    <div
                        class="wp-block-button has-w-100-pc is-style-arrow-circled-right-after is-style-full-width is-style-medium-border-radius has-size-1-font-size has-fw-medium">
                        <a class="wp-block-button__link has-very-dark-grey-color has-text-color has-background has-link-color wp-element-button"
                            href="https://support.image-line.com/jshop/shop_flcloud2.php?ord=31035"
                            style="background-color:#e9e9e9">Buy now</a>
                    </div>
                </div>
            </div>
            <div data-product-id="31037" data-block_664696ed3cdc9acb8b8318973476dfef=""
                id="block_664696ed3cdc9acb8b8318973476dfef"
                class="price is-visible-owns-fruity has-flex-direction-column has-column-gap-10-px has-flex-align-items-start has-mt-auto align price">
                <p class="has-fw-semibold has-size-2-font-size"><span class="cre-priceElement"
                        data-price-current="">₹10,500</span></p>
                <div class="wp-block-buttons has-w-100-pc is-layout-flex wp-block-buttons-is-layout-flex">
                    <div
                        class="wp-block-button has-w-100-pc is-style-arrow-circled-right-after is-style-full-width is-style-medium-border-radius has-size-1-font-size has-fw-medium">
                        <a class="wp-block-button__link has-very-dark-grey-color has-text-color has-background has-link-color wp-element-button"
                            href="https://support.image-line.com/jshop/shop_flcloud2.php?ord=31037"
                            style="background-color:#e9e9e9">Upgrade to this Edition</a>
                    </div>
                </div>
            </div>
            <div data-product-id="31036" data-block_206dec2ede3bd06f7f5e2c5b88e9a6e0=""
                id="block_206dec2ede3bd06f7f5e2c5b88e9a6e0"
                class="price is-visible-owns-producer has-flex-direction-column has-column-gap-10-px has-flex-align-items-start has-mt-auto align price">
                <p class="has-fw-semibold has-size-2-font-size"><span class="cre-priceElement"
                        data-price-current="">₹4,500</span></p>
                <div class="wp-block-buttons has-w-100-pc is-layout-flex wp-block-buttons-is-layout-flex">
                    <div
                        class="wp-block-button has-w-100-pc is-style-arrow-circled-right-after is-style-full-width is-style-medium-border-radius has-size-1-font-size has-fw-medium">
                        <a class="wp-block-button__link has-very-dark-grey-color has-text-color has-background has-link-color wp-element-button"
                            href="https://support.image-line.com/jshop/shop_flcloud2.php?ord=31036"
                            style="background-color:#e9e9e9">Upgrade to this Edition</a>
                    </div>
                </div>
            </div>
            <p
                class="has-mt-auto has-fw-regular has-size-0-font-size is-visible-owns-signature has-very-dark-grey-color has-text-color has-link-color wp-elements-d35700d8f47dae87e1c6e35ab3118c23">
                You own this Edition</p>
        </div>
        <div class="cre-All-Plugins-Edition wp-block-group has-column-gap-20-px has-pt-25-px has-pb-25-px has-pl-25-px has-pr-25-px has-border-radius-7-px has-background is-vertical is-layout-flex wp-container-core-group-is-layout-80 wp-block-group-is-layout-flex table-box"
            style="background-color:#ffffff">
            <div
                class="wp-block-group has-column-gap-4-px is-vertical is-layout-flex wp-container-core-group-is-layout-71 wp-block-group-is-layout-flex">
                <p class="has-ff-century-gothic has-fw-semibold has-decoration-uppercase has-size-0-font-size">JUST
                    EVERYTHING</p>
                <h2 class="wp-block-heading has-fw-semibold has-ff-open-sans-semicondensed has-size-3-font-size">All Plugins
                    Edition</h2>
            </div>
            <p class="has-size-0-font-size">Our most complete Edition includes every single plugin and features, ideal for
                advanced, pro mixing and recording. Your gateway to greatness awaits!</p>
            <div
                class="wp-block-group has-w-100-pc has-size-0-font-size has-column-gap-6-px is-vertical is-layout-flex wp-container-core-group-is-layout-77 wp-block-group-is-layout-flex">
                <div
                    class="wp-block-group has-column-gap-4-px is-nowrap is-layout-flex wp-container-core-group-is-layout-72 wp-block-group-is-layout-flex">
                    <p class="has-fw-semibold">115</p>
                    <p>instruments, effects, and editors</p>
                </div>
                <hr class="wp-block-separator has-text-color has-alpha-channel-opacity has-background wp-container-content-19"
                    style="background-color:#dddddd;color:#dddddd">
                <div
                    class="wp-block-group has-column-gap-4-px is-nowrap is-layout-flex wp-container-core-group-is-layout-73 wp-block-group-is-layout-flex">
                    <p class="has-fw-semibold">Includes</p>
                    <p>Stem Separation</p>
                </div>
                <hr class="wp-block-separator has-text-color has-alpha-channel-opacity has-background wp-container-content-20"
                    style="background-color:#dddddd;color:#dddddd">
                <div
                    class="wp-block-group has-column-gap-4-px is-nowrap is-layout-flex wp-container-core-group-is-layout-74 wp-block-group-is-layout-flex">
                    <p class="has-fw-semibold">Includes</p>
                    <p>Audio recording</p>
                </div>
                <hr class="wp-block-separator has-text-color has-alpha-channel-opacity has-background wp-container-content-21"
                    style="background-color:#dddddd;color:#dddddd">
                <div
                    class="wp-block-group has-column-gap-4-px is-nowrap is-layout-flex wp-container-core-group-is-layout-75 wp-block-group-is-layout-flex">
                    <p class="has-fw-semibold">Unlimited</p>
                    <p>Audio Clips</p>
                </div>
                <hr class="wp-block-separator has-text-color has-alpha-channel-opacity has-background wp-container-content-22"
                    style="background-color:#dddddd;color:#dddddd">
                <div
                    class="wp-block-group has-column-gap-4-px is-nowrap is-layout-flex wp-container-core-group-is-layout-76 wp-block-group-is-layout-flex">
                    <p class="has-fw-semibold">Full</p>
                    <p>Playlist features</p>
                </div>
            </div>
            <div
                class="wp-block-group has-w-100-pc has-pt-10-px has-pb-10-px has-border-radius-5-px has-light-gray-background-color has-background">
                <div class="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
                    <div
                        class="wp-block-group has-size-0-font-size has-column-gap-6-px is-content-justification-center is-nowrap is-layout-flex wp-container-core-group-is-layout-78 wp-block-group-is-layout-flex">
                        <section data-block_ddb07f68c9140c58a6011572d266cb8a=""
                            class="icon align block-icon block-icon-redeem">
                            <div class="block-icon--inner">
                                <div class="block-icon--icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path
                                            d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm10 15H5c-.55 0-1-.45-1-1v-1h16v1c0 .55-.45 1-1 1zm1-5H4V9c0-.55.45-1 1-1h4.08L7.6 10.02a.995.995 0 0 0 .22 1.4c.44.32 1.07.22 1.39-.22L12 7.4l2.79 3.8c.32.44.95.54 1.39.22.45-.32.55-.95.22-1.4L14.92 8H19c.55 0 1 .45 1 1v5z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </section>
                        <p class="has-size-0-font-size">Get one free month of FL&nbsp;Cloud</p>
                    </div>
                </div>
            </div>
            <div data-product-id="31045" data-block_46284fabb12a9f74e90bb3f2362624bd=""
                id="block_46284fabb12a9f74e90bb3f2362624bd"
                class="price is-hidden-owns-edition has-flex-direction-column has-column-gap-10-px has-flex-align-items-start has-mt-auto align price">
                <p class="has-fw-semibold has-size-2-font-size"><span class="cre-priceElement"
                        data-price-current="">${allPluginsBundle}</span></p>
                <div class="wp-block-buttons has-w-100-pc is-layout-flex wp-block-buttons-is-layout-flex">
                    <div
                        class="wp-block-button has-w-100-pc is-style-arrow-circled-right-after is-style-full-width is-style-medium-border-radius has-size-1-font-size has-fw-medium">
                        <a class="wp-block-button__link has-very-dark-grey-color has-text-color has-background has-link-color wp-element-button"
                            href="https://support.image-line.com/jshop/shop_flcloud2.php?ord=31045"
                            style="background-color:#e9e9e9">Buy now</a>
                    </div>
                </div>
            </div>
            <div data-product-id="31047" data-block_17d5087330a24ea74eb3c4d3d78fdd91=""
                id="block_17d5087330a24ea74eb3c4d3d78fdd91"
                class="price is-visible-owns-fruity has-flex-direction-column has-column-gap-10-px has-flex-align-items-start has-mt-auto align price">
                <p class="has-fw-semibold has-size-2-font-size"><span class="cre-priceElement"
                        data-price-current="">₹21,000</span></p>
                <div class="wp-block-buttons has-w-100-pc is-layout-flex wp-block-buttons-is-layout-flex">
                    <div
                        class="wp-block-button has-w-100-pc is-style-arrow-circled-right-after is-style-full-width is-style-medium-border-radius has-size-1-font-size has-fw-medium">
                        <a class="wp-block-button__link has-very-dark-grey-color has-text-color has-background has-link-color wp-element-button"
                            href="https://support.image-line.com/jshop/shop_flcloud2.php?ord=31047"
                            style="background-color:#e9e9e9">Upgrade to this Edition</a>
                    </div>
                </div>
            </div>
            <div data-product-id="31048" data-block_e703763bf8aad6a82d5e848fc52b29e8=""
                id="block_e703763bf8aad6a82d5e848fc52b29e8"
                class="price is-visible-owns-producer has-flex-direction-column has-column-gap-10-px has-flex-align-items-start has-mt-auto align price">
                <p class="has-fw-semibold has-size-2-font-size"><span class="cre-priceElement"
                        data-price-current="">₹15,000</span></p>
                <div class="wp-block-buttons has-w-100-pc is-layout-flex wp-block-buttons-is-layout-flex">
                    <div
                        class="wp-block-button has-w-100-pc is-style-arrow-circled-right-after is-style-full-width is-style-medium-border-radius has-size-1-font-size has-fw-medium">
                        <a class="wp-block-button__link has-very-dark-grey-color has-text-color has-background has-link-color wp-element-button"
                            href="https://support.image-line.com/jshop/shop_flcloud2.php?ord=31048"
                            style="background-color:#e9e9e9">Upgrade to this Edition</a>
                    </div>
                </div>
            </div>
            <div data-product-id="31049" data-block_6e2b38386f8e565302e110fe2a9fefc5=""
                id="block_6e2b38386f8e565302e110fe2a9fefc5"
                class="price is-visible-owns-signature has-flex-direction-column has-column-gap-10-px has-flex-align-items-start has-mt-auto align price">
                <p class="has-fw-semibold has-size-2-font-size"><span class="cre-priceElement"
                        data-price-current="">₹10,500</span></p>
                <div class="wp-block-buttons has-w-100-pc is-layout-flex wp-block-buttons-is-layout-flex">
                    <div
                        class="wp-block-button has-w-100-pc is-style-arrow-circled-right-after is-style-full-width is-style-medium-border-radius has-size-1-font-size has-fw-medium">
                        <a class="wp-block-button__link has-very-dark-grey-color has-text-color has-background has-link-color wp-element-button"
                            href="https://support.image-line.com/jshop/shop_flcloud2.php?ord=31049"
                            style="background-color:#e9e9e9">Upgrade to this Edition</a>
                    </div>
                </div>
            </div>
            <p
                class="has-mt-auto has-fw-regular has-size-0-font-size is-visible-owns-all-plugins has-very-dark-grey-color has-text-color has-link-color wp-elements-6ebf88694e6ba7982b2d38b77eb75a80">
                You own this Edition</p>
        </div>
    </div>
			</div>`;

			return tablesection;
		}


		var navContent = `<div class='cre-navContent'><h2>FL&nbsp;Studio</h2> <p>Music Production Suite for Desktop</p></div>`;

		// for updating the price--- for a certaion duration----------------
		function updateProductPrice() {
			var interal17 = setInterval(function () {
				var FruityEditionPrice = document.querySelector('[data-js-product="fruity-edition"] .commercial-box__product__cell.price .current-price').innerHTML;
				// ProducerEditionPrice
				var ProducerEditionPrice = document.querySelector('[data-js-product="producer-edition"] .commercial-box__product__cell.price .current-price').innerHTML;
				// SignatureBundlePrice
				var SignatureBundlePrice = document.querySelector('[data-js-product="signature-bundle"] .commercial-box__product__cell.price .current-price').innerHTML;
				// AllPluginsEditionPrice
				var AllPluginsEditionPrice = document.querySelector('[data-js-product="all-plugins-bundle"] .commercial-box__product__cell.price .current-price').innerHTML;

				document.querySelector(".cre-Fruity-Edition .cre-priceElement").innerHTML = FruityEditionPrice;
				document.querySelector(".cre-Producer-Edition .cre-priceElement").innerHTML = ProducerEditionPrice;
				document.querySelector(".cre-Signature-Bundle .cre-priceElement").innerHTML = SignatureBundlePrice;
				document.querySelector(".cre-All-Plugins-Edition .cre-priceElement").innerHTML = AllPluginsEditionPrice;

			}, 50)

			setTimeout(function () {
				clearInterval(interal17)
			}, 3000)
		}

		/* Variation Init */
		function init() {
			_$('body').addClass(variation_name)

			helper.waitForElement(".commercial-box__products", function () {

				// FruityEdition price
				var FruityEditionPrice = document.querySelector('[data-js-product="fruity-edition"] .commercial-box__product__cell.price .current-price').innerHTML;
				// ProducerEditionPrice
				var ProducerEditionPrice = document.querySelector('[data-js-product="producer-edition"] .commercial-box__product__cell.price .current-price').innerHTML;
				// SignatureBundlePrice
				var SignatureBundlePrice = document.querySelector('[data-js-product="signature-bundle"] .commercial-box__product__cell.price .current-price').innerHTML;
				// AllPluginsEditionPrice
				var AllPluginsEditionPrice = document.querySelector('[data-js-product="all-plugins-bundle"] .commercial-box__product__cell.price .current-price').innerHTML;

				// Strong the table html with dynamic price------------
				var tableHTML = generateTableWithDynamicPrice(FruityEditionPrice, ProducerEditionPrice, SignatureBundlePrice, AllPluginsEditionPrice);



				// Inserting the table into the DOM-------------------
				helper.waitForElement(" section.sub-navigation", function () {
					if (!document.querySelector(".Cre-ImageLineSection-t-17")) {
						document.querySelector(" section.sub-navigation").insertAdjacentHTML("afterend", tableHTML)
					}

					updateProductPrice()

				})

				helper.waitForElement(".table-section", function () {
					if (!document.querySelector(".Payment-section")) {
						document.querySelector(".table-section").insertAdjacentHTML("afterend", Payment)
					}
				})

			})

			helper.waitForElement(".site-header a.site-header__logo", function () {
				document.querySelector(".site-header a.site-header__logo").insertAdjacentHTML("beforeend", navContent)
			}, 50, 15000)
		}

		/* Initialise variation */
		helper.waitForElement("body", init);
	} catch (e) {
		if (debug) console.log(e, "error in Test" + variation_name);
	}
})();