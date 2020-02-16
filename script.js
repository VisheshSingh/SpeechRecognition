const msgEl = document.getElementById('msg');
const randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

recognition.start();

function speechStart(e) {
  const msg = e.results[0][0].transcript;
  writeMsg(msg);
  checkNum(msg);
}

function writeMsg(msg) {
  msgEl.innerHTML = `
        <div>You said:</div>
        <span class="box">${msg}</span>
    `;
}

function checkNum(msg) {
  const num = +msg;
  console.log(num);
  if (Number.isNaN(num)) {
    msgEl.innerHTML += '<div>This is not a valid number</div>';
    return;
  }

  if (num < 1 || num > 100) {
    msgEl.innerHTML += '<div>Number must be between 1 - 100</div>';
    return;
  }

  if (num === randomNum) {
    document.body.innerHTML = `
        <h2>Congrats! You have guessed the number <br/><br/>It was ${num}</h2>  
        <button class="play-again" onclick="location.reload()">Play Again</button>
    `;
  } else if (num > randomNum) {
    msgEl.innerHTML += '<div>GO LOWER</div>';
  } else if (num < randomNum) {
    msgEl.innerHTML += '<div>GO HIGHER</div>';
  }
}

recognition.addEventListener('result', speechStart);
recognition.addEventListener('end', () => recognition.start());
