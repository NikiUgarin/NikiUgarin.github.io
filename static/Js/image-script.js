const myphoto = document.getElementById('myphoto');
let currentImage = 'static/img/myphoto2.png';

myphoto.addEventListener('click', () => {
    // Добавляем класс "rotating" для запуска анимации
    myphoto.classList.add('rotating');

    // Функция для изменения изображения после завершения анимации
    const onAnimationEnd = () => {
        if (currentImage === 'static/img/myphoto2.png') {
            myphoto.src = 'static/img/myphoto2.jpg';
            currentImage = 'static/img/myphoto2.jpg';
        } else {
            myphoto.src = 'static/img/myphoto2.png';
            currentImage = 'static/img/myphoto2.png';
        }

        // Удаляем класс "rotating" после завершения анимации
        myphoto.classList.remove('rotating');
        myphoto.removeEventListener('animationend', onAnimationEnd);
    };

    // Добавляем обработчик события для завершения анимации
    myphoto.addEventListener('animationend', onAnimationEnd, { once: true });
});
