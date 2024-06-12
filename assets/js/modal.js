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
      },
      kinako: {
        name: "KINAKO",
        breed: "Siberian",
        description: "遊び好きで活発。\nでも、疲れるとすぐにお昼寝。",
        image: "assets/images/cast/cat5.webp"
      },
      yuzu_mikan: {
        name: "YUZU & MIKAN",
        breed: "Bengal",
        description: "兄弟でいつも一緒。\n冒険心が強く、家中を探検しています。",
        image: "assets/images/cast/cat6.webp"
      },
      ran: {
        name: "RAN",
        breed: "Mix",
        description: "静かで慎重な性格。\n観察力が鋭く、落ち着いた環境を好みます。",
        image: "assets/images/cast/cat7.webp"
      }
    };

    let catCards = document.querySelectorAll('.section-cast__card-container');

    catCards.forEach(function (card) {
      card.addEventListener('click', function () {
        let catKey = card.getAttribute('data-cat');

        if (catKey == '') {
          return;
        }

        let cat = cats[catKey];

        modalImage.src = cat.image;
        modalCatName.textContent = cat.name;
        modalCatBreed.textContent = cat.breed;
        modalCatDescription.textContent = cat.description;
        modalImage.classList.add(catKey);
        catModal.classList.add('active');

        catModal.addEventListener('click', function () {
          catModal.classList.remove('active');
          modalImage.classList.remove(catKey);
        });
    
        window.addEventListener('click', function (event) {
          if (event.target == catModal) {
            catModal.classList.remove('active');
            modalImage.classList.remove(catKey);
          }
        });    
      });
    });
  }
}