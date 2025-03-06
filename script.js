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
// LocalStorage'dan kullanıcıları al veya boş bir dizi oluştur
let users = JSON.parse(localStorage.getItem('users')) || [];

// Kayıt ol formu
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Kullanıcıyı kaydet
        const newUser = { username, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        // Email.js ile bilgileri gönder
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
            username: username,
            email: email,
            password: password
        }).then(() => {
            alert('Kayıt başarılı! Bilgileriniz bize iletildi.');
            window.location.href = 'login.html';
        }, (error) => {
            alert('Kayıt başarılı, ancak e-posta gönderilemedi: ' + error);
        });
    });
}

// Giriş yap formu
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Kullanıcıyı kontrol et
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            alert('Giriş başarılı!');
            window.location.href = 'index.html';
        } else {
            alert('Geçersiz e-posta veya şifre!');
        }
    });
}
