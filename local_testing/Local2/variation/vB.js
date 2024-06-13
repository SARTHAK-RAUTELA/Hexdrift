(function () {
	try {
		/* main variables */
		var debug = 0;
		var variation_name = "";
		/* all Pure helper functions */

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

		function live(selector, event, callback, context) {
			// helper for enabling IE 8 event bindings
			function addEvent(el, type, handler) {
				if (el.attachEvent) el.attachEvent("on" + type, handler);
				else el.addEventListener(type, handler);
			}
			// matches polyfill
			this &&
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

		function insertHtml(selector, content, position) {
			var el = document.querySelector(selector);
			if (!position) {
				position = "afterend";
			}
			if (el && content) {
				el.insertAdjacentHTML(position, content);
			}
		}

		function addClass(el, cls) {
			var el = document.querySelector(el);
			if (el) {
				el.classList.add(cls);
			}
		}

		function toggleClass(el, cls) {
			var el = document.querySelector(el);
			if (el) {
				el.classList.toggle(cls);
			}
		}
		function removeClass(el, cls) {
			var el = document.querySelector(el);
			if (el) {
				el.classList.contains(cls) && el.classList.remove(cls);
			}
		}

		var heroLogo = `<div class="cre-web-logo-main" style ="">
        <a href="/">
            <div class="cre-hero-img-container">
                <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/magazinesdirect/MAG45/magazinLogo.png" class="cre-smallerHide" alt="Magazines Direct">
				<p class="cre-t-45-LogoTag headerText"></p>
            </div>

        </a>
    </div>`

		var dropDown = `<ul class="cre-new-drop w-auto giftingNav">
	<li class="smallerHide mega-menu-trigger dropdowns-2022" id="atoz-megamenu-display-2022" data-megamenu="atoz-mega-menu-2022">
	<a href="/az-magazines/">Magazines A-Z</a> 
	<i class="fa-solid fa-caret-right text-danger"></i>
	<div id="atoz-mega-menu-2022" class="row megamenu atoz-mega-menu" style="display: none;">
		<ul class="menu-row">
			<li class="">
				<a class="wholebox navigationevent" href="/az-magazines/41489131/25-beautiful-homes-subscription.thtml">25 Beautiful Homes</a>
			</li>
			<li class="">
				<a class="wholebox navigationevent" href="/az-magazines/6936399/classic-rock-magazine-subscription.thtml">Classic Rock</a>
			</li>
			<li class="">
				<a class="wholebox navigationevent" href="/az-magazines/34206771/country-homes-and-interiors-subscription.thtml">Country Homes &amp; Interiors</a>
			</li>
			<li class="">
				<a class="wholebox navigationevent" href="/az-magazines/34206691/country-life-subscription.thtml">Country Life</a>
			</li>
			<li class="">
				<a class="wholebox navigationevent" href="/az-magazines/41487616/decanter-subscription.thtml">Decanter</a>
			</li>
			<li class="">
				<a class="wholebox navigationevent" href="/az-magazines/6936459/four-four-two-442-magazine-subscription.thtml">FourFourTwo</a>
			</li>
			<li class="">
				<a class="wholebox navigationevent" href="/az-magazines/6936499/guitar-world-magazine-subscription.thtml">Guitar World</a>
			</li>
			<li class="">
				<a class="wholebox navigationevent" href="/az-magazines/34207256/homes-and-gardens-subscription.thtml">Homes &amp; Gardens</a>
			</li>
			<li class="">
				<a class="wholebox navigationevent" href="/az-magazines/34207246/horse-and-hound-subscription.thtml">Horse &amp; Hound</a>
			</li>
			<li class="">
				<a class="wholebox navigationevent" href="/az-magazines/6936539/how-it-works-magazine-subscription.thtml">How It Works</a>
			</li>
			<li class="">
				<a class="wholebox navigationevent" href="/az-magazines/34207276/ideal-home-subscription.thtml">Ideal Home</a>
			</li>
			<li class="">
				<a class="wholebox navigationevent" href="/az-magazines/34248031/livingetc-subscription.thtml">Livingetc</a>
			</li>
			<li class="">
				<a class="wholebox navigationevent" href="/az-magazines/6936649/period-living-magazine-subscription.thtml">Period Living</a>
			</li>
			<li class="">
				<a class="wholebox navigationevent" href="/az-magazines/6936669/playstation-official-magazine-subscription.thtml">PLAY</a>
			</li>
			<li class="">
				<a class="wholebox navigationevent" href="/az-magazines/34207446/style-at-home-subscription.thtml">Style at Home</a>
			</li>
			<li class="">
				<a class="wholebox navigationevent" href="/az-magazines/34207551/the-field-subscription.thtml">The Field</a>
			</li>
			<li class="">
				<a class="wholebox navigationevent" href="/az-magazines/34207711/woman-and-home-subscription.thtml">Woman &amp; Home</a>
			</li>
			<li class="">
				<a class="wholebox navigationevent" href="/az-magazines/34207706/womans-weekly-subscription.thtml">Woman's Weekly</a>
			</li>
			<li class="">
				<a class="wholebox navigationevent redText" href="/az-magazines/">See All Magazines</a>
			</li>
		</ul>
	</div>
</li>

<li class="mega-menu-trigger dropdowns-2022" id="categories-megamenu-display-2022" data-megamenu="categories-mega-menu-2022">
	<a href="/categories/">Categories</a>
	<i class="fa-solid fa-caret-right text-danger"></i>
	<div id="categories-mega-menu-2022" class="row category-mega-menu megamenu" style="display: none;">
		<ul class="menu-row">
	
	
			<li class="">
				<a class="wholebox navigationevent" href="/categories/countryandequestrian/">Country and Equestrian</a>
			</li>
	
	
			<li class="">
				<a class="wholebox navigationevent" href="/categories/fashionandcelebrity/">Fashion and Celebrity</a>
			</li>
	
	
			<li class="">
				<a class="wholebox navigationevent" href="/categories/foodandlifestyle/">Food and Lifestyle</a>
			</li>
	
	
			<li class="">
				<a class="wholebox navigationevent" href="/categories/gaming/">Gaming</a>
			</li>
	
	
			<li class="">
				<a class="wholebox navigationevent" href="/categories/gifts/">Gift Ideas</a>
			</li>
	
	
			<li class="">
				<a class="wholebox navigationevent" href="/categories/hobbiesandleisure/">Hobbies and Leisure</a>
			</li>
	
	
			<li class="">
				<a class="wholebox navigationevent" href="/categories/homesandgardens/">Homes and Gardens</a>
			</li>
	
	
			<li class="">
				<a class="wholebox navigationevent" href="/categories/mens/">Men's</a>
			</li>
	
	
			<li class="">
				<a class="wholebox navigationevent" href="/categories/music/">Music</a>
			</li>
	
	
			<li class="">
				<a class="wholebox navigationevent" href="/categories/photography-and-design/">Photography and Design</a>
			</li>
	
	
			<li class="">
				<a class="wholebox navigationevent" href="/categories/sports/">Sports</a>
			</li>
	
	
			<li class="">
				<a class="wholebox navigationevent" href="/categories/tech/">Tech</a>
			</li>
	
	
			<li class="">
				<a class="wholebox navigationevent" href="/categories/tv-and-film/">TV &amp; Film</a>
			</li>
	
	
			<li class="">
				<a class="wholebox navigationevent" href="/categories/womens/">Women's</a>
			</li>
	
			<li class="">
				<a class="wholebox navigationevent redText" href="/az-magazines/">Browse our magazines A-Z</a>
			</li>
		</ul>
	</div>			
</li>

<li class="mega-menu-trigger dropdrowns-2022" data-megamenu="guides-specials-mega-menu-2022">
	<a href="/guides-and-specials/">Guides &amp; Specials</a> 
	<i class="fa-solid fa-caret-right text-danger"></i>	
	<div id="guides-specials-mega-menu-2022" class="row megamenu" style="display: none;">
		<ul class="menu-row">
	
	
			<li class="">
				<a class="wholebox navigationevent" href="/guides-and-specials/categories/annuals/">Annuals</a>
			</li>
	
	
			<li class="">
				<a class="wholebox navigationevent" href="/guides-and-specials/categories/bestsellingguides/">Bestsellers</a>
			</li>
	
	
			<li class="">
				<a class="wholebox navigationevent" href="/guides-and-specials/categories/bundles/">Bundles</a>
			</li>
	
	
			<li class="">
				<a class="wholebox navigationevent" href="/guides-and-specials/categories/celebrityandfanpacks/">Celebrity &amp; Fan Packs</a>
			</li>
	
	
			<li class="">
				<a class="wholebox navigationevent" href="/guides-and-specials/categories/christmasguidesspecials/">Christmas</a>
			</li>
	
	
			<li class="">
				<a class="wholebox navigationevent" href="/guides-and-specials/categories/design/">Design</a>
			</li>
	
	
			<li class="">
				<a class="wholebox navigationevent" href="/guides-and-specials/categories/tv/">Film &amp; TV</a>
			</li>
	
	
			<li class="">
				<a class="wholebox navigationevent" href="/guides-and-specials/categories/gaming/">Gaming</a>
			</li>
	
	
			<li class="">
				<a class="wholebox navigationevent" href="/guides-and-specials/categories/home-and-garden/">Home and Garden</a>
			</li>
	
	
			<li class="">
				<a class="wholebox navigationevent" href="/guides-and-specials/categories/knowledge/">Knowledge</a>
			</li>
	
	
			<li class="">
				<a class="wholebox navigationevent" href="/guides-and-specials/categories/lifestyle/">Lifestyle</a>
			</li>
	
	
			<li class="">
				<a class="wholebox navigationevent" href="/guides-and-specials/categories/music/">Music</a>
			</li>
	
	
			<li class="">
				<a class="wholebox navigationevent" href="/guides-and-specials/categories/photography/">Photography</a>
			</li>
	
	
			<li class="">
				<a class="wholebox navigationevent" href="/guides-and-specials/categories/royalguidesspecials/">Royal Guides &amp; Specials</a>
			</li>
	
	
			<li class="">
				<a class="wholebox navigationevent" href="/guides-and-specials/categories/sport-and-leisure/">Sport &amp; Leisure</a>
			</li>
	
		</ul>
	</div>			
</li>
<li class="mega-menu-trigger dropdrowns-2022" data-megamenu="single-issues-mega-menu-2022">
	<a href="/single-issue/">Single Issues</a> 
	<i class="fa-solid fa-caret-right text-danger"></i>
	<div id="single-issues-mega-menu-2022" class="row megamenu single-issues-mega-menu" style="display: none;">
		<ul class="menu-row">
			<li class="">
				<a class="wholebox navigationevent" href="/az-single-issues/6936929/classic-rock-magazine-single-issue.thtml">Classic Rock</a>
			</li>
			<li class="">
				<a class="wholebox navigationevent" href="/az-single-issues/6937209/country-life-single-issue.thtml">Country Life</a>
			</li>
			<li class="">
				<a class="wholebox navigationevent" href="/az-single-issues/6936949/edge-magazine-single-issue.thtml">Edge</a>
			</li>
			<li class="">
				<a class="wholebox navigationevent" href="/az-single-issues/6936979/guitar-world-magazine-single-issue.thtml">Guitar World</a>
			</li>
			<li class="">
				<a class="wholebox navigationevent" href="/az-single-issues/6937249/horse-and-hound-single-issue.thtml">Horse &amp; Hound</a>
			</li>
			<li class="">
				<a class="wholebox navigationevent" href="/az-single-issues/6937004/imaginefx-magazine-single-issue.thtml">ImagineFX</a>
			</li>
			<li class="">
				<a class="wholebox navigationevent" href="/az-single-issues/6937024/metal-hammer-magazine-single-issue.thtml">Metal Hammer</a>
			</li>
			<li class="">
				<a class="wholebox navigationevent" href="/az-single-issues/47052423/prog-magazine-single-issue.thtml">Prog</a>
			</li>
			<li class="">
				<a class="wholebox navigationevent" href="/az-single-issues/6937134/retro-gamer-magazine-single-issue.thtml">Retro Gamer</a>
			</li>
			<li class="">
				<a class="wholebox navigationevent" href="/az-single-issues/6937159/total-guitar-magazine-single-issue.thtml">Total Guitar</a>
			</li>
			<li class="">
				<a class="wholebox navigationevent redText" href="/single-issue/">See All Single Issues</a>
			</li>
		</ul>
	</div>
</li>
<li class="smallerHide giftingHide">
	<a id="binders" class="navigationevent" href="/merchandise/categories/binders/">Binders</a>
</li>
<li class="smallerHide">
	<a id="clearance" class="navigationevent" href="/merchandise/categories/clearance/">Clearance</a>
</li>
<li class="smallerHide giftingLink">
	<a id="xmas_gifts" class="navigationevent" href="/promotions/categories/MDGIFTING/">Gifting</a>
</li>
                       </ul>`

		var dropDown2 = `<ul class="cre-new-drop w-auto giftingNav">
        <li class="cre-smallerHide cre-mega-menu-trigger cre-dropdowns-2022" id="cre-atoz-megamenu-display-2022"
            data-megamenu="cre-atoz-mega-menu-2022">
            <a href="/az-magazines/">Magazines A-Z</a>
            <i class="fa-solid fa-caret-right text-danger"></i>
            <div id="cre-atoz-mega-menu-2022" class="row cre-megamenu cre-atoz-mega-menu">
                <ul class="cre-menu-row">
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/az-magazines/41489131/25-beautiful-homes-subscription.thtml">25 Beautiful Homes</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/az-magazines/6936399/classic-rock-magazine-subscription.thtml">Classic Rock</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/az-magazines/34206771/country-homes-and-interiors-subscription.thtml">Country Homes
                            &amp; Interiors</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/az-magazines/34206691/country-life-subscription.thtml">Country Life</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/az-magazines/41487616/decanter-subscription.thtml">Decanter</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/az-magazines/6936459/four-four-two-442-magazine-subscription.thtml">FourFourTwo</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/az-magazines/6936499/guitar-world-magazine-subscription.thtml">Guitar World</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/az-magazines/34207256/homes-and-gardens-subscription.thtml">Homes &amp; Gardens</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/az-magazines/34207246/horse-and-hound-subscription.thtml">Horse &amp; Hound</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/az-magazines/6936539/how-it-works-magazine-subscription.thtml">How It Works</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/az-magazines/34207276/ideal-home-subscription.thtml">Ideal Home</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/az-magazines/34248031/livingetc-subscription.thtml">Livingetc</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/az-magazines/6936649/period-living-magazine-subscription.thtml">Period Living</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/az-magazines/6936669/playstation-official-magazine-subscription.thtml">PLAY</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/az-magazines/34207446/style-at-home-subscription.thtml">Style at Home</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/az-magazines/34207551/the-field-subscription.thtml">The Field</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/az-magazines/34207711/woman-and-home-subscription.thtml">Woman &amp; Home</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/az-magazines/34207706/womans-weekly-subscription.thtml">Woman's Weekly</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent cre-redText" href="/az-magazines/">See All Magazines</a>
                    </li>
                </ul>
            </div>
        </li>

        <li class="cre-mega-menu-trigger cre-dropdowns-2022" id="cre-categories-megamenu-display-2022"
            data-megamenu="cre-categories-mega-menu-2022">
            <a href="/categories/">Categories</a>
            <i class="fa-solid fa-caret-right text-danger"></i>
            <div id="cre-categories-mega-menu-2022" class="row cre-category-mega-menu cre-megamenu">
                <ul class="cre-menu-row">
                    <li class="">
                        <a class="cre-wholebox navigationevent" href="/categories/countryandequestrian/">Country and
                            Equestrian</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent" href="/categories/fashionandcelebrity/">Fashion and
                            Celebrity</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent" href="/categories/foodandlifestyle/">Food and
                            Lifestyle</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent" href="/categories/gaming/">Gaming</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent" href="/categories/gifts/">Gift Ideas</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent" href="/categories/hobbiesandleisure/">Hobbies and
                            Leisure</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent" href="/categories/homesandgardens/">Homes and
                            Gardens</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent" href="/categories/mens/">Men's</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent" href="/categories/music/">Music</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent" href="/categories/photography-and-design/">Photography
                            and Design</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent" href="/categories/sports/">Sports</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent" href="/categories/tech/">Tech</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent" href="/categories/tv-and-film/">TV &amp; Film</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent" href="/categories/womens/">Women's</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent cre-redText" href="/categories/">See All Categories</a>
                    </li>
                </ul>
            </div>
        </li>

        <li class="cre-mega-menu-trigger cre-dropdowns-2022" data-megamenu="cre-guides-specials-mega-menu-2022">
            <a href="/guides-and-specials/">Guides &amp; Specials</a>
            <i class="fa-solid fa-caret-right text-danger"></i>
            <div id="cre-guides-specials-mega-menu-2022" class="row cre-megamenu">
                <ul class="cre-menu-row">
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/guides-and-specials/categories/annuals/">Annuals</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/guides-and-specials/categories/bestsellingguides/">Bestsellers</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/guides-and-specials/categories/bundles/">Bundles</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/guides-and-specials/categories/celebrityandfanpacks/">Celebrity &amp; Fan Packs</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/guides-and-specials/categories/christmasguidesspecials/">Christmas</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/guides-and-specials/categories/design/">Design</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent" href="/guides-and-specials/categories/tv/">Film &amp;
                            TV</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/guides-and-specials/categories/gaming/">Gaming</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/guides-and-specials/categories/home-and-garden/">Home and Garden</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/guides-and-specials/categories/knowledge/">Knowledge</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/guides-and-specials/categories/lifestyle/">Lifestyle</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent" href="/guides-and-specials/categories/music/">Music</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/guides-and-specials/categories/photography/">Photography</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/guides-and-specials/categories/royalguidesspecials/">Royal Guides &amp; Specials</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/guides-and-specials/categories/sport-and-leisure/">Sport &amp; Leisure</a>
                    </li>
                </ul>
            </div>
        </li>

        <li class="cre-mega-menu-trigger cre-dropdowns-2022" data-megamenu="cre-single-issues-mega-menu-2022">
            <a href="/single-issue/">Single Issues</a>
            <i class="fa-solid fa-caret-right text-danger"></i>
            <div id="cre-single-issues-mega-menu-2022" class="row cre-megamenu cre-single-issues-mega-menu">
                <ul class="cre-menu-row">
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/az-single-issues/6936929/classic-rock-magazine-single-issue.thtml">Classic Rock</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/az-single-issues/6937209/country-life-single-issue.thtml">Country Life</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/az-single-issues/6936949/edge-magazine-single-issue.thtml">Edge</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/az-single-issues/6936979/guitar-world-magazine-single-issue.thtml">Guitar World</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/az-single-issues/6937249/horse-and-hound-single-issue.thtml">Horse &amp; Hound</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/az-single-issues/6937004/imaginefx-magazine-single-issue.thtml">ImagineFX</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/az-single-issues/6937024/metal-hammer-magazine-single-issue.thtml">Metal Hammer</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/az-single-issues/47052423/prog-magazine-single-issue.thtml">Prog</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/az-single-issues/6937134/retro-gamer-magazine-single-issue.thtml">Retro Gamer</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent"
                            href="/az-single-issues/6937159/total-guitar-magazine-single-issue.thtml">Total Guitar</a>
                    </li>
                    <li class="">
                        <a class="cre-wholebox navigationevent cre-redText" href="/single-issue/">See All Single
                            Issues</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="cre-smallerHide cre-giftingHide">
            <a id="cre-binders" class="navigationevent" href="/merchandise/categories/binders/">Binders</a>
        </li>
        <li class="cre-smallerHide">
            <a id="cre-clearance" class="navigationevent" href="/merchandise/categories/clearance/">Clearance</a>
        </li>
        <li class="cre-smallerHide cre-giftingLink">
            <a id="cre-xmas_gifts" class="navigationevent" href="/promotions/categories/MDGIFTING/">Gifting</a>
        </li>
    </ul>
    <div class="cre-new-icon-container">
        <div class="cre-searchbar-container">
            <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/magazinesdirect/MAG45/search.png" alt="" class="cre-searchbar">
        </div>
        <div class="cre-cart-container">
            <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/magazinesdirect/MAG45/cart.png" alt="" class="cre-cart">
        </div>
        <div class="cre-profile-container">
           <a href="https://www.mymagazine.co.uk/?_gl=1*1egaxq3*_ga*MTgzODY4NTA2My4xNzE4MDA4NDQ2*_ga_JBLFCJ7GR8*MTcxODAxNzI0NS4zLjEuMTcxODAyMDk5Ny42MC4wLjA.*_gcl_au*MTMxNTE5NzEzLjE3MTgwMDg0NDg.&amp;_ga=2.94644575.298524292.1718008446-1838685063.1718008446" target="_blank"><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/magazinesdirect/MAG45/profile.png" alt="" class="cre-profile"></a>
        </div>
    </div>`

		var navMobile = `<div class="cre-new-icon-container-Mob">
        <div class="cre-searchbar-container">
            <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/magazinesdirect/MAG45/search.png" alt="" class="cre-searchbar">
        </div>
		        <div class="cre-cart-container">
<a href="/your-basket/">
<img src="https://i.ibb.co/P4v4HPy/Cart.png" alt="" class="cre-cart">
</a><div class="cre-count-Item">0</div></div>


        <div class="cre-profile-container">
            <a href="https://www.mymagazine.co.uk/?_gl=1*1egaxq3*_ga*MTgzODY4NTA2My4xNzE4MDA4NDQ2*_ga_JBLFCJ7GR8*MTcxODAxNzI0NS4zLjEuMTcxODAyMDk5Ny42MC4wLjA.*_gcl_au*MTMxNTE5NzEzLjE3MTgwMDg0NDg.&amp;_ga=2.94644575.298524292.1718008446-1838685063.1718008446" target="_blank"><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/magazinesdirect/MAG45/profile.png" alt="" class="cre-profile"></a>
        </div>
    </div>`

		var navMobile2 = `<div id="cre-navbar-toggler" class="float-end">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#21282C">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path>
        </svg>
        <i class="fa-solid fa-xmark fs-5 align-middle menuOpen"></i>
    </div>`

		var dropDownMob = `<ul class="cre-collapsableMenu">
    <li><a href="/az-magazines/">Magazines A-Z</a></li>
    <li class="cre-categories-toggle">Categories <img src="/images/expand.png" class="cre-expandImage" alt="Expand Categories">
        <ul class="cre-collapsableCategories">
            <li class="cre-visiblecategory"><a href="/categories/photography-and-design/">Photography and Design</a></li>
            <li class="cre-visiblecategory"><a href="/categories/tv-and-film/">TV &amp; Film</a></li>
            <li class="cre-visiblecategory"><a href="/categories/gifts/">Gift Ideas</a></li>
            <li class="cre-visiblecategory"><a href="/categories/hobbiesandleisure/">Hobbies and Leisure</a></li>
            <li class="cre-visiblecategory"><a href="/categories/homesandgardens/">Homes and Gardens</a></li>
            <li class="cre-visiblecategory"><a href="/categories/foodandlifestyle/">Food and Lifestyle</a></li>
            <li class="cre-visiblecategory"><a href="/categories/countryandequestrian/">Country and Equestrian</a></li>
            <li class="cre-visiblecategory"><a href="/categories/fashionandcelebrity/">Fashion and Celebrity</a></li>
            <li class="cre-visiblecategory"><a href="/categories/sports/">Sports</a></li>
            <li class="cre-visiblecategory"><a href="/categories/womens/">Women's</a></li>
            <li class="cre-visiblecategory"><a href="/categories/mens/">Men's</a></li>
            <li class="cre-visiblecategory"><a href="/categories/tech/">Tech</a></li>
            <li class="cre-visiblecategory"><a href="/categories/music/">Music</a></li>
            <li class="cre-visiblecategory"><a href="/categories/gaming/">Gaming</a></li>
        </ul>
    </li>
    <li class="cre-guides-toggle">Guides &amp; Specials <img src="/images/expand.png" class="cre-expandImage" alt="Expand Guides &amp; Specials">
        <ul class="cre-collapsableGuides">
            <li><a href="/guides-and-specials/categories/design/">Design</a></li>
            <li><a href="/guides-and-specials/categories/tv/">TV &amp; Film</a></li>
            <li><a href="/guides-and-specials/categories/gaming/">Gaming</a></li>
            <li><a href="/guides-and-specials/categories/music/">Music</a></li>
            <li><a href="/guides-and-specials/categories/photography/">Photography</a></li>
            <li><a href="/guides-and-specials/categories/tech/">Tech</a></li>
            <li><a href="/guides-and-specials/categories/knowledge/">Knowledge</a></li>
            <li><a href="/guides-and-specials/categories/home-and-garden/">Homes &amp; Gardens</a></li>
            <li><a href="/guides-and-specials/categories/sport-and-leisure/">Sport &amp; Leisure</a></li>
            <li><a href="/guides-and-specials/categories/lifestyle/">Lifestyle</a></li>
        </ul>
    </li>
    <li><a href="/single-issue/">Single Issues</a></li>
    <li><a href="/merchandise/categories/binders/">Binders</a></li>
    <li><a href="/merchandise/categories/clearance/">Clearance</a></li>
    <li class="cre-giftingLink"><a href="/promotions/categories/MDGIFTING/">Gifting</a></li>
    <li class="cre-mymagazineMobileLink"><a href="https://www.mymagazine.co.uk/" target="_blank" class="cre-redText">Manage my subscription</a></li>
</ul>`

		var reviewSection = `<div class="container cre-reviews-section">
        <div class="cre-reviews-section-wrapper">
            <div class="cre-reviews-section-inner">
                <ul>
                    <li class="cre-reviews cre-w-auto">
                        <img src="/images/reviews.png" alt="Feefo 16,000+ 5-star reviews" class="" width="76"
                            height="18">
							 <label class="cre-review-text cre-text-bold">16,000+ 5-star reviews</label>
                        
                    </li>
                    <li class="cre-discount cre-smallerHide"><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/magazinesdirect/MAG45/guaranted.png"
                            alt="Lowest prices guaranteed" class="" width="23" height="23">
                        <div class="cre-review-buy-header">
                            <label class="cre-review-text cre-text-bold">Buy Direct & Save</label>
                            <p class="cre-review-text">Guaranteed best prices</p>
                        </div>
                    </li>
                    <li class="cre-delivery cre-print"><img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/magazinesdirect/MAG45/truck.png"
                            alt="Includes shipping to your door" class="" width="26" height="24">
							<div class="cre-review-delivery-header">
                            <label class="cre-review-text cre-text-bold">Delivery Inclided</label>
                            <p class="cre-review-text">Guaranteed on-time arrival</p>
                        </div>
                    </li>
                    <li class="cre-manage cre-smallerHide">
                        <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/magazinesdirect/MAG45/box.png" alt="Manage your subscription online"
                            class="" width="30" height="30">
                            <div class="cre-review-manage-header">
                                <label class="cre-review-text cre-text-bold">Manage Online</label>
                                <p class="cre-review-text">Cancel or change anytime</p>
                            </div>
                    </li>
                </ul>
            </div>
            <div class="cre-t-45-cross"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                    viewBox="0 0 14 14" fill="none">
                    <path d="M13 1L1 13M1 1L13 13" stroke="#B4B4B4" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                </svg></div>
        </div>
    </div>`


		/* Variation Init */
		function init() {
			addClass('body', 'cre-t-1')



			waitForElement('.desktopHeader .top-header .col-7 .row', function () {
				if (!document.querySelector('.cre-new-drop.w-auto.giftingNav')) {
					insertHtml('.desktopHeader .top-header .col-7 .row', dropDown2, "afterbegin");
				}
			});

			waitForElement('.mobileHeader', function () {
				if (!document.querySelector('.cre-reviews-section.container')) {
					insertHtml('.mobileHeader', reviewSection, "afterend");
				}
			});

			waitForElement('.cre-new-icon-container .cre-cart-container', function () {
				document.querySelector('.cre-new-icon-container .cre-cart-container').insertAdjacentElement('afterend', document.querySelector('.your-basket.w-auto'))
			});



			waitForElement('.desktopHeader .top-header .col-5', function () {
				if (!document.querySelector('.cre-web-logo-main')) {
					insertHtml('.desktopHeader .top-header .col-5', heroLogo, "afterend");
				}
			});

			waitForElement('.site-header .your-basket-mobile a', function () {
				if (!document.querySelector('.cre-new-icon-container-Mob')) {
					insertHtml('.site-header .your-basket-mobile a', navMobile, "afterend");
				}
			});

			waitForElement('.cre-new-icon-container .cre-profile-container', function () {
				if (!document.querySelector('#cre-navbar-toggler')) {
					insertHtml('.cre-new-icon-container .cre-profile-container', navMobile2, "afterend");
				}
			});

			waitForElement('.top-header .cre-new-icon-container #cre-navbar-toggler', function () {
				if (!document.querySelector('.cre-collapsableMenu .cre-p-0')) {
					insertHtml('.top-header .cre-new-icon-container #cre-navbar-toggler', dropDownMob, "afterend");
				}
			});


			waitForElement('.site-header #navbar-toggler', function () {
				// Select the <i> element with the specified classes
				var iconElement = document.querySelector(".fa-solid.fa-bars.fs-5.align-middle.menuClosed");

				if (iconElement) {
					// Create a new div element to hold the SVG
					var svgContainer = document.createElement("div");
					svgContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#21282C"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>';

					// Replace the <i> element with the SVG
					iconElement.parentNode.replaceChild(svgContainer.firstChild, iconElement);
				}
			});



			waitForElement('.desktopHeader .top-header .col-5 >p', function () {
				document.querySelectorAll('.desktopHeader .top-header .col-5 >p').forEach(function (e) {
					var parent = e.closest('.desktopHeader .top-header .col-5 >p');
					if (parent && e.innerHTML.indexOf('A Future Publishing Company') !== -1) {
						parent.classList.add('cre-header-tagline');
					}
				});
			});



			// desktopSearch
			waitForElement('#desktopSearch', function () {
				document.querySelector('#desktopSearch').closest('.col-8').classList.add('cre-t-45-Search')
			});

			// waitForElement('.promiseBullets.basketRemove.nonBranded .discount.smallerHide>img', function () {
			// 	document.querySelector('.promiseBullets.basketRemove.nonBranded .discount.smallerHide>img').src = "https://i.ibb.co/x69Bby1/Vector.png"
			// });

			// waitForElement('.promiseBullets.basketRemove.nonBranded .delivery.print>img', function () {
			// 	document.querySelector('.promiseBullets.basketRemove.nonBranded .delivery.print>img').src = "https://i.ibb.co/f0xVrd2/Vector-Car.png"
			// });

			// waitForElement('.promiseBullets.basketRemove.nonBranded .manage.smallerHide>img', function () {
			// 	document.querySelector('.promiseBullets.basketRemove.nonBranded .manage.smallerHide>img').src = "https://i.ibb.co/Tq1W8Ws/Vector-Manage.png"
			// });

			waitForElement('#promCodeBanner>.col>strong', function () {
				if (!document.querySelector('.cre-t-45-promo')) {
					document.querySelector('#promCodeBanner>.col>strong').insertAdjacentHTML('afterend', '<span class="cre-t-45-promo">Father’s Day Sale! Save an extra 10% with code DAD10. <a href="#">Learn more</a></span>')
				}

			});

			waitForElement('.promiseBullets.basketRemove.nonBranded .header-promises', function () {
				var crossIcon = `<div class="cre-t-45-cross"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
								<path d="M13 1L1 13M1 1L13 13" stroke="#B4B4B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								</svg></div>`;

				if (!document.querySelector('.cre-t-45-cross')) {
					document.querySelector('.promiseBullets.basketRemove.nonBranded .header-promises').insertAdjacentHTML('beforeend', crossIcon)
				}

			});

			// .promiseBullets.basketRemove.nonBranded .header-promises
			if (sessionStorage.getItem('hidePromo')) {
				addClass('body', 'cre-Hide-promo')
			}

						// .your-basket .basket-count
						waitForElement('.your-basket .basket-count', function () {
							document.querySelector('.cre-count-Item').innerHTML =  document.querySelector('.your-basket .basket-count').innerHTML
						});


						// .officialStrike
						waitForElement('.desktopHeader .officialStrike', function () {
							addClass('body', 'cre-officialTag')
							document.querySelector('.cre-t-45-LogoTag').innerHTML = document.querySelector('.desktopHeader .headerText').innerHTML
							
							// document.querySelector('.cre-count-Item').innerHTML =  document.querySelector('.your-basket .basket-count').innerHTML
						});
		}

		function eventHandler() {

			// change

			live("#desktopSearch input", "keyup", function () {
				var mainInput = document.querySelector('#desktopSearch input').value
				console.log('Value: ', mainInput.length)
				if (mainInput.length > 0 && document.querySelector('.cre-toogle-search')) {
					document.querySelector('#desktopSearch').classList.remove('cre-toogle-search')
				}
			})

			live(".cre-new-icon-container .cre-searchbar-container", "click", function () {
				addClass('body', 'cre-show-search');
				if (document.querySelector('#desktopSearch input').value.length == 0) {
					addClass('#desktopSearch', 'cre-toogle-search');
				}

			})

			// .cre-toogle-search button

			live(".cre-toogle-search button", "click", function (e) {
				e.preventDefault();
				removeClass('body', 'cre-show-search')
			})

			live(".cre-new-icon-container-Mob .cre-searchbar-container", "click", function () {
				toggleClass('body', 'cre-show-search');
				// toggleClass('#desktopSearch', 'cre-toogle-search');
			})


			live(".cre-new-icon-container #cre-navbar-toggler svg", "click", function () {
				addClass('body', 'cre-showNav2');
			})

			live("#cre-navbar-toggler i.menuOpen", "click", function () {
				removeClass('body', 'cre-showNav2');
			})



			// live("#navbar-toggler svg", "click", function () {
			// 	addClass('body', 'cre-hamburger-icon')
			// })
			live("#navbar-toggler", "click", function () {
				toggleClass('body', 'cre-hamburger-icon')
			})

			live(".cre-t-45-cross", "click", function () {
				addClass('body', 'cre-Hide-promo')
				sessionStorage.setItem('hidePromo', true);
			})
		}


		if (!window.cre45EventHandler) {
			eventHandler();
			window.cre45EventHandler = true;
		}



		//   live("selector","click",function(){

		//   })

		/* Initialise variation */
		waitForElement('body', init);

	} catch (e) {
		if (debug) console.log(e, "error in Test" + variation_name);
	}
})();
