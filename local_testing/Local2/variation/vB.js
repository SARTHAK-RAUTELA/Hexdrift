(function () {
    try {
        /* main variables */
        var debug = 1;
        var variation_name = "ALL_T35_v1";

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

        const reviews = [
            {
                author: "Jacqueline Perry",
                avatar: "https://cdn-3.convertexperiments.com/uf/10007679/10007798/jacquelineperry_68dbbabacced7.jpg",
                page: "All About Learning Press",
                text: `love love love love love. 
has been such an awesome help to my son who was a struggling reader and is a struggling speller. When we first started All About Reading he wouldn't even attempt to read, would call himself stupid, and say "ill never be able to read". 
I'm laying in bed as I write this and I can hear him flipping the pages in a book he's  reading before bed ( by choice!). He still is struggling with spelling so we got the All About Spelling and are doing lesson on weekends and plan on doing thru summer to get him caught up. if you're planning on buying def get the app for the tiles on the iPad- it's way more convenient !`
            },
            {
                author: "Brittany Upchurch",
                avatar: "https://cdn-3.convertexperiments.com/uf/10007679/10007798/brittanyupchurch_68dbbaf9b6a9b.jpg",
                page: "All About Learning Press",
                text: "Amazing program and incredible customer service!! My boys have always hated reading it was a never ending struggle to get them to sit down and work on reading for even 10 mins! then we came across All about reading and everything changed they're actually excited to work on reading and even ask if we can do extra lessons! The activities are fun and simple it keeps them engaged throughout the whole lesson. The practice sheets are perfect just a quick warm up that has the boys focused and ready to read the next story!! I really can't say enough good things about it but for me what makes this company shine above all the rest is the outstanding customer service ever time I call I get a actually person who truly cares and is happy to help with anything I need. My last call was because our puppy found the word cards and decided to have a little snack…I was devastated! so I called to ask if I could order just a set of the cards to replace them… not only did the customer service rep gladly help me with placing the order right then and there she took things a step further and spoke with a manager explaining my situation and then called me back to let me know they would cover the cost!! I was blown away! it was 100% my fault for leaving the cards out where the dog could reach them but they still decided out of the goodness in their hearts to help a struggling mother out! There is absolutely no way you can go wrong in choosing this program for your reading curriculum your kids will love it, you will love it, and you will always be treated like family!"
            },
            {
                author: "Cortney Bowling",
                avatar: "https://cdn-3.convertexperiments.com/uf/10007679/10007798/cortneybowling_68dbbaeb1ac6b.jpg",
                page: "All About Learning Press",
                text: "Best customer service, super fast response-immediately resolved an issue. Kids love this curriculum and so happy we made the switch, wish we would have done so sooner."
            },
            {
                author: "Sharalyn Anderson",
                avatar: "https://cdn-3.convertexperiments.com/uf/10007679/10007798/sharalynanderson_68dbc35bb61ab.jpg",
                page: "All About Learning Press",
                text: "Before I purchased ALL ABOUT SPELLING, my son was struggling big time with his spelling. When we received it in the mail, he couldn't wait to open it up. It was like Christmas in October. He told me that he usually isn't excited to do school but that he was super excited to work on his spelling now. Just to see him so eager to learn and be so very excited about it, made this momma cry happy tears. A big thank you goes out to this wonderful company for making this so engaging and fun. I especially love the games and that you suggest only doing this for 20 minutes each day as to not overload the child. The BEE is absolutely adorable too! Thank you, guys. We are already working on Lesson #1, and it hasn't even been 1 day. 🙂"
            },
            {
                author: "Patricia Fry",
                avatar: "https://cdn-3.convertexperiments.com/uf/10007679/10007798/patriciafry_68dbc30e49c8b.jpg",
                page: "All About Learning Press",
                text: "We are working through Level 1 with our 7 year old.  He was shying away from reading, became very insecure.  After just 10 lessons he's reading to everyone, even our puppy.  He's even trying to read the Bible now.(not the easiest book).  We are on Lesson 34 and I am getting ready to buy All About Reading Level 2.  The lessons are so fun, activities are incredibly creative.  We have flipped eggs in a frying pan (paper eggs with words on the other side) to matching baby ducks with Mama Ducks.  Lot's of cutting with scissors.  James complains some times but I love it.  I don't have to get other activities for that skill.  You will not have to use their full money back guarantee that is 1 full year long.  It just won't happen this program is that good.  Try it.  No Risk."
            },
            {
                author: "Jeannine Cutroni",
                avatar: "https://cdn-3.convertexperiments.com/uf/10007679/10007798/jeanninecutroni_68dbbaa95845b.jpg",
                page: "All About Learning Press",
                text: "This reading program is wonderful. I taught my second grader with Autism to read. The school system failed him and he could not read anything by the end of first grade. I home schooled him and taught him how to read in just 2 months with this program. I already bought grade three plus the spelling program. Great program!"
            },
            {
                author: "Liz Stetler",
                avatar: "https://cdn-3.convertexperiments.com/uf/10007679/10007798/lizstetler_68dbba6a4e077.jpg",
                page: "All About Learning Press",
                text: "When my 9 year old was still struggling with the fundamentals of reading, someone recommended All About Reading.  I was afraid that any reading program would be geared for 5-6 year olds and come off feeling little kiddish to my boy.  I couldn't have been more wrong.  This program is designed with lots of engaging animal stories and enjoyable learning activities.  The story themes and illustrations are high quality and we both enjoyed our time doing these lessons together.  The program is open and go, after initial set up of the phonogram and sightword review cards, which then stay in a sturdy little file box. We used the app for Ipad instead of the magnetic manipulatives, which gave us fewer pieces to lose. 🙂  As a mother of seven, I was so thankful to have an option that I did not have to prepare for ahead of time, but could pick up and do easily.  The teacher guide book provided every word for me to say, for those especially tough days. The student book provided the activity pieces for each day that my student or I could cut out quickly.  At the end of each lesson, there is one last assignment to read aloud for 20 minutes.  We read many books together, but I also allowed him to download audio books to listen to, which helped us get in that time, and gave him the benefit of listening to someone else read, which is so important. I am now going thru level 3 with my 7 and 9 year olds.  I am certain that AAR's approach will also contribute to excellent spelling. I give AAR 5 stars and highly recommend the program."
            },
            {
                author: "Erika Smith",
                avatar: "https://cdn-3.convertexperiments.com/uf/10007679/10007798/erikasmith_68dbbace4002a.jpg",
                page: "All About Learning Press",
                text: "I have been using All about learning for my children and absolutely love the curriculum. It actually helps my AuDHD children with dyslexia in learning to read and spell. Recently a mistake was made in my order, the wrong materials were shipped to me, so I called the company. 20 minutes later I already received an email confirming the correct materials being sent to me. It was so amazingly quick and easy. I thought I loved AAL before but their customer service makes me love them even more."
            },
            {
                author: "Neeth Hi",
                avatar: "https://cdn-3.convertexperiments.com/uf/10007679/10007798/neethhi_68dbc31f420fd.jpg",
                page: "All About Learning Press",
                text: "Just wanted to mention what an incredible business this is. So prompt in taking care of their product and and issues that come and also very generous. Great quality material but a business that goes above and beyond. We pray they are blessed ! 🥰"
            },
            {
                author: "Kerry McKenna",
                avatar: "https://cdn-3.convertexperiments.com/uf/10007679/10007798/kerrymckenna_68dbba8a7af7c.jpg",
                page: "All About Learning Press",
                text: "Super supportive staff and informative page! So many free tips and fun ideas to engage reading and spelling learners.  Research based OG curriculum that works wonders… don't forget to ask about the AMAZING box art! We love AAR and AAS."
            },
            {
                author: "Jessica Norman",
                avatar: "https://cdn-3.convertexperiments.com/uf/10007679/10007798/jessicanorman_68dbba9a1ca6d.jpg",
                page: "All About Learning Press",
                text: "Love the scripted lessons and breakdown of how they structure everything. very impressed and happy with both the reading and spelling program! And the box art is a wonderful added bonus of customer service and personalization."
            },
            {
                author: "Shirley Davis",
                avatar: "https://cdn-3.convertexperiments.com/uf/10007679/10007798/shirleydavis_68dbc34cc71a5.jpg",
                page: "All About Learning Press",
                text: `I have been using All About Learning for 3 years now and I highly recommend the books and teaching skills it provides. 
More than how pleased I am with the books I am thrilled with the customer service. I am a senior citizen and I remember when customer service was a big deal for All of us. Our patronage used to be appreciated. Not so much anymore. With All About Learning I was treated with gratitude for my continued dedication, and they even contacted me to make sure I received the messages that they sent and offered me a free service. I can't express how much I appreciate customer service of this magnitude. All About Learning gets 5 Stars and a AAA rating from me. Thank you All About Learning I appreciate you. Shirley`
            },
            {
                author: "Dickson Tribe",
                avatar: "https://cdn-3.convertexperiments.com/uf/10007679/10007798/dicksontribe_68dbbadd9cd79.jpg",
                page: "All About Learning Press",
                text: "We so needed this! Our 6 yo has been struggling with other systems out there and we are so excited to dig into AAR and watch your system help her"
            },
            {
                author: "Anum Quadri",
                avatar: "https://cdn-3.convertexperiments.com/uf/10007679/10007798/anumquadri_68dbbb09083ea.jpg",
                page: "All About Learning Press",
                text: "I highly recommend this program. I have used Level 1 and 2 of the reading curriculum and have recently just submitted the order for level 3 for my daughter. Its very thorough and the reading books have themes and ideas that are very interesting to the young reader. My daughter loves it. Thank you so much for this amazing curriculum."
            }
        ];

        function waitForSwiper(trigger) {
            var interval = setInterval(() => {
                if (typeof Swiper !== 'undefined') {
                    clearInterval(interval);
                    trigger();
                }
            });
            setTimeout(() => {
                clearInterval(interval);
            }, 15e3);
        }

        function addScript(src, isCSS) {
            const element = isCSS ? document.createElement('link') : document.createElement('script');
            if (isCSS) {
                element.rel = 'stylesheet';
                element.type = 'text/css';
                element.href = src;
            } else {
                element.type = 'text/javascript';
                element.src = src;
            }
            document.head.appendChild(element);
        }

        addScript("https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css", true);
        addScript("https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js", false);

        function initSwiper() {
            new Swiper(".reviews-swiper", {
                slidesPerView: 1.2,
                spaceBetween: 15,
                pagination: {
                    el: ".swiper-pagination.tesT35",
                    dynamicBullets: true,
                },
                navigation: {
                    nextEl: ".nav.next",
                    prevEl: ".nav.prev",
                },
                loop: true,
                breakpoints: {
                    450: {
                        slidesPerView: 1.2,
                        spaceBetween: 15,
                    },
                    600: {
                        slidesPerView: 2.2,
                        spaceBetween: 25,
                    },
                    1024: {
                        slidesPerView: 2.6,
                        spaceBetween: 25,
                    }
                },
                on: {
                    slideChangeTransitionEnd: function () {
                    }
                }
            });
        }

        function truncateText(text, maxChars) {
            if (text.length <= maxChars) return text;
            return text.substring(0, maxChars).trim() + '...';
        }

        function getMaxChars() {
            if (window.innerWidth < 769) return 200;
            if (window.innerWidth < 1025) return 250;
            if (window.innerWidth < 1280) return 280;
            return 300;
        }

        function handleTextToggle(e) {
            e.preventDefault();
            const button = e.target;
            const reviewText = button.closest('.review-text');
            const fullText = reviewText.getAttribute('data-full');
            const isExpanded = reviewText.classList.contains('expanded');

            if (!isExpanded) {
                reviewText.innerHTML = `${fullText} <a href="#" class="see-more">See less</a>`;
                reviewText.classList.add('expanded');
            } else {
                const maxChars = getMaxChars();
                const truncatedText = truncateText(fullText, maxChars);
                reviewText.innerHTML = `${truncatedText} <a href="#" class="see-more">See more</a>`;
                reviewText.classList.remove('expanded');
            }
        }

        function handleResize() {
            const reviewTexts = document.querySelectorAll('.review-text');
            reviewTexts.forEach(reviewText => {
                if (!reviewText.classList.contains('expanded')) {
                    const fullText = reviewText.getAttribute('data-full');
                    const maxChars = getMaxChars();
                    const truncatedText = truncateText(fullText, maxChars);
                    const needsTruncation = fullText.length > maxChars;

                    reviewText.innerHTML = needsTruncation ?
                        `${truncatedText} <a href="#" class="see-more">See more</a>` :
                        fullText;
                }
            });
        }

        var modalHtml = `<div class="modal-overlay_T35" id="modal-overlay_T35">
    <div class="modal-content_T35">
        <button class="close-btn_T35" id="close-btn_T35"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M2.4 24L0 21.6L9.6 12L0 2.4L2.4 0L12 9.6L21.6 0L24 2.4L14.4 12L24 21.6L21.6 24L12 14.4L2.4 24Z" fill="#808080"/>
</svg></button>

        <div class="modal-header_T35">
            <h2 class="modal-title_T35">"love love love love love"</h2>
            <div class="list_item_T35">
                <div class="list_T35">
                    <div class="list_Image_T35">
                        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007798/awardt35_68ff606452525.png"
                            alt="award">
                    </div>
                    <div class="list_Heading_T35">Multi-award winner</div>
                    <div class="list_Content_T35">recognised by educators and homeschool leaders</div>
                </div>
                <div class="list_T35">
                    <div class="list_Image_T35">
                    <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007798/trustedt35_68ff6098cae4d.png"
                            alt="trusted">
                        
                    </div>
                    <div class="list_Heading_T35">Trusted by 200,000+</div>
                    <div class="list_Content_T35">parents, teachers and families</div>
                </div>
                <div class="list_T35">
                    <div class="list_Image_T35">
                        <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007798/recomanded_68ff607f3aa31.png"
                            alt="recommended">
                    </div>
                    <div class="list_Heading_T35">100% recommended <span>by</span></div>
                    <div class="list_Content_T35">parents on Facebook</div>
                </div>
            </div>
        </div>
        <div class="review_container_T35">
            <div class="review_slider_T35">
<div class="reviews-wrapper_T35">

    <!-- Carousel -->
    <div class="reviews-carousel">
        <div class="reviews-track">
            <div class="swiper reviews-swiper">
                <div class="swiper-wrapper" id="reviews-container">
                    <!-- Slides will be injected dynamically -->
                </div>
            </div>
        </div>

        <!-- Carousel Navigation -->
        <div class="reviews-nav">
            <button class="nav prev" aria-label="Previous"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
  <circle cx="17.5" cy="17.5" r="17.5" fill="white"/>
  <path d="M16.7353 17.655L20.5227 21.4424L19.6551 22.31L15.0001 17.655L19.6551 13L20.5227 13.8676L16.7353 17.655Z" fill="#272B2E"/>
</svg></button>
            <button class="nav next" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
  <circle cx="17.5" cy="17.5" r="17.5" fill="white"/>
  <path d="M18.7874 17.655L15 13.8676L15.8676 13L20.5226 17.655L15.8676 22.31L15 21.4424L18.7874 17.655Z" fill="#272B2E"/>
</svg></button>
        </div>
        <!-- Pagination -->
        <div class="swiper-pagination tesT35"></div>
    </div>
    <div class="facebook-icon-wrapper_T35">
                <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007798/favebookimaget37_690c85c2a78aa.png"
                    alt="facebook icon" class="facebook-icon_T35">
            </div>
</div>
            </div>

            <div class="OK_Got_it_T35-wrapper_T35">
                <div class="OK_Got_it_T35">OK, got it</div>
            </div>
        </div>

    </div>
</div>`;

        // Global variable to store interval ID
        var modalCheckInterval = null;

        // **UPDATED: Using setInterval to check every second**
        function scheduleModalDisplay() {
            const modalShown = sessionStorage.getItem('modalShown_T35');

            // If modal was already shown, don't show again
            if (modalShown === 'true') {
                if (debug) console.log('Modal already shown in this session');
                return;
            }

            // Set start time if not already set
            let startTime = sessionStorage.getItem('modalStartTime_T35');
            if (!startTime) {
                startTime = Date.now().toString();
                sessionStorage.setItem('modalStartTime_T35', startTime);
                if (debug) console.log('First load - Starting 10 second timer');
            }

            // Clear any existing interval
            if (modalCheckInterval) {
                clearInterval(modalCheckInterval);
            }

            // Check every second (1000ms)
            modalCheckInterval = setInterval(() => {
                const now = Date.now();
                const elapsed = now - parseInt(startTime);
                const remaining = 10000 - elapsed;

                if (debug) console.log('Checking... Elapsed:', elapsed + 'ms', 'Remaining:', remaining + 'ms');

                // If 10 seconds have passed, show the modal
                // if (elapsed >= 10000) {
                //     const modalOverlay = document.getElementById('modal-overlay_T35');
                //     if (modalOverlay && sessionStorage.getItem('modalShown_T35') !== 'true') {
                //         modalOverlay.classList.add('show');
                //         sessionStorage.setItem('modalShown_T35', 'true');
                //         window._conv_q = window._conv_q || []; _conv_q.push(["triggerConversion", "100036932"]);
                //         clearInterval(modalCheckInterval);
                //         if (debug) console.log('Modal displayed after 10 seconds');
                //     }
                // } else {
                //     clearInterval(modalCheckInterval);
                // }


                // 👇 Show modal immediately for quick testing
                const modalOverlay = document.getElementById('modal-overlay_T35');
                if (modalOverlay) {
                    modalOverlay.classList.add('show');
                    sessionStorage.setItem('modalShown_T35', 'true');
                    window._conv_q = window._conv_q || []; _conv_q.push(["triggerConversion", "100036932"]);
                    if (debug) console.log('Modal displayed instantly for testing');
                }
                clearInterval(modalCheckInterval);

            }, 1000); // Check every 1 second
        }

        /* Variation Init */
        function init() {
            document.querySelector('body').classList.add(variation_name);

            if (!document.querySelector('.reviews-wrapper_T35')) {
                document.querySelector('body').insertAdjacentHTML('afterbegin', modalHtml);
            }

            waitForElement("#reviews-container", function () {
                const container = document.getElementById("reviews-container");

                reviews.forEach(review => {
                    const slide = document.createElement("div");
                    slide.className = "swiper-slide";

                    const maxChars = getMaxChars();
                    const truncatedText = truncateText(review.text, maxChars);
                    const needsTruncation = review.text.length > maxChars;

                    slide.innerHTML = `
  <div class="review-card">
    <div class="review-card-inner">
      <div class="review-header">
        <img src="${review.avatar}" alt="${review.author}" class="review-avatar" />
      </div>
      <div class="review-subheader">
        <div class="review-author-container">
          <p class="review-author">${review.author}</p>
          <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007798/redstar_68dbc33f54265.png" alt="redstar">
          <p class="recomamend-text">recommends</p>
        </div>
        <div>
          <p class="review-page">${review.page}</p>
        </div>
      </div>
    </div>
    <div class="review-text" data-full="${review.text.replace(/"/g, '&quot;')}">
      ${truncatedText}
      ${needsTruncation ? `<a href="#" class="see-more">See more</a>` : ""}
    </div>
  </div>
`;

                    container.appendChild(slide);
                });

                // Add event listeners
                document.addEventListener('click', function (e) {
                    if (e.target.classList.contains('see-more')) {
                        handleTextToggle(e);
                    }
                });

                window.addEventListener('resize', handleResize);

                waitForSwiper(initSwiper);

                // **Start the modal timer with interval checking**
                scheduleModalDisplay();

                // Close modal functionality
                const closeBtn = document.getElementById('close-btn_T35');
                const okButton = document.querySelector('.OK_Got_it_T35');
                const modalOverlay = document.getElementById('modal-overlay_T35');

                if (closeBtn) {
                    closeBtn.addEventListener('click', () => {
                        modalOverlay.classList.remove('show');
                        // Clear interval when modal is closed
                        if (modalCheckInterval) {
                            clearInterval(modalCheckInterval);
                        }
                    });
                }

                if (okButton) {
                    okButton.addEventListener('click', () => {
                        modalOverlay.classList.remove('show');
                        // Clear interval when modal is closed
                        if (modalCheckInterval) {
                            clearInterval(modalCheckInterval);
                        }
                    });
                }

            }, 50, 15000);
            document.addEventListener('click', function (event) {
                if (event.target.closest('.reviews-wrapper_T35')) {
                    window._conv_q = window._conv_q || []; _conv_q.push(["triggerConversion", "100036933"]);
                }
            });
        }

        /* Initialise variation */
        waitForElement("body", init, 50, 5000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();