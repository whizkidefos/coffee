const burger = document.querySelector('#burger i');
const nav = document.querySelector('.navbar');

burger.onclick = () => {
    burger.classList.toggle('fa-times');
    nav.classList.toggle('active');
}

window.onscroll = () => {
    burger.classList.remove('fa-times');
    nav.classList.remove('active');
}

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        let src = images.getAttribute('src');
        document.querySelector('.banner-image').src = src;
    }
});

// Swiper
const review = new Swiper('.review-slider', {
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.review-pagination',
        clickable: true
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 2,
        },
        loop: true,
        grabCursor: true
    }
});