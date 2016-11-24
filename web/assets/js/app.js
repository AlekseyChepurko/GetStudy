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

	$.post({
		data: form,
		url: "/NewCommentComment",
		success: function(response){
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcdFx0XHJcblxyXG5cdHZhciAgb2JqZWN0VG9wID0gJChcIi5uYXZpZ2F0aW9uX19tZW51XCIpLm9mZnNldCgpLnRvcDtcclxuLy9zY3JvbGwgYXBwZWFyZW5jZVxyXG4vLyDQtNC70Y8g0L/QvtGP0LLQu9C10L3QuNGPINGN0LvQtdC80LXQvdGC0LAg0L3QtdC+0LHRhdC+0LTQuNC80L4g0LjQt9C90LDRh9Cw0LvRjNC90L4g0LfQsNC00LDRgtGMINC10LzRgyDQutC70LDRgdGBIGhpZGVcclxuXHQkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpeyAvL9GB0YDQsNCx0LDRgtGL0LLQsNC10YIg0L/RgNC4INC60LDQttC00L7QvCDRgdC60YDQvtC70LvQtVxyXG5cdFx0Ly8gaGlkZSAtINC60LvQsNGB0YEg0YHQutGA0YvRgtGL0YUg0LjQt9C90LDRh9Cw0LvRjNC90L4g0Y3Qu9C10LzQtdC90YLQvtC70LIgLSDRgyDQvdC40YUg0L/RgNC+0LfRgNCw0YfQvdC+0YHRgtGMINC90LAg0L3Rg9C70LVcclxuXHRcdHZhciBmaXhlZF9pdGVtcyA9IFskKFwiLm5hdmlnYXRpb25fX21lbnVcIildOyBcclxuXHRcdC8vIGNvbnNvbGUubG9nKGZpeGVkX2l0ZW1zKTtcclxuXHRcdFx0JC5lYWNoKGZpeGVkX2l0ZW1zLGZ1bmN0aW9uKGkpe1xyXG5cdFx0XHQvLyB2YXIgIG9iamVjdFRvcCA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xyXG5cdFx0XHR2YXIgd2luZG93Qm90dG9tID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyh3aW5kb3dCb3R0b20pO1xyXG5cdFx0XHQvLyDQtdGB0LvQuCDQvtCx0YrQtdC60YIg0LIg0L/QvtC70LUg0LfRgNC10L3QuNGPLCDRgtC+INC/0L7RgdGC0LXQv9C10L3QvdC+INGD0LLQtdC70LjRh9C40LLQsNC10Lwg0L/RgNC+0LfRgNCw0YfQvdC+0YHRgtGMXHJcbiAgICAgICAgICAgIGlmKCB3aW5kb3dCb3R0b20gPiAxNTAgKXtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJmaXhlZFwiKTsgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIFx0JCh0aGlzKS5yZW1vdmVDbGFzcyhcImZpeGVkXCIpO1xyXG5cdFx0fSk7XHJcblx0fSlcclxuXHJcblxyXG4vL21lbnUgYXBwZWFyZW5jZVxyXG5cdCQoXCIubmF2aWdhdGlvbl9fYmFyXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRcclxuXHRcdGlmICgkKFwiLm1lbnVfX3dyYXBcIikuaGFzQ2xhc3MoXCJhY3RpdmVcIikpe1xyXG5cclxuXHRcdFx0JChcIi5tZW51X193cmFwXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG5cdFx0XHQkKFwiLm5hdmlnYXRpb25fX2JhclwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcblx0XHRcdCQoXCIubmF2aWdhdGlvbl9fbWVudV9pdGVtX21vYmlsZVwiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcyhcImhpZGRlbl9tZW51X2l0ZW1cIik7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGVsc2V7XHJcblx0XHRcdHZhciBpPTA7XHJcblx0XHRcdCQoXCIubmF2aWdhdGlvbl9fbWVudV9pdGVtX21vYmlsZVwiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0aSsrO1xyXG5cdFx0XHRcdHZhciBpdGVtID0gJCh0aGlzKTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRpdGVtLnJlbW92ZUNsYXNzKFwiaGlkZGVuX21lbnVfaXRlbVwiKTtcclxuXHRcdFx0XHR9LDIwMCppKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFxyXG5cdFx0XHQkKFwiLm1lbnVfX3dyYXBcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblx0XHRcdCQoXCIubmF2aWdhdGlvbl9fYmFyXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1x0XHJcblxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuJChcIi5jb21tZW50X2Zvcm1fdG9nZ2xlclwiKS5jbGljayhmdW5jdGlvbihlKXtcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0JCh0aGlzKS5uZXh0KCkudG9nZ2xlKCk7XHJcblxyXG5cdC8vICQucG9zdCh7XHJcblx0Ly8gXHRkYXRhOiAnaGVsbG8nLFxyXG5cdC8vIFx0dXJsOiAnL2Zvcm0vZ2V0UG9zdENvbW1lbnRGb3JtJyxcclxuXHQvLyBcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGUpe1xyXG5cdC8vIFx0XHRjb25zb2xlLmxvZyhcIm9rXCIpO1xyXG5cdC8vIFx0fSxcclxuXHQvLyBcdGZhaWw6IGZ1bmN0aW9uKGUpe1xyXG5cdC8vIFx0XHRjb25zb2xlLmxvZyhcImJhZFwiKTtcclxuXHQvLyBcdH1cclxuXHQvLyB9KTtcclxufSk7XHJcblxyXG5cclxuZnVuY3Rpb24gc2Nyb2xsKGZyb20sdG8peyAgICAgLy8gc2Nyb2xsIHRvIHRvcC9kb3duXHJcblx0JChmcm9tKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0dmFyIHRvcCA9ICQodG8pLm9mZnNldCgpLnRvcDtcclxuXHRcdFx0JCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiB0b3B9LCA2MDApO1xyXG5cdFx0fSk7XHJcbn07XHJcblxyXG5cclxuJCgnLnNlbmRfcG9zdF9jb21tZW50JykuY2xpY2soZnVuY3Rpb24oZSl7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFxyXG5cdHZhciBjb21tZW50VGV4dCA9ICQodGhpcykucHJldignLmNvbW1lbnRfdGV4dCcpLnRleHQoKTtcclxuXHR2YXIgcG9zdElkID0gJCh0aGlzKS5jbG9zZXN0KCcucG9zdCcpLmF0dHIoJ3Bvc3QtaWQnKTtcclxuXHJcblx0JCgnLnBvc3RfY29tbWVudF9mb3JtX3RleHQnKS52YWwoY29tbWVudFRleHQpO1xyXG5cdCQoJyNmb3JtX3Bvc3QnKS52YWwocG9zdElkKTtcclxuXHJcblx0dmFyIGZvcm0gPSAkKCcucG9zdF9jb21tZW50X2Zvcm0nKS5wYXJlbnQoKS5zZXJpYWxpemUoKTtcclxuXHQvLyBjb25zb2xlLmxvZyhmb3JtKTtcclxuXHQkLnBvc3Qoe1xyXG5cdFx0ZGF0YTogZm9ybSxcclxuXHRcdHVybDogXCIvTmV3UG9zdENvbW1lbnRcIixcclxuXHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuXHRcdFx0JChcIi5wb3N0X2NvbW1lbnRzXCIpLnByZXBlbmQoXHJcblx0XHRcdFx0XCI8bGkgY2xhc3M9J3Bvc3RfY29tbWVudCc+XCIrXHJcblx0XHRcdFx0XHRcIjxkaXYgY2xhc3M9J2NvbW1lbnRfd3JhcCc+XCIrXHJcblx0XHRcdFx0XHRcdFwiPGRpdiBjbGFzcz0nYXV0aG9yJz5cIityZXNwb25zZVtcImNvbW1lbnRBdXRob3JcIl0rXCI8L2Rpdj5cIitcclxuXHRcdFx0XHRcdFx0XCI8ZGl2IGNsYXNzPSdjb21tZW50Jz5cIityZXNwb25zZVtcImNvbW1lbnRUZXh0XCJdK1wiPC9kaXY+XCIrXHJcblx0XHRcdFx0XHRcIjwvZGl2PlwiK1xyXG5cdFx0XHRcdFwiPC9saT5cIlxyXG5cdFx0XHRcdCk7XHJcblx0XHR9LFxyXG5cdFx0ZmFpbDogZnVuY3Rpb24oZSl7XHJcblx0XHRcdGNvbnNvbGUubG9nKGUpO1xyXG5cdFx0XHRhbGxlcnQoXCLQktC+0LnQtNC40YLQtSDQtNC70Y8g0YLQvtCz0L4sINGH0YLQvtCx0Ysg0LjQvNC10YLRjCDQstC+0LfQvNC+0LbQvdC+0YHRgtGMINC60L7QvNC80LXQvdGC0LjRgNC+0LLQsNGC0Ywg0LfQsNC/0LjRgdC4XCIpO1xyXG5cdFx0fSxcclxuXHR9KTtcclxuXHJcbn0pO1xyXG5cclxuJCgnLnNlbmRfY29tbWVudF9mZWVkYmFjaycpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcclxuXHR2YXIgY29tbWVudFRleHQgPSAkKHRoaXMpLnByZXYoJy5jb21tZW50X3RleHQnKS50ZXh0KCk7XHJcblx0dmFyIGNvbW1lbnRJZCA9ICQodGhpcykuY2xvc2VzdCgnLnBvc3RfY29tbWVudCcpLmF0dHIoJ2NvbW1lbnQtaWQnKTtcclxuXHR2YXIgaW5zZXJ0UG9pbnQgPSAkKHRoaXMpLmNsb3Nlc3QoXCIuY29tbWVudF9mZWVkYmFja193cmFwXCIpO1xyXG5cclxuXHQkKCcuY29tbWVudF9jb21tZW50X2Zvcm1fdGV4dCcpLnZhbChjb21tZW50VGV4dCk7XHJcblx0JCgnI2Zvcm1fcGFyZW50Q29tbWVudCcpLnZhbChjb21tZW50SWQpO1xyXG5cclxuXHR2YXIgZm9ybSA9ICQoJy5jb21tZW50X2NvbW1lbnRfZm9ybScpLnBhcmVudCgpLnNlcmlhbGl6ZSgpO1xyXG5cclxuXHQkLnBvc3Qoe1xyXG5cdFx0ZGF0YTogZm9ybSxcclxuXHRcdHVybDogXCIvTmV3Q29tbWVudENvbW1lbnRcIixcclxuXHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuXHRcdFx0aW5zZXJ0UG9pbnQuYWZ0ZXIoXHJcblx0XHRcdFx0XCI8dWwgY2xhc3M9J3Bvc3RfY29tbWVudHMnPlwiK1xyXG5cdFx0XHRcdFx0XCI8bGkgY2xhc3M9J3Bvc3RfY29tbWVudCc+XCIrXHJcblx0XHRcdFx0XHRcdFwiPGRpdiBjbGFzcz0nY29tbWVudF93cmFwJz5cIitcclxuXHRcdFx0XHRcdFx0XHRcIjxkaXYgY2xhc3M9J2F1dGhvcic+XCIrcmVzcG9uc2VbXCJjb21tZW50QXV0aG9yXCJdK1wiPC9kaXY+XCIrXHJcblx0XHRcdFx0XHRcdFx0XCI8ZGl2IGNsYXNzPSdjb21tZW50Jz5cIityZXNwb25zZVtcImNvbW1lbnRUZXh0XCJdK1wiPC9kaXY+XCIrXHJcblx0XHRcdFx0XHRcdFwiPC9kaXY+XCIrXHJcblx0XHRcdFx0XHRcIjwvbGk+XCIrXHJcblx0XHRcdFx0XCI8L3VsPlwiXHJcblx0XHRcdFx0KTtcclxuXHRcdH0sXHJcblx0XHRmYWlsOiBmdW5jdGlvbihlKXtcclxuXHRcdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHRcdGFsbGVydChcItCS0L7QudC00LjRgtC1INC00LvRjyDRgtC+0LPQviwg0YfRgtC+0LHRiyDQuNC80LXRgtGMINCy0L7Qt9C80L7QttC90L7RgdGC0Ywg0LrQvtC80LzQtdC90YLQuNGA0L7QstCw0YLRjCDQt9Cw0L/QuNGB0LhcIik7XHJcblx0XHR9LFxyXG5cdH0pO1xyXG5cclxufSk7XHJcblxyXG59KVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
