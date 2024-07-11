// navbar.js

function toggleSecondaryNavbar() {
    var navbar = document.getElementById('navbarSecondary');
    if (navbar.style.display === 'none' || navbar.style.display === '') {
        navbar.style.display = 'block';
    } else {
        navbar.style.display = 'none';
    }
}
