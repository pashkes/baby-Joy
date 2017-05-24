'use strict';


/**
 * Document ready functions
 */
$(function () {
  svg4everybody();

  //sorting product
  if ($('.js-sort').length) {
    $('.js-sort').on('click', function () {
      $(this).toggleClass('sort--show');
    });
  }

//add tags filter
  $('.filter__input').on('click', function () {
    var thisElement = $(this),
        thisElementText = thisElement.next().text();

    console.log(thisElementText);

    if ($(this).prop('checked')) {
      $('.tag').append('<li class="tag__item"><span></span><button class="tag__remove" type="button">remove tag</button></li>').index();
      $('.tag__item span').text(thisElementText);
    } else{

    }
  });

  if ($('.tag').length) {
    $('.tag__remove').on('click', function () {
      $(this).parents('.tag__item').remove();
    });
  }
  //show Mobile menu
  //Toggle mobile menu
  var burger = $('.js-burger'),
      header = $('.js-menu'),
      activeMenu = 'menu--show';

  burger.on('click', function () {
    $(this).toggleClass('active');
    header.toggleClass(activeMenu);
  });


  //sticky header other pages,not home
  var winPos, navHeight;

  function refreshVar() {
    navHeight = $('.header__top-panel').outerHeight(true);
  }

  refreshVar();
  $(window).on('resize load ', function () {
    refreshVar();
    $('.clone-nav').css('height', navHeight)
  });


  $('<div class="clone-nav"></div>').insertBefore('.header__top-panel').css('height', navHeight);

  $(window).on('resize load', function () {
    refreshVar();
  });

  //sticky header other pages,not home
  var scrollPos, topParalaxHeight;

  function refreshHeight() {
    topParalaxHeight = $('.ad-diapers').outerHeight(true);
  }

  if ($(window).width() > 1024) {
    refreshHeight();
  }
  $(window).on('scroll resize', function () {
    refreshHeight();
    $('.clone-ad-diapers').css('height', topParalaxHeight)
  });


  $('<div class="clone-ad-diapers"></div>').insertBefore('.ad-diapers').css('height', topParalaxHeight).hide();

  $(window).on('scroll resize load', function () {
    if ($(window).width() > 1024) {
      refreshHeight();
      scrollPos = $(window).scrollTop();
      if (scrollPos >= 1) {
        $('.ad-diapers').addClass('fixed');
        $('.ad-diapers.fixed').css('top', navHeight);
        $('.clone-ad-diapers').show();
      }
      else {
        $('.ad-diapers').removeClass('fixed').css('top', 'auto');
        $('.clone-ad-diapers').hide();
      }
    }
  });

//slider header
  if ($('.js-ad-diapers').length) {
    $('.js-ad-diapers').slick({
      prevArrow: $('.js-header-arrow-prev'),
      nextArrow: $('.js-header-arrow-next')
    });
  }

//slider reviews
  if ($('.js-review-slider').length) {
    $('.js-review-slider').slick({
      prevArrow: $('.js-reviews-arrow-prev'),
      nextArrow: $('.js-reviews-arrow-next')
    });
  }

//to top
  $('.to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });


  var headerContent = $('.ad-diapers__slide');

  $(window).on('scroll', function () {
    var scrollCoef = 0.0010;
    if ($(window).width() > 1024) {
      headerContent.css({
        opacity: 1 - $(window).scrollTop() * scrollCoef
      });
      $('.ad-diapers__slide').css({
        top: 2 - $(window).scrollTop() * .3
      });
    }
  });
})
;