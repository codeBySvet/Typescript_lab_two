"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = []; //GLOBAL VARIABLE
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("________New task added_______");
        console.log("Tasks " + task + " has been inserted to the list");
        return this.tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        console.log("START: All items in Array: ");
        this.tasks.forEach(function (task) {
            console.log(task);
        });
        console.log("END: All items in Array: ");
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task); //THIS FINDS WHERE ITS OCCURING IN THE ARRAY
        if (index > -1) { //If it does find the value....
            this.tasks.splice(index, 1); //REMOVE IT FROM THE ARRAY
            console.log("__________Task Removed__________");
            console.log("Task " + task + " has been removed from the list");
        }
        return this.tasks.length;
    };
    return Todo;
}());
var myToDos = new Todo();
myToDos.addTask("Eat");
myToDos.addTask("sleep");
myToDos.addTask("walk");
myToDos.listAllTasks();
myToDos.deleteTask("Sleep");
