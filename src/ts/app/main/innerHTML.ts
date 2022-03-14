import backBttn from './backBttn';

const mainContent0 = `
  <h2 class="main-headers">WELCOME TO MY PERSONAL PAGE.</h2>
  <p>This SPA (single page application) was created as an example of the MCV pattern's implementation.
  As a classic realization this application has the model, what contains an object with the application data and can change this object. 
  The viewer can get data from the model and make from it HTML code. 
  The controller adds listeners to the page and listens to them, gives orders to the model to change its condition. 
  So the communication between the viewer and the model can occur only through the controller.
  The communication between app's components is realized through the custom events.</p>
  <p>For this project I used:
    <ul class="main-list">
      <li class="main-list-item">HTML</li>
      <li class="main-list-item">SASS</li>
      <li class="main-list-item">TypeScript</li>
      <li class="main-list-item">WebPack</li>
      <li class="main-list-item">ESLint</li>
    </ul>
  </p>
  <p>If you want to learn more about this application's implementation you should see my git repository with the code <a target="_blank" href="https://github.com/armonlis/cv/tree/main">GitHub</a>.</p>
  
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
<p>Это SPA (одностраничное приложение) было создано в качестве примера реализации паттерна MCV.
Как и в классической реализации это приложение состоит из модели, которая содержит объект с данными приложения и может его изменять.
Вьювер может получать данные от модели и строить из них HTML код.
Контроллер добавляет слушателей событий и слушает их, дает указания модели изменить свое состояние.
Общение между частями приложения происходит через пользовательские события.</p>
<p>Для этого проекта я использовал:
  <ul class="main-list">
    <li class="main-list-item">HTML</li>
    <li class="main-list-item">SASS</li>
    <li class="main-list-item">TypeScript</li>
    <li class="main-list-item">WebPack</li>
    <li class="main-list-item">ESLint</li>
  </ul>
</p>
<p>Если вы хотите больше узнать о реализации данного приложения, посетите мой репозиторий <a target="_blank" href="https://github.com/armonlis/cv/tree/main">GitHub</a>.</p>
`;

export const ru = { mainContent0: mainContentRu0 };