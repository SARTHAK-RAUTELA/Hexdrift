// Cro Mode (QA Test cookie)
(function () {
    // Utility Functions
    function setCookie(name, value, options = {}) {
        let {
            duration,
            domain,
            sameSite = 'Lax'
        } = options;
        domain = domain || window.location.hostname.split('.').slice(-2).join('.');
        let expires = '';
        if (duration) {
            let date = new Date();
            date.setTime(date.getTime() + (duration * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = `${name}=${value}; Path=/; Domain=${domain}; SameSite=${sameSite}${expires}`;
    }

    function getCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    // Extract QA mode logic
    function enableQAMode(mode) {
        if (mode === 'qa') {
            console.log(`CRO Mode enabled: ${mode}`);
            setCookie('cro_mode', mode, {
                duration: 1
            });
        } else {
            //console.log('CRO Mode disabled');
            setCookie('cro_mode', '', {
                duration: -1
            });
        }
    }
    // Initialize CRO Mode
    function initCROMode() {
        const urlParams = new URLSearchParams(window.location.search);
        let mode = urlParams.get('cro_mode') || getCookie('cro_mode');
        if (mode === 'qa') {
            enableQAMode(mode);
            console.log("QA Mode Active");
            // Place any QA mode specific logic here
        } else {
            enableQAMode('');
        }
    }
    initCROMode();
})();

// List of parent selectors (the ones you provided)
const parentSelectors = ['[data-path="/orlando/tickets/"] .product-catalog-card__products-container .product-catalog-card__order-button',
    '[data-path="/orlando/limited-time-offers/"] .product-catalog-card__order-button',
    '[data-path="/orlando/tickets/fun-card/"] .product-catalog-card__order-button',
    '[data-path="/orlando/upgrades/"] .product-placement-detail-modal__cart-button',
    '[data-path="/orlando/checkout/cart/"] .product-catalog-card__products-container .product-catalog-card__order-button',
    '[data-path="/san-diego/tickets/limited-time-offers/"] .product-catalog-card__order-button',
    '[data-path="/san-diego/annual-pass/"] .product-placement-detail-modal__cart-button',
    '[data-path="/san-diego/upgrades/"] .product-placement-detail-modal__cart-button',
    '[data-path="/san-diego/checkout/cart/"] .product-catalog-card__order-button',
    '[data-path="/san-antonio/tickets/"] .product-catalog-card__order-button',
    '[data-path="/san-antonio/upgrades/"] .product-placement-detail-modal__cart-button',
    '[data-path="/san-antonio/checkout/cart/"] .product-catalog-card__order-button',
    '[data-path="/orlando/tickets/"] .product-catalog-container__continue-button',
    '[data-path="/orlando/limited-time-offers/"] a[href="/orlando/checkout/cart"].product-catalog-container__continue-button',
    '[data-path="/orlando/upgrades/"] a[href="/orlando/checkout/cart"].center-callout__button-primary.center-callout__button',
    '[data-path="/san-diego/upgrades/"] .center-callout__button-area a[href="/san-diego/checkout/cart"]',
    '[data-path="/san-antonio/upgrades/"] .center-callout__button-area [href="/san-antonio/checkout/cart"]',
    '[data-path="/orlando/tickets/"] .full-width-callout a[href*="https://www.buschgardens.com/tampa/park-info/orlando-shuttle-service"]',
    '[data-path="/orlando/tickets/"] a[href="/orlando/help/inclement-weather-policy"].full-width-callout__button.button-tertiary',
    '[data-path="/san-antonio/tickets/"] .full-width-callout a[href="/san-antonio/help/inclement-weather-policy"]',
    '[data-path="/orlando/tickets/"] .center-callout__button-area a[href="/orlando/faq"]',
    '[data-path="/orlando/annual-pass/"] a[href="/orlando/faq"].center-callout__button-tertiary.center-callout__button',
    '[data-path="/san-diego/annual-pass/"] .center-callout__button-area a[href="/san-diego/faq"]',
    '[data-path="/orlando/tickets/"] .mini-cart__checkout-btn',
    '[data-path="/san-antonio/tickets/"] .mini-cart__checkout-btn',
    '[data-path="/orlando/limited-time-offers/"] .mini-cart__checkout-btn',
    '[data-path="/orlando/tickets/fun-card/"] .mini-cart__checkout-btn',
    '[data-path="/orlando/annual-pass/"] .mini-cart__checkout-btn',
    '[data-path="/orlando/upgrades/"] .mini-cart__checkout-btn',
    '[data-path="/san-diego/tickets/limited-time-offers/"] .mini-cart__checkout-btn',
    '[data-path="/san-diego/annual-pass/"] .mini-cart__checkout-btn',
    '[data-path="/san-diego/upgrades/"] .mini-cart__checkout-btn',
    '[data-path="/san-antonio/upgrades/"] .mini-cart__checkout-btn',
    '[data-path="/orlando/limited-time-offers/"] .product-placement-card__price-wrapper .product-placement-card__button.button-secondary',
    '[data-path="/orlando/upgrades/"] .product-placement-card__button.button-secondary',
    '[data-path="/san-diego/tickets/limited-time-offers/"] .product-placement-card__price-wrapper .product-placement-card__button.button-secondary',
    '[data-path="/san-diego/upgrades/"] .product-placement-card__button.button-secondary',
    '[data-path="/san-antonio/tickets/"] .product-placement-card__button.button-secondary',
    '[data-path="/san-antonio/upgrades/"] .product-placement-card__button.button-secondary',
    '[data-path="/orlando/checkout/cart/"] #ModalOpen-CartSignIn',
    '[data-path="/san-diego/checkout/cart/"] #ModalOpen-CartSignIn',
    '[data-path="/san-antonio/checkout/cart/"] #ModalOpen-CartSignIn',
    '[data-path="/orlando/checkout/cart/"] [href="/orlando/tickets"].items-in-cart__shop-btn',
    '[data-path="/san-diego/checkout/cart/"] .items-in-cart__summary .items-in-cart__actions a[href="/san-diego/tickets/special-offers"]',
    '[data-path="/san-antonio/checkout/cart/"] a[href="/san-antonio/tickets"].items-in-cart__shop-btn',
    '[data-path="/orlando/checkout/cart/"] #ModalCancel-CartSignIn',
    '[data-path="/san-diego/checkout/cart/"] #ModalCancel-CartSignIn',
    '[data-path="/san-antonio/checkout/cart/"] #ModalCancel-CartSignIn',
    '[data-path="/orlando/checkout/cart/"] #ModalDone-CartSignIn',
    '[data-path="/san-diego/checkout/cart/"] #ModalDone-CartSignIn',
    '[data-path="/san-antonio/checkout/cart/"] #ModalDone-CartSignIn',
    '[data-path="/orlando/checkout/billing-and-payment/"] .donation__options .donation__option',
    '[data-path="/san-diego/checkout/billing-and-payment/"] .donation__options .donation__option',
    '[data-path="/san-antonio/checkout/billing-and-payment/"] .donation__options .donation__option',
    '[data-path="/orlando/checkout/billing-and-payment/"] .button.checkout__button.checkout__button--active',
    '[data-path="/san-diego/checkout/billing-and-payment/"] .button.checkout__button.checkout__button--active',
    '[data-path="/san-antonio/checkout/billing-and-payment/"] .button.checkout__button.checkout__button--active',
    '[data-path="/san-antonio/tickets/"] a[href="https://prf.hn/click/camref:1100lHsMQ/destination:https%3A%2F%2Fgocity.com%2Fen%2Fsan-antonio%2Fpasses%3Fduration%3D2"].full-width-callout__button',
    '[data-path="/san-antonio/tickets/"] .full-width-callout a[href="/san-antonio/tickets/group-tickets"]',
    '[data-path="/orlando/tickets/"] a[href="/orlando/events/howl-o-scream/tickets"].full-width-callout__button.button-tertiary',
    '[data-path="/san-diego/annual-pass/"] .product-placement-card__button.button-secondary',
    '[data-path="/san-antonio/tickets/"] .full-width-callout a[href="/san-antonio/upgrades"]',
    '[data-path="/san-diego/tickets/limited-time-offers/"] .product-placement-detail-modal__cart-button',

    // Added separately:
    '[data-path="/san-diego/tickets/special-offers/"] .product-catalog-card__order-button',
    '[data-path="/san-diego/tickets/special-offers/"] a[href="/san-diego/events/howl-o-scream/tickets"].full-width-callout__button.button-tertiary',
    '[data-path="/san-diego/tickets/special-offers/"] a[href="https://prf.hn/click/camref:1011lqchM/destination:https%3A%2F%2Fgocity.com%2Fen%2Fsan-diego%2Fpasses%3Fduration%3D1"].full-width-callout__button.button-tertiary',
    '[data-path="/san-diego/tickets/special-offers/"] a[href="/san-diego/faq"].center-callout__button-tertiary.center-callout__button',
    '[data-path="/orlando/events/howl-o-scream/tickets/"] .product-catalog-card__order-button',
    '[data-path="/san-diego/events/howl-o-scream/tickets/"] .product-placement-detail-modal__cart-button',
    '[data-path="/san-diego/events/howl-o-scream/tickets/"] .product-placement-card__button.button-secondary',
    '[data-path="/orlando/events/howl-o-scream/tickets/"] .s-curve-card__booking-cta [href*="https://res.vacations.seaworld.com/search/default.aspx"]'
];

// Special selectors that should trigger console.log
const specialSelectors = [
    '[data-path="/orlando/tickets/"] .product-catalog-card__products-container .product-catalog-card__order-button',
    '[data-path="/orlando/limited-time-offers/"] .product-catalog-card__order-button',
    '[data-path="/orlando/tickets/fun-card/"] .product-catalog-card__order-button',
    '[data-path="/orlando/upgrades/"] .product-placement-detail-modal__cart-button',
    '[data-path="/orlando/checkout/cart/"] .product-catalog-card__products-container .product-catalog-card__order-button',
    '[data-path="/san-diego/tickets/limited-time-offers/"] .product-catalog-card__order-button',
    '[data-path="/san-diego/annual-pass/"] .product-placement-detail-modal__cart-button',
    '[data-path="/san-diego/upgrades/"] .product-placement-detail-modal__cart-button',
    '[data-path="/san-diego/checkout/cart/"] .product-catalog-card__order-button',
    '[data-path="/san-antonio/tickets/"] .product-catalog-card__order-button',
    '[data-path="/san-antonio/upgrades/"] .product-placement-detail-modal__cart-button',
    '[data-path="/san-antonio/checkout/cart/"] .product-catalog-card__order-button',
    '[data-path="/san-diego/tickets/limited-time-offers/"] .product-placement-detail-modal__cart-button',
    '[data-path="/san-diego/tickets/special-offers/"] .product-catalog-card__order-button',
    '[data-path="/san-diego/events/howl-o-scream/tickets/"] .product-placement-detail-modal__cart-button',
    '[data-path="/orlando/events/howl-o-scream/tickets/"] .product-catalog-card__order-button'
];

// Listen for clicks on the document
document.addEventListener('click', function (event) {
    // Check if the clicked element or any of its parents match any selector
    for (const selector of parentSelectors) {
        try {
            const parentElement = event.target.closest(selector);
            if (parentElement) {
                window.optimizely = window.optimizely || [];
                window.optimizely.push({
                    "type": "user",
                    "attributes": {
                        "Those_that_clicked_on_any_of_the_buttons_we're_changing": "yes"
                    }
                });
                if (specialSelectors.includes(selector)) {
                    window.optimizely = window.optimizely || [];
                    window.optimizely.push({
                        "type": "user",
                        "attributes": {
                            "Those_that_added_a_product_to_cart": "yes"
                        }
                    });
                }
                break;
            }
        } catch (e) {
            console.error(`Invalid selector encountered: ${selector}`, e);
        }
    }
});