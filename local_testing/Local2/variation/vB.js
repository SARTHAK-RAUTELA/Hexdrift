(function () {
    try {
        /* main variables */
        var debug = 1;
        var variation_name = "cre-t-03";
  
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
  
        function waitForSwiper(trigger) {
            var interval = setInterval(function () {
                if (typeof Swiper != 'undefined') {
                    clearInterval(interval);
                    trigger();
                }
            })
            setTimeout(function () {
                clearInterval(interval);
            }, 15000)
        }
  
        var bac_summer = `<div class="summer_section">
    <div class="summer_container">
        <h2 class="summer_heading">Unlock Your Future This Summer.</h2>
        <p class="summer_pera">Since 2005, Reach Cambridge has delivered life-changing summer programs for students aged
            14-18. Choose from two, four, or six-week experiences that spark curiosity, inspire confidence, and create
            memories to last a lifetime.</p>
        <div class="summer_list">
            <!---lst1--->
            <div class="summer_item">
                <h3 class="families_heading">Endorsed by Experts, Trusted by Families </h3>
                <p class="families_subheading">At Reach Cambridge, quality and care are at the heart of everything we
                    do. <strong>Accredited by the British Accreditation Council (BAC),</strong> we’re recognized for
                    delivering programs of exceptional academic and personal value.</p>
  
                <p class="families_subheading">This commitment to excellence means every student not only feels safe and
                    supported but leaves with an experience that is truly transformative.</p>
            </div>
            <!---lst2--->
            <div class="summer_item">
                <div class="testimonial_box">
                    <div class="testimonial_icon">
                        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007715/noun-quote_6784b355c8aa8.svg"
                            alt="">
                    </div>
                    <p class="testimonial_content">Teaching and learning are of a high quality, using <strong> highly
                            qualified, experienced and engaging teachers.</strong> </p>
                    <p class="testimonial_content">Programmes are well-designed to offer participants
                        a<strong> well-rounded mix of academic and personal development opportunities.”</strong></p>
                </div>
                <div class="bac_box">
                    <div class="bac_logo">
                        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007715/bac-logo_6784b343a4e04.svg"
                            alt="">
                    </div>
                </div>
            </div>
                
            </div>
        </div>
        </div>`;
  
  
        async function generateTestimonialSlides() {
            var testimonialSlides = document.querySelectorAll('[data-id="5bb148c"].best_testimonials .swiper-wrapper>div');
            var slidesHTML = "";  // Create a variable to hold the generated HTML for all slides
  
            testimonialSlides.forEach(function(testimonialSlide,index){
              var html = "";
  
                var testimonialProfileIcon = testimonialSlide.querySelector(".rcbubble_image img").getAttribute("src");
                var testimonialCountryIcon = testimonialSlide.querySelector(".rcbubble_country img").getAttribute("src");
                var testimonialProfileName = testimonialSlide.querySelector(".name").innerHTML;
                var testimonialCourse = testimonialSlide.querySelector(".course").innerHTML;
                var testimonialContent = testimonialSlide.querySelector(".testimonial").innerHTML;
              var slideIndex = ""
                if(index % 2 == 0){
                  slideIndex = "cre-blue-vector";
                }else{
                  slideIndex = "cre-orange-vector";
                }
  
                html += `
                <div class='cre-t-03-testimonialSlide swiper-slide ${slideIndex}'>
                  <div class="cre-t-03-testimonial-head">
                      <div class="cre-t-03-testimonialSlide-header">
                          <div class="cre-t-03-testimonialSlide-country">
                              <img src='${testimonialCountryIcon ? testimonialCountryIcon : ""}' alt="cre-t-03-testimonial-countryIcon">
                              
                          </div>
                      </div>
  
                      <div class="cre-t-03-testimonialSlide-body"> 
                          <div class="cre-t-03-testimonialSlide-quoteIcon">
                          <img src='https://cdn-3.convertexperiments.com/uf/10007679/10007715/cre-t-03-testimonialquote_6788c17dad5d4.png' alt='cre-t-03-testimonialSlide-quoteIcon'>
                          </div>
                          <p class="cre-t-03-testimonialSlide-content">
                              ${testimonialContent ? testimonialContent : ""}
                          </p>
                      </div>
                  </div>
  
                  <div class="cre-t-03-testimonial-bottom">
                      <div class="cre-t-03-testimonialSlide-footer">
                          <div class="cre-t-03-testimonial-profile">
                          <img src='${testimonialProfileIcon ? testimonialProfileIcon : ""}' alt="cre-t-03-testimonial-ProfileIcon">
                              
                          </div>
                          <div class="cre-t-03-testimonial-description">`
  
                          if(testimonialProfileName){
                             html +=`
                              <div class="cre-t-03-testimonial-name">
                                  ${testimonialProfileName ? testimonialProfileName : ""}
                              </div>`
                             
                          }else{
                              html +=`
                              <div class="cre-t-03-testimonial-name cre-dummyItem">
                                  ${testimonialProfileName ? testimonialProfileName : "testimonialProfileName"}
                              </div>`
                          }
                              
                          if(testimonialCourse){
                              html +=`
                              <div class="cre-t-03-testimonial-course">
                                  ${testimonialCourse ? testimonialCourse : ""}
                              </div>`
                          }else{
                              html +=`
                              <div class="cre-t-03-testimonial-course cre-dummyItem">
                                  ${testimonialCourse ? testimonialCourse : "testimonialCourse"}
                              </div>`
                          }
  
                          html +=`
                          </div>
                      </div>
                  </div>
              </div>`;
  
                slidesHTML += html;
            })
  
            return slidesHTML;  // Return the full HTML of all testimonial slides
        }
  
        async function AddTestimonial() {
            var slides = await generateTestimonialSlides();  // Await the HTML for the slides
            var creTestimonialSlider = `
            <div class='cre-t-03-testimonial-section'>
            <h3 class='cre-t-03-testimonial-heading'>What families and students are saying</h3>
            <div class='cre-t-03-testimonial-section-wrapper'>
            <div class="cre-t-03-testimonial-container swiper">
            
                <div class="cre-t-03-testimonial-wrapper swiper-wrapper">
                        ${slides}
                </div>
            </div>
            <div class="cre-t-03-testimonial-button-prev"><img src='https://cdn-3.convertexperiments.com/uf/10007679/10007715/cre-t-03button_6788c189a0def.png' alt='cre-testimonial-prevButton'></div>
                <div class="cre-t-03-testimonial-button-next"><img src='https://cdn-3.convertexperiments.com/uf/10007679/10007715/cre-t-03button_6788c189a0def.png' alt='cre-testimonial-nextButton'></div>
            </div>
            </div>`;
  
        waitForElement('[data-id="e6b6972"]', function () {
            if(!document.querySelector(".cre-t-03-testimonial-container")){
                document.querySelector('[data-id="e6b6972"]').insertAdjacentHTML("afterend", creTestimonialSlider);
            }
        })
        }
  
        function init(){
          waitForElement('.best_testimonials[data-id="5bb148c"] .swiper', function () {
  
              document.querySelector("body").classList.add(variation_name)
  
              // Initialize Swiper with 3 slides per view------
              waitForSwiper(async function () {
                  
                  setTimeout(async function(){
                      if (document.querySelector('.best_testimonials[data-id="5bb148c"] .swiper')?.swiper) {
                          document.querySelector('.best_testimonials[data-id="5bb148c"] .swiper').swiper.destroy(true, true);
                      }
        
                      // Wait for testimonial slides to be generated before adding them to the DOM
                      await AddTestimonial();  // Ensure the slides are added before initializing the swiper
        
                      waitForElement(".cre-t-03-testimonial-container",function(){
                          // Initialize the Swiper
                      var swiper = new Swiper('.cre-t-03-testimonial-container', {
                          slidesPerView: 3,
                          spaceBetween: 30,
                          loop: true,
                          navigation: {
                              nextEl: '.cre-t-03-testimonial-button-next',
                              prevEl: '.cre-t-03-testimonial-button-prev',
                          },
                          breakpoints: {
                              0:{
                                  slidesPerView: 1.1,
                                  spaceBetween: 20,
                              },
                              767:{
                                  slidesPerView: 2,
                                  spaceBetween: 20,
                              },
                              1024: {
                                  slidesPerView: 3,
                                  spaceBetween: 20,
                              }
                          }
                      });
                      })
                  },0)
                  
                  
              })
    
              // Inserting the testimonial above section--------
              waitForElement('[data-id^="0b25c22"][id^="cover"]', function () {
                  if (!document.querySelector(".summer_section")) {
                      document.querySelector('[data-id^="0b25c22"][id^="cover"]').insertAdjacentHTML("afterend",bac_summer)
                  }
              })
              
          })
        }
  
        waitForElement('.best_testimonials[data-id="5bb148c"] .swiper', init);
  
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();