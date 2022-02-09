function runLoader(): void {
  document.querySelector('#start-loader__screen').innerHTML = '';
  const loadStr = 'Please_wait...';
  const pauseTime = 1000;
  let time = 0;

  function addAndRun(sign: string): void {
    const loader = document.querySelector('#start-loader__screen');
    const letter = document.createElement('p');
    letter.innerHTML = sign;
    let margin = 100;
    letter.style.marginLeft = `${margin}vw`;
    loader.append(letter); 
    
    function runLetter(time: number): void {
      if (margin !== 0) { 
        margin -= 0.5;
        letter.style.marginLeft = `${margin}vw`;
        window.requestAnimationFrame(runLetter)
      }
    };
    
    window.requestAnimationFrame(runLetter);  
  };

  for (let letter of loadStr) {
    time += pauseTime;
    setTimeout(() => addAndRun(letter), time);
  };
};

runLoader();