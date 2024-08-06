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

  // src/conversion-rate-experts/MAG61/variation1/index.js
  var productList = [
    {
      "title": "25 Beautiful Homes",
      "href": "https://www.magazinesdirect.com/az-magazines/41489131/25-beautiful-homes-subscription.thtml"
    },
    {
      "title": "3D World",
      "href": "https://www.magazinesdirect.com/az-magazines/6936329/3d-world-magazine-subscription.thtml"
    },
    {
      "title": "All About History",
      "href": "https://www.magazinesdirect.com/az-magazines/6936349/all-about-history-magazine-subscription.thtml"
    },
    {
      "title": "All About Space",
      "href": "https://www.magazinesdirect.com/az-magazines/6936359/all-about-space-magazine-subscription.thtml"
    },
    {
      "title": "Chat",
      "href": "https://www.magazinesdirect.com/az-magazines/34206656/chat-subscription.thtml"
    },
    {
      "title": "Classic Rock",
      "href": "https://www.magazinesdirect.com/az-magazines/6936399/classic-rock-magazine-subscription.thtml"
    },
    {
      "title": "Computer Music",
      "href": "https://www.magazinesdirect.com/az-magazines/6936419/computer-music-magazine-subscription.thtml"
    },
    {
      "title": "Country Homes & Interiors",
      "href": "https://www.magazinesdirect.com/az-magazines/34206771/country-homes-and-interiors-subscription.thtml"
    },
    {
      "title": "Country Life",
      "href": "https://www.magazinesdirect.com/az-magazines/34206691/country-life-subscription.thtml"
    },
    {
      "title": "Country Life Special",
      "href": "https://www.magazinesdirect.com/az-magazines/34206701/country-life-special-subscription.thtml"
    },
    {
      "title": "Cycling Weekly",
      "href": "https://www.magazinesdirect.com/az-magazines/34206751/cycling-weekly-subscription.thtml"
    },
    {
      "title": "Decanter",
      "href": "https://www.magazinesdirect.com/az-magazines/41487616/decanter-subscription.thtml"
    },
    {
      "title": "Digital Camera",
      "href": "https://www.magazinesdirect.com/az-magazines/6936429/digital-camera-magazine-subscription.thtml"
    },
    {
      "title": "Digital Photographer",
      "href": "https://www.magazinesdirect.com/az-magazines/6936439/digital-photographer-magazine-subscription.thtml"
    },
    {
      "title": "Edge",
      "href": "https://www.magazinesdirect.com/az-magazines/6936449/edge-magazine-subscription.thtml"
    },
    {
      "title": "FourFourTwo",
      "href": "https://www.magazinesdirect.com/az-magazines/6936459/four-four-two-442-magazine-subscription.thtml"
    },
    {
      "title": "Future Music",
      "href": "https://www.magazinesdirect.com/az-magazines/6936469/future-music-magazine-subscription.thtml"
    },
    {
      "title": "Golf Monthly",
      "href": "https://www.magazinesdirect.com/az-magazines/34207231/golf-monthly-subscription.thtml"
    },
    {
      "title": "Guitar Player",
      "href": "https://www.magazinesdirect.com/az-magazines/6936479/guitar-player-magazine-subscription.thtml"
    },
    {
      "title": "Guitar Techniques",
      "href": "https://www.magazinesdirect.com/az-magazines/6936489/guitar-techniques-magazine-subscription.thtml"
    },
    {
      "title": "Guitar World",
      "href": "https://www.magazinesdirect.com/az-magazines/6936499/guitar-world-magazine-subscription.thtml"
    },
    {
      "title": "Guitarist",
      "href": "https://www.magazinesdirect.com/az-magazines/6936509/guitarist-magazine-subscription.thtml"
    },
    {
      "title": "History of War",
      "href": "https://www.magazinesdirect.com/az-magazines/6936519/history-of-war-magazine-subscription.thtml"
    },
    {
      "title": "Homebuilding & Renovating",
      "href": "https://www.magazinesdirect.com/az-magazines/6936529/homebuilding-renovating-magazine-subscription.thtml"
    },
    {
      "title": "Homes & Gardens",
      "href": "https://www.magazinesdirect.com/az-magazines/34207256/homes-and-gardens-subscription.thtml"
    },
    {
      "title": "Horse & Hound",
      "href": "https://www.magazinesdirect.com/az-magazines/34207246/horse-and-hound-subscription.thtml"
    },
    {
      "title": "How It Works",
      "href": "https://www.magazinesdirect.com/az-magazines/49582010/how-it-works-magazine-subscription.thtml"
    },
    {
      "title": "Ideal Home",
      "href": "https://www.magazinesdirect.com/az-magazines/34207276/ideal-home-subscription.thtml"
    },
    {
      "title": "ImagineFX",
      "href": "https://www.magazinesdirect.com/az-magazines/6936559/imaginefx-magazine-subscription.thtml"
    },
    {
      "title": "Linux Format",
      "href": "https://www.magazinesdirect.com/az-magazines/6936569/linux-format-magazine-subscription.thtml"
    },
    {
      "title": "Livingetc",
      "href": "https://www.magazinesdirect.com/az-magazines/34248031/livingetc-subscription.thtml"
    },
    {
      "title": "MacFormat",
      "href": "https://www.magazinesdirect.com/az-magazines/6936579/macformat-magazine-subscription.thtml"
    },
    {
      "title": "MacLife",
      "href": "https://www.magazinesdirect.com/az-magazines/6936589/maclife-magazine-subscription.thtml"
    },
    {
      "title": "Maximum PC",
      "href": "https://www.magazinesdirect.com/az-magazines/6936599/maximum-pc-magazine-subscription.thtml"
    },
    {
      "title": "Metal Hammer",
      "href": "https://www.magazinesdirect.com/az-magazines/6936609/metal-hammer-magazine-subscription.thtml"
    },
    {
      "title": "Motor Boat & Yachting",
      "href": "https://www.magazinesdirect.com/az-magazines/34207321/motorboat-and-yachting-subscription.thtml"
    },
    {
      "title": "N-Photo",
      "href": "https://www.magazinesdirect.com/az-magazines/6936619/nphoto-magazine-subscription.thtml"
    },
    {
      "title": "PC Gamer (UK Edition)",
      "href": "https://www.magazinesdirect.com/az-magazines/6936629/pc-gamer-uk-edition-magazine-subscription.thtml"
    },
    {
      "title": "PC Gamer (US Edition)",
      "href": "https://www.magazinesdirect.com/az-magazines/6936639/pc-gamer-us-edition-magazine-subscription.thtml"
    },
    {
      "title": "Period Living",
      "href": "https://www.magazinesdirect.com/az-magazines/6936649/period-living-magazine-subscription.thtml"
    },
    {
      "title": "Photography Week",
      "href": "https://www.magazinesdirect.com/az-magazines/6936814/photography-week-magazine-subscription.thtml"
    },
    {
      "title": "PhotoPlus",
      "href": "https://www.magazinesdirect.com/az-magazines/6936659/photoplus-magazine-subscription.thtml"
    },
    {
      "title": "PLAY",
      "href": "https://www.magazinesdirect.com/az-magazines/6936669/play-magazine-subscription.thtml"
    },
    {
      "title": "Plotfinder",
      "href": "https://www.magazinesdirect.com/az-magazines/6936824/plotfinder-subscription.thtml"
    },
    {
      "title": "Practical Boat Owner",
      "href": "https://www.magazinesdirect.com/az-magazines/34207381/practical-boat-owner-subscription.thtml"
    },
    {
      "title": "Practical Caravan",
      "href": "https://www.magazinesdirect.com/az-magazines/6936679/practical-caravan-magazine-subscription.thtml"
    },
    {
      "title": "Practical Motorhome",
      "href": "https://www.magazinesdirect.com/az-magazines/6936689/practical-motorhome-magazine-subscription.thtml"
    },
    {
      "title": "Prog",
      "href": "https://www.magazinesdirect.com/az-magazines/6936709/prog-magazine-subscription.thtml"
    },
    {
      "title": "Retro Gamer",
      "href": "https://www.magazinesdirect.com/az-magazines/6936729/retro-gamer-magazine-subscription.thtml"
    },
    {
      "title": "Rugby World",
      "href": "https://www.magazinesdirect.com/az-magazines/34207421/rugby-world-subscription.thtml"
    },
    {
      "title": "SFX",
      "href": "https://www.magazinesdirect.com/az-magazines/6936739/sfx-magazine-subscription.thtml"
    },
    {
      "title": "Style at Home",
      "href": "https://www.magazinesdirect.com/az-magazines/34207446/style-at-home-subscription.thtml"
    },
    {
      "title": "T3",
      "href": "https://www.magazinesdirect.com/az-magazines/6936759/t3-magazine-subscription.thtml"
    },
    {
      "title": "The Field",
      "href": "https://www.magazinesdirect.com/az-magazines/34207551/the-field-subscription.thtml"
    },
    {
      "title": "The History Anthology",
      "href": "https://www.magazinesdirect.com/az-magazines/47083043/the-history-anthology-magazine-subscription.thtml"
    },
    {
      "title": "The Magazine Gift Card",
      "href": "https://www.magazinesdirect.com/az-magazines/45044062/the-magazine-gift-card.thtml"
    },
    {
      "title": "The Week",
      "href": "https://www.magazinesdirect.com/az-magazines/54314235/the-week-subscription.thtml"
    },
    {
      "title": "Total 911",
      "href": "https://www.magazinesdirect.com/az-magazines/6936769/total-911-magazine-subscription.thtml"
    },
    {
      "title": "Total Film",
      "href": "https://www.magazinesdirect.com/az-magazines/6936779/total-film-magazine-subscription.thtml"
    },
    {
      "title": "Total Guitar",
      "href": "https://www.magazinesdirect.com/az-magazines/6936789/total-guitar-magazine-subscription.thtml"
    },
    {
      "title": "TV & Satellite Week",
      "href": "https://www.magazinesdirect.com/az-magazines/34207516/tv-and-satellite-week-subscription.thtml"
    },
    {
      "title": "TV Times",
      "href": "https://www.magazinesdirect.com/az-magazines/34207496/tv-times-subscription.thtml"
    },
    {
      "title": "Wallpaper*",
      "href": "https://www.magazinesdirect.com/az-magazines/34207731/wallpaper-subscription.thtml"
    },
    {
      "title": "What Hi-Fi?",
      "href": "https://www.magazinesdirect.com/az-magazines/6936799/what-hifi-magazine-subscription.thtml"
    },
    {
      "title": "Woman",
      "href": "https://www.magazinesdirect.com/az-magazines/34207726/woman-subscription.thtml"
    },
    {
      "title": "woman&home",
      "href": "https://www.magazinesdirect.com/az-magazines/34207711/woman-and-home-subscription.thtml"
    },
    {
      "title": "woman&home Feel Good You",
      "href": "https://www.magazinesdirect.com/az-magazines/34257846/woman-and-home-feel-good-you-subscription.thtml"
    },
    {
      "title": "Woman's Own",
      "href": "https://www.magazinesdirect.com/az-magazines/34257816/womans-own-subscription.thtml"
    },
    {
      "title": "Woman's Weekly",
      "href": "https://www.magazinesdirect.com/az-magazines/34207706/womans-weekly-subscription.thtml"
    },
    {
      "title": "Yachting Monthly",
      "href": "https://www.magazinesdirect.com/az-magazines/34207741/yachting-monthly-subscription.thtml"
    },
    {
      "title": "Yachting World",
      "href": "https://www.magazinesdirect.com/az-magazines/47028262/yachting-world-subscription.thtml"
    }
  ];
  waitFor(
    () => document.querySelector("#atoz-mega-menu-2022 ul.menu-row") ? true : false,
    () => {
      $addClass("body", "cre-61");
      var menu1 = document.querySelector("#atoz-mega-menu-2022 ul.menu-row");
      if (!document.querySelector(".cre-61-new-list")) {
        menu1.insertAdjacentHTML("afterend", '<ul class="cre-61-new-list menu-row"></ul>');
      }
      waitFor(
        () => document.querySelector(".cre-61-new-list") ? true : false,
        () => {
          if (!document.querySelector("#atoz-mega-menu-2022 ul.menu-row.cre-list-61")) {
            document.querySelector("#atoz-mega-menu-2022 ul.menu-row").classList.add("cre-list-61");
            productList.forEach(function(product) {
              var li = document.createElement("li");
              var a = document.createElement("a");
              a.className = "wholebox navigationevent cre-atoz-link";
              a.href = product.href;
              a.textContent = product.title;
              li.appendChild(a);
              document.querySelector(".cre-61-new-list").appendChild(li);
            });
          }
        },
        {
          interval: 50,
          duration: 15e3
        }
      );
    },
    {
      interval: 50,
      duration: 15e3
    }
  );
})();