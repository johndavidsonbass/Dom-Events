var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ol");
var list = document.getElementsByTagName("li");
var classDone = document.getElementsByClassName("done");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	cycleList();
}

function deleteListElement() {
		ul.removeChild(event.target.parentElement);
		cycleList();
}

function createDeleteButton() {
		var delButton = document.createElement("BUTTON");
		var delText = document.createTextNode("Delete");
		delButton.addEventListener("click", deleteListElement);
		delButton.appendChild(delText);
		event.target.appendChild(delButton);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDoneAfterClick() {

	 	event.target.classList.toggle("done");
		if (event.target.className == "done") {
			createDeleteButton();
		} else {
			event.target.removeChild(event.target.lastElementChild);
		}
}

function cycleList() {
	for (i = 0; i < list.length; i++) {
	  list[i].addEventListener("click", toggleDoneAfterClick);
		list[i].value = i + 1;
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

cycleList();
