window.onload = () => {
    //index.form
        const form = document.getElementById("welcomeForm");
        const fnameInput = document.getElementById("fname");
        const lnameInput = document.getElementById("lname");
        const NnameInput = document.getElementById("Nname");            const welcomeMessage = document.getElementById("welcomeMessage");
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
        // ซ่อนฟอร์ม
        form.style.display = "none";
        // แสดงปุ่ม "ไปยังหน้าหลัก"
        goToMainButton.style.display = "inline-block";
        });
    }
     // สไลด์โชว์
    // ต้องประกาศ slideshow ว่ามีหรือไม่ เช่น
    const slideshow = document.getElementsByClassName("mySlides");
    if (slideshow.length > 0) {
        let myIndex = 0;
        carousel();

        function carousel() {
            for (let i = 0; i < slideshow.length; i++) {
                slideshow[i].style.display = "none";  
            }
            myIndex++;
            if (myIndex > slideshow.length) {myIndex = 1}    
            slideshow[myIndex-1].style.display = "block";  
            setTimeout(carousel, 2000); // เปลี่ยนภาพทุก 2 วินาที
        }
    }

    
}