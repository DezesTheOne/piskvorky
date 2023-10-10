const policka = document.querySelectorAll('.cell');
let symbol = 'cerny_krizek';

policka.forEach((pole) => {
  pole.addEventListener('click', () => {
    if (pole.textContent === '') {
      pole.classList.add(symbol);
      symbol = symbol === 'cerny_krizek' ? 'cerne_kolecko' : 'cerny_krizek';
    }
  });
});
