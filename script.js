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
        emailjs.send('service_9xthofn', 'template_dvpf3hk', {
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
const countdown = () => {
    const targetDate = new Date('2023-12-31T23:59:59').getTime();
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('countdown-timer').innerHTML = "Açıldı!";
        }
    }, 1000);
};
// Email.js'i API Key ile başlat
emailjs.init('qt1dHP2mbvtl7v42W'); // API Key'inizi buraya ekleyin

// Kayıt ol formu
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Kullanıcıyı localStorage'a kaydet
        const newUser = { username, email, password };
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        // Email.js ile bilgileri gönder
        emailjs.send('service_mqj01mn', 'template_1iqcc1d', {
            username: username,
            email: email,
            password: password
        }).then((response) => {
            console.log('E-posta gönderildi!', response.status, response.text);
            alert('Kayıt başarılı! Bilgileriniz bize iletildi.');
            window.location.href = 'login.html';
        }, (error) => {
            console.error('E-posta gönderilemedi:', error);
            alert('Kayıt başarılı, ancak e-posta gönderilemedi. Lütfen daha sonra tekrar deneyin.');
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
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            alert('Giriş başarılı!');
            window.location.href = 'index.html';
        } else {
            alert('Geçersiz e-posta veya şifre!');
        }
    });
}

countdown();
