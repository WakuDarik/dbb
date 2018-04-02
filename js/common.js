
$(document).ready(function() {


  $('.owl_second').owlCarousel({
  loop:true, // loop is true up to 1199px screen.
  nav:true, // is true across all sizes
  lazyLoad:true,
  dots:0,
  autoplay:false,
  autoplayTimeout:4000,
  margin:10, // margin 10px till 960 breakpoint
  responsiveClass:true, // Optional helper class. Add 'owl-reponsive-' + 'breakpoint' class to main element.
  // Object keys can be Numbers (like in this example) or Strings: '480'
  // Owl has build in sort option
  // Setting from widest screen to smallest still work.
  navText: [$('.am_next'),$('.am_prev')],
  responsive:{
    0:{
      items:1,
      dots: true // In this configuration 1 is enabled from 0px up to 479px screen size 
    },
    480:{
      items:1, // from 480 to 677 
      nav:false, // from 480 to max 
      dots: true // only within 678 and next - 959
    },
    678:{
      items:1, // from this breakpoint 678 to 959
      center:true,
      nav:false,
        dots: true // only within 678 and next - 959
      },
      960:{

      items:1, // from this breakpoint 960 to 1199
      center:false,
      nav:true,
      dots: true
    },
    1200:{
     items:1,
           nav:true,
     dots: true
   }
 }
});
    $('.owl_first').owlCarousel({
  loop:true, // loop is true up to 1199px screen.
    nav:false, // is true across all sizes
  lazyLoad:true,
  dots:0,
  autoplay:false,
  autoplayTimeout:4000,
  margin:10, // margin 10px till 960 breakpoint
  responsiveClass:true, // Optional helper class. Add 'owl-reponsive-' + 'breakpoint' class to main element.
  // Object keys can be Numbers (like in this example) or Strings: '480'
  // Owl has build in sort option
  // Setting from widest screen to smallest still work.
  responsive:{
    0:{
      items:1,
      dots: true // In this configuration 1 is enabled from 0px up to 479px screen size 
    },
    480:{
      items:1, // from 480 to 677 
      nav:false, // from 480 to max 
      dots: true // only within 678 and next - 959
    },
    678:{
      items:1, // from this breakpoint 678 to 959
      center:true,
      nav:false,
        dots: true // only within 678 and next - 959
      },
      992:{
      items:3, // from this breakpoint 960 to 1199
      center:false,
      nav:false,
      dots: true
    },
    1200:{
      items:3,
      dots: true,
    }
  }
});
	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				$.fancybox.close({
          closeEffect: 'elastic'
        });
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});



});
$('[data-fancybox="gallery"]').fancybox({
  infobar : false
  });
$("#btn_modal_5").on('click', function() {
  $.fancybox.open({
    src  : '#fast_inform_5',
    type : 'inline'
  });
});
$("#btn_modal_4").on('click', function() {
  $.fancybox.open({
    src  : '#fast_inform_4',
    type : 'inline'
  });
});
$("#btn_modal_3").on('click', function() {
  $.fancybox.open({
    src  : '#fast_inform_3',
    type : 'inline'
  });
});
$("#btn_modal_2").on('click', function() {
  $.fancybox.open({
    src  : '#fast_inform',
    type : 'inline'
  });
});
$("#btn_modal_1").on('click', function() {
  $.fancybox.open({
    src  : '#fast_inform_second',
    type : 'inline'
  });
});
$("#btn_modal_info_second").on('click', function() {
	$.fancybox.open({
		src  : '#fast_inform_second',
		type : 'inline'
	});
});

/* Открытие меню */

var main = function() { //главная функция
    $('.menu_container').click(function() { /* выбираем класс icon-menu и
     добавляем метод click с функцией, вызываемой при клике */
        $('.menu').animate({ //выбираем класс menu и метод animate
            left: '0px' /* теперь при клике по иконке, меню, скрытое за
            левой границей на 285px, изменит свое положение на 0px и станет видимым */
        }, 200); //скорость движения меню в мс
        $('body').animate({ //выбираем тег body и метод animate
            left: '285px' /* чтобы всё содержимое также сдвигалось вправо
            при открытии меню, установим ему положение 285px */
        }, 200); //скорость движения меню в мс
      });

    /* Закрыти меню */

    $('.icon-close').click(function() { //выбираем класс icon-close и метод click
        $('.menu').animate({ //выбираем класс menu и метод animate
            left: '-285px' /* при клике на крестик меню вернется назад в свое
            положение и скроется */
        }, 200); //скорость движения меню в мс

    $('body').animate({ //выбираем тег body и метод animate
            left: '0px' //а содержимое страницы снова вернется в положение 0px
        }, 200); //скорость движения меню в мс
  });
  };

$(document).ready(main); /* как только страница полностью загрузится, будет
               вызвана функция main, отвечающая за работу меню */