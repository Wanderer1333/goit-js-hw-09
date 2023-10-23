// let intervalId = null;

// const startButton = document.querySelector('[data-start]');
// const stopButton = document.querySelector('[data-stop]');

// startButton.addEventListener('click', () => {
//   startButton.disabled = true;
//   stopButton.disabled = false;
//   intervalId = setInterval(() => {
//     document.body.style.backgroundColor = getRandomHexColor();
//   }, 1000);
// });

// stopButton.addEventListener('click', () => {
//   startButton.disabled = false;
//   stopButton.disabled = true;
//   clearInterval(intervalId);
// });

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// }

let intervalId = null;

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

// Зробити кнопку "stop" неактивною з самого початку
stopButton.disabled = true;

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  // Зробити кнопку "stop" активною після натиску на кнопку "start"
  stopButton.disabled = false;
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopButton.addEventListener('click', () => {
  startButton.disabled = false;
  stopButton.disabled = true;
  clearInterval(intervalId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}