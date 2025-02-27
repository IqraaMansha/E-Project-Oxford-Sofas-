let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = (e) => {
    e.preventDefault();
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            })
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('[data-category]');
    const navLinks = document.querySelectorAll('[data-nav]');
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');

    menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('-translate-x-full');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const category = link.getAttribute('data-nav');
            categories.forEach(item => {
                item.style.display = (category === 'all' || item.getAttribute('data-category') === category) ? 'block' : 'none';
            });
        });
    });
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}