window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > (80*document.getElementById('banner').clientHeight)/100) {
      navbar.classList.add('change-navbar');
    } else {
      navbar.classList.remove('change-navbar');
    }
});

window.addEventListener('scroll', function() {
  var text = document.getElementById('banner-text');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > (15*document.getElementById('banner').clientHeight)/100) {
    text.classList.add('change-banner-text');
  } else {
    text.classList.remove('change-banner-text');
  }
});

window.addEventListener('scroll', function() {
  var text = document.getElementById('product-text');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > (5*document.getElementById('banner').clientHeight)/100) {
    text.classList.add('change-product-text');
  } else {
    text.classList.remove('change-product-text');
  }
});