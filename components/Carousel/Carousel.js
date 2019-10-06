/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


const carouselContainer = document.querySelector(".carousel-container");

function carousel () {
  const mainContainer = document.createElement('div');
  const button1 = document.createElement('div');
  const image1 = document.createElement('img');
  const image2 = document.createElement('img');
  const image3 = document.createElement('img');
  const image4 = document.createElement('img');
  const button2 = document.createElement('div');

  mainContainer.appendChild(button1);
  mainContainer.appendChild(image1);
  mainContainer.appendChild(image2);
  mainContainer.appendChild(image3);
  mainContainer.appendChild(image4);
  mainContainer.appendChild(button2);

  mainContainer.classList.add('carousel');
  button1.classList.add('left-button');
  button2.classList.add('right-button');

  button1.textContent = '<';
  image1.src = './assets/carousel/mountains.jpeg';
  image2.src = './assets/carousel/computer.jpeg';
  image3.src = './assets/carousel/trees.jpeg';
  image4.src = './assets/carousel/turntable.jpeg';
  button2.textContent = '>';

return mainContainer
}

carouselContainer.appendChild(carousel());
