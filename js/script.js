// -----------------------------Модальные окна------------------------------------------

var modals = document.querySelectorAll('.modal'),
	btnMessage = document.querySelector('.modal-message-open'),
	modalMessage = document.querySelector('.modal-message');
	messageForm = document.querySelector('.message-form');
	messageFields = document.querySelectorAll('.message-form__field'),
	fieldName = document.querySelector('.message-form__field[name="message-name"]'),
	fieldEmail = document.querySelector('.message-form__field[name="message-email"]'),
	btnMap = document.querySelector('.map'),
	modalMap = document.querySelector('.modal-map'),
	notice = document.querySelector('.notice'),
	noticeClose = notice.querySelector('.modal-notice-close'),
	overlay = document.querySelector('.overlay');

var isStorageSupport = true,
	storageName,
	storageEmail,
	fieldsIsComplete;
	

try {
	storageName = localStorage.getItem('name');
	storageEmail = localStorage.getItem('email');
} catch (err) {
	isStorageSupport = false;
};
	

document.body.addEventListener('click', function(evt) {
	var target = evt.target;
	if (target.classList.contains('modal-close-btn')) {
		target.parentElement.classList.remove('modal-show');
		document.body.removeChild(overlay);
		overlay = null;
	}
	if (target.classList.contains('buymenu__link--buy')) {
		evt.preventDefault();
		notice.classList.add('modal-show');
		addOverlay();
	}
	if (target.classList.contains('overlay')) {
		console.log('overlay');
		closeAllModal();
	}
});

window.addEventListener('keydown', function(evt) {
	if (evt.keyCode === 27) {
		closeAllModal();
	}
});

if (btnMessage && modalMessage) {
	btnMessage.addEventListener('click', function(evt) {
		evt.preventDefault();
		modalMessage.classList.remove('modal-error');
		modalMessage.classList.add('modal-show');
		addOverlay();
		if (isStorageSupport) {
			fieldName.value = storageName;
			fieldEmail.value = storageEmail;
		}
		for (var i = 0; i < messageFields.length; i++) {
			if (!messageFields[i].value) {
				messageFields[i].focus();
				break
			}
		}
	});
};

if (modalMessage) {
	messageForm.addEventListener('submit', function(evt) {
		fieldsIsComplete = true;
		for (var i = 0; i < messageFields.length; i++) {
			if (!messageFields[i].value) {
				fieldsIsComplete = false;
			};
		};
		if (!fieldsIsComplete) {
			evt.preventDefault();
			modalMessage.classList.remove('modal-error');
			modalMessage.offsetWidth = modalMessage.offsetWidth;
			modalMessage.classList.add('modal-error');	
		};
		if (isStorageSupport) {
			localStorage.setItem('name', fieldName.value);
			localStorage.setItem('email', fieldEmail.value);
		}
	})
}

if (btnMap && modalMap) {
	btnMap.addEventListener('click', function(evt) {
	evt.preventDefault();
	modalMap.classList.add('modal-show');
	addOverlay();
});
}

if (noticeClose && notice) {
	noticeClose.addEventListener('click', function(evt) {
	evt.preventDefault();
	notice.classList.remove('modal-show');
	document.body.removeChild(overlay);
	overlay = null;
});
}

function addOverlay() {
	if (!overlay) {
		overlay = document.createElement('div');
	overlay.className = 'overlay';
	document.body.appendChild(overlay)
	}
};

function closeAllModal() {
	for (var i = 0; i < modals.length; i++) {
		modals[i].classList.remove('modal-show')
	}
	document.body.removeChild(overlay);
	overlay = null;
};

// ------------------------------------------Слайдер--------------------------------

var slider = document.querySelector('.slider'),
	slides = document	.querySelectorAll('.slide'),
	arrowPrev = document.querySelector('.slider__arrow-prew'),
	arrowNext = document.querySelector('.slider__arrow-next'),
	sliderControls = document.querySelectorAll('.slider-control__item');

if(slider) {
	var slideCurrent = slider.querySelector('.slide-current'),
		slideArray = [].slice.call(slides),
		slideCurrentIndex = slideArray.indexOf(slideCurrent),
		sliderControlsArray = [].slice.call(sliderControls);


	slider.addEventListener('click', function(evt) {
		var target = evt.target;

		if (target === arrowPrev && !arrowPrev.classList.contains('disabled')) {
			showSlide(slideCurrentIndex - 1);
		}
		if (target === arrowNext && !arrowNext.classList.contains('disabled')) {
			showSlide(slideCurrentIndex + 1);
		}
		
		if (target.classList.contains('slider-control__item')) {
			var controlIndex = sliderControlsArray.indexOf(target);
			showSlide(controlIndex);
		}

		arrowPrev.classList.remove('disabled');
		arrowNext.classList.remove('disabled');
		if (slideCurrentIndex === 0) {
			arrowPrev.classList.add('disabled');
		}else if (slideCurrentIndex === slides.length - 1 && slides.length - 1 > 0) {
			arrowNext.classList.add('disabled');
		}
	})
}

function showSlide(index) {
	for (var i = 0; i < slides.length; i++) {
		slides[i].classList.remove('slide-current');
	}
	slides[index].classList.add('slide-current');
	slideCurrent = slides[index];
	slideCurrentIndex = index;
	for (var i = 0; i < sliderControls.length; i++) {
		sliderControls[i].classList.remove('active');
	}
	sliderControls[index].classList.add('active');
}

// ---------------------------закладки----------------------------------

var tabs = document.querySelector('.services-tabs'),
	tabControls = document.querySelectorAll('.tabs-control__element'),
	tabContent = document.querySelectorAll('.tabs-content-block');

if (tabs) {
	for (var i = 0; i < tabControls.length; i++) {
		tabControls[i].addEventListener('click', function(i) {
			return function () {
				hideAllTabs();
				tabControls[i].classList.add('current');
				tabContent[i].classList.add('current');
			}
		}(i))
	}
}

function hideAllTabs() {
	for (var i = 0; i < tabContent.length; i++) {
		tabContent[i].classList.remove('current');
	}
	for (var i = 0; i < tabControls.length; i++) {
		tabControls[i].classList.remove('current');
	}
}