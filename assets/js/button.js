{
  document.addEventListener("DOMContentLoaded", function () {
    onTapFloatingActionButton();
  });

  function onTapFloatingActionButton() {
    window.addEventListener('scroll', function () {
      let scrollPosition = window.scrollY || document.documentElement.scrollTop;
      const heroSection = document.querySelector('.hero');

      // ページの中間を超えた場合にFABを表示、それ以外は非表示
      if (scrollPosition > heroSection.offsetTop) {
        fab.classList.add('show');
      } else {
        fab.classList.remove('show');
      }
    });

    // フローティングアクションボタンのクリックイベント
    const fab = document.getElementById('fab');
    fab.addEventListener('click', function () {
      hamburgerMenuToggle();
    });
  }
}