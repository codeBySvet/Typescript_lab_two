let tasks: string[]=[];

function addTask(task:string): number{

    tasks.push(task);
    console.log("________New task added_______");
    console.log("Tasks "+task +" has been inserted to the list");

    return tasks.length;

}

function listAllTasks():void{

    console.log("START: All items in Array: ")
    tasks.forEach(function(task){
        console.log(task);
    })
    console.log("END: All items in Array: ")

}

function deleteTask(task:string): number{

    let index:number = tasks.indexOf(task); //THIS FINDS WHERE ITS OCCURING IN THE ARRAY
    if (index > -1){    //If it does find the value....
        tasks.splice(index,1); //REMOVE IT FROM THE ARRAY
        console.log("__________Task Removed__________")
        console.log("Task "+task+" has been removed from the list")
    }

    return tasks.length;

}

 addTask("Wake up");
 addTask("Sleep")

 listAllTasks();
 deleteTask("Sleep");
