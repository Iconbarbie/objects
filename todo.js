const todos = ["order water", "clean compound", "buy food"];
todos[1] = "ride bike";
todos.forEach(function(todo, index) {
    const num = index +1;
    console.log(`${num} --${todo}`);
});

let index = todos.findIndex(function (todo) {
   return todo == "buy food";
});
console.log(index);
    
