var list = document.getElementById("list");

function addToDo(){
    var todo_item = document.getElementById("todo-item");
    
    // create li tag with text node //
    var li = document.createElement('li');
    var liText = document.createTextNode(todo_item.value);
    li.setAttribute("class", "list");
    li.appendChild(liText);

     // create delete button //
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Delete");
    delBtn.appendChild(delText);
    delBtn.setAttribute("class", "btn1");
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.appendChild(delText);


      // create edit ebutton //
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.setAttribute("class", "btn2");
    editBtn.appendChild(editText);
    editBtn.setAttribute("onclick", "editItem(this)")

    li.appendChild(delBtn);
    li.appendChild(editBtn);
    list.appendChild(li);

    todo_item.value = ""
    console.log(li);
}

function deleteAll(){
    list.innerHTML = " "
}

function deleteItem(e){
    e.parentNode.remove();
     
 }

 function editItem(e){

    var val = prompt("Enter Updated Value", e.parentNode.firstChild.nodeValue )
    e.parentNode.firstChild.nodeValue = val;
}