const decrementListenerBtn = document.querySelector('[data-action="decrement"]');
const counterValueRef = document.querySelector('#value');
const incrementListenerBtn = document.querySelector('[data-action="increment"]');

let count = 0;
// decrementListenerBtn.addEventListener('click', () => {
//    count -= 1;
//    updateCounterValue();
// });

// incrementListenerBtn.addEventListener('click', () => {
//    count += 1;
//    updateCounterValue();
// });

// function updateCounterValue() {
//    counterValueRef.innerHTML = count;
// }

decrementListenerBtn.addEventListener('click', () => {
   counterValueRef.textContent = count -= 1;
});
incrementListenerBtn.addEventListener('click', () => {
   counterValueRef.textContent = count += 1;
});

