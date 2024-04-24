let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');


addToDoButton.addEventListener('click', function(){
	var paragraph = document.createElement('p');
	toDoContainer.appendChild(paragraph);
	paragraph.innerText = inputField.value;
	inputField.value = "";
	paragraph.addEventListener('click', function(){
		paragraph.style.textDecoration = "line-through";
	})
	paragraph.addEventListener('dblclick', function(){
		toDoContainer.removeChild(paragraph);
	})
	
})