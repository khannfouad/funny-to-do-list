let squares = [];
const grid = document.getElementById("grid");
let btn = document.getElementById("btn");
let input  = document.getElementById("input");
let taskList = document.getElementById("task-list");
const doneButton = document.getElementById("done-button");
let doneTask = document.getElementById("done-task");
let taskCount = 0;
let heroMovement = 0;
let doneClick = 0;

function createGrid() {

    for(let i = 0 ; i < 100 ; i++){

        const square = document.createElement("div");

        square.classList.add("square");

        grid.appendChild(square);

        squares.push(square)

    }


    
}



function todoList (){
    let task = document.createElement("li");

    task.textContent = `${input.value}`;

    taskList.appendChild(task);

    input.value = "";

    taskCount++;
    
    task.addEventListener("click", function(){

        task.classList.add("done");
    
        squares[heroMovement].classList.remove("hero");
        heroMovement++;
        squares[heroMovement].classList.add("hero");

        if((heroMovement+1)===taskCount) {
            grid.textContent = "Yayy !! You have united two friends be proud of yourself !"
        }

        
    })

    console.log(taskCount)
}


btn.addEventListener("click", todoList)
createGrid()


function noButtonTask() {

    doneTask.textContent = "Okay !!"

    const secondDoneButton = document.createElement("button");

    doneTask.appendChild(secondDoneButton);

    secondDoneButton.textContent = "Done";

    secondDoneButton.addEventListener("click", doneButtonTask)
}

function yesButtonTask() {

    doneTask.textContent = "Help Them Reunite by completing your Tasks!!" ;
       taskCount = taskCount + 1;
       squares[taskCount].classList.add("heroine")
       squares[heroMovement].classList.add("hero");
}

function doneButtonTask() {

    if (taskCount === 0) {
        doneTask.textContent = "Please Enter Task."

        let redoDone = document.createElement("button");
        redoDone.textContent = "Done";
        doneTask.appendChild(redoDone)

        redoDone.addEventListener("click", doneButtonTask)
    }

    else{
    doneTask.textContent = "Are all of your Tasks listed?"

    const yesTask = document.createElement("button");

    yesTask.textContent = "YES"

    doneTask.appendChild(yesTask);

    yesTask.addEventListener("click",yesButtonTask)

    const noTask = document.createElement("button");

    noTask.textContent = "NO"

    doneTask.appendChild(noTask);

    
    noTask.addEventListener("click", noButtonTask)
    }

}

doneButton.addEventListener("click", doneButtonTask)
