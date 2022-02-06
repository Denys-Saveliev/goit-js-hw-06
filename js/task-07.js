const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('input', onRangeFontSizeText);
function onRangeFontSizeText(event) {  
   spanRef.style.fontSize = `${event.currentTarget.value}px`;   
}

// inputRef.addEventListener('input', event =>
//    (spanRef.style.fontSize = `${event.currentTarget.value}px`));
