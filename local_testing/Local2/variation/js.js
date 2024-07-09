(function () {
  try {
	/* main variables */
	var debug = 1;
	var variation_name = "cre-t-50";

	/* helper library */
	var _$;
	!(function (factory) {
	  _$ = factory();
	})(function () {
	  var bm = function (s) {
		if (typeof s === "string") {
		  this.value = Array.prototype.slice.call(document.querySelectorAll(s));
		}
		if (typeof s === "object") {
		  this.value = [s];
		}
	  };
	  bm.prototype = {
		eq: function (n) {
		  this.value = [this.value[n]];
		  return this;
		},
		each: function (fn) {
		  [].forEach.call(this.value, fn);
		  return this;
		},
		log: function () {
		  var items =[];
		  for (let index = 0; index < arguments.length; index++) {
			items.push(arguments[index]);
		  }
		  console && console.log(variation_name, items);
		},
		addClass: function (v) {
		  var a = v.split(" ");
		  return this.each(function (i) {
			for (var x = 0; x < a.length; x++) {
			  if (i.classList) {
				i.classList.add(a[x]);
			  } else {
				i.className += " " + a[x];
			  }
			}
		  });
		},
		waitForElement: function (
		  selector,
		  trigger,
		  delayInterval,
		  delayTimeout
		) {
		  var interval = setInterval(function () {
			if (_$(selector).value.length) {
			  clearInterval(interval);
			  trigger();
			}
		  }, delayInterval);
		  setTimeout(function () {
			clearInterval(interval);
		  }, delayTimeout);
		},
	  };
	  return function (selector) {
		return new bm(selector);
	  };
	});


	 function live(selector, event, callback, context) {
		/****Helper Functions****/
		// helper for enabling IE 8 event bindings
		function addEvent(el, type, handler) {
		  if (el.attachEvent) el.attachEvent("on" + type, handler);
		  else el.addEventListener(type, handler);
		}
		// matches polyfill
		this.Element &&
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

	var helper = _$();

	function scrollToRenewalOffersT50Close() {
		//j$(".renewalOffersSection").click();
		j$('html,body').animate(
			{
				scrollTop: j$(".renewalOffersSection").offset().top - 10
			}, 'slow'
		);
	}



	function eventHandler(){
     live('#viewRenewalOffrBtnId1CreT50 , .cre-t-MAG28-RenewalBTNCreT50 ', 'click',function(){
		if(!document.querySelector('#renewalOffersSection').classList.contains('rotateAngle')){
			document.querySelector('#viewRenewalOffrBtnId1').click();
		}
		else {
			scrollToRenewalOffersT50Close();
		}
	 })

	 
	}
	
	function clickOnButton(){
		var subInterval = setInterval(function(){
			if(document.querySelector('#renewalOffersSection')){
				if(!document.querySelector('#renewalOffersSection').classList.contains('rotateAngle')){
					document.querySelector('#renewalOffersSection').click();
				}
				else {
					clearInterval(subInterval);
				}
			}
		},200);

		setTimeout(function(){
			clearInterval(subInterval);
		},30000);
	}

	var renewalButton = `
	<button class="small-12 large-12 columns button headerbutton" id="viewRenewalOffrBtnId1CreT50"  style="margin-right: 1rem;" type="button">View
                                                    Renewal Offers
                                                </button>
	`

	var renewalButtonTwo = `<div class="cre-t-MAG28-RenewalBTNCreT50 accordion-item columns large-10 small-11" style="background: #c39d79; background: #c39d79">
			<p class="mobileCenter" style="font-weight: 600; text-align: left; margin-bottom: 10px; margin-top: 10px; padding: 9px 0; color: white; border: 0px solid !important;text-transform: initial;">View renewal offers</p>
		  </div>`

	function init() {
		if(!document.querySelector('.cre-t-50')){
			_$('body').addClass(variation_name)


			helper.waitForElement('#viewRenewalOffrBtnId1',function(){
			  document.querySelector('#viewRenewalOffrBtnId1').insertAdjacentHTML('afterend',renewalButton);
			},50,15000);
	  
			helper.waitForElement('.cre-t-MAG28-RenewalBTN',function(){
			  document.querySelector('.cre-t-MAG28-RenewalBTN').insertAdjacentHTML('afterend',renewalButtonTwo);
			},50,15000);
	  
	  
			if(!window.cre_t_50){
			  clickOnButton();
			  eventHandler();
			  window.cre_t_50 = true;
			}
		}
	

	}

	

	helper.waitForElement("#renewalOffersSection", init, 50, 15000);
  } catch (e) {
	if (debug) console.log(e, "error in Test" + variation_name);
  }
})();