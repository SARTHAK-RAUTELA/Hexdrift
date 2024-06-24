(function () {
	try {
		/* main variables */
		var debug = 0;
		var variation_name = "";

		var currentUrl = window.location.href;
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

		function innerHTMLContent(selector, content) {
			var el = document.querySelector(selector);
			if (el) {
				el.innerHTML = content;
			}
		}

		function innerChildContent(selector, childNumber, content) {
			var el = document.querySelector(selector);
			if (el.hasChildNodes()) {
				el.childNodes[childNumber].textContent = content;
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

		var creCountryLife = `<div class="cre-countryLife">
		<div class="cre-countryLife-wrapper">
			<div class="cre-countryLife-inner">
			  <div class="cre-countryLife-inner-section">
				<div class="cre-productdispla">
				  <div class="cre-productdispla-left">
					  <div class="cre-productdispla-left-img">
						<div class="cre-productdispla-left-wrapper">
					<picture class="cre-productdispla-left-picture">
    <source srcset="" media="(min-width: 1024px)">
    <source srcset="" media="(min-width: 768px)">
    <source srcset="" media="(min-width: 414px)"><img decoding="async" loading="lazy" srcset="" src="" alt="Country Life" width="240px" height="318px" class="cre-productdispla-left-pictureImg"></picture>
						</div>
					  </div>
					  <ul class="cre-productdispla-left-ul">
						<li class="cre-productdispla-left-li"><span class="cre-productdispla-left-li-span"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
						  <path d="M16.175 7.84167L8.81667 0.483333C8.50833 0.175 8.08333 0 7.64167 0H1.66667C0.75 0 0 0.75 0 1.66667V7.64167C0 8.08333 0.175 8.50833 0.491667 8.81667L7.85 16.175C8.5 16.825 9.55833 16.825 10.2083 16.175L16.1833 10.2C16.8333 9.55 16.8333 8.5 16.175 7.84167ZM3.75 5C3.05833 5 2.5 4.44167 2.5 3.75C2.5 3.05833 3.05833 2.5 3.75 2.5C4.44167 2.5 5 3.05833 5 3.75C5 4.44167 4.44167 5 3.75 5Z" fill="black"/>
						  </svg></span>
						  <p>Best price guarantee</p>
						</li>
						<li class="cre-productdispla-left-li"><span class="cre-productdispla-left-li-span"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
						  <path d="M8.33352 15.7917L7.12518 14.6917C2.83352 10.8 0.000183105 8.23333 0.000183105 5.08333C0.000183105 2.51667 2.01685 0.5 4.58352 0.5C6.03352 0.5 7.42518 1.175 8.33352 2.24167C9.24185 1.175 10.6335 0.5 12.0835 0.5C14.6502 0.5 16.6668 2.51667 16.6668 5.08333C16.6668 8.23333 13.8335 10.8 9.54185 14.7L8.33352 15.7917Z" fill="black"/>
						  </svg></span>
						  <p>Delivery included</p>
						</li>
						<li class="cre-productdispla-left-li"><span class="cre-productdispla-left-li-span"><svg aria-labelledby="svg-inline--fa-title-WyeQ9V156r0T" data-prefix="fas" data-icon="truck" class="svg-inline--fa fa-truck " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-testid="icon">
							  <title id="svg-inline--fa-title-WyeQ9V156r0T">truck icon</title>
							  <path fill="currentColor" d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
							</svg></span>
						  <p>No hidden costs</p>
						</li>
						<li class="cre-productdispla-left-li"><span class="cre-productdispla-left-li-span"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
						  <path d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM7.88 13.62V12C6.86 11.97 5.9 11.56 5.17 10.83C4.42 10.07 4 9.07 4 8C4 7.3 4.18 6.62 4.52 6.02L5.26 6.76C5.09 7.15 5 7.57 5 8C5 8.8 5.31 9.55 5.88 10.12C6.42 10.65 7.15 10.94 7.88 10.97V9.38L10 11.5L7.88 13.62ZM11.48 9.98L10.74 9.24C10.91 8.85 11 8.43 11 8C11 7.2 10.69 6.45 10.12 5.88C9.58 5.34 8.88 5.03 8.12 5V6.62L6 4.5L8.12 2.38V4.04C9.12 4.07 10.1 4.45 10.83 5.17C11.58 5.93 12 6.93 12 8C12 8.7 11.82 9.38 11.48 9.98Z" fill="black"/>
						  </svg></span>
						  <p>Cancel any time</p>
						</li>
					  </ul>
				  </div>
				  <div class="cre-productdispla-right">
					<div class="cre-productdispla-right-header">
					  <div class="cre-productdispla-right-headerInner">
						<h1 class="cre-productdispla-right-headerText"></h1>
					  </div>
					</div>
					<div class="cre-productdispla-right-img">
					  <div class="sc-idzLyQ igBvqe">
						<picture class="">
						  <source srcset="https://images.arcade.futurecdn.net/@prod/_fill_w240_h318/sylius/assets/images/de/c3/c2c4a070905fe77a7ef78013a127.jpg, https://images.arcade.futurecdn.net/@prod/_fill_w480_h635/sylius/assets/images/de/c3/c2c4a070905fe77a7ef78013a127.jpg 2x" media="(min-width: 1024px)">
						  <source srcset="https://images.arcade.futurecdn.net/@prod/_fill_w240_h318/sylius/assets/images/de/c3/c2c4a070905fe77a7ef78013a127.jpg, https://images.arcade.futurecdn.net/@prod/_fill_w480_h635/sylius/assets/images/de/c3/c2c4a070905fe77a7ef78013a127.jpg 2x" media="(min-width: 768px)">
						  <source srcset="https://images.arcade.futurecdn.net/@prod/_fill_w220_h291/sylius/assets/images/de/c3/c2c4a070905fe77a7ef78013a127.jpg, https://images.arcade.futurecdn.net/@prod/_fill_w440_h582/sylius/assets/images/de/c3/c2c4a070905fe77a7ef78013a127.jpg 2x" media="(min-width: 414px)"><img decoding="async" loading="lazy" srcset="" src="https://images.arcade.futurecdn.net/@prod/_fill_w220_h291/sylius/assets/images/de/c3/c2c4a070905fe77a7ef78013a127.jpg" alt="Country Life" width="220px" height="291px" class=></picture>
					  </div>
					</div>
					<div class="cre-productdispla-right-paragraph">
					  <div class="cre-productdispla-right-paragraph-inner">
						<div>
						<span class="cre-productdispla-right-paragraph-innerSpan">
							<p><strong>The very best of English life, every week.</strong>A subscription to Country Life — the UK’s only weekly perfect bound magazine — is a celebration of the best of British with modern rural life and all of its diverse joys and pleasures, delivered straight to your front door.</p>
						  
					  </span>
						  <p class="cre-belowChangeYear"></p>
							<p class="cre-productdispla-right-seeMore">Show more <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
							  <path d="M7 8.63333L0 1.63333L1.63333 0L7 5.36667L12.3667 0L14 1.63333L7 8.63333Z" fill="#E70A26"/>
							  </svg></span>
							</p>
							
						</div>
					  </div>
					</div>
					<div class="cre-subscription">
					  <div class="cre-subscription-inner">
						<h2 class="cre-subscription-leftHeader">Choose your subscription</h2>
						<h2 class="cre-subscription-rightHeader">Not ready to subscribe? <span>Buy a single issue instead</span></h2>
					  </div>
					  <div class="cre-document">
						<div class="cre-document-inner">
						  <input type="radio" id="cre-print-option" class="cre-document-print" name="cre-subscription-option" checked>
						  <label for="cre-print-option" class="cre-document-options cre-document-print-option">
							<div class="cre-document-btn-inner">
							  <div class="cre-document-btn-content">Print</div>
							  <p class="cre-document-btn-text">Print magazine delivered to your door</p>
							</div>
						  </label>
						  
						  <input type="radio" id="cre-digital-option" class="cre-document-digital" name="cre-subscription-option">
						  <label for="cre-digital-option" class="cre-document-options cre-document-digital-option">
							<div class="cre-document-btn-inner">
							  <div class="cre-document-btn-content">Digital</div>
							  <p class="cre-document-btn-text">Instant digital access</p>
							</div>
						  </label>
						</div>                                               
					  </div>
					  <div>
						<div class="cre-gift"><label class="cre-gift-label"><input data-testid="checkbox" type="checkbox" class="cre-gift-checkbox">
							<div class="cre-gift-wrapper">
							  <div class="cre-gift-inner"><svg aria-labelledby="svg-inline--fa-title-KekgjYzrAaGO" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-testid="icon" width="16" height="16">
								  <title id="svg-inline--fa-title-cre-checkboxsvg">check line icon</title>
								  <path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
								</svg></div>
							</div>
							<div class="cre-gift-content"><span class="cre-gift-span">This order will be a gift</span></div>
						  </label>
						</div>
					  </div>
					  <div class="cre-rooling-printing-subscription">
  
					  </div>
					  <div class="cre-rooling-printing-travel-subscription" style="display:none;">
  
					  </div>
					  <div class="cre-rooling-printing-standard-subscription" style="display:none;">
  
					  </div>
					  <div class="cre-rooling-digital-subscription">
  
					  </div>          
                      <p class="cre-rooling-subscription-totalPrice">Total price today: <span></span></p>
					  <p class="cre-rooling-subscription-subtotalPrice"></p>
					  <div class="cre-rooling-addBasket">
						<div class="cre-rooling-addBasket-wrapper">
						  <div class="cre-rooling-addBasket-inner"></div>
						  <div class="cre-rooling-addBasket-btn">
							<div class="cre-rooling-addBasket-btn-wrapper">
							  <button class="cre-rooling-addBasket-btnBtn">
								Add to basket
							  </button>
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
	</div>`;

		// JSON data
		var magazines = [
			{
				"url": "https://www.magazinesdirect.com/az-magazines/6936349/all-about-history-magazine-subscription",
				"description": "<p>The perfect magazine for history enthusiasts </p><p>Bringing History to life for readers of all ages</p><p> All About History is the perfect magazine for anyone who loves a blast to the past. One issue, you may be exploring a 17th-century café, the next, a feudal Japanese castle and you can even become acquainted with the workers and warriors who lived inside. With beautiful illustrations & in-depth articles and fratures, you'll learn something new in every issue.</p>"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/34206656/chat-subscription",
				"description": "<p>Chat reaches out to touch the reader through heart-stopping moments and the wit and grit of real-life. Bursting with energy, Chat tells the stories that get everyone talking. On top of the moving real-life stories, Chat's pages are bursting with prizes, puzzles, polls, fashion, telly news and gripping crime stories.</p>"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/34206771/country-homes-and-interiors-subscription",
				"description": "<p>Country Homes & Interiors showcases the most beautiful real homes, set in idyllic locations. It is the magazine that defines modern country style. </p><p>Every issue offers inspiration for relaxed, stylish interiors and gorgeous gardens. You'll also find delicious seasonal food and lifestyle ideas, as well as practical guidance in making improvements to your home and a glimpse into the lives of inspiring country people. </p><p>Subscribe to Country Homes & Interiors today – the UK's premier title dedicated to modern country life and style. Each issue is packed with stunning real homes, original looks and interior design ideas, seasonal food and gorgeous gardens – plus crafts, interviews and country lifestyle inspiration.</p>"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/41489131/25-beautiful-homes-subscription",
				"description": "<p>When you subscribe to 25 Beautiful Homes, you get more inspirational homes than any other magazine. Every issue is full of homes from all around the nation that intrigue, delight and inspire, showcasing the best of British interior transformations. Every month, you’ll find real-life decor tips, advice and lessons learnt from homeowners. </p><p>The building blocks of 25 Beautiful Homes are real-life houses that inspire. Covering city, town, coastal and country style in every issue, it features more projects than any other interiors magazine and is packed with aspirational yet achievable ideas. Subscribe today to receive a monthly fix of decorating solutions that you can use to create your own beautiful home.</p>"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/34206691/country-life-subscription",
				"description": "<p>A subscription to Country Life — the UK’s only weekly perfect bound magazine — is a celebration of the best of British with modern rural life and all of its diverse joys and pleasures, delivered straight to your front door. For over 125 years, it’s been our aim to: - Inspire you with Britain’s best properties, beautiful gardens and glorious architecture, all brought to life with truly stunning photography, expert opinion and practical tips. - Entertain you with interviews, features and fine writing that champions diverse subjects from rare antiques to rare-breed animals, medieval architecture to modern kitchens and Bach to bridge. - Inform you with our unparalleled expertise on what to buy, see, read, watch and listen to each week.</p>"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/34206701/country-life-special-subscription",
				"description": ""
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/34206751/cycling-weekly-subscription",
				"description": "<p>Cycling Weekly is your all round road cycling magazine. </p><p>Packed with the latest news from the biggest names and races in cycling, as well as grass-roots features on cycling clubs and local events. Stay up to date with all the latest bikes and equipment with our regular reviews and improve your performance with our expert practical, nutritional and training tips. Test yourself with our guides to routes and sportives near you.</p>"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/6936449/edge-magazine-subscription",
				"description": "<p>Edge is the leading multi-format video game magazine, with masterfully written articles for all things video games. Edge dives into gaming’s 8-bit roots all the way to the behemoths of the current age. Beautifully designed, Edge magazine is renowned for its stunning artwork which is unrivalled by any other gaming magazine out there.</p><p> In-depth articles giving insightful news on the latest in the video game industry, sneak peeks on the current masterpieces in development and detailed reviews of the video games asked for by the community - Edge has it all!</p>"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/34207231/golf-monthly-subscription",
				"description": "<p>Golf Monthly is packed with all the information you need to help improve your game.</p><p> Take your game to the next level with tips, drills and advice from top Tour Pros and the UK's top coaches. Impartial in-depth reviews of the latest equipment will ensure you buy the best whatever your budget and if you are looking to venture away with friends Golf Monthly will give you plenty of ideas of where to play and stay both in the UK and abroad.</p>"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/6936529/homebuilding-renovating-magazine-subscription",
				"description": "<p>Britain's No.1 for self-builders & home extenders</p><p> Homebuilding & Renovating is Britains best-selling magazine for self-builders, renovators and home extenders.</p><p> Whether youre hoping to build your dream home, add a kitchen extension, or aim to tackle a major remodelling scheme, each issue is packed with expert advice to help you complete your building project on time and within budget. From the latest products and advice on buying everything from windows to bathrooms, brilliant design ideas and inspiration, DIY tips, build cost secrets, to guidance on choosing the right architect and builder, youll find everything you need to know to ensure your project is a success. Plus, for the duration of your subscription, youll receive two free tickets to all Homebuilding & Renovating Shows worth up to 216!</p>"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/34207256/homes-and-gardens-subscription",
				"description": "<p>The best in design and decoration</p><p> Homes & Gardens has been shaping British style for 100 years. Aspirational, stylish and sophisticated, it showcases the best in interiors, decorating, gardens and entertaining inspiration.</p><p> Every month Homes & Gardens is packed full of beautiful houses in Britain and abroad, the latest decorating trends, the most stylish fabrics, furniture and accessories, expert advice and glorious gardens. Every interior style is covered, from classic to eclectic, plus you'll find stylish shopping and delicious recipes.</p><p> Showcasing the best in design and decorating, Homes & Gardens is Britain’s first home decorating magazine, and has been defining style for more than 100 years. An authority on style, every issue is a trove of interior and garden advice and tips you won’t find anywhere else. Covering both modern and traditional homes around the world, you can rely on us to provide the best features, articles and shopping inspiration.</p>"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/6936539/how-it-works-magazine-subscription",
				"description": "<p>How It Works is the action-packed science and technology magazine bursting with exciting information about our universe.</p> <p>How It Works’ expert explanations, dynamic cutaways and breathtaking images help its eager audience to understand and explore the wonders of the modern world. Making complex topics accessible for readers of all ages.</p> <p>How It Works stands for clarity, authority, intelligence and knowledge. It makes a perfect gift for curious minds.</p>"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/34207276/ideal-home-subscription",
				"description": "<p>Every issue of Ideal Home is packed with real homes, kitchen and bathroom makeovers, clever property improvements and décor ideas.</p> <p>You'll find stylish ways to evolve your interiors and tackle problem areas, plus clever storage solutions. Its expert editors find the best furniture, accessories, appliances and tech, as well as practical solutions for a smoother running home. With ideas for your outside space, simple recipes, travel and compelling real-life stories, there's a lot to love!</p> <p>Ideal Home has been defining good taste for 100 years and every issue presents accessible and affordable ways to make a home your own. It is the go-to title for people who want high-end interiors style for real homes and trusted advice on major home-improvement projects. Every issue is full of inspiring transformed properties, expert knowledge and curated design that busy, stylish readers keep coming back for.</p>"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/34248031/livingetc-subscription",
				"description": "<p>Livingetc is the best-selling modern homes magazine. The forefront of design and innovation, every issue presents the ”now and next” in home design - bringing you fresh and unique ideas in renovation. From high-end design to high street finds, Livingetc edits the best of modern home design and lifestyle buys.</p>"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/6936589/maclife-magazine-subscription",
				"description": ""
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/6936599/maximum-pc-magazine-subscription",
				"description": "<p>MAXIMUM PC IS THE ULTIMATE RESOURCE FOR ALL THINGS PC. Each and every issue is jam-packed with punishing product reviews, exciting how-to stories, and illuminating editorials of the latest crave-worthy gear.</p>"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/6936609/metal-hammer-magazine-subscription",
				"description": "<p>Metal Hammer is the world's biggest and greatest heavy music magazine, bringing you all the very best in metal, rock, punk, hardcore and beyond every month.</p>"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/34207321/motorboat-and-yachting-subscription",
				"description": "<p>Motor Boat & Yachting is Europe’s best loved motor boat magazine.</p><p>Every month it’s packed full of inspirational cruising destinations, rigorous boat tests, fascinating technical innovations and expert advice. From the very latest new model launches to the best secondhand buys and readers’ own running reports, we aim to bring you the most complete and informative magazine about buying, running and cruising motor boats of all types and sizes.</p>"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/6936649/period-living-magazine-subscription",
				"description": "<p>Celebrating classic homes & timeless style.</p><p>Period Living is the complete lifestyle package for period homeowners and those who just love timeless style.<p> Every issue is filled with inspiration and expert advice for decorating, improving and renovating your home, as well as ideas for creating your dream garden. Youll also find insight into buying antiques and vintage, fascinating special features about historic people and events, delicious recipes, guides to heritage cities and towns, and much more.Your magazine will arrive each month in sustainable, plastic-free packaging, so you can be sure youre making the right choice for your home and the environment.</p><p>Period Living is Britain's best-selling period homes magazine, packed with unique ideas you just won't find anywhere else. The whole team is committed to bringing you the most beautiful real homes and gardens, with expert advice and inspiration to help you to achieve your own ambitions however big or small. A monthly subscription will arm you everything you need to blend old and new with flair and originality, as we champion the best British heritage brands and independent designer-makers. Featuring fascinating stories and stunning photography, Period Living will immerse you in a world of nostalgia and heritage, inspiring you to indulge in simpler, more comforting pursuits centred around the home and garden.</p>"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/6936814/photography-week-magazine-subscription",
				"description": ""
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/6936824/plotfinder-subscription",
				"description": ""
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/34207381/practical-boat-owner-subscription",
				"description": "<p>Practical Boat Owner is the biggest selling boating title in the UK for over 50 years featuring readers sharing knowledge and experience with other readers. If you want to save money and improve your boat, PBO has it covered. If you dream of building your own boat or buying a project to work on – look no further.</p>"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/34207421/rugby-world-subscription",
				"description": "<p>The voice of global rugby, Rugby World provides unrivalled access to the players and coaches that define the sport. Read less </p><p> Rugby World offers a comprehensive package of all things rugby, from exclusive interviews with the game's biggest names to hard-hitting opinion on the major talking points in the sport from our columnists. Plus, there is behind-the-scenes insight, with technical analysis as well as advice from pro players and coaches. </p><p>Since 1960, Rugby World has provided unrivalled, in-depth coverage of the sport we love. It is a heritage we are proud of and today we bring you the brightest stories, hardest-hitting opinions and most arresting characters in our game, at all levels. From British & Irish Lions tours to grass-roots rugby heroes, we have you covered. </p><p>In every issue of Rugby World we feature interviews with the biggest stars of the game and deliver the best writers in rugby to analyse and debate issues that matter to you. With advice and expertise also coming from the pros, we are a must for rugby lovers.</p>"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/34207446/style-at-home-subscription",
				"description": "<p>Style at Home is the magazine for home lovers who know that making a place their own doesn't have to cost a fortune.</p><p> Be inspired by the real homes, full of creative ideas and solutions, and the stunning kitchen and bathroom transformations – all done on a tight budget. The Style Book is your fix of You’ll also find best-buys, home-improvement advice, DIY tricks, simple makes and no-fuss recipes.</p>"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/34207551/the-field-subscription",
				"description": "<p>Founded in 1853, we cover the best of game shooting, flyfishing, hunting, sporting dogs and everything else that makes life in the British countryside uniquely enjoyable.</p>"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/34207516/tv-and-satellite-week-subscription",
				"description": "<p>TV&Satellite Week lists more channels than any other UK TV magazine, making it the must-have guide for any discerning viewer.</p><p>With clear, easy-to-use listings plus comprehensive previews of the week's best new TV shows, films and sport, TV&Satellite Week is the must-have guide for any Virgin or Sky subscriber. TV&Satellite Week guides its readers to the most exciting and innovative programmes on digital TV.</p>"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/34207496/tv-times-subscription",
				"description": "<p>TV Times is Britain's best loved TV guide</p><p> Every week TV Times talks to the biggest stars and goes behind the scenes of the nation's favorite shows. </p><p>TV Times is a heritage brand that you can trust to deliver a cracking read every week along with brilliant listings that allow the you to make an informed choice on what to watch. </p><p>Enjoy exclusive shoots and interviews, the latest news, unrivalled soaps coverage, pages of film reviews and a daily spread of highlights where the best shows are previewed and rated! Plus, with 42 pages of listings, TV Times is an essential and comprehensive guide to the week's TV.</p>"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/34207731/wallpaper-subscription",
				"description": "<p>The global design authority </p><p> Truly international, consistently intelligent and hugely influential, Wallpaper* is the world's most important design and style magazine.</p><p> It attracts the most sophisticated global audience by constantly pushing into new creative territories and ensuring its coverage of everything from architecture to motoring, fashion to travel, and interiors to jewellery remains unrivalled.</p>"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/34207726/woman-subscription",
				"description": "<p>Woman's Own celebrates 40 plus women who value their family and friends and are passionate about getting the best out of life.</p><p>Every week, Woman's Own presents compelling celebrity access, a real-life features mix, which is both emotional and uplifting whilst championing health, wellbeing and value.</p>"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/34207711/woman-and-home-subscription",
				"description": "<p>Take time for you with woman&home</p><p>Here at woman&home magazine, we celebrate amazing women from all walks of life.</p><p>Each month you’ll love our lifestyle features: from finding confidence in your fifties to how to handle your menopause; from midlife reinvention to turning your passion into a business. We present beauty that’s right for your age - skincare that really works, hair to suit you, make-up refreshers that will inspire. Plus the best fashion advice you’ll ever get: beautiful outfits, shopping at every price point, tips on how to dress at the weekend, best dressed guest rules and more. Our homes pages will give you brilliant creative ideas for yours, there’s fabulous food to impress your family and guests. And of course there’s our amazing travel trips and bespoke offers, from UK spa breaks with your girlfriends to intrepid, once-in-a-lifetime long-haul journeys. Treat yourself to a subscription to woman&home magazine – it’s all about you.</p>"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/34257846/woman-and-home-feel-good-you-subscription",
				"description": ""
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/34257816/womans-own-subscription",
				"description": "<p>Woman's Own celebrates 40 plus women who value their family and friends and are passionate about getting the best out of life.</p><p> Every week, Woman's Own presents compelling celebrity access, a real-life features mix, which is both emotional and uplifting whilst championing health, wellbeing and value.</p>"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/34207706/womans-weekly-subscription",
				"description": "<p>Woman’s Weekly is packed with inspiring ideas and useful information for women who are at the heart of their homes and families.</p><p> Every issue features delicious recipes developed and tested in the magazine's own kitchen, the latest health news, entertaining short stories, brilliantly edited fashion features and beauty advice, gorgeous craft and home ideas and absorbing real life stories.</p>"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/34207741/yachting-monthly-subscription",
				"description": "<p>Yachting Monthly provides an entertaining mix of expert advice and skills, the latest boats and gear, and inspiring cruising stories and destinations.</p><p> Perfect for cruising sailors with all levels of experience. Whether cruising across the Channel, around the coast or further afield, Yachting Monthly brings you the information you need to get the most from your sport.</p>"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/47028262/yachting-world-subscription",
				"description": "<p>Yachting World brings you the very best in world class yachting, from blue water cruiser to super-yacht</p><p> Our coverage is broad, bringing you the latest news on international racing and cruising events, destination guides, reviews of the world's finest yachts plus in-depth equipment reports and analysis.</p>"
			}
		];


		//   ----------------------------MAG22 Function-------------------------------------
		var heroIntro = `<div class="cre-t-22-heroHeading">
  <div class="cre-t-22-heroHeading-wrapper">
  <div class="cre-t-22-blueheading">
	<div class="cre-t-22-blueheading_wrapper">
	  <p>THE OFFICIAL PUBLISHER OF IDEAL HOME</p>
	</div>
  </div>
	<h1 class="cre-t-22_header" style="color: black;">The cheapest place to subscribe to Ideal Home—guaranteed</h1>
	<h2 class="cre-t-22_subHeader">Subscribe now from only £1 per issue!</h2>
	
	<ul class="cre-t-22-list">
	  <li>
		<p>Delivery included</p>
	  </li>
	  <li>
		<p>Never miss an issue</p>
	  </li>
	  <li>
		<p>Easy to cancel anytime</p>
	  </li>
	</ul>
  </div>
  
  </div>`;

		var about = `<div class="cre-t-22-about">
  <div class="cre-t-22-about-wrapper">
  <div class="cre-t-22-about_heading">
  <div class="cre-t-22-about_heading-wrapper">
	<h3></h3>
  </div>
  
   <div class="cre-t-22-about_content">
  <div class="cre-t-22-about_content-wrapper">
  
  </div>
  
  </div>
   <div class="cre-t-22-lookInsideBtn">
						  <p class="pull-left">Look inside</p> 
						  <i class="fa-solid fa-share border border-danger border-2 rounded-circle text-danger p-1" style=" font-size: 14px;"></i>
  </div>
   
  </div>
  </div>
  <div class="promisesbox">
			  <p id="lefthandside_headline" class="headline"></p>
			  <div id="lefthandside_text"><h5>&nbsp;</h5><ul>	<li>	<p><strong>£10 Vex Gift Card</strong><br>	Claim your £10 Vex Gift Card valid on over 100 different retailers.&nbsp; Only available to new UK Print subscribers <a href="https://www.magazinesdirect.com/corporate/terms-and-conditions/#Mother's%20Day%202024%20(UK)">(Terms apply)</a></p>	</li>	<li><strong>Convenient home delivery&nbsp;</strong></li></ul><p>No need to head to the shops, have every issue delivered direct to your door.</p><ul>	<li><strong>Best price guarantee</strong></li></ul><p>All subscriptions come with a best price guarantee, so we'll refund the difference if you find them cheaper anywhere else.&nbsp;</p><ul>	<li>	<h5>No hidden costs</h5>	<p>There are no hidden costs and all postage and delivery costs are included in our prices.&nbsp;</p>	</li>	<li>	<h5><strong>You're in control</strong></h5>	</li></ul><p>Manage your subscriptions via our self-service website <a href="https://www.mymagazine.co.uk">mymagazine.co.uk</a></p></div>
		  </div></div>`;

		var faQ = `<div class="row faqs_container" id="cre-faqs_container">
  
  
  
  
  <div id="cre_magazine-faqs" class="choose-faq magazine faqs active" style="display: none;">
  <h1 class="FAQ_header" style="color: black;">Frequently Asked Questions</h1>
  <div class="faq-container ui-accordion ui-widget ui-helper-reset">
  <div class="faq-question cre-t-faq-1">
  <h2 class="question ui-accordion-header ui-accordion-header-collapsed ui-state-default ui-accordion-icons ui-corner-all">I can't find the subscriptions offer I'm looking for.<span class="ui-accordion-header-icon ui-icon ui-icon-carat-1-e"></span></h2>
  <div class="answer ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content accordion-content-active">
	<p>If the promotion you have seen is still valid but not showing on screen, you can try to <a class="promCodeChange eventtrack redText" href="">change the offer by clicking here</a>.&nbsp; You will need to enter a specific code you've been sent, which are typically 4 or 5 characters long.</p>
  </div>
  </div>
  <div class="faq-question cre-t-faq-2">
  <h2 class="question ui-accordion-header ui-accordion-header-collapsed ui-state-default ui-accordion-icons ui-corner-all">Why does pricing vary from country to country?<span class="ui-accordion-header-icon ui-icon ui-icon-carat-1-e"></span></h2>
  <div class="answer ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content accordion-content-active">
	<p>All items purchased include the cost of delivery within the price. As the cost of postage can vary quite significantly between different regions and mailing locations, this is reflected in the price.</p>
  </div>
  </div>
  <div class="faq-question cre-t-faq-3">
  <h2 class="question ui-accordion-header ui-accordion-header-collapsed ui-state-default ui-accordion-icons ui-corner-all">How do you guarantee lowest prices?<span class="ui-accordion-header-icon ui-icon ui-icon-carat-1-e"></span></h2>
  <div class="answer ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content accordion-content-active">
	<p>Magazinesdirect.com is owned and run by Future Publishing Limited who publish all the magazines on the site. As such, we can guarantee our prices are lower than you will find elsewhere.</p>
  </div>
  </div>
  <div class="faq-question cre-t-faq-4">
  <h2 class="question ui-accordion-header ui-accordion-header-collapsed ui-state-default ui-accordion-icons ui-corner-all">What is a 'rolling subscription'?<span class="ui-accordion-header-icon ui-icon ui-icon-carat-1-e"></span></h2>
  <div class="answer ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content accordion-content-active">
	<p>A rolling subscription provides continuous service until you choose to cancel. This means that you'll benefit from uninterrupted deliveries and you'll never miss an issue again. If you change your mind, you can cancel the auto-renewal at any time and you'll only receive the remaining issues for which you've already paid.</p>
  </div>
  </div>
  <div class="faq-question cre-t-faq-5">
  <h2 class="question ui-accordion-header ui-accordion-header-collapsed ui-state-default ui-accordion-icons ui-corner-all">Can I buy a subscription if I do not live in the UK?<span class="ui-accordion-header-icon ui-icon ui-icon-carat-1-e"></span></h2>
  <div class="answer ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content accordion-content-active">
	<p>Yes, just make sure you select the relevant country above. All prices include packaging and delivery charges.</p>
  </div>
  </div>
  <div class="faq-question cre-t-faq-6">
  <h2 class="question ui-accordion-header ui-accordion-header-collapsed ui-state-default ui-accordion-icons ui-corner-all">Can I buy this item as a gift?<span class="ui-accordion-header-icon ui-icon ui-icon-carat-1-e"></span></h2>
  <div class="answer ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content accordion-content-active">
	<p>Yes, all products can be delivered to the address of your choosing. The only requirement is that the delivery country must match the country selected when you add something to your basket. You can choose the specific delivery address as part of the checkout process.</p>
  </div>
  </div>
  <div class="faq-question cre-t-faq-7">
  <h2 class="question ui-accordion-header ui-accordion-header-collapsed ui-state-default ui-accordion-icons ui-corner-all">How long will it take for my subscription to be delivered?<span class="ui-accordion-header-icon ui-icon ui-icon-carat-1-e"></span></h2>
  <div class="answer ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content accordion-content-active">
	<p>Estimated delivery dates for the first issue are displayed during the checkout process.  All subsequent issues should be received around the 'on-sale date' of the magazine except for international deliveries where it can take an additional 14 days (for UK based magazines) and 30 days (for US based magazines).</p>
  </div>
  </div>
  <div class="faq-question cre-t-faq-8">
  <h2 class="question ui-accordion-header ui-accordion-header-collapsed ui-state-default ui-accordion-icons ui-corner-all">I am missing an issue, what can I do?<span class="ui-accordion-header-icon ui-icon ui-icon-carat-1-e"></span></h2>
  <div class="answer ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content accordion-content-active">
   <p>You can request a replacement via your subscription management site <a href="https://www.mymagazine.co.uk/" target="_blank" class="redText">www.mymagazine.co.uk</a>. Alternatively, please contact our <a href="https://www.magazinesdirect.com/corporate/contact-us/" target="_blank" class="redText">customer services team</a>.</p>
  </div>
  </div>
  <div class="faq-question cre-t-faq-9">
  <h2 class="question ui-accordion-header ui-accordion-header-collapsed ui-state-default ui-accordion-icons ui-corner-all">Can I choose my subscription start date?<span class="ui-accordion-header-icon ui-icon ui-icon-carat-1-e"></span></h2>
  <div class="answer ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content accordion-content-active">
   <p>Yes.&nbsp; Subscriptions are automatically set to start with the next available issue to be published, but this can be changed (subject to stock) at the basket and checkout steps.&nbsp; Between October and December each year, we automatically set gift subscriptions to begin in the New Year to avoid spoiling a Christmas surprise, but again this can be changed at the basket and checkout steps if you wish.&nbsp;</p>
  </div>
  </div>
  <div class="faq-question cre-t-faq-10">
  <h2 class="question ui-accordion-header ui-accordion-header-collapsed ui-state-default ui-accordion-icons ui-corner-all">How do I download a gift card?<span class="ui-accordion-header-icon ui-icon ui-icon-carat-1-e"></span></h2>
  <div class="answer ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content accordion-content-active">
  <p>This can be done via the 'thank you' page once you've completed your purchase.&nbsp; Here you can schedule a card to be sent via email or you can print it out to hand over yourself.&nbsp; An alternative design is also available for downloading via <a href="https://www.mymagazine.co.uk" class="redText">www.mymagazine.co.uk</a>, where you can also manage other areas of your subscription.</p>
  </div>
  </div>
  <div class="faq-question cre-t-faq-11">
  <h2 class="question ui-accordion-header ui-accordion-header-collapsed ui-state-default ui-accordion-icons ui-corner-all">How do I renew or cancel my subscription?<span class="ui-accordion-header-icon ui-icon ui-icon-carat-1-e"></span></h2>
  <div class="answer ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content accordion-content-active">
  <p>This can be done via your subscription management site <a href="https://www.mymagazine.co.uk/" target="_blank" class="redText">www.mymagazine.co.uk</a>.</p>
  </div>
  </div>
  <div class="faq-question cre-t-faq-12">
  <h2 class="question ui-accordion-header ui-accordion-header-collapsed ui-state-default ui-accordion-icons ui-corner-all">How do I choose my delivery / subscription start date?<span class="ui-accordion-header-icon ui-icon ui-icon-carat-1-e"></span></h2>
  <div class="answer ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content accordion-content-active">
  <p>This can be done at the basket and checkout steps. Simply add an item to your basket and you will see the option to choose your preferred start issue within the summary area.</p>
  </div>
  </div>
  <div class="faq-question cre-t-faq-13">
  <h2 class="question ui-accordion-header ui-accordion-header-collapsed ui-state-default ui-accordion-icons ui-corner-all">I'm having trouble purchasing - who can help me?<span class="ui-accordion-header-icon ui-icon ui-icon-carat-1-e"></span></h2>
  <div class="answer ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content accordion-content-active">
  <p>Please contact our <a href="https://www.magazinesdirect.com/corporate/contact-us/" target="_blank" class="redText">customer services team</a> who will be happy to help.</p>
  </div>
  </div>
  <div class="faq-question cre-t-faq-14">
  <h2 class="question ui-accordion-header ui-accordion-header-collapsed ui-state-default ui-accordion-icons ui-corner-all">Can I read this product on my phone, tablet or computer?<span class="ui-accordion-header-icon ui-icon ui-icon-carat-1-e"></span></h2>
  <div class="answer ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content accordion-content-active">
  <p>Yes! Our digital subscriptions, single issues and guides &amp; specials<strong> </strong>are all available on iPad, iPhone and Android devices. A 'web reader' is also available for other internet connected devices.</p>
  </div>
  </div>
  </div>
  </div>
  </div>`;



		var headingText = [
			{
				"url": "https://www.magazinesdirect.com/az-magazines/34206751/cycling-weekly-subscription",
				"heading": "Cycling Weekly"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/6936529/homebuilding-renovating-magazine-subscription",
				"heading": "Homebuilding & Renovating"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/6936599/maximum-pc-magazine-subscription",
				"heading": "Maximum PC"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/34207711/woman-and-home-subscription",
				"heading": "Woman & Home"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/34257816/womans-own-subscription",
				"heading": "Woman's Own"
			},
			{
				"url": "https://www.magazinesdirect.com/az-magazines/34207706/womans-weekly-subscription",
				"heading": "Woman's Weekly"
			},
		];
		function new_dynamic_pricing() {
			var lowestPricePerIssue = Infinity;
			var matches, symbol;
			document.querySelectorAll('#pricingblock #digital-pricing .price-statement').forEach(function (e) {
				if (e.innerHTML.indexOf('£') != -1) {
					symbol = '£';
					matches = e.innerHTML.match(/£([\d.]+) .*?\/ (\d+) issue[s]?/);

					if (matches && matches.length === 3) {
						var price = parseFloat(matches[1]);
						var issues = parseInt(matches[2]);
						var pricePerIssue = price / issues;
						pricePerIssue = Math.ceil(pricePerIssue * 100) / 100;
						// Output the result
						//   console.log("£" + price.toFixed(2) + " / " + issues + " = £" + pricePerIssue);

						if (pricePerIssue < lowestPricePerIssue) {
							lowestPricePerIssue = pricePerIssue;
						}
					}
				} else if (e.innerHTML.indexOf('$') != -1) {
					matches = e.innerHTML.match(/\$([\d.]+) .*?\/ (\d+) issue[s]?/)
					symbol = '$';
					if (matches && matches.length === 3) {
						var price = parseFloat(matches[1]);
						var issues = parseInt(matches[2]);
						var pricePerIssue = price / issues;
						pricePerIssue = Math.ceil(pricePerIssue * 100) / 100;
						// Output the result
						//   console.log("$" + price.toFixed(2) + " / " + issues + " = $" + pricePerIssue);

						if (pricePerIssue < lowestPricePerIssue) {
							lowestPricePerIssue = pricePerIssue;
						}
					}
				} else {
					matches = e.innerHTML.match(/€([\d.]+) .*?\/ (\d+) issue[s]?/);
					symbol = '€';
					if (matches && matches.length === 3) {
						var price = parseFloat(matches[1]);
						var issues = parseInt(matches[2]);
						var pricePerIssue = price / issues;
						pricePerIssue = Math.ceil(pricePerIssue * 100) / 100;
						// Output the result
						//   console.log("€" + price.toFixed(2) + " / " + issues + " = €" + pricePerIssue);

						if (pricePerIssue < lowestPricePerIssue) {
							lowestPricePerIssue = pricePerIssue;
						}
					}


				}

			});

			// console.log("Lowest Price per Issue: " + symbol + lowestPricePerIssue.toFixed(2));

			if (document.querySelector('.cre-t-22_subHeader')) {
				document.querySelector('.cre-t-22_subHeader').innerHTML = 'Subscribe now from only ' + symbol + lowestPricePerIssue.toFixed(2) + ' per issue!';
			}
		}

		function newUpdate() {
			headingText.forEach(function (item) {
				if (currentUrl.indexOf(item.url) !== -1) {
					// If there is a match, log the corresponding heading to the console
					// console.log('----------------------------',item.heading);

					if (document.querySelector('.cre-t-22-about_heading-wrapper h3')) {
						document.querySelector('.cre-t-22-about_heading-wrapper h3').innerHTML = 'About ' + item.heading
					}

					if (document.querySelector('.cre-t-22-blueheading_wrapper p')) {
						document.querySelector('.cre-t-22-blueheading_wrapper p').innerHTML = 'THE OFFICIAL PUBLISHER OF ' + item.heading
					}

					if (document.querySelector('.cre-t-22_header')) {
						document.querySelector('.cre-t-22_header').innerHTML = 'The lowest subscription price to <br>' + item.heading + '—guaranteed';
					}

					// h1#boxessetup-row_2-subheader
					waitForElement('h1#boxessetup-row_2-subheader', function () {
						document.querySelector('h1#boxessetup-row_2-subheader').innerHTML = 'What’s inside ' + item.heading + '?';
					});
				}
			});
		}
		//   logDescription(currentUrl, jsonObject);
		function dynamic_HTML() {
			waitForElement('#pageheadline', function () {
				var str = document.querySelector('#pageheadline').innerHTML;
				var endIndex, result;

				if (str.indexOf(' Magazine Subscription') != -1) {
					endIndex = str.indexOf(' Magazine Subscription');
					result = str.substring(0, endIndex);
				} else if (str.indexOf(' magazine subscription') != -1) {
					endIndex = str.indexOf(' magazine subscription');
					result = str.substring(0, endIndex);
				}
				else {
					result = str;
				}

				if (document.querySelector('.cre-t-22-about_heading-wrapper h3')) {
					document.querySelector('.cre-t-22-about_heading-wrapper h3').innerHTML = 'About' + result
				}

				if (document.querySelector('.cre-t-22-blueheading_wrapper p')) {
					document.querySelector('.cre-t-22-blueheading_wrapper p').innerHTML = 'THE OFFICIAL PUBLISHER OF ' + result
				}

				if (document.querySelector('.cre-t-22_header')) {
					document.querySelector('.cre-t-22_header').innerHTML = 'The lowest subscription price to <br>' + result + '—guaranteed';
				}

				// h1#boxessetup-row_2-subheader
				waitForElement('h1#boxessetup-row_2-subheader', function () {
					document.querySelector('h1#boxessetup-row_2-subheader').innerHTML = 'What’s inside ' + result + '?';
				});

				newUpdate();
			});
		}

		function dynamic_pricing() {
			var lowestPricePerIssue = Infinity;
			var matches, symbol;
			document.querySelectorAll('#pricingblock #print-pricing .price-statement').forEach(function (e) {
				if (e.innerHTML.indexOf('£') != -1) {
					symbol = '£';
					matches = e.innerHTML.match(/£([\d.]+) .*?\/ (\d+) issue[s]?/);

					if (matches && matches.length === 3) {
						var price = parseFloat(matches[1]);
						var issues = parseInt(matches[2]);
						var pricePerIssue = price / issues;
						pricePerIssue = Math.ceil(pricePerIssue * 100) / 100;
						// Output the result
						//   console.log("£" + price.toFixed(2) + " / " + issues + " = £" + pricePerIssue);

						if (pricePerIssue < lowestPricePerIssue) {
							lowestPricePerIssue = pricePerIssue;
						}
					}
				} else if (e.innerHTML.indexOf('$') != -1) {
					matches = e.innerHTML.match(/\$([\d.]+) .*?\/ (\d+) issue[s]?/)
					symbol = '$';
					if (matches && matches.length === 3) {
						var price = parseFloat(matches[1]);
						var issues = parseInt(matches[2]);
						var pricePerIssue = price / issues;
						pricePerIssue = Math.ceil(pricePerIssue * 100) / 100;
						// Output the result
						//   console.log("$" + price.toFixed(2) + " / " + issues + " = $" + pricePerIssue);

						if (pricePerIssue < lowestPricePerIssue) {
							lowestPricePerIssue = pricePerIssue;
						}
					}
				} else {
					matches = e.innerHTML.match(/€([\d.]+) .*?\/ (\d+) issue[s]?/);
					symbol = '€';
					if (matches && matches.length === 3) {
						var price = parseFloat(matches[1]);
						var issues = parseInt(matches[2]);
						var pricePerIssue = price / issues;
						pricePerIssue = Math.ceil(pricePerIssue * 100) / 100;
						// Output the result
						//   console.log("€" + price.toFixed(2) + " / " + issues + " = €" + pricePerIssue);

						if (pricePerIssue < lowestPricePerIssue) {
							lowestPricePerIssue = pricePerIssue;
						}
					}


				}

			});

			// console.log("Lowest Price per Issue: " + symbol + lowestPricePerIssue.toFixed(2));

			if (document.querySelector('.cre-t-22_subHeader')) {
				document.querySelector('.cre-t-22_subHeader').innerHTML = 'Subscribe now from only ' + symbol + lowestPricePerIssue.toFixed(2) + ' per issue!';
			}
		}

		function priceUpdate() {
			var lowestPricePerIssue = Infinity;
			var matches, symbol;
			document.querySelectorAll('#pricingblock .price-statement').forEach(function (e) {
				if (e.innerHTML.indexOf('£') != -1) {
					symbol = '£';
					matches = e.innerHTML.match(/£([\d.]+) .*?\/ (\d+) issue[s]?/);

					if (matches && matches.length === 3) {
						var price = parseFloat(matches[1]);
						var issues = parseInt(matches[2]);
						var pricePerIssue = price / issues;
						pricePerIssue = Math.ceil(pricePerIssue * 100) / 100;
						// Output the result
						//   console.log("£" + price.toFixed(2) + " / " + issues + " = £" + pricePerIssue);

						if (pricePerIssue < lowestPricePerIssue) {
							lowestPricePerIssue = pricePerIssue;
						}
					}
				} else if (e.innerHTML.indexOf('$') != -1) {
					matches = e.innerHTML.match(/\$([\d.]+) .*?\/ (\d+) issue[s]?/)
					symbol = '$';
					if (matches && matches.length === 3) {
						var price = parseFloat(matches[1]);
						var issues = parseInt(matches[2]);
						var pricePerIssue = price / issues;
						pricePerIssue = Math.ceil(pricePerIssue * 100) / 100;
						// Output the result
						//   console.log("$" + price.toFixed(2) + " / " + issues + " = $" + pricePerIssue);

						if (pricePerIssue < lowestPricePerIssue) {
							lowestPricePerIssue = pricePerIssue;
						}
					}
				} else {
					matches = e.innerHTML.match(/€([\d.]+) .*?\/ (\d+) issue[s]?/);
					symbol = '€';
					if (matches && matches.length === 3) {
						var price = parseFloat(matches[1]);
						var issues = parseInt(matches[2]);
						var pricePerIssue = price / issues;
						pricePerIssue = Math.ceil(pricePerIssue * 100) / 100;
						// Output the result
						//   console.log("€" + price.toFixed(2) + " / " + issues + " = €" + pricePerIssue);

						if (pricePerIssue < lowestPricePerIssue) {
							lowestPricePerIssue = pricePerIssue;
						}
					}


				}

			});

			// console.log("Lowest Price per Issue: " + symbol + lowestPricePerIssue.toFixed(2));

			if (document.querySelector('.cre-t-22_subHeader')) {
				document.querySelector('.cre-t-22_subHeader').innerHTML = 'Subscribe now from only ' + symbol + lowestPricePerIssue.toFixed(2) + ' per issue!';
			}
		}

		waitForElement('.magazine-header.cover-top .px-0', function () {
			var str = document.querySelector('.magazine-header.cover-top .px-0').getAttribute('style')
			var regex = /url\(['"]?([^'"]+?)['"]?\)/;
			var match = str.match(regex);

			if (match) {
				var url = match[1];
				// console.log(url);
				document.querySelector('.magazine-header.cover-top .px-0').setAttribute('style', 'background: url(' + url + '); background-size: cover;')
			}
		});


		live(".cre-t-22-lookInsideBtn", "click", function () {
			document.querySelector('#lookInsideSampler').click()
		})

		live(".faq-question h2", "click", function (e) {
			var parent = this.closest('.faq-question')
			var icon = parent.querySelector('.ui-icon')
			parent.classList.toggle('cre-active');
			icon.classList.toggle('ui-icon-carat-1-s');
		})
		// --------------------------------MAG22 END--------------------------------------------------


		if (window.location.href.indexOf('woman-and-home-subscription') != -1) {
			waitForElement('#magazinesize-select', function () {
				newUrl();
			});
		}

		function newUrl() {
			// https://www.magazinesdirect.com/az-magazines/34207711/woman-and-home-subscription.thtml
			// if(window.location.href.indexOf('woman-and-home-subscription') != -1){
			var newHtml = `<div class="cre-size-document" style="display:none">
			<h2 class="cre-size-leftHeader">Magazine Size</h2>
			<div class="cre-document-inner">
			  
			  <div class="cre-document-options cre-document-standard-option active">
				<div class="cre-document-btn-inner">
				  <div class="cre-document-btn-content">Standard (approx A4)</div>
				  <p class="cre-document-btn-text">Print magazine delivered to your door</p>
				</div>
			  </div>
		  
			  
			  <div class="cre-document-options cre-document-Travel-option">
				<div class="cre-document-btn-inner">
				  <div class="cre-document-btn-content">Travel (approx A5)</div>
				  <p class="cre-document-btn-text">Print magazine delivered to your door</p>
				</div>
			  </div>
			</div>
		  </div>
		  `;

			waitForElement('.cre-document', function () {
				if (!document.querySelector('.cre-size-document')) {
					document.querySelector('.cre-document').insertAdjacentHTML('afterend', newHtml)
				}
			});
			// }
		}

		/* Variation Init */
		function init() {
			// -----------------------------------MAG22---------------------------------------------------
			addClass('body', 'cre-t-MAG22')
			if (!document.querySelector('.cre-t-22-heroHeading')) {
				insertHtml('.magazine-intro', heroIntro, 'beforeend')
			}

			if (!document.querySelector('.cre-t-22-about')) {
				insertHtml('.promises', about, 'beforeend')
			}

			if (!document.querySelector('#cre-faqs_container')) {
				insertHtml('#faqs_container', faQ, 'beforebegin')
			}

			if (!document.querySelector('.cre-img')) {
				insertHtml('#boxessetup.subsTab_container', '<img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/magazinesdirect/MAG22/heroImg.png" class="cre-img">', 'afterbegin')
			}



			dynamic_HTML();
			if (currentUrl.indexOf('/az-magazines/6936599/maximum-pc-magazine-subscription') == -1 && currentUrl.indexOf('/az-magazines/6936589/maclife-magazine-subscription') == -1) {
				waitForElement('#pricingblock #print-pricing .price-statement', function () {
					waitForElement('#pricingblock #print-pricing .price-statement', function () {
						var total = 0;
						var lowestValue = Infinity; // Set initial lowest value to positive infinity
						var symbol
						document.querySelectorAll('#pricingblock #print-pricing .red-text:not(.hidden)').forEach(function (e) {
							var text = e.innerHTML;
							var regex = /[0-9]+(\.[0-9]+)?/g; // Regular expression to match all numbers with or without decimal point
							var matches = text.match(regex);

							if (matches && text.indexOf('per issue') != -1) {
								total = total + 1;

								for (var i = 0; i < matches.length; i++) {
									var value = parseFloat(matches[i]);
									if (value < lowestValue) {
										lowestValue = value;
									}
								}

							}

							if (text.indexOf('£') != -1) {
								symbol = '£';
							} else if (text.indexOf('€') != -1) {
								symbol = '€';
							} else if (text.indexOf('$') != -1) {
								symbol = '$';
							}
						})


						if (total != 0) {
							if (document.querySelector('.cre-t-22_subHeader')) {
								document.querySelector('.cre-t-22_subHeader').innerHTML = 'Subscribe now from only ' + symbol + lowestValue.toFixed(2) + ' per issue!';
							}
							//   console.log('lowestvalue: '+ symbol +lowestValue.toFixed(2)); 
						} else {
							if (currentUrl.indexOf('/az-magazines/6936599/maximum-pc-magazine-subscription') == -1 && currentUrl.indexOf('/az-magazines/6936589/maclife-magazine-subscription') == -1) {
								// console.log('---------------working')
								dynamic_pricing();
							}
						}

					})


				});
			}

			if (currentUrl.indexOf('/az-magazines/6936599/maximum-pc-magazine-subscription') != -1 || currentUrl.indexOf('/az-magazines/6936589/maclife-magazine-subscription') != -1) {
				waitForElement('.cre-t-22_subHeader', function () {
					new_dynamic_pricing();
				});

			}

			if (currentUrl.indexOf('/az-magazines/6936814/photography-week-magazine-subscription') != -1) {
				waitForElement('.cre-t-22_subHeader', function () {
					priceUpdate();
				});

			}
			// ------------------------------------------------------------MAG22 END-----------------------------------------------------------
			addClass("body", "cre-countryLife-t-1")
			addClass("body", "cre-PrintBtn");


			waitForElement(".row.subscription", function () {
				if (!document.querySelector(".cre-countryLife")) {
					insertHtml(".row.subscription", creCountryLife, "afterend");
				}
			});

			waitForElement(".cre-productdispla-right-headerText", function () {
				var originalText = document.querySelector('#pageheadline').innerText;
				var newText = originalText.replace('Magazine Subscription', '').trim();

				var headerElement = document.querySelector('.cre-productdispla-right-headerText');
				if (headerElement) {
					headerElement.innerText = newText;
				}
			});

			waitForElement(".cre-productdispla-left-pictureImg", function () {
				waitForElement("#rhs-mag-coverImage-box #rhs-mag-coverImage", function () {
					var coverImageSrc = document.querySelector("#rhs-mag-coverImage-box #rhs-mag-coverImage").src;

					var sources = document.querySelectorAll(".cre-productdispla-left-picture source");
					var sourcesSrc = document.querySelectorAll(".cre-productdispla-left-picture [src]");

					sources.forEach(function (source) {
						source.setAttribute("srcset", coverImageSrc);
					});

					sourcesSrc.forEach(function (src) {
						src.setAttribute("src", coverImageSrc);
					});
				});
			});

			waitForElement(".cre-productdispla-right-img ", function () {
				waitForElement("#rhs-mag-coverImage-box #rhs-mag-coverImage", function () {
					var coverImageSrc = document.querySelector("#rhs-mag-coverImage-box #rhs-mag-coverImage").src;

					var sources = document.querySelectorAll(".cre-productdispla-right-img source");
					var sourcesSrc = document.querySelectorAll(".cre-productdispla-right-img [src]");

					sources.forEach(function (source) {
						source.setAttribute("srcset", coverImageSrc);
					});

					sourcesSrc.forEach(function (src) {
						src.setAttribute("src", coverImageSrc);
					});
				});
			});


			waitForElement('#print-pricing .print [data-category*="subscription"] .pricing', function () {
				setTimeout(function () {
					if (!document.querySelector('#print-pricing .print.travel [data-category*="subscription"] .pricing')) {
						printPricing()
					}

					if (document.querySelector('#print-pricing .print.travel [data-category*="subscription"] .pricing')) {
						addClass("body", "cre-MagSize-option")
						addClass("body", "cre-standard-option")
						printPricingTravel();
						printPricingStandard()
					}

				}, 1000)
			});

			waitForElement('#digital-pricing .digital [data-category*="subscription"] .pricing', function () {
				setTimeout(function () {
					digitalPricing()
				}, 1000)
			});

			// var currentUrl = window.location.href;
			logDescription(currentUrl, magazines);

			waitForElement('#giftblock fieldset label:not(.checked) input[value="no"]', function () {
				document.querySelector('#giftblock fieldset label:not(.checked) input[value="no"]').click()
			});

			// toggleClass('.cre-gift', 'cre-gift-disable')
			waitForElement('.cre-gift', function () {
				addClass('.cre-gift', 'cre-gift-disable')
			});


			waitForElement('.cre-rooling-printing-subscription .cre-rooling-subscription-options', function () {
				if (document.querySelector('#cre-print-option').checked) {
					document.querySelector('.cre-rooling-printing-subscription .cre-rooling-subscription-options') && document.querySelector('.cre-rooling-printing-subscription .cre-rooling-subscription-options:nth-child(2)').click()
				} else {
					document.querySelector('.cre-rooling-digital-subscription .cre-rooling-subscription-options') && document.querySelector('.cre-rooling-digital-subscription .cre-rooling-subscription-options:nth-child(2)').click()
				}
			});

			waitForElement('#magazinetype input', function () {
				var formateLength = document.querySelectorAll('#magazinetype input').length;
				addClass('body', 'cre-MagType-' + formateLength + '')

				if (document.querySelector('.cre-MagType-1')) {
					document.querySelector('#cre-digital-option').click()
				}
			})
			// #magazinetype input

			waitForElement('.cre-rooling-subscription-options .cre-rooling-subscription-text strong', function () {
				setTimeout(function () {
					document.querySelectorAll('.cre-rooling-subscription-options .cre-rooling-subscription-text strong').forEach(function (e) {
						if (e.innerHTML.indexOf('Rolling subscription') != -1) {
							e.closest('.cre-rooling-subscription-options').classList.add('cre-t-34-rollSubscription')
							e.innerHTML = "Rolling subscription <br><span>Cancel anytime</span>"
						}
					})
				}, 1200)
			})



			waitForElement('.cre-rooling-subscription-options .cre-rooling-subscription-content p', function () {
				setTimeout(function () {
					document.querySelectorAll('.cre-rooling-subscription-options .cre-rooling-subscription-content p ').forEach(function (e) {
						if (e.innerHTML.indexOf('(cancel anytime)') != -1) {
							var newHtml = e.innerHTML;
							newHtml = newHtml.replace('(cancel anytime)', '');
							e.innerHTML = newHtml
						}

						if (e.innerHTML.indexOf('per issue') != -1) {
							e.classList.add('cre-t-34-Hide')
						}
					})
				}, 1200)
			})

			// .cre-productdispla

			if (window.innerWidth < 767) {
				waitForElement('.cre-productdispla', function () {

					if (document.querySelector('.cre-productdispla-left-ul')) {
						document.querySelector('.cre-productdispla').insertAdjacentElement('afterend', document.querySelector('.cre-productdispla-left-ul'))
					}
				})
			}



			waitForElement('.cre-productdispla-right-seeMore', function () {

				var subscriptionsData = [
					{
						"subscription": "country-homes-and-interiors-subscription"
					},
					{
						"subscription": "homebuilding-renovating-magazine-subscription"
					},
					{
						"subscription": "homes-and-gardens-subscription"
					},
					{
						"subscription": "ideal-home-subscription"
					},
					{
						"subscription": "period-living-magazine-subscription"
					},
					{
						"subscription": "rugby-world-subscription"
					},
					{
						"subscription": "tv-times-subscription"
					},
					{
						"subscription": "25-beautiful-homes-subscription"
					},
					{
						"subscription": "woman-and-home-subscription"
					}
				];

				var currentURLx = window.location.href;

				// Check if the URL contains any of the subscriptions
				subscriptionsData.forEach(function (subscriptionObject) {
					var subscriptionName = subscriptionObject.subscription;
					if (currentURLx.indexOf(subscriptionName) >= 0) {
						console.log("Subscription found in URL:", subscriptionName);
						// Fire your desired action here
						addClass('body', 'cre-ShowMoreBTN')
					}
				});
			})




			// 
			waitForElement('.cre-rooling-printing-subscription .cre-rooling-subscription-options.cre-t-34-rollSubscription [role="button"].cre-rooling-subscription-btn', function () {
				// setTimeout(function(){
				// if(!document.querySelector('.cre-ShowMoreBTN')){
				document.querySelector('.cre-rooling-printing-subscription .cre-rooling-subscription-options.cre-t-34-rollSubscription [role="button"].cre-rooling-subscription-btn') && document.querySelector('.cre-rooling-printing-subscription .cre-rooling-subscription-options.cre-t-34-rollSubscription [role="button"].cre-rooling-subscription-btn').click()
				// }
				// },500)
			})

			waitForElement('.cre-rooling-subscription-btn .red-text', function () {
				document.querySelectorAll('.cre-rooling-subscription-btn .red-text').forEach(function (e) {
					if (e.innerHTML.indexOf('per issue') != -1) {
						e.classList.add('cre-t-34-hidePerIssue')
					}
				})
			})

			var newJson = [
				{ url: "chat-subscription" },
				{ url: "livingetc-subscription" },
				{ url: "maximum-pc-magazine-subscription" },
				{ url: "metal-hammer-magazine-subscription" },
				{ url: "practical-boat-owner-subscription" },
				{ url: "the-field-subscription" },
				{ url: "womans-own-subscription" },
				{ url: "yachting-monthly-subscription" },
				{ url: "yachting-world-subscription" }
			];


			var currentUrlx = window.location.pathname; // Get the current URL path

			// Check if the current URL contains any value in the json array
			var match = newJson.find(item => currentUrlx.includes(item.url));

			if (match) {
				if (window.innerWidth > 768) {
					waitForElement('.cre-productdispla-right-seeMore', function () {
						setTimeout(function () {
							if (!document.querySelector('.cre-ShowMoreBTN')) {
								document.querySelector('.cre-productdispla-right-seeMore') && document.querySelector('.cre-productdispla-right-seeMore').click()
							}
						}, 500)
					})
				}
			}

			if (window.location.href.indexOf('country-life-subscription.thtml') != -1 || window.location.href.indexOf('country-life-subscription_.thtml') != -1) {
				var newHtml = `<div class="cro-country-life">
			<div class="cro-country-life-wrapper">
			  <div class="cro-country-life-paragraph">
				<div class="cre-productdispla-right-paragraph-inner">
				  <div>
					<span>
					<p><strong>The very best of English life, every week.</strong>
					  A subscription to Country Life — the UK’s only weekly perfect bound magazine — is a celebration of the best of British with modern rural life and all of its diverse joys and pleasures, delivered straight to your front door.</p>
					<p class="cre-changeYear">For over 125 years, it’s been our aim to: </p>
					<p class="cre-belowChangeYear"></p>
					<ul class="cre-productdispla-right-ul">
					  <p class="cre-productdispla-right-seeMore">Show more <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
						<path d="M7 8.63333L0 1.63333L1.63333 0L7 5.36667L12.3667 0L14 1.63333L7 8.63333Z" fill="#E70A26"></path>
						</svg></span>
					  </p>
					 
					  <li class="cre-right-li right-li-one"><div><strong>Inspire</strong> you with Britain’s best properties, beautiful gardens and glorious architecture, all brought to life with truly stunning photography, expert opinion and practical tips.</div></li>
					  
					  <li class="cre-right-li right-li-two"><div><strong>Entertain</strong> you with interviews, features and fine writing that champions diverse subjects from rare antiques to rare-breed animals, medieval architecture to modern kitchens and Bach to bridge.</div></li>

					  <li class="cre-right-li right-li-three"><div><strong>Inform</strong> you with our unparalleled expertise on what to buy, see, read, watch and listen to each week.</div></li>
					</ul>
				  </span></div>
				</div>
			  </div>
			</div>
		  </div>`;

				waitForElement(".cre-productdispla-right-paragraph-innerSpan", function () {
					document.querySelector('.cre-productdispla-right-paragraph-innerSpan').innerHTML = newHtml
				})
				// 

			}
		}

		function logDescription(url, jsonObject) {
			for (var i = 0; i < jsonObject.length; i++) {
				if (url.indexOf(jsonObject[i].url) !== -1) {
					// console.log(jsonObject[i].description);
					waitForElement('.cre-productdispla-right-paragraph-innerSpan', function () {
						document.querySelector('.cre-productdispla-right-paragraph-innerSpan').innerHTML = jsonObject[i].description;
						console.log("The current page URL matches one of the URLs in the JSON.");
					});
					return;
				}
			}
		}



		function totalPricePass() {
			waitForElement(".cre-rooling-subscription-totalPrice span", function () {
				// Get the text from the 'cre-rooling-subscription-contentText' element
				var subscriptionText = document.querySelector(".cre-rooling-subscription-contentText").textContent.trim();

				// Find the 'cre-rooling-subscription-totalPrice' element
				var totalPriceElement = document.querySelector(".cre-rooling-subscription-totalPrice span");

				// Update the text content of the 'span' element with the subscription text
				if (totalPriceElement) {
					totalPriceElement.textContent = subscriptionText;
				}

			});

		}

		function printPricing() {
			document.querySelectorAll('#print-pricing .print [data-category*="subscription"] strong').forEach(function (e) {
				e.closest('p').classList.add('cre-t-34-boldHeading')
			})

			var valueX = 1;
			console.log('Length', document.querySelectorAll('#print-pricing .print [data-category*="subscription"] .pricing').length)
			document.querySelectorAll('#print-pricing .print [data-category*="subscription"] .pricing').forEach(function (e) {
				valueX = valueX + 1;
				var pHeading = e.querySelector('.cre-t-34-boldHeading');
				var pTags = e.querySelectorAll('.pricing > p:not(.cre-t-34-boldHeading)');
				var formId = e.querySelector('form');
				formId = formId.getAttribute('id');


				var addingClassForSingleIssue = '';
				var signleIssue = e.closest('.singleissue')

				if (signleIssue) {
					addingClassForSingleIssue = 'cre-t-34-singleIssue';
				}

				var pTagInnerHTML = '';
				pTags.forEach(function (tag) {
					pTagInnerHTML += tag.outerHTML;
				});

				var uniqueClass = 'customClass-' + valueX;

				var htmlTag = `<div class="cre-rooling-subscription-options ${addingClassForSingleIssue} ${uniqueClass}" creFormAttr=${formId}>
								  <div role="button" class="cre-rooling-subscription-btn">
								  <div class="cre-rooling-subscription-btn-wrapper">
									  <div class="cre-rooling-subscription-btn-Inner">
									  <h5 class="cre-rooling-subscription-text">${pHeading.innerHTML}</h5>
									  </div>
									  <div class="cre-rooling-subscription-content">
										  ${pTagInnerHTML}
									  </div>
								  </div>
								  <p class="cre-rooling-subscription-contentFinal"><b></b> </p>
								  </div>
							  </div>`;


				waitForElement('.cre-rooling-printing-subscription', function () {
					console.log('uniqueClass: ', uniqueClass)
					if (!document.querySelector('.' + uniqueClass)) {
						document.querySelector('.cre-rooling-printing-subscription').insertAdjacentHTML('beforeend', htmlTag)
					}

				});
			});
		}

		function printPricingTravel() {
			document.querySelectorAll('#print-pricing .print.travel [data-category*="subscription"] strong').forEach(function (e) {
				e.closest('p').classList.add('cre-t-34-boldHeading')
			})

			var valueX = 1;
			console.log('Length', document.querySelectorAll('#print-pricing .print.travel [data-category*="subscription"] .pricing').length)
			document.querySelectorAll('#print-pricing .print.travel [data-category*="subscription"] .pricing').forEach(function (e) {
				valueX = valueX + 1;
				var pHeading = e.querySelector('.cre-t-34-boldHeading');
				var pTags = e.querySelectorAll('.pricing > p:not(.cre-t-34-boldHeading)');
				var formId = e.querySelector('form');
				formId = formId.getAttribute('id');


				var addingClassForSingleIssue = '';
				var signleIssue = e.closest('.singleissue')

				if (signleIssue) {
					addingClassForSingleIssue = 'cre-t-34-singleIssue';
				}

				var pTagInnerHTML = '';
				pTags.forEach(function (tag) {
					pTagInnerHTML += tag.outerHTML;
				});

				var uniqueClass = 'customClass-' + valueX;

				var htmlTag = `<div class="cre-rooling-subscription-options ${addingClassForSingleIssue} ${uniqueClass}" creFormAttr=${formId}>
								  <div role="button" class="cre-rooling-subscription-btn">
								  <div class="cre-rooling-subscription-btn-wrapper">
									  <div class="cre-rooling-subscription-btn-Inner">
									  <h5 class="cre-rooling-subscription-text">${pHeading.innerHTML}</h5>
									  </div>
									  <div class="cre-rooling-subscription-content">
										  ${pTagInnerHTML}
									  </div>
								  </div>
								  <p class="cre-rooling-subscription-contentFinal"><b></b> </p>
								  </div>
							  </div>`;


				waitForElement('.cre-rooling-printing-travel-subscription', function () {
					console.log('uniqueClass: ', uniqueClass)
					if (!document.querySelector('.' + uniqueClass)) {
						document.querySelector('.cre-rooling-printing-travel-subscription').insertAdjacentHTML('beforeend', htmlTag)
					}

				});
			});
		}

		function printPricingStandard() {
			document.querySelectorAll('#print-pricing .print.standard [data-category*="subscription"] strong').forEach(function (e) {
				e.closest('p').classList.add('cre-t-34-boldHeading')
			})

			var valueX = 9;
			console.log('Length', document.querySelectorAll('#print-pricing .print.standard [data-category*="subscription"] .pricing').length)
			document.querySelectorAll('#print-pricing .print.standard [data-category*="subscription"] .pricing').forEach(function (e) {
				valueX = valueX + 1;
				var pHeading = e.querySelector('.cre-t-34-boldHeading');
				var pTags = e.querySelectorAll('.pricing > p:not(.cre-t-34-boldHeading)');
				var formId = e.querySelector('form');
				formId = formId.getAttribute('id');


				var addingClassForSingleIssue = '';
				var signleIssue = e.closest('.singleissue')

				if (signleIssue) {
					addingClassForSingleIssue = 'cre-t-34-singleIssue';
				}

				var pTagInnerHTML = '';
				pTags.forEach(function (tag) {
					pTagInnerHTML += tag.outerHTML;
				});

				var uniqueClass = 'customClass-' + valueX;

				var htmlTag = `<div class="cre-rooling-subscription-options ${addingClassForSingleIssue} ${uniqueClass}" creFormAttr=${formId}>
								  <div role="button" class="cre-rooling-subscription-btn">
								  <div class="cre-rooling-subscription-btn-wrapper">
									  <div class="cre-rooling-subscription-btn-Inner">
									  <h5 class="cre-rooling-subscription-text">${pHeading.innerHTML}</h5>
									  </div>
									  <div class="cre-rooling-subscription-content">
										  ${pTagInnerHTML}
									  </div>
								  </div>
								  <p class="cre-rooling-subscription-contentFinal"><b></b> </p>
								  </div>
							  </div>`;


				waitForElement('.cre-rooling-printing-standard-subscription', function () {
					console.log('uniqueClass: ', uniqueClass)
					if (!document.querySelector('.' + uniqueClass)) {
						document.querySelector('.cre-rooling-printing-standard-subscription').insertAdjacentHTML('beforeend', htmlTag)
					}

				});
			});
		}

		function digitalPricing() {
			document.querySelectorAll('#digital-pricing .digital [data-category*="subscription"] strong').forEach(function (e) {
				e.closest('p').classList.add('cre-t-34-boldHeading')
			})

			document.querySelectorAll('#digital-pricing .digital [data-category*="subscription"] .pricing').forEach(function (e) {
				var pHeading = e.querySelector('.cre-t-34-boldHeading');
				var pTags = e.querySelectorAll('.pricing > p:not(.cre-t-34-boldHeading)');
				var formId = e.querySelector('form');
				formId = formId.getAttribute('id')

				var addingClassForSingleIssue = '';
				var signleIssue = e.closest('.singleissue')

				if (signleIssue) {
					addingClassForSingleIssue = 'cre-t-34-singleIssue';
				}

				var pTagInnerHTML = '';
				pTags.forEach(function (tag) {
					pTagInnerHTML += tag.outerHTML;
				});

				var htmlTag = `<div class="cre-rooling-subscription-options ${addingClassForSingleIssue}" creFormAttr=${formId}>
								  <div role="button" class="cre-rooling-subscription-btn">
								  <div class="cre-rooling-subscription-btn-wrapper">
									  <div class="cre-rooling-subscription-btn-Inner">
									  <h5 class="cre-rooling-subscription-text">${pHeading.innerHTML}</h5>
									  </div>
									  <div class="cre-rooling-subscription-content">
										  ${pTagInnerHTML}
									  </div>
								  </div>
								  <p class="cre-rooling-subscription-contentFinal"><b></b> </p>
								  </div>
							  </div>`;

				waitForElement('.cre-rooling-digital-subscription', function () {
					document.querySelector('.cre-rooling-digital-subscription').insertAdjacentHTML('beforeend', htmlTag)
				});

			});
		}


		live(".cre-productdispla-right-seeMore", "click", function () {
			addClass("body", "cre-display")
		});

		live(".cre-size-document .cre-document-inner .cre-document-options.cre-document-standard-option", "click", function () {
			addClass("body", "cre-standard-option")
			removeClass("body", "cre-Travel-option")

			if (document.querySelector('.cre-size-document .cre-document-inner .cre-document-options.cre-document-Travel-option.active')) {
				document.querySelector('.cre-size-document .cre-document-inner .cre-document-options.cre-document-Travel-option.active').classList.remove('active')
			}

			this.classList.add('active')
		});

		live(".cre-size-document .cre-document-inner .cre-document-options.cre-document-Travel-option", "click", function () {
			removeClass("body", "cre-standard-option")
			addClass("body", "cre-Travel-option")

			if (document.querySelector('.cre-size-document .cre-document-inner .cre-document-options.cre-document-standard-option.active')) {
				document.querySelector('.cre-size-document .cre-document-inner .cre-document-options.cre-document-standard-option.active').classList.remove('active')
			}

			this.classList.add('active')
		});

		//   .cre-size-document .cre-document-inner .cre-document-options.cre-document-standard-option

		live("#cre-print-option", "click", function () {
			var printSelect = document.querySelector("#printname")
			// printSelect.selected = true;

			var clickDigital = document.querySelector(".cre-DigitalBtn");
			if (clickDigital) {
				removeClass("body", "cre-DigitalBtn");
				addClass("body", "cre-PrintBtn");
			} else {
				addClass("body", "cre-PrintBtn");
			}

		});

		live("#cre-digital-option", "click", function () {
			var digitalSelect = document.querySelector("#digitalname");
			// digitalSelect.selected = true;

			var clickPrint = document.querySelector(".cre-PrintBtn");
			if (clickPrint) {
				removeClass("body", "cre-PrintBtn");
				addClass("body", "cre-DigitalBtn");
			} else {
				addClass("body", "cre-DigitalBtn");
			}

		});

		live(".cre-rooling-subscription-btn ", "click", function () {
			var creClickMe = document.querySelector(".cre-clickMe");

			if (creClickMe) {
				totalPricePass()
			}

		});


		live(".cre-gift-checkbox", "click", function () {
			toggleClass('.cre-gift', 'cre-gift-disable')
			document.querySelector('#giftblock fieldset label:not(.checked)').click()
		});

		live(".cre-subscription-rightHeader span", "click", function () {
			addClass('body', 'cre-show-SignleIssue');
			if (document.querySelector('.cre-rooling-subscription-btn.active')) {
				document.querySelector('.cre-rooling-subscription-btn.active').classList.remove('active');
			}

			// #cre-digital-option
			// #cre-print-option

			if (document.querySelector('#cre-print-option').checked) {
				document.querySelector('.cre-rooling-printing-subscription .cre-rooling-subscription-options').click()
			} else {
				document.querySelector('.cre-rooling-digital-subscription .cre-rooling-subscription-options').click()
			}
		});

		//   .cre-subscription-rightHeader span

		live(".cre-rooling-subscription-options", "click", function () {
			var clickedId = this.getAttribute('creformattr')
			// document.querySelector('#'+clickedId+' button[type="submit"]') && document.querySelector('#'+clickedId+' button[type="submit"]').click()
			console.log('#' + clickedId + ' button[type="submit"]')


			var priceStatement = this.querySelector('.price-statement')
			var activeClass = this.querySelector('.cre-rooling-subscription-btn')

			if (activeClass) {

				if (document.querySelector('.cre-rooling-subscription-btn.active')) {
					document.querySelector('.cre-rooling-subscription-btn.active').classList.remove('active');
				}

				activeClass.classList.add('active');
			}

			if (priceStatement) {
				dynamicPriceUpdate(priceStatement)
			}
		});

		live(".cre-document-options.cre-document-print-option", "click", function () {
			if (document.querySelector('.cre-show-SignleIssue')) {
				document.querySelector('.cre-rooling-printing-subscription .cre-rooling-subscription-options').click()
			} else {
				document.querySelector('.cre-rooling-printing-subscription .cre-rooling-subscription-options') && document.querySelector('.cre-rooling-printing-subscription .cre-rooling-subscription-options:nth-child(2)').click()
			}
		});

		live(".cre-document-options.cre-document-digital-option", "click", function () {
			if (document.querySelector('.cre-show-SignleIssue')) {
				document.querySelector('.cre-rooling-digital-subscription .cre-rooling-subscription-options').click()
			} else {
				document.querySelector('.cre-rooling-digital-subscription .cre-rooling-subscription-options') && document.querySelector('.cre-rooling-digital-subscription .cre-rooling-subscription-options:nth-child(2)').click()
			}
		});

		live(".cre-rooling-addBasket-btnBtn", "click", function () {
			var activeButton = document.querySelector('.cre-rooling-subscription-btn.active')
			if (activeButton) {
				var parent = activeButton.closest('.cre-rooling-subscription-options')


				var clickedId = parent.getAttribute('creformattr')
				var gift = document.querySelector('#' + clickedId + ' .gift')
				if (document.querySelector('.cre-gift.cre-gift-disable')) {
					gift.value = 'no';
					document.querySelector('#' + clickedId + ' button[type="submit"]') && document.querySelector('#' + clickedId + ' button[type="submit"]').click()
				} else {
					gift.value = 'yes';
					document.querySelector('#' + clickedId + ' button[type="submit"]') && document.querySelector('#' + clickedId + ' button[type="submit"]').click()
				}


			}
		});

		function dynamicPriceUpdate(price) {
            // Select all elements with the class 'price-statement'
            var priceElements = price;
        
            // Extract the text content from the element
            var priceText = price.textContent.trim();
        
            // Extract the price value from the text
            var priceValue = priceText.match(/£([\d.]+)/);
            var priceValuex = priceText.match(/\$([\d.]+)/);
            var priceValueEuro = priceText.match(/€([\d.]+)/);
            console.log("Price:", priceText);
        
            // If a price value is found, log it and update HTML
            if (priceValue) {
                console.log("Price:", priceValue[0]);
                document.querySelector('.cre-rooling-subscription-totalPrice span').innerHTML = priceValue[0];
                document.querySelector('.cre-rooling-subscription-subtotalPrice').innerHTML = priceElements.innerHTML;
            }
        
            if (priceValuex) {
                console.log("Price:", priceValuex[0]);
                document.querySelector('.cre-rooling-subscription-totalPrice span').innerHTML = priceValuex[0];
                document.querySelector('.cre-rooling-subscription-subtotalPrice').innerHTML = priceElements.innerHTML;
            }
        
            if (priceValueEuro) {
                console.log("Price:", priceValueEuro[0]);
                document.querySelector('.cre-rooling-subscription-totalPrice span').innerHTML = priceValueEuro[0];
                document.querySelector('.cre-rooling-subscription-subtotalPrice').innerHTML = priceElements.innerHTML;
            }
        }
        

		/* Initialise variation */
		waitForElement('body', init);

	} catch (e) {
		if (debug) console.log(e, "error in Test" + variation_name);
	}
})();