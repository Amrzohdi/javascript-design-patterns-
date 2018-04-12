var Task = function(name){
  this.name = name;
  this.completed= false;

  this.complete = function (){
    console.log(`task ${this.name} now is completed`);
    this.completed = true;
  }

  this.save = function(){
    console.log(`saving task ${this.name}`)
  }
}


var task1 = new Task("for constructor");
task1.complete();
task1.save();
