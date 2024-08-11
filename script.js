const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('header, section, footer').forEach(el => {
        el.classList.toggle('dark-mode');
    });
});
