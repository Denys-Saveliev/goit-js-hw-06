  const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', onUpdateInput);
function onUpdateInput(e) {
   const requiredLength = e.currentTarget.dataset.length;   
   const currentLength = e.currentTarget.value.length;   
   this.classList.add('invalid');
   if (currentLength === Number(requiredLength)) {
      this.classList.replace('invalid', 'valid');      
   }
}