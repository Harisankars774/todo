let todoarray=[]
todolistform.addEventListener('submit',(event)=>
{
    event.preventDefault();

    todoarray.push({
        id:Date.now()
        title:titleinput.value;
        date:dateinput.value;
        status:completed.checked;

    })
    console.log(todoarray);
})