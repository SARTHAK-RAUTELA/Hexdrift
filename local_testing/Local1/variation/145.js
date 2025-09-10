(function () {
    try {
        /* main variables */
        var debug = 1;
        var variation_name = "ssc-13";

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
            function addEvent(el, type, handler) {
                if (el.attachEvent) el.attachEvent("on" + type, handler);
                else el.addEventListener(type, handler);
            }

            if (this && this.Element) {
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
            }

            addEvent(context || document, event, function (e) {
                var el = e.target || e.srcElement;
                while (el && el.matches && el !== context) {
                    if (el.matches(selector)) {
                        callback.call(el, e);
                        break;
                    }
                    el = el.parentElement;
                }
            });
        }

        function getFirstWordBeforeComma(input) {
            const match = input.match(/^(\w+),/);
            return match ? match[1] : null;
        }

        var Cre_13Accordion = `
<div class="ssc13_accordion">
    <h3 class="accordion_heading">
        Why we ask for card details 
        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007821/vector-4_68a6acd6018d8.svg" alt="" width="14" height="14">
    </h3>
    <p class="accordion_content" style="display:none;">
        We pay a fee to retrieve your official credit reports. We ask for your card details
        because we believe you’ll see the value in our service and continue after the trial—but if not, you can 
        <strong>cancel anytime within 7 days at no charge.</strong>
    </p>
</div>`;

        function init() {

            // Headline updates
            waitForElement('#step-payments >h2', function () {
                document.querySelector('#step-payments >h2').innerHTML = ' David, we’ve verified your identity and your reports are ready!';
            });

            waitForElement('#step-payments  form h2', function () {
                document.querySelector('#step-payments  form h2').innerHTML = 'Instantly unlock all 3 credit scores with your FREE 7-day trial';
            });

            waitForElement('#step-payments  form h2 + div', function () {
                document.querySelector('#step-payments  form h2 + div').innerHTML = 'Get <b>instant access</b> to all 3 credit scores. Just $29.95/month after, with a reminder before billing. Cancel anytime.';
            });

            waitForElement('#step-payments  form h2 + div + div >div span', function () {
                document.querySelectorAll('#step-payments  form h2 + div + div >div span').forEach(function (bullet, index) {
                    if (index == 0) {
                        bullet.innerHTML = '<b>Instant access</b> to all 3 bureau reports';
                    } else if (index == 1) {
                        bullet.innerHTML = '<b>Fully free trial</b>—no hidden fees';
                    } else {
                        bullet.innerHTML = '<b>Cancel anytime</b>—by email, chat, or phone';
                    }
                });
            });

            waitForElement('#step-payments  form h2 + div + div +div>span', function () {
                document.querySelector('#step-payments  form h2 + div + div +div>span').innerHTML = 'Secure, encrypted payment';
            });

            waitForElement("#step-payments button#btn-submit+img", function () {
                let trustpilotlogo = document.querySelector("#step-payments button#btn-submit+img");
                if (trustpilotlogo && !document.querySelector(".microcopy")) {
                    trustpilotlogo.insertAdjacentHTML(
                        "beforebegin",
                        '<p class="microcopy">Free for 7 days. Reminder before billing.</p>'
                    );
                }
            });

            waitForElement('#step-payments #btn-submit span', function () {
                document.querySelector('#step-payments #btn-submit span').innerHTML = 'See My Free Scores <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-5 w-5 inline-block"><path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path></svg>';
            });

            waitForElement('#step-payments #btn-submit', function () {
                if (!document.querySelector('.cre-13-trustpilot-logo')) {
                    document.querySelector('#step-payments #btn-submit').insertAdjacentHTML('afterend', '<img src="https://cdn-3.convertexperiments.com/uf/10007679/10007821/trustpilot-logo_6889adb106718.svg" class="cre-13-trustpilot-logo">');
                }
            });

            waitForElement('#step-payments .cre-13-trustpilot-logo+div+div', function () {
                document.querySelector('#step-payments .cre-13-trustpilot-logo+div+div').innerHTML = 'You’ll enjoy a free 7-day trial. After that, it’s $29.95/month. We’ll remind you 2 days before billing, and you can cancel anytime with no penalty.';
            });

            waitForElement('[data-selector="payment-step-our-customer-loves-section"] [class*="bg-gradient"]:first-child>div+div:nth-child(2)', function () {
                document.querySelector('[data-selector="payment-step-our-customer-loves-section"] [class*="bg-gradient"]:first-child>div+div:nth-child(2)').innerHTML = '"I was tired of juggling three bureau log-ins. Standard Scores put everything on one clean dashboard and spotlighted two bogus late payments. Their customer support team walked me through how I could dispute them with bureaus and I managed to get them removed. Thanks team, my score has rebounded."';
            });

            waitForElement("#step-payments form h2+div+div ", function () {
                if (!document.querySelector(".ssc-13_accordion")) {
                    document.querySelector("#step-payments form h2+div+div ").insertAdjacentHTML("afterend", Cre_13Accordion);
                }
            });


            live(".ssc13_accordion .accordion_heading", "click", function () {
                let parent = this.closest(".ssc13_accordion");
                if (parent) {
                    parent.classList.toggle("active");
                }
            });


        }

        waitForElement('html body[data-funnel-step="payments"]', init);

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();