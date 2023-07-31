let searchbtn=document.querySelector('#search-btn');
let searchBar=document.querySelector('.search-bar-container');

let formbtn=document.querySelector('#user-btn');
let loginform=document.querySelector('.login-form-container');
let formClose=document.querySelector('#form-close');
 
let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');

searchbtn.addEventListener('click',() =>{
    searchbtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

window.onscroll= () =>{
    searchbtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginform.classList.remove('active'); 
}

formbtn.addEventListener('click',()=>{
loginform.classList.add('active'); 
});
formClose.addEventListener('click',()=>{
    loginform.classList.remove('active'); 
    });


menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
     navbar.classList.toggle('active');
    });
let videoBtn=document.querySelectorAll('.vid-btn');
videoBtn.forEach(btn =>{
btn.addEventListener('click',()=>{
 document.querySelector('.controls .active').classList.remove('active');
 btn.classList.add('active');
 let src=btn.getAttribute('data-src');
 document.querySelector('#video-slider').src=src;
});
});


var swiper=new Swiper(".review-slider",{
spaceBetween:20,
loop:true,
autoplay:{
delay:2500,
disableOnInteraction:false,
},
breakpoints:{
    640:{
        slidesPerView:1,
    },
    768:{
        slidesPerView:2,
    },
    1024:{
        slidesPerView:3,
    },
},
});