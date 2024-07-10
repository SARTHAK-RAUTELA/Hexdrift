(function () {
    try {
      /* main variables */
      var debug = 1;
      var variation_name = "cre-t-52";
  
  
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
    
  
  
      function waitForElement(
        selector,
        trigger,
        delayInterval,
        delayTimeout
      ) {
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
        /* Helper Functions */
        // Helper for enabling IE 8 event bindings
        function addEvent(el, type, handler) {
          if (el.attachEvent) el.attachEvent("on" + type, handler);
          else el.addEventListener(type, handler);
        }
        // Matches polyfill
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
                    selector
                  ),
                  i = -1;
                while (nodes[++i] && nodes[i] != node);
                return !!nodes[i];
              };
          })(Element.prototype);
        // Live binding helper using matchesSelector
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
  
  
      function addIcon() {
        var icon = `<img src="/images/expand.png" class="expandImage az-expand-image" alt="Expand A-Z Magazines">`;
        var aZMag = document.querySelector(".container.mobileShow.mobileNav .collapsableMenu li a[href='/az-magazines/']").parentElement;
        if (aZMag) {
          var title = aZMag.querySelector("a").textContent.trim();
          var link = aZMag.querySelector("a").href;
          aZMag.innerHTML = `
          ${title}
          ${icon}
        `;
          aZMag.classList.add("cre-t-52_mag-name");
          addProducts(link);
        }
      }
  
      function addProducts(allLink) {
        var list = `
         <ul class='collapsibleMagazines cre-t-52_magazines-list'>
        `;
        productList.forEach(function (item) {
          list += `
            <li class='visiblecategory'>
              <a href='${item.href}'>${item.title}</a>
            </li>
          `
        });
        list += `<li class='visiblecategory cre-t-52_redText'><a href=${allLink}>See All Magazines</a></li></ul>`;
        document.querySelector(".cre-t-52_mag-name").insertAdjacentHTML("beforeend", list)
  
      }
  
      function eventListener() {
        live(".cre-t-52_mag-name", "click", function () {
          document.querySelector(".az-expand-image").classList.toggle("rotateExpand");
          document.querySelector(".collapsibleMagazines").classList.toggle("cre-t-52_show");
        })
      }
  
      function init() {
  
        if (!document.querySelector("." + variation_name)) {
          document.body.classList.add(variation_name);
          addIcon();
  
          waitForElement(".collapsibleMagazines", function () {
            if (!window.cre_52_event) {
              eventListener();
              window.cre_52_event = true;
            }
          }, 50, 15000)
  
        }
  
  
      }
  
  
      if (window.document.documentElement.clientWidth <= 748) {
        waitForElement(".container.mobileShow.mobileNav .collapsableMenu li a", init, 50, 25000);
      }
  
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();