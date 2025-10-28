document.addEventListener("DOMContentLoaded", function () {
    const arrow = document.querySelector('.arrow');
    const container = document.querySelector('.container');

    const images = ['../../media/audioImage/lArrow.png', '../../media/audioImage/rArrow.png'];

    arrow.addEventListener('click', () => {
        const isHidden = container.classList.toggle('aside-hidden');
        arrow.src = isHidden ? images[1] : images[0];
    });
});