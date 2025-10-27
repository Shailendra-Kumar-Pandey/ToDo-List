const notes = JSON.parse(localStorage.getItem("notes")) || [];

if (notes.length === 0) {
    notes.push({text : ""});
}

let todoList = document.getElementById("todo-list");


function displayLoadData(){
    let totaleRows = "";
    notes.forEach((ele,index) => {
        let row = `<div class="container">
                        <button onclick="closeNote(${index})">X</button>
                        <div class="inner-container">
                            <textarea id="todo-text" onkeyup="addNote(${index}, this.value)" placeholder="Type a new task...">${ele.text}</textarea>
                        </div>
                    </div>`
        totaleRows += row;
    })
    todoList.innerHTML = totaleRows;
}

function addNewItem() {
    notes.push({text : ""});
    displayLoadData();
}


function addNote( index, value) {
    let n ={
        text : null
    }
    if(value===""){
        return
    }else{
        notes[index].text = value;
        savedata();
    }
}

function closeNote(index) {
    notes.splice(index, 1);
    savedata();
    displayLoadData();
}


function savedata() {
    localStorage.setItem("notes", JSON.stringify(notes));
}


    displayLoadData();

    