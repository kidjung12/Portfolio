
    const typingEffect = (element, cursorElement, text, speed = 200) => {
        let index = 0;
        cursorElement.style.display = 'inline-block';

        const type = () => {
            if (index < text.length) {
                element.textContent += text.charAt(index); 
                index++;
                setTimeout(type, speed);
            } else {
                setTimeout(() => {
                    element.textContent = ''; 
                    index = 0;
                    type(); 
                }, 2000); 
            }
        };

        type(); 
    };

   
    document.addEventListener('DOMContentLoaded', () => {
        const titleElement = document.getElementById('typing-effect');
        const cursorElement = document.querySelector('.cursor');
        const titleText = "Chakid's Portfolio";

        typingEffect(titleElement, cursorElement, titleText);
    });



 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
