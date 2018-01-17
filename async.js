console.log("hello");
var world = function() {
  console.log("world");
};
setTimeout(world, 3000);

world() // runs the function
world // refers to the function
