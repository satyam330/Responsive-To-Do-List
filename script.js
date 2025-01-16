const inputBox =document.getElementById('inputBox');
const addBtn =document.getElementById('addBtn');
const todoList =document.getElementById('todoList');

const addTodo = () =>{
    const inputText = inputBox.value.trim();
    if(inputText.length <= 0){
        alert("You Must Write Something in Your To Do");
        return false;
    }

    //Creating p 
    const li =document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML =inputText;
    li.appendChild(p);

    //Creating delete Btn
    const deleteBtn =document.createElement("button");
    deleteBtn.innerHTML = "Remove";
    li.appendChild(deleteBtn);

    //Creating edit Btn
    const editBtn =document.createElement("button");
    editBtn.innerHTML = "Edit";
    li.appendChild(editBtn);

    
    todoList.appendChild(li);
    inputBox.value= "";
}
addBtn.addEventListener('click',addTodo);

