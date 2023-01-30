import Swiper, { Pagination, Autoplay } from 'swiper';

// Проверка поддержки webp, добавление класса webp или no-webp для HTML
export function isWebp() {
    // Проверка поддержки webp
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        }
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    // Добавление класса _webp или _no-webp для HTML
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    })
}

// Установка меню бургер
export function setBurger() {
    // Кнопки
    const _burgerOpenBtn = document.getElementById('burger');
    const _burgerCloseBtn = document.getElementById('burger-close');
    // Навигатор
    const _navigator = document.querySelector('.navbar');

    // Обработчик нажатия
    const handle = () => {
        _burgerOpenBtn.classList.toggle('active');
        _burgerCloseBtn.classList.toggle('active');
        _navigator.classList.toggle('active');
        document.body.classList.toggle('lock');
    }
    // Назначение обработчиков
    _burgerOpenBtn.addEventListener('click', handle);
    _burgerCloseBtn.addEventListener('click', handle);

    // Обработчик на ссылки (для закрытия меню)
    const links = document.querySelectorAll('.navbar__item a');
    for (let link of links) {
        link.addEventListener('click', handle);
    }
}

// Установка слайдера
export function setSlider() {
    const swiper = new Swiper('.swiper', {
        modules: [Pagination, Autoplay],
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        spaceBetween: 100,
        direction: 'horizontal',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}