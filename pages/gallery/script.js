const API_KEY = "tgebWr92lxAnXc5Cif6ynefARVOY3M-9h5yRkHT2lNk";
const SECRET_KEY="OimDlDMhufZjDVK0FZy1JUuVroklCF23JYxafyrRqvc";

const container = document.querySelector('.image--container');
const loadMoreBtn = document.querySelector('.load--more button');
const load = document.querySelector('.load');

let page = 1;
let datas = [];

const getAllImage = async () => {
     loadMoreBtn.setAttribute('disabled','');
     load.classList.add('active');

     try {
        const response = await fetch(`https://api.unsplash.com/photos?page=${page}&per_page=20&client_id=${API_KEY}`);
        const data = await response.json();

        datas = [...datas,...data];

        let temp = '';

        for(let i = 0; i < datas.length; i++) {
            temp += `
               <div class="image--item">
                  <img src="${datas[i].urls.regular}" alt="image">
               </div>
            `;
        }

         container.innerHTML=temp;

         loadMoreBtn.removeAttribute('disabled');
         load.classList.remove('active');
     } catch(err) {
         return err;
     }
}

loadMoreBtn.addEventListener('click' , function() {
     page+=1;
     load.classList.add('active');
     getAllImage();
});

window.addEventListener('DOMContentLoaded' , getAllImage);