function addOverlay(){overlay||(overlay=document.createElement("div"),overlay.className="overlay",document.body.appendChild(overlay))}function closeAllModal(){for(var a=0;a<modals.length;a++)modals[a].classList.remove("modal-show");document.body.removeChild(overlay),overlay=null}function showSlide(a){for(var b=0;b<slides.length;b++)slides[b].classList.remove("slide-current");slides[a].classList.add("slide-current"),slideCurrent=slides[a],slideCurrentIndex=a;for(var b=0;b<sliderControls.length;b++)sliderControls[b].classList.remove("active");sliderControls[a].classList.add("active")}function hideAllTabs(){for(var a=0;a<tabContent.length;a++)tabContent[a].classList.remove("current");for(var a=0;a<tabControls.length;a++)tabControls[a].classList.remove("current")}var modals=document.querySelectorAll(".modal"),btnMessage=document.querySelector(".modal-message-open"),modalMessage=document.querySelector(".modal-message");messageForm=document.querySelector(".message-form"),messageFields=document.querySelectorAll(".message-form__field"),fieldName=document.querySelector('.message-form__field[name="message-name"]'),fieldEmail=document.querySelector('.message-form__field[name="message-email"]'),btnMap=document.querySelector(".map"),modalMap=document.querySelector(".modal-map"),notice=document.querySelector(".notice"),noticeClose=notice.querySelector(".modal-notice-close"),overlay=document.querySelector(".overlay");var isStorageSupport=!0,storageName,storageEmail,fieldsIsComplete;try{storageName=localStorage.getItem("name"),storageEmail=localStorage.getItem("email")}catch(err){isStorageSupport=!1}document.body.addEventListener("click",function(a){var b=a.target;b.classList.contains("modal-close-btn")&&(b.parentElement.classList.remove("modal-show"),document.body.removeChild(overlay),overlay=null),b.classList.contains("buymenu__link--buy")&&(a.preventDefault(),notice.classList.add("modal-show"),addOverlay()),b.classList.contains("overlay")&&(console.log("overlay"),closeAllModal())}),window.addEventListener("keydown",function(a){27===a.keyCode&&closeAllModal()}),btnMessage&&modalMessage&&btnMessage.addEventListener("click",function(a){a.preventDefault(),modalMessage.classList.remove("modal-error"),modalMessage.classList.add("modal-show"),addOverlay(),isStorageSupport&&(fieldName.value=storageName,fieldEmail.value=storageEmail);for(var b=0;b<messageFields.length;b++)if(!messageFields[b].value){messageFields[b].focus();break}}),modalMessage&&messageForm.addEventListener("submit",function(a){fieldsIsComplete=!0;for(var b=0;b<messageFields.length;b++)messageFields[b].value||(fieldsIsComplete=!1);fieldsIsComplete||(a.preventDefault(),modalMessage.classList.remove("modal-error"),modalMessage.offsetWidth=modalMessage.offsetWidth,modalMessage.classList.add("modal-error")),isStorageSupport&&(localStorage.setItem("name",fieldName.value),localStorage.setItem("email",fieldEmail.value))}),btnMap&&modalMap&&btnMap.addEventListener("click",function(a){a.preventDefault(),modalMap.classList.add("modal-show"),addOverlay()}),noticeClose&&notice&&noticeClose.addEventListener("click",function(a){a.preventDefault(),notice.classList.remove("modal-show"),document.body.removeChild(overlay),overlay=null});var slider=document.querySelector(".slider"),slides=document.querySelectorAll(".slide"),arrowPrev=document.querySelector(".slider__arrow-prew"),arrowNext=document.querySelector(".slider__arrow-next"),sliderControls=document.querySelectorAll(".slider-control__item");if(slider){var slideCurrent=slider.querySelector(".slide-current"),slideArray=[].slice.call(slides),slideCurrentIndex=slideArray.indexOf(slideCurrent),sliderControlsArray=[].slice.call(sliderControls);slider.addEventListener("click",function(a){var b=a.target;if(b!==arrowPrev||arrowPrev.classList.contains("disabled")||showSlide(slideCurrentIndex-1),b!==arrowNext||arrowNext.classList.contains("disabled")||showSlide(slideCurrentIndex+1),b.classList.contains("slider-control__item")){var c=sliderControlsArray.indexOf(b);showSlide(c)}arrowPrev.classList.remove("disabled"),arrowNext.classList.remove("disabled"),0===slideCurrentIndex?arrowPrev.classList.add("disabled"):slideCurrentIndex===slides.length-1&&slides.length-1>0&&arrowNext.classList.add("disabled")})}var tabs=document.querySelector(".services-tabs"),tabControls=document.querySelectorAll(".tabs-control__element"),tabContent=document.querySelectorAll(".tabs-content-block");if(tabs)for(var i=0;i<tabControls.length;i++)tabControls[i].addEventListener("click",function(a){return function(){hideAllTabs(),tabControls[a].classList.add("current"),tabContent[a].classList.add("current")}}(i));