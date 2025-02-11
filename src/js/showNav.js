const showNav = () => {
    const nav = document.getElementById('nav--Links');
    const navButton = document.getElementById('nav--button')
    nav.classList.toggle('none');

    if (nav.classList.contains('none')) {
        navButton.src = 'images/nav.png'
    } else {
        navButton.src = 'images/cross.svg'
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.rooms__images', {
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});



document.getElementById('nav--button').addEventListener('click', showNav)