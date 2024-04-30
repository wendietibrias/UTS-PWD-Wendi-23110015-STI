
const navbar = document.querySelector('.navbar--container');

window.addEventListener('scroll' , function() {
     if(this.scrollY > 50) {
         navbar.classList.add('active');
     } else {
         navbar.classList.remove('active');
     }
});

window.addEventListener('DOMContentLoaded' , function() {
     if(this.scrollY < 50) {
        navbar.classList.remove('active');
     } else {
        navbar.classList.add('active');
     }
})

const hamburgerButton = document.getElementById('hamburger-menu');
const navbarLinks = document.querySelector('.navbar--links');


hamburgerButton.addEventListener('click' , function() {
     navbarLinks.classList.toggle('active');
     if(navbarLinks.classList.contains('active')) {
          hamburgerButton.innerHTML = `<i class="ri-close-fill"></i>`;
     } else {
          hamburgerButton.innerHTML = `<i class="ri-menu-3-line"></i>`;
     }
     
});