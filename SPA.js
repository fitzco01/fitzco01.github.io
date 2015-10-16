NewTask = function() {
  var text;
  input = document.querySelector('#text').value;
  list = document.createElement("ul");
  item = document.createElement("li");
  
  document.body.appendChild(list)
  list.appendChild(item)
  item.appendChild(input)
} 
