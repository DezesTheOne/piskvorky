let currentPlayer = 'cerne_kolecko';

const bunka1 = document.querySelector('td:nth-child(1) button');
const bunka2 = document.querySelector('td:nth-child(2) button');
const bunka3 = document.querySelector('td:nth-child(3) button');
const bunka4 = document.querySelector('td:nth-child(4) button');
const bunka5 = document.querySelector('td:nth-child(5) button');
const bunka6 = document.querySelector('td:nth-child(6) button');
const bunka7 = document.querySelector('td:nth-child(7) button');
const bunka8 = document.querySelector('td:nth-child(8) button');
const bunka9 = document.querySelector('td:nth-child(9) button');
const bunka10 = document.querySelector('td:nth-child(10) button');

const kliknuti = (udalost) => {
  udalost.target.classList.add('cerne_kolecko');
  if (currentPlayer === true)


  

bunka1.addEventListener('click', kliknuti);
bunka2.addEventListener('click', kliknuti);
bunka3.addEventListener('click', kliknuti);
bunka4.addEventListener('click', kliknuti);
bunka5.addEventListener('click', kliknuti);
bunka6.addEventListener('click', kliknuti);
bunka7.addEventListener('click', kliknuti);
bunka8.addEventListener('click', kliknuti);
bunka9.addEventListener('click', kliknuti);
bunka10.addEventListener('click', kliknuti);
