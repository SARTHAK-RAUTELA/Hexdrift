(function() {
    try {
        /* main variables */
        var debug = 1;
        var variation_name = "cre-t-34";
        /* helper library */
        var _$;
        !(function(factory) {
            _$ = factory();
        })(function() {
            var bm = function(s) {
                if (typeof s === "string") {
                    this.value = Array.prototype.slice.call(document.querySelectorAll(s));
                }
                if (typeof s === "object") {
                    this.value = [s];
                }
            };
            bm.prototype = {
                eq: function(n) {
                    this.value = [this.value[n]];
                    return this;
                },
                each: function(fn) {
                    [].forEach.call(this.value, fn);
                    return this;
                },
                log: function() {
                    var items = [];
                    for (let index = 0; index < arguments.length; index++) {
                        items.push(arguments[index]);
                    }
                    console && console.log(variation_name, items);
                },
                addClass: function(v) {
                    var a = v.split(" ");
                    return this.each(function(i) {
                        for (var x = 0; x < a.length; x++) {
                            if (i.classList) {
                                i.classList.add(a[x]);
                            } else {
                                i.className += " " + a[x];
                            }
                        }
                    });
                },
                waitForElement: function(selector, trigger, delayInterval, delayTimeout) {
                    var interval = setInterval(function() {
                        if (_$(selector).value.length) {
                            clearInterval(interval);
                            trigger();
                        }
                    }, delayInterval);
                    setTimeout(function() {
                        clearInterval(interval);
                    }, delayTimeout);
                },
            };
            return function(selector) {
                return new bm(selector);
            };
        });

        function live(selector, event, callback, context) {
            // helper for enabling IE 8 event bindings
            function addEvent(el, type, handler) {
                if (el.attachEvent) el.attachEvent("on" + type, handler);
                else el.addEventListener(type, handler);
            }
            // matches polyfill
            this &&
                this.Element &&
                (function(ElementPrototype) {
                    ElementPrototype.matches =
                        ElementPrototype.matches ||
                        ElementPrototype.matchesSelector ||
                        ElementPrototype.webkitMatchesSelector ||
                        ElementPrototype.msMatchesSelector ||
                        function(selector) {
                            var node = this,
                                nodes = (node.parentNode || node.document).querySelectorAll(selector),
                                i = -1;
                            while (nodes[++i] && nodes[i] != node);
                            return !!nodes[i];
                        };
                })(Element.prototype);
            // live binding helper using matchesSelector
            function live(selector, event, callback, context) {
                addEvent(context || document, event, function(e) {
                    var found,
                        el = e.target || e.srcElement;
                    while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
                    if (found) callback.call(el, e);
                });
            }
            live(selector, event, callback, context);
        }




        var helper = _$();

        function init() {

            _$("body").addClass(variation_name);


            const items = ['How We Rank', "FAQ's"];

            const listHTML = `
              ${items.map(item => `<li><a href="#content-section"> ${item}</a></li>`).join('')}
            `;

            // Target the first <li> inside the navigation
            const firstNavItem = document.querySelector('.oxy-site-navigation.header-nav ul li:first-child');

            helper.waitForElement('.oxy-site-navigation.header-nav ul li:first-child', function () {
                if (firstNavItem) {
                    const tempContainer = document.createElement('ul');
                    tempContainer.innerHTML = listHTML;
    
                    // Insert each <li> before the first <li>
                    Array.from(tempContainer.children).forEach(li => {
                        firstNavItem.parentNode.insertBefore(li, firstNavItem);
                    });
                }
            }, 50, 15000)
           


            const newListItem = document.createElement('li');
            newListItem.classList.add('custom-nav-item_cre_get_quote');

           
            const link = document.createElement('a');
            link.textContent = 'Get Quote';
            link.href = '#_dynamic_list-27-63';

            
            newListItem.appendChild(link);

            
            helper.waitForElement('.oxy-site-navigation.header-nav ul li:last-child', function () {
                const lastNavItem = document.querySelector('.oxy-site-navigation.header-nav ul li:last-child');
                if (lastNavItem && lastNavItem.parentNode) {
                    lastNavItem.parentNode.insertBefore(newListItem, lastNavItem.nextSibling);
                }
            }, 50, 15000)
            

            
            const secondListItem = newListItem.cloneNode(true);

            // Insert after .oxy-header-left a

            helper.waitForElement('.oxy-header-left a', function () {
                const headerLeftLink = document.querySelector('.oxy-header-left a');
                if (headerLeftLink && headerLeftLink.parentNode) {
                    headerLeftLink.parentNode.insertBefore(secondListItem, headerLeftLink.nextSibling);
                }
            }, 50, 15000)
          




        }

        /* Init variation */
        helper.waitForElement('body', init, 25, 25000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();