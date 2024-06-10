{
  document.addEventListener("DOMContentLoaded", function () {
    onTapFloatingActionButton();
  });

  function onTapFloatingActionButton() {
    window.addEventListener('scroll', function () {
      let windowHeight = window.innerHeight;
      // 前回のスクロール位置を保存する変数
      let lastScrollPosition = 0;
      // 現在のスクロール位置を取得
      let currentScrollPosition = window.scrollY || document.documentElement.scrollTop;

      // 現在のスクロール位置と前回のスクロール位置の差を計算
      let scrollDifference = currentScrollPosition - lastScrollPosition;

      // 1ページ分スクロールしたかどうかをチェック
      if (Math.abs(scrollDifference) >= windowHeight) {
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