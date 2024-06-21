document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.main-menu a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
