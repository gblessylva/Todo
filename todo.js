// Vavriables

var items = document.getElementById('undone-task');

var addItems =document.getElementById('addItem');

var finished = document.getElementById('undone-task');
var deleteFinished = document.getElementById('done-task')

// Event Listeners

items.addEventListener('click', removeList);
addItems.addEventListener('submit', addLists);
finished.addEventListener('click', moveTask);
deleteFinished.addEventListener('click', removeMoved);

// Fuctions

// Remove Item on the done delete button
function removeMoved(e){
	if (e.target.classList.contains('delete')) {
		if (confirm("Are you sure?")) {
			var li =e.target.parentElement;
			deleteFinished.removeChild(li);

		}
	}
}

// Delete item from undone list
function removeList(e){
	if (e.target.classList.contains('delete')) {
		if (confirm("Are you sure?")) {
			var li =e.target.parentElement;
			items.removeChild(li);

		}
	}
}// End of first fucntion

// Move Task using the done button
function moveTask(e){
	if (e.target.classList.contains('done')) {
		var moved = e.target.parentElement;
		finished.removeChild(moved);		
	var li = document.getElementById('done-task');
	moved.id="doneTaskName";
	li.appendChild(moved);
	
		}

	}

//Add Item to list
function addLists(e){
	e.preventDefault();
	var newList = document.getElementById('addText').value;
		if (newList) {
			// Reset Values
		 var value =	document.getElementById('addText').value = "";
		}
		// Create Elements
	var li = document.createElement('li');
	li.id='taskName';
	li.appendChild(document.createTextNode(newList));

	var delbtn = document.createElement('button');
	delbtn.id ='delete-task';
	delbtn.className ='delete';
	delbtn.appendChild(document.createTextNode('x'));
	li.appendChild(delbtn);

	var donebtn =document.createElement('button');
	donebtn.className='done';
	donebtn.id='done';
	donebtn.appendChild(document.createTextNode('Done'))
	li.appendChild(donebtn);
	items.appendChild(li);

}



