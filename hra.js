
import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let HrajiciHrac = 'cerne_kolecko';
const policka = document.querySelectorAll('.cell');
const playerElement = document.querySelector('.player');
let herniPole = [];

const ctverecky = document.querySelectorAll('.cell');
ctverecky.forEach((ctverecek) => {
  let hodnota = '_';
  herniPole.push(hodnota);
});

policka.forEach((pole) => {
  const clickHandler = async () => {
    if (pole.textContent === '') {
      pole.classList.add(HrajiciHrac);
      HrajiciHrac =
        HrajiciHrac === 'cerne_kolecko' ? 'cerny_krizek' : 'cerne_kolecko';
      pole.removeEventListener('click', clickHandler);
      if (HrajiciHrac === 'cerny_krizek') {
        playerElement.src = 'podklady/cross_white.svg';
      } else {
        playerElement.src = 'podklady/circle_white.svg';
      }

      herniPole = [];
      const ctverecky = document.querySelectorAll('.cell');
      ctverecky.forEach((ctverecek) => {
        let hodnota = ctverecek.classList.value;
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
      
      
      else if (HrajiciHrac === 'cerny_krizek') {
        const response = await fetch('https://piskvorky.czechitas-podklady.cz/api/suggest-next-move', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            board: herniPole,
            player: 'x',
          }),
        });
        const data = await response.json();
        const { x, y } = data.position;
        const index = x + y * 10;
        const field = policka[index];
        field.click();
      }
    }
  };
  pole.addEventListener('click', clickHandler);
});
