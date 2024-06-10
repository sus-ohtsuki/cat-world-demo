{
  document.addEventListener("DOMContentLoaded", function () {
    // modal load
    fetch('components/cast_modal.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('cat-modal').innerHTML = data;
        showCastModal();
      });
  });

  function showCastModal() {
    // モーダル関連のスクリプト
    let catModal = document.getElementById('cat-modal');
    let modalImage = document.querySelector('.modal-image');
    let modalCatName = document.querySelector('.modal-cat-name');
    let modalCatBreed = document.querySelector('.modal-cat-breed');
    let modalCatDescription = document.querySelector('.modal-cat-description');

    const cats = {
      ringo: {
        name: "RINGO",
        breed: "American Short hair",
        description: "好奇心旺盛で元気いっぱい。\n人懐っこい性格です。",
        image: "assets/images/cast/cat1.webp"
      },
      gon: {
        name: "GON",
        breed: "Scottish Fold",
        description: "穏やかで優しい性格。\nのんびり屋さん。",
        image: "assets/images/cast/cat2.webp"
      },
      tora: {
        name: "TORA",
        breed: "Maine Coon",
        description: "大きな体と心優しい性格が特徴。\nよくゴロゴロしています。",
        image: "assets/images/cast/cat3.webp"
      },
      patra: {
        name: "PATRA",
        breed: "Persian",
        description: "優雅で上品な性格。\nフワフワな毛並みで、撫でられるのも好きです。",
        image: "assets/images/cast/cat4.webp"
      }
    };

    let catCards = document.querySelectorAll('.section-cast__card-container');

    catCards.forEach(function (card) {
      card.addEventListener('click', function () {
        let catKey = card.getAttribute('data-cat');
        let cat = cats[catKey];

        modalImage.src = cat.image;
        modalCatName.textContent = cat.name;
        modalCatBreed.textContent = cat.breed;
        modalCatDescription.textContent = cat.description;

        catModal.classList.add('active');
      });
    });

    catModal.addEventListener('click', function () {
      catModal.classList.remove('active');
    });

    window.addEventListener('click', function (event) {
      if (event.target == catModal) {
        catModal.classList.remove('active');
      }
    });
  }
}