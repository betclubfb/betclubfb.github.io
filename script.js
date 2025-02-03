// İstifadəçi məlumatlarını localStorage-dan əldə etmək
const userEmail = localStorage.getItem("userEmail") || "ornek@example.com";
const userPassword = localStorage.getItem("userPassword") || "******";
const username = localStorage.getItem("username") || userEmail.split('@')[0];

// Profil məlumatlarını göstərmək
document.getElementById("username").textContent = "İstifadəçi Adı: " + username;
document.getElementById("email").textContent = "E-poçt: " + userEmail;
document.getElementById("password").textContent = "Şifrə: " + userPassword;

// Düyməyə klik ediləndə işləyən funksiya
function handleButtonClick(title, message) {
    const profileContainer = document.getElementById('profileContainer');
    const newContent = document.getElementById('newContent');

    profileContainer.style.transform = 'translateY(-100vh)';
    profileContainer.style.opacity = '0';

    newContent.style.visibility = 'visible';
    newContent.style.animation = 'fadeIn 1s ease forwards';

    setTimeout(() => {
        newContent.style.display = 'flex';
        newContent.innerHTML = `
            <h1>${title}</h1>
            <p>${message}</p>
            <button class="back-button" onclick="handleBack()">Geri qayıt</button>
        `;

        if (title === 'Dəstək') {
            const whatsappButton = document.createElement('a');
            whatsappButton.href = "https://wa.me/639639059348?text=Salam";
            whatsappButton.target = "_blank";
            whatsappButton.innerHTML = `<img src="whatsapp.jpg" alt="WhatsApp" style="width: 50px; height: 50px;">`;
            newContent.appendChild(whatsappButton);
        } else {
            createActionButton(title);
        }
    }, 800);
}

// Yeni əməliyyat düyməsini yaratmaq
function createActionButton(title) {
    const newContent = document.getElementById('newContent');
    const actionButton = document.createElement('button');
    actionButton.classList.add('new-action-button');

    switch (title) {
        case 'Depozit et':
            actionButton.textContent = "Depozit Et";
            actionButton.onclick = () => window.location.href = "depozit.html";
            break;
        case 'Depozit keçmişi':
            actionButton.textContent = "Depozit Et";
            actionButton.onclick = () => window.location.href = "depozit.html";
            break;
        case 'Çıxarış et':
            actionButton.textContent = "Çıxarış Et";
            actionButton.onclick = () => window.location.href = "cixaris.html";
            break;
        case 'Hesabdan çıxış':
            actionButton.textContent = "Hesabdan Çıx";
            actionButton.onclick = () => {
                localStorage.clear();
                window.location.href = "login.html";
            };
            break;
    }

    newContent.appendChild(actionButton);
}

// Geri qayıt düyməsi üçün funksiya
function handleBack() {
    const profileContainer = document.getElementById('profileContainer');
    const newContent = document.getElementById('newContent');

    newContent.style.animation = 'fadeOut 1s ease forwards';

    setTimeout(() => {
        newContent.style.visibility = 'hidden';
        newContent.style.display = 'none';
        profileContainer.style.transform = 'translateY(0)';
        profileContainer.style.opacity = '1';
    }, 1000);
}

// Menyuya geri dönmək üçün funksiya
function goToMenu() {
    const profileContainer = document.getElementById('profileContainer');

    profileContainer.style.transition = 'transform 1s ease, opacity 1s ease';
    profileContainer.style.transform = 'translateY(-100vh)';
    profileContainer.style.opacity = '0';

    setTimeout(() => {
        window.location.href = "menu.html";
    }, 1000);
}