const myphoto = document.getElementById('myphoto');
let currentImage = 'static/img/myphoto2_anonymized.png';

myphoto.addEventListener('click', () => {
    if (currentImage === 'static/img/myphoto2_anonymized.png') {
        myphoto.src = 'static/img/myphoto2.jpg';
        currentImage = 'static/img/myphoto2.jpg';
    } else {
        myphoto.src = 'static/img/myphoto2_anonymized.png';
        currentImage = 'static/img/myphoto2_anonymized.png';
    }
});