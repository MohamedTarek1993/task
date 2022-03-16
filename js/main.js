//loader
let loader = document.getElementById('preloader');
window.addEventListener('load', function () {
  loader.style.display = 'none';
});
//loader
//  scroll-up 
var btn = $('#button');
var navbar =$('#navbar')
var image = $('.navbar .navbar-brand img');
let tel = $('#navbar .telphone')
// var link = $('.navbar .nav-item .nav-link');
$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    btn.addClass('show');
    image.addClass('resize');
    navbar.addClass('change');
    tel.css('display' , 'none');
  } else {
    btn.removeClass('show');
    image.removeClass('resize');
    navbar.removeClass('change');
    tel.css('display' , 'block');
  }
});
btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});
//    scroll-up 
// animated hamburger icon
$(document).ready($(function () {
  let navBtn = $('.navbar-toggler');
  $(navBtn).click(function () {
    $(navBtn).toggleClass('active-hamburger');
  });
}));
// animated hamburger icon
//mixitops
$(document).ready(function () {
  let mixer = mixitup('.box-list');
});
//mixitops
//counter
const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        counter.innerText = "0";

        const updateCounter = () => {
            const target = counter.getAttribute('data-target');
            const x = +counter.innerText;
            const increment = target / 200;
            if (x < target) {
                counter.innerText = `${Math.ceil(x + increment)}`;
                setTimeout(updateCounter, 1)
            } else {
                counter.innerText = target
            }
        }
        updateCounter();
    });
    //counter



