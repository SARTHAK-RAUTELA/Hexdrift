if (!window.location.href.includes("https://www.gendergp.com/next-steps/")){

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

  // src/conversion-rate-experts/GenderGP-Test7/variation2/index.js
  var CRET3hero = `
  <div class="CRE-T7-hero-container">
	  <div class="CRE-T7-hero-text">
		  <h1 class="CRE-T7-hero-heading">
			  Skip the NHS's <span class="pink-underline">5-10 year </span> wait times. Get gender-altering medications in just 3-5 days. 
		  </h1>
		  <div class="CRE-T7-hero-bullets-section">
			  <div class="CRE-T7-bullet-point">
				  <p class="CRE-T7-bullet-text">
					 
 <span class="bullet-bold">We organise medical transition private prescriptions so you can quickly and easily access the care you need,</span>  with compassionate guidance every step of the way.


				  </p>
			  </div>
			  <div class="CRE-T7-bullet-point">
				  <p class="CRE-T7-bullet-text">
                    <span class="bullet-bold">Join thousands of transgender and non-binary people we\u2019ve helped transition</span>  and support their health and wellbeing. You are not alone! 
					
				  </p>
			  </div>
			 
			 
		  </div>
		  <div class="cre-ctastart">
			<div class="journey"> 
			  <a href="https://www.gendergp.com/accessing-gender-affirming-care/" class="Crestart-journey-button"> Get my medication</a>
			</div>
			
		  </div>
	  </div>
	  <div class="CRE-T7-hero-image">
		  <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007617/banner-min.jpg" width="850" />
            <div class="cre-text-image">
            
"Without GenderGP, I would have had to wait 5-7 years for HRT through the NHS. I would be dead if it were not for GGP. Now I\u2019m 11 months on HRT, my life has done a 180\xB0.\u201D    
             
            </div>                                                
                                                            
            <div>  \u2014Customer survey respondent, Jul 2024</div>
	  </div>
  </div>
  </div>
  `;
  waitFor(
    () => document.querySelector('[class*="css_mix_blend_mode_passthrough"] + div .et_pb_text_inner'),
    () => {
      document.querySelector("body").classList.add("cre-7");
      var sliderDiv = document.querySelector("#welcome-gate");
      if (!document.querySelector(".CRE-T7-hero-container")) {
        sliderDiv && sliderDiv.insertAdjacentHTML("afterend", CRET3hero);
      }
    },
    {
      interval: 50,
      duration: 15e3
    }
  );
})();
}