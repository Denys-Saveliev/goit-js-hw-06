const refs = {
   inputRef: document.querySelector('#name-input'),
   textOutput: document.querySelector('#name-output'),
};


refs.inputRef.addEventListener('input', updateValue);
function updateValue(event) {  
   event.currentTarget.value === '' ? refs.textOutput.textContent = 'Anonymous' :
      refs.textOutput.textContent = event.currentTarget.value;
}

