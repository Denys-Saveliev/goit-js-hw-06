const inputRef = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');
inputRef.addEventListener('change', updateValue);
function updateValue(event) {  
   event.currentTarget.value === '' ? textOutput.textContent = 'Anonymous' :
      textOutput.textContent = event.currentTarget.value;
}