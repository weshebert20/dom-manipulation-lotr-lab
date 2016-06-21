console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');

function makeTag(tag, text, parent,cssClass) {
  var tagElement = document.createElement(tag);
  tagElement.textContent = text
  if (cssClass !== undefined){
    tagElement.setAttribute("class", cssClass)
  }
  parent.appendChild(tagElement);
  return tagElement
}


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  var middleEarth = document.createElement("section");
  middleEarth.setAttribute("id", "middle-earth");
  var landTag;
  lands.forEach(function(land){
    landTag = document.createElement("article");
    makeTag("h1", land, landTag);
    middleEarth.appendChild(landTag);
  });
  body.appendChild(middleEarth);
}

makeMiddleEarth();

var rivendellTag = document.querySelectorAll('article')[1];

// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
  var hobbitsListTag = document.createElement("ul");
  var shire = document.querySelector("article");
  var hobbitTag;
  hobbits.forEach(function(hobbit){
    makeTag("li", hobbit, hobbitsListTag, "hobbit")
  })
  shire.appendChild(hobbitsListTag);
}

makeHobbits();
// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var frodo = document.getElementsByClassName('hobbit')[0];
  var theRing = makeTag("div", null, frodo, "magic-imbued-jewelry")
  theRing.setAttribute("id", "the-ring")
  theRing.addEventListener("click", nazgulScreech);
}

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var buddiesTag = document.createElement("aside");
  var buddiesList = document.createElement("ul");
  buddies.forEach(function(buddy){
    makeTag('li', buddy, buddiesList);
  });
  buddiesTag.appendChild(buddiesList);
  rivendellTag.appendChild(buddiesTag);
}

makeBuddies()

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var strider = document.querySelectorAll('aside li')[3]
  strider.textContent = "Aragorn"
}

beautifulStranger()

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  
  var hobbitListTag = document.querySelector('article ul');
  rivendellTag.appendChild(hobbitListTag);
}

setTimeout(leaveTheShire, 1000)
// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var people = document.querySelectorAll('li');
  var theFellowship = document.createElement("div");
  theFellowship.setAttribute('id', 'the-fellowship');
  var theFellowshipList = document.createElement("ul");
  Array.prototype.forEach.call(people, function(person) {
    theFellowshipList.appendChild(person);
    alert(person.textContent + ' had joined the fellowship');
  });
  theFellowship.appendChild(theFellowshipList);
  rivendellTag.appendChild(theFellowship); 
}

setTimeout(forgeTheFellowShip, 1000); 

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
