NewTask = function() {
  input = document.getElementById("#text").value;
  ul = document.getElementById("#mylist");
  item = document.body.createElement("li")
  
  
  document.body.appendChild(ul);
  ul.appendChild(item)
  item.appendChild(input)
} 
//By Monday:
//Have code working so that new tasks can be added
