/*
  prototype is much more effecient than the last implementation
  of the task class because it just create only one instance of methods inside prototype object.
*/

var Task = function(name){
  this.name = name;
  this.completed= false;
}

Task.prototype.complete = function(){
  console.log(`task ${this.name} now is completed`);
  this.completed = true;
}
Task.prototype.save = function(){
  console.log(this);
  console.log(`saving task ${this.name}`)
}
Task.prototype.details = {created_at: "12:19PM"}
var task1 = new Task("for constructor");
var task2 = new Task("for task2");
var task3 = new Task("for task3");
task1.complete();
task1.save();
task2.complete();
task2.save();
task3.complete();
task2.save();



console.log(task3.__proto__);
console.log(Task.prototype);

//prototypes objects are shared so if you modified it in one instance it changed in all instances
// example
console.log(task1.details.created_at); // "12:19PM" the initial value
task2.details.created_at = "00:00AM";
console.log(task1.details.created_at); // "00:00AM" the new value from task2
