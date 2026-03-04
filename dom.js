const containerDiv = document.createElement("div")
const headingElement = document.createElement("h1")
const paragraphElement = document.createElement("p")
const listElement = document.createElement("ul")
const buttonElement = document.createElement("button")

function generateRandomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  
  return `rgb(${r}, ${g}, ${b})`;
}

containerDiv.id = "myDiv"
document.body.appendChild(containerDiv)

headingElement.textContent = "Welcome to The DOM!!!" 
containerDiv.appendChild(headingElement)

paragraphElement.textContent = "This is your first DOM homework assignment"
containerDiv.appendChild(paragraphElement)

myDiv.appendChild(listElement)

document.body.appendChild(buttonElement);

i = 1
while (i <= 3) {
    const listItem = document.createElement("li")
    listItem.textContent = "list item " + i
    listElement.appendChild(listItem);
    i++
}

buttonElement.type = "button"
buttonElement.innerText = "Click me :3" 

headingElement.className = "highlight"
headingElement.style.backgroundColor = "blue"

buttonElement.addEventListener("click", function(){
    const listItem = document.createElement("li")
    listItem.textContent = "New List Item " + i
    listElement.appendChild(listItem);
    listItem.style.color = generateRandomRgbColor()
    i++
})

containerDiv.addEventListener("click", function(){
    containerDiv.style.backgroundColor = generateRandomRgbColor()
})