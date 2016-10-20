$(document).ready(function () {
	$(function () {
		var imgs = [];

		$.each($('*'), function () {
			var $this = $(this),
				background = $this.css('background-image'),
				img = $this.is('img');

			if (background != 'none') {
				var path = background.replace('url("', '').replace('")', '');

				imgs.push(path);
			}

			if (img) {
				var path = $this.attr('src');

				if (path) {
					imgs.push(path);
				}
			}
		});

		var percents = 1;

		for (var i = 0; i < imgs.length; i++) {
			var image = $('<img>', {
				attr: {
					src : imgs[i]
				}
			});

			image.load(function () {
				setPercents(imgs.length, percents);
				percents++;
			});
		}

		function setPercents(total, current) {
			var percent = Math.ceil(current / total * 100);
			$('.loader-bar').text(percent + '%');

			$('.circle__down').attr('stroke-dashoffset', 314.15-percent*314.15/100);

			$('.circle__up').attr('stroke-dashoffset', -2*percent*314.14/100);

			if (percent >= 100) {
				setTimeout(function(){
					$('.preload__wrap').fadeOut(1500, function() {
						$('.main__block').addClass("active");
					});
				},1000);
			}

		}
	});
});

// 	(function () {
// 		var counter = 1;

// 		$('.slider__controls-top').on('click', function(e){
// 		    e.preventDefault();

// 			var $this = $(this),
// 				container = $this.closest('.slider'),
// 				items = container.find('.slider__item'),
// 				activeItem = container.find('.slider__item.active');

// 			if (counter >= items.length) {
// 				counter = 0;
// 			}

// 			var reqItem = items.eq(counter);

// 			activeItem.animate({
// 				'top' : '100%'
// 			}, 300);

// 			reqItem.animate({
// 				'top' : '0%'
// 			}, 300, function () {
// 				activeItem.removeClass('active').css('top', '-100%');
// 				$(this).addClass('active');
// 			});

// 			counter++;

// 		});
// 	}());
	
// 	(function () {

// 		$('.slideshow__link').on('click', function(e){
// 		    e.preventDefault();
		    
// 		    var $this = $(this),
// 			    path = $this.attr('href'),
// 			    container = $this.closest('.slideshow'),
// 			    display = container.find('.slideshow__display-pic'),
// 			    preloader = $('#preloader');

// 			display.fadeOut(300, function () {
// 				preloader.show();

// 				display.attr('src', path).load(function () {
// 					$(this).fadeIn();
// 					preloader.hide();
// 				});
// 			});
// 		});
// 	}());
// });

// $(window).scroll(function() {
// 	var
// 		wScroll = $(window).scrollTop(),
// 		menu = $('.static .menu'),
// 		sidebar = $('.static .menu__wrapper '),
// 		stickyStart = sidebar.offset().top,
// 		menuClone = sidebar.clone(),
// 		fixedSidebar = $('.fixed .left__col');

// 	if (wScroll >= stickyStart) {

// 		// menu.css({
// 		// 	top : wScroll - stickyStart + 'px'
// 		// });

// 		if (!fixedSidebar.find('.menu__wrapper').length) {
// 			fixedSidebar.append(menuClone);
// 			menu.hide();
// 		}


// 	} else {
// 		fixedSidebar.find('.menu__wrapper').remove();
// 		menu.show();
// 	}

// });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicHJlbG9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHQkKGZ1bmN0aW9uICgpIHtcclxuXHRcdHZhciBpbWdzID0gW107XHJcblxyXG5cdFx0JC5lYWNoKCQoJyonKSwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG5cdFx0XHRcdGJhY2tncm91bmQgPSAkdGhpcy5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnKSxcclxuXHRcdFx0XHRpbWcgPSAkdGhpcy5pcygnaW1nJyk7XHJcblxyXG5cdFx0XHRpZiAoYmFja2dyb3VuZCAhPSAnbm9uZScpIHtcclxuXHRcdFx0XHR2YXIgcGF0aCA9IGJhY2tncm91bmQucmVwbGFjZSgndXJsKFwiJywgJycpLnJlcGxhY2UoJ1wiKScsICcnKTtcclxuXHJcblx0XHRcdFx0aW1ncy5wdXNoKHBhdGgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoaW1nKSB7XHJcblx0XHRcdFx0dmFyIHBhdGggPSAkdGhpcy5hdHRyKCdzcmMnKTtcclxuXHJcblx0XHRcdFx0aWYgKHBhdGgpIHtcclxuXHRcdFx0XHRcdGltZ3MucHVzaChwYXRoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHZhciBwZXJjZW50cyA9IDE7XHJcblxyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpbWdzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpbWFnZSA9ICQoJzxpbWc+Jywge1xyXG5cdFx0XHRcdGF0dHI6IHtcclxuXHRcdFx0XHRcdHNyYyA6IGltZ3NbaV1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aW1hZ2UubG9hZChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0c2V0UGVyY2VudHMoaW1ncy5sZW5ndGgsIHBlcmNlbnRzKTtcclxuXHRcdFx0XHRwZXJjZW50cysrO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBzZXRQZXJjZW50cyh0b3RhbCwgY3VycmVudCkge1xyXG5cdFx0XHR2YXIgcGVyY2VudCA9IE1hdGguY2VpbChjdXJyZW50IC8gdG90YWwgKiAxMDApO1xyXG5cdFx0XHQkKCcubG9hZGVyLWJhcicpLnRleHQocGVyY2VudCArICclJyk7XHJcblxyXG5cdFx0XHQkKCcuY2lyY2xlX19kb3duJykuYXR0cignc3Ryb2tlLWRhc2hvZmZzZXQnLCAzMTQuMTUtcGVyY2VudCozMTQuMTUvMTAwKTtcclxuXHJcblx0XHRcdCQoJy5jaXJjbGVfX3VwJykuYXR0cignc3Ryb2tlLWRhc2hvZmZzZXQnLCAtMipwZXJjZW50KjMxNC4xNC8xMDApO1xyXG5cclxuXHRcdFx0aWYgKHBlcmNlbnQgPj0gMTAwKSB7XHJcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0JCgnLnByZWxvYWRfX3dyYXAnKS5mYWRlT3V0KDE1MDAsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQkKCcubWFpbl9fYmxvY2snKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0sMTAwMCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblx0fSk7XHJcbn0pO1xyXG5cclxuLy8gXHQoZnVuY3Rpb24gKCkge1xyXG4vLyBcdFx0dmFyIGNvdW50ZXIgPSAxO1xyXG5cclxuLy8gXHRcdCQoJy5zbGlkZXJfX2NvbnRyb2xzLXRvcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4vLyBcdFx0ICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbi8vIFx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyksXHJcbi8vIFx0XHRcdFx0Y29udGFpbmVyID0gJHRoaXMuY2xvc2VzdCgnLnNsaWRlcicpLFxyXG4vLyBcdFx0XHRcdGl0ZW1zID0gY29udGFpbmVyLmZpbmQoJy5zbGlkZXJfX2l0ZW0nKSxcclxuLy8gXHRcdFx0XHRhY3RpdmVJdGVtID0gY29udGFpbmVyLmZpbmQoJy5zbGlkZXJfX2l0ZW0uYWN0aXZlJyk7XHJcblxyXG4vLyBcdFx0XHRpZiAoY291bnRlciA+PSBpdGVtcy5sZW5ndGgpIHtcclxuLy8gXHRcdFx0XHRjb3VudGVyID0gMDtcclxuLy8gXHRcdFx0fVxyXG5cclxuLy8gXHRcdFx0dmFyIHJlcUl0ZW0gPSBpdGVtcy5lcShjb3VudGVyKTtcclxuXHJcbi8vIFx0XHRcdGFjdGl2ZUl0ZW0uYW5pbWF0ZSh7XHJcbi8vIFx0XHRcdFx0J3RvcCcgOiAnMTAwJSdcclxuLy8gXHRcdFx0fSwgMzAwKTtcclxuXHJcbi8vIFx0XHRcdHJlcUl0ZW0uYW5pbWF0ZSh7XHJcbi8vIFx0XHRcdFx0J3RvcCcgOiAnMCUnXHJcbi8vIFx0XHRcdH0sIDMwMCwgZnVuY3Rpb24gKCkge1xyXG4vLyBcdFx0XHRcdGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmNzcygndG9wJywgJy0xMDAlJyk7XHJcbi8vIFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbi8vIFx0XHRcdH0pO1xyXG5cclxuLy8gXHRcdFx0Y291bnRlcisrO1xyXG5cclxuLy8gXHRcdH0pO1xyXG4vLyBcdH0oKSk7XHJcblx0XHJcbi8vIFx0KGZ1bmN0aW9uICgpIHtcclxuXHJcbi8vIFx0XHQkKCcuc2xpZGVzaG93X19saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbi8vIFx0XHQgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ICAgIFxyXG4vLyBcdFx0ICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbi8vIFx0XHRcdCAgICBwYXRoID0gJHRoaXMuYXR0cignaHJlZicpLFxyXG4vLyBcdFx0XHQgICAgY29udGFpbmVyID0gJHRoaXMuY2xvc2VzdCgnLnNsaWRlc2hvdycpLFxyXG4vLyBcdFx0XHQgICAgZGlzcGxheSA9IGNvbnRhaW5lci5maW5kKCcuc2xpZGVzaG93X19kaXNwbGF5LXBpYycpLFxyXG4vLyBcdFx0XHQgICAgcHJlbG9hZGVyID0gJCgnI3ByZWxvYWRlcicpO1xyXG5cclxuLy8gXHRcdFx0ZGlzcGxheS5mYWRlT3V0KDMwMCwgZnVuY3Rpb24gKCkge1xyXG4vLyBcdFx0XHRcdHByZWxvYWRlci5zaG93KCk7XHJcblxyXG4vLyBcdFx0XHRcdGRpc3BsYXkuYXR0cignc3JjJywgcGF0aCkubG9hZChmdW5jdGlvbiAoKSB7XHJcbi8vIFx0XHRcdFx0XHQkKHRoaXMpLmZhZGVJbigpO1xyXG4vLyBcdFx0XHRcdFx0cHJlbG9hZGVyLmhpZGUoKTtcclxuLy8gXHRcdFx0XHR9KTtcclxuLy8gXHRcdFx0fSk7XHJcbi8vIFx0XHR9KTtcclxuLy8gXHR9KCkpO1xyXG4vLyB9KTtcclxuXHJcbi8vICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbi8vIFx0dmFyXHJcbi8vIFx0XHR3U2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpLFxyXG4vLyBcdFx0bWVudSA9ICQoJy5zdGF0aWMgLm1lbnUnKSxcclxuLy8gXHRcdHNpZGViYXIgPSAkKCcuc3RhdGljIC5tZW51X193cmFwcGVyICcpLFxyXG4vLyBcdFx0c3RpY2t5U3RhcnQgPSBzaWRlYmFyLm9mZnNldCgpLnRvcCxcclxuLy8gXHRcdG1lbnVDbG9uZSA9IHNpZGViYXIuY2xvbmUoKSxcclxuLy8gXHRcdGZpeGVkU2lkZWJhciA9ICQoJy5maXhlZCAubGVmdF9fY29sJyk7XHJcblxyXG4vLyBcdGlmICh3U2Nyb2xsID49IHN0aWNreVN0YXJ0KSB7XHJcblxyXG4vLyBcdFx0Ly8gbWVudS5jc3Moe1xyXG4vLyBcdFx0Ly8gXHR0b3AgOiB3U2Nyb2xsIC0gc3RpY2t5U3RhcnQgKyAncHgnXHJcbi8vIFx0XHQvLyB9KTtcclxuXHJcbi8vIFx0XHRpZiAoIWZpeGVkU2lkZWJhci5maW5kKCcubWVudV9fd3JhcHBlcicpLmxlbmd0aCkge1xyXG4vLyBcdFx0XHRmaXhlZFNpZGViYXIuYXBwZW5kKG1lbnVDbG9uZSk7XHJcbi8vIFx0XHRcdG1lbnUuaGlkZSgpO1xyXG4vLyBcdFx0fVxyXG5cclxuXHJcbi8vIFx0fSBlbHNlIHtcclxuLy8gXHRcdGZpeGVkU2lkZWJhci5maW5kKCcubWVudV9fd3JhcHBlcicpLnJlbW92ZSgpO1xyXG4vLyBcdFx0bWVudS5zaG93KCk7XHJcbi8vIFx0fVxyXG5cclxuLy8gfSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
