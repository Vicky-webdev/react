🔆 To create an HTML element using JavaScript, you can use the document.createElement() method.

🔆 This method takes the tag name of the element you want to create
as its argument and returns a new element object.

// Create a new div element
var newDiv = document.createElement("div");

🔆 Once you have created an element, you can append it to another element using the appendChild() method.

🔆You can also set attributes on the element using the setAttribute() method

newDivElement.setAttribute("id", "myDiv");

🔆 Add text content to the element you created using the textContent property

newDivElement.textContent = 'Hello, world!';

🔆 insertBefore() method
to insert an element before another element. This method takes an element object as the first argument, the element to insert it before as the second argument, and an empty element object as the third argument

const paragraphElement = document.createElement("p");

const bodyElement = document.body;
bodyElement.appendChild(paragraphElement);

const firstChildElement = bodyElement.firstChild;
bodyElement.insertBefore(paragraphElement, firstChildElement);
