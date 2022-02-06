const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListRef = document.querySelector('.gallery');

images.forEach(({url, alt}) => {
   galleryListRef.insertAdjacentHTML(
      'beforeend', `<li class='gallery__item'>
    <img class='gallery__image' src='${url}' alt='${alt}' width='300'>
</li>`
   );
   galleryListRef.style.listStyle = 'none';
   galleryListRef.style.display = 'flex';
   galleryListRef.style.flexWrap = 'wrap';
   galleryListRef.style.alignItems = 'center';
   galleryListRef.style.justifyContent = 'space-evenly';
   galleryListRef.style.padding = '0px';
});
 

 
// images.map(item => {   
//    galleryListRef.insertAdjacentHTML(
//       "beforeend", `<li class= 'gallery__item'>
//       <img src='${item.url}' alt='${item.alt}' width ='300'></li>`);
//       galleryListRef.style.listStyle = 'none';
//    galleryListRef.style.display = 'flex';
//    galleryListRef.style.flexWrap = 'wrap';
//    galleryListRef.style.alignItems = 'center';
//    galleryListRef.style.justifyContent = 'space-evenly';
//    galleryListRef.style.padding = '0px';
// })
