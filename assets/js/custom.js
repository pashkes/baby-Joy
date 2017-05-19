'use strict';


/**
 * Document ready functions
 */
$(function () {
  svg4everybody(); // run it now or whenever you are ready
  //sticky header other pages,not home
  var winPos, navHeight;

  function refreshVar() {
    navHeight = $('.header__top-panel').outerHeight(true);
  }
    refreshVar();
    $(window).on('scroll resize', function() {
      refreshVar();
      $('.clone-nav').css('height',navHeight )
    });


  $('<div class="clone-nav"></div>').insertBefore('.header__top-panel').css('height', navHeight).hide();

  $(window).on( 'scroll resize load',function() {
    refreshVar();
    winPos = $(window).scrollTop();
      if (winPos >= 1) {
        $('.header__top-panel').addClass('fixed');
        $('.clone-nav').show();
      }
      else {
        $('.header__top-panel').removeClass('fixed');
        $('.clone-nav').hide();
      }
  });


  //sticky header other pages,not home
  var scrollPos, topParalaxHeight;

  function refreshHeight() {
    topParalaxHeight = $('.ad-diapers').outerHeight(true);
  }
  refreshHeight();
  $(window).on('scroll resize', function() {
    refreshHeight();
    $('.clone-ad-diapers').css('height',topParalaxHeight )
  });


  $('<div class="clone-ad-diapers"></div>').insertBefore('.ad-diapers').css('height', topParalaxHeight).hide();

  $(window).on( 'scroll resize load',function() {
    refreshHeight();
    scrollPos = $(window).scrollTop();
    if (scrollPos >= 1) {
      $('.ad-diapers').addClass('fixed');
      $('.ad-diapers.fixed').css('top',navHeight);
      $('.clone-ad-diapers').show();
    }
    else {
      $('.ad-diapers').removeClass('fixed').css('top','auto');
      $('.clone-ad-diapers').hide();
    }
  });

  //slider header
  if($('.js-ad-diapers').length) {
    $('.js-ad-diapers').slick({
      prevArrow: $('.js-header-arrow-prev'),
      nextArrow: $('.js-header-arrow-next')
    });
  }

  //slider reviews
  if($('.js-review-slider').length) {
    $('.js-review-slider').slick({
      prevArrow: $('.js-reviews-arrow-prev'),
      nextArrow: $('.js-reviews-arrow-next')
    });
  }

  //to top
  $('.to-top').click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });



  var headerContent = $('.ad-diapers__info');

  $(window).on('scroll', function () {
    var scrollCoef = 0.0020;
    headerContent.css({
      opacity: 1 - $(window).scrollTop() * scrollCoef
    });
    $('.ad-diapers__info').css({
      top: 2 - $(window).scrollTop() * .3
    });
  });
});