(function () {
    try {
        // Main variables
        var debug = 0;
        var variation_name = "Seamwork - Test 03 - Homepage - Quiz content higher up";

        // Define waitForElement function
        function waitForElement(selector, trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function () {
                if (
                    document &&
                    document.querySelector(selector) &&
                    document.querySelectorAll(selector).length > 0
                ) {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function () {
                clearInterval(interval);
            }, delayTimeout);


        }

        function live(selector, event, callback, context) {
            /****Helper Functions****/
            // helper for enabling IE 8 event bindings
            function addEvent(el, type, handler) {
                if (el.attachEvent) el.attachEvent("on" + type, handler);
                else el.addEventListener(type, handler);
            }
            // matches polyfill
            this && this.Element &&
                (function (ElementPrototype) {
                    ElementPrototype.matches =
                        ElementPrototype.matches ||
                        ElementPrototype.matchesSelector ||
                        ElementPrototype.webkitMatchesSelector ||
                        ElementPrototype.msMatchesSelector ||
                        function (selector) {
                            var node = this,
                                nodes = (
                                    node.parentNode || node.document
                                ).querySelectorAll(selector),
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
                    while (
                        el &&
                        el.matches &&
                        el !== context &&
                        !(found = el.matches(selector))
                    )
                        el = el.parentElement;
                    if (found) callback.call(el, e);
                });
            }
            live(selector, event, callback, context);
        }

        var videoHTML = `
      
        <video class="seamwork-video" width="100%" height="auto" controls>
          <source src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/Seamwork/10/talking-head-web-version-02-new.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      `;



        /* Variation Init */
        function init() {
			console.log("new code test 10")
            document.querySelector("body").classList.add("cre-10");
            // Create a new div element
            var videoContainer = document.createElement('div');
            videoContainer.innerHTML = videoHTML;
            videoContainer.style.display = 'none';
            document.body.appendChild(videoContainer);


            waitForElement(".entry-pages-front-page .front-page--header-content > div > div:last-child img", function () {
                if (!document.querySelector("video.seamwork-video")) {

                    document.querySelector('.entry-pages-front-page .front-page--header-content > div > div:last-child img').insertAdjacentHTML('afterend', videoHTML);
                }

                document.querySelector('.front-page--header-content > div > div:last-child img').src = "https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/Seamwork/10/Group+1.jpg";

            }, 50, 15000);


            live(".front-page--header-content > div > div:last-child img", "click", function () {
                document.querySelector("body").classList.toggle("show-video");
            })
            live(".front-page--header-content > div > div:last-child img", "click", function () {
                var video = document.querySelector('.seamwork-video');
                if (video.paused) {
                    video.play();
                    playPauseBtn.textContent = 'Pause';
                } else {
                    video.pause();
                    playPauseBtn.textContent = 'Play';
                }
            })



        }

        /* Initialise variation */
        waitForElement("body", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();