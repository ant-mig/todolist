var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");
var deleteBtn = document.getElementsByClassName("complete");


function removeItem() {
	this.parentNode.remove();
}


for (var i = 0; i < deleteBtn.length; i++) {
	deleteBtn[i].addEventListener("click", removeItem);
}


function toggleList() {
  this.classList.toggle("done");
 }



var list = document.querySelectorAll("li");
for (var i = 0; i < list.length; i++) {
list[i].addEventListener("click", toggleList);
}

function clickThrough(item) {
	item.addEventListener("click", function(){
		item.classList.toggle("done");

	})
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var deleteButton = document.createElement("button");
	deleteButton.setAttribute("class", "complete");
	deleteButton.setAttribute("class", "btn btn-outline-dark");
	deleteButton.style.margin ="10px";
	deleteButton.style.fontWeight ="800";
	deleteButton.appendChild(document.createTextNode("Remove"));
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.style.fontSize= "1.5rem";
	ul.appendChild(li).addEventListener("click", toggleList); //append and toggle on and   off new list items
	li.appendChild(deleteButton).addEventListener("click", removeItem);
	input.value = "";
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

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// list.forEach((e) => {clickThrough(e)}); 
