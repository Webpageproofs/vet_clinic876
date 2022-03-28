//@prepros-append maskedInput.js
//@prepros-append script.js
//@prepros-append jq.js
/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});
// <ИЗОБРАЖЕНИЕ В HTML И В BACKGROUND URL>
function ibg() {

	var ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

// </ИЗОБРАЖЕНИЕ В HTML И В BACKGROUND URL>

// <ОТОБРАЖЕНИЕ БУРГЕР-ИКОНКИ МЕНЮ>
var menu = document.querySelector('.icon-menu');
var menu__body = document.querySelector('.header__menu');
menu.addEventListener('click', click_menu);

function click_menu() {
	menu.classList.toggle('active');
	menu__body.classList.toggle('active');
}

var link = document.querySelectorAll('.header__menu a');
for (i = 0; i < link.length; i++) {
	link[i].addEventListener('click', click_link);
}
function click_link() {
	menu.classList.toggle('active');
	menu__body.classList.toggle('active');
}
// </ОТОБРАЖЕНИЕ БУРГЕР-ИКОНКИ МЕНЮ>
// <ОТОБРАЖЕНИЕ кнопки наверх>
var vayy = duration =700;
function scrollTo(to, vayy) {
	const
		 element = document.scrollingElement || document.documentElement,
		 start = element.scrollTop,
		 change = to - start,
		 startDate = +new Date(),
		 // t = current time
		 // b = start value
		 // c = change in value
		 // d = duration
		 easeInOutQuad = function (t, b, c, d) {
			  t /= d / 2;
			  if (t < 1) return c / 2 * t * t + b;
			  t--;
			  return -c / 2 * (t * (t - 2) - 1) + b;
		 },
		 animateScroll = function () {
			  const currentDate = +new Date();
			  const currentTime = currentDate - startDate;
			  element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
			  if (currentTime < duration) {
					requestAnimationFrame(animateScroll);
			  }
			  else {
					element.scrollTop = to;
			  }
		 };
	animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
	let btn = document.querySelector('#toTop');
	window.addEventListener('scroll', function () {
		 // Если прокрутили дальше 599px, показываем кнопку
		 if (pageYOffset > 100) {
			  btn.classList.add('show');
			  // Иначе прячем
		 } else {
			  btn.classList.remove('show');
		 }
	});

	// При клике прокручиываем на самый верх
	btn.onclick = function (click) {
		 click.preventDefault();
		 scrollTo(0, 400);
	}
});

// </ОТОБРАЖЕНИЕ кнопки наверх>

// Прикрепление файла

let fields = document.querySelectorAll('.popup .form__file');
Array.prototype.forEach.call(fields, function (input) {
	let label = input.nextElementSibling,
		labelVal = label.querySelector('.file-label__btn').innerHTML;
	input.addEventListener('change', function (e) {
		let countFiles = '';
		if (this.files && this.files.length >= 1)
			countFiles = this.files.length;

		if (countFiles)
			label.querySelector('.file-label__btn').innerText = 'Выбрано файлов: ' + countFiles;
		else
			label.querySelector('.file-label__btn').innerText = labelVal;
	});

});


$(document).ready(function () {
	// АККОРДЕОН

	$('.accordeon-box__info').hide();
	//прикрепляем клик по заголовкам acc-head
	$('.accordeon-box__name').on('click', f_acc);
	function f_acc() {
		//скрываем все, кроме того, что должны открыть
		$('.accordeon-box__info').not($(this).next()).slideUp(300);
		$('.accordeon-box__info').not($(this).next()).slideUp(300).prev().children('.accordeon-box__arrow').addClass('arr-2').removeClass('arr');

		// открываем или скрываем блок под заголовком, по которому кликнули
		$(this).next().slideToggle(300).prev().children('.accordeon-box__arrow').toggleClass('arr').removeClass('arr-2');
		// $(this).children('.service-box__arrow').toggleClass('service-arr').removeClass('service-arr-2');
	}

	// // АНИМАЦИЯ ЦИФР

	// $(function () {
	// 	var target_block = $(".nums"); // Ищем блок 
	// 	var blockStatus = true;
	// 	$(window).scroll(function () {
	// 		var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
	// 		if (scrollEvent && blockStatus) {
	// 			blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
	// 			$({ numberValue: 0 }).animate({ numberValue: $(".nums").html() }, {
	// 				duration: 1000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд 
	// 				easing: "linear",
	// 				step: function (val) {
	// 					$(".nums").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
	// 				}
	// 			});
	// 		}
	// 	});
	// });

	$('.gallery__row').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		fixedContentPos: false,
		closeOnContentClick: true,
		closeBtnInside: false,
		gallery: { enabled: true }
		// other options
	});
	$('.gal__row').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		fixedContentPos: false,
		closeOnContentClick: true,
		closeBtnInside: false,
		gallery: { enabled: true }
		// other options
	});

	// $("#phone_1").mask("+7(999)-999-99-99");

	$('.owl-carousel.owl-carousel-team').owlCarousel({
		loop: true,
		navText: ["<i class=\"fas fa-chevron-left\"></i>", "<i class=\"fas fa-chevron-right\"></i>"],
		nav: true,
		autoplay: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		smartSpeed: 1500,
		animateIn: 'linear',
		animateOut: 'linear',
		responsive: {
			0: {
				items: 1,
				nav: false,

			},
			500: {
				items: 2,
				nav: false,
			},
			767: {
				items: 3

			},

			1000: {
				items: 4
			}
		}
	});
	$('.owl-carousel.owl-carousel-main').owlCarousel({
		loop: true,
		// autoplay: true,
		autoplayTimeout: 8000,
		items: 1,
		smartSpeed: 1500,
		// margin: 0,

	});

});







