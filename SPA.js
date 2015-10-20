
NewTask = function() {

  item = document.createElement("li");
  input = document.createElement("INPUT");
  input.type = "checkbox";
  input.id = "newcheck";
  checkbox = document.querySelector("#newcheck");
  checkboxtext = checkbox.value
  text = document.createTextNode(checkboxtext);
  
  list = document.querySelector("#mylist");
  list.appendChild(item);
  item.appendChild(input);
  item.appendChild(text);
} 
//Make the static User Interface
//Wire up the New button
//Create an li
//Create a checkbox
//create a text node
//Use querySelector to get the textbox
//Use the value of the textbox to create the text node
