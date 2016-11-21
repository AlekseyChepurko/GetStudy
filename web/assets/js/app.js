$(document).ready(function () {		

	var  objectTop = $(".navigation__menu").offset().top;
//scroll appearence
// для появления элемента необходимо изначально задать ему класс hide
	$(window).scroll(function (){ //срабатывает при каждом скролле
		// hide - класс скрытых изначально элементолв - у них прозрачность на нуле
		var fixed_items = [$(".navigation__menu")]; 
		// console.log(fixed_items);
			$.each(fixed_items,function(i){
			// var  objectTop = $(this).offset().top;
			var windowBottom = $(window).scrollTop();
			// console.log(windowBottom);
			// если объект в поле зрения, то постепенно увеличиваем прозрачность
            if( windowBottom > 150 ){
                $(this).addClass("fixed");   
            }
            else
            	$(this).removeClass("fixed");
		});
	})


//menu appearence
	$(".navigation__bar").click(function(){
		
		if ($(".menu__wrap").hasClass("active")){

			$(".menu__wrap").removeClass("active");
			$(".navigation__bar").removeClass("active");

			$(".navigation__menu_item_mobile").each(function(){
				$(this).addClass("hidden_menu_item");
				});

		}

		else{
			var i=0;
			$(".navigation__menu_item_mobile").each(function(){
				i++;
				var item = $(this);
				setTimeout(function(){
					item.removeClass("hidden_menu_item");
				},200*i);
				});

			
			$(".menu__wrap").addClass("active");
			$(".navigation__bar").addClass("active");	

		}
	});

$(".comment_form_toggler").click(function(e){
	// console.log(this);
	e.preventDefault();
	$(this).next().toggle();

	// $.post({
	// 	data: 'hello',
	// 	url: '/form/getPostCommentForm',
	// 	success: function(e){
	// 		console.log("ok");
	// 	},
	// 	fail: function(e){
	// 		console.log("bad");
	// 	}
	// });
});


function scroll(from,to){     // scroll to top/down
	$(from).click(function (event) {
			event.preventDefault();
			var top = $(to).offset().top;
			$('body,html').animate({scrollTop: top}, 600);
		});
};


//scrolls
scroll($('.middle__button'), $('#slider'));
scroll($('.form__top-icon'), $('#header'));
scroll($('.middle__button'), $('#slider'));



})

 // main block flip 
function flipInit(argument) {
	$(".main__button").click(function(event) {

		$(".main__block_wrap").css('perspective', 'none');
		
		$(this).fadeOut('300', function() {
			
		});

		$(".main__block").css({
			transition: 'transform .3s',
			transform: 'rotateY(90deg)'
		});

		setTimeout(function(){
			$(".main__block").css({
				display: 'none'
			});
			$(".form__login").css({
				display: 'block'
			});
		}, 300);

		setTimeout(function () {
			$(".form__login").css({
				transform: 'rotateY(0deg)'
			});
		}, 320);	
	});

	$(".form__login_back").click(function(event) {
		$(".main__button").fadeIn('300', function() {
			
		});

		$(".form__login").css({
			transition: 'transform .3s',
			transform: 'rotateY(90deg)'
		});

		setTimeout(function(){
			$(".form__login").css({
				display: 'none'
			});
			$(".main__block").css({
				display: 'block'
			});
		}, 300);

		setTimeout(function () {
			$(".main__block").css({
				transform: 'rotateY(0deg)'
			});
		}, 320);
	});
}


function initMap() {	// google map
	var mapOptions = {
    zoom: 12,
    center: {lat: 59.9042161, lng: 30.1716925},
    disableDefaultUI: true,
    scrollwheel: false,
    draggable: false,
    styles: [{"featureType":"administrative","elementType":"labels.text","stylers":[{"saturation":"-17"},{"lightness":"21"},{"gamma":"1.16"},{"weight":"2.35"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"gamma":"1"},{"lightness":"100"},{"color":"#ffffff"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#004d90"},{"visibility":"on"}]}]
	}
 	
 	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}



// mainBlockApp();
flipInit();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHRcdFxyXG5cclxuXHR2YXIgIG9iamVjdFRvcCA9ICQoXCIubmF2aWdhdGlvbl9fbWVudVwiKS5vZmZzZXQoKS50b3A7XHJcbi8vc2Nyb2xsIGFwcGVhcmVuY2VcclxuLy8g0LTQu9GPINC/0L7Rj9Cy0LvQtdC90LjRjyDRjdC70LXQvNC10L3RgtCwINC90LXQvtCx0YXQvtC00LjQvNC+INC40LfQvdCw0YfQsNC70YzQvdC+INC30LDQtNCw0YLRjCDQtdC80YMg0LrQu9Cw0YHRgSBoaWRlXHJcblx0JCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKXsgLy/RgdGA0LDQsdCw0YLRi9Cy0LDQtdGCINC/0YDQuCDQutCw0LbQtNC+0Lwg0YHQutGA0L7Qu9C70LVcclxuXHRcdC8vIGhpZGUgLSDQutC70LDRgdGBINGB0LrRgNGL0YLRi9GFINC40LfQvdCw0YfQsNC70YzQvdC+INGN0LvQtdC80LXQvdGC0L7Qu9CyIC0g0YMg0L3QuNGFINC/0YDQvtC30YDQsNGH0L3QvtGB0YLRjCDQvdCwINC90YPQu9C1XHJcblx0XHR2YXIgZml4ZWRfaXRlbXMgPSBbJChcIi5uYXZpZ2F0aW9uX19tZW51XCIpXTsgXHJcblx0XHQvLyBjb25zb2xlLmxvZyhmaXhlZF9pdGVtcyk7XHJcblx0XHRcdCQuZWFjaChmaXhlZF9pdGVtcyxmdW5jdGlvbihpKXtcclxuXHRcdFx0Ly8gdmFyICBvYmplY3RUb3AgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcclxuXHRcdFx0dmFyIHdpbmRvd0JvdHRvbSA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2cod2luZG93Qm90dG9tKTtcclxuXHRcdFx0Ly8g0LXRgdC70Lgg0L7QsdGK0LXQutGCINCyINC/0L7Qu9C1INC30YDQtdC90LjRjywg0YLQviDQv9C+0YHRgtC10L/QtdC90L3QviDRg9Cy0LXQu9C40YfQuNCy0LDQtdC8INC/0YDQvtC30YDQsNGH0L3QvtGB0YLRjFxyXG4gICAgICAgICAgICBpZiggd2luZG93Qm90dG9tID4gMTUwICl7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiZml4ZWRcIik7ICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBcdCQodGhpcykucmVtb3ZlQ2xhc3MoXCJmaXhlZFwiKTtcclxuXHRcdH0pO1xyXG5cdH0pXHJcblxyXG5cclxuLy9tZW51IGFwcGVhcmVuY2VcclxuXHQkKFwiLm5hdmlnYXRpb25fX2JhclwiKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0XHJcblx0XHRpZiAoJChcIi5tZW51X193cmFwXCIpLmhhc0NsYXNzKFwiYWN0aXZlXCIpKXtcclxuXHJcblx0XHRcdCQoXCIubWVudV9fd3JhcFwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHRcdFx0JChcIi5uYXZpZ2F0aW9uX19iYXJcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG5cdFx0XHQkKFwiLm5hdmlnYXRpb25fX21lbnVfaXRlbV9tb2JpbGVcIikuZWFjaChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoXCJoaWRkZW5fbWVudV9pdGVtXCIpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRlbHNle1xyXG5cdFx0XHR2YXIgaT0wO1xyXG5cdFx0XHQkKFwiLm5hdmlnYXRpb25fX21lbnVfaXRlbV9tb2JpbGVcIikuZWFjaChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGkrKztcclxuXHRcdFx0XHR2YXIgaXRlbSA9ICQodGhpcyk7XHJcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0aXRlbS5yZW1vdmVDbGFzcyhcImhpZGRlbl9tZW51X2l0ZW1cIik7XHJcblx0XHRcdFx0fSwyMDAqaSk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcclxuXHRcdFx0JChcIi5tZW51X193cmFwXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cdFx0XHQkKFwiLm5hdmlnYXRpb25fX2JhclwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcdFxyXG5cclxuXHRcdH1cclxuXHR9KTtcclxuXHJcbiQoXCIuY29tbWVudF9mb3JtX3RvZ2dsZXJcIikuY2xpY2soZnVuY3Rpb24oZSl7XHJcblx0Ly8gY29uc29sZS5sb2codGhpcyk7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCQodGhpcykubmV4dCgpLnRvZ2dsZSgpO1xyXG5cclxuXHQvLyAkLnBvc3Qoe1xyXG5cdC8vIFx0ZGF0YTogJ2hlbGxvJyxcclxuXHQvLyBcdHVybDogJy9mb3JtL2dldFBvc3RDb21tZW50Rm9ybScsXHJcblx0Ly8gXHRzdWNjZXNzOiBmdW5jdGlvbihlKXtcclxuXHQvLyBcdFx0Y29uc29sZS5sb2coXCJva1wiKTtcclxuXHQvLyBcdH0sXHJcblx0Ly8gXHRmYWlsOiBmdW5jdGlvbihlKXtcclxuXHQvLyBcdFx0Y29uc29sZS5sb2coXCJiYWRcIik7XHJcblx0Ly8gXHR9XHJcblx0Ly8gfSk7XHJcbn0pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNjcm9sbChmcm9tLHRvKXsgICAgIC8vIHNjcm9sbCB0byB0b3AvZG93blxyXG5cdCQoZnJvbSkuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdHZhciB0b3AgPSAkKHRvKS5vZmZzZXQoKS50b3A7XHJcblx0XHRcdCQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogdG9wfSwgNjAwKTtcclxuXHRcdH0pO1xyXG59O1xyXG5cclxuXHJcbi8vc2Nyb2xsc1xyXG5zY3JvbGwoJCgnLm1pZGRsZV9fYnV0dG9uJyksICQoJyNzbGlkZXInKSk7XHJcbnNjcm9sbCgkKCcuZm9ybV9fdG9wLWljb24nKSwgJCgnI2hlYWRlcicpKTtcclxuc2Nyb2xsKCQoJy5taWRkbGVfX2J1dHRvbicpLCAkKCcjc2xpZGVyJykpO1xyXG5cclxuXHJcblxyXG59KVxyXG5cclxuIC8vIG1haW4gYmxvY2sgZmxpcCBcclxuZnVuY3Rpb24gZmxpcEluaXQoYXJndW1lbnQpIHtcclxuXHQkKFwiLm1haW5fX2J1dHRvblwiKS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG5cclxuXHRcdCQoXCIubWFpbl9fYmxvY2tfd3JhcFwiKS5jc3MoJ3BlcnNwZWN0aXZlJywgJ25vbmUnKTtcclxuXHRcdFxyXG5cdFx0JCh0aGlzKS5mYWRlT3V0KCczMDAnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKFwiLm1haW5fX2Jsb2NrXCIpLmNzcyh7XHJcblx0XHRcdHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gLjNzJyxcclxuXHRcdFx0dHJhbnNmb3JtOiAncm90YXRlWSg5MGRlZyknXHJcblx0XHR9KTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdCQoXCIubWFpbl9fYmxvY2tcIikuY3NzKHtcclxuXHRcdFx0XHRkaXNwbGF5OiAnbm9uZSdcclxuXHRcdFx0fSk7XHJcblx0XHRcdCQoXCIuZm9ybV9fbG9naW5cIikuY3NzKHtcclxuXHRcdFx0XHRkaXNwbGF5OiAnYmxvY2snXHJcblx0XHRcdH0pO1xyXG5cdFx0fSwgMzAwKTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0JChcIi5mb3JtX19sb2dpblwiKS5jc3Moe1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogJ3JvdGF0ZVkoMGRlZyknXHJcblx0XHRcdH0pO1xyXG5cdFx0fSwgMzIwKTtcdFxyXG5cdH0pO1xyXG5cclxuXHQkKFwiLmZvcm1fX2xvZ2luX2JhY2tcIikuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdCQoXCIubWFpbl9fYnV0dG9uXCIpLmZhZGVJbignMzAwJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0JChcIi5mb3JtX19sb2dpblwiKS5jc3Moe1xyXG5cdFx0XHR0cmFuc2l0aW9uOiAndHJhbnNmb3JtIC4zcycsXHJcblx0XHRcdHRyYW5zZm9ybTogJ3JvdGF0ZVkoOTBkZWcpJ1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHQkKFwiLmZvcm1fX2xvZ2luXCIpLmNzcyh7XHJcblx0XHRcdFx0ZGlzcGxheTogJ25vbmUnXHJcblx0XHRcdH0pO1xyXG5cdFx0XHQkKFwiLm1haW5fX2Jsb2NrXCIpLmNzcyh7XHJcblx0XHRcdFx0ZGlzcGxheTogJ2Jsb2NrJ1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sIDMwMCk7XHJcblxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdCQoXCIubWFpbl9fYmxvY2tcIikuY3NzKHtcclxuXHRcdFx0XHR0cmFuc2Zvcm06ICdyb3RhdGVZKDBkZWcpJ1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sIDMyMCk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBpbml0TWFwKCkge1x0Ly8gZ29vZ2xlIG1hcFxyXG5cdHZhciBtYXBPcHRpb25zID0ge1xyXG4gICAgem9vbTogMTIsXHJcbiAgICBjZW50ZXI6IHtsYXQ6IDU5LjkwNDIxNjEsIGxuZzogMzAuMTcxNjkyNX0sXHJcbiAgICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxyXG4gICAgc2Nyb2xsd2hlZWw6IGZhbHNlLFxyXG4gICAgZHJhZ2dhYmxlOiBmYWxzZSxcclxuICAgIHN0eWxlczogW3tcImZlYXR1cmVUeXBlXCI6XCJhZG1pbmlzdHJhdGl2ZVwiLFwiZWxlbWVudFR5cGVcIjpcImxhYmVscy50ZXh0XCIsXCJzdHlsZXJzXCI6W3tcInNhdHVyYXRpb25cIjpcIi0xN1wifSx7XCJsaWdodG5lc3NcIjpcIjIxXCJ9LHtcImdhbW1hXCI6XCIxLjE2XCJ9LHtcIndlaWdodFwiOlwiMi4zNVwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJhZG1pbmlzdHJhdGl2ZVwiLFwiZWxlbWVudFR5cGVcIjpcImxhYmVscy50ZXh0LmZpbGxcIixcInN0eWxlcnNcIjpbe1wiY29sb3JcIjpcIiM0NDQ0NDRcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwiYWRtaW5pc3RyYXRpdmUuY291bnRyeVwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJvblwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJhZG1pbmlzdHJhdGl2ZS5wcm92aW5jZVwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJvZmZcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwiYWRtaW5pc3RyYXRpdmUubG9jYWxpdHlcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib25cIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwiYWRtaW5pc3RyYXRpdmUubmVpZ2hib3Job29kXCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcIm9uXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcImxhbmRzY2FwZVwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJnYW1tYVwiOlwiMVwifSx7XCJsaWdodG5lc3NcIjpcIjEwMFwifSx7XCJjb2xvclwiOlwiI2ZmZmZmZlwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJsYW5kc2NhcGUubmF0dXJhbFwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJvblwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJwb2lcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib2ZmXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInJvYWRcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1wic2F0dXJhdGlvblwiOi0xMDB9LHtcImxpZ2h0bmVzc1wiOjQ1fV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkLmhpZ2h3YXlcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwic2ltcGxpZmllZFwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkLmFydGVyaWFsXCIsXCJlbGVtZW50VHlwZVwiOlwibGFiZWxzLmljb25cIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib2ZmXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInRyYW5zaXRcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib2ZmXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcIndhdGVyXCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjMDA0ZDkwXCJ9LHtcInZpc2liaWxpdHlcIjpcIm9uXCJ9XX1dXHJcblx0fVxyXG4gXHRcclxuIFx0dmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIiksIG1hcE9wdGlvbnMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIG1haW5CbG9ja0FwcCgpO1xyXG5mbGlwSW5pdCgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
