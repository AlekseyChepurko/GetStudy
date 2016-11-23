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


$('.send_post_comment').click(function(e){
	e.preventDefault();
	
	var commentText = $(this).prev('.comment_text').text();
	var postId = $(this).closest('.post').attr('post-id');

	$('.post_comment_form_text').val(commentText);
	$('#form_post').val(postId);

	var form = $('.post_comment_form').parent().serialize();
	// console.log(form);
	$.post({
		data: form,
		url: "/NewPostComment",
		success: function(response){
			$(".post_comments").prepend(
				"<li class='post_comment'>"+
					"<div class='comment_wrap'>"+
						"<div class='author'>"+response["commentAuthor"]+"</div>"+
						"<div class='comment'>"+response["commentText"]+"</div>"+
					"</div>"+
				"</li>"
				);
		},
		fail: function(e){
			console.log(e);
			allert("Войдите для того, чтобы иметь возможность комментировать записи");
		},
	});

});

$('.send_comment_feedback').click(function(e){
	e.preventDefault();
	
	var commentText = $(this).prev('.comment_text').text();
	var commentId = $(this).closest('.post_comment').attr('comment-id');
	var insertPoint = $(this).closest(".comment_feedback_wrap");

	$('.comment_comment_form_text').val(commentText);
	$('#form_parentComment').val(commentId);

	var form = $('.comment_comment_form').parent().serialize();
	console.log(form);
	$.post({
		data: form,
		url: "/NewCommentComment",
		success: function(response){
			// console.log($(this).closest(".post_comment"));
			insertPoint.after(
				"<ul class='post_comments'>"+
					"<li class='post_comment'>"+
						"<div class='comment_wrap'>"+
							"<div class='author'>"+response["commentAuthor"]+"</div>"+
							"<div class='comment'>"+response["commentText"]+"</div>"+
						"</div>"+
					"</li>"+
				"</ul>"
				);
		},
		fail: function(e){
			console.log(e);
			allert("Войдите для того, чтобы иметь возможность комментировать записи");
		},
	});

});

})

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1x0XHRcclxuXHJcblx0dmFyICBvYmplY3RUb3AgPSAkKFwiLm5hdmlnYXRpb25fX21lbnVcIikub2Zmc2V0KCkudG9wO1xyXG4vL3Njcm9sbCBhcHBlYXJlbmNlXHJcbi8vINC00LvRjyDQv9C+0Y/QstC70LXQvdC40Y8g0Y3Qu9C10LzQtdC90YLQsCDQvdC10L7QsdGF0L7QtNC40LzQviDQuNC30L3QsNGH0LDQu9GM0L3QviDQt9Cw0LTQsNGC0Ywg0LXQvNGDINC60LvQsNGB0YEgaGlkZVxyXG5cdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCl7IC8v0YHRgNCw0LHQsNGC0YvQstCw0LXRgiDQv9GA0Lgg0LrQsNC20LTQvtC8INGB0LrRgNC+0LvQu9C1XHJcblx0XHQvLyBoaWRlIC0g0LrQu9Cw0YHRgSDRgdC60YDRi9GC0YvRhSDQuNC30L3QsNGH0LDQu9GM0L3QviDRjdC70LXQvNC10L3RgtC+0LvQsiAtINGDINC90LjRhSDQv9GA0L7Qt9GA0LDRh9C90L7RgdGC0Ywg0L3QsCDQvdGD0LvQtVxyXG5cdFx0dmFyIGZpeGVkX2l0ZW1zID0gWyQoXCIubmF2aWdhdGlvbl9fbWVudVwiKV07IFxyXG5cdFx0Ly8gY29uc29sZS5sb2coZml4ZWRfaXRlbXMpO1xyXG5cdFx0XHQkLmVhY2goZml4ZWRfaXRlbXMsZnVuY3Rpb24oaSl7XHJcblx0XHRcdC8vIHZhciAgb2JqZWN0VG9wID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XHJcblx0XHRcdHZhciB3aW5kb3dCb3R0b20gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKHdpbmRvd0JvdHRvbSk7XHJcblx0XHRcdC8vINC10YHQu9C4INC+0LHRitC10LrRgiDQsiDQv9C+0LvQtSDQt9GA0LXQvdC40Y8sINGC0L4g0L/QvtGB0YLQtdC/0LXQvdC90L4g0YPQstC10LvQuNGH0LjQstCw0LXQvCDQv9GA0L7Qt9GA0LDRh9C90L7RgdGC0YxcclxuICAgICAgICAgICAgaWYoIHdpbmRvd0JvdHRvbSA+IDE1MCApe1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImZpeGVkXCIpOyAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgXHQkKHRoaXMpLnJlbW92ZUNsYXNzKFwiZml4ZWRcIik7XHJcblx0XHR9KTtcclxuXHR9KVxyXG5cclxuXHJcbi8vbWVudSBhcHBlYXJlbmNlXHJcblx0JChcIi5uYXZpZ2F0aW9uX19iYXJcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdFxyXG5cdFx0aWYgKCQoXCIubWVudV9fd3JhcFwiKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSl7XHJcblxyXG5cdFx0XHQkKFwiLm1lbnVfX3dyYXBcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcblx0XHRcdCQoXCIubmF2aWdhdGlvbl9fYmFyXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuXHRcdFx0JChcIi5uYXZpZ2F0aW9uX19tZW51X2l0ZW1fbW9iaWxlXCIpLmVhY2goZnVuY3Rpb24oKXtcclxuXHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKFwiaGlkZGVuX21lbnVfaXRlbVwiKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0dmFyIGk9MDtcclxuXHRcdFx0JChcIi5uYXZpZ2F0aW9uX19tZW51X2l0ZW1fbW9iaWxlXCIpLmVhY2goZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRpKys7XHJcblx0XHRcdFx0dmFyIGl0ZW0gPSAkKHRoaXMpO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdGl0ZW0ucmVtb3ZlQ2xhc3MoXCJoaWRkZW5fbWVudV9pdGVtXCIpO1xyXG5cdFx0XHRcdH0sMjAwKmkpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHJcblx0XHRcdCQoXCIubWVudV9fd3JhcFwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHRcdFx0JChcIi5uYXZpZ2F0aW9uX19iYXJcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHRcclxuXHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG4kKFwiLmNvbW1lbnRfZm9ybV90b2dnbGVyXCIpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHQkKHRoaXMpLm5leHQoKS50b2dnbGUoKTtcclxuXHJcblx0Ly8gJC5wb3N0KHtcclxuXHQvLyBcdGRhdGE6ICdoZWxsbycsXHJcblx0Ly8gXHR1cmw6ICcvZm9ybS9nZXRQb3N0Q29tbWVudEZvcm0nLFxyXG5cdC8vIFx0c3VjY2VzczogZnVuY3Rpb24oZSl7XHJcblx0Ly8gXHRcdGNvbnNvbGUubG9nKFwib2tcIik7XHJcblx0Ly8gXHR9LFxyXG5cdC8vIFx0ZmFpbDogZnVuY3Rpb24oZSl7XHJcblx0Ly8gXHRcdGNvbnNvbGUubG9nKFwiYmFkXCIpO1xyXG5cdC8vIFx0fVxyXG5cdC8vIH0pO1xyXG59KTtcclxuXHJcblxyXG5mdW5jdGlvbiBzY3JvbGwoZnJvbSx0byl7ICAgICAvLyBzY3JvbGwgdG8gdG9wL2Rvd25cclxuXHQkKGZyb20pLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHR2YXIgdG9wID0gJCh0bykub2Zmc2V0KCkudG9wO1xyXG5cdFx0XHQkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IHRvcH0sIDYwMCk7XHJcblx0XHR9KTtcclxufTtcclxuXHJcblxyXG4kKCcuc2VuZF9wb3N0X2NvbW1lbnQnKS5jbGljayhmdW5jdGlvbihlKXtcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHJcblx0dmFyIGNvbW1lbnRUZXh0ID0gJCh0aGlzKS5wcmV2KCcuY29tbWVudF90ZXh0JykudGV4dCgpO1xyXG5cdHZhciBwb3N0SWQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5wb3N0JykuYXR0cigncG9zdC1pZCcpO1xyXG5cclxuXHQkKCcucG9zdF9jb21tZW50X2Zvcm1fdGV4dCcpLnZhbChjb21tZW50VGV4dCk7XHJcblx0JCgnI2Zvcm1fcG9zdCcpLnZhbChwb3N0SWQpO1xyXG5cclxuXHR2YXIgZm9ybSA9ICQoJy5wb3N0X2NvbW1lbnRfZm9ybScpLnBhcmVudCgpLnNlcmlhbGl6ZSgpO1xyXG5cdC8vIGNvbnNvbGUubG9nKGZvcm0pO1xyXG5cdCQucG9zdCh7XHJcblx0XHRkYXRhOiBmb3JtLFxyXG5cdFx0dXJsOiBcIi9OZXdQb3N0Q29tbWVudFwiLFxyXG5cdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG5cdFx0XHQkKFwiLnBvc3RfY29tbWVudHNcIikucHJlcGVuZChcclxuXHRcdFx0XHRcIjxsaSBjbGFzcz0ncG9zdF9jb21tZW50Jz5cIitcclxuXHRcdFx0XHRcdFwiPGRpdiBjbGFzcz0nY29tbWVudF93cmFwJz5cIitcclxuXHRcdFx0XHRcdFx0XCI8ZGl2IGNsYXNzPSdhdXRob3InPlwiK3Jlc3BvbnNlW1wiY29tbWVudEF1dGhvclwiXStcIjwvZGl2PlwiK1xyXG5cdFx0XHRcdFx0XHRcIjxkaXYgY2xhc3M9J2NvbW1lbnQnPlwiK3Jlc3BvbnNlW1wiY29tbWVudFRleHRcIl0rXCI8L2Rpdj5cIitcclxuXHRcdFx0XHRcdFwiPC9kaXY+XCIrXHJcblx0XHRcdFx0XCI8L2xpPlwiXHJcblx0XHRcdFx0KTtcclxuXHRcdH0sXHJcblx0XHRmYWlsOiBmdW5jdGlvbihlKXtcclxuXHRcdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHRcdGFsbGVydChcItCS0L7QudC00LjRgtC1INC00LvRjyDRgtC+0LPQviwg0YfRgtC+0LHRiyDQuNC80LXRgtGMINCy0L7Qt9C80L7QttC90L7RgdGC0Ywg0LrQvtC80LzQtdC90YLQuNGA0L7QstCw0YLRjCDQt9Cw0L/QuNGB0LhcIik7XHJcblx0XHR9LFxyXG5cdH0pO1xyXG5cclxufSk7XHJcblxyXG4kKCcuc2VuZF9jb21tZW50X2ZlZWRiYWNrJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFxyXG5cdHZhciBjb21tZW50VGV4dCA9ICQodGhpcykucHJldignLmNvbW1lbnRfdGV4dCcpLnRleHQoKTtcclxuXHR2YXIgY29tbWVudElkID0gJCh0aGlzKS5jbG9zZXN0KCcucG9zdF9jb21tZW50JykuYXR0cignY29tbWVudC1pZCcpO1xyXG5cdHZhciBpbnNlcnRQb2ludCA9ICQodGhpcykuY2xvc2VzdChcIi5jb21tZW50X2ZlZWRiYWNrX3dyYXBcIik7XHJcblxyXG5cdCQoJy5jb21tZW50X2NvbW1lbnRfZm9ybV90ZXh0JykudmFsKGNvbW1lbnRUZXh0KTtcclxuXHQkKCcjZm9ybV9wYXJlbnRDb21tZW50JykudmFsKGNvbW1lbnRJZCk7XHJcblxyXG5cdHZhciBmb3JtID0gJCgnLmNvbW1lbnRfY29tbWVudF9mb3JtJykucGFyZW50KCkuc2VyaWFsaXplKCk7XHJcblx0Y29uc29sZS5sb2coZm9ybSk7XHJcblx0JC5wb3N0KHtcclxuXHRcdGRhdGE6IGZvcm0sXHJcblx0XHR1cmw6IFwiL05ld0NvbW1lbnRDb21tZW50XCIsXHJcblx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCQodGhpcykuY2xvc2VzdChcIi5wb3N0X2NvbW1lbnRcIikpO1xyXG5cdFx0XHRpbnNlcnRQb2ludC5hZnRlcihcclxuXHRcdFx0XHRcIjx1bCBjbGFzcz0ncG9zdF9jb21tZW50cyc+XCIrXHJcblx0XHRcdFx0XHRcIjxsaSBjbGFzcz0ncG9zdF9jb21tZW50Jz5cIitcclxuXHRcdFx0XHRcdFx0XCI8ZGl2IGNsYXNzPSdjb21tZW50X3dyYXAnPlwiK1xyXG5cdFx0XHRcdFx0XHRcdFwiPGRpdiBjbGFzcz0nYXV0aG9yJz5cIityZXNwb25zZVtcImNvbW1lbnRBdXRob3JcIl0rXCI8L2Rpdj5cIitcclxuXHRcdFx0XHRcdFx0XHRcIjxkaXYgY2xhc3M9J2NvbW1lbnQnPlwiK3Jlc3BvbnNlW1wiY29tbWVudFRleHRcIl0rXCI8L2Rpdj5cIitcclxuXHRcdFx0XHRcdFx0XCI8L2Rpdj5cIitcclxuXHRcdFx0XHRcdFwiPC9saT5cIitcclxuXHRcdFx0XHRcIjwvdWw+XCJcclxuXHRcdFx0XHQpO1xyXG5cdFx0fSxcclxuXHRcdGZhaWw6IGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdFx0YWxsZXJ0KFwi0JLQvtC50LTQuNGC0LUg0LTQu9GPINGC0L7Qs9C+LCDRh9GC0L7QsdGLINC40LzQtdGC0Ywg0LLQvtC30LzQvtC20L3QvtGB0YLRjCDQutC+0LzQvNC10L3RgtC40YDQvtCy0LDRgtGMINC30LDQv9C40YHQuFwiKTtcclxuXHRcdH0sXHJcblx0fSk7XHJcblxyXG59KTtcclxuXHJcbn0pXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
