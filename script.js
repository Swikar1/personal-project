function hambar() {
    const menuOpen = document.querySelector('.hamburger-menu-open');
    if (!menuOpen) return;
    menuOpen.classList.toggle('active');
}

function closeHambar() {
    const menuOpen = document.querySelector('.hamburger-menu-open');
    if (!menuOpen) return;
    menuOpen.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.hamburger-button');
    const menuOpen = document.querySelector('.hamburger-menu-open');
    const closeButton = document.querySelector('.close-menu');

    if (!menuButton || !menuOpen) {
        return;
    }

    menuButton.addEventListener('click', hambar);
    if (closeButton) {
        closeButton.addEventListener('click', closeHambar);
    }
});