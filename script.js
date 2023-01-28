const slider = document.querySelector('.btn-slider');

new Swiper(slider, {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
            
        slidesPerView: 1.25,

        breakpoints: {
            768: {
              enabled: true,
              slidesPerView: 1,
              speed: 800,
            },
          },
});



// const slider = document.querySelector('.btn-slider');

// let mySwiper;

// function mobileSlider() {
//     if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
//         mySwiper = new Swiper(slider, {
//             pagination: {
//                 el: '.swiper-pagination',
//                 clickable: true
//             },
        
//             slidesPerView: 1.25,
//         });

//         slider.dataset.mobile = 'true';
//     }

//     if (window.innerWidth > 768) {
//         slider.dataset.mobile = 'false';

//     }
// }

// mobileSlider();

// window.addEventListener('resize', () => {
//     mobileSlider();
// });


let button = document.querySelector('.main__btn');
let slide = document.querySelectorAll('.disable');
let highlight = document.querySelector('.main--highlight');

button.addEventListener('click', function () {
    for (let i = 0; i < slide.length; i++) {
        slide[i].classList.toggle('disable');
    }
    button.textContent = (button.textContent === 'Скрыть') ? 'Показать все' : 'Скрыть';
    highlight.classList.toggle('main--highlight--active');
});