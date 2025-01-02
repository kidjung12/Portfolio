
    const typingEffect = (element, cursorElement, text, speed = 200) => {
        let index = 0;
        cursorElement.style.display = 'inline-block';

        const type = () => {
            if (index < text.length) {
                element.textContent += text.charAt(index); // ใช้ textContent
                index++;
                setTimeout(type, speed);
            } else {
                setTimeout(() => {
                    element.textContent = ''; // ลบข้อความ
                    index = 0;
                    type(); // เริ่มพิมพ์ใหม่
                }, 2000); // เวลาหยุด
            }
        };

        type(); // เริ่มการพิมพ์
    };

    // เริ่มการพิมพ์
    document.addEventListener('DOMContentLoaded', () => {
        const titleElement = document.getElementById('typing-effect');
        const cursorElement = document.querySelector('.cursor');
        const titleText = "Chakid's Portfolio";

        typingEffect(titleElement, cursorElement, titleText);
    });



    // การเลื่อนนุ่มนวลเมื่อคลิกลิงก์
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
