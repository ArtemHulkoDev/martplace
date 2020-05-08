$(function(){

  $('.weeklyproducts__slider').slick({
    dots: false,
    arrows: true,
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/arrow-left.png" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/arrow-right.png" alt=""></button>',
  });

  $('.followers__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    variableWidth: true,
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/arrow-left.png" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/arrow-right.png" alt=""></button>'
  });

  var mixer = mixitup('.newproducts__box');
  
});