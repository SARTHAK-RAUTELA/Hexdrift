(function () {
    try {
        /* main variables */
        var debug = 1;
        var variation_name = "cre-t-12";
        let svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none"> <path d="M5.25 11.25H6.75V6.75H5.25V11.25ZM6 5.25C6.2125 5.25 6.39063 5.17813 6.53438 5.03438C6.67813 4.89062 6.75 4.7125 6.75 4.5C6.75 4.2875 6.67813 4.10938 6.53438 3.96563C6.39063 3.82188 6.2125 3.75 6 3.75C5.7875 3.75 5.60938 3.82188 5.46563 3.96563C5.32188 4.10938 5.25 4.2875 5.25 4.5C5.25 4.7125 5.32188 4.89062 5.46563 5.03438C5.60938 5.17813 5.7875 5.25 6 5.25ZM6 15C4.2625 14.5625 2.82812 13.5656 1.69688 12.0094C0.565625 10.4531 0 8.725 0 6.825V2.25L6 0L12 2.25V6.825C12 8.725 11.4344 10.4531 10.3031 12.0094C9.17188 13.5656 7.7375 14.5625 6 15Z" fill="#94A3B8"/>
        </svg>`
        let variationHeading = `Secure identity check`;
        let variationSubHeading = `<span>Required by the credit bureaus to match your credit profile.</span><span>Your information is encrypted, won’t impact your score, and is safeguarded by federal law.</span>`;
        let variationMicroCopy = `<div class='cre-t-12-SSN-microCopy'> ${svg}  <span>Used once to confirm your identity. Never stored.</span></div>`

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

        function init() {

            document.querySelector('body').classList.add(variation_name)

            // Updating the heading on [data-funnel-step="identity-verification"]----------
            waitForElement('[data-funnel-step="identity-verification"] #step-identity-verification h2', function () {
                document.querySelector('[data-funnel-step="identity-verification"] #step-identity-verification h2').innerHTML = variationHeading;
            })

            // Updating the Subheading on [data-funnel-step="identity-verification"]----------
            waitForElement('[data-funnel-step="identity-verification"] #step-identity-verification h2 + p', function () {
                document.querySelector('[data-funnel-step="identity-verification"] #step-identity-verification h2+p').innerHTML = variationSubHeading;
            })

            // Adding a micro copy under ssn-last-4---------
            waitForElement('#step-identity-verification form >div>div>div:first-child>div:first-child', function () {
                if (!document.querySelector('.cre-t-12-SSN-microCopy')) {
                    document.querySelector('#step-identity-verification form >div>div>div:first-child>div:first-child').insertAdjacentHTML('afterend', variationMicroCopy)
                }
            })
        }

        waitForElement('body', init);

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();