import backBttn from './backBttn';

const mainContent0 = `
  <h2 class="main-headers">WELCOME TO MY PERSONAL PAGE.</h2>
  <p>This SPA (single page application) was created as an example of the MVC pattern's implementation.
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
  <p>So I am 38 years old and I began to learn JavaScript something about 1,5 years ago. 
  Before that moment I had been working as an electrician almost all my life. 
  But the situation in my country made me to look on my life in the different way. 
  I left the capital city and moved to a small village...</p>
  <p>By this moment I graduated two courses from RSSchool. 
  The first course was the JavaScript front end course, the second one was the React course. 
  If you are interested you can look at the certificates <a target="_blank" href="https://app.rs.school/certificate/4o0kji60">REACT</a> 
  <a target="_blank" href="https://app.rs.school/certificate/4o0kji60">JSFE</a>. 
  I continue to study by my own.</p>
  <p>Nowadays I have following knowledges:</p>
  <ul class="main-list">
    <li class="main-list-item">English (I hope on the way to B1)</li>
    <li class="main-list-item">HTML, CSS, SASS, Styled Components</li>
    <li class="main-list-item">JavaScript</li>
    <li class="main-list-item">TypeScript</li>
    <li class="main-list-item">React</li>
    <li class="main-list-item">WebPack, Git</li>
  </ul>
  <p>But I do not have any expirience in the comercial development.</p>
  <p>First of all I am looking for a remote job. 
  It can be one day per week in the office, but all the left time only remotely. 
  At the begin I am ready to be a trainee maybe even without a salary. 
  I ready to the relocation, but I think it is too early to speak about it.</p>
  <p>I am waiting for your offers.</p>
  ${backBttn.en}
`;

const mainContent2 = `
  <h2 class="main-headers">MY PROJECTS.</h2>
  <p>This page's GitHub repository - <a target="_blank" href="https://github.com/armonlis/cv/tree/main">GitHub</a></p>
  <p>The GitHub repository with the React app imitating an old-fashioned calculator - 
    <a target="_blank" href="https://github.com/armonlis/calculator/tree/main">GitHub</a>,
    the site with it - <a target="_blank" href="https://armonlis.github.io/examples/calculator">Calculator</a>     
  </p>  
  ${backBttn.en}
`;

const mainContent3 = `
  <h2 class="main-headers">MY CONTACTS.</h2>
  <p><img class="main-icon" src="./img/phone.png" alt="phone icon"/>+375(29) 661-07-92, +375(29) 761-07-92</p>
  <p><img class="main-icon" src="./img/viber.png" alt="viber icon"/> +375(29) 661-07-92</p>
  <p><img class="main-icon" src="./img/mail.png" alt="mail icon"/>armonius@mail.ru, armonlis@yahoo.com</p>
  <p><img class="main-icon" src="./img/discord.png" alt="discord icon"/>Siarhei Khonski (armonlis)#3533</p>
  <p><img class="main-icon" src="./img/telegram.png" alt="telegram icon"/>Siarhei Khonski</p>
  <p><img class="main-icon" src="./img/github.png" alt="github icon"/><a target="_blank" href="https://github.com/armonlis">armonlis</a> </p>
  <p><img class="main-icon" src="./img/codewars.png" alt="codewars icon"/><a target="_blank" href="https://www.codewars.com/users/armonlis">armonlis</a> </p>
  <p>The most preferable ways to contact with me are to call on the first phone number or to send me a message with Telegram or Viber.</p>
  ${backBttn.en}
`;

export const en = { mainContent0, mainContent1, mainContent2, mainContent3 };

const mainContentRu0 = `
<h2 class="main-headers">ДОБРО ПОЖАЛОВАТЬ НА МОЮ ПЕРСОНАЛЬНУЮ СТРАНИЦУ.</h2>
<p>Это SPA (одностраничное приложение) было создано в качестве примера реализации паттерна MVC.
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

const mainContentRu1 = `<h2 class="main-headers">ОБО МНЕ.</h2>
<p>Итак, мне 38 лет и я начал изучать JavaScript около 1,5 лет назад. 
До того момента я проработал электриком почти всю мою жизнь. 
Но ситуация в моей стране заставила меня взглянуть на жизнь по-другому. 
Я покинул столицу и переехал в небольшую деревню...</p>
<p>К данному моменту я закончил два курса от RSSchool. 
Первый был JavaScript front end курс, второй - курс по React. 
Если вам интересно вы можете взглянуть на сертификаты <a target="_blank" href="https://app.rs.school/certificate/4o0kji60">REACT</a> 
<a target="_blank" href="https://app.rs.school/certificate/4o0kji60">JSFE</a>. 
Продолжаю самостоятельное обучение.</p>
<p>На сегодняшний день обладаю следующими знаниями:</p>
<ul class="main-list">
  <li class="main-list-item">Английский (на пути к B1, я надеюсь)</li>
  <li class="main-list-item">HTML, CSS, SASS, Styled Components</li>
  <li class="main-list-item">JavaScript</li>
  <li class="main-list-item">TypeScript</li>
  <li class="main-list-item">React</li>
  <li class="main-list-item">WebPack, Git</li>
</ul>
<p>Не имею опыта коммерческой разработки.</p>
<p>В первую очередь ищу удаленную работу. Возможно день в офисе, но оставшееся время только удаленно. 
В начале готов быть на позиции стажера, возможно, даже без вознаграждения. Готов к переезду.</p>
<p>Жду ваших предложений.</p>
${backBttn.ru}
`;

const mainContentRu2 = `
<h2 class="main-headers">МОИ ПРОЕКТЫ.</h2>
<p>GitHub репозиторий этой страницы - <a target="_blank" href="https://github.com/armonlis/cv/tree/main">GitHub</a></p>
<p>GitHub репозиторий React приложения, иммитирующего кнопочный калькулятор - 
  <a target="_blank" href="https://github.com/armonlis/calculator/tree/main">GitHub</a>,
  страница с ним - <a target="_blank" href="https://armonlis.github.io/examples/calculator">Calculator</a>
</p> 
${backBttn.ru}
`;

const mainContentRu3 = `
  <h2 class="main-headers">МОИ КОНТАКТЫ.</h2>
  <p><img class="main-icon" src="./img/phone.png" alt="phone icon"/>+375(29) 661-07-92, +375(29) 761-07-92</p>
  <p><img class="main-icon" src="./img/viber.png" alt="viber icon"/> +375(29) 661-07-92</p>
  <p><img class="main-icon" src="./img/mail.png" alt="mail icon"/>armonius@mail.ru, armonlis@yahoo.com</p>
  <p><img class="main-icon" src="./img/discord.png" alt="discord icon"/>Siarhei Khonski (armonlis)#3533</p>
  <p><img class="main-icon" src="./img/telegram.png" alt="telegram icon"/>Siarhei Khonski</p>
  <p><img class="main-icon" src="./img/github.png" alt="github icon"/><a target="_blank" href="https://github.com/armonlis">armonlis</a> </p>
  <p><img class="main-icon" src="./img/codewars.png" alt="codewars icon"/><a target="_blank" href="https://www.codewars.com/users/armonlis">armonlis</a> </p>
  <p>Наиболее предпочтительный способ связи со мной: звонок по первому номеру телефона или отправка сообщения на Telegram или Vider.</p>
  ${backBttn.ru}
`;

export const ru = { mainContent0: mainContentRu0, mainContent1: mainContentRu1, mainContent2: mainContentRu2, mainContent3: mainContentRu3 };