let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');


addToDoButton.addEventListener('click', function(){
	var spanElement = document.createElement('span');
	var paragraph = document.createElement('p');
	var button = document.createElement('span');

	spanElement.appendChild(paragraph);
	toDoContainer.appendChild(spanElement);
	spanElement.appendChild(button);

	paragraph.innerText = inputField.value;
	button.innerText = " X ";
	inputField.value = "";









	paragraph.addEventListener('click', function(){
		paragraph.style.textDecoration = "line-through";
	})
	button.addEventListener('click', function(){
		spanElement.removeChild(paragraph);
		spanElement.removeChild(button);
		toDoContainer.removeChild(spanElement);
	})
	
})