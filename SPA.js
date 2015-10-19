NewTask = function() {
  var text;
  input = document.getElementById('#text').value;
  list = document.querySelector("mylist");
  item = document.createElement("li");
  
  document.body.appendChild(list)
  document.body.appendChild(item)
  document.body.appendChild(input)
  
  list.appendChild(item)
  item.appendChild(input)
} 
//Query Selector is an HTML element
//By Monday:
//Have code working so that new tasks can be added (completed as far as possible)
