const containerDiv = document.createElement("div")
const headingElement = document.createElement("h1")
const paragraphElement = document.createElement("p")
const listElement = document.createElement("ul")
const image = document.getElementById("Kenbase")


containerDiv.id = "myDiv"
document.body.appendChild(containerDiv)

headingElement.textContent = "Worlds Worst Fashion Game!!!" 
containerDiv.appendChild(headingElement)

paragraphElement.textContent = "Oh no! Ken has 2 minutes to get ready and needs your help! Can you help him? He needs an outfit for..."
containerDiv.appendChild(paragraphElement)

myDiv.appendChild(listElement)

document.body.appendChild(buttonElement);

// let gamePrompts = [“Jury Duty”, “A Cat Cafe”, “Going shopping at his local strip mall”, “Visiting his sister at a county jail”, “A concert”, “A date”, “The library”, “Continuing his high school education”, “Buying Resident Evil 10 day of release at GameStop”, “Seeing Morbius in theaters”, “Going to an arcade”, “Staying at home all day”, “Going on a cute nature walk”, “a really hot day. Global warming is a real issue.”, “Lunch with friends”, “Getting arrested!”, “A serious talk with his family…”, “Family dinner!”, “Running from loan sharks!”, “Going to his brother's talent show!”, “Watching trash TV alone at 12:30 p.m. on a Friday night!”, “Going to the TMobile store for a new phone.”, “The torture labrynth.”, “A funeral.”, “Going to a car dealership and buying a really expensive car.”, “His minimum wage job. He only works to feel something.”, “Performing with his brother's band!”, “Experiencing Ross Dress For Less for the first time.”]

// var item = items[Math.floor(Math.random()*items.length)];

//Each clothing item will be looped over while being loaded with DOM.

//Click listeners on each cothing item to trigger their appearance on the character sprite.

//Creating the "store" itself. It will load images from a folder and create html elements for each.

//Each clothing item will be part the clothing class and part of one of 5 subclasses (Acessories, Pants, Shirts, Shoes) for layering purposes.