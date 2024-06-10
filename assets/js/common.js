{
  document.addEventListener('DOMContentLoaded', function () {
    // Header
    fetch('components/header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
      }).then(() => {
        // Hamburger Menu
        hamburgerMenuToggle();
      });

    // Footer
    fetch('components/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
      });

    // Fade In Animation
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
    const menuIcon = document.querySelector('.menu-icon-area');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const fab = document.getElementById('fab');

    menuIcon.addEventListener('click', function () {
      mobileMenuOverlay.classList.add('active');
    });

    fab.addEventListener('click', function () {
      mobileMenuOverlay.classList.add('active');
    });

    mobileMenuOverlay.addEventListener('click', function () {
      mobileMenuOverlay.classList.remove('active');
    });
  }
}