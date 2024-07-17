(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "Cre_Demo_Page_Content";
        /* all Pure helper functions */
        function waitForElement(selector, trigger, delayInterval, delayTimeout) {
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


        // Define the HTML content in a variable
        var Crecontent = `
			 <div class="Crecontent">
				 <div class="content-inner ">
					 <h1 class="h2">Schedule a Live Demo</h1>
					 <div class="info">
						 <p>Explore SFG20’s unique software for yourself with an expert-led demo.</p>
						 <p><strong>What to expect from an SFG20 demo</strong></p>
						 <ul>
							 <li>To meet a friendly, salaried product expert</li>
							 <li>A focused, tailored demonstration that highlights the functionality most beneficial to you</li>
							 <li>Spend about 30 minutes with a team member to discover how SFG20 can address your specific challenges</li>
							 <li>No hard sell, monologues or lengthy product demonstration</li>
						 </ul>
						 <p><strong>Why don't we provide self-serve demos?</strong></p>
						 <p>Because we respect your time, and our product is highly customisable. We want to show you the functionality that could work best for you, and we can set that up faster than having you read a manual.</p>
					 </div>
				 </div>
				 <div class="hs-video-widget" data-hsv-embed-id="88edfa6d-d69f-4eea-ab47-624f4b697c5b" data-hsv-status="loaded">
					 <div class="hs-video-container" style="max-width: 1920px; margin: 0 auto;">
						 <div class="hs-video-wrapper" style="position: relative; height: 0; padding-bottom: 56.25%">
							 <iframe referrerpolicy="origin" sandbox="allow-forms allow-scripts allow-same-origin allow-popups" allow="autoplay; fullscreen;" style="position: absolute !important; width: 100% !important; height: 100% !important; left: 0; top: 0; border: 0 none; pointer-events: initial" title="HubSpot Video" loading="lazy" data-hsv-id="89515008748" data-hsv-style="" data-hsv-width="1920" data-hsv-height="1080" data-hsv-autoplay="false" data-hsv-loop="false" data-hsv-muted="false" data-hsv-hidden-controls="false" data-hsv-full-width="false" src="https://play-eu1.hubspotvideo.com/v/139678265/id/89515008748?parentOrigin=https%3A%2F%2Fwww.sfg20.co.uk&amp;renderContext=hubl-iframe#hsvid=88edfa6d-d69f-4eea-ab47-624f4b697c5b"></iframe>
						 </div>
					 </div>
				 </div>
			 </div>
		   `;
        /* Variation Init */
        function init() {
            // Add the variation name as a class to the body element
            document.querySelector('body').classList.add(variation_name);

            // If it exists, set its innerHTML to Crecontent
            waitForElement('.row-number-1.dnd-section [data-hs-cos-type="module"] .two-col-content-form .inner.left .content-inner', function () {
                document.querySelector('.row-number-1.dnd-section [data-hs-cos-type="module"] .two-col-content-form .inner.left .content-inner').innerHTML = Crecontent;
            })

            // If it exists, set its innerHTML to the specified privacy policy link
            waitForElement('.row-number-1.dnd-section .hs_company.hs-company + .legal-consent-container .hs-richtext', function () {
                document.querySelector('.row-number-1.dnd-section .hs_company.hs-company + .legal-consent-container .hs-richtext').innerHTML = '<p> Learn how we use your information and how to opt out anytime in our <a href="https://www.sfg20.co.uk/privacy-policy"> Privacy Policy. </a></p>';
            })

        }

        waitForElement("body", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();