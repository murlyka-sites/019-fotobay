$(document).ready(function() {
	svg4everybody();
  $(".nav__trigger").click(function(){
    $(this).toggleClass("nav__trigger_open");
    $(".nav__list").toggleClass("nav__list_open");
  });

  $('.countdown:not(.countdown_sm)').countdown('2020/10/10', function(event) {
		// '<span class="circle"><span class="nn">%M</span></span> : <span class="circle"><span class="nn">%S</span></span>'

    // '<div class="countdown">' +
    $(this).html(event.strftime(
    '<div class="countdown__item">' +
    '<div class="countdown__title">дни</div>' +
    '<div class="countdown__number">' +
    '<div class="countdown__number_top"></div>' +
    '<div class="countdown__value">%-d</div>' +
    '</div>' +
    '</div>' +
    '<div class="countdown__divider">:</div>' +
    '<div class="countdown__item">' +
    '<div class="countdown__title">Часы</div>'+
    '<div class="countdown__number">' +
    '<div class="countdown__number_top"></div>' +
    '<div class="countdown__value">%-H</div>' +
    '</div>' +
    '</div>' +
    '<div class="countdown__divider">:</div>' +
    '<div class="countdown__item">' +
    '<div class="countdown__title">Минуты</div>' +
    '<div class="countdown__number">' +
    '<div class="countdown__number_top"></div>' +
    '<div class="countdown__value">%M</div>' +
    '</div>' +
    '</div>' +
    '<div class="countdown__divider">:</div>' +
    '<div class="countdown__item">' +
    '<div class="countdown__title">Секунды</div>' +
    '<div class="countdown__number">' +
    '<div class="countdown__number_top"></div>' +
    '<div class="countdown__value">%S</div>' +
    '</div>' +
    '</div>'
    ));
	});

  $('.countdown.countdown_sm').countdown('2020/10/10', function(event) {
    // '<span class="circle"><span class="nn">%M</span></span> : <span class="circle"><span class="nn">%S</span></span>'

    // '<div class="countdown">' +
    $(this).html(event.strftime(
    '<div class="countdown__item countdown__item_sm">' +
    '<div class="countdown__number countdown__number_sm">' +
    '<div class="countdown__number_top countdown__number_top_sm"></div>' +
    '<div class="countdown__value countdown__value_sm">%-d</div>' +
    '</div>' +
    '</div>' +
    '<div class="countdown__divider countdown__divider_sm">:</div>' +
    '<div class="countdown__item countdown__item_sm">' +
    '<div class="countdown__number countdown__number_sm">' +
    '<div class="countdown__number_top countdown__number_top_sm"></div>' +
    '<div class="countdown__value countdown__value_sm">%-H</div>' +
    '</div>' +
    '</div>' +
    '<div class="countdown__divider countdown__divider_sm">:</div>' +
    '<div class="countdown__item countdown__item_sm">' +
    '<div class="countdown__number countdown__number_sm">' +
    '<div class="countdown__number_top countdown__number_top_sm"></div>' +
    '<div class="countdown__value countdown__value_sm">%M</div>' +
    '</div>' +
    '</div>' +
    '<div class="countdown__divider countdown__divider_sm">:</div>' +
    '<div class="countdown__item countdown__item_sm">' +
    '<div class="countdown__number countdown__number_sm">' +
    '<div class="countdown__number_top countdown__number_top_sm"></div>' +
    '<div class="countdown__value countdown__value_sm">%S</div>' +
    '</div>' +
    '</div>'
    ));
  });

  $(".fancy").click(function () {
      $.fancybox.open([{src: $(this).attr('href')}])
  });



  $('.vote__star').click(function() {
    var that = this;

    $(this).find("svg").removeClass("animated bounceIn")


    setTimeout(function() {
      $(that).find("svg").addClass("animated bounceIn")

    }, 50)
    return false;
  })
});
