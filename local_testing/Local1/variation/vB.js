(() => {
    var __defProp = Object.defineProperty;
    var __name = (target, value) => __defProp(target, "name", { value, configurable: true });



    // lib/bm-js/lib/index.js
    var waitFor = /* @__PURE__ */ __name((check, invoke, poll) => {
        if (check()) {
            invoke();
            return;
        }
        let polling = setInterval(() => {
            try {
                if (check()) {
                    invoke();
                    clearInterval(polling);
                    polling = null;
                }
            } catch (e) {
                console.info("listener not processed");
            }
        }, poll.interval);
        setTimeout(() => {
            if (!polling)
                return;
            clearInterval(polling);
            console.info("render listener timeout", poll);
            window.evolvRenderTimeout = {
                msg: "evolv render listener timeout",
                poll
            };
        }, poll.duration);
    }, "waitFor");
    var $refs = /* @__PURE__ */ __name((selector) => {
        if (!selector) {
            console.error(`Invalid selector!`);
            return;
        }
        const els = document.querySelectorAll(selector);
        if (!els || !els.length) {
            console.error(`Selector ${selector} does not exist in DOM!`);
            return;
        }
        return els;
    }, "$refs");
    var $addClass = /* @__PURE__ */ __name((selector, classes) => {
        if (!classes) {
            console.error("Atleast one class is required!");
            return;
        }
        const elements = $refs(selector);
        if (!elements)
            return;
        if (Array.isArray(classes)) {
            elements.forEach((el) => {
                el.classList.add(...classes);
            });
            return;
        }
        if (typeof classes === "string") {
            elements.forEach((el) => {
                el.classList.add(classes);
            });
        }
    }, "$addClass");
    var $live = /* @__PURE__ */ __name((selector, event, callback, context) => {
        const addEvent = /* @__PURE__ */ __name((el, type, handler) => {
            if (el.attachEvent) {
                el.attachEvent("on" + type, handler);
            } else {
                el.addEventListener(type, handler);
            }
        }, "addEvent");
        if (Element.prototype.matches === void 0) {
            Element.prototype.matches = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.msMatchesSelector || function (selector2) {
                let node = this;
                let nodes = (node.parentNode || node.document).querySelectorAll(
                    selector2
                );
                let i = -1;
                while (nodes[++i] && nodes[i] != node)
                    ;
                return !!nodes[i];
            };
        }
        const liveBinding = /* @__PURE__ */ __name((selector2, event2, callback2, context2) => {
            addEvent(context2 || document, event2, function (e) {
                let found;
                let el = e.target || e.srcElement;
                while (el && el.matches && el !== context2 && !(found = el.matches(selector2)))
                    el = el.parentElement;
                if (found)
                    callback2.call(el, e);
            });
        }, "liveBinding");
        liveBinding(selector, event, callback, context);
    }, "$live");

    // src/conversion-rate-experts/seaworld/SeaWorld-SEA191/variation1/index.js
    var HtmlContent191 = `
<div class="CRE-191-Banner">
<div class="lower-row">
<div class="calender-icon"><img src="https://cdn.optimizely.com/img/10196690105/f31edc8250ea44538ea7f6a01eee937a.png"></div>
<div class="lower-row-sub"><span class="cre-191-bold">Book now, prices for April are lower than average. </span><span><span> </span>
</div>

`;

    function insertNewHTML() {
        if (window.innerWidth > 767) {
            waitFor(
                () => document.querySelector(".modal--active .modal__content li") ? true : false,
                () => {
                    document.querySelector(".date-time-select-modal__subtitle").innerHTML = "Select a date to see ticket prices";
                    if (!document.querySelector(".CRE-191-Banner")) {
                        document.querySelector(".modal--active .modal__content").insertAdjacentHTML("afterend", HtmlContent191);
                    }
                }, {
                interval: 50,
                duration: 15e3
            }
            );
        } else {
            waitFor(
                () => document.querySelector(".modal__content .date-time-select-modal__calendar") ? true : false,
                () => {
                    document.querySelector(".date-time-select-modal__subtitle").innerHTML = "Select a date to see ticket prices";
                    if (!document.querySelector(".CRE-191-Banner")) {
                        document.querySelector(".modal__content .date-time-select-modal__calendar").insertAdjacentHTML("afterend", HtmlContent191);
                    }
                }, {
                interval: 50,
                duration: 15e3
            }
            );
        }

    }
    __name(insertNewHTML, "insertNewHTML");
    waitFor(
        () => document.querySelector(".product-catalog-card__date-input .form-group__input") ? true : false,
        () => {
            $addClass("body", "CRE-191");
            if (!window.eventHandlerAdded191) {
                insertNewHTML();
                eventHandler191();
                window.eventHandlerAdded191 = true;
            }
        },
        {
            interval: 50,
            duration: 15e3
        }
    );
    function eventHandler191() {
        $live(".product-catalog-card__date-input .form-group__input", "mousedown", function () {
            
            insertNewHTML();
        });
     
    }
    __name(eventHandler191, "eventHandler191");
})();