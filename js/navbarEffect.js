
const navbar = document.querySelector('.navbar--container');

window.addEventListener('scroll' , function() {
     if(this.scrollY > 80) {
         navbar.classList.add('active');
     } else {
         navbar.classList.remove('active');
     }
});

window.addEventListener('DOMContentLoaded' , function() {
     if(this.scrollY < 80) {
        navbar.classList.remove('active');
     } else {
        navbar.classList.add('active');
     }
})

const hamburgerButton = document.getElementById('hamburger-menu');
const navbarLinks = document.querySelector('.navbar--links');

console.log(hamburgerButton);

hamburgerButton.addEventListener('click' , function() {
     navbarLinks.classList.toggle('active');
});