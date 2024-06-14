{
  document.addEventListener('DOMContentLoaded', function () {
    // ページロード時にフェードイン
    bodyFadeInAnimation();

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
        setFooterCurrentLinkMark();
      });

    sectionFadeInAnimation();
  });

  function bodyFadeInAnimation() {
    document.body.classList.add('body-fade-in');

    // 全てのaタグにイベントリスナーを追加
    var links = document.querySelectorAll('a');
    links.forEach(function (link) {
      link.addEventListener('click', function (event) {
        // 内部リンクのみ処理
        if (link.hostname === window.location.hostname) {
          event.preventDefault();
          const href = link.getAttribute('href');

          // フェードアウトを開始
          document.body.classList.remove('body-fade-in');

          // フェードアウト後にページ遷移
          setTimeout(function () {
            window.location.href = href;
          }, 500); // CSSのtransition時間と一致させる
        }
      });
    });
  }

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

  function sectionFadeInAnimation() {
    let elements = document.querySelectorAll('.fade-in');
    let windowHeight = window.innerHeight;
    elements.forEach(function (element) {
      let positionFromTop = element.getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('show');
      } else {
        element.classList.remove('show');
      }
    });
    window.addEventListener('scroll', sectionFadeInAnimation);
    window.addEventListener('resize', sectionFadeInAnimation);
  }

  function setFooterCurrentLinkMark() {
    // 現在のURLを取得
    const currentPage = window.location.pathname;

    // currentクラスをリセット
    const navItems = document.querySelectorAll('.footer__nav-item');
    navItems.forEach(function (item) {
      item.classList.remove('current');
    });

    // URLに応じてcurrentクラスを付与
    if (currentPage.includes("index.html") || currentPage === "/") {
      document.getElementById('nav-top').classList.add('current');
    } else if (currentPage.includes("about.html")) {
      document.getElementById('nav-about').classList.add('current');
    } else if (currentPage.includes("cast.html")) {
      document.getElementById('nav-cast').classList.add('current');
    } else if (currentPage.includes("contact.html")) {
      document.getElementById('nav-contact').classList.add('current');
    } else if (currentPage.includes("shop.html")) {
      document.getElementById('nav-shop').classList.add('current');
    } else if (currentPage.includes("instagram.html")) {
      document.getElementById('nav-instagram').classList.add('current');
    }
  }
}