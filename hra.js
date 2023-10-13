import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let HrajiciHrac = 'cerny_krizek';
const policka = document.querySelectorAll('.cell');
const playerElement = document.querySelector('.player');
let herniPole = [];

const ctverecky = document.querySelectorAll('.cell');
ctverecky.forEach((ctverecek) => {
  let hodnota = '_';
  herniPole.push(hodnota);
});

policka.forEach((pole) => {
  const clickHandler = () => {
    if (pole.textContent === '') {
      pole.classList.add(HrajiciHrac);
      HrajiciHrac =
        HrajiciHrac === 'cerny_krizek' ? 'cerne_kolecko' : 'cerny_krizek';
      pole.removeEventListener('click', clickHandler);
      if (HrajiciHrac === 'cerny_krizek') {
        playerElement.src = 'podklady/cross_white.svg';
      } else {
        playerElement.src = 'podklady/circle_white.svg';
      }
    }
    herniPole = [];
    const ctverecky = document.querySelectorAll('.cell');
    ctverecky.forEach((ctverecek) => {
      let hodnota = ctverecek.classList.value;
      // console.log(hodnota);
      if (hodnota === 'cell') {
        hodnota = '_';
      } else if (hodnota === 'cell cerny_krizek') {
        hodnota = 'x';
      } else {
        hodnota = 'o';
      }
      herniPole.push(hodnota);
    });

    const vitez = findWinner(herniPole);
    if (vitez === 'o' || vitez === 'x') {
      setTimeout(() => {
        alert(`Vyhrál hráč se symbolem ${vitez}.`);
        location.reload();
      }, 0);
    }
  };
  pole.addEventListener('click', clickHandler);
});
