(function () {
    try {
        /* main variables */
        var debug = 1;
        var variation_name = "cre-t-27";
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
        var imageurl = 'https://cdn-3.convertexperiments.com/uf/10007679/10007821/group-48098675_68c79f0c7da42.svg';
        
          const trustpilotsectionL = `
            <div class="Cre_trustpilot-section" style="display: none;">
            <div class="trustpilot-header">
            <div class="Cre-truspilot">
            <a href="https://www.trustpilot.com/review/standardscores.com" target="_blank"> <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007821/image-33-1_68c79eed713e4.svg"> <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007821/image-34-1_68c79effc7d50.svg"> <span>4.7</span></a>
            </div>
            <p class="headline">300,000+ people trust
            <br> us to monitor, rebuild
            <br> &amp; protect their credit </p>
            <p class="subline">Rated 4.7 out of 5 stars on <a href="https://www.trustpilot.com/review/standardscores.com" target="_blank">Trustpilot</a> </p>
            </div>
            <div class="testimonials">
            <div class="review"> <span class="stars"><img src="${imageurl}"></span>
            <p>“I'm no tech whiz, yet signup was five minutes. The color-coded score tracker make it simple. Standard Scores flagged an old medical collection early, we disputed it, and our refinance sailed through at a lower rate. Getting alerts and feedback in real-time makes all the difference for me.”</p> <span class="author">— Debbie S.</span> </div>
            <div class="review"> <span class="stars"><img src="${imageurl}"></span>
            <p>“The 24/7 identity monitoring was the hook, knowing I'll get an instant alert if my data pops up anywhere online is huge peace of mind. Their support team helped me fix two reporting errors, and my score jumped high enough to negotiate a better rate on one of my loans.”</p> <span class="author">— Carl T.</span> </div>
            <div class="review"> <span class="stars"><img src="${imageurl}"></span>
            <p>“I was tired of juggling three bureau log-ins. Standard Scores put everything on one clean dashboard and spotlighted two bogus late payments. Their customer support team me through how I could dispute them with bureaus and I managed to get them removed. Thanks team, my score has rebounded.”</p> <span class="author">— Jessica M.</span> </div>
            <div class="Cre-truspilot">
            <a href="https://www.trustpilot.com/review/standardscores.com" target="_blank"> <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007821/image-33-1_68c79eed713e4.svg"> <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007821/image-34-1_68c79effc7d50.svg"> <span>4.7</span></a>
            </div>
            </div>
            <div class="Cre_morelink"> <a href="https://www.trustpilot.com/review/standardscores.com" target="_blank" class="more-reviews">Read more reviews on Trustpilot →</a></div>
            </div>`;

        function init() {
            document.body.classList.add(variation_name);
            waitForElement('.sct-testimonials .container', function () {
                if (!document.querySelector('.Cre_trustpilot-section')) {
                    document.querySelector('.sct-testimonials .container').innerHTML = trustpilotsectionL
                }
            })
            // Add section after #step-registration
            waitForElement('#step-registration', function () {
                if (!document.querySelector('.Cre_trustpilot-section')) {
                    document.querySelector('#step-registration')
                        .insertAdjacentHTML('afterend', trustpilotsectionL);
                }
            });
        }
        waitForElement('body', init);
    } catch (e) {
        if (debug) console.log(e, "error in Test " + variation_name);
    }
})();