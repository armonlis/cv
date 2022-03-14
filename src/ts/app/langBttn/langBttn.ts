const langBttn = `
  <div id="lang-button">
    <div id="lang-button__en">EN</div>
    <div id="lang-button__ru">RU</div>
    <div id="lang-button__sheet"></div>
  </div>
`;

export function activateLangButton() {
  document.querySelector('#lang-button__en').addEventListener('click', () => {
    if (document.querySelector('#lang-button__sheet').classList.contains('lang-button__sheet_ru')) {
      document.querySelector('#lang-button__sheet').classList.replace('lang-button__sheet_ru', 'lang-button__sheet_en');
    } else {
      document.querySelector('#lang-button__sheet').classList.add('lang-button__sheet_en');
    }
  });
  document.querySelector('#lang-button__ru').addEventListener('click', () => {
    if (document.querySelector('#lang-button__sheet').classList.contains('lang-button__sheet_en')) {
      document.querySelector('#lang-button__sheet').classList.replace('lang-button__sheet_en', 'lang-button__sheet_ru');
    } else {
      document.querySelector('#lang-button__sheet').classList.add('lang-button__sheet_ru');
    }
  });
};
 
export default langBttn;