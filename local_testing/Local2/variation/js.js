(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "TT-cost-guides";
    /* all Pure helper functions */
    function waitForElement(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }

    function live(selector, event, callback, context) {
      /****Helper Functions****/
      // helper for enabling IE 8 event bindings
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent("on" + type, handler);
        else el.addEventListener(type, handler);
      }
      // matches polyfill
      this && this.Element &&
        (function (ElementPrototype) {
          ElementPrototype.matches =
            ElementPrototype.matches ||
            ElementPrototype.matchesSelector ||
            ElementPrototype.webkitMatchesSelector ||
            ElementPrototype.msMatchesSelector ||
            function (selector) {
              var node = this,
                nodes = (
                  node.parentNode || node.document
                ).querySelectorAll(selector),
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


    var dataObject = [
      {
        "url": "https://www.thumbtack.com/p/private-investigators-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556896647229685760"
      },
      {
        "url": "https://www.thumbtack.com/p/tailoring-costs",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556898707704242186"
      }, {
        "url": "https://www.thumbtack.com/p/hair-highlights-price",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556891379034791938"
      }, {
        "url": "https://www.thumbtack.com/p/seamstress-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556897377378721802"
      }, {
        "url": "https://www.thumbtack.com/p/exterminators-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556889167034359811"
      }, {
        "url": "https://www.thumbtack.com/p/kitchen-remodel-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556893829307752451"
      }, {
        "url": "https://www.thumbtack.com/p/wrought-iron-fence-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556996921476554762"
      }, {
        "url": "https://www.thumbtack.com/p/boiler-replacement-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556884415966781450"
      }, {
        "url": "https://www.thumbtack.com/p/window-screen-replacement-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556902219929747459"
      }, {
        "url": "https://www.thumbtack.com/p/private-swim-lessons-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556896659383869442"
      }, {
        "url": "https://www.thumbtack.com/p/window-replacement-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556902202367262720"
      }, {
        "url": "https://www.thumbtack.com/p/window-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556902182926098432"
      }, {
        "url": "https://www.thumbtack.com/p/chimney-inspection-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556885744642793472"
      }, {
        "url": "https://www.thumbtack.com/p/water-softener-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556901620169392131"
      }, {
        "url": "https://www.thumbtack.com/p/water-heater-installation-replacement-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556901554792448003"
      }, {
        "url": "https://www.thumbtack.com/p/sports-photography-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556898337250877440"
      }, {
        "url": "https://www.thumbtack.com/p/pet-sitting-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556895907186679813"
      }, {
        "url": "https://www.thumbtack.com/p/water-damage-restoration-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556901554792448003"
      }, {
        "url": "https://www.thumbtack.com/p/washer-dryer-hookup-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556901428646559749"
      }, {
        "url": "https://www.thumbtack.com/p/party-bus-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556895781984714756"
      }, {
        "url": "https://www.thumbtack.com/p/hardwood-flooring-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556891441014661125"
      }, {
        "url": "https://www.thumbtack.com/p/vinyl-fencing-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556996253782704131"
      }, {
        "url": "https://www.thumbtack.com/p/tv-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556899049613656068"
      }, {
        "url": "https://www.thumbtack.com/p/stump-removal-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556994765974519813"
      }, {
        "url": "https://www.thumbtack.com/p/cost-to-remove-tree",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556887921751654402"
      }, {
        "url": "https://www.thumbtack.com/p/toilet-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556995911045144579"
      }, {
        "url": "https://www.thumbtack.com/p/toilet-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556898892001312773"
      }, {
        "url": "https://www.thumbtack.com/p/tile-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556898856550064132"
      }, {
        "url": "https://www.thumbtack.com/p/backsplash-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556883396520747011"
      }, {
        "url": "https://www.thumbtack.com/p/termite-treatment-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556995722084122634"
      }, {
        "url": "https://www.thumbtack.com/p/tankless-water-heater-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556995634771951616"
      }, {
        "url": "https://www.thumbtack.com/p/sump-pump-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556995144122155008"
      }, {
        "url": "https://www.thumbtack.com/p/stucco-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556898606705467396"
      }, {
        "url": "https://www.thumbtack.com/p/steam-cleaning-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556898573273358340"
      }, {
        "url": "https://www.thumbtack.com/p/iphone-screen-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556893478762536960"
      }, {
        "url": "https://www.thumbtack.com/p/sprinkler-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556898370962169860"
      }, {
        "url": "https://www.thumbtack.com/p/solar-panel-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556898261465677826"
      }, {
        "url": "https://www.thumbtack.com/p/solar-panel-cleaning-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556898070063497220"
      }, {
        "url": "https://www.thumbtack.com/p/sink-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556897928943435779"
      }, {
        "url": "https://www.thumbtack.com/p/shower-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556897838708301826"
      }, {
        "url": "https://www.thumbtack.com/p/cost-to-install-shower-door",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556887632191545349"
      }, {
        "url": "https://www.thumbtack.com/p/septic-tank-pumping-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556897493477376004"
      }, {
        "url": "https://www.thumbtack.com/p/septic-tank-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556897476567064578"
      }, {
        "url": "https://www.thumbtack.com/p/security-camera-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556897405243277312"
      }, {
        "url": "https://www.thumbtack.com/p/rubber-roof-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556897269609349122"
      }, {
        "url": "https://www.thumbtack.com/p/roof-replacement-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556897223032406018"
      }, {
        "url": "https://www.thumbtack.com/p/roof-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556897162447962116"
      }, {
        "url": "https://www.thumbtack.com/p/roof-inspection-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/55689713845634662"
      }, {
        "url": "https://www.thumbtack.com/p/roof-cleaning-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556897118571372546"
      }, {
        "url": "https://www.thumbtack.com/p/rodent-removal-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556897092458496004"
      }, {
        "url": "https://www.thumbtack.com/p/cost-of-retaining-wall",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556886724555423754"
      }, {
        "url": "https://www.thumbtack.com/p/realtor-fees",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556896957590724610"
      }, {
        "url": "https://www.thumbtack.com/p/property-management-fees",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556896733677600768"
      }, {
        "url": "https://www.thumbtack.com/p/propane-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556896688194428938"
      }, {
        "url": "https://www.thumbtack.com/p/power-washing-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556896469158100995"
      }, {
        "url": "https://www.thumbtack.com/p/popcorn-ceiling-removal-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556896420349403136"
      }, {
        "url": "https://www.thumbtack.com/p/plumbers-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556896156524634115"
      }, {
        "url": "https://www.thumbtack.com/p/pipe-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556896071335084042"
      }, {
        "url": "https://www.thumbtack.com/p/patio-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556895824744169472"
      }, {
        "url": "https://www.thumbtack.com/p/patio-cover-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556895853957718018"
      }, {
        "url": "https://www.thumbtack.com/p/outdoor-pest-control-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556895729226776581"
      }, {
        "url": "https://www.thumbtack.com/p/outdoor-furniture-assembly-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556895688071045130"
      }, {
        "url": "https://www.thumbtack.com/p/office-cleaning-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556895613281607680"
      }, {
        "url": "https://www.thumbtack.com/p/mulching-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556895484739321859"
      }, {
        "url": "https://www.thumbtack.com/p/moving-companies-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556895425884184579"
      }, {
        "url": "https://www.thumbtack.com/p/mold-removal-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556895401112813578"
      }, {
        "url": "https://www.thumbtack.com/p/mattress-cleaning-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556894868898988037"
      }, {
        "url": "https://www.thumbtack.com/p/long-distance-movers-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556894672692142082"
      }, {
        "url": "https://www.thumbtack.com/p/how-much-to-fix-a-leaking-pipe",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556893118852251653"
      }, {
        "url": "https://www.thumbtack.com/p/lawn-aeration-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556894179640221701"
      }, {
        "url": "https://www.thumbtack.com/p/land-survey-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556894063509913605"
      }, {
        "url": "https://www.thumbtack.com/p/land-clearing-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556893947351556096"
      }, {
        "url": "https://www.thumbtack.com/p/prices-flooring",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556896583713390594"
      }, {
        "url": "https://www.thumbtack.com/p/junk-removal-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556893682586664960"
      }, {
        "url": "https://www.thumbtack.com/p/interior-designer-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556893344696025093"
      }, {
        "url": "https://www.thumbtack.com/p/house-cleaning-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556892526496784386"
      }, {
        "url": "https://www.thumbtack.com/p/hot-tub-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556892425460252682"
      }, {
        "url": "https://www.thumbtack.com/p/hot-tub-movers-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556892345570885642"
      }, {
        "url": "https://www.thumbtack.com/p/hot-tub-cost-per-month",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556892265530204160"
      }, {
        "url": "https://www.thumbtack.com/p/hot-tub-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556892324596097029"
      }, {
        "url": "https://www.thumbtack.com/p/home-theater-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556892217659219973"
      }, {
        "url": "https://www.thumbtack.com/p/home-staging-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556892184518729732"
      }, {
        "url": "https://www.thumbtack.com/p/home-security-system-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556892155583774723"
      }, {
        "url": "https://www.thumbtack.com/p/home-inspection-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556892130275041284"
      }, {
        "url": "https://www.thumbtack.com/p/home-appraisal-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556891947543789568"
      }, {
        "url": "https://www.thumbtack.com/p/cost-to-install-vinyl-flooring",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556887659651702784"
      }, {
        "url": "https://www.thumbtack.com/p/cost-to-refinish-hardwood-floors",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556887881926918144"
      }, {
        "url": "https://www.thumbtack.com/p/handyman-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556891414722789380"
      }, {
        "url": "https://www.thumbtack.com/p/gutter-cleaning-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556891233278164994"
      }, {
        "url": "https://www.thumbtack.com/p/granite-countertops-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556891151830491146"
      }, {
        "url": "https://www.thumbtack.com/p/gazebo-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556891098941800458"
      }, {
        "url": "https://www.thumbtack.com/p/gas-line-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556891067678367744"
      }, {
        "url": "https://www.thumbtack.com/p/gas-fireplace-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556891029262868490"
      }, {
        "url": "https://www.thumbtack.com/p/garbage-disposal-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556890793195241475"
      }, {
        "url": "https://www.thumbtack.com/p/garage-remodel-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556890766147551232"
      }, {
        "url": "https://www.thumbtack.com/p/garage-doors-prices-and-installation",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556890743575674884"
      }, {
        "url": "https://www.thumbtack.com/p/garage-door-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556890715803631618"
      }, {
        "url": "https://www.thumbtack.com/p/furniture-refinishing-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556890574077566980"
      }, {
        "url": "https://www.thumbtack.com/p/furniture-moving-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556890546903080964"
      }, {
        "url": "https://www.thumbtack.com/p/furniture-assembly-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556890515077128196"
      }, {
        "url": "https://www.thumbtack.com/p/computer-repair-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556886194269560836"
      }, {
        "url": "https://www.thumbtack.com/p/floor-cleaning-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556890202001072132"
      }, {
        "url": "https://www.thumbtack.com/p/fence-staining-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556889999663800323"
      }, {
        "url": "https://www.thumbtack.com/p/emergency-plumber-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556993462420873218"
      }, {
        "url": "https://www.thumbtack.com/p/electrician-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556888975918161920"
      }, {
        "url": "https://www.thumbtack.com/p/switch-and-outlet-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556995564659810304"
      }, {
        "url": "https://www.thumbtack.com/p/electrical-inspection-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556888956397854723"
      }, {
        "url": "https://www.thumbtack.com/p/drywall-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556888875192770563"
      }, {
        "url": "https://www.thumbtack.com/p/event-decorator-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556993855194652682"
      }, {
        "url": "https://www.thumbtack.com/p/cat-sitting-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556885356030648330"
      }, {
        "url": "https://www.thumbtack.com/p/drywall-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556888852703109125"
      }, {
        "url": "https://www.thumbtack.com/p/dryer-vent-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556888834364891136"
      }, {
        "url": "https://www.thumbtack.com/p/concrete-driveway-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556886218357637125"
      }, {
        "url": "https://www.thumbtack.com/p/drain-cleaning-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556888763174764548"
      }, {
        "url": "https://www.thumbtack.com/p/door-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556888728402190346"
      }, {
        "url": "https://www.thumbtack.com/p/exterior-door-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556889138141077514"
      }, {
        "url": "https://www.thumbtack.com/p/dishwasher-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556992945787355136"
      }, {
        "url": "https://www.thumbtack.com/p/dishwasher-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556888413774569482"
      }, {
        "url": "https://www.thumbtack.com/p/deep-cleaning-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556888376790409226"
      }, {
        "url": "https://www.thumbtack.com/p/cost-to-build-interior-wall",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556886929630855168"
      }, {
        "url": "https://www.thumbtack.com/p/custom-cabinet-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556888234942652421"
      }, {
        "url": "https://www.thumbtack.com/p/hair-stylist-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556891396270751744"
      }, {
        "url": "https://www.thumbtack.com/p/crown-molding-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556888208130678789"
      }, {
        "url": "https://www.thumbtack.com/p/cost-to-tile-a-shower",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556888142430789634"
      }, {
        "url": "https://www.thumbtack.com/p/cost-to-stucco-a-house",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556888117795897346"
      }, {
        "url": "https://www.thumbtack.com/p/tennis-lessons-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556898740312326147"
      }, {
        "url": "https://www.thumbtack.com/p/asphalt-driveway-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556882721111990275"
      }, {
        "url": "https://www.thumbtack.com/p/party-planners-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556895800564113408"
      }, {
        "url": "https://www.thumbtack.com/p/how-much-does-it-cost-to-reupholster-a-chair",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556893064919449600"
      }, {
        "url": "https://www.thumbtack.com/p/cost-paint-metal-roof",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556886749819641860"
      }, {
        "url": "https://www.thumbtack.com/p/cost-to-paint-a-room",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556887735963107331"
      }, {
        "url": "https://www.thumbtack.com/p/catering-costs",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556885378043674627"
      }, {
        "url": "https://www.thumbtack.com/p/graphic-design-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556891181199769610"
      }, {
        "url": "https://www.thumbtack.com/p/cost-to-paint-ceiling",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556887757372416002"
      }, {
        "url": "https://www.thumbtack.com/p/cost-to-paint-kitchen-cabinets",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556992807019954179"
      }, {
        "url": "https://www.thumbtack.com/p/dunk-tank-rental-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/557007196955803651"
      }, {
        "url": "https://www.thumbtack.com/p/cost-to-paint-stucco-house",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556887809034125316"
      }, {
        "url": "https://www.thumbtack.com/p/cost-to-install-countertops",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556887022256742410"
      }, {
        "url": "https://www.thumbtack.com/p/comedy-price",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556885950928314371"
      }, {
        "url": "https://www.thumbtack.com/p/carpet-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556884796884500484"
      }, {
        "url": "https://www.thumbtack.com/p/structural-engineer-costs",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556994515472752642"
      }, {
        "url": "https://www.thumbtack.com/p/cost-to-frame-a-house",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556887003674460164"
      }, {
        "url": "https://www.thumbtack.com/p/copper-roof-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556886405798305796"
      }, {
        "url": "https://www.thumbtack.com/p/pet-photography-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556895881489276938"
      }, {
        "url": "https://www.thumbtack.com/p/concrete-price-per-yard",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556886273172234245"
      }, {
        "url": "https://www.thumbtack.com/p/concrete-step-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556886339892592650"
      }, {
        "url": "https://www.thumbtack.com/p/cost-to-pave-driveway",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556887850434273283"
      }, {
        "url": "https://www.thumbtack.com/p/commercial-cleaning-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556886164122984452"
      }, {
        "url": "https://www.thumbtack.com/p/custom-closet-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556888257296564234"
      }, {
        "url": "https://www.thumbtack.com/p/christmas-light-installation-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556885850582228992"
      }, {
        "url": "https://www.thumbtack.com/p/apple-repair-costs",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556756833873387522"
      }, {
        "url": "https://www.thumbtack.com/p/chimney-sweep-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556885802389708800"
      }, {
        "url": "https://www.thumbtack.com/p/well-inspection-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556902127661416448"
      }, {
        "url": "https://www.thumbtack.com/p/chain-link-fence-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556885602120441859"
      }, {
        "url": "https://www.thumbtack.com/p/ceiling-fan-install-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556885404154691594"
      }, {
        "url": "https://www.thumbtack.com/p/accounting-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556755874445754370"
      }, {
        "url": "https://www.thumbtack.com/p/cedar-shake-roof-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556885489047101443"
      }, {
        "url": "https://www.thumbtack.com/p/carpet-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556884905928499210"
      }, {
        "url": "https://www.thumbtack.com/p/carpet-removal-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556884830110392322"
      }, {
        "url": "https://www.thumbtack.com/p/carpet-cleaning-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556884771112329218"
      }, {
        "url": "https://www.thumbtack.com/p/carpenters-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556884697372868610"
      }, {
        "url": "https://www.thumbtack.com/p/cabinet-refinishing-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556884670524948480"
      }, {
        "url": "https://www.thumbtack.com/p/pipe-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556896082179842051"
      }, {
        "url": "https://www.thumbtack.com/p/wood-stove-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556996835283091459"
      }, {
        "url": "https://www.thumbtack.com/p/blind-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556884257235730442"
      }, {
        "url": "https://www.thumbtack.com/p/bathroom-remodel-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556884029458907139"
      }, {
        "url": "https://www.thumbtack.com/p/baseboard-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556883593709436932"
      }, {
        "url": "https://www.thumbtack.com/p/welding-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556902108827262978"
      }, {
        "url": "https://www.thumbtack.com/p/staircase-remodel-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556898503111794693"
      }, {
        "url": "https://www.thumbtack.com/p/radon-testing-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556896897480843267"
      }, {
        "url": "https://www.thumbtack.com/p/radon-mitigation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556896874207674372"
      }, {
        "url": "https://www.thumbtack.com/p/playset-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556994326327255050"
      }, {
        "url": "https://www.thumbtack.com/p/mural-pricing",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556895512371306500"
      }, {
        "url": "https://www.thumbtack.com/p/lawn-mower-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556894222725062659"
      }, {
        "url": "https://www.thumbtack.com/p/photographer-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556895946124214275"
      }, {
        "url": "https://www.thumbtack.com/p/cost-to-rewire-a-house",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556888063587655683"
      }, {
        "url": "https://www.thumbtack.com/p/gardener-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556890852271947778"
      }, {
        "url": "https://www.thumbtack.com/p/fuse-box-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556890638211784714"
      }, {
        "url": "https://www.thumbtack.com/p/deck-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556888318145544195"
      }, {
        "url": "https://www.thumbtack.com/p/closet-remodel-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556885874164842498"
      }, {
        "url": "https://www.thumbtack.com/p/bed-frame-assembly-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556884185743032323"
      }, {
        "url": "https://www.thumbtack.com/p/asphalt-paving-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556882775678943242"
      }, {
        "url": "https://www.thumbtack.com/p/art-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556757209229082627"
      }, {
        "url": "https://www.thumbtack.com/p/attic-renovation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556883348429012992"
      }, {
        "url": "https://www.thumbtack.com/p/attic-cleaning-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556883140189929476"
      }, {
        "url": "https://www.thumbtack.com/p/asphalt-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556883102304518154"
      }, {
        "url": "https://www.thumbtack.com/p/cost-of-architect",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556886515285975040"
      }, {
        "url": "https://www.thumbtack.com/p/appliance-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556757051189051402"
      }, {
        "url": "https://www.thumbtack.com/p/appliance-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556756999881097226"
      }, {
        "url": "https://www.thumbtack.com/p/apartment-cleaning-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556756741645631493"
      }, {
        "url": "https://www.thumbtack.com/p/cost-of-animal-removal-services",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556886469920301056"
      }, {
        "url": "https://www.thumbtack.com/p/wedding-cake-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556901953219313666"
      }, {
        "url": "https://www.thumbtack.com/p/air-duct-replacement-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556756272117129216"
      }, {
        "url": "https://www.thumbtack.com/p/air-duct-cleaning-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556756198600368133"
      }, {
        "url": "https://www.thumbtack.com/p/ac-unit-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556755795368214532"
      }, {
        "url": "https://www.thumbtack.com/p/pool-maintenance-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556896281862471685"
      }, {
        "url": "https://www.thumbtack.com/p/plumbing-inspection-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556896173985619971"
      }, {
        "url": "https://www.thumbtack.com/p/swimming-pool-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556898665616744450"
      }, {
        "url": "https://www.thumbtack.com/p/above-ground-pool-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556755070593703939"
      }, {
        "url": "https://www.thumbtack.com/p/engagement-photography-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556889021002678274"
      }, {
        "url": "https://www.thumbtack.com/p/metal-roof-vs-shingles-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556894949043920898"
      }, {
        "url": "https://www.thumbtack.com/p/cost-to-finish-a-basement",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556886983170998276"
      }, {
        "url": "https://www.thumbtack.com/p/cost-to-build-a-deck",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556886837147140099"
      },

      {
        "url": "https://www.thumbtack.com/p/pool-inspection-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556896269182656515"
      }, {
        "url": "https://www.thumbtack.com/p/house-painting-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556892808060452868"
      }, {
        "url": "https://www.thumbtack.com/p/patent-lawyer-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556895814471147524"
      }, {
        "url": "https://www.thumbtack.com/p/how-much-does-it-cost-to-paint-a-house",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556893033898172421"
      }, {
        "url": "https://www.thumbtack.com/p/cost-to-install-laminate-flooring",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556887583506874368"
      }, {
        "url": "https://www.thumbtack.com/p/aerial-photography-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556755923754180618"
      }, {
        "url": "https://www.thumbtack.com/p/pool-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556896366909906948"
      }, {
        "url": "https://www.thumbtack.com/p/wedding-photographer-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556902024545099779"
      }, {
        "url": "https://www.thumbtack.com/p/concrete-foundation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556886252235472899"
      }, {
        "url": "https://www.thumbtack.com/p/heat-pump-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556891556201684997"
      },

      {
        "url": "https://www.thumbtack.com/p/cost-to-seal-driveway",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556888090718527493"
      }, {
        "url": "https://www.thumbtack.com/p/furnace-replacement-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556890455118831618"
      }, {
        "url": "https://www.thumbtack.com/p/wedding-makeup-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556901997193936906"
      }, {
        "url": "https://www.thumbtack.com/p/furnace-maintenance-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556890398483980293"
      }, {
        "url": "https://www.thumbtack.com/p/gutter-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556891284420616192"
      }, {
        "url": "https://www.thumbtack.com/p/range-hood-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556997272640700421"
      }, {
        "url": "https://www.thumbtack.com/p/inground-pool-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556893314233352197"
      },

      {
        "url": "https://www.thumbtack.com/p/wardrobe-consultant-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556899688781717506"
      }, {
        "url": "https://www.thumbtack.com/p/cost-of-concrete-patio",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556886558034042890"
      }, {
        "url": "https://www.thumbtack.com/p/dumpster-rental-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556993181214867456"
      }, {
        "url": "https://www.thumbtack.com/p/blown-in-insulation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556884368662724610"
      }, {
        "url": "https://www.thumbtack.com/p/excavation-costs",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556889093493047306"
      }, {
        "url": "https://www.thumbtack.com/p/furniture-removal-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556890610082856965"
      }, {
        "url": "https://www.thumbtack.com/p/ac-service-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556755692795461637"
      }, {
        "url": "https://www.thumbtack.com/p/fence-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556889228930678788"
      }, {
        "url": "https://www.thumbtack.com/p/concrete-removal-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556886293001158658"
      }, {
        "url": "https://www.thumbtack.com/p/air-conditioner-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556756077983997956"
      }, {
        "url": "https://www.thumbtack.com/p/fiberglass-inground-pools-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556890068442079237"
      }, {
        "url": "https://www.thumbtack.com/p/washing-machine-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556901449883344901"
      }, {
        "url": "https://www.thumbtack.com/p/gutter-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556891354782507013"
      }, {
        "url": "https://www.thumbtack.com/p/asbestos-removal-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556882528633520130"
      }, {
        "url": "https://www.thumbtack.com/p/septic-inspection-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556897455544975362"
      }, {
        "url": "https://www.thumbtack.com/p/attic-insulation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556883253881282563"
      }, {
        "url": "https://www.thumbtack.com/p/indoor-air-quality-testing-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556893269264883722"
      }, {
        "url": "https://www.thumbtack.com/p/deck-staining-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556888348673171466"
      }, {
        "url": "https://www.thumbtack.com/p/rug-cleaning-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556897308745678858"
      }, {
        "url": "https://www.thumbtack.com/p/remodeling-costs",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556897062153289738"
      }, {
        "url": "https://www.thumbtack.com/p/asbestos-testing-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556882612443774981"
      }, {
        "url": "https://www.thumbtack.com/p/grout-cleaning-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556891204229619722"
      }, {
        "url": "https://www.thumbtack.com/p/sump-pump-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556995197995819013"
      }, {
        "url": "https://www.thumbtack.com/p/siding-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556897908210827269"
      }, {
        "url": "https://www.thumbtack.com/p/quartz-counter-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556896778925187076"
      }, {
        "url": "https://www.thumbtack.com/p/artificial-grass-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556757244173811715"
      }, {
        "url": "https://www.thumbtack.com/p/cost-to-install-kitchen-cabinets",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556887046049341443"
      }, {
        "url": "https://www.thumbtack.com/p/cost-to-reupholster-a-couch",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556887998218420227"
      }, {
        "url": "https://www.thumbtack.com/p/fireplace-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556890147443367939"
      }, {
        "url": "https://www.thumbtack.com/p/cabinet-refacing-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556884634120781829"
      }, {
        "url": "https://www.thumbtack.com/p/sprinkler-systems-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556898410930028548"
      }, {
        "url": "https://www.thumbtack.com/p/sump-pump-replacement-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556995279511502852"
      }, {
        "url": "https://www.thumbtack.com/p/fence-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556889262110269450"
      }, {
        "url": "https://www.thumbtack.com/p/stump-grinding-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556994593140228099"
      }, {
        "url": "https://www.thumbtack.com/p/bee-removal-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556884227280314368"
      }, {
        "url": "https://www.thumbtack.com/p/deck-refinishing-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556888283463917573"
      }, {
        "url": "https://www.thumbtack.com/p/vinyl-siding-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556899167204900869"
      }, {
        "url": "https://www.thumbtack.com/p/garbage-disposal-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556890828453224452"
      }, {
        "url": "https://www.thumbtack.com/p/foundation-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556890250675625984"
      }, {
        "url": "https://www.thumbtack.com/p/mold-inspection-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556895071701745666"
      }, {
        "url": "https://www.thumbtack.com/p/bathtub-refinishing-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556884056859967493"
      }, {
        "url": "https://www.thumbtack.com/p/3d-modeling-price",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556754829493977090"
      }, {
        "url": "https://www.thumbtack.com/p/wood-fence-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556902286714142720"
      }, {
        "url": "https://www.thumbtack.com/p/refrigerator-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556897000115322883"
      }, {
        "url": "https://www.thumbtack.com/p/garage-door-opener-install-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556890689713438720"
      }, {
        "url": "https://www.thumbtack.com/p/dryer-vent-cleaning-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556888810494009354"
      }, {
        "url": "https://www.thumbtack.com/p/termites-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556898764164694020"
      }, {
        "url": "https://www.thumbtack.com/p/standby-generator-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556898531878486016"
      }, {
        "url": "https://www.thumbtack.com/p/pool-fence-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556896218208960515"
      }, {
        "url": "https://www.thumbtack.com/p/fan-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556994023849664515"
      }, {
        "url": "https://www.thumbtack.com/p/cost-to-demolish-a-house",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556886962617040906"
      }, {
        "url": "https://www.thumbtack.com/p/radiant-floor-heating-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556896819306225667"
      }, {
        "url": "https://www.thumbtack.com/p/window-tinting-price",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556902255450726403"
      }, {
        "url": "https://www.thumbtack.com/p/gas-fireplace-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556890878659624960"
      }, {
        "url": "https://www.thumbtack.com/p/dryer-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556888763174764548"
      }, {
        "url": "https://www.thumbtack.com/p/bed-bugs-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556992593947869194"
      }, {
        "url": "https://www.thumbtack.com/p/bathtub-replacement-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556884080919879682"
      }, {
        "url": "https://www.thumbtack.com/p/aluminum-fence-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556756319887785987"
      }, {
        "url": "https://www.thumbtack.com/p/shingle-roof-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556897512738439172"
      }, {
        "url": "https://www.thumbtack.com/p/fiber-cement-siding-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556890031371190275"
      }, {
        "url": "https://www.thumbtack.com/p/cockroach-exterminator-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556885928495996932"
      }, {
        "url": "https://www.thumbtack.com/p/skylight-installation-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556897971846152202"
      }, {
        "url": "https://www.thumbtack.com/p/metal-roof-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556894901069930499"
      }, {
        "url": "https://www.thumbtack.com/p/basement-waterproofing-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556883950672093184"
      }, {
        "url": "https://www.thumbtack.com/p/siding-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556897883526938626"
      }, {
        "url": "https://www.thumbtack.com/p/furnace-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556890422398590976"
      }, {
        "url": "https://www.thumbtack.com/p/flea-exterminator-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556890170829053952"
      }, {
        "url": "https://www.thumbtack.com/p/chimney-repair-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556885773356769282"
      }, {
        "url": "https://www.thumbtack.com/p/wood-siding-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556996728726306820"
      }, {
        "url": "https://www.thumbtack.com/p/tile-roof-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556995812508508162"
      }, {
        "url": "https://www.thumbtack.com/p/marble-countertops-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556894792142176256"
      }, {
        "url": "https://www.thumbtack.com/p/ant-exterminator-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556756621056425986"
      }, {
        "url": "https://www.thumbtack.com/p/esl-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556889063237419018"
      }, {
        "url": "https://www.thumbtack.com/p/real-estate-photography-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556896936689672195"
      }, {
        "url": "https://www.thumbtack.com/p/horse-riding-lesson-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556892265530204160"
      }, {
        "url": "https://www.thumbtack.com/p/cost-of-mediation",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556886690451677187"
      }, {
        "url": "https://www.thumbtack.com/p/freelance-marketing-consultant-rates",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556890321208836100"
      }, {
        "url": "https://www.thumbtack.com/p/nature-photography-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556895576748326915"
      }, {
        "url": "https://www.thumbtack.com/p/video-editing-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556899128393703427"
      }, {
        "url": "https://www.thumbtack.com/p/architectural-photography-prices",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556757095975133194"
      }, {
        "url": "https://www.thumbtack.com/p/standing-seam-metal-roof-cost",
        "img": "https://production-next-images-cdn.thumbtack.com/i/556898555023917056"
      },
    ]




    function init() {
      // 👉 Add body class based on author
      (function () {
        const targetEl = document.querySelector(
          '[class*="composable-customer-header_root"] + .mb6 > div:nth-child(4) [class*="Type_text2"]'
        );

        if (targetEl) {
          let text = targetEl.textContent.trim();
          text = text.replace(/^By\s+/i, "");

          const allowedNames = [
            "Kristy Snyder",
            "Melanie Fourie",
            "Nicki Escudero",
            "Sydney Champion",
            "Thumbtack Staff",
            "Kathleen Allardyce",
            "Daniel Jones",
            "Chris Davaa"
          ];

          if (allowedNames.includes(text)) {
            const className = text.replace(/\s+/g, "_");
            document.body.classList.add(className);
          }
        }
      })();

      // 👉 Mobile TOC move (<=1023px)
      (function () {
        if (window.innerWidth > 1023) {
          return;
        }

        const tocList = document.querySelector('#Table\\ of\\ Contents + ul');
        const target = document.querySelector('[class*="composable-customer-header_root"] + .mb6 > div:nth-child(4)');

        if (tocList && target) {
          tocList.classList.add('moved-toc-mobile');
          target.insertAdjacentElement("afterend", tocList);
        }
      })();

      // 👉 Desktop-only code (>=1025px)
      if (window.innerWidth < 1025) {
        return;
      }

      // 👉 Add variation name to <body>
      const body = document.querySelector("body");
      if (body) {
        body.classList.add(variation_name);
      }

      // 👉 Insert banner image if current URL matches
      try {
        const currentPath = window.location.pathname;

        if (Array.isArray(dataObject)) {
          dataObject.forEach(function (element) {
            if (element.url.includes(currentPath)) {
              const bannerExists = document.querySelector(".banner_img");
              if (!bannerExists) {
                const hero = document.querySelector('[class*="cobaltized-cost-page-hero_root"]');
                if (hero) {
                  hero.insertAdjacentHTML(
                    "afterend",
                    `<div class="banner_img"><img src="${element.img}" alt="Banner Image"/></div>`
                  );
                }
              }
            }
          });
        }
      } catch (err) {
        console.error("Error in banner section:", err);
      }

      // 👉 Wrapping extra divs & custom TOC inside main-wrapper (only if #Table of Contents exists)
      (function () {
        try {
          const toc = document.querySelector('#Table\\ of\\ Contents');
          if (!toc) {
            return;
          }

          const container = document.querySelector("div.mb6");
          if (!container) {
            return;
          }

          const allDivs = Array.from(container.querySelectorAll(":scope > div"));
          if (allDivs.length <= 4) {
            return;
          }

          // ✅ Check if main-wrapper already exists
          let mainWrapper = container.querySelector(".main-wrapper");
          if (!mainWrapper) {
            mainWrapper = document.createElement("div");
            mainWrapper.className = "main-wrapper";

            // ✅ Create custom-wrap
            const wrapDiv = document.createElement("div");
            wrapDiv.className = "custom-wrap";

            allDivs.slice(4).forEach(el => {
              if (!el.matches(".bb.b-gray-300.bg-white.pt5.pb5.m_pt6.m_pb6") && el.id !== "hireapro") {
                wrapDiv.appendChild(el);
              }
            });

            // ✅ Clone TOC safely
            let tocList = toc.nextElementSibling ? toc.nextElementSibling.cloneNode(true) : null;
            if (tocList) {
              const heading = document.createElement("h2");
              heading.textContent = "Table of Contents";

              const tocDiv = document.createElement("div");
              tocDiv.className = "custom-toc";
              tocDiv.appendChild(heading);
              tocDiv.appendChild(tocList);

              // ✅ Append wrapDiv and tocDiv into main-wrapper
              mainWrapper.appendChild(wrapDiv);
              mainWrapper.appendChild(tocDiv);

              // ✅ Insert main-wrapper after 4th div
              const fourthDiv = allDivs[3];
              fourthDiv.insertAdjacentElement("afterend", mainWrapper);
            }
          }
        } catch (error) {
          console.error(" Error in wrapping/TOC section:", error);
        }
      })();
    }





    /* Initialise variation */
    function thumbtackTest144(list, observer) {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === "mark" && entry.name === "afterHydrate") {
          observer.disconnect();
          clearInterval(test144Interval);
          waitForElement("body", init, 50, 15000);
          window.isHydrated = true;
        }
      });
    }
    if (!window.isHydrated) {
      var test144Interval = setInterval(function () {
        waitForElement("body", init, 50, 15000);
      }, 50);
      setTimeout(function () {
        clearInterval(test144Interval);
      }, 3000);
      const observer = new PerformanceObserver(thumbtackTest144);
      observer.observe({
        entryTypes: ["mark"]
      });
    } else {
      waitForElement("body", init, 50, 15000);
    }



  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();



