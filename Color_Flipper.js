let button = document.querySelector('.color-changer');
let main = document.querySelector('main')
let backColor = document.querySelector('.changed');
const letters = ['A','B','C','D','E','F',0,1,2,3,4,5,6,7,8,9];

main.innerHTML = '<h1>Background Color: #FFFFFF</h1>'

button.addEventListener('click', () => {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += letters[randomNumber()];
  }
  
  // backColor.textContent = hexColor;
  main.style.color = 'white';
  main.innerHTML = `<h1>Background Color: ${hexColor}</h1>`;
  backColor.style.backgroundColor = hexColor;
});


function randomNumber() {
  return Math.floor(Math.random() * letters.length);
}