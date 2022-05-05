const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');
const secondHand = document.querySelector('.second');

function setRotation(element, rotationRatio){
   element.style.setProperty('--rotation', rotationRatio * 360);
}

function setClock() {
   const currentDate = new Date();
   const seconds = currentDate.getSeconds()/60;
   const minutes = ((seconds + currentDate.getMinutes())/60);
   const hours = ((minutes + currentDate.getHours())/12);
   setRotation(secondHand,seconds);
   setRotation(minuteHand,minutes);
   setRotation(hourHand,hours);
}
setInterval(setClock, 1000);
