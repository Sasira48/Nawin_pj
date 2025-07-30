<<<<<<< HEAD
document.querySelector('form').addEventListener('submit', function(event) {
    let username = document.querySelector('input[name="username"]').value;
    let password = document.querySelector('input[name="password"]').value;

    if (username === '' || password === '') {
        alert("Both fields are required!");
        event.preventDefault();
    }
});
=======
window.onload = () => {
    // ฟอร์ม welcome
    const form = document.getElementById("welcomeForm");
    const fnameInput = document.getElementById("fname");
    const lnameInput = document.getElementById("lname");
    const NnameInput = document.getElementById("Nname");
    const welcomeMessage = document.getElementById("welcomeMessage");
    const goToMainButton = document.getElementById("goToMain");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const fname = fnameInput.value.trim();
            const lname = lnameInput.value.trim();
            const Nname = NnameInput.value.trim();
            if (fname && lname && Nname) {
                welcomeMessage.textContent = `สวัสดีคุณ ${Nname} ยินดีต้อนรับสู่เว็บไซต์ของเรา!`;
            } else {
                welcomeMessage.textContent = "ยินดีต้อนรับผู้เยี่ยมชม!";
            }
            form.style.display = "none";
            goToMainButton.style.display = "inline-block";
        });
    }

    // สไลด์โชว์
    const slideshow = document.getElementsByClassName("mySlides");
    if (slideshow.length > 0) {
        let myIndex = 0;
        carousel();
        function carousel() {
            for (let i = 0; i < slideshow.length; i++) {
                slideshow[i].style.display = "none";  
            }
            myIndex++;
            if (myIndex > slideshow.length) { myIndex = 1 }    
            slideshow[myIndex-1].style.display = "block";  
            setTimeout(carousel, 8000);
        }
    }

    // Enter ค้นหาได้ด้วย
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                searchRedirect();
            }
        });
    }
};

// ย้ายออกมาอยู่นอก onload เพื่อให้ button เรียกเจอ
function searchRedirect() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase().trim();

    const pages = {
        'ส้มตำ': 'pas-m.html',
        'ตำ': 'pas-m.html',
        'ของหวาน': 'ds-m.html',
        'ขนม': 'ds-m.html',
        'เครื่องดื่ม': 'bv-m.html',
        'น้ำ': 'bv-m.html',
        'อาหารทานเล่น': 'Ap-m.html',
        'ของคาว': 'mc-m.html',
        'อาหารหลัก': 'mc-m.html',
        'ข้าว': 'mc-m.html'
    };

    let found = false;
    for (const keyword in pages) {
        if (searchValue.includes(keyword)) {
            window.location.href = pages[keyword];
            found = true;
            break;
        }
    }

    if (!found) {
        alert('ไม่พบหมวดหมู่นี้');
    }
}
>>>>>>> 2f1cc8db137bf97919bb5fde41de94e5b018e404
