{
  document.addEventListener('DOMContentLoaded', function () {
    // Hamburger Menu
    hamburgerMenuToggle();

    // Fade In
    let elements = document.querySelectorAll('.fade-in');

    function checkPosition() {
      let windowHeight = window.innerHeight;
      elements.forEach(function (element) {
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('show');
        } else {
          element.classList.remove('show');
        }
      });
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);

    // 初回ロード時にもチェック
    checkPosition();
  });

  function hamburgerMenuToggle() {
    let menuIcon = document.querySelector('.menu-icon-area');
    let mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

    menuIcon.addEventListener('click', function () {
      mobileMenuOverlay.classList.add('active');
    });

    mobileMenuOverlay.addEventListener('click', function () {
      mobileMenuOverlay.classList.remove('active');
    });
  }
}