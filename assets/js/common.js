{
  document.addEventListener('DOMContentLoaded', function () {
    // Hamburger Menu
    hamburgerMenuToggle();
  });

  function hamburgerMenuToggle() {
    var menuIcon = document.querySelector('.menu-icon-area');
    var mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

    menuIcon.addEventListener('click', function () {
      mobileMenuOverlay.classList.add('active');
    });

    mobileMenuOverlay.addEventListener('click', function () {
      mobileMenuOverlay.classList.remove('active');
    });
  }
}