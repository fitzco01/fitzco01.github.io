NewTask = function() {
  input = document.getElementById("#text").value;
  ul = document.getElementById("#mylist");
  li = document.getElementById("#item")
  
  document.body.appendChild(ul);
  document.body.appendChild(input)
  document.body.appendChild(li)
  
  ul.appendChild(li)
  li.appendChild(input)
} 
//By Monday:
//Have code working so that new tasks can be added
