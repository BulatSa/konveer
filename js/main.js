/***********************
 отправка формы в php BEGIN
***********************/
$(document).ready(function(){

	$(".ajax-form").on("submit", function(event) {
		var form = $(this);
		var send = true;
		event.preventDefault();

		$(this).find("[data-req='true']").each(function(){
			if ($(this).val() === "") {
				$(this).addClass('error');
				send = false;
			}
			if ($(this).is('select')){
				if ($(this).val() === null) {
					$(this).addClass('error');
					send = false;
				}
			}
			if ($(this).is('input[type="checkbox"]')){
				if ($(this).prop('checked') !== true) {
					$(this).addClass('error');
					send = false;
				}
			}
		});

		$(this).find("[data-req='true']").on('focus', function(){
			$(this).removeClass('error');
		});

		var form_data = new FormData(this);

		$("[data-label]").each(function () {
			var input_name = $(this).attr('name');
			var input_label__name = input_name + '_label';
			var input_label__value = $(this).data('label');
			form_data.append(input_label__name,input_label__value)
		});

		if (send === true) {
			$.ajax({
				type: "POST",
				async: true,
				url: "/send.php",
				cache: false,
				contentType: false,
				processData: false,
				data: form_data,
				success: (function(result) {
					console.log(result);
					$.fancybox.close();
					$.fancybox.open({src  : '#modal-thanks'});
					setTimeout(function() {$.fancybox.close();},4500);
					form[0].reset();
				})
			});
		}
	});
});
/***********************
 отправка формы в php END
***********************/


/***********************
Input mask BEGIN
***********************/
$(function($){
	$("input[type='tel']").mask("+7 (999) 999-99-99");
});
/***********************
Input mask END
***********************/


/***********************
 fancybox BEGIN
 ***********************/
function init_fancy() {
	$('.fancy').fancybox({
		fullScreen: false,
		slideShow: false,
		thumbs: false,
		transitionEffect : "slide",
		autoFocus : false,
		backFocus : false,
		animationDuration : 400
	});
	$('.fancy-map').fancybox({
		toolbar: false,
		smallBtn : true,
		transitionEffect : "slide",
		autoFocus : false,
		backFocus : false,
		animationDuration : 400
	});
}
function init_fancy__video() {
	$('.fancy-video').fancybox({
		toolbar: false,
		smallBtn : true,
		fullScreen: false,
		thumbs: false,
		youtube: {
			controls : 1,
			showinfo : 0,
			autoplay: 1
		},
		onUpdate : function( instance, current ) {
			var width,
				height,
				ratio = 16 / 9,
				video = current.$content;
			if ( video ) {
				video.hide();
				width  = current.$slide.width() - 30;
				height = current.$slide.height() - 100;
				if ( height * ratio > width ) {
					height = width / ratio;
				} else {
					width = height * ratio;
				}
				video.css({
					width  : width,
					height : height
				}).show();
			}
		}
	});
}
$(document).ready(function(){
	init_fancy();
	init_fancy__video();
});
/***********************
 fancybox END
 ***********************/


/***********************
 Прокрутка к секциям BEGIN
 ***********************/
$(document).ready(function(){
	$('.scrollto').click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html,body').stop().animate({scrollTop:destination}, 1000);
		return false;
	});
});
/***********************
 Прокрутка к секциям END
 ***********************/

/***********************
Gsap BEGIN
***********************/
$(document).ready(function() {
	TweenMax.to('.text-logo-stripe', 2, {
		x:-23,
		scaleX:0.6,
		fill: "#39ffbb",
		repeat:-1,
		yoyo:true,
		ease:Cubic.easeIn
	});

	var man_tween = TweenMax.to(".cheerman", 1.2, {
		y: -50,
		rotation: 25,
		transformOrigin:"50px 20px",
		ease: Bounce.easeIn
	});

	$('.for-svg').waypoint(function (direction) {
		if (direction === "down"){
			man_tween.reverse();
		} else {
			man_tween.play();
		}
	}, {
		offset: '50%'
	});

	//time
	var time_tween = new TimelineMax({
		paused: true
	});
	time_tween
		.to(".time-stage__men", 1, {
			y: -280,
			ease: Power2.easeInOut
		})
		.to(".time-stage__wave", 0.8, {
			autoAlpha: 1,
			transformOrigin: "center top",
			ease: Power2.easeInOut,
			scaleY: 1
		},'-=0.7')
		.to(".time-stage__men", 1, {
			y: -250,
			ease: Power1.easeInOut,
			repeat:-1, yoyo:true
		})
		.to(".time-stage__wave", 1, {
			autoAlpha: 0.6,
			scaleY: 0.9,
			transformOrigin: "center top",
			ease: Power2.easeInOut,
			repeat:-1, yoyo:true
		},'-=1');

	$('.time-stage__wave').waypoint(function (direction) {
		if (direction === "down"){
			time_tween.play();
		} else {
			time_tween.reverse(1.5);
		}
	}, {
		offset: '60%'
	});
	//time

});
/***********************
Gsap END
***********************/

/***********************
 Waypoints BEGIN
 ***********************/
$(document).ready(function() {
	$('.anim').waypoint(function (direction) {
		var elem = $(this.element);
		elem.toggleClass('animated');
	}, {
		offset: '80%'
	});
});
/***********************
 Waypoints END
 ***********************/