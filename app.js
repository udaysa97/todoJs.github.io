var todoTasks = 0;
var completedTasks = 0;
var addButton=document.getElementById("addTODO");
var text = document.getElementById("inputBox");
var incompleteTasks = document.getElementById("incompleteTasks");
var completeTasks = document.getElementById("completedTasks");
var todoHolder = document.getElementById("todoLeft");
var completedHolder = document.getElementById("completed");
todoHolder.innerText = todoTasks;
completedHolder.innerText = completedTasks;

var addToList = function(){
	console.log("button Clicked");
	console.log(text.value);

	var listItem=createListNode(text.value);
    incompleteTasks.appendChild(listItem);
    text.value = "";
    todoTasks += 1;
    todoHolder.innerText = todoTasks;
    console.log(todoTasks);
    bindEvents(listItem);

}


var bindEvents = function(listItem){
	var checkBox = listItem.querySelector("input")
	var deleteButton = listItem.querySelector("button.deleteItem");
	console.log(checkBox);
	console.log(deleteButton);
	deleteButton.onclick = removeTask;
	checkBox.onchange = moveToCompleted;
}

var moveToCompleted = function(){
    var completedItem=this.parentNode;
    var checkBox = this.parentNode.querySelector("input");
     var deleteButton = this.parentNode.querySelector("button.deleteItem");
	checkBox.parentNode.removeChild(checkBox);
	deleteButton.parentNode.removeChild(deleteButton);
	completeTasks.appendChild(completedItem);
	
	todoTasks -= 1;
	completedTasks += 1;
	todoHolder.innerText = todoTasks;
	completedHolder.innerText = completedTasks;

}

var removeTask = function(){
	var listItem=this.parentNode;
	console.log("this");
	console.log(this);
	console.log("parent of this");
	console.log(listItem);
		var ul=listItem.parentNode;
		console.log(ul);

		//Remove the parent list item from the ul.
		ul.removeChild(listItem);
		todoTasks -= 1;
		todoHolder.innerText = todoTasks;
}

var createListNode = function(taskName){

	// Create various elements needed to add task to TODO
	var checkBox = document.createElement("input");
	var listItem = document.createElement("label");
	var newList = document.createElement("LI");
	var deleteButton = document.createElement("button");
	// Fill properties and assign classes

	listItem.innerText = taskName;
	checkBox.type = "checkbox";
	deleteButton.innerText = "Delete Task";
	deleteButton.className = "deleteItem";

	// Append all child elements to list

	newList.appendChild(checkBox);
	newList.appendChild(listItem);
	newList.appendChild(deleteButton);
	newList.className = "listProperty";
	return newList;
}

addButton.addEventListener("click",addToList);