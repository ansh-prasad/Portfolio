let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header navbar');


window.onclick = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute;

        if(top >= offset && top < offset + height)
        {
            navLink.forEach(link =>
            {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            }
            )
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}