(function () {
    try {
      /* main variables */
      var debug = 1;
      var variation_name = "cre-t-28";
      /* all Pure helper functions */
  
      function waitForElement(selector, trigger, delayInterval, delayTimeout) {
        var interval = setInterval(function () {
          if (document.querySelector(selector)) {
            clearInterval(interval);
            trigger();
          }
        }, delayInterval);
        setTimeout(function () {
          clearInterval(interval);
        }, delayTimeout);
      }
  
      function live(selector, event, callback, context) {
        // helper for enabling IE 8 event bindings
        function addEvent(el, type, handler) {
          if (el.attachEvent) el.attachEvent("on" + type, handler);
          else el.addEventListener(type, handler);
        }
        // matches polyfill
        this &&
          this.Element &&
          (function (ElementPrototype) {
            ElementPrototype.matches =
              ElementPrototype.matches ||
              ElementPrototype.matchesSelector ||
              ElementPrototype.webkitMatchesSelector ||
              ElementPrototype.msMatchesSelector ||
              function (selector) {
                var node = this,
                  nodes = (node.parentNode || node.document).querySelectorAll(
                    selector,
                  ),
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
  
      var icons = {
        battery:
          "https://cdn-3.convertexperiments.com/uf/10007679/10007617/battery_674eaa3a49fd4.svg",
        bell: "https://cdn-3.convertexperiments.com/uf/10007679/10007617/bell_674eaa547a7ef.svg",
        blood_test:
          "https://cdn-3.convertexperiments.com/uf/10007679/10007617/blood_test_674eaaa911131.png",
        chat: "https://cdn-3.convertexperiments.com/uf/10007679/10007617/chat_674eaad62586f.svg",
        arrow:
          "https://cdn-3.convertexperiments.com/uf/10007679/10007617/arrow_674eaa1e4bb53.svg",
        clock_circle:
          "https://cdn-3.convertexperiments.com/uf/10007679/10007617/clock_circle_674eaaf6ae236.svg",
        user: "https://cdn-3.convertexperiments.com/uf/10007679/10007617/user_image_674eac8852977.jpeg",
        wifi: "https://cdn-3.convertexperiments.com/uf/10007679/10007617/wifi_674eacaa4fc44.svg",
        network:
          "https://cdn-3.convertexperiments.com/uf/10007679/10007617/network_674eabec56a52.svg",
        clock:
          "https://cdn-3.convertexperiments.com/uf/10007679/10007617/clock_674eab2495ee5.svg",
        extra_items:
          "https://cdn-3.convertexperiments.com/uf/10007679/10007617/extra_items_674eab4b2044c.png",
        gender_gp_logo:
          "https://cdn-3.convertexperiments.com/uf/10007679/10007617/gender_gp_logo_674eab68b64fc.svg",
        hamburger:
          "https://cdn-3.convertexperiments.com/uf/10007679/10007617/hamburger_674eab9390716.svg",
        home: "https://cdn-3.convertexperiments.com/uf/10007679/10007617/home_674eabb07c91f.svg",
        journey:
          "https://cdn-3.convertexperiments.com/uf/10007679/10007617/journey_674eabcf605a5.png",
        profile:
          "https://cdn-3.convertexperiments.com/uf/10007679/10007617/profile_674eac0853a83.svg",
        rocket:
          "https://cdn-3.convertexperiments.com/uf/10007679/10007617/rocket_674eac2a3ad40.png",
        test_tube:
          "https://cdn-3.convertexperiments.com/uf/10007679/10007617/test_tube_674eac45ecc09.svg",
        transition_pack:
          "https://cdn-3.convertexperiments.com/uf/10007679/10007617/transition_pack_674eac6b0dab9.png",
        modal_cross:
          "https://cdn-3.convertexperiments.com/uf/10007679/10007617/gender-28-cross-modal_675697fd20ef3.png",
      };
  
      var modal =` <div class="cre_t_28_modal_container">
        <span  class="cre_t_28_modal_close">
            <img src="${icons.modal_cross}" alt="gender-28-cross-modal">
        </span>
        <div class="cre_t_28_modal_wrapper">
            <div class="cre_t_28_modal_main">
                <div class="cre_t_28_modal_left">
                    <span  class="cre_t_28_modal_close">
                        <img src="${icons.modal_cross}" alt="gender-28-cross-modal">
                    </span>
                    <div class="cre_t_28_modal_heading-container">
                        <div class="cre_t_28_modal_subheading">
                            Coming in December:
                        </div>
                        <div class="cre_t_28_modal_heading">
                            The new GenderGP hub!
                        </div>

                        <div class="cre_t_28_modal_paragraph">
                            We know how life-changing it is to access the care you need—and how important it is to feel
                            supported along the way.
                            <br>
                            <br>
                            That’s why we’re introducing the new GenderGP hub: a simpler, faster, and more empowering
                            way to
                            manage your care.
                        </div>
                    </div>
                    <div class="cre_t_28_modal_glimps_container">
                        <h3 class="cre_t_28_modal_glimps_heading">
                            A glimpse at what is changing...
                        </h3>
                        <div class="cre_t_28_quick_faq">Also see quick FAQs</div>
                        <div class="cre_t_28_modal_glimps_tiles_container">
                            <div class="cre_t_28_modal_glimps_tile cre_t_28_modal_glimps_tile_1">
                                <span class="cre_t_28_modal_tile_index">1</span>
                                <h3 class="cre_t_28_modal_tile_heading">Now your treatment plan will renew
                                    automatically!</h3>
                                    <p class="cre_t_28_modal_tile_paragraph">
                                        <span class="cre_t_28_bold">Say goodbye to repetitive form filling! </span>Your Transition Pack, including your details, prescriptions, and preferences, is <span class="cre_t_28_bold">securely saved in your account area</span>—no need to re-enter anything each time you need a prescription.
                                        <br>
                                        <br>
                                        Two weeks before your medication is due, paper prescriptions are generated and sent to your doctor or pharmacy of choice, with delivery times factored in to <span class="cre_t_28_bold">ensure everything arrives on time.</span>
                                        <br>
                                        <br>
                                        You’ll receive a notification beforehand to keep you in the loop. As long as your account is active, this process runs smoothly, ensuring you always have what you need.
                                        <br>
                                        <br>
                                        <span class="cre_t_28_bold">Prefer more control? No problem!</span> You can adjust timings or turn off the auto-renewal process at any time—we’re here to make it work for you.
                                        
                                    </p>
                            </div>
                            <div class="cre_t_28_modal_glimps_tile cre_t_28_modal_glimps_tile_2">
                                <span class="cre_t_28_modal_tile_index">2</span>
                                <h3 class="cre_t_28_modal_tile_heading">We’ve made blood tests easier, too!</h3>
                                <p class="cre_t_28_modal_tile_paragraph">The hub stores your results, sends built-in
                                    reminders, and tracks your progress to keep your care on track.</p>
                            </div>
                            <div class="cre_t_28_modal_glimps_tile cre_t_28_modal_glimps_tile_3">
                                <span class="cre_t_28_modal_tile_index">3</span>
                                <h3 class="cre_t_28_modal_tile_heading">A brand new members area which means...</h3>
                                <p class="cre_t_28_modal_tile_paragraph">All your details are saved and can be
                                    updated instantly whenever you need.</p>
                            </div>
                            <div class="cre_t_28_faq_sec cre_t_28_desktop">
                                <div class="cre_t_28_faq_heading">Quick FAQs </div>
                                <div class="cre_t_28_faq_ques">1. Will my prescriptions be sent out at the wrong time?</div>
                                <div class="cre_t_28_faq_ans">No! The new system is designed to prevent delays and mistakes. Prescriptions will be sent to your doctor or pharmacy two weeks before they’re due, and delivery times are factored in to ensure you always get your medication on time.</div>
                                <div class="cre_t_28_faq_ques"> 2. Do I lose control over when I renew prescriptions? Will I be charged automatically every 3 months?</div>
                                <div class="cre_t_28_faq_ans">Not at all. While we’ve automated the process to make it easier for you, you still have the option to make changes or adjustments.</div>
                                <div class="cre_t_28_faq_ques">3. Am I still paying £15 per prescription request?</div>
                                <div class="cre_t_28_faq_ans">No, the new system is more sophisticated. You will no longer pay per prescription request—unlimited prescription requests are covered by £5/month. If you get your prescriptions every 3 months, you will end up paying the same.</div>
                            </div>
                        </div>
                    </div>
                    <div class="cre_t_28_modal_left_footer">
                        <div class="cre_t_28_modal_left_footer_text">
                            <p>
                                <span>Already a member of GenderGP?</span> You’ll get exclusive access to the hub on
                                launch day—which won’t be long now!
                            </p>
                            <p>
                                <span>New to GenderGP?</span> Lucky you! You’ll enjoy our seamless, stress-free process
                                from (almost)
                                the very start.
                            </p>
                        </div>
                        <a href="https://www.gendergp.com/accessing-gender-affirming-care/" class="cre_t_28_modal_left_footer_button">Become a member today</a>
                        <p class="cre_t_28_modal_left_footer_mobile_text">Say hello to the new dashboard!</p>
                    </div>
                </div>
                <div class="cre_t_28_modal_right">
                    <div class="cre_t_28_modal_app_container">
                        <div class="cre_t_28_modal_app_top_bar">
                            <span class="cre_t_28_modal_app_time">1:47</span>
                            <div class="cre_t_28_modal_app_notch"></div>
                            <div class="cre_t_28_modal_app_icons_container">
                                <div class="cre_t_28_modal_app_network"><img src="${icons.network}" alt=""> </div>
                                <div class="cre_t_28_modal_app_wifi"><img src="${icons.wifi}" alt=""> </div>
                                <div class="cre_t_28_modal_app_battery"><img src="${icons.battery}" alt=""> </div>
                            </div>
                        </div>
                        <div class="cre_t_28_modal_app_second_bar">
                            <div class="cre_t_28_modal_app_second_bar_left">
                                <img src="${icons.gender_gp_logo}" class="cre_t_28_modal_app_logo" alt="">
                            </div>
                            <div class="cre_t_28_modal_app_second_bar_right">
                                <div class="cre_t_28_modal_app_bell">
                                    <img src="${icons.bell}" alt="">
                                </div>
                                <div class="cre_t_28_modal_app_profile_picture">
                                    <img src="${icons.user}" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="cre_t_28_modal_app_third_bar">
                            <div class="cre_t_28_modal_app_hello_user">
                                Hey, Monem
                            </div>
                            <div class="cre_t_28_modal_app_current_status">
                                <div class="cre_t_28_modal_app_active_status">Inactive</div>
                                <div class="cre_t_28_modal_app_pack">Transition Pack</div>
                            </div>
                        </div>
                        <div class="cre_t_28_modal_app_fourth_bar cre_t_28_modal_app_cards">
                            <div class="cre_t_28_modal_app_card cre_t_28_modal_app_subscription_card ">
                                <div class="cre_t_28_modal_app_card_top_icon">
                                    <img src="${icons.clock}" alt="">
                                </div>
                                <div class="cre_t_28_modal_app_card_title">
                                    Subscription
                                </div>
                                <div class="cre_t_28_modal_app_card_description">
                                    Your subscription plan has expired on:
                                </div>
                                <div class="cre_t_28_modal_app_card_arrow_container">
                                    <span>20 Aug, 2024</span>
                                    <img src="${icons.arrow}" alt="">
                                </div>
                            </div>
                            <div class="cre_t_28_modal_app_card cre_t_28_modal_app_profile_card">
                                <div class="cre_t_28_modal_app_card_top_icon">
                                    <img src="${icons.profile}" alt="">
                                </div>
                                <div class="cre_t_28_modal_app_card_title">
                                    Profile
                                </div>
                                <div class="cre_t_28_modal_app_card_description">
                                    You have yet to update your profile
                                </div>
                                <div class="cre_t_28_modal_app_card_arrow_container">
                                    <span>4 Days Left</span>
                                    <img src="${icons.arrow}" alt="">
                                </div>
                                <div class="cre_t_28_modal_app_card_extra_text">
                                    17 Sept, 2024
                                </div>
                            </div>
                            <div class="cre_t_28_modal_app_card cre_t_28_modal_app_consultation_card">
                                <div class="cre_t_28_modal_app_card_top_icon">
                                    <img src="${icons.test_tube}" alt="">
                                </div>
                                <div class="cre_t_28_modal_app_card_title">
                                    Online Consultation
                                </div>
                                <div class="cre_t_28_modal_app_card_description">
                                    Complete your Online Consultation
                                </div>
                                <div class="cre_t_28_modal_app_card_arrow_container">
                                    <span>20 Aug, 2024</span>
                                    <img src="${icons.arrow}" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="cre_t_28_modal_app_fifth_bar">
                            <h3 class="cre_t_28_modal_app_title">
                                Experts in trans
                                healthcare
                            </h3>
                            <div class="cre_t_28_modal_app_tiles">
                                <div class="cre_t_28_modal_app_tile cre_t_28_modal_app_tile_transition">
                                    <div class="cre_t_28_modal_app_tile_left">
                                        <div class="cre_t_28_modal_app_tile_heading">
                                            Transition Pack
                                        </div>
                                        <div class="cre_t_28_modal_app_tile_info">
                                            Your transition pack  is active.
                                        </div>
                                    </div>
                                    <div class="cre_t_28_modal_app_tile_right">
                                        <img src="${icons.transition_pack}" alt="">
                                    </div>
                                </div>
                                <div class="cre_t_28_modal_app_tile cre_t_28_modal_app_tile_journey">
                                    <div class="cre_t_28_modal_app_tile_left">
                                        <div class="cre_t_28_modal_app_tile_heading">
                                            Your
                                            Journey
                                        </div>
                                        <div class="cre_t_28_modal_app_tile_info">
                                            Last Update: 06 Aug, 2024
                                        </div>
                                    </div>
                                    <div class="cre_t_28_modal_app_tile_right">
                                        <img src="${icons.journey}" alt="">
                                    </div>
                                </div>
                                <div class="cre_t_28_modal_app_tile cre_t_28_modal_app_tile_blood_test">
                                    <div class="cre_t_28_modal_app_tile_left">
                                        <div class="cre_t_28_modal_app_tile_heading">
                                            Order
                                            Blood Test
                                        </div>
                                        <div class="cre_t_28_modal_app_tile_info">
                                            Your treatment pack has expired.
                                        </div>
                                    </div>
                                    <div class="cre_t_28_modal_app_tile_right">
                                        <img src="${icons.blood_test}" alt="">
                                    </div>
                                </div>
                                <div class="cre_t_28_modal_app_tile cre_t_28_modal_app_tile_extra_items">
                                    <div class="cre_t_28_modal_app_tile_left">
                                        <div class="cre_t_28_modal_app_tile_heading">
                                            Extra Items
                                        </div>
                                        <div class="cre_t_28_modal_app_tile_info">
                                            Explore these fantastic additional items
                                        </div>
                                    </div>
                                    <div class="cre_t_28_modal_app_tile_right">
                                        <img src="${icons.extra_items}" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cre_t_28_modal_app_bottom_bar cre_t_28_modal_app_bottom_buttons">
                            <div class="cre_t_28_modal_app_bottom_button">
                                <img src="${icons.home}" alt="">
                                <span>Home</span>
                            </div>
                            <div class="cre_t_28_modal_app_bottom_button">
                                <img src="${icons.clock_circle}" alt="">
                                <span>Sessions</span>
                            </div>
                            <div class="cre_t_28_modal_app_bottom_button">
                                <img src="${icons.chat}" alt="">
                                <span>Chat</span>
                            </div>
                            <div class="cre_t_28_modal_app_bottom_button">
                                <img src="${icons.hamburger}" alt="">
                                <span>Menu</span>
                            </div>
                        </div>
                        <div class="cre_t_28_modal_app_black_bar"></div>
                    </div>
                    <div class="cre_t_28_faq_sec cre_t_28_mobile">
                        <div class="cre_t_28_faq_heading">Quick FAQs </div>
                        <div class="cre_t_28_faq_ques">1. Will my prescriptions be sent out at the wrong time?</div>
                        <div class="cre_t_28_faq_ans">No! The new system is designed to prevent delays and mistakes. Prescriptions will be sent to your doctor or pharmacy two weeks before they’re due, and delivery times are factored in to ensure you always get your medication on time.</div>
                        <div class="cre_t_28_faq_ques"> 2. Do I lose control over when I renew prescriptions? Will I be charged automatically every 3 months?</div>
                        <div class="cre_t_28_faq_ans">Not at all. While we’ve automated the process to make it easier for you, you still have the option to make changes or adjustments</div>
                        <div class="cre_t_28_faq_ques">3. Am I still paying £15 per prescription request?</div>
                        <div class="cre_t_28_faq_ans">No, the new system is more sophisticated. You will no longer pay per prescription request, unlimited prescription requests are covered by £5/ month. If you get your prescriptions every 3 months, you will end up paying the same.</div>
                    </div>
                    <div class="cre_t_28_modal_right_footer">
                        <div class="cre_t_28_modal_right_footer_text">
                            <h4>Already a member of GenderGP?</h4>
                            <p>
                            You’ll get exclusive access to the hub on
                            launch day—which won’t be long now!
                            </p>
                            <h4>New to GenderGP?</h4>
                            <p>
                                Lucky you! You’ll enjoy our seamless, stress-free process
                                from (almost)
                                the very start.
                            </p>
                        </div>
                        <a href="https://www.gendergp.com/accessing-gender-affirming-care/" class="cre_t_28_modal_right_footer_button">Become a member today</a>
                    </div>
                </div>
            </div>
        </div>
      </div>`;
      var modalOverlay = `<div class="cre_t_28_modal_overlay"></div>`;
  
      var stickyHtml = `
          <div class="cre-t-28-sticky-container">
              <div class="cre-t-28-sticky-wrapper">
                  <div class="cre-t-28-sticky-main">
                      <div class="cre-t-28-heading-container">
                          <img src="${icons.rocket}">
                          <div class="cre-t-28-text">
                              <h4>Launching soon: The new GenderGP hub...</h4>
                              <p>Seamless prescription management, right at your fingertips.</p>
                          </div>
                      </div>
                      <div class="cre-t-28-heading-container-mobile">
                          <div class="cre-t-28-headline">
                              <img src="${icons.rocket}">
                              <h4>Launching soon:</h4>
                          </div>
                          <p>The new GenderGP hub. <span class="cre-t-28-learn-more">Learn more</span></p>
                      </div>
                      <div class="cre-t-28-timer">
                          <div class="cre-t-28-timer-item">
                              <div class="cre-t-28-timer-value" id="cre-t-28-days">00</div>
                              <div class="cre-t-28-timer-label">DAYS</div>
                          </div>
                          <div class="cre-t-28-timer-item">
                              <div class="cre-t-28-timer-value" id="cre-t-28-hours">00</div>
                              <div class="cre-t-28-timer-label">HOURS</div>
                          </div>
                          <div class="cre-t-28-timer-item">
                              <div class="cre-t-28-timer-value" id="cre-t-28-mins">00</div>
                              <div class="cre-t-28-timer-label">MINS</div>
                          </div>
                      </div>
                      <button class="cre-t-28-learn-more">Learn more</button>
                      <span class="cre-t-28-close-sticky">X</span>
                  </div>
  
              </div>
          </div>
      `;
  
      function eventListeners() {
        live(".cre-t-28-learn-more", "click", function () {
          document.body.classList.add("cre_t_28_display_modal");
        });
  
        live(".cre-t-28-close-sticky", "click", function () {
          document.body.classList.remove("cre_t_28_display_sticky_bar");
        });
  
        live(
          ".cre_t_28_modal_overlay,.cre_t_28_modal_close",
          "click",
          function () {
            document.body.classList.remove("cre_t_28_display_modal");
          },
        );
        live(
          ".cre_t_28_quick_faq",
          "click",
          function () {
            
    const targetSection = document.querySelector(".cre_t_28_faq_sec.cre_t_28_mobile");

    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: "smooth", 
        });
    }
          },
        );
      }
  
      function init() {
          if(window.location.pathname!=='/accessing-gender-affirming-care/'){
              document.body.classList.add(variation_name);
              document.body.classList.add("cre_t_28_display_sticky_bar");
  
              if (!document.querySelector(".cre-t-28-sticky-container")) {
                  document
                  .querySelector(`[data-elementor-type="header"]`)
                  .insertAdjacentHTML("beforebegin", stickyHtml);
              }
  
              if (!document.querySelector(".cre_t_28_modal_overlay")) {
                  document.body.insertAdjacentHTML("beforeend", modalOverlay);
              }
  
              if (!document.querySelector(".cre_t_28_modal_container")) {
                  document.body.insertAdjacentHTML("beforeend", modal);
              }
  
              if (!window.cre_t_28_events) {
                  eventListeners();
                  window.cre_t_28_events = true;
              }        
          }
      }
  
      waitForElement('[data-elementor-type="header"]', init, 25, 25000);
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();