document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-dark-mode');
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const sections = document.querySelectorAll('section');

    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        header.classList.add('dark-mode');
        footer.classList.add('dark-mode');
        sections.forEach(section => section.classList.add('dark-mode'));
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
        footer.classList.toggle('dark-mode');
        sections.forEach(section => section.classList.toggle('dark-mode'));

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});