/* ==== TYPEWRITER EFFECT ==== */
const typewriterText = ["Cybersecurity Student", "Tech Project Creator", "Digital Marketing Writer"];
let i = 0, j = 0, currentText = "", isDeleting = false;
const typeSpeed = 120;

function typewriter() {
    currentText = typewriterText[i];
    document.getElementById("typewriter").textContent =
        isDeleting ? currentText.substring(0, j--) : currentText.substring(0, j++);

    if (!isDeleting && j === currentText.length) {
        isDeleting = true;
        setTimeout(typewriter, 1500);
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % typewriterText.length;
        setTimeout(typewriter, 500);
    } else {
        setTimeout(typewriter, isDeleting ? typeSpeed / 2 : typeSpeed);
    }
}
typewriter();

/* ==== FLOATING CODE ANIMATION ==== */
const codeChars = ["{", "}", "<", ">", ";", "=", "/", "*", "function", "let", "const"];
const floatingCode = document.getElementById("floatingCode");

function createCodeSnippet() {
    const span = document.createElement("span");
    span.textContent = codeChars[Math.floor(Math.random() * codeChars.length)];
    span.style.position = "absolute";
    span.style.left = Math.random() * 100 + "%";
    span.style.top = "-20px";
    span.style.fontSize = Math.random() * 20 + 10 + "px";
    span.style.color = "rgba(255, 255, 255, 0.1)";
    floatingCode.appendChild(span);

    let pos = -20;
    const fall = setInterval(() => {
        pos += 1;
        span.style.top = pos + "px";
        if (pos > window.innerHeight) {
            clearInterval(fall);
            span.remove();
        }
    }, 50);
}
setInterval(createCodeSnippet, 300);

/* ==== SCROLL FADE-IN ==== */
const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.8;
    faders.forEach(fade => {
        const fadeTop = fade.getBoundingClientRect().top;
        if (fadeTop < triggerBottom) {
            fade.classList.add('show');
        }
    });
});
