// Menü Toggle Fonksiyonu
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.querySelector('.sidebar');
const body = document.body;

menuToggle.addEventListener('click', () => {
    body.classList.toggle('menu-open');
});

// Hizmetler Akordeon Fonksiyonu
const serviceQuestions = document.querySelectorAll('.service-question');

serviceQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const serviceItem = question.parentElement;
        document.querySelectorAll('.service-item').forEach(item => {
            if (item !== serviceItem) {
                item.classList.remove('active');
            }
        });
        serviceItem.classList.toggle('active');
    });
});
