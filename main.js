document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.header__menu__link');

    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

