(function () {
  try {
    /* main variables */
    var debug = 1;
    var variation_name = "ssc-01";

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

    function getFirstWordBeforeComma(input) {
      const match = input.match(/^(\w+),/);
      return match ? match[1] : null;
    }

    function init() {

      // Changing the healine text--------
      waitForElement('#step-payments >h2', function () {
        let currentText = document.querySelector('#step-payments >h2').textContent;
        let newText = getFirstWordBeforeComma(currentText);
        document.querySelector('#step-payments >h2').textContent = newText + ", we’ve verified your identity!"
      })

      waitForElement('#step-payments  form h2', function () {
        document.querySelector('#step-payments  form h2').innerHTML = 'Unlock all 3 credit scores right now—for just $1';
      })

      waitForElement('#step-payments  form h2 + div', function () {
        document.querySelector('#step-payments  form h2 + div').innerHTML = 'This $1 <b>refundable</b> processing fee helps to verify your identity and prevent fraud.'
      })

      waitForElement('#step-payments  form h2 + div + div >div span', function () {
        document.querySelectorAll('#step-payments  form h2 + div + div >div span').forEach(function (bullet, index) {
          if (index == 0) {
            bullet.innerHTML = '<b>Instant access</b> to all 3 bureau reports';
          } else if (index == 1) {
            bullet.innerHTML = '<b>Only $1 today</b>. No hidden fees.';
          } else {
            bullet.innerHTML = '<b>No impact</b> on your credit score';
          }
        })
      })

      waitForElement('#step-payments  form h2 + div + div +div>span', function () {
        document.querySelector('#step-payments  form h2 + div + div +div>span').innerHTML = 'Secure, encrypted payment';
      })

      waitForElement('#step-payments #btn-submit', function () {
        if (!document.querySelector('.cre-01-trustpilot-logo')) {
          document.querySelector('#step-payments #btn-submit').insertAdjacentHTML('afterend', '<img src="https://cdn-3.convertexperiments.com/uf/10007679/10007821/trustpilot-logo_6889adb106718.svg" class="cre-01-trustpilot-logo">')
        }
      })
    }

    waitForElement('html body[data-funnel-step="payments"]', init)


  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();