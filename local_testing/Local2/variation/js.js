if ((window.location.href.includes("https://www.gendergp.com/") && window.location.pathname == "/")) {
(function() {
try {
/* main variables */
var debug = 1;
var variation_name = "cre-24new";
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
/****Helper Functions****/
// helper for enabling IE 8 event bindings
function addEvent(el, type, handler) {
if (el.attachEvent) el.attachEvent("on" + type, handler);
else el.addEventListener(type, handler);
}
// matches polyfill
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
function heroSection() {
var dropdownIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
<path opacity="0.8" d="M1 1L6 6L11 1" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
</svg>
`;
var listItemIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
<path d="M0 10.5C0 6.94531 1.875 3.66406 5 1.86719C8.08594 0.0703125 11.875 0.0703125 15 1.86719C18.0859 3.66406 20 6.94531 20 10.5C20 14.0938 18.0859 17.375 15 19.1719C11.875 20.9688 8.08594 20.9688 5 19.1719C1.875 17.375 0 14.0938 0 10.5ZM9.375 5.5H8.125V15.5H9.375L14.375 10.5L9.375 5.5Z" fill="#FF6726" />
</svg>
`;
var quoteIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 25 21" fill="none">
<path d="M11.5498 3.0293C10.4176 3.67969 9.50228 4.24577 8.80371 4.72754C8.10514 5.18522 7.39453 5.79948 6.67188 6.57031C5.9974 7.29297 5.47949 8.05176 5.11816 8.84668C4.75684 9.6416 4.50391 10.6654 4.35938 11.918H6.09375C7.58724 11.918 8.75553 12.2913 9.59863 13.0381C10.4658 13.7607 10.8994 14.8327 10.8994 16.2539C10.8994 17.2656 10.514 18.2171 9.74316 19.1084C8.99642 19.9756 7.96061 20.4092 6.63574 20.4092C4.56413 20.4092 3.08268 19.7347 2.19141 18.3857C1.30013 17.0127 0.854492 15.2181 0.854492 13.002C0.854492 11.4362 1.19173 10.015 1.86621 8.73828C2.54069 7.4375 3.3597 6.28125 4.32324 5.26953C5.31087 4.23372 6.35872 3.35449 7.4668 2.63184C8.57487 1.90918 9.50228 1.31901 10.249 0.861328L11.5498 3.0293ZM24.9189 3.0293C23.7868 3.67969 22.8714 4.24577 22.1729 4.72754C21.4743 5.18522 20.7637 5.79948 20.041 6.57031C19.3424 7.31706 18.8125 8.08789 18.4512 8.88281C18.1139 9.65365 17.873 10.6654 17.7285 11.918H19.4629C20.9564 11.918 22.1247 12.2913 22.9678 13.0381C23.835 13.7607 24.2686 14.8327 24.2686 16.2539C24.2686 17.2656 23.8831 18.2171 23.1123 19.1084C22.3656 19.9756 21.3298 20.4092 20.0049 20.4092C17.9333 20.4092 16.4518 19.7347 15.5605 18.3857C14.6693 17.0127 14.2236 15.2181 14.2236 13.002C14.2236 11.4362 14.5609 10.015 15.2354 8.73828C15.9098 7.4375 16.7288 6.28125 17.6924 5.26953C18.68 4.23372 19.7279 3.35449 20.8359 2.63184C21.944 1.90918 22.8714 1.31901 23.6182 0.861328L24.9189 3.0293Z" fill="#FF6726" />
</svg>
`;
var heroSectionHtml = `
<div class="cre-24new-hero-container">
<div class="cre-24new-hero-wrapper">
<div class="cre-24new-hero-left">
<div class="cre-24new-hero-left-content1">
<div class="cre-24new-hero-header">Skip the NHS's <span class="cre-24new-underline">5-10 year</span> <br />wait times. Get gender-<br />affirming medications <br />in just a few weeks.</div>
</div>
<div class="cre-24new-hero-left-content2">
<div class="cre-24new-hero-list">
<div class="cre-24new-hero-item cre-24new-hero-item1">
<div class="cre-24new-hero-item-icon">${listItemIcon}</div>
<div class="cre-24new-hero-item-text"><strong>We help organise private prescriptions for medical transitions so that you can quickly and easily access the care you need,</strong> with compassionate guidance every step of the way.</div>
</div>
<div class="cre-24new-hero-item cre-24new-hero-item2">
<div class="cre-24new-hero-item-icon">${listItemIcon}</div>
<div class="cre-24new-hero-item-text"><strong>Join thousands of transgender and non-binary people we’ve helped transition</strong> and support their health and wellbeing. You are not alone!</div>
</div>
</div>
</div>
<div class="cre-24new-hero-left-content3">
<div class="cre-24new-dropdown-container">
<div class="cre-24new-dropdown-wrapper">
<div class="cre-24new-content1">
<div class="cre-24new-header">Tell us what journey you’re on:</div>
</div>
<div class="cre-24new-content2">
<div class="cre-24new-dropdown">
<div class="cre-24new-dropdown-input">
<div class="cre-24new-dropdown-input-text">Please select</div>
<div class="cre-24new-dropdown-input-icon">${dropdownIcon}</div>
</div>
<div class="cre-24new-dropdown-option">
<div class="cre-24new-dropdown-option-wrapper">
<div class="cre-24new-option cre-24new-option1">Masculinisation</div>
<div class="cre-24new-option cre-24new-option2">Feminisation</div>
<div class="cre-24new-option cre-24new-option3">Non binary</div>
<div class="cre-24new-option cre-24new-option4">Pause puberty</div>
</div>
</div>
</div>
<div class="cre-24new-cta">
<a class="cre-24new-cta-link" href="https://www.gendergp.com/accessing-gender-affirming-care/"> Help me transition </a>
</div>
<div class="cre-24new-cta-footer">Or, see how our service works</div>
</div>
</div>
</div>
</div>
</div>
<div class="cre-24new-hero-right">
<div class="cre-24new-hero-right-content1">
<div class="cre-24new-hero-quote">
<div class="cre-24new-hero-quote-icon">${quoteIcon}</div>
<div class="cre-24new-hero-quote-text">Without GenderGP, I would have had to wait 5-7 years for HRT through the NHS. I would be dead if it were not for GGP. Now I’m 11 months on HRT, my life has done a 180°</div>
</div>
<img class="cre-24new-hero-image1" src="https://cdn-3.convertexperiments.com/uf/10007679/10007617/genderGP24Image7.png" alt="quote card" />
</div>
<div class="cre-24new-hero-right-content2">
<div class="cre-24new-hero-right-img1">
<img class="cre-24new-hero-image2" src="https://cdn-3.convertexperiments.com/uf/10007679/10007617/genderGP24Image1.png" alt="Gender diversity illustration" />
</div>
<div class="cre-24new-hero-right-img2">
<img class="cre-24new-hero-image3" src="https://cdn-3.convertexperiments.com/uf/10007679/10007617/genderGP24Image3.png" alt="person sitting with a laptop" />
<img class="cre-24new-hero-image4" src="https://cdn-3.convertexperiments.com/uf/10007679/10007617/genderGP24Image6.png" alt="person1" />
<img class="cre-24new-hero-image5" src="https://cdn-3.convertexperiments.com/uf/10007679/10007617/genderGP24Image5.png" alt="person2" />
</div>
<div class="cre-24new-hero-right-img3">
<img class="cre-24new-hero-image6" src="https://cdn-3.convertexperiments.com/uf/10007679/10007617/genderGP24Image10_674720e14da6d.png" alt="Another gender diversity illustration" />
</div>
</div>
</div>
</div>
</div>
`;
var howItWorksSectionHtml = `
<div class="cre-24new-cards-container">
<div class="cre-24new-cards-wrapper">
<div class="cre-24new-cards-header">How it works</div>
<div class="cre-24new-cards-main">
<div class="cre-24new-card cre-24new-card1">
<div class="cre-24new-card-number">1</div>
<div class="cre-24new-card-header">Join & Set Your Personal Goals</div>
<div class="cre-24new-card-info">Create your account, complete the online assessment and get started.</div>
</div>
<div class="cre-24new-card cre-24new-card2">
<div class="cre-24new-card-number">2</div>
<div class="cre-24new-card-header">Get A Unique Treatment Recommendation</div>
<div class="cre-24new-card-info">We bring a decade of data together and harness your personal goals to craft a unique Treatment Recommendation that will support your care in every setting.</div>
</div>
<div class="cre-24new-card cre-24new-card3">
<div class="cre-24new-card-number">3</div>
<div class="cre-24new-card-header">Referrals for Prescriptions & Other Services</div>
<div class="cre-24new-card-info">With your Treatment Recommendation by your side, get referred to independent doctors and practitioners who can consult and prescribe.</div>
</div>
<div class="cre-24new-card cre-24new-card4">
<div class="cre-24new-card-number">4</div>
<div class="cre-24new-card-header">Join & Set Your Personal Goals</div>
<div class="cre-24new-card-info">Create your account, complete the online assessment and get started.</div>
</div>
</div>
</div>
</div>
`;
var containerForGradient = ` <div class="cre-24new-container">${heroSectionHtml} ${howItWorksSectionHtml}</div> `;
function creScroll(bmContentId, bmValue) {
var bmContent = document.querySelector(bmContentId);
if (bmContent) {
var scrollTop = bmContent.getBoundingClientRect().top + window.pageYOffset - bmValue;
window.scrollTo({
top: scrollTop,
behavior: "smooth",
});
}
}
function dropdownSection() {
// Elements
var dropdownParent = document.querySelector(".cre-24new-dropdown");
var dropdownInput = document.querySelector(".cre-24new-dropdown-input");
var dropdownText = document.querySelector(".cre-24new-dropdown-input-text");
var dropdownOptions = document.querySelector(".cre-24new-dropdown-option");
var ctaButton = document.querySelector(".cre-24new-cta");
// Show/Hide Dropdown Options using add/remove based on conditions
live(".cre-24new-dropdown-input", "click", function() {
if (dropdownParent) {
if (dropdownParent.classList.contains("cre-24new-show")) {
dropdownParent.classList.remove("cre-24new-show"); // Remove class if already shown
} else {
dropdownParent.classList.add("cre-24new-show"); // Add class if not shown
}
}
});
// Select an option from the dropdown
var options = document.querySelectorAll(".cre-24new-dropdown-option-wrapper .cre-24new-option");
options.forEach(function(option) {
option.addEventListener("click", function() {
var selectedOption = this.textContent;
dropdownText.textContent = selectedOption;
dropdownText.classList.add("cre-24new-selected"); // Add class to show selected text
if (dropdownParent.classList.contains("cre-24new-show")) {
dropdownParent.classList.remove("cre-24new-show"); // Remove class if already shown
}
// Enable the CTA button
ctaButton.classList.add("cre-24new-active");
});
});
// Close dropdown if clicked outside using add/remove
document.addEventListener("click", function(event) {
if (!event.target.closest(".cre-24new-dropdown")) {
if (dropdownParent.classList.contains("cre-24new-show")) {
dropdownParent.classList.remove("cre-24new-show");
}
}
});
live(".cre-24new-cta-footer", "click", function() {
creScroll(".cre-24new-cards-container", 50);
});
}
var elementButton = document.querySelector(".page-content > .elementor  > section.elementor-element  +.elementor-element  +.elementor-element");
if (!document.querySelector(".cre-24new-container")) {
elementButton.insertAdjacentHTML("afterend", containerForGradient);
}
dropdownSection();
}
function weChangeSection() {
function getVideoTitle(slide) {
var title = slide.querySelector(".elementor-widget-text-editor .elementor-widget-container p:first-child strong");
if (title) {
return title.textContent;
}
title = slide.querySelector(".elementor-widget-text-editor .elementor-widget-container p:first-child b");
if (title) {
return title.textContent;
}
return "";
}
function getVideoDescription(slide) {
var description = slide.querySelector(".elementor-widget-text-editor .elementor-widget-container p:nth-child(2)");
if (description) {
return description.textContent;
}
return "";
}
function getInterviewInfo(slide) {
var seeInterview = slide.querySelector(".elementor-widget-text-editor .elementor-widget-container p:last-child a");
if (seeInterview) {
var text = seeInterview.textContent;
var link = seeInterview.href;
return {
link,
text
};
}
return {
link: "",
text: ""
};
}
function injectSwiper(callback) {
// Inject Swiper CSS
const swiperCssLink = document.createElement("link");
swiperCssLink.rel = "stylesheet";
swiperCssLink.href = "https://unpkg.com/swiper/swiper-bundle.min.css";
document.head.appendChild(swiperCssLink);
// Inject Swiper JS
const swiperJsScript = document.createElement("script");
swiperJsScript.src = "https://unpkg.com/swiper/swiper-bundle.min.js";
// Add an event listener for when the script has loaded
swiperJsScript.onload = function() {
if (typeof callback === "function") {
callback();
}
};
document.body.appendChild(swiperJsScript);
}
function initSwiper() {
if (typeof Swiper !== "undefined") {
new Swiper(`.cre-24new-videos-swiper-container .swiper`, {
slidesPerView: 1,
// centeredSlides: true,
roundLengths: true,
slideToClickedSlide: true,
spaceBetween: 20,
scrollbar: {
el: ".cre-24new-swiper_scrollbar",
draggable: true,
},
navigation: {
nextEl: `.cre-24new-swiper_button_next`,
prevEl: `.cre-24new-swiper_button_prev`,
},
breakpoints: {
540: {
slidesPerView: 2,
},
// when window width is >= 1440px
1440: {
slidesPerView: 2.2,
},
},
});
}
}
function renderHtml() {
var slides = createSlides();
var html = `
<div class="cre-24new-videosAndWhy-container">
<div class="cre-24new-videos-container">
<div class="cre-24new-videos-wrapper">
<div class="cre-24new-videos-main">
<h2 class="cre-24new-videos-title">We change lives. Here's the proof.</h2>
<div class="cre-24new-videos-swiper-container">
<div class="cre-24new-videos-swiper swiper">
<div class="swiper-wrapper">
${slides}
</div>
<div class="cre-24new-swiper_nav_container">
<div class="cre-24new-swiper_button_prev">
${arrow}<span>PREV</span>
</div>
<div class="cre-24new-swiper_button_next">
<span>NEXT</span>${arrow}
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
`;
helper.waitForElement(
".cre-24new-container",
function() {
var hero = document.querySelector(".cre-24new-container");
hero.insertAdjacentHTML("afterend", html);
},
15,
15000
);
live(".cre-24new_trigger_video_text_modal", "click", function(event) {});
}
var playIcon = `
<div class="cre-24new-video-play-icon">
<svg class="cre-24new-video-play-inner" width="25" height="29" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.0898 14.2139L0.0897923 28.2139V0.213867L24.0898 14.2139Z" fill="white"/>
</svg>
<svg class="cre-24new-video-play-outer" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76" fill="none">
<circle cx="37.7566" cy="37.7561" r="37.7566" fill="white" fill-opacity="0.23"/>
</svg>
</div>
`;
var quoteIcon = `
<svg class="cre-24new-video-quote-sign" width="34" height="27"
viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
d="M15.3105 3.41797C13.7806 4.29688 12.5436 5.06185 11.5996 5.71289C10.6556 6.33138 9.69531 7.16146 8.71875 8.20312C7.80729 9.17969 7.10742 10.2051 6.61914 11.2793C6.13086 12.3535 5.78906 13.737 5.59375 15.4297H7.9375C9.95573 15.4297 11.5345 15.9342 12.6738 16.9434C13.8457 17.9199 14.4316 19.3685 14.4316 21.2891C14.4316 22.6562 13.9108 23.9421 12.8691 25.1465C11.86 26.3184 10.4603 26.9043 8.66992 26.9043C5.87044 26.9043 3.86849 25.9928 2.66406 24.1699C1.45964 22.3145 0.857422 19.8893 0.857422 16.8945C0.857422 14.7786 1.31315 12.8581 2.22461 11.1328C3.13607 9.375 4.24284 7.8125 5.54492 6.44531C6.87956 5.04557 8.29557 3.85742 9.79297 2.88086C11.2904 1.9043 12.5436 1.10677 13.5527 0.488281L15.3105 3.41797ZM33.377 3.41797C31.847 4.29688 30.61 5.06185 29.666 5.71289C28.722 6.33138 27.7617 7.16146 26.7852 8.20312C25.8411 9.21224 25.125 10.2539 24.6367 11.3281C24.181 12.3698 23.8555 13.737 23.6602 15.4297H26.0039C28.0221 15.4297 29.6009 15.9342 30.7402 16.9434C31.9121 17.9199 32.498 19.3685 32.498 21.2891C32.498 22.6562 31.9772 23.9421 30.9355 25.1465C29.9264 26.3184 28.5267 26.9043 26.7363 26.9043C23.9368 26.9043 21.9349 25.9928 20.7305 24.1699C19.526 22.3145 18.9238 19.8893 18.9238 16.8945C18.9238 14.7786 19.3796 12.8581 20.291 11.1328C21.2025 9.375 22.3092 7.8125 23.6113 6.44531C24.946 5.04557 26.362 3.85742 27.8594 2.88086C29.3568 1.9043 30.61 1.10677 31.6191 0.488281L33.377 3.41797Z"
fill="#FF6726" />
</svg>
`;
var arrow = `
<svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.515628 6.73437L6.70313 0.546874L7.17578 0.0742175L8.16407 1.0625L7.64844 1.53515L2.66407 6.5625L21.3125 6.5625L22 6.5625L22 7.9375L21.3125 7.9375L2.66407 7.9375L7.64844 12.9219L8.16406 13.4375L7.17578 14.3828L6.70313 13.9102L0.515628 7.72265L2.77567e-06 7.25L0.515628 6.73437Z" fill="black"/>
</svg>
`;
function createSlidesString({
videoSrc,
title,
description,
interview,
poster
}) {
return `
<div class="swiper-slide">
<div class="cre-24new-video-card">
<div class="cre-24new-video-left">
<div class="cre-24new-video-thumbnail">
<img src="${poster}">
${playIcon}
</div>
<video class="cre-24new-video-element"
src="${videoSrc}"
poster="${poster}"
controls="" preload="auto" controlslist="nodownload"></video>
</div>
<div class="cre-24new-video-right">
<h3 class="cre-24new-video-title">${title}</h3>
${quoteIcon}
<p class="cre-24new-video-description">${description}</p>
<a href="${interview.link}" class="cre-24new-video-full-link">${interview.text}</a>
</div>
</div>
</div>`;
}
function createSlides() {
var newSlidesHtml = "";
document.querySelectorAll(".elementor-widget-container .swiper .swiper-slide > .elementor-element").forEach(function(slide) {
var videoSrc = slide.querySelector(".elementor-video").getAttribute("src");
var data_settings = slide.querySelector(".e-con-inner [data-settings]").getAttribute("data-settings");
var data = JSON.parse(data_settings);
var poster = data.image_overlay.url;
var title = getVideoTitle(slide);
var description = getVideoDescription(slide).replaceAll("“", "").replaceAll("”", "");
var previewText = `<span class="cre-24new_preview">${description.slice(0, 127)}</span> <span class="cre-24new_hidden_text">${description.slice(
128,
description.length
)}</span> <a class="cre-24new_trigger_video_text_modal">Read more...</a>`;
var interview = getInterviewInfo(slide);
newSlidesHtml += createSlidesString({
videoSrc,
title,
description: previewText,
interview,
poster
});
});
return newSlidesHtml;
}
live(".cre-24new-video-thumbnail", "click", function(event) {
var container = event.target.closest(".cre-24new-video-card");
document.querySelectorAll(".cre-24new-video-card").forEach(function(videoContainer) {
if (container === videoContainer) {
videoContainer.classList.add("cre-24new-video-playing");
videoContainer.querySelector("video").play();
} else {
videoContainer.classList.remove("cre-24new-video-playing");
videoContainer.querySelector("video").pause();
}
});
});
live(".cre-24new-video-card video", "pause", function(event) {
var container = event.target.closest(".cre-24new-video-card");
container.classList.remove("cre-24new-video-playing");
});
helper.waitForElement(
".elementor-widget-container .elementor-widget-video",
function() {
renderHtml();
},
15,
15000
);
helper.waitForElement(
".cre-24new-videos-swiper.swiper",
function() {
if (typeof Swiper !== "undefined") {
initSwiper();
} else {
injectSwiper(initSwiper);
}
},
15,
15000
);
}
function whyJoinSection() {
var whyJoinHtml = `<div class="cre-24new-upper-wrapper">
<div class="cre-24new-whyJoin-wrapper">
<div class="cre-24new-whyJoin-container">
<div class="cre-24new-whyJoin-text-container">
<div class="cre-24new-whyJoin-title">Why Join GenderGP</div>
<div class="cre-24new-whyJoin-paragraph">Join now and like thousands of our members you can use our
unique
treatment recommendations to unlock the
gender-affirming care you need.</div>
<div class="cre-24new-whyJoin-button-wrapper">
<a href="https://www.gendergp.com/accessing-gender-affirming-care/" class="cre-24new-whyJoin-button">
<span>Help me transition</span>
<img src="https://res.cloudinary.com/dug7oeat2/image/upload/v1731656150/GenderGp/dx3yrdptdkamuwvaxxcj.svg"
alt="left-arrow">
</a>
</div>
</div>
<div class="cre-24new-whyJoin-left-image-container">
<img class="cre-24new-whyJoin-left-image" src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GenderGP/Test24/whatmake.svg" alt="transition guys">
</div>
</div>
</div>
</div>`;
helper.waitForElement(
`.cre-24new-videosAndWhy-container`,
function() {
if (!document.querySelector(".cre-t-55-difference-container")) {
document.querySelector(`.cre-24new-videosAndWhy-container`).insertAdjacentHTML("beforeend", whyJoinHtml);
}
},
15,
15000
);
}
function faqSection() {
var expertsContent = `<div class="cre-24new-expert-container">
<div class="cre-24new-expert-wrapper">
<div class="cre-24new-expert-main">
<div class="cre-24new-expert-left-container">
<div class="cre-24new-expert-header">Experts in trans healthcare</div>
<div class="cre-24new-expertSub-content cre-24new-expertSub-content-1">
GenderGP’s worldwide <a class="cre-24new-expertLinks" href="https://gendergp.com/services/">transgender services</a> provide advocacy, support, advice and access to a range of complementary services. We enable trans people to live their lives more easily with
gender-affirming care and support.
</div>
<div class="cre-24new-expertSub-content cre-24new-expertSub-content-2">
We make <a class="cre-24new-expertLinks" href="https://gendergp.com/gender-affirming-care/">gender-affirming care</a>, advice, and education available to gender-diverse people and those who support them. Our long-term goal is to alleviate the suffering associated with
discrimination and prejudice too often faced by the transgender community.
</div>
<div class="cre-24new-expert-cta">
<div class="cre-24new-expert-cta-button-1">
<a href="https://www.gendergp.com/accessing-gender-affirming-care/">Start Your Journey</a>
<img src="https://res.cloudinary.com/dug7oeat2/image/upload/v1731656150/GenderGp/dx3yrdptdkamuwvaxxcj.svg" alt="" />
</div>
<div class="cre-24new-expert-cta-button-2">
<a href="https://www.gendergp.com/about/">Learn more about us</a>
</div>
</div>
</div>
<div class="cre-24new-expert-right-container">
<div class="cre-24new-expertImg">
<img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GenderGP/Test24/helen.svg" alt="GenderGP" />
</div>
</div>
</div>
</div>
</div>`;
var faqSection = `
${expertsContent}
<div class="cre-24new-here-to-help-container">
<div class="cre-24new-here-to-help-wrapper">
<div class="cre-24new-here-to-help-main">
<div class="cre-24new-here-to-help-top">
<div class="cre-24new-here-to-help-header">
We are here to help
</div>
<div class="cre-24new-here-to-help-sub-header">
Start or continue your transition by signing
up with GenderGP. Use our digital platform to get
the guidance you need to be the real you.
</div>
</div>
<div class="cre-24new-here-to-help-bottom">
<div class="cre-24new-here-to-help-bottom-cards">
<div class="cre-24new-here-to-help-bottom-card help-one">
<div class="cre-24new-here-to-help-image-section">
<img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GenderGP/Test24/member.svg" alt="member">
</div>
<div class="cre-24new-here-to-content-section">
<div class="cre-24new-here-to-content-section-header">Become a Member</div>
<div class="cre-24new-here-to-content-section-sub-header">This is the first step in your Gender Journey. Click here to begin your journey with GenderGP!</div>
<div class="cre-24new-here-to-content-section-link"><a href="https://www.gendergp.com/become-a-member/">Join now</a></div>
</div>
</div>
<div class="cre-24new-here-to-help-bottom-card help-two">
<div class="cre-24new-here-to-help-image-section">
<img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GenderGP/Test24/pack.svg" alt="pack">
</div>
<div class="cre-24new-here-to-content-section">
<div class="cre-24new-here-to-content-section-header">Transition Pack</div>
<div class="cre-24new-here-to-content-section-sub-header">For treatment recommendations for your doctor or for prescriptions for your gender-affirming medication</div>
<div class="cre-24new-here-to-content-section-link"><a href="https://www.gendergp.com/treatment-review/">Request Transition Pack</a></div>
</div>
</div>
<div class="cre-24new-here-to-help-bottom-card help-three">
<div class="cre-24new-here-to-help-image-section">
<img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GenderGP/Test24/talk.svg" alt="talk">
</div>
<div class="cre-24new-here-to-content-section">
<div class="cre-24new-here-to-content-section-header">Talk to an expert</div>
<div class="cre-24new-here-to-content-section-sub-header">Our trusted partners offer a way for you to deeply connect and talk to a specialist gender expert about your journey.</div>
<div class="cre-24new-here-to-content-section-link"><a href="https://www.gendergp.com/talk-2-someone/">Book now</a></div>
</div>
</div>
<div class="cre-24new-here-to-help-bottom-card help-four">
<div class="cre-24new-here-here-to-help-image-section">
<img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GenderGP/Test24/letters.svg" alt="letters">
</div>
<div class="cre-24new-here-to-content-section">
<div class="cre-24new-here-to-content-section-header">Letters</div>
<div class="cre-24new-here-to-content-section-sub-header">Letters, documents, certificates to support your transition</div>
<div class="cre-24new-here-to-content-section-link"><a href="https://www.gendergp.com/letters/">Buy now</a></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="cre-24new-our-value-card-container">
<div class="cre-24new-our-value-card-wrapper">
<div class="cre-24new-our-value-card-main">
<div class="cre-24new-our-value-card-top">
<div class="cre-24new-our-value-card-header">Our Values</div>
<div class="cre-24new-our-value-card-sub-header">
Start or continue your transition by signing up with GenderGP. Use our digital platform to get the guidance you need to be the real you.
</div>
</div>
<div class="cre-24new-our-value-card-bottom">
<div class="cre-24new-our-value-card-bottom-card one">
<div class="cre-24new-our-value-card-bottom-card-icon">
<div class="cre-24new-our-value-card-bottom-card-icon-round-box">
<img
src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GenderGP/Test24/tick.svg"
alt="tick"
/>
</div>
</div>
<div class="cre-24new-our-value-card-bottom-card-header">
We are committed
</div>
<div class="cre-24new-our-value-card-bottom-card-header-content">
We never give up. Our team fights tirelessly with passion and
determination to improve healthcare options for trans people and
support others to do the same.
</div>
</div>
<div class="cre-24new-our-value-card-bottom-card two">
<div class="cre-24new-our-value-card-bottom-card-icon">
<div class="cre-24new-our-value-card-bottom-card-icon-round-box">
<img
src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GenderGP/Test24/inspire.svg"
alt="inspire"
/>
</div>
</div>
<div class="cre-24new-our-value-card-bottom-card-header">
We inspire
</div>
<div class="cre-24new-our-value-card-bottom-card-header-content">
We offer life-changing support and advocacy. Our team speaks up and
takes action when others won’t. We make brave decisions geared
towards helping trans people live their lives more easily.
</div>
</div>
<div class="cre-24new-our-value-card-bottom-card three">
<div class="cre-24new-our-value-card-bottom-card-icon">
<div class="cre-24new-our-value-card-bottom-card-icon-round-box">
<img
src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GenderGP/Test24/experts.svg"
alt="experts"
/>
</div>
</div>
<div class="cre-24new-our-value-card-bottom-card-header">
We are experts
</div>
<div class="cre-24new-our-value-card-bottom-card-header-content">
We draw on our expertise and knowledge of science, data, and
research to provide the most up-to-date, evidence-based advice,
care, and support.
</div>
</div>
<div class="cre-24new-our-value-card-bottom-card four">
<div class="cre-24new-our-value-card-bottom-card-icon">
<div class="cre-24new-our-value-card-bottom-card-icon-round-box">
<img
src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GenderGP/Test24/integrity.svg"
alt="integrity"
/>
</div>
</div>
<div class="cre-24new-our-value-card-bottom-card-header">
We act with integrity
</div>
<div class="cre-24new-our-value-card-bottom-card-header-content">
Our team acts with integrity, in the best interests of the trans
community. We fight for their rights and provide the highest
standards of care in the most timely and affordable way possible.
</div>
</div>
</div>
</div>
</div>
</div>
<div class="cre-24new-upper-wrapper" id="cre-24new-whatMake">
<div class="cre-24new-whyJoin-wrapper">
<div class="cre-24new-whyJoin-container">
<div class="cre-24new-whyJoin-text-container">
<div class="cre-24new-whyJoin-title">What makes us special?</div>
<div class="cre-24new-whyJoin-paragraph">Start your journey today. Join thousands using our personalised recommendations to access the gender-affirming care you deserve.</div>
<div class="cre-24new-whyJoin-button-wrapper">
<a href="https://www.gendergp.com/accessing-gender-affirming-care/" class="cre-24new-whyJoin-button">
<span>Join us</span>
<img src="https://res.cloudinary.com/dug7oeat2/image/upload/v1731656150/GenderGp/dx3yrdptdkamuwvaxxcj.svg"
alt="left-arrow">
</a>
</div>
</div>
<div class="cre-24new-whyJoin-left-image-container">
<img class="cre-24new-whyJoin-left-image" src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/GenderGP/Test24/whyJoin.svg" alt="transition guys">
</div>
</div>
</div>
</div>
<div class="cre-24new-faq-container">
<div class="cre-24new-faq-wrapper">
<div class="cre-24new-faq-main">
<div class="cre-24new-faq-top">
<div class="cre-24new-faq-top-header">Frequently Asked Questions</div>
<div class="cre-24new-faq-top-sub-header">
Still have questions? <a href="https://support.gendergp.com/portal/en/home">Get Help Now</a>
</div>
</div>
<div class="cre-24new-faq-bottom">
<div class="cre-24new-faq-bottom-container">
<div class="cre-24new-faq-list cre-24-faq-active">
<div class="cre-24new-faq-list-header">
<div class="cre-24new-faq-list-header-content">
How can I get started with GenderGP's transgender healthcare
services?
</div>
<div class="cre-24new-faq-list-header-icon">-</div>
</div>
<div class="cre-24new-faq-list-main-content">
Getting started is easy! Simply click here and
<a
href="https://www.gendergp.com/accessing-gender-affirming-care/"
>create an account</a
>. You can then browse our services and choose the ones that are
best to support your journey. We also offer a
<a
href="https://book.gendergp.com/#/quick-chat"
target="_blank"
rel="noopener"
>quick consultation</a
>
to discuss your needs and answer any questions you may have.
</div>
</div>
<div class="cre-24new-faq-list">
<div class="cre-24new-faq-list-header">
<div class="cre-24new-faq-list-header-content">
How does GenderGP offer reliable and qualified transgender
healthcare?
</div>
<div class="cre-24new-faq-list-header-icon">+</div>
</div>
<div class="cre-24new-faq-list-main-content">
<span style="font-weight: 400"
>We can concierge your journey from Transition Pack to
independent referral to a curated network of practitioners
including</span
>
experienced and passionate doctors,
<a href="https://www.gendergp.com/support-services/"
>counsellors</a
>, and therapists who are dedicated to providing high-quality,
gender-affirming care.
</div>
</div>
<div class="cre-24new-faq-list">
<div class="cre-24new-faq-list-header">
<div class="cre-24new-faq-list-header-content">
Is GenderGP membership right for me?
</div>
<div class="cre-24new-faq-list-header-icon">+</div>
</div>
<div class="cre-24new-faq-list-main-content">
Join GenderGP and stay in control of your transition! As a member
you will access our 24/7 Intelligent Transition Pack. Making the
world’s best medical practice and international trans care
standards available and personalised for you. From prescription
referrals to doctors consultations your&nbsp; Transition Pack can
open up your options and help improve your journey.
</div>
</div>
<div class="cre-24new-faq-list">
<div class="cre-24new-faq-list-header">
<div class="cre-24new-faq-list-header-content">
How do I leave a review for GenderGP?
</div>
<div class="cre-24new-faq-list-header-icon">+</div>
</div>
<div class="cre-24new-faq-list-main-content">
We value your feedback! You can leave a review for GenderGP on
<a
href="https://www.trustpilot.com/review/gendergp.com"
target="_blank"
rel="noopener"
>Trustpilot,&nbsp;</a
>
<a
href="https://maps.app.goo.gl/bKAzn9ZVoffcCFtE9"
target="_blank"
rel="noopener"
>Google</a
>,
<a
href="https://www.facebook.com/gendergp/"
target="_blank"
rel="noopener"
>social media</a
>
pages, or trusted healthcare review platforms. Your feedback helps
us improve our services and ensures we're meeting the needs of our
community.
</div>
</div>
</div>
</div>
</div>
</div>
</div>
`;
var b = document.querySelector("main [data-id='c3ae123']");
if (b) {
b.insertAdjacentHTML("beforebegin", faqSection);
live(".cre-24new-faq-list-header", "click", function(e) {
var d = this;
var e = d.closest(".cre-24new-faq-list");
var g = d.querySelector(".cre-24new-faq-list-header-icon");
if (!e.classList.contains("cre-24-faq-active")) {
var f = document.querySelector(".cre-24-faq-active");
if (f) {
f.classList.remove("cre-24-faq-active");
var h = f.querySelector(".cre-24new-faq-list-header-icon");
h.textContent = "+";
}
e.classList.add("cre-24-faq-active");
g.textContent = "-";
} else {
e.classList.remove("cre-24-faq-active");
g.textContent = "+";
}
});
}
}
function reviewContent() {
var textContent = `<div class="cre-24new-review-content">
<div class="cre-24new-review-head">Hear from our community</div>
<div class="cre-24new-review-subhead">Explore real stories and genuine experiences shared by our members. Discover how GenderGP has supported their journeys.</div>
</div>`;
helper.waitForElement(
".es-background-container",
function() {
if (!document.querySelector(".cre-24new-review-content")) {
document.querySelector(".es-background-container").insertAdjacentHTML("afterbegin", textContent);
}
},
15,
15000
);
}
function footerElement() {
var footerContent = ` <div class="cre-24new-footer-container">
<div class="cre-24new-footer-wrapper">
<div class="cre-24new-footer-main">
<div class="cre-24new-footer-logo-container">
<div class="cre-24new-footerLogo">
<img src="https://www.gendergp.com/wp-content/uploads/GenderGP-Logo-White.webp" alt="GenderGP" />
</div>
<div class="cre-24new-footerLogo-content">
<div>The Online Transgender Community that helps you in your transition journey.</div>
</div>
<div class="cre-24new-footerLogo-icon">
<div class="elementor-social-icons-wrapper elementor-grid">
<span class="elementor-grid-item">
<a class="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-90e41c0"
href="https://www.instagram.com/gendergp/" target="_blank" rel="nofollow">
<span class="elementor-screen-only">Instagram</span>
<svg class="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
<path
d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
</path>
</svg> </a>
</span>
<span class="elementor-grid-item">
<a class="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-aac6000"
href="https://www.facebook.com/gendergp/" target="_blank" rel="nofollow">
<span class="elementor-screen-only">Facebook</span>
<svg class="e-font-icon-svg e-fab-facebook" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
<path
d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z">
</path>
</svg> </a>
</span>
<span class="elementor-grid-item">
<a class="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-repeater-item-ec66e24"
href="https://www.youtube.com/@gendergp2784" target="_blank" rel="nofollow">
<span class="elementor-screen-only">Youtube</span>
<svg class="e-font-icon-svg e-fab-youtube" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
<path
d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
</path>
</svg> </a>
</span>
<span class="elementor-grid-item">
<a class="elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-repeater-item-898562c"
href="https://www.linkedin.com/company/gendergp/" target="_blank">
<span class="elementor-screen-only">Linkedin</span>
<svg class="e-font-icon-svg e-fab-linkedin" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
<path
d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
</path>
</svg> </a>
</span>
</div>
</div>
</div>
<div class="footer">
<div class="footer-section open">
<div class="footer-header"><span class="cre-24new-footer-highlight">Services</span> <span
class="icon">-</span></div>
<div class="footer-content">
<ul>
<li><a href="https://www.gendergp.com/become-a-member/">Become a member</a></li>
<li><a href="https://www.gendergp.com/talk-2-someone/">Talk to someone</a></li>
<li><a href="https://www.gendergp.com/treatment-review/" class="highlight">Treatment review</a></li>
<li><a href="https://www.gendergp.com/letters/">Letters & Documentation</a></li>
<li><a href="https://www.gendergp.com/gender-affirming-care/">Gender Affirming Care</a></li>
<li><a href="https://www.gendergp.com/support-services/">Counselling & Support</a></li>
</ul>
</div>
</div>
<div class="footer-section">
<div class="footer-header"><span class="cre-24new-footer-highlight">About Us</span> <span
class="icon">+</span></div>
<div class="footer-content">
<ul>
<li><a href="https://www.gendergp.com/fees/">Pricing</a></li>
<li><a href="https://www.gendergp.com/gendergp-history/">Our History</a></li>
<li><a href="https://www.gendergp.com/therapy/">Our Experts</a></li>
<li><a href="https://www.gendergp.com/transgender-stories/">Transgender Stories</a></li>
<li><a href="https://www.gendergp.com/privacy/">Privacy Policy</a></li>
<li><a href="https://www.gendergp.com/cookie-policy/">Cookies Policy</a></li>
<li><a href="https://www.gendergp.com/safeguarding-policy/">Safeguarding Policy</a></li>
<li><a href="https://www.gendergp.com/terms-conditions/">Terms & Conditions</a></li>
<li><a href="https://www.gendergp.com/member-finance-policy/">Member Finance Policy</a></li>
</ul>
</div>
</div>
<div class="footer-section">
<div class="footer-header"><span class="cre-24new-footer-highlight">Resources</span> <span
class="icon">+</span></div>
<div class="footer-content">
<ul>
<li><a href="https://www.gendergp.com/blog/">Blog</a></li>
<li><a href="https://www.gendergp.com/help-centre/">Help Centre</a></li>
<li><a href="https://www.gendergp.com/faq/">FAQ</a></li>
<li><a href="https://www.gendergp.com/latest-news/">Latest News</a></li>
<li><a href="https://www.gendergp.com/medical-hub/">Medical Hub</a></li>
<li><a href="https://www.gendergp.com/advocacy-hub/">Advocacy Hub</a></li>
<li><a href="https://www.gendergp.com/pharmacy-hub/">Pharmacy Hub</a></li>
<li><a href="https://www.gendergp.com/youth-hub/">Youth Hub</a></li>
<li><a href="https://www.gendergp.com/working-with-your-gp/">Working with Your Doctor</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>`;
function footerFAQ() {
var sections = document.querySelectorAll('.footer-section');
for (var i = 0; i < sections.length; i++) {
(function(index) {
var header = sections[index].querySelector('.footer-header');
header.addEventListener('click', function() {
// If the clicked section is already open, close it
if (sections[index].classList.contains('open')) {
sections[index].classList.remove('open');
header.querySelector('.icon').textContent = '+';
} else {
// Otherwise, close all sections
for (var j = 0; j < sections.length; j++) {
sections[j].classList.remove('open');
sections[j].querySelector('.icon').textContent = '+';
}
// Open the clicked section
sections[index].classList.add('open');
header.querySelector('.icon').textContent = '-';
}
});
})(i);
}
}
// Adding footer content
helper.waitForElement(
'[data-elementor-type="footer"]',
function() {
if (!document.querySelector(".cre-24new-footer-container")) {
document.querySelector('[data-elementor-type="footer"]').insertAdjacentHTML("beforeend", footerContent);
footerFAQ();
}
},
15,
15000
);
}
/* Variation Init */
function init() {
var a = document.querySelector(".cre-24new");
if (!a) {
_$("body").addClass(variation_name);
heroSection();
weChangeSection();
whyJoinSection();
reviewContent();
helper.waitForElement(
" main [data-id='c3ae123']",
function() {
faqSection();
},
15,
15000
);
}
footerElement();
}
/* Initialise variation */
helper.waitForElement("#content", init, 15, 15000);
} catch (e) {
if (debug) console.log(e, "error in Test" + variation_name);
}
})();
}