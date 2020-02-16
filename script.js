const msg = document.getElementById('msg');
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

function writeMsg(msg) {}

function checkNum(msg) {}

recognition.addEventListener('result', speechStart);
