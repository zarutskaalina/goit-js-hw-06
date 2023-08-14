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

const galleryList = document.querySelector('.gallery');

const createList = images.forEach(image => {
  const listElement = document.createElement('li');
  const listImage = document.createElement('img');
  listElement.append(listImage);
  listImage.setAttribute('url', image.url);
  listImage.setAttribute('alt', image.alt);
  galleryList.append(listElement);
  console.log(listElement);

  listElement.style.display = 'block';
  listElement.style.marginBottom = '10px';
});



// const createList = images
// .map(image => `<li><img>${image.url}${image.alt}</img></li>`)
// .join("");
// console.dir(createList);
// galleryList.insertAdjacentHTML("beforeend", createList);