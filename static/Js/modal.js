// Получаем все элементы с изображениями
const workItems = document.querySelectorAll('.blender-work-item');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');

// Добавляем обработчики событий для каждого элемента
workItems.forEach(item => {
    item.addEventListener('click', () => {
        const image = item.querySelector('.blender-image');
        const title = item.querySelector('.work-title');
        
        modalImage.src = image.src;
        modalTitle.textContent = title.textContent;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Запрещаем прокрутку страницы
    });
});

// Функция закрытия модального окна
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Возвращаем прокрутку страницы
}

// Закрытие модального окна при клике вне изображения
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Закрытие модального окна при нажатии Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
}); 