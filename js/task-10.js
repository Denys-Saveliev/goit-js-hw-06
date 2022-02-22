// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество
//  элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
//  При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.
// 1. Размеры самого первого <div> - 30px на 30px.
// 2. Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// 3. Все элементы должены иметь случайный цвет фона в формате HEX.
// 4. Используй готовую функцию getRandomHexColor для получения цвета.
// 5. Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
//    тем самым удаляя все созданные элементы.

const refs = {
   inputRef: document.querySelector('#controls').firstElementChild,
   createBtn: document.querySelector('[data-create]'),
   destroyBtn: document.querySelector('[data-destroy]'),   
   parentOfNewBoxes: document.querySelector('#boxes'),
}
let initialSizeOfBox = 30;
function createBoxes(amount) {
   let sizeBox = 0;
   const boxElements = [];
   for (let i = 0; i < amount; i += 1) {
      const boxElement = document.createElement('div');
      boxElement.style.backgroundColor = getRandomHexColor();
      boxElement.style.display = 'block';
      sizeBox = initialSizeOfBox + i * 10;
      boxElement.style.width = `${sizeBox}px`;
      boxElement.style.height = `${sizeBox}px`;
      boxElements.push(boxElement);
   }
   return boxElements; 
}
refs.createBtn.addEventListener('click', onCreateBtnClick);
function onCreateBtnClick() {
   const amountOfBoxes = createBoxes(refs.inputRef.value);
   refs.parentOfNewBoxes.append(...amountOfBoxes);
}
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);
function onDestroyBtnClick() {
   refs.parentOfNewBoxes.innerHTML = '';
   refs.inputRef.value = '';
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}