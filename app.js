 
 //Toggle Button for menu
 const menu=document.querySelector('#mobile-menu');
 const menulinks=document.querySelector('.navbar_menu') ;

 const mobileMenu=() =>{
     menu.classList.toggle('is-active');
     menulinks.classList.toggle('active');
 };

 menu.addEventListener('click',mobileMenu);


//Mobile Click on servieces

const servieces = document.getElementById('singleService')
const servicesClick=() => {
    servieces.classList.toggle('is-clicked');
}
servieces.addEventListener('click',servicesClick)


const servieces0 = document.getElementById('singleService0')
const servicesClick0=() => {
    servieces0.classList.toggle('is-clicked');
}
servieces0.addEventListener('click',servicesClick0)

const servieces1 = document.getElementById('singleService1')
const servicesClick1=() => {
    servieces1.classList.toggle('is-clicked');
}
servieces1.addEventListener('click',servicesClick1)

const servieces2 = document.getElementById('singleService2')
const servicesClick2=() => {
    servieces2.classList.toggle('is-clicked');
}
servieces2.addEventListener('click',servicesClick2)

