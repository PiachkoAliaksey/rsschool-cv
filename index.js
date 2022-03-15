const navOpen=document.querySelector('.nav__list')
const toggleBurger=document.querySelector('.burger input')



toggleBurger.addEventListener('click',()=>{
    navOpen.classList.toggle('nav__list_open');
})