(function () {
    try {
        /* main variables */
        var debug = 1;
        var variation_name = "TravelShift_T54";
        const pathname = window.location.pathname;
        /* helper library */
        var _$;
        function waitForElement(selector, trigger) {
            var interval = setInterval(function () {
                if (document &&
                    document.querySelector(selector) &&
                    document.querySelectorAll(selector).length > 0) {
                    clearInterval(interval);
                    trigger();
                }
            }, 50);
            setTimeout(function () {
                clearInterval(interval);
            }, 15000);
        }
        function observeSelector(selector, callback, options = {}) {
            const doc = options.document || window.document;
            const processed = new Map();

            if (options.timeout || options.onTimeout) {
                throw new Error(`observeSelector options \`timeout\` and \`onTimeout\` are not yet implemented.`);
            }

            let obs;
            let isDone = false;

            const done = () => {
                if (obs) obs.disconnect();
                isDone = true;
            };

            const processElement = el => {
                if (!processed.has(el)) {
                    processed.set(el, true);
                    callback(el);
                    if (options.once) {
                        done();
                        return true;
                    }
                }
                return false;
            };

            const lookForSelector = elParent => {
                if (elParent.nodeType === Node.ELEMENT_NODE) {
                    if (elParent.matches(selector) && processElement(elParent)) {
                        return true;
                    }
                    const elements = elParent.querySelectorAll(selector);
                    for (const el of elements) {
                        if (processElement(el)) return true;
                    }
                }
                return false;
            };

            lookForSelector(doc.documentElement);

            if (!isDone) {
                obs = new MutationObserver(mutationsList => {
                    for (const record of mutationsList) {
                        if (record.addedNodes && record.addedNodes.length) {
                            for (const addedNode of record.addedNodes) {
                                if (addedNode.nodeType === Node.ELEMENT_NODE) {
                                    if (lookForSelector(addedNode)) return true;
                                }
                            }
                        }
                    }
                });
                obs.observe(doc, {
                    attributes: false,
                    childList: true,
                    subtree: true,
                });
            }

            return done;
        }

        const imageMap = [
            { id: "20", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/NorthernLights.png", alt: "NorthernLights" },
            { id: "367", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/iceCaving.png", alt: "iceCaving" },
            { id: "370", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/SelfDrive.png", alt: "SelfDrive" },
            { id: "2", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/Glacierhiking.png", alt: "Glacierhiking" },
            { id: "15", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/Sightseeing.png", alt: "Sightseeing" },
            { id: "14", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/WhaleWatching.png", alt: "WhaleWatching" },
            { id: "251", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/hotSpringBathing.png", alt: "hotSpringBathing" },
            { id: "3", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/snorkelling.png", alt: "snorkelling" },
            { id: "18", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/BoatTrip.png", alt: "BoatTrip" },
            { id: "10", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/SnowMobile.png", alt: "SnowMobile" },
            { id: "4", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/Caving.png", alt: "Caving" },
            { id: "13", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/horseRiding.png", alt: "horseRiding" },
            { id: "374", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/Transfers.png", alt: "Transfers" },
            { id: "366", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/helicopter.png", alt: "helicopter" },
            { id: "371", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/airplane.png", alt: "airplane" },
            { id: "7", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/hiking.png", alt: "hiking" },
            { id: "9", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/ATV.png", alt: "ATV" },
            { id: "230", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/Dogsledding.png", alt: "Dogsledding" },
            { id: "6", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/Canoeing.png", alt: "Canoeing" },
            { id: "5", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/Kayaking.png", alt: "Kayaking" },
            { id: "16", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/Biking.png", alt: "Biking" },
            { id: "19", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/Climbing.png", alt: "Climbing" },
            { id: "377", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/Museums.png", alt: "Museums" },
            { id: "375", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/Walkingtours.png", alt: "Walkingtours" },
            { id: "363", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/CulturalActivity.png", alt: "CulturalActivity" },
            { id: "8", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/Diving.png", alt: "Diving" },
            { id: "1", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/Rafting.png", alt: "Rafting" },
            { id: "378", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/Exhibitions.png", alt: "Exhibitions" },
            { id: "364", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/Fishing.png", alt: "Fishing" },
            { id: "376", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/foodAndDrink.png", alt: "foodAndDrink" },
            { id: "12", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/iceClimbing.png", alt: "iceClimbing" },
            { id: "362", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/Motorbiking.png", alt: "Motorbiking" },
            { id: "373", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/Paragliding.png", alt: "Paragliding" },
            { id: "379", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/PuffinTours.png", alt: "PuffinTours" },
            { id: "380", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/Reindeers.png", alt: "Reindeers" },
            { id: "368", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/Skiing.png", alt: "Skiing" },
            { id: "11", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/Superjeep.png", alt: "Superjeep" },
            { id: "365", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/birdwatching.png", alt: "birdwatching" },
            { id: "372", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/Zipline.png", alt: "Zipline" },

        ];
        const imageicon = [
            { value: '', src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/searchIcon54.png", alt: "search" },
            { value: "Northern lights hunting", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/NorthernLightsColor.png", alt: "NorthernLights" },
            { value: "Ice Caving", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/iceCavingColor.png", alt: "iceCaving" },
            { value: "Self drive", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/SelfDriveColor.png", alt: "SelfDrive" },
            { value: "Glacier Hiking", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/GlacierhikingColor.png", alt: "Glacierhiking" },
            { value: "Sightseeing", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/SightseeingColor.png", alt: "Sightseeing" },
            { value: "Whale Watching", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/WhaleWatchingColor.png", alt: "WhaleWatching" },
            { value: "Hot Spring Bathing", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/hotSpringBathingColor.png", alt: "hotSpringBathing" },
            { value: "Snorkelling", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/snorkellingColor.png", alt: "snorkelling" },
            { value: "Boat Trip", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/BoatTripColor.png", alt: "BoatTrip" },
            { value: "Snowmobile", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/SnowMobileColor.png", alt: "SnowMobile" },
            { value: "Caving", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/CavingColor.png", alt: "Caving" },
            { value: "Horse Riding", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/horseRidingColor.png", alt: "horseRiding" },
            { value: "Transfers", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/TransfersColor.png", alt: "Transfers" },
            { value: "Helicopter", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/helicopterColor.png", alt: "helicopter" },
            { value: "Airplane", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/airplaneColor.png", alt: "airplane" },
            { value: "Hiking", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/hikingColor.png", alt: "hiking" },
            { value: "ATV", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/ATVColor.png", alt: "ATV" },
            { value: "Dog sledding", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/DogsleddingColor.png", alt: "Dogsledding" },
            { value: "Canoeing", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/CanoeingColor.png", alt: "Canoeing" },
            { value: "Kayaking", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/KayakingColor.png", alt: "Kayaking" },
            { value: "Biking", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/BikingColor.png", alt: "Biking" },
            { value: "Climbing", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/ClimbingColor.png", alt: "Climbing" },
            { value: "Museums", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/MuseumsColor.png", alt: "Museums" },
            { value: "Walking tours", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/WalkingtoursColor.png", alt: "Walkingtours" },
            { value: "Cultural Activity", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/CulturalActivityColor.png", alt: "CulturalActivity" },
            { value: "Diving", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/DivingColor.png", alt: "Diving" },
            { value: "Rafting", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/RaftingColor.png", alt: "Rafting" },
            { value: "Exhibitions", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/ExhibitionsColor.png", alt: "Exhibitions" },
            { value: "Fishing", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/FishingColor.png", alt: "Fishing" },
            { value: "Food & Drinks", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/foodAndDrinkColor.png", alt: "foodAndDrink" },
            { value: "Ice Climbing", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/iceClimbingColor.png", alt: "iceClimbing" },
            { value: "Motorbiking", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/MotorbikingColor.png", alt: "Motorbiking" },
            { value: "Paragliding", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/ParaglidingColor.png", alt: "Paragliding" },
            { value: "Puffin tours", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/PuffinToursColor.png", alt: "PuffinTours" },
            { value: "Reindeers", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/ReindeersColor.png", alt: "Reindeers" },
            { value: "Skiing", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/SkiingColor.png", alt: "Skiing" },
            { value: "Super Jeep", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/SuperjeepColor.png", alt: "Superjeep" },
            { value: "Bird watching", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/birdwatchingColor.png", alt: "birdwatching" },
            { value: "Zipline", src: "https://cdn-3.convertexperiments.com/uf/10007679/10007503/ZiplineColor.png", alt: "Zipline" },

        ];
        function imageMapping() {
            imageMap.forEach(function (item) {
                if (window.innerWidth > 960) {
                    waitForElement('#dropdownContainer-trips-activities-idAutocomplete [data-id="2"] svg', function () {
                        const element = document.querySelector(`#dropdownContainer-trips-activities-idAutocomplete [data-id="${item.id}"] svg`);
                        if (element) {
                            if (!document.querySelector(`#dropdownContainer-trips-activities-idAutocomplete [data-id="${item.id}"] svg+img`)) {
                                element.insertAdjacentHTML('afterend', `<img src="${item.src}" alt="${item.alt}">`);
                            }
                        }
                    })
                }
                else {
                    waitForElement(' #dropdownContainer-autocompleteAutocomplete [data-id="2"] svg', function () {
                        const element = document.querySelector(`#dropdownContainer-autocompleteAutocomplete [data-id="${item.id}"] svg`);
                        if (element) {

                            if (!document.querySelector(`#dropdownContainer-autocompleteAutocomplete [data-id="${item.id}"] svg+img`)) {
                                element.insertAdjacentHTML('afterend', `<img src="${item.src}" alt="${item.alt}">`);
                            }
                        }
                    })
                }
            });
        }
        function updateImage() {
            // Get the search input value
            const searchInput = document.querySelector('[data-crid="Travel_services_option"]:first-child [type="search"]');
            const searchValue = searchInput ? searchInput.value.trim() : '';
            // if (searchValue == '') {
            //     var iconElement = document.querySelector('.Icon_T54')
            //     var svg = document.querySelector('[data-crid="Travel_services_option"]:first-child span>svg')
            //     if (iconElement) {
            //         document.querySelector('.Icon_T54').classList.add('destination54')
            //     }
            //     if (svg) {
            //         document.querySelector('[data-crid="Travel_services_option"]:first-child span>svg').style.display = 'block'
            //     }

            // } else {
            //     var iconElement = document.querySelector('.Icon_T54')
            //     if (iconElement) {
            //         if (document.querySelector('.Icon_T54').classList.contains('destination54')) {
            //             document.querySelector('.Icon_T54').classList.remove('destination54')
            //         }
            //     }
            // }
            // Find the matching object in the imageicon array
            const matchedIcon = imageicon.find(icon => icon.value.toLowerCase() === searchValue.toLowerCase());
            // Get the image element with class "Icon_T54"

            const imageElement = document.querySelector('.Icon_T54');

            if (matchedIcon && imageElement) {
                // Update the image's src and alt attributes
                imageElement.src = matchedIcon.src;
                imageElement.alt = matchedIcon.alt;
            } else if (imageElement) {
                // Clear the src and alt if no match is found
                imageElement.src = '';
                imageElement.alt = '';
            }

        }
        var iconContainer = `<img src="" alt="" class="Icon_T54" style="display:none">`
        /* Variation Init */
        function init() {
            // Check if the current pathname exists in the array

            if (
                (pathname === '/') || // Home page
                (
                    (window.location.pathname == "/book-trips-holiday" && window._travelshift.page === '') // Searchpage
                )
            ) {
                document.querySelector('body').classList.add(variation_name);

                (window._travelshift.experiments = window._travelshift.experiments || []).push({ name: "T54_ACTIVITY_FILTERS_DROPDOWN_EXPERIMENT", variation: "1" });

                waitForElement('[data-crid="filter-section-price"]', function () {
                    if (document.querySelector('[data-crid="filter-section-activityIds"] [data-crid="filter-section-heading"] span')) {
                        document.querySelector('[data-crid="filter-section-activityIds"] [data-crid="filter-section-heading"] span').textContent = 'Experiences'
                        var activity = document.querySelector('[data-crid="filter-section-activityIds"]')
                        if (activity) {
                            document.querySelector('[data-crid="filter-section-price"]').insertAdjacentElement('afterend', activity)
                        }
                    }
                })
                waitForElement('[data-crid="Travel_services_option"]:first-child span>svg', function () {
                    if (!document.querySelector('.Icon_T54')) {
                        document.querySelector('[data-crid="Travel_services_option"]:first-child span>svg').insertAdjacentHTML("afterend", iconContainer)
                    }
                })


                if (!window.observerCS2Test54) {
                    window.observerCS2Test54 = true;
                    observeSelector('#dropdownContainer-trips-activities-idAutocomplete', function () {
                        imageMapping()
                    })
                    observeSelector('#dropdownContainer-autocompleteAutocomplete', function () {
                        imageMapping()
                    })
                    observeSelector('[data-crid="filter-section-activityIds"] [data-crid="filter-section-heading"] span', function () {
                        waitForElement('[data-crid="filter-section-price"]', function () {
                            if (document.querySelector('[data-crid="filter-section-activityIds"] [data-crid="filter-section-heading"] span')) {
                                document.querySelector('[data-crid="filter-section-activityIds"] [data-crid="filter-section-heading"] span').textContent = 'Experiences'
                                // console.log(document.querySelector('[data-crid="filter-section-price"]'))
                                var activity = document.querySelector('[data-crid="filter-section-activityIds"]')
                                if (activity) {
                                    document.querySelector('[data-crid="filter-section-price"]').insertAdjacentElement('afterend', activity)
                                }
                            }
                        })
                    })
                    if (window.innerWidth > 960) {
                        observeSelector('[data-crid="Travel_services_option"]:first-child span>svg', function () {
                            if (document.querySelector('#dropdownContainer-trips-activities-idAutocomplete')) {
                                if (document.querySelector('[data-crid="Travel_services_option"]:first-child [type="search"]').closest('span')) {
                                    document.querySelector('[data-crid="Travel_services_option"]:first-child [type="search"]').closest('span').classList.add('open-test')
                                }
                            } else {
                                if (document.querySelector('[data-crid="Travel_services_option"]:first-child [type="search"]').closest('span')) {
                                    document.querySelector('[data-crid="Travel_services_option"]:first-child [type="search"]').closest('span').classList.remove('open-test')
                                }
                                waitForElement('.Icon_T54', function () {
                                    updateImage()
                                    setTimeout(function () {
                                        updateImage()
                                    }, 300)

                                })
                            }
                        })
                        observeSelector('[data-crid="Travel_services_option"]:first-child span+div', function () {
                            if (document.querySelector('[data-crid="Travel_services_option"]:first-child span+div')) {
                                document.querySelector('[data-crid="Travel_services_option"]:first-child span+div').addEventListener("click", function () {
                                    setTimeout(function () {
                                        updateImage()
                                    }, 300)
                                })
                            }
                        })

                    }
                }
                if (window.innerWidth > 960) {
                    setTimeout(function(){
                        updateImage()
                    },1000)
                }

            }
        }

        window.addEventListener('travelshift:routeChangeComplete', e => {
            init()
        });
        function CS2Test54bserver(list, observer) {
            list.getEntries().forEach((entry) => {
                // console.log(list)
                if (entry.entryType === "mark" && entry.name === "afterHydrate") {
                    observer.disconnect();
                    waitForElement("body", init);
                }
            });
        }

        if (window._travelshift && window._travelshift.chunksLoadingData && window._travelshift.chunksLoadingData.status != "loaded") {
            // console.log("not isHydrated")
            const observer = new PerformanceObserver(CS2Test54bserver);
            observer.observe({ entryTypes: ["mark"] });
        } else {
            setTimeout(function () {
                waitForElement("body", init);
            }, 2000)
        }
        /* Initialise variation */

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();