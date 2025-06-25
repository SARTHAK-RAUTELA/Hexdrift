window.expLibraryDataQueue = window.expLibraryDataQueue || [];
window.expLibraryDataQueue.push({
  CRE_EXP_10: {
    var: {},
    enable_DEBUG: true,
    initOnce: false,
    localDevelopment: true,



    addNewContent() {
      this.runAt('.post.printArea', ([postSection]) => {
        if (postSection) {
          if (!document.querySelector(`.cre-t-10-top-container`)) {

            const authorEl = postSection.querySelector('.postAuthor');
            const authorParent = authorEl && authorEl.parentNode;
            if (authorParent) {
              authorParent.insertAdjacentHTML('afterend',
                `<div class="cre-t-10-top-container">
                      <div class="cre-t-10-top-wrapper">
                          <div class="cre-t-10-top-main">
                              This article is brought to you by All About Learning Press, creators of popular programs in reading, spelling, and math&mdash;designed to help every child succeed. <a href="/" class="cre-t-10-programs">Explore our programs</a>
                          </div>
                      </div>
                  </div>
                `);
            }
          }

          if (!document.querySelector(`.cre-t-10-bottom-container`)) {
            const shareTitle = document.querySelector('.postShareTitle');
            if (shareTitle) {
              const shareTitleParent = shareTitle.parentElement && shareTitle.parentElement.parentElement;

              if (shareTitleParent) {
                shareTitleParent.insertAdjacentHTML('beforebegin',
                  `
                  <div class="cre-t-10-bottom-container">
                      <div class="cre-t-10-bottom-wrapper">
                          <div class="cre-t-10-bottom-main">
                              <h2>What you should do next...</h2>
                              <ol>
                                  <li><a href="/newsletter" class="cre-t-10-newsletter">Subscribe to our newsletter</a> or <a href="/blog" class="cre-t-10-blog">visit our blog</a> for more practical tips and advice to support learners of all ages and abilities.</li>
                                  <li>
                                    <a href="/placement/" class="cre-t-10-placement">Take our free placement test</a> to assess your child's level in reading, spelling, or math.
                                  </li>
                                  <li>
                                    <a href="/" class="cre-t-10-programs-bottom">Explore our award-winning learning programs</a> to help your child progress, develop confidence and succeed.
                                  </li>
                              </ol>
                          </div>
                      </div>
                  </div>
                  `);
              }
            }
          }
        }
      });
    },

    listenFormSubmit() {
      this.runAt('form#commentform', ([commentForm]) => {
        commentForm.addEventListener('submit', function (e) {
          if (document.querySelectorAll('#commentform .is-invalid')?.length > 0) {
            return;
          }
          else if (document.querySelector('#commentform .form-check #hs-newsletter-signup').checked) {
            // goal here
            console.log("newsletter subscribed");
            const commentCount = document.querySelectorAll('#comments > .comment.box').length || 0;

            const intervalId = setInterval(() => {
              if (document.querySelectorAll('#comments > .comment.box').length > commentCount) {
                clearInterval(intervalId);
                console.log("comment added");
                // goal here
                window._conv_q = window._conv_q || [];
                _conv_q.push(["triggerConversion", "100036076"]);
              }
            }, 100);

            setTimeout(() => {
              clearInterval(intervalId);
            }, 5000);
          }
        })
      })

    },

    // Initialize the experiment
    init() {
      this.runAt('.post.printArea .postAuthor', () => {
        this.addNewContent();
        this.listenFormSubmit();
      });
    },
  },
});