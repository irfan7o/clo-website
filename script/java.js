const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0);
})

// Suggested code may be subject to a license. Learn more: ~LicenseLog:2119872112.
let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navmenu.classList.remove('open');
}