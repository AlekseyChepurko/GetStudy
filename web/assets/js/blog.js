var initPos = $('.section__blog_nav').offset().top;

$(window).scroll(function(){
	var currentPos = $(window).scrollTop();
	if(currentPos >= (initPos-100)){
		$('.section__blog_nav').css({
			position: 'fixed',
			width: '400px',
			top: '100px',
			left: '100px',
		});
		// $('.section__blog_article').css('padding', '0 100px 200px 510px');
	}
	else {
		$('.section__blog_nav').css({
			position: 'absolute',
			width: '400px',
			top: '100px',
			left: '100px',
		});
		// $('.section__blog_article').css('padding', '0 100px 200px 530px');
	}
})


var articles = $('.article__item');
for (var i = articles.length - 1; i >= 0; i--) {
	var wp = new Waypoint({
		element: articles[i],
		handler: function (element){
			$('.nav__item').removeClass('active');
			console.clear();
			$(".wp"+this.element.getAttribute("wp_index")).addClass("active");
		},
		offset: 100
	})
};


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaW5pdFBvcyA9ICQoJy5zZWN0aW9uX19ibG9nX25hdicpLm9mZnNldCgpLnRvcDtcclxuXHJcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuXHR2YXIgY3VycmVudFBvcyA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHRpZihjdXJyZW50UG9zID49IChpbml0UG9zLTEwMCkpe1xyXG5cdFx0JCgnLnNlY3Rpb25fX2Jsb2dfbmF2JykuY3NzKHtcclxuXHRcdFx0cG9zaXRpb246ICdmaXhlZCcsXHJcblx0XHRcdHdpZHRoOiAnNDAwcHgnLFxyXG5cdFx0XHR0b3A6ICcxMDBweCcsXHJcblx0XHRcdGxlZnQ6ICcxMDBweCcsXHJcblx0XHR9KTtcclxuXHRcdC8vICQoJy5zZWN0aW9uX19ibG9nX2FydGljbGUnKS5jc3MoJ3BhZGRpbmcnLCAnMCAxMDBweCAyMDBweCA1MTBweCcpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdCQoJy5zZWN0aW9uX19ibG9nX25hdicpLmNzcyh7XHJcblx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG5cdFx0XHR3aWR0aDogJzQwMHB4JyxcclxuXHRcdFx0dG9wOiAnMTAwcHgnLFxyXG5cdFx0XHRsZWZ0OiAnMTAwcHgnLFxyXG5cdFx0fSk7XHJcblx0XHQvLyAkKCcuc2VjdGlvbl9fYmxvZ19hcnRpY2xlJykuY3NzKCdwYWRkaW5nJywgJzAgMTAwcHggMjAwcHggNTMwcHgnKTtcclxuXHR9XHJcbn0pXHJcblxyXG5cclxudmFyIGFydGljbGVzID0gJCgnLmFydGljbGVfX2l0ZW0nKTtcclxuZm9yICh2YXIgaSA9IGFydGljbGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcblx0dmFyIHdwID0gbmV3IFdheXBvaW50KHtcclxuXHRcdGVsZW1lbnQ6IGFydGljbGVzW2ldLFxyXG5cdFx0aGFuZGxlcjogZnVuY3Rpb24gKGVsZW1lbnQpe1xyXG5cdFx0XHQkKCcubmF2X19pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRjb25zb2xlLmNsZWFyKCk7XHJcblx0XHRcdCQoXCIud3BcIit0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwid3BfaW5kZXhcIikpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cdFx0fSxcclxuXHRcdG9mZnNldDogMTAwXHJcblx0fSlcclxufTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
