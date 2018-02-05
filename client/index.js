
/*
Your Tasks:

1. If there is a front end route, render the appropriate data. We have routes on the backend that will send us array of data containing the appropriate cute animals! If there is a front end route, we should send a GET request using AJAX to request those data from the Server. Then we can call `renderView` to render the data to the page.
   a) /#dogs, render all the dogs!
   b) /#cats, render all the cats!
   c) /#dragons, render all the dragons!

2. When a user clicks one of the buttons (event listeners!!), we want to:
   a) Display the appropriate cute animals using `renderView`
   b) change the url to match!

*/

// ALL YOUR CODE HERE
 //dogs
const hash = location.hash.slice(1); //in the window, the url has a hash, to get the valie, we will use slice to get that value
  if (hash === 'dogs') {  //if the hash value equals to a 'animal' we are looking for...
    fetch('/dogs') //fetch all the 'animals'
    //The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.
      .then(res => res.json()) //invoke!
      .then(renderView) //render the view with the results
      .catch(console.error); //take care of the errors
    }
  
  //cats
  const hash = location.hash.slice(1);
  if (hash === 'cats') {
    fetch('/cats') 
      .then(res => res.json()) //invoke!
      .then(renderView) //render the view with the results
      .catch(console.error); //take care of the errors
    }

  //dragons

  const hash = location.hash.slice(1);
  if (hash === 'dragons') {
    fetch('/dragons') 
      .then(res => res.json()) //invoke!
      .then(renderView) //render the view with the results
      .catch(console.error); //take care of the errors
    }

    //function to connect the buttons to the data being rendered

    ['dragon', 'cat','dog'].forEach(animal => { //we have an array with all the animal kinds, we will go through each animal(forEach) and for each animal we will:
      const button = document.getElementById('${animal}-button'); //get an animal assiciated with a button assigned to it's kind
        button.addEventListener('click', () => { //if the button is pressed....fetch animals
          fetch('/${animal}s') //fetch the animal data associated with that animal's kind from the database
          .then(res => res.json()) //then, once the above steps are completed, respond with the json rendered data 
          .then(renderView) //then render the data in the window
          .then(() => location.hash = animal) //then place the animal's name inside the url after the hash?
          .catch(console.error); //catch the arrors if there are any
        })
    })


//This function takes an array of animal objects, and renders them on the page.
//You don't need to change this function!

function renderView(arrOfData) {
  const view = document.getElementById('content');
  //remove anything in the content div if there is something
  if (view.firstChild) view.removeChild(view.firstChild);

  //create a new div
  const list = document.createElement('div');
  list.className = 'list'

  //run through the list of animals
  arrOfData.forEach(animal => {
    //create div for each
    const item = document.createElement('div');
    //set the innerHTML to include the animals name and image
    item.innerHTML = `<div class="item"><h2>${animal.name}</h2><img src=${animal.image} /></div>`
    //append the new div to the list
    list.appendChild(item);
  })
  //append the new list to the content div
  view.appendChild(list);
}
