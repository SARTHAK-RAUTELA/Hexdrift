(function() {
    try {
        /* main variables */
        var debug = 1;
        var variation_name = "Gender_gb_test10";

        /* helper library */
        var _$;
        !(function(factory) {
            _$ = factory();
        })(function() {
            var bm = function(s) {
                if (typeof s === "string") {
                    this.value = Array.prototype.slice.call(document.querySelectorAll(s));
                }
                if (typeof s === "object") {
                    this.value = [s];
                }
            };
            bm.prototype = {
                eq: function(n) {
                    this.value = [this.value[n]];
                    return this;
                },
                each: function(fn) {
                    [].forEach.call(this.value, fn);
                    return this;
                },
                log: function() {
                    var items = [];
                    for (let index = 0; index < arguments.length; index++) {
                        items.push(arguments[index]);
                    }
                    console && console.log(variation_name, items);
                },
                addClass: function(v) {
                    var a = v.split(" ");
                    return this.each(function(i) {
                        for (var x = 0; x < a.length; x++) {
                            if (i.classList) {
                                i.classList.add(a[x]);
                            } else {
                                i.className += " " + a[x];
                            }
                        }
                    });
                },
            };
            return function(selector) {
                return new bm(selector);
            };
        });
        const urlMappings = {
            "https://www.gendergp.com/help-centre/gendergp-service-costs/": "https://new.gendergp.com/fees/",
            "https://www.gendergp.com/help-centre/professionals-contact/": "https://new.gendergp.com/talk-2-someone/",
            "https://www.gendergp.com/help-centre/request-a-one-off-prescription/": "https://new.gendergp.com/help-centre/pharmacy-options/",
            "https://www.gendergp.com/help-centre/patients-membership/": "https://new.gendergp.com/become-a-member/",
            "https://www.gendergp.com/locations/": "https://new.gendergp.com/global-resources/",
            "https://www.gendergp.com/about/updates-and-information/": "https://new.gendergp.com/about/",
            "https://www.gendergp.com/the-gendergp-fund/": "https://new.gendergp.com/surgery/",
            "https://www.gendergp.com/help-centre/reduced-costs/": "https://new.gendergp.com/fees/",
            "https://www.gendergp.com/brochure/": "https://new.gendergp.com/latest-news/",
            "https://www.gendergp.com/news/": "https://new.gendergp.com/latest-news/",
            "https://www.gendergp.com/testimonials/": "https://new.gendergp.com/transgender-stories/",
            "https://www.gendergp.com/gendergp-network/marianne-oakes/": "https://new.gendergp.com/therapy/",
            "https://www.gendergp.com/podcasts/": "https://new.gendergp.com/",
            "https://www.gendergp.com/raising-concerns/": "https://new.gendergp.com/advocacy-hub/",
            "https://www.gendergp.com/advocacy/petition/": "https://new.gendergp.com/advocacy-hub/",
            "https://www.gendergp.com/gendergp-network/jayne-olden/": "https://new.gendergp.com/therapy/",
            "https://www.gendergp.com/gendergp-network/jackie-swarbrick/": "https://new.gendergp.com/therapy/",
            "https://www.gendergp.com/gender-affirming-treatment-for-trans-youth/": "https://new.gendergp.com/youth-hub/",
            "https://www.gendergp.com/important-documents/": "https://new.gendergp.com/global-resources/",
            "https://www.gendergp.com/gendergp-network/james-byrne/": "https://new.gendergp.com/therapy/",
            "https://www.gendergp.com/advocacy/correspondence/": "https://new.gendergp.com/advocacy-hub/",
            "https://www.gendergp.com/follow-up-form/": "https://new.gendergp.com/accessing-gender-affirming-care/",
            "https://www.gendergp.com/nhse/": "https://new.gendergp.com/",
            "https://www.gendergp.com/non-binary-hub/": "https://new.gendergp.com/category/non-binary-people/",
            "https://www.gendergp.com/test-stripe-button/": "https://new.gendergp.com/",
            "https://www.gendergp.com/gendergp-network/claire-booth/": "https://new.gendergp.com/therapy/",
            "https://www.gendergp.com/mpts-testimonials/": "https://new.gendergp.com/transgender-stories/",
            "https://www.gendergp.com/annual-reviews/": "https://new.gendergp.com/latest-news/",
            "https://www.gendergp.com/case-studies/": "https://new.gendergp.com/transgender-stories/",
            "https://www.gendergp.com/trans-woman-hub/": "https://new.gendergp.com/category/trans-woman/",
            "https://www.gendergp.com/guidance/": "https://new.gendergp.com/global-resources/",
            "https://www.gendergp.com/gendergp-network/diana-hattersley/": "https://new.gendergp.com/therapy/",
            "https://www.gendergp.com/huffington-post/": "https://new.gendergp.com/media/",
            "https://www.gendergp.com/advocacy/affirmative-care-for-trans-youth-live-discussion/": "https://new.gendergp.com/advocacy-hub/",
            "https://www.gendergp.com/gmc-requests-to-meet/": "https://new.gendergp.com/advocacy-hub/",
            "https://www.gendergp.com/new-patient-prescribing-protocols/": "https://new.gendergp.com/pharmacy-hub/",
            "https://www.gendergp.com/help-centre/media-enquiries/": "https://new.gendergp.com/media/",
            "https://www.gendergp.com/medical-hub/professional-indemnity/": "https://new.gendergp.com/medical-hub/",
            "https://www.gendergp.com/gender-questioning-hub/": "https://new.gendergp.com/category/gender-questioning/",
            "https://www.gendergp.com/how-should-i-support-my-trans-child/": "https://new.gendergp.com/category/parents-of-trans-youth/",
            "https://www.gendergp.com/rcgp/": "https://new.gendergp.com/advocacy-hub/",
            "https://www.gendergp.com/trans-man-hub/": "https://new.gendergp.com/fees/",
            "https://www.gendergp.com/voice-workshops/": "https://new.gendergp.com/support-services/",
            "https://www.gendergp.com/help-centre/patients-membership-20/": "https://new.gendergp.com/fees/",
            "https://www.gendergp.com/advocacy/": "https://new.gendergp.com/advocacy-hub/",
            "https://www.gendergp.com/advocacy/bell-and-mrs-a-v-tavistock/": "https://new.gendergp.com/analysis-bell-v-tavistock-judgment/",
            "https://www.gendergp.com/treatment-review/": "https://new.gendergp.com/existing-members/",
            "https://www.gendergp.com/advocacy-hub/nhs-digital/": "https://new.gendergp.com/category/advocacy-archive/",
            "https://www.gendergp.com/media-exposure/": "https://new.gendergp.com/media/",
            "https://www.gendergp.com/payments_joining-fee/": "https://new.gendergp.com/fees/",
            "https://www.gendergp.com/subscribe-to-podcast/": "https://new.gendergp.com/",
            "https://www.gendergp.com/advocacy-hub/british-menopause-society/article-template/": "https://new.gendergp.com/advocacy-hub/british-menopause-society/",
            "https://www.gendergp.com/enrolment-checklist/": "https://new.gendergp.com/",
            "https://www.gendergp.com/f87h43/": "https://new.gendergp.com/",
            "https://www.gendergp.com/geo/": "https://new.gendergp.com/",
            "https://www.gendergp.com/join-our-pharmacy-network/": "https://new.gendergp.com/",
            "https://www.gendergp.com/kindness-counts/": "https://new.gendergp.com/",
            "https://www.gendergp.com/page/": "https://new.gendergp.com/",
            "https://www.gendergp.com/payments_formal-diagnosis-letter-fee/": "https://new.gendergp.com/",
            "https://www.gendergp.com/payments_set-up-fee/": "https://new.gendergp.com/fees/",
            "https://www.gendergp.com/prescription-check/": "https://new.gendergp.com/",
            "https://www.gendergp.com/project/": "https://new.gendergp.com/",
            "https://www.gendergp.com/where-now/": "https://new.gendergp.com/",
            "https://www.gendergp.com/write-to-the-bbc/": "https://new.gendergp.com/",
            "https://www.gendergp.com/help-centre/blood-testing-services/": "https://new.gendergp.com/help-centre/blood-test-orders/",
            "https://www.gendergp.com/": "https://new.gendergp.com/",
            "https://www.gendergp.com/treatment-reviews/": "https://new.gendergp.com/existing-members/",
            "https://www.gendergp.com/help-centre/surgery-referral/": "https://new.gendergp.com/surgery/",
            "https://www.gendergp.com/consent-session/": "https://new.gendergp.com/igs/",
            "https://www.gendergp.com/what-happens-next/": "https://new.gendergp.com/next-steps/",
            "https://www.gendergp.com/next-steps/": "https://new.gendergp.com/next-steps/",
            "https://www.gendergp.com/new-form-test/": "https://new.gendergp.com/",
            "https://www.gendergp.com/jobs/": "https://new.gendergp.com/",
            "https://www.gendergp.com/payments_travelling-with-medication-fee/": "https://new.gendergp.com/",
            "https://www.gendergp.com/payments_paper-prescription-fee/": "https://new.gendergp.com/",
            "https://www.gendergp.com/payments_electronic-prescription-fee/": "https://new.gendergp.com/",
            "https://www.gendergp.com/team-requests/": "https://new.gendergp.com/",
            "https://www.gendergp.com/quality-assurance-feedback/": "https://new.gendergp.com/",
            "https://www.gendergp.com/workbox/": "https://new.gendergp.com/",
            "https://www.gendergp.com/thank-you-for-subscribing/": "https://new.gendergp.com/",
            "https://www.gendergp.com/feedback-gender-affirming/": "https://new.gendergp.com/",
            "https://www.gendergp.com/workspace/": "https://new.gendergp.com/pharmacy-hub/",
            "https://www.gendergp.com/sitemap/": "https://new.gendergp.com/sitemap_index.xml",
            "https://www.gendergp.com/your-message-has-been-successfully-sent/": "https://new.gendergp.com/",


        };

        function redirectToMappedUrl() {
            const currentUrl = window.location.href;
            const baseUrl = currentUrl.split('?')[0];
            const queryParams = window.location.search;
            if (urlMappings.hasOwnProperty(baseUrl)) {
                let newUrl = urlMappings[baseUrl];
                if (queryParams) {
                    newUrl += queryParams;
                    console.log(newUrl)
                }
                convert.redirect(newUrl);
                console.log(newUrl)
            }
        }
        var helper = _$();
        helper.log('Log inside from init');
        _$('body').addClass(variation_name)
        if (!window.location.href.includes("new.gendergp.com")) {
            redirectToMappedUrl()
        }
        /* Initialise variation */

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();