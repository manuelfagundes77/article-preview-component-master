const btn = document.querySelector('.backshare');
const btn3 = document.querySelector('.backshare2');

const btn2 = document.querySelector('.backsharesvg');
const front = document.querySelector('.rodape');

const back = document.querySelector('.rodapeback');

btn.addEventListener('click', trocar);
btn2.addEventListener('click', trocar);
btn3.addEventListener('click', trocar2);

function trocar(){
  front.classList.toggle('hidden')
   back.classList.toggle('hidden');
}

function trocar2(){
  
   back.classList.toggle('hidden');
}

