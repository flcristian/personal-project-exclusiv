window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
      navbar.classList.add('change-navbar');
    } else {
      navbar.classList.remove('change-navbar');
    }
});