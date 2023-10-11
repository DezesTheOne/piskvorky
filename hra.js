// import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let HrajiciHrac = 'cerny_krizek';
const policka = document.querySelectorAll('.cell');
const playerElement = document.querySelector('player');

policka.forEach((pole) => {
  const clickHandler = () => {
    if (pole.textContent === '') {
      pole.classList.add(HrajiciHrac);
      HrajiciHrac =
        HrajiciHrac === 'cerny_krizek' ? 'cerne_kolecko' : 'cerny_krizek';
      pole.removeEventListener('click', clickHandler);
    }
  };

  pole.addEventListener('click', clickHandler);
});

if (HrajiciHrac === 'cerny_krizek') {
  playerElement.src = 'podklady/circle_white.svg';
} else {
  playerElement.src = 'podklady/cross_white.svg';
};
