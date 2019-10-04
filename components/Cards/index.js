// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response);
        // response.data.articles.forEach(info => {
        //     console.log(info);
        // })
    })

    .catch(error => {
        console.log('No information was received.', error);
    });

    const entryPoint = document.querySelector('.topics');

     
    function cards(info) {
    // create cards component
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const authorContainer = document.createElement('div');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const author = document.createElement('span');

    // set class for each element
    card.classList.add('card');
    headline.classList.add('headline');
    authorContainer.classList.add('author');
    imgContainer.classList.add('image-container');

    // append each element accordingly
    card.appendChild(headline);
    card.appendChild(authorContainer);
    authorContainer.appendChild(imgContainer);
    imgContainer.appendChild(image);
    authorContainer.appendChild(author);

    // set element content
    headline.textContent = `${info.data.articles.headline}`;
    image.src = `${info.data.articles.authorPhoto}`;
    author.textContent = `By ${info.data.articles.authorName}`;

    return card
    }
