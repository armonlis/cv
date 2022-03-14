import backBttn from './backBttn';
const mainContent0 = `
  <h2 class="main-headers">WELCOME TO MY PERSONAL PAGE.</h2>
  <p>I am beginner frond-end developer. On this page I will be trying to tell you about myself,
  my knowledges and my experience.</p>
  <p>This page is an attemption to implement the MCV pattern and SPA (single page application).
  All the code of this application you can see on my <a target="_blank" href="https://github.com/armonlis/cv/tree/main">GitHub</a>.</p>
  <p>For this project I used:
    <ul class="main-list">
      <li class="main-list-item">HTML</li>
      <li class="main-list-item">SASS</li>
      <li class="main-list-item">TypeScript</li>
      <li class="main-list-item">ESLint</li>
    </ul>
  </p>
`;
const mainContent1 = `
  <h2 class="main-headers">ABOUT ME.</h2>
  ${backBttn.en}
`;
const mainContent2 = `
  <h2 class="main-headers">ABOUT ME2.</h2>
  ${backBttn.en}
`;
const mainContent3 = `
  <h2 class="main-headers">ABOUT ME3.</h2>
  ${backBttn.en}
`;
export const en = { mainContent0, mainContent1, mainContent2, mainContent3 };
const mainContentRu0 = `
<h2 class="main-headers">ДОБРО ПОЖАЛОВАТЬ НА МОЮ ПЕРСОНАЛЬНУЮ СТРАНИЦУ.</h2>
<p>Я - начинающий front-end разработчик. На этой странице я попытаюсь рассказать вам о себе, моих знаниях, моем опыте.</p>
<p>Эта страница - попытка реализации паттерна MCV и SPA (одностраничное приложение).
Весь код данного приложения вы можете увидеть на <a target="_blank" href="https://github.com/armonlis/cv/tree/main">GitHub</a>.</p>
<p>Для этого проекта я использовал:
  <ul class="main-list">
    <li class="main-list-item">HTML</li>
    <li class="main-list-item">SASS</li>
    <li class="main-list-item">TypeScript</li>
    <li class="main-list-item">ESLint</li>
  </ul>
</p>
`;
export const ru = { mainContent0: mainContentRu0 };
