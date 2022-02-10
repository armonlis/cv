function runLoader(): void {
  document.querySelector('#start-loader__screen').innerHTML = '';
  const loadStr = 'Please_wait...';                                  
  const pauseTime = 1000;
  let time = 0;

  function addAndRun(sign: string, isEnd: boolean = false): void {
    const loader = document.querySelector('#start-loader__screen');
    const letter = document.createElement('p');
    letter.innerHTML = sign;
    let margin = 100;
    letter.style.marginLeft = `${margin}vw`;
    loader.append(letter); 
    
    function runLetter(): void {
      if (margin !== 0) { 
        margin -= 0.5;
        letter.style.marginLeft = `${margin}vw`;
        window.requestAnimationFrame(runLetter);
      }
      if (margin === 0 && isEnd) {
        document.querySelector('#start-loader').setAttribute('data-done', String(isEnd));
      }
    };
    
    window.requestAnimationFrame(runLetter);  
  };

  for (let i = 0; i < loadStr.length; i += 1) {
    time += pauseTime;
    const isDone = i === loadStr.length - 1 ? true : false;
    setTimeout(() => addAndRun(loadStr[i], isDone), time);
  };
};

runLoader();