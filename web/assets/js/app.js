$(document).ready(function () {		
//scroll appearence
// для появления элемента необходимо изначально задать ему класс hide
	$(window).scroll(function (){ //срабатывает при каждом скролле
		// hide - класс скрытых изначально элементолв - у них прозрачность на нуле
		$(".hide").each(function(i){
			var  objectBottom = $(this).offset().top + $(this).outerHeight()/3;
			var windowBottom = $(window).scrollTop() + $(window).height();

			// если объект в поле зрения, то постепенно увеличиваем прозрачность
            if( windowBottom > objectBottom ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHRcdFxyXG4vL3Njcm9sbCBhcHBlYXJlbmNlXHJcbi8vINC00LvRjyDQv9C+0Y/QstC70LXQvdC40Y8g0Y3Qu9C10LzQtdC90YLQsCDQvdC10L7QsdGF0L7QtNC40LzQviDQuNC30L3QsNGH0LDQu9GM0L3QviDQt9Cw0LTQsNGC0Ywg0LXQvNGDINC60LvQsNGB0YEgaGlkZVxyXG5cdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCl7IC8v0YHRgNCw0LHQsNGC0YvQstCw0LXRgiDQv9GA0Lgg0LrQsNC20LTQvtC8INGB0LrRgNC+0LvQu9C1XHJcblx0XHQvLyBoaWRlIC0g0LrQu9Cw0YHRgSDRgdC60YDRi9GC0YvRhSDQuNC30L3QsNGH0LDQu9GM0L3QviDRjdC70LXQvNC10L3RgtC+0LvQsiAtINGDINC90LjRhSDQv9GA0L7Qt9GA0LDRh9C90L7RgdGC0Ywg0L3QsCDQvdGD0LvQtVxyXG5cdFx0JChcIi5oaWRlXCIpLmVhY2goZnVuY3Rpb24oaSl7XHJcblx0XHRcdHZhciAgb2JqZWN0Qm90dG9tID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgKyAkKHRoaXMpLm91dGVySGVpZ2h0KCkvMztcclxuXHRcdFx0dmFyIHdpbmRvd0JvdHRvbSA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKTtcclxuXHJcblx0XHRcdC8vINC10YHQu9C4INC+0LHRitC10LrRgiDQsiDQv9C+0LvQtSDQt9GA0LXQvdC40Y8sINGC0L4g0L/QvtGB0YLQtdC/0LXQvdC90L4g0YPQstC10LvQuNGH0LjQstCw0LXQvCDQv9GA0L7Qt9GA0LDRh9C90L7RgdGC0YxcclxuICAgICAgICAgICAgaWYoIHdpbmRvd0JvdHRvbSA+IG9iamVjdEJvdHRvbSApe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFuaW1hdGUoeydvcGFjaXR5JzonMSd9LDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHRcdH0pO1xyXG5cdH0pXHJcblxyXG5cclxuLy9tZW51IGFwcGVhcmVuY2VcclxuXHQkKFwiLm5hdmlnYXRpb25fX2JhclwiKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0XHJcblx0XHRpZiAoJChcIi5tZW51X193cmFwXCIpLmhhc0NsYXNzKFwiYWN0aXZlXCIpKXtcclxuXHJcblx0XHRcdCQoXCIubWVudV9fd3JhcFwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHRcdFx0JChcIi5uYXZpZ2F0aW9uX19iYXJcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG5cdFx0XHQkKFwiLm5hdmlnYXRpb25fX21lbnVfaXRlbV9tb2JpbGVcIikuZWFjaChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGVsc2V7XHJcblx0XHRcdHZhciBpPTA7XHJcblx0XHRcdCQoXCIubmF2aWdhdGlvbl9fbWVudV9pdGVtX21vYmlsZVwiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0aSsrO1xyXG5cdFx0XHRcdHZhciBpdGVtID0gJCh0aGlzKTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRpdGVtLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xyXG5cdFx0XHRcdH0sMjAwKmkpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHJcblx0XHRcdCQoXCIubWVudV9fd3JhcFwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHRcdFx0JChcIi5uYXZpZ2F0aW9uX19iYXJcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHRcclxuXHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cclxuZnVuY3Rpb24gc2Nyb2xsKGZyb20sdG8peyAgICAgLy8gc2Nyb2xsIHRvIHRvcC9kb3duXHJcblx0JChmcm9tKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0dmFyIHRvcCA9ICQodG8pLm9mZnNldCgpLnRvcDtcclxuXHRcdFx0JCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiB0b3B9LCA2MDApO1xyXG5cdFx0fSk7XHJcbn07XHJcblxyXG5cclxuLy9zY3JvbGxzXHJcbnNjcm9sbCgkKCcubWlkZGxlX19idXR0b24nKSwgJCgnI3NsaWRlcicpKTtcclxuc2Nyb2xsKCQoJy5mb3JtX190b3AtaWNvbicpLCAkKCcjaGVhZGVyJykpO1xyXG5zY3JvbGwoJCgnLm1pZGRsZV9fYnV0dG9uJyksICQoJyNzbGlkZXInKSk7XHJcblxyXG5cclxuXHJcbn0pXHJcblxyXG4gLy8gbWFpbiBibG9jayBmbGlwIFxyXG5mdW5jdGlvbiBmbGlwSW5pdChhcmd1bWVudCkge1xyXG5cdCQoXCIubWFpbl9fYnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG5cdFx0JChcIi5tYWluX19ibG9ja193cmFwXCIpLmNzcygncGVyc3BlY3RpdmUnLCAnbm9uZScpO1xyXG5cdFx0XHJcblx0XHQkKHRoaXMpLmZhZGVPdXQoJzMwMCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdH0pO1xyXG5cclxuXHRcdCQoXCIubWFpbl9fYmxvY2tcIikuY3NzKHtcclxuXHRcdFx0dHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAuM3MnLFxyXG5cdFx0XHR0cmFuc2Zvcm06ICdyb3RhdGVZKDkwZGVnKSdcclxuXHRcdH0pO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0JChcIi5tYWluX19ibG9ja1wiKS5jc3Moe1xyXG5cdFx0XHRcdGRpc3BsYXk6ICdub25lJ1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0JChcIi5mb3JtX19sb2dpblwiKS5jc3Moe1xyXG5cdFx0XHRcdGRpc3BsYXk6ICdibG9jaydcclxuXHRcdFx0fSk7XHJcblx0XHR9LCAzMDApO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHQkKFwiLmZvcm1fX2xvZ2luXCIpLmNzcyh7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiAncm90YXRlWSgwZGVnKSdcclxuXHRcdFx0fSk7XHJcblx0XHR9LCAzMjApO1x0XHJcblx0fSk7XHJcblxyXG5cdCQoXCIuZm9ybV9fbG9naW5fYmFja1wiKS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG5cdFx0JChcIi5tYWluX19idXR0b25cIikuZmFkZUluKCczMDAnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKFwiLmZvcm1fX2xvZ2luXCIpLmNzcyh7XHJcblx0XHRcdHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gLjNzJyxcclxuXHRcdFx0dHJhbnNmb3JtOiAncm90YXRlWSg5MGRlZyknXHJcblx0XHR9KTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdCQoXCIuZm9ybV9fbG9naW5cIikuY3NzKHtcclxuXHRcdFx0XHRkaXNwbGF5OiAnbm9uZSdcclxuXHRcdFx0fSk7XHJcblx0XHRcdCQoXCIubWFpbl9fYmxvY2tcIikuY3NzKHtcclxuXHRcdFx0XHRkaXNwbGF5OiAnYmxvY2snXHJcblx0XHRcdH0pO1xyXG5cdFx0fSwgMzAwKTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0JChcIi5tYWluX19ibG9ja1wiKS5jc3Moe1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogJ3JvdGF0ZVkoMGRlZyknXHJcblx0XHRcdH0pO1xyXG5cdFx0fSwgMzIwKTtcclxuXHR9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGluaXRNYXAoKSB7XHQvLyBnb29nbGUgbWFwXHJcblx0dmFyIG1hcE9wdGlvbnMgPSB7XHJcbiAgICB6b29tOiAxMixcclxuICAgIGNlbnRlcjoge2xhdDogNTkuOTA0MjE2MSwgbG5nOiAzMC4xNzE2OTI1fSxcclxuICAgIGRpc2FibGVEZWZhdWx0VUk6IHRydWUsXHJcbiAgICBzY3JvbGx3aGVlbDogZmFsc2UsXHJcbiAgICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4gICAgc3R5bGVzOiBbe1wiZmVhdHVyZVR5cGVcIjpcImFkbWluaXN0cmF0aXZlXCIsXCJlbGVtZW50VHlwZVwiOlwibGFiZWxzLnRleHRcIixcInN0eWxlcnNcIjpbe1wic2F0dXJhdGlvblwiOlwiLTE3XCJ9LHtcImxpZ2h0bmVzc1wiOlwiMjFcIn0se1wiZ2FtbWFcIjpcIjEuMTZcIn0se1wid2VpZ2h0XCI6XCIyLjM1XCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcImFkbWluaXN0cmF0aXZlXCIsXCJlbGVtZW50VHlwZVwiOlwibGFiZWxzLnRleHQuZmlsbFwiLFwic3R5bGVyc1wiOlt7XCJjb2xvclwiOlwiIzQ0NDQ0NFwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJhZG1pbmlzdHJhdGl2ZS5jb3VudHJ5XCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcIm9uXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcImFkbWluaXN0cmF0aXZlLnByb3ZpbmNlXCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcIm9mZlwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJhZG1pbmlzdHJhdGl2ZS5sb2NhbGl0eVwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJvblwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJhZG1pbmlzdHJhdGl2ZS5uZWlnaGJvcmhvb2RcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib25cIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwibGFuZHNjYXBlXCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcImdhbW1hXCI6XCIxXCJ9LHtcImxpZ2h0bmVzc1wiOlwiMTAwXCJ9LHtcImNvbG9yXCI6XCIjZmZmZmZmXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcImxhbmRzY2FwZS5uYXR1cmFsXCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcIm9uXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInBvaVwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJvZmZcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicm9hZFwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJzYXR1cmF0aW9uXCI6LTEwMH0se1wibGlnaHRuZXNzXCI6NDV9XX0se1wiZmVhdHVyZVR5cGVcIjpcInJvYWQuaGlnaHdheVwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJzaW1wbGlmaWVkXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInJvYWQuYXJ0ZXJpYWxcIixcImVsZW1lbnRUeXBlXCI6XCJsYWJlbHMuaWNvblwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJvZmZcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwidHJhbnNpdFwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJvZmZcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwid2F0ZXJcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1wiY29sb3JcIjpcIiMwMDRkOTBcIn0se1widmlzaWJpbGl0eVwiOlwib25cIn1dfV1cclxuXHR9XHJcbiBcdFxyXG4gXHR2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKSwgbWFwT3B0aW9ucyk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gbWFpbkJsb2NrQXBwKCk7XHJcbmZsaXBJbml0KCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
