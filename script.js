window.addEventListener('scroll', function() {
    const scrollButton = document.getElementById('scrollButton');
    if (window.scrollY > 100) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

document.getElementById('scrollButton').addEventListener('click', function() {
window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
});