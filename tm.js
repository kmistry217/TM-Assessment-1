const lodash = require('lodash')
const moment = require('moment')
const Task = require('./model/Task')


// data structure ( list | map )
let tasks = [];

function addNewTask(text) {
    let id = tasks.length+1;
    const newTask = new Task(id, text);
    tasks.push(newTask);
    return newTask;
    
}

function editTask(id, category, edit) {
    index = tasks.findIndex(function(task) { return task.id === id} )

    if (category == "schedule"){
        let date = moment(edit, "MM-DD-YYYY").toDate();
        tasks[index][category] = date;
    }
    else {  
        tasks[index][category] = edit;
    }
    return tasks;
}

function viewTasks() {
    for (task of tasks){
        console.log(task.text + " DUE ON: " + moment(task.schedule).format('MM-DD-YYYY'));
    }
}

function searchTasks(query) {
    let matchTask = []

    tasks.forEach((task) =>{
        if (task.text.includes(query)){
            matchTask.push(task)
        }
    })

    return matchTask;
}

function setTasks(array){
    tasks = array;
}



console.log("\nADD TASKS");
console.log(addNewTask("sample task 1"));
console.log(addNewTask("sample task 2"));

console.log("\nVIEW TASKS");
viewTasks();

console.log("\nEDIT TASKS")
console.log(editTask(1, "project", "project2"));
console.log(editTask(2, "project", "project3"));
console.log(editTask(2, "label", "project3"));
console.log(editTask(2, "schedule", "12-03-2020"))

console.log("\nSEARCH TASKS");
console.log(searchTasks("task"));


module.exports = {
    addNewTask, editTask, viewTasks, searchTasks, setTasks
}