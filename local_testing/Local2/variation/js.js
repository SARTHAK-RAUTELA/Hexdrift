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
    const cancleany = `
        <div class="cre_cancelany mobile-text-added">
        <h6>$29.95/month · Cancel anytime</h6>
        <p>7-day money-back guarantee</p>
        </div>`;


    var Cre_14Accordion = `
<div class="ssc14_accordion">
    <h3 class="accordion_heading">
        How our money-back guarantee works
        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007821/vector-4_68a6acd6018d8.svg" alt="" width="14" height="14">
    </h3>
    <p class="accordion_content" style="display:none;">
        If you’re not happy, tell us within 7 days and we’ll refund your $29.95. No questions asked. You can also cancel anytime to stop future charges.
       
    </p>
</div>`;

    function init() {


      document.body.setAttribute("data-plan-override", "premium-plus-alt-a");

      waitForElement('.Cre_hero-subtext', function () {
        const herosubtext = document.querySelector(".Cre_hero-subtext");
        // Only insert if heroGroup exists AND .cre_t-03_content_group does NOT already exist
        if (herosubtext && !document.querySelector(".cre_cancelany")) {
          herosubtext.insertAdjacentHTML("afterend", cancleany);
        }
      })

      setTimeout(function () {


        waitForElement('#step-payments form h2', function () {
          document.querySelector('#step-payments  form h2').innerHTML = 'Unlock all 3 scores today for just $29.95—100% risk-free';
        })
        waitForElement('#step-payments form h2 + div', function () {
          document.querySelector('#step-payments  form h2 + div').innerHTML = 'Get instant access to all 3 credit scores. You’ll be charged<b> $29.95</b> today and each month after. Cancel anytime.'
        })
        waitForElement('#step-payments form h2 + div + div >div span', function () {
          document.querySelectorAll('#step-payments  form h2 + div + div >div span').forEach(function (bullet, index) {
            if (index == 0) {
              bullet.innerHTML = '<b>Instant access</b> to all 3 bureau reports';
            } else if (index == 1) {
              bullet.innerHTML = '<b>Risk-free—</b>full refund within 7 days';
            } else {
              bullet.innerHTML = '<b>Cancel anytime</b> in seconds';
            }
          })
        })
        waitForElement("#step-payments form h2+div+div ", function () {
          if (!document.querySelector(".ssc-14_accordion")) {
            document.querySelector("#step-payments form h2+div+div ").insertAdjacentHTML("afterend", Cre_14Accordion);
          }
        });

      }, 100);

    }




    waitForElement('body', init)
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();