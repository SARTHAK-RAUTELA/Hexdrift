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

    // src/conversion-rate-experts/SFG06/variation1/index.js
    var Bespoke_Solutions_heading = `<a href="https://www.sfg20.co.uk/products/bespoke-sector-solutions" class="child-menu-item " data-id="cre_bespoke_solutions" target="_blank" rel="noopener">
                        
                        
                       Bespoke Solutions
                        
                        <span class="right-arrow-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAATCAYAAACp65zuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACESURBVHgBjdJhEYAgDAXgRTCCEYhgBBpoAyNIA22gDYxABCMQwQg4zsff7e1uv/i4e4yJaNVaV+1RvFL0aBcXNwDYLgwMfrWzEBGm+tfO4AV4Y3ACnhl8IHNgcAYePRgQ4bZQn20xZ0v9lh6ebrY2P+SKDEoWigzqC3GJVXghtWLBm/4HqovJ9rlnSLYAAAAASUVORK5CYII=" alt="Click here to expand"></span>
                        
                        
                      </a>`;
    var Bespoke_Solutions_content = `<div class="right-content-box active" id="cre_bespoke_solutions">
                       
                      <div class="right-content-box-inner content_type_3">
                        
                        <div class="feature-img">
                          <img src="https://www.sfg20.co.uk/hs-fs/hubfs/SFG20_2023/images/woman-green-shirt-flipped-test-7.jpg?width=1254&height=800&name=woman-green-shirt-flipped-test-7.jpg" alt="List of Maintenance Schedules">
                        </div>
                        
                        
                        <h6>
                          Bespoke Solutions
                        </h6>
                        
                        
                        <div class="description"><span>SFG20 Solutions offers a bespoke service for industry sectors seeking technical support to deliver an effective maintenance regime. Our team of technical experts will support your business in designing optimal cost-effective maintenance regimes for tendering, auditing and contract management.</span>
                        </div>
                        
                      </div>
                      
                  
                      
                      
                   
                      
                      
                    </div>`;
    var maintain_schedules = `<h6 class="cre_maintain_heading">Maintenance Schedules</h6>
    <div class="description cre_maintain_desc">Our core library of maintenance schedules containing all assets commonly found in most buildings plus specialist content for specific industries.</div>
`;
    var resources_html = `<h6 class="cre_resource_heading">Resources</h6>
<div class="description cre_resource_desc">Explore SFG20's resources: in-depth e-guides, engaging webinars, informative blogs, practical case studies, and upcoming events to enrich your maintenance knowledge and skills.</div>
`;
    var facilities_html = `
<div class=" cre_facilitie_sub_heading ">SFG20 produce the industry standard for building maintenance. Its extensive library of maintenance schedules is accessed using SFG20 Facilities-iQ - software that empowers building owners, managers and maintenance professionals to control their risk, stay compliant, and keep buildings safe and efficient.</div>
`;
    var addHoverEffect = /* @__PURE__ */ __name((dataId, elementId) => {

        const dataIdElement = document.querySelector(`.dropdown-content [data-id="${dataId}"]`);
        const idElement = document.querySelector(`.dropdown-content #${elementId}`);
        if (dataIdElement && idElement) {
            dataIdElement.addEventListener("mouseover", () => idElement.classList.add("cre-active"));
            dataIdElement.addEventListener("mouseout", () => idElement.classList.remove("cre-active"));
        }
    }, "addHoverEffect");
    waitFor(
        () => document.querySelector(".top-strip-wrapper .top-strip-link:first-of-type") ? true : false,
        () => {
            $addClass("body", "CRE06");
            waitFor(
                () => document.querySelector(".top-strip-wrapper .top-strip-link:first-of-type") ? true : false,
                () => {
                    document.querySelector(".top-strip-wrapper .top-strip-link:first-of-type").textContent = "Member List";
                    document.querySelector(".top-strip-wrapper .top-strip-link:first-of-type").href = "https://www.sfg20.co.uk/member-list";
                },
                {
                    interval: 50,
                    duration: 15e3
                }
            );
            waitFor(
                () => document.querySelector(".top-strip-wrapper .top-strip-link:last-of-type") ? true : false,
                () => {
                    document.querySelector(".top-strip-wrapper .top-strip-link:last-of-type").textContent = "Login";
                    document.querySelector(".top-strip-wrapper .top-strip-link:last-of-type").href = "https://www.sfg20.co.uk/login";
                },
                {
                    interval: 50,
                    duration: 15e3
                }
            );
            waitFor(
                () => document.querySelector(".main-header-container .header-right .main-menu") ? true : false,
                () => {
                    if (!document.querySelector("li.cre-sfg-20")) {
                        document.querySelector(".main-header-container .header-right .main-menu ").insertAdjacentHTML("afterbegin", '<li class="cre-sfg-20"><a class="simple-menu-item" href="https://www.sfg20.co.uk/what-is-sfg20">What is SFG20? </a></li>');
                    }
                },
                {
                    interval: 50,
                    duration: 15e3
                }
            );
            waitFor(
                () => document.querySelector(".main-header-container .header-right .main-menu  #mega_loop_3") ? true : false,
                () => {
                    if (!document.querySelector("li.cre-faq")) {
                        document.querySelector(".main-header-container .header-right .main-menu  #mega_loop_3").insertAdjacentHTML("afterend", '<li class="cre-faq"><a class="simple-menu-item" href="https://www.sfg20.co.uk/resources/faqs">FAQs </a></li>');
                    }
                },
                {
                    interval: 50,
                    duration: 15e3
                }
            );
            waitFor(
                () => document.querySelector(".main-header-container .main-menu> li#mega_loop_1> a") ? true : false,
                () => {
                    document.querySelector(".main-header-container .main-menu> li#mega_loop_1> a").innerHTML = 'Facilities-iQ <img class="cre-drop-icon" src="https://cdn-3.convertexperiments.com/uf/10007679/10007638/Vector%20(1).png" >';
                },
                {
                    interval: 50,
                    duration: 15e3
                }
            );
            waitFor(
                () => document.querySelector(".main-header-container .main-menu> li#mega_loop_2> a") ? true : false,
                () => {
                    if (!document.querySelector(".main-header-container .main-menu> li#mega_loop_2> a .cre-drop-icon")) {
                        document.querySelector(".main-header-container .main-menu> li#mega_loop_2> a").insertAdjacentHTML("beforeend", '<img class="cre-drop-icon" src="https://cdn-3.convertexperiments.com/uf/10007679/10007638/Vector%20(1).png" >');
                    }
                },
                {
                    interval: 50,
                    duration: 15e3
                }
            );
            waitFor(
                () => document.querySelector(".main-header-container .main-menu> li#mega_loop_3> a") ? true : false,
                () => {
                    if (!document.querySelector('.main-header-container .main-menu> li#mega_loop_3> a .cre-drop-icon')) {
                        document.querySelector(".main-header-container .main-menu> li#mega_loop_3> a").insertAdjacentHTML("beforeend", '<img class="cre-drop-icon" src="https://cdn-3.convertexperiments.com/uf/10007679/10007638/Vector%20(1).png" >');
                    }
                },
                {
                    interval: 50,
                    duration: 15e3
                }
            );
            waitFor(
                () => document.querySelector('.dropdown-content [data-id="facilities_iq"]') ? true : false,
                () => {
                    document.querySelector('.dropdown-content [data-id="facilities_iq"]').innerHTML = 'Facilities-iQ Software   <span class="right-arrow-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAATCAYAAACp65zuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACESURBVHgBjdJhEYAgDAXgRTCCEYhgBBpoAyNIA22gDYxABCMQwQg4zsff7e1uv/i4e4yJaNVaV+1RvFL0aBcXNwDYLgwMfrWzEBGm+tfO4AV4Y3ACnhl8IHNgcAYePRgQ4bZQn20xZ0v9lh6ebrY2P+SKDEoWigzqC3GJVXghtWLBm/4HqovJ9rlnSLYAAAAASUVORK5CYII=" alt="Click here to expand"></span>';
                },
                {
                    interval: 50,
                    duration: 15e3
                }
            );
            waitFor(
                () => document.querySelector('.dropdown-content [data-id="digital_partner_programme"]') ? true : false,
                () => {
                    document.querySelector('.dropdown-content [data-id="digital_partner_programme"]').innerHTML = 'Become a Digital Partner   <span class="right-arrow-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAATCAYAAACp65zuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACESURBVHgBjdJhEYAgDAXgRTCCEYhgBBpoAyNIA22gDYxABCMQwQg4zsff7e1uv/i4e4yJaNVaV+1RvFL0aBcXNwDYLgwMfrWzEBGm+tfO4AV4Y3ACnhl8IHNgcAYePRgQ4bZQn20xZ0v9lh6ebrY2P+SKDEoWigzqC3GJVXghtWLBm/4HqovJ9rlnSLYAAAAASUVORK5CYII=" alt="Click here to expand"></span>';
                },
                {
                    interval: 50,
                    duration: 15e3
                }
            );
            waitFor(
                () => document.querySelector('.dropdown-content [data-id="software_integration"]') ? true : false,
                () => {
                    document.querySelector('.dropdown-content [data-id="software_integration"]').innerHTML = 'Integrating with FM Systems <span class="right-arrow-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAATCAYAAACp65zuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACESURBVHgBjdJhEYAgDAXgRTCCEYhgBBpoAyNIA22gDYxABCMQwQg4zsff7e1uv/i4e4yJaNVaV+1RvFL0aBcXNwDYLgwMfrWzEBGm+tfO4AV4Y3ACnhl8IHNgcAYePRgQ4bZQn20xZ0v9lh6ebrY2P+SKDEoWigzqC3GJVXghtWLBm/4HqovJ9rlnSLYAAAAASUVORK5CYII=" alt="Click here to expand"></span>';
                },
                {
                    interval: 50,
                    duration: 15e3
                }
            );
            waitFor(
                () => document.querySelector(".megamenu-dropdown #facilities_iq h6") ? true : false,
                () => {
                    document.querySelector(".megamenu-dropdown #facilities_iq h6").textContent = "Facilities-iQ";
                },
                {
                    interval: 50,
                    duration: 15e3
                }
            );
            waitFor(
                () => document.querySelector(".megamenu-dropdown #digital_partner_programme h6") ? true : false,
                () => {
                    document.querySelector(".megamenu-dropdown #digital_partner_programme h6").textContent = "Become a Digital Partner ";
                },
                {
                    interval: 50,
                    duration: 15e3
                }
            );
            waitFor(
                () => document.querySelector(".megamenu-dropdown  #software_integration h6") ? true : false,
                () => {
                    document.querySelector(".megamenu-dropdown  #software_integration h6").textContent = "Integrating with FM Systems";
                },
                {
                    interval: 50,
                    duration: 15e3
                }
            );
            waitFor(
                () => document.querySelector(".megamenu-dropdown  #core_library h6") ? true : false,
                () => {
                    document.querySelector(".megamenu-dropdown  #core_library h6").textContent = `Core Library`;
                },
                {
                    interval: 50,
                    duration: 15e3
                }
            );
            waitFor(
                () => document.querySelector(".megamenu-dropdown  #core_library .description") ? true : false,
                () => {
                    document.querySelector(".megamenu-dropdown  #core_library .description").textContent = `Explore the core maintenance schedules available to SFG20 users, which can be used in conjunction with specialist content such as; Building Fabric, Commercial Catering, and Healthcare for comprehensive facility management.`;
                },
                {
                    interval: 50,
                    duration: 15e3
                }
            );
            waitFor(
                () => document.querySelector("#mega_loop_2 .child-items") ? true : false,
                () => {
                    if (!document.querySelector('#mega_loop_2 .child-items [data-id="cre_bespoke_solutions"]')) {
                        document.querySelector("#mega_loop_2 .child-items").insertAdjacentHTML("beforeend", Bespoke_Solutions_heading);
                    }
                },
                {
                    interval: 50,
                    duration: 15e3
                }
            );
            waitFor(
                () => document.querySelector("#mega_loop_2  .right-side") ? true : false,
                () => {
                    if (!document.querySelector('#mega_loop_2  .right-side #cre_bespoke_solutions')) {
                        document.querySelector("#mega_loop_2  .right-side").insertAdjacentHTML("beforeend", Bespoke_Solutions_content);
                    }
                },
                {
                    interval: 50,
                    duration: 15e3
                }
            );
            waitFor(
                () => document.querySelector("#mega_loop_3 .child-items") ? true : false,
                () => {
                    document.querySelector("#mega_loop_3 .child-items").insertAdjacentElement("beforeend", document.querySelector('#mega_loop_3 .child-items [data-id="learning_lab"]'));
                },
                {
                    interval: 50,
                    duration: 15e3
                }
            );
            waitFor(
                () => document.querySelector("#mega_loop_3  .right-side ") ? true : false,
                () => {
                    document.querySelector("#mega_loop_3  .right-side ").insertAdjacentElement("beforeend", document.querySelector("#mega_loop_3  .right-side #learning_lab"));
                },
                {
                    interval: 50,
                    duration: 15e3
                }
            );
            waitFor(
                () => document.querySelector('a[data-id="learning_lab"]') ? true : false,
                () => {
                    document.querySelector('a[data-id="learning_lab"]').innerHTML = `  Training Courses <span class="right-arrow-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAATCAYAAACp65zuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACESURBVHgBjdJhEYAgDAXgRTCCEYhgBBpoAyNIA22gDYxABCMQwQg4zsff7e1uv/i4e4yJaNVaV+1RvFL0aBcXNwDYLgwMfrWzEBGm+tfO4AV4Y3ACnhl8IHNgcAYePRgQ4bZQn20xZ0v9lh6ebrY2P+SKDEoWigzqC3GJVXghtWLBm/4HqovJ9rlnSLYAAAAASUVORK5CYII=" alt="Click here to expand"></span>`;
                },
                {
                    interval: 50,
                    duration: 15e3
                }
            );
            waitFor(
                () => document.querySelector(".megamenu-dropdown  #learning_lab h6") ? true : false,
                () => {
                    document.querySelector(".megamenu-dropdown  #learning_lab h6").textContent = `Training Courses`;
                },
                {
                    interval: 50,
                    duration: 15e3
                }
            );
            waitFor(
                () => document.querySelector(".dropdown-content #core_library .right-content-box-inner") ? true : false,
                () => {
                    if (!document.querySelector('.dropdown-content #core_library .right-content-box-inner .cre_maintain_heading')) {
                        document.querySelector(".dropdown-content #core_library .right-content-box-inner").insertAdjacentHTML("afterbegin", maintain_schedules);
                    }
                },
                {
                    interval: 50,
                    duration: 15e3
                }
            );
            waitFor(
                () => document.querySelector(".dropdown-content #facilities_iq .right-content-box-inner") ? true : false,
                () => {
                    if (!document.querySelector('.dropdown-content #facilities_iq .right-content-box-inner .cre_facilitie_sub_heading')) {
                        document.querySelector(".dropdown-content #facilities_iq .right-content-box-inner .description").insertAdjacentHTML("afterend", facilities_html);
                    }
                },
                {
                    interval: 50,
                    duration: 15e3
                }
            );
            waitFor(
                () => document.querySelector(".dropdown-content #learning_lab .right-content-box-inner") ? true : false,
                () => {
                    if (!document.querySelector('.dropdown-content #learning_lab .right-content-box-inner .cre_resource_heading')) {
                        document.querySelector(".dropdown-content #learning_lab .right-content-box-inner").insertAdjacentHTML("beforeend", resources_html);
                    }
                },
                {
                    interval: 50,
                    duration: 15e3
                }
            );

            if (!window.eventListenersAddedTest06) {

                window.eventListenersAddedTest06 = true;

                addHoverEffect("facilities_iq", "facilities_iq");
                addHoverEffect("core_library", "core_library");
                addHoverEffect("learning_lab", "learning_lab");
                addHoverEffect("cre_bespoke_solutions", "cre_bespoke_solutions");

                waitFor(
                    () => document.querySelector(".header-right #mega_loop_1 > a, .header-right #mega_loop_2 > a, .header-right #mega_loop_3 > a"),
                    () => {
                        document.querySelectorAll(".header-right #mega_loop_1 > a, .header-right #mega_loop_2 > a, .header-right #mega_loop_3 > a").forEach(function (link) {
                            link.addEventListener("click", function (event) {
                                event.preventDefault();
                            });
                        });
                    },
                    {
                        interval: 50,
                        duration: 15e3
                    }

                )

            }


            waitFor(
                () => document.querySelector('a[data-id="facilities_management"]') ? true : false,
                () => {
                    document.querySelector('a[data-id="facilities_management"]').href = "https://www.sfg20.co.uk/maintenance-schedules/facilities-maintenance";
                },
                {
                    interval: 50,
                    duration: 15e3
                }
            );
            waitFor(
                () => document.querySelector('a[data-id="digital_partner_programme"]') ? true : false,
                () => {
                    document.querySelector('a[data-id="digital_partner_programme"]').href = "https://www.sfg20.co.uk/digital-partner-programme";
                },
                {
                    interval: 50,
                    duration: 15e3
                }
            );
            waitFor(
                () => document.querySelector('a[data-id="software_integration"]') ? true : false,
                () => {
                    document.querySelector('a[data-id="software_integration"]').href = "https://www.sfg20.co.uk/products/software-integration";
                },
                {
                    interval: 50,
                    duration: 15e3
                }
            );

            waitFor(
                () => document.querySelector('.main-header .main-menu >li .search-bar') ? true : false,
                () => {

                    if (!document.querySelector('.main-header .main-menu > li .cre-06-search-icon')) {
                        document.querySelector('.main-header .main-menu >li .search-bar').insertAdjacentHTML('afterend', '<div class="cre-06-search-icon"><img src="https://www.sfg20.co.uk/hubfs/SFG20_Web_Theme_Nov2023/Search%20Icon%20(1).svg" alt="Search Icon"></div>')
                    }
                },
                {
                    interval: 50,
                    duration: 15e3
                }
            );

            waitFor(
                () => document.querySelector('.main-header .main-menu > li:last-of-type .cre-06-search-icon') ? true : false,
                () => {

                    const searchIcon = document.querySelector(".main-header .main-menu > li:last-of-type .cre-06-search-icon");


                    if (searchIcon) {

                        searchIcon.addEventListener("click", function () {

                            const lastMenuItem = document.querySelector(".main-header .main-menu > li:last-of-type");


                            if (lastMenuItem) {
                                lastMenuItem.classList.add("cre-visible-icon");
                                document.querySelector('.main-header ').classList.add("CRE-search");
                            }
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
