  DoneTask = function() {
    if(this.checked) {
    this.parentNode.classList.add("Done")
    }
    else {
      this.parentNode.classList.remove("Done")
    }
  localSave("mylist"); 
  }
NewTask = function() {
  textbox = document.querySelector("#textbox");
  priority = document.querySelector("#priority");
  
  ul = document.querySelector("#mylist");
  item = document.createElement("li");
  item.classList.add(priority.value);
  
  input = document.createElement("INPUT");
  input.type = "checkbox"
  input.onclick = DoneTask;

  text = document.createTextNode(textbox.value)
  
  ul.appendChild(item)
  item.appendChild(input)
  item.appendChild(text)
  
  localSave("mylist")
}
  window.onload = function() {restoreList("mylist", DoneTask); }
