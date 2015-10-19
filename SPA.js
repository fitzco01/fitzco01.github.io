NewTask = function() {
  var text;
  input = document.querySelector('#text').value;
  list = document.querySelector("mylist");
  item = document.createElement("li");
  
  document.body.appendChild(list)
  list.appendChild(item)
  item.appendChild(input)
} 
//Query Selector is an HTML element
//By Monday:
//Have code working so that new tasks can be added (completed as far as possible)
