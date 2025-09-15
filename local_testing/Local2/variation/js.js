(function () {
    try {
        /* main variables */
        var debug = 1;
        var variation_name = "ssc-14";
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
        var Cre_13Accordion = `
      <div class="ssc13_accordion">
          <h3 class="accordion_heading">
              How our money-back guarantee works 
              <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007821/vector-4_68a6acd6018d8.svg" alt="" width="14" height="14">
          </h3>
          <p class="accordion_content" style="display:none;">
            If you’re not happy, tell us within 7 days and we’ll refund your $29.95. No questions asked. You can also cancel anytime to stop future charges.
          </p>
      </div>`;


        function getFirstWordBeforeComma(input) {
            const match = input.match(/^(\w+),/);
            return match ? match[1] : null;
        }

        function init() {

            // Changing the healine text--------
            waitForElement('#step-payments >h2', function () {
                let currentText = document.querySelector('#step-payments >h2').textContent;
                let newText = getFirstWordBeforeComma(currentText);
                document.querySelector('#step-payments >h2').textContent = newText + ", we’ve verified your identity and your reports are ready!"
            })

            document.body.setAttribute("data-plan-override", "premium-plus-alt-a");

            setTimeout(function () {

                waitForElement('#step-payments form h2', function () {
                    document.querySelector('#step-payments  form h2').innerHTML = 'Unlock all 3 scores today for just $29.95<br>—100% risk-free';
                })
                waitForElement('#step-payments form h2 + div', function () {
                    document.querySelector('#step-payments  form h2 + div').innerHTML = 'Get <b>instant access</b> to all 3 credit scores. You’ll be charged<b> $29.95</b> today and each month after. Cancel anytime.'
                })
                waitForElement('#step-payments form h2 + div + div', function () {
                    let container = document.querySelector('#step-payments form h2 + div + div');

                    let bullets = [
                        '<b>Instant access</b> to all 3 bureau reports',
                        '<b>Free consultation</b> to improve your score',
                        '<b>Credit protection</b> & ID theft insurance',
                        '<b>Risk-free—</b>full refund within 7 days',
                        '<b>Cancel anytime</b> in seconds'
                    ];

                    // grab an existing bullet as a template
                    let template = container.querySelector('.flex.items-center.gap-2');

                    bullets.forEach((text, index) => {
                        let bulletSpan = container.querySelectorAll('.flex.items-center.gap-2 span')[index];
                        if (bulletSpan) {
                            // update existing bullet text
                            bulletSpan.innerHTML = text;
                        } else if (template) {
                            // clone template and replace text
                            let newBullet = template.cloneNode(true);
                            newBullet.querySelector('span').innerHTML = text;
                            container.appendChild(newBullet);
                        }
                    });
                });




                waitForElement('.accordion_heading', function () {
                    document.querySelector('.accordion_heading').innerHTML =
                        'How our money-back guarantee works <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007821/vector-4_68a6acd6018d8.svg" alt="" width="14" height="14">';
                });
                waitForElement('.accordion_content', function () {
                    document.querySelector('.accordion_content').innerHTML = " If you’re not happy, tell us within 7 days and we’ll refund your $29.95. No questions asked. You can also cancel anytime to stop future charges."
                })
            }, 100);

            waitForElement("#step-payments form h2+div+div", function () {
                let target = document.querySelector("#step-payments form h2+div+div");

                // Check if accordion already inserted right after the target
                if (target && !target.nextElementSibling?.classList.contains("ssc13_accordion")) {
                    target.insertAdjacentHTML("afterend", Cre_13Accordion);
                }
            });

            waitForElement('html body[data-funnel-step="payments"] #step-payments form h2+div+div+div+div>span', function () {
                let target = document.querySelector('html body[data-funnel-step="payments"] #step-payments form h2+div+div+div+div>span');
                if (target) {
                    target.textContent = "Secure, encrypted payment";
                }
            });

            waitForElement('html body[data-funnel-step="payments"] #btn-submit>span', function () {
                let target = document.querySelector('html body[data-funnel-step="payments"] #btn-submit>span');
                if (target) {
                    // If the span already has a text node, update it
                    if (target.firstChild && target.firstChild.nodeType === Node.TEXT_NODE) {
                        target.firstChild.textContent = " Get My Scores Now ";
                    } else {
                        // Otherwise, insert a new text node before the SVG
                        let newText = document.createTextNode("Get My Scores Now ");
                        target.insertBefore(newText, target.querySelector("svg"));
                    }
                }
            });


            waitForElement('html body[data-funnel-step="payments"] #step-payments .cre-01-trustpilot-logo+div+div', function () {
                document.querySelector('html body[data-funnel-step="payments"] #step-payments .cre-01-trustpilot-logo+div+div').innerHTML = 'Your card will be billed $29.95 today and every month after until you cancel. You may cancel anytime. If you’re not satisfied, request a full refund within 7 days.'
            })


            waitForElement('html body[data-funnel-step="payments"] #step-payments [data-selector="payment-step-our-customer-loves-section"] div  div:nth-child(1)  div:nth-child(2)', function () {
                document.querySelector('html body[data-funnel-step="payments"] #step-payments [data-selector="payment-step-our-customer-loves-section"] div  div:nth-child(1)  div:nth-child(2)').innerHTML = ' "I was tired of juggling three bureau log-ins. Standard Scores put everything on one clean dashboard and spotlighted two bogus late payments. Their customer support team me through how i could dispute them with bureaus and I managed to get them removed. Thanks team, my score has rebounded." '
            })


            // Add trust message below the submit button to reassure users
            waitForElement('html body[data-funnel-step="payments"] #step-payments #btn-submit', function () {
                let btn = document.querySelector('html body[data-funnel-step="payments"] #step-payments #btn-submit');
                if (btn && !btn.nextElementSibling?.classList.contains("btn-note")) {
                    let note = document.createElement("div");
                    note.className = "btn-note mt-2 text-sm text-gray-600 text-center"; // add styling hook
                    note.textContent = "7-day money-back guarantee. Cancel anytime.";
                    btn.insertAdjacentElement("afterend", note);
                }
            });




            if (!window.eventListenerAddedTest14) {
                window.eventListenerAddedTest14 = true;

                live(".ssc13_accordion .accordion_heading", "click", function () {
                    console.log("clicked");
                    let parent = this.closest(".ssc13_accordion");
                    if (parent) {
                        parent.classList.toggle("active");
                    }
                });

            }

        }




        waitForElement('html body[data-funnel-step="payments"] #step-payments form h2', init)
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();