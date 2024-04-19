
const modeSwitcherBtn = document.getElementById('mode-switcher-button');
const mainContainer = document.querySelector('.main--container');

let mode = JSON.parse(localStorage.getItem('mode')) || 'light';

window.addEventListener('DOMContentLoaded' , function() {
     if( mode === 'light') {
            modeSwitcherBtn.innerHTML = `
               <i class="ri-moon-clear-line"></i>
               Dark
            `

            document.body.classList.remove('dark');
         } else {
            modeSwitcherBtn.innerHTML = `
               <i class="ri-sun-line"></i>
               Light
            `;
            
            document.body.classList.add('dark');
      }

})

modeSwitcherBtn.addEventListener('click' , function() {
      if(mode === 'light') {
          mode = 'dark';
          localStorage.setItem('mode' , JSON.stringify(mode));

          modeSwitcherBtn.innerHTML = `
          <i class="ri-sun-line"></i>
          Light
       `;

           document.body.classList.add('dark');
      } else {
          mode = 'light';
          localStorage.setItem('mode' , JSON.stringify(mode));

          modeSwitcherBtn.innerHTML = `
          <i class="ri-moon-clear-line"></i>
          Dark
        `;

         document.body.classList.remove('dark');
      }
});