let HrajiciHrac = 'cerny_krizek';
const policka = document.querySelectorAll('.cell');
const playerElement = document.querySelector('player');

policka.forEach((pole) => {
  const clickHandler = () => {
    if (pole.textContent === '') {
      pole.classList.add(HrajiciHrac);
      HrajiciHrac = HrajiciHrac === 'cerny_krizek' ? 'cerne_kolecko' : 'cerny_krizek';
      pole.removeEventListener('click', clickHandler);
    }
  };

  pole.addEventListener('click', clickHandler);
});




// let hracKrizek = "podklady/cross_white.svg";
// let hracKolecko = "podklady/circle_white.svg";

// let aktualniHrac = hracKrizek;

// function aktualizovatHraceNaRade() {
//   let playerElement = document.querySelector("player");
//   playerElement.src = aktualniHrac;
// }

// function prepnoutHrace() {
//   if (aktualniHrac === hracKrizek) {
//     aktualniHrac = hracKolecko;
//   } else {
//     aktualniHrac = hracKrizek;
//   }
// }

// prepnoutHrace();
