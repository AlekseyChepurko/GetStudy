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
			$('.load_bar').text(percent);

			$('.circle__down').attr('stroke-dashoffset', 314.15-percent*314.15/100);

			$('.circle__up').attr('stroke-dashoffset', -2*percent*314.14/100);

			if (percent >= 100) {
				setTimeout(function(){
					$('.preload__wrap').fadeOut(1500, function() {
						// $('.main__block').addClass("active");
						$(".load_bar").text("1");
					});
				},1000);
			}

		}
	});

	$('.menu_link').click(function(){
		$('.preload__wrap').fadeIn();
		console.log("link clicked");
	});
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJwcmVsb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cdCQoZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIGltZ3MgPSBbXTtcclxuXHJcblx0XHQkLmVhY2goJCgnKicpLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyksXHJcblx0XHRcdFx0YmFja2dyb3VuZCA9ICR0aGlzLmNzcygnYmFja2dyb3VuZC1pbWFnZScpLFxyXG5cdFx0XHRcdGltZyA9ICR0aGlzLmlzKCdpbWcnKTtcclxuXHJcblx0XHRcdGlmIChiYWNrZ3JvdW5kICE9ICdub25lJykge1xyXG5cdFx0XHRcdHZhciBwYXRoID0gYmFja2dyb3VuZC5yZXBsYWNlKCd1cmwoXCInLCAnJykucmVwbGFjZSgnXCIpJywgJycpO1xyXG5cclxuXHRcdFx0XHRpbWdzLnB1c2gocGF0aCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChpbWcpIHtcclxuXHRcdFx0XHR2YXIgcGF0aCA9ICR0aGlzLmF0dHIoJ3NyYycpO1xyXG5cclxuXHRcdFx0XHRpZiAocGF0aCkge1xyXG5cdFx0XHRcdFx0aW1ncy5wdXNoKHBhdGgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dmFyIHBlcmNlbnRzID0gMTtcclxuXHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGltZ3MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGltYWdlID0gJCgnPGltZz4nLCB7XHJcblx0XHRcdFx0YXR0cjoge1xyXG5cdFx0XHRcdFx0c3JjIDogaW1nc1tpXVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpbWFnZS5sb2FkKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRzZXRQZXJjZW50cyhpbWdzLmxlbmd0aCwgcGVyY2VudHMpO1xyXG5cdFx0XHRcdHBlcmNlbnRzKys7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHNldFBlcmNlbnRzKHRvdGFsLCBjdXJyZW50KSB7XHJcblx0XHRcdHZhciBwZXJjZW50ID0gTWF0aC5jZWlsKGN1cnJlbnQgLyB0b3RhbCAqIDEwMCk7XHJcblx0XHRcdCQoJy5sb2FkX2JhcicpLnRleHQocGVyY2VudCk7XHJcblxyXG5cdFx0XHQkKCcuY2lyY2xlX19kb3duJykuYXR0cignc3Ryb2tlLWRhc2hvZmZzZXQnLCAzMTQuMTUtcGVyY2VudCozMTQuMTUvMTAwKTtcclxuXHJcblx0XHRcdCQoJy5jaXJjbGVfX3VwJykuYXR0cignc3Ryb2tlLWRhc2hvZmZzZXQnLCAtMipwZXJjZW50KjMxNC4xNC8xMDApO1xyXG5cclxuXHRcdFx0aWYgKHBlcmNlbnQgPj0gMTAwKSB7XHJcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0JCgnLnByZWxvYWRfX3dyYXAnKS5mYWRlT3V0KDE1MDAsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQvLyAkKCcubWFpbl9fYmxvY2snKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHRcdFx0XHRcdFx0JChcIi5sb2FkX2JhclwiKS50ZXh0KFwiMVwiKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0sMTAwMCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdCQoJy5tZW51X2xpbmsnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0JCgnLnByZWxvYWRfX3dyYXAnKS5mYWRlSW4oKTtcclxuXHRcdGNvbnNvbGUubG9nKFwibGluayBjbGlja2VkXCIpO1xyXG5cdH0pO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
