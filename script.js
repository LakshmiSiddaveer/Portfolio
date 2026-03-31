const textElement = document.getElementById('typing-text');
const phrase = "PRODUCT DESIGNER";
let index = 0;

function type() {
    if (index < phrase.length) {
        textElement.textContent += phrase.charAt(index);
        index++;
        // 200ms delay between letters
        setTimeout(type, 200);
    } else {
        // Entire phrase complete, wait 800ms before restarting
        setTimeout(() => {
            textElement.textContent = "";
            index = 0;
            type();
        }, 800);
    }
}

// Initialize the typing effect
document.addEventListener('DOMContentLoaded', () => {
    type();
});