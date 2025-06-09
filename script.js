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
}