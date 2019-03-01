 window.MyHamburger = (function() {

     const getClickHandler = menu => () => {
         menu.classList.toggle('show')
         if (menu.style.display == 'none') {
             menu.style.display = 'block'
         } else {
             menu.style.display = 'none'
         }
     }

     return {
         register: function(wrapperSelector, selector) {
             const wrapper = document.querySelector(wrapperSelector);
             const menu = wrapper.querySelector('.menu');
             const handler = getClickHandler(menu);
             wrapper.querySelector(selector).addEventListener('click', handler);
         }
     }
 })();

 //Ul elements
 const images = document.querySelector("#works .images ").children;
 for (var i = 0; i < images.length; i++) {
     console.log(images[i].dataset.all);
 }

 const ul = document.querySelector("#works ul");
 ul.addEventListener("click", imagesGal, false);

 function imagesGal(e) {
     const images = document.querySelector("#works .images ").children;
     if (e.target !== e.currentTarget) {
         const clickedItem = e.target.id;
         if (clickedItem) {
             for (var i = 0; i < images.length; i++) {
                 images[i].style.display = "none";
                 if (clickedItem in images[i].dataset) images[i].style.display = "block"
             }
         } else {
             images[i].style.display = "none";
         }
     }
     e.stopPropagation();
 }