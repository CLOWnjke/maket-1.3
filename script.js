const slider = document.querySelector('.btn-slider');

let mySwiper;

function mobileSlider() {
    if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
        mySwiper = new Swiper(slider, {
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
        
            slidesPerView: 1.25,
        });

        slider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 768) {
        slider.dataset.mobile = 'false';

        mySwiper.destroy();
    }
}

mobileSlider();

window.addEventListener('resize', () => {
    mobileSlider();
});


let button = document.querySelector('.main__btn');
let slide = document.querySelectorAll('.disable');
button.textContent = 'Показать все';

button.addEventListener('click', function () {
    for (let i = 0; i < slide.length; i++) {
        slide[i].classList.toggle('disable');
    }
    button.textContent = (button.textContent === 'Скрыть') ? 'Показать все' : 'Скрыть';
});