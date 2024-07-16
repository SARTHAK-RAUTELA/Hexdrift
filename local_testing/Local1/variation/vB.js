(function () {
	try {
		/* main variables */
		var debug = 0;
		var variation_name = "cre-t-202-v1";
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

		function addClass(el, cls) {
			var el = document.querySelector(el);
			if (el) {
				el.classList.add(cls);
			}
		}

		/* Variation Init */
		function init() {
            if (window.location.href.includes("https://seaworld.com/") && window.location.pathname == '/orlando/tickets/') {

			addClass('body', variation_name);
			live(".product-upsell-module__modal,.product-upsell-module__modal .modal__close","click",function(){
				// .modal.modal--with-footer.product-upsell-module__modal.modal--active
				if(!document.querySelector('.product-upsell-module__modal.modal--active')){
					document.querySelector('.site-header__icon.site-header__checkout') && document.querySelector('.site-header__icon.site-header__checkout').click()
				}
				
			})

        }
		}

		/* Initialise variation */
		if (!window.cre202EventHandler) {
			waitForElement('.mini-cart.mini-cart--has-items', init);
			window.cre202EventHandler = true;
		}
	
	} catch (e) {
		if (debug) console.log(e, "error in Test" + variation_name);
	}
})();
