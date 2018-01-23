function LSsettings(){
	var timeDiv = document.getElementById('timediv');
	var timeText = document.getElementById('timetext');
	var dateText = document.getElementById('datetext');
	var topSlide = document.getElementById('topslide');
	var bottomSlideRight = document.getElementById('bottomslideright');
	var bottomSlideLeft = document.getElementById('bottomslideleft');
	var backMaterial = document.getElementById('backmaterial');
	var backText = document.getElementById('backtext');
	var sliderWeather = document.getElementById('weather');
	var sliderDate = document.getElementById('sliderdate');

	if (timeDiv != null){
		timeDiv.style['top'] = (timeboxTop / 2)+'px';
	}

	if (timeboxDisable == 'yes' && timeDiv != null){
		timeDiv.style['display'] = 'none';
	}

	if (timeShort == 'yes' && timeDiv != null){
		timeDiv.style['font-size'] = '1.25em';
		timeText.style['top'] = '-6px';
		dateText.style['top'] = '-6px';
	}

	topSlide.style['height'] = (sliderTop / 2)+'px';
	bottomSlideLeft.style['top'] = (sliderTop / 2)+'px';
	bottomSlideLeft.style['height'] = (568 - (sliderTop / 2))+'px';
	bottomSlideLeft.style['background-position'] = '0px '+(sliderTop / -2)+'px';
	bottomSlideRight.style['top'] = (sliderTop / 2)+'px';
	bottomSlideRight.style['height'] = (568 - (sliderTop / 2))+'px';
	bottomSlideRight.style['background-position'] = '160px '+(sliderTop / -2)+'px';
	backText.style['top'] = ((sliderTop / 2) - 20)+'px';

	if (showDate == 'no'){
		sliderDate.style['display'] = 'none';
	}

	if (showWeather == 'no'){
		sliderWeather.style['display'] = 'none';
	}

	if (showDate == 'yes' && showWeather == 'yes'){
		sliderDate.style['font-size'] = '0.25em';
		sliderDate.style['position'] = 'relative';
		sliderDate.style['top'] = '-10px';
		sliderWeather.style['font-size'] = '0.25em';
		sliderWeather.style['position'] = 'relative';
		sliderWeather.style['top'] = '-35px';
	}

	if (showDate == 'no' && showWeather == 'no'){
		backText.style['top'] = '160px';
	}

	if (sliderDisable == 'yes'){
		topSlide.style['display'] = 'none';
		bottomSlideRight.style['display'] = 'none';
		bottomSlideLeft.style['display'] = 'none';
		backText.style['display'] = 'none';
		backMaterial.style['background-image'] = 'url(../../../var/mobile/Library/SpringBoard/LockBackground.jpg)';
	}	

	if (sliderAlwaysOn == 'yes'){
		bottomSlideRight.style['margin-top'] = '150px';
		bottomSlideRight.style['border-top'] = '1px solid rgba(255,255,255,0.1)';
		bottomSlideLeft.style['margin-top'] = '150px';
		bottomSlideLeft.style['border-top'] = '1px solid rgba(255,255,255,0.1)';
	}			

	if (sliderAnimate == 'yes'){
		bottomSlideLeft.style['-webkit-transition-property'] = 'margin-top, border-top-right-radius';
		bottomSlideLeft.style['transition-property'] = 'margin-top, border-top-right-radius';
		bottomSlideLeft.style['-webkit-transition-duration'] = '0.3s';
		bottomSlideLeft.style['transition-duration'] = '0.3s';
		bottomSlideLeft.style['-webkit-transition-timing-function'] = 'ease-in-out';
		bottomSlideLeft.style['transition-timing-function'] = 'ease-in-out';
		bottomSlideRight.style['-webkit-transition-property'] = 'margin-top, border-top-left-radius';
		bottomSlideRight.style['transition-property'] = 'margin-top, border-top-left-radius';
		bottomSlideRight.style['-webkit-transition-duration'] = '0.3s';
		bottomSlideRight.style['transition-duration'] = '0.3s';
		bottomSlideRight.style['-webkit-transition-timing-function'] = 'ease-in-out';
		bottomSlideRight.style['transition-timing-function'] = 'ease-in-out';
	}
}
$(document).ready(LSsettings);