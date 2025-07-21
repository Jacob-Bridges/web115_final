// create empty task list. tasks will be pushed here
    let taskList = []
    //create ID for each task. Start with 0 for indexing and increment for each new task added.
    let taskID= 1

//Event listener to get the values from the user
document.getElementById("add").addEventListener("click", function(event) {
    event.preventDefault();
    
    //This is the DIV element in the HTML
    let taskManager = document.getElementById("taskManager")
    //input from the user on the task
    let taskName = document.getElementById("taskName").value;
    //else,  continue.
    if (!taskName){
        alert('task is required')
    }else{
         //check which urgency level was selected
        let urgency = document.getElementById("urgency").value;
        //check if the important check box was selected
        let isimportant = document.getElementById("isImportant");
        
        // create a date object to get the date the task was added
        let date = new Date()
        let year = date.getFullYear()
        //add one because of 0 indexing
        let month = date.getMonth() +1
        let day = date.getDate()
        
        //taskManager is the HTML DIV. 
        //using innerHTML means I can add extra html when the button is clicked.
        //add the taskname, urgency and date
        //add a new checkbox to check if the task is complete
        //add a buttton to delete the task 
        taskManager.innerHTML += `${taskName} Priority: ${urgency} ${month}/${day}/${year} 
        <label><input type ="checkbox" id = "isCompleted" name = "isCompleted"> Complete</label>
        <button id = 'delete'>Delete</button> <br><br>`
        let isCompleted = document.getElementById("isCompleted")
        let deleteTask = document.getElementById("delete")
        //create task object
        const task = {
            id: taskID++,
            name: taskName,
            isimportant: isimportant.checked,
            isCompleted: isCompleted.checked,
            date: `${month}/${day}/${year}`
        }
        //push new task to taskList
        taskList.push(task)
        //if important is checked, change background color of task
        if (isimportant.checked){
            taskManager.style.backgroundColor= "red"
        }

        //if complete is checked, strike-through task
        isCompleted.addEventListener("click", function(){
            if (isCompleted.checked){
                taskManager.style.textDecoration = "line-through"
            }
        })

        //if delete button is clicked, delete task
        deleteTask.addEventListener('click', ()=>{
            taskManager.remove()
        })
        
  
        
        //log task object in json
        console.log(JSON.stringify(task, null, 2))
        
    }
   

    
    
    
});
