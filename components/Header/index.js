// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const container = document.querySelector('.header-container');
console.log(container);

function header() {
    //create each element
    const headerContainer = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    // append each element where it belongs
    headerContainer.appendChild(date);
    headerContainer.appendChild(title);
    headerContainer.appendChild(temp);

    // add class to each element
    headerContainer.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    // add text content to each element
    date.textContent = "MARCH 28, 2019";
    title.textContent = "Lambda Times";
    temp.textContent = "98°";

    return headerContainer
}

container.append(header());