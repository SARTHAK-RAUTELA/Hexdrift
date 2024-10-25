if (!window.location.pathname.includes('/what-happens-next-treatment-review/') && 
    !window.location.pathname.includes('/next-steps/')){

      

(function () {
    try {
        /* main variables */
        var debug = 1;
        var variation_name = "test123";

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

        var form_20 = `
          <div class="cre-20-form">
              <div class="cre-20-form-heading" >Are you currently taking gender affirming medication?</div>
              <div class="form-single-column">
                  <label class="form-radio-item cre-20-yes">
                      <input type="radio" name="consent" value="yes">
                      Yes
                  </label>
                  <label class="form-radio-item cre-20-no">
                      <input type="radio" name="consent" value="no">
                      No
                  </label>
              </div>
          </div>`;

        var dummyButtonsOnNewStep = `
        <div class="cre-t-20-formButons">
             <div class="cre-dummy-back-button form-pagebreak-back jf-form-buttons">
                Back
            </div>

            <div class="cre-dummy-next-button form-pagebreak-next jf-form-buttons form-submit-button-orange-500">
                Next
            </div>
        </div>`;

        function selectSecondOptionForDropdowns() {
            const dropdowns = document.querySelectorAll('ul[data-step="current-medication-step"] [data-type="control_dropdown"] select');
            dropdowns.forEach((dropdown) => {
                if (dropdown.options.length >= 2) {
                    dropdown.selectedIndex = 1;
                }
            });
        }

        function eventHandler() {

            live('[data-step="current-medication-step"] .cre-dummy-next-button', "click", function () {
                if (document.querySelector(".cre-20-yes input").checked) {
                    waitForElement('ul[data-step="current-medication-step"]', function () {
                        document.querySelector('ul[data-step="current-medication-step"]').classList.add("cre20YesSelected");
                        document.querySelector('ul[data-step="current-medication-step"]').classList.add("cre-20-stepParsed");
                    })
                } else if (document.querySelector(".cre-20-no input").checked) {
                    document.querySelector('ul[data-step="current-medication-step"]').classList.add("cre-20-stepParsed");
                    document.querySelector('ul[data-step="current-medication-step"]').classList.add("cre20NoSelected");
                    selectSecondOptionForDropdowns();

                    waitForElement('ul[data-step="current-medication-step"]  [data-type="control_radio"] >label', function () {
                        document.querySelector('ul[data-step="current-medication-step"]  [data-type="control_radio"] >label').innerHTML = "Do you have capacity to consent to your own medical treatment?";
                        document.querySelector('ul[data-step="current-medication-step"]  [data-type="control_radio"] .form-single-column >span:nth-child(1) label').innerText = "Yes";
                        document.querySelector('ul[data-step="current-medication-step"]  [data-type="control_radio"] .form-single-column >span:nth-child(2) label').innerText = "No";
                        document.querySelector('ul[data-step="current-medication-step"]  [data-type="control_radio"] .form-single-column >span:nth-child(3) label').innerText = "Someone is helping me";
                    })
                }
            })

            live('[data-step="current-medication-step"] .cre-dummy-back-button', "click", function () {
                if (document.querySelector('[data-step="current-medication-step"]  .form-pagebreak [data-component="pagebreak-back"]')) {
                    document.querySelector('[data-step="current-medication-step"]  .form-pagebreak [data-component="pagebreak-back"]').click()
                }
                document.querySelector('ul[data-step="current-medication-step"].cre-20-stepParsed')?.classList.remove("cre-20-stepParsed");
            })

            live(".cre-dummyBack","click",function(){
                document.querySelector(".cre20YesSelected")?.classList.remove("cre20YesSelected");
                document.querySelector(".cre20NoSelected")?.classList.remove("cre20NoSelected");
                document.querySelector(".cre-20-stepParsed")?.classList.remove("cre-20-stepParsed");

            })

        }

        function init() {
            waitForElement('ul[data-step="current-medication-step"]', function () {
                document.querySelector("body").classList.add("CRE-20");

                if (!document.querySelector(".cre-20-form")) {
                    document.querySelector(`ul[data-step="current-medication-step"]`).insertAdjacentHTML("afterbegin", form_20);
                }

            })

            waitForElement('[data-step="current-medication-step"]', function () {
                if (!document.querySelector(".cre-t-20-formButons")) {
                    document.querySelector('[data-step="current-medication-step"]').insertAdjacentHTML("beforeend", dummyButtonsOnNewStep)
                }
            })

            waitForElement('[data-step="current-medication-step"] .form-pagebreak-back-container button',function(){
                if(!document.querySelector('.cre-dummyBack')){
                    document.querySelector('[data-step="current-medication-step"] .form-pagebreak-back-container button').insertAdjacentHTML("beforebegin","<div class='cre-dummyBack form-pagebreak-back jf-form-buttons'>Back</div>")
                }
            })

            if (!window.eventListenerAddedTest159) {
                window.eventListenerAddedTest159 = true;
                eventHandler()
            }
        }

        if (!window.location.pathname.includes('/what-happens-next-treatment-review/') &&
            !window.location.pathname.includes('/next-steps/')) {
            init()
        }

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();


}