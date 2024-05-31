// Animacja galerii
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-grid img');
    images.forEach((img, index) => {
        img.style.animation = `fadeIn 1s ease-in-out ${index * 0.2}s forwards`;
    });
});

// Animacja fadeIn
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
`;
document.head.appendChild(style);
