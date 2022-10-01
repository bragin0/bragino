//Слайдер
$(document).ready(function(){	
	$("#slider").nivoSlider({
		effect:				'fade',	//Specify sets like: 'fold, fade, sliceDown'
		slices:				1,
		pauseTime:			6000,
		animSpeed: 			300,
		directionNavHide:	false,
		pauseOnHover:		true,		//Stop animation while hovering
		manualAdvance:		false,		//Force manual transitions
		captionOpacity:		0.8		//Universal caption opacity
	});
});

//Плавающие баннеры
$(function() {
	var fixblock_height = $('#bann').height(); // определяем высоты фиксированного блока
	var fixblock_pos = $('#bann').position().top; // определяем его первоначальное положение
	$(window).scroll(function(){
		if ($(window).scrollTop() > fixblock_pos){ // Если страницу прокрутили дальше, чем находится наш блок
			$('#bann').css({'position': 'fixed', 'top':'0px', 'z-index':'10'}); // То мы этот блок фиксируем и отображаем сверху.
			$('.tabbed_widget').css('padding-bottom', fixblock_height+'px'); // А чтобы это было плавно, добавляем отсуп снизу для верхнего блока (как будто этот блок там все еще есть)
		} else {  // Если же позиция скрола меньше (выше), чем наш блок
			$('#bann').css({'position': 'static'}); // то возвращаем все назад
			$('.tabbed_widget').css('padding-bottom', '0px'); // И убираем отступ
		}
	})
});

//Новая анкета
$(document).ready(function() {
	function blink(){
		$('.new')
		.fadeOut('slow')
		.fadeIn('slow');
		setTimeout(blink,600);
	}
	blink();
});