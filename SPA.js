NewTask = function() {
  
  input = document.getElementById("#text");
  txt = document.getElementById('#text').value;
  
  list = document.createElement("ul");
  item = document.createElement("li");

  
  document.body.appendChild(list);
  document.body.appendChild(item);
  document.body.appendChild(txt);
  document.body.appendChild(input);
  
  list.appendChild(item);
  item.appendChild(input);
  item.appendChild(txt);
} 
//By Monday:
//Have code working so that new tasks can be added (completed as far as possible)
