// class keseluruhan todolist
class todo {
  constructor(isiTodo) {
    this.isiTodo = isiTodo;
  }
}

// class bagian tampilan
class UI {
  static tampilanTodo() {
    const todonya = todoList.ambilTodo();

    todonya.forEach((todo) => UI.tambahTodo(todo));
  }
  static tambahTodo(todoList) {
    const list = document.querySelector("#isitodo");

    const row = document.createElement("ul");

    row.innerHTML = `
    <li class="list-group-item d-flex justify-content-between">
        <input class="form-check-input me-1" type="checkbox" />    
        <label class="form-check-label">${todoList.isiTodo}</label>  
        <button class="badge border-0 btn btn-danger delete"><a> href="#" </a>Delete</button>
    </li> `;

    list.appendChild(row);
  }

  static deleteTodoList(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static alert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector("#box-form");
    container.insertBefore(div, form);

    //set timeout
    setTimeout(() => document.querySelector(".alert"), remove(), 3000);
  }

  static clearFields() {
    document.querySelector("isiTodo").value = "";
  }
}

// local storage
class todoList {
  static ambilTodo() {
    let todonya;
    if (localStorage.getItem("todonya") === null) {
      todonya = [];
    } else {
      todonya = JSON.parse(localStorage.ambilTodo("todonya"));
    }
    return todonya;
  }

  static tambahTodo(todo) {
    const todonya = todoList.ambilTodo();
    todonya.push(todo);
    localStorage.setItem("todonya", JSON.stringify(todonya));
  }

  static hapusTodo(isiTodo) {
    const todonya = todoList.ambilTodo();

    todonya.forEach(todo, (index) => {
      if (todo.isiTodo === isiTodo) {
        todonya.splice(index, 1);
      }
    });

    localStorage.setItem("todonya", JSON.stringify(todonya));
  }
}

//  bagian tampilin 
document.addEventListener("DOMContentLoaded", UI.tampilanTodo);

// event : tambah buku 
document.querySelector('#book-form').addEventListener("submit", (e) => ) {
  e.preventDefault();
}