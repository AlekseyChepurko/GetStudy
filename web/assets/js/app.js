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
			console.log(windowBottom);
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
				$(this).addClass("hidden");
				});

		}

		else{
			var i=0;
			$(".navigation__menu_item_mobile").each(function(){
				i++;
				var item = $(this);
				setTimeout(function(){
					item.removeClass("hidden");
				},200*i);
				});

			
			$(".menu__wrap").addClass("active");
			$(".navigation__bar").addClass("active");	

		}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcdFx0XHJcblxyXG5cdHZhciAgb2JqZWN0VG9wID0gJChcIi5uYXZpZ2F0aW9uX19tZW51XCIpLm9mZnNldCgpLnRvcDtcclxuLy9zY3JvbGwgYXBwZWFyZW5jZVxyXG4vLyDQtNC70Y8g0L/QvtGP0LLQu9C10L3QuNGPINGN0LvQtdC80LXQvdGC0LAg0L3QtdC+0LHRhdC+0LTQuNC80L4g0LjQt9C90LDRh9Cw0LvRjNC90L4g0LfQsNC00LDRgtGMINC10LzRgyDQutC70LDRgdGBIGhpZGVcclxuXHQkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpeyAvL9GB0YDQsNCx0LDRgtGL0LLQsNC10YIg0L/RgNC4INC60LDQttC00L7QvCDRgdC60YDQvtC70LvQtVxyXG5cdFx0Ly8gaGlkZSAtINC60LvQsNGB0YEg0YHQutGA0YvRgtGL0YUg0LjQt9C90LDRh9Cw0LvRjNC90L4g0Y3Qu9C10LzQtdC90YLQvtC70LIgLSDRgyDQvdC40YUg0L/RgNC+0LfRgNCw0YfQvdC+0YHRgtGMINC90LAg0L3Rg9C70LVcclxuXHRcdHZhciBmaXhlZF9pdGVtcyA9IFskKFwiLm5hdmlnYXRpb25fX21lbnVcIildOyBcclxuXHRcdC8vIGNvbnNvbGUubG9nKGZpeGVkX2l0ZW1zKTtcclxuXHRcdFx0JC5lYWNoKGZpeGVkX2l0ZW1zLGZ1bmN0aW9uKGkpe1xyXG5cdFx0XHQvLyB2YXIgIG9iamVjdFRvcCA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xyXG5cdFx0XHR2YXIgd2luZG93Qm90dG9tID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyh3aW5kb3dCb3R0b20pO1xyXG5cdFx0XHQvLyDQtdGB0LvQuCDQvtCx0YrQtdC60YIg0LIg0L/QvtC70LUg0LfRgNC10L3QuNGPLCDRgtC+INC/0L7RgdGC0LXQv9C10L3QvdC+INGD0LLQtdC70LjRh9C40LLQsNC10Lwg0L/RgNC+0LfRgNCw0YfQvdC+0YHRgtGMXHJcbiAgICAgICAgICAgIGlmKCB3aW5kb3dCb3R0b20gPiAxNTAgKXtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJmaXhlZFwiKTsgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIFx0JCh0aGlzKS5yZW1vdmVDbGFzcyhcImZpeGVkXCIpO1xyXG5cdFx0fSk7XHJcblx0fSlcclxuXHJcblxyXG4vL21lbnUgYXBwZWFyZW5jZVxyXG5cdCQoXCIubmF2aWdhdGlvbl9fYmFyXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRcclxuXHRcdGlmICgkKFwiLm1lbnVfX3dyYXBcIikuaGFzQ2xhc3MoXCJhY3RpdmVcIikpe1xyXG5cclxuXHRcdFx0JChcIi5tZW51X193cmFwXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG5cdFx0XHQkKFwiLm5hdmlnYXRpb25fX2JhclwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcblx0XHRcdCQoXCIubmF2aWdhdGlvbl9fbWVudV9pdGVtX21vYmlsZVwiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0dmFyIGk9MDtcclxuXHRcdFx0JChcIi5uYXZpZ2F0aW9uX19tZW51X2l0ZW1fbW9iaWxlXCIpLmVhY2goZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRpKys7XHJcblx0XHRcdFx0dmFyIGl0ZW0gPSAkKHRoaXMpO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdGl0ZW0ucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcblx0XHRcdFx0fSwyMDAqaSk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcclxuXHRcdFx0JChcIi5tZW51X193cmFwXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cdFx0XHQkKFwiLm5hdmlnYXRpb25fX2JhclwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcdFxyXG5cclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblxyXG5mdW5jdGlvbiBzY3JvbGwoZnJvbSx0byl7ICAgICAvLyBzY3JvbGwgdG8gdG9wL2Rvd25cclxuXHQkKGZyb20pLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHR2YXIgdG9wID0gJCh0bykub2Zmc2V0KCkudG9wO1xyXG5cdFx0XHQkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IHRvcH0sIDYwMCk7XHJcblx0XHR9KTtcclxufTtcclxuXHJcblxyXG4vL3Njcm9sbHNcclxuc2Nyb2xsKCQoJy5taWRkbGVfX2J1dHRvbicpLCAkKCcjc2xpZGVyJykpO1xyXG5zY3JvbGwoJCgnLmZvcm1fX3RvcC1pY29uJyksICQoJyNoZWFkZXInKSk7XHJcbnNjcm9sbCgkKCcubWlkZGxlX19idXR0b24nKSwgJCgnI3NsaWRlcicpKTtcclxuXHJcblxyXG5cclxufSlcclxuXHJcbiAvLyBtYWluIGJsb2NrIGZsaXAgXHJcbmZ1bmN0aW9uIGZsaXBJbml0KGFyZ3VtZW50KSB7XHJcblx0JChcIi5tYWluX19idXR0b25cIikuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcblx0XHQkKFwiLm1haW5fX2Jsb2NrX3dyYXBcIikuY3NzKCdwZXJzcGVjdGl2ZScsICdub25lJyk7XHJcblx0XHRcclxuXHRcdCQodGhpcykuZmFkZU91dCgnMzAwJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0JChcIi5tYWluX19ibG9ja1wiKS5jc3Moe1xyXG5cdFx0XHR0cmFuc2l0aW9uOiAndHJhbnNmb3JtIC4zcycsXHJcblx0XHRcdHRyYW5zZm9ybTogJ3JvdGF0ZVkoOTBkZWcpJ1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHQkKFwiLm1haW5fX2Jsb2NrXCIpLmNzcyh7XHJcblx0XHRcdFx0ZGlzcGxheTogJ25vbmUnXHJcblx0XHRcdH0pO1xyXG5cdFx0XHQkKFwiLmZvcm1fX2xvZ2luXCIpLmNzcyh7XHJcblx0XHRcdFx0ZGlzcGxheTogJ2Jsb2NrJ1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sIDMwMCk7XHJcblxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdCQoXCIuZm9ybV9fbG9naW5cIikuY3NzKHtcclxuXHRcdFx0XHR0cmFuc2Zvcm06ICdyb3RhdGVZKDBkZWcpJ1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sIDMyMCk7XHRcclxuXHR9KTtcclxuXHJcblx0JChcIi5mb3JtX19sb2dpbl9iYWNrXCIpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHQkKFwiLm1haW5fX2J1dHRvblwiKS5mYWRlSW4oJzMwMCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdH0pO1xyXG5cclxuXHRcdCQoXCIuZm9ybV9fbG9naW5cIikuY3NzKHtcclxuXHRcdFx0dHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAuM3MnLFxyXG5cdFx0XHR0cmFuc2Zvcm06ICdyb3RhdGVZKDkwZGVnKSdcclxuXHRcdH0pO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0JChcIi5mb3JtX19sb2dpblwiKS5jc3Moe1xyXG5cdFx0XHRcdGRpc3BsYXk6ICdub25lJ1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0JChcIi5tYWluX19ibG9ja1wiKS5jc3Moe1xyXG5cdFx0XHRcdGRpc3BsYXk6ICdibG9jaydcclxuXHRcdFx0fSk7XHJcblx0XHR9LCAzMDApO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHQkKFwiLm1haW5fX2Jsb2NrXCIpLmNzcyh7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiAncm90YXRlWSgwZGVnKSdcclxuXHRcdFx0fSk7XHJcblx0XHR9LCAzMjApO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcdC8vIGdvb2dsZSBtYXBcclxuXHR2YXIgbWFwT3B0aW9ucyA9IHtcclxuICAgIHpvb206IDEyLFxyXG4gICAgY2VudGVyOiB7bGF0OiA1OS45MDQyMTYxLCBsbmc6IDMwLjE3MTY5MjV9LFxyXG4gICAgZGlzYWJsZURlZmF1bHRVSTogdHJ1ZSxcclxuICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcclxuICAgIGRyYWdnYWJsZTogZmFsc2UsXHJcbiAgICBzdHlsZXM6IFt7XCJmZWF0dXJlVHlwZVwiOlwiYWRtaW5pc3RyYXRpdmVcIixcImVsZW1lbnRUeXBlXCI6XCJsYWJlbHMudGV4dFwiLFwic3R5bGVyc1wiOlt7XCJzYXR1cmF0aW9uXCI6XCItMTdcIn0se1wibGlnaHRuZXNzXCI6XCIyMVwifSx7XCJnYW1tYVwiOlwiMS4xNlwifSx7XCJ3ZWlnaHRcIjpcIjIuMzVcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwiYWRtaW5pc3RyYXRpdmVcIixcImVsZW1lbnRUeXBlXCI6XCJsYWJlbHMudGV4dC5maWxsXCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjNDQ0NDQ0XCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcImFkbWluaXN0cmF0aXZlLmNvdW50cnlcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib25cIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwiYWRtaW5pc3RyYXRpdmUucHJvdmluY2VcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib2ZmXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcImFkbWluaXN0cmF0aXZlLmxvY2FsaXR5XCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcIm9uXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcImFkbWluaXN0cmF0aXZlLm5laWdoYm9yaG9vZFwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJvblwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJsYW5kc2NhcGVcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1wiZ2FtbWFcIjpcIjFcIn0se1wibGlnaHRuZXNzXCI6XCIxMDBcIn0se1wiY29sb3JcIjpcIiNmZmZmZmZcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwibGFuZHNjYXBlLm5hdHVyYWxcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib25cIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicG9pXCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcIm9mZlwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkXCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcInNhdHVyYXRpb25cIjotMTAwfSx7XCJsaWdodG5lc3NcIjo0NX1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicm9hZC5oaWdod2F5XCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcInNpbXBsaWZpZWRcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicm9hZC5hcnRlcmlhbFwiLFwiZWxlbWVudFR5cGVcIjpcImxhYmVscy5pY29uXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcIm9mZlwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJ0cmFuc2l0XCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcIm9mZlwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJ3YXRlclwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJjb2xvclwiOlwiIzAwNGQ5MFwifSx7XCJ2aXNpYmlsaXR5XCI6XCJvblwifV19XVxyXG5cdH1cclxuIFx0XHJcbiBcdHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpLCBtYXBPcHRpb25zKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBtYWluQmxvY2tBcHAoKTtcclxuZmxpcEluaXQoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
