//Dropdown menu position
const dropContent = document.querySelector('.drop-content');
let dropContentWidth = dropContent.offsetWidth;
let dropContentLeft = -(dropContentWidth - 50);
dropContent.style.left = `${dropContentLeft}px`;

//Heading Format
let heading = document.querySelector(".heading");
heading.textContent = `<${heading.textContent}/>`;

//Welcome text animation colors
let heading2 = document.querySelectorAll('.welcome-h2');

let random = (maxNumber) => Math.floor(Math.random() * (maxNumber+1));

   for(let i = 0; i < heading2.length; i++){
heading2[i].addEventListener('mouseover', ()=>{heading2[i].style.color = `rgb(${random(255)},${random(255)},${random(255)})`});
heading2[i].addEventListener('mouseover', ()=>{heading2[i].style.setProperty('top','-10px')});
heading2[i].addEventListener('mouseout', ()=>{heading2[i].style.color = 'white'});
heading2[i].addEventListener('mouseout', ()=>{heading2[i].style.setProperty('top', '0')});
   }  


