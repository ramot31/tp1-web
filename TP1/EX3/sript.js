document.addEventListener("DOMContentLoaded", () => {
    const todoName = document.getElementById("todoName");
    const todoContent = document.getElementById("todoContent");
    const addTodo = document.getElementById("addTodo");
    const todoList = document.getElementById("todoList");

    addTodo.addEventListener("click", () => {
        if (todoName.value.trim() === "" || todoContent.value.trim() === "") {
            alert("Veuillez remplir les champs !");
            return;
        }

        const li = document.createElement("li");
        li.innerHTML = `<strong>${todoName.value}:</strong> ${todoContent.value} 
       <button class="delete">X</button>`;

        todoList.appendChild(li);

        li.querySelector(".delete").addEventListener("click", () => {
            li.remove();
        });

        todoName.value = "";
        todoContent.value = "";
    });
});
