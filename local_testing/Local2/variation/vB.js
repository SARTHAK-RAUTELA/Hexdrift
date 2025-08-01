window.expLibraryDataQueue = window.expLibraryDataQueue || [];
window.expLibraryDataQueue.push({
  CRE_EXP_20: {
    var: {},
    enable_DEBUG: true,
    initOnce: false,
    localDevelopment: true,

    init() {
      const $this = this;
      const testName = $this.__testName;

      // -------------------------------
      // Card Data
      // -------------------------------
      const cardData = [
        {
          id: 1,
          imageUrl: "https://cdn-3.convertexperiments.com/uf/10007679/10007798/image_688c9ce58e095.png",
          alt: "notebook",
          title: "Easy to teach.",
          title2: "Easy to learn.",
          content: "Open-and-go lessons. No prep needed. Simply follow the steps.",
        },
        {
          id: 2,
          imageUrl: "https://cdn-3.convertexperiments.com/uf/10007679/10007798/image-6_688c9cb4f2ad7.png",
          alt: "todo",
          title: "No teaching",
          title2: "experience needed",
          content: "Scripted guidance makes it easy—even if you're new to homeschooling.",
        },
        {
          id: 3,
          imageUrl: "https://cdn-3.convertexperiments.com/uf/10007679/10007798/image-1_688c9d01cb7a6.png",
          alt: "certificate",
          title: "Multisensory, hands-",
          title2: "on learning",
          content: "Engages all learning styles with activities that stick.",
        },
        {
          id: 4,
          imageUrl: "https://cdn-3.convertexperiments.com/uf/10007679/10007798/image-1_688c9d23d9c35.png",
          alt: "rank",
          title: "Mastery over",
          title2: "memorization",
          content: "Your child learns one concept at a time—no gaps, no guessing.",
        },
        {
          id: 5,
          imageUrl: "https://cdn-3.convertexperiments.com/uf/10007679/10007798/image-4_688c9d8b5c30d.png",
          alt: "rank",
          title: "Real progress in just",
          title2: "20 minutes a day",
          content: "Designed for short attention spans and busy family life.",
        },
        {
          id: 6,
          imageUrl: "https://cdn-3.convertexperiments.com/uf/10007679/10007798/image-2_688c9d739f4b4.png",
          alt: "certificate",
          title: "Screen-free by",
          title2: "design",
          content: "Built for real connection. Learn offline, with optional app supplement.",
        },
        {
          id: 7,
          imageUrl: "https://cdn-3.convertexperiments.com/uf/10007679/10007798/image-3_688c9d601b0c1.png",
          alt: "notebook",
          title: "Guided by the Orton-",
          title2: "Gillingham method",
          content: "A trusted, research-based method proven to help all learners.",
        },
        {
          id: 8,
          imageUrl: "https://cdn-3.convertexperiments.com/uf/10007679/10007798/image-2_688c9d3ba4351.png",
          alt: "todo",
          title: "12-month returns &",
          title2: "lifetime support",
          content: "Not the right fit? Send it back. Need help? Call, email, or message anytime.",
        },
      ];

      // -------------------------------
      // Generate Cards HTML 
      // -------------------------------
      const cardsHtml = cardData.reduce((html, card) => {
        return (
          html +
          `
          <div class="${testName}-card card${card.id}">
            <div class="${testName}-card-image-wrapper">
              <img src="${card.imageUrl}" alt="${card.alt}" class="${testName}-card-image">
            </div>
            <div class="${testName}-card-content-header">
              <div>${card.title}</div>
              <div>${card.title2}</div>
            </div>
            <div class="${testName}-card-content">${card.content}</div>
          </div>
        `
        );
      }, "");

      const heroNewSectionHtml = `
        <div class="${testName}-container">
          <div class="${testName}-wrapper">
            ${cardsHtml}
          </div>
        </div>
      `;

      // -------------------------------
      // New Section Insertion
      // -------------------------------
      $this.runAt(`html body [data-layout-name="Layout"] div>div>p`, () => {
        const paragraphs = document.querySelectorAll('html body [data-layout-name="Layout"] div>div>p');

        for (let i = 0; i < paragraphs.length; i++) {
          const text = paragraphs[i].textContent.trim().toLowerCase();

          if (text.includes("lifetime")) {
            const grabbedDiv = paragraphs[i].closest('div[data-layout-name="Layout"]');

            if (grabbedDiv) {
              grabbedDiv.classList.add(`${testName}-hero-section`);

              const alreadyInserted = grabbedDiv.querySelector(`.${testName}-container`);
              if (!alreadyInserted) {
                grabbedDiv.insertAdjacentHTML("afterend", heroNewSectionHtml);
              }
            }

            break;
          }
        }
      });
    },
  },
});