let todoarray = JSON.parse(sessionStorage.getItem("todoList")) || [];
function displaytodolist()
{
    todoarray = JSON.parse(sessionStorage.getItem("todoList")) || [];
    result.innerHTML=" "
    todoarray.forEach(todo=>
  {
    result.innerHTML +=
    `
       <tr>
                <td>${todo.id}</td>
                <td>${todo.title}</td>
                <td>${todo.date}</td>
                <td>${todo.status?"completed":"pending"}</td>
                <td>
                    <div class="d-flex">
                        <a href="manage.html?id=${todo.id}" class="btn btn-warning">Edit</a>
                        <button class="btn btn-danger ms-2" onclick="deletetodo(${todo.id})">Delete</button>
                    </div>
                </td>
            </tr>
    `
  }
  )

}
displaytodolist()
//delete todolist from the table
function deletetodo(id)
{
    const newtodoarray=todoarray.filter((todo)=>todo.id!=id)
    sessionStorage.setItem("todoList",JSON.stringify(newtodoarray))
    displaytodolist();
}
