var Creature = function(name,age){
  this.name = name;
  this.age  = age;
  this.get_name = function(){
    return this.name;
  }
};
Creature.prototype.move = function(){
  console.log("Sorry I can't move");
}


var Cat = function(name,age,color,speed){
  Creature.apply(this,[name,age]);
  this.color = color;
  this.speed = speed;
}
Cat.prototype = Object.create(Creature.prototype);
Cat.prototype.move = function(){
  console.log(`I can move by ${this.speed} per hour`);
}

cat = new Cat("Nany",10,"Red",100);

cat.move();
console.log(cat.get_name());
console.log(cat.__proto__);
