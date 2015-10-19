NewTask = function() {
  input = document.getElementById("#text");
  inputtext = document.getElementById("#text").value;
  ul = document.getElementById("#mylist");
  item = document.createElement(li);
  
  document.body.appendChild(ul);
  document.body.appendChild(inputtext);
  document.body.appendChild(item);
  document.body.appendChild(input);
  
  ul.appendChild(item);
  item.appendChild(input);
  item.appendChild(inputtext);
} 
//By Monday:
//Have code working so that new tasks can be added
