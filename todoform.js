let todoarray = JSON.parse(sessionStorage.getItem("todoList")) || [];
const query=new URLSearchParams(location.search)  //gives the content after qn marks in url(query parameter)as string.and creating an object of it using new keyword

const editid=query.get("id")
console.log(editid);
if(editid)
{
    heading.textContent="Edit Todo";
    const tododetails=todoarray.find(todo=>todo.id==editid)
    titleinput.value=tododetails.title;
    dateinput.value=tododetails.date;
    completed.checked=tododetails.status
}
todolistform.addEventListener("submit", (event) => {
    event.preventDefault();

    if(editid)
    {
        const tododetails=todoarray.find(todo=>todo.id==editid)
        tododetails.title=titleinput.value
        tododetails.date=dateinput.value
        tododetails.status=completed.checked
    }
    else {
    todoarray.push({
        id: Date.now(),
        title: titleinput.value,
        date: dateinput.value,
        status: completed.checked
    });
    }

    console.log(todoarray);

    sessionStorage.setItem("todoList", JSON.stringify(todoarray));

    location.href = "index.html";
});

